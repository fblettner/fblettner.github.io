---
title: Remises / charges
description: "Valeurs par défaut UBL — onglet Remises / charges. Texte et code de motif par défaut, par direction (BR-42 pour les remises, BR-43 pour les charges) ; `ChargeIndicator` choisit la paire au moment de l'émission."
keywords: [NomaUBL, UBL, valeurs par défaut, remises, charges, BR-42, BR-43, motif, code motif, ChargeIndicator]
---

# Remises / charges

L'onglet **Remises / charges** porte le **texte de motif** et le **code motif** de repli qui viennent compléter `BR-42` (remises) et `BR-43` (charges) quand le modèle par facture ou par ligne renvoie vide pour ce champ. `ChargeIndicator` choisit la direction au moment de l'émission, donc une seule configuration couvre les deux cas.

Le mécanisme d'override est décrit dans la [vue d'ensemble](./overview.md).

---

## Motifs de repli

Deux paires de champs — une pour les remises (montant en moins), une pour les charges (montant en plus).

| Champ | Direction | Effet |
|---|---|---|
| **Motif de remise** | Remise (`ChargeIndicator = false`) | Texte libre émis comme motif de remise quand la valeur mappée est vide (BR-42). |
| **Code motif remise** | Remise | Code motif correspondant (UNCL 5189). |
| **Motif de charge** | Charge (`ChargeIndicator = true`) | Texte libre émis comme motif de charge quand la valeur mappée est vide (BR-43). |
| **Code motif charge** | Charge | Code motif correspondant (UNCL 7161). |

Le moteur choisit la paire en regardant le `ChargeIndicator` émis — `true` prend la paire charge, `false` prend la paire remise. Le modèle n'a pas besoin de brancher.

---

## Quand chaque repli s'applique

Les remises / charges **au niveau document** comme **au niveau ligne** cherchent leur repli ici :

```
chemin de motif par ligne ou par facture
    │
    ├─ renvoie une valeur ? ────► cette valeur est émise
    │
    └─ vide ?               ────► ChargeIndicator choisit la paire de repli ci-dessus
```

Pour le cas ligne, ce paramétrage se combine avec la section *Line Allowances / Charges* de l'[éditeur XSL](../xsl-editor.md) — y compris les modes remise dérivée d'un pourcentage et remise sans groupe qui y sont documentés.

---

## Conseils et bonnes pratiques

- **Renseigner les deux paires même si une seule direction sert.** Le `ChargeIndicator` prend la paire qui correspond ; laisser une direction vide fait disparaître le repli sur cette direction et la ligne reste sans motif.
- **Faire correspondre le code motif au texte.** Une règle schematron vérifie que le code appartient à la bonne liste — piocher dans UNCL 5189 pour les remises et UNCL 7161 pour les charges.
- **Une surcharge par document est rarement nécessaire.** Les valeurs par défaut couvrent le cas courant où un partenaire attend la même formulation pour toutes les remises et charges ; réserver une surcharge par document à un modèle qui utilise vraiment un texte différent.
