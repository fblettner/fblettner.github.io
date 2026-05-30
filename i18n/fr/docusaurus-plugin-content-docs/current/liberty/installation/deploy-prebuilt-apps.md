---
title: Déployer les applications prêtes à l'emploi
description: "Installer les trois applications produit NOMANA-IT sur une installation Liberty — NomaUBL (service Java distinct), Nomasx-1 / Nomajde (installeur wheel liberty-apps), Nomaflow (livré avec Nomasx-1). Décrit le rôle de chacun, son emplacement sur disque, la commande d'installation en une ligne et le job de premier déploiement qui provisionne les bases de données."
keywords: [Liberty Framework, applications prêtes à l'emploi, déploiement, installation, NomaUBL, Nomasx-1, Nomajde, Nomaflow, liberty-apps, wheel, payload, plugins, deploy-databases, init-schema, préchargement]
---

# Déployer les applications prêtes à l'emploi

Trois applications NOMANA-IT sont conçues pour être **déployées par-dessus une installation Liberty**, et non construites depuis zéro. Chacune est livrée sous forme de bundle prêt à l'emploi que l'opérateur dépose en place et raccorde via une ou deux commandes.

| Application | Forme | Mode d'installation |
|---|---|---|
| **NomaUBL** | Service Java autonome (son propre JAR + wrapper + base de données). | Ce n'est pas un plugin Liberty — il a sa propre procédure d'installation. Liberty peut éventuellement s'y raccorder pour une navigation unifiée. |
| **Nomasx-1** + **Nomajde** | Plugins Liberty (code Python dans `plugins/nomasx1`) + une configuration TOML complète (`screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, etc.). | Livré sous forme d'un unique **wheel `liberty-apps`**. `pip install` sur l'hôte du framework, puis `liberty-apps install`. |
| **Nomaflow** | Intégré à Liberty Next (l'ordonnanceur et le moteur de workflow du framework). Les **jobs livrés** qui pilotent l'installation et le rafraîchissement de Nomasx-1 sont embarqués dans le `plugins/nomaflow/jobs.toml` du wheel **`liberty-apps`**. | Fourni avec le même wheel — aucune installation séparée. |

Cette page décrit chaque chemin de déploiement. L'ordre de lecture est le suivant : NomaUBL en premier (si nécessaire), puis l'installation du wheel Nomasx-1 / Nomajde, puis l'exécution des jobs livrés pour matérialiser les bases de données.

---

## NomaUBL — service Java distinct

NomaUBL **n'est pas un plugin Liberty**. Il s'exécute comme son propre processus JVM, avec sa propre base de données (Oracle ou PostgreSQL), sa propre interface web sur un port séparé, son propre wrapper `nomaubl.sh` / `nomaubl.cmd`. L'intégration avec Liberty se fait uniquement au niveau du **menu** : un opérateur Liberty peut ajouter un élément de menu qui ouvre l'interface NomaUBL dans un nouvel onglet.

Procédure d'installation : voir la documentation dédiée à NomaUBL.

| Page | Contenu |
|---|---|
| [NomaUBL → Installation → Vue d'ensemble](../../nomaubl/installation/overview.md) | Les 5 étapes d'installation — prérequis, installation du JAR, configuration via l'interface Settings, supervision du service, mise à niveau. |
| [NomaUBL → Installation → Prérequis](../../nomaubl/installation/requirements.md) | JDK 17, Oracle ou PostgreSQL, ports, reverse proxy optionnel. |
| [NomaUBL → Installation → Mise à niveau](../../nomaubl/installation/upgrade.md) | Mise à niveau en une commande, avec rollback. |

La suite de cette page se concentre sur les **plugins Liberty** — Nomasx-1, Nomajde et le bundle de jobs Nomaflow.

---

## Nomasx-1 / Nomajde / Nomaflow — le wheel `liberty-apps`

Le wheel `liberty-apps` embarque tout ce dont Liberty a besoin pour exploiter les trois applications intégrées :

| Contenu | Description | Emplacement cible |
|---|---|---|
| **`config/*.toml`** | La configuration applicative complète — `screens.toml`, `menus.toml`, `dashboards.toml`, `dictionary.toml`, `charts.toml`, `connectors.toml`, `theme.toml`. | `${LIBERTY_APPS_DIR}/*.toml` — le répertoire que le framework parcourt déjà. |
| **`plugins/nomasx1/`** | Paquet Python — le collecteur de sécurité, le collecteur de licences, le détecteur de SoD, le lecteur de piste d'audit, le rafraîchisseur de vues matérialisées, l'amorçage de schéma. Callables référencés depuis `jobs.toml`. | `${LIBERTY_APPS_DIR}/../plugins/nomasx1/` — le répertoire `plugins` du framework (frère de `config/`). |
| **`plugins/nomaflow/jobs.toml`** | Le catalogue de jobs Nomaflow livrés — jobs d'installation, synchronisations quotidiennes, rafraîchissements hebdomadaires, jobs de réinitialisation ponctuels. | `${LIBERTY_APPS_DIR}/../plugins/nomaflow/jobs.toml` — pris en compte par Nomaflow au prochain rechargement. |
| **`config/nomasx1-reference.tar.gz`** | Lignes de référence sélectionnées (baseline SoD, listes personnalisées). Chargées par le job `nomasx1-import-reference`. | Même emplacement — lu par le job d'import. |

### Prérequis sur l'hôte cible

| Élément | Raison |
|---|---|
| **Liberty Next est installé et en cours d'exécution** | Le wheel se matérialise par-dessus le framework ; il n'installe pas le framework lui-même. Voir [Installation → Serveur Python](./python-server.md) ou [Docker](./docker.md). |
| **`pip` est disponible dans le venv du framework** | Le wheel s'installe via pip. Dans les installations Docker, le wheel est généralement intégré à l'image à la construction. |
| **`LIBERTY_APPS_DIR` est défini** | Pointe vers le répertoire `config/` du framework. L'installeur du wheel matérialise le payload dans ce répertoire et dans son frère `../plugins/`. |
| **Un serveur PostgreSQL accessible depuis le pool `default` du framework** | Le job de déploiement crée les bases applicatives (`nomasx1`, `nomajde`) sur ce serveur. Requiert les droits `CREATE DATABASE` / `CREATE ROLE` — typiquement le superutilisateur `postgres` ou un équivalent. |

### Installer le wheel

Réceptionner le wheel auprès de NOMANA-IT (par exemple `liberty_apps-0.2.0-py3-none-any.whl`) et l'installer dans l'environnement du framework.

```bash title="Installation source Python"
# dans le venv du framework
pip install /path/to/liberty_apps-0.2.0-py3-none-any.whl
```

```bash title="Installation Docker — intégration à l'image"
# À ajouter au Dockerfile du framework (ou à une image dérivée) :
COPY liberty_apps-0.2.0-py3-none-any.whl /tmp/
RUN pip install /tmp/liberty_apps-0.2.0-py3-none-any.whl && rm /tmp/liberty_apps-0.2.0-py3-none-any.whl
```

Vérifier l'installation :

```bash
liberty-apps --version
# liberty-apps 0.2.0
```

### Matérialiser le payload

Le wheel embarque chaque TOML de configuration et les plugins Python dans un répertoire privé `_payload/`. La commande `liberty-apps install` **copie** ces fichiers dans le `LIBERTY_APPS_DIR` de l'installation cible et dans son répertoire frère `../plugins/`.

```bash
# La cible est le répertoire config du framework — les plugins arrivent dans son frère.
liberty-apps install --target $LIBERTY_APPS_DIR
```

La sortie liste chaque fichier :

```text
liberty-apps 0.2.0: materializing payload
  config  → /opt/liberty-apps/config
  plugins → /opt/liberty-apps/plugins
  copy      connectors.toml → /opt/liberty-apps/config/connectors.toml
  copy      dictionary.toml → /opt/liberty-apps/config/dictionary.toml
  copy      menus.toml      → /opt/liberty-apps/config/menus.toml
  copy      screens.toml    → /opt/liberty-apps/config/screens.toml
  copy      charts.toml     → /opt/liberty-apps/config/charts.toml
  copy      dashboards.toml → /opt/liberty-apps/config/dashboards.toml
  copy      theme.toml      → /opt/liberty-apps/config/theme.toml
  copy      nomasx1-reference.tar.gz → /opt/liberty-apps/config/nomasx1-reference.tar.gz
  refresh   plugin nomaflow → /opt/liberty-apps/plugins/nomaflow
  refresh   plugin nomasx1  → /opt/liberty-apps/plugins/nomasx1
done: 8 config file(s) copied, 0 preserved, 2 plugin package(s) refreshed.

next: point liberty-next at this config dir
  export LIBERTY_APPS_DIR=/opt/liberty-apps/config
then create + initialize the app databases (deploy job / liberty-apps initdb).
```

Deux drapeaux d'installation à connaître :

| Drapeau | Effet |
|---|---|
| **`--dry-run`** | Affiche les modifications prévues sans rien écrire. À exécuter en premier sur une installation existante. |
| **`--force-config`** | Écrase les fichiers `*.toml` existants. Par défaut, l'installeur les **préserve** afin que les modifications enregistrées par l'opérateur via l'interface survivent à une mise à niveau du wheel. À utiliser avec précaution — typiquement uniquement sur une installation neuve ou après avoir exporté vos modifications via [Settings → Package](../framework/build/packages.md). |

Le code des plugins est **toujours rafraîchi** — aucun `--force` n'est requis. L'installeur considère que le code des plugins appartient à l'éditeur et remplace intégralement le répertoire.

### Recharger le framework

Après la matérialisation, Liberty dispose des nouveaux TOML sur disque et des nouveaux paquets Python dans son répertoire de plugins, mais le processus en cours conserve l'ancienne configuration en mémoire. Recharger :

```bash
curl -X POST -H "Authorization: Bearer <superuser-token>" \
     https://<liberty-host>/admin/reload
```

Ou depuis l'interface : bouton *Settings → Reload*.

Une fois rechargé, les logs de démarrage du framework affichent les applications chargées :

```text
INFO  liberty.config menus loaded for apps: nomasx1, nomajde
INFO  liberty.config screens loaded for apps: nomasx1, nomajde
INFO  liberty.plugins importable from /opt/liberty-apps/plugins
```

Le sélecteur d'applications de la barre supérieure affiche désormais *Nomasx-1* et *Nomajde*.

---

## Provisionner les bases de données — le job `deploy-databases`

L'installation du wheel a déposé la configuration et le code des plugins. L'étape suivante consiste à **créer les bases applicatives** dans lesquelles Nomasx-1 et Nomajde écrivent — `nomasx1` (données de sécurité, licences, SoD, audit) et `nomajde` (tables de contrôle et de dictionnaire JDE répliquées).

Le job `deploy-databases` livré dans `jobs.toml` réalise tout en une seule exécution :

| Étape | Action |
|---|---|
| **1. `create-roles-and-databases`** | Crée les rôles applicatifs de connexion et les bases cibles sur le serveur PostgreSQL du pool `default` (l'hôte de base de données du framework lui-même). Idempotent — ignore les rôles et bases déjà présents. |
| **2. `init-schema-nomasx1`** | Exécute l'amorçage du schéma Nomasx-1 sur la base `nomasx1` fraîchement créée — toutes les tables et vues matérialisées issues de `models.py`. Idempotent. |

Lancer depuis *Nomaflow → Catalogue → `deploy-databases` → ▶ Run now*. Le job est `enabled = false` par défaut dans le bundle — ne pas activer l'ordonnancement (il n'en possède aucun), il suffit de l'exécuter une fois.

| Détail | Description |
|---|---|
| **Job de premier déploiement** | À exécuter **une fois** après l'installation du wheel. Une nouvelle exécution sur une installation existante est sûre (idempotente) mais sans intérêt. |
| **Droits BDD** | Le pool `default` du framework doit atteindre un serveur Postgres disposant des droits `CREATE DATABASE` et `CREATE ROLE`. Le schéma recommandé est de pointer `default` vers un superutilisateur Postgres `postgres` pour l'exécution du déploiement, puis de le rebasculer ensuite vers un utilisateur moins privilégié. |
| **Sortie** | La page de détail de l'exécution liste chaque rôle et base créés, ainsi que le journal d'amorçage du schéma table par table. |

Pour le détail complet du job (paramètres, invocations alternatives, reprise), voir [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md#deploy-databases).

### Raccorder Nomasx-1 à une source JD Edwards

Nomasx-1 lit les données de sécurité et de licences JDE via un connecteur JDBC nommé `jdedwards`. Le configurer une fois via *Settings → Connectors → `jdedwards`* :

| Paramètre | Valeur |
|---|---|
| **Pool** | Un pool `jdedwards` raccordé à la base JDE (Oracle dans la majorité des installations). |
| **Identifiants** | Un compte en lecture seule avec `SELECT` sur les tables F* lues par Nomasx-1. |
| **URL par environnement** | Une même installation peut basculer entre environnements JDE en modifiant l'URL JDBC — le framework recharge à l'enregistrement. |

Une fois `jdedwards` joignable, exécuter les jobs de collecte (`nomasx1-security-1`, `nomasx1-license-1`, etc.) pour peupler les tables Nomasx-1 — voir [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) pour le catalogue complet.

### Charger le bundle de référence

Nomasx-1 est livré avec un ensemble sélectionné de **lignes de référence** — baseline SoD, paramètres, listes personnalisées. Elles ne font pas partie de l'amorçage du schéma ; elles sont chargées par un job dédié :

```text title="Nomaflow → Catalogue → nomasx1-import-reference → ▶ Run now"
```

Le job lit `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz` et insère les lignes dans les tables correspondantes. Réexécution sans risque — définir `replace = true` dans *Run with parameters* pour un cycle destructif TRUNCATE + INSERT.

Voir [Bundled jobs → nomasx1-import-reference](../nomaflow/bundled-jobs.md#nomasx1-import-reference) pour la référence des paramètres.

---

## Mettre à niveau une installation existante

Quand NOMANA-IT livre un nouveau wheel `liberty-apps` :

| Étape | Description |
|---|---|
| **1. Sauvegarder la configuration** | `cp -r $LIBERTY_APPS_DIR $LIBERTY_APPS_DIR.bak.$(date +%Y%m%d)`. L'installeur du wheel préserve vos modifications par défaut, mais une sauvegarde reste une assurance peu coûteuse. |
| **2. `pip install --upgrade <nouveau wheel>`** | Même commande, pointant vers le nouveau fichier. |
| **3. `liberty-apps install --target $LIBERTY_APPS_DIR`** | L'installeur copie le code des plugins sans condition et **préserve les fichiers de configuration existants** (vos modifications survivent). Les nouveaux fichiers de configuration du bundle (par exemple un nouveau dashboard) SONT copiés. |
| **4. N'utiliser `--force-config` que pour reprendre les valeurs par défaut éditeur** | Cela écrase vos modifications. La bonne manière de récupérer sélectivement les mises à jour éditeur est d'exporter vos modifications via [Settings → Package](../framework/build/packages.md) avant, puis de réappliquer ensuite éditeur + votre package. |
| **5. Recharger** | `POST /admin/reload`. Les nouveaux écrans, dashboards et jobs sont actifs. |
| **6. Mise à niveau du schéma (uniquement si les release notes mentionnent des changements BDD)** | Exécuter *Nomaflow → Catalogue → `nomasx1-upgrade-schema-1`*. Pilotée par Alembic, idempotente. |

L'installeur du wheel ne touche jamais aux bases applicatives — uniquement aux répertoires de configuration et de plugins du framework. Les changements de schéma sont toujours déclenchés par l'opérateur via les jobs `*-upgrade-schema-*` du bundle.

---

## Un second déploiement Nomasx-1 en parallèle

Pour l'hébergement multi-clients — exploiter deux instances Nomasx-1 indépendantes contre deux sources JDE différentes sur le même serveur Liberty — le job livré `nomasx1-init-db` clone la configuration de l'application `nomasx1` sous un nouveau nom (par exemple `nomasx1b`) et provisionne une base parallèle.

| Étape | Description |
|---|---|
| **1. Exécuter `nomasx1-init-db`** | Clone la configuration de l'application `nomasx1` → `nomasx1b`, crée le pool et la base `nomasx1b`, puis exécute l'amorçage du schéma. Le job refuse de s'exécuter si `nomasx1b` existe déjà. |
| **2. Raccorder la seconde source JDE** | Ajouter un connecteur / pool `jdedwards2` pointant vers la seconde instance JDE. |
| **3. Exécuter les jobs de collecte** | Les jobs de collecte acceptent un paramètre `target_connector`. Les exécuter une fois par instance Nomasx-1 (`nomasx1` et `nomasx1b`). |

Voir [Nomaflow → Bundled jobs → nomasx1-init-db](../nomaflow/bundled-jobs.md#nomasx1-init-db) pour la forme des paramètres et la sémantique du clonage.

---

## Ce qui passe par ce canal vs. l'écran Package

| Canal | Contenu | Cadence |
|---|---|---|
| **Installeur de wheel `liberty-apps`** *(cette page)* | Le bundle licencié **complet** — chaque TOML, chaque plugin, le tarball de référence. Propriété éditeur. | Par release (quelques-unes par an). |
| **Écran Settings → Package** *(voir [Packages](../framework/build/packages.md))* | Une **tranche** de configuration — écrans, éléments de menu, dashboards sélectionnés et leur fermeture de dépendances. Propriété opérateur. | Par changement (quotidien, à la demande). |

Utiliser le wheel pour la **livraison éditeur**. Utiliser l'écran Package pour les **tranches par client**, les **promotions staging → prod** et les **mises à niveau au niveau écran** d'un sous-ensemble sélectionné sans toucher au reste.

Les deux canaux sont conçus pour coexister — le wheel préserve par défaut les modifications opérateur sur les fichiers de configuration, ainsi les mises à niveau du wheel et les éditions via l'écran Package ne s'opposent pas.

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| `liberty-apps install` lancé sans que `LIBERTY_APPS_DIR` soit défini. | `error: no target — pass --target DIR or set LIBERTY_APPS_DIR`. | Définir la variable d'environnement dans le fichier d'environnement du framework / l'unité systemd / l'environnement Docker. |
| L'installation du wheel a réussi mais Liberty ne voit pas les nouveaux écrans. | Le framework n'a pas été rechargé — l'ancienne configuration est toujours en mémoire. | `POST /admin/reload` ou cliquer sur *Settings → Reload*. |
| Le job `deploy-databases` échoue avec `permission denied for database`. | Le pool `default` du framework ne peut pas créer de bases ni de rôles. | Pointer `default` vers un superutilisateur Postgres pour l'exécution du déploiement, puis revenir en arrière. |
| Connexion refusée depuis un job de collecte Nomasx-1. | Le connecteur `jdedwards` n'est pas configuré ou les identifiants sont incorrects. | *Settings → Connectors → jdedwards* → corriger l'URL JDBC ou les identifiants → tester depuis l'interface avant de relancer le job. |
| `nomasx1-import-reference` se termine en erreur avec *« target application not found »*. | L'application cible (par défaut `nomasx1`) n'est pas créée dans *Settings → Applications*. | Ajouter d'abord l'application depuis l'interface (le contrôle préalable refuse de démarrer sinon). |
| Wheel mis à niveau mais les jobs n'affichent pas les nouveaux ordonnancements. | Le registre de jobs Nomaflow met `jobs.toml` en cache. | Recharger le framework ; le `jobs.toml` livré est relu au moment du rechargement. |
| Tentative de livrer Nomasx-1 sur une installation neuve via l'écran Settings → Package au lieu du wheel. | Le code des plugins est absent — chaque job comportant une étape Python échoue avec `No module named 'nomasx1'`. | Utiliser le wheel pour les livraisons complètes ; l'écran Package est réservé aux tranches de configuration. |

---

## Et ensuite

- [Nomaflow → Bundled jobs](../nomaflow/bundled-jobs.md) — chaque job présent dans `liberty-apps/plugins/nomaflow/jobs.toml`, son rôle, quand l'exécuter.
- [Packages](../framework/build/packages.md) — le canal de déploiement par tranche pour les écrans, éléments de menu et dashboards.
- [Installation → Mise à niveau](./upgrading.md) — mise à niveau du framework Liberty lui-même (en dessous des applications).
