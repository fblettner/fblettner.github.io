---
title: Endpoints de santé
description: "Les deux endpoints d'état du framework lisibles par les machines — /health pour la vivacité et /info pour l'introspection runtime. À utiliser dans les sondes de load balancer, les orchestrateurs de conteneurs et la supervision externe."
keywords: [Liberty Framework, santé, healthz, info, sonde de vivacité, sonde de disponibilité, load balancer, Kubernetes, Prometheus]
---

# Endpoints de santé

La page Supervision couvre la vue runtime lisible par un humain. Pour les sondes automatisées — load balancers, Kubernetes, healthchecks Docker, supervision externe — Liberty propose deux endpoints HTTP sans authentification.

| Endpoint | Rôle | Renvoie |
|---|---|---|
| **`GET /health`** | Sonde de vivacité — le processus tourne. | `{ "status": "ok", "version": "<version>" }` |
| **`GET /info`** | Introspection runtime — quelle configuration est chargée. | Un objet JSON plus volumineux avec les connecteurs, les pools, les entrées du dictionnaire, les écrans, les menus, les graphiques, les tableaux de bord, le backend d'authentification, l'état IA, le mode de licence. |

Les deux sont **non authentifiés** — ils sont conçus pour être interrogés par l'infrastructure, pas par les utilisateurs. La charge utile de `/info` ne diffuse aucun secret (ni mot de passe, ni jeton, ni clé de signature JWT) — uniquement des compteurs structurels et des drapeaux de configuration.

---

## `/health` — vivacité

L'endpoint le plus simple. Renvoie 200 et un corps JSON quand le processus est démarré et sert les requêtes.

```bash
curl http://localhost:8000/health
```

```json
{ "status": "ok", "version": "2026.06.1" }
```

| Champ | Ce qu'il porte |
|---|---|
| `status` | Toujours `"ok"` quand l'endpoint répond. Le code HTTP (200) est le vrai signal — si le processus est arrêté, on obtient une erreur de connexion ou un 5xx, pas `"status": "down"`. |
| `version` | La chaîne de version du framework (équivalent à `pip show liberty-next` ou à l'étiquette de l'image Docker). |

### À utiliser pour

| Sonde | Configuration |
|---|---|
| **Healthcheck Docker** | `HEALTHCHECK CMD curl -fsS http://localhost:8000/health \|\| exit 1` |
| **Sonde de vivacité Kubernetes** | `livenessProbe: { httpGet: { path: /health, port: 8000 } }` |
| **AWS ALB / GCP LB / nginx** | Pointer le contrôle de santé sur `/health`. Statut attendu par défaut : 200. |
| **Supervision externe (UptimeRobot, Datadog Synthetic)** | Idem — appeler l'endpoint `/health`, alerter sur tout statut différent de 200. |

### Cadence d'interrogation

| Où | Intervalle conseillé |
|---|---|
| Vivacité Docker / Kubernetes | Toutes les 10 à 30 secondes. Trop fréquent consomme du CPU ; trop espacé retarde la reprise. |
| Load balancer cloud | Toutes les 10 secondes en règle générale. |
| Supervision externe | Toutes les 30 à 60 secondes. |

L'endpoint est peu coûteux (pas d'appel BDD) — une interrogation à haute fréquence ne pose pas de problème, elle est juste inutile.

---

## `/info` — introspection runtime

Une charge utile plus volumineuse, avec tout ce que le framework sait de sa propre configuration. Utile pour les tableaux de bord, les tests rapides, les audits.

```bash
curl http://localhost:8000/info | jq
```

Exemple de réponse :

```json
{
  "name": "Liberty",
  "version": "2026.06.1",
  "connectors_loaded": 4,
  "connectors": ["default", "crm", "reporting", "jdedwards"],
  "pools": ["default", "crm_pool", "reporting_pool", "jde_pool"],
  "dictionary": {
    "entries": 412,
    "default_language": "en"
  },
  "menus": {
    "apps": ["crm", "reporting"]
  },
  "screens": {
    "apps": ["crm", "reporting"],
    "total": 47
  },
  "charts": {"total": 12},
  "dashboards": {"total": 5},
  "auth": {
    "backend": "db",
    "pool": "default",
    "oidc_enabled": true
  },
  "ai": {
    "enabled": true,
    "available": true,
    "model": "claude-opus-4-7"
  },
  "crypto": {"configured": true},
  "license": {"mode": "full"},
  "frontend": "/app/frontend/dist"
}
```

### Sens de chaque champ

| Champ | Ce qu'il indique |
|---|---|
| `name`, `version` | Identité du framework. |
| `connectors_loaded`, `connectors` | Nombre et liste des connecteurs chargés. En baisse → soit une erreur de configuration, soit un connecteur sous licence qui a été ignoré (voir `license.mode`). |
| `pools` | Les pools SQL gérés par le framework. |
| `dictionary.entries` | Total des entrées du dictionnaire (communes + par connecteur). À contrôler sur une installation neuve : doit correspondre à ce que vous avez commité. |
| `dictionary.default_language` | La langue de repli du dictionnaire quand une requête n'exprime aucune préférence linguistique. |
| `menus.apps` | Applications dotées d'un menu (= visibles dans le sélecteur d'applications quand `show_in_switcher` est actif). |
| `screens.apps`, `screens.total` | Couverture par application et nombre total d'écrans. |
| `charts.total`, `dashboards.total` | Compteurs. |
| `auth.backend` | `"toml"` ou `"db"`. |
| `auth.pool` | (backend `db` uniquement) Le nom du pool qu'utilise le magasin d'authentification. |
| `auth.toml` | (backend `toml` uniquement) Chemin du fichier d'authentification sur disque. |
| `auth.oidc_enabled` | Indique si la connexion OIDC est câblée. |
| `ai.enabled` / `ai.available` / `ai.model` | Si l'assistant IA est activé, si le fournisseur configuré répond, et l'identifiant du modèle. |
| `crypto.configured` | Indique si la clé maîtresse est renseignée (true = les valeurs `ENC:` peuvent être déchiffrées). |
| `license.mode` | `"full"` (connecteurs sous licence chargés) ou `"restricted"` (sans licence — seul le framework ouvert fonctionne). |
| `frontend` | Chemin du répertoire de build React. |

### À utiliser pour

| Schéma | Exemple |
|---|---|
| **Test rapide post-déploiement** | Récupérer `/info` après un déploiement ; vérifier que la version correspond à ce qui a été déployé, que le compte `connectors_loaded` correspond à ce que définit votre dépôt d'apps, et que `crypto.configured = true`. |
| **Supervision de licence** | Alerter quand `license.mode` bascule sur `"restricted"` — une licence a expiré ou n'a pas été installée. |
| **Tableau de disponibilité IA** | Suivre `ai.available` — si la valeur passe à false sans raison, le LLM amont est injoignable. |
| **Détection de dérive de configuration** | Capturer `/info` quotidiennement ; comparer avec la capture précédente pour détecter les changements inattendus. |

### À NE PAS utiliser pour

- **Les métriques de performance** — `/info` est une capture de configuration, pas un endpoint de métriques. Pour la latence et le débit, câbler un APM.
- **L'état par utilisateur** — aucune donnée utilisateur dans la charge utile, par conception.

---

## Câblage vers Kubernetes

Une spécification de pod minimale avec les deux sondes :

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: liberty
spec:
  replicas: 1
  selector:
    matchLabels: { app: liberty }
  template:
    metadata:
      labels: { app: liberty }
    spec:
      containers:
        - name: liberty
          image: ghcr.io/fblettner/liberty-next:2026.06.1
          ports:
            - containerPort: 8000
          env:
            - { name: LIBERTY_APPS_DIR,    value: /apps/config }
            - { name: LIBERTY_MASTER_KEY,  valueFrom: { secretKeyRef: { name: liberty-secrets, key: master-key } } }
            - { name: LIBERTY_JWT_SECRET,  valueFrom: { secretKeyRef: { name: liberty-secrets, key: jwt-secret } } }
            - { name: DATABASE_URL,        valueFrom: { secretKeyRef: { name: liberty-secrets, key: database-url } } }
          volumeMounts:
            - { name: apps, mountPath: /apps, readOnly: true }
          # Liveness — restart the pod if /health fails for too long
          livenessProbe:
            httpGet:    { path: /health, port: 8000 }
            initialDelaySeconds: 30   # give the framework time to bootstrap
            periodSeconds: 15
            timeoutSeconds: 3
            failureThreshold: 3
          # Readiness — keep the pod out of the service until it's healthy
          readinessProbe:
            httpGet:    { path: /health, port: 8000 }
            initialDelaySeconds: 10
            periodSeconds: 5
            timeoutSeconds: 2
            failureThreshold: 2
      volumes:
        - name: apps
          persistentVolumeClaim: { claimName: liberty-apps-pvc }
```

Liberty propose un unique endpoint `/health` qui sert à la fois la vivacité et la disponibilité — le framework tourne (et sert les requêtes) ou il ne tourne pas. Pour un contrôle de disponibilité plus strict (par exemple « chaque pool est connecté, chaque configuration est chargée »), analyser `/info` et conditionner sur `connectors_loaded > 0` et `crypto.configured = true`.

---

## Supervision externe \{#external-monitoring\}

Pour des métriques complètes, Liberty n'expose pas en standard un endpoint Prometheus `/metrics`. Les schémas d'intégration :

### Schéma A — Métriques au niveau du processus via un sidecar

Lancer un sidecar qui collecte les métriques de processus ou de conteneur (CPU, RAM, réseau) — `node_exporter` pour le bare metal, `cAdvisor` pour Docker, `kubelet` pour Kubernetes. Le processus Liberty apparaît comme un conteneur ; vous obtenez son utilisation des ressources sans que le framework ait à exposer quoi que ce soit.

### Schéma B — Métriques dérivées des journaux

Les journaux structurés de Liberty couvrent la plupart des signaux applicatifs — chemins de requête, latences (quand DEBUG est activé), résultats d'exécution des jobs, erreurs de connecteur. Router les journaux vers Loki / ELK / Datadog Logs et bâtir des alertes sur les motifs de journal :

```
ERROR · liberty.jobs · run_a8c4d failed         → page on-call
WARN · liberty.connectors · pool default overflow → capacity alert
```

C'est la voie sur laquelle la plupart des installations finissent — tirer parti de ce qui est déjà dans les journaux plutôt qu'ajouter un endpoint de métriques.

### Schéma C — Exportateur Prometheus sur mesure

Pour les installations qui ont besoin d'un vrai scraping Prometheus, exposer un petit endpoint `/metrics` via un plugin Python ou un sidecar qui interroge `/info` et ré-émet les compteurs pertinents (connecteurs chargés, taille des pools, mode de licence) sous forme de gauges Prometheus. ~30 lignes de code ; non fourni avec le framework aujourd'hui.

### Schéma D — APM (Datadog APM, New Relic, OpenTelemetry)

Pour les histogrammes de latence par requête et le chronométrage par requête, l'intégration FastAPI standard :

```bash
pip install datadog-api-client  # or opentelemetry-instrumentation-fastapi
```

Puis câbler le middleware dans `app.toml` via un hook de plugin. Liberty ne fournit pas d'intégration APM intégrée — l'écosystème FastAPI couvre ce besoin.

---

## Ce que `/health` et `/info` NE sont PAS

| Idée reçue | Réalité |
|---|---|
| `/health` fait un contrôle approfondi (BDD joignable, IA disponible). | Non — il renvoie 200 dès que le processus est démarré. Pour des contrôles plus poussés, analyser `/info` ou écrire un endpoint de sonde sur mesure. |
| `/info` diffuse des secrets. | Non — par conception, ni mot de passe, ni jeton, ni clé de signature. Inspecter les sources en cas de doute ; la liste des champs ci-dessus est exhaustive. |
| `/health` est limité en débit. | Non — interroger à la cadence requise par votre sonde. |
| Les endpoints respectent les permissions. | Non — ils sont sans authentification, accessibles à tout client qui peut joindre le port HTTP du framework. Restreindre via un pare-feu ou un reverse proxy si nécessaire (par exemple, n'autoriser que le LB et la supervision à joindre le port). |

---

## Pièges courants

| Erreur | Symptôme | Correction |
|---|---|---|
| Intervalle de sonde plus court que le temps d'amorçage. | Le pod redémarre en boucle — l'orchestrateur le tue avant la fin du bootstrap. | Régler `initialDelaySeconds` à au moins 30 secondes. |
| Framework exposé publiquement avec `/info` joignable. | N'importe qui sur Internet peut lire votre inventaire de configuration. | Restreindre au niveau du reverse proxy (renvoyer 403 sur `/info`) si ce n'est pas intentionnellement public. |
| La sonde attend une forme de corps précise. | La forme de réponse Liberty change entre versions — les alertes sur le contenu cassent à la mise à niveau. | S'appuyer uniquement sur le code HTTP pour la vivacité. |
| Confondre `license.mode = "restricted"` avec une erreur. | Le framework fonctionne parfaitement — seuls les connecteurs sous licence sont ignorés. | Traiter `"restricted"` comme une information ; n'alerter que si vous attendiez `"full"`. |

---

## La suite

- [Vue d'ensemble](./overview.md) — quand utiliser la page Supervision plutôt que la supervision externe.
- [Tableau de bord](./dashboard.md) — la vue lisible par un humain.
- [Installation → Production](../installation/production.md) — câbler les sondes dans votre installation de production.
