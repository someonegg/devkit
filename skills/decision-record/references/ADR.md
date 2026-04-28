# Architecture Decision Records (MADR)

This file defines how to evaluate, create, and maintain standalone ADR files.

## File Path Convention

ADRs live at `docs/adr/NNNN-<slug>.md` in the project root.

- Check existing files to determine the next sequence number (pad to 4 digits: `0001`, `0002`, ...)
- If `docs/adr/` does not exist, create it
- Slug: lowercase, hyphenated, describes the decision (for example, `use-postgresql`, `event-driven-notifications`)

## ADR-Worthiness Criteria

Propose an ADR when the decision meets `>= 2` of:

1. Involves meaningful alternatives that were seriously considered
2. Has non-trivial trade-offs (accepting a real cost, not just "X is better")
3. Is hard to reverse or will constrain future decisions
4. Would confuse a future reader if the "why" were absent

## Status Lifecycle

`accepted` -> `superseded by ADR-NNNN`

When a later decision replaces an existing ADR, update the old file's status to `superseded by ADR-NNNN` and link to the new one.

## Supersede Candidate Detection

During `create`, scan existing ADRs and identify possible supersede candidates when the new decision appears to replace an older accepted decision.

- Use candidates as hints only; never update files until the user confirms a specific supersede target
- Prefer precision over recall; return `none` when the relationship is ambiguous
- Look for overlap in decision title, slug, governed component, or explicit reversal of an earlier choice
- Treat refinements, extensions, and partial overlaps as non-superseding unless the replacement is clear

## MADR Template

```markdown
---
status: accepted
date: YYYY-MM-DD
---

# [Short title - what was decided]

## Context and Problem Statement

Why this decision was needed. Describe the constraint, risk, or requirement that made the choice non-trivial. One short paragraph.

## Decision Drivers

- [Key constraint or requirement]
- [Another driver, if relevant]

## Considered Options

- [Option A]
- [Option B]
- [Option C]

## Decision Outcome

Chosen option: "[Option X]", because [concise justification referencing the Decision Drivers].

### Positive Consequences

- [What this enables or improves]

### Negative Consequences

- [Cost accepted - be explicit]

## Pros and Cons of the Options

### [Option A]

- Good: [reason]
- Bad: [reason]

### [Option B]

- Good: [reason]
- Bad: [reason]

### [Option C]

- Good: [reason]
- Bad: [reason]
```

## Notes

- "Considered Options" must list every alternative that was genuinely evaluated, not just the winner
- "Negative Consequences" is mandatory; an ADR without acknowledged costs is a sales pitch, not a decision record
- Keep each ADR to one decision; split compound decisions into separate files
