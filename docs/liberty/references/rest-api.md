---
title: REST API reference
description: "A map of the Liberty Next REST API by domain — health, sign-in, connectors and data, screens, dashboards, menus, reports, notifications, saved views, Nomaflow jobs, change packages, access and configuration — with the access rule of each family. The exact request and response shapes are in the built-in OpenAPI pages."
keywords: [Liberty Next, REST API, OpenAPI, endpoints, auth, sql, screens, dashboards, jobs, changesets, access, admin config, Socket.IO]
---

# REST API reference

This page maps the endpoints by domain. The exact request and response shapes are in the server's own OpenAPI pages: **`/docs`** (Swagger UI), **`/redoc`** and **`/openapi.json`** — generate typed clients from the latter.

---

## Conventions \{#conventions\}

- **Authentication** — `Authorization: Bearer <access token>` on every call, except `/health`, `/ready`, `/info`, `/api/theme`, `POST /auth/login`, `POST /auth/refresh` and the OIDC pair.
- **Access rules** — data endpoints check the permission of what they run (`sql:<connector>:<query>`, `api:<connector>:<endpoint>`), and SQL reads and writes apply the caller's [data scope](../framework/build/secure/roles-and-permissions.md#data-scope). Everything under **`/admin/`** is reserved to superusers.
- **Language** — `X-Liberty-Lang: fr` (else `Accept-Language`) chooses the language of labels in screens, dictionary and menus.
- **Pool** — `X-Liberty-Pool: <pool>` runs a multi-pool connector's queries on another pool of its set.
- **Errors** — a JSON `{"detail": …}` body with a non-2xx status. A database error gives regular users the driver's message and an `error_id`; the statement itself is never echoed to them.
- **Request id** — every response carries `X-Request-ID`; the server log lines of that request carry the same id.

---

## Health \{#health\}

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Liveness: `{"status": "ok", "version"}`. |
| `GET` | `/ready` | Readiness: `200` when the framework database answers, `503` otherwise. |
| `GET` | `/info` | Version, counts and flags; names and details for a signed-in caller. |

See [Health endpoints](../monitoring/health-endpoints.md).

---

## Sign-in and profile \{#auth\}

| Method | Path | Description |
|---|---|---|
| `POST` | `/auth/login` | `{username, password}` → access and refresh tokens. `429` after too many failures. |
| `POST` | `/auth/refresh` | A refresh token → a new pair. The refresh token presented is consumed: keep the new one. |
| `GET` | `/auth/me` | The token's identity: roles, permissions, attributes, data scope. |
| `GET` / `PATCH` | `/auth/profile` | The signed-in user's profile. |
| `POST` | `/auth/change-password` | Change one's own password (local users). |
| `GET` | `/auth/oidc/login`, `/auth/oidc/callback` | OpenID Connect sign-in. |

See [Sign-in](../framework/build/secure/sign-in.md).

---

## Connectors and data \{#data\}

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/connectors`, `/api/connectors/{connector}` | The connectors and their queries / endpoints. |
| `GET` | `/api/sql/{connector}/{query}` | Run a read query; query-string parameters bind to it, with filters, paging and sorting. |
| `POST` | `/api/sql/{connector}/{query}` | Run a write query with a JSON body. |
| `GET` | `/api/sql/{connector}/_schemas`, `/_schema` | Schemas and tables of the connector's database. |
| `POST` | `/api/sql/{connector}/_import` | Import rows (the grid's Excel import). |
| `POST` | `/api/http/{connector}/{endpoint}` | Call an API connector's endpoint. |
| `GET` | `/api/actions`, `/api/actions/{action_id}` | Shared actions. |
| `GET` / `POST` | `/api/plugins/callables`, `/api/plugins/run` | Plugin functions callable from screens. |

---

## Screens, dashboards, menus \{#screens\}

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/screens`, `/api/screens/{app}`, `/api/screens/{app}/{screen_id}` | Screen definitions, localised. |
| `POST` | `/api/screens/{app}/{screen_id}/export` | Excel export of the screen's current view. |
| `GET` | `/api/dashboards`, `/api/dashboards/{dashboard_id}` | Dashboards and their widgets. |
| `GET` | `/api/charts`, `/api/charts/{chart_id}` | Saved charts. |
| `GET` | `/api/menus`, `/api/menus/{app}` | Menu trees, pruned to what the caller may open. |
| `GET` | `/api/theme` | Branding and UI defaults (public). |
| `GET` / `PUT` / `DELETE` | `/api/views/{kind}` | Saved grid views. |

---

## Reports, notifications, licence \{#other\}

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/reports`, `/api/reports/{scope}/{report_id}` | Reports and their parameters. |
| `POST` | `/api/reports/{scope}/{report_id}/run` | Run a report (PDF or Markdown). |
| `GET` | `/api/notifications` (`?unread=1`), `/api/notifications/unread_count` | The caller's notifications. |
| `POST` | `/api/notifications/read` | Mark notifications read (`{ids}`, or all). |
| `POST` | `/api/notify/fire` | Fire an action-kind notification rule (used by the `send_notification` screen action). |
| `GET` | `/api/license` | Licence mode, customer, plan, apps, expiry. |

---

## AI assistant \{#ai\}

| Method | Path | Description |
|---|---|---|
| `GET` | `/ai/tools` | The assistant's tool catalogue. |
| `POST` | `/ai/chat` | Send the conversation (`{messages, model?}`); the answer streams back. Requires `ai:chat`. |

---

## Administration (superusers) \{#admin-config\}

| Family | Paths | Description |
|---|---|---|
| Access | `/admin/access/users`, `/admin/access/users/{username}` (+ `/password`), `/admin/access/roles`, `/admin/access/roles/{name}` | Users (create, update, attributes, password) and roles (permissions, data scope). |
| Configuration | `/admin/config/{section}/parsed` (`GET` / `PUT`) for `connectors`, `dictionary`, `menus`, `screens`, `charts`, `dashboards`, `actions`, `notifications`, `theme`, `jobs`, `app`, `reports`, `explorer`; `/admin/config/pools` | Read and save a configuration file as JSON; a save is validated, then applied. |
| Configuration tools | `/admin/config/connectors/{connector}/test-sql`, `/admin/config/api/test`, `/admin/config/rename`, `/admin/config/move`, `/admin/config/clone-app`, `/admin/config/delete-app`, `/admin/config/integrity`, `/admin/config/schema` | Tests, cross-file renames and moves, integrity check, JSON schemas. |
| History | `/admin/config/versions…`, `/admin/config/screen-versions…`, `/admin/upgrades`, `/admin/upgrades/{id}/report`, `/admin/release-notes` | Configuration versions, upgrade history and reports, release notes. |
| Reload | `POST /admin/reload` | Re-read every configuration file. |
| Packages | `/admin/find-dependencies`, `/admin/build-package`, `/admin/import-package`, `/admin/clone-with-deps`, `/admin/delete-with-deps` | Packages and dependency-aware clone and delete. |
| Change packages | `/admin/changesets…` | See [Change packages](../nomaflow/change-packages.md#api-contract). |
| Notifications | `POST /admin/notify/test` | Send a test through the channels. |

---

## Nomaflow jobs (superusers) \{#jobs\}

| Method | Path | Description |
|---|---|---|
| `GET` | `/admin/jobs` | Jobs with their state, next and last run. |
| `POST` | `/admin/jobs/{job_id}/run` | Run now. Body (optional): `{params, op_kwargs, step_enabled, log_level}` → `{job_id, run_id, triggered_by, status: "queued"}`. |
| `POST` | `/admin/jobs/{job_id}/upload` | Upload a file for a `file_load` step (multipart `file`). |
| `GET` | `/admin/jobs/runs/{run_id}` | Run detail: steps, log, overrides. |
| `POST` | `/admin/jobs/runs/{run_id}/cancel` | Cancel a run in progress. |
| `GET` | `/admin/jobs/runs/{run_id}/files/{name}` | Download a run's file (rejected rows). |
| `GET` | `/admin/jobs/cron-preview?schedule=…&timezone=…&count=5` | The next runs of a cron. |
| `GET` | `/admin/jobs/callables` | Python functions available to `python` steps. |
| `GET` / `POST` | `/admin/jobs/retention`, `/admin/jobs/retention/sweep` | Retention status; run a clean-up now. |
| `GET` / `POST` | `/admin/jobs/missed`, `/admin/jobs/missed/check` | Missed-schedule status; run a check now. |

Jobs themselves are edited through `/admin/config/jobs/parsed`.

---

## Socket.IO \{#socketio\}

`/socket.io` carries the live updates, authenticated with the same token in the handshake: run and step state changes of Nomaflow (`job_run.state`, `step_run.state`), new notifications for the bell, record locks, and the Monitoring page's snapshots and log tail.
