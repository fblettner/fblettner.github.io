---
title: Applications
description: "Ce qu'est une application dans Liberty Next — un connecteur doté d'un menu, proposé dans le sélecteur d'application — ce qui lui appartient (requêtes, portée du dictionnaire, écrans, menu, graphiques), le passage d'une application à l'autre, et la copie, le transfert entre environnements ou l'installation d'une application prête à l'emploi."
keywords: [Liberty Next, application, sélecteur d'application, connecteur, menu, show_in_switcher, home, cloner, packages, applications sous licence]
---

# Applications

Dans Liberty Next, une **application** est un **connecteur doté d'un menu** : son nom apparaît dans le sélecteur d'application en haut du menu latéral, et le choisir affiche son menu. Il n'existe pas d'objet « application » distinct à créer — le connecteur est l'application.

---

## Ce qui appartient à une application \{#scope\}

Tout ce qu'affiche une application est rangé sous le nom de son connecteur :

| Élément | Réglage | Rangement |
|---|---|---|
| Requêtes (tables, requêtes, séquences, lookups) | Paramètres → Connecteurs | Dans le connecteur lui-même. |
| Entrées, énumérations, lookups et séquences du dictionnaire | Paramètres → Dictionnaire, **portée** du connecteur | `[connectors.<app>.*]` — en complément des entrées partagées. |
| Écrans | Paramètres → Écrans, pastille de l'application | `[screens.<app>.<id>]` |
| Menu | Paramètres → Menus, pastille de l'application | `[menus.<app>]` |
| Graphiques | Paramètres → Graphiques, portée du connecteur | `[charts.<app>.<id>]` |

Les tableaux de bord et les actions partagées ont un espace de noms unique ; une entrée du menu de l'application les ouvre par leur identifiant. Les tâches Nomaflow ne sont rattachées à aucune application.

---

## Le sélecteur d'application \{#picker\}

Le sélecteur se trouve en haut du menu latéral :

- il liste les applications dont l'utilisateur voit le menu, et n'apparaît qu'à partir de deux applications ;
- choisir une application bascule le menu latéral et les onglets de travail sur cette application — c'est un changement d'application, pas un filtre ;
- le choix est conservé dans le navigateur ;
- quand le connecteur de l'application a plusieurs pools, un sélecteur **Pool** placé à côté choisit l'instance de base de données sur laquelle s'exécutent tous les écrans — voir [Connecteurs → Connecteurs multi-pools](../connectors.md#multi-pool).

Les réglages **show_in_switcher** (activé par défaut) et **home** du connecteur déterminent s'il est proposé dans le sélecteur et quelle entrée de menu s'ouvre en premier. Voir [Transformer un connecteur en application](../build/menus/make-connector-an-app.md).

---

## Créer une application \{#create\}

1. **Paramètres → Connecteurs** — créer le connecteur SQL et son pool, puis ses requêtes (l'assistant CRUD les écrit à partir d'une table).
2. **Paramètres → Écrans** — construire les écrans sur ces requêtes.
3. **Paramètres → Menus** — **+ Ajouter une portée**, choisir le connecteur, ajouter les entrées qui ouvrent les écrans.
4. De retour sur le connecteur, vérifier **show_in_switcher** et renseigner éventuellement **home**.

L'[Assistant de création d'écran](../build/screen-assistant.md) enchaîne les étapes 1 à 3 pour une table. Le [tutoriel CRM](../tutorial-crm/01-setup.md) construit une application complète.

---

## Copier et déplacer une application \{#copy\}

| Besoin | Outil |
|---|---|
| Une seconde application construite sur une application existante (autre base, copie de test). | **Cloner** sur le connecteur : copie les requêtes avec la portée du dictionnaire, les écrans, le menu, les graphiques et les tableaux de bord sous le nouveau nom. Voir [Dupliquer une requête ou un connecteur](../build/queries/clone.md). |
| Déplacer tout ou partie d'une application vers un autre environnement (développement → production). | **Packages** : choisir les écrans, menus, tableaux de bord… à livrer, télécharger le ZIP avec tout ce dont ils dépendent, l'importer sur la cible. Voir [Packages](../build/packages.md). |
| Renommer un connecteur, un écran ou une requête. | **Renommer** dans son éditeur — toutes les références sont réécrites. |

---

## Applications prêtes à l'emploi \{#ready-made\}

**Nomasx-1** et **Nomajde** sont livrées comme applications prêtes à l'emploi, avec leurs tâches Nomaflow. Leur installation et leur mise à jour sont décrites dans [Applications sous licence](../../installation/deploy-prebuilt-apps.md). Leurs écrans, menus et dictionnaire sont visibles et modifiables dans les Paramètres comme ceux de toute application ; un élément marqué **override** conserve les modifications locales au fil des mises à jour.

---

## Qui voit une application \{#access\}

Une application apparaît pour un utilisateur dès que son menu contient des entrées que cet utilisateur peut ouvrir. Les rôles déterminent les entrées de menu, les écrans et les requêtes accessibles à chacun — voir [Rôles et permissions](../build/secure/roles-and-permissions.md) et [Menus → Permissions et rôles](../build/menus/permissions-and-roles.md).

---

## Pour aller plus loin

- [Transformer un connecteur en application](../build/menus/make-connector-an-app.md) — les deux réglages qui placent un connecteur dans le sélecteur.
- [Plugins](./plugins.md) — les fonctions Python appelées depuis les tâches et les actions d'écran.
- [Internationalisation](./i18n.md) — les libellés par langue.
