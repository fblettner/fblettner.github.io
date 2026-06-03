---
title: Supervision du service
description: "Exécuter NomaUBL comme service permanent sous Linux/macOS ou Windows — nomaubl.sh ou nomaubl.cmd pour start/stop/status, une unité systemd (Linux) ou un service Windows via NSSM (Windows) pour le redémarrage automatique au boot, et un reverse proxy nginx optionnel en façade pour TLS et un nom d'hôte lisible."
keywords: [NomaUBL, service, systemd, nomaubl.sh, nomaubl.cmd, service Windows, NSSM, démarrage automatique, nginx, reverse proxy, TLS, nom d'hôte]
---

# Supervision du service

NomaUBL s'exécute comme un processus Java permanent par environnement. Le **wrapper** — `nomaubl.sh` sous Linux / macOS, `nomaubl.cmd` sous Windows — couvre les opérations manuelles de start / stop / status ; une petite **unité systemd** (Linux) ou un **service Windows** (Windows) l'enveloppe pour le démarrage automatique au boot et la supervision ; une couche **nginx / Traefik** optionnelle ajoute TLS et un nom d'hôte lisible.

Cette page parcourt chaque couche — commencer par le wrapper, décider s'il faut une supervision au niveau du système d'exploitation, décider s'il faut un reverse proxy.

---

## Couche 1 — le wrapper manuellement

Après [configuration](./configure.md), démarrer le service. Les deux wrappers proposent les mêmes sous-commandes ; seule la shell hôte change.

```bash title="Linux / macOS"
cd /opt/nomaubl
./nomaubl.sh start demo
# Starting NomaUBL [demo] (port=8090)...
# NomaUBL [demo] started (PID 12345)
#   URL: http://localhost:8090/
#   Log: /opt/nomaubl/nomaubl-demo.log
```

```cmd title="Windows"
cd C:\nomaubl
nomaubl.cmd start demo
REM Starting NomaUBL [demo] (port=8090)...
REM NomaUBL [demo] started (PID 12345)
REM   URL: http://localhost:8090/
REM   Log: C:\nomaubl\nomaubl-demo.log
```

Le wrapper :

1. Résout la configuration depuis `<script_dir>/demo/config/config.json`.
2. Lance le JAR en arrière-plan — `nohup … java … &` sous Linux/macOS, `start /B javaw …` sous Windows (le lanceur sans console `javaw` survit à la fermeture de la fenêtre cmd).
3. Écrit le PID dans `nomaubl-demo.pid` à côté du JAR.
4. Redirige stdout et stderr vers `nomaubl-demo.log`.

Vérifier :

```bash title="Linux / macOS"
./nomaubl.sh status
# NomaUBL [demo] is running (PID 12345)

curl http://localhost:8090/api/build-info
# {"version":"2026.05.26","buildDate":"2026-05-26T14:33:00Z", ...}
```

```cmd title="Windows"
nomaubl.cmd status
REM NomaUBL [demo] is running (PID 12345)

curl http://localhost:8090/api/build-info
```

Le jeu complet des commandes de cycle de vie (identique sur les deux wrappers, remplacer `./nomaubl.sh` par `nomaubl.cmd` sous Windows) :

| Commande | Effet |
|---|---|
| **`<wrapper> start <env> [port]`** | Lance le JAR en arrière-plan. Port par défaut `8090`. Refuse de démarrer si le fichier PID pointe vers un processus vivant. |
| **`<wrapper> stop <env>`** | Arrête le processus — `SIGTERM` + 10 s de délai + `SIGKILL` sous Linux ; `taskkill /F /T /PID …` sous Windows. Nettoie le fichier PID. |
| **`<wrapper> restart <env> [port]`** | `stop` puis `start`. |
| **`<wrapper> status [env]`** | Avec un nom d'environnement, indique en marche / arrêté pour celui-ci. Sans, liste chaque `nomaubl-*.pid` et affiche l'état par environnement. Élimine les fichiers PID obsolètes. |
| **`<wrapper> log <env>`** | Suit le fichier journal — `tail -f` sous Linux, `Get-Content -Wait` (via PowerShell) sous Windows. |
| **`<wrapper> upgrade <env> [newJar]`** | Mise à niveau en une commande. Voir [Mise à niveau](./upgrade.md). |

Pour le quotidien opérationnel, le wrapper suffit. La couche de supervision au niveau du système d'exploitation ci-dessous ajoute le démarrage **automatique** au boot et le redémarrage sur crash.

### Réglage JVM — `JAVA_OPTS` *(2026.06.02)* \{#java-opts\}

Les deux wrappers exposent une variable **`JAVA_OPTS`** en tête de fichier. Son contenu est transmis à chaque appel `java -jar` — `start`, `process`, `upgrade`, `fetch-*`, `extract`, `install`. Modifier le fichier une fois ; chaque appel ultérieur du wrapper la reprend.

```bash title="nomaubl.sh — en-tête du fichier"
# Options JVM transmises à chaque appel java. Défaut : vide.
JAVA_OPTS=""
```

```cmd title="nomaubl.cmd — en-tête du fichier"
:: Options JVM transmises à chaque appel java. Défaut : vide.
set "JAVA_OPTS="
```

L'usage le plus courant est d'épingler la **clé maîtresse de chiffrement** à un emplacement fixe en dehors du profil utilisateur — le même chemin sur chaque hôte pour que les valeurs de configuration chiffrées restent lisibles quel que soit le compte de service qui exécute la JVM :

```bash
JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"
```

Autres cas fréquents :

| Option | Usage |
|---|---|
| `-Xmx8g` | Augmenter le tas JVM au-delà du défaut pour les gros batchs. |
| `-Djava.io.tmpdir=/var/tmp/nomaubl` | Déporter le répertoire temporaire hors de `/tmp` quand la pression mémoire augmente. |
| `-Dfile.encoding=UTF-8` | Forcer UTF-8 sur les plateformes où le défaut JVM est autre. |

Référence complète + intégration systemd / NSSM : [Command Line → `JAVA_OPTS`](../management/command-line.md).

---

## Couche 2 — Unité systemd (Linux)

Sous Linux, le pattern standard est une unité systemd par environnement. Le wrapper gère le start/stop ; systemd gère la supervision.

### Fichier de service

Créer `/etc/systemd/system/nomaubl@.service` (unité de template — `@` devient le nom d'environnement) :

```ini
[Unit]
Description=NomaUBL — environment %i
After=network-online.target
Wants=network-online.target
# Wait for the database if it runs on the same host:
# After=oracle-listener.service   # or postgresql.service

[Service]
Type=forking
User=nomaubl
Group=nomaubl
WorkingDirectory=/opt/nomaubl
PIDFile=/opt/nomaubl/nomaubl-%i.pid

# Start / stop via the wrapper
ExecStart=/opt/nomaubl/nomaubl.sh start %i
ExecStop=/opt/nomaubl/nomaubl.sh stop %i

# Restart on failure (not on clean exit)
Restart=on-failure
RestartSec=10

# Bigger limits for batch processing
LimitNOFILE=65536

# Options JVM — reprises par le wrapper via JAVA_OPTS et transmises à chaque
# appel java (start, process, upgrade, fetch-*, …). L'usage le plus courant
# est d'épingler la clé maîtresse de chiffrement à un emplacement fixe.
# Voir « Réglage JVM — JAVA_OPTS » ci-dessus pour la liste complète.
Environment="JAVA_OPTS=-Dnomaubl.master.key.file=/etc/nomaubl/master.key"

# Read the master key from a protected env file if you prefer env-var to file
EnvironmentFile=-/etc/nomaubl/master.env

[Install]
WantedBy=multi-user.target
```

| Détail | Pourquoi |
|---|---|
| **`Type=forking`** | Le wrapper lance le JAR en arrière-plan puis sort. systemd suit le PID du JAR via `PIDFile`. |
| **`User=nomaubl`** | S'exécuter sous l'utilisateur de service dédié — jamais root. |
| **`PIDFile`** | Permet à systemd de suivre le bon processus à travers les redémarrages. Correspond à la convention de nommage du wrapper (`nomaubl-<env>.pid`). |
| **`Restart=on-failure`** | Si la JVM sort avec un statut non nul, systemd redémarre après `RestartSec=10`. Une sortie propre (ex. `nomaubl.sh stop`) ne déclenche pas de redémarrage. |
| **`EnvironmentFile=-/etc/nomaubl/master.env`** | Optionnel. Fournit `NOMAUBL_MASTER_KEY` depuis un fichier d'environnement protégé (`0600`, possédé par `nomaubl`) au lieu d'un fichier de clé sur disque. Le préfixe `-` rend le fichier optionnel. |

### Activer + démarrer

```bash
sudo systemctl daemon-reload
sudo systemctl enable nomaubl@demo.service
sudo systemctl enable nomaubl@uat.service
sudo systemctl enable nomaubl@prod.service

sudo systemctl start nomaubl@demo
sudo systemctl status nomaubl@demo
```

Le pattern d'unité de template signifie qu'un seul fichier de service couvre chaque environnement. Ajouter un environnement, `systemctl enable nomaubl@<env>` et c'est terminé.

### Lire le log

systemd capture stderr et stdout (la redirection du wrapper vers le fichier journal continue de fonctionner). Trois façons de lire :

| Source | Commande |
|---|---|
| Le fichier journal du wrapper (la source canonique). | `tail -f /opt/nomaubl/nomaubl-demo.log` ou `./nomaubl.sh log demo`. |
| Journal systemd (reflète ce qui était sur stderr au moment du fork). | `journalctl -u nomaubl@demo -f` |
| Les deux — utile lors de l'investigation d'un crash. | Ouvrir les deux en panneaux côte à côte. |

Le fichier journal du wrapper est en **append-only** — la rotation n'est pas automatique. Mettre en place logrotate :

```
# /etc/logrotate.d/nomaubl
/opt/nomaubl/nomaubl-*.log {
    weekly
    rotate 8
    compress
    delaycompress
    missingok
    notifempty
    copytruncate
}
```

`copytruncate` est nécessaire car la JVM garde le fichier journal ouvert — une vraie rotation perdrait la référence d'inode.

---

## Couche 2 alt — Démarrage automatique sous Windows

Sous Windows, `nomaubl.cmd start` lance le serveur via `javaw` (le lanceur Java sans console), de sorte que la JVM continue de s'exécuter après la fermeture de la fenêtre cmd. Cela couvre le démarrage *manuel* ; pour le *démarrage automatique au boot* et le *redémarrage sur crash*, deux approches sont disponibles — à choisir selon les préférences de l'équipe d'exploitation.

### Approche A — Planificateur de tâches Windows déclenchant le wrapper

L'option la plus simple : enregistrer une tâche planifiée qui exécute `nomaubl.cmd start <env>` au démarrage. Aucun outil tiers requis.

```cmd
schtasks /Create /TN "NomaUBL-demo" ^
  /TR "C:\nomaubl\nomaubl.cmd start demo" ^
  /SC ONSTART ^
  /RU "nomaubl" ^
  /RP * ^
  /RL HIGHEST
```

| Option | Rôle |
|---|---|
| **`/SC ONSTART`** | Déclenchement au boot. |
| **`/RU nomaubl /RP *`** | Exécution sous le compte de service dédié `nomaubl` ; le mot de passe est demandé (utiliser `/RP <password>` pour un déploiement non interactif). |
| **`/RL HIGHEST`** | Requis pour que la tâche démarre avant la connexion utilisateur. |

Ce que cette approche apporte : démarrage automatique au boot, visibilité complète via le Planificateur de tâches. Ce qu'elle n'apporte pas : **le redémarrage sur crash**. Si la JVM sort de manière inattendue, la tâche ne fait rien. Pour cela, recourir à l'Approche B.

### Approche B — Enregistrer le JAR comme service Windows via NSSM

[NSSM](https://nssm.cc) (le Non-Sucking Service Manager) enveloppe un exécutable arbitraire en service Windows avec la sémantique de redémarrage sur crash :

```cmd
nssm install NomaUBL-demo "C:\Program Files\Java\jdk-17\bin\java.exe" ^
  -jar "C:\nomaubl\nomaubl-fat.jar" ^
  -serve "C:\nomaubl\demo\config\config.json" 8090
nssm set NomaUBL-demo AppDirectory     "C:\nomaubl"
nssm set NomaUBL-demo AppStdout        "C:\nomaubl\nomaubl-demo.log"
nssm set NomaUBL-demo AppStderr        "C:\nomaubl\nomaubl-demo.log"
nssm set NomaUBL-demo Start            SERVICE_AUTO_START
nssm set NomaUBL-demo AppExit Default  Restart
nssm set NomaUBL-demo ObjectName       ".\nomaubl" "<password>"

nssm start NomaUBL-demo
```

| Réglage | Pourquoi |
|---|---|
| **`AppExit Default Restart`** | NSSM redémarre le processus en cas de code de sortie non nul. |
| **`ObjectName`** | Exécution sous le compte de service dédié, pas LocalSystem. |
| **`AppDirectory`** | Le fichier PID du wrapper se trouve ici — à conserver cohérent pour que `nomaubl.cmd status` puisse toujours le lire. |

Les commandes `nomaubl.cmd status` / `log` / `stop` du wrapper restent utilisables depuis une console — NSSM et le wrapper partagent la même convention de fichier PID. `nomaubl.cmd stop` tue la JVM ; NSSM la redémarre ensuite (si `AppExit Default Restart` est défini). Pour un arrêt **propre**, préférer `net stop NomaUBL-demo`.

Pour plusieurs environnements, enregistrer un service par environnement : `NomaUBL-demo`, `NomaUBL-uat`, `NomaUBL-prod`. Le champ `Start` peut valoir `SERVICE_AUTO_START` pour prod et `SERVICE_DEMAND_START` pour les autres si tous les environnements ne doivent pas démarrer au boot.

### Lire le log sous Windows

| Source | Commande |
|---|---|
| Le fichier journal du wrapper (la source canonique). | `nomaubl.cmd log demo` ou `Get-Content -Wait C:\nomaubl\nomaubl-demo.log`. |
| Capture stderr NSSM (si NSSM est configuré). | Même fichier quand `AppStderr` pointe dessus. |
| Journal d'événements Windows (événements de start/stop du service NSSM). | Observateur d'événements → Journaux Windows → Application, filtrer sur la source `NomaUBL-demo`. |

La rotation des logs n'est pas intégrée. Soit la pratiquer manuellement (`logrotate` via WSL / Cygwin, une tâche planifiée qui renomme le fichier), soit utiliser la rotation intégrée de NSSM :

```cmd
nssm set NomaUBL-demo AppRotateFiles 1
nssm set NomaUBL-demo AppRotateOnline 1
nssm set NomaUBL-demo AppRotateBytes 104857600    REM 100 MB
```

---

## Couche 3 — Reverse proxy (optionnel)

Pour un déploiement exposé en production, placer NomaUBL derrière un reverse proxy. Les bénéfices :

| Bénéfice | Ce qu'il apporte |
|---|---|
| **Terminaison TLS** | NomaUBL reste en HTTP (port 8090) derrière le proxy ; le proxy sert HTTPS sur 443. |
| **Nom d'hôte lisible** | `nomaubl.example.com` au lieu de `host:8090`. |
| **Restriction par IP source** | Mettre les opérateurs en liste blanche par IP sans modifier la configuration NomaUBL. |
| **Routage par chemin** | Héberger plusieurs environnements derrière le même hôte — `/demo/`, `/uat/`, `/prod/`. |
| **Journalisation des requêtes** | nginx / Traefik écrivent des logs d'accès standard ; centralisation aisée. |

### nginx — un environnement derrière un nom d'hôte

```nginx
# /etc/nginx/sites-available/nomaubl.conf
server {
    listen 443 ssl http2;
    server_name nomaubl.example.com;

    ssl_certificate     /etc/letsencrypt/live/nomaubl.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nomaubl.example.com/privkey.pem;
    # Generated by Let's Encrypt / certbot

    client_max_body_size 64M;
    proxy_read_timeout   300s;
    proxy_send_timeout   300s;

    location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name nomaubl.example.com;
    return 301 https://$server_name$request_uri;
}
```

| Réglage | Pourquoi |
|---|---|
| **`client_max_body_size 64M`** | Les charges de factures UBL et les uploads de gros spools XML en ont besoin. La valeur par défaut de 1M est très en deçà. |
| **`proxy_read_timeout 300s`** | Les opérations batch longues (gros `-fetch-all`, grosses transformations UBL) ont besoin d'un timeout de lecture étendu. |
| **En-têtes `X-Forwarded-*`** | NomaUBL les lit pour la piste d'audit — il journalise l'IP cliente réelle au lieu de la loopback du proxy. |

Obtenir le certificat depuis Let's Encrypt :

```bash
sudo certbot --nginx -d nomaubl.example.com --email ops@example.com --agree-tos
```

### Plusieurs environnements derrière un seul nom d'hôte

Pour les installations qui veulent `https://nomaubl.example.com/uat/` et `https://nomaubl.example.com/prod/` (un seul hôte, plusieurs chemins) :

```nginx
server {
    listen 443 ssl http2;
    server_name nomaubl.example.com;
    # ... TLS as above ...

    location /demo/ {
        rewrite ^/demo/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8090;
        # ... proxy_set_header as above ...
    }
    location /uat/ {
        rewrite ^/uat/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8091;
    }
    location /prod/ {
        rewrite ^/prod/(.*)$ /$1 break;
        proxy_pass http://127.0.0.1:8092;
    }
}
```

Pour TLS par environnement (chaque environnement sur son propre nom d'hôte), dupliquer le bloc `server {}` par environnement — ce pattern est plus propre.

### Traefik / Caddy / Apache

Les mêmes patterns proxy + TLS + per-path fonctionnent avec n'importe quel reverse proxy — choisir celui que l'équipe d'exploitation utilise déjà. Les spécificités du proxy sortent du cadre de cette page ; les besoins côté NomaUBL sont : backend HTTP seul sur le port configuré, en-têtes `X-Forwarded-*` transmis, timeouts généreux et taille de corps suffisante.

---

## Pièges de service fréquents

| Erreur | Symptôme | Correctif |
|---|---|---|
| L'unité systemd s'exécute en `root`. | Les écritures du JAR (logs, snapshots) appartiennent à root ; le `nomaubl.sh start` manuel suivant échoue. | `User=nomaubl` dans l'unité ; chown des fichiers existants. |
| Le chemin `PIDFile` ne correspond pas à celui du wrapper. | systemd indique `Active: inactive (dead)` alors que la JVM s'exécute. | Le wrapper écrit `nomaubl-<env>.pid` à côté du JAR. Définir `PIDFile=/opt/nomaubl/nomaubl-%i.pid`. |
| `Type=simple` au lieu de `Type=forking`. | systemd tue la JVM immédiatement car il voit le wrapper sortir. | Le wrapper met la JVM en arrière-plan via `nohup` + `&`, donc `Type=forking` est correct. |
| Plusieurs unités d'environnement avec des ports qui se chevauchent. | Le second démarrage échoue — le port est pris. | Allouer des ports consécutifs par environnement. |
| Fichier journal qui croît sans limite. | Le disque se remplit après des semaines d'exploitation. | Mettre en place logrotate avec `copytruncate`. |
| Reverse proxy `client_max_body_size 1M` (le défaut). | Les gros uploads UBL renvoient `413 Request Entity Too Large`. | Augmenter à `64M` (ou plus selon les batchs). |
| `X-Forwarded-Proto` non envoyé par le proxy. | L'interface web émet des liens HTTP derrière un reverse proxy HTTPS. | Ajouter `proxy_set_header X-Forwarded-Proto $scheme;`. |

---

## Quand NE PAS s'embêter avec systemd / reverse proxy

| Scénario | Sauter |
|---|---|
| Shell de dev sur un portable. | Les deux. Un `nomaubl.sh start demo` manuel suffit. |
| Installation intranet avec un seul environnement. | Le reverse proxy. L'unité systemd manuelle reste utile pour le démarrage automatique. |
| En façade derrière un load balancer cloud (AWS ALB, GCP LB). | Le reverse proxy. Le LB cloud assure le travail TLS + nom d'hôte. systemd reste recommandé pour la supervision. |

Pour tout le reste (multi-environnement, exposé en production), les deux couches méritent leur place.

---

## Et ensuite

- [Mise à niveau](./upgrade.md) — à la sortie d'une nouvelle version, déposer le nouveau JAR et lancer `<wrapper> upgrade <env>`.
- [Supervision → Vue d'ensemble](../monitoring/overview.md) — quoi surveiller une fois en service.
- [Gestion → Ligne de commande](../management/command-line.md) — chaque mode CLI en détail.
