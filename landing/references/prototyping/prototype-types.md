# Prototype Types Selection Guide

This guide helps you choose the right prototype type based on your validation goals, time constraints, and resource availability.

## Overview

```
                    ┌─────────────────────────┐
                    │    Validation Goal      │
                    └───────────┬─────────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
      ┌───────────────┐ ┌───────────────┐ ┌───────────────┐
      │    Paper      │ │  ASCII Mockup │ │Text-based     │
      │  Prototype    │ │               │ │Prototype      │
      └───────────────┘ └───────────────┘ └───────────────┘
           │                 │                 │
           ▼                 ▼                 ▼
      Quick Sketch      Visual Layout      Logic Flow
      +30 min           +2 hours           +4 hours
```

## 1. Paper Prototype

### What It Is
Hand-drawn sketches on paper representing screen layouts and user interface elements.

### When to Use

| Scenario | Applicability |
|----------|---------------|
| Early concept validation | ✅ Excellent |
| Stakeholder presentation | ✅ Excellent |
| User testing with limited resources | ✅ Excellent |
| Exploring multiple layout options | ✅ Excellent |
| Getting quick feedback on navigation | ✅ Excellent |
| Complex data visualization | ❌ Poor fit |
| Interactive animations required | ❌ Poor fit |
| Multiple user roles testing | ⚠️ Limited |

### Advantages
- Fastest to create (15-30 minutes)
- No technical skills required
- Easy to modify on the fly
- Encourages rough thinking
- Low commitment to any design

### Disadvantages
- Limited visual detail
- Cannot test complex interactions
- Hard to share remotely
- May feel unprofessional in presentations

### Best Practices
1. Use consistent symbols for common elements
2. Label interactive areas clearly
3. Create multiple versions for comparison
4. Use numbering to show flow

---

## 2. ASCII Mockup

### What It Is
Text-based visual representation using ASCII characters to show layout structure.

### When to Use

| Scenario | Applicability |
|----------|---------------|
| Documentation and specs | ✅ Excellent |
| Communicating layout to developers | ✅ Excellent |
| API/interface documentation | ✅ Excellent |
| Quick visual brainstorming | ✅ Excellent |
| Low-bandwidth communication | ✅ Excellent |
| Detailed interaction flow | ⚠️ Limited |
| Complex color schemes | ❌ Poor fit |
| Responsive design visualization | ❌ Poor fit |

### Advantages
- Version control friendly
- Easy to share via text
- Clear structural representation
- Lightweight format
- Can be embedded anywhere

### Disadvantages
- Limited visual appeal
- Fixed-width character constraints
- No color representation
- Steeper learning curve for complex layouts

### Best Practices
1. Use consistent character sets
2. Align elements with spaces
3. Include clear section comments
4. Provide legend for custom symbols

### Example Structure

```
┌─────────────────────────────────────┐
│           HEADER AREA               │
├─────────────┬───────────────────────┤
│   SIDEBAR   │     MAIN CONTENT      │
│             │                       │
│  - Item 1   │  ┌─────────────────┐  │
│  - Item 2   │  │   Card/Widget   │  │
│  - Item 3   │  └─────────────────┘  │
│             │                       │
└─────────────┴───────────────────────┘
```

---

## 3. Text-based Prototype

### What It Is
Narrative descriptions combined with structured text to represent user flows and interactions.

### When to Use

| Scenario | Applicability |
|----------|---------------|
| Logic-heavy features | ✅ Excellent |
| API endpoint testing | ✅ Excellent |
| User journey mapping | ✅ Excellent |
| Complex conditional flows | ✅ Excellent |
| Requirement documentation | ✅ Excellent |
| Stakeholder alignment | ⚠️ Limited |
| Visual layout validation | ❌ Poor fit |
| Design-focused features | ❌ Poor fit |

### Advantages
- Captures business logic clearly
- Easy to review and comment
- Can represent complex conditions
- Natural for technical communication
- Easy to version and track changes

### Disadvantages
- No visual representation
- Requires imagination to visualize
- Can become verbose
- Harder for non-technical stakeholders

### Best Practices
1. Use structured formatting (tables, lists)
2. Include decision trees for branches
3. Provide concrete examples
4. Link to related requirements

---

## Decision Matrix

Use this matrix to select the right prototype type:

```
                    Speed                    Validation
Type               (creation)   Flexibility  Depth      Shareability

Paper Prototype     ★★★★★        ★★★★         ★★          ★★

ASCII Mockup        ★★★★         ★★★          ★★★         ★★★★★

Text-based          ★★★★         ★★★★★        ★★★★         ★★★★
```

---

## Quick Selection Guide

### Step 1: What's your primary goal?

- **Visual layout check** → Paper Prototype
- **Communication with developers** → ASCII Mockup
- **Logic and flow validation** → Text-based Prototype

### Step 2: What's your time constraint?

- **< 1 hour** → Paper Prototype
- **1-3 hours** → ASCII Mockup
- **Half day** → Text-based Prototype (with detailed logic)

### Step 3: Who's your audience?

- **Users testing** → Paper Prototype
- **Developers** → ASCII Mockup
- **Product managers** → Any, depending on focus

### Step 4: What's being validated?

- **Does this layout work?** → Paper Prototype
- **Is the structure clear?** → ASCII Mockup
- **Does the logic make sense?** → Text-based Prototype

---

## Combining Types

In practice, you can combine multiple types:

### Common Combinations

1. **Paper + Text**
   - Paper for visual layout
   - Text for interaction logic

2. **ASCII + Text**
   - ASCII for structure
   - Text for detailed behavior

3. **All Three**
   - Text for comprehensive documentation
   - ASCII for visual reference
   - Paper for quick sketching during discussions

---

## Rapid Validation Workflow

```
Day 1 (30 min):  Paper Prototype → Get initial feedback
Day 2 (1 hour):  ASCII Mockup → Document approved concepts
Day 3 (2 hours): Text-based → Define complete logic
Day 4:           Review and iterate
```

---

## Related Templates

- [Mockup Templates](mockup-templates.md): Ready-to-use ASCII templates
- [Test Generation](test-generation.md): Generate test cases from prototypes
- [Iteration Roadmap](iteration-roadmap.md): Plan your validation iterations
