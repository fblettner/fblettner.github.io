---
title: Framework settings
description: "Every framework-wide setting — app name, default database pool, authentication backend, OIDC, AI provider, master encryption key, license — edited from Settings → Framework. The builder is schema-driven; this page lists every field, what it does and where it shows up."
keywords: [Liberty Framework, settings, framework settings, app, default pool, authentication, OIDC, AI, master key, license, CORS, static directory]
---

# Framework settings

:::info[Deep reference]
This page lists every framework-wide setting on the *Framework* tab. For task-oriented setup of the security side (wire OIDC, install a license key, encrypt secrets), see [Build → Secure](../build/secure/overview.md).
:::

The **framework-wide** settings — those that aren't tied to a single connector, screen or menu — are edited from **Settings → Framework**. The page is a schema-driven form with one section per concern: application identity, default database pool, authentication, AI provider, encryption and license. Saving reloads the affected subsystem.

This page lists every field on the *Framework* tab, what it does and where the effect shows up in the rest of the application.

---

## At a glance

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Framework</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Cancel</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save & reload</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Application</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Liberty</span></div>
      <div style={{opacity: 0.75}}>Default language</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>en ▾</span></div>
      <div style={{opacity: 0.75}}>CORS allowed origins</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>http://localhost:5173</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Default database pool</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>URL</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>sqlite+aiosqlite:///liberty.db</span></div>
      <div style={{opacity: 0.75}}>Dialect</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>sqlite ▾</span></div>
      <div style={{opacity: 0.75}}>Pool size</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>5</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Authentication</div>
    <div style={{display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Backend</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '11px', fontWeight: 600, color: '#4a9eff'}}>Local — TOML ▾</span></div>
      <div style={{opacity: 0.75}}>Access token lifetime</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>15 min</span></div>
      <div style={{opacity: 0.75}}>Refresh token lifetime</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>7 days</span></div>
      <div style={{opacity: 0.75}}>OIDC enabled</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(94,94,94,0.10)', border: '1px solid rgba(255,255,255,0.20)', fontSize: '11px', fontWeight: 600, opacity: 0.7}}>○ Off</span></div>
    </div>
  </div>
</div>

The mockup is collapsed; the *AI*, *Encryption* and *License* sections sit below the same way.

The form is the same shape no matter how the install is run — local dev, container, Kubernetes. The few values that legitimately belong in the environment (the JWT signing key, the master encryption key, the license key, the AI API key) are referenced by name in the form fields and bound at startup; see [Environment variables](./environment-variables.md).

---

## Application

| Field | Effect |
|---|---|
| **Name** | Display name in the header and the page title. Default `Liberty`. |
| **Default language** | Language used when the caller doesn't carry an `X-Liberty-Lang` header and has no per-user preference. Default `en`. |
| **CORS allowed origins** | Origins accepted by the browser's CORS preflight. Add the Vite dev server (`http://localhost:5173`) for hot-reload development, the production frontend origin when serving the SPA from a different host. |
| **Trusted proxies** | Reverse-proxy CIDR ranges that the framework trusts for `X-Forwarded-*` headers. Required behind nginx / Traefik so the framework sees the original client IP. |
| **Static directory** | Path of the built React SPA. Defaults to `frontend/dist`. When the directory doesn't exist, the server runs **API-only** (every `/api/*` route works, `/` returns 404). Surface this when serving the SPA from a CDN. |

---

## Default database pool

The **default pool** owns the database that the framework itself uses — auth tables when *Backend* is `db`, Nomaflow run history, record locks, AI conversations. Every other pool is defined on the *Settings → Pools* tab.

| Field | Effect |
|---|---|
| **URL** | SQLAlchemy async URL. SQLite defaults to a local `liberty.db` file. PostgreSQL: `postgresql+asyncpg://user:pass@host/db`. Oracle thin mode: `oracle+oracledb://user:pass@host:1521/?service_name=PDB1`. Test connectivity with the *Test connection* button. |
| **Dialect** | `sqlite` / `postgresql` / `oracle`. Drives per-dialect SQL fallback in the connector engine. |
| **Pool size** | Max simultaneous connections. Default 5. |
| **Pool recycle** | Seconds before a stale connection is recycled. Default 1800. |
| **Password** | Optional. Click the 🔒 icon to switch the field to *Encrypted* — see [Encryption & secrets](./encryption-secrets.md). |

---

## Authentication

| Field | Effect |
|---|---|
| **Backend** | `Local — TOML` *(default)* / `Local — Database`. Drives where user accounts live. The `Local — TOML` option uses `config/auth.toml` on the host (zero infrastructure). `Local — Database` creates and uses the `ly2_users` / `ly2_roles` / `ly2_permissions` tables on the default pool. |
| **JWT signing key** | Reference to the environment variable holding the HS256 signing secret. Default `${LIBERTY_JWT_SECRET}`. When the env var is unset, the framework generates an ephemeral key per process — every restart invalidates every token. |
| **Access token lifetime** | Lifetime of an access token. Default 15 minutes. |
| **Refresh token lifetime** | Lifetime of a refresh token. Default 7 days. |
| **Argon2 tuning** | Three numeric fields — *Time cost* (default 2), *Memory cost* in KiB (default 65536), *Parallelism* (default 1). Raise on installs with stronger threat models. |

### OIDC sub-section

A toggle at the top of the sub-section enables OIDC SSO; the form below appears only when *OIDC enabled* is on.

| Field | Effect |
|---|---|
| **Issuer URL** | Issuer URL of the IdP. The framework fetches `${issuer}/.well-known/openid-configuration` at startup. |
| **Client ID** | OAuth2 client ID registered with the IdP. |
| **Client secret** | OAuth2 client secret. Always **encrypted** — the 🔒 icon is locked on. |
| **Redirect URI** | The framework's callback URL, e.g. `https://liberty.example.com/auth/oidc/callback`. Must be registered on the IdP side. |
| **Email claim** | JWT claim used as the local user identifier. Default `email`. |
| **Groups claim** | JWT claim used to map IdP groups to Liberty roles. Default `groups`. |
| **Auto-provision** | When on, a Liberty user is created on first OIDC sign-in. When off, the user has to exist already. |

[Authentication](../build/secure/sign-in.md) walks through the complete OIDC flow with IdP-specific notes (Authentik, Keycloak, Azure AD, Okta, Google).

---

## AI

| Field | Effect |
|---|---|
| **Provider** | `Anthropic`. Currently the only supported provider. |
| **API key** | Reference to the env var holding the key. Default `${ANTHROPIC_API_KEY}`. When unset, the assistant is disabled and `/chat` renders a "configure an API key" notice. |
| **Model** | Anthropic model id. Default `claude-sonnet-4-6`. Switch to `claude-opus-4-7` for higher reasoning effort, `claude-haiku-4-5` for cheaper / faster turns. |
| **Max tokens** | Token cap per assistant response. Default 4096. |
| **Tool concurrency** | Max parallel tool calls per assistant turn. Default 4. |

See [AI assistant](../ai-assistant.md) for the chat surface, tool generation contract and per-role gating.

---

## Encryption

| Field | Effect |
|---|---|
| **Master key** | Reference to the env var holding the AES-256-GCM key used to decrypt every `ENC:` field. Default `${LIBERTY_MASTER_KEY}`. Must be 32 bytes, hex- or base64-encoded. Generate with `liberty-crypto genkey`. |
| **Legacy keys** | List of older keys, used for **decryption only** during a rotation. New encryptions always use *Master key*. Click *➕ Add legacy key* to add an entry. |

See [Encryption & secrets](./encryption-secrets.md) for the rotation procedure and the `ENC:` format.

---

## License

| Field | Effect |
|---|---|
| **License key** | Reference to the env var holding the RS256-signed license JWT. Default `${LIBERTY_LICENSE_KEY}`. Drives the feature gates on connectors marked *Licensed*. |
| **Public key path** | Optional override for the bundled public key. Useful when running with a private signing authority. |

The [Settings → License](../build/secure/license-key.md) page surfaces the current status (accepted / rejected / not configured), the customer name, the expiry date and the unlocked feature list.

---

## Save & reload

Every save validates the form against the framework's Pydantic models. Invalid values highlight the field in red and disable the *Save & reload* button.

A successful save:

1. **Persists the change** to disk (file-system detail, never edited by hand).
2. **Re-applies the affected subsystem** — a change to *Default language* triggers a language pack reload; a change to *Access token lifetime* takes effect on the next sign-in; a change to *OIDC enabled* re-runs the OIDC discovery on next sign-in.
3. **Drops a toast** confirming the section reloaded.

A handful of fields require a **full restart**: the *Authentication backend* swap, the *Master key* rotation, the *License key* swap. The form highlights them with a *Restart required* badge and offers a *Restart now* button next to the *Save & reload* control (admin only).

---

## Permissions

The *Framework* tab is gated by `settings:framework`. Reading without writing is also possible — grant `settings:read` + the per-tab permission without `settings:reload` to make the form view-only.

---

## Under the hood

The form's storage is `liberty-next/config/app.toml`. Operators **do not edit this file by hand** in normal operation; the Settings UI is the canonical interface, with the *Raw TOML* tab as a last-resort escape hatch. The file is parsed once at startup and on every *Save & reload* of the Framework tab.

For ops scripts and CI pipelines that need to drive the framework without the UI, the same surface is reachable via the REST endpoints under `/admin/config/framework/*` — see [REST API reference](../../references/rest-api.md#admin-config).

---

## What's next

- [Environment variables](./environment-variables.md) — every `${LIBERTY_*}` reference resolved at startup.
- [Encryption & secrets](./encryption-secrets.md) — the 🔒 toggle and the rotation procedure.
- [Authentication](../build/secure/sign-in.md) — what each backend changes.
- [Hot-reload](./hot-reload.md) — what reloads vs what requires a restart.
