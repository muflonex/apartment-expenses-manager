# Domain Model

## Purpose

Apartment Expenses Manager manages expenses associated with a single
apartment.

The MVP focuses on recording, viewing, filtering and summarizing
expenses.

## Expense

An Expense represents a financial amount associated with the apartment.

The initial model is:

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

### Fields

| Field | Type | Rules |
|---|---|---|
| id | number | Unique identifier |
| description | string | Human-readable description |
| category | string | Must be a supported category |
| amount | number | Must be greater than 0 |
| date | string | ISO `YYYY-MM-DD` |
| recurring | boolean | Indicates whether the expense repeats |
| frequency | string/null | Required for recurring expenses |

### id
Unique identifier of the expense.

### description
Human-readable description of the expense.

Examples:

- Electricity
- Gas
- Water
- Home insurance
- Mortgage payment

### category
Classifies the expense.

Initial categories:

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

### amount
Monetary amount of the expense.

The amount must be a positive number.

### date
Date associated with the expense.

Dates use the ISO format:

YYYY-MM-DD

### recurring
Indicates whether the expense is recurring.

Possible values:

- true
- false

### frequency
Indicates how often a recurring expense occurs.

Initial supported values:

- monthly
- quarterly
- yearly

Rules:

- If `recurring === true`, `frequency` must be one of the supported frequencies.
- If `recurring === false`, `frequency` must be `null`.

## Domain rules

### Recurring expenses
If recurring is true, frequency must contain a supported
recurrence value.

If recurring is false, frequency must be null.

### Categories
Every expense must have one category from the supported category list.

New categories must be introduced consistently across the domain,
UI, tests and documentation.

### Amounts
Expense amounts represent monetary values.

The application should not silently convert or reinterpret an amount
entered by the user.

### Dates
Expense dates represent calendar dates and use the YYYY-MM-DD
format.

### Domain calculations
The application will provide domain functions for common calculations.

### Total expenses
```js
calculateTotal(expenses)
```
Returns the sum of all expense amounts.

### Recurring expenses
```js
calculateRecurringTotal(expenses)
```
Returns the sum of expenses marked as recurring.

### Expenses by category
```js
calculateExpensesByCategory(expenses)
```
Groups or summarizes expenses according to their category.

### Monthly expenses
```js
calculateMonthlyTotal(expenses, month)
```
Returns the total expenses associated with the requested month.

```js
calculateExpensesByCategory(expenses)
```

Groups or summarizes expenses according to their category.

### Monthly total

The monthly total includes expenses whose date belongs to the requested month.

### MVP limitations

The MVP does not model:

- multiple apartments;
- bank accounts;
- transactions imported from banks;
- currencies;
- mortgage amortization schedules;
- future expense forecasting;
- tax calculations;
- payment status;
- attachments or invoices.

These may be considered in future iterations but are outside the
current domain model.