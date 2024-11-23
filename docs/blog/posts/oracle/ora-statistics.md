---
date: 2024-11-21
authors:
  - fblettner
categories:
  - Oracle
hide:
  - footer
---

# Statistics Management <!-- omit in toc -->

## 1. Gather statistics for a table
```bash
BEGIN
 DBMS_STATS.GATHER_TABLE_STATS (ownname => '<OWNER>' , tabname => '<TABLE_NAME>',
  cascade => true, estimate_percent => 15,method_opt=>'for all indexed columns size 1', granularity => 'ALL', degree => 1);
END;
```

## 2. Gather statistics for a schema
```bash
exec dbms_stats.gather_schema_stats( -
    ownname          => '<SCHEMA_NAME>', -
    options          => 'GATHER AUTO', -
    estimate_percent => dbms_stats.auto_sample_size, -
    method_opt       => 'for all columns size repeat', -
    degree           => 15 -
)
```