---
title: E-Directory
description: "Configure the connection to the French PPF (Portail Public de Facturation) directory and the INSEE company search used to validate addressing codes and look up customer information before sending an e-invoice."
keywords: [NomaUBL, e-directory, PPF, Portail Public de Facturation, INSEE, addressing code, code adressage, e-invoicing, French e-invoicing, directory lookup, SIREN, SIRET]
---

# E-Directory

The **E-Directory** editor configures two complementary services NomaUBL uses to validate recipient information before producing an e-invoice:

- **INSEE company search** — look up a company by **business name, SIREN or SIRET** to retrieve its official identification data (legal name, address, registration status…).
- **PPF (Portail Public de Facturation) directory** — verify that the **electronic addressing code** carried by the document exists and is **active** in the public e-invoicing directory.

The two are typically chained: an INSEE search resolves the customer's identifiers, then the PPF directory check confirms that the addressing code on the document is valid for that customer.

This is a NomaUBL feature aimed at French e-invoicing (Réforme de la facturation électronique). It works with documents coming from any source system — JD Edwards, SAP, NetSuite, custom ERP — once the source is mapped to UBL.

---

## Directory Check

| Field | Values | Description |
|---|---|---|
| **Enable Check** | `Y` / `N` | When enabled, NomaUBL queries the PPF directory **before sending each invoice** to verify that the **electronic addressing code** on the document exists and is active in the public directory. Disable to skip the verification (useful for testing). |

---

## API Connection

Where to reach the PPF directory and how to talk to it.

| Field | Description |
|---|---|
| **Base URL** | Root URL of the PPF API (e.g. the production or staging endpoint provided by your PA). |
| **Auth Endpoint** | Path used to obtain an authentication token (typically a `POST` returning a bearer token). Combined with **Base URL**. |
| **Directory Endpoint** | Path of the routing-lines query. The placeholder `{{identifier}}` is substituted at runtime with the recipient's SIREN/SIRET. Example: `/api/v1/utils/ppf-directory/routing-lines/{{identifier}}`. |
| **Timeout (ms)** | HTTP request timeout in milliseconds. Default `30000` (30 seconds). Increase for slow networks. |
| **SSL Verify** | `true` / `false` | When `true`, NomaUBL validates the server's TLS certificate. Set to `false` only in non-production environments where certificates are self-signed. |

---

## Credentials

Authentication credentials used against the PPF API.

| Field | Description |
|---|---|
| **Username** | Account name issued by the PPF / your PA. |
| **Password** | Account password. |

---

## INSEE Search

Settings for the INSEE company-search calls used inside NomaUBL to retrieve a customer's official information by **business name, SIREN or SIRET**.

| Field | Description |
|---|---|
| **Results per page** | Maximum number of results returned per INSEE search query. Default `10`. Increase to widen each result page; decrease to limit network payloads. |

---

## Tips & best practices

- **Keep Directory Check enabled in production.** Sending an invoice with an inactive or unknown addressing code leads to a downstream rejection by the receiving Plateforme Agréée.
- **Use INSEE search to bootstrap customer records.** Looking up by SIREN / SIRET avoids transcription mistakes and aligns NomaUBL's data with the official registry.
- **Always set a realistic Timeout.** The PPF can be slow during peak hours; 30 s is a sensible default, raise it if you see frequent timeout errors.
- **Never disable SSL Verify in production.** It opens you to man-in-the-middle interception of credentials and document metadata.
