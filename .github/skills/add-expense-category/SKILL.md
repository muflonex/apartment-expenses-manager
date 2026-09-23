---
name: add-expense-category
description: Add a new expense category to Apartment Expenses Manager while keeping the domain model, UI, filters, summaries, tests, and documentation consistent. Use when introducing a new expense category.
---

# Add Expense Category

## Purpose

Use this skill when a new type of apartment expense needs to be added
to the application.

A category must be added consistently across the domain and UI.

## Current categories

The initial categories are:

- utilities
- community
- taxes
- insurance
- internet
- subscriptions
- mortgage
- loans
- maintenance
- other

Do not remove or rename an existing category unless explicitly requested.

## Procedure

### 1. Understand the new category

Determine:

- the category name;
- its user-facing label;
- whether it represents an existing concept;
- whether it requires any special behavior.

Use the terminology defined in:

`docs/glossary.md`

### 2. Update the domain model

Update the relevant domain representation so the new category is
recognized by the application.

Keep category values stable and suitable for programmatic use.

Prefer lowercase identifiers such as:

```text
home_services
```

rather than user-facing labels.

### 3. Update the user interface

Update all relevant UI locations, including where applicable:

- expense creation forms;
- category selectors;
- filters;
- category summaries;
- category labels.

Do not duplicate the category in unrelated places when an existing
central representation can be reused.

### 4. Update calculations

Verify whether existing calculations automatically support the new
category.

If category-specific behavior is required, update the appropriate
domain function rather than adding business logic directly to a
component.

### 5. Add tests

Add or update tests covering:

- recognition of the new category;
- selection of the category in the UI;
- filtering by the category, when applicable;
- category-based summaries, when applicable.

### 6. Update documentation

If the category changes the documented domain model, update:

`docs/domain.md`

If new terminology is introduced, update:

`docs/glossary.md`

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

- introduce a new category without updating relevant documentation;
- rename existing categories without explicit approval;
- introduce a new dependency;
- introduce a backend or database;
- modify unrelated expense behavior.

### Completion criteria

The task is complete when:

- the category is represented consistently in the domain;
- users can select and/or filter it where appropriate;
- calculations behave correctly;
- relevant tests exist;
- documentation is updated when necessary;
- lint, tests and build pass.