import { BaseSkill, SkillInput, SkillOutput, SkillValidationResult } from '../../../shared/types';

interface CodeGeneratorInput extends SkillInput {
  description: string;
  language?: string;
  framework?: string;
  outputPath?: string;
}

interface CodeGeneratorOutputData {
  code: string;
  filename: string;
  language: string;
}

export class CodeGeneratorSkill extends BaseSkill {
  config = {
    name: 'code-generator',
    version: '0.1.0',
    description: 'Generates code based on natural language descriptions',
    author: 'Solo Corn Skills',
    tags: ['development', 'code-generation', 'ai']
  };

  async validate(input: SkillInput): Promise<SkillValidationResult> {
    const errors: string[] = [];
    const typedInput = input as CodeGeneratorInput;

    if (!typedInput.description || typeof typedInput.description !== 'string') {
      errors.push('Description is required and must be a string');
    }

    if (typedInput.language && typeof typedInput.language !== 'string') {
      errors.push('Language must be a string');
    }

    return {
      valid: errors.length === 0,
      errors: errors.length > 0 ? errors : undefined
    };
  }

  async execute(input: SkillInput): Promise<SkillOutput> {
    const validation = await this.validate(input);
    if (!validation.valid) {
      return this.createErrorOutput(validation.errors?.join(', ') || 'Validation failed');
    }

    const typedInput = input as CodeGeneratorInput;
    
    try {
      const result = await this.generateCode(typedInput);
      return this.createSuccessOutput(result);
    } catch (error) {
      return this.createErrorOutput(error instanceof Error ? error.message : 'Unknown error');
    }
  }

  private async generateCode(input: CodeGeneratorInput): Promise<CodeGeneratorOutputData> {
    const language = input.language || 'typescript';
    const filename = input.outputPath || `generated.${this.getExtension(language)}`;
    
    return {
      code: this.generateSampleCode(input.description, language, input.framework),
      filename,
      language
    };
  }

  private getExtension(language: string): string {
    const extensions: Record<string, string> = {
      typescript: 'ts',
      javascript: 'js',
      python: 'py',
      go: 'go',
      rust: 'rs'
    };
    return extensions[language.toLowerCase()] || 'txt';
  }

  private generateSampleCode(description: string, language: string, framework?: string): string {
    if (language.toLowerCase() === 'typescript') {
      return `// Generated based on: ${description}
// Framework: ${framework || 'None'}

export interface GeneratedInterface {
  id: string;
  name: string;
  createdAt: Date;
}

export class GeneratedClass {
  private data: GeneratedInterface[] = [];

  add(item: GeneratedInterface): void {
    this.data.push(item);
  }

  getAll(): GeneratedInterface[] {
    return [...this.data];
  }
}
`;
    }
    return `# Generated code based on: ${description}
# Language: ${language}
`;
  }
}

export default CodeGeneratorSkill;
