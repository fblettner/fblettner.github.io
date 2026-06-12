---
title: Valeurs par défaut de l'en-tête UBL
description: "UBL Defaults — onglet Header. Version UBL, identifiant de personnalisation (BT-24), pays par défaut (BT-40 / BT-55) et format de date d'entrée par template."
keywords: [NomaUBL, UBL, defaults, en-tête, BT-24, BT-40, BT-55, BT-54, BT-79, CountrySubentity, région, customizationID, ublVersion, pays, format de date, EN 16931, extended-ctc-fr]
---

# Valeurs par défaut de l'en-tête UBL

L'onglet **Header** configure les identifiants documentaires placés en tête de tout document UBL généré. Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md).

---

## Champs d'en-tête

| Champ | UBL | Description |
|---|---|---|
| **UBL Version** | `cbc:UBLVersionID` | Version de la spécification UBL appliquée. Valeur standard : `2.1`. |
| **Customization ID** | BT-24 | Profil de conformité. Pour la facturation électronique française : `urn:cen.eu:en16931:2017#conformant#urn.cpro.gouv.fr:1p0:extended-ctc-fr`. |
| **Default Country** | BT-40 / BT-55 | Code pays appliqué aux adresses postales du vendeur (`BT-40`) et de l'acheteur (`BT-55`) quand la source ne le renseigne pas. Choisi dans la liste de référence *countries*. |

Ces trois champs sont soumis au mécanisme de surcharge en mode document — ils apparaissent sous la bannière de surcharge.

---

## Région acheteur et livraison (`cbc:CountrySubentity`)

La **subdivision** du pays — la région de l'acheteur (BT-54) et celle du lieu de livraison (BT-79) — ne se règle pas sur cet onglet. NomaUBL ajoute `cbc:CountrySubentity` aux adresses de l'acheteur et de livraison quand le XSL du document renseigne les variables `TAG_CUSTOMER_REGION` et `TAG_DELIVERY_REGION` à partir des données source. Renseignez-les dans le XSL UBL du document (voir [Éditeur XSL](../xsl-editor.md)) ; sans elles, aucun `cbc:CountrySubentity` n'est produit : la région est simplement absente, jamais devinée.

---

## Date Input Format

Une sous-section **Date Input Format** distincte est placée sous les champs d'en-tête. Elle définit la manière dont NomaUBL interprète les dates issues du XML source (date d'émission BT-2, échéance BT-9, dates de période de ligne, etc.) avant leur normalisation au format ISO 8601 (`yyyy-MM-dd`) dans le document UBL.

| Format | Exemple | Remarques |
|---|---|---|
| `dd/MM/yyyy` | `31/12/2024` | Format français / européen courant. |
| `MM/dd/yyyy` | `12/31/2024` | Format états-unien. |
| `dd-MM-yyyy` | `31-12-2024` | Format européen à tirets. |
| `yyyy-MM-dd` | `2024-12-31` | ISO 8601 — **pas de conversion**, la valeur source est transmise telle quelle. |
| `yyyyMMdd` | `20241231` | Format compact, courant dans les sorties BIP JDE. |

Choisir le format correspondant au XML source. Quand les sources mélangent plusieurs formats, utiliser *Document Types → runtime args* pour surcharger par type de document plutôt que de jongler à ce niveau.

---

## Conseils & bonnes pratiques

- **Customization ID pilote la sélection Schematron.** Passer de EN 16931 à `extended-ctc-fr` (et inversement) sélectionne un jeu de règles différent dans *UBL Tools → Validate*. Aligner ce paramètre sur ce qu'attend la Plateforme Agréée destinataire.
- **Le pays par défaut ne comble que les omissions de la source.** Quand le XML source porte un code pays, la valeur source l'emporte quelle que soit la valeur par défaut.
- **Date Input Format est défini par fichier, hors mécanisme de surcharge.** Le renseigner une fois sur le fichier de defaults pour correspondre à la convention du système amont.
- **Préférer `yyyy-MM-dd` quand la source émet déjà des dates ISO.** Cette option contourne entièrement la conversion et est le choix le plus robuste.
