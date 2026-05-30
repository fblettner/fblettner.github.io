---
title: Tâches livrées
description: "Le catalogue de tâches Nomaflow fourni avec le wheel liberty-apps — tâches d'installation, de préchargement, de rafraîchissement, de synchronisation, de SoD et d'audit qui pilotent Nomasx-1 et Nomajde sans qu'aucune ligne de TOML ne soit écrite par l'opérateur. Lancement depuis Nomaflow → Catalogue → ▶ Exécuter, planification via le planificateur standard ou déclenchement depuis la CI."
keywords: [Nomaflow, tâches livrées, jobs.toml, Nomasx-1, Nomajde, liberty-apps, préchargement, installation, rafraîchissement, synchronisation, SoD, audit trail, LDAP, deploy-databases, init-schema, security, license]
---

# Tâches livrées

Le wheel **`liberty-apps`** embarque un catalogue de tâches Nomaflow curaté dans `plugins/nomaflow/jobs.toml`. Ces tâches apparaissent automatiquement dans le catalogue Nomaflow après l'installation du wheel et un rechargement du framework — aucun bloc `[[jobs]]` à rédiger, aucune planification à câbler à la main.

Chaque tâche est une fine enveloppe autour d'un appelable Python livré dans le paquet plugin **`nomasx1`** (`plugins/nomasx1/`). Le bundle garde l'orchestration **déclarative** (le bloc `[[jobs]]` dans `jobs.toml`) et le traitement **impératif** (l'appelable en Python) — le même schéma que Liberty applique partout.

| Famille | Objet | Voir |
|---|---|---|
| **Installation** | Provisionnement unique des bases de données et du schéma. | [Tâches d'installation](#install) |
| **Préchargement** | Export/import de données de référence curatées — pour les nouvelles installations client ou la promotion entre environnements. | [Tâches de préchargement](#preload) |
| **Synchronisation** | Copie des tables de contrôle et de dictionnaire en amont vers le miroir Nomajde local. | [Tâches de synchronisation](#sync) |
| **Collecte sécurité** | Lecture de la sécurité JD Edwards et du LDAP dans le schéma Nomasx-1. | [Tâches de collecte sécurité](#security) |
| **Collecte licences** | Lecture des données de licence, employés et OUT depuis JDE vers le schéma Nomasx-1. | [Tâches de collecte licences](#license) |
| **Détection SoD** | Application de la matrice de séparation des tâches sur les données de sécurité collectées. | [Tâches SoD](#sod) |
| **Propriétés base de données** | Lecture des métadonnées Oracle (options, fonctionnalités, partitionnement, licences). | [Tâches base de données](#database) |
| **Audit trail** | Capture des modifications via LogMiner depuis la base source d'audit. | [Tâches d'audit trail](#audit-trail) |
| **Maintenance** | Rafraîchissement des vues matérialisées, reconstruction des références croisées, remise à zéro de SCN, mise à niveau du schéma. | [Tâches de maintenance](#maintenance) |

Toutes les tâches livrées arrivent avec **`enabled = false`** — elles apparaissent dans le catalogue mais ne se déclenchent pas automatiquement. L'opérateur active une planification (ou les exécute à la demande) une fois l'installation câblée.

---

## Comment le bundle est livré

Le parcours d'une tâche livrée depuis le wheel jusqu'au catalogue :

| Étape | Description |
|---|---|
| **1. Installation du wheel** | `pip install liberty_apps-*.whl` dépose la charge embarquée dans le `site-packages` du framework. |
| **2. `liberty-apps install`** | Copie `plugins/nomaflow/jobs.toml` vers `${LIBERTY_APPS_DIR}/../plugins/nomaflow/jobs.toml` et `plugins/nomasx1/` vers `${LIBERTY_APPS_DIR}/../plugins/nomasx1/`. |
| **3. Rechargement** | Nomaflow relit `jobs.toml` ; le framework ré-importe le paquet `nomasx1` ; les nouvelles tâches apparaissent dans le catalogue. |

Procédure complète : [Installation → Déployer les applications préfabriquées](../installation/deploy-prebuilt-apps.md).

### Modifier ou étendre le bundle

Le `jobs.toml` livré est **modifiable par l'opérateur** — il se trouve dans le répertoire des plugins de l'installation après `liberty-apps install`. Ajoutez des tâches personnalisées en concaténant des blocs `[[jobs]]` ; les tâches du fournisseur cohabitent avec les vôtres. À la prochaine mise à niveau du wheel, l'installeur **remplace le fichier par défaut** : versionnez vos ajouts locaux dans un gestionnaire de sources ou déplacez-les dans un fichier `jobs.toml` séparé à côté de celui du bundle.

Les appelables Python (`plugins/nomasx1/`) appartiennent au fournisseur et sont rafraîchis à chaque mise à niveau du wheel — ne les modifiez pas sur place.

---

## Paramètres communs

La plupart des tâches du bundle partagent la même forme de paramètres sous `[jobs.params]` :

| Paramètre | Défaut | Description |
|---|---|---|
| `apps_id` | `10` | Identifiant de l'application Nomasx-1 ciblée par la tâche. À surcharger en mode multi-tenant sur plusieurs applications `nomasx1`. |
| `source_connector` | variable | Connecteur de **lecture** — `jdedwards`, `unused` (pour les tâches sans lecture amont), `oracle-target` (pour les tâches d'introspection BDD). |
| `target_connector` | `nomasx1` | Connecteur d'**écriture**. À surcharger pour une installation parallèle (`nomasx1b`). |
| `target_schema` | `nomasx1` | Nom du schéma à l'intérieur du connecteur cible. |

Surcharges à l'exécution : ouvrir *Exécuter avec paramètres* sur la fiche de la tâche avant ▶ Exécuter. Surcharges par planification : les définir sur le bloc `[[jobs.schedules]]` dans votre `jobs.toml` de surcharge.

---

## Tâches d'installation \{#install\}

Provisionnement unique. À lancer **une seule fois** au démarrage chez le client ; relançable sans risque (idempotent) mais inutile.

### `deploy-databases` \{#deploy-databases\}

**Provisionnement initial des bases de données.** Crée les rôles de connexion applicatifs et les bases Postgres par cible sur le pool `default` du framework, puis exécute le bootstrap du schéma Nomasx-1 sur la base fraîchement créée. L'étape compagnon pour le miroir Nomajde est créée (schéma vide — ce sont les tâches de synchronisation qui le peuplent).

| Étape | Appelable |
|---|---|
| `create-roles-and-databases` | `nomasx1.db:create_databases` — crée les rôles et bases `nomasx1` et `nomajde`. `create_roles = true` provisionne aussi les rôles de connexion. |
| `init-schema-nomasx1` | `nomasx1.db:init_schema` — exécute le bootstrap du schéma Nomasx-1 sur la base `nomasx1`. |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `admin_connector` | `default` | Pool par lequel passent les instructions `CREATE DATABASE` / `CREATE ROLE`. Doit disposer de ces droits sur le serveur Postgres. |
| `targets` | `["nomasx1", "nomajde"]` | Bases et rôles à provisionner par cible. |
| `create_roles` | `true` | À mettre à `false` si le DBA a créé les rôles de connexion à la main. |
| `target_connector` *(étape init-schema)* | `nomasx1` | Base fraîchement créée à amorcer. |

**Quand l'exécuter** — une fois lors d'une nouvelle installation, juste après `liberty-apps install` et le rechargement. L'exécution de deploy-databases prend généralement de 5 à 30 secondes.

---

### `nomasx1-init-db` \{#nomasx1-init-db\}

**Mise en place unique d'un déploiement Nomasx-1 parallèle.** Clone la configuration de l'application `nomasx1` existante sous un nouveau nom (par exemple `nomasx1b`) — refuse si la cible existe déjà — et provisionne une base parallèle. Sert à l'hébergement multi-tenant (une installation Liberty servant deux jeux de données client indépendants).

| Étape | Appelable |
|---|---|
| `clone-app` | `liberty.web.clone:clone_app_step` — duplique les écrans, menus et liaisons de connecteur de l'application source sous le nouveau nom et le nouveau pool. |
| `init-schema` | `nomasx1.db:init_schema` — bootstrap du schéma sur la nouvelle base. |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `source_app` | `nomasx1` | Application à cloner. |
| `new_app` | `nomasx1b` | Nom de la nouvelle application. Deviendra le nom du menu, des écrans et du connecteur. |
| `new_pool` | `nomasx1b` | Nom du nouveau pool à câbler sous le connecteur cloné. |
| `target_connector` *(étape init-schema)* | `nomasx1b` | Identique à `new_app` par convention. |

**Quand l'exécuter** — une fois par instance Nomasx-1 supplémentaire. Pour les **mises à niveau récurrentes du schéma** après modification des modèles Python, utiliser plutôt `nomasx1-init-schema-1` (ci-dessous) — il saute l'étape de clonage.

---

### `nomasx1-init-schema-1` \{#nomasx1-init-schema-1\}

**Création des tables et vues matérialisées Nomasx-1 manquantes sur `target_connector`.** Idempotent — relançable sans risque après les modifications de `models.py` qui ajoutent de nouvelles tables. Ne supprime PAS les colonnes disparues du modèle (utiliser `nomasx1-upgrade-schema-1` pour cela).

| Étape | Appelable |
|---|---|
| `init-schema` | `nomasx1.db:init_schema` |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `target_connector` | `nomasx1` | Base à laquelle ajouter les objets manquants. |

**Quand l'exécuter** — après chaque mise à niveau du wheel qui ajoute de nouvelles tables (les notes de version le signaleront).

---

### `nomasx1-upgrade-schema-1` \{#nomasx1-upgrade-schema-1\}

**Application des migrations alembic en attente sur `target_connector`.** Exécute `alembic upgrade head` sur le schéma Nomasx-1. Idempotent — sans effet si déjà à jour.

| Étape | Appelable |
|---|---|
| `upgrade-schema` | `nomasx1.db:upgrade_schema` |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `target_connector` | `nomasx1` | Base à mettre à niveau. |

**Quand l'exécuter** — après chaque mise à niveau du wheel livrant des deltas de schéma (les notes de version le préciseront). À combiner avec une sauvegarde de la base ; les migrations alembic sont uniquement progressives.

---

### `nomasx1-audit-trail-precheck-1` \{#nomasx1-audit-trail-precheck-1\}

**Vérification en lecture seule que la base source d'audit dispose de tous les prérequis AUDIT_TRAIL.** Contrôle la disponibilité de LogMiner, le mode archive-log, les paramètres de journalisation supplémentaire et les droits de schéma nécessaires au collecteur d'audit trail. Produit le SQL de remédiation pour chaque contrôle en échec.

| Étape | Appelable |
|---|---|
| `AUDIT_TRAIL_PRECHECK` | `nomasx1.audit_trail:j_audit_trail_precheck` |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `apps_id` | `10` | Identifiant de l'application Nomasx-1. |
| `source_connector` | `unused` | Non utilisé par le pré-contrôle — il lit via le connecteur source d'audit configuré dans les paramètres de l'application. |
| `target_connector` | `nomasx1` | Destination du rapport de pré-contrôle. |

**Quand l'exécuter** — une fois avant d'activer `nomasx1-audit-trail-1` ; le SQL de remédiation du rapport est à transmettre au DBA.

---

## Tâches de préchargement \{#preload\}

Le **bundle de référence** curaté est livré dans `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz`. La tâche d'export construit le bundle depuis une installation source ; la tâche d'import le charge dans une installation cible.

### `nomasx1-export-reference` \{#nomasx1-export-reference\}

**Extraction des tables de référence Nomasx-1 curatées vers un bundle `.tar.gz`.** Le bundle contient les lignes de référence `settings_*` et `sod_*` (~2 000 lignes, ~35 Ko) — les données de référence curatées livrées avec Nomasx-1, adaptées à l'amorçage des nouvelles installations client. Surcharger `output_path` ou `source_connector` via *Exécuter avec paramètres*.

| Étape | Appelable |
|---|---|
| `export` | `nomasx1.preload:j_export_reference` |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `source_connector` | `nomasx1` | Base où lire les lignes de référence. |
| `schema` | `nomasx1` | Nom du schéma à l'intérieur du connecteur source. |
| `output_path` | `/tmp/nomasx1-reference.tar.gz` | Emplacement d'écriture du bundle. L'utilisateur de service du framework doit y disposer d'un droit d'écriture. |

**Quand l'exécuter** — lors de la préparation d'une livraison fournisseur (interne NOMANA-IT) ; ne fait pas partie des opérations client habituelles.

---

### `nomasx1-import-reference` \{#nomasx1-import-reference\}

**Chargement d'un bundle de référence Nomasx-1 curaté dans `target_connector`.** L'opérateur doit d'abord créer l'application cible dans *Paramètres → Applications* — le pré-contrôle d'import refuse de démarrer sinon. Mettre `replace = true` pour un cycle destructif TRUNCATE puis INSERT.

| Étape | Appelable |
|---|---|
| `import` | `nomasx1.preload:j_import_reference` |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `target_connector` | `nomasx1` | Base de destination de l'import. |
| `schema` | `nomasx1` | Nom du schéma à l'intérieur du connecteur cible. |
| `bundle_path` | `/tmp/nomasx1-reference.tar.gz` | Bundle à charger. Après `liberty-apps install`, le bundle par défaut se trouve dans `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz` — ajuster ce paramètre en conséquence. |
| `replace` | `false` | Si `true`, TRUNCATE de chaque table cible avant INSERT. À n'utiliser que pour un ré-amorçage propre. |
| `target_apps_ids` | `""` | Identifiants d'applications séparés par des virgules pour restreindre l'import (par exemple `"10,20"`). Vide = toutes les applications du bundle. |

**Quand l'exécuter** — une fois après `deploy-databases`, pour amorcer la base SoD et les paramètres de référence. La tâche est sûre à relancer avec `replace = false` (n'ajoute que les lignes manquantes).

---

## Tâches de synchronisation \{#sync\}

Réplication des tables de contrôle et de dictionnaire en amont depuis JD Edwards vers la base Nomajde locale. À planifier quotidiennement — les données lues évoluent peu.

### `nomajde-daily-sync` \{#nomajde-daily-sync\}

**Synchronisation quotidienne des tables de contrôle et du dictionnaire de données JDE vers Nomajde.** Lit depuis le connecteur `jdedwards` configuré et écrase les tables correspondantes du connecteur `nomajde`. Chaque étape est un `sql_copy` mono-table avec `mode = "overwrite"` — rafraîchissement complet à chaque exécution.

**Tables synchronisées**

| Source (JDE) | Cible (Nomajde) | Contenu |
|---|---|---|
| `PS920CTL.F0004` | `nomajde.f0004` | Types UDC. |
| `PS920CTL.F0005` | `nomajde.f0005` | Valeurs UDC. Les espaces de fin sur `DRKY` sont supprimés via `strip_both_columns`. |
| `DD920.F9200` | `nomajde.f9200` | Maître du dictionnaire de données. |
| `DD920.F9202` | `nomajde.f9202` | Texte du dictionnaire de données. |
| `DD920.F9210` | `nomajde.f9210` | Glossaire du dictionnaire de données. |
| `OL920.F9860` | `nomajde.f9860` | Maître de l'Object Librarian. |
| `OL920.F9865` | `nomajde.f9865` | Dépendances de l'Object Librarian. |

**Coercition de type**

Chaque étape utilise `type_coercion = "jde"` et `decimal_mode = "truncate"` — les types de colonne JDE sont mis en correspondance avec du SQL standard à l'entrée (par exemple `JULIANDATE` → `DATE`, `STRING(N)` tronqué en `VARCHAR`), avec troncature plutôt qu'arrondi sur les décimales.

**Planification** — `30 2 * * *` (02h30 chaque jour, fuseau Europe/Paris dans le bundle). `enabled = false` par défaut — à activer depuis la fiche du catalogue une fois `jdedwards` câblé et après une première exécution manuelle ▶ Exécuter réussie.

**Reprise et alertes** — 2 tentatives de reprise, alerte quand l'exécution dépasse 120 minutes.

---

## Tâches de collecte sécurité \{#security\}

Lecture des données de sécurité JD Edwards vers le schéma Nomasx-1. La structure prend la forme d'une longue chaîne d'étapes mono-appelable — une fonction Python par entité JDE ou par table dérivée Nomasx-1.

### `nomasx1-security-1` \{#nomasx1-security-1\}

**Collecte de toutes les données de sécurité pour une application** — Utilisateurs / Rôles / Affectations / Menus / Accès. Chaque étape extrait une entité JDE (objets, sec objects, sec menus, etc.) ou construit une table dérivée Nomasx-1 (security_users, security_rights_actions, etc.).

| Famille | Étapes | Description |
|---|---|---|
| Entités JDE | `JDE_OBJECTS`, `JDE_OBJECTS_VERSIONS`, `JDE_SEC_OBJECTS`, `JDE_SEC_MENUS`, `JDE_TASKS`, `JDE_MENUS` | Extraction brute depuis F00950, F0094, F0092, F9012, F9001, F9000. |
| Catalogues Nomasx-1 | `SECURITY_USERS`, `SECURITY_USERS_DATA`, `SECURITY_ROLES`, `SECURITY_ASSIGNMENTS`, `SECURITY_MENUS` | Utilisateurs, rôles, affectations de rôles et arbres de menus par application. |
| Droits dérivés | `SECURITY_RIGHTS_MENUS`, `SECURITY_RIGHTS_APPS`, `SECURITY_RIGHTS_ACTIONS`, `SECURITY_RIGHTS_APPS_USERS`, `SECURITY_RIGHTS_ACTIONS_USERS` | Droits effectifs — par rôle, par utilisateur, sur les menus, applications et actions. |
| Audit | `SECURITY_RIGHTS_AUDIT` | Piste d'audit des octrois et révocations de droits. |
| Rafraîchissement | `REFRESH_VIEWS` | Rafraîchissement des vues matérialisées en fin de chaîne. |

Toutes les étapes s'exécutent séquentiellement (aucun parallélisme — l'ordre est important pour les tables dérivées).

**Paramètres standards** (`apps_id`, `source_connector = jdedwards`, `target_connector = nomasx1`, `target_schema = nomasx1`).

**Reprise et alertes** — 2 tentatives, alerte d'exécution longue à 30 minutes.

**Quand l'exécuter** — quotidiennement pour les installations actives (lecture seule sur JDE). La première exécution après un nouveau rôle, utilisateur ou octroi de droit dans JDE rafraîchit le catalogue Nomasx-1 ; jusque-là, l'interface affiche l'instantané précédent.

---

### `nomasx1-ldap-1` \{#nomasx1-ldap-1\}

**Collecte des utilisateurs Active Directory** via la connexion LDAP/AD configurée dans *Paramètres → LDAP*. Peuple la table Nomasx-1 `security_ldap` qui alimente les pages de réconciliation LDAP.

| Étape | Appelable |
|---|---|
| `SECURITY_LDAP` | `nomasx1.ldap:j_security_ldap` |

**Paramètres** — forme standard (`source_connector = unused` — le serveur LDAP est configuré séparément).

**Quand l'exécuter** — quotidiennement, après le rafraîchissement de la source LDAP ; ou à la demande avant une revue d'accès trimestrielle.

---

## Tâches de collecte licences \{#license\}

Lecture des données JDE pertinentes pour les licences — employés, utilisateurs transactionnels, Object Usage Tracking — vers le schéma Nomasx-1. Alimentent les tableaux de bord *Licences → JD Edwards*.

### `nomasx1-employees-1` \{#nomasx1-employees-1\}

**Collecte des employés depuis les modules RH de JD Edwards** — internes et externes. Peuple la table `license_jde_employees` ; rafraîchit les vues matérialisées en fin de chaîne.

| Étape | Appelable |
|---|---|
| `LICENSE_JDE_EMPLOYEES` | `nomasx1.license:j_license_jde_employees` |
| `REFRESH_VIEWS` | `nomasx1.security:j_refresh_views` |

**Alerte d'exécution longue** — 5 minutes.

**Quand l'exécuter** — hebdomadairement. Les données RH ne changent pas quotidiennement.

---

### `nomasx1-license-1` \{#nomasx1-license-1\}

**Collecte des utilisateurs depuis les tables JD Edwards — transactions uniquement.** Lit qui a effectivement réalisé des transactions dans JDE sur la fenêtre récente (sert d'entrée au comptage des utilisateurs licenciables). Peuple `license_jde_users`.

| Étape | Appelable |
|---|---|
| `LICENSE_JDE_USERS` | `nomasx1.license:j_license_jde_users` |
| `REFRESH_VIEWS` | `nomasx1.security:j_refresh_views` |

**Alerte d'exécution longue** — 30 minutes.

**Quand l'exécuter** — quotidiennement (installations actives) ou hebdomadairement (installations moins sollicitées). À associer avec `nomasx1-employees-1` pour que les utilisateurs transactionnels soient rapprochés des fiches employés.

---

### `nomasx1-out-1` \{#nomasx1-out-1\}

**Collecte de l'Object Usage Tracking depuis JD Edwards.** Agrège les données OUT et purge les lignes conservées selon la rétention définie dans *Nomasx-1 → Paramètres → JDE → Rétention OUT*. Alimente les tableaux de bord OUT (composants, utilisateurs, objets).

| Étape | Description |
|---|---|
| `LICENSE_JDE_OUT` | Extraction brute de l'OUT depuis JDE. |
| `LICENSE_JDE_OUT_OBJECTS` | Agrégation par objet. |
| `LICENSE_JDE_OUT_USERS` | Agrégation par utilisateur. |
| `LICENSE_JDE_OUT_PURGE` | Purge des lignes plus anciennes que le paramètre de rétention. |
| `REFRESH_VIEWS` | Rafraîchissement des vues matérialisées. |

**Alerte d'exécution longue** — 15 minutes.

**Quand l'exécuter** — quotidiennement. Les données OUT s'accumulent rapidement ; un passage quotidien garde le tableau de bord pertinent et l'étape de purge maintient la base à une taille raisonnable.

---

## Tâches SoD \{#sod\}

### `nomasx1-sod-1` \{#nomasx1-sod-1\}

**Collecte des séparations des tâches (SoD) à partir des données de sécurité et de la matrice définie dans *Nomasx-1 → Paramètres → SoD*.** Les données de sécurité sont un prérequis — à exécuter après `nomasx1-security-1`.

| Étape | Description |
|---|---|
| `SOD_CONFLICT_DETAILS` | Lignes de détail par utilisateur et par conflit. |
| `SOD_CONFLICT_SUMMARY` | Décomptes agrégés qui alimentent le tableau de bord SoD. |
| `REFRESH_VIEWS` | Rafraîchissement des vues matérialisées. |

**Alerte d'exécution longue** — 10 minutes.

**Quand l'exécuter** — quotidiennement, planifiée après `nomasx1-security-1` (afin que l'analyse SoD voie les affectations les plus fraîches). Ou à la demande après une action majeure de revue d'accès.

---

## Tâches base de données \{#database\}

Lecture des métadonnées Oracle depuis la base hébergeant JDE (ou toute cible Oracle câblée en tant que `oracle-target`). Alimente la page *Base de données → Oracle*.

### `nomasx1-database-1` \{#nomasx1-database-1\}

**Collecte des propriétés de la base Oracle.**

| Étape | Description |
|---|---|
| `DB_ORA_PROPERTIES` | Version, édition, paramètres. |
| `DB_ORA_OPTIONS` | Options installées (Spatial, OLAP, RAC, etc.). |
| `DB_ORA_FEATURES` | Utilisation des fonctionnalités depuis `DBA_FEATURE_USAGE_STATISTICS`. |
| `DB_ORA_PARTITIONS` | Utilisation du partitionnement par schéma. |
| `DB_ORA_LICENSES` | Signaux agrégés pertinents pour la licence (utilisation des options, fonctionnalités et partitionnement). |

**Connecteur source** — `oracle-target` (un connecteur que vous configurez vers la base Oracle à introspecter). La tâche ne lira pas depuis `jdedwards` — par conception, afin qu'une cible Oracle distincte puisse être auditée sans accorder de droits de lecture supplémentaires au connecteur JDE de Nomasx-1.

**Alerte d'exécution longue** — 10 minutes.

**Quand l'exécuter** — un passage mensuel suffit généralement. Les données qui alimentent les tableaux de bord Oracle évoluent lentement.

---

## Tâches d'audit trail \{#audit-trail\}

Capture de données modifiées pilotée par LogMiner depuis la base source d'audit — journaux d'archive Oracle. Fonctionnent indépendamment des tâches de sécurité, de licences et de SoD.

### `nomasx1-audit-trail-1` \{#nomasx1-audit-trail-1\}

**Capture des données modifiées via LogMiner — Audit Trail à partir des journaux d'archive Oracle.**

| Étape | Appelable |
|---|---|
| `AUDIT_TRAIL` | `nomasx1.audit_trail:j_audit_trail` |

**Connecteur source** — `unused` ici (le connecteur source d'audit est lu depuis les paramètres de l'application, pas depuis les paramètres de la tâche).

**Alerte d'exécution longue** — 30 minutes.

**Quand l'exécuter** — généralement planifiée toutes les heures ou tous les quarts d'heure. Avant l'activation, exécuter [`nomasx1-audit-trail-precheck-1`](#nomasx1-audit-trail-precheck-1) et corriger les éventuels écarts signalés.

---

### `nomasx1-audit-trail-reset-scn-1` \{#nomasx1-audit-trail-reset-scn-1\}

**Remise à zéro du dernier SCN utilisé par Audit Trail pour une application.** À utiliser après une longue pause (la reprise de l'audit trail sur un historique trop long serait lente) ou après un changement de source d'audit. La valeur par défaut `scn = 0` fait reprendre la prochaine exécution sur le SCN courant — c'est-à-dire un démarrage à neuf depuis « maintenant ». Surcharger `scn` via *Exécuter avec paramètres* pour fixer un SCN précis.

| Étape | Appelable |
|---|---|
| `AUDIT_TRAIL_RESET_SCN` | `nomasx1.audit_trail:j_audit_trail_reset_scn` |

**Paramètres** — forme standard et `scn = 0` (valeur par défaut).

**Quand l'exécuter** — à la demande. Non planifiée.

---

## Tâches de maintenance \{#maintenance\}

### `nomasx1-refresh-views` \{#nomasx1-refresh-views\}

**Rafraîchissement des vues matérialisées** — accélère les requêtes Nomasx-1. Toutes les tâches majeures de collecte l'exécutent en fin de chaîne, une invocation dédiée est donc rarement nécessaire. Utile après une correction SQL manuelle ou un import massif.

| Étape | Appelable |
|---|---|
| `refresh-views` | `nomasx1.db:refresh_views` |

**Paramètres** — `target_connector = nomasx1`.

**Quand l'exécuter** — après une correction de données manuelle ; non planifiée.

---

### `nomasx1-xref-1` \{#nomasx1-xref-1\}

**Génération des références croisées pour les objets JD Edwards.** Construit la table JDE_XREF_APPS qui alimente les vues de références croisées (quelle application référence quel objet).

| Étape | Appelable |
|---|---|
| `JDE_XREF_APPS` | `nomasx1.xref:j_jde_xref_apps` |

**Paramètres** — `object_id = "all"` (défaut — traite chaque objet). À surcharger par un identifiant d'objet précis pour une reconstruction ciblée.

**Alerte d'exécution longue** — 30 minutes.

**Quand l'exécuter** — hebdomadairement. Les données XRef évoluent lentement ; seuls les objets ajoutés ou modifiés dans JDE comptent.

---

### `nomasx1-activity-log-1` \{#nomasx1-activity-log-1\}

**Rafraîchissement du journal d'activité.** Interroge chaque table JDE modifiée récemment et agrège les enregistrements par utilisateur et par date. **Seules les tables modifiées sont parcourues** — la tâche suit un repère par table afin de ne pas relire l'historique complet à chaque exécution.

| Étape | Appelable |
|---|---|
| `SECURITY_ACTIVITY_LOG` | `nomasx1.activity_log:j_security_activity_log` |

**Alerte d'exécution longue** — 15 minutes.

**Quand l'exécuter** — quotidiennement.

---

## Conseils de planification

Un rythme quotidien typique sur une installation active :

| Heure | Tâche |
|---|---|
| 02h30 | `nomajde-daily-sync` (planification livrée). |
| 03h00 | `nomasx1-security-1`. |
| 03h30 | `nomasx1-license-1`. |
| 04h00 | `nomasx1-out-1`. |
| 04h30 | `nomasx1-ldap-1`. |
| 05h00 | `nomasx1-sod-1` (après la sécurité, afin de disposer des affectations les plus fraîches). |
| 05h30 | `nomasx1-activity-log-1`. |

L'audit trail (`nomasx1-audit-trail-1`) s'exécute généralement toutes les 15 à 60 minutes — sur un rythme distinct du rafraîchissement sécurité et licences.

Les tâches livrées sont **enabled = false** par défaut. Définir la planification par tâche depuis *Nomaflow → Catalogue → \<tâche\> → onglet Planifications*, puis basculer `Enabled` sur la fiche du catalogue.

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| `jobs.toml` du bundle écrasé lors de la mise à niveau du wheel — modifications locales perdues. | Les blocs `[[jobs]]` personnalisés disparaissent après `liberty-apps install`. | Conserver les tâches personnalisées dans un `jobs.toml` séparé hors du répertoire plugin du bundle ; ou sauvegarder le fichier avant la mise à niveau. |
| Une tâche de collecte échoue avec `No module named 'nomasx1'`. | Le code du plugin n'est pas dans le chemin des plugins du framework. | Exécuter `liberty-apps install --target $LIBERTY_APPS_DIR` pour matérialiser la charge ; recharger le framework. |
| `nomasx1-import-reference` échoue avec *« target application not found »*. | Application non créée dans *Paramètres → Applications*. | Créer d'abord l'application dans l'interface ; le pré-contrôle refuse de démarrer sinon. |
| `deploy-databases` produit une erreur de droits refusés. | Le pool `default` ne peut créer ni bases, ni rôles. | Pointer temporairement `default` sur un superutilisateur Postgres ; revenir en arrière après l'exécution. |
| Planification définie mais la tâche ne se déclenche pas. | Le bascule sur la fiche du catalogue est sur OFF (le bundle livre `enabled = false`). | Activer `Enabled` sur la fiche APRÈS avoir défini la planification. |
| La synchronisation quotidienne s'exécute mais les tables Nomajde restent vides. | Le connecteur `jdedwards` n'est pas configuré (la tâche s'exécute silencieusement sur zéro ligne). | *Paramètres → Connecteurs → jdedwards* — tester la connexion depuis l'interface avant la prochaine exécution. |
| L'audit trail commence à produire des milliers de lignes par minute. | La tâche a démarré au SCN 0 — relecture de l'intégralité du journal d'archive. | Exécuter `nomasx1-audit-trail-reset-scn-1` (valeur par défaut `scn = 0` → la prochaine exécution reprend sur le SCN courant) pour repartir à neuf. |
| Les vues matérialisées affichent des données obsolètes après une correction SQL manuelle. | L'étape REFRESH_VIEWS de fin de chaîne de la tâche de collecte ne s'est pas exécutée (vous l'avez court-circuitée). | Exécuter `nomasx1-refresh-views` manuellement. |

---

## Pour la suite

- [Déployer les applications préfabriquées](../installation/deploy-prebuilt-apps.md) — comment le bundle parvient à l'installation au départ.
- [Nomaflow → Tâches → Catalogue](./jobs/catalog.md) — l'interface de la fiche catalogue : activation des planifications, exécution à la demande, *Exécuter avec paramètres*.
- [Nomaflow → Exécutions → Historique](./runs/history.md) — la page de détail par exécution où atterrissent les sorties des tâches livrées.
- [Nomaflow → Python personnalisé](./custom-python.md) — comment écrire vos propres appelables aux côtés de ceux livrés dans `nomasx1.*`.
