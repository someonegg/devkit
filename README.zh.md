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
| `content-research-writer` | 协作式研究与写作支持，涵盖大纲设计、有来源支撑的引用、内容起草与逐节反馈。 |
| `decision-record` | 评估技术决策是否值得单独记录为 ADR，并按照项目的 MADR 约定创建或更新 ADR 文件。 |
| `document-retrieval` | 将针对较长或数量较多的明确给定文档或 URL 的定向检索委派给 `document-retriever` subagent，在不将完整来源载入主上下文的情况下返回带来源位置的匹配结果。 |
| `feature-dev` | 通过面向不确定性的代码库探索、多种架构方案比较、经批准的 ExecPlan、按里程碑实现与质量评审，端到端交付功能。仅在用户明确要求时使用。 |
| `open-task-explorer` | 针对开放式任务探索并比较不同框架、选项或草稿，再综合形成更完善的结果。仅在用户明确要求时使用。 |
| `playwright-cli` | 以任务为先的浏览器自动化，适用于页面交互、调试、有状态工作流与 Playwright 测试执行。 |

## Agents

### Claude (`claude/agents/`)

| Agent | 说明 |
|-------|------|
| `code-architect` | 分析现有代码库的模式与约定，输出可直接用于实施的功能架构蓝图，涵盖文件、组件、数据流与构建顺序。 |
| `code-explorer` | 沿执行路径、架构层、模式、抽象与依赖关系追踪现有功能，为后续开发提供依据。 |
| `code-reviewer` | 审查代码缺陷、安全漏洞、质量问题及违反项目约定之处，同时过滤低置信度问题。 |
| `code-simplifier` | 在严格保持行为不变的前提下，优化近期修改代码的清晰度、一致性与可维护性。 |
| `document-retriever` | 在明确给定的文档或 URL 中查找有来源支撑的匹配内容，返回来源位置、摘录、匹配原因与检索缺口，不做任务级判断。 |

### Codex (`codex/agents/`)

通过 Codex 专用的 TOML 配置提供与上文相同的五种 Agent 角色。

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
