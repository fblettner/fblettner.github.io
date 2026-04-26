---
title: Platform Agréée Integration
description: "How NomaUBL connects to the French certified e-invoicing platform (Platform Agréée)"
---

## Platform Agréée Integration

NomaUBL submits UBL 2.1 invoices to a **Platform Agréée (PA)** — a French certified e-invoicing platform — via a REST API using Java 11's built-in `HttpClient`.

### Authentication

NomaUBL uses JWT bearer token authentication managed by `TokenManager`:

1. On first API call, `TokenManager` posts credentials to `paApiLoginEndpoint`
2. The token is cached for **55 minutes**
3. All subsequent calls include `Authorization: Bearer <token>`
4. On HTTP 401, the token is refreshed once automatically

```
POST {paApiBaseUrl}{paApiLoginEndpoint}
Content-Type: application/json

{"username": "...", "password": "..."}

→ Response: {"token": "eyJ..."}
```

The token is stored in memory only. There is no persistent token storage.

### Submitting an invoice

After successful validation, NomaUBL posts the UBL XML to the PA:

```
POST {paApiBaseUrl}{paApiImportEndpoint}
Authorization: Bearer <token>
Content-Type: application/xml

<Invoice xmlns="...">...</Invoice>
```

**Success response:**

```json
{"uuid": "5edf1234-...", "status": "pending"}
```

The `uuid` is the **PA transaction identifier** and is stored in `F564230.FEUKIDSZ`. It is used in all subsequent status polls.

**Error response:** any non-2xx HTTP status code triggers status `9904` (Error Sent). The HTTP status code and response body are stored in `F564235`.

### Polling import status

After submission, the invoice is in status `9906` (Pending). The `-import` command polls the PA for the final import result:

```
GET {paApiBaseUrl}{paApiImportEndpoint}/{uuid}
Authorization: Bearer <token>
```

**Possible responses:**

```json
// Import succeeded — invoice accepted by PA
{"uuid": "5edf...", "status": "success", "errors": [], "invoiceUuid": "4edf..."}

// Still processing
{"uuid": "5edf...", "status": "pending", "errors": [], "invoiceUuid": null}

// Import failed — PA rejected the invoice
{"uuid": "5edf...", "status": "failed", "errors": ["Duplicate Invoice ..."], "invoiceUuid": null}
```

| PA status | NomaUBL action |
| --- | --- |
| `success` | Update `FEUKIDSZ` with `invoiceUuid`, set status `10` (Deposited) |
| `pending` | No change, re-check on next `-import` run |
| `failed` | Set status `9907`, store errors in F564235 |
| other | Set status `9904`, log in F564235 |

### HTTP 401 retry pattern

All API clients follow the same retry pattern:

```java
response = client.send(request);
if (response.statusCode() == 401) {
    tokenManager.refreshToken();  // force token refresh
    response = client.send(request);  // retry once
}
// If still 401 → fail
```

### JSON parsing

NomaUBL does not use an external JSON library. All JSON parsing uses simple string search via `parseJsonString()`:

```java
private String parseJsonString(String body, String field) {
    String marker = "\"" + field + "\"";
    int idx = body.indexOf(marker);
    if (idx < 0) return null;
    String after = body.substring(idx + marker.length())
                       .replaceFirst("\\s*:\\s*\"", "");
    int end = after.indexOf('"');
    return end > 0 ? after.substring(0, end) : null;
}
```

### Controlling PA submission

PA submission can be disabled at several levels:

| Level | How to disable |
| --- | --- |
| Global (`e-invoicing`) | Set `paMode` to anything other than `API` |
| Per template | Set `sendToPA=N` in the document template |
| Processing type | Use `UBL_VALIDATE` instead of `UBL` or `BOTH` |
| Database writes | Set `updateDB=N` in `global` to skip all DB writes too |

### Mock mode

For testing without a real PA, enable the built-in mock:

```json
"paUseMock": "true",
"paMockBehavior": "SUCCESS"
```

`MockPlatformApiClient` intercepts all API calls and returns configurable responses:

| `paMockBehavior` | POST response | GET poll response |
| --- | --- | --- |
| `SUCCESS` | `{"uuid": "mock-uuid", "status": "pending"}` | `{"status": "success", "invoiceUuid": "mock-inv-uuid"}` |
| `PENDING` | `{"uuid": "mock-uuid", "status": "pending"}` | Always `{"status": "pending"}` |
| `FAILED` | `{"uuid": "mock-uuid", "status": "pending"}` | `{"status": "failed", "errors": ["Mock failure"]}` |
| `ERROR` | Throws `IOException` (simulates network error) | — |

Mock mode also uses `MockTokenManager` which returns a fixed fake token without making any HTTP calls.

### Attachment support

If the document template defines an `attachment` property, a PDF is attached to the UBL submission. The PDF is generated first (via Oracle XDO), then sent as a multipart request to the PA.

### PPF directory pre-check


Before submitting, NomaUBL optionally checks the PPF directory to verify the recipient is reachable. This check is **non-blocking**: if it fails for any reason, submission proceeds regardless. See [E-Directory Template](../configuration/e-directory.md) for configuration details.
