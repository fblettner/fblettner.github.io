---
title: Cas d'usage
description: "Ce que les équipes construisent avec Liberty Next — applications d'administration sur des tables existantes, tableaux de bord, interface sur la base d'un ERP, tâches d'intégration et de chargement, workflows à formulaires conditionnels — avec ce que fournit le framework, ce qui reste à configurer, et les cas où un autre outil convient mieux."
keywords: [Liberty Next, cas d'usage, applications d'administration, tableaux de bord, ERP, JD Edwards, intégration, ETL, workflow, Nomaflow, exemples]
---

# Cas d'usage

Liberty Next assemble quelques briques — connecteurs et requêtes, écrans, menus, tableaux de bord, tâches, rôles — configurées depuis les Paramètres. Cette page présente ce que les équipes construisent avec elles, ce sur quoi chaque cas s'appuie et le point de départ conseillé.

La démarche reste toujours la même : **connecter la base, écrire les requêtes, construire les écrans, organiser le menu, définir les rôles**.

---

## 1. Applications d'administration sur des tables existantes \{#admin\}

Une base de données (clients, produits, contrats, tickets…) et une équipe qui doit la consulter, la filtrer, la modifier et l'exporter.

| Fourni | Référence |
|---|---|
| Grille avec tri, filtres, regroupement et vues enregistrées | [Écrans](./build/screens/overview.md), [Vues de grille enregistrées](./saved-views.md) |
| Dialogue de modification avec onglets, listes de valeurs, champs conditionnels | [Constructeur de dialogue](./build/screens/dialog-builder.md), [Conditions de formulaire](./form-conditions.md) |
| Ajout, modification, suppression, dans le dialogue ou dans la grille, avec import Excel / CSV | [Écrans](./build/screens/overview.md) |
| Export Excel | [Export Excel](./cookbook/excel-export.md) |
| Colonnes d'audit renseignées par le serveur (`LOGIN`, `SYSDATE`) et table d'historique (`audit_table`) | [Dictionnaire](./dictionary.md#rules), [Piste d'audit](./cookbook/audit-trail.md) |
| Verrous d'enregistrement : deux utilisateurs ne modifient pas la même ligne en même temps | [La page Surveillance](../monitoring/dashboard.md) |
| Interface en anglais et en français, libellés traduits | [Internationalisation](./apps/i18n.md) |

**À configurer** : le pool, les requêtes (l'assistant CRUD les écrit à partir d'une table), les écrans et le menu. L'essentiel du temps va au SQL.

**Point de départ** : [Tutoriel — Construire un CRM](./tutorial-crm/01-setup.md), ou [CRUD sur une table existante](./cookbook/crud-existing-table.md) pour un seul écran.

---

## 2. Tableaux de bord \{#dashboards\}

| Fourni | Référence |
|---|---|
| Widgets indicateur, graphique (barres, courbe, aire, camembert) et table sur une grille de 12 colonnes | [Tableaux de bord](./dashboards.md), [Graphiques](./charts.md) |
| Une période avec préréglages, et l'évolution par rapport à la période précédente | [Tableaux de bord](./dashboards.md) |
| Des filtres issus du dictionnaire, communs à tous les widgets | [Tableaux de bord](./dashboards.md) |
| Un cache, avec un bouton **Actualiser** | [Tableaux de bord](./dashboards.md) |
| L'analyse libre par les utilisateurs eux-mêmes — tableau croisé, graphiques, descente, champs calculés, analyses enregistrées, export Excel / PDF | [Explorateur de données](./explorer/overview.md) |

**À configurer** : les requêtes d'agrégation (en général un `GROUP BY` sur la période), puis les widgets.

**Point de départ** : [Tutoriel CRM — Tableau de bord](./tutorial-crm/04-dashboard.md).

---

## 3. Une interface sur la base d'un ERP \{#erp\}

Une interface plus rapide pour les utilisateurs d'un ERP, qui lit et écrit sa base sans modifier l'ERP.

| Fourni | Référence |
|---|---|
| Pools Oracle, SQL Server et PostgreSQL ; mode thick Oracle pour les serveurs anciens | [Connecteurs](./connectors.md#oracle-thick) |
| Une même application sur plusieurs environnements (développement, recette, production) grâce au sélecteur **Pool** | [Connecteurs multi-pools](./connectors.md#multi-pool) |
| Conventions JD Edwards : dates juliennes, codes cadrés à droite, reprise du dictionnaire de données | [Dictionnaire](./dictionary.md#formats), [Analyser une table](./dictionary.md#scan-a-table) |
| Écrans en lecture seule, écriture activée écran par écran | [Écrans](./build/screens/overview.md) |

Pour JD Edwards, les applications prêtes à l'emploi couvrent les besoins courants : [Nomajde](../nomajde/overview.md) pour l'administration et les données de base, [Nomasx-1](../nomasx1/overview.md) pour l'analyse de la sécurité de toute application connectée. Pour un autre ERP, le [tutoriel CRM](./tutorial-crm/01-setup.md) montre la démarche : faire pointer le pool sur la base et écrire les requêtes.

---

## 4. Intégration et chargement de données \{#integration\}

[Nomaflow](../nomaflow/overview.md) exécute des tâches planifiées ou manuelles composées d'étapes.

| Fourni | Référence |
|---|---|
| Tâches planifiées par cron ou lancées à la main, avec nouvelles tentatives (attente fixe ou exponentielle) et délai maximal | [Planifications](../nomaflow/jobs/schedules.md), [Étapes](../nomaflow/steps.md#retry) |
| Étapes : requête SQL, copie SQL entre bases, chargement de fichier, appel HTTP, synchronisation LDAP, Python, appel d'une autre tâche | [Étapes](../nomaflow/steps.md) |
| Connecteurs API avec authentification Basic, Bearer, clé d'API ou OAuth2 | [Connecteurs](./connectors.md) |
| Historique par étape, journal en direct | [Historique des exécutions](../nomaflow/runs/history.md) |
| Notifications en cas d'échec, de succès ou de planification manquée — dans l'application, par e-mail ou par un connecteur | [Notifications](../nomaflow/notifications.md) |

**À configurer** : les connecteurs source et cible, puis les étapes de la tâche. Du Python seulement pour ce que les étapes ne savent pas exprimer — voir [Plugins](./apps/plugins.md).

**Point de départ** : [Prise en main de Nomaflow](../nomaflow/getting-started.md).

---

## 5. Applications ouvertes à des utilisateurs externes \{#portals\}

Une application ouverte à des utilisateurs extérieurs à l'équipe, chacun ne voyant que ses propres lignes.

| Fourni | Référence |
|---|---|
| Connexion par un fournisseur OpenID Connect | [Se connecter](./build/secure/sign-in.md), [Connexion OIDC](./cookbook/oidc-sso.md) |
| Rôles : menus, écrans et requêtes accessibles à chacun | [Rôles et permissions](./build/secure/roles-and-permissions.md) |
| Périmètre de données : lignes filtrées selon les attributs de l'utilisateur, appliqué par le serveur | [Accès par ligne](./cookbook/row-level-access.md) |
| Requêtes filtrées sur l'utilisateur connecté avec `{{LOGIN}}` | [Liaison de paramètres](./build/queries/parameter-binding.md#tokens) |
| Nom de l'application, couleurs et polices | Liberty Next → Administrer → Thème |

---

## 6. Workflows \{#workflow\}

Valider, refuser, relancer : une colonne de statut et des écrans qui s'y adaptent.

| Fourni | Référence |
|---|---|
| Champs affichés, obligatoires ou verrouillés selon le statut | [Conditions de formulaire](./form-conditions.md) |
| Lignes en lecture seule une fois clôturées (`editable_when`) | [Conditions de formulaire](./form-conditions.md#editable-when) |
| Boutons qui exécutent des requêtes, avec confirmation et saisie d'un motif | [Actions et cycle de vie](./build/screens/actions-and-lifecycle.md) |
| Notifications à l'écriture d'une ligne par un écran, ou depuis une action | [Notifications](../nomaflow/notifications.md) |
| Tâches de relance planifiées | [Nomaflow](../nomaflow/overview.md) |

**Point de départ** : [Formulaire multi-étapes / workflow](./cookbook/multi-step-form.md).

---

## Quand un autre outil convient mieux

- **Applications grand public.** L'interface grille-dialogue est conçue pour des opérateurs.
- **Applications pensées d'abord pour le mobile.** L'application fonctionne sur tablette mais vise un écran d'ordinateur.
- **Co-édition en temps réel.** Les verrous empêchent les modifications concurrentes ; il n'existe pas d'édition partagée en direct.
- **Écrans à mise en page unique** (tableau Kanban, diagramme de Gantt, carte) : le modèle grille-dialogue ne s'y prête pas.

Liberty Next convient quand **la plupart des écrans listent et modifient les données d'une base**, avec autour des tableaux de bord, des tâches et des intégrations.

---

## Par où commencer

| Objectif | Point de départ |
|---|---|
| Découvrir le framework sur un exemple complet | [Tutoriel — Construire un CRM](./tutorial-crm/01-setup.md) |
| Voir chaque fonction à l'œuvre sur des données réalistes | [La démo des ventes](./demo-app.md) |
| Construire rapidement un premier écran | [Première application pas à pas](./getting-started/first-app.md) |
| Administrer JD Edwards | [Nomajde](../nomajde/overview.md) |
| Installer le framework | [Installation — vue d'ensemble](../installation/overview.md) |
| Trouver comment faire une chose précise | Le cookbook, à commencer par [CRUD sur une table existante](./cookbook/crud-existing-table.md) |
