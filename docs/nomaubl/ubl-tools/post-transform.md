---
title: Post-Transform
description: "NomaUBL post-transform — convert the validated UBL into another syntax (CII D16B with the shipped ubl-to-cii.xsl, a national format with your own stylesheet) while UBL stays the pivot: output next to the UBL, download from the invoice window, sending through the platform connector."
keywords: [NomaUBL, post-transform, CII, Cross Industry Invoice, D16B, UBL to CII, national format, output syntax, derivedContent, derivedFilePath, platform connector, JD Edwards, SAP, NetSuite, custom ERP]
---

# Post-Transform

A **post-transform** converts the validated UBL of a document into another syntax with an XSL stylesheet: Cross Industry Invoice (CII) with the stylesheet shipped with NomaUBL, or a country's own format with a stylesheet of yours. **UBL stays the pivot**: the database, the statuses, the validation and the routing keep working on the UBL; the converted file is an extra output, written next to the UBL, downloadable from the invoice window and, when the platform expects it, sent in its place.

The post-transform is set per [document](../management/documents.md#ubl) and runs in both pipelines, whatever the source — a JD Edwards spool, an SAP or NetSuite extract, a custom ERP or a UBL file.

---

## At a glance

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="250" rx="14" fill="url(#pt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Post-transform: UBL stays the pivot</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">The validated UBL is converted into another syntax; database, statuses and routing keep the UBL.</text>
  <rect x="240" y="96" width="120" height="54" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="300.0" y="120.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Source</text>
  <text x="300.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">spool · UBL · API</text>
  <line x1="360" y1="123" x2="390" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="392" y="96" width="120" height="54" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="452.0" y="120.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL 2.1</text>
  <text x="452.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL XSLT</text>
  <line x1="512" y1="123" x2="542" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="544" y="96" width="130" height="54" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="609.0" y="120.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Validation</text>
  <text x="609.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">checks of the rule set</text>
  <line x1="674" y1="123" x2="704" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="706" y="96" width="130" height="54" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="771.0" y="120.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Post-transform</text>
  <text x="771.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ubl-to-cii.xsl</text>
  <line x1="836" y1="123" x2="860" y2="123" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="862" y="96" width="98" height="54" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="911.0" y="120.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CII file</text>
  <text x="911.0" y="135.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">…-cii.xml</text>
  <rect x="392" y="196" width="140" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="462.0" y="218.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Database</text>
  <text x="462.0" y="233.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">archive · lifecycle</text>
  <line x1="452" y1="150" x2="452" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="560" y="196" width="170" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="645.0" y="218.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Platform connector</text>
  <text x="645.0" y="233.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#123;content&#125;&#125; · &#123;&#123;derivedContent&#125;&#125;</text>
  <line x1="609" y1="150" x2="630" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <line x1="910" y1="150" x2="690" y2="196" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#pt-flow)"/>
  <rect x="760" y="196" width="200" height="50" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="860.0" y="218.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Invoice window</text>
  <text x="860.0" y="233.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Download CII — from the archive</text>
  <line x1="910" y1="150" x2="880" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="706" y="40" width="130" height="34" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="771.0" y="61.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Failure = warning</text>
  <line x1="771" y1="74" x2="771" y2="96" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#pt-flow)"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UBL first</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">generation and validation unchanged</text>
  <line x1="200" y1="113.0" x2="240" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pivot</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">database and statuses keep the UBL</text>
  <line x1="200" y1="217.0" x2="392" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Never blocks</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">POST_TRANSFORM warning</text>
  <line x1="1000" y1="57.0" x2="836" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Next to the UBL</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">suffix replaces .xml</text>
  <line x1="1000" y1="127.0" x2="960" y2="123" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
  <rect x="1000" y="205" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="220" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">On demand</text>
  <text x="1010" y="233" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recomputed from the archived UBL</text>
  <line x1="1000" y1="222.0" x2="960" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pt-arrow)"/>
</svg>

---

## Settings

On the **UBL** tab of the [document](../management/documents.md#ubl):

| Field | Default | Description |
|---|---|---|
| **Post-transform** | *(blank = none)* | Stylesheet run on the validated UBL. Path placeholders are accepted (`%APP_HOME%`, `%ENV%`); the placeholder button inserts them. Example: `%APP_HOME%/%ENV%/xsl/ubl-to-cii.xsl`. |
| **Post-transform output** | `-cii.xml` | Suffix that replaces the `.xml` of the UBL file name: `F2026-1203.xml` gives `F2026-1203-cii.xml`. The download uses the same name. |
| **Post-transform name** | *(blank)* | Short name of the converted syntax, shown on the download buttons: `CII` gives **Download CII**; blank gives **Download converted file**. |

---

## When it runs

1. The source is turned into UBL and validated with the packs of the document's [rule set](./rule-sets.md), as without a post-transform.
2. When the validation leaves **no blocking finding**, the UBL goes through the stylesheet and the result is written **next to the UBL file**, with the output suffix.
3. If the stylesheet fails, the failure is recorded as a **warning** finding `POST_TRANSFORM` on the invoice, visible in its validation errors and in [Integration errors](../application/diagnostics/integration-errors.md). The UBL keeps its course: an invoice is never blocked by its post-transform.

An invoice with a blocking finding gets no converted file; it is produced on the next run, once the invoice is fixed and processed again.

---

## Downloading the converted file

The invoice window ([E-Invoicing](../application/invoices.md)) and the document window ([E-Documents](../application/edocuments.md)) show a **Download CII** button (or *Download converted file*) when the document has a post-transform. The file is **computed on demand from the archived UBL**, so it is available for every archived invoice, including those processed before the post-transform was set. A conversion error is shown in the window (*Conversion failed: …*).

---

## Sending the converted file to the platform

The body of the platform's [API connector](../configuration/api-connectors.md) can carry the converted file in place of the UBL, with two placeholders:

| Placeholder | Value |
|---|---|
| `{{derivedContent}}` | Base64 of the converted file, like `{{content}}` for the UBL. Empty when the document has no post-transform. |
| `{{derivedFilePath}}` | Path of the converted file on disk. Empty when the document has no post-transform. |

`{{content}}` and `{{filePath}}` still designate the UBL. On a resend, the converted file is computed again from the archived UBL. The routing of the invoice — recipient, document type, statuses — keeps reading the UBL.

---

## The shipped stylesheet: UBL to CII

`ubl-to-cii.xsl` converts a UBL 2.1 Invoice or CreditNote into a **Cross Industry Invoice D16B** following the EN 16931 core model: parties and identifiers, notes with their subject codes, references, delivery, payment means with the IBAN or a proprietary account, allowances and charges, VAT breakdown, lines and attachments. It was checked on the demo corpus against the official EN 16931 CII rules. The [demo](../installation/demo-corpus.md) UBL document is configured with it.

---

## Other formats

A country whose format is not UBL — a national syntax required by a platform or a tax administration — is handled with a stylesheet of the same kind: UBL in, the national syntax out. The UBL-based standards are handled differently, with a [rule set](./rule-sets.md) of their own. Each national submission flow (connector, statuses) is a configuration of its own.

---

## Tips & best practices

- **Validate the UBL first.** The post-transform only runs on an invoice without blocking finding; a correct UBL is the condition of a correct conversion.
- **Name the syntax.** *Post-transform name* turns the generic button into *Download CII*, clearer for the users.
- **Watch the POST_TRANSFORM warnings** after setting a new stylesheet: they point at the invoices the stylesheet does not handle.
- **Keep your own stylesheets under the environment**, next to the other XSL files, and write the path with `%APP_HOME%` / `%ENV%`, so the same setting works on every environment.
