# Value of Information Framework

## Overview

The value of information (VOI) is a decision theory concept that quantifies the benefit of acquiring additional information before making a decision. This framework provides methods for evaluating whether gathering more information is worthwhile, when to stop collecting evidence, and how to prioritize information gathering activities.

---

## 1. Foundational Concepts

### 1.1 What is Value of Information?

**Value of Information (VOI)**: The difference between the expected value of a decision made with perfect information and the expected value of a decision made with current information.

```
VOI = Expected Value (with Information) - Expected Value (without Information)
```

**Why VOI Matters**:
- Information gathering has costs (time, money, opportunity)
- Not all information is equally valuable
- Knowing VOI prevents over- or under-collection
- Enables efficient resource allocation for research

### 1.2 Types of Information Value

| Type | Definition | Calculation Complexity |
|------|------------|----------------------|
| **Expected Value of Perfect Information (EVPI)** | Value if we knew the outcome with certainty | Simple (upper bound) |
| **Expected Value of Sample Information (EVSI)** | Value of imperfect, sample-based information | Moderate |
| **Expected Value of Imperfect Information (EVII)** | Value when information is less than perfect | Complex |

### 1.3 Key Insight: Information vs. Action

```
VOI > Cost of Information → ACQUIRE
VOI < Cost of Information → DO NOT ACQUIRE
```

---

## 2. Expected Value of Perfect Information (EVPI)

### 2.1 Calculation Framework

**Step 1: Calculate Expected Value without Information**
- Identify decision alternatives
- Assess probabilities of outcomes
- Calculate expected value for each alternative
- Select best alternative and record EV

**Step 2: Calculate Expected Value with Perfect Information**
- Assume you know which state of nature will occur
- For each possible state, choose the best action
- Calculate weighted average across all states

**Step 3: Calculate EVPI**
```
EVPI = EV (with perfect information) - EV (without information)
```

### 2.2 Worked Example: Product Launch Decision

**Decision**: Launch or not launch a new product

| State of Nature | Probability | If Launch | If Don't Launch |
|-----------------|-------------|-----------|-----------------|
| Success (Strong demand) | 30% | +$10M | $0 |
| Failure (Weak demand) | 70% | -$3M | $0 |

**Step 1: Expected Value without Information**

```
EV (Launch) = 0.30 × $10M + 0.70 × (-$3M) = $3M - $2.1M = $0.9M
EV (Don't Launch) = 0.30 × $0 + 0.70 × $0 = $0

Best action: LAUNCH with EV = $0.9M
```

**Step 2: Expected Value with Perfect Information**

```
If knew Success: Choose Launch → +$10M
If knew Failure: Choose Don't Launch → $0

EV (Perfect Information) = 0.30 × $10M + 0.70 × $0 = $3M
```

**Step 3: EVPI**

```
EVPI = $3M - $0.9M = $2.1M
```

**Interpretation**: Perfect information is worth up to $2.1M to make this decision.

### 2.3 EVPI Interpretation Guide

| EVPI Value | Implication |
|------------|-------------|
| EVPI = 0 | No uncertainty matters; current decision is optimal |
| EVPI > 0 | Some uncertainty affects the decision |
| High EVPI | Strong case for gathering more information |
| Low EVPI | Current information is sufficient |

---

## 3. Expected Value of Sample Information (EVSI)

### 3.1 Beyond Perfect Information

Perfect information rarely exists. EVSI helps evaluate real, imperfect information sources.

**EVSI Formula**:
```
EVSI = EV (with sample information) - EV (without information)
```

### 3.2 Information Source Evaluation

**Step 1: Characterize the Information Source**

| Property | Description |
|----------|-------------|
| Accuracy | Probability that information is correct |
| Specificity | How precisely does it identify outcomes? |
| Timeliness | How current is the information? |
| Cost | What does it cost to obtain? |

**Step 2: Calculate Likelihood Ratios**

```
Positive Likelihood Ratio = P(Positive Test | Condition Present) / P(Positive Test | Condition Absent)

Negative Likelihood Ratio = P(Negative Test | Condition Absent) / P(Negative Test | Condition Present)
```

**Step 3: Update Probabilities**

Use Bayes' theorem to update prior probabilities with new information.

### 3.3 EVSI Calculation Protocol

```
┌─────────────────────────────────────────────────────────────────┐
│ EVSI CALCULATION WORKFLOW                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ 1. DEFINE DECISION AND ALTERNATIVES                             │
│    Decision: _______________________                            │
│    Alternatives: [ ] A  [ ] B  [ ] C                           │
│                                                                  │
│ 2. ASSESS CURRENT PROBABILITIES                                 │
│    P(State 1) = _______    P(State 2) = _______                  │
│    [Prior probability distribution]                             │
│                                                                  │
│ 3. IDENTIFY POTENTIAL INFORMATION SOURCE                        │
│    Source: _______________________                              │
│    Cost to obtain: $___________                                 │
│                                                                  │
│ 4. CHARACTERIZE INFORMATION ACCURACY                            │
│    Sensitivity (P(info+|state+)) = _______                      │
│    Specificity (P(info-|state-)) = _______                     │
│                                                                  │
│ 5. CALCULATE POSTERIOR PROBABILITIES                            │
│    If receive positive information: P(state+|info+)            │
│    If receive negative information: P(state+|info-)             │
│                                                                  │
│ 6. CALCULATE EXPECTED VALUE WITH INFORMATION                    │
│    EV(with info) = P(info+) × EV(optimal|info+)               │
│                   + P(info-) × EV(optimal|info-)               │
│                                                                  │
│ 7. CALCULATE EVSI                                               │
│    EVSI = EV(with sample information) - EV(without information)│
│         = _______ - _______ = _______                          │
│                                                                  │
│ 8. DECISION                                                     │
│    EVSI _______ Cost _______ → [ ] Acquire  [ ] Do not acquire │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 4. Decision-Making Framework: Information vs. Action

### 4.1 The Information-Action Boundary

**Core Principle**: Information should change your decision or significantly reduce risk. If it wouldn't change anything, why gather it?

**Question to Ask**:
```
"Would knowing X change my decision or action?"
   ↓
"Would my probability threshold be crossed if I learned X?"
```

### 4.2 Information Gathering Decision Matrix

| Condition | Action |
|-----------|--------|
| VOI > Information Cost | Gather information |
| VOI < Information Cost | Decide with current information |
| VOI ≈ 0 | No value in gathering more information |
| Decision urgency high, VOI moderate | Consider time cost |

### 4.3 The One-Bit Rule

**Simplified Heuristic**: Only gather information if the expected value of the information exceeds its cost.

**Practical Test**:
```
Would you pay [cost] to know [this piece of information]?
If YES → Gather it
If NO → Skip it
```

---

## 5. Pre-Decision Information Gathering Guide

### 5.1 Information Gathering Checklist

**Before Gathering Information, Assess**:

| Question | Yes = Gather | No = Skip |
|----------|--------------|-----------|
| Would this change my decision? | ✓ | |
| Is VOI > cost? | ✓ | |
| Is time available? | ✓ | |
| Will I act on this information? | ✓ | |
| Is information source reliable? | ✓ | |
| Are alternatives available after learning? | ✓ | |

### 5.2 Information Prioritization Framework

**Step 1: List Potential Information Sources**

```
Information Source         │ Potential Impact │ Cost    │ VOI/Cost Ratio
───────────────────────────┼──────────────────┼─────────┼────────────────
Expert consultation        │ High             │ $5,000  │ _____
Market research            │ Medium-High      │ $20,000 │ _____
Competitive analysis      │ Medium           │ $3,000  │ _____
Internal data analysis    │ Medium           │ $500    │ _____
Customer interviews       │ High             │ $8,000  │ _____
```

**Step 2: Calculate VOI/Cost Ratio**

```
Priority = Potential Value × Probability of Impact / Cost
```

**Step 3: Rank and Select**

Focus on high ratio items that fit within budget and timeline.

### 5.3 Stopping Rules for Information Gathering

**When to Stop**:

| Rule | Description |
|------|-------------|
| **Diminishing returns** | Additional information yields minimal probability change |
| **Cost threshold** | VOI of next piece < cost of obtaining it |
| **Time deadline** | Decision point reached |
| **Sufficient confidence** | Probability of being right exceeds threshold |
| **Reversibility** | Decision can be reversed cheaply |

---

## 6. Cost-Benefit Analysis Template

### 6.1 Information Gathering ROI

```
┌────────────────────────────────────────────────────────────────────┐
│ INFORMATION GATHERING COST-BENEFIT ANALYSIS                        │
├────────────────────────────────────────────────────────────────────┤
│ Project: _______________________    Date: ___________              │
├────────────────────────────────────────────────────────────────────┤
│ POTENTIAL BENEFITS                                                  │
│ ───────────────────                                                  │
│ Decision improvement:                                              │
│   EV with better info: $___________                                 │
│   EV with current info: $___________                                │
│   Decision improvement value: $___________                          │
│                                                                     │
│ Risk reduction:                                                     │
│   Reduced downside if wrong: $___________                          │
│   Probability of downside reduction: _______ %                     │
│   Risk reduction value: $___________                                │
│                                                                     │
│ TOTAL POTENTIAL BENEFIT: $___________                                │
├────────────────────────────────────────────────────────────────────┤
│ COSTS                                                                │
│ ─────                                                                │
│ Direct costs:                                                       │
│   Research/data collection: $___________                           │
│   Analysis time: $___________                                       │
│   Expertise/consulting: $___________                                │
│                                                                     │
│ Indirect costs:                                                     │
│   Opportunity cost (delayed decision): $___________                 │
│   Analysis paralysis risk: $___________                             │
│                                                                     │
│ TOTAL COST: $___________                                             │
├────────────────────────────────────────────────────────────────────┤
│ NET VALUE OF INFORMATION                                            │
│ ─────────────────────────────                                       │
│ Gross benefit - Total cost = $___________                           │
│ Benefit/Cost ratio = _______                                       │
│                                                                     │
│ RECOMMENDATION: [ ] Pursue  [ ] Reconsider  [ ] Abort              │
└────────────────────────────────────────────────────────────────────┘
```

### 6.2 Break-Even Analysis

**Question**: What probability of decision improvement makes information gathering worthwhile?

```
Break-even probability = Cost of Information / (Value of Correct Decision)
```

**Example**:
```
Cost of market research = $10,000
Value of correct product decision = $1,000,000

Break-even probability = $10,000 / $1,000,000 = 1%

If research has > 1% chance of changing your decision, it's worthwhile.
```

---

## 7. Practical Application Scenarios

### 7.1 Scenario: Research Before Investment

```
┌─────────────────────────────────────────────────────────────────┐
│ CASE: Pre-Investment Due Diligence                              │
├─────────────────────────────────────────────────────────────────┤
│ Investment decision: Acquire tech startup                       │
│ Investment size: $5M                                            │
│ Current success probability: 60%                                │
│ Potential upside: $15M (success)                                 │
│ Potential downside: -$5M (failure)                              │
├─────────────────────────────────────────────────────────────────┤
│ EV (without due diligence) = 0.6 × $15M + 0.4 × (-$5M) = $7M    │
│ EVPI = $7M - $5M = $2M (max worth of perfect information)       │
├─────────────────────────────────────────────────────────────────┤
│ DUE DILIGENCE OPTIONS:                                           │
│ Option A: Full due diligence ($100K, 3 weeks)                  │
│   - Would reveal 80% of failure risks                            │
│   - Expected probability shift: ±15%                             │
│   - EVSI estimate: ~$300K                                       │
│   - VOI/Cost: 3x                                                 │
│   → RECOMMENDED                                                   │
│                                                                  │
│ Option B: Limited review ($20K, 1 week)                         │
│   - Would reveal 30% of failure risks                            │
│   - Expected probability shift: ±5%                             │
│   - EVSI estimate: ~$50K                                        │
│   - VOI/Cost: 2.5x                                               │
│   → Acceptable if time constrained                               │
│                                                                  │
│ Option C: Skip due diligence                                    │
│   - Save $20-100K                                                │
│   - Risk making wrong decision with bad odds                     │
│   - Expected cost: Probability × downside                      │
│   → NOT RECOMMENDED                                              │
└─────────────────────────────────────────────────────────────────┘
```

### 7.2 Scenario: Testing Before Launch

```
┌─────────────────────────────────────────────────────────────────┐
│ CASE: A/B Testing Campaign                                      │
├─────────────────────────────────────────────────────────────────┤
│ Decision: Launch new website design                             │
│ Investment: $50,000                                              │
│ Current conversion probability: 55%                             │
├─────────────────────────────────────────────────────────────────┤
│ A/B TEST EVALUATION:                                            │
│ Test cost: $5,000 (1 week)                                     │
│ Historical conversion lift from tests: 2-8%                     │
│ Expected lift: 5%                                               │
│                                                                  │
│ If test positive (70% chance):                                   │
│   New conversion rate: 57.75%                                    │
│   Revenue uplift: $75,000/year                                  │
│                                                                  │
│ If test negative (30% chance):                                   │
│   Stick with current: no change                                │
│   Cost: $5,000                                                  │
│                                                                  │
│ Expected value of test:                                          │
│   0.7 × $75,000 - 0.3 × $5,000 = $52,500 - $1,500 = $51,000    │
│                                                                  │
│ Net VOI: $51,000 - $5,000 = $46,000                             │
│ → RECOMMENDED                                                     │
└─────────────────────────────────────────────────────────────────┘
```

---

## 8. Cognitive Biases in Information Evaluation

### 8.1 Information Collection Biases

| Bias | Description | Mitigation |
|------|-------------|-----------|
| **Gathering bias** | Seeking confirming information | Actively seek disconfirming evidence |
| **Sunk cost collection** | Continuing to gather due to prior investment | Re-evaluate from scratch periodically |
| **Confirmation bias** | Interpreting information to fit beliefs | Pre-commit to interpretation rules |
| **Analysis paralysis** | Collecting indefinitely | Set deadlines and stopping rules |
| **Authority bias** | Accepting expert opinion without critique | Demand evidence, not just credentials |

### 8.2 When More Information Hurts

| Situation | Problem | Solution |
|-----------|---------|----------|
| **Choice overload** | Too many options paralyze | Limit alternatives first |
| **Information anxiety** | Overwhelm causes worse decisions | Focus on key variables |
| **Illusion of certainty** | More data feels like more accuracy | Distinguish data from insight |
| **Opportunity cost** | Time spent gathering = time not acting | Calculate time value |

---

## 9. Quick Reference Card

### VOI Assessment Protocol

1. **Define** the decision and alternatives
2. **Assess** current probabilities and expected value
3. **Identify** information sources being considered
4. **Estimate** VOI for each source (EVPI/EVSI)
5. **Compare** VOI to information costs
6. **Prioritize** information sources by VOI/Cost ratio
7. **Set** stopping rules before gathering
8. **Execute** information gathering plan
9. **Update** probabilities using Bayes' theorem
10. **Make** decision with updated beliefs

### Red Flags

- [ ] Gathering information that won't change the decision
- [ ] Continuing to research past the point of diminishing returns
- [ ] No deadline for decision
- [ ] Ignoring time costs of information gathering
- [ ] Collecting without a clear purpose
- [ ] No stop criteria defined

### Key Formulas

```
EVPI = EV(with perfect information) - EV(without information)

EVSI = EV(with sample information) - EV(without information)

VOI/Cost Ratio = Expected Value of Information / Cost of Information

Break-even probability = Cost / Value of Correct Decision

Net VOI = Expected Benefit - Cost of Information
```

---

## References

- Howard, R. A. (1966). Information value theory. *IEEE Transactions on Systems Science and Cybernetics*.
- Clemen, R. T. & Reilly, T. (2014). *Making Hard Decisions with DecisionTools*. Cengage Learning.
- Savage, L. J. (1972). *The Foundations of Statistics*. Dover Publications.
- Morgan, M. G. & Henrion, M. (1990). *Uncertainty: A Guide to Dealing with Uncertainty in Quantitative Risk and Policy Analysis*. Cambridge University Press.

---

*This framework is part of the Collector Meta-Cognition module for systematic decision-making and information acquisition.*
