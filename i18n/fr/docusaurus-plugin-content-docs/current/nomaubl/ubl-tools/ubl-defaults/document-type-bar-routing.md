---
title: Type de document (routage BAR)
description: "UBL Defaults — onglet Document Type. Classification BAR (B2B / B2G / B2BINT / B2C / OUTOFSCOPE / ARCHIVEONLY / DOCUMENT) utilisée pour aiguiller le document au sein de la Plateforme Agréée."
keywords: [NomaUBL, UBL, defaults, BAR, routage, B2B, B2G, B2BINT, B2C, OUTOFSCOPE, ARCHIVEONLY, DOCUMENT, mapping]
---

# Type de document (routage BAR)

L'onglet **Document Type** configure la classification **BAR** — un indicateur interne NomaUBL qui détermine vers quel canal aval la Plateforme Agréée doit aiguiller le document. La valeur est tirée d'une énumération figée :

| Valeur | Signification |
|---|---|
| `B2B` | Facture business-to-business standard. Routée par le flux de facturation électronique. |
| `B2G` | Facture business-to-government (acheteur public, pipeline Chorus Pro). |
| `B2BINT` | B2B international — partenaire hors France / hors UE. |
| `B2C` | Business-to-consumer. Routé uniquement par le flux d'e-reporting — pas de dépôt PA. |
| `OUTOFSCOPE` | Document hors périmètre de la réforme (par ex. facturation interne). |
| `ARCHIVEONLY` | Archivé, non transmis. |
| `DOCUMENT` | Document générique (hors facture) acheminé pour référence. |

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). Le défaut et le mapping sont contrôlés indépendamment par la bascule de surcharge.

---

## Type de document par défaut

| Champ | Description |
|---|---|
| **Default** | Valeur BAR utilisée quand la valeur source est absente ou ne possède pas de ligne de mapping. Choisie dans l'énumération ci-dessus. La grande majorité des installations conservent `B2B` par défaut. |

Le sélecteur de défaut reste visible en haut de l'onglet dans les deux modes.

---

## Mapping source → BAR

Un éditeur à deux colonnes liste chaque classification source connue en regard de la valeur BAR qu'elle doit résoudre.

| Colonne | Description |
|---|---|
| **Code source** | Texte libre — code tel qu'il apparaît dans le XML amont (par ex. une catégorie client JDE, un rôle partenaire SAP, un drapeau de routage personnalisé). |
| **Valeur BAR** | L'une des sept valeurs ci-dessus. |

Le mapping est le seul mécanisme permettant de séparer un flux B2B / B2G / B2C produit par un même template — aucun éditeur de règles conditionnelles n'est proposé sur cet onglet.

### Résolution du mapping

```
code de routage source du XML
    │
    ├─ ligne de mapping présente ? ─► valeur BAR de la ligne
    │
    └─ pas de ligne de mapping ?    ─► valeur BAR par défaut
```

Quand le code source est vide ou absent, la valeur par défaut s'applique directement.

---

## Conseils & bonnes pratiques

- **BAR et le [Cadre de facturation](./business-process-type.md) (BT-23) sont orthogonaux — à tenir cohérents sans les confondre.** BAR porte le *canal* (B2B / B2G / B2C) ; le BT-23 porte la *nature de la facture* (biens / services / mixte) et le stade du cycle de vie. Un document `B2G` requiert tout de même un code Cadre (`B1` / `S1` / `M1`, ou `S3` en sous-traitance) ; un Cadre `B1` requiert tout de même un BAR (typiquement `B2B`).
- **`B2C` n'est pas transmis à la PA.** Il est seulement déclaré dans le flux d'e-reporting. À utiliser pour les factures destinées à un particulier — jamais pour des partenaires B2B non encore soumis à la réforme.
- **Réserver `ARCHIVEONLY` aux exclusions légitimes.** Archiver sans transmettre court-circuite le canal réglementaire. Cas valides : documents internes, tests, corrections ponctuelles.
- **Un spool qui mélange B2B et B2C** peut être résolu par ce mapping quand le XML source porte un classifieur clair. Sinon, *Document Types → runtime args* est l'endroit approprié pour surcharger par type de document — voir la [page Document Types](../../configuration/system/document-types.md).
