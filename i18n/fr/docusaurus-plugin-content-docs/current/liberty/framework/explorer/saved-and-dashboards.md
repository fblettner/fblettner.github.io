---
title: Analyses enregistrées et tableaux de bord
description: "Conserver le travail de l'explorateur de données de Liberty Next : analyses enregistrées, privées ou partagées, avec un public ; tableaux de bord d'analyses avec leur propre période et leur disposition ; export Excel et PDF ; analyses et tableaux de bord livrés avec une application."
keywords: [Liberty Next, explorateur de données, analyse enregistrée, partage, public, tableau de bord, tuiles, disposition, export, Excel, PDF]
---

# Analyses enregistrées et tableaux de bord

La barre de mode, en haut de l'explorateur, offre deux modes : **Analyses**, l'éditeur avec ses analyses enregistrées, et **Tableaux de bord**, des grilles d'analyses enregistrées. Chaque mode affiche le nombre d'éléments qu'il contient.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="386" rx="14" fill="url(#exd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="217" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="283.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (3)</text>
  <rect x="328" y="31" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="392.0" y="45.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord (1)</text>
  <rect x="467" y="31" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="477" y="45.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Revue commerciale ▾</text>
  <rect x="635" y="31" width="155" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="712.5" y="45.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier la disposition</text>
  <rect x="796" y="31" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="836.0" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="882" y="31" width="48" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="906.0" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="936" y="31" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="954.5" y="45.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <line x1="240" y1="64" x2="960" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">▣</text>
  <rect x="258" y="74" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="268" y="88.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ce trimestre ▾</text>
  <text x="390" y="88" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">s'applique aux analyses qui ont un champ de période</text>
  <rect x="780" y="74" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="88.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Ajouter une analyse… ▾</text>
  <rect x="240.0" y="104" width="355.0" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="122" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline par étape</text>
  <text x="585.0" y="122" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 2  ⤡ m  ✕</text>
  <rect x="280.0" y="198" width="60" height="40" rx="2" fill="#4a9eff" opacity="0.85"/>
  <text x="310.0" y="250" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualifiée</text>
  <rect x="390.0" y="178" width="60" height="60" rx="2" fill="#4a9eff" opacity="0.85"/>
  <text x="420.0" y="250" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposition</text>
  <rect x="500.0" y="138" width="60" height="100" rx="2" fill="#4a9eff" opacity="0.85"/>
  <text x="530.0" y="250" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Négociation</text>
  <rect x="605.0" y="104" width="172.5" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="615.0" y="122" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">KPI</text>
  <text x="767.5" y="122" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 1  ⤡ m  ✕</text>
  <text x="691.25" y="176" fill="#e2e8f0" fontSize="16" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">192 000</text>
  <text x="691.25" y="196" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Somme Montant</text>
  <rect x="787.5" y="104" width="172.5" height="150" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="797.5" y="122" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par pays</text>
  <text x="950.0" y="122" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 1  ⤡ m  ✕</text>
  <circle cx="873.75" cy="184" r="42" fill="#4a9eff" opacity="0.85"/>
  <path d="M 873.75 184 L 873.75 142 A 42 42 0 0 1 906.75 158 Z" fill="#c084fc"/>
  <rect x="240.0" y="264" width="720.0" height="120" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="282" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Affaires gagnées par pays</text>
  <text x="950.0" y="282" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✎  ‹ ›  ⤢ 4  ⤡ m  ✕</text>
  <text x="252.0" y="304" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  France</text>
  <text x="948.0" y="304" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">165 000</text>
  <text x="272.0" y="326" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Négociation</text>
  <text x="948.0" y="326" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">120 000</text>
  <text x="252.0" y="348" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  Belgique</text>
  <text x="948.0" y="348" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">27 000</text>
  <rect x="10" y="30" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mode tableaux de bord</text>
  <text x="20" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grilles d'analyses enregistrées</text>
  <line x1="210" y1="47.0" x2="240" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une période</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplace celle des tuiles</text>
  <line x1="210" y1="167.0" x2="258" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="10" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une tuile</text>
  <text x="20" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une analyse dans sa propre vue</text>
  <line x1="210" y1="337.0" x2="240" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Disposition, export</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tuiles ; Excel et PDF</text>
  <line x1="1000" y1="47.0" x2="973" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Outils de tuile</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le crayon ouvre l'analyse</text>
  <line x1="1000" y1="167.0" x2="940" y2="122" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
</svg>

---

## Analyses enregistrées \{#analyses\}

En mode **Analyses**, le sélecteur liste les analyses enregistrées du modèle, regroupées par public, celles de l'utilisateur marquées *à moi*. *Nouvelle analyse* repart d'une analyse vide.

| Bouton | Effet |
|---|---|
| **Enregistrer** | Enregistre l'analyse en cours — lignes, mesures, filtres, période, vue, champs calculés. |
| **Enregistrer sous** | Enregistre une copie sous un nouveau nom, toujours privée au départ. |
| **Supprimer** | Proposé au propriétaire de l'analyse et aux superutilisateurs. |
| **Excel**, **PDF** | Export — voir [plus bas](#export). |

La fenêtre d'enregistrement demande :

| Champ | Usage |
|---|---|
| **Nom** | Le nom dans le sélecteur. |
| **Description** | Texte libre. |
| **Public** | Un groupe pour le sélecteur : *finance*, *ventes*, *it*… |
| **Visible par tous** | Décochée : réservée à son propriétaire. Cochée : **partagée** — tout utilisateur qui a accès au modèle la voit. |

Enregistrer une analyse partagée la modifie pour tout le monde, comme le rappelle la fenêtre. **Enregistrer sous** crée à la place une copie personnelle.

---

## Tableaux de bord \{#dashboards\}

En mode **Tableaux de bord**, un tableau de bord est une grille de **tuiles** sur quatre colonnes, chacune exécutant une analyse enregistrée dans sa propre vue — tableau, croisé, graphique, KPI ou détail.

- **La période** du haut s'applique à chaque tuile dont l'analyse a un champ de période ; les autres conservent la leur.
- **Modifier la disposition** affiche les outils des tuiles : déplacer à gauche ou à droite, largeur (1 à 4 colonnes), hauteur (*s*, *m*, *l*), retrait. **Ajouter une analyse…** ajoute une tuile.
- **Le crayon** d'une tuile ouvre son analyse dans l'éditeur ; une descente depuis une tuile fait de même, avec les valeurs cliquées en filtres.
- **Enregistrer**, **Enregistrer sous** et **Supprimer** fonctionnent comme pour les analyses. Une tuile dont l'analyse a été supprimée le signale.

---

## Export \{#export\}

**Excel** et **PDF** exportent l'analyse en cours, ou le tableau de bord entier (une section par tuile) :

| | Excel | PDF |
|---|---|---|
| Mise en page | Une feuille par section, en-têtes et sous-totaux en gras, période et filtres en note. | Un titre, un chapitre par section, des tableaux avec lignes de groupe en gras, la charte PDF de l'installation. |
| Un croisé | Aplati, avec ses sous-totaux. | Idem. |
| Un graphique | Son tableau de données. | Idem. |
| KPI | Une ligne de totaux. | Idem. |
| Détail | Ses lignes. | Idem. |

Chaque section contient au plus 3 000 lignes. La vue croisée a aussi son propre bouton Excel, qui exporte le croisé tel qu'il est affiché. La charte PDF se règle dans [Paramètres → App](../build/settings-app.md).

---

## Analyses livrées avec une application \{#bundled\}

Une application peut livrer des analyses et des tableaux de bord prêts à l'emploi avec son modèle. Ils apparaissent comme éléments **partagés** à l'installation de l'application et suivent ses nouvelles versions — jusqu'à ce qu'un utilisateur y enregistre des modifications, après quoi la version locale est conservée. Un élément livré qu'un utilisateur a supprimé n'est pas réinstallé.

---

## Pour aller plus loin

- [Analyser les données](./analysis.md) — construire ce qui s'enregistre.
- [Explorateur de données](./overview.md) — la vue d'ensemble.
