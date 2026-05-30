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

## Per-query Clone

A *Clone* button sits in the top-right of the single-query editor (Unclassified / Sequences / Lookups tabs). Clicking it:

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
| **Pool** | Which pool the new connector should run on. Must already exist in *Settings → Pools*. |

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
| The new pool must already exist. | The clone doesn't create databases — wire the pool first via *Settings → Pools*. |
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
| The same query running against a different database. | Don't clone — switch the connector's **pool** in *Settings → Pools*, or use a **per-dialect SQL map**. |

---

## What's next

- [Parameter binding](./parameter-binding.md) — once you've cloned, the cloned query may need different bound values from the original.
- [Per-dialect SQL variants](./per-dialect-sql.md) — for "same query, different SQL" without cloning.
- [Sequences and lookups](./sequences-and-lookups.md) — to add a sequence or lookup to the cloned app.
