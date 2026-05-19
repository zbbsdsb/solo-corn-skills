# Assumption Identification Framework

## Overview

Assumptions are beliefs held without proof that underlie reasoning, decisions, and plans. This framework provides systematic methods for identifying, categorizing, validating, and assessing the risks of assumptions in analytical work.

---

## 1. Explicit vs. Implicit Assumptions

### 1.1 Explicit Assumptions

**Definition**: Assumptions that are consciously recognized and stated.

**Characteristics**:
- Can be articulated by the analyst
- Usually documented in problem definitions
- Subject to direct review and challenge
- Often surface-level or structural

**Examples**:
- "Revenue will grow at 5% annually"
- "The market size is approximately $10B"
- "We assume the competitor will not change pricing"

**Identification Prompts**:
- What are the key inputs to your analysis?
- What conditions must hold for your conclusion to be valid?
- What would change your conclusion?

### 1.2 Implicit Assumptions

**Definition**: Unconscious assumptions that operate below awareness.

**Characteristics**:
- Not consciously recognized by the analyst
- Often culturally or contextually conditioned
- Can significantly distort reasoning
- Most dangerous because unexamined

**Examples**:
- "The historical trend will continue into the future" (often unstated)
- "The data sources are reliable" (assumed without investigation)
- "The decision-maker will act rationally" (rarely examined)
- "My mental model of the domain is accurate"

**Identification Methods**:

1. **Perspective-taking**: How would someone with different background see this?
2. **First principles**: What am I taking as given without proof?
3. ** Devil's advocate**: What would someone trying to disprove this assume?
4. **Temporal awareness**: What assumptions about past → future continuity exist?

### 1.3 Comparison Table

| Aspect | Explicit Assumptions | Implicit Assumptions |
|--------|---------------------|---------------------|
| Awareness | Conscious | Unconscious |
| Articulability | Easily stated | Difficult to surface |
| Risk level | Lower (examinable) | Higher (unexamined) |
| Documentation | Usually documented | Often undocumented |
| Reviewability | Direct challenge possible | Requires special techniques |

---

## 2. Assumption Categories

### 2.1 Domain Assumptions

About the nature of the problem domain:

```
□ The problem is well-defined
□ The relevant scope is correct
□ The key factors have been identified
□ Cause-effect relationships are correctly understood
□ The domain is stable (not changing rapidly)
```

### 2.2 Data Assumptions

About the inputs and evidence:

```
□ Data sources are accurate
□ Data is complete (no significant gaps)
□ Data is representative (not biased sample)
□ Data is current (not outdated)
□ Measurements are valid and reliable
```

### 2.3 Contextual Assumptions

About the environment:

```
□ The competitive landscape will remain stable
□ Regulatory conditions will not change significantly
□ No major technological disruptions will occur
□ Economic conditions will remain predictable
□ Stakeholder behaviors will not shift dramatically
```

### 2.4 Methodological Assumptions

About the analytical approach:

```
□ The chosen framework/model is appropriate
□ The analysis horizon is suitable
□ Key variables can be meaningfully quantified
□ Simplifications do not materially distort conclusions
□ The logic chain from evidence to conclusion is sound
```

### 2.5 Value Assumptions

About goals and priorities:

```
□ The defined success criteria are correct
□ Stakeholder preferences are correctly understood
□ Trade-offs are appropriately weighted
□ The decision-maker's risk tolerance is correctly gauged
```

---

## 3. Assumption Identification Techniques

### 3.1 Systematic Excavation Protocol

**Step 1: Surface Level (Explicit)**

Review your analysis line by line and ask:
- What inputs am I taking as given?
- What conditions am I assuming will hold?
- What evidence am I relying upon?

Document all stated assumptions.

**Step 2: Structural Level (Methodology)**

Ask:
- Why is this the right framework?
- What would invalidate my approach?
- What am I assuming about cause and effect?

**Step 3: Foundational Level (Mental Models)**

Ask:
- What do I believe about how this system works?
- What do I believe about how people/organizations behave?
- What past experiences are shaping my perception?

**Step 4: Social/Cultural Level**

Ask:
- What do others in my field typically assume?
- Are there industry conventions I might be unconsciously adopting?
- What beliefs are "obvious" in my professional context?

### 3.2 Assumption-Surfacing Questions

| Question Type | Example |
|---------------|---------|
| **Necessity** | "Is this assumption necessary for my conclusion?" |
| **Sufficiency** | "Is this alone sufficient, or do I need more?" |
| **Independence** | "Am I assuming independence where correlation exists?" |
| **Linearity** | "Am I assuming linear relationships that may be non-linear?" |
| **Stability** | "Am I assuming the future resembles the past?" |
| **Rationality** | "Am I assuming actors behave rationally?" |
| **Completeness** | "Am I assuming I know all the relevant factors?" |
| **Causality** | "Am I confusing correlation with causation?" |

### 3.3 Team Assumption Mining

When working with multiple analysts:

1. **Assumption party**: Each person writes assumptions anonymously, then pool and discuss
2. **Premortem**: Imagine the analysis failed; work backward to identify what assumptions were violated
3. **Outside expert review**: Someone unfamiliar with the domain identifies unstated assumptions
4. **Structured argument**: Use argument mapping to expose hidden premises

---

## 4. Assumption Validation Methods

### 4.1 Validation Hierarchy

```
┌─────────────────────────────────────────┐
│         VALIDATION HIERARCHY            │
├─────────────────────────────────────────┤
│  Level 5: Empirical verification        │
│         (Direct observation/test)       │
├─────────────────────────────────────────┤
│  Level 4: External validation            │
│         (Expert confirmation/data)      │
├─────────────────────────────────────────┤
│  Level 3: Internal consistency           │
│         (No contradictions)              │
├─────────────────────────────────────────┤
│  Level 2: Logical derivation             │
│         (Follows from validated beliefs)│
├─────────────────────────────────────────┤
│  Level 1: Intuitive acceptance           │
│         (Unvalidated gut feeling)        │
└─────────────────────────────────────────┘
```

### 4.2 Validation Strategies by Assumption Type

| Assumption Type | Validation Approach |
|----------------|---------------------|
| Factual | Check primary sources, verify data quality |
| Predictive | Analyze historical patterns, stress-test scenarios |
| Behavioral | Review evidence, consider psychological research |
| Structural | Examine model validity, test with known cases |
| Value | Clarify with stakeholders, explicit criteria |

### 4.3 Validation Documentation Template

```
┌──────────────────────────────────────────────────────────────────┐
│ ASSUMPTION VALIDATION RECORD                                     │
├──────────────────────────────────────────────────────────────────┤
│ Assumption ID: __________    Date: __________                   │
│ Assumption: ___________________________________________________ │
├──────────────────────────────────────────────────────────────────┤
│ CATEGORY: [ ] Factual  [ ] Predictive  [ ] Behavioral          │
│           [ ] Structural  [ ] Value                             │
├──────────────────────────────────────────────────────────────────┤
│ CONFIDENCE LEVEL: [ ] High  [ ] Medium  [ ] Low                 │
├──────────────────────────────────────────────────────────────────┤
│ VALIDATION EVIDENCE:                                            │
│ _______________________________________________________________ │
│ _______________________________________________________________ │
├──────────────────────────────────────────────────────────────────┤
│ VALIDATION METHOD:                                              │
│ [ ] Empirical test  [ ] Expert opinion  [ ] Logical analysis    │
│ [ ] Historical precedent  [ ] Not validated                     │
├──────────────────────────────────────────────────────────────────┤
│ IF VALIDATED FALSE, IMPACT ON ANALYSIS:                        │
│ _______________________________________________________________ │
├──────────────────────────────────────────────────────────────────┤
│ ALTERNATIVE ASSUMPTIONS TO CONSIDER:                            │
│ _______________________________________________________________ │
└──────────────────────────────────────────────────────────────────┘
```

---

## 5. Assumption Risk Assessment

### 5.1 Risk Dimensions

| Dimension | Description |
|-----------|-------------|
| **Plausibility** | How likely is this assumption to be true? |
| **Impact** | How much would the conclusion change if this is wrong? |
| **Prevalence** | How many conclusions depend on this assumption? |
| **Checkability** | How easily can this assumption be verified? |
| **Dependency** | How many other assumptions depend on this one? |

### 5.2 Risk Scoring Matrix

```
                    IMPACT
              Low        Medium       High
         ┌──────────┬───────────┬────────────┐
    High │  Medium  │   High    │  Critical   │
 P       │   Risk   │   Risk    │    Risk     │
L        ├──────────┼───────────┼────────────┤
    Medi │   Low    │   Medium  │    High     │
U        │   Risk   │   Risk    │    Risk     │
        ├──────────┼───────────┼────────────┤
    Low  │   Low    │   Low     │   Medium    │
         │   Risk   │   Risk    │    Risk     │
         └──────────┴───────────┴────────────┘
```

### 5.3 Risk Prioritization Protocol

**Step 1**: List all assumptions
**Step 2**: Rate each on plausibility (1-5) and impact (1-5)
**Step 3**: Calculate risk score (plausibility × impact)
**Step 4**: Identify critical assumptions (score > 15)
**Step 5**: Plan validation for high-risk assumptions

### 5.4 Risk Assessment Worksheet

```
┌─────────────────────────────────────────────────────────────────────────┐
│ ASSUMPTION RISK ASSESSMENT                                              │
├─────────────────────────────────────────────────────────────────────────┤
│ Assumption      │ Plaus. │ Impact │ Score │ Valid? │ Critical? │ Plan │
├─────────────────┼────────┼────────┼───────┼────────┼───────────┼──────┤
│ A1: ___________ │   /5   │   /5   │  ___  │ [Y/N]  │   [Y/N]   │      │
│ A2: ___________ │   /5   │   /5   │  ___  │ [Y/N]  │   [Y/N]   │      │
│ A3: ___________ │   /5   │   /5   │  ___  │ [Y/N]  │   [Y/N]   │      │
│ A4: ___________ │   /5   │   /5   │  ___  │ [Y/N]  │   [Y/N]   │      │
│ A5: ___________ │   /5   │   /5   │  ___  │ [Y/N]  │   [Y/N]   │      │
├─────────────────────────────────────────────────────────────────────────┤
│ LEGEND: Plaus. = Plausibility (1=unlikely, 5=very likely)              │
│         Impact = Impact on conclusions if false (1=minimal, 5=severe) │
│         Score = Plausibility × Impact                                 │
│         Critical = Score > 15 OR Impact = 5                             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 6. Assumption Management Strategies

### 6.1 Strategy Selection Framework

| Risk Level | Strategy | Description |
|------------|----------|-------------|
| Critical | Validate or abandon | Either verify or don't use this assumption |
| High | Hedge or validate | Build in hedges or prioritize validation |
| Medium | Monitor | Track assumption health over time |
| Low | Document | Record assumption, proceed with caution |

### 6.2 Hedging Techniques

**Sensitivity Analysis**:
Test conclusions under alternative assumption values.

**Scenario Analysis**:
Create scenarios where assumption fails, assess impact.

**Robustness Testing**:
Design solutions that work under multiple assumption sets.

**Explicit Confidence Bands**:
Report conclusions with ranges reflecting assumption uncertainty.

### 6.3 Contingency Planning

For each critical assumption:

```
IF [assumption] IS FALSE,
THEN [expected impact on conclusion],
SO [contingent action/alternative approach].
```

---

## 7. Cognitive Biases in Assumption Formation

| Bias | Effect | Mitigation |
|------|--------|------------|
| **Planning fallacy** | Underestimating time/cost based on optimistic assumptions | Reference base rates from similar projects |
| **Optimism bias** | Assuming favorable outcomes | Actively seek negative information |
| **Confirmation bias** | Seeking evidence that confirms existing assumptions | Structured adversarial review |
| **Sunk cost fallacy** | Maintaining assumptions due to prior investment | Re-evaluate independently |
| **Anchoring** | Fixating on initial assumptions | Generate alternatives before anchoring |
| **Availability cascade** | Popular assumptions treated as true | Return to first principles |
| **Authority bias** | Expert assumptions accepted uncritically | Demand evidence, not just credentials |

---

## 8. Quick Reference Card

### Assumption Audit Protocol

1. **List** all stated assumptions
2. **Uncover** implicit assumptions using techniques above
3. **Categorize** each assumption by type
4. **Validate** with appropriate method
5. **Assess** risk using matrix
6. **Prioritize** critical assumptions
7. **Plan** validation or hedging
8. **Document** all assumptions and status
9. **Review** assumptions periodically

### Red Flags

- [ ] No explicit assumptions documented
- [ ] "Obviously true" statements that haven't been checked
- [ ] Assumptions that would dramatically change the conclusion
- [ ] Heavy reliance on single assumptions
- [ ] No plan for validating high-risk assumptions

---

## References

- Heuer, R. J. (1999). *Psychology of Intelligence Analysis*. CIA Center for the Study of Intelligence.
- Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
- Schum, D. A. (1994). *The Evidential Foundations of Probabilistic Reasoning*. Northwestern University Press.

---

*This framework is part of the Collector Meta-Cognition module for systematic reasoning and decision-making.*
