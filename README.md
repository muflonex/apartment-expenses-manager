# Apartment Expenses Manager

A React application for managing expenses associated with an apartment.

The project is built as an MVP using React and JavaScript, with an in-memory data model and a focus on simple domain logic, testable components, and a spec-driven development workflow.

## Features

The MVP supports:

* Registering apartment expenses.
* Viewing expenses.
* Filtering expenses.
* Identifying recurring and one-off expenses.
* Calculating total expenses.
* Calculating recurring expenses.
* Grouping expenses by category.
* Calculating monthly totals.
* Viewing a dashboard with expense summaries.

The current MVP does not use a backend or persistent storage.

## Technology

* JavaScript
* React
* Vite
* Vitest
* React Testing Library
* ESLint

## Getting Started

### Requirements

* Node.js
* npm

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite.

### Build the application

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Testing

Run tests in watch mode:

```bash
npm test
```

Run the complete test suite once:

```bash
npm run test:run
```

Run the test coverage report:

```bash
npm run test:coverage
```

Tests use:

* Vitest for test execution.
* React Testing Library for React component behavior.
* `jest-dom` matchers for DOM assertions.

Tests should focus on observable behavior rather than implementation details.

## Validation

Before considering a change complete, run:

```bash
npm run lint
npm run test:run
npm run test:coverage
npm run build
```

A change should not be considered complete if any of these commands fails, unless the failure is demonstrably unrelated to the change.

## Project Structure

```text
.
├── .github/
│   ├── agents/
│   │   ├── frontend-implementer.agent.md
│   │   ├── sdd-orchestrator.agent.md
│   │   ├── spec-auditor.agent.md
│   │   ├── spec-implementation-reviewer.agent.md
│   │   ├── spec-test-implementer.agent.md
│   │   └── spec-to-tech-plan.agent.md
│   ├── skills/
│   │   ├── new-spec/
│   │   ├── create-component/
│   │   ├── create-tests/
│   │   └── add-expense-category/
│   └── copilot-instructions.md
│
├── docs/
│   ├── architecture.md
│   ├── decisions.md
│   ├── domain.md
│   └── glossary.md
│
├── sdd/
│   └── specs/
│
├── src/
│   ├── components/
│   ├── domain/
│   ├── App.jsx
│   ├── main.jsx
│   └── setupTests.js
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

The exact contents of `src/` may evolve as features are implemented.

## Architecture

The MVP uses a deliberately simple architecture.

* `App` owns the application expense state.
* UI components are responsible for presentation and user interaction.
* Domain calculations are kept separate from presentation logic where practical.
* React local state is used instead of an external state-management library.
* The application does not currently use a backend or database.
* Components should remain focused on a single responsibility.

Architectural decisions are documented in:

```text
docs/architecture.md
docs/decisions.md
```

## Domain Model

The central entity is an expense.

An expense contains:

```js
{
  id: 1,
  description: 'Electricity',
  category: 'utilities',
  amount: 82.45,
  date: '2026-09-15',
  recurring: true,
  frequency: 'monthly'
}
```

The supported categories and recurrence rules are defined in:

```text
docs/domain.md
```

Domain terminology is defined in:

```text
docs/glossary.md
```

These documents are the source of truth for domain concepts and terminology. AI agents should consult them rather than duplicating domain rules in their own instructions.

## Spec-Driven Development

Feature development follows a Spec-Driven Development (SDD) workflow.

The general flow is:

```text
New requirement
      │
      ▼
/new-spec
      │
      ▼
@spec-auditor
      │
      ├── NOT READY ──► refine specification
      │
      ▼ READY
@spec-to-tech-plan
      │
      ▼
@frontend-implementer
      │
      ▼
@spec-test-implementer
      │
      ▼
@spec-implementation-reviewer
      │
      ▼
Completed feature
```

The frontend implementation phase is only used when the specification contains a frontend scope.

The orchestrator coordinates these phases when the complete workflow is required.

Each specification is stored under:

```text
sdd/specs/SPEC-<NNN>-<slug>/
```

A specification may contain:

```text
SPEC-<NNN>-<slug>/
├── SPEC-<NNN>-<slug>.md
└── plan-tecnico.md
```

The specification defines **what the feature must do**.

The technical plan defines **how the feature will be implemented**.

Neither should silently invent missing business rules.

## AI Resources

The project uses GitHub Copilot resources to make development tasks repeatable and to separate different responsibilities.

### Global instructions

`.github/copilot-instructions.md`

Contains project-wide rules covering:

* Technology choices.
* Architecture.
* Development principles.
* Testing.
* Validation.
* MVP scope.
* Domain documentation.

These rules apply to Copilot work across the project.

### Agents

Agents are used for tasks that require a defined responsibility and explicit boundaries.

| Agent                           | Use when                                                                    |
| ------------------------------- | --------------------------------------------------------------------------- |
| `@sdd-orchestrator`             | A feature needs to go through the complete SDD workflow                     |
| `@spec-auditor`                 | A specification needs to be checked for ambiguity or missing requirements   |
| `@spec-to-tech-plan`            | An approved specification needs to be converted into an implementation plan |
| `@frontend-implementer`         | A defined frontend scope needs to be implemented                            |
| `@spec-test-implementer`        | Tests need to be created or reinforced for implemented functionality        |
| `@spec-implementation-reviewer` | An implementation needs to be checked against its specification             |

Agents are not interchangeable. Each agent has a defined scope and should not perform the responsibilities of another agent.

### Skills

Skills describe repeatable procedures for common tasks.

| Skill                   | Use when                                                                     |
| ----------------------- | ---------------------------------------------------------------------------- |
| `/new-spec`             | A new feature needs a specification                                          |
| `/create-component`     | A new React component needs to be created                                    |
| `/create-tests`         | Tests need to be created for a component or behavior                         |
| `/add-expense-category` | A new expense category needs to be added consistently across the application |

Skills are intended for focused, repeatable tasks. Agents are used when a task requires a specialized role or coordination across multiple phases.

## Which AI Resource Should I Use?

Use this as the quick decision guide:

### "I have a new feature idea"

Use:

```text
/new-spec
```

This creates the SDD specification.

### "I have a specification. Is it complete?"

Use:

```text
@spec-auditor
```

The auditor checks whether the specification is sufficiently clear before technical planning.

### "The specification is ready. How should we implement it?"

Use:

```text
@spec-to-tech-plan
```

This creates or updates `plan-tecnico.md`.

### "I need to build a React component"

Use:

```text
/create-component
```

for a focused component-creation task.

If the component is part of a larger feature being implemented from an approved SDD plan, use:

```text
@frontend-implementer
```

### "I need tests"

Use:

```text
/create-tests
```

for a focused, repeatable testing task.

Use:

```text
@spec-test-implementer
```

when testing is part of the SDD implementation flow and the implementation needs comprehensive validation.

### "The feature is implemented. Does it actually match the specification?"

Use:

```text
@spec-implementation-reviewer
```

### "I want the complete process coordinated"

Use:

```text
@sdd-orchestrator
```

The orchestrator delegates the work to the specialized agents in the appropriate order.

## Project Context Documents

The `docs/` directory contains persistent project knowledge that should be shared across AI agents.

| Document               | Purpose                                                               |
| ---------------------- | --------------------------------------------------------------------- |
| `docs/domain.md`       | Domain model, business rules, categories, recurrence and calculations |
| `docs/glossary.md`     | Canonical terminology                                                 |
| `docs/architecture.md` | Current application architecture                                      |
| `docs/decisions.md`    | Important technical and architectural decisions                       |

These documents should be updated when the underlying project decision or domain definition changes.

AI agents should read the relevant context documents before making changes in those areas.

## Development Principles

The project intentionally favors a simple architecture.

### JavaScript

The application uses JavaScript rather than TypeScript.

TypeScript should not be introduced unless explicitly requested.

### State management

The MVP uses React state.

Context or an external state-management library should not be introduced unless the existing architecture can no longer support the requirement and the change is explicitly justified.

### Domain logic

Business calculations should be implemented as testable domain functions where practical.

Examples include:

```text
calculateTotal
calculateRecurringTotal
calculateExpensesByCategory
calculateMonthlyTotal
```

### Dependencies

New dependencies should only be introduced when they provide clear value and are justified by the project requirements.

### Testing

Tests should primarily verify observable behavior.

For React components, prefer:

```js
screen.getByRole(...)
```

and realistic user interactions over assertions against implementation details.

## MVP Scope

The current MVP intentionally excludes:

* Backend services.
* Database persistence.
* Authentication.
* Multi-user functionality.
* Data synchronization.
* CSV/PDF export.
* OCR.
* File attachments.
* Notifications.
* Mortgage amortization.
* Forecasting.
* Advanced charts.
* Bank integrations.
* External financial APIs.
* Multiple-apartment management.

These capabilities may be considered in future iterations but are not part of the current MVP.

## Contributing

When implementing a change:

1. Check whether the change already has an SDD specification.
2. Create or update the specification when required.
3. Audit the specification before technical planning.
4. Create or update the technical plan.
5. Implement only the defined scope.
6. Add or update tests.
7. Review the implementation against the specification.
8. Run:

```bash
npm run lint
npm run test:run
npm run test:coverage
npm run build
```

Keep project documentation and AI resources consistent with the current architecture and domain.
