---
title: Analyses enregistrées et tableaux de bord
description: "Conserver le travail de l'explorateur de données de Liberty Next : analyses enregistrées, privées ou partagées, avec un public ; tableaux de bord d'analyses avec leur propre période et leur disposition ; export Excel et PDF ; une entrée de menu pour une analyse ou un tableau de bord partagé (Ajouter à un menu) ; analyses et tableaux de bord livrés avec une application."
keywords: [Liberty Next, explorateur de données, analyse enregistrée, partage, public, tableau de bord, tuiles, disposition, export, Excel, PDF]
---

# Analyses enregistrées et tableaux de bord

La barre de mode, en haut de l'explorateur, offre deux modes : **Analyses**, l'éditeur avec ses analyses enregistrées, et **Tableaux de bord**, des grilles d'analyses enregistrées. Chaque mode affiche le nombre d'éléments qu'il contient.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="380" rx="14" fill="url(#exd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="14" fontFamily="system-ui, sans-serif">◎</text>
  <text x="260" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Pipeline CRM — affaires, clients, activités</text>
  <rect x="930" y="31" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="45.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">crm · Pipeline CRM     ▾</text>
  <rect x="892" y="31" width="30" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="907.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="848" y="31" width="39" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="867.5" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Excel</text>
  <rect x="747" y="31" width="96" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="795.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter à un menu</text>
  <rect x="684" y="31" width="58" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="713.0" y="45.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="587" y="31" width="92" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="633.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer sous</text>
  <rect x="514" y="31" width="68" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="548.0" y="45.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="221" y1="72" x2="1099" y2="72" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="84" width="228" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="287.0" y="99.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⚗ Analyses (3)</text>
  <rect x="335" y="85" width="132" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="401.0" y="99.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableaux de bord (1)</text>
  <rect x="476" y="84" width="240" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="99.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">sales_review  sales · Revue commerciale   ▾</text>
  <rect x="724" y="84" width="148" height="24" rx="5" fill="url(#exd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="798.0" y="99.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier la disposition</text>
  <rect x="240" y="118" width="840" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="127" width="20" height="20" rx="6" fill="#c084fc" fillOpacity="0.15" stroke="#c084fc" strokeWidth="1"/>
  <text x="260" y="140.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <text x="278" y="140.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="370" y="126" width="110" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.0" y="140.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▤ Ce trimestre  ▾</text>
  <text x="490" y="141" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">s'applique aux analyses qui ont un champ de période</text>
  <rect x="880" y="126" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="890" y="140.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ajouter une analyse…                 ▾</text>
  <rect x="240.0" y="168" width="201.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="168" width="201.0" height="120" rx="8" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250.0" y="186" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264.0" y="186" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">KPI</text>
  <text x="415.0" y="186" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1 × S</text>
  <text x="429.0" y="186" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="340.5" y="238" fill="#e2e8f0" fontSize="17" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">192 000</text>
  <text x="340.5" y="256" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Somme Montant</text>
  <path d="M429.0,289 L442.0,289 L442.0,276" fill="none" stroke="#4a9eff" strokeWidth="3"/>
  <rect x="453.0" y="168" width="414.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="463.0" y="186" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="477.0" y="186" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Pipeline par étape</text>
  <text x="841.0" y="186" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2 × M</text>
  <text x="855.0" y="186" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="497.9" y="244.4" width="74.8" height="23.6" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="535.3333333333334" y="279" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Qualifiée</text>
  <rect x="622.6" y="231.5" width="74.8" height="36.5" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="660.0" y="279" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Proposition</text>
  <rect x="747.3" y="212.0" width="74.8" height="56.0" rx="2" fill="#4a9eff" fillOpacity="0.85"/>
  <text x="784.6666666666667" y="279" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Négociation</text>
  <rect x="879.0" y="168" width="201.0" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.0" y="186" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="903.0" y="186" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par pays</text>
  <text x="1054.0" y="186" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1 × M</text>
  <text x="1068.0" y="186" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <circle cx="979.5" cy="238" r="30" fill="none" stroke="#4a9eff" strokeWidth="14"/>
  <path d="M979.5,208 A30,30 0 0,1 1008.0,228.7" fill="none" stroke="#c084fc" strokeWidth="14"/>
  <rect x="240.0" y="300" width="840.0" height="86" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="318" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="264.0" y="318" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Affaires gagnées par pays</text>
  <text x="1054.0" y="318" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4 × S</text>
  <text x="1068.0" y="318" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="254.0" y="342" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ France</text>
  <text x="1066.0" y="342" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="ui-monospace, monospace">165 000</text>
  <text x="254.0" y="362" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">    Négociation</text>
  <text x="1066.0" y="362" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">120 000</text>
  <rect x="20" y="92" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mode Tableaux de bord</text>
  <text x="30" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">grilles d'analyses enregistrées</text>
  <line x1="200" y1="109.0" x2="408" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une période</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour les tuiles avec une date</text>
  <line x1="200" y1="167.0" x2="370" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Poignée : glisser</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">flèches, Maj + flèches : taille</text>
  <line x1="200" y1="257.0" x2="252.0" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Coin : glisser pour dimensionner</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">1 à 4 colonnes · S / M / L</text>
  <line x1="200" y1="347.0" x2="442.0" y2="289" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="30" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer, exporter</text>
  <text x="1150" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le tableau de bord entier</text>
  <line x1="1140" y1="47.0" x2="907.0" y2="31" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="84" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier la disposition</text>
  <text x="1150" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déplacer, dimensionner</text>
  <line x1="1140" y1="101.0" x2="872" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="160" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une analyse…</text>
  <text x="1150" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une tuile par analyse</text>
  <line x1="1140" y1="177.0" x2="1070" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1140" y="250" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Taille, retrait</text>
  <text x="1150" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes × hauteur · 🗑</text>
  <line x1="1140" y1="267.0" x2="1050.0" y2="182" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
</svg>

---

## Analyses enregistrées \{#analyses\}

En mode **Analyses**, le sélecteur liste les analyses enregistrées du modèle, regroupées par public, celles de l'utilisateur marquées *à moi*. *Nouvelle analyse* repart d'une analyse vide.

| Bouton | Effet |
|---|---|
| **Enregistrer** | Enregistre l'analyse en cours — lignes, mesures, filtres, période, vue, champs calculés. |
| **Enregistrer sous** | Enregistre une copie sous un nouveau nom, toujours privée au départ. |
| **Supprimer** | Proposé au propriétaire de l'analyse et aux superutilisateurs. |
| **Ajouter à un menu** | Publie l'analyse comme entrée de menu — voir [plus bas](#menu). |
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
- **Modifier la disposition** dispose les tuiles comme les cartes d'un tableau de bord : une tuile se déplace par glisser-déposer — sa poignée, une barre indiquant l'endroit où elle sera déposée — et se dimensionne par son coin, en colonnes entières (1 à 4) et selon la plus proche des trois hauteurs (`2 × M`). La poignée répond aussi au clavier : les flèches déplacent, Maj + flèches dimensionnent. **Ajouter une analyse…** ajoute une tuile.
- **Le crayon** d'une tuile ouvre son analyse dans l'éditeur ; une descente depuis une tuile fait de même, avec les valeurs cliquées en filtres.
- En consultation, une tuile affiche son titre et son crayon ; en **Modifier la disposition**, sa poignée, sa taille (`1 × S`) et une corbeille pour la retirer.
- **Enregistrer**, **Enregistrer sous**, **Supprimer**, **Ajouter à un menu**, **Excel** et **PDF**, dans l'en-tête de la page, fonctionnent comme pour les analyses. Une tuile dont l'analyse a été supprimée le signale.

---

## Ajouter à un menu \{#menu\}

Sur une analyse ou un tableau de bord enregistré, **Ajouter à un menu** le publie comme entrée du menu d'une application. Le bouton n'apparaît qu'aux superutilisateurs : les menus font partie de la configuration. La fenêtre *Ajouter « … » à un menu* demande :

| Champ | Usage |
|---|---|
| **Menu de** | L'application dont le menu reçoit l'entrée. |
| **Dossier** | Un dossier de ce menu ; *En haut du menu* si aucun n'est choisi. |
| **Libellé dans le menu** | Le libellé de l'entrée — au départ, le nom de l'analyse. |

**Ajouter au menu** crée l'entrée. Un clic sur celle-ci ouvre l'explorateur sur l'analyse — son résultat aussitôt, la définition à un clic — ou sur le tableau de bord. L'entrée est visible des utilisateurs autorisés sur le modèle. Une analyse privée ne peut pas être publiée : la fenêtre demande de la partager d'abord (**Enregistrer**, *Visible par tous*), et **Ajouter au menu** reste grisé jusque-là. Une entrée dont l'analyse ou le tableau de bord a été supprimé, ou n'est plus partagé, le signale à l'ouverture.

---

## Export \{#export\}

**Excel** et **PDF** exportent l'analyse en cours, ou le tableau de bord entier (une section par tuile) :

| | Excel | PDF |
|---|---|---|
| Mise en page | Une feuille par section, en-têtes et sous-totaux en gras, période et filtres en note. | Une synthèse : une page de garde avec l'application, la période, la date, l'auteur et la version, puis les sections à la suite, dans la charte PDF de l'installation. |
| Un croisé | Aplati, avec ses sous-totaux. | Un tableau avec lignes de groupe en gras. |
| Un graphique | Son tableau de données. | Le graphique dessiné — barres (groupées, empilées ou horizontales), courbe, secteurs ou anneau — en couleurs d'impression, avec légende, graduations abrégées et valeurs sur les barres. |
| KPI | Une ligne de totaux. | Des cartes. |
| Détail | Ses lignes. | Un tableau. |

Les nombres du PDF suivent la langue du lecteur (`1 234,5` / `1,234.5`). Le même document est produit quand une tâche Nomaflow rend l'analyse selon un planning — voir [Étapes → Rapport](../../nomaflow/steps.md#report). Chaque section contient au plus 3 000 lignes. La vue croisée a aussi son propre bouton Excel, qui exporte le croisé tel qu'il est affiché. La charte PDF se règle dans [Liberty Next → Administrer → App](../build/settings-app.md).

---

## Analyses livrées avec une application \{#bundled\}

Une application peut livrer des analyses et des tableaux de bord prêts à l'emploi avec son modèle. Ils apparaissent comme éléments **partagés** à l'installation de l'application et suivent ses nouvelles versions — jusqu'à ce qu'un utilisateur y enregistre des modifications, après quoi la version locale est conservée. Un élément livré qu'un utilisateur a supprimé n'est pas réinstallé.

---

## Pour aller plus loin

- [Analyser les données](./analysis.md) — construire ce qui s'enregistre.
- [Explorateur de données](./overview.md) — la vue d'ensemble.
