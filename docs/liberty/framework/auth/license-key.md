---
title: License key
description: "The framework runs without a license on its open feature set. Licensed connectors, packaged apps and premium features are unlocked by an RS256-signed key set under Settings → Framework → License — viewed and verified live from Settings → License."
keywords: [Liberty Framework, license key, RS256, JWT, feature gate, licensed connector, license verification, settings]
---

# License key

The framework is **fully usable without a license**. Every concept in the documentation — connectors, dictionary, screens, menus, dashboards, charts, jobs, auth — works on the open feature set on a fresh install.

A **license key** unlocks a curated set of additional integrations: a few production-grade connectors (proprietary databases, custom APIs), packaged customer apps and advanced features. The key is set under **Settings → Framework → License** and its live status is surfaced on the dedicated **Settings → License** page.

---

## At a glance

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>FORMAT</div>
    <div style={{fontSize: '12px'}}>RS256-signed JWT (~600 characters). Long-lived (usually a year).</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>WHERE IT LIVES</div>
    <div style={{fontSize: '12px'}}>In the environment (kept out of disk). Referenced by name from the License field.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>VERIFIED</div>
    <div style={{fontSize: '12px'}}>Once at startup. A failed verification leaves the framework in <strong>restricted mode</strong> — open features still work.</div>
  </div>
  <div style={{border: '1px solid rgba(74,158,255,0.40)', borderRadius: '10px', padding: '16px', background: 'rgba(74,158,255,0.04)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '8px'}}>SCOPE</div>
    <div style={{fontSize: '12px'}}>Connectors marked <em>Licensed</em>, packaged customer apps, premium AI features.</div>
  </div>
</div>

---

## Settings → License

The dedicated **License** tab is read-only and surfaces the current state.

<div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)'}}>
    <div style={{fontWeight: 700}}>Settings → License</div>
    <div><span style={{padding: '4px 12px', borderRadius: '999px', background: 'rgba(50,215,75,0.12)', border: '1px solid rgba(50,215,75,0.40)', color: '#4ade80', fontSize: '11px', fontWeight: 700}}>● Accepted</span></div>
  </div>
  <div style={{padding: '14px 16px', display: 'grid', gridTemplateColumns: '180px 1fr', rowGap: '8px', columnGap: '12px', alignItems: 'center'}}>
    <div style={{opacity: 0.75}}>Customer</div><div>Acme Corp</div>
    <div style={{opacity: 0.75}}>Edition</div><div>Enterprise</div>
    <div style={{opacity: 0.75}}>Instance</div><div style={{fontFamily: 'ui-monospace, monospace'}}>prod-eu-west</div>
    <div style={{opacity: 0.75}}>Expires</div><div>2026-05-19 <span style={{marginLeft: '8px', padding: '2px 8px', borderRadius: '999px', background: 'rgba(255,159,10,0.10)', border: '1px solid rgba(255,159,10,0.40)', color: '#fb923c', fontSize: '10px', fontWeight: 600}}>in 30 days</span></div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Licensed connectors</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600, marginRight: '4px'}}>jdedwards</span><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600, marginRight: '4px'}}>sap</span><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(74,158,255,0.10)', border: '1px solid rgba(74,158,255,0.40)', color: '#60a5fa', fontSize: '10px', fontWeight: 600}}>snowflake</span></div>
    <div style={{opacity: 0.75, alignSelf: 'start', paddingTop: '4px'}}>Licensed apps</div><div><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600, marginRight: '4px'}}>nomajde</span><span style={{padding: '2px 8px', borderRadius: '999px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.40)', color: '#c084fc', fontSize: '10px', fontWeight: 600}}>nomasx-1</span></div>
    <div style={{opacity: 0.75}}>User cap</div><div>72 / 250 <span style={{marginLeft: '8px', opacity: 0.6}}>(29%)</span></div>
    <div style={{opacity: 0.75}}>AI provider</div><div>Anthropic · 2 110 / 5 000 messages today</div>
  </div>
  <div style={{padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end', gap: '6px'}}>
    <span style={{padding: '5px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px'}}>↻ Re-verify</span>
  </div>
</div>

| Field | Source |
|---|---|
| **Status** | `Accepted` / `Rejected — <reason>` / `Not configured`. |
| **Customer** | The `customer` claim of the JWT. |
| **Edition** | The `edition` claim. |
| **Expires** | The `exp` claim. A warning chip appears 30 days before expiry. |
| **Licensed connectors** | List from the key's `features.connectors`. A red dot appears next to entries that aren't actually defined in the install. |
| **Licensed apps** | Same shape for `features.apps`. |
| **User cap** | Current user count + cap, with a 90% / 95% / 100% colour scale. |
| **AI entitlements** | Allowed providers + daily message cap + current usage. |
| **↻ Re-verify** | Re-reads the key from the environment and re-verifies the signature without a restart. |

The tab is gated by `license:read`.

---

## Installing a key

The key lives in the **environment** of the host (kept out of disk). In **Settings → Framework → License**, the *License key* field stores the **name of the environment variable** holding the JWT, not the JWT itself:

| Field | Effect |
|---|---|
| **License key** | Reference to the env var. Default `${LIBERTY_LICENSE_KEY}`. |
| **Public key path** | Optional override for the bundled public key. Useful when running with a private signing authority (OEM partners that re-sign keys). |

Installing a new key on a host:

1. Export the JWT under the env var: `export LIBERTY_LICENSE_KEY="eyJhbGciOi…"`.
2. Restart the framework, or click *↻ Re-verify* on the License tab — the framework re-reads the variable and re-runs the signature check without a full restart.

The startup log prints one line of confirmation:

```text
INFO  liberty.licensing  license accepted — customer="Acme Corp" edition="enterprise" expires=2026-05-19T00:00:00Z
```

A bad key logs the failure and continues; the framework enters **restricted mode**:

```text
WARN  liberty.licensing  license rejected — reason="signature invalid"
WARN  liberty.licensing  running in restricted mode — licensed features disabled
```

In restricted mode:

- Every connector marked *Licensed* is hidden — it doesn't appear in the catalogue, the AI tool list or any menu.
- Packaged apps in the key's `features.apps` don't register their content.
- The *License* tab shows the rejection reason and a banner appears across the header.
- Every other concept (open connectors, screens, menus, dashboards, jobs, auth) keeps working.

Restricted mode is the **default** on a fresh install with no key — it isn't an error state, it's the unlicensed mode.

---

## What's in a licensed connector

In **Settings → Connectors**, every entry has a **Licensed** toggle. When on, the connector loads only when its identifier is present in the key's `features.connectors`. In restricted mode, the Connectors page lists the connector as *Locked — requires license `<id>`* with the rest of its definition greyed out.

This is what gates the bundled vendor connectors (JD Edwards, SAP, Snowflake, …). The mechanism is open — customers can mark their own connectors *Licensed* and ship keys to their own customers if they distribute custom apps.

---

## Verifying a key out-of-band

The `liberty-license` CLI verifies a key without booting the framework:

```bash
.venv/bin/liberty-license verify "$LIBERTY_LICENSE_KEY"
# license accepted
# customer="Acme Corp" edition="enterprise"
# expires=2026-05-19T00:00:00Z (in 30 days)
# features.connectors: [jdedwards, sap, snowflake]
# features.apps:       [nomajde, nomasx-1]
```

Exits non-zero with the diagnostic on bad / expired / wrong-audience keys. See [CLI reference → `liberty-license`](../cli-reference.md#liberty-license) for every flag.

---

## Rotation and renewal

A renewal key is installed by:

1. Export the new JWT under the env var on each host.
2. Restart the framework, or click *↻ Re-verify*.

For high-availability installs:

| Phase | Action |
|---|---|
| **30 days before expiry** | Request the renewal key from the vendor. The current key's *Expires* chip turns yellow. |
| **7 days before expiry** | Install the new key on each replica via your secret-management tool. |
| **At expiry** | Old key naturally rejected; new one takes over. No restart required because the rolling secret update already happened. |

---

## Failure modes

The Settings → License tab surfaces the diagnostic directly. Common rejections:

| Status text | Cause | Recovery |
|---|---|---|
| `signature invalid` | Wrong public key, tampered JWT. | Re-check the key. If using a partner signing authority, set *Public key path* to its key. |
| `expired (2026-04-30)` | Past `exp` timestamp. | Install a renewed key. |
| `audience mismatch` | The JWT was issued for a different product. | Confirm the vendor sent a Liberty key. |
| `malformed` | The env var doesn't contain a valid JWT (extra whitespace, accidental truncation). | Re-export the key carefully — copy from the source verbatim. |
| `user cap reached` | The key's `features.users.max` matches the current user count. | Request a larger cap, or deactivate inactive users. |

---

## Permissions

The *License* tab is gated by `license:read` (view) and `license:write` (re-verify, swap public key path). The *Framework → License* sub-form is gated by `settings:framework`.

---

## Tips & best practices

- **Treat the key as configuration, not a deep secret.** It's signed and verifiable on the receiver side; pasting it into a Slack thread doesn't compromise anything. Keep it in your secret manager anyway for hygiene.
- **Set *Public key path* only when needed.** The default works for keys issued by Nomana-IT — overriding is for partner / OEM deployments only.
- **Watch the 30-day expiry chip.** Renewing late means a short window where licensed connectors disappear from the UI.
- **Never edit a key by hand.** A single character change invalidates the signature; ask the vendor for a new key instead.
- **Keep the open feature set self-sufficient.** A well-designed install should still be useful in restricted mode — use licensed connectors for differentiation, not for the core flow.

---

## Under the hood

The license payload is stored only in memory after the env var is read. The Settings → Framework form persists the **name of the env var** + the optional public-key path; the JWT itself never lands on disk. The settings are stored in `config/app.toml` under the `[license]` section.

---

## What's next

- [Authentication](./authentication.md) — JWT for users (different mechanism, same JWT format).
- [Roles & permissions](./roles-permissions.md) — `license:read` and the rest of the `settings:*` family.
- [Configuration → Environment variables](../configuration/environment-variables.md) — `LIBERTY_LICENSE_KEY` in the env contract.
