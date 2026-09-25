# Spec-Driven Development Workflow

This repository uses the following canonical SDD phases:

1. **Spec resolution**: resolve an existing spec or create one with
   `/new-spec`.
2. **Spec audit**: `@spec-auditor` verifies that the spec is complete and
   testable.
3. **Technical planning**: `@spec-to-tech-plan` writes or updates
   `plan-tecnico.md`.
4. **Implementation**: the applicable implementation agent changes the
   approved application surface. This repository currently has a frontend
   implementation phase and no backend phase.
5. **Test implementation**: `@spec-test-implementer` adds or updates tests
   and verifies coverage.
6. **Implementation review**: `@spec-implementation-reviewer` compares the
   result with the spec and reports remaining gaps.

## Phase gates

Phases run in order. A later phase cannot start until the previous phase has
reported a passing gate.

Every agent must end its response with this exact section:

```text
## Gate

- Result: PASS | BLOCKED | NOT APPLICABLE
- Evidence: ...
- Next phase: ...
```

Use `BLOCKED` when an input, requirement, validation, or handoff prevents the
phase from completing. Use `NOT APPLICABLE` only when the orchestrator has
explicitly excluded the phase for this change. A skipped phase must include a
reason in `Evidence`.

The spec auditor also reports its required domain verdict:

```text
## Verdict

READY
```

`READY` maps to a passing gate. `NOT READY` maps to `BLOCKED`; the flow must
return to spec refinement before planning or implementation.

## Handoff contract

Each phase must identify the feature, target spec, artifacts inspected or
changed, and the concrete next phase. The orchestrator records the result and
does not infer success from prose, changed files, or a successful command
alone.

The canonical artifact location is:

```text
sdd/specs/SPEC-<NNN>-<slug>/
```

The folder contains the main spec and, after planning, `plan-tecnico.md`.