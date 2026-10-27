---
title: License key
description: "The Liberty Next licence key: what it unlocks (Nomasx-1, Nomajde), where to paste it (Settings → App → License), how to check it (liberty-license, /api/license), what happens without it, and how to replace it before it expires."
keywords: [Liberty Next, licence, license key, Nomasx-1, Nomajde, Settings App, liberty-license, api license, expiry, restricted mode]
---

# License key

The framework is free to use. The licensed applications — **Nomasx-1** and **Nomajde** — are unlocked by a licence key delivered by Nomana-IT.

---

## At a glance

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="280" rx="14" fill="url(#lic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · App</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="720" height="26" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="91" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  License</text>
  <rect x="850" y="78" width="68" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="884.0" y="90.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">configured</text>
  <text x="260" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">License key</text>
  <rect x="390" y="116" width="430" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="130.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••••••••••••••••••••••••</text>
  <text x="832" y="131" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="260" y="152" width="680" height="96" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="176" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Customer</text>
  <text x="400" y="176" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="276" y="200" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Products</text>
  <text x="400" y="200" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Nomasx-1 · Nomajde</text>
  <text x="276" y="224" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Expires</text>
  <text x="400" y="224" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">31/12/2027</text>
  <rect x="860" y="262" width="80" height="22" rx="5" fill="url(#lic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="900.0" y="276.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">License section</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">status in the header</text>
  <line x1="210" y1="91.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paste the key</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">encrypted when saved</text>
  <line x1="210" y1="187.0" x2="390" y2="127" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">What it covers</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">customer, products, expiry</text>
  <line x1="1000" y1="167.0" x2="940" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Applied at once</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">no restart</text>
  <line x1="1000" y1="267.0" x2="940" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
</svg>

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

The key can also come from the environment variable `LIBERTY_LICENSE_KEY`, for installs that keep secrets in an orchestrator; Settings then shows the reference as it is.
