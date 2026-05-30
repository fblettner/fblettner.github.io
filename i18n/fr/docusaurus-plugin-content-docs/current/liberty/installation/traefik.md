---
title: Traefik
description: "Le reverse proxy Traefik est pré-câblé dans les layouts Full Docker et Swarm — tableau de bord protégé par basic-auth sur /traefik, middleware security-headers, cookies sticky pour Socket.IO. Le câblage Let's Encrypt se fait en décommentant quatre lignes et en renseignant deux variables d'environnement. Le fichier de configuration dynamique se recharge en quelques secondes sans redémarrage."
keywords: [Liberty Framework, Traefik, reverse proxy, TLS, Let's Encrypt, tableau de bord, basic-auth, configuration dynamique, en-têtes de sécurité, cookie sticky, Socket.IO, --providers.swarm]
---

# Traefik

Traefik est **fourni d'origine** dans le layout Full Docker (`docker-compose.full.yml`) et dans le layout Swarm (`docker-compose.swarm.yml`). Il s'exécute comme service `traefik`, termine HTTP sur `:80`, route par préfixe de chemin et met à disposition un tableau de bord sur `/traefik`. Aucune installation séparée — `./install.sh full` ou `./deploy-swarm.sh` le démarrent avec les autres services.

Cette page décrit ce qui est pré-câblé, comment changer le mot de passe du tableau de bord, comment activer TLS (Let's Encrypt) et en quoi Swarm diffère de Compose.

Pour la visite guidée des layouts, lire d'abord [Docker → Full](./docker.md#full) et [Docker → Swarm](./docker.md#swarm).

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
| **`traefik/dynamic/*.yml`** | Middlewares partagés dont les valeurs contiennent `$` (les hash bcrypt de basic-auth — la substitution Compose les mangerait) et middlewares destinés à être réutilisés entre routeurs. |

Deux flags assurent le câblage :

```yaml title="docker-compose.full.yml (commande Traefik)"
- --providers.file.directory=/etc/traefik/dynamic
- --providers.file.watch=true
```

`file.watch=true` signifie que **les modifications se rechargent en quelques secondes, sans redémarrer le conteneur**. Déposer un nouveau middleware dans `traefik/dynamic/dynamic.yml` suffit pour qu'il soit actif.

Le fichier dynamique livré embarque trois middlewares :

| Middleware | Ce qu'il fait | Usage |
|---|---|---|
| `traefik-auth` | Garde basic-auth (par défaut `admin / admin` — hash bcrypt). | Rattaché au routeur du tableau de bord via `traefik-auth@file`. |
| `security-headers` | `frameDeny`, `contentTypeNosniff`, `browserXssFilter`, `referrerPolicy: no-referrer-when-downgrade`. Lignes STS commentées (à décommenter quand HTTPS est servi). | À attacher à n'importe quel routeur avec `<router>.middlewares: "security-headers@file"`. |
| `redirect-to-https` | Redirection 301 HTTP → HTTPS. | À attacher à chaque routeur de l'entrypoint HTTP une fois l'entrypoint websecure activé. |

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

## Activer TLS (Let's Encrypt)

Le fichier compose est livré avec TLS **commenté** pour garder l'installation en une étape. Activer TLS demande cinq modifications.

### 1. Faire pointer le domaine sur le serveur

Enregistrement DNS `A` (et / ou `AAAA`) de `liberty.example.com` vers l'IP publique du serveur. Sans cela, le challenge HTTP-01 / TLS-01 de Let's Encrypt ne peut pas émettre de certificat.

### 2. Renseigner les deux variables d'environnement

Dans `.env` :

```
LIBERTY_DOMAIN=liberty.example.com
ACME_EMAIL=ops@example.com
```

`ACME_EMAIL` reçoit les avis d'expiration envoyés par Let's Encrypt — utiliser une adresse réelle et consultée.

### 3. Décommenter l'entrypoint websecure et le résolveur ACME

Dans `docker-compose.full.yml`, sous le `command:` du service `traefik` :

```yaml title="docker-compose.full.yml (commande Traefik — DÉCOMMENTÉE)"
command:
  - --api.dashboard=true
  - --providers.docker=true
  - --providers.docker.exposedbydefault=false
  - --providers.docker.network=liberty-network
  - --providers.file.directory=/etc/traefik/dynamic
  - --providers.file.watch=true
  - --entrypoints.web.address=:80
  - --entrypoints.websecure.address=:443                                # ← décommenter
  - --certificatesresolvers.le.acme.email=${ACME_EMAIL:?ACME_EMAIL required for TLS}  # ← décommenter
  - --certificatesresolvers.le.acme.storage=/etc/traefik/acme/acme.json # ← décommenter
  - --certificatesresolvers.le.acme.tlschallenge=true                    # ← décommenter
ports:
  - "${TRAEFIK_HTTP_PORT:-80}:80"
  - "443:443"                                                            # ← décommenter
```

### 4. Ajouter `tls.certresolver` à chaque routeur

Pour chaque routeur appelé à servir HTTPS (liberty-next, pgadmin, portainer, traefik-dashboard), ajouter trois labels :

```yaml
traefik.http.routers.<name>.entrypoints: "websecure"
traefik.http.routers.<name>.tls.certresolver: "le"
traefik.http.routers.<name>.rule: "Host(`${LIBERTY_DOMAIN}`) && PathPrefix(`/<path>`)"
```

Le matcher `Host()` dans la règle indique à Traefik quel certificat servir (sinon il n'a aucun moyen de savoir à quel domaine se rapporte une requête). Lier les routes à `LIBERTY_DOMAIN` une fois pour toutes et le résolveur de certificats fait le reste.

### 5. Appliquer

```bash
docker compose -f docker-compose.full.yml up -d
```

À la première requête vers `https://liberty.example.com/`, Traefik exécute le challenge TLS-01 et stocke le certificat dans le volume nommé `traefik-acme`. Le renouvellement automatique a lieu tous les 60 jours, de manière transparente.

### Forcer HTTP → HTTPS

Ajouter le middleware `redirect-to-https@file` (déjà défini dans `dynamic.yml`) à chaque routeur de l'entrypoint `web` :

```yaml
traefik.http.routers.<name>.middlewares: "redirect-to-https@file"
traefik.http.routers.<name>.entrypoints: "web"
```

Les navigateurs atteignant `http://liberty.example.com/` reçoivent un `301` vers `https://`.

---

## Compose vs Swarm

Les deux fichiers compose diffèrent par la façon dont Traefik découvre les services :

| | Compose (`docker-compose.full.yml`) | Swarm (`docker-compose.swarm.yml`) |
|---|---|---|
| **Flag de provider** | `--providers.docker=true` | `--providers.swarm=true` |
| **Filtre réseau** | `--providers.docker.network=liberty-network` | `--providers.swarm.network=liberty-network` |
| **Endpoint** | implicite (docker.sock) | `--providers.swarm.endpoint=unix:///var/run/docker.sock` |
| **Emplacement des labels** | Bloc `labels:` racine par service | Bloc `deploy.labels:` par service (Swarm lit les labels à cet endroit) |
| **Suffixe de middleware** | `@docker` (ex. `traefik-strip@docker`) | `@swarm` (ex. `traefik-strip@swarm`) |
| **Middlewares du provider fichier** | `@file` (identique des deux côtés) | `@file` (identique des deux côtés) |

Les deux layouts :
- Montent la socket Docker en lecture seule.
- Montent `./traefik:/etc/traefik:ro` pour la configuration dynamique et ACME.
- Utilisent le volume nommé `traefik-acme` pour le stockage des certificats (survit aux destructions de stack).

### Particularité Swarm — Traefik doit s'exécuter sur un manager

Le provider Swarm lit l'API Docker via la socket — seuls les nœuds manager la mettent à disposition. Le compose livré épingle Traefik via :

```yaml title="docker-compose.swarm.yml (bloc deploy de Traefik)"
deploy:
  placement:
    constraints:
      - node.role == manager
```

Ne pas modifier cette contrainte tant que l'API Docker n'a pas été activée sur les workers (rare et déconseillé).

---

## Le mode de publication des ports (Swarm)

Swarm propose deux modes de publication de port :

| Mode | Comportement |
|---|---|
| **`mode: ingress`** *(défaut)* | Le routing mesh de Swarm équilibre le trafic sur tous les nœuds, perdant au passage l'IP cliente réelle. |
| **`mode: host`** *(utilisé par le compose livré)* | Chaque conteneur Traefik se lie directement au port de l'hôte. Conserve l'IP cliente réelle — essentiel pour les logs d'accès / rate limiting basés sur l'IP. |

Le compromis : `host` impose un seul conteneur Traefik par nœud (à cause du binding de port). Avec Traefik en `replicas: 1` épinglé sur le manager, cela convient. Au-delà de 1, passer en `ingress` et accepter la réécriture d'IP.

---

## Opérations courantes

### Recharger la configuration dynamique

`file.watch=true` est actif — il suffit d'éditer `traefik/dynamic/dynamic.yml` et d'enregistrer. Traefik prend la modification en compte en ~5 s et émet une ligne de log. Aucun redémarrage.

### Recharger après une modification de la configuration statique

Tout ce qui est dans le bloc `command:` du service Traefik est de la configuration **statique** — un redémarrage du conteneur est nécessaire :

```bash
docker compose -f docker-compose.full.yml up -d traefik
```

Ou, en Swarm :

```bash
docker service update --force liberty_traefik
```

### Voir les routeurs et services en direct

Le tableau de bord sur `/traefik` affiche chaque routeur avec sa règle, son entrypoint, sa chaîne de middlewares et le service cible. Utile pour diagnostiquer un « pourquoi cette route ne match pas » — Traefik montre ce qu'il voit.

### Suivre les logs Traefik

```bash
docker compose -f docker-compose.full.yml logs -f traefik
# ou en Swarm :
docker service logs -f liberty_traefik
```

L'émission / le renouvellement ACME apparaissent ici. Ainsi que les erreurs de routage (`no available server`) quand un backend est en panne.

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Oubli d'ajouter `` Host(`${LIBERTY_DOMAIN}`) `` à la règle après activation de TLS. | Traefik sert le certificat par défaut (`TRAEFIK DEFAULT CERT`) et le navigateur affiche un avertissement. | Lier la règle de chaque routeur au domaine pour lequel le certificat a été obtenu. |
| Le domaine ne résout pas vers le serveur au moment où Traefik tente d'émettre. | Les logs affichent `acme: error 400 — DNS problem` ou `unauthorized`. | Vérifier que `dig <domain>` renvoie l'IP du serveur depuis un résolveur public. |
| Ports 80 / 443 non exposés (pare-feu, LB cloud en amont). | Le challenge TLS-01 échoue. | Ouvrir `:80` (et `:443` une fois le certificat émis) sur le pare-feu hôte et le LB cloud. ACME a besoin de `:80` ouvert même quand seul HTTPS est servi — le challenge l'utilise. |
| Modification de `dynamic.yml` non rechargée. | L'ancien mot de passe basic-auth fonctionne encore. | Vérifier que `--providers.file.watch=true` figure dans le bloc command statique. Consulter les logs Traefik pour des erreurs de parsing YAML. |
| Traefik Swarm ne démarre pas avec `cannot connect to Docker socket`. | `traefik_1` rapporte `Cannot connect to the Docker daemon`. | Traefik est sur un worker — Swarm l'y a replanifié. L'épingler au manager : `deploy.placement.constraints: [node.role == manager]`. |
| Le routeur catchall liberty-next intercepte /pgadmin / /portainer. | Les URL pgAdmin / Portainer renvoient le SPA Liberty. | Vérifier les priorités des routeurs — liberty-next doit être à la priorité `1` ; pgadmin / portainer à `100`. Les priorités se trouvent dans les labels des routeurs. |
| Cookie sticky présent mais les événements temps réel n'atteignent pas un second client. | Deux navigateurs voient des données temps réel différentes. | La stickiness épingle un client à un réplica ; elle ne partage pas l'état. Soit s'en tenir à `replicas: 1` (le défaut), soit câbler un adaptateur Redis pour Socket.IO. |

---

## La suite

- [Docker → Full](./docker.md#full) — la visite guidée du layout full.
- [Docker → Swarm](./docker.md#swarm) — la visite guidée du layout Swarm.
- [Portainer](./portainer.md) — à quoi servent Portainer et pgAdmin livrés d'origine.
- [Production](./production.md) — la suite de la checklist de durcissement.
