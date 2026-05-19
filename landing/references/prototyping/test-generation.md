# Test Case Generation Templates

This guide provides structured templates for generating comprehensive test cases from prototypes, ensuring thorough validation of user flows and edge cases.

## Overview

```
┌────────────────────────────────────────────────────────────────┐
│                    TEST GENERATION FLOW                        │
└────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│  HAPPY PATH   │    │  EDGE CASES   │    │  USER         │
│  TESTS        │    │  TESTS        │    │  SCENARIOS    │
│               │    │               │    │               │
│ Core flows    │    │ Boundaries    │    │ Real-world   │
│ that work     │    │ Error states  │    │ usage        │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              │
                              ▼
                   ┌───────────────────────┐
                   │   VALIDATION SUMMARY  │
                   └───────────────────────┘
```

---

## 1. Happy Path Test Cases

Happy path tests validate the primary user flows when everything works as expected.

### Template Structure

```markdown
## Test Case: [TC_HP_XXX] - [Short Description]

**Type**: Happy Path
**Priority**: P0 / P1 / P2
**Feature**: [Feature Name]
**Estimated Time**: [X] minutes

### Preconditions
- User is logged in / at [starting point]
- [Other prerequisites]

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | [Action] | [Result] |
| 2    | [Action] | [Result] |
| 3    | [Action] | [Result] |

### Test Data
| Field | Value |
|-------|-------|
| [Field 1] | [Value 1] |
| [Field 2] | [Value 2] |

### Post-conditions
- [State after test]
- [Clean up required]
```

### Example: Contact Form Submission

```markdown
## Test Case: TC_HP_001 - Contact Form Successful Submission

**Type**: Happy Path
**Priority**: P0
**Feature**: Contact Form
**Estimated Time**: 3 minutes

### Preconditions
- User is on the Contact page
- Email server is operational

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Enter valid name "John Smith" | Name field shows "John Smith" |
| 2    | Enter valid email "john@example.com" | Email field shows "john@example.com" |
| 3    | Select subject "General Inquiry" | Subject dropdown shows "General Inquiry" |
| 4    | Enter message "I would like to learn more about your services" | Message field populated |
| 5    | Check "I agree to Terms" checkbox | Checkbox is checked |
| 6    | Click Submit button | Loading indicator appears |
| 7    | Wait for response | Success message displayed |
| 8    | Verify confirmation email | Email received in inbox |

### Test Data
| Field | Value |
|-------|-------|
| Name | John Smith |
| Email | john@example.com |
| Subject | General Inquiry |
| Message | I would like to learn more about your services |

### Post-conditions
- Form is cleared
- Success message visible
- Confirmation email sent
```

---

## 2. Edge Case Test Cases

Edge cases test boundaries, limits, and unexpected inputs to ensure robustness.

### Template Structure

```markdown
## Test Case: [TC_EC_XXX] - [Short Description]

**Type**: Edge Case
**Priority**: P1 / P2 / P3
**Category**: [Boundary | Empty | Invalid | Security]
**Feature**: [Feature Name]

### Test Scenario
[Description of the edge condition being tested]

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | [Action with edge condition] | [Result] |
| 2    | [Verification if needed] | [Result] |

### Test Data
| Field | Edge Value |
|-------|------------|
| [Field] | [Edge value: null, empty, max, min, special chars] |

### Expected Behavior
[Clear description of what should happen]

### Related Defects
[N/A | Known defect #XXX]
```

### Example Categories

#### 2.1 Empty/Null Input Tests

```markdown
## Test Case: TC_EC_001 - Empty Required Field Validation

**Type**: Edge Case
**Priority**: P1
**Category**: Empty
**Feature**: Contact Form

### Test Scenario
User attempts to submit form with empty required field (Name)

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Leave Name field empty | Field border highlighted |
| 2    | Fill all other required fields | Other fields valid |
| 3    | Click Submit | Error message appears |
| 4    | Verify focus on Name field | Name field is focused |

### Test Data
| Field | Value |
|-------|-------|
| Name | [empty] |
| Email | test@example.com |
| Subject | General Inquiry |
| Message | Test message |

### Expected Behavior
Error message: "Name is required"
Form not submitted
No data sent to server
```

#### 2.2 Maximum Length Tests

```markdown
## Test Case: TC_EC_002 - Maximum Character Limit

**Type**: Edge Case
**Priority**: P2
**Category**: Boundary
**Feature**: Contact Form

### Test Scenario
User enters text exceeding maximum character limit in Message field

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Enter 1001 characters in Message | Character count shows "1001/1000" |
| 2    | Attempt to type more | Input blocked at 1000 characters |
| 3    | Click Submit | Form submits successfully |

### Test Data
| Field | Value |
|-------|-------|
| Message | 1000 characters of text |

### Expected Behavior
- Character counter visible
- Excess characters blocked
- No truncation of valid content
```

#### 2.3 Invalid Format Tests

```markdown
## Test Case: TC_EC_003 - Invalid Email Format

**Type**: Edge Case
**Priority**: P1
**Category**: Invalid
**Feature**: Contact Form

### Test Scenario
User enters email in invalid format

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Enter "not-an-email" | Field shows entered text |
| 2    | Tab out of field | Validation error appears |
| 3    | Click Submit | Form not submitted |
| 4    | Verify error message | Shows "Please enter a valid email" |

### Test Data
| Email | Type |
|-------|------|
| not-an-email | No @ symbol |
| user@ | No domain |
| @domain.com | No username |
| user@domain | No TLD |
| user@@domain.com | Double @ |

### Expected Behavior
Format validation error shown
No server request made
```

#### 2.4 Special Characters & Injection Tests

```markdown
## Test Case: TC_EC_004 - SQL Injection Attempt

**Type**: Edge Case
**Priority**: P1
**Category**: Security
**Feature**: Contact Form

### Test Scenario
User attempts SQL injection in input fields

### Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Enter "'; DROP TABLE users;--" in Name | Text entered (escaped/sanitized) |
| 2    | Submit form | Form processed safely |
| 3    | Verify database | No table deleted |
| 4    | Check display | Injection text shown as plain text |

### Test Data
| Input | Type |
|-------|------|
| '; DROP TABLE users;-- | SQL injection |
| <script>alert('xss')</script> | XSS attempt |
| {{7*7}} | Template injection |
| null | Null byte |

### Expected Behavior
- Input sanitized/escaped
- No code execution
- Displayed as plain text
```

---

## 3. User Scenario Test Cases

User scenarios simulate real-world usage patterns based on persona and context.

### Template Structure

```markdown
## User Scenario: [US_XXX] - [Scenario Title]

**Persona**: [User type]
**Goal**: [What user wants to achieve]
**Context**: [When/where/why]
**Complexity**: Low / Medium / High

### Scenario Narrative
[Story describing the user's journey in natural language]

### User Journey Map

```
START → [Action 1] → [Decision Point] → [Branch A / Branch B] → END
```

### Test Cases in Scenario

#### TC_US_XXX_01: [Sub-scenario name]
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | [Action] | [Result] |
| ...  | ... | ... |

#### TC_US_XXX_02: [Alternative path]
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | [Action] | [Result] |
| ...  | ... | ... |

### Success Criteria
- [ ] User can complete primary goal
- [ ] [Secondary requirement]
- [ ] [Performance requirement]

### Related Personas
- [Persona 1]
- [Persona 2]
```

### Example: E-commerce Purchase Flow

```markdown
## User Scenario: US_001 - First-Time Buyer

**Persona**: Sarah, 28, first-time online shopper
**Goal**: Purchase a birthday gift for her sister
**Context**: Shopping on her lunch break, time-constrained
**Complexity**: Medium

### Scenario Narrative
Sarah wants to buy a compact mirror as a birthday gift. She's price-conscious 
but wants something quality. She found our site through a Google search and is 
browsing during her 30-minute lunch break.

### User Journey Map

```
START: Land on homepage
   ↓
Search for "compact mirror"
   ↓
Browse search results
   ↓
Filter by price ($20-50)
   ↓
┌──────────────────────────────────────┐
│ View product details                 │
│   ↓                                  │
│  [Read reviews? YES] → Read reviews  │
│   ↓                                  │
│  [Add to cart? YES] → Add to cart   │
│   ↓                                  │
│  [Continue shopping? NO] → Checkout   │
│   ↓                                  │
│  [Enter shipping info]               │
│   ↓                                  │
│  [Enter payment]                    │
│   ↓                                  │
│  [Place order]                      │
│   ↓                                  │
│  [Confirmation page]                 │
└──────────────────────────────────────┘
```

### Test Cases in Scenario

#### TC_US_001_01: Happy Path Purchase
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Navigate to homepage | Homepage loads |
| 2    | Click search box | Search focused |
| 3    | Type "compact mirror" | Text appears |
| 4    | Press Enter | Search results shown |
| 5    | Click price filter | Filter dropdown opens |
| 6    | Select "$20-$50" | Results filtered |
| 7    | Click product | Product page loads |
| 8    | Click "Add to Cart" | Cart updated, toast shown |
| 9    | Click "Checkout" | Checkout page opens |
| 10   | Fill shipping form | All fields validated |
| 11   | Enter payment | Payment processed |
| 12   | Click "Place Order" | Order confirmed |

#### TC_US_001_02: Review Reading Before Purchase
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | On product page | Product details visible |
| 2    | Click "Reviews" tab | Reviews section shown |
| 3    | Scroll through reviews | Reviews load progressively |
| 4    | Click "Most Helpful" filter | Reviews sorted |
| 5    | Add item to cart | Item added |
| 6    | Proceed to checkout | Checkout flow continues |

#### TC_US_001_03: Cart Abandonment Recovery
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1    | Add item to cart | Cart updated |
| 2    | Close browser | Session saved |
| 3    | Return next day | Cart items preserved |
| 4    | Complete purchase | Order successful |

### Success Criteria
- [ ] User can complete purchase in under 10 minutes
- [ ] Price filter works correctly
- [ ] Reviews help decision-making
- [ ] Cart persists across sessions
- [ ] Order confirmation received

### Related Personas
- **Sarah**: Price-conscious, time-constrained first-time buyer
- **Michael**: Returning customer, knows what he wants
- **Jennifer**: Corporate buyer, bulk orders
```

---

## 4. Comprehensive Test Matrix

Use this matrix to ensure all combinations are covered:

```markdown
## Test Coverage Matrix

### Input Field Coverage

| Field | Empty | Valid | Invalid | Boundary | Special |
|-------|-------|-------|---------|----------|---------|
| Name  | [ ]   | [ ]   | [ ]     | [ ]      | [ ]     |
| Email | [ ]   | [ ]   | [ ]     | [ ]      | [ ]     |
| Phone | [ ]   | [ ]   | [ ]     | [ ]      | [ ]     |
| Date  | [ ]   | [ ]   | [ ]     | [ ]      | [ ]     |

### User Flow Coverage

| Flow | Happy | Alt 1 | Alt 2 | Error | Recovery |
|------|-------|-------|-------|-------|----------|
| Registration | [ ] | [ ] | [ ] | [ ] | [ ] |
| Login | [ ] | [ ] | [ ] | [ ] | [ ] |
| Purchase | [ ] | [ ] | [ ] | [ ] | [ ] |
| Profile Update | [ ] | [ ] | [ ] | [ ] | [ ] |

### Platform Coverage

| Platform | Browser | Resolution | Network |
|----------|---------|-----------|---------|
| Desktop | Chrome/Firefox/Safari | 1920x1080 | WiFi |
| Tablet | Safari/iOS | 1024x768 | 4G |
| Mobile | Chrome/Android | 375x667 | 3G |
```

---

## 5. Quick Test Case Generator

For rapid generation, use this formula:

```
Given [precondition]
When [action]
Then [expected result]

And [additional action]
Then [additional result]
```

### Example Generator Output

```
Given the user is on the Contact page
When the user enters "John Doe" in the Name field
Then the name field displays "John Doe"
And no validation error is shown

When the user enters "invalid-email" in the Email field
Then a validation error appears
And the error message says "Please enter a valid email"

When the user corrects the email to "john@example.com"
Then the validation error disappears
And the field shows a valid state
```

---

## 6. Test Case Prioritization

### Priority Guidelines

| Priority | Description | When to Test |
|----------|-------------|--------------|
| P0 | Core functionality broken | Every build |
| P1 | Major feature impaired | Every build |
| P2 | Feature works with issues | Weekly |
| P3 | Minor issues, workaround exists | Before release |

### Quick Prioritization Checklist

- [ ] **P0**: Can user complete core task?
- [ ] **P0**: Does data integrity maintained?
- [ ] **P1**: Do all major paths work?
- [ ] **P1**: Are errors handled gracefully?
- [ ] **P2**: Do secondary features work?
- [ ] **P3**: Are UI polish items complete?

---

## Related Templates

- [Prototype Types](prototype-types.md): Choose right prototype level
- [Mockup Templates](mockup-templates.md): Reference interfaces to test
- [Success Metrics](success-metrics.md): Define what to measure
- [Iteration Roadmap](iteration-roadmap.md): Plan testing iterations
