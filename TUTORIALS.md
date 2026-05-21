# Tutorials - SOLO CORN SKILLS

Practical tutorials and walkthroughs for using SOLO CORN SKILLS.

---

## Table of Contents
1. [Getting Started](#getting-started)
2. [Tutorial 1: Your First Mental Models](#tutorial-1-your-first-mental-models)
3. [Tutorial 2: Validating a Startup Idea](#tutorial-2-validating-a-startup-idea)
4. [Tutorial 3: Building a Product](#tutorial-3-building-a-product)
5. [Tutorial 4: Making Strategic Decisions](#tutorial-4-making-strategic-decisions)
6. [Tutorial 5: Combining Skills](#tutorial-5-combining-skills)
7. [Advanced Patterns](#advanced-patterns)

---

## Getting Started

### Welcome
This tutorial series will guide you through practical usage of SOLO CORN SKILLS. Each tutorial builds on the previous one, showing you how to use the skills effectively.

### What You'll Learn
- How to use each skill individually
- How to combine skills for powerful workflows
- Best practices for decision making and product development
- Real-world application of mental models

### Prerequisites
- Complete [Installation Guide](INSTALLATION.md)
- Read [README.md](README.md) for project overview
- Familiarize yourself with [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

---

## Tutorial 1: Your First Mental Models

**Goal**: Learn how to use mental models for better decision making.

### Step 1: Explore the Mental Models Library

Navigate to the mental models directory:
```bash
cd mental-models
```

Open the main skill documentation:
- Read [mental-models/SKILL.md](mental-models/SKILL.md)

Explore the categories:
- [decision-reasoning/](mental-models/references/decision-reasoning/) - Clear thinking frameworks
- [strategy-competition/](mental-models/references/strategy-competition/) - Strategic thinking
- [systems-complexity/](mental-models/references/systems-complexity/) - Systems thinking
- [psychology-behavior/](mental-models/references/psychology-behavior/) - Human behavior
- [execution-learning/](mental-models/references/execution-learning/) - Getting things done

### Step 2: Pick Your First Model

**Recommendation**: Start with "First Principles"

Read: [mental-models/references/decision-reasoning/](mental-models/references/decision-reasoning/)

#### What is First Principles Thinking?
First principles thinking involves breaking down problems into their most basic components and then reasoning from the ground up.

### Step 3: Apply the Model

**Exercise**: Pick a problem you're facing and apply first principles.

**Template**:
```
Problem: [Your problem here]

What are the basic truths?
1. [Truth 1]
2. [Truth 2]
3. [Truth 3]

What assumptions am I making that might be wrong?
- [Assumption 1]
- [Assumption 2]

Given these basic truths, what are the possible solutions?
1. [Solution 1]
2. [Solution 2]
```

**Example**:
```
Problem: I want to start a business but don't have much capital

What are the basic truths?
1. Businesses solve problems
2. People pay for solutions they value
3. Starting small is possible

What assumptions am I making?
- I need a lot of money to start (maybe not)
- I need a perfect product first (maybe not)

Possible solutions:
1. Start with a service, build capital
2. Create a digital product with low overhead
3. Partner with someone who has resources
```

### Step 4: Add a Second Model

Now add **Second-Order Thinking** - thinking about the consequences of consequences.

**Exercise**: Take your solution from Step 3 and analyze second-order effects.

**Template**:
```
Solution: [Your chosen solution]

First-order effects (direct):
- [Effect 1]
- [Effect 2]

Second-order effects (what happens next):
- [Effect A]
- [Effect B]

Third-order effects (longer term):
- [Effect X]
- [Effect Y]
```

### Step 5: Practice Regularly

**Daily Practice**:
1. Pick one model each day
2. Apply it to a real problem
3. Write down your reasoning
4. Review later and learn from outcomes

**Checkpoint**: You should now feel comfortable using 2-3 mental models.

---

## Tutorial 2: Validating a Startup Idea

**Goal**: Use Landing skill to validate business ideas before committing.

### Step 1: State Your Idea

**Pick an idea** you want to validate - it could be a product, service, or business concept.

Write it down clearly:
```
Idea: [One sentence description]
Target User: [Who is this for?]
Problem Solved: [What pain point does it address?]
```

### Step 2: First Principles Validation

Use the Landing skill to challenge your assumptions:
- Read [landing/SKILL.md](landing/SKILL.md)
- Explore [landing/references/first-principles/](landing/references/first-principles/)

**Question your assumptions**:
```
Assumptions I'm making:
1. [People have this problem]
2. [People will pay for a solution]
3. [I can build this solution]
4. [This is a good time to do this]

For each assumption, ask:
- Do I have evidence this is true?
- How could this be wrong?
- What would disprove this?
```

### Step 3: Idea Clarification

Browse [landing/references/idea-clarification/](landing/references/idea-clarification/)

**Answer these questions**:
```
Who specifically is your customer?
- Demographics: [Age, location, etc.]
- Psychographics: [Values, goals, pain points]
- Behavior: [What do they do now?]

What exactly is the problem?
- When does it occur?
- How painful is it?
- What are they using to solve it now?

What does success look like?
- For the customer: [What outcome do they want?]
- For you: [What makes this worth doing?]
```

### Step 4: Feasibility Check

Check [landing/references/prototyping/](landing/references/prototyping/)

**Assess feasibility**:
```
Technical feasibility:
- Can this be built?
- How long would it take?
- What skills are needed?

Business feasibility:
- Can this make money?
- What are the costs?
- What's the revenue potential?

Personal feasibility:
- Do you have the time?
- Do you have the skills?
- Are you passionate about this?
```

### Step 5: Make a Go/No-Go Decision

**Decision Time**: Based on your analysis, should you pursue this idea?

| Factor | Rating (1-10) | Notes |
|--------|--------------|-------|
| Problem Value | ? | How painful is the problem? |
| Market Size | ? | How many people have this? |
| Competition | ? | Who else is solving this? |
| Your Advantage | ? | What do you bring? |
| Passion Level | ? | How excited are you? |

**Checkpoint**: You should be able to clearly explain why your idea is worth pursuing (or not).

---

## Tutorial 3: Building a Product

**Goal**: Walk through a complete product development process using Product Builder skill.

### Step 1: Idea to Specification

Navigate to product builder:
```bash
cd product-builder
```

Read [product-builder/SKILL.md](product-builder/SKILL.md)

**Create a simple specification**:
```
Product Name: [Your product name]
One-sentence description: [What it does]

Core Features:
1. [Feature 1 - must have]
2. [Feature 2 - must have]
3. [Feature 3 - nice to have]

User Stories:
- As a [user], I want [feature] so that [benefit]
```

Explore references:
- [product-builder/references/idea-validation/](product-builder/references/idea-validation/)
- [product-builder/references/specification/](product-builder/references/specification/)

### Step 2: Define MVP (Minimum Viable Product)

**What's the smallest thing you can build?**

```
MVP Features (only what's essential):
- [Feature 1]
- [Feature 2]
- [Feature 3]

Cut (for later):
- [Nice-to-have 1]
- [Nice-to-have 2]

Why? Because [reason - speed, learning, focus]
```

### Step 3: Break Down the Work

**Create a simple plan**:
```
Phase 1: Foundation
- [ ] Setup basic project structure
- [ ] Create main screens/pages
- [ ] Setup data structure

Phase 2: Core Features
- [ ] Build feature 1
- [ ] Build feature 2
- [ ] Build feature 3

Phase 3: Polish
- [ ] Testing
- [ ] Bug fixes
- [ ] Small improvements

Estimated timeline: [X weeks]
```

### Step 4: Start Building

**Pick a technology** (or use what you know):

Frontend options:
- React (see [product-builder/references/frontend/](product-builder/references/frontend/))
- Vue
- Simple HTML/CSS/JS

Backend options:
- Node.js/Express (see [product-builder/references/backend/](product-builder/references/backend/))
- Python/FastAPI
- Firebase (no backend code needed)

**Just start small**: Build one feature first, get it working, then iterate.

### Step 5: Test and Iterate

**Testing is not optional**:
- Test with real users early
- Get feedback
- Make improvements
- Repeat

See [product-builder/references/testing/](product-builder/references/testing/)

**Checkpoint**: You should have a basic product plan and be ready to start coding.

---

## Tutorial 4: Making Strategic Decisions

**Goal**: Use Strategic Decision skill for business strategy.

### Step 1: Market Analysis

Start with market research:
- Read [strategic-decision/SKILL.md](strategic-decision/SKILL.md)
- Explore [strategic-decision/references/market-analysis/](strategic-decision/references/market-analysis/)

**Answer these questions**:
```
Industry: [What industry are you in?]
Market Size: [How big is this market?]
Growth Rate: [Is it growing? How fast?]
Trends: [What's changing in this space?]
```

### Step 2: Competitive Analysis

**Who else is doing this?**
- See [strategic-decision/references/competitive-strategy/](strategic-decision/references/competitive-strategy/)

**Create a simple comparison**:
| Competitor | Strengths | Weaknesses | Price |
|------------|-----------|------------|-------|
| Company A | [What they do well] | [What they do poorly] | [Price] |
| Company B | [What they do well] | [What they do poorly] | [Price] |
| Your Idea | [Your strengths] | [Your weaknesses] | [Your pricing] |

### Step 3: Business Model

**How will you make money?**
- Explore [strategic-decision/references/business-model/](strategic-decision/references/business-model/)

**Options**:
- Subscription (monthly/yearly fees)
- One-time purchase
- Freemium (free + paid tiers)
- Marketplace (take a cut)
- Advertising

**Pick one and detail it**:
```
Revenue Model: [Your choice]
Pricing: [How much?]
Customer Acquisition Cost (CAC): [How much to get a customer?]
Lifetime Value (LTV): [How much is a customer worth?]
```

### Step 4: SWOT Analysis

**Strengths, Weaknesses, Opportunities, Threats**:

```
Strengths (Internal, positive):
- [What you do well]
- [Your advantages]

Weaknesses (Internal, negative):
- [What you don't do well]
- [Your disadvantages]

Opportunities (External, positive):
- [Market trends you can leverage]
- [Changes you can capitalize on]

Threats (External, negative):
- [Competitors]
- [Market changes]
- [Risks]
```

### Step 5: Make a Decision

**Given all this, what's your strategy?**

```
Strategic Choice: [What will you focus on?]

Why?
- [Reason 1]
- [Reason 2]
- [Reason 3]

What will you NOT do?
- [Thing 1]
- [Thing 2]

Key Metrics to Track:
- [Metric 1]
- [Metric 2]
```

**Checkpoint**: You should have a clear strategic direction.

---

## Tutorial 5: Combining Skills

**Goal**: Use multiple skills together for a complete workflow.

### The Power of Skill Combinations

One skill is useful, but combining them is powerful.

### Example Workflow 1: Idea to Launch

**Scenario**: You have a vague idea and want to take it all the way.

**Skill Sequence**:
1. **Landing** - Validate the idea, challenge assumptions
2. **Mental Models** - Think about the problem clearly
3. **Strategic Decision** - Analyze market and competition
4. **Product Builder** - Build the product
5. **Marketing Growth** - Launch and grow

**Step-by-Step**:
```
1. Use Landing to validate
   - Challenge assumptions
   - Clarify the idea
   - Check feasibility

2. Use Mental Models to think clearly
   - First Principles - What are the basics?
   - Second-Order Thinking - What are consequences?
   - Probabilistic Thinking - What are the odds?

3. Use Strategic Decision to analyze market
   - Market analysis
   - Competitive landscape
   - Business model

4. Use Product Builder to build
   - Specification
   - MVP definition
   - Development

5. Use Marketing Growth to launch
   - Go-to-market strategy
   - Content strategy
   - Customer acquisition
```

### Example Workflow 2: Decision Making Under Uncertainty

**Scenario**: You have a big decision to make with limited information.

**Skill Sequence**:
1. **Collector** - Frame the decision, identify what skills you need
2. **Research Integration** - Gather information
3. **Mental Models** - Think systematically
4. **Strategic Decision** - Analyze options

**Step-by-Step**:
```
1. Use Collector to frame the decision
   - What's the problem?
   - What information do I need?
   - What skills would help?

2. Use Research Integration to gather
   - What do experts say?
   - What's the research?
   - What can I learn from similar situations?

3. Use Mental Models to analyze
   - Bayes Theorem - Update beliefs as you learn
   - Opportunity Cost - What are you giving up?
   - Inversion - What would failure look like, how to avoid?

4. Use Strategic Decision to choose
   - List options
   - Pros and cons
   - Make the decision

5. Document and learn from outcomes
```

### Example Workflow 3: Learning Something New

**Scenario**: You need to quickly learn a new domain or skill.

**Skill Sequence**:
1. **Connector** - Rapid learning approach
2. **Research Integration** - Understand the field
3. **Mental Models** - Deepen understanding
4. **Product Builder** - Apply by building

**Step-by-Step**:
```
1. Use Connector for rapid learning
   - 5-hour approach
   - Find key concepts
   - Make connections to what you know

2. Use Research Integration
   - What are the foundational papers?
   - Who are the experts?
   - What are the key insights?

3. Use Mental Models
   - What models apply to this field?
   - How can thinking frameworks help?

4. Use Product Builder - Build something
   - The best way to learn is to do
   - Create a small project
   - Teach others what you learned
```

### Create Your Own Workflow

**Exercise**: Think about a goal you have. What skill combination would help?

**Your Turn**:
```
My Goal: [What you want to achieve]

Skills I'll Use:
1. [Skill 1] - For [purpose]
2. [Skill 2] - For [purpose]
3. [Skill 3] - For [purpose]

My Plan:
- Step 1: [Use Skill X to...]
- Step 2: [Use Skill Y to...]
- Step 3: [Use Skill Z to...]
```

---

## Advanced Patterns

### Pattern 1: Decision Audit

**After making a decision, review it later**:

```
Decision Made: [What you decided]
Date: [When you decided]

What happened?
- [Outcome]

What went well in my decision process?
- [Thing 1]
- [Thing 2]

What could have been better?
- [Thing 1]
- [Thing 2]

What did I learn?
- [Lesson 1]
- [Lesson 2]

How will I decide differently next time?
- [Change 1]
```

### Pattern 2: Weekly Review

**Every week, take time to reflect**:

```
Week of: [Date]

What went well this week?
- [Win 1]
- [Win 2]

What didn't go well?
- [Challenge 1]
- [Challenge 2]

What mental models helped?
- [Model 1]
- [Model 2]

What should I focus on next week?
- [Priority 1]
- [Priority 2]
```

### Pattern 3: Skill Rotation

**Don't just use the same skills repeatedly**:

```
Week 1: Focus on Mental Models
Week 2: Focus on Strategic Decision
Week 3: Focus on Product Builder
Week 4: Try combining multiple skills
```

This keeps your thinking fresh and helps you learn new approaches.

---

## Next Steps

You've completed the tutorials! Now:

1. **Practice regularly** - Skills improve with use
2. **Contribute back** - See [CONTRIBUTING.md](CONTRIBUTING.md)
3. **Join the community** - Share your experiences
4. **Create your own tutorials** - Help others learn

---

*Last Updated: 2026-05-21*
*Version: 1.0.0*
