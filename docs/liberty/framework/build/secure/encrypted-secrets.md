---
title: Encrypted secrets
description: "The 🔒 toggle that encrypts secret fields at rest — what gets encrypted, how AES-256-GCM is wired, where the master key lives, the ENC: prefix, and the rotation story."
keywords: [Liberty Framework, encrypted secrets, ENC, AES-256-GCM, master key, password, OIDC secret, encryption, rotation]
---

# Encrypted secrets

Every field in Liberty that holds a secret — pool passwords, OIDC client secret, API connector tokens, custom credentials — supports **encryption at rest**. The UI shows a 🔒 toggle next to the field; flipping it on stores the value as `ENC:<base64>` on disk instead of plaintext.

The encryption is **AES-256-GCM** with a key derived from the framework's master key via **PBKDF2-HMAC-SHA512**. The master key is the only secret you have to protect outside the framework — back it up with your configuration.

---

## The 🔒 toggle

Every secret field has a small lock icon next to it:

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="se-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="180" rx="14" fill="url(#se-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Pools · [pools.crm]</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <text x="40" y="92" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Username</text>
  <rect x="200" y="80" width="400" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="96" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">crm_app</text>

  <text x="40" y="124" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">Password</text>
  <rect x="200" y="112" width="400" height="24" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155"/>
  <text x="210" y="128" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">••••••••••</text>
  <rect x="608" y="112" width="36" height="24" rx="4" fill="rgba(34,197,94,0.20)" stroke="rgba(34,197,94,0.40)"/>
  <text x="626" y="128" fill="#22c55e" fontSize="13" textAnchor="middle" fontFamily="system-ui, sans-serif">🔒</text>
  <text x="650" y="128" fill="#64748b" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">encrypted at rest (AES-256-GCM)</text>

  <text x="40" y="172" fill="#94a3b8" fontSize="11" fontStyle="italic" fontFamily="system-ui, sans-serif">Stored on disk as:  ENC:eyJzYWx0IjoiLi4uIiwiaXYiOiIuLi4iLCJ0YWciOiIuLi4ifQ==</text>
</svg>

| Toggle state | Storage on disk |
|---|---|
| **🔒 on** (green) | `password = "ENC:<base64>"` — the field is encrypted before being written to the config file. |
| **🔒 off** | `password = "plaintext"` — discouraged; only useful in dev when the master key isn't set. |

The toggle is **per field**, not per file — a pool can have an encrypted password and a plaintext host (since the host isn't a secret).

---

## What gets encrypted

The framework's secret fields all support the toggle. The most common:

| Field | Where | Why |
|---|---|---|
| **Pool password** | *Settings → Pools → \<pool> → Password* | Database credentials. |
| **OIDC client secret** | `app.toml` `[oidc] client_secret` (via env var pattern) | OAuth2 client secret. |
| **API connector token** | *Settings → Connectors → \<API connector> → Authentication* | Bearer tokens, API keys, basic-auth passwords. |
| **Webhook URLs with secrets** | *Settings → Notifications → \<channel>* | Slack webhook URLs (the URL itself is the secret). |
| **JWT signing secret** | `app.toml` `[auth] jwt_secret` (via env var) | The key that signs every access token. Critical — never inline. |
| **License key** | `app.toml` `[license] key` (via env var) | Not strictly a credential, but treated the same way for safety. |

For UI fields, the toggle is the standard interaction. For `app.toml` entries that aren't surfaced in the UI, the convention is `${ENV_VAR}` syntax — the framework substitutes from the environment at startup and never writes the resolved value back.

---

## How the encryption is wired

| Layer | What |
|---|---|
| **Algorithm** | AES-256-GCM. Authenticated encryption — tampering with the ciphertext throws on decrypt. |
| **Key derivation** | PBKDF2-HMAC-SHA512, 2145 iterations, 32-byte key from the master key. Each encryption draws a fresh 64-byte salt. |
| **Per-value entropy** | A fresh 16-byte IV per encryption. So encrypting the same value twice produces different ciphertexts (expected for GCM). |
| **Stored payload** | `ENC:` + base64(salt[64] ‖ iv[16] ‖ tag[16] ‖ ciphertext) |
| **Decrypt** | Done lazily at use-time. A SQL pool reading its password decrypts on connection; an OIDC layer reads its secret on every sign-in. |

The choice of GCM gives **integrity** — if the ciphertext is tampered with on disk, the decrypt fails loudly instead of yielding garbage. PBKDF2 with 2145 iterations matches the framework's installed-base compatibility (it's the v1 default, kept for round-trip).

---

## The master key

The master key is the only secret you have to manage outside the framework. Configure it via:

| Source | Notes |
|---|---|
| **`[crypto] master_key` in `app.toml`** | Read at startup. Keep the file's permissions tight (`chmod 600`). |
| **`LIBERTY_MASTER_KEY` env var** | Overrides the file value. The recommended path — the secret lives in your secret manager, not on disk. |
| (none) | If neither is set, the framework refuses to decrypt `ENC:` values — fields fall back to plaintext or fail. |

The key is **opaque** — any string the framework can hash will do. Generate one with:

```bash
openssl rand -hex 32   # 64-char hex string
# or
liberty-crypto genkey   # generates and prints a key
```

Don't change the master key once `ENC:` values exist — see [Key rotation](#key-rotation) below.

---

## The `ENC:` prefix

The `ENC:` literal prefix is how the framework distinguishes encrypted from plaintext values. The convention:

| Stored value | Treated as |
|---|---|
| `password = "ENC:eyJ..."` | Encrypted — decrypt at use-time. |
| `password = "secret123"` | Plaintext — used as-is. |
| `password = "${DB_PASSWORD}"` | Env var substitution — the resolved value is used as-is (whether it's `ENC:...` or plaintext). |

The framework **never re-encrypts** on its own — if you write a plaintext value, it stays plaintext. Flipping the 🔒 toggle in the UI is what triggers an encryption pass.

For batch encryption of an existing config (e.g. migrating a plaintext-deployed install to encrypted-at-rest), the CLI provides:

```bash
liberty-crypto encrypt 'my_password'
# → ENC:eyJzYWx0IjoiLi4uIiwiaXYiOiIuLi4iLCJ0YWciOiIuLi4ifQ==

liberty-crypto decrypt 'ENC:eyJ...'
# → my_password
```

Use these to manually compose values for `app.toml` entries that aren't surfaced in the UI.

---

## Key rotation \{#key-rotation\}

Changing the master key is **destructive** for existing `ENC:` values — they're encrypted under the old key and can't be decrypted with the new one. The rotation procedure:

1. **Decrypt every existing `ENC:` value** with the old key (`liberty-crypto decrypt` on each).
2. **Switch to the new master key** (env var or `app.toml`).
3. **Re-encrypt** each value with the new key (`liberty-crypto encrypt`).
4. **Update each field** with the new ciphertext.
5. **Restart** the framework so it loads with the new key.

For installs with hundreds of encrypted fields, write a script — the framework doesn't ship a bulk rotation tool yet. The shape of such a script:

```bash
# 1. dump every secret with the old key
liberty-crypto rotate-prepare --output /tmp/rotation.json
# 2. swap LIBERTY_MASTER_KEY to the new value, restart workers
# 3. re-encrypt from the dump
liberty-crypto rotate-apply --input /tmp/rotation.json
```

The `rotate-prepare` and `rotate-apply` commands aren't shipped today; the manual procedure above is the current path. **Plan rotations carefully** — every encrypted value across every config file needs updating.

**Safer than rotation: never lose the master key in the first place.** Back it up alongside the configuration. A lost master key with `ENC:` values on disk requires re-entering every secret by hand.

---

## Where the master key should NOT live

| Location | Why not |
|---|---|
| Plain text in `app.toml` checked into git. | The whole point of `ENC:` is to not have secrets in the repo. Defeats the purpose. |
| Hard-coded in a Dockerfile. | Same — leaks at build time. |
| In a CI/CD log. | Some pipelines echo env vars; the key surfaces in logs forever. |
| The same place as the encrypted backups. | If someone steals one, they steal both. |

**Right places:** a secret manager (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault, 1Password Connect), the OS keyring on a dev machine, an env var injected by your orchestrator at runtime.

---

## What happens without a master key

If the framework starts with no master key set and there are `ENC:` values on disk:

- The startup logs a warning.
- Attempting to use a field with an `ENC:` value raises a decrypt error at use-time (when the pool tries to connect, when OIDC tries to fetch the token, etc.).
- The rest of the framework keeps working — only the affected paths break.

This is **fail-loud-not-silent** — the framework won't silently fall back to "use ENC: as plaintext" because that would mean signing in with a base64 blob.

For dev environments where you don't want to set a master key, store secrets as plaintext (don't toggle 🔒).

---

## What if a secret is exposed

Standard incident response:

1. **Rotate the upstream credential** (change the DB password, regenerate the OIDC client secret, regenerate the API token at the third party).
2. **Update the field** in Liberty — re-enter the new secret, leave 🔒 on.
3. The framework picks up the new value on next reload or restart.
4. (Optional) If the master key itself was exposed: rotate the master key per the procedure above.

The master key compromise is the **only** path that requires touching every encrypted field — credential rotation is a one-field-at-a-time fix.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Master key in `app.toml` checked into git. | Secret leaks. | Use `LIBERTY_MASTER_KEY` env var sourced from a secret manager. |
| Different master keys across environments without coordination. | Prod's `ENC:` values fail to decrypt in staging. | Decrypt + re-encrypt when promoting between environments, or use the same master key (with appropriate access control). |
| Editing an `ENC:` value directly in `app.toml`. | The framework decrypts the file you typed, which isn't valid ciphertext, and fails. | Use the UI's 🔒 toggle (re-types the value, then encrypts on save) or `liberty-crypto encrypt`. |
| Toggling 🔒 off and saving. | The value lands on disk in plaintext. | Verify the toggle stays on before saving, or use `liberty-crypto encrypt` from the CLI. |
| Backing up the encrypted config without the master key. | Restoring later yields useless ciphertexts. | Back them up together (in separate secure locations is fine; just don't forget the key). |
| Assuming `${ENV_VAR}` substitution is "encryption". | It's not — env var substitution just hides the value from the file. If the env var holds plaintext, the runtime value is plaintext. | Pair the substitution with `ENC:` (`${OIDC_CLIENT_SECRET}` where the env var holds `ENC:...`) for at-rest encryption of the resolved value too. |

---

## What's next

- [License key](./license-key.md) — managed the same way as a secret, but plays a different role.
- [Sign-in](./sign-in.md) — OIDC client secret is the canonical encrypted field beyond DB passwords.
- [Concepts → Configuration → Encrypted secrets](../../configuration/encryption-secrets.md) — the deep reference.
