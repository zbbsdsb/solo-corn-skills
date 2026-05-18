export interface SkillInput {
  [key: string]: unknown;
}

export interface SkillOutput {
  success: boolean;
  data?: unknown;
  error?: string;
  metadata?: {
    timestamp: number;
    version: string;
    [key: string]: unknown;
  };
}

export interface SkillValidationResult {
  valid: boolean;
  errors?: string[];
}

export interface SkillConfig {
  name: string;
  version: string;
  description: string;
  author?: string;
  tags?: string[];
}

export interface Skill {
  config: SkillConfig;
  
  validate(input: SkillInput): Promise<SkillValidationResult>;
  
  execute(input: SkillInput): Promise<SkillOutput>;
}

export abstract class BaseSkill implements Skill {
  abstract config: SkillConfig;
  
  abstract validate(input: SkillInput): Promise<SkillValidationResult>;
  
  abstract execute(input: SkillInput): Promise<SkillOutput>;
  
  protected createSuccessOutput(data: unknown): SkillOutput {
    return {
      success: true,
      data,
      metadata: {
        timestamp: Date.now(),
        version: this.config.version
      }
    };
  }
  
  protected createErrorOutput(error: string): SkillOutput {
    return {
      success: false,
      error,
      metadata: {
        timestamp: Date.now(),
        version: this.config.version
      }
    };
  }
}
