# Product Specification Resources

## 1. PRD Template

### 1.1 Product Overview

```
Product Name: [Name]
Version: [X.X]
Date: [YYYY-MM-DD]
Author: [Author]

## Executive Summary
[1-2 paragraphs describing the product vision and goals]

## Product Goals
- Goal 1: [Description]
- Goal 2: [Description]
- Goal 3: [Description]

## Target Users
- Primary users: [Description]
- Secondary users: [Description]
- User personas: [Persona 1, Persona 2]
```

### 1.2 User Stories

**Format:**
```
As a [user role],
I want [action/feature],
So that [benefit/value].

Acceptance Criteria:
- [Criteria 1]
- [Criteria 2]
- [Criteria 3]

Priority: [P0/P1/P2]
Effort: [Low/Medium/High]
```

**Example:**
```
As a project manager,
I want to create tasks and assign them to team members,
So that I can track who is responsible for what.

Acceptance Criteria:
- Can create tasks with title, description, assignee
- Can assign tasks to existing team members
- Can set due dates for tasks
- Tasks appear in assignee's task list

Priority: P0
Effort: Medium
```

### 1.3 Requirements Matrix

| Requirement ID | Description | Priority | Effort | Status |
|----------------|-------------|----------|--------|--------|
| REQ-001 | User authentication | P0 | Medium | Not started |
| REQ-002 | Task creation | P0 | Low | Not started |
| REQ-003 | Task assignment | P0 | Medium | Not started |
| REQ-004 | Dashboard view | P1 | High | Not started |

## 2. User Story Templates

### 2.1 Authentication Stories
```
As a new user,
I want to sign up with email and password,
So that I can create an account.

As a returning user,
I want to log in with my credentials,
So that I can access my data.

As a user,
I want to reset my password,
So that I can recover access if I forget it.
```

### 2.2 Core Feature Stories
```
As a [role],
I want to [action],
So that [value].

Acceptance Criteria:
- [Specific, testable criteria]
```

### 2.3 Navigation Stories
```
As a user,
I want to navigate between sections easily,
So that I can find what I need quickly.

As a user,
I want to search for content,
So that I can find items fast.
```

## 3. Wireframe Descriptions

### 3.1 Page Structure
```
Page: [Page Name]
URL: /[path]
Purpose: [Brief description]

Layout:
┌─────────────────────────────┐
│ Header/Navigation           │
├──────────┬──────────────────┤
│ Sidebar  │ Main Content     │
│ (25%)    │ (75%)            │
└──────────┴──────────────────┘
│ Footer                      │
└─────────────────────────────┘
```

### 3.2 Component Wireframes

**Button Component:**
```
Button
├── Type: Primary/Secondary/Outline
├── Size: Small/Medium/Large
├── State: Default/Hover/Active/Disabled
└── Content: Text/icon combination
```

**Card Component:**
```
Card
├── Header: Title + subtitle
├── Body: Content area
├── Actions: Buttons/links
└── Footer: Metadata/tags
```

## 4. Acceptance Criteria Guidelines

### 4.1 SMART Criteria
- **Specific**: Clear and unambiguous
- **Measurable**: Can be tested/verified
- **Achievable**: Realistic within constraints
- **Relevant**: Aligns with product goals
- **Time-bound**: Has a deadline

### 4.2 Testing Checklist
- [ ] Positive test cases
- [ ] Negative test cases
- [ ] Edge cases
- [ ] Performance requirements
- [ ] Security considerations
- [ ] Accessibility requirements

## 5. Specification Output Structure

```
Product Requirements Document
├── 1. Executive Summary
├── 2. Product Goals
├── 3. Target Users
├── 4. User Stories
│   ├── Authentication
│   ├── Core Features
│   └── Navigation
├── 5. Wireframe Descriptions
│   ├── Pages
│   └── Components
├── 6. Acceptance Criteria
├── 7. Requirements Matrix
└── 8. Glossary
```

## 6. Example PRD Output

```
Product Name: TaskFlow
Version: 1.0
Date: 2024-01-15

## Executive Summary
TaskFlow is a task management application designed for remote teams...

## Product Goals
1. Simplify task tracking for remote teams
2. Improve team collaboration
3. Provide actionable insights

## User Stories

As a team member,
I want to see my assigned tasks,
So that I know what to work on.

Acceptance Criteria:
- Tasks are displayed in priority order
- Due dates are visible
- Status indicators show progress

Priority: P0
Effort: Low
```
