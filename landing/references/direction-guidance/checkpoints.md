# Checkpoint System Guide

## Go/No-Go Decision Framework

### Decision Tree

```
At Checkpoint
      │
      ▼
Is core hypothesis validated?
├─ No → Why not? Can it be fixed?
│       ├─ Yes → Adjust, continue (PIVOT option)
│       └─ No → STOP, reconsider (NO-GO)
└─ Yes → Continue evaluation...
        │
        ▼
Are key metrics improving?
├─ No → Why? Fixable?
│       ├─ Yes → Adjust strategy
│       └─ No → PIVOT consideration
└─ Yes → Continue...
        │
        ▼
Are we within budget/time?
├─ No → Can we extend?
│       ├─ Yes → Extend with clear milestones
│       └─ No → NO-GO, reassess
└─ Yes → GO to next phase
```

### Go Criteria

| Category | Requirement | Measurement |
|----------|-------------|-------------|
| **Product** | Core functionality works | Demo/screenshot |
| **Users** | Target users engaged | Active users, signups |
| **Value** | Users find value | User feedback, retention |
| **Economics** | Unit economics positive | CAC < LTV |
| **Feasibility** | Technical works at scale | Performance tests |

### No-Go Criteria

| Red Flag | Threshold | Action |
|----------|-----------|--------|
| **Zero traction** | <5 users after 2 weeks | Re-evaluate |
| **Negative feedback** | >50% find it useless | Major pivot |
| **Technical failure** | Core feature doesn't work | Fix first |
| **Budget depleted** | <20% runway | Extend or stop |
| **Market changed** | Competitor dominates | Differentiate |

### Decision Template

```
Checkpoint: [Name] - [Date]
Reviewer: [Name]

Status: [ ] GO    [ ] NO-GO    [ ] PIVOT

Core Metrics:
- Metric 1: [Target] vs [Actual] - [Pass/Fail]
- Metric 2: [Target] vs [Actual] - [Pass/Fail]
- Metric 3: [Target] vs [Actual] - [Pass/Fail]

GO Conditions: [X/Y met]
NO-GO Triggers: [List any triggered]

Key Findings:
1. [Finding]
2. [Finding]

Decision Rationale:
[Detailed explanation]

Next Steps:
[ ] Continue as planned
[ ] Adjust approach
[ ] Major pivot
[ ] Stop
```

## Pivot vs Persevere

### When to Pivot

**Common Pivots**:

| From | To | Signal |
|------|-----|--------|
| B2C → B2B | Enterprise needs, higher willingness to pay |
| Platform → SaaS | Difficulty building marketplace |
| Self-serve → Sales | Users need hand-holding |
| Freemium → Paid | Conversion too low |
| Horizontal → Vertical | General solution vs competitors |
| Feature → Platform | One thing users love |

### Pivot Decision Matrix

```
                    STRONG EVIDENCE
                    Yes          No
              ┌───────┼────────┬───────┐
              │       │        │       │
    Yes       │ ACCELERATE│  PIVOT   │  RE-EXAMINE │
    Validation │       │        │       │            │
              ├───────┼────────┼───────┤
              │       │        │       │
    No        │PERSEVERE│ MAJOR   │   EXIT     │
    Validation│        │  PIVOT  │            │
              │       │        │       │
              └───────┴────────┴───────┘
                        ▲
                   Current
                  Evidence
```

### Persevere Signals

| Signal | What It Means |
|--------|---------------|
| **Steady growth** | Users are finding value |
| **Good retention** | Users keep coming back |
| **Positive feedback** | Users recommend to others |
| **Improving metrics** | Week-over-week gains |
| **Unit economics work** | Sustainable at scale |

### Pivot Signals

| Signal | What It Means |
|--------|---------------|
| **Low activation** | Users don't understand value |
| **Poor retention** | Users try once, don't return |
| **Negative feedback** | "Too complicated", "Not what I need" |
| **No growth despite effort** | Product-market fit not there |
| **Wrong audience** | Early adopters not target market |

### Pivot Execution Framework

```
Step 1: Identify the Problem
- What's not working?
- What's the evidence?

Step 2: Generate Options
- List 3-5 possible pivots
- Consider wild ideas

Step 3: Evaluate Quickly
- Which is fastest to test?
- Which uses existing strengths?

Step 4: Design the Pivot
- What's the new hypothesis?
- What's the minimum test?

Step 5: Communicate
- Team alignment
- Investor update
- User communication
```

## Milestone Definition

### Phase Milestones

#### Discovery Phase (0-1 month)

| Milestone | Deliverable | Success Criteria |
|-----------|-------------|------------------|
| **Problem Validated** | User research synthesis | 10+ user interviews |
| **Solution Defined** | Feature spec | Core features identified |
| **MVP Scope** | Scope document | <2 week build |

#### Build Phase (1-3 months)

| Milestone | Deliverable | Success Criteria |
|-----------|-------------|------------------|
| **Alpha** | Working prototype | Core feature works |
| **Beta** | Usable product | 5 users can complete task |
| **Launch Ready** | Production-ready | No critical bugs |

#### Growth Phase (3-6 months)

| Milestone | Deliverable | Success Criteria |
|-----------|-------------|------------------|
| **Initial Traction** | First users | 100 active users |
| **Product-Market Fit** | Retention metrics | 40%+ retention |
| **Scalability** | Performance baseline | <200ms response |

### Milestone Template

```
# Milestone: [Name]

**Target Date**: [Date]
**Status**: [ ] Not Started [ ] In Progress [ ] Complete [ ] Delayed

## What We're Building
[Brief description]

## Success Metrics
- Metric 1: [Target] [Responsible]
- Metric 2: [Target] [Responsible]

## Dependencies
- [ ] Dependency 1
- [ ] Dependency 2

## Risks
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Risk 1 | [H/M/L] | [H/M/L] | [Plan] |

## Progress
- [Date]: [Update]
- [Date]: [Update]

## Sign-off
[ ] Technical Lead
[ ] Product Lead
[ ] Stakeholder
```

## Checkpoint Schedule

### Recommended Cadence

| Project Type | Checkpoint Frequency | Deep Review |
|--------------|---------------------|-------------|
| **Startup MVP** | Weekly | Bi-weekly |
| **Feature Development** | Sprint end | Monthly |
| **Maintenance** | Monthly | Quarterly |
| **Long-term Project** | Bi-weekly | Monthly |

### Checkpoint Agenda Template

```
Meeting: [Name] Checkpoint
Date: [Date]
Duration: [X] minutes
Attendees: [List]

## Review (5 min)
- Last period: [Summary]
- Metrics update: [Dashboard]

## Decisions Needed (X min)
1. Decision 1
   - Options: [A, B, C]
   - Recommendation: [X]
   
2. Decision 2
   - Options: [A, B, C]
   - Recommendation: [X]

## Blockers (X min)
- [Blocker]: [Impact] → [Resolution needed]

## Next Period Plan (X min)
- Top 3 priorities
- Expected outcomes

## Action Items
| Action | Owner | Due Date |
|--------|-------|----------|
| Action 1 | Person | Date |
| Action 2 | Person | Date |
```

### Pre-Checkpoint Preparation

**24 hours before**:
- [ ] Metrics updated
- [ ] Blockers documented
- [ ] Decisions drafted
- [ ] Agenda distributed

**Checkpoints are not for**:
- Status updates only (that's standup)
- Problem solving (schedule separate)
- Brainstorming (schedule separate)
- Long discussions (prepare in advance)

## Risk Checkpoints

### Early Warning Indicators

| Indicator | Check | Frequency | Action |
|-----------|-------|-----------|--------|
| **Velocity drop** | <70% normal | Weekly | Investigate root cause |
| **Bug increase** | >2x normal | Weekly | Pause features, fix |
| **Scope creep** | >20% original | Bi-weekly | Re-baseline |
| **Team attrition** | 1+ leaving | Monthly | Retention check |
| **Budget burn** | >110% pace | Monthly | Re-forecast |

### Escalation Path

```
Level 1: Team Lead
- Status: Risk identified
- Action: Mitigation plan

Level 2: Project Manager
- Status: Mitigation not working
- Action: Resource adjustment

Level 3: Executive Sponsor
- Status: Significant impact
- Action: Strategic decision

Level 4: Steering Committee
- Status: Project at risk
- Action: Continue/cancel/pivot
```

## Post-Mortem Framework

### Post-Mortem Template

```
Incident/Phase: [Name]
Date: [Date]
Duration: [Time]

## Summary
[1-2 sentence overview]

## What Happened
[Timeline of events]

## Root Cause
[Primary cause identified]

## Impact
- Duration: [X hours/days]
- Users affected: [X]
- Business impact: [Description]

## What Went Well
1. [Positive]
2. [Positive]

## What Went Poorly
1. [Issue]
2. [Issue]

## Action Items
| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| Improve 1 | Person | Date | Done |
| Improve 2 | Person | Date | In Progress |

## Lessons Learned
1. [Lesson]
2. [Lesson]
```

## Decision Authority Matrix

| Decision Type | Authority | Review Required |
|---------------|-----------|-----------------|
| **Scope change <1 day** | Team Lead | None |
| **Scope change 1-5 days** | Project Manager | Checkpoint |
| **Scope change >5 days** | Stakeholder | Approval |
| **Budget change <10%** | Project Manager | None |
| **Budget change >10%** | Executive | Approval |
| **Timeline change <1 week** | Team Lead | Checkpoint |
| **Timeline change >1 week** | Stakeholder | Approval |
| **Pivot/Stop** | Executive | Committee |

## Next Steps

1. Define upcoming milestones with clear dates
2. Set checkpoint schedule and owners
3. Create first checkpoint agenda
4. Establish escalation paths
5. Document success criteria for each milestone
6. Review and adjust cadence based on project needs
