---
title: Components
description: "Master catalog of licence components — price list, category, friendly name."
keywords: [Nomasx-1, settings, pricing, components, licence catalog, price list, category]
---

# Components

The **Components** screen is the master catalog of every licence component Nomasx-1 reasons about. One line per component, with the *Price list* it belongs to, its category and a friendly name. Every other licence and OUT screen joins through this catalog.

It is the table to maintain whenever Oracle introduces a new component or renames an existing one.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spcpt-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#spcpt-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Pricing · Components</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRICE LIST</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATEGORY</text>
  <text x="620" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Applications</text>
  <text x="620" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Applications</text>
  <text x="620" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database</text>
  <text x="620" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
</svg>

---

## Goal of the view

- **The single source of truth** for component naming across Nomasx-1.
- **Three classification dimensions.** *Price list* (the Oracle catalog), *Category* (Applications, Database, Middleware…) and *Component* (the human-readable name).

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **ID** | `CPT_ID` — numeric component identifier. | Referenced by every other licence / Oracle / OUT screen. |
| **Price list** | `CPT_LISTS` — Oracle catalog. | The Oracle price book the component is sold under. |
| **Category** | `CPT_CATEGORY` — broad classification. | Applications, Database, Middleware, … |
| **Component** | `CPT_COMPONENT` — friendly name. | Label rendered across the application. |

---

## Tips & best practices

- **Add a new component once and reference it widely.** Avoid creating per-application duplicates — the model is global.
- **Keep the *Price list* aligned with Oracle's price book** so the catalog is recognisable to the LMS auditor.
- **Audit changes through `CPT_AUDIT_USER` / `CPT_AUDIT_DATE`** — useful when a column suddenly displays a different label.
