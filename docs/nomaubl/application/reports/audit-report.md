---
title: Audit Report
description: "Audit the electronic invoicing of a period from the NomaUBL tables — executive summary compared with the previous period, volumes, situation by status, backlog, lifecycle and delays, errors and their handling, operations and consistency checks — as a PDF or Markdown file, in French or English."
keywords: [NomaUBL, audit report, e-invoicing audit, period report, KPI, deposit rate, first-pass validation, rejections, refusals, backlog, delays, consistency checks, integrity checks, PDF, Markdown, JD Edwards, SAP, NetSuite, custom ERP]
---

# Audit Report

The **Audit report** card of the [Reports](./overview.md) page measures how the electronic invoicing of a period went: how many invoices were processed, deposited, approved, rejected or refused, what is still waiting for an action, how long each step took, which errors occurred and how they were handled. The figures come **only from the NomaUBL tables** at the time of generation; the platform is not queried.

The report is short whatever the volume — it lists no individual invoice — so it can be sent as is to a finance manager, an auditor or a steering committee. It applies to every source system (JD Edwards, SAP, NetSuite or a custom ERP).

Open it from **Reports → Audit report**.

---

## At a glance

<svg viewBox="0 0 1200 492" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rpau-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rpau-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rpau-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rpau-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="452" rx="14" fill="url(#rpau-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reports</text>
  <rect x="240.0" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250.0" y="72" width="22" height="22" rx="6" fill="#4ade80" fillOpacity="0.18"/>
  <text x="280.0" y="81" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity</text>
  <text x="280.0" y="95" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Compare with JDE, integrate</text>
  <rect x="422.5" y="62" width="172.5" height="44" rx="8" fill="rgba(255,255,255,0.05)" stroke="#fb923c" strokeWidth="1.4"/>
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
  <rect x="240" y="120" width="250" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="254" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PERIOD</text>
  <rect x="254" y="172" width="222" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="186.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">📅 Last month · Issue date (BT-2) ▾</text>
  <text x="254" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DIRECTION</text>
  <rect x="254" y="224" width="162" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="255" y="225" width="42" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="276.0" y="238.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Both</text>
  <line x1="298" y1="229" x2="298" y2="241" stroke="#334155" strokeWidth="1"/>
  <text x="325.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Issued</text>
  <line x1="352" y1="229" x2="352" y2="241" stroke="#334155" strokeWidth="1"/>
  <text x="384.0" y="238.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Received</text>
  <text x="254" y="268" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANIES</text>
  <rect x="254" y="276" width="222" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="290.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">empty: all visible</text>
  <text x="254" y="320" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUAGE</text>
  <rect x="254" y="328" width="123" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286.0" y="342.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <rect x="319" y="329" width="57" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="347.5" y="342.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <rect x="502" y="120" width="458" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="142" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Contents</text>
  <text x="946" y="142" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">8 of 8 sections · All · None</text>
  <rect x="516.0" y="154.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="162" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,167.5 L530.8,169.8 L534.8,165" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="171" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="171" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Executive summary</text>
  <text x="544.0" y="184" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Key figures vs previous period</text>
  <rect x="735.0" y="154.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="162" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,167.5 L749.8,169.8 L753.8,165" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="171" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="171" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Volumes</text>
  <text x="763.0" y="184" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Per activity, company, document…</text>
  <rect x="516.0" y="206.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,219.5 L530.8,221.8 L534.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="223" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Situation by status</text>
  <text x="544.0" y="236" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Current status at generation</text>
  <rect x="735.0" y="206.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,219.5 L749.8,221.8 L753.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="223" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="223" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Backlog, all periods</text>
  <text x="763.0" y="236" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">What remains to handle</text>
  <rect x="516.0" y="258.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="266" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,271.5 L530.8,273.8 L534.8,269" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="275" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="275" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Lifecycle and delays</text>
  <text x="544.0" y="288" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Milestones and delays</text>
  <rect x="735.0" y="258.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="266" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,271.5 L749.8,273.8 L753.8,269" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="275" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="275" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Errors and handling</text>
  <text x="763.0" y="288" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Findings, rejections, failures</text>
  <rect x="516.0" y="310.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="526.0" y="318" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M528.5,323.5 L530.8,325.8 L534.8,321" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="543.0" y="327" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="544.0" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Operations over the period</text>
  <text x="544.0" y="340" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Jobs, files, notifications</text>
  <rect x="735.0" y="310.0" width="211.0" height="46.0" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <rect x="745.0" y="318" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M747.5,323.5 L749.8,325.8 L753.8,321" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="762.0" y="327" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <text x="763.0" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Consistency checks</text>
  <text x="763.0" y="340" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Between tables, optionally JDE</text>
  <rect x="240" y="432" width="89" height="22" rx="5" fill="url(#rpau-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="284.5" y="446.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Download PDF</text>
  <rect x="337" y="432" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="370.0" y="446.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Markdown</text>
  <rect x="419" y="440" width="200" height="6" rx="3" fill="#1f2937"/><rect x="419" y="440" width="110" height="6" rx="3" fill="#4a9eff"/>
  <text x="629" y="447" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Running · 12 s · Lifecycle and delays</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Report cards</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one per report</text>
  <line x1="200" y1="83.0" x2="240" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on the left</text>
  <line x1="200" y1="187.0" x2="240" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="20" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF or Markdown</text>
  <text x="30" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copy kept in reports/</text>
  <line x1="200" y1="445.0" x2="240" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="1000" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">All / None</text>
  <text x="1010" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count of the sections</text>
  <line x1="1000" y1="143.0" x2="950" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section tiles</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a line on each section</text>
  <line x1="1000" y1="257.0" x2="950" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="20" y="232" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="247" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Shared period picker</text>
  <text x="30" y="260" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">last month by default</text>
  <line x1="200" y1="249.0" x2="254" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
  <rect x="1000" y="428" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="443" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Background job</text>
  <text x="1010" y="456" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">progress names the step</text>
  <line x1="1000" y1="445.0" x2="820" y2="443" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rpau-arrow)"/>
</svg>

The page shows **Settings** on the left, the **Contents** on the right and the action bar below.

| Control | Description |
|---|---|
| **Period** | The shared [period picker](../../configuration/default-periods.md#period-picker), **Last month** by default. Compared with the previous period of the same kind: a month with the previous month, other dates with the same number of days just before. |
| **Date basis** | In the footer of the period picker: **Issue date (BT-2)** *(default)* — an invoice belongs to the period by its issue date — or **Last update**. Statuses and amounts are always those of the generation day. |
| **Direction** | **Both** *(default)*, **Issued** or **Received**. |
| **Companies** | A multi-select of the companies (the `list-companies` [custom list](../../configuration/custom-lists.md#ready-made-lists)); empty = every company the signed-in user can see. The role's company visibility always applies. |
| **Language** | **Français** or **English**; defaults to the interface language. |
| **Contents** | One tile per section with a line on what it holds, all ticked by default; the header gives the count (`8 of 8 sections`) and the **All** / **None** links. |
| **Also run the SQL integrity checks against JDE (slower)** | Inside the *Consistency checks* tile, shown while it is ticked. Runs the checks configured under [Integrity reports](../../configuration/system/integrity-reports.md) on the period and adds their discrepancy counts. Each check queries the source system. |
| **Download PDF** / **Markdown** | Starts the generation **in the background**. A progress bar names the current step; the file downloads at the end and a copy is kept in `<appHome>/<env>/reports/nomaubl-audit-<date>-<time>.pdf` or `.md`. The rest of the application stays usable meanwhile. |

---

## Sections

### Scope

Environment, period and comparison period, date basis, companies, direction, generation date and author, release, and the tables read: invoice header (status and amounts), archive, VAT breakdown, lifecycle, validation findings.

### Executive summary

The key figures of the period next to the previous period and the variation:

| Indicator | Meaning |
|---|---|
| **Invoices processed** | Invoices of the period, whatever their status. |
| **Not sent to the platform** | Invoices whose transaction type is configured not to be sent (B2C, international… per [Document types](../../configuration/system/document-types.md)). |
| **Deposited on the platform** | Invoices whose current status comes from the platform (`200` and following). The **deposit rate** is taken over the invoices **to send**. |
| **Deposited but not transmitted** | `200` with reason `NON_TRANSMISE`: the recipient is registered with no platform; the invoice has to be delivered through another channel. |
| **Approved / completed / paid**, **Refused (`210`)**, **Rejected (`213`)** | Outcomes of the period. |
| **To fix and resend** | `213`, `9905`, `9907`. |
| **Answer to the buyer expected** | `207`, `208`, `210`. |
| **In error today**, **Waiting for the platform (`9906`)**, **Excluded by rule (`9914`)**, **Received invoices** | States at generation time. |
| **Net and gross amounts deposited** | Totals BT-109 and BT-112 of the deposited invoices. |
| **First-pass validation** | Share of invoices validated without a fatal finding at their first run, taken from the lifecycle. |
| **Share in a terminal status** | Among the invoices to send. |
| **Delays** | Creation → deposit and deposit → first buyer status, median and 90th percentile. |
| **Send attempts, resends, send failure rate** | Every send ends in a failure (`9904`) or an acknowledgement (`9906`); the failure rate measures the platform's availability (HTTP 429, 503…). Resends include the automatic retries. |

A breakdown follows where every level adds up: not to send, to send, deposited (not transmitted, waiting for the next status, in progress at the platform, approved, rejected or refused), not deposited (validation, send or import failure, not sent yet, other). Then the **findings** in plain words — invoices in error not yet reviewed, deposited but not transmitted, to fix and resend, awaiting an answer to the buyer, failed e-reporting envelopes, backlog over all periods, resends, reprocesses and buyer-identifier fixes of the period.

### Volumes

The evolution inside the period — per day up to one month, per week up to six months, per month beyond — with the invoices, those to send, deposited and in error per bucket, and a chart. Then per **activity** (count, share, previous period, variation, amounts; deposit and error rates in a second table), per **company**, per **document**, per **transaction type** (with its send flag) and per **VAT category and rate** (base and VAT).

### Situation at generation time

The current status of the invoices of the period: code, label, catalogue groups, count, share, gross amount; the same per **family** (terminal, in progress, technical error, business error, excluded, other) with a donut chart; and the points of attention (waiting for the platform for more than 2 days, deposited but not transmitted, in error and not reviewed).

### Backlog, all periods

What still waits for an action **whatever its date**: invoices in error or refused not reviewed by customer service, waiting for the platform, deposited without being transmitted. Per status with the count older than 30 days, the reviewed count and the net amount; per company; per age (30 days or less, 31–90, 91–180, over 180) with a chart. The **Min invoice date** of the [e-invoicing settings](../../configuration/system/einvoicing.md) bounds these figures: older invoices are left out.

:::info[What « reviewed » means]
An invoice is *reviewed* once customer service has marked it handled in the invoice window. It leaves the backlog even if its status did not change (credit note issued outside NomaUBL, abandoned invoice, duplicate…).
:::

### Lifecycle and delays

The invoices of the period reaching each milestone for the first time — created, validated, validation failed, sent, deposited (first platform status), received, approved, refused, rejected, paid — per bucket with a chart; the delays creation → first send, first send → deposit, creation → deposit, deposit → first buyer status (median and 90th percentile, calendar days); then the action counters: send attempts and failures, resends, reprocesses (`9912`), buyer-identifier fixes.

### Errors and their handling

- **Validation findings by rule**: source (CIUS-FR, EXT-CTC-FR, CPRO-B2G, XSD, NomaUBL rules…), rule, level, findings, invoices, sample message; a chart of the most frequent rules and a per-source table of fatal findings and warnings. The findings of a reprocessed invoice are those of its last run.
- **Platform and buyer rejections and refusals**: status, reason code and label, events, invoices.
- **Send and import failures**: the 30 most frequent messages with their counts.
- **Handling**: invoices with an error in the period, resolved (status left the error statuses), still in error but reviewed, open for 7 days or less, 8 to 30 days, over 30 days; events per status; resends, reprocesses and fixes.

### Operations over the period

What the server did, independently of the invoice date: **scheduled job runs** (runs, errors, average and maximum duration, last outcome), **files processed and invoices integrated** per document with the previous period, **portal notifications** per rule, **e-reporting envelopes** per status. A failed envelope is flagged: its operations are not declared until it is fixed and filed again.

### Consistency checks

Each check counts the invoices that break a rule, for the period and over all periods; `0` means compliant.

| Check | What it finds |
|---|---|
| Platform status without platform identifier | The identifier is missing when the status was set by hand or by a status poll without an import confirmation. Not blocking. |
| Sent invoice without archived UBL | A sent invoice whose UBL is not stored. |
| Waiting for the platform for more than 2 days | Stale `9906`. |
| Duplicate invoice number within a company | Two invoices with the same number. |
| VAT total (BT-110) ≠ sum of the breakdown (BT-117) | Header against the stored VAT breakdown. |
| Net total (BT-109) ≠ sum of the lines (BT-131) | Header against the stored lines. |
| VAT breakdown with an amount but no rate (BT-119) | The invoice is declared with VAT and no rate. |
| To fix and resend without follow-up | `213`, `9905`, `9907` neither followed up nor reviewed. |
| Answer to the buyer expected without follow-up | `207`, `208`, `210` neither followed up nor reviewed; an internal credit note is mandatory for a refused invoice. |

With the integrity option, the **SQL integrity checks against JDE** follow, with their discrepancy count; the detail is on the [Integrity](./overview.md#integrity) tab. The lifecycle ordering and the platform events missing locally are left to the daily [lifecycle check](../../sync/scheduled-jobs/lifecycle-checks.md).

---

## PDF layout

Same layout as the [implementation report](./implementation-report.md): cover with environment, period, date, author and version; clickable table of contents; running header and footer; shaded reading notes; charts drawn in the PDF (bars per bucket and per activity, status-family donut, milestones per bucket, most frequent rules).

---

## Command line

```bash
java -jar nomaubl.jar -audit <configFile> [--from <yyyy-MM-dd> --to <yyyy-MM-dd>] \
     [--basis issue|update] [--kco a,b] [--direction I|R] [--lang fr|en] \
     [--format md|pdf] [--out <file>] [--date <label>] [--sections a,b,...] [--integrity]
```

Defaults: the previous month, every section, Markdown, French. See [Command line](../../management/command-line.md#audit).

The API runs the same report in the background: `POST /api/reports/audit/start` returns a job id, `GET /api/jobs/{id}` gives the current step, `GET /api/reports/audit/result/{jobId}` returns the file once.

---

## Access

The tab belongs to the *Reports* page — grant **Reports** on the [Roles](../../configuration/security/roles.md) page. The figures follow the company visibility of the signed-in user.

---

## Tips & best practices

- **Generate it on the first working day of the month** for the previous month: the default period is exactly that.
- **Read the backlog with the findings.** The summary covers the invoices of the period; the backlog shows what older periods still leave open.
- **Mark the invoices handled outside NomaUBL as reviewed.** A credit note issued directly in the ERP does not change the status of the original invoice; marking it reviewed keeps the backlog meaningful.
- **Set the Min invoice date after a go-live.** Test or migration invoices dated before the go-live then stay out of the all-periods figures.
- **Each step's duration is written to the server log.** On a large instance, the [Server log](../diagnostics/server-log.md) shows which section takes the time.
