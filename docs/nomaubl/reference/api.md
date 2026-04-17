---
title: REST API
description: "Complete reference of the NomaUBL embedded REST API — all endpoints exposed by the WebServer"
---

## REST API

NomaUBL embeds an HTTP server (`WebServer`) that exposes a REST API consumed by the React frontend. All endpoints are under the path `/api/`.

### Base URL

```
http://localhost:8080/api
```

### Common response format

Most endpoints return a JSON object with at minimum a `success` boolean:

```json
{ "success": true }
{ "success": false, "error": "Error description" }
```

### Invoice ID format

Endpoints that target a specific invoice use a compound identifier encoded as `{doc}-{dct}-{kco}` and passed URL-encoded. Example: document `123456`, type `RI`, company `001` → `123456-RI-001`.

---

## Configuration

### List all templates

```
GET /api/config/templates
```

Returns all templates (system + document) loaded from the configuration files.

**Response:**

```json
{
  "templates": [
    {
      "name": "global",
      "type": "system",
      "properties": { "URL": "jdbc:oracle:thin:@...", "schema": "CRPDTA" }
    },
    {
      "name": "vrc_pro",
      "type": "document",
      "properties": { "transform": "/opt/nomaubl/xsl/vrc_pro.xsl" }
    }
  ]
}
```

### Get a specific template

```
GET /api/config/template?name={name}
```

| Parameter | Description |
| --- | --- |
| `name` | Template name (URL-encoded) |

**Response:** the template object with all its properties.

### Create a template

```
POST /api/config/template
Content-Type: application/json
```

**Body:**

```json
{
  "name": "my_invoice",
  "type": "document",
  "properties": {
    "transform": "%APP_HOME%/xsl/my_invoice.xsl"
  }
}
```

### Update a template

```
PUT /api/config/template?name={name}
Content-Type: application/json
```

Replaces all properties of the named template. System templates (`global`, `e-invoicing`, `e-directory`) can be updated but not renamed or deleted.

**Body:** same structure as create.

### Delete a template

```
DELETE /api/config/template?name={name}
```

Deletes a document template. System templates cannot be deleted.

### Copy a template

```
POST /api/config/template/copy
Content-Type: application/json
```

Duplicates an existing template under a new name.

**Body:**

```json
{ "source": "vrc_pro", "target": "vrc_pro_copy" }
```

---

## Processing

### Run invoice processing

```
POST /api/run
Content-Type: application/json
```

Triggers the invoice processing pipeline (equivalent to the `-run` CLI mode).

**Body:**

```json
{
  "template": "vrc_pro",
  "file": "/data/input/output.xml",
  "mode": "UBL",
  "jobNumber": "1001",
  "replaceMode": false
}
```

| Field | Type | Description |
| --- | --- | --- |
| `template` | string | Document template name |
| `file` | string | Absolute path to the JDE XML input file |
| `mode` | string | Processing type: `SINGLE`, `BURST`, `UBL`, `BOTH`, `UBL_VALIDATE` |
| `jobNumber` | string | JDE job number for tracking |
| `replaceMode` | boolean | `true` to overwrite an existing invoice record |

**Response:**

```json
{
  "success": true,
  "logs": [
    { "severity": "INFO", "module": "RUN", "submodule": "START", "message": "Processing UBL" },
    { "severity": "INFO", "module": "UBL", "submodule": "VALIDATE", "message": "Validation OK" }
  ]
}
```

### Validate UBL

```
POST /api/validate
Content-Type: application/json
```

Validates a UBL XML file (XSD + EN16931 + CIUS-FR) without processing it through the full pipeline.

**Body:**

```json
{
  "file": "/data/input/invoice.xml",
  "sourceType": "ubl",
  "template": "vrc_pro"
}
```

| Field | Type | Description |
| --- | --- | --- |
| `file` | string | Path to the XML file to validate |
| `sourceType` | `xml` \| `ubl` | `xml` = JDE source (transform first), `ubl` = already a UBL document |
| `template` | string | Template to use for XSLT transform (required if `sourceType=xml`) |

**Response:** same structure as `/api/run` with validation errors in the logs.

### Poll PA import status

```
POST /api/import
Content-Type: application/json

{}
```

Polls the PA for all invoices in status `9906` (Pending). Updates the Oracle tables based on the PA responses.

**Response:**

```json
{
  "success": true,
  "logs": [
    { "severity": "INFO", "module": "IMPORT", "submodule": "STATUS", "message": "12 invoices checked, 8 updated" }
  ]
}
```

### Retrieve PA lifecycle statuses

```
POST /api/retrieve-statuses
Content-Type: application/json

{}
```

Fetches the latest lifecycle events from the PA for all active invoices and updates `F564231` / `F564235`.

**Response:** same structure as `/api/import`.

---

## Invoices

### List invoices

```
GET /api/invoices
```

Returns paginated invoices from `F564231` / `F564230`.

**Query parameters:**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `page` | integer | `1` | Page number |
| `pageSize` | integer | `50` | Records per page |
| `search` | string | — | Full-text search (UBL number, customer name) |
| `status` | string | — | Filter by status code (e.g. `9906`, `10`) |
| `ublNumber` | string | — | Filter by UBL invoice number (`K74FLEN`) |
| `customer` | string | — | Filter by customer name or number |
| `sortBy` | string | — | Sort column |
| `sortDir` | `asc` \| `desc` | — | Sort direction |
| `dateFrom` | string | — | Start date filter (ISO: `yyyy-MM-dd`) |
| `dateTo` | string | — | End date filter (ISO: `yyyy-MM-dd`) |

**Response:**

```json
{
  "invoices": [
    {
      "fedoc": "123456",
      "fedct": "RI",
      "kco": "001",
      "ublNumber": "INV-2025-001",
      "issueDate": "2025-01-15",
      "invoiceType": "380",
      "totalHT": 1000.00,
      "totalTTC": 1200.00,
      "amountDue": 1200.00,
      "customerRef": "CUST-001",
      "customerName": "Acme Corp",
      "currency": "EUR",
      "status": "10",
      "statusLabel": "Déposée"
    }
  ],
  "total": 142
}
```

### Invoice statistics

```
GET /api/invoices/stats
```

Returns invoice counts grouped by status, for dashboard charts.

**Query parameters:**

| Parameter | Type | Description |
| --- | --- | --- |
| `dateFrom` | string | Start date filter (ISO) |
| `dateTo` | string | End date filter (ISO) |

**Response:**

```json
{
  "stats": [
    { "status": "10", "statusLabel": "Déposée", "statusLabelEn": "Deposited", "count": 87 },
    { "status": "9906", "statusLabel": "En attente", "statusLabelEn": "Pending", "count": 12 }
  ]
}
```

### Get invoice lines

```
GET /api/invoices/{id}/lines
```

Returns the detail lines for an invoice from `F564233`.

**Response:**

```json
{
  "lines": [
    {
      "lineId": 1,
      "description": "Product A",
      "itemId": "REF-001",
      "quantity": 10,
      "unit": "C62",
      "unitPrice": 100.00,
      "lineAmount": 1000.00,
      "allowance": 0,
      "currency": "EUR",
      "taxCategory": "S",
      "taxRate": 20.0,
      "taxExemption": ""
    }
  ]
}
```

### Get invoice VAT summary

```
GET /api/invoices/{id}/vat
```

Returns the VAT subtotals from `F564234`.

**Response:**

```json
{
  "vat": [
    {
      "sequence": 1,
      "taxCategory": "S",
      "taxRate": 20.0,
      "taxableAmount": 1000.00,
      "taxAmount": 200.00,
      "currency": "EUR",
      "taxExemption": ""
    }
  ]
}
```

### Get invoice lifecycle

```
GET /api/invoices/{id}/lifecycle
```

Returns all lifecycle events from `F564235`.

**Response:**

```json
{
  "events": [
    {
      "sequence": 1,
      "statusCode": "9900",
      "statusLabel": "Créée",
      "statusLabelEn": "Created",
      "message": "",
      "createdAt": "2025-01-15T10:30:00"
    },
    {
      "sequence": 2,
      "statusCode": "9901",
      "statusLabel": "Validée",
      "statusLabelEn": "Validated",
      "message": "",
      "createdAt": "2025-01-15T10:30:01"
    }
  ]
}
```

### Get invoice validation errors

```
GET /api/invoices/{id}/errors
```

Returns validation errors from `F564236`.

**Response:**

```json
{
  "errors": [
    {
      "level": "ERROR",
      "source": "CIUS-FR",
      "rule": "BR-FR-01",
      "message": "Le SIRET du fournisseur est obligatoire"
    }
  ]
}
```

### Resend invoice to PA

```
POST /api/invoices/{id}/resend
```

Re-submits an invoice to the PA. Used when a send has failed (`9904`) or to force re-submission.

**Response:**

```json
{ "success": true, "uuid": "5edf1234-..." }
```

### Update invoice status

```
POST /api/invoices/{id}/status
Content-Type: application/json
```

Manually sets the invoice status. Supports two targets:

**Update DB status directly:**

```json
{
  "target": "db",
  "code": "9901",
  "reason": "Manual validation override"
}
```

**Send status event to PA:**

```json
{
  "target": "pa",
  "name": "rejected",
  "reason": "Incorrect amount",
  "statusAt": "2025-01-15T10:00:00",
  "data": {}
}
```

---

## JDE / BIP Extraction

### Extract from JDE BIP

```
POST /api/extract-bip
Content-Type: application/json
```

Extracts XML or PDF data stored in JDE BIP (BI Publisher) BLOB fields.

**Body:**

```json
{
  "mode": "XML",
  "report": "R03B305",
  "version": "XJDE0001",
  "language": "FR",
  "jobNumber": "1001",
  "outputDir": "/data/output"
}
```

| Field | Type | Values | Description |
| --- | --- | --- | --- |
| `mode` | string | `XML`, `PDF` | Type of output to extract |
| `report` | string | — | JDE report name |
| `version` | string | — | Report version |
| `language` | string | — | Report language |
| `jobNumber` | string | — | JDE job number |
| `outputDir` | string | — | Output directory path |

### Extract XML from DB

```
POST /api/extract-xml
Content-Type: application/json
```

Extracts UBL XML stored in `F564231.TXFT` for a specific invoice.

**Body:**

```json
{
  "doc": "123456",
  "dct": "RI",
  "kco": "001",
  "outputDir": "/data/output"
}
```

### Download XML from server

```
POST /api/download-xml
Content-Type: application/json
```

Downloads an XML spool file from the JDE server via SFTP (uses the SCP settings from the `global` template).

**Body:**

```json
{
  "report": "R03B305",
  "version": "XJDE0001",
  "language": "FR",
  "job": "1001",
  "output": "/data/output"
}
```

---

## File System

### Browse directory

```
GET /api/fs/browse
```

Returns the contents of a local directory.

**Query parameters:**

| Parameter | Description |
| --- | --- |
| `path` | Directory path (URL-encoded). Omit for the configured root. |

**Response:**

```json
{
  "success": true,
  "path": "/data/input",
  "parent": "/data",
  "items": [
    { "name": "output.xml", "path": "/data/input/output.xml", "type": "file", "size": 48320 },
    { "name": "archive", "path": "/data/input/archive", "type": "dir" }
  ]
}
```

### Read file

```
GET /api/fs/read?path={path}
```

Returns the text content of a file (used by the XSL Editor and XML Viewer).

**Response:**

```json
{
  "success": true,
  "path": "/opt/nomaubl/xsl/vrc_pro.xsl",
  "content": "<?xml version=\"1.0\"?>..."
}
```

### Write file

```
PUT /api/fs/write
Content-Type: application/json
```

Writes text content to a file (used by the XSL Editor to save changes).

**Body:**

```json
{
  "path": "/opt/nomaubl/xsl/vrc_pro.xsl",
  "content": "<?xml version=\"1.0\"?>..."
}
```

### Copy file

```
POST /api/fs/copy
Content-Type: application/json
```

Copies a file to a new location.

**Body:**

```json
{
  "source": "/opt/nomaubl/xsl/vrc_pro.xsl",
  "dest": "/opt/nomaubl/xsl/vrc_pro_backup.xsl"
}
```

### Upload file

```
POST /api/upload?template={template}&filename={filename}
Content-Type: application/octet-stream

<binary file content>
```

Uploads a file (e.g. JDE XML spool) to the configured input directory for the given template.

**Query parameters:**

| Parameter | Description |
| --- | --- |
| `template` | Document template name (determines the target directory) |
| `filename` | File name to save as |

**Response:**

```json
{ "success": true, "file": "/data/input/output.xml" }
```

---

## Integration Errors

### List integration errors

```
GET /api/integration-errors
```

Returns validation errors from `F564236` across all invoices, paginated.

**Query parameters:**

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `page` | integer | `1` | Page number |
| `pageSize` | integer | `50` | Records per page |
| `search` | string | — | Search by document number, rule, or message |
| `level` | string | — | Filter by severity: `FATAL`, `ERROR`, `WARNING`, `INFO` |
| `sortBy` | string | — | Sort column |
| `sortDir` | `asc` \| `desc` | — | Sort direction |

**Response:**

```json
{
  "errors": [
    {
      "doc": "123456",
      "dct": "RI",
      "kco": "001",
      "seqn": 1,
      "level": "ERROR",
      "source": "CIUS-FR",
      "rule": "BR-FR-01",
      "message": "Le SIRET du fournisseur est obligatoire"
    }
  ],
  "total": 8
}
```

---

## Directory

### Check PPF directory

```
POST /api/check-directory
Content-Type: application/json
```

Looks up a company identifier in the PPF (Portail Public de Facturation) directory via the `e-directory` template credentials.

**Body** (one of):

```json
{ "siret": "12345678901234" }
{ "siren": "123456789" }
{ "identifier": "0225:123456789" }
```

**Response:**

```json
{ "found": true, "message": "Recipient is reachable on a certified platform" }
{ "found": false, "message": "Recipient not registered" }
{ "error": "Directory API unreachable" }
```

### INSEE company search

```
POST /api/insee-search
Content-Type: application/json
```

Searches the French company registry (INSEE Sirene API) for company information.

**Body:**

```json
{ "q": "Acme" }
```

**Response:**

```json
{
  "results": [...],
  "total_results": 42
}
```

---

## XSL

### Install XSL templates

```
POST /api/xsl/install
Content-Type: application/json
```

Copies bundled XSL base templates from the JAR to a target directory, for use as a starting point for new stylesheets.

**Body:**

```json
{ "targetDir": "/opt/nomaubl/xsl" }
```

**Response:**

```json
{
  "success": true,
  "targetDir": "/opt/nomaubl/xsl",
  "installed": ["base-invoice.xsl", "base-credit-note.xsl"]
}
```

---

## SQL Queries

### Get saved queries

```
GET /api/queries
```

Returns the list of saved SQL queries used in the web interface (configurable custom queries for reporting/debugging).

**Response:**

```json
{
  "queries": [
    {
      "key": "pending_invoices",
      "label": "Pending Invoices",
      "description": "All invoices in status 9906",
      "sql": "SELECT * FROM CRPDTA.F564231 WHERE K74RSCD = '9906'"
    }
  ]
}
```

### Update saved queries

```
PUT /api/queries
Content-Type: application/json
```

Saves or updates the set of custom SQL queries.

**Body:**

```json
{
  "queries": {
    "pending_invoices": "SELECT * FROM CRPDTA.F564231 WHERE K74RSCD = '9906'"
  }
}
```

---

## Connectors

The connector system allows calling arbitrary external REST APIs configured in a template, without writing code.

### List connector endpoints

```
GET /api/connectors?name={templateName}
```

Returns the API endpoints defined in the connector template.

**Response:**

```json
{
  "success": true,
  "endpoints": [
    {
      "name": "get_status",
      "label": "Get Invoice Status",
      "url": "https://api.platform.fr/api/v1/invoices/{id}",
      "method": "GET",
      "headers": "Authorization: Bearer {token}",
      "body": "",
      "responseField": "status",
      "description": "Returns the current status of an invoice",
      "params": "id|Invoice ID|"
    }
  ]
}
```

### Execute a connector endpoint

```
POST /api/connectors?name={templateName}&endpoint={endpointName}
Content-Type: application/json
```

Calls the specified endpoint with the provided parameter values.

**Body:**

```json
{ "params": { "id": "INV-2025-001" } }
```

**Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "requestUrl": "https://api.platform.fr/api/v1/invoices/INV-2025-001",
  "body": "{\"status\": \"deposited\"}",
  "extractedValue": "deposited"
}
```

---

## Email

### Send email

```
POST /api/email
Content-Type: application/json
```

Sends an email notification, optionally attaching a reference to an invoice.

**Body:**

```json
{
  "to": "recipient@company.fr",
  "cc": "copy@company.fr",
  "subject": "Invoice INV-2025-001",
  "body": "Please find the invoice attached.",
  "invoiceId": "123456-RI-001"
}
```

---

## AI Assistant

### AI chat (streaming)

```
POST /api/ai/chat
Content-Type: application/json
```

Sends a chat message to the AI assistant. Returns a **Server-Sent Events (SSE)** stream of tokens for real-time display.

**Body:**

```json
{
  "messages": [
    { "role": "user", "content": "How do I configure the e-invoicing template?" }
  ],
  "model": "claude-sonnet-4-6",
  "context": "nomaubl-configuration"
}
```

**Response:** `text/event-stream` — each SSE event contains a token chunk:

```
data: {"token": "To configure"}
data: {"token": " the e-invoicing"}
data: {"token": " template..."}
data: [DONE]
```
