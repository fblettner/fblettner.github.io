---
title: Encryption & secrets
description: "Connector passwords, API tokens and OIDC secrets are stored encrypted with AES-256-GCM. Every secret field in the Settings UI has a 🔒 toggle to switch between plain and encrypted; the master key sits in the environment, never on disk. Rotation is online via legacy keys."
keywords: [Liberty Framework, encryption, secrets, AES-256-GCM, master key, settings, password, api_token, OIDC client secret, key rotation]
---

# Encryption & secrets

Several settings carry sensitive values — pool passwords, API connector auth tokens, the OIDC client secret. The framework offers a simple primitive to keep them safe: any secret field in the Settings UI has a **🔒 toggle** that switches the input between **plain text** and **encrypted**. Encrypted values are stored as opaque blobs that can only be decrypted by the running process; the **master key** that does the decryption sits in the environment of the host, never on disk.

This page covers the toggle in the UI, the master key, how to rotate keys and the convention for what to encrypt vs what to keep in the environment.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(255,159,10,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#fb923c', marginBottom: '8px'}}>ENVIRONMENT</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Master key (32-byte AES-256).<br/>JWT signing key. License key. AI API key.<br/><em>Never on disk.</em></div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>ON DISK</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Secret fields stored as opaque ciphertext blobs.<br/>Safe to commit to git.</div>
  </div>
  <div style={{border: '1px solid rgba(50,215,75,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(50,215,75,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4ade80', marginBottom: '8px'}}>AT RUNTIME</div>
    <div style={{fontSize: '12px', lineHeight: '1.6'}}>Decrypted lazily at first use.<br/>Cached for the process lifetime.</div>
  </div>
</div>

The master key never lands on disk; the encrypted blob never lands in the environment. The two only meet at decryption time, inside the running process.

---

## The 🔒 toggle in the Settings UI

Any field flagged as a secret — Pool *Password*, Connector *Auth token*, OIDC *Client secret*, Slack *Webhook URL*, etc. — shows a 🔒 icon next to the input. Click it to switch the field between **plain** and **encrypted** mode.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{padding: '0 0 10px', fontWeight: 700}}>Pool editor — crm</div>
  <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', rowGap: '10px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>URL</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>postgresql+asyncpg://crm@db/crm</span></div>
    <div style={{opacity: 0.75}}>User</div><div><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>crm_app</span></div>
    <div style={{opacity: 0.75}}>Password</div>
    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(74,158,255,0.40)', background: 'rgba(74,158,255,0.06)', fontSize: '11px', fontFamily: 'ui-monospace, monospace'}}>🔒 encrypted ···············</span><span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.7, marginLeft: '8px'}}>Reveal</span></div>
  </div>
</div>

| Mode | What happens on save |
|---|---|
| **Plain** | The literal value is stored. Use only for non-secret defaults (e.g. an empty password on a local SQLite pool). |
| **🔒 Encrypted** | The framework encrypts the value with the current master key before saving. The field displays *encrypted* + a masked dot row. Editing the field overwrites the previous value (no reveal happens automatically). |

A field already in encrypted mode shows a **Reveal** button (visible only to operators carrying `settings:reveal-secrets`). Clicking it asks for the master-key fingerprint as confirmation, then displays the decrypted plaintext for 10 seconds. The reveal action is audit-logged.

Some fields — the OIDC *Client secret*, the Slack *Webhook URL* — have the 🔒 toggle **locked on**. Plain mode isn't offered because the value is unambiguously sensitive.

---

## The master key

The master key is a **32-byte AES-256-GCM key** that the framework loads from the environment at startup. The Settings UI's *Framework → Encryption* section configures **where** the key comes from, not what its value is:

| Field | Effect |
|---|---|
| **Master key** | Name of the environment variable holding the key. Default `${LIBERTY_MASTER_KEY}`. |
| **Legacy keys** | List of older keys, used for **decryption only** during a rotation. New encryptions always use *Master key*. Click *+ Add legacy key* to add an entry — each entry is an env var name. |

Generate a fresh key with the [`liberty-crypto`](../cli-reference.md#liberty-crypto) CLI:

```bash
.venv/bin/liberty-crypto genkey
# 7c4f1c2d8e3a6b9f0c1d4e5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c
```

Export it under the env var name configured above, restart the framework, and every new save through the 🔒 toggle uses the new key.

A master key fingerprint (SHA-256 of the key) is surfaced on the Settings → Framework → Encryption section — useful to confirm two replicas share the same key without exposing the key itself.

---

## Rotating the master key \{#key-rotation\}

When the master key needs to change — annual policy, suspected leak, change of operator — the rotation is **online**:

| Phase | Action |
|---|---|
| **1. Generate a new key** | `liberty-crypto genkey`. Export it under a fresh env var name (e.g. `LIBERTY_MASTER_KEY_NEW`). |
| **2. Add the old key as legacy** | In *Settings → Framework → Encryption*, set *Master key* to the new env var name and add the old env var to *Legacy keys*. **Save** — the framework now decrypts using either key (tries master first, then each legacy in order). |
| **3. Restart** | Required because the master key itself is read at startup, not on save-reload. |
| **4. Re-encrypt every secret** | Run `liberty-crypto rewrap` — see below — to re-encrypt every stored blob with the new master. Idempotent; safe to re-run. |
| **5. Drop the legacy entry** | Once *Rewrap* reports zero remaining blobs encrypted with the old key, remove the legacy entry from the Settings form and unset the old env var. Restart. |

The `rewrap` command:

```bash
.venv/bin/liberty-crypto rewrap
# 4 encrypted fields re-wrapped with the current master key
# 0 still using legacy keys
```

The command crawls every storage location, decrypts each blob with whichever key works, and re-encrypts with the current master. Idempotent — re-running produces a different ciphertext (new random nonce) but the plaintext is unchanged.

---

## What to encrypt vs. what to keep in the environment

The split is deliberate and worth following:

| Secret | Where it lives | Why |
|---|---|---|
| **Pool password** | 🔒 Encrypted in the pool definition. | Lives next to the pool — one storage change updates both. |
| **API connector auth token** | 🔒 Encrypted on the connector. | Same reason. |
| **OIDC client secret** | 🔒 Encrypted on the OIDC sub-form. | Always encrypted (toggle locked on). |
| **Slack webhook** | 🔒 Encrypted on the Notifications sub-form. | Same. |
| **Per-app API key for an HTTP connector** | 🔒 Encrypted on the connector. | Same as OIDC. |
| **Master key** | Environment only. | The whole scheme depends on this never landing on disk. |
| **JWT signing key** | Environment only. | Rotated independently of the master key. |
| **License key** | Environment only. | RS256-signed JWT, public-key-verifiable; not sensitive to disclose, but kept in env to be replaceable without a save. |
| **AI provider API key** | Environment only. | Convention in the Anthropic ecosystem. |

A safe rule of thumb: **anything that has a "scope" tied to a single connector / settings entry** goes through the 🔒 toggle; anything that is global to the framework goes in the environment.

---

## Permissions

| Code | Effect |
|---|---|
| `settings:framework` | View the *Framework → Encryption* section. |
| `settings:reveal-secrets` | See the *Reveal* button next to encrypted fields. Audit-logged. |

The *Master key fingerprint* read-out is visible to anyone with `settings:read` — it's not sensitive on its own.

---

## Failure modes

| Symptom | Cause | Recovery |
|---|---|---|
| `connector loaded, but password rejected by database` | The encrypted blob was wrapped with a key that's no longer in *Legacy keys*. | Add the old key back as legacy, restart, run `liberty-crypto rewrap`, then drop the old key. |
| `crypto: master key not set` at startup | The env var configured on *Master key* is unset and at least one encrypted blob exists. | Export the key under the right name; or temporarily flip the field back to plain to rescue the install. |
| `crypto: authentication tag mismatch` | A blob was edited by hand, or the wrong key is loaded. | Re-encrypt the value from the plaintext source; never edit ciphertext by hand. |
| Reveal button greyed out | The caller lacks `settings:reveal-secrets`. | Grant the permission (or refuse — auditors often shouldn't reveal). |

---

## Tips & best practices

- **Generate the master key with `liberty-crypto genkey`.** Hand-crafted keys are a footgun — 32 random bytes from the framework's PRNG is the simplest correct path.
- **Use the same env-var name across replicas.** Settings → Framework → Encryption stores the name, not the value — the same form works on every replica as long as the env var resolves to the same key.
- **Run `liberty-crypto rewrap` after every rotation.** Otherwise old blobs sit on legacy keys and the rotation isn't really finished.
- **Don't disable the 🔒 toggle on a value that's already encrypted.** Switching back to plain reveals the value on disk; the operator has to confirm and the action is audit-logged.
- **Keep legacy keys only as long as needed.** Past one rotation cycle, every still-relevant blob has been rewrapped — the legacy entry can be dropped.

---

## Under the hood

Encrypted values are stored as opaque `ENC:`-prefixed blobs inside the per-section TOML files. Operators **do not edit these blobs by hand**; the 🔒 toggle is the only safe path. The master key fingerprint is also stored on disk so the framework can detect a mismatched key on the wrong host without exposing the key itself.

The `liberty-crypto` CLI is the only scripted path for advanced operations (rewrap, fingerprint inspection, hand-encryption for a script-driven setup).

---

## What's next

- [Environment variables](./environment-variables.md) — including the master key env var.
- [Framework settings](./app-toml.md) — the *Encryption* sub-section.
- [CLI reference → liberty-crypto](../cli-reference.md#liberty-crypto) — every subcommand.
- [Authentication](../build/secure/sign-in.md) — where the OIDC client secret lives.
