---
title: CSI
description: "Customer Support Identifier — list of the Oracle support contracts the connected applications are entitled to."
keywords: [Nomasx-1, licenses, CSI, Customer Support Identifier, Oracle, support contract, entitlement]
---

# CSI

The **CSI** screen lists every Oracle *Customer Support Identifier* declared in Nomasx-1. One line per contract. Each row carries the identifier, a friendly description, the contract validity dates and its current status.

The CSI is the contractual anchor: the entitlement counts (subscribed licences, support), the usage analysis (*Usage report*) and the financial impact computation (*Financial report*) all attach to a CSI through the components catalog.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="csi-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#csi-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licenses · CSI</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CSI ID</text>
  <text x="180" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FROM</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TO</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUS</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>
  <text x="180" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne — corporate</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2018-01-01</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <rect x="800" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="825" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345910</text>
  <text x="180" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE — production</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-01</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-09-30</text>
  <rect x="800" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="825" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">11982001</text>
  <text x="180" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Legacy Internet Application Server — retired</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2008-06-01</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-12-31</text>
  <rect x="800" y="200" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="830" y="212" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Closed</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 active CSI · 1 closed · all-time inventory · drives Subscribed Licenses</text>
</svg>

---

## Goal of the view

For each CSI under management:

- **Inventory the support contracts.** Every active CSI must be associated with at least one application — otherwise it is a contract for an application that has nothing left.
- **Track validity windows.** *From* / *To* dates drive the renewal calendar.
- **Capture the status.** *Active* / *Closed* matches what Oracle's contract management portal shows. Closed CSIs are kept for historical reporting but no longer count.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **CSI ID** | `CSI_ID` — numeric contract identifier. | The Oracle reference. |
| **Description** | `CSI_DESCRIPTION` — text. | Friendly label. |
| **From date** | `CSI_FROM_DATE` — date. | Start of the support coverage. |
| **To date** | `CSI_TO_DATE` — date. | End of the current support window. |
| **Status** | `CSI_STATUS` — `Active` / `Closed`. | Whether the contract is still in force. |

Audit columns (`CSI_AUDIT_USER`, `CSI_AUDIT_DATE`) are hidden but tracked on the row.

---

## Edit dialog

Click **Add** to register a new CSI, or double-click a row to edit. The dialog has three tabs. The *Applications* and *Components* tabs are hidden on **Add** — they appear only once the CSI exists.

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="csi-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#csi-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit CSI — 12345678</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="160" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="140" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Contract Support</text>
  <rect x="230" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Applications</text>
  <rect x="360" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Components</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CSI ID</text>
  <rect x="60" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>

  <text x="260" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="260" y="166" width="660" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne — corporate</text>

  <text x="60" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">From</text>
  <rect x="60" y="226" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2018-01-01</text>

  <text x="260" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">To</text>
  <rect x="260" y="226" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-12-31</text>

  <text x="460" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Status</text>
  <rect x="460" y="226" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="472" y="243" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Active ▾</text>
</svg>

### Tab 1 — Contract Support

The contract identity. All fields are mandatory.

| Field | What to enter |
|---|---|
| **CSI ID** | Numeric Oracle contract identifier. |
| **Description** | Friendly label for the contract. |
| **From date** | Start of the support coverage. |
| **To date** | End of the current support window. |
| **Status** | `Active` while the contract is in force, `Closed` once it ends. |

### Tab 2 — Applications

Nested table linking the CSI to the applications it covers. Add one row per application: an entry here is what makes the contract count for that application in *Subscribed Licenses* and the compliance reports. Hidden on **Add**.

### Tab 3 — Components

Nested table listing the licensed components per CSI, with their quantities and metric. Aggregates feed the *Subscribed Licenses* page. Hidden on **Add**.

---

## Context menu

Right-click a row to open the row menu.

| Action | Where it lands |
|---|---|
| **Display Applications** | List of applications attached to the CSI. |
| **Display Components** | List of components subscribed under the CSI with their quantities. |

---

## Tips & best practices

- **Sort by *To date* ascending** to surface the next renewals — the budget-planning view.
- **Confirm every active CSI maps to at least one application** in *Subscribed Licenses*. An orphan CSI is a contract paid for an application that no longer uses it.
- **Closed CSIs remain visible** for audit traceability — leave them in place rather than deleting the row.
- **The screen is writable** — only the licence administrator should edit it. Each change is captured in the audit columns and surfaces in the *Audit Trail* if the underlying table is being audited.
