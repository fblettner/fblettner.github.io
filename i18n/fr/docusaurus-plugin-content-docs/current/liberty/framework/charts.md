---
title: Graphiques
description: "Un graphique enregistré représente le résultat d'une requête de connecteur en barres, courbes, aires ou camembert : une colonne X, une ou plusieurs séries avec leur couleur et leur axe, et une agrégation. Construit dans Liberty Next → Analyse → Graphiques ou enregistré depuis la vue Graphique d'un écran, puis réutilisé dans les tableaux de bord."
keywords: [Liberty Next, graphiques, barres, courbe, aire, camembert, séries, agrégation, double axe, tableaux de bord, vue Graphique, charts.toml]
---

# Graphiques

Un **graphique** représente le résultat d'une requête de connecteur : une colonne X, une ou plusieurs séries, et une agrégation des lignes qui partagent la même valeur X. Il s'enregistre sous un nom et se réutilise dans les [tableaux de bord](./dashboards.md) ; les mêmes réglages sont disponibles à la volée dans la vue **Graphique** d'un écran.

Quatre types sont disponibles : **barres**, **courbe**, **aire** et **camembert**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 482" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="che-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="che-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="che-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="che-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="448" rx="14" fill="url(#che-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">▥</text>
  <text x="258" y="46" fill="#e2e8f0" fontSize="11.5" fontWeight="700" fontFamily="ui-monospace, monospace">[charts.sales.revenue_by_month]</text>
  <rect x="916" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="927.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <rect x="942" y="32" width="22" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="45.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <line x1="221" y1="62" x2="979" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <text x="244" y="84" fill="#94a3b8" fontSize="10.5" fontFamily="system-ui, sans-serif">☰  Général</text>
  <text x="328.8" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▥  Graphique</text>
  <line x1="324.8" y1="95" x2="405.36" y2="95" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="221" y1="96" x2="979" y2="96" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="116" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GRAPHIQUE</text>
  <rect x="240" y="122" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="136.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Courbe              ▾</text>
  <text x="380" y="116" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AXE X</text>
  <rect x="380" y="122" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="390" y="136.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">MONTH            ▾</text>
  <text x="520" y="116" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PIVOTER PAR</text>
  <rect x="520" y="122" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="530" y="136.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Une série par valeur  ▾</text>
  <text x="240" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SÉRIES</text>
  <rect x="240" y="170" width="460" height="36" rx="6" fill="none" stroke="#334155" strokeWidth="1.2" strokeDasharray="4 3"/>
  <rect x="248" y="175" width="210" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="253" y="179" width="104" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="263" y="191.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">REVENUE        ▾</text>
  <rect x="364" y="181" width="14" height="14" rx="3" fill="#4a9eff"/>
  <rect x="384" y="179" width="18" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="393.0" y="191.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="406" y="179" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="415.0" y="191.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <text x="440" y="192" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="464" y="175" width="210" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="469" y="179" width="104" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="479" y="191.5" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">MARGIN        ▾</text>
  <rect x="580" y="181" width="14" height="14" rx="3" fill="#4ade80"/>
  <rect x="600" y="179" width="18" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="609.0" y="191.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <rect x="622" y="179" width="18" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="631.0" y="191.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">R</text>
  <text x="656" y="192" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="688" y="193" fill="#94a3b8" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="714" y="164" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AGRÉGER</text>
  <rect x="714" y="170" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="724" y="184.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Somme              ▾</text>
  <rect x="240" y="216" width="720" height="196" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <line x1="280" y1="236.0" x2="940" y2="236.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="239.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">120k</text>
  <line x1="280" y1="271.0" x2="940" y2="271.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="274.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">90k</text>
  <line x1="280" y1="306.0" x2="940" y2="306.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="309.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">60k</text>
  <line x1="280" y1="341.0" x2="940" y2="341.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="344.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">30k</text>
  <line x1="280" y1="376.0" x2="940" y2="376.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="274" y="379.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="946" y="239.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">40%</text>
  <text x="946" y="274.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">30%</text>
  <text x="946" y="309.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">20%</text>
  <text x="946" y="344.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">10%</text>
  <text x="946" y="379.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">0%</text>
  <polyline points="300.0,316.0 424.0,304.0 548.0,310.0 672.0,278.0 796.0,256.0 920.0,264.0" fill="none" stroke="#4a9eff" strokeWidth="2"/>
  <polyline points="300.0,296.0 424.0,290.0 548.0,306.0 672.0,284.0 796.0,272.0 920.0,280.0" fill="none" stroke="#4ade80" strokeWidth="2"/>
  <text x="300.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">05</text>
  <text x="424.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">06</text>
  <text x="548.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">07</text>
  <text x="672.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">08</text>
  <text x="796.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">09</text>
  <text x="920.0" y="390" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <circle cx="530.0" cy="402" r="3.5" fill="#4ade80"/>
  <text x="537.0" y="405" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">MARGIN</text>
  <circle cx="600.0" cy="402" r="3.5" fill="#4a9eff"/>
  <text x="607.0" y="405" fill="#4a9eff" fontSize="8.5" fontFamily="system-ui, sans-serif">REVENUE</text>
  <line x1="221" y1="424" x2="979" y2="424" stroke="#1f2937" strokeWidth="1"/>
  <rect x="870" y="434" width="90" height="22" rx="5" fill="url(#che-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.0" y="448.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="800" y="434" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="831.0" y="448.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux onglets</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Général : id, libellé, requête</text>
  <line x1="200" y1="83.0" x2="244" y2="84" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="20" y="126" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="141" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type, axe X, pivot</text>
  <text x="30" y="154" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">barres, courbe, aire, camembert</text>
  <line x1="200" y1="143.0" x2="240" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aperçu en direct</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un échantillon des lignes</text>
  <line x1="200" y1="287.0" x2="280" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un bloc par série</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">couleur · axe L / R · ✕</text>
  <line x1="1000" y1="117.0" x2="415" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="1000" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Agréger</text>
  <text x="1010" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes de même valeur X</text>
  <line x1="1000" y1="187.0" x2="844" y2="181" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Second axe Y</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dès qu'une série est sur R</text>
  <line x1="1000" y1="267.0" x2="950" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#che-arrow)"/>
</svg>

---

## Liberty Next → Analyse → Graphiques \{#list\}

Les graphiques sont regroupés par connecteur : les pastilles **Connecteur** en haut de la page en choisissent un, **Ajouter une portée** ajoute un connecteur qui n'a pas encore de graphique et **Filtrer…** restreint la liste. Chaque ligne indique l'identifiant du graphique, son libellé, puis sa requête, son type et sa colonne X (`sales.revenue_get · line · x: MONTH`), avec un badge *surcharge* quand il est marqué comme personnalisation locale. **Ajouter un graphique** et **Recharger la config** se trouvent dans l'en-tête de la page. Chaque ligne propose :

| Bouton | Effet |
|---|---|
| **Rechercher les usages** | Les tableaux de bord qui affichent le graphique. |
| **Rechercher les dépendances** | La liste de ce dont dépend le graphique (requête, connecteur…) et le téléchargement du graphique et des éléments cochés sous forme de package. |
| **Renommer** | Change l'identifiant du graphique. |
| **Cloner** | Copie le graphique sous un nouvel identifiant. |
| **Supprimer** | Supprime le graphique. |

**Ajouter un graphique** ouvre l'éditeur d'un nouveau graphique dans la portée courante ; un clic sur une ligne ouvre le graphique en modification.

---

## L'éditeur \{#editor\}

L'éditeur s'ouvre dans une fenêtre qui porte le nom du graphique (`[charts.<connecteur>.<id>]`) et comporte deux onglets, **Général** et **Graphique**. **Annuler** et **Enregistrer** se trouvent dans son pied ; le fermer avec des modifications non enregistrées propose de les enregistrer, de les abandonner ou de continuer à modifier.

### Général \{#general\}

| Champ | Effet |
|---|---|
| **Id** | L'identifiant du graphique : lettres, chiffres, tirets bas et tirets. Les tableaux de bord désignent le graphique par cet identifiant. |
| **Libellé** | Le titre du graphique dans les listes et les tableaux de bord. |
| **Description** | Facultative. |
| **Connecteur** | Le connecteur de la portée, non modifiable ; pour rattacher un graphique à un autre connecteur, le recréer dans cette portée. |
| **Requête** | La requête de lecture dont le résultat est représenté. Les boutons voisins modifient la requête, la clonent ou en créent une nouvelle sans quitter l'éditeur. |

### Graphique \{#chart\}

L'onglet charge un échantillon des lignes de la requête et dessine le graphique au fil des réglages :

| Champ | Effet |
|---|---|
| **Graphique** | Le type : barres, courbe, aire ou camembert. |
| **Axe X** | La colonne portée par l'axe X — les libellés des parts pour un camembert. |
| **Séries** | Un bloc par colonne Y : la colonne, une pastille de couleur, **L** / **R** pour placer la série sur l'axe Y de gauche ou de droite, et **✕** pour la retirer. **+** ajoute une série. Un camembert n'utilise que la première série. |
| **Pivoter par** | Facultatif, absent pour un camembert. Une colonne dont chaque valeur distincte devient une série (un processus, un statut), chacune agrégeant la première colonne Y. Une requête qui renvoie *date de rafraîchissement · processus · lignes* donne une barre par rafraîchissement, empilée par processus, sans pivot en SQL. |
| **Agréger** | La façon de combiner les lignes de même valeur X : **Somme**, **Moyenne**, **Compte** (compte les lignes, sans tenir compte de la valeur Y), **Min**, **Max**, ou **Aucune (par ligne)** pour conserver chaque ligne — pour une série chronologique dont l'axe X est déjà unique. |

L'axe Y affiche des graduations abrégées (1,2 k, 27,5 M, selon la langue du navigateur) ; l'infobulle donne le chiffre complet. Dès qu'une série est placée sur l'axe de droite, le graphique reçoit un second axe Y — utile pour deux échelles, comme un montant et un nombre. La légende s'affiche à partir de deux séries. Sans couleur choisie, une série prend la couleur suivante de la palette.

L'enregistrement exige une colonne X et au moins une série.

---

## Depuis la vue Graphique d'un écran \{#from-a-screen\}

Le bouton **Graphique** d'un écran remplace la grille par un graphique des lignes affichées, avec les mêmes réglages (type, axe X, séries, agrégation). Deux ajouts y figurent :

- **Charger un enregistré** — applique un graphique enregistré construit sur le même connecteur et la même requête ;
- **Enregistrer…** — enregistre le graphique courant sous un identifiant, un libellé et une description, prêt pour les tableaux de bord. Ce bouton n'apparaît que pour un superutilisateur.

---

## Dans un tableau de bord \{#in-a-dashboard\}

Le widget **Graphique** d'un tableau de bord affiche un graphique enregistré par son identifiant, ou porte sa propre définition de graphique. Une modification du graphique enregistré se répercute sur tous les tableaux de bord qui l'utilisent. Voir [Tableaux de bord](./dashboards.md).

---

## Mises à jour \{#override\}

Le badge *surcharge* signale un graphique marqué comme personnalisation locale : un package de mise à jour ne l'écrase pas. Voir [Packages](./build/packages.md).

---

## Pour aller plus loin

- [Tableaux de bord](./dashboards.md) — réunir graphiques, indicateurs et tables.
- [Connecteurs](./connectors.md) — les requêtes lues par un graphique.
- [Vues enregistrées](./saved-views.md) — ce qu'un utilisateur peut conserver d'un écran.
