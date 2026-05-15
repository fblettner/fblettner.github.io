---
title: System Code
description: "Mapping of every JDE System Code to its functional module and to the licence component it falls under."
keywords: [Nomasx-1, settings, JDE, system code, module, licence component, OUT mapping]
---

# System Code

The **System Code** screen maps every JDE System Code (`SY`) to its functional module and to the licence component Nomasx-1 uses for usage / compliance reporting. One line per `SY`. This is the table behind the *Component* column of every OUT view.

Maintaining this mapping correctly is what makes the licence compliance analysis truthful.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjsy-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sjsy-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · JDE · System Code</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SY</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="420" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MODULE</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT E1</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">04</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Accounts Payable</text>
  <text x="420" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CFIN</text>
  <text x="780" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Sales Order Management</text>
  <text x="420" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CSO</text>
  <text x="780" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">08</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Human Capital Mgmt</text>
  <text x="420" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Human Resources</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CHR</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Human Resources</text>
</svg>

---

## Goal of the view

- **Map JDE System Codes to functional modules.** The basis for the *Module* breakdown across the application.
- **Tie each `SY` to a licence component.** This is the only place where Nomasx-1 knows that a `P0411` (SY = 04) consumes the *Financials* licence.
- **Carry the E1 component label.** When Oracle ships its own component naming in JDE EnterpriseOne, the mapping keeps both perspectives readable.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **SY** | `SYC_ID` — JDE System Code. | The two-character code (e.g. `04`, `42`, `08`). |
| **Description** | `SYC_DESCRIPTION` — text. | Friendly module description. |
| **Module** | `SYC_MODULE` — high-level grouping. | Functional area used in non-licence views. |
| **Component E1** | `SYC_COMPONENT_E1` — JDE E1 component code. | The code Oracle exposes inside JDE EnterpriseOne for the component. |
| **Component ID** | `SYC_CPT_ID` — links to *Pricing → Components*. | Nomasx-1 licence component identifier. |
| **Component** | `CPT_COMPONENT` — denormalised label. | Human-readable licence component label. |

---

## Tips & best practices

- **Bring this mapping in line with your contractual catalog**, not the bundled Oracle defaults. A licence renegotiation often introduces new component names — update them here.
- **Every new SY introduced by a JDE upgrade** must be classified here; otherwise it appears unmapped in the OUT views.
- **Audit changes** through the hidden `SYC_AUDIT_USER` / `SYC_AUDIT_DATE` columns — useful when explaining why a component count moved.
