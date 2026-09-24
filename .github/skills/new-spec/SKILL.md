---
name: new-spec
description: 'Create a new SDD spec in sdd/specs using the skill template. Use for new functionality, a functional change without a spec, or when a request needs a spec before design or implementation.'
---

# New Spec

## When to Use

- When new functionality does not yet have a spec.
- When there is a significant functional change and no updated spec exists.
- When a requirement needs to be documented in an SDD before the technical plan.

## Canonical Sources

- `.github/skills/new-spec/assets/SPEC_TEMPLATE.md`
- `README.md`

If an existing specification is used as an example, use it only to
understand the repository's established SDD conventions.
Do not copy its domain terminology or business rules.

## Procedure

1. Read the template and example before drafting.
2. Review `sdd/specs/` to choose the next available identifier in the format `SPEC-<NNN>-<slug>`.
3. If no specs exist, start with `SPEC-001-<slug>`.
4. Generate the slug in kebab-case from `verb + object`.
5. Create a folder named `sdd/specs/SPEC-<NNN>-<slug>/`.
6. Create the main file inside that folder at `sdd/specs/SPEC-<NNN>-<slug>/SPEC-<NNN>-<slug>.md`, using the template's base structure.
7. Fill it with the concrete information available in the user's request.
8. When information is missing, write `TODO` in the affected section and add it to `## Open Questions`.
9. Ensure that every business rule has a corresponding consequence, that preconditions specify what happens if they fail, and that there are minimum Gherkin scenarios for the happy path and rule-based rejection.
10. If you detect that an equivalent spec already exists, do not duplicate it: propose updating the existing one.

## Quality Bar

- Do not leave silent gaps.
- Do not invent business rules or system responses.
- Include 1-3 concrete edge cases.
- Use functional, verifiable language.
- Make it explicit what is in and out of scope.

## Expected Result

- Folder created at `sdd/specs/SPEC-<NNN>-<slug>/`.
- Main file created at `sdd/specs/SPEC-<NNN>-<slug>/SPEC-<NNN>-<slug>.md`.
- Normalized name with sequential numbering.
- `## Open Questions` section containing anything that remains undefined.
- Final summary with the created path and outstanding items.