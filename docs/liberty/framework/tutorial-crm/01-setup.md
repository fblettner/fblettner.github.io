---
title: Step 1 — Set up the CRM project
description: "Start the Build-a-CRM tutorial: the tables for customers, deals and activities, sample data, and the crm connector that will become the app. End state: the framework running, a superuser signed in, the tables ready."
keywords: [Liberty Next, tutorial, CRM, setup, tables, pool, connector, getting started]
---

# Step 1 — Set up the CRM project

This tutorial builds a small **customer relationship management** app on Liberty Next, in six steps: screens, lists of values, a dashboard, roles, the AI assistant and a scheduled job. Everything is done from Settings.

This first step prepares the database and creates the `crm` connector.

---

## At a glance

<svg viewBox="0 0 1200 370" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu1-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu1-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu1-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu1-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="330" rx="14" fill="url(#tu1-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="250" y="60" width="170" height="164" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="262" y="80" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">customers</text>
  <text x="264" y="102" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">id  PK</text>
  <text x="264" y="120" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">name</text>
  <text x="264" y="138" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">industry</text>
  <text x="264" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">country</text>
  <text x="264" y="174" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">status</text>
  <text x="264" y="192" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">primary_email</text>
  <text x="264" y="210" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">created_by …</text>
  <rect x="470" y="60" width="170" height="164" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="482" y="80" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">deals</text>
  <text x="484" y="102" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">id  PK</text>
  <text x="484" y="120" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customer_id</text>
  <text x="484" y="138" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">name</text>
  <text x="484" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">stage</text>
  <text x="484" y="174" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">amount</text>
  <text x="484" y="192" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">close_date</text>
  <text x="484" y="210" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">owner</text>
  <rect x="690" y="60" width="170" height="146" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="702" y="80" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">activities</text>
  <text x="704" y="102" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">id  PK</text>
  <text x="704" y="120" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">deal_id</text>
  <text x="704" y="138" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">kind</text>
  <text x="704" y="156" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">notes</text>
  <text x="704" y="174" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">happened_at</text>
  <text x="704" y="192" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">recorded_by</text>
  <rect x="470" y="250" width="170" height="92" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="482" y="270" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">deal_stages</text>
  <text x="484" y="292" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">code  PK</text>
  <text x="484" y="310" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">label</text>
  <text x="484" y="328" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ord</text>
  <line x1="470" y1="130" x2="420" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tu1-flow)"/>
  <line x1="690" y1="130" x2="640" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tu1-flow)"/>
  <line x1="555" y1="250" x2="555" y2="220" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#tu1-flow)"/>
  <rect x="740" y="270" width="200" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="840.0" y="297.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">connector crm</text>
  <text x="840.0" y="312.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">SQL · pool default</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Customers</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">3 sample rows</text>
  <line x1="210" y1="107.0" x2="250" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activities</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one deal, many activities</text>
  <line x1="1000" y1="107.0" x2="860" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
  <rect x="10" y="280" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deal stages</text>
  <text x="20" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">list of values</text>
  <line x1="210" y1="297.0" x2="470" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The crm connector</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">becomes the app in step 2</text>
  <line x1="1000" y1="317.0" x2="940" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu1-arrow)"/>
</svg>

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
