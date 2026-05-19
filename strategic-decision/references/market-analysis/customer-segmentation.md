# Customer Segmentation & Targeting Frameworks

## Introduction
Customer segmentation is the practice of dividing a customer base into distinct groups of individuals that share similar characteristics. Effective segmentation enables targeted marketing, personalized product experiences, and efficient resource allocation.

## Core Segmentation Criteria

### 1. Demographic Segmentation
Dividing the market based on measurable personal characteristics.

| Criterion | Examples |
|-----------|----------|
| Age | 18-24, 25-34, 35-44, 45+ |
| Gender | Male, Female, Non-binary |
| Income | Under $30k, $30-60k, $60-100k, $100k+ |
| Education | High school, Bachelor's, Master's, PhD |
| Occupation | Engineer, Teacher, Doctor, Entrepreneur |
| Marital Status | Single, Married, Divorced |
| Family Size | 1, 2, 3-4, 5+ |
| Location | Country, Region, City, Urban/Rural |

### 2. Geographic Segmentation
Dividing the market based on geographic boundaries.

**Key Dimensions:**
- **Global:** Continent, Country, Region
- **Regional:** State, Province, City
- **Local:** Neighborhood, Zip/Postal code
- **Climate:** Tropical, Temperate, Arctic
- **Population Density:** Urban, Suburban, Rural

### 3. Psychographic Segmentation
Dividing the market based on lifestyle, personality, values, and interests.

**Key Dimensions:**
- **Lifestyle:** Activities, interests, opinions (AIO)
- **Personality:** Introvert/Extrovert, Risk-taker/Risk-averse
- **Values:** Achievement, Belonging, Security, Self-expression
- **Social Class:** Working, Middle, Upper
- **Attitudes:** Towards technology, environment, health

### 4. Behavioral Segmentation
Dividing the market based on actual customer behavior.

**Key Dimensions:**
- **Usage Rate:** Light, Medium, Heavy users
- **User Status:** Non-user, First-time, Regular, Lapsed
- **Loyalty Status:** None, Medium, Strong, Absolute
- **Benefits Sought:** Quality, Price, Convenience, Status
- **Purchase Occasion:** Regular, Special occasion, Emergency
- **Readiness Stage:** Unaware, Aware, Interested, Desiring, Ready to buy

## Segmentation Frameworks

### Framework 1: RFM Analysis
RFM = Recency, Frequency, Monetary Value

**Definition:** A behavioral segmentation method that ranks customers based on:
- **Recency:** How recently they purchased
- **Frequency:** How often they purchase
- **Monetary Value:** How much they spend

**RFM Template:**
```
RFM ANALYSIS WORKSHEET
======================

Scoring Scale: 1-5 (5 = Best)

Customer      Recency (Days)  R Score  Frequency (Purchases)  F Score  Monetary Value ($)  M Score  Total Score
------------------------------------------------------------------------------------------------------------
Customer A    [X]             [X]      [X]                    [X]      [X]                [X]      [X]
Customer B    [X]             [X]      [X]                    [X]      [X]                [X]      [X]

SEGMENTATION BY COMBINATION:
- Champions: R=5, F=5, M=5
- Loyal Customers: R=4-5, F=4-5, M=4-5
- Potential Loyalists: R=4-5, F=2-4, M=2-4
- New Customers: R=5, F=1, M=1-2
- Promising: R=4, F=1, M=3-4
- Need Attention: R=3, F=2-3, M=2-3
- Can't Lose Them: R=1-2, F=4-5, M=4-5
- At Risk: R=1-2, F=2-4, M=2-4
- Hibernating: R=2-3, F=1-2, M=1-2
- Lost: R=1, F=1, M=1
```

**Example:**
```
RFM EXAMPLE: E-COMMERCE BRAND
=============================

Champions (R5F5M5):
- 5% of customers, 40% of revenue
- Strategy: VIP treatment, exclusive offers, referral program

Loyal Customers (R4-5F4-5M4-5):
- 15% of customers, 30% of revenue
- Strategy: Rewards program, early access to new products

Potential Loyalists (R4-5F2-4M2-4):
- 20% of customers, 15% of revenue
- Strategy: Upsell, cross-sell, personalized recommendations

New Customers (R5F1M1-2):
- 15% of customers, 5% of revenue
- Strategy: Onboarding sequence, welcome offers

At Risk (R1-2F2-4M2-4):
- 10% of customers, 5% of revenue
- Strategy: Re-engagement campaigns, win-back offers

Lost (R1F1M1):
- 35% of customers, 5% of revenue
- Strategy: Low-priority, occasional outreach
```

### Framework 2: VALS™ (Values, Attitudes, and Lifestyles)
A psychographic framework that classifies consumers into 8 segments based on two dimensions:
- **Primary Motivation:** Ideals, Achievement, Self-Expression
- **Resources:** High vs. Low

**VALS Segments:**
```
┌─────────────────────────────────────────────────────────────────┐
│                        HIGH RESOURCES                           │
├──────────────────┬──────────────────┬────────────────────────────┤
│   Innovators     │    Thinkers      │                            │
│   (High ideals)  │   (Achievers)    │   Experiencers             │
│                  │                  │   (Self-expression)        │
├──────────────────┼──────────────────┼────────────────────────────┤
│   Survivors      │    Believers     │   Makers                   │
│                  │   (Strivers)     │                            │
└──────────────────┴──────────────────┴────────────────────────────┘
│                        LOW RESOURCES                            │
└─────────────────────────────────────────────────────────────────┘
```

### Framework 3: Jobs to Be Done (JTBD)
Focuses on understanding what customers are trying to accomplish, not just who they are.

**JTBD Template:**
```
JOBS TO BE DONE ANALYSIS
========================

Job Statement: "[Verb] [Object] [Contextual Clarifier]"
e.g., "Help my team stay aligned on projects when working remotely"

Core Job: [Main goal]
Related Jobs:
- [Related job 1]
- [Related job 2]
- [Related job 3]

Job Context:
- When: [Situation]
- Where: [Location]
- With whom: [People involved]

Desired Outcomes:
1. [Outcome 1] - Importance: [1-5], Satisfaction: [1-5]
2. [Outcome 2] - Importance: [1-5], Satisfaction: [1-5]
3. [Outcome 3] - Importance: [1-5], Satisfaction: [1-5]

Pain Points:
1. [Pain 1]
2. [Pain 2]
3. [Pain 3]

Current Solutions:
- [Solution 1]
- [Solution 2]
```

### Framework 4: B2B Segmentation
For business customers, use these additional criteria:

| Criterion | Examples |
|-----------|----------|
| Company Size | Small (1-50), Medium (51-500), Enterprise (500+) |
| Industry | Tech, Healthcare, Finance, Retail, Manufacturing |
| Revenue | Under $1M, $1M-10M, $10M-100M, $100M+ |
| Number of Employees | 1-10, 11-50, 51-200, 200+ |
| Decision-Making Process | Centralized, Decentralized, Committee-based |
| Technology Stack | AWS, Azure, Google Cloud, Salesforce |
| Growth Stage | Startup, Growth, Mature, Declining |

## Segmentation Process

### Step 1: Define Objectives
```
SEGMENTATION OBJECTIVES
=======================
Primary Goal: [e.g., Improve conversion rates, Reduce churn]
Success Metrics:
- [Metric 1]
- [Metric 2]
- [Metric 3]
```

### Step 2: Collect Data
**Data Sources:**
- Customer surveys
- Website analytics
- CRM data
- Purchase history
- Support tickets
- Social media
- Third-party data providers

### Step 3: Explore & Clean Data
**Checklist:**
- [ ] Remove duplicates
- [ ] Handle missing values
- [ ] Normalize/standardize data
- [ ] Remove outliers
- [ ] Validate data accuracy

### Step 4: Choose Segmentation Method
**Decision Factors:**
- Business goals
- Data availability
- Market complexity
- Implementation resources

### Step 5: Create Segments
**Segment Criteria:**
- **Measurable:** Can quantify size and characteristics
- **Accessible:** Can reach through marketing channels
- **Substantial:** Large enough to be profitable
- **Actionable:** Can design specific strategies
- **Differentiable:** Responds differently to strategies

### Step 6: Profile & Name Segments
**Segment Profile Template:**
```
SEGMENT PROFILE
===============
Segment Name: [Descriptive Name]
Size: [X] customers / [Y]% of total
Revenue Contribution: [Z]%

DEMOGRAPHICS:
- Age: [Range]
- Gender: [Distribution]
- Income: [Range]
- Location: [Geography]

PSYCHOGRAPHICS:
- Values: [What matters to them]
- Lifestyle: [How they live]
- Interests: [What they care about]

BEHAVIORS:
- Purchase frequency: [X] times/year
- Average order value: $[X]
- Brand loyalty: [Low/Medium/High]
- Channel preference: [Email/Social/Search]

NEEDS & PAINS:
- Primary need: [What they want]
- Top pain points: [What frustrates them]
- Unmet needs: [What they're missing]

VALUE PROPOSITION:
- What matters most: [Key value driver]
- How to reach them: [Channels]
- Messaging angle: [Tone/approach]
```

### Step 7: Evaluate & Prioritize Segments
**Segment Evaluation Matrix:**
```
SEGMENT EVALUATION
==================

Segment Name    Market Size  Growth Rate  Profit Margin  Accessibility  Fit with Capabilities  Priority
--------------------------------------------------------------------------------------------------------
Segment A       [X]          [X]%         [X]%           [Low/Med/High] [1-5]                  [High/Med/Low]
Segment B       [X]          [X]%         [X]%           [Low/Med/High] [1-5]                  [High/Med/Low]
```

### Step 8: Develop Strategies
**Strategy Template:**
```
SEGMENT STRATEGY
================
Target Segment: [Name]
Objective: [What to achieve]
Timeframe: [X months]

POSITIONING:
- Value proposition: [Statement]
- Key message: [Core message]
- Brand voice: [Tone]

MARKETING TACTICS:
- Channel 1: [Tactic]
- Channel 2: [Tactic]
- Channel 3: [Tactic]

PRODUCT ADAPTATIONS:
- Feature 1: [Adaptation]
- Feature 2: [Adaptation]

PRICING STRATEGY:
- Model: [Subscription/One-time/Freemium]
- Price point: $[X]

SUCCESS METRICS:
- [Metric 1]: Target [X]
- [Metric 2]: Target [X]
- [Metric 3]: Target [X]
```

## Persona Development

### Persona Template
```
CUSTOMER PERSONA
================
Name: [First Name + Descriptor]
Photo/Icon: [Description]
Quote: "[Representative quote]"

DEMOGRAPHICS:
- Age: [X]
- Location: [City, State]
- Occupation: [Job Title]
- Income: [$X-$Y]
- Education: [Degree]
- Family Status: [Single/Married/Kids]

BACKGROUND:
- Work experience: [Brief history]
- Goals: [Personal/professional goals]
- Challenges: [What they struggle with]

BEHAVIORS:
- Daily habits: [Routine activities]
- Media consumption: [Where they get information]
- Purchase behavior: [How they buy]
- Brand preferences: [Companies they like]

PSYCHOGRAPHICS:
- Values: [What matters most]
- Personality: [Traits]
- Interests: [Hobbies/passions]

PAIN POINTS:
1. [Primary pain]
2. [Secondary pain]
3. [Tertiary pain]

NEEDS:
1. [Primary need]
2. [Secondary need]
3. [Tertiary need]

HOW WE HELP:
- [Solution to pain 1]
- [Solution to pain 2]
- [Solution to pain 3]

MESSAGING:
- Headline: [Catchy headline]
- Key benefits: [3 bullet points]
- Call to action: [What we want them to do]
```

### Example Persona
```
PERSONA: SARAH THE PRODUCT MANAGER
==================================
Name: Sarah Chen
Photo/Icon: Professional woman in 30s with laptop
Quote: "I need tools that make my life easier, not more complicated."

DEMOGRAPHICS:
- Age: 32
- Location: San Francisco, CA
- Occupation: Senior Product Manager
- Income: $145,000/year
- Education: MBA from Stanford
- Family Status: Married, no kids yet

BACKGROUND:
- Work experience: 8 years in tech, 4 years as PM
- Goals: Launch a successful product, advance to Director, find work-life balance
- Challenges: Too many meetings, competing priorities, keeping stakeholders aligned

BEHAVIORS:
- Daily habits: Early-morning workout, 2-3 hours of email, evening reading
- Media consumption: Tech blogs (TechCrunch), podcasts (Product Hunt), LinkedIn
- Purchase behavior: Researches extensively, asks peers for recommendations, willing to pay for quality
- Brand preferences: Apple, Notion, Figma, Superhuman

PSYCHOGRAPHICS:
- Values: Efficiency, quality, continuous learning
- Personality: Organized, analytical, slightly impatient
- Interests: Hiking, cooking, personal development

PAIN POINTS:
1. Too many status update meetings eating into productive time
2. Difficult to get real-time visibility into project progress
3. Stakeholders have conflicting priorities

NEEDS:
1. Streamline communication without losing transparency
2. Better project tracking and reporting
3. Clear alignment on priorities

HOW WE HELP:
- Automated status updates that reduce meeting time by 30%
- Real-time project dashboards with customizable views
- Priority matrix that aligns stakeholders

MESSAGING:
- Headline: "Get your time back. Ship faster."
- Key benefits:
  - Cut status meetings by 30%
  - Real-time visibility into all projects
  - Align stakeholders automatically
- Call to action: "Start your free trial"
```

## Targeting Strategies

### Strategy 1: Undifferentiated (Mass) Marketing
Ignore segment differences and target the whole market with one offer.

**When to use:**
- Product has universal appeal
- High market homogeneity
- Limited resources

**Example:** Basic commodities like salt or sugar

### Strategy 2: Differentiated (Segmented) Marketing
Target multiple segments with different offers.

**When to use:**
- Diverse market needs
- Strong competition
- Sufficient resources

**Example:** Toyota (Camry for families, Supra for enthusiasts, Prius for eco-conscious)

### Strategy 3: Concentrated (Niche) Marketing
Target one or a few small segments.

**When to use:**
- Limited resources
- Specific expertise
- Underserved segments

**Example:** Luxury watch brands targeting high-net-worth individuals

### Strategy 4: Micromarketing (Hyper-segmentation)
Tailor products to individual customers or very small segments.

**Sub-types:**
- **Local marketing:** Tailor to specific cities/neighborhoods
- **Individual marketing:** Mass customization

**When to use:**
- Rich customer data
- Advanced personalization capabilities
- High customer lifetime value

**Example:** Netflix recommendations, Spotify playlists

## Implementation Roadmap

### Phase 1: Foundation (Weeks 1-4)
- [ ] Define segmentation objectives
- [ ] Identify data sources
- [ ] Collect existing customer data
- [ ] Set up data infrastructure

### Phase 2: Analysis (Weeks 5-8)
- [ ] Clean and prepare data
- [ ] Conduct exploratory analysis
- [ ] Apply segmentation algorithm
- [ ] Validate segment quality

### Phase 3: Development (Weeks 9-12)
- [ ] Create segment profiles
- [ ] Develop personas
- [ ] Evaluate segment attractiveness
- [ ] Prioritize target segments

### Phase 4: Execution (Weeks 13-24)
- [ ] Develop segment-specific strategies
- [ ] Create targeted content
- [ ] Launch campaigns
- [ ] Monitor performance

### Phase 5: Optimization (Ongoing)
- [ ] Track segment metrics
- [ ] Refine segmentation
- [ ] Update personas
- [ ] Iterate strategies

## Common Pitfalls & How to Avoid Them

| Pitfall | Description | Solution |
|---------|-------------|----------|
| Over-segmentation | Creating too many small, unprofitable segments | Test segment viability before commitment |
| Static segmentation | Not updating as market changes | Review segments quarterly/annually |
| Data-only segmentation | Ignoring qualitative insights | Combine data with customer interviews |
| Irrelevant criteria | Using variables that don't correlate with behavior | Validate with correlation analysis |
| One-size-fits-all | Same strategy for all segments | Develop distinct approaches |

## Success Metrics

| Metric | Definition | Target |
|--------|------------|--------|
| Segment Growth | % increase in target segment size | [X]% |
| Conversion Rate | % of segment that converts | [X]% |
| Customer Lifetime Value (CLV) | Total revenue per customer in segment | $[X] |
| Customer Acquisition Cost (CAC) | Cost to acquire customer in segment | $[X] |
| Retention Rate | % of customers retained | [X]% |
| Segment Profitability | Revenue - costs per segment | [X]% margin |

## Conclusion

Effective customer segmentation is the foundation of targeted, efficient marketing. By understanding who your customers are and what they need, you can:
- Deliver more relevant experiences
- Allocate resources more effectively
- Build stronger customer relationships
- Drive sustainable growth

The goal isn't to create the most segments—it's to create the right segments that enable meaningful action.
