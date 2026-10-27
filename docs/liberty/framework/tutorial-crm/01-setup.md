---
title: Step 1 — Set up the CRM project
description: "Start the Build-a-CRM tutorial: the tables for customers, deals and activities, sample data, and the crm connector that will become the app. End state: the framework running, a superuser signed in, the tables ready."
keywords: [Liberty Next, tutorial, CRM, setup, tables, pool, connector, getting started]
---

# Step 1 — Set up the CRM project

This tutorial builds a small **customer relationship management** app on Liberty Next, in six steps: screens, lists of values, a dashboard, roles, the AI assistant and a scheduled job. Everything is done from Settings.

This first step prepares the database and creates the `crm` connector.

---

## What we're building

| Step | We add | What it teaches |
|---|---|---|
| **1 — Setup** *(this page)* | Tables, sample data, the `crm` connector. | Pools and connectors. |
| **[2 — Customers](./02-customers.md)** | The Customers screen and the app's menu. | Queries generated from a table, screens, menus. |
| **[3 — Deals](./03-deals.md)** | Deals linked to customers, with their activities in a tab. | Dictionary, lists of values, nested tabs. |
| **[4 — Dashboard](./04-dashboard.md)** | A pipeline dashboard. | KPIs, charts, the period. |
| **[5 — Roles](./05-auth.md)** | Roles, users, a data scope, company sign-in. | Who sees what. |
| **[6 — AI and jobs](./06-ai-and-jobs.md)** | The AI assistant and a daily job. | Assistant, Nomaflow, notifications. |

---

## Prerequisites

| Need | Why |
|---|---|
| **Liberty Next installed** | See [Installation](../../installation/overview.md). |
| **A superuser account** | Settings is reserved to superusers. |
| **A SQL client** | To create the tables — `psql`, DBeaver, or any client connected to the database of the `default` pool. |

The `default` pool points at the bundled PostgreSQL database on a Docker install, or at a local SQLite file on a Python install without PostgreSQL. The SQL below is written for PostgreSQL; on SQLite, replace `SERIAL` with `INTEGER`.

---

## Create the tables

```sql
CREATE TABLE customers (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(255) NOT NULL,
  industry      VARCHAR(64),
  country       VARCHAR(2),
  status        VARCHAR(16) NOT NULL DEFAULT 'ACTIVE',
  primary_email VARCHAR(255),
  created_by    VARCHAR(64),
  created_at    TIMESTAMP,
  updated_by    VARCHAR(64),
  updated_at    TIMESTAMP
);

CREATE TABLE deal_stages (
  code  VARCHAR(16) PRIMARY KEY,
  label VARCHAR(64) NOT NULL,
  ord   INTEGER NOT NULL
);

CREATE TABLE deals (
  id          SERIAL PRIMARY KEY,
  customer_id INTEGER NOT NULL REFERENCES customers(id),
  name        VARCHAR(255) NOT NULL,
  stage       VARCHAR(16) NOT NULL DEFAULT 'QUALIFIED' REFERENCES deal_stages(code),
  amount      DECIMAL(12,2) NOT NULL DEFAULT 0,
  close_date  DATE,
  owner       VARCHAR(64),
  updated_at  TIMESTAMP
);

CREATE TABLE activities (
  id          SERIAL PRIMARY KEY,
  deal_id     INTEGER NOT NULL REFERENCES deals(id),
  kind        VARCHAR(16) NOT NULL,
  notes       VARCHAR(2000),
  happened_at TIMESTAMP NOT NULL,
  recorded_by VARCHAR(64)
);

INSERT INTO deal_stages (code, label, ord) VALUES
  ('QUALIFIED', 'Qualified', 10), ('PROPOSAL', 'Proposal', 20),
  ('NEGOTIATION', 'Negotiation', 30), ('WON', 'Won', 40), ('LOST', 'Lost', 50);

INSERT INTO customers (name, industry, country, primary_email) VALUES
  ('ACME Industries', 'Manufacturing', 'FR', 'contact@acme.example'),
  ('Beta SARL',       'Logistics',     'FR', 'sales@beta.example'),
  ('Gamma SA',        'Services',      'BE', 'hello@gamma.example');

INSERT INTO deals (customer_id, name, stage, amount, close_date) VALUES
  (1, 'Annual contract renewal', 'PROPOSAL',     45000, '2026-11-15'),
  (1, 'Training package',        'QUALIFIED',     8500, '2026-12-10'),
  (2, 'Logistics platform',      'NEGOTIATION', 120000, '2026-11-30'),
  (3, 'Support contract',        'WON',          18000, '2026-10-05');
```

---

## Create the `crm` connector

A **connector** groups the queries of one database under a name. Once it has a menu, it becomes the `crm` **app**.

1. Open **Settings → Connectors**, click **＋ Connector**.
2. Name `crm`, type **SQL**, pool `default`. Save.

The connector appears under *Data sources* in the left list: it has no menu yet. It moves to *Apps* in [Step 2](./02-customers.md).

To work on another database than the framework's, first add a pool in **Settings → Pools** with its URL, then pick it here — see [Connectors](../connectors.md#pools).

---

## Check

| Check | How |
|---|---|
| Tables created | `SELECT count(*) FROM customers;` returns 3. |
| Connector created | **Settings → Connectors** lists `crm` under *Data sources*. |

→ **[Step 2 — Customers](./02-customers.md)**: the queries, the first screen and the menu.
