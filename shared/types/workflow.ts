import { SkillInput, SkillOutput } from './skill';

export type WorkflowStepType = 'skill' | 'condition' | 'human' | 'parallel';

export interface WorkflowStep {
  id: string;
  type: WorkflowStepType;
  name: string;
  dependsOn?: string[];
}

export interface SkillWorkflowStep extends WorkflowStep {
  type: 'skill';
  skillName: string;
  input: SkillInput | ((context: WorkflowContext) => SkillInput);
}

export interface ConditionWorkflowStep extends WorkflowStep {
  type: 'condition';
  condition: (context: WorkflowContext) => boolean;
  trueStep: string;
  falseStep: string;
}

export interface HumanWorkflowStep extends WorkflowStep {
  type: 'human';
  prompt: string;
  outputKey: string;
}

export interface ParallelWorkflowStep extends WorkflowStep {
  type: 'parallel';
  steps: WorkflowStep[];
}

export interface WorkflowContext {
  [key: string]: unknown;
  stepOutputs: Map<string, SkillOutput>;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description: string;
  version: string;
  steps: WorkflowStep[];
  initialContext?: WorkflowContext;
}

export interface WorkflowExecutionResult {
  success: boolean;
  finalContext: WorkflowContext;
  errors?: string;
  completedSteps: string[];
  failedSteps: string[];
}

export interface WorkflowEngine {
  execute(workflow: WorkflowDefinition, initialContext?: WorkflowContext): Promise<WorkflowExecutionResult>;
  
  registerSkill(skill: unknown): void;
  
  getRegisteredSkills(): string[];
}
