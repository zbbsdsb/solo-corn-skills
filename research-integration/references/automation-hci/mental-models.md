# Mental Models in Automation and HCI

This document extracts core mental models from the automation and human-computer interaction (HCI) field to provide actionable thinking frameworks for system design and interaction optimization. Each model can be used independently or combined to form a complete design methodology.

---

## Cognitive Load Assessment Model

### 1. Model Name

**Cognitive Load Assessment Model**

### 2. Source

- Sweller, J. (1988). "Cognitive Load During Problem Solving: Effects on Learning."
- Paas & van Merriënboer (1994). "Instructional Control of Cognitive Load in Learning with Complex Technologies."

### 3. Definition

Human working memory capacity is limited, processing only approximately 7±2 chunks of information simultaneously. Cognitive load is divided into three types: **intrinsic load** (task inherent complexity), **extraneous load** (burden from information presentation methods), and **germane load** (cognitive investment directly related to learning goals). Effective design should reduce extraneous load, optimize intrinsic load, and maximize germane load.

```
┌─────────────────────────────────────────────────────────────┐
│                      Cognitive Load Composition              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    ┌─────────────────────────────────────────────────┐      │
│    │           Total Cognitive Load (Fixed Capacity)  │      │
│    │  ┌───────────────┬───────────────┬───────────┐  │      │
│    │  │  Intrinsic   │  Extraneous   │  Germane  │  │      │
│    │  │   (Task)     │   (Design)    │ (Learning)│  │      │
│    │  │               │               │           │  │      │
│    │  │  ● Unremovable│  ★ Minimize   │  ■ Maximize│  │      │
│    │  │               │               │           │  │      │
│    │  └───────────────┴───────────────┴───────────┘  │      │
│    └─────────────────────────────────────────────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 4. Visualization

```
                  Working Memory Capacity (7±2 chunks)
    ┌────────────────────────────────────────────────────┐
    │  ● ● ● ● ● ● ● ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○          │
    │  Used          Remaining Capacity  Cognitive Overload Risk│
    └────────────────────────────────────────────────────┘

    Low Load State:      ○○○○○○○○○○○○○○○○○○○○○○○○○ Task Too Simple
    Moderate Load:      ●●●●●●●○○○○○○○○○○○○○○○○○ Optimal Learning Zone
    High Load:           ●●●●●●●●●●●○○○○○○○○○○○○○ Approaching Limit
    Cognitive Overload: ●●●●●●●●●●●●●●●●●●●●●●●● Performance Decline
```

### 5. Application Steps

1. **Task Decomposition**: Break down complex tasks into independent subtask units
2. **Load Assessment**: Evaluate the intrinsic load level of each subtask
3. **Presentation Optimization**: Simplify information presentation methods to reduce extraneous load
4. **Progressive Disclosure**: Present information in stages rather than displaying everything at once
5. **Load Monitoring**: Monitor actual load through metrics such as eye tracking, operation time, and error rates
6. **Dynamic Adjustment**: Automatically simplify the interface or provide assistance when excessive load is detected

### 6. Example

**Scenario**: Designing a data visualization dashboard

- **Problem**: Initial design displayed 50+ metrics simultaneously, causing users to frequently switch focus
- **Application**: Adopted progressive disclosure, initially only displaying KPI overview, with users able to expand to view details
- **Result**: Extraneous load significantly reduced, user decision-making efficiency improved by 40%

### 7. Combination Tips

- **+ Attention Allocation Model**: Cognitive load optimization should be paired with attention guidance to ensure critical information receives sufficient cognitive resources
- **+ Trust Calibration Model**: While reducing load, maintain user understanding of system operations to avoid over-reliance

---

## Attention Allocation Model

### 1. Model Name

**Attention Allocation Model**

### 2. Source

- Simon, H. A. (1971). "Designing Organizations for an Information-Rich World."
- Wu, T. (2016). "The Attention Merchants: The Epic Scramble to Get Inside Our Heads."

### 3. Definition

Attention is a scarce resource in human cognition, with processing capacity far lower than information supply capacity. Effective system design should help users focus attention on the most critical decision points, optimizing attention allocation through intelligent filtering, prioritization, and clear information hierarchies, while rejecting dark pattern design to protect user attention assets.

```
┌─────────────────────────────────────────────────────────────┐
│                   Attention Allocation Architecture          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   Information Input ─► Attention Filter ─► Cognitive Processing ─► Decision/Action
│                    │                                      │
│              ┌─────┴─────┐                                  │
│              │           │                                  │
│         [High Priority] [Low Priority]                       │
│              │           │                                  │
│         Immediate Display Collapse/Delay                    │
│                                                             │
│   ┌─────────────────────────────────────────────────┐       │
│   │           Attention Economy Principles            │       │
│   │  "Less is More" | Clear Hierarchy | Protect Focus | Reject Competition │
│   └─────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────┘
```

### 4. Visualization

```
Priority Pyramid:

         ▲ Urgent + Important (Must Handle Immediately)
        ╱ ╲
       ╱   ╲    Important but Not Urgent (Can Plan Handling)
      ╱─────╲
     ╱       ╲  Urgent but Not Important (Automate if Possible)
    ╱─────────╲
   ╱           ╲  Neither Urgent nor Important (Minimize/Hide)
  ╱_____________╲

Information Hierarchy Example:
┌─────────────────────────────────────┐
│  ▣ Core Metrics (3-5 items)    ← Current Focus  │
│  ├─ Secondary Metrics (5-10 items) ← Expandable  │
│  ├─ Detailed Data             ← View on Demand │
│  └─ Historical Records        ← Archived     │
└─────────────────────────────────────┘
```

### 5. Application Steps

1. **Information Audit**: Inventory all information points requiring user attention in the system
2. **Priority Division**: Determine information priorities based on task goals and user decision needs
3. **Hierarchy Design**: Establish clear information hierarchies, placing core information in visual focus areas
4. **Intelligent Filtering**: Automatically collapse or delay low-priority information
5. **Customization Support**: Allow users to adjust information display density according to personal needs
6. **Focus Mode**: Provide a "do not disturb mode" that suppresses non-essential notifications during complex tasks

### 6. Example

**Scenario**: Alert notification design for an intelligent customer service system

- **Problem**: The system designed 20+ different types of notifications, causing user attention fragmentation
- **Application**: Established a three-tier notification system—Critical (red flashing + sound), Warning (yellow badge), Info (silent archiving)
- **Result**: User response time to critical alerts reduced by 65%, overall work satisfaction improved

### 7. Combination Tips

- **+ Cognitive Load Assessment Model**: Attention optimization should consider working memory capacity to avoid information overload
- **+ Human-Machine Collaboration Hierarchy Model**: Attention allocation strategies should differ across automation levels

---

## Human-Machine Collaboration Hierarchy Model

### 1. Model Name

**Human-Machine Collaboration Hierarchy Model** (Levels of Automation Model)

### 2. Source

Parasuraman & Sheridan (2000). "A Model of Types and Levels of Human Interaction with Automation."

### 3. Definition

Human activity can be decomposed into four stages: information acquisition, information analysis, decision selection, and action execution, each of which can have independent automation levels (0-10 levels). Automation is not a binary choice but a continuum; optimal automation levels depend on task complexity, user capability, and system reliability, and should be dynamically adjusted.

```
┌─────────────────────────────────────────────────────────────┐
│              Automation Level Spectrum (Parasuraman & Sheridan)        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Level │  Description              │ Typical Application          │
│ ──────┼──────────────────────────┼─────────────────────────│
│   0    │  Fully Manual             │  Manual Operation           │
│   1    │  System Assists Decision  │  Suggestion Generation       │
│   2    │  Limited Automation       │  Pre-filled Options         │
│   3    │  Conditional Automation   │  Auto-execute when met     │
│   4    │  High Automation          │  Execute with human supervision │
│   5    │  Full Automation          │  No human intervention needed │
│  ...  │                          │                          │
│  10    │  Fully Autonomous         │  Unattended Operation       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Four-Stage Automation Framework:
┌────────────┬────────────┬────────────┬────────────┐
│ Information │ Information │  Decision  │  Action    │
│  Acquisition  │   Analysis  │  Selection  │ Execution  │
├────────────┼────────────┼────────────┼────────────┤
│  Level: 5  │  Level: 3  │  Level: 7  │  Level: 2  │
│  ━━━━━━━━━━│  ━━━━━━    │  ━━━━━━━━━━│  ━━        │
│  Automated │  Semi-auto │  High Auto │  Low Auto  │
└────────────┴────────────┴────────────┴────────────┘
```

### 4. Visualization

```
Dynamic Automation Adjustment Diagram:

Task Complexity ↑
│    ┌──────────────────────────────────────┐
│    │           Dynamic Adjustment Zone      │
│    │   System should adjust levels based on task characteristics ↑↓  │
│    │                                       │
│    │    Level 8 ←→ Level 4 ←→ Level 1   │
│    │                                       │
│    │  High Complexity ─► Reduce Automation ─► Human Led │
│    │  Low Complexity  ─► Increase Automation ─► Machine Led │
│    └──────────────────────────────────────┘
│    └────────────────────────────────────────┐
└─────────────────────────────────────────────┘
        User Capability ↑ (Novice → Expert)

Key Principles:
┌────────────────────────────────────────────┐
│  ★ Appropriate Automation: Augment not replace human capabilities │
│  ★ State Visibility: Users always understand current automation level │
│  ★ Quick Takeover: Retain manual intervention at critical decision points │
│  ★ Dynamic Adaptation: Flexibly adjust automation levels based on context │
└────────────────────────────────────────────┘
```

### 5. Application Steps

1. **Task Decomposition**: Break down target tasks into four stages: information acquisition, analysis, decision-making, and execution
2. **Complexity Assessment**: Evaluate the inherent complexity of each stage
3. **Level Determination**: Determine appropriate automation levels based on complexity, user capability, and system reliability
4. **Human-Machine Division**: Clarify specific responsibilities of humans and machines at each stage
5. **State Visualization**: Design clear ways for users to understand current automation status
6. **Takeover Mechanisms**: Establish quick, seamless manual takeover channels
7. **Dynamic Adjustment**: Implement level adjustments based on task progress and environmental changes

### 6. Example

**Scenario**: Human-machine interface design for an autonomous driving system

- **Problem**: In Level 3 autonomous driving, human supervision easily leads to reduced attention and slow response
- **Application**: Designed dynamic takeover warnings—when the system detects it will soon exceed its capabilities, it issues warnings in advance and gradually reduces automation
- **Result**: Takeover request response time reduced from an average of 4.2 seconds to 1.8 seconds, safety significantly improved

### 7. Combination Tips

- **+ Trust Calibration Model**: Automation levels should match user trust levels to avoid over-trust
- **+ Cognitive Load Assessment Model**: High automation stages must ensure users maintain sufficient situational awareness

---

## Trust Calibration Model

### 1. Model Name

**Trust Calibration Model**

### 2. Source

Lee & See (2004). "Trust in Automation: Designing for Appropriate Reliance."

### 3. Definition

User trust levels in automation systems should match the system's actual reliability. **Over-trust** (Automation Complacency) leads users to ignore system errors; **under-trust** reduces automation benefits and increases workload. Effective trust design establishes appropriate trust through transparency, capability demonstration, and reliability feedback.

```
┌─────────────────────────────────────────────────────────────┐
│                    Trust Calibration Spectrum              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Under-Trust ◀──────────────────────────▶ Over-Trust        │
│    │                                       │                │
│    ▼                                       ▼                │
│  ┌──────────┐    Appropriate Trust ─►  ┌──────────┐           │
│  │ Manual   │  ◄────────────────────►  │ Automation│           │
│  │ Dependence│    Optimal Calibration    │ Dependence│           │
│  │ Low Efficiency│  ━━━━━━━━━━━━━━━━━━  │ Risk Exposure│           │
│  └──────────┘                          └──────────┘           │
│                                                             │
│  ┌─────────────────────────────────────────────────┐        │
│  │  Trust Formation Four Factors                  │        │
│  │  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐ │        │
│  │  │Reliability│  │Predictability│  │Understandability│  │Capability│ │        │
│  │  └────────┘  └────────┘  └────────┘  └────────┘ │        │
│  └─────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

### 4. Visualization

```
Progressive Trust Establishment Process:

Stage 1: Initial Contact
┌─────────────────────────────────────┐
│  System displays working process + clear limitations  │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Transparency: High | Automation: Low          │
└─────────────────────────────────────┘
              ▼
Stage 2: Trust Accumulation
┌─────────────────────────────────────┐
│  System demonstrates correctness + accumulates success cases  │
│  ━━━━━━━━━━━━━━  Automation: Medium         │
│  Transparency: Medium                     │
└─────────────────────────────────────┘
              ▼
Stage 3: Trust Deepening
┌─────────────────────────────────────┐
│  Fine-tune trust levels based on performance  │
│  ━━━━━━━━━━━━━━━━  Automation: High       │
│  Transparency: Low                       │
└─────────────────────────────────────┘

Key Mechanisms:
┌────────────────────────────────────────────┐
│  [Confidence Indicator]  ─► Display decision reliability │
│  [Decision Explanation Panel]  ─► Transparent reasoning process │
│  [Performance Dashboard]    ─► Display system accuracy trends │
│  [Intervention Log]        ─► Record human correction behaviors │
└────────────────────────────────────────────┘
```

### 5. Application Steps

1. **Reliability Assessment**: Objectively evaluate the system's actual performance under various conditions
2. **Expectation Management**: Clearly communicate the system's capabilities and limitations to users
3. **Progressive Disclosure**: Initially display working processes with high transparency, gradually transitioning to automation
4. **Confidence Display**: Display system confidence levels at critical decision points to support informed decision-making
5. **Performance Feedback**: Continuously show users system accuracy and usage effects
6. **Intervention Mechanisms**: Record and provide feedback on human corrective behaviors to reinforce correct perceptions
7. **Dynamic Adjustment**: Dynamically adjust trust levels based on user performance and system changes

### 6. Example

**Scenario**: Trust design for a medical AI diagnostic system

- **Problem**: Doctors either over-trusted AI recommendations leading to missed diagnoses or were overly skeptical resulting in low system usage
- **Application**: Designed a three-tier confidence indicator—High (>90%), Medium (70-90%), Low (<70%), and mandatory display of diagnostic rationale at Low confidence
- **Result**: Misdiagnosis rate reduced by 30%, while doctors' reasonable system usage increased from 45% to 82%

### 7. Combination Tips

- **+ Human-Machine Collaboration Hierarchy Model**: Trust calibration determines appropriate automation level selection
- **+ Cognitive Load Assessment Model**: Maintaining trust requires balancing information transparency and cognitive burden

---

## Human-Machine Control Continuum Model

### 1. Model Name

**Human-Machine Control Continuum Model**

### 2. Source

- Sheridan & Verplank (1978). "Human and Computer Control of Undersea Firefighting Vehicles."
- IEEE (2020). "Ethically Aligned Design: A Vision for Prioritizing Human Well-being."

### 3. Definition

A continuous spectrum exists between human control and machine control rather than a binary opposition. Effective design requires clearly delineating decision-making authority, establishing clear "exit strategy" mechanisms, ensuring sufficient situational awareness, and maintaining human dominance over critical decisions.

```
┌─────────────────────────────────────────────────────────────┐
│                   Human-Machine Control Continuum            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Fully Manual ◀══════════════════════════════════════▶ Fully Automatic       │
│   👤 ────👤→ ────👤/🤖 ────🤖→ ────🤖 ────🤖👥 ────🤖        │
│  ━━━━    ════════════════════════════════════════          │
│                                                             │
│  Authority Allocation Example:                          │
│  ┌─────────────────────────────────────────────────┐       │
│  │  Human Led Zone  │  Shared Control Zone │ Machine Led Zone  │       │
│  │  - Strategic Decisions│  - Tactical Execution│  - Daily Operations │       │
│  │  - Exception Handling│  - Coordination   │  - Pattern Recognition│       │
│  │  - Ethical Judgments│  - Progress Monitoring│  - Data Processing  │       │
│  └─────────────────────────────────────────────────┘       │
│                                                             │
│  Exit Strategy Matrix:                              │
│  ┌────────────┬────────────┬────────────┐                  │
│  │   Scenario   │   Trigger Conditions│   Response Mechanism│                  │
│  ├────────────┼────────────┼────────────┤                  │
│  │  Emergency Takeover│  Anomaly Detection│  Immediate Switch│                  │
│  │  Planned Handover│  Task Completion│  Smooth Transition│                  │
│  │  Gradual Exit│  User Request│  Confirm then Execute│                  │
│  └────────────┴────────────┴────────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

### 4. Visualization

```
Decision Authority Allocation Example:

         Strategic Level (Human)
            │
            ▼
    ┌──────────────┐
    │   Goal Setting   │  Humans define goals
    │   Constraints    │  Humans set boundaries
    └──────────────┘
            │
            ▼
         Tactical Level (Collaboration)
    ┌──────────────┐
    │  Execution Plan   │  Machine generated, human approved
    │  Risk Assessment  │  Machine analyzed, human confirmed
    │  Resource Allocation│  Collaborative decision-making
    └──────────────┘
            │
            ▼
         Operational Level (Machine)
    ┌──────────────┐
    │  Daily Monitoring│  Machine automatically executes
    │  Routine Adjustments│  Machine autonomously handles
    │  Exception Reporting│  Machine identifies, humans handle
    └──────────────┘

Situational Awareness Elements:
┌────────────────────────────────────────────┐
│  System State:  Current Mode | Operational Metrics | Health   │
│  Environment State:  Context | Constraints | Change Trends   │
│  Collaboration State:  Waiting | In Progress | Completion    │
└────────────────────────────────────────────┘
```

### 5. Application Steps

1. **Authority Audit**: Analyze the nature and risk level of all decision points in the system
2. **Authority Matrix**: Establish specific authority of humans and machines at each decision point
3. **Exit Strategies**: Design clear human intervention paths for each automation scenario
4. **Situational Awareness**: Ensure humans can obtain information needed to judge intervention timing
5. **Communication Design**: Establish efficient authority handover and information synchronization mechanisms
6. **Regular Testing**: Implement "human-in-the-loop" testing to verify human intervention capabilities
7. **Recording and Tracing**: Record all decision processes to support post-hoc review and optimization

### 6. Example

**Scenario**: Remote monitoring system for a smart manufacturing production line

- **Problem**: Operators easily lost situational awareness during remote supervision, not knowing when intervention was needed
- **Application**: Designed "state arc" visualization—showing the system's current state deviation from normal ranges, automatically escalating notifications when deviation exceeded thresholds
- **Result**: Exception response time reduced from an average of 45 minutes to 8 minutes, false alarm rate reduced by 50%

### 7. Combination Tips

- **+ Human-Machine Collaboration Hierarchy Model**: Specific position on the control continuum determines automation levels at each stage
- **+ Trust Calibration Model**: Trust levels influence humans' willingness to retain control

---

## Model Combination Application Guide

### Combination Scenario 1: Complex Automation System Design

```
Step 1: Cognitive Load Assessment Model
    └─ Analyze task complexity, evaluate intrinsic load at each stage

Step 2: Attention Allocation Model
    └─ Design information hierarchy and prioritization based on load assessment

Step 3: Human-Machine Collaboration Hierarchy Model
    └─ Determine appropriate automation levels for each stage

Step 4: Trust Calibration Model
    └─ Design transparency mechanisms to establish appropriate trust levels

Step 5: Human-Machine Control Continuum Model
    └─ Delineate decision authority, establish exit strategies
```

### Combination Scenario 2: AI Decision Support System Design

```
Core Principle: Augment humans, not replace them

Information Presentation (Cognitive Load + Attention)
    └─ Provide just the right amount of information

Decision Support (Collaboration Hierarchy + Control Continuum)
    └─ Humans lead strategy, AI assists analysis

Trust Management (Trust Calibration)
    └─ Display confidence levels, support informed decision-making

Ethical Safeguards (Control Continuum)
    └─ Retain veto power, ensure human autonomy
```

---

## Quick Reference Card

| Model | Core Question | Key Metrics |
|-------|---------------|-------------|
| Cognitive Load Assessment | Is the information amount appropriate? | Chunk count, error rate, task time |
| Attention Allocation | Is the focus correct? | Gaze points, response time, omission rate |
| Human-Machine Collaboration Hierarchy | Are automation levels correct? | Takeover time, task completion rate |
| Trust Calibration | Are trust levels appropriate? | Dependence, skepticism rate, intervention rate |
| Human-Machine Control Continuum | Is authority division clear? | Intervention time, decision quality |

---

*Document Version: 1.0*
*Source: Extracted from foundational-papers.md and key-insights.md*
*Maintainer: Research Integration Team*
