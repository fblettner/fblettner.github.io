---
title: Points de santé
description: "Les points de santé de Liberty Next : /health (le processus fonctionne), /ready (la base du framework répond) et /info (version et compteurs, plus de détails une fois connecté), avec des exemples pour Docker, Kubernetes et les sondes externes."
keywords: [Liberty Next, health, ready, info, sonde de vie, disponibilité, healthcheck, Kubernetes, répartiteur de charge, surveillance]
---

# Points de santé

Trois points d'accès, sans jeton.

| Point d'accès | Répond | Usage |
|---|---|---|
| `GET /health` | `200 {"status": "ok", "version": "7.0.58"}` dès que le processus fonctionne. | Sonde de vie : redémarrer le processus s'il ne répond pas. |
| `GET /ready` | `200 {"status": "ok", "version": …, "pool": "default"}` quand la base du framework répond à un `SELECT 1` en moins de 5 secondes ; `503 {"status": "unavailable", …, "error": "…"}` sinon. | Disponibilité : n'envoyer du trafic que sur un `200`. |
| `GET /info` | Version et compteurs (connecteurs, pools, écrans, tableaux de bord…), indicateurs de fonctionnalités (SSO, assistant, mode de licence). | Un coup d'œil rapide, le support. |

---

## /ready \{#ready\}

Le serveur démarre même si sa base est injoignable — pour qu'un pool puisse être corrigé depuis **Paramètres** — mais `/ready` répond `503` tant que la base n'est pas revenue. Une installation sans pool `default` répond `200` avec `"pool": null`.

Les installations Docker l'utilisent comme contrôle de santé du conteneur : un ensemble dont la base est arrêtée apparaît **unhealthy** dans `docker ps` et dans `./liberty status`.

```yaml title="Kubernetes"
livenessProbe:
  httpGet: { path: /health, port: 8000 }
  periodSeconds: 30
readinessProbe:
  httpGet: { path: /ready, port: 8000 }
  periodSeconds: 10
  failureThreshold: 3
```

---

## /info \{#info\}

Un appelant anonyme ne reçoit que les compteurs et les indicateurs. Un appelant connecté reçoit en plus les noms des connecteurs et des pools, l'emplacement du stockage des utilisateurs et le modèle de l'assistant.

```json title="GET /info (anonyme, extrait)"
{
  "name": "Liberty Next",
  "version": "7.0.58",
  "connectors_loaded": 12,
  "pools_loaded": 4,
  "screens": { "apps": ["nomasx1", "nomajde"], "total": 107 },
  "auth": { "backend": "toml", "oidc_enabled": true },
  "ai": { "enabled": true, "available": true },
  "license": { "mode": "full" }
}
```

---

## Surveillance externe \{#external-monitoring\}

- Interroger `/ready` chaque minute depuis l'outil de supervision et alerter après quelques échecs consécutifs.
- Collecter le journal du serveur sur la sortie standard ; `log_format = "json"` dans `[app]` écrit un objet JSON par ligne, chacun avec l'identifiant de la requête.
- Pour les tâches, préférer une règle de notification sur `failure` et `missed` — voir [Notifications](../nomaflow/notifications.md).
