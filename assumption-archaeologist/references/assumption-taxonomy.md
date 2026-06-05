# Assumption Taxonomy: A Classification System for Startup Assumptions

## Introduction

Not all assumptions are created equal. Some assumptions, if wrong, will kill your startup regardless of how well you execute. Others are peripheral details that barely matter. The assumption taxonomy provides a systematic framework for classifying and prioritizing assumptions so you can focus your limited time and capital on what truly matters.

This taxonomy operates along three axes: **Layer** (where the assumption lives), **Impact** (how damaging it would be if wrong), and **Confidence** (how sure you are that it is true). Together, these three dimensions give you a complete picture of your assumption landscape and a clear prioritization framework for validation experiments.

---

## The Three Dimensions of Classification

### Dimension 1: The Eight Layers

Assumptions live in one of eight layers, organized from innermost (Self) to outermost (Timeline). The inner layers are typically harder to see and more foundational.

| Layer | Description | Example |
|-------|-------------|---------|
| Self | Founder capabilities, biases, and commitment | "I can build this product alone." |
| Team | Co-founder alignment, capability distribution | "All co-founders will stay for at least 3 years." |
| Market | Market existence, size, timing, structure | "The market is large enough to support a $100M company." |
| Customer | User needs, willingness to pay, accessibility | "Customers will pay $50/month for this solution." |
| Competitor | Competitive dynamics, differentiation, moats | "We have a 12-month first-mover advantage." |
| Technology | Build feasibility, scalability, technical choices | "Our architecture can scale to 1 million users." |
| Resource | Capital, talent, time, partnerships | "We can raise a $2M seed round on current terms." |
| Timeline | Development schedules, revenue milestones | "We will launch a beta in 6 months." |

### Dimension 2: Impact Rating

Impact measures the severity of consequences if an assumption proves false. Use a 1-5 scale where:

| Rating | Label | Definition |
|--------|-------|------------|
| 5 | Existential | The startup fails or must fundamentally pivot if this is wrong |
| 4 | Critical | Major degradation in the core value proposition or business model |
| 3 | Significant | Noticeable setback requiring meaningful plan revision or resource increase |
| 2 | Minor | Manageable impact that can be addressed with targeted adjustments |
| 1 | Negligible | Virtually no impact on the business if proven wrong |

**Impact Assessment Guidelines:**

- When in doubt, rate the impact higher. Founders systematically underestimate risk.
- Ask: "If this assumption is wrong, and we discover it after 18 months of execution, how much time and capital have we wasted?"
- Consider second-order effects. An assumption that seems like a 3 might be a 5 when you factor in reputational damage or team morale.

### Dimension 3: Confidence Rating

Confidence measures your current evidence base for an assumption. Use a 1-5 scale where:

| Rating | Label | Definition |
|--------|-------|------------|
| 5 | Certain | Direct evidence from multiple sources; assumption has been validated |
| 4 | High | Strong evidence from primary research or operational experience |
| 3 | Moderate | Some supporting evidence but significant gaps in understanding |
| 2 | Low | Based on secondary research, analogies, or intuition |
| 1 | Speculative | Pure intuition with no supporting evidence whatsoever |

**Confidence Assessment Guidelines:**

- Be ruthlessly honest. Most founders overestimate their confidence by 1-2 points.
- Distinguish between "I believe this" and "I have evidence for this." Wishful thinking is not evidence.
- Primary research (talking to customers) beats secondary research (reading reports) every time.
- If you cannot articulate the evidence supporting an assumption, it is at best a 2.

---

## The 2x2 Impact/Confidence Matrix

The primary decision tool for assumption prioritization is the 2x2 matrix with **Impact** on one axis and **Confidence** on the other. This matrix reveals where to focus your validation energy.

```
                    HIGH CONFIDENCE
                         │
      STRATEGIC          │       DE-RISKED
      ASSUMPTIONS        │       ASSUMPTIONS
      (Monitor)           │       (Maintain)
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  I │                     │
M P │    DEEP DIVE        │     VALIDATE
P A │    INVESTIGATION    │     & CONFIRM
A C │    (Prioritize)     │     (Document)
C T │                     │
  T │                     │
    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      LOW CONFIDENCE
                         │
      CRITICAL           │       HEDGE
      RISKS              │       BETS
      (Test First)        │       (Accept)
                         │

                    LOW CONFIDENCE
```

### Quadrant Analysis

**Quadrant 1: Critical Risks (High Impact, Low Confidence) — TEST FIRST**

These assumptions are the graveyard of startups. High impact means being wrong would be devastating. Low confidence means you have no idea whether they are true. This quadrant demands immediate validation experiments before committing significant resources.

Examples:
- "Customers will pay $200/month for our solution." (Impact: 5, Confidence: 1)
- "Our technical architecture can handle 100K concurrent users." (Impact: 4, Confidence: 1)
- "We can acquire customers for under $50 CAC." (Impact: 5, Confidence: 1)

**Quadrant 2: Deep Dive Investigation (High Impact, High Confidence) — PRIORITIZE**

These assumptions seem solid but carry existential consequences if wrong. Before scaling, invest in deeper validation. Your confidence may be misplaced, or your evidence may be outdated. Stress-test these assumptions with rigorous experiments.

Examples:
- "The market is $5B globally." (Impact: 5, Confidence: 4) — Have you talked to primary sources or only relied on TAM estimates?
- "Our co-founders are fully aligned on exit timeline." (Impact: 4, Confidence: 4) — Have you had the explicit conversation with documentation?
- "Our technology is 2x faster than competitors." (Impact: 4, Confidence: 4) — Is this based on internal benchmarks or third-party validation?

**Quadrant 3: Strategic Assumptions (Low Impact, High Confidence) — MONITOR**

These assumptions are well-supported and meaningful but not existential. Monitor them periodically but do not over-invest in validation. Document them and move on.

Examples:
- "We can run our SaaS tool on AWS." (Impact: 2, Confidence: 5) — Proven technology, well-understood costs.
- "Our team can work asynchronously across time zones." (Impact: 2, Confidence: 4) — Documented operational capability.

**Quadrant 4: De-Risked Assumptions (Low Impact, High Confidence) — MAINTAIN**

These assumptions are solid and not critical to the business. They require no action beyond routine documentation. Completing validation here is low priority and likely represents scope avoidance.

Examples:
- "We use GitHub for version control." (Impact: 1, Confidence: 5) — Standard practice, trivial to change.
- "Our team drinks coffee." (Impact: 1, Confidence: 5) — Completely irrelevant to business outcomes.

---

## Priority Scoring Method

Beyond the 2x2 matrix, you can compute a numerical priority score for more precise comparison. The formula:

```
Priority Score = (Impact Rating × 2) + (5 - Confidence Rating)
```

**Interpretation:**
- Scores range from 2 (lowest priority) to 12 (highest priority)
- Scores above 8 indicate assumptions requiring immediate attention
- Scores between 5-8 indicate assumptions to address in the next sprint
- Scores below 5 indicate assumptions to document and monitor

**Priority Score Examples:**

| Assumption | Impact | Confidence | Priority Score | Action |
|------------|--------|------------|----------------|--------|
| "Customers will pay $50/mo" | 5 | 1 | 11 | Test immediately |
| "We can scale to 1M users" | 4 | 2 | 10 | Test within 30 days |
| "Market is $2B globally" | 5 | 3 | 9 | Investigate deeply |
| "We can hire a CTO by Q3" | 3 | 3 | 6 | Test within 60 days |
| "AWS will remain available" | 2 | 5 | 4 | Document and monitor |
| "GitHub is a good tool" | 1 | 5 | 2 | No action needed |

---

## Layer-Specific Confidence Calibration

Each layer has characteristic confidence pitfalls. Knowing these patterns helps you avoid systematic overconfidence.

### Self Layer Pitfalls

- **Fundamental attribution error:** Overestimating personal capability based on past successes in different contexts.
- **Illusion of control:** Believing you can control outcomes that are actually determined by external forces.
- **Confirmation bias:** Seeking evidence that confirms your self-beliefs while ignoring contradictory data.
- **Baseline confidence:** Most founders rate their self-assumptions at 4 when the median should be 2.5.

**Calibration Questions:**
- What evidence do I have beyond my own belief that I can execute this?
- Have I built this type of product before, or am I extrapolating from adjacent experience?
- What would have to be true for me to fail, and how likely are those conditions?

### Team Layer Pitfalls

- **Optimism bias about alignment:** Assuming shared vision without explicit documentation of what that vision entails.
- **Social desirability:** Not asking hard questions about equity, exit, and commitment because the answers feel uncomfortable.
- **Competence inflation:** Overestimating team capability based on credentials or past titles rather than actual execution evidence.
- **Baseline confidence:** Team assumption confidence is frequently inflated by 1-2 points because founders do not want to acknowledge potential fractures.

**Calibration Questions:**
- Have we documented our equity splits, vesting schedules, and decision-making frameworks explicitly?
- What would cause a co-founder to leave, and have we discussed that scenario?
- Do we have evidence of successful collaboration under pressure, or only in low-stakes environments?

### Market Layer Pitfalls

- **TAM vanity:** Using top-down market sizing to justify a large opportunity without bottom-up customer validation.
- **Trend extrapolation:** Confusing a temporary trend with a durable structural shift in market behavior.
- **Incumbent blindness:** Underestimating incumbent response or overestimating the weakness of existing solutions.
- **Baseline confidence:** Market assumptions frequently score 3-4 based on analyst reports and intuition, when primary research would reveal scores of 1-2.

**Calibration Questions:**
- What is the minimum market size that would make this venture worthwhile, and have we validated that floor?
- Have we talked to actual customers, or are we relying on secondary research?
- What would cause this market to contract by 50% in the next 3 years?

### Customer Layer Pitfalls

- **Desirability confusion:** Believing that if you would use the product, others will too, without validating with target users.
- **Small sample overconfidence:** Drawing strong conclusions from 3-5 customer conversations.
- **Stated vs. revealed preference:** Believing what customers say they will do rather than observing what they actually do.
- **Baseline confidence:** Customer assumptions are often rated 3 based on informal conversations, when systematic validation would reveal scores of 1-2.

**Calibration Questions:**
- How many target customers have we spoken to in the past 90 days?
- What have we actually observed (behavioral data) versus what have we been told (stated preferences)?
- Would customers switch from their current solution today, or does our solution require them to change habits?

### Competitor Layer Pitfalls

- **Competition underestimation:** "We have no competitors" is almost always wrong. If you cannot name 3 competitors, you have not looked hard enough.
- **First-mover illusion:** Believing that being first creates sustainable advantage without evidence of defensibility.
- **Competitor static view:** Assuming competitors will not respond or cannot respond, without evidence.
- **Baseline confidence:** Competitor assumptions frequently score 3 based on superficial analysis, when deeper investigation would reveal scores of 1-2.

**Calibration Questions:**
- Who has tried to solve this problem before, and what happened to them?
- How would our top 3 competitors respond if we launched tomorrow and started gaining traction?
- What would make a well-funded competitor enter this space and outcompete us?

### Technology Layer Pitfalls

- **Innovation looking for a problem:** Building technology that is interesting but not solving a validated customer need.
- **Scaling optimism:** Assuming that what works at small scale will work at large scale without architectural stress testing.
- **Dependency blindness:** Not fully understanding third-party platform risks, API stability, and vendor lock-in.
- **Baseline confidence:** Technology assumptions frequently score 3-4 based on prototypes and past experience, when production-scale validation would reveal scores of 1-2.

**Calibration Questions:**
- What is the hardest technical problem in our system, and have we proven we can solve it at scale?
- What happens to our product if our key third-party dependencies change, fail, or raise prices?
- Have we stress-tested our architecture under realistic load conditions?

### Resource Layer Pitfalls

- **Fundraising optimism:** Assuming you can raise capital at favorable terms without evidence of investor interest.
- **Hiring underestimation:** Believing you can attract top talent before you have product-market fit or meaningful traction.
- **Timeline compression:** Underestimating how long critical milestones will take and how much capital that will consume.
- **Baseline confidence:** Resource assumptions frequently score 3 based on industry norms and intuition, when actual evidence would reveal scores of 1-2.

**Calibration Questions:**
- What is our actual burn rate under different scenarios, and when do we hit zero cash?
- What evidence do we have that investors will fund us at our current valuation and timeline?
- What critical hires do we need, and have we validated that we can attract them?

### Timeline Layer Pitfalls

- **Planning fallacy:** Estimating timelines based on best-case scenarios rather than statistical distributions of similar projects.
- **Milestone optimism:** Believing key milestones will be hit on schedule without accounting for the common failure modes.
- **External dependency blindness:** Not fully accounting for lead times on partnerships, regulatory approvals, and third-party deliverables.
- **Baseline confidence:** Timeline assumptions frequently score 3 when historical data on similar projects would reveal scores of 1-2.

**Calibration Questions:**
- What is the realistic distribution of outcomes for our key milestones, not the best case?
- What external dependencies could delay us, and have we built in buffers?
- How long did similar companies take to reach our current stage?

---

## Prioritization Framework

Use this decision tree to determine the order in which you validate assumptions:

```
Is the assumption's impact existential (4-5)?
├── YES: Proceed to next question
│   └── Is your confidence level low (1-2)?
│       ├── YES: This is a CRITICAL RISK. Design immediate validation experiment.
│       └── NO (Confidence 3-5): Deep-dive investigation required.
└── NO (Impact 1-3): Proceed to next question
    └── Is your confidence low (1-2)?
        ├── YES: This is a HEDGE BET. Decide if you accept the risk or test it.
        └── NO (Confidence 3-5): This is DE-RISKED. Document and monitor.
```

### The 3-Vote Rule for Team Prioritization

When prioritizing as a team, give each person 3 votes for the assumptions they believe are most critical. Place votes on the assumption itself, not on the layer. Count votes after all team members have cast theirs. The top-voted assumptions become the priority validation targets.

This prevents dominant voices from controlling the agenda and ensures that uncomfortable truths get surfaced.

---

## Classification Maintenance

Assumptions are not static. As you run experiments, gather data, and gain experience, your understanding of impact and confidence will evolve. Update your classification regularly:

- **After each experiment:** Reassess the confidence rating for tested assumptions based on results.
- **Monthly:** Full assumption review with the team to update classifications and surface new assumptions.
- **At each milestone:** Re-evaluate whether impact ratings have changed as the business context evolves.
- **When pivoting:** Full re-excavation of all assumptions with the new strategic direction in mind.

---

## Documentation Requirements

For each assumption in your priority set, document:

1. **Assumption statement:** The exact claim you are making, phrased as a testable statement.
2. **Layer:** Which of the eight layers it belongs to.
3. **Impact rating:** 1-5 with justification.
4. **Confidence rating:** 1-5 with evidence summary.
5. **Priority score:** Calculated from the formula above.
6. **Validation experiment:** The specific test you will run, with success criteria.
7. **Experiment status:** Planned, in progress, completed, or deferred.
8. **Outcome:** What the experiment revealed, with links to evidence.
9. **Updated confidence:** Revised confidence after experiment completion.
10. **Implications:** How results change your plan, if at all.

---

## Summary: The Taxonomy in Practice

The assumption taxonomy is a decision-making tool, not a bureaucratic exercise. Its purpose is to direct your limited resources toward the assumptions that matter most.

**The daily practice:**
1. When evaluating any strategic decision, ask: "What assumptions am I making, and where do they fall in the taxonomy?"
2. Before committing significant resources, check whether the critical assumptions (high impact, low confidence) have been validated.
3. After each significant experiment or data point, update your classifications.

**The discipline:**
- Surface assumptions systematically using the excavation protocol.
- Classify assumptions honestly using the three dimensions.
- Prioritize using the 2x2 matrix and the 3-vote rule.
- Design validation experiments for critical risks before they become crises.
- Update classifications as evidence accumulates.

The founders who win are not those who have fewer assumptions—they are those who systematically identify and validate their most critical assumptions before running out of runway.
