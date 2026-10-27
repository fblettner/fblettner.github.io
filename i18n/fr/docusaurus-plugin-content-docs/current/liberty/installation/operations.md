---
title: Exploitation
description: "Exploiter une installation Liberty Next au quotidien : ./liberty status et doctor, démarrage, arrêt et journaux, sauvegardes et restaurations, tâches d'administration courantes, liberty-ops pour les installations Python, et les problèmes fréquents avec leur correction."
keywords: [Liberty Next, exploitation, liberty status, liberty doctor, sauvegarde, restauration, journaux, liberty-ops, dépannage, mot de passe admin, identifiant de requête, journaux JSON]
---

# Exploitation

Tout ce qu'un administrateur fait sur une installation en service passe par une seule commande : `./liberty` (lancée depuis `release/`) avec Docker, `liberty-ops` avec une installation Python. Les deux ont les mêmes verbes.

---

## État \{#status\}

```text title="./liberty status"
Liberty Next — /opt/liberty-next/release
  layout        full
  tls           letsencrypt (liberty.example.com)
  apps overlay  yes (/opt/liberty-next/release/apps)
  image tag     7.0.58
  chain         docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
  container     running/healthy
  framework     7.0.58
  apps bundle   7.0.58
  /ready        {"status":"ok","version":"7.0.58","pool":"default"}
  migrations    up to date
  last upgrade  stack 7.0.57 → 7.0.58 (2026-10-27T08:12:40)
```

| Ligne | Signification |
|---|---|
| `layout`, `tls`, `apps overlay`, `chain` | Ce qui a été installé et les fichiers compose enregistrés dans `.env`. |
| `image tag` | `latest` ou la version fixée. |
| `container` | État et santé Docker — `unhealthy` quand la base du framework ne répond pas. |
| `framework`, `apps bundle` | Les versions réellement en service. |
| `/ready` | Le contrôle de disponibilité du serveur. |
| `migrations` | Migrations de schéma des applications sous licence restant à appliquer. |
| `last upgrade` | La dernière entrée de **Paramètres → History → Upgrades**. |

---

## Diagnostic \{#doctor\}

`./liberty doctor` contrôle l'installation et affiche, pour chaque problème, la commande qui le corrige. La commande se termine avec le code `1` quand quelque chose ne va pas — une demande de support commence par sa sortie.

Elle contrôle :

- `.env`, les fichiers compose enregistrés et l'existence de chacun ;
- la présence du dossier des applications sous licence dans les fichiers compose quand il est configuré — la cause habituelle d'une installation qui « paraît vide » ;
- la longueur de la clé maître et du secret JWT ;
- le mot de passe du tableau de bord Traefik et l'exposition du port PostgreSQL (installation complète) ;
- les fichiers de certificat ou le domaine Let's Encrypt quand le HTTPS est actif ;
- les volumes, le conteneur et `/ready` ;
- les migrations de schéma en attente ;
- le déchiffrement de chaque mot de passe de pool par la clé maître ;
- l'espace disque libre.

---

## Démarrer, arrêter, journaux \{#lifecycle\}

| Commande | Effet |
|---|---|
| `./liberty start` | Démarre l'ensemble avec les fichiers compose enregistrés et attend qu'il soit en bonne santé. |
| `./liberty stop` | Arrête les conteneurs. Volumes et `.env` sont conservés. |
| `./liberty restart` | Redémarre uniquement `liberty-next`. |
| `./liberty logs` / `logs -f` | Les 200 dernières lignes du journal du serveur / le suivre. |

Chaque ligne de journal écrite pendant le traitement d'une requête porte l'identifiant de cette requête, également renvoyé dans l'en-tête de réponse `X-Request-ID` : le citer permet de retrouver les lignes correspondantes. Pour un collecteur de journaux, `log_format = "json"` dans la section `[app]` de `app.toml` écrit un objet JSON par ligne.

---

## Sauvegarde et restauration \{#backup\}

```bash
./liberty backup                  # → release/backups/<AAAA-MM-JJ_HHMMSS>/
./liberty backup --keep 30        # et supprime les sauvegardes de plus de 30 jours
./liberty restore backups/2026-10-27_030000
```

Un dossier de sauvegarde contient une archive par volume (`liberty-config`, `pg-data` ou `liberty-data`, `pgadmin-data`, `portainer-data`), le dossier des applications sous licence (`liberty-apps.tar.gz`), une copie de `.env` (`.env.snapshot`, mode `0600`, avec les secrets) et les fichiers compose. Une sauvegarde peut se faire pendant que l'ensemble fonctionne.

`./liberty restore` arrête l'ensemble, remet chaque archive du dossier dans son volume et dans le dossier des applications, puis redémarre. Tout ce qui a été écrit depuis la sauvegarde est perdu.

Une sauvegarde hebdomadaire conservée 60 jours, par cron :

```cron
0 3 * * 0  cd /opt/liberty-next/release && ./backup.sh /mnt/backup/liberty --keep 60
```

Copier les sauvegardes hors du serveur. `.env.snapshot` contient la clé maître : sans elle, la configuration restaurée ne peut pas déchiffrer ses mots de passe.

---

## Tâches courantes \{#tasks\}

| Tâche | Commande (Docker) |
|---|---|
| Nouveau mot de passe aléatoire pour `admin` | `docker exec -u liberty liberty-next liberty-admin set-password admin` |
| Un autre superutilisateur | `docker exec -u liberty liberty-next liberty-admin create-user alice --superuser` |
| Vérifier la licence | `docker exec -u liberty liberty-next liberty-license status` |
| Appliquer les migrations de schéma des applications | `./liberty migrate` (`--dry-run` pour les lister) |
| Recharger la configuration après modification d'un fichier | **Paramètres → Recharger la config** |
| Nouveau mot de passe du tableau de bord Traefik | `./liberty dashboard-password` |
| Un shell dans le conteneur | `docker exec -it -u liberty liberty-next bash` |

`-u liberty` compte : le serveur s'exécute sous `liberty`, et une commande lancée en root laisserait des fichiers que le serveur ne peut plus modifier. `./liberty` le passe de lui-même. Sans `--password`, `set-password` et `create-user` génèrent un mot de passe et l'affichent.

---

## Installations Python : liberty-ops \{#liberty-ops\}

À lancer sous l'utilisateur du service, avec son environnement chargé (`sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; liberty-ops status'`).

| Commande | Effet |
|---|---|
| `liberty-ops status` | Versions, dossier de configuration, dossier des applications, état du service, `/ready`, migrations en attente, dernière mise à jour. |
| `liberty-ops doctor` | Version de Python, secrets, fichiers de configuration, applications et plugins, clé maître, service, `/ready`, migrations, disque — chaque problème avec sa correction. |
| `liberty-ops start` · `stop` · `restart` · `logs [-f]` | L'unité systemd (`liberty-next`, ou `LIBERTY_SERVICE`). |
| `liberty-ops backup [--dest DIR] [--keep JOURS]` | Dossier de configuration (avec son historique), dossier des applications, fichier SQLite, et un `pg_dump` quand le pool par défaut est PostgreSQL et que `pg_dump` est installé. Destination par défaut : `backups/` à côté du dossier de configuration. |
| `liberty-ops restore <dossier> [--yes]` | Remet une sauvegarde en place en arrêtant puis redémarrant le service. Un export PostgreSQL n'est pas restauré automatiquement : la commande à lancer est affichée. |
| `liberty-ops migrate [--dry-run]` | Les migrations de schéma des applications. |
| `liberty-ops upgrade` · `rollback` | Voir [Mise à jour et retour arrière](./upgrading.md#python). |

---

## Dépannage \{#troubleshooting\}

| Symptôme | Cause | Correction |
|---|---|---|
| L'installation paraît vide après une mise à jour ou un redémarrage | Le conteneur a été recréé sans le dossier des applications sous licence (un `docker compose -f …` à la main). | `./liberty doctor`, puis `./liberty apps <wheel>` — et s'en tenir aux commandes `./liberty`. |
| `docker ps` affiche `liberty-next` **unhealthy** | La base du framework ne répond pas à `/ready`. | `./liberty logs` ; sur l'installation complète, vérifier le conteneur `liberty-pg`. |
| La connexion répond *Too many failed logins — try again in N s* | Dix échecs de connexion en cinq minutes pour cet utilisateur (voir [Connexion](../framework/build/secure/sign-in.md)). | Attendre le délai indiqué, ou réinitialiser le mot de passe. |
| Les pools échouent avec une erreur de déchiffrement | `LIBERTY_MASTER_KEY` n'est pas la clé qui a chiffré les mots de passe. | Remettre la clé d'origine (voir `.env.snapshot` dans une sauvegarde). |
| Le serveur signale des migrations de schéma en attente | Une nouvelle version des applications modifie la base. | `./liberty migrate`. |
| Un fichier modifié sur le disque n'est pas pris en compte | Les fichiers sont lus au démarrage ou au rechargement. | **Paramètres → Recharger la config**. |
| Port 80 ou 8000 déjà utilisé | Un autre service l'occupe. | Définir `TRAEFIK_HTTP_PORT` (complète) ou `LIBERTY_PORT` (légère) dans `.env`, puis `./liberty start`. |
| L'installation refuse de démarrer : *stale Docker volumes* | Des volumes d'une installation précédente existent mais son `.env` a disparu. | Restaurer l'ancien `.env`, ou `./liberty install --reset` puis réinstaller. |
