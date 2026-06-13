---
title: Plugins — vue d'ensemble
description: "Un plugin est un package Python sur disque que Liberty rend importable au démarrage. Il porte les callables personnalisés que les étapes python de Nomaflow référencent — la voie d'extension pour tout ce que les étapes déclaratives ne savent pas exprimer."
keywords: [Liberty Framework, plugins, sys.path, importable, callable, apps repo, LIBERTY_APPS_DIR, python step]
---

# Plugins — vue d'ensemble

Un **plugin** dans Liberty est un package Python sur disque que le framework rend importable au démarrage. Les callables personnalisés y résident — les fonctions vers lesquelles les étapes `python` de Nomaflow pointent par leur nom.

Le framework garde délibérément les primitives open-source réduites (les cinq types d'étapes déclaratives, les connecteurs, les écrans, les menus). Quand une charge de travail n'y rentre pas, on écrit du Python et on le référence depuis une étape `python` :

```toml
[[jobs.steps]]
type     = "python"
name     = "refresh-users"
callable = "myapp.security:refresh_users"
```

`callable` suit la forme `<module.path>:<function>`. Le module se trouve dans le plugin ; le framework l'importe et appelle la fonction.

---

## Pourquoi les plugins (plutôt qu'écrire à l'intérieur du framework)

Le modèle des plugins est ce qui rend Liberty extensible sans fork. Trois propriétés comptent :

| Propriété | Ce qu'elle apporte |
|---|---|
| **Sur disque, sur `sys.path`** | Chemin d'import Python standard. Pas d'appel d'enregistrement, pas de décorateur, pas de fichier de métadonnées. Déposer un `.py` dans le bon dossier, le référencer par son nom. |
| **Se trouve dans un dépôt séparé** | Le framework est livré open-source ; un plugin peut être propriétaire, spécifique à un client, plein de gabarits SQL internes. Les deux dépôts évoluent indépendamment. |
| **Importable depuis n'importe quel sous-système** | Les étapes `python` de Nomaflow sont aujourd'hui le principal consommateur, mais tout point du framework qui prend une chaîne de callable peut résoudre vers un plugin — futures actions d'écrans personnalisées, règles de dictionnaire personnalisées, etc. |

La séparation est volontaire : **le framework ouvert apporte les primitives ; le plugin porte la logique métier**.

---

## Où résident les plugins

Les plugins résident dans le **dépôt des applications**, à côté (et non à l'intérieur) du framework. La disposition attendue :

```
<apps-repo>/
├── config/           ← LIBERTY_APPS_DIR pointe ici
│   ├── app.toml
│   ├── connectors.toml
│   ├── screens.toml
│   ├── menus.toml
│   └── dictionary.toml
└── plugins/          ← frère de config/ — c'est ce qui est importable
    ├── myapp/        ← un package Python par plugin
    │   ├── __init__.py
    │   ├── security.py
    │   └── reports.py
    └── reporting/
        ├── __init__.py
        └── ...
```

| Élément | Notes |
|---|---|
| `LIBERTY_APPS_DIR` | Variable d'environnement (ou `[app] apps_dir` dans `app.toml`) — pointe sur le dossier `config/`. |
| `plugins/` | Le dossier frère. **Inféré** par le framework comme `<LIBERTY_APPS_DIR>/../plugins/`. |
| `plugins/<name>/` | Un package Python par plugin. Doit contenir `__init__.py` (vide convient) pour être importable. |
| `plugins/<name>/<module>.py` | Le code réel. Référencé depuis les callables des étapes `python` sous la forme `<name>.<module>:<function>`. |

En développement (sans `LIBERTY_APPS_DIR` défini), le framework retombe sur `./plugins/` relatif au répertoire courant.

---

## Comment l'import fonctionne

Au démarrage, le framework exécute `_ensure_plugins_on_sys_path()` :

1. Résout le dossier des plugins (`<LIBERTY_APPS_DIR>/../plugins/` ou `./plugins/`).
2. Si le dossier existe, **l'insère en tête de `sys.path[0]`** pour qu'il prime sur tout package tiers du même nom.
3. Trace : `liberty.plugins importable from <path>`.

Ensuite, `import myapp.security` fonctionne partout dans le processus du framework — y compris depuis `importlib.import_module("myapp.security")`, ce que l'exécuteur d'étape `python` appelle en interne.

Le mécanisme repose sur les **imports Python standard** — pas de manifeste de plugin, pas d'enregistrement, pas de découverte pilotée par manifeste. Si le fichier est sur `sys.path` et importable, le framework peut l'appeler.

---

## Ce que contient un plugin

Un plugin est un package Python normal. Contenu courant :

| Fichier / dossier | Ce qu'il porte |
|---|---|
| `__init__.py` | Vide, en général. Sert juste à faire du dossier un package. |
| `<module>.py` | Fonctions référencées par les étapes `python` de Nomaflow. |
| `db/` | Modèles SQLAlchemy ou gabarits SQL bruts. La forme persistante du plugin. |
| `queries/` | Fichiers SQL statiques chargés à l'import du module. |
| `data/` | Données de référence CSV / JSON livrées avec le plugin. |
| `tests/` | Suite de tests propre au plugin. Exécutée séparément des tests du framework. |

Le package peut être structuré comme Python le permet — sous-modules, sous-packages, dossiers imbriqués. Le framework ne s'en préoccupe pas, du moment que les callables des étapes `python` référencent un chemin d'import valide.

---

## À quoi ressemble un callable

Un plugin minimal : `<apps-repo>/plugins/myapp/__init__.py` (vide) + `<apps-repo>/plugins/myapp/cleanup.py` :

```python
# plugins/myapp/cleanup.py
import logging
from liberty.connectors import ConnectorRegistry

_log = logging.getLogger(__name__)

async def purge_old_sessions(
    *,
    connectors: ConnectorRegistry,   # auto-injected by name
    apps_id: int,                    # from op_kwargs
    max_age_days: int = 30,          # from op_kwargs, with default
    **_,                              # swallow anything else the framework injects
) -> dict:
    """Delete session rows older than max_age_days for one tenant."""
    pool = connectors.pools.engine("default")
    # ... do the work ...
    deleted = 1234
    _log.info("purged %d sessions for apps_id=%d", deleted, apps_id)
    return {"rows_affected": deleted}
```

Référencé depuis `jobs.toml` :

```toml
[[jobs.steps]]
type     = "python"
name     = "purge-sessions"
callable = "myapp.cleanup:purge_old_sessions"
op_kwargs = { apps_id = 10, max_age_days = 30 }
```

Signature de fonction, forme de retour, gestion des erreurs et auto-injections du framework : [Écrire un callable](./write-a-callable.md).

---

## Quand recourir à un plugin

| Recourir à un plugin quand… | Rester déclaratif quand… |
|---|---|
| La charge demande une bibliothèque Python (httpx, openpyxl, ldap3, un SDK interne). | La même chose peut s'écrire avec `sql_query`, `sql_copy`, `http`, `ldap_sync`. |
| Le flux a une logique de branchement qui dépend de valeurs intermédiaires. | Le flux est une séquence fixe d'étapes typées. |
| Il faut intégrer un service pour lequel Liberty n'a pas d'étape native. | L'intégration est HTTP ou LDAP — utiliser ces types d'étapes. |
| On transforme des données autrement qu'en SQL (analyse XML, génération de PDF, traitement d'images). | La transformation est purement SQL. |
| Il faut appeler une procédure stockée avec de la logique entre les appels. | Une seule étape `sql_query` suffit. |
| On construit de l'outillage autour du framework (jobs batch CLI, scripts ad-hoc). | L'interface Paramètres offre déjà toutes les options nécessaires. |

L'étape `python` est la **voie d'extension**, pas le défaut. La plupart des charges opérationnelles tiennent dans les étapes déclaratives ; recourir à Python quand ce n'est sincèrement pas le cas.

---

## Rechargement à chaud — ce qui passe et ce qui ne passe pas

| Changement dans le plugin | Pris en compte par | Demande |
|---|---|---|
| Modifier `jobs.toml` (catalogue de jobs du plugin). | Le prochain *Save* dans l'interface Paramètres **ou** `POST /admin/reload`. | Rechargement à chaud (pas de redémarrage). |
| Modifier un fichier `.py` — changer le code d'une fonction. | Le cache d'imports Python contient encore l'**ancienne** version. | **Redémarrage** du processus du framework. |
| Ajouter un nouveau fichier `.py`. | Sera importable au premier import après démarrage du framework. | **Redémarrage** du processus du framework. |
| Changer `requirements.txt` / installer une nouvelle dépendance. | `pip install` n'aide pas — le processus en cours a déjà chargé son environnement. | **Redémarrage** du processus du framework (après `pip install`). |

Au quotidien, la boucle est : éditer le Python → redémarrer le framework → exécuter le job → consulter le log. Le schéma du shell de développement est de lancer le framework avec auto-redémarrage (`--reload` d'uvicorn) pour raccourcir le cycle.

---

## Ce qu'on fait concrètement — carte rapide

| Objectif | À lire |
|---|---|
| Écrire un callable référencé depuis une étape `python` de Nomaflow. | [Écrire un callable](./write-a-callable.md). |
| Recourir aux helpers ETL prêts à l'emploi (copie, snapshot, suppression, audit). | [Primitives ETL](./etl-primitives.md). |
| Livrer un plugin en production, le déboguer quand il dévie. | [Déployer et déboguer](./deploy-and-debug.md). |

---

## Et ensuite

- [Écrire un callable](./write-a-callable.md) — le contrat de la fonction.
- [Concepts → Apps & Plugins → Plugins](../../apps/plugins.md) — la référence détaillée.
- [Nomaflow → Étapes Python personnalisées](../../../nomaflow/custom-python.md) — la vue opérateur du même callable.
