---
name: repo-health
description: Review repository code, tests, and documentation for decay, inconsistencies, and maintenance issues using three parallel subagents. Use for repository health audits and cleanup recommendations.
---

# Repository Health

Use the user's scope; otherwise review the current repository. Launch three parallel subagents with these review focuses:

- **Code:** Obsolete paths, duplicate implementations, outdated abstractions, compatibility remnants, and responsibility drift.
- **Tests:** Redundant or ineffective coverage, fragile assertions, excessive mocking, historical stubs, and divergence from current behavior.
- **Documentation:** Inaccurate or outdated content, broken links, unclear organization, duplication, contradictions, and content placed in unsuitable documents.

These are review focuses, not access boundaries. Each subagent may inspect any relevant code, tests, or documentation to substantiate its findings. Let them choose their methods based on project conventions and actual usage; age or superficial similarity alone does not establish a problem.

Synthesize and cross-check their results rather than concatenate reports. Prioritize evidence-backed, actionable issues, explaining locations, impact, and recommendations. Distinguish confirmed problems from signals needing verification, and state review limitations.

By default, review and recommend without modifying files.
