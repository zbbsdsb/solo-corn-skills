import { Command } from 'commander';
import { ModelLoader } from '../core/model-loader';
import { OutputFormatter } from '../core/output-formatter';

const modelLoader = new ModelLoader();

export function createModelsCommand(): Command {
  const models = new Command('models')
    .description('Mental models commands');

  models
    .command('list')
    .description('List all mental models')
    .option('--category <category>', 'Filter by category')
    .option('--output <format>', 'Output format: pretty|json', 'pretty')
    .action(async (options) => {
      await modelLoader.init();
      let models = modelLoader.getModels();
      
      if (options.category) {
        models = modelLoader.getModelsByCategory(options.category);
      }
      
      console.log(OutputFormatter.formatModelList(models, options.output));
    });

  models
    .command('show <id>')
    .description('Show details of a specific mental model')
    .option('--output <format>', 'Output format: pretty|json', 'pretty')
    .action(async (id, options) => {
      await modelLoader.init();
      const model = modelLoader.getModelById(id);
      
      if (!model) {
        console.error(`Error: Model "${id}" not found`);
        console.log('\nAvailable models:');
        const allModels = modelLoader.getModels();
        allModels.slice(0, 10).forEach(m => {
          console.log(`  - ${m.id} (${m.name})`);
        });
        if (allModels.length > 10) {
          console.log(`  ... and ${allModels.length - 10} more`);
        }
        process.exit(1);
      }
      
      console.log(OutputFormatter.formatModelDetail(model, options.output));
    });

  models
    .command('search <query>')
    .description('Search for mental models')
    .option('--output <format>', 'Output format: pretty|json', 'pretty')
    .action(async (query, options) => {
      await modelLoader.init();
      const models = modelLoader.searchModels(query);
      console.log(OutputFormatter.formatSearchResults(models, query, options.output));
    });

  models
    .command('categories')
    .description('List all categories')
    .option('--output <format>', 'Output format: pretty|json', 'pretty')
    .action(async (options) => {
      await modelLoader.init();
      const categories = modelLoader.getCategories();
      console.log(OutputFormatter.formatCategories(categories, options.output));
    });

  return models;
}