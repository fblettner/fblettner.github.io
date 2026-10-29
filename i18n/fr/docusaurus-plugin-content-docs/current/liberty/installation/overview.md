---
title: Installation — vue d'ensemble
description: "Installer Liberty Next : choisir Docker (installation légère ou complète) ou une installation Python, lancer une commande, se connecter, ajouter la licence et les applications sous licence, activer le HTTPS. Toute l'exploitation — état, sauvegarde, mise à jour, retour arrière — passe ensuite par la même commande."
keywords: [Liberty Next, installation, Docker, Docker Compose, pipx, commande liberty, liberty-ops, installation légère, installation complète, Swarm, licence, Nomasx-1, Nomajde]
---

# Installation — vue d'ensemble

Liberty Next est un serveur unique — l'application web, son API et son planificateur de tâches dans un seul processus — accompagné d'une base de données et d'un dossier de fichiers de configuration. Installer, c'est choisir où ce serveur s'exécute ; tout le reste passe ensuite par **une seule commande** : `./liberty` sur un hôte Docker, `liberty-ops` sur une installation Python.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jrn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jrn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jrn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jrn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="14" width="1180" height="140" rx="14" fill="url(#jrn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="30" y="70" width="172" height="64" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="116.0" y="99.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Installer</text>
  <text x="116.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty install full</text>
  <line x1="202" y1="102" x2="224" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="224" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="310.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Se connecter</text>
  <text x="310.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">admin + mot de passe affiché</text>
  <line x1="396" y1="102" x2="418" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="418" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="504.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Licence et applis</text>
  <text x="504.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty apps &lt;wheel&gt;</text>
  <line x1="590" y1="102" x2="612" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="612" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="698.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · HTTPS</text>
  <text x="698.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty ssl letsencrypt …</text>
  <line x1="784" y1="102" x2="806" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="806" y="70" width="172" height="64" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="892.0" y="99.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · Exploiter</text>
  <text x="892.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">status · doctor · backup</text>
  <line x1="978" y1="102" x2="1000" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#jrn-flow)"/>
  <rect x="1000" y="70" width="172" height="64" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="1086.0" y="99.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 · Mettre à jour</text>
  <text x="1086.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">./liberty upgrade</text>
  <text x="30" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Une installation Docker de bout en bout — chaque étape est une commande lancée depuis release/</text>
  <rect x="230" y="185" width="250" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="240" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Administrer → App → Licence</text>
  <text x="240" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">coller la clé une fois connecté</text>
  <line x1="230" y1="202.0" x2="450" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrn-arrow)"/>
  <rect x="780" y="185" width="300" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="790" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Facultatif sur un serveur de test</text>
  <text x="790" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le HTTPS demande l'installation complète</text>
  <line x1="780" y1="202.0" x2="690" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jrn-arrow)"/>
</svg>

---

## Quelle installation choisir ? \{#choose\}

| Besoin | Installation | Page |
|---|---|---|
| Un serveur de production ou de test pour plusieurs utilisateurs | **Docker — installation complète** : Liberty Next, PostgreSQL, Traefik (HTTPS), pgAdmin et Portainer sur un même hôte | [Docker](./docker.md#full) |
| Un essai rapide ou une démonstration sur un poste | **Docker — installation légère** : un conteneur, SQLite | [Docker](./docker.md#light) |
| Un hôte où Docker n'est pas autorisé | **Installation Python** avec pipx, lancée par systemd, sur un PostgreSQL existant | [Serveur Python](./python-server.md) |
| Plusieurs nœuds dans un Docker Swarm | **Swarm** : l'installation complète adaptée à `docker stack deploy` | [Docker](./docker.md#swarm) |

Les applications sous licence (Nomasx-1, Nomajde) et les tâches Nomaflow livrées ont besoin de PostgreSQL : choisir l'installation complète, ou une installation Python avec un PostgreSQL existant.

---

## Installer en trois commandes \{#quickstart\}

Sur un hôte Linux équipé de Docker et du plugin Compose :

```bash
git clone --depth 1 --filter=blob:none --sparse https://github.com/fblettner/liberty-next.git
cd liberty-next && git sparse-checkout set release && cd release
./liberty install full          # ou : ./liberty install light
```

La commande génère les secrets, démarre l'ensemble, attend qu'il réponde et affiche les informations de connexion. Ouvrir `http://<hôte>/` (port `8000` pour l'installation légère), se connecter en **`admin`** avec le mot de passe affiché : le serveur est prêt.

Ensuite, dans cet ordre et seulement si besoin :

1. **Licence** — *Liberty Next → Administrer → App → License* : coller la clé reçue.
2. **Applications sous licence** — `./liberty apps liberty_apps-<version>-py3-none-any.whl` ([Applications sous licence](./deploy-prebuilt-apps.md)).
3. **HTTPS** — `./liberty ssl letsencrypt --domain liberty.example.com --email ops@example.com` ([HTTPS et Traefik](./traefik.md)).

---

## Une seule commande \{#one-command\}

Toute opération sur une installation Docker passe par `release/liberty`, lancée depuis le dossier `release/` :

| Commande | Pour |
|---|---|
| `./liberty install [light\|full]` | Installer (une fois). |
| `./liberty status` | Voir les versions, l'état de santé, les migrations en attente, la dernière mise à jour. |
| `./liberty doctor` | Lister ce qui ne va pas et comment le corriger. |
| `./liberty apps <wheel>` | Ajouter ou actualiser les applications sous licence. |
| `./liberty ssl letsencrypt\|provided\|off` | Activer le HTTPS, changer de mode ou le désactiver. |
| `./liberty backup` / `restore <dossier>` | Sauvegarder et restaurer tout ce que contient l'installation. |
| `./liberty upgrade` / `rollback` | Mettre à jour, avec une sauvegarde préalable ; annuler la dernière mise à jour. |

Une installation Python dispose des mêmes verbes dans `liberty-ops`. La référence complète se trouve sur [Exploitation](./operations.md).

:::warning[Ne jamais lancer `docker compose -f …` à la main]
L'installation enregistre dans `release/.env` les fichiers compose qu'elle utilise (installation, HTTPS, applications sous licence). Un `docker compose -f docker-compose.full.yml up -d` ne cite que le premier fichier : le conteneur redémarre sans les applications sous licence ni le HTTPS, et l'installation paraît vide. Utiliser `./liberty start`, `./liberty upgrade`… qui reprennent toujours les fichiers enregistrés.
:::

---

## Ordre de lecture \{#read-in-order\}

1. [Architecture](./architecture.md) — ce qui s'exécute où, quelles données sont stockées dans quel volume.
2. [Docker](./docker.md) ou [Serveur Python](./python-server.md) — l'installation elle-même.
3. [Applications sous licence](./deploy-prebuilt-apps.md) — la licence, le paquet d'applications, les bases des applications.
4. [HTTPS et Traefik](./traefik.md) — certificats et proxy inverse.
5. [Exploitation](./operations.md) — état, diagnostic, sauvegardes, journaux, dépannage.
6. [Mise à jour et retour arrière](./upgrading.md) — passer à une nouvelle version.
7. [Liste de contrôle de production](./production.md) — ce qu'il faut vérifier avant l'arrivée des utilisateurs.
