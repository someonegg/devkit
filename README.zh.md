# devkit

[English](./README.md)

轻量级 AI 开发助手工具包，包含可复用的技能定义与 Claude、Codex 的 Agent 配置。

## 目录说明

- `skills/` — 可复用技能（Skill）定义，供各 AI 助手共享
- `claude/agents/` — Claude Code 的 Agent 配置
- `codex/agents/` — Codex 的 Agent 配置

## Skills

| 技能 | 说明 |
|------|------|
| `feature-dev` | 面向功能开发的结构化工作流：代码库探索、需求澄清、架构多方案对比、ExecPlan 编写、按里程碑实现与质量评审。强调"先设计后编码"，以 ExecPlan 作为执行期间的单一事实来源。 |
| `playwright-cli` | 浏览器自动化与页面调试：页面交互、信息采集、回归验证，支持执行高级 Playwright 脚本。 |
| `content-research-writer` | 协作式内容写作，提供研究支持、引用管理、大纲迭代与逐节实时反馈。 |

## Agents

### Claude (`claude/agents/`)

| Agent | 说明 |
|-------|------|
| `code-architect` | 分析现有代码模式，设计功能架构，输出包含文件清单、组件设计与构建顺序的实现蓝图。 |
| `code-explorer` | 追踪执行路径、梳理架构层次，在新开发开始前深入理解现有功能。 |
| `code-reviewer` | 审查代码中的 Bug、逻辑错误、安全漏洞与风格问题，仅报告高置信度问题。 |
| `code-simplifier` | 在不改变行为的前提下，优化近期修改代码的可读性、一致性与可维护性。 |

### Codex (`codex/agents/`)

同上四个 Agent（`code-architect`、`code-explorer`、`code-reviewer`、`code-simplifier`），针对 Codex 运行时配置。

## 目录结构

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

## 安装

### Claude Code

将 agents 与 skills 复制到 Claude 本地目录：

```bash
mkdir -p ~/.claude/agents ~/.claude/skills
cp -R claude/agents/* ~/.claude/agents/
cp -R skills/* ~/.claude/skills/
```

### Codex

将 agents 与 skills 复制到 Codex 本地目录：

```bash
mkdir -p ~/.codex/agents ~/.codex/skills
cp -R codex/agents/* ~/.codex/agents/
cp -R skills/* ~/.codex/skills/
```

## 许可

本仓库使用 [MIT License](./LICENSE)。
