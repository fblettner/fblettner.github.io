---
title: Récupération horaire d'API
description: "Recette — interroger une API REST tierce toutes les heures, transformer la charge utile JSON dans une étape Python, écrire les lignes dans une cible SQL avec nouvelle tentative et upsert sans doublon."
keywords: [Nomaflow, recette, récupération API, REST, étape http, étape python, transformation, horaire, Liberty Framework]
---

# Recette — Récupération horaire d'API

Toutes les heures, appeler une API REST tierce, transformer la charge utile JSON, écrire les lignes dans une cible SQL. Le motif derrière n'importe quelle charge de travail « récupérer depuis Stripe / GitHub / Salesforce / votre propre microservice ».

Cette recette combine les étapes **http**, **python** et **sql_query** — et montre le rôle de chacune.

---

## Ce que vous construisez

| Élément | Valeur |
|---|---|
| **Déclencheur** | Cron — toutes les heures à la minute :15. |
| **Source** | Une API REST tierce qui renvoie du JSON. |
| **Cible** | Une table SQL avec une clé d'upsert (rejouer une heure ne crée pas de doublon). |
| **Étapes** | 1 × `http` (récupération) + 1 × `python` (transformation + upsert) + 1 × `sql_query` (marquage de l'horodatage de synchronisation). |
| **Nouvelles tentatives** | 3 essais sur l'étape HTTP, backoff exponentiel (limitations de débit + 5xx transitoires). |
| **Alertes** | Slack en cas d'échec ; avertissement au bout de 10 minutes. |

L'exemple récupère un flux de releases GitHub et les upserte dans une table `releases`. La même structure s'applique à n'importe quel flux d'API paginé et borné dans le temps.

---

## Prérequis

| Ce qu'il faut | Comment |
|---|---|
| Un connecteur vers la **base SQL cible**. | Le pool `default` du framework convient pour une première exécution. |
| Le **bearer token** de l'API dans le fichier d'environnement du framework sous `GITHUB_TOKEN`. | Le framework recharge l'environnement à l'enregistrement. |
| Une table cible créée au préalable. | Voir le SQL ci-dessous. |

La table cible :

```sql
CREATE TABLE releases (
    id            BIGINT PRIMARY KEY,
    repo          TEXT NOT NULL,
    tag           TEXT NOT NULL,
    name          TEXT,
    published_at  TIMESTAMPTZ NOT NULL,
    body          TEXT,
    synced_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE sync_state (
    name        TEXT PRIMARY KEY,
    last_sync   TIMESTAMPTZ
);
```

`sync_state` est une petite table de comptabilité — une ligne par flux de données, qui enregistre la dernière récupération réussie.

---

## Étape 1 — Créer la coque de la tâche

Sur la page Nomaflow, cliquez sur **＋ Nouvelle tâche**.

| Champ | Valeur |
|---|---|
| Id | `github-releases-hourly` |
| Description | *Récupération horaire des releases GitHub dans la table `releases`.* |
| Tags | `api-pull`, `hourly`, `github` |
| Activée | ✓ |

Planification :

| Champ | Valeur |
|---|---|
| Cron | `15 * * * *` |
| Fuseau horaire | `UTC` (l'API utilise des horodatages UTC ; les aligner évite les surprises) |

Le décalage `:15` évite la cohue des tâches qui se déclenchent pile à l'heure partout ailleurs dans l'organisation.

---

## Étape 2 — Paramètres partagés

Dans le bloc **Shared params** :

| Clé | Valeur | Pourquoi |
|---|---|---|
| `repo` | `fblettner/fblettner.github.io` | Le dépôt à récupérer. |
| `target_connector` | `default` | La cible de l'upsert. |

Ces paramètres sont fusionnés dans les `op_kwargs` de chaque étape Python à l'exécution — et peuvent être remplacés par déclenchement dans la fenêtre Exécuter avec paramètres.

---

## Étape 3 — La récupération HTTP

Cliquez sur **＋ Ajouter une étape** → **HTTP**.

| Champ | Valeur |
|---|---|
| Nom | `fetch-releases` |
| URL | `https://api.github.com/repos/${kw:repo}/releases?per_page=30` |
| Méthode | `GET` |
| En-têtes | `Authorization: Bearer ${env:GITHUB_TOKEN}` |
|  | `Accept: application/vnd.github+json` |
|  | `X-GitHub-Api-Version: 2022-11-28` |
| Timeout | `60` |

`${kw:repo}` substitue le kwarg fusionné `repo` à l'exécution — un remplacement par déclenchement de `repo` se propage donc naturellement.

L'étape HTTP enregistre le corps de réponse dans sa sortie. L'étape suivante le lit.

---

## Étape 4 — Nouvelle tentative sur l'étape HTTP

Dans le bloc **Retry** de la tâche :

| Champ | Valeur |
|---|---|
| Essais | `3` |
| Backoff | `exponential` |
| Base seconds | `30` |

Attente de 30 s avant la première nouvelle tentative, 60 s avant la deuxième, 120 s avant la troisième. Cas pris en charge :

- **429 limitation de débit** côté GitHub.
- **502 / 503 transitoires** quand GitHub subit un incident.
- **Timeouts réseau** lors d'à-coups du chemin sortant du framework.

La politique de nouvelle tentative s'applique à toutes les étapes, mais seule l'étape HTTP en tire vraiment parti. L'étape Python et l'écriture de l'état de synchronisation sont déterministes — les rejouer ne change rien au résultat.

---

## Étape 5 — La transformation Python + upsert

Cliquez sur **＋ Ajouter une étape** → **Python**.

| Champ | Valeur |
|---|---|
| Nom | `upsert-releases` |
| Callable | `releases.sync:upsert_releases` |
| Op kwargs | vide (tout vient des paramètres partagés + de la sortie de l'étape précédente) |
| Timeout | `300` |

La fonction Python se trouve dans `plugins/releases/sync.py` :

```python
from datetime import datetime, timezone
from liberty.jobs.types import StepContext

async def upsert_releases(
    ctx: StepContext,
    *,
    target_connector: str,
    repo: str,
    **_,
) -> dict:
    """Read the previous step's HTTP body and upsert each release."""
    # Fetch the HTTP step's output from the run context.
    http_step = ctx.previous_step("fetch-releases")
    if http_step.output["status"] != 200:
        raise RuntimeError(
            f"GitHub returned status {http_step.output['status']}"
        )
    releases = http_step.output["body"]  # decoded JSON list

    target = ctx.get_connector(target_connector)
    inserted = 0
    updated = 0
    for r in releases:
        result = await target.execute(
            """
            INSERT INTO releases (id, repo, tag, name, published_at, body, synced_at)
            VALUES (:id, :repo, :tag, :name, :pub, :body, now())
            ON CONFLICT (id) DO UPDATE SET
                tag          = excluded.tag,
                name         = excluded.name,
                published_at = excluded.published_at,
                body         = excluded.body,
                synced_at    = now()
            RETURNING (xmax = 0) AS inserted
            """,
            params={
                "id": r["id"],
                "repo": repo,
                "tag": r["tag_name"],
                "name": r.get("name"),
                "pub": r["published_at"],
                "body": r.get("body"),
            },
        )
        if result.first()["inserted"]:
            inserted += 1
        else:
            updated += 1

    ctx.log.info(f"upserted {len(releases)} releases · {inserted} new · {updated} updated")
    return {"fetched": len(releases), "inserted": inserted, "updated": updated}
```

Trois points méritent attention :

| Motif | Pourquoi |
|---|---|
| `ctx.previous_step("fetch-releases").output` | Lecture de la sortie enregistrée de l'étape HTTP. Les étapes d'une même exécution partagent ainsi leur contexte. |
| `ON CONFLICT (id) DO UPDATE` | Upsert sans doublon : rejouer l'heure ne crée pas de doublons. |
| La valeur de retour | Atterrit dans la sortie de l'étape dans l'historique d'exécution. Les opérateurs qui lisent la chronologie voient « fetched: 30, inserted: 2, updated: 28 » au lieu de « succeeded ». |

---

## Étape 6 — Marquer l'horodatage de synchronisation

Cliquez sur **＋ Ajouter une étape** → **SQL Query**.

| Champ | Valeur |
|---|---|
| Nom | `mark-synced` |
| Connecteur | `${kw:target_connector}` |
| Requête | (voir ci-dessous) |
| Timeout | `30` |

```sql
INSERT INTO sync_state (name, last_sync)
VALUES ('github-releases', now())
ON CONFLICT (name) DO UPDATE SET last_sync = now();
```

Cette étape reste volontairement minuscule — sa fonction est de **consigner le succès** dans une forme interrogeable. Un tableau de bord de supervision peut exécuter `SELECT max(last_sync) FROM sync_state WHERE name = 'github-releases'` et alerter si la valeur dépasse deux heures.

---

## Étape 7 — Alertes

Dans le bloc **Alerts** :

| Champ | Valeur |
|---|---|
| En cas d'échec | ✓ |
| Sur exécution longue (minutes) | `10` |
| Destinataires | vide |

L'avertissement à 10 minutes capte une étape figée — l'exécution se termine en général en bien moins d'une minute, donc tout dépassement de dix minutes signale un problème.

Enregistrez la tâche.

---

## Étape 8 — Test rapide

Cliquez sur **▶ Lancer maintenant**. La fenêtre Exécuter avec paramètres s'ouvre (la tâche possède des paramètres partagés + plusieurs étapes). Validez sans modification.

Observez la page Détail d'exécution :

```
✓ fetch-releases      ·   430 ms · status=200 · body=30 items
✓ upsert-releases     ·   220 ms · fetched: 30 · inserted: 2 · updated: 28
✓ mark-synced         ·    12 ms · 1 row affected
```

À la première exécution, comptez 30 insertions (ou autant de releases qu'il en existe) et 0 mise à jour. À l'heure suivante, comptez 0 insertion et 30 mises à jour (les données n'ont pas changé).

En cas d'échec, voir [Diagnostic](../runs/troubleshoot.md).

---

## Ce que vous avez construit

```
JOB github-releases-hourly
├── schedule: "15 * * * *" (UTC)
├── params: { repo: "fblettner/fblettner.github.io", target_connector: "default" }
├── retry: { attempts: 3, backoff: exponential, base_seconds: 30 }
├── alerts: { on_failure: true, on_long_run_minutes: 10 }
└── steps:
    1. fetch-releases    (http · GET · 60s)
    2. upsert-releases   (python · releases.sync:upsert_releases · 5m)
    3. mark-synced       (sql_query · default · 30s)
```

Chaque heure, les releases sont récupérées. La première heure réalise un chargement complet ; les heures suivantes mettent surtout à jour des lignes inchangées (peu coûteux, rapide). La table `sync_state` rend la supervision triviale. Un échec déclenche une notification Slack en quelques minutes.

---

## Adapter à votre cas

### Pagination

L'endpoint `/releases` de GitHub renvoie 30 éléments par défaut. Pour des flux plus volumineux, l'étape HTTP récupère une page ; l'étape Python boucle pour récupérer les suivantes :

```python
async def upsert_paginated(ctx, *, repo, target_connector, **_):
    fetched = 0
    page = 1
    while True:
        url = f"https://api.github.com/repos/{repo}/releases?per_page=100&page={page}"
        # Use httpx or the framework's HTTP client
        items = await ctx.http.get(url, headers={"Authorization": f"Bearer {os.environ['GITHUB_TOKEN']}"})
        if not items: break
        # ... upsert ...
        fetched += len(items)
        page += 1
    return {"fetched": fetched, "pages": page - 1}
```

Pour des flux très volumineux, remplacez l'étape Python unique par une forme à **deux étapes** : une étape Python qui liste les numéros de page et les écrit dans une table de file d'attente ; une seconde étape Python qui traite un lot. La première tâche tourne toutes les heures, la seconde toutes les 5 minutes en consommant la file.

### Récupérations incrémentales

Pour les API qui prennent en charge des filtres `since=…`, lisez la dernière valeur de `sync_state.last_sync` en début d'étape Python et passez-la à l'URL HTTP. La tâche devient une récupération **delta** au lieu d'une récupération complète — moins coûteuse, plus rapide, plus légère pour la limite de débit du service amont.

### Transformations variées

L'étape Python sert à résoudre les divergences de forme. Motifs courants :

| Forme source | Transformation |
|---|---|
| JSON imbriqué (une release porte auteurs, assets, …). | Aplatir — une ligne par release, colonnes dénormalisées. Ou deux tables — `releases` + `release_assets` avec une clé étrangère. |
| Snake_case côté cible, camelCase côté source. | Mapper les clés explicitement dans l'upsert. |
| Dates source en timestamps Unix. | Convertir en chaînes ISO en Python avant l'upsert. |

### Motifs d'authentification

| Auth | En-têtes |
|---|---|
| Bearer token | `Authorization: Bearer ${env:TOKEN}` |
| Clé API | `X-API-Key: ${env:KEY}` |
| Basic auth | `Authorization: Basic <base64>` |
| AWS Sig v4 | Utiliser une étape `python` — l'étape HTTP ne signe pas. |
| Flux OAuth refresh | Utiliser une étape `python` — récupérer un token frais, puis appeler l'endpoint protégé. |

---

## Pièges fréquents

| Erreur | Symptôme | Correctif |
|---|---|---|
| Cron à `0 * * * *`. | La tâche entre en collision avec toutes les autres charges « chaque heure » de l'organisation. | Décaler — `15 * * * *` ou `27 * * * *`. |
| Absence de clause `ON CONFLICT`. | Rejouer l'heure explose sur des clés en doublon. | Toujours upserter quand la source est rejouable. |
| Token d'API codé en dur. | Le token fuite dans le contrôle de version / les résultats de recherche. | Utiliser `${env:…}` et placer le secret dans le fichier d'environnement. |
| Trop d'essais. | Un 401 (token erroné) réessaie pendant 15 minutes. | Plafonner à 3. Un 4xx ne réussit jamais sans intervention. |
| Absence de table `sync_state`. | La supervision ne sait pas si la dernière synchronisation a réussi. | Toujours inscrire un point de contrôle. |

---

## Pour la suite

- [Recette — Synchronisation planifiée de base](./scheduled-sync.md) — le motif SQL Copy.
- [Recette — Nettoyage conditionnel](./conditional-cleanup.md) — une tâche qui ne s'exécute que si une condition est remplie.
- [Étapes Python personnalisées](../custom-python.md) — l'échappatoire Python en profondeur.
- [Étapes → HTTP](../steps.md#http--http) — chaque champ de l'étape HTTP.
