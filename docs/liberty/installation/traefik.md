---
title: HTTPS and Traefik
description: "Switch Liberty Next to HTTPS on the full Docker layout: a Let's Encrypt certificate or your own, switching mode or back to HTTP with ./liberty ssl, the Traefik dashboard password, and what to forward when you use your own reverse proxy."
keywords: [Liberty Next, HTTPS, TLS, Traefik, Let's Encrypt, certificate, liberty ssl, reverse proxy, dashboard password, security headers, Socket.IO]
---

# HTTPS and Traefik

On the full layout, Traefik receives every request and forwards it: `/` to Liberty Next, `/pgadmin`, `/portainer`, `/traefik` to the tools. It is also where HTTPS is switched on. One command does it, at any time after the installation.

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
