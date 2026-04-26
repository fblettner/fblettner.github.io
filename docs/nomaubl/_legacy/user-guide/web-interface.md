---
title: Web Interface
description: "User guide for the NomaUBL React web interface — all pages and how to use them"
---

## Web Interface

The NomaUBL web interface is a **React + TypeScript** single-page application served by the embedded Java HTTP server. It provides a visual front-end for all processing operations, configuration, monitoring, and reference data.

### Starting the interface

```bash
java -jar nomaubl.jar -config config.properties
```

Open `http://localhost:8080` in your browser. The interface loads automatically with a sidebar navigation.

---

## Dashboard

The **Dashboard** is the home page. It provides an at-a-glance overview of invoice processing activity:

- Summary counters: total invoices processed, pending PA confirmation, errors
- Recent processing activity with status indicators
- Quick-access links to the most common operations

---

## Generate Report

The **Generate Report** page triggers the `-run` processing pipeline from the browser.

### How to use it

1. Select a **document template** from the dropdown (lists all templates from `config-documents.properties`)
2. Browse to or enter the path of the **JDE XML input file**
3. Select the **processing type**: `SINGLE`, `BURST`, `UBL`, `BOTH`, or `UBL_VALIDATE`
4. Enter the **JDE job number** for tracking
5. Click **Generate**

The page displays a real-time log output as the job runs, showing validation results, PA submission status, and any errors.

:::tip[UBL_VALIDATE mode]
Use `UBL_VALIDATE` to test your XSLT stylesheet and verify the generated UBL passes all validation rules before enabling live PA submission.
:::

---

## UBL Validation

The **UBL Validation** page lets you validate a UBL 2.1 XML file directly without going through the full JDE processing pipeline.

### How to use it

1. Upload or paste a UBL 2.1 XML document
2. Click **Validate**
3. Results are displayed with three sections:
    - **XSD validation** — structural compliance with UBL 2.1 schema
    - **EN16931 Schematron** — European e-invoicing standard compliance
    - **CIUS-FR Schematron** — French-specific rules compliance

Each error or warning shows:

| Column | Description |
| --- | --- |
| Level | `FATAL`, `ERROR`, or `WARNING` |
| Rule | The Schematron rule ID (e.g. `BR-01`, `BR-FR-01`) |
| Location | XPath location in the document |
| Message | Human-readable error description |

---

## Invoice List

The **Invoice List** page shows all invoices tracked in the Oracle `F564230` / `F564231` tables.

### Filtering

| Filter | Description |
| --- | --- |
| Date range | Filter by invoice creation date |
| Status | Filter by invoice status code |
| Document type | Filter by JDE document type (`DCT`) |
| Company | Filter by JDE company (`KCO`) |

### Actions per invoice

| Action | Description |
| --- | --- |
| **View XML** | Display the UBL XML stored in `F564230.FETXFT` |
| **View lifecycle** | Show all lifecycle events from `F564235` |
| **View errors** | Show validation errors from `F564236` |
| **Set status** | Manually override the invoice status |

---

## View Document

The **View Document** page displays the UBL XML stored in the database for a specific invoice.

- Syntax-highlighted XML viewer
- Option to download the UBL file
- Side-by-side view of validation errors if any exist

---

## Extract XML from DB

The **Extract XML from DB** page retrieves JDE XML BLOB data stored in Oracle tables and allows you to inspect or re-process it.

### How to use it

1. Enter the JDE document number, document type, and company
2. Click **Extract**
3. The raw XML is displayed and can be downloaded

This is useful for debugging — you can extract the original JDE XML that was used to generate a specific invoice.

---

## Download XML from Server

The **Download XML from Server** page connects to the JDE server via SFTP and downloads spool XML files.

Requires SCP/SFTP settings configured in the `global` template (`scpHost`, `scpUser`, `scpPassword`, `scpPort`, `scpRemotePath`).

### How to use it

1. Browse the remote directory tree
2. Select the XML file to download
3. Click **Download** — the file is saved locally and can then be used in **Generate Report**

---

## Import Status (Retrieve Statuses)

The **Retrieve Statuses** page triggers the `-import` polling operation from the browser, equivalent to running:

```bash
java -jar nomaubl.jar -import config.properties
```

### How to use it

1. Click **Retrieve Statuses**
2. The page shows a list of all invoices currently in `9906` (Pending) status
3. For each, the PA is polled and the result is displayed
4. The Oracle tables are updated automatically

Results show each invoice with its new status after polling.

---

## Integration Errors

The **Integration Errors** page lists all validation errors stored in `F564236`, grouped by invoice.

| Column | Description |
| --- | --- |
| Document | JDE document number |
| Level | Error severity (FATAL / ERROR / WARNING) |
| Source | File/rule source |
| Rule | Schematron rule ID |
| Message | Error description |

---

## E-Reporting

The **E-Reporting** page provides reporting and analytics on invoice processing:

- Processing volume by date range
- Status distribution (pie/bar charts)
- Error rate trends
- Export to CSV

---

## E-Directory

The **E-Directory** page allows manual PPF directory lookups. Enter a SIRET/SIREN number and check whether the recipient is registered and reachable on a certified platform.

### How to use it

1. Enter the recipient's SIRET or SIREN
2. Click **Search**
3. The response shows:
    - Whether the identifier is registered (`found` / `not found`)
    - Whether the recipient is reachable (`platform: true` / `platform: false`)

---

## UBL Defaults

The **UBL Defaults** page manages default values used in UBL generation:

- Default VAT category
- Default currency code
- Default payment terms
- Other UBL-level defaults defined in the reference lists (`config-lists.properties`)

---

## Invoice Status Reference

The **Invoice Status Reference** page is a read-only reference table of all status codes used by NomaUBL, both UNTDID 1373 standard codes and internal workflow codes (`99xx`).

See the full catalog in the [Status Codes Reference](../reference/status-codes.md).

---

## Reason Code Reference

The **Reason Code Reference** page lists all reason codes used for invoice status transitions (e.g. rejection reasons, dispute reasons), sourced from the PA.

---

## Settings

The **Settings** page provides a visual configuration editor for all templates.

### System templates (read-only names)

| Tab | Template | Contents |
| --- | --- | --- |
| Global | `global` | Database, paths, SCP, Ghostscript |
| E-Invoicing | `e-invoicing` | PA API credentials, validation paths, mock mode |
| E-Directory | `e-directory` | PPF directory API credentials |

### Document templates

The lower section lists all document templates. You can:

- **Add** a new template with the **+** button
- **Edit** an existing template by clicking its name
- **Delete** a template (system templates cannot be deleted)

### Lists configuration

Reference lists (currencies, VAT categories, etc.) stored in `config-lists.properties` are also editable from this page.

---

## XSL Editor

The **XSL Editor** page provides an in-browser editor for XSLT stylesheets. You can:

- Open an XSLT file from the configured XSLT directory
- Edit the stylesheet with syntax highlighting
- Save changes and immediately re-test with **Generate Report**

---

## AI Chat Panel

The **AI Chat Panel** provides an assistant for help with configuration, XSLT development, and troubleshooting. It is accessible from any page via the chat icon in the sidebar.
