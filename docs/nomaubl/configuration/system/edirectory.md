---
title: E-Directory
description: "Configure the connection to the French PPF (Portail Public de Facturation) directory and the INSEE company search used to validate addressing codes and look up customer information before sending an e-invoice. Two-tab layout: Directory (Enable Check + INSEE Search) and Connector (api-connector picker + per-task endpoint overrides)."
keywords: [NomaUBL, e-directory, PPF, Portail Public de Facturation, INSEE, addressing code, code adressage, e-invoicing, French e-invoicing, directory lookup, SIREN, SIRET, api-connector, ppf-directory]
---

# E-Directory

The **E-Directory** editor configures two complementary services NomaUBL uses to validate recipient information before producing an e-invoice:

- **PPF (Portail Public de Facturation) directory** — verifies that the **electronic addressing code** carried by the document exists and is **active** in the public e-invoicing directory.
- **INSEE company search** — looks up a company by **business name, SIREN or SIRET** to retrieve its official identification data (legal name, address, registration status…).

The two are typically chained: an INSEE search resolves the customer's identifiers, then the PPF directory check confirms that the addressing code on the document is valid for that customer.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP — once the source is mapped to UBL.

:::info[Refreshed in 2026.05.8]
The PA configuration story is now consistent across **e-invoicing**, **e-directory** and **e-reporting** — every system template references a reusable [api-connector](../api-connectors.md) instead of carrying inline auth and endpoints. The legacy inline *API Connection* and *Credentials* groups are gone (no fallback). The editor went to **two tabs**: *Directory* (Enable Check + INSEE Search) and *Connector* (api-connector picker + per-task endpoint overrides). The bundled `ppf-directory` connector covers the standard flow.
:::

The editor has **two tabs**:

1. **Directory** — Enable Check toggle and INSEE search settings.
2. **Connector** — pick the api-connector that holds the PPF transport, plus per-task endpoint name overrides.

---

## Opening the editor

- *Settings* → **e-directory** template (the system-level resource).

---

## At a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edir-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="edir-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#edir-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="84" height="24" rx="4" fill="transparent"/>
  <text x="282" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Directory</text>
  <rect x="330" y="28" width="84" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="372" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Connector</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">API connector</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">The PPF directory's HTTP transport — auth, base URL, endpoints — lives in a reusable api-connector.</text>

  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="320" y="118" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="135" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">ppf-directory ▾</text>
  <text x="610" y="135" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">edit under API Connectors</text>

  <text x="240" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Per-lookup endpoint overrides</text>
  <text x="240" y="186" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Endpoint name on ppf-directory for each lookup. Defaults shown apply when blank.</text>

  <rect x="240" y="196" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="211" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Directory check          |  directory-check</text>
  <rect x="240" y="220" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="235" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Directory check (SIREN)  |  directory-check-siren</text>
  <rect x="240" y="244" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="259" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Directory check (SIRET)  |  directory-check-siret</text>

  <line x1="240" y1="288" x2="780" y2="288" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="312" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Directory tab — preview</text>
  <text x="240" y="334" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENABLE CHECK</text>
  <rect x="346" y="324" width="160" height="26" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="356" y="341" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">Y ▾</text>
  <text x="520" y="341" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">queries the PPF before each invoice</text>

  <text x="240" y="378" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">INSEE Search</text>
  <text x="240" y="400" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RESULTS PER PAGE</text>
  <rect x="346" y="390" width="100" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="356" y="407" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">10</text>
  <text x="460" y="407" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">number of results per INSEE search</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Reusable api-connector</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no inline auth or endpoints</text>
  <line x1="200" y1="115" x2="320" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>

  <rect x="820" y="220" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Per-lookup overrides</text>
  <text x="830" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SIREN-only / SIRET / generic</text>
  <line x1="820" y1="236" x2="780" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>

  <rect x="20" y="326" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enable check</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PPF directory query before send</text>
  <line x1="200" y1="342" x2="346" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>

  <rect x="820" y="392" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">INSEE Search</text>
  <text x="830" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">company lookup by SIREN/SIRET</text>
  <line x1="820" y1="408" x2="446" y2="404" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>
</svg>

---

## Tab 1 — Directory

### Directory Check

| Field | Values | Description |
|---|---|---|
| **Enable Check** | `Y` / `N` | When enabled, NomaUBL queries the PPF directory **before sending each invoice** to verify that the **electronic addressing code** on the document exists and is active in the public directory. Disable to skip the verification (useful for testing). |

### INSEE Search

| Field | Default | Description |
|---|---|---|
| **Results per page** | `10` | Maximum number of results returned per INSEE search query. Increase to widen each result page; decrease to limit network payloads. |

---

## Tab 2 — Connector

The PPF directory's HTTP transport — authentication flow, base URL, endpoints — lives in a reusable [api-connector](../api-connectors.md). This page **references it by name only** and never carries auth fields or HTTP endpoints inline. The bundled `ppf-directory` connector covers the standard flow; pick a custom connector when the directory exposes non-standard auth or routes through a tenant gateway.

### API connector

| Field | Description |
|---|---|
| **Connector** | Dropdown listing every `api-connector` template. The selected connector holds the directory's `baseUrl`, `authType`, credentials, token endpoint and the catalogue of HTTP endpoints. Edit the connector itself under [API Connectors](../api-connectors.md). |

### Per-lookup endpoint overrides

When the api-connector exposes endpoint names different from the defaults, set an override below. Leave a field blank to use the default name shown.

| Field | Default | Used by |
|---|---|---|
| **Directory check** | `directory-check` | The generic directory check (when the document already carries the routing identifier). |
| **Directory check (SIREN)** | `directory-check-siren` | Lookup branch when only a SIREN is known. |
| **Directory check (SIRET)** | `directory-check-siret` | Lookup branch when a SIRET is known. |

---

## Tips & best practices

- **Keep Enable Check on in production.** Sending an invoice with an inactive or unknown addressing code leads to a downstream rejection by the receiving Plateforme Agréée.
- **Use INSEE search to bootstrap customer records.** A lookup by SIREN / SIRET avoids transcription mistakes and aligns NomaUBL's data with the official registry.
- **Edit timeouts and TLS settings on the api-connector itself.** The HTTP-level parameters live on the [API Connectors](../api-connectors.md) page, not here — same connector can serve several pages, so the timeout and SSL Verify flag are set once.
- **Never disable SSL Verify in production.** It opens you to man-in-the-middle interception of credentials and document metadata. Set it on the api-connector, not here.
- **The PPF connector is bundled.** A fresh installation already ships a `ppf-directory` connector pointing at the standard endpoints — pick it from the dropdown and you are done. Custom connectors are only needed for non-standard transports.
