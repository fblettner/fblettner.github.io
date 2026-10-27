---
title: CLI reference
description: "Every Liberty Next command-line tool: liberty-admin (database bootstrap, users, roles, data scope, install jobs, schema migrations), liberty-ops and ./liberty (operations), liberty-connectors (run a query without the web app), liberty-crypto (ENC: values), liberty-license (check the key)."
keywords: [Liberty Next, CLI, liberty-admin, liberty-ops, liberty, liberty-connectors, liberty-crypto, liberty-license, init-db, create-user, set-scope, set-attributes, migrate, run-install-jobs]
---

# CLI reference

Most administration is done in **Settings**. The command-line tools cover what has to work without the web application — the first start, a lost password, scripted set-up, operations.

| Tool | Purpose |
|---|---|
| `liberty-next` | Starts the server. Address and port come from `[app]` in `app.toml`. |
| [`liberty-admin`](#liberty-admin) | Database bootstrap, users, roles and data scope, installation jobs, schema migrations. |
| `./liberty` and `liberty-ops` | Operations on a Docker or a Python install — see [Operations](../installation/operations.md). |
| [`liberty-connectors`](#liberty-connectors) | Lists the connectors and runs a query or an endpoint. |
| [`liberty-crypto`](#liberty-crypto) | Encrypts a value into an `ENC:` string. |
| [`liberty-license`](#liberty-license) | Checks a licence key. |

**Docker:** run them inside the container as the `liberty` user — `docker exec -u liberty liberty-next liberty-admin list-users`.
**Python install:** run them as the service user with its environment loaded, so that they read the same configuration and the same master key as the server.

---

## liberty-admin \{#liberty-admin\}

Two options apply to every command: `--config-app <app.toml>` and `--config-connectors <connectors.toml>`. Commands print JSON.

### Bootstrap

| Command | Effect |
|---|---|
| `init-db [--admin-username admin] [--password P \| --password-env VAR]` | Creates the user store (the `auth.toml` file or the database tables) and the missing framework tables, then the first superuser. Without a password, a random one is generated and printed. Running it again changes nothing. |
| `run-install-jobs [--force]` | Runs, in order, every Nomaflow job of the licensed apps marked as an installation step (`deploy-databases`, `nomasx1-import-reference`). Jobs already completed are skipped unless `--force`. |

### Users

| Command | Effect |
|---|---|
| `create-user <name> [--email E] [--full-name N] [--role R]… [--attribute KEY=VALUE]… [--superuser] [--password P \| --password-env VAR]` | Creates a local user. Without a password, one is generated and printed. |
| `set-password <name> [--password P \| --password-env VAR]` | Changes a password; without one, generates and prints it. |
| `set-active <name> --active \| --inactive` | Enables or disables a user. |
| `set-attributes <name> KEY=VALUE… [--replace]` | Sets the user's data-scope attributes. `company=00001,00050` gives a list; `company=` removes the key; `--replace` drops the attributes not given. |
| `list-users` | Lists the users. |

### Roles and data scope

| Command | Effect |
|---|---|
| `create-role <name> [--permission P]… [--description D] [--scope RULE]…` | Creates a role, or updates it. |
| `set-scope <name> --rule RULE… \| --clear` | Replaces the role's data-scope rules. |
| `list-roles` | Lists the roles with their permissions and data scope. |

A `RULE` is a TOML inline table or JSON object, with the keys described on [Roles and permissions → Data scope](../framework/build/secure/roles-and-permissions.md#data-scope):

```bash
liberty-admin set-scope subsidiary --rule '{dd = "CO", source = "#USER.company#", mode = "deny"}'
liberty-admin set-scope controllers --rule '{dd = "SY", values = ["00"], exclude = true}'
liberty-admin set-attributes alice company=00001,00050
```

:::warning[Updating an existing role]
`create-role` on an existing role replaces its permissions with the `--permission` values given — none given means none kept. To change only the scope of a role, use `set-scope`.
:::

### Schema migrations \{#migrate\}

```text
liberty-admin migrate [--app X]… [--dry-run] [--target-connector C] [--revision head]
                      [--plugins-dir D] [--stamp REV]
```

Applies the pending schema migrations of each licensed app (the `plugins/<app>/db` modules) and records each run in **Settings → History → Upgrades**.

| Option | Effect |
|---|---|
| `--dry-run` | Lists the pending migrations. Exit code `2` when some are pending, `0` when up to date, `1` on error. |
| `--app nomasx1` | Only that app (repeatable). |
| `--target-connector C` | The connector of the database to migrate (default: the app's own). |
| `--revision R` | Stop at that revision instead of the latest. |
| `--plugins-dir D` | Where the apps' code is (default: `plugins/` next to `LIBERTY_APPS_DIR`). |
| `--stamp REV` | Repair: records `REV` as the database's current revision without running anything, then applies what is left. Needs `--app`. For a database whose recorded version is ahead of its real tables. |

`./liberty migrate` and `liberty-ops migrate` run this command.

### Upgrade reports

`record-upgrade` stores an upgrade or rollback report in the upgrade history. `./liberty upgrade`, `./liberty rollback` and `liberty-ops` call it; it is not meant to be run by hand.

---

## liberty-connectors \{#liberty-connectors\}

Runs connectors without the web application — handy to test a pool or a query from the server.

| Command | Effect |
|---|---|
| `liberty-connectors list` | Pools and connectors. |
| `liberty-connectors describe <connector>` | One connector's definition. |
| `liberty-connectors run <connector> <query or endpoint> [-p KEY=VALUE]…` | Runs a query (SQL connector) or calls an endpoint (API connector) and prints the result. |

`--config <connectors.toml>` reads another file than the one named in `app.toml`.

---

## liberty-crypto \{#liberty-crypto\}

Encrypts values for the configuration files with the install's master key. **Settings** encrypts on its own what it saves; this tool is for a value written by hand in a TOML file.

| Command | Effect |
|---|---|
| `liberty-crypto encrypt [VALUE]` | Prints `ENC:…`. Reads the value from standard input when it is not given — better for a password. |
| `liberty-crypto decrypt [ENC:…]` | Prints the clear value. |
| `liberty-crypto is-encrypted [VALUE]` | Says whether the value starts with `ENC:`. |

The key comes from `[crypto] master_key` in `app.toml` (normally `${LIBERTY_MASTER_KEY}`); `--master-key` and `--config` override it.

---

## liberty-license \{#liberty-license\}

| Command | Effect |
|---|---|
| `liberty-license status` | Checks the key configured in **Settings → App → License**: validity, products covered, expiry. |
| `liberty-license verify [KEY]` | Checks a key given as argument or on standard input, before pasting it. |

`--config` names another `app.toml`. See [Licence key](../framework/build/secure/license-key.md).
