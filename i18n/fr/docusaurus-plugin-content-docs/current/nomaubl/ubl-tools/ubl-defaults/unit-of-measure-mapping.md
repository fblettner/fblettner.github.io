---
title: Mappage des unités de mesure
description: "UBL Defaults — onglet Units. Code d'unité par défaut (BT-130) et mapping source → code UN/ECE Recommendation 20."
keywords: [NomaUBL, UBL, defaults, BT-129, BT-130, unité, unité de mesure, UN/ECE, Recommendation 20, C62, KGM, MTR, LTR, HUR, mapping]
---

# Mappage des unités de mesure

L'onglet **Units** configure le `BT-130` — l'UBL **InvoicedQuantity/@unitCode** — au moyen d'une valeur par défaut et d'un mapping source → UBL. Chaque ligne associe un code d'unité amont (quelle que soit la valeur émise par la source — `EA`, `PCS`, `KG`, `H`…) à son équivalent UN/ECE Recommendation 20.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). Le défaut et le mapping sont contrôlés indépendamment par la bascule de surcharge.

---

## Unité par défaut

| Champ | Description |
|---|---|
| **Default** | Code d'unité émis lorsque la valeur source est absente ou ne possède pas de ligne de mapping. Choisi dans la liste de référence *unit-codes*. Repli standard : `C62` (un — utilisé lorsque la source ne porte pas d'information d'unité). |

Le sélecteur de défaut reste visible en haut de l'onglet dans les deux modes.

---

## Mapping source → UBL

Un éditeur à deux colonnes liste chaque code source connu en regard du code UN/ECE vers lequel il doit être traduit.

| Colonne | Description |
|---|---|
| **Code source** | Texte libre — code tel qu'il apparaît dans le XML amont (par ex. `EA`, `PCS`, `KG`, `H`, `M`). |
| **Code UBL** | Code UN/ECE Recommendation 20 (choisi dans la liste de référence *unit-codes*). |

### Codes UN/ECE Recommendation 20 courants

| Code | Unité |
|---|---|
| `C62` | Un (pièce, unité) |
| `EA` | Each |
| `H87` | Pièce |
| `HUR` | Heure |
| `KGM` | Kilogramme |
| `MTR` | Mètre |
| `LTR` | Litre |
| `MTQ` | Mètre cube |
| `KMT` | Kilomètre |
| `MIN` | Minute |
| `DAY` | Jour |
| `MON` | Mois |

Ajouter les codes effectivement produits par le système amont — il n'y a aucun intérêt à recenser tous les codes UN/ECE possibles.

### Résolution du mapping

```
code unité source du XML
    │
    ├─ ligne de mapping présente ? ─► code UBL de la ligne
    │
    └─ pas de ligne de mapping ?    ─► code unité par défaut
```

Lorsque le code source est vide ou absent, la valeur par défaut s'applique directement.

---

## Conseils & bonnes pratiques

- **Mapper les codes effectivement émis par la source.** Une facture B2B utilise typiquement entre 5 et 10 codes d'unités (pièce, heure, kg, mètre, litre, jour, mois). Ajouter plus de lignes que la source n'en produit ne nuit pas, mais reste inutile.
- **`C62` est le seul repli sûr pour « pas d'unité ».** Lorsque la source omet l'unité, la Plateforme Agréée destinataire attend tout de même une valeur. `C62` (un) constitue le repli canonique sans contraindre le consommateur aval.
- **Les factures de services privilégient `HUR` / `DAY` / `MON` à `EA`.** Le code d'unité porte une information sémantique exploitée par les systèmes aval pour le rapprochement avec le bon de commande — préférer l'unité qui reflète réellement la facturation.
- **Surcharger par template uniquement lorsque le dictionnaire d'unités diffère.** Un template purement marchandises et un template purement services peuvent légitimement embarquer des mappings différents ; une facture ponctuelle doit réutiliser les defaults.
