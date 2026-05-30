@echo off
echo ========================================
echo  SOLO CORN SKILLS - Git Commit Script
echo ========================================
echo.

git status
echo.
echo ========================================
echo  Committing All Changes
echo ========================================

git add .

git commit -m "feat: complete English documentation and CLI v0.2.0

- Translate all 27+ Chinese documentation files to English
- Fix sensitive .npmrc file with auth token (DELETED)
- Complete English translation for all SKILL.md files
- Update all reference documentation to English
- Translate all README files and examples

- Add CLI v0.2.0 with enhanced features:
  - scs init - Interactive workflow initialization
  - scs run <workflow> - Workflow execution
  - scs invoke <skill> - Skill invocation with interactive mode
  - scs invoke <skill> --interactive - Interactive question mode
  - scs invoke <skill> --then <skill2> - Skill chaining
  - scs invoke <skill> --output <file> - Output to file
  - scs skills - List all skills
  - scs skill <name> - Show skill details

- Add comprehensive code examples library:
  - 8 single-skill examples
  - 2 multi-skill combination examples
  - 1 complete end-to-end workflow
  - 2 project templates (basic-starter, saas-starter)

- Skill standardization:
  - All 8 skills now have standardized interfaces
  - Interface Definition sections in all SKILL.md
  - Skill Registry and Workflow Engine

- Documentation:
  - Complete .gitignore with comprehensive rules
  - Updated CHANGELOG to v1.3.0
  - Enhanced README with all sections

Closes #v1.3.0"

echo.
echo ========================================
echo  Git Status After Commit
echo ========================================
git status
git log --oneline -5

echo.
echo ========================================
echo  Commit Complete!
echo ========================================
pause
