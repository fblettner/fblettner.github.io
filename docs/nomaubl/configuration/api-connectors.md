---
title: API Connectors
description: "Define generic REST API connectors used by NomaUBL to talk to a Plateforme Agréée, a source ERP (JD Edwards AIS, SAP, NetSuite, custom) or any HTTP service: connection, authentication, endpoints catalogue, and built-in test runner."
keywords: [NomaUBL, API connectors, REST, OAuth2, OAUTH2, Bearer, API key, Basic auth, JD Edwards AIS, AIS, SAP, NetSuite, integration, endpoints, placeholders, Plateforme Agréée]
---

# API Connectors

The **API Connectors** editor is where REST API integrations are declared. A connector is a reusable **"talks to one system" definition** — a base URL, an authentication strategy and a list of endpoints — that the rest of NomaUBL references by name.

Connectors are used by the **E-Invoicing → Actions** tab to bind a regulatory seller action to a remote API call, and by any other NomaUBL feature that needs to invoke an HTTP endpoint. Typical targets are:

- A **Plateforme Agréée** (PA) REST API.
- A **source ERP** action API — for example **JD Edwards AIS** to register a payment, **SAP BAPI**, **NetSuite RESTlets**, a custom ERP webhook.
- Any third-party HTTP service involved in the e-invoicing pipeline.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

The editor has **four tabs**:

1. **Connection** — base URL, timeout, TLS, default headers.
2. **Authentication** — None / Basic / Bearer / API Key / OAuth2 (with conditional fields per scheme).
3. **Endpoints** — catalogue of HTTP endpoints exposed by the connector.
4. **Test** — built-in runner to call an endpoint with custom parameters and inspect the response.

---

## Tab 1 — Connection

### Connection

| Field | Description |
|---|---|
| **Base URL** | Root URL of the target API (e.g. `https://api.example.com:9300`). All endpoint paths are appended to this URL. |
| **Timeout (ms)** | HTTP request timeout in milliseconds. Default `30000` (30 s). |
| **SSL Verify** | `true` / `false` — whether to validate the server's TLS certificate. Set to `false` only in non-production environments using self-signed certificates. |

### Default Headers

| Field | Description |
|---|---|
| **Headers** | Semicolon-separated `Key:Value` pairs applied to **every** endpoint of this connector (e.g. `Content-Type:application/json;Accept:application/json`). Per-endpoint *Extra headers* can override these on a case-by-case basis. |

---

## Tab 2 — Authentication

### Auth Type

| Field | Values | Description |
|---|---|---|
| **Method** | `NONE` / `BASIC` / `BEARER` / `API_KEY` / `OAUTH2` | Authentication scheme used for every endpoint. The fields below appear conditionally based on this choice. |

### When Method = `BASIC`

| Field | Description |
|---|---|
| **Username** | HTTP Basic auth username. |
| **Password** | HTTP Basic auth password. |

### When Method = `BEARER`

| Field | Description |
|---|---|
| **Token / Key** | Static bearer token sent as `Authorization: Bearer <token>` on every request. |

### When Method = `API_KEY`

| Field | Description |
|---|---|
| **Header Name** | HTTP header carrying the API key (e.g. `X-Api-Key`). |
| **Token / Key** | The API key value. |

### When Method = `OAUTH2`

This is the typical choice for **JD Edwards AIS** and most modern PA APIs — NomaUBL fetches a token from a dedicated endpoint and reuses it until it expires.

#### Credentials

| Field | Description |
|---|---|
| **Username** | Account username sent in the token request. |
| **Password** | Account password sent in the token request. |

#### Token Endpoint

| Field | Description |
|---|---|
| **Endpoint path** | Path to the token endpoint (e.g. `/v7.3/tokenrequest` for JD Edwards AIS). Combined with **Base URL**. |
| **Token field** | Dot-notation JSON path used to extract the token from the response (e.g. `userInfo.token` for JD Edwards AIS). |
| **Token TTL (minutes)** | How long the token is cached before a new one is requested. Default `55` minutes. |
| **Body template** | Custom JSON body for the token request, with `{{username}}` / `{{password}}` placeholders. **Leave empty** to use the default `username` / `password` / `deviceName` payload. |

---

## Tab 3 — Endpoints

The catalogue of HTTP endpoints reachable through this connector. Each entry is a collapsible card; click the header to expand or collapse.

You can use **`{{param}}` placeholders** in URLs, headers, query parameters and bodies. Three placeholders are always available out of the box:

- `{{token}}` — the OAUTH2 token (when `OAUTH2` auth is configured)
- `{{username}}` — the configured Username
- `{{password}}` — the configured Password

All other placeholders must be **declared in the endpoint's Parameters section** (see below).

### Per-endpoint fields

| Field | Description |
|---|---|
| **Name** | Logical identifier referenced from other parts of NomaUBL (e.g. `getOrderLines`, `reportExecute_R0010P`). |
| **Label** | Human-readable label shown in the editor and in dropdowns when a user picks an endpoint (e.g. `Get Order Lines`). |
| **Method** | HTTP method (`GET` / `POST` / `PUT` / `DELETE` / `PATCH`). |
| **URL path** | Endpoint path appended to the connector's **Base URL** (e.g. `/v7.3/orchestrator/{{name}}`). |
| **Extra headers** | Semicolon-separated `Key:Value` pairs added to (or overriding) the connector's default headers (e.g. `X-Custom:value;Authorization:Bearer {{token}}`). |
| **Body** | Request body — a JSON template with `{{param}}` placeholders. The **Format JSON** button pretty-prints the value. |
| **Query params** | Query string template with `{{param}}` placeholders (e.g. `pageSize={{pageSize}}&page={{page}}`). |
| **Response field** | Optional dot-notation path (e.g. `data.items`) extracting a sub-tree of the response — useful when the caller is only interested in part of the payload. |
| **Description** | Free-text description shown in dropdowns and in the editor header. |

### Response Mappings

A list of **logical name → JSON path** pairs that translate fields in the response into stable names usable by NomaUBL:

- **Logical name**: the stable name NomaUBL stores or references (e.g. `uuid`, `status`).
- **JSON path**: dot-notation path inside the response (e.g. `data.uuid`).

If the upstream API renames a field, update only the mapping — application code keeps using the logical name.

### Parameters

Declare the **`{{placeholder}}` variables** the endpoint expects, so that consumers (e.g. the *Actions* tab in *E-Invoicing*) get a guided form when binding to this endpoint.

| Sub-field | Description |
|---|---|
| **Name** | Placeholder name as used in URL / headers / body (e.g. `reportName`). |
| **Label** | Human-readable label shown to whoever supplies the value (e.g. `Report Name`). |
| **Default value** | Pre-filled default applied when the consumer does not override it (e.g. `R0010P`). |

### Worked example — JD Edwards AIS report execution

A typical endpoint definition for executing a JDE BSSV report through the AIS Server.

#### Endpoint

| Field | Value |
|---|---|
| **Name** | `reportExecute_R0010P` |
| **Label** | `Execute Report R0010P` |
| **Method** | `POST` |
| **URL path** | `/v2/report/execute` |
| **Extra headers** | `X-Custom:value;Authorization:Bearer {{token}}` |
| **Query params** | `pageSize={{pageSize}}&page={{page}}` |
| **Response field** | `data.items` |

#### Body

```json
{
  "reportName": "{{reportName}}",
  "reportVersion": "{{reportVersion}}",
  "dataSelection": {
    "criteria": [
      {
        "subject": {
          "view": "V0010D",
          "table": "F0010",
          "column": "CCCO"
        },
        "comparison": "EQUAL",
        "value": [
          {"content": "{{companyCode}}"}
        ]
      }
    ]
  }
}
```

The body is a JSON template; `{{reportName}}`, `{{reportVersion}}` and `{{companyCode}}` are substituted at call time with the values supplied by the consumer (or with the declared defaults when the consumer omits them).

#### Parameters

| Name | Label | Default value |
|---|---|---|
| `reportName` | Report Name | `R0010P` |
| `reportVersion` | Report Version | `ZJDE0001` |
| `companyCode` | Company Code | `00001` |

`reportName` and `reportVersion` are constants for this report and are pre-filled with sensible defaults; `companyCode` is the only parameter typically supplied at runtime — usually injected via the `{{fedct}}` placeholder when this endpoint is bound to a regulatory action in *E-Invoicing → Actions*.

---

## Tab 4 — Test

Built-in HTTP runner to call any endpoint of the connector with custom parameter values and inspect the result. Useful for validating an integration before binding it to a regulatory action or a scheduled job.

### Select Endpoint

| Field | Description |
|---|---|
| **Endpoint** | Dropdown listing the connector's defined endpoints. Selecting one **pre-fills the Parameters section** with the endpoint's declared parameters and their default values. |

### Parameters

A list of `key / value` rows used to **override or supply** `{{placeholder}}` values at runtime. Add or remove rows as needed.

### Result

| Element | Description |
|---|---|
| **Run** button | Triggers the HTTP call. Disabled while a previous call is in flight. |
| **Status line** | Shows `HTTP <code> ✓ / ✗`, plus the value extracted via *Response field* when applicable. |
| **Request URL** | The fully-resolved URL actually sent (placeholders substituted, query string built). |
| **Response body** | Raw response body, auto-formatted as JSON when possible. |

### Worked example — testing `reportExecute_R0010P`

Continuing the JDE AIS endpoint defined in Tab 3, here is how the Test tab looks after selecting it on the `jde-ais` connector.

| Section | Value |
|---|---|
| **Endpoint** | `reportExecute_R0010P — Execute Report R0010P` |
| **Parameters** *(auto-pre-filled from the endpoint's declared defaults)* | `reportName = R0010P`<br/>`reportVersion = ZJDE0001`<br/>`companyCode = 00001` |

Selecting the endpoint **automatically populated the three parameter rows** with their declared defaults — no need to remember the placeholder names. Override any value (typically `companyCode` to point at a real JDE company), then hit **Run**. The Result section will show the resolved Request URL, the HTTP status and the response body, with the value extracted via *Response field* (`data.items` for this endpoint) when applicable.

This is also why investing time in **declaring parameters with sensible defaults** in Tab 3 pays off: the Test tab — and any consumer that picks the endpoint elsewhere — becomes self-documenting.

---

## Tips & best practices

- **One connector per system.** Avoid mixing endpoints of different external systems in the same connector — auth, headers and base URL are connector-wide.
- **Name endpoints by intent.** `reportExecute_R0010P` is more useful than `post1` because the *Actions* tab dropdown lists endpoints by name.
- **Declare every `{{placeholder}}` you reference.** Undeclared placeholders won't show up in the *Actions* tab parameter form, so consumers can't supply them.
- **Use `Default value` to lock down constant parameters.** For a JDE report execution where `reportName` and `reportVersion` never change, set their defaults — consumers only need to supply the truly variable values.
- **Test before binding.** Run the endpoint from Tab 4 with realistic parameter values before binding it to a regulatory action; this catches authentication, URL and payload issues early.
- **Mappings are your contract with upstream.** Map response fields to stable logical names so application code is shielded from upstream JSON path changes.
