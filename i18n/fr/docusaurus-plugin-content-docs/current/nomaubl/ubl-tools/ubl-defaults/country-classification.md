---
title: Pays & classification
description: "Valeurs par défaut UBL — onglet Pays & classification. Format côté source du pays d'origine en ligne (BT-159) et repli sur le code de classification, le listID du schéma et sa version (BT-158)."
keywords: [NomaUBL, UBL, valeurs par défaut, BT-158, BT-159, pays d'origine, classification produit, schéma, listID, ISO 3166, par ligne]
---

# Pays & classification

L'onglet **Pays & classification** paramètre le **pays d'origine** en ligne (`BT-159`) et la **classification produit** (`BT-158`). Il indique au moteur comment le XML source exprime le pays d'une ligne, et il porte les valeurs de repli pour la classification (code, listID du schéma, version) quand le chemin par ligne renvoie vide.

Le mécanisme d'override est décrit dans la [vue d'ensemble](./overview.md). Le format pays et les replis de classification s'activent indépendamment par la bascule d'override.

---

## Pays d'origine (BT-159)

Le sélecteur **Format pays** déclare comment le XML source exprime le pays d'origine sur chaque ligne — le moteur résout ensuite cette valeur brute contre la [liste de référence des pays](../../configuration/reference-lists.md) au moment de la sauvegarde et écrit le code ISO 3166-1 alpha-2 dans la facture UBL.

| Champ | Description |
|---|---|
| **Format pays** | La forme de la valeur source sur chaque ligne — `Code ISO` (la source porte déjà `FR`, `DE`, …), `Libellé français` (`France`, `Allemagne`, …) ou `Libellé anglais` (`France`, `Germany`, …). |

Comme la résolution s'appuie sur la liste partagée, il n'y a aucune table de correspondance parallèle à maintenir ici — si un libellé est erroné, on le corrige une fois dans la liste des pays et chaque déploiement le récupère.

Le chemin source par ligne lui-même se règle dans l'[éditeur XSL](../xsl-editor.md), section *Invoice Lines*, en même temps que le chemin du code de classification.

---

## Replis de classification (BT-158)

Trois valeurs de repli prennent le relais quand le chemin de classification d'une ligne renvoie vide. Elles garantissent un groupe de classification bien formé même sur les lignes où la source ne porte pas les métadonnées.

| Champ | Description |
|---|---|
| **Code de classification par défaut** | Le code de classification produit émis sur les lignes où le chemin par ligne est vide. Texte libre — doit appartenir au schéma identifié en dessous. |
| **listID du schéma** | L'identifiant du schéma de classification (`HS`, `UNSPSC`, `CN`, …). Apparaît en `listID="…"` sur l'élément UBL. |
| **Version** | La version du schéma, quand la plateforme l'exige. Apparaît entre crochets après le listID partout où la classification est affichée (détail facture, PDF). |

Quand le chemin par ligne renvoie une valeur, le code propre à la ligne l'emporte et le repli reste en retrait.

---

## Comment se fait la résolution au moment de la sauvegarde

```
ligne du XML source
    │
    ├─ Le chemin pays renvoie ? ─► analyse selon Format pays ─► ISO 3166 depuis la liste des pays
    │
    └─ Le chemin pays vide ?    ─► aucun pays émis sur la ligne

ligne du XML source
    │
    ├─ Le chemin classification renvoie ? ─► code de la ligne avec son listID + version
    │
    └─ Le chemin classification vide ?    ─► code par défaut + listID + version définis ici
```

Les deux résolutions se font au moment de la sauvegarde, donc un libellé pays corrigé ou un listID retouché s'applique dès la prochaine facture — pas de re-mapping, pas de nouvelle sauvegarde du modèle.

---

## Conseils et bonnes pratiques

- **Choisir une fois le format qui correspond au spool source.** Toutes les lignes le lisent de la même façon ; un changement de format par ligne relève d'une surcharge par document, pas d'ici.
- **Alimenter d'abord la liste de référence des pays.** Un libellé mal orthographié y provoque le même défaut de correspondance sur chaque ligne — corriger la liste règle tout en un seul point.
- **Le repli de classification est un filet de sécurité, pas une classification par défaut de la facture.** Si la plupart des lignes portent le code, laisser vide ici — un mauvais repli pollue toutes les lignes qui ne mappent pas.
- **La *Version* est facultative.** Vide pour les schémas qui ne se versionnent pas (`HS`, `CN`) ; renseignée pour `UNSPSC` quand la plateforme destinataire fixe une version.
