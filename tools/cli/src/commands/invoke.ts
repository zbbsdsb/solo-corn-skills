import { Command } from 'commander';
import chalk from 'chalk';
import { skillRegistry } from '../core/skill-registry';
import { workflowEngine } from '../core/workflow-engine';
import { interactionManager } from '../utils/inquirer';
import { InvokeOptions } from '../types';

/**
 * Display skill information
 */
async function showSkill(skillName: string): Promise<void> {
  const metadata = skillRegistry.getMetadata(skillName);
  const inputs = skillRegistry.getInputs(skillName);
  const outputs = skillRegistry.getOutputs(skillName);

  if (!metadata) {
    interactionManager.printError(`Skill "${skillName}" 不存在`);
    return;
  }

  console.log(chalk.bold.cyan('\n技能信息:'));
  console.log(chalk.cyan('  名称: ') + metadata.name);
  console.log(chalk.cyan('  版本: ') + metadata.version);
  console.log(chalk.cyan('  描述: ') + metadata.description);
  console.log(chalk.cyan('  分类: ') + metadata.category.join(', '));

  if (metadata.tags && metadata.tags.length > 0) {
    console.log(chalk.cyan('  标签: ') + metadata.tags.join(', '));
  }

  if (inputs && inputs.length > 0) {
    console.log(chalk.bold('\n输入参数:'));
    inputs.forEach(input => {
      const required = input.required ? chalk.red('*') : chalk.gray('(可选)');
      console.log(chalk.cyan(`  ${input.name} `) + required);
      console.log(chalk.gray(`    类型: ${input.type}`));
      console.log(chalk.gray(`    描述: ${input.description}`));
      if (input.default !== undefined) {
        console.log(chalk.gray(`    默认值: ${input.default}`));
      }
    });
  }

  if (outputs && outputs.length > 0) {
    console.log(chalk.bold('\n输出参数:'));
    outputs.forEach(output => {
      console.log(chalk.cyan(`  ${output.name}`));
      console.log(chalk.gray(`    类型: ${output.type}`));
      console.log(chalk.gray(`    描述: ${output.description}`));
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
    interactionManager.printWarning('暂无可用的 Skills');
    return;
  }

  console.log(chalk.bold.cyan(`\n可用的 Skills (${skills.length}):\n`));

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
      interactionManager.printError(`Skill "${skillName}" 不存在`);
      await listSkills();
      return;
    }

    let inputs: Record<string, any> = {};
    let context: Record<string, any> = {};

    if (options.interactive) {
      console.log(chalk.bold(`\n📝 调用技能: ${skillName}\n`));
      
      const questions = [
        {
          type: 'input',
          name: 'idea',
          message: '请输入你的想法：'
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
        interactionManager.printError(`解析输入失败: ${error.message}`);
        return;
      }
    } else if (options.context) {
      context = options.context;
    }

    console.log(chalk.cyan(`\n⚡ 调用技能: ${skillName}...\n`));

    const result = await skillRegistry.invoke(skillName, {
      context,
      inputs,
      options: {
        timeout: 300000
      }
    });

    if (result.success) {
      interactionManager.printSuccess('技能调用成功！');

      if (result.metadata) {
        console.log(chalk.gray(`\n执行时间: ${result.metadata.duration}ms`));
        if (result.metadata.tokens) {
          console.log(chalk.gray(`Token 消耗: ${result.metadata.tokens}`));
        }
      }

      console.log(chalk.bold('\n输出结果:\n'));
      console.log(JSON.stringify(result.outputs, null, 2));

      if (options.output) {
        await saveResult(result, options.output);
      }
    } else {
      interactionManager.printError('技能调用失败');
      if (result.error) {
        console.log(chalk.red(`\n错误代码: ${result.error.code}`));
        console.log(chalk.red(`错误信息: ${result.error.message}`));
        if (result.error.details) {
          console.log(chalk.gray(`\n详细信息:`));
          console.log(JSON.stringify(result.error.details, null, 2));
        }
      }
      process.exit(1);
    }
  } catch (error) {
    interactionManager.printError(`调用技能失败: ${error.message}`);
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
    interactionManager.printError('链式调用至少需要 2 个技能');
    return;
  }

  console.log(chalk.bold.cyan('\n🔗 链式调用技能链:'));
  skills.forEach((skill, index) => {
    console.log(chalk.cyan(`  ${index + 1}. ${skill}`));
  });
  console.log();

  let lastOutput: Record<string, any> = {};

  for (let i = 0; i < skills.length; i++) {
    const skillName = skills[i];
    const skill = skillRegistry.find(skillName);

    if (!skill) {
      interactionManager.printError(`技能 "${skillName}" 不存在`);
      return;
    }

    console.log(chalk.cyan(`\n⚡ [${i + 1}/${skills.length}] 调用: ${skillName}\n`));

    let inputs: Record<string, any> = {};

    if (i === 0 && options.interactive) {
      const questions = [
        {
          type: 'input',
          name: 'idea',
          message: '请输入你的想法：'
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
        interactionManager.printError(`解析输入失败: ${error.message}`);
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
      console.log(chalk.green(`✓ ${skillName} 调用成功`));
      lastOutput = result.outputs;

      if (options.output && i === skills.length - 1) {
        await saveResult(result, options.output);
      }
    } else {
      interactionManager.printError(`${skillName} 调用失败`);
      if (result.error) {
        console.log(chalk.red(`  ${result.error.message}`));
      }
      return;
    }
  }

  interactionManager.printSuccess('\n链式调用完成！');
  console.log(chalk.bold('\n最终输出:\n'));
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
    
    interactionManager.printSuccess(`结果已保存到: ${outputPath}`);
  } catch (error) {
    interactionManager.printError(`保存结果失败: ${error.message}`);
  }
}

/**
 * Interactive skill invocation
 */
async function interactiveInvoke(): Promise<void> {
  const skills = skillRegistry.list();

  if (skills.length === 0) {
    interactionManager.printWarning('暂无可用的 Skills');
    return;
  }

  const selectedSkill = await interactionManager.ask({
    type: 'select',
    name: 'skill',
    message: '请选择要调用的技能：',
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
    .description('调用指定的技能')
    .option('-i, --interactive', '交互式调用', false)
    .option('-I, --input <json-or-file>', '输入参数 (JSON 或文件路径)')
    .option('-o, --output <path>', '输出结果到文件')
    .option('-t, --then <skills...>', '链式调用后续技能')
    .option('-c, --context <context>', '上下文参数 (JSON)')
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
    .description('列出所有可用的技能')
    .action(async () => {
      await listSkills();
    });

  program
    .command('skill <name>')
    .description('显示技能的详细信息')
    .action(async (name) => {
      await showSkill(name);
    });
}
