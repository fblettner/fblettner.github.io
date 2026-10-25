---
title: Audit Report
description: "Audit the electronic invoicing of a period from the NomaUBL tables — executive summary compared with the previous period, volumes, situation by status, backlog, lifecycle and delays, errors and their handling, operations and consistency checks — as a PDF or Markdown file, in French or English."
keywords: [NomaUBL, audit report, e-invoicing audit, period report, KPI, deposit rate, first-pass validation, rejections, refusals, backlog, delays, consistency checks, integrity checks, PDF, Markdown, JD Edwards, SAP, NetSuite, custom ERP]
---

# Audit Report

The **Audit report** tab of the [Reports](./overview.md) page measures how the electronic invoicing of a period went: how many invoices were processed, deposited, approved, rejected or refused, what is still waiting for an action, how long each step took, which errors occurred and how they were handled. The figures come **only from the NomaUBL tables** at the time of generation; the platform is not queried.

The report is short whatever the volume — it lists no individual invoice — so it can be sent as is to a finance manager, an auditor or a steering committee. It applies to every source system (JD Edwards, SAP, NetSuite or a custom ERP).

Open it from **Reports → Audit report**.

---

## At a glance

<svg viewBox="0 0 1200 389" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ar-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ar-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ar-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ar-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="345" rx="14" fill="url(#ar-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="32" width="107" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="293.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Status statistics</text>
  <rect x="352" y="32" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="385.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Integrity</text>
  <rect x="424" y="32" width="82" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="465.0" y="46.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Audit report</text>
  <rect x="511" y="32" width="127" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="574.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Implementation report</text>
  <rect x="643" y="32" width="102" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="694.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Technical report</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Audit of a period from the NomaUBL tables: key figures, volumes, situation, errors and their handling.</text>
  <text x="240" y="117" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <rect x="390" y="103" width="111" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Calendar month ▾</text>
  <rect x="507" y="103" width="65" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="517" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">2026-09</text>
  <text x="582" y="117" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">compared to the previous month</text>
  <text x="240" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Date basis</text>
  <rect x="390" y="135" width="128" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="149.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Issue date (BT-2) ▾</text>
  <text x="640" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Companies</text>
  <rect x="720" y="135" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="149.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">empty: all visible</text>
  <text x="240" y="181" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Direction</text>
  <rect x="390" y="167" width="139" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="181.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Issued and received ▾</text>
  <text x="640" y="181" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language</text>
  <rect x="720" y="167" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="181.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">English ▾</text>
  <text x="240" y="213" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <rect x="390" y="204" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,209.5 L394.8,211.8 L398.8,207" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="213" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Executive summary</text>
  <rect x="650" y="204" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,209.5 L654.8,211.8 L658.8,207" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="213" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Volumes</text>
  <rect x="390" y="225" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,230.5 L394.8,232.8 L398.8,228" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="234" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Situation by status</text>
  <rect x="650" y="225" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,230.5 L654.8,232.8 L658.8,228" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="234" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Backlog, all periods</text>
  <rect x="390" y="246" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,251.5 L394.8,253.8 L398.8,249" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="255" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Lifecycle and delays</text>
  <rect x="650" y="246" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,251.5 L654.8,253.8 L658.8,249" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="255" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Errors and handling</text>
  <rect x="390" y="267" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M392.5,272.5 L394.8,274.8 L398.8,270" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="407" y="276" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Operations over the period</text>
  <rect x="650" y="267" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M652.5,272.5 L654.8,274.8 L658.8,270" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="667" y="276" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Consistency checks</text>
  <rect x="390" y="292" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="407" y="301" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Also run the SQL integrity checks against JDE (slower)</text>
  <rect x="240" y="319" width="100" height="26" rx="5" fill="url(#ar-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="290.0" y="335.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Download PDF</text>
  <rect x="348" y="319" width="128" height="26" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="412.0" y="335.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Download Markdown</text>
  <text x="492" y="329" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Running — Lifecycle and delays · 5 / 9</text>
  <rect x="492" y="335" width="468" height="6" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="492" y="335" width="260" height="6" rx="3" fill="#4a9eff"/>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Third tab of Reports</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Reports → Audit report</text>
  <line x1="200" y1="43.0" x2="240" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Period</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">month or custom dates, compared</text>
  <line x1="200" y1="117.0" x2="390" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">all ticked by default</text>
  <line x1="200" y1="227.0" x2="390" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Scope</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">companies · direction · language</text>
  <line x1="1000" y1="147.0" x2="870" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="279" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="294" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Integrity checks</text>
  <text x="1010" y="307" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">optional, against the source</text>
  <line x1="1000" y1="296.0" x2="720" y2="297" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
  <rect x="1000" y="349" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="364" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Background run</text>
  <text x="1010" y="377" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">progress bar names the step</text>
  <line x1="1000" y1="366.0" x2="950" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ar-arrow)"/>
</svg>

| Control | Description |
|---|---|
| **Period** | Drop-down: **Calendar month** (the previous month by default), compared to the month before; or **Custom dates**, compared to the same number of days before. A custom range that covers whole months, a quarter or a year compares to the preceding months of the same length. |
| **Date basis** | **Issue date (BT-2)** — an invoice belongs to the period by its issue date — or **Last update**. Statuses and amounts are always those of the generation day. |
| **Companies** | Company codes separated by commas; empty = every company the signed-in user can see. The role's company visibility always applies. |
| **Direction** | Issued and received, issued only, received only. |
| **Language** | French or English; defaults to the interface language. |
| **Sections** | Tick the parts to include; all are ticked by default. |
| **Also run the SQL integrity checks against JDE** | Shown when *Consistency checks* is ticked. Runs the checks configured under [Integrity reports](../../configuration/system/integrity-reports.md) on the period and adds their discrepancy counts. Slower: each check queries the source system. |
| **Download PDF / Download Markdown** | Starts the generation **in the background**. A progress bar names the current step; the file downloads at the end and a copy is kept in `<appHome>/<env>/reports/nomaubl-audit-<date>-<time>.pdf` or `.md`. The window can stay open on another tab meanwhile. |

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
