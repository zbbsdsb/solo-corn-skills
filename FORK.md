# SOLO CORN SKILLS - Fork and Workflow Guide

This document provides a step-by-step guide to forking the repository and contributing changes.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Fork the Repository](#step-1-fork-the-repository)
3. [Step 2: Clone Your Fork](#step-2-clone-your-fork)
4. [Step 3: Configure Git](#step-3-configure-git)
5. [Step 4: Create a Feature Branch](#step-4-create-a-feature-branch)
6. [Step 5: Make Changes](#step-5-make-changes)
7. [Step 6: Commit Your Changes](#step-6-commit-your-changes)
8. [Step 7: Push to Your Fork](#step-7-push-to-your-fork)
9. [Step 8: Open a Pull Request](#step-8-open-a-pull-request)
10. [Step 9: Sync with Upstream](#step-9-sync-with-upstream)
11. [Common Workflows](#common-workflows)

---

## Prerequisites

- Git installed on your machine
- A GitHub account
- Basic familiarity with Git commands

---

## Step 1: Fork the Repository

1. Navigate to the [SOLO CORN SKILLS repository](../../)
2. Click the **Fork** button in the top-right corner
3. Select your account as the destination for the fork

You now have a copy of the repository in your GitHub account.

---

## Step 2: Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/[YOUR_USERNAME]/solo-corn-skills.git
cd solo-corn-skills
```

---

## Step 3: Configure Git

Add the original repository as an upstream remote to keep your fork synchronized:

```bash
git remote add upstream https://github.com/zbbsdsb/solo-corn-skills.git
```

Verify your remotes:
```bash
git remote -v
# You should see:
# origin    https://github.com/[YOUR_USERNAME]/solo-corn-skills.git (fetch)
# origin    https://github.com/[YOUR_USERNAME]/solo-corn-skills.git (push)
# upstream  https://github.com/zbbsdsb/solo-corn-skills.git (fetch)
# upstream  https://github.com/zbbsdsb/solo-corn-skills.git (push)
```

---

## Step 4: Create a Feature Branch

Always create a new branch for your work. Never work directly on main:

```bash
git checkout main
git pull upstream main  # Ensure you have the latest changes
git checkout -b feature/[DESCRIPTIVE-FEATURE-NAME]
```

**Branch Naming Examples:**
- `feature/add-new-mental-model`
- `fix/documentation-typo`
- `docs/update-roadmap`
- `refactor/improve-skill-integration`

---

## Step 5: Make Changes

Make your changes to the codebase. Follow the coding standards outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

**Important:**
- Keep changes focused and small
- Make one logical change per commit
- Test your changes before committing

---

## Step 6: Commit Your Changes

Commit your changes with a descriptive message following [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add [file1] [file2]  # Add specific files
git status               # Check status
git commit -m "<type>(<scope>): <subject>"
```

**Commit Examples:**
```bash
git commit -m "feat(mental-models): add new decision framework"
git commit -m "docs(readme): update installation instructions"
git commit -m "fix(landing): correct validation logic"
git commit -m "style(design): update logo spacing"
```

---

## Step 7: Push to Your Fork

Push your branch to your GitHub fork:

```bash
git push origin feature/[DESCRIPTIVE-FEATURE-NAME]
```

---

## Step 8: Open a Pull Request

1. Navigate to **your fork** on GitHub
2. You'll see a prompt to "Compare & pull request"
3. Click the button and fill out the PR template
4. Ensure the base repository is `zbbsdsb/solo-corn-skills` and base branch is `main`
5. Submit your Pull Request

**PR Checklist:**
- [ ] Clear, descriptive title
- [ ] Detailed description of changes
- [ ] Link to related issues (if any)
- [ ] Changes follow project guidelines

---

## Step 9: Sync with Upstream

Regularly sync your fork with the upstream repository:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

---

## Common Workflows

### Updating Your Feature Branch

If main has changed while you work:

```bash
git checkout main
git pull upstream main
git checkout feature/your-branch
git rebase main  # Or git merge main
```

### Amending Commits

If you need to fix a commit:

```bash
git commit --amend
git push --force-with-lease origin feature/your-branch
```

### Stashing Changes

If you need to switch branches but haven't finished work:

```bash
git stash              # Save changes
git stash pop          # Restore changes later
```

---

## Need Help?

If you encounter issues, check [CONTRIBUTING.md](CONTRIBUTING.md) or open an issue.

**Happy contributing!**
