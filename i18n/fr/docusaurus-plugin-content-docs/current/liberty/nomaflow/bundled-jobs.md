---
title: Tâches livrées
description: "Le catalogue de tâches Nomaflow fourni avec le wheel liberty-apps — tâches d'installation, de préchargement, de synchronisation, de collecte, de rapport et d'audit qui pilotent Nomasx-1 et Nomajde sans qu'aucune ligne de TOML ne soit écrite par l'opérateur. Lancement depuis Nomaflow → Exploitation → Tâches → Exécuter, planification via le planificateur standard ou déclenchement depuis la CI."
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

<svg viewBox="0 0 1320 448" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfbj-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfbj-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfbj-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfbj-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="408" rx="14" fill="url(#nfbj-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">nomaflow — tâches ETL planifiées</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="108" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">☆</text>
  <text x="284" y="108" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches principales</text>
  <text x="394.8" y="108" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">4</text>
  <rect x="240" y="118" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="137" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomajde-daily-sync</text>
  <text x="440" y="137" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Synchro quotidienne des tables de contrôle JDE</text>
  <text x="660" y="137" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="137" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">30 2 ∗ ∗ ∗</text>
  <rect x="860" y="124" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="137" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="137" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="148" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="167" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-collect-all</text>
  <text x="440" y="167" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Collecter tout pour une application</text>
  <text x="660" y="167" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="167" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="860" y="154" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="166.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="167" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="167" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="178" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="197" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-report-licences</text>
  <text x="440" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Rapport mensuel d'audit des licences (PDF)</text>
  <text x="660" y="197" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="197" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <rect x="860" y="184" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="196.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="197" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="197" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="208" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="227" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">nomasx1-report-security-sox</text>
  <text x="440" y="227" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Évaluation mensuelle sécurité et SoD (PDF)</text>
  <text x="660" y="227" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="227" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 6 1 ∗ ∗</text>
  <rect x="860" y="214" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="226.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="227" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="227" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="248" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="268" y="266" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">nomasx1</text>
  <text x="317.2" y="266" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">15</text>
  <rect x="240" y="284" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="302" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="268" y="302" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">nomajde</text>
  <text x="317.2" y="302" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">9</text>
  <rect x="240" y="320" width="840" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="338" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="268" y="338" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Framework</text>
  <text x="328.4" y="338" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">2</text>
  <rect x="240" y="348" width="840" height="30" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="367" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">config-versions-purge</text>
  <text x="440" y="367" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Purger les anciennes versions de configuration</text>
  <rect x="658" y="355" width="58" height="16" rx="3" fill="#4ade80" fillOpacity="0.12" stroke="#4ade80" strokeOpacity="0.55" strokeWidth="1"/>
  <text x="687.0" y="366.5" fill="#4ade80" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SUCCEEDED</text>
  <text x="750" y="367" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">0 3 ∗ ∗ ∗</text>
  <rect x="860" y="354" width="72" height="18" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="896" y="366.5" fill="#4a9eff" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">activée</text>
  <text x="942" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="367" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="367" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="240" y="378" width="840" height="30" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="397" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">deploy-databases</text>
  <text x="440" y="397" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Création des bases au premier déploiement</text>
  <text x="660" y="397" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">—</text>
  <text x="750" y="397" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="860" y="384" width="72" height="18" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="896" y="396.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="ui-monospace, monospace">désactivée</text>
  <text x="942" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▶</text>
  <text x="966" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <text x="990" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="1014" y="397" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩</text>
  <text x="1038" y="397" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tâches livrées</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issues du paquet liberty-apps</text>
  <line x1="200" y1="117.0" x2="252" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un groupe par application</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Nomasx-1, Nomajde, démo…</text>
  <line x1="200" y1="247.0" x2="240" y2="298" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Désactivées</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à activer une fois l'installation prête</text>
  <line x1="1120" y1="127.0" x2="932" y2="135" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre Exécuter avec des paramètres</text>
  <line x1="1120" y1="227.0" x2="942" y2="165" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une tâche du framework, active</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">config-versions-purge, 03:00</text>
  <line x1="1120" y1="317.0" x2="896" y2="363" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfbj-arrow)"/>
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
| `target_connector` | `nomasx1` | Connecteur d'**écriture**. À surcharger pour une installation parallèle (`nomasx1-clone`). |
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

**Mise en place unique d'un déploiement Nomasx-1 parallèle.** Clone la configuration de l'application `nomasx1` existante sous un nouveau nom (`nomasx1-clone`) — refuse si la cible existe déjà — et crée le schéma Nomasx-1 sur la base de cette application clonée. Sert à l'hébergement multi-tenant (une installation Liberty servant deux jeux de données client indépendants).

| Étape | Appelable |
|---|---|
| `clone-app` | `liberty.web.clone:clone_app_step` — duplique les écrans, menus et liaisons de connecteur de l'application source sous le nouveau nom et le nouveau pool. |
| `init-schema` | `nomasx1.db:init_schema` — bootstrap du schéma sur la nouvelle base. |

**Paramètres**

| Clé | Défaut | Description |
|---|---|---|
| `source_app` | `nomasx1` | Application à cloner. |
| `new_app` | `nomasx1-clone` | Nom de la nouvelle application. Deviendra le nom du menu, des écrans et du connecteur. |
| `new_pool` | `nomasx1-clone` | Nom du nouveau pool à câbler sous le connecteur cloné. |
| `target_connector` *(étape init-schema)* | `nomasx1-clone` | Le connecteur de l'application clonée : à garder identique à `new_app`. |

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

**Quand l'exécuter** — la mise à niveau du serveur (`./liberty upgrade`, ou `liberty-admin migrate` — voir la [CLI](../references/cli.md)) applique les mêmes migrations après chaque mise à niveau du framework ou des applications ; la tâche permet de les lancer depuis Nomaflow, par exemple quand une version ajoute une table comme l'inventaire des objets définis par l'utilisateur. À combiner avec une sauvegarde de la base ; les migrations ne vont que dans un sens.

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

**Crée ou remet en état les rôles prédéfinis de Nomasx-1, tels que livrés.** Les quatre mêmes rôles s'ajoutent aussi un par un dans Accès → Rôles → *Ajouter un rôle prédéfini…* (voir [Rôles prédéfinis](../framework/build/secure/roles-and-permissions.md#predefined)). Une nouvelle exécution rend ses droits d'origine à un rôle modifié dans Accès ; les utilisateurs ne sont pas modifiés.

| Rôle | Accorde |
|---|---|
| `nomasx1_auditor` | *Auditeur* — lit tout et lance les deux rapports d'audit ; les rapports mensuels lui sont envoyés. Ne modifie aucun réglage. |
| `nomasx1_security_officer` | *Responsable sécurité* — sécurité et séparation des tâches en lecture et modification, avec leurs réglages, la collecte de la sécurité et son rapport ; le reste en lecture. |
| `nomasx1_licence_manager` | *Gestionnaire des licences* — licences et base de données en lecture et modification, avec les réglages des licences, la collecte des licences et son rapport ; le reste en lecture. |
| `nomasx1_admin` | *Administrateur* — tout dans l'application, réglages compris ; la tâche lui donne en plus toutes les tâches `nomasx1-*`. |

À lancer une fois après l'installation ; attribuer ensuite les rôles aux utilisateurs dans **Liberty Next → Administrer → Accès**. Peut être relancée sans risque ; livrée désactivée.

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

## Tâches de supervision et AIS de JD Edwards \{#nomajde-jde\}

Ces tâches s'adressent directement aux serveurs JD Edwards : Server Manager pour la santé des instances, le serveur AIS pour les états et les données.

### `nomajde-jde-health` \{#nomajde-jde-health\}

**Contrôle de santé des serveurs JD Edwards au travers de Server Manager.** L'étape `nomajde.monitoring:health_check` demande les instances au connecteur API `jde_server_manager` (`instancesinfo`), lance le contrôle de santé de Server Manager (`health`) sur chaque serveur enterprise, web et REST démarré, puis écrit une ligne par instance dans la table `jde_health` de la base Nomajde. Ces lignes alimentent [Supervision → Contrôle de santé JDE](../nomajde/monitoring/jde-servers.md) et les tuiles de la vue d'ensemble.

| Paramètre | Valeur par défaut | Rôle |
|---|---|---|
| `checks` | `UBE, BSFN, Port Test, Login, Interactive App, OVR` | Les contrôles de Server Manager pris en compte ; vide = tous. |
| `groups` | vide | JSON `{"<hôte>-<serveur enterprise>": ["<hôte>-<instance>", …]}` — un serveur enterprise arrêté ou en mauvaise santé met ses instances en échec sans les contrôler ; une fois renseigné, seules les instances citées sont suivies. |
| `auto_stop` | `false` | Arrête une instance démarrée en échec (`stopinstance`), ainsi que les instances démarrées d'un serveur enterprise en échec. |
| `keep_days` | `30` | Les lignes plus anciennes sont supprimées à chaque exécution. |

**Planification** — `*/5 * * * *` (Europe/Paris), `enabled = false` : renseigner l'adresse de Server Manager avec son compte (`jde_admin`) et son mot de passe dans le pool `jde_server_manager`, sous **Liberty Next → Administrer → Pools**, puis activer la tâche. *Nomajde → Tâches → Vérifier les serveurs JDE* la lance à la demande.

**Alertes** — l'exécution échoue dès qu'une instance n'a pas réussi ses contrôles (`failed`, `down` ou `error`), après l'écriture des lignes ; les alertes `on_failure` sont actives.

---

### `nomajde-platform-reading` \{#nomajde-platform-reading\}

**Lecture anticipée de la plateforme.** Chaque étape exécute une lecture de la [Synthèse de la plateforme](../nomajde/synthesis.md) ou de l'une de ses pages et en conserve la réponse : ces pages s'ouvrent aussitôt, avec l'heure de la lecture ; leur bouton *Relire* interroge toujours la plateforme en direct. Étapes : `ARCHITECTURE`, `SERVERS`, `PERFORMANCE`, `DATABASE_INSTANCE`, `DATABASE_TABLESPACES`, `DATABASE_REDO`, `DATABASE_ACTIVITY`, `DATABASE_SESSIONS`, `DATABASE_OBJECTS`, `DATABASE_SIZE`, `CAPACITY` (30 jours), `HISTORY` (90 jours), `SIZES`, `PROPOSALS`. L'échec d'une étape n'interrompt pas les suivantes. Lecture seule côté JD Edwards.

**Planification** — `0 6 * * *` (Europe/Paris), `enabled = false` : l'activer évite toute attente à la première personne qui ouvre ces pages le matin.

---

### `nomajde-ais-report` \{#nomajde-ais-report\}

**Lancement d'un état JD Edwards (UBE) au travers d'AIS, avec attente de sa fin.** Étape `nomajde.ais_steps:j_ais_report` sur le connecteur `ais_connection`.

| Paramètre | Valeur par défaut | Rôle |
|---|---|---|
| `report` | — | L'état à lancer, par exemple `R0010P`. Demandé au lancement, obligatoire. |
| `version` | `XJDE0001` | La version. |
| `queue` | vide | La file d'attente ; vide = la file par défaut. |
| `po_values` | vide | Les options de traitement par identifiant, en JSON : `{"1": "20261029"}` (dates au format `yyyyMMdd`). |
| `wait` | `true` | Attend la fin de l'état. |
| `timeout_seconds` | `3600` | L'exécution échoue si l'état est toujours en cours au-delà de ce délai. |

L'exécution échoue si l'état se termine en erreur. Le journal indique le numéro de travail, le serveur et le statut final. La tâche se lance à la main avec **Exécuter avec des paramètres**, ou se copie avec des paramètres fixes et une planification.

---

### `nomajde-ais-export` \{#nomajde-ais-export\}

**Export d'une table ou d'une vue métier JD Edwards dans un fichier xlsx.** L'étape `nomajde.ais_steps:j_ais_export` parcourt la table ou la vue au travers d'AIS et écrit `<exécution>-<nom>.xlsx` parmi les fichiers de l'exécution, avec les titres de colonnes d'AIS en en-tête. Le fichier se télécharge depuis le détail de l'exécution, et une étape `send` l'envoie à la personne qui a lancé l'exécution — dans le portail, et par e-mail si le compte a une adresse. Une exécution planifiée n'a pas de demandeur : ajouter alors des destinataires à l'étape `send`.

| Paramètre | Valeur par défaut | Rôle |
|---|---|---|
| `table` / `view` | — | La table (`F0101`) ou la vue métier à exporter — l'une des deux. |
| `columns` | vide | Les éléments de données séparés par des virgules (`AN8, ALPH` ; `F4102.LITM` pour une colonne de vue) ; vide = toutes les colonnes. |
| `conditions` | vide | En JSON : `{"AT1": "C"}` (égalité) ou `[["AN8", ">=", 500]]`. |
| `max_rows` | `5000` | Le nombre maximal de lignes ; `0` = sans limite. Le journal signale quand JD Edwards contient davantage de lignes. |
| `filename` | vide | Le nom du fichier ; vide = le nom de la table ou de la vue. |

---

### Les étapes AIS \{#ais-steps\}

Les points d'entrée de `nomajde.ais_steps` figurent dans le sélecteur de fonctions d'une étape `python` de l'éditeur de tâches, et dans la liste de l'action d'écran `call_plugin`. Tous utilisent le connecteur `ais_connection`.

| Point d'entrée | Rôle |
|---|---|
| `j_ais_report` | Lance un état / version, sur une file d'attente, avec des options de traitement ; attend sa fin. |
| `j_ais_export` | Exporte une table ou une vue dans un fichier xlsx de l'exécution. |
| `j_ais_count` | Compte les lignes d'une table ou d'une vue qui répondent aux conditions. |
| `j_ais_bsfn` | Appelle une fonction métier avec ses paramètres ; renvoie ses valeurs de sortie. |
| `j_ais_orchestration` | Exécute une orchestration avec ses entrées ; renvoie sa réponse. |
| `j_ais_scheduler` | Démarre ou arrête le planificateur JD Edwards d'un environnement (`action = start` / `stop`). |
| `j_ais_form_flow` | Enchaîne des étapes sur des formulaires JD Edwards dans une même session : la première ouvre un formulaire, les suivantes agissent sur ce formulaire ou sur celui du dessus ; `{{name}}` dans une étape est remplacé par la valeur de `values`. Renvoie les champs et les lignes du dernier formulaire, et l'état après chaque étape. |
| `j_ais_grid_row` | Ajoute, modifie ou supprime **une** ligne de la grille d'un formulaire (`operation = add` / `change` / `delete`). La ligne est d'abord recherchée (`find`, sur la ligne de filtre) : rien n'est fait si la recherche ne trouve pas exactement une ligne — aucune, pour un ajout. `cells` donne les valeurs de la grille ; les boutons sont les identifiants de contrôle du formulaire. |
| `j_ais_record` | Ajoute, modifie ou supprime **un** enregistrement d'une application dont la liste ouvre un autre formulaire de saisie : l'enregistrement est trouvé dans le formulaire de liste, ouvert par son bouton, puis `edit_form` est rempli (`fields`) et enregistré. Rien n'est fait si la recherche ne trouve pas exactement un enregistrement ; `on_warning = refuse` n'enregistre rien en cas d'avertissement. |
| `j_ais_tests` | Joue une suite de tests de non-régression — l'étape de la tâche [`nomajde-jde-tests`](#nomajde-jde-tests). |

Conditions, options de traitement, paramètres, entrées, étapes et valeurs de champs se donnent sous forme de tables TOML dans la tâche, ou de texte JSON quand ils sont saisis dans **Exécuter avec des paramètres** ou dans les paramètres d'une action. Un texte vide signifie *non renseigné*. En cas d'erreur AIS, l'étape échoue avec le message d'AIS lui-même.

---

### `nomajde-jde-tests` \{#nomajde-jde-tests\}

**Joue une suite de tests sur JD Edwards** et échoue quand un cas échoue ou diffère de la référence. Étape `tests` — `nomajde.ais_steps:j_ais_tests`, par le connecteur propre à la suite : `ais_connection` pour les suites AIS, `jde_security` pour la suite de sécurité.

| Paramètre | Défaut | Rôle |
|---|---|---|
| `suite` | `smoke` | La suite à jouer — une liste des suites dans **Exécuter avec des paramètres**. |
| `mode` | `compare` | `compare` avec la référence, ou `record` pour l'enregistrer. |
| `only` | vide | Seulement ces cas (identifiants séparés par des virgules) ; vide = tous. |
| `allow_writes` | `no` | `yes` joue les cas qui écrivent dans JD Edwards ; sinon ils sont ignorés. |
| `fail_on_change` | `true` | Un cas qui diffère de la référence fait échouer l'exécution. |

Livrée désactivée, sans planification. Voir [Nomajde → Tests](../nomajde/tests.md#job).

---

### `nomajde-upgrade-load-release` et `nomajde-upgrade-collect` \{#nomajde-upgrade\}

Les deux étapes de l'[analyse de montée de version](../nomajde/upgrade/analysis.md#steps) ; JD Edwards est seulement lu.

| Tâche | Étapes | Rôle |
|---|---|---|
| `nomajde-upgrade-load-release` | `tables` (crée les tables absentes), `load` (`file_load`), `dates` | Charge la liste des objets d'une release ou d'une mise à jour publiée par Oracle — le fichier Excel d'Oracle — sous un nom (`release`, par exemple `UN9`). Une liste rechargée sous le même nom remplace la précédente. Le fichier est fourni au lancement. |
| `nomajde-upgrade-collect` | `collect` | Lit les objets du client sur un path code, les compare à une liste d'objets et indique ce qu'il faut reprendre, avec la difficulté et le nombre de jours. Les décisions prises sur un objet sont conservées d'une exécution à l'autre. |

Paramètres de `nomajde-upgrade-collect` :

| Paramètre | Défaut | Dans **Exécuter avec des paramètres** | Rôle |
|---|---|---|---|
| `path_code` | `PD920` | *Path code de départ de la montée de version* | Le path code lu. |
| `release` | vide | *Liste d'objets à comparer (son nom ; vide = aucune)* | La liste d'objets chargée par `nomajde-upgrade-load-release`. |
| `current_release` | vide | *Liste d'objets déjà en place chez le client (optionnel : seul ce qui a changé après compte)* | Un objet ne compte alors comme modifié que si Oracle l'a changé après cette liste. |
| `central_objects` | vide | *Schéma des objets centraux, s'il diffère de celui du pool (PD920)* | Le schéma des objets centraux du path code. |
| `nomasx1_apps_id` | vide | *JDE de nomasx1 à lire : utilisation conservée, références croisées, UDO (vide : le seul)* | L'application Nomasx-1 qui porte le même JD Edwards — utile seulement quand Nomasx-1 en contient plusieurs. |
| `nomasx1_connector` | `nomasx1` | — | La base Nomasx-1 ; vide = Nomasx-1 n'est pas lu. |
| `usage` | `true` | — | La dernière utilisation d'un objet est la plus récente connue d'Object Usage Tracking, des travaux soumis et de l'utilisation conservée par Nomasx-1. |
| `cross_reference` | `true` | — | Les liens entre les objets du client viennent des références croisées de JD Edwards **et** de celles que construit Nomasx-1 ([`nomasx1-xref`](#nomasx1-xref)). |
| `udos` | `true` | — | Les objets définis par l'utilisateur (UDO) posés sur un objet touché par la montée de version, ou qui l'utilisent, sont listés et comptés sur chaque objet — l'inventaire écrit par l'étape `JDE_UDO` de Nomasx-1. |

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
| Références croisées | `JDE_XREF_APPS`, `JDE_XREF_REPORTS`, `JDE_XREF_SPECS` — applications, états, vues métier | Non |
| Objets définis par l'utilisateur | `JDE_UDO` — l'inventaire des objets définis par l'utilisateur (F9860W, F9861W) et ce que chacun nomme — pages composites, pages E1, orchestrations et leurs étapes, demandes de service, notifications, dispositions CafeOne, états One View, recherches, processus, extensions d'écran, listes de surveillance ; demande **JDE_UDO_OL** dans *Paramètres → Global → JD Edwards* | Non |
| Vues | `REFRESH_VIEWS` | Oui |
| Réponses conservées | `KEEP_SOD_REVIEW`, `KEEP_WHAT_TO_FIX`, `KEEP_LICENSING_REVIEW` — préparent les réponses de la [Revue de la séparation des tâches](../nomasx1/sod-review.md), de la page [À corriger](../nomasx1/security-analysis.md) et de la [Revue des licences](../nomasx1/licensing-review.md), qui s'ouvrent ainsi aussitôt ; leur échec ne fait jamais échouer la collecte | Oui |

**Préréglages**

| Préréglage | Exécute |
|---|---|
| **Security and SoD** | La sécurité et la séparation des tâches — les étapes de licences et d'OUT désactivées. |
| **Licences** | Les licences et l'OUT — les étapes de sécurité et de SoD désactivées. |
| **Everything** | Toutes les étapes, y compris l'annuaire, le journal d'activité, la base et les références croisées des applications (`JDE_XREF_APPS`) ; les autres étapes de références croisées et `JDE_UDO` restent désactivées — la tâche [`nomasx1-xref`](#nomasx1-xref) les exécute. |

**Pages composites et pages E1** — pour les applications cochées *E1 Composite* / *E1 Pages*, `SECURITY_MENUS` lit tout ce qu'une page composite ou une page E1 permet d'exécuter : l'application ou l'état qu'ouvre une tuile, les formulaires affichés dans ses volets, les tâches placées sous le menu d'une page d'accueil, les applications et les états cités par le code d'une page E1. Ces chemins d'accès comptent dans les droits, la séparation des tâches et les chiffres de licences de la collecte.

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

### `nomasx1-xref` et `nomasx1-xref-object` \{#nomasx1-xref\}

**Les références croisées des objets JD Edwards** — applications, rapports, vues, tables, structures, fonctions, règles d'événement — écrites dans la base de Nomasx-1.

| Tâche | Étapes | Rôle |
|---|---|---|
| `nomasx1-xref` | `JDE_XREF_APPS`, `JDE_XREF_REPORTS`, `JDE_XREF_SPECS`, `JDE_UDO` | Construit les références croisées : ce que JD Edwards a modifié depuis la dernière exécution (`object_id = changed`, par défaut) ou tout (`all`). |
| `nomasx1-xref-object` | `JDE_XREF_OBJECT` | Relit un seul objet (`object_id`, obligatoire : `P01012`, `R0006P`, `F0101`…) — quelques secondes. |

Les deux demandent la source JD Edwards (`apps_id`, une liste des applications de Nomasx-1) dans **Exécuter avec des paramètres**. Livrées désactivées, sans planification.

---

### `nomajde-dictionary-refresh` \{#nomajde-dictionary-refresh\}

**Crée les entrées de dictionnaire qui manquent aux modèles d'exploration de Nomajde**, à partir du dictionnaire de données JD Edwards (description, type, décimales, table UDC associée), une lecture par table ; les connecteurs sont reconstruits à la fin pour que les libellés s'affichent aussitôt. `models` (une liste des modèles ; vide = tous) limite le traitement. Étape `refresh` — `liberty.jobs.dictionary:refresh_model_dictionary`.

---

### Les tâches de la démo des ventes \{#nomademo\}

Les tâches `nomademo-*` (création des tables, chargement des fichiers d'articles, de sociétés et de ventes, rafraîchissement des périodes, chargement des fichiers d'exemple, création des comptes de démonstration, rapport mensuel) servent l'application de démonstration — voir [La démo des ventes](../framework/demo-app.md#loads).

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

La taille des versions conservées, un aperçu à blanc de ce que la tâche supprimerait et une purge immédiate se trouvent dans [Surveillance → Rétention](../monitoring/retention.md#stores), avec les autres stockages du serveur.

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
| La synchronisation quotidienne s'exécute mais les tables Nomajde restent vides. | Le connecteur `jdedwards` n'est pas configuré (la tâche s'exécute silencieusement sur zéro ligne). | *Liberty Next → Données → Connecteurs → jdedwards* — tester la connexion depuis l'interface avant la prochaine exécution. |
| L'audit trail commence à produire des milliers de lignes par minute. | La tâche a démarré au SCN 0 — relecture de l'intégralité du journal d'archive. | Exécuter `nomasx1-audit-trail-reset-scn-1` (valeur par défaut `scn = 0` → la prochaine exécution reprend sur le SCN courant) pour repartir à neuf. |
| Les vues matérialisées affichent des données obsolètes après une correction SQL manuelle. | L'étape REFRESH_VIEWS de fin de chaîne de la tâche de collecte ne s'est pas exécutée (vous l'avez court-circuitée). | Exécuter `nomasx1-refresh-views` manuellement. |

---

## Pour la suite

- [Déployer les applications préfabriquées](../installation/deploy-prebuilt-apps.md) — comment le bundle parvient à l'installation au départ.
- [Nomaflow → Tâches → Catalogue](./jobs/catalog.md) — la page des Tâches : activation des planifications, exécution à la demande, *Exécuter avec des paramètres*.
- [Nomaflow → Exécutions → Historique](./runs/history.md) — la page de détail par exécution où atterrissent les sorties des tâches livrées.
- [Nomaflow → Python personnalisé](./custom-python.md) — comment écrire vos propres appelables aux côtés de ceux livrés dans `nomasx1.*`.
