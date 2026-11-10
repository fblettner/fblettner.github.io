---
title: Remises / charges
description: "NomaUBL Valeurs par défaut UBL — onglet Remises / charges : code motif par défaut choisi dans les listes UNTDID 5189 (remises) et 7161 (frais), motif par défaut et correspondance des codes source vers les codes UBL, pour les remises et frais du document et des lignes."
keywords: [NomaUBL, UBL, valeurs par défaut, remises, frais, charges, code motif, UNTDID 5189, UNTDID 7161, BT-97, BT-98, BT-104, BT-105, ChargeIndicator, JD Edwards, SAP, NetSuite, ERP sur mesure]
---

# Remises / charges

L'onglet **Remises / charges** règle la façon dont NomaUBL renseigne le **code motif** et le **motif** des remises et des frais, au niveau du document (BG-20 / BG-21) comme au niveau des lignes (BG-27 / BG-28) : codes source convertis en codes UNTDID 5189 / 7161, code par défaut si la source n'en donne pas, et libellé de la liste si la source ne donne pas de motif. Le fonctionnement est identique quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP sur mesure.

Le mécanisme de remplacement (valeurs partagées, ou remplacement pour un document) est décrit dans la [Vue d'ensemble](./overview.md).

---

## Deux blocs

| Bloc | Sens | Code / motif |
|---|---|---|
| **Remise (ChargeIndicator = false)** | Montant déduit | BT-98 / BT-140 (code), BT-97 / BT-139 (motif) |
| **Frais (ChargeIndicator = true)** | Montant ajouté | BT-105 / BT-145 (code), BT-104 / BT-144 (motif) |

Chaque bloc comporte les mêmes champs :

| Champ | Description |
|---|---|
| **Code motif** | Code par défaut, choisi dans la liste — motifs de remise (UNTDID 5189) ou motifs de frais (UNTDID 7161), affichés avec leur libellé. Utilisé quand la source ne donne pas de code. Le choix d'un code renseigne **Motif** avec son libellé, sauf si un texte a déjà été saisi. |
| **Motif** | Motif par défaut, utilisé avec le code par défaut (ou en l'absence de tout code). |
| **Correspondance des codes source** | Tableau **Code externe** → **Code UBL** : convertit un code du système source en code de la liste. Un code source absent du tableau est repris tel quel. |

Les deux listes sont livrées avec NomaUBL, en français et en anglais (*list-allowance-reasons*, *list-charge-reasons*), et figurent dans la zone *Custom data* des Paramètres.

---

## Choix du code et du motif

Pour chaque remise ou frais, au niveau du document ou de la ligne :

| | Règle |
|---|---|
| **Code** | Pas de code dans la source → le code par défaut. Sinon le code source, converti par la correspondance s'il y figure. |
| **Motif** | 1. Le motif de la source. 2. À défaut, le motif par défaut, si le code est le code par défaut ou s'il n'y a pas de code. 3. À défaut, le libellé du code dans la liste (libellé français). |

Le sens vient de l'*indicateur de frais* du mapping : le bloc Frais s'applique aux frais, le bloc Remise aux remises. Le mapping des remises et frais eux-mêmes — section *Document Allowances/Charges* au niveau du document et *Line Allowances/Charges* au niveau des lignes — est décrit sur la page [Éditeur XSL](../xsl-editor.md#variable-mapping).

---

## Conseils & bonnes pratiques

- **Convertir les codes source plutôt que les motifs.** Un système source porte en général ses propres codes de remise ou de frais : une ligne de correspondance par code donne un code UNTDID valide et, par la liste, un motif lisible.
- **Renseigner un code par défaut pour chaque sens utilisé.** Sans code ni motif, une remise ou des frais ne respectent pas les règles EN 16931 sur les motifs.
- **Garder le motif par défaut cohérent avec le code par défaut.** Ce motif n'accompagne que ce code ; pour tout autre code, c'est le libellé de la liste qui s'applique.
- **Un remplacement par document est rarement utile.** Le réserver à un document dont la source utilise ses propres codes.
