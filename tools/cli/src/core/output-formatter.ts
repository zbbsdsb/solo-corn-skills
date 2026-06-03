import { MentalModel, CategoryInfo } from '../types';
import { cyan, bold, white, gray, yellow, green, magenta, blue, red, underline } from 'picocolors';

type ColorFunction = (text: string) => string;

export class OutputFormatter {
  static formatModelList(models: MentalModel[], format: string): string {
    if (format === 'json') {
      return JSON.stringify(models, null, 2);
    }

    let output = '';
    
    output += cyan(bold('\n╔══════════════════════════════════════════════════════════════╗\n'));
    output += cyan(bold('║                    ')) + white(bold('MENTAL MODELS')) + cyan(bold('                              ║\n'));
    output += cyan(bold('╚══════════════════════════════════════════════════════════════╝\n\n'));

    models.forEach((model, index) => {
      const categoryColor = this.getCategoryColor(model.category);
      output += `${yellow(index + 1 + '.')} ${white(bold(model.name))}\n`;
      output += `   ${gray('ID:')} ${cyan(model.id)}\n`;
      output += `   ${gray('Category:')} ${categoryColor(model.category.replace(/-/g, ' & ').replace(/\b\w/g, l => l.toUpperCase()))}\n`;
      output += `   ${gray('Definition:')} ${model.definition.substring(0, 80)}${model.definition.length > 80 ? '...' : ''}\n\n`;
    });

    output += gray(`\nTotal: ${models.length} mental models\n`);
    return output;
  }

  static formatModelDetail(model: MentalModel, format: string): string {
    if (format === 'json') {
      return JSON.stringify(model, null, 2);
    }

    const categoryColor = this.getCategoryColor(model.category);
    const displayCategory = model.category.replace(/-/g, ' & ').replace(/\b\w/g, l => l.toUpperCase());

    let output = '';
    
    output += cyan(bold('\n╔══════════════════════════════════════════════════════════════╗\n'));
    output += cyan(bold('║  ')) + white(bold(model.name.toUpperCase())) + cyan(bold('                              ║\n'));
    output += cyan(bold('╚══════════════════════════════════════════════════════════════╝\n\n'));

    output += `${gray(bold('Category:'))} ${categoryColor(displayCategory)}\n`;
    output += `${gray(bold('ID:'))} ${cyan(model.id)}\n\n`;

    output += white(bold('═══════════════════════════════════════════════════════════════\n\n'));
    output += underline(bold('DEFINITION\n\n'));
    output += `  ${model.definition}\n\n`;

    output += underline(bold('KEY PRINCIPLES\n\n'));
    model.keyPrinciples.forEach((principle, index) => {
      output += `  ${yellow('•')} ${principle}\n`;
    });
    output += '\n';

    output += underline(bold('WHEN TO USE\n\n'));
    output += `  ${model.whenToUse}\n\n`;

    output += underline(bold('EXAMPLE\n\n'));
    output += `  ${model.example}\n\n`;

    if (model.relatedModels && model.relatedModels.length > 0) {
      output += underline(bold('RELATED MODELS\n\n'));
      output += `  ${model.relatedModels.map(id => cyan(id)).join(', ')}\n\n`;
    }

    output += white(bold('═══════════════════════════════════════════════════════════════\n'));
    return output;
  }

  static formatCategories(categories: CategoryInfo[], format: string): string {
    if (format === 'json') {
      return JSON.stringify(categories, null, 2);
    }

    let output = '';
    
    output += cyan(bold('\n╔══════════════════════════════════════════════════════════════╗\n'));
    output += cyan(bold('║                   ')) + white(bold('CATEGORIES')) + cyan(bold('                             ║\n'));
    output += cyan(bold('╚══════════════════════════════════════════════════════════════╝\n\n'));

    categories.forEach((category, index) => {
      const categoryColor = this.getCategoryColor(category.id);
      output += `${yellow(index + 1 + '.')} ${categoryColor(bold(category.name))}\n`;
      output += `   ${gray('ID:')} ${cyan(category.id)}\n`;
      output += `   ${gray('Models:')} ${green(category.modelCount)}\n\n`;
    });

    return output;
  }

  static formatSearchResults(models: MentalModel[], query: string, format: string): string {
    if (format === 'json') {
      return JSON.stringify({ query, results: models }, null, 2);
    }

    if (models.length === 0) {
      return red(`\nNo mental models found for "${query}"\n`);
    }

    let output = '';
    
    output += cyan(bold('\n╔══════════════════════════════════════════════════════════════╗\n'));
    output += cyan(bold('║                   ')) + white(bold('SEARCH RESULTS')) + cyan(bold('                           ║\n'));
    output += cyan(bold('╚══════════════════════════════════════════════════════════════╝\n'));
    output += gray(`\n  Query: "${white(query)}" - ${models.length} results\n\n`);

    models.forEach((model, index) => {
      const categoryColor = this.getCategoryColor(model.category);
      output += `${yellow(index + 1 + '.')} ${white(bold(model.name))}\n`;
      output += `   ${gray('Category:')} ${categoryColor(model.category.replace(/-/g, ' & ').replace(/\b\w/g, l => l.toUpperCase()))}\n\n`;
    });

    return output;
  }

  static formatHelp(): string {
    let output = '';
    
    output += cyan(bold('\n╔══════════════════════════════════════════════════════════════╗\n'));
    output += cyan(bold('║              ')) + white(bold('SOLO CORN SKILLS CLI')) + cyan(bold('                          ║\n'));
    output += cyan(bold('╚══════════════════════════════════════════════════════════════╝\n\n'));

    output += underline(bold('USAGE\n\n'));
    output += `  scs <command> [options]\n\n`;

    output += underline(bold('COMMANDS\n\n'));
    output += `  ${cyan('models')}        Mental models commands\n`;
    output += `  ${cyan('help')}          Show this help message\n\n`;

    output += underline(bold('MODELS COMMANDS\n\n'));
    output += `  ${green('list')}          List all mental models\n`;
    output += `  ${green('show')} <id>     Show details of a specific model\n`;
    output += `  ${green('search')} <q>    Search for mental models\n`;
    output += `  ${green('categories')}   List all categories\n\n`;

    output += underline(bold('GLOBAL OPTIONS\n\n'));
    output += `  ${yellow('--output')} <f>  Output format: pretty|json (default: pretty)\n`;
    output += `  ${yellow('--help, -h')}   Show help\n`;
    output += `  ${yellow('--version, -v')} Show version\n\n`;

    output += underline(bold('EXAMPLES\n\n'));
    output += `  ${gray('# List all models')}\n`;
    output += `  scs models list\n\n`;
    output += `  ${gray('# Show a specific model')}\n`;
    output += `  scs models show first-principles\n\n`;
    output += `  ${gray('# Search for models')}\n`;
    output += `  scs models search "decision"\n\n`;

    output += gray('Learn more: https://zbbsdsb.github.io/solo-corn-skills/\n\n');

    return output;
  }

  private static getCategoryColor(category: string): ColorFunction {
    const colors: Record<string, ColorFunction> = {
      'decision-reasoning': blue,
      'strategy-competition': magenta,
      'systems-complexity': green,
      'psychology-behavior': yellow,
      'execution-learning': red
    };
    return colors[category] || white;
  }
}
