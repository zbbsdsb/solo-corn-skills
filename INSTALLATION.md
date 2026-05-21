# Installation Guide - SOLO CORN SKILLS

Complete guide to installing and setting up SOLO CORN SKILLS.

## 🌐 Try It Online First!

**Don't want to install?** Check out our live website:

🌐 **[https://zbbsdsb.github.io/solo-corn-skills/](https://zbbsdsb.github.io/solo-corn-skills/)**

The website provides instant access to all documentation and mental models without any installation required.

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Start](#quick-start)
3. [Detailed Installation](#detailed-installation)
4. [Configuration](#configuration)
5. [Verification](#verification)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### System Requirements
- **Operating System**: Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)
- **Memory**: Minimum 4GB RAM, 8GB recommended
- **Storage**: 500MB available space
- **Internet Connection**: Required for initial setup and updates

### Software Dependencies
- **Git**: Version 2.20 or higher
- **Node.js**: Version 16 or higher (optional, for advanced usage)
- **Python**: Version 3.8 or higher (optional, for advanced usage)
- **Code Editor**: VS Code, Sublime Text, or similar (recommended)

---

## Quick Start

### Get Started in 3 Minutes

```bash
# 1. Clone the repository
git clone https://github.com/zbbsdsb/solo-corn-skills.git

# 2. Navigate to the project directory
cd solo-corn-skills

# 3. Explore the documentation
# Start with README.md
```

That's it! SOLO CORN SKILLS is documentation-first and doesn't require complex installation to use.

---

## Detailed Installation

### Step 1: Install Git

#### Windows
Download from [git-scm.com](https://git-scm.com/download/win) and run the installer.

#### macOS
```bash
# Using Homebrew (recommended)
brew install git

# Or download from git-scm.com
```

#### Linux
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install git

# Fedora
sudo dnf install git

# Arch Linux
sudo pacman -S git
```

Verify Git installation:
```bash
git --version
```

### Step 2: Clone the Repository

#### HTTPS (Recommended for beginners)
```bash
git clone https://github.com/zbbsdsb/solo-corn-skills.git
cd solo-corn-skills
```

#### SSH (For contributors)
```bash
git clone git@github.com:zbbsdsb/solo-corn-skills.git
cd solo-corn-skills
```

#### Using GitHub Desktop
1. Download [GitHub Desktop](https://desktop.github.com/)
2. File → Clone Repository
3. Select "solo-corn-skills" from the list
4. Choose local path and click "Clone"

### Step 3: Optional - Install Development Tools

If you want to contribute or use advanced features:

#### Node.js Setup
```bash
# Download from nodejs.org or use package manager
node --version
npm --version
```

#### Python Setup
```bash
# Download from python.org or use package manager
python --version
pip --version
```

---

## Configuration

### Git Configuration (For Contributors)

```bash
# Set your name
git config user.name "Your Name"

# Set your email
git config user.email "your.email@example.com"

# Set default branch name (optional)
git config init.defaultBranch main
```

### Editor Configuration (Optional)

#### VS Code Setup
1. Install VS Code from [code.visualstudio.com](https://code.visualstudio.com/)
2. Open the project: `File → Open Folder`
3. Recommended extensions:
   - Markdown All in One
   - Git Graph
   - Prettier

#### Sublime Text Setup
1. Install from [sublimetext.com](https://www.sublimetext.com/)
2. Install Package Control
3. Recommended packages:
   - MarkdownEditing
   - GitSavvy

---

## Verification

### Verify Installation

```bash
# Check that repository exists
ls -la

# Should see:
# - collector/
# - connector/
# - design/
# - docs/
# - landing/
# - marketing-growth/
# - mental-models/
# - product-builder/
# - research-integration/
# - strategic-decision/
# - README.md
# - ...and other documentation files
```

### Test Access to Documentation

```bash
# Open README.md in your default editor
open README.md  # macOS
start README.md # Windows
xdg-open README.md # Linux

# Or view in browser
# Navigate to docs/ folder and open index.html
```

### Browse Documentation Structure

Check all major components are present:
```
solo-corn-skills/
├── README.md          ✓ Main project readme
├── INSTALLATION.md    ✓ This file
├── API.md             ✓ API documentation
├── PROJECT_STRUCTURE.md ✓ Project architecture
├── CONTRIBUTING.md    ✓ Contribution guide
├── ROADMAP.md         ✓ Development roadmap
├── CHANGELOG.md       ✓ Version history
└── [skill-directories]/  ✓ All 8 skills with SKILL.md
```

---

## Usage

### Using the Skills

SOLO CORN SKILLS is designed to be used through documentation and reference materials.

#### 1. Browse Skills
Each skill has its own directory with a `SKILL.md` file:
- [mental-models/SKILL.md](mental-models/SKILL.md)
- [product-builder/SKILL.md](product-builder/SKILL.md)
- [collector/SKILL.md](collector/SKILL.md)
- [landing/SKILL.md](landing/SKILL.md)
- [strategic-decision/SKILL.md](strategic-decision/SKILL.md)
- [marketing-growth/SKILL.md](marketing-growth/SKILL.md)
- [research-integration/SKILL.md](research-integration/SKILL.md)
- [connector/SKILL.md](connector/SKILL.md)

#### 2. Use Reference Materials
Each skill has a `references/` directory with detailed guides.

#### 3. Use the Website
Open [docs/index.html](docs/index.html) in your browser for web-based documentation.

### Quick Reference

```bash
# Quick navigation examples
cd mental-models
ls references/
# Browse mental models by category

cd product-builder
ls references/
# Browse product development resources
```

---

## Troubleshooting

### Common Issues

#### Issue: Git not found
**Error**: `git: command not found`

**Solution**:
1. Verify Git installation: `git --version`
2. Restart your terminal/command prompt
3. Check PATH configuration
4. Reinstall Git if necessary

#### Issue: Permission denied (clone)
**Error**: `Permission denied (publickey)`

**Solution**:
1. Use HTTPS instead of SSH
2. Or set up SSH keys: [GitHub SSH Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

#### Issue: Can't open files
**Error**: File doesn't open or shows as empty

**Solution**:
1. Verify you're in the correct directory: `pwd`
2. List files: `ls -la`
3. Try a different editor
4. Check file permissions

#### Issue: Documentation out of date

**Solution**:
```bash
# Pull latest changes
git pull origin main

# Check status
git status
```

### Getting Help

If you encounter issues:
1. Check [FAQ.md](FAQ.md) for common questions
2. Open an issue on GitHub: [Issues Page](https://github.com/zbbsdsb/solo-corn-skills/issues)
3. Review [CONTRIBUTING.md](CONTRIBUTING.md) for community guidelines

---

## Next Steps

After installation:

1. **Read the [README.md](README.md)** - Project overview
2. **Learn the project structure** - [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
3. **Explore skills** - Start with [mental-models/SKILL.md](mental-models/SKILL.md)
4. **Try examples** - See [API.md](API.md) for usage examples
5. **Join the community** - See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## Updating

### Update to Latest Version

```bash
# Navigate to project directory
cd solo-corn-skills

# Pull latest changes
git pull origin main

# Verify update
git log --oneline -5
```

### Keeping Your Fork Updated (For Contributors)

```bash
# Add upstream remote
git remote add upstream https://github.com/zbbsdsb/solo-corn-skills.git

# Fetch and merge
git fetch upstream
git checkout main
git merge upstream/main
```

---

## Uninstalling

If you want to remove SOLO CORN SKILLS:

```bash
# Simply delete the directory
# WARNING: Make sure you've backed up any work!
rm -rf solo-corn-skills  # macOS/Linux
# or manually delete the folder on Windows
```

---

*Last Updated: 2026-05-21*
*Version: 1.0.0*
