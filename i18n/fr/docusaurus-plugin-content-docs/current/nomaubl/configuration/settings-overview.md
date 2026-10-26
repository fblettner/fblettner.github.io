---
title: Vue d'ensemble des paramètres
description: "Organisation de la page Paramètres de NomaUBL : une navigation par besoin (Platform, Security, E-invoicing, E-reporting, Jobs & inbound, Views & UI, connecteurs API, SQL et FTP, Reference data, Custom data), une recherche sur les libellés, aides et clés de tous les champs, des sections Advanced pour les réglages rarement modifiés, et les actions de l'en-tête."
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
  <text x="30" y="103" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche dans tous les champs</text>
  <text x="30" y="116" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellés, aides et clés</text>
  <line x1="200" y1="105.0" x2="248" y2="103" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Champs trouvés</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listés sous l'entrée</text>
  <line x1="200" y1="177.0" x2="254" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Domaines par besoin</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">repliés, avec leur nombre</text>
  <line x1="200" y1="267.0" x2="252" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1000" y="24" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de l'en-tête</text>
  <text x="1010" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouter, copier, supprimer</text>
  <line x1="1000" y1="41.0" x2="960" y2="41" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un onglet par entrée</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">onglet global seul</text>
  <line x1="1000" y1="137.0" x2="960" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section Advanced</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réglages rares, fermée</text>
  <line x1="1000" y1="317.0" x2="572" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#so-arrow)"/>
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

Chaque entrée affiche un libellé et une description d'une ligne ; les modèles système gardent leur nom technique, en petits caractères à côté du titre de l'éditeur (par exemple *Job defaults* · `global`). Une entrée globale n'ouvre **que son onglet** de l'éditeur global.

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
| **Add API** · **Add SQL** · **Add List** | Crée un connecteur API, un connecteur SQL ou une liste personnalisée. |
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
