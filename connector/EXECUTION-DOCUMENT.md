# Connector Skill - Formal Execution Document

## Document Information

- **Document Title**: Connector Skill - Execution Plan Based on Cognitive Science Research
- **Version**: 1.0
- **Date**: 2026-05-20
- **Author**: ceaserzhao (zbbsdsb)
- **Status**: Ready for Implementation

---

## 1. Executive Summary

### 1.1 Project Overview

**Connector Skill** is an AI-powered skill designed to help users rapidly learn any domain and build cross-domain knowledge connections. The goal is not to create experts, but to cultivate **"connectors"** - individuals who can understand any field quickly and bridge knowledge across domains.

### 1.2 Core Problem Solved

Solo entrepreneurs and knowledge workers face three critical challenges:
1. **Learning Velocity**: Cannot keep pace with rapidly evolving fields
2. **Knowledge Retention**: New information is quickly forgotten
3. **Cross-Domain Synthesis**: Unable to connect insights across disciplines

### 1.3 Solution Architecture

Built on **20 foundational cognitive science research papers**, Connector Skill implements evidence-based learning strategies that accelerate comprehension and enhance long-term retention.

---

## 2. Theoretical Foundation

### 2.1 The Science of Learning - Key Research

#### 2.1.1 Memory and Retention

**Ebbinghaus (1885) - Forgetting Curve**
- Discovery: Information decays exponentially over time
- Implication: Review intervals must be strategically placed

**Wozniak (1990s) - Spaced Repetition Algorithm**
- Innovation: SM-2 algorithm for optimal review scheduling
- Application: Knowledge cards with increasing review intervals

#### 2.1.2 Learning Efficiency

**Slamecka & Graf (1978) - Generation Effect**
- Principle: Active generation > passive reading
- Application: Fill-in exercises, recall prompts, problem-solving

**Roediger & Karpicke (2006) - Testing Effect**
- Discovery: Retrieval practice is more effective than restudying
- Application: Active recall in every learning session

#### 2.1.3 Cognitive Constraints

**Sweller (1988) - Cognitive Load Theory**
- Framework: Three types of load (intrinsic, extraneous, germane)
- Application: Layered information delivery, progressive disclosure

**Bjork (1994) - Desirable Difficulties**
- Principle: Making learning harder in the short term improves long-term retention
- Application: Spaced testing, interleaved practice

#### 2.1.4 Knowledge Transfer

**Thorndike & Woodworth (1901) - Transfer of Learning**
- Discovery: Transfer depends on deep structural similarities
- Application: Cross-domain analogy framework

**Gentner (1983) - Structure-Mapping Theory**
- Innovation: System-level analogy perception
- Application: Deep structure analysis in connection discovery

### 2.2 Theory Integration Matrix

| Learning Challenge | Research-Based Solution | Implementation Module |
|-------------------|------------------------|---------------------|
| Memory decay | Spaced repetition | Knowledge Archive |
| Information overload | Cognitive load management | Domain QuickScan |
| Passive reading | Active generation | All modules |
| Surface learning | Deep structure analysis | Connection Discovery |
| Context separation | Situated learning | Rapid Mastery Path |
| Novice perspective | Curse of knowledge awareness | Expert Talk Prep |
| Self-monitoring | Metacognitive prompts | All modules |

---

## 3. Implementation Architecture

### 3.1 Module Structure

```
connector/
├── SKILL.md                              # Core skill definition
├── references/
│   ├── cognitive-science/               # 8 foundational papers
│   │   ├── cognitive-load-theory.md     # Sweller (1988)
│   │   ├── generation-effect.md         # Slamecka & Graf (1978)
│   │   ├── spaced-repetition.md         # Ebbinghaus (1885)
│   │   ├── situated-learning.md         # Lave & Wenger (1991)
│   │   ├── transfer-learning.md         # Thorndike (1901)
│   │   ├── metacognition.md             # Flavell (1979)
│   │   ├── desirable-difficulties.md    # Bjork (1994)
│   │   ├── knowledge-curse.md           # Camerer (1989)
│   │   └── LITERATURE-REVIEW.md         # Complete literature review
│   └── rapid-learning/                  # 5 practical methods
│       ├── domain-quickscan.md          # 30-minute overview method
│       ├── connection-discovery.md      # Cross-domain bridge method
│       ├── rapid-mastery-path.md        # Layered learning method
│       ├── expert-conversation.md       # Expert dialogue prep
│       └── knowledge-archive.md         # Card system method
└── implementations/                     # AI-specific implementations
    ├── prompts/                         # Skill activation prompts
    └── templates/                       # Output templates
```

### 3.2 Data Flow Architecture

```
User Input (Domain Request)
         ↓
┌─────────────────────────────────────────────────────┐
│ Module 1: Domain QuickScan                          │
│ - 30-minute cognitive map                           │
│ - Cognitive load management (Sweller)               │
│ - Active generation (Slamecka)                      │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Module 2: Connection Discovery                       │
│ - Deep structure analysis (Thorndike)               │
│ - Cross-domain analogies (Gentner)                   │
│ - Mental model mapping                              │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Module 3: Rapid Mastery Path                        │
│ - 3-layer model (Surface/Middle/Deep)               │
│ - Situated learning (Lave & Wenger)                 │
│ - Desirable difficulties (Bjork)                    │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Module 4: Expert Talk Prep                          │
│ - Curse of knowledge mitigation (Camerer)           │
│ - Key terminology mapping                           │
│ - Intelligent question templates                   │
└─────────────────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────────────────┐
│ Module 5: Knowledge Archive                          │
│ - Spaced repetition cards (Ebbinghaus)             │
│ - Testing effect exercises (Roediger)               │
│ - Cross-domain connection notes                     │
└─────────────────────────────────────────────────────┘
```

---

## 4. Detailed Module Specifications

### 4.1 Module 1: Domain QuickScan

**Objective**: Generate comprehensive cognitive map in 30 minutes

**Cognitive Science Basis**:
- **Cognitive Load Theory**: Limit initial information to prevent overload
- **Generation Effect**: Engage user in concept prediction
- **Dual Coding**: Visual concept trees + verbal explanations

**Implementation Steps**:

| Step | Duration | Activity | Science Principle |
|------|----------|----------|------------------|
| 1. Context Discovery | 2 min | Learn user's background and goals | Schema activation |
| 2. Domain Landscape | 5 min | One-line definition + key distinctions | Chunking |
| 3. Core Concepts | 10 min | 3-layer concept tree | Progressive disclosure |
| 4. Key Players | 3 min | Experts and resources | Situated learning |
| 5. Self-Assessment | 5 min | Recall and reflection | Testing effect |

**Output Format**:
```markdown
# [Domain] QuickScan Report

## One-Line Definition
[Explain as if to a 10-year-old]

## Core Concept Tree
```
[Visual hierarchy: Fundamentals → Mechanisms → Applications]
```

## Key Vocabulary
| Term | Plain English | Why It Matters |

## Your Assessment
- [ ] Can define in one sentence
- [ ] Know the 3 core concepts
- [ ] Understand why it matters
```

**Quality Metrics**:
- User can explain domain in one sentence
- User can name 3 core concepts
- User can identify at least 1 cross-domain connection

---

### 4.2 Module 2: Connection Discovery

**Objective**: Identify meaningful connections to existing knowledge

**Cognitive Science Basis**:
- **Transfer Learning**: Deep structure > surface similarity
- **Structure-Mapping**: System-level analogy perception
- **Associative Learning**: New connections strengthen memory

**Implementation Steps**:

| Step | Duration | Activity | Science Principle |
|------|----------|----------|------------------|
| 1. Deep Structure Analysis | 10 min | Identify fundamental patterns | Transfer learning |
| 2. Known Analog Search | 10 min | Find familiar domains | Schema matching |
| 3. Mental Model Application | 10 min | Apply 45+ mental models | Analogy framework |
| 4. Insight Generation | 5 min | Document novel connections | Creative synthesis |

**Connection Discovery Framework**:
```markdown
## Deep Structure Analysis

| [Domain] Concept | Surface Description | Deep Structure |
|------------------|---------------------|----------------|
| [Concept A] | [What it does] | [Fundamental pattern] |

## Cross-Domain Analogies

### [New Domain] ↔ [Known Domain]
**Similarities**:
1. [Both share X]
2. [Both work because Y]

**Differences**:
1. [Key distinction]

**What Transfers**:
- [Mental model A] applies because...
- [Strategy B] might work because...

## Mental Models Applied
| Model | Application | Insight Generated |
|-------|-------------|-------------------|
| Second-order thinking | [Use case] | [Connection] |
```

---

### 4.3 Module 3: Rapid Mastery Path

**Objective**: Generate personalized "just enough" learning trajectory

**Cognitive Science Basis**:
- **Dreyfus Model**: Novice to expert progression
- **Desirable Difficulties**: Optimal challenge level
- **Interleaved Practice**: Mixed problem types

**Three-Layer Model**:

| Layer | Time | Goal | Success Criteria |
|-------|------|------|-----------------|
| Surface | 2 hours | Conversational fluency | Can explain, can ask good questions |
| Middle | 1-3 days | Applied competence | Can evaluate, can make decisions |
| Deep | 1 week+ | Practitioner level | Can teach, can innovate |

**Path Generation Algorithm**:
1. **Calibrate**: Assess user's background and time constraints
2. **Prioritize**: Apply 20/80 rule to identify critical concepts
3. **Sequence**: Order for optimal challenge progression
4. **Schedule**: Integrate spaced repetition intervals

**Personalized Path Template**:
```markdown
# [Domain] Mastery Path

**Target Layer**: [Surface/Middle/Deep]
**Your Project**: [Context]
**Time Available**: [Duration]

## Week Overview
Day 1: [Focus] - [Time] - [Goal]
Day 2: [Focus] - [Time] - [Goal]
...

## Detailed Schedule
### Day X: [Topic]
**Time**: [Duration]
**Goal**: [Specific outcome]

**Activities**:
1. [ ] [Resource] - [Time]
2. [ ] [Practice] - [Time]
3. [ ] [Reflection] - [Time]

**Checkpoint**: Can you [specific test]?

## Spaced Review Schedule
Day 1: Learn + immediate review
Day 4: Recall without looking
Day 7: Apply to new context
Day 14: Teach it to someone
Day 30: Apply in real project
```

---

### 4.4 Module 4: Expert Talk Prep

**Objective**: Enable intelligent conversation with domain experts

**Cognitive Science Basis**:
- **Curse of Knowledge**: Experts cannot easily imagine novice views
- **Active Preparation**: Generation effect for conversation readiness
- **Pattern Recognition**: Mental model scaffolding

**Preparation Framework**:
```markdown
## Expert Conversation Package

### Must-Know Concepts (5-7)
| Concept | Plain English | Why It Matters |
|---------|---------------|----------------|
| [A] | [Definition] | [Relevance] |

### Key Vocabulary
| Term | Definition | Context |
|------|------------|---------|

### Smart Questions
**To Understand Basics**:
- "What would you say is the most important thing newcomers miss?"
- "How would you explain [core concept] to someone new?"

**To Show Understanding**:
- "How does [concept A] interact with [concept B]?"
- "What's the relationship between [domain] and [related field]?"

**To Gain Insights**:
- "What's a common misconception about [topic]?"
- "What do you wish you knew when you started?"

### Credibility Builders
- "I understand it's like [analogy]..."
- "So the key insight is that [principle]..."

### Questions to Avoid
[ ] Questions that reveal you haven't done basic research
[ ] Questions that can be answered by reading the Wikipedia article
```

---

### 4.5 Module 5: Knowledge Archive

**Objective**: Build sustainable cross-domain knowledge system

**Cognitive Science Basis**:
- **Spaced Repetition**: Combat forgetting curve
- **Testing Effect**: Retrieval practice over restudying
- **Dual Coding**: Multiple memory encoding channels

**Knowledge Card Structure**:
```markdown
# [Domain] Knowledge Card

## Core Information
**Concept**: [Name]
**Domain**: [Field]
**Date Added**: [Date]

## Front (Question)
What is [concept] and why does it matter?

## Back (Answer)
[Simple explanation]
[Concrete example]
[Cross-domain connection]

## Deep Structure
[Fundamental principle it exemplifies]

## Review Log
- Day 1: ✓ Learned
- Day 4: ✓ Reviewed
- Day 11: ⏳ Next review
- Day 30: Scheduled
```

**Spaced Review Protocol**:
| Review | Interval | Activity | Expected Outcome |
|--------|----------|----------|-----------------|
| 1 | Day 1 | Initial learning + card creation | Encode information |
| 2 | Day 4 | Recall without looking | Strengthen retrieval path |
| 3 | Day 11 | Apply to new context | Deepen understanding |
| 4 | Day 30 | Teach to someone | Transfer to long-term memory |

---

## 5. Quality Assurance Framework

### 5.1 Verification Checklist

#### Core Files
- [ ] SKILL.md with complete module definitions
- [ ] All 8 cognitive science papers documented
- [ ] All 5 rapid learning methods implemented
- [ ] Literature review with 20+ citations

#### Module Functionality
- [ ] Domain QuickScan generates complete cognitive map
- [ ] Connection Discovery identifies 3+ cross-domain links
- [ ] Rapid Mastery Path provides personalized trajectory
- [ ] Expert Talk Prep includes smart question templates
- [ ] Knowledge Archive supports card creation and review

#### Scientific Rigor
- [ ] All features traceable to research papers
- [ ] Implementation follows evidence-based principles
- [ ] Quality metrics defined for each module

### 5.2 Acceptance Criteria

| Module | Criterion | Verification Method |
|--------|-----------|-------------------|
| QuickScan | User can explain domain in one sentence | User self-assessment |
| Connection | 3+ meaningful connections found | Peer review |
| Mastery Path | Personalized based on background | User feedback |
| Expert Prep | Enables intelligent conversation | User post-conversation report |
| Archive | Review schedule increases retention | Spaced repetition tracking |

---

## 6. Integration with Existing Skills

### 6.1 With mental-models Skill

**Synergy Points**:
- Reuse 45+ mental models as the basis for connection discovery
- Embed relevant mental models in learning paths
- Emphasize "using mental models to connect domains"

**Integration Method**:
```markdown
## Connection Discovery Enhancement

When analyzing [domain], automatically suggest:
1. "Which mental models might apply here?"
2. "What [domain] principle resembles [mental model]?"
3. "How would [expert] think about this?"
```

### 6.2 With research-integration Skill

**Synergy Points**:
- Reuse literature review capabilities for in-depth research
- Share knowledge graph construction methods

**Integration Method**:
```markdown
## Deep Dive Option

For users wanting more depth:
"Would you like me to conduct a research-level review of [topic]?
This will use the research-integration skill for a 2-hour deep dive."
```

---

## 7. Development Roadmap

### Phase 1: MVP (Week 1-2)
**Deliverables**:
- [ ] Core SKILL.md file
- [ ] All 8 cognitive science papers
- [ ] Domain QuickScan module
- [ ] Connection Discovery module
- [ ] Basic output templates

**Success Metrics**:
- Human-judgment evaluation of outputs
- User satisfaction rating ≥ 4/5

### Phase 2: Full Implementation (Week 3-4)
**Deliverables**:
- [ ] Rapid Mastery Path module
- [ ] Expert Talk Prep module
- [ ] Knowledge Archive with card system
- [ ] 3 domain-specific templates

**Success Metrics**:
- Complete workflow tested
- 3+ successful user sessions

### Phase 3: Expansion (Month 2)
**Deliverables**:
- [ ] 5 domain templates (General/Technology/Business/Design/Science)
- [ ] 10 classic connection patterns
- [ ] Enhanced mental model integration
- [ ] Community feedback integration

**Success Metrics**:
- Template library coverage
- User-reported connection quality

### Phase 4: Intelligence (Month 3)
**Deliverables**:
- [ ] AI-driven connection suggestions
- [ ] Personalized learning path algorithm
- [ ] Smart review scheduling
- [ ] Knowledge graph visualization

**Success Metrics**:
- Algorithm accuracy metrics
- User retention improvement

---

## 8. Risk Management

### 8.1 Technical Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Over-reliance on templates | Medium | High | Emphasize adaptive generation |
| Quality inconsistency | Medium | Medium | Quality checklist + human review |
| Integration complexity | Low | Medium | Modular development + testing |

### 8.2 User Adoption Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Learning curve too steep | Medium | High | Progressive disclosure of features |
| Time investment perceived as high | Medium | Medium | Demonstrate 30-minute quick wins |
| Memory system abandonment | High | Medium | Gamification + reminders |

### 8.3 Scientific Validity Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Research misinterpretation | Low | High | Peer review of theoretical foundation |
| Over-simplification | Medium | Medium | Link to primary sources |

---

## 9. Success Metrics

### 9.1 User Value Metrics

- **Learning Velocity**: Time to basic comprehension reduced by 60%
- **Knowledge Retention**: 80% retention at 30 days (vs. 20% baseline)
- **Cross-Domain Connections**: Average 5+ connections per domain learned
- **Expert Conversation Quality**: User-rated confidence ≥ 4/5

### 9.2 Product Growth Metrics

- **Skill Usage Rate**: Target: Top 3 most-used skills
- **User Retention**: 70% reuse within 1 week
- **Knowledge Card Growth**: 10+ cards per active user
- **Connection Library**: 50+ documented cross-domain insights

### 9.3 Scientific Rigor Metrics

- **Research Coverage**: 100% of features traceable to papers
- **Citation Accuracy**: Verified against primary sources
- **Implementation Fidelity**: Adherence to evidence-based principles

---

## 10. Conclusion

This execution document provides a comprehensive roadmap for implementing the Connector Skill based on 20 foundational cognitive science research papers. The skill is designed to help solo entrepreneurs and knowledge workers rapidly learn any domain and build valuable cross-domain knowledge connections.

### Key Differentiators

1. **Evidence-Based Design**: Every feature is grounded in peer-reviewed research
2. **Rapid Learning**: 30-minute cognitive maps vs. traditional multi-hour study
3. **Cross-Domain Focus**: Connections are the primary value, not just knowledge
4. **Sustainable System**: Spaced repetition ensures long-term retention
5. **Expert Enablement**: Bridge the gap between novices and experts

### Call to Action

The theoretical foundation is complete. Implementation can begin immediately with Phase 1 deliverables.

---

## Appendices

### Appendix A: Complete Literature Citation List

See [LITERATURE-REVIEW.md](references/cognitive-science/LITERATURE-REVIEW.md) for full citation details.

### Appendix B: Module Interaction Diagrams

See individual module documentation in [references/](references/).

### Appendix C: Testing Protocols

Detailed testing protocols available in development documentation.

---

**Document Control**
- Version: 1.0
- Status: Approved for Implementation
- Last Updated: 2026-05-20
- Approved By: ceaserzhao
