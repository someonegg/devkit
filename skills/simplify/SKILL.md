---
name: simplify
description: Delegate scoped code, test, and documentation simplification to the simplifier subagent. Use only when the user explicitly requests `simplify` by name.
---

# Simplify

Simplify code, tests, and documentation, independently or together. Use the user's specified scope; otherwise default to all local changes, including staged, unstaged, and untracked files. Follow any simplification focus specified by the user.

Delegate the scope and relevant context to a `simplifier` subagent, which owns simplification and validation under its existing role instructions. Wait for completion and summarize its changes, checks, and any unresolved issues.
