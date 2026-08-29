---
name: playwright-cli
description: Automate browser interactions, debug pages, and run Playwright tests with a task-first workflow.
allowed-tools: Bash(playwright-cli:*) Bash(npx:*) Bash(npm:*)
---

# Browser Automation with playwright-cli

Use this skill when you need browser automation, page debugging, test execution, request mocking, or session/state management.

## 60-second quick start

Run a minimal, reliable loop first:

Default mode is headless. If human interaction is needed (for example manual click, CAPTCHA, or login), open the browser in headed mode.

```bash
# Headless by default; add --headed when manual interaction is required.
playwright-cli -s=quickstart open https://demo.playwright.dev/todomvc
playwright-cli -s=quickstart snapshot
playwright-cli -s=quickstart fill "getByRole('textbox', { name: 'What needs to be done?' })" "hello"
playwright-cli -s=quickstart press Enter
playwright-cli -s=quickstart snapshot
playwright-cli -s=quickstart close
```

If `playwright-cli` is unavailable globally, use `npx --package=@playwright/cli playwright-cli <command>`.

## Element targeting rules

Prefer refs from `snapshot` first.

```bash
playwright-cli snapshot
playwright-cli click e15
```

Use selectors/locators only when refs are not suitable:

```bash
playwright-cli click "#main > button.submit"
playwright-cli click "getByRole('button', { name: 'Submit' })"
playwright-cli click "getByTestId('submit-button')"
```

## Session quick examples

When concurrency is possible, use a task-unique session via `-s=<name>` and close only that session. Example session names are placeholders.

```bash
playwright-cli -s=auth open https://app.example.com/login
playwright-cli -s=auth snapshot
playwright-cli -s=auth close
playwright-cli list
```

## Task router (choose by goal)

- Workflow and test debugging: [01-workflow-and-tests.md](references/01-workflow-and-tests.md)
- Session and storage state: [02-session-and-state.md](references/02-session-and-state.md)
- Request mocking, tracing, and video artifacts: [03-debugging-and-artifacts.md](references/03-debugging-and-artifacts.md)
- Advanced Playwright recipes with `run-code`: [04-run-code-recipes.md](references/04-run-code-recipes.md)
- Inspect element attributes: [04-run-code-recipes.md](references/04-run-code-recipes.md#element-attributes-from-snapshot-refs)
