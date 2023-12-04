---
layout: default
title: Database Size
permalink: /oracle/management/ora-size
parent: Management
nav_order: 1
---

## Database size <!-- omit in toc -->

details open markdown="block">
  <summary>
    Table of contents
  </summary>

- [1. Full size of the database](#1-full-size-of-the-database)
- [2. Size by tablespace](#2-size-by-tablespace)
- [3. Fragmented space for a schema](#3-fragmented-space-for-a-schema)
</details>

## 1. Full size of the database
```bash
SELECT  SUM(bytes/1024/1024/1024) FROM dba_segments 
```  

## 2. Size by tablespace
```bash
SELECT  OWNER, SUM(bytes/1024/1024/1024) FROM dba_segments 
GROUP BY owner
order BY owner;
```  

## 3. Fragmented space for a schema
```bash
SELECT 
  table_name,avg_row_len,round(((blocks*16/1024)),2)||'MB' "TOTAL_SIZE",
  round((num_rows*avg_row_len/1024/1024),2)||'Mb' "ACTUAL_SIZE",
  round(((blocks*16/1024)-(num_rows*avg_row_len/1024/1024)),2) ||'MB' "FRAGMENTED_SPACE",
  round((round(((blocks*16/1024)-(num_rows*avg_row_len/1024/1024)),2)/round(((blocks*16/1024)),2))*100,2) "percentage"
FROM 
  all_tables 
WHERE 
  owner='<OWNER>' 
  AND blocks>0;
```  





