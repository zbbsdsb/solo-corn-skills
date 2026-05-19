# Success Criteria Identification Tool

## Overview

The Success Criteria Identification Tool provides a structured methodology for defining, categorizing, and validating measurable success criteria. This tool emphasizes that clear success criteria are essential for objective evaluation and preventing subjective disagreements about project outcomes.

**Why Success Criteria Matter:**
- Provide objective basis for measuring project success
- Enable data-driven decision making
- Prevent scope creep by focusing on outcomes
- Create accountability through measurable targets
- Facilitate clear communication with stakeholders

## Part 1: Measurable Criteria Definition

### 1.1 Criteria Quality Framework

#### SMART Success Criteria

All success criteria must be:

```
S - SPECIFIC: Clearly defined and unambiguous
M - MEASURABLE: Quantifiable with defined metrics
A - ACHIEVABLE: Realistic given constraints
R - RELEVANT: Aligned with core objectives
T - TIME-BOUND: Defined within a timeframe
```

#### Anti-Patterns to Avoid

| Weak Criterion | Why It's Weak | Improved Version |
|---------------|---------------|-------------------|
| "Improve user experience" | Not measurable | "Achieve 90% positive feedback on UX survey" |
| "Reduce costs" | No target | "Reduce operational costs by 20%" |
| "Deploy quickly" | No definition | "Deploy to production within 4 weeks" |
| "High quality" | Subjective | "Achieve < 1% error rate in production" |
| "Improve performance" | No baseline | "Reduce average response time from 2s to 500ms" |

### 1.2 Criteria Definition Process

#### Step 1: Identify Outcome Categories

| Category | Description | Relevance to Project |
|----------|-------------|---------------------|
| Business Outcomes | Revenue, costs, market share | |
| User Outcomes | Satisfaction, engagement, adoption | |
| Operational Outcomes | Efficiency, quality, throughput | |
| Technical Outcomes | Performance, reliability, scalability | |
| Compliance Outcomes | Regulatory adherence, security | |

#### Step 2: Define Baseline Metrics

```
CURRENT STATE ASSESSMENT

Metric Name: _______________________________________
Current Value: _______________
Measurement Method: _______________
Data Source: _______________
Last Updated: _______________

Metric Name: _______________________________________
Current Value: _______________
Measurement Method: _______________
Data Source: _______________
Last Updated: _______________
```

#### Step 3: Define Target Metrics

```
TARGET STATE DEFINITION

Metric Name: _______________________________________
Target Value: _______________
Justification: _______________________________________
Timeframe: _______________
Measurement Frequency: _______________

Acceptable Range: _______________ to _______________

Metric Name: _______________________________________
Target Value: _______________
Justification: _______________________________________
Timeframe: _______________
Measurement Frequency: _______________

Acceptable Range: _______________ to _______________
```

### 1.3 Comprehensive Criteria Definition Template

For each success criterion, complete the following:

```
SUCCESS CRITERION DEFINITION
Criteria ID: SC-_______
Category: _______________________________________

1. CRITERION STATEMENT
   "The solution will be considered successful if..."
   _______________________________________________________________

2. METRIC
   Metric Name: _______________________________________
   Formula/Calculation: _______________________________________
   Unit of Measure: _______________________________________

3. BASELINE (Current State)
   Current Value: _______________
   Measurement Period: _______________
   Data Source: _______________________________________

4. TARGET (Desired State)
   Target Value: _______________
   Measurement Period: _______________
   Improvement: _______________% or _______________ absolute

5. ACCEPTABLE THRESHOLD
   Minimum Acceptable: _______________
   Maximum Acceptable: _______________ (if applicable)

6. TIMEFRAME
   Target Date: _______________
   Measurement Start: _______________
   Measurement End: _______________

7. MEASUREMENT METHOD
   How to Measure: _______________________________________
   Tools Required: _______________________________________
   Responsible Party: _______________________________________

8. VALIDATION
   Who Verifies: _______________________________________
   Verification Method: _______________________________________
   Frequency: _______________________________________
```

## Part 2: Success Metrics Hierarchy

### 2.1 Metric Hierarchy Structure

```
┌─────────────────────────────────────────┐
│        ORGANIZATIONAL OBJECTIVES        │
│    (Top-level business goals)          │
├─────────────────────────────────────────┤
│           KEY RESULTS (KRs)             │
│   (Measurable outcomes supporting       │
│    organizational objectives)          │
├─────────────────────────────────────────┤
│         SUCCESS CRITERIA                │
│    (Specific metrics for this project) │
├─────────────────────────────────────────┤
│           KEY INDICATORS                 │
│   (Day-to-day operational metrics)      │
└─────────────────────────────────────────┘
```

### 2.2 Organizational Alignment Matrix

| Organizational Objective | Key Result | Project Success Criteria | Alignment Status |
|-------------------------|------------|-------------------------|-----------------|
| | | | ☐ Aligned ☐ Misaligned |
| | | | ☐ Aligned ☐ Misaligned |
| | | | ☐ Aligned ☐ Misaligned |

### 2.3 Metric Categories

#### Primary Metrics (Critical Path)

Metrics directly tied to core project objectives:

| Metric | Weight | Target | Measurement |
|--------|--------|-------|-------------|
| | 40% | | |
| | 30% | | |
| | 30% | | |

#### Secondary Metrics (Important)

Metrics supporting primary metrics:

| Metric | Weight | Target | Measurement |
|--------|--------|-------|-------------|
| | 25% | | |
| | 25% | | |
| | 25% | | |
| | 25% | | |

#### Diagnostic Metrics (Tracking)

Metrics that help understand progress:

| Metric | Target | Frequency |
|--------|--------|-----------|
| | | Weekly |
| | | Weekly |
| | | Weekly |

### 2.4 Leading vs Lagging Metrics

#### Lagging Metrics (Outcome Metrics)

```
What they measure: Final outcomes and results
When measured: After the fact
Examples:
- Revenue generated
- Customer satisfaction scores
- Error rates in production
- Number of issues resolved

Use: Validate overall success
```

#### Leading Metrics (Predictive Metrics)

```
What they measure: Progress toward outcomes
When measured: Throughout the project
Examples:
- Features completed
- Test coverage percentage
- User adoption rate (in-progress)
- Velocity trends

Use: Predict and course-correct
```

**Balanced Scorecard Approach:**

| Metric Type | Lagging | Leading |
|------------|---------|---------|
| Financial | Revenue target achieved | Budget burn rate |
| Customer | NPS score | User engagement |
| Internal | Quality metrics | Defect density |
| Learning | Skill improvement | Training completion |

## Part 3: Verification Methods

### 3.1 Verification Method Selection

#### Method Categories

| Method | When to Use | Pros | Cons |
|--------|-------------|------|------|
| Quantitative Measurement | Metrics have numeric values | Objective, precise | Requires data collection |
| User Testing | User-centric criteria | Real-world validation | Time-consuming |
| Stakeholder Review | Subjective criteria | Incorporates expertise | Potential bias |
| Automated Testing | Technical criteria | Repeatable, fast | Initial setup effort |
| Survey/Feedback | Perception-based criteria | Direct user input | Response bias |
| Audit/Inspection | Compliance criteria | Formal verification | Resource intensive |

### 3.2 Verification Planning Matrix

| Criteria | Verification Method | Data Source | Frequency | Owner | Tool/Process |
|----------|-------------------|------------|-----------|-------|--------------|
| | | | | | |
| | | | | | |
| | | | | | |

### 3.3 Data Collection Framework

#### Automated Data Collection

```
DATA COLLECTION AUTOMATION

Metric: _______________________________________
Collection Method:
[ ] API integration
[ ] Database query
[ ] Monitoring system
[ ] Analytics platform
[ ] Custom script

Data Access:
- System: _______________________________________
- Access Level: _______________________________________
- Query/Fetch Frequency: _______________________________________

Alert Configuration:
- Threshold: _______________________________________
- Notification: _______________________________________
```

#### Manual Data Collection

```
MANUAL DATA COLLECTION

Metric: _______________________________________
Collection Method:
[ ] Survey distribution
[ ] User interviews
[ ] Manual count
[ ] Observation
[ ] Third-party report

Collection Schedule:
- Frequency: _______________________________________
- Timing: _______________________________________
- Sample Size: _______________________________________

Quality Controls:
- Double-entry verification
- Random sampling checks
- Training for collectors
```

### 3.4 Verification Session Structure

#### Pre-Verification Checklist
```
☐ Data sources identified and accessible
☐ Measurement tools prepared
☐ Verification team briefed
☐ Baseline data documented
☐ Success thresholds confirmed
☐ Documentation templates ready
```

#### Verification Execution

```
VERIFICATION SESSION RECORD
Date: _______________
Verifiers: _______________
Session Focus: _______________

Findings:
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

Issues Encountered:
1. _______________________________________________________________
2. _______________________________________________________________

Action Items:
| Action | Owner | Due Date |
|--------|-------|----------|
| | | |
| | | |
```

#### Post-Verification Analysis

```
VERIFICATION RESULTS ANALYSIS

Criteria Performance Summary:

| Criteria | Target | Actual | Status | Variance |
|----------|--------|--------|--------|----------|
| | | | ☐ Met ☐ Missed | |
| | | | ☐ Met ☐ Missed | |
| | | | ☐ Met ☐ Missed | |

Overall Status: ☐ Success ☐ Partial ☐ Failed

Key Learnings:
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________
```

### 3.5 Continuous Verification Framework

#### Real-Time Monitoring

```
REAL-TIME METRICS DASHBOARD

Metrics Monitored:
1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

Update Frequency: [Real-time / Hourly / Daily]

Alert Thresholds:
- Warning: _______________________________________
- Critical: _______________________________________
- Action Required: _______________________________________

Dashboard Access:
- URL: _______________________________________
- Access Level: _______________________________________
- Update Recipients: _______________________________________
```

#### Periodic Review Cycle

| Review Type | Frequency | Focus | Participants |
|------------|-----------|-------|--------------|
| Daily Standup | Daily | Leading metrics | Team |
| Weekly Review | Weekly | Progress toward targets | Team + Lead |
| Monthly Review | Monthly | Criteria trend analysis | Stakeholders |
| Quarterly Review | Quarterly | Strategic alignment | Leadership |

## Part 4: Success Criteria Documentation

### 4.1 Master Success Criteria Document

```
SUCCESS CRITERIA MASTER DOCUMENT
Project: _______________________________________
Version: _______
Date: _______
Status: [ ] Draft [ ] Review [ ] Approved [ ] Archived

EXECUTIVE SUMMARY
_______________________________________________________________
_______________________________________________________________

1. PRIMARY SUCCESS CRITERIA

1.1 Business Impact
| Criteria | Target | Weight | Verification Method |
|----------|--------|--------|---------------------|
| | | % | |
| | | % | |
| | | % | |

1.2 User Impact
| Criteria | Target | Weight | Verification Method |
|----------|--------|--------|---------------------|
| | | % | |
| | | % | |
| | | % | |

1.3 Technical Excellence
| Criteria | Target | Weight | Verification Method |
|----------|--------|--------|---------------------|
| | | % | |
| | | % | |
| | | % | |

2. SECONDARY SUCCESS CRITERIA
[Document secondary criteria here]

3. SUCCESS THRESHOLDS

Critical Threshold (Minimum Acceptable):
- _______________________________________________________________

Target Threshold (Desired):
- _______________________________________________________________

Stretch Threshold (Exceeds Expectations):
- _______________________________________________________________

4. VALIDATION SCHEDULE
[Document validation milestones and dates]

5. APPROVAL SIGNATURES
_______________________________________________________________
Project Sponsor                    Date
_______________________________________________________________
Business Owner                    Date
_______________________________________________________________
Technical Lead                    Date
```

### 4.2 Criteria Prioritization Matrix

#### Impact vs Effort Analysis

| Criteria | Impact (1-5) | Effort (1-5) | Priority Score | Priority |
|----------|--------------|--------------|----------------|----------|
| | | | Impact/Effort | P1/P2/P3 |
| | | | | |
| | | | | |

#### Stakeholder Priority Alignment

| Criteria | Stakeholder A | Stakeholder B | Stakeholder C | Combined Priority |
|----------|---------------|---------------|---------------|-------------------|
| | H/M/L | H/M/L | H/M/L | |
| | H/M/L | H/M/L | H/M/L | |

### 4.3 Success Criteria Review Checklist

```
PRE-LAUNCH REVIEW:
☐ All criteria are SMART
☐ Baselines are documented
☐ Targets are agreed upon
☐ Thresholds are defined
☐ Verification methods are specified
☐ Data sources are accessible
☐ Responsible parties are assigned
☐ Review schedule is established

MID-PROJECT REVIEW:
☐ Leading metrics are on track
☐ No unforeseen measurement gaps
☐ Data quality is acceptable
☐ Stakeholders are informed of progress

POST-PROJECT REVIEW:
☐ All criteria have been measured
☐ Results are documented
☐ Variance analysis completed
☐ Lessons learned captured
☐ Criteria archive for future reference
```

## Part 5: Advanced Criteria Definition Techniques

### 5.1 North Star Metric

Define one primary metric that best captures core value:

```
NORTH STAR METRIC

Metric Definition:
_______________________________________________________________

Why This Metric:
- _______________________________________________________________
- _______________________________________________________________
- _______________________________________________________________

How It Drives Value:
_______________________________________________________________

Correlation with Business Outcomes:
_______________________________________________________________

Current Value: _______________
Target Value: _______________
```

### 5.2 OKR Integration

#### Objective
```
OBJECTIVE: _______________________________________

Key Results:
1. _______________________________________________________________
   Baseline: _______________ Target: _______________
2. _______________________________________________________________
   Baseline: _______________ Target: _______________
3. _______________________________________________________________
   Baseline: _______________ Target: _______________
```

#### Mapping to Project Criteria

| OKR Key Result | Project Criteria | Linkage |
|---------------|------------------|---------|
| | | Direct support |
| | | Supporting |
| | | Indirect influence |

### 5.3 Comparative Success Criteria

#### Before/After Comparison

| Dimension | Before Project | Target After | Improvement |
|-----------|---------------|--------------|-------------|
| | | | % |
| | | | % |
| | | | % |

#### Benchmark Comparison

| Metric | Internal Baseline | Industry Benchmark | Project Target |
|--------|------------------|---------------------|----------------|
| | | | |
| | | | |

---

*This tool is part of the Idea Clarification Engine for the Landing skill.
Measurable success criteria prevent misunderstandings and enable objective project evaluation.*