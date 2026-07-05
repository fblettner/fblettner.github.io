---
title: Vues de grille enregistrées
description: "Enregistrez les colonnes, le tri, les filtres et le regroupement d'une grille comme une vue nommée — vos vues vous suivent sur tous vos appareils, et un administrateur peut publier des vues partagées dont une par défaut. Inclut la Vue synthèse — lignes parents agrégées côté serveur avec chargement paresseux des lignes filles — et le filtre à la journée sur les colonnes horodatées."
keywords: [Liberty Framework, vues de grille, vues enregistrées, table view, vue synthèse, colonnes, filtres, tri, regroupement, vue par défaut, vues partagées, filtre à la journée, filtre horodatage, chargement paresseux]
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

La grille mémorise aussi, **par appareil**, la dernière vue que vous avez ouverte sur chaque table — vous retombez donc là où vous étiez — tandis que les vues elles-mêmes restent sur le serveur.

---

## Vue synthèse

Une vue enregistrée peut être marquée comme **Vue synthèse** — au lieu de renvoyer chaque ligne, la grille demande au serveur d'agréger les lignes parents et ne renvoie que le résumé. Chaque ligne parent porte un chevron : cliquer dessus déclenche le chargement paresseux des lignes filles sous-jacentes.

Où c'est utile :

- **Comptages exacts sur l'ensemble** — l'agrégation porte sur la totalité du résultat de la requête, pas sur la page courante ; un comptage de groupe reste juste même sur une requête à un million de lignes.
- **Regroupement sur une colonne horodatée** — choisir **jour**, **mois** ou **année** comme granularité ; la ligne parent affiche le libellé du seau et les lignes filles sont les enregistrements bruts qui y tombent.
- **Travail lourd côté serveur** — l'agrégation est un `GROUP BY` exécuté par le pool, pas un reduce JavaScript ; les lignes filles ne sont récupérées que lorsqu'un parent est déplié, ce qui garde la charge utile petite.

La mise en page synthèse remplace l'ancienne grille imbriquée — les **sous-lignes** dépliables sont natives, la navigation clavier et le redimensionnement des colonnes se comportent comme dans le reste de la grille.

---

## Filtre à la journée sur les colonnes horodatées

Filtrer une colonne horodatée n'oblige pas à saisir une borne complète `YYYY-MM-DD HH:MM:SS`. Le filtre d'en-tête de colonne laisse choisir une **journée** et retient toutes les lignes dont l'horodatage tombe dans cette journée (borne basse / borne haute côté serveur). C'est le même sélecteur qui alimente le seau *jour* de la Vue synthèse.

---

## Conseils et bonnes pratiques

- **Enregistrez les dispositions que vous réutilisez.** Une vue « fin de mois » avec les bonnes colonnes, le bon filtre et le bon tri est à un clic, à chaque fois.
- **Publiez le standard de l'équipe comme vue partagée par défaut.** Créez-la une fois dans l'onglet *Vues* du Concepteur et marquez-la par défaut, pour que tout le monde ouvre la grille sur la disposition convenue.
- **Pensez à *Réinit.* quand une grille semble fausse après une mise à niveau.** Si une colonne est devenue masquée sous condition, un ancien état enregistré peut contrarier la nouvelle règle — *Réinit.* le ramène à la vue par défaut de l'écran.
