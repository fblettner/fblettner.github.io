---
title: E-Invoicing
description: "Configure how NomaUBL connects to a Plateforme Agréée (PA), validates UBL documents, exchanges via REST API or SFTP, and binds regulatory seller actions to PA endpoints."
keywords: [NomaUBL, e-invoicing, Plateforme Agréée, PA, OAUTH2, REST API, SFTP, UBL validation, French e-invoicing, réforme facturation électronique, regulatory actions, lifecycle statuses, JD Edwards, SAP, NetSuite]
---

# E-Invoicing

The **E-Invoicing** editor is where you tell NomaUBL **how to talk to a Plateforme Agréée (PA)** — the certified platform that receives, validates and dispatches your e-invoices to the French e-invoicing public infrastructure. It also defines how UBL documents are validated locally before they leave the system, and how regulatory seller actions are mapped to API calls on the PA.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — as long as the source has been mapped to UBL.

The editor has **five tabs**:

1. **UBL Validation** — directory of XSL transforms used to convert the source XML into UBL.
2. **PA Connection** — transport (API or SFTP), credentials, polling.
3. **PA Endpoints** — REST endpoint catalog used to talk to the PA.
4. **Settings** — mock / testing controls.
5. **Actions** — bind regulatory seller actions to API endpoints (PA *or* source system).

---

## Tab 1 — UBL Validation

This tab only configures the **directory of XSL files** used to **transform the source XML into UBL**. The actual UBL conformity check is performed by **standard schematrons**, which are documented separately (see *UBL Tools → Validate*).

### UBL XSLT Transforms

| Field | Description |
|---|---|
| **XSLT Directory** | Directory containing the `.xsl` transform files used to convert the source XML into UBL. The placeholder `%APP_HOME%` expands to the NomaUBL install root. |

---

## Tab 2 — PA Connection

### Connection (always shown)

| Field | Values | Description |
|---|---|---|
| **Mode** | `API` / `FTP` / *(none)* | Transport used to send invoices. `API` = REST exchange; `FTP` = SFTP file drop; *(none)* = skip the send step entirely. |
| **Timeout (ms)** | number | HTTP / SFTP request timeout in milliseconds. Default `30000` (30 s). |
| **SSL Verify** | `true` / `false` | Whether to validate the PA's TLS certificate. Set to `false` only in non-production environments using self-signed certificates. |

The fields below appear depending on the chosen **Mode**.

### When Mode = `API`

#### API Server

| Field | Description |
|---|---|
| **Base URL** | Root URL of the PA REST API (e.g. `https://api.plateformeagree.fr`). |

#### Authentication

| Field | Description |
|---|---|
| **Auth type** | Fixed to `OAUTH2` for PA APIs — cannot be changed. |
| **Token Endpoint** | Path used to obtain an OAUTH2 token (e.g. `/api/login_check`). Combined with **Base URL**. |
| **Username** | Account name issued by the PA. |
| **Password** | Account password. |

#### Status Retrieval

| Field | Description |
|---|---|
| **Page size** | Number of statuses fetched per page when polling the PA (default `100`). |
| **Last retrieved at** | ISO datetime of the most recent successful status retrieval (e.g. `2025-01-01T00:00:00Z`). Updated automatically after each retrieval run; manual edits act as a starting point. |

#### Background Scheduling (serve mode)

These intervals only apply when NomaUBL is running in **serve mode** (long-running server). Changes require a server restart to take effect.

| Field | Description |
|---|---|
| **Import poll interval (min)** | Minutes between automatic import-status polls for pending invoices (status `9906`). `0` = disabled. |
| **Status retrieval interval (min)** | Minutes between automatic lifecycle-status retrievals from the PA. `0` = disabled. |

### When Mode = `FTP`

| Field | Description |
|---|---|
| **Host** | SFTP host (e.g. `ftp.plateformeagree.fr`). |
| **Port** | SFTP port. Default `22`. |
| **User** | SFTP user. |
| **Password** | SFTP password. |
| **Outbound Dir** | Remote directory where NomaUBL drops UBL files for the PA (e.g. `/out/invoices/`). |
| **Inbound Dir** | Remote directory where the PA writes status updates that NomaUBL pulls back (e.g. `/in/status/`). |

---

## Tab 3 — PA Endpoints

A catalog of REST endpoints used by NomaUBL to interact with the PA. Each entry is collapsible — click the row to expand or collapse.

You can use **`{{param}}` placeholders** in URL paths, query parameters, headers and bodies; values are injected at call time from the document context or from the action parameters defined in Tab 5.

### Predefined endpoints

NomaUBL ships with the following endpoints already configured for a typical PA REST integration. Edit them to match your PA's exact paths or add your own:

| Method | Name | Purpose |
|---|---|---|
| `POST` | **import** | Submit a UBL invoice to the PA. |
| `GET` | **import-status** | Poll the import status of a previously submitted invoice (e.g. waiting for the PA to confirm reception). |
| `GET` | **invoice-statuses** | Retrieve the lifecycle statuses of one or several invoices already in the PA. |
| `GET` | **resolve-invoice** | Look up an invoice on the PA by its identifier — useful for reconciliation. |
| `POST` | **post-status** | Push a seller status update to the PA (used by the regulatory actions in Tab 5). |

#### Example — `POST import`

Concrete configuration shipped by default for the `import` endpoint:

| Field | Value |
|---|---|
| **Name** | `import` |
| **Description** | Send invoice to PA |
| **Method** | `POST` |
| **URL path** | `/api/v1/sale/invoices/import` |
| **Query params** | `pageSize={{pageSize}}&page={{page}}` |
| **Headers** | `Content-Type:application/json` |

**Body**

```json
{
  "format": "xml_ubl",
  "content": "{{content}}",
  "postActions": []
}
```

`{{content}}` is replaced at call time with the UBL document payload (typically base64-encoded XML).

**Response mappings**

| Logical name | JSON path |
|---|---|
| `uuid` | `uuid` |
| `status` | `status` |

After a successful submission the PA returns a JSON body containing `uuid` and `status`; NomaUBL extracts both and stores them on the invoice record so downstream actions (status polling, resends, regulatory actions) can reference them.

### Per-endpoint fields

| Field | Description |
|---|---|
| **Name** | Logical identifier used internally and referenced from the Actions tab (e.g. `import`, `getStatus`). |
| **Description** | Human-readable label shown in the editor (e.g. *Send invoice to PA*). |
| **Method** | HTTP method (`GET` / `POST` / `PUT` / `DELETE` / `PATCH`). |
| **URL path** | Endpoint path appended to the connection's **Base URL** (e.g. `/api/v1/sale/invoices/import`). |
| **Query params** | Query string template (e.g. `pageSize={{pageSize}}&page={{page}}`). |
| **Headers** | HTTP headers, one per line or separated by line breaks (e.g. `Content-Type:application/json`). |
| **Body** | Request body — appears only for `POST` / `PUT` / `PATCH`. JSON bodies can be auto-formatted with the **Format JSON** button. |
| **Response Mappings** | Map **logical names** to **JSON paths** in the response. For example, mapping `uuid` → `data.uuid` lets NomaUBL extract the PA-assigned UUID from the response and store it on the invoice. |

Use the **Add endpoint** button at the bottom of the list to add new entries; remove an endpoint with the trash icon on its row.

---

## Tab 4 — Settings

### Mock / Testing

Controls a built-in PA mock useful for development and CI.

| Field | Values | Description |
|---|---|---|
| **Use Mock** | `Y` / `N` | When `Y`, calls go to the in-process mock instead of the configured PA. |
| **Mock Behavior** | `ALWAYS_SUCCESS` / `ALWAYS_FAILED` / `ALTERNATING` / `TOKEN_EXPIRED` / `RANDOM` | Behaviour the mock should simulate: always succeed, always fail, alternate success / failure, simulate an expired OAUTH2 token, or random outcomes. |

---

## Tab 5 — Actions

Bind **regulatory seller actions** to API connector endpoints. These actions appear in the **invoice detail modal** based on the document's lifecycle status, as required by French e-invoicing regulation. Unbound actions are shown as disabled in the UI.

The endpoint can target **either the PA or a source-system API** — for example, *Cancel Accounting* typically calls the source ERP's accounting cancellation endpoint, not the PA. Connectors used here are defined under *Configuration → API Connectors* (documented separately).

### Available actions

| Action | Triggered at status |
|---|---|
| **Payment Received** | `205` |
| **Credit Note** | `206` / `207` |
| **Corrected Invoice** | `206` / `207` |
| **Send Completed** | `208` |
| **Cancel Accounting** | `210` / `213` |
| **New Invoice** | `213` |
| **Resend to PA** | `9904` / `9907` |

### Configuring a binding

For each action you want to enable, click **Add Binding** and fill in:

| Field | Description |
|---|---|
| **Action** | The regulatory action being bound. Each action can be bound only once. |
| **Connector** | The API Connector template providing the endpoint — **PA connector or source-system connector** (defined under *Configuration → API Connectors*). |
| **Endpoint** | The endpoint name within the chosen connector (the dropdown lists endpoints declared on it). |
| **Parameters** | Per-endpoint parameter values. Defaults from the endpoint definition are pre-filled when you choose the endpoint. |

Parameter values can be **literal** (e.g. `JDE`) or **placeholders** that pull values from the current invoice. Available placeholders:

```
{{fedoc}}          {{fedct}}        {{kco}}            {{ublNumber}}
{{statusCode}}     {{customerName}} {{totalHT}}        {{totalTTC}}
{{currency}}       {{amountDue}}    {{invoiceType}}    {{orderRef}}
{{contractRef}}
```

If an endpoint declares no parameters, you'll see a single free-form **Params** input where you can enter `key={{field}};key2={{field2}}` pairs by hand.

### Worked example — Payment Received → JDE accounting

A typical binding when the source system is JD Edwards: on `Payment Received` (status `205`), call a JDE AIS report to register the payment in the source ERP.

| Field | Value |
|---|---|
| **Action** | `Payment Received (status 205)` |
| **Connector** | `jde-ais` *(JD Edwards AIS connector defined under Configuration → API Connectors)* |
| **Endpoint** | `reportExecute_R0010P — Execute Report R0010P` |

**Parameters**

| Parameter | Value |
|---|---|
| **Report Name** | `R0010P` |
| **Report Version** | `ZJDE0001` |
| **Company Code** | `{{fedct}}` |

The two first parameters are literal (the JDE report ID and version are constant), while `Company Code` uses the `{{fedct}}` placeholder to inject the company of the current invoice. Replace the connector / endpoint with whatever your source ERP exposes — the same mechanic works for SAP BAPIs, NetSuite RESTlets, or a custom ERP webhook.

---

## Tips & best practices

- **Start with `paMode=` (none)** when first wiring up a new document type — you can build the UBL pipeline end-to-end before involving the PA.
- **Test against the mock** (Tab 4) before pointing at the real PA. Use `ALTERNATING` to exercise both happy-path and error-path code in the invoice detail UI.
- **Define endpoints once, reuse from Actions.** Don't duplicate URLs across actions — bind each action to the corresponding endpoint name.
- **Server-restart-required intervals**: changing `Import poll interval` or `Status retrieval interval` only takes effect after restarting the NomaUBL server process.
- **Response Mappings are your contract with the PA.** If the PA changes a field path in its response, update the mapping rather than parsing the response in calling code.
