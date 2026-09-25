# SPEC-NNN — <Feature name>

> Status: DRAFT
> Owner: <persona>
> Source ticket: <link>

## What It Does

<!-- TODO: 3-5 lines in functional language. What it enables, who it affects, what result it produces, and what is out of scope. -->

## Out of Scope

<!-- TODO: What is NOT included in this first version. If unknown, state it explicitly. -->

## Who Uses It

| Actor | Role |
|---|---|
| Principal | <!-- TODO --> |
| External system | <!-- TODO or remove the row if not applicable --> |

**Preconditions**:

<!-- TODO: What must be true before this can be executed. For each one, state the consequence if it is not met. -->

- ...: if not met -> ...
- ...: if not met -> ...

## Normal Flow / Happy Path

<!-- TODO: The happy path in numbered steps, without branches or errors. -->

1. ...
2. ...
3. ...

## Business Rules

<!-- TODO: Each rule with its consequence. Without a consequence, it cannot be implemented. -->

| Rule | Consequence if not met |
|---|---|
| ... | ... |
| ... | ... |

## States

<!-- TODO: If the feature has a state machine. Otherwise, remove this section. -->

| State | Meaning |
|---|---|
| ... | ... |

Main transitions:

- `STATE_A` -> `STATE_B` when X occurs, if Y is met
- ...

## Edge Cases

<!-- TODO: 1-3 non-obvious situations with the expected behavior. Consider concurrency, integration failures, and unusual data. -->

- **Concurrency**: ...
- **External system unavailable**: ...
- **Limits or unusual data**: ...

## How It Is Tested (BDD)

```gherkin
Scenario: <happy path>
  Given <!-- TODO -->
  When <!-- TODO -->
  Then <!-- TODO -->

Scenario: <rule-based rejection>
  Given <!-- TODO -->
  When <!-- TODO -->
  Then <!-- TODO -->
```

## Open Questions

- [ ] <!-- TODO -->
- [ ] <!-- TODO -->
- [ ] <!-- TODO -->

---

## Implementation Notes

> The technical plan for this spec must be saved in the sibling file `technical-plan.md` within the same spec folder.
> This section may remain empty or be removed if the team does not need it.