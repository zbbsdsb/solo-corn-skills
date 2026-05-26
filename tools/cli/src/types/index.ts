export interface MentalModel {
  id: string;
  name: string;
  category: string;
  definition: string;
  keyPrinciples: string[];
  whenToUse: string;
  example: string;
  relatedModels?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  modelCount: number;
}

export interface ModelSearchResult {
  model: MentalModel;
  relevanceScore: number;
  matchingFields: string[];
}

export interface OutputFormat {
  pretty: boolean;
  json: boolean;
  yaml: boolean;
  markdown: boolean;
}

export interface Config {
  defaultCategory?: string;
  outputFormat: 'pretty' | 'json' | 'yaml' | 'markdown';
  verbose: boolean;
  quiet: boolean;
  cacheEnabled: boolean;
  cacheDuration: number;
}

// ============================================================
// Skill Interface Standard Types
// ============================================================

export type SchemaType = 'string' | 'number' | 'boolean' | 'object' | 'array';

export interface InputSchema {
  name: string;
  type: SchemaType;
  required: boolean;
  description: string;
  default?: any;
  options?: any[];
  validation?: {
    pattern?: string;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
  };
}

export interface OutputSchema {
  name: string;
  type: SchemaType;
  description: string;
}

export interface Capability {
  name: string;
  description: string;
  inputs: InputSchema[];
  outputs: OutputSchema[];
}

export interface SkillMetadata {
  name: string;
  version: string;
  description: string;
  category: string[];
  capabilities: Capability[];
  author?: string;
  tags?: string[];
  homepage?: string;
  repository?: string;
}

export interface Skill {
  metadata: SkillMetadata;
  inputs: InputSchema[];
  outputs: OutputSchema[];
  invoke(params: InvocationParams): Promise<SkillResult>;
  init?(): Promise<void>;
  cleanup?(): Promise<void>;
}

export interface InvocationParams {
  context: Record<string, any>;
  inputs: Record<string, any>;
  options?: {
    streaming?: boolean;
    timeout?: number;
  };
}

export interface SkillExecutionMetadata {
  duration?: number;
  tokens?: number;
  model?: string;
}

export interface SkillError {
  code: string;
  message: string;
  details?: any;
}

export interface SkillResult {
  success: boolean;
  outputs: Record<string, any>;
  metadata?: {
    duration: number;
    tokens?: number;
    model?: string;
  };
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

// ============================================================
// Workflow Types
// ============================================================

export interface WorkflowStage {
  name: string;
  skill: string;
  inputs: Record<string, any>;
  outputs: string[];
  dependsOn?: string[];
  optional?: boolean;
}

export interface SkillWorkflow {
  name: string;
  description: string;
  stages: WorkflowStage[];
  metadata?: {
    author?: string;
    version?: string;
    tags?: string[];
  };
}

export interface WorkflowExecutionContext {
  workflow: SkillWorkflow;
  currentStageIndex: number;
  stageOutputs: Record<string, Record<string, any>>;
  startTime: Date;
}

// ============================================================
// Interactive Mode Types
// ============================================================

export interface QuestionOption {
  name: string;
  value: string;
  description?: string;
}

export interface Question {
  type: 'input' | 'select' | 'multiselect' | 'confirm' | 'password';
  name: string;
  message: string;
  choices?: QuestionOption[];
  default?: any;
  validate?: (value: any) => boolean | string;
  when?: (answers: any) => boolean;
}

export interface InteractionSession {
  questions: Question[];
  answers: Record<string, any>;
  completed: boolean;
}

// ============================================================
// CLI Command Types
// ============================================================

export interface InitOptions {
  interactive: boolean;
  goal?: string;
  timeConstraint?: string;
  background?: string;
  workflow?: string;
}

export interface RunOptions {
  interactive: boolean;
  skip?: string[];
  output?: string;
  workflow?: string;
}

export interface InvokeOptions {
  interactive: boolean;
  input?: string;
  output?: string;
  chain?: string[];
  context?: Record<string, any>;
}