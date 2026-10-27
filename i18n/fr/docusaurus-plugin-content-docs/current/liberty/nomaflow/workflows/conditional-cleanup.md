---
title: Nettoyage conditionnel
description: "Recette — purger chaque nuit les anciennes lignes, mais seulement quand il y en a assez, par lots, avec la décision et les comptages dans le journal de l'exécution."
keywords: [Nomaflow, recette, nettoyage, purge, seuil, lots, étape python, sql_query, Liberty Next]
---

# Nettoyage conditionnel

Chaque nuit, supprimer les lignes d'audit de plus de 90 jours — mais seulement quand plus de 10 000 se sont accumulées, et par lots pour ne pas verrouiller la table longtemps.

---

## Prérequis \{#needs\}

Deux requêtes nommées sur le connecteur `ops-db` — pour PostgreSQL :

```sql title="audit_old_count_get"
SELECT COUNT(*) AS N FROM audit_log WHERE created_at < CURRENT_DATE - CAST(:DAYS AS INTEGER)
```

```sql title="audit_old_batch_delete"
DELETE FROM audit_log
WHERE id IN (SELECT id FROM audit_log WHERE created_at < CURRENT_DATE - CAST(:DAYS AS INTEGER) LIMIT 5000)
```

---

## La version simple \{#simple\}

Sans seuil, une étape `sql_query` qui appelle `audit_old_batch_delete` suffit — la planifier assez souvent pour que chaque exécution supprime un lot.

---

## Avec un seuil \{#threshold\}

```python title="plugins/housekeeping/audit.py"
import asyncio
import logging

from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import StepResult

_log = logging.getLogger(__name__)


async def purge_audit(*, connector: str, days: int, threshold: int, connectors: ConnectorRegistry) -> StepResult:
    db = connectors.sql(connector)
    count = (await db.execute("audit_old_count_get", {"DAYS": days})).rows[0]["N"]
    if count < threshold:
        _log.info("%d old row(s), below %d — nothing to do", count, threshold)
        return StepResult(rows_affected=0, extras={"old_rows": count, "purged": False})

    deleted = 0
    while True:
        n = (await db.execute("audit_old_batch_delete", {"DAYS": days})).rowcount
        deleted += max(n, 0)
        if n <= 0:
            break
        await asyncio.sleep(0)          # permet à Annuler d'arrêter la boucle entre deux lots
    _log.info("%d row(s) deleted", deleted)
    return StepResult(rows_affected=deleted, extras={"old_rows": count, "purged": True})
```

```toml title="jobs.toml"
[[jobs]]
id = "purge-audit"
schedule = "30 3 * * *"
timezone = "Europe/Paris"
tags = ["housekeeping"]

[[jobs.steps]]
type = "python"
name = "purge-audit"
callable = "housekeeping.audit:purge_audit"
op_kwargs = { connector = "ops-db", days = 90, threshold = 10000 }
```

Le détail de l'exécution affiche les lignes supprimées ; le journal indique si le seuil était atteint. `days` et `threshold` se changent pour une exécution dans **Run with parameters**.

---

## Variantes \{#variants\}

| Besoin | Modification |
|---|---|
| Un essai à blanc d'abord | Ajouter un argument `dry_run: bool = False` qui se contente de compter, et lancer une fois avec `dry_run = true`. |
| Plusieurs tables | Une tâche par table, ou une fonction qui reçoit en arguments les requêtes de la table. |
| Être prévenu que la purge a eu lieu | Une règle de notification sur `succeeded` pour cette tâche. |
