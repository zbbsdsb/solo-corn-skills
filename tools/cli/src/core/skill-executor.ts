import * as fs from 'fs';
import * as path from 'path';
import { LLMProvider, LLMMessage } from './llm-provider';
import { configManager } from './config';
import {
  Skill,
  SkillMetadata,
  SkillResult,
  InvocationParams,
  InputSchema,
  OutputSchema,
  Capability,
} from '../types';

/**
 * SkillExecutor - The bridge between SKILL.md descriptions and actual LLM execution.
 *
 * For each skill invocation:
 * 1. Loads the SKILL.md file as the system prompt
 * 2. Constructs a user prompt from invocation params
 * 3. Calls the LLM provider
 * 4. Returns structured results
 */

// ---- SKILL.md Frontmatter Parser ----

interface SkillFrontmatter {
  name?: string;
  description?: string;
  triggers?: string[];
  capabilities?: string[];
}

function parseFrontmatter(content: string): { fm: SkillFrontmatter; body: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { fm: {}, body: content };
  }

  const fm: SkillFrontmatter = {};
  const lines = match[1].split('\n');

  let currentKey: string | null = null;
  let inList = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // List continuation
    if (inList && trimmed.startsWith('-')) {
      const value = trimmed.slice(1).trim().replace(/^['"]|['"]$/g, '');
      if (currentKey && Array.isArray((fm as any)[currentKey])) {
        (fm as any)[currentKey].push(value);
      }
      continue;
    }
    inList = false;

    const kvMatch = trimmed.match(/^(\w+):\s*(.*)$/);
    if (!kvMatch) continue;

    const key = kvMatch[1];
    let value = kvMatch[2].trim();

    // Detect list start
    if (value === '') {
      // Waiting for list items
    } else if (value.startsWith('[') && value.endsWith(']')) {
      // Inline array
      const inner = value.slice(1, -1);
      const items = inner
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
      fm[key as keyof SkillFrontmatter] = items as any;
    } else {
      // Simple scalar
      const cleanValue = value.replace(/^['"]|['"]$/g, '');
      (fm as any)[key] = cleanValue;
    }
  }

  return { fm, body: match[2] };
}

// ---- Operation-specific prompt builders ----

interface OperationPromptContext {
  skillName: string;
  skillBody: string;
  inputs: Record<string, any>;
  context: Record<string, any>;
  promptTemplate?: string;
}

function buildProductBuilderPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillName, skillBody, inputs } = ctx;

  const systemPrompt = `You are the "${skillName}" skill from the SOLO CORN SKILLS framework, an AI workflow system for solopreneurs.

Your role and capabilities:
${skillBody}

CRITICAL RULES:
1. Respond ONLY with the requested output. Do NOT include explanations, greetings, or meta-commentary.
2. Be thorough and professional. This is for a real entrepreneur building a real business.
3. Format your response as structured content that the user can directly use.`;

  let userPrompt = '';

  if (inputs.operation === 'validate') {
    userPrompt = `VALIDATE THIS PRODUCT IDEA:

IDEA: ${inputs.idea || inputs.problem}
TARGET MARKET: ${inputs.market || 'B2B SaaS'}
TECH CONSTRAINTS: ${Array.isArray(inputs.constraints) ? inputs.constraints.join(', ') : (inputs.constraints || 'None specified')}

Provide:
1. Market Size & Trends (with estimated numbers)
2. Competitor Landscape (top 3-5 competitors with strengths/weaknesses)
3. Technical Feasibility Assessment
4. Business Viability Score (1-10) with reasoning
5. Key Risks & Mitigations
6. Go/No-Go Recommendation`;
  } else if (inputs.operation === 'spec') {
    userPrompt = `GENERATE A PRODUCT REQUIREMENTS DOCUMENT (PRD):

PRODUCT IDEA: ${inputs.idea || inputs.problem}
FEATURES: ${Array.isArray(inputs.features) ? inputs.features.join(', ') : (inputs.features || 'Core MVP features')}
FORMAT: ${inputs.format || 'prd'}

Generate a complete PRD with:
1. Executive Summary
2. Problem Statement
3. Target Users & Personas
4. User Stories (at least 8-10)
5. Functional Requirements
6. Non-Functional Requirements
7. Acceptance Criteria
8. Success Metrics (KPIs)
9. MVP Scope vs Future Roadmap`;
  } else if (inputs.operation === 'frontend') {
    userPrompt = `GENERATE FRONTEND CODE:

FRAMEWORK: ${inputs.framework || 'react'}
COMPONENTS: ${Array.isArray(inputs.components) ? inputs.components.join(', ') : (inputs.components || 'main')}
STYLING: ${inputs.styling || 'tailwind'}

For each component, provide:
1. TypeScript types/interfaces
2. The component code (production-quality)
3. Styling
4. Brief usage example

Make the code immediately usable.`;
  } else if (inputs.operation === 'backend') {
    userPrompt = `GENERATE BACKEND API CODE:

FRAMEWORK: ${inputs.framework || 'express'}
ENDPOINTS: ${Array.isArray(inputs.endpoints) ? inputs.endpoints.join(', ') : (inputs.endpoints || '/api')}
DATABASE: ${inputs.database || 'postgresql'}

For each endpoint, provide:
1. Route definition
2. Controller/handler logic
3. Input validation
4. Database query
5. Error handling
6. Example request/response

Make the code production-ready.`;
  } else if (inputs.operation === 'full') {
    userPrompt = `COMPLETE PRODUCT BUILD:

IDEA: ${inputs.idea || inputs.problem}
PHASES: ${Array.isArray(inputs.phases) ? inputs.phases.join(', ') : 'validation, spec, frontend, backend, testing'}

Go through each phase systematically:
1. IDEA VALIDATION: Market size, competitors, feasibility
2. PRODUCT SPEC: PRD, user stories, acceptance criteria
3. FRONTEND: Component architecture and key components
4. BACKEND: API design and key endpoints
5. TESTING: Test strategy and key test cases

Provide a comprehensive output for each phase.`;
  } else {
    userPrompt = `PRODUCT BUILDER: GENERAL ANALYSIS\n\nRequest: ${JSON.stringify(inputs)}\n\nProvide thorough analysis and actionable output.`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildLandingPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "landing" skill from the SOLO CORN SKILLS framework.
Your purpose: Guide users from vague ideas to clear direction using the "Doubt + Reconstruction" framework.

${skillBody}

CRITICAL RULES:
1. Be thorough and professional.
2. Ask clarifying questions when needed.
3. Provide a clear, actionable direction.`;

  let userPrompt: string;
  if (inputs.operation === 'first-principles') {
    userPrompt = `FIRST-PRINCIPLES ANALYSIS:

ASSUMPTION TO EXAMINE: ${inputs.assumption || inputs.problem}
DOMAIN: ${inputs.domain || 'general'}

Break down this assumption to its fundamentals:
1. What are we assuming? List all implicit assumptions.
2. Which assumptions can we verify? How?
3. What are the foundational truths?
4. Rebuild from first principles - what changes?
5. Actionable implications.`;
  } else if (inputs.operation === 'clarify') {
    userPrompt = `IDEA CLARIFICATION:

IDEA: ${inputs.idea || inputs.problem}
CONSTRAINTS: ${Array.isArray(inputs.constraints) ? inputs.constraints.join(', ') : (inputs.constraints || 'none')}

Use the Doubt + Reconstruction framework:
1. Surface-level understanding
2. Deep questioning (5 Whys)
3. Core motivation identification
4. Reconstructed clear direction
5. Concrete next steps.`;
  } else if (inputs.operation === 'feasibility') {
    userPrompt = `FEASIBILITY CHECK:

IDEA: ${inputs.idea || inputs.problem}
TIMEFRAME: ${inputs.timeframe || '18 months'}
RESOURCES: ${Array.isArray(inputs.resources) ? inputs.resources.join(', ') : (inputs.resources || 'standard')}

Assess:
1. Technical feasibility (detailed)
2. Market timing
3. Resource requirements
4. Key milestones
5. Overall feasibility score and recommendation.`;
  } else {
    userPrompt = `LANDING: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildStrategicDecisionPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "strategic-decision" skill from the SOLO CORN SKILLS framework.
Your purpose: Business model and competitive analysis for strategic planning.

${skillBody}

CRITICAL RULES:
1. Be analytical and data-driven.
2. Provide concrete, actionable insights.
3. Think like a strategy consultant.`;

  let userPrompt: string;
  if (inputs.operation === 'market-analysis') {
    userPrompt = `MARKET ANALYSIS:

INDUSTRY: ${inputs.industry || ''}
SEGMENT: ${inputs.segment || ''}
GEOGRAPHY: ${inputs.geography || 'global'}

Provide:
1. Market size (TAM, SAM, SOM estimates)
2. Growth trends (CAGR, key drivers)
3. Market structure (fragmented/concentrated)
4. Key players and their market share
5. Entry barriers
6. Opportunities and threats
7. Strategic recommendations.`;
  } else if (inputs.operation === 'business-model') {
    userPrompt = `BUSINESS MODEL CANVAS:

IDEA: ${inputs.idea || inputs.problem}
SEGMENTS: ${Array.isArray(inputs.segments) ? inputs.segments.join(', ') : (inputs.segments || 'general')}

Generate a complete Business Model Canvas:
1. Value Propositions
2. Customer Segments
3. Channels
4. Customer Relationships
5. Revenue Streams
6. Key Resources
7. Key Activities
8. Key Partnerships
9. Cost Structure
10. Summary and viability assessment.`;
  } else if (inputs.operation === 'competitive-analysis') {
    userPrompt = `COMPETITIVE ANALYSIS:

MARKET: ${inputs.market || inputs.industry || ''}
COMPETITORS: ${Array.isArray(inputs.competitors) ? inputs.competitors.join(', ') : (inputs.competitors || 'key players')}

For each competitor:
1. Overview and positioning
2. Strengths
3. Weaknesses
4. Market share estimate
5. Pricing model
6. Differentiation opportunities
7. Competitive matrix summary.`;
  } else if (inputs.operation === 'swot') {
    userPrompt = `SWOT ANALYSIS:

COMPANY: ${inputs.company || 'the venture'}
MARKET: ${inputs.market || 'the target market'}

Complete SWOT:
1. Strengths (internal)
2. Weaknesses (internal)
3. Opportunities (external)
4. Threats (external)
5. Strategic implications
6. Priority actions.`;
  } else {
    userPrompt = `STRATEGIC DECISION: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildResearchIntegrationPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "research-integration" skill from the SOLO CORN SKILLS framework.
Your purpose: Synthesize research from multiple sources into evidence-based insights.

${skillBody}

CRITICAL RULES:
1. Synthesize, don't just list.
2. Cite sources and evidence quality.
3. Provide actionable conclusions.`;

  let userPrompt: string;
  if (inputs.operation === 'synthesize') {
    userPrompt = `RESEARCH SYNTHESIS:

TOPIC: ${inputs.topic || inputs.problem}
SOURCES: ${Array.isArray(inputs.sources) ? inputs.sources.join(', ') : (inputs.sources || 'academic, industry, market')}
TIMEFRAME: ${inputs.timeframe || 'recent (2 years)'}

Provide:
1. Executive summary
2. Key findings (organized by theme)
3. Conflicting evidence / debates
4. Research gaps
5. Practical implications
6. Recommendations for further research.`;
  } else if (inputs.operation === 'insights') {
    userPrompt = `KEY INSIGHTS:

DOMAIN: ${inputs.domain || inputs.problem}
TRENDS: ${inputs.trends !== undefined ? inputs.trends : true}
PATTERNS: ${inputs.patterns !== undefined ? inputs.patterns : true}

Extract:
1. Major trends and shifts
2. Recurring patterns
3. Counter-intuitive findings
4. Emerging opportunities
5. Actionable takeaways.`;
  } else if (inputs.operation === 'papers') {
    userPrompt = `FOUNDATIONAL PAPERS:

FIELD: ${inputs.field || inputs.problem}
SEMINAL: ${inputs.seminal !== undefined ? inputs.seminal : true}
RECENT: ${inputs.recent !== undefined ? inputs.recent : true}

List and summarize:
1. Seminal/foundational papers (if seminal=true)
2. Recent breakthrough papers (if recent=true)
3. For each: key contribution, methodology, impact
4. How they connect
5. What to read next.`;
  } else {
    userPrompt = `RESEARCH INTEGRATION: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildMarketingGrowthPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "marketing-growth" skill from the SOLO CORN SKILLS framework.
Your purpose: Acquisition and retention strategies for growing user bases.

${skillBody}

CRITICAL RULES:
1. Be specific with numbers and channels.
2. Focus on actionable, measurable tactics.
3. Think like a growth hacker.`;

  let userPrompt: string;
  if (inputs.operation === 'gtm') {
    userPrompt = `GO-TO-MARKET STRATEGY:

PRODUCT: ${inputs.product || inputs.problem}
AUDIENCE: ${inputs.audience || 'target users'}
BUDGET: ${inputs.budget || 'modest/boostrapped'}
TIMEFRAME: ${inputs.timeframe || '3 months'}

Create a GTM plan:
1. Target audience personas
2. Positioning and messaging
3. Channel strategy (owned, earned, paid)
4. Launch timeline (first 90 days)
5. Budget allocation
6. Success metrics
7. Risk mitigation.`;
  } else if (inputs.operation === 'acquisition') {
    userPrompt = `CUSTOMER ACQUISITION PLAN:

CHANNELS: ${Array.isArray(inputs.channels) ? inputs.channels.join(', ') : (inputs.channels || 'content, paid, referral')}
CAC TARGET: ${inputs.CAC || inputs.CACTarget || '$100'}
LTV GOAL: ${inputs.LTV || inputs.LTVGoal || '$500'}

Provide:
1. Channel prioritization with rationale
2. Per-channel strategy and tactics
3. CAC estimation by channel
4. Conversion funnel design
5. Testing and optimization plan
6. Budget and resource requirements.`;
  } else if (inputs.operation === 'content') {
    userPrompt = `CONTENT STRATEGY:

TOPICS: ${Array.isArray(inputs.topics) ? inputs.topics.join(', ') : (inputs.topics || 'key topics')}
FORMATS: ${Array.isArray(inputs.formats) ? inputs.formats.join(', ') : (inputs.formats || 'blog, social')}
FREQUENCY: ${inputs.frequency || 'weekly'}

Build a content plan:
1. Content pillars and themes
2. Editorial calendar (first 30 days)
3. Distribution strategy
4. SEO/keyword strategy
5. Repurposing plan
6. Success metrics.`;
  } else {
    userPrompt = `MARKETING GROWTH: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildMentalModelsPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "mental-models" skill from the SOLO CORN SKILLS framework.
Your purpose: Apply cognitive frameworks to help users think more clearly and make better decisions.

${skillBody}

CRITICAL RULES:
1. Apply the model rigorously.
2. Walk through the reasoning step by step.
3. Provide actionable conclusions.`;

  let userPrompt: string;
  if (inputs.operation === 'apply') {
    userPrompt = `APPLY MENTAL MODEL: "${inputs.model}"

CONTEXT: ${inputs.context || ''}
PROBLEM: ${inputs.problem || JSON.stringify(inputs)}

1. Brief explanation of this mental model
2. Step-by-step application to the problem
3. What the model reveals
4. Counter-intuitive insights
5. Decision recommendation
6. Confidence level and caveats.`;
  } else if (inputs.operation === 'recommend') {
    userPrompt = `RECOMMEND MENTAL MODELS:

CONTEXT: ${inputs.context || ''}
PROBLEM TYPE: ${inputs.problemType || 'general'}
PROBLEM: ${inputs.problem || ''}

1. Recommend 3-5 most relevant mental models
2. For each: why it fits this situation
3. Suggested order of application
4. What each model would reveal.`;
  } else {
    userPrompt = `MENTAL MODELS: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildCollectorPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "collector" skill from the SOLO CORN SKILLS framework.
Your purpose: Decision framework engine - analyze problems, select appropriate skills, and orchestrate solutions.

${skillBody}

CRITICAL RULES:
1. Be systematic in your analysis.
2. Recommend specific skills from: product-builder, landing, strategic-decision, research-integration, marketing-growth, mental-models, connector.
3. Provide an orchestration plan with clear sequencing.`;

  let userPrompt: string;
  if (inputs.operation === 'recommend') {
    userPrompt = `SKILL RECOMMENDATION:

CONTEXT: ${inputs.context || inputs.problem}
GOAL: ${inputs.goal || 'solve the problem'}

1. Problem decomposition - break into sub-problems
2. For each sub-problem: which skill(s) apply and why
3. Recommended skill sequence (order matters)
4. Expected outputs at each stage
5. Estimated effort/complexity.`;
  } else if (inputs.operation === 'framework') {
    userPrompt = `DECISION FRAMEWORK:

TYPE: ${inputs.type || 'decision'}
CONTEXT: ${JSON.stringify(inputs.context || inputs)}

1. Apply decision framework
2. Evaluate options systematically
3. Provide weighted recommendation
4. Confidence assessment
5. Next steps.`;
  } else {
    userPrompt = `COLLECTOR ANALYSIS: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

function buildConnectorPrompt(ctx: OperationPromptContext): LLMMessage[] {
  const { skillBody, inputs } = ctx;

  const systemPrompt = `You are the "connector" skill from the SOLO CORN SKILLS framework.
Your purpose: Find connections between domains, enable rapid learning, and transfer knowledge across fields.

${skillBody}

CRITICAL RULES:
1. Make unexpected but valid connections.
2. Teach clearly and memorably.
3. Bridge theory and practice.`;

  let userPrompt: string;
  if (inputs.operation === 'connect') {
    userPrompt = `FIND CROSS-DOMAIN CONNECTIONS:

DOMAINS: ${Array.isArray(inputs.domains) ? inputs.domains.join(' and ') : (inputs.domains || '')}
PATTERN: ${inputs.pattern || 'analogies'}

1. Key principles in each domain
2. Structural similarities
3. Transferable insights
4. Novel combinations
5. Practical applications.`;
  } else if (inputs.operation === 'learn') {
    userPrompt = `RAPID LEARNING PATH:

TOPIC: ${inputs.topic || inputs.problem}
TIMEFRAME: ${inputs.timeframe || '5 hours'}
METHOD: ${inputs.method || 'feynman'}

Design a learning path:
1. Core concepts (the 20% that gives 80%)
2. Learning order (scaffolded)
3. Key mental models for this domain
4. Practice exercises
5. Resources (books, papers, projects)
6. How to test understanding.`;
  } else {
    userPrompt = `CONNECTOR: ${JSON.stringify(inputs)}`;
  }

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: userPrompt },
  ];
}

// ---- Prompt builder registry ----

const promptBuilders: Record<string, (ctx: OperationPromptContext) => LLMMessage[]> = {
  'product-builder': buildProductBuilderPrompt,
  landing: buildLandingPrompt,
  'strategic-decision': buildStrategicDecisionPrompt,
  'research-integration': buildResearchIntegrationPrompt,
  'marketing-growth': buildMarketingGrowthPrompt,
  'mental-models': buildMentalModelsPrompt,
  collector: buildCollectorPrompt,
  connector: buildConnectorPrompt,
};

// ---- Skill Executor ----

function resolveSkillsDir(): string {
  const candidates = [
    path.resolve(process.cwd(), '../..'),           // Running from tools/cli in repo
    path.resolve(__dirname, '../../../..'),          // Running from dist/ in repo
    path.resolve(process.cwd()),                     // Running from repo root
  ];
  for (const dir of candidates) {
    if (fs.existsSync(dir) && fs.existsSync(path.join(dir, 'collector', 'SKILL.md'))) {
      return dir;
    }
  }
  const dataDir = path.resolve(__dirname, '../../data');
  if (fs.existsSync(dataDir)) {
    return dataDir;
  }
  return candidates[0];
}

export class SkillExecutor {
  private skillsDir: string;

  constructor(skillsDir?: string) {
    this.skillsDir = skillsDir || resolveSkillsDir();
  }

  /**
   * Execute a skill by loading its SKILL.md, constructing prompts, and calling LLM.
   */
  async execute(
    skillName: string,
    params: InvocationParams
  ): Promise<SkillResult> {
    const startTime = Date.now();

    // Check API key
    if (!configManager.isConfigured()) {
      return {
        success: false,
        outputs: {},
        error: {
          code: 'E003',
          message: 'API key not configured. Run "scs config --set-api-key <key>" or set SCS_API_KEY environment variable.',
          details: { hint: 'Get an API key from https://platform.openai.com/api-keys' },
        },
      };
    }

    // Load SKILL.md
    const skillPath = path.join(this.skillsDir, skillName, 'SKILL.md');
    if (!fs.existsSync(skillPath)) {
      return {
        success: false,
        outputs: {},
        error: {
          code: 'E001',
          message: `Skill "${skillName}" not found at ${skillPath}`,
        },
      };
    }

    const skillContent = fs.readFileSync(skillPath, 'utf-8');
    const { fm, body } = parseFrontmatter(skillContent);

    // Build prompts
    const builder = promptBuilders[skillName];
    if (!builder) {
      // Generic prompt builder for unknown skills
      const systemPrompt = `You are the "${skillName}" skill from the SOLO CORN SKILLS framework.
${body}

Respond thoroughly and professionally. Provide actionable output.`;

      const userPrompt = `TASK: ${JSON.stringify(params.inputs)}\n\nContext: ${JSON.stringify(params.context)}`;

      return this.callLLM(
        [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        startTime
      );
    }

    const messages = builder({
      skillName,
      skillBody: body,
      inputs: params.inputs,
      context: params.context,
    });

    return this.callLLM(messages, startTime);
  }

  /**
   * Call LLM and return structured result.
   */
  private async callLLM(messages: LLMMessage[], startTime: number): Promise<SkillResult> {
    try {
      const provider = new LLMProvider({
        apiKey: configManager.getApiKey()!,
        baseUrl: configManager.getBaseUrl(),
        model: configManager.getModel(),
        temperature: configManager.getTemperature(),
        maxTokens: configManager.getMaxTokens(),
      });

      const response = await provider.complete({
        model: configManager.getModel(),
        messages,
        temperature: configManager.getTemperature(),
        maxTokens: configManager.getMaxTokens(),
      });

      return {
        success: true,
        outputs: {
          result: response.content,
        },
        metadata: {
          duration: Date.now() - startTime,
          tokens: response.usage?.totalTokens,
          model: response.model,
        },
      };
    } catch (error) {
      return {
        success: false,
        outputs: {},
        error: {
          code: 'E002',
          message: `LLM execution failed: ${error.message}`,
          details: error,
        },
      };
    }
  }
}

export const skillExecutor = new SkillExecutor();
