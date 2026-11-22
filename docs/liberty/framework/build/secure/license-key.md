---
title: License key
description: "The Liberty Next licence key: what it unlocks (Nomasx-1, Nomajde), where to paste it (Liberty Next → Administer → App → License), how to check it (liberty-license, /api/license), what happens without it, and how to replace it before it expires."
keywords: [Liberty Next, licence, license key, Nomasx-1, Nomajde, Settings App, liberty-license, api license, expiry, restricted mode]
---

# License key

The licensed applications — **Nomasx-1** and **Nomajde** — are unlocked by a licence key delivered by Nomana-IT.

Liberty Next itself is published under the **Business Source License 1.1**: source-available, free to read, modify and fork, and to run in production for your own organisation and the applications you build on it — those applications, their configuration and plugins are yours. Selling Liberty Next itself, or a modified version, or offering it as a paid hosted service needs Nomana-IT's written agreement. Each version becomes available under the GNU AGPL v3 or later four years after its release. Nomana-IT's applications are separate products under their own terms.

---

## At a glance

<svg viewBox="0 0 1320 584" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="slic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="slic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="slic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="slic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="544" rx="14" fill="url(#slic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">App</text>
  <rect x="985" y="28" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1034.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Reload config</text>
  <rect x="938" y="28" width="41" height="22" rx="5" fill="url(#slic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="958.5" y="42.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="865" y="28" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="898.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Discard</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="236" y="78" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">The installation's settings (app.toml). Secrets are encrypted in the file; a restart is asked for when one is needed.</text>
  <text x="246" y="104" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">The installation</text>
  <rect x="242" y="112" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="125" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="123" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Server</text>
  <text x="268" y="133" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">ACME ERP · :8000 · info</text>
  <rect x="242" y="142" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="155" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="153" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Display</text>
  <text x="268" y="163" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">en · This month · 50</text>
  <rect x="242" y="172" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="185" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="183" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">External addresses</text>
  <text x="268" y="193" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">JDE_WEB</text>
  <rect x="242" y="202" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="215" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="213" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">PDF branding</text>
  <text x="268" y="223" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">framework defaults</text>
  <rect x="242" y="232" width="238" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <circle cx="256" cy="245" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="243" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">License</text>
  <text x="268" y="253" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">configured</text>
  <text x="246" y="278" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Signing in</text>
  <rect x="242" y="286" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="299" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="297" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Sign-in</text>
  <text x="268" y="307" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">File (auth.toml) · restart after a change</text>
  <rect x="242" y="316" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="329" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="327" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">OpenID Connect (SSO)</text>
  <text x="268" y="337" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="246" y="362" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">What is switched on</text>
  <rect x="242" y="370" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="383" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="381" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <text x="268" y="391" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">claude-sonnet-4-5</text>
  <rect x="242" y="400" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="413" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="411" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications (email)</text>
  <text x="268" y="421" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">no SMTP — portal only</text>
  <rect x="242" y="430" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="443" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="441" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">nomaflow</text>
  <text x="268" y="451" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">default · restart after a change</text>
  <rect x="242" y="460" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="473" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="471" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Change packages</text>
  <text x="268" y="481" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">default · restart after a change</text>
  <text x="246" y="506" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Running it</text>
  <rect x="242" y="514" width="238" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <circle cx="256" cy="527" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="268" y="525" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Server log</text>
  <text x="268" y="535" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">text · 10 MB × 5 · restart after a change</text>
  <rect x="236" y="86" width="250" height="464" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="106" fill="#e2e8f0" fontSize="9.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LICENSE</text>
  <text x="1070" y="106" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">configured</text>
  <line x1="498" y1="118" x2="1084" y2="118" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="136" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Vendor-signed JWT that unlocks the licensed applications. Empty → "restricted" mode.</text>
  <text x="512" y="148" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Encrypted at rest with the install master key.</text>
  <text x="512" y="166" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LICENSE KEY</text>
  <rect x="512" y="172" width="558" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="187.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••</text>
  <text x="1056" y="188" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <text x="512" y="214" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">A licensed installation reports once a day: this environment's name, its version and its</text>
  <text x="512" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">number of enabled accounts — nothing else (job liberty-usage-report).</text>
  <text x="512" y="242" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">USAGE REPORT ADDRESS</text>
  <rect x="512" y="248" width="558" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="263.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">https://lms.example.com/api/usage</text>
  <text x="512" y="286" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">blank = nothing is sent</text>
  <rect x="498" y="86" width="586" height="214" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">License section</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">its state on the line</text>
  <line x1="200" y1="247.0" x2="242" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Save</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applied at once, no restart</text>
  <line x1="1120" y1="47.0" x2="968" y2="50" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paste the key</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">masked, eye to show it</text>
  <line x1="1120" y1="167.0" x2="1070" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage report</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">blank = nothing sent</text>
  <line x1="1120" y1="277.0" x2="1070" y2="260" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#slic-arrow)"/>
</svg>

---

## Install the key \{#install\}

Sign in as a superuser, open **Liberty Next → Administer → App → License**, paste the key into **License key** and save. The key is encrypted with the install's master key, and the licensed applications load at once — no restart.

Before pasting it, the key can be checked from the server: `liberty-license verify <key>` (on Docker: `docker exec -u liberty liberty-next liberty-license verify <key>`).

---

## Check the licence \{#check\}

| Where | Shows |
|---|---|
| The **License** line of the App page, and its section header | *configured*, or *not set — restricted mode*. |
| `liberty-license status` | Validity, products covered, expiry date of the configured key. |
| `GET /api/license` | `{mode, customer, plan, apps, expires_at, error}`. |
| `GET /info` | `license.mode`: `full` or `restricted`. |

---

## Usage report \{#usage-report\}

A licensed installation reports once a day to the licence management tool:

| Sent | Content |
|---|---|
| Environment | The **Environment** of Liberty Next → Administer → App → Server (`production`, `test`…). |
| Version | The framework's and, when the applications are installed, theirs — one report each. |
| Enabled accounts | Their number. |
| Installation fingerprint | A short hash that tells two installations apart; it carries no address and no name. |

No figure of the applications, no user name, no data.

The report is sent by a Nomaflow job, `liberty-usage-report`, listed under **Nomaflow → Jobs** and scheduled every day at 04:17. Each run shows what was sent and what the tool answered; a refused or unreachable send is the run's error. The job is run, paused or rescheduled like any other.

The job exists while a licence key is installed and **Usage report address** (Liberty Next → Administer → App → License) is filled; blank the address and nothing is sent.

---

## Without a valid key \{#restricted\}

Without a key, or with an expired or invalid one, the server runs in **restricted mode**: the framework and the applications built on it work, the licensed applications do not load. The server log says why with a line starting `license: not loading licensed connector(s)`.

---

## Replace the key \{#replace\}

Note the expiry date when the key is installed. Before it expires, paste the new key in **Liberty Next → Administer → App → License** and save: it applies at once.

The key can also come from the environment variable `LIBERTY_LICENSE_KEY`, for installs that keep secrets in an orchestrator; the App page then shows the reference as it is.
