---
name: create-tests
description: Create or improve automated tests for the Apartment Expenses Manager using Vitest and React Testing Library. Use when adding tests, covering new behavior, or investigating missing test coverage.
---

# Create Tests

## Purpose

Use this skill when creating or improving automated tests for the
Apartment Expenses Manager.

The project uses:

- Vitest;
- React Testing Library;
- Testing Library User Event;
- jest-dom matchers.

## Procedure

### 1. Identify the behavior

Determine what behavior needs to be verified.

Prefer defining the test around what a user or consumer of a domain
function can observe.

Examples:

- an expense appears in the list;
- an expense can be filtered by category;
- submitting a form creates an expense;
- the total expense amount is calculated correctly.

### 2. Choose the appropriate test type

For pure domain functions:

- test the function directly;
- cover normal cases;
- cover relevant edge cases.

For React components:

- render the component;
- interact with it as a user would;
- verify the resulting behavior.

### 3. Prefer accessible queries

Prefer:

```js
screen.getByRole(...)
screen.getByLabelText(...)
screen.getByText(...)
```

Avoid selectors that depend unnecessarily on:

- CSS classes;
- DOM structure;
- implementation-specific attributes.

### 4. Test user interactions

When interaction is required, use Testing Library User Event.

For example:
```js
const user = userEvent.setup();
await user.click(button);
```

Tests should describe behavior rather than implementation.

### 5. Keep tests independent

Each test should be able to run independently.

Avoid unnecessary shared mutable state.

Use small and representative test data.

### 6. Cover important edge cases

Depending on the functionality, consider:

- empty collections;
- zero values;
- missing optional values;
- invalid form input;
- multiple categories;
- recurring and non-recurring expenses;
- different months.

Do not add edge-case tests that have no meaningful relationship
to the feature.

### 7. Validate

Run:
```
npm run lint
npm run test:run
npm run build
```
All three commands should pass.

### Boundaries

Do not:

- introduce another testing framework;
- introduce end-to-end testing;
- remove tests to make the suite pass;
- modify production behavior solely to satisfy an incorrect test;
- test React implementation details unnecessarily.

### Completion criteria

The task is complete when:

- the intended behavior is covered;
- important relevant edge cases are covered;
- tests use the project's existing testing stack;
- tests are readable and independent;
- lint, tests and build pass.