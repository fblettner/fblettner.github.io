---
title: Segregation of duties
description: "The Nomasx-1 Segregation-of-duties monitoring dashboard: users in conflict, conflict lines, conflicts proven by activity and roles involved, the conflicts per refresh by risk level, the risks hit, the role pairs behind them, the users with the most conflicts, per process, and the links to the conflict screens and the Explorer."
keywords: [Nomasx-1, segregation of duties, SoD, dashboard, conflicts, proven conflicts, risks, role pairs, trend, risk level, monitoring]
---

# Segregation of duties

**Segregation of duties**, right under **Overview** in the Nomasx-1 menu, follows the conflicts the [SoD matrix](./settings/sod/matrix.md) finds in the access of every connected application: how many, which risks, which roles cause them, which conflicts were actually exercised, and how it evolves from one refresh to the next.

---

## At a glance

<svg viewBox="0 0 1200 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="418" rx="14" fill="url(#nxs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Segregation-of-duties monitoring</text>
  <text x="240" y="74" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="240" y="80" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="94.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 12 months ▾</text>
  <text x="406" y="74" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="406" y="80" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="94.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">All ▾</text>
  <rect x="240.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Users in conflict</text>
  <text x="252.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">At the latest refresh</text>
  <text x="252.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="252.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">3 privileged · refreshed 2026-10-28</text>
  <rect x="422.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Conflict lines</text>
  <text x="434.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">User × risk × activity pair</text>
  <text x="434.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1,204</text>
  <text x="434.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">18 risks hit in 4 processes</text>
  <rect x="605.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Proven by activity</text>
  <text x="617.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Both activities actually used</text>
  <text x="617.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="617.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">41 proven conflict lines</text>
  <rect x="787.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Roles involved</text>
  <text x="799.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">One side of a conflict</text>
  <text x="799.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">26</text>
  <text x="799.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">31 role pairs</text>
  <rect x="240" y="218" width="400" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflicts per refresh</text>
  <text x="252" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">By risk level</text>
  <line x1="260" y1="402" x2="620" y2="402" stroke="#334155" strokeWidth="1"/>
  <rect x="276" y="376" width="40" height="26" fill="#f87171" opacity="0.85"/>
  <rect x="276" y="311" width="40" height="65" fill="#fb923c" opacity="0.85"/>
  <rect x="276" y="268" width="40" height="43" fill="#4a9eff" opacity="0.85"/>
  <rect x="348" y="378" width="40" height="24" fill="#f87171" opacity="0.85"/>
  <rect x="348" y="318" width="40" height="61" fill="#fb923c" opacity="0.85"/>
  <rect x="348" y="277" width="40" height="41" fill="#4a9eff" opacity="0.85"/>
  <rect x="420" y="383" width="40" height="19" fill="#f87171" opacity="0.85"/>
  <rect x="420" y="331" width="40" height="52" fill="#fb923c" opacity="0.85"/>
  <rect x="420" y="294" width="40" height="37" fill="#4a9eff" opacity="0.85"/>
  <rect x="492" y="385" width="40" height="17" fill="#f87171" opacity="0.85"/>
  <rect x="492" y="339" width="40" height="45" fill="#fb923c" opacity="0.85"/>
  <rect x="492" y="307" width="40" height="32" fill="#4a9eff" opacity="0.85"/>
  <rect x="564" y="389" width="40" height="13" fill="#f87171" opacity="0.85"/>
  <rect x="564" y="350" width="40" height="39" fill="#fb923c" opacity="0.85"/>
  <rect x="564" y="324" width="40" height="26" fill="#4a9eff" opacity="0.85"/>
  <rect x="650" y="218" width="310" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Risks hit</text>
  <text x="662" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Most users first; the dot is the risk level</text>
  <circle cx="666" cy="271" r="3.5" fill="#f87171"/>
  <text x="678" y="273" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Create a supplier and pay it</text>
  <text x="678" y="285" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="948" y="273" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">14 users</text>
  <circle cx="666" cy="307" r="3.5" fill="#f87171"/>
  <text x="678" y="309" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Post and approve journal entries</text>
  <text x="678" y="321" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="948" y="309" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 users</text>
  <circle cx="666" cy="343" r="3.5" fill="#fb923c"/>
  <text x="678" y="345" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Change prices and invoice</text>
  <text x="678" y="357" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="948" y="345" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">6 users</text>
  <circle cx="666" cy="379" r="3.5" fill="#4a9eff"/>
  <text x="678" y="381" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Receive and adjust stock</text>
  <text x="678" y="393" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Inventory</text>
  <text x="948" y="381" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">3 users</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application filter</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All = the totals</text>
  <line x1="210" y1="97.0" x2="406" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
  <rect x="1000" y="64" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="79" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Proven</text>
  <text x="1010" y="92" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">both activities used</text>
  <line x1="1000" y1="81.0" x2="691.25" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
  <rect x="10" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trend</text>
  <text x="20" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by risk level</text>
  <line x1="210" y1="337.0" x2="260" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risks hit</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the dot is the level</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
</svg>

---

## The bar \{#bar\}

The **Period** — *Last 12 months* when the page opens — applies to the trend chart. **Application**: **All** gives the totals across the applications; picking one narrows every widget to it. **Excel** and **PDF** export the page as it stands.

---

## The four figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Users in conflict** — at the latest refresh | The users carrying at least one conflict. | The privileged ones, and the date of the latest refresh. |
| **Conflict lines** — user × risk × activity pair | Every conflict found. | The risks hit and the processes concerned. |
| **Proven by activity** — both conflicting activities actually used | The users who used both sides of a conflict, according to the activity log. | The proven conflict lines. |
| **Roles involved** — roles carrying one side of a conflict | The roles involved. | The role pairs behind the conflicts. |

A conflict is **proven** when the user's activity log shows transactions on the objects of both incompatible activities: the risk is not theoretical. It needs the activity log to be collected.

---

## Trend and detail \{#detail\}

| Widget | Shows |
|---|---|
| **Conflicts per refresh** | The conflict lines at each refresh of the period, stacked by risk level — the trend of the remediation. |
| **Risks hit** | The risks with the most users first; the dot gives the risk level — red for high or critical, orange for medium, blue otherwise. |
| **Role pairs** | The pairs of roles that create the most conflicts, with the users concerned: red for a conflict inside a single role — fix the role and every holder is resolved —, orange for two roles held together. |
| **Users with the most conflicts** | The users carrying the most conflict lines, with the number of processes; privileged accounts are flagged. |
| **Per process** | The users in conflict per business process. |
| **Investigate** | Links to the conflict screens — Summary, Details, Proven, Users, Roles — and to the Data Explorer, where the *Segregation of duties* model goes further. |

---

## Who sees it \{#access\}

Each widget shows only when the user may run its query, and the row-level scope of the user's roles applies to every figure and to the export.

---

## Related

- [Overview — Audit synthesis](./audit-synthesis.md) — the synthesis of the whole application.
- [Security review](./security-review.md) — the accounts and rights to review.
- [Jobs](./jobs.md) — refresh the conflicts: *Collect security and SoD*.
