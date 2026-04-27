---
title: Cadre de facturation
description: "UBL Defaults — onglet Business Process Type. Cadre de facturation français (BT-23) — nature de la facture (biens / services / mixte) et stade du cycle de vie (dépôt / déjà payée / définitive / sous-traitance / multi-vendeurs / e-reporting)."
keywords: [NomaUBL, UBL, defaults, BT-23, profile ID, profileID, cadre de facturation, B1, S1, M1, B2, S2, M2, B4, S4, M4, S3, S5, S6, B7, S7, B8, S8, M8, biens, services, mixte]
---

# Cadre de facturation

L'onglet **Business Process Type** configure le `BT-23` — l'UBL **ProfileID**, désigné **Cadre de facturation** dans la réforme française de la facturation électronique. La valeur identifie deux dimensions à la fois :

- La **nature de la facture** — biens (`B`), services (`S`) ou mixte biens + services (`M`).
- Le **stade du cycle de vie ou cas particulier** — dépôt standard, facture déjà payée, facture définitive après acompte, sous-traitance, multi-vendeurs, e-reporting.

Couplé au [routage BAR](./document-type-bar-routing.md) (qui porte le *canal* — B2B, B2G, B2C…), le BT-23 porte la *nature du contenu* — ce sont deux classifications orthogonales et la Plateforme Agréée destinataire les exploite conjointement pour décider du traitement.

Le mécanisme de surcharge est décrit dans la [Vue d'ensemble](./overview.md). L'éditeur de règles est identique en sémantique à celui de [Type de facture](./invoice-type.md) — mêmes opérateurs, même ordre d'évaluation de haut en bas.

---

## Cadre de facturation par défaut

| Champ | Description |
|---|---|
| **Default** | Code Cadre utilisé lorsqu'aucune règle ne s'applique. Choisi dans la liste de référence *profile-ids*. Défaut B2B le plus courant : `B1` (dépôt d'une facture de bien) ou `S1` (dépôt d'une facture de service). |

---

## Codes Cadre de facturation

La nomenclature suit le format `<lettre><chiffre>` :

- **Lettre** — `B` (bien), `S` (service / prestation), `M` (mixte / les deux).
- **Chiffre** — stade de cycle de vie ou cas particulier.

| Code | Signification |
|---|---|
| **B1** | Dépôt d'une facture de bien (facture marchandise standard). |
| **S1** | Dépôt d'une facture de prestation de service (facture de service standard). |
| **M1** | Dépôt d'une facture double — biens et services non accessoires. |
| **B2** | Dépôt d'une facture de bien déjà payée. |
| **S2** | Dépôt d'une facture de prestation de service déjà payée. |
| **M2** | Dépôt d'une facture double déjà payée. |
| **S3** | Demande de paiement de sous-traitance avec paiement direct — **B2G uniquement**. |
| **B4** | Facture définitive (après acompte) de bien. |
| **S4** | Facture définitive (après acompte) de service. |
| **M4** | Facture définitive (après acompte) double. |
| **S5** | Dépôt par un sous-traitant d'une facture de prestation de service. |
| **S6** | Dépôt par un cotraitant d'une facture de prestation de service. |
| **B7** | Facture de bien avec e-reporting — TVA déjà collectée. |
| **S7** | Facture de service avec e-reporting — TVA déjà collectée. |
| **B8** | Facture multi-vendeurs de bien. |
| **S8** | Facture multi-vendeurs de service. |
| **M8** | Facture multi-vendeurs double — non exclusivement `Sx` ou `Bx`. |

La liste complète est gérée dans la liste de référence *profile-ids* (*Configuration → Reference Lists*).

---

## Sélection par règles

L'éditeur de règles est identique à celui de l'onglet [Type de facture](./invoice-type.md) — combinateur `AND` / `OR`, mêmes dix opérateurs (`gt0`, `lt0`, `ge0`, `le0`, `eq`, `ne`, `not-empty`, `empty`, `contains`, `not-contains`), évaluation de haut en bas. Le sélecteur de résultat reprend les valeurs *profile-ids*.

Les règles combinent typiquement la classification produit / ligne de la source avec des indicateurs de cycle de vie pour déterminer le bon code Cadre.

### Schémas de règles courants

| Signal source | Combiné avec | Cadre obtenu |
|---|---|---|
| Toutes les lignes sont des services | (aucune autre condition) | `S1` (ou `S4` pour une facture définitive après acompte, `S2` si déjà payée…) |
| Lignes mêlant biens et services | (aucune autre condition) | `M1` |
| Toutes les lignes sont des biens | (aucune autre condition) | `B1` |
| Indicateur « déjà payée » | + nature biens / services | `B2` / `S2` / `M2` |
| Facture définitive après acompte | + nature biens / services | `B4` / `S4` / `M4` |
| Indicateur de sous-traitance | (services uniquement, contexte B2G) | `S3` (ou `S5` pour une facture de sous-traitant classique) |
| Indicateur multi-vendeurs | + nature biens / services / mixte | `B8` / `S8` / `M8` |

Les signaux source exacts dépendent du déploiement — ils proviennent de la classification des lignes par l'ERP amont, du statut de paiement et du rôle contractuel.

---

## Conseils & bonnes pratiques

- **Le défaut couvre le cas le plus simple.** Une installation B2B qui n'émet que des factures de biens ou de services standard peut conserver `B1` ou `S1` en défaut et se passer entièrement de l'éditeur de règles. Les règles ne deviennent nécessaires qu'à partir du moment où plusieurs codes Cadre sont produits depuis un même template.
- **Déterminer la nature (B / S / M) à partir des lignes, pas du document.** La chaîne de règles la plus fiable s'appuie sur la classification au niveau ligne (schéma typique : `TAG_LINE_GOODS_OR_SERVICES contains "S"` pour les lignes de service) puis agrège au niveau document.
- **Facture définitive après acompte et facture déjà payée ne sont pas synonymes.** `B4` / `S4` / `M4` (définitive après acompte) référencent une facture `B1` / `S1` / `M1` antérieure ; `B2` / `S2` / `M2` (déjà payée) documentent un paiement intervenu hors flux de facturation électronique. Confondre les deux est une cause fréquente de rejet.
- **`S3` est réservé à la sous-traitance B2G.** Il déclenche un workflow spécifique aux marchés publics chez Chorus Pro. À n'utiliser jamais sur un document B2B — à associer à un routage BAR `B2G`.
- **`B7` / `S7` sont des flux exclusivement e-reporting.** Ils couvrent les ventes B2C et autres opérations hors périmètre où le vendeur doit tout de même déclarer le chiffre d'affaires pour la collecte TVA. Le routage BAR doit alors typiquement valoir `B2C`.
- **Le routage BAR et le Cadre de facturation sont orthogonaux.** Un `B1` (facture de bien dépôt) peut être routé en `B2B`, `B2G` ou `B2BINT` — ils répondent à des questions distinctes. Garder les deux jeux de règles propres et indépendants.
- **Ajouter les codes dans la liste de référence, pas ici.** Les codes Cadre personnalisés (très rares) s'ajoutent à la liste *profile-ids* — les deux sélecteurs (défaut et résultat de règle) les récupèrent automatiquement.
