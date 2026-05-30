---
title: Connectors
description: "A connector defines how the framework reaches a data source. Built and edited from Settings → Connectors — three types (SQL, HTTP, API), each with a dedicated builder. Schema is discovered at runtime from the live query; nothing is hand-typed about column types."
keywords: [Liberty Framework, connector, SQL, HTTP, API, settings, pool, named query, endpoint, schema discovery, write query, licensed]
---

# Connectors

:::info[Deep reference]
This page documents how the connector engine discovers schema at runtime, manages the connector registry and gates permissions. For task-oriented walkthroughs — create a query, clone a connector, scaffold a sequence or a lookup — see [Build → Queries](./build/queries/overview.md) and [Build → Menus → Make a connector an app](./build/menus/make-connector-an-app.md).
:::

A **connector** is the bridge between the framework and a data source — a database, an HTTP API, or a third-party service. Connectors are created and edited from **Settings → Connectors**, one entry per source. Every screen, dashboard, chart, job step and AI tool that needs data names a connector to use.

The framework supports three connector types:

| Type | What it reaches | Editor |
|---|---|---|
| **SQL** | A relational database via a [pool](./configuration/settings-ui.md). Each connector groups a set of **named queries** — read and write. | Settings → Connectors → *SQL* sub-tab |
| **HTTP** | A REST / GraphQL endpoint. Each connector groups a set of **named endpoints** with method + path + auth. | Settings → Connectors → *HTTP* sub-tab |
| **API** | A generic remote service whose calls are dispatched to either SQL or HTTP under the hood (compatibility variant). | Settings → Connectors → *API* sub-tab |

The schema of every read query / endpoint response is **discovered at runtime** — the framework asks the database or the API "what columns / fields does this return?" on first use and caches the answer. No column type, length or position is ever typed by hand.

---

## At a glance

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="cn-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#cn-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">From operator to query — the connector lifecycle</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · CREATE</text>
  <text x="160" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Settings → Connectors</text>
  <text x="160" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New connector</text>
  <text x="160" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">pick a type</text>

  <rect x="280" y="100" width="200" height="80" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · DEFINE</text>
  <text x="380" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">connection details</text>
  <text x="380" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">named queries / endpoints</text>
  <text x="380" y="174" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">parameters · column hints</text>

  <rect x="500" y="100" width="200" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · TEST</text>
  <text x="600" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Run a query — first 50 rows</text>
  <text x="600" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">framework discovers the schema</text>
  <text x="600" y="174" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontStyle="italic">columns surfaced as chips</text>

  <rect x="720" y="100" width="220" height="80" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · USE</text>
  <text x="830" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">picked from any screen,</text>
  <text x="830" y="158" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">chart, dashboard, job step</text>
  <text x="830" y="174" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">or by the AI assistant</text>

  <line x1="260" y1="140" x2="280" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cn-arrow)"/>
  <line x1="480" y1="140" x2="500" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cn-arrow)"/>
  <line x1="700" y1="140" x2="720" y2="140" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cn-arrow)"/>

  <rect x="60" y="210" width="880" height="80" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="232" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RUNTIME — once saved, the framework registers the connector and reloads its caller surfaces</text>
  <text x="76" y="254" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Schema is discovered on first call; labels and formats come from the dictionary</text>
  <text x="76" y="272" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Permissions are derived from the connector name and the query name (sql:&lt;c&gt;:&lt;q&gt; / api:&lt;c&gt;:&lt;e&gt;)</text>
</svg>

---

## The catalogue — Settings → Connectors

The page lists every connector on the install. Each row shows the connector type, the pool / base URL, the connection status (a live probe) and the number of declared queries / endpoints.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Connectors</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>App ▾</span>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Type ▾</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ New connector</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Name</div><div>Type</div><div>Target</div><div>Queries</div><div>Status</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing</div>
    <div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>sql</span></div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>pool: default</div>
    <div>12</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>connected</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>crm</div>
    <div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>http</span></div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>https://crm.example.com</div>
    <div>8</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.10)', color: '#4ade80'}}>connected</span></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 70px 1.6fr 80px 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>jdedwards <span style={{marginLeft: '6px', padding: '1px 6px', borderRadius: '999px', fontSize: '9px', fontWeight: 700, background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc'}}>licensed</span></div>
    <div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>sql</span></div>
    <div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.85}}>pool: jde</div>
    <div>56</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '10px', fontWeight: 600, border: '1px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.10)', color: '#f87171'}}>offline</span></div>
  </div>
</div>

Toolbar filters narrow the list by *App* and *Type*. **+ New connector** opens the editor on a blank entry; clicking any row opens the editor on that connector.

| Status pill | Meaning |
|---|---|
| **connected** | The live probe to the pool / base URL succeeded within the last 30 seconds. |
| **offline** | The probe failed. The connector still appears, but every query against it will fail until the source comes back. |
| **licensed** *(badge)* | Marked with `Licensed = true`. Only loads when the [license key](./build/secure/license-key.md) carries it. |

---

## The connector editor

Clicking a row opens a three-tab editor on the right. The tabs are the same for every type, but each tab's content adapts to the picked *Type*.

| Tab | Purpose |
|---|---|
| **Connection** | How the framework reaches the source — pool / base URL, authentication, common headers. |
| **Queries / Endpoints** | The named queries (SQL) or endpoints (HTTP/API) that callers reference. |
| **Permissions** | Read-only summary — which permission codes this connector generates, who currently carries them. |

---

## SQL connector

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → Connectors → billing</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Test connection</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save & reload</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Connection</div>
    <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
      <div style={{opacity: 0.75}}>Name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>billing</span></div>
      <div style={{opacity: 0.75}}>App</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
      <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '11px', fontWeight: 600}}>SQL ▾</span></div>
      <div style={{opacity: 0.75}}>Pool</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>default ▾</span></div>
      <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Invoices, credit notes and the dunning workflow.</span></div>
      <div style={{opacity: 0.75}}>Licensed</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(94,94,94,0.10)', border: '1px solid rgba(255,255,255,0.20)', fontSize: '11px', fontWeight: 600, opacity: 0.7}}>○ Off</span></div>
      <div style={{opacity: 0.75}}>Expose to AI assistant</div><div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '11px', fontWeight: 600}}>● On</span></div>
    </div>
  </div>
  <div style={{padding: '14px 16px'}}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff'}}>Queries · 12</div>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Add query</span>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1.6fr 70px 80px 40px', rowGap: '4px', alignItems: 'center', fontSize: '11px'}}>
      <div>monthly-invoice-counts</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>read</span></div><div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.6}}>1 param</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
      <div>invoices-for-period</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>read</span></div><div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.6}}>3 params</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
      <div>refresh-totals</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,159,10,0.10)', border: '1px solid rgba(255,159,10,0.40)', color: '#fb923c', fontSize: '10px', fontWeight: 600}}>write</span></div><div style={{fontFamily: 'ui-monospace, monospace', opacity: 0.6}}>1 param</div><div style={{textAlign: 'right', opacity: 0.55}}>✏️</div>
    </div>
  </div>
</div>

### Connection fields

| Field | Effect |
|---|---|
| **Name** | Identifier used everywhere — the URL, the permission code (`sql:<name>:*`), the AI tool name. Short, kebab-case. |
| **App** | Dropdown of registered apps. Drives the connector's namespace and the workspace it appears in. |
| **Type** | `SQL` here. Changing the type re-shapes the form. |
| **Pool** | Dropdown of pools defined under *Settings → Pools*. The connector inherits the pool's URL, credentials and dialect. |
| **Description** | Free text. Shown on the catalogue, as the tooltip on screens that pick this connector, and — crucially — in the **AI assistant tool description**. A two-sentence summary in the user's language goes a long way. |
| **Licensed** | When *on*, the connector loads only when the [license key](./build/secure/license-key.md) lists its identifier. Used by Nomana-IT to gate vendor connectors; customer connectors leave it off. |
| **Expose to AI assistant** | When *on*, the connector's read queries become tools the AI assistant can pick. Write queries are excluded by default. See [AI assistant](./ai-assistant.md). |

The **Test connection** button (top right) hits the pool with a `SELECT 1` and reports success / failure inline — useful to confirm the pool is reachable before adding queries.

### Query editor

Clicking *+ Add query* or an existing row opens the query editor:

| Field | Effect |
|---|---|
| **Name** | Identifier of the query — surfaces in the URL (`/api/sql/billing/<name>`), the permission code (`sql:billing:<name>`) and the AI tool name. |
| **Label** | Human display label — appears in the menu builder picker, screen builder picker, etc. |
| **Operation** | `Read` / `Write`. *Write* queries get the `:write` suffix on their permission code. |
| **SQL** | The query body. A Monaco editor with SQL syntax highlighting, schema-aware autocomplete (column names from the pool), and parameter highlighting (`:name` placeholders). |
| **Dialect overrides** | Optional per-dialect variants (`oracle`, `postgresql`, `sqlite`) for cases where the canonical `SELECT` doesn't translate. The framework picks the right one based on the pool's dialect. |
| **Description** | Two-sentence summary. Shown on the screen builder pickers and in the AI assistant tool description. |
| **Parameters** | Sub-table — see [Parameter binding](./build/queries/parameter-binding.md) for every field. |
| **Column hints** | Optional sub-table. Each row binds a result column to a dictionary entry: *Column* (dropdown of columns the *Test* button discovered) + *Dictionary* (dropdown of dictionary entries). Drives labels, formats, enums, lookups. Columns without a hint fall back to the column name as the label. |

The **▶ Test** button at the top of the editor runs the query against the live pool with placeholder values for the parameters and shows the first 50 rows. The first successful test populates the *Column hints* dropdown with the discovered columns; subsequent tests refresh it.

The framework uses the discovered schema to:

- Build grid columns on screens.
- Validate column hints (a hint pointing at a column that no longer exists is flagged red).
- Type-coerce parameter values before binding.
- Feed the AI assistant's tool schema with the right field shapes.

---

## HTTP connector

The form re-shapes when *Type* is set to `HTTP`. The pool dropdown disappears; a *Base URL* + *Authentication* block takes its place.

| Field | Effect |
|---|---|
| **Base URL** | Origin of the API (e.g. `https://crm.example.com`). The endpoints below are appended to this. |
| **Authentication** | `None` / `Basic` / `Bearer` / `OAuth2`. Each picks a sub-form. *Basic* asks for user + 🔒 password; *Bearer* takes a 🔒 token; *OAuth2* asks for the token endpoint, client id, 🔒 client secret and the scope list. |
| **Headers** | Common headers applied to every endpoint — e.g. a static `User-Agent` or an `X-Tenant`. |
| **Default timeout** | Seconds before a call is aborted. Default 30. |

The endpoints sub-table replaces the SQL queries:

| Field | Effect |
|---|---|
| **Name** | Endpoint identifier — surfaces in the URL (`/api/http/<connector>/<name>`), the permission code (`api:<connector>:<name>`) and the AI tool name. |
| **Label** / **Description** | Same as for SQL queries. |
| **Method** | `GET` / `POST` / `PUT` / `PATCH` / `DELETE`. |
| **Path** | Path appended to the base URL. Supports `:name` placeholders bound from parameters. |
| **Body template** | For non-`GET` methods, a JSON template. Supports `${name}` substitution from parameters. |
| **Parameters** | Same shape as for SQL — see [Parameter binding](./build/queries/parameter-binding.md). |
| **Response shape** | Auto-detected when the *Test* button is used; the operator can refine the discovered shape (rename keys, group nested fields) to align it with what consumers expect. |

The **▶ Test** button issues the call live with the configured authentication and parameter defaults; the response body is shown formatted, with the discovered shape surfaced as chips below.

---

## API connector

`API` is a hybrid type kept for compatibility with installs that route some calls to SQL and others to HTTP under a single connector name. The editor exposes both *Queries* and *Endpoints* sub-tables; the *Operation* field on each entry picks the underlying engine.

In a new install you'll almost always pick `SQL` or `HTTP` directly. `API` is the path when consolidating multiple legacy connectors under one umbrella.

---

## Schema discovery and column hints

A read query has no manually-declared column list. On first call (or when the operator clicks *Test*), the framework executes the query, looks at the cursor's column descriptions and caches them:

| Field discovered | What the framework records |
|---|---|
| **Column name** | Used as the default label when no dictionary hint applies. |
| **Database type** | Drives the type-coercion of parameter values on subsequent calls. |
| **Nullable / not nullable** | Used by screens to decide whether the column gets a "required" asterisk. |
| **Length / precision** | Surfaced as constraints on the field editor (max-length on a string, max-digits on a decimal). |

The **Column hints** sub-table is where you override the default. A hint maps a discovered column to a [dictionary](./dictionary.md) entry — that's how the column gets a localised label, a boolean / enum / lookup rule, a number format, etc.

You don't have to declare a hint for every column; columns without a hint render with the raw database name and the default widget for their type.

---

## Permissions

Every connector generates a **permission code per query / endpoint**:

| Code template | Granted to |
|---|---|
| `sql:<connector>:<query>` | Run the read query. |
| `sql:<connector>:<query>:write` | Run the write query. |
| `api:<connector>:<endpoint>` | Call the HTTP endpoint. |

The codes appear on the *Permissions* tab of the connector editor and in the **Permission picker** of [Settings → Roles](./build/secure/roles-and-permissions.md). Wildcards `sql:billing:*` and `api:crm:*` are supported.

The connector itself isn't gated — what's gated is each call. A user with no permissions sees no queries; a user with `sql:billing:*` sees every read + write of the billing connector.

---

## Hot-reload behaviour

A *Save & reload* on the connector editor rebuilds the connector registry in place — every consumer (screens, charts, dashboards, AI tools) picks up the change on its next render. Requests already in flight finish on the previous version; no abort is needed. See [Hot-reload](./configuration/hot-reload.md) for the full contract.

---

## Tips & best practices

- **Always click *Test* before *Save*.** A query that the database refuses at execution time is the most common cause of broken screens. The *Test* button catches it early.
- **Write a good *Description*.** It surfaces in the AI assistant, the menu builder, the screen builder — two sentences in the user's language pays for itself many times.
- **Prefix queries with the entity** — `invoices-list`, `invoices-by-status`, `invoice-detail`. Makes the catalogue self-documenting.
- **Keep read and write paths separate.** Don't write `INSERT INTO ... RETURNING ...` as a read query; the framework's permission model gates writes separately for a reason.
- **Use column hints sparingly.** A column that just needs its database name is fine without a hint — define hints only when the dictionary adds value (a localised label, a format, a lookup).
- **Set *Licensed* off on customer connectors.** Reserve the badge for vendor-shipped connectors that need a key.

---

## Under the hood

Connector definitions are stored in `liberty-apps/config/connectors.toml` (or `liberty-next/config/connectors.toml` when `LIBERTY_APPS_DIR` is unset). Operators **do not edit this file by hand** in normal operation; the Connectors builder is the canonical interface. The *Raw TOML* tab of [Settings → Connectors](./configuration/settings-ui.md) is the escape hatch for the rare case where the builder doesn't cover a field.

For CI scripts and external orchestrators, the same surface is reachable via REST at `/admin/config/connectors/*` — see [REST API reference](./rest-api.md#admin-config).

---

## What's next

- [Dictionary](./dictionary.md) — per-column metadata: labels, formats, enums, lookups.
- [Parameter binding](./build/queries/parameter-binding.md) — declared parameters, defaults, cascading filters.
- [Screens](./build/screens/overview.md) — turn a connector into a grid + edit dialog.
- [Charts](./charts.md) — wrap a query into a visualisation.
- [Encryption & secrets](./configuration/encryption-secrets.md) — the 🔒 toggle on passwords / tokens.
