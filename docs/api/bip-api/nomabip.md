---
title: "NOMABIP - Java package with Oracle BI Publisher API" 
description: "API to integrate easily JDEdwards and BI Publisher regardless of JDEdwards Tools Release"
---
[Download](https://github.com/fblettner/bip-nomabip){: style="float: right;" .btn-primary .btn .fs-5 .mb-4 .mb-md-0 target="_blank"}
**Built with VSCode and JDK 1.8**

## 1. Functionalities
This API was initially developed to integrate easily **JD Edwards** and **BI Publisher**, regardless of JD Edwards Tools Release.

Nothing to install, only to use. Sample scripts are provided in the `test` directory. It can now be used for any spool with or without JD Edwards (*BI Publisher license is needed*).

### Features:
- **Generate PDF and XML files** simultaneously from a XML spool.
- **Burst or single mode** for flexible processing.
- Configure the **number of CPUs** for parallel processing and performance improvements.
- Add **Ghostscript** for enhanced PDF compatibility.
- **Document indexation and error tracking** in an Oracle Database (*optional*).
- Integrate the **Java class NOMABC** to print Barcode 128 ([see GitHub repository](#)).

## 2. Global Settings

| Parameter    | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| cmdGS        | Call ghostscript to transform PDF after generation (ie, version 1.6 to 1.5) |
| runGS        | Call GS script Y/N                                                          |
| xdo          | Settings for fonts, subtemplate directory...                                |
| appHome      | Running script directory                                                    |
| burstOutput  | Output directory for bursting documents                                     |
| singleOutput | Output directory for single mode                                            |
| processHome  | Process directory                                                           |
| dirOutput    | Temp Output directory                                                       |
| copyXSL      | XSL transformation to generate copies                                       |
| routageXSL   | Used for JD Edwards to copy back into the Printqueue                        |
| updateDB     | Update Oracle database (Y/N) with index and logs                            |


## 3. Template Settings
Set template location, ID of fields used to name the output document in case of bursting and mandatory fields when update database is on.

## 4. Usage
- Simple java application to configure and generate documents
```bash
java -jar ../dist/nomabip.jar -config ./config/config.properties
```
- Encrypt password for config file
```bash
java -jar ../dist/nomabip.jar -password <PASSWORD>
```
- Generate documents
```bash
java -jar ../dist/nomabip.jar -run ./config/config.properties <TEMPLATE> <DOCUMENT_NAME> <MODE> <DOCUMENT_ID> 
```

## 5. Screenshot
![NOMASX-1](https://docs.nomana-it.fr/assets/nomabip/nomabip_gui.png)

![NOMASX-1](https://docs.nomana-it.fr/assets/nomabip/nomabip_sample_pdf.png)