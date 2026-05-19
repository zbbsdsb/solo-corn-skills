# GitHub Pages Website - Architecture & Design

## Overview
This document describes the architecture and design of the SOLO CORN SKILLS GitHub Pages website.

## Technical Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Hosting** | GitHub Pages | Free, integrated, simple |
| **Build System** | Pure Static HTML/CSS/JS | No dependencies, fast, simple |
| **Styling** | Custom CSS (Brutalist Linear) | Follow brand identity |
| **Markdown** | Direct Markdown files | Keep content simple |

---

## Directory Structure

```
docs/
├── index.html              # Home page
├── css/
│   └── style.css          # Stylesheet
├── js/
│   └── main.js            # Scripts (minimal)
├── assets/
│   ├── images/
│   │   └── logo.svg
│   │   └── logo-128.svg
│   └── fonts/             # System fonts only
├── skills/                # Skill documentation
│   ├── index.html
│   ├── research-integration.html
│   ├── product-builder.html
│   ├── marketing-growth.html
│   ├── collector.html
│   ├── landing.html
│   ├── strategic-decision.html
│   └── mental-models.html
├── mental-models/         # Mental model library
│   ├── index.html
│   ├── decision-reasoning/
│   ├── strategy-competition/
│   ├── systems-complexity/
│   ├── psychology-behavior/
│   └── execution-learning/
├── about/
│   ├── index.html
│   ├── contributing.html
│   ├── roadmap.html
│   └── governance.html
└── _config.yml            # GitHub Pages config
```

---

## Page Architecture

### Home Page (`index.html`)
1. Hero section with logo
2. Project mission
3. Core skills grid
4. Quick navigation
5. Call to action

### Skills Page (`skills/index.html`)
1. All skills overview
2. Individual skill cards
3. Quick links

### Mental Models Page (`mental-models/index.html`)
1. Category filter
2. All models list
3. Quick search (client-side)

### About Pages
1. Contributing guide
2. Roadmap
3. Governance

---

## Design Principles

### Brutalist Linear Identity
- **No curves**: All elements use straight lines, right angles
- **Black & White**: Pure black `#000000`, pure white `#FFFFFF`
- **Grid-aligned**: Everything on a grid
- **Minimal decoration**: Function over form
- **Generous whitespace**: Space is structural

### Typography
- **Headings**: Bold, sans-serif, all-caps
- **Body**: Clean, readable sans-serif
- **Code**: Monospace

---

## Navigation

### Main Menu
- Home
- Skills
- Mental Models
- About

---

## Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Implementation Steps

1. Create `docs/` directory structure
2. Add `_config.yml`
3. Create CSS stylesheet
4. Build home page
5. Build skills pages
6. Build mental models page
7. Build about pages
8. Test on GitHub Pages
