---
name: feature-dev
description: Deliver features end to end through multi-agent codebase exploration, competing architecture designs, ExecPlan-driven implementation, and quality review. Use only on explicit user request.
---

# Feature Development

Deliver features through a structured workflow: understand the request and codebase, resolve open questions, compare architecture approaches, write an ExecPlan, implement by milestone, and complete a quality review.

Invoking `feature-dev` authorizes use of the specialized subagents required by this workflow.

## Feature Packet

Create one feature packet per feature at `_features/<yyyy-mm-dd>-<feature-slug>/` containing:

- `plan.md`: The implementation ExecPlan, including milestones, concrete steps, validation, review scope, progress, decisions, and recovery guidance. Treat it as the authority for execution state.

Freeze the packet after delivery and retain it only for traceability. Treat the code, tests, and durable ADRs as the authority for current behavior.

## Resume from an existing ExecPlan

If the user provides an existing ExecPlan:

1. Read it in full, plus [PLANS.md](references/PLANS.md) if needed.
2. Inspect **Progress**. If the plan is complete, abandoned, or superseded, flag that; otherwise, identify the resume point.
3. Summarize the state and proposed next step, then wait for confirmation.
4. After confirmation, continue at Phase 6, Step 2.

## Phase 1: Discovery

1. If the request is unclear, ask what problem the feature solves, what it should do, and which constraints or requirements apply.
2. Summarize the request and confirm the understanding with the user.

## Phase 2: Codebase Exploration

1. Launch 2–3 `code-explorer` subagents in parallel with distinct perspectives, such as similar features, architecture and data flow, current behavior and extension points, or UI and testing patterns. Require each to trace its area end to end, explain patterns, boundaries, and integration points, and return 5–10 key files.
2. Read every identified file and reconcile the findings into a detailed understanding.
3. Present the relevant patterns, integration points, and constraints.

## Phase 3: Clarifying Questions

1. Compare the request with the codebase findings and identify blocking ambiguities in behavior, edge cases, error handling, integration, scope, compatibility, design preferences, or performance.
2. If any exist, present all questions in one organized list and wait for answers.
3. Otherwise, state that no blocking questions remain and continue to Phase 4.

## Phase 4: Architecture Design

1. Launch 2–3 `code-architect` subagents in parallel. Prefer these focuses when applicable:
   - **Risk-first containment**: Minimize change radius and maximize compatibility and rollback safety.
   - **Evolutionary migration**: Improve the structure incrementally with controlled risk.
   - **Target-state architecture**: Optimize for long-term maintainability and extensibility despite a larger initial change.
2. Compare the approaches against the confirmed requirements, urgency, complexity, and team context.
3. Present each approach's trade-offs and implementation differences, then give a reasoned recommendation.
4. Ask the user to choose an approach.

### ADR Sidecar Check

After the user confirms an approach and before Phase 5:

1. Use the `decision-record` skill in `assess` mode with the chosen architecture, alternatives considered, and relevant trade-offs.
2. If it recommends an ADR, ask: `This decision seems worth a standalone ADR — <reason>. Should I generate one now?`
3. If the user agrees, use `decision-record` in `create` mode. Let that skill scan for supersede candidates and obtain confirmation before updating an older ADR.

## Phase 5: Write ExecPlan

1. Read [PLANS.md](references/PLANS.md) in full.
2. Write `_features/<yyyy-mm-dd>-<feature-slug>/plan.md` from its skeleton. Include every section and explicitly stub those not yet actionable.
3. Present the plan path and top-level milestones.
4. Wait for explicit approval before entering Phase 6.
5. If the user requests changes, return to the earliest affected phase: Phase 3 for requirements or scope, Phase 4 for architecture, or Phase 5 for execution sequencing.

## Phase 6: Implementation

1. Read the ExecPlan in full. Also read [PLANS.md](references/PLANS.md) if it has not been read in this session.
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
