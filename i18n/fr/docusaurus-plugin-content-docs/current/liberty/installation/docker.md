---
title: Docker
description: "Installer Liberty Next avec Docker : prérequis, installation légère (un conteneur, SQLite) et installation complète (PostgreSQL, Traefik, pgAdmin, Portainer), options d'installation, versions de l'image, fichiers compose enregistrés, Docker Swarm."
keywords: [Liberty Next, Docker, Docker Compose, installation, liberty install, light, full, Swarm, deploy-swarm.sh, LIBERTY_IMAGE_TAG, COMPOSE_FILE, ghcr.io]
---

# Docker

Docker est le mode d'installation recommandé pour Liberty Next. L'image publique est `ghcr.io/fblettner/liberty-next` ; le dossier `release/` du dépôt contient les fichiers compose et la commande `liberty` qui les pilote. Rien n'est compilé sur l'hôte.

Le contenu des deux installations est décrit sur [Architecture](./architecture.md#layouts).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="320" rx="14" fill="url(#dgd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="120" width="120" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="300.0" y="145.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Navigateur</text>
  <text x="300.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">https://host</text>
  <rect x="390" y="40" width="560" height="280" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="406" y="62" fill="#4a9eff" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">release/  ·  ./liberty</text>
  <rect x="410" y="120" width="130" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="475.0" y="145.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik</text>
  <text x="475.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">HTTPS (option)</text>
  <rect x="570" y="120" width="160" height="56" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="650.0" y="145.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="650.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:8000</text>
  <rect x="760" y="120" width="170" height="56" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="845.0" y="145.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="845.0" y="160.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">bases du framework et des apps</text>
  <line x1="360" y1="148" x2="410" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgd-flow)"/>
  <line x1="540" y1="148" x2="570" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgd-flow)"/>
  <line x1="730" y1="148" x2="760" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgd-flow)"/>
  <rect x="410" y="230" width="160" height="56" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="490.0" y="255.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">./apps</text>
  <text x="490.0" y="270.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">config + plugins</text>
  <rect x="590" y="230" width="160" height="56" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="670.0" y="255.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-config</text>
  <text x="670.0" y="270.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">app.toml · auth.toml</text>
  <rect x="770" y="230" width="160" height="56" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="850.0" y="255.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">pg-data</text>
  <text x="850.0" y="270.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">bases</text>
  <line x1="650" y1="176" x2="490" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgd-flow)"/>
  <line x1="650" y1="176" x2="670" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgd-flow)"/>
  <line x1="845" y1="176" x2="850" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgd-flow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Light ou full</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PostgreSQL fourni ou existant</text>
  <line x1="1000" y1="137.0" x2="930" y2="148" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgd-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une commande</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">install · start · upgrade…</text>
  <line x1="1000" y1="77.0" x2="620" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgd-arrow)"/>
  <rect x="1000" y="240" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Volumes</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">conservés aux mises à jour</text>
  <line x1="1000" y1="257.0" x2="950" y2="258" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgd-arrow)"/>
</svg>

---

## Avant de commencer \{#prerequisites\}

| Besoin | Détail |
|---|---|
| Un hôte Linux | Toute distribution qui fait fonctionner Docker Engine. Un poste macOS ou Windows avec Docker Desktop suffit pour un essai. |
| Docker Engine et le plugin Compose | `docker compose version` doit répondre (Compose v2). |
| `git` et `curl` | Pour récupérer `release/` et, si besoin, un wheel par URL. |
| Ports libres | Installation complète : `80` (et `443` pour le HTTPS). Installation légère : `8000`. |
| Disque | Environ 2 Go libres pour les images ; `./liberty doctor` alerte en dessous de 2 Go. |
| Mémoire | Le PostgreSQL fourni est réglé avec `shared_buffers = 2GB` : prévoir pour l'installation complète un hôte de plusieurs Go de mémoire. |

Récupérer le dossier `release/` :

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release
```

Toutes les commandes de cette page et des suivantes se lancent depuis ce dossier `release/`.

---

## Installation complète \{#full\}

```bash
./liberty install full
```

La commande :

1. vérifie Docker et Compose ;
2. écrit `release/.env` avec des secrets aléatoires (clé maître, secret JWT, mots de passe de PostgreSQL, de pgAdmin et du tableau de bord Traefik) et la liste des fichiers compose utilisés ;
3. télécharge les images et démarre les cinq conteneurs ;
4. attend que `liberty-next` soit **healthy** ;
5. affiche les adresses et les mots de passe.

```text title="Fin de la sortie (exemple)"
  Liberty:    http://liberty.example.com/
  ReDoc:      http://liberty.example.com/redoc
  pgAdmin:    http://liberty.example.com/pgadmin
  Portainer:  http://liberty.example.com/portainer

  Sign in to Liberty as:
    username:  admin
    password:  Xq7…

  pgAdmin:        admin@liberty.fr / …
  Traefik:        admin / …   (dashboard at …/traefik — shown once; ./liberty dashboard-password regenerates)
  Postgres:       published on 127.0.0.1:5432 only (POSTGRES_BIND=0.0.0.0 in .env to open it)
```

Noter les mots de passe : celui du tableau de bord Traefik n'est affiché qu'une fois (`.env` n'en garde que l'empreinte). Ceux de Liberty et de pgAdmin restent dans `.env`.

Ouvrir l'adresse de Liberty, se connecter en **`admin`**, puis poursuivre avec [la licence et les applications sous licence](./deploy-prebuilt-apps.md) et [le HTTPS](./traefik.md).

---

## Installation légère \{#light\}

```bash
./liberty install light
```

Un conteneur, une base SQLite, le port `8000` : ouvrir `http://<hôte>:8000/` et se connecter en **`admin`** avec le mot de passe affiché. Pour changer de port : `LIBERTY_PORT` dans `.env`, puis `./liberty restart`.

L'installation légère n'a pas de Traefik, donc pas de HTTPS propre : sur un réseau partagé, la placer derrière un proxy inverse existant ou choisir l'installation complète.

---

## Options d'installation \{#options\}

`./liberty install` accepte l'installation et les options suivantes, combinables entre elles.

| Option | Effet |
|---|---|
| `light` / `full` | L'installation. Sans elle, la commande pose la question. |
| `--tag 7.0.58` | Fixer une version au lieu de `latest` (voir [Versions de l'image](#tags)). |
| `--apps <wheel ou URL>` | Installer les applications sous licence dès que l'ensemble est démarré — voir [Applications sous licence](./deploy-prebuilt-apps.md). |
| `--ssl letsencrypt --domain D --email E` | HTTPS avec un certificat Let's Encrypt (installation complète). |
| `--ssl provided --domain D --cert-dir DIR --cert-file F --key-file K` | HTTPS avec un certificat fourni (installation complète). |
| `--db external --db-host H [--db-port 5432] [--db-user liberty] [--db-name liberty] [--db-password-env VAR]` | La base sur un serveur PostgreSQL extérieur à l'ensemble : aucun Postgres intégré n'est démarré. Sans `--db-password-env`, le mot de passe est demandé ; il ne peut pas contenir `$`. Voir [Base externe](./operations.md#external-db). |
| `--reset` | **Supprime** l'ensemble, ses volumes et `.env`, puis s'arrête. Relancer ensuite l'installation. |

Une installation de production en une ligne :

```bash
./liberty install full --tag 7.0.58 \
  --ssl letsencrypt --domain liberty.example.com --email ops@example.com \
  --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

La clé de licence n'est pas une option : la coller dans **Paramètres → App → License** une fois connecté.

### Relancer l'installation \{#rerun\}

Relancer `./liberty install` sur un hôte qui a déjà un `.env` est sans risque : les secrets, les volumes et les fichiers compose enregistrés sont conservés, et l'ensemble est redémarré s'il était arrêté. Pour modifier ensuite le HTTPS ou les applications, utiliser `./liberty ssl …` et `./liberty apps …` plutôt qu'une nouvelle installation.

Si une installation précédente a laissé des volumes mais que son `.env` a disparu, l'installation refuse de démarrer : l'ancienne base a été créée avec des mots de passe que plus personne ne connaît. Restaurer l'ancien `.env`, ou tout effacer avec `./liberty install --reset` puis réinstaller.

---

## Versions de l'image \{#tags\}

| `LIBERTY_IMAGE_TAG` dans `.env` | Signification |
|---|---|
| `latest` (par défaut) | La version la plus récente. Chaque mise à jour prend la dernière. |
| `7.0.58` | Cette version, jusqu'à ce qu'une autre soit choisie. Recommandé en production. |

La modifier avec `./liberty upgrade --tag <version>`, qui prend aussi une sauvegarde et applique les migrations — voir [Mise à jour et retour arrière](./upgrading.md).

---

## Les fichiers compose enregistrés \{#compose-file\}

L'installation écrit dans `.env` les fichiers compose qui composent l'ensemble — l'installation, puis le fichier HTTPS, puis celui des applications sous licence :

```env title="release/.env (extrait)"
COMPOSE_FILE=docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
```

Seules `./liberty ssl …` et `./liberty apps …` modifient cette ligne ; toutes les autres commandes la reprennent telle quelle. Deux conséquences :

- Utiliser `./liberty start`, `stop`, `restart`, `logs`, `upgrade` au quotidien.
- Un simple `docker compose ps` ou `docker compose logs` sans `-f` convient (Compose lit la même ligne). **Ne jamais** passer `-f docker-compose.full.yml` : Compose ignorerait alors les autres fichiers, recréerait le conteneur sans les applications sous licence ni le HTTPS, et l'installation paraîtrait vide.

---

## Docker Swarm \{#swarm\}

`docker-compose.swarm.yml` est l'installation complète adaptée à `docker stack deploy` : mêmes cinq services, réseau overlay, chaque service placé sur un nœud manager.

```bash
docker swarm init                     # une fois, sur le manager
./install.sh prepare                  # écrit seulement .env, ne démarre rien
./deploy-swarm.sh                     # déploie ou met à jour la pile « liberty »
./deploy-swarm.sh --status            # état des services
./deploy-swarm.sh --rm                # supprime la pile (les volumes sont conservés)
```

`docker stack deploy` ne lit pas `.env` : `deploy-swarm.sh` le charge d'abord dans le shell, et les valeurs sont figées au déploiement. Après une modification de `.env`, relancer `./deploy-swarm.sh`.

Ce qui diffère de Compose :

- La commande `liberty`, `--ssl` et `--apps` ne fonctionnent qu'avec les installations Compose. Avec Swarm, les réglages HTTPS ou applications s'ajoutent à la main au fichier de pile.
- PostgreSQL doit rester sur un seul nœud pour que son volume le suive : sur un swarm multi-nœuds, ajouter `node.hostname == <nœud>` à ses contraintes de placement. Traefik doit s'exécuter sur un manager.
- Garder une seule réplique de `liberty-next` : les mises à jour en temps réel sont tenues par le processus, et plusieurs répliques montreraient des états différents aux utilisateurs.
- Mettre à jour un service avec `docker service update --image ghcr.io/fblettner/liberty-next:<version> liberty_liberty-next`, annuler avec `docker service rollback liberty_liberty-next`.
- `backup.sh` fonctionne de la même façon (les noms de volumes sont identiques) ; restaurer avec la pile supprimée.
