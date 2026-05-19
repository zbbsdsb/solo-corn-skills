# Brand Guidelines - SOLO CORN SKILLS

## Brand Identity

**SOLO CORN SKILLS (SCS)** is an open-source AI skill workflow system designed for solopreneurs and individuals building their own companies. The brand embodies precision, efficiency, and geometric clarity.

## Logo Usage

### Primary Logo

The primary logo consists of the letters "SCS" constructed entirely from straight-line rectangles, following the **Brutalist Linear Identity** design philosophy.

- **File**: `design/logo.svg`
- **Dimensions**: 400 x 150 (viewBox)
- **Background**: Pure white (#FFFFFF)
- **Foreground**: Pure black (#000000)

### Logo Variants

| File | Dimensions | Use Case |
|------|------------|----------|
| `logo.svg` | 400x150 | Primary, websites, documents |
| `logo-512.svg` | 512x512 | Large displays, presentations |
| `logo-128.svg` | 128x128 | Medium icons, documentation |
| `logo-32.svg` | 32x32 | Small icons, inline usage |
| `favicon.svg` | 32x32 | Browser favicon |

### Clear Space

Maintain minimum clear space equal to the height of the "S" letter on all sides of the logo.

### Prohibited Usage

- Do not add shadows or gradients
- Do not use curves or rounded corners
- Do not change colors (white/black only)
- Do not stretch or distort proportions
- Do not place on colored backgrounds without border

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Pure Black | #000000 | 0, 0, 0 | Logo text, headings, emphasis |
| Pure White | #FFFFFF | 255, 255, 255 | Logo background, base canvas |

### Secondary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Dark Gray | #1A1A1A | 26, 26, 26 | Body text |
| Medium Gray | #666666 | 102, 102, 102 | Secondary text |
| Light Gray | #E5E5E5 | 229, 229, 229 | Borders, dividers |
| Off-White | #FAFAFA | 250, 250, 250 | Card backgrounds |

## Typography

### Primary Font

**System Fonts (No external dependencies)**

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
```

### Monospace Font

**Code and Technical Content**

```css
font-family: 'SF Mono', 'Fira Code', 'JetBrains Mono', Consolas, monospace;
```

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 2.5rem | 700 | 1.2 |
| H2 | 2rem | 700 | 1.3 |
| H3 | 1.5rem | 600 | 1.4 |
| Body | 1rem | 400 | 1.6 |
| Small | 0.875rem | 400 | 1.5 |
| Code | 0.9rem | 400 | 1.5 |

## Visual Principles

### Brutalist Linear Identity

The brand follows strict geometric principles:

1. **Straight Lines Only**: All visual elements use rectangles and straight lines
2. **High Contrast**: Black on white, no intermediate tones in brand marks
3. **Geometric Precision**: Elements align to invisible grids
4. **Minimal Decoration**: Function over form, every element serves a purpose
5. **Architectural Spacing**: Generous whitespace as a design element

### Design Philosophy

> "Form follows function with uncompromising precision. Every element exists because it must—no curves soften the edges, no gradients blur the boundaries. This is communication reduced to its purest geometric essence."

## Application Examples

### README Headers

```markdown
# Project Title
[Logo SVG embedded here]

## Core Features
- Feature 1
- Feature 2
```

### Skill Documentation

```markdown
## SKILL_NAME

**Purpose**: Brief description

**When to Use**: Scenario description
```

### Code Blocks

```javascript
const skill = await invoke('mental-models', {
  context: 'strategic decision',
  model: 'second-order-thinking'
});
```

## GitHub Repository Metadata

### Recommended Topics

```
ai-skills
productivity
workflow
mental-models
solopreneur
one-person-company
tools
automation
```

### Description Template

```
SOLO CORN SKILLS - Extensible AI skill workflows for solopreneurs. 
Build, market, and scale your products with modular skill components.
```

## Contact & Attribution

**Developer**: ceaserzhao  
**GitHub**: [@zbbsdsb](https://github.com/zbbsdsb)

For brand inquiries or collaboration, please open an issue on GitHub.
