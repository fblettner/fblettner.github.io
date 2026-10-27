---
title: Récupération d'API
description: "Recette — récupérer chaque heure des enregistrements d'une API REST avec une étape Python et les écrire par une requête d'un connecteur, le jeton restant hors de la tâche."
keywords: [Nomaflow, recette, récupération d'API, REST, étape python, httpx, upsert, requête de connecteur, Liberty Next]
---

# Récupération d'API

Chaque heure, récupérer les dernières versions publiées d'un projet depuis une API REST et les enregistrer (ajout ou mise à jour) dans une table.

L'étape `http` appelle une URL et contrôle la réponse, mais ne transmet pas le corps à l'étape suivante : pour lire les données d'une API et les stocker, utiliser une étape `python` qui appelle l'API et écrit par une requête nommée d'un connecteur.

---

## Prérequis \{#needs\}

- Un connecteur SQL `reporting` avec une requête d'écriture `release_upsert` — pour PostgreSQL :

```sql title="release_upsert"
INSERT INTO releases (tag, name, published_at)
VALUES (:TAG, :NAME, :PUBLISHED_AT)
ON CONFLICT (tag) DO UPDATE SET name = EXCLUDED.name, published_at = EXCLUDED.published_at
```

- Le jeton d'API dans l'environnement du serveur : `GITHUB_TOKEN` (dans `release/.env` avec Docker, dans le fichier d'environnement du service pour une installation Python).

---

## La fonction \{#function\}

```python title="plugins/integrations/releases.py"
import logging
import os

import httpx
from liberty.connectors import ConnectorRegistry
from liberty.jobs.steps.base import StepResult

_log = logging.getLogger(__name__)


async def pull_releases(*, repo: str, target_connector: str, connectors: ConnectorRegistry) -> StepResult:
    headers = {"Authorization": f"Bearer {os.environ['GITHUB_TOKEN']}"}
    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.get(f"https://api.github.com/repos/{repo}/releases", headers=headers)
        resp.raise_for_status()
        releases = resp.json()

    target = connectors.sql(target_connector)
    for r in releases:
        await target.execute("release_upsert", {
            "TAG": r["tag_name"], "NAME": r["name"], "PUBLISHED_AT": r["published_at"],
        })
    _log.info("%d release(s) upserted", len(releases))
    return StepResult(rows_affected=len(releases))
```

Enregistrer une fois le paquet pour que ses lignes arrivent dans le journal de l'exécution : `register_namespace("integrations")` dans `plugins/integrations/__init__.py` — voir [Étapes Python personnalisées](../custom-python.md#logging).

---

## La tâche \{#job\}

```toml title="jobs.toml"
[[jobs]]
id = "pull-releases"
schedule = "15 * * * *"
timezone = "Europe/Paris"
tags = ["integration"]

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 30

[[jobs.steps]]
type = "python"
name = "pull-releases"
callable = "integrations.releases:pull_releases"
op_kwargs = { repo = "acme/platform", target_connector = "reporting" }
```

Une erreur levée par `raise_for_status()` fait échouer l'étape ; la politique de réessai retente après 30 s, puis 60 s.

---

## Variantes \{#variants\}

| Besoin | Modification |
|---|---|
| Résultats paginés | Boucler sur le lien de page suivante de l'API dans la fonction. |
| Un autre dépôt selon une autre planification | Un préréglage avec son propre `repo` et sa planification — voir [Préréglages planifiables](../jobs/schedules.md#schedulable-presets). |
| Seulement vérifier qu'un service répond | Une étape `http` sur son URL de santé suffit. |
