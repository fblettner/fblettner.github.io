---
title: Docker
description: "Déployer Liberty Next sous forme de pile Docker Compose — trois agencements prêts à l'emploi (light SQLite, full de production à 5 services, Docker Swarm) livrés dans le répertoire release/ du dépôt. install.sh pilote Compose, deploy-swarm.sh pilote Swarm, backup.sh prend un instantané de chaque volume nommé."
keywords: [Liberty Framework, Docker, Docker Compose, Docker Swarm, install.sh, deploy-swarm.sh, backup.sh, light, full, swarm, Traefik, Postgres, pgAdmin, Portainer, ghcr.io, healthcheck]
---

# Docker

Le répertoire [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) du dépôt fournit tout le nécessaire : trois fichiers compose (`docker-compose.light.yml`, `docker-compose.full.yml`, `docker-compose.swarm.yml`), trois scripts d'assistance (`install.sh`, `deploy-swarm.sh`, `backup.sh`) et un `.env.example` qui documente chaque variable. L'image se trouve à `ghcr.io/fblettner/liberty-next` (publique).

Cette page parcourt chaque agencement de bout en bout. Pour la vue d'ensemble conceptuelle et la comparaison des quatre formats, lire d'abord la [Vue d'ensemble](./overview.md).

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

## Agencement 1 — Light (`docker-compose.light.yml`) \{#light\}

Un seul conteneur, BDD framework en SQLite, pas de Postgres, pas de Traefik, pas de TLS. À utiliser pour un essai local, une démo mono-utilisateur ou toute installation qui n'a pas besoin des connecteurs sous licence (Nomasx-1 / Nomajde / NomaUBL exigent tous Postgres — passer à [Full](#full) dans ce cas).

### Installation

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh light
```

Déroulement :

| Étape | Description |
|---|---|
| 1. Génère `.env` avec des secrets aléatoires (sans caractère `$`). | Ignorée si `.env` existe déjà. |
| 2. `docker compose -f docker-compose.light.yml pull` | Récupère `ghcr.io/fblettner/liberty-next:latest`. |
| 3. `docker compose -f docker-compose.light.yml up -d` | Démarre le conteneur `liberty-next`. |
| 4. Attend jusqu'à 120 s le healthcheck du conteneur (`GET /info`). | Affiche `healthy` une fois prêt. |
| 5. Affiche l'URL du SPA et le mot de passe `admin` généré. | À lire une seule fois ; également présent dans `.env` en mode `0600`. |

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
./backup.sh                                       # toujours commencer par un instantané
docker compose -f docker-compose.light.yml pull
docker compose -f docker-compose.light.yml up -d
```

L'entrypoint lance `liberty-admin init-db` à chaque démarrage — idempotent, ajoute les nouvelles tables framework apportées par une version récente, laisse les lignes existantes intactes. Pour épingler une version précise, définir `LIBERTY_IMAGE_TAG=0.2.0` dans `.env`.

---

## Agencement 2 — Full (`docker-compose.full.yml`) \{#full\}

Cinq services derrière Traefik sur un seul hôte. L'agencement production / staging — et celui visé par les bundles sous licence (Nomasx-1, Nomajde, NomaUBL).

### Installation

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh full
```

`install.sh` génère `.env` avec des secrets aléatoires pour **chaque** valeur exigée par la pile full — `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD`, `LIBERTY_ADMIN_PASSWORD` — puis récupère toutes les images et démarre la pile. Durée totale d'installation sur cache chaud : ~30 s.

### Ce que vous obtenez

Routage sur le port `80` (ou `443` une fois le TLS câblé) :

| Chemin | Service | Description |
|---|---|---|
| `/` *(catchall, priorité 1)* | liberty-next | SPA + API REST + admin + docs. |
| `/pgadmin` *(priorité 100)* | pgAdmin | Interface Postgres — se connecter avec `admin@example.com` et `PGADMIN_PASSWORD` issu de `.env`. |
| `/portainer` *(priorité 100)* | Portainer | Interface Docker. |
| `/traefik` *(priorité 1000)* | Tableau de bord Traefik | Protégé par basic-auth — par défaut `admin/admin`, **à changer** dans `traefik/dynamic/dynamic.yml`. |

Les six volumes nommés de l'agencement full :

| Volume | Description | Inclus dans `backup.sh` ? |
|---|---|---|
| `liberty-config` | TOML édités par l'opérateur. | Oui. |
| `pg-data` | Fichiers de la base Postgres. | Oui. |
| `pg-logs` | Fichiers de journaux Postgres avec rotation. | Non (régénérés au démarrage). |
| `pgadmin-data` | Enregistrements de serveurs pgAdmin et préférences. | Oui. |
| `portainer-data` | État de Portainer. | Oui. |
| `traefik-acme` | Stockage des certificats Let's Encrypt (quand le TLS est câblé). | Non (récupérables). |

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
  - logging_collector=on
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

Le port Postgres (`5432`) est publié sur l'hôte par défaut — utile pour DBeaver depuis votre poste. Commenter le bloc `ports:` pour garder Postgres en interne uniquement.

### Câbler le TLS (Let's Encrypt)

1. Pointer votre domaine vers le serveur.
2. Dans `.env`, définir :
   ```
   LIBERTY_DOMAIN=liberty.example.com
   ACME_EMAIL=ops@example.com
   ```
3. Dans `docker-compose.full.yml`, décommenter l'entrypoint `websecure`, les flags `certificatesresolvers.le.*` et le mappage de port `:443`.
4. Ajouter `traefik.http.routers.<name>.tls.certresolver: "le"` à chaque label de routeur.
5. `docker compose -f docker-compose.full.yml up -d`. Traefik demande les certificats au premier accès.

Parcours TLS complet : [Traefik](./traefik.md).

### Changer le mot de passe du tableau de bord Traefik

Le `admin/admin` par défaut suffit pour les 30 premières secondes passées sur le tableau de bord. À remplacer ensuite :

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<votre-mot-de-passe>"
# admin:$2y$05$abc...
```

Coller la ligne produite dans `release/traefik/dynamic/dynamic.yml` sous `http.middlewares.traefik-auth.basicAuth.users`. `file.watch=true` recharge la configuration dynamique en quelques secondes — aucun redémarrage de conteneur nécessaire.

### Mise à niveau

```bash
./backup.sh                                  # toujours commencer par un instantané
docker compose -f docker-compose.full.yml pull
docker compose -f docker-compose.full.yml up -d
```

Le même `init-db` idempotent s'exécute au démarrage de liberty-next. Épingler la version via `LIBERTY_IMAGE_TAG=0.2.0` dans `.env`.

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

Ce que fait `deploy-swarm.sh` :

| Étape | Description |
|---|---|
| **1. `set -a; . .env; set +a`** | Charge `.env` dans le shell — `docker stack deploy` ne dispose d'aucun flag `--env-file` et lit l'environnement depuis le shell. |
| **2. Vérification des variables requises** | `LIBERTY_JWT_SECRET`, `LIBERTY_MASTER_KEY`, `POSTGRES_PASSWORD`, `PGADMIN_PASSWORD` doivent être non vides. |
| **3. `docker stack deploy --with-registry-auth --prune --resolve-image always`** | Déploie la pile. `--with-registry-auth` transmet les jetons d'auth du manager pour que les workers puissent récupérer les images privées ; `--prune` supprime les services absents du fichier compose. |
| **4. Attend jusqu'à 180 s la convergence des services** | Tous les services rapportent `1/1` répliques. |
| **5. Affiche le tableau de la pile et les URL** | Y compris la commande de reset propre au swarm et la commande de rollback. |

Autres invocations utiles :

```bash
./deploy-swarm.sh --stack mystack       # nom de pile personnalisé
./deploy-swarm.sh --status              # affiche l'état courant des services, sans déploiement
./deploy-swarm.sh --rm                  # démonte la pile (les volumes survivent)
```

### Question des variables d'environnement

Une fois `.env` chargé dans le shell, `docker stack deploy` substitue les `${VAR}` dans la spécification des services. Après substitution, les valeurs sont **figées dans le raft store du swarm** — modifier `.env` après le déploiement n'a aucun effet. Réexécuter `./deploy-swarm.sh` pour pousser de nouvelles valeurs.

Pour les secrets de longue durée, Docker Secrets est l'alternative native au swarm — chiffrés au repos dans le raft store et montés sous forme de fichiers (pas de variables d'environnement) dans les conteneurs cibles. Voir le bloc de commentaires en bas de `docker-compose.swarm.yml` pour la recette de migration vers les secrets.

### Mettre à jour un seul service vers un nouveau tag d'image

`docker stack deploy` réconcilie la spécification avec l'état courant — sa réexécution EST le mécanisme de mise à jour. Pour ne mettre à jour qu'un seul service sans toucher aux autres :

```bash
docker service update --image ghcr.io/fblettner/liberty-next:0.2.0 liberty_liberty-next
docker service rollback liberty_liberty-next       # si quelque chose cloche
```

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

Prend un instantané tar de chaque volume nommé Liberty dans un répertoire horodaté. Fonctionne pour Compose ET Swarm — les volumes portent les mêmes noms. Lancement possible pile en marche (Docker assure la cohérence en lecture) ; pour un instantané à froid parfait, arrêter la pile au préalable.

```bash
./backup.sh                              # → ./backups/AAAA-MM-JJ_HHMMSS/
./backup.sh /mnt/nas/liberty             # → /mnt/nas/liberty/AAAA-MM-JJ_HHMMSS/
./backup.sh --layout light               # sauvegarde uniquement les volumes de l'agencement light
./backup.sh --layout full                # sauvegarde uniquement les volumes de l'agencement full
./backup.sh --keep 30                    # supprime les sauvegardes de plus de 30 jours dans la destination
```

Chaque exécution produit un répertoire :

| Fichier | Agencement |
|---|---|
| `liberty-config.tar.gz` | Les deux. |
| `liberty-data.tar.gz` | Light uniquement (SQLite + auth.toml). |
| `pg-data.tar.gz`, `pgadmin-data.tar.gz`, `portainer-data.tar.gz` | Full uniquement. |
| `.env.snapshot` | Les deux (mode `0600` — à retirer avant synchronisation hors site si les secrets ne doivent pas figurer dans la sauvegarde). |
| `docker-compose.*.yml` | Le(s) fichier(s) compose présent(s) dans ce répertoire au moment de la sauvegarde. |

### Exécution hebdomadaire via cron

```cron
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/nas/liberty --keep 60
```

### Restaurer un volume

`backup.sh` affiche la commande exacte en cas de succès. La forme générale :

```bash
docker compose -f docker-compose.full.yml down     # DOIT être à l'arrêt — ne jamais restaurer sur un volume actif
docker volume rm pg-data                            # purge (sauter cette étape pour superposer)
docker run --rm -v pg-data:/data -v "$PWD/backups/<dir>:/backup" alpine \
    sh -c 'rm -rf /data/* /data/.[!.]* && tar xzf /backup/pg-data.tar.gz -C /data'
docker compose -f docker-compose.full.yml up -d
```

Pour Swarm : démonter d'abord la pile (`./deploy-swarm.sh --rm`), restaurer, puis redéployer.

---

## Opérations courantes \{#common-operations\}

| Besoin | Compose | Swarm |
|---|---|---|
| Réinitialiser le mot de passe admin | `docker compose exec liberty-next liberty-admin set-password admin <new>` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin set-password admin <new>` |
| Ajouter un autre superutilisateur | `docker compose exec liberty-next liberty-admin create-user <name> --superuser` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-admin create-user <name> --superuser` |
| Inspecter la clé de licence | `docker compose exec liberty-next liberty-license verify` | `docker exec $(docker ps -qf name=liberty_liberty-next) liberty-license verify` |
| Suivre les journaux | `docker compose -f docker-compose.full.yml logs -f liberty-next` | `docker service logs -f liberty_liberty-next` |
| Ouvrir un shell | `docker compose exec liberty-next bash` | `docker exec -it $(docker ps -qf name=liberty_liberty-next) bash` |
| Lister les services | `docker compose ps` | `docker stack services liberty` |
| Recharger la configuration (changement TOML) | `POST /admin/reload` (le bouton de l'UI Settings le déclenche) | Idem. |

Voir `liberty-admin --help` / `liberty-license --help` pour la CLI complète.

---

## Dépannage

### Le conteneur sort immédiatement

```bash
docker compose -f docker-compose.<layout>.yml logs liberty-next
```

| Ligne de journal | Cause | Correction |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` | La variable d'environnement requise n'a pas été propagée. | `install.sh` aurait dû la générer — vérifier `.env`. |
| `Could not connect to database` *(agencement full)* | Postgres n'est pas encore en bonne santé. | Attendre 10 s — la clause `depends_on: condition: service_healthy` couvre normalement le cas ; vérifier `docker compose ps pg`. |
| Le healthcheck ne passe jamais à healthy | Le conteneur est démarré mais `/info` ne répond pas. | Suivre les journaux — le plus souvent, un TOML de configuration sur le volume `liberty-config` comporte une erreur de syntaxe. |

### La page de connexion s'affiche, mais la connexion échoue

Le mot de passe de l'admin amorcé se trouve dans `.env` sous `LIBERTY_ADMIN_PASSWORD`. Réinitialisation :

```bash
docker compose exec liberty-next liberty-admin set-password admin <new>
```

### Les modifications du dépôt des apps n'apparaissent pas

Les éditions de TOML via *Settings → …* sont rechargées à chaud automatiquement. Pour les changements de plugins Python (si `plugins/` est monté depuis l'hôte), redémarrer le conteneur :

```bash
docker compose restart liberty-next
```

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
- [Traefik](./traefik.md) — câbler le TLS et un nom d'hôte lisible.
- [Portainer](./portainer.md) — à quoi sert le Portainer fourni.
- [Production](./production.md) — durcissement, OIDC, épinglage du scheduler.
- [Mise à niveau](./upgrading.md) — la procédure de mise à niveau (c'est `pull && up -d`).
- [Déployer des apps préfabriquées](./deploy-prebuilt-apps.md) — NomaUBL / Nomasx-1 / Nomajde par-dessus cette pile.
