# Systems Case Study: Mapping User Acquisition Oscillation

## Introduction

This case study walks through a complete systems thinking exercise applied to a real startup challenge: user acquisition oscillation. You'll see how to map a problematic behavior, identify the underlying system structure, find a leverage point, and design an intervention.

The case is based on a composite of common founder patterns, simplified for clarity. The methodology, however, is real and applicable to your specific situation.

---

## Phase 1: Identifying the Problem Behavior

### The Observable Pattern

Over 18 months, our fictional founder Maya observes the following pattern:

- **Months 1-3**: Aggressive user acquisition. Growth rate: +15% month-over-month.
- **Months 4-6**: Churn begins to rise. Growth slows to +5% month-over-month.
- **Months 7-9**: Acquisition budget cut as investors question unit economics. Growth drops to +2%.
- **Months 10-12**: Churn stabilizes at new high. Retention team hired. Growth recovers to +8%.
- **Months 13-15**: Seeing recovery, acquisition budget reinstated. Growth back to +15%.
- **Months 16-18**: Churn rises again. Cycle begins anew.

**Problem behavior**: Not the growth rate itself, but the **oscillation** in growth rate. Maya's user base never stabilizes. Each cycle of growth and correction leaves the system worse off than before.

### Graphing the Reference Behavior

```
Growth Rate (% MoM)
    |
 20 |         /\      /\      /\
    |        /  \    /  \    /  
 15 |       /    \  /    \  /
    |      /      \/      \/
 10 |     /
    |    /
  5 |___/
    |
  0 |_________________________________> Time (months)
       3   6   9   12  15  18
```

**Key observation**: The system oscillates, and the amplitude may be increasing over time. The "goal" seems to be approximately 10% growth, but the system never settles there.

---

## Phase 2: Mapping the Causal Structure

### Variables Identified

From Maya's description, the key variables are:

**Stocks** (accumulations):
- Active Users
- Brand Reputation
- Product Quality
- Team Morale

**Flows**:
- New User Acquisition Rate
- Churn Rate
- Feature Delivery Rate
- Bug Introduction Rate

**Auxiliary variables**:
- Acquisition Budget
- Customer Satisfaction
- Word-of-Mouth Coefficient
- Competitive Activity

### Drawing the Causal Loop Diagram

Let's map the structure step by step:

#### Loop 1: The Acquisition-Brand Loop (Reinforcing)

```
More Users (+) → Word of Mouth (+) → Organic Discovery (+) → More Users
     ↑                                            ↓
     │                                            │
     └──────────────── User Satisfaction (-) ←────┘
```

This loop captures the viral/growth engine. More users create more word of mouth, which drives more organic users. But more users can also strain product quality, reducing satisfaction, which slows word of mouth.

#### Loop 2: The Quality-Churn Loop (Balancing)

```
More Users (+) → Product Strain (+) → Bugs/Issues (+) → Satisfaction (-) → Churn Rate (+)
     ↑                                                                              ↓
     │                                                                              │
     └────────────── Active Users (-) ←────────────────────────────────────────────┘
```

This balancing loop captures why growth hurts retention. More users strain the product, which creates issues, which reduces satisfaction, which increases churn.

#### Loop 3: The Budget-Activity Loop (Reinforcing)

```
More Revenue (+) → More Budget (+) → More Acquisition Activity (+) → More Users (+)
     ↑                                                                        ↓
     │                                                                        │
     └─────────────── (Back to More Revenue) ←─────────────────────────────────┘
```

This loop captures how revenue enables more acquisition. But it has a delay: revenue from new users takes months to materialize.

#### Loop 4: The Investor Confidence Loop (Balancing)

```
Growth Rate (+) → Investor Confidence (+) → Budget Allocation (+) → Acquisition Rate (+)
     ↑                                                                              ↓
     │                                                                              │
     └────────────── Growth Rate (-) ←────────────────────────────────────────────┘
```

This balancing loop captures how low growth causes investors to cut budget, which reduces growth further. The balancing nature comes from growth rate being both helped and hurt by investor actions.

### The Full Diagram

```
                    ┌─────────────────────────────────────────────────────┐
                    │                                                     │
                    ▼                                                     │
            ┌─────────────────┐                                           │
            │ Acquisition     │                                           │
            │ Budget          │                                           │
            └────────┬────────┘                                           │
                     │                                                     │
                     ▼                                                     │
         ┌───────────────────────┐                                         │
         │ Acquisition Rate      │                                         │
         └───────────┬───────────┘                                         │
                     │                                                     │
            ┌────────┴────────┐                                            │
            ▼                 ▼                                            │
     ┌──────────────┐   ┌──────────────┐                                   │
             │     Active Users      │                                   │
             │           │           │                                   │
             │           │           │                                   │
             ▼           │           ▼                                    │
     ┌──────────────┐    │    ┌──────────────┐                            │
     │ Word of Mouth │    │    │ Product      │                            │
     │ Coefficient   │    │    │ Strain        │                            │
     └───────┬───────┘    │    └───────┬───────┘                            │
             │            │            │                                    │
             ▼            │            ▼                                    │
     ┌──────────────┐     │     ┌──────────────┐                            │
     │ Organic      │     │     │ Bugs/Issues  │                            │
     │ Discovery    │     │     │ Introduced   │                            │
     └───────┬───────┘     │     └───────┬───────┘                            │
             │            │            │                                    │
             ▼            │            ▼                                    │
     ┌──────────────┐     │     ┌──────────────┐                            │
     │ New Users    │     │     │ Satisfaction │                            │
     │ (Organic)    │     │     │ (Declining)  │                            │
     └───────┬───────┘     │     └───────┬───────┘                            │
             │            │            │                                    │
             └────────────┼────────────┘                                    │
                          │                                                │
                          ▼                                                │
                   ┌──────────────┐                                         │
                   │ Churn Rate   │                                         │
                   │ (Rising)     │                                         │
                   └───────┬──────┘                                         │
                           │                                                │
                           ▼                                                │
                   ┌──────────────┐                                         │
                   │ Active Users │                                         │
                   │ (Declining)  │                                         │
                   └──────────────┘                                         │
                          ▲                                                │
                          │                                                │
                          └────────────────────────────────────────────────┘
```

---

## Phase 3: Identifying the Leverage Point

### Working Through the Leverage Points

**Point 12 (Parameters)**: Maya could adjust acquisition budget, pricing, or marketing spend. But she's already doing this, and it keeps causing oscillation.

**Point 11 (Buffers)**: Maya could build a larger user base buffer or cash reserve. This would dampen the oscillation but not eliminate it.

**Point 10 (Structure)**: Could she change the structure of how acquisition works? For example, shift from paid to organic? This is more durable than parameter changes.

**Point 9 (Delays)**: Here's where it gets interesting. Let's examine the delays:

| Delay | Duration | Problem |
|-------|----------|---------|
| Budget to users | 3-4 weeks | Delay 1 |
| Users to satisfaction impact | 4-8 weeks | Delay 2 |
| Satisfaction to churn | 2-4 weeks | Delay 3 |
| Churn to budget impact | 8-12 weeks | Delay 4 |

The longest delay is from churn to budget impact (8-12 weeks). This means when Maya cuts budget in response to churn, the churn she's responding to is already 2-3 months old. Meanwhile, the budget cuts will take effect immediately, but the churn reduction from those cuts won't appear for months.

**This is the core problem**: Maya is fighting the last war.

### The Delay-Structure Interaction

The oscillation is driven by two interacting delays:

1. **Delay from acquisition to satisfaction impact**: New users take time to discover product issues (4-8 weeks)
2. **Delay from satisfaction to budget response**: Churn needs to accumulate before triggering budget cuts (8-12 weeks)

By the time Maya sees churn and responds, she's responding to the effect of users she acquired 3-4 months ago. Those users are already churning. The budget cuts she's making will affect a new set of users who haven't been born yet.

### The Leverage Point

Based on this analysis, the highest-leverage intervention is **Point 9: Length of Delays**.

Specifically, we want to **shorten the delay from satisfaction to budget response** and **add leading indicators** that predict future churn before it happens.

---

## Phase 4: Designing the Intervention

### Intervention 1: Early Warning System

Instead of waiting for churn to rise, Maya implements:

- **30-day satisfaction survey** (leading indicator of future churn)
- **Feature adoption tracking** (users who don't adopt core features churn at 3x rate)
- **Support ticket velocity** (rising tickets predict rising churn)

Now Maya can see churn coming 4-6 weeks in advance, shortening the effective delay from 8-12 weeks to 2-4 weeks.

### Intervention 2: Decouple Acquisition from Churn Response

Instead of using the same budget for both growth and stability, Maya creates:

- **Growth budget**: Fixed percentage of revenue, not tied to churn metrics
- **Stability reserve**: Separate budget for retention investments, triggered by early warning signals

This structural change means budget decisions are no longer purely reactive to churn.

### Intervention 3: Commit to Ride Through Delays

For each major acquisition push, Maya defines:

- **Decision triggers**: What specific metrics would cause her to change course
- **Minimum hold period**: How long she'll maintain a campaign before evaluating
- **Leading indicators**: What she'll watch during the delay period

### Intervention 4: Build a Buffer

Maya builds a cash reserve equal to 6 months of operating expenses. This allows her to maintain acquisition consistency through the delay period without panicking when short-term metrics look bad.

---

## Phase 5: Modeling the Expected Outcome

### Before Intervention

```
Growth Rate (% MoM)
    |
 20 |         /\      /\      /\
    |        /  \    /  \    /  
 15 |       /    \  /    \  /     Amplitude: ~15%
    |      /      \/      \/       Frequency: Every 6 months
 10 |     /                          Pattern: Oscillation, never settles
    |    /
  5 |___/
    |
  0 |_________________________________> Time
```

### After Intervention

```
Growth Rate (% MoM)
    |
 20 |         
    |        
 15 |-------------------------     Target: ~12%
    |                           Amplitude: ~5%
 10 |                          Frequency: Slow oscillations
    |                        
  5 |                       Settling toward target
    |
  0 |_________________________________> Time
```

**Expected outcome**: Oscillation amplitude reduced by ~70%. Time to settle at target reduced from "never" to approximately 12 months.

---

## Phase 6: Implementation Guide

### Week 1-2: Instrumentation
- [ ] Implement 30-day NPS survey
- [ ] Build feature adoption dashboard
- [ ] Set up support ticket velocity alerts
- [ ] Document current delay structure empirically

### Week 3-4: Structural Changes
- [ ] Separate growth and stability budgets
- [ ] Define decision triggers for retention investment
- [ ] Establish minimum hold periods for acquisition campaigns
- [ ] Set early warning thresholds

### Month 2: Testing
- [ ] Run acquisition campaign with new decision framework
- [ ] Use leading indicators, not lagging churn, to guide decisions
- [ ] Resist urge to change course during minimum hold period

### Month 3-6: Refinement
- [ ] Measure oscillation amplitude vs historical baseline
- [ ] Adjust leading indicator thresholds based on accuracy
- [ ] Refine budget allocation between growth and stability
- [ ] Build cash buffer to 6-month target

---

## Phase 7: Key Learnings

### What This Case Teaches

1. **Oscillation is a structural problem, not a parameter problem**. Maya didn't need to find the right budget number. She needed to change the structure that caused the oscillation.

2. **Delays are often the root cause**. The oscillation wasn't caused by bad decisions. It was caused by decisions made with delayed information.

3. **Leading indicators beat lagging metrics**. The single highest-leverage change was switching from reactive churn measurement to predictive satisfaction measurement.

4. **Structural fixes outperform parameter fixes**. Creating separate growth and stability budgets is harder than adjusting a single budget number, but it's durable.

5. **Building slack (cash buffer) enables good decisions under uncertainty**. Without slack, Maya was forced to make short-term decisions that amplified the oscillation.

### Common Mistakes to Avoid

| Mistake | Why It Happens | How to Avoid |
|---------|---------------|--------------|
| Cutting budget when churn rises | Delayed feedback makes it look like acquisition causes churn | Use leading indicators |
| Giving up on strategies before they work | 6-week delay feels like permanent failure | Define decision triggers in advance |
| Overshooting with budget increases | Wanting faster results after delay | Commit to minimum hold periods |
| Ignoring the delay in planning | Future feels abstract compared to present data | Model delayed effects explicitly |

---

## Summary: The Systems Thinking Process

| Phase | Key Question | Tools Used |
|-------|-------------|-----------|
| 1. Identify problem behavior | What is oscillating? | Graph behavior over time |
| 2. Map causal structure | What causes this? | Causal loop diagrams |
| 3. Find leverage point | Where should I intervene? | Leverage point hierarchy |
| 4. Design intervention | How do I change the system? | Delay management patterns |
| 5. Model expected outcome | What will change? | Before/after comparison |
| 6. Implement | How do I execute? | Phased rollout plan |
| 7. Learn | What did I learn? | Key insights extraction |

---

## Further Reading

- Meadows, Donella. *Thinking in Systems: A Primer* (2008). The foundational text on systems thinking.
- Kim, Daniel. *Systems Archetypes: Diagnosing Systemic Issues and Identifying High-Leverage Interventions* (1992). Detailed treatment of the tools used in this case study.
- Sterman, John. *Business Dynamics: Systems Thinking and Modeling for a Complex World* (2000). Technical depth on system dynamics modeling.
- Moregrove, John, and Kevin Weatherman. *Interactive Management Software for Learning and Diagnosing Causal Structures*. Tools for mapping and analyzing causal structures.
- Coyle, Geoffrey. *Practice of System Dynamics: Modelling, Simulation and Strategic Interaction*. Practical applications of system dynamics in business contexts.
