---
layout: default
title: Export source code for BSFN from JD Edwards
permalink: /jdedwards/jde-api/jdebsfn
parent: JD Edwards API
grand_parent: JD Edwards
nav_order: 2
---

## JDEBSFN
### *Built with VSCode and JDK 1.8*

## Functionalities
{: .textbox}
- Export source code for BSFN from JD Edwards BLOB field (F98780R)

## Settings
{: .textbox}
This class can be used to export blob column for BSFN from JD Edwards Database. This class can be extended to export BLOB for all tables.

| Parameter     | Description                       |
| ---           | ---                               |
| URL   |   JDBC String for database connection |
| USER  | User to login into the database |
| PASSWORD | Password to login into the database |
| OutputDirectory | Output directory for files exported from blob field |
| F98780R   | SQL Query to get source code for BSFN |

## Usage
{: .textbox}
- Extract source code\
java -cp ../dist/nomajde.jar jdebsfn F98780R \<BSFN_OR_TABLE>
