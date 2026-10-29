---
title: Tâches
description: "Le dossier Tâches du menu de Nomajde : refusionner la sécurité JD Edwards des rôles touchés par un paquet de changements ou de tous les rôles, rafraîchir le dictionnaire de données des modèles de l'explorateur, vérifier les serveurs JD Edwards — à la demande, avec un journal en direct ; et les tâches AIS qui lancent un état ou exportent une table depuis Nomaflow."
keywords: [Nomajde, tâches, refusionner la sécurité, paquet de changements, rôles, dictionnaire de données, explorateur, rafraîchissement, JD Edwards, Server Manager, contrôle de santé, AIS, état, UBE, export, xlsx]
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

## Vérifier les serveurs JDE \{#jde-health\}

Lance immédiatement le contrôle de santé des serveurs JD Edwards au travers de Server Manager, sans attendre la planification toutes les cinq minutes, et enregistre le résultat affiché dans [Supervision → Serveurs JDE](./monitoring/jde-servers.md). L'exécution échoue dès qu'une instance n'a pas réussi ses contrôles. Détails : [`nomajde-jde-health`](../nomaflow/bundled-jobs.md#nomajde-jde-health).

---

## Tâches AIS de JD Edwards \{#ais\}

Deux tâches accèdent à JD Edwards au travers de son serveur AIS (connecteur `ais_connection`). Absentes du menu de Nomajde, elles se lancent depuis **Nomaflow → Tâches** avec **Exécuter avec des paramètres**, ou se copient dans une tâche dédiée avec des paramètres fixes et une planification.

| Tâche | Rôle | Paramètres demandés au lancement |
|---|---|---|
| [`nomajde-ais-report`](../nomaflow/bundled-jobs.md#nomajde-ais-report) | Lance un état JD Edwards (UBE) et attend sa fin ; l'exécution échoue si l'état se termine en erreur ou reste en cours au-delà du délai. | **État**, **Version** (`XJDE0001` par défaut), **File d'attente**, **Options de traitement (JSON)**. |
| [`nomajde-ais-export`](../nomaflow/bundled-jobs.md#nomajde-ais-export) | Exporte une table ou une vue métier dans un fichier xlsx de l'exécution, avec les titres de colonnes d'AIS en en-tête ; le fichier se télécharge depuis le détail de l'exécution. | **Table** ou **Vue métier**, **Colonnes**, **Conditions (JSON)**, **Lignes max** (`5000` par défaut). |

Les mêmes appels AIS — et quelques autres : comptage de lignes, appel d'une fonction métier, exécution d'une orchestration, démarrage ou arrêt du planificateur — sont disponibles comme étapes Python d'une tâche et comme actions d'écran : voir [les étapes AIS](../nomaflow/bundled-jobs.md#ais-steps).

---

## Qui peut les lancer \{#access\}

Une entrée s'affiche pour les titulaires de la permission `job:<id>` (type de règle **Tâche** dans les règles *Au-delà des menus* d'un rôle). Chaque titulaire voit toutes les exécutions de la tâche, pas seulement les siennes.
