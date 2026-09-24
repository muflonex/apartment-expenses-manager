# Architecture

## Overview

Apartment Expenses Manager is a React single-page application.

The MVP uses in-memory application state and does not communicate
with a backend or external API.

The architecture intentionally favors simplicity because the initial
application is small and single-user.

## Technology stack

- JavaScript
- React
- Vite
- Vitest
- React Testing Library
- ESLint

## High-level structure

The application is organized around three main concerns:

1. Application state and composition.
2. UI components.
3. Domain calculations.

Conceptually:

```text
App
├── Dashboard
├── ExpenseList
│   └── ExpenseItem
└── ExpenseForm

Domain functions
├── calculateTotal
├── calculateRecurringTotal
├── calculateExpensesByCategory
└── calculateMonthlyTotal
```

## Application state

The initial application state is owned by App.

The expenses collection is stored in React state.

Components receive the data and callbacks they need through props.

The MVP does not use:

- React Context;
- Redux;
- Zustand;
- other external state-management libraries.

Context or external state management should only be introduced if
the application's complexity justifies it.

## Components

React components are responsible for:

- rendering UI;
- handling user interaction;
- managing local UI state when necessary;
- calling domain functions;
- communicating with parent components through props.

Components should not contain duplicated domain calculations when
those calculations can be represented as reusable domain functions.

## Domain logic

Domain calculations should be implemented as pure JavaScript
functions whenever practical.

Pure functions are preferred because they:

- are easy to test;
- do not depend on React;
- can be reused by different UI components;
- keep business logic separate from presentation.

## Data flow

The basic data flow is:

```
User interaction
      ↓
React component
      ↓
State update
      ↓
App state
      ↓
Components receive updated data
      ↓
UI re-renders
```

For calculations:

```
Expenses
   ↓
Domain function
   ↓
Calculated result
   ↓
React component
   ↓
Rendered UI
```

## Persistence

The MVP does not persist data.

Refreshing the browser clears the current application state.

Persistent storage is deliberately outside the MVP.

## Backend

There is no backend.

The application must not introduce a backend unless this becomes an
explicit product requirement.

## External dependencies

New dependencies should only be introduced when they provide clear
value that cannot reasonably be achieved using the existing stack.

## Architectural principles

### Keep it simple
Prefer the simplest architecture that satisfies the requirement.

### Separate domain logic from UI
Business calculations should not be unnecessarily embedded inside
React components.

### Avoid premature abstraction
Do not introduce generic frameworks, patterns or layers without a
concrete requirement.

### Preserve testability
Domain functions should remain independently testable.

React components should expose observable behavior that can be tested
with React Testing Library.