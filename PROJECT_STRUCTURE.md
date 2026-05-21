# Project Structure - SOLO CORN SKILLS

A comprehensive guide to the architecture and structure of the SOLO CORN SKILLS project.

---

## Table of Contents
1. [Overview](#overview)
2. [Directory Structure](#directory-structure)
3. [Skill Module Architecture](#skill-module-architecture)
4. [Design Principles](#design-principles)
5. [Component Relationships](#component-relationships)
6. [Data Flow](#data-flow)

---

## Overview

SOLO CORN SKILLS is built as a modular, extensible AI skill framework designed for solopreneurs. The project follows a **skill-based architecture** where each capability is packaged as an independent, self-contained module that can be used individually or in combination.

### Core Design Philosophy
- **Modularity**: Each skill is independent and self-contained
- **Extensibility**: Easy to add new skills or extend existing ones
- **Composability**: Skills can work together in workflows
- **Documentation-First**: Each component is well-documented
- **Developer-Friendly**: Clean interfaces and clear patterns

---

## Directory Structure

```
solo-corn-skills/
├── collector/                    # Decision framework skill
│   ├── SKILL.md            # Skill definition and documentation
│   └── references/           # Reference materials and resources
│       ├── documentation/   # Documentation templates
│       ├── frameworks/    # Decision frameworks
│       ├── integration/ # Integration guides
│       ├── meta-cognition/ # Thinking tools
│       └── skill-mapping/  # Skill selection matrices
│
├── connector/                 # Cross-domain connection skill
│   ├── SKILL.md
│   ├── EXECUTION-DOCUMENT.md
│   ├── EXECUTION-DOCUMENT-v2.md
│   └── references/
│       ├── cognitive-science/ # Cognitive science research
│       ├── connection-patterns/ # Pattern libraries
│       ├── domain-templates/ # Domain templates
│       ├── learning-methods/ # Learning techniques
│       └── rapid-learning/ # Rapid learning guides
│
├── design/                   # Brand identity and design assets
│   ├── brand-guidelines.md
│   ├── brutalist-linear-identity.md
│   ├── website-architecture.md
│   ├── logo.svg
│   ├── logo-32.svg
│   ├── logo-128.svg
│   ├── logo-512.svg
│   ├── favicon.svg
│   └── logo.html
│
├── docs/                     # GitHub Pages website
│   ├── _config.yml
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── about/
│   │   └── index.html
│   ├── skills/
│   │   └── index.html
│   └── mental-models/
│       └── index.html
│
├── e2e-test-outputs/         # End-to-end testing artifacts
│   ├── backend/
│   │   ├── src/
│   │   │   ├── middleware/
│   │   │   ├── models/
│   │   │   └── routes/
│   │   └── tests/
│   ├── frontend/
│   │   ├── src/
│   │   │   └── components/
│   │   └── tests/
│   ├── ci-cd/
│   ├── phase1-idea-validation.md
│   ├── phase2-prd.md
│   ├── phase3-ui-ux-wireframes.md
│   ├── phase6-database-schema.md
│   └── phase9-api-documentation.md
│
├── landing/                   # First-principles validation skill
│   ├── SKILL.md
│   └── references/
│       ├── direction-guidance/
│       ├── faith-building/
│       ├── first-principles/
│       ├── idea-clarification/
│       └── prototyping/
│
├── marketing-growth/           # Marketing and growth skill
│   ├── SKILL.md
│   ├── checklist.md
│   └── references/
│       ├── analytics/
│       ├── brand-building/
│       ├── content-marketing/
│       ├── conversion/
│       ├── customer-acquisition/
│       ├── growth-hacking/
│       ├── paid-acquisition/
│       ├── playbooks/
│       └── tool-integration/
│
├── mental-models/           # Mental models library skill
│   ├── SKILL.md
│   ├── core-philosophy.md
│   └── references/
│       ├── combinations/
│       ├── decision-reasoning/
│       ├── execution-learning/
│       ├── integration/
│       ├── navigation/
│       ├── psychology-behavior/
│       ├── strategy-competition/
│       ├── systems-complexity/
│       └── templates/
│
├── product-builder/          # Product development skill
│   ├── SKILL.md
│   └── references/
│       ├── backend/
│       ├── database/
│       ├── deployment/
│       ├── documentation/
│       ├── frontend/
│       ├── idea-validation/
│       ├── specification/
│       ├── testing/
│       └── workflow-orchestrator.md
│
├── research-integration/     # Research synthesis skill
│   ├── SKILL.md
│   ├── core/
│   │   └── mental-models.md
│   └── references/
│       ├── ai-ml/
│       ├── automation-hci/
│       ├── entrepreneurship/
│       ├── organizational-behavior/
│       └── software-engineering/
│
├── strategic-decision/        # Strategic planning skill
│   ├── SKILL.md
│   └── references/
│       ├── business-model/
│       ├── competitive-strategy/
│       ├── integration/
│       ├── market-analysis/
│       ├── playbooks/
│       └── strategic-planning/
│
├── testing/                 # Testing artifacts
│   └── TEST_REPORT.md
│
├── CHANGELOG.md
├── CONTRIBUTING.md
├── FORK.md
├── GOVERNANCE.md
├── LICENSE
├── NEXT_STEPS.md
├── PROJECT_STRUCTURE.md      # This file
├── README.md
├── RELEASE_CHECKLIST.md
└── ROADMAP.md
```

---

## Skill Module Architecture

Each skill module follows a standard, consistent architecture:

### Standard Skill Structure
```
skill-name/
├── SKILL.md                    # Required - Main skill documentation
│   ├── Frontmatter (YAML)
│   │   ├── name
│   │   ├── description
│   │   ├── category
│   │   ├── version
│   │   └── tags
│   ├── Overview
│   ├── Purpose/Use Cases
│   ├── Architecture
│   ├── Quick Start
│   ├── Usage Guidelines
│   └── Related Skills
│
└── references/                 # Required - Reference materials
    ├── [category1/       # Organized by topic
    │   └── [topic1.md
    │   └── [topic2.md
    └── [category2/
        └── ...
```

### SKILL.md Frontmatter Specification
```yaml
---
name: Skill Name
description: Brief description of what the skill does
category: category-name
version: 1.0.0
tags:
  - tag1
  - tag2
  - tag3
---
```

### Core Skills Overview
| Skill | Purpose |
|-------|---------|
| collector | Decision framework for skill selection |
| connector | Cross-domain knowledge connection |
| landing | First-principles idea validation |
| marketing-growth | Acquisition and retention strategies |
| mental-models | 45+ cognitive frameworks |
| product-builder | From idea to deployed code |
| research-integration | Research synthesis from multiple sources |
| strategic-decision | Business model and competitive analysis |

---

## Design Principles

### 1. Skill Independence
Each skill is self-contained and can be used without dependencies on other skills (though they can work together).

### 2. Consistent Documentation
Every skill follows the same documentation pattern for consistency and learnability.

### 3. Reference-First
Skills provide extensive reference materials rather than just code.

### 4. Brutalist Linear Identity
Design philosophy that values:
- Clarity over decoration
- Function over form
- Directness over indirection
- Simplicity over complexity

### 5. Semantic Versioning
All components follow SemVer for clear change communication.

---

## Component Relationships

### Skill Interaction Patterns

```
┌─────────────────────────────────────────────────────────────┐
│                      User / Solopreneur                          │
└──────────────────────────┬──────────────────────────────────┘
                       │
                       ├─────────┬─────────┬─────────┬─────────┤
                       │         │         │         │         │
                       ▼         ▼         ▼         ▼         ▼
                  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
                  │ Collector│ │ Landing │ │Product │ │Marketing│ │Strategic│
                  │         │ │         │ │ Builder │ │ Growth  │ │Decision │
                  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘
                       │         │         │         │         │
                       └─────────┴────┬────┴─────────┴─────────┘
                                    │
                                    ▼
                           ┌──────────────────┐
                           │  Mental Models   │
                           │   Library    │
                           └──────────────────┘
                                    │
                                    ▼
                           ┌──────────────────┐
                           │Research Integration │
                           └──────────────────┘
```

### Common Skill Combinations
1. **Idea → Product**: Landing + Product Builder
2. **Strategy**: Collector + Strategic Decision + Mental Models
3. **Research-Build-Market**: Research Integration + Product Builder + Marketing Growth
4. **Decision-Market-Strategic: Collector + Marketing Growth + Strategic Decision

---

## Data Flow

### Typical Workflow
1. **Input: User provides context/query
2. **Selection: Collector helps select appropriate skills
3. **Processing**: Selected skills process in sequence or parallel
4. **Synthesis**: Results combined into coherent output
5. **Output**: Actionable insights, code, or documentation

### Skill Communication
Skills communicate through:
- Standardized input/output formats
- Reference documentation sharing
- Mental model integration
- Cross-skill documentation in integration guides

---

## Extension Points

### Adding a New Skill
1. Create new directory under project root
2. Follow standard skill structure
3. Create SKILL.md with frontmatter
4. Add reference materials
5. Update README.md
6. Update documentation website

### Extending Existing Skills
1. Add new reference materials
2. Update SKILL.md documentation
3. Follow SemVer versioning
4. Update CHANGELOG.md

---

## File Naming Conventions

### General Rules
- Use kebab-case for directories and files
- Use `.md` for Markdown documentation
- All documentation files use English
- SKILL.md is always the main entry point for skills

### Versioning
- Skills use Semantic Versioning (SemVer)
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

---

*Last Updated: 2026-05-21*
*Version: 1.0.0*
