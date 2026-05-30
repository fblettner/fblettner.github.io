---
title: Service et journaux
description: "Exploiter NomaUBL depuis l'hôte — statut du wrapper (nomaubl.sh sous Linux/macOS, nomaubl.cmd sous Windows), fichier journal pour le diagnostic en direct, /api/build-info et /api/license pour les contrôles en format machine. Approches d'alerting externe et de transfert de journaux."
keywords: [NomaUBL, statut du service, fichier journal, build-info, license, ordonnanceur, supervision externe, alerting, transfert de journaux, nomaubl.sh, nomaubl.cmd, Windows]
---

# Service et journaux

La surface de supervision côté hôte — ce qu'un ops / SRE consulte quand l'interface web ne suffit plus ou pour raccorder une supervision externe. Couvre la commande `status` du wrapper (qui se comporte de la même manière sous Linux / macOS via `nomaubl.sh` et sous Windows via `nomaubl.cmd`), la structure du fichier journal, les deux endpoints HTTP destinés aux sondes et les approches permettant de pousser des alertes en cas de problème.

---

## `status` — le contrôle de santé rapide

```bash title="Linux / macOS"
./nomaubl.sh status
# NomaUBL [demo] is running (PID 12345)
# NomaUBL [uat]  is running (PID 12346)
# NomaUBL [prod] is running (PID 12347)
```

```cmd title="Windows"
nomaubl.cmd status
REM   [demo]  running  (PID 12345)
REM   [uat]   running  (PID 12346)
REM   [prod]  running  (PID 12347)
```

Sans arguments, le wrapper liste chaque fichier `nomaubl-*.pid` à côté du JAR et affiche l'état en direct de chacun. Avec un nom d'environnement, il ne rend compte que de celui-ci :

```bash title="Linux / macOS"
./nomaubl.sh status prod
# NomaUBL [prod] is running (PID 12347)
```

```cmd title="Windows"
nomaubl.cmd status prod
REM NomaUBL [prod] is running (PID 12347)
```

Le wrapper **nettoie aussi les fichiers PID obsolètes** — les entrées correspondant à des processus qui ne sont plus vivants sont supprimées. Un seul appel `status` se nettoie donc lui-même.

Codes de sortie :

| Code | Signification |
|---|---|
| `0` | Chaque environnement nommé est en marche. |
| `1` | Au moins un environnement est arrêté. |
| `2` | Le fichier PID de l'environnement nommé n'existe pas *(Linux / macOS)*. |

Utile en scripts et en `ExecStartPre` systemd :

```bash title="Linux / macOS"
./nomaubl.sh status prod >/dev/null || { echo "prod is down"; exit 1; }
```

```cmd title="Windows"
nomaubl.cmd status prod >NUL || ( echo prod is down & exit /b 1 )
```

---

## Le fichier journal — `nomaubl-<env>.log`

Chaque environnement écrit son stderr + stdout dans un fichier journal unique à côté du JAR :

```text title="Linux / macOS"
/opt/nomaubl/
├── nomaubl.jar
├── nomaubl.sh
├── nomaubl-demo.log
├── nomaubl-uat.log
└── nomaubl-prod.log
```

```text title="Windows"
C:\nomaubl\
├── nomaubl-fat.jar
├── nomaubl.cmd
├── nomaubl-demo.log
├── nomaubl-uat.log
└── nomaubl-prod.log
```

Le suivre :

```bash title="Linux / macOS"
./nomaubl.sh log demo
# ou directement
tail -f /opt/nomaubl/nomaubl-demo.log
```

```cmd title="Windows"
nomaubl.cmd log demo
REM s'appuie sur PowerShell Get-Content -Wait en interne
```

### Lignes rencontrées fréquemment

| Forme de ligne | Signification |
|---|---|
| `[INFO] Loaded config: /opt/nomaubl/demo/config/config.json` | Service démarré, configuration analysée. |
| `[INFO] Master key file: /opt/nomaubl/demo/.nomaubl-master.key` | Le fichier de clé maîtresse a été trouvé et chargé. |
| `[INFO] Connected to db-nomaubl as nomaubl` | JDBC fonctionne. |
| `[INFO] Schema bootstrap: 23 tables created` | Premier démarrage sur un schéma vide — les tables F564* sont en place. |
| `[INFO] HTTP server listening on :8090` | L'interface web est opérationnelle. |
| `[INFO] Scheduler started — fetchImportInterval=15min fetchStatusInterval=15min fetchAllInterval=0` | Intervalles de l'ordonnanceur en arrière-plan au démarrage. |
| `[INFO] scheduler tick · fetch-import · 0 invoices to import` | Tick de routine de l'ordonnanceur. |
| `[INFO] pa-default API call · import · status 200 · 1.2 s` | Une soumission PA réussie. |
| `[WARN] pa-default API call · import · status 429 · retrying in 30s` | Limitation de débit côté PA ; nouvelle tentative à venir. |
| `[ERROR] Connection refused — jdbc:oracle:thin:...` (ou `jdbc:postgresql://...`) | Base injoignable — diagnostiquer côté réseau / BD. |

Le format est ligne par ligne, préfixé par le niveau. Facile à parcourir avec grep, facile à transférer.

### Flux de diagnostic courants

| Question | Linux / macOS | Windows |
|---|---|---|
| Le dernier tick d'ordonnanceur s'est-il exécuté ? | `grep "scheduler tick" nomaubl-prod.log \| tail -10` | `Select-String -Path nomaubl-prod.log -Pattern "scheduler tick" \| Select-Object -Last 10` |
| Y a-t-il eu des échecs PA récemment ? | `grep "pa-default" nomaubl-prod.log \| grep -v "status 200"` | `Select-String -Path nomaubl-prod.log -Pattern "pa-default" \| Where-Object { $_ -notmatch "status 200" }` |
| Quelle a été la dernière erreur ? | `grep "\[ERROR\]" nomaubl-prod.log \| tail -1` | `Select-String -Path nomaubl-prod.log -Pattern "\[ERROR\]" \| Select-Object -Last 1` |
| Le service a-t-il démarré proprement aujourd'hui ? | `grep -A 5 "HTTP server listening" nomaubl-prod.log \| tail -10` | `Select-String -Path nomaubl-prod.log -Pattern "HTTP server listening" -Context 0,5 \| Select-Object -Last 10` |

### Mode verbeux

Certains modes CLI acceptent `--verbose` pour émettre une ligne par document (une ligne de log par facture). Sur les batchs de nuit lourds, ce mode est **désactivé par défaut** afin de garder le log lisible ; à activer par exécution pour investigation.

---

## Endpoints HTTP — `/api/build-info` et `/api/license`

Les deux endpoints non authentifiés destinés aux sondes machine :

### `/api/build-info`

```bash
curl http://localhost:8090/api/build-info
```

```json
{
  "version": "2026.05.26",
  "buildDate": "2026-05-26T14:33:00Z",
  "buildHash": "a8c4d1f2…"
}
```

| Champ | Ce qu'il indique |
|---|---|
| `version` | Tag de release (correspond au nom du JAR / aux notes de version). |
| `buildDate` | Date de build du JAR. |
| `buildHash` | SHA court Git — utile pour corréler avec un déploiement précis. |

Utile pour :

- **Test rapide post-déploiement** — vérifier que la version correspond à celle déployée.
- **Sonde de vivacité** — un statut non-200 signale un service arrêté.
- **Audit multi-instances** — confirmer que chaque environnement s'exécute dans la version attendue.

### `/api/license`

```bash
curl http://localhost:8090/api/license
```

Réponses d'exemple :

```json
{ "mode": "full", "customer": "ACME Corp", "expiresAt": "2026-12-31" }
```

```json
{ "mode": "restricted", "reason": "License expired on 2026-04-30" }
```

```json
{ "mode": "restricted", "reason": "No license configured" }
```

| Champ | Ce qu'il indique |
|---|---|
| `mode` | `full` (tout fonctionne) ou `restricted` (fonctionnalités limitées sans licence). |
| `customer` | Sujet de la licence (uniquement quand `mode = full`). |
| `expiresAt` | Date d'expiration de la licence. |
| `reason` | Pourquoi la licence n'est pas chargée (uniquement quand `mode = restricted`). |

Utile pour :

- **Contrôle quotidien de licence** — alerter quand `mode` bascule en `restricted` (une licence a expiré ou n'a pas été installée).
- **Validation pré-déploiement** — confirmer que le nouvel environnement dispose de sa licence avant la mise en service.

### Ce que ces endpoints ne sont PAS

| Idée reçue | Réalité |
|---|---|
| `/api/build-info` est un health check. | Il renvoie des métadonnées de build, pas un état de santé. Le code de statut HTTP (200) est le signal de vivacité. |
| `/api/license` est limité en débit. | Non — interroger aussi souvent que la cadence de sonde l'exige. Chaque appel touche un cache en mémoire, pas la base. |
| Ils divulguent des secrets. | Non — le hash de build, le nom du client et la date d'expiration ne sont pas des secrets. Pas de mots de passe, pas de jetons. |
| Ils respectent les permissions. | Non — non authentifiés. À restreindre au reverse proxy si l'installation est exposée publiquement. |

---

## Ordonnanceur — confirmer qu'il avance

L'ordonnanceur en arrière-plan s'exécute **à l'intérieur** du processus `-serve`. Il n'y a ni démon d'ordonnancement séparé ni interface dédiée pour confirmer qu'il est en vie — le fichier journal est la source de vérité.

```bash
grep "scheduler tick" /opt/nomaubl/nomaubl-prod.log | tail -10
```

Si le dernier tick remonte à plus de `fetchImportInterval + fetchStatusInterval + fetchAllInterval` minutes, l'ordonnanceur est **probablement bloqué**. Les correctifs :

| Symptôme | Cause | Correctif |
|---|---|---|
| Aucune ligne `scheduler tick`. | Les trois intervalles sont à `0`. | Définir des intervalles non nuls dans le modèle `global` (`fetchImportInterval`, etc.). |
| Les ticks se déclenchent mais ne font pas avancer les factures. | Le modèle PA (`pa-default`) est injoignable — chaque appel expire. | Tester depuis l'hôte : `curl https://<pa-base-url>/api/login_check`. |
| Les ticks se déclenchent occasionnellement puis s'arrêtent pendant des heures. | La JVM a heurté un OOM et le thread d'ordonnancement est mort sans redémarrage de la JVM. | Rechercher `OutOfMemoryError` dans le log ; augmenter `-Xmx` ; envisager `Restart=on-failure` dans systemd (couvert dans [Service et systemd](../installation/service-and-systemd.md)). |

### Forcer un tick depuis la CLI

Pour investiguer, exécuter le passage manuellement :

```bash
./nomaubl.sh fetch-status prod
# → exécute un passage -fetch-status synchrone ; la sortie va sur stdout
```

`fetch-import` comme `fetch-status` peuvent être lancés à la demande sans risque — ils sont idempotents vis-à-vis de la PA.

---

## Approches de supervision externe

NomaUBL ne propose ni métriques Prometheus ni traces OpenTelemetry. Les trois approches qui couvrent la plupart des installations réelles :

### Approche A — Alerting basé sur les logs

La supervision au plus fort levier. Acheminer le fichier journal vers le stockage central de logs (Loki / ELK / Splunk / Datadog Logs / Cloudwatch), puis construire des alertes sur les motifs de log :

| Motif de log | Alerte |
|---|---|
| `\[ERROR\]` | Paging on-call pour toute ERROR ; throttler à N par heure. |
| `\[WARN\] pa-default .* status 5..` | Échecs côté PA ; pager si persistant au-delà de 5 minutes. |
| `OutOfMemoryError` | Pager immédiatement. |
| Aucune ligne `scheduler tick` depuis plus de 30 min | L'ordonnanceur est mort. |
| `Connection refused.*jdbc:(oracle\|postgresql)` | Base injoignable. |

```yaml
# Exemple de bout de configuration logrotate + filebeat
- type: log
  paths:
    - /opt/nomaubl/nomaubl-*.log
  fields:
    service: nomaubl
    env: prod
```

### Approche B — Polling d'endpoint

Un petit script cron qui interroge les deux endpoints et alerte en cas d'échec :

```bash
#!/usr/bin/env bash
# /usr/local/bin/nomaubl-probe.sh
set -e
for env in demo uat prod; do
  port=$(case "$env" in demo) echo 8090;; uat) echo 8091;; prod) echo 8092;; esac)
  # Liveness
  curl -fsS http://localhost:$port/api/build-info > /dev/null \
    || { echo "[$env] DOWN" | mail -s "NomaUBL $env down" ops@example.com; exit 1; }
  # License
  mode=$(curl -fsS http://localhost:$port/api/license | jq -r '.mode')
  if [ "$mode" != "full" ]; then
    echo "[$env] License mode=$mode" | mail -s "NomaUBL $env license alert" ops@example.com
  fi
done
```

Planifier via un timer systemd / cron (Linux / macOS) ou via le Planificateur de tâches Windows — `*/5 * * * *` (ou une tâche `/SC MINUTE /MO 5`) constitue une cadence raisonnable.

### Approche C — Métriques hôte + JVM

Pour une observabilité plus approfondie :

| Outil | Ce qu'il capture |
|---|---|
| **`node_exporter`** | CPU, mémoire, disque, réseau de l'hôte — chaque processus NomaUBL en marche compte comme un processus Java. |
| **`process_exporter`** | CPU / RSS par processus — suivre chaque `nomaubl-<env>` séparément. |
| **JMX exporter** (Prometheus JVM exporter en agent Java) | Métriques internes à la JVM — heap, GC, nombre de threads. Ajouter `-javaagent:/opt/jmx_prometheus_javaagent.jar=9404:config.yml` à la commande du JAR. |
| **DB exporter** (Oracle exporter, `postgres_exporter`, …) | Métriques côté BD — sessions actives, top SQL, usage des tablespaces. |

Ces quatre éléments ensemble couvrent 95 % de l'observabilité requise par une installation de production. À raccorder à la même stack Prometheus / Grafana déjà exploitée.

---

## Transfert de journaux — garder l'historique hors hôte

Le wrapper écrit tout dans `nomaubl-<env>.log` à côté du JAR. Pour une rétention longue durée et une indexabilité :

| Mise en place | Quoi |
|---|---|
| **Filebeat → Logstash / Loki / Cloudwatch** | L'approche standard. Une ligne par enregistrement JSON — Filebeat lit, transfère, puis la requête s'effectue depuis Kibana / Grafana / Cloudwatch Logs Insights. |
| **Vector** | Alternative plus légère. |
| **Personnalisé — `journalctl` sous systemd** | systemd capture stderr / stdout dans le journal ; `journalctl -u nomaubl@prod` y effectue la recherche. |
| **`logger` pour des pipes ponctuels** | `tail -f nomaubl-prod.log | logger -t nomaubl-prod` envoie tout dans syslog. |

Logrotate (`copytruncate`, voir [Service et systemd](../installation/service-and-systemd.md)) garantit que le fichier ne croît pas sans limite. Rétention typique : 8 semaines de rotation locale + rétention indéfinie dans le stockage central de logs.

---

## Pièges d'exploitation fréquents

| Erreur | Symptôme | Correctif |
|---|---|---|
| Consulter le Tableau de bord technique mais ignorer le fichier journal. | Un blocage d'ordonnanceur apparaît dans les logs des heures avant que le tableau de bord ne reflète « aucune nouvelle facture aujourd'hui ». | Raccorder l'alerting basé sur les logs (Approche A ci-dessus). |
| Interroger `/api/build-info` chaque seconde. | Charge inutile et bruit dans les access logs. | 30 s est amplement suffisant. |
| Traiter le mode `restricted` de `/api/license` comme un échec dur. | Le service continue de servir les fonctionnalités sous licence en mode restreint pour les configurations de période de grâce ; les alarmes réveillent inutilement. | Lire le champ `reason` ; alerter sur `expired` / `revoked` ; tolérer `restricted` uniquement quand c'est attendu. |
| Ignorer `OutOfMemoryError` dans le log. | La JVM continue de servir mais le thread d'ordonnancement est mort — aucun batch ne se déclenche. | Définir `Restart=on-failure` dans systemd ; augmenter `-Xmx`. |
| Logrotate sans `copytruncate`. | La JVM continue d'écrire sur l'inode supprimé — le nouveau fichier journal reste vide. | `copytruncate` dans la config logrotate. |
| Pas de fichier PID → systemd rapporte le service comme mort alors que la JVM est en marche. | systemd tue la JVM au redémarrage suivant. | Toujours passer par `nomaubl.sh start` (qui écrit le fichier PID) ou définir `PIDFile=...` dans l'unité systemd. |

---

## Et ensuite

- [Vue d'ensemble](./overview.md) — quand regarder le Tableau de bord technique vs le log.
- [Application → Tableau de bord technique](../application/tech-dashboard.md) — la vue en direct in-app.
- [Gestion → Journal de traitement](../management/processing-log.md) — trace par document.
- [Installation → Service et systemd](../installation/service-and-systemd.md) — supervision + mise en place de la rotation des logs.
