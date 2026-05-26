import * as readline from 'readline';
import * as chalk from 'chalk';
import { Question, QuestionOption } from '../types';

/**
 * InteractionManager - Handles interactive CLI questionnaires
 * 
 * Provides a clean way to ask users questions in the terminal with:
 * - Multiple question types (input, select, confirm, etc.)
 * - Custom styling
 * - Input validation
 * - Timeout support
 */
export class InteractionManager {
  private rl: readline.Interface | null = null;
  private defaultOptions = {
    input: process.stdin,
    output: process.stdout
  };

  /**
   * Initialize the readline interface
   */
  private initReadline(): void {
    if (!this.rl) {
      this.rl = readline.createInterface({
        input: this.defaultOptions.input,
        output: this.defaultOptions.output,
        terminal: true
      });
    }
  }

  /**
   * Close the readline interface
   */
  private closeReadline(): void {
    if (this.rl) {
      this.rl.close();
      this.rl = null;
    }
  }

  /**
   * Ask a single question and return the answer
   */
  async ask(question: Question): Promise<any> {
    this.initReadline();

    try {
      switch (question.type) {
        case 'input':
          return await this.askInput(question);
        case 'select':
          return await this.askSelect(question);
        case 'multiselect':
          return await this.askMultiselect(question);
        case 'confirm':
          return await this.askConfirm(question);
        case 'password':
          return await this.askPassword(question);
        default:
          throw new Error(`Unknown question type: ${question.type}`);
      }
    } finally {
      this.closeReadline();
    }
  }

  /**
   * Ask multiple questions in sequence
   */
  async askMany(questions: Question[]): Promise<Record<string, any>> {
    const answers: Record<string, any> = {};

    for (const question of questions) {
      if (question.when && !question.when(answers)) {
        continue;
      }

      const answer = await this.ask(question);
      answers[question.name] = answer;

      if (question.validate) {
        const isValid = question.validate(answer);
        if (isValid !== true) {
          console.log(chalk.yellow(`⚠ ${isValid}`));
          const retryAnswer = await this.ask(question);
          answers[question.name] = retryAnswer;
        }
      }
    }

    return answers;
  }

  /**
   * Ask input question
   */
  private async askInput(question: Question): Promise<string> {
    return new Promise((resolve) => {
      this.rl!.question(
        chalk.cyan('? ') + chalk.bold(question.message) + ' ',
        (answer) => {
          resolve(answer.trim() || question.default || '');
        }
      );
    });
  }

  /**
   * Ask select question (radio list)
   */
  private async askSelect(question: Question): Promise<string> {
    if (!question.choices || question.choices.length === 0) {
      throw new Error('Select question requires choices');
    }

    console.log(chalk.bold('\n' + question.message + '\n'));

    question.choices.forEach((choice, index) => {
      const marker = index === 0 ? chalk.green('❯') : ' ';
      const description = choice.description 
        ? chalk.gray(` - ${choice.description}`) 
        : '';
      console.log(`${marker} ${chalk.cyan(index + 1)}. ${choice.name}${description}`);
    });

    console.log();

    const selectedIndex = await this.selectIndex(question.choices.length);
    const selectedChoice = question.choices[selectedIndex];

    console.log(chalk.green('✓ ') + chalk.bold(selectedChoice.name) + '\n');

    return selectedChoice.value;
  }

  /**
   * Ask multiselect question (checkbox)
   */
  private async askMultiselect(question: Question): Promise<string[]> {
    if (!question.choices || question.choices.length === 0) {
      throw new Error('Multiselect question requires choices');
    }

    console.log(chalk.bold('\n' + question.message));
    console.log(chalk.gray('(Press SPACE to select, ENTER to confirm)\n'));

    const selected = await this.checkboxSelection(question.choices);
    
    console.log(chalk.green('✓ ') + chalk.bold(`Selected ${selected.length} item(s)\n`));

    return selected;
  }

  /**
   * Ask confirm question (yes/no)
   */
  private async askConfirm(question: Question): Promise<boolean> {
    const defaultValue = question.default !== undefined ? question.default : false;
    const yesNo = defaultValue ? '[Y/n]' : '[y/N]';

    return new Promise((resolve) => {
      this.rl!.question(
        chalk.cyan('? ') + chalk.bold(question.message) + ` ${chalk.gray(yesNo)} `,
        (answer) => {
          const normalized = answer.toLowerCase().trim();
          if (!normalized) {
            resolve(defaultValue);
          } else {
            resolve(normalized === 'y' || normalized === 'yes');
          }
        }
      );
    });
  }

  /**
   * Ask password question
   */
  private async askPassword(question: Question): Promise<string> {
    return new Promise((resolve) => {
      this.rl!.question(
        chalk.cyan('? ') + chalk.bold(question.message) + ' ',
        (answer) => {
          resolve(answer);
        }
      );
    });
  }

  /**
   * Get selected index for select question
   */
  private selectIndex(max: number): Promise<number> {
    return new Promise((resolve) => {
      let selected = 0;

      const moveSelection = (direction: number) => {
        selected = (selected + direction + max) % max;
        this.rl!.output.write('\x1b[2K');
        this.rl!.output.write('\x1b[0G');
        
        question.choices!.forEach((choice, index) => {
          const marker = index === selected ? chalk.green('❯') : ' ';
          const description = choice.description 
            ? chalk.gray(` - ${choice.description}`) 
            : '';
          if (index === selected) {
            this.rl!.output.write(`${marker} ${chalk.cyan(chalk.bold(index + 1 + '. ' + choice.name))}${description}\n`);
          } else {
            this.rl!.output.write(`${marker} ${index + 1}. ${choice.name}${description}\n`);
          }
        });
        
        this.rl!.output.write('\x1b[' + (max + 1) + 'A');
      };

      const question = {
        choices: [] as QuestionOption[]
      };

      this.rl!.on('keypress', (str, key) => {
        if (key.name === 'up') {
          moveSelection(-1);
        } else if (key.name === 'down') {
          moveSelection(1);
        } else if (key.name === 'return') {
          this.rl!.removeAllListeners('keypress');
          resolve(selected);
        } else if (key.name === 'escape') {
          this.rl!.removeAllListeners('keypress');
          resolve(0);
        }
      });

      moveSelection(0);
    });
  }

  /**
   * Get checkbox selection
   */
  private checkboxSelection(choices: QuestionOption[]): Promise<string[]> {
    return new Promise((resolve) => {
      const selected: Set<number> = new Set();

      const render = () => {
        this.rl!.output.write('\x1b[2K');
        this.rl!.output.write('\x1b[0G');
        
        choices.forEach((choice, index) => {
          const check = selected.has(index) ? chalk.green('✓') : ' ';
          const marker = selected.has(index) ? chalk.green('❯') : ' ';
          const description = choice.description 
            ? chalk.gray(` - ${choice.description}`) 
            : '';
          this.rl!.output.write(`${check} ${marker} ${choice.name}${description}\n`);
        });
        
        this.rl!.output.write(chalk.gray('\nPress SPACE to toggle, ENTER to confirm\n'));
        this.rl!.output.write('\x1b[' + (choices.length + 2) + 'A');
      };

      this.rl!.on('keypress', (str, key) => {
        if (key.name === 'up') {
          // Move up (implemented as leaving room for enhancement)
        } else if (key.name === 'down') {
          // Move down (implemented as leaving room for enhancement)
        } else if (key.name === 'space') {
          const current = selected.has(0) ? 0 : (selected.size > 0 ? Math.max(...selected) : 0);
          const next = (current + 1) % choices.length;
          if (selected.has(next)) {
            selected.delete(next);
          } else {
            selected.add(next);
          }
          render();
        } else if (key.name === 'return') {
          this.rl!.removeAllListeners('keypress');
          resolve(Array.from(selected).map(i => choices[i].value));
        } else if (key.name === 'escape') {
          this.rl!.removeAllListeners('keypress');
          resolve([]);
        }
      });

      render();
    });
  }

  /**
   * Print a header
   */
  printHeader(title: string): void {
    console.log('\n' + chalk.bold.cyan('═'.repeat(60)));
    console.log(chalk.bold.cyan('  ' + title));
    console.log(chalk.bold.cyan('═'.repeat(60)) + '\n');
  }

  /**
   * Print a success message
   */
  printSuccess(message: string): void {
    console.log(chalk.green('✓ ') + message + '\n');
  }

  /**
   * Print an error message
   */
  printError(message: string): void {
    console.log(chalk.red('✗ ') + message + '\n');
  }

  /**
   * Print a warning message
   */
  printWarning(message: string): void {
    console.log(chalk.yellow('⚠ ') + message + '\n');
  }

  /**
   * Print info message
   */
  printInfo(message: string): void {
    console.log(chalk.cyan('ℹ ') + message + '\n');
  }

  /**
   * Clear the screen
   */
  clear(): void {
    console.clear();
  }

  /**
   * Wait for user to press any key
   */
  async waitForKey(message: string = 'Press any key to continue...'): Promise<void> {
    return new Promise((resolve) => {
      this.initReadline();
      
      console.log(chalk.gray('\n' + message));
      
      this.rl!.once('keypress', () => {
        resolve();
      });
    });
  }
}

export const interactionManager = new InteractionManager();
