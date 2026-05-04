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

The fourth tab is the visual editor for the **per-document PDF layout** — the JSON stored on the template's `pdfTemplate` property and read by the PDF generator at render time. When unset, the bundled default layout is used.

| Element | Purpose |
|---|---|
| **Section list** | Nine reorderable sections covering every part of an invoice PDF: *Header*, *Parties*, *Agent*, *Line Table*, *Document Allowances*, *VAT Breakdown*, *Totals*, *Payment*, *Notes*. Drag-and-drop reorders them; toggle a section off to remove it from the rendered PDF. |
| **Per-section config drawer** | Click a section to expand its inline config drawer. The drawer exposes per-section toggles — column visibility (`Column · Quantity`), sub-detail toggles (`Sub-detail · Line note`), group-header behaviour (`Group header · Page break per delivery`), …. |
| **Live preview** | Renders the current configuration against a sample invoice via `POST /api/pdf-templates/preview`, embedded in an iframe. Updates as you change toggles or reorder sections. |
| **Reset** | Restores the bundled default layout. |

A few of the more useful toggles:

- *Header → Meta · Invoice number / Issue date / Due date* — turn off any of the eight metadata lines on the right side.
- *Parties → Show Delivery box* — when off, only the Customer box is shown (single column).
- *Line Table → Group header · Page break per delivery* — each new delivery starts on a fresh page with its own table header.
- *Line Table → Column · Tax / Sub-detail · Line note (BT-127)* — granular column and sub-detail visibility.
- *VAT Breakdown* / *Totals* / *Payment* — toggle individual rows / columns to hide them from the rendered PDF.

The result of every processed invoice carries the document template name in `F564231.UHTMPL`, so the PDF generator can resolve the right `pdfTemplate` JSON when re-rendering on demand.

---

## Tips & best practices

- **Always set defaults** on Document Identification fields — they save you from spool variations that omit a tag occasionally.
- **For UBL sources, use *Suggest*** to bootstrap the regex — it handles the common patterns (digits-only, letters + digits, digits + letters + digits). Tweak by hand only when the format is unusual.
- **Leave Processing Type empty** unless this template needs to override the per-document-type default; this keeps the configuration DRY.
- For new document types, **start by loading an XML sample**, configure Tab 1 using the picker, then test on a few documents before tuning the XSL chain in Tab 2.
- The **Burst Key is the most critical XML field** — getting it wrong produces either one giant document or no documents at all.
- **Iterate in the PDF Template tab with the live preview open** — toggling a section and watching the iframe re-render is the fastest way to dial in a layout.
