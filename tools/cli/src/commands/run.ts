import { Command } from 'commander';
import chalk from 'chalk';
import { workflowEngine } from '../core/workflow-engine';
import { interactionManager } from '../utils/inquirer';
import { RunOptions } from '../types';

/**
 * List all available workflows
 */
async function listWorkflows(): Promise<void> {
  const workflows = workflowEngine.list();

  if (workflows.length === 0) {
    interactionManager.printWarning('暂无可用的工作流');
    console.log(chalk.gray('\n使用 scs init 创建第一个工作流\n'));
    return;
  }

  console.log(chalk.bold.cyan('\n可用工作流:\n'));

  workflows.forEach(workflow => {
    console.log(chalk.cyan('  • ') + chalk.bold(workflow.name));
    console.log(chalk.gray(`    ${workflow.description}\n`));
  });
}

/**
 * Display workflow details
 */
async function showWorkflow(name: string): Promise<void> {
  const workflow = workflowEngine.find(name);

  if (!workflow) {
    interactionManager.printError(`工作流 "${name}" 不存在`);
    await listWorkflows();
    return;
  }

  workflowEngine.displayWorkflow(workflow);
}

/**
 * Run a workflow
 */
async function runWorkflow(
  workflowName: string,
  options: RunOptions
): Promise<void> {
  try {
    const workflow = workflowEngine.find(workflowName);

    if (!workflow) {
      interactionManager.printError(`工作流 "${workflowName}" 不存在`);
      await listWorkflows();
      return;
    }

    workflowEngine.displayWorkflow(workflow);

    let context: Record<string, any> = {};

    if (options.interactive) {
      console.log(chalk.bold('\n📝 请提供初始信息:\n'));
      
      const questions = [
        {
          type: 'input' as const,
          name: 'idea',
          message: '你的想法/概念是什么？'
        }
      ];

      context = await interactionManager.askMany(questions);
    }

    const result = await workflowEngine.execute(workflowName, context, {
      skip: options.skip
    });

    if (result.success) {
      interactionManager.printSuccess('工作流执行成功！');
      
      if (options.output) {
        await saveOutput(result, options.output);
      }
    } else {
      interactionManager.printError('工作流执行失败');
      process.exit(1);
    }
  } catch (error) {
    interactionManager.printError(`运行工作流失败: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Save workflow output to file
 */
async function saveOutput(
  result: any,
  outputPath: string
): Promise<void> {
  try {
    const fs = await import('fs');
    const path = await import('path');
    
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
    
    interactionManager.printSuccess(`结果已保存到: ${outputPath}`);
  } catch (error) {
    interactionManager.printError(`保存结果失败: ${error.message}`);
  }
}

/**
 * Interactive workflow selection
 */
async function interactiveRun(): Promise<void> {
  const workflows = workflowEngine.list();

  if (workflows.length === 0) {
    interactionManager.printWarning('暂无可用工作流');
    console.log(chalk.gray('\n请先运行 scs init 创建工作流\n'));
    return;
  }

  const selected = await interactionManager.ask({
    type: 'select',
    name: 'workflow',
    message: '请选择要运行的工作流：',
    choices: workflows.map(w => ({
      name: `${w.name} - ${w.description}`,
      value: w.name
    }))
  });

  await runWorkflow(selected, { interactive: true });
}

/**
 * Register run command
 */
export function registerRunCommand(program: Command): void {
  program
    .command('run [workflow]')
    .description('运行指定的工作流')
    .option('-i, --interactive', '交互式运行', false)
    .option('-l, --list', '列出所有可用工作流', false)
    .option('-s, --show <name>', '显示工作流详情')
    .option('-o, --output <path>', '输出结果到文件')
    .option('--skip <stages...>', '跳过的阶段')
    .action(async (workflow, options) => {
      if (options.list) {
        await listWorkflows();
      } else if (options.show) {
        await showWorkflow(options.show);
      } else if (!workflow && !options.interactive) {
        await listWorkflows();
      } else if (workflow) {
        await runWorkflow(workflow, {
          interactive: options.interactive,
          skip: options.skip,
          output: options.output
        });
      } else {
        await interactiveRun();
      }
    });
}
