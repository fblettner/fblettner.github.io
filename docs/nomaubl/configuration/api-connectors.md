---
title: API Connectors
description: "Define generic REST API connectors used by NomaUBL to talk to a Plateforme Agréée, a source ERP (JD Edwards AIS, SAP, NetSuite, custom) or any HTTP service: an editor in five steps (connection, authentication, endpoints, webhooks, test), each endpoint edited in four parts (what it is, inputs, the call, the answer)."
keywords: [NomaUBL, API connectors, REST, OAuth2, OAUTH2, Bearer, API key, Basic auth, JD Edwards AIS, AIS, SAP, NetSuite, integration, endpoints, placeholders, Plateforme Agréée]
---

# API Connectors

The **API Connectors** editor is where REST API integrations are declared. A connector is a reusable **"talks to one system" definition** — a base URL, an authentication strategy and a list of endpoints — that the rest of NomaUBL references by name.

Connectors are used by the [Action Bindings](../management/actions.md) page to wire a regulatory seller action to a remote API call, by [Notification Rules](../management/notification-rules.md), and by any other NomaUBL feature that needs to invoke an HTTP endpoint. Typical targets are:

- A **Plateforme Agréée** (PA) REST API.
- A **source ERP** action API — for example **JD Edwards AIS** to register a payment, **SAP BAPI**, **NetSuite RESTlets**, a custom ERP webhook.
- Any third-party HTTP service involved in the e-invoicing pipeline.

This page applies to documents from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

The editor is laid out in **five steps**, shown as cards across the top. Each card gives the state of its step in a few words; a click opens its settings below the cards:

| Step | Card state | Settings |
|---|---|---|
| **Connection** | The base URL, or *No base URL* in red | Base URL, timeout, request limits, TLS, debug trace, default headers. |
| **Authentication** | The method (`OAUTH2`, `BASIC`…), or *None* | None / Basic / Bearer / API Key / OAuth2, with the fields of the chosen scheme, and an authentication test. |
| **Endpoints** | The number of endpoints (*8 endpoint(s)*) | The catalogue of HTTP endpoints of the connector; each endpoint is edited in four parts (what it is, inputs, the call, the answer). |
| **Webhooks** | *Signed* when a shared secret is set, *Not set* otherwise | Inbound webhook URL, shared secret, JSON paths and status map for status updates pushed by the PA. |
| **Test** | *Try an endpoint* | Built-in runner to call an endpoint with custom parameters and inspect the response. |

The Settings editors of NomaUBL are in English, the connector editor included.

---

## At a glance

<svg viewBox="0 0 1200 404" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="apic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="apic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="apic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="apic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="364" rx="14" fill="url(#apic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">pa-default</text>
  <text x="312" y="48" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Default Platform Agréée (PA) API connector — referenced by e-invoicing / e-reporting</text>
  <rect x="906" y="32" width="54" height="22" rx="5" fill="url(#apic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="933.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="220" y="62" width="760" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="232" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="240" y="79" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="248.0" y="90.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="262" y="90.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTION</text>
  <text x="241" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">https://pa.example.com</text>
  <line x1="367" y1="94.0" x2="379" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="382" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="390" y="79" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="398.0" y="90.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="412" y="90.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTICATION</text>
  <text x="391" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">OAUTH2</text>
  <line x1="517" y1="94.0" x2="529" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="532" y="72" width="134" height="44" rx="8" fill="rgba(50,215,75,0.14)" stroke="#4ade80" strokeWidth="1.3"/>
  <rect x="540" y="79" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="548.0" y="90.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">≡</text>
  <text x="562" y="90.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <text x="541" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">10 endpoint(s)</text>
  <line x1="667" y1="94.0" x2="679" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="682" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="690" y="79" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="698.0" y="90.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <text x="712" y="90.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <text x="691" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Not set</text>
  <line x1="817" y1="94.0" x2="829" y2="94.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apic-flow)"/>
  <rect x="832" y="72" width="134" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="840" y="79" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="848.0" y="90.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="862" y="90.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <text x="841" y="108" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Try an endpoint</text>
  <line x1="220" y1="126" x2="980" y2="126" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="148" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ENDPOINTS</text>
  <text x="240" y="164" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Use &#123;&#123;param&#125;&#125; placeholders in URL, headers, and body. Built-in: &#123;&#123;token&#125;&#125;, &#123;&#123;username&#125;&#125;, &#123;&#123;password&#125;&#125;.</text>
  <rect x="240" y="174" width="720" height="30" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="193" fill="#94a3b8" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ ENDPOINTS NOMAUBL USES  (8/10)</text>
  <text x="450" y="193" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">— add any your PA needs; the -selfbilled variants are optional</text>
  <rect x="240" y="214" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="220" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="231.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="232" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">import</text>
  <text x="450" y="232" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Send invoice (sales flow)</text>
  <rect x="932" y="218" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="231.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="248" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="254" width="40" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="270.0" y="265.2" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">GET</text>
  <text x="300" y="266" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">import-status</text>
  <text x="450" y="266" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Import status poll (sales)</text>
  <rect x="932" y="252" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="265.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="282" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="288" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="299.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="300" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">invoice-statuses</text>
  <text x="450" y="300" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lifecycle events (sales)</text>
  <rect x="932" y="286" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="299.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="316" width="720" height="28" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="322" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="333.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="334" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">report-import</text>
  <text x="450" y="334" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Submit e-reporting flux</text>
  <rect x="932" y="320" width="20" height="20" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="942.0" y="333.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="240" y="352" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="366.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add endpoint</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Steps with their state</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click a card to open its settings</text>
  <line x1="200" y1="87.0" x2="232" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base URL as its state</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">No base URL in red when empty</text>
  <line x1="200" y1="187.0" x2="280" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Expected endpoints</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">configured / known, one-click Add</text>
  <line x1="200" y1="277.0" x2="240" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="1000" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoints · Webhooks · Test</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">count, Signed / Not set, runner</text>
  <line x1="1000" y1="87.0" x2="920" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
  <rect x="1000" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card per endpoint</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">click to open its four parts</text>
  <line x1="1000" y1="347.0" x2="916" y2="281" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apic-arrow)"/>
</svg>

---

## Connection step \{#connection\}

### Connection

| Field | Description |
|---|---|
| **Base URL** | Root URL of the target API (e.g. `https://api.example.com:9300`). All endpoint paths are appended to this URL. |
| **Timeout (ms)** | HTTP request timeout in milliseconds. Default `30000` (30 s). |
| **Min. interval between requests (ms)** | Minimum gap between two requests to the connector's **host**. Empty or `0` = off. See [Request limits](#request-limits). |
| **Error limit (per 120 s)** | Holds the requests to the host while this many error responses sit in the last 120 seconds. Empty or `0` = off. See [Request limits](#request-limits). |
| **SSL Verify** | `true` / `false` — whether to validate the server's TLS certificate. Set to `false` only in non-production environments using self-signed certificates. |
| **Debug** | `Y` / `N` (default `N`). When `Y`, every call through this connector traces to the service log — the URL and HTTP status, the request and response **headers** (authorization and other sensitive headers masked), and the full request and response **bodies**, each cut at the **Debug body limit** so a large payload doesn't flood the log. Turn it on while wiring a new platform to check URL substitution, query parameters, headers and the exact bodies exchanged; turn it off once the connector is stable. |
| **Debug body limit** | Characters of each body kept in the debug log (default `100000`). Lower it for a platform that returns very large payloads. |

### Request limits \{#request-limits\}

Some platforms cap the request rate and refuse the excess with `429 Too Many Requests`, or block a client after too many errors. The two limits above protect the platform's **host** (the host name of the request URL):

- **Min. interval between requests** spaces every request to the host by at least this many milliseconds.
- **Error limit (per 120 s)** counts the `400`, `403`, `404`, `405`, `429` and `444` responses of the last 120 seconds; once the limit is reached, requests wait until the oldest errors leave the window.
- **After a `429`**, the host is paused for the time given by the platform's `Retry-After` header (300 s at most, 30 s without it), then the refused request is sent again once — a send caught by the limit is not reported as failed.

Requests wait; none is refused. The limits are shared by everything that calls the host from the server's machine: sends, status polls, scheduled jobs and command-line processing runs count together. Set the same values **on every connector that calls the platform** (send, import status, lifecycle…). When requests are held, the service log shows `** WARN ** API ** LIMIT : <host> — requests held for N s (…)`.

:::tip[Suggested values for TX2]
`300` ms and `20`, on every connector calling it.
:::

### Default Headers

| Field | Description |
|---|---|
| **Headers** | Semicolon-separated `Key:Value` pairs applied to **every** endpoint of this connector (e.g. `Content-Type:application/json;Accept:application/json`). A value can reference `{{kco}}` (the invoice's company) — for platforms that scope requests by organisation, such as an `Organization-Id` header. Per-endpoint *Extra headers* can override these on a case-by-case basis. |

---

## Authentication step \{#authentication\}

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
| **Body Content-Type** | `application/json` *(default)* or `application/x-www-form-urlencoded`. The form variant emits the token request body as URL-encoded pairs, which is what the standard OAuth2 `client_credentials` flow expects. |
| **Body template** | Custom request body, with `{{username}}` / `{{password}}` placeholders. **Leave empty** to use sensible defaults: JSON mode emits the JD Edwards AIS payload (`{ username, password, deviceName }`); form mode emits `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}`, or `grant_type=refresh_token` when a **Refresh token** is set. |
| **Refresh token** | A long-lived OAuth2 offline token for the `refresh_token` grant — for platforms (such as Yooz Rising) that issue one. Masked, and kept out of the request body; a custom body can reference it as `{{refreshToken}}`. |
| **Token request headers** | Optional. Semicolon-separated `Key:Value` pairs sent **only on the token request** — for PAs that require a tenant-id header on the auth call itself. Example: `customer-id:CUST123;X-Tenant:acme`. |

**Test authentication** — the *Test* block at the bottom of the step, whatever the method, authenticates with the configured credentials (for OAUTH2, fetches a token) and reports success or the exact error, so the connection is verified before an invoice is sent.

---

## Endpoints step \{#endpoints\}

The catalogue of HTTP endpoints reachable through this connector. Each endpoint is a card showing its method, name and description; click the header to open or close it. **+ Add endpoint** appends a new one, the red **×** of a card removes it.

:::tip[Expected endpoints]
A folded **Endpoints NomaUBL uses** block, with a count of those configured (for example `5/7`), lists the platform endpoints NomaUBL knows about — *send* (`import`), *import status*, *invoice statuses*, their `-selfbilled` variants (which route self-billed / purchase-flow documents and fall back to the standard flow), *resolve invoice*, *post status*, the e-reporting submission (`report-import`) and the directory check — marking those already configured and offering a one-click **add** for those missing, so a required endpoint is harder to overlook. Click the title to unfold it. An upgrade also adds to a shipped connector the endpoints it lacks and keeps the existing ones (see [Upgrade](../installation/upgrade.md)).
:::

You can use **`{{param}}` placeholders** in URLs, headers, query parameters and bodies. Three placeholders are always available out of the box:

- `{{token}}` — the OAUTH2 token (when `OAUTH2` auth is configured)
- `{{username}}` — the configured Username
- `{{password}}` — the configured Password

All other placeholders must be **declared in the endpoint's Parameters section** (see below).

One more built-in placeholder, `{{passThrough}}`, resolves to an **archive-only** flag derived from the invoice's routing type. Invoices that are e-reported rather than routed (B2C, B2BInt, Archive-only, Out-of-scope) resolve it as archive-only, while B2B / B2G resolve it as transmit — determined automatically on both the first send and any resend. Put `{{passThrough}}` in the send endpoint's body when the target platform (e.g. Yooz) can archive a document without forwarding it to a recipient, so those invoices are archived on the platform instead of transmitted.

### An endpoint in four parts \{#endpoint-parts\}

An open endpoint card shows its settings as four step cards, each with its state; a click on a card shows its fields.

<svg viewBox="0 0 1200 362" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="apie-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="apie-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="apie-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="apie-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="322" rx="14" fill="url(#apie-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="720" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="43" width="40" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="270.0" y="54.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">POST</text>
  <text x="300" y="55" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">report-import</text>
  <text x="420" y="55" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Submit e-reporting flux</text>
  <rect x="240" y="70" width="720" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="252" y="80" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="87" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="268.0" y="98.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="282" y="98.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WHAT IT IS</text>
  <text x="261" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Submit e-reporting flux</text>
  <line x1="415" y1="102.0" x2="427" y2="102.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apie-flow)"/>
  <rect x="430" y="80" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="438" y="87" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="446.0" y="98.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <text x="460" y="98.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INPUTS</text>
  <text x="439" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">0 parameter(s)</text>
  <line x1="593" y1="102.0" x2="605" y2="102.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apie-flow)"/>
  <rect x="608" y="80" width="162" height="44" rx="8" fill="rgba(255,159,10,0.14)" stroke="#fb923c" strokeWidth="1.3"/>
  <rect x="616" y="87" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="624.0" y="98.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤</text>
  <text x="638" y="98.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE CALL</text>
  <text x="617" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">POST /v1/flows</text>
  <line x1="771" y1="102.0" x2="783" y2="102.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#apie-flow)"/>
  <rect x="786" y="80" width="162" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="794" y="87" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="802.0" y="98.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <text x="816" y="98.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">THE ANSWER</text>
  <text x="795" y="116" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">the whole answer · 1 mappin…</text>
  <line x1="240" y1="134" x2="960" y2="134" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="165" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Method</text>
  <rect x="370" y="150" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">POST ▾</text>
  <text x="466" y="165" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">URL path</text>
  <rect x="520" y="150" width="330" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">/v1/flows</text>
  <text x="260" y="197" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Extra headers</text>
  <rect x="370" y="182" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="196.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace"></text>
  <text x="260" y="229" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Content-Type</text>
  <rect x="370" y="214" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">multipart/form-data ▾</text>
  <text x="260" y="261" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Body</text>
  <rect x="370" y="246" width="480" height="48" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="264" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">file=@&#123;&#123;filePath&#125;&#125;;filename=&#123;&#123;reportName&#125;&#125;.xml;contentType=application/xml</text>
  <text x="380" y="282" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">flowInfo=&#123;"name":"&#123;&#123;reportName&#125;&#125;","flowSyntax":"FRR"&#125;</text>
  <text x="260" y="317" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Query params</text>
  <rect x="370" y="302" width="480" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="316.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace"></text>
  <rect x="20" y="36" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="51" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Endpoint header</text>
  <text x="30" y="64" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">method, name, description</text>
  <line x1="200" y1="53.0" x2="250" y2="51" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Four parts</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">what it is · inputs · call · answer</text>
  <line x1="200" y1="117.0" x2="252" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Multipart body</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one part per line</text>
  <line x1="200" y1="317.0" x2="370" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">State of each part</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">URL missing shows in red</text>
  <line x1="1000" y1="117.0" x2="900" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="1000" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The call</text>
  <text x="1010" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">method, path, headers, type</text>
  <line x1="1000" y1="227.0" x2="850" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
  <rect x="1000" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">&#123;&#123;filePath&#125;&#125; · &#123;&#123;reportName&#125;&#125;</text>
  <text x="1010" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">e-reporting file sent as a flow</text>
  <line x1="1000" y1="307.0" x2="850" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#apie-arrow)"/>
</svg>

| Part | Card state | Fields |
|---|---|---|
| **What it is** | The label, else the description, else the name | Name, Label, Description. |
| **Inputs** | *N parameter(s)* | The parameters declared for the `{{placeholder}}` variables. |
| **The call** | Method and URL path, in red when the path is empty | Method, URL path, Extra headers, Content-Type, Body, Query params. |
| **The answer** | Response field (*the whole answer* when empty), number of mappings, chained endpoint | Response type, Response field, Status map, Then endpoint, Response mappings. |

### What it is \{#endpoint-general\}

| Field | Description |
|---|---|
| **Name** | Logical identifier referenced from other parts of NomaUBL (e.g. `getOrderLines`, `reportExecute_R0010P`). |
| **Label** | Human-readable label shown in the editor and in dropdowns when a user picks an endpoint (e.g. `Get Order Lines`). |
| **Description** | Free-text description shown in dropdowns and in the card header. |

### Inputs \{#endpoint-inputs\}

The *Inputs* part (**Parameters**) declares the **`{{placeholder}}` variables** the endpoint expects — those used in its URL, headers and body — so that consumers (e.g. the *Actions* tab in *E-Invoicing*) get a guided form when binding to this endpoint.

| Sub-field | Description |
|---|---|
| **Name** | Placeholder name as used in URL / headers / body (e.g. `reportName`). |
| **Label** | Human-readable label shown to whoever supplies the value (e.g. `Report Name`). |
| **Default value** | Pre-filled default applied when the consumer does not override it (e.g. `R0010P`). |

### The call \{#endpoint-call\}

| Field | Description |
|---|---|
| **Method** | HTTP method (`GET` / `POST` / `PUT` / `DELETE` / `PATCH`). |
| **URL path** | Endpoint path appended to the connector's **Base URL** (e.g. `/v7.3/orchestrator/{{name}}`). |
| **Extra headers** | Semicolon-separated `Key:Value` pairs added to (or overriding) the connector's default headers (e.g. `X-Custom:value;Authorization:Bearer {{token}}`). |
| **Content-Type** | `application/json` *(default)*, `multipart/form-data`, or an XML type (`text/xml` / `application/soap+xml`). The multipart variant turns the body into a list of parts — see *Multipart bodies* below. An XML type sends the body verbatim after `{{placeholder}}` substitution, with the substituted values XML-escaped so a SOAP or XML envelope stays well-formed — see *SOAP / XML bodies* below. |
| **Body** | Request body — a JSON template with `{{param}}` placeholders. The **Format JSON** button pretty-prints the value. For `multipart/form-data`, the body is parsed as one part per line (`name=value` or `file=@{{filePath}};filename=…;contentType=…`). For an XML type, the body is the SOAP / XML envelope itself, with `{{param}}` placeholders inside the elements. |
| **Query params** | Query string template with `{{param}}` placeholders (e.g. `pageSize={{pageSize}}&page={{page}}`). |

Each of the URL path, headers, body and query fields has an **Insert `{{token}}`** picker listing the placeholders available to the endpoint.

#### Multipart bodies

When **Content-Type** is set to `multipart/form-data`, the body is no longer a single JSON document — it is parsed as a **list of parts**, one per non-empty line. Each part is either a literal value or a file reference:

| Form | Example | Meaning |
|---|---|---|
| `name=value` | `comment=invoice {{fedoc}}` | Adds a text field named `comment` with the resolved value. |
| `file=@{{filePath}};filename=invoice.xml;contentType=application/xml` | *(same)* | Attaches a file part named `file`. `{{filePath}}` resolves to the path on disk; `filename` and `contentType` are the headers shipped on that part. |

Typical use case: a PA that takes the UBL invoice as a `multipart/form-data` upload with the XML in a `file` part (IOPOLE's invoice-import endpoint follows this pattern). The part name (`file` above) is yours to choose — match whatever the platform expects.

These placeholders carry the document into the part:

- `{{filePath}}` — the path to the UBL file on disk. On the **initial send** it is the input file; on a **resend** NomaUBL writes the stored UBL blob to a temporary file first, so `{{filePath}}` works the same way and one connector configuration serves both (the temp file is cleaned up automatically).
- `{{content}}` — the base64 of the UBL, for platforms that take the bytes inline in a JSON body rather than as a file part.
- `{{docName}}` — a sanitised `<doc>_<dct>_<kco>` name, handy for the `filename` header.
- `{{derivedFilePath}}` / `{{derivedContent}}` — the path and the base64 of the file written by the document's [post-transform](../ubl-tools/post-transform.md) (CII…), for a platform that expects that syntax rather than UBL; empty when the document has none. `{{filePath}}` and `{{content}}` stay the UBL, which keeps the routing.
- `{{filePath}}` and `{{reportName}}` on the **e-reporting** submission endpoint (`report-import`) — NomaUBL writes the generated report to a temporary file for the call, so a platform that takes the e-reporting file as a multipart flow gets it the same way as an invoice; `{{reportName}}` is the report name, with any character other than letters, digits, `.`, `_` and `-` replaced by `_`. See [Platforms with the AFNOR flow API](#afnor-flow-api).

#### SOAP / XML bodies

When **Content-Type** is `text/xml` or `application/soap+xml`, the body is a SOAP or XML envelope sent verbatim. `{{placeholder}}` values are substituted in place and XML-escaped (`&`, `<`, `>`, quotes), so a value that contains reserved characters can't break the envelope. Pair it with **Response type** `XML` to read the answer back through XPath — the request and the response are then both XML end to end, which is what a legacy SOAP web service expects.

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inv="urn:pa:invoice">
  <soapenv:Body>
    <inv:SubmitInvoice>
      <inv:Reference>{{fedoc}}</inv:Reference>
      <inv:Payload>{{content}}</inv:Payload>
    </inv:SubmitInvoice>
  </soapenv:Body>
</soapenv:Envelope>
```

### The answer \{#endpoint-answer\}

| Field | Description |
|---|---|
| **Response type** | `JSON` *(default)* or `XML`. In `XML` mode *Response field* and *Response mappings* are read as **XPath**, so a platform that answers import-status with a UBL `ApplicationResponse` — status in `//cac:DocumentResponse/cac:Response/cbc:ResponseCode` — can be polled like a JSON one. The `cac` / `cbc` / `ext` prefixes are recognised; use `//*[local-name()='X']` for anything else. |
| **Response field** | Optional dot-notation path (e.g. `data.items`) extracting a sub-tree of the response — useful when the caller is only interested in part of the payload. |
| **Status map** | Translates the platform's own status words (e.g. `send_error`, `sent`, `processing`) to the internal *accepted / pending / rejected* outcomes, so import-status marks the invoice correctly instead of optimistically treating an unrecognised status as accepted. |
| **Then endpoint** · **Items field** · **Id field** · **Item filter** | Chains a follow-up endpoint — see [Endpoint chaining](#endpoint-chaining). |

#### Response mappings

A list of **logical name → JSON path** pairs that translate fields in the response into stable names usable by NomaUBL:

- **Logical name**: the stable name NomaUBL stores or references (e.g. `uuid`, `status`).
- **JSON path**: dot-notation path inside the response (e.g. `data.uuid`).

If the upstream API renames a field, update only the mapping — application code keeps using the logical name.

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

### Endpoint chaining (`then`) \{#endpoint-chaining\}

 An endpoint can hand its result to a follow-up call in the same step. Set **`then`** to the name of the next endpoint, and **`then.itemsField`** / **`then.idField`** to pick the id to carry forward from the first response. That id reaches the follow-up as `{{prevId}}` (also aliased `{{uuid}}`). It powers two-step platform flows — *upload then process*, or *list then fetch each detail* — without a round-trip through NomaUBL between the calls.

In array mode, the **Item filter** field (`then.filter`) restricts which list items are chained: conditions on dot-notation fields of the item, several accepted values separated by `|`, several conditions by `;` — e.g. `flowSyntax=CDAR`. Non-matching items are skipped **before** the detail call, so they cost no request and never reach the results; the debug trace reports how many were skipped. Empty means no filter.

#### Lifecycle statuses from a CDAR flow \{#cdar-lifecycle\}

Some PAs (Esker-style) expose lifecycle statuses as a flow search followed by one **CDAR** message per flow — `flows/search`, then `flows/{id}?docType=Original`. This is wired by configuration only: the chain carries each XML detail intact, and the lifecycle retrieval evaluates the `event.*` response mappings as **XPaths** on it. `event.item` names the repeating node (one event per referenced invoice); relative paths resolve inside it, absolute paths on the whole message; UN/CEFACT dates (formats `204` / `102`) are converted automatically, and the CDAR prefixes `rsm`, `ram`, `udt`, `qdt` are pre-registered. The **Pre-map CDAR lifecycle** button fills the nine mappings in one click (status = `ProcessConditionCode`, invoice = `IssuerAssignedID`, reason, action, note, dates). The `event.*` mappings are read from both the list endpoint and its chained detail endpoint — the list wins on conflict — so list-item paths (`item.<field>`) can stay on the list while the CDAR XPaths stay on the detail, where the *Test* step evaluates them.

### Worked example — Esker (upload, then process) \{#esker\}

Esker takes the invoice in two calls, wired as a `pa-default` API connector:

| Step | Endpoint | What it does |
|---|---|---|
| **Send** | `POST /api/v1/fileContent` | A JSON body carries the base64 UBL (`{{content}}`); Esker's own `decode=b64` directive in that body tells *Esker* the content is base64, so no temporary file is needed. The response returns a file id, mapped to `uuid` in *Response Mappings*. |
| **Import status** | `POST /api/v1/process/{{processName}}` | Mapped to the **import-status** slot — fetch-import invokes it on the next poll. It triggers the actual processing using the file id from the send. |

Authentication is `OAUTH2` with a form-urlencoded **Body Content-Type**; leaving the **Body template** empty lets NomaUBL emit `grant_type=client_credentials&client_id={{username}}&client_secret={{password}}` on its own.

The import-status slot is repointed to the second endpoint from the **Import status** field in [E-Invoicing → Actions](./system/einvoicing.md) — the slot name overrides the connector's default, so the same connector serves the send and the status poll.

:::tip
PAs that don't return the standard `success/pending/failed` vocabulary (Esker, IOPOLE, …) are read correctly by import-status: a real HTTP failure counts as an error, while a `2xx` with no `status` field flows the optimistic success branch. Turn on **Debug** in the Connection step while wiring the two endpoints to watch the traces.
:::

---

### Platforms with the AFNOR flow API \{#afnor-flow-api\}

Platforms that follow the AFNOR flow API (XP Z12-013) take every document as a **flow**: a multipart `POST` with the file and a description of the flow, then a search over the flows. They are wired on the `pa-default` connector by configuration only:

| Endpoint | Call | Notes |
|---|---|---|
| `import` | `POST /v1/flows`, multipart | `file=@{{filePath}}` part plus a `flowInfo` part (flow name, syntax, processing rule); response mapping `uuid` = `flowId`. |
| `import-status` | `GET /v1/flows/{{uuid}}?docType=Metadata` | Response mapping `status` = `acknowledgement.status`, with a *Status map* such as `ok:success\|pending:pending\|error:failed`. |
| `invoice-statuses` | `POST /v1/flows/search` | Chained (`then`) to the detail of each flow, read as a CDAR — see [Lifecycle statuses from a CDAR flow](#cdar-lifecycle). |
| `report-import` | `POST /v1/flows`, multipart | The e-reporting file as a flow: `{{filePath}}` and `{{reportName}}` in the body. |
| `fetch-received-list` | flow search | The list of received invoices reads the `flowId` of each flow found. |
| `fetch-received` | `GET` of a flow with `docType=Ubl` | Downloads the received invoice. |

A body for the e-reporting submission looks like this (the parts and their names follow the platform's specification):

```text
file=@{{filePath}};filename={{reportName}}.xml;contentType=application/xml
flowInfo={"name":"{{reportName}}","flowSyntax":"FRR"}
```

:::note
Posting a status on a **received** invoice (`post-status`) means building a CDAR message and sending it as a flow; NomaUBL does not build that message, so this endpoint is not covered on such platforms.
:::

---

## Webhooks step \{#webhooks\}

Configure how the PA pushes **inbound status updates** back to NomaUBL. The step assumes the request shape NomaUBL implements: HTTP `POST` with a JSON body, an HMAC-SHA256 signature on a canonical `timestamp\nMETHOD\npath\nbodyChecksum`, and a per-event id that lets the verifier dedupe at-least-once retries.

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

## Test step \{#test\}

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

Continuing the JDE AIS endpoint defined in the Endpoints step, here is how the Test step looks after selecting it on the `jde-ais` connector.

| Section | Value |
|---|---|
| **Endpoint** | `reportExecute_R0010P — Execute Report R0010P` |
| **Parameters** *(auto-pre-filled from the endpoint's declared defaults)* | `reportName = R0010P`<br/>`reportVersion = ZJDE0001`<br/>`companyCode = 00001` |

Selecting the endpoint **automatically populated the three parameter rows** with their declared defaults — no need to remember the placeholder names. Override any value (typically `companyCode` to point at a real JDE company), then hit **Run**. The Result section will show the resolved Request URL, the HTTP status and the response body, with the value extracted via *Response field* (`data.items` for this endpoint) when applicable.

This is also why investing time in **declaring parameters with sensible defaults** in the Endpoints step pays off: the Test step — and any consumer that picks the endpoint elsewhere — becomes self-documenting.

---

## Tips & best practices

- **One connector per system.** Avoid mixing endpoints of different external systems in the same connector — auth, headers and base URL are connector-wide.
- **Name endpoints by intent.** `reportExecute_R0010P` is more useful than `post1` because the *Actions* tab dropdown lists endpoints by name.
- **Declare every `{{placeholder}}` you reference.** Undeclared placeholders won't show up in the *Actions* tab parameter form, so consumers can't supply them.
- **Use `Default value` to lock down constant parameters.** For a JDE report execution where `reportName` and `reportVersion` never change, set their defaults — consumers only need to supply the truly variable values.
- **Test before binding.** Run the endpoint from the Test step with realistic parameter values before binding it to a regulatory action; this catches authentication, URL and payload issues early.
- **Mappings are your contract with upstream.** Map response fields to stable logical names so application code is shielded from upstream JSON path changes.
