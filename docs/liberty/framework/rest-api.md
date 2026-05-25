---
title: REST API reference
description: "Every REST endpoint the framework exposes — grouped by domain: auth, connectors, screens, dashboards, menus, jobs, ai, admin config, healthcheck. URL, method, required permission, request body and response shape."
keywords: [Liberty Framework, REST API, /api, /admin, /auth, OpenAPI, endpoints, JWT, /healthz, /docs]
---

# REST API reference

Every concept in the framework — sign in, run a query, fetch a screen, trigger a job, talk to the assistant — is reachable through the REST surface. The frontend uses the same endpoints external integrations would, and the OpenAPI document at `/docs` (live, generated from the FastAPI route signatures) is browsable as a developer reference.

This page is a domain-by-domain map of the endpoints, with the required permission, the request shape and the response shape for each. The interactive variant is at `http://${HOST}:${PORT}/docs` — the framework's bundled Swagger UI is the canonical reference for request / response schemas.

---

## Conventions

- **Base path** — the framework serves the API at the **root of the bound origin**: `https://liberty.example.com/api/...` and `https://liberty.example.com/admin/...`.
- **Authentication** — every endpoint requires a `Bearer` token in the `Authorization` header, except `POST /auth/login`, `POST /auth/refresh`, the OIDC pair and `GET /api/healthz`.
- **Content type** — JSON in / JSON out unless stated. Errors carry a `{ "detail": "..." }` body with a non-2xx status.
- **Language** — `X-Liberty-Lang: fr` overrides the response's labels for endpoints that include them (screens, dictionary, menus, errors).
- **Permission codes** are the same ones documented under [Roles & permissions](./auth/roles-permissions.md). `*` is wildcard; `sql:billing:*` matches any query of the `billing` connector.

---

## Health

| Method | Path | Permission | Response |
|---|---|---|---|
| `GET` | `/api/healthz` | none (public) | `{ "ok": true, "version": "0.42.0" }` |

Useful for liveness probes. Doesn't touch the database.

---

## Auth

| Method | Path | Permission | Body | Response |
|---|---|---|---|---|
| `POST` | `/auth/login` | public | `{ "username", "password" }` | `{ "access_token", "refresh_token", "token_type": "Bearer", "expires_in": 900 }` |
| `POST` | `/auth/refresh` | public (cookie / body) | `{ "refresh_token" }` | Same as `/auth/login`. |
| `POST` | `/auth/logout` | authenticated | — | `{ "ok": true }`. Invalidates the refresh token. |
| `GET` | `/auth/me` | authenticated | — | `{ "username", "display_name", "roles", "permissions": [...] }`. |
| `GET` | `/auth/oidc/login` | public | — | 302 to the IdP. |
| `GET` | `/auth/oidc/callback` | public | query | 302 to `/`. Sets the local session. |

See [Authentication](./auth/authentication.md) for the OIDC flow.

---

## Connectors & data

### SQL connectors

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/connectors` | `connectors:read` | List every connector with type + status. |
| `GET` | `/api/connectors/{name}` | `connectors:read` | Connector definition + discovered schema. |
| `POST` | `/api/sql/{pool}/_schema` | `connectors:read` | Introspect the schema of one pool (table list, column list). |
| `GET` | `/api/sql/{connector}/{query}` | `sql:{connector}:{query}` | Execute a read query. Query params bind to the connector's params. |
| `POST` | `/api/sql/{connector}/{query}` | same | Same as GET but with a JSON body for complex param maps. |
| `POST` | `/api/sql/{connector}/{query}:write` | `sql:{connector}:{query}:write` | Execute a write query. Body is the param map. |

### HTTP / API connectors

| Method | Path | Permission | Description |
|---|---|---|---|
| `POST` | `/api/http/{connector}/{endpoint}` | `api:{connector}:{endpoint}` | Call a named endpoint. Body carries the param map. |

### Excel export

| Method | Path | Permission | Description |
|---|---|---|---|
| `POST` | `/api/screens/{app}/{screen_id}/export` | `screen:{app}:{id}` | Export the screen's current view as XLSX. Body accepts the active filters. Response is `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`. |

---

## Screens

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/screens` | `screens:read` | List every screen across every app. |
| `GET` | `/api/screens/{app}` | `screens:read` | Screens for one app. |
| `GET` | `/api/screens/{app}/{screen_id}` | `screen:{app}:{id}` | Screen definition + grid columns + dialog fields. |
| `POST` | `/api/screens/{app}/{screen_id}/lock` | `screen:{app}:{id}` | Acquire a record lock — `{ "key": {...} }`. |
| `DELETE` | `/api/screens/{app}/{screen_id}/lock` | same | Release the record lock. |

---

## Dashboards & charts

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/dashboards` | `dashboards:read` | List every dashboard. |
| `GET` | `/api/dashboards/{id}` | `dashboard:{id}` | Dashboard layout + per-panel chart references. |
| `GET` | `/api/charts` | `charts:read` | List every chart. |
| `GET` | `/api/charts/{id}` | `chart:{id}` | Chart definition + bound data (when called with `?include_data=true`). |
| `POST` | `/api/charts/{id}/data` | `chart:{id}` | Refresh a chart's data with a parameter map. |

---

## Menus

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/menus` | authenticated | Every menu tree the caller can see, pruned per permission. |
| `GET` | `/api/menus/{app}` | authenticated | One app's menu tree. |

---

## Dictionary

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/dictionary` | authenticated | Every column, lookup and label, localised per `X-Liberty-Lang`. |
| `GET` | `/api/dictionary/lookups/{name}` | authenticated | A single lookup's value set. |

---

## i18n

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/i18n/{lang}` | authenticated | Bundled language pack for `lang`. Includes common + per-app overrides. |
| `GET` | `/api/i18n/_revisions` | authenticated | The revision string of each loaded pack. The frontend uses it as a cache key. |

---

## Jobs (Nomaflow) \{#jobs\}

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/admin/jobs` | `jobs:read` | Job catalog + last run status per job. |
| `GET` | `/admin/jobs/{name}` | `job:{name}` | One job's definition + last 50 runs. |
| `POST` | `/admin/jobs/{name}/run` | `job:{name}` | Trigger a manual run. Body accepts `params` overrides. Returns `{ "run_id" }`. |
| `GET` | `/admin/jobs/runs` | `jobs:read` | List runs across every job — filterable by `job`, `status`, `from`, `to`. |
| `GET` | `/admin/jobs/runs/{run_id}` | `job:{name}` | Full run detail with steps + the latest 1000 log lines. |
| `POST` | `/admin/jobs/runs/{run_id}/abort` | `job:{name}` | Abort an in-flight run. |
| `POST` | `/admin/jobs/runs/{run_id}/replay` | `job:{name}` | Re-run with the same params. |
| `GET` | `/admin/jobs/runs/{run_id}/logs` | `job:{name}` | Stream the log tail. `?follow=true` upgrades to Socket.IO. |
| `GET` | `/admin/jobs/cron-preview?expression=...` | `jobs:read` | Parse a cron expression and return the next 5 fire-times. |

---

## AI assistant \{#ai\}

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/ai/tools` | `ai:chat` | The tool list the caller would see in chat — useful for permission debugging. |
| `POST` | `/ai/chat` | `ai:chat` | Send a turn. Streams Server-Sent Events by default; `?stream=false` returns a single JSON response. |
| `GET` | `/ai/conversations` | `ai:chat` | List the caller's conversations. |
| `GET` | `/ai/conversations/{id}` | `ai:chat` | One conversation with messages, tool calls and results. |
| `DELETE` | `/ai/conversations/{id}` | `ai:chat` | Delete a conversation. |
| `POST` | `/ai/conversations/{id}/share` | `ai:share` | Produce a read-only share link. |

---

## Admin config (Settings UI back-end) \{#admin-config\}

Each per-section TOML follows the same shape — `<section>` is one of: `pools`, `connectors`, `dictionary`, `menus`, `screens`, `dashboards`, `charts`, `jobs`.

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/admin/config/{section}/parsed` | `settings:{section}` | The parsed TOML as JSON. |
| `PUT` | `/admin/config/{section}/parsed` | `settings:{section}` | Replace the parsed TOML. The server re-serialises with comment preservation. |
| `GET` | `/admin/config/{section}/raw` | `settings:raw` | Raw TOML text. |
| `POST` | `/admin/config/{section}/raw` | `settings:raw` | Replace the raw TOML text. |
| `POST` | `/admin/config/connectors/{name}/test-sql` | `settings:connectors` | Execute one SQL query — body has `{ "query", "params" }`. |
| `POST` | `/admin/config/api/test` | `settings:connectors` | Execute one HTTP endpoint. |
| `POST` | `/admin/config/rename` | `settings:write` | Rename an entity across every file. Body: `{ "scope", "from", "to" }`. |
| `POST` | `/admin/reload` | `settings:reload` | Reload the in-memory registries. `?scope=<section>` to narrow; defaults to `all`. |

---

## License

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/api/license` | `license:read` | The current license payload + verification status. |
| `POST` | `/admin/license/reload` | `license:write` | Re-read `LIBERTY_LICENSE_KEY` and re-verify the signature without a full restart. |

---

## Users & roles

| Method | Path | Permission | Description |
|---|---|---|---|
| `GET` | `/admin/users` | `users:read` | List every user. |
| `GET` | `/admin/users/{username}` | `users:read` | One user with roles and effective permissions. |
| `POST` | `/admin/users` | `users:write` | Create a user. |
| `PUT` | `/admin/users/{username}` | `users:write` | Update display name, roles, active flag. |
| `POST` | `/admin/users/{username}/password` | `users:write` | Set a new password. |
| `POST` | `/admin/users/{username}/revoke` | `users:write` | Revoke every active session. |
| `GET` | `/admin/roles` | `users:read` | List every role. |
| `POST` | `/admin/roles` | `users:write` | Create a role. |
| `PUT` | `/admin/roles/{name}` | `users:write` | Update permissions / inheritance / description. |
| `DELETE` | `/admin/roles/{name}` | `users:write` | Delete a role (refused when members exist). |

---

## Socket.IO

The framework also exposes a **Socket.IO** endpoint at `/socket.io` for live updates. It is not a REST endpoint but plays the same role:

| Event | Direction | Purpose |
|---|---|---|
| `config.reloaded` | server → client | Broadcast after a hot-reload — clients re-fetch the affected catalog. |
| `lock.acquired` / `lock.released` | server → client | Record locks on screens (visible on the Technical dashboard). |
| `job.run.transitioned` | server → client | A job run changed status (`running` → `succeeded` / `failed` / `aborted`). |
| `job.run.log` | server → client | One log line from an in-flight run. Filtered per `run_id`. |
| `pool.stats` | server → client | Periodic pool snapshot for the Technical dashboard. |
| `ai.chat.delta` | server → client | A token chunk during an AI chat turn. |

Authentication is the same Bearer token as REST, passed in the `auth` payload of the Socket.IO handshake.

---

## OpenAPI

The full OpenAPI document is served at:

- **`/docs`** — interactive Swagger UI.
- **`/redoc`** — static Redoc view.
- **`/openapi.json`** — the raw OpenAPI 3.1 JSON, suitable for code generation.

Every endpoint is documented there with the exact request / response shape generated from the route's Pydantic models — this page is the conceptual map; the OpenAPI doc is the precise contract.

---

## Tips & best practices

- **Use `/openapi.json` to generate clients.** Tools like `openapi-typescript` or `openapi-python-client` produce typed SDKs in one command.
- **Always pass `X-Liberty-Lang`** when displaying responses to a user. The default is `en` — labels in your locale require the header.
- **Prefer the named-endpoint REST over raw SQL**. `GET /api/sql/billing/invoices-for-period` is auditable and permission-checked; building SQL in the client and POSTing it is neither (the framework refuses anyway — there is no "run arbitrary SQL" endpoint).
- **Pin the `Authorization` header on every call.** The frontend has cookie fallback for the refresh token but the API surface itself requires the explicit header — easier to debug.
- **`POST /admin/reload`** from CI after deploying configuration. A `git pull` on `liberty-apps` doesn't reach the running framework until the registry is rebuilt.

---

## What's next

- The live API at `http://${HOST}:${PORT}/docs`.
- [Configuration → Settings UI](./configuration/settings-ui.md) — the in-browser editor that consumes the `/admin/config/*` family.
- [Authentication → Roles & permissions](./auth/roles-permissions.md) — the permission codes every endpoint checks.
