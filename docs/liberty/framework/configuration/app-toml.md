---
title: app.toml
description: "Reference of app.toml, the application settings of Liberty Next — [app], [auth], [oidc], [crypto], [license], [ai], [notify], [jobs], [changesets], [reports] and the file paths — with defaults, and which ones Settings → App edits."
keywords: [Liberty Next, app.toml, settings, auth, oidc, crypto, license, ai, notify, jobs, changesets, reports, defaults, environment variables]
---

# app.toml

`app.toml` holds the application settings. Most of them are edited in **Settings → App** ([App settings](../build/settings-app.md)), which encrypts secrets and applies changes at once; this page lists every key, for reading the file or setting it at deployment.

The file is `config/app.toml` under the server's working directory (or the path in `LIBERTY_APP_CONFIG`). Any value can be written `${VARIABLE}` or `${VARIABLE:-default}` to read it from the environment, and secrets saved from Settings are written `ENC:…` — see [Environment variables](./environment-variables.md) and [Encryption](./encryption-secrets.md).

---

## [app] \{#app\}

| Key | Default | Meaning |
|---|---|---|
| `name` | `Liberty Next` | The application's name. |
| `host`, `port` | `0.0.0.0`, `8000` | Listening address. Restart to apply. |
| `log_level` | `info` | `debug`, `info`, `warning`, `error`, `critical`. Restart to apply. |
| `log_format` | `text` | `json` writes one JSON object per line. File only. |
| `hot_reload` | `false` (`true` in the shipped file) | Apply configuration files as soon as they change. |
| `default_language` | `en` | Labels when a request names no language. |
| `oracle_thick` | `false` | Oracle thick mode for every Oracle pool — see [Connectors](../connectors.md#oracle-thick). Restart to apply. |
| `default_period` | `thisMonth` | The period a dashboard opens on when it names none. |
| `default_page_size` | `50` | The grids' initial page size. |
| `dashboard_cache_seconds` | `60` | How long a reopened dashboard reuses its widgets' results; `0` turns it off. |

---

## [auth] \{#auth\}

| Key | Default | Meaning |
|---|---|---|
| `backend` | `toml` | `toml`: users and roles in `toml_path` (`config/auth.toml`). `db`: in the `ly2_users`, `ly2_roles`, `ly2_user_roles` tables of `pool`. |
| `jwt_secret` | `${LIBERTY_JWT_SECRET}` | Signs the sessions. Empty: a temporary key, lost at restart. |
| `access_token_ttl`, `refresh_token_ttl` | `3600`, `1209600` | Token lifetimes in seconds (1 hour, 14 days). |
| `refresh_reuse_grace` | `60` | Seconds a used refresh token is still accepted. |
| `login_max_failures`, `login_window_seconds` | `10`, `300` | Sign-in throttle; `0` turns it off. |

See [Sign-in](../build/secure/sign-in.md).

---

## [oidc] \{#oidc\}

`enabled`, `discovery_url`, `client_id`, `client_secret`, `scopes` (`openid email profile`), `username_claim` (`preferred_username`), `email_claim`, `name_claim`, `attribute_claims`, `redirect_url`, `frontend_redirect`, `session_secret` (defaults to the JWT secret). See [Sign-in → OIDC](../build/secure/sign-in.md#oidc).

---

## [crypto] and [license] \{#crypto\}

| Key | Default | Meaning |
|---|---|---|
| `[crypto] master_key` | `${LIBERTY_MASTER_KEY}` | Encrypts and decrypts every `ENC:` value. |
| `[license] key` | `${LIBERTY_LICENSE_KEY}` | The licence key, normally pasted in Settings → App. |

---

## [ai] \{#ai\}

| Key | Default | Meaning |
|---|---|---|
| `enabled` | `true` | The assistant. |
| `api_key` | `${ANTHROPIC_API_KEY}` | Empty: the assistant answers that it is not configured. |
| `model`, `max_tokens` | — , `8192` | The model and the answer size. |
| `max_iterations` | `8` | Tool calls per answer, at most. |
| `system_prompt`, `thinking`, `effort` | built-in, `false`, — | Instructions and reasoning options. |
| `request_timeout` | `120` | Seconds. |
| `connector_tools` | `true` | The assistant may list connectors and run their read queries. |
| `api_tool` | `false` | The assistant may call API endpoints. |
| `scaffold_tools` | `false` | The assistant may propose configuration (queries, screens). |
| `allowed_connectors` | `[]` (all) | The connectors the assistant may use. |
| `web_fetch_domains`, `web_fetch_max_uses` | `[]`, `5` | Web pages the assistant may read. |

See [AI assistant](../ai-assistant.md).

---

## [notify] \{#notify\}

`enabled` (`true`), `pool` (`default`), `config_path` (`notifications.toml`), `smtp_host`, `smtp_port` (`587`), `smtp_user`, `smtp_password`, `smtp_from`, `smtp_tls` (`true`, STARTTLS), `smtp_ssl` (`false`, implicit TLS), `smtp_timeout` (`20`), `retention_days` (`90`). See [Notifications](../../nomaflow/notifications.md).

---

## [jobs] \{#jobs\}

`enabled` (`true`), `pool` (`default`), `config_path`, `run_log_max_lines` (`5000`), `files_dir`, `max_upload_mb` (`200`). See [Nomaflow → Administration](../../nomaflow/administration.md#settings).

---

## [changesets] and [reports] \{#changesets\}

| Key | Meaning |
|---|---|
| `[changesets] enabled`, `pool` | Change packages and the pool of their tables. |
| `[changesets] post_apply` | The library of post-apply steps (`id`, `type` = `call_plugin` / `call_api` / `run_query`, `connector`, `target`, `params`, `label`). See [Change packages](../../nomaflow/change-packages.md). |
| `[reports] …` | Custom reports file and the PDF branding (author, colours, cover texts, footer) — the branding is edited in Settings → App. |

---

## File paths \{#paths\}

`[connectors]`, `[menus]`, `[screens]`, `[charts]`, `[actions]`, `[dashboards]`, `[explorer]`, `[theme]` each accept a `config_path`. Leave them unset: they follow `LIBERTY_APPS_DIR`, or `config/` — see [Architecture](../../installation/architecture.md#configuration).
