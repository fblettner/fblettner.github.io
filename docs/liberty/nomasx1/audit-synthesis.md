---
title: Overview — Audit synthesis
description: "The Nomasx-1 home page: the Audit synthesis dashboard — users, roles, segregation-of-duties conflicts and licence exposure at a glance, the conflicts per refresh by process, the findings that need a decision, per process, per licence component, data freshness, activity and the users with the most conflicts — with an application filter, a period and Excel / PDF export."
keywords: [Nomasx-1, overview, audit synthesis, dashboard, segregation of duties, SoD, licence exposure, dormant accounts, privileged accounts, data freshness, export, PDF]
---

# Overview — Audit synthesis

**Overview**, the first entry of the Nomasx-1 menu, opens the **Audit synthesis**: on one page, the accounts, the segregation-of-duties conflicts and the licence position of every connected application, what needs a decision, and how fresh the data is. It is the page to open before an internal review, and the one to export for a steering committee.

---

## At a glance

<svg viewBox="0 0 1200 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxa-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxa-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxa-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="536" rx="14" fill="url(#nxa-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit synthesis</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Accounts, SoD conflicts and licence position at a glance</text>
  <line x1="240" y1="72" x2="960" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="240" y="98" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Last 12 months ▾</text>
  <text x="406" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="406" y="98" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="112.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">All ▾</text>
  <rect x="780" y="98" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="804.0" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="834" y="98" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="852.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="877" y="98" width="27" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="890.5" y="112.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="240.0" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Users</text>
  <text x="252.0" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Declared accounts</text>
  <text x="252.0" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">412</text>
  <text x="252.0" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">380 enabled · 32 disabled</text>
  <rect x="422.5" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="434.5" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Defined and assigned</text>
  <text x="434.5" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">96</text>
  <text x="434.5" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">81 assigned · 15 orphan</text>
  <rect x="605.0" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Segregation of duties</text>
  <text x="617.0" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Users carrying a conflict</text>
  <text x="617.0" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="617.0" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">1,204 lines · 3 privileged</text>
  <rect x="787.5" y="134" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Licence exposure</text>
  <text x="799.5" y="165" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Beyond the subscription</text>
  <text x="799.5" y="194" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">€84,500</text>
  <text x="799.5" y="216" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">4 of 22 components</text>
  <rect x="240" y="238" width="400" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="256" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflicts per refresh</text>
  <text x="252" y="269" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">By business process</text>
  <line x1="260" y1="414" x2="620" y2="414" stroke="#334155" strokeWidth="1"/>
  <rect x="276" y="354" width="40" height="60" fill="#4a9eff" opacity="0.85"/>
  <rect x="276" y="314" width="40" height="40" fill="#fbbf24" opacity="0.85"/>
  <rect x="276" y="290" width="40" height="24" fill="#c084fc" opacity="0.85"/>
  <rect x="348" y="358" width="40" height="56" fill="#4a9eff" opacity="0.85"/>
  <rect x="348" y="320" width="40" height="38" fill="#fbbf24" opacity="0.85"/>
  <rect x="348" y="298" width="40" height="22" fill="#c084fc" opacity="0.85"/>
  <rect x="420" y="366" width="40" height="48" fill="#4a9eff" opacity="0.85"/>
  <rect x="420" y="332" width="40" height="34" fill="#fbbf24" opacity="0.85"/>
  <rect x="420" y="314" width="40" height="18" fill="#c084fc" opacity="0.85"/>
  <rect x="492" y="372" width="40" height="42" fill="#4a9eff" opacity="0.85"/>
  <rect x="492" y="342" width="40" height="30" fill="#fbbf24" opacity="0.85"/>
  <rect x="492" y="326" width="40" height="16" fill="#c084fc" opacity="0.85"/>
  <rect x="564" y="378" width="40" height="36" fill="#4a9eff" opacity="0.85"/>
  <rect x="564" y="354" width="40" height="24" fill="#fbbf24" opacity="0.85"/>
  <rect x="564" y="342" width="40" height="12" fill="#c084fc" opacity="0.85"/>
  <text x="260" y="430" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">● Procure to pay  ● Order to cash  ● Finance</text>
  <rect x="650" y="238" width="310" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="256" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">What needs a decision</text>
  <text x="662" y="269" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Findings of the assessment report</text>
  <circle cx="666" cy="291" r="3.5" fill="#f87171"/>
  <text x="678" y="293" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Active SoD violations</text>
  <text x="678" y="305" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">12 of 140 rules triggered</text>
  <text x="948" y="293" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">37</text>
  <circle cx="666" cy="327" r="3.5" fill="#f87171"/>
  <text x="678" y="329" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Self-conflicting roles</text>
  <text x="678" y="341" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">fix the role, every holder is resolved</text>
  <text x="948" y="329" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <circle cx="666" cy="363" r="3.5" fill="#fb923c"/>
  <text x="678" y="365" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Components over subscription</text>
  <text x="678" y="377" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">buy, or remove rights</text>
  <text x="948" y="365" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">€84,500</text>
  <circle cx="666" cy="399" r="3.5" fill="#4ade80"/>
  <text x="678" y="401" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Generic / shared accounts</text>
  <text x="948" y="401" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <rect x="240" y="448" width="400" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="466" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Data freshness</text>
  <text x="252" y="479" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Last collection per module</text>
  <circle cx="256" cy="501" r="3.5" fill="#4ade80"/>
  <text x="268" y="503" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">SECURITY</text>
  <rect x="314.32" y="494" width="60" height="14" rx="7.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="344.32" y="504.2" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28</text>
  <text x="628" y="503" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif"></text>
  <rect x="650" y="448" width="310" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="466" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Per licence component</text>
  <text x="662" y="479" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="662" y="502" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">General Accounting</text>
  <text x="756.72" y="502" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">50 subscribed</text>
  <text x="948" y="502" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">64</text>
  <rect x="662" y="507" width="286" height="5" rx="2.5" fill="#1e293b"/>
  <rect x="662" y="507" width="286" height="5" rx="2.5" fill="#4a9eff"/>
  <rect x="10" y="112" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application filter</text>
  <text x="20" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">All = the totals</text>
  <line x1="210" y1="129.0" x2="470" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four figures</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users, roles, SoD, licences</text>
  <line x1="210" y1="177.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trend</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">stacked by process</text>
  <line x1="210" y1="347.0" x2="260" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="10" y="470" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Freshness</text>
  <text x="20" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">green &lt; 2 days, red &gt; 8</text>
  <line x1="210" y1="487.0" x2="256" y2="501" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="1000" y="96" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Excel or PDF synthesis</text>
  <line x1="1000" y1="113.0" x2="909" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="1000" y="290" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Decision list</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by severity, with the figure</text>
  <line x1="1000" y1="307.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
  <rect x="1000" y="470" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users vs subscribed</text>
  <text x="1010" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per component</text>
  <line x1="1000" y1="487.0" x2="960" y2="500" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxa-arrow)"/>
</svg>

---

## The bar \{#bar\}

| Control | Effect |
|---|---|
| **Period** | Opens on *Last 12 months*. It applies to the two time charts: the conflicts per refresh and the transacting users per month. |
| **Application** | **All** shows the totals across the applications; picking one narrows every widget to it. |
| **Excel**, **PDF** | Export the page as it stands — the application picked and the period. The PDF is a synthesis: a cover naming the period and the filter, the four figures as cards, the charts drawn, the lists as tables. |
| **↻** | Reloads every widget; *Updated at* gives the time of the data. |

---

## The four figures \{#figures\}

| Card | Figure | Detail line |
|---|---|---|
| **Users** — declared accounts | The accounts collected. | Enabled · disabled · **dormant**: enabled without a login in the last 90 days. |
| **Roles** — defined roles and their assignment | The roles defined. | Assigned · **orphan** (assigned to no user) · users holding more than 10 roles, with the maximum. |
| **Segregation of duties** — users carrying a conflict | The users with at least one conflict. | Conflict lines · privileged users in conflict · business processes concerned. |
| **Licence exposure** — components deployed beyond the subscription | The value of the users over the subscribed quantities: list price plus three years of support per user over. | Components over the subscription out of all components · users over. |

The exposure reads the [Subscribed Licenses](./licenses/subscribed.md) and the [pricing catalogue](./settings/pricing/pricing.md): a component without a price counts zero.

---

## What needs a decision \{#decisions\}

The findings of the [Security & SoD assessment report](./reports/security-sox.md), one line each, with a coloured dot — red to act on, orange to review, blue for information, green when nothing is found — and the count or the amount on the right:

| Finding | What to do |
|---|---|
| **Active SoD violations** — or *No SoD violation*, or *No SoD matrix defined* | The matrix rules triggered out of all rules, and the privileged pairings. Red when a privileged user is concerned. Without a matrix, define it under [Settings → SoD](./settings/sod/matrix.md). |
| **Self-conflicting roles** | A role grants both sides of an incompatible pair on its own: fix the role, and every holder is resolved. |
| **Conflicting role combinations** | Pairs of roles that breach SoD only when held together: split the duties or revise the assignments. |
| **Components over subscription** | More users with rights than licences: buy, or remove rights. The amount is the exposure; red from 250,000, orange from 25,000. |
| **Privileged accounts** | Super-user access: confirm each one is owned, justified and reviewed quarterly. |
| **Dormant enabled accounts** | No login within 90 days, with those that never logged in: disable or re-certify. |
| **Generic / shared accounts** | Actions cannot be attributed to a person: replace them with nominative accounts. |
| **\*PUBLIC object grants** | Objects open to every user by default: confirm none is a sensitive transaction. |
| **Enabled accounts without roles** | Incomplete provisioning, or accounts to disable. |
| **Direct user-level grants** | Rights granted to a user instead of a role, outside role-based access control. |
| **Users with more than 10 roles** | Broad role accumulation: right-size, then run the detection again. |
| **Orphan roles** | Roles assigned to no user: remove or repurpose. |

---

## Trend and detail \{#detail\}

| Widget | Shows |
|---|---|
| **Conflicts per refresh** | The conflict lines at each SoD refresh over the period, stacked by business process — the trend of the remediation. |
| **Per process** | Users in conflict per business process, with the number of conflict lines; red when privileged users are among them. |
| **Per licence component** | Users with rights per component, against the subscribed quantity. Technical and linked accounts are excluded; active users are those with a login in the last 90 days. |
| **Data freshness** | The last collection per module, with its age: green under 2 days, orange under 8, red beyond. A red line means the figures above it are old. |
| **Transacting users per month** | The distinct users with transactions each month, the applications added up. |
| **Users with the most conflicts** | The users carrying the most conflict lines, with the number of processes; privileged accounts are tagged. |

The detail behind each widget is in the screens: [Conflicts](./applications/conflicts/summary.md), [Users](./security/users.md), [Roles](./security/roles.md), [Usage Report](./licenses/usage-report.md), [Financial Report](./licenses/financial-report.md).

---

## Who sees it \{#access\}

Each widget shows only when the user may run its query: a user without access to the segregation-of-duties data sees the page without those widgets. The row-level scope of the user's roles applies to every figure and to the export.

---

## Related

- [Data Explorer](./data-explorer.md) — to go beyond the synthesis, by any field.
- [Security & SoD assessment](./reports/security-sox.md) — the full report behind the decision list.
