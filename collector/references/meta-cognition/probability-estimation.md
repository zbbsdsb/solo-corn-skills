# Probability Estimation Framework

## Overview

Probability estimation is the cognitive process of quantifying uncertainty about events or outcomes. This framework covers subjective probability assessment, Bayesian reasoning fundamentals, and calibration techniques to improve the accuracy of probability judgments.

---

## 1. Subjective Probability Assessment

### 1.1 Definition and Foundation

**Subjective Probability**: A personal degree of belief in the occurrence of an event, quantified as a number between 0 and 1 (or 0% and 100%).

**Why Subjective Probability Matters**:
- Many important events are unique (no frequency data)
- Even with data, interpretation requires judgment
- Different analysts may have different information
- Explicit probabilities enable better decision-making

### 1.2 Probability Scale

| Verbal Expression | Probability Range | Numerical Midpoint |
|------------------|-------------------|-------------------|
| **Almost certain** | 90-99% | 95% |
| **Very likely** | 70-89% | 80% |
| **Likely** | 55-69% | 62% |
| **Better than even** | 51-54% | 52% |
| **About even** | 45-55% | 50% |
| **Less likely than not** | 30-44% | 37% |
| **Unlikely** | 10-29% | 20% |
| **Very unlikely** | 1-9% | 5% |

### 1.3 Direct Probability Elicitation

**Method 1: Roulette Wheel**
- Visualize a wheel numbered 0-100
- What number would make you indifferent between:
  - [Option A: Event occurs]
  - [Option B: Wheel lands above your chosen number]

**Method 2: Equivalent Bet**
- Would you bet on [Event] if you received $X if it occurs and lose $1 if it doesn't?
- Adjust $X until indifferent
- Probability = $X / ($X + $1)

**Method 3: Reference Event**
- "Is [Event] more or less likely than [Reference Event with known probability]?"
- Iterate until probability established

### 1.4 Elicitation Best Practices

| Practice | Rationale |
|-----------|-----------|
| **Use specific numbers** | Vague words lead to inconsistent interpretation |
| **Consider base rates first** | Start with prior, adjust for specific evidence |
| **Break down compound events** | Estimate components, combine |
| **Use decomposition** | Break complex event into simpler sub-events |
| **Consider alternatives** | "What else could happen?" |
| **Document reasoning** | Record evidence and logic chain |

---

## 2. Bayesian Thinking Fundamentals

### 2.1 Core Formula

```
P(Hypothesis | Evidence) = P(Evidence | Hypothesis) × P(Hypothesis)
                                     ─────────────────────────────────
                                              P(Evidence)
```

**Where**:
- P(H|E) = **Posterior**: Updated belief after evidence
- P(H) = **Prior**: Initial belief before evidence
- P(E|H) = **Likelihood**: How probable is evidence if hypothesis true
- P(E) = **Marginal likelihood**: Overall probability of evidence

### 2.2 Intuitive Example

**Scenario**: Medical test for rare disease

```
Prior P(Disease) = 1% (rare disease prevalence)

Test Accuracy:
- P(Positive | Disease) = 99% (sensitivity)
- P(Negative | No Disease) = 98% (specificity)

Patient tests positive.

Question: What is P(Disease | Positive)?
```

**Calculation**:
```
P(Positive) = P(Positive|Disease)×P(Disease) + P(Positive|No Disease)×P(No Disease)
            = 0.99 × 0.01 + 0.02 × 0.99
            = 0.0099 + 0.0198
            = 0.0297

P(Disease | Positive) = 0.99 × 0.01 / 0.0297
                     = 0.0099 / 0.0297
                     = 33.3%
```

**Key Insight**: Even with a positive test, probability of disease is only 33% due to low base rate.

### 2.3 Bayes' Theorem Application Protocol

**Step 1: Identify Prior Belief**
- What do you believe before considering new evidence?
- Use base rates, historical data, or expert judgment

**Step 2: Gather Evidence**
- What new information is available?
- Is the evidence reliable and relevant?

**Step 3: Assess Likelihood**
- How probable is this evidence if hypothesis is true?
- How probable if hypothesis is false?

**Step 4: Calculate Posterior**
- Apply Bayes' theorem
- Consider updating iteratively with multiple pieces of evidence

**Step 5: Sensitivity Analysis**
- How does posterior change with different priors?
- What would it take to significantly change your belief?

### 2.4 Odds Formulation

For easier mental calculation, use odds form:

```
Posterior Odds = Likelihood Ratio × Prior Odds

where:
Likelihood Ratio = P(E|H) / P(E|¬H)
```

**Example**:
```
Prior: P(Disease) = 1% → Prior Odds = 1:99

Likelihood Ratio = 0.99 / 0.02 = 49.5

Posterior Odds = 49.5 × (1/99) = 0.5
               = 1:2 → 33% probability
```

---

## 3. Probability Combination Rules

### 3.1 AND (Intersection)

**P(A and B)** = P(A) × P(B|A)

For independent events: **P(A and B) = P(A) × P(B)**

**Example**:
```
P(Project on time) = 70%
P(Project on budget) = 60%
P(Both on time AND budget) = 0.7 × 0.6 = 42%
```

### 3.2 OR (Union)

**P(A or B)** = P(A) + P(B) - P(A and B)

For mutually exclusive: **P(A or B) = P(A) + P(B)**

**Example**:
```
P(Technical risk) = 20%
P(Market risk) = 15%
P(Both technical AND market) = 0.2 × 0.15 = 3%

P(At least one risk) = 0.20 + 0.15 - 0.03 = 32%
```

### 3.3 NOT (Complement)

**P(not A)** = 1 - P(A)

**Example**:
```
P(Success) = 75%
P(Failure) = 1 - 0.75 = 25%
```

### 3.4 Combination Decision Tree

```
┌─────────────────────────────────────────┐
│         PROBABILITY COMBINATION         │
├─────────────────────────────────────────┤
│                                         │
│   Are events independent?               │
│   ├── YES → Use product rule (AND)      │
│   │         Use sum rule (OR)           │
│   │                                     │
│   └── NO  → Need joint probability      │
│             Consider dependency         │
│                                         │
│   Are events mutually exclusive?        │
│   ├── YES → Use sum rule only (OR)      │
│   │                                     │
│   └── NO  → Must subtract overlap       │
│                                         │
│   Is P(B|A) different from P(B)?        │
│   ├── YES → Events are dependent        │
│   │         Use conditional formula      │
│   │                                     │
│   └── NO  → Events are independent       │
│             Simplification available     │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. Probability Calibration Methods

### 4.1 What is Calibration?

**Calibration**: The property that when you assign X% probability, you should be correct X% of the time.

**Well-calibrated forecaster**:
| Probability Assignment | Fraction Correct |
|----------------------|------------------|
| 100% confident | 100% correct |
| 70% confident | 70% correct |
| 50% confident | 50% correct |
| 20% confident | 20% correct |

### 4.2 Calibration Assessment

**Track Your Forecasts**:

```
┌────────────────────────────────────────────────────────────┐
│ CALIBRATION TRACKING LOG                                   │
├────────────────────────────────────────────────────────────┤
│ Date    │ Forecast │ Probability │ Outcome │ Correct? │     │
│─────────┼──────────┼─────────────┼─────────┼──────────┼     │
│ YYYY-MM │ ______   │ _____ %     │ [T/F]   │ [Y/N]    │     │
│ YYYY-MM │ ______   │ _____ %     │ [T/F]   │ [Y/N]    │     │
│ ...     │ ...      │ ...         │ ...     │ ...      │     │
├────────────────────────────────────────────────────────────┤
│ ANALYSIS:                                                  │
│ At 80-90% confidence: ____% correct (target: 85%)          │
│ At 60-79% confidence: ____% correct (target: 70%)         │
│ At 40-59% confidence: ____% correct (target: 50%)          │
│ At 20-39% confidence: ____% correct (target: 30%)          │
│ At 10-19% confidence: ____% correct (target: 15%)          │
└────────────────────────────────────────────────────────────┘
```

### 4.3 Calibration Improvement Techniques

**Technique 1: Outside View (Reference Class)**

Before estimating, find similar historical cases:
1. What percentage of similar situations had this outcome?
2. Adjust based on differences

**Technique 2: Decomposition (Inside View + Outside View)**

Break complex event into parts:
```
P(Overall Success) = P(A) × P(B|A) × P(C|A,B) × ...
```

Estimate each component using reference classes, then combine.

**Technique 3: Premortem and Adversarial Analysis**

1. Premortem: Why might this forecast be wrong?
2. Consider alternative hypotheses
3. Give probability to alternatives

**Technique 4: Consider the Base Rate**

```
Revised Estimate = Base Rate × Adjustment Factor
```

Start with how often this happens generally, adjust for specifics.

### 4.4 Calibration Training Protocol

**Daily Practice**:
1. Make probability estimates for daily events
2. Record predictions
3. Track outcomes
4. Review calibration monthly

**Standard Calibration Questions**:
- "What is the probability that [specific event] will occur by [date]?"
- "How confident am I that [belief] is correct?"
- "What probability would make me indifferent between betting for or against?"

---

## 5. Common Probability Errors

### 5.1 Base Rate Neglect

**Error**: Ignoring the prior probability when new evidence arrives.

**Example**: Interpreting a "positive" test result without considering the disease prevalence.

**Correction**: Always start with base rate; update with Bayes.

### 5.2 Conjunction Fallacy

**Error**: Assigning higher probability to a conjunction than to its components.

**Example**: P(John is a feminist bank teller) > P(John is a bank teller)

**Correction**: P(A and B) ≤ P(A); always check that combined probability ≤ individual probabilities.

### 5.3 Representativeness Heuristic

**Error**: Judging probability by how "representative" something seems.

**Example**: Thinking a random sequence HHHH is less likely than HTHT, when all sequences have equal probability.

**Correction**: Use mathematical rules, not pattern matching.

### 5.4 Availability Bias

**Error**: Judging probability by how easily examples come to mind.

**Example**: Overestimating risk of shark attacks due to news coverage.

**Correction**: Use base rates and reference classes, not memory.

### 5.5 Overconfidence

**Error**: Confidence intervals too narrow; 80% CI contains true value less than 80% of time.

**Correction**: Widen intervals; consider ranges, not point estimates.

### 5.6 Anchoring

**Error**: Being influenced by initial numbers presented.

**Example**: After hearing "100,000 bacteria," estimates of "safe threshold" are higher.

**Correction**: Start with first principles; don't anchor on arbitrary numbers.

---

## 6. Probability Distributions for Uncertainty

### 6.1 Point Estimate vs. Distribution

**Point Estimate**: Single number (e.g., "Revenue will be $10M")

**Distribution**: Full range of possible outcomes with probabilities

```
                    Probability
                         │
         ██              │
        ████             │
       ██████            │
      ████████           │
     ██████████          │
    ████████████         │
   ▐████████████▌       │
  ─┴──────────────────────┴──
   $5M    $10M   $15M   $20M
        Expected Value
```

### 6.2 Common Distributions

**Uniform**: Equal probability across range
- Use when: No reason to favor any value

**Triangular**: Specify min, mode, max
- Use when: Have rough bounds and best guess

**Normal**: Bell curve, symmetric
- Use when: Sum of many independent factors

**Log-normal**: Skewed positive
- Use when: Growth rates, incomes, stock prices

**Poisson**: Counting events
- Use when: Number of arrivals, failures per time

### 6.3 Specifying a Distribution

**Protocol for Triangular Distribution**:

```
1. What is the minimum possible value?
   [Minimum] = _______

2. What is the most likely value?
   [Mode] = _______

3. What is the maximum possible value?
   [Maximum] = _______

4. What is the expected value?
   [EV] = (Min + Mode + Max) / 3
```

---

## 7. Decision-Making with Probabilities

### 7.1 Expected Value Calculation

```
Expected Value = Σ (Probability_i × Value_i)
```

**Example**:
| Scenario | Probability | Revenue | Expected Revenue |
|----------|-------------|---------|-----------------|
| Optimistic | 25% | $10M | $2.5M |
| Base Case | 50% | $7M | $3.5M |
| Pessimistic | 25% | $3M | $0.75M |
| **Total** | 100% | | **$6.75M** |

### 7.2 Expected Value vs. Expected Utility

**When to use Expected Value**:
- Small stakes relative to wealth
- No catastrophic outcomes possible
- No strong risk preferences

**When to use Expected Utility**:
- Large stakes
- Possibility of ruin
- Strong risk aversion

### 7.3 Value of Perfect Information

```
EVPI = Expected Value with Perfect Information - Expected Value without Information
```

**Example**:
```
EV without information = $6.75M

If perfect information available:
- Choose Optimistic path: $10M
- Choose Pessimistic path: $3M

EV with perfect information = 0.25 × $10M + 0.75 × $3M = $4.75M

Wait... this seems wrong. Let me recalculate.

EV with perfect information = Expected value of best action under each scenario
                              = 0.25 × $10M + 0.50 × $7M + 0.25 × $3M
                              = $2.5M + $3.5M + $0.75M = $6.75M

Actually, EVPI = EV under certainty - EV under uncertainty
               = $6.75M - $6.75M = $0

This is because we already calculated EV correctly.
EVPI is about reducing uncertainty, not about choosing actions.
```

---

## 8. Quick Reference Card

### Probability Estimation Checklist

- [ ] Identify what you need to estimate
- [ ] Gather relevant base rates and historical data
- [ ] Decompose into simpler components if needed
- [ ] Consider multiple lines of evidence
- [ ] Apply Bayes' theorem to update beliefs
- [ ] Express as specific probability (not "likely")
- [ ] Document reasoning and evidence
- [ ] Consider alternatives and their probabilities
- [ ] Check: Does probability sum to reasonable total?
- [ ] Would you bet at those odds?

### Calibration Test

**For any probability estimate, ask**:
- What is the base rate?
- What would change my probability?
- What is the 90% confidence interval?
- How does this compare to similar situations?

---

## References

- Tetlock, P. E. & Gardner, D. (2015). *Superforecasting: The Art and Science of Prediction*. Crown.
- Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- McGrayne, S. B. (2011). *The Theory That Would Not Die*. Yale University Press.
- Savage, L. J. (1972). *The Foundations of Statistics*. Dover Publications.

---

*This framework is part of the Collector Meta-Cognition module for probabilistic reasoning and decision-making.*
