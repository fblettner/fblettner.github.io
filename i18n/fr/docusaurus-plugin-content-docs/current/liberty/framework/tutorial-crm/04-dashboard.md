---
title: Étape 4 — Tableau de bord du pipeline commercial
description: "Ajouter au CRM un tableau de bord du pipeline : requêtes d'agrégation, indicateurs comparés à la période précédente, graphique en barres enregistré du pipeline par étape, table des dernières activités, et l'entrée de menu qui l'ouvre."
keywords: [Liberty Next, tutoriel, CRM, tableau de bord, indicateur, graphique, période, PERIOD_FROM, période précédente, widgets]
---

# Étape 4 — Tableau de bord du pipeline commercial

Un tableau de bord réunit le pipeline sur une page : montant en cours, montant gagné sur la période, nombre d'affaires en cours, pipeline par étape et dernières activités.

---

## Les requêtes

Dans **Paramètres → Connecteurs → crm → Requêtes**, **＋ Ajouter une requête** pour chacune :

```sql
-- open_deals_get — affaires en cours
SELECT ID, AMOUNT FROM deals WHERE STAGE NOT IN ('WON', 'LOST')

-- won_deals_get — affaires gagnées sur la période du tableau de bord
SELECT ID, AMOUNT, CLOSE_DATE FROM deals
WHERE STAGE = 'WON' AND CLOSE_DATE BETWEEN :PERIOD_FROM AND :PERIOD_TO

-- pipeline_by_stage_get — montant par étape
SELECT s.LABEL AS STAGE, s.ORD, SUM(d.AMOUNT) AS AMOUNT
FROM deals d JOIN deal_stages s ON s.CODE = d.STAGE
WHERE d.STAGE NOT IN ('WON', 'LOST')
GROUP BY s.LABEL, s.ORD ORDER BY s.ORD

-- recent_activities_get — dernières activités
SELECT a.HAPPENED_AT, c.NAME AS CUSTOMER, d.NAME AS DEAL, a.KIND, a.RECORDED_BY
FROM activities a JOIN deals d ON d.ID = a.DEAL_ID JOIN customers c ON c.ID = d.CUSTOMER_ID
ORDER BY a.HAPPENED_AT DESC
```

`:PERIOD_FROM` et `:PERIOD_TO` reçoivent la période choisie sur le tableau de bord.

---

## Le graphique

**Paramètres → Graphiques**, portée `crm`, **Add chart** :

| Onglet | Réglage |
|---|---|
| General | Identifiant `pipeline_by_stage`, libellé `Pipeline par étape`, requête `pipeline_by_stage_get`. |
| Chart | **Barres**, axe X `STAGE`, une série `AMOUNT`, agrégation **Somme**. |

Voir [Graphiques](../charts.md).

---

## Le tableau de bord

**Paramètres → Tableaux de bord**, application `crm`, ajouter un tableau de bord `pipeline`, titre `Pipeline commercial` :

- **Période** : **Add a period**, ouverture sur *Ce mois-ci*, colonne de date `CLOSE_DATE`.
- **Widgets** (**Add widget**), dans cet ordre :

| Widget | Réglages | Largeur |
|---|---|---|
| Indicateur *Pipeline en cours* | Requête `open_deals_get`, colonne `AMOUNT`, agrégation `sum`. | 4 |
| Indicateur *Gagné* | Requête `won_deals_get`, colonne `AMOUNT`, agrégation `sum`, **Compare with the previous period**. | 4 |
| Indicateur *Affaires en cours* | Requête `open_deals_get`, colonne `ID`, agrégation `count`. | 4 |
| Graphique | Le graphique enregistré `pipeline_by_stage`. | 8, hauteur 2 |
| Table *Dernières activités* | Requête `recent_activities_get`, 10 lignes au plus. | 4, hauteur 2 |

Enregistrer. L'éditeur est en anglais. Voir [Tableaux de bord](../dashboards.md).

---

## L'entrée de menu

**Paramètres → Menus**, application `crm`, en tête d'arborescence : **＋ Élément**, libellé `Pipeline`, type `dashboard`, cible `crm.pipeline`, icône `barchart`. La placer au-dessus du dossier *Ventes* et la désigner comme **home** du connecteur (Paramètres → Connecteurs → crm) pour que l'application s'ouvre dessus.

---

## Résultat à l'écran

Ouvrir **Pipeline** :

- les trois indicateurs ; *Gagné* affiche son évolution par rapport à la période précédente ;
- les barres du pipeline par étape ;
- les dernières activités, dont celle enregistrée à l'étape 3.

Passer la période sur *Cette année* : l'indicateur *Gagné* suit. **↻** recharge tous les widgets.

---

## Bilan

Un tableau de bord qui répond à la question « où en est le pipeline ? » sans ouvrir d'écran, sur les mêmes requêtes et les mêmes permissions que le reste de l'application.

→ **[Étape 5 — Rôles et connexion](./05-auth.md)** : qui voit quoi.
