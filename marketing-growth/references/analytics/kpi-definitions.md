# Marketing Analytics Framework

## 1. KPI Definition Templates

### 1.1 Core Marketing KPIs

```
Marketing KPI Definitions
========================

1. CUSTOMER ACQUISITION KPIs

1.1 Customer Acquisition Cost (CAC)
------------------------------------
Formula: (Total Marketing Costs + Sales Costs) / New Customers
Definition: Average cost to acquire one new customer
Baseline: [Current value]
Target: [Goal - e.g., 20% reduction]
Frequency: Monthly
Source: CRM, Marketing automation

1.2 Marketing Qualified Leads (MQL)
------------------------------------
Definition: Leads that meet marketing criteria for sales follow-up
Baseline: [Current value]
Target: [X per month]
Frequency: Weekly
Source: Marketing automation

1.3 Sales Qualified Leads (SQL)
--------------------------------
Definition: Leads accepted by sales for follow-up
Baseline: [Current value]
Target: [X per month]
Frequency: Weekly
Source: CRM

1.4 MQL to SQL Conversion Rate
------------------------------
Formula: SQLs / MQLs × 100
Definition: Percentage of MQLs that become SQLs
Baseline: [Current value]
Target: [X%]
Frequency: Weekly
Source: CRM

1.5 Lead-to-Customer Rate
---------------------------
Formula: New Customers / Total Leads × 100
Definition: Percentage of leads that become customers
Baseline: [Current value]
Target: [X%]
Frequency: Monthly
Source: CRM


2. CONVERSION KPIs

2.1 Website Conversion Rate
----------------------------
Formula: Conversions / Visitors × 100
Definition: Percentage of visitors who take desired action
Baseline: [Current value]
Target: [X%]
Frequency: Weekly
Source: Analytics


2.2 Landing Page Conversion Rate
--------------------------------
Formula: Leads / Landing Page Visitors × 100
Definition: Percentage of LP visitors who convert
Baseline: [Current value]
Target: [X%]
Frequency: Weekly
Source: Analytics


2.3 Email Conversion Rate
--------------------------
Formula: Clicks / Opens × 100
Definition: Percentage of opens that click
Baseline: [Current value]
Target: [X%]
Frequency: Per campaign
Source: Email platform


3. ENGAGEMENT KPIs

3.1 Email Open Rate
------------------
Formula: Opens / Delivered × 100
Definition: Percentage of delivered emails opened
Baseline: [Current value]
Target: [X%]
Frequency: Per campaign
Source: Email platform

3.2 Click-Through Rate (CTR)
----------------------------
Formula: Clicks / Impressions × 100
Definition: Percentage of impressions that get clicks
Baseline: [Current value]
Target: [X%]
Frequency: Per campaign
Source: Ad platforms

3.3 Social Engagement Rate
---------------------------
Formula: (Likes + Comments + Shares) / Followers × 100
Definition: Engagement level of audience
Baseline: [Current value]
Target: [X%]
Frequency: Weekly
Source: Social analytics


4. REVENUE KPIs

4.1 Marketing ROI
-----------------
Formula: (Revenue from Marketing - Marketing Costs) / Marketing Costs × 100
Definition: Return on marketing investment
Baseline: [Current value]
Target: [X%]
Frequency: Monthly
Source: CRM, Finance

4.2 Customer Lifetime Value (LTV)
----------------------------------
Formula: Average Purchase Value × Purchase Frequency × Customer Lifespan
Definition: Total revenue expected from a customer
Baseline: [Current value]
Target: [X]
Frequency: Quarterly
Source: CRM, Analytics

4.3 LTV:CAC Ratio
-----------------
Formula: LTV / CAC
Definition: Relationship between customer value and acquisition cost
Baseline: [Current value]
Target: [X:1] (ideal: >3:1)
Frequency: Quarterly
Source: CRM, Finance


5. RETENTION KPIs

5.1 Net Promoter Score (NPS)
----------------------------
Formula: % Promoters - % Detractors
Definition: Customer loyalty metric
Baseline: [Current value]
Target: [X]
Frequency: Quarterly
Source: Survey tool

5.2 Churn Rate
--------------
Formula: Customers Lost / Customers at Start × 100
Definition: Percentage of customers lost
Baseline: [Current value]
Target: [<X%]
Frequency: Monthly
Source: CRM

5.3 Retention Rate
-------------------
Formula: (Customers at End - New Customers) / Customers at Start × 100
Definition: Percentage of customers retained
Baseline: [Current value]
Target: [X%]
Frequency: Monthly
Source: CRM
```

## 2. Marketing Attribution Models

### 2.1 Attribution Model Types

```
Attribution Models
=================

1. LAST-CLICK ATTRIBUTION
--------------------------
Credit: 100% to last touchpoint
Pros: Simple, easy to track
Cons: Ignores early funnel influence
Best for: Short sales cycles
Tools: Google Analytics (default)

2. FIRST-CLICK ATTRIBUTION
---------------------------
Credit: 100% to first touchpoint
Pros: Shows acquisition channels
Cons: Ignores conversion influence
Best for: Brand awareness campaigns
Tools: Google Analytics

3. LINEAR ATTRIBUTION
--------------------
Credit: Equal weight to all touchpoints
Pros: Fair representation
Cons: Equal weight may not reflect impact
Best for: Mid-length sales cycles
Tools: Google Analytics 360, Mixpanel

4. TIME-DECAY ATTRIBUTION
--------------------------
Credit: More to recent touchpoints (decays over time)
Pros: Weights recent engagement
Cons: Undervalues awareness
Best for: B2B with longer cycles
Tools: HubSpot, Marketo

5. POSITION-BASED ATTRIBUTION
------------------------------
Credit: 40% first, 40% last, 20% distributed
Pros: Values awareness and conversion
Cons: Complex setup
Best for: Complex buyer journeys
Tools: Google Analytics 360

6. DATA-DRIVEN ATTRIBUTION
---------------------------
Credit: Algorithm-determined based on data
Pros: Most accurate
Cons: Requires large data sets
Best for: Enterprise with big data
Tools: Google Analytics 360, Adobe Analytics
```

### 2.2 Attribution Model Selection Guide

```
Model Selection Criteria
=======================

Consider these factors:

1. SALES CYCLE LENGTH
   - Short (< 1 week): Last-click
   - Medium (1-4 weeks): Linear or Time-decay
   - Long (> 1 month): Position-based or Data-driven

2. TOUCHPOINT COMPLEXITY
   - Few touchpoints: Any model works
   - Many touchpoints: Linear or Data-driven

3. BUDGET
   - Limited: Last/First-click (free tools)
   - Moderate: Linear (Google Analytics 360)
   - Large: Data-driven (enterprise tools)

4. REPORTING NEEDS
   - Simple reporting: Last/First-click
   - Detailed insights: Position-based or Data-driven
```

## 3. ROI Calculation Frameworks

### 3.1 Marketing ROI Calculator

```
Marketing ROI Calculation
=========================

INPUTS:
--------
Marketing Investment:
- Paid Advertising: $[Amount]
- Content Production: $[Amount]
- Tools & Software: $[Amount]
- Personnel: $[Amount]
- Other: $[Amount]
Total Investment: $[Sum]

Revenue Attribution:
- Directly Tracked Revenue: $[Amount]
- Influenced Revenue: $[Amount]
Total Revenue: $[Sum]

CALCULATIONS:
-------------
Basic ROI:
ROI = (Revenue - Investment) / Investment × 100
   = ($[Revenue] - $[Investment]) / $[Investment] × 100
   = [X]%

ROI by Channel:
Channel ROI = (Channel Revenue - Channel Cost) / Channel Cost × 100

BREAK-EVEN ANALYSIS:
--------------------
Break-even Point = Total Investment / Average Deal Value
                 = $[Investment] / $[Avg Deal]
                 = [X] customers needed

Payback Period = Investment / (Monthly Revenue - Monthly Costs)
               = [X] months
```

### 3.2 Channel ROI Template

```
Channel ROI Analysis
====================

Channel: [Channel Name]
Period: [Date Range]

INVESTMENT:
- Ad Spend: $[Amount]
- Creative Production: $[Amount]
- Management Fee: $[Amount]
Total Cost: $[Sum]

OUTPUTS:
- Impressions: [X]
- Clicks: [X]
- Conversions: [X]
- Revenue: $[Amount]

METRICS:
- CPA = Cost / Conversions = $[Cost per acquisition]
- ROAS = Revenue / Ad Spend = [X]:1
- ROI = (Revenue - Cost) / Cost × 100 = [X]%

CHANNEL SCORE:
Poor: ROI < 0%
Fair: ROI 0-50%
Good: ROI 50-150%
Excellent: ROI > 150%

Recommendation: [Keep/Scale/Optimize/Pause]
```

## 4. Dashboard Setup Guides

### 4.1 Marketing Dashboard Structure

```
Marketing Dashboard Framework
============================

SECTION 1: OVERVIEW (Executive Summary)
- Total Marketing Revenue
- Total Marketing Investment
- Overall Marketing ROI
- Key Trends (↑↓)

SECTION 2: ACQUISITION
- Website Traffic (Total)
- Traffic by Source (Pie chart)
- New Leads (Line chart)
- MQLs and SQLs (Bar chart)
- CAC Trend (Line chart)

SECTION 3: CONVERSION
- Conversion Rate by Channel
- Landing Page Performance
- Form Submission Rate
- Trial Sign-ups
- Free Trial to Paid Rate

SECTION 4: ENGAGEMENT
- Email Open Rate
- Email Click Rate
- Social Engagement Rate
- Content Consumption
- Video Views

SECTION 5: REVENUE
- Marketing Influenced Revenue
- Revenue by Channel
- Average Deal Size
- Sales Cycle Length
- LTV:CAC Ratio

SECTION 6: RETENTION
- Churn Rate
- NPS Score
- Customer Retention Rate
- Expansion Revenue
- Referral Rate
```

### 4.2 Dashboard Tools Setup

```
Tool: Google Analytics 4
========================

1. ACCOUNT SETUP
   - Create Google Analytics account
   - Set up property
   - Configure data retention

2. BASIC TRACKING
   - Install tracking code
   - Set up goals/conversions
   - Configure e-commerce (if applicable)

3. ADVANCED FEATURES
   - Enable enhanced measurement
   - Set up custom events
   - Configure audiences
   - Link to Google Ads

4. REPORTS
   - Acquisition report
   - Engagement report
   - Monetization report
   - User report

5. DASHBOARDS
   - Real-time dashboard
   - Acquisition dashboard
   - Conversion dashboard
```

## 5. Performance Reporting

### 5.1 Monthly Marketing Report Template

```
Monthly Marketing Report
=======================
Month: [Month, Year]
Prepared: [Date]

EXECUTIVE SUMMARY
-----------------
Key Wins:
- [Win 1]
- [Win 2]
- [Win 3]

Challenges:
- [Challenge 1]
- [Challenge 2]

Key Metrics:
| Metric | This Month | Last Month | Change |
|--------|------------|------------|--------|
| Revenue | $[X] | $[X] | [+/-%] |
| CAC | $[X] | $[X] | [+/-%] |
| Leads | [X] | [X] | [+/-%] |
| Conversions | [X] | [X] | [+/-%] |

PERFORMANCE BY CHANNEL
----------------------
| Channel | Spend | Revenue | ROI | Status |
|---------|-------|---------|-----|--------|
| Paid Search | $[X] | $[X] | [X%] | ● |
| Social Ads | $[X] | $[X] | [X%] | ● |
| Content | $[X] | $[X] | [X%] | ● |
| Email | $[X] | $[X] | [X%] | ● |

TOP PERFORMING CAMPAIGNS
-------------------------
1. [Campaign Name]
   - Result: [X% improvement]
   - Learning: [Insight]

2. [Campaign Name]
   - Result: [X% improvement]
   - Learning: [Insight]

AREAS FOR IMPROVEMENT
---------------------
| Area | Issue | Action | Owner | Due Date |
|------|-------|--------|-------|----------|
| [Area] | [Issue] | [Action] | [Owner] | [Date] |

NEXT MONTH PRIORITIES
---------------------
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

BUDGET RECOMMENDATIONS
----------------------
- Increase: [Channel - Reason]
- Decrease: [Channel - Reason]
- Test: [New Channel - Hypothesis]
```
