---
title: Structure du projet
description: "Cartographie des fichiers des deux dépôts — liberty-next (binaire du framework) et liberty-apps (configuration spécifique à l'installation). Ce qui se trouve où, ce qui est versionné, ce qui est spécifique à l'installation, et comment LIBERTY_APPS_DIR aiguille le framework vers le dépôt apps."
keywords: [Liberty Framework, structure du projet, liberty-next, liberty-apps, arborescence, LIBERTY_APPS_DIR, config, TOML, plugins, auth.toml]
---

# Structure du projet

Liberty Framework est réparti entre **deux dépôts** qui coopèrent à l'exécution : le binaire du framework (`liberty-next`) lit sa configuration par section depuis le dépôt apps (`liberty-apps`). Cette page est la cartographie des fichiers — où se trouve chaque élément, ce qui est versionné, ce qui est spécifique à l'installation.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '18px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>liberty-next</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '6px'}}>Le binaire du framework</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Open source — backend FastAPI + frontend React, chaque concept intégré au cœur. Cloné une fois par hôte, mis à niveau en basculant les tags.</div>
  </div>
  <div style={{border: '1px solid rgba(192,132,252,0.40)', borderRadius: '10px', padding: '18px', background: 'rgba(192,132,252,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#c084fc', marginBottom: '8px'}}>liberty-apps</div>
    <div style={{fontSize: '13px', fontWeight: 700, marginBottom: '6px'}}>Votre configuration</div>
    <div style={{fontSize: '12px', opacity: 0.85, lineHeight: '1.55'}}>Spécifique à l'installation — pools, connecteurs, écrans, menus, tableaux de bord, graphiques, jobs et tout plugin Python personnalisé. Versionné séparément.</div>
  </div>
</div>

Le framework est informé de l'emplacement du dépôt apps via la variable d'environnement `LIBERTY_APPS_DIR`. Par défaut, avec `LIBERTY_APPS_DIR` non défini, le framework lit ses TOML par section depuis `liberty-next/config/` — pratique pour l'expérimentation locale mais pas la disposition de production.

---

## `liberty-next` — le binaire du framework

```text
liberty-next/
├── start.sh                  ← assistant run/dev (build, init-db, init-config, …)
├── pyproject.toml            ← dépendances Python + points d'entrée CLI
├── liberty/                  ← backend FastAPI (Python 3.12)
│   ├── main.py               ← fabrique d'app, lifespan, routeurs
│   ├── config.py             ← chargement TOML + expansion d'env
│   ├── connectors/           ← moteur des connecteurs SQL / API, dictionnaire (dictionary.py)
│   ├── auth/                 ← utilisateurs locaux, OIDC, JWT, permissions
│   ├── screens/              ← moteur d'écran (runtime grille + dialogue)
│   ├── dashboards/           ← mise en page tableau de bord + rendu des widgets
│   ├── charts/               ← définitions des graphiques
│   ├── menus/                ← arborescence menu + élagage par permissions
│   ├── jobs/                 ← Nomaflow (tâches, étapes, planificateur)
│   ├── actions/              ← actions partagées
│   ├── notify/               ← notifications
│   ├── ai/                   ← assistant Anthropic tool-use
│   ├── licensing/            ← vérification de clé de licence RS256
│   ├── web/                  ← routes HTTP (un module par domaine)
│   └── *_cli.py              ← points d'entrée CLI (admin, connectors, crypto, license)
│
├── frontend/                 ← SPA React 19 + Vite (build vers frontend/dist/)
│   └── src/
│       ├── pages/            ← pages, dont Settings/ (un éditeur par type de configuration)
│       ├── common/           ← éléments d'interface partagés (champs, listes, dialogues, éditeur SQL…)
│       ├── components/       ← mise en page (menu latéral, sélecteur d'application, onglets)
│       ├── locales/          ← textes de l'interface, en et fr
│       └── api/              ← client REST
│
├── config/                   ← modèles fournis + fichiers spécifiques à l'installation
│   ├── app.toml              ← réglages de l'application — modifiés dans Paramètres → App
│   ├── auth.toml             ← utilisateurs locaux — créé par init-db, ignoré par git
│   ├── *.toml.example        ← modèles pour connectors / dictionary / menus / screens / charts / dashboards
│   └── *.toml                ← fichiers réels par section (uniquement quand LIBERTY_APPS_DIR n'est pas défini)
│
├── tests/                    ← suite pytest
└── docs/                     ← notes de planification internes au framework (pas la doc publique)
```

| Fichier | Statut | Édité par |
|---|---|---|
| `liberty/`, `frontend/`, `pyproject.toml`, `start.sh` | Versionné | Mainteneurs du framework — *ne pas* modifier par installation. |
| `config/app.toml` | Spécifique à l'installation | Paramètres → App. |
| `config/auth.toml` | Spécifique à l'installation, ignoré par git | CLI `liberty-admin` / Paramètres. |
| `config/*.toml.example` | Versionné | Mainteneurs du framework — modèles fournis. |
| `config/*.toml` (sans `.example`) | Spécifique à l'installation, ignoré par git | Modifiable depuis les Paramètres quand `LIBERTY_APPS_DIR` n'est pas défini. |

---

## `liberty-apps` — la configuration

```text
liberty-apps/
├── README.md
├── config/                   ← TOML par section — lu par liberty-next à l'exécution
│   ├── connectors.toml       ← pools, connecteurs et leurs requêtes / endpoints
│   ├── dictionary.toml       ← données, énumérations, lookups, séquences
│   ├── menus.toml            ← un menu par application
│   ├── screens.toml          ← grilles et dialogues
│   ├── charts.toml           ← graphiques enregistrés
│   ├── dashboards.toml       ← tableaux de bord
│   ├── actions.toml          ← actions partagées
│   └── theme.toml            ← couleurs et identité visuelle
│
├── plugins/                  ← packages Python (fonctions appelées par les étapes et les actions)
│   ├── <package>/            ← un dossier par package, avec __init__.py
│   └── nomaflow/
│       └── jobs.toml         ← le catalogue des tâches Nomaflow
│
└── docs/                     ← notes de déploiement et d'exploitation (spécifiques à l'installation)
```

| Fichier | Édité par | Notes |
|---|---|---|
| `config/connectors.toml` | Paramètres → *Connecteurs* | Détient le registre des pools plus chaque connecteur. |
| `config/dictionary.toml` | Paramètres → *Dictionnaire* | Métadonnées par colonne réutilisées par les écrans et les graphiques. |
| `config/menus.toml` | Paramètres → *Menus* | Une racine par app, hiérarchie dossier/feuille optionnelle. |
| `config/screens.toml` | Paramètres → *Écrans* | Grilles + dialogues + conditions par champ. |
| `config/dashboards.toml` | Paramètres → *Tableaux de bord* | Widgets indicateur, graphique et table. |
| `config/charts.toml` | Paramètres → *Graphiques* | Définitions de graphiques référencées par les tableaux de bord. |
| `config/actions.toml` | Paramètres → *Actions* | Actions partagées appelées par les écrans. |
| `config/theme.toml` | Paramètres → *Thème* | Couleurs et identité visuelle. |
| `plugins/nomaflow/jobs.toml` | Nomaflow → *Tâches* | Le catalogue des tâches. |
| `plugins/*/*.py` | Développeur | Callables d'étapes personnalisés — chargés par le framework via `sys.path`. |

Chaque fichier est du TOML lisible avec `cat` et comparable avec `git`. Les Paramètres écrivent ce même format : ce qui est enregistré dans le navigateur est ce que montre `git status`.

---

## Comment le framework trouve la configuration

Le câblage tient en une seule variable d'environnement :

```bash
export LIBERTY_APPS_DIR="$HOME/work/liberty-apps/config"
```

Quand `LIBERTY_APPS_DIR` est **défini** :

| Config | Lu depuis |
|---|---|
| `connectors.toml`, `dictionary.toml`, `menus.toml`, `screens.toml`, `charts.toml`, `dashboards.toml` | `${LIBERTY_APPS_DIR}/<name>.toml` |
| `app.toml` | `liberty-next/config/app.toml` *(reste par hôte)* |
| `auth.toml` | `liberty-next/config/auth.toml` *(reste par hôte)* |
| Packages `plugins/` | `${LIBERTY_APPS_DIR}/../plugins/` ajouté à `sys.path` |

Quand `LIBERTY_APPS_DIR` n'est **pas défini**, chaque fichier est lu depuis `liberty-next/config/`. Pratique pour une installation de dev sur un seul hôte ; en production, gardez-les séparés.

Le contrat complet des variables d'environnement est documenté dans [Configuration → Variables d'environnement](../configuration/environment-variables.md).

---

## Conventions de nommage

- **Identifiant d'app** — chaque écran, menu et job porte un champ `app` (par exemple `nomajde`, `nomasx1`, `tutorial`). C'est l'espace de noms pour les identifiants d'écran et le préfixe de l'entrée du menu latéral.
- **Nom de connecteur** — court, en kebab-case (`jdedwards`, `tasks`, `crm-sql`). Le même nom apparaît dans la page catalogue, la liste d'outils de l'assistant IA et l'URL d'une requête.
- **Nom de pool** — court, en minuscules. `default` est réservé au pool propre du framework.
- **Code de permission** — `sql:<connector>:<query>` pour les requêtes SQL et `api:<connector>:<endpoint>` pour les endpoints HTTP/API. Les Paramètres les construisent d'eux-mêmes.

---

## Conventions de gestion de versions

- `liberty-next` se met à niveau en **basculant les tags git** — le binaire du framework est traité comme une dépendance externe, non modifiée sur place. Le dépôt `liberty-apps` reste intact lors des montées de version du framework.
- `liberty-apps` est versionné normalement — chaque modification faite dans les Paramètres produit un diff dans le dépôt. Les commits faits par l'opérateur sont relisables comme n'importe quel autre changement de code.
- Les secrets — clé de signature JWT, clé maître, clé de licence, clé IA — se trouvent dans l'**environnement**, jamais dans l'un ou l'autre dépôt. Voir [Chiffrement et secrets](../configuration/encryption-secrets.md).

---

## Pour aller plus loin

- [Configuration → Interface des paramètres](../configuration/settings-ui.md) — les éditeurs de tout ce qui se trouve sous `liberty-apps/config/`.
- [Apps et Plugins → Apps](../apps/overview.md) — comment organiser plusieurs apps dans `liberty-apps`.
