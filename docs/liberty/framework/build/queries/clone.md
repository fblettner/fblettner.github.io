---
title: Clone a query or a connector
description: "Duplicate one query inside a connector, duplicate every CRUD query of a table, or clone a whole application (connector + dictionary + screens + menu + dashboards + charts)."
keywords: [Liberty Framework, clone query, duplicate, clone connector, clone app, ConnectorsBuilder]
---

# Clone a query or a connector

Liberty's Connectors page has **three** clone affordances, each with a different scope. They look similar — Clone buttons next to each other — but they touch different files and ask for different inputs. Pick the right one or you'll be writing more than you meant to.

| Affordance | Scope | Touches |
|---|---|---|
| **Per-query Clone** | One single query. | The connector file only. |
| **Duplicate table** | The four CRUD queries of one table. | The connector file only. |
| **Clone app** | The whole connector + everything scoped under it. | Connector file + dictionary + screens + menu + dashboards + charts. |

Each is covered below with when to use it.

---

## At a glance

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="clq-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="clq-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="clq-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="clq-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="320" rx="14" fill="url(#clq-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">monthly_revenue</text>
  <rect x="240" y="56" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Back</text>
  <rect x="301" y="56" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="342.5" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Find usages</text>
  <rect x="390" y="56" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="417.5" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Rename</text>
  <rect x="451" y="56" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="492.5" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Change type</text>
  <rect x="540" y="56" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="562.0" y="70.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Move</text>
  <rect x="590" y="56" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="615.0" y="70.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="646" y="56" width="55" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="673.5" y="70.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Delete</text>
  <line x1="240" y1="92" x2="960" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="104" width="720" height="80" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="126" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS MONTH,</text>
  <text x="254" y="146" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">       SUM(total) AS REVENUE FROM invoices GROUP BY 1</text>
  <rect x="380" y="196" width="440" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="396" y="220" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Clone query</text>
  <text x="396" y="242" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">New name for the copy of "monthly_revenue":</text>
  <rect x="396" y="252" width="408" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="406" y="266.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">monthly_revenue_copy</text>
  <rect x="640" y="284" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="678.0" y="298.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="724" y="284" width="80" height="22" rx="5" fill="url(#clq-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="764.0" y="298.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Clone</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Query buttons</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rename, move, clone…</text>
  <line x1="210" y1="67.0" x2="240" y2="67" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clone</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">same SQL, params, variants</text>
  <line x1="1000" y1="137.0" x2="618" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New name</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;name&gt;_copy proposed</text>
  <line x1="1000" y1="247.0" x2="804" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#clq-arrow)"/>
</svg>

---

## Per-query Clone

A *Clone* button sits in the top-right of the single-query editor (Queries, Sequences and Lookups views). Clicking it:

1. Prompts for a new name (default `<original>_copy`).
2. Deep-copies the query — name only differs; SQL, params, `writable`, `label`, `description`, per-dialect SQL map, every nested field is JSON-cloned and independent.
3. Appends the clone to the connector's queries list.
4. Selects the clone so you can immediately edit it.

The page is then dirty — hit the top toolbar's **Save** to persist.

### When to use it

| Pattern | Why clone |
|---|---|
| You want a variant of an existing query — same shape, different filter. | The clone preserves params and per-dialect SQL; you only edit the WHERE clause. |
| You need a `_v2` of a query while the old one stays. | Lets a screen keep using the old query while a new screen wires the new one. |
| You're experimenting. | Clone, mangle the copy, keep the original safe. |

### What changes — and what doesn't

| Stays the same | Changes |
|---|---|
| SQL, params, writable, label, description, per-dialect map. | Only the `name`. |
| | Cross-file references to the original — they still point at the original. The clone is a brand-new query nobody references yet. |

If you want references **moved** to the clone, that's a Rename, not a Clone (and Rename is destructive — it deletes the old name once the references are repointed).

---

## Duplicate table

When the right pane is in **Tables** mode, each row carries a *Duplicate* icon (the copy icon to the right of the CRUD slot badges). Clicking it:

1. Prompts for a new base name (default `<base>_copy`).
2. Deep-copies **every CRUD slot** of the table — `<base>_get` → `<copy>_get`, `<base>_put` → `<copy>_put`, etc. Only the slots that exist are cloned (a read-only table with just `_get` clones one query).
3. Appends the clones to the queries list.
4. Selects the new base name in the Tables list.

### When to use it

| Pattern | Why |
|---|---|
| Two screens that share a table shape but need different filters or column lists. | Duplicate, edit the `_get` SELECT clause on the copy. The two screens stay independent. |
| Sandbox version of a production table. | Duplicate to `<base>_sandbox`, point at a sandbox schema, screens keep the original. |
| Multi-tenant per-tenant variant. | Duplicate per tenant, swap the schema name in each. (For a single tenant identifier passed at runtime, use `:placeholder` params on one shared query instead — see [Parameter binding](./parameter-binding.md).) |

The duplicate is a one-shot copy — future edits to the original don't propagate. For "one definition, many invocations" use **per-dialect SQL** (the same connector pool, different DBs) or **shared params** (one query, different bound values).

---

## Clone app — the whole application

The biggest of the three. Reached from:

- The **Clone** button in the right pane's *Settings* tab when an Apps-class connector is selected, or
- The same Clone button for any connector — the modal lets you pick which one to clone from.

The modal asks for three values:

| Field | What it does |
|---|---|
| **Source connector** | Which connector to copy from. Defaults to the one you selected. |
| **New name** | The new connector key (lowercase, starts with a letter — same identifier rules as elsewhere). |
| **Pool** | Which pool the new connector should run on. Must already exist in *Liberty Next → Administer → Pools*. |

Clicking **Clone** triggers a cross-file copy through a dedicated endpoint. Liberty:

1. Copies the **connector** entry to the new key, with the new pool wired in.
2. Copies the connector's **dictionary overlay** (the `[connectors.<source>]` block in dictionary).
3. Copies the **screens** for that connector.
4. Copies the **menu** for that connector.
5. Copies the **dashboards** and **charts** scoped under the connector.
6. Reloads the framework so the new app appears in the top switcher immediately.

The status banner reports the number of entries copied; warnings (e.g. matching menu app key not renamed) ride alongside.

### When to use it

| Pattern | Example |
|---|---|
| Parallel deployment for testing. | Clone `nomasx1` to `nomasx1b`, point at a fresh DB pool, run regression tests against the clone. |
| Per-customer instance. | Clone the base app per tenant; each gets its own pool, dictionary overlay and menu. |
| Major version of an app. | Clone `crm` to `crm_v2`, do destructive refactors on `crm_v2`, keep the old one running until cutover. |

### Constraints

| Constraint | Why |
|---|---|
| The new pool must already exist. | The clone doesn't create databases — wire the pool first via *Liberty Next → Administer → Pools*. |
| The source connector must not have unsaved edits. | The clone reads from disk; unsaved local edits would be missed. The button is disabled in the dirty state with an explanatory tooltip. |
| The new name must not collide. | The framework rejects duplicate connector keys; the modal validates before submit. |

---

## Side-by-side

| You want… | Use |
|---|---|
| A copy of one query (different filter, variant SQL). | **Per-query Clone**. |
| A copy of every CRUD slot of one table. | **Duplicate table**. |
| A copy of every query + dictionary entries + screens + menu + dashboards + charts. | **Clone app**. |
| A new query with the same name pointing somewhere else. | Don't clone — **Rename** the existing one and create a new one. |
| The same query running against a different database. | Don't clone — switch the connector's **pool** in *Liberty Next → Administer → Pools*, or use a **per-dialect SQL map**. |

---

## What's next

- [Parameter binding](./parameter-binding.md) — once you've cloned, the cloned query may need different bound values from the original.
- [Per-dialect SQL variants](./per-dialect-sql.md) — for "same query, different SQL" without cloning.
- [Sequences and lookups](./sequences-and-lookups.md) — to add a sequence or lookup to the cloned app.
