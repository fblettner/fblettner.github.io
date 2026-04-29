---
title: Integration Errors
description: "List of validation errors that prevented an invoice from being created — UBL transformation failures stored in F564236 with no matching invoice header. Filter by severity, search by document key, drill into the error details."
keywords: [NomaUBL, integration errors, validation, F564236, transformation failure, FATAL, ERROR, WARNING, INFO, JD Edwards, SAP, NetSuite, custom ERP]
---

# Integration Errors

The **Integration Errors** screen lists every validation error that **prevented an invoice from being created**. These are entries stored in the validation table (`F564236`) that have **no matching row in the invoice header table** (`F564231`) — the transformation failed before the invoice header could be persisted, so the document never entered the regular E-Invoicing list.

Typical causes of an integration error:

- A malformed source XML the XSL transformation could not consume.
- A required UBL field that was missing or unreadable from the source data.
- An XSD or Schematron failure so severe (`FATAL`) that the pipeline aborted before reaching the database insert step.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP.

This page is the **systematic monitoring view** for these failures. The dashboard's *Unmatched validation errors* counter card is the at-a-glance entry; this page is where each row is investigated.

---

## Where these errors come from

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ie-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="ie-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4ade80"/></marker>
    <marker id="ie-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#f87171"/></marker>
    <marker id="ie-arrow-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#fb923c"/></marker>
    <linearGradient id="ie-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-red" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f87171" stopOpacity="0.16"/><stop offset="100%" stopColor="#f87171" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="ie-g-orange-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fb923c" stopOpacity="0.28"/><stop offset="100%" stopColor="#fb923c" stopOpacity="0.08"/></linearGradient>
  </defs>
  <rect x="20" y="120" width="170" height="80" rx="12" fill="url(#ie-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="105" y="150" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📄 Source XML</text>
  <text x="105" y="172" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">JDE / SAP / NS / custom</text>
  <rect x="220" y="120" width="220" height="80" rx="12" fill="url(#ie-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="330" y="150" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙️ Processing pipeline</text>
  <text x="330" y="172" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">XSL · XSD · Schematron · DB</text>
  <rect x="490" y="40" width="220" height="60" rx="12" fill="url(#ie-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="600" y="64" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Invoice header</text>
  <text x="600" y="83" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">persisted in F564231</text>
  <rect x="490" y="220" width="220" height="60" rx="12" fill="url(#ie-g-red)" stroke="#f87171" strokeWidth="1.5"/>
  <text x="600" y="244" fill="#f87171" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔴 Orphan validation</text>
  <text x="600" y="263" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">F564236, no F564231 row</text>
  <rect x="760" y="40" width="220" height="60" rx="12" fill="url(#ie-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="870" y="64" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✅ E-Invoicing</text>
  <text x="870" y="83" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Application →</text>
  <rect x="760" y="220" width="220" height="60" rx="12" fill="url(#ie-g-orange-strong)" stroke="#fb923c" strokeWidth="2"/>
  <text x="870" y="244" fill="#fb923c" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="system-ui, sans-serif">⚠ This page</text>
  <text x="870" y="263" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Integration Errors list</text>
  <line x1="190" y1="160" x2="220" y2="160" stroke="#94a3b8" strokeWidth="1.4" markerEnd="url(#ie-arrow-blue)"/>
  <path d="M 440 145 L 470 145 L 470 70 L 490 70" stroke="#4ade80" strokeWidth="1.5" fill="none" markerEnd="url(#ie-arrow-green)"/>
  <text x="465" y="105" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">success</text>
  <path d="M 440 175 L 470 175 L 470 250 L 490 250" stroke="#f87171" strokeWidth="1.5" fill="none" markerEnd="url(#ie-arrow-red)"/>
  <text x="465" y="215" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">failure</text>
  <line x1="710" y1="70" x2="760" y2="70" stroke="#4ade80" strokeWidth="1.5" markerEnd="url(#ie-arrow-green)"/>
  <line x1="710" y1="250" x2="760" y2="250" stroke="#fb923c" strokeWidth="1.5" markerEnd="url(#ie-arrow-orange)"/>
  <path d="M 870 220 L 870 295 L 330 295 L 330 200" stroke="#fb923c" strokeWidth="1.4" strokeDasharray="5 4" fill="none" markerEnd="url(#ie-arrow-orange)"/>
  <text x="600" y="288" fill="#fb923c" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">fix source / template, re-run pipeline</text>
</svg>

A successful run lands the invoice in the regular *E-Invoicing* list. A failure that fires before the header insert step leaves only a validation row — that is what this page surfaces. After fixing the source data or the template, re-running the pipeline either creates the header (the row vanishes from this view) or fires another orphan (still listed).

---

## Toolbar

The toolbar at the top of the table combines free-text search and severity filters.

### Search

A single input matches against the document keys:

| Field searched |
|---|
| `DOC` (document number) |
| `DCT` (document type) |
| `KCO` (company code) |

The search is server-side and updates the list as the user types.

### Severity chips

A row of chips lets the user filter by severity:

<div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', margin: '14px 0 8px'}}>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.25)', background: 'transparent', opacity: 0.75}}>All</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid #f87171', background: '#3d0a0a', color: '#f87171'}}>FATAL</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>ERROR</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.1)', color: '#fb923c'}}>WARNING</span>
<span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>INFO</span>
</div>

| Chip | Meaning |
|---|---|
| **All** | No filter — shows every severity. |
| **FATAL** | Pipeline-aborting error — the invoice could not be processed at all. |
| **ERROR** | Blocking error — the invoice would have been rejected by the PA. |
| **WARNING** | Non-blocking issue — informational; the invoice could be processed but with caveats. |
| **INFO** | Informational events. |

Clicking a chip applies the corresponding filter; clicking it again removes it. Only one severity can be selected at a time.

### Refresh

A circular-arrow button to the right re-runs the current query without changing filters.

---

## Error list

The table shows one row per validation error. Default sort: by document key ascending.

| Column | Description |
|---|---|
| **Doc** | Document number from the source data. |
| **Dct** | Document type. |
| **Kco** | Company code. |
| **Seq** | Sequence number — the order in which validation rules fired during the failed run. |
| **Severity** | Coloured badge — FATAL / ERROR / WARNING / INFO. |
| **Source** | Validation engine that produced the entry — typically `XSD`, `Schematron`, or a NomaUBL pipeline component (`PROCESS`, `XSL`). |
| **Rule** | Rule identifier or XPath that triggered the entry (e.g. `BR-FR-12`, `cbc:CustomizationID`). |
| **Message** | Human-readable description of the failure. |

Pagination shows 50 rows per page by default; the total count of matching entries is shown next to the pagination controls.

### Export

A small **Export** button in the toolbar exports the current view (filters applied) as a CSV file named `integration-errors.csv`.

---

## How to investigate

The page itself is read-only — investigation is done by combining the information here with the upstream pipeline:

1. **Filter by FATAL or ERROR.** These rows actually blocked the invoice. WARNING / INFO rows are mostly noise for the operator who needs to act.
2. **Read the rule and the message.** A Schematron rule like `BR-FR-12` points to a specific French extension rule; the message usually quotes the failing element. Cross-reference with the [Reason Codes](../references/reason-codes.mdx) page.
3. **Open the source XML in *UBL Tools → XML Viewer*** for the `DOC + DCT + KCO` triplet — the file lives in `dirInput/<template>/`. Reading the source confirms whether the failure is data-side (missing field) or template-side (XSL bug).
4. **Re-run the pipeline once the source is fixed.** Use *Processing → XML* with `Mode = SINGLE` (or `AUTO`) and the corrected file. Once the invoice is successfully persisted, it will move from this page to the regular *E-Invoicing* list — and the integration error is automatically removed from this view (the rule that hides errors with a matching header takes care of it).

---

## Tips & best practices

- **Watch the FATAL chip first.** A non-zero FATAL count means the pipeline aborted — no invoice was created at all. ERROR rows mean the invoice was rejected by validation but may have left a partial record.
- **A green Integration Errors counter on the Dashboard means a clean ingestion run.** Check it as part of the morning routine; a non-zero value before processing the day's batches is the canonical "investigate first" signal.
- **Use the search to scope by company.** When the spike is concentrated on one customer or one company code, searching by `KCO` narrows the list quickly. Often a single source-side change triggers many lines.
- **The Severity column is the order to work through.** FATAL first (those block everything), then ERROR (they block the specific invoice), then WARNING / INFO if the operator wants to clean up advisory entries.
- **Errors auto-disappear after a successful re-import.** Re-run the corrected file via *Processing → XML*; once the invoice header is created, the row vanishes from this view (the underlying entry stays in `F564236` for audit, but it is no longer "unmatched").
- **For systemic patterns, fix the template, not the data.** Repeated identical errors across many invoices usually point to a template / XSL bug. Open *UBL Tools → XSL Editor* and adjust the mapping rather than correcting each source XML by hand.
