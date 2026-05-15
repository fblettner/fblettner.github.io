---
title: OUT — Objects
description: "Object Usage Tracking grouped by object — which programs of a licence component have ever been invoked."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, objects, programs, usage breakdown]
---

# OUT — Objects

The **OUT — Objects** screen lists the distinct **objects** of a licence component that have been invoked at least once on a connected application. One line per `(Application, Component, Object)` triplet, with the friendly description carried on the row.

It is the object-side complement of *OUT — Users / Roles*: the same dataset, pivoted by *what* was used instead of *who* used it.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outo-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#outo-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Objects</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="420" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="420" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Standard Voucher Entry</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="420" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Customer Ledger Inquiry</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03013</text>
  <text x="420" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Customer Master</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="420" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MRP Generation</text>
</svg>

---

## Goal of the view

For each licence component on a connected application:

- **What programs are actually used?** Each row is a program the source system has invoked at least once. The headline component count in *OUT — Components* hides this granular distribution.
- **Spot dead objects.** Objects of the component that never appear here are unused — useful when deciding whether to keep them on the menu.
- **Recognise the program with its friendly name.** *Description* makes the dataset readable to a non-technical reviewer.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — application identifier. Filterable. | The connected application. |
| **Component** | `CPT_ID` — licence component. Filterable, hidden by default. | The licence bucket. Used by the drill-down from *OUT — Components*. |
| **Object** | `LOUT_OBJECT` — technical object. | The program that has been invoked. |
| **Description** | `JDEO_DESCRIPTION` — friendly object label. | Human-readable label. |

---

## Tips & best practices

- **Filter on a *Component*** + sort by *Object* — the full *de facto* surface of the component on the application. Audit checks are easier when the universe is bounded.
- **An object that never shows up here** is dead weight — confirm with the business and consider removing it from the menu structure.
- **Cross-reference with *Rights — Roles* to see which role grants each object** — a heavily-used object backed by a single tight role is the cleanest configuration.
- **Use this screen to scope a per-object SoD analysis** — start from the *real* usage rather than from the theoretical rights matrix.
