# Architectural Decisions

## Decision 1: Use React with JavaScript

### Decision
The project uses React with JavaScript.

TypeScript is not part of the current project.

### Reason
The project is intended to focus on React and JavaScript development
while keeping the initial implementation simple.

### Consequence
New source files should use JavaScript and JSX.

TypeScript should not be introduced unless explicitly requested.

---

## Decision 2: Use Vite

### Decision
Vite is used as the development server and build tool.

### Reason
Vite provides a simple development workflow and build configuration
appropriate for the size of the MVP.

### Consequence
The project uses the standard Vite development and build commands.

---

## Decision 3: Use Vitest and React Testing Library

### Decision
Automated tests use Vitest and React Testing Library.

### Reason
Vitest integrates naturally with the Vite-based project, while
React Testing Library encourages testing observable React behavior.

### Consequence
New tests should use the existing testing stack rather than
introducing another framework.

---

## Decision 4: Keep application state in React

### Decision
The MVP stores application state using React state.

### Reason
The initial application is small and does not require an external
state-management solution.

### Consequence
React Context and external state-management libraries should not be
introduced without a concrete requirement.

---

## Decision 5: No backend in the MVP

### Decision
The MVP has no backend or database.

### Reason
The initial objective is to validate the expense-management workflow
before introducing persistence and server-side concerns.

### Consequence
Application data is kept in memory and is lost when the application
is refreshed.

---

## Decision 6: Separate domain calculations from presentation

### Decision
Expense calculations should be implemented as reusable JavaScript
functions rather than duplicated inside React components.

### Reason
This improves testability and keeps presentation code focused on UI
behavior.

### Consequence
New financial calculations should first be considered as domain
functions before being implemented directly inside components.

---

## Decision 7: Avoid premature features

### Decision
The MVP does not include authentication, external APIs, bank
integration, notifications, forecasting, document processing or
multi-apartment support.

### Reason
These features introduce significant complexity without being required
for the initial expense-management workflow.

### Consequence
Agents should not introduce these capabilities unless they are
explicitly requested.