# Codex Execution Plans (ExecPlans)

This file defines how to write and maintain an ExecPlan: a self-contained, living specification that a novice can follow to deliver observable, working behavior in this repository.

## How to Use This File
- Authoring: read this file end to end before drafting; start from the skeleton; embed all context (paths, commands, definitions) so no external docs are needed.
- Implementing: move directly to the next milestone without asking for next steps; keep the living sections current at every stopping point.
- Discussing: record decisions and rationale inside the plan so work can be resumed later using only the ExecPlan.

## Non-Negotiable Requirements
- Self-contained and beginner-friendly: define every term; include needed repo knowledge; avoid assuming prior plans or external links.
- Living document: revise Progress, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective as work proceeds while keeping the plan self-contained.
- Outcome-focused: describe what the user can do after the change and how to see it working; the plan must lead to demonstrably working behavior, not just code edits.
- Explicit acceptance: state behaviors, commands, and observable outputs that prove success.

## Formatting Rules
- Default envelope is a single fenced code block labeled `md`; do not nest other triple backticks inside—indent commands, transcripts, and diffs instead.
- If the file contains only the ExecPlan, omit the enclosing code fence.
- Use blank lines after headings; prefer prose over lists. Checklists are permitted only in the Progress section (and are mandatory there).

## Guidelines
- Define jargon immediately and tie it to concrete files or commands in this repo.
- Anchor on outcomes: acceptance should be phrased as observable behavior; for internal changes, show tests or scenarios that demonstrate the effect.
- Specify repository context explicitly: full paths, functions, modules, working directory for commands, and environment assumptions.
- Be idempotent and safe: describe retries or rollbacks for risky steps; prefer additive, testable changes.
- Validation is required: state exact test commands and expected outputs; include concise evidence (logs, transcripts, diffs) as indented examples.

## Milestones
- Tell a story (goal → work → result → proof) for each milestone; keep them narrative rather than bureaucratic. Never abbreviate a milestone merely for the sake of brevity; do not leave out details that could be crucial to a future implementation.
- Each milestone must be independently verifiable and incrementally advance the overall goal.
- Milestones are distinct from Progress: milestones explain the plan; Progress tracks real-time execution.

## Living Sections (must be present and maintained)
- Progress: checkbox list with timestamps; every pause should update what is done and what remains.
- Review Scope: explicit review target for Quality Review, including commit SHAs and any uncommitted review-relevant paths.
- Surprises & Discoveries: unexpected behaviors, performance notes, or bugs with brief evidence.
- Decision Log: each decision with rationale and date/author.
- Outcomes & Retrospective: what was achieved, remaining gaps, and lessons learned.

## Prototyping and Parallel Paths
- Prototypes are encouraged to de-risk changes; keep them additive, clearly labeled, and validated.
- Parallel implementations are acceptable when reducing risk; describe how to validate each path and how to retire one safely.

## ExecPlan Skeleton

```md
# <Short, action-oriented description>

This ExecPlan is a living document. The sections Progress, Review Scope, Surprises & Discoveries, Decision Log, and Outcomes & Retrospective must stay up to date as work proceeds.

## Purpose / Big Picture
Explain the user-visible behavior gained after this change and how to observe it.

## Progress

Use checkboxes to track granular steps. Every stopping point must be recorded here, even if it requires splitting a partially completed task into "done" and "remaining". This section must always reflect the actual current state. Use timestamps to measure rates of progress.

- [x] (2025-10-01 13:00Z) Example completed step.
- [ ] Example incomplete step.
- [ ] Example partially completed step (completed: X; remaining: Y).

## Review Scope

Define exactly what Review must cover. Keep this section current during implementation.

### Commits to review

- `<commit-sha>` — <why this commit is in scope>
- `<commit-sha>` — <why this commit is in scope>

### Uncommitted changes to review

- `<repo-relative-path>` — <why this uncommitted change is in scope>
- `<repo-relative-path>` — <why this uncommitted change is in scope>

If there are no uncommitted review-relevant changes, explicitly write: `None`.

## Surprises & Discoveries

Document unexpected behaviors, bugs, optimizations, or insights discovered during implementation. Provide concise evidence.

- Observation: …
  Evidence: …

## Decision Log

Record every decision made while working on the plan.

- Decision: …
  Rationale: …
  Date/Author: …

## Outcomes & Retrospective

Summarize outcomes, gaps, and lessons learned at major milestones or at completion. Compare the result against the original purpose.

## Context and Orientation

Describe the current state relevant to this task as if the reader knows nothing. Name key files and modules by full path; define any non-obvious terms. Do not refer to prior plans.

## Plan of Work

Describe, in prose, the sequence of edits and additions. For each edit, name the file and location (function, module) and what to insert or change. Keep it concrete and minimal.

## Concrete Steps

State the exact commands to run and where to run them (working directory). When a command generates output, show a short expected transcript so the reader can compare. This section must be updated as work proceeds.

## Validation and Acceptance

Describe how to start or exercise the system and what to observe. Phrase acceptance as behavior with specific inputs and outputs. For tests, state the exact command and note that the relevant test fails before the change and passes after.

## Idempotence and Recovery

If steps can be repeated safely, say so. If a step is risky, provide a safe retry or rollback path. Keep the environment clean after completion.

## Artifacts and Notes

Concise transcripts, diffs, or snippets as indented examples, focused on what proves success.

## Interfaces and Dependencies

Be prescriptive. Name the libraries, modules, and services to use and why. Specify the types, interfaces, and function signatures that must exist at the end of the milestone.
```

If you follow the guidance above, a single, stateless agent -- or a human novice -- can read your ExecPlan from top to bottom and produce a working, observable result. That is the bar: SELF-CONTAINED, SELF-SUFFICIENT, NOVICE-GUIDING, OUTCOME-FOCUSED.

## Revising a Plan
- When the scope shifts, rewrite affected sections so the document remains coherent and self-contained.
- After significant edits, add a short note at the end explaining what changed and why.
