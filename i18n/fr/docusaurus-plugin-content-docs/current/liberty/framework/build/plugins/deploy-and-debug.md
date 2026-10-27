---
title: Déployer et déboguer
description: "Disposition du dépôt des applications, LIBERTY_APPS_DIR, le shell de développement avec uvicorn --reload, le schéma de déploiement en production, les lignes de log à rechercher et la configuration des tests."
keywords: [Liberty Framework, plugin, deploy, debug, apps repo, LIBERTY_APPS_DIR, sys.path, uvicorn reload, logging, testing]
---

# Déployer et déboguer

Un plugin est un dossier sur disque plus une variable d'environnement. Le charger demande deux étapes ; le déboguer une fois chargé représente le long tail. Cette page couvre les deux.

---

## Disposition du dépôt des applications

La disposition de production attendue :

```
<apps-repo>/
├── config/                  ← LIBERTY_APPS_DIR
│   ├── connectors.toml
│   ├── screens.toml
│   ├── menus.toml
│   └── dictionary.toml
└── plugins/
    ├── nomaflow/
    │   └── jobs.toml          ← les tâches Nomaflow
    ├── myapp/
    │   ├── __init__.py        ← required to be a package
    │   ├── cleanup.py
    │   ├── reports.py
    │   └── db/                ← submodules / subpackages OK
    │       └── models.py
    └── reporting/
        ├── __init__.py
        └── monthly.py
```

| Élément | Requis | Notes |
|---|---|---|
| `<apps-repo>/config/` | Oui | Les fichiers de configuration. `LIBERTY_APPS_DIR` pointe ici. `app.toml` et `auth.toml` restent dans le dossier `config/` propre au serveur — voir [Architecture](../../../installation/architecture.md#configuration). |
| `<apps-repo>/plugins/` | Oui (pour les plugins) | Inféré par le framework comme `<LIBERTY_APPS_DIR>/../plugins/`. |
| `plugins/<name>/` | Oui | Un package Python par plugin. Doit contenir `__init__.py`. |
| `plugins/<name>/__init__.py` | Oui | Vide convient. Sans lui, Python ne reconnaît pas le dossier comme un package. |
| Autres fichiers / sous-packages | Forme libre | Python standard — toute liberté. |

Le dossier `plugins/` est **frère** de `config/`, pas enfant. Cela permet au `config/` du dépôt des applications de rester propre (pas de code Python mélangé au TOML) tandis que `plugins/` porte tout le Python.

---

## La variable d'environnement

Le framework lit la variable d'environnement **`LIBERTY_APPS_DIR`** au démarrage — dans l'unité systemd, l'environnement du conteneur ou le shell. Sur une installation Docker, `./liberty apps` la définit (`/apps/config`).

Pour le développement :

```bash
export LIBERTY_APPS_DIR=$HOME/code/apps/config
liberty-next
```

Pour la production (systemd) :

```ini
[Service]
Environment="LIBERTY_APPS_DIR=/opt/apps/config"
ExecStart=/opt/liberty/.venv/bin/liberty-next
```

Pour Docker :

```dockerfile
ENV LIBERTY_APPS_DIR=/apps/config
COPY apps/config/ /apps/config/
COPY apps/plugins/ /apps/plugins/
```

---

## Ce qui se passe au démarrage

Au démarrage du framework :

1. Lecture de `LIBERTY_APPS_DIR`.
2. Calcul de `plugins_dir = <LIBERTY_APPS_DIR>/../plugins/`.
3. Si le dossier **existe**, insertion en tête de `sys.path[0]`. Sinon, poursuite silencieuse.
4. Trace : `liberty.plugins importable from /opt/apps/plugins` (niveau info).

Vérification :

```bash
./liberty logs | grep "liberty.plugins importable"     # Docker
liberty-ops logs | grep "liberty.plugins importable"   # installation Python
# → INFO  liberty.plugins importable from /apps/plugins
```

Si la ligne de log manque, le dossier `plugins/` n'est pas là où le framework l'attend — le plus souvent parce que :

- `LIBERTY_APPS_DIR` n'est pas défini.
- Le chemin est faux.
- Le dossier `plugins/` n'existe pas encore (le framework saute silencieusement quand le dossier est absent — par conception, pour que les installations sans plugins n'échouent pas).

---

## Le shell de développement

Pour le développement interactif, lancer le framework avec auto-redémarrage :

```bash
cd <apps-repo>
LIBERTY_APPS_DIR=$(pwd)/config \
    uvicorn liberty.main:asgi_app --reload --reload-dir plugins
```

Ce que cela fait :

- `--reload` redémarre le worker à chaque changement de fichier.
- `--reload-dir plugins` ajoute le dossier des plugins à la liste de surveillance (par défaut, uvicorn surveille le répertoire courant, ce qui rate généralement le dépôt des applications).

Le cycle devient : éditer un `.py` dans `plugins/` → uvicorn redémarre → l'exécution de job suivante prend le nouveau code.

Garder la sortie du serveur ouverte dans un autre terminal : les lignes `liberty.plugins`, `liberty.etl` et `nomaflow` couvrent le chargement des plugins, les appels aux primitives ETL et l'exécution des étapes, plus ce que le plugin journalise sous son propre espace de noms enregistré.

---

## Rechargement à chaud — ce qui passe et ce qui ne passe pas

Le `POST /admin/reload` du framework (déclenché par chaque *Save* dans l'interface Paramètres) relit :

| Fichier | Rechargement automatique |
|---|---|
| `connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`, `jobs.toml` | Oui. |
| `app.toml` | Partiel — la plupart des champs. Les changements de pool demandent un rechargement manuel depuis la page Pools. |
| Code Python dans `plugins/` | **Non.** |

Le code du plugin se trouve dans le cache d'imports Python. **Redémarrer le processus du framework** pour prendre en compte les changements de code.

Deux schémas :

| Workflow | Approche de redémarrage |
|---|---|
| Shell de développement avec `uvicorn --reload` | Automatique au changement de fichier. |
| Production, installation Python | `liberty-ops restart` — choisir un moment calme. |
| Production, Docker | `./liberty restart`. |

---

## Déploiement en production — la recette

Un flux CI/CD typique :

1. **Construire le dépôt des applications** — copier `config/` + `plugins/` dans un tarball / une image Docker de release.
2. **Déployer** — pousser sur les hôtes du framework, définir `LIBERTY_APPS_DIR` sur le `config/` déployé.
3. **Redémarrer** — `./liberty restart` ou `liberty-ops restart`.
4. **Vérifier** — `curl http://localhost:8000/ready` et chercher `liberty.plugins importable` dans le journal.
5. **Test rapide** — ouvrir la page des Tâches Nomaflow, exécuter une petite tâche connue pour fonctionner, consulter le détail de l'exécution.

Les dépendances Python du plugin doivent être installées dans l'environnement du framework : `pipx inject liberty-next <paquet>` sur une installation Python ; avec Docker, seules les bibliothèques déjà présentes dans l'image (`httpx`, `openpyxl`, `ldap3`…) sont disponibles.

---

## Débogage — où regarder

### Le plugin a-t-il été chargé ?

```bash
grep "liberty.plugins importable" app.log
```

Présent → le dossier des plugins est sur `sys.path`. Absent → il ne l'est pas.

### Le callable est-il résolvable ?

Quand une étape `python` se déclenche :

```
INFO  nomaflow.python start run=3f2c… step='cleanup' callable=myapp.cleanup:purge ...
```

Si le callable ne peut pas être résolu :

```
ERROR python step 'cleanup': cannot import module 'myapp.cleanup' from callable 'myapp.cleanup:purge' — No module named 'myapp'
```

ou

```
ERROR python step 'cleanup': module 'myapp.cleanup' has no attribute 'purge' (from callable 'myapp.cleanup:purge')
```

Le message indique quelle moitié a échoué — import du module ou recherche d'attribut. Causes typiques :

| Erreur | Cause |
|---|---|
| `No module named 'myapp'` | `plugins/` n'est pas sur `sys.path` (vérifier le log de démarrage), ou `plugins/myapp/__init__.py` manquant. |
| `No module named 'myapp.cleanup'` | Le package est chargé mais le sous-module n'existe pas — typo dans la chaîne de callable, ou fichier `.py` absent. |
| `module 'myapp.cleanup' has no attribute 'purge'` | Le module est chargé mais le nom de fonction est faux — typo, ou la fonction a été renommée. |

### Le callable s'est-il exécuté ?

```
INFO  nomaflow.python start run=3f2c… step='cleanup' callable=myapp.cleanup:purge kwargs=['apps_id', 'connectors', 'ctx', 'max_age_days']
INFO  nomaflow.python done  run=3f2c… step='cleanup' rows=1234
```

La liste `kwargs` est triée — elle indique ce que la fonction a réellement reçu (auto-injectés + op_kwargs combinés). Utile quand on soupçonne une injection non nommée dans la signature.

### Le callable a-t-il échoué ?

```
ERROR nomaflow.python run=3f2c… step='cleanup' callable=myapp.cleanup:purge raised
ERROR Traceback (most recent call last):
ERROR   File ".../plugins/myapp/cleanup.py", line 42, in purge
ERROR     ...
ERROR RuntimeError: db connection refused
```

La trace arrive dans le journal du serveur, et l'erreur dans la ligne de l'étape du détail de l'exécution.

### Le changement n'est pas reflété

```
INFO  nomaflow.python done run=3f2c… step='cleanup' rows=0     # still the old behaviour
```

Oubli de redémarrer le framework. Python a mis en cache l'ancien module.

```bash
./liberty restart            # ou : liberty-ops restart
# next run picks up the new code
```

---

## Tests — le schéma local

Les plugins sont du Python normal — à tester comme n'importe quel package.

### Tests unitaires

```python
# plugins/myapp/tests/test_cleanup.py
import pytest
from myapp.cleanup import purge_old_sessions

@pytest.mark.asyncio
async def test_purge_old_sessions(fake_registry):
    result = await purge_old_sessions(
        connectors=fake_registry,
        ctx=None,                     # the function doesn't read it
        apps_id=10,
        max_age_days=30,
    )
    assert result.rows_affected >= 0
```

`fake_registry` est une fixture pytest à construire soi-même — un `ConnectorRegistry` pointant sur une base SQLite en mémoire, pour que le test dispose d'un vrai moteur sans dépendre d'un Postgres en marche.

### Tests d'intégration

Exécuter le plugin sur un vrai pool de test (Postgres Docker-Compose, ou une base de dev) :

```python
@pytest.fixture
def real_registry():
    # Build a ConnectorRegistry with a real pool pointing at the dev DB.
    ...
    return registry

@pytest.mark.asyncio
async def test_refresh_security_against_real_db(real_registry):
    result = await refresh_security_users(
        connectors=real_registry,
        ctx=mock.MagicMock(run_id="test_run"),
        apps_id=10,
    )
    # Verify the target table was actually written.
    ...
```

La suite de tests du framework lui-même utilise ce schéma — fixtures câblées sur un Postgres jetable dans `tests/conftest.py`.

### Exécuter une tâche de bout en bout

Lancer la tâche depuis la page des Tâches Nomaflow avec **Run with parameters** : même chargement du plugin, mêmes injections, mêmes lignes de journal qu'une exécution planifiée. L'API REST propose le même appel (`POST /admin/jobs/{job_id}/run`) pour les scripts.

---

## Pièges courants de déploiement

| Erreur | Symptôme | Correctif |
|---|---|---|
| `LIBERTY_APPS_DIR` non défini en prod. | Les plugins n'arrivent pas à s'importer ; le log du framework n'affiche pas la ligne `liberty.plugins importable`. | Définir la variable d'environnement dans l'unité systemd, ou installer les applications avec `./liberty apps` sous Docker. |
| Chemin qui pointe directement sur `plugins/` (et non `config/`). | Le framework cherche `<path>/../plugins/` → au mauvais endroit. | Pointer sur le dossier **config** ; `plugins/` est inféré comme son frère. |
| `plugins/<name>/__init__.py` manquant. | `ImportError: No module named '<name>'`. | Ajouter un `__init__.py` vide. |
| Le plugin importe une bibliothèque absente de l'environnement du framework. | `ImportError: No module named '…'` au premier appel. | `pipx inject liberty-next <bibliothèque>` sur une installation Python, puis redémarrer. |
| Version Python différente entre dev et prod. | Le code fonctionne en local, échoue en prod avec des erreurs cryptiques de syntaxe / import. | Épingler la version Python (`pyproject.toml` `requires-python = ">=3.12"`) et la faire correspondre en CI / prod. |
| Modifications du code du plugin sans redémarrage. | L'ancien code continue de tourner. | Redémarrer le framework. |

---

## Et ensuite

- [Primitives ETL](./etl-primitives.md) — les briques prêtes à l'emploi.
- [Écrire un callable](./write-a-callable.md) — le contrat de la fonction.
- [Nomaflow → Étapes Python personnalisées](../../../nomaflow/custom-python.md) — la vue opérateur de ce que produit le plugin.
