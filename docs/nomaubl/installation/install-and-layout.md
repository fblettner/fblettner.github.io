---
title: Install and layout
description: "Run -install (directly via java -jar, or via the nomaubl.sh / nomaubl.cmd wrapper) to provision an environment. Understand the directory layout produced — config / input / process / ubl / template / shared resources — and how to install several environments side by side on Linux, macOS or Windows."
keywords: [NomaUBL, install, -install, environment, layout, directory, shared resources, fonts, images, multiple environments, Linux, macOS, Windows, nomaubl.sh, nomaubl.cmd]
---

# Install and layout

The `-install` CLI mode provisions a NomaUBL **environment** on disk plus the **shared resources** (fonts, images) one level above. It's the only step that creates the directory structure NomaUBL expects — the rest of the setup (start, configure from the UI) operates on what's produced here.

NomaUBL ships with **two equivalent service-control wrappers** — `nomaubl.sh` for Linux / macOS, `nomaubl.cmd` for Windows. Both call the same JAR with the same arguments and expose the same subcommands; choose the one that matches your host. Either wrapper, or a direct `java -jar nomaubl.jar` invocation, runs the install.

This page walks the install command, explains every directory it produces and shows the convention for hosting several environments (dev / uat / prod) on the same server.

---

## The command

```bash title="Linux / macOS"
# Via the wrapper
./nomaubl.sh install /opt/nomaubl/demo

# Or directly
java -jar nomaubl.jar -install /opt/nomaubl/demo
```

```cmd title="Windows"
REM Via the wrapper
nomaubl.cmd install C:\nomaubl\demo

REM Or directly
java -jar nomaubl-fat.jar -install C:\nomaubl\demo
```

| Argument | What it does |
|---|---|
| **`targetDir`** | The path of the environment to create. The directory itself becomes the environment (e.g. `/opt/nomaubl/demo` or `C:\nomaubl\demo`). Its **parent** receives the shared `fonts/` and `images/` directories. Created if missing. |

The wrapper resolves the JAR sitting next to it — `nomaubl.jar` on Linux / macOS, `nomaubl-fat.jar` on Windows (the default name shipped with the Windows wrapper). Rename the JAR if you prefer a single name across platforms.

---

## Where to put the JAR

Place the JAR and the wrapper together in the directory that will host every environment. The wrapper resolves the environment by **basename**: when you run `./nomaubl.sh start demo` (or `nomaubl.cmd start demo`), it looks for `<script_dir>/demo/config/config.json`.

Typical layouts:

```text title="Linux / macOS"
/opt/nomaubl/                    ← the "app home"
├── nomaubl.jar
└── nomaubl.sh                   ← chmod +x
```

```text title="Windows"
C:\nomaubl\
├── nomaubl-fat.jar              ← default JAR name on Windows
└── nomaubl.cmd
```

After the install you'll have:

```text
<app-home>/
├── <jar>                        ← nomaubl.jar  or  nomaubl-fat.jar
├── <wrapper>                    ← nomaubl.sh   or  nomaubl.cmd
├── fonts/                       ← shared, created by -install
├── images/                      ← shared, created by -install
└── demo/                        ← the environment you just installed
    ├── config/
    ├── input/
    ├── process/
    ├── ubl/
    ├── single/
    ├── subtmpl/
    ├── template/
    ├── xslt/
    ├── burst/
    └── .versions/
```

---

## Run the install

```bash title="Linux / macOS"
cd /opt/nomaubl
./nomaubl.sh install /opt/nomaubl/demo
```

```cmd title="Windows"
cd C:\nomaubl
nomaubl.cmd install C:\nomaubl\demo
```

The command:

1. Creates `targetDir` if missing.
2. Creates the per-environment subdirectories (`config/`, `input/`, `process/`, `ubl/`, `single/`, `subtmpl/`, `template/`, `xslt/`, `burst/`, `.versions/`).
3. Copies the embedded XSL framework into `template/` + `xslt/`.
4. Creates `fonts/` and `images/` next to `targetDir` (only the first install — the second install reuses them).
5. Writes the four configuration files into `targetDir/config/` *(unless they already exist — see below)*.

Output is a list of what was created plus a summary line.

---

## Configuration files installed

`targetDir/config/` receives four files. **All four are skipped when they already exist** — re-running `-install` on an existing environment refreshes the directory structure and the XSL framework, but **never overwrites the configuration** you customised.

| File | Source (inside the JAR) | What gets resolved at install time |
|---|---|---|
| **`config.json`** | `config/config-template.json` | `appHome` → the parent absolute path (e.g. `/opt/nomaubl`). `envName` → `targetDir`'s basename (e.g. `demo`). All other paths keep their `%APP_HOME%` / `%ENV%` placeholders, resolved at runtime. |
| **`xdo.cfg`** | `config/xdo.cfg` | `%APP_HOME%` and `%ENV%` substituted with **absolute** values — Oracle XDO doesn't resolve placeholders itself. |
| **`config-documents.json`** | `config/config-template-documents.json` | Copied as-is. |
| **`config-lists.json`** | `config/config-template-lists.json` | Copied as-is. |

The `%APP_HOME%` and `%ENV%` placeholders in `config.json` let you move the environment to a different directory later — only the two top-level fields (`appHome`, `envName`) need updating; every nested path resolves automatically.

---

## The per-environment directory layout

Each subdirectory has a specific role. Understanding what each does helps when reading the per-template configuration:

| Directory | What lives there |
|---|---|
| **`config/`** | The four configuration files above + the secret-key file for encrypted config values. |
| **`input/`** | Inbound XML / UBL files from your source ERP. The `-fetch-import` and `-fetch-all directory` modes scan this folder. |
| **`process/`** | Working area during XML → UBL transformation. The framework reads, transforms and clears files in this folder. |
| **`ubl/`** | Validated UBL 2.1 invoice files ready for submission. The `-process <template> ... ubl` flow writes here. |
| **`single/`** | One-off single-document outputs from the `-process ... SINGLE` mode. |
| **`burst/`** | Per-sub-document outputs from the `-process ... BURST` mode (one source file produces many invoices). |
| **`subtmpl/`** | Per-template sub-templates (additional XSLT fragments). |
| **`template/`** | One subdirectory per document template (`invoices/`, `credit_notes/`, …). Each holds the master XSL, the per-document RTF, sample XMLs and the customer's overrides block. |
| **`xslt/`** | The framework's XSL libraries (`ubl-common.xsl`, the Schematron rule packs, the XSD set). Refreshed on every upgrade. |
| **`.versions/`** | Internal version tracking — which framework version each templated file came from. Used by the upgrade flow to decide what to refresh. |

The shared `fonts/` and `images/` directories — one level above the environment — are referenced by every template that draws on a custom font or includes a logo. Sharing them across environments means one update propagates everywhere.

---

## Several environments per host

The recommended convention is **one environment per use case** — typically `demo`, `uat`, `prod`. Each runs as its own JVM process on its own port, with its own config and its own state.

```bash title="Linux / macOS"
# After installing the JAR + wrapper in /opt/nomaubl/
./nomaubl.sh install /opt/nomaubl/demo
./nomaubl.sh install /opt/nomaubl/uat
./nomaubl.sh install /opt/nomaubl/prod
```

```cmd title="Windows"
REM After installing the JAR + wrapper in C:\nomaubl\
nomaubl.cmd install C:\nomaubl\demo
nomaubl.cmd install C:\nomaubl\uat
nomaubl.cmd install C:\nomaubl\prod
```

The first install creates `fonts/` and `images/` next to the JAR. The second and third reuse them — the install command detects existing shared resources and skips them.

After three installs:

```text
<app-home>/
├── <jar>               ← nomaubl.jar or nomaubl-fat.jar
├── <wrapper>           ← nomaubl.sh or nomaubl.cmd
├── fonts/              ← shared
├── images/             ← shared
├── demo/               ← env 1
├── uat/                ← env 2
└── prod/               ← env 3
```

Each environment then needs:

- Its own configuration (see [Configure](./configure.md)) — wired through the Settings UI: a different database / schema per env, a different PA template, etc.
- Its own HTTP port at start time (`./nomaubl.sh start uat 8091` or `nomaubl.cmd start uat 8091`).
- Its own data sources (input directories, FTP servers, BIP jobs).

The wrapper's `status` command surfaces them all at once:

```bash title="Linux / macOS"
./nomaubl.sh status
# NomaUBL [demo] is running (PID 12345)
# NomaUBL [uat]  is running (PID 12346)
# NomaUBL [prod] is running (PID 12347)
```

```cmd title="Windows"
nomaubl.cmd status
REM   [demo]  running  (PID 12345)
REM   [uat]   running  (PID 12346)
REM   [prod]  running  (PID 12347)
```

---

## Re-running the install

`-install` is **safe to re-run** on an existing environment:

| What re-running does | What it doesn't |
|---|---|
| Recreate any missing subdirectory. | Overwrite `config.json` / `xdo.cfg` / `config-documents.json` / `config-lists.json` — those are kept verbatim. |
| Refresh the XSL framework files in `xslt/` to the version embedded in the JAR. | Touch your per-template customisations under `template/<name>/`. |
| Recreate shared `fonts/` and `images/` if either is missing. | Overwrite fonts you placed in there yourself. |

For a **clean rebuild**, delete the environment directory first:

```bash title="Linux / macOS"
./nomaubl.sh stop demo               # stop the service
rm -rf /opt/nomaubl/demo             # wipe the env (LOSES customised config + templates)
./nomaubl.sh install /opt/nomaubl/demo
```

```cmd title="Windows"
nomaubl.cmd stop demo
rmdir /S /Q C:\nomaubl\demo
nomaubl.cmd install C:\nomaubl\demo
```

Beware — this loses the configured PA template, the customer's XSL overrides and the upgrade history. Reserve clean rebuilds for genuinely throwaway environments (a vanilla `demo`).

For **moving an existing environment to a new JAR version**, use the wrapper's `upgrade <env>` command — see [Upgrade](./upgrade.md) for the full procedure.

---

## Common install pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Running `-install` as `root`. | The created files end up owned by root; the service user can't write to them. | Run the install as the dedicated `nomaubl` service user. |
| Installing the JAR somewhere different from where the wrapper expects. | `nomaubl.sh start demo` reports `Config not found: <script_dir>/demo/config/config.json`. | Keep `nomaubl.jar` next to `nomaubl.sh`, with one env subdirectory per environment. |
| Reusing an environment name that doesn't match the directory. | `./nomaubl.sh start prod` (or `nomaubl.cmd start prod`) fails because the directory is named `production`. | The basename must match — either rename the directory or pick the right env name. |
| Running `-install` over a half-deleted environment. | Configuration files left over from the previous attempt silently win — the install can't overwrite them. | Wipe `<targetDir>` cleanly before re-installing. |
| The host filesystem is case-insensitive (Windows / macOS). | `start DEMO` resolves to the same directory as `start demo`. | Pick one casing convention and stick to it — Linux fs is case-sensitive. |

---

## What's next

- [Configure](./configure.md) — start the service, sign in and wire every connector through the Settings UI.
- [Service and systemd](./service-and-systemd.md) — start the service, optionally wire it to systemd.
