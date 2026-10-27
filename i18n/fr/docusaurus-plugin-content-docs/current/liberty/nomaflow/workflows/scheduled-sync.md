---
title: Synchronisation planifiée
description: "Recette — copier chaque nuit des tables d'une base opérationnelle vers une base de reporting avec sql_copy, rafraîchir les agrégats avec sql_query, et être prévenu en cas d'échec ou d'exécution manquée."
keywords: [Nomaflow, recette, synchronisation planifiée, sql_copy, overwrite, sql_query, ETL nocturne, notifications, Liberty Next]
---

# Synchronisation planifiée

Chaque nuit, copier les tables `orders` et `customers` de la base opérationnelle vers la base de reporting, puis rafraîchir les agrégats lus par les tableaux de bord.

---

## Prérequis \{#needs\}

- Deux connecteurs SQL : `ops-db` (source, compte en lecture seule) et `reporting` (cible).
- Sur `reporting`, une requête d'écriture `daily_totals_refresh` qui reconstruit les agrégats (`REFRESH MATERIALIZED VIEW …`, ou `DELETE` + `INSERT … SELECT …`).

---

## La tâche \{#job\}

**+ Nouvelle tâche** : identifiant `nightly-reporting-sync`, étiquette `etl`, **Planification (cron)** `0 2 * * *`, **Fuseau horaire** `Europe/Paris`. Puis trois étapes :

| N° | Type | Réglages |
|---|---|---|
| 1 | `sql_copy` | Source `ops-db` · `public` · `orders` ; cible `reporting` · `staging` · `orders` ; mode `overwrite`. |
| 2 | `sql_copy` | Idem pour `customers`. |
| 3 | `sql_query` | Connecteur `reporting`, requête `daily_totals_refresh`. |

`overwrite` écrit dans `<table>__new` puis l'échange avec la cible en une transaction : les tableaux de bord ne voient jamais une table à moitié remplie, et une copie en échec laisse en place les données de la veille.

:::warning[Conversion des types]
`sql_copy` applique par défaut les règles de conversion JD Edwards (`type_coercion = "jde"`, `decimal_mode = "truncate"`). Entre deux bases ordinaires, définir `type_coercion = "none"` dans `jobs.toml` pour copier les valeurs telles quelles.
:::

```toml title="jobs.toml"
[[jobs]]
id = "nightly-reporting-sync"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "sql_copy"
name = "copy-orders"
source = { connector = "ops-db", schema = "public", table = "orders" }
target = { connector = "reporting", schema = "staging", table = "orders" }
mode = "overwrite"
type_coercion = "none"

[[jobs.steps]]
type = "sql_copy"
name = "copy-customers"
source = { connector = "ops-db", schema = "public", table = "customers" }
target = { connector = "reporting", schema = "staging", table = "customers" }
mode = "overwrite"
type_coercion = "none"

[[jobs.steps]]
type = "sql_query"
name = "refresh-totals"
connector = "reporting"
query = "daily_totals_refresh"
```

---

## Être prévenu \{#notify\}

Dans **Paramètres → Notifications**, une règle sur *A job event* : tâche `nightly-reporting-sync`, événements `failure` et `missed`, canal `email`, destinataire `role:ops`, objet `{JOB} : {STATE}`, corps `{ERROR}`. Voir [Notifications](../notifications.md).

---

## Vérifier \{#check\}

**▶ Exécuter**, puis ouvrir l'exécution : chaque étape affiche ses lignes ; `DEBUG` dans **Run with parameters** affiche les requêtes. Une fois le résultat juste, laisser la planification active.
