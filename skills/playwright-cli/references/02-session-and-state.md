# Session and State

Use named sessions for isolation and use state commands for reusable authentication/storage.

## Session isolation

```bash
playwright-cli -s=auth open https://app.example.com/login
playwright-cli -s=auth snapshot
playwright-cli -s=auth close
playwright-cli list
```

When commands may run concurrently, use a task-unique `-s=<name>` and close only that session.

## Session configuration

```bash
playwright-cli -s=config open https://example.com --browser=firefox
playwright-cli -s=config open https://example.com --headed
playwright-cli -s=config open https://example.com --persistent
playwright-cli -s=config open https://example.com --profile=/path/to/profile
playwright-cli -s=config open https://example.com --config=.playwright/my-cli.json
```

## State save and restore

```bash
playwright-cli -s=auth state-save .playwright-cli/auth.auth-state.json
playwright-cli -s=auth state-load .playwright-cli/auth.auth-state.json
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
playwright-cli -s=auth cookie-list --domain=example.com
playwright-cli -s=auth cookie-list --path=/api

# Set with options
playwright-cli -s=auth cookie-set session abc123 --domain=example.com --path=/ --httpOnly --secure --sameSite=Lax
```

## IndexedDB

List databases:

```bash
playwright-cli -s=auth run-code "async page => page.evaluate(async () => indexedDB.databases())"
```

Delete database:

```bash
playwright-cli -s=auth run-code "async page => page.evaluate(() => new Promise((resolve, reject) => {
  const request = indexedDB.deleteDatabase('myDatabase');
  request.onsuccess = () => resolve('deleted');
  request.onerror = () => reject(request.error);
  request.onblocked = () => reject(new Error('delete blocked'));
}))"
```

## Security

- Do not commit state files with auth tokens.
- Store them under `.playwright-cli/` and ignore both `.playwright-cli/` and `*.auth-state.json`.
- Delete them when no longer needed.
