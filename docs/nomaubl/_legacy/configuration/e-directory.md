---
title: E-Directory Template
description: "Reference for the e-directory system template — PPF directory lookup settings"
---

## E-Directory Template

The `e-directory` template is a **reserved system template** that configures the connection to the **PPF (Portail Public de Facturation) directory**. This directory is used to check whether a recipient is reachable on a certified platform before submitting an invoice.

### Directory lookup settings

| Property | Description | Example |
| --- | --- | --- |
| `checkDirectory` | `Y` to enable directory lookup before sending; `N` to skip | `Y` |
| `paApiBaseUrl` | Base URL of the directory API | `https://api.myplatform.fr` |
| `paApiLoginEndpoint` | Login endpoint (separate credentials from `e-invoicing`) | `/api/v1/auth/login` |
| `paApiUsername` | Username for directory API authentication | `dir_user` |
| `paApiPassword` | Password for directory API authentication | `mypassword` |
| `paApiDirectoryEndpoint` | Directory lookup endpoint (literal `{identifier}` placeholder) | `/api/v1/utils/ppf-directory/routing-lines/{identifier}` |

:::info[Separate credentials]
The directory API uses its own `TokenManager` instance and credentials, independent of the `e-invoicing` template. This allows the directory and invoice APIs to be hosted on different platforms with different authentication.
:::

### How the lookup works

Before submitting an invoice, NomaUBL calls:

```
GET {paApiBaseUrl}{paApiDirectoryEndpoint}
```

with `{identifier}` replaced by the recipient's SIRET or SIREN number extracted from the UBL XML.

**Possible responses:**

| Response | Meaning | Action |
| --- | --- | --- |
| `{"platform": true}` | Recipient is reachable on a PA | Invoice is sent normally |
| `{"platform": false}` | Recipient is registered but not reachable | Warning logged, invoice sent anyway |
| HTTP 404 | Recipient not registered in PPF | Warning logged, invoice sent anyway |
| Network error | Directory API unreachable | Warning logged, invoice sent anyway |

:::warning[Non-blocking check]
The directory lookup **never blocks** the invoice submission. If the lookup fails for any reason (not found, network error, `platform=false`), NomaUBL logs a warning and proceeds with the submission. The error is also recorded in the lifecycle table (F564235).
:::

### Endpoint format

The `paApiDirectoryEndpoint` must contain the literal string `{identifier}`, which is replaced at runtime:

```
/api/v1/utils/ppf-directory/routing-lines/{identifier}
```

becomes:

```
GET /api/v1/utils/ppf-directory/routing-lines/12345678901234
```
