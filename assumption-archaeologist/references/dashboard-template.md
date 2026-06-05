# Dashboard Template: Tracking Assumptions from Discovery to Validation

## Overview

The assumption tracking dashboard is your living document of the business's critical risks and validation status. It translates excavated assumptions into tracked experiments, giving you a clear view of what you know, what you do not know, and what you are doing about it.

This template provides the column structure, formatting guidance, example entries, and maintenance protocols for a functional assumption dashboard. Use it as the operational backbone of your assumption archaeology practice.

---

## Dashboard Purpose

The dashboard serves three audiences:

1. **The founder:** A weekly review of what needs attention, what experiments are running, and what the current risk profile looks like.
2. **The team:** Shared visibility into the top risks, who owns each validation effort, and how confidence is evolving.
3. **External stakeholders:** Investors, advisors, and collaborators can quickly understand the biggest open questions and how you are addressing them.

---

## Column Definitions

### Required Columns

| Column | Description | Format | Example |
|--------|-------------|--------|---------|
| **ID** | Unique identifier for the assumption | AAN-### | ASSUM-001 |
| **Assumption Statement** | The falsifiable claim being made | Full sentence | "Small businesses will pay $99/month for automated bookkeeping." |
| **Layer** | Which of the 8 layers the assumption belongs to | Single layer name | Customer |
| **Category** | Sub-category within the layer | Specific category | Willingness to Pay |
| **Impact Rating** | 1-5 scale of damage if wrong | Integer 1-5 | 4 |
| **Confidence Rating** | 1-5 scale of current evidence | Integer 1-5 | 2 |
| **Priority Score** | Calculated: (Impact x 2) + (5 - Confidence) | Integer 2-12 | 9 |
| **Test Design** | Type of experiment and brief description | Archetype + method | Concierge: Manual delivery to 5 customers at $99/month for 60 days |
| **Test Status** | Current status of the validation experiment | Enum | Planned, In Progress, Completed, Deferred |
| **Test Start Date** | When the experiment began | Date | 2024-03-15 |
| **Test End Date** | When the experiment is expected to complete | Date | 2024-05-15 |
| **Actual End Date** | When the experiment actually completed | Date | 2024-05-18 |
| **Outcome** | Result of the experiment | Enum | Validated, Invalidated, Inconclusive |
| **Updated Confidence** | Confidence rating after experiment | Integer 1-5 | 4 |
| **Evidence URL** | Link to evidence or experiment results | URL | https:// Notion.so/experiment-001 |
| **Owner** | Who is responsible for running the experiment | Name | Sarah Chen |
| **Last Updated** | When this row was last modified | Date | 2024-05-18 |
| **Next Action** | What needs to happen next | Short description | Design follow-up test for pricing sensitivity |

### Optional Columns

These columns are useful for teams that want additional tracking granularity:

| Column | Description | Format |
|--------|-------------|--------|
| **Dependencies** | What must be true for this test to run | List of assumption IDs |
| **Budget** | Cost allocated to this validation | Currency |
| **Actual Cost** | What the experiment actually cost | Currency |
| **Key Metric** | The specific signal metric tracked | Number + unit |
| **Threshold** | The minimum value for a validating signal | Number + unit |
| **Actual Value** | The observed value of the key metric | Number + unit |
| **Pivot Trigger** | What would cause a strategic pivot if invalidated | Condition |
| **Notes** | Additional context or observations | Free text |

---

## Column Logic Rules

### Priority Score Calculation

```
Priority Score = (Impact Rating × 2) + (5 - Confidence Rating)
```

**Interpretation:**
- Score 9-12: Critical risk — test immediately before committing significant resources
- Score 6-8: High priority — test within 30 days
- Score 4-5: Medium priority — test within 60 days
- Score 2-3: Low priority — document and monitor

### Status Transitions

```
Planned → In Progress → Completed
                    ↘ Deferred
         Completed → (Review for experiment update)
```

An assumption can cycle through multiple experiments. After completing one test, the status returns to "Planned" for the next experiment if additional validation is needed.

### Confidence Update Rules

When updating confidence after an experiment:
- **Validated:** Confidence increases by 1-2 points, capped at 5
- **Invalidated:** Confidence decreases to 1 unless evidence strongly suggests otherwise
- **Inconclusive:** Confidence remains unchanged; redesign experiment or accept uncertainty
- **Never decrease confidence without evidence.** Stated skepticism is not proof.

---

## Dashboard Formatting Guidelines

### Color Coding

Use conditional formatting to highlight priority at a glance:

| Priority Score Range | Row Color | Meaning |
|---------------------|-----------|---------|
| 9-12 | Red background | Critical risk — immediate attention |
| 6-8 | Orange background | High priority — test soon |
| 4-5 | Yellow background | Medium priority |
| 2-3 | Green background | Low priority |

### Status Indicators

| Test Status | Icon | Meaning |
|-------------|------|---------|
| Planned | ○ | Not yet started |
| In Progress | ◐ | Experiment running |
| Completed | ● | Experiment done |
| Deferred | ◌ | Intentionally delayed |

### Outcome Indicators

| Outcome | Color | Meaning |
|---------|-------|---------|
| Validated | Green | Assumption confirmed by evidence |
| Invalidated | Red | Assumption contradicted by evidence |
| Inconclusive | Gray | Evidence is ambiguous |

---

## Example Dashboard Entries

### Example 1: Customer Willingness to Pay

```
ID: ASSUM-001
Assumption Statement: Small businesses will pay $99/month for automated bookkeeping software.
Layer: Customer
Category: Willingness to Pay
Impact Rating: 5
Confidence Rating: 2
Priority Score: 11

Test Design: Concierge test — manually deliver bookkeeping services to 8 small businesses
             at $99/month for 60 days. Track retention and satisfaction.

Test Status: Completed
Test Start Date: 2024-01-15
Test End Date: 2024-03-15
Actual End Date: 2024-03-20

Outcome: Validated (with caveats)
Updated Confidence: 4
Evidence URL: https://notion.so/experiment-001

Result: 6/8 businesses renewed after 60 days (75% retention). Average satisfaction score: 4.3/5.
Caveat: One churner cited "too much manual data entry." May need to lower setup complexity.

Owner: Sarah Chen
Last Updated: 2024-03-20
Next Action: Run Wizard-of-Oz test with semi-automated workflow to address churner's objection.
```

### Example 2: Technical Scalability

```
ID: ASSUM-012
Assumption Statement: Our architecture can handle 10,000 concurrent users without performance degradation.
Layer: Technology
Category: Scalability
Impact Rating: 4
Confidence Rating: 1
Priority Score: 11

Test Design: Load test — simulate 10,000 concurrent users using k6. Measure response time,
             error rate, and resource utilization.

Test Status: In Progress
Test Start Date: 2024-04-01
Test End Date: 2024-04-15
Actual End Date: (blank)

Outcome: (blank)
Updated Confidence: (blank)
Evidence URL: https://notion.so/load-test-001

Owner: Marcus Johnson
Last Updated: 2024-04-10
Next Action: Complete load test and analyze results against thresholds (p95 < 200ms, error rate < 1%)
```

### Example 3: Market Size

```
ID: ASSUM-003
Assumption Statement: The US market for AI writing assistants is at least $2B annually.
Layer: Market
Category: Market Size
Impact Rating: 5
Confidence Rating: 3
Priority Score: 9

Test Design: Bottom-up analysis — identify 50 companies in our ICP, survey their current
             spending on writing tools, extrapolate to total addressable market.

Test Status: Planned
Test Start Date: (blank)
Test End Date: (blank)
Actual End Date: (blank)

Outcome: (blank)
Updated Confidence: (blank)
Evidence URL: (blank)

Owner: David Park
Last Updated: 2024-03-01
Next Action: Design survey instrument and identify 50 target companies for outreach.
```

### Example 4: Team Alignment

```
ID: ASSUM-007
Assumption Statement: All co-founders want to build a $100M+ company and are willing to delay
                      personal profitability for 7+ years.
Layer: Team
Category: Alignment
Impact Rating: 4
Confidence Rating: 3
Priority Score: 8

Test Design: Structured conversation — present three exit scenarios (acquisition at $10M,
             $50M, $200M) and discuss each co-founder's preferences. Document alignment in
             decision log.

Test Status: Completed
Test Start Date: 2024-02-01
Test End Date: 2024-02-15
Actual End Date: 2024-02-15

Outcome: Validated
Updated Confidence: 4
Evidence URL: https://notion.so/decision-log-007

Result: All three co-founders aligned on $200M+ outcome and 7-year timeline.
One founder expressed concern about personal cash flow at year 5, but agreed to revisit
compensation review at that milestone.

Owner: Sarah Chen
Last Updated: 2024-02-15
Next Action: Schedule annual alignment review; add compensation milestone to dashboard.
```

### Example 5: Competitor Response

```
ID: ASSUM-015
Assumption Statement: Our primary competitor ( incumbato) will not respond aggressively to
                      our market entry for 18 months due to their product roadmap constraints.
Layer: Competitor
Category: Incumbent Response
Impact Rating: 4
Confidence Rating: 2
Priority Score: 10

Test Design: Shadow test — analyze incumbato's public roadmap, job postings, and recent
             press. Interview 3 former employees or industry contacts about their product
             strategy and resource allocation.

Test Status: Planned
Test Start Date: 2024-05-01
Test End Date: 2024-05-30
Actual End Date: (blank)

Outcome: (blank)
Updated Confidence: (blank)
Evidence URL: (blank)

Owner: David Park
Last Updated: 2024-04-20
Next Action: Draft conversation guide for former employee outreach.
```

---

## Summary View: Portfolio Health

Beyond the detailed assumption log, maintain a summary view that shows the overall health of your assumption portfolio:

### Dashboard Health Metrics

| Metric | Calculation | Healthy Range | Warning Range | Critical Range |
|--------|-------------|---------------|---------------|----------------|
| **Critical Risk Count** | Count of Priority Score ≥ 9 | 0-3 | 4-6 | 7+ |
| **Avg. Confidence** | Mean Confidence Rating | 3.5-5.0 | 2.5-3.4 | 1.0-2.4 |
| **Validation Rate** | Validated / (Validated + Invalidated) | 70-100% | 50-69% | 0-49% |
| **Experiment Velocity** | Experiments completed per month | 2-4 | 1 | 0 |
| **Untested Critical** | Priority ≥ 9 with Status = Planned | 0 | 1-2 | 3+ |

### Layer Distribution

Track the number of assumptions per layer to ensure comprehensive coverage:

| Layer | Count | % of Total | Avg. Confidence |
|-------|-------|------------|-----------------|
| Self | 3 | 8% | 2.3 |
| Team | 4 | 11% | 3.0 |
| Market | 5 | 14% | 2.4 |
| Customer | 8 | 22% | 2.1 |
| Competitor | 4 | 11% | 2.0 |
| Technology | 5 | 14% | 2.5 |
| Resource | 4 | 11% | 2.3 |
| Timeline | 3 | 8% | 2.8 |

If any layer has fewer assumptions than expected, it may indicate incomplete excavation. The Customer and Technology layers typically surface the most assumptions in product-focused startups.

---

## Maintenance Protocol

### Weekly Review (30 minutes)

1. Update status on all active experiments.
2. Log new evidence or findings.
3. Check if any planned experiments should be upgraded to urgent based on new information.
4. Review the summary health metrics.
5. Identify blockers and assign owners for unblocking.

### Monthly Deep Dive (2 hours)

1. Full pass on all assumptions with status "Planned" to ensure they remain relevant.
2. Review completed experiments to update confidence ratings.
3. Surface any new assumptions discovered during execution.
4. Re-prioritize based on updated confidence and new learnings.
5. Review the layer distribution to identify under-explored areas.
6. Archive assumptions that are no longer relevant (e.g., market no longer pursued).

### Quarterly Strategic Review

1. Full re-excavation session with the full team.
2. Review of the overall risk profile based on current validation status.
3. Update impact ratings based on strategic evolution.
4. Assessment of whether the validation strategy is generating actionable insights.
5. Alignment on whether any invalidated assumptions require strategic pivots.

---

## Tool Recommendations

The dashboard can be maintained in any spreadsheet or table tool:

| Tool | Best For | Limitations |
|------|----------|-------------|
| Notion | Teams already using Notion; flexible structure | Less powerful filtering than spreadsheets |
| Airtable | Teams wanting database-like filtering and views | Can become slow with large datasets |
| Google Sheets | Simple, accessible, easy to share | Limited conditional formatting |
| Excel / Numbers | Advanced formatting and analysis | Less collaborative in real-time |

Choose the tool your team will actually use consistently. The best dashboard is the one that gets updated.

---

## Dashboard as Operational Practice

The dashboard is only useful if it reflects reality and drives action. Use it as a forcing function:

1. **Every week:** Review the critical risk count. If it is above 3, you have too many untested high-impact assumptions.
2. **Before every major decision:** Check whether the assumptions underlying that decision have been validated.
3. **Before fundraising:** Audit the dashboard. Investors will ask about your riskiest assumptions; you should know more about them than they do.
4. **After every experiment:** Update the row within 24 hours. If you wait, details will be lost.

The dashboard is not a document. It is a practice. The founders who use it consistently catch problems early, make better decisions, and survive because they know what they do not know.
