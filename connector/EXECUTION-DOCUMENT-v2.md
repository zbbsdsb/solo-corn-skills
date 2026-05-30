# Connector Skill - Evidence-Based Execution Document

**Document Version**: 2.0  
**Date**: 2026-05-20  
**Author**: ceaserzhao (zbbsdsb)  
**Based on**: Cognitive Science Literature Review v2.0

---

## 1. Executive Summary

### 1.1 Project Vision

The Connector Skill enables rapid domain learning and cross-domain knowledge connection, transforming users into "T-shaped" connectors who understand any field quickly and bridge knowledge across disciplines.

### 1.2 Core Problem

Solo entrepreneurs and knowledge workers face three critical challenges:
1. **Learning Velocity**: Cannot keep pace with rapidly evolving fields
2. **Knowledge Retention**: New information is quickly forgotten  
3. **Cross-Domain Synthesis**: Unable to connect insights across disciplines

### 1.3 Solution: Evidence-Based Rapid Learning

Built on **10 foundational cognitive science research papers**, Connector Skill implements evidence-based learning strategies proven to accelerate comprehension and enhance long-term retention.

---

## 2. Scientific Foundation

### 2.1 Memory and Retention

#### Spaced Repetition (Ebbinghaus, 1885)
- **Principle**: Review just before forgetting, with exponentially increasing intervals
- **Optimal Schedule**: Day 1 → Day 4 → Day 11 → Day 30 → Day 60
- **Application**: Knowledge cards with automatic review scheduling

#### Testing Effect (Roediger & Karpicke, 2006)
- **Principle**: Retrieval practice strengthens memory more than restudying
- **Evidence**: 50% better retention with testing vs. rereading
- **Application**: Active recall exercises at each learning session

#### Generation Effect (Slamecka & Graf, 1978)
- **Principle**: Self-generated information is remembered better
- **Mechanism**: Deeper processing during generation
- **Application**: Fill-in exercises, predictions, active note-taking

---

### 2.2 Cognitive Processing

#### Cognitive Load Theory (Sweller, 1988)
- **Framework**: Three types of load (intrinsic, extraneous, germane)
- **Design Rule**: Reduce extraneous load, manage intrinsic load, maximize germane load
- **Application**: Progressive disclosure, layered information delivery, chunking

#### Expertise Development (Chi et al., 1981)
- **Insight**: Novices see surface features; experts see deep structures
- **Design Rule**: Train deep structure recognition
- **Application**: Concept trees showing underlying principles

---

### 2.3 Learning Context

#### Situated Learning (Lave & Wenger, 1991)
- **Principle**: Learning is embedded in authentic activities and communities
- **Application**: Project-based learning, real-world scenarios, expert connections

#### Dreyfus Model (1986)
- **Framework**: Five stages from novice to expert
- **Design Rule**: Target "competent" (1-2 years) not "expert" (10+ years)
- **Application**: Surface → Middle → Deep layer progression

---

### 2.4 Knowledge Transfer

#### Structure-Mapping (Gentner, 1983)
- **Principle**: Analogies map relationships, not just features
- **Process**: Retrieve → Map → Infer → Evaluate
- **Application**: Cross-domain analogy framework, deep structure analysis

#### Transfer Learning (Thorndike, 1901)
- **Rule**: Deep structural similarity enables transfer
- **Design Rule**: Focus on principles, not procedures
- **Application**: Connection Discovery module

---

### 2.5 Self-Regulation

#### Metacognition (Flavell, 1979)
- **Framework**: Knowledge + regulation of cognition
- **Components**: Planning, monitoring, evaluation
- **Application**: Self-assessment checklists, reflection prompts

#### Desirable Difficulties (Bjork, 2011)
- **Principle**: Make learning harder in the short term, easier in the long term
- **Types**: Spacing, interleaving, retrieval, generation
- **Application**: Optimal challenge design in all modules

---

## 3. System Architecture

### 3.1 Module Overview

```
┌─────────────────────────────────────────────────────┐
│                 Connector Skill                      │
├─────────────────────────────────────────────────────┤
│  Module 1: Domain QuickScan (30 min)                 │
│  - Cognitive load management                         │
│  - Generation effect exercises                       │
│  - Initial knowledge structure                       │
├─────────────────────────────────────────────────────┤
│  Module 2: Connection Discovery (15 min)             │
│  - Structure-mapping framework                       │
│  - Cross-domain analogies                            │
│  - Mental model application                          │
├─────────────────────────────────────────────────────┤
│  Module 3: Rapid Mastery Path (Custom)               │
│  - Dreyfus model application                         │
│  - Desirable difficulties                            │
│  - Situated learning projects                        │
├─────────────────────────────────────────────────────┤
│  Module 4: Expert Talk Prep (10 min)                 │
│  - Curse of knowledge mitigation                     │
│  - Key terminology mapping                           │
│  - Intelligent question templates                    │
├─────────────────────────────────────────────────────┤
│  Module 5: Knowledge Archive (Ongoing)               │
│  - Spaced repetition cards                           │
│  - Testing effect exercises                          │
│  - Metacognitive reflection                          │
└─────────────────────────────────────────────────────┘
```

### 3.2 Data Flow

```
User Input (Domain Request)
         ↓
┌─────────────────────────────────────────────────────┐
│ Phase 1: Domain QuickScan                            │
│ - Identify user's background and goals               │
│ - Generate concept tree with deep structures        │
│ - Create initial knowledge cards                     │
│ - Apply: Cognitive load theory, generation effect   │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Phase 2: Connection Discovery                        │
│ - Analyze deep structure of new domain               │
│ - Find structural analogs in known domains           │
│ - Apply mental models as bridges                     │
│ - Apply: Structure-mapping, transfer learning       │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Phase 3: Rapid Mastery Path                          │
│ - Surface layer (2 hours): Conversational fluency    │
│ - Middle layer (1-3 days): Applied competence       │
│ - Deep layer (1 week+): Practitioner level          │
│ - Apply: Dreyfus model, situated learning            │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Phase 4: Expert Talk Prep                            │
│ - Must-know concepts (top 5-7)                       │
│ - Key vocabulary with plain explanations             │
│ - Smart questions that build credibility             │
│ - Apply: Curse of knowledge, dual coding            │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Phase 5: Knowledge Archive                           │
│ - Create structured knowledge cards                  │
│ - Schedule spaced repetition reviews                 │
│ - Link to existing knowledge network                 │
│ - Apply: Ebbinghaus, Roediger, testing effect       │
└─────────────────────────────────────────────────────┘
```

---

## 4. Detailed Module Specifications

### 4.1 Module 1: Domain QuickScan

**Duration**: 30 minutes  
**Goal**: Complete cognitive map of any domain

#### Scientific Basis
- **Cognitive Load Theory**: Progressive disclosure prevents overload
- **Generation Effect**: User predictions engage deeper processing
- **Schema Theory**: Building framework before details

#### Implementation Steps

**Step 1: Context Discovery (5 min)**
```
Questions:
1. What's your project? (Why learn this?)
2. What's your background? (What do you know?)
3. Time available? (30 min / 2 hours / 1 day)
4. Goal? (Understand / Apply / Become expert)
```
*Based on: Metacognitive planning (Flavell)*

**Step 2: Domain Landscape (10 min)**
```
Output:
- One-line definition (explain to 10-year-old)
- 3 core concepts with deep structures
- Common misconceptions to avoid
- Why it matters to the user
```
*Based on: Cognitive load management, curse of knowledge*

**Step 3: Concept Tree (10 min)**
```
Structure:
Layer 1: Fundamentals (learn first)
Layer 2: Key Mechanisms (how it works)  
Layer 3: Applications (what it's used for)
```
*Based on: Chunking, expertise organization (Chi et al.)*

**Step 4: Self-Assessment (5 min)**
```
Checkpoint:
□ Can define in one sentence
□ Can explain 3 core concepts
□ Understands why it matters
□ Identified 1+ deep structures
```
*Based on: Generation effect, metacognition*

#### Output Template
```markdown
# [Domain] QuickScan Report

## Context
- Project: [User's project]
- Background: [User's prior knowledge]
- Time: [Available time]
- Goal: [Learning goal]

## One-Line Definition
[Explain as if to a 10-year-old]

## Concept Tree
```
[Visual hierarchy with deep structures]
```

## Key Vocabulary
| Term | Plain English | Deep Structure |

## Why It Matters
[Personal relevance to user's project]

## Self-Assessment
- [ ] Can define in one sentence
- [ ] Know 3 core concepts
- [ ] Understand why it matters
- [ ] See deep structure (not just surface)
```

---

### 4.2 Module 2: Connection Discovery

**Duration**: 15 minutes  
**Goal**: Find meaningful connections to existing knowledge

#### Scientific Basis
- **Structure-Mapping Theory**: Deep structure > surface features
- **Transfer Learning**: Recognition of common elements
- **Associative Learning**: New connections strengthen memory

#### Implementation Steps

**Step 1: Deep Structure Analysis (5 min)**
```
Prompt: "For each core concept, ask: What is this REALLY about?"

Output:
| Surface Description | Deep Structure |
|---------------------|----------------|
| [What it does]      | [What pattern] |
```
*Based on: Gentner's structure-mapping*

**Step 2: Cross-Domain Analogies (5 min)**
```
Prompt: "What does this remind you of? What familiar domains have similar deep structures?"

Output:
### [New Domain] ↔ [Known Domain]
**Similarities**: [Shared deep structures]
**Differences**: [Key distinctions]
**What Transfers**: [Mental models, strategies]
```
*Based on: Thorndike's transfer learning*

**Step 3: Mental Model Application (5 min)**
```
Question: "Which of our 45+ mental models apply here?"

Examples:
- Second-order thinking → [Application]
- Inversion → [Application]
- Leverage points → [Application]
```
*Based on: Analogical reasoning, schema activation*

#### Output Template
```markdown
# Connection Discovery Report

## Deep Structures Found
| Concept | Deep Structure | Familiar? |
|---------|----------------|-----------|
| [A]     | [Pattern]      | [Y/N]     |

## Cross-Domain Analogies
### [New] ↔ [Known]
- Similarities: [Deep structure matches]
- Differences: [Key distinctions]
- Transfer Value: [What can apply]

## Mental Models Applied
| Model | Application | Insight |

## Innovation Opportunities
1. [Novel application]
2. [Cross-domain synthesis]
```

---

### 4.3 Module 3: Rapid Mastery Path

**Duration**: Custom (2 hours to 1 week+)  
**Goal**: Personalized learning trajectory based on goals

#### Scientific Basis
- **Dreyfus Model**: Target "competent" not "expert"
- **Desirable Difficulties**: Optimal challenge level
- **Situated Learning**: Authentic project context

#### Three-Layer Model

**Surface Layer (2 hours)**
```
Goal: Conversational fluency
Success Criteria:
- Can explain in one sentence
- Can name 3-5 core concepts
- Can ask intelligent questions
- Can recognize related opportunities
```
*Evidence: Dreyfus novice/advanced beginner*

**Middle Layer (1-3 days)**
```
Goal: Applied competence
Success Criteria:
- Can read advanced content
- Can make basic decisions
- Can evaluate claims
- Can work with practitioners
```
*Evidence: Dreyfus competent level*

**Deep Layer (1 week+)**
```
Goal: Practitioner level
Success Criteria:
- Can teach to others
- Can handle edge cases
- Can innovate within field
- Can recognize expertise
```
*Evidence: Dreyfus proficient level*

#### Implementation Steps

**Step 1: Calibrate Destination**
```
Questions:
- Target layer? (Surface/Middle/Deep)
- Project context? (What will you apply it to?)
- Time available? (How much can you invest?)
- Urgency? (High/Medium/Low)
```

**Step 2: Identify Must-Knows**
```
For Surface: Focus on vocabulary + concepts
For Middle: Focus on applications + patterns
For Deep: Focus on principles + edge cases
```

**Step 3: Sequence for Optimal Challenge**
```
Apply Desirable Difficulties:
- Spaced: Distribute practice over time
- Interleaved: Mix different topics
- Varied: Practice with different examples
- Retrieval: Test yourself frequently
```

**Step 4: Integrate Situated Learning**
```
Include:
- Real project to work on
- Expert community to join
- Authenticity of practice context
```

#### Learning Path Template
```markdown
# [Domain] Mastery Path

**Target**: [Layer] level  
**Project**: [User's application]  
**Time**: [Available time]  

## Week Overview
```
Day 1: [Focus] - [Time] - [Goal]
Day 2: [Focus] - [Time] - [Goal]
...
```

## Detailed Schedule

### Day X: [Topic]
**Time**: [Duration]
**Goal**: [Specific outcome]

**Activities**:
1. [ ] [Resource + time]
2. [ ] [Practice + time]
3. [ ] [Reflection + time]

**Checkpoint**: Can you [specific test]?

## Spaced Repetition Schedule
- Day 1: Learn + immediate review
- Day 4: Recall without looking
- Day 11: Apply to new context
- Day 30: Integrate with other knowledge

## Success Criteria
- [ ] Can [surface-level competency]
- [ ] Can [middle-level competency]
- [ ] Can [deep-level competency]
```

---

### 4.4 Module 4: Expert Talk Prep

**Duration**: 10 minutes  
**Goal**: Enable intelligent conversation with domain experts

#### Scientific Basis
- **Curse of Knowledge**: Experts cannot imagine novice views
- **Dual Coding**: Visual + verbal enhances understanding
- **Social Learning**: Experts as learning resources

#### Implementation Steps

**Step 1: Must-Know Concepts (3 min)**
```
Format:
| Concept | Plain English | Why It Matters |
|---------|---------------|----------------|
```
*Based on: Curse of knowledge mitigation*

**Step 2: Smart Questions (5 min)**
```
Categories:
1. Understanding questions (show you've done homework)
2. Insight questions (show you get the deep structure)
3. Future questions (show long-term thinking)
4. Challenge questions (show critical thinking)
```
*Based on: Generation effect, curiosity-driven learning*

**Step 3: Credibility Builders (2 min)**
```
Purpose: Sound like you understand without pretending expertise
Format:
- "I understand it's like [analogy]..."
- "So the key insight is that [principle]..."
- "What I find interesting is [novel connection]..."
```

#### Expert Conversation Template
```markdown
# Expert Conversation Package

## Must-Know Concepts (Top 5-7)
| Concept | Plain English | Why It Matters |
|---------|---------------|----------------|
| [A]     | [Simple def]  | [Relevance]    |

## Key Vocabulary
| Term | Definition | Context |
|------|------------|---------|

## Smart Questions

### To Show Basic Understanding
- "What would you say is most important for newcomers?"
- "How would you explain [core concept]?"

### To Show Deep Understanding  
- "How does [A] interact with [B]?"
- "What's the relationship between [domain] and [related]?"

### To Gain Insights
- "What's a common misconception?"
- "What do you wish you knew starting out?"

### To Show Original Thinking
- "I noticed [cross-domain connection]. Does that apply here?"
- "What if we applied [mental model] to [problem]?"

## Credibility Builders
- "I see it as similar to [analogy] because..."
- "So essentially, [principle] is the key insight?"
- "That reminds me of [other domain] where..."

## Questions to Avoid
- [ ] Basic facts that show no research
- [ ] Questions answerable by Wikipedia
- [ ] Questions that reveal misunderstanding of basics
```

---

### 4.5 Module 5: Knowledge Archive

**Duration**: Ongoing  
**Goal**: Build sustainable cross-domain knowledge system

#### Scientific Basis
- **Ebbinghaus**: Spaced repetition extends retention
- **Roediger**: Testing effect strengthens memory
- **Paivio**: Dual coding improves recall

#### Knowledge Card Structure
```markdown
# [Domain] Knowledge Card

## Front (Question)
What is [concept] and why does it matter?

## Back (Answer)
**Definition**: [Plain English explanation]
**Example**: [Concrete illustration]
**Deep Structure**: [Underlying principle]
**Connection**: [Link to known domain]

## Review Log
- Day 1: [Status]
- Day 4: [Status]  
- Day 11: [Scheduled]
- Day 30: [Scheduled]

## Test Yourself
[Question that requires retrieval]
```

#### Spaced Repetition Protocol
| Review | Interval | Activity | Expected |
|--------|----------|----------|----------|
| 1 | Day 1 | Learn + create card | Encode |
| 2 | Day 4 | Recall without looking | Strengthen |
| 3 | Day 11 | Apply in new context | Deepen |
| 4 | Day 30 | Teach to someone | Transfer |
| 5 | Day 60 | Relate to new learning | Integrate |

#### Connection Notes
```markdown
# Cross-Domain Connection

**From**: [Domain A] - [concept]
**To**: [Domain B] - [related concept]
**Shared Principle**: [Deep structure]
**Insight**: [What this suggests]

**Last Reviewed**: [Date]
**Next Review**: [Date]
```

---

## 5. Quality Assurance Framework

### 5.1 Scientific Rigor Checklist

#### Each Module Must Include:

**Memory & Retention**
- [ ] Spaced repetition reminders
- [ ] Active recall exercises
- [ ] Generation effect activities

**Cognitive Load**
- [ ] Progressive disclosure
- [ ] Information chunking
- [ ] Extraneous load elimination

**Knowledge Transfer**
- [ ] Deep structure identification
- [ ] Cross-domain analogies
- [ ] Mental model application

**Self-Regulation**
- [ ] Self-assessment checkpoints
- [ ] Reflection prompts
- [ ] Strategy adjustment guidance

### 5.2 Verification Checklist

#### Core Functionality
- [ ] SKILL.md defines all 5 modules
- [ ] Each module has scientific basis
- [ ] Output templates are clear
- [ ] Integration with other skills

#### Scientific Accuracy
- [ ] All claims traceable to research
- [ ] Proper attribution of theories
- [ ] Evidence-based recommendations
- [ ] Limitations acknowledged

#### User Experience
- [ ] Progressive disclosure implemented
- [ ] Active engagement throughout
- [ ] Metacognitive prompts included
- [ ] Practical examples provided

---

## 6. Implementation Roadmap

### Phase 1: Core MVP (Week 1-2)
**Deliverables**:
- [ ] SKILL.md with complete module definitions
- [ ] All 5 module templates
- [ ] Literature Review v2.0

**Verification**:
- Human judgment evaluation
- Scientific accuracy check

### Phase 2: Content Development (Week 3-4)
**Deliverables**:
- [ ] 5 domain templates (General/Technology/Business/Design/Science)
- [ ] Connection pattern library
- [ ] Learning method guides

**Verification**:
- Template usability testing
- Cross-domain connection quality

### Phase 3: Integration (Week 5-6)
**Deliverables**:
- [ ] Integration with mental-models skill
- [ ] Integration with research-integration skill
- [ ] Practice examples and case studies

**Verification**:
- End-to-end workflow testing
- User satisfaction evaluation

### Phase 4: Enhancement (Month 2+)
**Deliverables**:
- [ ] AI-driven personalization
- [ ] Knowledge graph visualization
- [ ] Smart spaced repetition
- [ ] Community contributions

**Verification**:
- Algorithm performance metrics
- User retention improvement

---

## 7. Success Metrics

### Learning Effectiveness
- **30-minute QuickScan completion rate**: Target 90%+
- **Cross-domain connections discovered**: Target 3+ per domain
- **Knowledge retention at 30 days**: Target 80%+ (vs. 20% baseline)

### User Satisfaction
- **Overall skill usefulness**: Target 4.5/5
- **Would recommend**: Target 90%+
- **Re-use within 1 week**: Target 70%+

### Scientific Validity
- **Research coverage**: 100% of features traceable
- **Citation accuracy**: Verified against primary sources
- **Implementation fidelity**: Adherence to evidence-based principles

---

## 8. Key Takeaways

### From the Literature:

1. **Active > Passive**: Engagement enhances all learning
2. **Retrieval > Rereading**: Testing strengthens memory
3. **Spacing > Massing**: Distributed practice is more durable
4. **Structure > Surface**: Deep understanding enables transfer
5. **Difficulty = Growth**: Optimal challenges improve long-term learning
6. **Context = Retention**: Situated learning is more durable
7. **Reflection = Regulation**: Metacognition improves self-directed learning

### Design Implications:

- Every module must include **active engagement**
- Knowledge cards must support **spaced repetition**
- Learning paths must manage **cognitive load**
- Connections must identify **deep structures**
- Progress must include **self-assessment**

---

## 9. Appendices

### Appendix A: Key Research Papers

See [LITERATURE-REVIEW-v2.md](references/cognitive-science/LITERATURE-REVIEW-v2.md)

### Appendix B: Theory-to-Practice Matrix

See Section 8.1 of this document

### Appendix C: Implementation Checklists

See Section 5.2 of this document

---

**Document Status**: Complete  
**Version**: 2.0  
**Last Updated**: 2026-05-20  
**Approved By**: ceaserzhao (zbbsdsb)

---

**This document provides the complete scientific foundation and implementation guidance for the Connector Skill. All features are grounded in peer-reviewed cognitive science research.**