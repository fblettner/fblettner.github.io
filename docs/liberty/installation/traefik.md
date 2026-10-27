---
title: HTTPS and Traefik
description: "Switch Liberty Next to HTTPS on the full Docker layout: a Let's Encrypt certificate or your own, switching mode or back to HTTP with ./liberty ssl, the Traefik dashboard password, and what to forward when you use your own reverse proxy."
keywords: [Liberty Next, HTTPS, TLS, Traefik, Let's Encrypt, certificate, liberty ssl, reverse proxy, dashboard password, security headers, Socket.IO]
---

# HTTPS and Traefik

On the full layout, Traefik receives every request and forwards it: `/` to Liberty Next, `/pgadmin`, `/portainer`, `/traefik` to the tools. It is also where HTTPS is switched on. One command does it, at any time after the installation.

---

## At a glance

<svg viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="60" width="760" height="240" rx="14" fill="url(#dgt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="100" width="140" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="310.0" y="127.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Users</text>
  <text x="310.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">https://liberty.example.com</text>
  <rect x="440" y="90" width="180" height="80" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="530.0" y="127.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik</text>
  <text x="530.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:443 · certificate</text>
  <rect x="680" y="100" width="140" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="750.0" y="127.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="750.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:8000</text>
  <rect x="840" y="100" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="895.0" y="127.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dashboard</text>
  <text x="895.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">password</text>
  <line x1="380" y1="130" x2="440" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgt-flow)"/>
  <line x1="620" y1="130" x2="680" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgt-flow)"/>
  <rect x="360" y="220" width="180" height="50" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="450.0" y="242.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Let's Encrypt</text>
  <text x="450.0" y="257.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">automatic</text>
  <rect x="560" y="220" width="180" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="650.0" y="242.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Own certificate</text>
  <text x="650.0" y="257.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cert + key</text>
  <line x1="450" y1="220" x2="510" y2="170" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgt-flow)"/>
  <line x1="650" y1="220" x2="550" y2="170" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgt-flow)"/>
  <rect x="10" y="230" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Two ways</text>
  <text x="20" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">./liberty ssl</text>
  <line x1="210" y1="247.0" x2="360" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgt-arrow)"/>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">HTTP → HTTPS</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">port 80 redirected</text>
  <line x1="210" y1="77.0" x2="442" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgt-arrow)"/>
</svg>

---

## Let's Encrypt \{#letsencrypt\}

For a server reachable from the internet:

```bash
./liberty ssl letsencrypt --domain liberty.example.com --email ops@example.com
```

| Requirement | Why |
|---|---|
| The name resolves to this host (DNS A or AAAA record). | Let's Encrypt checks the name before issuing. |
| Ports `80` and `443` are reachable from the internet. | The certificate is obtained through a TLS challenge on `443`. |

Traefik requests the certificate on the first HTTPS call and renews it on its own. Certificates are kept in the `traefik-acme` volume, which no reset deletes (Let's Encrypt limits how often a certificate can be issued for the same name).

---

## Your own certificate \{#provided\}

For an internal server, a company certificate authority or a host without internet access:

```bash
./liberty ssl provided --domain liberty.internal.example.com \
  --cert-dir /etc/pki/liberty --cert-file liberty.crt --key-file liberty.key
```

The certificate folder is mounted read-only into Traefik and `traefik/dynamic/tls.yml` is generated with the two file names. To renew, replace the two files in the folder, then restart Traefik (`docker compose restart traefik` from `release/`). To add certificates for other names, edit `tls.yml`: Traefik reloads it on its own.

---

## What HTTPS changes \{#effects\}

- Liberty Next, pgAdmin and Portainer answer on `https://<domain>/…`; plain HTTP calls are redirected to HTTPS.
- Liberty Next responses carry security headers (no framing by other sites, no content-type guessing, a strict referrer policy).
- The routes answer only for the declared domain name.

---

## Change mode or go back to HTTP \{#switch\}

```bash
./liberty ssl provided …        # from Let's Encrypt to your own certificate, or the reverse
./liberty ssl off               # back to plain HTTP on port 80
```

Only the HTTPS part of the recorded compose files changes: the licensed apps and every secret stay as they are, and the stack is restarted. HTTPS needs the full layout; the light layout has no Traefik.

---

## The Traefik dashboard \{#dashboard\}

`/traefik` shows the routes and services Traefik knows about. It is protected by the user `admin` and a random password printed once by the installation.

```bash
./liberty dashboard-password      # new random password, printed once
```

`.env` keeps only the hash of the password. `./liberty doctor` reports an install that still uses the old common default password.

---

## Using your own reverse proxy \{#own-proxy\}

When a company proxy or load balancer already terminates HTTPS, keep Liberty Next on plain HTTP (`./liberty ssl off`, or the light layout) and point the proxy at it. The proxy must:

- forward WebSocket upgrades on `/socket.io` (live updates: the notification bell, record locks, assistant replies);
- keep a user on the same backend if there are several (Traefik does it with the `liberty_sticky` cookie).
