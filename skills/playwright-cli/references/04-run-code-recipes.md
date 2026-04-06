# Run-Code Cookbook

Use `run-code` for tasks not directly covered by CLI commands.

## Syntax

```bash
playwright-cli run-code "async page => {
  // Playwright code
}"
```

## High-value recipes

### Grant permissions

```bash
playwright-cli run-code "async page => {
  await page.context().grantPermissions(['geolocation', 'notifications']);
}"
```

### Set geolocation

```bash
playwright-cli run-code "async page => {
  await page.context().grantPermissions(['geolocation']);
  await page.context().setGeolocation({ latitude: 37.7749, longitude: -122.4194 });
}"
```

### Emulate media

```bash
playwright-cli run-code "async page => {
  await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
}"
```

### Wait for dynamic readiness

```bash
playwright-cli run-code "async page => {
  await page.waitForFunction(() => window.appReady === true);
}"
```

### Interact with iframe

```bash
playwright-cli run-code "async page => {
  const frame = page.locator('iframe#my-iframe').contentFrame();
  await frame.locator('button').click();
}"
```

### Handle file download

```bash
playwright-cli run-code "async page => {
  const pending = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download' }).click();
  const download = await pending;
  await download.saveAs('./downloaded-file.pdf');
}"
```

### Read/write clipboard

```bash
playwright-cli run-code "async page => {
  await page.context().grantPermissions(['clipboard-read']);
  return await page.evaluate(() => navigator.clipboard.readText());
}"
```

### Inspect page metadata

```bash
playwright-cli run-code "async page => ({
  title: await page.title(),
  url: page.url(),
  viewport: page.viewportSize()
})"
```

### Evaluate with arguments

```bash
playwright-cli run-code "async page => {
  const multiplier = 5;
  return await page.evaluate(m => document.querySelectorAll('li').length * m, multiplier);
}"
```

### Fail-safe interaction with try/catch

```bash
playwright-cli run-code "async page => {
  try {
    await page.getByRole('button', { name: 'Submit' }).click({ timeout: 1000 });
    return 'clicked';
  } catch {
    return 'element not found';
  }
}"
```

## Element attributes from snapshot refs

When `snapshot` omits detailed attributes:

```bash
playwright-cli eval "el => el.id" e7
playwright-cli eval "el => el.className" e7
playwright-cli eval "el => el.getAttribute('data-testid')" e7
playwright-cli eval "el => getComputedStyle(el).display" e7
```

## Long-form examples

- [auth-save-state.js](examples/auth-save-state.js) — Full login flow that saves storage state to a file for reuse with `state-load`.
- [video-overlay-demo.js](examples/video-overlay-demo.js) — Demonstrates `page.screencast` HTML overlay support (injecting custom annotations into video frames). 
