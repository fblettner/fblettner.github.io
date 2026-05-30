---
title: Déployer les applications prêtes à l'emploi
description: "Mettre en place les applications produit NOMANA-IT sur une installation Liberty — NomaUBL (service Java distinct), jobs livrés Nomasx-1 / Nomajde / Nomaflow (réunis dans un unique wheel liberty-apps). Le wheel est matérialisé par install-apps.sh à l'aide d'un conteneur jetable python:3.12-slim — aucun Python ni pip requis sur l'hôte — puis monté dans liberty-next via l'overlay docker-compose.apps.yml."
keywords: [Liberty Framework, applications prêtes à l'emploi, déploiement, installation, NomaUBL, Nomasx-1, Nomajde, Nomaflow, liberty-apps, wheel, install-apps.sh, --apps, --license-key, APPS_HOST_PATH, docker-compose.apps.yml, COMPOSE_FILE, conteneur jetable, deploy-databases, init-schema, nomasx1-import-reference]
---

# Déployer les applications prêtes à l'emploi

Trois applications NOMANA-IT sont conçues pour être **déployées par-dessus une installation Liberty**, et non construites depuis zéro. Chacune est livrée sous forme de bundle prêt à l'emploi que l'opérateur dépose en place et raccorde via une ou deux commandes.

| Application | Forme | Mode d'arrivée sur l'installation |
|---|---|---|
| **NomaUBL** | Service Java autonome (son propre JAR + wrapper + base de données). | Ce n'est pas un plugin Liberty — il dispose de sa propre procédure d'installation. Liberty peut éventuellement s'y relier par un élément de menu. |
| **Nomasx-1** + **Nomajde** | Plugins Liberty (Python sous `plugins/nomasx1`) + une configuration TOML complète (`screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, etc.). | Livrés sous la forme d'un unique **wheel `liberty-apps`**. `install-apps.sh` le matérialise dans `./apps/` et raccorde l'overlay `docker-compose.apps.yml`. |
| **Nomaflow** | Intégré à Liberty Next (l'ordonnanceur et le moteur de workflow du framework). Les **jobs livrés** qui pilotent l'installation et le rafraîchissement de Nomasx-1 se trouvent dans le `plugins/nomaflow/jobs.toml` du même wheel. | Fourni avec le wheel — aucune installation séparée. |

Cette page décrit chaque chemin de déploiement. L'ordre de lecture : NomaUBL en premier (si nécessaire), puis l'installation du wheel, puis l'exécution des jobs livrés pour matérialiser les bases applicatives.

---

## NomaUBL — service Java distinct

NomaUBL **n'est pas un plugin Liberty**. Il s'exécute comme son propre processus JVM, avec sa propre base de données (Oracle ou PostgreSQL), sa propre interface web sur un port séparé, son propre wrapper `nomaubl.sh` / `nomaubl.cmd`. L'intégration avec Liberty se limite au niveau du **menu** : un opérateur Liberty peut ajouter un élément de menu qui ouvre l'interface NomaUBL dans un nouvel onglet.

| Page | Contenu |
|---|---|
| [NomaUBL → Installation → Vue d'ensemble](../../nomaubl/installation/overview.md) | Les 5 étapes d'installation — prérequis, installation du JAR, configuration via l'interface Settings, supervision du service, mise à niveau. |
| [NomaUBL → Installation → Prérequis](../../nomaubl/installation/requirements.md) | JDK 17, Oracle ou PostgreSQL, ports, reverse proxy optionnel. |
| [NomaUBL → Installation → Mise à niveau](../../nomaubl/installation/upgrade.md) | Mise à niveau en une commande, avec rollback. |

La suite de cette page se concentre sur les **plugins Liberty** — Nomasx-1, Nomajde et les jobs Nomaflow livrés.

---

## Le wheel — ce qu'il transporte

`liberty_apps-<version>-py3-none-any.whl` est un wheel Python publié par NOMANA-IT. Il embarque une petite CLI (`liberty-apps install --target DIR`) et un répertoire interne `_payload/` :

| Contenu du wheel | Description | Emplacement final |
|---|---|---|
| **`_payload/config/*.toml`** | Configuration applicative complète — `screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, `charts.toml`, `connectors.toml`, `theme.toml`. | `./apps/config/<fichier>.toml` sur l'hôte → `/apps/config/<fichier>.toml` dans le conteneur liberty-next. |
| **`_payload/plugins/nomasx1/`** | Paquet Python — collecteur de sécurité, collecteur de licences, détecteur de SoD, lecteur de piste d'audit, rafraîchisseur de vues matérialisées, amorçage de schéma. Callables référencés depuis `jobs.toml`. | `./apps/plugins/nomasx1/` sur l'hôte → `/apps/plugins/nomasx1/` dans le conteneur. |
| **`_payload/plugins/nomaflow/jobs.toml`** | Catalogue de jobs Nomaflow livrés — jobs d'installation, synchronisations quotidiennes, rafraîchissements hebdomadaires, jobs de réinitialisation ponctuels. | `./apps/plugins/nomaflow/jobs.toml` → `/apps/plugins/nomaflow/jobs.toml`. |
| **`_payload/config/nomasx1-reference.tar.gz`** | Lignes de référence sélectionnées (baseline SoD, listes personnalisées). Chargées par le job `nomasx1-import-reference`. | Même emplacement — lu par le job d'import. |

---

## Installation en une commande (hôte neuf)

```bash
./install.sh full \
    --apps ./liberty_apps-7.0.1-py3-none-any.whl \
    --license-key <votre-jwt-rs256>
```

Tout est fait — pile de base, applications licenciées et clé de licence en une seule commande.

`install.sh` démarre d'abord la disposition de base (afin que le bandeau d'identifiants reste visible même en cas d'échec de l'étape applicative), puis enchaîne sur `install-apps.sh` avec le wheel et la clé de licence.

---

## Installation en deux temps — base d'abord, applications ensuite

```bash
./install.sh full                                                            # pile de base
./install-apps.sh ./liberty_apps-7.0.1-py3-none-any.whl --license-key <jwt>  # overlay applicatif
```

C'est le chemin retenu par la plupart des installations — les applications sont déposées après que l'opérateur a vérifié le bon fonctionnement de la pile de base.

### Ce que fait `install-apps.sh`

| Étape | Action |
|---|---|
| **1. Récupérer le wheel** (si une URL est fournie) | `curl -fsSL <url>` vers un répertoire temporaire ; un chemin local est utilisé directement. |
| **2. Matérialiser le wheel dans `./apps/`** | Lance un conteneur jetable `python:3.12-slim` qui monte le wheel en lecture seule et la destination en écriture, `pip install` le wheel dans un préfixe temporaire, puis invoque la CLI `liberty-apps install --target /dest/config` embarquée dans le wheel, qui copie `config/` et `plugins/` vers la destination. Rien lié à Python ne subsiste sur l'hôte. |
| **3. Mettre à jour `.env`** | Définit `APPS_HOST_PATH=<chemin absolu vers ./apps>`, ajoute `docker-compose.apps.yml` à `COMPOSE_FILE` (séparé par deux-points), définit `LIBERTY_LICENSE_KEY=<jwt>` si fourni. |
| **4. Redémarrer la pile** | `docker compose up -d` (sans `-f` — `COMPOSE_FILE` prend en compte chaque overlay). Liberty-next récupère le nouveau bind mount. |
| **5. Attendre le healthcheck et afficher le résumé** | Chemin, statut de la clé de licence, URL de vérification. |

L'approche par conteneur jetable garantit que **l'hôte n'a besoin ni de Python, ni de pip, ni de virtualenv** — seulement de Docker. C'est intentionnel : l'hôte du framework ne doit pas exiger une chaîne d'outils Python pour installer les applications.

### Drapeaux de `install-apps.sh`

| Drapeau | Rôle |
|---|---|
| `<wheel-path-or-URL>` *(positionnel)* | `.whl` local ou URL `http://` / `https://`. Requis. |
| `--license-key <jwt>` | Définit `LIBERTY_LICENSE_KEY` dans `.env`. Sans cette clé, le framework s'exécute en **mode restreint** — les connecteurs licenciés marqués `licensed = true` dans le `connectors.toml` des applications ne sont pas chargés. |
| `--target <DIR>` | Destination sur l'hôte. Valeur par défaut : `./apps`. Le répertoire est créé s'il n'existe pas. |
| `--layout <full\|light>` | Disposition de base dont le compose sert de référence pour raccorder `COMPOSE_FILE`. Valeur par défaut : `full`. L'overlay applicatif fonctionne avec les deux. |
| `--force-config` | Écrase les TOML modifiés par l'opérateur dans `./apps/config/` avec les versions éditeur du wheel. Le comportement par défaut préserve les modifications opérateur d'une réinstallation à l'autre. |

### L'overlay `docker-compose.apps.yml`

Une dizaine de lignes :

```yaml title="docker-compose.apps.yml"
services:
  liberty-next:
    volumes:
      - ${APPS_HOST_PATH:?APPS_HOST_PATH not set — see install-apps.sh}:/apps:ro
    environment:
      LIBERTY_APPS_DIR: /apps/config
```

Le contrat tient en deux gestes : monter `./apps` sur `/apps:ro`, et rediriger la lecture des TOML vers `/apps/config`.

L'overlay peut être lancé directement sans `install-apps.sh` si `APPS_HOST_PATH` est déjà défini dans `.env` et que le wheel a été matérialisé par un autre moyen :

```bash
docker compose -f docker-compose.full.yml -f docker-compose.apps.yml up -d
```

Après ce démarrage ponctuel, définir `COMPOSE_FILE=docker-compose.full.yml:docker-compose.apps.yml` dans `.env` pour que les commandes `docker compose` suivantes (sans `-f`) conservent l'overlay actif.

### Disposition produite

Après `install-apps.sh` :

```text
release/
├── .env                                  ← APPS_HOST_PATH + COMPOSE_FILE mis à jour
├── apps/                                  ← cible du bind mount
│   ├── config/
│   │   ├── connectors.toml
│   │   ├── dictionary.toml
│   │   ├── menus.toml
│   │   ├── screens.toml
│   │   ├── charts.toml
│   │   ├── dashboards.toml
│   │   ├── theme.toml
│   │   └── nomasx1-reference.tar.gz
│   └── plugins/
│       ├── nomasx1/                       ← paquet Python
│       └── nomaflow/
│           └── jobs.toml                  ← catalogue des jobs livrés
├── docker-compose.full.yml
├── docker-compose.apps.yml
└── ...
```

Dans le conteneur liberty-next, `./apps/` se retrouve sur `/apps:ro`. `LIBERTY_APPS_DIR=/apps/config` redirige chaque lecture TOML par section vers ce répertoire.

### Sans clé de licence

Le framework démarre tout de même — il s'exécute simplement en **mode restreint** (les connecteurs marqués `licensed = true` ne sont pas chargés). Utile pour tester les parties ouvertes des applications. La clé peut être ajoutée plus tard :

```bash
./install-apps.sh ./liberty_apps-7.0.1.whl --license-key <jwt>
```

Idempotent — seule la ligne du `.env` est mise à jour, le wheel n'est pas re-matérialisé.

---

## Vérifier l'installation

| Contrôle | Méthode |
|---|---|
| `liberty-next` est sain | `docker compose ps liberty-next` affiche `healthy`. |
| Les applications sont chargées | `curl http://localhost/info` montre que `screens.apps` inclut `nomasx1` et `nomajde`. |
| La licence est active | Même réponse : `license.mode` vaut `full` (et non `restricted`). |
| L'application SPA expose les applications | Ouvrir `http://localhost/` — le sélecteur d'applications liste *Nomasx-1* et *Nomajde*. |
| Les jobs livrés sont dans le catalogue | Ouvrir *Nomaflow → Catalogue* — `deploy-databases`, `nomasx1-init-db`, `nomasx1-security-1`, etc. apparaissent (tous `enabled = false` tant qu'ils ne sont pas activés). |

---

## Provisionner les bases applicatives — le job `deploy-databases`

L'installation du wheel a déposé la configuration et le code des plugins. L'étape suivante consiste à **créer les bases applicatives** dans lesquelles Nomasx-1 et Nomajde écrivent — `nomasx1` (sécurité, licences, SoD, audit) et `nomajde` (tables de contrôle et de dictionnaire JDE répliquées).

Le job `deploy-databases` livré dans `jobs.toml` réalise tout en une seule exécution :

| Étape | Action |
|---|---|
| **1. `create-roles-and-databases`** | Crée les rôles applicatifs de connexion et les bases Postgres par cible sur le pool `default` du framework (le Postgres livré). Idempotent — ignore ce qui existe déjà. |
| **2. `init-schema-nomasx1`** | Exécute l'amorçage du schéma Nomasx-1 sur la base `nomasx1` fraîchement créée. Idempotent. |

À lancer une fois depuis *Nomaflow → Catalogue → `deploy-databases` → ▶ Run now*. Le job est `enabled = false` par défaut dans le bundle — l'ordonnancement n'est pas à activer (il n'en possède aucun), il suffit de l'exécuter une fois.

| Détail | Description |
|---|---|
| **Job de premier déploiement** | À exécuter **une fois** après l'installation du wheel. Une nouvelle exécution sur une installation existante est sûre (idempotente) mais sans intérêt. |
| **Droits BDD** | Le pool `default` doit atteindre un serveur Postgres disposant des droits `CREATE DATABASE` et `CREATE ROLE`. Dans la disposition Full livrée, le pool `default` pointe vers le Postgres embarqué et s'exécute sous l'utilisateur `liberty` (superutilisateur via le `POSTGRES_USER` livré). |
| **Sortie** | La page de détail de l'exécution liste chaque rôle et base créés, ainsi que le journal d'amorçage du schéma table par table. |

Pour la référence complète du job (paramètres, invocations alternatives, reprise), voir [Nomaflow → Bundled jobs → deploy-databases](../nomaflow/bundled-jobs.md#deploy-databases).

### Raccorder Nomasx-1 à une source JD Edwards

Nomasx-1 lit les données de sécurité et de licences JDE via un connecteur JDBC nommé `jdedwards`. Le configurer une fois via *Settings → Connectors → `jdedwards`* :

| Paramètre | Valeur |
|---|---|
| **Pool** | Un pool `jdedwards` raccordé à la base JDE (Oracle dans la majorité des installations). |
| **Identifiants** | Un compte en lecture seule avec `SELECT` sur les tables F* lues par Nomasx-1. |
| **URL par environnement** | Une même installation peut basculer entre environnements JDE en modifiant l'URL JDBC — le framework recharge à l'enregistrement. |

Une fois `jdedwards` joignable, exécuter les jobs de collecte (`nomasx1-security-1`, `nomasx1-license-1`, etc.) pour peupler les tables Nomasx-1 — voir [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) pour le catalogue complet.

### Charger le bundle de référence

Nomasx-1 est livré avec un ensemble sélectionné de **lignes de référence** — baseline SoD, paramètres, listes personnalisées. Elles sont chargées par un job dédié :

```text title="Nomaflow → Catalogue → nomasx1-import-reference → ▶ Run now"
```

Le job lit `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz` (qui se trouve à `/apps/config/nomasx1-reference.tar.gz` dans le conteneur) et insère les lignes dans les tables correspondantes. Réexécution sans risque — définir `replace = true` dans *Run with parameters* pour un cycle destructif TRUNCATE + INSERT.

Voir [Bundled jobs → nomasx1-import-reference](../nomaflow/bundled-jobs.md#nomasx1-import-reference) pour la référence des paramètres.

---

## Persistance, redémarrage, sauvegarde — qu'est-ce qui résiste ?

| Événement | Contenu de `./apps/` | Données BDD / pgadmin / portainer |
|---|---|---|
| `docker compose restart` | conservé — le bind mount se rattache | conservé — les volumes nommés sont intacts |
| Redémarrage de l'hôte | conservé — `restart: unless-stopped` relance tout, le mount se rattache | conservé |
| `docker compose down` (sans `-v`) | conservé — un bind mount n'est pas un volume Docker, `-v` ne le touche pas | conservé |
| `docker compose down -v` | conservé — `-v` ne supprime que les volumes nommés | **EFFACÉ** |
| `./install.sh full --reset` | conservé — seuls les volumes nommés sont supprimés | **EFFACÉ** |
| `./backup.sh` | **inclus** — `backup.sh` lit `APPS_HOST_PATH` depuis `.env` et archive `./apps/` aux côtés des volumes nommés | inclus (`pg-data.tar.gz`, etc.) |

Un répertoire de sauvegarde après `./backup.sh` contient :

```text
backups/2026-05-30_170000/
  liberty-config.tar.gz       — configuration du framework (TOML amorcés et édités par l'opérateur via l'interface)
  liberty-apps.tar.gz         — votre bind mount applicatif (quand APPS_HOST_PATH est défini)
  pg-data.tar.gz              — fichiers de données Postgres
  pgadmin-data.tar.gz         — état pgAdmin
  portainer-data.tar.gz       — état Portainer
  .env.snapshot               — variables d'environnement et secrets (mode 0600)
  docker-compose.*.yml        — fichiers compose en vigueur
```

---

## Mettre à jour les applications par la suite

Déposer un nouveau wheel et relancer :

```bash
./install-apps.sh ./liberty_apps-7.0.2-py3-none-any.whl
docker compose restart liberty-next       # prend en compte les nouveaux TOML
```

Les TOML modifiés par l'opérateur dans `./apps/config/` sont **préservés par défaut** — la CLI `liberty-apps install` embarquée dans le wheel n'écrase qu'avec `--force-config`. Si `hot_reload = true` dans `app.toml`, le redémarrage n'est même pas nécessaire — les éditions de fichiers sont prises en compte à chaud.

Pour les mises à jour de schéma (release notes mentionnant de nouvelles tables), exécuter *Nomaflow → Catalogue → `nomasx1-upgrade-schema-1`* après le redémarrage. Idempotent.

---

## Un second déploiement Nomasx-1 en parallèle

Pour l'hébergement multi-clients — deux instances Nomasx-1 indépendantes raccordées à deux sources JDE différentes sur le même serveur Liberty — le job livré `nomasx1-init-db` clone la configuration de l'application `nomasx1` sous un nouveau nom (par exemple `nomasx1b`) et provisionne une base parallèle.

| Étape | Description |
|---|---|
| **1. Exécuter `nomasx1-init-db`** | Clone la configuration de l'application `nomasx1` → `nomasx1b`, crée le pool et la base `nomasx1b`, puis exécute l'amorçage du schéma. Le job refuse de s'exécuter si `nomasx1b` existe déjà. |
| **2. Raccorder la seconde source JDE** | Ajouter un connecteur / pool `jdedwards2` pointant vers la seconde instance JDE. |
| **3. Exécuter les jobs de collecte par instance Nomasx-1** | Les jobs de collecte acceptent un paramètre `target_connector`. Les exécuter une fois par instance (`nomasx1` et `nomasx1b`). |

Voir [Nomaflow → Bundled jobs → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db) pour la forme des paramètres et la sémantique du clonage.

---

## Wheel éditeur vs écran Packages

| Canal | Contenu | Cadence |
|---|---|---|
| **`install-apps.sh` + le wheel** *(cette page)* | Le bundle licencié **complet** — chaque TOML, chaque plugin, le tarball de référence. Propriété éditeur. | Par release. |
| **Écran Settings → Package** *(voir [Packages](../framework/build/packages.md))* | Une **tranche** de configuration — écrans, éléments de menu, dashboards sélectionnés et leur fermeture de dépendances. Propriété opérateur. | Par changement. |

Utiliser le wheel pour la livraison éditeur. Utiliser l'écran Package pour les tranches par client, les promotions staging → prod et les mises à niveau au niveau écran.

Les deux canaux coexistent — `install-apps.sh` préserve par défaut les TOML modifiés par l'opérateur, donc les mises à niveau du wheel et les éditions via l'écran Package ne s'opposent pas.

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| `install-apps.sh` exécuté avant que `install.sh` n'ait démarré la pile de base. | Le script s'interrompt avec `.env not found`. | Exécuter d'abord `./install.sh light` ou `./install.sh full`. |
| `-f docker-compose.full.yml` ajouté après `install-apps.sh`. | Les TOML disparaissent au prochain `up -d` — l'overlay applicatif a été retiré. | Toujours exécuter `docker compose <cmd>` sans `-f` après l'installation. La source de vérité est `COMPOSE_FILE` dans `.env`. |
| L'installation du wheel a réussi mais Liberty ne voit pas les nouveaux écrans. | `curl /info` affiche `screens.apps: []`. | Le framework n'a pas été rechargé — `docker compose restart liberty-next` ou cliquer sur *Settings → Reload*. |
| Le job `deploy-databases` échoue avec `permission denied for database`. | Le pool `default` ne peut pas créer de bases ni de rôles. | L'utilisateur `liberty` du Postgres livré est créé en superutilisateur — vérifier via `docker compose exec pg psql -U liberty -c '\du'`. En cas de bascule vers un compte non superutilisateur, accorder temporairement `SUPERUSER`. |
| Connexion refusée depuis un job de collecte Nomasx-1. | Le connecteur `jdedwards` n'est pas configuré ou les identifiants sont incorrects. | *Settings → Connectors → jdedwards* → corriger l'URL JDBC et les identifiants → tester depuis l'interface avant de relancer le job. |
| `nomasx1-import-reference` se termine en erreur avec *« target application not found »*. | L'application cible (par défaut `nomasx1`) n'est pas créée dans *Settings → Applications*. | Ajouter d'abord l'application depuis l'interface (le contrôle préalable refuse de démarrer sinon). |
| Wheel mis à niveau mais les jobs n'affichent pas les nouveaux ordonnancements. | Nomaflow met `jobs.toml` en cache. | `docker compose restart liberty-next` (ou cliquer sur *Settings → Reload*). |
| `./apps/config/connectors.toml` écrasé lors de la mise à niveau du wheel. | Les éditions client sont perdues. | Ne passer `--force-config` QUE pour récupérer les valeurs par défaut éditeur. Le comportement par défaut préserve les éditions opérateur. |
| `--apps URL` échoue avec une erreur de téléchargement. | L'URL du wheel exige une authentification. | Télécharger le wheel au préalable et fournir le chemin local : `./install-apps.sh ./liberty_apps-X.Y.Z.whl`. |

---

## Et ensuite

- [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) — chaque job de `liberty-apps/plugins/nomaflow/jobs.toml`, quand l'exécuter, ses paramètres.
- [Packages](../framework/build/packages.md) — le canal de déploiement par tranche pour les écrans, éléments de menu et dashboards.
- [Installation → Mise à niveau](./upgrading.md) — mise à niveau du framework Liberty lui-même (en dessous des applications).
- [Installation → Production](./production.md) — TLS et durcissement par-dessus l'installation.
