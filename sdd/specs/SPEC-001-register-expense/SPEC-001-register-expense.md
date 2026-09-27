# SPEC-001 - Register Expense

> Status: DRAFT
> Owner: TODO
> Source ticket: TODO

## What It Does

This feature enables a user managing a single apartment to register a new
expense through the application form.

After successful validation, the expense is added to the current in-memory
collection and appears in the expense list. The expense includes its
description, category, amount, date, recurrence status, and frequency when
applicable.

This is the first functional slice of the MVP. Filtering, summaries,
editing, deletion, persistence, and backend integration are outside this
specification.

## Out of Scope

- Filtering or sorting expenses.
- Calculating totals or displaying dashboard summaries.
- Editing or deleting expenses.
- Persistence across browser refreshes.
- Backend, database, or external API integration.
- Authentication, multiple users, or multiple apartments.
- Currency conversion, payment status, attachments, and invoices.
- Mortgage amortization and future expense forecasting.

## Who Uses It

| Actor | Role |
|---|---|
| Principal | Enters apartment expense data and submits it for registration. |

**Preconditions**:

- The application is running: if not met -> the user cannot register an expense.
- The expense form is available: if not met -> no expense can be submitted.
- The application has an in-memory expense collection: if not met -> the expense is not registered and existing data is not changed.

## Normal Flow / Happy Path

1. The principal opens the application and sees the expense form.
2. The principal enters a description, supported category, positive amount,
   ISO date, and recurrence status.
3. If the expense is recurring, the principal selects a supported frequency.
4. The principal submits the form.
5. The application validates the submitted expense against the business
   rules.
6. The application assigns a unique string identifier.
7. The application adds the valid expense to the in-memory collection.
8. The application displays the new expense in the expense list.

## Business Rules

| Rule | Consequence if not met |
|---|---|
| `description` must be a non-empty human-readable string. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| `category` must be one of `utilities`, `community`, `taxes`, `insurance`, `internet`, `subscriptions`, `mortgage`, `loans`, `maintenance`, or `other`. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| `amount` must be a number greater than `0`. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| `date` must use the ISO `YYYY-MM-DD` format. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| `recurring` must be a boolean value. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| When `recurring` is `true`, `frequency` must be `monthly`, `quarterly`, or `yearly`. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| When `recurring` is `false`, `frequency` must be `null`. | Registration is rejected, the collection remains unchanged, and validation feedback is shown. |
| Every registered expense must have a unique string `id`. | The application must not register an expense with a duplicate identifier. |
| A valid expense is added without changing existing expenses. | The new expense is not registered if the existing collection cannot be preserved. |

## States

| State | Meaning |
|---|---|
| `EMPTY` | The in-memory collection has no registered expenses. |
| `READY` | The form is available for entry or submission. |
| `INVALID_INPUT` | The last submission violated one or more rules; no expense was added. |
| `HAS_EXPENSES` | At least one valid expense is registered and visible in the list. |

Main transitions:

- `EMPTY` -> `READY` when the application loads.
- `READY` -> `INVALID_INPUT` when validation fails; the collection is unchanged.
- `READY` -> `HAS_EXPENSES` when a valid expense is submitted.
- `HAS_EXPENSES` -> `HAS_EXPENSES` when another valid expense is submitted.
- `INVALID_INPUT` -> `READY` when the principal corrects the submitted data.

## Edge Cases

- **Recurring without frequency**: registration is rejected because a
  recurring expense requires a supported frequency.
- **One-off with frequency**: registration is rejected because a non-recurring
  expense must have `frequency: null`.
- **Refresh after registration**: registered expenses are lost because this
  slice uses in-memory state only.

## How It Is Tested (BDD)

```gherkin
Feature: Register apartment expenses

Scenario: Register a valid recurring expense
  Given the application is running with an available in-memory collection
  And the principal enters a description, supported category, positive amount, and ISO date
  And the principal marks the expense as recurring
  And the principal selects the monthly frequency
  When the principal submits the form
  Then the expense is added to the collection
  And the expense has a unique string identifier
  And the expense is visible in the expense list

Scenario: Reject an expense with an invalid amount
  Given the application is running with an available in-memory collection
  And the principal enters an amount of zero or less
  When the principal submits the form
  Then the expense is not added to the collection
  And validation feedback is shown

Scenario: Reject a recurring expense without frequency
  Given the principal enters otherwise valid expense data
  And the principal marks the expense as recurring
  And no supported frequency is selected
  When the principal submits the form
  Then the expense is not added to the collection
  And validation feedback is shown
```

## Open Questions

- [ ] TODO: Confirm the owner and source ticket.
- [ ] TODO: Define the exact validation feedback and where it appears.
- [ ] TODO: Confirm whether whitespace-only descriptions are invalid.
- [ ] TODO: Confirm whether date validation rejects invalid calendar dates,
      such as `2026-02-30`, in addition to invalid format.
- [ ] TODO: Decide whether the form resets after successful registration.
- [ ] TODO: Decide how expenses are ordered in the list.
- [ ] TODO: Confirm the string identifier generation strategy.

---

## Implementation Notes

The technical plan for this spec must be saved in the sibling file
`technical-plan.md` within this spec folder.

The implementation must use the existing JavaScript, React, Vite, Vitest,
and React Testing Library architecture. It must keep data in React state and
must not introduce a backend, persistence layer, or external state manager.

## Gate

- Result: BLOCKED
- Evidence: Specification created and awaiting audit.
- Next phase: `@spec-auditor`