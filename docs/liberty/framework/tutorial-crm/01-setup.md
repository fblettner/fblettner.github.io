---
title: Step 1 — Set up the CRM project
description: "Start the Build-a-CRM tutorial: install the framework, create an empty crm app, prepare the database tables we'll use across the six steps. End state: framework running, admin signed in, three empty tables ready for customers, deals and activities."
keywords: [Liberty Framework, tutorial, CRM, setup, installation, app, pool, getting started]
---

# Step 1 — Set up the CRM project

This tutorial walks you through building a working **Customer Relationship Management** app on the Liberty Framework — six steps, from an empty install to a deployed application with screens, a dashboard, OIDC sign-in, an AI assistant and a scheduled job.

By the end of this step you'll have the framework running, an empty `crm` app registered and the three database tables we'll use throughout. Estimated time: **10 minutes**.

---

## What we're building

Across the six steps:

| Step | We add | The framework concept it teaches |
|---|---|---|
| **1 — Setup** *(this page)* | Empty app + three database tables. | App / Pool — what data we're going to reach. |
| **[2 — Customers](./02-customers.md)** | First screen — list of customers with edit dialog. | Connector / Screen — the framework's primary surface. |
| **[3 — Deals](./03-deals.md)** | Second screen with FK to customers + an Activities sub-grid. | Lookups / Relationships — how entities reference each other. |
| **[4 — Dashboard](./04-dashboard.md)** | Sales-pipeline dashboard with KPIs + chart + drill-down. | Dashboard / Charts — summarise the data. |
| **[5 — Auth](./05-auth.md)** | Two roles + OIDC sign-in. | Authentication / Roles — who sees what. |
| **[6 — AI + Jobs](./06-ai-and-jobs.md)** | AI assistant over the data + nightly summary job. | AI / Nomaflow — natural-language access + scheduled work. |

The CRM domain is generic on purpose — three entities, recognisable relationships, no vendor specifics. Once the pattern clicks, the same approach applies to whatever your real domain is.

---

## Prerequisites

| You need | Why |
|---|---|
| **Liberty Framework installed locally** | Follow [Getting Started → Installation](../../installation/python-server.md) up to "Verify the install". The framework should be reachable at `http://127.0.0.1:8000` with the `admin` user signed in. |
| **PostgreSQL or the built-in SQLite** | The tutorial uses generic SQL; either works. SQLite is faster to start (already wired). |
| **A SQL client** | `psql` for PostgreSQL or `sqlite3` for SQLite. Anything that lets you run a `CREATE TABLE`. |

If you haven't installed the framework yet, do that first and come back here.

---

## Create the database tables

Connect to your database (`sqlite3 liberty.db` for SQLite, `psql` for PostgreSQL) and run:

```sql
CREATE TABLE customers (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  industry      VARCHAR(64),
  country       VARCHAR(2),
  status        VARCHAR(32) NOT NULL DEFAULT 'active',
  primary_email VARCHAR(255),
  created_by    VARCHAR(64),
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_by    VARCHAR(64),
  updated_at    TIMESTAMP
);

CREATE TABLE deals (
  id            SERIAL PRIMARY KEY,
  customer_id   INTEGER NOT NULL REFERENCES customers(id),
  name          VARCHAR(255) NOT NULL,
  stage         VARCHAR(32) NOT NULL DEFAULT 'qualified',
  amount        DECIMAL(12,2) NOT NULL DEFAULT 0,
  currency      VARCHAR(3)   NOT NULL DEFAULT 'EUR',
  close_date    DATE,
  owner         VARCHAR(64),
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE activities (
  id            SERIAL PRIMARY KEY,
  deal_id       INTEGER NOT NULL REFERENCES deals(id),
  kind          VARCHAR(32) NOT NULL,
  notes         TEXT,
  happened_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  recorded_by   VARCHAR(64)
);

-- A small reference table for the deal stages
CREATE TABLE deal_stages (
  code   VARCHAR(32) PRIMARY KEY,
  label  VARCHAR(64) NOT NULL,
  colour VARCHAR(16),
  ord    INT NOT NULL DEFAULT 0
);

INSERT INTO deal_stages(code, label, colour, ord) VALUES
  ('qualified',   'Qualified',    '#60a5fa', 10),
  ('proposal',    'Proposal',     '#c084fc', 20),
  ('negotiation', 'Negotiation',  '#fb923c', 30),
  ('won',         'Won',          '#4ade80', 40),
  ('lost',        'Lost',         '#f87171', 50);

-- A couple of customers to play with
INSERT INTO customers(name, industry, country, primary_email) VALUES
  ('Acme Industries SA', 'manufacturing', 'FR', 'contact@acme.example'),
  ('Globex Logistics',   'logistics',     'DE', 'sales@globex.example'),
  ('Initech Services',   'services',      'FR', 'hello@initech.example');

INSERT INTO deals(customer_id, name, stage, amount, currency, close_date) VALUES
  (1, 'Annual contract renewal', 'proposal',    45000.00, 'EUR', '2026-07-15'),
  (1, 'Add-on training package', 'qualified',    8500.00, 'EUR', '2026-08-30'),
  (2, 'Logistics platform Q3',   'negotiation', 120000.00, 'EUR', '2026-09-10'),
  (3, 'Support contract',        'won',         18000.00, 'EUR', '2026-06-01');
```

If you're on SQLite, replace `SERIAL PRIMARY KEY` with `INTEGER PRIMARY KEY AUTOINCREMENT` and `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` with `DATETIME DEFAULT CURRENT_TIMESTAMP`. The rest works as-is.

Verify with one query:

```sql
SELECT count(*) FROM customers;  -- → 3
```

---

## Register the `crm` app

Open the framework in your browser, sign in as `admin`, click the gear icon (top right) to open **Settings**. Switch to the **Apps** tab and click **+ New app**.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '16px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{fontWeight: 700, marginBottom: '10px'}}>Settings → Apps → + New app</div>
  <div style={{display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: '10px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>ID</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>crm</span></div>
    <div style={{opacity: 0.75}}>Display name</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>CRM</span></div>
    <div style={{opacity: 0.75}}>Description</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Customer relationship management — tutorial app</span></div>
    <div style={{opacity: 0.75}}>Icon</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>users ▾</span></div>
    <div style={{opacity: 0.75}}>Order</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>10</span></div>
  </div>
  <div style={{display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '14px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Cancel</span>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Save</span>
  </div>
</div>

Click **Save**. The framework records the app metadata. Nothing visible changes yet — apps only show up in the workspace selector once they have a menu (we'll add one in [Step 2](./02-customers.md)).

### What just happened

You declared a **namespace**. From here on, every connector, screen, menu, dashboard and job we create will carry `app = "crm"` so the framework groups them under this workspace.

You don't normally have to declare the app upfront — it would be created on first reference. We did it now so the *Display name*, *Icon* and *Order* are set; otherwise the workspace selector would show the raw identifier.

---

## Use the default pool

We won't create a new pool — the **`default` pool** that ships with the framework points at your local SQLite (or whatever you configured in `app.toml`). For a one-host tutorial that's enough.

To confirm, open **Settings → Pools**. You should see one row, `default`, with the **connected** status.

If you ran the SQL above against a different database, head to **Settings → Pools → + New pool** and add it now — the rest of the tutorial assumes a pool the framework can reach. The pool name will be referenced in [Step 2](./02-customers.md) when we build the connector.

---

## Verify

| Check | How |
|---|---|
| Framework reachable | `http://127.0.0.1:8000` returns the home page. |
| Admin signed in | Top right shows the `admin` chip. |
| Database tables exist | `SELECT count(*) FROM customers;` returns 3. |
| `crm` app registered | *Settings → Apps* lists `crm`. |
| Pool connected | *Settings → Pools* shows `default` (or your custom pool) as **connected**. |

---

## What you have now

Nothing visible yet — but the foundation is in place: a registered app, a reachable pool, three tables with seed data. The next step turns this into an actual screen.

→ **[Step 2 — Customers](./02-customers.md)** — define your first connector, build the Customers screen, add it to the menu.
