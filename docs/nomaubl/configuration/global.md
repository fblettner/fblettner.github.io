---
title: Global Template
description: "Reference for the global system template — database, paths, SCP, and Ghostscript settings"
---

## Global Template

The `global` template is a **reserved system template** that contains the Oracle database connection, path definitions, SCP settings, and Ghostscript configuration. It must never be deleted from the configuration.

### Database connection

| Property | Description | Example |
| --- | --- | --- |
| `URL` | Oracle JDBC thin URL | `jdbc:oracle:thin:@myhost:1521:ORCL` |
| `DBUser` | Oracle schema/user | `CRPDTA` |
| `DBPassword` | Base64-encoded password (use `decodePasswd()`) | `TXlTZWNyZXRQYXNzd29yZA==` |
| `schema` | Oracle schema prefix used in all SQL queries | `CRPDTA` |
| `tableLog` | Main invoice log table | `F564230` |

:::warning[Password encoding]
The `DBPassword` value must be Base64-encoded using `java -jar nomaubl.jar -password <yourpassword>`. The application calls `decodePasswd()` internally. Do **not** store the plain-text password here.
:::

### Path configuration

NomaUBL uses two path variables that are substituted at runtime throughout all template property values:

| Variable | Property | Description |
| --- | --- | --- |
| `%APP_HOME%` | `appHome` | Root directory of the application deployment |
| `%PROCESS_HOME%` | `processHome` | Root directory for input/output/temp files |

Example:

```json
"appHome": "/opt/nomaubl",
"processHome": "/opt/nomaubl/process"
```

### Processing directories

| Property | Description | Example |
| --- | --- | --- |
| `dirInput` | Where JDE XML spool files are read from | `%PROCESS_HOME%/input` |
| `dirOutput` | Where generated PDF/UBL files are written | `%PROCESS_HOME%/output` |
| `tempOutput` | Temporary working directory | `%PROCESS_HOME%/temp` |
| `burstOutput` | Output directory for BURST mode | `%PROCESS_HOME%/burst` |
| `singleOutput` | Output directory for SINGLE mode | `%PROCESS_HOME%/single` |

### Oracle XDO configuration

| Property | Description | Example |
| --- | --- | --- |
| `xdoConfig` | Path to the Oracle XDO configuration file (`xdo.cfg`) | `%APP_HOME%/config/xdo.cfg` |
| `rtfTemplate` | Path to the RTF template directory | `%APP_HOME%/templates` |

### Ghostscript (optional)

Used for PDF post-processing (merging, compression).

| Property | Description | Example |
| --- | --- | --- |
| `runGS` | `Y` to enable Ghostscript, `N` to skip | `Y` |
| `cmdGS` | Full command path to the `gs` binary | `/usr/bin/gs` |

### Parallelism

| Property | Description | Example |
| --- | --- | --- |
| `numProc` | Number of parallel threads for batch processing | `4` |

### XSLT transform

| Property | Description | Example |
| --- | --- | --- |
| `transformYN` | `Y` to apply an XSLT pre-transform to the JDE XML before processing | `Y` |
| `transform` | Path to the pre-transform XSLT stylesheet | `%APP_HOME%/xsl/pretransform.xsl` |

### Routing and copy

| Property | Description | Example |
| --- | --- | --- |
| `routage` | Routing configuration (used to dispatch output files) | — |
| `copy` | Copy rule for output distribution | — |

### SCP / SFTP download

These settings enable downloading XML files directly from the JDE server via SFTP (used by the **Download XML from Server** feature in the web interface).

| Property | Description | Example |
| --- | --- | --- |
| `scpHost` | SFTP server hostname | `jde-server.company.com` |
| `scpUser` | SFTP username | `jdeadmin` |
| `scpPassword` | SFTP password | — |
| `scpPort` | SFTP port | `22` |
| `scpRemotePath` | Remote base path for XML files | `/jde/output` |

### Locale and developer mode

| Property | Description | Example |
| --- | --- | --- |
| `setLocale` | Force a specific Java locale | `fr_FR` |
| `devMode` | Enable developer mode (extra logging) | `N` |
| `devXSL` | Path to an alternative XSLT for development | — |
| `updateDB` | `Y` to write to Oracle tables, `N` to skip DB writes (useful for testing) | `Y` |
