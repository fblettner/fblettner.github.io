---
title: Diagnostics
description: "The NomaUBL Diagnostics page gathers errors and logs in four views of one page — Integration errors, Processing log, Failures and Server log — each granted separately per role, with dashboard links landing on the right view."
keywords: [NomaUBL, diagnostics, integration errors, processing log, failures, server log, errors, logs, troubleshooting, roles, JD Edwards, SAP, NetSuite, custom ERP]
---

# Diagnostics

**Diagnostics** is the single page for everything that went wrong and everything the server wrote down. It hosts four views, picked from a row of compact cards under the header, each saying what it shows (the full text on hover); only the views the role grants are shown, and the row is hidden when a single view is left:

| View | What it answers | Page |
|---|---|---|
| **Integration errors** | Which validation rules fail, on which invoices — by rule (the default) or by event. | [Integration errors](./integration-errors.md) |
| **Processing log** | What each processing run did, file by file, step by step. | [Processing log](./processing-log.md) |
| **Failures** | Every failure in one list — validation, PA rejection, send and import, processing, job — unresolved by default. | [Failures](./failures.md) |
| **Server log** | The tail of the server log file, with severity and module filters. | [Server log](./server-log.md) |

Open it from the sidebar — **Diagnostics**, in the Navigation group.

---

## At a glance

<svg viewBox="0 0 1200 322" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="282" rx="14" fill="url(#dgo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostics</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Errors, failures and logs of the instance.</text>
  <rect x="240.0" y="80" width="172.5" height="40" rx="8" fill="rgba(255,69,58,0.08)" stroke="#f87171" strokeWidth="1.4"/>
  <rect x="250.0" y="89" width="20" height="20" rx="6" fill="#f87171" fillOpacity="0.18"/>
  <text x="278.0" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Integration errors</text>
  <text x="278.0" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Findings by rule, by event or in detail</text>
  <rect x="422.5" y="80" width="172.5" height="40" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="89" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="460.5" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Processing log</text>
  <text x="460.5" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Every run with its files and status</text>
  <rect x="605.0" y="80" width="172.5" height="40" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="89" width="20" height="20" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="643.0" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Failures</text>
  <text x="643.0" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Every unresolved failure in one list</text>
  <rect x="787.5" y="80" width="172.5" height="40" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="797.5" y="89" width="20" height="20" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="825.5" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="825.5" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">By severity and module</text>
  <rect x="240" y="136" width="187" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="137" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269.5" y="150.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">By rule</text>
  <line x1="299" y1="141" x2="299" y2="153" stroke="#334155" strokeWidth="1"/>
  <text x="331.0" y="150.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">By event</text>
  <line x1="363" y1="141" x2="363" y2="153" stroke="#334155" strokeWidth="1"/>
  <text x="395.0" y="150.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Detailed</text>
  <rect x="810" y="136" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="820" y="150.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 Oct 2026 ▾</text>
  <rect x="240" y="170" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULE</text>
  <text x="360" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICES</text>
  <text x="430" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="760" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <text x="870" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <rect x="240" y="202" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-CO-15</text>
  <text x="360" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24</text>
  <text x="430" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoice total with VAT = total without VAT + VAT</text>
  <text x="760" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="870" y="207.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="888.5" y="218.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Open</text>
  <rect x="240" y="232" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <text x="360" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9</text>
  <text x="430" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Buyer SIREN is mandatory</text>
  <text x="760" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="870" y="237.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="888.5" y="248.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Open</text>
  <rect x="240" y="262" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-S-08</text>
  <text x="360" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="430" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">VAT breakdown per rate</text>
  <text x="760" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">credit_notes</text>
  <rect x="870" y="267.0" width="37" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="888.5" y="278.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Open</text>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four view cards</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">only the granted views</text>
  <line x1="200" y1="101.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Integration errors</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens by rule</text>
  <line x1="200" y1="193.0" x2="240" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hover a card</text>
  <text x="1010" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its full description</text>
  <line x1="1000" y1="101.0" x2="950" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="1010" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default period of the view</text>
  <line x1="1000" y1="149.0" x2="960" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared data table</text>
  <text x="1010" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sort, columns, paging, export</text>
  <line x1="1000" y1="223.0" x2="950" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
</svg>

- **One grant per view.** Each view keeps the page grant it had before it joined Diagnostics: *Integration errors*, *Processing log*, *Server log*, plus *Failures* for the new view. A role sees only the views it is granted, and the sidebar shows Diagnostics as soon as one of them is granted. See [Roles](../../configuration/security/roles.md).
- **Links land on the right view.** The cards of the [Dashboard](../dashboard.md) and the [Tech dashboard](../tech-dashboard.md) open Diagnostics on the matching view, with the same filters.
- **One default period per view.** Each dated view opens on the [default period](../../configuration/default-periods.md#default-periods) set for it (*Diagnostics*, *Integration errors*, *Processing log*), this month unless set; change the period from its bar.
- **Integration errors opens by rule.** The by-rule grid is the first read of a morning; switch to the event list from the view itself.

---

## Tips & best practices

- **Start from Failures** when the question is "what needs fixing": it gathers the four kinds of failure and hides those already resolved.
- **Drill into Integration errors** when one validation rule dominates: the by-rule grid groups the invoices by rule and source.
- **Use the Processing log for a file**, the **Server log for the server** — a failed run shows in the first, an exception or a connection problem in the second.
