---
title: Release Notes
description: "NomaUBL release history"
---

## Release Notes

### Current release

#### Features

- UBL 2.1 invoice generation from JDE XML via XSLT
- Three-layer validation: XSD (UBL 2.1) + EN16931 Schematron + CIUS-FR Schematron
- Platform Agréée REST API integration (JWT, auto-refresh)
- PPF directory lookup (non-blocking)
- Import status polling (`-import` mode)
- Oracle table tracking (F564230, F564231, F564235, F564236)
- React web interface with embedded Java HTTP server
- Split configuration: main + documents + lists
- Mock PA mode for testing
- Processing types: SINGLE, BURST, UBL, BOTH, UBL_VALIDATE
- Parallel batch processing via `ExecutorService`
- PDF generation via Oracle XDO/BI Publisher
- SFTP download of JDE spool files
- Password encoding utility
- JDE user update (`-updUser` mode)
- Negative amount handling for credit notes
- Discount support at line and document level
- Currency code lists
- AI chat panel
- XSL editor in web interface

### Known limitations

- The Oracle DB password must be manually encoded with `-password` before storage
- The web interface requires a running `java -jar nomaubl.jar -config` process to serve the API
- SFTP private key authentication is not supported (password only)
