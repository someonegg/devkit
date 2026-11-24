# devkit

[中文](./README.zh.md)

A lightweight AI developer assistant toolkit containing reusable skills and shared instructions for Claude Code and Codex.

## Contents

- `skills/` — Reusable skill definitions shared across AI assistants
- `instructions/` — Shared global instruction file for Claude Code and Codex

## Skills

| Skill | Description |
|-------|-------------|
| `open-task-explorer` | Explores and compares distinct frames, options, or drafts for open-ended tasks, then synthesizes a stronger result. |
| `feature-dev` | End-to-end feature development through uncertainty-driven codebase exploration, competing architecture designs, an approved ExecPlan, milestone-based implementation, and quality review. |
| `decision-record` | Assesses whether a technical decision warrants a standalone ADR and creates or updates ADR files using the project's MADR conventions. |
| `simplify` | Simplifies scoped code, tests, and documentation while preserving behavior, meaningful coverage, and essential information. |
| `repo-health` | Launches three parallel subagents focused on code, tests, and documentation to identify signs of repository decay. |

## Installation

### Claude Code

Copy the skills and global instructions to your local Claude directory. If you already have a `CLAUDE.md`, merge the instructions into it instead of running the final copy command.

```bash
mkdir -p ~/.claude/skills
cp -R skills/* ~/.claude/skills/
cp -i instructions/AGENTS.md ~/.claude/CLAUDE.md
```

### Codex

Copy the skills and global instructions to your local Codex directory. If you already have an `AGENTS.md`, merge the instructions into it instead of running the final copy command.

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
cp -i instructions/AGENTS.md ~/.codex/AGENTS.md
```

## License

This repository is licensed under the [BSD 2-Clause License](./LICENSE).
