#!/usr/bin/env node

import { Command } from 'commander';
import * as figlet from 'figlet';
import * as chalk from 'chalk';
import { createModelsCommand } from './commands/models';
import { registerInitCommand, init } from './commands/init';
import { registerRunCommand } from './commands/run';
import { registerInvokeCommand } from './commands/invoke';
import { OutputFormatter } from './core/output-formatter';
import { skillRegistry } from './core/skill-registry';
import { workflowEngine } from './core/workflow-engine';

const program = new Command();

program
  .name('scs')
  .description('SOLO CORN SKILLS - Build billion-dollar companies, one skill at a time')
  .version('0.2.0', '-v, --version');

program
  .addCommand(createModelsCommand());

registerInitCommand(program);
registerRunCommand(program);
registerInvokeCommand(program);

program
  .command('help')
  .description('Show help information')
  .action(() => {
    console.log(OutputFormatter.formatHelp());
  });

program.action(() => {
  console.log(chalk.cyan(figlet.textSync('SOLO CORN', { horizontalLayout: 'full' })));
  console.log(chalk.white(figlet.textSync('SKILLS', { horizontalLayout: 'full' })));
  console.log('\n' + chalk.bold('Build billion-dollar companies, one skill at a time'));
  console.log(chalk.gray('Website: https://zbbsdsb.github.io/solo-corn-skills/'));
  console.log(chalk.gray('GitHub: https://github.com/zbbsdsb/solo-corn-skills'));
  console.log(chalk.gray('\nRun "scs help" to see all commands.\n'));
  
  console.log(chalk.bold.cyan('\nNew Commands:\n'));
  console.log(chalk.cyan('  scs init          ') + 'Initialize a new project workflow');
  console.log(chalk.cyan('  scs run           ') + 'Run a predefined workflow');
  console.log(chalk.cyan('  scs invoke        ') + 'Invoke a skill');
  console.log(chalk.cyan('  scs skills        ') + 'List all available skills');
  console.log(chalk.cyan('  scs skill <name>  ') + 'Show skill details\n');
});

program.addHelpText('beforeAll', 
  chalk.cyan(figlet.textSync('SOLO CORN', { horizontalLayout: 'full' })) + '\n' +
  chalk.white(figlet.textSync('SKILLS', { horizontalLayout: 'full' })) + '\n'
);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(chalk.bold.cyan('\n🚀 Quick Start:\n'));
  console.log(chalk.cyan('  scs init          ') + 'Start a new project');
  console.log(chalk.cyan('  scs run --list     ') + 'See available workflows');
  console.log(chalk.cyan('  scs skills        ') + 'List all skills\n');
  program.outputHelp();
}