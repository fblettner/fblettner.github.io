---
layout: default
title: Java package with Oracle BI Publisher API
permalink: /bipublisher/bip-api/nomabip
parent: BI Publisher API
grand_parent: BI Publisher
nav_order: 2
---

## JAVA package with Oracle BI Publisher API  <!-- omit in toc -->
[Download](https://github.com/fblettner/bip-nomabip){: style="float: right;" .btn-primary .btn .fs-5 .mb-4 .mb-md-0 target="_blank"}
### *Built with VSCode and JDK 1.8*  <!-- omit in toc -->

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }

- [1. Functionalities](#1-functionalities)
- [2. Global Settings](#2-global-settings)
- [3. Template Settings](#3-template-settings)
- [4. Usage](#4-usage)
- [5. Screenshot](#5-screenshot)
</details>

## 1. Functionalities
This api was initially developed to integrate easily JDEdwards and BI Publisher regardless of JDEdwards Tools Release.\
Nothing to install, only to use. Samples scripts are provided into the test directory. It can now be used for any spool with or without JD Edwards (BI Publisher license is needed).
- Generate PDF and XML files simultaneously from a xml spool
- Burst or single mode
- Number of CPU for parallel processing and improving performance
- Add Ghostscript for PDF compatibility
- Document indexation and errors into an Oracle Database (optional)
- Integrate Java class NOMABC to print Barcode 128 (see github repository)

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
![NOMASX-1](/assets/nomabip/nomabip_gui.png){: width="600"}

![NOMASX-1](/assets/nomabip/nomabip_sample_pdf.png){: width="600"}