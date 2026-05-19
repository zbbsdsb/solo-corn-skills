# Flow-Based Decision Frameworks

## Overview

Flow-based decision frameworks model problems as sequences of states and transitions, where actions or events trigger movement from one state to another. Unlike decision trees that branch based on evaluation criteria and matrices that position options spatially, flow frameworks emphasize the dynamic progression through defined states toward outcomes.

These frameworks are essential when decisions cannot be made independently but must consider the current state and history of the process. They make temporal dependencies explicit and ensure that appropriate actions are taken at each stage of a process.

The Collector skill employs flow-based frameworks for multi-step procedures, iterative refinement processes, and any situation where actions build upon previous states.

## If-This-Then-That (IFTTT) Logic Framework

### Framework Description

The If-This-Then-That logic framework implements conditional decision-making where specific conditions trigger predetermined responses. This simple but powerful structure underlies everything from basic automation rules to complex business logic systems.

The fundamental structure is: IF condition THEN action (ELSE alternative action). When conditions are compound, the framework extends to: IF condition1 AND/OR condition2 THEN action. This logic captures most rule-based decision-making in a form that is both human-readable and machine-executable.

### Condition Types

**Simple Conditions**: Binary checks that evaluate to true or false.

```
IF user.is_authenticated THEN display_dashboard ELSE display_login
```

**Compound Conditions**: Multiple conditions combined with logical operators.

```
IF user.is_authenticated AND user.has_permission('edit')
    THEN enable_edit_mode ELSE disable_edit_mode
```

**Threshold Conditions**: Comparisons against numeric or categorical thresholds.

```
IF response_time > 1000ms THEN escalate_to_engineer
```

**Pattern Conditions**: Checks for presence or absence of elements.

```
IF artifact.contains_error() THEN flag_for_review
```

### Action Types

**State-Setting Actions**: Change the current state or context.

```
IF request.type == 'create' THEN enter_creation_workflow
```

**Invocation Actions**: Call another capability or service.

```
IF analysis_required THEN invoke analyzer_capability
```

**Notification Actions**: Alert stakeholders or update observers.

```
IF decision_made THEN notify_stakeholders(decision.outcome)
```

**Transition Actions**: Move to a different phase or mode.

```
IF input_validated THEN transition_to_processing_phase
```

### Template Structure

```
RULE: [Rule Identifier and Purpose]

TRIGGER:
    [Primary condition that initiates rule evaluation]

CONDITION(S):
    Primary:   [Main condition to evaluate]
    Combined: [AND/OR logic with additional conditions]
    
THEN ACTION:
    [Primary action to execute when conditions are met]
    
ELSE ACTION: (optional)
    [Alternative action when conditions are not met]

POST-CONDITIONS:
    [Expected state after action execution]
    
MONITORING:
    [Criteria to verify rule is functioning correctly]
```

### Business Case - Zapier Workflow Automation

Zapier, a workflow automation platform, enables users to create IFTTT-style automations connecting different web applications. Users define triggers (IF this happens) and actions (THEN do that). For example: "IF a new row is added to a Google Sheets spreadsheet, THEN send a Slack message to the #operations channel." This simple framework has enabled millions of automated workflows, demonstrating the power of clear conditional logic.

### Business Case - Twilio Error Handling

Twilio implements IFTTT-style error handling in its communications platform. When an API call fails, the system evaluates conditions in sequence:

```
IF error.code == 'AUTH_001' THEN return 'Invalid credentials' AND log_auth_failure
IF error.code == 'RATE_LIMIT' THEN return 'Rate exceeded' AND apply_backoff
IF error.code == 'NOT_FOUND' THEN return 'Resource not found' AND log_missing
ELSE return 'Internal error' AND alert_oncall
```

This structured error handling provides consistent, informative responses to developers while enabling operational monitoring and response.

### Business Case - Shopify Order Fulfillment States

Shopify models order fulfillment as a state machine with IFTTT-style transition rules:

```
IF order.placed AND payment.confirmed THEN transition_to('processing')
IF order.processing AND inventory.reserved THEN transition_to('fulfilled')
IF order.fulfilled AND delivery.confirmed THEN transition_to('delivered')
IF order.status IN ('processing', 'fulfilled') AND cancellation.requested THEN 
    transition_to('cancelled') AND refund_customer
```

This clear logic enables merchants to understand exactly how orders move through states and what triggers each transition.

## State Machine Framework

### Framework Description

A state machine is a computational model that describes a system as existing in one of a finite number of states. Transitions between states occur based on events or conditions. The state machine framework is ideal for representing processes with distinct phases, well-defined transitions, and predictable behavior.

State machines provide several advantages: they make process flow explicit and visualizable, they ensure all valid states and transitions are defined, and they prevent invalid state transitions through enforced rules.

### State Machine Components

**States**: Distinct conditions or phases the system can occupy.

- **Initial State**: The starting point of the process.
- **Intermediate States**: Phases between start and completion.
- **Final States**: Terminal conditions (success, failure, cancellation).
- **Error States**: Exceptional conditions requiring handling.

**Events**: Triggers that initiate transitions.

- External events (user actions, system signals)
- Temporal events (timeouts, scheduled triggers)
- Completion events (sub-process finished)

**Transitions**: Movement from one state to another.

- Guard conditions that must be satisfied
- Actions that execute during transition
- Post-transition state updates

**Actions**: Operations that occur during transitions.

- Entry actions (executing upon entering a state)
- Exit actions (executing upon leaving a state)
- Transition actions (executing during the transition)

### State Machine Template

```
┌─────────────────────────────────────────────────────────────┐
│                    STATE MACHINE: [Name]                   │
├─────────────────────────────────────────────────────────────┤
│ STATES:                                                    │
│   • [State_1] - Description of initial state               │
│   • [State_2] - Description of intermediate state           │
│   • [State_3] - Description of final state                 │
│   • [Error_State] - Description of error handling state     │
├─────────────────────────────────────────────────────────────┤
│ TRANSITIONS:                                               │
│   [State_1] ──[Event: guard]──▶ [State_2]                  │
│   [State_1] ──[Event: guard]──▶ [Error_State]              │
│   [State_2] ──[Event: guard]──▶ [State_3]                  │
│   [State_2] ──[Event: guard]──▶ [State_1] (rollback)       │
├─────────────────────────────────────────────────────────────┤
│ INVARIANTS:                                                │
│   [Conditions that must hold in all states]                │
└─────────────────────────────────────────────────────────────┘
```

### State Definition Template

```
STATE: [State_Name]

Entry Conditions:
    [What must be true before entering this state]

Entry Actions:
    [Operations to perform upon state entry]

Allowed Transitions:
    → [Next_State_1] (on [Event_1] if [Guard_1])
    → [Next_State_2] (on [Event_2] if [Guard_2])

Forbidden Transitions:
    → [Impossible_Next_State] (reason: [explanation])

Exit Conditions:
    [What must be true before exiting this state]

Exit Actions:
    [Operations to perform upon state exit]

State Validation:
    [How to verify the state is functioning correctly]
```

### Business Case - AWS Lambda Function States

AWS Lambda implements function execution as a state machine with well-defined states:

```
States:
    • Pending - Function received, initialization starting
    • Active - Function executing
    • Idle - Function completed, awaiting deletion
    • Failed - Function error occurred

Transitions:
    Pending → Active (on invocation)
    Active → Idle (on successful completion)
    Active → Failed (on error)
    Idle → Pending (on re-invocation)
    Failed → Active (on retry)
```

This state machine enables Lambda to track function lifecycle, manage resource allocation, and implement retry logic with clear boundaries between states.

### Business Case - Stripe Payment Processing

Stripe models payment processing as a state machine ensuring consistent, auditable transitions:

```
States:
    • requires_payment_method - Initial state, awaiting card
    • requires_confirmation - Payment method provided, awaiting confirm
    • requires_action - 3D Secure or other action required
    • processing - Payment being processed by network
    • succeeded - Payment successful
    • canceled - Payment cancelled before processing
    • failed - Payment failed

Key Transitions:
    requires_confirmation → processing (on confirm())
    processing → succeeded (on network approval)
    processing → failed (on network decline)
    requires_action → processing (on action completed)
```

The explicit state machine prevents invalid operations (e.g., cannot confirm an already-succeeded payment) and enables clear error handling.

### Business Case - GitHub Issue Lifecycle

GitHub implements issue state as a state machine with the following structure:

```
States:
    • Open - Issue is active and awaiting resolution
    • Closed - Issue is resolved or won't be addressed

Transitions:
    Open → Closed (by: assignee, maintainer)
         Actions: Set resolution type (fixed, wontfix, duplicate, incomplete)
    Closed → Open (by: anyone)
         Actions: Reopen with new information

Closed Sub-States (metadata):
    • Fixed - Issue resolved with code change
    • Wontfix - Deliberately not addressing
    • Duplicate - Already exists as another issue
    • Incomplete - Needs more information
```

The GitHub Actions workflow state machine extends this further:

```
States:
    • Queued - Workflow triggered, waiting for runner
    • InProgress - Running on selected runner
    • Completed - All jobs finished
    • Waiting - Blocked by dependency

Transitions:
    Queued → InProgress (on runner_assigned)
    InProgress → Completed (on all_jobs_done)
    InProgress → Waiting (on dependency_not_met)
    Waiting → InProgress (on dependency_satisfied)
```

## Flowchart Template Framework

### Framework Description

Flowcharts provide visual representation of process flow using standardized symbols. While state machines focus on system states, flowcharts emphasize process activities and their sequence. Flowcharts are particularly valuable for communication, onboarding, and identifying process inefficiencies.

### Standard Flowchart Symbols

**Terminal Symbols** (begin/end points)
- Oval/Rounded Rectangle: Start and End points

**Process Symbols** (actions)
- Rectangle: Process step, operation, or action

**Decision Symbols** (branching)
- Diamond: Decision point with Yes/No or other branching

**Data Symbols** (input/output)
- Parallelogram: Input or output operations

**Connector Symbols** (flow control)
- Circle: Connector point for flow lines
- Arrow: Direction of flow

### Flowchart Template

```
┌─────────────────────────────────────────────────────────────┐
│                    PROCESS: [Process Name]                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    ┌─────────┐                                              │
│    │  START  │                                              │
│    └────┬────┘                                              │
│         │                                                   │
│         ▼                                                   │
│    ┌─────────┐                                              │
│    │ Process │                                              │
│    │  Step   │                                              │
│    └────┬────┘                                              │
│         │                                                   │
│         ▼                                                   │
│    ┌─────────┐                                              │
│    │ Decision│                                              │
│    └────┬────┘                                              │
│    ┌────┴────┐                                              │
│   Yes        No                                             │
│    │          │                                              │
│    ▼          ▼                                              │
│ ┌──────┐  ┌──────────┐                                     │
│ │ Next │  │ Alternative│                                     │
│ │ Step │  │   Path    │                                     │
│ └──┬───┘  └─────┬────┘                                     │
│    │            │                                            │
│    └─────┬──────┘                                            │
│          ▼                                                   │
│    ┌─────────┐                                              │
│    │  END    │                                              │
│    └─────────┘                                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Swimlane Flowchart Template

For multi-actor processes, swimlane diagrams show which actor performs each step:

```
┌─────────────────┬─────────────────┬─────────────────┐
│    ACTOR 1      │    ACTOR 2      │    ACTOR 3      │
│                 │                 │                 │
│  ┌───────────┐  │                 │  ┌───────────┐  │
│  │ Activity  │──┼─────────────────┼─▶│ Activity  │  │
│  └───────────┘  │                 │  └───────────┘  │
│                 │  ┌───────────┐  │                 │
│                 │  │ Activity  │  │                 │
│                 │  └───────────┘  │                 │
└─────────────────┴─────────────────┴─────────────────┘
        │                │                │
        └────────────────┴────────────────┘
              (Cross-actor flow lines)
```

### Business Case - Netflix Incident Management Flow

Netflix's incident management process uses detailed flowcharts to guide responses:

```
┌────────────────────────────────────────────────────────────┐
│              INCIDENT RESPONSE FLOW                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────┐                                              │
│  │ Alert    │                                              │
│  │ Detected │                                              │
│  └────┬─────┘                                              │
│       │                                                    │
│       ▼                                                    │
│  ┌──────────┐     ┌──────────┐                            │
│  │ Classify │────▶│  P1      │  → Page on-call immediately│
│  │ Severity │     │  Outage  │  → Begin automated rollback │
│  └────┬─────┘     └──────────┘  → Post to status page      │
│       │                                                    │
│       ▼            ┌──────────┐                            │
│  ┌──────────┐─────▶│  P2      │  → Page on-call           │
│  │  Impact?  │     │  Degraded│  → Begin investigation     │
│  └────┬─────┘     └──────────┘  → Monitor for escalation  │
│       │                                                    │
│       ▼            ┌──────────┐                            │
│  ┌──────────┐─────▶│  P3      │  → Queue for review      │
│  │ Automated │     │  Minor   │  → Investigate in business │
│  │ Fix?      │     └──────────┘    hours                    │
│  └────┬─────┘                                             │
│       │                                                    │
│       ▼                                                    │
│  ┌──────────┐                                              │
│  │ Execute  │                                              │
│  │ Fix      │                                              │
│  └────┬─────┘                                              │
│       │                                                    │
│       ▼                                                    │
│  ┌──────────┐     ┌──────────┐                            │
│  │Resolved? │─No─▶│ Escalate │──────┐                     │
│  └────┬─────┘     └──────────┘      │                     │
│       │Yes                               │                     │
│       ▼                                │                     │
│  ┌──────────┐     ┌──────────┐        │                     │
│  │Document  │     │ Post-    │◀───────┘                     │
│  │Incident   │────▶│ Mortem   │                              │
│  └──────────┘     └──────────┘                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Business Case - Airbnb Booking Flow

Airbnb's booking process uses swimlane flowcharts to coordinate multiple actors:

```
┌──────────────┬──────────────┬──────────────┬──────────────┐
│   GUEST      │    AIRBNB    │   HOST       │   PAYMENT    │
│              │   PLATFORM   │              │   SYSTEM     │
│              │              │              │              │
│  Search      │─────────────▶│              │              │
│              │              │              │              │
│  Book        │─────────────▶│              │              │
│              │              │              │              │
│              │◀─────────────│ Accept/      │              │
│              │              │ Decline      │              │
│              │              │              │              │
│  Pay         │─────────────┼─────────────▶│              │
│              │              │              │              │
│              │◀─────────────┼─────────────│ Confirm      │
│              │              │              │              │
│              │◀─────────────│              │              │
│ Confirmation │              │              │              │
│              │              │              │              │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

## Flow-Based Framework Integration

### With Decision Trees

Decision trees determine which flow to select based on problem characteristics, while flows execute the selected procedure:

```
Problem → Decision Tree → Selected Flow → Execute Flow
```

### With Matrices

Matrices evaluate and rank options, while flows implement the selected option:

```
Options → Matrix Evaluation → Selected Option → Implementation Flow
```

### With MCDA

MCDA provides detailed multi-criteria evaluation, flows execute the evaluation process and implement results:

```
Decision Request → MCDA Process Flow → Weighted Evaluation → Action Flow
```

## Quality Assurance Checklist

For flow-based frameworks:

- [ ] All states are defined with clear entry/exit criteria
- [ ] All transitions have defined triggers and guards
- [ ] Invalid transitions are explicitly prevented
- [ ] Error states have defined recovery paths
- [ ] Flowcharts use standard notation consistently
- [ ] Swimlanes clearly delineate actor responsibilities
- [ ] Decision points have complete branch coverage
- [ ] Terminal states are reachable from all paths
- [ ] Flow documentation enables consistent execution

## Conclusion

Flow-based decision frameworks provide essential structure for processes that unfold over time and through stages. IFTTT logic captures rule-based decisions in executable form. State machines model discrete systems with well-defined states and transitions. Flowcharts visualize processes for communication and analysis.

The Collector skill employs these frameworks to ensure consistent execution of multi-step procedures, to model system behavior for diagnostic purposes, and to communicate process logic clearly to users. By choosing the appropriate flow-based framework and implementing it with rigor, you can transform complex processes into reliable, repeatable operations.
