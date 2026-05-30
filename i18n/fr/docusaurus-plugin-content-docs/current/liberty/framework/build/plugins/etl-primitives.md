---
title: Primitives ETL
description: "La boîte à outils liberty.etl — six helpers asynchrones que les callables de plugin composent en flux ETL : copy_query_to_table, snapshot_rows, delete_rows, truncate_table, insert_audit_record, run_query."
keywords: [Liberty Framework, plugin, ETL, liberty.etl, copy_query_to_table, snapshot_rows, delete_rows, truncate_table, insert_audit_record, run_query]
---

# Primitives ETL

Le framework livre **six helpers asynchrones** sous `liberty.etl` qui prennent en charge les parties ennuyeuses et propices aux erreurs de l'ETL — streaming d'un SELECT vers une table cible, snapshot de lignes dans une table d'historique, suppression / vidage avec gestion correcte des transactions, écriture d'enregistrements d'audit standards. Les callables les composent.

Les six sont **asynchrones**, les six prennent un `ConnectorRegistry`, les six recherchent le moteur cible par nom de connecteur. Le même appel fonctionne sur n'importe quel pool connu du framework — SQLite de dev, Postgres de prod, Oracle client — sans modification de plomberie.

---

## Pourquoi ces helpers (plutôt qu'écrire le SQL soi-même)

Les helpers sont neutres vis-à-vis du framework — pas de JDE, pas de Nomasx-1, pas de spécificités métier. Ce qu'ils apportent :

| Ce à quoi on n'a pas à penser | Parce que le helper s'en charge |
|---|---|
| Ouvrir le moteur, démarrer une transaction, la refermer en cas d'erreur. | Encapsulé dans `async with engine.begin()`. |
| Streamer les lignes par lots sans charger le jeu de résultats en mémoire. | `copy_query_to_table` utilise `result.partitions(batch_size)`. |
| Construire les INSERT à partir de la forme des colonnes du SELECT. | Inférée à partir des colonnes du premier lot. |
| Passer en minuscules les noms de colonnes pour la cible. | Comportement par défaut conforme à la convention du framework. |
| Tracer les compteurs de lignes au format standard. | Intégré à chaque helper. |
| Lier le `${nomaflow_run_id}` à la ligne d'audit. | `insert_audit_record` le résout automatiquement via `current_run_id()`. |

Ce qui reste à la charge de l'appelant :

| Responsabilité | Notes |
|---|---|
| Le SQL lui-même. | Les helpers ne composent ni les SELECT ni les clauses WHERE. |
| Le nom du connecteur. | C'est l'appelant qui déclare sur quel connecteur exécuter. |
| L'interpolation d'identifiants de confiance. | Les noms de table / colonne sont interpolés sans quoting (contrôlés par l'appelant). |
| Les valeurs liées aux paramètres `:placeholder`. | Passer via le kwarg `params` — jamais par formatage de chaîne. |

---

## Import

```python
from liberty.etl import (
    copy_query_to_table,
    snapshot_rows,
    delete_rows,
    truncate_table,
    insert_audit_record,
    run_query,
)
```

Les six sont ré-exportés depuis le sommet du package.

---

## `copy_query_to_table` — streamer un SELECT vers une cible

Le plus lourd des six. Exécute un SELECT sur un connecteur source, streame le résultat, insère chaque lot dans une table cible sur un connecteur (potentiellement différent). Retourne le nombre de lignes insérées.

```python
async def copy_query_to_table(
    *,
    connectors: ConnectorRegistry,
    source_connector: str,
    source_sql: str,
    source_params: Mapping[str, Any] | None = None,
    target_connector: str,
    target_table: str,
    target_columns: list[str] | None = None,
    batch_size: int = 1000,
) -> int
```

| Argument | Notes |
|---|---|
| `source_sql` | Le SELECT à streamer. Peut porter des paramètres `:placeholder`. |
| `source_params` | Valeurs liées aux paramètres du SELECT. |
| `target_table` | Peut être qualifié par schéma (`"nomasx1.SECURITY_USERS"`). |
| `target_columns` | Par défaut, les **noms de colonnes source passés en minuscules** — respecte la convention où la source est en majuscules et la cible en minuscules. À passer explicitement quand les noms diffèrent. |
| `batch_size` | Lignes par lot d'INSERT. La valeur par défaut 1000 garde un WAL réduit et des verrous courts. |

### Quand l'utiliser

- ETL de la base opérationnelle vers la base de reporting.
- Copies inter-tenants (même forme, schéma différent).
- Rejeux d'historique ponctuels.

### Exemple

```python
from liberty.etl import copy_query_to_table

async def refresh_security_users(*, connectors, apps_id, **_):
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="""
            SELECT USR_ID, USR_NAME, USR_ROLE
            FROM   F0093
            WHERE  ULAPPID = :apps_id
        """,
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )
    return {"rows_affected": rows}
```

---

## `snapshot_rows` — copier des lignes dans une table d'historique

`INSERT INTO history_table SELECT * FROM source_table [WHERE where]` — au sein du même connecteur. Sert à préserver un sous-ensemble de données avant un rafraîchissement destructif.

```python
async def snapshot_rows(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    source_table: str,
    history_table: str,
    where: str = "",
    params: Mapping[str, Any] | None = None,
    if_not_exists: bool = False,
) -> int
```

| Argument | Notes |
|---|---|
| `source_table` / `history_table` | Tous deux sur **le même connecteur**. La table d'historique est conventionnellement nommée `<source>$`. |
| `where` | Fragment SQL libre avec des placeholders `:name`. Vide, snapshote chaque ligne. |
| `params` | Valeurs liées à la clause WHERE. |
| `if_not_exists` | Quand `true`, les lignes qui violeraient la clé primaire de la table d'historique sont ignorées silencieusement (au lieu de lever). Utile pour les chaînes de rafraîchissement rejouables. |

### Quand l'utiliser

- La phase de snapshot d'une chaîne de rafraîchissement : **snapshot → suppression → rechargement**.
- Tables d'audit / d'historique qui reflètent l'état courant.

### Exemple

```python
from liberty.etl import snapshot_rows

async def archive_users_before_refresh(*, connectors, apps_id, **_):
    rows = await snapshot_rows(
        connectors=connectors,
        target_connector="nomasx1",
        source_table="nomasx1.security_users",
        history_table="nomasx1.security_users$",
        where="apps_id = :apps_id",
        params={"apps_id": apps_id},
    )
    return {"rows_affected": rows}
```

---

## `delete_rows` — `DELETE FROM table [WHERE where]`

Suppresseur simple — retourne le nombre de lignes rapporté par le driver.

```python
async def delete_rows(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    table: str,
    where: str = "",
    params: Mapping[str, Any] | None = None,
) -> int
```

Un `where` vide supprime chaque ligne. Pour « vider la table en entier rapidement », utiliser plutôt `truncate_table` — `DELETE` écrit un WAL par ligne.

### Exemple

```python
from liberty.etl import delete_rows

async def purge_old_logs(*, connectors, days_to_keep=90, **_):
    deleted = await delete_rows(
        connectors=connectors,
        target_connector="default",
        table="app_log",
        where="created_at < CURRENT_DATE - :days::interval",
        params={"days": f"{days_to_keep} days"},
    )
    return {"rows_affected": deleted}
```

---

## `truncate_table` — `TRUNCATE TABLE table`

Vidage rapide — pas de WAL par ligne, pas de compteur. Sur Postgres, prend un verrou ACCESS EXCLUSIVE.

```python
async def truncate_table(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    table: str,
) -> None
```

### Quand l'utiliser

- La phase de remise à zéro d'un rechargement complet. Avant que `copy_query_to_table` ne rafraîchisse toute la table.
- Mise en place de tests qui demandent de partir d'un état vide connu.

### Exemple

```python
from liberty.etl import truncate_table, copy_query_to_table

async def full_reload_users(*, connectors, apps_id, **_):
    await truncate_table(connectors=connectors, target_connector="nomasx1", table="nomasx1.security_users")
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="SELECT * FROM F0093 WHERE ULAPPID = :apps_id",
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )
    return {"rows_affected": rows}
```

---

## `insert_audit_record` — écrire la ligne d'audit standard

Écrit une ligne dans la table `collect_audit` — le journal d'audit standard du framework pour les événements ETL. La ligne porte l'apps_id, le module, l'action, le timestamp de rafraîchissement, l'id d'exécution Nomaflow.

```python
async def insert_audit_record(
    *,
    connectors: ConnectorRegistry,
    target_connector: str,
    target_schema: str | None,
    target_table: str,
    apps_id: int | str,
    module: str,
    action: str = "ETL",
    audit_table: str = "collect_audit",
    run_id: str | None = None,
) -> None
```

| Argument | Notes |
|---|---|
| `module` | L'un des noms de module standards — `SECURITY`, `LICENSE`, `EMPLOYEES`, `OUT`, `SOD`, `XREF`, `DATABASE`, `ACTIVITY_LOG`, `AUDIT_TRAIL`, `LDAP`. Le widget de tableau de bord répond à « quand X a-t-il été rafraîchi pour la dernière fois ? » en lisant cette colonne. |
| `action` | Par défaut `"ETL"`. D'autres valeurs apparaissent différemment dans les rapports d'audit. |
| `audit_table` | Par défaut `"collect_audit"`. À surcharger uniquement pour des plugins hors de l'arborescence qui veulent leur propre journal d'audit. |
| `target_schema` | Quand défini, la table est qualifiée par schéma (`<schema>.<audit_table>`). |
| `run_id` | Par défaut, l'id d'exécution Nomaflow actif (`current_run_id()`). La valeur passée prime — utile pour des rejeux d'historique ad-hoc. |

### Quand l'utiliser

- Après chaque opération ETL ayant rafraîchi des données — donne à la couche de monitoring / tableau de bord un signal interrogeable du type « le module X a été exécuté pour la dernière fois à Y pour le tenant Z ».
- Le lien `run_id` rend trivial de relier une ligne d'audit à son exécution Nomaflow.

### Exemple

```python
from liberty.etl import copy_query_to_table, insert_audit_record

async def refresh_security(*, connectors, ctx, apps_id, **_):
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="SELECT * FROM F0093 WHERE ULAPPID = :apps_id",
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )
    await insert_audit_record(
        connectors=connectors,
        target_connector="nomasx1",
        target_schema="nomasx1",
        target_table="security_users",
        apps_id=apps_id,
        module="SECURITY",
        # run_id auto-resolves from ctx.run_id via current_run_id()
    )
    return {"rows_affected": rows}
```

---

## `run_query` — la voie d'extension

Exécute n'importe quelle instruction SQL et retourne le `rowcount`. Le helper de plus bas niveau — à utiliser quand les helpers typés ne conviennent pas.

```python
async def run_query(
    *,
    connectors: ConnectorRegistry,
    connector: str,
    sql: str,
    params: Mapping[str, Any] | None = None,
) -> int
```

| Argument | Notes |
|---|---|
| `sql` | Toute instruction exécutable — UPDATE, INSERT, DDL, CALL. |
| `params` | Valeurs liées. |

Retourne le nombre de lignes rapporté par le driver (ou 0 pour le DDL).

### Quand l'utiliser

- Opérations ponctuelles qui ne rentrent pas dans les helpers typés : `REFRESH MATERIALIZED VIEW`, un UPDATE ad-hoc, un appel de procédure.
- Encapsulation d'une invocation de procédure stockée.

Pour les motifs **récurrents**, écrire un helper dédié pour que le site d'appel reste déclaratif.

### Exemple

```python
from liberty.etl import run_query

async def refresh_materialised_views(*, connectors, **_):
    rows = await run_query(
        connectors=connectors,
        connector="nomasx1",
        sql="REFRESH MATERIALIZED VIEW CONCURRENTLY nomasx1.license_jde_usage",
    )
    return {"rows_affected": rows}
```

---

## Un exemple composé — chaîne de rafraîchissement complète

Le motif canonique : **snapshot → truncate → copie → audit**. Tout composé à partir des primitives :

```python
from liberty.etl import (
    snapshot_rows, truncate_table, copy_query_to_table, insert_audit_record,
)

async def refresh_security_users(*, connectors, ctx, apps_id, **_):
    """Full refresh of nomasx1.security_users for one tenant."""
    # 1. Snapshot current rows into history (idempotent — silently skip dup keys)
    await snapshot_rows(
        connectors=connectors,
        target_connector="nomasx1",
        source_table="nomasx1.security_users",
        history_table="nomasx1.security_users$",
        where="apps_id = :apps_id",
        params={"apps_id": apps_id},
        if_not_exists=True,
    )

    # 2. Delete current rows for this tenant
    await delete_rows(
        connectors=connectors,
        target_connector="nomasx1",
        table="nomasx1.security_users",
        where="apps_id = :apps_id",
        params={"apps_id": apps_id},
    )

    # 3. Re-copy from the source
    rows = await copy_query_to_table(
        connectors=connectors,
        source_connector="jdedwards",
        source_sql="""
            SELECT USR_ID, USR_NAME, USR_ROLE
            FROM   F0093
            WHERE  ULAPPID = :apps_id
        """,
        source_params={"apps_id": apps_id},
        target_connector="nomasx1",
        target_table="nomasx1.security_users",
    )

    # 4. Audit the refresh
    await insert_audit_record(
        connectors=connectors,
        target_connector="nomasx1",
        target_schema="nomasx1",
        target_table="security_users",
        apps_id=apps_id,
        module="SECURITY",
    )

    return {"rows_affected": rows, "tenant": apps_id}
```

Quatre lignes de logique métier. Toute préoccupation d'infrastructure — transactions, traitement par lots, timestamps d'audit, liaison à l'id d'exécution — prise en charge par les primitives.

---

## Quand redescendre au SQLAlchemy brut

Les primitives couvrent environ 80 % des flux ETL. Pour le reste, redescendre directement au moteur SQLAlchemy :

```python
async def custom_logic(*, connectors, **_):
    engine = connectors.pools.engine("nomasx1")
    async with engine.begin() as conn:
        result = await conn.execute(text("SELECT ..."))
        # Multi-step transaction, complex result handling, etc.
        ...
```

Recourir au SQLAlchemy brut quand :

| Motif | Pourquoi |
|---|---|
| Transaction multi-instructions qui doit réussir ou échouer en bloc. | Les primitives prennent chacune leur propre transaction ; il en faut une seule partagée. |
| Streaming de résultats avec logique par ligne personnalisée. | `copy_query_to_table` streame vers une table cible ; pour traiter ligne par ligne en Python, le moteur est plus proche des données. |
| Retour de données structurées depuis un SELECT. | Les primitives retournent des compteurs de lignes, pas des lignes. |
| Appel d'une procédure avec des paramètres OUT. | L'API du driver est directe. |

Les primitives sont une **opinion**, pas une barrière. À utiliser quand elles conviennent ; à laisser au profit du moteur quand elles ne conviennent pas.

---

## Rappel de sécurité sur les identifiants

Les primitives interpolent les noms de table et de colonne **sans quoting** — ce sont des entrées de confiance issues du code du plugin, pas de l'utilisateur. Si un nom de table provient un jour d'une source contrôlée par l'utilisateur (un formulaire, une requête HTTP, un upload CSV), **le valider contre une liste blanche avant de le passer**. Sinon, l'injection SQL est recréée via le vecteur du nom de table.

Les valeurs liées sont la voie sûre — à passer via `params`, jamais via des f-strings.

---

## Et ensuite

- [Déployer et déboguer](./deploy-and-debug.md) — mettre le plugin en livraison.
- [Écrire un callable](./write-a-callable.md) — référence du contrat de fonction.
- [Nomaflow → Recettes de workflows](../../../nomaflow/workflows/scheduled-sync.md) — flux réels qui composent ces helpers.
