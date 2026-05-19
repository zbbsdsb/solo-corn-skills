# Effort vs Value Analysis

## ROI Calculation Framework

### Basic ROI Formula

```
ROI = (Net Value - Cost) / Cost × 100%

Where:
- Net Value = Expected Benefits - Ongoing Costs
- Cost = Development + Maintenance + Operations
```

### ROI Calculation Template

| Item | Value | Notes |
|------|-------|-------|
| **Development Cost** | $X | One-time |
| **Maintenance Cost (Year 1)** | $Y | Ongoing |
| **Operations Cost (Year 1)** | $Z | Hosting, services |
| **Total Year 1 Cost** | $X + $Y + $Z | |
| **Expected Revenue Impact** | $A | New revenue or savings |
| **Expected Efficiency Gain** | $B | Time saved × hourly rate |
| **Expected Risk Reduction** | $C | Avoided costs |
| **Total Year 1 Value** | $A + $B + $C | |
| **ROI (Year 1)** | (Value - Cost) / Cost | Should be >0 for positive ROI |
| **Break-even Point** | Months to recover cost | |

### ROI Examples

**Example 1: Payment Integration**
```
Investment:
- Development: 40 hours × $100 = $4,000
- Year 1 Maintenance: $500
- Payment Processing Fees: 2.9% + $0.30 per transaction

Expected:
- New customers: 50/month
- Average transaction: $100
- Additional revenue: 50 × $100 × 12 = $60,000
- Additional fees: $60,000 × 0.029 + (50 × 12 × $0.30) = $2,040

ROI = ($60,000 - $4,000 - $500 - $2,040) / ($4,000 + $500 + $2,040) × 100%
    = $53,460 / $6,540 × 100%
    = 818% ROI
```

**Example 2: Analytics Dashboard**
```
Investment:
- Development: 80 hours × $100 = $8,000
- Year 1 Maintenance: $1,000
- Tool Cost: $2,400/year

Expected:
- Manual reporting hours saved: 10 hours/week × 50 weeks = 500 hours
- Hourly rate equivalent: $100/hour
- Efficiency Value: $50,000
- Better decisions value: Estimated $20,000

ROI = ($50,000 + $20,000 - $8,000 - $1,000 - $2,400) / ($8,000 + $1,000 + $2,400) × 100%
    = $58,600 / $11,400 × 100%
    = 514% ROI
```

## Value Priority Matrix

### The 2×2 Framework

```
                    HIGH EFFORT
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
    │   QUICK WINS       │   STRATEGIC        │
    │   (Do First)       │   PROJECTS         │
    │                    │                    │
HIGH│   Low cost,        │   High cost,       │
VAL │   high value      │   high value       │
UE  │                    │                    │
    │   Example:        │   Example:         │
    │   - Fix UX bugs   │   - Platform       │
    │   - Add tracking  │     rebuild        │
    │   - Automate       │   - New market     │
    │     manual task    │     entry          │
    │                    │                    │
    ├────────────────────┼────────────────────┤
    │                    │                    │
    │   THANKLESS        │   MAJOR RISKS      │
    │   TASKS            │   (Avoid)          │
    │   (Minimize)       │                    │
    │                    │                    │
LOW │   Low cost,        │   High cost,       │
VAL │   low value        │   low value        │
UE  │                    │                    │
    │   Example:        │   Example:         │
    │   - Minor polish  │   - Pet projects   │
    │   - Nice-to-have  │   - Tech debt for  │
    │     features      │     no reason      │
    │                    │                    │
    └────────────────────┴────────────────────┘
                         │
                    LOW EFFORT

Priority Order: Quick Wins > Strategic > Avoid Major Risks > Minimize Thankless
```

### Scoring Value Dimensions

| Dimension | Weight | Scoring Criteria |
|-----------|--------|-------------------|
| **Business Impact** | 30% | Revenue, conversion, retention |
| **User Value** | 25% | Task completion, satisfaction |
| **Strategic Value** | 20% | Competitive advantage, positioning |
| **Risk Reduction** | 15% | Technical debt, security |
| **Learning Value** | 10% | Knowledge, capabilities gained |

### Value Score Calculation

```
Value Score = Σ(Dimension Score × Weight) / Σ(Weights)

Example:
- Business Impact: 4 × 0.30 = 1.20
- User Value: 5 × 0.25 = 1.25
- Strategic Value: 3 × 0.20 = 0.60
- Risk Reduction: 4 × 0.15 = 0.60
- Learning Value: 3 × 0.10 = 0.30

Total Value Score = 3.95 / 1.00 = 3.95 (out of 5)
```

## Quick Wins Identification

### Quick Win Criteria

**Effort < 1 day AND Value > Medium**

| Signal | Examples |
|--------|----------|
| "Just need to..." | Add a config, flip a flag |
| "This should be..." | Simple formula, single query |
| "Could we try..." | A/B test, quick experiment |
| "We've been meaning to..." | Long-standing minor issue |
| "Users keep asking for..." | Repeatable request |

### Quick Win Examples

| Quick Win | Effort | Value | Action |
|-----------|--------|-------|--------|
| Add usage tooltips | 2 hours | High conversion | Do now |
| Fix broken images | 1 hour | UX improvement | Do now |
| Improve error messages | 3 hours | Support reduction | Do now |
| Add keyboard shortcuts | 4 hours | Power user love | Do now |
| Speed up page load | 1 day | SEO, conversion | Do this week |

### Quick Win Pipeline

```
Backlog → Quick Win Filter → Priority Queue

Filter Questions:
1. Can this be done in <1 day?
2. Will users notice/care?
3. Is this blocking anything?
4. Can this wait 2 weeks?

If all YES → Immediate priority
If mostly YES → This sprint
If NO to Q1 → Normal estimation
If NO to Q2-4 → Deprioritize
```

## Strategic Value Assessment

### Value Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Revenue** | Direct money impact | New features, pricing |
| **Cost Reduction** | Efficiency gains | Automation, tooling |
| **Risk Mitigation** | Avoid future problems | Security, compliance |
| **Competitive** | Market positioning | Differentiators |
| **Platform** | Foundation for future | Infrastructure, APIs |
| **Learning** | Knowledge development | Research, experiments |

### Impact Timeline

```
                    │
High ───┼──────────────────────────────────────────────
Impact │   Platform      Strategic     Core Feature
       │   Migration     Initiative    (Revenue)
       │
       ├──────────────────────────────────────────────
Medium │   Tooling       Analytics     UX Improvement
Impact │   Setup         Dashboard     (Satisfaction)
       │
       ├──────────────────────────────────────────────
Low ───┼──────────────────────────────────────────────
Impact │   Docs Update   Debug Tools   Bug Fix
       │
       └──────────────────────────────────────────────
              6mo+           3-6mo        0-3mo
                        Time to Impact
```

## Prioritization Frameworks

### RICE Score

```
RICE = (Reach × Impact × Confidence) / Effort

Where:
- Reach: Users affected per quarter (1-1000)
- Impact: Effect on metric (3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
- Confidence: % certainty on estimates (100%=high, 80%=medium, 50%=low)
- Effort: Person-months required

Higher RICE = Higher priority
```

### MoSCoW Method

| Priority | Definition | Typical Allocation |
|----------|------------|-------------------|
| **Must Have** | Core functionality | 60% of resources |
| **Should Have** | Important but not critical | 20% of resources |
| **Could Have** | Nice to have | 15% of resources |
| **Won't Have** | Out of scope | 5% of resources |

### Weighted Shortest Job First (WSJF)

```
WSJF = User Business Value / Job Size

Prioritize highest WSJF ratio first.

Break down work:
- User Value: Time criticality + Risk reduction + Job size reduction
- Job Size: Duration × Complexity
```

## Value Communication

### For Stakeholders

**Template**:
```
Feature: [Name]
Effort: [X days/weeks]
Investment: $[Cost]

Value Delivered:
- Revenue: $[Amount] (if applicable)
- Cost Savings: $[Amount/year]
- Risk Reduction: [Description]
- Strategic Value: [Description]

ROI: [X]%
Break-even: [X] months

Recommendation: [Priority] because [1-sentence rationale]
```

### For Team

**Template**:
```
Task: [Name]
Size: [XS/S/M/L/XL/XXL]
Value: [User/Business/Technical]

Why this matters:
- Users will [benefit]
- We will [improve]

Dependencies:
- [List external dependencies]

Definition of Done:
- [ ] [Requirement]
- [ ] [Requirement]
```

## Decision Checklist

Before committing to work:

- [ ] Estimated effort documented
- [ ] Value proposition clear
- [ ] ROI calculated (if applicable)
- [ ] Risks identified
- [ ] Dependencies confirmed
- [ ] Priority compared to alternatives
- [ ] Stakeholder alignment obtained
- [ ] Capacity available

## Next Steps

1. Score each item in backlog by value
2. Estimate effort using complexity guide
3. Plot on 2×2 matrix
4. Identify quick wins
5. Prioritize by RICE/WSJF
6. Present recommendations with rationale
