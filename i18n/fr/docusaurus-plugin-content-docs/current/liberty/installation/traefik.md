---
title: HTTPS et Traefik
description: "Passer Liberty Next en HTTPS sur l'installation Docker complète : certificat Let's Encrypt ou certificat fourni, changement de mode ou retour au HTTP avec ./liberty ssl, mot de passe du tableau de bord Traefik, et ce qu'il faut relayer avec un proxy inverse existant."
keywords: [Liberty Next, HTTPS, TLS, Traefik, Let's Encrypt, certificat, liberty ssl, proxy inverse, mot de passe du tableau de bord, en-têtes de sécurité, Socket.IO]
---

# HTTPS et Traefik

Dans l'installation complète, Traefik reçoit toutes les requêtes et les transmet : `/` vers Liberty Next, `/pgadmin`, `/portainer` et `/traefik` vers les outils. C'est aussi là que s'active le HTTPS, en une commande, à tout moment après l'installation.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="60" width="760" height="240" rx="14" fill="url(#dgt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="100" width="140" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="310.0" y="127.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="310.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">https://liberty.example.com</text>
  <rect x="440" y="90" width="180" height="80" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="530.0" y="127.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik</text>
  <text x="530.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:443 · certificat</text>
  <rect x="680" y="100" width="140" height="60" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="750.0" y="127.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-next</text>
  <text x="750.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">:8000</text>
  <rect x="840" y="100" width="110" height="60" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="895.0" y="127.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau Traefik</text>
  <text x="895.0" y="142.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">mot de passe</text>
  <line x1="380" y1="130" x2="440" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgt-flow)"/>
  <line x1="620" y1="130" x2="680" y2="130" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dgt-flow)"/>
  <rect x="360" y="220" width="180" height="50" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="450.0" y="242.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Let's Encrypt</text>
  <text x="450.0" y="257.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">automatique</text>
  <rect x="560" y="220" width="180" height="50" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="650.0" y="242.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Certificat fourni</text>
  <text x="650.0" y="257.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">cert + key</text>
  <line x1="450" y1="220" x2="510" y2="170" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgt-flow)"/>
  <line x1="650" y1="220" x2="550" y2="170" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 3" markerEnd="url(#dgt-flow)"/>
  <rect x="10" y="230" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux façons</text>
  <text x="20" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">./liberty ssl</text>
  <line x1="210" y1="247.0" x2="360" y2="245" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgt-arrow)"/>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">HTTP → HTTPS</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">port 80 redirigé</text>
  <line x1="210" y1="77.0" x2="442" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgt-arrow)"/>
</svg>

---

## Let's Encrypt \{#letsencrypt\}

Pour un serveur accessible depuis Internet :

```bash
./liberty ssl letsencrypt --domain liberty.example.com --email ops@example.com
```

| Condition | Pourquoi |
|---|---|
| Le nom pointe vers cet hôte (enregistrement DNS A ou AAAA). | Let's Encrypt vérifie le nom avant d'émettre le certificat. |
| Les ports `80` et `443` sont accessibles depuis Internet. | Le certificat s'obtient par un échange TLS sur le port `443`. |

Traefik demande le certificat au premier appel HTTPS et le renouvelle seul. Les certificats sont conservés dans le volume `traefik-acme`, qu'aucune réinitialisation ne supprime (Let's Encrypt limite le nombre de certificats émis pour un même nom).

---

## Certificat fourni \{#provided\}

Pour un serveur interne, une autorité de certification d'entreprise ou un hôte sans accès à Internet :

```bash
./liberty ssl provided --domain liberty.internal.example.com \
  --cert-dir /etc/pki/liberty --cert-file liberty.crt --key-file liberty.key
```

Le dossier des certificats est monté en lecture seule dans Traefik, et `traefik/dynamic/tls.yml` est généré avec les deux noms de fichiers. Pour renouveler, remplacer les deux fichiers dans le dossier puis redémarrer Traefik (`docker compose restart traefik` depuis `release/`). Pour ajouter des certificats pour d'autres noms, modifier `tls.yml` : Traefik le recharge de lui-même.

---

## Ce que change le HTTPS \{#effects\}

- Liberty Next, pgAdmin et Portainer répondent sur `https://<domaine>/…` ; les appels en HTTP sont redirigés vers HTTPS.
- Les réponses de Liberty Next portent des en-têtes de sécurité (pas d'affichage dans un cadre d'un autre site, pas de devinette du type de contenu, politique de référent stricte).
- Les routes ne répondent que pour le nom de domaine déclaré.

---

## Changer de mode ou revenir au HTTP \{#switch\}

```bash
./liberty ssl provided …        # de Let's Encrypt au certificat fourni, ou l'inverse
./liberty ssl off               # retour au HTTP simple sur le port 80
```

Seule la partie HTTPS des fichiers compose enregistrés change : les applications sous licence et tous les secrets restent en place, et l'ensemble redémarre. Le HTTPS demande l'installation complète ; l'installation légère n'a pas de Traefik.

---

## Le tableau de bord Traefik \{#dashboard\}

`/traefik` affiche les routes et les services connus de Traefik. Il est protégé par l'utilisateur `admin` et un mot de passe aléatoire affiché une seule fois par l'installation.

```bash
./liberty dashboard-password      # nouveau mot de passe aléatoire, affiché une fois
```

`.env` ne garde que l'empreinte du mot de passe. `./liberty doctor` signale une installation qui utilise encore l'ancien mot de passe par défaut commun.

---

## Avec un proxy inverse existant \{#own-proxy\}

Quand un proxy d'entreprise ou un répartiteur de charge termine déjà le HTTPS, laisser Liberty Next en HTTP simple (`./liberty ssl off`, ou l'installation légère) et diriger le proxy vers lui. Le proxy doit :

- relayer les connexions WebSocket sur `/socket.io` (mises à jour en temps réel : cloche des notifications, verrous d'enregistrement, réponses de l'assistant) ;
- garder un utilisateur sur la même instance s'il y en a plusieurs (Traefik le fait avec le cookie `liberty_sticky`).

### Publication sous un sous-chemin \{#sub-path\}

Pour publier Liberty Next sous un chemin d'un site existant — `https://intranet.example.com/liberty/` —, renseigner `/liberty` dans **Sous-chemin derrière un proxy inverse**, sous [Liberty Next → Administrer → App](../framework/build/settings-app.md#app), puis redémarrer le serveur. La page, ses ressources, l'API, les téléchargements, la connexion en direct et les liens se résolvent sous ce chemin, que le proxy retire le préfixe avant de transmettre la requête ou qu'il le conserve. Les adresses construites par le serveur — le retour de l'authentification unique — l'intègrent : déclarer cette adresse de retour, sous-chemin compris, auprès du fournisseur d'identité.

Le sous-chemin s'applique aussi à l'[application installée](./production.md#pwa), et une [instance cible de promotion](../framework/build/packages.md#promotion) se déclare avec le sous-chemin dans son URL.
