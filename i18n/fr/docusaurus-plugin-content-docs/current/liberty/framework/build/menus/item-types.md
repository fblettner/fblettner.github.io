---
title: Types d'éléments
description: "Les quatre types de feuilles — query / endpoint / dashboard / page — ce qu'ouvre chacun, la forme du champ target, la règle du connecteur, et quand recourir à chacun."
keywords: [Liberty Framework, élément de menu, query, endpoint, dashboard, page, target, connector, feuille, dossier]
---

# Types d'éléments

Un élément de menu est soit un **dossier** (sans `type`), soit une **feuille** qui ouvre quelque chose. Le `type` de la feuille décide ce qu'est ce quelque chose et ce que signifient les champs `target` / `connector`.

Quatre types de feuilles :

| `type` | Ouvre | `target` est | `connector` |
|---|---|---|---|
| **`query`** | Un écran TableView — pilote l'écran associé à cette requête. | Un nom de requête SELECT. | Le connecteur qui possède la requête. Vide = le connecteur de l'application. |
| **`endpoint`** | Le HttpRunner — déclenche un endpoint de connecteur API. | Un nom d'endpoint. | Le connecteur API. Vide = celui de l'application. |
| **`dashboard`** | Un tableau de bord (graphiques + KPI). | Un id de tableau de bord. | NE doit PAS être renseigné (les tableaux de bord résident dans un espace de noms plat). |
| **`page`** | Une route frontend enregistrée — une fonctionnalité personnalisée comme `/nomaflow`. | Le chemin de la route. | NE doit PAS être renseigné. |

Cette page détaille chacun avec des exemples concrets.

---

## `query` — ouvrir un écran

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
| **`target`** | L'id du tableau de bord (correspond à une clé `[dashboards.<id>]`). La liste déroulante liste tous les tableaux de bord. |
| **`connector`** | **Ne doit pas être renseigné**. Les tableaux de bord résident dans un espace de noms plat ; le validateur rejette un `connector` égaré. |
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
target = "deals_overview"
```

Ouvre le tableau de bord dont l'id est `deals_overview` — noter l'absence de champ `connector`.

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
| Une liste de lignes avec filtre / ajout / modification optionnels. | `query`. |
| Une liste pré-filtrée (par exemple *Mes tickets ouverts*). | `query` avec `params`. |
| Un appel API personnalisé en écriture ou en lecture seule. | `endpoint`. |
| Une page de graphiques et de KPI. | `dashboard`. |
| Une fonctionnalité React écrite à la main (style Nomaflow). | `page`. |

En cas de doute, commencer par `query` — la plupart des écrans destinés aux utilisateurs sont des listes. Passer à `dashboard` quand la mise en page comprend plusieurs graphiques ; recourir à `endpoint` uniquement pour des opérations API qui ne tiennent pas dans un écran ; réserver `page` au React personnalisé.

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
- [Traductions et icônes](./translations-and-icons.md) — libellés par langue et sélecteur d'icônes Lucide.
- [Créer un écran depuis une requête](../screens/create-from-query.md) — l'écran qu'ouvre une feuille `query`.
