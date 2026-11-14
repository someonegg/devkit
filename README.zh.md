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
| `open-task-explorer` | 针对开放式任务探索并比较不同框架、选项或草稿，再综合形成更完善的结果。 |
| `feature-dev` | 通过面向不确定性的代码库探索、多种架构方案比较、经批准的 ExecPlan、按里程碑实现与质量评审，端到端交付功能。 |
| `decision-record` | 评估技术决策是否值得单独记录为 ADR，并按照项目的 MADR 约定创建或更新 ADR 文件。 |
| `simplify` | 委派 `simplifier` 子 agent 简化本次会话改动或明确指定的范围，并汇总结果。 |
| `code-review` | 委派 `code-reviewer` 子 agent 审查指定范围，并汇总发现、检查与局限。 |
| `repo-health` | 并行启动三个分别侧重代码、测试和文档的子 agent，寻找仓库腐化信号。 |

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

本仓库使用 [BSD 2-Clause License](./LICENSE)。
