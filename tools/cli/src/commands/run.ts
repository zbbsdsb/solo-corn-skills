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
    interactionManager.printWarning('No workflows available');
    console.log(chalk.gray('\nUse scs init to create your first workflow\n'));
    return;
  }

  console.log(chalk.bold.cyan('\nAvailable Workflows:\n'));

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
    interactionManager.printError(`Workflow "${name}" does not exist`);
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
      interactionManager.printError(`Workflow "${workflowName}" does not exist`);
      await listWorkflows();
      return;
    }

    workflowEngine.displayWorkflow(workflow);

    let context: Record<string, any> = {};

    if (options.interactive) {
      console.log(chalk.bold('\n📝 Please provide initial information:\n'));
      
      const questions = [
        {
          type: 'input' as const,
          name: 'idea',
          message: 'What is your idea/concept?'
        }
      ];

      context = await interactionManager.askMany(questions);
    }

    const result = await workflowEngine.execute(workflowName, context, {
      skip: options.skip
    });

    if (result.success) {
      interactionManager.printSuccess('Workflow executed successfully!');
      
      if (options.output) {
        await saveOutput(result, options.output);
      }
    } else {
      interactionManager.printError('Workflow execution failed');
      process.exit(1);
    }
  } catch (error) {
    interactionManager.printError(`Failed to run workflow: ${error.message}`);
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
    
    interactionManager.printSuccess(`Results saved to: ${outputPath}`);
  } catch (error) {
    interactionManager.printError(`Failed to save results: ${error.message}`);
  }
}

/**
 * Interactive workflow selection
 */
async function interactiveRun(): Promise<void> {
  const workflows = workflowEngine.list();

  if (workflows.length === 0) {
    interactionManager.printWarning('No workflows available');
    console.log(chalk.gray('\nPlease run scs init to create a workflow first\n'));
    return;
  }

  const selected = await interactionManager.ask({
    type: 'select',
    name: 'workflow',
    message: 'Select a workflow to run:',
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
    .description('Run the specified workflow')
    .option('-i, --interactive', 'Interactive mode', false)
    .option('-l, --list', 'List all available workflows', false)
    .option('-s, --show <name>', 'Show workflow details')
    .option('-o, --output <path>', 'Output results to file')
    .option('--skip <stages...>', 'Skip specific stages')
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
