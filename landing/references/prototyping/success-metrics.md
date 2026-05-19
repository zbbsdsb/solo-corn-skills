# Success Metrics Definition Template

This template provides a structured approach to defining, measuring, and tracking success metrics for prototype validation. Use this guide to establish clear criteria for evaluating prototype success.

## Overview

```
┌────────────────────────────────────────────────────────────────────┐
│                    METRICS FRAMEWORK                                │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                         WHY METRICS                                 │
│  - Validate assumptions                                             │
│  - Measure progress                                                │
│  - Make data-driven decisions                                       │
│  - Align team on success criteria                                   │
└────────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│                    METRICS HIERARCHY                                │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────┐      │
│   │                    BUSINESS METRICS                      │      │
│   │         (Revenue, Users, Conversion, Retention)         │      │
│   └─────────────────────────────────────────────────────────┘      │
│                              │                                     │
│                              ▼                                     │
│   ┌─────────────────────────────────────────────────────────┐      │
│   │                   PRODUCT METRICS                       │      │
│   │        (Engagement, Satisfaction, Adoption)            │      │
│   └─────────────────────────────────────────────────────────┘      │
│                              │                                     │
│                              ▼                                     │
│   ┌─────────────────────────────────────────────────────────┐      │
│   │                  PROTOTYPE METRICS                      │      │
│   │         (Usability, Completion Rate, Errors)          │      │
│   └─────────────────────────────────────────────────────────┘      │
└────────────────────────────────────────────────────────────────────┘
```

---

## 1. Metrics Hierarchy

### Level 1: Business Metrics (Strategic)

These metrics connect prototype validation to business outcomes.

| Metric | Definition | Target | Measurement |
|--------|------------|--------|-------------|
| **Conversion Rate** | % of users who complete desired action | TBD | Track from prototype to production |
| **User Acquisition** | New users gained | TBD | A/B testing results |
| **Revenue Impact** | Estimated revenue effect | TBD | Financial modeling |
| **Cost Savings** | Reduced development waste | TBD | Time/money saved |

### Level 2: Product Metrics (Tactical)

These metrics evaluate how well the product meets user needs.

| Metric | Definition | Target | Measurement |
|--------|------------|--------|-------------|
| **Task Success Rate** | % of tasks completed successfully | ≥85% | User testing |
| **User Satisfaction** | NPS/CSAT scores | ≥8/10 | Surveys |
| **Feature Adoption** | % using new feature | ≥40% | Analytics |
| **Retention** | Users returning to feature | ≥60% | Cohort analysis |
| **Error Rate** | Errors per session | ≤5% | Logging |

### Level 3: Prototype Metrics (Operational)

These metrics validate the prototype itself.

| Metric | Definition | Target | Measurement |
|--------|------------|--------|-------------|
| **Time to Task** | Time to complete specific task | Varies | Timed testing |
| **Error Frequency** | Errors encountered | ≤3 per task | Observation |
| **Completion Rate** | % finishing the flow | ≥90% | User testing |
| **Learnability** | Time for new users to learn | ≤5 min | Training tests |
| **Efficiency** | Optimal vs. actual actions | ≤110% | Path analysis |

---

## 2. Measurement Methods

### 2.1 Quantitative Methods

#### A/B Testing Template

```markdown
## A/B Test Definition: [Feature Name]

### Hypothesis
[Clear statement of expected outcome]

### Variant A (Control)
- [Description of current/proposed approach]

### Variant B (Treatment)
- [Description of alternative approach]

### Success Metrics

| Metric | Minimum Detectable Effect | Statistical Power |
|--------|---------------------------|-------------------|
| Conversion Rate | 5% relative | 80% |
| Revenue per User | $0.50 | 80% |

### Sample Size
- Required: [X] per variant
- Duration: [Y] days
- Daily Traffic: [Z] users

### Implementation

| Item | Status |
|------|--------|
| Tracking plan | [ ] |
| Variant live | [ ] |
| Data collection | [ ] |
| Analysis | [ ] |

### Results

| Metric | Variant A | Variant B | p-value | Significant? |
|--------|-----------|----------|---------|-------------|
| Conversion | [%] | [%] | [x.xx] | [Yes/No] |
| Revenue | [$] | [$] | [x.xx] | [Yes/No] |

### Decision
- [ ] Ship Variant B
- [ ] Ship Variant A
- [ ] Need more data
- [ ] Iterate on design
```

#### Analytics Setup Template

```markdown
## Analytics Tracking Plan: [Page/Feature]

### Events to Track

| Event Name | Trigger | Properties |
|------------|---------|------------|
| page_view | Page loads | page_name, referrer |
| button_click | Button pressed | button_id, button_text |
| form_start | First input | form_id, field_name |
| form_submit | Form submitted | form_id, success, time_spent |
| error_shown | Error displayed | error_type, error_message |

### Funnels

```
START → [Step 1] → [Step 2] → [Step 3] → CONVERSION
         ↓           ↓          ↓
      [Drop 1]   [Drop 2]   [Drop 3]
```

### Dashboards
- [ ] Real-time monitoring
- [ ] Daily summary
- [ ] Weekly analysis
- [ ] Anomaly alerts
```

### 2.2 Qualitative Methods

#### User Testing Protocol

```markdown
## User Testing Script: [Feature Name]

### Participants
- Number: [X] users
- Profile: [Target user type]
- Recruitment: [Source]

### Tasks

| Task # | Task Description | Success Criteria |
|--------|------------------|------------------|
| 1 | [Task] | [What constitutes success] |
| 2 | [Task] | [What constitutes success] |
| 3 | [Task] | [What constitutes success] |

### Moderator Guide

#### Introduction (2 min)
"Thank you for participating. We're testing [feature], not testing you. 
There are no right or wrong answers."

#### Task Instructions
"For the next task, please [specific instructions]"

#### Think Aloud Prompt
"As you use this, please say out loud what you're thinking and doing."

#### Observation Notes
| User | Task 1 | Task 2 | Task 3 |
|------|--------|--------|--------|
| P1 | [Notes] | [Notes] | [Notes] |
| P2 | [Notes] | [Notes] | [Notes] |

### Exit Questions
1. What was the hardest part?
2. What did you expect that wasn't there?
3. What would make this better?
4. How likely are you to use this? (1-10)

### Synthesis

#### Themes Identified
1. [Theme 1]
2. [Theme 2]
3. [Theme 3]

#### Severity Ratings
| Issue | Severity | Frequency | Recommendation |
|-------|----------|-----------|---------------|
| [Issue] | Critical/Major/Minor | [X]/[N] | [Fix] |
```

#### Interview Questions Template

```markdown
## User Interview Guide: [Topic]

### Opening (2 min)
- Thank participant
- Explain purpose (20 min, product feedback)
- Confirm permission to record

### Background (5 min)
1. Tell me about your role and what you do day-to-day.
2. What tools or processes do you use for [related task]?
3. What challenges do you face with [problem area]?

### Deep Dive (10 min)
4. Walk me through the last time you [completed target task].
5. What worked well? What was frustrating?
6. If you could change one thing, what would it be?
7. Show me how you would approach [specific scenario].

### Prototype/Solution (5 min)
8. What are your first impressions?
9. Walk me through how you would complete [task].
10. What surprised you?
11. How does this compare to your current approach?

### Wrap Up (3 min)
12. What would make this solution valuable to you?
13. Any other feedback or questions?

### Interview Notes

| Participant | Key Insights | Quotes | Opportunities |
|-------------|--------------|--------|---------------|
| P1 | [Insights] | "[Quote]" | [Opportunities] |
```

---

## 3. Baseline and Target Setting

### 3.1 Baseline Template

```markdown
## Baseline Metrics: [Feature Name]

### Collection Period
- Start Date: [Date]
- End Date: [Date]
- Data Source: [Source]

### Current State Metrics

| Metric | Current Value | Trend | Confidence |
|--------|---------------|-------|------------|
| [Metric 1] | [Value] | [Increasing/Decreasing/Flat] | High/Medium/Low |
| [Metric 2] | [Value] | [Trend] | [Confidence] |

### Comparison Points
- vs. Industry benchmark: [Comparison]
- vs. Similar features: [Comparison]
- vs. Historical data: [Comparison]

### Context
- Seasonality: [Factor]
- External factors: [Factors]
- Known issues: [Issues]

### Baseline Confidence
- [ ] High confidence: Consistent data over 30+ days
- [ ] Medium confidence: 7-30 days data
- [ ] Low confidence: <7 days data, extrapolation used

### Recommendations
Based on baseline, recommend:
- [ ] Set targets relative to baseline
- [ ] Improve baseline measurement first
- [ ] Use industry benchmarks
```

### 3.2 Target Setting Template

```markdown
## Target Definition: [Metric Name]

### Metric Definition
- **Formula**: [Calculation method]
- **Unit**: [Percentage/Count/Duration/etc.]
- **Direction**: Higher is better / Lower is better

### Current State
- Value: [X]
- Source: [Analytics/Research/etc.]
- Date: [Date]

### Target Options

| Target Level | Value | Rationale |
|--------------|-------|-----------|
| Conservative | [+X%] | Minimal change, low risk |
| Expected | [+Y%] | Based on historical data |
| Stretch | [+Z%] | Ambitious but achievable |

### Selected Target
**Target**: [Value]
**Rationale**: [Why this target was chosen]

### Time to Target
- 1 Month: [Milestone]
- 3 Months: [Milestone]
- 6 Months: [Milestone]
- 12 Months: [Final Target]

### Measurement Plan
| Checkpoint | Date | Review Criteria |
|------------|------|------------------|
| Review 1 | [Date] | On track / Adjust target |
| Review 2 | [Date] | On track / Adjust target |
| Final | [Date] | Achieved / Not achieved |

### Dependencies
- [Dependency 1]
- [Dependency 2]

### Risks to Achievement
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk] | High/Med/Low | High/Med/Low | [Plan] |
```

---

## 4. Metrics Dashboard Template

### 4.1 Executive Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  PROTOTYPE VALIDATION DASHBOARD                                              │
│  [Feature Name] - [Iteration X] - Updated: [Date]                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OVERALL HEALTH                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐                  │
│  │    ●●●○○      │  │    ●●●●○      │  │    ●●○○○      │                  │
│  │  进度 Progress │  │   质量 Quality │  │   用户 User   │                  │
│  │    65%        │  │    80%        │  │    45%        │                  │
│  └───────────────┘  └───────────────┘  └───────────────┘                  │
│                                                                             │
│  KEY METRICS                                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │ Metric          │ Current │ Target │ Status │ Trend               │    │
│  ├─────────────────────────────────────────────────────────────────────┤    │
│  │ Task Success    │ 82%     │ 90%    │ ●●○○○ │ ↗️ Improving        │    │
│  │ Time to Task    │ 4.2min  │ 3min   │ ●○○○○ │ → Stable           │    │
│  │ Error Rate      │ 8%      │ <5%    │ ●●○○○ │ ↘️ Declining        │    │
│  │ User Rating     │ 7.2/10  │ 8/10   │ ●●●○○ │ ↗️ Improving        │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│  MILESTONE STATUS                                                           │
│  ───────────────────────────────────────────────────────────────────────    │
│  [●] Phase 1: User Research    (Complete)                                  │
│  [●] Phase 2: Prototype        (Complete)                                  │
│  [◐] Phase 3: Testing          (In Progress - Day 5/10)                    │
│  [○] Phase 4: Iteration         (Not Started)                              │
│  [○] Phase 5: Launch            (Not Started)                               │
│                                                                             │
│  NEXT ACTIONS                                                               │
│  ───────────────────────────────────────────────────────────────────────    │
│  ☐ Complete remaining user tests (3/10 done)                               │
│  ☐ Review and consolidate findings                                          │
│  ☐ Schedule design review for Week 2                                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Weekly Tracking Sheet

```markdown
## Weekly Metrics Report: Week [X]

### Week Overview
- Date Range: [Start] - [End]
- Tests Completed: [X]
- Issues Found: [Y]
- Issues Fixed: [Z]

### Metrics Snapshot

| Metric | Week -4 | Week -3 | Week -2 | Week -1 | Current | Target |
|--------|---------|---------|---------|---------|---------|--------|
| Success Rate | [%] | [%] | [%] | [%] | [%] | [%] |
| Avg Time (min) | [X] | [X] | [X] | [X] | [X] | [X] |
| Error Count | [X] | [X] | [X] | [X] | [X] | [<X] |

### Progress This Week
- [Achievement 1]
- [Achievement 2]

### Blockers
- [Blocker 1]
- [Blocker 2]

### Plans for Next Week
- [Action 1]
- [Action 2]

### Resource Needs
- [Resource 1]
```

---

## 5. Quick Reference Cards

### Conversion Rate

| Item | Definition |
|------|------------|
| **Formula** | (Conversions / Visitors) × 100 |
| **Baseline** | [Current %] |
| **Target** | [+X%] improvement |
| **Frequency** | Daily monitoring, weekly review |
| **Tools** | Google Analytics, Mixpanel |

### Task Completion Rate

| Item | Definition |
|------|------------|
| **Formula** | (Completed Tasks / Started Tasks) × 100 |
| **Baseline** | [Current %] |
| **Target** | ≥90% |
| **Frequency** | Per test session |
| **Tools** | User testing observations |

### Time on Task

| Item | Definition |
|------|------------|
| **Formula** | End time - Start time |
| **Baseline** | [Current X min] |
| **Target** | <[X] min |
| **Frequency** | Per task |
| **Tools** | Timer, analytics |

### Error Rate

| Item | Definition |
|------|------------|
| **Formula** | (Errors / Total Attempts) × 100 |
| **Baseline** | [Current %] |
| **Target** | <5% |
| **Frequency** | Per session |
| **Tools** | Bug tracking, observation logs |

### Net Promoter Score (NPS)

| Item | Definition |
|------|------------|
| **Formula** | % Promoters (9-10) - % Detractors (0-6) |
| **Baseline** | [Current score] |
| **Target** | ≥50 |
| **Frequency** | End of testing |
| **Tools** | Survey (0-10 scale) |

---

## Related Templates

- [Prototype Types](prototype-types.md): What to prototype
- [Mockup Templates](mockup-templates.md): Reference for metrics
- [Test Generation](test-generation.md): How to test
- [Iteration Roadmap](iteration-roadmap.md): When to measure
