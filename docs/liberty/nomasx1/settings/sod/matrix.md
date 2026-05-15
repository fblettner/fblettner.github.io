---
title: SoD — Matrix
description: "Pairs of incompatible activities — the SoD matrix that defines which activity combinations trigger which risk."
keywords: [Nomasx-1, settings, SoD, matrix, incompatible activities, risk pairing]
---

# SoD — Matrix

The **Matrix** screen lists the pairs of activities that produce an SoD risk. One line per `(Application, Process, Activity 1, Activity 2)`. Each row maps the pair to a *Risk* and a *Risk level* — the **rules engine** behind every conflict the *Conflicts* views surface.

This is the most operationally important SoD setting: editing a row here changes what every conflict screen computes from the next refresh.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodm-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sodm-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · SoD · Matrix</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="240" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 1</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACT 2</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VEND-CR</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PAY-APV</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="700" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">High</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="240" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PO-MOD</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RCT-APV</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="700" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Medium</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">O2C</text>
  <text x="240" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CUST-CR</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ADJ-POST</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-O2C-04</text>
  <text x="700" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Medium</text>
</svg>

---

## Goal of the view

- **Encode the SoD rule book** — every pair declared here generates a row in *Conflicts → Details* whenever a user holds the two activities.
- **Tie each pair to a named risk.** The *Risk* column is what auditors read; the *Risk level* drives weighting.
- **Maintain symmetrically.** `(A, B)` and `(B, A)` mean the same thing — declare one and let the engine traverse both ways.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `MATRIX_APPS_ID` — application. | The application the rule applies to. |
| **Process ID** | `MATRIX_PROCESS_ID` — process. | The business process. |
| **Activity 1** | `MATRIX_ACT1_ID` — links to *Activities*. | First incompatible action. |
| **Activity 2** | `MATRIX_ACT2_ID` — links to *Activities*. | Second incompatible action. |
| **Risk ID** | `MATRIX_RISK_ID` — links to *Risks*. | The named risk the pair instantiates. |
| **Risk level** | `MATRIX_RISK_LEVEL` — severity. | Multiplier applied to the conflicts produced. |

---

## Tips & best practices

- **Adding a row** generates new conflicts at the next SoD refresh — coordinate with the security administrator and HR.
- **Removing a row** clears existing conflicts at the next refresh. Document the rationale: an auditor reviewing the SoD framework will ask why.
- **Risk level here should match the *Risks* catalog level** — keeping the two in sync avoids confusing dashboard rendering.
- **A pair of activities with low business interaction** should not be a rule — keep the matrix to the conflicts that actually happen in practice.
