---
title: Type de facture
description: "UBL Defaults — onglet Invoice Type. Code de type de facture UBL par défaut (BT-3) et sélection par règles s'appuyant sur le XML source."
keywords: [NomaUBL, UBL, defaults, BT-3, type de facture, code type, 380, 381, 384, 389, règles, AND, OR, conditions]
---

# Type de facture

L'onglet **Invoice Type** configure le `BT-3` — l'UBL **InvoiceTypeCode** — au moyen d'une valeur par défaut et d'une liste ordonnée de règles conditionnelles. La première règle dont toutes les conditions sont satisfaites l'emporte ; si aucune règle ne correspond, la valeur par défaut s'applique.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md).

---

## Type de facture par défaut

| Champ | Description |
|---|---|
| **Default** | Code de type de facture utilisé quand aucune règle ne s'applique. Choisi dans la liste de référence *invoice-types* (voir *Configuration → Reference Lists*). Défaut B2B le plus courant : `380` (facture commerciale). |

### Codes UNTDID 1001 utilisés par la réforme française

| Code | Libellé |
|---|---|
| **380** | Facture commerciale. |
| **381** | Avoir. |
| **384** | Facture rectificative. |
| **386** | Facture d'acompte. |
| **389** | Facture auto-facturée. |
| **261** | Avoir auto-facturé. |
| **262** | Avoir pour Remise Globale. |
| **393** | Facture affacturée. |
| **396** | Avoir affacturé. |
| **471** | Facture rectificative auto-facturée. |
| **472** | Facture rectificative affacturée. |
| **473** | Facture rectificative auto-facturée affacturée. |
| **500** | Facture d'acompte auto-facturée. |
| **501** | Facture auto-facturée affacturée. |
| **502** | Avoir auto-facturé affacturé. |
| **503** | Avoir de facture d'acompte. |

---

## Sélection par règles

Sous la valeur par défaut, un éditeur de règles permet de faire varier le code de type en fonction de conditions évaluées sur les données source — typiquement les variables `TAG_*` déjà mappées dans l'*Éditeur XSL*.

Chaque **règle** comporte :

- Un **combinateur logique** — `AND` (toutes les conditions doivent être satisfaites) ou `OR` (au moins une).
- Un **résultat** — le code de type à émettre quand la règle se déclenche (choisi dans la même liste *invoice-types*).
- Une ou plusieurs **conditions**, chacune composée de :
  - Un **champ** — un nom de variable `TAG_*` (par ex. `TAG_TOTAL_HT`).
  - Un **opérateur** — voir le tableau ci-dessous.
  - Une **valeur** — requise pour `eq` / `ne` / `contains` / `not-contains` ; ignorée sinon.

### Opérateurs

| Opérateur | Signification | Valeur requise |
|---|---|---|
| `> 0` (`gt0`) | Numérique : strictement positif | non |
| `< 0` (`lt0`) | Numérique : strictement négatif | non |
| `≥ 0` (`ge0`) | Numérique : positif ou nul | non |
| `≤ 0` (`le0`) | Numérique : négatif ou nul | non |
| `= valeur` (`eq`) | Égalité texte / numérique | oui |
| `≠ valeur` (`ne`) | Inégalité texte / numérique | oui |
| `non vide` (`not-empty`) | Champ présent et non vide | non |
| `vide` (`empty`) | Champ absent ou vide | non |
| `contient` (`contains`) | Le champ contient la valeur | oui |
| `ne contient pas` (`not-contains`) | Le champ ne contient pas la valeur | oui |

### Ordre d'évaluation

Les règles sont évaluées **de haut en bas**. La première règle dont la combinaison de conditions est satisfaite l'emporte. La valeur par défaut n'est utilisée que quand aucune règle ne s'applique. Pour réordonner, supprimer et recréer — l'éditeur ne propose pas de poignée de glisser-déposer pour le moment.

---

## Conseils & bonnes pratiques

- **Schéma courant : séparer factures et avoirs par signe du total.** Une règle `TAG_TOTAL_HT < 0 → 381` couplée à un défaut `380` suffit pour la plupart des facturations B2B — les totaux négatifs deviennent des avoirs.
- **Privilégier `eq` sur le type de document de la source quand il est disponible.** Si le XML source porte `TAG_DOCUMENT_TYPE` = `RI` pour les factures et `RM` pour les avoirs, deux règles `eq` produisent un mapping sans ambiguïté qui ne s'appuie sur aucune heuristique numérique.
- **Les règles évaluent les valeurs source, pas la sortie UBL.** Les variables `TAG_*` font référence à celles définies dans le XSLT actif (voir *XSL Editor*). Utiliser des noms qui y existent ; les noms inexistants sont traités silencieusement comme vides.
- **Ajouter les codes dans la liste de référence, pas ici.** Si `380` / `381` / `384` / `389` ne suffisent pas (par ex. un code de type personnalisé), ajouter le code à la liste *invoice-types* — le sélecteur par défaut et celui des règles le récupèrent automatiquement.
