---
title: Settings UI
description: "The in-app Settings page is the schema-driven editor for every per-section TOML file: pools, connectors, dictionary, screens, menus, dashboards, charts and jobs. One builder per concept, a raw Monaco editor as escape hatch, and a Reload button that pushes every change live."
keywords: [Liberty Framework, Settings UI, builders, pools, connectors, dictionary, screens, menus, dashboards, charts, jobs, Monaco editor, hot-reload, schema-driven, low-code]
---

# Settings UI

:::info[Deep reference]
This page documents the Settings UI architecture itself — the schema-driven builder pattern, validation contract, raw Monaco escape hatch, technical dashboard. For task-oriented walkthroughs of each builder, see the [Build an application](../build/queries/overview.md) section.
:::

The **Settings** page (gear icon in the header, visible to users with the `settings:read` permission) is the in-app editor for every per-section TOML file. Each config type has a dedicated **builder** — a schema-driven form generated from the Pydantic models that the backend uses to load the file. A raw Monaco editor sits on every tab as an escape hatch when a builder's form doesn't expose the field you need.

Every save writes the TOML on disk, then triggers a server-side reload — the change is live in the same browser tab without a restart.

---

## At a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="su-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="su-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="20" width="920" height="340" rx="14" fill="url(#su-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings — one builder per config type</text>
  <line x1="40" y1="68" x2="960" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="86" width="160" height="252" rx="10" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="70" y="106" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABS</text>
  <rect x="68" y="118" width="144" height="26" rx="6" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="78" y="135" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Pools</text>
  <text x="78" y="158" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Connectors</text>
  <text x="78" y="178" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Dictionary</text>
  <text x="78" y="198" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="78" y="218" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Menus</text>
  <text x="78" y="238" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Dashboards</text>
  <text x="78" y="258" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Charts</text>
  <text x="78" y="278" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">Jobs</text>
  <text x="78" y="306" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">+ Technical</text>
  <text x="78" y="322" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">+ Raw TOML</text>

  <rect x="240" y="86" width="700" height="252" rx="10" fill="rgba(0,0,0,0.20)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="106" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOLS BUILDER</text>

  <rect x="252" y="118" width="676" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="135" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">default</text>
  <text x="264" y="151" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">sqlite+aiosqlite:///liberty.db</text>
  <rect x="848" y="128" width="68" height="22" rx="11" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="882" y="143" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">connected</text>

  <rect x="252" y="168" width="676" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="185" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">crm</text>
  <text x="264" y="201" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">postgresql+asyncpg://crm@db/crm</text>
  <rect x="848" y="178" width="68" height="22" rx="11" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="882" y="193" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">connected</text>

  <rect x="252" y="218" width="676" height="42" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="235" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">jdedwards</text>
  <text x="264" y="251" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">oracle+oracledb://jde@orcl:1521/PDB1</text>
  <rect x="848" y="228" width="68" height="22" rx="11" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="882" y="243" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">offline</text>

  <rect x="252" y="280" width="160" height="32" rx="8" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332" y="300" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ New pool</text>
  <rect x="424" y="280" width="160" height="32" rx="8" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="504" y="300" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Test connection</text>
  <rect x="780" y="280" width="148" height="32" rx="8" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="854" y="300" fill="#22c55e" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Save &amp; reload</text>
</svg>

The builder column on the left is shown collapsed; each entry opens a detail panel on the right (the screenshot shows the Pools builder).

---

## The builders

The Settings page exposes **nine builders** plus the technical dashboard and the raw TOML escape hatch:

| Tab | Edits | Permission |
|---|---|---|
| **Pools** | `connectors.toml` → `[pools.*]` blocks — JDBC URLs, dialects, pool sizes, credentials. | `settings:pools` |
| **Connectors** | `connectors.toml` → `[connectors.*]` blocks — SQL queries, HTTP endpoints, API auth. | `settings:connectors` |
| **Dictionary** | `dictionary.toml` — column metadata: labels, formats, enums, lookups, validation. | `settings:dictionary` |
| **Menus** | `menus.toml` — sidebar trees per app, folders, leaves and permission gates. | `settings:menus` |
| **Screens** | `screens.toml` — grids, dialogs, tabs, per-field conditions, audit columns. | `settings:screens` |
| **Dashboards** | `dashboards.toml` — stat / bar / line / pie / grid layouts. | `settings:dashboards` |
| **Charts** | `charts.toml` — Recharts wrapper config referenced by dashboards. | `settings:charts` |
| **Jobs** | `plugins/*/jobs.toml` — Nomaflow job catalogue per app. | `settings:jobs` |
| **Technical** | Read-only — live pool stats, record locks, in-flight job runs, recent socket events. | `settings:technical` |
| **Raw TOML** | A Monaco editor per file. Loads the file as-is, saves it back. Last-resort path when a builder lacks a field. | `settings:raw` |

The permission codes are the canonical strings used by the role engine — see [Authentication → Roles & permissions](../build/secure/roles-and-permissions.md) for how to grant them.

---

## How a builder works

Every builder follows the same shape:

1. **List view** — every entry of the underlying TOML section as a row.
2. **Detail panel** — the entry as a schema-driven form (one field per Pydantic attribute) plus secondary tabs when the model has nested objects.
3. **Validation** — every input is checked against the Pydantic model; an invalid value highlights the field in red and disables the *Save* button.
4. **Test** *(SQL / HTTP / API only)* — runs the query or endpoint against the live pool and shows the first 50 rows.
5. **Save & reload** — writes the TOML on disk and triggers a server-side reload. The success toast carries the affected file path.

### Live preview of nested fields

For configs with nested rows (a screen's columns, a menu's leaves, a job's steps), the detail panel uses a **drag-and-drop list** with inline editors. The TOML order is preserved exactly as the operator arranges it — the framework does not re-sort entries on save.

### Inline references

A connector's *Pool* field is a dropdown of the pools currently defined. A screen's *Connector* field lists every connector. A menu leaf's *Screen* field lists every screen of the selected app. Removing a referenced entry is **refused** — the builder reports which configs still point at it, with a link to each.

---

## Raw TOML editor

The **Raw TOML** tab opens a Monaco editor on the underlying file. Syntax errors are highlighted live; the *Save* button stays disabled until the file parses. The editor is intentionally minimal — no rename helper, no validation against the Pydantic models — because its purpose is to **unblock an operator** when a builder lacks the exact field needed.

A confirmation dialog appears when saving raw TOML after a builder edit was made in the same session: the raw save would overwrite the builder's diff. Pick *Keep builder changes* to abort the raw save, or *Use raw content* to discard the builder edits and persist the raw text.

---

## Save semantics

| Step | Effect |
|---|---|
| Click **Save & reload** in a builder | Pydantic model is re-validated. On success, the TOML is rewritten on disk through `tomlkit` (so comments are preserved on entries that already had them). |
| Server-side reload | `POST /admin/reload` is invoked with the file scope — only the affected registry is rebuilt. Live HTTP requests in flight keep their current state; new requests use the reloaded config. |
| UI refresh | The Settings page re-fetches the parsed config; any other tab open on the same model (e.g. the Connectors catalogue page) refreshes through a Socket.IO broadcast. |

For the exact reload contract — what reloads, what is left in-flight, what falls back to a restart — see [Hot-reload](./hot-reload.md).

---

## Technical dashboard

The **Technical** tab is read-only and surfaces what the framework is doing right now:

| Panel | Content |
|---|---|
| **Pool stats** | Per-pool: open connections, idle, in-use, max, average checkout time. Refreshes every 2 s over Socket.IO. |
| **Record locks** | Active locks taken by the screen engine (one row per locked `(connector, key)` pair). |
| **Job runs** | Last 50 Nomaflow runs with their state and elapsed time. |
| **Socket events** | Tail of recent server-pushed events (lock acquired/released, config reloaded, job step transitioned). |

The page is restricted to users carrying `settings:technical` and is meant for diagnostics — no actions are exposed.

---

## Backed by a REST surface

Every builder talks to a small set of `/admin/config/*` endpoints. They are documented under [REST API reference → Admin config](../../references/rest-api.md#admin-config) and are usable from `curl` for scripting:

| Endpoint | Purpose |
|---|---|
| `GET  /admin/config/<section>/parsed` | Return the parsed TOML as JSON. |
| `PUT  /admin/config/<section>/parsed` | Replace the parsed TOML — server re-serialises with comment preservation. |
| `POST /admin/config/<section>/raw` | Replace the raw TOML text. |
| `POST /admin/config/connectors/{name}/test-sql` | Execute a single SQL query and return its first rows. |
| `POST /admin/config/api/test` | Execute an HTTP endpoint and return the response. |
| `POST /admin/config/rename` | Rename an entity across every TOML file that references it. |
| `POST /admin/reload` | Force a global reload (no file change). |

---

## Tips & best practices

- **Edit one section at a time.** A *Save & reload* swaps just the affected registry — a multi-section change can leave the system in a transient state where one config is up to date and another isn't.
- **Use the Raw TOML escape hatch sparingly.** If you reach for it often, file an issue — a builder gap is worth fixing on the framework side.
- **Run *Test* before *Save* on a SQL or HTTP connector.** The framework rejects the *Save* if the connection-string parser fails, but it lets through a query that the database refuses at execution time. The *Test* button catches that earlier.
- **Restrict the *Raw TOML* permission tightly.** Operators who only need to edit a connector do not need to be able to overwrite the whole file.
- **Keep `git status` clean.** Every Settings save lands as a diff in `liberty-apps`; commit with a clear message so the rollback path is obvious.
