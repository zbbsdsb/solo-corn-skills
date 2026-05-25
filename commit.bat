@echo off
echo ========================================
echo  SOLO CORN SKILLS - Git Commit Script
echo ========================================
echo.

git status
echo.
echo ========================================
echo  Committing CLI Tool (tools/cli/)
echo ========================================
git add tools/cli/
git commit -m "feat: add SOLO CORN SKILLS CLI tool

- Add command-line interface for mental models access
- Implement list, show, search, and categories commands
- Add pretty printing with colors and box-drawing
- Support JSON output format
- Add TypeScript-based architecture
- Include quick start guide and documentation"

echo.
echo ========================================
echo  Committing Code Examples Library (English)
echo ========================================
git add examples/
git commit -m "feat: add comprehensive code examples library

- Add 8 single-skill examples (mental-models, strategic-decision, landing, product-builder, research-integration, marketing-growth, collector, connector)
- Add 2 multi-skill combination examples (idea-validation, strategic-execution)
- Add 1 complete end-to-end workflow (zero-to-one-saas)
- Add 2 project templates (basic-starter, saas-starter)
- All examples and documentation in English
- Include comprehensive documentation and README

Closes #v1.2.0"

echo.
echo ========================================
echo  Committing Documentation Updates
echo ========================================
git add CHANGELOG.md README.md
git commit -m "docs: update CHANGELOG to v1.2.0 and enhance README

- Add v1.2.0 changelog entry for code examples library
- Add CLI tool section to README
- Add code examples section to README
- Update documentation index"

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
