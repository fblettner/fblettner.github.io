---
title: Oracle Versions
description: "Catalog of Oracle database versions recognised by Nomasx-1 and their licence component."
keywords: [Nomasx-1, settings, Oracle, versions, licence component, database version]
---

# Oracle Versions

The **Versions** screen catalogs the Oracle database versions Nomasx-1 recognises, paired with the licence component each version falls under. One line per `(Component, Version)`. The catalog is used to classify the rows of the *Database → Oracle* and *Licenses → Oracle* screens.

Adding a new version here is the prerequisite to scanning a newly installed Oracle release through Nomasx-1.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sover-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sover-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Oracle · Versions</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19c</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21c</text>
</svg>

---

## Goal of the view

- **Reference the Oracle versions** Nomasx-1 supports and their licence component classification.
- **One row per (Component, Version)** — a single component can carry multiple versions (Enterprise Edition across 19c and 21c, for example).

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **ID** | `VER_ID` — internal identifier. | Numeric key. |
| **Component ID** | `VER_CPT_ID` — links to *Pricing → Components*. | The Nomasx-1 component the version maps to. |
| **Component** | `CPT_COMPONENT` — denormalised label. | Component name shown to the user. |
| **Version** | `VER_VERSION` — Oracle major version. | Version string (`19c`, `21c`, `23c`, …). |

---

## Edit dialog

Double-click a row to edit the (Component, Version) pair.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sover-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sover-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit Oracle version</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Component</text>
  <rect x="60" y="116" width="500" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE ▾</text>

  <text x="580" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Version</text>
  <rect x="580" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">19c</text>
</svg>

| Field | What to enter |
|---|---|
| **Component** | Drop-down of the Nomasx-1 components. The version is bound to this component. |
| **Version** | Oracle major version string as returned by the database dictionary (`19c`, `21c`, `23ai`, …). |

---

## Tips & best practices

- **Add new versions early.** A database upgrade reads a new value from the Oracle dictionary — the scan fails to classify unless the version is declared here.
- **Use Oracle's official version label** (`19c`, `21c`, `23ai`) to keep alignment with the price book.
- **Multiple versions for the same component is normal.** Keep them all listed to support mixed estates.
