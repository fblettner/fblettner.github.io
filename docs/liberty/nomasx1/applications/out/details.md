---
title: OUT — Details
description: "Object Usage Tracking detail — every (user, object) pair captured by the source system, with last-used date and version."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, details, raw OUT, usage trail]
---

# OUT — Details

The **OUT — Details** screen is the raw Object Usage Tracking record. One line per `(Application, Component, User, Object, Version)` quintuplet — every distinct call captured by the source system, with the timestamp of the most recent invocation.

This is the data set behind every aggregation Nomasx-1 produces — *OUT — Components*, *OUT — Users / Roles*, *OUT — Objects*, *Last Usage* in the user audit.

---

## At a glance

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outd-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#outd-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Details</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">USER</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJECT</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERSION</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LAST USAGE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Standard Voucher Entry</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Customer Ledger Inquiry</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MSMITH</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03013</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Customer Master</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="800" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="260" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="380" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MRP Generation</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="800" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
</svg>

---

## Goal of the view

For each (user, object, version) tuple ever invoked on a connected application:

- **The raw evidence.** Every other OUT view is an aggregation of this dataset — when something looks off in the summary, this is the screen to drill into.
- **Per-user per-object timeline.** Filter on a user and read the full inventory of what they have ever invoked, sorted by date.
- **Component traceability.** The hidden *Component* column carries the licence bucket — used internally by drill-down navigation from *OUT — Components*.

:::info[JDE-specific]
This view is built on top of `LICENSE_JDE_OUT` — the JDE Object Usage Tracking table. The component dimension is derived from the System Code mapping. Other source systems can produce an equivalent dataset by exposing their own usage / audit log.
:::

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — application identifier. Filterable. | The connected application. |
| **User ID** | `LOUT_USER` — user identifier. Filterable, scoped to the application. | Who invoked the object. |
| **Object** | `LOUT_OBJECT` — technical object. Filterable. | What was invoked. |
| **Description** | `JDEO_DESCRIPTION` — friendly object label. | Human-readable label of the object. |
| **Version** | `LOUT_VERSION` — processing version. | Which configuration variant was used. |
| **Last usage** | `LAST_USAGE` — date of the most recent invocation. | When the call happened. |

Hidden columns kept on the row: `CPT_ID` (used by the drill-down from *OUT — Components*).

---

## Tips & best practices

- **Filter on a *User ID*** + sort by *Last usage* descending — the user's usage trail, ordered. Anything older than the access-review window is fair game for revocation.
- **Filter on an *Object*** to see every user that invoked a given program, plus the dates. A long-tail of dormant users on a sensitive object is the cleanest revocation argument.
- **Compare with the *Rights* matrix** — a user invoking an object without an obvious declared right means either an inherited rule (cross-check with `*ALL` sign-on) or a security bypass.
- **A row with a recent *Last usage* on a sensitive object** is one of the strongest evidence pieces for an audit — file the line under the relevant SoD finding.
