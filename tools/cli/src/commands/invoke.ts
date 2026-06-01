import { Command } from 'commander';
import chalk from 'chalk';
import { skillRegistry } from '../core/skill-registry';
import { workflowEngine } from '../core/workflow-engine';
import { interactionManager } from '../utils/inquirer';
import { InvokeOptions, Question } from '../types';

/**
 * Display skill information
 */
async function showSkill(skillName: string): Promise<void> {
  const metadata = skillRegistry.getMetadata(skillName);
  const inputs = skillRegistry.getInputs(skillName);
  const outputs = skillRegistry.getOutputs(skillName);

  if (!metadata) {
    interactionManager.printError(`Skill "${skillName}" does not exist`);
    return;
  }

  console.log(chalk.bold.cyan('\nSkill Information:'));
  console.log(chalk.cyan('  Name: ') + metadata.name);
  console.log(chalk.cyan('  Version: ') + metadata.version);
  console.log(chalk.cyan('  Description: ') + metadata.description);
  console.log(chalk.cyan('  Category: ') + metadata.category.join(', '));

  if (metadata.tags && metadata.tags.length > 0) {
    console.log(chalk.cyan('  Tags: ') + metadata.tags.join(', '));
  }

  if (inputs && inputs.length > 0) {
    console.log(chalk.bold('\nInput Parameters:'));
    inputs.forEach(input => {
      const required = input.required ? chalk.red('*') : chalk.gray('(optional)');
      console.log(chalk.cyan(`  ${input.name} `) + required);
      console.log(chalk.gray(`    Type: ${input.type}`));
      console.log(chalk.gray(`    Description: ${input.description}`));
      if (input.default !== undefined) {
        console.log(chalk.gray(`    Default value: ${input.default}`));
      }
    });
  }

  if (outputs && outputs.length > 0) {
    console.log(chalk.bold('\nOutput Parameters:'));
    outputs.forEach(output => {
      console.log(chalk.cyan(`  ${output.name}`));
      console.log(chalk.gray(`    Type: ${output.type}`));
      console.log(chalk.gray(`    Description: ${output.description}`));
    });
  }

  console.log();
}

/**
 * List all available skills
 */
async function listSkills(): Promise<void> {
  const skills = skillRegistry.list();

  if (skills.length === 0) {
    interactionManager.printWarning('No skills available');
    return;
  }

  console.log(chalk.bold.cyan(`\nAvailable Skills (${skills.length}):\n`));

  skills.forEach(skill => {
    console.log(chalk.cyan('  • ') + chalk.bold(skill.name));
    console.log(chalk.gray(`    ${skill.description}\n`));
  });
}

/**
 * Invoke a skill with inputs
 */
async function invokeSkill(
  skillName: string,
  options: InvokeOptions
): Promise<void> {
  try {
    const skill = skillRegistry.find(skillName);

    if (!skill) {
      interactionManager.printError(`Skill "${skillName}" does not exist`);
      await listSkills();
      return;
    }

    let inputs: Record<string, any> = {};
    let context: Record<string, any> = {};

    if (options.interactive) {
      console.log(chalk.bold(`\n📝 Invoking Skill: ${skillName}\n`));
      
      const questions: Question[] = [
        {
          type: 'input',
          name: 'idea',
          message: 'Enter your idea:'
        }
      ];

      inputs = await interactionManager.askMany(questions);
    } else if (options.input) {
      try {
        if (options.input.startsWith('{') || options.input.startsWith('[')) {
          inputs = JSON.parse(options.input);
        } else {
          const fs = await import('fs');
          const content = fs.readFileSync(options.input, 'utf-8');
          inputs = JSON.parse(content);
        }
      } catch (error) {
        interactionManager.printError(`Failed to parse input: ${error.message}`);
        return;
      }
    } else if (options.context) {
      context = options.context;
    }

    console.log(chalk.cyan(`\n⚡ Invoking skill: ${skillName}...\n`));

    const result = await skillRegistry.invoke(skillName, {
      context,
      inputs,
      options: {
        timeout: 300000
      }
    });

    if (result.success) {
      interactionManager.printSuccess('Skill invoked successfully!');

      if (result.metadata) {
        console.log(chalk.gray(`\nExecution time: ${result.metadata.duration}ms`));
        if (result.metadata.tokens) {
          console.log(chalk.gray(`Tokens used: ${result.metadata.tokens}`));
        }
      }

      console.log(chalk.bold('\nOutput Results:\n'));
      console.log(JSON.stringify(result.outputs, null, 2));

      if (options.output) {
        await saveResult(result, options.output);
      }
    } else {
      interactionManager.printError('Skill invocation failed');
      if (result.error) {
        console.log(chalk.red(`\nError code: ${result.error.code}`));
        console.log(chalk.red(`Error message: ${result.error.message}`));
        if (result.error.details) {
          console.log(chalk.gray(`\nDetails:`));
          console.log(JSON.stringify(result.error.details, null, 2));
        }
      }
      process.exit(1);
    }
  } catch (error) {
    interactionManager.printError(`Failed to invoke skill: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Chain invoke multiple skills
 */
async function chainInvoke(
  skills: string[],
  options: InvokeOptions
): Promise<void> {
  if (skills.length < 2) {
    interactionManager.printError('Chain invocation requires at least 2 skills');
    return;
  }

  console.log(chalk.bold.cyan('\n🔗 Chain Invocation:'));
  skills.forEach((skill, index) => {
    console.log(chalk.cyan(`  ${index + 1}. ${skill}`));
  });
  console.log();

  let lastOutput: Record<string, any> = {};

  for (let i = 0; i < skills.length; i++) {
    const skillName = skills[i];
    const skill = skillRegistry.find(skillName);

    if (!skill) {
      interactionManager.printError(`Skill "${skillName}" does not exist`);
      return;
    }

    console.log(chalk.cyan(`\n⚡ [${i + 1}/${skills.length}] Invoking: ${skillName}\n`));

    let inputs: Record<string, any> = {};

    if (i === 0 && options.interactive) {
      const questions: Question[] = [
        {
          type: 'input',
          name: 'idea',
          message: 'Enter your idea:'
        }
      ];
      inputs = await interactionManager.askMany(questions);
    } else if (i === 0 && options.input) {
      try {
        if (options.input.startsWith('{')) {
          inputs = JSON.parse(options.input);
        } else {
          const fs = await import('fs');
          inputs = JSON.parse(fs.readFileSync(options.input, 'utf-8'));
        }
      } catch (error) {
        interactionManager.printError(`Failed to parse input: ${error.message}`);
        return;
      }
    } else {
      inputs = lastOutput;
    }

    const result = await skillRegistry.invoke(skillName, {
      context: {},
      inputs,
      options: {
        timeout: 300000
      }
    });

    if (result.success) {
      console.log(chalk.green(`✓ ${skillName} invoked successfully`));
      lastOutput = result.outputs;

      if (options.output && i === skills.length - 1) {
        await saveResult(result, options.output);
      }
    } else {
      interactionManager.printError(`${skillName} invocation failed`);
      if (result.error) {
        console.log(chalk.red(`  ${result.error.message}`));
      }
      return;
    }
  }

  interactionManager.printSuccess('\nChain invocation complete!');
  console.log(chalk.bold('\nFinal Output:\n'));
  console.log(JSON.stringify(lastOutput, null, 2));
}

/**
 * Save result to file
 */
async function saveResult(
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
 * Interactive skill invocation
 */
async function interactiveInvoke(): Promise<void> {
  const skills = skillRegistry.list();

  if (skills.length === 0) {
    interactionManager.printWarning('No skills available');
    return;
  }

  const selectedSkill = await interactionManager.ask({
    type: 'select',
    name: 'skill',
    message: 'Select a skill to invoke:',
    choices: skills.map(s => ({
      name: `${s.name} - ${s.description}`,
      value: s.name
    }))
  });

  await invokeSkill(selectedSkill, { interactive: true });
}

/**
 * Register invoke command
 */
export function registerInvokeCommand(program: Command): void {
  program
    .command('invoke <skill>')
    .description('Invoke the specified skill')
    .option('-i, --interactive', 'Interactive mode', false)
    .option('-I, --input <json-or-file>', 'Input parameters (JSON or file path)')
    .option('-o, --output <path>', 'Output results to file')
    .option('-t, --then <skills...>', 'Chain invoke subsequent skills')
    .option('-c, --context <context>', 'Context parameters (JSON)')
    .action(async (skill, options) => {
      if (options.then && options.then.length > 0) {
        const skills = [skill, ...options.then];
        await chainInvoke(skills, {
          interactive: options.interactive,
          input: options.input,
          output: options.output
        });
      } else {
        await invokeSkill(skill, {
          interactive: options.interactive,
          input: options.input,
          output: options.output,
          context: options.context ? JSON.parse(options.context) : undefined
        });
      }
    });

  program
    .command('skills')
    .description('List all available skills')
    .action(async () => {
      await listSkills();
    });

  program
    .command('skill <name>')
    .description('Show detailed skill information')
    .action(async (name) => {
      await showSkill(name);
    });
}
