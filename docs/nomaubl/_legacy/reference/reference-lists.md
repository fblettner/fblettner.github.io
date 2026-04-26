---
title: Reference Lists
description: "All reference code lists used by NomaUBL — defined in config-lists.json and editable from the web interface"
---

## Reference Lists

All reference lists are stored in `config-lists.json` and editable from the **UBL Defaults** page in the web interface. Each list is a named template with `type` matching the list name. Property values follow the pipe-separated format:

```
"<code>": "<label_FR>|<label_EN>"
```

or for lists with additional fields:

```
"<code>": "<CONSTANT>|<label_FR>|<label_EN>||<flag>"
```

---

## Document Types (`document-types`)

Defines the regulatory scope of each invoice — which e-invoicing or e-reporting flow applies.

| Code | Label (FR) | Description |
| --- | --- | --- |
| `B2B` | Relève du e-invoicing | Standard B2B e-invoicing flow |
| `B2BINT` | E-reporting ventes B2B internationales | International B2B sales e-reporting |
| `B2C` | E-reporting B2C Ventes | B2C sales e-reporting |
| `OUTOFSCOPE` | Hors réforme | Outside the French e-invoicing reform scope |
| `ARCHIVEONLY` | Avoir interne annulation REJETÉE/REFUSÉE | Internal credit note for a rejected/refused invoice — no flux 1, no transmission (BR-FR-20) |
| `B2G` | — | B2G (public sector) |

---

## Invoice Types (`invoice-types`) — UNTDID 1001 / BT-3

Maps the UBL invoice type code (`K74LEDT` in F564231) to a label.

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `261` | Avoir auto-facturé | Self-billed credit note |
| `262` | Avoir pour Remise Globale | Consolidated credit note |
| `380` | Facture commerciale | Commercial invoice |
| `381` | Avoir | Credit note |
| `384` | Facture rectificative | Corrected invoice |
| `386` | Facture d'acompte | Prepayment invoice |
| `389` | Facture auto-facturée | Self-billed invoice |
| `393` | Facture affacturée | Factored invoice |
| `396` | Avoir affacturé | Factored credit note |
| `471` | Facture rectificative auto-facturée | Self-billed corrected invoice |
| `472` | Facture rectificative affacturée | Factored corrected invoice |
| `473` | Facture rectificative auto-facturée affacturée | Self-billed factored corrected invoice |
| `500` | Facture d'acompte auto-facturée | Self-billed prepayment invoice |
| `501` | Facture auto-facturée affacturée | Self-billed factored invoice |
| `502` | Avoir auto-facturé affacturé | Self-billed factored credit note |
| `503` | Avoir de facture d'acompte | Credit note for prepayment invoice |

---

## Profile IDs (`profile-ids`) — BT-23

The business process type / cadre de facturation, stored in `K74XMLV` in F564231.

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `B1` | Dépôt d'une facture de bien | Goods invoice deposit |
| `S1` | Dépôt d'une facture de prestation de service | Service invoice deposit |
| `M1` | Dépôt d'une facture double (biens et services non accessoires) | Mixed invoice deposit |
| `B2` | Dépôt d'une facture de bien déjà payée | Already paid goods invoice |
| `S2` | Dépôt d'une facture de prestation de service déjà payée | Already paid service invoice |
| `M2` | Dépôt d'une facture double déjà payée | Already paid mixed invoice |
| `S3` | Demande de paiement de sous-traitance avec paiement direct (B2G uniquement) | Subcontracting payment request with direct payment (B2G only) |
| `B4` | Facture définitive (après acompte) de bien | Final goods invoice (after advance payment) |
| `S4` | Facture définitive (après acompte) de service | Final service invoice (after advance payment) |
| `M4` | Facture définitive (après acompte) double | Final mixed invoice (after advance payment) |
| `S5` | Dépôt par un sous-traitant d'une facture de prestation de service | Subcontractor service invoice deposit |
| `S6` | Dépôt par un cotraitant d'une facture de prestation de service | Co-contractor service invoice deposit |
| `B7` | Facture de bien avec e-reporting (TVA déjà collectée) | Goods invoice with e-reporting (VAT already collected) |
| `S7` | Facture de service avec e-reporting (TVA déjà collectée) | Service invoice with e-reporting |
| `B8` | Facture multi-vendeurs de bien | Multi-vendor goods invoice |
| `S8` | Facture multi-vendeurs de service | Multi-vendor service invoice |
| `M8` | Facture multi-vendeurs double (non exclusivement Sx ou Bx) | Multi-vendor mixed invoice |

---

## VAT Categories (`vat-categories`) — UN/ECE 5305 / BT-118 / BT-151

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `S` | Taux standard | Standard rate |
| `Z` | Taux zéro | Zero rated |
| `E` | Exonéré | Exempt from tax |
| `AE` | Autoliquidation | VAT Reverse Charge |
| `K` | Intracommunautaire (UE) | Exempt for EEA intra-community supply |
| `G` | Export hors UE | Free export item, tax not charged |
| `O` | Hors champ TVA | Services outside scope of tax |

---

## VAT Exemption Reason Codes (`vatex-codes`) — BT-120

Used in `K74EXRC` when the VAT category requires an exemption justification.

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `vatex-eu-132` | Art. 132 — Exonération (médical, social, éducation, culture, sport) | Art. 132 — Exempt |
| `vatex-eu-143` | Art. 143 — Importations exonérées | Art. 143 — Exempt imports |
| `vatex-eu-148` | Art. 148 — Transport international | Art. 148 — International transport |
| `vatex-eu-151` | Art. 151 — Organismes diplomatiques | Art. 151 — Diplomatic missions |
| `vatex-eu-309` | Art. 309 — Régimes particuliers | Art. 309 — Special schemes |
| `vatex-eu-ic` | Livraison intracommunautaire (K) | Intra-community supply |
| `vatex-eu-ae` | Autoliquidation (AE) | Reverse charge |
| `vatex-eu-g` | Exportation hors UE (G) | Export outside EU |
| `vatex-eu-o` | Hors champ TVA (O) | Outside scope of VAT |
| `vatex-eu-d` | Franchise en base | Small enterprise scheme |
| `vatex-eu-f` | Régime forfaitaire | Flat-rate scheme |
| `vatex-eu-i` | Régime de la marge — agences de voyage | Margin scheme, travel agents |
| `vatex-eu-j` | Régime de la marge — biens d'occasion | Margin scheme, second-hand goods |

---

## Payment Means (`payment-means`) — UNTDID 4461 / BT-81

Stored in `Y56PYIN` in F564231.

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `10` | Espèces | In cash |
| `20` | Chèque | Cheque |
| `30` | Virement | Credit transfer |
| `42` | Virement bancaire | Payment to bank account |
| `48` | Paiement par carte | Card payment |
| `49` | Prélèvement | Direct debit |
| `57` | Convention permanente | Standing agreement |
| `58` | Virement SEPA | SEPA Credit Transfer |
| `59` | Prélèvement SEPA | SEPA Direct Debit |
| `97` | Compensation entre partenaires | Clearing between partners |
| `ZZZ` | Défini mutuellement | Mutually defined |

---

## Scheme IDs (`scheme-ids`) — ISO 6523 ICD / EAS

Identifies the type of electronic address or identifier used in `Y56EPID` / `Y56EPSC` in F564231.

| Code | Name | Description |
| --- | --- | --- |
| `0002` | SIRENE | SIRENE identifier |
| `0009` | SIRET-CODE | SIRET code |
| `0060` | D-U-N-S | Data Universal Numbering System |
| `0088` | GLN (EAN) | EAN Location Code |
| `0177` | Odette | Odette International Limited |
| `0190` | Identifiant GLN | GLN Identification Number |
| `0223` | Société UE | EU based company |
| `0224` | FTCTC Routage | FTCTC routing code |
| `0225` | Adresse électronique FRCTC | FRCTC electronic address |
| `0226` | FRCTC Particulier | FRCTC individual |
| `0227` | Société hors UE | Non-EU based company |
| `0228` | RIDET | Répertoire des Entreprises et des Etablissements |
| `0229` | TAHITI | T.A.H.I.T.I identifier |
| `0231` | Société taxable unique France | Single taxable company (France) |
| `0238` | PPF/Plateforme Agréée | Certified e-invoicing platform |

Electronic addresses are formatted as `schemeID:identifier`, for example:

- `0225:123456789` — SIREN identifier
- `0009:12345678901234` — SIRET identifier
- `0238:PA-CODE` — Plateforme Agréée routing code

---

## Unit of Measure Codes (`unit-codes`) — UN/ECE Recommendation 20 / BT-130

Stored in `Y56UM` in F564233.

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `C62` | Unité | One (piece) |
| `MTR` | Mètre | Metre |
| `KGM` | Kilogramme | Kilogram |
| `TNE` | Tonne (métrique) | Tonne (metric ton) |
| `LTR` | Litre | Litre |
| `MTQ` | Mètre cube | Cubic metre |

---

## Note Types (`note-types`) — UNTDID 4451 / BT-22

Note type codes qualify the content of invoice-level notes. Only the most commonly used codes for e-invoicing are shown here. The full list (200+ codes) is available in `config-lists.json`.

| Code | Label (FR) | Label (EN) |
| --- | --- | --- |
| `AAA` | Description de la marchandise | Goods item description |
| `AAB` | Conditions de paiement | Payment term |
| `AAI` | Informations générales | General information |
| `AAJ` | Conditions supplémentaires de vente/achat | Additional conditions of sale/purchase |
| `AAK` | Conditions de prix | Price conditions |
| `ACD` | Motif | Reason |
| `ACE` | Litige | Dispute |
| `ADU` | Note | Note |
| `AVE` | Régime de marge TVA | Value Added Tax (VAT) margin scheme |
| `BAQ` | Motif d'exonération TVA | VAT exemption reason |
| `ZZZ` | Défini mutuellement | Mutually defined |

---

## Countries (`countries`) — ISO 3166-1 alpha-2

The full list of ISO 3166-1 alpha-2 country codes is defined in `config-lists.json` (250+ entries) and displayed in the web interface wherever a country selector is needed.

Common examples:

| Code | FR | EN |
| --- | --- | --- |
| `FR` | France | France |
| `DE` | Allemagne | Germany |
| `GB` | Royaume-Uni | United Kingdom |
| `ES` | Espagne | Spain |
| `IT` | Italie | Italy |
| `BE` | Belgique | Belgium |
| `US` | États-Unis d'Amérique | United States of America |

---

## Currency Codes (`currency-codes`) — ISO 4217 / BT-5 / BT-6

The full list of ISO 4217 currency codes is defined in `config-lists.json` (150+ entries).

Common examples:

| Code | Description |
| --- | --- |
| `EUR` | Euro |
| `USD` | US Dollar |
| `GBP` | Pound Sterling |
| `CHF` | Swiss Franc |
| `JPY` | Yen |
| `CAD` | Canadian Dollar |

---

## Editing reference lists

All lists can be edited from the **UBL Defaults** page in the web interface, or directly in `config-lists.json`. Changes take effect on the next server restart.

To add a new entry to an existing list, add a property to the corresponding template in `config-lists.json`:

```json
{
  "name": "payment-means",
  "properties": {
    "type": "payment-means",
    "31": "Virement débit|Debit transfer"
  }
}
```
