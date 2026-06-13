---
title: Vues de grille enregistrées
description: "Enregistrez les colonnes, le tri, les filtres et le regroupement d'une grille comme une vue nommée — vos vues vous suivent sur tous vos appareils, et un administrateur peut publier des vues partagées dont une par défaut."
keywords: [Liberty Framework, vues de grille, vues enregistrées, table view, colonnes, filtres, tri, regroupement, vue par défaut, vues partagées]
---

# Vues de grille enregistrées

Toute grille de données — la table d'un écran ou une Table View ad hoc — peut mémoriser votre mise en page. Une **vue** capture toute la présentation de la grille et vous y ramène en un clic :

- quelles **colonnes** sont visibles, et leur **ordre** ;
- le **tri** ;
- les **filtres** par colonne ;
- le **regroupement** ;
- la **taille de page**.

---

## Vos vues et les vues partagées

Le menu **Vues** de la barre d'outils de la grille liste deux groupes :

- **Partagées** — des vues publiées, en lecture seule, disponibles pour tous sur cet écran. Un administrateur les crée dans l'onglet *Vues* du [Concepteur d'écran](build/screens/overview.md), et peut en marquer une par **défaut** — la disposition avec laquelle la grille s'ouvre.
- **Mes vues** — les vues que vous enregistrez vous-même. Elles sont stockées par utilisateur sur le serveur : elles **vous suivent sur tous vos appareils et toutes vos sessions**. Vous pouvez en avoir autant que vous voulez par grille.

Un utilisateur lit les vues partagées et gère les siennes ; publier une vue pour tous est une action d'administrateur dans le Concepteur.

---

## Travailler avec les vues

| Action | Ce qu'elle fait |
|---|---|
| **Enregistrer sous…** | Nomme les colonnes, le tri, les filtres et le regroupement actuels comme une nouvelle vue personnelle. Réutiliser un nom écrase cette vue. |
| **Enregistrer** | Écrase sur place la vue personnelle active (visible seulement quand la vue active est l'une des vôtres). |
| Sélectionner une vue | Applique une vue partagée ou personnelle. |
| **Supprimer la vue** | Retire l'une de vos vues (l'icône corbeille). |
| **Réinit.** | Revient à la vue partagée par défaut de l'écran, ou à sa disposition de colonnes de base s'il n'y en a pas. Pratique quand un état enregistré plus ancien entre en conflit avec une colonne désormais masquée sous condition. *Réinit.* se trouve dans le menu Colonnes. |

La grille mémorise aussi, **par appareil**, la dernière vue que vous avez ouverte sur chaque table — vous retombez donc là où vous étiez — tandis que les vues elles-mêmes vivent sur le serveur.

---

## Conseils et bonnes pratiques

- **Enregistrez les dispositions que vous réutilisez.** Une vue « fin de mois » avec les bonnes colonnes, le bon filtre et le bon tri est à un clic, à chaque fois.
- **Publiez le standard de l'équipe comme vue partagée par défaut.** Créez-la une fois dans l'onglet *Vues* du Concepteur et marquez-la par défaut, pour que tout le monde ouvre la grille sur la disposition convenue.
- **Pensez à *Réinit.* quand une grille semble fausse après une mise à niveau.** Si une colonne est devenue masquée sous condition, un ancien état enregistré peut contrarier la nouvelle règle — *Réinit.* le ramène à la vue par défaut de l'écran.
