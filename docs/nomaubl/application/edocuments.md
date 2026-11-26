---
title: E-Documents
description: "Browse every document captured in the NomaUBL archive — not only those that became invoices — with the archived source spool and the generated UBL, change the transaction type or edit the UBL of an invoice, and query the same archive over REST."
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

Clicking a row opens the document window, with three tabs:

- **Summary** — the archive fields of the document: status, source file, customer, type, UBL number, dates, amount, template, PA UUID.
- **Source XML** — the archived source spool, the document exactly as it was received, before any transform.
- **UBL** — present when the document became an invoice; the UBL that was produced and sent.

The source and the UBL are shown formatted and can be **downloaded**, named after the document. When the document has a [post-transform](../ubl-tools/post-transform.md), the UBL pane also offers **Download CII** (or *Download converted file*): the archived UBL converted on demand. A document that failed before producing UBL shows only the source spool — which is precisely what you need to see why.

When the document has a **template** and an **archived source**, the viewer also offers an **Extract & Process** button: it re-extracts the archived spool and re-runs it through the document's template — the same pipeline as the [Extract & Process](../processing/extract-and-process.md) page with the *Archive* source, with the parameters taken from the document itself. Replace mode is forced, so the rerun overwrites the previous result. Handy to regenerate a document's outputs after a template or configuration change.

### Change the type or edit the UBL \{#ubl-tab-actions\}

On the **UBL** tab, two buttons are offered to users whose role has the **Edit UBL / change type** right (see [Access](#access)):

<svg viewBox="0 0 1200 430" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edubl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edubl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="edubl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="edubl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="390" rx="14" fill="url(#edubl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">▤ Document 1042 / RI / 00001</text>
  <rect x="936" y="31" width="24" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="948.0" y="45.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="66" width="61" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="270.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Summary</text>
  <rect x="307" y="66" width="78" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="346.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Source XML</text>
  <rect x="391" y="66" width="38" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="410.0" y="80.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>
  <line x1="220" y1="96" x2="980" y2="96" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="108" width="470" height="238" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="130" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Invoice xmlns="urn:oasis:…:Invoice-2"&gt;</text>
  <text x="252" y="148" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:CustomizationID&gt;urn:cen.eu:en16931…&lt;/cbc:CustomizationID&gt;</text>
  <text x="252" y="166" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:ID&gt;F2026-1042&lt;/cbc:ID&gt;</text>
  <text x="252" y="184" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:IssueDate&gt;2026-11-20&lt;/cbc:IssueDate&gt;</text>
  <text x="252" y="202" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:InvoiceTypeCode&gt;380&lt;/cbc:InvoiceTypeCode&gt;</text>
  <rect x="246" y="208" width="200" height="16" rx="3" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.4)" strokeWidth="1"/>
  <text x="252" y="220" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:Note&gt;#BAR#B2B&lt;/cbc:Note&gt;</text>
  <text x="252" y="238" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cbc:DocumentCurrencyCode&gt;EUR&lt;/cbc:DocumentCurrencyCode&gt;</text>
  <text x="252" y="256" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cac:AccountingSupplierParty&gt;</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">    &lt;cac:Party&gt; …</text>
  <text x="252" y="292" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  &lt;cac:AccountingCustomerParty&gt;</text>
  <text x="252" y="310" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">    &lt;cbc:RegistrationName&gt;ACME&lt;/cbc:RegistrationName&gt;</text>
  <text x="252" y="328" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">  …</text>
  <rect x="730" y="108" width="230" height="238" rx="10" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="744" y="132" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Change the transaction type</text>
  <line x1="730" y1="144" x2="960" y2="144" stroke="#1f2937" strokeWidth="1"/>
  <text x="744" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CURRENT TYPE</text>
  <text x="744" y="182" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">B2B</text>
  <text x="744" y="206" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NEW TYPE</text>
  <rect x="744" y="214" width="202" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="754" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">B2C – Relève du e-reporting… ▾</text>
  <text x="744" y="256" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Only the type changes: status and</text>
  <text x="744" y="268" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">platform are untouched.</text>
  <line x1="730" y1="298" x2="960" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <rect x="744" y="310" width="61" height="22" rx="5" fill="url(#edubl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="774.5" y="324.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Confirm</text>
  <rect x="811" y="310" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.5" y="324.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <line x1="220" y1="360" x2="980" y2="360" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="372" width="128" height="22" rx="5" fill="url(#edubl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="304.0" y="386.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Extract &amp; Process</text>
  <rect x="620" y="372" width="94" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="667.0" y="386.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Change type</text>
  <rect x="720" y="372" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="759.0" y="386.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Edit UBL</text>
  <rect x="804" y="372" width="100" height="22" rx="5" fill="url(#edubl-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="854.0" y="386.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Download UBL</text>
  <rect x="910" y="372" width="50" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.0" y="386.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Close</text>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UBL tab</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the stored UBL, formatted</text>
  <line x1="1000" y1="57.0" x2="431" y2="77" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Transaction type</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">routing note #BAR# / #ADN#</text>
  <line x1="200" y1="217.0" x2="246" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Change type · Edit UBL</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">right Edit UBL / change type</text>
  <line x1="200" y1="347.0" x2="630" y2="383" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New type</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">from the Document types</text>
  <line x1="1000" y1="137.0" x2="960" y2="225" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="1000" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type only</text>
  <text x="1010" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no validation, status or send</text>
  <line x1="1000" y1="227.0" x2="960" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Edit UBL → Save UBL</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">validated again on save</text>
  <line x1="1000" y1="347.0" x2="760" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edubl-arrow)"/>
</svg>

| Button | What it does |
|---|---|
| **Change type** | Opens *Change the transaction type*: the **Current type** read from the UBL and a **New type** picked among the [document types](../configuration/system/document-types.md) (B2B, B2C, B2G…). **Confirm** writes the new type into the routing note of the stored UBL (`#BAR#B2C`, `#ADN#B2G` for B2G; the note is added after the type code when the UBL has none) and into the invoice header, so the lists show it at once. Only the type changes: no validation, no status change, nothing sent to the platform. |
| **Edit UBL** | Opens the stored UBL as text in an XML editor. **Save UBL** stores it the way the invoice window saves an invoice: the UBL is validated again, the window reports the resulting status and lists the findings above the editor. **Cancel** leaves the stored UBL unchanged. An invoice already processed by the platform is refused (*Not saved: the invoice was already processed by the platform*); unlock it through *Set status* first. |

Both actions refresh the list behind the window. A typical use: an invoice produced as B2B that should have been declared as B2C, corrected before it is sent.

---

## Query it over REST

The same archive is reachable from an external application through `GET /api/list-documents` (documented in the built-in API reference), with per-document endpoints for the source spool and the generated UBL. It is the integration point for a downstream system that needs to pull an archived document without going through the UI.

---

## Access

The page follows the same **company / role** access rules as the [E-Invoicing](./invoices.md) list — a user sees only the companies their role allows. Grant the page to a role from *Settings → Roles* (under *Navigation*); it is not visible until granted.

The **Change type** and **Edit UBL** buttons of the UBL tab need the **Edit UBL / change type** action (`invoice.edit-ubl`) on the [role](../configuration/security/roles.md#action-catalog). A role restricted to a list of actions does not have it until it is ticked.

---

## Tips & best practices

- **Start here when a spool "disappeared".** If a document never reached the invoice list, E-Documents shows whether it was archived at all and lets you read its source spool to find the reason.
- **Pin the columns you scan.** Configure the E-Documents list view once (*Settings → List Views*) so the archive opens on the fields that matter to your team.
- **Use the REST endpoint for downstream pulls.** `/api/list-documents` gives an external system the same archive without screen-scraping.
