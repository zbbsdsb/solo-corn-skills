# Skill Output Compatibility Analysis

This document analyzes how outputs from one skill can be passed as inputs to other skills, including data format specifications, conversion guidelines, and integration testing protocols.

## Output Types Overview

### research-integration Outputs

| Output Type | Format | Description |
|-------------|--------|-------------|
| Strategic Insights | Markdown | Structured analysis with recommendations |
| Mental Models | Markdown | Framework documentation with application guides |
| Research Summaries | Markdown | Synthesized findings from multiple sources |
| Decision Frameworks | Markdown | Structured decision trees and matrices |
| Validation Results | Markdown | Assessment of ideas against criteria |

### product-builder Outputs

| Output Type | Format | Description |
|-------------|--------|-------------|
| Product Specifications | Markdown (PRD) | Detailed feature requirements |
| Code Components | Source files | React, Node, Python, etc. |
| Database Schemas | SQL/Markdown | Table definitions and relationships |
| API Specifications | Markdown/OpenAPI | Endpoint definitions |
| Test Suites | Source files | Unit, integration, E2E tests |
| Deployment Configs | YAML/JSON | CI/CD, Docker, infrastructure |
| Documentation | Markdown | READMEs, API docs, guides |

### marketing-growth Outputs

| Output Type | Format | Description |
|-------------|--------|-------------|
| Strategy Documents | Markdown | Comprehensive marketing plans |
| Content Templates | Markdown | Blog posts, social media, emails |
| Campaign Briefs | Markdown | Creative briefs, ad specifications |
| Analytics Setup | Markdown | KPI definitions, tracking specs |
| Landing Page Specs | Markdown | Page structure and copy requirements |
| Channel Plans | Markdown | Platform-specific strategies |

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        OUTPUT FLOW DIAGRAM                               │
└─────────────────────────────────────────────────────────────────────────┘

research-integration                    product-builder
┌─────────────────┐                    ┌─────────────────┐
│                 │                    │                 │
│ Strategic Plans │ ─────────────────► │ Product Specs   │
│ Mental Models   │ ─────────────────► │ Feature Priority│
│ Market Insights │ ─────────────────► │ Technical Design│
│ Risk Assessments│ ─────────────────► │ Requirements    │
│                 │                    │                 │
└─────────────────┘                    └────────┬────────┘
                                                 │
                                                 ▼
                                        ┌─────────────────┐
                                        │                 │
                                        │ Built Product   │
                                        │ Code Components │
                                        │ Deployed System │
                                        │                 │
                                        └────────┬────────┘
                                                 │
                              ┌──────────────────┼──────────────────┐
                              │                  │                  │
                              ▼                  ▼                  ▼
                    ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
                    │                 │ │                 │ │                 │
                    │marketing-growth │ │marketing-growth │ │marketing-growth │
                    │                 │ │                 │ │                 │
                    │ Campaign Plans │ │ Content Calendar│ │ Analytics Setup │
                    │ Landing Pages   │ │ Social Strategy │ │ Conversion Opt. │
                    │                 │ │                 │ │                 │
                    └─────────────────┘ └─────────────────┘ └─────────────────┘
```

---

## Input Requirements Matrix

### product-builder Input Requirements

| Input Source | Required | Format | Purpose |
|--------------|----------|--------|---------|
| Validated concept | Recommended | Markdown text | Ensures alignment |
| Target user definition | Optional | Markdown text | User story basis |
| Success criteria | Optional | Markdown text | Acceptance criteria |
| Technology constraints | Optional | Markdown text | Tech stack guidance |

**Minimum Input:** Any idea or requirement statement

**Optimal Input Format:**
```markdown
# Product Concept

## Problem Being Solved
[Description of problem]

## Target Users
[Who will use this]

## Core Value Proposition
[What unique value is provided]

## Success Criteria
[How success will be measured]

## Known Constraints
[Any known limitations]
```

### marketing-growth Input Requirements

| Input Source | Required | Format | Purpose |
|--------------|----------|--------|---------|
| Product/service definition | Recommended | Markdown text | Messaging basis |
| Value proposition | Recommended | Markdown text | Copy development |
| Target audience | Optional | Markdown text | Segmentation |
| Feature list | Optional | Markdown/list | Content alignment |
| Deployed product URL | For launch | URL | Testing and linking |

**Minimum Input:** Any product or service concept

**Optimal Input Format:**
```markdown
# Marketing Input

## Product/Service
[What is being marketed]

## Value Proposition
[Core benefit statement]

## Target Audience
[Who this is for]

## Key Features
[Main capabilities]

## Current Status
[Development stage, launch date, etc.]

## Available Assets
[Any existing materials]
```

---

## Format Conversion Guides

### research-integration → product-builder

**Conversion: Strategic Insight → Product Requirement**

```markdown
# Format Conversion Template

## Original (Research Integration Output)
[Strategic insight or framework output]

## Converted (Product Builder Input)

### Strategic Context
[How this insight informs product direction]

### User Impact
[What user problem this addresses]

### Feature Implication
[What capabilities this suggests]

### Success Metric
[How to measure alignment with insight]

### Priority
[Based on strategic importance]
```

**Example:**
```markdown
## Research Output
"Users need to collaborate on documents in real-time"

## Product Builder Input

### Strategic Context
Real-time collaboration is key differentiator based on market analysis

### User Impact
Users currently face friction with async document sharing

### Feature Implication
- WebSocket integration for real-time sync
- Presence indicators
- Conflict resolution for simultaneous edits

### Success Metric
Time-to-collaborate < 30 seconds

### Priority
Core feature (P0)
```

### product-builder → marketing-growth

**Conversion: Feature List → Content Strategy**

```markdown
# Format Conversion Template

## Original (Product Builder Output)
[Feature specifications or deployed capabilities]

## Converted (Marketing Growth Input)

### Feature-to-Benefit Translation
[What user gains from each feature]

### Content Angle
[How to communicate each benefit]

### Customer Quote (Ideal)
[What customer would say]

### Use Case
[Real-world application]

### Competitive Differentiator
[Why this matters vs alternatives]
```

**Example:**
```markdown
## Product Output
User authentication with social login (Google, GitHub)

## Marketing Input

### Feature-to-Benefit Translation
- Social login → Sign up in 1 click
- Multiple providers → User choice
- Secure OAuth → Trust and safety

### Content Angle
"Get started in seconds, not minutes"

### Customer Quote
"I love that I can sign up with my existing Google account"

### Use Case
Developer evaluates tool, wants quick trial without new account

### Competitive Differentiator
Competitors require email verification; we offer instant access
```

### research-integration → marketing-growth

**Conversion: Market Insight → Marketing Strategy**

```markdown
# Format Conversion Template

## Original (Research Integration Output)
[Market analysis or competitive research]

## Converted (Marketing Growth Input)

### Strategic Implication
[What this means for positioning]

### Messaging Direction
[How to communicate based on insight]

### Channel Selection
[Where to reach based on findings]

### Content Themes
[Topics to address]

### Competitive Message
[How to differentiate based on market position]
```

---

## Integration Points

### Point 1: Validation → Specification

**Connection:** research-integration → product-builder

**Data Passed:**
- Validated market opportunity
- Competitive analysis findings
- Strategic framework decisions
- Risk assessment results

**Passing Mechanism:**
```markdown
# Validation Summary

## Market Opportunity
[Size, trends, timing]

## Competitive Landscape
[Key competitors, gaps identified]

## Strategic Decision
[Chosen approach with rationale]

## Key Risks
[And mitigation strategies]

## Recommendations
[Prioritized feature suggestions]

---
This validated analysis serves as input for product specification.
```

**Compatibility Score:** 10/10 (native compatibility)

### Point 2: Specification → Implementation

**Connection:** product-builder internal phase transition

**Data Passed:**
- PRD document
- User stories
- Wireframes/designs
- Technical requirements

**Passing Mechanism:** Internal to skill, no external format needed

**Compatibility Score:** 10/10 (same skill)

### Point 3: Implementation → Launch

**Connection:** product-builder → marketing-growth

**Data Passed:**
- Deployed product URL
- Feature documentation
- User flows
- Technical capabilities

**Passing Mechanism:**
```markdown
# Product Launch Package

## Product URL
[Live deployment URL]

## Key Features
1. [Feature 1] - [Brief description]
2. [Feature 2] - [Brief description]
3. [Feature 3] - [Brief description]

## User Flows
[Link to documented flows]

## Technical Capabilities
[API endpoints, integrations, limits]

## Support Contact
[How to get help]

---
This package provides marketing team with everything needed for launch.
```

**Compatibility Score:** 9/10 (minor format adaptation needed)

### Point 4: Feedback → Iteration

**Connection:** marketing-growth → product-builder/research-integration

**Data Passed:**
- Customer feedback
- Conversion metrics
- Usage analytics
- Market response

**Passing Mechanism:**
```markdown
# Iteration Feedback Report

## Customer Feedback
[Key themes from user input]

## Metrics Summary
- Conversion rate: [X%]
- Activation rate: [X%]
- Key drop-off points: [locations]

## Market Response
[How target audience is responding]

## Recommendations
[Based on data analysis]

## Priority Changes
[Suggested feature adjustments]

---
This feedback informs next iteration priorities.
```

**Compatibility Score:** 8/10 (interpretation required)

---

## Data Format Specifications

### Standard Document Structure

**Strategic Document (research-integration)**
```markdown
# Title

## Summary
[1-2 sentence overview]

## Key Findings
- [Finding 1]
- [Finding 2]
- [Finding 3]

## Analysis
[Detailed reasoning]

## Recommendations
[Actionable suggestions]

## Next Steps
[Follow-up actions]
```

**Specification Document (product-builder)**
```markdown
# Title

## Overview
[What this is]

## Requirements
### User Stories
[Who, what, why format]

### Functional Requirements
[List of features]

### Non-Functional Requirements
[Performance, security, etc.]

## Acceptance Criteria
[How to verify completion]

## Technical Notes
[Implementation guidance]
```

**Marketing Document (marketing-growth)**
```markdown
# Title

## Objective
[What this aims to achieve]

## Target Audience
[Who this is for]

## Key Messages
[Core communications]

## Channels
[Where to execute]

## Timeline
[When to execute]

## Success Metrics
[How to measure]
```

---

## Integration Test Checklist

### Test 1: Research → Build Integration

- [ ] Research outputs are documented in standard format
- [ ] Key insights are extractable from research documents
- [ ] Validation criteria are clear and testable
- [ ] Strategic recommendations are actionable
- [ ] Market data is current and verifiable
- [ ] Research findings inform specific product decisions

**Pass Criteria:** All items checked, integration point smooth

### Test 2: Build → Market Integration

- [ ] Product is deployed and accessible
- [ ] Feature documentation is complete
- [ ] Value proposition is clearly articulable
- [ ] Technical capabilities are documented
- [ ] Support channels are established
- [ ] Analytics are configured

**Pass Criteria:** Marketing team can execute launch without development input

### Test 3: Market → Iteration Integration

- [ ] Feedback collection mechanism exists
- [ ] Metrics are defined and tracked
- [ ] Feedback is synthesized into insights
- [ ] Insights inform product decisions
- [ ] Iteration priorities are documented

**Pass Criteria:** Closed feedback loop functions effectively

### Test 4: End-to-End Integration

- [ ] Research validates product direction
- [ ] Product implements validated requirements
- [ ] Marketing launches product effectively
- [ ] Feedback informs next iteration
- [ ] Cycle repeats with improvements

**Pass Criteria:** Full lifecycle functions without major friction

---

## Compatibility Testing Protocol

### Test Scenario 1: Full Launch

```
Objective: Verify complete output flow from research to market

Steps:
1. Generate research insights on a sample product
2. Pass insights to product builder
3. Generate product specification
4. Implement basic product
5. Pass product details to marketing
6. Generate launch plan
7. Verify outputs are coherent and actionable

Expected Result: Smooth handoff at each stage

Pass Threshold: 90% of outputs compatible without rework
```

### Test Scenario 2: Parallel Execution

```
Objective: Verify parallel skill execution compatibility

Steps:
1. Define shared context requirements
2. Execute research-integration and marketing-growth in parallel
3. Combine outputs
4. Verify consistency
5. Pass combined insights to product-builder

Expected Result: Parallel outputs are compatible and complementary

Pass Threshold: No conflicts requiring rework
```

### Test Scenario 3: Iteration Cycle

```
Objective: Verify feedback loop compatibility

Steps:
1. Complete initial research → build → market cycle
2. Generate sample marketing feedback
3. Pass feedback to research for analysis
4. Pass analysis to product builder for updates
5. Verify updates address feedback

Expected Result: Feedback is actionable and addressed

Pass Threshold: 80% of feedback results in actionable changes
```

---

## Error Handling

### Common Compatibility Issues

| Issue | Cause | Resolution |
|-------|-------|------------|
| Format mismatch | Skills use different templates | Use conversion guides |
| Missing context | Key information not passed | Add context documentation |
| Outdated data | Stale inputs provided | Verify data freshness |
| Scope creep | Outputs exceed next skill needs | Define clear boundaries |
| Assumption gaps | Unstated requirements | Add requirement checklist |

### Error Recovery Procedures

**Issue: Incompatible Format**
```
1. Identify source format
2. Identify target requirements
3. Apply conversion guide
4. Verify converted format
5. Document for future reference
```

**Issue: Missing Information**
```
1. Identify gap in passed data
2. Request clarification from source skill
3. Re-execute source if needed
4. Update handoff documentation
```

**Issue: Conflicting Outputs**
```
1. Document conflicting elements
2. Prioritize based on strategic alignment
3. Choose path with highest confidence
4. Note resolution for future learning
```

---

## Best Practices

### For Successful Integration

1. **Document at Boundaries**: Always create summary documents at skill transition points
2. **Verify Before Passing**: Check that outputs meet next skill's input requirements
3. **Maintain Context**: Keep strategic context alongside tactical details
4. **Version Outputs**: Track which iteration of output is being passed
5. **Feedback Loops**: Close the loop between end outputs and initial inputs

### Anti-Patterns to Avoid

1. **Information Loss**: Don't strip context when passing between skills
2. **Assumption Inheritance**: Don't assume next skill knows your context
3. **Format Lock-in**: Don't require exact format matches
4. **Handoff Gaps**: Don't leave periods of no communication between skills
5. **Feedback Neglect**: Don't skip feedback collection and integration

---

## Quality Metrics

### Integration Quality Indicators

| Metric | Target | Measurement |
|--------|--------|-------------|
| Handoff success rate | >95% | Smooth transitions without rework |
| Context preservation | >90% | Key information retained |
| Format adaptation time | <15 min | Time to convert formats |
| Error rate | <5% | Issues requiring intervention |
| Iteration velocity | Improving | Cycle time over multiple iterations |

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-19  
**Compatibility Model Version:** 1.0
