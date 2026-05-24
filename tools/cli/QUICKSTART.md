# Quick Start Guide - SOLO CORN SKILLS CLI

## Installation

### Step 1: Install Node.js

Download and install Node.js from https://nodejs.org/

- Recommended: LTS version (18.x or 20.x)
- Minimum: 16.0.0

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Clone the Repository

```bash
git clone https://github.com/zbbsdsb/solo-corn-skills
cd solo-corn-skills
```

### Step 3: Install Dependencies

```bash
cd tools/cli
npm install
```

### Step 4: Build the CLI

```bash
npm run build
```

### Step 5: Link Globally (Optional but Recommended)

```bash
npm link
```

Now you can run `scs` from anywhere!

## First Run

```bash
# Show version
scs --version

# Show help
scs --help

# List mental models
scs models list

# Show a specific model
scs models show first-principles

# List categories
scs models categories

# Search for models
scs models search "decision"
```

## Quick Reference

### Commands

```bash
# Mental models
scs models list
scs models list --category decision-reasoning
scs models show <model-id>
scs models search <query>
scs models categories

# Help
scs help
scs --help
```

### Model IDs

Some popular models:

- `first-principles`
- `second-order-thinking`
- `swot-analysis`
- `ooda-loop`
- `inversion`
- `bayesian-thinking`
- `loss-aversion`

## Development

```bash
# Watch mode (auto-rebuild)
npm run dev

# Build
npm run build

# Test (coming soon)
npm test
```

## Troubleshooting

### `npm` not found

Make sure Node.js is installed and in your PATH.

### `scs` command not found after `npm link`

Try:
1. Restart your terminal
2. Verify the link: `npm ls -g @solo-corn-skills/cli`
3. Re-link: `npm unlink && npm link`

### TypeScript errors

Make sure TypeScript is installed:
```bash
npm install -g typescript
```

## Quick Demo

Open your terminal and run these commands one by one:

```bash
cd tools/cli
npm install
npm run build
npm link
scs --version
scs models list
scs models show first-principles
```

That's it! You're ready to use SOLO CORN SKILLS CLI.

---

For more information, visit: https://zbbsdsb.github.io/solo-corn-skills/