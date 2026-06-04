# PLANNING — Cognitive Deep-Thinking Skills

**Created**: 2026-06-04  
**Context**: Post v0.3.0, pre-dogfooding. 9 skills operational, all functional/operational.  
**Principle**: SCS is not a task runner. SCS is a *thinking* framework. Skills should teach founders **how to think**, not just what to do.

---

## Why Not the ROADMAP Phase 3 Skills?

The ROADMAP proposed five new skills for Phase 3:

| Planned Skill | Category |
|---------------|----------|
| Customer Support | Operational |
| Finance & Accounting | Operational |
| Legal & Compliance | Operational |
| Hiring & Team Building | Operational |
| Product Operations | Operational |

These are **functional skills** — they tell you *how to do a job function*. That's what every other AI tool already does. It's not what makes SCS different.

SCS's core differentiator is the **principle skill**: Socratic questioning, pitfall detection, guiding founders to discover answers themselves. The mental-models skill provides the cognitive frameworks. The strategic-decision skill applies deep analysis. This is the DNA of the project.

**New skills must extend this DNA, not dilute it.**

---

## The 4 New Skills: Deep-Thinking Engines

Each skill is not a reference library or a how-to guide. Each is a **cognitive engine** — a structured methodology that forces a specific mode of deep thinking onto any problem you feed it.

### Skill 1: `inversion-engine` — The Inversion Engine

> *"What would guarantee this fails?" — then work backwards from there.*

#### Why This Exists

The principle skill has "Inversion Questions." The mental-models library mentions inversion as a concept. But neither develops inversion into a **full structured methodology** that can be applied systematically to any plan, decision, or strategy.

Inversion is one of the most powerful thinking tools ever discovered (Charlie Munger's favorite). It deserves its own engine.

#### Core Operations

| Operation | Description |
|-----------|-------------|
| `pre-mortem` | Deep failure-mode analysis: decompose a plan into layers (product, market, team, financial, technical) and exhaustively map failure paths for each layer |
| `backcast` | Start from the desired end state and work backwards: "What must be true 1 month before success? 3 months before? 6 months before?" Iterate until you reach today's action |
| `invert-problem` | Take any problem statement and generate its inverse. "How do we get more users?" → "How do we drive users away?" The inverse often reveals non-obvious leverage |
| `failure-taxonomy` | Maintain a curated library of founder failure archetypes. Before any major decision, run the decision through the taxonomy and flag pattern matches |
| `kill-criteria` | For any ongoing project or commitment, define the specific conditions under which you should kill it. Write them down *before* you're emotionally invested |

#### Integration Points

- Feeds into `strategic-decision`: pre-mortem output becomes input for decision analysis
- Feeds into `principle`: failure patterns feed the pitfall library
- Called by `collector`: before executing any multi-skill workflow, run pre-mortem on the approach

#### Reference Structure

```
inversion-engine/
├── SKILL.md
└── references/
    ├── pre-mortem-methodology.md     # Step-by-step pre-mortem protocol
    ├── backcasting-framework.md      # Backward planning methodology
    ├── failure-taxonomy.md           # Catalog of founder failure archetypes
    ├── kill-criteria-templates.md    # Templates for defining exit conditions
    └── inversion-examples.md         # Annotated case studies
```

---

### Skill 2: `systems-orchestrator` — The Systems Orchestrator

> *"The symptom you see is downstream from the structure you built."*

#### Why This Exists

Solo founders treat symptoms. User churn → improve onboarding. Revenue flat → add features. Burnout → work harder. But the real problem is almost always structural: a feedback loop is broken, a delay is too long, an incentive is misaligned.

The mental-models skill has a `systems-complexity/` reference directory. But it's a library — it tells you *about* systems thinking. It doesn't help you *apply* systems thinking to your specific situation.

#### Core Operations

| Operation | Description |
|-----------|-------------|
| `map-system` | Take any situation and map it as a causal loop diagram. Identify reinforcing loops (growth engines), balancing loops (stabilizers), and delays |
| `find-leverage` | Apply Donella Meadows' 12 leverage points framework. Rank intervention points by potential impact. The highest leverage is almost never where you're currently intervening |
| `trace-effects` | For any proposed action, trace second-order, third-order, and unintended consequences through the system map |
| `diagnose-delays` | Identify time delays in the system. Oscillation and overcorrection are almost always caused by unacknowledged delays |
| `archetype-match` | Match the situation against system archetypes (limits to growth, shifting the burden, tragedy of the commons, etc.) and apply the archetype's known leverage pattern |

#### Integration Points

- Feeds into `strategic-decision`: system map reveals non-obvious strategic options
- Feeds into `principle`: system archetypes inform pitfall detection
- Called by `product-builder`: before building, map the user's existing system to identify where the product fits

#### Reference Structure

```
systems-orchestrator/
├── SKILL.md
└── references/
    ├── causal-loop-basics.md        # How to draw and read causal loop diagrams
    ├── leverage-points.md           # The 12 leverage points with founder examples
    ├── system-archetypes.md         # 10 common archetypes with diagnosis guides
    ├── delay-diagnosis.md           # How to identify and manage system delays
    └── consequence-mapping.md       # Second/third-order effect tracing protocol
```

---

### Skill 3: `paradox-navigator` — The Paradox Navigator

> *"Some problems aren't meant to be solved. They're meant to be managed."*

#### Why This Exists

Founder life is full of tensions that look like binary choices but aren't:

| Tension | False Choice |
|---------|-------------|
| Speed vs. Quality | "Ship fast" OR "ship perfect" |
| Focus vs. Exploration | "Double down" OR "stay flexible" |
| Confidence vs. Humility | "Believe relentlessly" OR "listen to feedback" |
| Patience vs. Urgency | "Play long-term" OR "burn rate ends in 6 months" |
| Build vs. Buy | "Build everything" OR "outsource everything" |

Most founders pick a side, then panic and swing to the other side when it predictably fails. This oscillation is more damaging than consistently being on the "wrong" side.

**No existing SCS skill addresses this.** Principle might ask "have you considered the other side?" but doesn't provide a framework for ongoing polarity management.

#### Core Operations

| Operation | Description |
|-----------|-------------|
| `identify-paradox` | Name the polarity. Is this really a problem to solve, or a tension to manage? |
| `map-polarity` | Draw the polarity map: what are the upsides and downsides of each pole? What are the early warning signals of over-indexing on either side? |
| `diagnose-position` | Where are you currently on the polarity? What signals confirm this? Are you heading toward the downside of your current pole? |
| `generate-correction` | For the pole you're currently over-indexing on, generate specific, actionable micro-corrections toward the other pole. These should be small, reversible, and measurable |
| `monitor-polarity` | Establish leading indicators that tell you when it's time to adjust. "When X metric drops below Y, shift Z% toward the other pole" |

#### Integration Points

- Called by `strategic-decision`: before committing to a strategy, identify the polarities embedded in it
- Called by `product-builder`: product decisions are full of false binaries
- Feeds into `principle`: polarity management principles enrich the mentoring repertoire

#### Reference Structure

```
paradox-navigator/
├── SKILL.md
└── references/
    ├── polarity-management.md       # Core methodology
    ├── founder-polarities.md        # Catalog of common founder polarities
    ├── polarity-mapping-template.md # Template for polarity maps
    └── correction-playbook.md       # Micro-correction patterns
```

---

### Skill 4: `assumption-archaeologist` — The Assumption Archaeologist

> *"The most dangerous assumptions are the ones you don't know you're making."*

#### Why This Exists

The principle skill challenges assumptions — but it's **reactive**. You say something, it asks a challenging question. This is valuable but incomplete.

What's missing is a **proactive, structured excavation** of hidden assumptions. When you present a plan, a decision, or a strategy, the assumption-archaeologist systematically surfaces every buried assumption across multiple layers, categorizes them by risk, and generates minimal-cost validation experiments.

This is not a conversation partner. This is an **analysis engine**.

#### Core Operations

| Operation | Description |
|-----------|-------------|
| `excavate` | Take any plan/decision document and systematically surface all assumptions. Organize by layer: self, team, market, customer, competitor, technology, resource, timeline |
| `categorize` | For each assumption, score two dimensions: (1) impact if wrong, (2) confidence level. Plot on a 2x2: high-impact/low-confidence assumptions are the critical ones |
| `design-test` | For each critical assumption, generate the smallest, cheapest, fastest experiment that would meaningfully change your confidence level |
| `build-dashboard` | Create an assumption tracking dashboard: which assumptions are validated, which are falsified, which are still open, and which new assumptions have emerged |
| `stress-test` | Run the plan through extreme but plausible scenarios. "What if your No.1 assumption is exactly backwards?" |

#### Integration Points

- Called by `collector`: before executing any workflow, run assumption excavation on the plan
- Called by `strategic-decision`: before committing to a strategy, excavate all assumptions
- Feeds into `principle`: newly discovered assumption patterns enrich the questioning library

#### Reference Structure

```
assumption-archaeologist/
├── SKILL.md
└── references/
    ├── excavation-protocol.md       # Step-by-step assumption surface methodology
    ├── assumption-taxonomy.md       # Categories and layers of assumptions
    ├── experiment-design.md         # How to design minimum-viable validation tests
    ├── dashboard-template.md        # Assumption tracking dashboard format
    └── stress-test-scenarios.md     # Extreme scenario generation patterns
```

---

## How These 4 Fit With Existing Skills

```
                    ┌─────────────────────┐
                    │     COLLECTOR        │
                    │  (orchestrator)      │
                    └──────┬──────────────┘
                           │ calls all skills in sequence
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
┌─────────────────┐ ┌───────────┐ ┌──────────────────┐
│  DEEP-THINKING   │ │ EXECUTION │ │   KNOWLEDGE       │
│  ENGINES (new)   │ │ SKILLS    │ │   SKILLS           │
├─────────────────┤ ├───────────┤ ├──────────────────┤
│ inversion-engine│ │product-   │ │ mental-models     │
│ systems-orch.   │ │ builder   │ │ research-integ.   │
│ paradox-nav.    │ │ marketing │ │ connector         │
│ assumption-arch.│ │ landing   │ │                   │
└────────┬────────┘ └─────┬─────┘ └────────┬─────────┘
         │                │                │
         └────────────────┼────────────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │    PRINCIPLE     │
                 │ (Socratic mentor)│
                 │ strategic-decision│
                 └─────────────────┘
```

**The deep-thinking engines are called before and during execution.** Before product-builder generates a PRD, inversion-engine runs a pre-mortem. Before strategic-decision commits to a direction, assumption-archaeologist surfaces hidden assumptions. Systems-orchestrator maps the competitive landscape as a system. Paradox-navigator identifies which tensions in the plan are false binaries.

---

## Implementation Plan

### Phase 1: SKILL.md Documents Only (current)
- [ ] `inversion-engine/SKILL.md` — full skill definition with operations, workflow, and integration points
- [ ] `systems-orchestrator/SKILL.md` — full skill definition
- [ ] `paradox-navigator/SKILL.md` — full skill definition
- [ ] `assumption-archaeologist/SKILL.md` — full skill definition

### Phase 2: Reference Documents (next)
- [ ] Create `references/` directories with methodology docs for each skill
- [ ] Write at least 2 annotated case studies per skill
- [ ] Cross-link reference docs with mental-models library where relevant

### Phase 3: Dogfooding (after Phase A infrastructure is proven)
- [ ] Run each deep-thinking engine against a real founder decision
- [ ] Tune prompt builders based on output quality
- [ ] Verify cross-skill integration (collector → deep-thinking → execution → principle)

---

## Design Principles

1. **Not reference, process.** These are not libraries to browse. They are engines you run. Each operation takes input and produces structured output.

2. **Not general, founder-specific.** Every operation, example, and template should speak directly to the solo founder experience.

3. **Not additive, catalytic.** These skills don't add more work. They make existing work better by forcing deeper thinking before action.

4. **Self-extinguishing.** Like the principle skill, the ultimate success metric is that the user internalizes the thinking patterns and no longer needs to call the skill.

5. **Socratic at the core.** Every skill should guide the user to discover insights themselves, not hand them conclusions. Questions over answers.

---

*This document replaces the Phase 3 skill proposals in ROADMAP.md. Those operational skills (Customer Support, Finance, Legal, Hiring, Product Operations) are valuable but belong in a different product — not in a thinking framework.*
