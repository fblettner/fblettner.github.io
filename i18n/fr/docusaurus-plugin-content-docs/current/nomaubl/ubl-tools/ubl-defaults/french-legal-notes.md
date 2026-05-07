---
title: Mentions légales françaises
description: "UBL Defaults — onglet Notes. Notes légales au niveau document (BT-22) portant les mentions obligatoires françaises — délai de paiement, indemnité de recouvrement, conditions générales — avec préfixe de type de note."
keywords: [NomaUBL, UBL, defaults, BT-22, notes, mention légale, délai de paiement, indemnité de recouvrement, conditions générales, types de note, préfixe]
---

# Mentions légales françaises

L'onglet **Notes** gère les mentions légales au niveau document (`BT-22`) que NomaUBL ajoute à tout document UBL généré. Chaque note se compose d'un **préfixe de type** (UNTDID 4451 ou code d'extension NomaUBL) suivi d'un texte libre. La Plateforme Agréée et les consommateurs aval s'appuient sur le préfixe pour aiguiller la note vers le champ approprié de leurs propres systèmes.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). L'ensemble de la liste de notes est gouverné par une bascule de surcharge unique.

---

## Éditeur de notes

Chaque note est une carte comportant deux champs :

| Champ | Description |
|---|---|
| **Type** | Code de type de note choisi dans la liste de référence *note-types* — alimente le préfixe du `BT-22` (par ex. `#PMD#` pour le délai de paiement, `#PMT#` pour les modalités de paiement, `#REG#` pour la mention réglementaire générale, `#ABL#` pour la référence de facturation, `#AAI#` pour les informations complémentaires). |
| **Text** | Corps libre de la note. Peut s'étendre sur plusieurs lignes. La note UBL complète est rendue sous la forme `#TYPE#<texte>`. |

L'icône corbeille supprime la note ; le bouton **Add** en bas ajoute une note vide.

### Types de note standard (liste de référence note-types)

| Préfixe | Usage courant |
|---|---|
| `REG` | Mention réglementaire générique (par ex. *« TVA non applicable, art. 293 B du CGI »* pour la franchise). |
| `ABL` | Référence de facturation / référence de période. |
| `AAI` | Informations complémentaires sur la facture. |
| `PMD` | Mention de délai de paiement / pénalités de retard. |
| `PMT` | Description des modalités de paiement. |
| `AAB` | Référence de facturation supplémentaire. |
| `TXD` | Avis fiscal (mentions complémentaires liées à la TVA). |

La liste complète des préfixes est gérée dans la liste de référence *note-types* (*Configuration → Reference Lists*). Ajouter un préfixe à cette liste pour qu'il apparaisse dans la déroulante.

---

## Mentions françaises obligatoires (montage type)

| Type | Texte requis | Quand |
|---|---|---|
| `PMD` | *Tout retard de paiement entraînera des pénalités calculées au taux légal en vigueur, conformément à l'article L. 441-10 du Code de commerce.* | Sur toute facture B2B française. |
| `PMD` | *Indemnité forfaitaire pour frais de recouvrement de 40 € (article D. 441-5 du Code de commerce).* | Sur toute facture B2B française. |
| `REG` | *TVA non applicable, art. 293 B du CGI* | Factures de micro-entrepreneur sous le seuil de franchise (à associer à la catégorie TVA `E` et au code `VATEX-FR-FRANCHISE`). |
| `PMT` | Mention d'escompte quand la facture en propose un. | Factures qui proposent un escompte de paiement anticipé. |

Ces mentions sont **statutaires** au titre du Code de commerce et du Code général des impôts — elles doivent apparaître sur la facture imprimée comme sur la facture électronique. NomaUBL les émet à l'identique dans le champ BT-22.

---

## Conseils & bonnes pratiques

- **Traiter les valeurs par défaut comme le socle réglementaire.** Les deux notes `PMD` (pénalités + indemnité de recouvrement) sont statutaires pour toute facture B2B française. À configurer une fois dans le fichier de defaults ; les surcharges document ne doivent intervenir que pour des écarts justifiés (par ex. une clause contractuelle client spécifique).
- **Reproduire les mentions à la lettre.** La rédaction du Code de commerce sert de référence en audit et en contentieux. La paraphrase affaiblit la valeur juridique de la facture. Recopier le texte officiel.
- **`REG` est le type adapté à la mention de franchise.** À associer à un montage TVA (catégorie `E`, code VATEX `VATEX-FR-FRANCHISE`) dans l'onglet [Catégories de TVA](./vat-categories.md). Sans la mention textuelle, les règles BR-FR rejettent la facture.
- **Surcharger par template uniquement quand la rédaction diverge légitimement.** Un template qui émet des factures vers une filiale étrangère peut demander une traduction anglaise ; un template domestique reprend les defaults.
- **La liste de référence pilote la déroulante.** Les préfixes personnalisés s'ajoutent à *note-types* dans *Configuration → Reference Lists* ; la déroulante les récupère au prochain rechargement.
