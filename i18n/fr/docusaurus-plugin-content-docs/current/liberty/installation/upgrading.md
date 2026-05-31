---
title: Mise à jour
description: "Mettre à jour une installation Liberty — sauvegarde, récupération de la nouvelle image, up -d. Épinglage du tag d'image, rolling updates Swarm, rollback."
keywords: [Liberty Framework, mise à jour, version, pull, tag d'image, LIBERTY_IMAGE_TAG, rollback, backup.sh, docker compose pull, docker service update, deploy-swarm.sh, pipx upgrade, test de fumée]
---

# Mise à jour

Une mise à jour Liberty est un simple changement de tag. Chaque mode de déploiement — Light / Full Compose, Docker Swarm, pipx — se résume aux trois mêmes gestes : **prendre un instantané des volumes, récupérer la nouvelle image (ou le wheel), laisser la pile se réconcilier**. Les migrations de schéma sont embarquées dans la nouvelle image ; l'entrypoint les applique au démarrage. Plus de `migrate-db` manuel, plus de checkout du code source, plus de reconstruction.

Cette page couvre le contrat de versionnage, la procédure de mise à jour par mode de déploiement, le test de fumée post-mise à jour et le chemin de rollback.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="upg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#upg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Séquence de mise à jour — identique pour tous les modes de déploiement</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · SAUVEGARDE</text>
  <text x="160" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">./backup.sh — assurance en 5 s</text>

  <rect x="290" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="390" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · PIN + PULL</text>
  <text x="390" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">LIBERTY_IMAGE_TAG + pull</text>

  <rect x="520" y="100" width="200" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="620" y="124" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · UP -d</text>
  <text x="620" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">l'entrypoint exécute init-db</text>

  <rect x="750" y="100" width="200" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="850" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · TEST DE FUMÉE</text>
  <text x="850" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">/info + connexion + pools</text>

  <line x1="260" y1="130" x2="290" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="490" y1="130" x2="520" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="720" y1="130" x2="750" y2="130" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>

  <text x="500" y="200" fill="#94a3b8" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif">Une mise à jour Compose propre représente ~30 s d'indisponibilité. En Swarm rolling = zéro indisponibilité dès que les replicas &gt; 1.</text>
</svg>

---

## Contrat de versionnage

Liberty suit un schéma **proche du semver** :

| Incrément | À quoi s'attendre |
|---|---|
| **Patch** (`0.42.0` → `0.42.1`) | Corrections de bug uniquement. Aucun changement de configuration. Aucune migration de base. |
| **Mineur** (`0.42.x` → `0.43.0`) | Nouvelles fonctionnalités. Configuration rétrocompatible. Migrations de base additives uniquement — nouvelles tables / colonnes du framework ; les lignes existantes restent intactes. Les champs obsolètes émettent un avertissement pendant une mineure. |
| **Majeur** (`0.x` → `1.0`) | Ruptures possibles. Détaillées une par une dans les notes de version ; un guide de migration est publié en parallèle. |

Les notes de version de chaque version se trouvent aux côtés du tag d'image — à lire avant tout passage d'une mineure ou d'une majeure.

---

## Fonctionnement des migrations de base

L'entrypoint du conteneur (et l'unité systemd pipx, si elle est câblée) exécute `liberty-admin init-db` à **chaque démarrage**. Cette commande est :

- **Idempotente.** L'exécuter deux fois ne fait rien la seconde fois.
- **Additive.** Elle crée les nouvelles tables framework apportées par une version plus récente, ajoute les colonnes manquantes et laisse les lignes existantes intactes.
- **Embarquée.** Les deltas de schéma sont livrés à l'intérieur de l'image / du wheel — aucune étape `migrate-db` séparée à lancer, aucun fichier SQL à appliquer, aucun job de migration à planifier.

Récupérer une image plus récente, redémarrer la pile — le schéma suit.

:::info[Aucune étape de migration manuelle]
L'ancienne commande `liberty-admin migrate-db` a disparu. Tout ce qu'elle faisait est désormais intégré au `init-db` exécuté au démarrage.
:::

---

## Épingler le tag d'image en production

Les fichiers compose livrés utilisent par défaut `:latest` pour qu'une installation neuve démarre sur la dernière version. La production doit épingler un tag spécifique dans `.env` afin qu'un `pull` inattendu ne fasse pas avancer la pile vers une nouvelle mineure sans prévenir :

```bash title=".env"
LIBERTY_IMAGE_TAG=0.2.0
```

Avancer en modifiant la valeur puis en relançant `pull && up -d`. Revenir en arrière en repositionnant le tag précédent et en faisant la même chose.

| Tag dans `.env` | Comportement |
|---|---|
| `latest` | Chaque `pull` peut basculer vers l'image publiée la plus récente — pratique en pré-production, risqué en production. |
| `0.2.0` (épinglé) | `pull` est sans effet dès que le cache local possède le tag. Les mises à jour ne surviennent que sur édition de `.env`. |

---

## Toujours sauvegarder en premier

`backup.sh` produit un instantané tar de chaque volume nommé Liberty dans un répertoire horodaté. L'opération prend quelques secondes et fait la différence entre une mise à jour ratée et une mise à jour ratée réversible.

```bash
cd /opt/liberty-next/release
./backup.sh                              # → ./backups/YYYY-MM-DD_HHMMSS/
./backup.sh /mnt/nas/liberty             # vers un emplacement hors hôte
./backup.sh --layout full                # uniquement les volumes du déploiement Full
```

Détails complets sur le format de sauvegarde, les commandes de restauration et une entrée cron hebdomadaire : [Docker → Backups](./docker.md#backups).

---

## Procédure de mise à jour — Light / Full (Compose)

Identique pour les deux modes. Deux commandes équivalentes ; au choix.

### Option A — relancer `./install.sh <layout>` (recommandé)

```bash
cd /opt/liberty-next/release

./backup.sh             # 1 — instantané (systématique)
./install.sh full       # 2 — détecte le .env existant, ignore la génération de secrets,
                        #     récupère les nouvelles images, lance `docker compose up -d`,
                        #     attend l'état healthy, affiche le résumé
```

`install.sh` est **idempotent à la relance**. Quand `.env` existe déjà, il :

- Journalise `.env already exists — keeping it` et **ignore la génération des secrets** (aucun risque de régénérer `LIBERTY_MASTER_KEY` et de perdre les valeurs chiffrées).
- Lance `docker compose pull` puis `docker compose up -d` sur la chaîne `COMPOSE_FILE` définie dans `.env`.
- Attend que le healthcheck de `liberty-next` (`/info`) passe à healthy.
- Affiche le résumé — la ligne *Sign in to Liberty as* indique désormais *password unchanged from the original install* (le mot de passe admin du premier démarrage était à usage unique — l'identifiant existant continue de fonctionner). Le mot de passe pgAdmin est réimprimé depuis `.env` à titre de rappel.

Conserver le même mode de déploiement que celui utilisé à l'installation — en passer un autre (`./install.sh light` sur une installation full ou l'inverse) démarre le mauvais fichier compose.

### Option B — `docker compose` nu (effet identique)

```bash
cd /opt/liberty-next/release

./backup.sh             # 1 — instantané
docker compose pull     # 2 — récupération de la nouvelle image (COMPOSE_FILE sélectionne les bons fichiers)
docker compose up -d    # 3 — recréation des conteneurs ; l'entrypoint exécute init-db

# 4 — test de fumée
curl -s http://127.0.0.1:8000/info
```

Effet identique, sortie plus discrète, pas d'impression de résumé. À privilégier en CI ou dès que les commodités interactives d'`install.sh` deviennent gênantes.

:::info[Jamais de `-f` après l'installation]
`COMPOSE_FILE` dans `.env` porte la chaîne complète (`docker-compose.full.yml:docker-compose.tls-letsencrypt.yml:docker-compose.apps.yml` après `install.sh --ssl letsencrypt --apps ...`). Passer manuellement `-f docker-compose.full.yml` surcharge cette chaîne et écarte silencieusement les overlays TLS + apps — le prochain `up -d` les supprime. S'en tenir aux commandes nues `docker compose pull` / `up -d`, ou utiliser `./install.sh`. Voir [Docker → Discipline COMPOSE_FILE](./docker.md#compose-file-discipline).
:::

Ce que fait `up -d` : Compose détecte que le digest de l'image a changé, recrée le conteneur `liberty-next` sur place, remonte les mêmes volumes nommés, redémarre. Le nouvel entrypoint exécute `liberty-admin init-db`, puis se met à servir. Indisponibilité totale : ~30 s sur un hôte tiède.

Les autres services de la pile (Postgres, pgAdmin, Portainer, Traefik) ne sont pas recréés tant que leur propre tag d'image n'a pas bougé — `pull` agit par service et `up -d` ne recrée que ceux dont la spécification a changé.

### Ce qui survit à la mise à niveau

Tout ce que l'opérateur a touché. Compose recrée le conteneur `liberty-next` ; les volumes (et le bind mount des apps quand l'overlay apps est actif) se rattachent intacts au nouveau conteneur.

| État | Se trouve dans | Préservé ? |
|---|---|---|
| `.env` (master key, secret JWT, mots de passe Postgres / pgAdmin) | `release/.env` sur l'hôte | Intact. |
| Base framework (authentification, historique d'exécutions Nomaflow, données des apps sous licence) | Volume `pg-data` | Postgres n'est pas recréé tant que son tag d'image n'a pas bougé. |
| TOMLs édités par l'opérateur (`app.toml` + `connectors.toml` + `screens.toml` + `menus.toml` + dashboards / charts / dictionary) | Volume `liberty-config` | Monté sur `/app/config` dans le nouveau conteneur. |
| Clé de licence, clé d'API Anthropic, secret client OIDC | `app.toml` (valeurs chiffrées `ENC:` avec la master key d'installation) | Se trouve dans `liberty-config`. Le nouveau conteneur déchiffre avec la `LIBERTY_MASTER_KEY` inchangée du `.env`. |
| Certificat Let's Encrypt + état ACME | Volume `traefik-acme` | Pas de nouveau cycle ACME ; les rate limits LE ne sont pas consommés. |
| Enregistrements de serveurs pgAdmin + préférences | Volume `pgadmin-data` | Préservé. |
| État Portainer | Volume `portainer-data` | Préservé. |
| Bundle d'apps sous licence (TOMLs Nomasx-1 / Nomajde + code des plugins) | Bind mount `./apps/` sur l'hôte (défini par `APPS_HOST_PATH` dans `.env`) | Le mount se rattache au nouveau conteneur sur `/apps:ro`. |
| `LIBERTY_ADMIN_PASSWORD` du premier démarrage | Affiché une seule fois à l'installation initiale, jamais écrit dans `.env` | L'utilisateur admin existant conserve son mot de passe. Perdu ? `docker exec liberty-next liberty-admin reset-admin-password`. |

### `:latest` vs tag épinglé

| Ligne `.env` | Ce que `pull` récupère |
|---|---|
| `# LIBERTY_IMAGE_TAG=latest` *(commenté — défaut)* | Compose utilise `:latest` par défaut. Chaque `pull` peut basculer vers l'image publiée la plus récente — acceptable en pré-production, risqué en production. |
| `LIBERTY_IMAGE_TAG=7.0.21` *(épinglé)* | `pull` est sans effet dès que le cache local possède le tag. Les mises à jour ne surviennent que sur incrément de la valeur + `pull && up -d`. |

Pour épingler : décommenter la ligne dans `.env`, fixer la version, lancer `./install.sh full` (ou `docker compose pull && up -d`).

### Quand la wheel d'apps sous licence change aussi

`./install.sh full` (ou `docker compose pull`) ne rafraîchit que l'image `liberty-next` — pas le bundle d'apps présent sur le bind mount `./apps/`. Pour une **mise à jour de la wheel liberty-apps** (nouvelle version Nomasx-1 / Nomajde), passer par l'installeur dédié :

```bash
./install-apps.sh /path/to/new-liberty_apps-X.Y.Z.whl
docker compose restart liberty-next       # prend en compte les TOMLs rafraîchis
```

L'installeur de wheel est idempotent — les TOMLs édités par l'opérateur dans `./apps/config/` sont préservés sauf passage de `--force-config`. Voir [Deploy prebuilt apps → Updating the apps later](./deploy-prebuilt-apps.md#updating-the-apps-later).

La plupart des mises à jour framework ne concernent que `liberty-next` — aucune wheel d'apps à rafraîchir.

---

## Procédure de mise à jour — Docker Swarm

Deux approches. À choisir.

### Option A — rolling update sur le seul service liberty-next

```bash
./backup.sh
docker service update --image ghcr.io/fblettner/liberty-next:0.2.0 liberty_liberty-next
```

Swarm fait rouler le service selon son `update_config` (`order: start-first`, `parallelism: 1`). La nouvelle tâche démarre, passe les health checks, puis l'ancienne tâche est arrêtée :

| Replicas `liberty-next` | Indisponibilité |
|---|---|
| `> 1` | **Aucune.** Swarm démarre une nouvelle tâche, attend qu'elle soit saine, puis draine l'ancienne. |
| `1` (par défaut) | Brève fenêtre (~10 s) le temps que la nouvelle tâche chauffe — `start-first` la minimise sans pouvoir l'éliminer. |

Les autres services de la pile (`pg`, `pgadmin`, `portainer`, `traefik`) ne sont pas touchés.

### Option B — bumper `.env` + relancer le script de déploiement

```bash
./backup.sh
# éditer .env : LIBERTY_IMAGE_TAG=0.2.0
./deploy-swarm.sh
```

`docker stack deploy` réconcilie la spécification complète — chaque service dont l'image ou l'environnement a changé est roulé. Relancer `./deploy-swarm.sh` EST le mécanisme de mise à jour en Swarm ; c'est le même script qui a servi à installer.

Utiliser l'option B quand plusieurs tags de services sont bumpés en même temps ou quand l'environnement d'un autre service a été modifié.

### Rollback en Swarm

Swarm conserve la spécification précédente de chaque service :

```bash
docker service rollback liberty_liberty-next
```

Le rollback inverse le dernier `service update` (ou l'effet du dernier `stack deploy` sur ce service). Si la nouvelle image a appliqué un delta de schéma et que des écritures y ont eu lieu, restaurer depuis l'instantané `backup.sh` **avant** de revenir en arrière — voir [Rollback](#rollback) ci-dessous.

---

## Procédure de mise à jour — pipx

```bash
./backup.sh                              # si un script de sauvegarde est conservé à côté (recommandé)
pipx upgrade liberty-next
sudo systemctl restart liberty-next      # si exécuté sous systemd
```

`pipx upgrade` remplace le wheel dans le venv isolé. Le service redémarré exécute `liberty-admin init-db` au démarrage — même synchronisation idempotente du schéma que le chemin conteneur.

Pour la définition de l'unité systemd, l'`EnvironmentFile` et la vérification post-installation : [Python server → Run under systemd](./python-server.md).

---

## Liste de vérification du test de fumée

Cinq minutes, à chaque mise à jour.

| Contrôle | Comment | À confirmer |
|---|---|---|
| **Bascule de version** | `curl http://<host>/info` | `"version"` correspond au tag qui vient d'être tiré. |
| **Connexion** | Se connecter en tant qu'`admin`. | L'authentification locale fonctionne toujours. |
| **Chargement d'écran** | Ouvrir au moins un écran d'app. | La grille se remplit, pas de 500. |
| **Pools connectés** | *Settings → Pools* | Chaque pool s'affiche comme *connected*. |
| **Scheduler à jour** | *Settings → Jobs* — choisir un job planifié. | Sa dernière exécution est `succeeded` (ou pending — pas `failed`). |
| **Licence acceptée** *(quand `LIBERTY_LICENSE_KEY` est défini)* | *Settings → License* | Affiche *accepted* avec le bon nom de client. |

Un contrôle en échec doit stopper le déploiement et déclencher la procédure de rollback.

---

## Rollback

La même simplicité s'applique à l'envers : repointer sur le tag précédent, redémarrer. La nuance se trouve dans la base — les deltas de schéma additifs ne sont pas annulés automatiquement. En pratique :

| Nouveau schéma… | Marche à suivre |
|---|---|
| **Purement additif** (nouvelles tables / colonnes — le cas courant) | Revenir à l'ancienne image. L'ancien framework ignore les colonnes supplémentaires et continue de fonctionner. Aucune restauration BD nécessaire. |
| **Non additif** (renommage de colonne, contrainte ajoutée, valeur migrée) | Restaurer le volume depuis l'instantané `backup.sh` **avant** de revenir à l'ancienne image. Les notes de version signalent chaque migration non additive. |

### Light / Full (Compose)

```bash
# éditer .env : LIBERTY_IMAGE_TAG=0.1.0    (le tag précédent)
docker compose pull                       # COMPOSE_FILE sélectionne les bons fichiers
docker compose up -d
```

Si le schéma a avancé et que les données doivent aussi revenir en arrière, restaurer d'abord le volume concerné depuis `./backups/<timestamp>/` — voir [Docker → Backups](./docker.md#backups) pour la commande de restauration par volume.

### Swarm

```bash
docker service rollback liberty_liberty-next
```

Même mise en garde : si le schéma a divergé, restaurer le volume `pg-data` (après `./deploy-swarm.sh --rm`) avant de revenir en arrière sur le service, puis redéployer.

### pipx

```bash
pipx install liberty-next==0.1.0 --force
sudo systemctl restart liberty-next
```

---

## Conseils

- **Étager la mise à jour.** Exécuter le nouveau tag sur une copie de production pendant une journée avant de basculer en prod. Le coût de prolonger un déploiement défectueux est largement supérieur à celui d'un redémarrage supplémentaire.
- **Lire les notes de version.** La plupart des mises à jour passent inaperçues — `pull && up -d` puis le test de fumée valide. Les rares exceptions sont signalées explicitement. Deux minutes de lecture évitent une heure de débogage.
- **Éviter de sauter plusieurs mineures d'un coup quand c'est possible.** Passer `0.40 → 0.43` peut enchaîner des dépréciations disparues en chemin. Aller version par version garde les avertissements gérables.
- **Épingler en production.** `:latest` convient pour la pré-production ; la production doit épingler `LIBERTY_IMAGE_TAG` afin qu'un `pull` de routine ne surprenne pas avec une nouvelle mineure.
- **Surveiller les journaux après redémarrage.** Une ligne `WARN` sur un champ obsolète annonce que la prochaine mineure cassera — corriger tout de suite, pas plus tard.

---

## Pour aller plus loin

- [Docker → Backups](./docker.md#backups) — le format d'instantané, les commandes de restauration et l'entrée cron hebdomadaire référencés ci-dessus.
- [Python server](./python-server.md) — la recette pipx + systemd sur laquelle la mise à jour atterrit.
- [Production](./production.md) — durcissement, OIDC, épinglage du scheduler — la forme de déploiement dans laquelle les mises à jour atterrissent.
