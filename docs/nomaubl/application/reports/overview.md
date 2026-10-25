---
title: Reports
description: "Reporting for NomaUBL — four cards: SQL integrity checks against a source system, and the audit, implementation and technical reports generated as PDF or Markdown. Status statistics are on the Statistics dashboard, free analyses in the Explorer."
keywords: [NomaUBL, reports, reporting, audit report, implementation report, technical report, statistics, status, rejection reason, integrity checks, pivot, Excel export, Explorer, JD Edwards, SAP, NetSuite, custom ERP]
---

# Reports

The **Reports** page is the analytical view of NomaUBL — it turns the invoice, archive, lifecycle and validation data into figures a team can read and export, without writing SQL. A row of four cards picks the report, each saying what it is for; the page opens on the first one, **Integrity** — SQL checks that list what is missing or wrong compared with a source system. The three others generate a document on demand: the [Audit report](./audit-report.md), the [Implementation report](./implementation-report.md) and the [Technical report](./technical-report.md). The status statistics are on the [Statistics](../statistics.md) dashboard; free analyses — any field, grouping, chart or dashboard — are built in the [Explorer](../explorer.md).

Open it from the sidebar — **Reports**. Access is granted per role (see [Access](#access) below).

---

## At a glance

<svg viewBox="0 0 1200 408" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpin-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpin-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpin-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpin-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="368" rx="14" fill="url(#rpin-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#4ade80" strokeWidth="1.4"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Compare with JDE, integrate</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="72" width="22" height="22" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="462.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Audit report</text>
  <text x="462.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Key figures of a period</text>
  <rect x="605.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="72" width="22" height="22" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="645.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Implementation report</text>
  <text x="645.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">How this instance works</text>
  <rect x="787.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="797.5" y="72" width="22" height="22" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="827.5" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Technical report</text>
  <text x="827.5" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Developer documentation</text>
  <rect x="240" y="120" width="230" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Checks</text>
  <rect x="248" y="154" width="214" height="44" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="258" y="172" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Invoices missing in NomaUBL</text>
  <text x="258" y="187" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">missing in the target · jde-sql · can integrate</text>
  <rect x="248" y="206" width="214" height="44" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="224" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Amount differences</text>
  <text x="258" y="239" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">differences · jde-sql</text>
  <rect x="248" y="258" width="214" height="44" rx="6" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="276" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Stuck invoices</text>
  <text x="258" y="291" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">direct query · db-nomaubl</text>
  <rect x="482" y="120" width="478" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Invoices missing in NomaUBL</text>
  <text x="946" y="142" fill="#4a9eff" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Show SQL</text>
  <rect x="496" y="156" width="128" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="170.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 Oct 2026 ▾</text>
  <rect x="632" y="156" width="38" height="22" rx="5" fill="url(#rpin-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="651.0" y="170.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Run</text>
  <rect x="496" y="190" width="450" height="34" rx="6" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.45)" strokeWidth="1"/>
  <text x="508" y="205" fill="#f87171" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">3 anomaly(ies)</text>
  <text x="508" y="218" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1 248 source / 1 245 target · 640 ms</text>
  <rect x="496" y="234" width="450" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="532" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANY</text>
  <text x="602" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOC</text>
  <text x="672" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DCT</text>
  <text x="712" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AMOUNT</text>
  <text x="792" y="249.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JOB</text>
  <rect x="496" y="262" width="450" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <text x="532" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="602" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10871</text>
  <text x="672" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="712" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1 200,00</text>
  <text x="792" y="276.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">482211</text>
  <rect x="496" y="288" width="450" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <text x="532" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="602" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">10872</text>
  <text x="672" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="712" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">540,00</text>
  <text x="792" y="302.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">482211</text>
  <rect x="496" y="314" width="450" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="532" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00002</text>
  <text x="602" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">20114</text>
  <text x="672" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">RI</text>
  <text x="712" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2 980,00</text>
  <text x="792" y="328.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">482260</text>
  <rect x="496" y="342" width="137" height="20" rx="5" fill="url(#rpin-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="564.5" y="355.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Integrate selection (2)</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Opens on Integrity</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">first of the four cards</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Checks list</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mode · connector · action</text>
  <line x1="200" y1="177.0" x2="248" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Defined in Settings</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Integrity reports</text>
  <line x1="200" y1="297.0" x2="248" y2="280" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period + Run</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">default period of the view</text>
  <line x1="1000" y1="167.0" x2="632" y2="167" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="1000" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Result banner</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count, source / target, time</text>
  <line x1="1000" y1="207.0" x2="946" y2="207" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
  <rect x="1000" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Integrate</text>
  <text x="1010" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">checks with an action</text>
  <line x1="1000" y1="337.0" x2="632" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpin-arrow)"/>
</svg>

---

## Integrity \{#integrity\}

The **Integrity** card lists on the left the SQL checks defined under [Configuration → System → Integrity reports](../../configuration/system/integrity-reports.md)— each with its description, mode (*missing in the target*, *differences* or *direct query*), connector and *can integrate* when it carries an action. Pick a check, a period (the [default period](../../configuration/default-periods.md) of the *Reports › Integrity* view) and **Run**. A banner gives the outcome — *No anomaly* or the count of anomalies, the source and target counts and the duration — and *Show SQL* unfolds the queries. Every row of the result is one anomaly, shown in the standard grid (search, filters, columns, export). A check that carries an action lets you tick rows and **Integrate the selection** — see [Integrity reports](../../configuration/system/integrity-reports.md#reports-integrity) for the full walkthrough.

---

## Audit, implementation and technical reports

These three cards generate a document, in PDF or Markdown, rather than a grid:

| Card | Document | Page |
|---|---|---|
| **Audit report** | The activity of a period — volumes, situation, backlog, lifecycle, errors, operations and consistency checks — for an internal review or an auditor. | [Audit report](./audit-report.md) |
| **Implementation report** | The documentation of the instance as it runs — architecture, built-in rules, documents and UBL mappings, platform settings, operations, security — for a hand-over file or an upgrade snapshot. | [Implementation report](./implementation-report.md) |
| **Technical report** | The developer documentation of the release — data model, flows, configuration reference, status model, API — identical on every instance. | [Technical report](./technical-report.md) |

All three are also available from the [command line](../../management/command-line.md#report), to schedule them or keep them with a release.

---

## Access

The Reports page is gated **per role**: grant the *Reports* page in the **Navigation** group on the [Roles](../../configuration/security/roles.md) page. Without it, the sidebar entry is hidden.

---

## Tips & best practices

- **Run the integrity checks after each night batch.** A clean result means NomaUBL holds everything the source system invoiced; set *Reports › Integrity* to *Yesterday* under [Default periods](../../configuration/default-periods.md) to make it the opening period.
- **Read the status statistics on the [Statistics](../statistics.md) dashboard.** It holds the detail table by activity, status and reason, compared with the previous period.
- **Build the recurring extractions in the [Explorer](../explorer.md).** A saved analysis keeps its fields, filters and view, can go into a dashboard and be sent by daily digest.
- **Keep the reports with the release.** The implementation and technical reports describe the instance and the release as they are; generate them after an upgrade and file them with the hand-over documents.
