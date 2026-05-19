# Feedback Loops

## Quick Definition

Feedback loops are circular processes where system outputs influence future inputs, creating self-reinforcing or self-correcting behavior patterns.

---

## Full Definition

A feedback loop is a fundamental system structure where the consequences of an action flow back to become part of the next cycle of action. In systems thinking, feedback loops are the primary mechanism through which systems maintain stability, amplify change, or transform themselves. Every action creates ripples that eventually return to their source, altered by the journey through the system.

Feedback loops consist of four key components: a sensor that detects the current state, a reference point or goal, a comparator that measures the gap between current and desired states, and an effector that takes action to reduce that gap. When properly functioning, these components create continuous adjustment and adaptation.

The behavior of a feedback loop depends on its delay structure and gain. Short-delay feedback responds quickly but may oscillate. Long-delay feedback responds slowly but can create dramatic overshoots and corrections. Understanding these timing dynamics is crucial for effective system intervention.

---

## Origin & History

The concept of feedback emerged from engineering and control theory in the 18th and 19th centuries. James Watt's centrifugal governor (1788) for steam engines is often cited as an early practical application. The mathematical framework for analyzing feedback systems was developed during World War II, particularly by mathematicians and engineers working on radar and servomechanisms.

Norbert Wiener coined the term "cybernetics" in 1948, establishing feedback as a central concept bridging engineering, biology, and social systems. Jay Forrester at MIT pioneered system dynamics in the 1950s and 1960s, creating computer models to simulate feedback loops in complex systems. Donella Meadows, in her influential book "Thinking in Systems" (2008 posthumously), popularized feedback loop analysis for understanding social, economic, and environmental challenges.

---

## Application Steps

### Step 1: Identify the System Boundary

- Define what is inside and outside the system
- Focus on the components that interact to produce the behavior of interest
- Include enough elements to capture the feedback structure

### Step 2: Map the Causal Connections

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ┌─────────┐    Action      ┌─────────┐              │
│   │  Sensor │ ──────────────►│ Effector│              │
│   │         │◄────────────── │         │              │
│   └─────────┘    Feedback    └─────────┘              │
│        ▲                                                   │
│        │                                                   │
│        │  Current                                          │
│        │  State                                            │
│        ▼                                                   │
│   ┌─────────┐    Compare     ┌─────────┐              │
│   │         │ ──────────────►│         │              │
│   │Comparator│◄─────────────│Reference│              │
│   └─────────┘                └─────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Step 3: Classify the Feedback Type

- **Reinforcing (Positive)**: Amplifies change, creates growth or decline
- **Balancing (Negative)**: Counteracts change, seeks equilibrium
- Determine whether delays exist and how long they are

### Step 4: Trace the Full Loop

- Start at any point and follow the chain of causation
- Ensure the loop closes back to the starting point
- Identify all intermediate steps and actors

### Step 5: Analyze Dynamic Behavior

- Sketch behavior over time (graph of stock levels)
- Identify oscillation, overshoot, or oscillation patterns
- Test sensitivity to delays and gains

---

## Real-World Examples

### 1. Thermostat Control System

A room thermostat detects temperature (sensor), compares it to the set point (comparator), and activates heating or cooling (effector). When temperature reaches the set point, the effector stops. This balancing feedback maintains comfort while preventing energy waste.

### 2. Population Dynamics

In predator-prey systems, more prey support more predators (reinforcing loop). However, more predators eat more prey, eventually reducing the prey population (balancing loop). This creates cyclical population dynamics observable in nature and fisheries management.

### 3. Social Media Engagement

Platform algorithms amplify content that generates engagement. High engagement leads to more visibility, which generates more engagement. This reinforcing feedback creates viral content but can also spread misinformation and create filter bubbles.

### 4. Economic Markets

Stock prices influence investor behavior and corporate decisions, which then affect future prices. Bull markets attract more investment (reinforcing), while crashes trigger selling (reinforcing downward). Balancing loops exist through fundamental value assessments, but delays can allow significant deviations.

---

## Common Pitfalls

### Pitfall 1: Ignoring Delays

Many system failures occur because decision-makers respond to outdated information. By the time symptoms become visible, conditions may have changed. For example, building new power plants based on yesterday's peak demand may create tomorrow's overcapacity.

### Pitfall 2: Confusing Reinforcing and Balancing Loops

A policy intervention that appears to reduce a problem may actually trigger a balancing loop that undermines the intervention. The result is frustration and "policy resistance" where the system seems to fight back against improvement efforts.

### Pitfall 3: Linear Thinking in a Nonlinear World

Treating a symptom rather than the underlying structure leads to unintended consequences. Adding more police to a neighborhood with crime problems may reduce visible crime while increasing arrests, potentially creating future recidivism.

### Pitfall 4: Missing Feedback Links

Systems often contain feedback loops that are not immediately obvious. Invisible loops can cause dramatic surprises when they finally close or when external changes cause them to activate.

### Pitfall 5: Treating Feedback Loops in Isolation

Real systems contain multiple interconnected feedback loops. Optimizing one loop may degrade others. A factory optimizing for output may create quality problems, or an athlete maximizing training intensity may experience burnout.

---

## Quick Reference

```
┌─────────────────────────────────────────────────────────┐
│                    FEEDBACK LOOPS                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  TYPE          EFFECT         DELAY SENSITIVITY         │
│  ────────────────────────────────────────────────────  │
│  Reinforcing   Amplifies      High (explosive growth)   │
│  Balancing     Stabilizes     Medium (oscillation)      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  KEY COMPONENTS                                         │
│  ────────────────────────────────────────────────────  │
│  Sensor → Comparator → Effector → (System State) → ...  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  DIAGNOSTIC QUESTIONS                                   │
│  ────────────────────────────────────────────────────  │
│  • What is being measured? (State variable)             │
│  • What is the goal? (Reference point)                  │
│  • How long between action and feedback? (Delay)         │
│  • Does action amplify or counteract change?            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  INTERVENTION PRINCIPLES                                │
│  ────────────────────────────────────────────────────  │
│  1. Reduce harmful delays where possible                 │
│  2. Strengthen stabilizing (balancing) feedback        │
│  3. Dampen runaway reinforcing loops                     │
│  4. Add new feedback where none exists                   │
│  5. Avoid creating new problems while fixing old ones    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Behavior Over Time Patterns

```
Growth:         Smoothing/Stabilizing:    Oscillation:
    │                 │                        │
 A  │    A             │    A                   │    A
    │    │             │   /                     │   / \
    │   /              │  /                      │  /   \
    │  /               │ /                       │ /     \
 ───┴──────────    ─────┴───────────          ────┴───────┴──
    Time              Time                       Time

Reinforcing Loop    Balancing Loop         Delay-Caused Oscillation
```

---

## Related Mental Models

- [Stocks and Flows](stocks-and-flows.md) - The structure that feedback loops operate upon
- [Reinforcing Loops](reinforcement-loops.md) - Deep dive into positive feedback
- [Balancing Loops](balancing-loops.md) - Deep dive into negative feedback
- [Tipping Points](tipping-points.md) - Where feedback loops cross critical thresholds
- [Leverage Points](leverage-points.md) - Where to intervene in feedback systems
