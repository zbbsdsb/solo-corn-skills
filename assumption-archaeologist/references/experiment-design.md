# Experiment Design: Validating Assumptions with Minimum-Viable Tests

## Introduction

Every assumption you surface is a potential bomb. Some are duds—wrong but harmless. Others will destroy your startup if they explode at the wrong moment. The only way to know which is which is to design experiments that test assumptions cheaply before they test you expensively.

The core principle is **minimum viable validation**—design the simplest possible test that provides meaningful signal about whether an assumption is likely true or false. A $500 test that tells you to pivot is worth more than a $50,000 engineering sprint that confirms what you could have learned in a week.

This document covers the four primary validation test archetypes, how to match test types to assumption types, and the principles for designing experiments that give you actionable signal.

---

## The Four Test Archetypes

### Archetype 1: Smoke Tests

A smoke test is the simplest and fastest validation method. It answers the question: "Does anyone care enough about this to take a single low-friction action?" Smoke tests validate interest and attention without asking for commitment, time, or money.

**When to use smoke tests:**
- You have a new idea and want to gauge initial interest before building anything.
- You want to test positioning or messaging without a full product.
- You need a quick signal on whether a market segment is worth pursuing.
- You want to test demand for a feature before investing in building it.

**Common smoke test formats:**

**Landing page test:**
Build a single landing page describing the value proposition and track how many visitors sign up for early access or enter their email. Measure: email capture rate.

```
Example: "We believe customers will pay for an AI writing assistant."
Smoke test: Landing page describing the assistant with email capture.
Signal: If we get 500 signups from 2,000 visitors (25%), there is genuine interest.
Counter-signal: If we get 20 signups (1%), the demand hypothesis needs revision.
```

**Ad campaign test:**
Run a small paid campaign to a landing page and measure click-through rates and sign-up conversion. Do not fulfill the promise—measure whether people click.

```
Example: "Small businesses will pay for automated bookkeeping."
Smoke test: Run $500 in Google Ads for target keywords; measure clicks and signups.
Signal: CPC under $5 and signup rate above 10% suggests genuine interest.
Counter-signal: CPC above $20 or signup rate below 2% suggests weak demand.
```

**Content engagement test:**
Publish content (blog post, video, social post) about the problem and measure engagement. The metric is attention and resonance, not conversion.

```
Example: "Developers care about AI code review."
Smoke test: Write a detailed blog post on the problem; measure views, shares, and comments.
Signal: High dwell time, shares among target audience, and comments with personal stories.
Counter-signal: Low views, no shares, generic comments.
```

**Cold outreach test:**
Reach out to 20-50 target customers with a specific pitch and measure response rate.

```
Example: "Enterprise sales teams will want to buy our product."
Smoke test: Email 30 VP-level targets with a concise value proposition.
Signal: 30%+ response rate with at least 3 wanting a demo.
Counter-signal: Under 10% response rate; no one wants a conversation.
```

**Smoke test design principles:**
1. Keep the test duration short: 3-7 days maximum.
2. Spend the minimum necessary to get a signal: $100-500 on ads, 1-2 hours on content.
3. Define the signal threshold in advance: "We need X to proceed."
4. Do not try to convert—measure interest only. Fulfillment comes later.
5. Run multiple small tests rather than one large one.

**Smoke test limitations:**
- Attention does not equal willingness to pay.
- High interest in a landing page does not mean customers will change their behavior.
- You cannot differentiate between curiosity and genuine purchase intent.

---

### Archetype 2: Concierge Tests

A concierge test delivers your proposed value proposition manually to a small set of customers before building any automation. You are the product. This validates that customers actually want the outcome you are promising and that you can deliver it.

**When to use concierge tests:**
- You believe your target customers have a painful problem and you can solve it manually.
- You want to validate willingness to pay before building.
- You need to understand the operational details of how to deliver value.
- You want to identify the minimum feature set that creates value.

**Common concierge test formats:**

**Manual service delivery:**
Deliver the complete service manually to 5-10 customers, charging (or about to charge) the full price. Track time spent, customer satisfaction, and outcomes.

```
Example: "Hotels will pay for an AI concierge that handles guest requests."
Concierge test: Hire a virtual assistant to handle 10 hotel guest request
manually for 30 days. Charge the target price.
Signal: Hotels renew after month 1; guests rate the service 4.5+/5.
Counter-signal: Hotels cancel; guests rate the service below 3; time
requirements are 10x projected.
```

**Outsource prototype:**
Use freelancers or agencies to manually replicate what the product would do. Measure customer satisfaction with the outcome, not the process.

```
Example: "E-commerce brands will pay for automated inventory forecasting."
Concierge test: Have a part-time analyst manually generate forecasts for
5 brands for 60 days at the target price point.
Signal: Brands renew and request expansion; forecast accuracy above 85%.
Counter-signal: Brands cancel after month 1; satisfaction scores below 3.
```

**Wizard-of-Oz test:**
Customers interact with what appears to be an automated system, but a human is manually performing the backend work.

```
Example: "Grocery delivery customers will pay for 15-minute delivery."
Concierge test: Build a simple app that looks automated but has a
runner manually fulfilling orders in a 2-mile radius.
Signal: Order frequency above 3/week; customers tolerate 20-minute delays.
Counter-signal: Order frequency below 1/week; customers cancel after
first slow delivery.
```

**Concierge test design principles:**
1. Charge real money or a reasonable deposit. Free or heavily subsidized tests do not validate willingness to pay.
2. Limit the customer set to 5-15 customers. Quality of signal matters more than quantity.
3. Track everything: time spent, customer interactions, objections, workarounds.
4. Aim for 4-8 weeks of delivery to understand retention and not just initial delight.
5. Document the operational playbook—what you learn manually becomes the product specification.

**Concierge test limitations:**
- You personally may succeed where the product cannot. Your charisma, network, or effort is not scalable.
- Manual delivery obscures the cost structure. If it takes you 5 hours to serve one customer, automation will not fix that.
- Small, hand-selected customers may not represent the broader market.

---

### Archetype 3: Shadow Tests

A shadow test observes existing customer behavior without changing anything. You are watching what people do, not asking what they would do. Shadow tests are especially powerful for validating assumptions about how customers currently solve problems, where they spend time and money, and what their actual workflows look like.

**When to use shadow tests:**
- You want to understand how customers currently solve a problem before proposing a new solution.
- You need to validate market size or customer behavior without disrupting operations.
- You want to identify where customers are currently spending money that you would displace.
- You are building a B2B product and need to understand the buying process and decision-makers.

**Common shadow test formats:**

**Customer journey observation:**
Observe 5-10 customers using their current solutions in real time. Take notes on workarounds, frustrations, and time spent.

```
Example: "Accountants spend 20 hours/month on reconciliation."
Shadow test: Spend 2 hours observing 5 accountants during reconciliation
work. Measure actual time spent and frustration points.
Signal: Observed time above 15 hours/month; clear frustration at pain points.
Counter-signal: Actual time below 5 hours/month; accountants seem satisfied
with current tools.
```

**Process archaeology:**
Analyze existing data about customer behavior without interacting with customers directly. Look at support tickets, churn reasons, feature usage, and spending patterns.

```
Example: "Customers want a simpler invoicing tool."
Shadow test: Analyze 200 support tickets from your target segment's
current software vendor. Count mentions of invoicing complexity.
Signal: 30%+ of tickets mention invoicing as a pain point.
Counter-signal: Less than 10% mention invoicing; most tickets are about other topics.
```

**Competitor usage analysis:**
Use a competitor's product extensively to understand its strengths and weaknesses from the customer's perspective.

```
Example: "Customers would switch to us because our UX is better."
Shadow test: Use the top 3 competitors' products for 10 hours each.
Document every friction point, missing feature, and moment of confusion.
Signal: Clear and reproducible friction points that we can measurably improve.
Counter-signal: Competitor products work well; the "UX advantage" is marginal.
```

**B2B buying process mapping:**
Interview or observe the actual buying process within an organization. Map the decision-makers, influencers, veto points, and budget cycles.

```
Example: "The IT manager will champion our product to the CMO."
Shadow test: Map the actual buying process at 3 target companies.
Identify who initiates, who approves, who blocks, and what triggers purchase.
Signal: Clear champion with budget authority and cross-functional influence.
Counter-signal: Complex buying process with multiple veto points; no clear champion.
```

**Shadow test design principles:**
1. Observe without influencing. Do not ask leading questions; watch behavior.
2. Prioritize depth over breadth. Five thorough observations beat twenty superficial ones.
3. Capture specifics: exact quotes, timestamps, and observable actions.
4. Look for patterns across observations. One outlier is not a trend.
5. Complement shadow tests with other methods to validate causation, not just correlation.

**Shadow test limitations:**
- Observing behavior does not prove customers will pay for a change.
- Shadow tests in artificial environments (interviews, mockups) may not reflect real-world behavior.
- Customers may not be able to articulate what they need; you must infer from behavior.

---

### Archetype 4: Wizard-of-Oz Tests

A Wizard-of-Oz test presents a fully functional product to customers while the backend is manually operated. Unlike concierge tests (where you deliver the entire service manually), Wizard-of-Oz tests simulate the product experience while a human handles the parts that would be expensive to build.

**When to use Wizard-of-Oz tests:**
- You need to validate the complete customer experience, including UI and interactions, before engineering investment.
- You want to test feature prioritization—what customers actually use versus what they say they will use.
- You need to validate pricing and packaging without building billing infrastructure.
- You want to confirm product-market fit before scaling.

**Common Wizard-of-Oz test formats:**

**Simulated product experience:**
Build a clickable prototype or minimum front-end that appears to work. Route "complicated" actions to a human operator who responds within the expected timeframe.

```
Example: "Customers will use an AI nutrition coach daily."
Wizard-of-Oz test: Build a simple app with meal logging UI.
When users log meals, a human "AI" responds within 2 minutes
with personalized nutrition advice.
Signal: Daily active usage above 60%; 30-day retention above 40%.
Counter-signal: Usage drops below 20% after week 1; users forget to log meals.
```

**Landing page to manual fulfillment:**
Drive paid traffic to a product that appears automated but routes to human operators.

```
Example: "Small businesses will pay $99/month for automated regulatory filing."
Wizard-of-Oz test: Build the marketing site and checkout. When customers
purchase, route them to a human who files manually on their behalf.
Signal: Conversion rate above 3%; 60-day retention above 70%.
Counter-signal: Conversion below 1%; high churn after first filing due to errors.
```

**Partial automation simulation:**
Build only the "magic" parts of the product and manually handle the rest. Observe what customers notice versus what they take for granted.

```
Example: "Our AI will detect fraud in real-time."
Wizard-of-Oz test: Build the fraud alert UI. Have analysts manually
review transactions and flag suspicious activity that appears as "AI alerts."
Signal: Customers react to alerts within 1 hour; false positive rate below 5%.
Counter-signal: Customers ignore alerts; manual review takes 4+ hours, revealing scale limits.
```

**Wizard-of-Oz test design principles:**
1. Make the product appear more finished than it is. The facade should be convincing.
2. Respond within realistic timeframes. If the product claims real-time, do not take 24 hours.
3. Track every customer interaction—usage frequency, feature adoption, and churn.
4. Run for a meaningful duration: minimum 30 days to understand retention patterns.
5. Do not tell customers it is manual. Their behavior should be genuine.

**Wizard-of-Oz test limitations:**
- Customers may behave differently when they know the company is small or early-stage.
- Manual operations can succeed at a scale that automated systems cannot replicate.
- The illusion may hold longer than actual product quality warrants.

---

## Matching Test Types to Assumption Types

Not every test works for every assumption. Use this matrix to guide your experiment design:

| Assumption Layer | Typical Confidence | Best Test Archetype | Why |
|------------------|--------------------|--------------------|-----|
| Self | Low-Medium | Smoke test (personal network), retrospectives | Can you actually get people to respond to you? |
| Team | Medium-High | Concierge test (with co-founders delivering), structured interviews | Can you deliver value under pressure? |
| Market | Low-Medium | Smoke test (ad campaigns, landing pages), shadow test (market sizing) | Does a market exist and how large is it? |
| Customer | Low-Medium | Concierge test (manual delivery), smoke test (email outreach) | Will customers pay and will they use it? |
| Competitor | Low-Medium | Shadow test (competitor analysis), smoke test (messaging differentiation) | Can you differentiate and win share? |
| Technology | Low-Medium | Prototype test, stress test, smoke test (API testing) | Can you build it and will it scale? |
| Resource | Low | Cash runway modeling, fundraising outreach | Do you have enough runway? |
| Timeline | Low | Milestone retrospectives, similar company benchmarks | Will you hit your milestones? |

### Assumption Type Decision Tree

```
What do you need to validate?
│
├─ "Do customers want this?" → Smoke test (landing page, ad test)
│
├─ "Will customers pay for this?" → Concierge test (manual delivery, charge real money)
│
├─ "Will customers use this regularly?" → Wizard-of-Oz test (simulated product, track retention)
│
├─ "How do customers currently solve this?" → Shadow test (observation, process analysis)
│
├─ "Can we build this?" → Prototype test (minimum viable build, stress test)
│
└─ "Is our market estimate accurate?" → Shadow test (market sizing, competitor analysis)
```

---

## Designing High-Signal Experiments

### The Anatomy of a Good Experiment

Every experiment should have the following components:

1. **Hypothesis:** A falsifiable statement of the assumption you are testing.
2. **Success criteria:** The specific threshold that determines whether the assumption is validated.
3. **Signal metric:** The quantitative measure you will track.
4. **Counter-signal threshold:** The point at which you conclude the assumption is likely false.
5. **Duration:** How long the experiment will run.
6. **Sample size:** How many customers or observations you need.
7. **Cost:** The maximum you will spend.
8. **Minimum viable design:** The simplest version of the test that provides a clear signal.

### Designing for Signal, Not Noise

**Define success and failure thresholds in advance:**
Do not run experiments without deciding what results would change your behavior. If success would cause you to proceed and failure would cause you to pivot, define those thresholds before starting.

```
Bad: "We will run ads and see how it goes."
Good: "If CPA is under $50 and signup rate is above 5%, we proceed to build.
      If CPA is above $100 or signup rate is below 2%, we pivot to a different segment."
```

**One variable at a time:**
Test one assumption per experiment. If you test multiple variables simultaneously, you cannot attribute the result.

```
Bad: "We will launch a new landing page with a different price and new messaging."
Good: "We will test new messaging at the same price. If it converts, we will test price separately."
```

**Minimize drop-off points:**
Every step in your experiment flow loses some percentage of candidates. Minimize the steps to maximize signal strength.

```
Bad: "We will run ads → blog post → email capture → demo request → pilot."
Good: "We will run ads → email capture → pilot. If we cannot get email signups,
      we do not need to test the full funnel yet."
```

**Choose the right sample:**
Your test group must represent your target customer. Testing with your personal network introduces bias that will corrupt your signal.

```
Bad: "I showed the prototype to my friends and they all loved it."
Good: "We showed the prototype to 20 cold outreach targets in our ICP and got 12 demo requests."
```

**Run long enough to see retention:**
Initial interest is not the same as sustained usage. If testing product usage, run at least 30 days.

```
Bad: "500 people signed up in week 1, so we have product-market fit."
Good: "35% of week-1 signups are still active in week 4, and week-4 retention is improving."
```

---

## Common Experiment Mistakes

### Mistake 1: Testing the Wrong Question

Famous example: Juicero spent $118M building a machine to squeeze juice packs. They never tested whether customers would pay extra for convenience versus just buying fresh juice. The assumption they tested ("customers want fresh juice delivered to their door") was not the risky assumption ("customers will pay $400 for a machine to squeeze pre-packaged juice").

**How to avoid:** Identify the most specific, most falsifiable version of your assumption. Do not test a proxy for the real question.

### Mistake 2: Accepting Ambiguous Results

Running an experiment without defining thresholds means you can always interpret the results favorably.

**How to avoid:** Write down your success and failure thresholds before you start. Do not revise them mid-experiment based on how the results look.

### Mistake 3: Confusing Interest with Payment

Landing page signups, social media followers, and email opens are attention, not revenue. Many founders mistake attention for willingness to pay.

**How to avoid:** Ask for money as early as possible in your validation sequence. Even a pre-order or deposit is more signal than an email address.

### Mistake 4: Testing with the Wrong Sample

Personal network tests are systematically biased toward positive results. Your network wants you to succeed and will give you generous feedback.

**How to avoid:** Define your target customer precisely and recruit outside your personal network. Use cold outreach, paid ads to a targeted audience, or partner with companies that have your ICP.

### Mistake 5: Not Running Long Enough

Week-long experiments on a product that customers should use monthly give you only initial adoption, not retention.

**How to avoid:** Minimum 30 days for retention tests. Minimum 60 days if your sales cycle is longer.

### Mistake 6: Ignoring Counter-Signal

Founders often dismiss negative results as "customers do not understand the vision" or "they are not our target customer."

**How to avoid:** Before starting, define who qualifies as a valid test participant. If valid participants consistently say no, accept the signal and update your assumption.

---

## Experiment Speed vs. Rigor

There is a tradeoff between speed (running cheap, fast tests) and rigor (running definitive tests that conclusively validate or disprove an assumption). Match your approach to the stakes.

**Low-stakes decisions:** Use smoke tests. Move fast, spend little, get directional signal. The goal is to avoid spending engineering time on obviously wrong ideas.

**Medium-stakes decisions:** Use concierge or Wizard-of-Oz tests. Spend more time and money, but get behavioral evidence from paying or near-paying customers.

**High-stakes decisions:** Run rigorous experiments with large samples, longer durations, and formal hypothesis testing. Accept that this will be slower and more expensive.

```
Decision stakes:
├─ "Should we build this feature?" → Smoke test (3 days, $200)
├─ "Should we pivot our positioning?" → Wizard-of-Oz test (30 days, $5,000)
├─ "Should we raise at a $20M valuation?" → Deep customer research (60 days, $20,000)
└─ "Should we shut down?" → Comprehensive assumption audit (90 days, cross-functional team)
```

---

## Sequencing Experiments

Run experiments in a sequence that converges on truth as quickly as possible:

1. **Cheapest first:** Start with smoke tests before committing to manual delivery.
2. **Fastest first:** Run 3-day tests before 30-day tests. Exit early if results are clearly negative.
3. **Highest-risk first:** Test the assumptions whose failure would be most damaging, even if those tests are harder to run.
4. **Independent parallel:** Run independent tests simultaneously to compress timeline.
5. **Sequential when dependent:** Run follow-up tests that depend on prior results sequentially.

---

## Interpreting Results

### Positive Signal

Results support the assumption. Before proceeding:
- Validate with a second, independent test method.
- Consider whether the positive result was due to your test design (e.g., personal network) rather than genuine market demand.
- Check whether results generalize to the full target market or only a segment.

### Negative Signal

Results contradict the assumption. Before pivoting:
- Confirm your test was valid (sample, methodology, thresholds).
- Consider whether a pivot is needed or whether the assumption can be reframed.
- Accept negative signals with intellectual honesty. Ignoring them does not make them go away.

### Ambiguous Signal

Results are inconclusive. Before continuing:
- Redesign the experiment with clearer metrics and tighter thresholds.
- Consider whether the assumption is too vague to test and needs to be decomposed.
- Do not indefinitely run inconclusive experiments. Set a maximum duration, then decide based on what you have.

---

## Documentation Requirements

For each experiment, record:

1. **Hypothesis:** The specific assumption being tested.
2. **Experiment design:** The test type, sample, duration, and cost.
3. **Results:** The signal metric and counter-signal metric against your thresholds.
4. **Interpretation:** What the results mean for the assumption.
5. **Updated confidence:** Revised confidence rating (1-5) after this experiment.
6. **Implications:** How results change your strategy, product, or priorities.
7. **Follow-up:** What additional experiments, if any, are needed.

---

## Summary: The Experiment Design Discipline

The founder who runs the right experiments wins. Not because they are smarter, but because they know what they do not know and systematically close the gap.

**The daily practice:**
- Every major decision starts with an explicit assumption.
- Every assumption above the priority threshold gets a designed experiment.
- Every experiment has pre-defined success and failure thresholds.
- Results are documented and trigger belief updates and strategy changes.

**The discipline:**
- Start cheap and fast. Smoke tests before concierge tests before Wizard-of-Oz tests.
- One variable at a time. Causation, not correlation.
- Accept negative signal. The founders who survive are those who pivot on evidence, not faith.
- Move quickly from signal to action. An experiment that takes 3 months to run and 2 months to interpret has failed to give you actionable guidance.

The purpose of experiments is not to confirm what you believe. It is to find out what is actually true, so you can build something people want.
