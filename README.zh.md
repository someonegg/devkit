# devkit

[English](./README.md)

轻量级 AI 开发助手工具包，包含可复用的技能定义与 Claude Code 和 Codex 的通用指令。

## 目录说明

- `skills/` — 可复用技能（Skill）定义，供各 AI 助手共享
- `instructions/` — Claude Code 和 Codex 共用的全局指令文件

## Skills

| 技能 | 说明 |
|------|------|
| `open-task-explorer` | 针对开放式任务探索并比较不同框架、选项或草稿，再综合形成更完善的结果。 |
| `feature-dev` | 通过面向不确定性的代码库探索、多种架构方案比较、经批准的 ExecPlan、按里程碑实现与质量评审，端到端交付功能。 |
| `decision-record` | 评估技术决策是否值得单独记录为 ADR，并按照项目的 MADR 约定创建或更新 ADR 文件。 |
| `simplify` | 简化指定范围内的代码、测试和文档，保留既有行为、有效覆盖和关键信息。 |
| `repo-health` | 并行启动三个分别侧重代码、测试和文档的子 agent，寻找仓库腐化信号。 |

## 安装

### Claude Code

将技能和全局指令复制到 Claude 本地目录。已有 `CLAUDE.md` 时，请手动合并指令并跳过最后一条复制命令。

```bash
mkdir -p ~/.claude/skills
cp -R skills/* ~/.claude/skills/
cp -i instructions/AGENTS.md ~/.claude/CLAUDE.md
```

### Codex

将技能和全局指令复制到 Codex 本地目录。已有 `AGENTS.md` 时，请手动合并指令并跳过最后一条复制命令。

```bash
mkdir -p ~/.codex/skills
cp -R skills/* ~/.codex/skills/
cp -i instructions/AGENTS.md ~/.codex/AGENTS.md
```

## 许可

本仓库使用 [BSD 2-Clause License](./LICENSE)。
