---
title: Step 2 — The Customers screen
description: "Build the first screen of the CRM: a SQL connector that reads + writes the customers table, a screen that turns it into a grid + edit dialog, and a menu entry that opens it. Demonstrates the full pool → connector → screen → menu flow."
keywords: [Liberty Framework, tutorial, CRM, customers, connector, screen, menu, edit dialog, settings]
---

# Step 2 — The Customers screen

Time to build the first screen. We'll wire the `customers` table into a working interface: list view with filters, edit dialog, save / add / delete. Three Settings tabs touched — *Connectors*, *Screens*, *Menus* — about 10 minutes of clicking.

By the end of this step the *Customers* entry appears in the sidebar and clicking a row opens an editable dialog. Estimated time: **15 minutes**.

---

## What we're doing and why

The framework's mental model: **a connector knows how to talk to a data source; a screen knows how to render it; a menu makes it reachable**. Three concepts, three Settings tabs, in that order.

Why this order matters:

1. The **connector** owns the SQL — both the read query that feeds the grid and the write queries that handle save / add / delete. It's defined first because everything downstream references it.
2. The **screen** wraps the connector into a UI. It needs the connector to already exist (the screen picks it from a dropdown).
3. The **menu** entry needs the screen to already exist (same reason).

If you find yourself jumping between tabs, that's fine — but the natural flow is left-to-right.

---

## Define the customers connector

Open **Settings → Connectors → + New connector**.

### Connection sub-form

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{fontWeight: 700, marginBottom: '10px'}}>Connection</div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>customers</span></div>
    <div style={{opacity: 0.75}}>App</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>crm ▾</span></div>
    <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '11px', fontWeight: 600}}>SQL ▾</span></div>
    <div style={{opacity: 0.75}}>Pool</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>default ▾</span></div>
    <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Customer accounts — list, edit, deactivate.</span></div>
  </div>
</div>

The *Description* matters more than it looks: it's surfaced on the catalogue, in the AI assistant tool list (Step 6) and as the tooltip when other operators reference this connector. Two sentences in the user's language.

### Queries sub-form

We need four queries: one read, three writes.

#### Read query — `list`

Click **+ Add query** in the *Queries* section.

| Field | Value |
|---|---|
| **Name** | `list` |
| **Label** | `List customers` |
| **Operation** | Read |
| **SQL** | The query below |
| **Description** | `Returns every customer with their status, industry and primary contact.` |

```sql
SELECT id,
       name,
       industry,
       country,
       status,
       primary_email,
       created_at,
       updated_at
FROM   customers
ORDER BY name;
```

Click **▶ Test**. The framework runs the query, shows the three seed rows and discovers the schema. Eight column chips appear at the bottom — `id`, `name`, `industry`, `country`, `status`, `primary_email`, `created_at`, `updated_at`. Note them; we'll use them in the screen.

#### Write query — `create`

Click **+ Add query** again.

| Field | Value |
|---|---|
| **Name** | `create` |
| **Operation** | Write |
| **SQL** | The query below |

```sql
INSERT INTO customers (name, industry, country, status, primary_email, created_by, created_at)
VALUES (:name, :industry, :country, :status, :primary_email, :session_user, CURRENT_TIMESTAMP)
RETURNING id;
```

Note `:session_user` — that's the magic placeholder the framework binds to the JWT's `sub` claim (the calling user's identifier). It's how the audit columns get populated without trusting the client.

In the **Parameters** sub-table, declare `name`, `industry`, `country`, `status`, `primary_email` — all `string`, none required (we let the form decide).

#### Write query — `update`

```sql
UPDATE customers
SET    name = :name,
       industry = :industry,
       country = :country,
       status = :status,
       primary_email = :primary_email,
       updated_by = :session_user,
       updated_at = CURRENT_TIMESTAMP
WHERE  id = :id;
```

Declare an `id` parameter (`int`, required) and the same five business parameters.

#### Write query — `delete`

```sql
DELETE FROM customers WHERE id = :id;
```

One parameter — `id`, `int`, required.

### Save the connector

Click **Save & reload** at the top right. The catalogue now shows a `customers` row under the *crm* app, status **connected**, with **4 queries**.

### What just happened

You created the **first surface** of the CRM: a reusable definition of how to read and write customer data. Anything that needs customer data from now on — screens, dashboards, charts, jobs, the AI assistant — will reference this connector rather than re-writing the SQL.

The four queries also generated four **permission codes** automatically:

- `sql:customers:list` — required to run the read query.
- `sql:customers:create:write` / `sql:customers:update:write` / `sql:customers:delete:write` — required for each of the write operations.

Today the `admin` user carries every code via the `*` wildcard, so nothing's gated. Step 5 introduces real roles.

---

## Build the Customers screen

Open **Settings → Screens → + New screen**.

### General sub-form

| Field | Value |
|---|---|
| **Id** | `crm/customers` (Id of the form `app/name`) |
| **Title** | `Customers` |
| **App** | `crm` *(pre-filled from the Id)* |
| **Description** | `Customer accounts list with inline edit dialog.` |
| **Key columns** | `id` *(multi-select; in this case just one)* |
| **Default page size** | `50` |
| **Editable** | ✓ *(on — enables Add / Edit / Delete)* |

### Read connector sub-form

| Field | Value |
|---|---|
| **Connector** | `customers` ▾ |
| **Query** | `list` ▾ |
| **Default sort** | `name`, ascending |

A *Preview* button at the top runs the query and shows the discovered columns. We'll pick from them next.

### Grid sub-form

The framework offers the discovered columns in a left palette; drag the ones we want into the layout on the right.

For a clean default view, include:

| Column | Label | Notes |
|---|---|---|
| `name` | Name | Wide column. |
| `industry` | Industry | |
| `country` | Country | |
| `primary_email` | Email | |
| `status` | Status | We'll style this as a coloured chip in [Step 3](./03-deals.md) using the dictionary. |
| `updated_at` | Last modified | Right-aligned. |

Leave `id`, `created_at`, `created_by`, `updated_by` in the catalog (operator can add them on demand) but unchecked in the default view.

### Dialog sub-form

The *Dialog* tab defines what happens when the operator clicks a row. We'll add **one tab** (`Details`) with five fields.

| Field | Source column | Widget | Notes |
|---|---|---|---|
| **Name** | `name` | Text | Required. |
| **Industry** | `industry` | Text | |
| **Country** | `country` | Text | We'll wire it to a Country lookup in Step 3 — for now a plain text input. |
| **Status** | `status` | Text | Same — will become a dropdown in Step 3. |
| **Primary email** | `primary_email` | Text | |

The framework derives the widget from the discovered column type (`string` → text input, `date` → date picker, etc.); for now we keep the defaults.

### Actions sub-form

The toolbar Add / Edit / Delete buttons are wired automatically because *Editable* is on. We just need to point them at the right write queries:

| Action | Connector / Query |
|---|---|
| **Add** | `customers` / `create` |
| **Save** *(on the dialog)* | `customers` / `update` |
| **Delete** | `customers` / `delete` |

### Save the screen

**Save & reload**. The screen now appears in the catalogue. To see it, we need to wire it into the sidebar.

---

## Wire the menu

Open **Settings → Menus**. You should see one or two rows — `_default` and maybe a placeholder. Click **+ New menu** if there's no `crm` menu yet.

Set the menu's *App* field to `crm`. The framework recognises this as "the menu for the CRM workspace" — once saved, the workspace selector at the top of the header will show **CRM** as a workspace.

Then on the menu's tree editor, **+ Add leaf**:

| Field | Value |
|---|---|
| **Label** | `Customers` |
| **Type** | `Screen` |
| **Screen** | `crm/customers` ▾ |
| **Icon** | `users` *(any [Lucide icon](https://lucide.dev/icons))* |

**Save & reload**. The sidebar updates immediately via Socket.IO. The workspace selector now shows **CRM**; clicking it switches the sidebar to a list containing **Customers**.

---

## See it work

Click the **Customers** entry in the sidebar. You should see a grid with three rows — Acme, Globex, Initech.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
    <div style={{fontWeight: 700}}>Customers</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Refresh</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Add</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Name</div><div>Industry</div><div>Country</div><div>Email</div><div>Status</div><div>Last modified</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>Acme Industries SA</div><div>manufacturing</div><div>FR</div><div>contact@acme.example</div><div>active</div><div>—</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>Globex Logistics</div><div>logistics</div><div>DE</div><div>sales@globex.example</div><div>active</div><div>—</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '1.6fr 120px 80px 1.4fr 90px 130px', padding: '10px 14px', alignItems: 'center'}}>
    <div>Initech Services</div><div>services</div><div>FR</div><div>hello@initech.example</div><div>active</div><div>—</div>
  </div>
</div>

Try it:

- **Click a row** → the edit dialog opens with the five fields populated.
- **Change a field, click Save** → the row updates, the *Last modified* column reflects the change.
- **Click +Add** → the dialog opens empty for a new customer.
- **Click ✕Delete on the dialog** → the row disappears after confirmation.

---

## What you have now

A fully working Customers screen — list, edit, add, delete — without writing any frontend code. The whole thing is one connector + one screen + one menu entry, all defined through the Settings UI.

The screen still has rough edges that we'll polish in the next steps:

- The `status` column is a free-text string. **Step 3** turns it into a coloured chip via the dictionary.
- The `country` column is a free-text two-letter code. **Step 3** wires it to a lookup table so users pick from a dropdown.
- There's no related data (deals, activities). **Step 3** adds Deals with an FK to Customers and an Activities sub-grid.

→ **[Step 3 — Deals and relationships](./03-deals.md)** — second screen with FK lookups + the dictionary + a child sub-grid.
