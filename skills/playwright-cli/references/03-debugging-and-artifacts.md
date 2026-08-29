# Debugging and Artifacts

Use this page for request interception, failure simulation, and execution evidence.

## Request mocking (CLI first)

```bash
# Return static response
playwright-cli route "**/api/users" --body='[{"id":1,"name":"Alice"}]' --content-type=application/json

# Force status
playwright-cli route "**/*.jpg" --status=404

# Remove headers from outgoing requests
playwright-cli route "**/*" --remove-header=cookie,authorization

# Inspect and remove routes
playwright-cli route-list
playwright-cli unroute "**/api/users"
playwright-cli unroute
```

Pattern examples:

```text
**/api/users
**/api/*/details
**/*.{png,jpg,jpeg}
**/search?q=*
```

## Advanced mocking via `run-code`

Conditional login response:

```bash
playwright-cli run-code "async page => {
  await page.route('**/api/login', async route => {
    const body = route.request().postDataJSON();
    const allowed = body?.username === 'admin';
    await route.fulfill({
      status: allowed ? 200 : 401,
      contentType: 'application/json',
      body: JSON.stringify(allowed ? { token: 'mock-token' } : { error: 'Invalid' }),
    });
  });
}"
```

Modify a real response:

```bash
playwright-cli run-code "async page => {
  await page.route('**/api/user', async route => {
    const response = await route.fetch();
    const json = await response.json();
    json.isPremium = true;
    await route.fulfill({ response, json });
  });
}"
```

## Tracing

```bash
playwright-cli -s=trace open about:blank
playwright-cli -s=trace tracing-start
playwright-cli -s=trace goto https://example.com
playwright-cli -s=trace click "getByRole('link', { name: 'Learn more' })"
playwright-cli -s=trace tracing-stop
playwright-cli -s=trace close
```

Use tracing when you need DOM snapshots, network waterfall, console output, and timing.

## Video recording

```bash
playwright-cli -s=video open about:blank
playwright-cli -s=video video-start .playwright-cli/recordings/demo.webm
playwright-cli -s=video goto https://example.com
playwright-cli -s=video video-chapter "Example page" --description="Page walkthrough" --duration=2000
playwright-cli -s=video snapshot
playwright-cli -s=video video-stop
playwright-cli -s=video close
```

Use video when you need visual proof, demo clips, or artifact sharing.

## Choose the right artifact

| Need | Best tool |
|---|---|
| Precise root-cause debugging (DOM, requests, console) | Tracing |
| Human-readable demo/proof-of-work | Video |
| Fast one-frame evidence | Screenshot |

## Artifact housekeeping

- Traces and videos can become large quickly.
- Clean old artifacts in automation jobs.
