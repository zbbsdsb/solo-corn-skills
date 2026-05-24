# SOLO CORN SKILLS CLI

A command-line interface for SOLO CORN SKILLS - Build billion-dollar companies, one skill at a time.

## Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation

#### From npm (Coming Soon)

```bash
npm install -g @solo-corn-skills/cli
```

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

### Output Formats

```bash
# Pretty print (default)
scs models list

# JSON format
scs models show first-principles --output json
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
│   │   └── models/
│   │       └── index.ts         # Models commands
│   ├── core/
│   │   ├── model-loader.ts      # Data loading
│   │   └── output-formatter.ts  # Output formatting
│   ├── utils/
│   └── types/
│       └── index.ts             # TypeScript types
├── data/                        # Skill data
├── dist/                        # Compiled output
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing

Please refer to the main [CONTRIBUTING.md](../../CONTRIBUTING.md) file for guidelines.

## Links

- **Website**: https://zbbsdsb.github.io/solo-corn-skills/
- **GitHub**: https://github.com/zbbsdsb/solo-corn-skills
- **Documentation**: https://zbbsdsb.github.io/solo-corn-skills/

## License

MIT