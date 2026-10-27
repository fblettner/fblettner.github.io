---
title: Variables d'environnement
description: "Les variables d'environnement lues par Liberty Next — secrets, dossiers de configuration, initialisation de la base, comportement du conteneur, exploitation —, les références ${VARIABLE} admises dans chaque fichier TOML, et les variables du fichier .env de Docker."
keywords: [Liberty Next, variables d'environnement, LIBERTY_MASTER_KEY, LIBERTY_JWT_SECRET, LIBERTY_APPS_DIR, LIBERTY_APP_CONFIG, POSTGRES, _FILE, .env, Docker]
---

# Variables d'environnement

L'environnement porte ce qui ne doit pas être écrit dans les fichiers de configuration — les secrets — et ce qui dépend de l'hôte — dossiers, ports. Les fichiers de configuration y font ensuite référence.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dge-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dge-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dge-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dge-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="40" width="760" height="230" rx="14" fill="url(#dge-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="60" width="220" height="70" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="350.0" y="92.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Installation</text>
  <text x="350.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">release/.env · fichier env du service</text>
  <rect x="510" y="60" width="200" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="610.0" y="92.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Environnement</text>
  <text x="610.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_MASTER_KEY · LIBERTY_JWT_SECRET</text>
  <rect x="760" y="60" width="190" height="70" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="855.0" y="92.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="855.0" y="107.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">les lit au démarrage</text>
  <line x1="460" y1="95" x2="510" y2="95" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dge-flow)"/>
  <line x1="710" y1="95" x2="760" y2="95" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dge-flow)"/>
  <rect x="510" y="180" width="200" height="60" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="610.0" y="207.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">$&#123;VARIABLE&#125;</text>
  <text x="610.0" y="222.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">dans une valeur de réglage</text>
  <rect x="760" y="180" width="190" height="60" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="855.0" y="207.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">&lt;NAME&gt;_FILE</text>
  <text x="855.0" y="222.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">secrets Docker / K8s</text>
  <line x1="610" y1="180" x2="610" y2="130" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dge-flow)"/>
  <line x1="855" y1="180" x2="855" y2="130" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dge-flow)"/>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Générées</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par l'installation</text>
  <line x1="210" y1="97.0" x2="240" y2="95" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dge-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Secrets en fichier</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeur lue dans un fichier</text>
  <line x1="1000" y1="217.0" x2="950" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dge-arrow)"/>
</svg>

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
