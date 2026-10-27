---
title: Architecture
description: "Les éléments d'une installation Liberty Next, quel que soit le mode d'installation (Docker léger, Docker complet, Python avec systemd) : un processus serveur, une base du framework, des fichiers de configuration, le paquet facultatif des applications sous licence et deux secrets — l'emplacement de chacun, le démarrage du serveur, le contrôle de son état."
keywords: [Liberty Next, architecture, Docker, pipx, systemd, Traefik, PostgreSQL, SQLite, LIBERTY_APPS_DIR, app.toml, auth.toml, jobs.toml, liberty-config, pg-data, clé maître, secret JWT, health, ready]
---

# Architecture

Une installation Liberty Next comporte toujours les mêmes éléments. Docker ou Python change seulement **l'emplacement** de chacun et la commande qui le pilote (`./liberty` ou `liberty-ops`).

| Élément | Rôle |
|---|---|
| **Le serveur** | Un seul processus Python : l'application web, l'API REST, le planificateur de tâches Nomaflow et les mises à jour en temps réel (Socket.IO), sur un même port. |
| **La base du framework** | Historique des exécutions Nomaflow, vues de grille enregistrées, packages de modifications, notifications, historique des mises à jour — ainsi que les utilisateurs et les rôles quand ils sont gérés en base plutôt que dans `auth.toml`. |
| **La configuration** | Des fichiers TOML : pools, connecteurs, dictionnaire, menus, écrans, tableaux de bord, graphiques, règles de notification, tâches Nomaflow, paramètres de l'application. Tout ce qui est enregistré dans **Paramètres** y est écrit. |
| **Les applications sous licence** *(facultatif)* | Nomasx-1, Nomajde et leurs tâches : fichiers de configuration, code Python (`plugins/`) et données de référence, livrés dans un seul wheel. |
| **Deux secrets** | La clé maître, qui chiffre les mots de passe stockés dans la configuration, et la clé qui signe les sessions. |

Les données affichées par les applications restent dans **leurs** bases d'origine (Oracle, PostgreSQL…) : Liberty Next les lit au travers des pools de sa configuration et ne copie rien, sauf si une tâche Nomaflow le demande.

---

## Vue d'ensemble — l'installation Docker complète

<svg viewBox="0 0 1200 590" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="arch-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="arch-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="arch-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="10" width="1180" height="506" rx="14" fill="url(#arch-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="30" y="76" width="150" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="105.0" y="101.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Navigateur</text>
  <text x="105.0" y="116.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">utilisateurs · clients API</text>
  <rect x="210" y="30" width="760" height="470" rx="12" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="230" y="54" fill="#64748b" fontSize="9.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">HÔTE DOCKER — INSTALLATION COMPLÈTE</text>
  <rect x="240" y="70" width="700" height="50" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="590.0" y="92.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik</text>
  <text x="590.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:80 / :443 — routes /, /pgadmin, /portainer, /traefik · TLS</text>
  <line x1="180" y1="104" x2="240" y2="95" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="240" y="150" width="440" height="200" rx="10" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="172" fill="#4a9eff" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="664" y="172" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">un seul processus</text>
  <rect x="256" y="186" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="356.0" y="208.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Application web</text>
  <text x="356.0" y="223.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">écrans, tableaux de bord, Paramètres</text>
  <rect x="468" y="186" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="568.0" y="208.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <text x="568.0" y="223.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">/api · /admin · /auth</text>
  <rect x="256" y="248" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="356.0" y="270.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Planificateur</text>
  <text x="356.0" y="285.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">tâches Nomaflow</text>
  <rect x="468" y="248" width="200" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="568.0" y="270.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Temps réel</text>
  <text x="568.0" y="285.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Socket.IO : cloche, verrous</text>
  <text x="256" y="336" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">lit sa configuration, écrit son historique</text>
  <line x1="460" y1="120" x2="460" y2="150" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="240" y="390" width="210" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="345.0" y="417.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PostgreSQL</text>
  <text x="345.0" y="432.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">base du framework + des applications</text>
  <text x="345" y="468" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">volume pg-data</text>
  <line x1="345" y1="350" x2="345" y2="390" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="470" y="390" width="210" height="60" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="575.0" y="417.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <text x="575.0" y="432.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">TOML enregistrés par Paramètres</text>
  <text x="575" y="468" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">volume liberty-config · ./apps</text>
  <line x1="575" y1="350" x2="575" y2="390" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="720" y="330" width="220" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="830.0" y="352.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">pgAdmin</text>
  <text x="830.0" y="367.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">console de la base · /pgadmin</text>
  <rect x="720" y="400" width="220" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="830.0" y="422.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Portainer</text>
  <text x="830.0" y="437.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">console des conteneurs · /portainer</text>
  <line x1="720" y1="355" x2="452" y2="410" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#arch-flow)"/>
  <rect x="1000" y="150" width="170" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="1085.0" y="175.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Bases sources</text>
  <text x="1085.0" y="190.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle · PostgreSQL</text>
  <rect x="1000" y="222" width="170" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="1085.0" y="247.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">API REST</text>
  <text x="1085.0" y="262.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">connecteurs API</text>
  <rect x="1000" y="294" width="170" height="56" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="1085.0" y="319.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Services</text>
  <text x="1085.0" y="334.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">SMTP · OIDC · Anthropic</text>
  <text x="1085" y="372" fill="#64748b" fontSize="9" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">hors de l'hôte</text>
  <line x1="680" y1="178" x2="1000" y2="178" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <line x1="680" y1="250" x2="1000" y2="250" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <line x1="680" y1="322" x2="1000" y2="322" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#arch-flow)"/>
  <rect x="30" y="540" width="280" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="40" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une seule URL</text>
  <text x="40" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Traefik envoie chaque chemin vers son service</text>
  <line x1="30" y1="557.0" x2="90" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arch-arrow)"/>
  <rect x="620" y="540" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="630" y="555" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applications sous licence</text>
  <text x="630" y="568" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">./apps monté sur /apps : config + plugins</text>
  <line x1="620" y1="557.0" x2="600" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#arch-arrow)"/>
</svg>

---

## Trois façons de l'exécuter \{#layouts\}

| | Docker — légère | Docker — complète | Python |
|---|---|---|---|
| **Serveur** | Conteneur `liberty-next` | Conteneur `liberty-next` | Paquet pipx lancé par systemd |
| **Autour** | — | Conteneurs PostgreSQL 16, Traefik, pgAdmin, Portainer | Un PostgreSQL existant, un proxy inverse existant |
| **Base du framework** | SQLite | PostgreSQL fourni | Un PostgreSQL existant (SQLite pour un essai) |
| **Adresse** | `http://<hôte>:8000/` | `http(s)://<hôte>/` | `http://<hôte>:8000/` derrière un proxy inverse |
| **HTTPS** | Un proxy inverse existant | Traefik ([HTTPS et Traefik](./traefik.md)) | Un proxy inverse existant |
| **Applications sous licence** | Possible, mais elles demandent PostgreSQL | Oui | Oui |
| **Commande d'exploitation** | `./liberty` | `./liberty` | `liberty-ops` |
| **Page** | [Docker](./docker.md#light) | [Docker](./docker.md#full) | [Serveur Python](./python-server.md) |

Dans l'installation complète, Traefik est le seul point d'entrée : il envoie `/` vers Liberty Next, et `/pgadmin`, `/portainer`, `/traefik` vers les outils. PostgreSQL n'est publié que sur `127.0.0.1:5432` — accessible depuis l'hôte ou par un tunnel SSH, pas depuis le réseau.

---

## Emplacement de la configuration \{#configuration\}

La configuration est répartie à deux endroits, selon la même règle pour Docker et pour Python :

| Fichiers | Emplacement |
|---|---|
| `app.toml` (paramètres de l'application, licence, IA, SSO, SMTP) et `auth.toml` (utilisateurs et rôles locaux) | Le dossier `config/` du répertoire de travail du serveur — ou, pour `app.toml`, le fichier désigné par `LIBERTY_APP_CONFIG`. |
| `connectors.toml`, `dictionary.toml`, `menus.toml`, `screens.toml`, `dashboards.toml`, `charts.toml`, `notifications.toml`… | Le dossier désigné par **`LIBERTY_APPS_DIR`** quand la variable est définie — le dossier `config/` des applications sous licence —, sinon ce même dossier `config/`. |
| `jobs.toml` (Nomaflow) | `plugins/nomaflow/jobs.toml` à côté de ce dossier (`LIBERTY_APPS_DIR/../plugins/…`), sinon `config/jobs.toml`. |
| Historique de la configuration et des mises à jour (`.versions/`) | À côté de `connectors.toml`. |

D'où l'organisation du dossier des applications sous licence, identique en Docker et en Python :

```text
apps/
├── config/      ← LIBERTY_APPS_DIR : connecteurs, écrans, menus, dictionnaire… et .bundled/ (ce qui a été livré)
├── plugins/     ← le code Python des applications, et nomaflow/jobs.toml
└── data/        ← données de référence chargées à l'installation
```

---

## Emplacement de chaque élément \{#volumes\}

| Élément | Docker — légère | Docker — complète | Python (chemins de la page [Serveur Python](./python-server.md)) |
|---|---|---|---|
| `app.toml`, `auth.toml` | volume `liberty-config` | volume `liberty-config` | `/var/lib/liberty-next/config/` |
| Autres fichiers de configuration | volume `liberty-config`, ou `release/apps/config/` avec les applications sous licence | idem | `/var/lib/liberty-next/apps/config/` |
| Code et données des applications sous licence | `release/apps/plugins/`, `release/apps/data/` (montés sur `/apps`) | idem | `/var/lib/liberty-next/apps/plugins/`, `…/data/` |
| Base du framework | SQLite dans le volume `liberty-data` | PostgreSQL dans le volume `pg-data` | le serveur PostgreSQL existant |
| Bases des applications sous licence (`nomasx1`, `nomajde`) | — | PostgreSQL dans `pg-data` | le serveur PostgreSQL existant |
| Secrets | `release/.env` | `release/.env` | `/etc/liberty/secrets.env` |
| Outils, certificats | — | volumes `pgadmin-data`, `portainer-data`, `traefik-acme` | — |
| Sauvegardes | `release/backups/` | `release/backups/` | `backups/` à côté du dossier de configuration |

Avec Docker, arrêter, recréer ou mettre à jour les conteneurs ne touche ni aux volumes ni à `release/apps/` ; seuls `docker compose down -v` et `./liberty install --reset` suppriment les volumes. Le contenu de chaque sauvegarde est détaillé sur [Exploitation](./operations.md#backup).

---

## Les deux secrets \{#secrets\}

L'installation Docker les génère tous deux dans `release/.env` (mode `0600`) ; pour une installation Python, ils sont générés dans le fichier d'environnement du service. En garder une copie hors du serveur.

| Secret | Sert à | S'il change |
|---|---|---|
| `LIBERTY_MASTER_KEY` | Chiffrer toutes les valeurs `ENC:` de la configuration : mots de passe des pools, clé de licence, clé de l'IA, secret OIDC, mot de passe SMTP. | Toutes les valeurs chiffrées deviennent illisibles : les pools ne se connectent plus. Ne jamais la changer sur une installation existante. |
| `LIBERTY_JWT_SECRET` | Signer les jetons de session. | Tout le monde est déconnecté et se reconnecte. Rien d'autre n'est perdu. |

`doctor` (Docker ou Python) vérifie que les deux font au moins 32 caractères et que la clé maître déchiffre bien chaque mot de passe de pool. Chaque variable `LIBERTY_*` et `POSTGRES_*` peut aussi être lue depuis un fichier : `LIBERTY_MASTER_KEY_FILE=/run/secrets/master_key` (secrets Docker, Swarm ou Kubernetes).

---

## Au démarrage du serveur \{#startup\}

1. Les paramètres sont lus ; les références `${VARIABLE}` des fichiers TOML sont remplacées par l'environnement.
2. *Docker uniquement :* les secrets fournis sous forme de fichiers sont lus, le propriétaire du volume de configuration et du dossier des applications est corrigé, puis le processus abandonne les droits root et s'exécute sous l'utilisateur `liberty` (uid 1000). Au premier démarrage sans applications sous licence, les fichiers de configuration par défaut sont copiés dans `liberty-config` — un fichier existant n'est jamais écrasé.
3. *Docker uniquement :* `liberty-admin init-db` crée les tables manquantes du framework et, au tout premier démarrage, l'utilisateur `admin`. Sur une installation Python, cette commande est lancée une fois à la main.
4. Les tables du framework sont comparées à la version du code : une colonne manquante est ajoutée et enregistrée dans **Paramètres → History → Upgrades**.
5. Les migrations de schéma en attente des applications sous licence sont signalées dans le journal ; la mise à jour ou `migrate` les applique (avec Docker, aussi au démarrage si `LIBERTY_AUTO_MIGRATE=1`).
6. Le serveur répond, même si la base du framework est encore injoignable — pour qu'un pool puisse être corrigé depuis **Paramètres**. `/ready` indique quand la base répond.

---

## État et versions \{#health\}

| URL | Répond | Utilisée par |
|---|---|---|
| `/health` | Le processus fonctionne. | Les sondes de vie. |
| `/ready` | La base du framework répond (`503` sinon). | Le contrôle de santé Docker — un ensemble dont la base est arrêtée apparaît **unhealthy** — et `liberty-ops start`, qui l'attend. |
| `/info` | Version et compteurs ; noms des connecteurs et des pools seulement pour un utilisateur connecté. | Vérifications rapides, support. |
| `/docs`, `/redoc` | La référence de l'API REST. | Les développeurs — voir [API REST](../references/rest-api.md). |

Versions, migrations en attente et dernière mise à jour sont regroupées par `status` — voir [Exploitation](./operations.md#status).
