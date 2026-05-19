# Risk Assessment Matrix

## Overview

Risk assessment is the systematic process of identifying, analyzing, and evaluating risks to inform decision-making. This framework provides comprehensive methods for risk identification, probability/impact assessment, and strategy development based on decision theory and cognitive science principles.

---

## 1. Risk Identification Methods

### 1.1 Taxonomy-Based Identification

Use predefined risk categories to systematically scan for risks:

**Strategic Risks**
```
□ Market shifts
□ Competitive disruption
□ Regulatory changes
□ Technology displacement
□ Customer preference changes
```

**Operational Risks**
```
□ Process failures
□ System outages
□ Supply chain disruptions
□ Quality issues
□ Capacity constraints
```

**Financial Risks**
```
□ Currency fluctuations
□ Interest rate changes
□ Credit defaults
□ Liquidity issues
□ Cost overruns
```

**Technical Risks**
```
□ Technology obsolescence
□ Technical debt
□ Integration failures
□ Security vulnerabilities
□ Performance degradation
```

**External Risks**
```
□ Natural disasters
□ Geopolitical events
□ Pandemics
□ Economic downturns
□ Infrastructure failures
```

### 1.2 Scenario-Based Identification

**Premortem Analysis Protocol**:
1. Imagine the project/decision has failed spectacularly
2. Time: 6 months after implementation
3. Setting: Post-mortem meeting
4. Question: "What went wrong?"
5. Output: List of potential failure modes

**Scenario Elicitation Questions**:

| Timeframe | Questions |
|-----------|-----------|
| **Immediate** | What could go wrong in the next week? |
| **Short-term** | What risks exist in the next 1-3 months? |
| **Medium-term** | What could materialize in 6-12 months? |
| **Long-term** | What structural changes might occur? |
| **Extreme** | What would constitute a catastrophic failure? |

### 1.3 Assumption-Based Risk Identification

For each identified assumption (see `assumptions.md`):

```
IF [assumption] is false,
THEN [specific risk event or condition],
WHICH leads to [consequence].
```

**Example**:
- Assumption: "Key supplier will deliver on time"
- Risk: Supplier delay
- Consequence: Production schedule disruption

### 1.4 Risk Brainstorming Framework

**Structured Brainstorm Protocol**:

1. **Generate** (no judgment phase): List all potential risks
2. **Clarify**: Ensure each risk is clearly stated
3. **Categorize**: Assign to risk categories
4. **Consolidate**: Merge similar risks
5. **Prioritize**: Focus on significant risks

**Leading Questions**:
- What has gone wrong in similar situations?
- What are our constraints, and how might they be violated?
- Who depends on us, and what could go wrong for them?
- What assumptions are we making that could fail?
- What external factors are outside our control?

---

## 2. Risk Probability Assessment

### 2.1 Probability Scale Reference

| Level | Probability Range | Description | Annual Frequency |
|-------|------------------|-------------|------------------|
| **Almost Certain** | 90-99% | Will occur in most circumstances | >1 per year |
| **Likely** | 60-89% | Will probably occur | ~1 per year |
| **Possible** | 30-59% | Might occur at some time | 1 per 2-5 years |
| **Unlikely** | 10-29% | Could occur but not expected | 1 per 5-20 years |
| **Rare** | 1-9% | May occur only in exceptional circumstances | 1 per 20-100 years |
| **Almost Impossible** | <1% | Negligible probability | <1 per 100 years |

### 2.2 Probability Estimation Techniques

**Reference Class Forecasting**:

1. Identify reference class (similar past events)
2. Calculate base rate: how often did this occur historically?
3. Adjust for known differences
4. Apply to current situation

**Formula**:
```
P(event) = Base Rate × Similarity Adjustment × Novelty Penalty
```

**Base Rate Elicitation**:

| Question | Purpose |
|----------|---------|
| "In how many similar situations did this occur?" | Establish frequency |
| "Out of 100 times this situation occurred, how often did this risk materialize?" | Calibrate intuition |
| "Is this more or less likely than base rate due to [specific factor]?" | Adjust for specifics |

### 2.3 Calibrating Probability Estimates

**Proper Scoring Rules for Self-Assessment**:

1. Make probabilistic forecasts with specific percentages
2. Track calibration over time
3. Record predictions with confidence intervals
4. Review accuracy and adjust

**Calibration Questions**:

| If you assign 70% probability... | You should be right about 70% of the time |
|----------------------------------|-------------------------------------------|
| **Test**: After 10 such predictions | Should have ~7 correct |
| **If wrong more often** | Overconfident, expand intervals |
| **If wrong less often** | Underconfident, narrow intervals |

---

## 3. Risk Impact Assessment

### 3.1 Impact Dimension Framework

Assess risk impact across multiple dimensions:

| Dimension | Description | Measurement |
|-----------|-------------|-------------|
| **Financial** | Monetary loss or gain | Dollar amount |
| **Operational** | Process/performance disruption | Time lost, efficiency loss |
| **Reputational** | Brand/image damage | Stakeholder perception |
| **Strategic** | Long-term competitive position | Market share, capabilities |
| **Regulatory** | Compliance/legal consequences | Fines, restrictions |
| **Safety** | Physical harm to people | Injury severity |

### 3.2 Impact Scale Reference

| Level | Financial Impact | Operational Impact | Reputational Impact |
|-------|------------------|-------------------|---------------------|
| **Catastrophic** | >$10M loss | >6 months delay | Industry-wide scandal |
| **Major** | $1-10M loss | 3-6 months delay | Significant negative coverage |
| **Moderate** | $100K-1M loss | 1-3 months delay | Local/limited negative coverage |
| **Minor** | $10K-100K loss | Weeks of delay | Minor complaints |
| **Negligible** | <$10K loss | Minimal disruption | No meaningful impact |

### 3.3 Impact Assessment Matrix

```
                    IMPACT
              Minor    Moderate    Major    Catastrophic
           ┌─────────┬──────────┬─────────┬─────────────┐
     High  │ Medium  │   High   │  High   │   Critical  │
 P         ├─────────┼──────────┼─────────┼─────────────┤
 R     Med │  Low    │  Medium  │  High   │    High     │
 O         ├─────────┼──────────┼─────────┼─────────────┤
 B    Low  │  Low    │   Low    │ Medium  │   Medium    │
         └─────────┴──────────┴─────────┴─────────────┘
```

---

## 4. Risk Matrix Documentation

### 4.1 Risk Register Template

```
┌────────────────────────────────────────────────────────────────────────────┐
│                           RISK REGISTER                                     │
├────────────────────────────────────────────────────────────────────────────┤
│ Project/Analysis: _____________________    Date: ___________                │
├────────────────────────────────────────────────────────────────────────────┤
│ Risk │ Description     │ Probability │ Impact │ Score │ Owner │ Response │
│  ID  │                 │   (1-5)     │ (1-5)  │ (P×I) │       │ Strategy │
├──────┼──────────────────┼─────────────┼────────┼───────┼───────┼──────────┤
│ R-01 │ _______________ │      /5     │   /5   │  ___  │       │          │
│ R-02 │ _______________ │      /5     │   /5   │  ___  │       │          │
│ R-03 │ _______________ │      /5     │   /5   │  ___  │       │          │
│ R-04 │ _______________ │      /5     │   /5   │  ___  │       │          │
│ R-05 │ _______________ │      /5     │   /5   │  ___  │       │          │
├────────────────────────────────────────────────────────────────────────────┤
│ SCORING LEGEND: │ Low Risk: 1-6  │ Medium Risk: 7-12  │ High Risk: 13-25 │ │
└────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Detailed Risk Assessment Form

```
┌────────────────────────────────────────────────────────────────────┐
│ RISK ASSESSMENT FORM                                                │
├────────────────────────────────────────────────────────────────────┤
│ Risk ID: __________    Assessment Date: __________                  │
├────────────────────────────────────────────────────────────────────┤
│ Risk Title: ______________________________________________________ │
│ Description: ______________________________________________________ │
│ Category: [ ] Strategic  [ ] Operational  [ ] Financial            │
│           [ ] Technical  [ ] External  [ ] Other: ____            │
├────────────────────────────────────────────────────────────────────┤
│ PROBABILITY ASSESSMENT                                             │
│ Likelihood: [ ] Almost Certain [ ] Likely [ ] Possible           │
│             [ ] Unlikely     [ ] Rare  [ ] Almost Impossible      │
│ Probability Estimate: _____ %                                      │
│ Basis for Estimate: ____________________________________________ │
│ Reference Class Used: ___________________________________________ │
├────────────────────────────────────────────────────────────────────┤
│ IMPACT ASSESSMENT                                                   │
│ Financial Impact: $_____________                                    │
│ Operational Impact: _______________                                │
│ Reputational Impact: _______________                               │
│ Duration if Occurs: _______________                                │
│ Recovery Time: _______________                                    │
├────────────────────────────────────────────────────────────────────┤
│ RISK SCORE: Probability × Impact = _____ × _____ = _____           │
│ Risk Level: [ ] Low  [ ] Medium  [ ] High  [ ] Critical           │
├────────────────────────────────────────────────────────────────────┤
│ TRIGGERS/LEAD INDICATORS:                                          │
│ _______________________________________________________________    │
├────────────────────────────────────────────────────────────────────┤
│ CONTINGENCY PLANS:                                                 │
│ _______________________________________________________________    │
├────────────────────────────────────────────────────────────────────┤
│ MONITORING APPROACH:                                               │
│ _______________________________________________________________    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 5. Risk Response Strategies

### 5.1 Strategy Selection Matrix

| Risk Level | Primary Strategy | Secondary Strategies |
|------------|------------------|---------------------|
| **Critical (20-25)** | Avoid or Transfer | Immediately escalate |
| **High (13-19)** | Mitigate | Transfer, Contingency |
| **Medium (7-12)** | Mitigate or Accept | Contingency planning |
| **Low (1-6)** | Accept or Monitor | Occasional review |

### 5.2 Response Strategy Definitions

**Avoid**
Eliminate the risk by removing the activity that causes it.

**Mitigate**
Reduce probability, impact, or both through controls or changes.

**Transfer**
Shift risk to another party (insurance, contracts, partnerships).

**Accept**
Acknowledge risk exists but decide it's within tolerance.

**Escalate**
Recognize risk exceeds authority; escalate to higher decision-maker.

### 5.3 Mitigation Action Planning

**For each mitigation action**:

```
┌────────────────────────────────────────────────────────┐
│ MITIGATION ACTION PLAN                                  │
├────────────────────────────────────────────────────────┤
│ Action: _______________________________________________ │
│ Target Risk: _____________                             │
│ Mechanism:                                            │
│ □ Reduce probability  □ Reduce impact  □ Both           │
├────────────────────────────────────────────────────────┤
│ Implementation:                                        │
│ Owner: _____________    Deadline: _____________        │
│ Resources Required: _________________________________ │
│ Success Metrics: ____________________________________ │
├────────────────────────────────────────────────────────┤
│ RESIDUAL RISK                                          │
│ Expected Probability: _____ %   Expected Impact: _____ │
│ Residual Risk Score: _____                            │
│ Acceptable? [ ] Yes  [ ] No                            │
└────────────────────────────────────────────────────────┘
```

---

## 6. Risk Aggregation and Portfolio View

### 6.1 Aggregating Multiple Risks

**Total Risk Exposure Formula**:

```
Total Expected Loss = Σ (P_i × Impact_i)

where:
P_i = Probability of risk i
Impact_i = Impact if risk i occurs
```

**Risk Correlation Considerations**:

| Correlation | Effect | Assessment Approach |
|-------------|--------|---------------------|
| Perfect Positive | Risks occur together | Sum individual impacts |
| Independent | No relationship | Square root of sum of squares |
| Perfect Negative | One excludes other | Reduce total exposure |

### 6.2 Risk Dashboard Summary

```
┌──────────────────────────────────────────────────────────────┐
│ RISK PORTFOLIO SUMMARY                                       │
├──────────────────────────────────────────────────────────────┤
│ Total Risks Identified: ____                                 │
│ Critical Risks: ____    High Risks: ____                     │
│ Medium Risks: ____      Low Risks: ____                      │
├──────────────────────────────────────────────────────────────┤
│ AGGREGATE EXPOSURE                                           │
│ Expected Total Loss: $___________                           │
│ Maximum Possible Loss: $___________                         │
│ Value at Risk (95%): $___________                           │
├──────────────────────────────────────────────────────────────┤
│ TOP 5 RISKS BY SCORE                                         │
│ 1. _____________ (Score: ___)                               │
│ 2. _____________ (Score: ___)                               │
│ 3. _____________ (Score: ___)                               │
│ 4. _____________ (Score: ___)                               │
│ 5. _____________ (Score: ___)                               │
├──────────────────────────────────────────────────────────────┤
│ RISK TRENDS                                                  │
│ [ ] Improving  [ ] Stable  [ ] Deteriorating                 │
│ Key Changes: _____________________________________________ │
└──────────────────────────────────────────────────────────────┘
```

---

## 7. Dynamic Risk Monitoring

### 7.1 Risk Trigger Tracking

**Lead Indicators to Monitor**:

| Risk Category | Key Indicators |
|---------------|----------------|
| Market | Competitor actions, customer feedback, analyst reports |
| Operational | System metrics, process logs, quality indicators |
| Financial | Cash flow, market indices, credit spreads |
| Technical | Technology news, research, patent filings |
| External | News, government announcements, social media |

### 7.2 Risk Review Cadence

| Risk Level | Review Frequency | Review Trigger |
|------------|-----------------|----------------|
| Critical | Weekly | Any change |
| High | Bi-weekly | Significant change |
| Medium | Monthly | Moderate change |
| Low | Quarterly | Material change |

### 7.3 Risk Response Review

**Review Questions**:

- Has the probability or impact changed?
- Are triggers being observed?
- Is the response plan working?
- Should new risks be added?
- Should old risks be closed?

---

## 8. Cognitive Biases in Risk Assessment

| Bias | Effect | Mitigation |
|------|--------|------------|
| **Optimism bias** | Underestimate probability of negative events | Use reference class forecasting |
| **Availability bias** | Overweight recent or memorable risks | Systematic enumeration |
| **Anchoring bias** | Lock onto initial risk estimates | Challenge initial assessments |
| **Confirmation bias** | Seek evidence for existing risk views | Actively seek disconfirming evidence |
| **Sunk cost effect** | Ignore risks that require abandoning investment | Separate past from future analysis |
| **Loss aversion** | Overweight low-probability, high-impact risks | Use formal probability methods |
| **Narrative fallacy** | Create coherent but inaccurate risk stories | Use quantitative methods |
| **Herd behavior** | Adopt industry consensus without analysis | Return to first principles |

---

## 9. Quick Reference Card

### Risk Assessment Protocol

1. **Identify** risks using multiple methods (taxonomy, scenarios, assumptions)
2. **Document** each risk with clear description
3. **Assess** probability using reference classes and calibration
4. **Assess** impact across multiple dimensions
5. **Calculate** risk score (probability × impact)
6. **Prioritize** using matrix (Critical > High > Medium > Low)
7. **Develop** response strategies
8. **Implement** mitigation actions
9. **Monitor** triggers and indicators
10. **Review** and update regularly

### Red Flags

- [ ] Only "obvious" risks identified
- [ ] No probability estimates (just vague "likely" or "unlikely")
- [ ] Impact assessed only financially
- [ ] All risks rated as "medium"
- [ ] No triggers or monitoring defined
- [ ] Response plans are vague
- [ ] Risks never reviewed or updated

---

## References

- ISO 31000:2018. *Risk Management - Guidelines*. International Organization for Standardization.
- Hubbard, D. W. (2020). *The Failure of Risk Management: Why It's Broken and How to Fix It*. Wiley.
- Bernstein, P. L. (1996). *Against the Gods: The Remarkable Story of Risk*. Wiley.

---

*This framework is part of the Collector Meta-Cognition module for systematic decision-making under uncertainty.*
