---
date: 2024-11-21
authors:
  - fblettner
categories:
  - Oracle
hide:
  - footer 
---

# Database size <!-- omit in toc -->

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





