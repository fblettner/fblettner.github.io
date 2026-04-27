---
title: Mappage des codes paiement
description: "UBL Defaults — onglet Payment. Code de moyen de paiement par défaut (BT-81) et mapping source → UBL fondé sur UNCL 4461."
keywords: [NomaUBL, UBL, defaults, BT-81, paiement, moyen de paiement, UNCL 4461, 30, 49, 58, mapping, SEPA, virement]
---

# Mappage des codes paiement

L'onglet **Payment** configure le `BT-81` — l'UBL **PaymentMeansCode** — au moyen d'une valeur par défaut et d'un mapping source → UBL. Chaque ligne du mapping se lit `<code source> → <code UBL>` et s'applique à la valeur extraite du XML source.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). Le défaut et le mapping sont contrôlés indépendamment par la bascule de surcharge : surcharge désactivée, les deux retombent sur `ubl-defaults.xsl`.

---

## Code de paiement par défaut

| Champ | Description |
|---|---|
| **Default** | Code de moyen de paiement émis lorsque la valeur source est absente ou ne possède pas de ligne de mapping. Choisi dans la liste de référence *payment-means* (UNCL 4461). Défaut B2B le plus courant : `30` (virement) ou `58` (virement SEPA). |

Le sélecteur de défaut reste visible en haut de l'onglet dans les deux modes (defaults et surcharge document).

### Codes UNCL 4461 utilisés par la réforme française

| Code | Libellé |
|---|---|
| **10** | Espèces. |
| **20** | Chèque. |
| **30** | Virement. |
| **42** | Virement bancaire (paiement sur compte bancaire). |
| **48** | Paiement par carte. |
| **49** | Prélèvement. |
| **57** | Convention permanente. |
| **58** | Virement SEPA. |
| **59** | Prélèvement SEPA. |
| **97** | Compensation entre partenaires. |
| **ZZZ** | Défini mutuellement (tout moyen de paiement convenu bilatéralement, hors codes UNCL). |

`30` et `58` sont interchangeables dans la plupart des flux B2B — `30` est le virement générique, `58` la variante SEPA. Sélectionner celui qu'attend la Plateforme Agréée destinataire ; pour le B2B français, `30` reste le défaut générique le plus sûr.

---

## Mapping source → UBL

Un éditeur à deux colonnes liste chaque code source connu en regard du code UBL vers lequel il doit être traduit.

| Colonne | Description |
|---|---|
| **Code source** | Texte libre — code tel qu'il apparaît dans le XML amont (par ex. `VIR`, `PRE`, `CHQ`). |
| **Code UBL** | Code UBL UNCL 4461 (choisi dans la liste de référence *payment-means* — `30`, `58`, `49`, `42`, `2`, etc.). |

Le bouton **Add** en bas ajoute une ligne, l'icône corbeille en supprime une. Aucun ordre implicite n'est appliqué — la recherche se fait par valeur de code source, chaque code source ne doit donc apparaître qu'une seule fois.

### Résolution du mapping

```
code paiement source du XML
    │
    ├─ ligne de mapping présente ? ─► code UBL de la ligne
    │
    └─ pas de ligne de mapping ?    ─► code paiement par défaut
```

Lorsque le code source est vide ou absent, la valeur par défaut s'applique directement, sans passer par le mapping.

---

## Conseils & bonnes pratiques

- **Couvrir l'ensemble du dictionnaire des codes paiement de la source.** Chaque valeur potentielle de l'amont doit posséder sa ligne de mapping — le repli sur le défaut masque des problèmes de qualité de données qui ne se révèlent qu'au niveau du destinataire.
- **`30` (virement) est le défaut français le plus sûr.** Universellement accepté par la Plateforme Agréée et adapté au flux B2B le plus courant. Réserver `58` (SEPA) aux templates où le routage spécifique SEPA fait partie de l'accord contractuel.
- **Ajouter les codes dans la liste de référence, pas ici.** Si un code UBL est absent de la déroulante, l'ajouter à la liste *payment-means* — la déroulante le récupère au prochain rechargement.
- **Surcharger par template uniquement lorsque le schéma de paiement diffère.** Un type de document toujours payé par prélèvement (par ex. facturation récurrente) constitue un cas légitime de surcharge par template ; un paiement ponctuel non.
