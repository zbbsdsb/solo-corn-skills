# Solo Corn Skills - Project Structure

## Overview
A comprehensive AI skill stack designed to empower solo founders and solopreneurs to build, market, and scale products like a full team. This project provides modular, plug-and-play AI capabilities covering development, marketing, customer support, and strategic decision-making.

## Architecture Principles
- **Modularity**: Each skill is independent, focused, and composable
- **Extensibility**: Easy to add new skills or enhance existing ones
- **Type Safety**: Full TypeScript support with clear interfaces
- **Testability**: Every skill includes comprehensive testing

## Directory Structure

```
solo-corn-skills/
├── skills/                          # All AI skills live here
│   ├── dev-automation/             # Development automation skills
│   │   ├── code-generator/
│   │   ├── project-scaffold/
│   │   └── review-assistant/
│   ├── marketing/                  # Marketing & content skills
│   │   ├── content-creator/
│   │   ├── social-media/
│   │   └── landing-page/
│   ├── customer-success/           # Customer support skills
│   │   ├── chat-bot/
│   │   ├── ticket-handler/
│   │   └── feedback-analyzer/
│   ├── decision-making/            # Strategic decision skills
│   │   ├── market-analyzer/
│   │   ├── product-strategy/
│   │   └── financial-modeler/
│   └── orchestrator/               # Workflow orchestration skill
│       └── workflow-engine/
├── shared/                         # Shared utilities and types
│   ├── types/
│   │   ├── index.ts
│   │   ├── skill.ts
│   │   └── workflow.ts
│   ├── utils/
│   │   ├── prompt-engineer.ts
│   │   └── validator.ts
│   └── templates/
├── docs/                           # Documentation
│   ├── specs/
│   ├── guides/
│   └── api/
├── tests/                          # Test suite
│   ├── unit/
│   └── integration/
├── examples/                       # Example usage
├── .trae/                          # Trae configuration
│   └── specs/
├── LICENSE
├── README.md
└── PROJECT_STRUCTURE.md
```

## Core Concepts

### 1. Skill Interface
Every skill implements a standardized interface:
- `name`: Unique skill identifier
- `description`: Human-readable description
- `execute(input)`: Main execution function
- `validate(input)`: Input validation

### 2. Workflow System
Skills can be composed into workflows:
- Sequential execution
- Parallel execution
- Conditional branching
- Human-in-the-loop checkpoints

### 3. Prompt Engineering System
Shared utilities for consistent, high-quality LLM prompts across all skills.

## Technology Stack
- **Language**: TypeScript
- **AI Integration**: OpenAI SDK / Anthropic SDK
- **Testing**: Jest
- **Documentation**: Markdown + TypeDoc
