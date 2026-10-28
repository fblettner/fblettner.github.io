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

## At a glance

<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu3-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu3-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu3-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu3-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="310" rx="14" fill="url(#tu3-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit · Logistics platform</text>
  <rect x="240" y="58" width="126" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="263.0" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Deal</text>
  <rect x="287" y="59" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="326.0" y="73.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Activities</text>
  <line x1="240" y1="92" x2="960" y2="92" stroke="#1f2937" strokeWidth="1"/>
  <rect x="880" y="102" width="80" height="22" rx="5" fill="url(#tu3-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="116.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add</text>
  <rect x="240" y="132" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="370" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTES</text>
  <text x="670" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HAPPENED AT</text>
  <text x="810" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECORDED BY</text>
  <rect x="240" y="164" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="169.0" width="37" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.5" y="180.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Call</text>
  <text x="370" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Budget confirmed</text>
  <text x="670" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">27/10/2026 10:15</text>
  <text x="810" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ADMIN</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="199.0" width="51" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="275.5" y="210.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Meeting</text>
  <text x="370" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Demo of the platform</text>
  <text x="670" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">20/10/2026 14:00</text>
  <text x="810" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BOB</text>
  <rect x="240" y="236" width="340" height="80" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="256" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Deal tab (other view)</text>
  <text x="252" y="281" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Customer</text>
  <rect x="342" y="266" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="280.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Beta SARL ▾</text>
  <text x="620" y="280" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Stage: Negotiation · 120 000</text>
  <rect x="10" y="58" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nested table tab</text>
  <text x="20" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the activities screen</text>
  <line x1="210" y1="75.0" x2="240" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ Add</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">DEAL_ID filled in</text>
  <line x1="1000" y1="117.0" x2="960" y2="113" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recorded by</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;&#123;LOGIN&#125;&#125;</text>
  <line x1="1000" y1="197.0" x2="920" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lookup</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">customer name, searchable</text>
  <line x1="210" y1="307.0" x2="400" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu3-arrow)"/>
</svg>

---

## The dictionary

### Entries from the tables

**Liberty Next → Build → Dictionary**, pick the `crm` scope, then **Scan a table**:

1. Connector `crm`, table `customers`, **Scan**: one proposal per column, missing ones ticked.
2. Fill the **Label** of each (`Name`, `Industry`, `Country`, `Status`, `E-mail`…), then **Add**.
3. Same for `deals` and `activities`.

Every screen of the app now shows these labels — the labels typed on the Customers columns in Step 2 can be cleared.

### The customer status — an enum

**Enums** tab, **＋ Add enum** `CUSTOMER_STATUS`, with the values `ACTIVE` (Active), `PROSPECT` (Prospect), `INACTIVE` (Inactive). Then on the `STATUS` entry: **Rules** `ENUM`, **Rules values** `CUSTOMER_STATUS`.

The grid shows *Active* instead of `ACTIVE`, and the dialog offers the three values.

### The customer of a deal — a lookup

A lookup turns a code (the customer's id) into a label (its name), from a query.

1. **Liberty Next → Build → Connectors → crm → Lookups → ＋ Add lookup**: table `customers`, value column `ID`, label column `NAME`. The assistant writes the query and the dictionary lookup `customers`.
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
