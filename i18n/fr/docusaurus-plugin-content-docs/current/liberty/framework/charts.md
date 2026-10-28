---
title: Graphiques
description: "Un graphique enregistré représente le résultat d'une requête de connecteur en barres, courbes, aires ou camembert : une colonne X, une ou plusieurs séries avec leur couleur et leur axe, et une agrégation. Construit dans Paramètres → Graphiques ou enregistré depuis la vue Graphique d'un écran, puis réutilisé dans les tableaux de bord."
keywords: [Liberty Next, graphiques, barres, courbe, aire, camembert, séries, agrégation, double axe, tableaux de bord, vue Graphique, charts.toml]
---

# Graphiques

Un **graphique** représente le résultat d'une requête de connecteur : une colonne X, une ou plusieurs séries, et une agrégation des lignes qui partagent la même valeur X. Il s'enregistre sous un nom et se réutilise dans les [tableaux de bord](./dashboards.md) ; les mêmes réglages sont disponibles à la volée dans la vue **Graphique** d'un écran.

Quatre types sont disponibles : **barres**, **courbe**, **aire** et **camembert**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cht-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cht-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cht-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cht-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="400" rx="14" fill="url(#cht-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">[charts.sales.revenue_by_month]</text>
  <rect x="240" y="58" width="115" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="271.5" y="73.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="304" y="59" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="329.0" y="73.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Chart</text>
  <text x="240" y="100" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="240" y="106" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Courbe ▾</text>
  <text x="366" y="100" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Axe X</text>
  <rect x="366" y="106" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="376" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">MONTH ▾</text>
  <text x="502" y="100" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Series</text>
  <rect x="502" y="106" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">REVENUE ▾</text>
  <rect x="616" y="109" width="16" height="16" rx="3" fill="#4a9eff"/>
  <rect x="636" y="106" width="22" height="22" rx="5" fill="url(#cht-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="647.0" y="120.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="660" y="106" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="671.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <rect x="690" y="106" width="100" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="700" y="120.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">MARGIN ▾</text>
  <rect x="794" y="109" width="16" height="16" rx="3" fill="#22c55e"/>
  <rect x="814" y="106" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="825.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="838" y="106" width="22" height="22" rx="5" fill="url(#cht-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="849.0" y="120.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <rect x="868" y="106" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="880.0" y="120.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="240" y="152" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Agréger</text>
  <rect x="240" y="158" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="172.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Somme ▾</text>
  <rect x="240" y="196" width="720" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="230" x2="920" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="270" x2="920" y2="270" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="310" x2="920" y2="310" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="350" x2="920" y2="350" stroke="#1f2937" strokeWidth="1"/>
  <polyline points="333,330 440,310 547,325 653,285 760,260 867,272" fill="none" stroke="#4a9eff" strokeWidth="2.5"/>
  <polyline points="333,300 440,290 547,312 653,270 760,262 867,280" fill="none" stroke="#22c55e" strokeWidth="2.5"/>
  <text x="333.3333333333333" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <text x="440.0" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <text x="546.6666666666667" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <text x="653.3333333333333" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <text x="760.0" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <text x="866.6666666666666" y="368" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux onglets</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">source, puis graphique</text>
  <line x1="210" y1="67.0" x2="240" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="10" y="140" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type et axe X</text>
  <text x="20" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">barres, courbe, aire, camembert</text>
  <line x1="210" y1="157.0" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Agrégation</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes de même X</text>
  <line x1="210" y1="277.0" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par série</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonne, couleur, axe G/D</text>
  <line x1="1000" y1="77.0" x2="780" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aperçu en direct</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">échantillon de la requête</text>
  <line x1="1000" y1="267.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cht-arrow)"/>
</svg>

---

## Paramètres → Graphiques \{#list\}

Les graphiques sont regroupés par connecteur : les pastilles de **portée** en haut de l'écran choisissent un connecteur, et **Add a connector scope** en ajoute un. La liste affiche chaque graphique de la portée avec son libellé, son identifiant et un badge *override* quand il est marqué comme personnalisation locale. Chaque ligne propose :

| Bouton | Effet |
|---|---|
| **Find usages** | Les tableaux de bord qui affichent le graphique. |
| **Find dependencies** | La liste de ce dont dépend le graphique (requête, connecteur…) et le téléchargement du graphique et des éléments cochés sous forme de package. |
| **Renommer** | Change l'identifiant du graphique. |
| **Cloner** | Copie le graphique sous un nouvel identifiant. |
| **Supprimer** | Supprime le graphique. |

**Add chart** ouvre l'éditeur d'un nouveau graphique dans la portée courante ; un clic sur une ligne ouvre le graphique en modification.

---

## L'éditeur \{#editor\}

L'éditeur comporte deux onglets.

### General \{#general\}

| Champ | Effet |
|---|---|
| **Id** | L'identifiant du graphique : lettres, chiffres, tirets bas et tirets. Les tableaux de bord désignent le graphique par cet identifiant. |
| **Label** | Le titre du graphique dans les listes et les tableaux de bord. |
| **Description** | Facultative. |
| **Connector** | Le connecteur de la portée, non modifiable ; pour rattacher un graphique à un autre connecteur, le recréer dans cette portée. |
| **Query** | La requête de lecture dont le résultat est représenté. Les boutons voisins modifient la requête, la clonent ou en créent une nouvelle sans quitter l'éditeur. |

### Chart \{#chart\}

L'onglet charge un échantillon des lignes de la requête et dessine le graphique au fil des réglages :

| Champ | Effet |
|---|---|
| **Graphique** | Le type : barres, courbe, aire ou camembert. |
| **Axe X** | La colonne portée par l'axe X — les libellés des parts pour un camembert. |
| **Series** | Une ligne par colonne Y : la colonne, une pastille de couleur, et **L** / **R** pour placer la série sur l'axe Y de gauche ou de droite. **+** ajoute une série. Un camembert n'utilise que la première série. |
| **Pivoter par** | Facultatif, absent pour un camembert. Une colonne dont chaque valeur distincte devient une série (un processus, un statut), chacune agrégeant la première colonne Y. Une requête qui renvoie *date de rafraîchissement · processus · lignes* donne une barre par rafraîchissement, empilée par processus, sans pivot en SQL. |
| **Agréger** | La façon de combiner les lignes de même valeur X : **Somme**, **Moyenne**, **Compte** (compte les lignes, sans tenir compte de la valeur Y), **Min**, **Max**, ou **Aucune (par ligne)** pour conserver chaque ligne — pour une série chronologique dont l'axe X est déjà unique. |

L'axe Y affiche des graduations abrégées (1,2 k, 27,5 M, selon la langue du navigateur) ; l'infobulle donne le chiffre complet. Dès qu'une série est placée sur l'axe de droite, le graphique reçoit un second axe Y — utile pour deux échelles, comme un montant et un nombre. La légende s'affiche à partir de deux séries. Sans couleur choisie, une série prend la couleur suivante de la palette.

L'enregistrement exige une colonne X et au moins une série.

---

## Depuis la vue Graphique d'un écran \{#from-a-screen\}

Le bouton **Graphique** d'un écran remplace la grille par un graphique des lignes affichées, avec les mêmes réglages (type, axe X, séries, agrégation). Deux ajouts y figurent :

- **Load saved** — applique un graphique enregistré construit sur le même connecteur et la même requête ;
- **Enregistrer…** — enregistre le graphique courant sous un identifiant, un libellé et une description, prêt pour les tableaux de bord. Ce bouton n'apparaît que pour un superutilisateur.

---

## Dans un tableau de bord \{#in-a-dashboard\}

Le widget **Chart** d'un tableau de bord affiche un graphique enregistré par son identifiant, ou porte sa propre définition de graphique. Une modification du graphique enregistré se répercute sur tous les tableaux de bord qui l'utilisent. Voir [Tableaux de bord](./dashboards.md).

---

## Mises à jour \{#override\}

Le badge *override* signale un graphique marqué comme personnalisation locale : un package de mise à jour ne l'écrase pas. Voir [Packages](./build/packages.md).

---

## Pour aller plus loin

- [Tableaux de bord](./dashboards.md) — réunir graphiques, indicateurs et tables.
- [Connecteurs](./connectors.md) — les requêtes lues par un graphique.
- [Vues enregistrées](./saved-views.md) — ce qu'un utilisateur peut conserver d'un écran.
