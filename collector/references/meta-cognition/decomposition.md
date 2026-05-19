# Problem Decomposition Framework

## Overview

Problem decomposition is the cognitive process of breaking down complex problems into manageable sub-components. This framework applies the MECE principle and provides systematic methods for identifying, structuring, and evaluating sub-problems.

---

## 1. MECE Principle Application

### Definition

**MECE**: Mutually Exclusive, Collectively Exhaustive

- **Mutually Exclusive**: Sub-problems should not overlap or double-count any elements
- **Collectively Exhaustive**: All relevant elements must be captured across all sub-problems

### Application Checklist

| Check | Question |
|-------|----------|
| ME-1 | Does any sub-problem overlap with another? |
| ME-2 | Can any element be assigned to multiple sub-problems? |
| CE-1 | Are all relevant elements covered? |
| CE-2 | Are there any gaps in the decomposition? |
| CE-3 | What would be missing if a sub-problem were removed? |

### MECE Categories Template

```
┌─────────────────────────────────────────────────────────┐
│                    ROOT PROBLEM                          │
├─────────────────┬─────────────────┬─────────────────────┤
│   Category A    │   Category B    │    Category C       │
├────────┬────────┼────────┬────────┼──────────┬─────────┤
│ Sub-A1 │ Sub-A2 │ Sub-B1 │ Sub-B2 │  Sub-C1  │ Sub-C2  │
└────────┴────────┴────────┴────────┴──────────┴─────────┘
```

---

## 2. Sub-Problem Identification Methods

### 2.1 Top-Down Decomposition

**Process**:
1. Define the root problem clearly
2. Identify major dimensions or aspects
3. Break each dimension into sub-components
4. Continue until sub-problems are actionable

**When to Use**:
- Well-understood problem domains
- When existing frameworks or taxonomies exist
- Strategic planning and roadmapping

**Example Decomposition Tree**:
```
Software Quality
├── Functional Quality
│   ├── Correctness
│   ├── Appropriateness
│   └── Interoperability
├── Non-Functional Quality
│   ├── Performance
│   │   ├── Speed
│   │   ├── Resource usage
│   │   └── Scalability
│   ├── Reliability
│   │   ├── Availability
│   │   ├── Recoverability
│   │   └── Durability
│   └── Security
│       ├── Confidentiality
│       ├── Integrity
│       └── Authentication
└── Perceived Quality
    ├── Usability
    └── Aesthetics
```

### 2.2 Bottom-Up Aggregation

**Process**:
1. List all known data points, facts, or constraints
2. Group related items into clusters
3. Name each cluster as a sub-problem
4. Verify coverage and identify gaps

**When to Use**:
- Data-rich problem environments
- When ground truth or evidence is available
- Research and investigative work

### 2.3 Hybrid Approach

**Process**:
1. Start with top-down to establish framework
2. Use bottom-up to populate sub-problems
3. Iterate and refine

---

## 3. Decomposition Quality Assessment

### 3.1 Quality Criteria

| Criterion | Description | Score (1-5) |
|-----------|-------------|-------------|
| Completeness | All relevant aspects covered | |
| Independence | Sub-problems can be solved separately | |
| Granularity | Appropriate level of detail | |
| Actionability | Each sub-problem leads to clear next steps | |
| Clarity | No ambiguity in sub-problem definitions | |

### 3.2 Decomposition Audit Questions

#### Before Decomposition
- What is the ultimate decision or answer needed?
- What constraints exist on the solution space?
- What resources are available for sub-problem solving?
- What is the appropriate time horizon?

#### During Decomposition
- Am I applying MECE correctly?
- Is this sub-problem at the right granularity?
- Can this sub-problem be validated independently?
- Are there dependencies between sub-problems?

#### After Decomposition
- Can I prioritize sub-problems by importance?
- Are there sub-problems that could be parallelized?
- What are the critical path sub-problems?
- Where are the highest uncertainties?

### 3.3 Common Pitfalls

| Pitfall | Description | Mitigation |
|---------|-------------|------------|
| Over-decomposition | Too many sub-problems, losing overview | Set maximum depth (3-4 levels) |
| Under-decomposition | Sub-problems too broad, remain complex | Split if >1 week of work |
| Assumption leakage | Hidden assumptions in sub-problem definitions | Explicitly state assumptions |
| Solution contamination | Pre-judging solutions in problem framing | Use neutral language |
| False independence | Assuming independence when dependencies exist | Map dependencies explicitly |

---

## 4. Dependency Mapping

### 4.1 Dependency Types

- **Sequential**: Sub-problem B depends on Sub-problem A output
- **Parallelizable**: Sub-problems can be solved independently
- **Information-sharing**: Sub-problems share data or insights
- **Constraining**: Sub-problem output constrains another

### 4.2 Dependency Matrix Template

```
              │ Problem A │ Problem B │ Problem C │ Problem D │
──────────────┼───────────┼───────────┼───────────┼───────────┤
  Problem A   │     -     │     S     │     I     │     C     │
  Problem B   │           │     -     │     P     │     S     │
  Problem C   │           │           │     -     │     I     │
  Problem D   │           │           │           │     -     │

Legend: S=Sequential, P=Parallel, I=Information-sharing, C=Constraining
```

---

## 5. Prioritization Framework

### Eisenhower Matrix for Sub-Problems

|                    | **Urgent**            | **Not Urgent**         |
|--------------------|-----------------------|------------------------|
| **Important**      | Do First              | Schedule               |
|                    | (Critical path items) | (High-value research)  |
| **Not Important**   | Delegate              │ Eliminate              |
|                    | (Can be parallelized) | (Nice-to-have items)   |

### Prioritization Criteria

1. **Impact**: How much does solving this affect the root problem?
2. **Feasibility**: Can we actually solve this with available resources?
3. **Uncertainty**: How much would solving this reduce overall uncertainty?
4. **Dependency**: Does other work depend on this being solved first?
5. **Reversibility**: How costly is it if we solve it wrong?

---

## 6. Practical Templates

### Template 1: Problem Statement

```
Root Problem:
[One-sentence clear statement of the problem to solve]

Success Criteria:
- [Criterion 1: measurable outcome]
- [Criterion 2: measurable outcome]

Constraints:
- [Budget/Time constraint]
- [Technical constraint]
- [Resource constraint]

Scope (In Scope / Out of Scope):
- In: [What will be covered]
- Out: [What will be explicitly excluded]
```

### Template 2: Decomposition WorkSheet

```
┌────────────────────────────────────────────────────────────────┐
│ Decomposition ID: _____    Date: ____________                 │
├────────────────────────────────────────────────────────────────┤
│ ROOT PROBLEM: ________________________________________________ │
├────────────────────────────────────────────────────────────────┤
│ SUB-PROBLEM    │ DIMENSION │ DEPENDS ON │ EFFORT │ PRIORITY   │
├────────────────┼───────────┼────────────┼────────┼────────────┤
│ SP-1          │           │            │        │            │
│ SP-2          │           │            │        │            │
│ SP-3          │           │            │        │            │
│ SP-4          │           │            │        │            │
│ SP-5          │           │            │        │            │
├────────────────┴───────────┴────────────┴────────┴────────────┤
│ KEY ASSUMPTIONS: _____________________________________________ │
│ POTENTIAL RISKS: ____________________________________________ │
└────────────────────────────────────────────────────────────────┘
```

---

## 7. Cognitive Biases in Decomposition

| Bias | Description | Mitigation |
|------|-------------|------------|
| Anchoring | Over-relying on first decomposition seen | Generate multiple alternatives |
| Confirmation bias | Only seeing evidence supporting current decomposition | Seek disconfirming evidence |
| Availability | Using easily recalled sub-problems | Systematic enumeration |
| Representativeness | Assuming structure from similar past problems | Explicitly challenge analogy fit |
| Framing | Different decomposition based on problem framing | Reframe and compare |

---

## 8. Quick Reference Card

### Decomposition Protocol

1. **Clarify** the root problem (1 sentence)
2. **Identify** major dimensions (2-7 categories)
3. **Apply** MECE principle
4. **Map** dependencies
5. **Assess** quality (completeness, independence, actionability)
6. **Prioritize** based on impact and feasibility
7. **Document** assumptions explicitly

### Red Flags

- [ ] More than 7 main categories (reconsider grouping)
- [ ] Sub-problems requiring >1 week each (need further decomposition)
- [ ] Unlabeled or vague sub-problems
- [ ] Hidden circular dependencies
- [ ] No clear path from sub-problems to root solution

---

## References

- Mintzberg, H. (1978). Patterns in strategy formation. *Management Science*
-Reasoning*. New York: Cambridge University Press.
- Diagrammatic Reasoning in Management. *MIT Sloan Management Review*.

---

*This framework is part of the Collector Meta-Cognition module for systematic problem-solving.*
