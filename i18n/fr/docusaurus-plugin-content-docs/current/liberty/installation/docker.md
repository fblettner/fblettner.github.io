---
title: Docker
description: "Mettre en place Liberty Framework sous forme de pile Docker Compose — Liberty, PostgreSQL, Traefik en option. Fichier compose concret, variables d'environnement, points de montage et amorçage au premier démarrage."
keywords: [Liberty Framework, Docker, docker-compose, conteneur, PostgreSQL, montage, bootstrap, init-db]
---

# Docker

Le chemin Docker exécute le framework comme conteneur en face d'un conteneur PostgreSQL séparé, avec le dépôt `liberty-apps` monté en volume. Ajouter Traefik dans le même compose pour le TLS et un nom d'hôte lisible (traité à part dans [Traefik](./traefik.md)) ; piloter la pile visuellement avec [Portainer](./portainer.md).

Cette page déroule la pile minimale autonome — Liberty + PostgreSQL — sans TLS. Les ajouts de niveau production se superposent par-dessus.

---

## Prérequis

| Outil | Version |
|---|---|
| Docker Engine | ≥ 24 |
| Docker Compose | v2 (le plugin `docker compose`, pas le binaire `docker-compose` déprécié) |
| Disque hôte | ~2 Go pour l'image du framework + le volume de la BDD |
| RAM hôte | ≥ 1 Go libre pour le conteneur du framework + Postgres |

Un hôte Linux (Ubuntu / Debian / Rocky / Alpine) est la cible classique. Docker Desktop sur macOS / Windows convient pour des essais locaux.

---

## Étape 1 — Cloner le dépôt des apps

Le framework lit sa configuration dans `liberty-apps` :

```bash
git clone https://github.com/<your-org>/liberty-apps.git /opt/liberty/apps
```

Arborescence après le clone :

```
/opt/liberty/apps/
├── config/        ← the TOML files (LIBERTY_APPS_DIR points here)
│   ├── app.toml
│   ├── connectors.toml
│   ├── dictionary.toml
│   ├── screens.toml
│   ├── menus.toml
│   ├── dashboards.toml
│   ├── charts.toml
│   └── jobs.toml
└── plugins/       ← your Python plugins (importable at startup)
    └── <your-plugin>/
```

Pour une installation neuve sans dépôt d'apps existant, partir du [dépôt modèle vide](https://github.com/fblettner/liberty-apps-template) — cloner, renommer, pousser vers votre propre Git.

---

## Étape 2 — Écrire `docker-compose.yml`

Une pile minimale avec Liberty + PostgreSQL :

```yaml
# /opt/liberty/docker-compose.yml
services:

  postgres:
    image: postgres:16
    container_name: liberty-postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: liberty
      POSTGRES_USER: liberty
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U liberty -d liberty"]
      interval: 10s
      timeout: 5s
      retries: 5

  liberty:
    image: ghcr.io/fblettner/liberty-next:latest
    container_name: liberty
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      LIBERTY_APPS_DIR: /apps/config
      LIBERTY_MASTER_KEY: ${LIBERTY_MASTER_KEY}
      LIBERTY_LICENSE_KEY: ${LIBERTY_LICENSE_KEY:-}
      LIBERTY_JWT_SECRET: ${LIBERTY_JWT_SECRET}
      ANTHROPIC_API_KEY: ${ANTHROPIC_API_KEY:-}
      OIDC_CLIENT_SECRET: ${OIDC_CLIENT_SECRET:-}
      # Database URL — uses the postgres service above
      DATABASE_URL: postgresql+asyncpg://liberty:${POSTGRES_PASSWORD}@postgres:5432/liberty
    volumes:
      - /opt/liberty/apps:/apps:ro      # the apps repo, read-only
      - liberty-logs:/var/log/liberty
    ports:
      - "8000:8000"

volumes:
  postgres-data:
  liberty-logs:
```

Trois points à noter :

| Détail | Pourquoi |
|---|---|
| `:ro` sur le montage des apps. | Liberty n'écrit jamais dans le dépôt des apps — le passer en lecture seule évite qu'un processus incontrôlé corrompe la configuration. |
| `depends_on` avec `service_healthy`. | Liberty attend que PostgreSQL accepte les connexions avant de démarrer ; sans cela, la course à la première connexion échoue. |
| Secrets via les variables `${...}`. | Ne jamais inscrire un secret en dur dans `docker-compose.yml`. Utiliser le fichier `.env` ci-dessous. |

---

## Étape 3 — Écrire `.env`

Frère de `docker-compose.yml` :

```bash
# /opt/liberty/.env
POSTGRES_PASSWORD=replace-with-a-real-password
LIBERTY_MASTER_KEY=$(openssl rand -hex 32)
LIBERTY_JWT_SECRET=$(openssl rand -hex 32)
LIBERTY_LICENSE_KEY=
ANTHROPIC_API_KEY=
OIDC_CLIENT_SECRET=
```

Générer les deux valeurs aléatoires une seule fois et **les sauvegarder** — perdre la clé maîtresse, c'est perdre toutes les valeurs `ENC:` sur disque ; perdre le secret JWT invalide tous les jetons signés (pas catastrophique mais chaque utilisateur doit se reconnecter).

| Permission fichier | Propriétaire | Mode |
|---|---|---|
| `.env` | root (ou l'utilisateur Docker) | `0600` |

```bash
chmod 600 /opt/liberty/.env
```

---

## Étape 4 — Démarrer la pile

```bash
cd /opt/liberty
docker compose up -d
```

Cela télécharge les images, démarre PostgreSQL, attend qu'il soit en bonne santé, puis démarre Liberty. Après 10 à 30 secondes :

```bash
docker compose ps
# NAME              STATUS              PORTS
# liberty-postgres  Up 30s (healthy)    5432/tcp
# liberty           Up 20s              0.0.0.0:8000->8000/tcp

curl http://localhost:8000/health
# {"status":"ok"}
```

---

## Étape 5 — Amorcer le premier utilisateur

Le framework démarre sans aucun utilisateur — la connexion est impossible. Amorcer un superutilisateur :

```bash
docker compose exec liberty liberty-admin init-db --superuser admin
# Prompts for a password (8+ chars).
```

Désormais, `http://<host>:8000/` affiche l'écran de connexion — se connecter avec `admin`.

---

## Étape 6 — Confirmer l'installation

Un test rapide :

| Vérification | Comment |
|---|---|
| Liberty répond. | `curl http://<host>:8000/health` → `{"status":"ok"}`. |
| Le dossier des plugins a été trouvé. | `docker compose logs liberty | grep "liberty.plugins"` → `liberty.plugins importable from /apps/../plugins`. *(Ou aucune ligne s'il n'y a pas de dossier `plugins/`, ce qui est normal.)* |
| La connexion Postgres fonctionne. | `docker compose logs liberty | grep "ConnectorRegistry"` → affiche les connecteurs chargés. |
| La page de connexion s'affiche. | Ouvrir `http://<host>:8000/` dans un navigateur. |
| La connexion fonctionne. | Utiliser l'utilisateur `admin` de l'étape 5. |

En cas d'échec sur l'un de ces points, se rendre à la section [Dépannage](#troubleshooting) ci-dessous.

---

## Volumes — ce qu'il faut sauvegarder

La pile comporte deux volumes :

| Volume | Ce qu'il contient | Stratégie de sauvegarde |
|---|---|---|
| `postgres-data` | Les métadonnées de Liberty (authentification, jobs, verrous, historique d'exécution) et vos données opérationnelles **si vous pointez les pools opérationnels sur le même Postgres**. | `pg_dump` planifié. Restauration en rejouant le dump dans un Postgres neuf. |
| `liberty-logs` | Les journaux applicatifs. | Suivre avec `docker compose logs liberty`. Rétention longue durée : router vers votre backend de journalisation (Loki, ELK, Datadog). |

Le dépôt `liberty-apps` sur l'hôte est un checkout git — le sauvegarder avec git, pas avec Docker.

Le fichier `.env` qui porte la clé maîtresse et le secret JWT est votre **sauvegarde la plus critique**. Sans lui, impossible de restaurer les secrets à partir d'une sauvegarde de `postgres-data`.

---

## Mises à jour

Pour récupérer une image plus récente du framework :

```bash
cd /opt/liberty
docker compose pull liberty
docker compose up -d liberty
```

`pull` récupère la nouvelle image sans redémarrer. `up -d liberty` échange le conteneur (5 à 10 secondes d'indisponibilité). Postgres reste intact.

Pour la procédure de mise à niveau complète, migrations de BDD et retour arrière inclus, voir [Mise à niveau](./upgrading.md).

---

## Dépannage \{#troubleshooting\}

### Le conteneur Liberty sort immédiatement

```bash
docker compose logs liberty
```

Causes fréquentes :

| Ligne de journal | Cause | Correction |
|---|---|---|
| `LIBERTY_APPS_DIR not set` | La variable d'environnement n'a pas été propagée. | Vérifier le bloc `environment:` dans `docker-compose.yml`. |
| `Could not connect to database` | Postgres n'est pas encore en bonne santé, ou `DATABASE_URL` est faux. | Vérifier `docker compose ps` ; vérifier que le mot de passe correspond entre Postgres et la variable. |
| `Plugins directory not found` | Le montage des apps est absent ou vide. | Vérifier que `/opt/liberty/apps/plugins/` existe ; vérifier le chemin de montage dans compose. |
| `Master key not set` alors que vous avez des valeurs `ENC:` | La variable de la clé maîtresse est vide. | Renseigner `LIBERTY_MASTER_KEY` dans `.env`. |

### La page de connexion s'affiche, mais la connexion échoue

Le magasin d'utilisateurs du framework est vide tant que `liberty-admin init-db` n'a pas été exécuté. Le relancer.

### Les modifications du dépôt des apps ne sont pas prises en compte

Le framework prend en compte les éditions de `.toml` via *Paramètres → Recharger* dans l'UI (ou `POST /admin/reload`). Pour les modifications de plugins Python, redémarrer :

```bash
docker compose restart liberty
```

### Le port 8000 est occupé

Changer le port côté hôte dans `docker-compose.yml` :

```yaml
ports:
  - "8001:8000"   # external:internal
```

Le conteneur continue d'écouter sur 8000 en interne ; seul le port de l'hôte change.

---

## La suite

- [Traefik](./traefik.md) — ajouter le TLS et un nom d'hôte lisible.
- [Portainer](./portainer.md) — gestion visuelle de la pile.
- [Production](./production.md) — multi-réplicas, routage des journaux, durcissement.
- [Mise à niveau](./upgrading.md) — la procédure de mise à niveau.
