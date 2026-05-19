# Market Sizing & TAM/SAM/SOM Analysis

## Introduction
Market sizing is the process of estimating the total potential revenue opportunity for a product or service. It helps stakeholders understand the scale of the opportunity and make informed investment decisions. The TAM/SAM/SOM framework provides a structured approach to market sizing that balances ambition with realism.

## Core Concepts

### TAM (Total Addressable Market)
The total revenue opportunity available if 100% market share is achieved with no competition.

**Definition:** The entire market demand for a product or service across all geographies and customer segments.

### SAM (Serviceable Available Market)
The segment of the TAM that your product can realistically reach and serve.

**Definition:** The portion of the TAM that your business can address with its current capabilities, geographic reach, and product offering.

### SOM (Serviceable Obtainable Market)
The segment of the SAM that your business can realistically capture within a specific timeframe (typically 3-5 years).

**Definition:** The realistic market share target for your business in the short-to-medium term.

## TAM/SAM/SOM Framework

### Relationship Between TAM, SAM, and SOM
```
┌─────────────────────────────────────────────────┐
│                    TAM                          │
│  ┌───────────────────────────────────────────┐ │
│  │                SAM                       │ │
│  │  ┌─────────────────────────────────────┐ │ │
│  │  │           SOM                       │ │ │
│  │  └─────────────────────────────────────┘ │ │
│  └───────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

## TAM Calculation Methods

### Method 1: Top-Down Approach
Start with a large macro number and narrow down to your specific market.

#### Steps:
1. Identify a relevant industry-wide metric
2. Apply filters to refine to your specific segment
3. Calculate total revenue opportunity

#### Formula:
```
TAM = (Total Population × Penetration Rate × Average Revenue Per User)
```

#### Example:
```
Top-Down Calculation for Project Management SaaS

1. Global software market: $600B
2. Enterprise software: 60% = $360B
3. SaaS segment: 40% = $144B
4. Project management SaaS: 8% = $11.5B
→ TAM = $11.5B
```

### Method 2: Bottom-Up Approach
Build up from individual customer units to total market size.

#### Steps:
1. Identify number of potential customers
2. Estimate average revenue per customer
3. Multiply to get total market size

#### Formula:
```
TAM = (Number of Potential Customers × Average Revenue Per Customer)
```

#### Example:
```
Bottom-Up Calculation for Project Management SaaS

1. Total SMBs worldwide: 125 million
2. Relevant verticals (tech, professional services): 15% = 18.75M
3. Companies with 10-500 employees: 20% = 3.75M
4. ARPU: $300/year
→ TAM = 3.75M × $300 = $1.125B
```

### Method 3: Value Theory Approach
Estimate based on the value your product creates for customers.

#### Steps:
1. Quantify value delivered to customers (cost savings, revenue increases)
2. Estimate willingness to pay
3. Multiply by potential customer base

#### Formula:
```
TAM = (Number of Customers × Value Created × Willingness-to-Pay Percentage)
```

#### Example:
```
Value Theory Calculation for Project Management SaaS

1. Potential customers: 500,000
2. Average time saved per team: 10 hours/week
3. Hourly cost: $50
4. Annual value: 10hrs × $50 × 52 weeks = $26,000/year
5. Willingness to pay: 10% of value = $2,600/year
→ TAM = 500,000 × $2,600 = $1.3B
```

## SAM Calculation

### SAM Refinement Criteria
Filter TAM by:
- **Geographic constraints:** Countries/regions you can serve
- **Product constraints:** Features/capabilities you offer
- **Customer constraints:** Segments you can effectively reach
- **Price constraints:** Customers who can afford your product

### SAM Template
```
SAM Calculation Worksheet
==========================

Base TAM: $[X]

Refinement Filters:
1. Geographic: [Regions you serve] - [Y]% of TAM
2. Customer Type: [Segments you target] - [Z]%
3. Price Point: [Customers who can afford] - [A]%
4. Product Fit: [Customers who need your features] - [B]%

Total SAM: $[X] × [Y]% × [Z]% × [A]% × [B]% = $[Final SAM]
```

### Example:
```
SAM Calculation for Project Management SaaS

Base TAM (Bottom-Up): $1.125B

Refinements:
1. Geographic: US/EU only (60% of market) → × 0.6
2. Customer Type: Tech companies only (30% of SMBs) → × 0.3
3. Price Point: $20-50/month (40% of target) → × 0.4
4. Product Fit: Need collaboration features (80%) → × 0.8

SAM = $1.125B × 0.6 × 0.3 × 0.4 × 0.8 = $64.8M
```

## SOM Calculation

### SOM Factors
Consider:
- **Market penetration rate:** What similar companies achieve
- **Competitive landscape:** Number and strength of competitors
- **Go-to-market capacity:** Your sales/marketing resources
- **Time horizon:** Typically 3-5 years

### SOM Template
```
SOM Calculation Worksheet
==========================

Base SAM: $[X]
Time Horizon: [3-5 years]

Factors:
1. Comparable company penetration: [Y]%
2. Competitive intensity adjustment: [+/- Z]%
3. GTM resource adjustment: [+/- A]%
4. Product advantage adjustment: [+/- B]%

Target SOM Penetration: [C]%
SOM Revenue Target: $[X] × [C]% = $[Final SOM]
```

### Example:
```
SOM Calculation for Project Management SaaS

Base SAM: $64.8M
Time Horizon: 3 years

Factors:
1. Comparable startups: 2-5% penetration in 3 years
2. Competitive intensity: High (many players) → -1%
3. GTM resources: Moderate → 0%
4. Product advantage: Strong differentiation → +1%

Target SOM Penetration: 3%
SOM Revenue Target: $64.8M × 3% = $1.94M (Year 3)
```

## Market Sizing Worksheet Template

```
MARKET SIZING ANALYSIS
======================
Product/Service: [Name]
Date: [Date]
Prepared by: [Name]

1. TAM CALCULATION
------------------
Method: [Top-Down/Bottom-Up/Value Theory]
Calculation:
[Show your math]
TAM Estimate: $[X]
Confidence: [Low/Medium/High]
Sources: [Data sources]

2. SAM CALCULATION
------------------
Refinements from TAM:
- [Filter 1]: [Description] - [Y]%
- [Filter 2]: [Description] - [Z]%
- [Filter 3]: [Description] - [A]%
SAM Estimate: $[X]
Confidence: [Low/Medium/High]

3. SOM CALCULATION
------------------
Time Horizon: [Years]
Target Penetration: [Y]%
SOM Estimate: $[X]
Confidence: [Low/Medium/High]

4. KEY ASSUMPTIONS
------------------
- [Assumption 1]
- [Assumption 2]
- [Assumption 3]

5. SENSITIVITY ANALYSIS
------------------------
Scenario          TAM        SAM        SOM
Base Case         $[X]      $[Y]      $[Z]
Optimistic (+20%) $[X]      $[Y]      $[Z]
Pessimistic (-20%)$[X]      $[Y]      $[Z]

6. DATA SOURCES
----------------
- [Source 1]
- [Source 2]
- [Source 3]
```

## Data Sources for Market Sizing

### Primary Sources
- Customer surveys and interviews
- Pilot program results
- Sales pipeline data

### Secondary Sources
- Industry reports (Gartner, Forrester, IDC)
- Government statistics
- Public company financials (10-K, annual reports)
- Market research databases
- Trade associations
- News and industry publications

## Sensitivity Analysis

### Why Sensitivity Analysis Matters
Market sizing estimates are based on assumptions. Sensitivity analysis shows how changes in assumptions affect outcomes.

### Template:
```
SENSITIVITY MATRIX
==================

Variable          -20%       Base       +20%
Customer Count    $[X]      $[Y]      $[Z]
ARPU              $[X]      $[Y]      $[Z]
Penetration Rate  $[X]      $[Y]      $[Z]
```

## Common Pitfalls to Avoid

1. **Confusing TAM with SOM:** Don't present TAM as your realistic opportunity
2. **Using outdated data:** Market conditions change rapidly
3. **Ignoring competitive dynamics:** SOM must account for competition
4. **Overly optimistic assumptions:** Be conservative, especially for SOM
5. **Mixing methodologies:** Be consistent in your approach
6. **Not validating with customers:** Primary research beats secondary data

## Best Practices

1. **Use multiple methods:** Calculate TAM using top-down, bottom-up, and value theory for triangulation
2. **Document all assumptions:** Make every assumption explicit and verifiable
3. **Update regularly:** Refresh your market sizing at least annually
4. **Be transparent:** Show your math and data sources
5. **Balance ambition with realism:** TAM inspires, SOM grounds
6. **Validate with customers:** Test your assumptions with real prospects

## Example: Complete Market Sizing Analysis

```
COMPLETE MARKET SIZING EXAMPLE
==============================
Product: AI-Powered Customer Support Chatbot
Date: January 2026

1. TAM CALCULATIONS
------------------

Top-Down:
- Global customer support software market: $25B (Gartner)
- Chatbot segment: 20% = $5B
- TAM = $5B

Bottom-Up:
- Total businesses with customer support teams: 10M
- Target: B2B companies with 50-500 employees: 2M
- ARPU: $5,000/year
- TAM = 2M × $5,000 = $10B

Value Theory:
- Support ticket volume: 1,000 tickets/month/company
- Cost per ticket: $15
- Chatbot deflection: 40% = $6,000/month savings
- Willingness to pay: 30% of savings = $1,800/month = $21,600/year
- Potential customers: 500,000
- TAM = 500,000 × $21,600 = $10.8B

→ CONSENSUS TAM: $5-10B

2. SAM CALCULATION
------------------
Refinements:
- Geographic: US/Canada/EU (50% of market) → × 0.5
- Industry: SaaS/eCommerce/FinTech only (30%) → × 0.3
- Price Point: $1,000-10,000/year (60%) → × 0.6
- Product Fit: Need AI capabilities (80%) → × 0.8

SAM = $7.5B (midpoint) × 0.5 × 0.3 × 0.6 × 0.8 = $540M

3. SOM CALCULATION
------------------
Time Horizon: 3 years
Factors:
- Comparable startups: 1-3% penetration
- Competition: Moderate
- GTM: Strong founding team with domain expertise
- Product: Proprietary AI technology

Target Penetration: 2%
SOM = $540M × 2% = $10.8M (Year 3 ARR)

4. KEY ASSUMPTIONS
------------------
- Market growth rate: 15% CAGR
- Chatbot adoption rate increasing by 25% annually
- Customer churn: 10% annually
- ARPU expansion: 20% Year 2, 15% Year 3

5. SENSITIVITY ANALYSIS
------------------------
Scenario          TAM        SAM        SOM
Base Case         $7.5B     $540M     $10.8M
Optimistic        $10B      $720M     $14.4M
Pessimistic       $5B       $360M     $7.2M
```

## Conclusion

Market sizing is both art and science. While precision is impossible, a well-executed TAM/SAM/SOM analysis provides:
- A realistic view of opportunity scale
- A basis for investment decisions
- A framework for goal setting
- A way to communicate with stakeholders

The goal isn't perfection—it's building a defensible, data-driven case for your market opportunity.
