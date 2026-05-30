---
title: Docker
description: "Déployer Liberty Next sous forme de pile Docker Compose — trois agencements (light SQLite, full de production à 5 services, Swarm) + deux overlays TLS + un overlay apps, le tout câblé par ./install.sh et la chaîne COMPOSE_FILE dans .env. ./install-apps.sh ajoute les apps sous licence. ./deploy-swarm.sh pilote Swarm. ./backup.sh prend un instantané de chaque volume nommé et du bind mount apps."
keywords: [Liberty Framework, Docker, Docker Compose, Docker Swarm, install.sh, install-apps.sh, deploy-swarm.sh, backup.sh, light, full, swarm, COMPOSE_FILE, --tag, --reset, --apps, --ssl, --license-key, Traefik, Postgres, pgAdmin, Portainer, ghcr.io]
---

# Docker

Le répertoire [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) du dépôt fournit tout le nécessaire :

| Fichiers | Rôle |
|---|---|
| `docker-compose.light.yml` | Conteneur unique + SQLite (agencement d'évaluation). |
| `docker-compose.full.yml` | 5 services derrière Traefik (agencement de production). |
| `docker-compose.swarm.yml` | L'agencement full, porté vers la grammaire Swarm. |
| `docker-compose.tls-letsencrypt.yml` | Overlay TLS — Let's Encrypt via challenge TLS-ALPN. |
| `docker-compose.tls-provided.yml` | Overlay TLS — certificats fournis par l'opérateur (CA d'entreprise, PKI interne). |
| `docker-compose.apps.yml` | Overlay des apps sous licence — bind-mount de `./apps` vers `/apps:ro` + positionne `LIBERTY_APPS_DIR`. |
| `install.sh` | Génère `.env`, récupère les images, démarre la pile, affiche les identifiants. |
| `install-apps.sh` | Matérialise la wheel des apps sous licence dans `./apps/` + câble l'overlay. |
| `deploy-swarm.sh` | Charge `.env` dans le shell + `docker stack deploy`. |
| `backup.sh` | Archive en tar chaque volume nommé Liberty + le bind mount apps dans un répertoire horodaté. |
| `.env.example` | Fichier d'environnement de référence documentant chaque variable prise en charge. |
| `traefik/dynamic/dynamic.yml` | Middlewares basic-auth + en-têtes de sécurité + redirection vers HTTPS. |

L'image se trouve à `ghcr.io/fblettner/liberty-next` (publique).

Cette page parcourt chaque agencement de bout en bout et détaille la **discipline COMPOSE_FILE** — la règle qui maintient chaque overlay actif sur toutes les commandes `docker compose`. Pour la vue d'ensemble conceptuelle et la comparaison des quatre formats, lire d'abord la [Vue d'ensemble](./overview.md).

---

## Prérequis

| Outil | Version |
|---|---|
| Docker Engine | ≥ 24 |
| Docker Compose | v2 (le plugin `docker compose`) — `install.sh` en vérifie la présence |
| Disque hôte | ~2 Go pour l'image + votre volume de BDD (light : ~50 Mo ; full : quelques Go une fois Postgres alimenté) |
| RAM hôte | ≥ 1 Go libre (light) ; ≥ 4 Go libre (full — Postgres `shared_buffers=2GB` par défaut) |

Un hôte Linux (Ubuntu / Debian / Rocky / Alpine) est la cible classique. Docker Desktop sur macOS / Windows convient pour des essais locaux.

---

## La discipline COMPOSE_FILE \{#compose-file-discipline\}

`install.sh` inscrit une ligne de ce type dans `.env` :

```env title=".env (extrait)"
COMPOSE_FILE=docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
```

Docker Compose lit cette variable d'environnement à chaque commande et **fusionne automatiquement chaque fichier listé**. Les opérateurs ne saisissent jamais `-f`.

| Commande (correcte) | Commande (incorrecte) |
|---|---|
| `docker compose pull` *(fusionne chaque overlay)* | `docker compose -f docker-compose.full.yml pull` *(abandonne les overlays TLS + apps)* |
| `docker compose up -d` | `docker compose -f docker-compose.full.yml up -d` |
| `docker compose logs -f liberty-next` | `docker compose -f docker-compose.full.yml logs -f liberty-next` |
| `docker compose down` | `docker compose -f docker-compose.full.yml down` |

**Règle** : après `./install.sh` (ou `./install-apps.sh`), une fois `COMPOSE_FILE` câblé, NE JAMAIS passer `-f` à la main. Passer `-f` écrase `COMPOSE_FILE` et abandonne silencieusement chaque overlay — le prochain `up -d` retirerait le montage apps et les routes TLS.

Pour une exécution ponctuelle qui cible réellement un fichier compose précis (debug, smoke test), employer `COMPOSE_FILE=docker-compose.full.yml docker compose <cmd>` afin de restreindre la surcharge à cette seule invocation.

---

## Agencement 1 — Light (`docker-compose.light.yml`) \{#light\}

Un seul conteneur, BDD framework en SQLite, pas de Postgres, pas de Traefik, pas de TLS. À utiliser pour un essai local, une démo mono-utilisateur ou toute installation qui n'a pas besoin d'un Postgres multi-utilisateurs.

### Installation

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh light                              # dernier tag
./install.sh light --tag 7.0.2                  # épingler une version précise
```

Déroulement :

| Étape | Description |
|---|---|
| 1. Vérification de volumes obsolètes. | Si `pg-data` / `pgadmin-data` / `liberty-data` proviennent d'une installation antérieure mais que `.env` est absent, le script refuse de continuer — l'init Postgres ne s'exécute que sur un volume neuf, donc réemployer d'anciens volumes avec de nouveaux secrets aboutirait à un échec d'authentification permanent. Relancer avec `--reset` pour purger et repartir à neuf, ou restaurer le `.env` précédent. |
| 2. Génère `.env` avec des secrets aléatoires (sans caractère `$`). | Premier lancement uniquement. |
| 3. Inscrit `COMPOSE_FILE=docker-compose.light.yml` dans `.env`. | Toute commande `docker compose` ultérieure s'en sert. |
| 4. `docker compose pull` | Récupère `ghcr.io/fblettner/liberty-next:<tag>`. |
| 5. `docker compose up -d` | Démarre le conteneur `liberty-next`. |
| 6. Attend jusqu'à 120 s le healthcheck du conteneur (`GET /info`). | Affiche `healthy` une fois prêt. |
| 7. Affiche l'URL du SPA et le mot de passe `admin` généré. | À lire une seule fois ; également présent dans `.env` en mode `0600`. |

Le fichier compose :

```yaml title="docker-compose.light.yml (extrait)"
services:
  liberty-next:
    image: ghcr.io/fblettner/liberty-next:${LIBERTY_IMAGE_TAG:-latest}
    container_name: liberty-next
    restart: unless-stopped
    ports:
      - "${LIBERTY_PORT:-8000}:8000"
    environment:
      LIBERTY_JWT_SECRET: "${LIBERTY_JWT_SECRET:?LIBERTY_JWT_SECRET is required}"
      LIBERTY_MASTER_KEY: "${LIBERTY_MASTER_KEY:?LIBERTY_MASTER_KEY is required}"
      LIBERTY_DB_URL: "${LIBERTY_DB_URL:-sqlite+aiosqlite:////data/liberty.db}"
      LIBERTY_ADMIN_PASSWORD: "${LIBERTY_ADMIN_PASSWORD:-}"
      LIBERTY_LICENSE_KEY: "${LIBERTY_LICENSE_KEY:-}"
      ANTHROPIC_API_KEY: "${ANTHROPIC_API_KEY:-}"
    volumes:
      - liberty-data:/data              # BDD SQLite + auth.toml
      - liberty-config:/app/config      # TOML édités par l'opérateur
    healthcheck:
      test: ["CMD", "curl", "-fsS", "http://127.0.0.1:8000/info"]
      interval: 30s
      timeout: 5s
      start_period: 40s
      retries: 3
```

### Ce que vous obtenez

Sur le port `8000` :

| Chemin | Description |
|---|---|
| `/` | SPA React — se connecter avec `admin` et le mot de passe affiché par `install.sh`. |
| `/docs` | Swagger UI. |
| `/redoc` | Référence d'API ReDoc. |
| `/openapi.json` | Spécification OpenAPI 3. |
| `/info` | Liveness public et compteurs (cible du healthcheck). |

Deux volumes nommés :

| Volume | Description | Stratégie de sauvegarde |
|---|---|---|
| `liberty-data` | BDD SQLite + `auth.toml` (empreintes Argon2 des mots de passe). | Capturé par `backup.sh`. |
| `liberty-config` | Tous les TOML édités par l'opérateur via *Settings → …*. | Idem. |

### Mise à niveau

```bash
./backup.sh                       # toujours commencer par un instantané
docker compose pull               # COMPOSE_FILE sélectionne les bons fichiers
docker compose up -d
```

L'entrypoint lance `liberty-admin init-db` à chaque démarrage — idempotent, ajoute les nouvelles tables framework apportées par une version récente, laisse les lignes existantes intactes. Pour épingler une version précise, définir `LIBERTY_IMAGE_TAG=7.0.2` dans `.env` (ou passer `--tag 7.0.2` à la première installation).

---

## Agencement 2 — Full (`docker-compose.full.yml`) \{#full\}

Cinq services derrière Traefik sur un seul hôte. L'agencement production / staging — et la cible canonique des bundles sous licence (Nomasx-1, Nomajde) puisqu'ils nécessitent un Postgres multi-utilisateurs.

### Installation

```bash
./install.sh full                                    # dernier tag, sans TLS
./install.sh full --tag 7.0.2                        # tag épinglé
./install.sh full --ssl letsencrypt \                # + Let's Encrypt
    --domain liberty.example.com --email ops@example.com
./install.sh full --apps ./liberty_apps-7.0.1.whl \  # + apps sous licence en une seule commande
    --license-key <jwt>
```

`install.sh` génère `.env` avec des secrets aléatoires pour **chaque** valeur exigée par la pile full — `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD`, `LIBERTY_ADMIN_PASSWORD` — puis récupère toutes les images et démarre la pile. Durée totale d'installation sur cache chaud : ~30 s.

### Ce que vous obtenez

Routage sur le port `80` (ou `443` une fois le TLS câblé) :

| Chemin | Service | Description |
|---|---|---|
| `/` *(catchall, priorité 1)* | liberty-next | SPA + API REST + admin + docs. |
| `/pgadmin` *(priorité 100)* | pgAdmin | Interface Postgres — se connecter avec `admin@example.com` et `PGADMIN_PASSWORD` issu de `.env`. |
| `/portainer` *(priorité 100)* | Portainer | Interface Docker. |
| `/traefik` *(priorité 1000)* | Tableau de bord Traefik | Protégé par basic-auth — par défaut `admin/admin`, **à changer dans `traefik/dynamic/dynamic.yml`**. |

Les cinq volumes nommés de l'agencement full :

| Volume | Description | Inclus dans `backup.sh` ? |
|---|---|---|
| `liberty-config` | TOML édités par l'opérateur. | Oui. |
| `pg-data` | Fichiers de la base Postgres. | Oui. |
| `pgadmin-data` | Enregistrements de serveurs pgAdmin et préférences. | Oui. |
| `portainer-data` | État de Portainer. | Oui. |
| `traefik-acme` | Stockage des certificats Let's Encrypt (monté sur `/acme` dans Traefik). | Non (récupérables à la demande). |

Quand l'overlay apps est actif, `./apps/` (un répertoire hôte, pas un volume Docker) est **également** sauvegardé par `backup.sh` — celui-ci lit `APPS_HOST_PATH` depuis `.env`.

### Réglages Postgres

Le Postgres fourni est livré avec des défauts type pgtune pour un hôte d'environ 8 Go :

```yaml title="docker-compose.full.yml (commande Postgres)"
command:
  - postgres
  - -c
  - shared_buffers=2GB
  - -c
  - work_mem=256MB
  - -c
  - maintenance_work_mem=128MB
  - -c
  - max_wal_size=8GB
  - -c
  - wal_level=minimal            # désactive la réplication / PITR — mono-instance + sauvegardes nocturnes
  - -c
  - max_wal_senders=0
  - -c
  - synchronous_commit=off       # ~1 s d'écritures peut être perdue sur un crash brutal — acceptable pour de l'ETL
  - -c
  - checkpoint_timeout=20min
  - -c
  - log_destination=stderr       # journaux vers stderr (visibles via docker compose logs pg)
```

| Taille de l'hôte | Ajustement |
|---|---|
| ≤ 4 Go de RAM | Diviser `shared_buffers` et `work_mem` par deux. |
| ~8 Go de RAM | Valeurs par défaut. |
| ≥ 16 Go de RAM | Monter `shared_buffers` à ~25 % de la RAM et `work_mem` à 512 Mo. |

Deux réglages échangent durabilité contre débit — à revoir avant des charges à durabilité stricte :

| Réglage | Compromis |
|---|---|
| `wal_level=minimal` + `max_wal_senders=0` | Désactive la réplication physique / le PITR / le decoding logique. Acceptable pour un mono-instance avec sauvegardes nocturnes ; passer à `wal_level=replica` pour un hot standby. |
| `synchronous_commit=off` | Un crash brutal peut perdre les dernières transactions validées (< 1 s d'écritures). Basculer sur `on` pour des charges financières. |

### Journalisation Postgres

Postgres écrit ses journaux sur **stderr** — consultables via `docker compose logs -f pg`. Le compose fourni rattache un driver de logs Docker `json-file` avec rotation (`max-size: 100m`, `max-file: 3`) afin que le fichier hôte `/var/lib/docker/containers/<id>/<id>-json.log` ne croisse pas indéfiniment.

Le fichier compose n'active PAS `logging_collector=on` + un volume nommé `pg-logs` — l'image postgres s'exécute sous l'UID 70 et un volume nommé fraîchement créé est monté en `root:root`, donc logging_collector planterait avec "Permission denied" dès la première écriture. Pour des journaux sur fichier, configurer un driver de logs côté hôte (`json-file`, `syslog`, `fluentd`) au niveau du démon Docker ou de chaque service.

### Exposition du port Postgres

`5432:5432` est mappé vers l'hôte par défaut — utile pour DBeaver depuis votre poste. Commenter le bloc `ports:` (ou positionner `POSTGRES_PORT=""` dans `.env`) pour garder Postgres en interne uniquement.

### Câbler le TLS

Deux modes, tous deux câblés par `install.sh --ssl`. À choisir à l'installation, ou à reconfigurer plus tard (la réexécution conserve les secrets de `.env` mais met à jour la configuration SSL et `COMPOSE_FILE`).

#### Let's Encrypt (hôtes de démonstration / accessibles depuis Internet)

```bash
./install.sh full --ssl letsencrypt \
    --domain liberty.example.com \
    --email ops@example.com
```

Prérequis :
- Le nom d'hôte résout vers cet hôte (enregistrement DNS A/AAAA).
- Les ports `:80` et `:443` sont joignables depuis Internet (le challenge TLS-ALPN en a besoin).

Ce que cela fait :
- Ajoute `docker-compose.tls-letsencrypt.yml` à `COMPOSE_FILE` dans `.env`.
- Positionne `LIBERTY_DOMAIN` et `ACME_EMAIL` dans `.env`.
- Traefik gère la demande et le renouvellement des certificats via le résolveur ACME. Les certificats persistent dans le volume nommé `traefik-acme` (monté sur `/acme` à l'intérieur de Traefik).

#### Certificats fournis par l'opérateur (hôtes d'entreprise / coupés du réseau)

```bash
./install.sh full --ssl provided \
    --domain liberty.internal.example.com \
    --cert-dir  /etc/pki/tls \
    --cert-file liberty.crt \
    --key-file  liberty.key
```

Prérequis :
- Un répertoire sur l'hôte contenant le certificat (`.crt` / `.pem`) et la clé privée. `install.sh` vérifie leur existence avant de continuer.

Ce que cela fait :
- Ajoute `docker-compose.tls-provided.yml` à `COMPOSE_FILE`.
- Positionne `CERT_HOST_PATH=<cert-dir>` dans `.env` — Traefik bind-mount ce répertoire sur `/etc/certs:ro`.
- Génère `traefik/dynamic/tls.yml` (gitignored) avec les noms de fichiers certificat + clé déjà inscrits. Traefik surveille ce fichier via `file.watch=true` — l'éditer pour ajouter d'autres certificats / règles SNI sans redémarrer.

#### Changer de mode plus tard

Réexécuter `./install.sh full --ssl <nouveau-mode> …` avec les mêmes secrets en place. Le script remplace l'overlay dans `COMPOSE_FILE`, réécrit `tls.yml` (ou le supprime pour le mode LE), et `docker compose up -d` prend en compte la nouvelle configuration.

#### Sans SSL (par défaut)

`./install.sh full` sans `--ssl` fonctionne en HTTP seul sur `:80`. Acceptable pour du dev local ou derrière un autre reverse proxy qui termine le TLS en amont.

Parcours TLS complet : [Traefik](./traefik.md).

### Ajouter les apps sous licence

Une seule commande à l'installation :

```bash
./install.sh full --apps ./liberty_apps-7.0.1.whl --license-key <jwt>
```

Ou en deux temps (base d'abord, apps ensuite) :

```bash
./install.sh full
./install-apps.sh ./liberty_apps-7.0.1.whl --license-key <jwt>
```

La wheel est matérialisée dans `./apps/` via un conteneur jetable `python:3.12-slim` — l'hôte n'a besoin ni de Python ni de pip. Procédure complète + flags : [Déployer des apps préfabriquées](./deploy-prebuilt-apps.md).

### Changer le mot de passe du tableau de bord Traefik

Le `admin/admin` par défaut suffit pour les 30 premières secondes passées sur le tableau de bord. À remplacer ensuite :

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<votre-mot-de-passe>"
# admin:$2y$05$abc...
```

Coller la ligne produite dans `release/traefik/dynamic/dynamic.yml` sous `http.middlewares.traefik-auth.basicAuth.users`. `file.watch=true` recharge la configuration dynamique en quelques secondes — aucun redémarrage de conteneur n'est nécessaire.

### Mise à niveau

```bash
./backup.sh                       # toujours commencer par un instantané
docker compose pull               # COMPOSE_FILE fusionne chaque overlay
docker compose up -d
```

Le même `init-db` idempotent s'exécute au démarrage de `liberty-next`. Épingler la version via `LIBERTY_IMAGE_TAG=7.0.2` dans `.env`.

---

## Agencement 3 — Docker Swarm (`docker-compose.swarm.yml`) \{#swarm\}

Mêmes cinq services que Full, adaptés à Swarm. Convient aux swarms mono-nœud (une VM, staging) et multi-nœuds (un manager + N workers).

### Pourquoi un fichier compose séparé

`docker stack deploy` ignore plusieurs constructions propres à Compose (`container_name`, `depends_on: condition: service_healthy`, `restart: unless-stopped`) et exige des éléments absents de Compose (clés `deploy.*`, `--providers.swarm`, réseaux overlay). Le compose swarm est l'agencement full, porté vers la grammaire Swarm.

### Installation

À faire une fois sur le manager :

```bash
docker swarm init                                    # mono-nœud
docker swarm init --advertise-addr <manager-ip>      # multi-nœuds
```

Puis :

```bash
cd liberty-next/release

./install.sh prepare              # génère uniquement .env (secrets aléatoires, sans caractère $)
./deploy-swarm.sh                 # déploie la pile — nom par défaut 'liberty'
```

`./install.sh prepare` écrit `.env` sans démarrer la moindre pile Compose (Swarm ne s'appuie pas sur le runtime Compose). `./deploy-swarm.sh` fait le reste :

| Étape | Description |
|---|---|
| **1. `set -a; . .env; set +a`** | Charge `.env` dans le shell — `docker stack deploy` ne dispose d'aucun flag `--env-file` et lit l'environnement depuis le shell. |
| **2. Vérification des variables requises** | `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD` doivent être non vides. |
| **3. `docker stack deploy --with-registry-auth --prune --resolve-image always`** | Déploie la pile. `--with-registry-auth` transmet les jetons d'auth du manager pour que les workers puissent récupérer les images privées ; `--prune` supprime les services absents du fichier compose. |
| **4. Attend jusqu'à 180 s la convergence des services** | Tous les services rapportent `1/1` répliques. |
| **5. Affiche le tableau de la pile et les URL** | Y compris les commandes de reset et de rollback propres au swarm. |

Autres invocations utiles :

```bash
./deploy-swarm.sh --stack mystack       # nom de pile personnalisé
./deploy-swarm.sh --status              # affiche l'état courant des services, sans déploiement
./deploy-swarm.sh --rm                  # démonte la pile (les volumes survivent)
```

### Question des variables d'environnement

Une fois `.env` chargé dans le shell, `docker stack deploy` substitue les `${VAR}` dans la spécification des services. Après substitution, les valeurs sont **figées dans le raft store du swarm** — modifier `.env` après le déploiement n'a aucun effet. Réexécuter `./deploy-swarm.sh` pour pousser de nouvelles valeurs.

Pour les secrets de longue durée, Docker Secrets est l'alternative native au swarm — chiffrés au repos dans le raft store et montés sous forme de fichiers (pas de variables d'environnement) dans les conteneurs cibles. Voir le bloc de commentaires en bas de `docker-compose.swarm.yml` pour la recette de migration vers les secrets.

### Flags `install.sh` vs Swarm

Les flags de `install.sh` réservés à Compose — `--apps`, `--ssl letsencrypt|provided` — ne sont PAS transposables à Swarm. Pour les opérateurs Swarm :

| Objectif | Méthode |
|---|---|
| Épingler le tag d'image | Positionner `LIBERTY_IMAGE_TAG=7.0.2` dans `.env` avant `./deploy-swarm.sh`. |
| Appliquer le TLS | Fusionner manuellement l'overlay TLS : `docker stack deploy -c docker-compose.swarm.yml -c docker-compose.tls-letsencrypt.yml liberty` (Swarm accepte `-c` répété). |
| Appliquer l'overlay apps | Idem : `-c docker-compose.swarm.yml -c docker-compose.apps.yml`, avec `APPS_HOST_PATH` défini dans l'environnement du shell. Matérialiser d'abord la wheel via `./install-apps.sh ./liberty_apps-*.whl --target ./apps` depuis un manager (le script saute le redémarrage Compose sur Swarm — le volume est déjà en place). |
| Mettre à jour un seul service | `docker service update --image ghcr.io/fblettner/liberty-next:0.2.0 liberty_liberty-next`. |
| Rollback | `docker service rollback liberty_liberty-next`. |

### Contraintes de placement

Le compose swarm épingle **chaque service à un manager** par défaut — convient pour les swarms mono-nœud et les petits clusters. Pour des déploiements plus larges :

| Service | Où l'épingler | Pourquoi |
|---|---|---|
| `pg` | Un nœud précis — `node.hostname == <votre-nœud-pg>` | Le volume doit être rattaché au même endroit. Plusieurs managers sans cette contrainte = Postgres est replanifié sur un nœud avec un volume vide. |
| `liberty-next` | Optionnellement `node.role == worker` | À déplacer vers des nœuds applicatifs dédiés s'ils existent. |
| `traefik` | Reste sur un manager | `--providers.swarm` lit le socket Docker, accessible uniquement aux managers. |

### Notes sur la multi-réplication

`replicas: 1` est la valeur par défaut pour chaque service. Les services à état (`pg`, `pgadmin`, `portainer`) doivent y rester — aucun ne possède de réplication intégrée. `liberty-next` conserve l'état Socket.IO en mémoire processus ; augmenter ses répliques sans backplane partagé (adaptateur Redis) donne aux clients une vue incohérente des tableaux de bord et flux de chat en direct. Le cookie sticky de Traefik aide mais ne suffit pas. **À mettre à l'échelle une fois Redis câblé.**

### Sauvegardes et restaurations

`backup.sh` fonctionne à l'identique — les noms de volumes (`liberty-config`, `pg-data`, …) sont les mêmes en Compose et en Swarm. À lancer depuis le manager.

---

## Sauvegardes — `backup.sh` \{#backups\}

Prend un instantané tar de chaque volume nommé Liberty + du bind mount apps (quand il est défini) dans un répertoire horodaté. Fonctionne pour Compose ET Swarm. Lancement possible pile en marche (Docker assure la cohérence en lecture) ; pour un instantané à froid parfait, arrêter la pile au préalable.

```bash
./backup.sh                              # → ./backups/AAAA-MM-JJ_HHMMSS/
./backup.sh /mnt/nas/liberty             # → /mnt/nas/liberty/AAAA-MM-JJ_HHMMSS/
./backup.sh --layout light               # sauvegarde uniquement les volumes de l'agencement light
./backup.sh --layout full                # sauvegarde uniquement les volumes de l'agencement full
./backup.sh --keep 30                    # supprime les sauvegardes de plus de 30 jours dans la destination
```

Chaque exécution produit un répertoire :

| Fichier | Quand il est présent |
|---|---|
| `liberty-config.tar.gz` | Toujours. |
| `liberty-data.tar.gz` | Agencement light (SQLite + auth.toml). |
| `pg-data.tar.gz`, `pgadmin-data.tar.gz`, `portainer-data.tar.gz` | Agencement full. |
| `liberty-apps.tar.gz` | Quand `APPS_HOST_PATH` est défini dans `.env` (overlay apps actif). |
| `.env.snapshot` | Toujours (mode `0600` — à retirer avant synchronisation hors site si les secrets ne doivent pas figurer dans la sauvegarde). |
| `docker-compose.*.yml` | Le(s) fichier(s) compose présent(s) dans le répertoire au moment de la sauvegarde. |

### Exécution hebdomadaire via cron

```cron
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/nas/liberty --keep 60
```

### Restaurer un volume

`backup.sh` affiche la commande exacte en cas de succès. La forme générale :

```bash
docker compose down                                 # DOIT être à l'arrêt — COMPOSE_FILE sélectionne les bons fichiers
docker volume rm pg-data                            # purge (sauter cette étape pour superposer)
docker run --rm -v pg-data:/data -v "$PWD/backups/<dir>:/backup" alpine \
    sh -c 'rm -rf /data/* /data/.[!.]* && tar xzf /backup/pg-data.tar.gz -C /data'
docker compose up -d
```

Pour Swarm : démonter d'abord la pile (`./deploy-swarm.sh --rm`), restaurer, puis redéployer.

### Restaurer le bind mount apps

Le répertoire apps est un dossier hôte, pas un volume Docker :

```bash
docker compose down                                 # pour que liberty-next ne retienne pas le montage
rm -rf ./apps                                       # ou le sauvegarder avant purge
tar xzf backups/<dir>/liberty-apps.tar.gz -C ./apps
docker compose up -d
```

---

## Récupération — flag `--reset` \{#reset\}

Quand une installation précédente a laissé des volumes obsolètes (`pg-data` initialisé avec un ancien mot de passe, puis `.env` perdu), le prochain `install.sh` générerait des secrets neufs qui ne correspondent plus — l'auth Postgres échoue à jamais, l'init Postgres ne s'exécutant que sur un volume neuf.

`install.sh` détecte ce cas et refuse de démarrer. Deux issues :

| Option | Description |
|---|---|
| **`./install.sh <agencement> --reset`** | `docker compose down -v` (purge chaque volume nommé) + suppression de `.env`, puis enchaîne sur une installation propre. À utiliser quand les anciennes données ne sont plus utiles. |
| **Restaurer le `.env` précédent** | Replacer l'ancien fichier `.env` dans `release/`, puis relancer `./install.sh`. Le script détecte le `.env` existant et se contente de démarrer la pile — les secrets correspondent aux volumes. |

Le `.env.snapshot` produit par `backup.sh` est le « `.env` précédent » canonique — à conserver à côté des instantanés de volumes.

---

## Opérations courantes \{#common-operations\}

| Besoin | Compose | Swarm |
|---|---|---|
| Réinitialiser le mot de passe admin | `docker compose exec liberty-next liberty-admin set-password admin <new>` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin set-password admin <new>` |
| Ajouter un autre superutilisateur | `docker compose exec liberty-next liberty-admin create-user <name> --superuser` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin create-user <name> --superuser` |
| Inspecter la clé de licence | `docker compose exec liberty-next liberty-license verify` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-license verify` |
| Suivre les journaux | `docker compose logs -f liberty-next` | `docker service logs -f liberty_liberty-next` |
| Ouvrir un shell | `docker compose exec liberty-next bash` | `docker exec -it $(docker ps -qf name=liberty_liberty-next) bash` |
| Lister les services | `docker compose ps` | `docker stack services liberty` |
| Recharger la configuration (changement TOML) | `POST /admin/reload` (le bouton de l'UI Settings le déclenche) | Idem. |

Voir `liberty-admin --help` / `liberty-license --help` pour la CLI complète.

---

## Dépannage

### Le conteneur sort immédiatement

```bash
docker compose logs liberty-next             # pas besoin de -f — COMPOSE_FILE sélectionne les bons fichiers
```

| Ligne de journal | Cause | Correction |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` | La variable d'environnement requise n'a pas été propagée. | `install.sh` aurait dû la générer — vérifier `.env`. |
| `Could not connect to database` *(agencement full)* | Postgres n'est pas encore en bonne santé. | Attendre 10 s — la clause `depends_on: condition: service_healthy` couvre normalement le cas ; vérifier `docker compose ps pg`. |
| `password authentication failed for user "liberty"` | Volume `pg-data` obsolète issu d'une installation antérieure ; `.env` contient désormais de nouveaux secrets. | `./install.sh full --reset` (purge + redémarre) ou restaurer l'ancien `.env`. |
| Le healthcheck ne passe jamais à healthy | Le conteneur est démarré mais `/info` ne répond pas. | Suivre les journaux — le plus souvent, un TOML de configuration sur le volume `liberty-config` comporte une erreur de syntaxe. |

### La page de connexion s'affiche, mais la connexion échoue

Le mot de passe de l'admin amorcé se trouve dans `.env` sous `LIBERTY_ADMIN_PASSWORD`. Réinitialisation :

```bash
docker compose exec liberty-next liberty-admin set-password admin <new>
```

### L'overlay apps a été ajouté mais les TOML ne sont pas chargés

Vérifier `COMPOSE_FILE` dans `.env` — il doit se terminer par `:docker-compose.apps.yml`. Relancer `./install-apps.sh <wheel>` si nécessaire. Une fois la variable positionnée, `docker compose up -d` prend en compte la modification.

### Le port 8000 / 80 est occupé

Light : `LIBERTY_PORT=8001` dans `.env`. Full : `TRAEFIK_HTTP_PORT=8080` dans `.env`. Puis `docker compose up -d`.

### Swarm : les services restent en `0/1`

```bash
docker stack ps liberty --no-trunc                 # affiche la décision de placement et l'erreur
docker service logs liberty_<service-name>         # suit les journaux du service
```

Le plus fréquent : une contrainte de placement insatisfaite (Postgres épinglé sur un nœud absent du swarm), ou le manager ne peut pas récupérer l'image (réseau / auth registry).

---

## La suite

- [Serveur Python](./python-server.md) — l'alternative sans Docker (pipx).
- [Traefik](./traefik.md) — câbler le TLS via le flag `--ssl`.
- [Portainer + pgAdmin](./portainer.md) — à quoi servent les outils visuels fournis.
- [Production](./production.md) — durcissement, OIDC, épinglage du scheduler.
- [Mise à niveau](./upgrading.md) — la procédure de mise à niveau (c'est `pull && up -d`).
- [Déployer des apps préfabriquées](./deploy-prebuilt-apps.md) — Nomasx-1 / Nomajde / Nomaflow par-dessus cette pile.
