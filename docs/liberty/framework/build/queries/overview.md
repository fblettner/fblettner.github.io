---
title: Queries — overview
description: "How Liberty's Connectors page is organised — Tables / Unclassified / Sequences / Lookups — and the four kinds of queries each tab manages."
keywords: [Liberty Framework, queries, connectors, CRUD, sequences, lookups, ConnectorsBuilder, Settings UI]
---

# Queries — overview

A **query** in Liberty is a named SQL statement attached to a **connector** (which itself points at a **pool**, i.e. a database). Screens, dashboards, charts, dictionary lookups, dictionary sequences and the AI assistant all consume queries — so adding a query is the most common change you'll make in the Settings UI.

The page that manages queries is **Settings → Connectors**. This overview maps it; the next pages walk through each "add" path.

---

## The Connectors page at a glance

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="ov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#ov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Connectors</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="78" width="120" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="100" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">＋ Connector</text>
  <rect x="780" y="78" width="80" height="26" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="820" y="95" fill="#cbd5e1" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Discard</text>
  <rect x="868" y="78" width="80" height="26" rx="6" fill="#4a9eff" opacity="0.9"/>
  <text x="908" y="95" fill="#0b1220" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>

  <rect x="40" y="120" width="200" height="220" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="140" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPS</text>
  <rect x="58" y="150" width="164" height="22" rx="4" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="68" y="165" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">▣ crm</text>
  <text x="58" y="190" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">▣ nomajde</text>
  <text x="58" y="210" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">▣ nomasx1</text>
  <text x="58" y="240" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATA SOURCES</text>
  <text x="58" y="262" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⛁ default</text>
  <text x="58" y="282" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⛁ jdedwards</text>
  <text x="58" y="302" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">⛁ reporting</text>

  <rect x="252" y="120" width="708" height="220" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="268" y="140" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm] · sql</text>

  <rect x="268" y="152" width="80" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="308" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Settings</text>
  <rect x="350" y="152" width="68" height="24" rx="6" fill="rgba(74,158,255,0.30)" stroke="rgba(74,158,255,0.60)"/>
  <text x="384" y="168" fill="#0b1220" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <rect x="420" y="152" width="100" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="470" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Unclassified</text>
  <rect x="522" y="152" width="84" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="564" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Sequences</text>
  <rect x="608" y="152" width="80" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="648" y="168" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups</text>
  <rect x="868" y="152" width="80" height="24" rx="6" fill="rgba(34,197,94,0.15)" stroke="rgba(34,197,94,0.40)"/>
  <text x="908" y="168" fill="#22c55e" fontSize="10" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">＋ Table</text>

  <rect x="268" y="190" width="676" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="284" y="210" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">customers</text>
  <text x="430" y="210" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Portfolio customers</text>
  <rect x="760" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="774" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="792" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="806" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="824" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="838" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="856" y="196" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="870" y="210" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>

  <rect x="268" y="232" width="676" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="284" y="252" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">deals</text>
  <text x="430" y="252" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Open deals</text>
  <rect x="760" y="238" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="774" y="252" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="792" y="238" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="806" y="252" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="824" y="238" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="838" y="252" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="856" y="238" width="28" height="20" rx="3" fill="rgba(255,255,255,0.05)" stroke="#334155" strokeDasharray="2,2"/>
  <text x="870" y="252" fill="#64748b" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>

  <rect x="268" y="274" width="676" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155"/>
  <text x="284" y="294" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">activities</text>
  <text x="430" y="294" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Notes and calls</text>
  <rect x="760" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="774" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <rect x="792" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="806" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">PUT</text>
  <rect x="824" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="838" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POS</text>
  <rect x="856" y="280" width="28" height="20" rx="3" fill="rgba(34,197,94,0.20)"/>
  <text x="870" y="294" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">DEL</text>
</svg>

Three regions:

| Region | What it carries |
|---|---|
| **Top toolbar** | Global actions — *＋ Connector*, *Discard*, *Save*. The *Save* button writes the connector file and triggers a hot reload — no process restart needed. |
| **Left navigation** | Two groups: *Apps* (connectors that have a menu — these are the apps users see in the top switcher) and *Data sources* (connectors that supply data but don't appear in the switcher). Click a name to open it on the right. |
| **Right pane** | The editor for the selected connector. A mode bar across the top picks one of five views — *Settings*, *Tables*, *Unclassified*, *Sequences*, *Lookups*. |

---

## The four kinds of queries

Every query carries a `type` that tells the page which tab it belongs to:

| Tab | `type` | What lives here |
|---|---|---|
| **Tables** | `table` | Queries that follow the CRUD naming convention — `<base>_get`, `<base>_put`, `<base>_post`, `<base>_delete`. The page groups them by base name and shows a row per table with four slot badges (GET / PUT / POS / DEL). |
| **Unclassified** | `custom` | Standalone queries not tied to a table CRUD set — bulk operations, business queries, reports. Example: `monthly_revenue`, `purge_old_logs`. |
| **Sequences** | `sequence` | Queries that generate the next value for a dictionary `[sequences.*]` rule. Typical body: `SELECT COALESCE(MAX(<col>), 0) + 1 FROM <table>`. |
| **Lookups** | `lookup` | Queries that supply value + label pairs for a dictionary `[lookups.*]` rule. Typical body: `SELECT <value>, <label> FROM <table>`. |

The tab the query falls into is decided by its `type` — not by its name. A query named `customer_balance` typed `custom` lives in Unclassified; the same name typed `lookup` lives in Lookups.

---

## The add buttons — one per tab

The Add affordance is **per tab**, because each kind has its own creation flow.

| Tab | Add button | What opens |
|---|---|---|
| **Tables** | *＋ Add table* | A choice modal: **Generate from DB** (the CRUD Wizard — introspects the pool, generates all four queries) or **Empty stub** (prompts a base name, creates a blank `<base>_get` stub). |
| **Unclassified** | *＋ Add query* | A name prompt — creates a blank `custom` query you fill in by hand. |
| **Sequences** | *＋ Add sequence* | The Scaffold modal — pick a table, pick a key column, get a live SQL preview, save (writes the query **and** the matching dictionary entry). |
| **Lookups** | *＋ Add lookup* | The Scaffold modal — pick a table, pick a value column and a label column, optional WHERE filter, save (writes the query **and** the dictionary entry). |

The next pages walk through each path.

---

## What a query carries

The editor form (Unclassified / Sequences / Lookups tabs) reflects the `QueryDef` shape:

| Field | Required | What it does |
|---|---|---|
| **`name`** | Yes | Unique inside the connector. The permission string for this query is `sql:<connector>:<name>`. Read-only in the editor — use the *Rename* button (cross-file rename). |
| **`type`** | No | `table` / `custom` / `sequence` / `lookup` — drives which tab the query appears on. Empty falls back to a name-based guess. |
| **`sql`** | Yes | The SQL statement with `:placeholder` parameters. Can be a single string, or a per-dialect map `{ default = "…", oracle = "…" }`. The `default` variant is required when using a map. |
| **`writable`** | No (default `false`) | When `false`, only SELECT is allowed. Flip to `true` for INSERT / UPDATE / DELETE / CALL. |
| **`params`** | No | List of declared parameters (`name`, `label`, `default`) — gives each `:placeholder` a form input. |
| **`label`** | No | Short name shown in dropdowns and listings. |
| **`description`** | No | Longer text — shown on the Tables list under the base name. Use it to explain what the query returns. |

---

## Save and reload — what a click does

Saving on this page is atomic across two files when needed:

| Action you took | What gets written |
|---|---|
| Created or edited a query under Tables / Unclassified | The connector file. |
| Used the Scaffold for a sequence or lookup | The connector file **and** the dictionary file (the new entry under `[connectors.<name>.sequences]` or `[connectors.<name>.lookups]`). |
| Cloned a connector (whole app) | A cross-file write that copies the dictionary overlay, screens, menu, charts and dashboards under the new name. Goes through a dedicated endpoint. |
| Renamed a connector, a query or a table | A cross-file update that touches every reference (screens, menus, dictionary, charts, dashboards). Refuses to run when local edits aren't saved. |

After every save the framework runs a **hot reload** automatically. The new query is callable immediately — no restart, no logout.

---

## What you actually do — quick map

| Goal | Read |
|---|---|
| Generate the four CRUD queries from a real database table. | [Create from a database table](./create-from-database.md) — the wizard path, recommended when the table exists. |
| Write a custom query (standalone, hand-written). | [Create a custom query](./create-custom.md). |
| Make a copy of an existing query or of a whole application. | [Clone a query or a connector](./clone.md). |
| Add a sequence (next id) or a lookup (dropdown source). | [Sequences and lookups](./sequences-and-lookups.md). |
| Pass values to a query — both literal and bound (`#LOGIN_USER#`, source columns…). | [Parameter binding](./parameter-binding.md). |
| Ship different SQL for Postgres vs Oracle. | [Per-dialect SQL variants](./per-dialect-sql.md). |

---

## What's next

- [Create from a database table](./create-from-database.md) — start here when the table already lives in your database.
- [Concepts → Connectors](../../connectors.md) — the deep reference behind this page (connector kinds, pools, query lifecycle).
