---
date: 2024-11-21
authors:
  - fblettner
categories:
  - Oracle
comments: true
---

# Locks Management

## 1. Gather locks for current session
```bash
SELECT
  (select username || ' - ' || osuser from v$session where sid=a.sid) blocker,
  a.sid || ', ' || (select serial# from v$session where sid=a.sid) sid_serial,
 ' is blocking ',
  (select username || ' - ' || osuser from v$session where sid=b.sid) blockee,
  b.sid || ', ' || (select serial# from v$session where sid=b.sid) sid_serial
FROM 
  v$lock a, v$lock b
WHERE 
  a.block = 1
  AND b.request > 0
  AND a.id1 = b.id1
  AND a.id2 = b.id2;
```  