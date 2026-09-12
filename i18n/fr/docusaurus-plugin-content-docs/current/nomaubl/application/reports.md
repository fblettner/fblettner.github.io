---
title: Rapports
description: "Reporting analytique de NomaUBL — un tableau croisé des statistiques de statuts (nombre de factures par activité, statut et motif de rejet, par type de transaction) et un requêteur sans SQL sur les factures, les documents archivés, les événements de cycle de vie et les erreurs de validation, avec rapports nommés enregistrés et export Excel/CSV."
keywords: [NomaUBL, rapports, reporting, statistiques, statut, motif de rejet, requêteur, tableau croisé, export Excel, rapports enregistrés, config-reports, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapports

La page **Rapports** est la vue analytique de NomaUBL — elle transforme les données de factures, d'archives, de cycle de vie et de validation en chiffres qu'une équipe peut lire et exporter, sans écrire de SQL. Elle s'ouvre sur deux onglets : un tableau croisé prêt à l'emploi, **Statistiques statuts**, et un **Requêteur** à composer soi-même. La page est conçue pour accueillir d'autres onglets de rapports au fil du temps.

Ouvrez-la depuis le menu — **Rapports**. L'accès s'accorde par rôle (voir [Accès](#access) plus bas).

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="rep-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="30" y="24" width="940" height="272" rx="14" fill="url(#rep-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="50" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports</text>

  <rect x="50" y="66" width="150" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="125" y="83" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Statistiques statuts</text>
  <rect x="206" y="66" width="120" height="26" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="83" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêteur</text>

  <rect x="720" y="66" width="120" height="26" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="780" y="83" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Date d'archivage ▾</text>
  <rect x="846" y="66" width="104" height="26" rx="6" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.45)" strokeWidth="1"/>
  <text x="898" y="83" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Export Excel</text>

  <line x1="30" y1="104" x2="970" y2="104" stroke="#1f2937" strokeWidth="1"/>
  <text x="50" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ · STATUT · MOTIF</text>
  <text x="640" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2B</text>
  <text x="720" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2BINT</text>
  <text x="800" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2C</text>
  <text x="880" y="124" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif" textAnchor="middle">B2G</text>

  <g fontFamily="ui-monospace, monospace" fontSize="10">
    <text x="50" y="150" fill="#e2e8f0">▾ Magasins</text><text x="640" y="150" fill="#cbd5e1" textAnchor="middle">1 240</text><text x="720" y="150" fill="#cbd5e1" textAnchor="middle">86</text><text x="800" y="150" fill="#cbd5e1" textAnchor="middle">402</text><text x="880" y="150" fill="#cbd5e1" textAnchor="middle">57</text>
    <text x="66" y="170" fill="#4ade80">▾ 205 Payée</text><text x="640" y="170" fill="#94a3b8" textAnchor="middle">1 180 · 95%</text>
    <text x="66" y="190" fill="#f87171">▸ 213 Rejetée</text><text x="640" y="190" fill="#94a3b8" textAnchor="middle">60 · 5%</text>
    <text x="82" y="210" fill="#94a3b8">REJ_ADR — code adressage</text><text x="640" y="210" fill="#64748b" textAnchor="middle">44 · 73%</text>
    <text x="82" y="230" fill="#94a3b8">REJ_SIRET — SIRET inconnu</text><text x="640" y="230" fill="#64748b" textAnchor="middle">16 · 27%</text>
    <text x="50" y="256" fill="#e2e8f0">▸ Centrale</text><text x="640" y="256" fill="#cbd5e1" textAnchor="middle">318</text><text x="720" y="256" fill="#cbd5e1" textAnchor="middle">—</text><text x="800" y="256" fill="#cbd5e1" textAnchor="middle">54</text><text x="880" y="256" fill="#cbd5e1" textAnchor="middle">—</text>
  </g>

  <rect x="40" y="270" width="920" height="18" rx="4" fill="rgba(74,158,255,0.05)" stroke="rgba(74,158,255,0.25)" strokeWidth="1"/>
  <text x="54" y="283" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Lignes dépliables · sous-totaux à chaque niveau · effectifs et % · un clic vers Excel (rapport + données à plat)</text>
</svg>

---

## Statistiques statuts

Le premier onglet est un tableau croisé prêt à l'emploi : le **nombre de factures** ventilé par **code activité → statut → motif de rejet**, réparti en colonnes par **type de transaction** (`B2B`, `B2BINT`, `B2C`, `B2G`). Chaque niveau porte son effectif et un **pourcentage** de son parent — un motif en part de son statut, un statut en part de son activité, une activité en part du total.

- **Dépliez / repliez** une activité ou un statut pour descendre dans le détail ; les **sous-totaux** apparaissent à chaque niveau.
- Un statut à motif de rejet unique tient sur **une seule ligne**, sans ligne imbriquée supplémentaire.
- Le **filtre de période** en haut propose les trois mêmes bases de dates que le [Tableau de bord](./dashboard.md) — *Date d'activité*, *Date document* ou *Date d'archivage* — pour que le rapport se recoupe avec les chiffres affichés ailleurs.
- **Export Excel** produit un classeur à **deux feuilles** : le rapport exactement tel qu'affiché, et les données brutes à plat, prêtes pour vos propres tableaux croisés.

---

## Requêteur

Le second onglet compose une extraction **sans SQL**. Choisissez un **jeu de données**, sélectionnez les colonnes, affinez avec des filtres, exécutez — et enregistrez au besoin le résultat comme rapport nommé.

| Jeu de données | Ce qu'il couvre |
|---|---|
| **Factures** | Les lignes e-invoicing — le même catalogue que la liste [E-Invoicing](./invoices.md). |
| **Documents archivés** | Tout document capturé — l'archive [E-Documents](./edocuments.md). |
| **Événements de cycle de vie** | Une ligne par événement de statut du cycle de vie de la facture. |
| **Erreurs de validation** | Les anomalies des [Erreurs d'intégration](./integration-errors.md). |

- **Colonnes** — choisissez les colonnes à inclure dans le catalogue du jeu de données.
- **Filtres** — les filtres statut, motif, action et type de transaction se choisissent dans des listes déroulantes **multi-sélection** alimentées par les listes de référence ; les dates par **plage** ; la **barre de période** avec son choix de base de date ouvre l'écran. Un filtre **numéro de document** effectue une recherche numérique exacte.
- **Résultats** dans la grille standard avec tout son outillage : recherche, filtres par colonne, regroupement, affichage / masquage et réordonnancement des colonnes, export **CSV / Excel**.

### Rapports enregistrés

Une requête — son **jeu de données, ses colonnes, ses filtres, la disposition des colonnes et le regroupement** — peut être **enregistrée comme rapport nommé** et rechargée en deux clics. La bibliothèque de rapports se trouve dans un fichier dédié `config-reports.json`, simple à sauvegarder et à promouvoir d'un serveur à l'autre.

---

## Accès \{#access\}

La page Rapports s'accorde **par rôle** : activez la page *Rapports* du groupe **Navigation** sur la page [Rôles](../configuration/security/roles.md). Sans elle, l'entrée de menu reste masquée.

---

## Conseils & bonnes pratiques

- **Partez des Statistiques statuts pour la lecture récurrente.** Elles répondent à « combien de factures, dans quel statut, et pourquoi rejetées » sans réglage — exportez le classeur à deux feuilles quand un collègue veut croiser les chiffres bruts.
- **Enregistrez les requêtes que l'équipe rejoue.** Un rapport nommé conserve ses colonnes, ses filtres et sa disposition : une extraction mensuelle tient en deux clics plutôt qu'une reconstruction — et `config-reports.json` suit le déploiement.
- **Adaptez la base de date à la question.** *Date d'archivage* répond à « ce que nous avons traité », *Date document* à « ce que nous avons émis », *Date d'activité* à « ce qui a changé » — choisissez celle qu'attend l'audience avant de lire les effectifs.
