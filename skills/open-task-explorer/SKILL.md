---
name: open-task-explorer
description: Guide open-ended tasks by exploring a few distinct frames, options, or drafts, then comparing tradeoffs and synthesizing a stronger final answer. Use only on explicit user request.
---

# Open Task Explorer

Use this skill for open-ended work where a single first-pass answer is likely to overfit one framing. The goal is to branch only at high-value abstraction levels, evaluate explicitly, then compose a stronger final answer.

## Core Workflow

1. Define the target: goal, audience, constraints, success criteria, and what must be out of scope.
2. Confirm the target with the user: restate the target and ask the user to confirm or correct it before continuing.
3. Choose one or two search modes from the list below. Do not run every mode by default.
4. Generate 2-4 meaningfully different candidates, paths, frames, or drafts.
5. Judge them against explicit criteria stated before the judgment.
6. Compose the final answer from the strongest path or a deliberate blend of paths.
7. Stress-test the result for missing assumptions, weak evidence, internal contradictions, and user-impacting risks.
8. Use external anchors for claims that require verification under the normal browsing or tool-verification policy.
9. When it helps the user evaluate the tradeoff, briefly show the selected mode, the main alternatives considered, and why the final path won.

## Search Modes

- **Best-of-N**: Generate several complete candidates, then select or merge the strongest. Use for titles, messages, summaries, framing, and compact recommendations.
- **Draft-Critique-Refine**: Draft once, critique against concrete criteria, then rewrite. Use for memos, essays, explanations, plans, and high-stakes communication.
- **Generate-Rank-Refine**: Generate distinct strategies or positions, rank by tradeoffs, then refine the winning path. Use for product, strategy, architecture, and decision work.
- **Decompose-and-Solve**: Search for a useful structure first, solve each part, then synthesize. Use when the request is broad or underspecified.
- **Tool-Anchored Search**: Generate candidates, then check what can be checked with sources, calculations, tests, execution, or files. Use whenever factual, numeric, technical, legal, financial, medical, or current claims matter.

## Operating Rules

- Search over frames, plans, sections, arguments, assumptions, or complete drafts, not minor wording variants.
- Make candidates genuinely different: different assumptions, audiences, risk postures, solution strategies, or narrative structures.
- State evaluation criteria before evaluating candidates. Prefer 3-6 criteria.
- Keep search shallow by default. One branching pass and one critique/refinement pass is usually enough.
- Preserve meaningful disagreement instead of forcing false certainty. State conditions under which each path wins.
- Treat model self-critique as a quality filter, not as factual validation.
- For claims that could have changed or require precision, use the normal browsing or tool-verification policy.

## Output Patterns

For analysis or decisions:

```text
Frame the problem -> Compare distinct paths -> Explain tradeoffs -> Recommend with conditions -> Note verification needs
```

For writing:

```text
Define audience and intent -> Try distinct angles -> Pick or blend -> Produce final draft -> Briefly note major choices
```

For research synthesis:

```text
Define question -> Separate hypotheses -> Gather/check evidence -> Rank confidence -> Present answer with caveats
```

For final deliverables, keep the search visible but compact:

```text
Approach chosen -> Alternatives considered -> Selection rationale -> Final deliverable
```

## Avoid

- Generating many near-duplicate answers.
- Using vague critique such as "make it better" without criteria.
- Hiding uncertainty when candidates depend on different assumptions.
- Over-iterating until the answer becomes generic or loses the user's original intent.
