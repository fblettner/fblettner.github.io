---
title: The sales demo
description: "The Sales demo application shipped with Liberty Next: invoice lines loaded from Excel by period, period validation and closing, a home dashboard, the Data Explorer with ready-made analyses, the AI assistant's starter questions, a monthly digest e-mailed by Nomaflow, and three demo users who see different rows — every feature built from the Settings, without code."
keywords: [Liberty Next, demo, sales demo, nomademo, example application, dashboard, Data Explorer, file load, period closing, data scope, digest, AI assistant]
---

# The sales demo

**Sales demo** is a small application shipped with Liberty Next to show, on one coherent subject, what the framework does without code: monthly invoice lines loaded from Excel, periods validated then closed, a home dashboard, free analysis in the Data Explorer, the AI assistant, a digest e-mailed every month, and users who see only their own company. Everything in it is configuration — connector, dictionary, screens, menus, dashboards, model, jobs — readable and editable in the Settings.

It is a showcase, not a product: open it to see a feature at work, copy what fits into an application of your own.

---

## At a glance

<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dmo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dmo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dmo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dmo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#dmo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="200" height="370" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="50" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SALES DEMO</text>
  <text x="254" y="76" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="254" y="102" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Sales</text>
  <text x="268" y="128" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Sales lines</text>
  <text x="268" y="154" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Periods</text>
  <text x="268" y="180" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="254" y="206" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Reference data</text>
  <text x="268" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Items</text>
  <text x="268" y="258" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Companies</text>
  <text x="268" y="284" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Customers</text>
  <rect x="464" y="40" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="48" width="63" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="507.5" y="60.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboard</text>
  <text x="476" y="82" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">KPIs, charts, tables; a business unit filter</text>
  <rect x="464" y="100" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="108" width="53" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="502.5" y="120.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Screens</text>
  <text x="476" y="142" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">cascading filters: family → sub-family → item</text>
  <rect x="464" y="160" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="168" width="88" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="520.0" y="180.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Period closing</text>
  <text x="476" y="202" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">validate, close, reopen; a closed period is read-only</text>
  <rect x="464" y="220" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="228" width="83" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="517.5" y="240.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="476" y="262" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Sales model, 10 analyses, a dashboard</text>
  <rect x="464" y="280" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="288" width="83" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="517.5" y="300.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Nomaflow jobs</text>
  <text x="476" y="322" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">file loads by partition, the monthly digest</text>
  <rect x="464" y="340" width="506" height="52" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="476" y="348" width="108" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="530.0" y="360.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Accounts and scope</text>
  <text x="476" y="382" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">group, business unit, company</text>
  <rect x="10" y="64" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="79" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The home page</text>
  <text x="20" y="92" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a dashboard menu entry</text>
  <line x1="210" y1="81.0" x2="254" y2="76" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Read-only grid</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">5,000 rows, filters first</text>
  <line x1="210" y1="187.0" x2="268" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reference data</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">loaded from Excel files</text>
  <line x1="210" y1="317.0" x2="268" y2="232" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="1000" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One app, every feature</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">built from Settings only</text>
  <line x1="1000" y1="57.0" x2="970" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Three demo users</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">same screens, other rows</text>
  <line x1="1000" y1="347.0" x2="970" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dmo-arrow)"/>
</svg>

---

## The data \{#data\}

| Table | Holds |
|---|---|
| **Items** | The items, with their family and sub-family. |
| **Companies** | The companies, with their business unit, region and currency. |
| **Customers** | The customers met in the sales; the codes are added by each load, the names completed by hand. |
| **Sales lines** | One row per invoice line: period, company, item, customer, destination country, quantity, weight, revenue in the company's currency. |
| **Periods** | One row per loaded period: status (*open*, *validated*, *closed*), number of companies and lines, quantity, who changed the status and when, a comment. |

The revenue is in each company's own currency: it is never summed across currencies, so the analyses give it per currency or per company.

---

## The screens \{#screens\}

- **Sales → Sales lines**: the invoice lines, read-only, up to 5,000 rows. The grid opens empty: pick a period, a business unit, a family… first. The filters cascade — the companies follow the business unit, the sub-families the family, the items both.
- **Sales → Periods**: the loaded periods. The row menu offers **Validate**, **Close** and **Reopen**, each after a confirmation. A **closed** period is read-only in the grid — see [Conditional fields](./build/screens/conditional-fields.md) — and a new load of that period is refused.
- **Reference data → Items, Companies, Customers**: the reference tables, editable.

---

## Loading the files \{#loads\}

The data arrives through Nomaflow jobs, run from **Nomaflow → Jobs** with **Run now** or **Run with parameters**:

| Job | Does |
|---|---|
| `nomademo-init-db` | Creates the tables in the database of the `nomademo` pool. Can be run again. |
| `nomademo-load-items` | Loads the item file (sheet *Items*: code, name, family, sub-family), replacing the table. |
| `nomademo-load-companies` | Loads the company file (sheet *Companies*: code, name, business unit, region, currency), replacing the table. |
| `nomademo-load-sales` | Loads one month of invoice lines (sheet *Sales*), chosen when the job is run. |
| `nomademo-refresh-periods` | Rebuilds the period rows from the loaded lines, keeping their status. |
| `nomademo-demo-accounts` | Creates the demo roles and users — see [below](#accounts). |
| `nomademo-monthly-digest` | The monthly digest — see [below](#digest). |

The sales load shows the [`file_load` step](../nomaflow/steps.md#file-load) at work:

- it **replaces** the partitions the file carries — year, month and company — in one transaction: reloading a corrected month replaces that month only, and a failed load leaves the previous data in place;
- a **guard** refuses the file when one of its periods is closed, with the reason in the run;
- rejected rows are kept for download from the run;
- the following steps add the new customers and refresh the period rows.

The jobs are delivered without a schedule.

---

## The home dashboard \{#dashboard\}

**Overview** is the application's home page: the [dashboard](./dashboards.md) *Sales overview*. It shows the periods loaded, the companies with sales, the invoice lines and the quantity sold; the monthly quantity, the quantity by business unit and by family, the revenue by currency; the periods table and the top items. The **Business unit** filter in the bar narrows every widget whose query returns the business unit — no screen needed behind the widgets.

---

## The Data Explorer \{#explorer\}

**Sales → Data Explorer** opens the [Data Explorer](./explorer/overview.md) on the *Sales* model: the invoice lines at the centre, with the item (family, sub-family), the company (business unit, currency) and the customer around them.

The model ships ten shared analyses — quantity by business unit, by company, by family; revenue by currency, by business unit, by company; the monthly quantity, alone and by business unit as a pivot; the top items; the number of invoice lines — and the *Sales overview* dashboard that gathers them. They are a starting point: open one, change it, save it under another name.

---

## The AI assistant \{#ai\}

The application ships its [starter questions](./ai-assistant.md#starters) under four headings — *Sales*, *Periods*, *Loads*, *Reference data* — with *Which business unit sold the most last month?* or *How do I reload a month that was wrong?*. The *Sales lines* screen has its own, which use the page context: *Sum the quantities of the rows I see, by business unit*.

Three [playbooks](./ai-assistant.md#playbooks) — *Load a month of sales*, *Validate or close a period*, *Analyse quantities and revenue* — let the assistant walk a user through the application's procedures. All of it is visible and editable in **Settings → AI**.

---

## The monthly digest \{#digest\}

`nomademo-monthly-digest` is a scheduled digest without code:

1. two [`report` steps](../nomaflow/steps.md#report) render the analyses *Revenue by business unit* and *Quantity by company* to Excel, over the previous month;
2. a [`notify` step](../nomaflow/steps.md#notify) sends them to the holders of the group role, the two files attached.

Schedule it on the first of the month once the e-mail account is set in [Notifications](../nomaflow/notifications.md#smtp).

---

## Three users, three views \{#accounts\}

`nomademo-demo-accounts` creates two roles and three users, password `demo`:

| User | Role | Sees |
|---|---|---|
| `demo_group` | `nomademo_group` | Everything. |
| `demo_bu` | `nomademo_scoped` | The companies of one business unit. |
| `demo_company` | `nomademo_scoped` | One company. |

Both roles grant the same things: the application's queries, its Data Explorer models and the assistant. The scoped role adds a [data scope](./build/secure/roles-and-permissions.md#data-scope) on the company, whose values come from each user's *companies* attribute. Sign in as each user in turn: the same screens, dashboard, analyses and exports show other rows, the totals included.

Load the companies before running this job: it reads them to fill the users' attributes.

---

## Setting it up \{#setup\}

1. In **Settings → Pools**, a pool named `nomademo` pointing at an empty database.
2. In Nomaflow, run `nomademo-init-db`, then the item and company loads, then one or more sales months.
3. Run `nomademo-demo-accounts`.
4. Open **Sales demo** from the application switcher.

---

## What's next

- [Dashboards](./dashboards.md) — the widgets and the export.
- [Data Explorer](./explorer/overview.md) — models, analyses, dashboards.
- [Steps](../nomaflow/steps.md) — file loads, reports and notifications.
- [Roles and permissions](./build/secure/roles-and-permissions.md) — the data scope.
