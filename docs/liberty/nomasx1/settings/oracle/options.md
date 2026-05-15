---
title: Oracle Options
description: "Catalog of Oracle database options recognised by Nomasx-1 and the licence component each one falls under."
keywords: [Nomasx-1, settings, Oracle, options, packs, licence component]
---

# Oracle Options

The **Options** screen catalogs every Oracle database option Nomasx-1 recognises — partitioning, advanced compression, advanced security, …. One line per `(Component, Option)`. Each row classifies the option under a licence component that is then matched against the contract.

The data feeds the *Database → Oracle* and *Licenses → Oracle* screens: an option installed without a subscription appears as a compliance gap.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="soop-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#soop-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Oracle · Options</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
</svg>

---

## Goal of the view

- **Map each Oracle option** to its Nomasx-1 licence component.
- **Trigger compliance checks.** An option detected in *Database → Oracle* without a matching subscription becomes a non-compliant row.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **ID** | `OPT_ID` — internal identifier. | Numeric key. |
| **Component ID** | `OPT_CPT_ID` — links to *Pricing → Components*. | The component the option maps to. |
| **Option** | `OPT_OPTION` — option name. | The Oracle option label as exposed by the database. |

---

## Edit dialog

Double-click a row to bind an Oracle option to a Nomasx-1 component.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="soop-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#soop-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit Oracle option</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Component</text>
  <rect x="60" y="116" width="400" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression ▾</text>

  <text x="480" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Option</text>
  <rect x="480" y="116" width="440" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
</svg>

| Field | What to enter |
|---|---|
| **Component** | Drop-down of Nomasx-1 components. The option counts against this component when detected. |
| **Option** | Oracle option label exactly as the database reports it. |

---

## Tips & best practices

- **Keep the option list in sync with the Oracle technical price book** — Oracle occasionally renames options between releases.
- **Heavy options** (Advanced Compression, Active Data Guard, Multitenant) deserve their own row even when bundled into a broader package — the visibility is what makes the audit defensible.
