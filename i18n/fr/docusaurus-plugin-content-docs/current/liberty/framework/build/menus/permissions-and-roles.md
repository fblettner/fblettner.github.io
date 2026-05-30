---
title: Permissions et rôles
description: "Le filtre roles sur un élément de menu, la permission sql / api sous-jacente héritée de la cible, comment les dossiers vides se replient, et comment le menu s'élague pour chaque utilisateur."
keywords: [Liberty Framework, permissions de menu, rôles, permission sql, permission api, élagage, repliement de dossier]
---

# Permissions et rôles

Le menu que voit l'utilisateur n'est **pas** le menu enregistré — c'est le menu **filtré à ce que l'utilisateur a le droit d'utiliser**. Liberty élague l'arbre au moment de la récupération pour que les utilisateurs ne cliquent jamais sur des éléments qu'ils ne peuvent pas ouvrir.

Deux filtres s'appliquent :

| Filtre | Quand il intervient |
|---|---|
| **Permission implicite** | Chaque feuille hérite de la permission de sa **cible** — `sql:<connector>:<target>` pour une `query`, `api:<connector>:<target>` pour un `endpoint`. Les utilisateurs sans cette permission ne voient pas la feuille. |
| **Rôles explicites** | Le champ `roles` de la feuille est une condition supplémentaire — quand il est renseigné, l'utilisateur doit posséder au moins un des rôles listés. |

Une fois les deux filtres appliqués, les dossiers sans enfant survivant sont repliés.

---

## La permission implicite

Chaque feuille est conditionnée par la permission de sa cible :

| `type` | Permission requise |
|---|---|
| `query` | `sql:<connector>:<target>` (la permission de la requête). |
| `endpoint` | `api:<connector>:<target>` (la permission de l'endpoint). |
| `dashboard` | Aucune à ce niveau — les règles d'accès propres au tableau de bord s'appliquent. |
| `page` | Aucune à ce niveau — les règles d'accès propres à la route s'appliquent. |

Un utilisateur qui a `sql:crm:customers_get` voit la feuille de menu qui ouvre l'écran Clients. Un utilisateur sans cette permission ne la voit pas — la feuille disparaît du menu rendu.

C'est la **même permission** que l'écran ou l'endpoint vérifie déjà. Le menu n'introduit pas une seconde permission ; il masque simplement les liens que l'utilisateur ne pourrait pas suivre de toute façon. Résultat : pas d'éléments grisés, pas de clics qui mènent à une page *403 interdit*.

---

## Le filtre explicite `roles`

Le champ `roles` d'un élément de menu est une liste de noms de rôles. Quand il est renseigné :

- L'utilisateur doit posséder **au moins un** des rôles listés.
- La vérification s'ajoute à la permission implicite — les deux doivent être vraies.

| Valeur de `roles` | Comportement |
|---|---|
| Vide (par défaut) | Visibilité déterminée par la seule permission implicite. |
| `["manager"]` | Visible uniquement pour les utilisateurs qui ont le rôle `manager`. |
| `["manager", "admin"]` | Visible pour les utilisateurs qui ont soit `manager`, soit `admin`. |

### Cas d'usage

| Schéma | Exemple |
|---|---|
| Masquer un élément ouvert en lecture mais utile seulement à une partie des utilisateurs. | Une feuille *Rapports* où chaque utilisateur a la lecture sur la requête sous-jacente, mais où seuls les managers l'utilisent vraiment. |
| Présenter des sections différentes à des audiences différentes dans la même application. | Un dossier `admin` visible uniquement quand `roles = ["admin"]` correspond. |
| Échelonner un déploiement. | Marquer une nouvelle section `roles = ["beta-testers"]` ; passer à vide au lancement général. |

Le champ `roles` n'est **pas** une alternative à la permission implicite — les deux doivent être vraies. Pour qu'un opérateur voie et utilise un écran, il lui faut à la fois la permission SQL et un des rôles listés.

---

## Repliement des dossiers

Un dossier **sans enfant visible** disparaît du menu rendu. Cela signifie :

- Un dossier qui enveloppe trois feuilles, toutes conditionnées par `roles = ["admin"]`, disparaît entièrement pour un utilisateur non admin — il ne voit pas de dossier *Administration* vide.
- Un dossier dont tous les enfants sont conditionnés par des permissions SQL que l'utilisateur n'a pas disparaît de la même manière.

Cela se produit à chaque niveau — une structure de dossiers imbriqués s'élague des feuilles vers le haut. L'utilisateur voit un arbre minimal et utile.

Le runtime parcourt l'arbre une seule fois par requête, en appliquant les filtres et en repliant les dossiers vides en une seule passe.

---

## Un exemple détaillé

Un menu avec une visibilité mixte :

```toml
[menus.crm]
label = "CRM"

# Premier niveau — toujours visible
[[menus.crm.items]]
id = "pipeline"
label = "Pipeline"
icon = "briefcase"

[[menus.crm.items]]
id = "pipeline.customers"
parent = "pipeline"
label = "Customers"
l.fr = "Clients"
type = "query"
target = "customers_get"
# implicite : sql:crm:customers_get

[[menus.crm.items]]
id = "pipeline.deals"
parent = "pipeline"
label = "Deals"
l.fr = "Affaires"
type = "query"
target = "deals_get"
# implicite : sql:crm:deals_get

[[menus.crm.items]]
id = "reports"
label = "Reports"
l.fr = "Rapports"
icon = "chart-bar"

[[menus.crm.items]]
id = "reports.monthly"
parent = "reports"
label = "Monthly revenue"
l.fr = "Revenu mensuel"
type = "query"
target = "monthly_revenue_get"
roles = ["manager", "admin"]

[[menus.crm.items]]
id = "reports.cohort"
parent = "reports"
label = "Cohort analysis"
l.fr = "Analyse de cohorte"
type = "query"
target = "cohort_get"
roles = ["analyst", "admin"]

[[menus.crm.items]]
id = "admin"
label = "Admin"
l.fr = "Administration"
icon = "shield"

[[menus.crm.items]]
id = "admin.config"
parent = "admin"
label = "Config"
l.fr = "Configuration"
type = "query"
target = "config_get"
roles = ["admin"]
```

Ce que voient différents utilisateurs :

| Utilisateur | Rôles | A `sql:crm:*` | Menu visible |
|---|---|---|---|
| **Alice** (user) | `["user"]` | `customers_get`, `deals_get` uniquement | Pipeline → Clients, Affaires. *(pas de Rapports, pas d'Administration)* |
| **Bob** (manager) | `["manager"]` | tous les `sql:crm:*` | Pipeline → Clients, Affaires · Rapports → Revenu mensuel. *(pas de Cohorte : pas analyst ; pas d'Administration)* |
| **Carol** (admin) | `["admin"]` | tous les `sql:crm:*` | Pipeline → Clients, Affaires · Rapports → Revenu mensuel, Cohorte · Administration → Configuration. |
| **Dave** (manager + analyst) | `["manager", "analyst"]` | tous les `sql:crm:*` | Pipeline → Clients, Affaires · Rapports → Revenu mensuel, Cohorte. *(pas d'Administration)* |
| **Eve** (sans permission) | `["guest"]` | aucune | Arbre vide — la tuile de l'application dans le sélecteur se masque. |

Noter que le dossier *Rapports* n'apparaît pas pour Alice (ses rôles ne croisent aucun enfant) ; le dossier *Administration* n'apparaît pas pour Alice, Bob ou Dave ; la tuile de l'application dans le sélecteur en haut se masque pour Eve.

---

## Formes des permissions

Les chaînes de permission Liberty suivent un schéma simple :

| Chaîne | Accorde |
|---|---|
| `sql:<connector>:<query>` | Exécuter cette requête SQL précise. |
| `sql:<connector>:*` | Exécuter toutes les requêtes de ce connecteur. |
| `sql:*` | Exécuter toutes les requêtes de tous les connecteurs. |
| `api:<connector>:<endpoint>` | Appeler cet endpoint API précis. |
| `api:<connector>:*` | Appeler tous les endpoints de ce connecteur. |
| `screen:<app>:<id>` | Atteindre cet écran précis (moins courant — la plupart des installations conditionnent par `sql:` à la place). |
| `superuser` | Contourne toutes les vérifications. |

Pour l'élagage des menus, les permissions pertinentes sont `sql:` et `api:` (qui correspondent au `target` de la feuille). Un rôle qui accorde `sql:crm:*` ouvre toutes les feuilles `query` de l'application `crm`.

Granulaire ou large :

| Granulaire `sql:<c>:<query>` | Large `sql:<c>:*` |
|---|---|
| Contrôle par écran — choisir quels écrans ce rôle voit. | Contrôle pour toute l'application — ce rôle voit tous les écrans du connecteur. |
| Fastidieux à maintenir pour des applications de 50 écrans ou plus. | Une permission par rôle et par application. |
| Utile pour les scénarios de conformité. | Le choix par défaut pour la plupart des installations. |

La plupart des équipes adoptent `sql:<c>:*` large par rôle et par application, et utilisent le filtre `roles` sur des éléments précis pour les exceptions fines.

---

## Comment l'élagage s'exécute

`GET /api/menus` est appelé quand l'utilisateur ouvre l'application. Le runtime :

1. Charge les rôles et permissions de l'utilisateur depuis le JWT.
2. Parcourt l'arbre en profondeur d'abord.
3. Pour chaque **feuille** :
   - Vérifie la permission implicite. Si l'utilisateur ne l'a pas, la feuille est retirée.
   - Vérifie le filtre `roles`. Si la liste n'est pas vide et que l'utilisateur n'en possède aucun, la feuille est retirée.
4. Pour chaque **dossier** : le retirer si aucun descendant n'a survécu.
5. Renvoie l'arbre élagué.

L'élagage est **par requête** — il prend en compte les changements de permission au moment où l'utilisateur se reconnecte. Pas de redémarrage nécessaire.

---

## Tableaux de bord et pages — conditionnement différent

Les tableaux de bord et les routes n'héritent pas d'une permission `sql:` / `api:`. Ils ont leurs propres règles d'accès :

| Type de feuille | Visibilité par défaut |
|---|---|
| `query` | Masquée sauf si `sql:<connector>:<target>` est accordée. |
| `endpoint` | Masquée sauf si `api:<connector>:<target>` est accordée. |
| `dashboard` | Visible pour tout le monde par défaut. Utiliser `roles` pour conditionner. |
| `page` | Visible pour tout le monde par défaut. Utiliser `roles` pour conditionner. |

Pour les tableaux de bord, les requêtes sous-jacentes des graphiques ont toujours besoin de leurs permissions `sql:` — un utilisateur sans permission ouvre le tableau de bord et voit des graphiques vides. Pour les pages, le composant React gère sa propre authentification.

Le bon schéma pour les deux : **toujours définir `roles`** sur les feuilles de tableau de bord et de page à restreindre. Le comportement par défaut visible de Liberty est délibéré (la plupart des tableaux de bord et pages s'adressent au grand public), mais cela signifie qu'il faut opter explicitement pour la restriction.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| `roles = ["Manager"]` (avec majuscule). | Les utilisateurs avec le rôle `manager` en minuscules ne voient pas l'élément. | Les rôles sont sensibles à la casse. Utiliser l'orthographe exacte de la configuration des rôles. |
| Accorder `sql:crm:*` à un rôle mais l'écran n'apparaît toujours pas. | La session de l'utilisateur a été émise avant l'attribution. | Se déconnecter / se reconnecter pour rafraîchir le JWT. |
| `roles = []` (liste vide explicite). | Équivaut à laisser le champ vide — permission implicite seule. | Pour signifier « uniquement les admins », utiliser `roles = ["admin"]`. |
| Dossier visible alors que toutes ses feuilles sont masquées. | L'élagage s'est exécuté sur des données périmées (rare condition de course pendant un rechargement à chaud). | Rafraîchir la page. |
| Tableau de bord visible pour tous mais ses graphiques vides. | L'utilisateur a la visibilité sur le tableau de bord mais aucune permission `sql:` sous-jacente. | Soit accorder les permissions `sql:`, soit ajouter un filtre `roles` pour masquer le tableau de bord à ces utilisateurs. |
| Le menu n'affiche rien pour un nouvel utilisateur. | Le rôle de l'utilisateur n'accorde aucune permission `sql:` / `api:` sur cette application. | Vérifier que le rôle possède au moins une permission correspondante. |

---

## La suite

- [Traductions et icônes](./translations-and-icons.md) — libellés par langue et icônes Lucide.
- [Construire l'arbre](./build-the-tree.md) — la surface de l'éditeur.
- [Concepts → Authentification → Rôles et permissions](../../auth/roles-permissions.md) — la référence approfondie derrière les chaînes de permission.
