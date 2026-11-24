---
name: repo-health
description: Review repository code, tests, and documentation for decay, inconsistencies, and maintenance issues using three parallel subagents. Use only when the user explicitly requests `repo-health` by name.
---

# Repository Health

Use the user's scope; otherwise review the current repository. Launch three parallel subagents with these review focuses:

- **Code:** Obsolete paths, duplicate implementations, outdated abstractions, compatibility remnants, and responsibility drift.
- **Tests:** Redundant or ineffective coverage, fragile assertions, excessive mocking, historical stubs, and divergence from current behavior.
- **Documentation:** Inaccurate or outdated content, broken links, unclear organization, duplication, contradictions, and content placed in unsuitable documents.

These focuses and their listed checks are suggestions, not an exhaustive checklist or access boundaries. Subagents may adapt, combine, or extend them and inspect any relevant code, tests, or documentation within the user's scope to substantiate their findings. Let them choose their methods based on project conventions and actual usage.

Synthesize and cross-check their results rather than concatenate reports. Prioritize evidence-backed, actionable issues, explaining locations, impact, and recommendations. Distinguish confirmed problems from signals needing verification, and state review limitations.

Look across findings for systemic causes, such as unclear ownership, duplicated sources of truth, or missing feedback loops. Where feasible, recommend mechanisms to prevent recurrence or detect issues earlier, explaining which findings they address, how they fit existing practices, and their implementation and maintenance costs. If no feasible mechanism is supported, say so briefly.

By default, review and recommend without modifying files.
