# Spaced Repetition

## Origin

**Hermann Ebbinghaus** (1885), "Memory: A Contribution to Experimental Psychology"
Modern implementation: **Piotr Wozniak** (1990s), "SuperMemo"

## Core Concept

Spaced review over time beats massed practice for long-term retention.

### Key Points

- **Forgetting curve**: Information decays exponentially over time
- **Review timing**: Review just before you'd forget
- **Optimal intervals**: Increase spacing as you master material

## The Forgetting Curve

```
Retention
100% |████
  80% |██████
  60% |██████████
  40% |██████████████
  20% |████████████████████
   0% └────────────────────────→ Time
        1hr   1day   1week   1month
```

## Optimal Review Schedule

| Review # | Interval | When to Review |
|----------|----------|----------------|
| 1 | 1 day | Day after learning |
| 2 | 3 days | 4th day |
| 3 | 7 days | 11th day |
| 4 | 14 days | 25th day |
| 5 | 30 days | 55th day |
| 6 | 60 days | ~3 months |

## Spaced Repetition Systems (SRS)

Popular tools:
- Anki (flashcard + algorithm)
- SuperMemo
- Leitner box system

### How SRS Works
1. Card presented
2. Rate difficulty (1-5)
3. Algorithm calculates next review date
4. Repeat at optimal interval

## Application in Connector

### Knowledge Archive System

#### Domain Cards
```markdown
# [Domain] Card

## Front
What is [concept]?

## Back
[Simple explanation + example + connection]

## Review Log
- Day 1: ✓
- Day 4: ✓
- Day 11: ⏳
```

#### Connection Notes
```markdown
# Cross-Domain Connection

## From
[Domain A]: [concept]

## To
[Domain B]: [related concept]

## Shared Principle
[Deep structure]

## Review Status
Last: [date] | Next: [date]
```

### Review Prompts

**Daily Review**
```
"What did you learn this week? Quickly recall 3 key insights."
```

**Weekly Deep Dive**
```
"Review your knowledge cards. Which connections surprised you most?"
```

**Monthly Integration**
```
"Connect this month's learning. What themes emerged?"
```

## Connector Implementation

1. **Knowledge Cards**: Create after each learning session
2. **Smart Reminders**: Schedule reviews at optimal intervals
3. **Spaced Testing**: Regular self-assessment checkpoints
4. **Progress Tracking**: Visual learning retention dashboard

## Key Takeaway

> "Review little and often. Stay ahead of forgetting."

## Research-Backed Benefits

- **200% better retention** vs. massed practice
- **50% less study time** for same retention
- **Longer lasting memory** (years vs. weeks)
- **Better understanding** through repeated retrieval
