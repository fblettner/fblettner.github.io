---
title: Tableaux de bord
description: "Les tableaux de bord de Liberty Next : indicateurs, graphiques et tableaux sur des requêtes de connecteurs, dans une grille de 12 colonnes, une période avec préréglages et comparaison avec la période précédente, des filtres du dictionnaire, un cache avec Actualiser — construits dans Paramètres → Tableaux de bord et ouverts depuis le menu."
keywords: [Liberty Next, tableau de bord, KPI, indicateur, graphique, table, widget, période, période précédente, compare_previous, PERIOD_FROM, filtres, dashboards.toml, cache]
---

# Tableaux de bord

Un tableau de bord place côte à côte plusieurs **widgets** — chiffres clés, graphiques, tableaux — alimentés chacun par une requête d'un connecteur. Il s'ouvre depuis le menu comme un écran, et se construit dans **Paramètres → Tableaux de bord**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dsh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dsh-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dsh-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dsh-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#dsh-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue des ventes</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Chiffre d'affaires et commandes par société</text>
  <text x="240" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Période</text>
  <rect x="284" y="80" width="178" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ce mois-ci · 01/10 – 27/10 ▾</text>
  <text x="476" y="96" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <rect x="526" y="80" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="536" y="94.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Toutes ▾</text>
  <rect x="830" y="80" width="28" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="844.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <text x="960" y="95" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Mis à jour à 14:05</text>
  <line x1="240" y1="116" x2="960" y2="116" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="128" width="236" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHIFFRE D'AFFAIRES</text>
  <text x="252" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 500</text>
  <text x="464" y="172" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +12,4 %</text>
  <text x="252" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 1 142 700</text>
  <rect x="488" y="128" width="236" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMMANDES</text>
  <text x="500" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">3 412</text>
  <text x="712" y="172" fill="#f87171" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▼ -3,1 %</text>
  <text x="500" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 3 521</text>
  <rect x="736" y="128" width="224" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="146" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAUX DE MARGE</text>
  <text x="748" y="172" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">31,2 %</text>
  <text x="948" y="172" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">▲ +1,4 pts</text>
  <text x="748" y="196" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">précédent : 29,8 %</text>
  <rect x="240" y="218" width="470" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffre d'affaires par mois</text>
  <rect x="272.9" y="327.6" width="45.9" height="42.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="272.9" y="306.4" width="45.9" height="21.2" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="295.8333333333333" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <rect x="344.6" y="317.0" width="45.9" height="53.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="344.6" y="295.8" width="45.9" height="21.2" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="367.5" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <rect x="416.2" y="327.6" width="45.9" height="42.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="416.2" y="295.8" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="439.1666666666667" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <rect x="487.9" y="306.4" width="45.9" height="63.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="487.9" y="274.6" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="510.8333333333333" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <rect x="559.6" y="295.8" width="45.9" height="74.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="559.6" y="264.0" width="45.9" height="31.8" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="582.5000000000001" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <rect x="631.2" y="306.4" width="45.9" height="63.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="631.2" y="264.0" width="45.9" height="42.4" fill="#a78bfa" fillOpacity="0.85"/>
  <text x="654.1666666666667" y="381" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="722" y="218" width="238" height="180" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="238" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Meilleurs clients</text>
  <text x="734" y="262" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="948" y="262" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">212 400</text>
  <text x="734" y="288" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="948" y="288" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">184 900</text>
  <text x="734" y="314" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="948" y="314" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">97 300</text>
  <text x="734" y="340" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Delta</text>
  <text x="948" y="340" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">65 100</text>
  <rect x="10" y="70" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="20" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">préréglages, calendrier, base</text>
  <line x1="210" y1="87.0" x2="290" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparer</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">évolution / période précédente</text>
  <line x1="210" y1="167.0" x2="420" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="10" y="300" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget graphique</text>
  <text x="20" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un graphique enregistré ou intégré</text>
  <line x1="210" y1="317.0" x2="260" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une liste par élément</text>
  <line x1="1000" y1="77.0" x2="620" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actualiser</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ignore le cache · heure</text>
  <line x1="1000" y1="147.0" x2="844" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Widget table</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes choisies, plafond</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dsh-arrow)"/>
</svg>

---

## Widgets \{#widgets\}

Les widgets se placent sur une grille de 12 colonnes, dans leur ordre de déclaration. Chacun occupe une largeur de 1 à 12 colonnes et une hauteur de 1 à 8 lignes, et peut porter un titre.

| Widget | Affiche | Réglages |
|---|---|---|
| **KPI** | Un chiffre calculé sur toutes les lignes d'une requête. | Connecteur, requête, colonne, agrégation (`count`, `sum`, `avg`, `min`, `max`, ou `none` pour la valeur de la première ligne), format, et **comparaison avec la période précédente**. |
| **Chart** | Un graphique en barres, courbes, aires ou secteurs. | Un graphique enregistré dans **Paramètres → Graphiques**, ou un connecteur, une requête et une définition de graphique écrits dans le widget — voir [Graphiques](./charts.md). |
| **Table** | Les lignes d'une requête. | Connecteur, requête, colonnes à afficher (toutes si vide), nombre maximal de lignes. |

Un widget dont l'utilisateur ne peut pas lancer la requête est masqué ; le reste du tableau de bord s'affiche.

---

## La période \{#period\}

Un tableau de bord peut porter une **période** : un sélecteur de dates dans sa barre, appliqué à tous les widgets.

- **Préréglages** : Aujourd'hui, Hier, 7 derniers jours, 30 derniers jours, Ce mois-ci, Mois dernier, Ce trimestre, Cette année, Année dernière, 12 derniers mois, Toutes les dates. Le préréglage *Hier* couvre hier et aujourd'hui.
- **Une période libre** : choisir une date de début puis une date de fin dans le calendrier de deux mois, puis **Appliquer**.
- **Base de dates** : quand le tableau de bord propose plusieurs dates (*Date du document*, *Payée le*), un choix **Date** en bas du panneau indique celle à laquelle s'applique la période.

Le tableau de bord s'ouvre sur son propre préréglage, sinon sur celui de l'application (**Paramètres → App → Default period (dashboards)**, *Ce mois-ci* par défaut). Un choix dure tant que l'onglet du tableau de bord reste ouvert.

### Ce que reçoivent les requêtes

| Paramètre | Valeur |
|---|---|
| `:PERIOD_FROM`, `:PERIOD_TO` | La période choisie, sous forme de dates. *Toutes les dates* lie `0001-01-01` à `9999-12-31`. |
| `:PREV_FROM`, `:PREV_TO` | La période précédente (voir ci-dessous). |
| `:PERIOD_BASIS` | La base de dates choisie, quand le tableau de bord en propose plusieurs. |

Une requête qui ne les cite pas n'est pas concernée. Quand la période désigne sa colonne de date — directement ou par un élément du dictionnaire retrouvé dans l'écran du widget —, le widget est aussi filtré sur le serveur sur cette colonne, **sans modifier son SQL**.

### La période précédente

| Période | Comparée à |
|---|---|
| Commençant au 1er janvier (*Cette année*, *Année dernière*) | Les mêmes dates un an plus tôt. |
| Commençant le 1er d'un mois | Le même nombre de mois juste avant — *Mois dernier* avec le mois d'avant, un trimestre entier avec le trimestre d'avant ; *Ce mois-ci* le 27 avec le 1er–27 du mois précédent. |
| Autre | Le même nombre de jours juste avant. |

### Comparer un indicateur

Avec **Compare with the previous period** coché, un KPI relance sa requête sur la période précédente et affiche sous le chiffre l'évolution — en pourcentage, en points pour un KPI en pourcentage — en vert ou en rouge, ainsi que la valeur précédente. Rien n'est comparé sur *Toutes les dates*.

---

## Filtres \{#filters\}

Un tableau de bord peut aussi porter des **filtres**, présentés comme des listes déroulantes dans sa barre. Chaque filtre a un libellé, un élément du dictionnaire, une requête qui fournit ses choix (colonne de valeur et colonne de libellé), et une valeur par défaut facultative. Choisir une valeur recharge chaque widget dont l'écran a une colonne portant cet élément ; les autres widgets restent tels quels.

---

## Actualisation et cache \{#cache\}

Quand un tableau de bord est rouvert, chaque widget réutilise son dernier résultat pendant **Paramètres → App → Dashboard cache (seconds, 0 = none)** — 60 secondes par défaut. Le bouton **↻** de la barre recharge tout, et *Mis à jour à 14:05* indique l'heure des données. Le cache est tenu par le navigateur, par utilisateur, jusqu'au rechargement de la page.

---

## Construire un tableau de bord \{#builder\}

Dans **Paramètres → Tableaux de bord**, choisir l'application, puis ajouter ou ouvrir un tableau de bord. L'éditeur (en anglais) comprend :

| Partie | Contenu |
|---|---|
| Général | Titre, description. |
| Période | **Add a period** : *Opens on* (un préréglage, ou *App default*), *Date column* ou *dictionary item*, et des **Date bases** facultatives (clé, libellé, colonne de date ou élément du dictionnaire). |
| Filtres | Les listes déroulantes de la barre. |
| Widgets | **Add widget** : Chart, KPI ou Table. Chaque widget a des boutons pour le rétrécir ou l'élargir (W−, W+), le réduire ou l'agrandir en hauteur (H−, H+), et l'avancer ou le reculer dans la grille. |

Pour rendre le tableau de bord accessible, ajouter une entrée **dashboard** à un menu ([Menus](./build/menus/item-types.md)) ; sa permission est `dashboard:<application>.<id>`.

### En TOML

```toml title="dashboards.toml"
[dashboards.sales.overview]
label = "Vue des ventes"
period = { column = "DOC_DATE", default = "thisMonth" }

  [[dashboards.sales.overview.widgets]]
  type = "kpi"
  label = "Chiffre d'affaires"
  connector = "sales"
  query = "revenue_by_company_get"
  column = "REVENUE"
  aggregation = "sum"
  compare_previous = true
  col_span = 4

  [[dashboards.sales.overview.widgets]]
  type = "chart"
  chart = "revenue_by_month"
  col_span = 8
  row_span = 2
```

---

## Conseils \{#tips\}

- Donner une période au tableau de bord plutôt que des filtres de dates dans chaque requête : un seul contrôle, et la comparaison est fournie.
- Un KPI avec `none` affiche la valeur de la première ligne : laisser la requête calculer le chiffre quand l'agrégation est complexe.
- Garder le cache pour les tableaux de bord souvent ouverts ; **↻** donne toujours des chiffres frais.
