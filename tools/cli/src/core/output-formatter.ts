import { MentalModel, CategoryInfo } from '../types';
import chalk from 'chalk';

export class OutputFormatter {
  static formatModelList(models: MentalModel[], format: string): string {
    if (format === 'json') {
      return JSON.stringify(models, null, 2);
    }

    let output = '';
    
    output += chalk.bold.cyan('\n╔══════════════════════════════════════════════════════════════╗\n');
    output += chalk.bold.cyan('║                    ') + chalk.bold.white('MENTAL MODELS') + chalk.bold.cyan('                              ║\n');
    output += chalk.bold.cyan('╚══════════════════════════════════════════════════════════════╝\n\n');

    models.forEach((model, index) => {
      const categoryColor = this.getCategoryColor(model.category);
      output += `${chalk.yellow(index + 1 + '.')} ${chalk.bold.white(model.name)}\n`;
      output += `   ${chalk.gray('ID:')} ${chalk.cyan(model.id)}\n`;
      output += `   ${chalk.gray('Category:')} ${categoryColor(model.category.replace(/-/g, ' & ').replace(/\b\w/g, l => l.toUpperCase()))}\n`;
      output += `   ${chalk.gray('Definition:')} ${model.definition.substring(0, 80)}${model.definition.length > 80 ? '...' : ''}\n\n`;
    });

    output += chalk.gray(`\nTotal: ${models.length} mental models\n`);
    return output;
  }

  static formatModelDetail(model: MentalModel, format: string): string {
    if (format === 'json') {
      return JSON.stringify(model, null, 2);
    }

    const categoryColor = this.getCategoryColor(model.category);
    const displayCategory = model.category.replace(/-/g, ' & ').replace(/\b\w/g, l => l.toUpperCase());

    let output = '';
    
    output += chalk.bold.cyan('\n╔══════════════════════════════════════════════════════════════╗\n');
    output += chalk.bold.cyan('║  ') + chalk.bold.white(model.name.toUpperCase()) + chalk.bold.cyan('                              ║\n');
    output += chalk.bold.cyan('╚══════════════════════════════════════════════════════════════╝\n\n');

    output += `${chalk.bold.gray('Category:')} ${categoryColor(displayCategory)}\n`;
    output += `${chalk.bold.gray('ID:')} ${chalk.cyan(model.id)}\n\n`;

    output += chalk.bold.white('═══════════════════════════════════════════════════════════════\n\n');
    output += chalk.bold.underline('DEFINITION\n\n');
    output += `  ${model.definition}\n\n`;

    output += chalk.bold.underline('KEY PRINCIPLES\n\n');
    model.keyPrinciples.forEach((principle, index) => {
      output += `  ${chalk.yellow('•')} ${principle}\n`;
    });
    output += '\n';

    output += chalk.bold.underline('WHEN TO USE\n\n');
    output += `  ${model.whenToUse}\n\n`;

    output += chalk.bold.underline('EXAMPLE\n\n');
    output += `  ${model.example}\n\n`;

    if (model.relatedModels && model.relatedModels.length > 0) {
      output += chalk.bold.underline('RELATED MODELS\n\n');
      output += `  ${model.relatedModels.map(id => chalk.cyan(id)).join(', ')}\n\n`;
    }

    output += chalk.bold.white('═══════════════════════════════════════════════════════════════\n');
    return output;
  }

  static formatCategories(categories: CategoryInfo[], format: string): string {
    if (format === 'json') {
      return JSON.stringify(categories, null, 2);
    }

    let output = '';
    
    output += chalk.bold.cyan('\n╔══════════════════════════════════════════════════════════════╗\n');
    output += chalk.bold.cyan('║                   ') + chalk.bold.white('CATEGORIES') + chalk.bold.cyan('                             ║\n');
    output += chalk.bold.cyan('╚══════════════════════════════════════════════════════════════╝\n\n');

    categories.forEach((category, index) => {
      const categoryColor = this.getCategoryColor(category.id);
      output += `${chalk.yellow(index + 1 + '.')} ${chalk.bold(categoryColor(category.name))}\n`;
      output += `   ${chalk.gray('ID:')} ${chalk.cyan(category.id)}\n`;
      output += `   ${chalk.gray('Models:')} ${chalk.green(category.modelCount)}\n\n`;
    });

    return output;
  }

  static formatSearchResults(models: MentalModel[], query: string, format: string): string {
    if (format === 'json') {
      return JSON.stringify({ query, results: models }, null, 2);
    }

    if (models.length === 0) {
      return chalk.red(`\nNo mental models found for "${query}"\n`);
    }

    let output = '';
    
    output += chalk.bold.cyan('\n╔══════════════════════════════════════════════════════════════╗\n');
    output += chalk.bold.cyan('║                   ') + chalk.bold.white('SEARCH RESULTS') + chalk.bold.cyan('                           ║\n');
    output += chalk.bold.cyan('╚══════════════════════════════════════════════════════════════╝\n');
    output += chalk.gray(`\n  Query: "${chalk.white(query)}" - ${models.length} results\n\n`);

    models.forEach((model, index) => {
      const categoryColor = this.getCategoryColor(model.category);
      output += `${chalk.yellow(index + 1 + '.')} ${chalk.bold.white(model.name)}\n`;
      output += `   ${chalk.gray('Category:')} ${categoryColor(model.category.replace(/-/g, ' & ').replace(/\b\w/g, l => l.toUpperCase()))}\n\n`;
    });

    return output;
  }

  static formatHelp(): string {
    let output = '';
    
    output += chalk.bold.cyan('\n╔══════════════════════════════════════════════════════════════╗\n');
    output += chalk.bold.cyan('║              ') + chalk.bold.white('SOLO CORN SKILLS CLI') + chalk.bold.cyan('                          ║\n');
    output += chalk.bold.cyan('╚══════════════════════════════════════════════════════════════╝\n\n');

    output += chalk.bold.underline('USAGE\n\n');
    output += `  scs <command> [options]\n\n`;

    output += chalk.bold.underline('COMMANDS\n\n');
    output += `  ${chalk.cyan('models')}        Mental models commands\n`;
    output += `  ${chalk.cyan('help')}          Show this help message\n\n`;

    output += chalk.bold.underline('MODELS COMMANDS\n\n');
    output += `  ${chalk.green('list')}          List all mental models\n`;
    output += `  ${chalk.green('show')} <id>     Show details of a specific model\n`;
    output += `  ${chalk.green('search')} <q>    Search for mental models\n`;
    output += `  ${chalk.green('categories')}   List all categories\n\n`;

    output += chalk.bold.underline('GLOBAL OPTIONS\n\n');
    output += `  ${chalk.yellow('--output')} <f>  Output format: pretty|json (default: pretty)\n`;
    output += `  ${chalk.yellow('--help, -h')}   Show help\n`;
    output += `  ${chalk.yellow('--version, -v')} Show version\n\n`;

    output += chalk.bold.underline('EXAMPLES\n\n');
    output += `  ${chalk.gray('# List all models')}\n`;
    output += `  scs models list\n\n`;
    output += `  ${chalk.gray('# Show a specific model')}\n`;
    output += `  scs models show first-principles\n\n`;
    output += `  ${chalk.gray('# Search for models')}\n`;
    output += `  scs models search "decision"\n\n`;

    output += chalk.gray('Learn more: https://zbbsdsb.github.io/solo-corn-skills/\n\n');

    return output;
  }

  private static getCategoryColor(category: string): chalk.ChalkFunction {
    const colors: Record<string, chalk.ChalkFunction> = {
      'decision-reasoning': chalk.blue,
      'strategy-competition': chalk.magenta,
      'systems-complexity': chalk.green,
      'psychology-behavior': chalk.yellow,
      'execution-learning': chalk.red
    };
    return colors[category] || chalk.white;
  }
}