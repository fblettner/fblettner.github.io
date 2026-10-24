---
title: Référence développeur
description: "La page Développeur de NomaUBL — tables et colonnes, clés de configuration, flux, analyse d'impact et API de l'instance — produite à la construction de l'application à partir du DDL de la base, des classes de configuration, des éditeurs de paramètres, des sources Java et du document OpenAPI."
keywords: [NomaUBL, développeur, dictionnaire des données, tables, colonnes, clés de configuration, flux, analyse d'impact, référence API, OpenAPI, Redoc, appels, DDL, F564230, F564231, F564235, F564237, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Référence développeur

La page **Développeur** répond aux questions de ceux qui maintiennent, étendent ou auditent NomaUBL : *que contient cette table, qui écrit cette colonne, où se modifie ce réglage et qui le lit, par quels flux passe ce statut, que renvoie cette API*. Tout son contenu est **produit à la construction de l'application**, à partir du DDL de la base, de la configuration des tables et des colonnes, des éditeurs de paramètres, des sources Java et du document OpenAPI : il correspond toujours à la version en service.

Accès : **Documentation → Développeur**.

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '12px', padding: '16px', margin: '24px 0', fontFamily: 'system-ui, sans-serif', fontSize: '13px'}}>
  <div style={{fontWeight: 700, fontSize: '15px'}}>Référence développeur</div>
  <div style={{opacity: 0.7, margin: '4px 0 12px'}}>Tables et colonnes, clés de configuration, flux, impact et API : produits à la construction à partir du DDL, des classes de configuration, des éditeurs de paramètres, des sources Java et du document OpenAPI.</div>
  <div style={{display: 'inline-flex', border: '1px solid rgba(148,163,184,0.3)', borderRadius: '8px', overflow: 'hidden'}}>
    <span style={{padding: '6px 14px', background: 'rgba(74,158,255,0.12)', color: '#4a9eff', fontWeight: 600}}>Tables</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Configuration</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Flux</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>Impact</span>
    <span style={{padding: '6px 14px', borderLeft: '1px solid rgba(148,163,184,0.3)'}}>API</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '220px 1fr', gap: '12px', marginTop: '12px'}}>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px', lineHeight: 1.8}}>
      <div style={{opacity: 0.6}}>Rechercher une table, une colonne, un commentaire…</div>
      <div><b>Cycle de vie de la facture</b></div>
      <div><span style={{color: '#4a9eff'}}>F564230 · Log / Archive</span><br/>F564231 · UBL Invoice Header<br/>F564235 · Lifecycle<br/>F564236 · Validation</div>
      <div><b>E-reporting</b> · <b>Notifications</b> · <b>Sécurité</b></div>
    </div>
    <div style={{border: '1px solid rgba(148,163,184,0.25)', borderRadius: '8px', padding: '8px'}}>
      <div><b>F564230</b> — Rôle · Clé primaire · Accesseur · Clé de configuration · Renommée en · Index · Écrite par · Lue par</div>
      <div style={{opacity: 0.6, margin: '6px 0'}}>Colonne · Nom remplacé · Type · Description · BT · Accesseur · Écrans · Flux · Écritures · Lectures</div>
      <div>FEDOC · — · NUMBER · Numéro de document · — · logDoc · E-Documents · Traitement · 3 · 41</div>
    </div>
  </div>
</div>

---

## Tables

Le dictionnaire des seize tables NomaUBL, regroupées par flux — *Cycle de vie de la facture*, *E-reporting*, *Notifications*, *Sécurité* — avec une recherche sur les noms de tables, les colonnes, les commentaires et les codes BT.

- **La fiche de table** donne le rôle et les notes issus du DDL, la clé primaire et les index, l'accesseur et sa clé de configuration, le nom actuellement configuré dans les [réglages de la base NomaUBL](../configuration/database-connectors/nomaubl.md) quand la table est renommée (*Renommée en*), et les flux qui l'écrivent et la lisent. Les tables de facture portent un bandeau cliquable du cycle de vie à travers les tables, de l'archive au journal des traitements.
- **La grille des colonnes** — colonne, nom remplacé, type, description (en ligne et `COMMENT ON` du DDL), code BT, accesseur, clé de configuration, écrans qui l'affichent, flux, nombre d'écritures et de lectures, nullable, défaut. Une ligne ouvre les références dans le code, écritures d'abord, regroupées par flux : traitement, import PA, statuts PA, factures reçues, e-reporting, entrée, tâches, notifications, authentification, API, écrans, base de données, ligne de commande. La grille est la table de données partagée ; sa vue figure dans l'éditeur des [vues de liste](../configuration/list-views.md).

La référence complète des tables est aussi publiée dans [Tables de base de données](./database-tables.md).

---

## Configuration

Chaque clé de configuration, avec **l'endroit où elle se modifie** et **le code qui la lit**. Les modèles sont listés à gauche, regroupés comme la [navigation des paramètres](../configuration/settings-overview.md) — réglages globaux, documents, modèles PDF, connecteurs API et SQL, e-invoicing, e-reporting, tâches et entrées… — avec leur nombre de clés et d'écarts. La grille présente les clés du modèle choisi :

| Colonne | Description |
|---|---|
| **Clé** | La clé de configuration. |
| **Libellé** | Le libellé du champ dans l'éditeur de paramètres. |
| **Modifiée dans** | Modèle, onglet et groupe du champ dans l'éditeur. |
| **Lue par** | Les flux dont le code lit la clé. |
| **Appels** | Nombre de lectures Java. Une ligne ouvre le champ de l'éditeur et le code. |
| **État** | *modifiable, lue* · *modifiable, jamais lue* · *lue, non modifiable*. |
| **Modèles** | Les modèles qui portent la clé. |
| **Aide** | Le texte d'aide du champ. |

Deux cases à cocher, exclusives l'une de l'autre, isolent les écarts : **Lues mais non modifiables** (une clé lue par le code qu'aucun écran ne propose) et **Modifiables mais jamais lues** (un champ sans effet). Les clés construites à l'exécution — `fetchAll.N.*`, `folder.N.*`, `filter.*` — ne figurent pas littéralement dans le code et apparaissent comme modifiables seulement.

---

## Flux

Une page courte par flux : **traiter un fichier**, **suivi des imports**, **récupération des statuts**, **e-reporting**, **dossiers surveillés**, **retraitement**. Chacune indique le déclencheur, la commande en ligne de commande, le module de journal, les tables touchées, les statuts écrits, les réglages lus et les étapes dans l'ordre. Choisir un flux à gauche pour le lire.

---

## Impact

Ce qu'atteint une modification. Le sélecteur procède par étapes :

1. le **type** — *Colonne*, *Clé de configuration* ou *Statut* ;
2. la **table** ou le **modèle** ;
3. l'**élément**, dans une liste large qui affiche d'abord le libellé.

Le résultat liste les **flux**, les **écrans**, les **points d'API** et les **commandes** que l'élément atteint, le champ d'éditeur qui permet de le modifier, puis le code. Les points d'API viennent d'une analyse des routes du serveur jusqu'à leur classe de traitement ; codes et libellés de statut viennent du [catalogue des statuts](../configuration/system/statuses.md) de l'instance.

---

## API

L'API de l'instance, présentée comme les autres vues :

- **groupes et étiquettes** à gauche avec leur nombre d'opérations — Invoices & documents, Processing, Platforms, Operations, Administration, Developer ;
- **une ligne par opération** dans la table de données partagée : méthode, chemin, résumé, étiquette, groupe, accès (*public*, *tout utilisateur connecté*, ou l'action qu'un rôle doit accorder) ;
- **une fenêtre par opération** avec la description, les paramètres et des exemples de requête et de réponse construits à partir des schémas, références résolues.

**Prise en main** ouvre l'introduction du document (session et jeton, droits, réponses, clé de facture, dates, pagination, exécutions en arrière-plan). **Ouvrir la référence publique (Redoc)** ouvre le même document dans Redoc, qui sert aussi les lecteurs extérieurs à l'application — voir la [référence API](/nomaubl/api-reference/) de ce site.

---

## Accès

Accorder **Développeur** dans le groupe Documentation de la page [Rôles](../configuration/security/roles.md). La page lit les fichiers produits à la construction et, pour le champ *Renommée en*, les noms de tables des réglages courants ; elle n'interroge pas les tables de facture.

---

## Conseils & bonnes pratiques

- **Consulter Impact avant de renommer une colonne ou de retirer un réglage.** Les flux et points d'API listés sont ceux à retester.
- **Revoir les écarts de la vue Configuration après une mise à jour.** Une clé *modifiable, jamais lue* est un champ à nettoyer ; une clé *lue, non modifiable* n'est accessible qu'en modifiant le fichier.
- **Faire lire les pages Flux à un nouvel arrivant** avant le code : chacune décrit une chaîne en une page.
