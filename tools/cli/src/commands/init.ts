import { Command } from 'commander';
import chalk from 'chalk';
import { interactionManager } from '../utils/inquirer';
import { skillRegistry } from '../core/skill-registry';
import { InitOptions, SkillWorkflow } from '../types';

/**
 * Predefined workflow templates
 */
const WORKFLOW_TEMPLATES: Record<string, SkillWorkflow> = {
  'idea-validation': {
    name: 'idea-validation',
    description: '从概念到产品验证的完整路径',
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
        inputs: {},
        outputs: ['validationResult'],
        dependsOn: ['clarify']
      }
    ]
  },
  'product-design': {
    name: 'product-design',
    description: '从想法到完整产品规格文档',
    stages: [
      {
        name: 'clarify',
        skill: 'landing',
        inputs: {},
        outputs: ['problemStatement', 'successCriteria'],
      },
      {
        name: 'design',
        skill: 'product-builder',
        inputs: {},
        outputs: ['prdDocument', 'userStories'],
        dependsOn: ['clarify']
      },
      {
        name: 'validate',
        skill: 'strategic-decision',
        inputs: {},
        outputs: ['technicalSpec'],
        dependsOn: ['design']
      }
    ]
  },
  'tech-selection': {
    name: 'tech-selection',
    description: '技术选型和架构设计',
    stages: [
      {
        name: 'context',
        skill: 'landing',
        inputs: {},
        outputs: ['problemStatement'],
      },
      {
        name: 'decision',
        skill: 'strategic-decision',
        inputs: { mode: 'technical-validation' },
        outputs: ['technicalSpec'],
        dependsOn: ['context']
      }
    ]
  },
  'market-analysis': {
    name: 'market-analysis',
    description: '市场分析和增长策略',
    stages: [
      {
        name: 'research',
        skill: 'research-integration',
        inputs: {},
        outputs: ['researchResults'],
      },
      {
        name: 'strategy',
        skill: 'marketing-growth',
        inputs: {},
        outputs: ['growthStrategy'],
        dependsOn: ['research']
      }
    ]
  },
  'idea-to-spec': {
    name: 'idea-to-spec',
    description: '从概念到技术规格文档（推荐）',
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
        inputs: {},
        outputs: ['prdDocument'],
        dependsOn: ['clarify']
      },
      {
        name: 'validate',
        skill: 'strategic-decision',
        inputs: { mode: 'technical-validation' },
        outputs: ['validationResult', 'technicalSpec'],
        dependsOn: ['prd']
      }
    ]
  }
};

/**
 * Question sets for different workflows
 */
const GOAL_QUESTIONS = [
  {
    type: 'select' as const,
    name: 'goal',
    message: '请选择你的目标：',
    choices: [
      { name: 'Idea 验证', value: 'idea-validation', description: '验证你的想法是否值得做' },
      { name: '产品设计', value: 'product-design', description: '从想法到完整的产品规格' },
      { name: '技术选型', value: 'tech-selection', description: '选择技术栈和架构方案' },
      { name: '市场分析', value: 'market-analysis', description: '分析市场和制定增长策略' },
      { name: '自定义组合', value: 'custom', description: '自己组合工作流阶段' }
    ]
  },
  {
    type: 'select' as const,
    name: 'timeConstraint',
    message: '你有多少时间？',
    choices: [
      { name: '30分钟', value: '30m', description: '快速验证概念' },
      { name: '1小时', value: '1h', description: '完整验证一个想法' },
      { name: '2小时', value: '2h', description: '深入分析和规划' },
      { name: '不限', value: 'unlimited', description: '全面深入的工作' }
    ]
  },
  {
    type: 'select' as const,
    name: 'background',
    message: '你的背景是？',
    choices: [
      { name: '全能型', value: 'fullstack', description: '什么都想做，什么都会一点' },
      { name: '技术型', value: 'technical', description: '擅长技术，缺产品和商业思维' },
      { name: '业务型', value: 'business', description: '擅长业务和运营，技术较弱' }
    ]
  }
];

/**
 * Generate workflow based on user selections
 */
function generateWorkflow(goal: string, timeConstraint: string, background: string): SkillWorkflow {
  const baseWorkflow = WORKFLOW_TEMPLATES[goal];
  
  if (!baseWorkflow) {
    throw new Error(`Unknown goal: ${goal}`);
  }

  const timeMultiplier = getTimeMultiplier(timeConstraint);
  
  const workflow = { ...baseWorkflow };

  workflow.stages = baseWorkflow.stages.map(stage => ({
    ...stage,
    inputs: {
      ...stage.inputs,
      timeConstraint,
      background,
      timeMultiplier
    }
  }));

  return workflow;
}

/**
 * Get time multiplier based on constraint
 */
function getTimeMultiplier(constraint: string): number {
  switch (constraint) {
    case '30m': return 0.5;
    case '1h': return 1;
    case '2h': return 2;
    case 'unlimited': return 5;
    default: return 1;
  }
}

/**
 * Display workflow preview
 */
function displayWorkflowPreview(workflow: SkillWorkflow): void {
  interactionManager.printHeader('推荐工作流预览');

  console.log(chalk.bold('工作流名称: ') + workflow.name);
  console.log(chalk.bold('描述: ') + workflow.description + '\n');

  console.log(chalk.bold('执行阶段:\n'));

  workflow.stages.forEach((stage, index) => {
    const deps = stage.dependsOn && stage.dependsOn.length > 0 
      ? chalk.gray(` (依赖: ${stage.dependsOn.join(', ')})`) 
      : '';
    
    const optional = stage.optional ? chalk.yellow(' [可选]') : '';
    
    console.log(
      chalk.cyan(`${index + 1}. `) + 
      chalk.bold(stage.name) + 
      ` - ${stage.skill}${deps}${optional}`
    );
  });

  console.log();
}

/**
 * Interactive init flow
 */
async function interactiveInit(): Promise<void> {
  interactionManager.clear();
  interactionManager.printHeader('SOLO CORN SKILLS - 项目初始化');

  console.log(chalk.gray('让我们一步步来创建你的工作流...\n'));

  const answers = await interactionManager.askMany(GOAL_QUESTIONS);

  if (answers.goal === 'custom') {
    await handleCustomWorkflow();
  } else {
    await handlePredefinedWorkflow(answers);
  }
}

/**
 * Handle predefined workflow selection
 */
async function handlePredefinedWorkflow(answers: any): Promise<void> {
  const workflow = generateWorkflow(
    answers.goal,
    answers.timeConstraint,
    answers.background
  );

  displayWorkflowPreview(workflow);

  const confirmed = await interactionManager.ask({
    type: 'confirm',
    name: 'confirm',
    message: '确认使用此工作流？',
    default: true
  });

  if (confirmed) {
    await saveWorkflow(workflow);
    interactionManager.printSuccess('工作流已保存！');
    printNextSteps(workflow);
  } else {
    interactionManager.printWarning('好的，让我们重新选择...');
    await interactiveInit();
  }
}

/**
 * Handle custom workflow creation
 */
async function handleCustomWorkflow(): Promise<void> {
  interactionManager.printInfo('自定义工作流功能开发中...');
  
  const availableSkills = skillRegistry.list();
  
  if (availableSkills.length === 0) {
    interactionManager.printWarning('暂无可用的 Skills');
    return;
  }

  interactionManager.printSuccess(`发现 ${availableSkills.length} 个可用的 Skills`);

  console.log(chalk.bold('\n可用的 Skills:\n'));
  availableSkills.forEach((skill, index) => {
    console.log(chalk.cyan(`${index + 1}. `) + skill.name);
    console.log(chalk.gray(`   ${skill.description}\n`));
  });

  interactionManager.printInfo('自定义工作流将通过 scs run 命令实现');
}

/**
 * Save workflow to file
 */
async function saveWorkflow(workflow: SkillWorkflow): Promise<void> {
  const fs = await import('fs');
  const path = await import('path');
  
  const workflowsDir = path.join(process.cwd(), '.scs', 'workflows');
  
  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir, { recursive: true });
  }

  const filePath = path.join(workflowsDir, `${workflow.name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(workflow, null, 2));

  console.log(chalk.gray(`\n工作流已保存到: ${filePath}\n`));
}

/**
 * Print next steps
 */
function printNextSteps(workflow: SkillWorkflow): void {
  interactionManager.printHeader('下一步');

  console.log(chalk.bold('运行工作流:\n'));
  console.log(chalk.cyan(`  scs run ${workflow.name}\n`));

  console.log(chalk.bold('或交互式运行:\n'));
  console.log(chalk.cyan(`  scs run ${workflow.name} --interactive\n`));

  console.log(chalk.bold('查看所有可用工作流:\n'));
  console.log(chalk.cyan('  scs run --list\n'));

  console.log();
}

/**
 * Init command implementation
 */
export async function init(options: InitOptions): Promise<void> {
  try {
    if (options.interactive || (!options.goal && !options.workflow)) {
      await interactiveInit();
    } else {
      await nonInteractiveInit(options);
    }
  } catch (error) {
    interactionManager.printError(`初始化失败: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Non-interactive init
 */
async function nonInteractiveInit(options: InitOptions): Promise<void> {
  if (options.workflow && WORKFLOW_TEMPLATES[options.workflow]) {
    const workflow = WORKFLOW_TEMPLATES[options.workflow];
    displayWorkflowPreview(workflow);
    await saveWorkflow(workflow);
    interactionManager.printSuccess(`工作流 "${workflow.name}" 已创建！`);
    printNextSteps(workflow);
  } else {
    interactionManager.printError(`未知的工作流: ${options.workflow}`);
    console.log(chalk.bold('\n可用工作流:\n'));
    Object.keys(WORKFLOW_TEMPLATES).forEach(name => {
      console.log(chalk.cyan(`  - ${name}`));
    });
    console.log();
  }
}

/**
 * Register init command
 */
export function registerInitCommand(program: Command): void {
  program
    .command('init [workflow]')
    .description('交互式创建项目工作流')
    .option('-i, --interactive', '交互式模式', false)
    .option('-g, --goal <goal>', '目标类型')
    .option('-t, --time <time>', '时间限制')
    .option('-b, --background <background>', '背景类型')
    .action(async (workflow, options) => {
      await init({
        interactive: options.interactive,
        goal: options.goal,
        timeConstraint: options.time,
        background: options.background,
        workflow: workflow
      });
    });
}
