---
title: Mise en production
description: "Durcissement en production des configurations Full Docker / Swarm — TLS, rotation des mots de passe, OIDC, sauvegardes, réglage Postgres."
keywords: [Liberty Framework, production, durcissement, TLS, OIDC, secret JWT, clé maître, sauvegardes, réglage Postgres, multi-replica]
---

# Mise en production

Cette page est une couche de durcissement appliquée par-dessus la [configuration Full Docker](./docker.md#full) ou la [configuration Swarm](./docker.md#swarm). Les deux configurations sont livrées depuis le répertoire `release/` du dépôt et pilotées par `install.sh` / `deploy-swarm.sh` / `backup.sh`. L'objet de cette page est de parcourir chaque réglage à effectuer avant d'autoriser l'installation à faire face à des utilisateurs — TLS, mots de passe par défaut, OIDC, secrets de longue durée, sauvegardes, durabilité Postgres, limites de mise à l'échelle.

Cette page ne **reprend pas** les étapes d'installation — lire d'abord [Docker](./docker.md).

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
| `LIBERTY_MASTER_KEY` | Déchiffre les valeurs `ENC:` des TOML. | DOIT rester constante — voir la [section 8](#8--gestion-de-la-clé-maître). |
| `LIBERTY_ADMIN_PASSWORD` | Mot de passe d'amorçage de l'utilisateur local `admin`. | À changer après la première connexion via `liberty-admin set-password` — voir la [section 5](#5--changer-tous-les-mots-de-passe-par-défaut). |
| `POSTGRES_PASSWORD` | Mot de passe superutilisateur Postgres. | Full / Swarm uniquement. |
| `PGADMIN_EMAIL` / `PGADMIN_PASSWORD` | Connexion à pgAdmin. | L'email par défaut est `admin@example.com` — changer les deux. |
| `LIBERTY_LICENSE_KEY` | JWT de licence (bundles licenciés uniquement). | Optionnel pour le framework seul. |
| `LIBERTY_OIDC_ENABLED` / `LIBERTY_OIDC_*` | Câblage SSO. | Voir la [section 6](#6--oidc-pour-le-sso). |
| `LIBERTY_DOMAIN` / `ACME_EMAIL` | Nom de domaine TLS + contact Let's Encrypt. | Voir la [section 4](#4--câbler-tls). |

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

```env title=".env"
LIBERTY_IMAGE_TAG=0.2.0
```

Mettre à jour selon votre cadence :

```bash
# Compose
cd /opt/liberty-next/release
./backup.sh                              # toujours faire un instantané d'abord
# modifier LIBERTY_IMAGE_TAG dans .env, puis :
docker compose -f docker-compose.full.yml pull
docker compose -f docker-compose.full.yml up -d

# Swarm
./backup.sh
# modifier LIBERTY_IMAGE_TAG dans .env, puis :
./deploy-swarm.sh
```

Ne jamais exécuter `latest` en production. Procédure de mise à jour complète : [Mise à jour](./upgrading.md).

---

## 4 — Câbler TLS

Les configurations Full / Swarm placent toutes deux Traefik en frontal de chaque service. TLS se câble en cinq étapes ; le déroulé détaillé (DNS-01, routage multi-app, exposition du dashboard) se trouve dans [Traefik](./traefik.md).

1. Faire pointer le domaine sur l'hôte (enregistrement DNS A pour `liberty.example.com`).
2. Ouvrir les ports entrants `80/tcp` + `443/tcp` sur le pare-feu de l'hôte et sur le security group cloud.
3. Dans `release/.env` :
   ```env
   LIBERTY_DOMAIN=liberty.example.com
   ACME_EMAIL=ops@example.com
   ```
4. Dans `release/docker-compose.full.yml`, décommenter l'entrypoint `websecure`, les drapeaux `certificatesresolvers.le.*` et le mapping du port `:443`. Ajouter `traefik.http.routers.<name>.tls.certresolver: "le"` aux labels de chaque routeur.
5. `docker compose -f docker-compose.full.yml up -d` (ou `./deploy-swarm.sh`). Traefik demande les certificats au premier accès.

Pour les installations sans enregistrement DNS public, basculer le type de challenge sur DNS-01 dans le `command:` de Traefik (`--certificatesresolvers.le.acme.dnschallenge.provider=<votre-fournisseur-DNS>`) et fournir les identifiants du fournisseur via des variables d'environnement — voir la [documentation Let's Encrypt de Traefik](https://doc.traefik.io/traefik/https/acme/) pour la matrice des fournisseurs.

---

## 5 — Changer tous les mots de passe par défaut

`install.sh` génère des secrets aléatoires pour les valeurs qu'il maîtrise ; trois mots de passe restent livrés avec des valeurs par défaut connues et **doivent** être changés avant que l'installation ne soit accessible aux utilisateurs.

| Où | Valeur par défaut | Changement |
|---|---|---|
| **Dashboard Traefik** | `admin/admin` | Hacher un nouveau mot de passe en bcrypt, le coller dans `release/traefik/dynamic/dynamic.yml`. `file.watch=true` recharge en quelques secondes — aucun redémarrage nécessaire. |
| **pgAdmin** | `admin@example.com / PGADMIN_PASSWORD` depuis `.env` | Renseigner `PGADMIN_EMAIL` avec une adresse réelle et changer `PGADMIN_PASSWORD`. Redémarrer le service `pgadmin`. |
| **admin liberty-next** | `LIBERTY_ADMIN_PASSWORD` depuis `.env` | Lancer `liberty-admin set-password` après la première connexion (voir ci-dessous). |

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
docker compose -f docker-compose.full.yml up -d pgadmin

# Swarm
./deploy-swarm.sh
```

### admin liberty-next

```bash
# Compose
docker compose exec liberty-next liberty-admin set-password admin <nouveau>

# Swarm
docker exec $(docker ps -qf name=liberty_liberty-next) \
    liberty-admin set-password admin <nouveau>
```

Une fois changée, la valeur du `.env` ne fait plus autorité — le hash Argon2 se trouve dans `auth.toml` sur le volume `liberty-config`.

---

## 6 — OIDC pour le SSO

Câbler l'IdP (Keycloak, Auth0, Azure AD, Okta, …) une fois l'installation joignable via TLS.

```env title=".env"
LIBERTY_OIDC_ENABLED=true
LIBERTY_OIDC_PROVIDER_URL=https://login.example.com/realms/liberty
LIBERTY_OIDC_CLIENT_ID=liberty-next
LIBERTY_OIDC_CLIENT_SECRET=<depuis-lIdP>
```

Puis redémarrer liberty-next :

```bash
# Compose
docker compose -f docker-compose.full.yml restart liberty-next

# Swarm
./deploy-swarm.sh
```

La connexion locale reste disponible comme chemin de repli — l'utilisateur `admin` continue de fonctionner quand OIDC est indisponible (panne du fournisseur, client mal configuré). Ne pas la désactiver.

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

`backup.sh` écrit un `.env.snapshot` (mode `0600`) dans chaque répertoire de sauvegarde — la clé maître voyage avec les instantanés de volumes. La retirer avant une synchronisation hors site si la politique de stockage interdit les secrets dans les sauvegardes.

---

## 9 — Sauvegardes via backup.sh

`backup.sh` produit un instantané tar de chaque volume nommé Liberty. Peut s'exécuter pendant que la pile tourne — Docker gère la cohérence en lecture. Pour un instantané à froid parfait, faire `docker compose down` (ou `./deploy-swarm.sh --rm`) au préalable.

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

Le réglage se trouve dans le bloc `command:` du service `postgres` dans `docker-compose.full.yml` — des commentaires en ligne décrivent chaque paramètre. Modifier ici, puis `docker compose -f docker-compose.full.yml up -d pg` (ou `./deploy-swarm.sh`).

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

`docker compose -f docker-compose.full.yml up -d pg` (ou `./deploy-swarm.sh`) retire le port hôte. pgAdmin continue de joindre Postgres via le réseau interne `liberty-net` — rien ne change côté utilisateur.

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
| **Postgres** | volume `pg-logs` (rotation). | Export par montage, ou basculer le service `pg` sur un pilote de log qui transmet à l'agrégateur. |
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
| `start_period` | `40s` | Couvre l'exécution initiale de `init-db` au premier démarrage. |
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
