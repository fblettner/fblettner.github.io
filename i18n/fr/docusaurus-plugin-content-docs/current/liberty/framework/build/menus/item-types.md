---
title: Types d'éléments
description: "Les cinq types de feuilles — screen / query / endpoint / dashboard / page — ce qu'ouvre chacun, la forme du champ target, la règle du connecteur, et quand recourir à chacun."
keywords: [Liberty Framework, élément de menu, query, endpoint, dashboard, page, target, connector, feuille, dossier]
---

# Types d'éléments

Un élément de menu est soit un **dossier** (sans `type`), soit une **feuille** qui ouvre quelque chose. Le `type` de la feuille décide ce qu'est ce quelque chose et ce que signifient les champs `target` / `connector`.

Cinq types de feuilles :

| `type` | Ouvre | `target` est | `connector` |
|---|---|---|---|
| **`screen`** | Un écran conçu. | La requête de lecture de l'écran, choisie parmi les écrans conçus. | Le connecteur qui le possède. Vide = le connecteur de l'application. |
| **`query`** | La même vue en grille, choisie parmi les requêtes brutes. | Un nom de requête SELECT. | Le connecteur qui possède la requête. Vide = le connecteur de l'application. |
| **`endpoint`** | Le HttpRunner — déclenche un endpoint de connecteur API. | Un nom d'endpoint. | Le connecteur API. Vide = celui de l'application. |
| **`dashboard`** | Un tableau de bord (graphiques + KPI). | `<app>.<id>` du tableau de bord. | Ne doit pas être renseigné (l'application figure dans la cible). |
| **`page`** | Une route frontend enregistrée — une fonctionnalité personnalisée comme `/nomaflow`. | Le chemin de la route. | NE doit PAS être renseigné. |

Cette page détaille chacun avec des exemples concrets.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 350" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mit-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mit-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mit-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mit-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="320" rx="14" fill="url(#mit-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Menus</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="300" height="240" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="100" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▾ 📁 Ventes</text>
  <text x="274" y="130" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">👥 Clients</text>
  <text x="274" y="160" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">📈 Affaires</text>
  <rect x="246" y="174" width="288" height="24" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="190" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">📊 Pipeline</text>
  <text x="256" y="220" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">⚙ Nomaflow</text>
  <text x="560" y="92" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Inspecteur</text>
  <text x="560" y="119" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">label</text>
  <rect x="640" y="104" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="118.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pipeline</text>
  <text x="560" y="151" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">type</text>
  <rect x="640" y="136" width="230" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="755.0" y="150.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">dashboard ▾</text>
  <text x="560" y="183" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">target</text>
  <rect x="640" y="168" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="182.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">crm.pipeline ▾</text>
  <text x="560" y="215" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">connector</text>
  <rect x="640" y="200" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="214.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">—</text>
  <text x="560" y="247" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">icon</text>
  <rect x="640" y="232" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="650" y="246.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">barchart ▾</text>
  <rect x="640" y="160" width="0.1" height="0.1" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="560" y="290" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">screen · query · endpoint · dashboard · page</text>
  <rect x="10" y="180" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une entrée</text>
  <text x="20" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les dossiers n'ont pas de type</text>
  <line x1="210" y1="197.0" x2="256" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq types</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce qu'ouvre l'entrée</text>
  <line x1="1000" y1="137.0" x2="870" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
  <rect x="1000" y="190" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">target</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&lt;app&gt;.&lt;id&gt; pour un tableau</text>
  <line x1="1000" y1="207.0" x2="870" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mit-arrow)"/>
</svg>

---

## `screen` et `query` — ouvrir un écran

`screen` et `query` ouvrent la même vue : la cible est une requête de lecture et, si un écran est conçu pour elle, c'est cet écran qui s'ouvre ; sinon les lignes de la requête s'affichent dans une grille simple. Ils ne diffèrent que par ce que propose la liste *Target* de l'Inspecteur — les écrans conçus pour `screen`, toutes les requêtes pour `query`.

Le type de feuille le plus courant. L'élément de menu pointe vers une requête SELECT ; le framework trouve l'écran associé à cette requête (voir [Créer un écran depuis une requête](../screens/create-from-query.md)) et l'ouvre en TableView.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `query`. |
| **`target`** | Le nom de la requête — `customers_get`, `security_users_get`. La liste déroulante est alimentée par les requêtes valides du connecteur choisi. |
| **`connector`** | Le connecteur qui possède la requête. Vide = l'application du menu (cas le plus courant). À renseigner explicitement uniquement quand on lit depuis un autre connecteur. |
| **`params`** | Optionnel. Lie des valeurs aux paramètres `:placeholder` de la requête. L'utilisateur ouvre l'écran avec ces valeurs déjà liées — par exemple une feuille *Mes tickets ouverts* avec `params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }`. |

### Comment l'écran est résolu

Le runtime cherche l'écran dont le `read_query` correspond au `target` du menu :

```
feuille de menu → écran avec read_query = <target> sur le connecteur <connector>
```

Quand plusieurs écrans partagent le même `read_query` (rare), le premier trouvé l'emporte.

Si aucun écran n'est enregistré pour cette requête, l'élément de menu s'ouvre quand même — le runtime affiche un TableView par défaut avec les colonnes de la requête. Utile pour des requêtes ad hoc qui ne justifient pas une définition d'écran complète.

### Exemple

```toml
[[menus.crm.items]]
id = "pipeline.customers"
parent = "pipeline"
label = "Customers"
l.fr = "Clients"
icon = "users"
type = "query"
target = "customers_get"
```

Ouvre l'écran `crm.customers` (l'écran dont `read_query = customers_get`).

```toml
[[menus.crm.items]]
id = "my_open_tickets"
label = "My open tickets"
l.fr = "Mes tickets ouverts"
icon = "ticket"
type = "query"
target = "tickets_get"
params = { OWNER = "#LOGIN_USER#", STATUS = "OPEN" }
```

Même écran `tickets_get`, mais l'utilisateur atterrit sur une vue pré-filtrée limitée à ses propres tickets ouverts. Le jeton `#LOGIN_USER#` se résout depuis le JWT — voir [Liaison des paramètres](../queries/parameter-binding.md).

---

## `endpoint` — déclencher un endpoint API

Le deuxième type de feuille : ouvre le HttpRunner avec un endpoint de connecteur API présélectionné. L'utilisateur obtient un formulaire qui demande les paramètres de l'endpoint et un bouton *Exécuter*.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `endpoint`. |
| **`target`** | Un nom d'endpoint déclaré sur le connecteur API. La liste déroulante liste tous les endpoints du connecteur choisi. |
| **`connector`** | Le connecteur API. Vide = l'application du menu (fonctionne quand l'application est elle-même un connecteur API). |
| **`params`** | Optionnel. Pré-remplit les champs du formulaire. |

### Quand l'utiliser

- Intégrations personnalisées que l'utilisateur déclenche manuellement (synchronisation depuis un système externe, rafraîchissement d'un cache).
- Opérations qui ne sont pas naturellement un écran — tests de webhook, POST ad hoc.
- Outils et endpoints de diagnostic.

### Exemple

```toml
[[menus.nomaubl.items]]
id = "ppf.sync_directory"
parent = "ppf"
label = "Sync PPF directory"
l.fr = "Synchroniser l'annuaire PPF"
icon = "refresh-cw"
type = "endpoint"
connector = "ppf"
target = "sync_directory"
```

Ouvre le HttpRunner pour l'endpoint `sync_directory` du connecteur API `ppf`. L'utilisateur remplit les champs requis du formulaire et clique *Exécuter*.

---

## `dashboard` — ouvrir un tableau de bord

Un tableau de bord est une page de graphiques et de KPI déclarée dans `[dashboards.*]`. L'élément de menu pointe vers l'id du tableau de bord.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `dashboard`. |
| **`target`** | `<app>.<id>` — le tableau de bord `[dashboards.<app>.<id>]`, par exemple `crm.pipeline`. La liste déroulante présente tous les tableaux de bord. |
| **`connector`** | **Ne doit pas être renseigné** — l'application fait partie de la cible ; le validateur refuse un `connector` superflu. |
| **`params`** | Optionnel. Pré-remplit les filtres du tableau de bord. |

### Quand l'utiliser

- Vues d'ensemble pour la direction (revenu par région, pipeline par étape).
- Tableaux de bord opérationnels (statut des jobs, santé du système).
- Tout ce qui est une mise en page de graphiques plutôt qu'un seul tableau.

### Exemple

```toml
[[menus.crm.items]]
id = "pipeline.deals_dashboard"
parent = "pipeline"
label = "Deals dashboard"
l.fr = "Tableau de bord des affaires"
icon = "chart-bar"
type = "dashboard"
target = "crm.deals_overview"
```

Ouvre le tableau de bord `deals_overview` de l'application `crm` — noter l'absence de champ `connector`.

---

## `page` — ouvrir une route frontend enregistrée

L'échappatoire. Une feuille `page` navigue vers une route React écrite à la main — une fonctionnalité personnalisée que le framework ne compose pas à partir de requêtes / écrans / tableaux de bord. L'exemple classique est le produit Nomaflow, qui a ses propres routes (`/nomaflow`, `/nomaflow/jobs/:id`, `/nomaflow/runs/:runId`) pour l'UI de l'ordonnanceur.

### Champs

| Champ | Notes |
|---|---|
| **`type`** | `page`. |
| **`target`** | Le chemin de la route — `/nomaflow`, `/runs/dashboard`, etc. Les routes doivent être **enregistrées** dans le frontend (le menu ne les crée pas ; il y pointe). |
| **`connector`** | **Ne doit pas être renseigné**. La cible est une route, pas une ressource de connecteur. |
| **`params`** | Optionnel. Le runtime les ajoute en tant que paramètres de chaîne de requête sur la route. |

### Quand l'utiliser

- Un produit embarqué (Nomaflow, les tableaux de bord spécialisés de Nomasx-1).
- Un composant React personnalisé pour quelque chose que les requêtes ou écrans ne peuvent pas exprimer (logs en streaming, visualisations interactives complexes).
- Un composant tiers intégré à Liberty.

Le type `page` est rare dans les applications construites par les utilisateurs — la plupart des équipes construisent avec des requêtes / écrans / tableaux de bord. Recourir à `page` quand l'un des trois autres ne peut vraiment pas exprimer la surface souhaitée.

### Exemple

```toml
[[menus.crm.items]]
id = "ops"
label = "Operations"
l.fr = "Opérations"
icon = "settings"

[[menus.crm.items]]
id = "ops.nomaflow"
parent = "ops"
label = "Job scheduler"
l.fr = "Ordonnanceur de tâches"
icon = "calendar"
type = "page"
target = "/nomaflow"
```

Une feuille *Ordonnanceur de tâches* dans le dossier Opérations de l'application `crm`, qui pointe vers la route principale du produit Nomaflow.

---

## Dossiers — regrouper des feuilles

Un dossier est le seul type d'élément **sans** `type`. Il ne porte ni `target`, ni `connector`, ni `params` — seulement `id`, `label`, `icon` et `l` (traductions).

### Validation

Le validateur du schéma rejette un dossier qui porte :

- `target` renseigné — les dossiers n'ont pas de cibles.
- `connector` renseigné — les dossiers n'ouvrent rien.
- `params` non vide — idem.

### Comportement

Les dossiers sont **repliés à vide**. Si chaque enfant d'un dossier est masqué (par exemple parce que l'utilisateur n'a la permission sur aucun), le dossier lui-même disparaît du menu rendu. L'utilisateur ne voit jamais de dossier vide.

### Imbrication

Les dossiers peuvent être imbriqués sans limite. Une application Liberty typique utilise 2 ou 3 niveaux :

```
Pipeline (dossier)
├── Clients (query)
├── Affaires (query)
├── Activités (query)
└── Rapports (dossier)
    ├── Synthèse quotidienne (dashboard)
    └── Revenu mensuel (query)
```

Au-delà de 3 niveaux, l'application est généralement sur-regroupée — aplatir quand c'est possible.

---

## Règles transversales

### Le champ `connector` retombe par défaut sur l'application

Pour les feuilles `query` et `endpoint`, laisser `connector` vide signifie « le connecteur de l'application » — c'est-à-dire le connecteur nommé par la clé du menu (`[menus.crm]` → `connector = "crm"`).

Renseigner `connector` explicitement quand :

- La requête réside sur un connecteur **différent** — application `crm` qui affiche une feuille lisant depuis `reporting`.
- On lit des données partagées (un connecteur `default` pour les requêtes du framework).

Pour `dashboard` et `page`, le champ est **toujours vide** — le validateur l'impose.

### `params` porte des valeurs fixes

`params` est une table plate clé → valeur transmise à la cible à l'ouverture :

```toml
params = { STATUS = "OPEN", REGION = "EU" }
```

Pour les feuilles `query`, les valeurs se lient aux paramètres `:placeholder` de la requête. Pour `endpoint`, elles pré-remplissent le formulaire du HttpRunner. Pour `page`, elles deviennent des paramètres de chaîne de requête.

Les deux jetons réservés — `#LOGIN_USER#` et `#SYSDATE#` — fonctionnent ici aussi : une feuille *Mes données* avec `params = { OWNER = "#LOGIN_USER#" }` amène l'utilisateur sur une vue limitée à ses propres lignes.

### Changer de `type` réinitialise les champs

Dans l'Inspecteur, passer le `type` de `query` à `dashboard` efface `connector` (puisque `dashboard` le rejette). Passer de feuille à dossier efface `target`, `connector`, `params`. Le formulaire empêche les combinaisons invalides d'atteindre l'enregistrement.

---

## Choisir le bon type

| Pour ouvrir… | Utiliser |
|---|---|
| Une liste de lignes avec filtre / ajout / modification optionnels. | `screen`. |
| Une liste pré-filtrée (par exemple *Mes tickets ouverts*). | `screen` avec `params`. |
| Une requête qui n'a pas encore d'écran conçu. | `query`. |
| Un appel API personnalisé en écriture ou en lecture seule. | `endpoint`. |
| Une page de graphiques et de KPI. | `dashboard`. |
| Une fonctionnalité React écrite à la main (style Nomaflow). | `page`. |

En cas de doute, commencer par `screen` — la plupart des pages destinées aux utilisateurs sont des listes. Passer à `dashboard` quand la mise en page comprend plusieurs graphiques ; recourir à `endpoint` uniquement pour des opérations API qui ne tiennent pas dans un écran ; réserver `page` au React personnalisé.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Feuille `query` avec un `target` qui n'est pas un nom de requête. | Cliquer la feuille ouvre un TableView par défaut sans colonnes. | Choisir une vraie requête dans la liste déroulante. |
| Feuille `endpoint` sur un connecteur SQL. | La validation à l'enregistrement peut passer, mais à l'exécution le connecteur ne propose pas d'endpoints. | Pointer vers un connecteur API. |
| `dashboard` avec `connector`. | La validation à l'enregistrement échoue. | Retirer le champ `connector`. |
| `page` avec `connector`. | La validation à l'enregistrement échoue. | Retirer le champ `connector`. |
| `params` qui référence un placeholder absent de la requête cible. | La liaison est silencieusement ignorée. | Ouvrir la requête cible, déclarer le paramètre. |
| `page` qui pointe vers une route non enregistrée. | Cliquer la feuille affiche une page 404. | Vérifier que la route existe dans le bundle frontend ; les fautes de frappe sont la cause habituelle. |

---

## La suite

- [Permissions et rôles](./permissions-and-roles.md) — le filtre `roles` + l'héritage des permissions par type de feuille.
- [Traductions et icônes](./translations-and-icons.md) — libellés par langue et icônes.
- [Créer un écran depuis une requête](../screens/create-from-query.md) — l'écran qu'ouvre une feuille `query`.
