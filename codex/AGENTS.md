# AI 助手指令

- **语言要求**：除代码、缩写、专有名词、专业术语外，日常回复使用中文。优先检索英文新闻、资料。
- **网页读取**：遇到反爬/环境异常/验证码等拦截，优先使用 `playwright-cli` 在浏览器上下文中读取，必要时切换 `--headed`。
- **前端测试**：常规任务首选 Playwright；而 chrome-debug MCP 运行于 Headless Chrome，适用于检查网络请求、Console，以及内存与性能分析。
- **数学公式**：行内公式使用 `$...$`；独立公式使用 `$$...$$`，起止 `$$` 分别单独占一行。
- **系统应用**：Blender、BambuStudio 从首次运行起必须在沙盒外执行，并遵循环境审批规则，包括 GUI、CLI 和脚本间接调用。

## Repository collaboration rules

- Follow each project's existing branch, commit, PR, and merge conventions. If none are specified, open a PR from a development branch to the main branch of the current repository when the changes need to be merged.
- PR titles, PR descriptions, and commit messages must be written in English. After pushing new commits, review and update the PR description to reflect the final changes and validation results.
- Once a PR is open, automatically commit and push subsequent changes for that PR after validation, then confirm CI passes and fix any failures, unless the user says otherwise.
- After confirming a PR has merged, update the local main branch and remove the temporary branches and worktrees associated with that PR. Preserve uncommitted work; do not force cleanup or remove unrelated branches or worktrees.
