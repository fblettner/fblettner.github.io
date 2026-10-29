---
title: Analyser les données
description: "L'explorateur de données de Liberty Next au quotidien : le volet des champs, les étagères Lignes, Mesures et Filtres, la période, le Top N, les vues tableau, croisé, barres, courbes, secteurs et KPI, la vue détail, la descente vers les lignes d'un chiffre et le dialogue de l'enregistrement."
keywords: [Liberty Next, explorateur de données, analyse, volet des champs, étagères, lignes, mesures, filtres, période, tableau croisé, graphique, KPI, détail, descente]
---

# Analyser les données

L'explorateur s'ouvre depuis la **boussole** de l'en-tête. Le sélecteur en haut à droite passe d'un modèle accessible à l'autre ; choisir une application dans la navigation de gauche ouvre le modèle de cette application.

L'analyse se relance d'elle-même un instant après chaque modification ; **Exécuter** la relance à la demande.

---

## Volet des champs \{#fields\}

Le volet de gauche liste les entités du modèle — l'entité analysée dépliée, les autres repliées — avec leur badge **1..1** ou **1..n**. Dans chaque entité, les dimensions viennent d'abord, puis les **Σ Mesures**. La zone de recherche filtre les champs de toutes les entités.

| Action | Résultat |
|---|---|
| Clic sur un champ | Une dimension rejoint **Lignes**, une mesure **Mesures**. |
| Entonnoir d'un champ | Le champ rejoint **Filtres**. |
| Glisser un champ | Le dépose sur l'étagère voulue. |
| Double-clic sur une entité | En fait l'**entité analysée** — le point de départ de l'analyse (le pivot par défaut). Le sélecteur à gauche de la barre d'outils fait de même. |

Les champs déjà utilisés sont mis en évidence. **Nouveau champ calculé**, en bas du volet, ouvre l'[éditeur de champ calculé](./calculated-fields.md).

---

## Étagères \{#shelves\}

| Étagère | Contenu |
|---|---|
| **Lignes** | Les dimensions de regroupement. Une date reçoit une granularité : *Valeur exacte*, *Jour*, *Semaine*, *Mois* (par défaut), *Trimestre*, *Année*. En vue détail, cette étagère liste les colonnes affichées. |
| **Mesures** | Un agrégat par pastille : *Somme*, *Moyenne*, *Min*, *Max*, *Nombre*, *Nombre distinct* pour un nombre ; *Nombre* ou *Nombre distinct* sinon. **+** ajoute un nombre de lignes. Une dimension déposée ici compte ses valeurs distinctes. |
| **Filtres** | Un champ, un opérateur, une valeur. Texte : *contient*, `=`, `≠`, *commence par*, *finit par*, *parmi*, *est vide*, *n'est pas vide*. Nombres et dates : `=`, `≠`, *entre*, `<`, `≤`, `>`, `≥`, *parmi*, *est vide*, *n'est pas vide*. Un champ doté d'une liste de valeurs propose ses valeurs ; *parmi* accepte une liste séparée par des virgules. Sur un champ date ou date-heure, un jour vaut pour la journée entière : `≤` et la fin d'*entre* conservent les lignes de ce jour quelle que soit leur heure, `=` et `≠` signifient dans ce jour ou en dehors ; la date se choisit avec le sélecteur de date de l'application. |

Les pastilles se réordonnent par glisser-déposer dans une même étagère ; la croix en retire une. Une valeur de filtre s'applique avec **Entrée** ou en quittant le champ.

---

## Période et Top N \{#period\}

La barre **Période** apparaît dès que l'entité analysée a un champ date : choisir le champ (la date par défaut de l'entité en premier), puis un préréglage — *Aujourd'hui*, *Hier*, *7 derniers jours*, *30 derniers jours*, *Ce mois-ci*, *Mois dernier*, *Ce trimestre*, *Cette année*, *Année dernière*, *12 derniers mois* — ou une *Période libre* choisie sur le calendrier. *Toutes les dates* retire la période.

**Top** conserve les N premiers groupes (jusqu'à 10 000). La mention de la barre d'outils indique *N groupe(s) sur M ligne(s)*, et précise si la liste a été coupée ou si les chiffres sont partiels.

---

## Vues \{#views\}

Les boutons de la barre d'outils changent de vue sans relancer la requête.

| Vue | Contenu |
|---|---|
| **Tableau** | Une ligne par groupe, triable par en-tête. Un clic sur une ligne descend vers ses lignes. |
| **Croisé** | Les lignes en hiérarchie repliable avec sous-totaux, une dimension étalée en **Colonnes** (*Automatique* : la dernière), un total général et une **Part** — *du parent* ou *du total* — à côté de chaque valeur. Les sous-totaux n'apparaissent que pour une somme ou un nombre : une somme de moyennes n'a pas de sens. Outils : tout déplier, tout replier, export Excel. Un clic sur une valeur descend vers ses lignes. |
| **Barres**, **Courbes** | La première dimension en abscisse, la deuxième (ou les mesures) en **Séries** ; les 10 premières séries, le reste regroupé dans *Autres* ; les dates dans l'ordre, les autres catégories par valeur ; option **Empilé**. |
| **Secteurs** | La première dimension en secteurs, les 10 premiers plus *Autres*. |
| **KPI** | Une carte par mesure, avec son total. |
| **Détail** | Les lignes elles-mêmes, 50 par page, avec l'étagère **Lignes** pour colonnes (à défaut, les champs de l'entité analysée). |

**Mesure** choisit la mesure du croisé ou du graphique (la première par défaut).

---

## Descente et enregistrement \{#drill\}

Un clic sur un groupe du tableau ou sur une valeur du croisé liste les **lignes qui composent ce chiffre** : la clé, les dimensions et les champs des mesures de chaque ligne. Les valeurs de la cellule s'affichent au-dessus de la liste (*Pays : France*, *Étape : Négociation*) ; **Retour à l'analyse** ramène aux chiffres.

En vue détail comme après une descente, une ligne d'une entité rattachée à un écran ouvre le **dialogue** de cet écran : l'enregistrement s'affiche comme dans l'écran et se modifie avec les mêmes droits. L'analyse se met à jour après l'enregistrement.

---

## Points d'attention

| Situation | Effet |
|---|---|
| Une mesure d'une entité 1..n à côté de dimensions du pivot. | Agrégée par ligne du pivot, sans dupliquer les lignes du pivot. |
| Deux entités 1..n dans les lignes. | Refusé, avec un message : une seule entité 1..n à la fois. |
| La mention signale des chiffres partiels. | Plus de 50 000 lignes regroupées ont été lues : resserrer la période ou ajouter un filtre. |
| Un superutilisateur veut voir la requête. | Le bouton **SQL** de la barre d'outils affiche l'instruction et ses valeurs. |

## Pour aller plus loin

- [Champs calculés](./calculated-fields.md) — des champs sur mesure.
- [Analyses enregistrées et tableaux de bord](./saved-and-dashboards.md) — conserver, partager, exporter.
