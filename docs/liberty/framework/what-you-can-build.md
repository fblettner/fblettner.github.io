---
title: What you can build
description: "Concrete use cases for the Liberty Framework — internal admin tools, BI dashboards, ERP administration, integration glue, customer portals, ETL orchestration. Each section shows what the framework does for you, what you still write, and how long it takes."
keywords: [Liberty Framework, use cases, internal apps, admin tools, BI dashboards, ERP, JDE, integration, ETL, customer portal, examples]
---

# What you can build

The framework is small on purpose — a handful of concepts that compose into a wide surface. This page is the catalogue of what teams actually build with it, with the **path** for each: how much is configuration, how much is custom code, how the existing tutorials and cookbook recipes plug in.

If you're not sure whether the framework fits your problem, this page is the place to check.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>📋 Internal admin apps</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>CRUD over existing tables, role-gated, with a sensible default UX. The framework's bread and butter — 1 day from "I have a database" to "users are using it".</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '6px'}}>📊 BI dashboards</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>KPIs and charts over named SQL queries. Shared filter bar, drill-down to grids, PDF export. No separate BI tool needed for the 80% case.</div>
  </div>
  <div style={{border: '1px solid rgba(34,197,94,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(34,197,94,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#22c55e', marginBottom: '6px'}}>🗄 ERP administration</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>A modern UI over JD Edwards, SAP or NetSuite — users, security, BIP queue, master data. Doesn't replace the ERP; gives operators a faster way to live in it.</div>
  </div>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '6px'}}>🔌 Integration glue</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>UI on top of webhook receivers, scheduled syncs, ETL pipelines. Nomaflow runs the jobs; the framework renders the runs.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>🤝 Customer portals</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>A scoped slice of an internal app exposed to outside users via OIDC. Row-level access, audit trail, file uploads — all framework-native.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '12px', padding: '18px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '6px'}}>⚙ Workflow orchestration</div>
    <div style={{fontSize: '12px', lineHeight: '1.55'}}>Approve / reject / route — multi-step forms, status workflows, scheduled escalations. Form conditions handle the per-state UX; Nomaflow handles the timers.</div>
  </div>
</div>

The pattern is the same for every use case: **define the data sources, point the screens at them, organise the menu, set the permissions**. The differences are in which features get the spotlight.

---

## 1. Internal admin apps

The canonical use case. You have a database (users, products, contracts, tickets — anything) and you want a clean interface for the team to look at the data, edit it, filter it, export it.

### What the framework does for you

| Feature | Built in |
|---|---|
| **Grid** with sortable / filterable columns, pagination, multi-select. | ✓ |
| **Edit dialog** with tabs, fields, validation, save flow. | ✓ |
| **Add / Edit / Delete** actions with role-based gates. | ✓ |
| **Excel export** of the current filtered view. | ✓ |
| **Audit columns** (`created_by`, `created_at`, `updated_by`, `updated_at`) auto-populated on save. | ✓ |
| **Record locks** — two operators can't edit the same row simultaneously. | ✓ |
| **Localisation** — every label, every status, every error message. | ✓ |

### What you write

| Task | Time |
|---|---|
| Decide which tables your app needs. | A few minutes. |
| Configure the pool that points at your database. | 2 minutes — paste the JDBC URL, test connection. |
| Write **one SQL read query per screen** (`SELECT ... FROM ...`). | 5–10 minutes per screen. |
| Write the write queries (`INSERT`, `UPDATE`, `DELETE`) for editable screens. | 5 minutes per screen. |
| Pick the columns to show, the dialog tabs to expose, the field widgets. | 5–10 minutes per screen in the Settings UI. |

A typical 10-screen admin app, with one operator who knows the schema, lands in **a day**. Most of the time goes into the SQL.

### Walkthrough

The **[Build a CRM tutorial](./tutorial-crm/01-setup.md)** is exactly this — customers, deals, activities, with relationships and a dashboard on top. Six guided steps, end-to-end.

For a recipe-style cheat sheet on a single CRUD screen, see **[Cookbook → CRUD over an existing table](./cookbook/crud-existing-table.md)**.

---

## 2. BI dashboards

The framework has built-in [charts](./charts.md) (line, bar, pie, area, scatter), [dashboards](./dashboards.md) (12-column layout with stat / chart / table panels) and a [shared filter bar](./dashboards.md) that propagates a period or a scope across every panel.

### What the framework does for you

| Feature | Built in |
|---|---|
| **Stat panels** with delta vs the previous period and trend sparklines. | ✓ |
| **Charts** wrapping named SQL queries — colour palettes, legends, tooltips, stacking. | ✓ |
| **Tables** as small "top 5 rejected / pending / overdue" panels. | ✓ |
| **Shared filter bar** propagating a period, a company, a region across every panel. | ✓ |
| **Drill-down** from any panel to the underlying screen, pre-filtered. | ✓ |
| **PDF export** of the rendered dashboard. | ✓ |
| **Permission pruning** — panels referencing queries the caller can't run disappear silently. | ✓ |

### What you write

| Task | Time |
|---|---|
| Write the SQL queries that aggregate your data (typically `GROUP BY` per period). | The bulk of the work — 10–30 minutes per query depending on the join complexity. |
| Wire a chart per query and a stat per KPI. | 2 minutes per chart in the Settings UI. |
| Lay them out on the dashboard grid. | 5 minutes. |

A dashboard with 4 KPIs + 2 charts + 1 drill-down table — half a day, with most of the time going into SQL.

### Walkthrough

[Tutorial — CRM → Step 4 "Sales pipeline dashboard"](./tutorial-crm/04-dashboard.md) walks through it.

---

## 3. ERP administration (JD Edwards, SAP, NetSuite)

ERPs ship with native UIs that are functional but slow, dated and clunky. The framework gives you a modern interface **on top of the ERP's database**, without modifying the ERP itself.

### What the framework does for you

| Feature | Built in |
|---|---|
| **Connect to JDE / SAP / NetSuite** via Oracle or SQL Server pools. | ✓ |
| **Read ERP master data** — users, addresses, items, accounts, work centres. | ✓ |
| **Visualise security** — roles, permissions, object tracking, audit trail. | ✓ |
| **Monitor batch jobs** — BIP print queue, job submissions, scheduler. | ✓ |
| **Per-environment views** — DV / PY / PD with the same screens. | ✓ |
| **Read-only by default** for safety, write paths added explicitly per screen. | ✓ |

### What you write

| Task | Time |
|---|---|
| Define the ERP pool — Oracle URL, schema, credentials. | 5 minutes (Oracle thin mode, no client install needed). |
| Write SELECT queries against the ERP tables. | The interesting part — needs ERP-table knowledge. |
| Set screens to *read-only* by default; opt into write paths intentionally. | A line per screen. |

### How to get there

JD Edwards has a packaged answer: **[Nomajde](https://docs.nomana-it.fr/nomajde/)** is a Nomana-IT vendor app built on the framework that ships a complete JDE admin — F0092 users, security workbench, BIP queue, master data, audit. Install it, point it at your JDE database, you're done. No tutorial needed.

For SAP (`SAPSR3` schema), NetSuite (suite-analytics API), Microsoft Dynamics (on-prem SQL backend) or a non-ERP "admin over an existing database", the [Build a CRM tutorial](./tutorial-crm/01-setup.md) walks through the framework's full surface — the same pattern transfers, you just point the pool at the right database and write the queries.

The Nomana-IT vendor app [Nomasx-1](https://docs.nomana-it.fr/liberty/nomasx-1/overview) is another productionised example of this pattern — security maintenance over JDE / SAP / NetSuite. Both Nomasx-1 and Nomajde are license-gated; the framework underneath is the same one this documentation describes.

---

## 4. Integration glue

The framework's [Jobs / Nomaflow](./jobs/overview.md) engine + HTTP connectors + scheduled triggers cover the "integration platform" need without a separate tool.

### What the framework does for you

| Feature | Built in |
|---|---|
| **Cron-scheduled jobs** with retry, timeouts, single-instance lock. | ✓ |
| **HTTP / REST connectors** with auth (Basic, Bearer, OAuth2), parameters, response shaping. | ✓ |
| **SQL-to-SQL copy** with type coercion, chunking, atomic table swap. | ✓ |
| **LDAP sync** with attribute mapping and upsert. | ✓ |
| **Webhook receivers** — REST endpoints exposed by the framework. | ✓ |
| **Run history** with per-step input / output / logs. | ✓ |
| **Live log tail** over Socket.IO. | ✓ |
| **Failure notifications** to Slack / email / webhook. | ✓ |

### What you write

| Task | Time |
|---|---|
| Define the source and target connectors. | 5 minutes each. |
| Write the job step definitions in the Jobs builder. | 10–30 minutes per job. |
| Custom Python only for what doesn't fit the declarative step types. | The escape hatch — rarely needed. |

### Walkthrough

[Tutorial — CRM → Step 6 "AI and jobs"](./tutorial-crm/06-ai-and-jobs.md) covers a scheduled job that re-runs nightly. For a runnable recipe, [Cookbook → Scheduled report email](./cookbook/scheduled-report-email.md).

---

## 5. Customer portals

A customer portal is just **an internal admin app scoped to row-level data of one tenant**. The framework's permission model (`sql:<connector>:<query>` codes + the `session.user` placeholder) covers the row-level isolation without bespoke code.

### What the framework does for you

| Feature | Built in |
|---|---|
| **OIDC sign-in** — your IdP, the customer's IdP, or both. | ✓ |
| **Per-user row filtering** via `WHERE owner = :session_user` patterns. | ✓ |
| **Permission codes per screen** — your operators see different screens from the customer. | ✓ |
| **File upload** and download. | ✓ |
| **Audit trail** of every write the customer performs. | ✓ |
| **Branded UI** — customer-app theme, custom logo, custom favicon. | ✓ |

### What you write

| Task | Time |
|---|---|
| Wire OIDC against your IdP (or the customer's). | 10 minutes per IdP. |
| Add `WHERE owner = :session_user` to every customer-facing query. | A line per query. |
| Give the customer a single role with the right permissions. | 2 minutes. |

### Walkthrough

The roles + OIDC parts are in [Tutorial — CRM → Step 5 "Roles and SSO"](./tutorial-crm/05-auth.md). The row-level filter pattern is documented under [Cookbook → Row-level access](./cookbook/row-level-access.md).

---

## 6. Workflow orchestration

The combination of [screens](./screens.md) + [form conditions](./form-conditions.md) + [jobs](./jobs/overview.md) covers most state-machine workflows — approve / reject, escalate, route to the right team.

### What the framework does for you

| Feature | Built in |
|---|---|
| **Status field** rendered as a coloured chip with role-gated transitions. | ✓ |
| **Multi-step forms** — a long process split across tabs of the same dialog. | ✓ |
| **Per-state visibility** — "Comments" field only visible after Submit; "Reject reason" only on Reject. | ✓ |
| **Scheduled escalations** — a job that nags after N days in a state. | ✓ |
| **Notifications** to the relevant operator on state changes. | ✓ |

### What you write

| Task | Time |
|---|---|
| Model the state machine in your database (a `status` column + a `transitions` table if you want fine-grained gates). | One table. |
| Wire the conditions on form fields. | Per-field, but fast — see the editor in [Form conditions](./form-conditions.md). |
| Wire the notifications on the status-change write query. | A few minutes. |

### Walkthrough

[Cookbook → Multi-step form](./cookbook/multi-step-form.md) is the runnable recipe.

---

## 7. ETL and data warehousing

For teams that ingest data from multiple sources into a warehouse, Nomaflow + the framework's connectors cover the orchestration **and** the operator UI.

### What the framework does for you

| Feature | Built in |
|---|---|
| **`sql_copy` step** — streams rows source → target with type coercion, chunking, atomic rename. | ✓ |
| **Per-step retry** with exponential backoff. | ✓ |
| **Concurrency control** — single-instance per job. | ✓ |
| **Dependencies** between jobs. | ✓ |
| **A UI to monitor every run**, with live log tail. | ✓ |

### What you write

| Task | Time |
|---|---|
| Define the source and target pools. | 5 minutes each. |
| Write the source queries (often plain `SELECT * FROM source_table`). | Trivial. |
| Wire the job in the Jobs builder. | 10 minutes per copy. |

### Walkthrough

[Cookbook → Bulk import](./cookbook/bulk-import.md) covers the inbound side; the [Jobs documentation](./jobs/overview.md) covers the orchestration.

---

## When the framework isn't the right tool

Honesty section:

- **Public consumer apps.** The grid + dialog UX is operator-oriented, not consumer-oriented. Use Next.js / Remix for that.
- **Mobile-first apps.** The SPA works on mobile but isn't built for it. Use React Native / Flutter for native.
- **Real-time collaboration apps.** Locks prevent concurrent edits, but the framework doesn't ship operational-transform or CRDTs. Use Yjs / Liveblocks.
- **Heavy custom UX.** If most of your screens need a unique layout (a Kanban board, a Gantt chart, a map), the framework's grid + dialog grammar fights you. Better to embed custom React routes; or pick a different tool.
- **Static marketing sites.** Use a static-site generator.

The framework is the right tool when **most of your screens are list-and-edit on top of a database**, with sprinklings of dashboards, jobs and integrations. Which describes the vast majority of internal applications.

---

## Pick your path

| You are… | Start with |
|---|---|
| **New to the framework and want a clean tutorial** | [Tutorial — Build a CRM](./tutorial-crm/01-setup.md) — six steps, generic domain. |
| **Planning a JDE admin** | Install the packaged app [Nomajde](https://docs.nomana-it.fr/nomajde/) — JDE-specific, no DIY needed. |
| **Planning a SAP / NetSuite / other ERP admin** | Walk through [Tutorial — Build a CRM](./tutorial-crm/01-setup.md), the framework pattern transfers. |
| **Just installing it for the first time** | [Getting Started → Installation](./getting-started/installation.md). |
| **Looking up how to do X specifically** | [Cookbook](./cookbook/crud-existing-table.md) — short recipes. |
| **Reading the framework's grammar first** | [Connectors](./connectors.md) is the natural entry point. |
