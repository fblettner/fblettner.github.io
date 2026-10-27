---
title: Step 3 — Deals and relationships
description: "Second CRM screen: the dictionary gives labels and lists of values (an enum for the customer status, lookups for the customer and the stage of a deal), the Deals screen links each deal to its customer, and the deal's activities appear in a tab of its dialog."
keywords: [Liberty Next, tutorial, CRM, deals, dictionary, ENUM, LOOKUP, scan a table, nested_table, param_binds]
---

# Step 3 — Deals and relationships

Three things in this step:

1. The **dictionary**: labels shared by every screen, and lists of values instead of free text.
2. The **Deals** screen, where each deal picks its customer and its stage from a list.
3. The deal's **activities**, in a tab of the deal dialog.

---

## The dictionary

### Entries from the tables

**Settings → Dictionary**, pick the `crm` scope, then **Scan a table**:

1. Connector `crm`, table `customers`, **Scan**: one proposal per column, missing ones ticked.
2. Fill the **Label** of each (`Name`, `Industry`, `Country`, `Status`, `E-mail`…), then **Add**.
3. Same for `deals` and `activities`.

Every screen of the app now shows these labels — the labels typed on the Customers columns in Step 2 can be cleared.

### The customer status — an enum

**Enums** tab, **＋ Add enum** `CUSTOMER_STATUS`, with the values `ACTIVE` (Active), `PROSPECT` (Prospect), `INACTIVE` (Inactive). Then on the `STATUS` entry: **Rules** `ENUM`, **Rules values** `CUSTOMER_STATUS`.

The grid shows *Active* instead of `ACTIVE`, and the dialog offers the three values.

### The customer of a deal — a lookup

A lookup turns a code (the customer's id) into a label (its name), from a query.

1. **Settings → Connectors → crm → Lookups → ＋ Add lookup**: table `customers`, value column `ID`, label column `NAME`. The assistant writes the query and the dictionary lookup `customers`.
2. Same for the stages: table `deal_stages`, value `CODE`, label `LABEL`.
3. In the dictionary, entry `CUSTOMER_ID`: **Rules** `LOOKUP`, **Rules values** `customers`; entry `STAGE`: **Rules** `LOOKUP`, **Rules values** `deal_stages`.

Save the dictionary. See [Dictionary](../dictionary.md) and [Sequences and lookups](../build/queries/sequences-and-lookups.md).

---

## The Deals screen

1. **Connectors → crm → Tables → ＋ Add queries → Generate from DB**, table `deals`, key `ID`. As in Step 2, remove `ID` from `deals_post`, and add `UPDATED_AT = {{SYSTIMESTAMP}}` to `deals_put`.
2. **Screens**, chip `crm`, **＋ Add screen** `deals`: label `Deals`, the four queries, **Import from read query** in Columns, a dialog tab `Deal` with `CUSTOMER_ID`, `NAME`, `STAGE`, `AMOUNT`, `CLOSE_DATE`, `OWNER`.
3. **Menus**, under *Sales*: an entry `Deals`, type `screen`, target `deals_get`, icon `trendingup`.

The grid shows the customer's name and the stage's label; the dialog offers both as searchable lists. Tick **filter** on `STAGE` and `CUSTOMER_ID` to filter the grid by them.

---

## Activities in a tab

The activities of a deal show in its dialog, as a grid of their own.

### The Activities screen

1. **Generate from DB** on `activities`, key `ID`. In `activities_post`, remove `ID` and stamp who recorded it:

```sql
INSERT INTO activities (DEAL_ID, KIND, NOTES, HAPPENED_AT, RECORDED_BY)
VALUES (:DEAL_ID, :KIND, :NOTES, :HAPPENED_AT, {{LOGIN}})
```

2. A screen `activities` on these queries, with a dialog holding `KIND`, `NOTES`, `HAPPENED_AT`. Its read query needs the deal's id — add `WHERE DEAL_ID = :DEAL_ID` to `activities_get`.

### The tab

In the `deals` screen, **Dialog** tab, **＋ Add tab**, then in **Tab settings**:

| Setting | Value |
|---|---|
| Tab label | `Activities` |
| Tab type | *Nested table* |
| Target screen | `activities` |
| Parameter bindings | parent column `ID` → nested param `DEAL_ID` |

The tab shows the activities of the open deal; **＋ Add** in it creates an activity with `DEAL_ID` already filled. Set **hide_on_add** on the tab: a deal being created has no id yet. See [Nested tabs](../build/screens/nested-tabs.md).

---

## See it work

- **Customers**: the status shows as a label and is picked from a list.
- **Deals**: four deals, with their customer and stage; filter on *Negotiation*.
- Open *Logistics platform*, tab **Activities**, **＋ Add**: record a call. *Recorded by* holds your user name.

---

## What you have now

Two related screens, labels and lists of values shared through the dictionary, and child rows inside a dialog.

→ **[Step 4 — Dashboard](./04-dashboard.md)**: the pipeline at a glance.
