---
title: Installation — vue d'ensemble
description: "Mettre en service Liberty Next depuis le répertoire release/ — trois variantes Docker (légère SQLite, complète à 5 services, Docker Swarm), surcouches TLS (Let's Encrypt ou certificats fournis par l'opérateur), surcouche d'applications sous licence — toutes pilotées par ./install.sh, ./install-apps.sh, ./deploy-swarm.sh et ./backup.sh. Plus une alternative pipx pour les hôtes sans Docker. L'image se trouve à ghcr.io/fblettner/liberty-next."
keywords: [Liberty Framework, installation, déploiement, install.sh, install-apps.sh, deploy-swarm.sh, backup.sh, Docker, Compose, Swarm, légère, complète, pipx, --tag, --reset, --apps, --ssl, letsencrypt, provided, COMPOSE_FILE, ghcr.io, Traefik, Postgres, pgAdmin, Portainer]
---

# Installation — vue d'ensemble

Liberty Next est distribué sous forme d'une image OCI publique (`ghcr.io/fblettner/liberty-next`) accompagnée d'un répertoire [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) qui rassemble **trois fichiers compose** + **deux surcouches TLS** + **une surcouche d'applications** + **quatre scripts d'aide** qui les articulent. Choisir une variante, lancer une commande, et le tour est joué.

| Variante | Runtime | Services | Cas d'usage |
|---|---|---|---|
| **Légère** | Docker Compose | liberty-next + SQLite (sur un volume) | Essai local, démo mono-utilisateur, évaluation rapide. |
| **Complète** | Docker Compose | liberty-next + PostgreSQL 16 + Traefik + pgAdmin + Portainer | Production / staging sur un hôte unique. |
| **Swarm** | Docker Swarm | les mêmes cinq services, avec des contraintes `deploy.*` et un réseau overlay | Swarm mono ou multi-nœud. |
| **pipx** | Python natif | liberty-next seul (SQLite par défaut, pointable vers toute base) | Hôtes sans Docker, environnements purement Python. |

Les variantes **Légère** et **Complète** peuvent être combinées avec une surcouche TLS (Let's Encrypt ou certificats fournis par l'opérateur) et avec la surcouche d'applications sous licence (plugins Nomasx-1 / Nomajde / Nomaflow). Les quatre surcouches sont articulées automatiquement par les options de `./install.sh` ; il n'y a jamais à manipuler d'option `-f` à la main.

---

## L'installation en 60 secondes

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh                                  # interactif — demande légère ou complète
# OU — non interactif
./install.sh light                            # un seul conteneur, SQLite
./install.sh full                             # pile de production à 5 services (tag latest)
./install.sh full --tag 7.0.2                 # pile complète, épinglée à une version précise
```

Ce que fait `install.sh` au premier lancement :

| Étape | Détail |
|---|---|
| 1. Détecte les volumes Docker résiduels d'une installation précédente. | Si `pg-data` / `pgadmin-data` / `liberty-data` existent mais que `.env` est absent, le script REFUSE de démarrer et invite l'opérateur à relancer avec `--reset` (purge + redémarrage à neuf) ou à restaurer le `.env` précédent (les secrets gravés dans les volumes doivent correspondre). |
| 2. Génère un `.env` avec des secrets cryptographiquement aléatoires (aucun caractère `$` — la substitution Compose ne peut pas les absorber). | Au premier lancement uniquement — les exécutions suivantes préservent un `.env` existant. |
| 3. Écrit `COMPOSE_FILE=docker-compose.<variante>.yml[:surcouches...]` dans `.env`. | Chaque `docker compose <cmd>` ultérieur (sans `-f`) fusionne automatiquement les bons fichiers. **Critique** — l'opérateur ne doit PAS passer `-f` à la main après l'installation. |
| 4. Récupère les images via `docker compose pull` et lance `docker compose up -d`. | Idempotent — relancer sur une pile déjà active ne fait que ré-appliquer le fichier compose. |
| 5. Attend jusqu'à 120 s que le healthcheck du conteneur passe (`GET /info`). | Annonce `healthy` quand la SPA et l'API sont prêtes. |
| 6. Affiche l'URL de la SPA, le mot de passe `admin` généré et les URL des tableaux de bord pgAdmin / Portainer / Traefik. | Le mot de passe est également conservé dans `.env` (mode `0600`). |

Pour Docker Swarm, l'équivalent est `./deploy-swarm.sh` (détaillé dans [Docker → Swarm](./docker.md#swarm)).

---

## Les options d'install.sh à connaître

| Option | Rôle |
|---|---|
| **`--tag <version>`** | Épingle `LIBERTY_IMAGE_TAG` au moment de l'installation (par exemple `--tag 7.0.2`). Valeur par défaut `latest` (chaque merge sur main → nouvelle release ; `latest` reflète toujours l'état courant de main). Ignorée si `.env` existe déjà — modifier la variable directement à cet endroit. |
| **`--reset`** | `docker compose down -v` + suppression de `.env` au préalable. À utiliser quand une installation précédente a laissé un `pg-data` résiduel avec l'ancien mot de passe (l'initialisation Postgres ne s'exécute que sur un volume vierge — secrets neufs + volume résiduel = échec d'authentification permanent). |
| **`--apps <wheel-ou-URL>`** | Après avoir monté la pile de base, enchaîne avec `install-apps.sh` sur le wheel indiqué — les applications sous licence (Nomasx-1 / Nomajde / Nomaflow) sont déployées dans la même commande. À combiner avec `--license-key <jwt>`. |
| **`--ssl letsencrypt --domain --email`** *(variante complète uniquement)* | Branche Let's Encrypt automatiquement. L'hôte doit être joignable depuis l'Internet public sur `:80`/`:443` pour le challenge TLS-ALPN. |
| **`--ssl provided --cert-dir --cert-file --key-file`** *(variante complète uniquement)* | Branche des certificats fournis par l'opérateur (CA d'entreprise, PKI interne, installation en air-gap). `install.sh` vérifie l'existence des fichiers, monte le répertoire de certificats en bind, génère `traefik/dynamic/tls.yml`. |

Les cinq options se combinent — `./install.sh full --tag 7.0.2 --ssl letsencrypt --domain liberty.example.com --email ops@example.com --apps ./liberty_apps-7.0.1-py3-none-any.whl --license-key <jwt>` réalise en une seule commande une installation de production avec TLS et le bundle sous licence.

---

## Le modèle mental de COMPOSE_FILE

Après `./install.sh full --ssl letsencrypt --apps <wheel>`, `.env` contient :

```env title=".env (extrait)"
COMPOSE_FILE=docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml
```

Docker Compose lit `COMPOSE_FILE` à chaque commande — `docker compose ps` / `pull` / `up -d` / `down` / `logs` / `restart` fusionnent automatiquement **toutes les surcouches listées**. L'opérateur ne tape jamais `-f`.

| À faire | À éviter |
|---|---|
| `docker compose pull && docker compose up -d` *(prend en compte chaque surcouche)* | `docker compose -f docker-compose.full.yml up -d` *(perd les surcouches apps + TLS)* |
| `docker compose logs -f liberty-next` *(contexte fusionné)* | `docker compose -f docker-compose.full.yml logs -f` *(aucune surcouche)* |

`install-apps.sh` et l'option `--ssl` **ajoutent** tous deux à `COMPOSE_FILE` — relancer `install.sh` avec un nouveau mode `--ssl` (ou enchaîner `install-apps.sh`) met la valeur à jour proprement. Une édition manuelle de `.env` est également possible ; la chaîne est séparée par des deux-points, et l'ordre compte (les surcouches s'appliquent de droite à gauche).

---

## Les trois variantes Docker

### Légère — un seul conteneur, SQLite

Contenu :

- Un conteneur (`liberty-next`) sur le port `8000`.
- Base SQLite du framework (authentification + historique d'exécution Nomaflow) persistée sur un volume Docker.
- Fichiers TOML édités par l'opérateur persistés sur un second volume — sauvegardés depuis *Settings → …* dans la SPA ; aucun bind-mount hôte n'est nécessaire.
- **Pas** de Postgres, **pas** de Traefik, **pas** de TLS — le framework est mis à disposition directement sur `:8000`.

À retenir pour les essais, les démos, l'évaluation, les installations mono-utilisateur. Les applications sous licence (Nomasx-1 / Nomajde) fonctionnent aussi sur la variante Légère quand un Postgres multi-utilisateur n'est pas requis — `./install.sh light --apps <wheel>` est pris en charge.

Volumes :

| Volume | Contenu |
|---|---|
| `liberty-data` | Base SQLite + `auth.toml` (empreintes Argon2 des mots de passe). |
| `liberty-config` | Tous les fichiers TOML édités par l'opérateur (connecteurs / dictionnaire / menus / écrans / graphiques / tableaux de bord). |

### Complète — pile de production derrière Traefik

Cinq services, tous sur le port `80` de l'hôte (ou `443` une fois le TLS branché) :

| Service | Chemin | Détail |
|---|---|---|
| **Traefik** | `/traefik` | Reverse proxy + tableau de bord. Authentification basique (par défaut `admin/admin` — **à changer** dans `traefik/dynamic/dynamic.yml`). |
| **liberty-next** | `/` (catchall) | SPA + API + administration. Se connecte au Postgres embarqué pour la base du framework. |
| **Postgres 16** | (interne `:5432`, exposé par défaut) | Base du framework (authentification, historique Nomaflow) et emplacement pour héberger les pools client (données Nomasx-1 / Nomajde). |
| **pgAdmin** | `/pgadmin` | Interface graphique Postgres. |
| **Portainer** | `/portainer` | Interface Docker. |

Volumes :

| Volume | Contenu |
|---|---|
| `liberty-config` | TOML édités par l'opérateur. |
| `pg-data` | Fichiers de la base Postgres. |
| `pgadmin-data` | Enregistrements et préférences pgAdmin. |
| `portainer-data` | État Portainer. |
| `traefik-acme` | Stockage des certificats Let's Encrypt (quand TLS Let's Encrypt est actif). |

C'est la variante visée par les bundles sous licence (Nomasx-1, Nomajde) — le Postgres embarqué héberge leur pool par défaut. Voir [Déployer les applications préassemblées](./deploy-prebuilt-apps.md).

### Swarm — Docker Swarm, mono ou multi-nœud

Les mêmes cinq services, mais avec des clés `deploy.*`, un réseau overlay, le mode `--providers.swarm` de Traefik et les services à état épinglés à un unique manager. Déploiement / mise à jour / état avec `./deploy-swarm.sh` — `docker stack deploy` ne prend pas d'option `--env-file`, donc le script charge d'abord `.env` dans le shell.

Note : les options `--apps` et `--ssl` de `install.sh` sont **réservées à Compose** — sur Swarm, les opérateurs appliquent les surcouches en éditant le fichier de stack ou en enchaînant un `docker stack deploy` séparé avec la surcouche fusionnée.

---

## La surcouche d'applications sous licence

Nomasx-1, Nomajde et les jobs Nomaflow embarqués sont livrés sous la forme d'un unique wheel **`liberty_apps-<version>-py3-none-any.whl`**. Deux chemins d'installation :

### En une seule commande (hôte vierge)

```bash
./install.sh full \
    --apps ./liberty_apps-7.0.1-py3-none-any.whl \
    --license-key <votre-jwt-rs256>
```

Tout est fait en une fois — pile de base + applications sous licence + clé de licence.

### Ou en deux temps : base d'abord, applications ensuite

```bash
./install.sh full                                                            # pile de base
./install-apps.sh ./liberty_apps-7.0.1-py3-none-any.whl --license-key <jwt>  # ajout des applications
```

Ce que fait `install-apps.sh` :

1. **Matérialise le wheel** dans `./apps/` via un conteneur `python:3.12-slim` jetable — l'hôte n'a besoin d'**aucune** installation locale de pip ou de Python. Le wheel embarque une CLI `liberty-apps install --target DIR` qui copie `config/` et `plugins/` vers la destination, en préservant les TOML édités par l'opérateur.
2. **Met à jour `.env`** — ajoute `docker-compose.apps.yml` à `COMPOSE_FILE`, définit `APPS_HOST_PATH=<chemin absolu>` et `LIBERTY_LICENSE_KEY=<jwt>` (si fourni).
3. **Redémarre la pile** — `docker compose up -d` prend en compte la surcouche d'applications automatiquement via `COMPOSE_FILE` (sans manipulation de `-f`).

Détail complet : [Déployer les applications préassemblées](./deploy-prebuilt-apps.md).

---

## La voie pipx — sans aucun Docker

Pour qui ne veut pas de conteneurs (petite installation sur un seul hôte, environnement contraint à Python) :

```bash
pipx install liberty-next
liberty-next             # → API + SPA sur http://localhost:8000
```

pipx place Liberty Next dans son propre venv isolé, ce qui empêche ses dépendances d'entrer en conflit avec le Python système. Les quatre commandes CLI (`liberty-next`, `liberty-admin`, `liberty-license`, `liberty-crypto`) atterrissent dans le PATH. Mises à jour : `pipx upgrade liberty-next`. Voir [Serveur Python](./python-server.md).

Il convient de faire pointer `LIBERTY_DB_URL` vers un Postgres existant (ou de rester sur la SQLite par défaut — `./liberty.db` dans le répertoire de travail). Les TOML de configuration sont lus depuis `./config/<name>.toml` ; définir `LIBERTY_APPS_DIR=/etc/liberty-next/` permet de les conserver à un emplacement stable.

---

## En un coup d'œil

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="io-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="360" rx="14" fill="url(#io-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next — install.sh articule tout via COMPOSE_FILE</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="220" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="150" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LÉGÈRE</text>
  <text x="150" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./install.sh light</text>
  <line x1="60" y1="148" x2="240" y2="148" stroke="#22c55e" strokeOpacity="0.3"/>
  <text x="150" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">1 conteneur · :8000</text>
  <text x="150" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SQLite (volume)</text>
  <text x="150" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">sans TLS · sans Traefik</text>
  <text x="150" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Essai / démo / évaluation</text>
  <text x="150" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">2 volumes à sauvegarder</text>

  <rect x="272" y="84" width="220" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="382" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPLÈTE</text>
  <text x="382" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./install.sh full</text>
  <line x1="292" y1="148" x2="472" y2="148" stroke="#4a9eff" strokeOpacity="0.3"/>
  <text x="382" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">5 services · :80 (ou :443)</text>
  <text x="382" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik + Postgres 16</text>
  <text x="382" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">pgAdmin · Portainer</text>
  <text x="382" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Production / staging</text>
  <text x="382" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Cible des applications sous licence</text>

  <rect x="504" y="84" width="220" height="240" rx="10" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="614" y="112" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SWARM</text>
  <text x="614" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./deploy-swarm.sh</text>
  <line x1="524" y1="148" x2="704" y2="148" stroke="#c084fc" strokeOpacity="0.3"/>
  <text x="614" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">5 services · réseau overlay</text>
  <text x="614" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">placement sur le manager</text>
  <text x="614" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">deploy.* update_config</text>
  <text x="614" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Swarm mono ou multi-nœud</text>
  <text x="614" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Mises à jour glissantes intégrées</text>

  <rect x="736" y="84" width="224" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="848" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PIPX</text>
  <text x="848" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">pipx install liberty-next</text>
  <line x1="756" y1="148" x2="940" y2="148" stroke="#fb923c" strokeOpacity="0.3"/>
  <text x="848" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Docker non requis</text>
  <text x="848" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PATH : liberty-next +</text>
  <text x="848" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-admin / -license</text>
  <text x="848" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Hôtes sans Docker</text>
  <text x="848" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Environnements purement Python</text>

  <rect x="40" y="338" width="920" height="32" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937"/>
  <text x="500" y="358" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">install.sh --ssl letsencrypt|provided  +  --apps &lt;wheel&gt; --license-key &lt;jwt&gt;  →  articule les surcouches dans COMPOSE_FILE</text>
</svg>

---

## Variables d'environnement requises

Deux valeurs sont **obligatoires** quelle que soit la variante — `install.sh` les génère toutes deux avec `openssl rand`. Avec pipx ou un compose maison, il revient à l'opérateur de les générer.

| Variable | Rôle | Comment la générer |
|---|---|---|
| **`LIBERTY_JWT_SECRET`** | Signe chaque jeton d'accès et de rafraîchissement. Doit rester stable entre les redémarrages — une clé rotée invalide tous les jetons en cours (oblige chaque utilisateur à se reconnecter). | `python -c "import secrets;print(secrets.token_urlsafe(48))"` |
| **`LIBERTY_MASTER_KEY`** | Clé de chiffrement au niveau du champ — chiffre les secrets (mots de passe de pool, jetons d'API) au repos dans les TOML. Doit rester identique, sans quoi les valeurs `ENC:` deviennent illisibles. | `python -c "import secrets;print(secrets.token_urlsafe(32))"` |

Variables optionnelles courantes (la liste complète se trouve dans `release/.env.example`) :

| Variable | Valeur par défaut | Détail |
|---|---|---|
| `LIBERTY_IMAGE_TAG` | `latest` | Épingler à un tag de version précis pour la stabilité (`7.0.1`, `7.0.2`, etc.). Utiliser `./install.sh --tag <ver>` pour la définir à l'installation. |
| `LIBERTY_ADMIN_PASSWORD` | (généré + affiché une fois) | Mot de passe d'amorçage pour l'utilisateur `admin` au premier démarrage. |
| `LIBERTY_LICENSE_KEY` | (aucune — mode `restricted`) | JWT RS256 qui déverrouille les connecteurs sous licence. |
| `ANTHROPIC_API_KEY` | (aucune — assistant IA désactivé) | Active le chat de l'assistant IA dans l'application. |
| `LIBERTY_OIDC_ENABLED` | `false` | Passer à `true` et renseigner les détails du fournisseur OIDC pour activer le SSO. |
| `POSTGRES_PASSWORD` | (généré) | Variante complète uniquement — mot de passe du Postgres embarqué. |
| `PGADMIN_PASSWORD` | (généré) | Variante complète uniquement — mot de passe administrateur pgAdmin. |
| `APPS_HOST_PATH` | (défini par `install-apps.sh`) | Chemin absolu vers le répertoire `./apps/` matérialisé. La surcouche d'applications le monte en bind à `/apps:ro`. |
| `COMPOSE_FILE` | (défini par `install.sh` + `install-apps.sh`) | Chaîne de fichiers compose, séparés par des deux-points, que Docker Compose fusionne automatiquement. |
| `LIBERTY_DOMAIN`, `ACME_EMAIL` | (définis par `--ssl letsencrypt`) | Nom d'hôte TLS et contact ACME. |
| `CERT_HOST_PATH` | (défini par `--ssl provided`) | Répertoire hôte monté en bind à `/etc/certs:ro` pour les certificats de l'opérateur. |

:::info[À propos du `$` dans les mots de passe]
Docker Compose applique aussi la substitution `${VAR}` à chaque valeur de `.env` — un `$` littéral dans un mot de passe est absorbé (par exemple `POSTGRES_PASSWORD=foo$bar` devient `foo`, Compose cherchant à étendre `$bar`). Il est recommandé de générer des mots de passe sans `$` (ce que fait `install.sh`), ou bien d'échapper chaque `$` en `$$`.
:::

---

## À lire dans l'ordre

| Étape | Page |
|---|---|
| **0** | Cette vue d'ensemble. |
| **1** | Choisir un chemin : [Docker](./docker.md) (couvre les trois variantes Docker) ou [Serveur Python](./python-server.md) (pipx). |
| **2** | Brancher le TLS — [Traefik](./traefik.md) détaille les deux modes `--ssl` (Let's Encrypt et certificats fournis par l'opérateur). |
| **3** | Utiliser les outils visuels embarqués — [Portainer + pgAdmin](./portainer.md). |
| **4** | Durcissement production — OIDC, rotation JWT, sauvegardes, précautions multi-réplique : [Production](./production.md). |
| **5** | Déployer NomaUBL / Nomasx-1 / Nomajde par-dessus : [Déployer les applications préassemblées](./deploy-prebuilt-apps.md). |
| **6** | Quand une nouvelle version sort : [Mise à niveau](./upgrading.md). |

---

## Vérification rapide — à quoi ressemble une installation réussie

Après le chemin retenu :

- `curl http://<host>:<port>/info` renvoie une charge JSON avec `version`, `frontend_built` et le décompte des écrans / menus / connecteurs chargés.
- La SPA s'affiche sur `http://<host>:<port>/`.
- Connexion en tant qu'`admin` avec le mot de passe affiché par `install.sh` (ou depuis `LIBERTY_ADMIN_PASSWORD` dans `.env`).
- Le conteneur `liberty-next` apparaît sain dans `docker ps` (le healthcheck embarqué interroge `/info` toutes les 30 s).

Si l'une de ces vérifications échoue, se rendre à la section de dépannage du chemin choisi.

---

## La suite

- [Docker](./docker.md) — les trois variantes Docker en détail, avec le pas-à-pas des scripts d'aide et la discipline `COMPOSE_FILE`.
- [Serveur Python](./python-server.md) — installation via pipx pour les hôtes sans Docker.
- [Production](./production.md) — TLS, sauvegardes, durcissement.
