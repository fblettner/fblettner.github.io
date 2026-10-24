---
title: Audit Report
description: "Audit the electronic invoicing of a period from the NomaUBL tables — executive summary compared with the previous period, volumes, situation by status, backlog, lifecycle and delays, errors and their handling, operations and consistency checks — as a PDF or Markdown file, in French or English."
keywords: [NomaUBL, audit report, e-invoicing audit, period report, KPI, deposit rate, first-pass validation, rejections, refusals, backlog, delays, consistency checks, integrity checks, PDF, Markdown, JD Edwards, SAP, NetSuite, custom ERP]
---

# Audit Report

The **Audit report** tab of the [Reports](./reports.md) page measures how the electronic invoicing of a period went: how many invoices were processed, deposited, approved, rejected or refused, what is still waiting for an action, how long each step took, which errors occurred and how they were handled. The figures come **only from the NomaUBL tables** at the time of generation; the platform is not queried.

The report is short whatever the volume — it lists no individual invoice — so it can be sent as is to a finance manager, an auditor or a steering committee. It applies to every source system (JD Edwards, SAP, NetSuite or a custom ERP).

Open it from **Reports → Audit report**.

---

## At a glance

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{opacity: 0.75, marginBottom: '12px'}}>Audit of a period from the NomaUBL tables: key figures with the previous period, volumes, situation by status, errors and their handling. The platform is not queried.</div>
  <div style={{display: 'grid', gridTemplateColumns: '130px 1fr', gap: '8px 12px', alignItems: 'center'}}>
    <b>Period</b><span><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Calendar month ▾</span> <span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>2026-09</span> <span style={{opacity: 0.6}}>compared to the previous month</span></span>
    <b>Date basis</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '160px'}}>Issue date (BT-2) ▾</span>
    <b>Companies</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>empty: all visible</span>
    <b>Direction</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '160px'}}>Issued and received ▾</span>
    <b>Language</b><span style={{padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', width: '160px'}}>English ▾</span>
    <b>Sections</b><span style={{lineHeight: 1.9}}>☑ Executive summary · ☑ Volumes · ☑ Situation by status · ☑ Backlog, all periods · ☑ Lifecycle and delays · ☑ Errors and handling · ☑ Operations over the period · ☑ Consistency checks</span>
    <span></span><span>☐ Also run the SQL integrity checks against JDE (slower)</span>
  </div>
  <div style={{display: 'flex', gap: '8px', marginTop: '14px', alignItems: 'center'}}>
    <span style={{padding: '6px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontWeight: 600}}>Download PDF</span>
    <span style={{padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.35)'}}>Download Markdown</span>
    <span style={{flex: 1, marginLeft: '12px'}}><span style={{opacity: 0.7}}>Running — Lifecycle and delays · 5 / 9</span><span style={{display: 'block', height: '6px', borderRadius: '3px', background: 'rgba(148,163,184,0.2)', marginTop: '4px'}}><span style={{display: 'block', width: '55%', height: '6px', borderRadius: '3px', background: '#4a9eff'}}></span></span></span>
  </div>
</div>

| Control | Description |
|---|---|
| **Period** | Drop-down: **Calendar month** (the previous month by default), compared to the month before; or **Custom dates**, compared to the same number of days before. A custom range that covers whole months, a quarter or a year compares to the preceding months of the same length. |
| **Date basis** | **Issue date (BT-2)** — an invoice belongs to the period by its issue date — or **Last update**. Statuses and amounts are always those of the generation day. |
| **Companies** | Company codes separated by commas; empty = every company the signed-in user can see. The role's company visibility always applies. |
| **Direction** | Issued and received, issued only, received only. |
| **Language** | French or English; defaults to the interface language. |
| **Sections** | Tick the parts to include; all are ticked by default. |
| **Also run the SQL integrity checks against JDE** | Shown when *Consistency checks* is ticked. Runs the checks configured under [Integrity reports](../configuration/system/integrity-reports.md) on the period and adds their discrepancy counts. Slower: each check queries the source system. |
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
| **Not sent to the platform** | Invoices whose transaction type is configured not to be sent (B2C, international… per [Document types](../configuration/system/document-types.md)). |
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

What still waits for an action **whatever its date**: invoices in error or refused not reviewed by customer service, waiting for the platform, deposited without being transmitted. Per status with the count older than 30 days, the reviewed count and the net amount; per company; per age (30 days or less, 31–90, 91–180, over 180) with a chart. The **Min invoice date** of the [e-invoicing settings](../configuration/system/einvoicing.md) bounds these figures: older invoices are left out.

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

With the integrity option, the **SQL integrity checks against JDE** follow, with their discrepancy count; the detail is on the [Integrity](./reports.md#integrity) tab. The lifecycle ordering and the platform events missing locally are left to the daily [lifecycle check](../sync/scheduled-jobs/lifecycle-checks.md).

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

Defaults: the previous month, every section, Markdown, French. See [Command line](../management/command-line.md#audit).

The API runs the same report in the background: `POST /api/reports/audit/start` returns a job id, `GET /api/jobs/{id}` gives the current step, `GET /api/reports/audit/result/{jobId}` returns the file once.

---

## Access

The tab belongs to the *Reports* page — grant **Reports** on the [Roles](../configuration/security/roles.md) page. The figures follow the company visibility of the signed-in user.

---

## Tips & best practices

- **Generate it on the first working day of the month** for the previous month: the default period is exactly that.
- **Read the backlog with the findings.** The summary covers the invoices of the period; the backlog shows what older periods still leave open.
- **Mark the invoices handled outside NomaUBL as reviewed.** A credit note issued directly in the ERP does not change the status of the original invoice; marking it reviewed keeps the backlog meaningful.
- **Set the Min invoice date after a go-live.** Test or migration invoices dated before the go-live then stay out of the all-periods figures.
- **Each step's duration is written to the server log.** On a large instance, the [Server log](./diagnostics/server-log.md) shows which section takes the time.
