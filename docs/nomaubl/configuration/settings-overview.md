---
title: Settings Overview
description: "How the NomaUBL Settings page is organised — a navigation by intent (Platform, Security, E-invoicing, E-reporting, Jobs & inbound, Views & UI, API, SQL and FTP connectors, Reference data, Custom data), entries as cards, editor sections as step cards, a search over every field label, hint and key, Advanced folds for rarely used settings, and the header actions."
keywords: [NomaUBL, settings, configuration, navigation, search, platform, security, e-invoicing, e-reporting, jobs, connectors, reference data, advanced, JD Edwards, SAP, NetSuite, custom ERP]
---

# Settings Overview

The **Settings** page holds the configuration of the instance: platform, security, e-invoicing, e-reporting, jobs, connectors and reference data. Open it from **Settings**, at the bottom of the side menu; it is shown to users whose role grants the settings.

Documents, PDF templates, actions, notification rules and watched folders are not on this page: they have their own pages in the **Management** group of the menu (see [Documents](../management/documents.md) and [PDF templates](../management/pdf-templates.md)). The jobs themselves — polls, batch jobs, digest, auto-retry, lifecycle checks — are run and edited from [Scheduled jobs](../sync/scheduled-jobs/overview.md).

---

## At a glance

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="so-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="so-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="so-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="so-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="436" rx="14" fill="url(#so-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Platform, security, e-invoicing, e-reporting, jobs, connectors and reference data of this instance.</text>
  <rect x="646" y="76" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="679.5" y="90.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add API</text>
  <rect x="719" y="76" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="752.5" y="90.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add SQL</text>
  <rect x="792" y="76" width="73" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.5" y="90.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add List</text>
  <rect x="871" y="76" width="105" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="923.5" y="90.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add entry form</text>
  <rect x="982" y="76" width="41" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1002.5" y="90.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Copy</text>
  <rect x="1029" y="76" width="51" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1054.5" y="90.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Remove</text>
  <rect x="236" y="110" width="240" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="244" y="118" width="224" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="132.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Search a setting, a field, a template…</text>
  <text x="246" y="160" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLATFORM</text>
  <text x="464" y="160" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9  ›</text>
  <text x="246" y="180" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SECURITY</text>
  <text x="464" y="180" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4  ›</text>
  <text x="246" y="200" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">E-INVOICING</text>
  <text x="464" y="200" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">4  ▾</text>
  <rect x="244" y="208" width="224" height="36" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="216.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="229.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⌕</text>
  <text x="280" y="223" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Directory lookup</text>
  <text x="280" y="236" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">PPF directory check before sending, INS…</text>
  <rect x="244" y="249" width="224" height="36" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="252" y="257.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="270.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="264" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">E-invoicing</text>
  <text x="280" y="277" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Platform connection, send mode, validat…</text>
  <rect x="244" y="290" width="224" height="36" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="298.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="311.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="305" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Document types</text>
  <text x="280" y="318" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">B2B, B2BINT, B2C, B2G, OUTOFSCOPE: labe…</text>
  <rect x="244" y="331" width="224" height="36" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="339.0" width="20" height="20" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="262.0" y="352.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="280" y="346" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Status catalogue</text>
  <text x="280" y="359" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Invoice status codes, labels, groups an…</text>
  <text x="246" y="384" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">E-REPORTING</text>
  <text x="464" y="384" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">2  ›</text>
  <text x="246" y="403" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JOBS &amp; INBOUND</text>
  <text x="464" y="403" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3  ›</text>
  <text x="246" y="422" fill="#64748b" fontSize="8.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">API CONNECTORS</text>
  <text x="464" y="422" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">3  ›</text>
  <rect x="488" y="110" width="596" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="132" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">E-invoicing</text>
  <text x="576" y="132" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">e-invoicing</text>
  <text x="648" y="132" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">E-Invoicing Settings — references the pa-default api-connector</text>
  <rect x="1018" y="118" width="54" height="22" rx="5" fill="url(#so-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="132.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <line x1="488" y1="146" x2="1084" y2="146" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="166" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Scope</text>
  <rect x="538" y="154" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="548" y="168.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Default (e-invoicing) ▾</text>
  <rect x="914" y="154" width="72" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="924" y="168.5" fill="#475569" fontSize="9" fontFamily="ui-monospace, monospace">kco code</text>
  <rect x="992" y="154" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032.0" y="168.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add override</text>
  <rect x="488" y="182" width="596" height="64" fill="rgba(255,255,255,0.015)"/>
  <rect x="500" y="192" width="131" height="44" rx="8" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1.3"/>
  <rect x="508" y="199" width="16" height="16" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="516.0" y="210.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="530" y="210.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UBL VALIDATION</text>
  <text x="509" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">%APP_HOME%/%ENV%/u…</text>
  <line x1="632" y1="214.0" x2="644" y2="214.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#so-flow)"/>
  <rect x="647" y="192" width="131" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="655" y="199" width="16" height="16" rx="5" fill="rgba(168,85,247,0.14)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="663.0" y="210.5" fill="#c084fc" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⇄</text>
  <text x="677" y="210.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PA CONNECTION</text>
  <text x="656" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">pa-default</text>
  <line x1="779" y1="214.0" x2="791" y2="214.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#so-flow)"/>
  <rect x="794" y="192" width="131" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="802" y="199" width="16" height="16" rx="5" fill="rgba(255,159,10,0.14)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="810.0" y="210.5" fill="#fb923c" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">≡</text>
  <text x="824" y="210.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FTP/SFTP</text>
  <text x="803" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">API · 22</text>
  <line x1="926" y1="214.0" x2="938" y2="214.0" stroke="#475569" strokeWidth="1.4" markerEnd="url(#so-flow)"/>
  <rect x="941" y="192" width="131" height="44" rx="8" fill="#0f1626" stroke="#334155" strokeWidth="1"/>
  <rect x="949" y="199" width="16" height="16" rx="5" fill="rgba(50,215,75,0.14)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="957.0" y="210.5" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰</text>
  <text x="971" y="210.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUS</text>
  <text x="950" y="228" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">pa-default · 100</text>
  <line x1="488" y1="246" x2="1084" y2="246" stroke="#1f2937" strokeWidth="1"/>
  <text x="502" y="270" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UBL XSLT TRANSFORMS</text>
  <text x="502" y="296" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">XSLT Directory</text>
  <rect x="628" y="282" width="436" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="296.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">%APP_HOME%/%ENV%/ubl</text>
  <text x="502" y="330" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MANUAL / TEMPLATE-LESS INVOICE DEFAULTS</text>
  <text x="502" y="356" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Activity (FEAA10)</text>
  <rect x="628" y="342" width="436" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="356.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="502" y="384" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Type (typePiece)</text>
  <rect x="628" y="370" width="436" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="638" y="384.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="20" y="112" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Search every field</text>
  <text x="30" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">labels, hints and keys</text>
  <line x1="200" y1="129.0" x2="244" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Areas by intent</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">collapsed, with their count</text>
  <line x1="200" y1="203.0" x2="242" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One card per entry</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">icon + what it holds</text>
  <line x1="200" y1="287.0" x2="244" y2="267" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Collapsed area</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">opens on click</text>
  <line x1="200" y1="417.0" x2="242" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Header actions</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">add, copy, remove a template</text>
  <line x1="1120" y1="87.0" x2="1080" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">status bar reports the result</text>
  <line x1="1120" y1="167.0" x2="1072" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections as step cards</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">state = first values set</text>
  <line x1="1120" y1="247.0" x2="1064" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Selected section</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its fields below the cards</text>
  <line x1="1120" y1="347.0" x2="1064" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
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

Inside an open area, each entry is a **card**: an icon, the entry's name (with its badge for connectors and lists) and one line saying what it holds; the selected entry is highlighted. The system templates keep their technical name, shown in small type next to the editor title (for example *Job defaults* · `global`). A global entry opens **only its tab** of the global editor.

---

## Sections as step cards \{#section-cards\}

An editor with several sections shows them as **cards across the top**, linked like the steps of a [connector](./api-connectors.md): [E-invoicing](./system/einvoicing.md), [E-reporting](./system/ereporting.md), [Directory lookup](./system/edirectory.md), the [SQL connectors](./sql-connectors.md), the [NomaUBL database](./database-connectors/nomaubl.md) and the [JD Edwards database](./database-connectors/jdedwards.md). Each card gives the section's name and its state: the first one or two values set among its fields (a password or token shows as `••••`, never its value), or `—` when nothing is set. Clicking a card shows its fields below the cards; the values are the same whichever card is open, and **Save** saves the whole template.

An editor with a single section — a global entry, which opens only its tab — shows its fields directly, without cards.

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
| **Add API** · **Add SQL** · **Add List** · **Add entry form** | Create an API connector, a SQL connector, a custom list or an [entry form](./entry-forms.md) of the invoice editor. |
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
