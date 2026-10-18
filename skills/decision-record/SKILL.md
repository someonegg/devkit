---
name: decision-record
description: Assess whether a technical decision deserves a standalone Architecture Decision Record and create or update ADR files using the project's MADR conventions.
---

# Decision Record

Assess and record concrete technical decisions after their relevant trade-offs are known. This skill does not replace architecture exploration.

## Workflow

1. Read [ADR.md](references/ADR.md) for assessment criteria and fallback conventions. Inspect existing project instructions and ADRs; prefer the project's directory, numbering, template, and status conventions.
2. Determine the requested mode from the task:
   - `assess`: evaluate ADR-worthiness without writing files.
   - `create` or `update`: gather the decision, context, actual alternatives, accepted costs, and source material, then write the requested record.
3. Recommend an ADR when at least two assessment criteria apply. If fewer apply, do not create one unless explicitly requested.
4. Preserve evidence: do not invent alternatives, trade-offs, acceptance, or historical context. Identify unrecoverable gaps. For historical records, distinguish the decision date from the reconstruction date when known; do not invent dates.
5. For new records, determine an unused number from the existing ADR set. Use `docs/adr/NNNN-<slug>.md` only when no project convention exists; create the directory only when writing a record.
6. Use `accepted` only when the available evidence or explicit user instruction establishes that the decision is final. Otherwise use the project's proposal status, falling back to `proposed`.
7. Check for replaced ADRs. Apply an explicitly authorized replacement without asking again. If replacement is merely inferred, prepare the new record and identify candidates; ask before changing an older record's status. Similarity alone does not establish replacement.

## Writing Rules

- Keep each ADR to one decision and list only alternatives actually considered.
- Include negative consequences; state missing knowledge rather than inventing costs.
- Use concise factual language and preserve unrelated content when updating records.
- When an accepted decision replaces an older ADR, mark the old record as superseded using project conventions and link the replacement. Do not supersede an accepted ADR with an unaccepted proposal.

## Output

For assessment, return the verdict, applicable criterion numbers (1–4), and a short reason.

For writing, return the path, title, status, any superseded ADR, and material evidence gaps or pending replacement confirmation.
