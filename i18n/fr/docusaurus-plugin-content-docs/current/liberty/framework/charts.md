---
title: Graphiques
description: "Un graphique enveloppe une requête de connecteur dans une visualisation rendue par Recharts. Défini dans Paramètres → Graphiques, choisi dans le constructeur par type (line, bar, column, pie, donut, area, scatter), avec les champs d'axe, les séries, les couleurs, la légende et l'intervalle de rafraîchissement réglés dans le même formulaire."
keywords: [Liberty Framework, charts, Recharts, line, bar, column, area, pie, donut, scatter, dashboards, time series, group by, settings]
---

# Graphiques

Un **graphique** enveloppe la requête nommée d'un connecteur dans une visualisation. Défini dans **Paramètres → Graphiques**, choisi par type — line, bar, column, area, pie, donut, scatter — et réutilisé comme panneau dans n'importe quel nombre de tableaux de bord.

Cette page couvre le constructeur de graphiques, chaque champ de l'éditeur et les options propres à chaque type de graphique.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>SOURCE</div>
    <div style={{fontSize: '12px'}}>Un connecteur SQL + une requête de lecture nommée. Schéma découvert à l'exécution.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>FORME</div>
    <div style={{fontSize: '12px'}}>Une colonne pour l'axe X, une ou plusieurs séries. Le regroupement pivote une colonne en N séries parallèles.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>RENDU DANS</div>
    <div style={{fontSize: '12px'}}>Panneaux de tableau de bord et tout écran qui inclut un composant graphique.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>RAFRAÎCHISSEMENT</div>
    <div style={{fontSize: '12px'}}>Bouton manuel <strong>↻ Rafraîchir</strong> sur le panneau ; intervalle de rafraîchissement facultatif dans l'éditeur.</div>
  </div>
</div>

---

## Modifier un graphique

Dans **Paramètres → Graphiques → ➕ Nouveau graphique**, l'éditeur s'ouvre avec le sélecteur *Type* en haut. Le choix d'un type déplie le formulaire vers les champs dont ce type a besoin.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Paramètres → Graphiques → invoices-by-month</div>
    <div style={{display: 'flex', gap: '6px'}}>
      <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Aperçu</span>
      <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 700}}>Enregistrer</span>
    </div>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Type</div><div><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 600}}>Bar ▾</span></div>
    <div style={{opacity: 0.75}}>Titre</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Factures émises par mois</span></div>
    <div style={{opacity: 0.75}}>Connecteur</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>billing ▾</span></div>
    <div style={{opacity: 0.75}}>Requête</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>monthly-invoice-counts ▾</span></div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Axe X</div>
    <div>
      <div style={{display: 'grid', gridTemplateColumns: '110px 1fr 100px', gap: '6px', alignItems: 'center'}}>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Champ</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>month ▾</span></div><div></div>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Libellé</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Mois</span></div><div></div>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Format</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>yyyy-MM</span></div><div></div>
      </div>
    </div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Séries</div>
    <div>
      <div style={{display: 'grid', gridTemplateColumns: '110px 1fr 80px 40px', gap: '6px', alignItems: 'center'}}>
        <div style={{opacity: 0.6, fontSize: '10px'}}>Champ</div><div style={{fontSize: '10px', opacity: 0.6}}>Libellé</div><div style={{fontSize: '10px', opacity: 0.6}}>Couleur</div><div></div>
        <div><span style={{padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>count</span></div><div><span style={{padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>Factures</span></div><div><span style={{padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(74,158,255,0.40)', background: 'rgba(74,158,255,0.10)', color: '#4a9eff', fontSize: '11px', fontWeight: 700}}>#4a9eff</span></div><div style={{opacity: 0.55}}>✕</div>
      </div>
      <div style={{marginTop: '6px'}}><span style={{padding: '4px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.15)', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '11px', fontWeight: 600}}>+ Ajouter série</span></div>
    </div>
  </div>
</div>

### Champs communs

| Champ | Effet |
|---|---|
| **Type** | Le type de graphique — voir [Types](#types) ci-dessous. Changer le type adapte le reste du formulaire. |
| **Titre** / **Sous-titre** | Affichés au-dessus du graphique. Le sous-titre est facultatif. |
| **Connecteur** / **Requête** | La source de données. Listes déroulantes des connecteurs et de leurs requêtes de lecture nommées. |
| **Paramètres** | Tableau de valeurs fixes pour les paramètres de la requête — même forme qu'ailleurs. Prend en charge les tokens `${week.monday}` / `${month.last}` documentés dans [Liaison des paramètres](./build/queries/parameter-binding.md). |
| **Hauteur** | Hauteur CSS du graphique rendu. Par défaut `320px`. |
| **Légende** | Bascule + position (`bottom` / `right` / `top`). Par défaut *active, en bas*. |
| **Info-bulle** | Bascule. Par défaut *active*. |
| **Grille** | Bascule. Par défaut *active*. |
| **Intervalle de rafraîchissement** | Secondes entre chaque cycle d'auto-rafraîchissement. `0` (par défaut) = manuel uniquement. |

### Axe X

| Champ | Effet |
|---|---|
| **Champ** | Liste déroulante des colonnes que la requête retourne. |
| **Libellé** | Affiché sous le graphique. |
| **Format** | Format de date / nombre appliqué aux libellés des graduations. Les dates utilisent la syntaxe `date-fns` (`yyyy-MM`, `dd/MM`) ; les nombres utilisent la notation `Intl.NumberFormat`. |
| **Intervalle de graduation** | `preserveStartEnd` (par défaut) / `auto` / un entier "garder une graduation sur N". |

### Séries

Les séries forment une liste triable. Chaque ligne présente :

| Champ | Effet |
|---|---|
| **Champ** | Colonne retournée par la requête. |
| **Libellé** | Libellé de la légende / info-bulle. |
| **Couleur** | Couleur Hex / CSS. Le framework choisit une palette quand le champ est vide. |
| **Format** | Format de nombre appliqué à l'info-bulle et aux libellés des points. |
| **Axe** | `left` (par défaut) / `right`. Utiliser *right* pour les graphiques à deux échelles (par ex. nombre + montant). |
| **Point** *(line / area uniquement)* | Bascule. Masquer les points pour un sparkline plus épuré. |

---

## Types \{#types\}

| Type | Forme | Requête typique |
|---|---|---|
| **Line** | Une ligne par série, axe X horizontal. | Séries temporelles — `x = date`, séries = numériques. |
| **Area** | Identique à line, zone remplie en dessous. Bascule *Empilé* disponible. | Cumul ou composition dans le temps. |
| **Bar** | Barres verticales par graduation X. Bascules *Empilé* / *Horizontal* disponibles. | Comptages par période, classements top-N. |
| **Column** | Alias de bar — existe pour la convention "column = vertical, bar = horizontal". |
| **Pie** / **Donut** | Une part par ligne ; le champ X étiquette chaque part, les séries les dimensionnent. | Part d'un total sur un petit ensemble de catégories. |
| **Scatter** | Deux axes numériques ; un point par ligne. Un *Champ de taille* facultatif en fait un graphique à bulles. | Corrélation entre deux mesures. |

Chaque bascule / champ propre au type apparaît dans l'éditeur uniquement quand ce type est sélectionné.

### Options propres au type

| Type | Champs supplémentaires |
|---|---|
| **Line / Area** | **Lissé** (interpolation monotone-cubique), **Empilé** *(area uniquement)*, **Gestion des valeurs nulles** (`Connect` / `Gap`). |
| **Bar / Column** | **Empilé**, **Taille des barres**, **Horizontal**. |
| **Pie / Donut** | **Rayon intérieur** *(donut uniquement)*, **Rayon extérieur**, **Position du libellé** (`outside` / `inside` / `none`), **Palette**. |
| **Scatter** | **Champ de taille**, **Plage de taille** (`[min_px, max_px]`). |

---

## Grouper par

Le champ **Grouper par** (dans la section *Séries* de l'éditeur) transforme une colonne source en **N séries parallèles** sans lister chaque série à la main. Utile quand l'ensemble des valeurs n'est pas connu à l'avance — statuts de factures, commerciaux, …

| Champ | Effet |
|---|---|
| **Champ de regroupement** | Colonne dont les valeurs distinctes deviennent les séries. |
| **Champ Y** | Colonne dont le framework somme / prend la première valeur par groupe. |
| **Palette** | Tableau de couleurs utilisé pour les séries générées, dans l'ordre de première apparition. Repli sur la palette par défaut quand vide. |

Quand *Grouper par* est défini, la liste par série ci-dessus se réduit à un seul champ Y et une palette de couleurs — le framework pivote les lignes lui-même.

---

## Aperçu

Le bouton *Aperçu* (en haut de l'éditeur) rend le graphique en ligne avec les réglages actuels. L'aperçu interroge la base de données en direct (ou le pool sur lequel le connecteur pointe) et affiche les données les plus récentes — utile pour confirmer un changement de couleur avant d'enregistrer.

---

## Réutiliser un graphique

Un graphique enregistré est référencé par son identifiant depuis n'importe quel tableau de bord. **Définir une fois, référencer partout** — un changement de source de données sur le graphique se reflète dans chaque panneau de tableau de bord.

Dans le [constructeur de tableau de bord](./dashboards.md), ajouter un panneau de graphique se résume à une liste déroulante *Graphique* de tous les graphiques de l'installation + un glisser-déposer *Position* sur la grille.

---

## Permissions

Un graphique hérite de la permission de sa requête sous-jacente — un appelant qui ne peut pas exécuter `sql:billing:monthly-invoice-counts` ne voit pas le graphique dans un tableau de bord. Le framework retire le panneau en silence plutôt que d'afficher un placeholder 403, pour garder les tableaux de bord informatifs.

---

## Sous le capot

Les définitions des graphiques sont enregistrées dans `charts.toml`. Les opérateurs **ne modifient pas ce fichier à la main** ; le constructeur de graphiques est l'interface de référence. Les opérateurs avancés peuvent recourir à l'onglet *Raw TOML* comme issue de secours.

---

## Pour aller plus loin

- [Tableaux de bord](./dashboards.md) — comment un graphique se pose sur un panneau de tableau de bord.
- [Liaison des paramètres](./build/queries/parameter-binding.md) — valeurs fixes, tokens, cascades.
- [Concepts → Connecteurs](./connectors.md) — le connecteur qui alimente les données du graphique.
