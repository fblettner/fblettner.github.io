---
title: Troubleshoot
description: "A run failed, a step hangs, the schedule isn't firing, cancellation doesn't work — checklists and concrete fixes for every common Nomaflow incident."
keywords: [Nomaflow, troubleshoot, run failed, hang, schedule not firing, cancellation, log level, debug, Liberty Framework]
---

# Troubleshoot

This page is a checklist of what to do when a Nomaflow run misbehaves. Each section is a symptom → diagnosis → fix, in the order an operator would naturally encounter them.

---

## A run shows FAILED

Open the Run detail page (click the red badge on the catalogue card). The page tells you a lot in three places:

| Look at | What it tells you |
|---|---|
| **Which step is red** | The step that raised. |
| **The expanded step row** | The exception type + message + traceback. |
| **The log right above the step boundary** | Often the real cause (a connection that timed out, a row that violated a constraint, an upstream service that returned 500). |

The exception type is usually the fast clue:

| Exception | What it usually means | Where to look |
|---|---|---|
| `OperationalError` / `InterfaceError` | The DB connection broke — wrong host, timeout, pool exhausted. | The connector's pool config. |
| `IntegrityError` / `UniqueViolation` | A constraint was violated on the target. | The data the step wrote — a duplicate primary key, a NOT NULL violation. |
| `TimeoutError` (asyncio) | The step exceeded its `timeout_seconds`. | The step's timeout setting, or the upstream's responsiveness. |
| `HTTPStatusError` 4xx | The HTTP call was rejected. | Authentication, URL, payload shape. |
| `HTTPStatusError` 5xx | The upstream service had an issue. | Retry policy might help; otherwise wait + replay. |
| `ImportError` / `ModuleNotFoundError` | A Python step's callable isn't importable. | Plugin installed? Module path correct? |
| `KeyError` / `AttributeError` | A Python step is reading a field that isn't there. | The merged params snapshot in the header. |

---

## A step that succeeded is doing the wrong thing

Symptom: the step is green but the data it produced is wrong. The run looks fine; the world doesn't match.

Diagnosis steps:

1. **Open the parameters snapshot** in the Run detail header. Are the merged params what you expected? (A common gotcha: a job-level `target_connector` you forgot was set, overriding a step's local value.)
2. **Look at the step's output**. `sql_copy` reports source / target row counts — a mismatch tells you a `WHERE` clause filtered more than expected.
3. **Re-run with `log_level = DEBUG`**. The full SQL of every query is emitted — read the actual statement, not the one you think you wrote.
4. **Compare to the previous successful run**. If yesterday's snapshot looks right and today's doesn't, the data changed — not the code.

The fix usually lives in **the step's config**, not in the runner. The runner is faithful; the configuration drifts.

---

## A run hangs in RUNNING

Symptom: the badge stays blue, the timeline doesn't advance, the log stops emitting.

Diagnosis:

| What you see | Likely cause |
|---|---|
| Last log line is "fetching from source"; no progress for minutes. | A SQL query is blocked — long-running, locked table, network stall. |
| Last log line is "HTTP request started"; nothing after. | The upstream is slow / hung. The step's `timeout_seconds` will eventually fire. |
| No log lines at all, the step dot just sits there. | A Python step looping without yielding to the event loop. |

Fixes:

- **For blocked SQL**: cancel the run, investigate the DB (`SHOW PROCESSLIST` / `pg_stat_activity`). If you can identify the blocker, kill it; then replay the job.
- **For slow upstream**: wait for the step's timeout. The run will fail; replay with retry policy bumped up.
- **For non-yielding Python**: cancel won't help (the step doesn't reach a checkpoint). The fix lives in the Python — make it yield (`await asyncio.sleep(0)` periodically, or call `ctx.is_cancelled()` in the loop). Restart the framework process as a last resort.

---

## ✕ Cancel doesn't stop my step \{#cancellation-doesnt-stop-my-step\}

Symptom: you clicked Cancel; the step keeps running.

Cause: cancellation is a **request**, not a kill. The step receives it at its next checkpoint:

| Step type | Cancellation checkpoint |
|---|---|
| `sql_query` / `sql_copy` | Between batches (`sql_copy`) or when the underlying driver checks. Usually within a few seconds. |
| `http` | When the network call's next read happens. Hung connections honour the request via the timeout. |
| `python` | At every `await`. A loop with no `await` won't yield. |

### Fix for Python steps

Make the step **cooperative**:

```python
async def long_loop(ctx, **kwargs):
    for i, item in enumerate(items):
        # Yield to the event loop so the cancellation request gets handled.
        if i % 100 == 0:
            await asyncio.sleep(0)
            if ctx.is_cancelled():
                ctx.log.info(f"cancelled at item {i}/{len(items)}")
                raise asyncio.CancelledError()
        process(item)
```

For genuinely CPU-bound work that can't yield, offload to a thread with `await asyncio.to_thread(…)` — the framework runs the thread, the event loop stays free, cancellation propagates through the asyncio task wrapper.

---

## The schedule isn't firing

Symptom: the cron is set, the time has passed, no new run.

Checklist:

| Check | How |
|---|---|
| **Is the job enabled?** | The toggle on the catalogue card should be green. |
| **Is the schedule valid?** | The Job editor's live preview should show three future fires. |
| **Is the timezone what you think?** | A cron in `UTC` fires at 02:00 UTC, not 02:00 Paris. |
| **Was the framework restarted across the firing moment?** | A scheduled fire that should have happened during downtime is **not** retroactive — it's lost. The next fire is whenever the cron next matches. |
| **Is `[jobs] scheduler_enabled` set on this replica?** | Multi-replica installs pin scheduler duties to one replica. The others have `scheduler_enabled = false` and won't fire crons. |

For a quick test, set the cron to `* * * * *` (every minute) and watch the catalogue. If runs start appearing, the wiring works; revert to your real schedule.

---

## The job is missing from the catalogue

Symptom: you saved the job, but it doesn't appear.

Most common cause: the **scheduler reload** didn't reach this page. The page polls every 2 seconds while runs are in flight; otherwise it relies on a manual refresh. Click **↻ Reload** on the toolbar.

If the job still doesn't appear:

- Check the framework logs for a parse error on save — a malformed step or unknown step type prevents the whole catalogue from loading.
- Check your role has the `job:*` permission — the API filters out jobs you don't have permission to see.

---

## "Permission denied" or 403 on the Jobs page

The Jobs page requires the `job:*` permission (or `superuser`). If the page won't open:

- Sign out and back in. Permissions are cached in the JWT; a re-login refreshes them.
- Check your role assignments in *Settings → Roles*.
- The `superuser` role bypasses the check and is the right tool for an admin who needs full access; granular `job:<name>` permissions are for operators who should only see specific jobs.

---

## A step retries forever

Symptom: a step keeps retrying; the run is in flight but never completes.

Cause: a misconfigured retry policy combined with a deterministic failure. With `attempts = 5` and `backoff = exponential`, a step that fails immediately re-runs after 60s, 120s, 240s, 480s — almost 15 minutes total.

Fixes:

- Cancel the run.
- Lower `attempts` to something realistic (2 or 3).
- Investigate the root cause; retries don't fix a SQL constraint violation.

---

## Multi-replica: jobs firing twice

Symptom: each scheduled cron produces two runs at the same instant.

Cause: two framework replicas are running their schedulers against the same database. The bundled advisory lock should prevent it, but the explicit setting is safer.

Fix:

- On every replica except one, set `[jobs] scheduler_enabled = false` in `app.toml`.
- Restart the framework process on those replicas.
- The remaining replica is the **scheduler primary** — every cron fire flows through it.

The other replicas still **serve the UI** and accept manual / API triggers. They just don't auto-fire.

See [Administration](../administration.md) for the full multi-replica wiring.

---

## DEBUG log is too noisy

Symptom: you switched to `DEBUG` to investigate; the log is unreadable.

`DEBUG` emits the full SQL of every query plus framework-internal events. It's meant for one-off investigation, not steady state.

- After the diagnostic run, switch the job back to `INFO` (or unset the per-fire override).
- If you need DEBUG for one specific step, narrow the scope: split the job, put `DEBUG`-worthy logic in its own step you run separately.

---

## Connector authentication keeps failing

Symptom: the step fails with `authentication failed` or `permission denied`.

Checklist:

| Check | How |
|---|---|
| Is the connector's encrypted password still valid? | *Settings → Connectors → \<name>* → re-enter password, re-save. |
| Did the upstream rotate credentials? | Talk to whoever owns the upstream. Update the password in the connector. |
| Is the framework's encryption key still the same? | If `LIBERTY_ENCRYPTION_KEY` was rotated, encrypted values written under the old key can no longer be decrypted. Re-save the connector. |
| Is the network actually reachable? | A quick `python` step that opens the connector and runs `SELECT 1` is the fastest diagnostic. |

---

## A run's log is empty

Symptom: the Run detail page shows zero log lines.

Causes:

- **The run failed before the runner emitted its first line** — usually a config validation error. The framework log on the host has the detail.
- **The log retention window passed** — runs older than 90 days are pruned; their step rows survive, the log doesn't.
- **The connection to the Socket.IO room dropped during a live run** — refresh the page; the log is re-rendered from the database.

---

## "Step has no output" in the history

Some Python steps return `None`. The Run detail page renders `{}` or "no output" for them. The step still SUCCEEDED.

This isn't a bug — it's a missed opportunity. A step that always returns a structured dict (`{"rows_affected": N, "details": ...}`) makes the run history meaningful three weeks later. A step that returns nothing is a black box.

Convention: every Python step should return at least `{"rows_affected": …}` or `{"status": "ok"}`.

---

## What's next

- [Run history](./history.md) — the surface the troubleshooting starts from.
- [Notifications](../notifications.md) — get pinged on failure so investigation starts earlier.
- [Administration](../administration.md) — multi-replica, retention, restart behaviour.
- [Custom Python steps](../custom-python.md) — how to write Python that's cancellation-friendly.
