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

## At a glance

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="paui-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="paui-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="paui-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#paui-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Process API</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="340" y="82" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="350" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">ppf-directory ▾</text>
  <text x="556" y="98" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINT</text>
  <rect x="618" y="82" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="628" y="98" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">lookupAddress ▾</text>

  <line x1="240" y1="120" x2="780" y2="120" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="144" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Parameters</text>

  <rect x="240" y="158" width="540" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="173" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">KEY · VALUE</text>

  <rect x="240" y="184" width="540" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="201" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">siret</text>
  <rect x="350" y="190" width="380" height="14" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="201" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">39239053100023</text>
  <text x="752" y="201" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="214" width="540" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="231" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">code_routage</text>
  <rect x="350" y="220" width="380" height="14" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="360" y="231" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">{`{{ recipient.routingCode }}`}</text>
  <text x="752" y="231" fill="#f87171" fontSize="11" textAnchor="middle">×</text>

  <rect x="240" y="248" width="120" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="300" y="264" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Add param</text>

  <rect x="640" y="248" width="140" height="28" rx="6" fill="url(#paui-g-blue)" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="710" y="266" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▶ Execute</text>

  <line x1="240" y1="288" x2="780" y2="288" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="312" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Result</text>

  <rect x="240" y="326" width="120" height="22" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="300" y="341" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">✓ HTTP 200</text>
  <text x="368" y="341" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXTRACTED</text>
  <rect x="440" y="326" width="340" height="22" rx="5" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.35)" strokeWidth="1"/>
  <text x="450" y="341" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">SIRET valid · PA: chorus-pro</text>

  <text x="240" y="368" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">URL</text>
  <rect x="280" y="358" width="500" height="20" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="290" y="372" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">GET /ppf/v1/lookup?siret=39239053100023&amp;code=…</text>

  <text x="240" y="394" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BODY</text>
  <rect x="240" y="402" width="540" height="32" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="417" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">{'{ "siret": "39239053100023", "status": "ACTIVE",'}</text>
  <text x="252" y="429" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">{'  "reachable": true, "plateforme": "chorus-pro" }'}</text>

  <rect x="20" y="82" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="97" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connector + endpoint</text>
  <text x="30" y="110" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">picks the call</text>
  <line x1="220" y1="98" x2="340" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>

  <rect x="820" y="184" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="199" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Runtime values</text>
  <text x="830" y="212" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fill placeholders</text>
  <line x1="820" y1="200" x2="780" y2="198" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>

  <rect x="820" y="326" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Status + extraction</text>
  <text x="830" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">per connector rule</text>
  <line x1="820" y1="342" x2="780" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>

  <rect x="20" y="402" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="417" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Response body</text>
  <text x="30" y="430" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JSON pretty-printed</text>
  <line x1="220" y1="418" x2="240" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#paui-arrow)"/>
</svg>

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
