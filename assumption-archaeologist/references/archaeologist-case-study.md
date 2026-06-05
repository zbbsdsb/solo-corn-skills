# Archaeologist Case Study: Excavating a B2B SaaS Go-to-Market Plan

## Introduction

This case study follows a fictional but realistic startup—Nexus Analytics—through the assumption excavation process. It demonstrates how a mid-stage B2B SaaS company identified 23 assumptions, surfaced 6 critical risks, designed 4 validation experiments, and used the results to avoid a costly market entry mistake.

The case is annotated to show the reasoning behind each decision, common pitfalls, and how to interpret signals that are not black-and-white.

---

## Company Context

**Nexus Analytics** is a 14-month-old startup that has built an AI-powered customer analytics platform for e-commerce companies. The product analyzes customer behavior data and provides automated insights and recommendations for increasing conversion rates.

**Current state:**
- Seed-funded with $2.1M (12 months runway remaining)
- 12 design partners using the product for free in exchange for feedback
- 2 paying customers at $2,000/month (just closed in the last 30 days)
- 8-person team (4 engineering, 2 product/design, 2 go-to-market)
- MVP built on AWS; core technology validated through design partner usage

**Strategic decision under consideration:**
Launch a formal go-to-market campaign targeting mid-market e-commerce companies ($10M-$100M in annual revenue) with a $299/month entry-level price point and a self-serve onboarding flow.

---

## The Excavation Session

The CEO, CTO, Head of Product, and VP of Marketing convene for a 90-minute excavation session following the protocol in Excavation Protocol.

### Assumptions Surfaced: 23 Total

Through the session, the team surfaces 23 assumptions organized by layer. The raw list is consolidated and deduplicated during the session.

#### Layer Distribution

| Layer | Assumptions Surfaced |
|-------|---------------------|
| Self | 2 |
| Team | 3 |
| Market | 4 |
| Customer | 6 |
| Competitor | 4 |
| Technology | 2 |
| Resource | 1 |
| Timeline | 1 |
| **Total** | **23** |

---

## Initial Classification: All 23 Assumptions

The team classifies all 23 assumptions using the taxonomy framework. Below is the complete initial classification with Impact, Confidence, and Priority Scores.

### Self Layer (2 Assumptions)

**ASSUM-001:** "I (CEO) have the sales skills to lead mid-market deals at this price point."
- Impact: 3, Confidence: 2, Priority: 7

**ASSUM-002:** "Our team can operate at the pace required to hit our 6-month go-to-market milestones."
- Impact: 3, Confidence: 3, Priority: 6

### Team Layer (3 Assumptions)

**ASSUM-003:** "All co-founders are aligned on the mid-market focus and $299/month pricing strategy."
- Impact: 4, Confidence: 3, Priority: 8

**ASSUM-004:** "We can hire aVP of Sales with mid-market SaaS experience within 60 days."
- Impact: 3, Confidence: 2, Priority: 7

**ASSUM-005:** "Our current engineering team can maintain product quality while simultaneously building go-to-market tooling."
- Impact: 3, Confidence: 3, Priority: 6

### Market Layer (4 Assumptions)

**ASSUM-006:** "The mid-market e-commerce segment ($10M-$100M revenue) is large enough to build a $10M ARR business."
- Impact: 5, Confidence: 2, Priority: 11

**ASSUM-007:** "Mid-market e-commerce companies are increasing their budget allocation for analytics and customer data tools."
- Impact: 4, Confidence: 2, Priority: 10

**ASSUM-008:** "The market timing is right—e-commerce platforms (Shopify, Magento) have matured enough that customer data is now a priority."
- Impact: 4, Confidence: 2, Priority: 10

**ASSUM-009:** "The $299/month price point is accessible to our target segment without requiring executive approval."
- Impact: 3, Confidence: 2, Priority: 7

### Customer Layer (6 Assumptions)

**ASSUM-010:** "Mid-market e-commerce companies have a defined person responsible for customer analytics (not just a generalist marketer)."
- Impact: 4, Confidence: 3, Priority: 8

**ASSUM-011:** "That person experiences our target problem (lack of actionable customer insights) as a top-3 work frustration."
- Impact: 5, Confidence: 1, Priority: 13

**ASSUM-012:** "Our target customers are actively trying to solve this problem today, not just passively aware of it."
- Impact: 4, Confidence: 2, Priority: 10

**ASSUM-013:** "Mid-market e-commerce companies will adopt new SaaS tools via self-serve onboarding without high-touch sales."
- Impact: 3, Confidence: 2, Priority: 7

**ASSUM-014:** "Customers will pay $299/month for our current product capability (not just a future vision)."
- Impact: 5, Confidence: 1, Priority: 13

**ASSUM-015:** "Our target customers will connect their data within 15 minutes of signing up."
- Impact: 3, Confidence: 2, Priority: 7

### Competitor Layer (4 Assumptions)

**ASSUM-016:** "No established competitor offers a complete solution for mid-market e-commerce customer analytics."
- Impact: 4, Confidence: 3, Priority: 8

**ASSUM-017:** "Google Analytics, Mixpanel, and Amplitude are not satisfying our target customers' needs for actionable AI insights."
- Impact: 4, Confidence: 2, Priority: 10

**ASSUM-018:** "Larger enterprise analytics platforms (Salesforce Customer 360, Adobe Analytics) are too complex and expensive for mid-market."
- Impact: 3, Confidence: 3, Priority: 6

**ASSUM-019:** "We have a differentiated positioning that mid-market e-commerce buyers will find compelling."
- Impact: 4, Confidence: 2, Priority: 10

### Technology Layer (2 Assumptions)

**ASSUM-020:** "Our current architecture can support 100 paying customers without performance degradation."
- Impact: 3, Confidence: 3, Priority: 6

**ASSUM-021:** "Our AI insights model is accurate enough to provide reliable recommendations without constant human review."
- Impact: 4, Confidence: 2, Priority: 10

### Resource Layer (1 Assumption)

**ASSUM-022:** "We have sufficient runway to hire a VP of Sales and run a 6-month go-to-market campaign before needing to raise."
- Impact: 5, Confidence: 2, Priority: 11

### Timeline Layer (1 Assumption)

**ASSUM-023:** "We can achieve our first 10 paying customers within 90 days of go-to-market launch."
- Impact: 4, Confidence: 1, Priority: 11

---

## Critical Risk Identification: The 6 Most Dangerous

Based on priority scores, the team identifies 6 critical risks (Priority Score 10+) that require immediate validation before committing to the go-to-market plan.

### Critical Risk 1: ASSUM-011 — Top-3 Frustration
**Assumption:** "That person experiences our target problem (lack of actionable customer insights) as a top-3 work frustration."

- **Priority Score:** 13 (Impact: 5, Confidence: 1)
- **Why it is critical:** If this person does not experience the problem as highly painful, they will not prioritize solving it. No amount of marketing will create urgency where none exists.
- **Test type needed:** Shadow test — observe actual work frustration, not stated preference

### Critical Risk 2: ASSUM-014 — Willingness to Pay at Current Capability
**Assumption:** "Customers will pay $299/month for our current product capability (not just a future vision)."

- **Priority Score:** 13 (Impact: 5, Confidence: 1)
- **Why it is critical:** This is the single most important commercial assumption. Our design partners pay nothing. Two recent paying customers may have been early-adopter outliers.
- **Test type needed:** Concierge test — deliver value manually and charge; or smoke test with actual purchase intent

### Critical Risk 3: ASSUM-006 — Market Size for $10M ARR
**Assumption:** "The mid-market e-commerce segment ($10M-$100M revenue) is large enough to build a $10M ARR business."

- **Priority Score:** 11 (Impact: 5, Confidence: 2)
- **Why it is critical:** If the addressable market is too small, no amount of execution will generate the returns required for a venture outcome.
- **Test type needed:** Shadow test — bottom-up market sizing through primary research

### Critical Risk 4: ASSUM-022 — Runway Sufficiency
**Assumption:** "We have sufficient runway to hire a VP of Sales and run a 6-month go-to-market campaign before needing to raise."

- **Priority Score:** 11 (Impact: 5, Confidence: 2)
- **Why it is critical:** If we run out of cash before achieving traction, we will be forced to raise from a position of weakness or shut down.
- **Test type needed:** Scenario modeling — model cash flow under multiple revenue scenarios

### Critical Risk 5: ASSUM-023 — 90-Day Customer Acquisition
**Assumption:** "We can achieve our first 10 paying customers within 90 days of go-to-market launch."

- **Priority Score:** 11 (Impact: 4, Confidence: 1)
- **Why it is critical:** If we cannot acquire initial customers quickly, we will burn capital without validation signal, and team morale will suffer.
- **Test type needed:** Smoke test — test demand and acquisition efficiency before full launch

### Critical Risk 6: ASSUM-021 — AI Model Accuracy
**Assumption:** "Our AI insights model is accurate enough to provide reliable recommendations without constant human review."

- **Priority Score:** 10 (Impact: 4, Confidence: 2)
- **Why it is critical:** If the model produces unreliable recommendations, customers will distrust the product and churn.
- **Test type needed:** Prototype test — run model outputs against historical data with known outcomes

---

## The 4 Validation Experiments

The team designs 4 experiments to validate the 6 critical risks. Some experiments validate multiple assumptions.

### Experiment 1: Customer Frustration and Willingness to Pay (ASSUM-011, ASSUM-014)

**Design:** Concierge test with 8 mid-market e-commerce companies. The team will manually deliver the insights they would get from the product, then ask participants to pay $299/month for "access to the beta program."

**Duration:** 45 days
**Cost:** $0 product cost (manual delivery); $2,000 in sales team time
**Owner:** CEO (sales) + Head of Product (insights delivery)

**Protocol:**
1. Recruit 8 companies matching ICP via cold outreach (target: Head of E-commerce or Director of Marketing)
2. Conduct 30-minute discovery call to confirm fit and assess pain
3. For 30 days, manually generate insights from their data and deliver weekly via email
4. On day 30, offer "beta access" at $299/month; track conversion
5. Conduct exit interviews with all 8 participants regardless of conversion

**Success criteria:**
- At least 5/8 participants rate the problem as a top-3 frustration (ASSUM-011 validation)
- At least 3/8 participants convert to paid at $299/month (ASSUM-014 validation)
- Minimum satisfaction score of 4.0/5.0 for the insights delivered

**Counter-signal thresholds:**
- Fewer than 3/8 rate it as top-3 frustration → pivot required on target segment
- Fewer than 2/8 convert to paid → pricing or positioning needs revision
- Satisfaction below 3.5/5 → product quality issue before marketing

**Actual Results:**
- 8 companies enrolled; 7 completed the 30-day period
- 6/7 rated the problem as top-3 frustration (85.7%) — ASSUM-011 validated
- 2/7 converted to paid at $299/month (28.6%) — ASSUM-014 invalidated
- Average satisfaction: 4.1/5

**Interpretation:**
The problem is real and painful. However, at $299/month with current capabilities, only 2 companies converted. Exit interviews revealed:
- One non-converter: "I love the insights, but I cannot justify another $299/month to my CFO without proving ROI first."
- One non-converter: "The insights are interesting, but I could get 80% of this value from a custom report in Google Analytics for free."

**Implication:** The team must either (a) lower price to reduce purchase friction, (b) improve the product to justify the price premium, or (c) reposition to a higher-value segment where the problem is more acute. They choose to test repositioning first.

**Updated Confidence:**
- ASSUM-011: Confidence upgraded from 1 to 4 (validated)
- ASSUM-014: Confidence remains 1 (invalidated at current price point and positioning)

---

### Experiment 2: Market Sizing (ASSUM-006)

**Design:** Bottom-up market research. Identify 50 mid-market e-commerce companies, survey their current analytics spending and decision-making process, and extrapolate to total addressable market.

**Duration:** 30 days
**Cost:** $500 in researcher time + outreach costs
**Owner:** VP of Marketing

**Protocol:**
1. Compile list of 200 mid-market e-commerce companies from LinkedIn Sales Navigator
2. Cold email 100 companies with 5-question survey on analytics tools and budget
3. Target respondents: VP of Marketing, Head of E-commerce, Director of Data
4. Aim for 30+ responses for statistical validity
5. Analyze data: current spending, satisfaction levels, switching likelihood

**Success criteria:**
- At least 30 responses from qualified respondents
- Market sizing model supports $50M+ TAM at target price point

**Counter-signal thresholds:**
- Fewer than 15 responses → insufficient data; extend timeline
- TAM below $20M at target price point → market may be too small
- Most respondents already satisfied with existing tools → differentiation challenge larger than expected

**Actual Results:**
- 47 responses received (47% response rate from 100 sent)
- Average current analytics spend: $450/month among respondents
- 67% express dissatisfaction with current tools
- 23% express willingness to switch within 90 days for a compelling alternative
- Bottom-up TAM estimate: $72M (based on 8,000 mid-market US e-commerce companies × $450/month average spend × 23% switchable)

**Interpretation:**
The TAM is sufficient for a $10M ARR business. However, the $450/month current spend suggests that a $299/month entry price is competitive. The challenge is not market size but differentiation and switching costs.

**Updated Confidence:**
- ASSUM-006: Confidence upgraded from 2 to 4 (validated with caveats — differentiation challenge acknowledged)

---

### Experiment 3: Runway and Cash Flow Modeling (ASSUM-022)

**Design:** Scenario-based cash flow modeling. Model runway under three scenarios: pessimistic (slow adoption), base (target adoption), and optimistic (fast adoption).

**Duration:** 2 weeks
**Cost:** $0 (internal analysis)
**Owner:** CEO + Part-time CFO advisor

**Protocol:**
1. Model fixed costs (salaries, infrastructure, overhead) for 18 months
2. Model variable costs under three revenue scenarios (3 customers, 10 customers, 25 customers at month 6)
3. Calculate runway under each scenario
4. Identify the break-even point where revenue covers burn
5. Model fundraising scenarios and dilution at different traction levels

**Success criteria:**
- Runway of 12+ months under pessimistic scenario
- Clear understanding of milestones required for fundraising

**Counter-signal thresholds:**
- Runway below 9 months under pessimistic scenario → immediate fundraising required
- Break-even requires more than 30 customers → unit economics need validation

**Actual Results:**
- Pessimistic scenario (3 customers by month 6): 8 months runway — CRITICAL
- Base scenario (10 customers by month 6): 11 months runway — WARNING
- Optimistic scenario (25 customers by month 6): 14 months runway — ACCEPTABLE
- VP of Sales hire costs $15K/month; marketing campaign costs $5K/month
- Fundraising at current stage requires at least 10 customers and $30K MRR

**Interpretation:**
The team is in a risky position. They have 12 months of actual runway, but the base case only gives them 11 months—leaving almost no buffer. They need to either (a) reduce burn immediately, (b) accelerate revenue, or (c) start fundraising now to extend runway while building traction.

**Updated Confidence:**
- ASSUM-022: Confidence remains 2 (validated as critical risk — immediate action required)

---

### Experiment 4: AI Model Accuracy (ASSUM-021)

**Design:** Retrospective accuracy test. Run the AI model on historical customer data with known outcomes and measure recommendation accuracy.

**Duration:** 3 weeks
**Cost:** $0 internal engineering time
**Owner:** CTO

**Protocol:**
1. Collect 6 months of historical data from 4 design partners
2. Define "accurate recommendation" as: the recommended action, if taken, would have improved the target metric
3. Run model on historical data and generate retrospective recommendations
4. Compare recommendations to what actually happened (ground truth)
5. Measure accuracy rate and false positive rate

**Success criteria:**
- Accuracy rate above 75% for top-3 recommendations per customer per week
- False positive rate below 15% (i.e., fewer than 15% of recommendations are actively harmful)

**Counter-signal thresholds:**
- Accuracy below 60% → product is not ready for self-serve; requires human review layer
- False positive rate above 25% → risk of customer harm and churn

**Actual Results:**
- Accuracy rate: 68% (below 75% threshold)
- False positive rate: 12% (within acceptable range)
- Most common failure mode: recommendations that are directionally correct but mistimed (e.g., recommend promotion when customer already planned one)

**Interpretation:**
The model is close but not ready for fully autonomous operation. The team decides to add a human review layer for the first 90 days of customer onboarding to catch false positives and calibrate customer expectations.

**Updated Confidence:**
- ASSUM-021: Confidence upgraded from 2 to 3 (partially validated — product requires operational workaround)

---

## Experiment Summary

| Assumption | Priority | Test Type | Outcome | Updated Confidence |
|------------|----------|-----------|---------|-------------------|
| ASSUM-011: Top-3 frustration | 13 | Concierge | Validated | 4 |
| ASSUM-014: Willingness to pay | 13 | Concierge | Invalidated | 1 |
| ASSUM-006: Market size | 11 | Market research | Validated | 4 |
| ASSUM-022: Runway sufficiency | 11 | Cash modeling | Invalidated | 2 |
| ASSUM-023: 90-day acquisition | 11 | (Not yet run) | — | — |
| ASSUM-021: AI accuracy | 10 | Accuracy test | Partially validated | 3 |

---

## Strategic Decisions Based on Experiments

### Decision 1: Do Not Launch Go-to-Market as Planned

The team decides not to proceed with the $299/month self-serve launch. The combination of:
- Invalidated willingness to pay (ASSUM-014)
- Narrow runway buffer (ASSUM-022)
- Model accuracy not yet sufficient (ASSUM-021)

...means that launching would burn capital without generating meaningful validation signal. Instead, they choose to pursue a more capital-efficient path.

### Decision 2: Pivot to Enterprise Tier

Based on exit interviews from the concierge test, 2 non-converting companies expressed interest at a higher price point ($999/month) if the product included dedicated onboarding and quarterly strategy sessions. The team decides to test an enterprise tier targeting companies with dedicated analytics teams.

### Decision 3: Raise Bridge Round Immediately

The runway modeling revealed insufficient buffer to reach base-case milestones. The team decides to begin fundraising conversations immediately to raise a $1.5M bridge round at current terms, before traction deteriorates further.

### Decision 4: Add Human Review Layer

The AI accuracy test revealed the model is not yet ready for autonomous operation. The team decides to implement a human-in-the-loop review process for all customer-facing recommendations for the first 90 days.

---

## Key Learnings from the Excavation

### Learning 1: The Problem Is Real, the Product Is Not

The concierge test confirmed that mid-market e-commerce companies have a genuine pain point with customer analytics. However, the current product does not yet solve it compellingly enough to justify the price. This is a common pattern: founders conflate problem validation with product validation.

**Action:** Separate validation of problem existence from validation of your specific solution.

### Learning 2: Willingness to Pay Requires More Than Pain

Two companies had the problem but still did not pay. Why? Because the perceived solution complexity (integration, training, ongoing management) outweighed the perceived benefit. The willingness to pay is a function of net value, not just gross pain.

**Action:** When validating willingness to pay, account for total cost of ownership and switching cost, not just the monthly price.

### Learning 3: Runway Modeling Reveals Hidden Risks

The cash flow modeling was the most actionable experiment. It revealed that the team was one bad quarter away from existential risk. Many founders avoid this analysis because they do not want to confront the numbers.

**Action:** Model runway under pessimistic scenarios before you need to. The time to raise is when you have runway, not when you are running out.

### Learning 4: Market Size Is Necessary but Not Sufficient

The market is large enough. However, the competition for that market is intense. Having a large TAM is meaningless if you cannot differentiate within it.

**Action:** Validate market size AND differentiation simultaneously. Large markets attract competition that will commoditize your opportunity.

### Learning 5: Model Accuracy Has Operational Implications

The AI accuracy test revealed a failure mode the team had not anticipated: mistimed recommendations. This led directly to the human-in-the-loop decision, which changed the cost structure and staffing plan.

**Action:** Test model accuracy with ground truth data before launch, not after customers complain.

---

## What Would Have Happened Without Excavation

If Nexus Analytics had proceeded with the original go-to-market plan without excavation:

1. They would have spent $120,000 on marketing and a VP of Sales hire over 6 months.
2. They would have launched to silence: the self-serve product at $299/month would not have converted at the rates needed.
3. They would have burned 8-10 months of runway before recognizing the problem.
4. They would have been forced to raise from a position of weakness (low traction, low runway) or shut down.
5. By the time they discovered the AI accuracy issue, 30+ customers would have experienced mistimed recommendations and churned.

**The excavation and experiments cost approximately $7,500 and 6 weeks. The avoided mistake would have cost $500,000+ and 12 months of opportunity cost.**

---

## The Excavation Practice in Retrospect

The Nexus Analytics team ran their first excavation session 14 months into the company. In retrospect, they wished they had run it at month 3, before building the MVP. Several assumptions they held (self-serve onboarding, $299 price point, mid-market focus) would have been invalidated much earlier.

The excavation practice is most powerful when it precedes major product and go-to-market decisions, not when it follows them. By then, you have already sunk costs and emotional investment that make it harder to accept negative signal.

The team commits to quarterly re-excavation sessions and monthly dashboard reviews. The next excavation will include a broader set of team members and external advisors to catch blind spots that internal teams miss.

---

## Appendix: The 23 Assumptions After Experiments

| ID | Assumption | Layer | Impact | Confidence (Initial) | Priority | Confidence (Post-Experiment) |
|----|------------|-------|--------|---------------------|----------|------------------------------|
| 001 | CEO has sales skills for mid-market | Self | 3 | 2 | 7 | 3 (unvalidated) |
| 002 | Team can operate at required pace | Self | 3 | 3 | 6 | 3 (unvalidated) |
| 003 | Co-founders aligned on GTM strategy | Team | 4 | 3 | 8 | 4 (aligned) |
| 004 | Can hire VP Sales in 60 days | Team | 3 | 2 | 7 | 2 (delayed) |
| 005 | Engineering can maintain quality while building GTM | Team | 3 | 3 | 6 | 3 (unvalidated) |
| 006 | Market is large enough for $10M ARR | Market | 5 | 2 | 11 | 4 (validated) |
| 007 | Mid-market increasing analytics budget | Market | 4 | 2 | 10 | 2 (unvalidated) |
| 008 | Market timing is right | Market | 4 | 2 | 10 | 3 (weak signal) |
| 009 | $299/month accessible without exec approval | Market | 3 | 2 | 7 | 1 (invalidated) |
| 010 | Defined person responsible for customer analytics | Customer | 4 | 3 | 8 | 3 (partial) |
| 011 | Problem is top-3 frustration | Customer | 5 | 1 | 13 | 4 (validated) |
| 012 | Customers actively trying to solve problem | Customer | 4 | 2 | 10 | 2 (unvalidated) |
| 013 | Self-serve adoption will work | Customer | 3 | 2 | 7 | 1 (invalidated) |
| 014 | Willingness to pay $299/month | Customer | 5 | 1 | 13 | 1 (invalidated) |
| 015 | Customers connect data within 15 minutes | Customer | 3 | 2 | 7 | 3 (partial) |
| 016 | No complete competitor solution | Competitor | 4 | 3 | 8 | 3 (partial) |
| 017 | Google Analytics et al. not satisfying needs | Competitor | 4 | 2 | 10 | 2 (unvalidated) |
| 018 | Enterprise platforms too complex/expensive | Competitor | 3 | 3 | 6 | 3 (unvalidated) |
| 019 | Differentiated positioning is compelling | Competitor | 4 | 2 | 10 | 2 (unvalidated) |
| 020 | Architecture supports 100 customers | Technology | 3 | 3 | 6 | 4 (validated) |
| 021 | AI model accurate without human review | Technology | 4 | 2 | 10 | 3 (partial) |
| 022 | Runway sufficient for GTM campaign | Resource | 5 | 2 | 11 | 2 (invalidated) |
| 023 | 10 customers in 90 days | Timeline | 4 | 1 | 11 | 1 (not tested) |

---

## Final Note for Founders

The assumption archaeology practice is not a one-time event. It is a discipline. The goal is not to eliminate risk—it is to know which risks you are taking, how much evidence you have for each, and what you are doing to validate the most dangerous ones before they catch you off guard.

Nexus Analytics survived because they excavated before they committed. The next excavation will reveal new assumptions. The market will shift. New competitors will emerge. The practice never ends.

The founders who win are not the ones who had fewer assumptions—they are the ones who knew which assumptions mattered most and made them visible before they became crises.
