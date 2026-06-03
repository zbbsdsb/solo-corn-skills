import { Command } from 'commander';
import { cyan, bold, white, gray } from 'picocolors';
import { configManager } from '../core/config';
import { interactionManager } from '../utils/inquirer';

/**
 * Register the config command for managing SCS settings.
 */
export function registerConfigCommand(program: Command): void {
  program
    .command('config')
    .description('Manage SCS configuration')
    .option('--show', 'Show current configuration')
    .option('--set-api-key <key>', 'Set your API key')
    .option('--set-base-url <url>', 'Set the API base URL')
    .option('--set-model <model>', 'Set the default model')
    .option('--set-temperature <temp>', 'Set the default temperature (0-2)')
    .option('--set-max-tokens <tokens>', 'Set max tokens per response')
    .action(async (options) => {
      if (options.show) {
        console.log(cyan(bold('\n╔══════════════════════════════════════════════════════════════╗')));
        console.log(cyan(bold('║                  ')) + white(bold('SCS CONFIGURATION')) + cyan(bold('                       ║')));
        console.log(cyan(bold('╚══════════════════════════════════════════════════════════════╝\n')));
        console.log(configManager.show());
        console.log();
        return;
      }

      let changed = false;

      if (options.setApiKey) {
        configManager.set('apiKey', options.setApiKey);
        interactionManager.printSuccess('API key updated');
        changed = true;
      }
      if (options.setBaseUrl) {
        configManager.set('baseUrl', options.setBaseUrl);
        interactionManager.printSuccess(`Base URL set to: ${options.setBaseUrl}`);
        changed = true;
      }
      if (options.setModel) {
        configManager.set('model', options.setModel);
        interactionManager.printSuccess(`Model set to: ${options.setModel}`);
        changed = true;
      }
      if (options.setTemperature) {
        const temp = parseFloat(options.setTemperature);
        if (isNaN(temp) || temp < 0 || temp > 2) {
          interactionManager.printError('Temperature must be a number between 0 and 2');
          return;
        }
        configManager.set('temperature', temp);
        interactionManager.printSuccess(`Temperature set to: ${temp}`);
        changed = true;
      }
      if (options.setMaxTokens) {
        const tokens = parseInt(options.setMaxTokens, 10);
        if (isNaN(tokens) || tokens < 1) {
          interactionManager.printError('Max tokens must be a positive integer');
          return;
        }
        configManager.set('maxTokens', tokens);
        interactionManager.printSuccess(`Max tokens set to: ${tokens}`);
        changed = true;
      }

      if (!changed) {
        // Default: show config
        console.log(cyan(bold('\n╔══════════════════════════════════════════════════════════════╗')));
        console.log(cyan(bold('║                  ')) + white(bold('SCS CONFIGURATION')) + cyan(bold('                       ║')));
        console.log(cyan(bold('╚══════════════════════════════════════════════════════════════╝\n')));
        console.log(configManager.show());
        console.log(gray('\nConfiguration file: ' + configManager.getConfigPath()));
        console.log(gray('\nTips:'));
        console.log(gray('  • Set API key:     scs config --set-api-key sk-...'));
        console.log(gray('  • Use custom URL:  scs config --set-base-url https://api.openai.com'));
        console.log(gray('  • Change model:    scs config --set-model gpt-4o'));
        console.log(gray('  • Use env vars:    SCS_API_KEY, SCS_BASE_URL, SCS_MODEL\n'));
      }
    });
}
