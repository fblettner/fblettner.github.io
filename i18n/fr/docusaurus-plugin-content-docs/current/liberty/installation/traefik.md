---
title: HTTPS et Traefik
description: "Passer Liberty Next en HTTPS sur l'installation Docker complète : certificat Let's Encrypt ou certificat fourni, changement de mode ou retour au HTTP avec ./liberty ssl, mot de passe du tableau de bord Traefik, et ce qu'il faut relayer avec un proxy inverse existant."
keywords: [Liberty Next, HTTPS, TLS, Traefik, Let's Encrypt, certificat, liberty ssl, proxy inverse, mot de passe du tableau de bord, en-têtes de sécurité, Socket.IO]
---

# HTTPS et Traefik

Dans l'installation complète, Traefik reçoit toutes les requêtes et les transmet : `/` vers Liberty Next, `/pgadmin`, `/portainer` et `/traefik` vers les outils. C'est aussi là que s'active le HTTPS, en une commande, à tout moment après l'installation.

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
