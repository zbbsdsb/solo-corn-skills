# Risk Assessment Matrix

Systematic identification, evaluation, and mitigation of risks associated with beliefs and decisions. This framework helps develop realistic confidence by understanding potential failure modes.

## 1. Risk Identification Framework

### 1.1 Risk Categories

```markdown
A. EPISTEMIC RISKS (Knowledge-related risks)
   - False belief risks: Holding beliefs that are actually false
   - Ignorance risks: Missing relevant knowledge or evidence
   - Misinterpretation risks: Drawing incorrect conclusions from valid evidence
   - Overconfidence risks: Believing more strongly than evidence warrants

B. METHODOLOGICAL RISKS (Process-related risks)
   - Selection bias: Only considering favorable evidence
   - Confirmation bias: Seeking confirming over disconfirming evidence
   - Availability bias: Overweighting easily remembered information
   - Anchoring bias: Failing to update adequately from new evidence

C. EXTERNAL RISKS (Environmental risks)
   - Evidence reliability risks: Evidence sources may be unreliable
   - Contextual risks: Evidence may be context-dependent
   - Temporal risks: Evidence may change over time
   - Domain boundary risks: Evidence may not transfer across domains

D. DECISION RISKS (Action-related risks)
   - Action timing risks: Acting too early or too late
   - Action scope risks: Acting too broadly or narrowly
   - Reversibility risks: Actions may be difficult to reverse
   - Second-order risks: Unintended consequences of actions
```

### 1.2 Risk Identification Process

```markdown
1. DECOMPOSE THE BELIEF
   - What are the constituent claims?
   - What evidence supports each claim?
   - What are the logical dependencies?

2. IDENTIFY POTENTIAL FAILURES
   For each claim and piece of evidence:
   - Could this be false?
   - What would prove this wrong?
   - What alternative explanations exist?
   - What evidence against this exists?

3. MAPPREVIEW ENTRIES
   - How does failure in one area affect others?
   - What are the cascade effects?
   - Which failures are independent vs. correlated?

4. CATALOGREVIEW ENTRIES
   - Document all identified risks
   - Categorize by type and severity
   - Note any uncertainties about the risks themselves
```

## 2. Risk Probability Assessment

### 2.1 Probability Estimation Matrix

```markdown
LIKELIHOOD LEVELS:

| Level | Probability Range | Description | Verbal Indicator |
|-------|------------------|-------------|------------------|
| **Very Low (1)** | 0-10% | Exceptional circumstances only | "Rarely," "Almost never" |
| **Low (2)** | 10-30% | Unlikely but possible | "Probably not," "Unlikely" |
| **Medium (3)** | 30-70% | More likely than not | "It could go either way," "Possibly" |
| **High (4)** | 70-90% | Likely to occur | "Probably," "More likely than not" |
| **Very High (5)** | 90-100% | Expected to occur | "Almost certainly," "Very likely" |

PROBABILITY ASSESSMENT FACTORS:

1. Historical Frequency
   - Has this type of failure occurred before?
   - How often does it occur?
   - In what contexts does it occur?

2. Causal Analysis
   - What mechanisms could cause this failure?
   - Are those mechanisms well-understood?
   - Are the causal factors present in this case?

3. Analogical Evidence
   - Have similar beliefs failed in similar circumstances?
   - What can we learn from comparable cases?
   - Are there relevant precedents?

4. Expert Judgment
   - What do domain experts think?
   - Is there consensus or disagreement?
   - What uncertainties exist in expert opinions?
```

### 2.2 Probability Calibration

```markdown
CALIBRATION QUESTIONS:

1. Base Rate Question
   "In similar situations, how often does this risk materialize?"
   - Reference class identification
   - Base rate estimation
   - Adjustment for relevant differences

2. Evidence Question
   "What specific evidence indicates this risk is more/less likely?"
   - Direct evidence for/against
   - Indirect indicators
   - Evidence quality assessment

3. Mechanism Question
   "What would need to happen for this risk to occur?"
   - Causal chain analysis
   - Bottleneck identification
   - Conditional probability assessment

4. Uncertainty Question
   "How confident are we in our probability estimate?"
   - Data quality
   - Model validity
   - Unknown unknowns
```

## 3. Impact Assessment

### 3.1 Impact Dimension Matrix

```markdown
| Impact Dimension | Level 1 (Minor) | Level 3 (Moderate) | Level 5 (Severe) |
|------------------|-----------------|-------------------|------------------|
| **Belief Accuracy** | Slight reduction in accuracy | Significant accuracy reduction | Entire belief is wrong |
| **Decision Quality** | Minor decision error | Major decision error | Catastrophic decision error |
| **Resource Cost** | Small time/effort wasted | Significant resources lost | Major resources lost |
| **Opportunity Cost** | Small opportunity missed | Important opportunity lost | Critical opportunity lost |
| **Reversibility** | Easily reversible | Difficult to reverse | Irreversible |
| **Second-Order Effects** | Minimal downstream impact | Noticeable cascade effects | Severe cascade effects |
```

### 3.2 Impact Scoring Guide

```markdown
IMPACT SCORE CALCULATION:

Impact Score = (Accuracy Impact × 0.30) + (Decision Impact × 0.25) + 
               (Resource Impact × 0.15) + (Opportunity Impact × 0.15) + 
               (Reversibility × 0.10) + (Second-Order × 0.05)

INTERPRETATION:

- **Score 4.0-5.0**: Severe impact - requires maximum attention
- **Score 2.5-3.9**: Moderate impact - significant concern
- **Score 1.0-2.4**: Minor impact - manageable risk
```

## 4. Risk Matrix Integration

### 4.1 Combined Risk Score

```markdown
COMBINED RISK SCORE:

Risk Score = Probability Score × Impact Score

MATRIX VISUALIZATION:

                    IMPACT
                 1      2      3      4      5
           ┌──────┬──────┬──────┬──────┬──────┐
        1  │ Low  │ Low  │ Low  │ Med  │ Med  │
           ├──────┼──────┼──────┼──────┼──────┤
PROB     2 │ Low  │ Low  │ Med  │ Med  │ Med  │
           ├──────┼──────┼──────┼──────┼──────┤
ABILITY  3 │ Low  │ Med  │ Med  │ High │ High │
           ├──────┼──────┼──────┼──────┼──────┤
        4  │ Med  │ Med  │ High │ High │ V.High│
           ├──────┼──────┼──────┼──────┼──────┤
        5  │ Med  │ High │ High │ V.High│ V.High│
           └──────┴──────┴──────┴──────┴──────┘

RISK LEVELS:
- **Low (1-4)**: Acceptable - proceed with awareness
- **Medium (5-9)**: Monitor - develop contingency plans
- **High (10-16)**: Significant - implement mitigation strategies
- **Very High (17-25)**: Critical - mandatory mitigation required
```

### 4.2 Risk Assessment Template

```markdown
## Risk Assessment Record [ID: R-XXX]

**Associated Belief/Decision**: [Link to belief/decision]

### Risk Description
[Clear statement of what could go wrong]

**Risk Category**: [Epistemic/Methodological/External/Decision]
**Risk Type**: [Specific type within category]

### Probability Assessment
**Estimated Probability**: [1-5 scale] ([XX% range])

**Assessment Basis**:
- Historical frequency: [Evidence]
- Causal analysis: [Mechanisms]
- Analogical evidence: [Comparisons]
- Expert input: [Sources]

**Confidence in Estimate**: [High/Medium/Low]
**Reason for confidence level**: [Explanation]

### Impact Assessment
**Impact Dimensions**:
- Accuracy Impact: [1-5] ([Rationale])
- Decision Impact: [1-5] ([Rationale])
- Resource Impact: [1-5] ([Rationale])
- Opportunity Impact: [1-5] ([Rationale])
- Reversibility: [1-5] ([Rationale])
- Second-Order Effects: [1-5] ([Rationale])

**Calculated Impact Score**: [X.XX]

### Combined Risk Score
**Risk Score**: [Probability × Impact]

**Risk Level**: [Low/Medium/High/Very High]

### Mitigation Strategies
[Available strategies to reduce probability or impact]

### Residual Risk
[Risk level after mitigation]

### Monitoring Indicators
[What to watch for that would indicate risk is materializing]

### Review Date
[When this assessment should be revisited]
```

## 5. Risk Response Strategies

### 5.1 Response Strategy Selection

```markdown
RISK RESPONSE OPTIONS:

1. AVOID (Reduce probability to zero)
   - Reframe the belief to eliminate the risk
   - Choose alternative beliefs with lower risk
   - Withhold belief until risk is better understood

2. REDUCE (Lower probability or impact)
   - Gather more evidence to strengthen confidence
   - Build in safeguards and checks
   - Develop contingency plans
   - Diversify evidence base

3. TRANSFER (Shift to another party)
   - Seek expert validation
   - Use peer review processes
   - Consult multiple independent sources

4. ACCEPT (Acknowledge and proceed)
   - When risk is low or unavoidable
   - When benefits outweigh risks
   - When mitigation is not cost-effective
   - Document acceptance rationale

5. MONITOR (Watch for development)
   - When risk is uncertain
   - When early indicators are available
   - When the situation is evolving
```

### 5.2 Strategy Implementation Guide

```markdown
FOR EACH IDENTIFIED HIGH OR VERY HIGH RISK:

1. EVALUATE OPTIONS
   - Which strategies are applicable?
   - What are the costs and benefits of each?
   - What are the second-order effects?

2. SELECT STRATEGY
   - Choose based on risk level and resources
   - Consider multiple strategies if appropriate
   - Ensure strategy is feasible and timely

3. IMPLEMENT CONTROLS
   - Define specific actions to take
   - Assign responsibilities
   - Set timelines and milestones
   - Allocate necessary resources

4. ESTABLISH MONITORING
   - Define success criteria
   - Set up review schedule
   - Identify trigger points for action
   - Document escalation procedures
```

## 6. Risk Communication and Documentation

### 6.1 Risk Report Structure

```markdown
## Risk Assessment Report

### Executive Summary
[High-level overview of key risks]

### Risk Register
| Risk ID | Risk Description | Probability | Impact | Score | Level | Status |
|---------|------------------|-------------|--------|-------|-------|--------|
| R-001   | [Description]    | [1-5]       | [X.XX] | [X]   | [L/M/H/VH] | [Open/Closed] |
| ...     | ...               | ...         | ...    | ...   | ...   | ...    |

### Top Risks Summary
[Detail on the 3-5 highest priority risks]

### Mitigation Status
[Progress on addressing key risks]

### Recommended Actions
[Prioritized list of actions]

### Monitoring Plan
[How risks will be tracked over time]

### Review Schedule
[When next assessment is due]
```

### 6.2 Communication Guidelines

```markdown
RISK COMMUNICATION PRINCIPLES:

1. BE SPECIFIC
   - Name specific risks, not general concerns
   - Use concrete probability and impact estimates
   - Provide examples when helpful

2. BE BALANCED
   - Acknowledge both threats and opportunities
   - Don't overemphasize dramatic risks
   - Consider the base rate

3. BE TRANSPARENT
   - State assumptions and uncertainties
   - Explain the reasoning behind assessments
   - Make the methodology visible

4. BE ACTIONABLE
   - Connect risks to decisions
   - Suggest concrete responses
   - Make next steps clear
```

## 7. Ongoing Risk Monitoring

### 7.1 Monitoring Framework

```markdown
MONITORING SCHEDULE:

- **Continuous**: Real-time tracking of active indicators
- **Weekly**: Review of leading indicators
- **Monthly**: Comprehensive risk status review
- **Quarterly**: Full risk reassessment
- **Triggered**: Immediate review on significant events

MONITORING ELEMENTS:

1. Leading Indicators
   - Early warning signs of risk materialization
   - Changes in probability or impact factors
   - Emerging evidence

2. Lagging Indicators
   - Confirmation that risks have materialized
   - Impact of realized risks
   - Effectiveness of mitigations

3. Environmental Scanning
   - Changes in context or assumptions
   - New information or evidence
   - Expert opinion shifts
```

### 7.2 Review Triggers

```markdown
AUTOMATIC REVIEW TRIGGERS:

1. Evidence Triggers
   - Significant new evidence emerges
   - Existing evidence is invalidated
   - Major contradictions are found

2. Event Triggers
   - A risk materializes
   - A decision based on the belief is made
   - External events change the context

3. Threshold Triggers
   - Combined risk score exceeds threshold
   - Cumulative risk exceeds tolerance
   - New risks are identified
```

---

**Remember**: Effective risk assessment is not about eliminating uncertainty, but about understanding uncertainty well enough to make informed decisions about confidence levels and actions.
