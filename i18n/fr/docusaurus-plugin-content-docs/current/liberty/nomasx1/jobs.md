---
title: Tâches
description: "Le dossier Tâches du menu de Nomasx-1 : collecter les données de sécurité et de séparation des tâches ou les données de licences d'une ou plusieurs applications, produire l'audit des licences et l'évaluation Sécurité & SoD puis les envoyer — à la demande avec un journal en direct, ou chaque mois selon une planification. Les rôles d'auditeur et d'administrateur."
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
Les collectes lisent JD Edwards EnterpriseOne. Pour un autre système source, la collecte est celle que fournit son connecteur.

Les droits effectifs comprennent les chemins d'accès des objets définis par l'utilisateur (UDO) : une page composite donne les applications et états que ses tuiles ouvrent, les formulaires affichés dans ses volets et les tâches de son menu ; une page E1 donne les applications et états que son contenu appelle. Les autres objets définis par l'utilisateur — orchestrations, demandes de service, notifications… — ne donnent aucun chemin d'accès. Les droits, les conflits de séparation des tâches et les chiffres de licences qui en découlent tiennent compte de ces chemins. Les pages lues dépendent des indicateurs **E1 Composite** et **E1 Pages** de l'[application](./settings/global/applications.md) : en activer ou en désactiver un modifie ces chiffres à la collecte suivante.
:::

---

## Ce que lit une collecte \{#steps\}

Les deux entrées de collecte lancent la même tâche avec un jeu d'étapes différent : **Collecter la sécurité et la SoD** écarte les étapes de licences, **Collecter les licences** écarte celles de sécurité et de SoD. Aucune des deux ne lit l'annuaire (LDAP), le journal d'activité, les propriétés de la base Oracle, la référence croisée des objets JD Edwards ni l'inventaire des objets définis par l'utilisateur. Les exploitants collectent les trois premiers avec le préréglage *Everything* de la tâche dans Nomaflow, ou par sa planification ; la référence croisée et l'inventaire des objets définis par l'utilisateur (étape `JDE_UDO`) viennent de la tâche [`nomasx1-xref`](../nomaflow/bundled-jobs.md#nomasx1-xref), que lisent les références croisées et l'analyse de montée de version de Nomajde. Tant que l'annuaire n'est pas lu, les contrôles d'annuaire de la [revue de sécurité](./security-review.md) affichent *Aucun annuaire collecté*.

Une étape en échec n'arrête pas les autres : l'exécution continue et se termine en échec en nommant l'étape.

---

## Selon une planification \{#reports\}

Les exploitants planifient les mêmes tâches dans Nomaflow : la collecte chaque nuit sur toutes les applications, les deux rapports le 1er de chaque mois — envoyés aux titulaires du rôle `nomasx1_auditor`, PDF joint, une fois le compte de messagerie renseigné. Les tâches sont livrées désactivées. Voir [Tâches livrées](../nomaflow/bundled-jobs.md#collect).

---

## Qui peut les lancer \{#access\}

Une entrée s'affiche pour les titulaires de la permission `job:<id>` (type de règle **Tâche** dans les règles *Au-delà des menus* d'un rôle). Chaque titulaire voit toutes les exécutions de la tâche, pas seulement les siennes.

Nomasx-1 livre deux rôles, créés par une tâche que l'administrateur lance une fois après l'installation et après chaque mise à jour :

| Rôle | Pour |
|---|---|
| `nomasx1_auditor` | Consulter tous les écrans, tableaux de bord et modèles de l'explorateur, utiliser l'assistant IA et lancer les deux rapports ; il reçoit les rapports mensuels. |
| `nomasx1_admin` | Tout, y compris les paramètres et toutes les tâches de Nomasx-1. |

Les attribuer aux utilisateurs dans **Liberty Next → Administrer → Accès**. Voir [`nomasx1-roles`](../nomaflow/bundled-jobs.md#nomasx1-roles).
