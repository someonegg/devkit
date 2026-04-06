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
# 1) Open browser and navigate
# Headless (default, no visible browser window)
playwright-cli open https://example.com
# Headed (visible browser window for manual interaction)
playwright-cli open https://example.com --headed

# 2) Capture refs (e1, e2, ...)
playwright-cli snapshot

# 3) Interact using refs from snapshot
playwright-cli click e1
playwright-cli fill e2 "hello"

# 4) Verify result
playwright-cli snapshot

# 5) Cleanup
playwright-cli close
```

If `playwright-cli` is not available globally, use `npx playwright-cli` for all commands.

## Core commands (start here)

```bash
playwright-cli open https://example.com
playwright-cli goto https://playwright.dev
playwright-cli snapshot
playwright-cli click e3
playwright-cli fill e5 "user@example.com"
playwright-cli press Enter
playwright-cli screenshot --filename=page.png
playwright-cli run-code "async page => await page.context().grantPermissions(['geolocation'])"
playwright-cli run-code --filename=script.js
playwright-cli close
```

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

If there is any chance of concurrent commands or parallel tasks, use a named session via `-s=<name>`. Do not share the default session across concurrent runs.

```bash
# Named isolated session
playwright-cli -s=auth open https://app.example.com/login
playwright-cli -s=auth snapshot
playwright-cli -s=auth close

# List and cleanup
playwright-cli list
playwright-cli close-all
```

## Task router (choose by goal)

- Workflow and test debugging: [01-workflow-and-tests.md](references/01-workflow-and-tests.md)
- Session and storage state: [02-session-and-state.md](references/02-session-and-state.md)
- Request mocking, tracing, and video artifacts: [03-debugging-and-artifacts.md](references/03-debugging-and-artifacts.md)
- Advanced Playwright recipes with `run-code`: [04-run-code-recipes.md](references/04-run-code-recipes.md)
- Inspect element attributes: [04-run-code-recipes.md](references/04-run-code-recipes.md#element-attributes-from-snapshot-refs)
