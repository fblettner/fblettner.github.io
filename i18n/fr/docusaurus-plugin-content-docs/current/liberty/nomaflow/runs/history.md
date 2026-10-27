---
title: Historique des exécutions
description: "Où sont enregistrées les exécutions Nomaflow et comment en lire une : les états d'exécution, la page Détail de l'exécution (résumé, paramètres de l'exécution, étapes, journal avec Suivre et Télécharger), la liste des exécutions, et la durée de conservation de l'historique."
keywords: [Nomaflow, historique des exécutions, détail de l'exécution, états, journal, MISSED, CANCELED, rétention, Liberty Next]
---

# Historique des exécutions

Chaque exécution d'une tâche — planifiée, manuelle, lancée par une autre tâche ou manquée — est enregistrée avec ses étapes et son journal.

---

## Où trouver les exécutions \{#where\}

| Depuis | Ouvre |
|---|---|
| *dernière* sur une carte de tâche | Le détail de la dernière exécution de la tâche. |
| La liste **Exécutions** (menu Nomaflow ; lien **Exécutions** en haut d'un détail) | Les dernières exécutions de toutes les tâches. |
| Une notification sur une exécution | Son détail, par le lien de la notification. |

---

## États d'une exécution \{#states\}

| État | Signification |
|---|---|
| `QUEUED` | Acceptée, en attente de démarrage. |
| `RUNNING` | En cours. |
| `SUCCEEDED` | Toutes les étapes ont réussi, ou ont été sautées volontairement. |
| `FAILED` | Une étape a échoué après ses nouvelles tentatives. Les étapes suivantes sont enregistrées `CANCELED` avec *skipped: earlier step failed*. |
| `CANCELED` | Annulée par un opérateur ou par un dépassement de délai. |
| `MISSED` | Une heure planifiée à laquelle la tâche ne s'est pas exécutée — voir [Planifications manquées](../jobs/schedules.md#missed). |

Une exécution interrompue par un redémarrage du serveur est clôturée en échec avec *abandoned: process restart during run* au démarrage suivant.

---

## La page Détail de l'exécution \{#detail\}

La page se rafraîchit toutes les deux secondes tant que l'exécution est en cours (*en direct*).

| Partie | Contenu |
|---|---|
| **Résumé** | Tâche, Déclencheur (`scheduled` ou `manual`, et qui l'a lancée — un nom d'utilisateur, ou `call_job:<tâche>@<exécution>` pour une tâche lancée par une autre), Démarrée, Terminée, Lignes affectées. |
| **Run with parameters** | Affiché quand l'exécution a été lancée avec des valeurs particulières : celles choisies pour cette exécution (paramètres partagés, arguments des étapes, étapes sautées, niveau de journal). |
| **Étapes** | Une ligne par étape : n°, nom, Type, Tentative, État, Erreur. Une étape `file_load` affiche aussi *N read · N inserted · N rejected* et, si besoin, **Rejected rows (csv)**. |
| **Journal** | Les lignes écrites pendant l'exécution, au niveau de journal de l'exécution. **Suivre** garde les dernières lignes visibles (**Pause** l'arrête) ; **Télécharger** enregistre le journal complet. |

Le journal conserve les 5 000 dernières lignes d'une exécution.

---

## Durée de conservation \{#retention\}

Le panneau **Run history retention** de la page des Tâches supprime les anciennes exécutions avec leurs étapes et leurs journaux : par défaut, celles de plus de 30 jours, en gardant au plus 100 exécutions par tâche, avec un contrôle toutes les 60 minutes. Voir [Administration](../administration.md#retention).
