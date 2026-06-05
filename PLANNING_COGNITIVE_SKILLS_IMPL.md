# Implementation Plan — Cognitive Deep-Thinking Skills

**Created**: 2026-06-05  
**Status**: Phase 1 in progress  
**References**: [`PLANNING_COGNITIVE_SKILLS.md`](./PLANNING_COGNITIVE_SKILLS.md) — design rationale and skill specifications  
**Scope**: 4 new skills: `inversion-engine`, `systems-orchestrator`, `paradox-navigator`, `assumption-archaeologist`

---

## Overview

This plan converts the design in `PLANNING_COGNITIVE_SKILLS.md` into concrete deliverables. Each skill goes through 3 phases: documentation → reference content → dogfooding. All 4 skills are developed in parallel per phase before moving to the next.

**Guiding constraint**: Every deliverable must embody the SCS design principles — not reference material to browse, but cognitive engines to run. Not general frameworks, but founder-specific workflows.

---

## Phase 1 — SKILL.md Documents

**Goal**: Each skill has a complete `SKILL.md` that fully defines the skill's identity, operations, workflow, integration points, and usage examples. An agent or user should be able to use the skill effectively with nothing else.

**Completion criteria**: All 4 SKILL.md files exist, are indexed by skill-registry, and produce coherent output when invoked via `scs run`.

### Deliverables

| # | File | Status | Notes |
|---|------|:------:|-------|
| 1.1 | `inversion-engine/SKILL.md` | [ ] | Core ops: pre-mortem, backcast, invert-problem, failure-taxonomy, kill-criteria |
| 1.2 | `systems-orchestrator/SKILL.md` | [ ] | Core ops: map-system, find-leverage, trace-effects, diagnose-delays, archetype-match |
| 1.3 | `paradox-navigator/SKILL.md` | [ ] | Core ops: identify-paradox, map-polarity, diagnose-position, generate-correction, monitor-polarity |
| 1.4 | `assumption-archaeologist/SKILL.md` | [ ] | Core ops: excavate, categorize, design-test, build-dashboard, stress-test |

### SKILL.md Required Sections (for each)

Every SKILL.md must include these sections in order:

```
---
name:
description:   ← used by skill-registry for discovery
category: deep-thinking
version: 1.0.0
tags: [...]
operations: [...]
---

# [Skill Name]

## Overview
## Core Philosophy
## Core Operations       ← one subsection per operation, with step-by-step protocol
## Workflow              ← how to sequence operations for common use cases
## Integration with Other Skills
## When to Use This Skill
## When NOT to Use This Skill
## Example Interactions  ← 2-3 annotated examples
## Quick Reference Card  ← one-page summary for experienced users
```

### Recommended writing order

Start with `assumption-archaeologist` (clearest operation boundaries, easiest to write examples for), then `inversion-engine` (most battle-tested methodology), then `paradox-navigator` (most novel, needs most thought on examples), then `systems-orchestrator` (most complex, benefits from seeing the other three first).

---

## Phase 2 — Reference Documents

**Goal**: Each skill has a `references/` directory with deep methodology docs, templates, and annotated case studies. These are the material the LLM uses when the user needs depth beyond the SKILL.md.

**Completion criteria**: Each skill has at least 4 reference files including 1 worked case study.

### Deliverables

#### 2.1 `inversion-engine/references/`

| File | Content |
|------|---------|
| `pre-mortem-methodology.md` | Step-by-step pre-mortem protocol with the 5-layer decomposition. Annotated example: a SaaS product launch. |
| `backcasting-framework.md` | The backward planning protocol with timeline templates. Example: 12-month product roadmap traced backwards. |
| `failure-taxonomy.md` | Full catalog of the 7 founder failure archetypes with: (a) diagnostic questions, (b) early warning signals, (c) recovery patterns for each. |
| `kill-criteria-templates.md` | Templates for: project kill criteria, feature kill criteria, partnership kill criteria, hiring kill criteria. One worked example each. |
| `inversion-case-study.md` | Annotated end-to-end case: a founder uses all 5 operations on a real pivot decision. |

#### 2.2 `systems-orchestrator/references/`

| File | Content |
|------|---------|
| `causal-loop-basics.md` | How to draw and read causal loop diagrams. Variables, links, polarity, delays. 3 annotated founder examples. |
| `leverage-points.md` | Donella Meadows' 12 leverage points adapted for solo founders. Each point: what it means, why it matters, and a founder scenario where it applies. |
| `system-archetypes.md` | 10 system archetypes: Limits to Growth, Shifting the Burden, Tragedy of the Commons, Fixes that Fail, etc. Each archetype: diagnosis questions, founder-specific manifestations, intervention pattern. |
| `delay-diagnosis.md` | How to identify time delays in a startup system. Why delays cause oscillation and overcorrection. Practical delay management patterns. |
| `systems-case-study.md` | Annotated end-to-end case: mapping a user acquisition system that keeps oscillating, finding the leverage point, designing the intervention. |

#### 2.3 `paradox-navigator/references/`

| File | Content |
|------|---------|
| `polarity-management.md` | Core methodology: what polarity management is, how it differs from problem-solving, the polarity map structure, how to track and shift. |
| `founder-polarities.md` | Catalog of 12 common founder polarities with: both poles defined, upsides and downsides of each, early warning signals of over-indexing, micro-correction patterns. |
| `polarity-mapping-template.md` | Blank template for a polarity map. Instructions for filling it out. Worked example: Speed vs. Quality during a product launch. |
| `correction-playbook.md` | Micro-correction patterns for each of the 12 polarities. Specific actions, not principles. |
| `paradox-case-study.md` | Annotated case: a founder oscillating between "hire fast" and "hire slow." Polarity map, diagnosis, correction plan, monitoring signals. |

#### 2.4 `assumption-archaeologist/references/`

| File | Content |
|------|---------|
| `excavation-protocol.md` | Step-by-step assumption surface methodology. The 8 assumption layers. Question bank for each layer. |
| `assumption-taxonomy.md` | Classification system: assumptions by layer, by confidence, by impact. The 2x2 impact/confidence matrix. How to prioritize. |
| `experiment-design.md` | How to design minimum-viable validation tests. Smoke tests, concierge tests, shadow tests, wizard-of-oz tests. Matching test type to assumption type. |
| `dashboard-template.md` | The assumption tracking dashboard format. Columns: assumption, layer, impact, confidence, test design, test status, outcome. |
| `archaeologist-case-study.md` | Annotated case: excavating a go-to-market plan. 23 assumptions surfaced, 6 critical ones identified, 4 validation experiments designed. |

---

## Phase 3 — Dogfooding & Integration

**Goal**: Validate that each skill produces genuinely useful, non-generic output when run against real founder problems. Tune prompts and references based on actual output quality.

**Prerequisite**: Phase A infrastructure must be stable (working API key, `scs run` executing without errors).

**Completion criteria**: Each skill has been run at least 3 times on distinct real problems, output quality assessed against the quality bar in `e2e-test-outputs/phase-a-dogfooding/EXECUTION_PLAN.md`, and prompt builder tuned.

### Test Cases

#### 3.1 `inversion-engine` test cases

| # | Input | Operation | Expected quality bar |
|---|-------|-----------|---------------------|
| T1 | "We're planning to launch a B2B SaaS pricing tool next month" | `pre-mortem` | At least 10 specific failure scenarios across all 5 layers; no generic filler |
| T2 | "We want 500 paying customers in 12 months" | `backcast` | Clear causal chain from success back to next 30 days; identifies at least 2 non-obvious dependencies |
| T3 | "How do we reduce churn?" | `invert-problem` | Inverse generates at least 6 specific churn drivers; positive solutions follow clearly |

#### 3.2 `systems-orchestrator` test cases

| # | Input | Operation | Expected quality bar |
|---|-------|-----------|---------------------|
| T1 | "Our user acquisition is growing but activation is flat" | `map-system` | Identifies at least 2 feedback loops; names at least 1 delay |
| T2 | System map from T1 | `find-leverage` | Ranks at least 5 intervention points; top recommendation is non-obvious |
| T3 | "We're going to run paid ads to accelerate growth" | `trace-effects` | At least 3 second-order effects; at least 1 potential unintended consequence |

#### 3.3 `paradox-navigator` test cases

| # | Input | Operation | Expected quality bar |
|---|-------|-----------|---------------------|
| T1 | "We keep arguing about whether to add more features or simplify" | `identify-paradox` | Correctly identifies it as a polarity, not a problem |
| T2 | Polarity: Build vs. Simplify | `map-polarity` | Both poles defined with at least 3 upsides/downsides each; at least 2 early warning signals per side |
| T3 | "We've been simplifying for 6 months, growth is still flat" | `diagnose-position + generate-correction` | Identifies over-indexing on simplification; generates 3+ specific micro-corrections |

#### 3.4 `assumption-archaeologist` test cases

| # | Input | Operation | Expected quality bar |
|---|-------|-----------|---------------------|
| T1 | 200-word go-to-market plan | `excavate` | At least 15 distinct assumptions surfaced across at least 5 layers |
| T2 | Assumptions from T1 | `categorize` | Each assumption scored; at least 3 correctly flagged as high-impact/low-confidence |
| T3 | Top 3 critical assumptions from T2 | `design-test` | Each gets a specific, runnable validation experiment with time estimate and success criteria |

### Quality Grading

Use this rubric for each test output:

| Grade | Criteria |
|-------|---------|
| **A** | Specific, non-generic, directly actionable; would give a real founder new information |
| **B** | Mostly useful but includes some generic filler or missed a key angle |
| **C** | Correct but surface-level; a smart founder could have generated this without the skill |
| **F** | Generic, wrong, or not useful; indistinguishable from a standard LLM response |

Target: all test cases grade A or B before shipping.

---

## Cross-Skill Integration Tests

After all 4 skills pass individual dogfooding, test them in combination:

| Test | Sequence | Scenario |
|------|----------|---------|
| INT-1 | `assumption-archaeologist` → `inversion-engine` | Excavate a plan's assumptions, then run pre-mortem on the highest-risk ones |
| INT-2 | `systems-orchestrator` → `paradox-navigator` | Map a business system, identify the tensions embedded in it, navigate them |
| INT-3 | `inversion-engine` → `strategic-decision` | Pre-mortem output feeds strategic analysis for a go/no-go decision |
| INT-4 | All 4 → `collector` | Collector orchestrates all 4 engines as pre-flight checks before a product launch |

---

## File Structure (final state after all phases)

```
inversion-engine/
├── SKILL.md
└── references/
    ├── pre-mortem-methodology.md
    ├── backcasting-framework.md
    ├── failure-taxonomy.md
    ├── kill-criteria-templates.md
    └── inversion-case-study.md

systems-orchestrator/
├── SKILL.md
└── references/
    ├── causal-loop-basics.md
    ├── leverage-points.md
    ├── system-archetypes.md
    ├── delay-diagnosis.md
    └── systems-case-study.md

paradox-navigator/
├── SKILL.md
└── references/
    ├── polarity-management.md
    ├── founder-polarities.md
    ├── polarity-mapping-template.md
    ├── correction-playbook.md
    └── paradox-case-study.md

assumption-archaeologist/
├── SKILL.md
└── references/
    ├── excavation-protocol.md
    ├── assumption-taxonomy.md
    ├── experiment-design.md
    ├── dashboard-template.md
    └── archaeologist-case-study.md
```

---

## Progress Tracker

### Phase 1 — SKILL.md

- [ ] `inversion-engine/SKILL.md`
- [ ] `systems-orchestrator/SKILL.md`
- [ ] `paradox-navigator/SKILL.md`
- [ ] `assumption-archaeologist/SKILL.md`

### Phase 2 — Reference Documents

- [ ] `inversion-engine/references/` (5 files)
- [ ] `systems-orchestrator/references/` (5 files)
- [ ] `paradox-navigator/references/` (5 files)
- [ ] `assumption-archaeologist/references/` (5 files)

### Phase 3 — Dogfooding

- [ ] `inversion-engine` — 3 test cases passing grade A/B
- [ ] `systems-orchestrator` — 3 test cases passing grade A/B
- [ ] `paradox-navigator` — 3 test cases passing grade A/B
- [ ] `assumption-archaeologist` — 3 test cases passing grade A/B
- [ ] Cross-skill integration tests (INT-1 through INT-4)

---

## Notes & Decisions

- **Phase 2 before Phase 3**: Reference docs must exist before dogfooding because the LLM needs deep material to draw from. Dogfooding without references will produce shallow output.
- **Parallel development**: All 4 skills can be written simultaneously. No dependency between them within a phase.
- **The principle/mental-models boundary**: If any reference material overlaps significantly with existing `mental-models/references/` content, link to it instead of duplicating. These are engines, not encyclopedias.
- **Version naming**: These 4 skills constitute v0.4.0 of SCS. Tag the release after Phase 1 is complete, even before Phase 2 and 3.
