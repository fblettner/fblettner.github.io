---
title: Tableaux de bord
description: "Un tableau de bord agence des indicateurs et des graphiques au-dessus de requêtes connecteur nommées. Les panneaux barre, ligne, camembert et numérique sont déclarés en TOML — le DashboardView React rend la mise en page, l'API renvoie les lignes."
keywords: [Liberty Next, tableau de bord, dashboard, graphique, barre, ligne, camembert, indicateur, panneau, dashboards.toml, mise en page]
---

# Tableaux de bord

Un **tableau de bord** est un agencement de graphiques et de cartes d'indicateurs au-dessus des mêmes requêtes nommées que celles utilisées par les [Écrans](/liberty/framework/screens). Un seul fichier (`config/dashboards.toml`) déclare tous les tableaux livrés par l'application. Le `DashboardView` React lit la mise en page, lance une requête par panneau puis rend la grille.

Les tableaux de bord sont rechargeables à chaud avec le reste de la configuration.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="db-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="db-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="db-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="380" rx="14" fill="url(#db-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">📊 Vue d'ensemble Utilisateurs · Tableau de bord</text>
  <rect x="860" y="50" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="900" y="65" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">↻ Rafraîchir</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.35)" strokeWidth="1.2"/>
  <text x="76" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEURS · TOTAL</text>
  <text x="76" y="152" fill="#4a9eff" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">1 248</text>
  <text x="76" y="170" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace">+12 ce mois</text>

  <rect x="280" y="100" width="200" height="80" rx="10" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.35)" strokeWidth="1.2"/>
  <text x="296" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACTIFS</text>
  <text x="296" y="152" fill="#4ade80" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">1 102</text>
  <text x="296" y="170" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">88 % du total</text>

  <rect x="500" y="100" width="200" height="80" rx="10" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.35)" strokeWidth="1.2"/>
  <text x="516" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">INACTIFS</text>
  <text x="516" y="152" fill="#f87171" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">146</text>
  <text x="516" y="170" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">12 % du total</text>

  <rect x="720" y="100" width="200" height="80" rx="10" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.35)" strokeWidth="1.2"/>
  <text x="736" y="120" fill="#64748b" fontSize="9" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ADMINS</text>
  <text x="736" y="152" fill="#c084fc" fontSize="28" fontWeight="800" fontFamily="system-ui, sans-serif">18</text>
  <text x="736" y="170" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">3 ajoutés · 1 retiré</text>

  <rect x="60" y="200" width="440" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="76" y="222" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEURS PAR STATUT · BARRE</text>
  <line x1="80" y1="380" x2="480" y2="380" stroke="#334155" strokeWidth="1"/>

  <rect x="100" y="270" width="40" height="110" fill="rgba(74,158,255,0.45)"/>
  <text x="120" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Actif</text>
  <rect x="160" y="320" width="40" height="60" fill="rgba(255,159,10,0.45)"/>
  <text x="180" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">En attente</text>
  <rect x="220" y="350" width="40" height="30" fill="rgba(248,113,113,0.45)"/>
  <text x="240" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Désactivé</text>
  <rect x="280" y="305" width="40" height="75" fill="rgba(192,132,252,0.45)"/>
  <text x="300" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Admin</text>
  <rect x="340" y="290" width="40" height="90" fill="rgba(50,215,75,0.45)"/>
  <text x="360" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Lecture seule</text>
  <rect x="400" y="345" width="40" height="35" fill="rgba(148,163,184,0.45)"/>
  <text x="420" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Autre</text>

  <rect x="520" y="200" width="400" height="200" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="536" y="222" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATIONS PAR MOIS · LIGNE</text>
  <line x1="540" y1="380" x2="900" y2="380" stroke="#334155" strokeWidth="1"/>

  <polyline points="560,360 620,330 680,300 740,310 800,260 860,240 900,250" fill="none" stroke="#4a9eff" strokeWidth="2"/>
  <circle cx="560" cy="360" r="3" fill="#4a9eff"/>
  <circle cx="620" cy="330" r="3" fill="#4a9eff"/>
  <circle cx="680" cy="300" r="3" fill="#4a9eff"/>
  <circle cx="740" cy="310" r="3" fill="#4a9eff"/>
  <circle cx="800" cy="260" r="3" fill="#4a9eff"/>
  <circle cx="860" cy="240" r="3" fill="#4a9eff"/>
  <circle cx="900" cy="250" r="3" fill="#4a9eff"/>

  <text x="560" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Jan</text>
  <text x="620" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Fév</text>
  <text x="680" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Mar</text>
  <text x="740" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Avr</text>
  <text x="800" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Mai</text>
  <text x="860" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Juin</text>
  <text x="900" y="396" fill="#94a3b8" fontSize="9" textAnchor="middle">Juil</text>
</svg>

---

## Déclarer un tableau de bord

```toml
[dashboards.myapp.overview]
label       = "Vue d'ensemble utilisateurs"
description = "Instantané des comptes, des statuts et de la croissance récente."
auto_load   = true

# Un panneau par indicateur ou graphique
[[dashboards.myapp.overview.panels]]
id          = "users_total"
type        = "stat"
label       = "Utilisateurs · total"
query       = "users_count"          # toute requête SELECT — la première colonne de la première ligne est lue
columns     = 3                       # largeur dans la grille du tableau (sur 12)
delta_field = "delta_month"           # nombre secondaire optionnel

[[dashboards.myapp.overview.panels]]
id      = "users_per_status"
type    = "bar"
label   = "Utilisateurs par statut"
query   = "users_by_status"           # SELECT status, count(*) FROM users GROUP BY status
columns = 6
x       = "status"
y       = "count"

[[dashboards.myapp.overview.panels]]
id      = "created_per_month"
type    = "line"
label   = "Créations par mois"
query   = "users_created_per_month"
columns = 6
x       = "month"
y       = "count"

[[dashboards.myapp.overview.panels]]
id      = "users_by_role"
type    = "pie"
label   = "Utilisateurs par rôle"
query   = "users_by_role"
columns = 4
slice   = "role"
value   = "count"
```

La grille du tableau de bord est divisée en **12 colonnes**. Un panneau avec `columns = 6` occupe une demi-ligne ; deux panneaux `columns = 3` plus un panneau `columns = 6` partagent une ligne.

---

## Types de panneau

| `type` | Ce qui est rendu | Champs requis |
|---|---|---|
| `stat` | Un grand nombre, accompagné d'un delta optionnel. | `query` (lit la première colonne de la première ligne). `delta_field` optionnel. |
| `bar` | Des barres verticales, une par catégorie. | `x` (catégorie), `y` (valeur numérique). |
| `line` | Une courbe sur un axe temporel ou ordonné. | `x`, `y`. Les points sont rendus dans l'ordre renvoyé par la requête. |
| `pie` | Un camembert, une part par tranche. | `slice` (catégorie), `value` (valeur numérique). |
| `grid` *(prévu)* | Une mini-table directement dans le tableau de bord. | `query`, options `columns` optionnelles. |

Chaque panneau s'appuie sur **une** requête nommée du connecteur du tableau — ou d'un autre connecteur si le panneau précise `connector = "autre"`. La permission requise est `sql:<connecteur>:<requête>` ; un panneau auquel l'utilisateur n'a pas accès disparaît, et la mise en page se réajuste automatiquement.

---

## Mise en page

Les panneaux sont rendus dans l'ordre de déclaration, de gauche à droite, dans une grille de 12 colonnes. Un panneau qui n'indique pas `columns` prend la valeur `4` par défaut (trois panneaux côte à côte).

Options de mise en page :

| Champ | Effet |
|---|---|
| `columns` | Largeur du panneau (entre 1 et 12). Le panneau passe à la ligne suivante en cas de débordement. |
| `rows` | Hauteur optionnelle en nombre de lignes. Valeur par défaut : `1`. |
| `group` | Étiquette de groupe ; l'interface affiche un en-tête de section au-dessus du premier panneau de chaque groupe. |
| `auto_load` | Exécute la requête du panneau à l'ouverture du tableau. Hérite par défaut du `auto_load` du tableau de bord. |

---

## Endpoints REST

| Méthode | Chemin | Rôle |
|---|---|---|
| `GET` | `/api/dashboards` | Tous les tableaux de bord accessibles, regroupés par app. |
| `GET` | `/api/dashboards/{app}` | Les tableaux de bord d'une app. |
| `GET` | `/api/dashboards/{app}/{id}` | La mise en page complète du tableau. |
| `POST` | `/api/dashboards/{app}/{id}/refresh` | Relance chaque panneau côté serveur (passe par les routes `/api/query/…` sous-jacentes). |

Le `DashboardView` appelle directement `/api/query/{connecteur}/{nom}` pour chaque panneau — mêmes contrôles que pour une grille de table. Un panneau dont la requête n'est pas autorisée est masqué silencieusement.

---

## Conseils & bonnes pratiques

- **Réutiliser les requêtes de l'écran.** Un tableau de bord a rarement besoin de SQL nouveau : un `users_by_status` avec `GROUP BY` se déclare à côté de `users_get`, dans le même connecteur. Le dictionnaire reste unique.
- **Les panneaux numériques sont peu coûteux ; les camemberts moins.** Un camembert sur des milliers de tranches devient illisible. Au-delà de huit tranches, basculer sur un panneau barre avec un `LIMIT N` et un agrégat *Autres*.
- **Choisir une largeur cohérente par type.** Les indicateurs numériques rendent bien à `columns = 3` (quatre côte à côte) ; les graphiques barre et ligne à `columns = 6` (deux côte à côte) ; les camemberts à `columns = 4`. La grille s'ajuste alors naturellement.
- **Un tableau de bord est filtré par les permissions.** Les panneaux que l'utilisateur ne peut pas exécuter disparaissent. La mise en page s'adapte d'elle-même — il faut éviter de concevoir des panneaux qui dépendent les uns des autres.
