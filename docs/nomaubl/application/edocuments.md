---
title: E-Documents
description: "Browse every document captured in the NomaUBL archive — not only those that became invoices — with the archived source spool and the generated UBL side by side, and query the same archive over REST."
keywords: [NomaUBL, e-documents, archive, documents, source spool, generated UBL, list-documents, REST API, JD Edwards, SAP, NetSuite, custom ERP]
---

# E-Documents

The **E-Documents** page lists **every document captured in the archive** — not only the ones that became invoices. A spool that failed early, or a document type that never produces an invoice, is still here. It is the archive browser next to the [E-Invoicing](./invoices.md) list, which shows only invoices.

Each row is a document as it was received; open it to see the **archived source spool** and, when the document became an invoice, the **generated UBL** — both formatted and downloadable.

---

## At a glance

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="edoc-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="30" y="24" width="940" height="252" rx="14" fill="url(#edoc-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="50" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Documents</text>
  <rect x="640" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="652" y="53" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Activity · Customer · Source file</text>
  <rect x="800" y="38" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="53" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Period range</text>
  <line x1="30" y1="70" x2="970" y2="70" stroke="#1f2937" strokeWidth="1"/>

  <text x="50" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOCUMENT</text>
  <text x="215" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="300" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CUSTOMER</text>
  <text x="560" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="end">AMOUNT</text>
  <text x="640" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOC DATE</text>
  <text x="740" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE FILE</text>
  <text x="910" y="90" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">→ PA</text>

  <g fontFamily="ui-monospace, monospace" fontSize="10" fill="#cbd5e1">
    <rect x="40" y="100" width="920" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
    <text x="50" y="117">26000001CG00005</text><text x="215" y="117">RI</text><text x="300" y="117" fontFamily="system-ui, sans-serif">ACME Distribution</text><text x="560" y="117" textAnchor="end">4 500,00</text><text x="640" y="117">2026-07-02</text><text x="740" y="117">SPOOL_4281.xml</text><text x="915" y="117" fill="#4ade80">✓</text>

    <rect x="40" y="132" width="920" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
    <text x="50" y="149">26000002CG00005</text><text x="215" y="149">RI</text><text x="300" y="149" fontFamily="system-ui, sans-serif">Beta Industries</text><text x="560" y="149" textAnchor="end">1 280,50</text><text x="640" y="149">2026-07-02</text><text x="740" y="149">SPOOL_4281.xml</text><text x="915" y="149" fill="#4ade80">✓</text>

    <rect x="40" y="164" width="920" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
    <text x="50" y="181">26000003DL00005</text><text x="215" y="181">DL</text><text x="300" y="181" fontFamily="system-ui, sans-serif">Gamma SARL</text><text x="560" y="181" textAnchor="end">—</text><text x="640" y="181">2026-07-01</text><text x="740" y="181">SPOOL_4280.xml</text><text x="915" y="181" fill="#64748b">—</text>
  </g>

  <rect x="40" y="204" width="920" height="56" rx="8" fill="rgba(74,158,255,0.05)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="54" y="226" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Open a document →</text>
  <rect x="200" y="214" width="360" height="36" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="214" y="236" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Archived source spool — formatted · downloadable</text>
  <rect x="576" y="214" width="360" height="36" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="590" y="236" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Generated UBL (if it became an invoice) · downloadable</text>
</svg>

---

## What each row shows

The default columns are the archive fields: **document number**, **type**, **company**, **activity**, **sub-type**, a **send-to-PA** flag, **customer**, **amount**, **document date**, **archive date**, **source file** and the **PA UUID**. Filters cover **activity**, **customer**, **source file** and the usual **period range**.

Columns and filters are configurable from *Settings → List Views → E-Documents* — the same list-view mechanism used elsewhere, so you can pin the columns your team scans and hide the rest. The catalog also carries the refusal fields — **rejection reason**, **expected action** and **status note** — so an archive view can surface why a document was refused as a column, without opening each one.

---

## Opening a document

Clicking a row opens a viewer with two panes:

- **Archived source spool** — the document exactly as it was received, before any transform.
- **Generated UBL** — present when the document became an invoice; the UBL that was produced and sent.

Each pane is shown formatted and can be **downloaded**, named after the document. A document that failed before producing UBL shows only the source spool — which is precisely what you need to see why.

---

## Query it over REST

The same archive is reachable from an external application through `GET /api/list-documents` (documented in the built-in API reference), with per-document endpoints for the source spool and the generated UBL. It is the integration point for a downstream system that needs to pull an archived document without going through the UI.

---

## Access

The page follows the same **company / role** access rules as the [E-Invoicing](./invoices.md) list — a user sees only the companies their role allows. Grant the page to a role from *Settings → Roles* (under *Navigation*); it is not visible until granted.

---

## Tips & best practices

- **Start here when a spool "disappeared".** If a document never reached the invoice list, E-Documents shows whether it was archived at all and lets you read its source spool to find the reason.
- **Pin the columns you scan.** Configure the E-Documents list view once (*Settings → List Views*) so the archive opens on the fields that matter to your team.
- **Use the REST endpoint for downstream pulls.** `/api/list-documents` gives an external system the same archive without screen-scraping.
