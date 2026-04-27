---
title: Validate
description: "Validate a UBL document against XSD schema and Schematron business rules — straight UBL or upstream XML transformed to UBL via a template's XSL pipeline."
keywords: [NomaUBL, UBL, validation, XSD, Schematron, EN 16931, BR-FR, business rules, XSL, transform, JD Edwards, SAP, NetSuite, custom ERP]
---

# Validate

The **Validate** screen runs **XSD schema** and **Schematron business rules** checks on a UBL document. Two source types are supported:

- **XML (transform to UBL)** — the upstream XML is first transformed to UBL 2.1 via the selected template's XSL pipeline, then validated.
- **UBL (validate directly)** — the document is already UBL 2.1; validation runs as-is.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP. Validation never writes to the database, never sends to a Plateforme Agréée, and never triggers any other side effect — it is a read-only check.

---

## Input Configuration

| Field | Description |
|---|---|
| **Source** | `XML (transform to UBL)` runs the template's XSL transformation first, then validates the resulting UBL. `UBL (validate directly)` validates the file as-is. |
| **Template** | Document template (e.g. `invoices`, `credit_notes`). Required when *Source* is `XML`; hidden when *Source* is `UBL`. The template selects which XSL pipeline runs and which Schematron rule set applies. |
| **Input File** | Basename (without extension) of the file to validate (e.g. `invoice_001`). For `XML` source, the file is resolved in the template's `dirInput` directory; for `UBL`, in `dirInput/ubl/`. |

Two helpers sit next to the **Input File** field:

| Button | Behaviour |
|---|---|
| **Browse** (folder icon) | Opens a server-side file browser to pick an existing file. |
| **Upload** (upload icon) | Uploads a local `.xml` file to the appropriate server-side directory (template's `dirInput` for `XML`, `dirInput/ubl/` for `UBL`) and selects it as the input. For `XML` source, a template must be selected first. |

Click **Validate UBL** to run the validation.

---

## Validation Results

After validation completes, the **Validation Results** section displays:

- A green **Validation completed** message — or the error returned by the API on failure.
- A **structured log table** with one row per check. Each row carries:

| Column | Description |
|---|---|
| **Severity** | `FATAL`, `ERROR`, `WARNING` or `INFO`. `FATAL` and `ERROR` block submission to the PA; `WARNING` and `INFO` are informational. |
| **Module** | Validation engine that produced the entry — typically `XSD` (schema check) or `Schematron` (business rules). |
| **Submodule** | Rule identifier or XPath that triggered the entry (e.g. `BR-FR-12`, `cbc:CustomizationID`). |
| **Message** | Human-readable explanation of the failure or warning. |

XSD failures indicate a structural problem (missing required element, wrong type). Schematron entries map to business rules (EN 16931 core rules, French `BR-FR-*` extensions, etc.); their severity comes from the rule's own `flag`/`role` attribute in the Schematron file.

---

## Tips & best practices

- **Use Source = UBL when the document is already UBL** — typically when re-validating an archived document or a file produced by another tool. No template is needed in this mode.
- **Use Source = XML to validate the upstream payload and the XSL transformation in one pass** — useful when iterating on a new template before going live, since both the XSL output and the Schematron rules are exercised.
- **The template selector is also the rule-set selector.** Different templates may pin different Schematron versions (e.g. EN 16931 vs French `extended-ctc-fr`). Pick the template that matches the regulatory profile to validate against.
- **Validation is read-only.** To actually persist and submit, use *Processing → UBL* for a single document or *Sync → Fetch Input* for batch.
- **Upload writes the file in the correct server-side directory.** After a successful upload, the input field is populated with the resolved basename, ready for validation or for any subsequent processing run that scans the same directory.
