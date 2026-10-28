---
title: Exploitation
description: "Exploiter une installation Liberty Next au quotidien : ./liberty status et doctor, démarrage, arrêt et journaux, sauvegardes et restaurations, tâches d'administration courantes, liberty-ops pour les installations Python, et les problèmes fréquents avec leur correction."
keywords: [Liberty Next, exploitation, liberty status, liberty doctor, sauvegarde, restauration, journaux, liberty-ops, dépannage, mot de passe admin, identifiant de requête, journaux JSON]
---

# Exploitation

Tout ce qu'un administrateur fait sur une installation en service passe par une seule commande : `./liberty` (lancée depuis `release/`) avec Docker, `liberty-ops` avec une installation Python. Les deux ont les mêmes verbes.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="270" rx="14" fill="url(#dgx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="50" width="172" height="44" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="326.0" y="76.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exploiter</text>
  <rect x="250" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty start</text>
  <rect x="250" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty stop</text>
  <rect x="250" y="168" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="182.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty restart</text>
  <rect x="250" y="198" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="212.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty status</text>
  <rect x="250" y="228" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty logs</text>
  <rect x="422" y="50" width="172" height="44" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="508.0" y="76.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Contrôler</text>
  <rect x="432" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty doctor</text>
  <rect x="432" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty ssl</text>
  <rect x="432" y="168" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="182.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty dashboard-password</text>
  <rect x="604" y="50" width="172" height="44" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="690.0" y="76.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Faire évoluer</text>
  <rect x="614" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty upgrade</text>
  <rect x="614" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty rollback</text>
  <rect x="614" y="168" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="182.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty apps</text>
  <rect x="614" y="198" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="624" y="212.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty migrate</text>
  <rect x="786" y="50" width="172" height="44" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="872.0" y="76.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Protéger</text>
  <rect x="796" y="108" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="806" y="122.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty backup</text>
  <rect x="796" y="138" width="152" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="806" y="152.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">./liberty restore</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Docker</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">release/liberty</text>
  <line x1="210" y1="77.0" x2="240" y2="72" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgx-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Python</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liberty-ops, mêmes verbes</text>
  <line x1="210" y1="217.0" x2="250" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgx-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant une mise à jour</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">backup</text>
  <line x1="1000" y1="137.0" x2="960" y2="130" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgx-arrow)"/>
</svg>

---

## État \{#status\}

```text title="./liberty status"
Liberty Next — /opt/liberty-next/release
  layout        full
  tls           letsencrypt (liberty.example.com)
  apps overlay  yes (/opt/liberty-next/release/apps)
  image tag     7.0.58
  chain         docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
  database      embedded — the bundled Postgres (pg)
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
| `database` | L'emplacement de la base : *embedded — the bundled Postgres* (le Postgres intégré), *embedded — SQLite* (déploiement léger), ou *external — utilisateur@hôte:port/nom*. |
| `container` | État et santé Docker — `unhealthy` quand la base du framework ne répond pas. |
| `framework`, `apps bundle` | Les versions réellement en service. |
| `/ready` | Le contrôle de disponibilité du serveur. |
| `migrations` | Migrations de schéma des applications sous licence restant à appliquer. |
| `last upgrade` | La dernière entrée de **Liberty Next → Déployer → Historique → Upgrades**. |

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

Chaque ligne de journal écrite pendant le traitement d'une requête porte l'identifiant de cette requête, également renvoyé dans l'en-tête de réponse `X-Request-ID` : le citer permet de retrouver les lignes correspondantes.toml` écrit un objet JSON par ligne.

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

Avec une [base externe](#external-db), la base n'est **pas** dans la sauvegarde — `./liberty backup` le signale : la sauvegarder sur son propre serveur (`pg_dump`, `pg_dumpall`).

---

## Base externe \{#external-db\}

La base du framework — et celles des applications sous licence — peuvent résider sur un serveur PostgreSQL extérieur à l'ensemble : une base managée, le serveur de bases de l'entreprise.

| Commande | Effet |
|---|---|
| `./liberty db` | L'emplacement actuel de la base. |
| `./liberty db dump [fichier.sql.gz]` | Un `pg_dumpall` du Postgres intégré, pour transporter les données — par défaut sous `backups/`. Déploiement complet uniquement. |
| `./liberty db external --host H [--port P] [--user U] [--name D] [--password-env VAR] [--yes]` | Bascule l'installation sur ce serveur : la connexion de l'application et les pools qui désignaient le serveur intégré — ceux des applications sous licence — y sont redirigés, l'ensemble redémarre, et le Postgres intégré est arrêté, son volume conservé. La commande présente le changement et demande confirmation (`--yes` l'évite). |
| `./liberty db embedded [--yes]` | Revient au Postgres intégré (déploiement complet) ou à SQLite (déploiement léger). |

**Les données ne sont pas copiées.** Pour déplacer une installation existante :

1. `./liberty db dump` sur l'installation actuelle ;
2. restaurer la sauvegarde sur le nouveau serveur — `gunzip -c backups/pg-dumpall-….sql.gz | psql -h <hôte> -U postgres -d postgres` ;
3. `./liberty db external --host <hôte>`.

Revenir avec `./liberty db embedded` ne recopie pas ce qui a été écrit entre-temps sur le serveur externe. Le choix est enregistré dans `.env` avec les fichiers compose : `start`, `upgrade` et `backup` le suivent. `./liberty doctor` avertit quand le Postgres intégré fonctionne encore alors que l'application utilise le serveur externe. Une nouvelle installation va directement sur un serveur externe avec `./liberty install full --db external --db-host …` — voir [Options d'installation](./docker.md#options).

---

## Tâches courantes \{#tasks\}

| Tâche | Commande (Docker) |
|---|---|
| Nouveau mot de passe aléatoire pour `admin` | `docker exec -u liberty liberty-next liberty-admin set-password admin` |
| Un autre superutilisateur | `docker exec -u liberty liberty-next liberty-admin create-user alice --superuser` |
| Vérifier la licence | `docker exec -u liberty liberty-next liberty-license status` |
| Appliquer les migrations de schéma des applications | `./liberty migrate` (`--dry-run` pour les lister) |
| Recharger la configuration après modification d'un fichier | **Recharger la config (en haut de toute page d'édition de Liberty Next)** |
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
| Un fichier modifié sur le disque n'est pas pris en compte | Les fichiers sont lus au démarrage ou au rechargement. | **Recharger la config (en haut de toute page d'édition de Liberty Next)**. |
| Port 80 ou 8000 déjà utilisé | Un autre service l'occupe. | Définir `TRAEFIK_HTTP_PORT` (complète) ou `LIBERTY_PORT` (légère) dans `.env`, puis `./liberty start`. |
| L'installation refuse de démarrer : *stale Docker volumes* | Des volumes d'une installation précédente existent mais son `.env` a disparu. | Restaurer l'ancien `.env`, ou `./liberty install --reset` puis réinstaller. |
