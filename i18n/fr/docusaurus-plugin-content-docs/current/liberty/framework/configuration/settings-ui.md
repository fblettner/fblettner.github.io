---
title: Interface des paramètres
description: "La page Paramètres de Liberty Next : un éditeur par fichier de configuration, regroupés par connecteur (connecteurs, dictionnaire, actions, menus, écrans, graphiques, tableaux de bord, rapports, notifications) ou partagés (pools, thème, accès, application, historique, notes de version), la validation et l'application d'un enregistrement, et Recharger la config."
keywords: [Liberty Next, Paramètres, éditeurs, connecteurs, dictionnaire, actions, menus, écrans, graphiques, tableaux de bord, rapports, notifications, pools, thème, accès, application, historique, rechargement]
---

# Interface des paramètres

**Paramètres**, dans le menu latéral, ouvre les éditeurs de la configuration. Chaque éditeur est un formulaire construit à partir du modèle que le serveur utilise pour charger le fichier : ce qu'il accepte est ce que le serveur accepte. La page est réservée aux superutilisateurs.

---

## Les onglets \{#tabs\}

**Par connecteur** (*Per connector*) — chaque éditeur demande d'abord sur quel connecteur (application ou source de données) il travaille :

| Onglet | Modifie | Voir |
|---|---|---|
| **Connecteurs** | Requêtes, tables, séquences et lookups des connecteurs SQL ; endpoints des connecteurs API ; réglages du connecteur. | [Connecteurs](../connectors.md), [Requêtes](../build/queries/overview.md) |
| **Dictionnaire** | Entrées, énumérations, lookups, séquences. | [Dictionnaire](../dictionary.md) |
| **Actions** | Les actions partagées réutilisées par les écrans. | [Actions et cycle de vie](../build/screens/actions-and-lifecycle.md) |
| **Menus** | L'arborescence du menu latéral de chaque application. | [Menus](../build/menus/overview.md) |
| **Écrans** | Grilles, fenêtres, onglets, actions — le Concepteur d'écran. | [Écrans](../build/screens/overview.md) |
| **Graphiques** | Les graphiques enregistrés. | [Graphiques](../charts.md) |
| **Tableaux de bord** | Les tableaux de bord et leurs widgets. | [Tableaux de bord](../dashboards.md) |
| **Explorateur** | Le modèle de l'explorateur de données. | — |
| **Rapports** | Les rapports personnalisés. | — |
| **Notifications** | Les règles de notification. | [Notifications](../../nomaflow/notifications.md) |

**Partagés** (*Shared*) — à l'échelle de l'installation :

| Onglet | Modifie | Voir |
|---|---|---|
| **Pools** | Les connexions aux bases : adresse, identifiants, taille, correspondances de schémas et de DB links. | [Connecteurs](../connectors.md) |
| **Thème** | Couleurs et habillage. | — |
| **Access** | Utilisateurs et rôles. | [Utilisateurs](../build/secure/users.md), [Rôles et permissions](../build/secure/roles-and-permissions.md) |
| **App** | `app.toml` : réglages de l'application, licence, assistant IA, notifications (e-mail), OpenID Connect, habillage PDF. | [Paramètres de l'application](../build/settings-app.md) |
| **History** | Les versions de chaque fichier de configuration et de chaque écran, l'historique et les rapports de mise à jour. | [Historique de la configuration](./config-history.md) |
| **Release notes** | Les notes de version de la version en service. | — |

**Recharger la config**, à droite des onglets, relit tous les fichiers de configuration dans le serveur en fonctionnement.

---

## Enregistrer \{#save\}

1. **Enregistrer** envoie la configuration modifiée ; le serveur la valide avec son modèle et refuse une configuration invalide en donnant la raison.
2. Le fichier est écrit. Une version du contenu précédent est conservée dans **History**.
3. La modification s'applique : aussitôt quand le serveur surveille ses fichiers (`[app] hot_reload = true`, la valeur du `app.toml` livré), sinon par **Recharger la config**. Un rechargement reconstruit les connecteurs à partir des nouveaux fichiers ; en cas d'échec, la configuration précédente reste active.

La surveillance des fichiers ne recharge pas les pools, pour qu'une requête en cours ne perde jamais sa connexion : après la modification d'un pool, utiliser **Recharger la config**. Paramètres → **App** applique ses propres changements aussitôt, sauf l'adresse, le port et le niveau de journal, qui demandent un redémarrage.

Les fichiers sont réécrits à partir du modèle enregistré : les commentaires écrits à la main dans un fichier ne sont pas conservés.

---

## En dehors des éditeurs \{#outside\}

- La page **Surveillance**, dans le menu latéral, montre l'état du serveur en direct — voir [La page Surveillance](../../monitoring/dashboard.md).
- Les tâches Nomaflow se modifient dans les pages des Tâches — voir [Créer une tâche](../../nomaflow/jobs/create.md).
- `GET /admin/config/raw` lit un fichier tel qu'il est sur le disque ; il n'existe pas d'éditeur de texte brut. Quand un éditeur ne propose pas un champ, modifier le fichier sur le serveur puis **Recharger la config**.
- Chaque éditeur s'appuie sur `/admin/config/<section>/parsed` — voir [API REST](../../references/rest-api.md#admin-config).

---

## Conseils \{#tips\}

- Enregistrer un éditeur à la fois et vérifier le résultat avant de passer au suivant.
- Garder la configuration sous contrôle de version sur le serveur ; **History** conserve les versions récentes, pas tout l'historique.
- Préférer les éditeurs aux modifications à la main : ils refusent ce que le serveur refuserait.
