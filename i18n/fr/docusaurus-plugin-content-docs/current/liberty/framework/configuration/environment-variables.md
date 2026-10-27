---
title: Variables d'environnement
description: "Les variables d'environnement lues par Liberty Next — secrets, dossiers de configuration, initialisation de la base, comportement du conteneur, exploitation —, les références ${VARIABLE} admises dans chaque fichier TOML, et les variables du fichier .env de Docker."
keywords: [Liberty Next, variables d'environnement, LIBERTY_MASTER_KEY, LIBERTY_JWT_SECRET, LIBERTY_APPS_DIR, LIBERTY_APP_CONFIG, POSTGRES, _FILE, .env, Docker]
---

# Variables d'environnement

L'environnement porte ce qui ne doit pas être écrit dans les fichiers de configuration — les secrets — et ce qui dépend de l'hôte — dossiers, ports. Les fichiers de configuration y font ensuite référence.

---

## Références dans les fichiers TOML \{#references\}

Toute valeur de tout fichier de configuration peut s'écrire `${NOM}` ou `${NOM:-défaut}` : elle est remplacée par la variable d'environnement au chargement du fichier (par la valeur par défaut quand la variable est absente ou vide).

```toml
[pools.reporting]
url = "postgresql+asyncpg://report@${REPORTING_HOST:-db}:5432/reporting"
password = "${REPORTING_PASSWORD}"
```

Les Paramètres affichent une telle référence telle qu'elle est écrite. Pour un champ secret (un mot de passe, une clé), enregistrer une nouvelle valeur depuis les Paramètres remplace la référence par une valeur chiffrée `ENC:`.

---

## Lues par le serveur \{#server\}

| Variable | Usage |
|---|---|
| `LIBERTY_MASTER_KEY` | La clé de chaque valeur `ENC:`. Ne jamais la changer sur une installation existante. |
| `LIBERTY_JWT_SECRET` | Signe les sessions. Au moins 32 caractères. |
| `LIBERTY_LICENSE_KEY` | La clé de licence, quand elle n'est pas collée dans Paramètres → App. |
| `ANTHROPIC_API_KEY` | La clé de l'assistant IA, quand elle n'est pas saisie dans Paramètres → App. |
| `LIBERTY_APPS_DIR` | Le dossier des fichiers de configuration (connecteurs, écrans, menus…) ; les plugins sont dans `../plugins`. Voir [Architecture](../../installation/architecture.md#configuration). |
| `LIBERTY_APP_CONFIG` | Le chemin du fichier des réglages de l'application, quand ce n'est pas `config/app.toml`. |
| `LIBERTY_ORACLE_CLIENT_LIB` | Le dossier de l'Oracle Instant Client pour le mode thick (défini dans l'image Docker). |

---

## Initialisation de la base \{#bootstrap\}

Lues par `liberty-admin init-db` (lancée par le conteneur à chaque démarrage) pour renseigner le pool `default` quand il est vide :

| Variable | Usage |
|---|---|
| `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_HOST`, `POSTGRES_PORT`, `POSTGRES_DB` | Une base PostgreSQL pour le framework ; le mot de passe est stocké chiffré. Sans `POSTGRES_PASSWORD`, un fichier SQLite est utilisé. |
| `LIBERTY_DB_URL` | L'adresse de la base du framework utilisée par les conteneurs (SQLite dans l'installation légère). |
| `LIBERTY_ADMIN_PASSWORD` | Le mot de passe du premier `admin` ; sinon un mot de passe aléatoire est affiché. |

---

## Comportement du conteneur \{#container\}

| Variable | Défaut | Usage |
|---|---|---|
| `LIBERTY_AUTO_MIGRATE` | désactivé | `1` : appliquer les migrations de schéma des applications sous licence au démarrage. |
| `LIBERTY_RUN_AS_ROOT` | désactivé | `1` : rester en root au lieu de l'utilisateur `liberty`. |
| `LIBERTY_SKIP_INITDB` | désactivé | `1` : ne pas lancer `init-db` au démarrage. |
| `LIBERTY_DB_WAIT_TRIES` | `30` | Secondes d'attente de la base du framework avant `init-db`. |
| `<NOM>_FILE` | — | Pour toute variable `LIBERTY_*`, `POSTGRES_*` ou `PGADMIN_*` : lire sa valeur dans ce fichier (secrets Docker, Swarm ou Kubernetes). |

`liberty-ops` lit aussi `LIBERTY_SERVICE` — le nom de l'unité systemd, `liberty-next` par défaut.

---

## Le fichier .env de Docker \{#env-file\}

`release/.env`, écrit par `./liberty install`, contient les secrets ci-dessus et les choix de l'installation :

| Variable | Usage |
|---|---|
| `LIBERTY_IMAGE_TAG` | `latest` ou une version. Modifiée par `./liberty upgrade --tag`. |
| `COMPOSE_FILE` | Les fichiers compose utilisés — modifiée uniquement par `./liberty ssl` et `./liberty apps`. |
| `LIBERTY_PORT` | Le port de l'installation légère (`8000`). |
| `TRAEFIK_HTTP_PORT`, `TRAEFIK_HTTPS_PORT` | Les ports de l'installation complète (`80`, `443`). |
| `POSTGRES_BIND`, `POSTGRES_PORT` | Où PostgreSQL est publié (`127.0.0.1:5432`). |
| `PGADMIN_EMAIL`, `PGADMIN_PASSWORD` | La connexion à pgAdmin. |
| `TRAEFIK_DASHBOARD_USERS` | L'utilisateur et l'empreinte du mot de passe du tableau de bord Traefik. |
| `LIBERTY_DOMAIN`, `ACME_EMAIL`, `CERT_HOST_PATH` | Les réglages HTTPS. |
| `APPS_HOST_PATH` | Le dossier des applications sous licence sur l'hôte. |
| `LIBERTY_ROLLBACK_TAG`, `LIBERTY_LAST_BACKUP`, `LIBERTY_LAST_REPORT` | Écrites par `./liberty upgrade` pour `./liberty rollback`. |

Ne le modifier que pour un port ou une adresse ; laisser les commandes `./liberty` gérer le reste.
