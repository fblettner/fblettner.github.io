---
title: Reclassification
description: "Override of the JDE object → SY mapping when the default classification is wrong or missing."
keywords: [Nomasx-1, settings, JDE, reclassification, object override, system code]
---

# Reclassification

The **Reclassification** screen overrides the default System Code that Nomasx-1 would otherwise apply to a JDE object. One line per object. Useful when the default SY of a program does not match its actual licence relevance — typically when a program is *technically* in `H9` but *commercially* in `Financials`.

Each row says: *for this object, use this `SY` instead of the default one*. The change propagates to every OUT view and licence report that resolves through *System Code*.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjrcl-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sjrcl-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · JDE · Reclassification</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RECLASSIFIED SY</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411Z1</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Voucher Z-File Interface</text>
  <text x="700" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">04</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R0008P</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Date pattern report</text>
  <text x="700" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">09</text>
</svg>

---

## Goal of the view

- **Override the SY** when JDE's own classification does not reflect the contractual reality.
- **Keep the override list short.** Every entry is an exception — too many overrides make the licence model hard to defend in audit.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Object** | `JDES_OBJECT` — technical object. | The program being reclassified. |
| **Description** | `JDES_DESCRIPTION` — friendly label. | What the program does. |
| **Reclassified SY** | `JDES_SY` — System Code. | The SY Nomasx-1 should use instead of the JDE default. |

---

## Tips & best practices

- **Document the rationale** of each override — a one-line description that a future auditor can read.
- **Re-validate the list after an Oracle upgrade.** JDE sometimes moves an object between system codes, retroactively making an override redundant.
- **Avoid systemic overrides** — if more than a handful of objects from the same module need reclassification, consider revisiting the mapping in *System Code* instead.
