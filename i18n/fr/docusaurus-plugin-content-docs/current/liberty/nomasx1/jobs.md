---
title: Tâches
description: "Le dossier Tâches du menu de Nomasx-1 : collecter les données de sécurité et de séparation des tâches ou les données de licences d'une ou plusieurs applications, produire l'audit des licences et l'évaluation Sécurité & SoD puis les envoyer — à la demande avec un journal en direct, ou chaque mois selon une planification. Les quatre rôles prédéfinis."
keywords: [Nomasx-1, tâches, collecter la sécurité, séparation des tâches, collecter les licences, rapport d'audit des licences, rapport sécurité et SoD, rapport mensuel, plusieurs applications, rôles, auditeur]
---

# Tâches

Le dossier **Tâches**, en bas du menu de Nomasx-1, permet à l'équipe conformité de rafraîchir elle-même les données et de produire les rapports — avant une revue, après une série de modifications dans le système source — sans ouvrir Nomaflow. Chaque entrée ouvre la page de la tâche : les applications à traiter, **Lancer**, le journal suivi en direct, les exécutions précédentes avec leur auteur. Voir [Lancer une tâche depuis le menu d'une application](../nomaflow/jobs/run-from-menu.md).

---

## Les entrées \{#entries\}

| Entrée | Rôle |
|---|---|
| **Collecter la sécurité et la SoD** | Collecte les utilisateurs, rôles, affectations, menus et droits effectifs, puis calcule les conflits de séparation des tâches d'après la [matrice](./settings/sod/matrix.md) — tout ce qui figure sous **Sécurité**, **Applications** et dans le tableau de bord [Séparation des tâches](./sod-dashboard.md). |
| **Collecter les licences** | Collecte les salariés, les transactions des utilisateurs et l'Object Usage Tracking — la base de **Licences** et du modèle *Licence compliance* de l'[explorateur de données](./data-explorer.md). |
| **Rapport d'audit des licences** | Produit l'[audit des licences](./reports/audit-licences.md) en PDF et l'envoie aux auditeurs. |
| **Rapport sécurité et SoD** | Produit l'[évaluation Sécurité & SoD](./reports/security-sox.md) en PDF et l'envoie aux auditeurs. |

**Applications** — chaque entrée propose les applications en cases à cocher, avec **Tout** : la tâche s'exécute une fois par application cochée, l'une après l'autre. Les deux rapports demandent aussi la **langue**, `fr` ou `en`.

Après une collecte, **Dernière collecte** et la liste *Fraîcheur des données* de la [synthèse d'audit](./audit-synthesis.md) affichent la nouvelle date. Dans **Dernière collecte**, les lignes sont groupées par module, et un clic sur une ligne ouvre l'exécution qui l'a collectée.

:::info[Spécifique à JDE]
Les collectes fournies lisent JD Edwards EnterpriseOne. Une autre application livre ses utilisateurs, rôles, affectations, menus et droits par ses propres [requêtes personnalisées](./settings/global/custom-queries.md) — la séparation des tâches s'y applique alors aussi ; les collectes des licences restent propres à JD Edwards.

Les droits effectifs comprennent les chemins d'accès des objets définis par l'utilisateur (UDO) : une page composite donne les applications et états que ses tuiles ouvrent, les formulaires affichés dans ses volets et les tâches de son menu ; une page E1 donne les applications et états que son contenu appelle. Les autres objets définis par l'utilisateur — orchestrations, demandes de service, notifications… — ne donnent aucun chemin d'accès. Les droits, les conflits de séparation des tâches et les chiffres de licences qui en découlent tiennent compte de ces chemins. Les pages lues dépendent des indicateurs **E1 Composite** et **E1 Pages** de l'[application](./settings/global/applications.md) : en activer ou en désactiver un modifie ces chiffres à la collecte suivante.
:::

---

## Ce que lit une collecte \{#steps\}

Les deux entrées de collecte lancent la même tâche avec un jeu d'étapes différent : **Collecter la sécurité et la SoD** écarte les étapes de licences, **Collecter les licences** écarte celles de sécurité et de SoD. Aucune des deux ne lit l'annuaire (LDAP), le journal d'activité, les propriétés de la base Oracle, la référence croisée des objets JD Edwards ni l'inventaire des objets définis par l'utilisateur. Les exploitants collectent les trois premiers avec le préréglage *Everything* de la tâche dans Nomaflow, ou par sa planification ; la référence croisée et l'inventaire des objets définis par l'utilisateur (étape `JDE_UDO`) viennent de la tâche [`nomasx1-xref`](../nomaflow/bundled-jobs.md#nomasx1-xref), que lisent les références croisées et l'analyse de montée de version de Nomajde. Tant que l'annuaire n'est pas lu, les contrôles d'annuaire de la [revue de sécurité](./security-review.md) affichent *Aucun annuaire collecté*.

Sur une application JD Edwards, deux étapes de la collecte de la sécurité suivent celle du Security Workbench : `JDE_SEC_ROWS` lit la **sécurité de ligne** et `JDE_SEC_UDO` toute la **sécurité des UDO** — chaque catégorie et chaque type de ligne —, chacune dans sa propre table, présentées dans [Sécurité de ligne](./applications/rights/row-security.md) et [Sécurité des UDO](./applications/rights/udo-security.md). Aucune ne modifie les droits, les chiffres de licences ni la séparation des tâches : la sécurité de ligne ne décide pas de ce qu'un utilisateur peut ouvrir, et les droits ne retiennent de la sécurité des UDO que les lignes de consultation des pages composites et E1. [À corriger](./security-analysis.md) lit les deux. La sécurité des UDO n'est lue que si **JDE_UDO_SEC** est renseigné dans les [paramètres JD Edwards](./settings/global/jd-edwards.md) ; l'écran [Bibliothèques UDO](./settings/global/udo-libraries.md) donne la bibliothèque à indiquer.

Une étape en échec n'arrête pas les autres : l'exécution continue et se termine en échec en nommant l'étape.

### Les réponses conservées pour les revues \{#kept\}

Les deux entrées se terminent par trois étapes qui préparent les pages longues du dossier **Revues** : elles s'ouvrent ainsi immédiatement sur ce que la collecte vient de rassembler.

| Étape | Prépare |
|---|---|
| `KEEP_SOD_REVIEW` | La [revue de la séparation des tâches](./sod-review.md). |
| `KEEP_WHAT_TO_FIX` | [À corriger](./security-analysis.md). |
| `KEEP_LICENSING_REVIEW` | La [revue des licences](./licensing-review.md), en anglais et en français — et avec elle l'exposition licences que lisent la [Synthèse d'audit](./audit-synthesis.md), le [Data Explorer](./data-explorer.md) et l'écran *Licences - Rapport financier*. |

L'échec de l'une de ces trois étapes ne met jamais la collecte en échec : la page calcule alors sa réponse à l'ouverture, ou sur **Relire**.

:::tip[Tâche de collecte modifiée sur la plateforme]
Si les étapes de `nomasx1-collect-all` ont été modifiées sur la plateforme, une mise à jour conserve cette version de la tâche, sans les trois étapes. Il faut les ajouter dans l'éditeur de la tâche, dans Nomaflow, ou reprendre la tâche livrée ; d'ici là, les trois pages calculent leur réponse à la première ouverture et l'exposition licences reste vide tant que la revue des licences n'a pas été relue une fois.
:::

---

## Selon une planification \{#reports\}

Les exploitants planifient les mêmes tâches dans Nomaflow : la collecte chaque nuit sur toutes les applications, les deux rapports le 1er de chaque mois — envoyés aux titulaires du rôle `nomasx1_auditor`, PDF joint, une fois le compte de messagerie renseigné. Les tâches sont livrées désactivées. Voir [Tâches livrées](../nomaflow/bundled-jobs.md#collect).

---

## Données de démonstration \{#demo\}

`nomasx1-demo-licences` est réservée aux **plateformes de démonstration**. Elle ne figure pas dans le menu de Nomasx-1 : les opérateurs la lancent depuis Nomaflow, où elle est livrée désactivée. Elle donne à une application un contrat de démonstration qui présente tous les cas que connaît la [revue des licences](./licensing-review.md), ainsi qu'une utilisation pour les utilisateurs de l'application.

| Paramètre | Effet |
|---|---|
| **Application** | L'application qui reçoit la démonstration. |
| **Écrire les données de démonstration, ou les retirer** | `add` les écrit (après avoir retiré une démonstration précédente) ; `remove` retire tout ce qu'elle a écrit. |

Ce qu'écrit `add` lui est propre, sur un contrat dédié (*DEMO — licensing review*) : deux bundles — un petit dont les modules figurent aussi dans le grand —, des lignes au chiffre d'affaires avec un chiffre d'affaires déclaré supérieur à la souscription, une ligne aux employés, une ligne au processeur, une ligne de module, une base et un pack en Named User Plus avec des utilisateurs déclarés pour une autre application, des personnes qui utilisent un module qu'aucune ligne ne couvre, et une installation d'Oracle Data Integrator et d'Oracle Analytics Server avec leurs lignes de contrat. Quand Nomajde est installé, elle saisit aussi des machines de démonstration dans [Taille des serveurs](../nomajde/monitoring/server-sizes.md) — leur nom commence par `DEMO-`. Elle ne modifie jamais un contrat réel.

L'utilisation qu'elle écrit est remplacée par la collecte des licences suivante : relancer la tâche après chaque collecte.

---

## Qui peut les lancer \{#access\}

Une entrée s'affiche pour qui peut lancer sa tâche : un rôle qui règle l'entrée, ou son dossier, sur **Lecture et modification** — ou qui détient la permission `job:<id>`. La *lecture* seule ne l'affiche jamais. Chaque titulaire voit toutes les exécutions de la tâche, pas seulement les siennes.

Nomasx-1 livre quatre rôles prédéfinis ; l'auditeur et les deux gestionnaires lancent les rapports et collectes de leur domaine, l'administrateur toutes les tâches :

| Rôle | Pour |
|---|---|
| **Auditeur** (`nomasx1_auditor`) | Lit tout et lance les deux rapports d'audit. Ne modifie aucun réglage. Il reçoit les rapports mensuels. |
| **Responsable sécurité** (`nomasx1_security_officer`) | Sécurité et séparation des tâches en lecture et modification, avec leurs réglages, la collecte de la sécurité et son rapport. Le reste en lecture. |
| **Gestionnaire des licences** (`nomasx1_licence_manager`) | Licences et base de données en lecture et modification, avec les réglages des licences, la collecte des licences et son rapport. Le reste en lecture. |
| **Administrateur** (`nomasx1_admin`) | Tout dans l'application : lecture et modification, y compris les réglages et les tâches de son menu. |

Chaque rôle désigne des dossiers du menu : il suit donc ces dossiers quand une version y ajoute des écrans. Une même personne peut en cumuler plusieurs — un responsable sécurité également gestionnaire des licences : les droits s'additionnent.

Ils s'ajoutent un par un dans **Liberty Next → Administrer → Accès → Rôles → Ajouter un rôle prédéfini…** (voir [Rôles prédéfinis](../framework/build/secure/roles-and-permissions.md#predefined)), ou tous les quatre d'un coup avec la tâche [`nomasx1-roles`](../nomaflow/bundled-jobs.md#nomasx1-roles), qui donne en plus à l'administrateur toutes les tâches `nomasx1-*`. Relancée, la tâche rétablit les droits livrés sur un rôle modifié dans Accès ; les utilisateurs ne sont pas touchés.
