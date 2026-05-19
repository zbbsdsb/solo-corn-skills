# Problem-to-Skill Mapping Matrix

This document provides a systematic mapping between problem types and optimal skill selection for the Solo skill ecosystem.

## Problem Type Classification

### Category 1: Strategic & Analytical Problems

| Problem Type | Description | Primary Skill | Supporting Skills |
|--------------|-------------|---------------|-------------------|
| Market Analysis | Evaluating market size, trends, competition | `research-integration` | `marketing-growth` |
| Business Model Design | Creating or validating business models | `research-integration` | `product-builder` |
| Strategic Decision Making | Major strategic choices with long-term impact | `research-integration` | - |
| Competitive Positioning | Analyzing and improving market position | `research-integration` | `marketing-growth` |
| Risk Assessment | Evaluating project or business risks | `research-integration` | - |

**Decision Criteria:**
- If problem requires academic research or proven frameworks → Use `research-integration`
- If problem involves competitor analysis → Add `marketing-growth`
- If problem leads to product decisions → Add `product-builder`

### Category 2: Product Development Problems

| Problem Type | Description | Primary Skill | Supporting Skills |
|--------------|-------------|---------------|-------------------|
| Idea Validation | Validating a product concept | `product-builder` | `research-integration` |
| Feature Specification | Defining product features and requirements | `product-builder` | `research-integration` |
| Technical Architecture | System design and technical decisions | `product-builder` | `research-integration` |
| Code Generation | Implementing specific features | `product-builder` | - |
| Testing Strategy | Designing testing approach | `product-builder` | - |
| Deployment Planning | Planning deployment strategy | `product-builder` | - |
| UI/UX Design | Interface and experience design | `product-builder` | - |

**Decision Criteria:**
- If problem is about building something → Use `product-builder`
- If problem involves theoretical validation → Add `research-integration`
- If problem is pre-development research → Consider `research-integration` first

### Category 3: Marketing & Growth Problems

| Problem Type | Description | Primary Skill | Supporting Skills |
|--------------|-------------|---------------|-------------------|
| Customer Acquisition | Finding and converting customers | `marketing-growth` | `research-integration` |
| Content Strategy | Planning and creating marketing content | `marketing-growth` | - |
| Conversion Optimization | Improving conversion rates | `marketing-growth` | `research-integration` |
| Brand Building | Developing brand identity and positioning | `marketing-growth` | - |
| Growth Hacking | Implementing growth experiments | `marketing-growth` | `research-integration` |
| Analytics Setup | Setting up measurement and tracking | `marketing-growth` | - |
| Go-to-Market Strategy | Launching products to market | `marketing-growth` | `product-builder` |

**Decision Criteria:**
- If problem involves getting customers → Use `marketing-growth`
- If problem requires growth frameworks → Add `research-integration`
- If problem involves building landing pages → Add `product-builder`

### Category 4: Cross-Domain Problems

| Problem Type | Description | Primary Skill | Supporting Skills |
|--------------|-------------|---------------|-------------------|
| Full Product Launch | Building and marketing a complete product | `product-builder` + `marketing-growth` | `research-integration` |
| Business Strategy | Complete business planning from idea to market | `research-integration` | `product-builder`, `marketing-growth` |
| Organizational Design | Designing teams and processes | `research-integration` | - |
| Technology Selection | Choosing tech stack and tools | `research-integration` | `product-builder` |

**Decision Criteria:**
- If problem spans multiple categories → Use multiple skills in sequence or parallel
- If problem has clear phase boundaries → Use skills sequentially
- If problem has independent subtasks → Use skills in parallel

## Skill Selection Decision Tree

```
START: User Request Analysis
│
├─ Is this about understanding concepts or making decisions?
│   ├─ YES → Go to DECISION node
│   └─ NO → Continue
│
├─ Is this about building or implementing something?
│   ├─ YES → Use `product-builder`
│   └─ NO → Continue
│
├─ Is this about marketing or acquiring customers?
│   ├─ YES → Use `marketing-growth`
│   └─ NO → Continue
│
└─ Is this a complex, multi-faceted problem?
    ├─ YES → Consider multiple skills
    └─ NO → Default to single skill based on primary focus

DECISION: Type of Decision Needed
│
├─ Strategic/Analytical
│   ├─ Market Analysis → `research-integration`
│   ├─ Business Model → `research-integration` → `product-builder`
│   └─ Risk Evaluation → `research-integration`
│
├─ Product-Related
│   ├─ Feature Decision → `research-integration` → `product-builder`
│   └─ Technical Decision → `research-integration` + `product-builder`
│
└─ Growth-Related
    ├─ Channel Selection → `research-integration` → `marketing-growth`
    └─ Growth Strategy → `research-integration` → `marketing-growth`
```

## Quick Reference Matrix

| User Intent Keywords | Primary Skill | Confidence Level |
|---------------------|---------------|------------------|
| "how to decide", "should I", "which approach" | `research-integration` | High |
| "build", "create", "develop", "implement" | `product-builder` | High |
| "market", "customers", "growth", "acquire" | `marketing-growth` | High |
| "validate idea", "business plan", "startup" | `research-integration` + `product-builder` | High |
| "launch", "go-to-market", "product launch" | `product-builder` + `marketing-growth` | High |
| "strategy", "framework", "analysis" | `research-integration` | High |
| "marketing plan", "content", "ads" | `marketing-growth` | High |
| "code", "frontend", "backend", "database" | `product-builder` | High |
| "conversion", "landing page", "funnel" | `marketing-growth` + `product-builder` | Medium |

## Skill Coverage Heatmap

```
                    research-integration  product-builder  marketing-growth

Strategic Problems      ████████████          ███             ███
  - Decision Making     ████████████          ███             ██
  - Market Analysis     ████████████          ██              ████
  - Risk Assessment     ████████████          ██              ██

Product Problems        ██████                ████████████     ███
  - Idea Validation     ████████              ████████████     ██
  - Code Generation     ██                    ████████████     █
  - Testing             ██                    ████████████     █
  - Deployment          ██                    ████████████     █

Marketing Problems      ████                   ███              ████████████
  - Customer Acquisition████                  ███              ████████████
  - Content Creation    ███                    ██              ████████████
  - Conversion Opt.     █████                  █████           ████████████
  - Brand Building      ████                   ██              ████████████

Legend: ██ = Low coverage/utility, ████ = Medium, ████████ = High, ████████████ = Primary
```

## Edge Cases and Overrides

### When to Override Default Mapping

1. **Experience Level Override**
   - Beginners: Prefer `research-integration` first for learning frameworks
   - Experienced: Can jump directly to specialized skills

2. **Time Constraint Override**
   - Limited time: Use single primary skill
   - Ample time: Consider full skill combinations

3. **Complexity Override**
   - Simple task: Single skill
   - Complex task: Multiple skills with clear sequencing

4. **Iteration Override**
   - First iteration: Start with `research-integration`
   - Subsequent iterations: Use specialized skills

## Skill Transition Points

| From Skill | To Skill | Transition Trigger |
|-----------|----------|-------------------|
| `research-integration` | `product-builder` | When ready to implement validated ideas |
| `research-integration` | `marketing-growth` | When ready to market validated concepts |
| `product-builder` | `marketing-growth` | When product is ready for launch |
| `marketing-growth` | `product-builder` | When feedback requires product changes |
| `marketing-growth` | `research-integration` | When needing strategic guidance for growth |

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-19  
**Skill Ecosystem Version:** 1.0
