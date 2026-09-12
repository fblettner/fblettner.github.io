---
title: Suppliers / Companies
description: "UBL Defaults — Suppliers tab. Directory of seller (AccountingSupplierParty) records used as defaults when the source XML omits them, keyed by company code."
keywords: [NomaUBL, UBL, defaults, supplier, seller, BT-27, BT-29, BT-30, BT-31, BT-33, SIREN, SIRET, GLN, NAF, VAT, address]
---

# Suppliers / Companies

The **Suppliers** tab manages a directory of **seller (AccountingSupplierParty)** records used as defaults when the source XML omits seller-side identification or address information. Each record is keyed by an internal company code that the source XML carries (typically a company / KCO identifier from JDE, a Bukrs from SAP, etc.).

The override mechanism is described in the [Overview](./overview.md). Default and supplier list are independently overridable.

---

## Default supplier

| Field | Description |
|---|---|
| **Default supplier** | The company code applied when the source XML does not carry a recognisable seller identifier. Picked from the supplier directory below; an empty value means "no default" (the source XML is expected to carry every seller field). |

When override is enabled in document mode, the default selector appears at the top of the tab; in defaults mode, it sits inside the supplier list view.

---

## Supplier directory

The directory holds one card per company. Each card contains:

### Header line

| Field | UBL | Description |
|---|---|---|
| **Code** | — | Internal company code (e.g. `00001`, `MAIN`, the source-system's company key). Used to match against the source XML and as the lookup key for the default selector above. |
| **Name** | BT-27 | Legal company name. |

### Identifiers

| Field | UBL | Description |
|---|---|---|
| **SIREN** | BT-29 | 9-digit French entity identifier. |
| **SIRET** | BT-29 | 14-digit French establishment identifier. |
| **GLN** | BT-29 | GS1 Global Location Number. |
| **NAF (APE)** | — | French APE / NAF activity code (`00.00X`). Carried as additional party identification in the UBL output. |
| **VAT** | BT-31 | VAT identifier (e.g. `FR00000000000`). |
| **Capital** | BT-33 | Share capital text (e.g. `Capital de 100 000 €`). |

### Address

| Field | UBL | Description |
|---|---|---|
| **Street** | BT-35 | Address line 1. |
| **Street 2** | BT-36 | Address line 2 (optional). |
| **Postal code** | BT-38 | Postal code. |
| **City** | BT-37 | City. |
| **Country** | BT-40 | ISO 3166-1 alpha-2 country code (picked from the *countries* reference list). |

### Bank details

| Field | UBL | Description |
|---|---|---|
| **IBAN** | BT-84 | Payment account the buyer credits. |
| **BIC** | BT-86 | Bank identifier of the payment account. |
| **Account name** | BT-85 | Account holder name. |

These are a **fallback**: when the source file carries no bank details and the payment means is a **credit transfer** (codes `30`, `42`, `58` — the only ones where the IBAN is mandatory), the invoice takes the IBAN, BIC and account name from the supplier company matched on the invoice. Other payment means and self-billed invoices are unaffected; any bank field the source provides takes precedence.

### VAT point date

| Field | UBL | Description |
|---|---|---|
| **VAT point date code** | BT-8 | Company default for the VAT point date code under *TVA sur les débits* — *invoice date*, *delivery date* or *paid to date*. Used whenever the source file carries no value; the source mapping keeps priority. |

The codes and their labels live in the **VAT point date codes** reference list (UNTDID 2005), editable under *Configuration → Reference Lists* like the other code lists. The readable PDF renders the VAT point in plain words — e.g. `Exigibilité TVA : Date de facture (débits)` — including when the invoice period carries no dates.

The trash icon in the card header removes the supplier; the **Add** button at the bottom adds a fresh empty card.

---

## How a supplier is resolved

```
source XML company / KCO code
    │
    ├─ matches a supplier card?  ────► fields filled from the card,
    │                                  source-XML values still win
    │                                  for fields the source provides
    │
    └─ no match?                  ────► fields filled from the
                                       Default supplier (or empty
                                       if no default is set)
```

The directory is purely a **defaults** layer: any field the source XML carries explicitly takes precedence over the value stored here.

---

## Tips & best practices

- **Keep one card per legal entity.** Even when several internal company codes share a single SIREN, separate cards make it easier to track which establishment (SIRET) and which address each code maps to.
- **The country code drives the default country fallback.** When the source omits a postal address country, NomaUBL falls back to this card's `country` rather than to the global default in the [Header](./ubl-header-defaults.md) tab. Set it to `FR` for French sellers; do not leave it blank.
- **Capital text appears verbatim.** The `Capital` field is rendered as-is in the UBL output (BT-33), so include the currency mark and any wording the regulatory body expects (e.g. `SAS au capital de 50 000 €`).
- **Override per template only when the template ships a different seller.** A subsidiary issuing invoices on its own SIREN is a legitimate override case; a one-off invoice for the main entity is not.
- **The default selector is the right place to point at the most common seller.** When most invoices come from a single legal entity, set it as the default — only the exceptional records need a matching code in the source XML.
