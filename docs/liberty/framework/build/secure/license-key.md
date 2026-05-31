---
title: License key
description: "What the license gates (the bundled vendor products — Nomasx-1, Nomajde, NomaUBL …), where to set it (Settings → App is the canonical path; LIBERTY_LICENSE_KEY env var still works as a fallback), and what happens when it's missing or expired."
keywords: [Liberty Framework, license key, licensed connector, RS256, JWT license, Nomasx-1, Nomajde, NomaUBL, Settings App, AppBuilder, encrypted at rest]
---

# License key

Liberty's open framework — connectors, screens, menus, the AI assistant, Nomaflow — is fully usable without a license. **Licensed connectors** are a separate piece: bundled vendor products like Nomasx-1, Nomajde and NomaUBL that the framework loads only when a valid license is present.

This page covers what the license gates, where to put it, and what's visible when it isn't there.

---

## What's gated

A connector is **licensed** when the framework's vendor (Nomana-IT) classifies it that way at build time. The current licensed connectors are **Nomasx-1**, **Nomajde** and **NomaUBL** — and the list grows when new bundled products ship. Liberty Next's open primitives (your own SQL connectors, screens, menus, dashboards, Nomaflow jobs, the AI assistant) are **never** licensed and don't need a key.

At framework startup:

| State | Behaviour |
|---|---|
| **Valid license present** | Licensed connectors load normally; their queries, screens, menus and dashboards work as expected. |
| **No license** (or expired / wrong) | Licensed connectors **don't load**. Routes that reference them return 404; menus pointing at them are pruned. The rest of the framework keeps working. |

The framework's own infrastructure — auth, pools, the open-source connector tooling, Nomaflow — is **never gated**. Only the bundled vendor products are.

---

## Where the license lives

Three paths — the UI is the canonical one:

| Path | When | How |
|---|---|---|
| **Settings → App → License** *(canonical)* | Default for every new install. The operator pastes the JWT once; the framework encrypts it at rest with the install master key. Live — connectors rebuild on save, no restart. | Open the SPA → *Settings → App* → expand *License* → click *Set* / *Replace* → paste the JWT → save. See [App settings](../settings-app.md). |
| **`LIBERTY_LICENSE_KEY` env var** *(legacy / power-user)* | Existing installs that already wired the env var; deployments where the operator wants the key to live in a secret manager (Kubernetes Secrets, Docker Secrets, Vault…). Read at startup. | Set in the environment; reference from `app.toml` as `key = "${LIBERTY_LICENSE_KEY}"`. The UI's License field then shows the resolved value as configured but read-only — clear the `${VAR}` reference first if you want to edit from the UI. |
| **Plain text in `app.toml`** *(discouraged)* | Demo / scratch — same risks as inlining any secret in a committed file. | `[license] key = "eyJhbGciOiJSUzI1NiI…"`. |

On disk after a UI save:

```toml title="config/app.toml"
[license]
key = "ENC:eYWBcD…7q=="          # AES-256-GCM with the install master key
```

The `ENC:` prefix is the framework's sentinel — the loader recognises it, decrypts with `LIBERTY_MASTER_KEY`, hands the plaintext to the verifier. Plaintext values are read as-is; env-var references are resolved at startup as before.

`install.sh` (release/ folder) no longer writes `LIBERTY_LICENSE_KEY` to `.env` — the canonical path is the UI. For the env-var path on a Docker install, edit `.env` by hand and add an `environment:` entry for `liberty-next` in the compose file (or use Docker Secrets in Swarm).

---

## The license format

The license itself is an **RS256-signed JWT** from the vendor (Nomana-IT). Its claims include:

| Claim | What it carries |
|---|---|
| `iss` (issuer) | The vendor identity. |
| `sub` (subject) | The licensed customer or instance. |
| `exp` (expiry) | Unix timestamp after which the license is rejected. |
| `aud` (audience) | The product / version family the license covers. |
| `connectors` (custom) | The list of licensed connector keys this license unlocks. |

Verification uses an **RSA public key embedded in the framework build** (`liberty/licensing/public.pem`). The framework checks the signature, the expiry, and the audience at startup. No network call to the vendor — the verification is offline.

---

## What an operator sees

| Surface | With license | Without license |
|---|---|---|
| **App switcher** | Licensed apps appear (if they have menus and `show_in_switcher`). | Licensed apps don't appear. |
| **Connectors page** | Licensed connectors listed under *Apps* or *Data sources*. | The connectors are skipped at load; they don't appear in the Settings UI either. |
| **Direct URL** (e.g. `/screen/nomasx1/security_users`) | Opens. | Returns 404. |
| **Framework log at startup** | A line per licensed connector: `Loaded licensed connector nomasx1`. | A line per skipped connector: `Skipping licensed connector nomasx1 — no valid license`. |

For a quick check from the UI, the framework exposes a license status endpoint:

```
GET /api/license
→ { "valid": true, "subject": "ACME Corp", "expires_at": "2026-12-31T00:00:00Z", "connectors": ["nomasx1", "nomajde", "nomaubl"] }
```

A `valid: false` response with a `reason` tells you why the framework rejected the license — expired, wrong audience, bad signature.

---

## When the license expires

The expiry is enforced **at startup** and on **reload**. Practical implications:

| Event | What happens |
|---|---|
| Framework keeps running past `exp` without reload. | The licensed connectors **keep working** — the check runs at load time, not per request. |
| Reload or restart after `exp`. | Licensed connectors **stop loading**. The next operator restart sees them disappear. |
| Operator installs a fresh license before `exp` minus a buffer. | New license takes effect at next restart / reload. |

The pragmatic operational pattern: **rotate the license well before expiry** — at least a week. Set a calendar reminder a month out so you don't notice expiry by way of a startup error.

---

## Installing a license

The standard flow when you receive a new license JWT from the vendor:

### Option A — Settings → App (recommended)

1. Sign in to the SPA as a superuser.
2. Open *Settings → App* → expand the *License* section.
3. Click *Set* (first install) or *Replace* (rotation) — the field becomes editable.
4. Paste the full JWT, click *Save*.
5. The connector registry rebuilds in place — **no restart**. Licensed connectors that were filtered out at startup reappear immediately.
6. Open `/api/license` to verify (`valid: true`, expected `subject`, expected `expires_at`), or just check the *License* section's header badge — it shows *configured*.

The JWT is encrypted at rest with the install master key (`ENC:` prefix in `app.toml`). The masked-secret reveal-to-edit pattern means the existing value is never exposed in the UI — clicking *Set* / *Replace* opens an empty input; the stored ciphertext is only decrypted by the framework at startup. See [App settings](../settings-app.md) for the full editor walkthrough.

### Option B — env var

For installs that prefer the secret to live in a secret manager / orchestrator config (Kubernetes Secrets, Docker Secrets, Vault):

1. Put the JWT into your secret manager.
2. Set `LIBERTY_LICENSE_KEY` in the framework's environment (the `liberty-next` container's `environment:` block, or the systemd unit's `EnvironmentFile`).
3. Reference it from `config/app.toml`: `[license] key = "${LIBERTY_LICENSE_KEY}"`.
4. Restart the framework.
5. Open `/api/license` to verify.

The env-var path means the UI's *License* field shows the resolved value as configured but **read-only** — clear the `${VAR}` reference from `app.toml` first if you want to manage the value from the UI.

### Option C — plain text in `app.toml` (discouraged)

Inlining the JWT directly into the file works (it's the same RS256 string), but lands the secret in version control if the file is committed. Use only for scratch / demo installs.

---

## Per-environment licenses

Licenses are often issued **per environment** (production vs staging vs sandbox). Coordinate with the vendor on whether one license covers multiple environments or each needs its own.

For deployments using the env var pattern, each environment's secret manager holds its own license. The framework reads what's there at startup; no environment-specific configuration in `app.toml`.

---

## What's NOT in the framework

| Feature | Status |
|---|---|
| **License renewal API** | Not implemented at the framework layer. Rotation = receive a new JWT, swap the env var, restart. |
| **Grace period after expiry** | Not implemented. `exp` is a hard limit. |
| **Per-instance license counting** | The license is one-per-deployment; the framework doesn't enforce per-tenant limits. Vendor-side policy. |
| **License revocation** | Not supported. Once issued, a license is valid until `exp`. Don't expose the JWT publicly. |
| **License hot-reload via the UI** | Yes — *Settings → App → License* rebuilds the connector registry on save. No restart required. The env-var path still needs a restart. |

For grace-period behaviour, run a calendar reminder workflow yourself — most installs add the license expiry to their general expiry tracker (TLS certs, third-party API keys).

---

## Diagnosing license problems

| Symptom | Likely cause | Fix |
|---|---|---|
| Licensed connectors don't appear after restart. | License absent, expired, or wrong audience. | `GET /api/license` — read the `reason`. |
| `GET /api/license` returns `valid: false`. | Same as above — check `reason`. | Re-paste the JWT (whitespace gets in the way), or contact the vendor for a fresh license. |
| Framework log shows `Skipping licensed connector X — no valid license`. | License doesn't cover X. | Check the license's `connectors` claim. |
| Framework log shows `License signature invalid`. | The JWT was tampered with or truncated. | Re-paste from the vendor's original delivery. |
| Framework log shows `License expired`. | `exp` claim is in the past. | Get a renewal from the vendor. |

The framework log lines are the **source of truth** — they include the exact reason. The UI just surfaces whatever `GET /api/license` returns.

---

## What the license does NOT do

| Misconception | Reality |
|---|---|
| The license unlocks features. | It only unlocks **licensed connectors**. The framework's primitives (screens, menus, dashboards, jobs, AI) are not gated. |
| The license enables the AI assistant. | The AI uses your own API key (Anthropic). The license is separate from any AI cost. |
| The license rate-limits API calls. | No — the framework doesn't rate-limit based on the license. |
| The license requires phoning home. | No — verification is offline against the embedded public key. |
| Without a license, the framework refuses to start. | No — the framework starts and works fully; only the licensed connectors are skipped. |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Pasting the JWT with line breaks. | The signature check fails. | Strip every whitespace; the JWT is a single line. |
| Setting `LIBERTY_LICENSE_KEY` but leaving `[license] key` empty in `app.toml`. | Works — env var wins. | This is the intended pattern; nothing to fix. |
| Setting both, with different values. | Env var wins, file value is ignored. | Pick one source. |
| Updating the env var but not restarting. | New license isn't picked up. | Restart the framework. |
| Not setting up an expiry reminder. | License expires; on next restart, licensed connectors vanish; users complain. | Calendar reminder a month before `exp`. |
| Sharing the JWT across customers. | Vendor-side breach of contract; vendor can revoke and refuse future support. | One license per customer. |

---

## What's next

- [Encrypted secrets](./encrypted-secrets.md) — protect the JWT itself at rest if you must inline it.
- [Concepts → Authentication → License key](./license-key.md) — the deep reference.
- [Overview](./overview.md) — the rest of the Secure section.
