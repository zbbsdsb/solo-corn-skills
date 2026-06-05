# Pre-Mortem Methodology

## Overview

The pre-mortem is the foundational operation of the Inversion Engine. Unlike a post-mortem (conducted after failure), a pre-mortem is conducted *before* an initiative begins—or at critical milestones—to systematically identify how and why the initiative might fail. The technique was popularized by psychologist Gary Klein and is now a standard practice in high-reliability organizations.

**Core Principle**: "What would have to be true for this to fail catastrophically?"

The pre-mortem forces you to confront the uncomfortable reality that failure is not just possible—it is often more likely than success. By conducting this analysis early, you can design mitigations, set kill-criteria, and build contingencies *before* irreversible resources are committed.

---

## The 5-Layer Decomposition Framework

Every pre-mortem follows a rigorous 5-layer decomposition. Each layer answers a specific question and surfaces different types of information. Skipping layers or treating them superficially dramatically reduces the value of the exercise.

### Layer 1: The Failure Event

**Question**: What specifically failed, when, and what was the immediate impact?

This layer defines the *endpoint* of the failure scenario. Be specific—vague failure descriptions lead to vague analysis.

**Required Elements**:
- Specific failure statement (not "we failed" but "the product launched with fewer than 10 paying customers after 90 days")
- Precise timeline (which milestone or date marks the failure)
- Quantified impact (revenue lost, customers churned, runway burned, reputation damaged)
- Stakeholders affected (customers, investors, team, partners)

**Example Layer 1 Output**:
> "By Month 6, our B2B SaaS product had only 3 paying customers despite 200+ signups. Monthly burn was $45,000, exhausting our runway. Co-founder A resigned. We were forced to pivot or shut down."

**Common Pitfalls at Layer 1**:
- Being too vague ("we didn't succeed")
- Defining failure too narrowly (only financial failure)
- Confusing failure event with causes (Layer 1 is *what*, not *why*)

---

### Layer 2: Direct Causes

**Question**: What 3-5 specific events or actions directly caused the failure?

Direct causes are the immediate precipitants—the things that *caused* the failure event to occur. If you had intervened at this layer, you could have prevented the failure.

**Characteristics of Direct Causes**:
- Observable and specific (not "poor strategy" but "sales team couldn't explain value proposition")
- Controllable or at least influenceable
- Temporally proximate to the failure event

**Example Layer 2 Output**:
> "1. Customer acquisition cost exceeded lifetime value by 10x. 2. Product had 3 critical bugs causing 40% of trial users to churn in week 2. 3. Sales cycle exceeded 6 months for an SMB product. 4. Two key engineers left during critical development phase."

**Diagnostic Questions for Layer 2**:
- What had to happen for this failure to occur?
- What were the most immediate contributors?
- Which of these causes were foreseeable? Which were surprises?
- Which causes were internal vs. external?

---

### Layer 3: Contributing Factors

**Question**: What underlying conditions, systems, or processes allowed the direct causes to occur?

Contributing factors are the *enablers*—the pre-existing conditions that made the direct causes possible. Often, the direct causes are symptoms of deeper systemic issues.

**Categories of Contributing Factors**:

| Category | Examples |
|----------|----------|
| **Process Failures** | No customer discovery process; undefined development workflow; absent QA |
| **Resource Constraints** | Underfunded marketing; insufficient engineering capacity; no dedicated sales |
| **Information Gaps** | No competitive intelligence; misunderstood customer needs; outdated assumptions |
| **Cultural Factors** | Fear of raising concerns; optimism bias; resistance to feedback |
| **External Conditions** | Market timing; regulatory changes; competitor actions |

**Example Layer 3 Output**:
> "1. We never validated customer willingness to pay—assumed 'if we build it, they will come.' 2. No formal product development process; engineers built features in isolation. 3. Leadership avoided hard conversations about runway. 4. Board was passive and provided no strategic challenge."

---

### Layer 4: Root Causes

**Question**: What fundamental decisions, cognitive biases, or incentive misalignments led to the contributing factors?

This is the deepest analytical layer. Root causes explain *why* the contributing factors existed in the first place. This is where you find the decisions and mental models that created the conditions for failure.

**Common Root Causes in Startup Contexts**:

| Root Cause | Manifestation |
|------------|---------------|
| **Confirmation Bias** | Seeking evidence that supported initial hypothesis; ignoring contradictory signals |
| **Planning Fallacy** | Underestimating time, cost, and difficulty; overestimating probability of success |
| **Sunk Cost Fallacy** | Continuing failing initiatives because of prior investment |
| **Illusion of Control** | Believing external factors were more within our control than they were |
| **Single-Outcome Thinking** | Modeling only the success case; not stress-testing downside scenarios |
| **Misaligned Incentives** | Founders optimizing for funding rounds rather than customer value |

**Example Layer 4 Output**:
> "1. Founder Confirmation Bias: We selected for customer interviews that praised our idea and avoided skeptics. 2. Planning Fallacy: We benchmarked our timeline against successful startups, not industry averages. 3. Incentive Misalignment: We optimized for demo metrics over retention metrics to impress investors."

---

### Layer 5: Prevention & Mitigation

**Question**: What specific actions at each layer could have prevented or reduced the failure?

This layer converts analysis into action. For each layer above, identify:
- Specific interventions that would have prevented the failure
- Early warning indicators to monitor
- Contingency plans if warning signs emerge

**Prevention Hierarchy**:

| Layer | Prevention Focus | Example Interventions |
|-------|-----------------|----------------------|
| Layer 1 | Failure Detection | Define explicit kill-criteria; set milestone reviews |
| Layer 2 | Cause Interruption | Implement process controls; build redundancies |
| Layer 3 | Condition Remediation | Fix broken processes; address resource gaps |
| Layer 4 | Root Cause Elimination | Challenge assumptions; diversify decision-making |

**Example Layer 5 Output**:
> "1. Define monthly 'go/no-go' reviews with explicit customer acquisition thresholds. 2. Require 3 customer discovery interviews per week before building features. 3. Hire a part-time VP Engineering to review technical decisions. 4. Commission independent validation of market size and customer willingness to pay before next funding round."

---

## Annotated SaaS Example

**Context**: A Series A startup building AI-powered code review tooling for enterprise teams. Planning to launch in 6 months.

### Conducting the Pre-Mortem

**Layer 1: The Failure Event**

> "Eighteen months after launch, the product has fewer than 50 enterprise customers and annual recurring revenue below $2M—far below the $15M target needed to justify the Series B. The company has burned through 80% of its runway and is facing dissolution."

**Layer 2: Direct Causes**

> 1. Enterprise sales cycle averaged 14 months vs. the planned 3 months
> 2. Product-market fit was never confirmed; NPS remained below 20
> 3. Three enterprise deals were lost to competitors with lower pricing
> 4. Key integration (GitHub, GitLab) had critical bugs causing data syncing failures
> 5. Two senior engineers left, causing a 4-month delay in the roadmap

**Layer 3: Contributing Factors**

> 1. **Sales**: No enterprise sales experience on the team; underestimated procurement complexity
> 2. **Product**: Built features based on founder intuition rather than customer requests
> 3. **Engineering**: No dedicated QA; bugs discovered by customers
> 4. **Customer Discovery**: Talked to developers (users) instead of IT buyers (decision makers)
> 5. **Competitive**: No differentiation strategy; competed on price against well-funded incumbents
> 6. **Runway**: Board pushed for growth over profitability without setting clear milestones

**Layer 4: Root Causes**

> 1. **Planning Fallacy**: Modeled enterprise sales cycle from blog posts, not industry data
> 2. **Technology-Led Thinking**: Believed superior technology would overcome go-to-market challenges
> 3. **Confirmation Bias**: Dismissed early warning signs as "enterprise is just slower"
> 4. **Misaligned Incentives**: Founders focused on raising next round rather than building sustainable business
> 5. **Groupthink**: Board and investors reinforced optimistic narrative without challenge

**Layer 5: Prevention & Mitigation**

| Layer | Prevention Action | Early Warning Indicator | Contingency Plan |
|-------|------------------|------------------------|------------------|
| 1 | Set quarterly go/no-go reviews with explicit revenue and customer targets | Monthly tracking of ARR growth vs. plan | Pivot to SMB focus if enterprise traction < 5 deals by Month 6 |
| 2 | Hire VP Sales with enterprise experience before building | Track sales cycle length weekly | Consider partnerships or PLG motion |
| 3 | Implement customer advisory board with monthly touchpoints | Monitor NPS and feature request patterns | Shift to outcome-based roadmap |
| 4 | Add dedicated QA and automate testing pipeline | Bug escape rate tracking | Slow release cadence to improve quality |
| 5 | Conduct 20+ customer discovery calls before next initiative | Monitor qualitative feedback trends | Revisit pricing and positioning |

---

## Diagnostic Questions by Layer

### For Layer 1: The Failure Event
- What is the most specific, measurable version of failure?
- Who would be affected and how would we know?
- What is the earliest point at which we could detect this failure?
- What is the worst-case scenario beyond this failure?

### For Layer 2: Direct Causes
- What immediate events led to this failure?
- Which causes were within our control?
- Which causes could we have predicted?
- What single cause, if removed, would have the greatest impact?

### For Layer 3: Contributing Factors
- What systems or processes failed that enabled these causes?
- What information did we not have that we should have had?
- What resources were insufficient?
- What cultural factors allowed this to happen?

### For Layer 4: Root Causes
- What assumptions did we make that turned out to be wrong?
- What cognitive biases were at play?
- What incentives drove the decisions that led here?
- What would a rational outsider have seen that we missed?

### For Layer 5: Prevention & Mitigation
- What specific actions could have prevented failure at each layer?
- What early warning system would have given us time to respond?
- What contingency plans should we have in place?
- What is our commitment to act on this analysis?

---

## Best Practices for Effective Pre-Mortems

### Timing
- Conduct pre-mortem before committing significant resources
- Repeat at major milestones or strategy pivots
- Schedule as a recurring practice (quarterly), not one-time event

### Participants
- Include diverse perspectives (even contrarians and skeptics)
- Consider external advisors who can challenge assumptions
- Avoid having leaders state positions first (anchoring effect)

### Facilitation
- Assign a dedicated facilitator who will protect dissenting views
- Set time limits per layer to maintain focus
- Document findings and assign action items with owners

### Follow-Through
- Create a prioritized action list from the analysis
- Review pre-mortem findings at kill-criteria checkpoints
- Track whether identified risks materialized

---

## Common Mistakes

| Mistake | Why It Undermines the Analysis |
|---------|-------------------------------|
| Skipping to Layer 4 without completing Layers 1-3 | Root causes without context lead to wrong solutions |
| Focusing on external causes beyond your control | Productive analysis identifies actionable interventions |
| Vague failure descriptions | Specificity enables specific remedies |
| Analysis without action | Pre-mortem value is realized only through follow-through |
| One-time exercise | Context changes; so should the analysis |

---

## Integration with Other Operations

The pre-mortem feeds directly into:
- **Failure-Taxonomy**: Use findings to categorize and prioritize failure modes
- **Kill-Criteria**: Convert failure thresholds into explicit decision rules
- **Backcast**: Use identified failure modes to design backward-planned mitigations

---

*"The pre-mortem is not about predicting the future—it's about forcing yourself to consider possibilities you would otherwise dismiss."* — Gary Klein
