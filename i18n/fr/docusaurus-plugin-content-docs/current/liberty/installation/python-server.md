---
title: Installation
description: "Installer Liberty Framework depuis les sources : cloner liberty-next + liberty-apps, créer l'environnement virtuel Python, construire le frontend React, initialiser le magasin d'authentification et démarrer le serveur sur le port 8000."
keywords: [Liberty Framework, installation, mise en place, FastAPI, React, Vite, Python 3.12, virtualenv, start.sh, init-db, init-config, LIBERTY_APPS_DIR, low-code, PostgreSQL, Oracle]
---

# Installation

Liberty Framework est livré sous forme de **deux dépôts sources** qui coexistent côte à côte :

- **`liberty-next`** — le binaire ouvert du framework : backend FastAPI + frontend React 19, servis sur un seul port.
- **`liberty-apps`** — le dépôt de configuration spécifique à l'installation : pools, connecteurs, dictionnaire, écrans, menus, tableaux de bord, graphiques, jobs.

Le framework lit sa configuration depuis le dépôt `liberty-apps` via la variable d'environnement `LIBERTY_APPS_DIR`. Deux dépôts, un serveur, un port. Aucun Docker requis pour le développement ; le déploiement en production est documenté dans [Déploiement → Exécution en production](./production.md).

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '24px', margin: '24px 0', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), rgba(74,158,255,0))'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', fontSize: '13px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Prérequis</div>
      <div>Python 3.12 · Node.js ≥ 20 · npm · git</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Base de données par défaut</div>
      <div>SQLite (<code>liberty.db</code>) — bascule vers PostgreSQL ou Oracle via env</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Port par défaut</div>
      <div>http://127.0.0.1:8000 (frontend + API)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Durée du premier lancement</div>
      <div>~3 minutes du clone à une connexion admin opérationnelle</div>
    </div>
  </div>
</div>

---

## Étape 1 — Cloner les deux dépôts

```bash
mkdir -p ~/work && cd ~/work
git clone <liberty-next-url> liberty-next
git clone <liberty-apps-url> liberty-apps
```

La disposition côte à côte est la convention recommandée — chaque exemple de la documentation l'utilise :

```text
~/work/
├── liberty-next/    ← binaire du framework (open)
└── liberty-apps/    ← votre configuration (spécifique à l'installation)
```

Le framework fonctionne aussi sans dépôt `liberty-apps` distinct — les fichiers TOML par section sont alors lus depuis `liberty-next/config/`. La plupart des installations en production les conservent séparés afin que le framework puisse être mis à jour indépendamment de la configuration.

---

## Étape 2 — Environnement virtuel Python

Le backend est Python 3.12 + FastAPI. Créez un environnement virtuel sous `liberty-next/.venv` :

```bash
cd liberty-next
python3.12 -m venv .venv
.venv/bin/pip install -e ".[dev]"
```

`.[dev]` installe le framework en mode éditable, plus les extras de test et d'outillage. La suite de tests complète (≥ 335 tests) s'exécute avec :

```bash
.venv/bin/pytest -v
```

---

## Étape 3 — Fichiers de configuration

Initialisez les fichiers TOML par section à partir des modèles fournis :

```bash
./start.sh init-config
```

Cette commande copie chaque `config/<name>.toml.example` vers `config/<name>.toml` quand le fichier réel est absent — pour `connectors`, `dictionary`, `menus`, `screens`, `charts`, `dashboards`. Les modèles sont versionnés ; les fichiers réels ne le sont pas (contenu spécifique à l'installation ou sous licence).

Pour pointer le framework vers votre dépôt `liberty-apps` au lieu du `config/` local, exportez :

```bash
export LIBERTY_APPS_DIR="$HOME/work/liberty-apps/config"
```

Avec `LIBERTY_APPS_DIR` défini, `init-config` ne fait rien — les TOML par section sont lus depuis le dépôt apps, pas depuis les modèles locaux. Les fichiers `config/auth.toml` et `config/app.toml` restent spécifiques à l'installation dans les deux cas.

Voir [Structure du projet](../framework/getting-started/project-layout.md) pour la carte complète des répertoires.

---

## Étape 4 — Initialiser le magasin d'authentification

À exécuter **une seule fois** sur une installation neuve pour créer le magasin d'authentification et un utilisateur `admin` :

```bash
./start.sh init-db
```

La commande choisit son backend depuis `[auth] backend` dans `config/app.toml` :

| Backend | Effet | Quand l'utiliser |
|---|---|---|
| `toml` *(défaut)* | Crée `config/auth.toml` avec un mot de passe `admin` fraîchement haché en Argon2 (affiché une seule fois). | Installation de dev sur un seul hôte — pas de base externe nécessaire. |
| `db` | Crée les tables `ly2_users` / `ly2_roles` / `ly2_permissions` sur le pool configuré et insère le même `admin`. | Installation en production — survit aux reconstructions de conteneurs et partage la base d'utilisateurs entre réplicas. |

Le mot de passe affiché n'est montré **qu'une seule fois** sur stdout. Notez-le, ou réinitialisez-le ensuite avec `liberty-admin set-password admin <nouveau>`. Voir [Authentification](../framework/build/secure/sign-in.md) pour la matrice complète des backends.

---

## Étape 5 — Démarrer le serveur

```bash
./start.sh
```

Le wrapper :

1. Construit le frontend React dans `frontend/dist/` si le build est obsolète (ou manquant).
2. Lit `config/app.toml` et démarre FastAPI sur `127.0.0.1:8000`.
3. Monte la SPA sur `/` et l'API REST sous `/api/*` et `/admin/*` sur le même port.

Ouvrez `http://127.0.0.1:8000`, connectez-vous comme `admin` avec le mot de passe de l'étape 4 — le catalogue des connecteurs s'affiche comme page d'accueil.

### Autres modes de lancement

| Commande | Objectif |
|---|---|
| `./start.sh dev` | Identique à `./start.sh` mais avec rechargement automatique du backend — idéal lors de l'itération sur du code Python. |
| `./start.sh api` | Backend seul, sans build frontend. À coupler avec `./start.sh frontend` pour travailler en HMR. |
| `./start.sh api dev` | Backend seul, rechargement automatique. |
| `./start.sh frontend` | Serveur de dev Vite sur `:5173` (HMR), proxifie `/api/*` et `/admin/*` vers `:8000`. |
| `./start.sh build` | Build frontend uniquement — pas de serveur. |
| `./start.sh init-config` | Ré-initialise les fichiers TOML par section manquants. |
| `./start.sh init-db` | Ré-initialise le magasin d'authentification (relançable sans risque — les utilisateurs existants sont conservés). |
| `./start.sh help` | Liste complète des commandes. |

### Surcharges via l'environnement

| Variable | Effet |
|---|---|
| `HOST` / `PORT` | Adresse d'écoute et port (défauts `127.0.0.1` / `8000`). |
| `VENV` | Chemin du virtualenv (défaut `.venv`). |
| `LIBERTY_APPS_DIR` | Les TOML par section se trouvent dans ce répertoire au lieu de `liberty-next/config/`. |
| `LIBERTY_DB_URL` | URL du pool par défaut — par défaut SQLite (`sqlite+aiosqlite:///liberty.db`). |
| `LIBERTY_JWT_SECRET` | Clé de signature JWT. Non définie = clé éphémère (les tokens meurent au redémarrage). |
| `LIBERTY_MASTER_KEY` | Clé AES-256-GCM utilisée pour déchiffrer les blocs `ENC:` dans les TOML — voir [Chiffrement et secrets](../framework/configuration/encryption-secrets.md). |
| `LIBERTY_LICENSE_KEY` | JWT RS256 qui déverrouille les produits éditeur packagés (Nomasx-1, Nomajde, NomaUBL …) — voir [Clé de licence](../framework/build/secure/license-key.md). |
| `ANTHROPIC_API_KEY` | Active l'[assistant IA](../framework/ai-assistant.md). |

Toutes les variables sont documentées une à une dans [Variables d'environnement](../framework/configuration/environment-variables.md).

---

## Vérifier l'installation

| Contrôle | Comment |
|---|---|
| Serveur en marche | `curl -s http://127.0.0.1:8000/api/health` retourne `{"ok":true}`. |
| OpenAPI charge | Ouvrir `http://127.0.0.1:8000/docs` — la surface REST complète est navigable. |
| Connecteurs chargés | Ouvrir le catalogue des connecteurs sur `/` — au moins le pool SQLite par défaut est listé. |
| L'admin peut se connecter | Se connecter avec les identifiants de l'étape 4 — le lien Paramètres apparaît dans l'en-tête. |
| Assistant IA *(optionnel)* | Avec `ANTHROPIC_API_KEY` défini, ouvrir `/chat` — le champ de saisie est activé. |

---

## Pour aller plus loin

- Parcourez votre première app avec [Démarrage → Première app](../framework/getting-started/first-app.md) — un pool, une requête, un écran et une entrée de menu, de bout en bout.
- Lisez [Structure du projet](../framework/getting-started/project-layout.md) pour la cartographie des fichiers de `liberty-apps`.
- Passez à [Configuration → UI des Paramètres](../framework/configuration/settings-ui.md) une fois que tout fonctionne depuis les éditeurs in-app.
