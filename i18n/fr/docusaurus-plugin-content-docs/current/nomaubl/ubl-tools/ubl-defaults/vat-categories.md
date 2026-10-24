---
title: Catégories de TVA
description: "UBL Defaults — onglet VAT. Catégorie TVA par défaut, taux zéro, mapping source → catégorie UBL (BT-118 / BT-151) et mapping catégorie → code d'exonération VATEX (BT-121)."
keywords: [NomaUBL, UBL, defaults, BT-118, BT-121, BT-151, TVA, S, Z, E, K, G, AE, O, VATEX, exonération, catégorie]
---

# Catégories de TVA

L'onglet **VAT** configure la classification TVA portée sur chaque ligne et sur les sous-totaux TVA au niveau document — `BT-118` (catégorie TVA de ligne) / `BT-151` (catégorie TVA de l'article facturé) et `BT-121` (code motif d'exonération). Il propose une catégorie par défaut, un code de taux zéro, une correspondance de catégorie et une correspondance d'exonération.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). Toutes les sections de cet onglet — y compris la grille des taux — sont gouvernées par une bascule de surcharge unique — l'activer fait basculer l'intégralité du groupe dans le fichier document, et la suppression retire le bloc de surcharge en totalité.

---

## Catégorie TVA par défaut

| Champ | Description |
|---|---|
| **Default category** | Catégorie TVA UBL émise quand le code source ne possède pas de ligne de mapping. Texte libre — typiquement une lettre (`S` standard, `Z` taux zéro, `E` exonéré, `K` intracommunautaire, `G` export, `AE` autoliquidation, `O` non soumis à la TVA). |
| **Zero rate** | Catégorie TVA UBL appliquée quand le montant de TVA d'une ligne est nul. Utile pour distinguer une ligne réellement à taux zéro (`Z`) d'une ligne exonérée (`E`) quand le XML source ne fournit que le pourcentage. |

---

## Mapping des codes de catégorie TVA

Un éditeur à deux colonnes associe les codes de catégorie TVA de la source aux codes UBL définis par la liste de référence *vat-categories*.

| Colonne | Description |
|---|---|
| **Code source** | Texte libre — code tel qu'il apparaît dans le XML amont (par ex. une catégorie JDE, un code taxe SAP, une valeur alphanumérique personnalisée). |
| **Code de catégorie TVA** | Valeur UBL choisie dans la liste de référence *vat-categories* (`S`, `Z`, `E`, `K`, `G`, `AE`, `O`). |

### Résolution du mapping de catégorie

```
code TVA source du XML
    │
    ├─ ligne de mapping présente ? ─► catégorie UBL de la ligne
    │
    └─ pas de ligne de mapping ?    ─► catégorie par défaut
```

Le paramètre de taux zéro l'emporte quand le montant de TVA calculé sur la ligne est nul — il prime sur le mapping dans ce cas.


Un code source terminé par `*` couvre tous les codes qui commencent ainsi — `FRND_*` couvre `FRND_1`, `FRND_3`… Les codes exacts passent d'abord, quel que soit l'ordre des lignes.

---

## Taux de TVA par code source \{#vat-rate-by-source\}

La grille **Correspondances code source → taux de TVA (BT-152)** attribue un taux à une ligne à partir du code dont sa catégorie TVA est tirée (`TAG_LINE_VAT_CATEGORY` dans le mapping) : une zone fiscale, un type de taxe ou un code composé dans le mapping. Elle sert les sources dont le spool n'imprime pas de taux, ou un taux auquel il ne faut pas se fier.

| Colonne | Description |
|---|---|
| **Code externe** | Le code source. Un code terminé par `*` couvre tous les codes qui commencent ainsi ; les codes exacts passent d'abord. |
| **Taux de TVA (%)** | Le taux, par exemple `5.5` (une virgule saisie devient un point). |

**Si la ligne porte déjà un taux** tranche entre les deux :

| Option | Effet |
|---|---|
| **Garder le taux source, la table complète les vides** *(défaut)* | Le taux lu dans la source l'emporte ; la grille ne renseigne que les lignes qui n'en ont pas. |
| **Une correspondance trouvée l'emporte** | Une ligne de la grille qui correspond remplace le taux imprimé par la source. |

Le taux trouvé s'applique à la ligne (BT-152) et aux lignes de ventilation de TVA construites à partir des lignes. Rien ne change dans les factures produites tant que la grille est vide. Un document peut remplacer la grille comme le reste de l'onglet TVA.

Exemple : `FRND_3 → 5.5`, `FRND_* → 20` — le code `FRND_3` donne 5,5 %, tout autre code `FRND_…` donne 20 %.

---

## Mapping des codes d'exonération VATEX

La seconde table de mapping couvre le **BT-121** — le code motif d'exonération de TVA (`VATEX-EU-79-C`, `VATEX-EU-IC`, `VATEX-FR-FRANCHISE`, etc.). Chaque ligne associe une catégorie UBL (la colonne *source* est ici la catégorie TVA, et non un code libre) au code `VATEX-*` qui explicite l'exonération dans le document UBL.

| Colonne | Description |
|---|---|
| **Code de catégorie TVA** | Catégorie UBL qui demande un code VATEX (typiquement `E`, `K`, `G`, `AE`, `O` — `S` et `Z` sont filtrés car les catégories standard et taux zéro ne portent jamais de motif d'exonération). |
| **Code VATEX** | Code d'exonération issu de la liste de référence *vatex-codes*. |

Quand NomaUBL émet une catégorie qui demande un motif d'exonération, le code `VATEX-*` correspondant est recherché dans ce mapping. Sans ligne pour une catégorie non standard, la Plateforme Agréée destinataire rejette typiquement le document via un échec de règle Schematron.


Aucun motif d'exonération n'est émis sur les catégories taxée (`S`) et à taux zéro (`Z`), quoi que porte la source.

---

## Conseils & bonnes pratiques

- **Couvrir au moins une fois chaque catégorie non standard.** `S` (standard) et `Z` (taux zéro) sont dispensées de l'exigence VATEX. Toutes les autres catégories (`E`, `K`, `G`, `AE`, `O`) doivent disposer d'une ligne VATEX, sous peine d'un rejet par les règles Schematron BR-FR / BR-CO.
- **`AE` est la catégorie correcte pour la facturation en autoliquidation.** À associer à `VATEX-EU-AE` dans le mapping VATEX. Le montant de taxe et le taux de TVA de la ligne doivent être nuls ; l'acheteur déclare la TVA.
- **`K` (intracommunautaire) couvre le B2B transfrontalier au sein de l'UE.** À associer à `VATEX-EU-IC`. Les identifiants à la TVA du vendeur (BT-31) et de l'acheteur (BT-48) doivent tous deux figurer dans le document UBL.
- **`VATEX-FR-FRANCHISE` cible la franchise micro-entrepreneur (article 293 B CGI).** À utiliser sur la catégorie `E` (exonérée) pour les factures sous le seuil de franchise ; la mention « TVA non applicable, art. 293 B du CGI » doit également apparaître dans *French Legal Notes*.
- **Réserver le paramètre de taux zéro aux cas où la source n'arrive pas à distinguer.** Quand le XML amont émet correctement la catégorie, laisser le champ Zero rate vide — s'y appuyer relève du repli, pas du mécanisme principal.
- **Ajouter les codes dans les listes de référence, pas ici.** Les codes cibles manquants s'ajoutent dans les listes *vat-categories* ou *vatex-codes* ; les déroulantes les récupèrent au prochain rechargement.
