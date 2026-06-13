---
title: Écrire un callable
description: "Le contrat de fonction d'une étape python — signature, kwargs auto-injectés (connectors / ctx / settings), normalisation de la valeur de retour, synchrone vs asynchrone, sémantique des erreurs et de l'annulation."
keywords: [Liberty Framework, plugin, callable, python step, function signature, ConnectorRegistry, RunContext, StepResult, StepFailed]
---

# Écrire un callable

Une étape `python` de Nomaflow appelle une fonction du plugin. Le framework importe le module, recherche la fonction par son nom, construit les kwargs, attend ou exécute l'appel dans un thread, puis transforme la valeur de retour en `StepResult`. Cette page couvre le contrat — ce que la fonction reçoit, ce qu'elle doit retourner, comment réagir aux erreurs.

---

## La signature minimale

```python
# plugins/myapp/cleanup.py
async def purge_old_sessions(**kwargs) -> dict:
    return {"rows_affected": 0}
```

C'est le minimum fonctionnel. Référencé depuis `jobs.toml` :

```toml
[[jobs.steps]]
type = "python"
name = "purge"
callable = "myapp.cleanup:purge_old_sessions"
```

`**kwargs` attrape tout ce que le framework injecte (détails plus bas) ainsi que tout ce que les `op_kwargs` de l'étape transportent. Retourner `{"rows_affected": N}` place un compteur sur l'historique d'exécution.

Une version plus réaliste prend ses arguments par nom :

```python
async def purge_old_sessions(
    *,                                # kwargs-only signature is the convention
    connectors,                       # auto-injected
    ctx,                              # auto-injected
    apps_id: int,                     # from op_kwargs
    max_age_days: int = 30,           # from op_kwargs, with default
    **_,                              # swallow the rest
) -> dict:
    ...
```

---

## Ce que le framework auto-injecte

Trois kwargs sont auto-injectés **quand la fonction les déclare par leur nom** (l'exécuteur inspecte la `signature` pour décider). Une fonction qui ne les déclare pas ne les reçoit tout simplement pas — pas de `TypeError`.

| Kwarg | Type | Ce qu'il apporte |
|---|---|---|
| **`connectors`** | `ConnectorRegistry` | Accès à tous les pools SQL et API définis dans `connectors.toml`. `connectors.pools.engine("default")` retourne le moteur asynchrone SQLAlchemy. |
| **`ctx`** | `RunContext` | L'état par exécution : `ctx.run_id`, `ctx.job_id`, `ctx.trigger`, `ctx.prev_rows_affected`, `ctx.parent_chain`. Passer `ctx.run_id` aux logs / écritures d'audit pour les aligner avec l'enregistrement d'exécution Nomaflow. |
| **`settings`** | `Settings` | Configuration vivante — `settings.connectors.config_path`, `settings.app`, etc. Utile pour les callables qui opèrent sur les fichiers de configuration eux-mêmes. |

Une fonction qui avale des kwargs arbitraires (`**_`) reçoit **les trois** qu'elle les demande ou non. Une fonction qui en nomme certains explicitement et refuse le reste (pas de `**`) ne reçoit que ceux qu'elle a nommés.

### La couche op_kwargs

Par-dessus les auto-injections, la fonction reçoit chaque clé que l'étape déclare dans `op_kwargs` :

```toml
[[jobs.steps]]
type = "python"
callable = "myapp.cleanup:purge_old_sessions"
op_kwargs = { apps_id = 10, max_age_days = 30 }
```

La fonction reçoit `apps_id=10, max_age_days=30` en plus des auto-injections. Les valeurs fournies par l'opérateur **priment** sur les auto-injections en cas de conflit de clé — utile pour les tests qui passent un registre `connectors` factice.

---

## Le RunContext — ce qu'on peut lire

`ctx` est une petite dataclass :

| Champ | Ce qu'il porte |
|---|---|
| `ctx.run_id` | L'id d'exécution Nomaflow (`run_a8c4d`). À transmettre aux logs / lignes d'audit. |
| `ctx.job_id` | L'id du job qui a produit cette exécution (`nomajde-daily-sync`). |
| `ctx.trigger` | Le `Trigger` qui a déclenché l'exécution — cron / manuel / API / CLI. |
| `ctx.prev_rows_affected` | Lignes affectées par l'étape précédente du même job (ou `None` pour la première étape). |
| `ctx.parent_chain` | Quand cette exécution a été créée par une étape `call_job`, la chaîne d'ancêtres `(job_id, run_id)`. Vide pour les exécutions de premier niveau. |

L'usage couvre rarement tout — `ctx.run_id` est de loin le plus utilisé (journalisation d'audit, liaison de logs). Le reste est disponible quand le besoin se présente.

---

## Valeur de retour — ce qui devient un StepResult

Le framework normalise la valeur de retour en `StepResult`. Quatre formes acceptées :

| Retour | Devient |
|---|---|
| `None` (ou pas de retour) | `StepResult` vide — pas de rows_affected, pas d'extras. |
| `int` | `StepResult(rows_affected=<int>)`. |
| `dict` | `StepResult(extras=<dict>)`. Le dict est sérialisé en JSON dans l'historique d'exécution. |
| `StepResult(...)` | Utilisé tel quel. À importer depuis `liberty.jobs.steps.base` pour construire l'objet avec à la fois `rows_affected` et `extras`. |

Toute autre chose déclenche `StepFailed` — une typo ou un objet non sérialisable se traduit en échec sur l'exécution plutôt qu'en perte silencieuse de données.

### Le retour recommandé

La plupart des callables retournent un dict :

```python
return {"rows_affected": deleted, "tenant": apps_id, "cutoff": cutoff.isoformat()}
```

| Clé | Où elle apparaît |
|---|---|
| `rows_affected` | Cumulée dans le `rows_affected` de l'exécution parente sur la page Exécutions de Nomaflow. La grille s'en sert pour la colonne « X lignes touchées » d'un coup d'œil. |
| Autres clés | Stockées sur l'enregistrement de l'étape comme `extras`. Visibles dans le dépliant par étape de la page Détail d'exécution. |

Garder le dict **petit et structuré** — entiers simples, chaînes courtes, timestamps ISO. L'historique d'exécution l'enregistre ; un dict de 10 Mo gonfle la base de données et l'interface.

---

## Synchrone vs asynchrone

Les deux fonctionnent. L'exécuteur décide via `inspect.iscoroutinefunction` :

| Style de fonction | Comportement |
|---|---|
| `async def foo(...)` | Attendu directement. La boucle d'événements du framework l'exécute. |
| `def foo(...)` | Exécutée dans `asyncio.to_thread(...)` — un thread worker. La boucle d'événements reste libre. |

Pour le travail lié à la base de données, préférer **asynchrone** — les moteurs asynchrones SQLAlchemy s'intègrent naturellement. Pour le travail lié au CPU (génération de PDF, traitement d'images, analyse), synchrone-dans-un-thread convient.

Le mélange convient aussi : une fonction asynchrone peut faire `await asyncio.to_thread(blocking_func, ...)` pour un appel coûteux ponctuel sans bloquer la boucle.

---

## Annulation — ce qu'il faut faire

Le framework annule une étape dans deux scénarios :

| Déclencheur | Réaction attendue |
|---|---|
| L'opérateur clique sur ✕ Annuler sur la page Détail d'exécution. | L'exécuteur envoie `CancelledError` ; le respecter. |
| L'étape dépasse son `timeout_seconds`. | Idem — `asyncio.wait_for` annule l'appel attendu. |

Pour les fonctions asynchrones : l'annulation se propage automatiquement à travers `await`. La fonction doit la laisser passer — ne pas intercepter `asyncio.CancelledError` puis continuer.

Pour les fonctions synchrones : l'annulation ne s'arrête qu'aux frontières `await`. Si la fonction est une longue boucle synchrone sans point de contrôle asynchrone, **l'annulation ne l'arrêtera pas**. Le correctif : rendre la main à la boucle d'événements périodiquement :

```python
async def long_loop(*, items, **_):
    processed = 0
    for i, item in enumerate(items):
        # Yield every 100 items so cancellation can land.
        if i % 100 == 0:
            await asyncio.sleep(0)
        await process(item)
        processed += 1
    return {"processed": processed}
```

Ou utiliser `ctx.is_cancelled()` quand on ne peut sincèrement pas rendre la main (le runner fournit ce helper pour l'annulation coopérative).

---

## Erreurs — comment échouer correctement

Deux classes d'exceptions ont un traitement particulier dans le framework :

| Lever | Effet |
|---|---|
| `StepFailed(msg)` | Marque l'étape en échec ; compte dans la politique de réessai. |
| `StepCancelled(msg)` | Marque l'étape comme annulée ; **ne** déclenche **pas** de réessai. |
| `asyncio.CancelledError` | Se propage sans être touchée (convention asyncio). |
| **Toute autre chose** | Encapsulée automatiquement comme `StepFailed`. Traitée comme un échec ordinaire pour les réessais. |

Deux motifs :

```python
# Idiomatic — let exceptions out, the framework wraps them
async def maybe_fail(**_):
    rows = await db.execute(...)
    if not rows:
        raise RuntimeError("no rows returned — upstream issue")
    return {"rows_affected": len(rows)}
```

```python
# Explicit StepFailed when you want a more specific error message
from liberty.jobs.steps.base import StepFailed

async def maybe_fail(**_):
    rows = await db.execute(...)
    if not rows:
        raise StepFailed("no rows returned — check the upstream job")
    return {"rows_affected": len(rows)}
```

Les deux aboutissent au même résultat (étape marquée en échec, politique de réessai appliquée). `StepFailed` est simplement plus explicite.

### Ce qu'il ne faut PAS intercepter

Ne pas intercepter `asyncio.CancelledError` ni `StepCancelled`. Le framework a besoin que ces exceptions se propagent pour que l'annulation fonctionne. Les intercepter — même pour journaliser puis relever — est un signal d'alerte : soit la relève n'est pas correcte (l'annulation meurt en silence), soit on ajoute de la complexité sans gain (le framework journalise déjà les étapes annulées).

---

## Logging — le logger lié à l'exécution

Utiliser un logger Python standard :

```python
import logging
_log = logging.getLogger(__name__)

async def my_function(*, ctx, **_):
    _log.info("starting · run_id=%s", ctx.run_id)
    ...
    _log.info("done · rows=%d · run_id=%s", rows, ctx.run_id)
```

La configuration de logging du framework étiquette automatiquement les enregistrements de log avec l'id d'exécution actif via un `ContextVar` posé par le runner. Inclure `ctx.run_id` dans le message reste utile — c'est redondant quand le format de log du framework affiche déjà l'id d'exécution, mais sans conséquence sinon.

La page Détail d'exécution lit la table de logs alimentée par ces messages — chaque ligne `INFO` / `WARNING` / `ERROR` pendant l'exécution de l'étape y apparaît.

---

## Un exemple complet et travaillé

```python
# plugins/reports/monthly.py
import logging
from datetime import date, timedelta

from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import RunContext, StepFailed

_log = logging.getLogger(__name__)


async def generate_monthly_summary(
    *,
    connectors: ConnectorRegistry,
    ctx: RunContext,
    apps_id: int,
    target_table: str = "monthly_summary",
    **_,
) -> dict:
    """Aggregate last month's invoices into the monthly_summary table."""
    target = connectors.pools.engine("reporting")
    last_month_start = date.today().replace(day=1) - timedelta(days=1)
    period = last_month_start.strftime("%Y-%m")

    _log.info("generate monthly summary · period=%s · run_id=%s", period, ctx.run_id)

    async with target.begin() as conn:
        # 1. Delete any existing snapshot for this period
        result = await conn.execute(
            text(f"DELETE FROM {target_table} WHERE period = :period AND apps_id = :apps_id"),
            {"period": period, "apps_id": apps_id},
        )
        _log.info("deleted %d stale rows · run_id=%s", result.rowcount, ctx.run_id)

        # 2. Aggregate and insert
        result = await conn.execute(
            text(f"""
                INSERT INTO {target_table} (apps_id, period, revenue, invoice_count)
                SELECT :apps_id, :period, SUM(total), COUNT(*)
                FROM invoices
                WHERE apps_id = :apps_id
                  AND DATE_TRUNC('month', invoice_date) = :first_of_month
            """),
            {
                "apps_id": apps_id,
                "period": period,
                "first_of_month": last_month_start.replace(day=1),
            },
        )

        rows = result.rowcount or 0
        if rows == 0:
            raise StepFailed(f"no invoices to aggregate for {period} apps_id={apps_id}")

    _log.info("inserted %d summary row(s) · run_id=%s", rows, ctx.run_id)
    return {"rows_affected": rows, "period": period, "tenant": apps_id}
```

Référencé depuis `jobs.toml` :

```toml
[[jobs.steps]]
type = "python"
name = "monthly-summary"
callable = "reports.monthly:generate_monthly_summary"
op_kwargs = { apps_id = 10, target_table = "monthly_summary" }
```

La fonction :
- Déclare explicitement ses kwargs requis (`connectors`, `ctx`, `apps_id`).
- Utilise des valeurs par défaut pour les optionnels (`target_table`).
- Attrape le reste avec `**_` pour que les injections du framework ne déclenchent pas de `TypeError`.
- Retourne un petit dict structuré.
- Trace en INFO avec `ctx.run_id` pour faciliter le grep.
- Lève `StepFailed` explicitement quand la condition métier (pas de factures) n'est pas remplie.

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| La fonction déclare des arguments positionnels. | L'injection par nom échoue sur le conflit. | Utiliser `*,` pour forcer une signature en kwargs uniquement. |
| La fonction n'accepte pas `**` et rejette un kwarg injecté. | `TypeError: function got unexpected keyword argument 'connectors'`. | Soit nommer le kwarg explicitement, soit l'avaler avec `**_`. |
| Fonction synchrone en boucle serrée sans rendre la main. | ✕ Annuler ne l'arrête pas ; l'étape va jusqu'au bout. | Soit la passer en asynchrone avec des points de contrôle `await asyncio.sleep(0)`, soit la découper en plus petits morceaux. |
| Retourner un gros objet (une liste de 10 000 dicts). | L'historique d'exécution gonfle ; la page Détail d'exécution se charge lentement. | Retourner des agrégats, pas les données brutes. Enregistrer les données volumineuses dans une table, retourner le nombre de lignes + une clé. |
| Retourner une valeur non sérialisable en JSON. | Le framework n'arrive pas à l'enregistrer. | Convertir vers des types JSON-compatibles : timestamps ISO, listes / dicts de primitives. |
| Intercepter chaque exception et l'avaler. | L'étape réussit toujours ; les échecs deviennent invisibles. | Laisser les exceptions se propager, ou les relever après journalisation. |
| Modifier le fichier `.py` en attendant que la prochaine exécution prenne le changement. | Le changement n'est pas reflété. | Redémarrer le framework — le cache d'imports Python garde l'ancien code. |

---

## Et ensuite

- [Primitives ETL](./etl-primitives.md) — helpers prêts à l'emploi que le callable peut composer.
- [Déployer et déboguer](./deploy-and-debug.md) — disposition du dépôt des applications, shell de développement, logs.
- [Nomaflow → Étapes Python personnalisées](../../../nomaflow/custom-python.md) — vue opérateur du même callable.
