---
title: Étapes Python personnalisées
description: "Écrire votre propre callable Python pour une étape Nomaflow — signature de la fonction, objet StepContext, accès aux connecteurs, journalisation dans l'exécution, gestion de l'annulation, retour structuré."
keywords: [Nomaflow, python personnalisé, callable, StepContext, plugin, annulation, valeur de retour, Liberty Framework]
---

# Étapes Python personnalisées

L'étape Python représente la voie d'extension de Nomaflow. Quand une charge de travail ne tient pas dans `sql_query`, `sql_copy`, `http` ou `ldap_sync`, on bascule en Python — la fonction reçoit le même contexte qu'une étape native, s'exécute dans le même exécuteur asynchrone et place sa sortie dans le même historique d'exécution.

Cette page détaille la **signature de la fonction**, l'objet **StepContext**, les motifs qui fonctionnent et les pièges courants.

Pour savoir *quand* recourir à une étape Python (plutôt qu'à une étape déclarative), voir [Étapes → Python](./steps.md#python--python).

---

## Emplacement du code

Les étapes Python résident dans votre répertoire **plugins**. Une arborescence typique :

```
plugins/
└── reports/
    ├── __init__.py
    ├── summary.py        ← contient generate_monthly()
    └── housekeeping.py   ← contient prune_attachments()
```

Le répertoire plugins est ajouté au `PYTHONPATH` du framework au démarrage ; les modules sont importés à la demande. Une étape référence une fonction via `module.path:function_name` :

| Étape de tâche | Résout vers |
|---|---|
| `reports.summary:generate_monthly` | `plugins/reports/summary.py` → `generate_monthly(...)` |
| `housekeeping:prune_attachments` | `plugins/housekeeping/__init__.py` → `prune_attachments(...)` ou `plugins/housekeeping.py` |

Après ajout ou modification d'un fichier de plugin, le framework le prend en compte automatiquement à l'exécution suivante — aucun redémarrage requis. Si une fonction est introuvable à l'exécution, l'étape échoue avec `ImportError`.

---

## La signature de la fonction

Une fonction d'étape Python ressemble à ceci :

```python
from liberty.jobs.types import StepContext

async def generate_monthly(
    ctx: StepContext,
    *,
    period: str,
    target_path: str,
    **_,
) -> dict:
    """Generate the monthly summary PDF.

    The function's return value is recorded as the step's `output`
    in the run history. Keep it small and structured.
    """
    # ... real work ...
    return {"path": target_path, "size_bytes": 12345}
```

| Élément | Description |
|---|---|
| **`async def`** | Obligatoire. L'exécuteur planifie la fonction sur la boucle d'événements asyncio. Les fonctions synchrones sont acceptées (l'exécuteur les enveloppe avec `to_thread`), mais **préférer async** pour que l'annulation se propage proprement. |
| **`ctx: StepContext`** | Premier argument positionnel. L'exécuteur le construit et le transmet. |
| **`*,`** | Force chaque kwarg à être **nommé** — évite les bugs silencieux d'ordre quand la fenêtre modale transmet des surcharges. |
| **`period`, `target_path`** | Vos kwargs personnalisés. Ils proviennent de la fusion : `params` de la tâche + `op_kwargs` de l'étape + surcharges par exécution depuis la fenêtre modale Exécuter avec paramètres. |
| **`**_`** | Réceptacle pour les kwargs que le framework ou de futures surcharges ajoutent. À conserver — sinon un kwarg inconnu déclenche `TypeError`. |
| **`-> dict`** | La valeur de retour atterrit dans l'`output` de l'étape dans l'historique d'exécution. Renvoyer un petit dict structuré. |

---

## Le StepContext

`ctx` met à disposition les facilités d'exécution dont votre fonction a besoin. Surface complète :

| Membre | Ce qu'il fournit |
|---|---|
| **`ctx.get_connector(name)`** | Renvoie le connecteur SQL / API par nom. Asynchrone ; utiliser `await` sur ses méthodes. |
| **`ctx.log.info(msg)`** / `warning` / `error` | Achemine une ligne de log vers le flux de journalisation de l'exécution. **Utiliser ces méthodes, et non `print`.** |
| **`ctx.params`** | Les kwargs entièrement fusionnés sous forme de snapshot dict. Même contenu que les kwargs nommés de la fonction. |
| **`ctx.session_user`** | Nom du compte de l'utilisateur ayant déclenché l'exécution (ou `cron` / `api` / `cli` pour les déclencheurs non utilisateurs). Utile pour les écritures d'audit. |
| **`ctx.run_id`** | L'identifiant de l'exécution courante. Utile dans les lignes d'audit. |
| **`ctx.job_id`** | L'identifiant de la tâche courante. |
| **`ctx.is_cancelled()`** | Renvoie `True` si l'opérateur a cliqué sur ✕ Annuler. À vérifier périodiquement dans les boucles longues. |
| **`ctx.previous_step(name)`** | L'enregistrement de l'étape précédente — `.output` et `.status` sont les champs les plus utiles. |
| **`ctx.log_level`** | `"INFO"` ou `"DEBUG"` pour cette exécution. Brancher dessus pour une journalisation verbeuse conditionnelle. |

### Journalisation

```python
ctx.log.info("starting batch")
ctx.log.info(f"▶ batch {i} of {n}")
ctx.log.warning(f"missing field on row {row_id} — skipping")
ctx.log.error(f"upstream returned 500 — retry policy will decide")
```

| Convention | Justification |
|---|---|
| Utiliser `▶` pour marquer les jalons de progression. | Lecture claire dans le journal d'exécution. |
| Un `log.info` par *jalon*, pas par ligne. | Un million de lignes de log par exécution est illisible et lent à afficher. |
| Journaliser les compteurs de lignes : `"upserted 4321 rows"`. | Le nombre est la réponse d'audit. |
| `log.warning` pour les données ignorées ; `log.error` uniquement en cas de re-levée. | Le niveau sert de filtre de recherche sur la page Exécutions. |

### Lecture d'un connecteur

```python
async def refresh_view(ctx: StepContext, *, target_connector: str, **_) -> dict:
    target = ctx.get_connector(target_connector)
    # Single SQL statement.
    await target.execute("REFRESH MATERIALIZED VIEW reporting.daily_summary")
    # Scalar.
    count = await target.scalar("SELECT count(*) FROM reporting.daily_summary")
    ctx.log.info(f"refreshed view · {count} rows")
    return {"rows_after_refresh": count}
```

Les connecteurs sont les mêmes objets que ceux utilisés par les écrans et l'assistant IA — déclarés une seule fois, identifiants chiffrés, pool partagé.

### Lecture de la sortie d'une étape précédente

```python
async def upsert_releases(ctx: StepContext, **_) -> dict:
    http_step = ctx.previous_step("fetch-releases")
    if http_step.status != "SUCCEEDED":
        raise RuntimeError("upstream step failed — refusing to upsert")
    payload = http_step.output["body"]  # decoded JSON
    # ... upsert ...
```

Utiliser la sortie de l'étape précédente pour enchaîner les phases d'un workflow — la [recette Récupération API horaire](./workflows/api-pull.md) repose sur ce motif.

---

## Annulation

Le bouton ✕ Annuler envoie un signal d'annulation à l'étape en cours. Le code Python **coopératif** l'honore ; le code Python non coopératif, non.

### Le motif adapté à l'asynchrone

```python
import asyncio

async def long_loop(ctx: StepContext, *, items: list, **_) -> dict:
    processed = 0
    for i, item in enumerate(items):
        # Yield to the event loop every 100 items so cancellation lands.
        if i % 100 == 0:
            await asyncio.sleep(0)
            if ctx.is_cancelled():
                ctx.log.warning(f"cancelled at item {i}/{len(items)}")
                raise asyncio.CancelledError()
        await process_one(item)
        processed += 1
    return {"processed": processed}
```

| Motif | Justification |
|---|---|
| `await asyncio.sleep(0)` périodique. | Rend la main à la boucle d'événements. Sans cela, votre fonction monopolise la boucle et ✕ Annuler ne peut pas aboutir. |
| Vérification `ctx.is_cancelled()`. | Renvoie `True` dès l'arrivée du signal d'annulation. Lever `CancelledError` pour faire remonter. |
| Journaliser la raison de l'annulation. | Les opérateurs relisant l'exécution plus tard doivent savoir *où* vous vous êtes arrêté. |

### Travail intensif en CPU

Pour un travail CPU réellement synchrone (génération PDF, traitement d'image, numpy lourd) :

```python
async def render_pdf(ctx: StepContext, *, data: dict, **_) -> dict:
    # Offload to a thread so the event loop stays free.
    pdf_bytes = await asyncio.to_thread(blocking_pdf_render, data)
    return {"bytes": len(pdf_bytes)}
```

`to_thread` exécute la fonction bloquante dans le pool de threads de l'exécuteur. La boucle d'événements reste réactive ; l'interface du framework reste vivante pendant le rendu.

---

## Retourner une sortie structurée

Une étape qui renvoie `None` est une boîte noire. La page de détail d'exécution affiche « aucune sortie » et les opérateurs relisant l'historique trois semaines plus tard ne peuvent pas dire *ce qui s'est passé*.

Toujours renvoyer un petit dict :

| Motif | Exemple |
|---|---|
| Compteurs. | `{"rows_affected": 4321}` |
| Compteurs par table. | `{"customers": 1234, "orders": 5678}` |
| Statut + raison. | `{"status": "skipped", "reason": "threshold not crossed"}` |
| Identifiants des objets créés. | `{"report_id": 42, "path": "/exports/report-42.pdf"}` |

Ce qu'il ne faut **pas** renvoyer :

| À éviter | Justification |
|---|---|
| L'ensemble complet de résultats (une liste de 10 000 lignes). | Surcharge l'historique d'exécution, difficile à afficher. Agréger en nombres. |
| Objets picklés / non sérialisables. | La sortie est sérialisée en JSON ; les types complexes échouent au moment de l'enregistrement. |
| Données sensibles (PII, jetons). | L'historique d'exécution est visible par toute personne disposant de `job:*`. Masquer avant de renvoyer. |

---

## Lever une exception en cas d'échec

Quand quelque chose ne va pas, **lever** :

```python
if response.status_code != 200:
    raise RuntimeError(
        f"upstream returned {response.status_code} — body: {response.text[:200]}"
    )
```

L'exécuteur intercepte l'exception, marque l'étape comme `FAILED`, enregistre la trace et consulte la politique de nouvelle tentative. **Ne pas** intercepter et avaler les exceptions — l'exécuteur en a besoin pour piloter le flux d'échec.

Types d'exceptions courants et ce qu'ils signalent :

| Exception | Signal |
|---|---|
| `RuntimeError` | Échec générique ; le message est le diagnostic. |
| `ValueError` | Une entrée était incorrecte (un kwarg, un champ parsé). |
| `LookupError` / `KeyError` | Un champ supposé exister est absent. |
| Exceptions spécifiques au connecteur (`OperationalError`, `IntegrityError`) | À laisser remonter naturellement — sans enveloppe. |

---

## Étapes de longue durée

Pour des étapes qui dépassent quelques minutes :

| Motif | Justification |
|---|---|
| Augmenter `timeout_seconds` sur l'étape. | La valeur par défaut d'1 h convient à la plupart ; un ETL de 6 h nécessite une valeur plus longue explicite. |
| Émettre des logs de progression toutes les 30 s. | L'opérateur qui surveille le journal en direct a besoin de signes de vie. |
| Vérifier `ctx.is_cancelled()` à chaque point de contrôle. | Une étape longue qui ignore l'annulation devient un problème à 03 h 00. |
| Ne pas combattre `KeyboardInterrupt`. | Débogage local — laisser Ctrl-C fonctionner. |

Un battement de cœur typique :

```python
async def big_etl(ctx: StepContext, **_) -> dict:
    total_rows = 1_000_000
    processed = 0
    last_log = 0
    while processed < total_rows:
        # ... do a batch ...
        processed += batch_size
        if processed - last_log >= 50_000:  # every 50k rows
            ctx.log.info(f"▶ {processed} / {total_rows} ({processed/total_rows:.0%})")
            last_log = processed
        if ctx.is_cancelled():
            raise asyncio.CancelledError()
    return {"rows": processed}
```

---

## Tester votre fonction

La fonction est du Python ordinaire — la tester comme n'importe quelle autre fonction asynchrone :

```python
# tests/test_reports_summary.py
import pytest
from reports.summary import generate_monthly

@pytest.mark.asyncio
async def test_generate_monthly(fake_ctx):
    result = await generate_monthly(fake_ctx, period="2026-04", target_path="/tmp/out.pdf")
    assert result["size_bytes"] > 0
    assert (fake_ctx.log.calls[-1] == "INFO", "wrote 2026-04 summary")
```

Un petit **StepContext factice** avec un `get_connector` simulé et une capture de log en mémoire suffit pour la plupart des tests. Les helpers de test du framework proposent `build_fake_ctx(...)` à cet effet.

---

## Réutilisation des fonctions entre tâches

Une étape Python bien conçue est une fonction normale — mêmes imports au niveau du module, même docstring, même testabilité. Partagez les helpers entre tâches en les plaçant dans des modules communs :

```python
# plugins/utils/connectors.py
async def assert_row_count(target, sql: str, *, min_rows: int):
    n = await target.scalar(sql)
    if n < min_rows:
        raise RuntimeError(f"row count {n} below floor {min_rows}")
    return n
```

```python
# plugins/reports/summary.py
from utils.connectors import assert_row_count

async def generate_monthly(ctx, *, period, **_):
    target = ctx.get_connector("reporting")
    rows = await assert_row_count(target, "SELECT count(*) FROM orders", min_rows=100)
    # ...
```

Refactoriser comme du code applicatif normal — le framework s'en désintéresse.

---

## Pièges courants

| Piège | Symptôme | Correction |
|---|---|---|
| Définir la fonction avec `def`, pas `async def`. | L'étape s'exécute mais la boucle d'événements est bloquée ; l'interface se fige. | Utiliser `async def`. |
| Intercepter toutes les exceptions. | Des étapes qui « réussissent toujours » mais produisent de mauvais résultats. | Laisser les exceptions remonter sauf si vous savez les traiter. |
| `print(...)` au lieu de `ctx.log.info(...)`. | La sortie part vers la stdout du framework, pas vers le journal d'exécution. | Toujours utiliser `ctx.log`. |
| Charger l'ensemble complet de résultats en mémoire. | Pression mémoire, exécution lente. | Utiliser le streaming — `async for row in target.stream(sql)` si votre connecteur le prend en charge. |
| Renvoyer un gros objet. | L'historique d'exécution se surcharge, l'enregistrement échoue. | Renvoyer des agrégats, pas des données brutes. |
| Identifiants codés en dur. | Secret dans le contrôle de source. | Utiliser des connecteurs ; ne jamais placer d'identifiants dans une étape Python. |

---

## Pour aller plus loin

- [Étapes → Python](./steps.md#python--python) — les champs d'éditeur du type d'étape.
- [Recette — Récupération API horaire](./workflows/api-pull.md) — une étape Python qui lit la sortie de l'étape HTTP précédente.
- [Recette — Nettoyage conditionnel](./workflows/conditional-cleanup.md) — un motif décider/agir sur deux étapes Python.
- [Applications & Plugins → Plugins](../framework/apps/plugins.md) — organisation plus large des plugins dans le framework.
- [Dépannage](./runs/troubleshoot.md) — diagnostiquer une étape Python en échec.
