---
layout: default
title: Export XML source or PDF Output from JD Edwards
permalink: /jdedwards/jde-api/jdebip
parent: JD Edwards API
grand_parent: JD Edwards
nav_order: 1
---

## JDEBIP <!-- omit in toc -->
[Download](https://github.com/fblettner/jde-nomajde){: style="float: right;" .btn-primary .btn .fs-5 .mb-4 .mb-md-0 target="_blank"}

### *Built with VSCode and JDK 1.8* <!-- omit in toc -->

<details open markdown="block">
  <summary>
    Table of contents
  </summary>

- [1. Functionalities](#1-functionalities)
- [2. Settings](#2-settings)
- [3. Usage](#3-usage)
</details>


## 1. Functionalities
{: .textbox}
- Export XML source or PDF Output from JD Edwards BLOB fields

## 2. Settings
{: .textbox}
This class can be used to export blob column for BI Publisher from JD Edwards Database. This class can be extended to export BLOB for all tables.

| Parameter     | Description                       |
| ---           | ---                               |
| URL   |   JDBC String for database connection |
| USER  | User to login into the database |
| PASSWORD | Password to login into the database |
| OutputDirectory | Output directory for files exported from blob field |
| XML   | SQL Query to get XML source |
| PDF   | SQL Query to get PDF output |
| REMOVE_RD | If you need to retrieve batch from PrintQueue, record should be deleted |
| DELETE_F9563110 | SQL query to delete record into F9563110 |
| DELETE_F95630 | SQL query to delete record into F95630 |

## 3. Usage
{: .textbox}
- Extract XML Source
```bash
java -cp ../dist/nomajde.jar jdebip XML <OBJECT_NAME> <VERSION> <LANGUAGE> <JOB_NUMBER>
```
- Extract PDF output\
```bash
java -cp ../dist/nomajde.jar jdebip PDF <OBJECT_NAME> <VERSION> <LANGUAGE> <JOB_NUMBER>
```
