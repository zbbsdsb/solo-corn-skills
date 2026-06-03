#!/usr/bin/env node

// Load .env files before anything else
import * as path from 'path';
import * as fs from 'fs';

function loadDotEnv(): void {
  // Try loading from current directory, then home directory
  const candidates = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '.env.local'),
  ];
  for (const file of candidates) {
    try {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8');
        for (const line of content.split('\n')) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx === -1) continue;
          const key = trimmed.slice(0, eqIdx).trim();
          const value = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
          if (!process.env[key]) {
            process.env[key] = value;
          }
        }
      }
    } catch {
      // Silently skip files that can't be read
    }
  }
}
loadDotEnv();

import { Command } from 'commander';
import figlet from 'figlet';
import { cyan, bold, white, gray, yellow, green } from 'picocolors';
import { createModelsCommand } from './commands/models';
import { registerInitCommand, init } from './commands/init';
import { registerRunCommand } from './commands/run';
import { registerInvokeCommand } from './commands/invoke';
import { registerConfigCommand } from './commands/config';
import { OutputFormatter } from './core/output-formatter';
import { skillRegistry } from './core/skill-registry';
import { workflowEngine } from './core/workflow-engine';

const program = new Command();

program
  .name('scs')
  .description('SOLO CORN SKILLS - Build billion-dollar companies, one skill at a time')
  .version('0.3.0', '-v, --version');

program
  .addCommand(createModelsCommand());

registerInitCommand(program);
registerRunCommand(program);
registerInvokeCommand(program);
registerConfigCommand(program);

program
  .command('help')
  .description('Show help information')
  .action(() => {
    console.log(OutputFormatter.formatHelp());
  });

program.action(() => {
  console.log(cyan(figlet.textSync('SOLO CORN', { horizontalLayout: 'full' })));
  console.log(white(figlet.textSync('SKILLS', { horizontalLayout: 'full' })));
  console.log('\n' + bold('Build billion-dollar companies, one skill at a time'));
  console.log(gray('Website: https://zbbsdsb.github.io/solo-corn-skills/'));
  console.log(gray('GitHub: https://github.com/zbbsdsb/solo-corn-skills'));
  console.log(gray('\nRun "scs help" to see all commands.\n'));
  
  console.log(cyan(bold('\nCommands:\n')));
  console.log(cyan('  scs config        ') + 'Manage API keys and settings');
  console.log(cyan('  scs init          ') + 'Initialize a new project workflow');
  console.log(cyan('  scs run           ') + 'Run a predefined workflow');
  console.log(cyan('  scs invoke        ') + 'Invoke a skill (real LLM execution!)');
  console.log(cyan('  scs skills        ') + 'List all available skills');
  console.log(cyan('  scs skill <name>  ') + 'Show skill details');
  console.log(cyan('  scs models        ') + 'Browse 45+ mental models\n');
  console.log(gray('\n⚡ First time? Run: scs config --set-api-key <your-key>\n'));
});

program.addHelpText('beforeAll', 
  cyan(figlet.textSync('SOLO CORN', { horizontalLayout: 'full' })) + '\n' +
  white(figlet.textSync('SKILLS', { horizontalLayout: 'full' })) + '\n'
);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(cyan(bold('\n🚀 Quick Start:\n')));
  console.log(cyan('  scs init          ') + 'Start a new project');
  console.log(cyan('  scs run --list     ') + 'See available workflows');
  console.log(cyan('  scs skills        ') + 'List all skills\n');
  program.outputHelp();
}