---
title: Documents
description: "Configure how each document type is parsed from a source XML spool (JD Edwards, SAP, NetSuite, custom ERP…) or read directly from a UBL invoice, transformed for processing and rendered as PDF."
keywords: [NomaUBL, documents, XPath, bursting, source, idPattern, cbc:ID, UHTMPL, UBL, XSL, PDF template, ERP, JD Edwards, SAP, NetSuite, custom ERP]
---

# Documents

The **Documents** editor defines how NomaUBL turns a raw **source XML spool** — or an **already-formed UBL invoice** — into the persisted record on which the rest of the platform operates. NomaUBL is **source-agnostic**: the same configuration model works whether the spool comes from **JD Edwards**, SAP, NetSuite, a custom ERP, or any other system that can emit XML or UBL. (Only the *Extract* and *BIP sync* features are JD Edwards-specific.)

For every document type you tell NomaUBL three things:

1. **Where the data comes from** — the new `source` selector picks between an XML spool that needs an XSL transform and a UBL 2.1 invoice that's already structured (*Document* tab).
2. **How to transform** each document into UBL and PDF (*Processing* tab).
3. **How fast to run** the transformation (*Advanced* tab).

A fourth tab — **PDF Template** — is dedicated to the per-document PDF layout (which sections appear, in which order, with which columns and toggles).

:::info[Page moved in 2026.05.0]
Document templates used to live under *Configuration → Documents*. They were lifted to **Management → Documents** so the new four-tab editor — and especially the visual *PDF Template* tab — has a full-height home. The schema and the routes are unchanged: every existing template keeps working with no migration step.
:::

---

## At a glance

<svg viewBox="0 0 1000 540" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="doc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="doc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="doc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="500" rx="14" fill="url(#doc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Documents</text>
  <rect x="624" y="30" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="662" y="45" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">+ New</text>
  <rect x="704" y="30" width="76" height="22" rx="5" fill="url(#doc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">💾 Save</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="156" height="430" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="140" height="24" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="108" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Search…</text>

  <rect x="248" y="124" width="140" height="36" rx="6" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="258" y="142" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">invoices</text>
  <text x="258" y="155" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · XML</text>

  <rect x="248" y="168" width="140" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="186" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">credit_notes</text>
  <text x="258" y="199" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · XML</text>

  <rect x="248" y="212" width="140" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="230" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">invoices-ubl</text>
  <text x="258" y="243" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · UBL</text>

  <rect x="248" y="256" width="140" height="36" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="274" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">debit_notes</text>
  <text x="258" y="287" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Source · XML</text>

  <rect x="408" y="84" width="372" height="430" rx="8" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <rect x="416" y="92" width="120" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="476" y="107" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📄 Document</text>
  <rect x="540" y="92" width="92" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="586" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔧 Processing</text>
  <rect x="636" y="92" width="68" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="670" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⚙️ Advanced</text>
  <rect x="708" y="92" width="64" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="740" y="107" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🖼 PDF</text>

  <text x="420" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <rect x="420" y="146" width="84" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="462" y="162" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">XML</text>
  <rect x="510" y="146" width="84" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="552" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL</text>

  <text x="420" y="194" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Document data (XPath)</text>
  <text x="420" y="216" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CUSTOMER NUMBER</text>
  <rect x="420" y="222" width="350" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="238" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">//customer/code</text>
  <text x="420" y="262" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DOCUMENT DATE</text>
  <rect x="420" y="268" width="350" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="284" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">//header/issueDate</text>
  <text x="420" y="308" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROUTING CODE</text>
  <rect x="420" y="314" width="350" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="330" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">//header/routing</text>

  <text x="420" y="362" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Date format <text fill="#64748b" fontSize="9" fontWeight="400">(2026.05.9)</text></text>
  <rect x="420" y="370" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="386" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">dd/MM/yyyy</text>
  <text x="628" y="386" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">SimpleDateFormat</text>

  <rect x="420" y="408" width="350" height="98" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="430" y="426" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">XML SAMPLE BROWSER</text>
  <text x="430" y="444" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">⌘ click any XPath field → drawer with all tag paths</text>
  <text x="430" y="460" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/invoice/header/issueDate     2026-05-09</text>
  <text x="430" y="474" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/invoice/customer/code        00001</text>
  <text x="430" y="488" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">/invoice/header/routing       B2B</text>

  <rect x="20" y="116" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Templates sidebar</text>
  <text x="30" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">search · per-template card</text>
  <line x1="200" y1="132" x2="248" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="820" y="92" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four-tab editor</text>
  <text x="830" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Document · Processing · Advanced · PDF</text>
  <line x1="820" y1="108" x2="780" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="20" y="218" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="233" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">XPath document data</text>
  <text x="30" y="246" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">extracted when Source = XML</text>
  <line x1="200" y1="234" x2="420" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="820" y="368" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="383" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">dateInputFormat</text>
  <text x="830" y="396" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">parses dd/MM/yyyy · ISO · etc.</text>
  <line x1="820" y1="384" x2="624" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>

  <rect x="20" y="436" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="451" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Load XML sample</text>
  <text x="30" y="464" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">⌘ → tag-path picker drawer</text>
  <line x1="200" y1="452" x2="420" y2="452" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#doc-arrow)"/>
</svg>

---

## Load an XML sample (optional, recommended)

At the top of the editor click **Load XML sample** and pick a representative spool file from your source system. Once loaded, every XPath field shows a small **⌘** browser button — clicking it opens a side drawer that lists all tag paths found in the sample, so you can pick the right tag without typing it. The drawer supports filtering and shows the value of each path as a hint.

You can configure documents without loading a sample, but the picker makes it much faster to avoid typos.

---

## Tab 1 — 📄 Document

This tab tells NomaUBL **where to find each piece of data** on every incoming document.

### Source

| Field | Values | Description |
|---|---|---|
| **Source** | `XML` (default) / `UBL` | Picks the input pipeline. **`XML`** keeps the original behaviour — an XML spool from any source system, transformed to UBL 2.1 by the XSL pipeline. **`UBL`** is for files that are already UBL 2.1 invoices (your ERP emits UBL natively, or the file came from an upstream system in UBL form); no XSL transform runs. |

The choice flips the rest of this tab between two distinct sets of fields. The remaining sections of the page — *Processing*, *Advanced*, *PDF Template* — apply identically to both sources.

### Key extraction from `cbc:ID` *(when Source = UBL)*

For UBL invoices the `(doc, dct, kco)` primary key — the same triplet that identifies the document everywhere else in NomaUBL — is parsed from the invoice's `cbc:ID` via a regex with **named groups**. There is no filename convention to follow; the file can be named anything.

| Field | Description |
|---|---|
| **ID Pattern** | Regex applied to `cbc:ID`. Allowed groups: `doc`, `dct`, `kco`. Any subset is allowed; missing groups fall back to the defaults below. |
| **doc default** | Used when the regex does not match or the `doc` group is missing. |
| **dct default** | Used when the `dct` group is missing. |
| **kco default** | Used when the `kco` group is missing — common when the `cbc:ID` does not include a company code. |

#### Sample cbc:ID + Suggest + Test helper

To avoid writing the regex by hand, the section includes a small inline assistant:

| Action | Effect |
|---|---|
| **Sample cbc:ID** | Paste a real ID from one of your invoices (e.g. `38706889RI00001` or `F202600025`). |
| **Suggest** | Generates an `idPattern` by splitting the sample on letter / digit transitions, fills in the matching defaults, and runs *Test* on the result. |
| **Test** | Runs the current `idPattern` + defaults against the sample and shows the extracted `(doc, dct, kco)` live — green when it matches, red on a regex error. |

Worked examples:

| Sample | Suggested `idPattern` | Defaults | Extracted |
|---|---|---|---|
| `F202600025` | `^(?<dct>[A-Z]+)(?<doc>\d+)$` | `kcoDefault = 00001` | `doc=202600025`, `dct=F`, `kco=00001` |
| `38706889RI00001` | `^(?<doc>\d+)(?<dct>[A-Z]+)(?<kco>\d+)$` | (none) | `doc=38706889`, `dct=RI`, `kco=00001` |

### Bursting (Document Root) *(when Source = XML)*

| Field | Description |
|---|---|
| **Burst Key** | XML tag name used to split the spool into individual documents. This element marks the **root of one document** — every occurrence in the spool produces one output document. |

### Document Identification *(when Source = XML)*

NomaUBL uses these five fields to know **which document it is**, who owns it, and what business type it belongs to. Each field accepts a default for cases where the tag is absent.

| Field | Maps to source-system concept |
|---|---|
| **Activity** | Business activity / module the document belongs to. |
| **Type** | Document type code as known in NomaUBL. |
| **Document ID** | Invoice number / document number. |
| **Document Type (JDE)** | Document type as defined in the source system (named after JD Edwards' RI/RM codes, but works with any source value). |
| **Company (JDE)** | Company / business unit owning the document in the source system (legacy field name, applies to any ERP). |

### Document Data (XPath) *(when Source = XML)*

Functional data NomaUBL reads from the spool to populate the UBL invoice and to drive routing.

| Field | Description |
|---|---|
| **Customer Number** | Customer / address book number. |
| **Amount** | Document gross amount. |
| **Document Date** | Issue date of the document. |
| **Due Date** | Payment due date. |
| **Routing Code** | Code used to route the document to the correct **delivery channel**: archive, email, postal mail, dispatch to a Plateforme Agréée, etc. |
| **Office** | XML tag in the spool that contains the **office / business unit** code. |
| **Processing Type** | XML tag carrying the processing-type code (B2B, B2BINT…). Leave empty to fall back to the **default defined in Document Types**. |

> 💡 Each Document Data field has its own **default value**. Defaults are used when the XML tag is missing or empty, which is useful when a value is constant for a given template.

### Date format *(when Source = XML, 2026.05.9)*

| Field | Default | Description |
|---|---|---|
| **`dateInputFormat`** | `yyyy-MM-dd` *(ISO)* | Java `SimpleDateFormat` pattern used to parse **document and due dates** extracted from the source XML before they are written to `F564230` / `F564231`. The previous version hardcoded ISO; that worked on UBL sources (the XSL emits ISO) but silently failed on XML sources where the spool format is locale-dependent (`dd/MM/yyyy` for many French ERPs, `MM/dd/yyyy` for North-American spools, etc.). |

Pick the pattern that matches the source dates literally. Common values:

| Source date sample | Pattern |
|---|---|
| `2026-05-12` | `yyyy-MM-dd` *(default — ISO)* |
| `12/05/2026` | `dd/MM/yyyy` |
| `12.05.2026` | `dd.MM.yyyy` |
| `05/12/2026` | `MM/dd/yyyy` |
| `20260512` | `yyyyMMdd` |

The pattern applies only when the document's *Source* is `XML`. UBL sources keep emitting ISO through the XSL, so the field is ignored there. The default keeps existing UBL flows back-compat without any edit.

---

## Tab 2 — 🔧 Processing

This tab controls **what NomaUBL does** with the data extracted in Tab 1. It applies to both `XML` and `UBL` sources, although several fields (XSL, RTF) are only meaningful on the XML pipeline.

### XSL Transformation

| Field | Values | Description |
|---|---|---|
| **Transform** | `Y` / `N` | Whether to apply an XSL transformation pipeline before generating UBL. |
| **XSL Pre-processing** | path | Optional XSL applied before indexation, e.g. to normalise the raw source XML (JD Edwards, SAP, NetSuite, custom ERP…). |
| **XSL Indexation** | path | XSL used to generate the indexation / metadata applied to the document. Produces an XML file paired with the generated PDF for indexing purposes. |
| **RTF Template** | path | RTF template used by BI Publisher to render the human-readable PDF. |

### UBL

| Field | Values | Description |
|---|---|---|
| **UBL XSLT** | path | XSL transform from the source XML to **UBL 2.1**. The placeholder `%APP_HOME%` is expanded to the NomaUBL install root. |
| **Attachment** | `— None` / `create` / `attach` | How to associate the human-readable PDF with the UBL: `create` = generate the PDF and embed it in the UBL file; `attach` = use a PDF already present in the input directory; empty = no PDF embedded. |

### Output

| Field | Description |
|---|---|
| **No-Data Key** | Name of an XML element that **must exist** in the spool. If absent, NomaUBL considers the document empty and skips it. Useful to filter out spool sections that aren't real invoices. |
| **Set Locale** | Locale used to render the PDF (e.g. `en_US`, `fr_FR`). Affects date and number formatting in the PDF only. |

---

## Tab 3 — ⚙️ Advanced

| Field | Description |
|---|---|
| **Number of CPUs** | Number of parallel threads used by the processing pipeline for this document type. Increase to speed up large spools, decrease if the host is under memory pressure. Default: `4`. |

---

## Tab 4 — 🖼 PDF Template

The fourth tab picks the **PDF layout** applied when this document is rendered. Since 2026.05.1, layouts are first-class shareable resources stored in `config-pdf.json` and edited on the dedicated [PDF Templates](./pdf-templates.md) page — this tab simply references one of them **by name** via the template's `pdfTemplate` property.

| Field | Description |
|---|---|
| **PDF Template** | Dropdown listing every saved layout (the `pdf-template` resources from *PDF Templates*), plus the bundled `built-in`. Leave empty to fall back to the global default (`global.defaultPdfTemplate`); empty + no global default falls back to `built-in`. |

The resolution chain at render time is therefore: this field → `global.defaultPdfTemplate` → `built-in`. Every persisted invoice carries the document template name in `F564231.UHTMPL`, so the PDF generator re-renders on demand against the layout that was active for that document.

:::tip[Editing the layout itself]
The visual editor — section list, per-section drawer, live preview, block sections — lives on [Management → PDF Templates](./pdf-templates.md). Open it once to author or tune a layout, then come back here to point the document at it. A single layout can serve many documents.
:::

---

## Tips & best practices

- **Always set defaults** on Document Identification fields — they save you from spool variations that omit a tag occasionally.
- **For UBL sources, use *Suggest*** to bootstrap the regex — it handles the common patterns (digits-only, letters + digits, digits + letters + digits). Tweak by hand only when the format is unusual.
- **Leave Processing Type empty** unless this template needs to override the per-document-type default; this keeps the configuration DRY.
- For new document types, **start by loading an XML sample**, configure Tab 1 using the picker, then test on a few documents before tuning the XSL chain in Tab 2.
- The **Burst Key is the most critical XML field** — getting it wrong produces either one giant document or no documents at all.
- **Edit the PDF layout on its own page.** [PDF Templates](./pdf-templates.md) hosts the visual editor with the live preview; this tab just picks the right one. Sharing one layout across several documents avoids editing N copies when a legal mention or a column set changes.
