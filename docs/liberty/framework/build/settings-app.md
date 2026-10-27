---
title: App settings
description: "Settings → App in Liberty Next: the six sections — App (name, address, logs, language, UI defaults, hot reload, Oracle thick mode), License, AI Assistant, Notifications (email), OpenID Connect (SSO), PDF branding — what each field does, which secrets are encrypted, and what needs a restart."
keywords: [Liberty Next, Settings App, license, AI assistant, notifications, SMTP, OpenID Connect, SSO, PDF branding, default period, page size, Oracle thick]
---

# App settings

**Settings → App** holds the application settings. Each section folds; its header shows a summary (*configured*, *not set — restricted mode*, *no API key*, *disabled*…). **Save** validates and applies the whole page at once. The editor is in English.

Secret fields — the licence key, the Anthropic API key, the SMTP password, the OIDC client secret — are masked inputs with an eye; they are encrypted with the master key when saved ([Encryption](../configuration/encryption-secrets.md)).

---

## App \{#app\}

| Field | Notes |
|---|---|
| **App name** | The application's name. |
| **Bind host**, **Port** | Listening address and port. **Restart needed.** |
| **Log level** | `debug`, `info`, `warning`, `error`, `critical`. **Restart needed.** |
| **Default language** | Labels when a request names no language. |
| **Default period (dashboards)** | The preset a dashboard opens on when it names none — see [Dashboards](../dashboards.md#period). |
| **Grid page size** | The grids' initial page size (10 to 10 000, default 50). A saved view's own size wins. |
| **Dashboard cache (seconds, 0 = none)** | How long a reopened dashboard reuses its widgets' results (default 60). |
| **Hot-reload config TOML files on change** | Apply configuration files as soon as they change — see [Hot reload](../configuration/hot-reload.md). |
| **Oracle thick mode (…)** | Oracle Instant Client for every Oracle pool — needed for Native Network Encryption and LOBs over a database link. Takes effect after a restart. See [Connectors](../connectors.md#oracle-thick). |

When a saved change needs a restart, the page says *Saved. Restart the server to apply the new settings.*

---

## License \{#license\}

**License key**: paste the key delivered by Nomana-IT. The licensed connectors load at once, without a restart. See [Licence key](./secure/license-key.md).

---

## AI Assistant \{#ai\}

| Field | Notes |
|---|---|
| **Enabled** | The assistant answers; users need the `ai:chat` permission. |
| **Anthropic API key** | Without it, the assistant says it is not configured. |
| **Model**, **Effort**, **Max tokens**, **Adaptive thinking** | The model and how much it reasons and writes. |
| **Max tool iterations** | Tool calls per answer, at most (default 8). |
| **Request timeout (s)** | Default 120. |
| **System prompt** | Empty: the built-in instructions. |
| **Connector tools** | The assistant may list connectors and run their **read** queries. |
| **API tool** | The assistant may call API endpoints — off by default, since an endpoint may change data. |
| **Scaffold tools** | The assistant may propose queries, dictionary entries, screens and menu items; the user applies the proposal. |
| **Allowed connectors** | The connectors the assistant may use; empty means all. |
| **Allowed domains**, **Max fetches per turn** | Web pages the assistant may read; no domain means no web access. |

See [AI assistant](../ai-assistant.md).

---

## Notifications (email) \{#notifications\}

**Notifications enabled**, then the **Server** (SMTP host, Port, Encryption — STARTTLS, implicit TLS or none —, Timeout), the **Account** (User, Password) and **Sending** (From address). See [Notifications](../../nomaflow/notifications.md#smtp).

---

## OpenID Connect (SSO) \{#section-4--openid-connect-sso\}

| Field | Notes |
|---|---|
| **Enabled** | Shows the OIDC button on the sign-in page. |
| **Discovery URL** | The provider's `.well-known/openid-configuration`. |
| **Client ID**, **Client secret**, **Scopes** | As registered at the provider (`openid email profile` by default). |
| **Username claim**, **Email claim**, **Name claim** | Which ID-token claims fill the user (`preferred_username`, `email`, `name`). |
| **Redirect URL override (proxy)**, **Frontend redirect** | Only behind a proxy that rewrites the host, or for a front-end that handles the tokens itself. |

Register `https://<host>/auth/oidc/callback` as redirect URI at the provider. See [Sign-in](./secure/sign-in.md#oidc).

---

## PDF branding \{#branding\}

The cover and page settings of the PDF reports: author, primary colours, cover texts, footer. Empty fields keep the framework's defaults.

---

## Not on this page \{#elsewhere\}

| Setting | Where |
|---|---|
| Pools and their passwords | Settings → Pools. |
| Users and roles | Settings → Access. |
| The master key and the JWT secret | The environment — see [Environment variables](../configuration/environment-variables.md). |
