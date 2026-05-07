---
title: Mappage des codes devise
description: "UBL Defaults — onglet Currency. Devise par défaut (BT-5) et mapping source → code devise ISO 4217."
keywords: [NomaUBL, UBL, defaults, BT-5, devise, ISO 4217, EUR, USD, GBP, CHF, mapping, DocumentCurrencyCode]
---

# Mappage des codes devise

L'onglet **Currency** configure le `BT-5` — l'UBL **DocumentCurrencyCode** — au moyen d'une valeur par défaut et d'un mapping source → UBL. Chaque ligne associe un code devise amont à son équivalent ISO 4217.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). Le défaut et le mapping sont contrôlés indépendamment par la bascule de surcharge.

---

## Devise par défaut

| Champ | Description |
|---|---|
| **Default** | Code devise émis quand la valeur source est absente ou ne possède pas de ligne de mapping. Choisi dans la liste de référence *currency-codes* (ISO 4217). Défaut français standard : `EUR`. |

Le sélecteur de défaut reste visible en haut de l'onglet dans les deux modes.

---

## Mapping source → UBL

Un éditeur à deux colonnes liste chaque code devise source connu en regard du code ISO 4217 vers lequel il doit être traduit.

| Colonne | Description |
|---|---|
| **Code source** | Texte libre — code tel qu'il apparaît dans le XML amont (par ex. `EU` depuis une sortie BIP JDE, `EURO`, `€`). |
| **Code UBL** | Code ISO 4217 sur trois lettres (choisi dans la liste de référence *currency-codes*). |

### Résolution du mapping

```
code devise source du XML
    │
    ├─ ligne de mapping présente ? ─► code ISO 4217 de la ligne
    │
    └─ pas de ligne de mapping ?    ─► devise par défaut
```

Quand le code source est vide ou absent, la valeur par défaut s'applique directement.

---

## Conseils & bonnes pratiques

- **Seules les installations multi-devises ont besoin d'entrées ici.** Un déploiement mono-devise peut laisser le mapping vide et s'appuyer sur le défaut — chaque ligne se résout à cette valeur.
- **La plupart des systèmes amont émettent déjà de l'ISO 4217.** Le mapping est surtout utile pour les systèmes hérités où la devise est codée sur deux lettres ou via un code propre (`EU` au lieu de `EUR`, `US` au lieu de `USD`, etc.).
- **La devise par défaut doit correspondre à la devise de facturation du vendeur.** Un vendeur français a `EUR` par défaut ; changer le défaut pour une seule facture en devise étrangère est rarement le bon réflexe — il vaut mieux s'assurer que le XML source porte la devise explicite.
- **Ajouter les codes dans la liste de référence, pas ici.** Les codes cibles manquants s'ajoutent dans la liste *currency-codes* ; la déroulante les récupère au prochain rechargement.
