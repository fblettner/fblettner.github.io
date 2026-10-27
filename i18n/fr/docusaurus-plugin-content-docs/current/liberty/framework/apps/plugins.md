---
title: Plugins
description: "Le code Python spécifique appelé par Liberty Next — emplacement des packages de plugins, appel d'une fonction module:fonction par une étape Nomaflow python ou par l'action call_plugin d'un écran, arguments injectés (connectors, ctx, settings, changesets), interrogation des connecteurs et valeur de retour."
keywords: [Liberty Next, plugins, Python, callable, module:fonction, étape python, call_plugin, connectors, RunContext, StepResult, op_kwargs]
---

# Plugins

Tout se configure dans Liberty Next, à une exception près : les **plugins**, des fonctions Python ordinaires pour ce qu'une requête ou un appel d'API ne sait pas exprimer — une transformation, un enchaînement d'appels propre à un système source, une intégration.

Une fonction de plugin se désigne par `"package.module:fonction"` depuis deux endroits :

| Appelant | Réglage |
|---|---|
| Une étape Nomaflow **`python`** | `callable` et `op_kwargs` sur l'étape — voir [Étapes](../../nomaflow/steps.md). |
| Une action d'écran **`call_plugin`** | `callable` et `param_binds` sur l'action — voir [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md#types). |

Les pages pratiques se trouvent sous [Construire → Plugins](../build/plugins/overview.md) : [Écrire un callable](../build/plugins/write-a-callable.md), [Primitives ETL](../build/plugins/etl-primitives.md), [Déployer et déboguer](../build/plugins/deploy-and-debug.md). Cette page en donne la synthèse.

---

## Emplacement \{#folder\}

Les plugins sont des packages Python placés dans le dossier `plugins/`, à côté du dossier de configuration des applications — `<LIBERTY_APPS_DIR>/../plugins/` (sous Docker, `/apps/plugins`) :

```text
apps/
├── config/            ← LIBERTY_APPS_DIR
└── plugins/
    └── billing/
        ├── __init__.py
        └── invoicing.py   ← callable = "billing.invoicing:reissue_drafts"
```

Au démarrage, le serveur place ce dossier en tête du chemin Python et journalise `liberty.plugins importable from …`. Un package installé dans l'environnement Python du serveur fonctionne aussi ; ses fonctions se désignent de la même façon.

Le module est importé à l'exécution de l'étape ou de l'action, pas à l'enregistrement de la configuration : un chemin erroné se traduit par une exécution en échec, avec l'erreur d'import.

---

## La fonction \{#function\}

```python
# plugins/billing/invoicing.py
from liberty.jobs.steps.base import StepResult

async def reissue_drafts(*, connectors, ctx, period: str, dry_run: bool = False, **_) -> StepResult:
    billing = connectors.sql("billing")
    drafts = (await billing.execute("drafts_for_period", {"PERIOD": period})).rows
    if dry_run:
        return StepResult(rows_affected=0, extras={"matched": len(drafts)})
    for d in drafts:
        await billing.execute("issue_invoice", {"INVOICE_ID": d["INVOICE_ID"]})
    return StepResult(rows_affected=len(drafts), extras={"run": ctx.run_id})
```

### Arguments reçus

| Argument | Origine |
|---|---|
| Ses propres paramètres (`period`, `dry_run`) | Les `op_kwargs` de l'étape, ou les `param_binds` de l'action. Les valeurs sont converties dans le type annoté (`int`, `bool`, dates…). |
| **`connectors`** | Injecté : tous les connecteurs SQL et API. |
| **`ctx`** | Injecté pour une étape : le contexte de l'exécution — `run_id`, `job_id`, `trigger`, `prev_rows_affected`, `parent_chain`. |
| **`settings`** | Injecté : la configuration en cours. |
| **`changesets`** | Injecté pour une étape : le stockage des paquets de modifications. |

Un argument injecté n'est transmis que si la fonction le déclare nommément ou accepte `**kwargs` ; une valeur de même nom dans `op_kwargs` l'emporte.

### Interroger les connecteurs

| Appel | Résultat |
|---|---|
| `await connectors.sql("billing").execute("nom_requete", {"PARAM": valeur})` | Un résultat avec `.rows` (liste de dictionnaires) et `.rowcount`. Exécute la requête nommée avec ses jetons et les règles du dictionnaire ; `user="…"` fixe le nom écrit par `LOGIN` / `{{LOGIN}}` (`ANONYMOUS` à défaut). |
| `await connectors.api("crm").call("nom_endpoint", {"param": valeur})` | La réponse de l'endpoint. |

### Valeur de retour

| Retour | Enregistré comme |
|---|---|
| `None` | Rien. |
| `int` | Le nombre de lignes traitées. |
| `dict` | Des détails conservés avec l'étape (pas un nombre de lignes). |
| `StepResult(rows_affected=…, extras={…})` | Les deux. |

Depuis une action d'écran, la valeur de retour est conservée dans le contexte de la chaîne quand `bind_result` est activé, pour les étapes suivantes.

### Synchrone ou asynchrone

Une fonction `async def` est attendue ; une fonction `def` ordinaire s'exécute dans un thread. Un thread ne peut pas être interrompu : l'annulation marque l'exécution comme annulée, mais la fonction continue jusqu'à son terme — un traitement long s'écrit donc de préférence en `async`. Une exception fait échouer l'étape (et déclenche ses nouvelles tentatives) ; `StepFailed` donne un message plus clair. Les messages journalisés via `register_namespace` apparaissent dans le journal de l'exécution — voir [Écrire un callable](../build/plugins/write-a-callable.md).

---

## Tests \{#testing\}

Un plugin est du Python ordinaire : il se teste avec pytest, en passant des `connectors` et un `ctx` factices en arguments.

```python
from unittest.mock import AsyncMock, MagicMock
from billing.invoicing import reissue_drafts

async def test_dry_run_counts_only():
    billing = MagicMock(execute=AsyncMock(return_value=MagicMock(rows=[{"INVOICE_ID": 1}, {"INVOICE_ID": 2}])))
    connectors = MagicMock(sql=MagicMock(return_value=billing))
    result = await reissue_drafts(connectors=connectors, ctx=MagicMock(run_id="r1"), period="2026-05", dry_run=True)
    assert result.extras == {"matched": 2}
```

---

## Bonnes pratiques

- **Une fonction par étape.** Des fonctions courtes se suivent plus facilement dans l'historique des exécutions.
- **Annoter les paramètres** (`period: str`, `apps_id: int`) : les valeurs venues de l'interface sont converties, et une valeur erronée échoue clairement.
- **Appeler des requêtes nommées** par `connectors.sql(...)` plutôt que du SQL brut : la requête reste visible dans les Paramètres, et ses jetons comme les règles du dictionnaire s'appliquent.
- **Laisser remonter les exceptions.** Un `try / except: pass` transforme un échec en exécution réussie qui n'a rien fait.
- **Ranger les plugins avec la configuration des applications**, sous gestion de versions, pour qu'ils suivent les mêmes déploiements.

---

## Pour aller plus loin

- [Construire → Plugins](../build/plugins/overview.md) — les pages pas à pas.
- [Étapes](../../nomaflow/steps.md) — l'étape `python`.
- [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md) — `call_plugin` depuis un écran.
