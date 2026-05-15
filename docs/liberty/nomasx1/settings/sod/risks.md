---
title: SoD — Risks
description: "Named risks within each business process, with the severity level used to weight the segregation-of-duties findings."
keywords: [Nomasx-1, settings, SoD, risks, risk catalog, severity, audit]
---

# SoD — Risks

The **Risks** screen catalogs the named risks declared within each process. One line per `(Application, Process, Risk)`. Each row carries a friendly name and a severity level — the multiplier the *Matrix* uses to weight the conflicts in the dashboards.

Risks are the *what could go wrong* — *Approve a payment to a vendor you created yourself*, *Adjust the receivable on a customer you maintain*. Activities are the verbs; risks are the sentences.

---

## At a glance

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sodr-card2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sodr-card2)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · SoD · Risks</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROCESS</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK ID</text>
  <text x="420" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RISK NAME</text>
  <text x="860" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LEVEL</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-01</text>
  <text x="420" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Create vendor &amp; approve payment</text>
  <text x="860" y="149" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">High</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P2P</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R-P2P-02</text>
  <text x="420" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Modify PO &amp; approve receipt</text>
  <text x="860" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Medium</text>
</svg>

---

## Goal of the view

- **Name the risks** the audit framework expects.
- **Weight the impact.** *Risk level* (`High`, `Medium`, `Low`, or a numeric scale) is the multiplier the dashboards apply to the conflict count.
- **One row per risk policy.** Avoid combining several risks into one row — the matrix reasons one risk at a time.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `RISK_APPS_ID` — application. | Application the risk applies to. |
| **Process ID** | `RISK_PROCESS_ID` — links to *Process*. | The business process the risk belongs to. |
| **Risk ID** | `RISK_ID` — identifier. | Reference used by *Matrix* and the *Conflicts* views. |
| **Risk Name** | `RISK_NAME` — descriptive label. | Human-readable name of the risk. |
| **Risk Level** | `RISK_LEVEL` — severity. | `High` / `Medium` / `Low` (or numeric scale) — drives weighting. |

---

## Tips & best practices

- **Write the risk in sentence form.** *Create vendor + Approve payment* is clearer than *VEN-PAY*. Auditors read the sentence, the code is for filtering.
- **Pick a consistent severity scale.** Use `High` / `Medium` / `Low` everywhere, or a numeric scale everywhere. Mixed scales make the dashboards hard to interpret.
- **High-severity risks should be few.** Marking everything `High` empties the signal — the matrix loses its prioritisation value.
