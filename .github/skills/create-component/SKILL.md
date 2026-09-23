---
name: create-component
description: Create a new React component following the Apartment Expenses Manager architecture, naming conventions, accessibility requirements, and testing practices. Use when adding a new UI component.
---

# Create React Component

## Purpose

Use this skill when creating a new React component for the
Apartment Expenses Manager.

## Procedure

### 1. Understand the requirement

Before creating the component:

- Identify the user-visible behavior.
- Determine the component's responsibility.
- Check whether an existing component can be reused or extended.
- Check the terminology in `docs/glossary.md`.
- Check relevant domain rules in `docs/domain.md`.

Do not create a new component if an existing component can reasonably
provide the required behavior.

### 2. Define the component responsibility

The component should have one clear responsibility.

Prefer:

- small components;
- explicit props;
- simple local state when needed;
- composition of existing components.

Avoid:

- large components with unrelated responsibilities;
- unnecessary abstraction;
- duplicated business logic.

### 3. Implement the component

Use:

- JavaScript;
- React functional components;
- existing project conventions;
- semantic HTML;
- accessible labels and controls.

Do not introduce TypeScript.

Do not introduce a new dependency unless there is a clear justification.

### 4. Handle domain logic

Keep business logic outside the component when practical.

Reuse existing domain functions instead of duplicating calculations
inside the component.

### 5. Add tests

Create or update tests when the component introduces observable behavior.

Use:

- Vitest;
- React Testing Library;
- `@testing-library/user-event` when user interaction is required.

Prefer assertions based on:

- roles;
- accessible names;
- visible text;
- observable behavior.

Avoid testing implementation details such as internal React state.

### 6. Validate

Run:

```bash
npm run lint
npm run test:run
npm run build
```

All three commands should pass.

Completion criteria

The task is complete when:

- the component has a clear responsibility;
- existing components and domain functions are reused where appropriate;
- accessible markup is used;
- relevant tests exist;
- lint, tests and build pass.