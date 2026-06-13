---
title: Variantes SQL par dialecte
description: "Livrer une requête Liberty unique avec un SQL différent sur Postgres, Oracle, MySQL, SQL Server, SQLite et DB2 — la map `sql` par dialecte, quand l'utiliser, les pièges courants."
keywords: [Liberty Framework, dialecte SQL, Postgres, Oracle, MySQL, MSSQL, SQLite, DB2, map sql, default]
---

# Variantes SQL par dialecte

La plupart des requêtes sont du SQL qui s'exécute partout — `SELECT col FROM table WHERE k = :k` se lit pareil sur Postgres, Oracle, MySQL, SQL Server, SQLite et DB2. Mais pas toutes. Fonctions de date, concaténation de chaînes, `LIMIT` / `FETCH FIRST`, syntaxe de séquence, `MERGE` / `ON CONFLICT` — dès qu'une de ces constructions arrive dans une requête, il faut un SQL différent par backend.

Liberty permet à une seule requête de porter un **SQL par dialecte** sans dupliquer la requête. Le champ `sql` accepte soit une chaîne unique (cas courant), soit une **map** indexée par nom de backend SQLAlchemy avec un repli `default` obligatoire.

---

## Les deux formes

### Chaîne `sql` unique — par défaut

```toml
[[connectors.crm.queries]]
name = "customer_count"
sql  = "SELECT COUNT(*) FROM customers"
```

Une instruction, s'exécute partout. Choisissez cette forme dès que vous le pouvez.

### Map par dialecte

```toml
[[connectors.crm.queries]]
name = "monthly_revenue"

[connectors.crm.queries.sql]
default  = "SELECT date_trunc('month', invoice_date) AS m, SUM(total) FROM invoices GROUP BY 1"
oracle   = "SELECT TRUNC(invoice_date, 'MM') AS m, SUM(total) FROM invoices GROUP BY TRUNC(invoice_date, 'MM')"
mssql    = "SELECT DATEFROMPARTS(YEAR(invoice_date), MONTH(invoice_date), 1) AS m, SUM(total) FROM invoices GROUP BY YEAR(invoice_date), MONTH(invoice_date)"
```

Indexée par **nom de backend SQLAlchemy**. Le moteur lit le dialecte du pool au moment de l'exécution et choisit la variante correspondante, en retombant sur `default` quand aucune n'est spécifiquement définie.

---

## Clés de dialecte supportées

Les chaînes de dialecte proviennent de SQLAlchemy. Les valeurs comprises par Liberty sont celles déclarées dans l'énumération **Datasource Type** de la page Pools :

| Clé | Base |
|---|---|
| `default` | Repli obligatoire. Utilisé quand aucune variante spécifique ne correspond. |
| `postgresql` | PostgreSQL. |
| `oracle` | Oracle. |
| `mysql` | MySQL. |
| `mariadb` | MariaDB. |
| `mssql` | Microsoft SQL Server. |
| `sqlite` | SQLite. |
| `db2` | IBM DB2. |

Le validateur impose deux règles sur la map :

| Règle | Pourquoi |
|---|---|
| `default` **doit** être présent. | Le moteur a besoin d'un repli pour tout pool non mappé explicitement. |
| `default` **ne doit pas** être vide. | Un défaut vide échouerait silencieusement à l'exécution. |

---

## L'éditeur

L'éditeur de requête unique sous **Paramètres → Connecteurs → Non classées / Séquences / Recherches** rend le champ `sql` comme un éditeur SQL. Pour passer d'une chaîne unique à une map par dialecte, éditez le TOML sous-jacent — la bascule côté formulaire est dans la feuille de route mais pas encore livrée ; pour l'instant le chemin est :

1. Enregistrez d'abord la requête comme chaîne SQL unique.
2. Éditez directement le TOML du connecteur pour convertir `sql = "..."` en bloc `[<connector>.queries.sql]` montré plus haut.
3. Rechargez (l'Enregistrer de la page rafraîchira le formulaire à votre retour).

Pour l'onglet Tables (requêtes au format CRUD), l'assistant écrit toujours du SQL en chaîne unique. Si un `_get` a besoin de variantes par dialecte, générez-le d'abord avec l'assistant puis convertissez après.

---

## Quand vous en avez besoin

Les cas classiques :

| Domaine | Pourquoi ça varie |
|---|---|
| **Troncature de date** | `date_trunc('month', d)` (Postgres) vs `TRUNC(d, 'MM')` (Oracle) vs `DATEFROMPARTS(...)` (MSSQL). |
| **Limites de lignes** | `LIMIT 100` (Postgres / MySQL / SQLite) vs `FETCH FIRST 100 ROWS ONLY` (Oracle 12c+ / DB2) vs `TOP 100` (MSSQL). |
| **Concaténation de chaînes** | `||` (Postgres / Oracle / SQLite) vs `CONCAT(...)` (MySQL) vs `+` (MSSQL). |
| **Upsert** | `INSERT ... ON CONFLICT (...) DO UPDATE` (Postgres) vs `MERGE INTO` (Oracle / DB2 / MSSQL) vs `INSERT ... ON DUPLICATE KEY UPDATE` (MySQL). |
| **Stockage booléen** | `BOOLEAN` (Postgres) vs `NUMBER(1)` ou `CHAR(1)` (Oracle) vs `BIT` (MSSQL). |
| **CTE récursive** | `WITH RECURSIVE` (Postgres / SQLite) vs `WITH` (Oracle — RECURSIVE déduit du membre d'ancrage + membre récursif) vs `WITH ... AS` (MSSQL — syntaxe identique à Postgres). |
| **Accès JSON** | `data->>'field'` (Postgres) vs `JSON_VALUE(data, '$.field')` (Oracle / MSSQL / MySQL 8). |

---

## Exemples

### Limite de lignes

```toml
[connectors.crm.queries.sql]
default = "SELECT * FROM invoices ORDER BY invoice_date DESC LIMIT 100"
oracle  = "SELECT * FROM invoices ORDER BY invoice_date DESC FETCH FIRST 100 ROWS ONLY"
mssql   = "SELECT TOP 100 * FROM invoices ORDER BY invoice_date DESC"
```

Notez que `default` utilise LIMIT (qui fonctionne sur Postgres / MySQL / MariaDB / SQLite) — seuls Oracle et MSSQL ont donc besoin d'entrées explicites.

### Upsert

```toml
[connectors.crm.queries.sql]
default = """
INSERT INTO customer_cache (customer_id, fetched_at, payload)
VALUES (:customer_id, :fetched_at, :payload)
ON CONFLICT (customer_id) DO UPDATE
SET fetched_at = EXCLUDED.fetched_at,
    payload    = EXCLUDED.payload
"""

oracle = """
MERGE INTO customer_cache t
USING (SELECT :customer_id AS customer_id FROM dual) s
ON (t.customer_id = s.customer_id)
WHEN MATCHED THEN UPDATE SET fetched_at = :fetched_at, payload = :payload
WHEN NOT MATCHED THEN INSERT (customer_id, fetched_at, payload)
                       VALUES (:customer_id, :fetched_at, :payload)
"""

mssql = """
MERGE customer_cache AS t
USING (VALUES (:customer_id)) AS s(customer_id)
ON t.customer_id = s.customer_id
WHEN MATCHED THEN UPDATE SET fetched_at = :fetched_at, payload = :payload
WHEN NOT MATCHED THEN INSERT (customer_id, fetched_at, payload)
                       VALUES (:customer_id, :fetched_at, :payload);
"""
```

Trois bases, trois syntaxes, un nom de requête Liberty unique. Les écrans qui câblent `customer_cache_upsert` ignorent — et n'ont pas à se soucier — du dialecte qui s'exécute en dessous.

### Troncature de date dans une requête de graphique

```toml
[[connectors.reporting.queries]]
name        = "monthly_revenue"
type        = "custom"
description = "Revenu agrégé des factures par mois, filtre de période sur invoice_date"

[connectors.reporting.queries.sql]
default = """
SELECT date_trunc('month', invoice_date) AS month, SUM(total_ht) AS revenue
FROM   invoices
WHERE  invoice_date BETWEEN :from_date AND :to_date
GROUP BY 1 ORDER BY 1
"""

oracle = """
SELECT TRUNC(invoice_date, 'MM') AS month, SUM(total_ht) AS revenue
FROM   invoices
WHERE  invoice_date BETWEEN :from_date AND :to_date
GROUP BY TRUNC(invoice_date, 'MM')
ORDER BY TRUNC(invoice_date, 'MM')
"""

[[connectors.reporting.queries.params]]
name    = "from_date"
label   = "Début de période"
default = "2026-01-01"

[[connectors.reporting.queries.params]]
name    = "to_date"
label   = "Fin de période"
default = "2026-12-31"
```

Mêmes paramètres `:placeholder` sur les deux variantes — les liaisons fonctionnent de la même manière quel que soit le dialecte exécuté.

---

## Comment le moteur choisit

Au moment de l'exécution, le moteur lit le **dialecte du pool** (déclaré dans *Paramètres → Pools → \<pool> → Datasource type*) et :

1. Cherche la clé de dialecte dans la map `sql`.
2. Retombe sur `default` quand aucune variante spécifique ne correspond.
3. Échoue au analyse quand `default` est manquant ou vide.

Un connecteur dirigé vers un autre pool — via le flux Dupliquer l'application ou en changeant la valeur `pool` du connecteur — sélectionne automatiquement la variante correspondante. Aucune modification de code nécessaire.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Clé `default` manquante. | Le connecteur échoue au analyse à l'enregistrement / au rechargement. L'erreur mentionne « a per-dialect sql map must include a 'default' key ». | Ajoutez une variante `default`. |
| `default` vide. | Même erreur de analyse — « the 'default' sql variant must not be empty ». | Remplissez-la — même un placeholder comme `SELECT 1` suffit à passer la validation pendant que vous finissez les autres. |
| Utiliser des noms de `:placeholder` différents selon les variantes. | Certains appels lient une valeur qui n'apparaît pas dans la variante exécutée — le moteur les ignore silencieusement. | Gardez le jeu de placeholders identique sur chaque variante. Si un paramètre n'a véritablement pas de sens sur un dialecte, repensez la conception — découpez en deux requêtes nommées. |
| Oublier `ORDER BY` sur une requête paginée. | Chaque backend a son propre ordre de lignes quand l'ordre n'est pas spécifié — la pagination produit des résultats différents sur Postgres vs Oracle. | Mettez toujours `ORDER BY` quand vous utilisez LIMIT / FETCH / TOP. |
| SQL par dialecte sur la sortie de l'Assistant CRUD. | L'assistant écrit toujours du SQL en chaîne unique ; copier vers une map après coup peut casser la convention `:NAME_ORIGINAL` de l'Enregistrer du dialogue si vous la laissez tomber par mégarde. | À la conversion, reproduisez la convention sur chaque variante. |

---

## Quand NE PAS utiliser le SQL par dialecte

| Anti-motif | À préférer |
|---|---|
| Deux variantes qui ne diffèrent que par des espaces cosmétiques / l'ordre des colonnes. | Une seule chaîne SQL — laissez les opérateurs voir la cohérence. |
| Un seul pool, pas d'autre prévu. | Une seule chaîne SQL — réintroduisez la map plus tard si vous ajoutez un jour un second dialecte. |
| Une instruction complexe qui demande beaucoup d'ajustements par dialecte. | Deux requêtes nommées — `monthly_revenue_pg` et `monthly_revenue_oracle` — et une étape `python` unique (ou la logique d'écran) qui choisit la bonne. Plus facile à maintenir quand les variantes divergent fortement. |

La map par dialecte brille pour des différences **petites et prévisibles** (troncature de date, limites de lignes, upserts). Pour de larges réécritures, des requêtes nommées séparées se lisent plus clairement.

---

## Et ensuite

- [Concepts → Connecteurs](../../connectors.md) — la référence détaillée sur les pools et dialectes.
- [Liaison de paramètres](./parameter-binding.md) — les paramètres `:placeholder` se comportent de manière identique sur toutes les variantes.
- [Dupliquer une requête ou un connecteur](./clone.md) — quand vous préférez avoir deux requêtes nommées plutôt qu'une map.
