---
title: Variantes SQL par dialecte
description: "Livrer une requête Liberty unique avec un SQL différent sur Postgres, Oracle, MySQL, SQL Server, SQLite et DB2 — la map `sql` par dialecte, quand l'utiliser, les pièges courants."
keywords: [Liberty Framework, dialecte SQL, Postgres, Oracle, MySQL, MSSQL, SQLite, DB2, map sql, default]
---

# Variantes SQL par dialecte

La plupart des requêtes sont du SQL qui s'exécute partout — `SELECT col FROM table WHERE k = :k` se lit pareil sur Postgres, Oracle, MySQL, SQL Server, SQLite et DB2. Mais pas toutes. Fonctions de date, concaténation de chaînes, `LIMIT` / `FETCH FIRST`, syntaxe de séquence, `MERGE` / `ON CONFLICT` — dès qu'une de ces constructions arrive dans une requête, il faut un SQL différent par backend.

Liberty permet à une seule requête de porter un **SQL par dialecte** sans dupliquer la requête. Le champ `sql` accepte soit une chaîne unique (cas courant), soit une **map** indexée par nom de backend SQLAlchemy avec un repli `default` obligatoire.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 328" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="280" rx="14" fill="url(#pds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="30" width="200" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="35" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="45.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="343.88800000000003" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">MONTHLY_REVENUE</text>
  <line x1="437" y1="42" x2="447" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#pds-flow)"/>
  <rect x="448" y="30" width="232" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="455" y="35" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="475" y="45.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTRUCTION</text>
  <text x="550.064" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">SELECT · default, oracle</text>
  <line x1="681" y1="42" x2="691" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#pds-flow)"/>
  <rect x="692" y="30" width="190" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="699" y="35" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="719" y="45.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="788.24" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 déclaré(s)</text>
  <text x="236" y="76" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL ∗</text>
  <text x="236" y="96" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">default (required)</text>
  <rect x="236" y="104" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.0" y="117.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Jeton</text>
  <rect x="956" y="104" width="70" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="991.0" y="117.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Assistant</text>
  <rect x="1032" y="104" width="52" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1058.0" y="117.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Tester</text>
  <rect x="236" y="130" width="848" height="29" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="146" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="260" y="146" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SELECT date_trunc('month', invoice_date) AS M, SUM(total) FROM invoices GROUP BY 1</text>
  <text x="236" y="181" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">oracle</text>
  <rect x="236" y="189" width="62" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="267.0" y="202.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123;&#125; Jeton</text>
  <rect x="922" y="189" width="70" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.0" y="202.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Assistant</text>
  <rect x="998" y="189" width="52" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1024.0" y="202.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Tester</text>
  <rect x="236" y="215" width="814" height="29" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="231" fill="#475569" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="260" y="231" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">SELECT TRUNC(invoice_date, 'MM') AS M, SUM(total) FROM invoices GROUP BY TRUNC(invoice_date, 'MM')</text>
  <rect x="1060" y="215" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1072.0" y="230" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="236" y="256" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="271.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">dialect (e.g. oracle)</text>
  <rect x="444" y="257" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="470.0" y="271.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">single</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">default</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisée sans variante adaptée</text>
  <line x1="200" y1="113.0" x2="236" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter un dialecte</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le saisir, puis Entrée</text>
  <line x1="200" y1="267.0" x2="236" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1120" y="161" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="176" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retirer une variante</text>
  <text x="1130" y="189" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la croix à côté</text>
  <line x1="1120" y1="178.0" x2="1072" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1120" y="207" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="222" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une variante</text>
  <text x="1130" y="235" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">choisie selon le type du pool</text>
  <line x1="1120" y1="224.0" x2="1048" y2="231" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1120" y="278" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="293" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">single</text>
  <text x="1130" y="306" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retour à une seule instruction</text>
  <line x1="1120" y1="295.0" x2="486" y2="269" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
</svg>

---

## Les deux formes

### Chaîne `sql` unique — par défaut

```toml
[[connectors.crm.queries]]
name = "customer_count"
sql  = "SELECT COUNT(*) FROM customers"
```

Une instruction, qui s'exécute partout. C'est la forme à privilégier chaque fois que possible.

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

Les chaînes de dialecte proviennent de SQLAlchemy. Le dialecte d'un pool suit son **Type de base** (étape *Base de données* de la page Pools) — ou, pour une URL saisie à la main, le schéma de l'URL :

| Clé | Base |
|---|---|
| `default` | Repli obligatoire. Utilisé quand aucune variante spécifique ne correspond. |
| `postgresql` | PostgreSQL. |
| `oracle` | Oracle. |
| `mysql` | MySQL. |
| `mariadb` | MariaDB. |
| `mssql` | Microsoft SQL Server. |
| `sqlite` | SQLite. |
| `db2` | IBM Db2 (Linux, UNIX, Windows). |
| `ibmi` | Db2 for i (IBM i, AS/400). |

Un pool Db2 ou IBM i s'appelle `db2` / `ibmi` partout, avant comme après sa connexion — et non du nom que se donne le pilote d'IBM : une variante écrite sous `db2` ou `ibmi` est donc bien celle qui s'exécute.

Le validateur impose deux règles sur la map :

| Règle | Pourquoi |
|---|---|
| `default` **doit** être présent. | Le moteur a besoin d'un repli pour tout pool non mappé explicitement. |
| `default` **ne doit pas** être vide. | Un défaut vide échouerait silencieusement à l'exécution. |

---

## L'éditeur

Dans l'éditeur de requête (**Liberty Next → Données → Connecteurs**, section Tables, Requêtes, Séquences ou Lookups, étape **Instruction**), le champ **SQL** est un éditeur SQL unique :

1. **+ per-dialect variants** le transforme en liste de variantes, en commençant par `default (required)`, qui reprend le SQL en place.
2. Un nom de dialecte (`oracle`, `postgresql`, `mssql`…) saisi dans le champ **dialect**, suivi d'Entrée, ajoute un éditeur pour cette variante.
3. Le **×** à côté d'une variante la supprime ; **single** revient à une instruction unique dès qu'il ne reste que `default`.

L'assistant CRUD écrit une instruction unique ; une requête générée se convertit ensuite de la même façon.

---

## Cas d'usage

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

Au moment de l'exécution, le moteur lit le **dialecte du pool** (son **Type de base**, dans *Liberty Next → Administrer → Pools → \<pool> → Base de données*) et :

1. Cherche la clé de dialecte dans la map `sql`.
2. Retombe sur `default` quand aucune variante spécifique ne correspond.
3. Échoue à l'analyse quand `default` est manquant ou vide.

Un connecteur dirigé vers un autre pool — via le flux Dupliquer l'application ou en changeant la valeur `pool` du connecteur — sélectionne automatiquement la variante correspondante. Aucune modification de code nécessaire.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Clé `default` manquante. | Le connecteur échoue à l'analyse à l'enregistrement / au rechargement. L'erreur mentionne « a per-dialect sql map must include a 'default' key ». | Ajoutez une variante `default`. |
| `default` vide. | Même erreur de analyse — « the 'default' sql variant must not be empty ». | La renseigner — même un simple `SELECT 1` suffit à passer la validation le temps de finir les autres variantes. |
| Utiliser des noms de `:placeholder` différents selon les variantes. | Certains appels lient une valeur qui n'apparaît pas dans la variante exécutée — le moteur les ignore silencieusement. | Gardez le jeu de placeholders identique sur chaque variante. Si un paramètre n'a véritablement pas de sens sur un dialecte, repensez la conception — découpez en deux requêtes nommées. |
| Oublier `ORDER BY` sur une requête paginée. | Chaque backend a son propre ordre de lignes quand l'ordre n'est pas spécifié — la pagination produit des résultats différents sur Postgres vs Oracle. | Toujours ajouter un `ORDER BY` avec LIMIT / FETCH / TOP. |
| SQL par dialecte sur la sortie de l'Assistant CRUD. | L'assistant écrit toujours du SQL en chaîne unique ; une conversion après coup peut casser la convention `:NAME_ORIGINAL` de l'enregistrement du dialogue si une variante l'oublie. | À la conversion, reprendre la convention dans chaque variante. |

---

## Quand NE PAS utiliser le SQL par dialecte

| Anti-motif | À préférer |
|---|---|
| Deux variantes qui ne diffèrent que par des espaces cosmétiques / l'ordre des colonnes. | Une seule chaîne SQL — laissez les opérateurs voir la cohérence. |
| Un seul pool, pas d'autre prévu. | Une seule instruction SQL — les variantes s'ajoutent plus tard si un second dialecte apparaît. |
| Une instruction complexe qui demande beaucoup d'ajustements par dialecte. | Deux requêtes nommées — `monthly_revenue_pg` et `monthly_revenue_oracle` — et une étape `python` unique (ou la logique d'écran) qui choisit la bonne. Plus facile à maintenir quand les variantes divergent fortement. |

La map par dialecte brille pour des différences **petites et prévisibles** (troncature de date, limites de lignes, upserts). Pour de larges réécritures, des requêtes nommées séparées se lisent plus clairement.

---

## Et ensuite

- [Concepts → Connecteurs](../../connectors.md) — la référence détaillée sur les pools et dialectes.
- [Liaison de paramètres](./parameter-binding.md) — les paramètres `:placeholder` se comportent de manière identique sur toutes les variantes.
- [Dupliquer une requête ou un connecteur](./clone.md) — quand deux requêtes nommées conviennent mieux qu'une liste de variantes.
