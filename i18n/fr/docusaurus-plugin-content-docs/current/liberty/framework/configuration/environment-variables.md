---
title: Variables d'environnement
description: "Chaque variable d'environnement LIBERTY_* documentée — URL de base de données, clé de signature JWT, clé maître de chiffrement, clé de licence, clé IA, répertoire d'applications, paramètres OIDC — avec le fichier qu'elle surcharge et la valeur par défaut appliquée quand elle n'est pas définie."
keywords: [Liberty Framework, variables d'environnement, LIBERTY_DB_URL, LIBERTY_JWT_SECRET, LIBERTY_MASTER_KEY, LIBERTY_LICENSE_KEY, LIBERTY_APPS_DIR, ANTHROPIC_API_KEY, OIDC, configuration]
---

# Variables d'environnement

Le framework lit chaque secret et la plupart des paramètres dépendants de l'emplacement depuis l'**environnement du processus**, pas depuis le disque. `app.toml` référence ces variables via l'interpolation `${NAME}` afin que le même fichier puisse être versionné sans fuite d'identifiants.

Cette page liste chaque variable que le framework consulte, ce qu'elle surcharge, et ce qu'il se passe quand elle est laissée non définie.

---

## Ordre de lecture

Chaque variable traverse trois couches :

1. **Environnement du processus** — la plus haute priorité. Tout ce qui est exporté dans le shell, l'unité systemd ou le manifeste de conteneur gagne.
2. **Fichier `.env`** *(optionnel)* — quand présent à `liberty-next/.env`, il est chargé par `start.sh` avant le démarrage du serveur. Utile pour les machines de développeurs ; jamais utilisé en production.
3. **Défaut** — appliqué par `app.toml` (`${NAME:-default}`) ou codé en dur dans le framework. Documenté dans la table ci-dessous.

---

## Variables

### `LIBERTY_APPS_DIR`

| Effet | Chemin du répertoire `config/` de `liberty-apps`. Quand défini, chaque TOML par section est chargé depuis `${LIBERTY_APPS_DIR}/<name>.toml`. Le dossier de plugins `${LIBERTY_APPS_DIR}/../plugins/` est ajouté à `sys.path`. |
| --- | --- |
| Défaut | non défini → les TOML par section sont lus depuis `liberty-next/config/` |
| Exemple | `export LIBERTY_APPS_DIR="$HOME/work/liberty-apps/config"` |

### `LIBERTY_DB_URL`

| Effet | URL asynchrone SQLAlchemy pour le pool `default`. Lue depuis `[default_pool] url` dans `app.toml`, qui vaut par défaut `${LIBERTY_DB_URL:-sqlite+aiosqlite:///liberty.db}`. |
| --- | --- |
| Défaut | `sqlite+aiosqlite:///liberty.db` (fichier SQLite local) |
| PostgreSQL | `postgresql+asyncpg://user:pass@host:5432/db` |
| Oracle (mode thin) | `oracle+oracledb://user:pass@host:1521/?service_name=PDB1` |

Le pool `default` est utilisé par le backend d'auth (quand `[auth] backend = "db"`), par les tables d'historique d'exécution de Nomaflow et par tout connecteur qui ne nomme pas explicitement un pool.

### `LIBERTY_JWT_SECRET`

| Effet | Clé symétrique utilisée pour signer les tokens d'accès et de rafraîchissement (HS256). |
| --- | --- |
| Défaut | non défini → une clé **éphémère** est générée par processus. Chaque redémarrage invalide tous les tokens. |
| Longueur | Au moins 32 octets aléatoires. Générer avec `openssl rand -hex 32`. |

Les installations en production **doivent** définir cette variable. Deux réplicas qui partagent le même secret peuvent émettre et vérifier les tokens l'un de l'autre ; des réplicas avec des secrets différents ne le peuvent pas.

### `LIBERTY_MASTER_KEY`

| Effet | Clé AES-256-GCM utilisée pour déchiffrer chaque bloc `ENC:` trouvé dans les TOML par section — mots de passe de pool, tokens API, client secret OIDC, etc. |
| --- | --- |
| Défaut | non défini → les blocs `ENC:` ne peuvent pas être déchiffrés ; les connecteurs qui en dépendent refusent de se charger et l'UI des Paramètres les signale en rouge. |
| Longueur | 32 octets, encodés en hex ou base64. Générer avec `liberty-crypto genkey`. |

Voir [Chiffrement et secrets](./encryption-secrets.md) pour le format de chiffrement et la procédure de rotation.

### `LIBERTY_LICENSE_KEY`

| Effet | JWT signé en RS256 qui déverrouille les connecteurs marqués `licensed = true`. Chargé dans `[license] key` au démarrage. |
| --- | --- |
| Défaut | non défini → seul le sous-ensemble open source des connecteurs est disponible. L'UI des Paramètres affiche le reste comme *Sous licence*. |
| Format | Un long JWT — voir [Clé de licence](../auth/license-key.md) pour la liste des claims. |

### `ANTHROPIC_API_KEY`

| Effet | Clé API utilisée par l'assistant IA. Chargée dans `[ai] api_key`. |
| --- | --- |
| Défaut | non défini → la page `/chat` affiche un message « configurer une clé API pour activer l'assistant ». |
| Où en obtenir une | https://console.anthropic.com → *API keys*. |

### `LIBERTY_OIDC_ISSUER` / `LIBERTY_OIDC_CLIENT_ID` / `LIBERTY_OIDC_CLIENT_SECRET` / `LIBERTY_OIDC_REDIRECT`

| Effet | Les quatre valeurs OIDC référencées depuis `[auth.oidc]`. `LIBERTY_OIDC_CLIENT_SECRET` peut aussi être un bloc `ENC:` dans `app.toml` plutôt qu'une variable d'environnement. |
| --- | --- |
| Défaut | non défini → `[auth.oidc] enabled = false` et le bouton *Se connecter avec SSO* est caché. |

Voir [Authentification → OIDC](../auth/authentication.md#oidc) pour la mise en place complète avec Authentik, Keycloak et Azure AD.

### `HOST`

| Effet | Adresse d'écoute du serveur FastAPI. |
| --- | --- |
| Défaut | `127.0.0.1` (localhost uniquement). Mettre `0.0.0.0` pour accepter les connexions depuis le réseau. |

### `PORT`

| Effet | Port TCP du serveur FastAPI. |
| --- | --- |
| Défaut | `8000`. |

### `VENV`

| Effet | Chemin du virtualenv Python utilisé par `start.sh`. |
| --- | --- |
| Défaut | `.venv` (à côté de `start.sh`). |

### `LIBERTY_DEBUG_CONFIG`

| Effet | Quand mis à `1`, la configuration résolue est affichée au démarrage avec les valeurs secrètes masquées. Utile quand un paramètre ne prend pas effet et que la couche env est suspecte. |
| --- | --- |
| Défaut | non défini → pas d'affichage de debug. |

### `LIBERTY_LOG_LEVEL`

| Effet | Niveau de journalisation — `DEBUG`, `INFO`, `WARNING`, `ERROR`. |
| --- | --- |
| Défaut | `INFO`. |

### `LIBERTY_LOG_JSON`

| Effet | Quand mis à `1`, chaque ligne de log est émise comme un objet JSON — requis pour l'ingestion par Loki, Datadog, Splunk, etc. |
| --- | --- |
| Défaut | non défini → texte brut lisible par un humain sur stdout. |

---

## Cycle de vie des variables

| Quand la variable est lue | Variables |
|---|---|
| **Une seule fois au démarrage** | Toutes. L'interpolation de `${NAME}` se produit quand `app.toml` est chargé. |
| **Re-lue sur `POST /admin/reload`** | Aucune — un rechargement de configuration re-parse les TOML par section mais ne **relit pas** l'environnement. Pour récupérer une nouvelle valeur, redémarrer le processus. |

C'est la raison pour laquelle les secrets soumis à rotation (clé de signature JWT, clé maître, clé de licence) demandent un redémarrage roulant, pas un rechargement à chaud.

---

## En pratique

Une unité **systemd** minimale pour une installation en production :

```ini
[Service]
Environment=LIBERTY_APPS_DIR=/opt/liberty-apps/config
Environment=LIBERTY_DB_URL=postgresql+asyncpg://liberty:%i@db.internal/liberty
EnvironmentFile=/etc/liberty/secrets.env
WorkingDirectory=/opt/liberty-next
ExecStart=/opt/liberty-next/.venv/bin/uvicorn liberty.main:app --host 0.0.0.0 --port 8000
Restart=on-failure
```

`/etc/liberty/secrets.env` (mode `0600`, propriété de root) :

```env
LIBERTY_JWT_SECRET=...
LIBERTY_MASTER_KEY=...
LIBERTY_LICENSE_KEY=...
ANTHROPIC_API_KEY=...
LIBERTY_OIDC_CLIENT_SECRET=...
```

Le framework s'intéresse à trois catégories : **où se trouve la configuration** (`LIBERTY_APPS_DIR`, `LIBERTY_DB_URL`), **comment émettre et vérifier l'identité** (`LIBERTY_JWT_SECRET`, le quadruplet OIDC, `LIBERTY_LICENSE_KEY`) et **comment déchiffrer le reste** (`LIBERTY_MASTER_KEY`, `ANTHROPIC_API_KEY`). Tout le reste a une valeur par défaut sensée.

---

## Pour aller plus loin

- [Référence `app.toml`](./app-toml.md) — chaque clé expliquée.
- [Chiffrement et secrets](./encryption-secrets.md) — comment `LIBERTY_MASTER_KEY` est utilisée.
- [Déploiement → Exécution en production](../deployment/running-production.md) — les variantes systemd / Docker / Kubernetes en détail.
