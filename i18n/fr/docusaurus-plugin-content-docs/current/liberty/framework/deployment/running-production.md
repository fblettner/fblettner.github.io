---
title: Mise en production
description: "Exécuter Liberty Framework en production : unité systemd bare-metal, image de conteneur avec Podman / Docker, Deployment + Service Kubernetes. Pool PostgreSQL, reverse proxy nginx, TLS, routage des journaux, montage LIBERTY_APPS_DIR et schéma scheduler-sur-un-seul-replica."
keywords: [Liberty Framework, production, systemd, Docker, Podman, Kubernetes, nginx, TLS, PostgreSQL, LIBERTY_APPS_DIR, multi-replica, scheduler]
---

# Mise en production

Le framework est un unique processus Python qui sert une SPA React sur un seul port — le déploiement en production est tout aussi simple. Cette page couvre les trois formes les plus courantes (systemd bare-metal, conteneur, Kubernetes), la couche reverse proxy + TLS, la base de données, le routage des journaux et le schéma multi-replica.

---

## Vue d'ensemble

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', margin: '24px 0'}}>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>PROCESSUS</div>
    <div style={{fontSize: '12px'}}>Un <code>uvicorn</code> par replica. Runtime asynchrone — un seul processus sature un serveur modeste.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>STOCKAGE</div>
    <div style={{fontSize: '12px'}}>PostgreSQL pour l'authentification, les jobs et les verrous. <code>liberty-apps</code> sur un montage partagé ou cloné par git au démarrage.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>FRONT</div>
    <div style={{fontSize: '12px'}}>nginx / Traefik pour TLS et upgrade websocket. Sonde de santé sur <code>/api/healthz</code>.</div>
  </div>
  <div style={{border: '1px solid rgba(255,255,255,0.10)', borderRadius: '10px', padding: '14px', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, color: '#4a9eff', marginBottom: '6px'}}>MISE À L'ÉCHELLE</div>
    <div style={{fontSize: '12px'}}>Multi-replica pris en charge ; scheduler épinglé à un. La session est en JWT, pas besoin de sticky.</div>
  </div>
</div>

---

## Forme 1 — systemd bare-metal

La forme la plus simple pour une installation mono-hôte. Deux services : le processus framework, et un timer optionnel de `git pull` sur `liberty-apps` pour rafraîchir la configuration.

### Arborescence

```text
/opt/liberty-next/                ← binaire du framework (clone git de liberty-next)
  └── .venv/                      ← virtualenv Python
/opt/liberty-apps/                ← dépôt de configuration (clone git de liberty-apps)
  └── config/                     ← lu via LIBERTY_APPS_DIR
/etc/liberty/secrets.env          ← fichier d'environnement, mode 0600, propriétaire liberty
/etc/systemd/system/liberty-next.service
```

### Unité systemd

```ini
[Unit]
Description=Liberty Framework
After=network.target postgresql.service
Requires=postgresql.service

[Service]
Type=exec
User=liberty
Group=liberty
WorkingDirectory=/opt/liberty-next

Environment=HOST=127.0.0.1
Environment=PORT=8000
Environment=LIBERTY_APPS_DIR=/opt/liberty-apps/config

EnvironmentFile=/etc/liberty/secrets.env

ExecStart=/opt/liberty-next/.venv/bin/uvicorn liberty.main:app \
          --host ${HOST} --port ${PORT} \
          --workers 1 --log-config /etc/liberty/log-config.yaml

Restart=on-failure
RestartSec=5
LimitNOFILE=65536

# Sandbox
ProtectSystem=strict
ProtectHome=true
PrivateTmp=true
NoNewPrivileges=true
ReadWritePaths=/opt/liberty-apps /var/log/liberty

[Install]
WantedBy=multi-user.target
```

`/etc/liberty/secrets.env` (mode `0600`) :

```env
LIBERTY_DB_URL=postgresql+asyncpg://liberty:****@db.internal/liberty
LIBERTY_JWT_SECRET=...
LIBERTY_MASTER_KEY=...
LIBERTY_LICENSE_KEY=...
ANTHROPIC_API_KEY=...
LIBERTY_OIDC_CLIENT_SECRET=...
```

`enable --now liberty-next` et le framework démarre à chaque allumage de l'hôte.

### Utiliser `--workers 1`, pas plus

Le framework est en asyncio et utilise Socket.IO pour les mises à jour en direct. Plusieurs workers uvicorn derrière un même port maintiendraient chacun leur propre état en mémoire (verrous d'enregistrement, scheduler de jobs, suivi des conversations IA) sans coordination. Mettre à l'échelle en **ajoutant des replicas** (Forme 3) plutôt qu'en ajoutant des workers.

---

## Forme 2 — Conteneur (Podman / Docker)

Le framework ne fournit pas d'image officielle ; à construire depuis le dépôt. Un `Containerfile` minimal :

```dockerfile
FROM python:3.12-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    git curl tini && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY liberty-next/ .
RUN python -m venv /opt/venv && \
    /opt/venv/bin/pip install -e ".[dev]" && \
    /opt/venv/bin/pip install uvicorn[standard]

# Build the React frontend
RUN apt-get update && apt-get install -y nodejs npm && \
    cd frontend && npm ci && npm run build

ENV PATH="/opt/venv/bin:$PATH"
EXPOSE 8000
ENTRYPOINT ["tini", "--"]
CMD ["uvicorn", "liberty.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Construire et exécuter :

```bash
podman build -t liberty-next:0.42.0 -f Containerfile .

podman run -d --name liberty \
  -p 8000:8000 \
  -v /opt/liberty-apps:/apps:ro,Z \
  --env-file /etc/liberty/secrets.env \
  -e LIBERTY_APPS_DIR=/apps/config \
  liberty-next:0.42.0
```

| Montage / variable | Rôle |
|---|---|
| `-v /opt/liberty-apps:/apps:ro,Z` | Monte le dépôt de configuration en lecture seule dans le conteneur. Les mises à jour se font sur l'hôte (`git pull`) ; le framework les prend en compte sur `POST /admin/reload`. |
| `--env-file /etc/liberty/secrets.env` | Même fichier que pour l'unité systemd. Ne pas figer les secrets dans l'image. |
| `-e LIBERTY_APPS_DIR=/apps/config` | Chemin intra-conteneur vers la configuration montée. |

Pour Docker, remplacer `podman run` par `docker run` — les drapeaux sont identiques.

---

## Forme 3 — Kubernetes

Un déploiement multi-replica typique sous Kubernetes :

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: liberty-next
spec:
  replicas: 3
  selector:
    matchLabels: { app: liberty-next }
  template:
    metadata:
      labels: { app: liberty-next }
    spec:
      containers:
        - name: liberty
          image: registry.example.com/liberty-next:0.42.0
          ports:
            - containerPort: 8000
              name: http
          envFrom:
            - secretRef: { name: liberty-secrets }
          env:
            - name: LIBERTY_APPS_DIR
              value: /apps/config
            - name: LIBERTY_LOG_JSON
              value: "1"
            - name: LIBERTY_JOBS_SCHEDULER_ENABLED
              valueFrom:
                fieldRef: { fieldPath: metadata.labels['scheduler'] }
          volumeMounts:
            - name: apps
              mountPath: /apps
              readOnly: true
          readinessProbe:
            httpGet: { path: /api/healthz, port: http }
            initialDelaySeconds: 5
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /api/healthz, port: http }
            initialDelaySeconds: 30
            periodSeconds: 30
      volumes:
        - name: apps
          persistentVolumeClaim: { claimName: liberty-apps }

---
apiVersion: v1
kind: Service
metadata:
  name: liberty-next
spec:
  selector: { app: liberty-next }
  ports:
    - port: 8000
      targetPort: http
```

### Points d'attention en multi-replica \{#multi-replica-considerations\}

| Sujet | Mitigation |
|---|---|
| **Le scheduler ne doit s'exécuter que sur un seul replica.** | Définir `LIBERTY_JOBS_SCHEDULER_ENABLED=true` sur exactement un pod (via un label et l'API descendante) et `false` sur les autres. Le verrou consultatif empêche un double déclenchement si une erreur de déploiement laisse la variable sur deux pods. |
| **Socket.IO demande un routage sticky ou un adaptateur Redis.** | Le framework suppose aujourd'hui un état Socket.IO sur une seule instance. Soit garder la SPA rattachée à un seul replica via affinité de session sur le Service, soit utiliser Socket.IO avec un adaptateur Redis (pas encore prêt à l'emploi — voir la feuille de route). |
| **La configuration `liberty-apps` doit être identique sur tous les pods.** | Monter le même PVC ReadWriteMany, ou faire un `git pull` sur le même commit pour tous les replicas au démarrage. |
| **Le secret JWT doit correspondre entre les pods.** | Même `LIBERTY_JWT_SECRET` — sinon un token émis sur le pod A est rejeté par le pod B. |

---

## Reverse proxy (nginx)

Le framework doit se trouver derrière un reverse proxy pour la terminaison TLS, la compression gzip et l'upgrade websocket. Un bloc nginx typique :

```nginx
upstream liberty {
    server 127.0.0.1:8000;
}

server {
    listen 443 ssl http2;
    server_name liberty.example.com;

    ssl_certificate     /etc/letsencrypt/live/liberty.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/liberty.example.com/privkey.pem;

    # SPA + REST + admin tout sur le même port
    location / {
        proxy_pass http://liberty;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;

        # Websocket / Socket.IO
        proxy_http_version 1.1;
        proxy_set_header Upgrade           $http_upgrade;
        proxy_set_header Connection        "upgrade";
        proxy_read_timeout 60s;
    }

    # Server-Sent Events longue durée pour la discussion IA
    location /ai/chat {
        proxy_pass http://liberty;
        proxy_buffering off;
        proxy_read_timeout 300s;
        proxy_set_header X-Forwarded-Proto https;
    }
}

server {
    listen 80;
    server_name liberty.example.com;
    return 301 https://$server_name$request_uri;
}
```

Définir `[app] trusted_proxies = ["127.0.0.1"]` dans `app.toml` pour que le framework lise correctement les en-têtes `X-Forwarded-*`.

Pour Traefik, les labels équivalents font le même travail — l'upgrade websocket est automatique, le buffering SSE doit être désactivé explicitement.

---

## Base de données

PostgreSQL est la cible recommandée en production. La création du schéma est une seule commande `./start.sh init-db` ; les mises à jour ultérieures détectent automatiquement les nouvelles colonnes.

| Paramètre | Recommandation |
|---|---|
| `max_connections` | Au moins `replicas × pool_size + 20`. Avec 3 replicas et `pool_size = 10`, cela fait 50. |
| `idle_in_transaction_session_timeout` | `300s` — coupe les connexions en attente (le framework retente proprement). |
| `statement_timeout` | `300s` est une valeur saine par défaut ; à augmenter pour les requêtes ETL connues longues (à configurer par rôle). |
| Sauvegarde | Sauvegarde PG standard. Le fichier `auth.toml` (quand `backend = "toml"`) est par hôte — sauvegarder aussi `/opt/liberty-next/config/`. |

Un service managé (RDS, Cloud SQL, Aiven) fonctionne à l'identique — le framework parle pgwire via `asyncpg`.

---

## Routage des journaux

Pour l'agrégation dans Loki / Splunk / Datadog, basculer le framework en journalisation JSON :

```bash
export LIBERTY_LOG_JSON=1
export LIBERTY_LOG_LEVEL=INFO
```

La sortie est un objet JSON par ligne sur stdout — chaque runtime de conteneur peut l'ingérer sans agent. Les loggers du framework comprennent :

| Logger | Rôle |
|---|---|
| `liberty.connector.<name>` | Une ligne par requête / appel d'endpoint, avec le temps et le nombre de lignes. |
| `liberty.auth` | Connexion réussie / échouée, rafraîchissement et révocation de tokens. |
| `liberty.jobs.<job_name>` | Déclenchements de job, transitions d'étape, retentatives. |
| `liberty.licensing` | Vérification de la licence au démarrage et au rechargement. |
| `liberty.crypto` | Chargement et rotation de la clé maître. |
| `uvicorn.access` | Journal d'accès HTTP. |

Une règle d'alerte typique : `liberty.jobs.*` au niveau `ERROR` → réveiller l'astreinte.

---

## Conseils et bonnes pratiques

- **Épingler le scheduler.** Un déploiement multi-replica sans label explicite `scheduler_enabled` est un piège, même avec le verrou consultatif.
- **Ne pas lancer le serveur de dev de la SPA en production.** `./start.sh frontend` (Vite sur 5173) est un outil de développement ; la production sert le `frontend/dist/` construit directement via FastAPI.
- **Monter `liberty-apps` en lecture seule.** Les modifications via l'interface Paramètres l'écrivent à travers le processus framework ; un montage en écriture ailleurs casse l'audit et risque un split-brain entre replicas.
- **Configurer `/api/healthz` comme sonde.** Volontairement légère (pas d'appel base). Pour une sonde plus poussée, `GET /api/license` exerce le chemin d'authentification et la vérification de la licence.
- **Écrire les journaux sur disque avant de les transmettre.** Un transmetteur instable ne doit pas faire perdre d'événements framework — écrire sur stdout, laisser le runtime du conteneur dupliquer vers le disque, puis transmettre.
- **Étager les changements de configuration.** `liberty-admin verify-config` et `liberty-connectors test` sont des verrous CI rapides sur le dépôt `liberty-apps`.

---

## Pour aller plus loin

- [Mise à jour](./upgrading.md) — passer d'une version du framework à la suivante.
- [Configuration → Variables d'environnement](../configuration/environment-variables.md) — le contrat complet d'environnement référencé par chaque forme de déploiement ci-dessus.
- [Authentification → Clé de licence](../build/secure/license-key.md) — `LIBERTY_LICENSE_KEY` dans l'environnement de production.
- [Jobs → Vue d'ensemble](../../nomaflow/overview.md) — topologie du scheduler, verrou consultatif.
