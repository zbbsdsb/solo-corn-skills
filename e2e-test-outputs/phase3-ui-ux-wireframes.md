# UI/UX Wireframe Descriptions: TaskFlow

**Version:** 1.0

**Date:** 2026-05-19

---

## 1. Design System Overview

### 1.1 Design Principles

1. **Simplicity First:** Clean interfaces with minimal cognitive load
2. **Consistency:** Uniform patterns across all pages
3. **Accessibility:** WCAG 2.1 AA compliance
4. **Performance:** Lightweight, fast-loading UI
5. **Mobile-First:** Designed for mobile, enhanced for desktop

### 1.2 Color Palette

```
Primary Colors:
├── Blue-600: #2563eb (Primary actions, links)
├── Blue-700: #1d4ed8 (Primary hover)
├── Blue-50: #eff6ff (Primary background)
│
Semantic Colors:
├── Success: #10b981 (Completed tasks, positive actions)
├── Warning: #f59e0b (High priority, attention)
├── Error: #ef4444 (Destructive actions, errors)
├── Info: #3b82f6 (Informational)
│
Neutral Colors:
├── Gray-900: #111827 (Primary text)
├── Gray-700: #374151 (Secondary text)
├── Gray-500: #6b7280 (Muted text, placeholders)
├── Gray-300: #d1d5db (Borders, dividers)
├── Gray-100: #f3f4f6 (Background)
├── Gray-50: #f9fafb (Page background)
└── White: #ffffff (Cards, surfaces)
```

### 1.3 Typography

```
Font Family:
├── Primary: Inter (Google Fonts)
├── Fallback: system-ui, -apple-system, sans-serif
│
Font Sizes:
├── xs: 12px (Captions, labels)
├── sm: 14px (Body text, small UI)
├── base: 16px (Default text)
├── lg: 18px (Subheadings)
├── xl: 20px (Section titles)
├── 2xl: 24px (Page titles)
├── 3xl: 30px (Hero headlines)
└── 4xl: 36px (Marketing headlines)
│
Font Weights:
├── Normal: 400 (Body text)
├── Medium: 500 (Emphasized text)
├── Semibold: 600 (Headings)
└── Bold: 700 (Strong emphasis)
│
Line Heights:
├── Tight: 1.25 (Headings)
├── Normal: 1.5 (Body text)
└── Relaxed: 1.75 (Long-form content)
```

### 1.4 Spacing System

```
Base unit: 4px

Spacing Scale:
├── 0: 0px
├── 1: 4px
├── 2: 8px
├── 3: 12px
├── 4: 16px
├── 5: 20px
├── 6: 24px
├── 8: 32px
├── 10: 40px
├── 12: 48px
├── 16: 64px
└── 20: 80px
│
Common Uses:
├── Page padding: 24px (mobile) / 48px (desktop)
├── Card padding: 16px
├── Button padding: 12px 24px
├── Section gaps: 24px
└── Component gaps: 16px
```

### 1.5 Breakpoints

```
Mobile: < 640px
├── Stack layouts vertically
├── Full-width components
├── Collapsed sidebar (hamburger menu)
└── Bottom navigation bar
│
Tablet: 640px - 1024px
├── Two-column layouts
├── Sidebar visible but narrow
└── Mix of stacked and side-by-side
│
Desktop: 1024px+
├── Full sidebar navigation
├── Multi-column layouts
├── Side-by-side panels
└── Expanded views
```

---

## 2. Component Library

### 2.1 Buttons

#### Primary Button
```
Dimensions:
├── Height: 40px (md), 32px (sm), 48px (lg)
├── Padding: 12px 24px (md)
├── Border Radius: 8px
│
Visual States:
├── Default: bg-blue-600, text-white
├── Hover: bg-blue-700, cursor-pointer
├── Active: bg-blue-800, scale(0.98)
├── Disabled: bg-gray-300, text-gray-500, cursor-not-allowed
├── Loading: spinner icon, "Processing..."
└── Focus: ring-2 ring-blue-500 ring-offset-2
│
Variants:
├── Primary: Blue background
├── Secondary: White background, blue border
├── Danger: Red background
└── Ghost: Transparent background
```

#### Button Group
```
Structure:
├── Multiple buttons grouped horizontally
├── 2px gap between buttons
├── Connected with shared border
└── First button: rounded left corners
│
Usage:
└── Multiple actions for a single item
```

### 2.2 Form Inputs

#### Text Input
```
Dimensions:
├── Height: 40px
├── Width: 100% (flexible)
├── Padding: 12px
├── Border: 1px solid gray-300
├── Border Radius: 8px
│
Visual States:
├── Default: gray-300 border
├── Focus: blue-500 border, blue-50 background
├── Error: red-500 border, red-50 background, error message below
├── Success: green-500 border (after validation)
├── Disabled: gray-100 background, gray-400 text
└── Read-only: gray-50 background
│
Anatomy:
├── Label: Above input, gray-700, required asterisk
├── Input field: White background
├── Helper text: Below input, gray-500, small text
├── Error message: Below input, red-500, small text
└── Character count: Bottom right, gray-400
```

#### Textarea
```
Same as text input with:
├── Min height: 100px
├── Resize: vertical only
└── Max length: 2000 characters
```

#### Select Dropdown
```
Same as text input with:
├── Chevron icon on right
├── Dropdown menu: White background, shadow-lg
├── Options: 40px height, hover blue-50
├── Selected: Blue background
└── Search: Optional filter for long lists
```

#### Checkbox
```
Dimensions: 20px × 20px
├── Border: 2px gray-300
├── Checked: Blue-600 background, white checkmark
├── Hover: Blue-50 background
├── Focus: Blue ring
└── Disabled: Gray background
```

#### Date Picker
```
Structure:
├── Input field with calendar icon
├── Dropdown calendar grid
├── Month/year navigation
├── Today highlight
├── Selected date: Blue background
└── Disabled dates: Gray text
```

### 2.3 Cards

#### Task Card
```
Dimensions:
├── Width: 100% (flexible)
├── Padding: 16px
├── Border: 1px solid gray-200
├── Border Radius: 12px
├── Background: White
│
Visual States:
├── Default: White background
├── Hover: shadow-md, border-gray-300
├── Selected: Blue-500 border
├── Dragging: shadow-xl, slight rotation
└── Completed: Gray-100 background, muted text
│
Content:
├── Priority indicator: Colored dot (left edge)
├── Title: Semibold, gray-900
├── Description: Gray-500, 2 lines max
├── Assignee avatar: Bottom left
├── Due date: Bottom right
└── Status badge: Top right
│
Spacing:
├── Title: 12px bottom margin
├── Description: 8px bottom margin
└── Footer: 12px top margin
```

#### Project Card
```
Dimensions:
├── Width: 100% (flexible)
├── Min Height: 200px
├── Padding: 20px
│
Content:
├── Project name: Bold, large
├── Description: Gray-500, 3 lines max
├── Task count: Icon + number
├── Member avatars: Stacked, max 5 shown
├── Progress bar: Percentage completed
└── Last activity: "Updated 2 hours ago"
│
Actions:
└── View Project button: Bottom
```

### 2.4 Navigation

#### Sidebar
```
Dimensions:
├── Width: 240px (desktop)
├── Height: 100vh (fixed)
├── Background: White
├── Border Right: 1px gray-200
│
Mobile Behavior:
├── Hidden by default
├── Slide in from left
├── Overlay background
└── Close on outside click
│
Structure:
├── Logo: Top, 48px height
├── Navigation items: 48px height each
├── Active state: Blue-50 background, blue border-left
├── Divider: Gray line between sections
└── User section: Bottom, avatar + name
```

#### Header
```
Dimensions:
├── Height: 64px
├── Background: White
├── Border Bottom: 1px gray-200
├── Padding: 0 24px
│
Content:
├── Logo: Left (mobile only)
├── Search bar: Center (expandable)
├── Notifications: Right (icon with badge)
├── User menu: Right (avatar dropdown)
└── Mobile menu: Left (hamburger icon)
│
Sticky:
└── Fixed to top on scroll
```

#### Breadcrumbs
```
Format: Home > Projects > Website Redesign
├── Separator: Chevron icon
├── Current page: Bold, not clickable
├── Previous pages: Links, gray-500
└── Overflow: Ellipsis for long paths
```

### 2.5 Modals & Overlays

#### Modal
```
Dimensions:
├── Width: 480px (sm), 640px (md), 800px (lg)
├── Max Height: 90vh
├── Border Radius: 16px
├── Background: White
├── Shadow: 2xl
│
Structure:
├── Header: Title, close button (X)
├── Body: Scrollable content area
├── Footer: Action buttons (right-aligned)
└── Overlay: Black 50% opacity
│
Animation:
├── Overlay: Fade in 200ms
├── Modal: Scale up from 95% + fade
└── Close: Reverse animation
│
Mobile:
├── Full screen (width: 100%)
├── Bottom sheet style option
└── Drag handle for dismissal
```

#### Toast Notifications
```
Position: Top-right, 24px from edges
├── Width: 360px
├── Padding: 16px
├── Border Radius: 8px
├── Background: White
├── Shadow: lg
│
Types:
├── Success: Green-500 left border
├── Error: Red-500 left border
├── Warning: Yellow-500 left border
└── Info: Blue-500 left border
│
Content:
├── Icon: Left
├── Message: Center
├── Dismiss: Right (X button)
└── Auto-dismiss: 5 seconds
```

#### Dropdown Menu
```
Dimensions:
├── Min Width: 180px
├── Padding: 8px 0
├── Border Radius: 8px
├── Background: White
├── Shadow: lg
│
Items:
├── Height: 40px
├── Padding: 0 16px
├── Hover: Gray-100 background
├── Icon: Left (optional)
└── Shortcut: Right (muted text)
│
Divider:
└── Gray line between groups
```

### 2.6 Data Display

#### Avatar
```
Sizes:
├── xs: 24px (inline)
├── sm: 32px (lists)
├── md: 40px (cards)
├── lg: 48px (profile)
└── xl: 64px (profile header)
│
Fallback:
├── Initials: First 2 letters
├── Background: Generated from name
└── Text: White, semibold
│
Group:
├── Stack with -8px overlap
├── Border: 2px white
└── Max display: 5 + "+N" badge
```

#### Badge
```
Sizes:
├── sm: 20px height
├── md: 24px height
└── lg: 28px height
│
Variants:
├── Solid: Filled background
├── Outline: Border only
└── Subtle: Light background
│
Colors:
├── Blue: Default
├── Green: Success
├── Yellow: Warning
├── Red: Error
└── Gray: Neutral
```

#### Progress Bar
```
Dimensions:
├── Height: 8px
├── Border Radius: 4px
├── Background: Gray-200
│
Fill:
├── Background: Blue-600
├── Animation: Width transition 300ms
└── Percentage: Optional label
```

#### Empty State
```
Structure:
├── Icon: 64px, gray-300
├── Title: Large, semibold
├── Description: Gray-500, max 2 lines
└── Action: Primary button
│
Example:
├── Icon: Folder with plus sign
├── Title: No projects yet
├── Description: Create your first project to get started
└── Action: "Create Project" button
```

#### Loading States
```
Spinner:
├── Size: 20px
├── Color: Blue-600
└── Animation: Rotate 360deg, 1s

Skeleton:
├── Background: Gray-200
├── Animation: Shimmer effect
└── Matches content shape

Progress:
└── Linear progress bar for operations
```

---

## 3. Page Wireframes

### 3.1 Authentication Pages

#### Login Page
```
Layout: Centered card, full page background

Components:
├── Logo: Centered, top
├── Card: 400px width, centered
│   ├── Title: "Welcome back"
│   ├── Subtitle: "Sign in to continue"
│   ├── Email input
│   ├── Password input (with show/hide toggle)
│   ├── Remember me checkbox
│   ├── Forgot password link
│   ├── Submit button: "Sign In"
│   ├── Divider: "or"
│   ├── Social login: Google button
│   └── Footer: "Don't have an account? Sign up"
│
Background: Gray-50 gradient
```

#### Register Page
```
Similar to login with:
├── Name input (first + last or single field)
├── Email input
├── Password input
├── Confirm password input
├── Terms checkbox
├── Submit button: "Create account"
└── Footer: "Already have an account? Sign in"
```

#### Forgot Password Page
```
Layout: Centered card

Components:
├── Icon: Key or lock
├── Title: "Forgot password?"
├── Description: "Enter your email and we'll send you a reset link"
├── Email input
├── Submit button: "Send reset link"
├── Back to login link
└── Success state: Checkmark + confirmation message
```

### 3.2 Dashboard Page

```
URL: /dashboard

Layout:
┌─────────────────────────────────────────────────────────────┐
│ Header: [Logo] [Search] [Notifications] [Avatar]           │
├────────────┬────────────────────────────────────────────────┤
│ Sidebar    │ Dashboard                                       │
│ 240px      │                                                 │
│            │ ┌─────────────────────┐ ┌──────────────────┐ │
│ [Dashboard]│ │ My Tasks             │ │ Quick Actions    │ │
│ [Projects] │ │ 12 tasks remaining   │ │ [+ New Task]     │ │
│ [My Tasks] │ └─────────────────────┘ │ [+ New Project]  │ │
│            │                           └──────────────────┘ │
│ ─────────  │                                                 │
│ [Settings] │ ┌───────────────────────────────────────────┐ │
│ [Help]     │ │ Upcoming Tasks                            │ │
│            │ │ ─────────────────────────────────────────│ │
│            │ │ [Priority] Task Title                     │ │
│            │ │ Project Name • Due in 2 days              │ │
│            │ └───────────────────────────────────────────┘ │
│            │                                                 │
│            │ ┌───────────────────────────────────────────┐ │
│            │ │ Recent Activity                           │ │
│            │ │ ─────────────────────────────────────────│ │
│            │ │ 👤 Sarah completed "Design homepage"      │ │
│            │ │ 👤 Mike assigned "Fix login bug" to Sarah  │ │
│            │ │ 👤 You created "Update documentation"      │ │
│            │ └───────────────────────────────────────────┘ │
│            │                                                 │
│            │ ┌───────────────────────────────────────────┐ │
│            │ │ Your Projects                             │ │
│            │ │ ─────────────────────────────────────────│ │
│            │ │ [Project Card Grid]                       │ │
│            │ └───────────────────────────────────────────┘ │
└────────────┴────────────────────────────────────────────────┘
```

### 3.3 Projects Page

```
URL: /projects

Layout:
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├────────────┬────────────────────────────────────────────────┤
│ Sidebar    │ Projects                           [+ New]    │
│            │                                                 │
│ [Dashboard]│ [Search...] [Filter ▾] [Sort ▾]                │
│ [Projects] │                                                 │
│ [My Tasks] │ ┌────────────┐ ┌────────────┐ ┌────────────┐│
│            │ │ Project 1   │ │ Project 2   │ │ Project 3   ││
│ ─────────  │ │ ████████░░ │ │ ██████░░░░ │ │ ████░░░░░░ ││
│ [Settings] │ │ 65%         │ │ 45%         │ │ 30%         ││
│ [Help]     │ │             │ │             │ │             ││
│            │ │ 12 tasks    │ │ 8 tasks     │ │ 5 tasks     ││
│            │ │ 5 members   │ │ 3 members   │ │ 2 members   ││
│            │ │             │ │             │ │             ││
│            │ │ [View →]    │ │ [View →]    │ │ [View →]    ││
│            │ └────────────┘ └────────────┘ └────────────┘│
│            │                                                 │
│            │ ┌────────────┐ ┌────────────┐                 │
│            │ │ Project 4   │ │ + Add New   │                 │
│            │ │ ████████░░ │ │             │                 │
│            │ │ 80%         │ │ Create a    │                 │
│            │ │             │ │ new project │                 │
│            │ │ 20 tasks    │ │             │                 │
│            │ │ 7 members   │ │ [+ New]     │                 │
│            │ │             │ │             │                 │
│            │ │ [View →]    │ │             │                 │
│            │ └────────────┘ └────────────┘                 │
└────────────┴────────────────────────────────────────────────┘
```

### 3.4 Project Detail Page

```
URL: /projects/:id

Layout:
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├────────────┬────────────────────────────────────────────────┤
│ Sidebar    │ Website Redesign                    [⚙] [👤] │
│            │                                                 │
│ [Dashboard]│ Breadcrumb: Projects > Website Redesign       │
│ [Projects] │                                                 │
│ [My Tasks] │ [All] [To Do] [In Progress] [Completed]       │
│            │                                                 │
│ ─────────  │ [🔍 Search tasks...] [+ New Task]              │
│ [Settings] │                                                 │
│ [Help]     │ ┌─────────────────────────────────────────────┐ │
│            │ │ Task Card                                   │ │
│            │ │ ─────────────────────────────────────────── │ │
│            │ │ [●] Design new homepage                      │ │
│            │ │                                             │ │
│            │ │ Create wireframes based on brand guidelines │ │
│            │ │                                             │ │
│            │ │ [👤 Sarah] [📅 May 22] [In Progress ▾]       │ │
│            │ │                                             │ │
│            │ │ [●] Implement responsive layout              │ │
│            │ │                                             │ │
│            │ │ Build CSS grid system for mobile and desktop │ │
│            │ │                                             │ │
│            │ │ [👤 Mike] [📅 May 25] [To Do ▾]              │ │
│            │ │                                             │ │
│            │ │ [●] Write SEO content                        │ │
│            │ │                                             │ │
│            │ │ Create copy for homepage sections            │ │
│            │ │                                             │ │
│            │ │ [👤 Sarah] [📅 May 28] [To Do ▾]             │ │
│            │ │                                             │ │
│            │ │ [●] Test cross-browser compatibility          │ │
│            │ │                                             │ │
│            │ │ Ensure compatibility with Chrome, Firefox...  │ │
│            │ │                                             │ │
│            │ │ [👤 Mike] [📅 Jun 1] [To Do ▾]              │ │
│            │ │                                             │ │
│            │ └─────────────────────────────────────────────┘ │
│            │                                                 │
└────────────┴────────────────────────────────────────────────┘

Task Detail Modal (opens on task click):
┌───────────────────────────────────────────────┐
│ Task Details                            [×]   │
├───────────────────────────────────────────────┤
│                                               │
│ Title:                                        │
│ [Design new homepage________________________] │
│                                               │
│ Description:                                  │
│ ┌───────────────────────────────────────────┐ │
│ │ Create wireframes for the new homepage   │ │
│ │ design based on the brand guidelines...   │ │
│ │                                           │ │
│ │ ## Requirements                           │ │
│ │ - Mobile-first approach                   │ │
│ │ - Accessibility compliant                 │ │
│ │ - SEO optimized structure                │ │
│ │                                           │ │
│ └───────────────────────────────────────────┘ │
│                                               │
│ Project: Website Redesign [▾]                 │
│                                               │
│ Assignee: [👤 Sarah Johnson            ▾]       │
│                                               │
│ Due Date: [May 22, 2026            📅]         │
│                                               │
│ Priority: [● High                     ▾]      │
│                                               │
│ Status:   [● In Progress           ▾]         │
│                                               │
│ ─────────────────────────────────────────────│
│                                               │
│ Activity:                                     │
│ │ 👤 Mike changed status to In Progress      │
│ │ May 18, 2026 at 2:30 PM                    │
│ │                                             │
│ │ 👤 Sarah updated description                │
│ │ May 15, 2026 at 10:15 AM                   │
│                                               │
├───────────────────────────────────────────────┤
│                    [Delete]  [Cancel]  [Save] │
└───────────────────────────────────────────────┘
```

### 3.5 My Tasks Page

```
URL: /my-tasks

Layout:
┌─────────────────────────────────────────────────────────────┐
│ Header                                                      │
├────────────┬────────────────────────────────────────────────┤
│ Sidebar    │ My Tasks                                      │
│            │                                                 │
│ [Dashboard]│ [All Projects ▾] [Status ▾] [Priority ▾]      │
│ [Projects] │                                                 │
│ [My Tasks] │                                                 │
│            │ ┌───────────────────────────────────────────┐ │
│ ─────────  │ │ To Do (8)                                 │ │
│ [Settings] │ │ ─────────────────────────────────────────│ │
│ [Help]     │ │ [●] Task 1 - Project A - Due tomorrow    │ │
│            │ │ [●] Task 2 - Project B - Due May 25     │ │
│            │ │ [●] Task 3 - Project A - Due May 27     │ │
│            │ └───────────────────────────────────────────┘ │
│            │                                                 │
│            │ ┌───────────────────────────────────────────┐ │
│            │ │ In Progress (3)                          │ │
│            │ │ ─────────────────────────────────────────│ │
│            │ │ [●] Task 4 - Project C - Due May 22     │ │
│            │ │ [●] Task 5 - Project A - Due May 23      │ │
│            │ └───────────────────────────────────────────┘ │
│            │                                                 │
│            │ ┌───────────────────────────────────────────┐ │
│            │ │ Completed Today (2)                       │ │
│            │ │ ─────────────────────────────────────────│ │
│            │ │ [✓] Task 6 - Project B - Completed ✓    │ │
│            │ │ [✓] Task 7 - Project A - Completed ✓    │ │
│            │ └───────────────────────────────────────────┘ │
└────────────┴────────────────────────────────────────────────┘
```

### 3.6 Mobile Views

#### Mobile Dashboard
```
┌─────────────────────────────────┐
│ ☰  TaskFlow           [🔔][👤] │
├─────────────────────────────────┤
│                                 │
│ My Tasks (12)         [View All]│
│ ┌─────────────────────────────┐ │
│ │ [●] Design homepage         │ │
│ │ Website Redesign            │ │
│ │ Due: Today                  │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ [●] Fix navigation bug      │ │
│ │ Mobile App                  │ │
│ │ Due: Tomorrow               │ │
│ └─────────────────────────────┘ │
│                                 │
│ Projects                [View All]│
│ ┌─────────────────────────────┐ │
│ │ Website Redesign            │ │
│ │ ████████░░ 65% • 12 tasks   │ │
│ └─────────────────────────────┘ │
│ ┌─────────────────────────────┐ │
│ │ Mobile App                  │ │
│ │ ██████░░░░ 45% • 8 tasks   │ │
│ └─────────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│ [🏠]  [📋]  [👤]  [⚙]           │
│ Home  Tasks Profile  Settings  │
└─────────────────────────────────┘
```

---

## 4. Interaction Patterns

### 4.1 Drag and Drop

```
Task Cards:
├── Grab handle: Left edge (6 dots)
├── Hover: Cursor changes to grab
├── Drag start: Card elevates (shadow-xl), slight rotation
├── Drop zones: Visual indicators
├── Reorder: Smooth animation
└── Invalid drop: Return to original position

Kanban View (Future):
├── Columns: Status-based
├── Cards: Draggable between columns
├── Auto-scroll: When near edges
└── Snap: To column boundaries
```

### 4.2 Inline Editing

```
Text Fields:
├── Click to edit: Pencil icon appears on hover
├── Double-click: Enter edit mode
├── Blur: Save changes
├── Escape: Cancel changes
└── No changes: No save action

Task Titles:
├── Single-line inline edit
├── Auto-resize input
├── Enter to save
└── Max 200 characters
```

### 4.3 Quick Actions

```
Task Cards:
├── Hover reveals action icons
├── Quick complete: Checkmark button
├── Edit: Pencil icon
├── Delete: Trash icon (with confirmation)
└── Assign: Avatar button

Context Menu (Right-click):
├── Edit
├── Duplicate
├── Move to project
├── Change assignee
├── Change priority
├── Set due date
└── Delete
```

### 4.4 Keyboard Shortcuts

```
Global:
├── N: New task
├── /: Focus search
├── G then D: Go to Dashboard
├── G then P: Go to Projects
├── G then T: Go to My Tasks
├── Esc: Close modal/cancel
└── ?: Show keyboard shortcuts

Task List:
├── ↑/↓: Navigate tasks
├── Enter: Open task detail
├── Space: Toggle task completion
├── E: Edit task
└── D: Delete task (with confirmation)
```

### 4.5 Notifications

```
Types:
├── Task assigned to you
├── Task status changed
├── Task due date approaching
├── New comment on your task
├── Project invitation
└── Team member joined

Display:
├── Bell icon with badge count
├── Dropdown list of recent notifications
├── Click to navigate to relevant item
└── Mark as read/unread
```

---

## 5. Responsive Behavior

### 5.1 Breakpoint Transitions

```
Desktop (1024px+):
├── Full sidebar visible
├── Multi-column layouts
└── Side-by-side panels

Tablet (768-1023px):
├── Collapsible sidebar (icon-only)
├── Two-column layouts
└── Stacked panels

Mobile (< 768px):
├── Bottom navigation
├── Full-width components
├── Cards stack vertically
├── Hamburger menu for all pages
└── Swipe gestures for actions
```

### 5.2 Component Adaptation

```
Cards:
├── Desktop: Grid layout (3-4 columns)
├── Tablet: 2 columns
└── Mobile: Single column, full width

Tables:
├── Desktop: Full table with columns
├── Tablet: Scrollable horizontal
└── Mobile: Card-based list view

Forms:
├── Desktop: Horizontal layout (label inline)
├── Tablet: Stacked but wider inputs
└── Mobile: Full-width stacked inputs
```

### 5.3 Touch Considerations

```
Target Sizes:
├── Minimum: 44px × 44px
├── Recommended: 48px × 48px
└── Generous: 56px × 56px

Gestures:
├── Tap: Primary action
├── Long press: Context menu
├── Swipe left: Quick delete
├── Swipe right: Quick complete
└── Pull down: Refresh
```

---

## 6. Accessibility Guidelines

### 6.1 Color Contrast

```
Text Colors:
├── Primary (gray-900): #111827 on white - 15.3:1 ✓
├── Secondary (gray-700): #374151 on white - 9.1:1 ✓
├── Muted (gray-500): #6b7280 on white - 4.6:1 ✓
└── All meet WCAG AA (4.5:1 for normal text)

Interactive Elements:
├── Links (blue-600): #2563eb on white - 4.5:1 ✓
├── Buttons (blue-600): #2563eb on white - 4.5:1 ✓
└── Focus indicators: Blue ring on white - 4.5:1 ✓

Priority Indicators:
├── High (red): #ef4444 - 4.6:1 ✓
├── Medium (yellow): #f59e0b - 3.0:1 ✗ (use text)
└── Low (green): #10b981 - 3.1:1 ✗ (use text)
```

### 6.2 Focus Management

```
Visible Focus:
├── All interactive elements have focus outline
├── Focus ring: 2px solid blue-500
├── Focus offset: 2px
└── Never remove outline without replacement

Tab Order:
├── Logical flow matching visual order
├── Skip links for navigation
├── Modal traps focus inside
└── Focus returns to trigger element on close

Screen Reader:
├── Semantic HTML (button, nav, main, etc.)
├── ARIA labels for icons
├── Live regions for updates
└── Descriptive link text
```

### 6.3 Screen Reader Support

```
Images:
├── Alt text for all images
├── Empty alt for decorative images
└── Detailed descriptions for complex graphics

Dynamic Content:
├── Announce page changes
├── Announce successful actions
├── Announce errors
└── Announce loading states

Forms:
├── Associated labels
├── Error messages linked via aria-describedby
├── Required fields marked with aria-required
└── Success feedback announced
```

---

## 7. Error States

### 7.1 Form Errors

```
Inline Validation:
├── Red border on input
├── Error icon next to input
├── Error message below input
└── Focus first error field

Error Messages:
├── Specific: "Email is required"
├── Helpful: "Password must be at least 8 characters"
├── Actionable: "Email not found. Check spelling or sign up."
└── Never: "Invalid input"

Error Summary (for forms):
├── List of all errors at top
├── Links to each error field
└── Announced to screen readers
```

### 7.2 Empty States

```
No Projects:
├── Icon: Folder with plus
├── Title: "No projects yet"
├── Description: "Create your first project to organize your tasks"
└── Action: "Create Project" button

No Tasks:
├── Icon: Checklist
├── Title: "All caught up!"
├── Description: "You don't have any tasks in this view"
└── Action: "Create Task" button (if applicable)

No Results (search):
├── Icon: Magnifying glass
├── Title: "No results found"
├── Description: "Try adjusting your search or filters"
└── Action: "Clear filters" button
```

### 7.3 Loading States

```
Initial Page Load:
├── Full page skeleton
├── Sidebar skeleton
├── Header skeleton
└── Content area skeleton

Data Fetching:
├── Inline spinner for small areas
├── Skeleton cards for lists
└── "Loading..." text for longer waits

Form Submission:
├── Disable form
├── Show spinner in button
└── "Saving..." text

Error Recovery:
├── "Failed to load" message
├── "Retry" button
└── Fallback content if possible
```

---

## 8. Animations & Transitions

### 8.1 Micro-interactions

```
Button Hover:
├── Scale: 1.02
├── Background: Darker shade
└── Duration: 150ms

Card Hover:
├── Shadow: Increase
├── Transform: Slight lift
└── Duration: 200ms

Checkbox Toggle:
├── Check mark: Draw animation
├── Scale: Bounce effect
└── Duration: 200ms

Dropdown Open:
├── Height: Animate from 0
├── Opacity: Fade in
└── Duration: 150ms
```

### 8.2 Page Transitions

```
Route Changes:
├── Fade out: 100ms
├── Fade in: 100ms
└── Total: 200ms

Modal Open:
├── Overlay: Fade in 150ms
├── Modal: Scale 0.95→1, opacity 0→1, 200ms
└── Total: 200ms

Modal Close:
├── Reverse of open
└── Total: 150ms
```

### 8.3 List Animations

```
Item Enter:
├── Fade in: 150ms
├── Slide up: 10px→0
└── Stagger: 50ms between items

Item Exit:
├── Fade out: 100ms
└── Slide down: 5px
```

### 8.4 Performance Considerations

```
Animation Rules:
├── Use transform and opacity only
├── Avoid layout thrashing
├── Use will-change sparingly
├── Respect prefers-reduced-motion
└── Keep under 16ms per frame

Reduced Motion:
├── Disable all animations
├── Instant transitions
└── Static states only
```

---

**Design System Status:** Complete

**Next Steps:**
1. Create high-fidelity mockups in Figma
2. Build component library
3. Develop responsive layouts
4. Implement animations
5. Test accessibility

---

**Approved by:** _________________ **Date:** __________
