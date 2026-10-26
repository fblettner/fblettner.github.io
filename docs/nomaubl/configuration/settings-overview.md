---
title: Settings Overview
description: "How the NomaUBL Settings page is organised — a navigation by intent (Platform, Security, E-invoicing, E-reporting, Jobs & inbound, Views & UI, API, SQL and FTP connectors, Reference data, Custom data), a search over every field label, hint and key, Advanced folds for rarely used settings, and the header actions."
keywords: [NomaUBL, settings, configuration, navigation, search, platform, security, e-invoicing, e-reporting, jobs, connectors, reference data, advanced, JD Edwards, SAP, NetSuite, custom ERP]
---

# Settings Overview

The **Settings** page holds the configuration of the instance: platform, security, e-invoicing, e-reporting, jobs, connectors and reference data. Open it from **Settings**, at the bottom of the side menu; it is shown to users whose role grants the settings.

Documents, PDF templates, actions, notification rules and watched folders are not on this page: they have their own pages in the **Management** group of the menu (see [Documents](../management/documents.md) and [PDF templates](../management/pdf-templates.md)). The jobs themselves — polls, batch jobs, digest, auto-retry, lifecycle checks — are run and edited from [Scheduled jobs](../sync/scheduled-jobs/overview.md).

---

## At a glance

<svg viewBox="0 0 1200 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="so-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="so-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="so-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="364" rx="14" fill="url(#so-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Platform, security, e-invoicing, e-reporting, jobs, connectors and reference data of this instance.</text>
  <rect x="907" y="30" width="53" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="933.5" y="44.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="859" y="30" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.0" y="44.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <rect x="777" y="30" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="815.0" y="44.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add List</text>
  <rect x="701" y="30" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="736.0" y="44.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add SQL</text>
  <rect x="625" y="30" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="44.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add API</text>
  <rect x="240" y="84" width="230" height="280" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="92" width="214" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="106.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">🔍 retention</text>
  <text x="252" y="134" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOBS &amp; INBOUND   1  ▾</text>
  <rect x="246" y="142" width="218" height="62" rx="5" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="254" y="160" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Job defaults</text>
  <text x="254" y="174" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Quiet window, bulk send throttle, BIP…</text>
  <text x="254" y="192" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">↳ Processing log (days) (Retention) · …</text>
  <text x="252" y="228" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLATFORM  ›</text>
  <text x="252" y="247" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SECURITY  ›</text>
  <text x="252" y="266" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">E-INVOICING  ›</text>
  <text x="252" y="285" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">E-REPORTING  ›</text>
  <text x="252" y="304" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VIEWS &amp; UI  ›</text>
  <text x="252" y="323" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">API CONNECTORS  ›</text>
  <text x="252" y="342" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REFERENCE DATA  ›</text>
  <rect x="482" y="84" width="478" height="280" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="106" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Job defaults</text>
  <text x="582" y="106" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">global</text>
  <rect x="632" y="92" width="258" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Description (optional)</text>
  <rect x="898" y="92" width="52" height="22" rx="5" fill="url(#so-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="106.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Save</text>
  <text x="496" y="140" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RETENTION</text>
  <text x="496" y="168" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Processing log (days)</text>
  <rect x="672" y="154" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="682" y="168.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <text x="496" y="198" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Step timings (days)</text>
  <rect x="672" y="184" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="682" y="198.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">30</text>
  <text x="496" y="228" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Job runs (days)</text>
  <rect x="672" y="214" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="682" y="228.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">90</text>
  <text x="496" y="258" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Notifications (days)</text>
  <rect x="672" y="244" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="682" y="258.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">0 = keep</text>
  <text x="496" y="294" fill="#64748b" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">▸ ADVANCED</text>
  <rect x="20" y="88" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="103" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search every field</text>
  <text x="30" y="116" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">labels, hints and keys</text>
  <line x1="200" y1="105.0" x2="248" y2="103" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Matching fields</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listed under the entry</text>
  <line x1="200" y1="177.0" x2="254" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Areas by intent</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">collapsed, with their count</text>
  <line x1="200" y1="267.0" x2="252" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1000" y="24" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Header actions</text>
  <text x="1010" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add, copy, remove a template</text>
  <line x1="1000" y1="41.0" x2="960" y2="41" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One tab per entry</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">global tabs open alone</text>
  <line x1="1000" y1="137.0" x2="960" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Advanced fold</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rare settings, closed by default</text>
  <line x1="1000" y1="317.0" x2="572" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
</svg>

---

## Navigation by intent

The navigation on the left groups the entries by **what you want to set**, not by storage. Every area starts collapsed and shows its entry count; an area opens on click, and opens by itself when another page links to one of its entries.

| Area | Entries |
|---|---|
| **Platform** | The [global settings](./system/global.md) tabs — *Directories & environment*, *Processing*, *Server log*, *PDF rendering*, *Email*, *AI assistant*, *License* — then **Promotion targets** (the instances the [Promotion](../management/promotion.md#targets) page can promote to) and the databases: [NomaUBL database](./database-connectors/nomaubl.md), [JD Edwards database](./database-connectors/jdedwards.md) and any other database connector. |
| **Security** | *Authentication* (global tab), [Single sign-on (OIDC)](./system/oidc.md), [Users](./security/users.md) and [Roles](./security/roles.md). |
| **E-invoicing** | [E-invoicing](./system/einvoicing.md), [Document types](./system/document-types.md), [Status catalogue](./system/statuses.md), [Directory lookup](./system/edirectory.md). |
| **E-reporting** | [E-reporting](./system/ereporting.md) and the *E-reporting status catalogue*. |
| **Jobs & inbound** | *Job defaults* (global tab), [JDE print queue (BIP)](./system/fetch-invoices.md), [Integrity checks](./system/integrity-reports.md). |
| **Views & UI** | [List views](./list-views.md) and [Navigation & lists](./default-periods.md#default-periods) (global tab *Periods*: start page, navigation auto collapse, default periods, rows per page and rows loaded of the lists, dashboard cache). |
| **API connectors** | One entry per [API connector](./api-connectors.md), with the `api` badge. |
| **SQL connectors** | One entry per [SQL connector](./sql-connectors.md), with the `sql` badge. |
| **FTP connectors** | *JD Edwards file transfer* and the other [FTP connectors](./ftp-connectors.md), with the `ftp` badge. |
| **Reference data** | The [reference lists](./reference-lists.md) shipped with NomaUBL, with the `list` badge. |
| **Custom data** | The [custom lists](./custom-lists.md), with the `custom` badge. |

Each entry shows a label and a one-line description; the system templates keep their technical name, shown in small type next to the editor title (for example *Job defaults* · `global`). A global entry opens **only its tab** of the global editor.

---

## Search

The box above the navigation — *Search a setting, a field, a template…* — matches the labels and descriptions of the entries, the template names, and **every field label, hint and key** of the editors. Areas with a match open, and under each entry a line says which fields matched, with their group (up to three):

> ↳ Processing log (days) (Retention) · Step timings (days) (Retention) · Job runs (days) (Retention)

Searching `retention`, `smtp` or `maxThreads` therefore lands on the right tab without knowing which template holds the setting.

---

## Advanced folds

Settings rarely changed are folded under an **Advanced** line, closed by default — for example the Ghostscript command of the *Processing* tab, or the TLS and corporate-proxy settings of the *AI assistant* tab (*Advanced — TLS / corporate proxy*). Open the fold to edit them; their values are kept whether the fold is open or not.

---

## Header and editor actions

| Action | Effect |
|---|---|
| **Add API** · **Add SQL** · **Add List** | Create an API connector, a SQL connector or a custom list. |
| **Add OIDC** · **Add integrity reports** · **Add promotion targets** | Shown while the instance has no single sign-on, integrity-check or promotion-target template; creates it. |
| **Copy** | Duplicate the selected template under a new name. Not available on the system templates. |
| **Remove** | Delete the selected template. Not available on the system templates. |
| **Description (optional)** | Free description of the template, shown under its entry. |
| **Save** | Save the template being edited. The status bar at the bottom of the editor reports the result. |

Every save is recorded in [File versions](../management/file-versions.md), and the connectors, lists and settings templates — except the global settings and single sign-on — can be carried to another environment with [Promotion](../management/promotion.md).

---

## Tips & best practices

- **Search before browsing.** The field index finds a setting from any word of its label or hint.
- **Leave the Advanced folds closed** unless the default no longer fits — they hold settings that rarely need changing.
- **Name custom connectors and lists clearly.** Their name is the label of their entry in the navigation.
