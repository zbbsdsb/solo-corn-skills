# Curse of Knowledge

## Origin

**Colin Camerer, George Loewenstein, & Martin Weber** (1989), "The Curse of Knowledge in a Writing Class," *Journal of Political Economy*

## Core Concept

Once you know something, you can't imagine not knowing it. Experts struggle to remember what it was like not to understand.

### Key Insight

> "Experts see the world differently. They forget what it was like to be a beginner."

## The Problem

1. **Knowledge changes perception**: What seems obvious to you may be invisible to novices
2. **Communication gap**: What you say assumes knowledge others don't have
3. **Inference gap**: You can't remember not knowing

## Example

**Expert explaining blockchain**:
```
"Blockchain uses a consensus mechanism with 
Byzantine fault tolerance through a proof-of-work 
algorithm that secures the distributed ledger..."
```

**Novice's experience**:
```
"Consensus? Byzantine? Fault tolerance? Proof-of-work?
I'm lost already. What IS blockchain?"
```

## Why It Matters for Learning

If we can't remember what it's like to not know, we:
- Skip "obvious" foundations
- Use jargon without explanation
- Move too fast
- Assume too much prior knowledge

## Application in Connector

### 1. Feynman Technique

**The Process**:
1. Learn a concept
2. Explain it simply (as if to a child)
3. Identify gaps in your explanation
4. Return to source material
5. Repeat until clear

**Example**:
```
Before: "Byzantine fault tolerance ensures that 
        distributed systems can reach consensus 
        even with faulty nodes."

After: "Imagine 10 generals trying to agree on 
        attacking a city. Some might be traitors 
        lying. How do the honest ones agree? 
        That's the problem Byzantine fault tolerance 
        solves—and blockchain uses this solution."
```

### 2. Analogies & Metaphors

Bridge from known to unknown.

| Concept | Analogy |
|---------|---------|
| Blockchain | Shared Google Doc with edit history |
| Machine Learning | Teaching a child to recognize cats by showing thousands of cats |
| APIs | Waiter taking orders to kitchen |
| Cloud Computing | Paying for electricity instead of owning a generator |

### 3. Progressive Disclosure

Start with simple, add complexity gradually.

**Layer 1 (Simple)**:
```
"Blockchain is a way to keep records that 
many people can see and trust, without 
needing a bank or government."
```

**Layer 2 (Adding detail)**:
```
"It works by having many computers agree on 
each new record before adding it."
```

**Layer 3 (Technical)**:
```
"The consensus mechanism uses cryptographic 
hashing and economic incentives..."
```

### 4. Novice vs. Expert Contrast

**Expert thinking**:
```
"Blockchain is a distributed ledger with 
Byzantine fault tolerance, achieving 
trustless consensus through economic 
game theory..."
```

**Novice questions**:
```
- Why do I need this?
- How is it different from what exists?
- What problem does it solve?
- Is it safe/reliable?
- Can I use it?
```

## Connector Implementation

### QuickScan: Curse Check
```
"After generating the overview, I'll ask:
- Did I use any jargon without explaining it?
- Did I assume too much prior knowledge?
- Did I explain the WHY, not just WHAT?
- Can a beginner understand this?"
```

### Expert Prep: Anti-Curse Questions
```
"Questions that expose the curse of knowledge
in expert discussions:

1. What would you tell a 10-year-old about this?
2. What's the simplest way to explain this?
3. What did you struggle to understand at first?
4. What's the most common misconception?"
```

### Learning Path: Teaching Back
```
"At the end of each section:
Can you explain it simply?
Can you give an analogy?
Can you teach it to someone else?"
```

## Key Takeaway

> "Remember what it was like to not know. Explain as if to yourself before you learned."

## Signs You're Suffering From Curse of Knowledge

- [ ] Audience looks confused
- [ ] You're using acronyms/jargon without explanation
- [ ] You're moving faster than they can follow
- [ ] You skip "obvious" steps
- [ ] You can't simplify your explanation

## Anti-Curse Checklist

Before explaining any concept:
1. ✓ Will a beginner understand this?
2. ✓ Have I defined key terms?
3. ✓ Did I explain WHY this matters?
4. ✓ Have I used an analogy?
5. ✓ Can I simplify further?
