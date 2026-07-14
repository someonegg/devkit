---
name: feature-dev
description: Deliver features end to end through uncertainty-driven exploration, competing architecture designs, ExecPlan-driven implementation, and quality review. Use only on explicit user request.
---

# Feature Development

Deliver features through a structured workflow: understand the request and codebase, resolve open questions, compare architecture approaches, write an ExecPlan, implement by milestone, and complete a quality review.

Invoking `feature-dev` authorizes use of the specialized subagents required by this workflow and the creation of code commits.

## Feature Packet

Create one feature packet per feature at `_features/<yyyy-mm-dd>-<feature-slug>/` containing:

- `plan.md`: The implementation ExecPlan, including milestones, concrete steps, validation, review scope, progress, decisions, and recovery guidance. Treat it as the authority for execution state.
- `uncertainty.md`: An append-only record with one entry for each newly completed, decision-relevant uncertainty validation loop.

After delivery, retain the packet only for traceability. Treat the code, tests, and durable ADRs as the authority for current behavior.

## Resume from an existing ExecPlan

If the user provides an existing ExecPlan:

1. Read it in full. Also read [PLANS.md](references/PLANS.md) if it has not been read in this session.
2. Inspect **Progress**. If the plan is complete, abandoned, or superseded, flag that; otherwise, identify the resume point.
3. Summarize the state and proposed next step, then wait for confirmation.

## Phase 1: Problem Framing

1. Capture the desired observable outcome, motivation, non-goals, known constraints, stated preferences, and initial unknowns.
2. Ask only for missing intent, scope, preference, or authority that is necessary to guide exploration. Do not ask the user for facts discoverable from the repository.
3. Present the problem frame and confirm it with the user. Finish when the next questions to investigate are clear, not when all uncertainty is gone.

## Phase 2: Codebase Exploration

1. Prioritize unknowns that could change behavior, scope, architecture, safety, compatibility, or acceptance. Route user preferences to Phase 3; investigate repository facts directly.
2. Launch 2–3 `code-explorer` subagents in parallel.
   - Assign each a distinct decision-relevant unknown.
   - Include a blindspot or counterexample perspective across the assignments.
   - Require each to return claims, supporting evidence, boundaries or counterexamples, confidence with rationale, design implications, newly exposed unknowns, and key files.
3. Read the files that support material claims, reconcile conflicting findings, and run a targeted second pass when a high-impact uncertainty remains resolvable through inspection.
4. Present established facts, evidence, constraints, and remaining unknowns. Finish when decision-critical repository facts are resolved or explicitly bounded.

## Phase 3: Uncertainty Synthesis

1. Classify the findings as established facts, user decisions, open empirical unknowns, or accepted assumptions.
2. Resolve empirical unknowns with read-only probes or disposable prototypes. Do not modify tracked implementation files before ExecPlan approval; creating and revising the feature packet is allowed. Return to Phase 2 when more repository evidence is needed.
3. Ask the smallest set of user questions whose answers could change behavior, scope, public interfaces, data, security, compatibility, or architecture. Batch independent questions; sequence dependent ones.
4. Present the resolved facts and remaining assumptions. Finish when high-impact, hard-to-reverse unknowns are resolved and every remaining uncertainty is reversible, isolated, or assigned an explicit validation gate.

### Uncertainty Record

After Phase 3 finishes and before Phase 4:

1. Append one entry to `_features/<yyyy-mm-dd>-<feature-slug>/uncertainty.md` for each decision-relevant unknown whose validation loop was completed during the current pass through Phases 1–3.
2. Never edit or delete existing entries. When a result is superseded, append a correction that references the earlier entry.

Use this template for each entry:

```md
## <YYYY-MM-DD HH:MMZ> — <unknown>

- Unknown: <the decision-relevant question>
- Actions: <the exploration and validation performed>
- Evidence: <the supporting repository evidence, probe results, or user input>
- Outcome: <what was established or decided>
- User decision: <the relevant choice, or None>
- Status: <resolved | accepted assumption | validation gate>
- Implication: <the effect on behavior, scope, interfaces, compatibility, or architecture>
```

## Phase 4: Architecture Design

1. Give all architecture subagents the same design brief: the problem frame, evidence-backed repository facts, user decisions, non-goals, compatibility boundaries, and remaining assumptions.
2. Launch two `code-architect` subagents in parallel.
   - Assign one a minimal, reversible design and the other an evolutionary or target-state design.
   - Require each to identify its thesis, changed and preserved boundaries, supporting evidence, assumptions, falsifying evidence, failure modes, reversibility, migration and rollback, validation strategy, and remaining unknowns.
3. After both designs return, launch a third `code-architect` with the shared brief and both complete proposals. Require it to critique their shared assumptions, contradictions, missing evidence, and failure modes.
4. If the choice depends on a resolvable empirical unknown, return to Phase 2 or 3 instead of asking the user to choose without evidence.
5. Compare requirement fit, uncertainty exposure, cost of being wrong, reversibility, change radius, and long-term trade-offs. Present a reasoned recommendation and ask the user to confirm the recommended direction and its trade-offs, or choose another approach.

## Phase 5: Write ExecPlan

1. Read [PLANS.md](references/PLANS.md) in full.
2. Write `_features/<yyyy-mm-dd>-<feature-slug>/plan.md` from its skeleton. Include every section and explicitly stub those not yet actionable.
3. Present the plan path and top-level milestones.
4. Wait for user explicit approval.
5. If the user requests changes, return to the earliest affected phase: Phase 1 for requirements or scope, Phase 4 for architecture, or Phase 5 for execution sequencing.

### ADR Record

After the user explicitly approves the ExecPlan and before implementation:

1. Use the `decision-record` skill in `assess` mode with the chosen architecture, alternatives considered, and relevant trade-offs.
2. If it recommends an ADR, ask: `This decision seems worth a standalone ADR — <reason>. Should I generate one now?`
3. If the user agrees, use `decision-record` in `create` mode. Let that skill scan for supersede candidates and obtain confirmation before updating an older ADR.

## Phase 6: Implementation

1. If not already read in this session, read the ExecPlan and [PLANS.md](references/PLANS.md) in full.
2. For each milestone:
   1. Launch one worker subagent with the ExecPlan path and milestone ID/title.
   2. Require it to read the plan, implement the milestone, and update affected **living sections** before handoff.
   3. Integrate and validate the changes. Record any validation gap and its later gate.
   4. Commit incrementally, update the ExecPlan **Review Scope** accordingly.
   5. Proceed through milestones autonomously without additional user approval.

## Phase 7: Quality Review

1. Make **Review Scope** accurately list every commit and uncommitted path to review.
2. Launch one `code-simplifier` subagent against that scope. Resolve its suggestions, validate edits, record decisions in **Decision Log**, and refresh **Review Scope**.
3. Then launch three `code-reviewer` subagents in parallel with these focuses:
   - Simplicity, DRYness, and elegance.
   - Bugs and functional correctness.
   - Project conventions and abstractions.
4. Consolidate the findings and recommend the highest-severity issues to fix.
5. Present the findings and ask whether to fix them now, defer them, or proceed as-is.
6. Apply the decision. Validate edits, record fixes and deferrals in **Decision Log**, and update **Progress**.

## Phase 8: Summary

1. Reconcile **Progress** with the actual completion state, including deferrals.
2. Complete **Outcomes & Retrospective** with achievements, remaining work, lessons learned, and comparison with the original Purpose.
3. Summarize what was built, key decisions, modified files, the ExecPlan location, and suggested next steps.
