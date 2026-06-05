# Kill Criteria Templates

## Overview

Kill criteria are the explicit, measurable conditions that trigger a decision to stop, pivot, or fundamentally change direction. They are the operationalization of the Inversion Engine's "what would guarantee failure" analysis into actionable decision rules.

**Core Principle**: "Before we start, we will agree on what failure looks like—and commit to acting on it."

The value of kill criteria is not in identifying failure—it is in *pre-commitment*. By defining failure conditions before emotional and financial stakes become high, you preserve optionality and avoid sunk cost fallacy.

---

## Why Kill Criteria Fail (And How to Avoid It)

| Reason Kill Criteria Fail | Prevention Strategy |
|--------------------------|-------------------|
| Criteria are too vague to evaluate | Use specific numbers, dates, and thresholds |
| Founders ignore criteria when reached | Public commitment; advisor accountability |
| Criteria are set too optimistically | Challenge assumptions; use conservative estimates |
| Single metric focus misses multi-dimensional failure | Define composite criteria across key dimensions |
| Criteria are never reviewed | Schedule quarterly kill-criteria reviews |

---

## Template 1: Project Kill Criteria

Use this template when evaluating whether to continue, pivot, or terminate a specific project or initiative.

### Template Structure

```
PROJECT: [Name]
START DATE: [Date]
INITIAL HYPOTHESIS: [What we're trying to prove]
RESOURCES COMMITTED: [Capital, time, people]

REVIEW SCHEDULE:
- Week [X]: First checkpoint
- Week [Y]: Second checkpoint  
- Week [Z]: Final checkpoint

KILL CRITERIA:
1. [Metric]: [Threshold] by [Date]
   Current baseline: [Value]
   Measurement method: [How to verify]

2. [Metric]: [Threshold] by [Date]
   Current baseline: [Value]
   Measurement method: [How to verify]

3. STOP CONDITION: If [this event] occurs, stop immediately regardless of other metrics.

DECISION RULES:
- If [X] criteria met by [Date]: Continue and scale
- If [Y] criteria met by [Date]: Reassess and pivot approach
- If [Z] criteria not met by [Date]: Terminate and redirect resources

COMMITMENT: We commit to honoring these criteria. Signed: [Names]
```

### Worked Example: Mobile App Feature Development

```
PROJECT: AI-powered expense tracking feature in existing accounting SaaS
START DATE: January 15
INITIAL HYPOTHESIS: Users will adopt AI categorization if accuracy exceeds 85%
RESOURCES COMMITTED: $80K, 3 engineers for 3 months

REVIEW SCHEDULE:
- Week 4 (Feb 12): Internal prototype review
- Week 8 (Mar 12): Beta release with 50 users
- Week 12 (Apr 9): Go/no-go for full launch

KILL CRITERIA:
1. User Engagement: Beta users activate feature 3+ times/week by Week 8
   Current baseline: N/A (new feature)
   Measurement method: Feature analytics dashboard

2. Accuracy: AI categorization accuracy exceeds 85% by Week 8
   Current baseline: 67% (based on training data)
   Measurement method: Weekly accuracy audit on 100 random transactions

3. User Satisfaction: NPS for feature exceeds 30 by Week 10
   Current baseline: N/A
   Measurement method: In-app survey to beta users

4. STOP CONDITION: If accuracy falls below 70% for 2 consecutive weeks, pause development immediately regardless of schedule.

DECISION RULES:
- If criteria 1-3 met by Week 12: Full launch with marketing push
- If 2 of 3 criteria met by Week 12: Launch with limited marketing; reassess in 30 days
- If fewer than 2 criteria met by Week 12: Terminate feature; redeploy engineers

COMMITMENT: We commit to honoring these criteria.
Signed: [Product Lead], [Engineering Lead], [CEO]
```

---

## Template 2: Feature Kill Criteria

Use this template when deciding whether to build, iterate, or abandon a specific product feature.

### Template Structure

```
FEATURE: [Name]
PURPOSE: [Problem it solves / Value it delivers]
CUSTOMER SEGMENT: [Who is this for]

BUILD DECISION:
- Estimated effort: [Person-weeks]
- Expected impact: [Metric improvement]
- Confidence level: [High/Medium/Low] based on [evidence]

ITERATION THRESHOLDS:
| Week | Metric Target | Kill Condition |
|------|--------------|---------------|
| 2 | [Criterion] | [Condition] |
| 4 | [Criterion] | [Condition] |
| 8 | [Criterion] | [Condition] |

VALIDATION EVIDENCE REQUIRED:
- [ ] [X] customer interviews confirming problem importance
- [ ] [Y] users requested via feedback channel
- [ ] [Z] users participated in beta testing

ABANDON TRIGGERS:
1. Post-launch usage: < [X]% of target users activate feature within 30 days
2. Retention: < [Y]% of early adopters continue using after 60 days
3. Satisfaction: < [Z] NPS among active users
4. Efficiency: Feature requires > [W] hours/week maintenance; no dedicated owner

DECISION MAKER: [Name] has final authority to kill feature
TIMELINE: Review at 30, 60, 90 days post-launch
```

### Worked Example: Dashboard Widget Feature

```
FEATURE: Customizable KPI dashboard widget
PURPOSE: Increase daily active usage by giving users visibility into their metrics
CUSTOMER SEGMENT: Small business owners using platform for inventory management

BUILD DECISION:
- Estimated effort: 6 person-weeks
- Expected impact: 15% increase in daily active users (DAU)
- Confidence level: Medium—based on user feedback but unvalidated

ITERATION THRESHOLDS:
| Week | Metric Target | Kill Condition |
|------|--------------|---------------|
| 2 | Wireframes approved by [X] customers | No customer validation |
| 4 | Functional prototype; no critical bugs | Technical feasibility issues |
| 6 | Beta with 20 users; >60% activation | <40% activation rate |

VALIDATION EVIDENCE REQUIRED:
- [x] 12 customer interviews confirming "dashboard visibility" as top-3 requested feature
- [x] 47 feature requests via support channel
- [x] 8 users volunteered for beta testing

ABANDON TRIGGERS:
1. Post-launch usage: < 25% of MAU activate widget within 30 days of launch
2. Retention: < 50% of early adopters continue using after 60 days
3. Satisfaction: NPS < 25 among active users
4. Efficiency: Widget requires > 10 hours/week engineering maintenance; no dedicated owner

DECISION MAKER: Head of Product has final authority to kill feature
TIMELINE: Review at 30, 60, 90 days post-launch
```

---

## Template 3: Partnership Kill Criteria

Use this template when evaluating whether to initiate, continue, or terminate a strategic partnership.

### Template Structure

```
PARTNERSHIP: [Name]
PARTNER: [Company name]
START DATE: [Date]
STRATEGIC OBJECTIVE: [What this partnership should achieve]
RESOURCES COMMITTED: [Time, capital, opportunity cost]

PARTNERSHIP STAGE: [Exploratory / Pilot / Active / Stalled]

VALUE CREATION TARGETS:
| Metric | 3-Month Target | 6-Month Target | 12-Month Target |
|--------|---------------|---------------|----------------|
| [Metric 1] | [Value] | [Value] | [Value] |
| [Metric 2] | [Value] | [Value] | [Value] |

KILL CRITERIA (APPLY TO ALL STAGES):
1. Value Creation: [Metric] < [Threshold] by [Date]
2. Strategic Fit: [Condition that would make partnership counterproductive]
3. Resource Efficiency: [Condition indicating poor ROI]
4. Relationship Health: [Condition indicating partnership is harmful]

STAGE-SPECIFIC KILL CRITERIA:

Exploratory Stage Kill Conditions:
- No signed LOI by [Date]
- Due diligence reveals [red flags]
- Partner changes strategic direction

Pilot Stage Kill Conditions:
- Pilot metrics below [threshold]
- Partner fails to deliver on commitments
- Customer feedback indicates no value

Active Stage Kill Conditions:
- Quarterly review shows [X] consecutive quarters below targets
- Partner signs exclusivity with competitor
- Partnership becomes net negative for [X] consecutive quarters

ESCALATION PROCESS:
1. First miss: Joint problem-solving session within 2 weeks
2. Second miss: Executive sponsorship required; corrective plan
3. Third miss: 30-day termination notice

TERMINATION CLAUSE: Either party may terminate with [X] days written notice if kill criteria are triggered
```

### Worked Example: Integration Partnership

```
PARTNERSHIP: Native integration between [Our Product] and [CRM Company]
PARTNER: Salesforce competitor with 5,000 SMB customers
START DATE: March 1
STRATEGIC OBJECTIVE: Drive 20 new enterprise customers through co-marketing
RESOURCES COMMITTED: 120 engineering hours; $30K marketing budget; 3 months
PARTNERSHIP STAGE: Pilot

VALUE CREATION TARGETS:
| Metric | 3-Month Target | 6-Month Target | 12-Month Target |
|--------|---------------|---------------|----------------|
| Joint customers | 3 | 10 | 25 |
| Leads generated | 50 | 150 | 400 |
| Revenue attributed | $15K | $60K | $150K |

KILL CRITERIA:

Pilot Stage Kill Conditions:
1. After 8 weeks (April 26): < 2 joint customers acquired
2. Technical integration incomplete due to partner-side issues
3. Partner's sales team not actively promoting integration

Active Stage Kill Conditions:
1. After 6 months: < 10 joint customers
2. Partner signs exclusive deal with competitor
3. Cost to maintain integration exceeds $5K/month without corresponding revenue
4. Partner company receives acquisition offer that may affect partnership continuity

ESCALATION PROCESS:
1. Miss targets: Weekly calls with partner product lead; joint recovery plan
2. Second miss: Executive sponsor meeting within 2 weeks
3. Third miss: Initiate 30-day termination notice

TERMINATION CLAUSE: Either party may terminate with 30 days written notice if key metrics remain below 50% of target for 2 consecutive quarters
```

---

## Template 4: Hiring Kill Criteria

Use this template when evaluating whether to hire, invest in development, or terminate an employee.

### Template Structure

```
HIRING DECISION: [Role]
CANDIDATE/HIRE: [Name]
START DATE: [Date]
HIRING OBJECTIVE: [What this hire should accomplish]
COMPENSATION: [Salary, equity, bonus structure]
PROBATION PERIOD: [Standard 90 days / Extended 180 days]

ROLE-SPECIFIC SUCCESS METRICS:
| Metric | 30-Day Target | 60-Day Target | 90-Day Target |
|--------|--------------|--------------|---------------|
| [Metric 1] | [Value] | [Value] | [Value] |
| [Metric 2] | [Value] | [Value] | [Value] |

COMPETENCY CHECKPOINTS:
| Competency | 30-Day | 60-Day | 90-Day |
|------------|--------|--------|--------|
| [Skill/Behavior 1] | [Expected Level] | [Expected Level] | [Expected Level] |
| [Skill/Behavior 2] | [Expected Level] | [Expected Level] | [Expected Level] |

PERFORMANCE KILL CRITERIA:
1. 30-Day: Failure to complete [specific onboarding task]
2. 60-Day: [Metric] below [threshold]
3. 90-Day: [Composite assessment] below acceptable

CULTURE/BEHAVIOR KILL CRITERIA:
1. [Specific behavioral violation]
2. [Relationship breakdown with key stakeholder]
3. [Ethical concern raised by colleague]

EXTENSION CONDITIONS:
- If performance is 70-90% of target but trajectory is positive, consider 30-day extension
- Extension requires documented improvement plan
- Maximum one extension per hire

TERMINATION PROCESS:
- Written warning documenting performance gap and improvement plan
- 30-day performance improvement period
- If no improvement, initiate termination
```

### Worked Example: Senior Sales Hire

```
HIRING DECISION: Enterprise Account Executive
CANDIDATE/HIRE: [Candidate Name]
START DATE: February 1
HIRING OBJECTIVE: Build enterprise sales pipeline; close $500K ARR in first year
COMPENSATION: $120K base; $80K OTE; 0.5% equity
PROBATION PERIOD: 90 days standard

ROLE-SPECIFIC SUCCESS METRICS:
| Metric | 30-Day Target | 60-Day Target | 90-Day Target |
|--------|--------------|--------------|---------------|
| Discovery calls completed | 15 | 35 | 60 |
| Qualified opportunities created | 3 | 8 | 15 |
| Pipeline value | $100K | $300K | $600K |

COMPETENCY CHECKPOINTS:
| Competency | 30-Day | 60-Day | 90-Day |
|------------|--------|--------|--------|
| Product knowledge | Can demo; handles basic Q&A | Handles technical deep-dives | Positions against competitors |
| Pipeline management | SFDC updated weekly | Forecasting accuracy > 80% | Full cycle management |
| Relationship building | Establishes rapport with champions | Engages economic buyers | Multi-threaded with decision makers |

PERFORMANCE KILL CRITERIA:
1. 30-Day: Fewer than 10 discovery calls completed; SFDC not updated
2. 60-Day: Zero qualified opportunities created; no progression in deals
3. 90-Day: Pipeline below $200K; no close-ready deals

CULTURE/BEHAVIOR KILL CRITERIA:
1. Misrepresentation of product capabilities to prospects
2. Unresolved conflict with 2+ internal stakeholders
3. Violation of expense policy

EXTENSION CONDITIONS:
- If 60-day metrics are 70-90% of target with strong trajectory, offer 30-day extension
- Extension requires signed improvement plan with weekly milestones
- Extension only available once

TERMINATION PROCESS:
- Written warning with specific performance gaps
- 30-day performance improvement plan with twice-weekly check-ins
- If no measurable improvement, terminate with 2 weeks notice per employment agreement
```

---

## Template 5: Business Pivot Kill Criteria

Use this template when evaluating whether to fundamentally change your business model, target market, or product direction.

### Template Structure

```
CURRENT STATE ASSESSMENT:
Business Model: [Description]
Monthly Revenue: [Amount]
Monthly Burn: [Amount]
Runway: [Months remaining]
Primary Metrics: [List key metrics]

PIVOT CONSIDERATION:
Potential Pivot Option: [Description]
Evidence Supporting Pivot: [List supporting evidence]
Evidence Against Pivot: [List concerns]

PIVOT KILL CRITERIA (Must define BEFORE pivot):
| Condition | Trigger | Current Value | Threshold |
|-----------|---------|---------------|-----------|
| Revenue trajectory | If [metric] not achieved by [date] | [Value] | [Threshold] |
| Unit economics | If [metric] does not improve by [date] | [Value] | [Threshold] |
| Market validation | If [signal] not observed by [date] | [Evidence] | [Required signal] |
| Competitive position | If [condition] occurs | [Status] | [Status] |

PRE-PIVOT CHECKLIST:
- [ ] Current business killed or significantly scaled back
- [ ] Resources redirected to pivot
- [ ] Team aligned on new direction
- [ ] New kill-criteria defined for pivot initiative

PIVOT DECISION AUTHORITY:
- Day-to-day: [Role/Person]
- Escalation: [Who can override]
- Board involvement required if: [Conditions]

TIMELINE:
- Pivot initiated: [Date]
- Evidence of progress: [Date]
- Next formal review: [Date]
- Kill criteria review: [Date]
```

### Worked Example: B2C to B2B Pivot

```
CURRENT STATE ASSESSMENT:
Business Model: B2C productivity app for students
Monthly Revenue: $12,000
Monthly Burn: $35,000
Runway: 4 months
Primary Metrics: 50,000 MAU; 3% paid conversion; LTV $45

PIVOT CONSIDERATION:
Potential Pivot Option: B2B enterprise learning platform
Evidence Supporting Pivot:
- 12 universities requested institutional pricing
- Enterprise ACV is 50x consumer LTV
- Several competitors acquired by larger players at high multiples

Evidence Against Pivot:
- B2B sales cycle is 6-12 months; runway is 4 months
- No B2B sales experience in team
- Current product needs significant modification

PIVOT KILL CRITERIA:
| Condition | Trigger | Current Value | Threshold |
|-----------|---------|---------------|-----------|
| Revenue trajectory | If B2B pipeline < $100K by Month 3 | $0 | $100K |
| Unit economics | If CAC payback > 18 months | N/A (new) | 18 months |
| Market validation | If < 3 pilot agreements by Month 4 | 0 | 3 pilots |
| Competitive position | If [Competitor X] launches similar product | Not yet | Watch list |

PRE-PIVOT CHECKLIST:
- [x] Current B2C business reduced to maintenance mode
- [x] 2 of 5 engineers redirected to B2B product
- [x] CEO committed to B2B sales personally
- [x] New kill-criteria defined for pivot initiative

PIVOT DECISION AUTHORITY:
- Day-to-day: CEO
- Escalation: Board has veto power if runway falls below 3 months
- Board involvement required if: Monthly burn exceeds $50K

TIMELINE:
- Pivot initiated: March 1
- Evidence of progress: June 1 (pipeline check)
- Next formal review: September 1 (pilot conversion)
- Kill criteria review: December 31 (go/no-go for continued investment)
```

---

## Best Practices for Kill Criteria

### The Pre-Commitment Problem

The biggest challenge with kill criteria is honoring them when emotional and financial stakes are high. Mitigation strategies:

1. **Public commitment**: Share kill criteria with advisors, board, or trusted mentors
2. **Pre-written rationale**: Document why you set these criteria so you remember the reasoning
3. **Immediate action**: When criteria are triggered, act within 48 hours—don't let decisions drift
4. **Separate evaluation**: Ask "What would we do if we discovered this today with fresh eyes?"

### Metrics Selection

Good kill criteria metrics are:
- **Leading indicators**: Predict future outcomes, not just historical results
- **Observable quickly**: Feedback loops short enough to course-correct
- **Objective**: Not subject to interpretation or manipulation
- **Actionable**: Suggest a clear response when triggered

### Avoiding False Positives

Not every bad week is a kill criteria trigger. Distinguish between:
- **Normal variance**: Expected fluctuation in metrics
- **Trend concern**: Direction is worrying but not yet at threshold
- **Kill criteria breach**: Clear, documented failure to meet threshold

---

## Integration with Other Operations

Kill criteria connect to:
- **Pre-Mortem**: Kill criteria are derived from identified failure modes
- **Backcasting**: Each backward milestone becomes a kill criteria checkpoint
- **Failure-Taxonomy**: Archetype-specific risks inform which metrics matter most

---

*"The purpose of kill criteria is not to fail—it is to fail fast enough to try again."* — Inversion Engine Core Philosophy
