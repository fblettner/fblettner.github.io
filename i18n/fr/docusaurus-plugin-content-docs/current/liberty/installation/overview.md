---
title: Installation — vue d'ensemble
description: "Déployer Liberty Next à partir d'un répertoire release/ prêt à l'emploi — trois variantes Docker (légère SQLite pour l'essai, complète à 5 services pour la production, Docker Swarm) toutes pilotées par les scripts ./install.sh et ./deploy-swarm.sh, ainsi qu'une alternative pipx pour les hôtes sans Docker. L'image se trouve à ghcr.io/fblettner/liberty-next."
keywords: [Liberty Framework, installation, déploiement, serveur, Docker, Docker Compose, Docker Swarm, install.sh, deploy-swarm.sh, backup.sh, pipx, légère, complète, swarm, Traefik, Postgres, pgAdmin, Portainer, ghcr.io]
---

# Installation — vue d'ensemble

Liberty Next est distribué sous forme d'une image OCI publique (`ghcr.io/fblettner/liberty-next`), accompagnée d'un répertoire [`release/`](https://github.com/fblettner/liberty-next/tree/main/release) dans le dépôt, qui rassemble **trois variantes prêtes à l'emploi** et **trois scripts d'aide**. Choisir une variante, lancer une commande, et le tour est joué.

| Variante | Runtime | Services | Cas d'usage |
|---|---|---|---|
| **Légère** | Docker Compose | liberty-next + SQLite (dans un volume) | Essai local, démo mono-utilisateur, évaluation rapide. |
| **Complète** | Docker Compose | liberty-next + PostgreSQL 16 + Traefik + pgAdmin + Portainer | Production / staging sur un hôte unique. |
| **Swarm** | Docker Swarm | les mêmes cinq services, avec des contraintes `deploy.*` et un réseau overlay | Swarm mono ou multi-nœud. |
| **pipx** | Python natif | liberty-next seul (SQLite par défaut, pointable vers toute base) | Hôtes sans Docker, environnements 100 % Python. |

Les quatre **ne s'excluent pas** — il convient de retenir celle qui correspond aux opérations en place.

---

## L'installation en 90 secondes

```bash
git clone https://github.com/fblettner/liberty-next.git
cd liberty-next/release

./install.sh            # interactif — demande légère ou complète
# OU
./install.sh light      # un seul conteneur, SQLite
./install.sh full       # pile de production à 5 services
```

Ce que fait `install.sh` :

| Étape | Détail |
|---|---|
| Génère un `.env` avec des secrets cryptographiquement aléatoires (aucun ne contient `$`, ce qui évite toute substitution Docker Compose). | Au premier lancement uniquement — les exécutions suivantes préservent un `.env` existant. |
| Récupère la ou les images et lance `docker compose up -d` sur la variante choisie. | Idempotent — relancer `install.sh` sur une pile déjà active ne fait que ré-appliquer le fichier compose. |
| Attend jusqu'à 120 s que le healthcheck du conteneur liberty-next (`GET /info`) passe au vert. | En cas d'échec, indique comment consulter les journaux. |
| Affiche le mot de passe `admin` généré ainsi que les URL d'accès à la SPA / pgAdmin / Portainer / au tableau de bord Traefik. | À lire une fois — le mot de passe est également conservé dans `.env` (mode 0600) pour s'y reporter plus tard. |

Pour Docker Swarm, l'équivalent est `./deploy-swarm.sh` (détaillé dans [Docker](./docker.md#swarm)).

---

## Les trois variantes Docker

### Légère — un seul conteneur, SQLite

Contenu :

- Un conteneur (`liberty-next`) sur le port `8000`.
- Base SQLite du framework (authentification + historique d'exécution Nomaflow) persistée sur un volume Docker.
- Fichiers TOML édités par l'opérateur persistés sur un second volume — sauvegardés depuis *Settings → …* dans la SPA ; aucun bind-mount hôte n'est nécessaire.
- **Pas** de Postgres, **pas** de Traefik, **pas** de TLS — uniquement le framework exposé directement sur `:8000`.

À retenir pour :

- Essayer le framework en local ou sur un VPS unique.
- Environnements de démo et d'évaluation.
- Une installation purement connecteurs (les applications sous licence — Nomasx-1 / Nomajde — exigent Postgres, et donc la variante complète).

Volumes :

| Volume | Contenu |
|---|---|
| `liberty-data` | Base SQLite + `auth.toml` (empreintes Argon2 des mots de passe). |
| `liberty-config` | Tous les fichiers TOML édités par l'opérateur (connecteurs / dictionnaire / menus / écrans / graphiques / tableaux de bord). |

### Complète — pile de production derrière Traefik

Cinq services, tous sur le port `80` de l'hôte (ou `443` avec TLS) :

| Service | Chemin | Détail |
|---|---|---|
| **Traefik** | `/traefik` | Reverse proxy + tableau de bord. Authentification basique (par défaut `admin/admin` — **à changer** dans `traefik/dynamic/dynamic.yml`). |
| **liberty-next** | `/` (catchall) | SPA + API + administration. Se connecte au Postgres embarqué pour la base du framework. |
| **Postgres 16** | (interne) | Base du framework (authentification, historique Nomaflow) et emplacement pour héberger les pools client (données Nomasx-1 / Nomajde, etc.). |
| **pgAdmin** | `/pgadmin` | Interface graphique Postgres. |
| **Portainer** | `/portainer` | Interface Docker. |

Volumes :

| Volume | Contenu |
|---|---|
| `liberty-config` | TOML édités par l'opérateur. |
| `pg-data` | Fichiers de la base Postgres. |
| `pg-logs` | Journaux Postgres rotés. |
| `pgadmin-data` | Enregistrements et préférences pgAdmin. |
| `portainer-data` | État Portainer. |
| `traefik-acme` | Stockage des certificats Let's Encrypt (quand le TLS est branché). |

C'est la variante visée par les bundles sous licence (Nomasx-1, Nomajde, NomaUBL) — le Postgres embarqué est celui qu'utilise leur pool `default`. Voir [Déployer les applications préassemblées](./deploy-prebuilt-apps.md).

### Swarm — Docker Swarm, mono ou multi-nœud

Les mêmes cinq services, adaptés au modèle d'exécution Swarm :

- Clés `deploy.*` à la place de `restart: unless-stopped`.
- Réseau overlay (compatible mono ET multi-nœud).
- Traefik utilise `--providers.swarm` (la variante swarm-aware).
- Services à état épinglés à un unique manager via des contraintes de placement.
- liberty-next reste par défaut à `replicas: 1` — ne monter en charge qu'après avoir branché un backplane Socket.IO partagé (adaptateur Redis).

Déploiement / mise à jour / état avec `./deploy-swarm.sh` — `docker stack deploy` ne prend pas l'option `--env-file`, donc le script charge d'abord `.env` dans le shell avant de lancer le déploiement.

---

## La voie pipx — sans aucun Docker

Pour qui ne veut pas de conteneurs (petite installation sur un seul hôte, environnement contraint à Python) :

```bash
pipx install liberty-next
liberty-next             # → API + SPA sur http://localhost:8000
```

pipx place Liberty Next dans son propre venv isolé, ce qui empêche ses dépendances d'entrer en conflit avec le Python système. Les quatre commandes CLI (`liberty-next`, `liberty-admin`, `liberty-license`, `liberty-crypto`) atterrissent dans le PATH. Mises à jour : `pipx upgrade liberty-next`. Voir [Serveur Python](./python-server.md).

Il convient de faire pointer `LIBERTY_DB_URL` vers un Postgres existant (ou de rester sur la SQLite par défaut — `./liberty.db` dans le répertoire de travail). Les TOML de configuration sont lus depuis `./config/<name>.toml` ; définir `LIBERTY_APPS_DIR=/etc/liberty-next/` permet de les conserver à un emplacement stable.

---

## En un coup d'œil

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="io-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#io-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Liberty Next — quatre formes de déploiement</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="220" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="150" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LÉGÈRE</text>
  <text x="150" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./install.sh light</text>
  <line x1="60" y1="148" x2="240" y2="148" stroke="#22c55e" strokeOpacity="0.3"/>
  <text x="150" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">1 conteneur · :8000</text>
  <text x="150" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SQLite (volume)</text>
  <text x="150" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">sans TLS · sans Traefik</text>
  <text x="150" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Essai / démo / évaluation</text>
  <text x="150" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">2 volumes à sauvegarder</text>

  <rect x="272" y="84" width="220" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="382" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPLÈTE</text>
  <text x="382" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./install.sh full</text>
  <line x1="292" y1="148" x2="472" y2="148" stroke="#4a9eff" strokeOpacity="0.3"/>
  <text x="382" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">5 services · :80 (ou :443)</text>
  <text x="382" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Traefik + Postgres 16</text>
  <text x="382" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">pgAdmin · Portainer</text>
  <text x="382" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Production / staging</text>
  <text x="382" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Cible des applications sous licence</text>

  <rect x="504" y="84" width="220" height="240" rx="10" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)"/>
  <text x="614" y="112" fill="#c084fc" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SWARM</text>
  <text x="614" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">./deploy-swarm.sh</text>
  <line x1="524" y1="148" x2="704" y2="148" stroke="#c084fc" strokeOpacity="0.3"/>
  <text x="614" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">5 services · réseau overlay</text>
  <text x="614" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">placement sur le manager</text>
  <text x="614" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">deploy.* update_config</text>
  <text x="614" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Swarm mono ou multi-nœud</text>
  <text x="614" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Mises à jour progressives intégrées</text>

  <rect x="736" y="84" width="224" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="848" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PIPX</text>
  <text x="848" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">pipx install liberty-next</text>
  <line x1="756" y1="148" x2="940" y2="148" stroke="#fb923c" strokeOpacity="0.3"/>
  <text x="848" y="170" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Docker non requis</text>
  <text x="848" y="186" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PATH : liberty-next +</text>
  <text x="848" y="202" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">liberty-admin / -license</text>
  <text x="848" y="232" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Hôtes sans Docker</text>
  <text x="848" y="246" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Environnements 100 % Python</text>
</svg>

---

## Variables d'environnement requises

Deux valeurs sont **obligatoires** quelle que soit la variante — les autres disposent de valeurs par défaut raisonnables.

| Variable | Rôle | Comment la générer |
|---|---|---|
| **`LIBERTY_JWT_SECRET`** | Signe chaque jeton d'accès et de rafraîchissement. Doit rester stable entre les redémarrages — une clé rotée invalide tous les jetons en cours (oblige chaque utilisateur à se reconnecter). | `python -c "import secrets;print(secrets.token_urlsafe(48))"` |
| **`LIBERTY_MASTER_KEY`** | Clé de chiffrement au niveau du champ — chiffre les secrets (mots de passe de pool, jetons d'API) au repos dans les TOML. Doit rester identique entre les redémarrages, sans quoi les valeurs `ENC:` deviennent illisibles. | `python -c "import secrets;print(secrets.token_urlsafe(32))"` |

`install.sh` les génère toutes deux avec `openssl rand` (sans caractère `$`, sans piège lié à la substitution Compose). Avec pipx ou un compose maison, il revient à l'opérateur de les générer.

Variables optionnelles courantes :

| Variable | Valeur par défaut | Détail |
|---|---|---|
| `LIBERTY_IMAGE_TAG` | `latest` | Épingler à un tag de version précis pour la stabilité (`0.2.0`, `edge`, etc.). |
| `LIBERTY_ADMIN_PASSWORD` | (généré + affiché une fois) | Mot de passe d'amorçage pour l'utilisateur `admin` au premier démarrage. |
| `LIBERTY_LICENSE_KEY` | (aucune — mode `restricted`) | JWT RS256 qui déverrouille les connecteurs sous licence (Nomasx-1 / Nomajde / Nomaflow premium). |
| `ANTHROPIC_API_KEY` | (aucune — assistant IA désactivé) | Active le chat de l'assistant IA dans l'application. |
| `LIBERTY_OIDC_ENABLED` | `false` | Passer à `true` et renseigner le fournisseur OIDC pour activer le SSO. |
| `POSTGRES_PASSWORD` | (généré) | Variante complète uniquement — mot de passe du Postgres embarqué. |
| `PGADMIN_PASSWORD` | (généré) | Variante complète uniquement — mot de passe administrateur pgAdmin. |

Référence complète : `release/.env.example`.

:::info[À propos du `$` dans les mots de passe]
Docker Compose applique aussi la substitution `${VAR}` à chaque valeur de `.env` — un `$` littéral dans un mot de passe est absorbé (par exemple `POSTGRES_PASSWORD=foo$bar` devient `foo`, Compose cherchant à étendre `$bar`). Il est recommandé de générer des mots de passe sans `$` (ce que fait `install.sh`), ou bien d'échapper chaque `$` en `$$`.
:::

---

## À lire dans l'ordre

| Étape | Page |
|---|---|
| **0** | Cette vue d'ensemble. |
| **1** | Choisir un chemin : [Docker](./docker.md) (couvre les trois variantes Docker) ou [Serveur Python](./python-server.md) (pipx). |
| **2** | Brancher le TLS et un nom d'hôte lisible : [Traefik](./traefik.md). |
| **3** | Utiliser les outils visuels embarqués : [Portainer](./portainer.md). |
| **4** | Durcissement production — OIDC, rotation JWT, épinglage de l'ordonnanceur : [Production](./production.md). |
| **5** | Déployer NomaUBL / Nomasx-1 / Nomajde par-dessus : [Déployer les applications préassemblées](./deploy-prebuilt-apps.md). |
| **6** | Quand une nouvelle version sort : [Mise à niveau](./upgrading.md). |

---

## Vérification rapide — à quoi ressemble une installation réussie

Après le chemin retenu :

- `curl http://<host>:<port>/info` renvoie une charge JSON avec `version`, `frontend_built` et le décompte des écrans / menus / connecteurs chargés.
- La SPA s'affiche sur `http://<host>:<port>/`.
- Connexion en tant qu'`admin` avec le mot de passe affiché par `install.sh` (ou depuis `LIBERTY_ADMIN_PASSWORD` dans `.env`).
- Le conteneur `liberty-next` apparaît sain dans `docker ps` (le healthcheck embarqué interroge `/info` toutes les 30 s).

Si l'une de ces vérifications échoue, se rendre à la section de dépannage du chemin choisi.

---

## La suite

- [Docker](./docker.md) — les trois variantes Docker en détail, avec le pas-à-pas des scripts d'aide.
- [Serveur Python](./python-server.md) — installation via pipx pour les hôtes sans Docker.
- [Production](./production.md) — TLS, sauvegardes, durcissement.
