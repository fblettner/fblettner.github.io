---
title: Scheme IDs
description: "UBL Defaults — Scheme IDs tab. ISO 6523 / UNTDID 1153 / EAS scheme identifiers attached to SIREN, SIRET, GLN, electronic endpoint and delivery location."
keywords: [NomaUBL, UBL, defaults, scheme ID, schemeID, SIREN, SIRET, GLN, endpoint, EAS, ISO 6523, BT-29, BT-30, BT-34, BT-49, BT-71, 0002, 0009, 0088, 0225]
---

# Scheme IDs

Every party identifier in a UBL document carries a `schemeID` attribute that names the **registry** the value belongs to (ISO 6523 organisation identifiers, EAS electronic-address scheme, etc.). The **Scheme IDs** tab pins which scheme code NomaUBL writes for each kind of identifier.

The override mechanism is described in the [Overview](./overview.md).

---

## Scheme IDs

| Field | UBL | Typical value | Registry |
|---|---|---|---|
| **SIREN** | BT-29 / BT-30 | `0002` | French SIREN registry (INSEE). |
| **SIRET** | BT-29 | `0009` | French SIRET registry (INSEE). |
| **GLN** | BT-29 | `0088` | GS1 Global Location Number. |
| **Endpoint** | BT-34 / BT-49 | `0225` | EAS — electronic address scheme used by the French PPF. |
| **Delivery location** | BT-71 | (varies) | Identifier scheme of the delivery location. |

Each field is populated from the *scheme-ids* reference list (see *Configuration → Reference Lists*). Pick the value that matches the registry the underlying identifier belongs to.

---

## Tips & best practices

- **Use `0225` for the BT-49 endpoint in France.** The Plateforme Agréée recognises `0225` as the EAS code for the French e-invoicing endpoint registry. Other values are rejected by the addressing check (REJ_ADR).
- **`0002` (SIREN) and `0009` (SIRET) are not interchangeable.** They reference different registries (entity vs establishment). Pick the one that matches the identifier length and source — never carry a 14-digit SIRET under `0002`.
- **Override per template only when a customer requires a deviating scheme.** The defaults file is correct for almost every deployment; document overrides are reserved for genuine exceptions (e.g. a single template emitting GLN-keyed identifiers).
- **Add missing scheme codes to the reference list, not here.** If a target value does not appear in a dropdown, edit the *scheme-ids* reference list in *Configuration → Reference Lists* — that change propagates to every dropdown on this tab.
