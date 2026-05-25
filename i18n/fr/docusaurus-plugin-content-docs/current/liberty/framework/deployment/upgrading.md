---
title: Mise à jour
description: "Comment passer une installation Liberty d'une version du framework à la suivante : arrêter le service, récupérer le nouveau code, rafraîchir les dépendances Python, construire le frontend, appliquer les migrations de base, faire le test de fumée puis redémarrer. Attentes de compatibilité entre liberty-next et liberty-apps."
keywords: [Liberty Framework, mise à jour, version, migration, schéma de base, pip install, build, test de fumée, rollback, compatibilité]
---

# Mise à jour

Une mise à jour du framework consiste à remplacer le checkout `liberty-next` par un tag plus récent puis à relancer le bootstrap. La configuration dans `liberty-apps` reste intacte — le contrat est que **le framework s'adapte au dépôt apps, jamais l'inverse**. Les nouveaux champs arrivent avec des valeurs par défaut ; les champs obsolètes continuent de fonctionner pendant une version mineure avec un avertissement dans les journaux.

Cette page couvre la procédure de mise à jour, le contrat de compatibilité, la liste de vérification du test de fumée et le chemin de rollback.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="upg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#upg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Séquence de mise à jour — identique pour tous les modes (systemd, conteneur, k8s)</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="160" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="140" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · ARRÊT</text>
  <text x="140" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">vider les jobs en cours</text>

  <rect x="240" y="100" width="160" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="320" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · RÉCUPÉRATION DU CODE</text>
  <text x="320" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">git fetch + checkout tag</text>

  <rect x="420" y="100" width="160" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="500" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · DÉPENDANCES + BUILD</text>
  <text x="500" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">pip + npm</text>

  <rect x="600" y="100" width="160" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="680" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · MIGRATION</text>
  <text x="680" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">deltas du schéma BD</text>

  <rect x="780" y="100" width="160" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="860" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · DÉMARRAGE + FUMÉE</text>
  <text x="860" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">verify-config + connexion</text>

  <line x1="220" y1="130" x2="240" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="400" y1="130" x2="420" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="580" y1="130" x2="600" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="760" y1="130" x2="780" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>

  <text x="500" y="200" fill="#94a3b8" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">Une mise à jour propre sur une installation mono-hôte prend ~3 minutes.</text>
</svg>

---

## Contrat de versionnage

Le framework suit un schéma **proche du semver** :

| Incrément | Compatibilité |
|---|---|
| **Patch** (`0.42.0` → `0.42.1`) | Corrections de bug uniquement. Pas de changement de configuration. Pas de migration de base. |
| **Mineur** (`0.42.x` → `0.43.0`) | Nouvelles fonctionnalités. Configuration rétrocompatible. Peut inclure des migrations additives (nouvelles tables / colonnes). Les champs obsolètes loggent un avertissement mais continuent de fonctionner. |
| **Majeur** (`0.x` → `1.0`) | Possibles ruptures. Les notes de version les détaillent une par une ; un guide de migration est publié en parallèle. |

Le dépôt `liberty-apps` est **versionné indépendamment**. La plupart des installations figent les deux — `liberty-next@0.42.1` + `liberty-apps@2026.05.20` — et les mettent à jour à leur propre rythme.

| Sens de compatibilité | Garantie |
|---|---|
| **Nouveau framework, ancienne configuration apps** | Toujours opérationnel. Les clés de configuration obsolètes sont tolérées jusqu'à la prochaine mineure ; le log avertit. |
| **Ancien framework, nouvelle configuration apps** | Pas garanti. Un nouveau champ ajouté à un modèle TOML fait échouer la validation Pydantic sur un ancien framework. |

La règle : **mettre à jour le framework en premier**, puis mettre à jour la configuration apps.

---

## Procédure de mise à jour — systemd

```bash
# 1 — arrêter le service (laisser le scheduler vider les jobs en cours)
sudo systemctl stop liberty-next

# 2 — récupérer le nouveau code
cd /opt/liberty-next
sudo -u liberty git fetch --tags
sudo -u liberty git checkout v0.43.0

# 3 — rafraîchir les dépendances Python et reconstruire le frontend
sudo -u liberty .venv/bin/pip install -e ".[dev]"
sudo -u liberty bash -c "cd frontend && npm ci && npm run build"

# 4 — appliquer les migrations de base
sudo -u liberty .venv/bin/liberty-admin migrate-db

# 5 — vérifier et démarrer
sudo -u liberty .venv/bin/liberty-admin verify-config
sudo systemctl start liberty-next
sudo systemctl status liberty-next
curl -s http://127.0.0.1:8000/api/healthz
```

`migrate-db` est relançable sans risque — l'exécuter deux fois ne fait rien la seconde fois. La commande affiche une ligne par delta appliqué :

```text
applied: 0042_add_ly2_ai_conversations.sql
applied: 0043_add_lock_metadata_columns.sql
2 migrations applied, schema is now at version 0043
```

La vérification finale (`curl /api/healthz`) est le feu vert pour considérer la mise à jour terminée ; le test de fumée ci-dessous couvre les contrôles plus poussés.

---

## Procédure de mise à jour — conteneur

```bash
# Construire la nouvelle image
podman build -t liberty-next:0.43.0 -f Containerfile .

# Migrer la BD dans un conteneur ponctuel (le conteneur en service continue de répondre)
podman run --rm \
  --env-file /etc/liberty/secrets.env \
  -e LIBERTY_APPS_DIR=/apps/config \
  -v /opt/liberty-apps:/apps:ro,Z \
  liberty-next:0.43.0 \
  liberty-admin migrate-db

# Basculer le conteneur en service
podman stop liberty
podman rm liberty
podman run -d --name liberty \
  -p 8000:8000 \
  -v /opt/liberty-apps:/apps:ro,Z \
  --env-file /etc/liberty/secrets.env \
  -e LIBERTY_APPS_DIR=/apps/config \
  liberty-next:0.43.0
```

Pour un déploiement sans coupure, lancer deux conteneurs derrière un proxy et les vider à tour de rôle — couvert dans [Mise en production](./running-production.md).

---

## Procédure de mise à jour — Kubernetes

Le flux standard `kubectl set image` :

```bash
# 1 — appliquer la migration comme un Job ponctuel
kubectl apply -f manifests/migrate-job-0.43.0.yaml
kubectl wait --for=condition=complete --timeout=300s job/liberty-migrate-0.43.0

# 2 — rolling update du Deployment
kubectl set image deployment/liberty-next liberty=registry.example.com/liberty-next:0.43.0
kubectl rollout status deployment/liberty-next
```

Le Job de migration exécute `liberty-admin migrate-db` puis sort — le rolling update du Deployment ne démarre qu'une fois ce Job terminé. Les pods sont remplacés un à un ; les readiness probes sur `/api/healthz` garantissent que chaque nouveau pod est prêt avant que l'ancien suivant ne soit terminé.

Pour l'épinglage du scheduler (voir [Mise en production](./running-production.md#multi-replica-considerations)), s'assurer que l'ancien pod du replica scheduler est terminé avant que le scheduler du nouveau pod ne démarre — généralement en marquant le pod avec `scheduler=true` et en faisant tourner ce seul replica en dernier.

---

## Liste de vérification du test de fumée

À exécuter après chaque mise à jour — cinq minutes bien dépensées avant de déclarer terminé.

| Contrôle | Comment | À confirmer |
|---|---|---|
| **Santé** | `curl http://${HOST}:${PORT}/api/healthz` | `{"ok": true, "version": "<nouvelle>"}` — la version correspond au tag. |
| **Authentification** | Se connecter avec l'utilisateur administrateur. | La connexion locale fonctionne toujours. |
| **OIDC** *(si activé)* | Se connecter via SSO. | L'aller-retour avec l'IdP et le retour fonctionnent. |
| **Chargement de l'interface Paramètres** | Ouvrir `/settings`. | Chaque onglet s'affiche, aucune erreur de validation Pydantic dans le log. |
| **Connecteurs connectés** | *Paramètres → Pools* affiche chaque pool comme *connected*. | Connectivité BD intacte. |
| **Lecture témoin** | Ouvrir un écran d'une app critique. | La grille se remplit sans 500. |
| **Écriture témoin** | Modifier et enregistrer une ligne sur un écran sans impact production. | L'aller-retour d'enregistrement réussit. |
| **Catalogue des jobs** | *Paramètres → Jobs* liste tous les jobs. | Aucune entrée « échec de chargement ». |
| **Dernière exécution cron** | L'exécution la plus récente d'un job planifié est *succeeded*. | Le scheduler a repris après le redémarrage. |
| **Licence** | *Paramètres → Licence* affiche *accepted* avec le bon nom de client. | JWT de licence vérifié par le nouveau framework. |
| **Assistant IA** *(si activé)* | Ouvrir `/chat`, envoyer une requête triviale. | La clé d'API se résout, le modèle répond. |

Un contrôle en échec doit stopper le déploiement et déclencher la procédure de rollback.

---

## Rollback

Le rollback du framework est l'inverse de la mise à jour : checkout du tag précédent, réinstallation des dépendances, redémarrage. La subtilité se trouve dans la base : les migrations appliquées ne sont pas annulées automatiquement. Deux options :

| Option | Quand l'utiliser |
|---|---|
| **Rétrograder le framework et laisser le schéma en avant** | Quand le nouveau schéma est purement additif (nouvelles colonnes / tables). L'ancien framework ignore les extras et continue de fonctionner. C'est le cas le plus courant. |
| **Rétrograder le framework et annuler la migration** | Quand une migration a changé un comportement ou supprimé quelque chose. Chaque migration livre une commande sœur `--rollback` — `liberty-admin migrate-db rollback 0043` l'annule. |

Les notes de version signalent explicitement les migrations non additives.

```bash
# Rollback rapide — cas d'un schéma additif
sudo systemctl stop liberty-next
cd /opt/liberty-next
sudo -u liberty git checkout v0.42.1     # tag précédent
sudo -u liberty .venv/bin/pip install -e ".[dev]"
sudo -u liberty bash -c "cd frontend && npm ci && npm run build"
sudo systemctl start liberty-next
```

Pour les installations conteneur / Kubernetes, `podman run` ou `kubectl set image` avec le tag précédent fait la même chose. Garder une image épinglée à la version précédente dans le registre rend le rollback aussi simple qu'une ligne de commande.

---

## Personnalisations client et mises à jour

Quand l'installation exécute des apps fournies par l'éditeur (NomaUBL, NomaSX-1, NomaJDE…), le dépôt apps porte les TOML de l'éditeur aux côtés des personnalisations propres au client. La disposition recommandée pour survivre aux mises à jour éditeur :

```text
liberty-apps/config/
├── connectors.toml            ← géré par l'éditeur, remplacé à chaque mise à jour
├── connectors-customer.toml   ← ajouts / surcharges client — jamais touchés par les mises à jour
├── screens.toml               ← géré par l'éditeur
├── screens-customer.toml      ← surcharges client
├── ...
```

Le framework charge `<name>.toml` d'abord, puis fusionne chaque `<name>-*.toml` par-dessus. Les surcharges prennent le dessus en cas de collision de clés ; la configuration éditeur fournit tout le reste.

Une mise à jour d'app éditeur devient alors :

1. Réimporter le zip d'app exporté par l'éditeur via *Paramètres → Apps → Importer*.
2. Le framework remplace les fichiers éditeur ; les `*-customer.toml` restent intacts.
3. Lancer le test de fumée — la personnalisation doit continuer de s'appliquer.

---

## Conseils et bonnes pratiques

- **Étager la mise à jour.** Faire tourner le nouveau framework contre une copie de production pendant une journée ; le coût de prolonger un déploiement défectueux est bien supérieur à celui d'un redémarrage supplémentaire.
- **Surveiller les journaux après le redémarrage.** Une ligne `WARN` sur un champ obsolète annonce que la prochaine mineure cassera — corriger tout de suite, pas plus tard.
- **Lire les notes de version.** La plupart des mises à jour passent inaperçues ; les rares exceptions sont signalées. Deux minutes de lecture évitent une heure de débogage.
- **Sauvegarder avant `migrate-db`.** Même une migration additive comporte un risque ; un `pg_dump` avant le changement de schéma est une assurance de cinq secondes.
- **Éviter de sauter plusieurs mineures d'un coup quand c'est possible.** Passer `0.40 → 0.43` peut faire disparaître un champ obsolète retiré en `0.42` ; aller version par version garde les avertissements gérables.
- **Faire le rolling-update un replica à la fois.** Même avec des replicas sans état, deux redémarrages simultanés créent une brève fenêtre sans endpoint Socket.IO — le tableau de bord en direct se casse pour les utilisateurs.

---

## Pour aller plus loin

- [Mise en production](./running-production.md) — la forme de déploiement dans laquelle les mises à jour atterrissent.
- [Configuration → Rechargement à chaud](../configuration/hot-reload.md) — ce qui se recharge et ce qui demande un redémarrage (pertinent quand on modifie `app.toml` en cours de mise à jour).
- [Apps et plugins → Apps](../apps/overview.md) — packager les personnalisations pour survivre aux mises à jour éditeur.
