---
title: Tâches
description: "Le dossier Tâches du menu de Nomajde : refusionner la sécurité JD Edwards des rôles touchés par un paquet de changements ou de tous les rôles, et rafraîchir le dictionnaire de données des modèles de l'explorateur — à la demande, avec un journal en direct."
keywords: [Nomajde, tâches, refusionner la sécurité, paquet de changements, rôles, dictionnaire de données, explorateur, rafraîchissement, JD Edwards]
---

# Tâches

Le dossier **Tâches**, en bas du menu de Nomajde, lance à la demande les tâches de maintenance de JD Edwards sans ouvrir Nomaflow. Chaque entrée ouvre la page de la tâche : ses paramètres, **Lancer**, le journal suivi en direct, les exécutions précédentes avec leur auteur. Voir [Lancer une tâche depuis le menu d'une application](../nomaflow/jobs/run-from-menu.md).

---

## Refusionner la sécurité (paquet de changements) \{#remerge\}

Refusionne la sécurité JD Edwards — Security Workbench, sécurité UDO, filtrage des menus — des rôles parents touchés par le paquet de changements actif, une fois par parent. À lancer après l'application d'un paquet qui modifie des rôles ou des relations de rôles. Détails : [`nomajde-remerge-security`](../nomaflow/bundled-jobs.md#nomajde-remerge-security).

## Refusionner la sécurité (tous les rôles) \{#remerge-all\}

Refusionne la sécurité de tous les rôles parents actifs, indépendamment du paquet de changements — après un import en masse, ou pour rattraper une refusion oubliée. Sur une instance volumineuse, l'opération prend plusieurs minutes. Détails : [`nomajde-remerge-security-all`](../nomaflow/bundled-jobs.md#nomajde-remerge-security-all).

## Rafraîchir le dictionnaire (modèles Explorateur) \{#dictionary\}

Crée les entrées de dictionnaire qui manquent aux modèles de l'[explorateur de données](./data-explorer.md), à partir du dictionnaire de données JD Edwards (F9200 / F9202 / F9210 : description, type, décimales, liste UDC), une analyse par table. Les libellés apparaissent aussitôt, sans redémarrage.

| Paramètre | Rôle |
|---|---|
| **Modèle Explorateur (vide = tous les modèles)** | L'un des modèles de Nomajde, ou vide pour tous. |

Le journal liste, par modèle, les tables analysées et les entrées créées.

---

## Qui peut les lancer \{#access\}

Une entrée s'affiche pour les titulaires de la permission `job:<id>` (type de règle **Tâche** dans les règles *Beyond the menus* d'un rôle). Chaque titulaire voit toutes les exécutions de la tâche, pas seulement les siennes.
