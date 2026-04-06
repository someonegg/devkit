# Session and State

Use named sessions for isolation and use state commands for reusable authentication/storage.

## Session isolation

```bash
# Session-scoped commands
playwright-cli -s=auth open https://app.example.com/login
playwright-cli -s=auth snapshot
playwright-cli -s=auth close

# Multi-session cleanup
playwright-cli list
playwright-cli close-all
playwright-cli kill-all
```

When commands may run concurrently, always set `-s=<name>`.

## Session configuration

```bash
playwright-cli open https://example.com --browser=firefox
playwright-cli open https://example.com --headed
playwright-cli open https://example.com --persistent
playwright-cli open https://example.com --profile=/path/to/profile
playwright-cli open https://example.com --config=.playwright/my-cli.json
```

Default session name via env var:

```bash
export PLAYWRIGHT_CLI_SESSION="mysession"
```

## State save and restore

```bash
playwright-cli state-save auth.json
playwright-cli state-load auth.json
```

Use this for login reuse across runs.

## Storage command matrix

| Target | List | Get | Set | Delete | Clear |
|---|---|---|---|---|---|
| Cookies | `cookie-list` | `cookie-get <name>` | `cookie-set <name> <value> [opts]` | `cookie-delete <name>` | `cookie-clear` |
| LocalStorage | `localstorage-list` | `localstorage-get <key>` | `localstorage-set <key> <value>` | `localstorage-delete <key>` | `localstorage-clear` |
| SessionStorage | `sessionstorage-list` | `sessionstorage-get <key>` | `sessionstorage-set <key> <value>` | `sessionstorage-delete <key>` | `sessionstorage-clear` |

Cookie filter and options examples:

```bash
# Filter by domain or path
playwright-cli cookie-list --domain=example.com
playwright-cli cookie-list --path=/api

# Set with options
playwright-cli cookie-set session abc123 --domain=example.com --path=/ --httpOnly --secure --sameSite=Lax
```

## IndexedDB

List databases:

```bash
playwright-cli run-code "async page => page.evaluate(async () => indexedDB.databases())"
```

Delete database:

```bash
playwright-cli run-code "async page => page.evaluate(() => indexedDB.deleteDatabase('myDatabase'))"
```

## Security

- Do not commit state files with auth tokens.
- Add `*.auth-state.json` to `.gitignore`.
- Delete state files after automation.
