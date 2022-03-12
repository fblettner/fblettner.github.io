---
layout: default
title: Export source code for BSFN from JD Edwards
permalink: /jdedwards/jde-api/jdebsfn
parent: JD Edwards API
nav_order: 2
---

## JDEBSFN  <!-- omit in toc -->
[Download](https://github.com/fblettner/jde-nomajde){: style="float: right;" .btn-primary .btn .fs-5 .mb-4 .mb-md-0 target="_blank"}
### *Built with VSCode and JDK 1.8*  <!-- omit in toc -->

<details open markdown="block">
  <summary>
    Table of contents
  </summary>

- [1. Functionalities](#1-functionalities)
- [2. Settings](#2-settings)
- [3. Usage](#3-usage)
</details>


## 1. Functionalities
- Export source code for BSFN from JD Edwards BLOB field (F98780R)

## 2. Settings
This class can be used to export blob column for BSFN from JD Edwards Database. This class can be extended to export BLOB for all tables.

| Parameter       | Description                                         |
|-----------------|-----------------------------------------------------|
| URL             | JDBC String for database connection                 |
| USER            | User to login into the database                     |
| PASSWORD        | Password to login into the database                 |
| OutputDirectory | Output directory for files exported from blob field |
| F98780R         | SQL Query to get source code for BSFN               |

## 3. Usage
- Extract source code\
```bash
java -cp ../dist/nomajde.jar jdebsfn F98780R <BSFN_OR_TABLE>
```
