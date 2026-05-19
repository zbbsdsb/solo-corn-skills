# First Principles: Root Cause Analysis

## The Art of Asking "Why" Repeatedly

**Core Principle**: Symptoms point to problems, problems point to root causes. Only by reaching the root can we create lasting solutions.

---

## The 5 Whys Method

### Methodology Overview

**The Process**:
```
Problem Statement: _____________________________

Why #1: Why does this happen?
Answer: _____________________________
    ↓
Why #2: Why does THAT happen?
Answer: _____________________________
    ↓
Why #3: Why does THAT happen?
Answer: _____________________________
    ↓
Why #4: Why does THAT happen?
Answer: _____________________________
    ↓
Why #5: Why does THAT happen?
Answer: _____________________________
    ↓
ROOT CAUSE: _____________________________
```

### Practical Application Example

**Problem**: "The product launch was delayed"

| Level | Question | Answer |
|-------|----------|---------|
| Problem | The product launch was delayed | ____ |
| Why 1 | Why was it delayed? | Development took longer than expected |
| Why 2 | Why did development take longer? | Team encountered unexpected technical issues |
| Why 3 | Why were there technical issues? | Architecture assumptions were incorrect |
| Why 4 | Why were assumptions incorrect? | Insufficient research at project start |
| Why 5 | Why was research insufficient? | No structured discovery process existed |

**Root Cause**: Absence of a formal discovery phase before development begins

### 5 Whys Worksheet

```
Problem to Analyze: _____________________________

Why #1: _________________________________
    Because: _________________________________
    
Why #2: _________________________________
    Because: _________________________________
    
Why #3: _________________________________
    Because: _________________________________
    
Why #4: _________________________________
    Because: _________________________________
    
Why #5: _________________________________
    Because: _________________________________

ROOT CAUSE IDENTIFIED:
_____________________________________________

How does this root cause connect back to the original problem?
_____________________________________________
```

### When to Stop

**Rule**: Continue asking "why" until you reach a point where:
1. The answer is a process, policy, or fundamental assumption
2. The answer is within your control to change
3. Fixing this point would prevent recurrence

**Warning Signs You've Gone Too Deep**:
- Answers become philosophical rather than actionable
- You're blaming individuals rather than systems
- You can no longer verify the chain

---

## Fishbone Diagram (Ishikawa) Template

### The 6 M's Framework

**Purpose**: Systematically explore all potential causes across categories

```
                          PROBLEM
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
        Methods          Machine          Materials
           │                 │                 │
           │                 │                 │
      ┌────┴────┐       ┌────┴────┐       ┌────┴────┐
      │         │       │         │       │         │
   Process   Procedure   Equipment   Technology   Raw inputs
      │         │           │           │         │    │
      └─────────┴───────────┴───────────┴─────────┴────┘
                         
                        Manpower          Measurement
                            │                 │
                       ┌────┴────┐       ┌────┴────┐
                       │         │       │         │
                   Skills    Training    Metrics   Standards
                       │         │           │         │
                       └─────────┴───────────┴─────────┘
```

### Fishbone Template for Your Problem

**Problem Statement**: _____________________________

```
                                     PROBLEM
                                        │
         ┌──────────────────────────────┼──────────────────────────────┐
         │                              │                              │
     METHODS                         MACHINE                      MATERIALS
         │                              │                              │
    ┌────┴────┐                    ┌────┴────┐                    ┌────┴────┐
    │Cause 1.1│                    │Cause 2.1│                    │Cause 3.1│
    │Cause 1.2│                    │Cause 2.2│                    │Cause 3.2│
    │Cause 1.3│                    │Cause 2.3│                    │Cause 3.3│
    └─────────┘                    └─────────┘                    └─────────┘

         │                              │                              │
         │                              │                              │
    ┌────┴────┐                    ┌────┴────┐                    ┌────┴────┐
    │    │    │                    │    │    │                    │    │    │
 MANPOWER                      MEASUREMENT                    MANAGEMENT
    │                              │                              │
┌───┴───┐                    ┌─────┴─────┐                  ┌──────┴──────┐
│Cause 4.1│                   │Cause 5.1│                   │Cause 6.1│
│Cause 4.2│                   │Cause 5.2│                   │Cause 6.2│
│Cause 4.3│                   │Cause 5.3│                   │Cause 6.3│
└─────────┘                   └─────────┘                   └───────────┘
```

### Alternative Category Sets

**For Software/Technology Problems**:
- People | Process | Technology | Platform | Product | Program

**For Business Problems**:
- Policy | Procedure | People | Plant | Procurement | Products

**For Creative Problems**:
- Idea | Execution | Resources | Constraints | Audience | Context

---

## Causal Chain Analysis

### Building the Chain

**Purpose**: Trace how causes lead to effects, creating a chain of causality

### Chain Template

```
CHAIN ELEMENT #1: [Event/Condition]
    Direct consequence: _____________________________
    Evidence for this link: _____________________________
    Confidence: High/Medium/Low
    
    ↓ leads to

CHAIN ELEMENT #2: [Event/Condition]
    Direct consequence: _____________________________
    Evidence for this link: _____________________________
    Confidence: High/Medium/Low
    
    ↓ leads to

CHAIN ELEMENT #3: [Event/Condition]
    Direct consequence: _____________________________
    Evidence for this link: _____________________________
    Confidence: High/Medium/Low
    
    ↓ leads to

CHAIN ELEMENT #4: [Event/Condition]
    Direct consequence: _____________________________
    Evidence for this link: _____________________________
    Confidence: High/Medium/Low
    
    ↓ leads to

FINAL OUTCOME: [The Problem We're Experiencing]
```

### Chain Validation

**Completeness Check**:
- [ ] Does each link have sufficient evidence?
- [ ] Are there any missing links?
- [ ] Could there be alternative paths?
- [ ] Are there feedback loops that reinforce the problem?

**Critical Juncture Analysis**:
Identify points where the chain can be broken:

| Juncture | Intervention Point | Feasibility | Expected Impact |
|----------|-------------------|-------------|----------------|
| 1→2 | _________________ | High/Med/Low | _________________ |
| 2→3 | _________________ | High/Med/Low | _________________ |
| 3→4 | _________________ | High/Med/Low | _________________ |

---

## The First Principles Root Cause Protocol

### Going Beyond the Surface

**Surface Cause**: The immediate, visible cause of the problem

**Underlying Cause**: The systemic factor that allowed the surface cause to exist

**Root Cause**: The fundamental assumption, policy, or design that, if changed, prevents the problem permanently

### The Three-Level Analysis

**Level 1: What happened?**
```
Observable event: _____________________________
Who was involved: _____________________________
When did it occur: _____________________________
Where did it occur: _____________________________
What was the immediate cause: _____________________________
```

**Level 2: Why did it happen?**
```
What systems allowed this to occur: _____________________________
What checks failed: _____________________________
What assumptions were violated: _____________________________
What process was missing or broken: _____________________________
```

**Level 3: Why do these systems/assumptions exist?**
```
What belief or theory of operation created this system: _____________________________
Who designed this system and why: _____________________________
Is this system still appropriate: _____________________________
What would happen if we eliminated this system entirely: _____________________________
```

---

## The Five Whys Advanced Variations

### The Five Hows

**For solution design, ask "how" instead**:

```
Problem: _____________________________

How did this happen? (Why #1)
→ Answer: _____________________________

How did THAT happen? (Why #2)
→ Answer: _____________________________

How did THAT happen? (Why #3)
→ Answer: _____________________________

How did THAT happen? (Why #4)
→ Answer: _____________________________

How can we prevent this permanently?
→ SOLUTION: _____________________________
```

### The Five So-Whats

**For exploring consequences**:

```
Initial observation: _____________________________

So what? (What are the implications?)
→ Answer: _____________________________

So what? (What are the implications of THAT?)
→ Answer: _____________________________

So what? (What are the implications of THAT?)
→ Answer: _____________________________

So what? (What are the implications of THAT?)
→ Answer: _____________________________

So what? (What is the FINAL consequence?)
→ CRITICAL INSIGHT: _____________________________
```

---

## Root Cause Prioritization Matrix

### Impact vs. Effort Analysis

| Root Cause | Impact (1-10) | Effort (1-10) | Ratio | Priority |
|-----------|--------------|--------------|-------|----------|
| _________________ | ___ | ___ | ___/___ | 🔴 |
| _________________ | ___ | ___ | ___/___ | 🟡 |
| _________________ | ___ | ___ | ___/___ | 🟢 |
| _________________ | ___ | ___ | ___/___ | 🔴 |

**Scoring Guide**:
- Impact: How much does fixing this root cause reduce the problem?
- Effort: How much work is required to address this root cause?
- Priority: High ratio = High priority (high impact, low effort)

---

## Prevention Framework

### Post-Analysis Protocol

For each root cause identified:

**1. Design the solution**
```
Root Cause: _____________________________
Solution Design: _____________________________
Resources Required: _____________________________
Timeline: _____________________________
```

**2. Create detection mechanisms**
```
How will we know if this recurs? _____________________________
What monitoring detects this? _____________________________
What warning signs precede this? _____________________________
```

**3. Establish prevention systems**
```
What process prevents this root cause? _____________________________
What check validates prevention? _____________________________
Who owns prevention? _____________________________
```

**4. Document lessons learned**
```
Root Cause: _____________________________
Solution: _____________________________
Prevention: _____________________________
Date Resolved: _____________________________
Review Date: _____________________________
```

---

## The Zero-Recurrence Test

### The "Never Again" Protocol

Before finalizing your root cause analysis, ask:

```
If we implement these solutions, can this problem recur?

If YES: What additional prevention is needed?
        _____________________________

Is the root cause truly eliminated, or just mitigated?
        _____________________________

What would have to change in our fundamental approach 
to make this problem impossible?
        _____________________________

Are we solving the symptom, the cause, or the system?
        _____________________________
```

**Remember**: True first principles analysis seeks permanent solutions, not temporary fixes.

---

## Next Steps After Root Cause Analysis

1. **Validate** the identified root causes with data and stakeholders
2. **Prioritize** using the Impact vs. Effort matrix
3. **Design** interventions that address root causes, not symptoms
4. **Implement** with clear ownership and timelines
5. **Monitor** for recurrence and effectiveness
6. **Review** at defined intervals to ensure permanent resolution

---

*Remember: The goal is not to find someone to blame—it's to find the systemic issues that allowed the problem to exist, so we can design them out permanently.*
