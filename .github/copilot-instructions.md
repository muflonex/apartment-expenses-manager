# Apartment Expenses Manager - Copilot Instructions

## Project

Apartment Expenses Manager is a React web application for managing
expenses associated with an apartment.

The application allows users to register, view, filter and summarize
apartment-related expenses.

## General guidelines

Skills are to be used for repeatable procedures.

Agents are autonomous roles responsible for a bounded phase of the SDD
workflow and potentially modifying repository artifacts.

The Orchestrator coordinates agents but does not implement.

Global instructions are rules that apply to every task.

The canonical phase order and gate contract for spec-driven work are defined
in `docs/sdd-workflow.md`. Agents must follow that document and report its
required `PASS`, `BLOCKED`, or `NOT APPLICABLE` gate.

## Technology

- JavaScript
- React
- Vite
- Vitest
- React Testing Library
- ESLint

Do not introduce TypeScript unless explicitly requested.

## Architecture

- Use React functional components.
- Keep components focused on a single responsibility.
- Keep domain/business logic separate from presentation logic when practical.
- Prefer simple React state for the MVP.
- Do not introduce Context, external state-management libraries or a backend
  unless explicitly required.
- Avoid unnecessary abstractions.

## Development rules

- Prefer simple, readable JavaScript.
- Reuse existing functionality before introducing new dependencies.
- Do not add dependencies unless they provide clear value to the project.
- Preserve the existing project architecture unless a change is justified.
- Follow the terminology defined in `docs/glossary.md`.
- Follow the domain rules defined in `docs/domain.md`.

## Testing

- New functionality should include appropriate tests.
- Use Vitest for test execution.
- Use React Testing Library for React component behavior.
- Prefer testing observable user behavior over implementation details.
- Do not remove or weaken existing tests to make a change pass.

## Validation

Before considering a task complete, run:

```bash
npm run lint
npm run test:run
npm run build
```

A task is not considered complete if the project does not pass these
validation steps, unless the failure is explicitly unrelated to the task.

## Scope

The current MVP uses in-memory application state.

Do not introduce:

- a backend
- a database
- authentication
- external APIs
- persistent storage

unless explicitly requested.