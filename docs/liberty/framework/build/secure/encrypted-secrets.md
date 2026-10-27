---
title: Encrypted secrets
description: "How Liberty Next stores pool passwords, API credentials, the licence key, the AI key, the OIDC client secret and the SMTP password: encrypted as ENC: values on every save from Settings, with the install's master key."
keywords: [Liberty Next, encrypted secrets, "ENC:", master key, pool password, API token, Settings, liberty-crypto]
---

# Encrypted secrets

Every secret field of Settings is encrypted when it is saved and written to the configuration file as `ENC:…`. The server decrypts it when it loads the file, with the install's **master key**.

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sec-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sec-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sec-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="sec-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="30" width="760" height="260" rx="14" fill="url(#sec-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="250" y="90" width="200" height="70" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="350.0" y="122.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Settings field</text>
  <text x="350.0" y="137.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">password ••••••• 👁</text>
  <rect x="510" y="90" width="180" height="70" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="600.0" y="122.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Encrypted</text>
  <text x="600.0" y="137.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">AES-256-GCM, master key</text>
  <rect x="750" y="90" width="200" height="70" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="850.0" y="122.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Stored</text>
  <text x="850.0" y="137.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">ENC:Mq6vNg…2z==</text>
  <line x1="450" y1="125" x2="510" y2="125" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sec-flow)"/>
  <line x1="690" y1="125" x2="750" y2="125" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sec-flow)"/>
  <rect x="510" y="200" width="180" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="600.0" y="227.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Server start</text>
  <text x="600.0" y="242.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">decrypts with the key</text>
  <line x1="850" y1="160" x2="690" y2="230" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#sec-flow)"/>
  <rect x="250" y="200" width="200" height="60" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="350.0" y="227.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_MASTER_KEY</text>
  <text x="350.0" y="242.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">environment</text>
  <line x1="450" y1="230" x2="510" y2="230" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#sec-flow)"/>
  <text x="600" y="60" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pool passwords · API credentials · licence key · AI key · OIDC secret · SMTP password</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Masked input</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">the eye shows it</text>
  <line x1="210" y1="117.0" x2="250" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sec-arrow)"/>
  <rect x="1000" y="100" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ENC: value</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">never in clear</text>
  <line x1="1000" y1="117.0" x2="950" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sec-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Master key</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">keep a copy off the server</text>
  <line x1="210" y1="277.0" x2="250" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sec-arrow)"/>
</svg>

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
