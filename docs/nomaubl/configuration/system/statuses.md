---
title: Statuses
description: "Define the invoice lifecycle statuses NomaUBL recognises: regulatory code, internal Tag, bilingual labels, the event name expected by the Plateforme Agréée, the Collect flag for PA polling, and the Groups that drive the dashboard counters and SQL filters. Search box, expandable per-status form, multi-select groups with coloured chips."
keywords: [NomaUBL, statuses, invoice lifecycle, e-invoicing, e-reporting, Plateforme Agréée, status code, status groups, InvoiceStatusCatalog, polling, dashboard, JD Edwards, SAP, NetSuite]
---

# Statuses

The **Statuses** editor defines the **lifecycle statuses** an invoice can take in NomaUBL — codes such as `200` *Deposited*, `205` *Payment received*, `9906` *In progress*. The same codes appear in **E-Invoicing → Actions**, in the **invoice detail modal** and in every dashboard widget.

Each row binds a regulatory code to:

- the **internal Tag** referenced by `InvoiceStatusCatalog` factory methods in Java;
- the **bilingual labels** displayed in the UI;
- the **PA Code** sent to the Plateforme Agréée API;
- a **Collect** flag controlling whether the status is polled back from the PA;
- the **Groups** that map the status to dashboard counters and SQL filters.

The page applies to documents from any source system — JD Edwards, SAP, NetSuite or a custom ERP — once the source is mapped to UBL.

:::info[Refreshed in 2026.05.5]
Two changes shipped in 2026.05.5:

- **Groups** field — each status now declares the *top-level* counter it belongs to (`inflight`, `errorTech`, `errorBusiness`, `terminal`) and the *funnel stage* it sits in (`created`, `sent`, `pending`, `transmission`, `approved`, `rejected`). The dashboard counters and the SQL filters in `DashboardApi` read from this single source instead of inlining literal `IN ('9904','9905',…)` lists. Adding a new PA status is one line in the template.
- **Tag is read-only** — `Tag` values are referenced by `InvoiceStatusCatalog` factory methods in Java; renaming would silently break callers, so the editor protects them.
- **Inline editor** — each row is a card that expands into a 4-column form (Code, Tag, PA Code, Polling on row 1; FR + EN labels spanning two columns each on row 2; Groups multi-select on row 3). The toolbar carries a search box that matches Code, Tag, both labels, PA Code and group labels.
:::

---

## Opening the editor

- Sidebar → **Configuration → System → Statuses** *(or `/settings/statuses` directly)*.
- The list opens with every status currently declared, ordered by code. Use the search box to filter; click a row to expand it.

---

## At a glance

<svg viewBox="0 0 1000 660" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="status-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="status-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="status-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="620" rx="14" fill="url(#status-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Invoice Status Definitions</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="240" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="102" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Search code, tag, label, group…</text>
  <text x="640" y="102" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">12 / 12</text>
  <rect x="700" y="84" width="80" height="28" rx="6" fill="url(#status-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="740" y="102" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add status</text>

  <rect x="240" y="124" width="540" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="144" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="280" y="144" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">9903</text>
  <text x="320" y="144" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_SENT</text>
  <text x="440" y="144" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">Envoyée à la PA</text>
  <text x="540" y="144" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">· Sent to PA</text>
  <rect x="650" y="132" width="58" height="16" rx="8" fill="rgba(0,122,255,0.18)" stroke="rgba(0,122,255,0.40)" strokeWidth="1"/>
  <text x="679" y="143" fill="rgb(0,122,255)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">In flight</text>
  <rect x="712" y="132" width="48" height="16" rx="8" fill="rgba(0,122,255,0.18)" stroke="rgba(0,122,255,0.40)" strokeWidth="1"/>
  <text x="736" y="143" fill="rgb(0,122,255)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Sent</text>

  <rect x="240" y="170" width="540" height="350" rx="10" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="260" y="192" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <text x="280" y="192" fill="#e2e8f0" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">9904</text>
  <text x="320" y="192" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_REJECTED_PA_TECH</text>
  <text x="500" y="192" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">Rejet technique PA</text>
  <rect x="652" y="180" width="78" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="691" y="191" fill="rgb(255,69,58)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Err · Tech</text>
  <rect x="734" y="180" width="40" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="754" y="191" fill="rgb(255,69,58)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Reject</text>

  <line x1="240" y1="208" x2="780" y2="208" stroke="#1f2937" strokeWidth="1"/>

  <text x="262" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CODE</text>
  <rect x="262" y="232" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="249" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">9904</text>

  <text x="392" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAG</text>
  <rect x="392" y="232" width="120" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="402" y="249" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">STATUS_REJECTED_PA_TECH</text>
  <text x="392" y="270" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif" fontStyle="italic">Read-only · referenced by Java factories</text>

  <text x="522" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PA CODE</text>
  <rect x="522" y="232" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="249" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">fr_e_invoicing_9904</text>

  <text x="652" y="226" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POLLING</text>
  <rect x="652" y="232" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="659" y="244" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="675" y="245" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Collect from PA API</text>

  <text x="262" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL · FRENCH</text>
  <rect x="262" y="304" width="250" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="321" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Rejet technique PA</text>

  <text x="522" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LABEL · ENGLISH</text>
  <rect x="522" y="304" width="250" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="532" y="321" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Rejected — Tech</text>

  <text x="262" y="358" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GROUPS</text>
  <text x="262" y="372" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif" fontStyle="italic">Top-level (counters / SQL) + funnel stages (charts)</text>

  <rect x="262" y="384" width="160" height="28" rx="6" fill="rgba(0,122,255,0.18)" stroke="rgba(0,122,255,0.40)" strokeWidth="1.2"/>
  <rect x="270" y="392" width="12" height="12" rx="2" fill="rgb(0,122,255)" stroke="rgb(0,122,255)" strokeWidth="1"/>
  <text x="276" y="402" fill="white" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="290" y="402" fill="rgb(0,122,255)" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">In flight</text>

  <rect x="430" y="384" width="160" height="28" rx="6" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1.2"/>
  <rect x="438" y="392" width="12" height="12" rx="2" fill="rgb(255,69,58)" stroke="rgb(255,69,58)" strokeWidth="1"/>
  <text x="444" y="402" fill="white" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="458" y="402" fill="rgb(255,69,58)" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Error · Tech</text>

  <rect x="598" y="384" width="174" height="28" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="606" y="392" width="12" height="12" rx="2" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="402" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Error · Business</text>

  <rect x="262" y="420" width="160" height="28" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="270" y="428" width="12" height="12" rx="2" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="438" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Terminal</text>

  <rect x="430" y="420" width="160" height="28" rx="6" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <rect x="438" y="428" width="12" height="12" rx="2" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="458" y="438" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Stage · Created</text>

  <rect x="598" y="420" width="174" height="28" rx="6" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1.2"/>
  <rect x="606" y="428" width="12" height="12" rx="2" fill="rgb(255,69,58)" stroke="rgb(255,69,58)" strokeWidth="1"/>
  <text x="612" y="438" fill="white" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="626" y="438" fill="rgb(255,69,58)" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Stage · Rejected</text>

  <rect x="240" y="532" width="540" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="552" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="280" y="552" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">9905</text>
  <text x="320" y="552" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_REJECTED_PA_FUNC</text>
  <text x="466" y="552" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">Rejet fonctionnel PA</text>
  <rect x="600" y="540" width="100" height="16" rx="8" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="650" y="551" fill="rgb(255,159,10)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Err · Business</text>
  <rect x="704" y="540" width="56" height="16" rx="8" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="732" y="551" fill="rgb(255,69,58)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Reject</text>

  <rect x="240" y="578" width="540" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="598" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <text x="280" y="598" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">200</text>
  <text x="320" y="598" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">STATUS_DEPOSITED</text>
  <text x="440" y="598" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">Déposée · Deposited</text>
  <rect x="600" y="586" width="80" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="640" y="597" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Terminal</text>
  <rect x="684" y="586" width="76" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="722" y="597" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Approved</text>

  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search box</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code · tag · labels · PA · groups</text>
  <line x1="200" y1="100" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="820" y="170" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Group chips</text>
  <text x="830" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colour mirrors top-level / stage</text>
  <line x1="820" y1="186" x2="780" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tag · read-only</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">renaming would break Java</text>
  <line x1="200" y1="256" x2="240" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Polling</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Collect from PA API</text>
  <line x1="820" y1="256" x2="780" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>

  <rect x="820" y="392" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Multi-select groups</text>
  <text x="830" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">top-level + funnel stages</text>
  <line x1="820" y1="408" x2="780" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#status-arrow)"/>
</svg>

---

## Per-row fields

| Column | Example | Description |
|---|---|---|
| **Code** | `200` | Regulatory status code stored in the database (`tableHeader`). The canonical identifier of the status across NomaUBL. |
| **Tag** *(read-only)* | `STATUS_DEPOSITED` | Internal name referenced by `InvoiceStatusCatalog` factory methods in Java. The editor displays it as read-only — renaming would break Java callers silently. |
| **Label · French** | `Déposée` | Human-readable French label shown in the UI when the active locale is French. |
| **Label · English** | `Deposited` | Human-readable English label shown in the UI when the active locale is English. |
| **PA Code** | `fr_e_invoicing_200` | Event name sent to the Plateforme Agréée API — placed in the `names[]` payload of status calls. Must match what the PA expects exactly. |
| **Polling — Collect from PA API** | checkbox | When ticked, NomaUBL polls this status from the PA API on every *Sync → Retrieve Statuses* run. Untick to skip a status during polling. |
| **Groups** | multi-select | Top-level counter and funnel stage the status belongs to — drives the dashboard widgets and the SQL filters in `DashboardApi`. See [Groups](#groups) below. |

Use **+ Add status** to create a row. The new row opens immediately with empty fields. Click any row header to expand or collapse the form; click the **×** icon on the right of the header to delete the row.

---

## Groups

The Groups field replaces the previous CSV columns and inline `IN ('9904','9905',…)` lists in the dashboard backend. It exposes ten predefined values across two axes:

### Top-level — counters and SQL filters

| Value | Label | Used by |
|---|---|---|
| `inflight` | **In flight** | *Dashboard → In flight* hero card; SQL filters that count "still moving" invoices. |
| `errorTech` | **Error · Tech** | *Dashboard → Rejected — IT* hero card; surfaces technical / pipeline failures (XSL, PDF, PA HTTP, DB). |
| `errorBusiness` | **Error · Business** | *Dashboard → Rejected — Business* hero card; surfaces validation / regulation failures the buyer or PA emitted. |
| `terminal` | **Terminal** | *Dashboard → Total* drill-down for end-of-life invoices (deposited, paid, archived, refused). |

### Funnel stages — pipeline charts

| Value | Label | Used by |
|---|---|---|
| `created` | **Stage · Created** | *Pipeline funnel* — created locally but not yet sent. |
| `sent` | **Stage · Sent** | *Pipeline funnel* — sent to the PA, awaiting acknowledgement. |
| `pending` | **Stage · Pending PA** | *Pipeline funnel* — PA acknowledged, awaiting downstream processing. |
| `transmission` | **Stage · Transmission** | *Pipeline funnel* — transmitted to the buyer's PA. |
| `approved` | **Stage · Approved** | *Pipeline funnel* / *e-Reporting coverage* — accepted at every step. |
| `rejected` | **Stage · Rejected** | *Pipeline funnel* / *e-Reporting coverage* — rejected at any step. |

A status declares **as many groups as it needs** — typically one top-level value plus one stage. The chip palette in the row header mirrors the palette in the multi-select picker so the assignment can be checked at a glance.

The `/api/status-codes/groups` endpoint serves the merged map, and the React `statusGroupsStore` caches it once at app boot. Adding a new PA status code becomes a one-line edit in the template — no Java change needed.

---

## How the fields are wired together

- **Code** is the source of truth in the database (`tableHeader`).
- **Tag** is what application code consumes, through `InvoiceStatusCatalog` factory methods. The editor protects it.
- **Label · French / English** drive the UI text. Both should be filled — when a label is empty the UI falls back to the Code.
- **PA Code** is the contract with the Plateforme Agréée. If the PA renames an event, only the `paCode` here needs to change — the Tag stays stable, so Java code is unaffected.
- **Collect** controls the polling loop driven by *Sync → Retrieve Statuses*. Statuses set only locally (e.g. internal validation results) usually have *Collect* off.
- **Groups** flow into the dashboard counters via `/api/status-codes/groups`. A status with no group is effectively invisible to the dashboard.

---

## Tips & best practices

- **Keep Codes aligned with the regulation.** They are the lingua franca between NomaUBL, the PA and downstream tooling — do not invent custom codes.
- **Treat the Tag as a stable internal contract.** It is read-only on purpose; if you genuinely need to rename one, do it in `InvoiceStatusCatalog` *and* in this template in the same commit.
- **Match PA Codes exactly to your PA's catalog.** A typo in `fr_e_invoicing_xxx` produces silent integration failures (the PA rejects unknown event names).
- **Tick Collect only on statuses the PA actually emits.** Polling for unsupported statuses wastes API calls and pollutes logs with empty results.
- **Assign at least one top-level group to every active status.** Otherwise the *In flight / Rejected — IT / Rejected — Business* hero cards on the dashboard will undercount.
- **A status can sit in two top-level groups.** A locally-rejected validation that the PA never sees can be both `errorTech` and `terminal` — the dashboard will count it once per axis.
- **Use the search box.** Searching for a partial label or PA Code is faster than scrolling through the full list, especially after a regulation update that adds five or six new codes.
- **Bilingual labels are not optional.** Both *Label · French* and *Label · English* should be filled — the UI falls back to the Code when the active locale's label is empty, which is unhelpful.
