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

<svg viewBox="0 0 1200 334" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="fl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="fl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="fl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="294" rx="14" fill="url(#fl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostics · Failures</text>
  <rect x="240" y="64" width="94" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="78.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Yesterday ▾</text>
  <text x="348" y="79" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <rect x="382" y="66" width="83" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="423.5" y="78.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Validation 30</text>
  <rect x="471" y="66" width="88" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="515.0" y="78.2" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PA rejection 2</text>
  <rect x="565" y="66" width="93" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="611.5" y="78.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Send / import 6</text>
  <rect x="664" y="66" width="78" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="703.0" y="78.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing 3</text>
  <rect x="748" y="66" width="43" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="769.5" y="78.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Job 1</text>
  <rect x="240" y="96" width="106" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="110.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">All templates ▾</text>
  <rect x="354" y="96" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="364" y="110.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Company</text>
  <rect x="458" y="102" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M460.5,107.5 L462.8,109.8 L466.8,105" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="475" y="111" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Unresolved only</text>
  <rect x="571.0" y="96" width="281.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="581.0" y="110.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Search in messages (all pages)…</text>
  <rect x="868" y="96" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="914.0" y="110.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="240" y="132" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHEN</text>
  <text x="300" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KIND</text>
  <text x="390" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="528" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEMPLATE</text>
  <text x="610" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPANY</text>
  <text x="670" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="720" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULE</text>
  <text x="786" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESSAGE</text>
  <text x="946" y="149.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="164" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">07:12</text>
  <rect x="300" y="169.0" width="65" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332.5" y="180.2" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Validation</text>
  <text x="390" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F2026-1203</text>
  <text x="528" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <text x="610" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="670" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9905</text>
  <text x="720" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-CO-15</text>
  <text x="786" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total with VAT ≠ total + VAT</text>
  <text x="946" y="180.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="240" y="194" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">06:40</text>
  <rect x="300" y="199.0" width="79" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="339.5" y="210.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Send / import</text>
  <text x="390" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F2026-1188</text>
  <text x="528" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <text x="610" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">00001</text>
  <text x="670" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9904</text>
  <text x="720" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="786" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Send failed: HTTP 503</text>
  <text x="946" y="210.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="240" y="224" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">05:02</text>
  <rect x="300" y="229.0" width="65" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="332.5" y="240.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Processing</text>
  <text x="390" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">R42565_XJDE0001_…</text>
  <text x="528" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">credit_notes</text>
  <text x="610" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="670" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="720" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="786" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Transform failed</text>
  <text x="946" y="240.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <rect x="240" y="254" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">04:00</text>
  <rect x="300" y="259.0" width="32" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="316.0" y="270.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Job</text>
  <text x="390" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Nightly BIP</text>
  <text x="528" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="610" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="670" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="720" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="786" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Connection refused</text>
  <text x="946" y="270.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">↗</text>
  <text x="240" y="298" fill="#64748b" fontSize="9.5" fontFamily="ui-monospace, monospace">42 failure(s)</text>
  <rect x="20" y="58" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="73" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Kind chips</text>
  <text x="30" y="86" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">counts · untick to leave out</text>
  <line x1="200" y1="75.0" x2="360" y2="75" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Unresolved only</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">on by default</text>
  <line x1="200" y1="157.0" x2="520" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One shape for all</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">validation, PA, send, file, job</text>
  <line x1="200" y1="257.0" x2="290" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="1000" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Server-side search</text>
  <text x="1010" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">across every page of the result</text>
  <line x1="1000" y1="157.0" x2="780" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Row action</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">invoice · log · scheduled jobs</text>
  <line x1="1000" y1="247.0" x2="954" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#fl-arrow)"/>
</svg>

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
