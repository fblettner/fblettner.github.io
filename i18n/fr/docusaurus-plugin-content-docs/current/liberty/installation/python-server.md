---
title: Serveur Python
description: "Installation de Liberty Next sur un hôte Linux via pipx — un wheel PyPI pré-compilé (bundle frontend inclus), quatre CLI ajoutés au PATH, SQLite par défaut, Postgres en option. Sans Docker, sans git clone, sans build npm."
keywords: [Liberty Framework, Liberty Next, installation, pipx, PyPI, wheel, liberty-next, liberty-admin, liberty-license, liberty-crypto, LIBERTY_JWT_SECRET, LIBERTY_MASTER_KEY, LIBERTY_DB_URL, LIBERTY_APPS_DIR, LIBERTY_ADMIN_PASSWORD, systemd, SQLite, PostgreSQL, OIDC]
---

# Serveur Python

Liberty Next est distribué sous la forme d'un wheel autonome publié sur PyPI — le bundle frontend React y est déjà intégré. Une seule commande `pipx install` ajoute le serveur et trois CLI compagnons au PATH. Aucun clone, aucun `npm`, aucun virtualenv à gérer à la main.

:::info[Choisir d'abord le bon format]
Cette page décrit l'installation **mono-hôte sans Docker** — un essai sur poste portable, une machine de développement, une petite VM où Docker serait disproportionné. Pour les environnements de production ou multi-utilisateurs, préférer la [disposition Docker Full](./docker.md#full) : elle regroupe Postgres, Traefik, pgAdmin et Portainer derrière un seul fichier Compose, et sert de cible aux bundles sous licence (Nomasx-1, Nomajde, NomaUBL).
:::

---

## Vue d'ensemble

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '24px', margin: '24px 0', background: 'linear-gradient(180deg, rgba(74,158,255,0.04), rgba(74,158,255,0))'}}>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', fontSize: '13px'}}>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Prérequis</div>
      <div>Python 3.12 · pipx</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Base de données par défaut</div>
      <div>SQLite (<code>./liberty.db</code>) — bascule vers Postgres via <code>LIBERTY_DB_URL</code></div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Port par défaut</div>
      <div>http://localhost:8000 (SPA + API REST)</div>
    </div>
    <div>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>Durée du premier lancement</div>
      <div>~1 minute entre <code>pipx install</code> et la connexion admin</div>
    </div>
  </div>
</div>

---

## Prérequis

| Outil | Version | Notes |
|---|---|---|
| Python | 3.12 | Le wheel impose `python_requires>=3.12`. |
| pipx | la plus récente | `python3 -m pip install --user pipx && python3 -m pipx ensurepath`. |
| Postgres *(optionnel)* | 14+ | Uniquement pour remplacer SQLite par une base externe. L'installation légère fonctionne très bien sans. |

---

## Étape 1 — Installer le wheel

```bash
pipx install liberty-next
```

pipx crée un virtualenv isolé sous `~/.local/pipx/venvs/liberty-next` et publie quatre points d'entrée sur le PATH :

| Commande | Rôle |
|---|---|
| `liberty-next` | Le serveur — backend FastAPI + la SPA React embarquée sur le même port. |
| `liberty-admin` | Gestion des utilisateurs, des rôles et de la base (`init-db`, `create-user`, `set-password`, …). |
| `liberty-license` | Inspection de la clé de licence (`verify`, expiration, produits inclus). |
| `liberty-crypto` | Outils de clé de chiffrement — chiffre les secrets pour un usage inline dans les TOML (blocs `ENC:`). |

Vérifier la présence sur le PATH :

```bash
liberty-next --version
liberty-admin --help
```

---

## Étape 2 — Générer les secrets requis

Deux variables d'environnement sont obligatoires — le serveur refuse de démarrer sans elles.

```bash
export LIBERTY_JWT_SECRET="$(python -c 'import secrets;print(secrets.token_urlsafe(48))')"
export LIBERTY_MASTER_KEY="$(python -c 'import secrets;print(secrets.token_urlsafe(32))')"
```

| Variable | Rôle |
|---|---|
| `LIBERTY_JWT_SECRET` | Signe les cookies JWT émis à la connexion. Toute absence ou rotation invalide les sessions actives. |
| `LIBERTY_MASTER_KEY` | Clé AES-256-GCM qui déchiffre les blocs `ENC:…` à l'intérieur des fichiers TOML (mots de passe de pool, secrets clients OIDC, …). Voir [Chiffrement et secrets](../framework/configuration/encryption-secrets.md). |

Pour une installation pilotée par systemd, placer les deux dans un `EnvironmentFile` (voir [Étape 6](#étape-6--exécution-sous-systemd)) plutôt que dans le shell.

---

## Étape 3 — Initialiser le mot de passe admin

Définir `LIBERTY_ADMIN_PASSWORD` **avant** le premier démarrage. Le point d'entrée exécute automatiquement `liberty-admin init-db` à chaque boot — de façon idempotente : il crée le magasin d'authentification sur une installation neuve et ajoute les nouvelles tables du framework apportées par une version plus récente sans toucher aux lignes existantes.

```bash
export LIBERTY_ADMIN_PASSWORD="ChangeMe-OnFirstLogin"
```

Serveur déjà en cours d'exécution et besoin de réinitialiser le mot de passe ? Utiliser la CLI :

```bash
liberty-admin set-password admin <nouveau-mot-de-passe>
```

---

## Étape 4 — Choisir un répertoire de travail (optionnel mais recommandé)

Par défaut, Liberty lit sa configuration depuis `./config/<name>.toml` et stocke la base SQLite dans `./liberty.db` — les deux relatifs au **répertoire de travail courant**. Pointer vers un emplacement stable pour pouvoir lancer `liberty-next` depuis n'importe où :

```bash
sudo mkdir -p /etc/liberty-next /var/lib/liberty-next
sudo chown $USER /etc/liberty-next /var/lib/liberty-next

export LIBERTY_APPS_DIR=/etc/liberty-next/
```

| Variable | Effet |
|---|---|
| `LIBERTY_APPS_DIR` | Emplacement des TOML par section (`connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`). Par défaut `./config/`. |

Le framework crée les TOML manquants au premier démarrage à partir de ses modèles embarqués — aucune étape `init-config` séparée n'est nécessaire.

---

## Étape 5 — Démarrer le serveur

```bash
liberty-next
```

Le serveur écoute sur `http://localhost:8000` (à modifier via `LIBERTY_PORT`) et sert à la fois la SPA sur `/` et l'API REST sous `/api/*` et `/admin/*`. Se connecter comme `admin` avec le mot de passe de l'[Étape 3](#étape-3--initialiser-le-mot-de-passe-admin) — le catalogue des connecteurs est la page d'accueil.

### Choisir une base de données

Le backend par défaut est SQLite — aucune mise en place, un simple fichier `liberty.db` dans le répertoire de travail. Pour pointer vers un Postgres existant :

```bash
export LIBERTY_DB_URL="postgresql+asyncpg://liberty:secret@db.example.com:5432/liberty"
```

| Backend | Forme de l'URL |
|---|---|
| SQLite *(défaut)* | `sqlite+aiosqlite:///./liberty.db` |
| PostgreSQL | `postgresql+asyncpg://<user>:<password>@<host>:<port>/<database>` |
| Oracle | `oracle+oracledb_async://<user>:<password>@<host>:<port>/?service_name=<name>` |

Changer de backend après création des données relève d'une migration, pas d'une bascule — exporter d'un côté et réimporter de l'autre, ou repartir d'une base vierge.

---

## Étape 6 — Exécution sous systemd

Pour un serveur sans surveillance, prévoir un utilisateur système, un `EnvironmentFile` pour les secrets et `Restart=on-failure` pour que l'unité se rétablisse après une erreur transitoire.

Créer un utilisateur dédié et le fichier de secrets :

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty-next
sudo install -d -m 0750 -o liberty -g liberty /var/lib/liberty-next
```

```bash title="/etc/liberty/secrets.env (mode 0640, root:liberty)"
LIBERTY_JWT_SECRET=<coller ici la sortie de token_urlsafe(48)>
LIBERTY_MASTER_KEY=<coller ici la sortie de token_urlsafe(32)>
LIBERTY_ADMIN_PASSWORD=ChangeMe-OnFirstLogin
LIBERTY_APPS_DIR=/etc/liberty-next/
LIBERTY_DB_URL=postgresql+asyncpg://liberty:secret@db.example.com:5432/liberty
LIBERTY_PORT=8000
# LIBERTY_LICENSE_KEY=eyJhbGciOi...
# ANTHROPIC_API_KEY=sk-ant-...
```

Installer le wheel pour tout le système (un seul virtualenv, les CLI disponibles pour tous les utilisateurs) puis écrire le fichier d'unité :

```bash
sudo PIPX_HOME=/opt/pipx PIPX_BIN_DIR=/usr/local/bin pipx install liberty-next
```

```ini title="/etc/systemd/system/liberty-next.service"
[Unit]
Description=Liberty Next
After=network-online.target
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

## Variables d'environnement optionnelles

Tout ce qui suit est optionnel — Liberty démarre sans.

| Variable | Effet |
|---|---|
| `LIBERTY_PORT` | Port TCP d'écoute du serveur (défaut `8000`). |
| `LIBERTY_LICENSE_KEY` | JWT RS256 qui déverrouille les produits éditeur packagés (Nomasx-1, Nomajde, NomaUBL). Voir [Clé de licence](../framework/build/secure/license-key.md). |
| `ANTHROPIC_API_KEY` | Active l'[assistant IA](../framework/ai-assistant.md) intégré. |
| `LIBERTY_OIDC_ENABLED` | Mettre à `true` pour déléguer la connexion à un fournisseur OIDC externe (Keycloak, Auth0, Azure AD, …). |
| `LIBERTY_OIDC_PROVIDER_URL` | URL de l'émetteur du fournisseur OIDC, par exemple `https://auth.example.com/realms/liberty`. |
| `LIBERTY_OIDC_CLIENT_ID` | Identifiant client enregistré auprès du fournisseur OIDC. |
| `LIBERTY_OIDC_CLIENT_SECRET` | Secret client enregistré auprès du fournisseur OIDC. |

Référence complète : [Variables d'environnement](../framework/configuration/environment-variables.md).

---

## Vérifier l'installation

| Contrôle | Comment |
|---|---|
| Serveur en marche | `curl -fsS http://localhost:8000/info` retourne une charge utile JSON avec la version du framework. |
| OpenAPI charge | Ouvrir `http://localhost:8000/docs` — la surface REST complète est navigable. |
| La SPA s'affiche | Ouvrir `http://localhost:8000/` — l'écran de connexion apparaît. |
| L'admin peut se connecter | Se connecter comme `admin` avec `LIBERTY_ADMIN_PASSWORD` — le catalogue des connecteurs est la page d'accueil. |
| Assistant IA *(optionnel)* | Avec `ANTHROPIC_API_KEY` défini, ouvrir `/chat` — le champ de saisie est activé. |
| Licence *(optionnel)* | `liberty-license verify` affiche les produits inclus et la date d'expiration. |

---

## Mise à jour

```bash
pipx upgrade liberty-next
sudo systemctl restart liberty-next      # si exécuté sous systemd
```

Le point d'entrée relance `liberty-admin init-db` à chaque boot — de façon idempotente : les nouvelles tables apportées par une version plus récente sont créées en place, les lignes existantes sont conservées. Aucune étape de migration manuelle.

Pour figer une version précise :

```bash
pipx install --force liberty-next==<version>
```

---

## Résolution des problèmes

| Symptôme | Cause | Correctif |
|---|---|---|
| `LIBERTY_JWT_SECRET is required` au démarrage | La variable d'environnement n'a pas été propagée. | La ré-`export`er dans le même shell, ou l'ajouter à `EnvironmentFile`. |
| `Address already in use` sur le port 8000 | Un autre processus occupe le port. | Définir `LIBERTY_PORT=8001` (ou tout port libre). |
| La connexion indique "invalid credentials" | Le mot de passe initial n'a pas été défini au premier boot, ou a été modifié. | `liberty-admin set-password admin <nouveau>`. |
| Les modifications des TOML de configuration ne sont pas prises en compte | Mauvais `LIBERTY_APPS_DIR`. | `liberty-next` journalise le chemin résolu au démarrage — chercher `apps_dir=`. |
| `liberty-next` introuvable après installation | Le répertoire bin de pipx n'est pas dans le PATH. | Lancer `pipx ensurepath` puis rouvrir le shell, ou appeler directement `~/.local/bin/liberty-next`. |

---

## Pour aller plus loin

- [Docker](./docker.md) — l'alternative basée sur Compose. Choisir la [disposition Full](./docker.md#full) pour les installations de production ou multi-utilisateurs.
- [Traefik](./traefik.md) — placer TLS et un nom d'hôte propre devant le serveur Python (la même recette Traefik fonctionne pour une installation pipx, il suffit de pointer vers `http://127.0.0.1:8000`).
- [Production](./production.md) — checklist de durcissement, OIDC, épinglage du planificateur, fréquence des sauvegardes.
- [Mise à jour](./upgrading.md) — la vision plus large des mises à jour (CLI et Docker côte à côte).
