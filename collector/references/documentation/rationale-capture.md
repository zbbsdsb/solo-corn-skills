# Decision Rationale Capture Format

## Overview

This document provides a structured format for capturing the reasoning chain behind technical decisions. It ensures that the "why" behind decisions is preserved and can be referenced in the future.

---

## Rationale Document Template

### Document Header

```markdown
# Rationale: [Brief Title]

| Field | Description |
|-------|-------------|
| **Decision ID** | [Reference to decision log] |
| **Date** | YYYY-MM-DD |
| **Author** | [Name/Role] |
| **Confidence Level** | [1-5 scale] |
| **Complexity** | [Low/Medium/High] |
```

---

## Reasoning Chain Documentation

### Initial Question

```markdown
## What Problem Are We Solving?

**Problem Statement**:
[Clear, concise description of the problem]

**Why This Matters**:
[Explain the significance and impact of solving this problem]

**Success Criteria**:
- [ ] [Criterion 1 - measurable]
- [ ] [Criterion 2 - measurable]
- [ ] [Criterion 3 - measurable]
```

### Assumptions and Constraints

```markdown
## Assumptions

| Assumption | Confidence | Impact if Wrong |
|------------|------------|-----------------|
| [Assumption 1] | [High/Medium/Low] | [Description] |
| [Assumption 2] | [High/Medium/Low] | [Description] |
| [Assumption 3] | [High/Medium/Low] | [Description] |

## Constraints

### Technical Constraints
- [Constraint 1]
- [Constraint 2]

### Business Constraints
- [Constraint 1]
- [Constraint 2]

### Time Constraints
- [Constraint 1]
- [Constraint 2]
```

### Information Gathering

```markdown
## Information Sources

### Research Conducted
- [Source 1]: [Summary of findings]
  - **Link**: [URL or reference]
  - **Relevance**: [High/Medium/Low]
  - **Key Takeaways**: [2-3 bullet points]

- [Source 2]: [Summary of findings]
  - **Link**: [URL or reference]
  - **Relevance**: [High/Medium/Low]
  - **Key Takeaways**: [2-3 bullet points]

### Expert Opinions
| Expert | Opinion | Reasoning |
|--------|---------|-----------|
| [Name] | [Summary] | [Rationale] |
| [Name] | [Summary] | [Rationale] |

### Data and Metrics
- [Metric 1]: [Value/Range]
- [Metric 2]: [Value/Range]
```

### Logic Flow

```markdown
## Reasoning Steps

### Step 1: [Title]
**Observation**: [What was observed or learned]
**Inference**: [What was deduced from this observation]
**Confidence**: [1-5]

### Step 2: [Title]
**Observation**: [What was observed or learned]
**Inference**: [What was deduced from this observation]
**Confidence**: [1-5]

### Step 3: [Title]
**Observation**: [What was observed or learned]
**Inference**: [What was deduced from this observation]
**Confidence**: [1-5]

### Final Conclusion
[Synthesized conclusion based on all reasoning steps]
```

---

## Evidence Citation Format

### Evidence Entry

```markdown
## Evidence References

### Category: [Category Name]

#### Evidence 1: [Title]
| Field | Value |
|-------|-------|
| **Type** | [Research/Past Experience/Data/Expert Opinion] |
| **Source** | [Source identifier or link] |
| **Credibility** | [High/Medium/Low] |
| **Relevance** | [Direct/Indirect/Tangential] |
| **Date Obtained** | YYYY-MM-DD |
| **Key Points** | 1. [Point 1]<br>2. [Point 2]<br>3. [Point 3] |
| **Used in** | [Step numbers where this evidence was applied] |

#### Evidence 2: [Title]
[Same structure as above]
```

### Evidence Categories

- **Technical Evidence**: Performance metrics, benchmark results, technical specifications
- **Historical Evidence**: Past projects, previous decisions, lessons learned
- **Research Evidence**: Academic papers, industry reports, case studies
- **Stakeholder Evidence**: User feedback, business requirements, market analysis
- **Expert Evidence**: Consultations, reviews, architectural decisions

---

## Alternative Comparison

### Option Analysis Matrix

```markdown
## Alternative Analysis

### Option: [Name]
| Aspect | Description |
|--------|-------------|
| **Approach** | [How it works] |
| **Strengths** | 1. [Strength 1]<br>2. [Strength 2] |
| **Weaknesses** | 1. [Weakness 1]<br>2. [Weakness 2] |
| **Resource Requirements** | [Time/Money/People] |
| **Risk Profile** | [Description] |
| **Evidence Support** | [Evidence IDs supporting this option] |

### Comparative Summary

| Criteria | Option A | Option B | Option C |
|----------|----------|----------|----------|
| **Meets Requirements** | [Y/N/Partial] | [Y/N/Partial] | [Y/N/Partial] |
| **Implementation Effort** | [Low/Med/High] | [Low/Med/High] | [Low/Med/High] |
| **Long-term Maintainability** | [Rating] | [Rating] | [Rating] |
| **Risk Level** | [Low/Med/High] | [Low/Med/High] | [Low/Med/High] |
| **Evidence Strength** | [Rating] | [Rating] | [Rating] |
| **Total Score** | [Sum] | [Sum] | [Sum] |
```

---

## Documentation Checklist

### Pre-Decision Checklist

- [ ] Problem statement clearly defined
- [ ] All assumptions documented
- [ ] Constraints identified and categorized
- [ ] Evidence gathered from multiple sources
- [ ] Alternative options identified
- [ ] Reasoning chain fully documented
- [ ] Confidence level self-assessed
- [ ] Review by at least one other party

### Post-Decision Checklist

- [ ] Final decision recorded
- [ ] Rationale for rejection of alternatives documented
- [ ] Implementation plan created
- [ ] Review timeline established
- [ ] Related stakeholders informed

---

## Example Entry

```markdown
# Rationale: Selecting PostgreSQL over MongoDB

| Field | Description |
|-------|-------------|
| **Decision ID** | DEC-2024-002 |
| **Date** | 2024-02-10 |
| **Author** | Backend Lead |
| **Confidence Level** | 4/5 |
| **Complexity** | Medium |

## Reasoning Steps

### Step 1: Data Structure Requirements
**Observation**: Our domain requires complex joins and transactions
**Inference**: ACID compliance is critical
**Confidence**: 5/5

### Step 2: Team Expertise
**Observation**: Team has 3 senior PostgreSQL engineers, 1 MongoDB engineer
**Inference**: Faster onboarding and fewer bugs with PostgreSQL
**Confidence**: 4/5

### Final Conclusion
PostgreSQL is the optimal choice given our data requirements, team expertise, and the critical nature of transactional integrity in our system.
```

---

## Maintenance

- Update rationale when new evidence emerges
- Mark as "archived" when decision is reversed
- Link to reversal protocol if decision is overturned
