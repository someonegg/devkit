---
name: code-review
description: Delegate scoped code review to the code-reviewer subagent and summarize actionable findings and review limitations. Use only when the user explicitly requests `code-review` by name.
---

# Code Review

Use the user's specified scope and review focus; otherwise default to all local changes, including staged, unstaged, and untracked files.

Delegate the scope, comparison base, and relevant context to a `code-reviewer` subagent, which owns review and validation under its existing role instructions. Wait for completion and summarize its findings, checks, and limitations. Do not apply fixes as part of the review.
