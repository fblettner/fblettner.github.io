---
title: Serveur Python
description: "Installer Liberty Next sans Docker : installation pipx depuis PyPI, secrets dans un fichier d'environnement, initialisation de PostgreSQL avec liberty-admin init-db, applications sous licence, unité systemd, et liberty-ops pour l'état, les sauvegardes et les mises à jour."
keywords: [Liberty Next, pipx, PyPI, Python, systemd, liberty-ops, liberty-admin, init-db, run-install-jobs, LIBERTY_APPS_DIR, LIBERTY_MASTER_KEY, LIBERTY_JWT_SECRET, PostgreSQL]
---

# Serveur Python

Pour les hôtes où Docker n'est pas possible, Liberty Next s'installe depuis PyPI comme une application Python. L'application web est incluse dans le paquet : rien à compiler. Le serveur PostgreSQL est le vôtre ; `liberty-ops` fait ensuite ce que fait `./liberty` avec Docker — état, contrôles, sauvegardes, mises à jour.

---

## Avant de commencer \{#prerequisites\}

| Besoin | Détail |
|---|---|
| Python 3.12 ou plus récent | `python3 --version`. |
| pipx | `apt install pipx` (Debian, Ubuntu), `brew install pipx` (macOS) ou `python3 -m pip install --user pipx` ; puis `pipx ensurepath`. |
| PostgreSQL 13 ou plus récent | Nécessaire aux applications sous licence et aux tâches Nomaflow. Un serveur local, un service managé ou un serveur existant — avec un rôle autorisé à créer des rôles et des bases. Sans applications sous licence, SQLite suffit pour un essai. |
| Le wheel des applications *(sous licence)* | `liberty_apps-<version>-py3-none-any.whl`, même version que le framework. |
| systemd *(recommandé)* | Pour exécuter le serveur sans surveillance ; `liberty-ops start / stop / logs` le pilotent. |

---

## 1 — Installer le paquet \{#install\}

```bash
pipx install 'liberty-next[all]'
```

Sur un serveur, installer le paquet sous l'utilisateur de service créé à [l'étape 2](#secrets) — `sudo -u liberty pipx install 'liberty-next[all]'` — pour que l'unité systemd le trouve dans le répertoire personnel de cet utilisateur.

`[all]` ajoute les éléments facultatifs : rapports PDF, étape LDAP et migrations de schéma des applications sous licence. pipx place ces commandes dans le `PATH` :

| Commande | Usage |
|---|---|
| `liberty-next` | Démarre le serveur (application web et API sur le même port). |
| `liberty-ops` | Exploitation : état, diagnostic, sauvegarde, restauration, mise à jour, retour arrière — voir [Exploitation](./operations.md#liberty-ops). |
| `liberty-admin` | Initialisation de la base, utilisateurs et rôles, migrations de schéma — voir [CLI](../references/cli.md). |
| `liberty-license` | Vérifie une clé de licence. |
| `liberty-crypto` | Chiffre une valeur en chaîne `ENC:`. |

---

## 2 — Créer l'utilisateur système et les secrets \{#secrets\}

```bash
sudo useradd --system --create-home --shell /usr/sbin/nologin liberty
sudo install -d -m 0750 -o liberty -g liberty /etc/liberty /var/lib/liberty-next /var/lib/liberty-next/apps/config
openssl rand -base64 48 | tr -d '\n=+/'     # deux fois : une valeur par secret
```

```bash title="/etc/liberty/secrets.env  (mode 0640, propriétaire root:liberty)"
LIBERTY_MASTER_KEY=<première valeur aléatoire>
LIBERTY_JWT_SECRET=<seconde valeur aléatoire>

POSTGRES_USER=liberty
POSTGRES_PASSWORD=<mot de passe du rôle liberty>
POSTGRES_HOST=db.example.com
POSTGRES_PORT=5432
POSTGRES_DB=liberty

LIBERTY_APPS_DIR=/var/lib/liberty-next/apps/config
```

| Variable | Rôle |
|---|---|
| `LIBERTY_MASTER_KEY` | Chiffre toutes les valeurs `ENC:` de la configuration. La générer une fois et ne jamais la changer — voir [Architecture](./architecture.md#secrets). |
| `LIBERTY_JWT_SECRET` | Signe les sessions. Au moins 32 caractères. |
| `POSTGRES_*` | Lues une fois par `init-db` pour écrire le pool `default`, avec un mot de passe chiffré par la clé maître. |
| `LIBERTY_APPS_DIR` | Le dossier des fichiers de configuration (connecteurs, écrans, menus…). Le code des applications sous licence se place à côté, dans `../plugins`. `app.toml` et `auth.toml` restent dans `config/` sous le répertoire de travail, `/var/lib/liberty-next` — voir [Architecture](./architecture.md#configuration). |

Chaque commande ci-dessous s'exécute **sous l'utilisateur `liberty`, avec ce fichier chargé** :

```bash
sudo -u liberty bash -c 'set -a; . /etc/liberty/secrets.env; set +a; <commande>'
```

---

## 3 — Préparer PostgreSQL \{#postgres\}

Une fois, avec un superutilisateur PostgreSQL :

```sql
CREATE ROLE liberty LOGIN PASSWORD '<mot de passe du rôle liberty>' CREATEROLE CREATEDB;
CREATE DATABASE liberty OWNER liberty;
```

`CREATEROLE` et `CREATEDB` permettent à l'installation des applications sous licence de créer leurs propres rôles et bases (`nomasx1`, `nomajde`).

Créer ensuite les tables du framework et le premier utilisateur :

```bash
liberty-admin init-db
```

`init-db` écrit le pool `default`, crée les tables du framework et le superutilisateur `admin`, et affiche une seule fois son mot de passe. Relancée, la commande ne change rien. Pour choisir soi-même le mot de passe : `liberty-admin init-db --password-env ADMIN_PASSWORD`.

---

## 4 — Ajouter les applications sous licence *(sous licence)* \{#apps\}

```bash
pipx inject liberty-next ./liberty_apps-<version>-py3-none-any.whl
liberty-apps install --target "$LIBERTY_APPS_DIR"
liberty-admin run-install-jobs
```

1. `pipx inject` ajoute le paquet des applications dans le même environnement que le framework.
2. `liberty-apps install` écrit les fichiers de configuration dans `$LIBERTY_APPS_DIR` et le code Python dans `../plugins` à côté. Sur un dossier existant, la fusion se fait entité par entité et conserve les modifications locales — voir [Applications sous licence](./deploy-prebuilt-apps.md#merge).
3. `run-install-jobs` lance dans l'ordre les tâches d'installation : `deploy-databases` (rôles et bases des applications, puis schéma Nomasx-1) et `nomasx1-import-reference` (données de référence). Une tâche déjà terminée est ignorée ; `--force` relance tout.

---

## 5 — Exécuter avec systemd \{#systemd\}

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
ExecStart=/home/liberty/.local/bin/liberty-next
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ReadWritePaths=/var/lib/liberty-next

[Install]
WantedBy=multi-user.target
```

Adapter `ExecStart` au chemin que donne `which liberty-next` pour l'utilisateur `liberty`. Puis :

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now liberty-next
liberty-ops status
```

`liberty-ops` pilote l'unité nommée `liberty-next` ; définir `LIBERTY_SERVICE` si la vôtre porte un autre nom.

Le serveur écoute sur `http://<hôte>:8000/` (le port de **Paramètres → App**). Se connecter en **`admin`**, puis coller la clé de licence dans **Paramètres → App → License**. Pour le HTTPS, placer devant un proxy inverse au choix, en relayant aussi le trafic WebSocket (`/socket.io`).

---

## Au quotidien \{#day-to-day\}

| Tâche | Commande |
|---|---|
| État, versions, migrations en attente | `liberty-ops status` |
| Trouver ce qui ne va pas | `liberty-ops doctor` |
| Démarrer, arrêter, redémarrer, suivre le journal | `liberty-ops start` · `stop` · `restart` · `logs -f` |
| Sauvegarder | `liberty-ops backup --keep 30` |
| Mettre à jour | `liberty-ops upgrade` — voir [Mise à jour et retour arrière](./upgrading.md#python) |
| Nouveau mot de passe pour admin | `liberty-admin set-password admin` (en affiche un aléatoire) |

Les lancer sous l'utilisateur `liberty`, secrets chargés, comme à [l'étape 2](#secrets). La liste complète se trouve sur [Exploitation](./operations.md#liberty-ops).
