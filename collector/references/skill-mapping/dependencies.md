# Skill Dependencies and Prerequisites

This document defines the dependency relationships between skills, prerequisite conditions, and recommended execution roadmaps for the Solo skill ecosystem.

## Dependency Overview

### Dependency Types

| Type | Symbol | Description |
|------|--------|-------------|
| **Hard Dependency** | ⟳ | Must complete before dependent skill can start |
| **Soft Dependency** | ⇢ | Recommended but not mandatory |
| **Parallel Capable** | ∥ | Can run concurrently with dependent skill |
| **Feedback Loop** | ↺ | Output feeds back to update dependency |

---

## Skill Dependency Graph

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DEPENDENCY STRUCTURE                             │
└─────────────────────────────────────────────────────────────────────────┘

                        ┌───────────────────┐
                        │ research-integration │
                        │   (Foundation)     │
                        └─────────┬─────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
           ┌───────────┐ ┌───────────┐ ┌───────────┐
           │   None    │ │   None    │ │   None    │
           │ (Independent)│(Independent)│(Independent)│
           └───────────┘ └───────────┘ └───────────┘
                    │             │             │
                    ▼             ▼             ▼
           ┌───────────┐ ┌───────────┐ ┌───────────┐
           │product-builder│ │marketing-growth│ │  Future   │
           │             │ │             │ │  Skills   │
           └─────┬───────┘ └─────┬───────┘ └───────────┘
                 │               │
                 │ Soft          │ Soft
                 ▼               ▼
           ┌───────────┐ ┌───────────┐
           │   None    │ │   None    │
           │(Terminal) │ │(Terminal) │
           └───────────┘ └───────────┘

Legend:
- research-integration: Foundational skill (no prerequisites)
- product-builder: Can execute independently or with research
- marketing-growth: Can execute independently or with research
```

### Detailed Dependency Matrix

| From Skill | To Skill | Dependency Type | Strength | Reason |
|-----------|----------|----------------|----------|--------|
| `research-integration` | `product-builder` | Soft | 7/10 | Validates ideas before building |
| `research-integration` | `marketing-growth` | Soft | 6/10 | Informs strategy before marketing |
| `product-builder` | `marketing-growth` | Soft | 5/10 | Product readiness for launch |
| `marketing-growth` | `product-builder` | Soft | 4/10 | Feedback loop for iteration |
| `marketing-growth` | `research-integration` | Soft | 4/10 | Strategic insights from results |

---

## Prerequisites by Skill

### research-integration

**Prerequisites:** None

This is a foundational skill that can be invoked at any time without prerequisites.

**Optimal Invocation Points:**
- Beginning of any project
- Before major decisions
- When facing uncertainty
- During strategic planning phases

**Self-Sufficiency:** 10/10
- Always available independently
- No output requirements from other skills
- Can provide value in isolation

### product-builder

**Prerequisites:** None (but optimal with research)

**Minimum Prerequisites:** None
- Can start with any idea or requirement
- Can work with undefined inputs
- Will generate specifications from scratch

**Optimal Prerequisites:**
1. Validated concept from `research-integration`
2. Clear problem statement
3. Target user definition
4. Basic technology constraints

**Dependency Strength:** 7/10 (strong recommendation, not requirement)

**Why Prerequisites Matter:**
- Reduces rework from fundamental flaws
- Aligns product with market needs
- Provides validated assumptions
- Accelerates decision-making

### marketing-growth

**Prerequisites:** None (but optimal with product)

**Minimum Prerequisites:** None
- Can develop strategies for any product/service
- Can work with pre-launch positioning
- Can create content frameworks

**Optimal Prerequisites:**
1. Defined product/service
2. Value proposition clarity
3. Target customer definition
4. Basic feature set finalized

**Dependency Strength:** 5/10 (moderate recommendation)

**Why Prerequisites Matter:**
- Enables specific, targeted campaigns
- Improves conversion optimization
- Allows accurate messaging
- Facilitates measurement

---

## Execution Roadmaps

### Roadmap 1: Full Product Launch (Recommended)

```
Week 1-2: Research Phase
━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ research-integration                                    │
│                                                          │
│ Tasks:                                                  │
│ □ Market analysis and sizing                            │
│ □ Competitive landscape evaluation                       │
│ □ Business model validation                             │
│ □ Risk assessment                                       │
│ □ Strategic framework selection                          │
│                                                          │
│ Output: Strategic validation document                   │
└─────────────────────────────────────────────────────────┘

Week 3-8: Build Phase  
━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ product-builder                                         │
│                                                          │
│ Tasks:                                                  │
│ □ Product specification (based on research)              │
│ □ Core feature development                              │
│ □ Testing and quality assurance                         │
│ □ Deployment and infrastructure                          │
│ □ Documentation                                         │
│                                                          │
│ Input: Research outputs, validated concepts             │
│ Output: Deployed product                                │
└─────────────────────────────────────────────────────────┘

Week 9-12: Marketing Phase
━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ marketing-growth                                         │
│                                                          │
│ Tasks:                                                  │
│ □ Go-to-market strategy (based on product)              │
│ □ Content and campaign creation                          │
│ □ Launch execution                                       │
│ □ Initial customer acquisition                           │
│ □ Analytics and measurement setup                        │
│                                                          │
│ Input: Product, research insights                        │
│ Output: Customer traction                                │
└─────────────────────────────────────────────────────────┘
```

### Roadmap 2: Rapid Validation

```
Day 1: Quick Research
━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ research-integration (focused)                          │
│                                                          │
│ Tasks:                                                  │
│ □ Rapid market check                                     │
│ □ Key assumption validation                              │
│ □ Minimum viable strategy definition                     │
│                                                          │
│ Time: 2-4 hours                                         │
└─────────────────────────────────────────────────────────┘
           │
           │ Validated concept
           ▼
Day 2-7: Quick Build
━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ product-builder (MVP focus)                             │
│                                                          │
│ Tasks:                                                  │
│ □ Core functionality only                               │
│ □ Essential features                                     │
│ □ Basic deployment                                       │
│                                                          │
│ Time: 5-7 days                                          │
└─────────────────────────────────────────────────────────┘
           │
           │ Working prototype
           ▼
Day 8-14: Quick Market Test
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ marketing-growth (lean launch)                          │
│                                                          │
│ Tasks:                                                  │
│ □ Landing page creation                                  │
│ □ Initial outreach                                       │
│ □ Feedback collection                                    │
│ □ Iterate based on results                               │
│                                                          │
│ Time: 1 week                                            │
└─────────────────────────────────────────────────────────┘
```

### Roadmap 3: Marketing-First (Service-Based)

```
Phase 1: Marketing Strategy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ marketing-growth + research-integration (parallel)       │
│                                                          │
│ marketing-growth:                                       │
│ □ Service definition                                    │
│ □ Target client identification                           │
│ □ Positioning and messaging                              │
│ □ Channel strategy                                       │
│                                                          │
│ research-integration:                                   │
│ □ Industry analysis                                      │
│ □ Competitive positioning                                │
│ □ Pricing frameworks                                     │
│                                                          │
│ Duration: 1-2 weeks                                     │
└─────────────────────────────────────────────────────────┘
           │
           │ Strategy ready
           ▼
Phase 2: Execution Preparation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┌─────────────────────────────────────────────────────────┐
│ marketing-growth (focused)                              │
│                                                          │
│ Tasks:                                                  │
│ □ Content creation                                       │
│ □ Outreach templates                                    │
│ □ Portfolio development                                 │
│ □ Sales collateral                                      │
│                                                          │
│ Duration: 1-2 weeks                                     │
└─────────────────────────────────────────────────────────┘
```

### Roadmap 4: Iteration Cycle

```
┌─────────────────────────────────────────────────────────┐
│                    ONGOING CYCLE                         │
└─────────────────────────────────────────────────────────┘

    ┌──────────────┐
    │marketing-growth│
    │ (Gather Data) │
    └──────┬───────┘
           │
           │ Market feedback, analytics
           ▼
    ┌──────────────┐
    │research-integration│
    │ (Analyze)     │
    └──────┬───────┘
           │
           │ Insights, recommendations
           ▼
    ┌──────────────┐
    │product-builder│
    │ (Implement)  │
    └──────┬───────┘
           │
           │ Updated product
           ▼
    ┌──────────────┐
    │marketing-growth│
    │ (Launch)      │
    └──────────────┘
           │
           └────── Back to start

Cycle Duration: 2-4 weeks
```

---

## Dependency Resolution

### Circular Dependency Prevention

The current skill ecosystem has **no circular dependencies**:

```
Valid Flow: RI → PB → MG → (loop back optional)

Invalid Flow: Would require A → B → A structure
- Current skills do NOT have this
- Future skills should avoid circular dependencies
```

### Conflict Resolution

When skills produce conflicting outputs:

**Resolution Strategy:**

| Conflict Type | Resolution Method |
|---------------|------------------|
| Strategic vs. Implementation | Research takes precedence for strategic |
| Marketing vs. Product | Product capabilities set minimums |
| Multiple Research Views | Synthesize or prioritize recent |
| Timing Conflicts | Sequence by dependency strength |

**Resolution Priority:**
1. Customer/user needs (ultimate priority)
2. Technical feasibility
3. Business viability
4. Strategic alignment

---

## Prerequisite Checklist

### Before Invoking product-builder

- [ ] Problem being solved is clearly defined
- [ ] Target users are identified (if available)
- [ ] Basic scope is understood
- [ ] Success criteria are set (implicit or explicit)

**From research-integration (recommended):**
- [ ] Market opportunity validated
- [ ] Competitive landscape understood
- [ ] Key assumptions identified
- [ ] Risk factors assessed

### Before Invoking marketing-growth

- [ ] Product/service concept exists
- [ ] Core value proposition is clear
- [ ] Target audience is identified (or can be defined)

**From research-integration (recommended):**
- [ ] Market positioning strategy
- [ ] Competitive differentiation
- [ ] Customer segmentation framework

**From product-builder (recommended for launch):**
- [ ] Functional product or prototype
- [ ] Key features documented
- [ ] Deployment complete
- [ ] Support capabilities defined

### Before Invoking research-integration

- [ ] Problem or question to address is clear
- [ ] Scope of inquiry is defined (helps, not required)

**No prerequisites required**

---

## Dependency Strength Calibration

### Dynamic Dependency Adjustment

Dependency strength should adjust based on:

| Factor | Effect on Dependency |
|--------|---------------------|
| Time pressure | Weaken, rely on single skill |
| Risk tolerance | High risk = strengthen dependencies |
| Experience level | Beginner = strengthen dependencies |
| Project size | Large projects = strengthen dependencies |
| Uncertainty level | High uncertainty = strengthen dependencies |

### Recommended Strength by Context

| Context | RI → PB | RI → MG | PB → MG |
|---------|---------|---------|---------|
| Startup (high risk) | 9/10 | 8/10 | 7/10 |
| Side project | 5/10 | 4/10 | 4/10 |
| Rapid prototype | 3/10 | 3/10 | 5/10 |
| Established business | 6/10 | 7/10 | 6/10 |
| Enterprise | 8/10 | 7/10 | 6/10 |

---

## Quality Gates

### Between Phases

**Gate 1: Research → Build Transition**
- [ ] Research questions answered
- [ ] Key decisions documented
- [ ] Assumptions validated
- [ ] Strategic direction clear

**Gate 2: Build → Market Transition**
- [ ] Core functionality complete
- [ ] Product deployed
- [ ] Documentation ready
- [ ] Support processes defined

**Gate 3: Market → Iteration**
- [ ] Initial metrics collected
- [ ] Customer feedback gathered
- [ ] Improvement areas identified
- [ ] Next iteration goals set

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-19  
**Dependency Model Version:** 1.0
