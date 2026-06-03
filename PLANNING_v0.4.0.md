# PLANNING — v0.4.0 and Beyond

**Created**: 2026-06-02  
**Context**: Post v0.3.0 (LLM execution engine shipped, 8 skills operational)  
**Principle**: Dogfooding first, polish second, growth third.

---

## The Core Problem with v0.3.0

We built the engine. Nobody has driven the car.

STRATEGIC_BLUEPRINT.md says our #1 priority is proving the killer use case:
> "A solo founder can go from concept to launch-ready spec in <2 hours using only our skills."

We haven't done this. Not even once. Nobody knows if the prompt builders produce good outputs, if the skill chains actually work end-to-end, or if any real solo founder would find this useful.

**The single most valuable thing we can do right now is use SCS to build something real, document the process, and learn from it.**

---

## The Plan: Three Phases

### Phase A: Dogfooding (v0.4.0, 2 weeks)

**Goal**: Run SCS end-to-end on a real project. Tune the prompts. Prove it works.

#### A1. Pick a real project and run the full workflow

Use SCS skills in sequence to take an idea → validated concept → PRD → technical spec → code scaffold:

```
1. landing/first-principles     → validate assumptions about the idea
2. strategic-decision/swot      → market viability check  
3. product-builder/validate     → structured idea validation
4. product-builder/spec         → generate PRD
5. product-builder/frontend    → generate frontend scaffold
6. product-builder/backend     → generate API scaffold
```

Candidate project: **"SCS Demo — a micro SaaS idea"** (something small enough to validate in days, big enough to be convincing).

#### A2. Tune every prompt builder based on real outputs

As we run each skill, we'll find:
- Which prompts produce vague/unhelpful responses
- Where the SkillExecutor context construction is weak
- Where SKILL.md frontmatter needs better operation descriptions
- Which reference docs are actually read and which are ignored

Every fix goes back into the codebase immediately.

#### A3. Create a reference case study (`docs/case-studies/`)

Document the entire journey with:
- Exact CLI commands used at each step
- Raw LLM outputs (before/after tuning)
- What worked and what didn't
- The final deliverables produced

This becomes the proof point for STRATEGIC_BLUEPRINT's success metric.

#### Deliverables for Phase A
- [ ] One complete end-to-end project built with SCS
- [ ] Prompt builders tuned based on real-world use
- [ ] Case study document with full walkthrough
- [ ] List of bugs/improvements discovered during dogfooding

---

### Phase B: Polish & Testing (v0.5.0, 2 weeks)

**Goal**: Fix everything Phase A exposed. Add enough UX to not be embarrassing.

#### B1. Critical fixes from dogfooding
Whatever broke during Phase A gets fixed first.

#### B2. Streaming output
Long LLM responses (especially `product-builder/spec` or `product-builder/full`) are painful without streaming. The user stares at a blank terminal for 30+ seconds.

Implementation:
- `llm-provider.ts`: add `stream: true` option returning an AsyncGenerator
- `skill-executor.ts`: add `executeStreaming()` method
- CLI: progressive output with the existing output formatter

#### B3. Progress indicators & dry-run
- Progress spinner during LLM calls (with elapsed time)
- `--dry-run` flag to see the constructed prompt without calling the API (huge for debugging)
- Better error messages: when the API returns an error, show what was sent

#### B4. Skill reference gaps
Not all `references/` directories have substantive content. `product-builder` has 7 real reference docs. Others like `connector`, `collector`, `landing` need attention:

Priority fill order:
1. `collector/references/` — it's supposed to orchestrate other skills, needs decision framework docs
2. `strategic-decision/references/` — SWOT templates, competitive analysis frameworks
3. `research-integration/references/` — synthesis methodology, literature review templates

#### B5. Automated tests
At minimum: unit tests for prompt builders.
- Given input X, does the constructed prompt contain Y?
- Does the system prompt correctly load from SKILL.md frontmatter?
- Do operation-specific prompts include the right reference docs?

#### Deliverables for Phase B
- [ ] Streaming output for all LLM calls
- [ ] `--dry-run` mode for prompt debugging
- [ ] Progress spinners with timing
- [ ] Filled `references/` for the 3 weakest skills
- [ ] Unit tests for all 8 prompt builders and SkillExecutor

---

### Phase C: Growth & Community (v0.6.0, 2 weeks)

**Goal**: Get eyes on the project. Get feedback. Get the first external user.

#### C1. Publish the case study
The Phase A case study becomes:
- A blog post on Dev.to / Hacker News
- A section in the GitHub README (with actual outputs, not hypotheticals)
- A Twitter/X thread showing the workflow with screenshots

#### C2. Docs website update
The GitHub Pages site (`docs/`) is currently a static showcase of skills. Update it with:
- The case study
- "Try it yourself" quickstart guide
- Actual CLI output screenshots (from Phase A)

#### C3. CLI installer
Right now users need to `git clone` and `npm install` manually. Add:
- `npm install -g solo-corn-skills` support  
- `npx solo-corn-skills` for zero-install tryout
- A `scs quickstart` command that walks through first use

#### C4. Provider expansion
This was P1 in NEXT_STEPS.md but I'm deferring it to Phase C because:
- OpenAI-compatible covers 90% of users (Ollama, Groq, Together, etc. all work already)
- Anthropic/Gemini native support is nice-to-have, not need-to-have
- Better to nail one provider's experience than be mediocre at three

#### Deliverables for Phase C
- [ ] Published case study (Dev.to + HN + X)
- [ ] Updated docs website with real examples
- [ ] npm package publishable
- [ ] `scs quickstart` interactive onboarding
- [ ] Anthropic native provider (if time allows)

---

## What We're NOT Doing (Yet)

These are important but lower priority than proving the project works:

| Deferred Item | Why |
|--------------|-----|
| Skill marketplace | Need users first, otherwise it's an empty store |
| VS Code / Cursor extension | Need a polished CLI experience first |
| Discord/Slack community | Need at least 20 active users to justify |
| Phase 3 new skills (Finance, Legal, Hiring) | Expand only after core 8 are proven |
| Analytics dashboard | Premature without usage data |
| CI/CD pipeline | Can manually test during dogfooding phase |

---

## Timeline

```
Week 1-2:  Phase A — Dogfooding (build something real, tune prompts)
Week 3-4:  Phase B — Polish & Testing (streaming, dry-run, references, tests)
Week 5-6:  Phase C — Growth (case study, npm, docs, community)
```

---

## Success Metrics for v0.6.0

- [ ] One complete project built end-to-end with SCS (documented)
- [ ] `scs invoke product-builder --operation spec` produces a usable PRD in < 2 minutes
- [ ] All prompt builders have at least basic unit tests
- [ ] Streaming output works for all operations
- [ ] 1 published case study with real outputs
- [ ] npm package installable (`npm install -g solo-corn-skills`)
- [ ] 30+ GitHub stars (driven by case study content)

---

## Immediate Next Action

Start Phase A: pick the dogfooding project and run `scs invoke landing --input '{"operation":"first-principles",...}'` for real.

**Recommended project**: a "SCS Playground" — a simple web app that lets users browse skills, run them via API, and see results. This:
- Uses SCS skills to design itself (dogfooding)
- Becomes a demo of SCS capabilities
- Is small enough to build in 2 weeks
- Gives us something to screenshot for the case study

---

*This plan supersedes the immediate-priority section of NEXT_STEPS.md. The direction in ROADMAP.md Phase 2 remains correct — we're just reordering execution to put dogfooding first.*
