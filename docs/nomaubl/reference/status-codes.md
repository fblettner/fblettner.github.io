---
title: Invoice Status Codes
description: "Complete reference of all invoice status codes used by NomaUBL — PA platform codes (200-series) and internal workflow codes (99xx)"
---

## Invoice Status Codes

NomaUBL uses two sets of status codes stored in `F564231.K74RSCD` and `F564235.K74RSCD`:

- **PA platform codes (200-series)** — assigned by the Platform Agréée during the invoice lifecycle
- **Internal 99xx codes** — assigned by NomaUBL to represent the local processing workflow

The full catalog is defined in `config-lists.json` under the `statuses` template. The property value format is:

```
"<code>": "<CONSTANT>|<label_FR>|<label_EN>||<paStatus>"
```

Where `paStatus=1` means the code comes from the PA, and `paStatus=0` means it is an internal NomaUBL code.

---

### PA platform status codes (200-series)

These codes are received from the Platform Agréée via lifecycle updates.

| Code | Constant | Label (FR) | Label (EN) |
| --- | --- | --- | --- |
| `200` | `STATUS_DEPOSITED` | Déposée | Deposited |
| `201` | `STATUS_ISSUED` | Emise par la plateforme | Issued by platform |
| `202` | `STATUS_RECEIVED` | Reçue de la plateforme | Received by platform |
| `203` | `STATUS_MADE_AVAILABLE` | Mise à Disposition | Made available |
| `204` | `STATUS_UNDER_PROCESSING` | Prise en charge | Under processing |
| `205` | `STATUS_APPROVED` | Approuvée | Approved |
| `206` | `STATUS_PARTIALLY_APPROVED` | Approuvée Partiellement | Partially approved |
| `207` | `STATUS_DISPUTED` | En litige | Disputed |
| `208` | `STATUS_SUSPENDED` | Suspendue | Suspended |
| `209` | `STATUS_COMPLETED` | Complétée | Completed |
| `210` | `STATUS_REFUSED` | Refusée | Refused |
| `211` | `STATUS_PAYMENT_PROCESSED` | Paiement Transmis | Payment transmitted |
| `212` | `STATUS_PAYMENT_RECEIPT` | Encaissée | Payment received |
| `213` | `STATUS_REJECTED` | Rejetée | Rejected |
| `214` | `STATUS_TARGETED` | Visée | Targeted |
| `220` | `STATUS_CANCELLED` | Annulée | Cancelled |
| `221` | `STATUS_ROUTING_ERROR` | Erreur de routage | Routing error |
| `224` | `STATUS_DIRECT_PAYMENT_REQUEST` | Demande de Paiement Direct | Direct payment request |
| `225` | `STATUS_FACTORED` | Affacturée | Factored |
| `226` | `STATUS_FACTORED_CONFIDENTIAL` | Affacturée Confidentiel | Factored confidential |
| `227` | `STATUS_ACCOUNT_CHANGE` | Changement de Compte à Payer | Payment account change |
| `228` | `STATUS_NOT_FACTORED` | Non Affacturée | Not factored |
| `501` | `STATUS_IRRECOVERABLE` | Irrecevable | Irrecoverable |
| `600` | `STATUS_EMAIL` | Erreur Email | Email error |

---

### Internal workflow codes (99xx)

These codes are set by NomaUBL to represent the processing state within the JDE/NomaUBL system, before and during PA interaction.

| Code | Constant | Label (FR) | Label (EN) | Set when |
| --- | --- | --- | --- | --- |
| `9900` | `STATUS_CREATED` | Facture créée | Invoice created | Invoice record created in F564231 |
| `9901` | `STATUS_VALIDATED` | Validation réussie | Validation successful | All validation layers pass with no errors |
| `9902` | `STATUS_VALIDATED_WARN` | Validation avec avertissements | Validation with warnings | Validation passes but warnings exist |
| `9903` | `STATUS_SENT_TO_PA` | Envoi à la PA | Sent to PA | POST to PA succeeds, UUID received |
| `9904` | `STATUS_ERROR_SENT` | Echec d'envoi à la PA | Send failed | POST to PA returns HTTP error |
| `9905` | `STATUS_ERROR_VALIDATION` | Echec de validation | Validation failed | XSD or Schematron errors found |
| `9906` | `STATUS_PENDING` | En attente de traitement par la PA | Pending PA processing | Awaiting PA import result |
| `9907` | `STATUS_FAILED_IMPORT` | Echec d'import par la PA | PA import failed | PA returns `status: failed` |

---

### Normal invoice lifecycle

```
9900 (Created)
    │
    ├─ Validation errors ──► 9905 (Validation failed) [stop]
    │
9901 or 9902 (Validated)
    │
    ├─ sendToPA=N ──► [stop here, no PA interaction]
    │
9903 (Sent to PA)
    │
    ├─ HTTP error ──► 9904 (Send failed) [stop]
    │
9906 (Pending — awaiting -import poll)
    │
    ├─ PA still processing ──► [unchanged, re-poll later]
    ├─ PA import failed    ──► 9907 (PA import failed) [stop]
    │
200  (Deposited)
    │
    ├─ 201 (Issued by platform)
    ├─ 202 (Received by platform)
    ├─ 204 (Under processing)
    ├─ 205 (Approved) / 210 (Refused) / 213 (Rejected)
    ├─ 207 (Disputed)
    ├─ 211 (Payment transmitted)
    └─ 212 (Payment received) → 209 (Completed)
```

---

### Status transitions in Oracle tables

At each step, the following tables are updated by `InvoiceStatusCatalog.StatusTransition.apply()`:

| Step | `F564231.K74RSCD` | `F564235` row inserted |
| --- | --- | --- |
| Invoice created | `9900` | Yes |
| Validation OK | `9901` or `9902` | Yes |
| Validation failed | `9905` | Yes + errors in F564236 |
| Sent to PA | `9903` | Yes |
| Send error | `9904` | Yes |
| Pending | `9906` | — |
| PA deposited | `200` | Yes |
| PA subsequent update | new PA code | Yes |
| PA import failed | `9907` | Yes with error messages |

---

### Using `InvoiceStatusCatalog`

```java
// Simple transitions
InvoiceStatusCatalog.created().apply(dbHandler);
InvoiceStatusCatalog.validated().apply(dbHandler);
InvoiceStatusCatalog.validatedWithWarnings().apply(dbHandler);
InvoiceStatusCatalog.sentToPA().apply(dbHandler);
InvoiceStatusCatalog.pending().apply(dbHandler);
InvoiceStatusCatalog.deposited().apply(dbHandler);  // → code 200

// Error transitions with messages
InvoiceStatusCatalog.errorValidation(errorList).apply(dbHandler);
InvoiceStatusCatalog.errorSent(httpError).apply(dbHandler);
InvoiceStatusCatalog.failedImport(errorsString).apply(dbHandler);

// Custom status (e.g. from PA response mapping)
InvoiceStatusCatalog.custom("205", "Approuvée").apply(dbHandler);
```
