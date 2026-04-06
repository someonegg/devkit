# Workflow and Tests

Use this page for day-to-day execution: open a page, inspect, interact, verify, then convert findings into tests.

## 60-second loop

```bash
playwright-cli open https://example.com
playwright-cli snapshot
playwright-cli click e1
playwright-cli fill e2 "hello"
playwright-cli snapshot
playwright-cli close
```

If manual interaction is required (login, captcha, manual click), use:

```bash
playwright-cli open https://example.com --headed
```

## Generate test code while exploring

Every `click`, `fill`, `press`, and `goto` command emits Playwright code in output.
Use that output as the base of a test file, then add assertions.

```ts
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('user@example.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page).toHaveURL(/.*dashboard/);
});
```

## Run tests

```bash
PLAYWRIGHT_HTML_OPEN=never npx playwright test
PLAYWRIGHT_HTML_OPEN=never npm run special-test-command
```

## Debug a failing test with `playwright-cli`

```bash
# 1) Start paused test in background
PLAYWRIGHT_HTML_OPEN=never npx playwright test --debug=cli > .playwright-debug.log 2>&1 &

# 2) Wait until log prints "Debugging Instructions" and session id (example: tw-abcdef)
tail -f .playwright-debug.log

# 3) Attach and inspect live state
playwright-cli attach tw-abcdef
```

After patching code, stop the background run and rerun tests.

## Practical rules

- Prefer semantic locators (`getByRole`, `getByLabel`) over brittle CSS selectors.
- Take `snapshot` before interaction when references are unclear.
- Generated code is a starting point; assertions must be added manually.
