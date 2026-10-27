---
title: Vues de grille enregistrées
description: "Enregistrer les colonnes, le tri, les filtres et le regroupement d'une grille sous forme de vue nommée — les vues personnelles suivent l'utilisateur sur tous ses appareils, et un administrateur peut publier des vues partagées dont une par défaut. Couvre aussi la vue Résumé de l'écran — lignes parents comptées par la base, lignes de détail chargées à la demande — et le filtre à la journée sur les colonnes horodatées."
keywords: [Liberty Framework, vues de grille, vues enregistrées, table view, vue Résumé, colonnes, filtres, tri, regroupement, vue par défaut, vues partagées, filtre à la journée, filtre horodatage, chargement paresseux]
---

# Vues de grille enregistrées

Toute grille de données — la table d'un écran ou une Table View ad hoc — peut mémoriser sa mise en page. Une **vue** enregistre toute la présentation de la grille et la rétablit en un clic :

- quelles **colonnes** sont visibles, et leur **ordre** ;
- le **tri** ;
- les **filtres** par colonne ;
- le **regroupement** ;
- la **taille de page**.

---

## Vues personnelles et vues partagées

Le menu **Vues** de la barre d'outils de la grille liste deux groupes :

- **Partagées** — des vues publiées, en lecture seule, disponibles pour tous sur cet écran. Un administrateur les crée dans l'onglet *Vues* du [Concepteur d'écran](build/screens/overview.md), et peut en marquer une par **défaut** — la disposition avec laquelle la grille s'ouvre.
- **Mes vues** — les vues enregistrées par l'utilisateur lui-même. Elles sont stockées par utilisateur sur le serveur : elles **le suivent sur tous ses appareils et toutes ses sessions**, sans limite de nombre par grille.

Un utilisateur lit les vues partagées et gère les siennes ; publier une vue pour tous est une action d'administrateur dans le Concepteur.

---

## Travailler avec les vues

| Action | Ce qu'elle fait |
|---|---|
| **Enregistrer sous…** | Nomme les colonnes, le tri, les filtres et le regroupement actuels comme une nouvelle vue personnelle. Réutiliser un nom écrase cette vue. |
| **Enregistrer** | Écrase sur place la vue personnelle active (visible seulement quand la vue active est l'une des vôtres). |
| Sélectionner une vue | Applique une vue partagée ou personnelle. |
| **Supprimer la vue** | Retire l'une de ses vues (l'icône corbeille). |
| **Réinit.** | Revient à la vue partagée par défaut de l'écran, ou à sa disposition de colonnes de base s'il n'y en a pas. Pratique quand un état enregistré plus ancien entre en conflit avec une colonne désormais masquée sous condition. *Réinit.* se trouve dans le menu Colonnes. |

La grille mémorise aussi, **par appareil**, la dernière vue ouverte sur chaque table — l'utilisateur retrouve donc la grille dans l'état où il l'avait laissée — tandis que les vues elles-mêmes restent sur le serveur.

---

## Vue Résumé \{#summary\}

La vue **Résumé** se règle sur l'écran, pas dans les vues de l'utilisateur : dès que l'onglet **Résumé** de l'éditeur d'écran liste des colonnes de regroupement, la grille reçoit un bouton **Résumé** à côté de **Tableau** et **Graphique**.

Dans ce mode, la grille affiche une ligne parent par combinaison des colonnes de regroupement, avec le nombre de lignes correspondantes (l'en-tête de la colonne de comptage se règle dans le même onglet). Le comptage est calculé par la base sur l'ensemble du résultat : il reste exact même quand la grille plafonne le nombre de lignes chargées. Un chevron sur chaque ligne parent charge ses lignes de détail — la requête de l'écran, restreinte à ce groupe — uniquement à l'ouverture.

Une colonne de regroupement de type date ou horodatage peut être découpée par **jour**, **mois** ou **année** : la ligne parent affiche alors la période, et les lignes de détail sont les enregistrements de cette période.

---

## Filtre à la journée sur les colonnes horodatées

Filtrer une colonne horodatée n'oblige pas à saisir une borne complète `YYYY-MM-DD HH:MM:SS`. Le filtre d'en-tête de colonne laisse choisir une **journée** et retient toutes les lignes dont l'horodatage tombe dans cette journée (borne basse / borne haute côté serveur). 

---

## Conseils et bonnes pratiques

- **Enregistrer les dispositions réutilisées.** Une vue « fin de mois » avec les bonnes colonnes, le bon filtre et le bon tri est à un clic, à chaque fois.
- **Publiez le standard de l'équipe comme vue partagée par défaut.** Créez-la une fois dans l'onglet *Vues* du Concepteur et marquez-la par défaut, pour que tout le monde ouvre la grille sur la disposition convenue.
- **Pensez à *Réinit.* quand une grille semble fausse après une mise à niveau.** Si une colonne est devenue masquée sous condition, un ancien état enregistré peut contrarier la nouvelle règle — *Réinit.* le ramène à la vue par défaut de l'écran.
