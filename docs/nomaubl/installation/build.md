---
title: Build & Installation
description: "How to build NomaUBL from source and deploy the application"
---

## Build & Installation

### Build from source

NomaUBL uses a single `build.sh` script that compiles the Java backend and the React frontend, then packages everything into a self-contained JAR.

```bash
bash build.sh
```

!!! warning "Never copy dist files manually"
    Do **not** manually copy `src/web-react/dist/` to `build/web/`. The `build.sh` script does this automatically. Manual copies will be overwritten or cause inconsistencies.

The build script performs these steps in order:

1. Compiles all Java sources in `src/` with the required classpath (Oracle JDBC, XDO, etc.)
2. Builds the React frontend: `npm install && npm run build` inside `src/web-react/`
3. Copies `src/web-react/dist/` → `build/web/`
4. Packages `nomaubl.jar` with the compiled classes, bundled web assets, and validation resources

### Output

After a successful build:

```
build/
├── nomaubl.jar          # self-contained executable JAR
└── web/                 # React static assets (served by embedded WebServer)
```

### Verify the build

```bash
java -jar nomaubl.jar -help
```

Expected output lists all available CLI modes:

```
Usage:
  -config <configFile>                          Open web interface
  -run <config> <tpl> <file> <type> <jobNum>   Process invoices
  -import <configFile>                          Poll PA for status updates
  -password <pass>                              Encode a password
  -updUser <config> <job> <file>               Update JDE user
```

### Configuration files

NomaUBL uses a **split JSON configuration**. The main config file is typically named `config.properties`, and two sibling files are automatically loaded if present:

| File | Contents |
| --- | --- |
| `config.properties` | System templates: `global`, `e-invoicing`, `e-directory` |
| `config-documents.properties` | Document templates (e.g. `vrc_pro`, `isc_facture`) |
| `config-lists.properties` | Reference lists (currencies, VAT categories, etc.) |

!!! tip "Single-file mode"
    If the sibling files do not exist, NomaUBL falls back to single-file mode and reads all templates from `config.properties`.

To bootstrap a config file, copy and adapt the templates provided in `src/config/`:

```bash
cp src/config/config-template.json config.properties
cp src/config/config-template-documents.json config-documents.properties
cp src/config/config-template-lists.json config-lists.properties
```

### Deployment layout

A typical production deployment looks like:

```
/opt/nomaubl/
├── nomaubl.jar
├── config.properties
├── config-documents.properties
├── config-lists.properties
└── process/
    ├── input/      # JDE XML spool files dropped here
    ├── output/     # Generated PDFs and UBL XML
    └── temp/       # Temporary working files
```

Set `appHome` and `processHome` in the `global` template to point to this layout.

### Encoding a DB password

The Oracle DB password must be stored **Base64-encoded** in the `global` template. Use the built-in encoder:

```bash
java -jar nomaubl.jar -password MySecretPassword
# Output: TXlTZWNyZXRQYXNzd29yZA==
```

Copy the output into the `DBPassword` property of your `global` template.

