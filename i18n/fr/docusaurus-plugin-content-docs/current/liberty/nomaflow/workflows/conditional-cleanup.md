---
title: Nettoyage conditionnel
description: "Recette — une tâche de nettoyage quotidienne qui ne déclenche une purge destructive qu'au franchissement d'un seuil, avec une étape SQL Query pour le décompte et une étape Python protégée pour la suppression."
keywords: [Nomaflow, recette, nettoyage, conditionnel, seuil, purge, suppression conditionnelle, Liberty Framework]
---

# Recette — Nettoyage conditionnel

Certaines charges de travail ne devraient s'exécuter que s'il y a réellement quelque chose à faire. Une tâche de nettoyage qui purge d'anciennes lignes devient inutile — et risquée — si elle se déclenche sur une table déjà propre. Cette recette construit une tâche quotidienne qui :

1. **Compte** les lignes anciennes.
2. **Décide** s'il faut purger selon un seuil.
3. **Purge** uniquement quand le seuil est franchi.
4. **Consigne** ce qu'elle a fait (ou non) pour la piste d'audit.

La même structure s'applique à tout flux « agir seulement si une condition est remplie » — archiver quand l'espace disque est élevé, envoyer un récapitulatif uniquement quand il y a du contenu, reconstruire un cache uniquement s'il est obsolète.

---

## Ce que vous construisez

| Élément | Valeur |
|---|---|
| **Déclencheur** | Cron — tous les jours à 03 h 30 (juste après la synchronisation nocturne). |
| **Comportement** | Compter les lignes anciennes ; s'il y en a plus de 10 000, supprimer les plus anciennes par lots. Sous 10 000, journaliser et ignorer. |
| **Étapes** | 1 × `python` (compter + décider) + 1 × `python` (suppression protégée) + 1 × `sql_query` (enregistrement d'audit). |
| **Nouvelles tentatives** | Aucune (destructif — pas de nouvelle tentative sur défaillance transitoire, mieux vaut investiguer). |
| **Alertes** | En cas d'échec uniquement. |

---

## Prérequis

| Ce qu'il faut | Comment |
|---|---|
| Un connecteur avec une table modifiable à nettoyer. | Le pool `default` du framework convient. |
| Une table cible avec une colonne d'horodatage (`created_at` ou similaire). | La plupart des tables opérationnelles en possèdent une. |
| Une table `cleanup_audit` pour enregistrer les exécutions. | Voir le SQL ci-dessous. |

La table d'audit :

```sql
CREATE TABLE cleanup_audit (
    id              BIGSERIAL PRIMARY KEY,
    run_id          TEXT NOT NULL,
    table_name      TEXT NOT NULL,
    candidates      INT NOT NULL,
    deleted         INT NOT NULL,
    threshold       INT NOT NULL,
    decided_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    notes           TEXT
);
```

---

## Étape 1 — Créer la coque de la tâche

Cliquez sur **＋ Nouvelle tâche** dans la page Nomaflow.

| Champ | Valeur |
|---|---|
| Id | `daily-log-cleanup` |
| Description | *Purger les lignes `app_log` de plus de 30 jours, uniquement quand plus de 10 000 candidats existent.* |
| Tags | `cleanup`, `daily`, `audit` |
| Activée | ✓ |

Planification :

| Champ | Valeur |
|---|---|
| Cron | `30 3 * * *` |
| Fuseau horaire | `Europe/Paris` |

Paramètres partagés :

| Clé | Valeur |
|---|---|
| `target_connector` | `default` |
| `table_name` | `app_log` |
| `age_days` | `30` |
| `threshold` | `10000` |
| `batch_size` | `1000` |
| `dry_run` | `false` |

Définir `dry_run` comme paramètre partagé permet de le basculer sur `true` dans la fenêtre Exécuter avec paramètres pour une inspection sans risque, sans toucher à la tâche.

---

## Étape 2 — Compter les lignes anciennes (phase de décision)

Cliquez sur **＋ Ajouter une étape** → **Python**.

| Champ | Valeur |
|---|---|
| Nom | `count-old-rows` |
| Callable | `cleanup.daily:count_candidates` |
| Op kwargs | vide (tout vient des paramètres partagés) |
| Timeout | `300` |

La fonction Python :

```python
# plugins/cleanup/daily.py
from datetime import datetime, timedelta, timezone
from liberty.jobs.types import StepContext

async def count_candidates(
    ctx: StepContext,
    *,
    target_connector: str,
    table_name: str,
    age_days: int,
    threshold: int,
    **_,
) -> dict:
    """Count rows older than `age_days`. Decide whether to purge."""
    cutoff = datetime.now(timezone.utc) - timedelta(days=age_days)
    target = ctx.get_connector(target_connector)
    candidates = await target.scalar(
        f"SELECT count(*) FROM {table_name} WHERE created_at < :cutoff",
        params={"cutoff": cutoff},
    )
    should_purge = candidates >= threshold
    ctx.log.info(
        f"{candidates} rows older than {age_days} days "
        f"(threshold={threshold}, should_purge={should_purge})"
    )
    return {
        "candidates": candidates,
        "threshold": threshold,
        "should_purge": should_purge,
        "cutoff": cutoff.isoformat(),
    }
```

La valeur de retour de l'étape atterrit dans sa sortie dans l'historique d'exécution. L'étape suivante lit `should_purge` et en déduit son action.

---

## Étape 3 — Suppression conditionnelle (phase d'action)

Cliquez sur **＋ Ajouter une étape** → **Python**.

| Champ | Valeur |
|---|---|
| Nom | `purge-old-rows` |
| Callable | `cleanup.daily:purge_if_needed` |
| Op kwargs | vide |
| Timeout | `1800` (30 minutes — généreux pour de grosses suppressions) |

La fonction Python :

```python
async def purge_if_needed(
    ctx: StepContext,
    *,
    target_connector: str,
    table_name: str,
    batch_size: int,
    dry_run: bool,
    **_,
) -> dict:
    """Read the count step's decision; purge in batches if it said so."""
    decision = ctx.previous_step("count-old-rows").output
    if not decision["should_purge"]:
        ctx.log.info(
            f"Skipping purge — {decision['candidates']} candidates "
            f"< threshold {decision['threshold']}"
        )
        return {"deleted": 0, "skipped": True, "reason": "below_threshold"}

    if dry_run:
        ctx.log.warning(
            f"DRY RUN — would delete {decision['candidates']} rows "
            f"from {table_name} (cutoff={decision['cutoff']})"
        )
        return {"deleted": 0, "skipped": True, "reason": "dry_run", "candidates": decision["candidates"]}

    target = ctx.get_connector(target_connector)
    deleted_total = 0
    while True:
        if ctx.is_cancelled():
            ctx.log.warning(f"cancelled after {deleted_total} rows")
            raise asyncio.CancelledError()
        result = await target.execute(
            f"""
            DELETE FROM {table_name}
            WHERE id IN (
                SELECT id FROM {table_name}
                WHERE created_at < :cutoff
                LIMIT :batch
            )
            """,
            params={"cutoff": decision["cutoff"], "batch": batch_size},
        )
        batch_deleted = result.rowcount
        if batch_deleted == 0:
            break
        deleted_total += batch_deleted
        ctx.log.info(f"▶ batch deleted {batch_deleted} · total {deleted_total}")

    return {"deleted": deleted_total, "skipped": False}
```

Trois points méritent attention :

| Motif | Pourquoi |
|---|---|
| Lecture de la décision de l'étape précédente. | Les deux étapes partagent un contexte — l'étape de décision rassemble les faits, l'étape d'action les exploite. |
| Court-circuit `dry_run`. | Un garde-fou — les opérateurs basculent le kwarg et voient ce qui *se passerait* sans changement. |
| Suppression par lots avec vérification d'annulation. | Les suppressions longues peuvent être interrompues proprement. La forme `LIMIT … batch` maintient chaque transaction de petite taille. |

---

## Étape 4 — Enregistrement d'audit

Cliquez sur **＋ Ajouter une étape** → **SQL Query**.

| Champ | Valeur |
|---|---|
| Nom | `write-audit` |
| Connecteur | `${kw:target_connector}` |
| Requête | (voir ci-dessous) |
| Timeout | `30` |

L'exécuteur met les sorties des étapes précédentes à disposition sous forme de paramètres SQL. La requête consigne ce qui s'est passé :

```sql
INSERT INTO cleanup_audit (
    run_id, table_name, candidates, deleted, threshold, notes
)
VALUES (
    :run_id,
    :table_name,
    :candidates,
    :deleted,
    :threshold,
    :notes
);
```

Câblez les paramètres depuis les sorties des étapes précédentes (l'éditeur les propose sous forme de substitutions `${out:step-name.field}`) :

| Paramètre | Source |
|---|---|
| `:run_id` | `${ctx:run_id}` |
| `:table_name` | `${kw:table_name}` |
| `:candidates` | `${out:count-old-rows.candidates}` |
| `:deleted` | `${out:purge-old-rows.deleted}` |
| `:threshold` | `${kw:threshold}` |
| `:notes` | `${out:purge-old-rows.reason}` |

La ligne d'audit est la réponse de long terme à « que s'est-il passé le jour X ? » — les lignes d'exécution elles-mêmes sont purgées au bout de 90 jours, mais `cleanup_audit` persiste.

---

## Étape 5 — Alertes

Dans le bloc **Alerts** :

| Champ | Valeur |
|---|---|
| En cas d'échec | ✓ |
| Sur exécution longue (minutes) | `30` |
| Destinataires | vide |

Pas de nouvelle tentative — les étapes destructives doivent échouer haut et fort et laisser un humain investiguer.

Enregistrez la tâche.

---

## Étape 6 — Test rapide en mode dry-run

Avant de lâcher la tâche en production, lancez un dry-run :

1. Cliquez sur **▶ Lancer maintenant**.
2. La fenêtre Exécuter avec paramètres s'ouvre.
3. Basculez `dry_run` de `false` à `true`.
4. Validez.

La page Détail d'exécution devrait afficher :

```
✓ count-old-rows   ·  120 ms · candidates: 12 345 · should_purge: true
✓ purge-old-rows   ·   45 ms · DRY RUN — would delete 12 345 rows · skipped
✓ write-audit      ·   12 ms · 1 row affected
```

Inspectez le décompte — correspond-il à l'attendu ? Inspectez la ligne `cleanup_audit` — consigne-t-elle bien le dry-run ?

Une fois la vérification satisfaisante, relancez avec `dry_run = false`. La purge s'exécute pour de bon.

---

## Ce que vous avez construit

```
JOB daily-log-cleanup
├── schedule: "30 3 * * *" (Europe/Paris)
├── params: { target_connector: default, table_name: app_log,
│             age_days: 30, threshold: 10000,
│             batch_size: 1000, dry_run: false }
├── alerts: { on_failure: true, on_long_run_minutes: 30 }
└── steps:
    1. count-old-rows   (python · decide)
    2. purge-old-rows   (python · act, guarded by step 1's output and by dry_run)
    3. write-audit      (sql_query · long-term audit record)
```

Chaque nuit à 03 h 30, la tâche :

- Compte les lignes anciennes.
- N'agit que si leur volume le justifie.
- Honore un drapeau `dry_run` qui permet aux opérateurs d'inspecter sans risque.
- Consigne chaque décision (y compris les « rien fait ») dans `cleanup_audit`.

---

## Adapter à votre cas

### Conditions différentes

L'étape de « décision » est la pièce variable. Quelques formes courantes :

| Décision | Étape de décision |
|---|---|
| **Usage disque > 80 %** | Lire `pg_database_size()` ou les statistiques du système de fichiers, comparer au seuil. |
| **Plus de N tâches en attente** | `SELECT count(*) FROM tasks WHERE status = 'pending'`. |
| **Dernière synchronisation de plus de N heures** | `SELECT now() - max(last_sync) FROM sync_state`. |
| **Le flux source a de nouveaux éléments** | Comparer le décompte source du jour à celui de la veille. |
| **Gardien calendaire** (hebdomadaire / mensuel) | `if date.today().weekday() != 0: return {"should_run": False}`. |

Le motif : **l'étape de décision rassemble les faits, l'étape d'action s'y appuie pour brancher**. La forme à deux étapes reste la même.

### Plusieurs branches d'action

Pour les flux « si condition A, faire X ; si condition B, faire Y », ajoutez une troisième étape :

```
1. decide        — return { case: 'A' | 'B' | 'noop' }
2. handle-A      — runs only if case == 'A' (uses step.enabled flip in Python)
3. handle-B      — runs only if case == 'B'
4. audit         — always
```

Utilisez le drapeau `enabled` de l'étape Python dynamiquement : quand la sortie de l'étape précédente indique « case A », l'étape handle-B se court-circuite avec `return {"skipped": "case=A"}`. La chronologie affiche toutes les étapes ; une seule a réellement travaillé.

### Nettoyage par tenant

Pour des installations multi-tenant, externalisez l'identifiant de tenant en paramètre partagé :

```
[params]
tenant_id = 1
```

Les opérateurs exécutent la même tâche N fois avec différentes valeurs de `tenant_id` (via la fenêtre Exécuter avec paramètres). Chaque déclenchement écrit dans `cleanup_audit` avec sa propre ligne — piste d'audit parfaite pour « a-t-on bien nettoyé les logs du tenant 7 le mois dernier ? ».

### Tâches destructives sensibles

Pour les tâches destructives à réserver à un déclenchement **manuel uniquement** plutôt que planifié :

- Videz l'expression cron. La tâche figure dans le catalogue, reste ▶-déclenchable, mais ne s'auto-déclenche jamais.
- Mettez `dry_run = true` par défaut dans les paramètres partagés. Les opérateurs doivent consciemment le basculer sur `false` pour supprimer réellement.
- Désactivez l'étape par défaut dans l'éditeur. Les opérateurs l'activent par déclenchement dans la fenêtre.

La combinaison (« le planificateur ne peut pas la déclencher, la valeur par défaut est sûre, chaque exécution est un acte humain délibéré ») représente la configuration sûre par défaut pour les tâches irréversibles.

---

## Pièges fréquents

| Erreur | Symptôme | Correctif |
|---|---|---|
| Un seul gros DELETE. | La transaction retient des verrous pendant des minutes ; les lectures concurrentes sont bloquées. | Lotissez la suppression avec `LIMIT`. |
| Pas de vérification d'annulation dans la boucle. | ✕ Annuler n'arrête pas la purge. | `if ctx.is_cancelled(): raise asyncio.CancelledError()` entre les lots. |
| Nouvelle tentative sur une étape destructive. | Une suppression partielle est rejouée et pourrait supprimer plus que prévu. | Pas de nouvelle tentative sur une étape destructive. |
| Pas d'enregistrement d'audit. | Trois semaines plus tard, personne ne peut répondre à « le nettoyage a-t-il eu lieu le 7 ? ». | Toujours écrire dans une table d'audit pérenne. |
| Seuil trop bas. | Chaque déclenchement purge, ce qui contredit l'intention « n'agir que si nécessaire ». | Choisissez un seuil ajusté à votre volume de données. |

---

## Pour la suite

- [Recette — Synchronisation planifiée de base](./scheduled-sync.md) — motif de rafraîchissement inconditionnel.
- [Recette — Récupération horaire d'API](./api-pull.md) — http + python + sql_query.
- [Étapes Python personnalisées](../custom-python.md) — écrire les callables de décision + d'action.
- [Étapes → Python](../steps.md#python--python) — la référence complète de l'étape Python.
