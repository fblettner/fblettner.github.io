---
title: API Connectors
description: "Define generic REST API connectors used by NomaUBL to talk to a Plateforme Agréée, a source ERP (JD Edwards AIS, SAP, NetSuite, custom) or any HTTP service: connection, authentication, endpoints catalogue, and built-in test runner."
keywords: [NomaUBL, API connectors, REST, OAuth2, OAUTH2, Bearer, API key, Basic auth, JD Edwards AIS, AIS, SAP, NetSuite, integration, endpoints, placeholders, Plateforme Agréée]
---

# API Connectors

The **API Connectors** editor is where REST API integrations are declared. A connector is a reusable **"talks to one system" definition** — a base URL, an authentication strategy and a list of endpoints — that the rest of NomaUBL references by name.

Connectors are used by the [Action Bindings](../management/actions.md) page to wire a regulatory seller action to a remote API call, by [Notification Rules](../management/notification-rules.md), and by any other NomaUBL feature that needs to invoke an HTTP endpoint. Typical targets are:

- A **Plateforme Agréée** (PA) REST API.
- A **source ERP** action API — for example **JD Edwards AIS** to register a payment, **SAP BAPI**, **NetSuite RESTlets**, a custom ERP webhook.
- Any third-party HTTP service involved in the e-invoicing pipeline.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

:::info[Refreshed in 2026.05.9]
Two additions on this page:

- **New Webhooks tab** — configure how the PA pushes status updates back to NomaUBL. Requests are HMAC-signed with a shared secret and POSTed to `/api/webhook/{connector}/status`; the verifier dedupes at-least-once retries on the payload's event id and applies the resolved status to the matching invoice. The tab also exposes JSON path overrides for the invoice id, status and event id fields, plus a status map from the PA's vocabulary to the logical `success` / `pending` / `failed` set.
- **Per-endpoint Content-Type** — endpoints can now declare `application/json` *(default)* or `multipart/form-data`. The multipart builder turns the body into a list of parts (`name=value`, `file=@{{filePath}};filename=…;contentType=…`), so api-connector endpoints can drive PAs that expect a `multipart/form-data` invoice upload (e.g. IOPOLE).

`ImportStatusHandler` was also relaxed — non-`failed` / non-`pending` statuses are treated as success, so vocabularies like IOPOLE's `EMITTED` / `RECEIVED` work without per-PA config.
:::

The editor has **five tabs**:

1. **Connection** — base URL, timeout, TLS, default headers.
2. **Authentication** — None / Basic / Bearer / API Key / OAuth2 (with conditional fields per scheme).
3. **Endpoints** — catalogue of HTTP endpoints exposed by the connector, with per-endpoint Content-Type.
4. **Webhooks** — inbound webhook URL, shared secret, JSON path overrides and status map for PA-pushed status updates.
5. **Test** — built-in runner to call an endpoint with custom parameters and inspect the response.

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
| **Endpoint path** | Path to the token endpoint (e.g. `/v7.3/tokenrequest` for JD Edwards AIS, `/oauth2/token` for an OAuth2 client_credentials flow). Combined with **Base URL**. |
| **Token field** | Dot-notation JSON path used to extract the token from the response (e.g. `userInfo.token` for JD Edwards AIS). **Leave empty** to auto-detect — the runtime tries `access_token` first then `token`, which covers the standard OAuth2 client_credentials response shape without configuration. |
| **Token TTL (minutes)** | How long the token is cached before a new one is requested. Default `55` minutes. |
| **Body Content-Type** *(2026.05.8)* | `application/json` *(default)* or `application/x-www-form-urlencoded`. The form variant emits the token request body as URL-encoded pairs, which is what the standard OAuth2 `client_credentials` flow expects. |
| **Body template** | Custom request body, with `{{username}}` / `{{password}}` placeholders. **Leave empty** to use sensible defaults: JSON mode emits the JD Edwards AIS payload (`{ username, password, deviceName }`); form mode emits `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}`. |
| **Token request headers** *(2026.05.8)* | Optional. Semicolon-separated `Key:Value` pairs sent **only on the token request** — for PAs that require a tenant-id header on the auth call itself. Example: `customer-id:CUST123;X-Tenant:acme`. |

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
| **Content-Type** *(2026.05.9)* | `application/json` *(default)* or `multipart/form-data`. The multipart variant turns the body into a list of parts — see *Multipart bodies* below. |
| **Extra headers** | Semicolon-separated `Key:Value` pairs added to (or overriding) the connector's default headers (e.g. `X-Custom:value;Authorization:Bearer {{token}}`). |
| **Body** | Request body — a JSON template with `{{param}}` placeholders. The **Format JSON** button pretty-prints the value. For `multipart/form-data`, the body is parsed as one part per line (`name=value` or `file=@{{filePath}};filename=…;contentType=…`). |
| **Query params** | Query string template with `{{param}}` placeholders (e.g. `pageSize={{pageSize}}&page={{page}}`). |
| **Response field** | Optional dot-notation path (e.g. `data.items`) extracting a sub-tree of the response — useful when the caller is only interested in part of the payload. |
| **Description** | Free-text description shown in dropdowns and in the editor header. |

#### Multipart bodies

When **Content-Type** is set to `multipart/form-data`, the body is no longer a single JSON document — it is parsed as a **list of parts**, one per non-empty line. Each part is either a literal value or a file reference:

| Form | Example | Meaning |
|---|---|---|
| `name=value` | `comment=invoice {{fedoc}}` | Adds a text field named `comment` with the resolved value. |
| `file=@{{filePath}};filename=invoice.xml;contentType=application/xml` | *(same)* | Attaches a file part named `file`. `{{filePath}}` resolves to the path on disk; `filename` and `contentType` are the headers shipped on that part. |

Typical use case: a PA that takes the UBL invoice as a `multipart/form-data` upload with the XML in a `file` part (IOPOLE's invoice-import endpoint follows this pattern).

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

## Tab 4 — Webhooks

Configure how the PA pushes **inbound status updates** back to NomaUBL. The tab assumes the request shape NomaUBL implements: HTTP `POST` with a JSON body, an HMAC-SHA256 signature on a canonical `timestamp\nMETHOD\npath\nbodyChecksum`, and a per-event id that lets the verifier dedupe at-least-once retries.

### Inbound Webhook

| Field | Description |
|---|---|
| **URL** *(read-only)* | The endpoint the PA must POST to: `https://<host>/api/webhook/{connector}/status`. Copy it into the PA's webhook settings as-is. The route bypasses session auth — the HMAC signature is the only authentication. |

### HMAC Signature

| Field | Description |
|---|---|
| **Shared secret** | The same secret you paste on the PA side. Stored **encrypted at rest** (the `webhook.secret` property uses the `*Secret` suffix convention). Used to verify the `X-Signature` header — `HmacSHA256` over `timestamp + method + path + body checksum`. |

A request whose signature does not match the expected value is rejected with HTTP `401` (loud), so a wrong secret on either side surfaces immediately in the PA's webhook delivery dashboard. An unknown connector name returns `404`.

### Payload Field Paths

JSON-path overrides that tell the verifier where to read the invoice id, the status string and the event id inside the PA's payload. Dot notation — same syntax as endpoint response mappings (`data.0.invoiceId`).

| Field | Default | Description |
|---|---|---|
| **Invoice id field** | `invoiceId` | Path to the PA's invoice identifier — the UUID stored at send time in `F564230.FEUKIDSZ`. |
| **Status field** | `status.code` | Path to the PA's status string. |
| **Event id field** | `eventId` | Used to dedupe at-least-once retries. Falls back to `method+timestamp+body-hash` when the field is missing or empty. |

### Status Map

A semicolon-separated list of `paStatus:logical` pairs that translates the PA's vocabulary into NomaUBL's logical status set.

| Logical | Meaning |
|---|---|
| `success` | Resolves to the *Deposited* lifecycle status. |
| `pending` | Records a *Pending PA* event without overwriting the current status. |
| `failed` | Resolves to a *Rejected* status with the message extracted from the payload. |

Example: `RECEIVED:pending;DELIVERED:success;REJECTED:failed`. Unmapped statuses are recorded as a generic *Received* lifecycle event without overwriting the current status — the inbound is logged but does not alter the invoice's state.

### How the route behaves

| Situation | HTTP response | Effect |
|---|---|---|
| Valid signature, known event id (replay) | `200 OK` | The replay is acknowledged; nothing else happens — the dedup cache absorbs it. |
| Valid signature, new event id | `200 OK` | The resolved transition is applied to the `F564230` row. |
| Bad signature | `401 Unauthorized` | The sender's monitoring lights up. |
| Unknown connector | `404 Not Found` | — |
| Internal error (DB down, etc.) | `2xx` | NomaUBL returns 2xx to stop the sender from retrying indefinitely; the error is logged on this side. |

A JVM restart drops the in-memory dedup cache (10 000 entries × 1 h TTL) — replaying the same event after a restart re-applies the transition, which is described in clear: applying the same lifecycle transition a second time produces no observable change. The cache exists only to cut chatter, not for correctness.

---

## Tab 5 — Test

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
