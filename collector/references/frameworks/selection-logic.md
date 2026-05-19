# Framework Selection Logic

## Overview

The Collector skill offers multiple decision framework families, each suited to different problem characteristics. This document provides systematic guidance for selecting the appropriate framework based on problem attributes. The goal is not to prescribe rigid rules but to offer principled guidance that can be applied consistently and adapted to context.

Effective framework selection requires understanding both the frameworks themselves and the problem characteristics that determine which framework is most appropriate. This document addresses both dimensions, providing decision logic, comparison tools, and practical guidance.

## Problem Characteristics Taxonomy

Before selecting a framework, the problem must be characterized along several dimensions. These characteristics determine which framework approaches are viable.

### Structural Characteristics

**Decision Structure**: How are choices organized?

- Sequential: Choices build on previous decisions (→ Decision Trees, Flows)
- Parallel: Choices are evaluated simultaneously (→ Matrices, MCDA)
- Hierarchical: Choices operate at different levels of abstraction (→ Decision Trees, MCDA)
- Mixed: Multiple structures combine (→ Multiple frameworks)

**Information Availability**: What information is available at decision time?

- Complete: All relevant information is known
- Incomplete: Some information must be acquired
- Evolving: Information changes during the decision process

**Outcome Visibility**: How clear are the consequences of decisions?

- Immediate: Outcomes are apparent quickly
- Delayed: Consequences emerge over time
- Uncertain: Outcomes are probabilistic

### Evaluation Characteristics

**Criterion Count**: How many evaluation dimensions exist?

- Single: One primary criterion dominates
- Few: 2-4 criteria (→ Simple Matrices)
- Moderate: 5-10 criteria (→ MCDA, Weighted Matrices)
- Many: More than 10 criteria (→ Consider decomposition)

**Criterion Independence**: Are criteria related?

- Independent: Performance on one criterion doesn't affect others
- Correlated: Some criteria move together
- Conflicting: Improving one criterion worsens others

**Measurement Quality**: How well can alternatives be evaluated?

- Well-measured: Quantitative data available
- Partially measured: Mix of quantitative and qualitative
- Subjective: Primarily qualitative judgment required

### Stakeholder Characteristics

**Number of Stakeholders**: Who is involved?

- Individual: Single decision-maker
- Small group: 2-5 stakeholders with aligned interests
- Large group: Many stakeholders with potentially conflicting interests
- Organization: Multiple levels and functions

**Preference Alignment**: Do stakeholders agree?

- Aligned: Shared objectives and values
- Partially aligned: Agreement on some dimensions
- Conflicting: Different stakeholders prioritize differently

**Transparency Requirements**: How visible must the reasoning be?

- Private: Decision-maker only
- Transparent: Reasoning shared with stakeholders
- Auditable: Decision may be formally audited
- Regulatory: Decision must meet compliance standards

## Framework Selection Flowchart

The following flowchart provides systematic guidance for framework selection:

```
┌─────────────────────────────────────────────────────────────┐
│                 FRAMEWORK SELECTION PROCESS                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    ┌─────────────────────────────────────────────────────┐  │
│    │ START: Problem Characterization                      │  │
│    └─────────────────────┬───────────────────────────────┘  │
│                          │                                    │
│                          ▼                                    │
│    ┌─────────────────────────────────────────────────────┐  │
│    │ Q1: Is the problem primarily diagnostic or          │  │
│    │     sequential decision-making?                     │  │
│    │ (Ask: "Does the problem involve identifying        │  │
│    │  causes or following steps?")                       │  │
│    └─────────────────────┬───────────────────────────────┘  │
│                    ┌────┴────┐                              │
│                    │         │                               │
│                   YES        NO                              │
│                    │         │                               │
│                    ▼         │                               │
│    ┌───────────────────────┐│                               │
│    │ DECISION TREE         ││                               │
│    │ - Diagnostic workflows                      ││                               │
│    │ - Capability routing                          ││                               │
│    │ - Eligibility determination                    ││                               │
│    └───────────────────────┘│                               │
│                              │                               │
│                              ▼                               │
│    ┌─────────────────────────────────────────────────────┐  │
│    │ Q2: Is the problem primarily about positioning     │  │
│    │     or categorizing options?                        │  │
│    │ (Ask: "Is the goal to compare options across       │  │
│    │  dimensions or place them in categories?")         │  │
│    └─────────────────────┬───────────────────────────────┘  │
│                    ┌────┴────┐                              │
│                    │         │                               │
│                   YES        NO                              │
│                    │         │                               │
│                    ▼         │                               │
│    ┌───────────────────────┐│                               │
│    │ MATRIX                ││                               │
│    │ - Portfolio decisions                      ││                               │
│    │ - Priority setting                           ││                               │
│    │ - Portfolio management                       ││                               │
│    └───────────────────────┘│                               │
│                              │                               │
│                              ▼                               │
│    ┌─────────────────────────────────────────────────────┐  │
│    │ Q3: Are multiple criteria with different           │  │
│    │     importance levels involved?                     │  │
│    │ (Ask: "Are there several factors to weigh with    │  │
│    │  different relative importance?")                  │  │
│    └─────────────────────┬───────────────────────────────┘  │
│                    ┌────┴────┐                              │
│                    │         │                               │
│                   YES        NO                              │
│                    │         │                               │
│                    ▼         │                               │
│    ┌───────────────────────┐│                               │
│    │ MCDA                  ││                               │
│    │ - High-stakes decisions                      ││                               │
│    │ - Multi-stakeholder evaluation                 ││                               │
│    │ - Strategic planning                          ││                               │
│    └───────────────────────┘│                               │
│                              │                               │
│                              ▼                               │
│    ┌─────────────────────────────────────────────────────┐  │
│    │ Q4: Is the problem about executing a known         │  │
│    │     process or procedure?                           │  │
│    │ (Ask: "Is there a defined process to follow?")      │  │
│    └─────────────────────┬───────────────────────────────┘  │
│                    ┌────┴────┐                              │
│                    │         │                               │
│                   YES        NO                              │
│                    │         │                               │
│                    ▼         │                               │
│    ┌───────────────────────┐│                               │
│    │ FLOW-BASED            ││                               │
│    │ - Process execution                        ││                               │
│    │ - Multi-step procedures                     ││                               │
│    │ - State management                           ││                               │
│    └───────────────────────┘│                               │
│                              │                               │
│                              ▼                               │
│    ┌─────────────────────────────────────────────────────┐  │
│    │ Q5: Is there a single dominant criterion or       │  │
│    │     obvious best option?                           │  │
│    │ (Ask: "Is one option clearly best if we agree     │  │
│    │  on priorities?")                                   │  │
│    └─────────────────────┬───────────────────────────────┘  │
│                    ┌────┴────┐                              │
│                    │         │                               │
│                   YES        NO                              │
│                    │         │                               │
│                    ▼         ▼                               │
│    ┌────────────────┐  ┌───────────────────────────────┐     │
│    │ SIMPLE        │  │ Return to Q1: Complex problem     │     │
│    │ COMPARISON    │  │ may require multiple frameworks  │     │
│    │ or HEURISTIC  │  └───────────────────────────────┘     │
│    └────────────────┘                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Framework Comparison Matrix

### Decision Framework Comparison

| Dimension | Decision Trees | Matrices | MCDA | Flow-Based |
|-----------|---------------|----------|------|------------|
| **Primary Use** | Sequential diagnosis | Position/categorize | Multi-criteria evaluation | Process execution |
| **Criteria Count** | 1-3 per node | 2 (axes) | 3+ | Not applicable |
| **Stakeholder Complexity** | Low-Medium | Low-Medium | Medium-High | Low |
| **Transparency** | High | High | Medium-High | Medium |
| **Time to Apply** | Low-Medium | Low | Medium-High | Low-Medium |
| **Data Requirements** | Low | Low-Medium | Medium-High | Low |
| **Mathematical Complexity** | Low | Low | Medium-High | None |
| **Best For** | Classification | Portfolio decisions | Strategic choices | Procedures |
| **Limitations** | Poor for parallel eval | Limited criteria | Requires expertise | Inflexible |

### Matrix Framework Comparison

| Framework | Dimensions | Best For | Limitations |
|-----------|-----------|----------|-------------|
| **Eisenhower** | Urgency × Importance | Personal productivity | Subjective rating |
| **BCG Matrix** | Growth × Market Share | Portfolio strategy | Oversimplifies markets |
| **Decision Matrix** | Multiple criteria | Vendor/solution selection | Criteria selection bias |
| **Risk Matrix** | Likelihood × Impact | Risk prioritization | Coarse resolution |

### MCDA Method Comparison

| Method | Complexity | Transparency | Best For |
|--------|-----------|--------------|----------|
| **AHP** | Medium | High | When weights uncertain |
| **TOPSIS** | Medium | High | When ideal point clear |
| **Simple Weighted Sum** | Low | Medium | Quick approximations |
| **PROMETHEE** | High | Medium | Outranking situations |

## Problem-Type to Framework Mapping

### Well-Structured Problems

When objectives, constraints, and alternatives are clear:

| Problem Type | Recommended Framework | Rationale |
|--------------|---------------------|----------|
| Classification | Decision Trees | Sequential evaluation of characteristics |
| Prioritization | Matrix (Eisenhower) | Two-dimensional positioning |
| Selection from fixed set | Decision Matrix | Systematic multi-criteria evaluation |

### Ill-Structured Problems

When objectives, constraints, or alternatives are unclear:

| Problem Type | Recommended Framework | Rationale |
|--------------|---------------------|----------|
| Problem definition | Decision Tree (iterative) | Progressive elaboration |
| Alternative generation | Flow-based (brainstorm) | Structured creative process |
| Criteria identification | MCDA (exploratory) | Explicit value elicitation |

### Multi-Stakeholder Problems

When different stakeholders have different values:

| Problem Type | Recommended Framework | Rationale |
|--------------|---------------------|----------|
| Aligned stakeholders | Decision Matrix | Efficient single-perspective eval |
| Partially aligned | MCDA with consensus | Aggregates multiple perspectives |
| Conflicting interests | MCDA with analysis | Surfaces and documents conflict |

### Time-Pressured Problems

When decisions must be made quickly:

| Time Available | Recommended Approach | Notes |
|--------------|-------------------|-------|
| Immediate (< 1 min) | Heuristic or rule | Use simple decision tree |
| Short (5-15 min) | Matrix | Quick positioning |
| Moderate (30-60 min) | Decision Matrix | Weighted evaluation |
| Extended (> 1 hour) | Full MCDA | Complete rigor |

## Adaptive Selection Principles

While the selection flowchart provides systematic guidance, several principles should inform adaptive decisions:

### Principle 1: Start Simple, Add Complexity as Needed

Begin with the simplest framework that captures essential decision logic. Add complexity only when necessary for accuracy or stakeholder acceptance.

**Example**: For a vendor selection, start with a simple decision matrix. Only employ full AHP if stakeholders challenge the weighting methodology.

### Principle 2: Match Formal Rigor to Decision Stakes

Higher-stakes decisions warrant more rigorous methodology. Low-stakes decisions should use lightweight approaches.

**Example**: Choosing a development tool (low stakes) may warrant a simple matrix. Selecting a core platform architecture (high stakes) warrants full MCDA.

### Principle 3: Consider Audience Sophistication

The selected framework must be explainable to decision stakeholders. More complex methods require more explanation.

**Example**: A board of directors may resist AHP due to mathematical complexity but will readily understand a positioning matrix.

### Principle 4: Preserve Optionality When Uncertain

When framework selection is uncertain, prefer approaches that preserve flexibility for later reconsideration.

**Example**: Decision trees with feedback loops allow iterative refinement. Rigid flows lock in early assumptions.

### Principle 5: Combine Frameworks Synergistically

Complex problems often benefit from multiple frameworks in sequence:

- Decision Tree → narrows options
- Matrix → positions remaining options
- MCDA → evaluates top candidates
- Flow → implements chosen option

## Real-World Selection Case Studies

### Case Study 1: Healthcare System Technology Investment

**Problem**: A regional healthcare system must select a new Electronic Health Record (EHR) platform.

**Initial Characterization**:
- Decision Structure: Parallel (evaluate simultaneously)
- Criteria Count: 12+ (functionality, cost, interoperability, support, training, etc.)
- Stakeholders: Physicians, nurses, administrators, IT staff, board
- Stakes: Very high ($50M+ investment, decade-long commitment)
- Time: 6 months allocated

**Framework Selection**:
The problem warranted MCDA due to multiple criteria with different stakeholder importance weights. AHP was selected because:
- Stakeholder input on weights was essential for buy-in
- Consistency checking helped identify where stakeholders disagreed
- The hierarchical structure matched the natural grouping of criteria

**Outcome**: The AHP process revealed that physicians and administrators had significantly different weight priorities. Rather than hiding this conflict, the analysis surfaced it, enabling productive negotiation and ultimately stronger consensus.

### Case Study 2: E-commerce Platform Feature Development

**Problem**: A mid-sized e-commerce company must prioritize a backlog of 50+ potential features.

**Initial Characterization**:
- Decision Structure: Hierarchical (business units, customer segments, technical feasibility)
- Criteria Count: 5-7 (revenue impact, customer satisfaction, strategic fit, effort, risk)
- Stakeholders: Product, Engineering, Marketing, Executive
- Stakes: Medium (allocation of quarterly roadmap)
- Time: 2-hour prioritization session

**Framework Selection**:
The problem warranted a Decision Matrix due to:
- Multiple criteria with different importance
- Need for quick, transparent prioritization
- Stakeholders comfortable with weighted scoring

**Outcome**: The matrix approach enabled efficient prioritization in the allocated time. Features were scored, weighted, and ranked. Post-session analysis revealed that the top 10 features aligned well with strategic priorities.

### Case Study 3: Technical Support Routing System

**Problem**: An enterprise software company must route incoming support tickets to appropriate resolution paths.

**Initial Characterization**:
- Decision Structure: Sequential (symptom → cause → resolution path)
- Criteria Count: 3-4 at each decision node
- Stakeholders: Support team (internal)
- Stakes: Medium (customer satisfaction, support costs)
- Time: Ongoing operational decision

**Framework Selection**:
The problem warranted a Decision Tree due to:
- Clear sequential logic (symptoms lead to causes)
- Different resolution paths based on characteristics
- Need for consistent, auditable routing

**Outcome**: The decision tree routing system reduced mean time to resolution by 35% by ensuring tickets reached appropriate expertise quickly. The tree structure was easily updated as new issue patterns emerged.

### Case Study 4: Startup Strategic Pivot Decision

**Problem**: A Series A startup must decide whether to pivot their product focus.

**Initial Characterization**:
- Decision Structure: Complex (multiple strategic dimensions)
- Criteria Count: Many (market size, competition, team fit, capital requirements, timeline to revenue)
- Stakeholders: Founders, Board, Key Investors
- Stakes: Very high (company survival)
- Time: Several weeks of deliberation

**Framework Selection**:
The problem warranted MCDA because:
- Multiple conflicting criteria needed explicit evaluation
- Different stakeholders weighted dimensions differently
- Decision required clear justification to investors
- High stakes demanded rigorous analysis

**Outcome**: The MCDA analysis helped founders articulate their reasoning systematically. Different pivot scenarios were evaluated, revealing that the current trajectory scored well on some dimensions but poorly on others. The analysis informed the eventual decision to make a targeted pivot rather than a wholesale change.

## Framework Selection Anti-Patterns

Avoid these common mistakes in framework selection:

**Tool-Driven Selection**: Selecting a framework because it is familiar rather than appropriate. "We always use decision matrices" leads to systematic misuse.

**Complexity Escalation**: Employing MCDA when a simple matrix would suffice. Complexity should match decision importance.

**Framework Stacking**: Applying multiple frameworks without clear rationale. Each framework should add value, not just appear thorough.

**Premature Commitment**: Selecting a framework before characterizing the problem adequately. Invest time in problem understanding first.

**Methodology Worship**: Treating framework output as definitive rather than informative. Frameworks inform judgment; they do not replace it.

## Documentation Requirements

When documenting framework selection:

1. **Problem Characterization**: Record the problem attributes that drove selection
2. **Framework Justification**: Explain why the selected framework is appropriate
3. **Alternatives Considered**: Note other frameworks that were considered
4. **Stakeholder Input**: Document who participated in framework selection
5. **Adaptations Made**: Note any modifications to the standard framework

## Summary Decision Guide

Use this quick reference for common situations:

| If... | Then use... |
|-------|------------|
| Need to diagnose a problem | Decision Tree |
| Need to categorize or position options | Matrix |
| Need to evaluate with multiple weighted criteria | MCDA |
| Need to execute a defined process | Flow-Based |
| Multiple stages involved | Combine frameworks |
| Unclear which framework fits | Use simpler approach first |
| Stakeholders challenge the approach | Increase transparency |

## Conclusion

Framework selection is a meta-decision that shapes all subsequent analysis. The systematic approach provided here—characterizing the problem, applying the selection logic, consulting the comparison matrix—should lead to appropriate framework choices in most situations.

Remember that framework selection itself is context-dependent. The guidance provided here represents starting points for consideration, not rigid rules. Good decision practice involves continuously reflecting on whether framework choices are serving decision quality well.

The Collector skill aims to support effective decision-making across this framework landscape. By matching problem characteristics to appropriate frameworks, you can leverage decades of decision science to improve outcomes systematically.
