---
title: Conditional cleanup
description: "Recipe — purge old rows every night, but only when there are enough of them, in batches, with the decision and the counts in the run log."
keywords: [Nomaflow, recipe, cleanup, purge, threshold, batches, python step, sql_query, Liberty Next]
---

# Conditional cleanup

Every night, delete the audit rows older than 90 days — but only when more than 10 000 have piled up, in batches so the table is not locked for long.

---

## What you need \{#needs\}

Two named queries on the connector `ops-db` — for PostgreSQL:

```sql title="audit_old_count_get"
SELECT COUNT(*) AS N FROM audit_log WHERE created_at < CURRENT_DATE - CAST(:DAYS AS INTEGER)
```

```sql title="audit_old_batch_delete"
DELETE FROM audit_log
WHERE id IN (SELECT id FROM audit_log WHERE created_at < CURRENT_DATE - CAST(:DAYS AS INTEGER) LIMIT 5000)
```

---

## The simple way \{#simple\}

When no threshold is needed, a `sql_query` step calling `audit_old_batch_delete` is enough — schedule it often enough that each run deletes one batch.

---

## With a threshold \{#threshold\}

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
        await asyncio.sleep(0)          # lets Cancel stop the loop between batches
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

The run detail shows the rows deleted; the log tells whether the threshold was reached. `days` and `threshold` can be changed for one run in **Run with parameters**.

---

## Variants \{#variants\}

| Need | Change |
|---|---|
| A dry run first | Add a `dry_run: bool = False` argument that only counts, and run once with `dry_run = true`. |
| Several tables | One job per table, or one function that takes the table's queries as arguments. |
| Be told when the purge ran | A notification rule on `succeeded` for this job. |
