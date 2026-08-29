# Workflow and Tests

Use this page to turn browser exploration into tests and debug failing Playwright tests.

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
npx playwright test
```

Use the project's existing test command when it defines one.

## Debug a failing test with `playwright-cli`

```bash
npx playwright test --debug=cli
```

The test pauses and prints a `Debugging Instructions` section containing the exact attach command and a generated session id, for example:

```bash
playwright-cli attach tw-abcdef
```

Use that generated id for subsequent commands:

```bash
playwright-cli -s=tw-abcdef snapshot
playwright-cli -s=tw-abcdef detach
```

Keep the test running while inspecting. Detach the CLI session when finished, then stop the test.

## Practical rules

- Prefer semantic locators (`getByRole`, `getByLabel`) over brittle CSS selectors.
- Take `snapshot` before interaction when references are unclear.
- Generated code is a starting point; assertions must be added manually.
