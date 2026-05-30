# Iteration Roadmap Template

This template guides you through planning rapid prototyping iterations, setting validation checkpoints, and making go/no-go decisions. It helps maintain momentum while ensuring thorough validation.

## Overview

```
┌────────────────────────────────────────────────────────────────────┐
│                    ITERATION CYCLE                                  │
└────────────────────────────────────────────────────────────────────┘

┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│    BUILD     │ ───▶ │    TEST      │ ───▶ │    LEARN     │
│              │      │              │      │              │
│ Create/Update│      │ Validate with│      │ Analyze data │
│ prototype    │      │ users/data   │      │ Make decisions│
└──────────────┘      └──────────────┘      └──────────────┘
                                                      │
                                                      ▼
                         ┌──────────────┐      ┌──────────────┐
                         │   PIVOT or   │ ◀─── │    DECIDE    │
                         │   PERSEVERE  │      │              │
                         └──────────────┘      └──────────────┘
                               │
          ┌────────────────────┴────────────────────┐
          │                                         │
          ▼                                         ▼
   ┌──────────────┐                        ┌──────────────┐
   │    PIVOT     │                        │  PERSEVERE   │
   │              │                        │              │
   Change direction│                       Continue with │
   based on learning│                      refinement    │
   └──────────────┘                        └──────────────┘
```

---

## 1. Short Iteration Planning

### 1.1 Sprint Planning Template

```markdown
## Sprint [N]: [Sprint Name]

### Sprint Dates
- Start: [Date]
- End: [Date]
- Duration: [X] days

### Sprint Goal
[One sentence describing the primary objective]

### Scope

#### Must Have (P0)
- [ ] [Task]
- [ ] [Task]

#### Should Have (P1)
- [ ] [Task]
- [ ] [Task]

#### Nice to Have (P2)
- [ ] [Task]

### What We're Testing This Sprint

| Hypothesis | What We'll Learn | Success Criteria |
|------------|------------------|------------------|
| [H1 text] | [Learning 1] | [Metric ≥ X] |
| [H2 text] | [Learning 2] | [Metric ≥ Y] |

### Team Capacity

| Role | Person | Availability |
|------|--------|--------------|
| Designer | [Name] | [X] hours |
| Developer | [Name] | [X] hours |
| Researcher | [Name] | [X] hours |

### Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| [Risk] | High/Med/Low | High/Med/Low | [Plan] |

### Definition of Done
- [ ] All P0 items complete
- [ ] Tests conducted with users
- [ ] Metrics reviewed
- [ ] Retrospective scheduled
```

### 1.2 Weekly Iteration Plan

```markdown
## Weekly Plan: Week [X]

### Theme: [Focus Area]

#### Monday (Kickoff)
- [ ] Review previous week's data
- [ ] Finalize week's priorities
- [ ] Assign tasks

#### Tuesday-Thursday (Execution)
| Day | Focus | Deliverable |
|-----|-------|-------------|
| Tue | [Focus] | [Deliverable] |
| Wed | [Focus] | [Deliverable] |
| Thu | [Focus] | [Deliverable] |

#### Friday (Wrap-up)
- [ ] Review progress against goals
- [ ] Document learnings
- [ ] Prepare for next week
- [ ] Hold retrospective (if bi-weekly)

### Daily Standups
- Time: [HH:MM]
- Format: Progress, Plans, Blockers

### End of Week Metrics Review

| Metric | Monday | Friday | Change |
|--------|--------|--------|--------|
| [Metric] | [X] | [Y] | [+/-Z] |

### Week Retrospective
- **What went well**: [Item 1], [Item 2]
- **What to improve**: [Item 1], [Item 2]
- **Action items**: [Item 1], [Item 2]
```

### 1.3 Daily Rhythm

```markdown
## Daily Routine

### Morning (15 min)
- [ ] Check overnight metrics/alerts
- [ ] Review daily priorities
- [ ] Sync with team

### Mid-day (as needed)
- [ ] Conduct user tests
- [ ] Collaborate on solutions
- [ ] Review work in progress

### End of Day (15 min)
- [ ] Update task status
- [ ] Document blockers
- [ ] Log learnings
- [ ] Plan tomorrow
```

---

## 2. Validation Checkpoint Setting

### 2.1 Checkpoint Framework

```markdown
## Validation Checkpoint: [Checkpoint Name]

### Checkpoint Date
[Date]

### Phase
[Discovery / Concept / Prototype / Test / Launch]

### What to Validate

| # | Validation Item | Method | Success Threshold |
|---|-----------------|--------|------------------|
| 1 | [Item] | [Method] | [Threshold] |
| 2 | [Item] | [Method] | [Threshold] |
| 3 | [Item] | [Method] | [Threshold] |

### Evidence Required

| Evidence | Source | Status |
|----------|--------|--------|
| [Evidence 1] | [Source] | [✓/✗/Pending] |
| [Evidence 2] | [Source] | [✓/✗/Pending] |

### Decision Gate

```
                    ┌─────────────────┐
                    │   EVIDENCE      │
                    │   REVIEW        │
                    └────────┬────────┘
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
           ▼                 ▼                 ▼
    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │    GREEN     │  │    YELLOW    │  │     RED      │
    │              │  │              │  │              │
    │ Proceed to   │  │ Continue but │  │ Stop and     │
    │ next phase   │  │ adjust       │  │ reassess     │
    └──────────────┘  └──────────────┘  └──────────────┘
```

### Checkpoint Outcome

- [ ] **PASS**: Continue to next phase
- [ ] **CONDITIONAL PASS**: Continue with modifications
- [ ] **FAIL**: Need significant changes before proceeding

### Sign-off

| Role | Name | Date | Decision |
|------|------|------|----------|
| Lead | [Name] | [Date] | [Decision] |
| [Role] | [Name] | [Date] | [Decision] |
```

### 2.2 Checkpoint Types

#### User Validation Checkpoint

```markdown
## User Validation Checkpoint: [Name]

### Purpose
Confirm user needs and behaviors

### Validation Criteria

| Criterion | Target | Actual | Status |
|-----------|--------|--------|--------|
| Users understand the problem | ≥80% | [%] | [✓/✗] |
| Users have this need | ≥70% | [%] | [✓/✗] |
| Users would use solution | ≥60% | [%] | [✓/✗] |
| Users can articulate value | ≥70% | [%] | [✓/✗] |

### Evidence
- [ ] Interview transcripts (n=10)
- [ ] Survey results (n=50)
- [ ] Observational data
- [ ] Competitive analysis

### Gate Decision
- **Pass**: ≥3/4 criteria met
- **Continue**: 2/4 criteria met
- **Fail**: <2 criteria met
```

#### Prototype Validation Checkpoint

```markdown
## Prototype Validation Checkpoint: [Name]

### Purpose
Test prototype with users

### Validation Criteria

| Criterion | Target | Actual | Status |
|-----------|--------|--------|--------|
| Task completion rate | ≥85% | [%] | [✓/✗] |
| Time on task | ≤[X] min | [Y] min | [✓/✗] |
| Error rate | ≤5% | [%] | [✓/✗] |
| User satisfaction | ≥7/10 | [X]/10 | [✓/✗] |
| NPS score | ≥40 | [X] | [✓/✗] |

### Evidence
- [ ] Test recordings (n=10)
- [ ] Completed test scripts
- [ ] Error logs
- [ ] Post-test surveys

### Gate Decision
- **Pass**: ≥4/5 criteria met
- **Continue**: 3/5 criteria met
- **Fail**: <3 criteria met
```

#### Market Validation Checkpoint

```markdown
## Market Validation Checkpoint: [Name]

### Purpose
Confirm market readiness

### Validation Criteria

| Criterion | Target | Actual | Status |
|-----------|--------|--------|--------|
| Conversion rate | ≥[X]% | [%] | [✓/✗] |
| User acquisition cost | ≤$[X] | $[Y] | [✓/✗] |
| Viral coefficient | ≥1.2 | [X] | [✓/✗] |
| Retention (Day 7) | ≥[X]% | [%] | [✓/✗] |
| Willingness to pay | ≥[X]% | [%] | [✓/✗] |

### Evidence
- [ ] A/B test results
- [ ] Cohort analysis
- [ ] Payment data
- [ ] Survey responses

### Gate Decision
- **Pass**: ≥4/5 criteria met
- **Continue**: 3/5 criteria met
- **Fail**: <3 criteria met
```

---

## 3. Pivot/Presevere Decision Framework

### 3.1 Decision Framework

```markdown
## Pivot or Persevere Decision

### Date
[Date]

### Project/Feature
[Name]

### Current State Summary
[2-3 sentence summary of where we are]

### Evidence Review

#### What's Working (Signs to Persevere)
| Signal | Evidence | Weight |
|--------|----------|--------|
| [Signal 1] | [Evidence] | High/Med/Low |
| [Signal 2] | [Evidence] | High/Med/Low |
| [Signal 3] | [Evidence] | High/Med/Low |

#### What's Not Working (Signs to Pivot)
| Signal | Evidence | Weight |
|--------|----------|--------|
| [Signal 1] | [Evidence] | High/Med/Low |
| [Signal 2] | [Evidence] | High/Med/Low |

### Key Questions

1. **Is the problem real?**
   [Evidence and answer]

2. **Are we solving the right problem?**
   [Evidence and answer]

3. **Is the solution right?**
   [Evidence and answer]

4. **Is the market ready?**
   [Evidence and answer]

5. **Do we have the right team/execution?**
   [Evidence and answer]

### Decision Options

#### Option A: Persevere
**Rationale**: [Why continue current path]
**Actions**: [Next steps]
**Investment**: [Resources needed]
**Expected Outcome**: [What success looks like]
**Timeline**: [Duration to validate]

#### Option B: Pivot (Direction)
**Rationale**: [Why change direction]
**New Direction**: [What we're changing to]
**Actions**: [Next steps]
**Investment**: [Resources needed]
**Expected Outcome**: [What success looks like]
**Timeline**: [Duration to validate]

#### Option C: Stop
**Rationale**: [Why discontinue]
**Learning Capture**: [Key learnings]
**Resource Reallocation**: [Where to redirect]

### Recommendation
[Decision with rationale]

### Decision Made

| Role | Name | Decision | Date |
|------|------|----------|------|
| Lead | [Name] | [Decision] | [Date] |
| [Role] | [Name] | [Decision] | [Date] |

### Next Steps
- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]
```

### 3.2 Pivot Types

| Pivot Type | When to Use | Example |
|------------|-------------|---------|
| **Zoom-in** | One feature is the whole product | Instagram from Burbn |
| **Zoom-out** | Product is one feature of larger whole | YouTube from video hosting |
| **Customer segment** | Different target audience | Slack from gaming company |
| **Customer need** | Solving different problem for same audience | Spotify from music sharing |
| **Platform** | Technical architecture change | Instagram from web to mobile |
| **Channel** | Different acquisition/distribution | Dropbox from SaaS to freemium |
| **Value capture** | Different monetization | Freemium from paid |
| **Technology** | Same solution, different tech | Cloud from on-premise |

### 3.3 Persevere Indicators

```markdown
## Persevere Signals

### Green Lights (Continue)
- [ ] User engagement increasing
- [ ] Core metrics improving week over week
- [ ] Users actively requesting features
- [ ] Qualitative feedback positive
- [ ] Technical performance acceptable
- [ ] Competitive landscape favorable
- [ ] Team alignment and motivation high

### Yellow Lights (Caution)
- [ ] Metrics flat or slow growth
- [ ] Some user segments responding better
- [ ] Technical debt accumulating
- [ ] Competition intensifying

### Red Lights (Consider Pivot)
- [ ] Metrics declining
- [ ] User churn increasing
- [ ] Technical blockers significant
- [ ] Market timing wrong
- [ ] Team burning out
```

---

## 4. Iteration Timeline Templates

### 4.1 2-Week Sprint Timeline

```
Week 1: Build & Validate
─────────────────────────────────────────────────────────────────────────
Day 1      Day 2       Day 3       Day 4       Day 5
─────────  ─────────   ─────────   ─────────   ─────────
Kickoff    Build       Build       Build       Midpoint
+ Plan     Day 1       Day 2       Day 3       Review
           User        Test        Iterate     + Adjust
           Research    Prep        + Build     
                      + Continue  
                                  ┌───────────────────────┐
                                  │  MIDPOINT CHECKPOINT   │
                                  │  Review early signals  │
                                  │  Adjust if needed      │
                                  └───────────────────────┘

Week 2: Test & Learn
─────────────────────────────────────────────────────────────────────────
Day 6       Day 7       Day 8       Day 9       Day 10
─────────   ─────────   ─────────   ─────────   ─────────
Test        Test        Test        Analyze     Wrap-up
Prep        Day 1       Day 2       + Learn     + Decision
            + Review    + Review    + Synthesize + Plan
                                    + Prepare   Next Sprint
                                    for Retro   

                      ┌───────────────────────┐
                      │  USER VALIDATION       │
                      │  CHECKPOINT            │
                      │  Do we have signal?    │
                      └───────────────────────┘

─────────────────────────────────────────────────────────────────────────
                                                    END OF SPRINT REVIEW
                                                    Decision: Continue/Iterate/Stop
```

### 4.2 1-Week Rapid Iteration

```
Day 1 (Mon): Discover
─────────────────────────────────────────
Morning     → Define hypothesis
            → Plan validation approach
Afternoon   → User interviews (3-5)
            → Competitive analysis

Day 2 (Tue): Design
─────────────────────────────────────────
Morning     → Sketch solutions
            → Create low-fi prototype
Afternoon   → Internal review
            → Prepare for testing

Day 3 (Wed): Test
─────────────────────────────────────────
Morning     → User test #1, #2, #3
            → Document observations
Afternoon   → Quick analysis
            → Identify patterns

Day 4 (Thu): Iterate
─────────────────────────────────────────
Morning     → Update prototype
            → Fix critical issues
Afternoon   → User test #4, #5
            → Update analysis

Day 5 (Fri): Decide
─────────────────────────────────────────
Morning     → Synthesize learnings
            → Prepare decision brief
Afternoon   → Decision meeting
            → Plan next iteration

              ┌───────────────────────┐
              │  END OF WEEK          │
              │  DECISION POINT       │
              │                       │
              │  Continue?            │
              │  Iterate?             │
              │  Pivot?               │
              │  Stop?                │
              └───────────────────────┘
```

### 4.3 Milestone Timeline

```markdown
## Project Timeline

### Milestone 1: Discovery (Week 1-2)
**Goal**: Understand the problem and users

| Week | Activities | Deliverables | Decision Point |
|------|------------|--------------|----------------|
| 1 | User research | Research plan | [✓] Proceed |
| 2 | Synthesize findings | Problem statement | [✓] Valid problem |

### Milestone 2: Concept (Week 3-4)
**Goal**: Define and validate solution direction

| Week | Activities | Deliverables | Decision Point |
|------|------------|--------------|----------------|
| 3 | Ideation, sketching | 3 concepts | [✓] Best concept |
| 4 | Concept validation | Validated direction | [✓] Proceed |

### Milestone 3: Prototype (Week 5-8)
**Goal**: Build and test prototype

| Week | Activities | Deliverables | Decision Point |
|------|------------|--------------|----------------|
| 5 | Prototype v1 | Lo-fi prototype | [✓] Usable |
| 6 | User testing | Test report | [✓] Feedback |
| 7 | Prototype v2 | Hi-fi prototype | [✓] Ready |
| 8 | Validation test | Validation results | [✓] Go/No-Go |

### Milestone 4: Build (Week 9-12)
**Goal**: Build production-ready solution

| Week | Activities | Deliverables | Decision Point |
|------|------------|--------------|----------------|
| 9-10 | MVP build | Functional MVP | [✓] Functional |
| 11 | QA testing | Tested product | [✓] Quality |
| 12 | Soft launch | Limited release | [✓] Launch |

### Milestone 5: Launch (Week 13-14)
**Goal**: Launch and validate market

| Week | Activities | Deliverables | Decision Point |
|------|------------|--------------|----------------|
| 13 | Launch | Public release | Monitoring |
| 14 | Monitor | Initial metrics | [✓] Success? |
```

---

## 5. Quick Reference Cards

### Decision Trigger Checklist

```markdown
## Should We Pivot?

Answer these questions honestly:

1. **Usage**: Are people using it regularly?
   ○ Yes → Persevere
   ○ No → Continue ↓

2. **Feedback**: Do users love it?
   ○ Yes → Persevere
   ○ No → Continue ↓

3. **Unglamorous growth**: Is it growing without marketing?
   ○ Yes → Persevere
   ○ No → Continue ↓

4. **Retention**: Do users come back?
   ○ Yes → Persevere
   ○ No → PIVOT

If you answered "No" to 2+ questions, seriously consider pivot.
```

### Iteration Health Check

```markdown
## Iteration Health Check

Rate each dimension 1-5:

| Dimension | Score | Notes |
|-----------|-------|-------|
| Velocity (work getting done) | [1-5] | |
| Quality (reaching quality bar) | [1-5] | |
| Learning (validated learning) | [1-5] | |
| Motivation (team engagement) | [1-5] | |
| Focus (uninterrupted work) | [1-5] | |

### Interpretation
- 20-25: Excellent iteration
- 15-19: Good, minor adjustments
- 10-14: Need improvements
- <10: Serious issues, address now
```

---

## Related Templates

- [Prototype Types](prototype-types.md): What to prototype
- [Mockup Templates](mockup-templates.md): Reference designs
- [Test Generation](test-generation.md): How to validate
- [Success Metrics](success-metrics.md): What to measure
