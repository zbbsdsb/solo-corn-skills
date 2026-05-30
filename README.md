<p align="center">
  <img src="design/logo.svg" alt="SCS Logo" width="400" height="150"/>
</p>

<h1 align="center">SOLO CORN SKILLS</h1>

<p align="center">
  <strong>Extensible AI Skill Workflows for Solopreneurs</strong>
</p>

<p align="center">
  <a href="https://github.com/zbbsdsb/solo-corn-skills/releases/tag/v1.0.0">
    <img src="https://img.shields.io/badge/version-v1.0.0-brightgreen?style=flat-square" alt="v1.0.0"/>
  </a>
  <a href="https://www.npmjs.com/package/@oasis-npm/scs">
    <img src="https://img.shields.io/npm/v/@oasis-npm/scs?style=flat-square" alt="npm version"/>
  </a>
  <img src="https://img.shields.io/github/stars/zbbsdsb/solo-corn-skills?style=flat-square" alt="Stars"/>
  <img src="https://img.shields.io/github/license/zbbsdsb/solo-corn-skills?style=flat-square" alt="License"/>
  <img src="https://img.shields.io/github/languages/top/zbbsdsb/solo-corn-skills?style=flat-square" alt="Language"/>
  <img src="https://img.shields.io/github/contributors/zbbsdsb/solo-corn-skills?style=flat-square" alt="Contributors"/>
</p>

<p align="center">
  <strong>🎉 v1.0 Official Release - May 20, 2026</strong>
</p>

---

## 🚀 Website

**Explore our interactive documentation and mental models library:**

🌐 **[https://zbbsdsb.github.io/solo-corn-skills/](https://zbbsdsb.github.io/solo-corn-skills/)**

- Browse 45+ mental models with detailed explanations
- Navigate through skill categories and documentation
- Quick reference guides and comparison tools
- Responsive design for desktop and mobile

---

## ⚡ CLI Tool

**Use SOLO CORN SKILLS directly from your terminal!**

### Quick Start (Recommended)

Install via npm:

```bash
npm install -g @oasis-npm/scs

# Now you can use 'scs' globally!
scs --version
scs models list
scs models show first-principles
```

### Build from Source

```bash
cd tools/cli
npm install
npm run build
npm link

# Now you can use 'scs' globally!
scs --version
scs models list
scs models show first-principles
```

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
```

More info: See [tools/cli/README.md](tools/cli/README.md) and [QUICKSTART.md](tools/cli/QUICKSTART.md)

---

## 📚 Code Example Library

**Quick start your project with our reusable templates!**

### 🎯 Available Templates

| Template | Description | Path |
|----------|-------------|------|
| **Basic Starter** | Clean basic project skeleton | [examples/templates/basic-starter/](examples/templates/basic-starter/) |
| **SaaS Starter** | Frontend-backend separated SaaS project | [examples/templates/saas-starter/](examples/templates/saas-starter/) |

### Using Basic Starter

```bash
cd examples/templates/basic-starter
npm install
npm start
```

### Using SaaS Starter

```bash
cd examples/templates/saas-starter
npm install
npm start
# Open browser to http://localhost:3000
```

More examples and templates can be found in the [examples/](examples/) directory.

---

## Mission

**Empowering individuals to build billion-dollar companies with AI-powered skill workflows.**

Transform from a solo founder into a force multiplier. Access research, build products, acquire customers, and make strategic decisions—all with a unified skill system designed for efficiency.

---

## Why SOLO CORN SKILLS?

| Value | Description |
|-------|-------------|
| **Modular Architecture** | Plug-and-play skill components that integrate seamlessly |
| **Mental Model Library** | 45+ structured thinking frameworks for better decisions |
| **Full-Stack Coverage** | From research to product to marketing—complete workflow |
| **Proven Methodology** | Based on 50 years of academic research insights |
| **Developer-First** | Clean APIs, clear documentation, easy customization |

---

## Core Skills

| Skill | Purpose | When to Use |
|-------|---------|-------------|
| [research-integration](research-integration/) | Synthesize research from multiple sources | When you need evidence-based insights |
| [product-builder](product-builder/) | From idea to deployed code | When building new features or products |
| [marketing-growth](marketing-growth/) | Acquisition and retention strategies | When growing your user base |
| [collector](collector/) | Decision framework for skill selection | When unsure which approach to take |
| [landing](landing/) | First-principles idea validation | When questioning assumptions |
| [strategic-decision](strategic-decision/) | Business model and competitive analysis | When planning long-term strategy |
| [mental-models](mental-models/) | 45+ cognitive frameworks | When seeking structured thinking |

---

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/zbbsdsb/solo-corn-skills.git
cd solo-corn-skills
```

### Usage

Each skill is a self-contained module. Invoke them based on your needs:

```javascript
// Example: Use mental models for strategic decisions
const result = await invoke('mental-models', {
  context: 'competitive strategy',
  model: 'first-principles-thinking'
});

// Example: Build a product feature
const spec = await invoke('product-builder', {
  feature: 'user authentication',
  constraints: ['JWT', 'OAuth2', 'TypeScript']
});

// Example: Analyze market opportunity
const analysis = await invoke('strategic-decision', {
  mode: 'market-analysis',
  domain: 'B2B SaaS'
});
```

### Skill Documentation

Navigate to any skill directory for detailed documentation:

```bash
cd mental-models          # Explore 45+ mental models
cd product-builder        # Learn the product development workflow
cd strategic-decision     # Master business strategy frameworks
```

---

## Documentation

Comprehensive guides are available:

| Document | Purpose |
|----------|---------|
| [README.md](README.md) | This file - project overview |
| [INSTALLATION.md](INSTALLATION.md) | Complete installation and setup guide |
| [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) | Architecture and directory structure explained |
| [API.md](API.md) | API documentation and skill invocation |
| [TUTORIALS.md](TUTORIALS.md) | Step-by-step tutorials and walkthroughs |
| [FAQ.md](FAQ.md) | Frequently asked questions |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute to the project |
| [GOVERNANCE.md](GOVERNANCE.md) | Project governance and decision making |
| [ROADMAP.md](ROADMAP.md) | Development roadmap and future plans |
| [CHANGELOG.md](CHANGELOG.md) | Version history and changes |
| [FORK.md](FORK.md) | Guide to forking and pull requests |
| [RELEASE_CHECKLIST.md](RELEASE_CHECKLIST.md) | Release process checklist |
| [NEXT_STEPS.md](NEXT_STEPS.md) | Immediate post-v1.0 plans |

---

## Project Structure

```
solo-corn-skills/
├── collector/              # Decision framework skill
│   ├── SKILL.md
│   └── references/
├── landing/                # First-principles validation skill
│   ├── SKILL.md
│   └── references/
├── mental-models/          # Mental model library (45+ models)
│   ├── SKILL.md
│   └── references/
├── product-builder/        # Product development skill
│   ├── SKILL.md
│   └── references/
├── marketing-growth/       # Marketing and growth skill
│   ├── SKILL.md
│   └── references/
├── research-integration/  # Research synthesis skill
│   ├── SKILL.md
│   └── references/
├── strategic-decision/     # Strategic planning skill
│   ├── SKILL.md
│   └── references/
├── design/                # Brand assets and guidelines
│   ├── logo.svg
│   ├── logo-32.svg
│   ├── logo-128.svg
│   ├── logo-512.svg
│   ├── favicon.svg
│   ├── brutalist-linear-identity.md
│   └── brand-guidelines.md
├── docs/                  # GitHub Pages website
│   ├── _config.yml
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── about/
│   ├── skills/
│   └── mental-models/
├── README.md              # This file
├── INSTALLATION.md        # Installation guide
├── PROJECT_STRUCTURE.md   # Architecture documentation
├── API.md                 # API documentation
├── TUTORIALS.md           # Tutorials and walkthroughs
├── FAQ.md                 # Frequently asked questions
├── CONTRIBUTING.md        # Contribution guidelines
├── GOVERNANCE.md          # Project governance
├── ROADMAP.md             # Development roadmap
├── CHANGELOG.md           # Version history
├── FORK.md                # Fork and PR guide
├── RELEASE_CHECKLIST.md   # Release process
├── NEXT_STEPS.md          # Post-v1.0 plans
└── LICENSE
```

---

## The Mental Model Library (Core Differentiator)

Our mental model library sets us apart. Built on decades of cognitive science and decision theory research:

| Category | Count | Examples |
|----------|-------|----------|
| Decision & Reasoning | 10 | First Principles, Second-Order Thinking, Inversion |
| Strategy & Competition | 9 | Moat Analysis, Porter's Five Forces, Value Chains |
| Systems & Complexity | 8 | Feedback Loops, Emergence, Leverage Points |
| Psychology & Behavior | 10 | Cognitive Biases, Prospect Theory, Anchoring |
| Execution & Learning | 8 | Compound Growth, Deliberate Practice, Systems Thinking |
| Navigation | 1 | Strategic Decision Framework |
| Combinations | 1 | Model Stacking Guide |

---

## Contributing

Contributions are welcome! Please read our contribution guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-skill`)
3. Commit your changes (`git commit -m 'Add amazing skill'`)
4. Push to the branch (`git push origin feature/amazing-skill`)
5. Open a Pull Request

---

## Roadmap & Next Steps

Check [ROADMAP.md](ROADMAP.md) for our full development roadmap, and [NEXT_STEPS.md](NEXT_STEPS.md) for immediate post-v1.0 plans!

### v1.1 Coming Soon (2 weeks)
- Complete website content for all skills
- Mental model detail pages
- Search functionality

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

**Developer**: [ceaserzhao](https://github.com/zbbsdsb)  
**GitHub**: [@zbbsdsb](https://github.com/zbbsdsb)

---

<p align="center">
  <img src="design/logo-32.svg" alt="SCS" width="16" height="16"/>
  Built for solopreneurs who think in systems
</p>
