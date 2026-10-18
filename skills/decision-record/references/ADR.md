# Architecture Decision Records

Use these conventions only where the project has no established equivalent.

## ADR-Worthiness

Recommend a standalone ADR when at least two criteria apply:

1. Meaningful alternatives were seriously considered.
2. The choice accepts non-trivial costs or trade-offs.
3. The choice is hard to reverse or constrains future decisions.
4. A future reader would struggle to understand the choice without its rationale.

## Files and Status

- Default path: `docs/adr/NNNN-<slug>.md`; use the next unused sequence number, padded to four digits.
- Slugs are lowercase and hyphenated, describing the decision.
- Status lifecycle: `proposed` -> `accepted` -> `superseded by ADR-NNNN`.
- Acceptance requires evidence that the decision is final. Replacement requires explicit authorization and an accepted replacement record.
- Detect possible replacements through a shared decision surface or explicit reversal language. Refinements and partial overlap do not establish replacement.
- Link superseded records to their replacements using relative file links.

## MADR Template

Choose the actual status and date based on evidence; omit an unknown date or mark it according to project conventions. Include only sections and options relevant to the decision, while retaining negative consequences.

```markdown
---
status: proposed
date: YYYY-MM-DD
---

# [Decision title]

## Context and Problem Statement

[Why the choice was necessary.]

## Decision Drivers

- [Constraint or requirement]

## Considered Options

- [An option actually considered]

## Decision Outcome

[Chosen or proposed option, rationale, and acceptance evidence where relevant.]

### Positive Consequences

- [Expected benefit]

### Negative Consequences

- [Accepted cost, or an explicit evidence gap]

## Pros and Cons of the Options

### [An option actually considered]

- Good: [Benefit]
- Bad: [Cost]
```
