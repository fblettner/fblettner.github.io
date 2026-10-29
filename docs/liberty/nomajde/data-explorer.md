---
title: Data Explorer
description: "Free analysis of the JD Edwards EnterpriseOne security and development data in the Nomajde Data Explorer: the Security and Development models, their shipped analyses and dashboard, the models shipped by the JDE presets, and the data dictionary labels."
keywords: [Nomajde, Data Explorer, JD Edwards, JDE, security, users, roles, security records, UDO security, environments, Object Librarian, presets, data dictionary]
---

# Data Explorer

**Data Explorer**, right under **Overview** in the Nomajde menu, opens the explorer on the JD Edwards EnterpriseOne data: rows, measures, filters and a period picked from a list of fields, shown as a table, a pivot, a chart or a KPI, then saved, shared, gathered into a dashboard and exported. The figures are read live from JD Edwards, under the user's rights.

How the explorer works is described in the [Liberty Next documentation](../framework/explorer/analysis.md). This page lists what Nomajde ships.

---

## Security \{#security\}

The users (F0092) with their address book name, their role relationships (F95921) and roles (F00926), their security records (F00950) and UDO security (F00950W), their environments (F0093).

**Analyses**: *Users*, *Users by type*, *Users by language*, *Users with the most roles*, *Users per role*, *Security records by type*, *Secured objects per user or role*, *Environments per user*.

**Dashboard** *Security overview*: users by type, the roles with the most members, the users with the most roles, the security records by type.

---

## Development \{#development\}

The Object Librarian (F9860): the objects per type and per product code.

**Analyses**: *Objects by type*, *Objects by product code*.

---

## Models shipped by the JDE presets \{#presets\}

The JD Edwards presets of the [Screen Assistant](../framework/build/screen-assistant.md) also give the explorer ready-made models, built from the Oracle E1 data models: the hub table with the tables joined to it.

| Area | Models |
|---|---|
| Address Book | Address Book — full entry (master, contacts, customer, supplier). |
| General Accounting | Account Ledger (F0911), Account Balances (F0902). |
| Accounts Payable | A/P Ledger (F0411), Payments (F0413). |
| Accounts Receivable | Customer Ledger (F03B11), Receipts (F03B13). |
| Inventory | Item (F4101). |
| Sales | Sales Order (F4201), Sales History (F42019 + F42119). |
| Procurement | Purchase Order (F4311, one row per order line), Receipts (F43121, one row per receipt or match), Receipt Routing (F43092, one row per routing step: dock, inspection, transfer, stock). |
| Manufacturing | Work Order (F4801), Production Cost (F3102). |
| Product Data Management | Bill of Material (F3002), Routing (F3003). |
| Product Costing | Item Cost Components (F30026). |

They appear in the model picker with the others; the page header says *shipped by the preset “…”*. They are built at first use. To adapt one, a superuser adds a model in **Liberty Next → Build → Explorer** from the same preset, then changes it.

JD Edwards amounts are shown in real units: the data dictionary's decimals apply in the tables, the totals and the filters.

---

## Labels from the data dictionary \{#dictionary\}

A column without a dictionary entry shows its raw column name. A superuser sees on the explorer page how many columns are in that case, and **Create the entries from the data dictionary** fills them from the JD Edwards data dictionary (description, type, decimals, UDC lookup) in one click. The [dictionary refresh job](./jobs.md#dictionary) does the same for every model, or for one.

---

## The assistant on this page \{#ai\}

On the explorer page, the assistant offers to create what the user describes: *Create an analysis of the users per role*, *Create a dashboard with the analyses of this model*. It builds the analysis on the model, checks it by running it, and saves it — private unless the user asks to share it. See [AI assistant](../framework/ai-assistant.md#tools).

---

## Who sees what \{#access\}

A model is offered to the holders of a role that grants it (**Data Explorer** in the role's *Beyond the menus* rules). The row-level scope of the user's roles applies inside every analysis.
