---
title: Documents
description: "Configure how each document type is parsed from a source XML spool (JD Edwards, SAP, NetSuite, custom ERP…), transformed into UBL and routed for processing."
keywords: [NomaUBL, documents, configuration, XPath, bursting, UBL, XSL, source XML, ERP, JD Edwards, SAP, NetSuite]
---

# Documents

The **Documents** editor defines how NomaUBL turns a raw **source XML spool** into individual UBL documents. NomaUBL is **source-agnostic** — the same configuration model works whether the spool comes from **JD Edwards**, SAP, NetSuite, a custom ERP, or any other system that can emit XML. (Only the *Extract* and *BIP sync* features are JD Edwards-specific.)

For every document type you tell NomaUBL three things:

1. **How to split the spool** into one document per invoice (*Document* tab).
2. **How to transform** each document into UBL and PDF (*Processing* tab).
3. **How fast to run** the transformation (*Advanced* tab).

## Load an XML sample (optional, recommended)

At the top of the editor click **Load XML sample** and pick a representative spool file from your source system. Once loaded, every XPath field shows a small **⌘** browser button — clicking it opens a side drawer that lists all tag paths found in the sample, so you can pick the right tag without typing it. The drawer supports filtering and shows the value of each path as a hint.

You can configure documents without loading a sample, but the picker makes it much faster to avoid typos.

---

## Tab 1 — 📄 Document

This tab tells NomaUBL **where to find each piece of data** inside the source XML spool. Every field expects the **name of an XML tag** (not a full path). When the tag is missing in the spool, the **default value** you set next to it is used instead.

### Bursting (Document Root)

| Field | Description |
|---|---|
| **Burst Key** | XML tag name used to split the spool into individual documents. This element marks the **root of one document** — every occurrence in the spool produces one output document. |

### Document Identification

NomaUBL uses these five fields to know **which document it is**, who owns it, and what business type it belongs to. Each field accepts a default for cases where the tag is absent.

| Field | Maps to source-system concept |
|---|---|
| **Activity** | Business activity / module the document belongs to. |
| **Type** | Document type code as known in NomaUBL. |
| **Document ID** | Invoice number / document number. |
| **Document Type (JDE)** | Document type as defined in the source system (named after JD Edwards' RI/RM codes, but works with any source value). |
| **Company (JDE)** | Company / business unit owning the document in the source system (legacy field name, applies to any ERP). |

### Document Data (XPath)

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

This tab controls **what NomaUBL does** with the data extracted in Tab 1.

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

## Tips & best practices

- **Always set defaults** on Document Identification fields — they save you from spool variations that omit a tag occasionally.
- **Leave Processing Type empty** unless this template needs to override the per-document-type default; this keeps the configuration DRY.
- For new document types, **start by loading an XML sample**, configure Tab 1 using the picker, then test on a few documents before tuning the XSL chain in Tab 2.
- The **Burst Key is the most critical field** — getting it wrong produces either one giant document or no documents at all.
