---
title: Listes de référence
description: "Catalogue des listes de référence standard de la facturation électronique française intégrées à NomaUBL : listes de codes ISO / UN / CEN, valeurs des termes métier Factur-X / EN 16931, et codes action / rejet côté PA."
keywords: [NomaUBL, listes de référence, facturation électronique, EN 16931, Factur-X, UNTDID, ISO 4217, ISO 3166, UN/ECE, BT-3, BT-23, BT-29, BT-118, VATEX, scheme IDs, JD Edwards, SAP, NetSuite]
---

# Listes de référence

La section **Reference Lists** rassemble les **listes de codes standard** requises par la Réforme française de la facturation électronique et par le modèle sémantique européen sous-jacent (EN 16931 / Factur-X). Chaque liste est un vocabulaire contrôlé — codes pays, codes devise, types de facture, catégories de TVA, etc. — utilisé par NomaUBL pour valider les documents UBL et alimenter les listes déroulantes de l'interface.

La majorité de ces listes proviennent de standards internationaux (ISO, UN/CEFACT, CEN) ; quelques-unes correspondent à des codes côté PA spécifiques à l'infrastructure française (codes action, codes de motif de rejet). NomaUBL est livré avec un contenu par défaut pré-renseigné pour chaque liste ; les éditeurs permettent de personnaliser les libellés (notamment les traductions bilingues FR/EN) et d'ajouter des codes propres à l'activité.

Cette page s'applique à des documents issus de n'importe quel système source — JD Edwards, SAP, NetSuite, ERP personnalisé — tant que la source est mappée vers UBL.

---

## Mode d'édition commun à toutes les listes

Chaque liste de référence est présentée sous forme de **tableau** qui contient les mêmes trois colonnes. Le mode d'interaction est identique pour les douze listes ; seules les valeurs de codes et la référence réglementaire associée diffèrent.

| Colonne | Description |
|---|---|
| **Code** | Code standard, tel que défini par le référentiel d'origine (par ex. `EUR`, `380`, `S`, `0088`). |
| **Label FR** | Libellé français affiché quand la locale active est le français. |
| **Label EN** | Libellé anglais affiché quand la locale active est l'anglais. |

Utiliser le bouton **+ Ajouter** en bas du tableau pour ajouter une ligne personnalisée, et le bouton **×** d'une ligne pour la supprimer. Les lignes sont triées par code.

---

## Listes standard fournies par NomaUBL

Les douze listes ci-dessous sont intégrées à NomaUBL et alignées sur la réglementation. Elles couvrent tous les référentiels nécessaires à la validation de bout en bout des documents UBL dans la chaîne française de facturation électronique.

| Liste | Standard / terme métier | Rôle |
|---|---|---|
| **Country Codes** | ISO 3166-1 alpha-2 | Codes pays sur deux lettres utilisés pour les adresses acheteur / vendeur / livraison. |
| **Currency Codes** | ISO 4217 — `BT-5` / `BT-6` | Devise du document et devise comptable des factures. |
| **Invoice Type Codes** | UNTDID 1001 — `BT-3` | Type de document de facturation (par ex. facture commerciale, avoir, facture rectificative). |
| **Note Type Codes** | UNTDID 4451 — `BT-22` | Qualificatif des notes en texte libre attachées à la facture. |
| **Payment Means Codes** | UNTDID 4461 — `BT-81` | Modalités de règlement de la facture (virement, prélèvement, carte…). |
| **Profile IDs** | `BT-23` (*Cadre de facturation*) | Identifiant du cadre de facturation / processus métier. |
| **Scheme IDs** | `BT-29` / `BT-30` / `BT-34` / `BT-49` / `BT-71` | Référentiels d'identifiants (schémas d'adressage électronique, schémas d'identifiant tiers). |
| **Unit of Measure Codes** | Recommandation UN/ECE 20 — `BT-130` | Codes d'unité de quantité sur les lignes de facture (pièce, kilogramme, heure…). |
| **VAT Category Codes** | EN 16931 — `BT-118` / `BT-151` | Catégorie de TVA au niveau document et au niveau ligne (taux normal, réduit, exonéré, autoliquidation…). |
| **VATEX Exemption Reason Codes** | VATEX — `BT-121` | Codification du motif d'exonération de TVA, référencé lorsqu'une ligne est exonérée. |
| **Expected Action Codes** | `Y56ACTN` (*Action attendue*) | Codes d'action attendus par la Plateforme Agréée (catalogue côté PA). |
| **Rejection Reason Codes** | `Y56RSRC` (*Motif de rejet*) | Motifs renvoyés par la PA lors du rejet d'une facture. |

---

## Conseils & bonnes pratiques

- **S'en tenir aux codes standard.** Ajouter un code hors référentiel rompt la validation en aval — la PA, la PA destinataire et l'annuaire PPF s'attendent tous à des valeurs standard.
- **Personnaliser les libellés, pas les codes.** Adapter un libellé au vocabulaire métier est sans risque ; renommer le code sous-jacent ne l'est pas.
- **Les libellés bilingues ne sont pas optionnels.** Renseigner systématiquement Label FR et Label EN — l'interface se replie sur le code brut quand le libellé de la locale active est vide.
- **Maintenir VATEX cohérent avec les catégories de TVA.** Les codes VATEX n'ont de sens qu'associés à une catégorie de TVA exonérante — l'un sans l'autre produit des factures invalides.
- **Les codes Action / Rejet sont définis côté PA.** Si la PA renomme ou ajoute des codes dans son catalogue, répliquer la modification ici pour maintenir l'alignement entre l'interface et les payloads d'API.
