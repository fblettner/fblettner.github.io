---
title: Step 6 — AI assistant and a daily job
description: "Finish the CRM: the AI assistant answers questions over the CRM's queries within each user's rights, and a Nomaflow job flags stalled deals every morning and notifies the sales team."
keywords: [Liberty Next, tutorial, CRM, AI assistant, ai:chat, allowed connectors, Nomaflow, job, schedule, notifications]
---

# Step 6 — AI assistant and a daily job

Two additions: the **AI assistant**, so that users ask questions in plain language, and a **Nomaflow job** that flags the deals left without news and tells the sales team.

---

## The AI assistant

### Settings

**Settings → App → AI Assistant**: **Enabled**, the **Anthropic API key**, the **Model**, and **Allowed connectors** `crm`. Save. See [AI assistant](../ai-assistant.md).

### Access

In the `crm-sales` role, **Beyond the menus**: **Allow** — *AI assistant*. Save. Bob now has an **AI Assistant** button at the top right.

### Descriptions

The assistant chooses among the queries from their label and description. On the CRM's read queries (Advanced tab of the query editor), write two sentences — what the rows are, which questions they answer:

| Query | Description |
|---|---|
| `customers_get` | `Customers with industry, country, status and e-mail. For questions about the customer base.` |
| `deals_get` | `Deals with customer, stage, amount and expected close date. For pipeline questions.` |
| `pipeline_by_stage_get` | `Open amount per pipeline stage. For pipeline breakdown questions.` |

### Try it

As Bob: *Which deals are in negotiation?* — *What is the open amount per stage?* — *Which customers have no deal?*

The assistant runs read queries only, with Bob's rights and data scope: it sees the French customers only, and it never changes data. See [Expose data to the AI assistant](../cookbook/expose-to-ai.md).

---

## A daily job — stalled deals

A deal without any update for 14 days is flagged, and the sales team gets a notification.

### The query

Add a `stalled` column to deals, then a writable query `flag_stalled_deals`:

```sql
ALTER TABLE deals ADD stalled VARCHAR(1) DEFAULT 'N';
```

```sql
UPDATE deals SET STALLED = 'Y'
WHERE STAGE NOT IN ('WON', 'LOST')
  AND COALESCE(UPDATED_AT, CURRENT_TIMESTAMP - INTERVAL '30' DAY) < CURRENT_TIMESTAMP - INTERVAL '14' DAY
  AND STALLED = 'N'
```

Add `STALLED = 'N'` to `deals_put` so that any change to a deal clears the flag.

### The job

**Nomaflow → Jobs → + New job**:

| Field | Value |
|---|---|
| Id | `crm-stalled-deals` |
| Description | `Flags deals without news for 14 days.` |
| Schedule | `0 8 * * 0-4` — 08:00, Monday to Friday (day 0 is Monday) |
| Timezone | `Europe/Paris` |
| Step | **Add step: `sql_query`**, name `flag-stalled`, connector `crm`, query `flag_stalled_deals`. |
| Alerts | **Send alerts**, **On failure**, recipients `user:<your user>`. |

Save, then **Run with parameters** to run it once: the run detail shows the rows updated. See [Create a job](../../nomaflow/jobs/create.md).

### The notification

**Settings → Notifications**, a rule:

| Field | Value |
|---|---|
| Trigger | A job event — job `crm-stalled-deals`, event `succeeded`. |
| Channels | `portal` |
| Recipients | `role:crm-sales` |
| Subject | `{ROWS} deals without news for 14 days` |

The sales team finds it in the bell every morning. A `STALLED` filter on the Deals screen lists them. See [Notifications](../../nomaflow/notifications.md).

---

## What you have now

A complete CRM built from Settings:

- **Screens** — Customers, Deals, and the Activities of each deal.
- **A dashboard** — the pipeline with KPIs, a chart and the latest activities.
- **Roles** — read-only and sales, with a data scope by country, and company sign-in.
- **An AI assistant** over the CRM's queries, within each user's rights.
- **A daily job** that flags stalled deals, with a notification.

The only code written is SQL.

---

## Where to go from here

| You want to… | Read |
|---|---|
| Apply the pattern to another database or ERP | [What you can build](../what-you-can-build.md) |
| Put the CRM in production | [Production](../../installation/production.md) |
| Move it to another environment | [Packages](../build/packages.md) |
| Find a specific recipe | [Cookbook](../cookbook/crud-existing-table.md) |
