---
title: Mise en production
description: "Durcissement en production des configurations Full Docker / Swarm — TLS, rotation des mots de passe, OIDC, sauvegardes, réglage Postgres."
keywords: [Liberty Framework, production, durcissement, TLS, OIDC, secret JWT, clé maître, sauvegardes, réglage Postgres, multi-replica]
---

# Mise en production

Cette page est une couche de durcissement appliquée par-dessus la [configuration Full Docker](./docker.md#full) ou la [configuration Swarm](./docker.md#swarm). Les deux configurations sont livrées depuis le répertoire `release/` du dépôt et pilotées par `install.sh` / `install-apps.sh` / `deploy-swarm.sh` / `backup.sh`. L'objet de cette page est de parcourir chaque réglage à effectuer avant d'autoriser l'installation à faire face à des utilisateurs — TLS, mots de passe par défaut, OIDC, secrets de longue durée, sauvegardes, durabilité Postgres, limites de mise à l'échelle.

Cette page ne **reprend pas** les étapes d'installation — lire d'abord [Docker](./docker.md).

:::info[Discipline COMPOSE_FILE]
Après l'exécution d'`install.sh` (et éventuellement d'`install-apps.sh`), `.env` contient une ligne `COMPOSE_FILE=docker-compose.full.yml[:overlays...]`. Chaque `docker compose <cmd>` (sans drapeau `-f`) fusionne automatiquement tous les overlays listés. Les commandes de cette page suivent cette convention — ne jamais saisir `-f` après l'installation. Voir [Docker → Discipline COMPOSE_FILE](./docker.md#compose-file-discipline).
:::

---

## 1 — Choisir la configuration

| Configuration | Adaptée à la production ? | Quand |
|---|---|---|
| **Light** ([docker.md#light](./docker.md#light)) | Non — SQLite, pas de TLS, pas de connecteurs licenciés. | Essai local, démonstration mono-utilisateur. |
| **Full** ([docker.md#full](./docker.md#full)) | Oui. | Hôte unique. Cinq services derrière Traefik. C'est la configuration ciblée par les bundles licenciés (Nomasx-1, Nomajde, NomaUBL). |
| **Swarm** ([docker.md#swarm](./docker.md#swarm)) | Oui. | Swarm mono-nœud (une VM, recette) ou swarm multi-nœuds. Mêmes services que Full, portés sur la grammaire Swarm. Choix selon le style d'exploitation — les deux couvrent la production. |

La suite de cette page suppose Full ou Swarm. Le bare-metal systemd, Podman from-scratch et Kubernetes from-scratch ne sont plus les chemins recommandés — le workflow `release/` **est** le chemin de production.

---

## 2 — Variables d'environnement requises (et le piège de substitution `$`)

Tous les secrets se trouvent dans `release/.env`. `install.sh` le génère avec des valeurs aléatoires qui évitent le caractère `$` ; en cas de saisie manuelle, attention au piège ci-dessous.

| Variable | Rôle | Notes |
|---|---|---|
| `LIBERTY_IMAGE_TAG` | Épingler la version d'image. | Voir la [section 3](#3--épingler-le-tag-dimage). |
| `LIBERTY_JWT_SECRET` | Signe chaque token d'accès. | Sa rotation invalide tous les tokens en circulation — voir la [section 7](#7--rotation-du-secret-jwt). |
| `LIBERTY_MASTER_KEY` | Déchiffre les valeurs `ENC:` des TOML — y compris la clé de licence, la clé IA et le secret client OIDC stockés dans `app.toml`. | DOIT rester constante — voir la [section 8](#8--gestion-de-la-clé-maître). |
| `LIBERTY_ADMIN_PASSWORD` | Mot de passe d'amorçage de l'utilisateur local `admin`. | `install.sh` en génère un et l'affiche une seule fois lors du premier démarrage — non stocké dans `.env`. Réinitialisation ultérieure via `docker exec liberty-next liberty-admin reset-admin-password` ou `liberty-admin set-password admin <nouveau>` — voir la [section 5](#5--changer-tous-les-mots-de-passe-par-défaut). |
| `POSTGRES_PASSWORD` | Mot de passe superutilisateur Postgres. | Full / Swarm uniquement. |
| `PGADMIN_EMAIL` / `PGADMIN_PASSWORD` | Connexion à pgAdmin. | L'email par défaut est `admin@liberty.fr` — changer les deux. |
| `LIBERTY_DOMAIN` / `ACME_EMAIL` | Nom de domaine TLS + contact Let's Encrypt. | Voir la [section 4](#4--câbler-tls). |

La **clé de licence, la clé API Anthropic et le secret client OIDC** ne sont plus des variables d'environnement dans la configuration recommandée. Elles se trouvent dans `app.toml`, chiffrées au repos avec `LIBERTY_MASTER_KEY` — édition via *Settings → App* dans la SPA (voir la [section 6](#6--licensekeyaiandoidcvia-settings-app)). Le chemin par variable d'environnement (`LIBERTY_LICENSE_KEY` / `ANTHROPIC_API_KEY` / `LIBERTY_OIDC_CLIENT_SECRET` référencés depuis `app.toml` sous la forme `${VAR}`) reste fonctionnel comme repli pour les installations qui privilégient le stockage en gestionnaire de secrets.

### Le piège de substitution `$`

Docker Compose interpole `$VAR` et `${VAR}` à l'intérieur des valeurs de `.env`. Un `$` littéral dans un mot de passe devient vide (ou pire, la valeur d'une autre variable). Deux approches sûres :

| Approche | Comment |
|---|---|
| **Générer sans `$`** *(recommandé)* | `install.sh` le fait déjà — chaque mot de passe aléatoire qu'il écrit est dépourvu de `$`. |
| **Échapper avec `$$`** | Pour conserver un `$` dans un mot de passe, le doubler : `POSTGRES_PASSWORD=ab$$cd` devient `ab$cd` dans le conteneur. |

Si la connexion ou l'accès à la base échoue juste après une édition manuelle de `.env`, c'est la première piste à examiner.

---

## 3 — Épingler le tag d'image

`install.sh` retient `:latest` par défaut. Acceptable pour la première installation (l'image la plus fraîche est souhaitée), inacceptable en production : un `docker compose pull` six mois plus tard récupère une version majeure non validée.

Épingler dès l'installation :

```bash
./install.sh full --tag 7.0.2
```

Ou, sur une installation existante, modifier `.env` :

```env title=".env"
LIBERTY_IMAGE_TAG=7.0.2
```

Mettre à jour selon votre cadence :

```bash
# Compose
cd /opt/liberty-next/release
./backup.sh                              # toujours faire un instantané d'abord
# modifier LIBERTY_IMAGE_TAG dans .env, puis :
docker compose pull                       # COMPOSE_FILE fusionne automatiquement les overlays
docker compose up -d

# Swarm
./backup.sh
# modifier LIBERTY_IMAGE_TAG dans .env, puis :
./deploy-swarm.sh
```

Ne jamais exécuter `latest` en production. Procédure de mise à jour complète : [Mise à jour](./upgrading.md).

---

## 4 — Câbler TLS

La configuration Full place Traefik en frontal de chaque service. TLS se câble par `install.sh --ssl <mode>` — deux modes, **aucune édition manuelle des fichiers compose**. Le déroulé détaillé (Compose vs Swarm, bascule de mode, SNI multi-certificats) se trouve dans [Traefik](./traefik.md).

### Mode A — Let's Encrypt (hôtes exposés sur l'internet public)

```bash
./install.sh full --ssl letsencrypt \
    --domain liberty.example.com \
    --email ops@example.com
```

Prérequis :

1. Le domaine résout sur cet hôte (enregistrement DNS A / AAAA).
2. Les ports `:80` et `:443` sont joignables depuis l'internet public — le challenge TLS-ALPN nécessite les deux ouverts.
3. `ACME_EMAIL` est une adresse réelle consultée (Let's Encrypt envoie les alertes d'expiration).

Action effectuée : ajout de `docker-compose.tls-letsencrypt.yml` à `COMPOSE_FILE` dans `.env`, positionnement des deux variables d'environnement, démarrage de la pile. Traefik récupère le certificat à la première requête HTTPS et le persiste dans le volume `traefik-acme`.

### Mode B — Certificats fournis par l'opérateur (entreprise / air-gapped)

```bash
./install.sh full --ssl provided \
    --domain liberty.internal.example.com \
    --cert-dir  /etc/pki/tls \
    --cert-file liberty.crt \
    --key-file  liberty.key
```

Prérequis : un répertoire sur l'hôte contenant le `.crt` (ou `.pem`) + la clé privée ; le certificat est valide pour `--domain`. `install.sh` vérifie l'existence des deux fichiers avant de poursuivre.

Action effectuée : ajout de `docker-compose.tls-provided.yml`, positionnement de `CERT_HOST_PATH`, génération de `traefik/dynamic/tls.yml` référençant les noms de fichiers du certificat et de la clé (gitignoré — à éditer pour SNI / multi-certificats), démarrage de la pile.

### Basculer de mode

Relancer `./install.sh full --ssl <nouveau-mode> ...`. Le script remplace l'overlay dans `COMPOSE_FILE`, réécrit ou supprime `tls.yml`, et `docker compose up -d` reprend la nouvelle configuration. L'état (volume de certificat, répertoire de certificat hôte) est préservé.

### Swarm

`install.sh --ssl` est **réservé à Compose**. Les opérateurs Swarm appliquent l'overlay TLS manuellement :

```bash
docker stack deploy \
  -c docker-compose.swarm.yml \
  -c docker-compose.tls-letsencrypt.yml \
  liberty
```

(Avec `LIBERTY_DOMAIN` + `ACME_EMAIL` d'abord exportés dans le shell — `deploy-swarm.sh` charge `.env` automatiquement.)

---

## 5 — Changer tous les mots de passe par défaut

`install.sh` génère des secrets aléatoires pour les valeurs qu'il maîtrise ; trois mots de passe restent livrés avec des valeurs par défaut connues et **doivent** être changés avant que l'installation ne soit accessible aux utilisateurs.

| Où | Valeur par défaut | Changement |
|---|---|---|
| **Dashboard Traefik** | `admin/admin` | Hacher un nouveau mot de passe en bcrypt, le coller dans `release/traefik/dynamic/dynamic.yml`. `file.watch=true` recharge en quelques secondes — aucun redémarrage nécessaire. |
| **pgAdmin** | `admin@liberty.fr / PGADMIN_PASSWORD` depuis `.env` | Renseigner `PGADMIN_EMAIL` avec une adresse réelle et changer `PGADMIN_PASSWORD`. Redémarrer le service `pgadmin`. |
| **admin liberty-next** | valeur aléatoire affichée une seule fois par `install.sh` (non stockée dans `.env`) | Lancer `liberty-admin set-password` (ou `reset-admin-password` pour une nouvelle valeur aléatoire). |

### Dashboard Traefik

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<votre-mot-de-passe>"
# admin:$2y$05$abc...
```

Coller la ligne renvoyée dans `release/traefik/dynamic/dynamic.yml` sous `http.middlewares.traefik-auth.basicAuth.users`.

### pgAdmin

```env title=".env"
PGADMIN_EMAIL=ops@example.com
PGADMIN_PASSWORD=<nouveau-mot-de-passe-fort>
```

```bash
# Compose
docker compose up -d pgadmin                                      # COMPOSE_FILE sélectionne les bons fichiers

# Swarm
./deploy-swarm.sh
```

### admin liberty-next

```bash
# Compose — réinitialiser à une nouvelle valeur aléatoire (affichée une seule fois)
docker exec liberty-next liberty-admin reset-admin-password

# Compose — définir un mot de passe précis
docker compose exec liberty-next liberty-admin set-password admin <nouveau>

# Swarm
docker exec $(docker ps -qf name=liberty_liberty-next) \
    liberty-admin set-password admin <nouveau>
```

Une fois changée, le hash Argon2 se trouve dans `auth.toml` sur le volume `liberty-config`. `LIBERTY_ADMIN_PASSWORD` est une graine valable uniquement au premier démarrage — `install.sh` l'exporte dans le shell le temps du boot, puis l'abandonne.

---

## 6 — Clé de licence, IA et OIDC via Settings → App \{#6--licensekeyaiandoidcvia-settings-app\}

Trois secrets de production se trouvent désormais dans `app.toml`, chiffrés au repos avec `LIBERTY_MASTER_KEY` (AES-256-GCM, préfixe `ENC:`). L'édition s'effectue depuis l'écran **Settings → App** de la SPA — **aucune édition de `.env`, aucun redémarrage de service**. Déroulé complet de l'éditeur : [App settings](../framework/build/settings-app.md).

| Section | Contenu | Effet à l'enregistrement |
|---|---|---|
| **License** | JWT RS256 signé par l'éditeur qui débloque les connecteurs licenciés (Nomasx-1, Nomajde, NomaUBL). | Registre des connecteurs reconstruit en place. Les connecteurs licenciés écartés au démarrage réapparaissent ; ceux qui ne sont plus couverts par la nouvelle clé sont retirés. Aucun redémarrage. |
| **AI Assistant → Anthropic API key** | `sk-ant-…` pour Anthropic. Plus tous les réglages IA (modèle, exposition des outils, system prompt, allowlist web-fetch, limites par appel). | Assistant reconstruit ; le prochain tour de chat utilise la nouvelle configuration. |
| **OpenID Connect (SSO)** | discovery_url, client_id, client_secret, scopes, mappings de claims, surcharges de redirection proxy optionnelles. | Handler OIDC reconstruit ; la prochaine connexion utilise la nouvelle configuration. Les sessions actives (signées par `LIBERTY_JWT_SECRET`) ne sont pas affectées. |

Les champs sensibles suivent le motif **révéler-pour-éditer** : tant qu'ils sont masqués, ils affichent des points et un bouton *Replace* ; la charge utile envoyée vaut `""` afin qu'un enregistrement accidentel préserve la valeur chiffrée sur disque. Cliquer sur *Replace* pour saisir une nouvelle valeur. Voir [App settings → Masked secrets](../framework/build/settings-app.md#masked-secrets--the-reveal-to-edit-pattern).

### Pourquoi cela compte en production

| Avant | Maintenant |
|---|---|
| Rotation de licence : édition de `.env` + redémarrage du conteneur. | Rotation via l'UI, aucun redémarrage, aucune coupure. |
| Rotation de la clé Anthropic : redémarrage requis. | Rotation via l'UI, le prochain tour de chat utilise la nouvelle clé. |
| Rotation du client_secret OIDC : édition de `.env` + redémarrage. | Rotation via l'UI, aucun impact sur les sessions actives. |
| Secrets posés dans `.env` (mode 0600 — en clair sur disque malgré tout). | Chiffrés au repos dans `app.toml` avec la clé maître de l'installation. |

### Repli par variable d'environnement

Pour les installations qui préfèrent placer le secret dans un gestionnaire (Kubernetes Secrets, Docker Secrets, Vault), le chemin par variable d'environnement reste fonctionnel :

```toml title="app.toml — références de variables résolues au démarrage"
[license]
key = "${LIBERTY_LICENSE_KEY}"

[ai]
api_key = "${ANTHROPIC_API_KEY}"

[oidc]
client_secret = "${LIBERTY_OIDC_CLIENT_SECRET}"
```

Positionner les variables dans l'environnement du conteneur, puis redémarrer. Les champs *License* / *AI api_key* / *OIDC client_secret* de l'UI s'affichent alors comme *configurés* mais **en lecture seule** (le framework ne réécrit pas dans les valeurs résolues depuis une variable d'environnement). Retirer d'abord les références `${VAR}` pour reprendre la gestion via l'UI.

### La connexion locale reste le repli

Ne pas désactiver la connexion locale une fois OIDC configuré — l'utilisateur `admin` continue de fonctionner quand OIDC est indisponible (panne du fournisseur, client mal configuré, client_secret expiré). Les deux chemins coexistent ; la SPA affiche les deux sur l'écran de connexion quand OIDC est activé.

---

## 7 — Rotation du secret JWT

`LIBERTY_JWT_SECRET` signe chaque token d'accès et de rafraîchissement. Sa rotation **invalide en un seul mouvement tous les tokens en circulation** — chaque utilisateur est déconnecté et doit se reconnecter.

| Quand effectuer la rotation | Pourquoi |
|---|---|
| **Réponse à incident** | Fuite suspectée du secret, ou besoin de révoquer instantanément toutes les sessions. |
| **Rotation planifiée** | Optionnelle. Si elle est effectuée, prévoir une fenêtre de maintenance — les utilisateurs verront l'écran de connexion en pleine session. |

Sinon, garder cette valeur stable au fil des mises à jour. Elle se trouve dans `.env` ; sa modification nécessite un `docker compose up -d liberty-next` (ou `./deploy-swarm.sh`) pour que la nouvelle valeur soit prise en compte.

---

## 8 — Gestion de la clé maître

`LIBERTY_MASTER_KEY` déchiffre les valeurs `ENC:` à l'intérieur de chaque TOML (mots de passe de base, clés d'API, secret client OIDC dans le dépôt apps). Si elle change, toute valeur `ENC:` devient illisible — le framework ne peut plus ouvrir les connecteurs, ne peut plus vérifier la licence, ne démarre pas.

| Règle | Pourquoi |
|---|---|
| **DOIT rester constante entre les redémarrages et les mises à jour.** | La changer fait perdre l'accès à tous les secrets chiffrés. Aucune récupération possible — il faut ressaisir chaque secret de connecteur à la main. |
| **À sauvegarder à côté des volumes.** | Une restauration de volume sans la clé maître est un presse-papier. |
| **À tenir hors de git.** | Même modèle de menace qu'une clé privée d'AC. |

`backup.sh` écrit un `.env.snapshot` (mode `0600`) dans chaque répertoire de sauvegarde — la clé maître accompagne les instantanés de volumes. La retirer avant une synchronisation hors site si la politique de stockage interdit les secrets dans les sauvegardes.

---

## 9 — Sauvegardes via backup.sh

`backup.sh` produit un instantané tar de chaque volume nommé Liberty. Peut s'exécuter pendant que la pile s'exécute — Docker gère la cohérence en lecture. Pour un instantané à froid parfait, faire `docker compose down` (ou `./deploy-swarm.sh --rm`) au préalable.

### Cron hebdomadaire

```cron title="/etc/cron.d/liberty-backup"
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/nas/liberty --keep 60
```

`--keep 60` supprime les sauvegardes de plus de 60 jours dans le répertoire de destination. À coupler avec une synchronisation hors site de `/mnt/nas/liberty` pour la reprise après sinistre.

Contenu de chaque exécution :

| Fichier | Configuration |
|---|---|
| `liberty-config.tar.gz` | Les deux. |
| `pg-data.tar.gz`, `pgadmin-data.tar.gz`, `portainer-data.tar.gz` | Full / Swarm uniquement. |
| `.env.snapshot` *(mode 0600)* | Transporte la clé maître et tous les autres secrets. |
| `docker-compose.*.yml` | Le ou les fichiers compose présents dans ce répertoire au moment de la sauvegarde. |

Procédure de restauration : [Docker → Restaurer un volume](./docker.md#backups).

---

## 10 — Réglage Postgres pour la production

Le Postgres embarqué dans `docker-compose.full.yml` est livré avec deux paramètres qui échangent la durabilité contre le débit. Tous deux conviennent à la charge ETL / serveur d'applications classique ; à inverser pour les cas où la durabilité stricte est requise.

| Paramètre | Livré comme | Compromis | Basculer vers |
|---|---|---|---|
| `wal_level` | `minimal` | Désactive la réplication physique, le PITR, le décodage logique. Convient à une instance unique + `backup.sh` nocturne. | `replica` pour hot standby / PITR. |
| `synchronous_commit` | `off` | Un crash matériel peut perdre jusqu'à ~1 s d'écritures validées. | `on` pour les charges financières / d'audit. |
| `max_wal_senders` | `0` | Aucun slot de réplication. | `≥ 1` en cas de bascule vers `wal_level=replica`. |

Le réglage se trouve dans le bloc `command:` du service `postgres` dans `docker-compose.full.yml` — des commentaires en ligne décrivent chaque paramètre. Modifier ici, puis `docker compose up -d pg` (ou `./deploy-swarm.sh`).

Dimensionnement RAM pour `shared_buffers` / `work_mem` : voir [Docker → Réglage Postgres](./docker.md#full).

---

## 11 — Commenter le port hôte de Postgres

`docker-compose.full.yml` met à disposition Postgres sur l'hôte :

```yaml title="docker-compose.full.yml (par défaut)"
pg:
  ports:
    - "5432:5432"
```

Utile pour brancher DBeaver depuis un poste pendant l'amorçage de l'installation. Mauvaise pratique en production — la surface d'attaque s'élargit à toute personne capable de joindre l'hôte sur le port 5432. Commenter le bloc :

```yaml title="docker-compose.full.yml (production)"
pg:
  # ports:
  #   - "5432:5432"
```

`docker compose up -d pg` (ou `./deploy-swarm.sh`) retire le port hôte. pgAdmin continue de joindre Postgres via le réseau interne `liberty-network` — rien ne change côté utilisateur.

---

## 12 — Limite multi-replica

`liberty-next` reste à `replicas: 1` par défaut dans `docker-compose.swarm.yml`. **Ne pas augmenter cette valeur pour le moment.**

| Sujet | Détail |
|---|---|
| **État Socket.IO en mémoire** | Les tableaux de bord temps réel, le chat IA et le flux de statut des jobs passent tous par Socket.IO. Deux replicas sans backplane partagé = les clients épinglés au replica A ratent les événements émis par le replica B. |
| **Pas d'adaptateur Redis intégré (pour l'instant).** | La solution est un adaptateur Redis pub/sub pour Socket.IO. Non encore câblé. À suivre dans la feuille de route. |
| **Les cookies sticky aident mais ne remplacent pas la solution.** | Traefik peut poser un cookie `liberty_sticky` pour garder un navigateur sur un même replica. Cela masque le symptôme pour un utilisateur isolé mais ne résout pas la diffusion inter-replicas (un job déclenché sur A ne notifie pas les utilisateurs épinglés sur B). |

Mettre `liberty-next` à l'échelle une fois Redis câblé. D'ici là, la mise à l'échelle verticale (donner plus de CPU / RAM au replica unique) est le chemin supporté. Les services à état (`pg`, `pgadmin`, `portainer`) restent à `replicas: 1` quoi qu'il arrive — aucun ne dispose d'une réplication intégrée.

---

## 13 — Exposition du socket Docker

Deux services de la pile montent le socket Docker de l'hôte :

| Service | Pourquoi | Risque |
|---|---|---|
| **Traefik** *(Compose : provider docker)* | Lit les labels des conteneurs pour câbler les routes. Montage en lecture seule. | Un Traefik compromis peut énumérer chaque conteneur — mais ne peut pas en démarrer / arrêter / tirer une image. |
| **Portainer** | Interface Docker complète — démarrage, arrêt, pull, exec, inspect. Montage en lecture-écriture. | Un Portainer compromis = root sur l'hôte Docker. |

Les deux sont des surfaces privilégiées. Deux gestes de durcissement :

1. **Restreindre l'accès admin** aux deux. Dashboard Traefik derrière BasicAuth (déjà câblé). Portainer derrière un mot de passe fort + 2FA (Portainer Settings → Authentication).
2. **Supprimer entièrement le service portainer** si la pratique d'exploitation interdit `/var/run/docker.sock` dans un conteneur de longue durée. Effacer le bloc du service `portainer` dans `docker-compose.full.yml` (ou `docker-compose.swarm.yml`), puis redéployer. L'interface graphique est perdue ; `docker compose` / `docker service` couvrent les mêmes opérations depuis le shell.

Pour Swarm, Traefik utilise le provider swarm (`--providers.swarm`) qui n'est exposé que par les managers — les workers ne portent pas le socket. Compose n'a pas d'équivalent.

---

## 14 — Routage des journaux

| Source | Où | Comment transmettre |
|---|---|---|
| **liberty-next** | stdout. | `docker compose logs -f liberty-next` / `docker service logs -f liberty_liberty-next` / journald (via le pilote de log du runtime). |
| **Postgres** | stderr → pilote `json-file` Docker (rotation, 100 Mo × 3 par défaut dans le bundle). | `docker compose logs -f pg`, ou basculer le pilote de log du daemon / par service pour transmettre à l'agrégateur. |
| **Traefik** | stdout. | Identique à liberty-next. |
| **pgAdmin / Portainer** | stdout. | Identique. |

Pour l'agrégation Loki / ELK / Datadog / Splunk : configurer le **pilote de logs du runtime de conteneur** (Docker propose `loki`, `fluentd`, `journald`, `gelf`, `awslogs`, etc.), rien à l'intérieur du framework. Le framework écrit une ligne JSON-friendly par événement sur stdout et laisse le runtime gérer le transport.

```yaml title="docker-compose.full.yml (exemple de surcharge logging)"
services:
  liberty-next:
    logging:
      driver: loki
      options:
        loki-url: "http://loki.example.com:3100/loki/api/v1/push"
        loki-batch-size: "400"
```

Pour Swarm, le même bloc `logging:` s'applique — Swarm le respecte par service.

---

## 15 — Healthchecks

liberty-next embarque un healthcheck câblé dans les deux fichiers compose :

```yaml title="docker-compose.full.yml (extrait)"
healthcheck:
  test: ["CMD", "curl", "-fsS", "http://127.0.0.1:8000/info"]
  interval: 30s
  timeout: 5s
  start_period: 40s
  retries: 3
```

| Champ | Valeur | Pourquoi |
|---|---|---|
| `test` | `GET /info` | Léger — aucun appel base, aucune authentification. |
| `interval` | `30s` | Cadence standard. |
| `timeout` | `5s` | Confortable — `/info` répond en millisecondes. |
| `start_period` | `40s` | Couvre l'exécution initiale d'`init-db` au premier démarrage. |
| `retries` | `3` | Un soubresaut transitoire ne fait pas basculer le statut. |

Inutile d'ajouter un healthcheck — celui qui est livré convient. `docker compose ps` et `docker service ps` font tous deux remonter l'état `healthy` / `unhealthy` que Traefik utilise pour ouvrir le trafic.

---

## 16 — Supervision

Au-delà du healthcheck conteneur, le framework propose des endpoints de supervision plus poussés — utiles aux load balancers externes, aux sondes Kubernetes et aux services de surveillance de disponibilité.

| Endpoint | Usage |
|---|---|
| `GET /info` | Liveness — healthcheck conteneur et sonde de liveness LB. |
| `GET /api/health` | Readiness — exerce la connectivité base. À utiliser pour la sonde de readiness LB. |
| `GET /api/license` | Sonde vérifiée par licence — confirme que le JWT de licence est toujours accepté. |

Surface complète : [Supervision → Endpoints de santé](../monitoring/health-endpoints.md).

---

## Checklist de durcissement

Parcourir cette liste avant d'ouvrir l'installation aux utilisateurs.

| # | Vérification | Fait ? |
|---|---|---|
| 1 | Configuration choisie — Full ou Swarm. Pas Light. | |
| 2 | `.env` relu ; aucun `$` littéral dans les mots de passe. | |
| 3 | `LIBERTY_IMAGE_TAG` épinglé à une version précise. | |
| 4 | TLS câblé via Traefik + Let's Encrypt. Redirection HTTP → HTTPS active. | |
| 5 | Mot de passe du dashboard Traefik changé (bcrypt). | |
| 5 | Email + mot de passe pgAdmin changés. | |
| 5 | Mot de passe `admin` liberty-next changé via `liberty-admin set-password`. | |
| 6 | OIDC câblé (si le SSO est dans le périmètre). `admin` local conservé comme repli. | |
| 7 | `LIBERTY_JWT_SECRET` à la valeur générée par l'installation (ne pas faire tourner sans raison). | |
| 8 | `LIBERTY_MASTER_KEY` sauvegardée hors bande ; documentée dans le runbook. | |
| 9 | `backup.sh` planifié en cron, destination hors hôte, `--keep` défini. | |
| 10 | `wal_level` / `synchronous_commit` Postgres revus en fonction de la charge. | |
| 11 | `ports: 5432:5432` Postgres commenté. | |
| 12 | `liberty-next` maintenu à `replicas: 1` (en attendant le backplane Redis). | |
| 13 | Compte admin Portainer durci (ou service supprimé). | |
| 14 | Pilote de logs configuré pour l'agrégation (si applicable). | |
| 15 | Le healthcheck conteneur rapporte `healthy`. | |
| 16 | Sonde externe (Pingdom / UptimeRobot / sonde k8s) pointée sur `/api/health`. | |

---

## Pour aller plus loin

- [Docker](./docker.md) — les configurations Full et Swarm que cette page durcit.
- [Traefik](./traefik.md) — déroulé TLS détaillé, DNS-01, routage multi-app.
- [Mise à jour](./upgrading.md) — la procédure `pull && up -d`.
- [Supervision → Endpoints de santé](../monitoring/health-endpoints.md) — surface des sondes LB / Kubernetes.
- [Déployer des applications préassemblées](./deploy-prebuilt-apps.md) — NomaUBL / Nomasx-1 / Nomajde par-dessus la pile durcie.
