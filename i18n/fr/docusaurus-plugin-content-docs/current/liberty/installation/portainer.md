---
title: Portainer (optionnel)
description: "Piloter la pile Docker Liberty visuellement — voir l'état des conteneurs, suivre les journaux, redémarrer les services et éditer la pile compose depuis un navigateur. Mise en place, import de la pile Liberty, tâches d'exploitation courantes."
keywords: [Liberty Framework, Portainer, Docker, gestion de conteneurs, interface web, stack, journaux, redémarrage]
---

# Portainer (optionnel)

[Portainer](https://www.portainer.io) est une interface web pour Docker. Si votre équipe n'est pas à l'aise avec la ligne de commande `docker compose`, Portainer lui offre une vue navigateur de la pile Liberty — état des conteneurs, journaux en direct, boutons de redémarrage, édition du fichier compose.

C'est strictement optionnel — la pile Docker fonctionne de la même manière avec ou sans. Portainer est une couche de confort pour l'exploitation.

Cette page déroule l'installation de l'édition communautaire (gratuite, auto-hébergée) et les tâches d'opérateur typiques sur la pile Liberty.

---

## Quand installer Portainer

| Choisir Portainer si… | S'en passer si… |
|---|---|
| Votre équipe d'exploitation gère Docker sans flux CLI. | Tout le monde qui touche à l'hôte est à l'aise avec `docker compose`. |
| Vous voulez un tableau de statut d'un coup d'œil sur chaque conteneur de l'hôte. | L'hôte n'exécute que Liberty — `docker compose ps` suffit déjà. |
| Vous voulez suivre les journaux dans le navigateur, sans SSH. | SSH + `docker compose logs -f` vous convient. |
| Vous montez plusieurs installations Liberty sur plusieurs hôtes et vous voulez une seule console. | Hôte unique, pile unique. |

Portainer ajoute **un conteneur de plus** à la pile. Si la RAM est contrainte (moins de 1 Go libre), le compromis peut ne pas en valoir la peine.

---

## Étape 1 — Ajouter Portainer à la pile

Compléter votre `/opt/liberty/docker-compose.yml` existant :

```yaml
services:

  # ... (postgres + liberty as before) ...

  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: unless-stopped
    ports:
      - "9443:9443"        # HTTPS UI (self-signed cert)
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - portainer-data:/data

volumes:
  postgres-data:
  liberty-logs:
  portainer-data:          # add this
```

Démarrer :

```bash
docker compose up -d portainer
```

Le montage `/var/run/docker.sock` est ce qui permet à Portainer de gérer Docker sur l'hôte — il dialogue avec le démon Docker à travers la même socket que le CLI `docker`. C'est un **accès privilégié** — quiconque dispose des droits admin sur Portainer peut faire tout ce que Docker peut faire, y compris lire la clé maîtresse depuis les variables d'environnement des conteneurs.

| Implication | Mesure de protection |
|---|---|
| Admin Portainer = accès Docker complet sur l'hôte. | Mot de passe admin fort ; restreindre le port 9443 de Portainer à une plage d'IP de confiance via le pare-feu hôte. |
| La socket Docker est la surface d'attaque. | Ne la monter que dans Portainer (de confiance). Jamais dans Liberty lui-même. |

---

## Étape 2 — Configuration admin au premier démarrage

Ouvrir `https://<host>:9443/` dans un navigateur. Portainer présente un assistant de configuration initiale :

1. **Créer l'utilisateur admin** — nom d'utilisateur + mot de passe (12 caractères ou plus).
2. **Se connecter au Docker local** — choisir *« Docker Standalone »* → *« Connect »* (Portainer détecte automatiquement la socket montée).
3. **Passer l'invite de licence** — l'édition communautaire est gratuite pour un usage auto-hébergé.

Une fois la configuration faite, le *Tableau de bord* montre chaque conteneur de l'hôte. La pile Liberty apparaît comme le projet Compose `liberty`.

---

## Étape 3 — Parcourir la pile Liberty

Cliquer sur **Conteneurs** dans la navigation de gauche. On voit :

| Conteneur | Ce qu'on peut faire depuis Portainer |
|---|---|
| `liberty` | Voir les journaux en direct, ouvrir un shell, redémarrer, voir les variables (lecture seule), voir les ports. |
| `liberty-postgres` | Pareil — plus la taille du volume. |
| `portainer` | Lui-même — méta-gestion. |

Quelques tâches utiles en un coup d'œil :

| Tâche | Emplacement dans Portainer |
|---|---|
| **Suivre les journaux Liberty** | Conteneurs → `liberty` → *Journaux*. Rafraîchissement auto + filtre par niveau. |
| **Redémarrer Liberty** | Conteneurs → `liberty` → bouton *Redémarrer*. (Équivalent à `docker compose restart liberty`.) |
| **Ouvrir un shell dans Liberty** | Conteneurs → `liberty` → *Console* → *Connect*. Atterrit dans `/app` avec bash. |
| **Inspecter les variables** | Conteneurs → `liberty` → onglet *Inspect*. Lecture seule — pour les modifier, éditer `.env` et recréer le conteneur. |
| **Mettre à jour Liberty vers la dernière image** | Conteneurs → `liberty` → bouton *Recreate* → case *Pull latest image* → *Recreate*. |

---

## Étape 4 — Piloter la pile compose

Portainer fait également apparaître le projet Compose lui-même :

**Stacks → liberty** affiche :

- Le fichier compose (lecture + édition).
- L'état de chaque service.
- Arrêter / démarrer / redémarrer toute la pile.
- Ajouter de nouveaux services sans quitter l'UI.

| Opération | Portainer | Équivalent CLI |
|---|---|---|
| Tout redémarrer | Stack → *Stop* → *Start* | `docker compose restart` |
| Éditer le fichier compose | Stack → *Éditeur* → enregistrer | `nano docker-compose.yml` + `docker compose up -d` |
| Ajouter un service | Stack → *Éditeur* → ajouter du YAML → *Deploy stack* | Pareil — éditer le fichier + `docker compose up -d` |
| Supprimer la pile (et les données) | Stack → *Delete this stack* | `docker compose down -v` |

Le CLI reste la source de vérité — Portainer réécrit `docker-compose.yml` sur disque. Tout ce qui est édité dans l'éditeur Portainer finit dans le fichier cloné depuis votre dépôt d'apps.

---

## Tâches d'opérateur courantes via Portainer

### Sortir d'une boucle de plantage Liberty

1. Conteneurs → `liberty` → *Journaux* → identifier l'erreur.
2. Conteneurs → `liberty` → *Console* → *Connect* → corriger ce qui peut l'être (relancer `liberty-admin init-db` si le magasin d'utilisateurs est vide, etc.).
3. Redémarrer.

### Mettre à niveau Liberty vers une nouvelle image

1. Stacks → `liberty` → *Éditeur*.
2. Changer `image: ghcr.io/fblettner/liberty-next:latest` pour une étiquette épinglée (par exemple `ghcr.io/fblettner/liberty-next:2026.06.1`).
3. *Update the stack* → cocher *Re-pull image* → *Update*.

Portainer récupère la nouvelle image, échange le conteneur, laisse Postgres intact. ~30 secondes d'indisponibilité.

### Redémarrer uniquement Liberty (pas Postgres)

Conteneurs → `liberty` → *Redémarrer*. Postgres reste intact.

### Vérifier l'utilisation disque

**Volumes** dans la navigation de gauche montre la taille de chaque volume. Surveiller :

- `liberty_postgres-data` — grossit avec l'historique d'audit, les journaux d'exécution.
- `liberty-logs` — grossit avec les fichiers de journaux du framework.

Pour les stratégies de purge, voir [Production](./production.md).

---

## Limites du flux Portainer seul

Certaines choses restent plus simples en CLI :

| Tâche | Pourquoi le CLI est meilleur |
|---|---|
| Éditer `.env`. | Portainer ne fait pas apparaître les fichiers `.env` — les variables sont lues au démarrage du conteneur. Éditer le fichier avec `nano` et recréer le conteneur. |
| `liberty-admin <command>`. | Les commandes intégrées sont plus simples à lancer depuis un shell que via la Console Portainer (qui reste un shell, mais avec plus de clics pour y arriver). |
| Sauvegardes en lot (`pg_dump`, snapshots de volumes). | Cron + scripts shell. |
| `git pull` sur le dépôt des apps. | Le dépôt des apps se trouve hors de Docker ; Portainer ne le pilote pas. |

Portainer couvre les cas *« qu'est-ce qui tourne, pourquoi ça ne tourne pas, redémarre-le »*. Le CLI couvre la gestion des données et l'intégration Git.

---

## Sécuriser Portainer

Une installation brute de Portainer sur le port 9443 avec un certificat auto-signé **convient sur un LAN privé**, **pas sur l'Internet public**. Trois choses à ajouter pour toute installation exposée :

| Durcissement | Comment |
|---|---|
| Placer Portainer derrière Traefik avec un vrai certificat TLS. | Ajouter un label Traefik au service Portainer (même schéma que Liberty — voir [Traefik](./traefik.md)). |
| Restreindre l'IP source. | Règle de pare-feu hôte (`ufw allow from <ip-range> to any port 9443`). |
| Utiliser le RBAC de Portainer. | Créer un utilisateur non admin pour les exploitants qui n'ont besoin que du redémarrage et de l'accès aux journaux ; garder `admin` pour l'édition de la pile. |

Une compromission de Portainer = compromission de chaque conteneur de l'hôte (à cause du montage de la socket Docker). À traiter en conséquence.

---

## Désinstallation

Si Portainer s'avère superflu :

```bash
cd /opt/liberty
docker compose rm -s -v portainer
docker volume rm liberty_portainer-data
```

Retirer le bloc de service `portainer:` et le volume `portainer-data:` de `docker-compose.yml`. La pile Liberty continue sans changement.

---

## La suite

- [Traefik](./traefik.md) — ajouter le TLS à la fois à Liberty et à Portainer.
- [Production](./production.md) — durcissement du reste de la pile.
- [Supervision](../monitoring/overview.md) — la vue runtime intégrée, distincte de Portainer.
