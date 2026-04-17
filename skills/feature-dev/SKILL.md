---
name: feature-dev
description: Guided feature development with codebase understanding and architecture focus
---

# Feature Development

You are helping a developer implement a new feature. Follow a systematic approach: understand the codebase deeply, identify and ask about all underspecified details, design elegant architectures, then implement.

## Core Principles

- **Ask clarifying questions**: Identify all ambiguities, edge cases, and underspecified behaviors. Ask specific, concrete questions rather than making assumptions. Wait for user answers before proceeding with implementation. Ask questions early (after understanding the codebase, before designing architecture).
- **Understand before acting**: Read and comprehend existing code patterns first.
- **Read files identified by agents**: When launching agents, ask them to return lists of the most important files to read. After agents complete, read those files to build detailed context before proceeding.
- **Simple and elegant**: Prioritize readable, maintainable, architecturally sound code.
- **Use TodoWrite**: Track all progress throughout.
- **ExecPlan as living document**: After architecture is confirmed, write and maintain an ExecPlan (see [PLANS.md](PLANS.md) for the full specification). The ExecPlan is the single source of truth for implementation progress, decisions, and outcomes.

## Subagent Assumption

Assume specialized subagents are already registered and available. Use them directly by name when needed.

---

## Resume Path (Interrupted Session)

If the user provides an existing ExecPlan file, skip Phases 1–5 and go directly to Phase 6.

**Actions**:
1. Read the ExecPlan in full. If [PLANS.md](PLANS.md) has not been read in this session, read it now.
2. Check the **Progress** section to determine its state:
   - If all items are checked and **Outcomes & Retrospective** is written, the plan is complete — ask the user to confirm their intent.
   - If the plan appears abandoned or superseded (e.g., Progress is empty, goal no longer matches), surface this to the user before proceeding.
   - Otherwise, treat it as in-progress and identify the last completed milestone and where to resume.
3. Confirm with the user: summarize current progress and state the next step you intend to take.
4. Proceed with Phase 6, Step 2 upon confirmation.

---

## Phase 1: Discovery

**Goal**: Understand what needs to be built.

**Actions**:
1. Create a checklist with all phases.
2. If feature request is unclear, ask the user for:
   - What problem they are solving
   - What the feature should do
   - Any constraints or requirements
3. Summarize understanding and confirm with user.

---

## Phase 2: Codebase Exploration

**Goal**: Understand relevant existing code and patterns at both high and low levels.

**Actions**:
1. Launch 2-3 `code-explorer` subagents in parallel. Each subagent should:
   - Trace through the code comprehensively and focus on getting a comprehensive understanding of abstractions, architecture, and flow of control
   - Target a different aspect of the codebase (for example: similar features, high-level understanding, architectural understanding, user experience)
   - Include a list of 5-10 key files to read

   **Example subagent prompts**:
   - "Find features similar to [feature] and trace through their implementation comprehensively"
   - "Map the architecture and abstractions for [feature area], tracing through the code comprehensively"
   - "Analyze the current implementation of [existing feature/area], tracing through the code comprehensively"
   - "Identify UI patterns, testing approaches, or extension points relevant to [feature]"

2. Once subagents return, read all files identified by subagents to build deep understanding.
3. Present comprehensive summary of findings and patterns discovered.

---

## Phase 3: Clarifying Questions

**Goal**: Fill in gaps and resolve all ambiguities before designing.

**CRITICAL**: This is one of the most important phases. DO NOT SKIP.

**Actions**:
1. Review the codebase findings and original feature request.
2. Identify underspecified aspects: edge cases, error handling, integration points, scope boundaries, design preferences, backward compatibility, performance needs.
3. **Present all questions to the user in a clear, organized list.**
4. **Wait for answers before proceeding to architecture design.**

If the user says "whatever you think is best", provide your recommendation and get explicit confirmation.

---

## Phase 4: Architecture Design

**Goal**: Design multiple implementation approaches with different trade-offs.

**Actions**:
1. Launch 2-3 `code-architect` subagents in parallel with different focuses:
   - Minimal changes (smallest change, maximum reuse)
   - Clean architecture (maintainability, elegant abstractions)
   - Pragmatic balance (speed + quality)
2. Review all approaches and form your opinion on which fits best for this specific task (consider: small fix vs large feature, urgency, complexity, team context).
3. Present to user:
   - Brief summary of each approach
   - Trade-offs comparison
   - **Your recommendation with reasoning**
   - Concrete implementation differences
4. **Ask user which approach they prefer.**

---

## Phase 5: Write ExecPlan

**Goal**: Persist the confirmed architecture as a self-contained, executable specification before any code is written.

**Trigger**: User has confirmed the chosen architecture approach from Phase 4.

**Actions**:
1. Read [PLANS.md](PLANS.md) in full to internalize the ExecPlan specification.
2. Determine the ExecPlan file path: `plans/<YYYY-MM-DD>-<feature-slug>.md` (create `plans/` if it does not exist).
3. Write the ExecPlan strictly following the skeleton in [PLANS.md](PLANS.md). All sections must be present; sections not yet actionable should be explicitly stubbed (e.g., "To be filled during implementation") rather than omitted.
4. Tell the user the ExecPlan file path, summarize the key architecture decision and the top-level milestones, and ask for explicit approval to begin implementation. Do not proceed to Phase 6 until approved.

---

## Phase 6: Implementation

**Goal**: Build the feature, keeping the ExecPlan current throughout.

**DO NOT START WITHOUT USER APPROVAL**

**Input**: The approved ExecPlan at `plans/<YYYY-MM-DD>-<feature-slug>.md`, confirmed with user at the end of Phase 5.

**Actions**:
1. Read the ExecPlan in full. If [PLANS.md](PLANS.md) has not been read in this session, read it now.
2. Implement following the ExecPlan (Plan of Work + Concrete Steps).
3. Keep code changes committed in **incremental, milestone-based commits** during execution. Update the ExecPlan **Review Scope** continuously during implementation.
4. Keep the ExecPlan's **milestones and living sections (Progress, Surprises & Discoveries, Decision Log, Outcomes & Retrospective)** up to date as you execute. If the scope shifts, rewrite affected sections so the document remains coherent and self-contained.
5. Proceed through milestones autonomously — do not pause to ask the user for "next steps" between milestones.
6. Follow codebase conventions strictly.
7. Write clean code. Add comments only where logic is non-obvious.

---

## Phase 7: Quality Review

**Goal**: Ensure code is simple, DRY, elegant, easy to read, and functionally correct.

**Actions**:
1. Read the ExecPlan **Review Scope** first and derive the exact review target from it (listed commits + listed uncommitted paths). If this section is missing or stale, update it before launching reviewers.
2. Launch 1 `code-simplifier` subagent once against the current **Review Scope**, complete resulting simplification decisions, and record accepted or rejected simplifications in the ExecPlan **Decision Log**.
3. **Only after Step 2 is fully completed*, launch 3 `code-reviewer` subagents in parallel with different focuses:
   - Simplicity/DRY/elegance
   - Bugs/functional correctness
   - Project conventions/abstractions
4. Consolidate findings and identify highest severity issues that you recommend fixing.
5. **Present findings to user and ask what they want to do** (fix now, fix later, or proceed as-is).
6. Address issues based on user decision. Record any fixes or deliberate deferrals in the ExecPlan **Decision Log**. Update the **Progress** checklist for any new work items completed.

---

## Phase 8: Summary

**Goal**: Document what was accomplished, closing out the ExecPlan.

**Actions**:
1. Reconcile the ExecPlan **Progress** checklist and TodoWrite against actual completion state; mark completed items, note any deferred items explicitly.
2. Write the **Outcomes & Retrospective** section of the ExecPlan: what was achieved, what remains, lessons learned, comparison against the original Purpose.
3. Summarize to the user:
   - What was built
   - Key decisions made
   - Files modified
   - ExecPlan location for future reference
   - Suggested next steps

---
