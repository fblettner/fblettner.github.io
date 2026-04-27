---
title: Sociétés fournisseurs
description: "UBL Defaults — onglet Suppliers. Annuaire des sociétés vendeur (AccountingSupplierParty) utilisé comme valeurs par défaut lorsque le XML source les omet, indexé par code société."
keywords: [NomaUBL, UBL, defaults, supplier, fournisseur, vendeur, BT-27, BT-29, BT-30, BT-31, BT-33, SIREN, SIRET, GLN, NAF, TVA, adresse]
---

# Sociétés fournisseurs

L'onglet **Suppliers** gère un annuaire de **sociétés vendeur (AccountingSupplierParty)** utilisé comme valeurs par défaut lorsque le XML source omet l'identification ou l'adresse côté vendeur. Chaque enregistrement est indexé par un code société interne porté par le XML source (typiquement un code société / KCO depuis JDE, un Bukrs depuis SAP, etc.).

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). La société par défaut et la liste de fournisseurs sont surchargeables indépendamment.

---

## Société par défaut

| Champ | Description |
|---|---|
| **Default supplier** | Code société appliqué lorsque le XML source ne porte pas d'identifiant vendeur reconnu. Choisi dans l'annuaire ci-dessous ; une valeur vide signifie « aucun défaut » (le XML source est attendu pour renseigner tous les champs vendeur). |

Lorsque la surcharge est active en mode document, le sélecteur de défaut apparaît en haut de l'onglet ; en mode defaults, il s'intègre à la vue de l'annuaire.

---

## Annuaire des fournisseurs

L'annuaire affiche une carte par société. Chaque carte contient :

### Ligne d'en-tête

| Champ | UBL | Description |
|---|---|---|
| **Code** | — | Code société interne (par ex. `00001`, `MAIN`, la clé société du système source). Sert au rapprochement avec le XML source et comme clé de recherche pour le sélecteur de défaut. |
| **Name** | BT-27 | Raison sociale légale. |

### Identifiants

| Champ | UBL | Description |
|---|---|---|
| **SIREN** | BT-29 | Identifiant entité juridique français à 9 chiffres. |
| **SIRET** | BT-29 | Identifiant établissement français à 14 chiffres. |
| **GLN** | BT-29 | Global Location Number GS1. |
| **NAF (APE)** | — | Code activité APE / NAF français (`00.00X`). Porté en tant qu'identifiant supplémentaire dans le document UBL. |
| **VAT** | BT-31 | Identifiant à la TVA (par ex. `FR00000000000`). |
| **Capital** | BT-33 | Texte du capital social (par ex. `Capital de 100 000 €`). |

### Adresse

| Champ | UBL | Description |
|---|---|---|
| **Street** | BT-35 | Adresse ligne 1. |
| **Street 2** | BT-36 | Adresse ligne 2 (optionnelle). |
| **Postal code** | BT-38 | Code postal. |
| **City** | BT-37 | Localité. |
| **Country** | BT-40 | Code pays ISO 3166-1 alpha-2 (choisi dans la liste de référence *countries*). |

L'icône corbeille de l'en-tête de carte supprime la société ; le bouton **Add** en bas ajoute une carte vide.

---

## Résolution d'une société vendeur

```
code société / KCO du XML source
    │
    ├─ correspond à une carte ?  ────► champs renseignés depuis la carte,
    │                                  les valeurs du XML source l'emportent
    │                                  sur les champs qu'il porte explicitement
    │
    └─ aucune correspondance ?    ────► champs renseignés depuis la
                                       société par défaut (ou vides
                                       si aucun défaut n'est défini)
```

L'annuaire constitue uniquement une couche de **valeurs par défaut** : tout champ porté explicitement par le XML source l'emporte sur la valeur stockée ici.

---

## Conseils & bonnes pratiques

- **Une carte par entité juridique.** Même lorsque plusieurs codes société internes partagent un même SIREN, des cartes distinctes facilitent le suivi de l'établissement (SIRET) et de l'adresse rattachés à chaque code.
- **Le code pays alimente le repli pays.** Lorsque la source omet le pays d'une adresse postale, NomaUBL retombe sur le `country` de cette carte plutôt que sur le défaut global de l'onglet [Header](./ubl-header-defaults.md). Renseigner `FR` pour les vendeurs français ; ne pas laisser vide.
- **Le texte du capital apparaît tel quel.** Le champ `Capital` est rendu textuellement dans le document UBL (BT-33), donc inclure la marque de devise et les mentions attendues par l'autorité réglementaire (par ex. `SAS au capital de 50 000 €`).
- **Surcharger par template uniquement lorsque le template porte un vendeur différent.** Une filiale émettant ses factures sous son propre SIREN constitue un cas légitime de surcharge ; une facture ponctuelle de l'entité principale, non.
- **Le sélecteur de défaut désigne la société émettrice la plus fréquente.** Lorsque la majorité des factures provient d'une seule entité juridique, la définir comme défaut — seuls les enregistrements exceptionnels nécessitent alors un code de correspondance dans le XML source.
