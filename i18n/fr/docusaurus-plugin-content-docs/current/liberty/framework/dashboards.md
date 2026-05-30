---
title: Tableaux de bord
description: "Un tableau de bord agence des KPI, graphiques et tables au-dessus de requêtes de connecteur dans une grille responsive. Construit et modifié depuis Paramètres → Tableaux de bord avec des panneaux en glisser-déposer ; chaque panneau choisit une source de données, une visualisation et un drill-down optionnel."
keywords: [Liberty Framework, tableau de bord, dashboard, KPI, indicateur, graphique, table, panneau, drill-down, paramètres, mise en page]
---

# Tableaux de bord

Un **tableau de bord** est une page unique qui regroupe KPI, graphiques et tables autour d'un contexte commun — typiquement *la période courante* + *un périmètre choisi* (une société, une région, une équipe). Défini depuis **Paramètres → Tableaux de bord** avec une **grille de mise en page** en glisser-déposer ; chaque panneau choisit une source de données (une requête de connecteur ou un graphique enregistré), un **type** de panneau (indicateur / graphique / table) et s'affiche en conséquence.

Le tableau de bord est la surface naturelle pour les vues de direction ("comment se porte-t-on aujourd'hui ?") et pour les vues opérationnelles ("quels jobs s'exécutent, quels écrans ont le plus de refus"). Chaque panneau peut descendre vers un écran pré-filtré sur les lignes sous-jacentes.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="db-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#db-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Un tableau de bord à l'exécution</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="32" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="78" y="120" fill="#cbd5e1" fontSize="11" fontFamily="system-ui, sans-serif">📅 Mai 2026 ▾   Société : Toutes ▾   Statut ▾   ↻ Rafraîchir   ⬇ Exporter PDF</text>

  <rect x="60" y="148" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="160" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Factures émises</text>
  <text x="160" y="200" fill="#4a9eff" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">12 481</text>
  <text x="160" y="220" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▲ +12% vs mois préc.</text>

  <rect x="280" y="148" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">TVA collectée</text>
  <text x="380" y="200" fill="#4a9eff" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">2 350 K€</text>
  <text x="380" y="220" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">déclarée mensuelle</text>

  <rect x="500" y="148" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="600" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Rejetées à la PA</text>
  <text x="600" y="200" fill="#f87171" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">29</text>
  <text x="600" y="220" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▼ -8% vs mois préc.</text>

  <rect x="720" y="148" width="220" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="830" y="170" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Temps moyen de traitement</text>
  <text x="830" y="200" fill="#4a9eff" fontSize="22" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">4,2 s</text>
  <text x="830" y="220" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▲ stable</text>

  <rect x="60" y="244" width="540" height="60" rx="10" fill="rgba(192,132,252,0.06)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="76" y="262" fill="#c084fc" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRAPHIQUE · Factures émises par mois</text>
  <text x="76" y="290" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">barres — 12 derniers mois</text>

  <rect x="620" y="244" width="320" height="60" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="636" y="262" fill="#22c55e" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE · Refus récents</text>
  <text x="636" y="290" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">10 lignes — clic pour descendre dans Factures</text>
</svg>

La maquette montre la vue à l'exécution ; l'éditeur derrière est décrit ci-dessous.

---

## Paramètres → Tableaux de bord

Le catalogue liste chaque tableau de bord de l'installation.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Tableaux de bord</div>
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>+ Nouveau tableau de bord</span>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', fontSize: '11px', fontWeight: 600}}>
    <div>Id</div><div>Titre</div><div>Application</div><div>Panneaux</div><div></div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>billing-overview</div><div>Vue d'ensemble facturation</div><div>billing</div><div>8</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>sales-pipeline</div><div>Pipeline commercial</div><div>crm</div><div>6</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '180px 1.4fr 1fr 80px 60px', padding: '10px 14px', alignItems: 'center'}}>
    <div style={{fontFamily: 'ui-monospace, monospace'}}>tech-dashboard</div><div>Tableau de bord technique</div><div>_default</div><div>10</div><div style={{textAlign: 'right', opacity: 0.55}}>Modifier</div>
  </div>
</div>

Cliquer sur *+ Nouveau tableau de bord* ou sur n'importe quelle ligne pour ouvrir l'éditeur de tableau de bord.

---

## L'éditeur de tableau de bord

Un éditeur à deux panneaux : **grille de mise en page** à gauche (glisser-déposer), **éditeur de panneau** à droite (configure le panneau sélectionné).

### Champs généraux (haut de l'éditeur)

| Champ | Effet |
|---|---|
| **Id** | Identifiant — apparaît dans l'URL (`/dashboards/<id>`), le sélecteur de menu et le code de permission (`dashboard:<id>`). |
| **Titre** | Titre d'affichage localisé. |
| **Application** | Espace de noms d'application. Détermine l'espace de travail où le tableau de bord apparaît. |
| **Description** | Texte libre. Apparaît dans le sélecteur de menu. |
| **Barre de filtres partagée** | Liste optionnelle de paramètres présentés en haut du tableau de bord à l'exécution. Chaque panneau qui référence le même paramètre hérite de la valeur. |
| **Page par défaut** | Optionnel — la page d'accueil du tableau de bord dans la même application. Pose une icône "accueil" sur l'entrée de menu. |

### Grille de mise en page

Une grille responsive à 12 colonnes. Chaque cellule est un **panneau** qui peut occuper de 1 à 12 colonnes de large et de 1 à 6 lignes de haut. L'opérateur glisse depuis une palette de types de panneau vers la grille :

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '14px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Palette</div>
      <div style={{display: 'grid', gap: '6px'}}>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📊 Indicateur (KPI)</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📈 Graphique</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📋 Table</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>📝 Markdown</span>
        <span style={{padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.6}}>🗂 Grille (prévu)</span>
      </div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700, color: '#4a9eff', marginBottom: '10px'}}>Mise en page · grille 12 colonnes</div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '4px'}}>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 indicateur</div>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 indicateur</div>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 indicateur</div>
        <div style={{gridColumn: 'span 3', height: '40px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#60a5fa'}}>📊 indicateur</div>
        <div style={{gridColumn: 'span 7', height: '80px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#c084fc'}}>📈 graphique (barres)</div>
        <div style={{gridColumn: 'span 5', height: '80px', background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.40)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: '#22c55e'}}>📋 table</div>
      </div>
      <div style={{marginTop: '10px', display: 'flex', gap: '6px'}}>
        <span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.40)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>+ Ajouter ligne</span>
        <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Aperçu</span>
      </div>
    </div>
  </div>
</div>

| Contrôle | Effet |
|---|---|
| **Glisser depuis la palette** | Ajoute un nouveau panneau à la fin de la grille. |
| **Poignées de redimensionnement** | Glisser le bord d'un panneau pour redimensionner. S'aligne sur les colonnes. |
| **Libellé de section** | Optionnel. Ajoute un en-tête de section avant une rangée de panneaux — par exemple *Vue commerciale*, *Santé opérationnelle*. |
| **Clic sur un panneau** | Ouvre l'**éditeur de panneau** à droite. |
| **✕ sur un panneau** | Le retire de la mise en page. |
| **Aperçu** | Rend le tableau de bord complet avec des données live — utile avant d'enregistrer. |

---

## Types de panneau

### Indicateur (KPI)

Un nombre unique avec un delta optionnel par rapport à une période précédente.

| Champ | Effet |
|---|---|
| **Titre** | Affiché au-dessus du nombre. |
| **Connecteur** / **Requête** | La source. La requête doit retourner au moins une ligne avec une colonne numérique. |
| **Colonne valeur** | Colonne dont la valeur de la première ligne est rendue comme nombre principal. |
| **Format** | Format numérique ("`1 234`", "`1,2 K`", "`€ 12 345,00`"). |
| **Colonne delta** | Optionnel. Un nombre signé rendu sous la valeur sous forme de chip coloré ▲ / ▼. |
| **Sens du delta** | `Plus élevé est mieux` / `Plus bas est mieux` — pilote la couleur. |
| **Sparkline de tendance** | Optionnel. Pointe sur une requête qui retourne une petite série temporelle ; rendu sous forme de sparkline à 10 points. |

### Graphique

Emballe une définition de [graphique](./charts.md).

| Champ | Effet |
|---|---|
| **Graphique** | Liste déroulante des graphiques définis sous *Paramètres → Graphiques*. |
| **Surcharger les paramètres** | Surcharges optionnelles par panneau des valeurs fixes du graphique. |
| **Écran de drill-down** | Optionnel. Cliquer sur un point de données ouvre l'écran désigné pré-filtré. |

### Table

Une petite grille en lecture seule (typiquement 5 à 20 lignes). Utile pour les listes "top N" / "récents".

| Champ | Effet |
|---|---|
| **Connecteur** / **Requête** | La source. |
| **Colonnes** | Liste réordonnable de colonnes à afficher, avec largeurs et formats par colonne. |
| **Limite de lignes** | Par défaut 20. |
| **Action au clic** | `Ouvrir le dialogue` (utilise le dialogue de l'écran lié) / `Ouvrir l'écran filtré` / `Aucune`. |

### Markdown

Bloc de texte statique, utile pour des annotations ou des explications contextuelles entre panneaux.

| Champ | Effet |
|---|---|
| **Contenu** | Source Markdown. |
| **Fond** | Aucun / Discret (par défaut) / Accentué. |

### Grille (prévu)

Grille de style écran avec la barre d'outils de filtres complète. Sur la feuille de route.

---

## La barre de filtres partagée

Le haut d'un tableau de bord montre une rangée de saisies dérivées de la **Barre de filtres partagée** déclarée en haut de l'éditeur. Chaque entrée :

| Champ | Effet |
|---|---|
| **Nom** | Nom interne du paramètre — les panneaux le référencent via `${dashboard.<nom>}` dans leurs surcharges de paramètres. |
| **Libellé** | Affiché au-dessus de la saisie. |
| **Type** | `string` / `date` / `daterange` / `lookup` / `enum`. Pilote le widget. |
| **Valeur par défaut** | Valeur initiale. Les jetons de date (`${today}`, `${month.first}`) sont acceptés. |
| **Lookup** | Quand *Type* vaut `lookup`, pointe sur une recherche du dictionnaire. |

Les opérateurs règlent le filtre une fois en haut du tableau de bord ; chaque panneau qui hérite du paramètre se ré-exécute avec la nouvelle valeur. C'est ce qui rend les tableaux de bord cohérents — une saisie, plusieurs panneaux mis à jour.

---

## Drill-down

Chaque panneau peut déclarer un **écran de drill-down** — cliquer sur le panneau (ou sur un point de données précis sur les graphiques / tables) ouvre l'écran désigné pré-filtré sur les lignes sous-jacentes. Le framework gère le passage de paramètres automatiquement : le panneau sait ce qu'il a interrogé, l'écran accepte les mêmes noms de paramètres.

Pour un contrôle plus fin, le champ de drill-down accepte un *Patron d'URL* avec des placeholders `:nom` que le framework remplit depuis le contexte du clic.

---

## Permissions

Un tableau de bord est verrouillé par `dashboard:<id>`. Chaque panneau hérite de la permission de la requête de connecteur sous-jacente — un utilisateur sans `sql:billing:monthly-invoice-counts` ne voit pas le panneau de graphique qui la référence. Le framework **élague le panneau silencieusement** plutôt que d'afficher un placeholder d'erreur, afin que les tableaux de bord restent cohérents même quand l'appelant n'a pas toutes les permissions.

L'onglet d'éditeur de tableaux de bord est verrouillé par `settings:dashboards`.

---

## Conseils et bonnes pratiques

- **Commencer par les indicateurs.** La première rangée d'un tableau de bord doit comporter 3 à 4 panneaux d'indicateur — l'œil de l'opérateur s'y pose en premier.
- **Regrouper avec des en-têtes de section.** Deux rangées visuelles séparées par un *Libellé de section* se lisent bien mieux que six panneaux en mur.
- **Garder moins de 12 panneaux par tableau de bord.** Au-delà, la page défile et la valeur "tout en un coup d'œil" s'évapore. Découper en plusieurs tableaux de bord.
- **Utiliser la barre de filtres partagée pour le temps.** La plupart des tableaux de bord tournent autour d'une période ; présenter la plage de dates ici une fois et chaque panneau en hérite.
- **Câbler les drill-downs.** Un indicateur isolé vaut la moitié d'un indicateur qui ouvre l'écran pertinent.
- **Utiliser le bouton Aperçu.** Détecte "ce panneau n'a pas de données sur une installation fraîche" avant l'enregistrement.

---

## Sous le capot

Les définitions de tableau de bord sont enregistrées dans `liberty-apps/config/dashboards.toml` et les graphiques sous-jacents dans `charts.toml`. Les opérateurs **ne modifient pas ces fichiers à la main** en exploitation normale ; l'éditeur de tableaux de bord est l'interface de référence, avec l'onglet *TOML brut* comme échappatoire pour les rares modifications qu'un manque de l'éditeur bloque.

---

## Pour aller plus loin

- [Graphiques](./charts.md) — les définitions de graphique qu'un panneau Graphique référence.
- [Écrans](./screens.md) — les écrans qu'un drill-down ouvre.
- [Liaison des paramètres](./query-params-binding.md) — comment la barre de filtres partagée alimente chaque panneau.
- [Menus](./menus.md) — câbler le tableau de bord dans la barre latérale.
