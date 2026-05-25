---
title: Step 3 — Deals and relationships
description: "Add the Deals screen with a foreign-key lookup to Customers, polish the dictionary so status values render as coloured chips, and add an Activities sub-grid inside the Deal dialog. Demonstrates lookups, the dictionary and parent-child relationships."
keywords: [Liberty Framework, tutorial, CRM, deals, lookups, dictionary, foreign key, sub-grid, activities]
---

# Step 3 — Deals and relationships

The Customers screen is functional but plain. In this step we add the second entity — **Deals** — with a foreign-key reference to Customers, polish the visual rendering through the **dictionary**, and add an **Activities sub-grid** inside the Deal dialog so users can log calls and meetings against a deal.

By the end of this step the CRM has two related screens with proper chips, dropdowns, and a parent-child relationship. Estimated time: **20 minutes**.

---

## What we're doing and why

Up to now, raw column values flowed straight to the UI — a status was just text, a country was just two letters. Real applications want **labelled chips, dropdowns sourced from a table, related entities inline**.

The framework solves this through three primitives layered on top of the connector + screen pair we already built:

| Primitive | What it gives us | Where it lives |
|---|---|---|
| **Dictionary entry** | A per-column declaration of label, format, and *display rule* (BOOLEAN / ENUM / LOOKUP / PASSWORD). | *Settings → Dictionary → Columns*. |
| **Lookup** | A named query that returns `{ value, label }` pairs — populates dropdowns. | *Settings → Dictionary → Lookups*. |
| **Sub-grid in a dialog tab** | A grid inside the dialog, scoped by the parent's key. | *Settings → Screens → Dialog → Sub-grids*. |

We'll use all three.

---

## Polish the customers screen first

Two quick wins on the customers screen we built last step.

### Add `status` as an ENUM in the dictionary

Open **Settings → Dictionary → Columns → + New column**:

| Field | Value |
|---|---|
| **Name** | `customer_status` |
| **Label** | `Status` *(per-language map; English `Status`, French `Statut`)* |
| **Type** | `string` |
| **Rule** | `ENUM` |
| **Enum values** | The four rows below |

| Value | Label | Colour |
|---|---|---|
| `active`     | Active     | `#4ade80` *(green)* |
| `prospect`   | Prospect   | `#60a5fa` *(blue)* |
| `inactive`   | Inactive   | `#94a3b8` *(grey)* |
| `lost`       | Lost       | `#f87171` *(red)* |

**Save**. Then open **Settings → Connectors → customers → `list` query**, scroll to **Column hints**, and add one row:

| Column | Dictionary entry |
|---|---|
| `status` | `customer_status` |

**Save & reload**.

Reopen the Customers screen. The *Status* column now shows a coloured chip — green `Active` for the three seed rows. The dialog's *Status* field is now a dropdown of the four values. We didn't touch the SQL or the screen.

### Wire `country` to a lookup

The country column is currently a free-text two-letter code. A lookup turns it into a typeahead dropdown.

First the source query — we need a connector that lists countries. We'll piggyback on the **customers** connector by adding a small reference query, since we don't have a separate countries table:

Open **Settings → Connectors → customers → + Add query**:

| Field | Value |
|---|---|
| **Name** | `country-list` |
| **Operation** | Read |
| **SQL** | The query below |

```sql
-- ISO 3166 short list for the tutorial. In a real app, this would come from a countries table.
SELECT 'FR' AS code, 'France'         AS label UNION ALL
SELECT 'DE',         'Germany'        UNION ALL
SELECT 'BE',         'Belgium'        UNION ALL
SELECT 'IT',         'Italy'          UNION ALL
SELECT 'ES',         'Spain'          UNION ALL
SELECT 'GB',         'United Kingdom' UNION ALL
SELECT 'US',         'United States'  UNION ALL
SELECT 'CA',         'Canada';
```

Click **▶ Test** to confirm the eight rows. **Save & reload**.

Now define the lookup. **Settings → Dictionary → Lookups → + New lookup**:

| Field | Value |
|---|---|
| **Name** | `countries` |
| **Connector** | `customers` ▾ |
| **Query** | `country-list` ▾ |
| **Value column** | `code` |
| **Label column** | `label` |
| **Cache** | `Per session` |

**Save**.

Back in **Settings → Dictionary → Columns → + New column**:

| Field | Value |
|---|---|
| **Name** | `country_code` |
| **Label** | `Country` / `Pays` |
| **Type** | `string` |
| **Rule** | `LOOKUP` |
| **Lookup** | `countries` ▾ |

**Save**. Then on the customers connector's `list` query, add another column hint:

| Column | Dictionary entry |
|---|---|
| `country` | `country_code` |

**Save & reload**.

Open the Customers screen again. The *Country* column now shows `France`, `Germany`, `France` (resolved labels), and the dialog's *Country* field is a typeahead dropdown of the eight countries.

---

## Build the Deals connector

Same pattern as before — one connector with four queries.

Open **Settings → Connectors → + New connector**:

| Field | Value |
|---|---|
| **Name** | `deals` |
| **App** | `crm` |
| **Type** | `SQL` |
| **Pool** | `default` |
| **Description** | `Sales deals — pipeline stage, amount, expected close.` |

### `list` query

| Field | Value |
|---|---|
| **Name** | `list` |
| **Operation** | Read |
| **SQL** | The query below |

```sql
SELECT d.id,
       d.name,
       d.customer_id,
       c.name AS customer_name,
       d.stage,
       d.amount,
       d.currency,
       d.close_date,
       d.owner
FROM   deals d
JOIN   customers c ON c.id = d.customer_id
WHERE  (:customer_id IS NULL OR d.customer_id = :customer_id)
  AND  (:stage       IS NULL OR d.stage = :stage)
ORDER BY d.close_date;
```

Note the two optional parameters — `customer_id` and `stage`. Declare them in the *Parameters* sub-table:

| Name | Type | Required | Label | Lookup |
|---|---|---|---|---|
| `customer_id` | int    | — | Customer | — |
| `stage`       | string | — | Stage    | — |

Don't set defaults — the query handles `NULL` with the `IS NULL OR` pattern.

Click **▶ Test**. Four rows.

### Lookup for customers (FK)

Before the write queries, define a lookup that lets the deal form pick a customer by name.

**Settings → Dictionary → Lookups → + New lookup**:

| Field | Value |
|---|---|
| **Name** | `customers-list` |
| **Connector** | `customers` |
| **Query** | `list` *(re-using the existing read query)* |
| **Value column** | `id` |
| **Label column** | `name` |
| **Cache** | `Per session` |

**Save**.

Same idea for the deal stages — re-use a small reference query. Add to the `deals` connector:

```sql
SELECT code, label, colour FROM deal_stages ORDER BY ord;
```

Name it `stages-list`. Then a dictionary lookup pointing at it (`stages`, value = `code`, label = `label`, colour column = `colour` — gives the chips their colour).

Two dictionary columns now reference these lookups:

| Column entry | Rule | Lookup | Description |
|---|---|---|---|
| `customer_id` *(reuse if it exists)* | LOOKUP | `customers-list` | Customer FK on the deal. |
| `deal_stage` | LOOKUP | `stages` | Pipeline stage. |

On the `deals.list` query's **Column hints**:

| Column | Dictionary entry |
|---|---|
| `customer_id` | `customer_id` |
| `stage`       | `deal_stage` |
| `amount`      | *(create a new dictionary entry `money`: type `decimal`, format `1 234,56 €`)* |

### Write queries

```sql
-- create
INSERT INTO deals (customer_id, name, stage, amount, currency, close_date, owner, created_at)
VALUES (:customer_id, :name, :stage, :amount, :currency, :close_date, :session_user, CURRENT_TIMESTAMP)
RETURNING id;

-- update
UPDATE deals SET
  customer_id = :customer_id,
  name = :name,
  stage = :stage,
  amount = :amount,
  currency = :currency,
  close_date = :close_date
WHERE id = :id;

-- delete
DELETE FROM deals WHERE id = :id;
```

**Save & reload**.

---

## Build the Deals screen

**Settings → Screens → + New screen**:

| Field | Value |
|---|---|
| **Id** | `crm/deals` |
| **Title** | `Deals` |
| **App** | `crm` |
| **Key columns** | `id` |
| **Editable** | ✓ |

### Read connector

| Field | Value |
|---|---|
| **Connector** | `deals` |
| **Query** | `list` |
| **Default sort** | `close_date` ascending |

### Grid columns

| Column | Notes |
|---|---|
| `name` | The deal label. |
| `customer_name` | From the JOIN. |
| `stage` | Renders as coloured chip via the dictionary. |
| `amount` | Renders as `1 234,56 €` via the dictionary. |
| `close_date` | Formatted as `dd/MM/yyyy` (Step 4 will polish this). |

### Dialog fields

One tab — `Details` — with:

- `customer_id` (LOOKUP dropdown into customers)
- `name`
- `stage` (LOOKUP dropdown into stages)
- `amount`
- `currency`
- `close_date`

### Actions

Add → `deals/create`, Save → `deals/update`, Delete → `deals/delete`.

**Save & reload**.

Add the leaf to the **crm** menu (Settings → Menus → crm → + Add leaf), pointing at `crm/deals` with the icon `briefcase`. **Save & reload**.

The Deals screen lights up in the sidebar.

---

## Add an Activities sub-grid

The activities table stores notes against deals. Rather than a separate top-level screen, we'll embed activities **inside** the deal dialog so the user sees a deal's history right where they edit it.

### Activities connector

```sql
-- activities.list
SELECT id, deal_id, kind, notes, happened_at, recorded_by
FROM   activities
WHERE  deal_id = :deal_id
ORDER BY happened_at DESC;

-- activities.create
INSERT INTO activities (deal_id, kind, notes, happened_at, recorded_by)
VALUES (:deal_id, :kind, :notes, CURRENT_TIMESTAMP, :session_user)
RETURNING id;

-- activities.delete
DELETE FROM activities WHERE id = :id;
```

Wire the `kind` column as an ENUM dictionary entry with values `call`, `meeting`, `email`, `note` (different colours).

### Wire the sub-grid

Open the **Deals screen** → **Dialog tab** → **+ Add tab**:

| Field | Value |
|---|---|
| **Label** | `Activities` |
| **Content** | `Sub-grid` *(switches the tab from "fields" mode to "grid" mode)* |

In the sub-grid panel:

| Field | Value |
|---|---|
| **Connector** | `activities` |
| **Query** | `list` |
| **Parameter binding** | `deal_id ← <parent>.id` *(the framework binds the parent dialog's `id` to the sub-grid's `deal_id` param automatically)* |
| **Editable** | ✓ |
| **Add connector / query** | `activities` / `create` |
| **Delete connector / query** | `activities` / `delete` |

The sub-grid auto-shapes its grid from the `list` query (`kind`, `notes`, `happened_at`, `recorded_by`) and its mini-dialog from the columns.

**Save & reload**.

---

## See it work

Open **CRM → Deals**, click the *Globex Logistics* deal. The dialog opens with two tabs — *Details* (the fields we wired) and *Activities* (empty for the seed data).

Switch to the *Activities* tab, click **+ Add**, log a quick `meeting` note. Save. The activity shows up in the sub-grid; the *Recorded by* column is `admin` (filled in by the form-layer `LOGIN` default).

Try the customer-name column on the Deals grid — clicking the chip-style value should take you to the Customers screen pre-filtered to that customer. (We get that for free because the `customer_id` column is a `LOOKUP` against the customers list.)

---

## What you have now

Two screens, one parent-child relationship, polished rendering through the dictionary. The CRM is starting to feel real.

What's still missing:

- An **overview** — KPIs and a chart that summarise the pipeline. Coming in [Step 4](./04-dashboard.md).
- **Real roles** — today everything is admin-only. Coming in [Step 5](./05-auth.md).
- **AI** and **scheduled jobs** — coming in [Step 6](./06-ai-and-jobs.md).

→ **[Step 4 — Sales pipeline dashboard](./04-dashboard.md)** — KPIs, chart, drill-down.
