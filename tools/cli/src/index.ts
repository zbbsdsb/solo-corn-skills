#!/usr/bin/env node

import { Command } from 'commander';
import * as figlet from 'figlet';
import * as chalk from 'chalk';
import { createModelsCommand } from './commands/models';
import { OutputFormatter } from './core/output-formatter';

const program = new Command();

program
  .name('scs')
  .description('SOLO CORN SKILLS - Build billion-dollar companies, one skill at a time')
  .version('0.1.0', '-v, --version');

program
  .addCommand(createModelsCommand());

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
});

program.addHelpText('beforeAll', 
  chalk.cyan(figlet.textSync('SOLO CORN', { horizontalLayout: 'full' })) + '\n' +
  chalk.white(figlet.textSync('SKILLS', { horizontalLayout: 'full' })) + '\n'
);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}