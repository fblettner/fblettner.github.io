---
title: JD Edwards
description: "JD Edwards licence overview — active users, transactional users, dormant accounts and orphan transactional accounts per JDE application."
keywords: [Nomasx-1, licenses, JD Edwards, JDE licence, active users, transactional users, dormant accounts]
---

# JD Edwards

The **JD Edwards** screen summarises the licence-relevant figures for every JDE application connected to Nomasx-1. One line per JDE application (filter `APPS_TYPE = 'JDE'`).

This is the dashboard Oracle's JDE licence team asks for: how many distinct human users are active, how many actually transacted in the last 90 days, and how many accounts are missing from one side or the other.

---

## At a glance

<svg viewBox="0 0 1320 486" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ljd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ljd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ljd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ljd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="406" rx="14" fill="url(#ljd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">License - JD Edwards</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Advanced filters</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">2 rows · 12 ms</text>
  <rect x="989" y="118" width="98" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="990" y="119" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1013.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Table</text>
  <line x1="1038" y1="123" x2="1038" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Search…</text>
  <rect x="389" y="146" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="414.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Run</text>
  <rect x="596" y="146" width="117" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="606" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Max rows  default</text>
  <rect x="719" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="749.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Views</text>
  <rect x="786" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filters</text>
  <rect x="864" y="146" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="894.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Group</text>
  <rect x="931" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="967.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Columns</text>
  <rect x="1009" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Export ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="585" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">ENABLED USERS</text>
  <text x="705" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">WITH TRANSACTIONS</text>
  <text x="835" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">WITHOUT TRANSACTIONS</text>
  <text x="985" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">USERS NOT DECLARED</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="207" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="218.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="585" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">184</text>
  <text x="705" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">152</text>
  <text x="835" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">32</text>
  <text x="985" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="229" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="240.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="373" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-TEST</text>
  <text x="585" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">41</text>
  <text x="705" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="835" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">35</text>
  <text x="985" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="292" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="314" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="328.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="328.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="336" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="350.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="350.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="358" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="359" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="373" y="372.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="585" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="705" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="985" y="372.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="233" y="404" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="307" y="392" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="405.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="405" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Showing 1–2 of 2</text>
  <text x="1087" y="405" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="256" y="225.0" width="270" height="186" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="231.0" width="262" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="245.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Enabled Users</text>
  <text x="516" y="245.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="267.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users with transaction</text>
  <text x="516" y="267.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="289.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users without transactions</text>
  <text x="516" y="289.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="311.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Users not declared</text>
  <text x="516" y="311.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="333.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Modules with transactions</text>
  <text x="516" y="333.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="355.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Modules allowed</text>
  <text x="516" y="355.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="377.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Transactions details</text>
  <text x="516" y="377.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="399.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Display Objects allowed</text>
  <text x="516" y="399.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="442" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="457" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enabled Users</text>
  <text x="225.0" y="470" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">accounts enabled in JDE</text>
  <line x1="360.0" y1="442" x2="577" y2="381.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="515.0" y="442" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="457" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">With / Without Transactions</text>
  <text x="525.0" y="470" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">wrote in the period or not</text>
  <line x1="660.0" y1="442" x2="827" y2="381.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="815.0" y="442" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="457" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Users not declared</text>
  <text x="825.0" y="470" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">wrote without a JDE account</text>
  <line x1="960.0" y1="442" x2="977" y2="381.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row actions (···)</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">or right-click the row</text>
  <line x1="197" y1="215.0" x2="248" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="12" y="394.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="409.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Eight drill-downs</text>
  <text x="22" y="422.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">users, modules, transactions, objects</text>
  <line x1="197" y1="411.0" x2="276" y2="411.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">to Excel</text>
  <line x1="1119" y1="168.0" x2="1048.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ljd-arrow)"/>
</svg>

---

## Goal of the view

For each JDE application:

- **Headline active count.** *Active users* counts the JDE accounts that are still enabled and hold at least one role — the JDE side of the headcount.
- **Real usage.** *Transactional* counts how many of those active users actually wrote something in the last 90 days. This is the figure to bring to an Oracle licence renegotiation.
- **Detect orphan transactions.** *Transactional · No user* counts source-system transactions whose JDE user has been deleted from the security table — a strong indicator of clean-up gaps.

The hidden *No-transaction users* column is the inverse — active users with zero transaction over the window — visible in deeper drilldowns but not on the headline.

---

## Columns

| Column | Source | What it tells you |
|---|---|---|
| **Application ID** | `APPS_ID` — application identifier. | The JDE application. |
| **Enabled Users** | `JDE_ACTIVE_USERS` — distinct active users with at least one role. | Effective licence headcount. |
| **With Transactions** | `JDE_TRANSACTION_USERS` — active users that transacted in the last 90 days. | "Used the system" cohort. |
| **Without Transactions** | `JDE_NOTRANSACTION_USERS` — active users with no transaction. Hidden. | Inactive accounts — candidates for revocation. |
| **Users not declared** | `JDE_TRANSACTION_NOUSERS` — transactions in the window without a matching security user. | Cleanup gap. |

---

## Context menu

Click the **···** button at the start of a row, or right-click the row, to open its menu. Each shortcut drills into the *Active*, *Transactional* or *Non-transactional* cohort behind the headline counts.

| Action | Where it lands |
|---|---|
| **Display Enabled Users** | The active accounts on the application that hold at least one role. |
| **Display Users with transaction** | Same list, restricted to accounts that ran a transaction in the last 90 days. |
| **Display Users without Transactions** | Active accounts that have never run a transaction — first candidates for revocation. |
| **Display Users not declared** | The mirror case: accounts that ran transactions but are not registered as users in Nomasx-1. |
| **Display Modules with transactions** | For each licence module, how many users actually used it in the last 90 days. |
| **Display Modules allowed** | For each licence module, what is used versus what is subscribed — the compliance gap per module. |
| **Display Transactions details** | The detailed activity behind the module counts — user, object touched, last date of use. |
| **Display Objects allowed** | For each user, the objects accessible via the JDE security setup, regardless of whether they were used. |

---

## Tips & best practices

- **Transactional × component rate** is the most useful negotiation lever — if the *Transactional* count is well below the *Active* count, the licence is over-sized.
- **Address *Transactional · No user* first** — every transaction without a security user means either the user was deleted while keeping rights, or a non-JDE program writes through a service account that should be tagged.
- **The view is JDE-specific.** For other source systems, equivalent screens can be built around their own usage tables (see *Object Usage Tracking* for the underlying mechanism).
- **Combine with *Subscribed Licenses*** to compare the *Transactional* number against the contractual entitlement.
