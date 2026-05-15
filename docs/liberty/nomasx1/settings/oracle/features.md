---
title: Oracle Features
description: "Catalog of Oracle database features Nomasx-1 tracks, each linked to a licence component."
keywords: [Nomasx-1, settings, Oracle, features, licence component, DBA_FEATURE_USAGE_STATISTICS]
---

# Oracle Features

The **Features** screen catalogs the Oracle features Nomasx-1 monitors via `DBA_FEATURE_USAGE_STATISTICS`. One line per `(Component, Feature)`. The catalog maps each feature to the licence component its usage would consume — a critical input of the Oracle LMS audit, where unused features may not trigger compliance even if installed.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sofea-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sofea-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Oracle · Features</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FEATURE</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AWR Report</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Automatic Workload Repository</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Tuning Pack</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SQL Tuning Advisor</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SQL Tuning Advisor</text>
</svg>

---

## Goal of the view

- **Translate Oracle feature labels** to the Nomasx-1 component model.
- **Drive the *Database → Oracle* feature detection.** A feature recorded as used in `DBA_FEATURE_USAGE_STATISTICS` is mapped to its component on the licence reports.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **ID** | `FEA_ID` — internal identifier. | Numeric key. |
| **Component ID** | `FEA_CPT_ID` — links to *Pricing → Components*. | The component the feature belongs to. |
| **Feature** | `FEA_FEATURES` — Oracle feature name. | Label as returned by `DBA_FEATURE_USAGE_STATISTICS`. |
| **Description** | `FEA_DESCRIPTION` — text. | Friendly description for non-DBA audiences. |

---

## Edit dialog

Double-click a row to bind a feature to a Nomasx-1 component.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sofea-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sofea-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit Oracle feature</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Component</text>
  <rect x="60" y="116" width="220" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Diagnostic Pack ▾</text>

  <text x="300" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Feature</text>
  <rect x="300" y="116" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="312" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AWR Report</text>

  <text x="600" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="600" y="116" width="320" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="612" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Automatic Workload Repository</text>
</svg>

| Field | What to enter |
|---|---|
| **Component** | Drop-down of Nomasx-1 components. The feature counts against this component. |
| **Feature** | Feature name exactly as returned by `DBA_FEATURE_USAGE_STATISTICS`. |
| **Description** | Plain-language label for non-DBA readers. |

---

## Tips & best practices

- **Re-import the feature dictionary after every major Oracle release** — new features appear with each version.
- **A feature usage detected on a non-subscribed component** is the strongest type of audit finding. Aim for zero on production instances.
- **Use the *Description* field** to record what the feature does in plain language — easier to discuss with the business than the raw Oracle name.
