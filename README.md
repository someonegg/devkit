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
| `content-research-writer` | Collaborative research and writing support covering outlines, source-backed citations, drafting, and section-by-section feedback. |
| `decision-record` | Assesses whether a technical decision warrants a standalone ADR and creates or updates ADR files using the project's MADR conventions. |
| `document-retrieval` | Delegates focused retrieval from long or numerous explicitly provided documents or URLs to the `document-retriever` subagent, returning source-located matches without loading full sources into the main context. |
| `feature-dev` | End-to-end feature development through uncertainty-driven codebase exploration, competing architecture designs, an approved ExecPlan, milestone-based implementation, and quality review. Used only when explicitly requested. |
| `open-task-explorer` | Explores and compares distinct frames, options, or drafts for open-ended tasks, then synthesizes a stronger result. Used only when explicitly requested. |
| `playwright-cli` | Task-first browser automation for page interaction, debugging, stateful workflows, and Playwright test execution. |

## Agents

### Claude (`claude/agents/`)

| Agent | Description |
|-------|-------------|
| `code-architect` | Analyzes existing codebase patterns and conventions, then produces implementation-ready feature architecture blueprints covering files, components, data flows, and build sequences. |
| `code-explorer` | Traces existing features through their execution paths, architecture layers, patterns, abstractions, and dependencies to inform new development. |
| `code-reviewer` | Reviews code for defects, security vulnerabilities, quality issues, and violations of project conventions while filtering out low-confidence findings. |
| `code-simplifier` | Refines recently modified code for clarity, consistency, and maintainability while preserving exact behavior. |
| `document-retriever` | Finds source-backed matches within explicitly provided documents or URLs, returning locations, snippets, match reasons, and retrieval gaps without making task-level judgments. |

### Codex (`codex/agents/`)

Provides the same five agent roles through Codex-specific TOML configurations.

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

This repository is licensed under the [MIT License](./LICENSE).
