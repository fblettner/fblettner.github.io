---
title: Connectors
description: "A connector is how Liberty Next reaches a data source: a SQL connector holds the named queries of a database pool, an API connector the named endpoints of a web API. Edited in Liberty Next → Build → Connectors; a connector with a menu is an app."
keywords: [Liberty Next, connector, SQL, API, pool, named query, endpoint, tables, queries, sequences, lookups, permissions, multi-pool, Oracle thick]
---

# Connectors

A **connector** is how Liberty Next reaches a data source. Every screen, chart, dashboard, action, job step and assistant answer names the connector and the query — or the endpoint — it uses.

| Type | Reaches | Holds |
|---|---|---|
| **SQL** | A database, through a [pool](#pools). | Named **queries**, in four kinds: tables, queries, sequences, lookups. |
| **API** | A web API (REST, JSON). | Named **endpoints**: method, path, headers, body, response mapping. |

A connector that has a menu is an **app** — see [Apps](./apps/overview.md).

---

## At a glance

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cnp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cnp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cnp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cnp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#cnp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Connectors</text>
  <rect x="710" y="28" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="751.5" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Connector</text>
  <rect x="799" y="28" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="829.5" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="866" y="28" width="44" height="22" rx="5" fill="url(#cnp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="888.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="170" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="96" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPS</text>
  <rect x="246" y="104" width="158" height="22" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="119" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">▣ crm</text>
  <text x="256" y="145" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▣ sales</text>
  <text x="252" y="178" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA SOURCES</text>
  <text x="256" y="199" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⛁ reporting</text>
  <text x="256" y="223" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⛁ warehouse</text>
  <text x="256" y="247" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⇄ crm_api</text>
  <text x="426" y="92" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">crm · SQL</text>
  <rect x="426" y="104" width="331" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="463.0" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Settings…</text>
  <rect x="501" y="105" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="528.5" y="119.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <line x1="557" y1="109" x2="557" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="588.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Queries</text>
  <line x1="620" y1="109" x2="620" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="657.0" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Sequences</text>
  <line x1="694" y1="109" x2="694" y2="123" stroke="#334155" strokeWidth="1"/>
  <text x="725.5" y="119.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups</text>
  <rect x="830" y="104" width="130" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="895.0" y="118.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Add queries</text>
  <rect x="426" y="146" width="534" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="166" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customers</text>
  <text x="546" y="166" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="820" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="853" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="868.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PUT</text>
  <rect x="886" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POS</text>
  <rect x="919" y="153" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="934.0" y="165.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DEL</text>
  <rect x="426" y="186" width="534" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="206" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">deals</text>
  <text x="546" y="206" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Deals</text>
  <rect x="820" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="853" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="868.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PUT</text>
  <rect x="886" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POS</text>
  <rect x="919" y="193" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="934.0" y="205.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DEL</text>
  <rect x="426" y="226" width="534" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="246" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">activities</text>
  <text x="546" y="246" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Activities</text>
  <rect x="820" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <rect x="853" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="868.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PUT</text>
  <rect x="886" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="901.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POS</text>
  <rect x="919" y="233" width="30" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="934.0" y="245.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DEL</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Apps and data sources</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a connector with a menu is an app</text>
  <line x1="210" y1="107.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="10" y="250" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">API connector</text>
  <text x="20" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">base URL, auth, endpoints</text>
  <line x1="210" y1="267.0" x2="252" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Five views</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">settings and four kinds of queries</text>
  <line x1="1000" y1="77.0" x2="640" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A table</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">read, update, insert, delete</text>
  <line x1="1000" y1="217.0" x2="960" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cnp-arrow)"/>
</svg>

---

## Liberty Next → Build → Connectors \{#page\}

The left list has two groups: **Apps** (connectors with a menu) and **Data sources** (the others). **＋ Connector** creates one (name, type SQL or API); the right pane edits the selected connector. **Save** writes `connectors.toml` and applies the change without a restart; **Discard** drops the pending changes. The connector's own buttons — **Clone** (with its dictionary scope, screens, menu, charts and dashboards), **Rename** (every reference rewritten), **Delete** (with everything that belongs to it) — are on its settings view.

### Pools \{#pools\}

A pool is a database connection, defined in **Liberty Next → Administer → Pools** and shared by the connectors that use it:

| Field | Effect |
|---|---|
| **Url** | The connection URL (`postgresql+asyncpg://user@host:5432/db`, `oracle+oracledb://user@host:1521/?service_name=…`). Picking a **Dialect** first fills a template. `${VARIABLE}` accepted. |
| **Password** | Kept out of the URL; encrypted when saved. |
| **Dialect** | `postgresql`, `oracle`, `sqlite`, `mysql`, `mssql`… — derived from the URL when empty; chooses a query's [per-dialect variant](./build/queries/per-dialect-sql.md). |
| **Schemas**, **DB Links** | The values of the `#SCHEMA.<NAME>#` and `#DBLINK.<NAME>#` tokens — see [below](#schema-and-db-link-tokens). |
| **Pool size**, **Max overflow**, **Pool pre ping**, **Pool recycle** | Connections kept open, extra connections under load, liveness check, recycling. |
| **Max rows** | Default row limit of the pool's reads (1 000 when empty). |
| **Arraysize** | Oracle: rows fetched per round trip; raise it (500–1 000) for large reads. |
| **Trim strings** | Removes the trailing spaces of fixed-length text (Oracle `CHAR`, JD Edwards). |
| **Coalesce nulls** | On writes, replaces empty values with a space or 0 (Oracle `NOT NULL` text columns). |
| **Debug sql** | Logs every statement run on the pool. |

---

## SQL connector \{#sql\}

The mode bar of a SQL connector has five views: **Settings…**, **Tables**, **Queries**, **Sequences**, **Lookups**. The four query views are described on [Queries — overview](./build/queries/overview.md).

### Settings \{#connection-fields\}

The **Settings** mode of a SQL connector (the *Settings* button of the connector page) holds its connection settings.

| Field | Effect |
|---|---|
| **Pool** | The pool the queries run on — a dropdown of the pools defined in *Liberty Next → Administer → Pools*. The connector takes the pool's address, credentials and dialect. |
| **Pools** | Extra pools the same queries may run on — see [Multi-pool connectors](#multi-pool). |
| **Show In Switcher** | Shows the connector as an application in the switcher at the top of the sidebar — together with a menu, see [Make a connector an app](./build/menus/make-connector-an-app.md). |
| **Home** | The menu entry opened when the application is picked. |
| **Max Rows** | Default row limit of a read; otherwise the pool's, then 1 000. A screen's or a request's limit wins. |
| **Dd Prefix** | Length of the table prefix in column names (JD Edwards: `2`, so `ABCO`, `MCCO` and `SDCO` all carry the dictionary item `CO`). Used by a role's [data scope](./build/secure/roles-and-permissions.md#data-scope). `0`: column names are the items. |

### Query editor

Clicking **＋ Add query** or an existing query opens the query editor:

| Field | Effect |
|---|---|
| **Name** | Identifier of the query — used in the URL (`/api/sql/billing/<name>`) and the permission (`sql:billing:<name>`). |
| **SQL** | The statement, with `:name` parameters and `{{TOKEN}}` server values. One text, or one variant per database — see [Per-dialect SQL](./build/queries/per-dialect-sql.md). |
| **Writable** | Off: only a SELECT is accepted. On: INSERT / UPDATE / DELETE / CALL / MERGE. |
| **Params** | The declared parameters (name, label, default) — see [Parameter binding](./build/queries/parameter-binding.md). |
| **Label**, **Description** (Advanced) | Shown in the pickers, and read by the AI assistant to choose its queries. |

The SQL editor highlights the syntax, completes table and column names from the pool, and has a **Token** menu (`{{LOGIN}}`, `{{SYSDATE}}`…) and a **Pool schemas** menu. The editor's buttons — **Find usages**, **Rename**, **Change type**, **Move**, **Clone**, **Delete** — are described on [Create a custom query](./build/queries/create-custom.md).

### Schema and DB-link tokens \{#schema-and-db-link-tokens\}

A SQL query can carry two placeholder tokens that let the same text run against any pool — local or remote — without maintaining a per-environment variant of the query:

| Token | Resolves to | Where it's configured |
|---|---|---|
| `#SCHEMA.<NAME>#` | The pool's mapping for schema `<NAME>` (e.g. `SY920.`). Empty when the pool has no entry — the token drops out and the table name is written bare. | Pool settings — the *Schemas* map on each pool. |
| `#DBLINK.<NAME>#` | The pool's DB-link suffix for schema `<NAME>` (e.g. `@ORCLPROD`). Appended **after** the table name, so a `#SCHEMA.SY#F0092#DBLINK.SY#` resolves to `SY920.F0092@ORCLPROD`. Empty when no entry — nothing is appended, and the query stays local. | Pool settings — the *DB links* map on each pool (`dblinks = { SY = "@ORCLPROD", … }`). |

The two are position-independent: `#SCHEMA.…#` prefixes the table, `#DBLINK.…#` suffixes it. The same query works locally (both mappings empty), against a remote schema without a link (schema mapped, dblink empty) or via a database link (both mapped) — the pool decides which shape to emit.

A non-empty DB-link value must be a bare `@link` reference (starts with `@`, letters, digits, `_`, `$`, `#` and `.` only). Anything else makes the query fail when it runs — a guard against a DB-link value that would try to smuggle SQL into the statement.

### Oracle thick mode \{#oracle-thick\}

The Oracle driver runs in *thin* mode by default: no Oracle client needed, every call on the server's event loop. Two cases need the *thick* mode, which goes through the Oracle Instant Client:

- **Native Network Encryption** (NNE) required by the database — thin mode fails with `DPY-3001`;
- reading a **LOB across a database link** — thin mode fails with `ORA-22992` / `ORA-03149`.

Tick **Oracle thick mode** in **Liberty Next → Administer → App** (section *App*) and restart the server: every Oracle pool then runs in thick mode — the setting applies to the whole server, not to one pool. PostgreSQL pools are not affected. The Instant Client is included in the Docker image (amd64 and arm64); a Python install needs it on the host.

---

### Multi-pool connectors \{#multi-pool\}

One SQL connector can serve **several pools** — several database or JDE instances — without cloning the connector or duplicating its screens. Alongside the default **Pool**, list the extra ones in **Pools** (both are dropdowns of configured pools in the connector's **Settings** mode); the same named queries and the same screens then run against any pool in the set.

The pool is chosen at runtime:

- **In the app** — when the current app spans a multi-pool connector, a **Pool** picker appears in the sidebar, under the application picker (*Default* is the connector's own pool). Picking a pool re-runs that app's screens against the chosen instance. The choice is kept per app in the browser, and it applies only to the connectors that declare that pool — an app's other (single-pool) connectors keep their default rather than erroring.
- **In jobs** — a `sql_copy` step takes `pool` in its `source` or `target` block, a `sql_query` step takes `pool`, to target a specific instance without a new connector ([steps](../nomaflow/steps.md)). These keys are set in `jobs.toml`; the step editor does not show them.

The reachable set is the default `pool` plus `pools`; a request or a job can never reach a pool outside it, and only pool **names** reach the picker — never a URL or credentials. A connector with just a `pool` behaves exactly as before.

An API connector called from those screens — AIS, for JD Edwards — can follow the same environments: see [One server per environment](#api-environments).

---

## API connector \{#api\}

An API connector calls a web API. Its editor has six tabs:

| Tab | Content |
|---|---|
| **Connection** | **Base URL** (`https://api.example.com`, `${VARIABLE}` accepted), **Default headers**, **Timeout**, **SSL Verify** (*true*, *false*, or a variable such as `${JDE_AIS_VERIFY_SSL:-true}`, kept as written), **Show in switcher**, **Home**. |
| **Authentication** | **Auth type**: *None*, *Basic* (user and password), *Bearer* (static token), *API Key* (header name and key), *OAuth2 / JWT* (token endpoint, request body and headers, token field, token lifetime). Secrets are encrypted when saved. |
| **Environments** | One server per environment, for a connector used with several JDE environments — see [One server per environment](#api-environments). |
| **Endpoints** | The named endpoints — see below. |
| **Webhooks** | Not available yet: external systems cannot push events into Liberty Next. |
| **Test** | **Test connection** checks the authentication; **Run** calls an endpoint with parameter values and shows the response. Nothing is saved. |

An endpoint has:

| Field | Effect |
|---|---|
| **Name** | Used in the URL (`/api/http/<connector>/<name>`) and the permission (`api:<connector>:<name>`). |
| **Method**, **URL path** | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`…; the path is appended to the base URL (an absolute URL bypasses it). |
| **Headers**, **Query params** | Added to the connector's; values accept `{{placeholders}}`. |
| **Body template**, **Body Content-Type** | The request body, with `{{placeholders}}`. |
| **Response field**, **Response mappings** | A dot path into the JSON response (`data.0.id`), or several named paths; blank returns the whole response. |
| **Parameters** | The declared `{{placeholders}}`, with label and default. |
| **Label**, **Description** | Shown in the pickers and to the AI assistant. |

Endpoints are called by screen actions (`call_api`), menu entries (type `endpoint`), notification rules (`action` channel), plugins (`connectors.api(…).call(…)`) and — when allowed — the AI assistant. A Nomaflow `http` step calls a URL directly, without a connector.

### One server per environment \{#api-environments\}

When the screens run on a [multi-pool connector](#multi-pool) — several JD Edwards environments — each environment usually has its own AIS server. The **Environments** tab gives the API connector one server per environment; the endpoints stay defined once.

| Field | Effect |
|---|---|
| **Environment (pool)** | The environment (pool) of the connector's own server — its **Base URL** and credentials. Required as soon as there is another environment. |
| **Other environments** | One entry per other pool: **Base URL**, **Username**, **Password**, **Token**, **SSL Verify**. A blank field takes the connector's value. Passwords and tokens are encrypted when saved. |

Nobody chooses the server. A call follows the environment the screen runs on — the **Pool** picked in the sidebar, or the default — and a job step's `pool` (any step type). That covers screen actions (`call_api`), plugins, `/api/http` and the AI assistant.

A call made for one of the connector's environments with no server is **refused** ("no target for pool …"); it is never sent to the connector's own server, which is another environment — often production. The environments are the connector's pool plus every pool of the SQL connectors running on it, so a JDE environment added on the SQL side and forgotten here is refused too. The tab lists those environments without a server, and so does *Settings → Integrity*.

```toml
[connectors.ais_connection]
base_url = "${JDE_AIS_URL}"
pool = "jdedwards"                          # the environment of base_url

[connectors.ais_connection.targets.jdedwards_dev]
base_url = "https://ais-dev.example.com:7077/jderest/v2"
auth_password = "ENC:…"                     # only what differs
```

To name the environment before a sensitive call, use `#POOL#` in a `confirm` message: `Reset the password of {INPUT.user} on #POOL#?`. An upgrade of the licensed apps keeps an install's `pool` and `targets`.

---

## Schema discovery and column hints \{#schema-discovery-and-column-hints\}

A query has no declared column list: the columns are those the database returns when it runs. How a column looks on a screen is decided, in this order, by:

1. the **column settings of the screen** (Columns tab) — label, format, width, rule, conditions;
2. the **dictionary entry** whose key is the column's name, or the one named in the column's `dd` field — label per language, format, rule (Boolean, enum, lookup…);
3. otherwise the column's name and the default display for its type.

A column does not need a setting of its own: a dictionary entry with its name is enough. See [Dictionary](./dictionary.md#column-reference) and [Screens → Columns](./build/screens/columns.md).

---

## Permissions

Each query and each endpoint has its own permission:

| Permission | Allows |
|---|---|
| `sql:<connector>:<query>` | Running the query — read or write alike. |
| `api:<connector>:<endpoint>` | Calling the endpoint. |

They are granted through roles: allowing a menu entry grants what it opens, and **Beyond the menus** grants a query, an endpoint or a whole connector — patterns such as `sql:billing:report_*` are accepted. See [Roles & permissions](./build/secure/roles-and-permissions.md).

---

## Tips

- **Name queries after the entity** — `invoices_get`, `invoices_by_status_get` — the lists read themselves.
- **Describe the queries** the AI assistant should use: label and description (Advanced tab).
- **Prefer the dictionary to per-screen labels**: one entry serves every screen.
- **Keep secrets out of the files** with `${VARIABLE}` references when a secrets manager is used — see [Encryption & secrets](./configuration/encryption-secrets.md).

---

## Under the hood

Connectors and pools are stored in `connectors.toml`, in the apps configuration folder. The Liberty Next pages are the normal way to edit them; the same configuration is reachable through the REST API under `/admin/config/connectors` — see [REST API](../references/rest-api.md#admin-config).

---

## What's next

- [Queries — overview](./build/queries/overview.md) — the four kinds of queries and their editors.
- [Dictionary](./dictionary.md) — labels, formats and lists of values of the columns.
- [Parameter binding](./build/queries/parameter-binding.md) — parameters, built-ins and tokens.
- [Screens](./build/screens/overview.md) — grids and dialogs on the queries.
