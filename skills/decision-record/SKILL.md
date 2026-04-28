---
name: decision-record
description: Assess whether a technical decision deserves a standalone Architecture Decision Record and create or update ADR files using the project's MADR conventions.
---

# Decision Record

Use this skill when a workflow has already produced a concrete technical decision and you need to decide whether to record it as a standalone ADR or create that ADR.

This skill is not a replacement for architecture exploration. It records and maintains decisions after the relevant trade-offs are already known.

## Core Responsibilities

- Assess whether a decision is ADR-worthy using the shared criteria in [ADR.md](references/ADR.md)
- Create a new ADR at `docs/adr/NNNN-<slug>.md`
- Create an ADR for either a current decision or a historical decision reconstructed from existing artifacts
- During creation, detect whether the new ADR may supersede an older ADR and confirm that choice with the user before updating the old ADR

## Inputs

Provide as much of the following as is available:

- Decision summary
- Why the decision was needed
- Alternatives that were genuinely considered
- Trade-offs or accepted costs
- Final choice
- Source materials to mine for context, if the summary is incomplete
- Whether the task is `assess` or `create`

## Workflow

1. Read [ADR.md](references/ADR.md).
2. Determine the requested mode:
   - `assess`: judge ADR-worthiness for the current decision only
   - `create`: write a new ADR for a current or historical decision
3. If the request is `assess`, apply the ADR-worthiness criteria and return:
   - `ADR recommended` or `ADR not recommended`
   - A one-sentence reason grounded in the criteria
4. If the request is `create`:
   - Gather the missing decision context from the supplied materials
   - Do not fabricate alternatives or trade-offs. If they cannot be recovered from the available materials, note the gap explicitly in the ADR draft
   - If `docs/adr/` does not exist, create it and treat the ADR set as empty
   - Scan `docs/adr/` for possible superseded ADRs using title, slug, shared decision surface, and explicit reversal or replacement language
   - Treat matches as hints only; never assume a supersede relationship without explicit user confirmation
   - Determine the next ADR number from `docs/adr/`
   - Create the ADR using the MADR template from [ADR.md](references/ADR.md)
   - Set the new ADR status to `accepted`
   - If possible superseded ADRs exist, prompt the user to choose whether to create only the new ADR or also mark one explicit older ADR as superseded
   - If the user chooses a supersede target, update the replaced ADR's status to `superseded by ADR-NNNN` and link the new ADR

## Writing Rules

- Keep each ADR to exactly one decision
- List only alternatives that were actually considered
- The negative consequences section is mandatory
- Prefer concise factual language over advocacy
- If the decision is not ADR-worthy, do not create a file unless the user explicitly asks for one anyway

## Output Contract

When assessing, return:

- Verdict
- Criteria met: list the criterion numbers (1–4) that apply
- Short reason

When writing, return:

- ADR path
- Title
- Status
- Superseded ADR: `none` or `ADR-NNNN`
- Any gaps that could not be recovered from source material
