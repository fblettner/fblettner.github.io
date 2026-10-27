---
title: Mise à jour et retour arrière
description: "Mettre à jour Liberty Next en une commande : ./liberty upgrade (Docker) ou liberty-ops upgrade (Python) contrôle l'installation, prend une sauvegarde, installe la nouvelle version et les applications, applique les migrations de schéma et enregistre un rapport ; rollback l'annule. Mises à jour Swarm et versions."
keywords: [Liberty Next, mise à jour, retour arrière, liberty upgrade, liberty rollback, liberty-ops upgrade, migrations, liberty-admin migrate, rapport de mise à jour, Paramètres History Upgrades, LIBERTY_IMAGE_TAG, LIBERTY_AUTO_MIGRATE]
---

# Mise à jour et retour arrière

Une mise à jour tient en une commande. Elle ne démarre jamais sans une sauvegarde récente, garde de quoi revenir en arrière et laisse un rapport consultable dans l'application.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="10" y="14" width="1180" height="140" rx="14" fill="url(#upg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="30" y="44" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">./liberty upgrade — ce que fait une seule commande</text>
  <rect x="30" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="116.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · Contrôle</text>
  <text x="116.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">doctor (indicatif)</text>
  <line x1="202" y1="102" x2="224" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="224" y="70" width="172" height="64" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1.2"/>
  <text x="310.0" y="99.0" fill="#e2e8f0" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · Garder l'image</text>
  <text x="310.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">rollback-&lt;stamp&gt;</text>
  <line x1="396" y1="102" x2="418" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="418" y="70" width="172" height="64" rx="8" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1.2"/>
  <text x="504.0" y="99.0" fill="#fb923c" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · Sauvegarde</text>
  <text x="504.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">arrêt si elle échoue</text>
  <line x1="590" y1="102" x2="612" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="612" y="70" width="172" height="64" rx="8" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="698.0" y="99.0" fill="#4a9eff" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · Pull + recréation</text>
  <text x="698.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">mêmes overlays qu'à l'installation</text>
  <line x1="784" y1="102" x2="806" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="806" y="70" width="172" height="64" rx="8" fill="rgba(168,85,247,0.10)" stroke="rgba(168,85,247,0.50)" strokeWidth="1.2"/>
  <text x="892.0" y="99.0" fill="#c084fc" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · Migrations</text>
  <text x="892.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">paquet d'applis + schémas</text>
  <line x1="978" y1="102" x2="1000" y2="102" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#upg-flow)"/>
  <rect x="1000" y="70" width="172" height="64" rx="8" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.50)" strokeWidth="1.2"/>
  <text x="1086.0" y="99.0" fill="#4ade80" fontSize="10.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 · Rapport</text>
  <text x="1086.0" y="114.0" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">puis status</text>
  <rect x="300" y="185" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="310" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un problème ?</text>
  <text x="310" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">./liberty rollback : image précédente + cette sauvegarde</text>
  <line x1="300" y1="202.0" x2="480" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <rect x="790" y="185" width="330" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="800" y="200" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Settings → History → Upgrades</text>
  <text x="800" y="213" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">versions avant / après, chaque étape, migrations</text>
  <line x1="790" y1="202.0" x2="1080" y2="134" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
</svg>

---

## Docker \{#docker\}

```bash
cd liberty-next/release
git pull                                  # les scripts de la nouvelle version
./liberty upgrade                         # vers la dernière version
./liberty upgrade --tag 7.0.58            # ou vers une version donnée (conservée dans .env)
```

Ce que fait la commande, dans l'ordre :

| Étape | Détail |
|---|---|
| 1. Contrôle | Lance `doctor`. Les problèmes sont signalés mais n'arrêtent pas la mise à jour — c'est souvent elle qui les corrige. |
| 2. Garder l'image | L'image en service est étiquetée localement `rollback-<date>` pour pouvoir être relancée. |
| 3. Sauvegarde | `backup` de chaque volume et du dossier des applications, conservée `--keep` jours (30 par défaut). **Si la sauvegarde échoue, la mise à jour s'arrête et rien n'est modifié.** |
| 4. Téléchargement et recréation | La nouvelle image est téléchargée et les conteneurs recréés avec les fichiers compose enregistrés — le HTTPS et les applications sous licence restent en place. |
| 5. Applications et migrations | Avec `--apps <wheel>`, le nouveau paquet d'applications est installé (avec son [plan de fusion](./deploy-prebuilt-apps.md#merge)) ; puis les migrations de schéma en attente sont appliquées. |
| 6. Rapport | Le rapport est enregistré et `status` est affiché. |

L'interruption de service dure le temps de redémarrer le conteneur, en général bien moins d'une minute.

### Mettre à jour les applications sous licence \{#apps\}

```bash
./liberty upgrade --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

Framework et applications sont mis à jour en une seule exécution. Pour actualiser seulement les applications, sans nouvelle image du framework : `./liberty apps <wheel>`.

---

## Installation Python \{#python\}

```bash
liberty-ops upgrade                                       # framework vers la dernière version
liberty-ops upgrade --version 7.0.58                      # une version donnée
liberty-ops upgrade --apps ./liberty_apps-7.0.58-py3-none-any.whl
```

Même enchaînement : `doctor` → sauvegarde (la seule étape qui peut arrêter la mise à jour) → `pipx upgrade` (ou la version fixée) → le wheel des applications → `liberty-admin migrate` → redémarrage du service et attente de `/ready` → rapport → `status`. `--no-restart` laisse le redémarrage à faire à la main ; `--backup-dest` choisit l'emplacement de la sauvegarde.

La lancer sous l'utilisateur du service avec son environnement chargé, comme toute commande `liberty-ops`.

---

## Le rapport de mise à jour \{#report\}

Chaque `upgrade` et chaque `rollback` enregistre un rapport : versions avant et après, version de l'image, fichiers compose, dossier de sauvegarde, constats de `doctor`, résultat de chaque étape et migrations appliquées. Il est stocké avec la configuration (`.versions/upgrades/`) et, avec Docker, une copie est aussi écrite dans le dossier de sauvegarde.

Il se consulte dans **Paramètres → History → Upgrades**. Chaque entrée indique son composant :

| Entrée | Enregistrée par |
|---|---|
| **Stack** | `./liberty upgrade`, `./liberty rollback`, `liberty-ops upgrade` — le rapport décrit ci-dessus. |
| **Framework**, **Apps** | Un changement de version constaté au démarrage du serveur — affiché avec les notes de version de la nouvelle version. |
| **`<application>` schema** | `liberty-admin migrate` — les migrations appliquées à la base d'une application. |
| `framework-schema` | Les colonnes ajoutées par le serveur à ses propres tables quand une nouvelle version en a besoin. |

---

## Migrations de schéma \{#migrations\}

Le framework crée et complète ses propres tables au démarrage. Les bases des applications sous licence évoluent par des **migrations** livrées dans le wheel des applications :

- `./liberty upgrade` et `liberty-ops upgrade` les appliquent ;
- `./liberty status`, `./liberty doctor` et le journal du serveur au démarrage signalent celles en attente ;
- `./liberty migrate --dry-run` les liste, `./liberty migrate` les applique ;
- avec `LIBERTY_AUTO_MIGRATE=1` dans `.env`, le serveur les applique lui-même au démarrage.

Chaque exécution est enregistrée dans **Paramètres → History → Upgrades**. Pour une base dont la version enregistrée est en avance sur ses tables réelles, `liberty-admin migrate --app nomasx1 --stamp <révision>` enregistre la version sans rien exécuter, puis applique ce qui reste — voir [CLI](../references/cli.md#migrate).

---

## Retour arrière \{#rollback\}

```bash
./liberty rollback            # demande confirmation
./liberty rollback --yes
```

La commande relance l'image gardée avant la dernière mise à jour et restaure la sauvegarde prise juste avant. **Tout ce qui a été écrit depuis cette sauvegarde est perdu** — d'où la confirmation. Le rapport de la mise à jour est conservé, et le retour arrière a le sien.

Sur une installation Python, `liberty-ops rollback` réinstalle la version précédente du framework et restaure la sauvegarde prise avant la mise à jour. pipx ne garde pas de copie de l'ancien wheel des applications : le passer avec `--apps <wheel précédent>` pour revenir aussi sur les applications.

Pour revenir plus loin que la dernière mise à jour : `./liberty restore <dossier de sauvegarde>` puis `./liberty upgrade --tag <version>`.

---

## Docker Swarm \{#swarm\}

`./liberty` ne pilote pas un swarm. Prendre une sauvegarde avec `./backup.sh`, puis :

```bash
docker service update --image ghcr.io/fblettner/liberty-next:7.0.58 liberty_liberty-next
docker exec -u liberty $(docker ps -qf name=liberty_liberty-next) liberty-admin migrate
docker service rollback liberty_liberty-next      # en cas de problème
```

Ou définir `LIBERTY_IMAGE_TAG` dans `.env` et relancer `./deploy-swarm.sh`.

---

## Versions \{#versions\}

| Changement | À quoi s'attendre |
|---|---|
| Version corrective (`7.0.57` → `7.0.58`) | Corrections et fonctionnalités ; la configuration reste compatible ; les changements de base ne font qu'ajouter des tables ou des colonnes. |
| Une étape plus importante | Les notes de version précisent ce qu'il faut vérifier avant et après. |

Lire les notes de version avant de mettre à jour : **Paramètres → Release notes** affiche celles de la version en service.

---

## Conseils \{#tips\}

- Fixer la version en production (`--tag`) et mettre à jour volontairement, d'abord sur un serveur de test.
- Lancer `./liberty doctor` avant la mise à jour : un problème signalé est plus simple à corriger avant qu'après.
- Après la mise à jour, se connecter, ouvrir un écran de chaque application et lancer une tâche Nomaflow à la main.
- Garder la sauvegarde de la mise à jour jusqu'à la suivante.
