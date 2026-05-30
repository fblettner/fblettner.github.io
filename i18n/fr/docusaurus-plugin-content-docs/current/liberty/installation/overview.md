---
title: Installation — vue d'ensemble
description: "Deux chemins d'installation — installation Python depuis les sources (uvicorn sur un hôte Linux) ou pile Docker Compose avec Portainer et Traefik en option. Choisissez-en un ; la suite de la section déroule chaque chemin étape par étape."
keywords: [Liberty Framework, installation, déploiement, serveur, Python, Docker, uvicorn, Portainer, Traefik, reverse proxy]
---

# Installation — vue d'ensemble

Liberty Framework se présente comme un petit processus FastAPI qui sert une SPA React sur un unique port HTTP. Rien d'exotique à installer — Python 3.12, une base de données pour les métadonnées internes du framework, et (en option) un reverse proxy en frontal. L'exécution se fait depuis les sources sur un hôte Linux ou via une pile Docker Compose.

Cette section déroule les deux chemins, plus les briques optionnelles que la plupart des installations de production finissent par ajouter.

---

## Les deux chemins

| Chemin | Quand le choisir | À lire |
|---|---|---|
| **Installation Python depuis les sources** | Environnement de développement. Serveur Linux unique. Vous êtes à l'aise avec systemd et vous voulez le moins de pièces mobiles possible. | [Serveur Python](./python-server.md). |
| **Docker Compose** | Pile multi-services, prise en main facilitée pour l'exploitation. Reproductible entre environnements (dev / recette / prod). | [Docker](./docker.md). |

Les deux chemins donnent exactement le même runtime — même UI, même API REST, même ordonnanceur Nomaflow. Le choix est opérationnel.

Si l'équipe exploite déjà des conteneurs, Docker est le chemin de moindre friction. Pour démarrer à neuf sur une machine Linux toute fraîche avec une préférence pour les processus natifs, l'installation Python + systemd suffit et n'ajoute aucune couche Docker à diagnostiquer.

---

## Ce dont vous avez toujours besoin

Quel que soit le chemin :

| Composant | Pourquoi |
|---|---|
| **Python 3.12** (chemin Python uniquement — Docker l'embarque) | Le runtime du framework. |
| **Node.js ≥ 20 + npm** (chemin Python uniquement — Docker l'embarque) | Construire le bundle React du frontend. |
| **Une base de données** | Le pool interne du framework — authentification, jobs, verrous, historique d'exécution. PostgreSQL est la valeur par défaut ; SQLite convient pour le développement. Oracle est pris en charge quand l'ERP d'un client l'exige. |
| **Le dépôt `liberty-apps`** | Votre configuration : `connectors.toml`, `dictionary.toml`, `screens.toml`, `menus.toml`, `dashboards.toml`, `charts.toml`, `jobs.toml`, ainsi que les plugins Python sous `plugins/`. |
| **Un port HTTP** | Un seul. Le framework sert l'API et la SPA sur le même port. |

---

## Ce que vous pouvez ajouter en option

| Composant | Pourquoi |
|---|---|
| **Reverse proxy** (Traefik / nginx / Caddy) | Terminer le TLS, cacher le framework derrière un nom d'hôte lisible, router plusieurs applications sur le même hôte. Voir [Traefik](./traefik.md) pour la configuration Docker de référence. |
| **Portainer** | Gestion visuelle de la pile Docker — voir l'état, les journaux, redémarrer les services sans taper de commandes `docker compose`. Voir [Portainer](./portainer.md). |
| **Un déploiement multi-réplicas** | Quand un seul réplica ne suffit plus à la charge. Épingler l'ordonnanceur à un unique réplica selon les règles Nomaflow. Voir [Production](./production.md). |
| **Supervision externe** (Prometheus / Grafana / OpenTelemetry) | Quand la page [Supervision](../monitoring/overview.md) intégrée ne suffit plus. |

---

## En un coup d'œil

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="io-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="280" rx="14" fill="url(#io-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Installation Liberty — deux chemins, un même runtime</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="440" height="200" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="60" y="106" fill="#4a9eff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHEMIN 1 · SOURCES PYTHON</text>
  <text x="60" y="130" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">git clone liberty-next + liberty-apps</text>
  <text x="60" y="148" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">python -m venv .venv && pip install -e .</text>
  <text x="60" y="166" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">cd frontend && npm install && npm run build</text>
  <text x="60" y="184" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">liberty-admin init-db</text>
  <text x="60" y="202" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">uvicorn liberty.main:app --port 8000</text>
  <text x="60" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Encapsuler dans une unité systemd pour la prod.</text>
  <text x="60" y="240" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">→ Serveur Python</text>
  <text x="60" y="258" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">→ Durcissement production</text>

  <rect x="500" y="84" width="440" height="200" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)"/>
  <text x="520" y="106" fill="#c084fc" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHEMIN 2 · DOCKER COMPOSE</text>
  <text x="520" y="130" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">git clone liberty-apps</text>
  <text x="520" y="148" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">curl -O docker-compose.yml + .env</text>
  <text x="520" y="166" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">docker compose up -d</text>
  <text x="520" y="184" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">docker compose exec liberty liberty-admin init-db</text>
  <text x="520" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ajoute Postgres, Liberty, Traefik dans une seule pile.</text>
  <text x="520" y="240" fill="#94a3b8" fontSize="10" fontStyle="italic" fontFamily="system-ui, sans-serif">→ Docker · Portainer · Traefik</text>
</svg>

---

## À lire dans l'ordre

| Étape | Page |
|---|---|
| **0** | Cette vue d'ensemble. |
| **1** | Choisir un chemin : [Serveur Python](./python-server.md) ou [Docker](./docker.md). |
| **2** | (Optionnel) Ajouter un reverse proxy et le TLS : [Traefik](./traefik.md). |
| **3** | (Optionnel) Ajouter un gestionnaire Docker visuel : [Portainer](./portainer.md). |
| **4** | Durcissement production (multi-réplicas, journaux, sauvegarde) : [Production](./production.md). |
| **5** | Quand une nouvelle version sort : [Mise à niveau](./upgrading.md). |

---

## Vérification rapide — à quoi ressemble une installation réussie

Après l'un ou l'autre chemin :

- `curl http://<host>:8000/health` renvoie `{"status":"ok"}`.
- La page de connexion s'affiche sur `http://<host>:8000/`.
- Le journal du framework indique `liberty.plugins importable from <path>` (votre dossier `plugins/` a bien été trouvé).
- L'administrateur amorcé par `liberty-admin init-db` peut se connecter.

Si l'une de ces vérifications échoue, se rendre à la section de dépannage du chemin choisi.

---

## La suite

- [Serveur Python](./python-server.md) — le chemin d'installation depuis les sources.
- [Docker](./docker.md) — le chemin Docker Compose.
- [Production](./production.md) — une fois installé, l'exploiter comme en prod.
