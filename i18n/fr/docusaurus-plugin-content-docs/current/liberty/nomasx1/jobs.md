---
title: Tâches
description: "Le dossier Tâches du menu de Nomasx-1 : collecter à la demande les données de sécurité et les transactions de licences d'une application connectée, suivre le journal en direct et retrouver les exécutions précédentes — sans ouvrir Nomaflow."
keywords: [Nomasx-1, tâches, collecter la sécurité, collecter les licences, collecte, rafraîchissement, exécution, journal]
---

# Tâches

Le dossier **Tâches**, en bas du menu de Nomasx-1, permet à l'équipe conformité de rafraîchir elle-même les données — avant une revue, après une série de modifications dans le système source — sans ouvrir Nomaflow. Chaque entrée ouvre la page de la tâche : **Lancer**, le journal suivi en direct, les exécutions précédentes avec leur auteur.

Les collectes planifiées continuent de s'exécuter normalement ; ces entrées lancent les mêmes tâches à la demande.

---

## Les entrées \{#entries\}

| Entrée | Tâche | Rafraîchit |
|---|---|---|
| **Collecter la sécurité** | [`nomasx1-security-1`](../nomaflow/bundled-jobs.md#nomasx1-security-1) | Les utilisateurs, rôles, affectations, menus et droits effectifs de l'application — tout ce qui figure sous **Sécurité** et **Applications**, ainsi que les chiffres de la [synthèse d'audit](./audit-synthesis.md). |
| **Collecter les licences** | [`nomasx1-license-1`](../nomaflow/bundled-jobs.md#nomasx1-license-1) | Les transactions des utilisateurs — la base de l'usage des licences sous **Licences** et du modèle *Licence compliance* de l'[explorateur de données](./data-explorer.md). |

Après une collecte, **Dernière collecte** et la liste *Fraîcheur des données* de la synthèse d'audit affichent la nouvelle date.

:::info[Spécifique à JDE]
Les deux tâches lisent JD Edwards EnterpriseOne. Pour un autre système source, la collecte est celle que fournit son connecteur.
:::

---

## Qui peut les lancer \{#access\}

Une entrée s'affiche pour les titulaires de la permission `job:<id>` (type de règle **Tâche** dans les règles *Beyond the menus* d'un rôle). Chaque titulaire voit toutes les exécutions de la tâche, pas seulement les siennes. Voir [Lancer une tâche depuis le menu d'une application](../nomaflow/jobs/run-from-menu.md).
