# devkit

[中文](./README.zh.md)

A lightweight AI developer assistant toolkit containing reusable skills and agent configurations for Claude and Codex.

## Contents

- `skills/` — Reusable skill definitions shared across AI assistants
- `claude/agents/` — Agent configurations for Claude Code
- `codex/agents/` — Agent configurations for Codex

## Skills

| Skill | Description |
|-------|-------------|
| `open-task-explorer` | Explores and compares distinct frames, options, or drafts for open-ended tasks, then synthesizes a stronger result. |
| `feature-dev` | End-to-end feature development through uncertainty-driven codebase exploration, competing architecture designs, an approved ExecPlan, milestone-based implementation, and quality review. |
| `decision-record` | Assesses whether a technical decision warrants a standalone ADR and creates or updates ADR files using the project's MADR conventions. |
| `simplify` | Delegates simplification of the current session's changes, or an explicit scope, to the `simplifier` subagent and summarizes the results. |
| `code-review` | Delegates scoped code review to the `code-reviewer` subagent and summarizes findings, checks, and limitations. |
| `repo-health` | Launches three parallel subagents focused on code, tests, and documentation to identify signs of repository decay. |

## Installation

### Claude Code

Copy agents and skills to your local Claude directory:

```bash
mkdir -p ~/.claude/agents ~/.claude/skills
cp -R claude/agents/* ~/.claude/agents/
cp -R skills/* ~/.claude/skills/
```

### Codex

Copy agents and skills to your local Codex directory:

```bash
mkdir -p ~/.codex/agents ~/.codex/skills
cp -R codex/agents/* ~/.codex/agents/
cp -R skills/* ~/.codex/skills/
```

## License

This repository is licensed under the [BSD 2-Clause License](./LICENSE).
