---
title: E-Invoicing Template
description: "Reference for the e-invoicing system template — Platform Agréée API credentials, UBL validation paths, and mock mode"
---

## E-Invoicing Template

The `e-invoicing` template is a **reserved system template** that configures the connection to the Platform Agréée (PA), UBL validation asset paths, and the optional mock mode for testing.

### Platform Agréée API

| Property | Description | Example |
| --- | --- | --- |
| `paApiBaseUrl` | Base URL of the PA REST API | `https://api.myplatform.fr` |
| `paApiLoginEndpoint` | Login endpoint path (relative to base URL) | `/api/v1/auth/login` |
| `paApiUsername` | Username for PA authentication | `my_user` |
| `paApiPassword` | Password for PA authentication | `mypassword` |
| `paApiImportEndpoint` | Endpoint for submitting invoices | `/api/v1/sale/invoices/import` |
| `paMode` | Set to `API` to enable PA submission; leave empty to skip | `API` |
| `sendToPA` | `Y` to send invoices, `N` to generate UBL only without sending | `Y` |


### UBL validation paths

| Property | Description | Example |
| --- | --- | --- |
| `ublXsdPath` | Path to the UBL 2.1 XSD schema | `%APP_HOME%/validation/xsd/main/UBL-Invoice-2.1.xsd` |
| `ublSchematronPath` | Path to the EN16931 Schematron rules | `%APP_HOME%/validation/schematron/EN16931-UBL-validation-preprocessed.sch` |
| `ciusFrSchematronPath` | Path to the CIUS-FR Schematron rules | `%APP_HOME%/validation/schematron/BR-FR-Flux2-Schematron-UBL.sch` |

!!! tip "Bundled validation assets"
    If the paths are not set or not found on disk, NomaUBL falls back to bundled versions inside the JAR at `validation/xsd/` and `validation/schematron/`.

### Mock mode

Mock mode lets you test the full processing pipeline without connecting to a real Platform Agréée.

| Property | Description | Values |
| --- | --- | --- |
| `paUseMock` | Enable mock mode | `true` / `false` |
| `paMockBehavior` | Controls what the mock returns | `SUCCESS`, `PENDING`, `FAILED`, `ERROR` |

| `paMockBehavior` value | Simulated PA response |
| --- | --- |
| `SUCCESS` | Returns `{"uuid": "mock-uuid", "status": "pending"}` then transitions to `success` |
| `PENDING` | Always returns `status: pending` |
| `FAILED` | Returns `status: failed` with sample errors |
| `ERROR` | Simulates a network/HTTP error |

```json
"paUseMock": "true",
"paMockBehavior": "SUCCESS"
```

### Authentication flow

NomaUBL uses `TokenManager` to manage JWT bearer tokens:

1. On first API call, `TokenManager` calls `paApiLoginEndpoint` with `paApiUsername` / `paApiPassword`
2. The token is cached for **55 minutes**
3. On HTTP 401, the token is refreshed once automatically before giving up
4. On subsequent calls within the 55-minute window, the cached token is reused

### FTP settings (optional)

If invoices need to be delivered via SFTP in addition to (or instead of) the REST API:

| Property | Description | Example |
| --- | --- | --- |
| `paFtpHost` | SFTP hostname for PA delivery | `ftp.myplatform.fr` |
| `paFtpUser` | SFTP username | `pa_user` |
| `paFtpPassword` | SFTP password | — |
| `paFtpPort` | SFTP port | `22` |
| `paFtpRemotePath` | Remote path where UBL files are deposited | `/inbox` |
