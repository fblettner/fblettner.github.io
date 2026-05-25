---
title: Structure du projet
description: "Cartographie des fichiers des deux dépôts — liberty-next (binaire du framework) et liberty-apps (configuration spécifique à l'installation). Ce qui se trouve où, ce qui est versionné, ce qui est spécifique à l'installation, et comment LIBERTY_APPS_DIR aiguille le framework vers le dépôt apps."
keywords: [Liberty Framework, structure du projet, liberty-next, liberty-apps, arborescence, LIBERTY_APPS_DIR, config, TOML, plugins, auth.toml, app.toml]
---

# Structure du projet

Liberty Framework est réparti entre **deux dépôts** qui collaborent à l'exécution : le binaire du framework (`liberty-next`) lit sa configuration par section depuis le dépôt apps (`liberty-apps`). Cette page est la cartographie des fichiers — où vit chaque élément, ce qui est versionné, ce qui est spécifique à l'installation.

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
│   ├── connectors/           ← moteur des connecteurs SQL / HTTP / API
│   ├── auth/                 ← utilisateurs locaux, OIDC, JWT, permissions
│   ├── dictionary/           ← métadonnées de champ partagées
│   ├── screens/              ← moteur d'écran (runtime grille + dialogue)
│   ├── dashboards/           ← mise en page tableau de bord + rendu des widgets
│   ├── charts/               ← définitions des graphiques
│   ├── menus/                ← arborescence menu + élagage par permissions
│   ├── jobs/                 ← Nomaflow (ETL + planificateur)
│   ├── ai/                   ← assistant Anthropic tool-use
│   ├── licensing/            ← vérification de clé de licence RS256
│   ├── web/                  ← gestionnaires de routes HTTP (*_router.py)
│   └── *_cli.py              ← points d'entrée CLI (admin, connectors, crypto, license)
│
├── frontend/                 ← SPA React 19 + Vite (build vers frontend/dist/)
│   └── src/
│       ├── pages/            ← composants de route en chargement différé
│       ├── builders/         ← éditeurs UI des Paramètres (un par type de config)
│       ├── components/       ← atomes UI partagés (table, dialogue, chart, …)
│       └── api/              ← wrappers client REST
│
├── config/                   ← modèles fournis + fichiers spécifiques à l'installation
│   ├── app.toml              ← paramètres du framework (auth, OIDC, IA, crypto, licence)
│   ├── auth.toml             ← utilisateurs locaux — créé par init-db, ignoré par git
│   ├── *.toml.example        ← modèles pour connectors / dictionary / menus / screens / charts / dashboards
│   └── *.toml                ← fichiers réels par section (uniquement quand LIBERTY_APPS_DIR n'est pas défini)
│
├── tests/                    ← suite pytest (≥ 335 tests)
└── docs/                     ← notes de planification internes au framework (pas la doc publique)
```

| Fichier | Statut | Édité par |
|---|---|---|
| `liberty/`, `frontend/`, `pyproject.toml`, `start.sh` | Versionné | Mainteneurs du framework — *ne pas* modifier par installation. |
| `config/app.toml` | Spécifique à l'installation | Opérateur — backend d'auth, issuer OIDC, référence de clé IA, chemin du fichier de licence. |
| `config/auth.toml` | Spécifique à l'installation, ignoré par git | CLI `liberty-admin` / UI des Paramètres. |
| `config/*.toml.example` | Versionné | Mainteneurs du framework — modèles fournis. |
| `config/*.toml` (sans `.example`) | Spécifique à l'installation, ignoré par git | Modifiable depuis l'UI des Paramètres quand `LIBERTY_APPS_DIR` n'est pas défini. |

---

## `liberty-apps` — votre configuration

```text
liberty-apps/
├── README.md
├── config/                   ← TOML par section — lu par liberty-next à l'exécution
│   ├── connectors.toml       ← pools + requêtes nommées / endpoints
│   ├── dictionary.toml       ← métadonnées de champ réutilisables
│   ├── menus.toml            ← arborescences du menu latéral par app
│   ├── screens.toml          ← définitions de grille + dialogue
│   ├── charts.toml           ← config wrapper Recharts
│   └── dashboards.toml       ← mises en page des tableaux de bord
│
├── plugins/                  ← modules Python personnalisés (callables d'étapes de job, hooks, …)
│   └── <package>/            ← un dossier par app
│       ├── __init__.py
│       └── jobs.toml         ← catalogue de jobs Nomaflow pour cette app
│
└── docs/                     ← notes de déploiement et d'exploitation (spécifiques à l'installation)
```

| Fichier | Édité par | Notes |
|---|---|---|
| `config/connectors.toml` | UI Paramètres → *Connecteurs* | Détient le registre des pools plus chaque connecteur. |
| `config/dictionary.toml` | UI Paramètres → *Dictionnaire* | Métadonnées par colonne réutilisées par les écrans et les graphiques. |
| `config/menus.toml` | UI Paramètres → *Menus* | Une racine par app, hiérarchie dossier/feuille optionnelle. |
| `config/screens.toml` | UI Paramètres → *Écrans* | Grilles + dialogues + conditions par champ. |
| `config/dashboards.toml` | UI Paramètres → *Tableaux de bord* | Panneaux stat / bar / line / pie. |
| `config/charts.toml` | UI Paramètres → *Graphiques* | Définitions de graphiques référencées par les tableaux de bord. |
| `plugins/*/jobs.toml` | UI Paramètres → *Jobs* | Catalogue Nomaflow — un fichier par package d'app. |
| `plugins/*/*.py` | Développeur | Callables d'étapes personnalisés — exposés au framework via `sys.path`. |

Chaque fichier est du TOML simple que vous pouvez lire avec `cat`, comparer avec `git`, éditer dans `vim`. L'UI des Paramètres utilise le même format sur disque — ce que vous enregistrez dans le navigateur est ce que `git status` rapporte.

---

## Comment le framework trouve votre configuration

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
- **Code de permission** — `sql:<connector>:<query>` pour les requêtes SQL et `api:<connector>:<endpoint>` pour les endpoints HTTP/API. L'UI des Paramètres les construit automatiquement ; aucun code manuel n'est nécessaire.

---

## Conventions de gestion de versions

- `liberty-next` se met à niveau en **basculant les tags git** — le binaire du framework est traité comme une dépendance externe, non modifiée sur place. Le dépôt `liberty-apps` reste intact lors des montées de version du framework.
- `liberty-apps` est versionné normalement — chaque édition TOML faite dans l'UI des Paramètres se traduit par un diff dans le dépôt. Les commits faits par l'opérateur sont relisables comme n'importe quel autre changement de code.
- Les secrets — clé de signature JWT, clé maître, clé de licence, clé IA — se trouvent dans l'**environnement**, jamais dans l'un ou l'autre dépôt. Voir [Chiffrement et secrets](../configuration/encryption-secrets.md).

---

## Pour aller plus loin

- [Configuration → UI des Paramètres](../configuration/settings-ui.md) — l'éditeur in-browser pour tout ce qui se trouve sous `liberty-apps/config/`.
- [Configuration → Référence `app.toml`](../configuration/app-toml.md) — chaque clé documentée.
- [Apps et Plugins → Apps](../apps/overview.md) — comment organiser plusieurs apps dans `liberty-apps`.
