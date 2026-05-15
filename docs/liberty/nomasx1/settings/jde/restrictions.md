---
title: Restrictions
description: "Mutually-exclusive components — when buying component X excludes the right to use component Y."
keywords: [Nomasx-1, settings, JDE, restrictions, mutual exclusion, components]
---

# Restrictions

The **Restrictions** screen captures the mutual-exclusion rules between JDE licence components. One line per `(Component, Restriction)`. Each row says: *if the company subscribes to the component, it cannot also use the restricted component without re-licensing.*

This is the symmetric counterpart of *Prerequisite*: where prerequisites add requirements, restrictions remove options. Nomasx-1 surfaces a restriction breach as a compliance gap the same way it surfaces an over-consumption.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjrtc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sjrtc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · JDE · Restrictions</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCT</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RESTRICTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Foundation Restricted</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Foundation Restricted</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
</svg>

---

## Goal of the view

- **Encode the mutual-exclusion rules** ("read-only" / "restricted" components that exclude another component).
- **Drive the compliance computation** to flag a forbidden combination just as it flags an over-consumption.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Product** | `RTC_PRODUCT` — Oracle product family. | The licence family the rule belongs to. |
| **Component** | `RTC_COMPONENT` — the licensed component. | The component that carries the restriction. |
| **Restriction** | `RTC_RESTRICTION` — the forbidden component. | The component that cannot co-exist with the licensed one. |

---

## Edit dialog

Double-click a row to edit the restriction rule.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjrtc-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sjrtc-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit restriction</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Product</text>
  <rect x="60" y="116" width="260" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE EnterpriseOne</text>

  <text x="340" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Component</text>
  <rect x="340" y="116" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="352" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Foundation Restricted</text>

  <text x="640" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Restriction</text>
  <rect x="640" y="116" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="652" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
</svg>

| Field | What to enter |
|---|---|
| **Product** | Oracle product family the rule belongs to. |
| **Component** | The licensed component that carries the restriction. |
| **Restriction** | The forbidden component — cannot co-exist with the licensed one. |

---

## Tips & best practices

- **Read-only / restricted entitlements** are the most common source of restrictions — Oracle sells *Foundation Restricted* with explicit exclusions of full modules.
- **Maintain the list at renewal time.** A change in contract scope often invalidates a previously valid combination.
- **Cross-reference with *Subscribed Licenses*** — if a CSI declares both sides of a restriction, the documentation behind the contract should be re-examined.
