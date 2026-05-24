# ✅ SOLO CORN SKILLS CLI - Acceptance Checklist

## Installation

- [ ] Project structure created in `tools/cli/`
- [ ] `package.json` with all dependencies
- [ ] `tsconfig.json` with proper TypeScript config
- [ ] All source files created

## Core Features

- [ ] **`scs --version`** - Shows version "0.1.0"
- [ ] **`scs --help`** - Shows comprehensive help message
- [ ] **`scs help`** - Shows detailed help
- [ ] Default action (no args) - Shows SOLO CORN banner + help

## Models Commands

### `scs models list`
- [ ] Lists all mental models
- [ ] Shows model name, ID, category, definition preview
- [ ] Color-coded by category
- [ ] Pretty formatting with box drawing
- [ ] Shows total count

### `scs models show <id>`
- [ ] Shows complete model details
- [ ] Name, category, definition
- [ ] Key principles list
- [ ] When to use, example
- [ ] Shows error if model not found
- [ ] Suggests available models on error

### `scs models search <query>`
- [ ] Searches across name, ID, definition
- [ ] Shows matching models
- [ ] Shows "no results" if none found
- [ ] Shows result count

### `scs models categories`
- [ ] Lists all categories
- [ ] Shows category ID, name, model count

## Output Formats

- [ ] **Pretty (default)** - Colorful, formatted output
- [ ] **JSON** - Valid JSON output with `--output json`

## Integration

- [ ] Loads models from `docs/mental-models/`
- [ ] Reads HTML files and extracts information
- [ ] Supports all 5 categories
- [ ] 45+ mental models available

## Documentation

- [ ] `tools/cli/README.md` - Complete documentation
- [ ] `tools/cli/QUICKSTART.md` - Quick start guide
- [ ] `demo.bat` - Windows demo script
- [ ] Main README updated with CLI section
- [ ] CHANGELOG updated with v1.1.0

## Code Quality

- [ ] TypeScript types defined
- [ ] Proper module structure
- [ ] Clean, readable code
- [ ] No syntax errors
- [ ] Well-organized files

## User Experience

- [ ] Friendly, helpful error messages
- [ ] Beautiful color coding (chalk)
- [ ] ASCII art banner (figlet)
- [ ] Clear, organized help output
- [ ] Category-based color scheme

## Technical Requirements

- [ ] Node.js >= 16.0.0 support
- [ ] npm dependencies specified
- [ ] Build script: `npm run build`
- [ ] Linkable: `npm link`

---

## Quick Installation Test Steps

Run these commands to verify:

```bash
# 1. Navigate to CLI directory
cd tools/cli

# 2. Install dependencies
npm install

# 3. Build
npm run build

# 4. Link globally
npm link

# 5. Test basic commands
scs --version
scs --help
scs models list
scs models categories
scs models show first-principles

# 6. Test search
scs models search "decision"
```

---

## Expected Output Examples

### `scs --version`
```
0.1.0
```

### `scs models list`
```
╔══════════════════════════════════════════════════════════════╗
║                    MENTAL MODELS                              ║
╚══════════════════════════════════════════════════════════════╝

1. First Principles
   ID: first-principles
   Category: Decision & Reasoning
   Definition: A mental model helps you think more clearly...

2. Second-Order Thinking
   ...

Total: 45 mental models
```

### `scs models show first-principles`
```
╔══════════════════════════════════════════════════════════════╗
║  FIRST PRINCIPLES                                            ║
╚══════════════════════════════════════════════════════════════╝

Category: Decision & Reasoning
ID: first-principles

═══════════════════════════════════════════════════════════════

DEFINITION
  ...

KEY PRINCIPLES
  • Principle 1
  • Principle 2
  • Principle 3

...
```

---

## Done! 🎉

If all boxes are checked, you're ready to use SOLO CORN SKILLS CLI!
