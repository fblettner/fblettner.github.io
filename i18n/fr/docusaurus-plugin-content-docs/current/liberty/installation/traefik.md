---
title: Traefik
description: "Le reverse proxy Traefik est livré d'origine dans les layouts Full Docker et Swarm. Deux modes TLS sont fournis sous forme de surcharges compose additives — docker-compose.tls-letsencrypt.yml (challenge ACME TLS-ALPN) et docker-compose.tls-provided.yml (certificats fournis par l'opérateur). Les deux sont câblés par install.sh --ssl <mode>, sans aucune édition manuelle de compose."
keywords: [Liberty Framework, Traefik, reverse proxy, TLS, ACME, Let's Encrypt, certificats opérateur, install.sh --ssl, --domain, --email, --cert-dir, --cert-file, --key-file, docker-compose.tls-letsencrypt.yml, docker-compose.tls-provided.yml, COMPOSE_FILE, tableau de bord, basic-auth]
---

# Traefik

Traefik est **livré d'origine** dans le layout Full Docker (`docker-compose.full.yml`) et dans le layout Swarm (`docker-compose.swarm.yml`). Il s'exécute comme service `traefik`, termine HTTP sur `:80`, route par préfixe de chemin et met à disposition un tableau de bord sur `/traefik`. Aucune installation séparée.

TLS s'obtient via deux **surcharges compose** additives câblées par `install.sh --ssl` :

| Mode | Surcharge | Quand |
|---|---|---|
| **`letsencrypt`** | `docker-compose.tls-letsencrypt.yml` | Hôtes accessibles depuis Internet. Challenge ACME TLS-ALPN — requiert `:80` et `:443` ouverts depuis Internet. Émission et renouvellement gérés automatiquement par Traefik. |
| **`provided`** | `docker-compose.tls-provided.yml` | Autorité de certification interne, PKI d'entreprise, installation air-gapped. L'opérateur fournit le `.crt` et la `.key` ; Traefik les sert via le provider fichier. |
| **`none`** *(défaut)* | (aucune surcharge) | HTTP seul sur `:80`. Adapté au développement local ou derrière un autre reverse proxy qui termine TLS en amont. |

Pour la carte conceptuelle des fichiers compose + scripts, lire d'abord [Docker](./docker.md). Pour la règle `COMPOSE_FILE` transversale, voir [Docker → Discipline COMPOSE_FILE](./docker.md#compose-file-discipline).

---

## Ce qui est pré-câblé

### Priorités de routage

Le layout full utilise un routage par préfixe de chemin sur un unique entrypoint HTTP Traefik (`:80`). La priorité la plus élevée l'emporte ; le routeur catchall liberty-next passe en dernier :

| Routeur | Règle | Priorité | Service |
|---|---|---|---|
| `traefik-dashboard` | `` PathPrefix(`/traefik`) `` + une liste blanche stricte de GET `/api/*` | **1000** | Service interne `api@internal` de Traefik. |
| `pgadmin` | `` PathPrefix(`/pgadmin`) `` | **100** | Conteneur pgAdmin sur `:80`. |
| `portainer` | `` PathPrefix(`/portainer`) `` (réécrit en `/`) | **100** | Conteneur Portainer sur `:9000`. |
| `liberty-next` | `` PathPrefix(`/`) `` *(catchall)* | **1** | Conteneur liberty-next sur `:8000`. |

Liberty-next reste le catchall — toute requête qui ne correspond à aucun préfixe plus spécifique aboutit ici. Ajouter une nouvelle application derrière le même Traefik revient simplement à créer un nouveau routeur avec une priorité `> 1`.

### Cookies sticky pour Socket.IO

Liberty-next conserve l'état Socket.IO en mémoire. Quand le service est mis à l'échelle au-delà d'un réplica, le cookie sticky épingle chaque client au réplica qu'il a contacté en premier :

```yaml title="docker-compose.full.yml (extrait)"
traefik.http.services.liberty-next.loadbalancer.sticky.cookie.name: "liberty_sticky"
```

Le cookie est actif par défaut — sans effet à `replicas: 1`, essentiel au-delà. À noter : la stickiness épingle un client donné, mais elle ne partage PAS l'état Socket.IO entre les réplicas. Les tableaux de bord temps réel ou flux de chat émis par un réplica n'atteindront pas les clients épinglés sur un autre. Pour un vrai multi-réplicas, il faut un adaptateur Redis — pas encore intégré.

### La configuration dynamique

Traefik lit deux types de configuration :

| Source | Quoi |
|---|---|
| **Labels de conteneur** | Routes et middlewares par service, déclarés en ligne dans le fichier compose. |
| **`traefik/dynamic/*.yml`** | Middlewares partagés dont les valeurs contiennent `$` (les hash bcrypt de basic-auth — la substitution Compose les mangerait) et références de certificats TLS pour le mode `provided` (`tls.yml`, généré par `install.sh`). |

Deux flags assurent le câblage :

```yaml title="docker-compose.full.yml (commande Traefik)"
- --providers.file.directory=/etc/traefik/dynamic
- --providers.file.watch=true
```

`file.watch=true` signifie que **les modifications se rechargent en quelques secondes, sans redémarrer le conteneur**.

Le fichier dynamique livré embarque trois middlewares :

| Middleware | Ce qu'il fait | Usage |
|---|---|---|
| `traefik-auth` | Garde basic-auth (par défaut `admin / admin` — hash bcrypt). | Rattaché au routeur du tableau de bord via `traefik-auth@file`. |
| `security-headers` | `frameDeny`, `contentTypeNosniff`, `browserXssFilter`, `referrerPolicy: no-referrer-when-downgrade`. Lignes STS commentées (à décommenter quand HTTPS est servi). | À attacher à n'importe quel routeur avec `<router>.middlewares: "security-headers@file"`. |
| `redirect-to-https` | Redirection 301 HTTP → HTTPS. | À attacher à chaque routeur de l'entrypoint HTTP une fois l'entrypoint websecure activé. |

Quand `--ssl provided` est câblé, `install.sh` génère également `traefik/dynamic/tls.yml` (gitignored) référençant les noms de fichiers cert + key à l'intérieur de `/etc/certs`. L'opérateur peut l'éditer à la main pour des configurations plus fines (multi-domaine, intermédiaires séparés, règles SNI) — Traefik prend les modifications en compte via `file.watch`.

---

## Changer le mot de passe du tableau de bord

L'accès par défaut `admin / admin` est utilisable les 30 premières secondes. Il est à changer ensuite.

```bash
docker run --rm httpd:alpine htpasswd -nbB admin "<votre-mot-de-passe>"
# admin:$2y$05$abc...
```

Coller la ligne de sortie dans `release/traefik/dynamic/dynamic.yml` sous `http.middlewares.traefik-auth.basicAuth.users` :

```yaml title="release/traefik/dynamic/dynamic.yml"
http:
  middlewares:
    traefik-auth:
      basicAuth:
        users:
          - "admin:$2y$05$<votre-nouveau-hash>"
          # Plusieurs utilisateurs ? Une ligne par utilisateur :
          # - "ops:$2y$05$..."
```

`file.watch=true` prend la modification en compte en quelques secondes — aucun redémarrage du conteneur. Rafraîchir le tableau de bord, se reconnecter avec les nouveaux identifiants.

:::info[bcrypt vs apr1]
`htpasswd -nbB` produit un hash bcrypt (`$2y$`). Traefik accepte aussi `apr1` (`$apr1$`), mais bcrypt est le choix moderne recommandé — fonctionne dans tout environnement sans problème d'échappement.
:::

---

## Mode 1 — Let's Encrypt

Pour les hôtes accessibles depuis Internet. Traefik récupère le certificat via le challenge ACME TLS-ALPN, le persiste dans le volume nommé `traefik-acme` (monté sur `/acme` à l'intérieur de Traefik) et renouvelle automatiquement.

### Installation

```bash
./install.sh full --ssl letsencrypt \
    --domain liberty.example.com \
    --email ops@example.com
```

Prérequis :

| Prérequis | Pourquoi |
|---|---|
| Le nom d'hôte résout vers ce serveur (enregistrement DNS A et / ou AAAA). | Sans DNS, ACME ne peut pas émettre de certificat. |
| `:80` ET `:443` accessibles depuis Internet. | Le challenge TLS-ALPN s'exécute sur `:443` mais Traefik a aussi besoin de `:80` ouvert pour les redirections HTTP vers HTTPS. |
| Accès lecture-écriture au volume nommé `traefik-acme`. | Emplacement de stockage du certificat émis. |
| Une adresse email réelle et surveillée pour `ACME_EMAIL`. | Let's Encrypt y envoie les avis d'expiration. |

Ce que fait `install.sh` :

1. Ajoute `docker-compose.tls-letsencrypt.yml` à `COMPOSE_FILE` dans `.env`.
2. Définit `LIBERTY_DOMAIN=<nom-hôte>` et `ACME_EMAIL=<adresse>` dans `.env`.
3. Retire un éventuel `traefik/dynamic/tls.yml` résiduel d'une précédente installation `provided`.
4. Exécute `docker compose up -d` — Traefik démarre sur `:80` + `:443` et demande le certificat à la première requête HTTPS.

La surcharge (compacte) :

```yaml title="docker-compose.tls-letsencrypt.yml"
services:
  traefik:
    environment:
      TRAEFIK_ENTRYPOINTS_WEBSECURE_ADDRESS: ":443"
      TRAEFIK_CERTIFICATESRESOLVERS_LE_ACME_EMAIL: "${ACME_EMAIL:?ACME_EMAIL required for letsencrypt mode}"
      TRAEFIK_CERTIFICATESRESOLVERS_LE_ACME_STORAGE: "/acme/acme.json"
      TRAEFIK_CERTIFICATESRESOLVERS_LE_ACME_TLSCHALLENGE: "true"
    ports:
      - "${TRAEFIK_HTTPS_PORT:-443}:443"
    labels:
      traefik.http.routers.traefik-dashboard.entrypoints: "web,websecure"
      traefik.http.routers.traefik-dashboard.tls: "true"
      traefik.http.routers.traefik-dashboard.tls.certresolver: "le"

  liberty-next:
    labels:
      traefik.http.routers.liberty-next.entrypoints: "web,websecure"
      traefik.http.routers.liberty-next.tls: "true"
      traefik.http.routers.liberty-next.tls.certresolver: "le"

  pgadmin:
    labels:
      traefik.http.routers.pgadmin.entrypoints: "web,websecure"
      traefik.http.routers.pgadmin.tls: "true"
      traefik.http.routers.pgadmin.tls.certresolver: "le"

  portainer:
    labels:
      traefik.http.routers.portainer.entrypoints: "web,websecure"
      traefik.http.routers.portainer.tls: "true"
      traefik.http.routers.portainer.tls.certresolver: "le"
```

Trois points à remarquer :

| Détail | Pourquoi |
|---|---|
| Les réglages passent par l'interface de variables d'environnement `TRAEFIK_<UPPER_DOT_TO_UNDER>=value` de Traefik. | Le merge des surcharges compose est REPLACE-par-clé pour les valeurs tableau (`command:`) et ADD-par-clé pour les variables d'environnement. Passer par les env-vars évite de perdre les flags CLI du compose de base au moment du merge. |
| Stockage ACME sur `/acme/acme.json`. | Le compose de base monte `traefik-acme` sur `/acme` (PAS `/etc/traefik/acme/` — ce chemin correspond au bind mount `/etc/traefik` en lecture seule, donc un second sous-répertoire monté en dessous n'est pas possible). |
| Chaque routeur souscrit aux deux entrypoints (`web,websecure`). | Permet d'atteindre l'instance via `http://` ou `https://` tant qu'aucune redirection n'a été câblée — voir ci-dessous. |

### Forcer HTTP → HTTPS

Ajouter le middleware `redirect-to-https@file` (déjà défini dans `dynamic.yml`) à chaque routeur, **uniquement sur l'entrypoint `web`** :

```yaml title="<votre-override.yml> — à ajouter à COMPOSE_FILE"
services:
  liberty-next:
    labels:
      traefik.http.routers.liberty-next.middlewares: "redirect-to-https@file"
```

Ou modifier directement les labels du compose de base.

---

## Mode 2 — Certificats fournis par l'opérateur

Pour les autorités de certification d'entreprise, PKI internes ou installations air-gapped qui ne peuvent pas joindre Let's Encrypt.

### Installation

```bash
./install.sh full --ssl provided \
    --domain liberty.internal.example.com \
    --cert-dir  /etc/pki/tls \
    --cert-file liberty.crt \
    --key-file  liberty.key
```

Prérequis :

| Prérequis | Pourquoi |
|---|---|
| Un répertoire sur l'hôte contenant le `.crt` (ou `.pem`) ET le fichier de clé privée. | Les deux sont bind-mountés dans le conteneur sur `/etc/certs:ro`. |
| Le fichier de certificat correspond à `--cert-file` et le fichier de clé à `--key-file` dans ce répertoire. | `install.sh` valide la présence des deux avant de continuer. |
| Le certificat est valide pour le `--domain` passé. | Les navigateurs rejettent les non-correspondances de nom d'hôte. |

Ce que fait `install.sh` :

1. Ajoute `docker-compose.tls-provided.yml` à `COMPOSE_FILE`.
2. Définit `CERT_HOST_PATH=<chemin-absolu-vers-le-répertoire>` dans `.env` — Traefik bind-monte ce répertoire sur `/etc/certs:ro`.
3. Définit `LIBERTY_DOMAIN=<nom-hôte>` dans `.env` (ou `localhost` si `--domain` a été omis).
4. **Génère `traefik/dynamic/tls.yml`** (gitignored — toute ré-exécution de `--ssl provided` l'écrase) référençant les noms de fichiers cert + key à l'intérieur de `/etc/certs`.
5. Exécute `docker compose up -d` — Traefik démarre sur `:80` + `:443` en servant le certificat fourni.

La surcharge :

```yaml title="docker-compose.tls-provided.yml"
services:
  traefik:
    environment:
      TRAEFIK_ENTRYPOINTS_WEBSECURE_ADDRESS: ":443"
    ports:
      - "${TRAEFIK_HTTPS_PORT:-443}:443"
    volumes:
      - "${CERT_HOST_PATH:?CERT_HOST_PATH required for provided mode}:/etc/certs:ro"
    labels:
      traefik.http.routers.traefik-dashboard.entrypoints: "web,websecure"
      traefik.http.routers.traefik-dashboard.tls: "true"

  liberty-next:
    labels:
      traefik.http.routers.liberty-next.entrypoints: "web,websecure"
      traefik.http.routers.liberty-next.tls: "true"

  pgadmin: { labels: { traefik.http.routers.pgadmin.entrypoints: "web,websecure", traefik.http.routers.pgadmin.tls: "true" } }
  portainer: { labels: { traefik.http.routers.portainer.entrypoints: "web,websecure", traefik.http.routers.portainer.tls: "true" } }
```

Et le `tls.yml` généré :

```yaml title="traefik/dynamic/tls.yml (généré par install.sh --ssl provided)"
tls:
  stores:
    default:
      defaultCertificate:
        certFile: /etc/certs/liberty.crt
        keyFile: /etc/certs/liberty.key
  certificates:
    - certFile: /etc/certs/liberty.crt
      keyFile: /etc/certs/liberty.key
```

À remarquer : les routeurs NE portent PAS de `certresolver` — le certificat arrive via le store par défaut du provider fichier. Traefik le prend automatiquement.

### Éditer `tls.yml` pour davantage de règles cert / SNI

`tls.yml` est gitignored et surveillé pour rechargement. Pour des configurations multi-domaines, remplacer le fichier à la main :

```yaml title="traefik/dynamic/tls.yml — exemple multi-cert"
tls:
  certificates:
    - certFile: /etc/certs/liberty.crt
      keyFile: /etc/certs/liberty.key
    - certFile: /etc/certs/api.crt
      keyFile: /etc/certs/api.key
  stores:
    default:
      defaultCertificate:
        certFile: /etc/certs/liberty.crt
        keyFile: /etc/certs/liberty.key
```

Traefik surveille le fichier et le relit en quelques secondes.

:::info[Ré-exécuter `install.sh --ssl provided` écrase tls.yml]
Une ré-exécution de `./install.sh full --ssl provided` avec de nouvelles valeurs `--cert-file` / `--key-file` REMPLACE `tls.yml` à partir du template. Les éditions multi-cert personnalisées sont perdues. Conserver une copie de la version éditée, ou la versionner en dehors du checkout `release/`.
:::

---

## Changer de mode ultérieurement

Ré-exécuter `./install.sh full --ssl <nouveau-mode> ...` avec les mêmes secrets en place. `install.sh` :

- Échange le chemin de surcharge dans `COMPOSE_FILE`.
- Réécrit `tls.yml` (pour `provided`) ou le supprime (pour `letsencrypt`).
- Exécute `docker compose up -d`, qui prend en compte la nouvelle surcharge.

L'état géré par l'opérateur (le volume `traefik-acme`, le répertoire hôte des certificats) est préservé entre les bascules de mode.

---

## Compose vs Swarm

Le service Traefik du layout full utilise `--providers.docker` pour découvrir les backends à partir des labels de conteneur. Swarm utilise `--providers.swarm` (lit dans `deploy.labels` au lieu des `labels` racine). Les deux fichiers compose diffèrent en conséquence :

| | Compose (`docker-compose.full.yml`) | Swarm (`docker-compose.swarm.yml`) |
|---|---|---|
| **Flag de provider** | `--providers.docker=true` | `--providers.swarm=true` |
| **Filtre réseau** | `--providers.docker.network=liberty-network` | `--providers.swarm.network=liberty-network` |
| **Endpoint** | implicite (docker.sock) | `--providers.swarm.endpoint=unix:///var/run/docker.sock` |
| **Emplacement des labels** | Bloc `labels:` racine par service | Bloc `deploy.labels:` par service |
| **Suffixe de middleware** | `@docker` (ex. `traefik-strip@docker`) | `@swarm` (ex. `traefik-strip@swarm`) |
| **Middlewares du provider fichier** | `@file` (identique des deux côtés) | `@file` (identique des deux côtés) |

Les deux layouts :

- Montent la socket Docker en lecture seule.
- Montent `./traefik:/etc/traefik:ro` pour la configuration dynamique.
- Utilisent le volume nommé `traefik-acme` monté sur `/acme` (pour le stockage des certificats en mode LE).

### Particularité Swarm — Traefik doit s'exécuter sur un manager

Le provider Swarm lit l'API Docker via la socket — seuls les nœuds manager la mettent à disposition. Le compose livré épingle Traefik via :

```yaml title="docker-compose.swarm.yml (bloc deploy de Traefik)"
deploy:
  placement:
    constraints:
      - node.role == manager
```

### Particularité Swarm pour `--ssl`

`install.sh --ssl` est **réservé à Compose** — les opérateurs Swarm appliquent la surcharge TLS manuellement en passant `-c` à plusieurs reprises :

```bash
docker stack deploy \
  -c docker-compose.swarm.yml \
  -c docker-compose.tls-letsencrypt.yml \
  liberty
```

(Avec `LIBERTY_DOMAIN`, `ACME_EMAIL` préalablement exportés dans le shell — `deploy-swarm.sh` s'en charge.)

---

## Opérations courantes

### Recharger la configuration dynamique

`file.watch=true` est actif — il suffit d'éditer `traefik/dynamic/dynamic.yml` (ou `tls.yml`) et d'enregistrer. Traefik prend la modification en compte en ~5 s et émet une ligne de log. Aucun redémarrage.

### Recharger après une modification de la configuration statique

Tout ce qui figure dans le bloc `command:` du service Traefik est de la configuration **statique** — un redémarrage du conteneur est nécessaire :

```bash
docker compose up -d traefik          # COMPOSE_FILE sélectionne les bons fichiers
```

Ou, en Swarm :

```bash
docker service update --force liberty_traefik
```

### Voir les routeurs et services en direct

Le tableau de bord sur `/traefik` affiche chaque routeur avec sa règle, son entrypoint, sa chaîne de middlewares et le service cible. Utile pour diagnostiquer un « pourquoi cette route ne match pas » — Traefik montre ce qu'il voit.

### Suivre les logs Traefik

```bash
docker compose logs -f traefik
# ou en Swarm :
docker service logs -f liberty_traefik
```

L'émission / le renouvellement ACME apparaissent ici. Ainsi que les erreurs de routage (`no available server`) quand un backend est en panne.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Le domaine ne résout pas au moment où Traefik exécute le challenge ACME. | Les logs affichent `acme: error 400 — DNS problem` ou `unauthorized`. | Vérifier que `dig <domain>` renvoie l'IP du serveur depuis un résolveur public. |
| `:80` ou `:443` bloqués au pare-feu / LB cloud. | Le challenge TLS-ALPN échoue. | Ouvrir les deux sur le pare-feu hôte et le LB cloud. ACME a besoin de `:80` ouvert également. |
| Ré-exécution de `--ssl provided` — les éditions manuelles de `tls.yml` ont disparu. | La configuration multi-cert personnalisée a disparu. | Conserver une copie en dehors de `release/`. Ou versionner son propre `tls.yml`. |
| Passage de `-f docker-compose.full.yml` après l'installation. | Les surcharges TLS + applications sont silencieusement perdues au prochain `up -d`. | NE JAMAIS utiliser `-f` après l'installation — `COMPOSE_FILE` est la source de vérité. Voir [Docker → Discipline COMPOSE_FILE](./docker.md#compose-file-discipline). |
| Modification de `dynamic.yml` non rechargée. | L'ancien mot de passe basic-auth fonctionne encore. | Confirmer que `--providers.file.watch=true` figure dans le bloc command statique ; consulter les logs Traefik pour des erreurs de analyse. |
| Traefik Swarm ne démarre pas avec `cannot connect to Docker socket`. | Traefik rapporte `Cannot connect to the Docker daemon`. | Traefik est sur un worker — Swarm l'y a replanifié. L'épingler au manager. |
| Le routeur catchall liberty-next intercepte /pgadmin / /portainer. | Les URL pgAdmin / Portainer renvoient le SPA Liberty. | Vérifier les priorités des routeurs — liberty-next doit être à la priorité `1` ; pgAdmin / Portainer à `100`. |
| Certificat ACME stocké dans `/etc/traefik/acme/` au lieu de `/acme/`. | Erreurs de chemin de certificat. | Le compose de base monte `/etc/traefik:ro` (lecture seule) ; le stockage ACME se trouve sur `/acme`. La surcharge livrée utilise déjà `/acme`. |

---

## La suite

- [Docker → Full](./docker.md#full) — la visite guidée du layout full.
- [Docker → Swarm](./docker.md#swarm) — la visite guidée du layout Swarm.
- [Portainer + pgAdmin](./portainer.md) — à quoi servent les autres outils visuels livrés d'origine.
- [Production](./production.md) — la suite de la checklist de durcissement.
