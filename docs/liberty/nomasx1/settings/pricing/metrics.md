---
title: Metrics
description: "Catalog of licensing metrics — Application User, Named User Plus, Processor, Employee, etc."
keywords: [Nomasx-1, settings, metrics, licensing metric, NUP, Application User, Processor]
---

# Metrics

The **Metrics** screen is the short list of licensing metrics Nomasx-1 supports. One line per metric. Each row carries the metric identifier (referenced by the *Subscribed Licenses* and *Pricing* tables) and a friendly description.

The metric defines *how* a component is counted — by named user, by processor, by employee, by application user…. Changing a metric on a contract changes how compliance is computed.

---

## At a glance

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spmet-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#spmet-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Settings · Pricing · Metrics</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">METRIC ID</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APP_USER</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">NUP</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Processor</text>
</svg>

---

## Goal of the view

- **Declare the licensing metrics** the contracts use. Each metric is referenced by the *Subscribed Licenses* and *Pricing* tables.
- **Short by design.** Most companies live with four or five metrics — `APP_USER`, `NUP`, `PROC`, `EMP`, `SE`.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Metric ID** | `MET_ID` — identifier. | Reference used by other tables. |
| **Description** | `MET_DESCRIPTION` — friendly label. | Oracle name of the metric (`Application User`, `Named User Plus`, `Processor`, …). |

---

## Edit dialog

Click **Add** to declare a new metric, or double-click a row to edit.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spmet-dlg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#spmet-dlg)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Edit metric</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Metric ID</text>
  <rect x="60" y="116" width="200" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">NUP</text>

  <text x="280" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="280" y="116" width="640" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="292" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>
</svg>

| Field | What to enter |
|---|---|
| **Metric ID** | Short identifier (e.g. `APP_USER`, `NUP`, `PROC`, `EMP`). Referenced by *Pricing* and *Subscribed Licenses*. |
| **Description** | Oracle official metric name. Used when matching against the contract. |

---

## Tips & best practices

- **Keep the catalog minimal.** A handful of metrics is enough — invent more only when a contract actually requires it.
- **Always describe the metric** with the Oracle official label so the auditor can match it against the contract.
