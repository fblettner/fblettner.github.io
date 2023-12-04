---
layout: default
title: Transport SQL profile from one base to another
permalink: /oracle/management/sql-profile
parent: Management Tips
nav_order: 1
---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>

- [1. List all profiles to retrieve the profile name](#1-list-all-profiles-to-retrieve-the-profile-name)
- [2. Create table with DBMS to export profile](#2-create-table-with-dbms-to-export-profile)
- [3. Export profile to the temporary table](#3-export-profile-to-the-temporary-table)
- [4. Import profile from temporay table in the target database](#4-import-profile-from-temporay-table-in-the-target-database)
</details>

## 1. List all profiles to retrieve the profile name
```bash
SELECT * FROM DBA_SQL_PROFILES;
```

## 2. Create table with DBMS to export profile
```bash
BEGIN
  DBMS_SQLTUNE.CREATE_STGTAB_SQLPROF (
    table_name  => 'TMP_SQL_PROFILES'
,   schema_name => 'SYSTEM'
);
END;
```

## 3. Export profile to the temporary table
```bash
BEGIN
  DBMS_SQLTUNE.PACK_STGTAB_SQLPROF (
    profile_name         => 'SYS_SQLPROF_02701ab7b57c0000'
,   staging_table_name   => 'TMP_SQL_PROFILES'
,   staging_schema_owner => 'SYSTEM'
);
END;
```
Export/Import this table between both databases


## 4. Import profile from temporay table in the target database
```bash
BEGIN
  DBMS_SQLTUNE.UNPACK_STGTAB_SQLPROF(
     replace            => true
,    staging_table_name => 'TMP_SQL_PROFILES'
);
END;
```