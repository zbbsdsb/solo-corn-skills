# SOLO CORN SKILLS CLI

A command-line interface for SOLO CORN SKILLS - Build billion-dollar companies, one skill at a time.

## Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation

#### From npm (Recommended)

```bash
npm install -g @oasis-npm/scs
```

Package page: https://www.npmjs.com/package/@oasis-npm/scs

#### From Source

```bash
git clone https://github.com/zbbsdsb/solo-corn-skills
cd solo-corn-skills/tools/cli
npm install
npm run build
npm link
```

## Usage

### Basic Commands

```bash
# Show version
scs --version

# Show help
scs --help

# Mental models commands
scs models list
scs models show first-principles
scs models search "decision"
scs models categories

# Workflow commands
scs init
scs run idea-to-spec
scs run --list

# Skill commands
scs skills
scs skill landing
scs invoke landing --interactive
```

### Mental Models

#### List all mental models

```bash
scs models list

# Filter by category
scs models list --category decision-reasoning
```

#### Show a specific model

```bash
scs models show first-principles
scs models show swot-analysis
scs models show ooda-loop
```

#### Search for models

```bash
scs models search "decision"
scs models search "strategy"
scs models search "cognitive"
```

#### List categories

```bash
scs models categories
```

### Init - Start a New Project

Initialize a new project workflow interactively:

```bash
scs init

# Or with pre-selected workflow
scs init idea-to-spec
```

**What it does:**
- Asks about your goal (idea validation, product design, etc.)
- Asks about your background and time constraints
- Recommends an appropriate workflow
- Saves the workflow configuration

### Run - Execute a Workflow

Run pre-defined or custom workflows:

```bash
# Run a specific workflow
scs run idea-to-spec

# Interactive mode (asks questions for input)
scs run idea-to-spec --interactive

# List all available workflows
scs run --list

# Show details about a workflow
scs run --show idea-to-spec

# Save output to file
scs run idea-to-spec --output my-output.json

# Skip certain stages
scs run idea-to-spec --skip clarify
```

**Available Workflows:**
- `idea-to-spec` - From concept to technical specification
- `idea-validation` - Quick idea validation
- `product-design` - Full product design workflow
- `tech-selection` - Technology selection and architecture
- `market-analysis` - Market analysis and strategy

### Skills - Manage and Invoke Skills

#### List All Skills

```bash
scs skills
```

Shows all registered skills with metadata and categories.

#### Show Skill Details

```bash
scs skill landing
scs skill product-builder
scs skill strategic-decision
```

Shows detailed information about a skill including:
- Input schema
- Output schema
- Capabilities
- Usage examples

#### Invoke a Skill

```bash
# Basic invocation
scs invoke landing --input '{"idea":"I want to build a product"}'

# Interactive mode (most common)
scs invoke landing --interactive

# Chain multiple skills
scs invoke landing --then product-builder --then strategic-decision

# With context from file
scs invoke landing --input @my-input.json

# Save output to file
scs invoke landing --output result.json

# Multiple options together
scs invoke landing --interactive --output result.json
```

#### Interactive Mode Flow

```bash
scs invoke landing --interactive

# What happens:
# 1. Asks for required inputs
# 2. Executes the skill
# 3. Shows results in a user-friendly format
# 4. Asks if you want to continue to next skill
```

### Output Formats

```bash
# Pretty print (default)
scs models list

# JSON format
scs models show first-principles --output json

# YAML format
scs models show first-principles --output yaml
```

## Categories

- **Decision & Reasoning** - First Principles, Second-Order Thinking, Inversion, etc.
- **Strategy & Competition** - SWOT Analysis, Porter's Five Forces, Game Theory Basics, Competitive Moats, Asymmetric Betting, Power Dynamics, Bargaining Power, First Mover Advantage, Niche Dominance
- **Systems & Complexity** - Feedback Loops, Stocks and Flows, Emergence, Chaos Theory Basics, Leverage Points, Reinforcement Loops, Balancing Loops, Tipping Points
- **Psychology & Behavior** - Cognitive Biases Overview, Confirmation Bias Awareness, Survivorship Bias Awareness, Incentive Structures, Loss Aversion, Commitment & Consistency, Social Proof, Scarcity Effect, Authority Bias, Availability Heuristic, Anchoring Bias, Status Quo Bias, Occam's Razor, Hanlon's Razor, Circle of Competence, Bayesian Thinking, Regression to Mean
- **Execution & Learning** - OODA Loop, PDCA Cycle, Learning Curve, Compound Growth, Margins of Safety, Optionality, Two Boxes Thinking, Kaizen

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Run tests
npm test

# Lint
npm run lint

# Format
npm run format
```

## Project Structure

```
tools/cli/
├── src/
│   ├── index.ts                 # Main entry point
│   ├── commands/
│   │   ├── init.ts              # Init command
│   │   ├── run.ts               # Run command
│   │   ├── invoke.ts            # Invoke command
│   │   └── models/
│   │       └── index.ts         # Models commands
│   ├── core/
│   │   ├── model-loader.ts      # Data loading
│   │   ├── skill-registry.ts    # Skill management
│   │   ├── workflow-engine.ts   # Workflow execution
│   │   └── output-formatter.ts  # Output formatting
│   ├── utils/
│   │   └── inquirer.ts          # Interactive prompts
│   └── types/
│       └── index.ts             # TypeScript types
├── data/                        # Skill data
├── dist/                        # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

## Complete Examples

### Example 1: Idea to Spec (Recommended)

```bash
# 1. Initialize project
scs init

# Select: "Idea to Spec" workflow

# 2. Run the workflow
scs run idea-to-spec --interactive

# Or run step by step (chaining)
scs invoke landing --interactive --then product-builder --then strategic-decision --output spec.json
```

### Example 2: Quick Idea Validation

```bash
# Run validation workflow directly
scs run idea-validation --interactive

# Output:
# - Problem statement
# - Feasibility score
# - Recommendations
```

### Example 3: Invoking Single Skill

```bash
# Just want to clarify an idea
scs invoke landing --interactive

# Just want to generate spec
scs invoke product-builder --input '{"problem":"I want to build an AI tool"}'
```

## Contributing

Please refer to the main [CONTRIBUTING.md](../../CONTRIBUTING.md) file for guidelines.

## Links

- **Website**: https://zbbsdsb.github.io/solo-corn-skills/
- **GitHub**: https://github.com/zbbsdsb/solo-corn-skills
- **npm Package**: https://www.npmjs.com/package/@oasis-npm/scs
- **Documentation**: https://zbbsdsb.github.io/solo-corn-skills/

## License

MIT

---

## What's New in v0.2.0

- 🎉 **Skill Registry** - Auto-discovers and manages all skills
- 🚀 **Workflow Engine** - Executes multi-stage workflows
- 💬 **Interactive Mode** - User-friendly question-based interaction
- 🔗 **Skill Chaining** - Chain multiple skills together
- 📝 **New Commands** - `init`, `run`, `skills`, `skill`, `invoke`
- 📚 **Updated Documentation** - Comprehensive guides and examples

---

## Quick Reference

```bash
# Most useful commands
scs init                                  # Start a new project
scs skills                                # List all skills
scs run idea-to-spec --interactive       # Run idea-to-spec workflow
scs invoke landing --interactive          # Interactive skill invocation
scs invoke landing --then product-builder # Chain skills
scs --help                                # Show help
```
