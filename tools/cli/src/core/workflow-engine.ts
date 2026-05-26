import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';
import { 
  SkillWorkflow, 
  WorkflowStage, 
  WorkflowExecutionContext,
  SkillResult,
  InvocationParams
} from '../types';
import { skillRegistry } from './skill-registry';

/**
 * WorkflowEngine - Executes multi-stage workflows
 * 
 * Manages workflow execution with:
 * - Dependency resolution
 * - Stage orchestration
 * - Output passing between stages
 * - Progress tracking
 * - Error handling
 */
export class WorkflowEngine {
  private workflows: Map<string, SkillWorkflow> = new Map();

  constructor() {
    this.loadBuiltinWorkflows();
  }

  /**
   * Load predefined workflows
   */
  private loadBuiltinWorkflows(): void {
    const builtinWorkflows: SkillWorkflow[] = [
      {
        name: 'idea-to-spec',
        description: '从概念到技术规格文档',
        stages: [
          {
            name: 'clarify',
            skill: 'landing',
            inputs: {},
            outputs: ['problemStatement', 'successCriteria'],
          },
          {
            name: 'prd',
            skill: 'product-builder',
            inputs: {
              problem: '${clarify.problemStatement}'
            },
            outputs: ['prdDocument', 'userStories'],
            dependsOn: ['clarify']
          },
          {
            name: 'validate',
            skill: 'strategic-decision',
            inputs: {
              plan: '${prd.prdDocument}',
              mode: 'technical-validation'
            },
            outputs: ['validationResult', 'technicalSpec'],
            dependsOn: ['prd']
          }
        ]
      },
      {
        name: 'idea-validation',
        description: '快速验证想法',
        stages: [
          {
            name: 'clarify',
            skill: 'landing',
            inputs: {},
            outputs: ['problemStatement', 'successCriteria'],
          },
          {
            name: 'validate',
            skill: 'strategic-decision',
            inputs: {
              mode: 'quick-validation'
            },
            outputs: ['validationResult'],
            dependsOn: ['clarify']
          }
        ]
      },
      {
        name: 'product-design',
        description: '完整的产品设计流程',
        stages: [
          {
            name: 'clarify',
            skill: 'landing',
            inputs: {},
            outputs: ['problemStatement', 'successCriteria'],
          },
          {
            name: 'prd',
            skill: 'product-builder',
            inputs: {
              problem: '${clarify.problemStatement}'
            },
            outputs: ['prdDocument', 'userStories'],
            dependsOn: ['clarify']
          }
        ]
      }
    ];

    builtinWorkflows.forEach(workflow => {
      this.workflows.set(workflow.name, workflow);
    });

    console.log(chalk.gray(`\n✓ Loaded ${this.workflows.size} builtin workflows\n`));
  }

  /**
   * Load workflow from file
   */
  loadWorkflowFromFile(filePath: string): SkillWorkflow | null {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const workflow = JSON.parse(content) as SkillWorkflow;
      this.validateWorkflow(workflow);
      this.workflows.set(workflow.name, workflow);
      return workflow;
    } catch (error) {
      console.error(chalk.red(`✗ Failed to load workflow from ${filePath}:`), error.message);
      return null;
    }
  }

  /**
   * Register a workflow
   */
  register(workflow: SkillWorkflow): void {
    this.validateWorkflow(workflow);
    this.workflows.set(workflow.name, workflow);
    console.log(chalk.green(`✓ Registered workflow: ${workflow.name}`));
  }

  /**
   * Find workflow by name
   */
  find(name: string): SkillWorkflow | undefined {
    return this.workflows.get(name);
  }

  /**
   * List all workflows
   */
  list(): SkillWorkflow[] {
    return Array.from(this.workflows.values());
  }

  /**
   * List workflow names
   */
  getWorkflowNames(): string[] {
    return Array.from(this.workflows.keys());
  }

  /**
   * Validate workflow structure
   */
  validateWorkflow(workflow: SkillWorkflow): void {
    if (!workflow.name) {
      throw new Error('Workflow must have a name');
    }
    if (!workflow.stages || workflow.stages.length === 0) {
      throw new Error('Workflow must have at least one stage');
    }

    workflow.stages.forEach(stage => {
      if (!stage.name) {
        throw new Error('Each stage must have a name');
      }
      if (!stage.skill) {
        throw new Error(`Stage ${stage.name} must specify a skill`);
      }
      if (stage.dependsOn) {
        stage.dependsOn.forEach(dep => {
          const exists = workflow.stages.some(s => s.name === dep);
          if (!exists) {
            throw new Error(`Stage ${stage.name} depends on non-existent stage ${dep}`);
          }
        });
      }
    });
  }

  /**
   * Resolve execution order based on dependencies
   */
  resolveExecutionOrder(workflow: SkillWorkflow): WorkflowStage[] {
    const stages = [...workflow.stages];
    const ordered: WorkflowStage[] = [];
    const resolved = new Set<string>();

    const canExecute = (stage: WorkflowStage): boolean => {
      if (!stage.dependsOn || stage.dependsOn.length === 0) {
        return true;
      }
      return stage.dependsOn.every(dep => resolved.has(dep));
    };

    while (ordered.length < stages.length) {
      let found = false;

      for (const stage of stages) {
        if (resolved.has(stage.name)) continue;
        if (!canExecute(stage)) continue;

        ordered.push(stage);
        resolved.add(stage.name);
        found = true;
      }

      if (!found && ordered.length < stages.length) {
        throw new Error('Circular dependency detected in workflow');
      }
    }

    return ordered;
  }

  /**
   * Resolve input variables
   */
  resolveInputs(inputs: Record<string, any>, context: Record<string, any>): Record<string, any> {
    const resolved: Record<string, any> = {};

    for (const [key, value] of Object.entries(inputs)) {
      if (typeof value === 'string' && value.startsWith('${') && value.endsWith('}')) {
        const variable = value.slice(2, -1);
        const [stageName, varName] = variable.split('.');

        if (stageName === 'input') {
          resolved[key] = context[varName];
        } else if (context[stageName]) {
          resolved[key] = context[stageName][varName];
        } else {
          resolved[key] = value;
        }
      } else {
        resolved[key] = value;
      }
    }

    return resolved;
  }

  /**
   * Execute a workflow
   */
  async execute(
    workflowName: string,
    inputContext: Record<string, any> = {},
    options: {
      interactive?: boolean;
      skip?: string[];
      onProgress?: (stage: string, result: SkillResult) => void;
    } = {}
  ): Promise<{
    success: boolean;
    outputs: Record<string, any>;
    stages: Array<{
      name: string;
      skill: string;
      result: SkillResult;
      duration: number;
    }>;
  }> {
    const workflow = this.find(workflowName);
    
    if (!workflow) {
      throw new Error(`Workflow "${workflowName}" not found`);
    }

    const orderedStages = this.resolveExecutionOrder(workflow);
    const stageOutputs: Record<string, any> = {};
    const stageResults: Array<{
      name: string;
      skill: string;
      result: SkillResult;
      duration: number;
    }> = [];

    console.log(chalk.bold.cyan('\n' + '═'.repeat(60)));
    console.log(chalk.bold.cyan(`  执行工作流: ${workflow.name}`));
    console.log(chalk.bold.cyan('═'.repeat(60) + '\n'));

    for (const stage of orderedStages) {
      const startTime = Date.now();

      if (options.skip && options.skip.includes(stage.name)) {
        console.log(chalk.yellow(`⏭ 跳过阶段: ${stage.name}\n`));
        continue;
      }

      console.log(chalk.cyan(`\n📌 阶段 ${stageResults.length + 1}/${orderedStages.length}: ${stage.name}`));
      console.log(chalk.gray(`   技能: ${stage.skill}\n`));

      const resolvedInputs = this.resolveInputs(stage.inputs, {
        input: inputContext,
        ...stageOutputs
      });

      try {
        const result = await skillRegistry.invoke(stage.skill, {
          context: inputContext,
          inputs: resolvedInputs,
          options: {
            timeout: 300000
          }
        });

        const duration = Date.now() - startTime;

        if (result.success) {
          console.log(chalk.green(`✓ 阶段完成 (${duration}ms)\n`));
          
          stageOutputs[stage.name] = result.outputs;
          
          stageResults.push({
            name: stage.name,
            skill: stage.skill,
            result,
            duration
          });

          if (options.onProgress) {
            options.onProgress(stage.name, result);
          }
        } else {
          console.log(chalk.red(`✗ 阶段失败\n`));
          
          if (result.error) {
            console.log(chalk.red(`  错误: ${result.error.message}\n`));
          }

          return {
            success: false,
            outputs: stageOutputs,
            stages: stageResults
          };
        }
      } catch (error) {
        console.log(chalk.red(`✗ 阶段执行错误: ${error.message}\n`));
        
        return {
          success: false,
          outputs: stageOutputs,
          stages: stageResults
        };
      }
    }

    console.log(chalk.bold.cyan('\n' + '═'.repeat(60)));
    console.log(chalk.bold.green('✓ 工作流执行完成'));
    console.log(chalk.bold.cyan('═'.repeat(60) + '\n'));

    return {
      success: true,
      outputs: stageOutputs,
      stages: stageResults
    };
  }

  /**
   * Display workflow information
   */
  displayWorkflow(workflow: SkillWorkflow): void {
    console.log(chalk.bold('\n工作流信息:'));
    console.log(chalk.cyan('  名称: ') + workflow.name);
    console.log(chalk.cyan('  描述: ') + workflow.description);
    console.log(chalk.cyan('  阶段数: ') + workflow.stages.length);

    console.log(chalk.bold('\n阶段列表:'));
    workflow.stages.forEach((stage, index) => {
      const deps = stage.dependsOn && stage.dependsOn.length > 0
        ? ` (依赖: ${stage.dependsOn.join(', ')})`
        : '';
      const optional = stage.optional ? ' [可选]' : '';
      
      console.log(
        chalk.cyan(`  ${index + 1}. `) + 
        chalk.bold(stage.name) + 
        ` - ${stage.skill}${deps}${optional}`
      );
    });

    console.log();
  }
}

export const workflowEngine = new WorkflowEngine();
