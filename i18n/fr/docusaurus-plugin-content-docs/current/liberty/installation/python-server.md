---
title: Serveur Python
description: "Installation pipx de Liberty Next sur un hôte Linux ou macOS — un wheel PyPI (bundle frontend inclus), quatre CLI ajoutés au PATH, plus le wheel des applications sous licence injecté dans le même venv le cas échéant. Initialisation via liberty-admin init-db + liberty-admin run-install-jobs. Sans Docker, sans git clone, sans build npm."
keywords: [Liberty Framework, Liberty Next, installation, pipx, PyPI, wheel, pipx inject, liberty-next, liberty-admin, liberty-license, liberty-crypto, liberty-apps, init-db, run-install-jobs, _seed_default_pool, LIBERTY_JWT_SECRET, LIBERTY_MASTER_KEY, POSTGRES_PASSWORD, LIBERTY_APPS_DIR, systemd, SQLite, PostgreSQL, OIDC, Settings App]
---

# Serveur Python

Liberty Next est distribué sous la forme d'un wheel autonome sur PyPI — le bundle frontend React y est intégré. Une seule commande `pipx install` ajoute le serveur et quatre CLI compagnons au PATH. `pipx inject` ajoute les applications sous licence (Nomasx-1 / Nomajde / Nomaflow) dans le même venv le cas échéant. Aucun clone, aucun `npm`, aucun virtualenv à gérer à la main.

:::info[Choisir d'abord le bon format]
Cette page décrit l'installation **mono-hôte sans Docker** — un essai sur poste portable, une machine de développement, une petite VM où Docker serait disproportionné. Pour les environnements de production ou multi-utilisateurs, préférer la [disposition Docker Full](./docker.md#full) : elle regroupe Postgres, Traefik, pgAdmin et Portainer derrière un seul fichier Compose, et sert de cible aux bundles sous licence en production. La voie pipx prend en charge les mêmes applications sous licence, mais Postgres est à la charge de l'opérateur.
:::

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '24px', margin: '24px 0', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), rgba(74,158,255,0))'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', fontSize: '13px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Prérequis</div>
      <div>Python 3.12 · pipx · Postgres 13+ (pour les applications sous licence)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Base de données par défaut</div>
      <div>SQLite (<code>./liberty.db</code>) — bascule vers Postgres via les variables <code>POSTGRES_*</code> ; les applications sous licence imposent un vrai Postgres</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Port par défaut</div>
      <div>http://localhost:8000 (SPA + API REST)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Durée du premier lancement</div>
      <div>~5 minutes entre <code>pipx install</code> et la connexion admin (avec les applications sous licence) ; ~1 minute pour le framework seul</div>
    </div>
  </div>
</div>

---

## Étape 0 — Prérequis

| Outil | Version | Notes |
|---|---|---|
| **Python** | 3.12 | Le wheel impose `python_requires>=3.12`. |
| **pipx** | la plus récente | `brew install pipx && pipx ensurepath` sur macOS ; `apt install pipx` sur Debian/Ubuntu récents ; `python3 -m pip install --user pipx && python3 -m pipx ensurepath` partout ailleurs. |
| **Postgres** | 13+ | Toute instance accessible — installation locale (`brew install postgresql@16`, `apt install postgresql`), Postgres managé (RDS, Cloud SQL, Aiven) ou serveur dédié. Un accès superutilisateur est requis pour l'initialisation (le job intégré `deploy-databases` crée les rôles et bases par application). **Postgres n'est superflu que pour un usage SQLite seul** — mais dans ce cas Nomasx-1 / Nomajde / Nomaflow ne fonctionneront pas ; ils imposent un vrai Postgres. |
| **wheel `liberty-apps`** *(licence uniquement)* | version alignée sur le framework | `liberty_apps-X.Y.Z-py3-none-any.whl` issu de la livraison NOMANA-IT. À ignorer pour le framework open seul. |

L'ensemble du flux ci-dessous suppose un shell Linux ou macOS. Windows fonctionne via WSL2 — mêmes commandes, même wheel.

---

## Étape 1 — Installer le framework (+ injecter les applications sous licence)

```bash
# Le framework — obligatoire.
pipx install liberty-next

# Le bundle sous licence — uniquement si un wheel de livraison est disponible.
# `inject` l'ajoute au MÊME venv pipx que liberty-next pour que le framework puisse l'importer.
pipx inject liberty-next /path/to/liberty_apps-7.0.X-py3-none-any.whl
```

pipx crée un virtualenv isolé sous `~/.local/pipx/venvs/liberty-next` et publie des points d'entrée sur le PATH :

| Commande | Origine | Rôle |
|---|---|---|
| `liberty-next` | framework | Le serveur — backend FastAPI + SPA React embarquée sur le même port. |
| `liberty-admin` | framework | Gestion des utilisateurs, rôles et bases. `init-db`, `run-install-jobs`, `set-password`, `reset-admin-password`, `create-user`. |
| `liberty-license` | framework | Inspection de la clé de licence (`verify`, expiration, produits inclus). |
| `liberty-crypto` | framework | Outils de chiffrement — génère des blocs `ENC:` pour un usage inline dans les TOML. |
| `liberty-apps` | wheel des applications sous licence *(uniquement après `pipx inject`)* | Matérialise le contenu du wheel : copie son `config/` + `plugins/` dans le répertoire cible. |

Vérifier :

```bash
liberty-next --version
liberty-apps --version          # uniquement après `pipx inject`
```

---

## Étape 2 — Variables d'environnement persistantes

Deux secrets sont obligatoires ; le reste relève de la convention. Ajouter le bloc ci-dessous au profil shell (`~/.bashrc`, `~/.zshrc`) pour que chaque shell voie les mêmes valeurs — **la clé maître DOIT rester constante entre les redémarrages, sinon toute valeur chiffrée sur disque devient illisible**.

```bash title="~/.bashrc (ou ~/.zshrc)"
# ── Obligatoire — générer UNE FOIS, ne pas faire tourner sans plan ─────────
# Clé AES-256-GCM qui chiffre les mots de passe de pool, le JWT de licence,
# la clé IA et le secret OIDC au repos dans app.toml + connectors.toml.
export LIBERTY_MASTER_KEY="$(openssl rand -base64 32 | tr -d '\n=+/')"

# Clé de signature JWT — sa rotation invalide toutes les sessions actives.
export LIBERTY_JWT_SECRET="$(openssl rand -base64 48 | tr -d '\n=+/')"

# ── Identifiants Postgres ───────────────────────────────────────────────────
# Lus par _seed_default_pool de liberty-admin init-db pour écrire [pools.default]
# dans connectors.toml avec le mot de passe chiffré. À ignorer pour SQLite seul.
export POSTGRES_PASSWORD="mot-de-passe-superuser-postgres"
export POSTGRES_USER="liberty"
export POSTGRES_HOST="localhost"
export POSTGRES_PORT="5432"
export POSTGRES_DB="liberty"

# ── Répertoire des applications — cible de liberty-apps install ─────────────
export LIBERTY_APPS_DIR="$HOME/.local/share/liberty-next/apps/config"
```

| Variable | Effet |
|---|---|
| `LIBERTY_MASTER_KEY` | Clé AES-256-GCM. Déchiffre les blocs `ENC:…` dans `app.toml` / `connectors.toml` — mots de passe de pool, JWT de licence, clé IA, secret client OIDC. **Générer UNE FOIS.** Sa perte = toute valeur chiffrée sur disque devient illisible ; sa rotation = le framework refuse de démarrer tant que chaque valeur `ENC:` n'a pas été rechiffrée avec la nouvelle clé. |
| `LIBERTY_JWT_SECRET` | Signe les cookies JWT émis à la connexion. Sa rotation invalide toutes les sessions actives — chaque utilisateur est forcé de se reconnecter. |
| `POSTGRES_*` | Lues par l'auxiliaire `_seed_default_pool` de `liberty-admin init-db`. Le framework écrit `[pools.default]` dans `connectors.toml` avec le mot de passe **chiffré** (via `LIBERTY_MASTER_KEY`). Les définir AVANT le premier `init-db` — relancer plus tard ne rechiffre pas le mot de passe. |
| `LIBERTY_APPS_DIR` | Emplacement des TOML par section et des plugins des applications sous licence. Créé à la demande. |

:::info[`LIBERTY_LICENSE_KEY` n'est plus une variable d'environnement]
Une documentation plus ancienne (et certaines versions du README) mentionnaient `LIBERTY_LICENSE_KEY` ici. **Cette variable a disparu** — la clé de licence se définit désormais via *Settings → App → License* une fois la SPA disponible, chiffrée au repos dans `app.toml` avec la clé maître d'installation (AES-256-GCM, préfixe `ENC:`). La clé d'API Anthropic et le secret client OIDC suivent le même schéma. Se référer à [Paramètres applicatifs](../framework/build/settings-app.md). La variable reste utilisable comme référence `${VAR}` dans `app.toml` pour les installations qui privilégient un stockage par gestionnaire de secrets — mais le chemin canonique est l'interface utilisateur.
:::

Pour une installation pilotée par systemd, placer le même bloc dans `EnvironmentFile=/etc/liberty/secrets.env` (voir [Étape 8 — Exécution sous systemd](#step-8--run-under-systemd) ci-dessous) — mode `0640`, propriétaire `root:liberty`.

---

## Étape 3 — Initialiser Postgres + la base du framework \{#step-3--bootstrap-postgres--the-framework-db\}

Le script `install.sh` traite ce point automatiquement dans les dispositions Docker. En pipx, il convient d'exécuter les deux instructions SQL équivalentes une fois, puis `liberty-admin init-db`.

### Créer le rôle et la base Postgres (une seule fois)

```bash
# Remplacer 'postgres' par le superutilisateur effectif de l'installation.
psql -h $POSTGRES_HOST -U postgres -c \
    "CREATE ROLE $POSTGRES_USER LOGIN SUPERUSER PASSWORD '$POSTGRES_PASSWORD';"

psql -h $POSTGRES_HOST -U postgres -c \
    "CREATE DATABASE $POSTGRES_DB OWNER $POSTGRES_USER;"
```

Ignorer les deux commandes si le rôle et la base existent déjà. Le rôle `liberty` est créé `SUPERUSER` pour que le job ultérieur `deploy-databases` puisse `CREATE ROLE` et `CREATE DATABASE` pour les applications sous licence. Si la politique interne interdit le superutilisateur, accorder plutôt `CREATEROLE` + `CREATEDB` :

```sql
ALTER ROLE liberty CREATEROLE CREATEDB;
```

### Initialiser le schéma du framework

```bash
liberty-admin init-db
```

Ce que fait `init-db` :

| Action | Détail |
|---|---|
| Résoudre `[pools.default]` depuis l'environnement `POSTGRES_*`. | L'auxiliaire `_seed_default_pool` lit `POSTGRES_PASSWORD` / `_USER` / `_HOST` / `_PORT` / `_DB` et écrit un bloc `[pools.default]` dans `connectors.toml` avec le mot de passe chiffré via `LIBERTY_MASTER_KEY`. |
| Se connecter via `[pools.default]`. | Le framework ouvre la connexion qu'il vient de configurer. |
| Exécuter les migrations de schéma. | Additives — crée les tables d'authentification, les tables d'historique d'exécution Nomaflow et les métadonnées de cycle de vie sur le pool configuré. Idempotent : les lignes existantes sont préservées. |
| Générer l'utilisateur admin. | Crée le superutilisateur `admin` avec un mot de passe aléatoire fraîchement généré. **Affiche le mot de passe UNE SEULE FOIS sur stdout** — il convient de le capturer ; il n'est stocké nulle part de manière récupérable. |

```text title="sortie liberty-admin init-db (extrait)"
✔ Pool 'default' seeded → [pools.default] in connectors.toml (encrypted with LIBERTY_MASTER_KEY)
✔ Schema migrated (auth, nomaflow, lifecycle)
✔ Admin user created
  username: admin
  password: 8xK2pQrM9vTzB4nF       ← only shown once; capture it
```

En cas de perte du mot de passe admin, exécuter `liberty-admin reset-admin-password` — il génère une nouvelle valeur aléatoire et l'affiche une seule fois.

---

## Étape 4 — Matérialiser les applications sous licence *(licence uniquement)*

À ignorer pour le framework open seul.

```bash
mkdir -p "$LIBERTY_APPS_DIR"
liberty-apps install --target "$LIBERTY_APPS_DIR"
```

Ce qui est déposé sur le disque :

```text
$LIBERTY_APPS_DIR/
├── connectors.toml          ← blocs connecteurs nomasx1 / nomajde / jdedwards
├── dictionary.toml          ← toutes les entrées de dictionnaire
├── menus.toml               ← arbres de menus par application
├── screens.toml             ← définitions d'écrans par application
├── dashboards.toml
├── charts.toml
├── theme.toml
├── nomasx1-reference.tar.gz ← bundle de référence curaté (chargé par un job ci-dessous)
└── ../plugins/
    ├── nomasx1/             ← package Python contenant les callables sécurité / licence / SoD / audit
    └── nomaflow/
        └── jobs.toml        ← catalogue de jobs intégré (deploy-databases, synchros quotidiennes, …)
```

Les TOML modifiés par l'opérateur sont **préservés par défaut** lors d'une réinstallation. Passer `--force-config` pour les réécrire avec les valeurs par défaut de l'éditeur (typiquement après restauration d'un wheel fournisseur à la suite d'une mise à jour).

---

## Étape 5 — Lancer les jobs d'installation *(licence uniquement)*

`install.sh` se termine en exécutant `install-apps.sh` à l'intérieur du conteneur Docker ; l'équivalent pipx tient en une commande.

```bash
liberty-admin run-install-jobs
```

Cette commande parcourt chaque job marqué `install_step` dans `${LIBERTY_APPS_DIR}/../plugins/nomaflow/jobs.toml` et les exécute dans l'ordre déclaré :

| Job | Action |
|---|---|
| `deploy-databases` | Crée les rôles Postgres `nomasx1` + `nomajde` et leurs bases (via le superutilisateur `liberty` au travers de `[pools.default]`). Idempotent — saute ce qui existe déjà. |
| `init-schema` | Exécute les migrations alembic sur le schéma `nomasx1`. Idempotent. |
| `import-reference` | Charge le bundle de référence curaté (`nomasx1-reference.tar.gz`) dans les tables SoD / settings. Idempotent — relancé avec `replace = false`, il n'insère que les lignes manquantes. |

La commande est **idempotente de bout en bout** — relancer en cas d'échec partiel ; elle saute les jobs dont la précédente exécution s'est terminée en `SUCCEEDED`.

Référence complète des jobs (paramètres, conditions de réexécution, cas limites) : [Nomaflow → Jobs intégrés](../nomaflow/bundled-jobs.md).

---

## Étape 6 — Démarrer le serveur

```bash
liberty-next
```

Le serveur écoute sur `http://localhost:8000` (à modifier via `LIBERTY_PORT`) et sert à la fois la SPA sur `/` et l'API REST sous `/api/*` et `/admin/*`. Se connecter comme `admin` avec le mot de passe affiché à l'[Étape 3](#step-3--bootstrap-postgres--the-framework-db) — le catalogue des connecteurs est la page d'accueil.

---

## Étape 7 — Terminer via l'interface

Les secrets d'exécution ne sont plus des variables d'environnement. Une fois la SPA disponible, ouvrir *Settings → App* dans la barre latérale et renseigner :

| Section | À définir |
|---|---|
| **License** | Coller le JWT RS256 signé par l'éditeur. Chiffré au repos dans `app.toml` avec `LIBERTY_MASTER_KEY`. Le registre des connecteurs est reconstruit à l'enregistrement — les connecteurs sous licence filtrés au démarrage réapparaissent immédiatement. |
| **AI Assistant → Anthropic API key** *(optionnel)* | `sk-ant-…`. Chiffrée au repos. Active le chat intégré à l'application. |
| **OpenID Connect** *(optionnel)* | URL de découverte + client ID + client secret + mappages de claims. Chiffré au repos. SSO via Keycloak / Okta / Auth0 / Azure AD / Google. |

La visite complète de l'éditeur : [Paramètres applicatifs](../framework/build/settings-app.md).

Pour la **source `jdedwards`** lue par Nomasx-1, ouvrir *Settings → Pools → `jdedwards`* et renseigner l'URL JDBC Oracle + des identifiants en lecture seule. La clé `LIBERTY_MASTER_KEY` du framework chiffre le mot de passe avant son écriture dans `connectors.toml`.

---

## Récapitulatif — ce qui est installé

À l'issue des sept étapes ci-dessus :

| Composant | Emplacement | Notes |
|---|---|---|
| Venv framework + plugins | `~/.local/pipx/venvs/liberty-next/` | Inclut le package `liberty_apps` s'il a été injecté. |
| CLI sur le PATH | `~/.local/bin/{liberty-next,liberty-admin,liberty-license,liberty-crypto,liberty-apps}` | Le chemin exact dépend de `PIPX_BIN_DIR`. |
| Base du framework | Base Postgres `liberty` sur `$POSTGRES_HOST` | Authentification, historique d'exécution Nomaflow, cycle de vie. |
| Bases des applications sous licence | Bases Postgres `nomasx1` + `nomajde` | Créées par le job `deploy-databases`. |
| Configuration des applications sous licence | `$LIBERTY_APPS_DIR/` | TOML + bundle de référence. |
| Code plugin des applications sous licence | `$LIBERTY_APPS_DIR/../plugins/` | Le package Python `nomasx1` + `nomaflow/jobs.toml`. |
| Secrets au repos | `app.toml` / `connectors.toml` sous forme de valeurs `ENC:` | JWT de licence, clé Anthropic, secret OIDC, mots de passe de pool. Déchiffrés au démarrage avec `LIBERTY_MASTER_KEY`. |
| Clé maître + secret JWT + mot de passe Postgres | variables d'environnement (ou `EnvironmentFile` systemd) | Jamais écrits dans les TOML sur disque. |

---

## Étape 8 — Exécution sous systemd \{#step-8--run-under-systemd\}

Pour un serveur sans surveillance, prévoir un utilisateur système, un `EnvironmentFile` pour les secrets et `Restart=on-failure` pour que l'unité se rétablisse après une erreur transitoire.

Créer un utilisateur dédié et le fichier de secrets :

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty
sudo install -d -m 0750 -o liberty -g liberty /var/lib/liberty-next
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty-next
```

```bash title="/etc/liberty/secrets.env (mode 0640, root:liberty)"
LIBERTY_MASTER_KEY=<coller la sortie de openssl rand -base64 32>
LIBERTY_JWT_SECRET=<coller la sortie de openssl rand -base64 48>

POSTGRES_PASSWORD=<mot-de-passe-superuser-postgres>
POSTGRES_USER=liberty
POSTGRES_HOST=db.example.com
POSTGRES_PORT=5432
POSTGRES_DB=liberty

LIBERTY_APPS_DIR=/etc/liberty-next/
LIBERTY_PORT=8000
```

Installer le wheel pour tout le système (un seul virtualenv, les CLI disponibles pour tous les utilisateurs) :

```bash
sudo PIPX_HOME=/opt/pipx PIPX_BIN_DIR=/usr/local/bin pipx install liberty-next
# licence uniquement :
sudo PIPX_HOME=/opt/pipx PIPX_BIN_DIR=/usr/local/bin pipx inject liberty-next /path/to/liberty_apps-7.0.X.whl
```

Lancer l'initialisation une fois **sous l'utilisateur liberty avec le fichier d'environnement chargé** :

```bash
sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; liberty-admin init-db'
# licence uniquement :
sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; liberty-apps install --target $LIBERTY_APPS_DIR && liberty-admin run-install-jobs'
```

Puis l'unité :

```ini title="/etc/systemd/system/liberty-next.service"
[Unit]
Description=Liberty Next
After=network-online.target postgresql.service
Wants=network-online.target

[Service]
Type=simple
User=liberty
Group=liberty
WorkingDirectory=/var/lib/liberty-next
EnvironmentFile=/etc/liberty/secrets.env
ExecStart=/usr/local/bin/liberty-next
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ReadWritePaths=/var/lib/liberty-next /etc/liberty-next

[Install]
WantedBy=multi-user.target
```

Activer et démarrer :

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now liberty-next
sudo journalctl -u liberty-next -f
```

---

## Vérifier l'installation

| Contrôle | Comment |
|---|---|
| Serveur opérationnel | `curl -fsS http://localhost:8000/info` retourne une charge utile JSON contenant la version du framework et la liste des applications chargées. |
| OpenAPI charge | `http://localhost:8000/docs` — la surface REST complète est navigable. |
| La SPA s'affiche | `http://localhost:8000/` — l'écran de connexion apparaît. |
| L'admin peut se connecter | Se connecter comme `admin` avec le mot de passe affiché par `init-db`. |
| Applications sous licence chargées | `/info` montre `screens.apps` contenant `nomasx1` / `nomajde`. Le sélecteur d'applications de la barre supérieure de la SPA les liste. |
| Licence active | Le badge *Settings → App → License* affiche *configured* ; `curl /info \| jq '.license.mode'` retourne `"full"`. |
| Assistant IA *(optionnel)* | Après définition de la clé Anthropic dans *Settings → App → AI*, ouvrir `/chat` — le champ de saisie est activé. |

---

## Mise à jour

Le framework Liberty et le bundle sous licence évoluent à des cadences distinctes.

### Framework

```bash
pipx upgrade liberty-next
sudo systemctl restart liberty-next      # si exécuté sous systemd
```

`pipx upgrade` remplace le wheel dans le venv isolé. Le nouveau framework rejoue `init-db` au premier démarrage — idempotent, additif seulement.

Pour figer une version précise :

```bash
pipx install --force liberty-next==<version>
```

### Applications sous licence

```bash
pipx inject --force liberty-next /path/to/liberty_apps-NEW-VERSION.whl
liberty-apps install --target "$LIBERTY_APPS_DIR"
liberty-admin run-install-jobs           # prend en compte les nouveaux jobs install-step (deltas de schéma, etc.)
sudo systemctl restart liberty-next
```

Le drapeau `--force` sur `pipx inject` remplace le wheel précédemment injecté. `liberty-apps install` préserve les modifications opérateur dans `$LIBERTY_APPS_DIR/*.toml` sauf si `--force-config` est passé.

Pour la vision complète des mises à jour (Docker + pipx + Swarm + rollback) : [Mise à jour](./upgrading.md).

---

## Résolution des problèmes

| Symptôme | Cause | Correctif |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` au démarrage | La variable d'environnement n'a pas été propagée. | La ré-`export`er dans le même shell, ou l'ajouter à l'`EnvironmentFile` systemd. |
| `Address already in use` sur le port 8000 | Un autre processus occupe le port. | Définir `LIBERTY_PORT=8001` (ou tout port libre). |
| `init-db` échoue avec `permission denied for database` | Le rôle Postgres `liberty` n'est pas superutilisateur / n'a pas `CREATEDB`. | `ALTER ROLE liberty SUPERUSER` (ou `CREATEROLE CREATEDB`). |
| La connexion indique "invalid credentials" | Mot de passe admin d'initialisation perdu. | `liberty-admin reset-admin-password` — affiche une nouvelle valeur aléatoire une seule fois. |
| `liberty-apps: command not found` après `pipx inject` | `pipx inject` n'expose pas automatiquement les points d'entrée CLI du wheel sauf si celui-ci les déclare. | Le wheel livré déclare bien `liberty-apps` — relancer `pipx ensurepath` et rouvrir le shell. S'il manque encore, appeler directement `~/.local/pipx/venvs/liberty-next/bin/liberty-apps`. |
| `run-install-jobs` échoue avec `target_connector nomasx1 not configured` | L'étape `liberty-apps install` a été sautée, ou `LIBERTY_APPS_DIR` est mal défini. | Exécuter `liberty-apps install --target "$LIBERTY_APPS_DIR"` puis relancer `run-install-jobs`. |
| Les modifications des TOML de configuration ne sont pas prises en compte | `LIBERTY_APPS_DIR` du shell courant diffère de celui utilisé au démarrage. | `liberty-next` journalise le chemin résolu au démarrage — chercher `apps_dir=`. |
| `liberty-next` introuvable après installation | Le répertoire bin de pipx n'est pas dans le PATH. | Lancer `pipx ensurepath` puis rouvrir le shell, ou appeler directement `~/.local/bin/liberty-next`. |
| `Cannot decrypt ENC:…` au premier démarrage | `LIBERTY_MASTER_KEY` a changé (ou n'était pas définie lors de l'exécution de `init-db`). | Soit restaurer la clé d'origine, soit `liberty-crypto rewrap` pour rechiffrer chaque valeur `ENC:` avec la clé courante. |

---

## Pour aller plus loin

- [Paramètres applicatifs](../framework/build/settings-app.md) — l'éditeur *Settings → App* ; secrets masqués, ce qui est appliqué à chaud vs ce qui exige un redémarrage.
- [Déployer les applications préfabriquées](./deploy-prebuilt-apps.md) — la même histoire Nomasx-1 / Nomajde / Nomaflow pour la voie Docker.
- [Nomaflow → Jobs intégrés](../nomaflow/bundled-jobs.md) — référence des jobs install-step invoqués par `run-install-jobs`.
- [Docker](./docker.md) — l'alternative basée sur Compose. Choisir la [disposition Full](./docker.md#full) pour les installations de production ou multi-utilisateurs.
- [Production](./production.md) — checklist de durcissement, OIDC, épinglage du planificateur, fréquence des sauvegardes.
- [Mise à jour](./upgrading.md) — la vision plus large des mises à jour (Compose + pipx + Swarm côte à côte).
