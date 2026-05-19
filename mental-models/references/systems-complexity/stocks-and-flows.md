# Stocks and Flows

## Quick Definition

Stocks are quantities that accumulate or deplete over time, while flows are the rates of change that add to or subtract from those stocks.

---

## Full Definition

Stocks represent the stored quantity of any material, resource, or state within a system at a given point in time. They are the accumulations that result from the imbalance between inflows and outflows. Stocks can grow, decline, or remain stable depending on the relative magnitude of their flows. Stocks provide the inertia and memory to systems; they decouple past actions from present consequences.

Flows are the rates of change—the movement of material into or out of stocks per unit of time. Inflows increase stocks; outflows decrease them. Flows are represented by verbs: births, purchases, arrivals, production, sales, deaths, departures, consumption, depreciation. Understanding flows requires asking "per what period?" because flows are always about rates, not absolute amounts.

The fundamental accounting equation governs all stock-flow systems:

```
Stock(t) = Stock(t₀) + ∫(Inflow(t) - Outflow(t))dt
```

This means the current stock equals the initial stock plus all accumulated inflows minus all accumulated outflows over time. A stock cannot change instantaneously; it can only change through its flows over time.

Stocks often have goals—they represent something the system wants to maintain or achieve. For example, a savings account is a stock of money, inventory is a stock of goods, and population is a stock of people. Understanding the desired stock level helps explain system behavior.

---

## Origin & History

The stock-flow concept has deep roots in accounting, economics, and physics. National accounting systems, developed in the 1930s and 1940s, formalized the distinction between stocks (wealth, capital) and flows (income, investment). In physics, the conservation laws governing stocks of matter and energy date back centuries.

Jay Forrester at MIT formalized stock-flow modeling in system dynamics during the 1950s. His work at General Electric in the late 1950s revealed how accumulation of inventory and workforce stocks created business cycles that appeared random but were actually predictable from the company's ordering policies. This insight led to the field of system dynamics and the development of tools like STELLA and Vensim for modeling stock-flow-feedback structures.

The Water Clock Model below illustrates the fundamental stock-flow relationship:

```
        ┌─────────────────────────────────────────┐
        │                                         │
   ╔════▼════╗         INFLOW           ╔═════════▼═════╗
   ║         ║◄─────────────────────────║               ║
   ║  STOCK  ║     (flow rate = Q_in)   ║    OUTFLOW   ║
   ║         ║─────────────────────────►║               ║
   ╚════╤════╝     (flow rate = Q_out)  ╚═════════╤═════╝
        │                                         │
        │         ┌─────────────────────┐         │
        │         │  d(Stock)/dt =      │         │
        │         │  Inflow - Outflow   │         │
        │         └─────────────────────┘         │
        │                                         │
        ▼                                         ▼
   [ Current Level ]                     [ Goes somewhere ]
```

---

## Application Steps

### Step 1: Identify All Relevant Stocks

- What quantities accumulate or deplete in the system?
- What resources, materials, or states persist over time?
- What is being tracked, counted, or measured?

**Example Stocks:**
- Bank account balance
- Inventory levels
- Population
- Knowledge or skills
- Trust or reputation
- Carbon in the atmosphere
- Market share

### Step 2: Identify All Flows Into and Out of Each Stock

```
┌─────────────────────────────────────────────────────────────────┐
│                      STOCK IDENTIFICATION                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   STOCK         INFLOWS              OUTFLOWS                   │
│   ──────────────────────────────────────────────────────────   │
│   Water in   ← Rain, rivers      ← Evaporation, usage           │
│   a reservoir                     ← Spillage, outflows          │
│                                                                 │
│   Money in   ← Income, deposits   ← Expenses, withdrawals       │
│   account                          ← Fees, transfers out        │
│                                                                 │
│   Market     ← New customers      ← Churn, lost customers       │
│   share                            ← Competitor gains          │
│                                                                 │
│   Skill      ← Training, practice ← Skill decay, forgetting     │
│   level                            ← Obsolescence              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Step 3: Draw the Stock-Flow Diagram

- Use boxes for stocks, arrows for flows
- Label flows with rate variables (e.g., "/year", "/month")
- Identify whether flows are constant, decision-dependent, or system-dependent
- Show feedback loops connecting stocks to flow rates

### Step 4: Identify Time Constants and Delays

- How long does it take for flows to change the stock significantly?
- What is the characteristic time (stock ÷ flow rate)?
- Are there delays between decisions and flow changes?

### Step 5: Formulate the Mathematical Model

```
For each stock:
    d(Stock)/dt = Inflow_rate - Outflow_rate

    Stock(t) = Stock(0) + ∫[Inflow(s) - Outflow(s)]ds
              ₀
```

---

## Real-World Examples

### 1. Bathtub Model (Classic)

A bathtub contains a stock of water. The inflow from the faucet adds water; the drain removes water. The water level (stock) is determined by the difference between inflow and outflow rates. If inflow exceeds outflow, the tub fills. If outflow exceeds inflow, it drains. This simple model illustrates all stock-flow dynamics.

```
        ┌─────────────────────────────────────┐
        │                                     │
    ════╪════════════════════════════════════╪════
        │      ┌─────┐                        │
    ════╪═════►│FAUCET│                        │
        │      └─────┘                        │    Water
    ════╪════════════════════════════════════╪════ Level
        │                              ┌─────▼───┐
    ════╪══════════════════════════════►│  DRAIN  │─────►
        │                              └─────────┘
    ════╪═══════════════════════════════════════════════
```

### 2. Carbon Cycle

The atmosphere contains a stock of carbon dioxide. Natural inflows include volcanic emissions and respiration. Human inflows include fossil fuel combustion. Natural outflows include photosynthesis absorption and ocean absorption. The imbalance between human-caused inflows and natural outflows drives climate change.

### 3. Knowledge Accumulation

A person's knowledge stock grows through education, experience, and practice (inflows). It declines through forgetting and skill obsolescence (outflows). The net rate determines whether someone is improving or falling behind in their field.

### 4. Hospital Capacity

Hospital beds represent a stock. Inflows come from admissions, transfers, and scheduled procedures. Outflows come from discharges and deaths. The capacity utilization and wait times result from the relationship between these flows and the fixed stock.

---

## Common Pitfalls

### Pitfall 1: Confusing Stocks with Flows

A common error is comparing stocks to flows as if they were equivalent. "We hired 50 people this year" (flow) does not mean "we have 50 people" (stock). The current headcount depends on all past hirings and terminations, not just this year's activity.

### Pitfall 2: Ignoring Accumulation Effects

Because stocks accumulate past decisions, current problems often reflect historical patterns. Addressing a depleted stock (empty reservoir, depleted workforce) requires time to rebuild. Interventions that ignore accumulation will seem ineffective.

### Pitfall 3: Mismeasuring Flow Rates

Using inconsistent time periods creates confusion. "We processed 1000 orders" is meaningless without knowing whether this is per day, month, or year. Always specify the time unit for flow rates.

### Pitfall 4: Assuming Flows are Independent

Flow rates are often influenced by stock levels. High inventory may reduce future orders (outflow from factory); high unemployment may increase social spending (outflow from government). These feedback relationships create dynamic behavior.

### Pitfall 5: Forgetting Physical Limits on Stocks

Stocks have physical limits (capacity constraints). A bathtub cannot hold more than its capacity; a market cannot exceed 100% share. When stocks approach limits, flow behavior changes dramatically.

---

## Quick Reference

```
┌─────────────────────────────────────────────────────────────────┐
│                    STOCKS AND FLOWS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SYMBOLS IN DIAGRAMS                                            │
│  ────────────────────────────────────────────────────────────   │
│  ┌───┐        ═══►                    ════►                   │
│  │Stock│  =    Flow (into stock)      Flow (out of stock)      │
│  └───┘                                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FUNDAMENTAL EQUATION                                           │
│ ─────────────────────────────────────────────────────────────── │
│  Stock(t) = Stock(t₀) + Accumulated Inflows - Accumulated      │
│             Outflows                                            │
│                                                                 │
│  Rate of Change = Inflow Rate - Outflow Rate                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  KEY INSIGHTS                                                   │
│ ─────────────────────────────────────────────────────────────── │
│  1. A stock cannot change instantaneously                       │
│  2. Stocks persist; flows are momentary                         │
│  3. Stocks provide inertia and memory                          │
│  4. Stock-to-flow ratios indicate system age                   │
│  5. Flow changes take time to affect stocks                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  DIAGNOSTIC CHECKLIST                                           │
│ ─────────────────────────────────────────────────────────────── │
│  □ What is the current stock level?                             │
│  □ What are all the inflow rates?                               │
│  □ What are all the outflow rates?                              │
│  □ Are flows constant or variable?                              │
│  □ Do flows depend on stock levels? (feedback?)                 │
│  □ What is the characteristic time (Stock/Flow)?                 │
│  □ Are there capacity limits on the stock?                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Time Constant Formula

```
Time Constant (τ) = Stock Level / Flow Rate

Example: Bank account with $100,000 (stock)
         Monthly expenses of $10,000 (outflow)
         Time constant = $100,000 / $10,000/month = 10 months
         (How long until savings depleted if no income)
```

### Characteristic Behavior Patterns

```
Constant Inflows Only:              Constant Outflows Only:
    │                                    │
 S  │      ┌─────────                   S  │              ┌─────────
    │     /                             │             /
    │    /                              │            /
 ───┴───/───────────────             ───┴───────────/─────────────
    Inflows=Outflows (equilibrium)       Empty (depleted)

Balanced Inflows/Outflows:
    │
 S  │              *  *
    │           *      *                    *
 ───┴────────*───────────*──────────────*─────────────
            Approaches equilibrium

Growing then Saturating:
    │
 S  │                      ══════
    │                  ═══
    │              ═══
 ───┴────────────══───────────────────────────────
           Growth with carrying capacity
```

---

## Related Mental Models

- [Feedback Loops](feedback-loops.md) - The behavior patterns that emerge from stock-flow structures
- [Reinforcing Loops](reinforcement-loops.md) - How stocks grow through positive feedback
- [Balancing Loops](balancing-loops.md) - How stocks stabilize through negative feedback
- [Tipping Points](tipping-points.md) - When stocks cross critical thresholds
- [Emergence](emergence.md) - How complex patterns arise from stock-flow interactions
