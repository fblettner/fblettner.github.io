---
title: Encrypted secrets
description: "How Liberty Next stores pool passwords, API credentials, the licence key, the AI key, the OIDC client secret and the SMTP password: encrypted as ENC: values on every save from Settings, with the install's master key."
keywords: [Liberty Next, encrypted secrets, "ENC:", master key, pool password, API token, Settings, liberty-crypto]
---

# Encrypted secrets

Every secret field of Settings is encrypted when it is saved and written to the configuration file as `ENC:…`. The server decrypts it when it loads the file, with the install's **master key**.

| Field | Settings |
|---|---|
| Pool password | Settings → Pools |
| API connector credentials (password, token, client secret) | Settings → Connectors |
| Licence key, Anthropic API key, OIDC client secret, SMTP password | Settings → App |

A secret field is a masked input with an eye to show its content. There is nothing to switch on: a value saved from Settings is always encrypted, and the save is refused when the server has no master key.

To give a secret from the environment instead, write `${VARIABLE}` in the file; to write an `ENC:` value by hand, use `liberty-crypto encrypt`. The details — the key, its derivation, `<NAME>_FILE` secrets — are on [Encryption & secrets](../../configuration/encryption-secrets.md).

:::warning[The master key]
Keep a copy of the master key outside the server and never change it on an existing install: every `ENC:` value would become unreadable. `./liberty doctor` checks that it decrypts every pool password.
:::
