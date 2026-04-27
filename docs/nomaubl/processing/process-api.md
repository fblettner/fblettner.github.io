---
title: Process API
description: "Execute an API connector endpoint defined in Configuration → API Connectors — pick a connector and an endpoint, override parameters at runtime, inspect the HTTP response and any extracted value."
keywords: [NomaUBL, processing, API, connector, endpoint, REST, HTTP, parameters, placeholder, extracted value, JD Edwards, SAP, NetSuite, custom ERP]
---

# Process API

The **Process API** screen runs an outbound HTTP call against an **API connector endpoint** defined in *Configuration → API Connectors*. It is a runtime tester / executor: pick a connector, pick one of its endpoints, supply or override parameter values, and inspect the response.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — since API connectors are generic outbound calls. Use it to manually trigger an integration step, debug a connector's configuration before relying on it in a batch flow, or replay a single endpoint with different parameter values.

The connector definition (URL template, HTTP method, headers, default parameters, response extraction rule) lives in *Configuration → API Connectors* — this page does not edit any of that, only executes against it.

---

## API Connector

| Field | Description |
|---|---|
| **Connector** | Dropdown listing every template with `type = api-connector` (see *Configuration → API Connectors*). Selecting a connector loads its endpoints. |
| **Endpoint** | Dropdown listing the endpoints declared on the chosen connector. Each option shows the endpoint name and, if defined, a human-readable label. Disabled until a connector is selected. |

Selecting an endpoint also pre-fills the **Parameters** section with the endpoint's declared parameters and their default values.

---

## Parameters

The parameters table lets you set or override the runtime values that fill the connector's URL / body / header placeholders (the `{{placeholder}}` tokens defined in the endpoint configuration).

| Column | Description |
|---|---|
| **Key** | Parameter name. Must match a `{{placeholder}}` defined in the endpoint's URL or body template. |
| **Value** | Runtime value. Substituted into the placeholder before the call is sent. |

Each row has a trash button to remove it. The **Add param** button at the bottom appends an empty row. Empty key rows are ignored at execution time.

When an endpoint is selected, the table is pre-populated from the endpoint's parameter definition (`name|Label|defaultValue;...` pairs declared in the connector). Edit the values, add new rows for ad-hoc placeholders, or remove rows that should not be sent.

---

## Result

Click **Execute** to run the call. The button stays disabled until both a connector and an endpoint are chosen.

The result section displays:

| Element | Description |
|---|---|
| **HTTP status** | The HTTP status code returned by the endpoint, with `✓` (green) on success or `✗` (red) on failure. |
| **Extracted value** | If the connector defines a response-extraction rule (e.g. JSONPath / XPath), the extracted scalar appears next to the status. Useful when chaining connectors — the extracted value can be referenced from a follow-up call. |
| **URL** | The fully-resolved request URL (placeholders substituted, query string included). Read-only. |
| **Body** | The response body. JSON responses are pretty-printed automatically; non-JSON bodies are shown as-is. |

---

## Tips & best practices

- **Use this page to debug a connector before relying on it.** Verify the URL substitution, the response shape and any extraction rule before wiring the connector into a batch flow.
- **The placeholder syntax is `{{name}}`.** Double curly braces in the endpoint's URL / body templates mark substitution points. The keys in the Parameters table must match exactly — case-sensitive, no spaces.
- **An empty value is sent as an empty string, not as a missing parameter.** To skip a parameter entirely, delete the row.
- **The extracted value depends on the connector's extraction rule.** No extraction rule → no extracted value, regardless of the response. Configure the rule on the connector itself (*Configuration → API Connectors*).
- **Server-side credentials are pulled from the connector template.** This page never carries auth credentials; the connector template holds them and the server-side execution attaches the right headers.
