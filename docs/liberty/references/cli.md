---
title: CLI reference
description: "Every Liberty CLI command — liberty-admin (users, roles, jobs, reload), liberty-connectors (test connectors without the web layer), liberty-crypto (encrypt / decrypt / generate master key), liberty-license (verify / inspect a license JWT). Every flag, every output."
keywords: [Liberty Framework, CLI, liberty-admin, liberty-connectors, liberty-crypto, liberty-license, users, roles, reload, encrypt, verify license]
---

# CLI reference

The framework ships **four CLIs** as entry points of the same Python package. They are installed into the virtualenv alongside the server, so they are reachable as `.venv/bin/<cli>`:

| CLI | Purpose |
|---|---|
| [`liberty-admin`](#liberty-admin) | User / role / job management, hot-reload, schema bootstrap. |
| [`liberty-connectors`](#liberty-connectors) | Inspect and test connectors without booting the web layer. |
| [`liberty-crypto`](#liberty-crypto) | Encrypt, decrypt, generate master keys. |
| [`liberty-license`](#liberty-license) | Verify and inspect a license JWT. |

Every CLI reads `[default_pool]` from `app.toml` and the same environment variables the server uses. Run them from the `liberty-next` directory (or set `LIBERTY_APPS_DIR` so they find the configuration).

---

## `liberty-admin`

### `init-db`

Bootstrap the auth backend (creates `auth.toml` for `backend = "toml"`, or the `ly2_*` tables for `backend = "db"`).

```bash
.venv/bin/liberty-admin init-db
```

Idempotent. Existing users and tables are left intact; only what's missing is created.

### `verify-config`

Validate every TOML file under `liberty-apps/config/` against the Pydantic models. Reports parse errors, validation errors and cross-reference errors (a screen pointing at a missing connector, a menu pointing at a missing screen).

```bash
.venv/bin/liberty-admin verify-config
```

Exits non-zero on the first error, useful in CI before a deploy.

### `reload`

Hot-reload the per-section TOML registries without restarting the server.

```bash
.venv/bin/liberty-admin reload                  # all sections
.venv/bin/liberty-admin reload --scope connectors
```

Hits `POST /admin/reload` on `http://${HOST}:${PORT}` — the server must be running.

### Users

```bash
.venv/bin/liberty-admin create-user alice --display-name "Alice Dupont" --role viewer --role editor
.venv/bin/liberty-admin set-password alice                    # prompts twice
.venv/bin/liberty-admin set-active alice --inactive           # soft-delete
.venv/bin/liberty-admin set-active alice                      # re-activate
.venv/bin/liberty-admin list-users [--inactive]
.venv/bin/liberty-admin show alice                            # roles + effective permissions
.venv/bin/liberty-admin role-add alice manager
.venv/bin/liberty-admin role-remove alice viewer
.venv/bin/liberty-admin revoke alice                          # invalidates every active session
```

### Roles

```bash
.venv/bin/liberty-admin list-roles
.venv/bin/liberty-admin show-role editor                      # permissions + members
.venv/bin/liberty-admin create-role manager --inherits editor --description "..."
.venv/bin/liberty-admin grant manager sql:billing:*
.venv/bin/liberty-admin revoke-perm manager sql:billing:dangerous-query
.venv/bin/liberty-admin delete-role manager                   # refused when members exist
```

### Jobs

```bash
.venv/bin/liberty-admin job list                              # every job + last status
.venv/bin/liberty-admin job run billing-nightly-rebuild       # one-off run, system-triggered
.venv/bin/liberty-admin job run <name> --param period=2026-05 --param dry_run=true
.venv/bin/liberty-admin job logs --follow <run-id>            # stream the run log
.venv/bin/liberty-admin job abort <run-id>
.venv/bin/liberty-admin job history <name> [--limit 20]
```

### i18n

```bash
.venv/bin/liberty-admin i18n-diff fr                          # keys in en/ missing from fr/
.venv/bin/liberty-admin i18n-export                           # dump all language packs to stdout
```

### Global flags

| Flag | Effect |
|---|---|
| `--config <path>` | Override `app.toml` location. |
| `--quiet` / `-q` | Suppress info logs; keep only warnings + errors. |
| `--json` | Format output as JSON instead of human-readable. |
| `--server <url>` | Override `http://${HOST}:${PORT}` for `reload` / `job run`. |

---

## `liberty-connectors`

Operate on the connector catalog without the web layer — useful in scripts, CI checks and quick local inspection.

### `list`

```bash
.venv/bin/liberty-connectors list
# default     sql    pool=default     connected
# billing     sql    pool=default     connected
# crm         sql    pool=crm         connected
# jdedwards   sql    pool=jde         offline
# slack       http   base=https://hooks.slack.com
```

### `describe`

```bash
.venv/bin/liberty-connectors describe billing
# billing — sql — pool: default
# queries:
#   - monthly-invoice-counts   (read)   params: month
#   - invoices-for-period      (read)   params: from_date, to_date, status
#   - refresh-totals:write     (write)  params: period
# Permission codes:
#   - sql:billing:monthly-invoice-counts
#   - sql:billing:invoices-for-period
#   - sql:billing:refresh-totals:write
```

### `run`

Execute a query directly against the pool. Bypasses authentication — meant for local diagnostics, not production runs.

```bash
.venv/bin/liberty-connectors run billing invoices-for-period \
  --param from_date=2026-04-01 --param to_date=2026-04-30 \
  --param status=issued \
  --limit 50
```

Output as a table by default; add `--json` for machine-readable rows.

### `test`

Resolve every connector at load and report failures — fast smoke test in CI:

```bash
.venv/bin/liberty-connectors test
# 4 / 5 connectors loaded
# jdedwards: pool 'jde' unreachable — Connection refused
```

Exits non-zero when any connector fails.

### `schema`

Discover and print the columns returned by a query:

```bash
.venv/bin/liberty-connectors schema billing invoices-for-period
# id            INTEGER  NOT NULL
# number        VARCHAR(64)
# issue_date    DATE
# customer_id   INTEGER
# amount_excl   DECIMAL(12,2)
# amount_incl   DECIMAL(12,2)
# currency      VARCHAR(3)
# status        VARCHAR(32)
```

---

## `liberty-crypto`

Manage the master key and the `ENC:` blob format.

### `genkey`

```bash
.venv/bin/liberty-crypto genkey
# 7c4f1c2d8e3a6b9f0c1d4e5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c
```

Outputs a hex-encoded 32-byte AES-256 key. Export under `LIBERTY_MASTER_KEY`.

### `encrypt` / `decrypt`

```bash
.venv/bin/liberty-crypto encrypt 's3cret!'
# ENC:gAAAAABh1234kQ5e7…RrU=

.venv/bin/liberty-crypto decrypt 'ENC:gAAAAABh1234kQ5e7…RrU='
# s3cret!
```

Reads `LIBERTY_MASTER_KEY` from the environment. The encrypt produces a fresh nonce each time, so the ciphertext is different every run even for the same plaintext.

### `rewrap`

Re-encrypt every `ENC:` value in a set of files with the current master key. Used during rotation — see [Encryption & secrets → key rotation](../framework/configuration/encryption-secrets.md#key-rotation).

```bash
.venv/bin/liberty-crypto rewrap --files config/connectors.toml,config/app.toml
# 4 ENC: values re-encrypted with the current master key
```

Idempotent. Files are rewritten in place; commit the diff.

### `fingerprint`

Print the SHA-256 fingerprint of the current master key — useful for verifying that two installs share the same key without exposing the key itself.

```bash
.venv/bin/liberty-crypto fingerprint
# 7c4f1c2d… (sha256)
```

---

## `liberty-license`

### `verify`

```bash
.venv/bin/liberty-license verify "$LIBERTY_LICENSE_KEY"
# license accepted
# customer="Acme Corp" edition="enterprise"
# expires=2026-05-19T00:00:00Z (in 30 days)
# features.connectors: [jdedwards, sap, snowflake]
# features.apps:       [nomajde, nomasx-1]
```

Exits zero on valid keys, non-zero with the diagnostic on bad / expired / wrong-audience keys.

| Flag | Effect |
|---|---|
| `--public-key <path>` | Override the default public key. Used by OEM partners signing with their own key pair. |
| `--quiet` | Print only `valid` or the error; suppress the human-readable breakdown. |
| `--json` | Dump the JWT payload as JSON. |

### `decode`

Print the JWT payload without verifying the signature. Use only for inspection — never as an authorisation check.

```bash
.venv/bin/liberty-license decode "$LIBERTY_LICENSE_KEY"
# { "iss": "nomana-it", "sub": "customer-acme-corp", ... }
```

---

## Exit codes

Every CLI follows the same convention:

| Code | Meaning |
|---|---|
| `0` | Success. |
| `1` | Invalid input (bad arguments, missing required option). |
| `2` | Resource not found (unknown user, connector, role, etc.). |
| `3` | Validation failure (TOML doesn't parse, license signature invalid, etc.). |
| `4` | Server unreachable (for commands that hit the running framework). |
| `5` | Permission denied (when running against a remote server). |

---

## Tips & best practices

- **Run the CLIs in CI.** `verify-config`, `connectors test` and `license verify` are quick checks worth gating a deploy on.
- **Don't bypass the server for writes.** `liberty-connectors run` is fine for diagnostics; production writes should go through the REST API so they pass auth and audit.
- **Use `--json` for scripting.** Every human-readable output also serialises as JSON — pipe to `jq` for orchestration.
- **Set `LIBERTY_APPS_DIR` in your shell profile.** The CLIs need it the same way the server does — exporting it once saves repeating `--config` everywhere.
- **Keep the CLIs available in production.** A locked-down container that strips them makes incident response harder than the security benefit is worth.

---

## What's next

- [Configuration → Settings UI](../framework/configuration/settings-ui.md) — the in-app equivalent of most CLI operations.
- [REST API reference](./rest-api.md) — every endpoint the CLIs call.
- [Encryption & secrets](../framework/configuration/encryption-secrets.md) — the `liberty-crypto` workflows.
