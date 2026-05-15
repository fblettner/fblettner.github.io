---
title: Prerequisite
description: "Inter-component prerequisites — when buying component X requires having component Y."
keywords: [Nomasx-1, settings, JDE, prerequisite, components, Oracle dependency]
---

# Prerequisite

The **Prerequisite** screen captures the contractual prerequisites between JDE licence components. One line per `(Component, Prerequisite)`. Each row says: *to use the component, the prerequisite component must also be licensed*.

It is the catalog of dependencies Nomasx-1 applies when computing the compliance: if you have rights to a component but not to its prerequisite, the matrix surfaces the missing prerequisite as a separate compliance gap.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjprq-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sjprq-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · JDE · Prerequisite</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCT</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PREREQUISITE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manufacturing</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
</svg>

---

## Goal of the view

- **Encode the licence dependency graph.** Oracle ships prerequisite rules between components — codify them here so Nomasx-1 cross-checks them automatically.
- **Drive compliance prerequisite warnings.** Missing prerequisites surface as a compliance line item in the reports.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Product** | `PRQ_PRODUCT` — Oracle product family. | The licence family the rule belongs to. |
| **Component** | `PRQ_COMPONENT` — component requiring the prerequisite. | The dependent component. |
| **Prerequisite** | `PRQ_PREREQ` — required component. | The component that must also be licensed. |

---

## Tips & best practices

- **Keep the rules in sync with Oracle's price book and supplemental terms** — both can introduce new prerequisites at renewal time.
- **A circular prerequisite** is a configuration mistake — Nomasx-1 will not loop, but the compliance computation will mis-report.
- **Document each rule with a brief justification** in change notes, especially for non-obvious dependencies between non-financial modules.
