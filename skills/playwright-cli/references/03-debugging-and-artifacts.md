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

# Inspect and cleanup
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
  await page.route('**/api/login', route => {
    const body = route.request().postDataJSON();
    if (body.username === 'admin') {
      route.fulfill({ body: JSON.stringify({ token: 'mock-token' }) });
    } else {
      route.fulfill({ status: 401, body: JSON.stringify({ error: 'Invalid' }) });
    }
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
playwright-cli tracing-start
playwright-cli open https://example.com
playwright-cli click e1
playwright-cli tracing-stop
```

Use tracing when you need DOM snapshots, network waterfall, console output, and timing.

## Video recording

```bash
playwright-cli open https://example.com
playwright-cli video-start recordings/demo.webm
playwright-cli video-chapter "Login" --description="Sign in flow" --duration=2000
playwright-cli snapshot
playwright-cli video-stop
```

Use video when you need visual proof, demo clips, or artifact sharing.

## Choose the right artifact

| Need | Best tool |
|---|---|
| Precise root-cause debugging (DOM, requests, console) | Tracing |
| Human-readable demo/proof-of-work | Video |
| Fast one-frame evidence | Screenshot |

## Storage housekeeping

- Traces and videos can become large quickly.
- Clean old artifacts in automation jobs.
