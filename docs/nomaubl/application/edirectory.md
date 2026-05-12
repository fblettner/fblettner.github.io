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

  <rect x="240" y="156" width="540" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="177" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NAME · SIREN · SIRET · ADDRESS · STATE · PPF DIRECTORY</text>

  <rect x="240" y="194" width="540" height="48" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="213" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">ACME Manufacturing</text>
  <text x="252" y="231" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">123 456 789 · 12345678900012 · 12 rue de Rivoli, 75001 Paris</text>
  <rect x="612" y="200" width="80" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="652" y="213" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <rect x="700" y="200" width="74" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="737" y="213" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">✓ Reachable</text>

  <rect x="240" y="246" width="540" height="48" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="265" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">ACME Logistics</text>
  <text x="252" y="283" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">123 456 789 · 12345678900037 · 8 av. du Général Leclerc, 92100 Boulogne</text>
  <rect x="612" y="252" width="80" height="18" rx="9" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="652" y="265" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Active</text>
  <rect x="700" y="252" width="74" height="18" rx="9" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="737" y="265" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Not reach.</text>

  <rect x="240" y="298" width="540" height="48" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="317" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">ACME Old SARL</text>
  <text x="252" y="335" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">123 456 789 · 12345678900029 · 4 rue Lafayette, 75009 Paris</text>
  <rect x="608" y="304" width="84" height="18" rx="9" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="650" y="317" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Closed</text>
  <rect x="700" y="304" width="74" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="737" y="317" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">— skipped</text>

  <line x1="240" y1="364" x2="780" y2="364" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="384" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 results · INSEE registry</text>

  <text x="240" y="416" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">INSEE registry is queried first (free public API). The PPF directory check runs on each match using the credentials configured under Configuration → System → e-directory.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One search field</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">name · SIREN · SIRET — auto-detected</text>
  <line x1="200" y1="115" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="820" y="200" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PPF reachable badge</text>
  <text x="830" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Reachable / Not / Closed</text>
  <line x1="820" y1="216" x2="780" y2="212" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>

  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">INSEE administrative state</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Active / Closed — skip closed</text>
  <line x1="200" y1="316" x2="240" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-pg-arrow)"/>
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

The two lookups happen in sequence: INSEE first to populate the rows, then a parallel PPF check per row. The user sees the table fill in two passes.

---

## Search section

A single input + button at the top of the page.

| Element | Behaviour |
|---|---|
| **Search field** | Free-text query: company name, partial name, SIREN, SIRET, or any combination. Press **Enter** or click **Search** to submit. |
| **Search** button | Triggers the INSEE lookup. Disabled while a search is in progress and when the field is empty. |

The query is sent to `recherche-entreprises.api.gouv.fr` server-side; the API returns matching companies with their full establishment data.

---

## Results table

After the search, the table populates with one row per match. Each row corresponds to either a SIREN (the legal entity) or a SIRET (a specific establishment of the entity).

| Column | Description |
|---|---|
| **Type** | Coloured badge — `SIREN` (blue, the legal entity) or `SIRET` (grey, a specific establishment). |
| **Identifier** | The 9-digit SIREN or 14-digit SIRET. |
| **Name** | Legal name (`nom_raison_sociale`). |
| **Address** | Full postal address of the establishment. |
| **State** | `Active` (green) when the establishment is administratively active; `C` (red) when ceased. |
| **Directory** | Result of the PPF directory check — see below. |

### Directory check states

The Directory column is populated automatically right after the search lands — one PPF call per row. While calls are in flight, rows display a spinner. Each row eventually resolves to one of:

<div style={{display: 'flex', flexDirection: 'column', gap: '6px', margin: '14px 0'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(50,215,75,0.08)', border: '1px solid rgba(50,215,75,0.3)'}}><span style={{color: '#4ade80', fontWeight: 700, fontSize: '14px'}}>✓</span><span style={{color: '#4ade80', fontWeight: 600, fontSize: '13px'}}>Reachable</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Registered on the PPF, ready to receive electronic invoices.</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(255,69,58,0.08)', border: '1px solid rgba(255,69,58,0.3)'}}><span style={{color: '#f87171', fontWeight: 700, fontSize: '14px'}}>✗</span><span style={{color: '#f87171', fontWeight: 600, fontSize: '13px'}}>Not found</span><span style={{opacity: 0.7, fontSize: '12px'}}>— Not in the PPF directory; an invoice would return a routing error (REJ_ADR).</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(255,159,10,0.08)', border: '1px solid rgba(255,159,10,0.3)'}}><span style={{color: '#fb923c', fontWeight: 700, fontSize: '14px'}}>⚠</span><span style={{color: '#fb923c', fontWeight: 600, fontSize: '13px'}}>Error</span><span style={{opacity: 0.7, fontSize: '12px'}}>— The PPF call failed (network, credentials). The API message is shown next to the icon.</span></div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 12px', borderRadius: '6px', background: 'rgba(120,120,120,0.08)', border: '1px solid rgba(255,255,255,0.1)'}}><span style={{opacity: 0.6, fontSize: '14px'}}>⟳</span><span style={{opacity: 0.6, fontWeight: 600, fontSize: '13px'}}>Loading</span><span style={{opacity: 0.7, fontSize: '12px'}}>— PPF call in flight; the row will resolve to one of the states above.</span></div>
</div>

---

## Result count

Above the table, a small label indicates the number of results returned by INSEE for the query (e.g. `12 results`).

---

## Tips & best practices

- **Search by name first, then narrow down.** INSEE returns the legal entity (SIREN) and its establishments (SIRET) — picking the right SIRET avoids the common "right SIREN, wrong establishment" mistake when issuing invoices.
- **A red Not found is not always permanent.** A buyer may not yet be registered on the PPF; ask them to register before re-trying. The directory state changes daily as more companies subscribe to the PPF.
- **Cross-check the active state.** A `Ceased` establishment cannot receive an invoice even if it appears in the PPF directory. Always check the State column before trusting an electronic-address mapping.
- **For batch lookups, prefer the API.** The page does one search at a time. To validate a directory of customers in one pass, call `/api/insee-search` and `/api/check-directory` directly — see *References → API Reference* for the schemas.
- **A directory error often means a credentials issue.** Repeated `Error` states on rows that should resolve typically come from misconfigured PPF credentials in *Configuration → System → e-directory* — fix them there before rerunning a search.
