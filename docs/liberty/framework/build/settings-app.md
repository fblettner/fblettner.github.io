---
title: App settings
description: "Settings → App is the master editor for app.toml — four collapsible sections (App, License, AI Assistant, OpenID Connect) covering host/port, the license key, the AI assistant configuration and OIDC SSO. Sensitive fields (license.key, ai.api_key, oidc.client_secret) round-trip masked and are encrypted at rest with the install master key. Most changes take effect live — only host / port / log_level need a server restart."
keywords: [Liberty Framework, settings, app.toml, AppBuilder, license key, Anthropic API key, OIDC, SSO, masked secret, ENC, AES-256-GCM, master key, hot reload, requires_restart, GET PUT /admin/config/app/parsed]
---

# App settings

The **Settings → App** screen is the master editor for `config/app.toml`. It surfaces the curated subset of the file that an operator legitimately edits at runtime — application defaults, the license key, the AI assistant configuration, and OIDC single sign-on — leaving the boot-time-only sections (`[auth] backend`, `[pools.*]` connection strings, `[connectors] config_path`) on disk untouched.

The page is also the canonical place to store **three secrets** that previously lived as `${LIBERTY_LICENSE_KEY}`, `${ANTHROPIC_API_KEY}` and `${LIBERTY_OIDC_CLIENT_SECRET}` env vars: the license key, the Anthropic API key and the OIDC client secret. Saving them from the UI **encrypts them at rest** with the install master key (`LIBERTY_MASTER_KEY`); the on-disk value carries the `ENC:` prefix. Env-var references still work (the framework reads them at startup if set), but the UI editor is the recommended path — secrets stay sealed to the host.

---

## At a glance

The page is a single scrollable column of **four collapsible sections**. The first time you open it, only the App section is expanded; the others remember their state via `localStorage`.

| Section | What it edits | Live? |
|---|---|---|
| **App** | `name`, bind `host`, `port`, `log_level`, `hot_reload`, `default_language` | host / port / log_level need a server restart; the rest live. |
| **License** | `[license] key` — the vendor-signed RS256 JWT that unlocks the licensed connectors (Nomasx-1, Nomajde, NomaUBL…). | Live. The connector registry is rebuilt on save; licensed connectors that were previously filtered out reappear immediately. |
| **AI Assistant** | `[ai]` — `enabled`, `model`, `api_key`, tool exposure (`connector_tools` / `api_tool` / `scaffold_tools`), per-call limits (`max_tokens`, `max_iterations`, `request_timeout`), `system_prompt`, `effort`, `thinking`, allowed connectors, server-side web-fetch domain allowlist. | Live. The assistant is rebuilt; the next chat turn uses the new config. |
| **OpenID Connect (SSO)** | `[oidc]` — `enabled`, `discovery_url`, `client_id`, `client_secret`, scopes, claim mappings, optional proxy redirect overrides. | Live. The OIDC handler is rebuilt; sign-in flows use the new config on next request. |

A header badge on each section summarises the current state at a glance: `:8000 · info` on App, `configured` / `not set — restricted mode` on License, `claude-opus-4-8 · no API key` on AI, `https://keycloak.example/…` on OIDC.

The save button writes back to `config/app.toml` via `PUT /admin/config/app/parsed`. The toolbar shows a *Discard* button while the form is dirty.

---

## Masked secrets — the reveal-to-edit pattern

Three fields are sensitive — `license.key`, `ai.api_key`, `oidc.client_secret`. They follow a reveal-to-edit pattern so the operator never sees the stored ciphertext and never accidentally overwrites a configured value while editing other fields.

| State | UI |
|---|---|
| **Not configured** | The row shows `not configured` in italic + a *Set* button. |
| **Configured** | The row shows `••••••••••••` + a *Replace* button. |
| **Editing** | The button click reveals a plain-text input pre-filled with empty (the stored value never leaves the server). Type the new secret. |

While the field is in masked state, the wire payload sends `""`. The backend treats `""` as **leave unchanged** — the on-disk encrypted value is preserved. Once the operator clicks *Set* / *Replace*, the field accepts new input; on save the new plaintext is encrypted with the install master key and replaces the previous value.

To **clear** a configured secret, click *Replace*, leave the input empty, save. The on-disk value becomes `""` and the connector reports unconfigured.

---

## Section 1 — App

The base application settings — what shows in the title bar, where the server binds, how verbose its logs are.

| Field | What |
|---|---|
| **App name** | Shown in the SPA's header and the OpenAPI title. Free text. |
| **Bind host** | The interface uvicorn binds to. `0.0.0.0` (the default in the container) accepts every interface; `127.0.0.1` is loopback-only. |
| **Port** | uvicorn listen port. Default `8000`. The full Docker layout doesn't change this — Traefik fronts liberty-next on `:80`/`:443`. |
| **Log level** | `error`, `warning`, `info`, `debug`, `trace`. The choices come from the backend; the dropdown is populated from `/admin/config/app/parsed`'s `choices.log_levels`. |
| **Default language** | `en`, `fr`, … — fallback when a request has no `Accept-Language` or the user has no preference set. Two-letter code. |
| **Hot-reload config TOML files on change** | When on, the framework watches `connectors.toml`, `dictionary.toml`, `menus.toml`, etc. and reloads on file change. Useful in dev; in production, leave it off and use *Settings → Reload* or `POST /admin/reload` after intentional edits. |

`host`, `port` and `log_level` are read **once at uvicorn startup** — saving from the UI updates the file but the running process keeps its old values until restart. The PUT response carries `requires_restart: true` for those changes; the UI shows a yellow banner: *Saved. Restart the server to apply the new settings.* The other App fields apply live.

---

## Section 2 — License

The vendor-signed RS256 JWT that unlocks the licensed connectors. Without it the framework runs in **restricted mode** — licensed connectors aren't loaded; the rest of the framework works normally.

| Field | What |
|---|---|
| **License key** | The full JWT (`eyJhbGciOiJSUzI1NiI…`). Stored in `[license] key` in `app.toml`, encrypted at rest. The masked-secret reveal-to-edit pattern applies. |

On save, the framework:

1. Encrypts the plaintext with the install master key (AES-256-GCM, `ENC:` prefix).
2. Writes only the `[license]` table back to `app.toml` (other tables preserved via `tomlkit` round-trip).
3. Reloads the settings; verifies the new license via the bundled vendor public key.
4. Rebuilds the connector registry. Licensed connectors that were filtered out at startup **reappear immediately**; those the new key no longer covers are dropped.
5. Rebinds the auth backend (when `auth.backend = db`, the auth store sits in `connectors.pools`).

No restart, no full reload, no menu refresh — the next request sees the new license. See [License key](./secure/license-key.md) for the verification rules, expiry handling and the `liberty-license verify` CLI.

---

## Section 3 — AI Assistant

Every knob on the in-app AI assistant — model, key, tool exposure, prompt, per-call limits, server-side web fetch.

### Identity and key

| Field | What |
|---|---|
| **Enabled** | Master toggle. When off, the `/chat` route returns 404 and the AI bubble disappears from the SPA. |
| **Anthropic API key** | `sk-ant-…`. Encrypted at rest. The masked-secret pattern applies. |
| **Model** | The Anthropic model id. The dropdown lists Opus 4.8 (recommended, top of the list), Opus 4.7 / 4.6, Sonnet 4.6 / 4.5, Haiku 4.5. A custom id pinned in `app.toml` (e.g. an experimental release) is shown at the top of the dropdown with a `(custom)` suffix so it stays visible. |
| **Effort** | Per-call thinking effort — `(default)` / `low` / `medium` / `high`. Higher means more thinking tokens, slower + more expensive responses. |

### Per-call limits

| Field | Default | What |
|---|---|---|
| **Max tokens** | 8192 | The token budget per assistant response. Bump for long answers; lower to cap cost. |
| **Max tool iterations** | 8 | How many tool-call rounds the assistant may run within a single user turn. Raises the ceiling on multi-step queries; lower it to fail fast. |
| **Request timeout (s)** | 120 | How long to wait for the model before giving up on the turn. |
| **Adaptive thinking** | off | When on, the assistant uses Anthropic's extended thinking — slower but better at multi-step reasoning. Combine with a non-default *Effort*. |
| **System prompt** | (empty → built-in default) | Override the framework's bundled system prompt. Empty restores the default. |

### Tool exposure

The assistant has three families of tools; toggle each on / off independently:

| Tool family | What it lets the assistant do |
|---|---|
| **Connector tools** (`list_connectors`, `sql_query`, etc.) | Read-only — list pools, run SELECTs against the data the operator is allowed to read. The bedrock of "ask Liberty about your data". |
| **API tool** (`api_call`) | Call REST endpoints defined under `[connectors.<name>.endpoints]`. Endpoints may have side effects — enable only when the configured endpoints are safe for AI invocation. |
| **Scaffold tools** | Generate proposals (new queries / dictionary entries / screens / menu items) that the operator reviews and applies via *Apply* in the chat. **Propose-only** — the assistant never writes to disk directly. |

### Allowed connectors

By default, the assistant can introspect every connector. The **Allowed connectors** chip-picker restricts the visible set — useful when the assistant should only see customer-facing pools and not the framework's own audit DB.

### Web fetch

Anthropic-hosted server-side web fetch — the assistant can pull a URL into the conversation, summarise, quote. **Disabled until at least one domain is allowed**:

| Field | What |
|---|---|
| **Allowed domains** | Chip list — `example.com`, `docs.nomana-it.fr`. Subdomains match. Empty = web fetch disabled. |
| **Max fetches per turn** | Default 5. Caps how many URLs the assistant may pull in a single turn — limits cost and prevents runaway loops. |

### What happens on save

The framework rebuilds the assistant from scratch — new model, new tools, new key. The previous assistant instance closes its HTTP client cleanly. The next chat turn lands on the new instance. **No restart needed.**

---

## Section 4 — OpenID Connect (SSO)

Wire any OIDC-compliant provider (Keycloak, Okta, Auth0, Microsoft Entra / Azure AD, Google Workspace …). The framework runs the standard authorization-code flow against the provider's discovery URL and minted JWTs are stored against the Liberty user record.

| Field | What |
|---|---|
| **Enabled** | Master toggle. When off, the SPA's sign-in page hides the SSO button; the local-user path keeps working. |
| **Discovery URL** | The provider's `.well-known/openid-configuration` URL. Liberty pulls authorization / token / jwks endpoints from there. |
| **Client ID** | The client ID the provider issued for this Liberty install. |
| **Client secret** | The matching secret. Encrypted at rest (masked-secret pattern). |
| **Scopes** | Space-separated. Default `openid email profile`. |
| **Username claim** | Which ID-token claim becomes the Liberty username. Default `preferred_username`. |
| **Email claim** | Default `email`. |
| **Name claim** | Default `name`. |
| **Redirect URL override** | When Liberty sits behind a reverse proxy, the auto-detected redirect URL can be wrong (uses the internal host). Override here. |
| **Frontend redirect** | For SPA-only flows where JWTs land in the URL fragment. Defaults to the same origin. |

### Provider-side registration

The OIDC provider needs to know Liberty's callback URL. Register:

```text
https://<your-liberty-host>/auth/oidc/callback
```

Pair the Liberty UI's *Redirect URL override* with the registered URL when there's a reverse proxy in front (Traefik, nginx, etc.) — the auto-detected URL would use the internal hostname otherwise.

### Live vs restart

The OIDC handler is rebuilt on save. The next sign-in attempt uses the new config — **no restart**.

A subtle implication: an operator can flip OIDC on / off and rotate the client secret without booting users out. Active sessions keep their JWTs (signed by the LIBERTY_JWT_SECRET, independent of OIDC) until they expire.

See [Sign-in](./secure/sign-in.md) for the full backend matrix (local TOML / DB) and the SSO flow.

---

## What's NOT on this page

Not every key in `app.toml` lives in the Settings → App editor. Some are intentionally out of scope:

| Section / key | Why off-scope | Where to edit |
|---|---|---|
| `[auth] backend` | Backend swap (TOML ↔ DB) needs a coordinated migration of the user store — not safe to flip from a single save. | Edit `app.toml` by hand + restart. See [Sign-in](./secure/sign-in.md). |
| `[crypto] master_key` | The framework reads the master key once at startup. Rotating it requires re-encrypting every `ENC:` value on disk — operator-only ritual. | `LIBERTY_MASTER_KEY` env var or `[crypto] master_key` in `app.toml`. See [Encrypted secrets](./secure/encrypted-secrets.md). |
| `[pools.*]` connection strings | DB connection edits go through *Settings → Connectors* (with the at-rest encryption). | Settings → Connectors. |
| `config_path` / `static_dir` / `dictionary_path` | Operators don't relocate config files from the UI — it would break boot. | Edit `app.toml` directly. |
| `[license]` fields other than `key` | Reserved for future expansion (issuer override, custom verification key). Out of scope today. | Edit `app.toml` directly. |
| `LIBERTY_JWT_SECRET` | The JWT signing key — rotating it forces every user to re-sign-in. Operator decision, not UI. | Env var only. |

The PUT endpoint **never reads or writes** these — saves are surgical, touching only the four edited tables.

---

## Encryption at rest

The three sensitive fields land on disk as:

```toml title="config/app.toml after a UI save"
[license]
key = "ENC:eYWBcD…7q=="

[ai]
api_key = "ENC:Mq6vNg…4r=="

[oidc]
client_secret = "ENC:Aa9KrH…2z=="
```

| Detail | Value |
|---|---|
| Algorithm | AES-256-GCM with a per-value random nonce. |
| Key source | The install master key (`LIBERTY_MASTER_KEY` env var or `[crypto] master_key` in `app.toml`). |
| Prefix | `ENC:` is the framework's sentinel — the decryption path recognises it; plaintext values are read as-is. |
| Idempotent | Re-encrypting an already-encrypted value is a no-op; saving the form when nothing changed leaves the file byte-identical. |

The same `ENC:` mechanism encrypts pool passwords, API connector secrets and any other declared sensitive field — covered in [Encrypted secrets](./secure/encrypted-secrets.md).

### Env-var fallback

For each of the three fields, the framework still resolves a `${VAR}` reference at startup. So `license.key = "${LIBERTY_LICENSE_KEY}"` works exactly like before — the env var wins, the UI shows the field as "configured" (because the resolved value is non-empty) and the *Edit* path is disabled (the UI editor never writes to env-resolved values).

Two practical implications:

1. If your `app.toml` carries `key = "${LIBERTY_LICENSE_KEY}"` from an older install, the new UI is **read-only** for that field. Either delete the reference (the UI then writes the value) or keep editing via the env var.
2. New installs from `install.sh` no longer write any of these env vars to `.env` — the canonical path is the UI editor.

---

## API contract

| Endpoint | Method | What |
|---|---|---|
| `/admin/config/app/parsed` | `GET` | Returns the four sections + the `choices` (log levels, effort levels, available connectors, model list). Sensitive fields are masked: `key: ""` + `key_set: true`. Superuser-only. |
| `/admin/config/app/parsed` | `PUT` | Validates against the Pydantic models, encrypts sensitive fields with the master key, rewrites only the touched tables in `app.toml` (tomlkit round-trip preserves comments + `${VAR}` references on untouched keys). Returns `{saved: true, path: "…", requires_restart: bool}`. Superuser-only. |

Headless usage:

```bash title="Fetch the current config (sensitive fields masked)"
curl -X GET -H "Authorization: Bearer <superuser-token>" \
     https://<liberty-host>/admin/config/app/parsed | jq
```

```bash title="Rotate the Anthropic key without touching anything else"
curl -X PUT -H "Authorization: Bearer <superuser-token>" \
     -H "Content-Type: application/json" \
     -d '{"app": {...}, "ai": {..., "api_key": "sk-ant-new"}, "license": {"key": ""}, "oidc": {...}}' \
     https://<liberty-host>/admin/config/app/parsed
```

Sending `license.key: ""` (or `oidc.client_secret: ""`, etc.) means **leave unchanged**. To explicitly clear a field, the UI sends the empty string with `editing: true` — equivalent in the API to passing the empty string after a previous GET; the backend can't distinguish "didn't touch" from "explicitly cleared" through the API alone, so the UI tracks `editingSecret` state to disambiguate. From a script, pass `null` to clear (the backend's encryption path skips both `""` and `null` for the preserve-unchanged semantics; use a dedicated `DELETE` if you genuinely need to clear via the API — not yet wired).

---

## When changes don't take effect

The PUT endpoint applies most changes live, but a few cases land on disk **and** need a manual nudge:

| Symptom | Cause | Fix |
|---|---|---|
| Saved a new license — licensed connectors still missing. | The license is valid but a connector pool failed to (re)open. | Check the framework logs — the `connector registry rebuild` line carries the per-connector outcome. Fix the pool (DB unreachable, wrong credentials, etc.) then save again. |
| New OIDC discovery URL — sign-in still uses the old provider. | The provider's discovery cache is stale (HTTP caching). | The framework re-fetches discovery on rebuild; if it's still wrong, a 5-min wait or a server restart clears it. |
| Toggled hot_reload on — TOML file edits still don't reload. | hot_reload is read at startup. The file watch is set up once. | Restart the server. The PUT returns `requires_restart: true` for changes to `app.host`, `app.port` or `app.log_level`; hot_reload is a similar boot-time toggle. |
| AI assistant ignores the new system prompt. | The current chat session keeps a snapshot of the old prompt. | Start a new chat (or refresh the SPA). New turns use the new prompt. |
| License key save returns 500 with `cannot encrypt`. | `LIBERTY_MASTER_KEY` is unset or has changed since the file was last written. | Re-set the env var; if it was rotated, every `ENC:` value on disk becomes unreadable — restore from backup or re-enter each secret. |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Edited a masked field by typing in it without clicking *Replace* first. | Save succeeds but the stored value is unchanged. | Click *Replace* (the input is read-only until you do). |
| Cleared a license to "no license" by accident — operator confusion. | Licensed connectors vanish, screens 404. | Re-enter the key. Active user sessions are unaffected. |
| Edited `app.host` from `0.0.0.0` to `127.0.0.1` in a container install. | After restart, Liberty is unreachable from outside the container. | The host must accept external connections inside a container — keep `0.0.0.0`. |
| Pasted an OIDC `client_secret` with a trailing newline. | Sign-in fails with `invalid_client`. | Re-edit, retype without the trailing whitespace. |
| Bumped `log_level` to `trace` in production. | Disk fills with verbose logs. | Set back to `info`. The trace-level entries already on disk stay there until rotation. |
| Edited a value via `${ENV_VAR}` reference, then re-saved from UI. | UI save errored with `field is env-bound — edit the env var directly`. | Delete the reference from `app.toml` first if you want the UI to manage the value; otherwise edit the env var. |

---

## What's next

- [License key](./secure/license-key.md) — what the license gates, how `liberty-license verify` works, expiry handling.
- [Sign-in](./secure/sign-in.md) — the two identity backends + the OIDC flow in detail.
- [Encrypted secrets](./secure/encrypted-secrets.md) — the `ENC:` mechanism, key rotation, what to back up.
- [Packages](./packages.md) — operators don't promote `app.toml` between installs through the package screen (it's per-host); use it for the screens / menus / dashboards the editor itself uses.
