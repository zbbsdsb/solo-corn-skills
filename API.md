# API Documentation - SOLO CORN SKILLS

Complete API reference for the SOLO CORN SKILLS framework.

## 🌐 Interactive Reference

**Prefer learning through a web interface?**

🌐 **[https://zbbsdsb.github.io/solo-corn-skills/](https://zbbsdsb.github.io/solo-corn-skills/)**

The website includes:
- Complete API documentation with examples
- Interactive mental models reference
- Quick reference guides and comparison tools
- Visual documentation of skill workflows

---

## Table of Contents
1. [Introduction](#introduction)
2. [Skill Invocation API](#skill-invocation-api)
3. [Input/Output Formats](#inputoutput-formats)
4. [Skill-Specific APIs](#skill-specific-apis)
5. [Error Handling](#error-handling)
6. [Examples](#examples)

---

## Introduction

SOLO CORN SKILLS provides a consistent, unified API for invoking and working with all skills. Each skill follows the same invocation pattern while providing specialized functionality.

### Design Principles
- **Consistency**: All skills use the same invocation pattern
- **Type Safety**: Clear input/output specifications
- **Extensibility**: Easy to add new parameters and functionality
- **Self-Documenting**: Skills provide their own documentation

---

## Skill Invocation API

### Standard Invocation Pattern

```javascript
// Generic skill invocation
const result = await invoke(skillName, options);
```

### invoke() Function Signature

```typescript
function invoke(
  skillName: string,
  options: SkillOptions
): Promise<SkillResult>;

interface SkillOptions {
  context?: string;
  input?: any;
  parameters?: Record<string, any>;
  format?: 'json' | 'markdown' | 'text';
}

interface SkillResult {
  success: boolean;
  data?: any;
  error?: string;
  metadata?: {
    skill: string;
    version: string;
    timestamp: string;
  };
}
```

### Skill Names
Valid skill names for invocation:
- `collector`
- `connector`
- `landing`
- `marketing-growth`
- `mental-models`
- `product-builder`
- `research-integration`
- `strategic-decision`

---

## Input/Output Formats

### Context Object
```typescript
interface Context {
  user?: {
    id: string;
    role: string;
  };
  project?: {
    name: string;
    stage: string;
  };
  history?: Array<{
    skill: string;
    timestamp: string;
  }>;
  preferences?: Record<string, any>;
}
```

### Response Format
```json
{
  "success": true,
  "data": {
    // Skill-specific data
  },
  "metadata": {
    "skill": "mental-models",
    "version": "1.0.0",
    "timestamp": "2026-05-21T10:30:00Z"
  }
}
```

---

## Skill-Specific APIs

### 1. Mental Models Skill

#### mental-models API
```typescript
// Get all mental models
const allModels = await invoke('mental-models', {
  operation: 'list'
});

// Get specific mental model
const model = await invoke('mental-models', {
  operation: 'get',
  model: 'first-principles'
});

// Apply mental model to problem
const result = await invoke('mental-models', {
  operation: 'apply',
  model: 'bayesian-thinking',
  context: 'Product decision about feature prioritization',
  problem: 'Should we build Feature A or Feature B first?'
});

// Find relevant models
const recommendations = await invoke('mental-models', {
  operation: 'recommend',
  context: 'Competitive strategy analysis',
  problemType: 'strategic-decision'
});
```

#### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operation` | string | Yes | `list`, `get`, `apply`, `recommend` |
| `model` | string | No | Specific model name |
| `context` | string | No | Context for application |
| `problem` | string | No | Problem to analyze |
| `problemType` | string | No | Type of problem |

#### Available Models
See [mental-models/SKILL.md](mental-models/SKILL.md) for complete list of 45+ models.

---

### 2. Product Builder Skill

#### product-builder API
```typescript
// Validate an idea
const validation = await invoke('product-builder', {
  operation: 'validate',
  idea: 'Task management app for remote teams',
  market: 'B2B SaaS',
  constraints: ['React', 'Node.js']
});

// Generate specification
const spec = await invoke('product-builder', {
  operation: 'spec',
  idea: 'Task management app',
  features: ['user auth', 'task boards', 'team collaboration'],
  format: 'prd'
});

// Generate frontend components
const components = await invoke('product-builder', {
  operation: 'frontend',
  framework: 'react',
  components: ['TaskCard', 'BoardView', 'UserProfile'],
  styling: 'tailwind'
});

// Generate backend API
const api = await invoke('product-builder', {
  operation: 'backend',
  framework: 'express',
  endpoints: ['/api/tasks', '/api/users', '/api/teams'],
  database: 'postgresql'
});

// Full workflow
const fullBuild = await invoke('product-builder', {
  operation: 'full',
  idea: 'Task management app',
  phases: ['validation', 'spec', 'frontend', 'backend', 'testing']
});
```

#### Parameters
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `operation` | string | Yes | `validate`, `spec`, `frontend`, `backend`, `full` |
| `idea` | string | Yes | Product idea description |
| `features` | string[] | No | Feature list |
| `framework` | string | No | Framework choice |
| `phases` | string[] | No | Phases to execute |

---

### 3. Collector Skill

#### collector API
```typescript
// Get skill recommendations
const recommendations = await invoke('collector', {
  operation: 'recommend',
  context: 'I need to validate a startup idea',
  goal: 'idea-validation'
});

// Decision framework
const framework = await invoke('collector', {
  operation: 'framework',
  type: 'skill-selection',
  options: ['landing', 'research-integration', 'strategic-decision']
});

// Confidence calibration
const calibration = await invoke('collector', {
  operation: 'calibrate',
  decision: 'Choose product direction',
  confidence: 0.7,
  factors: ['market', 'technology', 'team']
});
```

---

### 4. Landing Skill

#### landing API
```typescript
// First-principles analysis
const analysis = await invoke('landing', {
  operation: 'first-principles',
  assumption: 'Users need more features',
  domain: 'product'
});

// Idea clarification
const clarification = await invoke('landing', {
  operation: 'clarify',
  idea: 'AI-powered writing assistant',
  constraints: ['ethical', 'practical', 'scalable']
});

// Feasibility check
const feasibility = await invoke('landing', {
  operation: 'feasibility',
  idea: 'Space tourism booking platform',
  timeframe: '5-years',
  resources: ['capital', 'expertise', 'partnerships']
});
```

---

### 5. Strategic Decision Skill

#### strategic-decision API
```typescript
// Market analysis
const market = await invoke('strategic-decision', {
  operation: 'market-analysis',
  industry: 'AI',
  segment: 'enterprise',
  geography: 'global'
});

// Business model canvas
const canvas = await invoke('strategic-decision', {
  operation: 'business-model',
  idea: 'Subscription-based analytics platform',
  segments: ['SMBs', 'Enterprise']
});

// Competitive landscape
const competition = await invoke('strategic-decision', {
  operation: 'competitive-analysis',
  market: 'project-management',
  competitors: ['Asana', 'Monday.com', 'Trello']
});

// SWOT analysis
const swot = await invoke('strategic-decision', {
  operation: 'swot',
  company: 'MyStartup',
  market: 'AI productivity tools'
});
```

---

### 6. Marketing Growth Skill

#### marketing-growth API
```typescript
// Go-to-market strategy
const gtm = await invoke('marketing-growth', {
  operation: 'gtm',
  product: 'AI writing tool',
  audience: 'content creators',
  budget: '$50000'
});

// Customer acquisition
const acquisition = await invoke('marketing-growth', {
  operation: 'acquisition',
  channels: ['content', 'paid', 'referral'],
  CAC: '$100',
  LTV: '$500'
});

// Content strategy
const content = await invoke('marketing-growth', {
  operation: 'content',
  topics: ['AI', 'productivity', 'writing'],
  formats: ['blog', 'video', 'newsletter'],
  frequency: 'weekly'
});
```

---

### 7. Research Integration Skill

#### research-integration API
```typescript
// Synthesize research
const synthesis = await invoke('research-integration', {
  operation: 'synthesize',
  topic: 'AI in enterprise software',
  sources: ['academic', 'industry', 'market'],
  timeframe: '2-years'
});

// Key insights
const insights = await invoke('research-integration', {
  operation: 'insights',
  domain: 'software-engineering',
  trends: true,
  patterns: true
});

// Foundational papers
const papers = await invoke('research-integration', {
  operation: 'papers',
  field: 'machine-learning',
  seminal: true,
  recent: true
});
```

---

### 8. Connector Skill

#### connector API
```typescript
// Find connections between domains
const connections = await invoke('connector', {
  operation: 'connect',
  domains: ['biology', 'computer-science'],
  pattern: 'analogies'
});

// Rapid learning path
const learning = await invoke('connector', {
  operation: 'learn',
  topic: 'distributed systems',
  timeframe: '5-hours',
  method: 'feynman'
});

// Knowledge transfer
const transfer = await invoke('connector', {
  operation: 'transfer',
  source: 'music',
  target: 'product-design',
  concepts: ['rhythm', 'harmony', 'structure']
});
```

---

## Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    code: "SKILL_NOT_FOUND",
    message: "Skill 'invalid-skill' not found",
    details: {
      availableSkills: ['collector', 'connector', 'landing', 'mental-models', 'product-builder', 'marketing-growth', 'research-integration', 'strategic-decision']
    }
  },
  "metadata": {
    timestamp: "2026-05-21T10:30:00Z"
  }
}
```

### Error Codes
| Code | Description |
|------|-------------|
| `SKILL_NOT_FOUND` | Requested skill does not exist |
| `INVALID_PARAMETER` | Invalid parameter provided |
| `MISSING_REQUIRED` | Required parameter missing |
| `OPERATION_FAILED` | Skill operation failed |
| `CONTEXT_ERROR` | Invalid or missing context |
| `FORMAT_ERROR` | Output format error |

---

## Examples

### Example 1: Using Mental Models for Decision Making
```javascript
// Recommend models for strategic decision
const models = await invoke('mental-models', {
  operation: 'recommend',
  context: 'Deciding whether to pivot our startup',
  problemType: 'strategic-decision'
});

// Apply Bayesian thinking
const result = await invoke('mental-models', {
  operation: 'apply',
  model: 'bayesian-thinking',
  context: 'Startup pivot decision',
  problem: 'Current product has 1000 users but slow growth. Should we pivot?'
});

console.log(result);
```

### Example 2: Building a Product End-to-End
```javascript
// Step 1: Validate
const validation = await invoke('product-builder', {
  operation: 'validate',
  idea: 'AI-powered code review tool'
});

if (validation.success) {
  // Step 2: Generate spec
  const spec = await invoke('product-builder', {
    operation: 'spec',
    idea: 'AI-powered code review tool',
    features: ['automated reviews', 'suggestions', 'integration']
  });
  
  // Step 3: Build frontend
  const frontend = await invoke('product-builder', {
    operation: 'frontend',
    framework: 'react',
    components: ['CodeReview', 'SuggestionPanel', 'Dashboard']
  });
  
  // Step 4: Build backend
  const backend = await invoke('product-builder', {
    operation: 'backend',
    framework: 'express',
    endpoints: ['/api/reviews', '/api/suggestions', '/api/projects']
  });
}
```

### Example 3: Complete Strategic Analysis
```javascript
// 1. Validate assumptions first
const assumptions = await invoke('landing', {
  operation: 'first-principles',
  assumption: 'Enterprise customers want more features',
  domain: 'product'
});

// 2. Get market analysis
const market = await invoke('strategic-decision', {
  operation: 'market-analysis',
  industry: 'developer-tools',
  segment: 'enterprise'
});

// 3. Synthesize research
const research = await invoke('research-integration', {
  operation: 'synthesize',
  topic: 'developer tools market',
  sources: ['industry', 'academic']
});

// 4. Get mental models
const models = await invoke('mental-models', {
  operation: 'recommend',
  context: 'Enterprise product strategy',
  problemType: 'strategic-decision'
});

// 5. Make decision with collector
const decision = await invoke('collector', {
  operation: 'framework',
  type: 'decision',
  inputs: { assumptions, market, research, models }
});
```

### Example 4: Marketing Growth Campaign
```javascript
// Get GTM strategy
const gtm = await invoke('marketing-growth', {
  operation: 'gtm',
  product: 'Developer productivity suite',
  audience: 'software engineers',
  budget: '$100000',
  timeframe: '3-months'
});

// Content strategy
const content = await invoke('marketing-growth', {
  operation: 'content',
  topics: ['productivity', 'coding', 'developer-tools'],
  formats: ['blog', 'youtube', 'twitter'],
  frequency: '3x-weekly'
});

// Acquisition plan
const acquisition = await invoke('marketing-growth', {
  operation: 'acquisition',
  channels: ['seo', 'paid', 'community'],
  CACTarget: '$150',
  LTVGoal: '$1200'
});
```

---

## Best Practices

1. **Start Small**: Invoke one skill at a time before chaining
2. **Validate Results**: Always check the `success` flag
3. **Handle Errors**: Implement proper error handling for all invocations
4. **Use Context**: Provide rich context for better results
5. **Chain Wisely**: Use collector skill to help decide skill combinations
6. **Leverage Mental Models**: Use mental-models skill as foundation for decisions

---

*Last Updated: 2026-05-21*
*Version: 1.0.0*
