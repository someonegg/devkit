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
| `feature-dev` | Structured feature development workflow: codebase exploration, requirement clarification, architecture comparison, ExecPlan authoring, milestone-driven implementation, and quality review. Emphasizes design-before-code and treats the ExecPlan as the single source of truth during execution. |
| `playwright-cli` | Browser automation and page debugging. Supports page interaction, data scraping, and regression testing via advanced Playwright scripts. |
| `content-research-writer` | Collaborative content writing with research support, citation management, outline iteration, and real-time section feedback. |

## Agents

### Claude (`claude/agents/`)

| Agent | Description |
|-------|-------------|
| `code-architect` | Designs feature architectures by analyzing existing patterns, producing implementation blueprints with file lists, component designs, and build sequences. |
| `code-explorer` | Traces execution paths and maps architecture layers to deeply understand an existing feature before new development begins. |
| `code-reviewer` | Reviews code for bugs, logic errors, security vulnerabilities, and style issues, reporting only high-confidence findings. |
| `code-simplifier` | Refines recently modified code for clarity, consistency, and maintainability without changing behavior. |

### Codex (`codex/agents/`)

Same four agents (`code-architect`, `code-explorer`, `code-reviewer`, `code-simplifier`) configured for the Codex runtime.

## Directory Structure

```text
.
├── claude/
│   └── agents/
├── codex/
│   └── agents/
└── skills/
    ├── content-research-writer/
    ├── feature-dev/
    └── playwright-cli/
```

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
