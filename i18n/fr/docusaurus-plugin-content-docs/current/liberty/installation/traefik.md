---
title: Traefik (optionnel)
description: "Placer Liberty Framework derrière Traefik — reverse proxy, nom d'hôte lisible, TLS Let's Encrypt automatique via le challenge DNS ou HTTP. Extrait Docker Compose complet pour la pile Liberty."
keywords: [Liberty Framework, Traefik, reverse proxy, TLS, HTTPS, Let's Encrypt, ACME, Docker, nom d'hôte]
---

# Traefik (optionnel)

[Traefik](https://traefik.io) est un reverse proxy qui s'intègre naturellement aux piles Docker — il découvre les backends à partir des labels des conteneurs, termine le TLS pour eux et renouvelle automatiquement les certificats Let's Encrypt. Pour une installation Liberty derrière un nom d'hôte lisible (`liberty.example.com`) en HTTPS, Traefik est le chemin de moindre friction.

Cette page déroule la configuration Docker Compose de référence — Traefik + Liberty + PostgreSQL sur un hôte avec TLS automatique. nginx et Caddy sont des alternatives valides ; le schéma est le même, seule la syntaxe de configuration change.

---

## Ce que Traefik apporte

| Fonction | Pourquoi c'est utile |
|---|---|
| **Reverse proxy** | Le framework est masqué derrière un unique nom d'hôte public (`liberty.example.com`) au lieu de `host:8000`. |
| **Terminaison TLS** | HTTPS pour les navigateurs ; le framework reste lui-même en HTTP derrière Traefik. Un seul certificat à gérer au lieu d'un par service. |
| **Automatisation Let's Encrypt** | Traefik enregistre et renouvelle les certificats sans intervention humaine. |
| **Routage multi-hôte** | Un seul Traefik gère plusieurs applications sur le même hôte Docker — `liberty.example.com` pour le framework, `portainer.example.com` pour Portainer, etc. |
| **Découverte automatique** | Les nouveaux conteneurs portant les bons labels sont pris en compte immédiatement — aucun redémarrage nécessaire à l'ajout de Portainer ou d'un second réplica Liberty. |

Si vous êtes déjà derrière un reverse proxy d'entreprise (nginx, F5, AWS ALB), inutile d'ajouter Traefik — cet équipement amont termine le TLS et route. Traefik s'adresse aux installations auto-gérées.

---

## Prérequis

| Quoi | Pourquoi |
|---|---|
| Un **enregistrement DNS A public** qui pointe `liberty.example.com` vers l'IP publique de l'hôte Docker. | Le challenge HTTP-01 de Let's Encrypt doit pouvoir joindre l'hôte sur le port 80. |
| **Ports 80 et 443 ouverts** sur le pare-feu hôte et le groupe de sécurité du fournisseur cloud. | Idem. |
| Une **adresse e-mail** pour les notifications Let's Encrypt (avertissements d'expiration). | Requise par le protocole ACME. |

Pour les installations privées sans enregistrement DNS public, utiliser le **challenge DNS-01** (Traefik prend en charge de nombreux fournisseurs — Cloudflare, AWS Route 53, Gandi, etc.) à la place de HTTP-01. L'extrait compose ci-dessous utilise HTTP-01 — remplacer la configuration du résolveur par l'équivalent DNS-01 de votre fournisseur DNS.

---

## Étape 1 — Ajouter Traefik à `docker-compose.yml`

À partir de la pile Docker Liberty :

```yaml
# /opt/liberty/docker-compose.yml
services:

  traefik:
    image: traefik:v3
    container_name: traefik
    restart: unless-stopped
    command:
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --entrypoints.web.address=:80
      - --entrypoints.websecure.address=:443
      # redirect HTTP → HTTPS at the entrypoint
      - --entrypoints.web.http.redirections.entryPoint.to=websecure
      - --entrypoints.web.http.redirections.entryPoint.scheme=https
      - --entrypoints.web.http.redirections.entryPoint.permanent=true
      # Let's Encrypt — HTTP-01 challenge
      - --certificatesresolvers.le.acme.email=${ACME_EMAIL}
      - --certificatesresolvers.le.acme.storage=/letsencrypt/acme.json
      - --certificatesresolvers.le.acme.httpchallenge=true
      - --certificatesresolvers.le.acme.httpchallenge.entrypoint=web
      # Dashboard (disable in prod or protect with auth)
      # - --api.dashboard=true
      # - --api.insecure=true
    ports:
      - "80:80"
      - "443:443"
      # - "8080:8080"   # the Traefik dashboard, only if --api.insecure=true above
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik-letsencrypt:/letsencrypt

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
      LIBERTY_JWT_SECRET: ${LIBERTY_JWT_SECRET}
      LIBERTY_LICENSE_KEY: ${LIBERTY_LICENSE_KEY:-}
      DATABASE_URL: postgresql+asyncpg://liberty:${POSTGRES_PASSWORD}@postgres:5432/liberty
    volumes:
      - /opt/liberty/apps:/apps:ro
      - liberty-logs:/var/log/liberty
    # No more host-side port mapping — Traefik fronts it
    # ports:
    #   - "8000:8000"
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.liberty.rule=Host(`liberty.example.com`)"
      - "traefik.http.routers.liberty.entrypoints=websecure"
      - "traefik.http.routers.liberty.tls.certresolver=le"
      - "traefik.http.services.liberty.loadbalancer.server.port=8000"

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

volumes:
  postgres-data:
  liberty-logs:
  traefik-letsencrypt:
```

Quatre points à noter :

| Modification | Pourquoi |
|---|---|
| **`ports: 8000:8000` retiré** du service `liberty`. | Traefik route le trafic vers le port 8000 interne du conteneur via le réseau Docker — le port hôte n'a pas besoin d'être exposé. |
| **`labels:`** sur le service `liberty`. | Traefik lit ces labels pour câbler la route — la règle de nom d'hôte, l'entrypoint (`websecure` = port 443), le résolveur TLS, le port cible à l'intérieur du conteneur. |
| **Redirection HTTP → HTTPS** dans le `command` de Traefik. | Les requêtes vers `http://liberty.example.com` sont redirigées automatiquement vers `https://liberty.example.com`. |
| **`/var/run/docker.sock:ro`** monté dans Traefik. | En lecture seule — Traefik n'inspecte que les labels des conteneurs, il ne pilote jamais Docker. |

---

## Étape 2 — Ajouter les variables Traefik à `.env`

```bash
# /opt/liberty/.env
ACME_EMAIL=ops@example.com         # for Let's Encrypt cert expiry notices
POSTGRES_PASSWORD=...              # (unchanged from the basic Docker setup)
LIBERTY_MASTER_KEY=...
LIBERTY_JWT_SECRET=...
LIBERTY_LICENSE_KEY=
```

---

## Étape 3 — Démarrer

```bash
cd /opt/liberty
docker compose up -d
```

Ce qui se passe, dans l'ordre :

1. Les conteneurs Postgres + Liberty démarrent comme avant.
2. Traefik démarre et lit la socket Docker → trouve le conteneur `liberty` avec ses labels de routage.
3. Traefik tente le challenge HTTP-01 pour `liberty.example.com` :
   - Let's Encrypt envoie une requête à `http://liberty.example.com/.well-known/acme-challenge/<token>`.
   - Traefik intercepte ce chemin et répond avec le jeton attendu.
   - Let's Encrypt délivre le certificat.
4. Le certificat est stocké dans `traefik-letsencrypt:/letsencrypt/acme.json`.
5. `https://liberty.example.com` sert désormais l'UI Liberty derrière un certificat TLS valide.

Vérifier :

```bash
curl -I https://liberty.example.com
# HTTP/2 200
# ... server: liberty ...
```

Si la délivrance Let's Encrypt échoue :

```bash
docker compose logs traefik | grep -E "(acme|error)"
```

Les causes fréquentes sont listées ci-dessous.

---

## Problèmes Traefik courants

| Symptôme | Cause | Correction |
|---|---|---|
| La délivrance du certificat est bloquée ou échoue. | L'enregistrement DNS A ne pointe pas vers l'hôte. | Vérifier avec `dig liberty.example.com +short`. |
| `connection refused` depuis Let's Encrypt. | Le port 80 est fermé (pare-feu / groupe de sécurité cloud). | Ouvrir 80/tcp et 443/tcp en entrée. |
| `too many failed authorizations`. | Vous heurtez la limite de débit Let's Encrypt en cours de mise au point. | Passer sur l'endpoint **staging** le temps de la mise au point : ajouter `--certificatesresolvers.le.acme.caServer=https://acme-staging-v02.api.letsencrypt.org/directory` à la commande Traefik. |
| `404 not found` depuis `https://liberty.example.com`. | Les labels du conteneur Liberty sont absents ou le nom d'hôte ne correspond pas. | `docker inspect liberty | grep traefik` pour vérifier la présence des labels. |
| Le navigateur affiche le certificat mais avec un avertissement. | Le certificat vient du staging Let's Encrypt (non reconnu). | Retirer la ligne `caServer=...staging...` et redélivrer. |

---

## Challenge DNS-01 (installations privées)

Pour les installations où le port 80 n'est pas joignable depuis l'Internet public (réseaux d'entreprise, hôtes isolés), utiliser **DNS-01**. Le nom d'hôte Liberty peut toujours appartenir à une zone DNS publique que vous contrôlez ; Traefik prouve la propriété en créant un enregistrement TXT chez le fournisseur DNS.

Remplacer les lignes `httpchallenge` par :

```yaml
- --certificatesresolvers.le.acme.dnschallenge=true
- --certificatesresolvers.le.acme.dnschallenge.provider=cloudflare
```

Et ajouter les identifiants du fournisseur en variables d'environnement (spécifiques au fournisseur — Cloudflare utilise `CF_API_EMAIL` + `CF_API_KEY`, Route 53 utilise des credentials AWS, etc.). Traefik prend en charge **des dizaines** de fournisseurs DNS — voir la [liste des fournisseurs ACME Traefik](https://doc.traefik.io/traefik/https/acme/#providers).

Le challenge DNS débloque aussi les **certificats wildcard** (`*.example.com`) quand plusieurs applications sont à héberger. HTTP-01 ne gère pas les wildcards.

---

## Routage multi-applications

Pour héberger Portainer (ou tout autre service) sur le même hôte Docker derrière Traefik, ajouter des labels à ce service :

```yaml
portainer:
  image: portainer/portainer-ce:latest
  # ... (same as before, but remove the host-side port mapping)
  # ports:
  #   - "9443:9443"
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.portainer.rule=Host(`portainer.example.com`)"
    - "traefik.http.routers.portainer.entrypoints=websecure"
    - "traefik.http.routers.portainer.tls.certresolver=le"
    # Portainer's HTTPS port — we route HTTP from Traefik over the internal network
    - "traefik.http.services.portainer.loadbalancer.server.port=9000"
    # ... (note: port 9000 is the HTTP UI; 9443 is the self-signed HTTPS we now bypass)
```

Ajouter un second enregistrement DNS A pour `portainer.example.com`. Au prochain `compose up`, Traefik délivre un second certificat pour ce nom d'hôte et route en conséquence.

---

## Le tableau de bord Traefik (avancé)

Le tableau de bord sur `:8080/dashboard/` montre chaque routeur, service et certificat. **Ne pas activer `--api.insecure=true` en production** — quiconque atteint le port voit votre configuration de routage. Deux options sûres :

| Option | Comment |
|---|---|
| **Désactiver le tableau de bord** | Par défaut ; aucun drapeau supplémentaire. |
| **Exposer le tableau de bord derrière Traefik lui-même, protégé par mot de passe** | Utiliser le service `api@internal` + un middleware BasicAuth. Marche à suivre dans la documentation Traefik. |

La plupart des installations n'en ont pas besoin — Portainer fait apparaître ce qu'on irait y inspecter (services qui tournent, état de redémarrage), et les journaux Traefik couvrent les cas de diagnostic.

---

## Quand NE PAS utiliser Traefik

| Cas de figure | Meilleur chemin |
|---|---|
| nginx ou Caddy déjà en place comme point d'entrée. | Ajouter un bloc `location` Liberty à votre configuration existante ; inutile d'introduire Traefik. |
| Derrière un load balancer cloud (AWS ALB, GCP LB) qui termine le TLS. | Le LB cloud assure le même rôle. N'utiliser Traefik que pour profiter de sa configuration pilotée par labels. |
| Installation mono-hôte sans besoin de TLS (intranet). | Sauter complètement le reverse proxy — `host:8000` suffit. |
| Plusieurs réplicas Liberty derrière un load balancer matériel. | Le LB gère le routage ; Liberty reste interne. |

Traefik brille sur les **hôtes Docker auto-gérés avec plusieurs services et Let's Encrypt**. Pour les autres formes, plus simple vaut mieux.

---

## La suite

- [Portainer](./portainer.md) — coupler Traefik à Portainer pour une mise en place Docker entièrement pilotée par l'UI.
- [Production](./production.md) — schémas multi-réplicas, stratégie de sauvegarde, routage des journaux.
- [Docker](./docker.md) — la pile sous-jacente que Traefik met en frontal.
