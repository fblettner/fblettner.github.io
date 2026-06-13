---
title: Installation — vue d'ensemble
description: "Mettre en service un serveur NomaUBL — JDK 17 + une base Oracle ou PostgreSQL + le JAR. S'exécute comme un processus Java permanent, un par environnement, démarré via le script nomaubl.sh. Unité systemd et reverse proxy optionnels pour la production."
keywords: [NomaUBL, installation, déploiement, serveur, JDK, Oracle, PostgreSQL, nomaubl.sh, systemd, environnement, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Installation — vue d'ensemble

NomaUBL se livre comme une application Java unique et autonome — le JAR (`nomaubl.jar` sous Linux / macOS, `nomaubl-fat.jar` sous Windows) accompagné de deux scripts de pilotage équivalents : **`nomaubl.sh`** (Bash) et **`nomaubl.cmd`** (batch Windows). Les deux proposent les mêmes sous-commandes (`start` / `stop` / `restart` / `status` / `log` / `install` / `upgrade` / modes de traitement) et appellent le JAR avec les mêmes arguments — choisir celui qui correspond à l'hôte. Il n'existe pas d'image Docker ; le JAR s'exécute sur un processus JDK 17 et enregistre ses données de cycle de vie dans une base Oracle ou PostgreSQL. L'interface web, l'API REST et l'ordonnanceur d'arrière-plan résident tous dans ce processus unique.

Cette section déroule chaque étape, d'un serveur Linux vierge jusqu'à un environnement opérationnel.

---

## Les composants

| Composant | Rôle |
|---|---|
| **JDK 17** | Le runtime Java qui héberge le JAR. |
| **Base de données** | Le stockage persistant de NomaUBL — cycle de vie des factures, données de référence, historique de configuration. **Oracle** (19c+) ou **PostgreSQL** (13+) ; même instance que votre JD Edwards / SAP / NetSuite / ERP personnalisé, ou schéma dédié. |
| **Le JAR** | Le binaire applicatif — interface web embarquée, CLI, ordonnanceur. Livré sous le nom `nomaubl.jar` (Linux / macOS) ou `nomaubl-fat.jar` (Windows). |
| **Le script de pilotage** | Un script de gestion de service qui orchestre le cycle de vie du JAR par environnement et propose une forme courte pour chaque mode CLI. `nomaubl.sh` sous Linux / macOS, `nomaubl.cmd` sous Windows. |
| **Un répertoire d'*environnement*** | L'état par instance sur disque — `config/`, `input/`, `process/`, `ubl/`, `single/`, `template/`, `xslt/`, `.versions/`. Créé par `<script> install <targetDir>` (qui appelle `-install` sur le JAR). |
| **Ressources partagées** | Un niveau au-dessus de l'environnement — `fonts/` (génération PDF) et `images/` (ressources projet). Créées à l'installation. |

Un même hôte peut héberger **plusieurs environnements** (`demo`, `uat`, `prod`) côte à côte, chacun avec son propre port et son propre fichier PID.

---

## En un coup d'œil

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="iov-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="300" rx="14" fill="url(#iov-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Installation NomaUBL — d'un serveur vierge à un environnement opérationnel</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="180" height="80" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)"/>
  <text x="130" y="106" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · PRÉREQUIS</text>
  <text x="130" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">JDK 17</text>
  <text x="130" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">Oracle / PostgreSQL</text>
  <text x="130" y="158" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">page prérequis</text>

  <rect x="232" y="84" width="180" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="322" y="106" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · INSTALLATION</text>
  <text x="322" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.sh install …</text>
  <text x="322" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.cmd install …</text>

  <rect x="424" y="84" width="180" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="514" y="106" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · CONFIGURATION</text>
  <text x="514" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Interface Settings dans le navigateur</text>
  <text x="514" y="142" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">BD · PA · connecteurs</text>

  <rect x="616" y="84" width="180" height="80" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)"/>
  <text x="706" y="106" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · DÉMARRAGE</text>
  <text x="706" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.sh start demo</text>
  <text x="706" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">nomaubl.cmd start demo</text>

  <rect x="808" y="84" width="152" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="884" y="106" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · EXPLOITATION</text>
  <text x="884" y="126" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">systemd / svc Windows</text>
  <text x="884" y="142" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="ui-monospace, monospace">reverse proxy · upgrade</text>

  <rect x="40" y="186" width="920" height="50" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="208" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ARBORESCENCE PRODUITE</text>
  <text x="58" y="226" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">app-home/  ←  le JAR · le script · fonts/ · images/ ·  demo/ · uat/ · prod/  ←  un env par répertoire</text>

  <rect x="40" y="252" width="920" height="50" rx="10" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="58" y="274" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À SUIVRE</text>
  <text x="58" y="292" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Se connecter à l'interface web sur  http://&lt;host&gt;:8090  ·  Configurer connecteurs + modèles  ·  Raccorder votre ERP source</text>
</svg>

---

## À lire dans l'ordre

| Étape | Page |
|---|---|
| **0** | Cette vue d'ensemble. |
| **1** | [Prérequis](./requirements.md) — JDK, base, OS, ports, reverse proxy optionnel. |
| **2** | [Installation et arborescence](./install-and-layout.md) — lancer `install`, comprendre l'arborescence des répertoires, installer plusieurs environnements. |
| **3** | [Configurer](./configure.md) — démarrer le service, se connecter, configurer les connecteurs et les paramètres système depuis l'interface. |
| **4** | [Service et systemd](./service-and-systemd.md) — cycle de vie du script, unité systemd optionnelle (Linux) / service Windows (Windows), reverse proxy nginx optionnel. |
| **5** | [Mise à niveau](./upgrade.md) — quand une nouvelle version sort, déposer le nouveau JAR et lancer `<script> upgrade <env>`. |

---

## Test rapide — à quoi ressemble une installation réussie

Après les quatre étapes :

- `./nomaubl.sh status` (ou `nomaubl.cmd status`) affiche votre / vos environnement(s) en `running`.
- `curl http://<host>:8090/api/build-info` renvoie la version et l'horodatage de build.
- `curl http://<host>:8090/api/license` renvoie l'état de la licence.
- La page de connexion s'affiche sur `http://<host>:8090/`.
- L'utilisateur administrateur créé (via l'étape *Init Database* in-app à la première ouverture) parvient à se connecter.

Si l'un de ces points fait défaut, la page de l'étape correspondante couvre le diagnostic.

---

## Ce que cette section ne couvre PAS

| Sujet | Où le trouver |
|---|---|
| Les opérations CLI quotidiennes. | [Gestion → Ligne de commande](../management/command-line.md). |
| L'interface web page par page. | Les sections Application / Synchronisation / Traitement / Outils UBL de la barre latérale. |
| La mise à niveau d'un environnement existant. | [Mise à niveau](./upgrade.md). |
| L'observation du runtime en direct. | [Supervision](../monitoring/overview.md). |
| Ce qu'est un modèle de Plateforme Agréée et comment le configurer. | [Configuration → Système → E-invoicing](../configuration/system/einvoicing.md). |

---

## À suivre

- [Prérequis](./requirements.md) — ce que l'hôte doit posséder avant de commencer.
- [Installation et arborescence](./install-and-layout.md) — provisionner le premier environnement.
