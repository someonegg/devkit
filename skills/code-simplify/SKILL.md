---
name: code-simplify
description: Delegate simplification to the code-simplifier subagent. Use only when the user explicitly requests `code-simplify` by name.
---

# Code Simplify

Use the user's specified scope; otherwise default to changes made in the current conversation. If that scope is unclear, clarify it before editing.

Delegate the scope and relevant context to a `code-simplifier` subagent, which owns simplification and validation under its existing role instructions. Wait for completion and summarize its changes, checks, and any unresolved issues.
