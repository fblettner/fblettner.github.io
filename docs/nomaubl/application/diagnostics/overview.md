---
title: Diagnostics
description: "The NomaUBL Diagnostics page gathers errors and logs in four views of one page — Integration errors, Processing log, Failures and Server log — each granted separately per role, with dashboard links landing on the right view."
keywords: [NomaUBL, diagnostics, integration errors, processing log, failures, server log, errors, logs, troubleshooting, roles, JD Edwards, SAP, NetSuite, custom ERP]
---

# Diagnostics

**Diagnostics** is the single page for everything that went wrong and everything the server wrote down. It hosts four views, picked from a switcher at the top of the page:

| View | What it answers | Page |
|---|---|---|
| **Integration errors** | Which validation rules fail, on which invoices — by rule (the default) or by event. | [Integration errors](./integration-errors.md) |
| **Processing log** | What each processing run did, file by file, step by step. | [Processing log](./processing-log.md) |
| **Failures** | Every failure in one list — validation, PA rejection, send and import, processing, job — unresolved by default. | [Failures](./failures.md) |
| **Server log** | The tail of the server log file, with severity and module filters. | [Server log](./server-log.md) |

Open it from the sidebar — **Diagnostics**, in the Navigation group.

---

## At a glance

<svg viewBox="0 0 1200 346" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="302" rx="14" fill="url(#dg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostics</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Integration errors by rule or by event, every failure in one list, the processing log and the server log.</text>
  <rect x="240" y="80" width="374" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="122" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="302.0" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Integration errors</text>
  <line x1="364" y1="85" x2="364" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="415.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing log</text>
  <line x1="466" y1="85" x2="466" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="500.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Failures</text>
  <line x1="534" y1="85" x2="534" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="574.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Server log</text>
  <rect x="850" y="80" width="110" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="95.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Yesterday ▾</text>
  <rect x="240" y="118" width="193" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="119" width="59" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="270.5" y="132.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">By rule</text>
  <line x1="301" y1="123" x2="301" y2="135" stroke="#334155" strokeWidth="1"/>
  <text x="334.0" y="132.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">By event</text>
  <line x1="367" y1="123" x2="367" y2="135" stroke="#334155" strokeWidth="1"/>
  <text x="400.0" y="132.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Detailed</text>
  <rect x="447" y="120" width="48" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="471.0" y="132.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL 38</text>
  <rect x="501" y="120" width="83" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="542.5" y="132.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Integration 4</text>
  <rect x="240" y="154" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULE</text>
  <text x="350" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INVOICES</text>
  <text x="420" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="750" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <text x="860" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATE</text>
  <rect x="240" y="186" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-CO-15</text>
  <text x="350" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24</text>
  <text x="420" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoice total with VAT = total without VAT + VAT</text>
  <text x="750" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="860" y="191.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="878.5" y="202.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Open</text>
  <rect x="240" y="216" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <text x="350" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9</text>
  <text x="420" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Buyer SIREN is mandatory</text>
  <text x="750" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="860" y="221.0" width="37" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="878.5" y="232.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Open</text>
  <rect x="240" y="246" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-S-08</text>
  <text x="350" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="420" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">VAT breakdown per rate</text>
  <text x="750" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">credit_notes</text>
  <rect x="860" y="251.0" width="37" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="878.5" y="262.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Open</text>
  <rect x="240" y="276" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">XSD</text>
  <text x="350" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="420" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Element out of sequence</text>
  <text x="750" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="860" y="281.0" width="56" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="888.0" y="292.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Resolved</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four views, one page</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">each view granted on its own</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">By rule first</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the morning read</text>
  <line x1="200" y1="217.0" x2="280" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rule description</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the Schematron packs</text>
  <line x1="200" y1="297.0" x2="420" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="1000" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Yesterday by default</text>
  <text x="1010" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">change the period here</text>
  <line x1="1000" y1="93.0" x2="960" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared data table</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sort, columns, paging, export</text>
  <line x1="1000" y1="217.0" x2="960" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
</svg>

- **One grant per view.** Each view keeps the page grant it had before it joined Diagnostics: *Integration errors*, *Processing log*, *Server log*, plus *Failures* for the new view. A role sees only the views it is granted, and the sidebar shows Diagnostics as soon as one of them is granted. See [Roles](../../configuration/security/roles.md).
- **Links land on the right view.** The cards of the [Dashboard](../dashboard.md) and the [Tech dashboard](../tech-dashboard.md) open Diagnostics on the matching view, with the same filters.
- **Yesterday by default.** Every dated view starts on yesterday's activity; change the period from its bar.
- **Integration errors opens by rule.** The by-rule grid is the first read of a morning; switch to the event list from the view itself.

---

## Tips & best practices

- **Start from Failures** when the question is "what needs fixing": it gathers the four kinds of failure and hides those already resolved.
- **Drill into Integration errors** when one validation rule dominates: the by-rule grid groups the invoices by rule and source.
- **Use the Processing log for a file**, the **Server log for the server** — a failed run shows in the first, an exception or a connection problem in the second.
