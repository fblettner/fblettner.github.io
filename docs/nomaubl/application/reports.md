---
title: Reports
description: "Analytical reporting for NomaUBL — a status-statistics pivot (invoice counts by activity, status and rejection reason, per transaction type) and a no-SQL query tool over invoices, archived documents, lifecycle events and validation errors, with saved named reports and Excel/CSV export."
keywords: [NomaUBL, reports, reporting, statistics, status, rejection reason, query tool, pivot, Excel export, saved reports, config-reports, JD Edwards, SAP, NetSuite, custom ERP]
---

# Reports

The **Reports** page is the analytical view of NomaUBL — it turns the invoice, archive, lifecycle and validation data into figures a team can read and export, without writing SQL. It opens on two tabs: a ready-made **Status statistics** pivot and a build-your-own **Query tool**. The page is designed to host further report tabs over time.

Open it from the sidebar — **Reports**. Access is granted per role (see [Access](#access) below).

---

## At a glance

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rep-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="30" y="24" width="940" height="272" rx="14" fill="url(#rep-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="50" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Reports</text>

  <rect x="50" y="66" width="150" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="125" y="83" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Status statistics</text>
  <rect x="206" y="66" width="120" height="26" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="83" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Query tool</text>

  <rect x="740" y="66" width="100" height="26" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="83" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Archive date ▾</text>
  <rect x="846" y="66" width="104" height="26" rx="6" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="898" y="83" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Export Excel</text>

  <line x1="30" y1="104" x2="970" y2="104" stroke="#1f2937" strokeWidth="1"/>
  <text x="50" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITY · STATUS · REASON</text>
  <text x="640" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2B</text>
  <text x="720" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2BINT</text>
  <text x="800" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2C</text>
  <text x="880" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2G</text>

  <g fontFamily="ui-monospace, monospace" fontSize="10">
    <text x="50" y="150" fill="#e2e8f0">▾ Stores</text><text x="640" y="150" fill="#cbd5e1" textAnchor="middle">1 240</text><text x="720" y="150" fill="#cbd5e1" textAnchor="middle">86</text><text x="800" y="150" fill="#cbd5e1" textAnchor="middle">402</text><text x="880" y="150" fill="#cbd5e1" textAnchor="middle">57</text>
    <text x="66" y="170" fill="#4ade80">▾ 205 Paid</text><text x="640" y="170" fill="#94a3b8" textAnchor="middle">1 180 · 95%</text>
    <text x="66" y="190" fill="#f87171">▸ 213 Rejected</text><text x="640" y="190" fill="#94a3b8" textAnchor="middle">60 · 5%</text>
    <text x="82" y="210" fill="#94a3b8">REJ_ADR — code adressage</text><text x="640" y="210" fill="#64748b" textAnchor="middle">44 · 73%</text>
    <text x="82" y="230" fill="#94a3b8">REJ_SIRET — SIRET inconnu</text><text x="640" y="230" fill="#64748b" textAnchor="middle">16 · 27%</text>
    <text x="50" y="256" fill="#e2e8f0">▸ Central</text><text x="640" y="256" fill="#cbd5e1" textAnchor="middle">318</text><text x="720" y="256" fill="#cbd5e1" textAnchor="middle">—</text><text x="800" y="256" fill="#cbd5e1" textAnchor="middle">54</text><text x="880" y="256" fill="#cbd5e1" textAnchor="middle">—</text>
  </g>

  <rect x="40" y="270" width="920" height="18" rx="4" fill="rgba(74,158,255,0.05)" stroke="rgba(74,158,255,0.25)" strokeWidth="1"/>
  <text x="54" y="283" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Rows expand / collapse · subtotals at every level · counts and % · one click to Excel (report + flat data)</text>
</svg>

---

## Status statistics

The first tab is a ready-made pivot: **invoice counts** broken down by **activity code → status → rejection reason**, and split into columns by **transaction type** (`B2B`, `B2BINT`, `B2C`, `B2G`). Every level carries its count and a **percentage** of its parent — a reason as a share of its status, a status as a share of its activity, an activity as a share of the whole.

- **Expand / collapse** any activity or status to drill down; **subtotals** are shown at every level.
- A status that has a single rejection reason renders as **one compact line** rather than an extra nested row.
- The **period filter** at the top offers the same three date bases as the [Dashboard](./dashboard.md) — *Activity date*, *Document date* or *Archive date* — so the report reconciles with the figures shown elsewhere.
- **Export Excel** writes a workbook with **two sheets**: the report exactly as displayed, and the flat underlying data ready for your own pivot tables.

---

## Query tool

The second tab builds an extraction **without SQL**. Pick a **dataset**, choose the columns, narrow with filters, run — and optionally save the result as a named report.

| Dataset | What it covers |
|---|---|
| **Invoices** | The e-invoicing rows — the same catalog as the [E-Invoicing](./invoices.md) list. |
| **Archived documents** | Every captured document — the [E-Documents](./edocuments.md) archive. |
| **Lifecycle events** | One row per status event recorded on the invoice lifecycle. |
| **Validation errors** | The [Integration Errors](./integration-errors.md) findings. |

- **Columns** — pick which columns to include from the dataset's catalog.
- **Filters** — status, reason, action and transaction-type filters use searchable **multi-select** pickers fed by the reference lists; dates use **range** pickers; the **period bar** with its date-basis toggle leads the screen. A **document-number** filter performs an exact numeric lookup.
- **Results** land in the standard grid with all its tooling: search, per-column filters, grouping, column show / hide and reorder, and **CSV / Excel** export.

### Saved reports

A query — its **dataset, columns, filters, column layout and grouping** — can be **saved as a named report** and restored in two clicks. The report library lives in its own `config-reports.json` file, so it is easy to back up and to promote from one server to another.

---

## Access

The Reports page is gated **per role**: grant the *Reports* page in the **Navigation** group on the [Roles](../configuration/security/roles.md) page. Without it, the sidebar entry is hidden.

---

## Tips & best practices

- **Start from Status statistics for the recurring read.** It answers "how many invoices, in which status, and why rejected" without any setup — export the two-sheet workbook when a colleague wants to pivot the raw figures.
- **Save the queries your team re-runs.** A named report keeps its columns, filters and layout, so a monthly extraction is two clicks rather than a rebuild — and `config-reports.json` travels with a deployment.
- **Match the date basis to the question.** *Archive date* answers "what did we process", *Document date* "what did we issue", *Activity date* "what changed" — pick the one the audience expects before reading the counts.
