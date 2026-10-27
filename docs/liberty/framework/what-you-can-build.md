---
title: What you can build
description: "What teams build with Liberty Next — admin apps over existing tables, dashboards, an interface over an ERP database, integration and data-loading jobs, workflows with conditional forms — with what the framework provides, what is left to configure, and when another tool fits better."
keywords: [Liberty Next, use cases, admin apps, dashboards, ERP, JD Edwards, integration, ETL, workflow, Nomaflow, examples]
---

# What you can build

Liberty Next combines a few building blocks — connectors and their queries, screens, menus, dashboards, jobs, roles — configured from Settings. This page lists what teams build with them, what each case relies on, and where to start.

The pattern is always the same: **connect the database, write the queries, build the screens, organise the menu, set the roles**.

---

## 1. Admin apps over existing tables \{#admin\}

A database (customers, products, contracts, tickets…) and a team that must read, filter, edit and export it.

| Provided | Where |
|---|---|
| Grid with sorting, filters, grouping and saved views | [Screens](./build/screens/overview.md), [Saved views](./saved-views.md) |
| Edit dialog with tabs, lists of values, conditional fields | [Dialog builder](./build/screens/dialog-builder.md), [Form conditions](./form-conditions.md) |
| Add / edit / delete, in the dialog or in the grid, with Excel / CSV import | [Screens](./build/screens/overview.md) |
| Excel export | [Excel export](./cookbook/excel-export.md) |
| Audit columns filled by the server (`LOGIN`, `SYSDATE`) and a history table (`audit_table`) | [Dictionary](./dictionary.md#rules), [Audit trail](./cookbook/audit-trail.md) |
| Record locks: two users cannot edit the same row at once | [Monitoring](../monitoring/dashboard.md) |
| Interface in English and French, translated labels | [i18n](./apps/i18n.md) |

**To configure**: the pool, the queries (the CRUD wizard writes them from a table), the screens and the menu. Most of the time goes into the SQL.

**Start with**: [Tutorial — Build a CRM](./tutorial-crm/01-setup.md), or [CRUD over an existing table](./cookbook/crud-existing-table.md) for a single screen.

---

## 2. Dashboards \{#dashboards\}

| Provided | Where |
|---|---|
| KPI, chart (bar, line, area, pie) and table widgets on a 12-column grid | [Dashboards](./dashboards.md), [Charts](./charts.md) |
| A period with presets, and the change compared with the previous period | [Dashboards](./dashboards.md) |
| Filters from the dictionary, shared by every widget | [Dashboards](./dashboards.md) |
| A cache with a **Refresh** button | [Dashboards](./dashboards.md) |

**To configure**: the aggregate queries (usually `GROUP BY` on the period), then the widgets.

**Start with**: [Tutorial — CRM → Dashboard](./tutorial-crm/04-dashboard.md).

---

## 3. An interface over an ERP database \{#erp\}

A faster interface for the ERP's operators, reading and writing its database without changing the ERP.

| Provided | Where |
|---|---|
| Oracle, SQL Server and PostgreSQL pools; Oracle thick mode for older servers | [Connectors](./connectors.md#oracle-thick) |
| One app on several environments (development, test, production) through a **Pool** picker | [Connectors → Multi-pool](./connectors.md#multi-pool) |
| JD Edwards conventions: Julian dates, right-justified codes, data dictionary import | [Dictionary](./dictionary.md#formats), [Scan a table](./dictionary.md#scan-a-table) |
| Read-only screens, writes enabled screen by screen | [Screens](./build/screens/overview.md) |

For JD Edwards, the ready-made apps cover the common needs: [Nomajde](../nomajde/overview.md) for administration and master data, [Nomasx-1](../nomasx1/overview.md) for security analysis over any connected application. For another ERP, the [CRM tutorial](./tutorial-crm/01-setup.md) shows the pattern: point the pool at the database and write the queries.

---

## 4. Integration and data loading \{#integration\}

[Nomaflow](../nomaflow/overview.md) runs scheduled or manual jobs made of steps.

| Provided | Where |
|---|---|
| Jobs on a cron schedule or run by hand, with retries (fixed or exponential wait) and a timeout | [Schedules](../nomaflow/jobs/schedules.md), [Steps](../nomaflow/steps.md#retry) |
| Steps: SQL query, SQL copy between databases, file load, HTTP call, LDAP sync, Python, call of another job | [Steps](../nomaflow/steps.md) |
| API connectors with Basic, Bearer, API key or OAuth2 authentication | [Connectors](./connectors.md) |
| Run history per step, live log | [Run history](../nomaflow/runs/history.md) |
| Notifications on failure, success or a missed schedule — in the app, by e-mail, or through a connector | [Notifications](../nomaflow/notifications.md) |

**To configure**: the source and target connectors, then the job's steps. Python only for what the steps cannot express — see [Plugins](./apps/plugins.md).

**Start with**: [Getting started with Nomaflow](../nomaflow/getting-started.md).

---

## 5. Apps for outside users \{#portals\}

An app opened to users outside the team, each seeing only their own rows.

| Provided | Where |
|---|---|
| Sign-in through an OpenID Connect provider | [Sign-in](./build/secure/sign-in.md), [OIDC SSO](./cookbook/oidc-sso.md) |
| Roles: which menus, screens and queries each user reaches | [Roles & permissions](./build/secure/roles-and-permissions.md) |
| Data scope: rows filtered by user attributes, applied by the server | [Row-level access](./cookbook/row-level-access.md) |
| Queries filtered on the signed-in user with `{{LOGIN}}` | [Parameter binding](./build/queries/parameter-binding.md#tokens) |
| App name, colours and fonts | Settings → Theme |

---

## 6. Workflows \{#workflow\}

Approve, reject, escalate: a status column and screens that adapt to it.

| Provided | Where |
|---|---|
| Fields shown, required or locked depending on the status | [Form conditions](./form-conditions.md) |
| Rows read-only once closed (`editable_when`) | [Form conditions](./form-conditions.md#editable-when) |
| Buttons running queries, with confirmation and a prompt for a reason | [Actions and lifecycle](./build/screens/actions-and-lifecycle.md) |
| Notifications when a screen writes a row, or from an action | [Notifications](../nomaflow/notifications.md) |
| Reminder jobs on a schedule | [Nomaflow](../nomaflow/overview.md) |

**Start with**: [Multi-step form](./cookbook/multi-step-form.md).

---

## When another tool fits better

- **Consumer-facing apps.** The grid-and-dialog interface is made for operators.
- **Mobile-first apps.** The application works on a tablet but is designed for a desktop screen.
- **Real-time co-editing.** Record locks prevent conflicting edits; there is no shared live editing.
- **Screens with a unique layout** (Kanban board, Gantt chart, map): the grid-and-dialog model does not suit them.

Liberty Next fits when **most screens list and edit data from a database**, with dashboards, jobs and integrations around them.

---

## Pick your path

| You want to… | Start with |
|---|---|
| Learn the framework on a full example | [Tutorial — Build a CRM](./tutorial-crm/01-setup.md) |
| Build a first screen quickly | [First app walkthrough](./getting-started/first-app.md) |
| Administer JD Edwards | [Nomajde](../nomajde/overview.md) |
| Install the framework | [Installation](../installation/overview.md) |
| Find how to do one thing | The cookbook, starting with [CRUD over an existing table](./cookbook/crud-existing-table.md) |
