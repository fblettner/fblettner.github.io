---
title: Encryption & secrets
description: "How Liberty Next keeps secrets out of its configuration files in clear: ENC: values encrypted with the master key, secret fields encrypted on every save from Settings, ${VARIABLE} references, liberty-crypto, and what to do with the master key."
keywords: [Liberty Next, encryption, secrets, "ENC:", master key, LIBERTY_MASTER_KEY, AES-256-GCM, liberty-crypto, environment variables]
---

# Encryption & secrets

Passwords and keys in the configuration files are stored encrypted, as `ENC:…` values, with the install's **master key**. The server decrypts them when it loads the files.

---

## What is encrypted \{#what\}

Every secret field is encrypted when it is saved from Settings:

| Where | Field |
|---|---|
| Liberty Next → Administer → Pools | The pool's password. |
| Liberty Next → Build → Connectors (API connectors) | Credentials, tokens, client secrets. |
| Liberty Next → Administer → App | The licence key, the AI key, the OpenID Connect client secret, the SMTP password. |

The field is a masked input with an eye to show its content. Saving a new value always writes it encrypted; without a master key the save is refused.

---

## The master key \{#master-key\}

The master key comes from the environment variable `LIBERTY_MASTER_KEY`. The key is a passphrase: the encryption key is derived from it (PBKDF2), and each value is encrypted with AES-256-GCM.

- The Docker installation generates it in `release/.env`; a Python install sets it in the service's environment file.
- Keep a copy outside the server: a backup cannot be used without it.
- **Never change it on an existing install**: every `ENC:` value would become unreadable and the pools would stop connecting. `./liberty doctor` checks that the key decrypts every pool password.

---

## Other ways to give a secret \{#alternatives\}

| Way | When |
|---|---|
| `${VARIABLE}` in the file | The secret comes from the environment or a secrets manager. Settings shows the reference as it is. |
| `<NAME>_FILE` | For `LIBERTY_*`, `POSTGRES_*` and `PGADMIN_*` variables: the value is read from a file (Docker, Swarm or Kubernetes secrets). |
| `liberty-crypto encrypt` | To write an `ENC:` value by hand in a file: `liberty-crypto encrypt` reads the value on its standard input and prints `ENC:…`. See [CLI](../../references/cli.md#liberty-crypto). |

---

## Users' passwords \{#passwords\}

The sign-in passwords of local users are not encrypted but hashed (Argon2id): they cannot be read back. A forgotten password is replaced with `liberty-admin set-password`.
