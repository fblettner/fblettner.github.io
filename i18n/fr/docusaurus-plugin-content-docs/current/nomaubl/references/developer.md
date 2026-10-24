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

<svg viewBox="0 0 1200 412" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dv-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dv-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dv-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="362" rx="14" fill="url(#dv-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Référence développeur</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tables et colonnes, clés de configuration, flux, impact et API — produits à la construction.</text>
  <rect x="240" y="80" width="296" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <line x1="297" y1="85" x2="297" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="345.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <line x1="393" y1="85" x2="393" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="416.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Flux</text>
  <line x1="439" y1="85" x2="439" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="467.5" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Impact</text>
  <line x1="496" y1="85" x2="496" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="516.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <rect x="240" y="116" width="200" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="124" width="184" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="138.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">🔍 Table, colonne…</text>
  <text x="252" y="166" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CYCLE DE VIE FACTURE</text>
  <rect x="246" y="173" width="188" height="19" rx="4" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="252" y="186" fill="#4a9eff" fontSize="9.5" fontFamily="ui-monospace, monospace">F564230 · Log / Archive</text>
  <text x="252" y="208" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F564231 · UBL Invoice Header</text>
  <text x="252" y="230" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F564235 · Lifecycle</text>
  <text x="252" y="252" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">F564236 · Validation</text>
  <text x="252" y="282" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">E-REPORTING  ›</text>
  <text x="252" y="304" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOTIFICATIONS  ›</text>
  <text x="252" y="326" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SÉCURITÉ  ›</text>
  <rect x="452" y="116" width="508" height="72" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="464" y="136" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564230</text>
  <text x="532" y="136" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Journal / archive — une ligne par document traité</text>
  <text x="464" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACCESSEUR</text>
  <text x="464" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">logDoc</text>
  <text x="591.0" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RENOMMÉE EN</text>
  <text x="591.0" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="718.0" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRITE PAR</text>
  <text x="718.0" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Traitement</text>
  <text x="845.0" y="158" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LUE PAR</text>
  <text x="845.0" y="176" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">6</text>
  <rect x="452" y="196" width="508" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <text x="532" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="602" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="752" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BT</text>
  <text x="792" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRIT.</text>
  <text x="842" y="211.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LECT.</text>
  <rect x="452" y="224" width="508" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEDOC</text>
  <text x="532" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NUMBER</text>
  <text x="602" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Numéro de document</text>
  <text x="752" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">3</text>
  <text x="842" y="239.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">41</text>
  <rect x="452" y="252" width="508" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEDCT</text>
  <text x="532" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NCHAR(2)</text>
  <text x="602" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Type de document</text>
  <text x="752" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">3</text>
  <text x="842" y="267.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">38</text>
  <rect x="452" y="280" width="508" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEUPMJ</text>
  <text x="532" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NUMBER</text>
  <text x="602" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Date de mise à jour</text>
  <text x="752" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">5</text>
  <text x="842" y="295.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">12</text>
  <rect x="452" y="308" width="508" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">FEWDS1</text>
  <text x="532" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">NCHAR(30)</text>
  <text x="602" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Clé du lot</text>
  <text x="752" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <text x="842" y="323.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">9</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq vues</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tables · config · flux · impact · API</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tables par flux</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recherche noms, colonnes, codes BT</text>
  <line x1="200" y1="187.0" x2="240" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fiche de table</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle, clés, accesseur, flux</text>
  <line x1="1000" y1="137.0" x2="960" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grille des colonnes</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne ouvre le code</text>
  <line x1="1000" y1="267.0" x2="960" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dv-arrow)"/>
</svg>

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
