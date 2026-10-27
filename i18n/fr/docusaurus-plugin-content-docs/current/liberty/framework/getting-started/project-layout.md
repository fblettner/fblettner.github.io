---
title: Structure du projet
description: "Cartographie des fichiers des deux dépôts — liberty-next (binaire du framework) et liberty-apps (configuration spécifique à l'installation). Ce qui se trouve où, ce qui est versionné, ce qui est spécifique à l'installation, et comment LIBERTY_APPS_DIR aiguille le framework vers le dépôt apps."
keywords: [Liberty Framework, structure du projet, liberty-next, liberty-apps, arborescence, LIBERTY_APPS_DIR, config, TOML, plugins, auth.toml]
---

# Structure du projet

Liberty Framework est réparti entre **deux dépôts** qui coopèrent à l'exécution : le binaire du framework (`liberty-next`) lit sa configuration par section depuis le dépôt apps (`liberty-apps`). Cette page est la cartographie des fichiers — où se trouve chaque élément, ce qui est versionné, ce qui est spécifique à l'installation.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pjl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pjl-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pjl-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pjl-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="260" rx="14" fill="url(#pjl-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="40" width="350" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="62" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">liberty-next  (le framework)</text>
  <text x="258" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">liberty/</text>
  <text x="576" y="88" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">backend</text>
  <text x="258" y="110" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">frontend/</text>
  <text x="576" y="110" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">React</text>
  <text x="258" y="132" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">config/app.toml</text>
  <text x="576" y="132" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Paramètres → App</text>
  <text x="258" y="154" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">config/auth.toml</text>
  <text x="576" y="154" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">utilisateurs, rôles</text>
  <text x="258" y="176" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">tests/</text>
  <rect x="610" y="40" width="350" height="216" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="624" y="62" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">liberty-apps  (la configuration)</text>
  <text x="628" y="88" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">config/  ← LIBERTY_APPS_DIR</text>
  <text x="642" y="110" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="946" y="110" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Connecteurs, Pools</text>
  <text x="642" y="132" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="946" y="132" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <text x="642" y="154" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">screens.toml · menus.toml</text>
  <text x="946" y="154" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Écrans, Menus</text>
  <text x="642" y="176" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">dashboards.toml · charts.toml</text>
  <text x="642" y="198" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">actions.toml · theme.toml</text>
  <text x="628" y="220" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">plugins/</text>
  <text x="946" y="220" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">packages Python</text>
  <text x="642" y="242" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">nomaflow/jobs.toml</text>
  <text x="946" y="242" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">tâches Nomaflow</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le framework</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mis à jour, pas modifié</text>
  <line x1="210" y1="97.0" x2="240" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pjl-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La configuration</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrite par les Paramètres</text>
  <line x1="1000" y1="77.0" x2="960" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pjl-arrow)"/>
  <rect x="1000" y="220" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">plugins/</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à côté de config/</text>
  <line x1="1000" y1="237.0" x2="960" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pjl-arrow)"/>
</svg>

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
