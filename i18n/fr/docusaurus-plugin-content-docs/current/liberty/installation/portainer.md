---
title: Outils visuels intégrés
description: "Utiliser les instances Portainer et pgAdmin livrées avec la disposition Docker Full de Liberty — premier démarrage, tâches d'exploitation courantes, arbitrages de sécurité autour de la socket Docker, spécificités Swarm."
keywords: [Liberty Framework, Portainer, pgAdmin, intégré, socket Docker, disposition full, Swarm, Traefik, exploitation visuelle, opérateur]
---

# Outils visuels intégrés — Portainer & pgAdmin

La [disposition Docker Full](./docker.md#full) et la [disposition Swarm](./docker.md#swarm) livrent deux outils visuels d'exploitation pré-câblés derrière Traefik :

| Outil | Chemin | À quoi il sert |
|---|---|---|
| [Portainer CE](https://www.portainer.io) | `/portainer` | UI au niveau conteneur — voir chaque service, suivre les journaux, redémarrer, ouvrir un shell, parcourir les volumes. |
| [pgAdmin](https://www.pgadmin.org) | `/pgadmin` | GUI Postgres — parcourir les schémas, exécuter du SQL, inspecter les plans de requête, gérer les rôles. |

Aucune installation séparée, aucun fichier compose supplémentaire. Démarrer la pile Full ou Swarm et les deux outils sont disponibles sur le même nom d'hôte que Liberty lui-même.

:::info[Absents de la disposition Light]
La disposition Light est un conteneur unique avec une base SQLite — pas de Postgres, pas de Traefik. Portainer et pgAdmin ne sont livrés qu'avec les dispositions Full et Swarm. Pour passer de Light à ces outils, basculer sur [Full](./docker.md#full).
:::

---

## Ce qui est disponible d'emblée

Ouvrir l'hôte dans un navigateur : Traefik route les trois chemins :

| Chemin | Service derrière | État au premier démarrage |
|---|---|---|
| `/` *(catchall)* | liberty-next | Se connecter avec `admin` + `LIBERTY_ADMIN_PASSWORD` du `.env`. |
| `/portainer` | Portainer CE | Vide — la première visite navigateur déclenche l'assistant de configuration admin. |
| `/pgadmin` | pgAdmin 4 | Se connecter avec `admin@example.com` + `PGADMIN_PASSWORD` du `.env`. |

`install.sh full` génère des secrets aléatoires pour les deux mots de passe au premier démarrage et les stocke dans `.env` en mode `0600`. Les relire une fois avec `grep -E '^(PGADMIN_PASSWORD|LIBERTY_ADMIN_PASSWORD)=' .env`.

---

## Portainer — premier démarrage

1. Ouvrir `http://<host>/portainer` (ou `https://` une fois [le TLS câblé](./traefik.md)).
2. La page est **l'assistant de configuration admin initial** — Portainer considère le premier visiteur comme l'opérateur d'amorçage. Créer le compte admin : nom d'utilisateur (souvent `admin`) + mot de passe d'au moins 12 caractères.
3. L'endpoint Docker local est détecté automatiquement (le compose monte la socket — voir plus bas). Inutile d'ajouter un environnement.
4. Passer l'invite de licence — l'Édition Communautaire est gratuite pour un usage auto-hébergé.

Une fois l'assistant terminé, le tableau de bord liste chaque conteneur s'exécutant sur l'hôte. La pile Liberty apparaît comme le projet Compose `liberty` (ou la pile Swarm `liberty`).

:::warning[La première visite EST la configuration admin]
Si l'URL reste exposée avant qu'une personne de confiance ne s'y connecte, le premier inconnu à l'atteindre s'approprie le compte admin. Ouvrir l'URL soi-même juste après la fin de `install.sh full`, ou bloquer l'accès public au pare-feu tant que l'assistant n'est pas terminé.
:::

---

## Le montage de la socket Docker — ce qui fait fonctionner Portainer

Portainer doit dialoguer avec le démon Docker pour inspecter et gérer les conteneurs. Le service intégré le fait par un bind-mount de la socket hôte :

```yaml title="docker-compose.full.yml (service portainer)"
portainer:
  image: portainer/portainer-ce:latest
  restart: unless-stopped
  command: -H unix:///var/run/docker.sock
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock   # surface privilégiée
    - portainer-data:/data
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.portainer.rule=PathPrefix(`/portainer`)"
    - "traefik.http.routers.portainer.priority=100"
    - "traefik.http.services.portainer.loadbalancer.server.port=9000"
    - "traefik.http.middlewares.portainer-strip.stripprefix.prefixes=/portainer"
    - "traefik.http.routers.portainer.middlewares=portainer-strip"
```

La socket Docker est une **surface privilégiée** : tout ce qui peut la lire dispose d'un contrôle équivalent à root sur chaque conteneur de l'hôte, y compris la capacité de lire les variables d'environnement (clé maîtresse, secret JWT, mot de passe Postgres) depuis un conteneur Liberty en cours d'exécution.

| Implication | Mesure de protection |
|---|---|
| Un admin Portainer = root sur chaque conteneur de l'hôte. | Choisir un mot de passe admin fort pendant l'assistant ; le renouveler via *My account → Change password*. |
| Quiconque peut atteindre `/portainer` sur le réseau peut tenter de s'approprier le compte. | Restreindre le chemin en bordure (pare-feu, [middleware basic-auth Traefik](./traefik.md), liste blanche d'IP) tant que TLS et un véritable admin ne sont pas en place. |
| Cette surface peut ne pas être souhaitée dans la pile. | Supprimer le bloc de service `portainer:` et le volume `portainer-data:` de `docker-compose.full.yml` puis `docker compose up -d`. Le reste de la pile n'est pas affecté. |

Le volume nommé `portainer-data` contient la base propre à Portainer — compte admin, paramètres, définitions d'endpoints. `backup.sh` en prend un instantané.

---

## Ce qui est possible depuis le Portainer intégré

Cliquer sur **Containers** dans la navigation de gauche. La disposition Full affiche cinq services :

| Service | En un coup d'œil |
|---|---|
| `liberty-next` | Statut, ports, compteur de redémarrages, étiquette d'image. |
| `pg` | Santé Postgres, taille du volume, port. |
| `pgadmin` | Statut — et oui, pgAdmin se gère depuis Portainer (ou l'inverse). |
| `portainer` | Lui-même — méta-gestion. |
| `traefik` | Statut du routeur de bordure + lien vers le tableau de bord en direct. |

Opérations courantes :

| Tâche | Emplacement dans Portainer | Équivalent CLI |
|---|---|---|
| Suivre les journaux d'un service | Containers → *service* → *Logs* (rafraîchissement auto, filtre par niveau) | `docker compose logs -f <service>` |
| Redémarrer un service | Containers → *service* → *Restart* | `docker compose restart <service>` |
| Recréer un service (en récupérant une nouvelle image) | Containers → *service* → *Recreate* → cocher *Pull latest image* | `docker compose pull <service> && docker compose up -d <service>` |
| Ouvrir un shell dans un conteneur | Containers → *service* → *Console* → *Connect* | `docker compose exec <service> bash` |
| Inspecter les variables d'environnement (lecture seule) | Containers → *service* → onglet *Inspect* → `Config.Env` | `docker inspect <container>` |
| Vérifier l'usage des ressources (CPU / RAM) | Containers → *service* → *Stats* | `docker stats` |
| Parcourir / inspecter un volume | Volumes → *volume* → *Browse* | `docker run --rm -it -v <vol>:/data alpine sh` |

Les variables d'environnement affichées dans Portainer sont **en lecture seule** — leur modification passe par une édition de `.env` suivie d'un recreate. Les valeurs affichées incluent des secrets (clé maîtresse, secret JWT) ; traiter le compte admin Portainer en conséquence.

---

## pgAdmin — premier démarrage

Même logique d'URL unique : ouvrir `http://<host>/pgadmin` et se connecter avec :

| Champ | Valeur |
|---|---|
| Email | `admin@example.com` (l'utilisateur par défaut provisionné par le compose) |
| Mot de passe | `PGADMIN_PASSWORD` du `.env` |

Le compose pré-câble deux éléments qui font fonctionner le montage avec préfixe de chemin :

```yaml title="docker-compose.full.yml (extrait du service pgadmin)"
pgadmin:
  image: dpage/pgadmin4:latest
  environment:
    PGADMIN_DEFAULT_EMAIL: admin@example.com
    PGADMIN_DEFAULT_PASSWORD: "${PGADMIN_PASSWORD:?PGADMIN_PASSWORD is required}"
    SCRIPT_NAME: /pgadmin            # indique à pgAdmin que ses liens se trouvent sous /pgadmin
  volumes:
    - pgadmin-data:/var/lib/pgadmin
  labels:
    - "traefik.enable=true"
    - "traefik.http.routers.pgadmin.rule=PathPrefix(`/pgadmin`)"
    - "traefik.http.routers.pgadmin.priority=100"
    - "traefik.http.services.pgadmin.loadbalancer.server.port=80"
```

`SCRIPT_NAME=/pgadmin` empêche pgAdmin de générer des liens absolus vers `/login`, `/static/...` (qui renverraient 404 puisque Traefik route `/pgadmin/*` ici, pas `/`). Ne pas le modifier sans mettre à jour également la règle du routeur Traefik.

Le volume `pgadmin-data` contient les enregistrements de serveurs sauvegardés, l'historique des requêtes et les préférences. `backup.sh` en prend un instantané.

### Enregistrer le Postgres intégré

La première connexion ouvre un tableau de bord vide. Clic droit sur **Servers → Register → Server…** :

| Champ | Valeur |
|---|---|
| Name (onglet General) | `liberty` (au choix) |
| Host (onglet Connection) | `pg` (le nom de service du compose — les deux conteneurs partagent le réseau par défaut) |
| Port | `5432` |
| Username | `postgres` (ou la valeur de `POSTGRES_USER` dans `.env`) |
| Password | `POSTGRES_PASSWORD` du `.env` (cocher *Save password*) |

Le schéma Liberty se trouve dans la base `liberty` par défaut. À partir de là, l'arborescence pgAdmin habituelle : schémas → tables → query tool.

---

## Tâches d'exploitation courantes via les outils intégrés

| Besoin… | Outil | Chemin |
|---|---|---|
| Suivre les journaux liberty-next en reproduisant un bug | Portainer | Containers → `liberty-next` → *Logs* → *Auto-refresh* |
| Redémarrer Liberty après édition de `.env` | Portainer | Containers → `liberty-next` → *Recreate* (pour que le nouvel environnement soit lu) |
| Recréer Liberty en récupérant la dernière image | Portainer | Containers → `liberty-next` → *Recreate* → cocher *Pull latest image* |
| Voir la croissance du volume Postgres | Portainer | Volumes → `pg-data` → colonne taille |
| Exécuter un `SELECT` ad hoc sur la base Liberty | pgAdmin | Servers → liberty → Databases → liberty → *Query Tool* |
| Vérifier qu'une migration a bien créé sa table | pgAdmin | Servers → liberty → Databases → liberty → Schemas → public → Tables |
| Observer les sessions Postgres en direct | pgAdmin | Servers → liberty → *Dashboard* → Server activity |

Pour tout le reste (réinitialisation de mot de passe admin, inspection de licence, commandes `liberty-admin`), le tableau de [Docker → Opérations courantes](./docker.md#common-operations) reste valable — ce sont des workflows CLI.

---

## Spécificités Swarm

Dans la [disposition Swarm](./docker.md#swarm), Portainer et pgAdmin sont déployés de la même manière, avec deux contraintes supplémentaires :

| Contrainte | Pourquoi |
|---|---|
| Portainer épinglé à `node.role == manager` | Il a besoin de `/var/run/docker.sock`, que seuls les managers mettent à disposition. Le compose le règle automatiquement. |
| pgAdmin épinglé à un manager (ou là où `pg` s'exécute) | Le volume `pgadmin-data` doit se rattacher sur place — même logique que `pg`. |

```yaml title="docker-compose.swarm.yml (bloc deploy de portainer)"
portainer:
  image: portainer/portainer-ce:latest
  command: -H unix:///var/run/docker.sock
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
    - portainer-data:/data
  deploy:
    replicas: 1
    placement:
      constraints:
        - node.role == manager
```

Ne pas tenter de monter Portainer au-delà de `replicas: 1` — il stocke sa base admin sur `portainer-data` et ne dispose d'aucun clustering intégré. Même règle pour pgAdmin.

---

## Pièges courants

| Piège | Ce qui se passe réellement | À éviter par |
|---|---|---|
| **Recréer `liberty-next` pour recharger une édition TOML.** | Le *Recreate* de Portainer tue puis redémarre le conteneur — or les modifications de TOML poussées via l'UI Settings sont déjà actives. Redémarrage inutile, ~10 s d'indisponibilité. | Les TOML se rechargent à l'enregistrement. Le bouton global est `POST /admin/reload` (ou *Settings → Reload*). Ne recréer que pour appliquer une nouvelle étiquette d'image ou une modification de `.env`. |
| **Redémarrer `pg` sans arrêter `liberty-next` au préalable.** | Le pool de Liberty voit la moitié de ses connexions tomber en plein milieu d'une requête ; les requêtes suivantes échouent jusqu'à reconstitution du pool. | Arrêter `liberty-next` d'abord (Portainer → *Stop*), redémarrer `pg`, démarrer `liberty-next`. Ou redémarrer toute la pile dans l'ordre. |
| **Éditer les variables d'environnement dans Portainer.** | L'onglet env de Portainer est en lecture seule — pas de bouton *Save*. Certains opérateurs les copient, les éditent, les recollent, et rien ne se passe. | Éditer `.env` sur l'hôte, puis *Recreate* le conteneur pour que les nouvelles valeurs soient lues au démarrage. |
| **Exposer `/portainer` à l'Internet public avant d'avoir terminé l'assistant.** | Le premier inconnu à charger la page s'approprie le compte admin. | Lancer l'assistant immédiatement après `install.sh full`. Sinon, filtrer le chemin au pare-feu jusqu'à l'avoir fait. |
| **Considérer la socket Docker comme inoffensive.** | Elle ne l'est pas — Portainer + socket = root sur chaque conteneur, y compris l'environnement Liberty (clé maîtresse, secret JWT, mot de passe DB). | Mot de passe admin Portainer fort ; envisager de supprimer le service entièrement si personne n'en a besoin. |

---

## Quand retirer les outils intégrés

Les services intégrés sont pratiques, pas obligatoires. Les retirer si :

- **La conformité interdit la socket Docker dans la pile applicative.** Supprimer le bloc `portainer:` + le volume `portainer-data:` ; gérer Docker depuis un hôte séparé et verrouillé.
- **Un pgAdmin / DBeaver / DataGrip central existe déjà.** Supprimer le bloc `pgadmin:` + le volume `pgadmin-data:` ; connecter l'outil central au port `5432` exposé par l'hôte (ou via un tunnel SSH).
- **La RAM est serrée (≤ 2 Go).** Chaque outil ajoute ~50–150 Mo résidents — peu, mais pas zéro.

Après suppression de l'un ou l'autre service :

```bash
docker compose up -d                                   # COMPOSE_FILE choisit les bons fichiers ; réconcilie la pile
docker volume rm <removed-volume>                       # uniquement en cas de certitude
```

Le reste de la pile Liberty (liberty-next, pg, traefik) n'est pas affecté.

---

## La suite

- [Docker → Full](./docker.md#full) — vue d'ensemble de la disposition Full, avec le tableau des volumes.
- [Docker → Swarm](./docker.md#swarm) — placement et notes de déploiement spécifiques à Swarm.
- [Traefik](./traefik.md) — ajouter le TLS devant `/portainer` et `/pgadmin` (même règle `Host` que liberty-next).
- [Production](./production.md) — checklist de durcissement (rotation du mot de passe admin, listes blanches d'IP source, supervision hors hôte).
