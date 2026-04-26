---
title: Database Schema
description: "Oracle table schema for the NomaUBL UBL invoice tables F564231–F564236 (STD010301)"
---

## Database Schema

NomaUBL stores UBL 2.1 invoice data in five Oracle custom tables within the JDE schema (e.g. `CRPDTA`). All are linked to the JDE editique tracking table `F564230` (SUIVI_EDITIQUE) via the compound key `DOC / DCT / KCO`.

### Relational schema

```
F564230 (SUIVI_EDITIQUE — JDE tracking)
    │
    ├──────► F564231 (UBL_HEADER)       1:1   Invoice header
    ├──────► F564233 (UBL_LINES)        1:N   Invoice detail lines
    ├──────► F564234 (UBL_VAT_SUMMARY)  1:N   VAT summary by rate
    ├──────► F564235 (UBL_LIFECYCLE)    1:N   PA status history
    └──────► F564236 (UBL_VALIDATION)   1:N   Validation results
```

### Naming conventions

| Table | Logical name | Description | Column prefix |
| --- | --- | --- | --- |
| `F564231` | `UBL_HEADER` | Invoice header (EN 16931) | `UH` |
| `F564233` | `UBL_LINES` | Invoice detail lines | `UL` |
| `F564234` | `UBL_VAT_SUMMARY` | VAT subtotals by rate | `UV` |
| `F564235` | `UBL_LIFECYCLE` | PA lifecycle status history | `US` |
| `F564236` | `UBL_VALIDATION` | Schematron validation results | `UV` |

### Oracle data types

| JDE type | Oracle type | Size | Usage |
| --- | --- | --- | --- |
| String | `VARCHAR2` | 30–1024 | Short text |
| Math Numeric | `NUMBER` | (15,2) | Amounts |
| Date | `DATE` | — | Business dates |
| DateTime | `TIMESTAMP` | — | Audit trail |
| Large Text | `CLOB` | — | XML, JSON |
| Binary | `BLOB` | — | Encoded PDF |

### Data dictionary aliases (new)

| Alias | Type | Size | Description |
| --- | --- | --- | --- |
| `Y56PYIN` | STRING | 3 | Payment mode code |
| `Y56UM` | STRING | 3 | Unit of measure |
| `Y56RULE` | STRING | 20 | Validation rule ID |

---

### F564231 — UBL_HEADER

Invoice header conforming to EN 16931.

**Primary key:** `DOC`, `DCT`, `KCO`  
**Relations:** `DOC → F564230.DOC`, `DCT → F564230.DCT`, `KCO → F564230.KCO`

| Column | Type | Size | Null | Default | Description | UBL ref |
| --- | --- | --- | --- | --- | --- | --- |
| `DOC` | NUMERIC | 8 | No | Sequence | Document number (PK) | — |
| `DCT` | STRING | 2 | No | Sequence | Document type (PK) | — |
| `KCO` | STRING | 5 | No | Sequence | Company code (PK) | — |
| `ODOC` | NUMERIC | 8 | No | — | Original invoice number | — |
| `ODCT` | STRING | 2 | No | Sequence | Original document type | — |
| `OKCO` | STRING | 5 | No | Sequence | Original company code | — |
| `K74FLEN` | STRING | 25 | No | — | UBL invoice number | BT-1 |
| `K74XMLV` | STRING | 4 | Yes | — | Profile ID (S1, M1…) | BT-23 |
| `K74LDDJ` | DATE | 6 | No | — | Invoice issue date | BT-2 |
| `DDJ` | DATE | 6 | Yes | — | Payment due date | BT-9 |
| `K74LEDT` | STRING | 5 | No | — | Invoice type code (380, 381, 384…) | BT-3 |
| `ATXA` | NUMERIC | 15,2 | Yes | 0 | Total excl. tax (quick ref) | BT-109 |
| `STAM` | NUMERIC | 15,2 | Yes | 0 | Total VAT (quick ref) | BT-110 |
| `AG` | NUMERIC | 15,2 | Yes | 0 | Total incl. tax (quick ref) | BT-112 |
| `AAP` | NUMERIC | 15,2 | Yes | 0 | Amount payable | BT-115 |
| `CRCD` | STRING | 3 | Yes | `EUR` | Document currency code | BT-5 |
| `K74MSG2` | STRING | 1024 | Yes | — | Invoice note | BT-22 |
| `55RSF` | STRING | 50 | Yes | — | Purchase order reference | BT-13 |
| `Y74CTID` | NUMERIC | 10 | Yes | — | Contract reference | BT-12 |
| `AN8` | NUMBER | 8 | Yes | — | JDE customer address book number | — |
| `ALKY` | STRING | 20 | Yes | — | Customer number | — |
| `TXFT` | CLOB | — | Yes | — | Full UBL XML source | — |
| `K74RSCD` | STRING | 2 | Yes | `CREATED` | Status code | — |
| `K74MSG1` | VARCHAR2 | 1024 | Yes | — | Status reason / error details | — |
| `Y56EPID` | STRING | 30 | Yes | — | Customer endpoint ID | BT-34, BT-49 |
| `Y56EPSC` | STRING | 10 | Yes | — | Customer endpoint scheme (0190, 0192…) | BT-34-1, BT-49-1 |
| `Y56PYIN` | VARCHAR2 | 30 | No | — | Payment means code (30, 58, 48, 49…) | BT-81 |
| `USER` | STRING | 10 | Yes | — | Last modified by | — |
| `PID` | STRING | 10 | Yes | `NOMAUBL` | Program ID | — |
| `JOBN` | STRING | 10 | Yes | — | Job / batch ID | — |
| `UPMJ` | DATE | 6 | Yes | — | Last modification date | — |
| `TDAY` | DATE | 6 | Yes | — | Last modification time | — |

---

### F564233 — UBL_LINES

Invoice detail lines (`InvoiceLine`) with article, quantity, and price information.

**Primary key:** `DOC`, `DCT`, `KCO`, `LNID`  
**Relations:** `DOC → F564230.DOC`, `DCT → F564230.DCT`, `KCO → F564230.KCO`

| Column | Type | Size | Null | Default | Description | UBL ref |
| --- | --- | --- | --- | --- | --- | --- |
| `DOC` | NUMERIC | 8 | No | Sequence | Document number (PK) | — |
| `DCT` | STRING | 2 | No | Sequence | Document type (PK) | — |
| `KCO` | STRING | 5 | No | Sequence | Company code (PK) | — |
| `LNID` | NUMBER | 6 | No | — | Line number (PK) | BT-126 |
| `DSC1` | STRING | 40 | Yes | — | Item description | BT-153 |
| `LITM` | STRING | 35 | Yes | — | Seller item code | BT-155 |
| `Y56QNTY` | NUMBER | 15,4 | No | — | Invoiced quantity | BT-129 |
| `Y56UM` | STRING | 2 | Yes | — | Unit of measure | BT-130 |
| `UPRC` | NUMBER | 15,4 | No | — | Net unit price | BT-146 |
| `ATXA` | NUMBER | 15,2 | No | — | Line amount excl. tax | BT-131 |
| `REBL` | NUMBER | 15,4 | Yes | 0 | Allowance / discount amount | BT-147 |
| `CRCD` | STRING | 3 | Yes | `EUR` | Currency code | — |
| `K74TVCC` | STRING | 10 | No | — | VAT category (S, AA, Z, E, AE) | BT-151 |
| `TXR1` | NUMBER | 7,3 | Yes | — | VAT rate (percentage) | BT-152 |
| `K74EXRC` | STRING | 10 | Yes | — | VAT exemption reason | BT-121 |
| `USER` | STRING | 10 | Yes | — | Last modified by | — |
| `PID` | STRING | 10 | Yes | `NOMAUBL` | Program ID | — |
| `JOBN` | STRING | 10 | Yes | — | Job / batch ID | — |
| `UPMJ` | DATE | 6 | Yes | — | Last modification date | — |
| `TDAY` | DATE | 6 | Yes | — | Last modification time | — |

---

### F564234 — UBL_VAT_SUMMARY

VAT subtotals grouped by rate and category (`TaxSubtotal`).

**Primary key:** `DOC`, `DCT`, `KCO`, `SEQN`  
**Relations:** `DOC → F564230.DOC`, `DCT → F564230.DCT`, `KCO → F564230.KCO`

| Column | Type | Size | Null | Default | Description | UBL ref |
| --- | --- | --- | --- | --- | --- | --- |
| `DOC` | NUMERIC | 8 | No | Sequence | Document number (PK) | — |
| `DCT` | STRING | 2 | No | Sequence | Document type (PK) | — |
| `KCO` | STRING | 5 | No | Sequence | Company code (PK) | — |
| `SEQN` | NUMBER | 5,0 | No | — | Sequence number (unique per invoice) | — |
| `K74TVCC` | VARCHAR2 | 10 | No | — | VAT category (S, AA, Z, E, AE) | BT-118 |
| `TXR1` | NUMBER | 5,2 | No | — | VAT rate (percentage) | BT-119 |
| `ATXA` | NUMBER | 15,2 | No | — | Taxable base amount | BT-116 |
| `STAM` | NUMBER | 15,2 | No | — | VAT amount | BT-117 |
| `CRCD` | VARCHAR2 | 3 | Yes | `EUR` | Currency code | — |
| `K74EXRC` | VARCHAR2 | 500 | Yes | — | Exemption reason | BT-120 |
| `USER` | STRING | 10 | Yes | — | Last modified by | — |
| `PID` | STRING | 10 | Yes | `NOMAUBL` | Program ID | — |
| `JOBN` | STRING | 10 | Yes | — | Job / batch ID | — |
| `UPMJ` | DATE | 6 | Yes | — | Last modification date | — |
| `TDAY` | DATE | 6 | Yes | — | Last modification time | — |

---

### F564235 — UBL_LIFECYCLE

Full history of invoice status transitions in the PA lifecycle.

**Primary key:** `DOC`, `DCT`, `KCO`, `SEQN`  
**Relations:** `DOC → F564230.DOC`, `DCT → F564230.DCT`, `KCO → F564230.KCO`

| Column | Type | Size | Null | Default | Description |
| --- | --- | --- | --- | --- | --- |
| `DOC` | NUMERIC | 8 | No | Sequence | Document number (PK) |
| `DCT` | STRING | 2 | No | Sequence | Document type (PK) |
| `KCO` | STRING | 5 | No | Sequence | Company code (PK) |
| `SEQN` | NUMBER | 5,0 | No | — | Sequence number (unique per invoice, PK) |
| `K74RSCD` | VARCHAR2 | 10 | No | — | PA status code |
| `K74MSG1` | VARCHAR2 | 500 | Yes | — | Status reason / error details |
| `TRDJ` | DATE | 6 | No | — | Status date/time (source: PA) |
| `USER` | STRING | 10 | Yes | — | Last modified by |
| `PID` | STRING | 10 | Yes | `NOMAUBL` | Program ID |
| `JOBN` | STRING | 10 | Yes | — | Job / batch ID |
| `UPMJ` | DATE | 6 | Yes | — | Last modification date |
| `TDAY` | DATE | 6 | Yes | — | Last modification time |

---

### F564236 — UBL_VALIDATION

Detailed results of Schematron validation (EN 16931, CIUS-FR).

**Primary key:** `DOC`, `DCT`, `KCO`, `SEQN`  
**Relations:** `DOC → F564230.DOC`, `DCT → F564230.DCT`, `KCO → F564230.KCO`

| Column | Type | Size | Null | Default | Description |
| --- | --- | --- | --- | --- | --- |
| `DOC` | NUMERIC | 8 | No | Sequence | Document number (PK) |
| `DCT` | STRING | 2 | No | Sequence | Document type (PK) |
| `KCO` | STRING | 5 | No | Sequence | Company code (PK) |
| `SEQN` | NUMBER | 5,0 | No | — | Sequence number (unique per invoice, PK) |
| `Y56LEVEL` | VARCHAR2 | 10 | No | — | Severity: `FATAL`, `ERROR`, `WARNING`, `INFO` |
| `SRCL` | VARCHAR2 | 50 | No | — | Validation source: `XSD`, `EN16931`, `CIUS-FR` |
| `Y56RULE` | VARCHAR2 | 50 | Yes | — | Rule ID (e.g. `BR-1`, `BR-FR-1`) |
| `K74MSG1` | VARCHAR2 | 2000 | No | — | Validation message |
| `USER` | STRING | 10 | Yes | — | Last modified by |
| `PID` | STRING | 10 | Yes | `NOMAUBL` | Program ID |
| `JOBN` | STRING | 10 | Yes | — | Job / batch ID |
| `UPMJ` | DATE | 6 | Yes | — | Last modification date |
| `TDAY` | DATE | 6 | Yes | — | Last modification time |

---

### Indexes

#### Primary indexes

| Table | Index | Columns |
| --- | --- | --- |
| `F564231` | `F564231_1` | `DOC`, `DCT`, `KCO` |
| `F564233` | `F564233_1` | `DOC`, `DCT`, `KCO`, `LNID` |
| `F564234` | `F564234_1` | `DOC`, `DCT`, `KCO`, `SEQN` |
| `F564235` | `F564235_1` | `DOC`, `DCT`, `KCO`, `SEQN` |
| `F564236` | `F564236_1` | `DOC`, `DCT`, `KCO`, `SEQN` |

---

:::tip[Reference codes]
All reference code lists (VAT categories, invoice types, payment means, scheme IDs, unit codes, profile IDs, etc.) are documented in [Reference Lists](reference-lists.md).
:::

---

### Reference codes

#### VAT category codes (`K74TVCC`)

| Code | Rate | Description | Usage |
| --- | --- | --- | --- |
| `S` | 20% | Standard | French standard rate |
| `Z` | 0% | Zero | Exports outside EU |
| `E` | 0% | Exempt | Medical, training, insurance |
| `AE` | — | Reverse charge | VAT due by buyer |
| `K` | — | Intra-community | Intra-EU supplies |
| `G` | — | Export | Goods exported outside EU |
| `O` | — | Out of scope | Services not subject to VAT |
| `L` | 0–20% | Canary Islands | Special Canary Islands rates |
| `M` | Variable | IGIC/IPSI | Community taxes (Canaries, Ceuta, Melilla) |

**French standard VAT rates:**

| Rate | Description |
| --- | --- |
| 20.00% | Standard rate |
| 13.00% | Corsica rate |
| 10.00% | Intermediate rate |
| 5.50% | Reduced rate |
| 2.10% | Special rate |
| 0.00% | Exempt or zero |

#### Invoice type codes (`K74LEDT`)

| Code | Type | Description |
| --- | --- | --- |
| `380` | Invoice | Standard commercial invoice |
| `381` | Credit Note | Partial or full credit |
| `384` | Corrected Invoice | Correction of a previous invoice |
| `389` | Self-billed Invoice | Customer invoices on behalf of supplier |
| `261` | Self-billed Credit Note | Credit note issued by customer |
| `386` | Prepayment Invoice | Advance payment invoice |
| `387` | Hire Invoice | Equipment rental invoice |

#### Payment means codes (`Y56PYIN`) — UN/CEFACT 4461

| Code | Description | France usage |
| --- | --- | --- |
| `1` | Instrument not defined | Not specified |
| `10` | In cash | Cash |
| `30` | Credit transfer | Bank transfer |
| `31` | Debit transfer | Account-to-account transfer |
| `42` | Payment to bank account | Cheque |
| `48` | Bank card | Card payment |
| `49` | Direct debit | Direct debit |
| `57` | Standing agreement | Standing order |
| `58` | SEPA credit transfer | SEPA transfer (mandatory EU) |
| `59` | SEPA direct debit | SEPA direct debit |
| `97` | Clearing between partners | Inter-company clearing |

#### Endpoint scheme codes (`Y56EPSC`) — ISO 6523 ICD

| Code | Identifier | Description |
| --- | --- | --- |
| `0060` | DUNS | Data Universal Numbering System |
| `0088` | GLN | Global Location Number |
| `0190` | OIN | Identification Number |
| `0225` | SIREN | Legal identifier (France) |
| `9957` | TVAINTRAFR | French intra-community VAT number |

Electronic addresses follow the format `schemeID:identifier`, e.g. `0225:SIREN_XXX` or `9957:TVAINTRAFR`.

#### Unit of measure codes (`Y56UM`) — UN/ECE Recommendation 20

| Code | Description |
| --- | --- |
| `C62` | Unit (piece) |
| `KGM` | Kilogram |
| `MTR` | Metre |
| `LTR` | Litre |
| `MTK` | Square metre |
| `MTQ` | Cubic metre |
| `HUR` | Hour |
| `DAY` | Day |
| `TNE` | Tonne (metric) |
| `KWH` | Kilowatt-hour |
| `EA` | Each |
| `SET` | Set |
| `PR` | Pair |
| `PCE` | Piece |

#### Lifecycle status codes (`K74RSCD`)

See [Status Codes](status-codes.md) for the full catalog.

#### Validation severity levels (`Y56LEVEL`)

| Value | Meaning |
| --- | --- |
| `FATAL` | Blocking fatal error — processing stops |
| `ERROR` | Error — PA submission not possible |
| `WARNING` | Warning — PA submission allowed (configurable) |
| `INFO` | Informational message |

#### Validation sources (`SRCL`)

| Value | Description |
| --- | --- |
| `XSD` | XML schema validation |
| `EN16931` | CEN business rules (`BR-xx`) |
| `CIUS-FR` | French national rules (`BR-FR-xx`) |

---

### JDE date format

All `DATE` columns in these tables use **JDE Julian format** — an integer `YYYYDDD`, where `DDD` is the day of year.

```sql
-- Convert JDE Julian to Oracle DATE
TO_DATE(TO_CHAR(UPMJ), 'YYYYDDD') AS MODIFIED_DATE
```

### Useful queries

**Get the full invoice view for a document:**

```sql
SELECT
  h.K74FLEN  AS ubl_number,
  h.K74LDDJ  AS issue_date,
  h.K74LEDT  AS invoice_type,
  h.ATXA     AS total_ht,
  h.STAM     AS total_vat,
  h.AG       AS total_ttc,
  h.AAP      AS amount_due,
  h.CRCD     AS currency,
  h.K74RSCD  AS status
FROM CRPDTA.F564231 h
WHERE h.DOC = :doc AND h.DCT = :dct AND h.KCO = :kco;
```

**Get invoice lines:**

```sql
SELECT LNID, DSC1, LITM, Y56QNTY, Y56UM, UPRC, ATXA, REBL, K74TVCC, TXR1
FROM CRPDTA.F564233
WHERE DOC = :doc AND DCT = :dct AND KCO = :kco
ORDER BY LNID;
```

**Get VAT summary:**

```sql
SELECT K74TVCC, TXR1, ATXA AS taxable_base, STAM AS vat_amount
FROM CRPDTA.F564234
WHERE DOC = :doc AND DCT = :dct AND KCO = :kco
ORDER BY SEQN;
```

**Get pending invoices for status polling:**

```sql
SELECT h.DOC, h.DCT, h.KCO, h.K74RSCD, h.K74MSG1
FROM CRPDTA.F564231 h
WHERE h.K74RSCD = '9906'
ORDER BY h.UPMJ, h.TDAY;
```
