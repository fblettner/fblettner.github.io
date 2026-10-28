---
title: Tâches livrées
description: "Le catalogue de tâches Nomaflow fourni avec le wheel liberty-apps — tâches d'installation, de préchargement, de synchronisation, de collecte, de rapport et d'audit qui pilotent Nomasx-1 et Nomajde sans qu'aucune ligne de TOML ne soit écrite par l'opérateur. Lancement depuis Nomaflow → Catalogue → ▶ Exécuter, planification via le planificateur standard ou déclenchement depuis la CI."
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
| **Collecte** | Une seule tâche collecte tout ce dont Nomasx-1 a besoin pour une ou plusieurs applications : sécurité JD Edwards, séparation des tâches, licences, Object Usage Tracking, et au besoin l'annuaire, le journal d'activité, les propriétés de la base Oracle et les références croisées. | [Tâche de collecte](#collect) |
| **Rapports** | Les deux rapports d'audit, produits chaque mois et envoyés aux auditeurs. | [Tâches de rapport](#reports) |
| **Audit trail** | Capture des modifications via LogMiner depuis la base source d'audit. | [Tâches d'audit trail](#audit-trail) |
| **Maintenance** | Rafraîchissement des vues matérialisées, extraction des références croisées, purge des versions de configuration. | [Tâches de maintenance](#maintenance) |

Toutes les tâches livrées arrivent avec **`enabled = false`** — elles apparaissent dans le catalogue mais ne se déclenchent pas automatiquement. L'opérateur active une planification (ou les exécute à la demande) une fois l'installation câblée.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bjb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bjb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bjb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bjb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="298" rx="14" fill="url(#bjb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Tâches</text>
  <rect x="760" y="28" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="42.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Filtrer…</text>
  <rect x="878" y="28" width="90" height="22" rx="5" fill="url(#bjb-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="923.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New job</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="355" height="102" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="252" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">F0004, F0005, F92… → nomajde</text>
  <rect x="252" y="122" width="68" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="286.0" y="134.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">30 2 ∗ ∗ ∗</text>
  <text x="580" y="94" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">○ off</text>
  <rect x="252" y="146" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="280.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="315" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="373.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="605" y="74" width="355" height="102" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <text x="617" y="112" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">toutes les collectes → nomasx1</text>
  <rect x="617" y="122" width="48" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="641.0" y="134.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">manual</text>
  <text x="945" y="94" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">○ off</text>
  <rect x="617" y="146" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="645.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="680" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="738.5" y="160.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="240" y="186" width="355" height="102" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="206" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-audit-trail-1</text>
  <text x="252" y="224" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">audit trail capture</text>
  <rect x="252" y="234" width="78" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="291.0" y="246.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">∗/15 ∗ ∗ ∗ ∗</text>
  <text x="580" y="206" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">○ off</text>
  <rect x="252" y="258" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="280.5" y="272.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="315" y="258" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="373.5" y="272.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="605" y="186" width="355" height="102" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="617" y="206" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">config-versions-purge</text>
  <text x="617" y="224" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">20 versions · 90 days</text>
  <rect x="617" y="234" width="63" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="648.5" y="246.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0 3 ∗ ∗ ∗</text>
  <rect x="688" y="234" width="63" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="719.5" y="246.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SUCCEEDED</text>
  <text x="945" y="206" fill="#4ade80" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">● on</text>
  <rect x="617" y="258" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="645.5" y="272.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run now</text>
  <rect x="680" y="258" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="738.5" y="272.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches livrées</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">du wheel liberty-apps</text>
  <line x1="210" y1="107.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bjb-arrow)"/>
  <rect x="1000" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Désactivées en général</text>
  <text x="1010" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à activer une fois raccordées</text>
  <line x1="1000" y1="107.0" x2="950" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bjb-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activée</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">config-versions-purge, 3 h</text>
  <line x1="1000" y1="247.0" x2="950" y2="206" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bjb-arrow)"/>
  <rect x="10" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Run with parameters</text>
  <text x="20" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">surcharger une fois</text>
  <line x1="210" y1="257.0" x2="340" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bjb-arrow)"/>
</svg>

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

Surcharges à l'exécution : **Exécuter**, sur la ligne de la tâche, ouvre *Exécuter avec des paramètres*. Surcharges par planification : les définir sur le bloc `[[jobs.schedules]]` dans le `jobs.toml` de surcharge.

---

## Tâches d'installation \{#install\}

Provisionnement unique. À lancer **une seule fois** au démarrage chez le client ; relançable sans risque mais inutile.

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

**Application des migrations alembic en attente sur `target_connector`.** Exécute `alembic upgrade head` sur le schéma Nomasx-1. Sans effet en double — rien ne change si déjà à jour.

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

### `nomasx1-roles` \{#nomasx1-roles\}

**Crée ou met à jour les rôles de Nomasx-1.**

| Rôle | Accorde |
|---|---|
| `nomasx1_auditor` | Toutes les lectures des données de Nomasx-1, l'explorateur de données, l'assistant IA et les deux tâches de rapport ; les rapports mensuels lui sont envoyés. |
| `nomasx1_admin` | Tout : l'application entière, ses paramètres et toutes les tâches `nomasx1-*`. |

À lancer une fois après l'installation et après chaque mise à jour, pour que les nouvelles requêtes de lecture soient accordées ; attribuer ensuite les rôles aux utilisateurs dans **Liberty Next → Administrer → Accès**. Peut être relancée sans risque ; livrée désactivée.

---

## Tâches de préchargement \{#preload\}

Le **bundle de référence** curaté est livré dans `${LIBERTY_APPS_DIR}/nomasx1-reference.tar.gz`. La tâche d'export construit le bundle depuis une installation source ; la tâche d'import le charge dans une installation cible.

### `nomasx1-export-reference` \{#nomasx1-export-reference\}

**Extraction des tables de référence Nomasx-1 curatées vers un bundle `.tar.gz`.** Le bundle contient les lignes de référence `settings_*` et `sod_*` (~2 000 lignes, ~35 Ko) — les données de référence curatées livrées avec Nomasx-1, adaptées à l'amorçage des nouvelles installations client. Surcharger `output_path` ou `source_connector` via *Exécuter avec des paramètres*.

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

**Chargement d'un bundle de référence Nomasx-1 curaté dans `target_connector`.** L'opérateur doit d'abord créer l'application cible dans *Nomasx-1 → Paramètres → Global → Applications* — le pré-contrôle d'import refuse de démarrer sinon. Mettre `replace = true` pour un cycle destructif TRUNCATE puis INSERT.

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

**Planification** — `30 2 * * *` (02h30 chaque jour, fuseau Europe/Paris dans le bundle). `enabled = false` par défaut — à activer depuis la ligne de la tâche une fois `jdedwards` câblé et après une première exécution manuelle ▶ Exécuter réussie.

**Reprise et alertes** — 2 tentatives de reprise, alerte quand l'exécution dépasse 120 minutes.

---

### `nomajde-remerge-security` \{#nomajde-remerge-security\}

**Re-fusion de la sécurité JDE (F00950 / F00950W / F9006) de chaque rôle parent affecté par une modification capturée dans le paquet de modifications brouillon actif.** Pilotée par le plugin `nomajde.security:j_remerge_security` avec `scope = "package"`.

Cette tâche — et son équivalent `-all` — résout le problème propre à JDE : la sécurité d'un rôle est **dérivée** d'un arbre d'affectations rôle parent → rôle enfant. Modifier les permissions d'un rôle enfant n'a d'effet en production qu'une fois que chaque parent qui l'inclut a été re-fusionné. Faire cela à la main sur une modification de grande ampleur est fastidieux et source d'erreurs ; la tâche parcourt le paquet de modifications, déduit les parents impactés à partir des écritures capturées et relance la fusion pour chacun.

| Étape | Appelable |
|---|---|
| `REMERGE_SECURITY` | `nomajde.security:j_remerge_security` — lit le paquet brouillon actif, déduit l'ensemble des parents impactés via les requêtes `F00926` ancrées par rôle, re-fusionne F00950 / F00950W / F9006 pour chaque parent. |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `apps_id` | `10` | Identifiant de l'application Nomajde. |
| `source_connector` | `nomajde` | Emplacement des tables de sécurité fusionnées (le miroir Nomajde qui héberge les tables F564*). |
| `target_connector` | `jdedwards` | Base JDE de production où les lignes re-fusionnées sont réécrites. |
| `scope` | `package` | `package` → uniquement les parents impactés par le brouillon actif. `all` → chaque parent (utiliser plutôt `nomajde-remerge-security-all`). |

**Quand l'exécuter** — comme **étape post-application** sur un paquet de modifications qui touche aux rôles ou aux affectations rôle-à-rôle. Enregistrer l'identifiant de la tâche (`nomajde-remerge-security`) sur le `Screen.post_apply` de l'écran contributeur ; le framework la lance alors une fois sur la cible après le dépôt des lignes du bundle. Un déclenchement manuel ▶ Exécuter fonctionne aussi ; dans ce cas, le brouillon actif sur l'application configurée est utilisé.

Les diagnostics de la tâche apparaissent dans le journal d'exécution sous l'espace de nom de logger `nomajde.*` (enregistré par le plugin) — utile quand la fusion a sauté un parent parce que sa ligne `F00926` était manquante.

**Ré-exécutable sans danger** — relancer sur le même paquet brouillon re-fusionne les mêmes parents et produit les mêmes lignes. Sûre à relancer après un échec partiel.

Voir aussi : [Paquets de modifications](./change-packages.md).

---

### `nomajde-remerge-security-all` \{#nomajde-remerge-security-all\}

**Re-fusion de la sécurité JDE de chaque rôle parent du système, indépendamment des modifications récentes.** Même plugin que ci-dessus (`nomajde.security:j_remerge_security`) mais avec `scope = "all"`.

| Étape | Appelable |
|---|---|
| `REMERGE_SECURITY_ALL` | `nomajde.security:j_remerge_security` avec `scope = "all"`. |

**Quand l'exécuter** — une fois après un import propre des tables de sécurité JDE (`F00950` / `F00926` issus d'une extraction neuve), ou comme étape de récupération après une fusion défectueuse identifiée. Non planifiée par défaut ; pas trivialement ré-exécutable sans danger — relancer sur un système stable n'a pas d'effet sur les données mais réécrit les mêmes lignes, ce qui peut prendre plusieurs minutes sur une installation JDE volumineuse.

Pour une re-fusion partielle — uniquement les parents affectés par *cette* modification — utiliser `nomajde-remerge-security` (`scope = "package"`).

---

## Tâche de collecte \{#collect\}

### `nomasx1-collect-all` \{#nomasx1-collect-all\}

**Collecte, dans l'ordre, tout ce dont Nomasx-1 a besoin pour une application**, puis rafraîchit une seule fois les vues matérialisées à la fin.

| Famille | Étapes | Active par défaut |
|---|---|---|
| Sécurité JD Edwards | `JDE_OBJECTS`, `JDE_OBJECTS_VERSIONS`, `JDE_SEC_OBJECTS`, `JDE_SEC_MENUS`, `SECURITY_USERS`, `SECURITY_USERS_DATA`, `SECURITY_ROLES`, `SECURITY_ASSIGNMENTS`, `JDE_TASKS`, `JDE_MENUS`, `SECURITY_MENUS`, `SECURITY_RIGHTS_*` (menus, applications, actions, par utilisateur, audit) | Oui |
| Séparation des tâches | `SOD_CONFLICT_DETAILS`, `SOD_CONFLICT_SUMMARY` — la matrice de *Paramètres → Séparation des tâches* appliquée à la sécurité tout juste collectée | Oui |
| Licences | `LICENSE_JDE_EMPLOYEES`, `LICENSE_JDE_USERS` | Oui |
| Object Usage Tracking | `LICENSE_JDE_OUT`, `LICENSE_JDE_OUT_OBJECTS`, `LICENSE_JDE_OUT_USERS`, `LICENSE_JDE_OUT_PURGE` | Oui |
| Annuaire | `SECURITY_LDAP` — le LDAP / Active Directory défini dans *Paramètres → LDAP* | Non |
| Journal d'activité | `SECURITY_ACTIVITY_LOG` | Non |
| Base Oracle | `DB_ORA_PROPERTIES`, `DB_ORA_OPTIONS`, `DB_ORA_FEATURES`, `DB_ORA_PARTITIONS`, `DB_ORA_LICENSES` | Non |
| Références croisées | `JDE_XREF_APPS` | Non |
| Vues | `REFRESH_VIEWS` | Oui |

**Préréglages**

| Préréglage | Exécute |
|---|---|
| **Security and SoD** | La sécurité et la séparation des tâches — les étapes de licences et d'OUT désactivées. |
| **Licences** | Les licences et l'OUT — les étapes de sécurité et de SoD désactivées. |
| **Everything** | Toutes les étapes, y compris l'annuaire, le journal d'activité, la base et les références croisées. |

**Applications** — la tâche propose les applications de *Nomasx-1 → Paramètres → Global → Applications* en cases à cocher, avec **Tout**. Elle s'exécute une fois par application cochée, l'une après l'autre. Dans une planification ou un préréglage, `apps_id = "all"` collecte toutes les applications à chaque déclenchement.

**Paramètres** — `source_connector = jdedwards`, `target_connector = nomasx1`. Deux tentatives en cas d'échec ; une alerte au-delà de 90 minutes.

**Menu** — *Nomasx-1 → Tâches → Collecter la sécurité et la SoD* et *Collecter les licences* lancent les deux préréglages. Voir [Tâches de Nomasx-1](../nomasx1/jobs.md).

**Quand l'exécuter** — chaque jour sur une installation active, avec une planification sur un préréglage : *Security and SoD* chaque nuit, *Licences* chaque semaine.

---

## Tâches de rapport \{#reports\}

### `nomasx1-report-licences` et `nomasx1-report-security-sox` \{#nomasx1-reports\}

**Produisent un rapport d'audit et l'envoient.** Une [étape `report`](./steps.md#report) produit le PDF — l'[audit des licences](../nomasx1/reports/audit-licences.md) ou l'[évaluation Sécurité & SoD](../nomasx1/reports/security-sox.md) — pour une application ; une [étape `notify`](./steps.md#notify) l'envoie au rôle `nomasx1_auditor`, fichier joint.

| Paramètre | Rôle |
|---|---|
| **Applications** | Une ou plusieurs applications, ou **Tout** — un rapport par application. |
| **Language** | `fr` ou `en`. |

**Planification** — le 1er de chaque mois à 06:00 (Europe/Paris) ; livrées désactivées. Les activer une fois le compte de messagerie renseigné dans les [notifications](./notifications.md#smtp).

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

**Remise à zéro du dernier SCN utilisé par Audit Trail pour une application.** À utiliser après une longue pause (la reprise de l'audit trail sur un historique trop long serait lente) ou après un changement de source d'audit. La valeur par défaut `scn = 0` fait reprendre la prochaine exécution sur le SCN courant — c'est-à-dire un démarrage à neuf depuis « maintenant ». Surcharger `scn` via *Exécuter avec des paramètres* pour fixer un SCN précis.

| Étape | Appelable |
|---|---|
| `AUDIT_TRAIL_RESET_SCN` | `nomasx1.audit_trail:j_audit_trail_reset_scn` |

**Paramètres** — forme standard et `scn = 0` (valeur par défaut).

**Quand l'exécuter** — à la demande. Non planifiée.

---

### `nomasx1-audit-trail-purge-values-1` \{#nomasx1-audit-trail-purge-values-1\}

**Purge des valeurs de l'audit trail pour libérer de la place.** Supprime des lignes de `AUDIT_TRAIL_VALUES` — les valeurs avant / après par champ sur lesquelles filtre l'écran Audit Lookup. Les instructions capturées (`AUDIT_TRAIL_QUERY`) sont conservées : toute période peut être reconstruite plus tard avec [`nomasx1-audit-trail-rebuild-values-1`](#nomasx1-audit-trail-rebuild-values-1).

| Étape | Appelable |
|---|---|
| `AUDIT_TRAIL_PURGE_VALUES` | `nomasx1.audit_trail:j_audit_trail_purge_values` |

**Paramètres** — forme standard, plus :

| Paramètre | Défaut | Signification |
|---|---|---|
| `older_than_days` | `0` | `0` ou moins : supprime toutes les valeurs de l'application. Plus de `0` : supprime seulement les valeurs dont l'instruction date de plus de ce nombre de jours. |
| `table` | `""` | Limite la purge à une table. Vide : toutes les tables. |

Enregistre le nombre de lignes de valeurs supprimées.

**Quand l'exécuter** — à la demande, quand la table des valeurs devient trop volumineuse. Non planifiée.

---

### `nomasx1-audit-trail-rebuild-values-1` \{#nomasx1-audit-trail-rebuild-values-1\}

**Reconstruction des valeurs de l'audit trail d'une table sur une période**, par une nouvelle analyse des instructions conservées dans `AUDIT_TRAIL_QUERY` — après une purge, quand l'analyse au niveau des valeurs redevient nécessaire. Les colonnes auditées définies par table sont respectées : les valeurs reconstruites sont celles qu'aurait écrites la capture en direct.

| Étape | Appelable |
|---|---|
| `AUDIT_TRAIL_REBUILD_VALUES` | `nomasx1.audit_trail:j_audit_trail_rebuild_values` |

**Paramètres** — forme standard, plus :

| Paramètre | Défaut | Signification |
|---|---|---|
| `table` | `""` | La table à reconstruire. Vide : toutes les tables. |
| `date_from`, `date_to` | `""` | La période, `AAAA-MM-JJ`, date de fin incluse. Vide : sans borne. |
| `replace` | `true` | Efface d'abord les valeurs de la fenêtre, pour qu'une seconde exécution donne le même résultat. |

Enregistre le nombre de lignes de valeurs écrites.

**Quand l'exécuter** — à la demande, après une purge. Non planifiée.

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

### `nomasx1-xref-dump-object-1` \{#nomasx1-xref-dump-object-1\}

**Diagnostic : extraction de la définition brute d'un objet JD Edwards.** Écrit dans des fichiers le XML OMW décompressé des écrans de l'objet (F98751) et les textes qu'ils référencent (F98750), pour en examiner la structure brute — par exemple un onglet ou un identifiant de contrôle manquant. En lecture seule : rien n'est écrit dans la base cible.

| Étape | Appelable |
|---|---|
| `JDE_XREF_DUMP_OBJECT` | `nomasx1.xref:j_jde_xref_dump_object` |

**Paramètres** — forme standard, plus :

| Paramètre | Défaut | Signification |
|---|---|---|
| `object_id` | `P01012` | L'objet à extraire — à renseigner dans *Exécuter avec des paramètres*. |
| `output_dir` | `""` | Le dossier des fichiers. Vide : un dossier temporaire sur le serveur. |

**Quand l'exécuter** — à la demande, pour analyser un manque dans les références croisées. Non planifiée.

---

### `config-versions-purge` \{#config-versions-purge\}

**Purge des anciennes versions de configuration** conservées par l'[historique de configuration](../framework/configuration/config-history.md) — instantanés de fichiers et lots d'écrans. Pour chaque fichier, une version est supprimée quand elle dépasse les 20 plus récentes ou date de plus de 90 jours ; la version la plus récente de chaque fichier est toujours conservée, l'historique ne se vide donc jamais.

| Étape | Appelable |
|---|---|
| `purge` | `liberty.jobs.maintenance:purge_config_versions` |

**Arguments de l'étape** — `max_versions = 20`, `max_age_days = 90` ; `0` ou moins désactive la règle correspondante.

Enregistre le nombre de versions supprimées. Deux tentatives au total en cas d'échec.

**Planification** — **activée**, tous les jours à 3 h (Europe/Paris).

---

## Conseils de planification

Un rythme type sur une installation active :

| Heure | Tâche |
|---|---|
| 02:30 | `nomajde-daily-sync` (planification livrée). |
| 03:00 | `nomasx1-collect-all`, préréglage *Security and SoD*, toutes les applications. |
| Dimanche 04:00 | `nomasx1-collect-all`, préréglage *Licences*. |
| Le 1er du mois à 06:00 | Les deux tâches de rapport. |

L'audit trail (`nomasx1-audit-trail-1`) s'exécute en général toutes les 15 à 60 minutes — un rythme distinct de la collecte.

Les tâches livrées sont **enabled = false** par défaut. Définir une planification dans l'éditeur de tâche, sur la tâche ou sur un préréglage, puis activer la tâche depuis sa ligne de la page des Tâches. Les principales — la collecte, les deux rapports, la synchronisation JD Edwards — figurent en tête de liste, dans **Tâches principales**.

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| Une tâche livrée dont les étapes ont été modifiées n'est pas mise à jour par le nouveau wheel. | La mise à jour la signale comme conservée. | Planifications, préréglages, alertes et valeurs des paramètres survivent d'eux-mêmes à une mise à jour ; garder les étapes telles que livrées, ou marquer la tâche `override = true` — voir [Déployer les applications préfabriquées](../installation/deploy-prebuilt-apps.md#merge). |
| Une tâche de collecte échoue avec `No module named 'nomasx1'`. | Le code du plugin n'est pas dans le chemin des plugins du framework. | Exécuter `liberty-apps install --target $LIBERTY_APPS_DIR` pour matérialiser la charge ; recharger le framework. |
| `nomasx1-import-reference` échoue avec *« target application not found »*. | Application non créée dans *Nomasx-1 → Paramètres → Global → Applications*. | Créer d'abord l'application dans l'interface ; le pré-contrôle refuse de démarrer sinon. |
| `deploy-databases` produit une erreur de droits refusés. | Le pool `default` ne peut créer ni bases, ni rôles. | Pointer temporairement `default` sur un superutilisateur Postgres ; revenir en arrière après l'exécution. |
| Planification définie mais la tâche ne se déclenche pas. | La tâche est désactivée (le bundle livre `enabled = false`). | L'activer depuis sa ligne de la page des Tâches, une fois la planification définie. |
| La synchronisation quotidienne s'exécute mais les tables Nomajde restent vides. | Le connecteur `jdedwards` n'est pas configuré (la tâche s'exécute silencieusement sur zéro ligne). | *Liberty Next → Construire → Connecteurs → jdedwards* — tester la connexion depuis l'interface avant la prochaine exécution. |
| L'audit trail commence à produire des milliers de lignes par minute. | La tâche a démarré au SCN 0 — relecture de l'intégralité du journal d'archive. | Exécuter `nomasx1-audit-trail-reset-scn-1` (valeur par défaut `scn = 0` → la prochaine exécution reprend sur le SCN courant) pour repartir à neuf. |
| Les vues matérialisées affichent des données obsolètes après une correction SQL manuelle. | L'étape REFRESH_VIEWS de fin de chaîne de la tâche de collecte ne s'est pas exécutée (vous l'avez court-circuitée). | Exécuter `nomasx1-refresh-views` manuellement. |

---

## Pour la suite

- [Déployer les applications préfabriquées](../installation/deploy-prebuilt-apps.md) — comment le bundle parvient à l'installation au départ.
- [Nomaflow → Tâches → Catalogue](./jobs/catalog.md) — la page des Tâches : activation des planifications, exécution à la demande, *Exécuter avec des paramètres*.
- [Nomaflow → Exécutions → Historique](./runs/history.md) — la page de détail par exécution où atterrissent les sorties des tâches livrées.
- [Nomaflow → Python personnalisé](./custom-python.md) — comment écrire vos propres appelables aux côtés de ceux livrés dans `nomasx1.*`.
