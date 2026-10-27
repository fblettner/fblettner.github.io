---
title: License key
description: "The Liberty Next licence key: what it unlocks (Nomasx-1, Nomajde), where to paste it (Settings → App → License), how to check it (liberty-license, /api/license), what happens without it, and how to replace it before it expires."
keywords: [Liberty Next, licence, license key, Nomasx-1, Nomajde, Settings App, liberty-license, api license, expiry, restricted mode]
---

# License key

The framework is free to use. The licensed applications — **Nomasx-1** and **Nomajde** — are unlocked by a licence key delivered by Nomana-IT.

---

## Install the key \{#install\}

Sign in as a superuser, open **Settings → App → License**, paste the key into **License key** and save. The key is encrypted with the install's master key, and the licensed applications load at once — no restart.

Before pasting it, the key can be checked from the server: `liberty-license verify <key>` (on Docker: `docker exec -u liberty liberty-next liberty-license verify <key>`).

---

## Check the licence \{#check\}

| Where | Shows |
|---|---|
| The **License** section header | *configured*, or *not set — restricted mode*. |
| `liberty-license status` | Validity, products covered, expiry date of the configured key. |
| `GET /api/license` | `{mode, customer, plan, apps, expires_at, error}`. |
| `GET /info` | `license.mode`: `full` or `restricted`. |

---

## Without a valid key \{#restricted\}

Without a key, or with an expired or invalid one, the server runs in **restricted mode**: the framework and the applications built on it work, the licensed applications do not load. The server log says why with a line starting `license: not loading licensed connector(s)`.

---

## Replace the key \{#replace\}

Note the expiry date when the key is installed. Before it expires, paste the new key in **Settings → App → License** and save: it applies at once.

The key can also come from the environment — `[license] key = "${LIBERTY_LICENSE_KEY}"` in `app.toml` — for installs that keep secrets in an orchestrator; Settings then shows the reference as it is.
