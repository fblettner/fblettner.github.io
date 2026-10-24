---
title: Failures
description: "The Failures view of NomaUBL Diagnostics lists every failure with one shape — validation findings, PA rejections, send and import failures, processing failures per file, failed job runs — unresolved only by default, with server-side search and links to the invoice, the processing log or the scheduled jobs."
keywords: [NomaUBL, failures, diagnostics, validation errors, PA rejection, send failure, import failure, processing failure, job failure, unresolved, troubleshooting, JD Edwards, SAP, NetSuite, custom ERP]
---

# Failures

The **Failures** view of [Diagnostics](./overview.md) answers one question: *what failed, and is it still open?* It reads the stores where failures are recorded — validation findings, lifecycle events of the error statuses, the per-file rows of the runtime processing log, the job runs — and shows them **in one list with the same columns**, newest first.

Open it from **Diagnostics → Failures**.

---

## At a glance

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '12.5px', overflowX: 'auto'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '12px'}}>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Yesterday ▾</span>
    <b>Kind</b>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Validation 30</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>PA rejection 2</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Send / import 6</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Processing 3</span>
    <span style={{padding: '3px 9px', borderRadius: '999px', border: '1px solid #4a9eff', color: '#4a9eff'}}>Job 1</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>All templates ▾</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Company</span>
    <span>☑ Unresolved only</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', minWidth: '200px', opacity: 0.6}}>Search in messages (all pages)…</span>
    <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Refresh</span>
  </div>
  <table style={{width: '100%', borderCollapse: 'collapse'}}>
    <thead><tr style={{textAlign: 'left', opacity: 0.7}}><th>When</th><th>Kind</th><th>Source</th><th>Template</th><th>Company</th><th>Status</th><th>Level</th><th>Rule</th><th>Message</th><th></th></tr></thead>
    <tbody>
      <tr><td>07:12</td><td>Validation</td><td>F2026-1203</td><td>invoices</td><td>00001</td><td>9905</td><td>ERROR</td><td>BR-CO-15</td><td>Invoice total with VAT ≠ total without VAT + VAT</td><td>↗</td></tr>
      <tr><td>06:40</td><td>Send / import</td><td>F2026-1188</td><td>invoices</td><td>00001</td><td>9904</td><td>ERROR</td><td>—</td><td>Send failed: HTTP 503</td><td>↗</td></tr>
      <tr><td>05:02</td><td>Processing</td><td>R42565_XJDE0001_123457</td><td>credit_notes</td><td>—</td><td>—</td><td>ERROR</td><td>—</td><td>Transform failed: missing element</td><td>↗</td></tr>
      <tr><td>04:00</td><td>Job</td><td>Nightly BIP</td><td>—</td><td>—</td><td>—</td><td>ERROR</td><td>—</td><td>Connection refused</td><td>↗</td></tr>
    </tbody>
  </table>
  <div style={{opacity: 0.6, marginTop: '8px'}}>42 failure(s)</div>
</div>

---

## The kinds of failure

| Kind | Read from | Source column shows |
|---|---|---|
| **Validation** | The validation findings of the invoice (XSD, Schematron, house rules). | Invoice number |
| **PA rejection** | Lifecycle events in a status of the *errorBusiness* group — by default refused, disputed, suspended, partially approved, routing error. | Invoice number |
| **Send / import** | Lifecycle events in a status of the *errorTech* group — by default rejected (`213`), send failed, validation failed, import failed. | Invoice number |
| **Processing** | The per-file rows of the processing log that ended in error. | File name |
| **Job** | The failed runs of a [scheduled job](../../sync/scheduled-jobs/overview.md). | Job name |

The status groups come from the [status catalogue](../../configuration/system/statuses.md), so a status added to *errorTech* or *errorBusiness* appears here without further setting.

---

## Columns

| Column | Description |
|---|---|
| **When** | Time of the finding or event. |
| **Kind** | One of the five kinds above. |
| **Source** | Invoice number, file name or job name. |
| **Template** | The document the failure belongs to. |
| **Company** | Company of the invoice (invoice-linked kinds). |
| **Status** | Current status of the invoice. |
| **Level** | Severity of the finding or event. |
| **Rule** | Validation rule identifier, when there is one. |
| **Message** | The error message. |
| **Resolved** | Shown when *Unresolved only* is off. |
| **Actions** | Open the invoice window, the processing log narrowed to the file, or the Scheduled jobs page. |

---

## Filters

- **Period** — yesterday by default.
- **Kind** — chips with their counts; untick a kind to leave it out.
- **Template** and **Company** — narrow to one document or company; the company grants of the signed-in user always apply to the invoice-linked kinds.
- **Unresolved only** — on by default. Hides the failures the invoice, file or job has since moved past: the invoice left the error statuses or moved on from the event's status, or a later successful run exists for the file or the job.
- **Search in messages (all pages)** — the search runs on the server, across every page of the result, not only on the rows displayed.

The grid has the usual tools of the shared data table: sorting, column choice, paging and export.

---

## Tips & best practices

- **Read it every morning with Unresolved only on.** What remains is what needs a person.
- **Turn Unresolved only off to audit a period.** Resolved failures show how often a rule or a platform fault came back.
- **Follow the row action.** The invoice window carries the fix (edit, fix buyer, resend, reprocess); the processing log shows why a file failed; the Scheduled jobs page shows the job's run history.
