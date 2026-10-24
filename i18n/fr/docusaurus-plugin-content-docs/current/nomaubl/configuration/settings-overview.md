---
title: Vue d'ensemble des paramètres
description: "Organisation de la page Paramètres de NomaUBL : une navigation par besoin (Platform, Security, E-invoicing, E-reporting, Jobs & inbound, Views & UI, connecteurs API, SQL et FTP, Reference data), une recherche sur les libellés, aides et clés de tous les champs, des sections Advanced pour les réglages rarement modifiés, et les actions de l'en-tête."
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

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px'}}>
    <div><div style={{fontWeight: 700, fontSize: '15px'}}>Settings</div><div style={{opacity: 0.7}}>Platform, security, e-invoicing, e-reporting, jobs, connectors and reference data of this instance.</div></div>
    <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+ Add API</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+ Add SQL</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>+ Add List</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)'}}>Copy</span>
      <span style={{padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(239,68,68,0.5)', color: '#ef4444'}}>Remove</span>
    </div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: 'minmax(200px, 260px) 1fr', gap: '12px'}}>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px', lineHeight: 1.7}}>
      <div style={{padding: '4px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.7, marginBottom: '8px'}}>retention</div>
      <div style={{fontWeight: 700, opacity: 0.7}}>JOBS & INBOUND · 1 ▾</div>
      <div style={{padding: '4px 8px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)'}}>
        <b>Job defaults</b><br/>
        <span style={{opacity: 0.7, fontSize: '12px'}}>Quiet window, bulk send throttle, BIP watermarks…</span><br/>
        <span style={{color: '#4a9eff', fontSize: '11px'}}>↳ Processing log (days) (Retention) · Step timings (days) (Retention) · Job runs (days) (Retention)</span>
      </div>
      <div style={{fontWeight: 700, opacity: 0.4, marginTop: '6px'}}>PLATFORM ›</div>
      <div style={{fontWeight: 700, opacity: 0.4}}>E-INVOICING ›</div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px'}}>
      <div style={{display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap'}}>
        <b>Job defaults</b><span style={{opacity: 0.6, fontSize: '11px'}}>global</span>
        <span style={{flex: 1, minWidth: '120px', padding: '3px 8px', borderRadius: '6px', border: '1px solid rgba(148,163,184,0.3)', opacity: 0.6}}>Description (optional)</span>
        <span style={{padding: '3px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff'}}>Save</span>
      </div>
      <div style={{marginTop: '10px', opacity: 0.7}}>Quiet window · Bulk Send · Retention · BIP print queue</div>
    </div>
  </div>
</div>

---

## Une navigation par besoin

La navigation de gauche regroupe les entrées selon **ce que l'on veut régler**, et non selon leur stockage. Chaque domaine est replié à l'ouverture et affiche son nombre d'entrées ; il se déplie d'un clic, ou de lui-même quand une autre page ouvre l'une de ses entrées.

| Domaine | Entrées |
|---|---|
| **Platform** | Les onglets des [paramètres globaux](./system/global.md) — *Directories & environment*, *Processing*, *Server log*, *PDF rendering*, *Email*, *AI assistant*, *License* — puis les bases : [base NomaUBL](./database-connectors/nomaubl.md), [base JD Edwards](./database-connectors/jdedwards.md) et les autres connecteurs de base de données. |
| **Security** | *Authentication* (onglet global), [authentification unique (OIDC)](./system/oidc.md), [utilisateurs](./security/users.md) et [rôles](./security/roles.md). |
| **E-invoicing** | [E-invoicing](./system/einvoicing.md), [types de documents](./system/document-types.md), [catalogue des statuts](./system/statuses.md), [annuaire](./system/edirectory.md). |
| **E-reporting** | [E-reporting](./system/ereporting.md) et le catalogue des statuts de l'e-reporting. |
| **Jobs & inbound** | *Job defaults* (onglet global), [file d'impression JDE (BIP)](./system/fetch-invoices.md), [contrôles d'intégrité](./system/integrity-reports.md). |
| **Views & UI** | [Vues de liste](./list-views.md). |
| **API connectors** | Une entrée par [connecteur API](./api-connectors.md), avec le badge `api`. |
| **SQL connectors** | Une entrée par [connecteur SQL](./sql-connectors.md), avec le badge `sql`. |
| **FTP connectors** | *JD Edwards file transfer* et les autres [connecteurs FTP](./ftp-connectors.md), avec le badge `ftp`. |
| **Reference data** | Les [listes de référence](./reference-lists.md) (badge `list`) et les [listes personnalisées](./custom-lists.md) (badge `custom`). |

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
| **Add OIDC** · **Add integrity reports** | Affichés tant que l'instance n'a pas de modèle d'authentification unique ou de contrôles d'intégrité ; crée ce modèle. |
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
