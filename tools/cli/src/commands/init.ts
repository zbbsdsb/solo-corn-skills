import { Command } from 'commander';
import { cyan, bold, gray, yellow } from 'picocolors';
import { interactionManager } from '../utils/inquirer';
import { skillRegistry } from '../core/skill-registry';
import { InitOptions, SkillWorkflow } from '../types';

/**
 * Predefined workflow templates
 */
const WORKFLOW_TEMPLATES: Record<string, SkillWorkflow> = {
  'idea-validation': {
    name: 'idea-validation',
    description: 'Complete path from concept to product validation',
    stages: [
      {
        name: 'clarify',
        skill: 'landing',
        inputs: {},
        outputs: ['problemStatement', 'successCriteria'],
      },
      {
        name: 'validate',
        skill: 'strategic-decision',
        inputs: {},
        outputs: ['validationResult'],
        dependsOn: ['clarify']
      }
    ]
  },
  'product-design': {
    name: 'product-design',
    description: 'From idea to complete product specification document',
    stages: [
      {
        name: 'clarify',
        skill: 'landing',
        inputs: {},
        outputs: ['problemStatement', 'successCriteria'],
      },
      {
        name: 'design',
        skill: 'product-builder',
        inputs: {},
        outputs: ['prdDocument', 'userStories'],
        dependsOn: ['clarify']
      },
      {
        name: 'validate',
        skill: 'strategic-decision',
        inputs: {},
        outputs: ['technicalSpec'],
        dependsOn: ['design']
      }
    ]
  },
  'tech-selection': {
    name: 'tech-selection',
    description: 'Technology selection and architecture design',
    stages: [
      {
        name: 'context',
        skill: 'landing',
        inputs: {},
        outputs: ['problemStatement'],
      },
      {
        name: 'decision',
        skill: 'strategic-decision',
        inputs: { mode: 'technical-validation' },
        outputs: ['technicalSpec'],
        dependsOn: ['context']
      }
    ]
  },
  'market-analysis': {
    name: 'market-analysis',
    description: 'Market analysis and growth strategy',
    stages: [
      {
        name: 'research',
        skill: 'research-integration',
        inputs: {},
        outputs: ['researchResults'],
      },
      {
        name: 'strategy',
        skill: 'marketing-growth',
        inputs: {},
        outputs: ['growthStrategy'],
        dependsOn: ['research']
      }
    ]
  },
  'idea-to-spec': {
    name: 'idea-to-spec',
    description: 'From concept to technical specification document (recommended)',
    stages: [
      {
        name: 'clarify',
        skill: 'landing',
        inputs: {},
        outputs: ['problemStatement', 'successCriteria'],
      },
      {
        name: 'prd',
        skill: 'product-builder',
        inputs: {},
        outputs: ['prdDocument'],
        dependsOn: ['clarify']
      },
      {
        name: 'validate',
        skill: 'strategic-decision',
        inputs: { mode: 'technical-validation' },
        outputs: ['validationResult', 'technicalSpec'],
        dependsOn: ['prd']
      }
    ]
  }
};

/**
 * Question sets for different workflows
 */
const GOAL_QUESTIONS = [
  {
    type: 'select' as const,
    name: 'goal',
    message: 'Please select your goal:',
    choices: [
      { name: 'Idea Validation', value: 'idea-validation', description: 'Validate if your idea is worth pursuing' },
      { name: 'Product Design', value: 'product-design', description: 'From idea to complete product specification' },
      { name: 'Tech Selection', value: 'tech-selection', description: 'Select technology stack and architecture' },
      { name: 'Market Analysis', value: 'market-analysis', description: 'Analyze market and develop growth strategy' },
      { name: 'Custom Workflow', value: 'custom', description: 'Compose your own workflow stages' }
    ]
  },
  {
    type: 'select' as const,
    name: 'timeConstraint',
    message: 'How much time do you have?',
    choices: [
      { name: '30 minutes', value: '30m', description: 'Quick concept validation' },
      { name: '1 hour', value: '1h', description: 'Complete idea validation' },
      { name: '2 hours', value: '2h', description: 'In-depth analysis and planning' },
      { name: 'Unlimited', value: 'unlimited', description: 'Comprehensive deep dive' }
    ]
  },
  {
    type: 'select' as const,
    name: 'background',
    message: 'What is your background?',
    choices: [
      { name: 'Full-stack', value: 'fullstack', description: 'Want to do everything, know a bit of everything' },
      { name: 'Technical', value: 'technical', description: 'Strong at technology, weaker at product and business' },
      { name: 'Business', value: 'business', description: 'Strong at business and operations, weaker at technology' }
    ]
  }
];

/**
 * Generate workflow based on user selections
 */
function generateWorkflow(goal: string, timeConstraint: string, background: string): SkillWorkflow {
  const baseWorkflow = WORKFLOW_TEMPLATES[goal];
  
  if (!baseWorkflow) {
    throw new Error(`Unknown goal: ${goal}`);
  }

  const timeMultiplier = getTimeMultiplier(timeConstraint);
  
  const workflow = { ...baseWorkflow };

  workflow.stages = baseWorkflow.stages.map(stage => ({
    ...stage,
    inputs: {
      ...stage.inputs,
      timeConstraint,
      background,
      timeMultiplier
    }
  }));

  return workflow;
}

/**
 * Get time multiplier based on constraint
 */
function getTimeMultiplier(constraint: string): number {
  switch (constraint) {
    case '30m': return 0.5;
    case '1h': return 1;
    case '2h': return 2;
    case 'unlimited': return 5;
    default: return 1;
  }
}

/**
 * Display workflow preview
 */
function displayWorkflowPreview(workflow: SkillWorkflow): void {
  interactionManager.printHeader('Recommended Workflow Preview');

  console.log(bold('Workflow Name: ') + workflow.name);
  console.log(bold('Description: ') + workflow.description + '\n');

  console.log(bold('Execution Stages:\n'));

  workflow.stages.forEach((stage, index) => {
    const deps = stage.dependsOn && stage.dependsOn.length > 0 
      ? gray(` (depends on: ${stage.dependsOn.join(', ')})`) 
      : '';
    
    const optional = stage.optional ? yellow(' [optional]') : '';
    
    console.log(
      cyan(`${index + 1}. `) + 
      bold(stage.name) + 
      ` - ${stage.skill}${deps}${optional}`
    );
  });

  console.log();
}

/**
 * Interactive init flow
 */
async function interactiveInit(): Promise<void> {
  interactionManager.clear();
  interactionManager.printHeader('SOLO CORN SKILLS - Project Initialization');

  console.log(gray('Let\'s create your workflow step by step...\n'));

  const answers = await interactionManager.askMany(GOAL_QUESTIONS);

  if (answers.goal === 'custom') {
    await handleCustomWorkflow();
  } else {
    await handlePredefinedWorkflow(answers);
  }
}

/**
 * Handle predefined workflow selection
 */
async function handlePredefinedWorkflow(answers: any): Promise<void> {
  const workflow = generateWorkflow(
    answers.goal,
    answers.timeConstraint,
    answers.background
  );

  displayWorkflowPreview(workflow);

  const confirmed = await interactionManager.ask({
    type: 'confirm',
    name: 'confirm',
    message: 'Confirm using this workflow?',
    default: true
  });

  if (confirmed) {
    await saveWorkflow(workflow);
    interactionManager.printSuccess('Workflow saved!');
    printNextSteps(workflow);
  } else {
    interactionManager.printWarning('Okay, let\'s start over...');
    await interactiveInit();
  }
}

/**
 * Handle custom workflow creation
 */
async function handleCustomWorkflow(): Promise<void> {
  interactionManager.printInfo('Custom workflow feature under development...');
  
  const availableSkills = skillRegistry.list();
  
  if (availableSkills.length === 0) {
    interactionManager.printWarning('No skills available');
    return;
  }

  interactionManager.printSuccess(`Found ${availableSkills.length} available skills`);

  console.log(bold('\nAvailable Skills:\n'));
  availableSkills.forEach((skill, index) => {
    console.log(cyan(`${index + 1}. `) + skill.name);
    console.log(gray(`   ${skill.description}\n`));
  });

  interactionManager.printInfo('Custom workflows will be implemented via scs run command');
}

/**
 * Save workflow to file
 */
async function saveWorkflow(workflow: SkillWorkflow): Promise<void> {
  const fs = await import('fs');
  const path = await import('path');
  
  const workflowsDir = path.join(process.cwd(), '.scs', 'workflows');
  
  if (!fs.existsSync(workflowsDir)) {
    fs.mkdirSync(workflowsDir, { recursive: true });
  }

  const filePath = path.join(workflowsDir, `${workflow.name}.json`);
  fs.writeFileSync(filePath, JSON.stringify(workflow, null, 2));

  console.log(gray(`\nWorkflow saved to: ${filePath}\n`));
}

/**
 * Print next steps
 */
function printNextSteps(workflow: SkillWorkflow): void {
  interactionManager.printHeader('Next Steps');

  console.log(bold('Run workflow:\n'));
  console.log(cyan(`  scs run ${workflow.name}\n`));

  console.log(bold('Or run interactively:\n'));
  console.log(cyan(`  scs run ${workflow.name} --interactive\n`));

  console.log(bold('View all available workflows:\n'));
  console.log(cyan('  scs run --list\n'));

  console.log();
}

/**
 * Init command implementation
 */
export async function init(options: InitOptions): Promise<void> {
  try {
    if (options.interactive || (!options.goal && !options.workflow)) {
      await interactiveInit();
    } else {
      await nonInteractiveInit(options);
    }
  } catch (error) {
    interactionManager.printError(`Initialization failed: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Non-interactive init
 */
async function nonInteractiveInit(options: InitOptions): Promise<void> {
  if (options.workflow && WORKFLOW_TEMPLATES[options.workflow]) {
    const workflow = WORKFLOW_TEMPLATES[options.workflow];
    displayWorkflowPreview(workflow);
    await saveWorkflow(workflow);
    interactionManager.printSuccess(`Workflow "${workflow.name}" created!`);
    printNextSteps(workflow);
  } else {
    interactionManager.printError(`Unknown workflow: ${options.workflow}`);
    console.log(bold('\nAvailable workflows:\n'));
    Object.keys(WORKFLOW_TEMPLATES).forEach(name => {
      console.log(cyan(`  - ${name}`));
    });
    console.log();
  }
}

/**
 * Register init command
 */
export function registerInitCommand(program: Command): void {
  program
    .command('init [workflow]')
    .description('Interactive project workflow creation')
    .option('-i, --interactive', 'Interactive mode', false)
    .option('-g, --goal <goal>', 'Goal type')
    .option('-t, --time <time>', 'Time constraint')
    .option('-b, --background <background>', 'Background type')
    .action(async (workflow, options) => {
      await init({
        interactive: options.interactive,
        goal: options.goal,
        timeConstraint: options.time,
        background: options.background,
        workflow: workflow
      });
    });
}
