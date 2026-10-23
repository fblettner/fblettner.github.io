---
title: E-Directory
description: "Look up a French company in the INSEE registry by name, SIREN or SIRET, then check whether each match is reachable on the PPF directory for e-invoice delivery."
keywords: [NomaUBL, e-directory, INSEE, SIREN, SIRET, PPF, recherche-entreprises, directory check, reachable, electronic address, JD Edwards, SAP, NetSuite, custom ERP]
---

# E-Directory

The **E-Directory** screen is the user-facing search tool for finding a French company in the **INSEE registry** (`recherche-entreprises.api.gouv.fr`) and checking whether the matching SIREN / SIRET entries are **reachable on the PPF directory** for electronic invoice delivery.

Use this page when:

- you need to look up a customer's exact SIREN / SIRET before issuing an invoice;
- you want to confirm a buyer is registered on the Plateforme Publique de Facturation (PPF) and ready to receive an electronic invoice;
- you are debugging an addressing rejection (e.g. `REJ_ADR`) and need to verify the directory state for a specific identifier.

The page applies regardless of source system — JD Edwards, SAP, NetSuite or a custom ERP.

The two underlying lookups are independent and have different roles:

- **INSEE search** — verifies that the company exists and pulls its name, address, administrative state. Free public API, no credentials needed.
- **PPF directory check** — verifies that the SIREN / SIRET is registered as a recipient on the Plateforme Publique de Facturation. Uses the credentials configured in *Configuration → System → e-directory*.

See the [Configuration → System → e-directory](../configuration/system/edirectory.md) page for the broader context — credentials, search roles and the PPF / INSEE distinction.

---

## At a glance

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-pg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edir-pg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="edir-pg-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#edir-pg-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">E-Directory</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="92" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Search company</text>
  <rect x="240" y="102" width="436" height="32" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="122" fill="#475569" fontSize="11" fontFamily="system-ui, sans-serif">Company name, SIREN (9 digits) or SIRET (14 digits)…</text>
  <rect x="686" y="102" width="94" height="32" rx="6" fill="url(#edir-pg-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="733" y="122" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">🔍 Search</text>

  <text x="240" y="152" fill="#cbd5e1" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Results — one card per company (SIREN)</text>

  <rect x="240" y="160" width="540" height="40" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1.2"/>
  <text x="252" y="178" fill="#4a9eff" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <text x="270" y="177" fill="#e2e8f0" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">ACME Manufacturing</text>
  <text x="270" y="192" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">SIREN 123 456 789 · 12 rue de Rivoli, 75001 Paris</text>
  <rect x="606" y="169" width="70" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="641" y="182" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <rect x="682" y="169" width="92" height="18" rx="9" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="728" y="182" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">5 lines · 4 enabled</text>

  <text x="264" y="222" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Établissements (INSEE)</text>
  <text x="264" y="238" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12345678900012 — 12 rue de Rivoli, 75001 Paris · Active</text>
  <text x="264" y="252" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12345678900037 — 8 av. du Général Leclerc, 92100 Boulogne · Active</text>

  <text x="264" y="280" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Electronic addresses</text>
  <rect x="264" y="288" width="500" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="302" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">123456789 · SIREN</text>
  <text x="742" y="302" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif" fontWeight="700">✓ enabled</text>
  <rect x="264" y="310" width="500" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">12345678900012 · SIREN+SIRET</text>
  <text x="742" y="324" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif" fontWeight="700">✓ enabled</text>
  <rect x="264" y="332" width="500" height="20" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="346" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">123456789_FGX · routing suffix</text>
  <text x="742" y="346" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif" fontWeight="700">✕ disabled</text>

  <line x1="240" y1="372" x2="780" y2="372" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="392" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 company · 2 establishments · 5 electronic addresses</text>

  <text x="240" y="420" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">INSEE is queried first (free public API); one PPF directory call per company then lists every registered identifier, using the credentials under Configuration → System → e-directory.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One search field</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name · SIREN · SIRET — auto-detected</text>
  <line x1="200" y1="115" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="820" y="164" width="164" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="179" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Directory summary</text>
  <text x="830" y="192" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lines · how many enabled</text>
  <line x1="820" y1="180" x2="778" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="20" y="322" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="337" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Electronic addresses</text>
  <text x="30" y="350" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">every identifier · enabled / disabled</text>
  <line x1="200" y1="338" x2="262" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>
</svg>

---

## How a search runs

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="edir-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edir-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="edir-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="edir-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="20" y="60" width="170" height="80" rx="12" fill="url(#edir-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="105" y="90" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Query</text>
  <text x="105" y="112" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">name · SIREN · SIRET</text>
  <rect x="220" y="60" width="200" height="80" rx="12" fill="url(#edir-g-blue)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="320" y="90" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔍 INSEE</text>
  <text x="320" y="112" fill="currentColor" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">recherche-entreprises.api.gouv.fr</text>
  <rect x="450" y="60" width="170" height="80" rx="12" fill="url(#edir-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="535" y="90" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📋 Results table</text>
  <text x="535" y="112" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">SIREN / SIRET rows</text>
  <rect x="650" y="60" width="200" height="80" rx="12" fill="url(#edir-g-blue)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="750" y="90" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📡 PPF directory</text>
  <text x="750" y="112" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.78">/api/check-directory</text>
  <line x1="190" y1="100" x2="220" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#edir-arrow)"/>
  <text x="205" y="93" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">Search</text>
  <line x1="420" y1="100" x2="450" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#edir-arrow)"/>
  <text x="435" y="93" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">matches</text>
  <line x1="620" y1="100" x2="650" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#edir-arrow)"/>
  <text x="635" y="93" fontSize="9" fill="#4a9eff" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">per row</text>
  <rect x="870" y="38" width="120" height="42" rx="9" fill="url(#edir-g-green)" stroke="#4ade80" strokeWidth="1.3"/>
  <text x="930" y="56" fill="#4ade80" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ reachable</text>
  <text x="930" y="72" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">green chip</text>
  <rect x="870" y="88" width="120" height="42" rx="9" fill="rgba(255,159,10,0.08)" stroke="#fb923c" strokeWidth="1.3"/>
  <text x="930" y="106" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⚠ not found</text>
  <text x="930" y="122" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">orange chip</text>
  <rect x="870" y="138" width="120" height="42" rx="9" fill="rgba(255,69,58,0.06)" stroke="#f87171" strokeWidth="1.3" strokeDasharray="3 2"/>
  <text x="930" y="156" fill="#f87171" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ error</text>
  <text x="930" y="172" fill="currentColor" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.7">red chip</text>
  <line x1="850" y1="95" x2="870" y2="65" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow-slate)"/>
  <line x1="850" y1="105" x2="870" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow-slate)"/>
  <line x1="850" y1="115" x2="870" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow-slate)"/>
</svg>

The two lookups happen in sequence: INSEE first to populate the companies, then **one PPF directory call per company** to list its registered identifiers. The user sees the results fill in two passes. Expanding a company card then runs the [Peppol lookup](#peppol-directory) for that company.

---

## Search section

A single input + button at the top of the page.

| Element | Behaviour |
|---|---|
| **Search field** | Free-text query: company name, partial name, SIREN, SIRET, or any combination. Press **Enter** or click **Search** to submit. |
| **Search** button | Triggers the INSEE lookup. Disabled while a search is in progress and when the field is empty. |

The query is sent to `recherche-entreprises.api.gouv.fr` server-side; the API returns matching companies with their full establishment data.

---

## Results

Results are grouped **by company**: one collapsed card per **SIREN**, showing the legal name, the head-office address, the INSEE administrative state and an **electronic-address summary** — how many electronic addresses the PPF holds for the company and how many are enabled. Expand a card to reveal two groups:

### Establishments (INSEE)

An inner collapsible list of the company's establishments — each **SIRET** with its address and administrative state, from the INSEE registry. Searching by SIREN or SIRET now lists **all** establishments of the company (a second INSEE lookup by company name fills what the numeric search omits).

### Electronic addresses

Every identifier registered for the SIREN on the PPF, **whatever its form** — a SIREN, a SIREN + SIRET, a routing code or a suffix — each with its **enabled / disabled** state. Identifiers that carry a suffix, such as `422250845_FGX`, are listed here too — a form the previous per-row check could not surface.

<div style={{display: 'flex', flexDirection: 'column', gap: '6px', margin: '14px 0'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(50,215,75,0.08)', border: '1px solid rgba(50,215,75,0.3)'}}><span style={{color: '#4ade80', fontWeight: 700, fontSize: '14px'}}>✓</span><span style={{color: '#4ade80', fontWeight: 600, fontSize: '13px'}}>Enabled</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Registered and reachable on the PPF; an invoice addressed to it is delivered.</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(255,69,58,0.08)', border: '1px solid rgba(255,69,58,0.3)'}}><span style={{color: '#f87171', fontWeight: 700, fontSize: '14px'}}>✕</span><span style={{color: '#f87171', fontWeight: 600, fontSize: '13px'}}>Disabled</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Registered but not currently reachable; addressing it would return a routing error (REJ_ADR).</span></div>
</div>

The listing goes through the connector's `directory-check-siren` endpoint, which returns the full lines with per-endpoint response mappings (ATGP, Yooz and Esker shapes are supported — including numeric reachability flags such as Esker’s `HasAssignedPlatform` 1/0 alongside true/false). When that endpoint isn't configured, the page **says so** rather than guessing — set it under [Configuration → System → e-directory](../configuration/system/edirectory.md). The processing-time directory check is unchanged; the older `directory-check-siret` endpoint is obsolete.

### Peppol directory \{#peppol-directory\}

Expanding a company card also queries the **public Peppol network** — no account needed. A *Peppol directory* group lists each registered **participant** of the company, with its name, its **registration date** and the **service provider that operates it** — the PA (e.g. Pennylane) with its Peppol seat id, resolved through the official **SML/SMP** discovery. The access-point and SMP URLs sit in the provider's tooltip.

Participants are found in two ways:

- **Business cards** of the [Peppol Directory](https://directory.peppol.eu) matching the SIREN.
- **Direct SML probes** of every identifier a French company can hold — publishing a business card is optional, and some providers do not. The probes cover the SIREN under schemes `0225` and `0002`, every address registered in the PPF directory (bare, suffixed, SIRET, routed) under `0225`, and the SIRET of each establishment under `0009`. A participant found this way shows **no business card** in place of its registration date.

| Column | Content |
|---|---|
| **Participant** | The Peppol participant identifier (ICD + value, e.g. `0225:80320631700015`). |
| **Plateforme (PA)** | The service provider operating the participant, with its seat id. When the SMP certificate cannot be read, the SMP host followed by *SMP non joignable*, the reason in the tooltip; `non résolu` with the reason when the SML gave no SMP. With *Resolve platform via SMP* = `N`, the SMP host. |
| **Enregistré le** | The participant's Peppol registration date — *no business card* for a participant found through the SML only. |

The lookup runs once for every open company card — including a card left open from a previous search — and is also available as `POST /api/peppol-lookup` for integrations (see the [API reference](/nomaubl/api-reference)). A participant with no reachable provider still lists its registration and name. The server log lists each unresolved participant with its reason. An outage of the Peppol Directory no longer hides the participants found through the SML.

The whole page is also available as a single call: `GET /api/e-directory/search?q=…` (or `POST` with `{q, peppol}`) returns the INSEE companies matching a name, SIREN or SIRET with head office and establishments, the PPF directory lines of each company and, with `peppol=true`, its Peppol participants.

---

## Network flows (firewall) \{#network-flows\}

Every E-Directory external call is made **server-side** — from the NomaUBL server, not the user's browser — so the firewall rules apply to the server's outbound traffic. Besides the PA connector, the destinations are:

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-fw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
  </defs>
  <rect x="20" y="150" width="200" height="100" rx="12" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="120" y="190" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NomaUBL server</text>
  <text x="120" y="212" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">outbound traffic only</text>
  <line x1="300" y1="20" x2="300" y2="380" stroke="#f87171" strokeWidth="1.4" strokeDasharray="6 4"/>
  <text x="300" y="396" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">firewall</text>
  <line x1="222" y1="200" x2="372" y2="52" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="30" width="604" height="44" rx="9" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="392" y="48" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Company search (INSEE)</text>
  <text x="392" y="65" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">recherche-entreprises.api.gouv.fr</text>
  <text x="966" y="57" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">HTTPS 443</text>
  <line x1="222" y1="200" x2="372" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="88" width="604" height="44" rx="9" fill="#0d1220" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="392" y="106" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Peppol Directory — business cards</text>
  <text x="392" y="123" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">directory.peppol.eu</text>
  <text x="966" y="115" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">HTTPS 443</text>
  <line x1="222" y1="200" x2="372" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="146" width="604" height="44" rx="9" fill="#0d1220" stroke="#4ade80" strokeWidth="1.2"/>
  <text x="392" y="164" fill="#4ade80" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SML — primary zone (OpenPeppol)</text>
  <text x="392" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*.participant.sml.prod.tech.peppol.org</text>
  <text x="966" y="173" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">DNS 53 · NAPTR</text>
  <line x1="222" y1="200" x2="372" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="204" width="604" height="44" rx="9" fill="#0d1220" stroke="#94a3b8" strokeWidth="1.2"/>
  <text x="392" y="222" fill="#94a3b8" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SML — fallback zone (former EC SML)</text>
  <text x="392" y="239" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">*.edelivery.tech.ec.europa.eu</text>
  <text x="966" y="231" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">DNS 53 · NAPTR</text>
  <line x1="222" y1="200" x2="372" y2="284" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="262" width="604" height="44" rx="9" fill="#0d1220" stroke="#fb923c" strokeWidth="1.2"/>
  <text x="392" y="280" fill="#fb923c" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Public resolvers — opt-in (Public DNS fallback = Y)</text>
  <text x="392" y="297" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">8.8.8.8 · 1.1.1.1</text>
  <text x="966" y="289" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">DNS 53 · UDP/TCP</text>
  <line x1="222" y1="200" x2="372" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-fw-arrow)"/>
  <rect x="376" y="320" width="604" height="44" rx="9" fill="#0d1220" stroke="#a78bfa" strokeWidth="1.2"/>
  <text x="392" y="338" fill="#a78bfa" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">SMP of each participant's platform — Resolve platform via SMP = Y</text>
  <text x="392" y="355" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">dynamic host, e.g. smp.pennylane.com</text>
  <text x="966" y="347" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">HTTPS 443</text>
</svg>

| Purpose | Destination | Port / Protocol |
|---|---|---|
| Company search (INSEE) | `recherche-entreprises.api.gouv.fr` | HTTPS 443 |
| Peppol directory (business cards) | `directory.peppol.eu` | HTTPS 443 |
| Peppol SML resolution — **primary zone** (OpenPeppol) | DNS NAPTR queries on `*.iso6523-actorid-upis.participant.sml.prod.tech.peppol.org` | DNS 53 via the server's resolver |
| Peppol SML resolution — **fallback zone** (former European Commission SML) | DNS NAPTR queries on `*.iso6523-actorid-upis.edelivery.tech.ec.europa.eu` | DNS 53 via the server's resolver |
| Public DNS resolvers — only with *Public DNS fallback* = `Y`, when the server's resolver answers nothing | `8.8.8.8`, `1.1.1.1` | DNS 53 (UDP and TCP) |
| Peppol SMP (provider resolution) — only with *Resolve platform via SMP* = `Y` | dynamic — the SMP host of each participant's platform (e.g. `smp.pennylane.com`) | HTTPS 443 |

What matters for the rules:

- **INSEE and `directory.peppol.eu` are fixed hostnames** — easy to whitelist. The INSEE entry also covers the invoice modal's client search and the [Fix buyer](./invoices.md#fix-buyer) search (same API).
- **The SML moved in 2026.** OpenPeppol took over the Service Metadata Locator and participant records now live in the `participant.sml.prod.tech.peppol.org` zone. NomaUBL queries it first and keeps the former `edelivery.tech.ec.europa.eu` zone as fallback. A DNS policy that only allowed the former zone must add the new one — otherwise most participants are no longer found.
- **The SML step is DNS only** — no HTTP. If the server already resolves public DNS through the corporate resolver, there is nothing to open. Some corporate resolvers drop or mangle NAPTR queries: let the corporate resolver forward NAPTR queries for both zones, or set **Public DNS fallback** to `Y` in the [e-directory settings](../configuration/system/edirectory.md#peppol-lookup) and allow outbound DNS (port 53, UDP and TCP) to `8.8.8.8` and `1.1.1.1`. The fallback is **off by default**. A *no such name* answer from the server's resolver is final — an unregistered identifier is not retried elsewhere — and a failing public resolver is dropped for the rest of the lookup.
- **The SMP host can't be whitelisted in advance** — it's whatever domain each buyer's platform uses (Pennylane, Esker, Yooz… one per participant), so provider resolution needs a broad *HTTPS 443 outbound* allowance to work generally. If that isn't acceptable, set **Resolve platform via SMP** to `N`: the lookup stops at the SML answer and the *Plateforme* column shows the SMP host (`smp.pennylane.com`), which already names the provider — only its official name and seat are missing.
- **Diagnosis.** When `directory.peppol.eu` is unreachable, the participants found by the SML probes are still listed. When nothing is found at all, the Peppol section shows *Peppol Directory unreachable (directory.peppol.eu) — check outbound HTTPS/firewall*.

---

## Result count

Above the results, a small label indicates the number of companies returned by INSEE for the query (e.g. `12 results`).

---

## Tips & best practices

- **Search by name first, then narrow down.** INSEE returns the legal entity (SIREN) and its establishments (SIRET) — picking the right SIRET avoids the common "right SIREN, wrong establishment" mistake when issuing invoices.
- **A disabled line is not always permanent.** A buyer may not yet be registered, or a specific identifier not yet enabled; ask them to register before re-trying. The directory state changes daily as more companies subscribe to the PPF.
- **Match the exact identifier, not just the SIREN.** The electronic-address lines show which form is actually reachable — a plain SIREN, a SIREN + SIRET, or a suffixed code. Address the invoice to an **enabled** line; a company can have several, only some enabled.
- **Cross-check the establishment state.** A ceased establishment cannot receive an invoice even if the company appears in the directory. Check the INSEE state on the establishment before trusting an electronic-address mapping.
- **If the lines don't appear, wire the endpoint.** An empty directory list with a "not configured" note means the connector has no `directory-check-siren` endpoint — set it under *Configuration → System → e-directory*, with the response mappings for your platform (ATGP, Yooz, Esker). The listing reads its array from the endpoint's **Response field** (`records` for Esker, `results`…).
