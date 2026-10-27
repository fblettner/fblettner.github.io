---
title: Étapes Python personnalisées
description: "Écrire une fonction Python pour une étape python de Nomaflow : son emplacement, ce qu'elle reçoit (ses arguments, les connecteurs, le contexte de l'exécution), ce qu'elle renvoie, comment elle écrit dans le journal de l'exécution, comment elle échoue et comment elle est annulée."
keywords: [Nomaflow, python personnalisé, callable, plugin, op_kwargs, connectors, RunContext, StepResult, register_namespace, Liberty Next]
---

# Étapes Python personnalisées

Quand aucun autre type d'étape ne convient, une étape `python` appelle une fonction écrite pour l'occasion. La fonction se trouve dans un plugin du dossier des applications, reçoit ses arguments de la tâche, et son résultat s'inscrit dans l'exécution comme celui de toute autre étape.

Cette page est la version courte, pour les auteurs de tâches. La référence complète — arguments injectés, valeurs de retour, annulation, exemple détaillé — se trouve dans [Écrire un callable](../framework/build/plugins/write-a-callable.md), et le déploiement dans [Déployer et déboguer](../framework/build/plugins/deploy-and-debug.md).

---

## Emplacement de la fonction \{#where\}

Un plugin est un paquet Python du dossier `plugins/`, à côté du dossier de configuration (`LIBERTY_APPS_DIR/../plugins`). L'étape désigne la fonction sous la forme `paquet.module:fonction` :

```toml title="jobs.toml"
[[jobs.steps]]
type = "python"
name = "refresh-summary"
callable = "reports.summary:refresh"
op_kwargs = { period = "2026-10", target_connector = "reporting" }
```

Les modules ne sont importés qu'une fois : après une modification du code, redémarrer le serveur (`./liberty restart` ou `liberty-ops restart`).

---

## Ce que reçoit la fonction \{#arguments\}

```python title="plugins/reports/summary.py"
import logging
from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import RunContext, StepResult

_log = logging.getLogger(__name__)


async def refresh(*, period: str, target_connector: str,
                  connectors: ConnectorRegistry, ctx: RunContext) -> StepResult:
    _log.info("refresh %s · run %s", period, ctx.run_id)
    conn = connectors.sql(target_connector)          # connectors.api(...) pour un connecteur API
    await conn.execute("summary_refresh_put", {"PERIOD": period})   # une requête nommée du connecteur
    ...
    return StepResult(rows_affected=count, extras={"period": period})
```

| Argument | Provenance |
|---|---|
| Ses propres arguments (`period`, `target_connector`) | Les paramètres partagés de la tâche, puis les `op_kwargs` de l'étape (l'étape l'emporte), puis les valeurs saisies dans **Run with parameters**. Les valeurs sont converties au type annoté (`apps_id: int`). |
| `connectors` | Le registre des connecteurs — pour lancer les requêtes nommées ou les endpoints d'un connecteur. Fourni seulement si la fonction le déclare. |
| `ctx` | L'exécution : `ctx.run_id`, `ctx.job_id`, `ctx.trigger`, `ctx.prev_rows_affected` (lignes de l'étape précédente). Fourni seulement s'il est déclaré. |
| `settings` | Les paramètres du serveur. Fourni seulement s'il est déclaré. |

La fonction peut être `async` (recommandé) ou un simple `def`, exécuté dans un thread de travail.

---

## Ce qu'elle renvoie \{#return\}

| Retour | Dans l'exécution |
|---|---|
| `None` | Rien de plus. |
| un `int` | Le nombre de lignes modifiées. |
| un `dict` | Conservé comme détail de l'étape (non compté comme lignes). |
| un `StepResult(rows_affected=…, extras={…})` | Les deux. |

Tout autre type — un `bool` par exemple — fait échouer l'étape, pour qu'une erreur ne passe pas pour un succès.

---

## Écrire dans le journal de l'exécution \{#logging\}

Le journal de l'exécution conserve les lignes des loggers `liberty.*` et des espaces de noms enregistrés par un plugin. Enregistrer le paquet une fois, dans `plugins/reports/__init__.py` :

```python
from liberty.jobs.runlog import register_namespace
register_namespace("reports")
```

Ensuite, `logging.getLogger(__name__)` dans n'importe quel module du paquet écrit dans le journal de l'exécution, contrairement à `print()`. Le niveau de journal de l'exécution (**Run with parameters** → niveau de journal) s'applique.

---

## Échec et annulation \{#errors\}

- Laisser passer les exceptions : l'étape échoue avec le message, la **Politique de réessai** de la tâche s'applique, les étapes suivantes sont sautées. Lever `StepFailed("…")` (de `liberty.jobs.steps.base`) donne un message plus clair.
- **Annuler** sur la carte de la tâche annule une fonction `async` à son prochain `await`. Un simple `def` ne peut pas être interrompu : l'exécution est marquée annulée, la fonction se termine d'elle-même.

---

## Conseils \{#tips\}

- Placer le SQL dans les requêtes nommées du connecteur et les appeler depuis la fonction : la requête reste visible et testable dans la page du connecteur.
- Garder les fonctions courtes ; découper un long traitement en plusieurs étapes pour que le détail de l'exécution montre où il s'est arrêté.
- Tester la fonction comme tout code Python, avec un registre branché sur une base de test.
