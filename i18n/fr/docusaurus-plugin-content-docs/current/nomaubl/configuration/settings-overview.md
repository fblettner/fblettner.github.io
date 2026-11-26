---
title: Vue d'ensemble des paramètres
description: "Organisation de la page Paramètres de NomaUBL : une navigation par besoin (Platform, Security, E-invoicing, E-reporting, Jobs & inbound, Views & UI, connecteurs API, SQL et FTP, Reference data, Custom data), des entrées présentées en cartes, des sections d'éditeur en cartes d'étape, une recherche sur les libellés, aides et clés de tous les champs, des sections Advanced pour les réglages rarement modifiés, et les actions de l'en-tête."
keywords: [NomaUBL, paramètres, configuration, navigation, recherche, plateforme, sécurité, e-invoicing, e-reporting, tâches, connecteurs, données de référence, avancé, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Vue d'ensemble des paramètres

La page **Paramètres** porte la configuration de l'instance : plateforme, sécurité, e-invoicing, e-reporting, tâches, connecteurs et données de référence. Elle s'ouvre depuis **Paramètres**, en bas du menu latéral, pour les utilisateurs dont le rôle accorde l'accès aux paramètres.

Les documents, modèles PDF, actions, règles de notification et dossiers surveillés ne sont pas sur cette page : ils ont leur propre page dans le groupe **Gestion** du menu (voir [Documents](../management/documents.md) et [Modèles PDF](../management/pdf-templates.md)). Les tâches elles-mêmes — imports, tâches batch, synthèse quotidienne, relance automatique, contrôles du cycle de vie — se lancent et se modifient depuis les [Tâches planifiées](../sync/scheduled-jobs/overview.md).

:::info[Libellés en anglais]
La navigation et les éditeurs de paramètres restent en anglais dans l'application, quelle que soit la langue choisie. Les libellés cités sur cette page sont donc ceux affichés à l'écran.
:::

---

## Vue d'ensemble

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
  <text x="30" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche sur tous les champs</text>
  <text x="30" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellés, aides et clés</text>
  <line x1="200" y1="129.0" x2="244" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="186" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Domaines par intention</text>
  <text x="30" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliés, avec leur nombre</text>
  <line x1="200" y1="203.0" x2="242" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par entrée</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">icône + ce qu'elle contient</text>
  <line x1="200" y1="287.0" x2="244" y2="267" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Domaine replié</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'ouvre au clic</text>
  <line x1="200" y1="417.0" x2="242" y2="419" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de l'en-tête</text>
  <text x="1130" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouter, copier, supprimer</text>
  <line x1="1120" y1="87.0" x2="1080" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">résultat dans la barre d'état</text>
  <line x1="1120" y1="167.0" x2="1072" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections en cartes d'étape</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">état = premières valeurs saisies</text>
  <line x1="1120" y1="247.0" x2="1064" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section choisie</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses champs sous les cartes</text>
  <line x1="1120" y1="347.0" x2="1064" y2="296" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
</svg>

---

## Une navigation par besoin

La navigation de gauche regroupe les entrées selon **ce que l'on veut régler**, et non selon leur stockage. Chaque domaine est replié à l'ouverture et affiche son nombre d'entrées ; il se déplie d'un clic, ou de lui-même quand une autre page ouvre l'une de ses entrées.

| Domaine | Entrées |
|---|---|
| **Platform** | Les onglets des [paramètres globaux](./system/global.md) — *Directories & environment*, *Processing*, *Server log*, *PDF rendering*, *Email*, *AI assistant*, *License* — puis **Promotion targets** (les instances vers lesquelles la page [Promotion](../management/promotion.md#targets) peut promouvoir) et les bases : [base NomaUBL](./database-connectors/nomaubl.md), [base JD Edwards](./database-connectors/jdedwards.md) et les autres connecteurs de base de données. |
| **Security** | *Authentication* (onglet global), [authentification unique (OIDC)](./system/oidc.md), [utilisateurs](./security/users.md) et [rôles](./security/roles.md). |
| **E-invoicing** | [E-invoicing](./system/einvoicing.md), [types de documents](./system/document-types.md), [catalogue des statuts](./system/statuses.md), [annuaire](./system/edirectory.md). |
| **E-reporting** | [E-reporting](./system/ereporting.md) et le catalogue des statuts de l'e-reporting. |
| **Jobs & inbound** | *Job defaults* (onglet global), [file d'impression JDE (BIP)](./system/fetch-invoices.md), [contrôles d'intégrité](./system/integrity-reports.md). |
| **Views & UI** | [Vues de liste](./list-views.md) et [Navigation & lists](./default-periods.md#default-periods) (onglet global *Periods* : page de démarrage, repli automatique de la navigation, périodes par défaut, lignes par page et lignes chargées des listes, cache des tableaux de bord). |
| **API connectors** | Une entrée par [connecteur API](./api-connectors.md), avec le badge `api`. |
| **SQL connectors** | Une entrée par [connecteur SQL](./sql-connectors.md), avec le badge `sql`. |
| **FTP connectors** | *JD Edwards file transfer* et les autres [connecteurs FTP](./ftp-connectors.md), avec le badge `ftp`. |
| **Reference data** | Les [listes de référence](./reference-lists.md) livrées avec NomaUBL, avec le badge `list`. |
| **Custom data** | Les [listes personnalisées](./custom-lists.md), avec le badge `custom`. |

Dans un domaine ouvert, chaque entrée est une **carte** : une icône, le nom de l'entrée (avec son badge pour les connecteurs et les listes) et une ligne qui résume son contenu ; l'entrée sélectionnée est mise en évidence. Les modèles système gardent leur nom technique, en petits caractères à côté du titre de l'éditeur (par exemple *Job defaults* · `global`). Une entrée globale n'ouvre **que son onglet** de l'éditeur global.

---

## Sections en cartes d'étape \{#section-cards\}

Un éditeur qui comporte plusieurs sections les présente sous forme de **cartes alignées en haut**, reliées comme les étapes d'un [connecteur](./api-connectors.md) : [E-invoicing](./system/einvoicing.md), [E-reporting](./system/ereporting.md), [Directory lookup](./system/edirectory.md), les [connecteurs SQL](./sql-connectors.md), la [base NomaUBL](./database-connectors/nomaubl.md) et la [base JD Edwards](./database-connectors/jdedwards.md). Chaque carte indique le nom de la section et son état : les une ou deux premières valeurs renseignées parmi ses champs (un mot de passe ou un jeton apparaît sous la forme `••••`, jamais en clair), ou `—` si rien n'est renseigné. Un clic sur une carte affiche ses champs sous les cartes ; les valeurs restent les mêmes quelle que soit la carte ouverte, et **Save** enregistre le modèle entier.

Un éditeur à section unique — une entrée globale, qui n'ouvre que son onglet — affiche directement ses champs, sans cartes.

---

## Recherche

Le champ placé au-dessus de la navigation — *Search a setting, a field, a template…* — porte sur les libellés et descriptions des entrées, les noms de modèles et **les libellés, aides et clés de tous les champs** des éditeurs. Les domaines concernés se déplient, et une ligne sous chaque entrée indique les champs trouvés, avec leur groupe (trois au plus) :

> ↳ Processing log (days) (Retention) · Step timings (days) (Retention) · Job runs (days) (Retention)

Une recherche sur `retention`, `smtp` ou `maxThreads` mène ainsi au bon onglet sans savoir quel modèle porte le réglage.

---

## Sections Advanced

Les réglages rarement modifiés sont repliés sous une ligne **Advanced**, fermée par défaut : par exemple la commande Ghostscript de l'onglet *Processing*, ou les réglages TLS et proxy d'entreprise de l'onglet *AI assistant* (*Advanced — TLS / corporate proxy*). Il suffit de déplier la section pour les modifier ; leurs valeurs sont conservées, section ouverte ou fermée.

---

## Actions de l'en-tête et de l'éditeur

| Action | Effet |
|---|---|
| **Add API** · **Add SQL** · **Add List** · **Add entry form** | Crée un connecteur API, un connecteur SQL, une liste personnalisée ou un [formulaire de saisie](./entry-forms.md) de l'éditeur de facture. |
| **Add OIDC** · **Add integrity reports** · **Add promotion targets** | Affichés tant que l'instance n'a pas de modèle d'authentification unique, de contrôles d'intégrité ou d'instances de promotion ; crée ce modèle. |
| **Copy** | Duplique le modèle sélectionné sous un nouveau nom. Indisponible sur les modèles système. |
| **Remove** | Supprime le modèle sélectionné. Indisponible sur les modèles système. |
| **Description (optional)** | Description libre du modèle, affichée sous son entrée. |
| **Save** | Enregistre le modèle en cours de modification. La barre d'état en bas de l'éditeur indique le résultat. |

Chaque enregistrement est conservé dans les [versions de fichiers](../management/file-versions.md), et les connecteurs, listes et modèles de réglages — hors paramètres globaux et authentification unique — se transportent vers un autre environnement par la [promotion](../management/promotion.md).

---

## Conseils & bonnes pratiques

- **Chercher avant de parcourir.** L'index des champs retrouve un réglage à partir de n'importe quel mot de son libellé ou de son aide.
- **Laisser les sections Advanced fermées** tant que la valeur par défaut convient : elles portent des réglages rarement modifiés.
- **Nommer clairement les connecteurs et listes personnalisés.** Leur nom sert de libellé à leur entrée dans la navigation.
