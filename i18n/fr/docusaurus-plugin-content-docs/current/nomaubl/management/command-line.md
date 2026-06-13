---
title: Ligne de commande
description: "Interface en ligne de commande de NomaUBL — contrôle de service via nomaubl.sh, modes directs du JAR (install, serve, xml, ubl, fetch-import, fetch-status, fetch-single, fetch-all, extract) avec chaque argument et option détaillé."
keywords: [NomaUBL, ligne de commande, CLI, nomaubl.sh, java -jar, install, serve, xml, ubl, fetch-import, fetch-status, fetch-single, fetch-all, extract, ordonnanceur, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Ligne de commande

NomaUBL fournit une **interface en ligne de commande** complète qui reproduit toutes les actions opérationnelles disponibles dans l'interface web — installer un environnement, démarrer le serveur HTTP, lancer un traitement XML ou UBL, interroger la Plateforme Agréée, extraire depuis JD Edwards. La CLI est le mode recommandé pour les **installations système**, les **intégrations cron / ordonnanceur**, les **pipelines CI** et tout **environnement headless** sans accès web.

La CLI fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — sauf pour quelques sous-commandes spécifiques à JD Edwards (`extract`, sources `bip` / `ftp` de `fetch-single` / `fetch-all`).

---

## Deux modes d'invocation

NomaUBL propose deux couches équivalentes — un **wrapper de contrôle de service** (`nomaubl.sh`) et les **modes directs du JAR** (`java -jar nomaubl.jar -…`). Le wrapper résout le fichier de configuration depuis un *nom d'environnement* court et ajoute les opérations `start` / `stop` / `restart` / `status` / `log` au-dessus du JAR.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cli-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <marker id="cli-arrow-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cli-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/><stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/></linearGradient>
    <linearGradient id="cli-g-blue-strong" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.08"/></linearGradient>
    <linearGradient id="cli-g-slate" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/><stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/></linearGradient>
  </defs>
  <rect x="40" y="20" width="200" height="60" rx="10" fill="url(#cli-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="140" y="44" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Opérateur</text>
  <text x="140" y="64" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">cron · CI · interactif</text>
  <rect x="320" y="120" width="280" height="160" rx="14" fill="url(#cli-g-blue-strong)" stroke="#4a9eff" strokeWidth="2"/>
  <text x="460" y="150" fill="#4a9eff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">🛠 nomaubl.sh</text>
  <text x="460" y="172" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">wrapper par environnement</text>
  <line x1="345" y1="190" x2="575" y2="190" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="460" y="210" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">start · stop · restart</text>
  <text x="460" y="228" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">status · log</text>
  <text x="460" y="252" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.7">+ formes courtes des modes JAR</text>
  <rect x="680" y="20" width="280" height="280" rx="14" fill="url(#cli-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="820" y="50" fill="#4a9eff" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">☕ java -jar nomaubl.jar</text>
  <text x="820" y="72" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">modes directs — arguments complets</text>
  <line x1="705" y1="92" x2="935" y2="92" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="820" y="116" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-install · -serve</text>
  <text x="820" y="135" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-process</text>
  <text x="820" y="154" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-fetch-import · -fetch-status</text>
  <text x="820" y="173" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-fetch-single · -fetch-all</text>
  <text x="820" y="192" fill="currentColor" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">-extract</text>
  <path d="M 140 80 L 140 200 L 320 200" stroke="#4a9eff" strokeWidth="1.5" fill="none" markerEnd="url(#cli-arrow)"/>
  <line x1="600" y1="200" x2="680" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#cli-arrow)"/>
  <text x="640" y="190" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">résout config</text>
  <path d="M 240 50 L 680 50" stroke="#94a3b8" strokeWidth="1.2" strokeDasharray="5 4" fill="none" markerEnd="url(#cli-arrow-dim)"/>
  <text x="460" y="42" fill="#94a3b8" fontSize="9" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">direct</text>
</svg>

| Couche | Quand l'utiliser |
|---|---|
| **`nomaubl.sh`** *(wrapper)* | Exploitation au quotidien sur un serveur hébergeant un ou plusieurs environnements. Gère un fichier PID par instance, prend le **nom d'environnement** au lieu du chemin de configuration complet, propose `start` / `stop` / `restart` / `status` / `log`. |
| **`java -jar nomaubl.jar`** *(direct)* | Déploiement de NomaUBL en conteneur, intégration à un pipeline CI, ou tout contexte qui gère déjà le cycle de vie du processus. Prend le **chemin absolu** vers `config.json`. |

Le wrapper résout sa configuration depuis `<script_dir>/<env>/config/config.json` — autrement dit, le JAR se trouve à côté d'un ou plusieurs répertoires d'environnement, chacun avec un `config/config.json`.

---

## Contrôle de service avec `nomaubl.sh`

Disposer le JAR et un environnement par instance de service, puis piloter chaque instance via son nom court :

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '16px', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontFamily: 'monospace', fontSize: '12px', lineHeight: '1.7'}}>
  <div style={{opacity: 0.6, marginBottom: '6px'}}>/opt/nomaubl/</div>
  <div style={{paddingLeft: '14px', borderLeft: '1px solid rgba(255,255,255,0.08)', marginLeft: '6px'}}>
    <div>📦 <b>nomaubl.jar</b></div>
    <div>🛠 <b>nomaubl.sh</b></div>
    <div>📂 fonts/ &nbsp;<span style={{opacity: 0.5}}>· partagé</span></div>
    <div>📂 images/ &nbsp;<span style={{opacity: 0.5}}>· partagé</span></div>
    <div>📂 demo/ &nbsp;<span style={{opacity: 0.5, color: '#4a9eff'}}>· environnement</span></div>
    <div style={{paddingLeft: '20px', opacity: 0.85}}>📂 config/ → config.json, xdo.cfg, …</div>
    <div style={{paddingLeft: '20px', opacity: 0.85}}>📂 input/, process/, ubl/, single/, …</div>
    <div>📂 uat/ &nbsp;<span style={{opacity: 0.5, color: '#4a9eff'}}>· environnement</span></div>
    <div>📂 prod/ &nbsp;<span style={{opacity: 0.5, color: '#4a9eff'}}>· environnement</span></div>
  </div>
</div>

| Sous-commande | Effet |
|---|---|
| **`start <env> [port]`** | Lance `java -jar nomaubl.jar -serve <env>/config/config.json <port>` en tâche de fond. Port par défaut : `8090`. Le PID est stocké dans `nomaubl-<env>.pid` ; stdout / stderr sont ajoutés à `nomaubl-<env>.log`. Refuse de démarrer si le fichier PID désigne un processus actif. |
| **`stop <env>`** | Envoie `SIGTERM` au PID enregistré ; attend jusqu'à 10 s, puis `SIGKILL` si le processus est encore actif. Nettoie le fichier PID. |
| **`restart <env> [port]`** | Raccourci : `stop` puis `start`. |
| **`status [env]`** | Avec un nom d'environnement, indique `running` (avec PID) ou `not running`. Sans argument, parcourt tous les `nomaubl-*.pid` et affiche l'état de chaque instance — et purge les PID obsolètes correspondant à des processus disparus. |
| **`log <env>`** | Suivi en continu du fichier journal (`tail -f nomaubl-<env>.log`). |
| **`upgrade <env>`** | Mise à jour de bout en bout d'un environnement existant vers le JAR en place. Voir [`upgrade`](#upgrade) plus bas. |
| **`backfill-vat <env> <dateDebut> <dateFin>`** | Reconstruit la table des détails TVA (`F564234`) pour chaque facture émise entre `dateDebut` et `dateFin` à partir du document UBL déjà conservé sur chaque en-tête. Voir [`backfill-vat`](#backfill-vat) plus bas. |

Au-delà du contrôle de service, le wrapper propose des **formes courtes** des modes de traitement et de synchronisation du JAR :

| Commande wrapper | Équivalent JAR |
|---|---|
| `nomaubl.sh process <env> <template> <fichier\|rép> [type] [options]` | `java -jar nomaubl.jar -process <env>/config/config.json <template> <fichier\|rép> [type] [options]` |
| `nomaubl.sh fetch-import <env>` | `java -jar nomaubl.jar -fetch-import <env>/config/config.json` |
| `nomaubl.sh fetch-status <env>` | `java -jar nomaubl.jar -fetch-status <env>/config/config.json` |
| `nomaubl.sh fetch-single <env> <template> <source> <args…> [type] [options]` | `java -jar nomaubl.jar -fetch-single …` |
| `nomaubl.sh fetch-all <env> <template> <source> [type] [options]` | `java -jar nomaubl.jar -fetch-all …` |
| `nomaubl.sh extract <env> <jobNumber> [options]` | `java -jar nomaubl.jar -extract <env>/config/config.json <jobNumber> [options]` |
| `nomaubl.sh install <targetDir>` | `java -jar nomaubl.jar -install <targetDir>` |

Le reste de la page détaille chacun des modes directs du JAR.

### `JAVA_OPTS` — passer des options JVM via le wrapper *(2026.06.02)*

Les deux wrappers (`nomaubl.sh`, `nomaubl.cmd`) déclarent une variable **`JAVA_OPTS`** en haut du fichier. Tout ce qu'elle contient est transmis à chaque invocation `java -jar` du wrapper — `start`, `process`, `upgrade`, `fetch-*`, `extract`, `install`. Cela permet d'appliquer des options JVM communes au site sans toucher aux lignes de commande du wrapper.

```bash title="nomaubl.sh (en-tête du fichier)"
# Options JVM transmises à chaque invocation java. Défaut : vide.
JAVA_OPTS=""
```

```cmd title="nomaubl.cmd (en-tête du fichier)"
:: Options JVM transmises à chaque invocation java. Défaut : vide.
set "JAVA_OPTS="
```

L'usage le plus fréquent est de fixer la **clé maîtresse de chiffrement** à un emplacement fixe hors du profil utilisateur — généralement le même chemin sur tous les environnements d'un hôte :

```bash
JAVA_OPTS="-Dnomaubl.master.key.file=/etc/nomaubl/master.key"
```

Ce réglage résiste à un redémarrage utilisateur, à un changement de compte de service et à un nettoyage des `~/.nomaubl-*` ; le fichier système devient le point de référence unique quel que soit le compte OS qui exécute la JVM. La même option fonctionne sous systemd (à placer dans la ligne `Environment=` du fichier d'unité) et sous Windows NSSM (via `nssm set NomaUBL-<env> AppEnvironmentExtra`).

Autres cas courants :

| Option | Usage |
|---|---|
| `-Xmx8g` | Augmenter le tas JVM au-delà de la valeur par défaut pour les gros batchs. |
| `-Dnomaubl.debug.timing=true` | Afficher les durées par étape même quand `--no-debug` les masquerait. |
| `-Dfile.encoding=UTF-8` | Forcer UTF-8 sur les plates-formes où la valeur JVM par défaut diffère (rare, mais observé sous Windows Server). |
| `-Djava.io.tmpdir=/var/tmp/nomaubl` | Déplacer le répertoire temporaire hors de `/tmp` en cas de pression mémoire. |

`JAVA_OPTS` n'apparaît pas dans la bannière `--help` — c'est un réglage exploitation, pas une option de ligne de commande.

---

## `upgrade <env>` — faire évoluer un environnement existant \{#upgrade\}

Mise à jour de bout en bout d'un environnement existant vers le JAR en place. Remplacer `nomaubl.jar` à côté du wrapper, lancer `./nomaubl.sh upgrade <env>`, et le wrapper enchaîne toutes les étapes — cycle de vie du service, schéma de base, données de référence, XSL framework, XSL par document — puis dépose un rapport complet sous `${appHome}/upgrade-reports/`. Les mappings client et la configuration client sont conservés à l'identique tout au long du processus.

```bash
./nomaubl.sh upgrade prod                              # détection automatique de la version actuelle
./nomaubl.sh upgrade prod --from-version 2026.05.20    # forcer la version de départ manuellement
```

### `--from-version` — version de départ manuelle *(2026.06.02)*

Par défaut, la mise à jour lit la version installée dans la table d'historique des mises à jour et applique toutes les migrations dont la version cible est **strictement supérieure** à celle qui s'y trouve. Cela couvre tous les environnements passés par `nomaubl.sh upgrade` depuis l'ajout de cette table.

Pour les environnements **patchés à la main** par anticipation — typiquement quand un correctif a été appliqué directement chez un client entre deux livraisons officielles —, la détection automatique peut sous-estimer ce qui est réellement en place sur disque, et la mise à jour rejouerait des migrations déjà absorbées par le client. L'option `--from-version <X.Y.Z>` court-circuite la détection : seules les migrations dont la version cible est strictement supérieure à `<X.Y.Z>` sont appliquées.

```bash
./nomaubl.sh upgrade prod --from-version 2026.05.20    # ignorer tout jusqu'à 2026.05.20 inclus
```

| Détail | Contenu |
|---|---|
| **Format** | `AAAA.MM.PP` (par ex. `2026.05.20`) — la chaîne de version de la livraison sur laquelle se trouve l'installation. |
| **Comparaison** | Stricte `>` — `--from-version 2026.05.20` applique toutes les migrations dont la cible est `2026.05.21` ou ultérieure. |
| **Périmètre** | Schéma de base, données de référence et XSL framework sont filtrés par la version de départ. La XSL par document est toujours refusionnée (la fusion est ré-exécutable sans effet sur les balises client déjà appliquées). |
| **Rapport** | Le rapport de mise à jour consigne la version de départ fournie dans son en-tête, afin que les audits voient quelle version a servi de point de départ. |

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="upg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#upg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">./nomaubl.sh upgrade prod — les étapes dans l'ordre</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · ARRÊT &amp; SAUVEGARDE</text>
  <text x="160" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">SIGTERM, 10 s de délai</text>
  <text x="160" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">snapshot — 5 dernières conservées</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · BASE DE DONNÉES</text>
  <text x="380" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">application des deltas</text>
  <text x="380" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">depuis la version installée</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · DONNÉES DE RÉFÉRENCE</text>
  <text x="600" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">fusion des nouvelles entrées</text>
  <text x="600" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">conservation des surcharges client</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · XSL FRAMEWORK</text>
  <text x="830" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">rafraîchissement ubl-common</text>
  <text x="830" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Schematron, XSD</text>

  <line x1="160" y1="170" x2="160" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="380" y1="170" x2="380" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="600" y1="170" x2="600" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>
  <line x1="830" y1="170" x2="830" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upg-arrow)"/>

  <rect x="60" y="210" width="420" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="270" y="234" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · XSL PAR DOCUMENT — RÉÉCRITURE AVEC FUSION</text>
  <text x="270" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">valeurs TAG_* conservées · bloc NOMAUBL_OVERRIDES conservé</text>
  <text x="270" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">nouveaux TAGs ajoutés par défaut · TAGs supprimés conservés et signalés</text>

  <rect x="500" y="210" width="440" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="720" y="234" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">6 · RAPPORT &amp; REDÉMARRAGE</text>
  <text x="720" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">${`{appHome}`}/upgrade-reports/upgrade-AAAAMMJJ-HHmmss.md</text>
  <text x="720" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">redémarrage du service · état visible dans Historique des mises à jour</text>

  <line x1="270" y1="280" x2="270" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upg-arrow)"/>
  <text x="290" y="298" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">arrêt à la première erreur — service à l'arrêt, snapshot toujours sur disque</text>
</svg>

### Le détail étape par étape

| # | Étape | Action | Ce qui reste intact |
|---|---|---|---|
| 1 | **Arrêt & sauvegarde** | Arrêt du service via `SIGTERM` (10 s de délai), copie de `config/` + `template/` + `ubl/` + `nomaubl.jar` dans `snapshots/<timestamp>/`. Les 5 dernières sauvegardes sont conservées, les plus anciennes sont supprimées. | — |
| 2 | **Base de données** | Lecture de la version installée depuis la table d'historique des mises à jour, application des deltas de schéma de toutes les versions intermédiaires (ré-exécutable sans risque — relancer la mise à jour ne refait rien la seconde fois). | Les tables d'exploitation (`F564231`, lignes de cycle de vie…) — seuls les ajouts et renommages de colonnes / index / tables s'appliquent. |
| 3 | **Données de référence** | Fusion des nouvelles entrées livrées avec le JAR dans les templates système (statuts, types de document, codes devises, codes d'action, etc.). | Toutes les entrées déjà présentes côté client, y compris celles renommées ou enrichies. |
| 4 | **XSL framework** | Rafraîchissement de `ubl-common.xsl`, des packs de règles Schematron et du jeu de XSD à la version embarquée dans le JAR. Ces fichiers ne sont pas modifiables côté client. | Le dossier `framework/` est intégralement remplacé — rien de spécifique client à cet endroit. |
| 5 | **XSL par document** | Pour chaque `template/<nom>/<nom>.xsl`, le wrapper réécrit un fichier neuf à partir du template de référence, puis ré-injecte toutes les valeurs `TAG_*` saisies par le client ainsi que le bloc `NOMAUBL_OVERRIDES_START`…`NOMAUBL_OVERRIDES_END` en fin de fichier. Les **nouveaux TAGs** introduits par la mise à jour arrivent avec leur valeur par défaut de référence — à compléter ensuite si besoin. Les **TAGs supprimés** de la référence sont conservés côté client, marqués d'un commentaire `<!-- removed in <version> -->` pour qu'ils ne passent pas inaperçus. | Valeurs `TAG_*` client · bloc de surcharges client · ressources RTF / images / xml d'exemple par document. |
| 6 | **Rapport & redémarrage** | Écriture du rapport `${appHome}/upgrade-reports/upgrade-<timestamp>.md` avec le résultat de chaque étape (TAGs ajoutés / conservés / signalés par document, changements de schéma appliqués, deltas de données de référence) et redémarrage du service via la commande `start` du wrapper. | — |

Si une étape échoue, la mise à jour s'arrête là. La sauvegarde reste sur disque : un retour arrière manuel se fait par `cp -r snapshots/<timestamp>/* env/` puis `./nomaubl.sh start <env>`. La tentative suivante reprend à l'étape échouée — les étapes déjà réussies ne sont pas rejouées.

### Paramètres → Historique des mises à jour

Chaque installation, mise à jour et migration effectuée sur l'environnement est listée sous **Paramètres → Historique des mises à jour**. Cliquer une ligne ouvre le rapport complet dans le panneau de droite — même contenu que le fichier déposé sous `${appHome}/upgrade-reports/`. La liste est en lecture seule, rien n'y est rejouable.

### Diagnostics

En cas d'incident, l'en-tête du rapport indique le **répertoire d'environnement résolu** et l'**URL JDBC** : une erreur d'hôte ou de chemin se repère immédiatement. Les échecs de connexion remontent l'intégralité de la chaîne de causes — `NoRouteToHost`, `Connection refused`, échec d'authentification, etc., au lieu d'un *connection attempt failed* peu parlant. Au démarrage, le chemin du fichier de clé maître utilisé pour déchiffrer les valeurs sensibles est tracé ; si la page de licence signale *restricted* parce que le fichier de clé a changé, le message d'erreur pointe directement sur la résolution de la clé maître.

---

## `backfill-vat <env> <dateDebut> <dateFin>` — reconstruire les détails TVA d'une période passée \{#backfill-vat\}

Reconstruit la **table des détails TVA** (`F564234`) pour chaque facture émise entre `dateDebut` et `dateFin`, à partir du document UBL déjà conservé sur l'en-tête de chaque facture. Deux cas d'usage :

- **Juste après avoir activé *Enregistrer les détails TVA*** sous *Paramètres → Connecteurs → db-nomaubl → Tables*. Seules les factures insérées à partir de ce moment-là enregistrent leurs détails dans `F564234`. La commande met à jour les périodes passées pour que la page [Déclaration de TVA](../application/vat-declaration.md) puisse les servir.
- **À chaque fois qu'une reconstruction propre est nécessaire**, par exemple après une corruption détectée sur les détails d'une période.

```bash
./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
```

| Argument | Description |
|---|---|
| **`env`** | Nom d'environnement — le même que celui utilisé par `start`, `stop`, etc. Le wrapper résout la configuration depuis `<env>/config/config.json`. |
| **`dateDebut`** | **Date d'émission** la plus ancienne à reconstruire, au format `AAAA-MM-JJ`. Bornes incluses. |
| **`dateFin`** | **Date d'émission** la plus récente à reconstruire, au format `AAAA-MM-JJ`. Bornes incluses. |

### Ce que fait la commande

Pour chaque en-tête de facture dans la fenêtre, le wrapper relit le document UBL conservé à côté de l'en-tête et réinsère les lignes de TVA par taux dans `F564234`. La fenêtre est appliquée à la **date d'émission** de la facture — les dates passées en argument correspondent donc à celles du filtre de période de la page Déclaration de TVA.

La commande peut être **relancée sans risque sur la même période**, sans créer de doublons — les lignes de détail existantes d'une facture sont supprimées avant la reconstruction, ce qui empêche toute collision avec des données obsolètes. Les en-têtes sans document UBL sont signalés dans le récapitulatif et ignorés.

### Sortie

Un récapitulatif s'affiche sur stdout à la fin de la commande :

```text
backfill-vat — date d'émission 2026-04-01 → 2026-04-30
  factures parcourues    12 481
  reconstruites (UBL)    12 476
  ignorées (sans UBL)         5
  lignes insérées dans F564234  41 902
  durée                    18.4 s
```

L'interrupteur *Enregistrer les détails TVA* n'a **pas** besoin d'être activé pour que `backfill-vat` fonctionne — la commande écrit toujours dans `F564234`. L'interrupteur ne gouverne que ce qui se passe à l'insertion des nouvelles factures.

---

## `-help` — bannière d'aide

Affiche la bannière d'aide intégrée et termine. Reconnu sous `-help`, `--help` ou `-h`. Lancer le JAR sans argument produit le même résultat.

```bash
java -jar nomaubl.jar -help
```

---

## `-install <targetDir>` — installation d'un environnement

Provisionne un **environnement** NomaUBL sous `targetDir` et les **ressources partagées** (polices, images) un niveau au-dessus. Préserve les fichiers de configuration (`config.json`, `xdo.cfg`, `config-documents.json`, `config-lists.json`) quand ils existent déjà. Relancer l'installation sur un environnement existant est sans risque — seuls la structure de répertoires et le framework XSL embarqué sont rafraîchis.

| Argument | Description |
|---|---|
| **`targetDir`** | Chemin de l'environnement à créer. Le répertoire désigné **est** l'environnement (par ex. `/opt/nomaubl/demo`) ; son **parent** reçoit les répertoires partagés `fonts/` et `images/`. Créé s'il n'existe pas. |

**Arborescence produite**

```text
parent/                        ← partagé entre environnements
  fonts/                       ← polices copiées depuis le JAR
  images/                      ← laissé vide pour les visuels projet
targetDir/                     ← un environnement
  burst/    config/    input/
  process/  single/   subtmpl/
  template/ ubl/      xslt/    .versions/
```

**Fichiers de configuration installés sous `targetDir/config/`**

| Fichier | Source | Comportement |
|---|---|---|
| `config.json` | `config/config-template.json` (dans le JAR) | `appHome` résolu en chemin absolu du parent ; `envName` résolu au nom du répertoire `targetDir`. Tous les autres chemins conservent leurs jetons `%APP_HOME%` / `%ENV%`, résolus à l'exécution. |
| `xdo.cfg` | `config/xdo.cfg` (dans le JAR) | `%APP_HOME%` et `%ENV%` substitués par leurs valeurs absolues — Oracle XDO ne résout pas les jetons. |
| `config-documents.json` | `config/config-template-documents.json` | Copié tel quel. |
| `config-lists.json` | `config/config-template-lists.json` | Copié tel quel. |

**Exemple**

```bash
java -jar nomaubl.jar -install /opt/nomaubl/demo
# → crée /opt/nomaubl/demo (env) + /opt/nomaubl/{fonts,images} (partagé)
```

---

## `-serve <configFile> [port]` — serveur HTTP embarqué

Démarre le serveur HTTP embarqué (interface web + API REST) et l'**ordonnanceur de tâches** intégré. Le processus reste actif jusqu'à interruption ; les threads HttpServer étant des threads démon, `Thread.currentThread().join()` maintient la JVM en vie.

| Argument | Description |
|---|---|
| **`configFile`** | Chemin absolu vers `config.json`. |
| **`port`** | Port TCP (défaut `8080`). |

L'ordonnanceur lit les clés suivantes du template **global** de `config.json` pour piloter ses tâches périodiques :

| Clé | Effet |
|---|---|
| **`fetchImportInterval`** | Minutes entre deux passes `-fetch-import`. `0` désactive la tâche. |
| **`fetchStatusInterval`** | Minutes entre deux passes `-fetch-status`. `0` désactive la tâche. |
| **`fetchAllInterval`** | Minutes entre deux passes `-fetch-all`. `0` désactive la tâche. |
| **`fetchAllParams`** | Objet JSON qui contient les paramètres du traitement par lots — même structure que le corps de `POST /api/fetch-invoices/run-batch`. Clés : `template` (sa propriété `source` infère XML ou UBL), `mode` (`AUTO` \| `SINGLE` \| `BURST` \| `UBL`), `source` (`directory` \| `bip`), `extractMode` (`input` \| `output` \| `both`), `replaceMode`, `validateOnly`, `sendToPA` (`Y` \| `N`), `noSend`, `language`. |

**Exemple**

```bash
java -jar nomaubl.jar -serve /opt/nomaubl/demo/config/config.json 8090
# → serveur HTTP sur :8090 + ordonnanceur piloté par les propriétés globales
```

---

## `-process` — point d'entrée unique de traitement

Traite un (ou plusieurs) fichier source contre un modèle de document — ou appelle un connecteur SQL / REST quand le `source` du modèle vaut `Connecteur`. Le pipeline est sélectionné par la propriété `source` du modèle (`XML` pour les spools XML qui nécessitent une transformation XSL, `UBL` pour les factures UBL 2.1 déjà formées, `Connecteur` pour les appels en direct à une requête SQL ou un endpoint REST).

```text
-process <configFile> <template> <fichier|répertoire|---> [type] [--param clé=valeur …] [--verbose] [--replace] [--no-send] [--no-db] [--validate] [--send] [--no-debug]
```

| Argument | Description |
|---|---|
| **`configFile`** | Chemin absolu vers `config.json`. |
| **`template`** | Nom du modèle de document (par ex. `invoices`, `credit_notes`). La propriété `source` du modèle pilote le pipeline — voir [Documents](./documents.md). |
| **`fichier \| répertoire \| ---`** | Un fichier source ou un répertoire de fichiers source. Pour un modèle **XML**, le fichier est attendu sous `<dirInput>/<fichier>.xml` quand l'extension est omise. Pour un modèle **UBL**, le chemin peut être absolu ou relatif à `<dirInput>/ubl/`. Sur un répertoire, chaque fichier correspondant est traité par ordre alphabétique. Pour un modèle **Connecteur**, passer `---` (trois tirets) à la place du chemin — la source est le connecteur, pas un fichier. |
| **`type`** | Modèles XML uniquement — type de traitement (`AUTO` \| `SINGLE` \| `BURST` \| `UBL`). Ignoré sur les modèles UBL et Connecteur. |

**Types de traitement** *(source XML uniquement)*

| Valeur | Effet |
|---|---|
| **`AUTO`** | Résolution du type par document via la configuration *Document Types*. Défaut pour les spools qui mélangent plusieurs types de document. |
| **`SINGLE`** | Un PDF par fichier source — modèles monodocument. |
| **`BURST`** | Découpage de la source sur `burstKey`, traitement en parallèle (`numProc`). |
| **`UBL`** | UBL uniquement — produit du UBL 2.1, sans PDF. |

**Options** — sans ordre imposé, peuvent suivre le type :

| Option | Effet | S'applique à |
|---|---|---|
| `--param clé=valeur` | Transmet une valeur aux paramètres du connecteur. Répétable — une fois par paramètre déclaré. Mêmes noms que les champs du formulaire affiché sur *Traitement → Traiter un document* quand le modèle utilise un connecteur. | Connecteur |
| `--verbose` | Affiche les messages de traitement par fichier sur stdout. | tous |
| `--replace` | Purge les cinq tables UBL pour `(doc, dct, kco)` avant ré-import. | tous |
| `--no-send` | N'envoie pas à la Plateforme Agréée. | tous |
| `--no-db` | N'écrit pas en base (implique `--no-send`). | XML |
| `--validate` | XSD + Schematron seulement — pas d'insertion BDD, pas de dépôt PA. | UBL |
| `--send` | Force le dépôt PA, en surcharge du paramètre par défaut. | UBL |
| `--no-debug` | Ignore les durées par étape (parse, validation, insertion en base, envoi PA) journalisées par défaut à chaque exécution. À utiliser sur les batchs nocturnes volumineux quand la surcharge par étape n'apporte rien dans les logs. | tous |

**Exemples**

```bash
# Modèle XML — spool JDE, routage AUTO
java -jar nomaubl.jar -process /opt/nomaubl/demo/config/config.json \
                      invoices INV-2026-001 AUTO --verbose --replace

# Modèle UBL — valider chaque fichier d'un répertoire, sans BDD ni PA
java -jar nomaubl.jar -process /opt/nomaubl/demo/config/config.json \
                      ubl-invoices /opt/nomaubl/demo/ubl/ --validate

# Modèle Connecteur — récupérer en-tête + lignes via une requête SQL, sans timings de debug
java -jar nomaubl.jar -process /opt/nomaubl/demo/config/config.json \
                      invoices-sql --- \
                      --param customer=00001234 --param docNumber=2026000125 \
                      --no-debug
```

---

## `-fetch-import` et `-fetch-status` — passes de synchronisation

Deux passes en lecture seule vers la Plateforme Agréée — typiquement programmées via `fetchImportInterval` / `fetchStatusInterval` plutôt que lancées à la main.

| Mode | Effet |
|---|---|
| **`-fetch-import <configFile>`** | Réinterroge la PA pour les factures en statut `9906 — Attente import PA`. Les factures qui ont été ingérées entre-temps voient leur cycle de vie progresser. |
| **`-fetch-status <configFile>`** | Récupère le cycle de vie de toutes les factures actives et ajoute les nouveaux événements (badges de statut, motifs de rejet, actions attendues) — même chemin de code que la page *Sync → Retrieve Statuses*. |

```bash
java -jar nomaubl.jar -fetch-import /opt/nomaubl/demo/config/config.json
java -jar nomaubl.jar -fetch-status /opt/nomaubl/demo/config/config.json
```

---

## `-fetch-received` — récupérer les factures fournisseur depuis la PA

Passe côté réception : demander à la PA la liste des factures adressées à l'opérateur depuis la dernière exécution, télécharger chaque UBL non encore vu et la faire passer par le pipeline UBL existant. Équivalent de la page *Sync → Fetch Input → PA entrante (factures fournisseur)*.

```text
-fetch-received <configFile> [--since YYYY-MM-DD] [--verbose]
```

| Argument / option | Description |
|---|---|
| **`configFile`** | Chemin absolu vers `config.json`. |
| **`--since YYYY-MM-DD`** | Date d'émission la plus ancienne à considérer. Par défaut, l'horodatage de la dernière exécution réussie enregistré dans le modèle *global* (`lastFetchReceivedAt`). |
| **`--verbose`** | Affiche les messages par document sur stdout — pratique au premier lancement pour voir combien d'UBL ont été téléchargés et quelles décisions de déduplication ont été prises. |

Le handler appelle deux tâches du connecteur API sur le modèle PA configuré :

| Tâche | Rôle |
|---|---|
| **`fetch-received-list`** | Renvoie la liste des références de factures reçues (UUID PA + métadonnées fournisseur) depuis le curseur. |
| **`fetch-received`** | Télécharge un UBL par UUID PA. |

La déduplication est faite par UUID PA contre les lignes F564231 existantes, donc relancer l'import est sans risque — les factures déjà importées sont simplement ignorées. Le pipeline de traitement s'appuie sur le modèle de document dont la `direction = R` correspond au flux entrant (le modèle livré `received-ubl` par défaut).

Pour l'exécuter automatiquement, renseigner **`fetchReceivedInterval`** dans le modèle *global* (minutes entre passes, `0` = désactivé) — même ordonnanceur d'arrière-plan `-serve` que `fetchImportInterval` / `fetchStatusInterval`.

```bash
# Exécution manuelle — tout récupérer depuis le dernier curseur
java -jar nomaubl.jar -fetch-received /opt/nomaubl/demo/config/config.json --verbose

# Exécution manuelle — rattrapage depuis une date donnée
java -jar nomaubl.jar -fetch-received /opt/nomaubl/demo/config/config.json \
                      --since 2026-04-01
```

---

## `-fetch-single` — extraire un document, puis le traiter

Équivalent de la page *Processing → Extraction et traitement*. Extrait un document d'un canal source, dépose le fichier résultant dans `dirInput` (modèle XML) ou `<dirInput>/ubl/` (modèle UBL), puis lance immédiatement le pipeline correspondant. Le choix XML ou UBL est **déduit de la propriété `source` du modèle** — l'argument `processType` disparaît.

```text
-fetch-single <configFile> <template> <source> <sourceArgs…> [<type>] [options…]
```

| Argument | Description |
|---|---|
| **`configFile`** | Chemin absolu vers `config.json`. |
| **`template`** | Nom du modèle de document. Sa propriété `source` choisit le pipeline (XML ou UBL). |
| **`source`** | Canal d'extraction — voir le tableau ci-dessous. |
| **`sourceArgs`** | Arguments propres au canal. |
| **`type`** | Type de traitement pour les modèles XML (`AUTO` \| `SINGLE` \| `BURST` \| `UBL`). Ignoré sur les modèles UBL. |

**Canaux d'extraction**

| Source | Arguments | Description |
|---|---|---|
| **`archive <doc> <dct> <kco>`** | Numéro de document, type de document, code société. | Récupère depuis le répertoire d'archive JDE. |
| **`ftp <report> <version> <language> <job>`** | Code rapport, version, langue, numéro de job JDE. | Téléchargement par FTP / SFTP. |
| **`bip <jobNumber>`** | Numéro de job JDE BIP. | Lecture depuis la BIP Print Queue (`F95630` / `F95631`). |

**Options**

| Option | Effet |
|---|---|
| `--verbose` `--replace` `--no-send` | Identiques à `-process`. |
| `--validate` `--send` | Modèles UBL uniquement. |
| `--input` *(défaut)* `--output` `--both` | Mode d'extraction BIP — XML d'entrée, documents de sortie ou les deux. |

**Exemples**

```bash
# Modèle XML — extraction depuis l'archive, routage AUTO
java -jar nomaubl.jar -fetch-single /opt/nomaubl/demo/config/config.json \
                      invoices archive 12345 RI 00070 AUTO --verbose

# Modèle UBL — extraction d'un job BIP, validation seule
java -jar nomaubl.jar -fetch-single /opt/nomaubl/demo/config/config.json \
                      ubl-invoices bip 19 --validate
```

---

## `-fetch-all` — extraction et traitement par lots

Équivalent de la page *Synchronisation → Fetch Input*. Extrait **tous** les documents à traiter d'une source, puis les traite. Le choix XML / UBL est déduit du modèle — pas d'argument `processType`. Code de retour `1` si au moins un document a échoué.

```text
-fetch-all <configFile> <template> <source> [<type>] [options…]
```

| Argument | Description |
|---|---|
| **`source`** | `directory` — parcourt `dirInput` (modèle XML) ou `dirInput/ubl` (modèle UBL) pour rechercher les fichiers prêts à traiter. <br/>`bip` — récupère tous les nouveaux jobs BIP dont le numéro est supérieur à `lastBipJobNumber` (enregistré dans le template *global* après chaque exécution réussie). |

Pour chaque job `bip`, le wrapper résout le **template par job** depuis les filtres BIP s'ils en définissent un ; sinon, utilise l'argument `template` de la CLI. Après une exécution réussie, `lastBipJobNumber` dans `config.json` prend le plus grand numéro traité — au passage suivant, seuls les nouveaux jobs sont repris.

En mode `bip`, `-fetch-all` tient aussi compte du champ **Fenêtre BIP (jours)** (*Paramètres → Global → Traitement par lot*). Quand vous y indiquez un nombre de jours, seuls les jobs modifiés sur cette période sont repris, en plus du suivi par `lastBipJobNumber` ; c'est utile à la première installation ou après une longue interruption, pour ne pas reparcourir tout l'historique.

**Exemples**

```bash
# Traite chaque XML en attente dans le répertoire d'entrée
java -jar nomaubl.jar -fetch-all /opt/nomaubl/demo/config/config.json \
                      invoices directory AUTO --verbose

# Récupère les nouveaux jobs BIP contre un modèle UBL (validation + envoi)
java -jar nomaubl.jar -fetch-all /opt/nomaubl/demo/config/config.json \
                      ubl-invoices bip --send
```

---

## `-extract` — extraction brute JDE BIP

Extraction bas niveau depuis la BIP Print Queue de JD Edwards (`F9563110` en-tête, `F95630` XML d'entrée, `F95631` fichiers de sortie). Même moteur que `fetch-single … bip`, mais **sans** lancer le pipeline de traitement ensuite — utile pour déposer le contenu d'un job dans un répertoire pour inspection hors ligne.

```text
-extract <configFile> <jobNumber> [--input|--output|--both] [--type <typeSortie>] [--lang <langue>] [outputDir]
```

| Argument | Description |
|---|---|
| **`jobNumber`** | Numéro de job JDE (`RJJOBNBR`). |
| **`--input`** *(défaut)* | Extrait uniquement le XML d'entrée. |
| **`--output`** | Extrait uniquement les fichiers de sortie générés. |
| **`--both`** | Extrait l'entrée + la sortie. |
| **`--type <val>`** | Filtre les sorties par type — `XML`, `PDF`, `EXCEL`, `HTML`, `RTF`, `PPT`, `ETEXT`. |
| **`--lang <val>`** | Filtre par code langue (par ex. `FR`). |
| **`outputDir`** | Répertoire de sortie facultatif — défaut `global.dirInput`. |

**Exemple**

```bash
java -jar nomaubl.jar -extract /opt/nomaubl/demo/config/config.json 19 \
                      --both --type PDF --lang FR /tmp/jde-19/
```

---

## Référence des options

Vue consolidée des options CLI — modes acceptés, effet.

| Option | Modes | Effet |
|---|---|---|
| **`--verbose`** | `xml`, `ubl`, `fetch-single`, `fetch-all` | Affiche les messages de traitement sur stdout. |
| **`--replace`** | `xml`, `ubl`, `fetch-single`, `fetch-all` | Écrase l'enregistrement existant (suppression puis insertion pour `ubl` ; respect de la sémantique `replaceDocument` pour `xml`). |
| **`--validate`** | `ubl`, `fetch-single`, `fetch-all` | Validation seule — pas d'insertion DB, pas d'envoi PA. Implique `--no-send`. |
| **`--send`** | `ubl`, `fetch-single`, `fetch-all` | Force l'envoi à la PA, en surcharge du paramètre par défaut. |
| **`--no-send`** | `xml`, `ubl`, `fetch-single`, `fetch-all` | N'envoie pas à la PA. |
| **`--no-db`** | `xml` | N'écrit pas en base. Implique `--no-send`. |
| **`--input`** *(défaut)* | `extract`, `fetch-single` (bip), `fetch-all` (bip) | Extraction BIP — XML d'entrée seul. |
| **`--output`** | `extract`, `fetch-single` (bip), `fetch-all` (bip) | Extraction BIP — fichiers de sortie seuls. |
| **`--both`** | `extract`, `fetch-single` (bip), `fetch-all` (bip) | Extraction BIP — entrée + sortie. |
| **`--type <t>`** | `extract` | Filtre les sorties par type — XML, PDF, EXCEL, HTML, RTF, PPT, ETEXT. |
| **`--lang <l>`** | `extract` | Filtre par code langue. |

---

## Conseils & bonnes pratiques

- **Programmer les passes via l'ordonnanceur intégré à `-serve` plutôt que via cron.** Configurer `fetchImportInterval` et `fetchStatusInterval` dans le template *global* offre un point unique de paramétrage et survit aux redémarrages d'environnement ; lancer les mêmes passes via cron risque de chevaucher l'ordonnanceur en place.
- **`fetch-all` est ré-exécutable sans risque sur la source `directory`, et procède par ajout seul sur `bip`.** Une relance `directory` reprend les fichiers encore présents dans `dirInput` — typiquement aucun une fois traités et retirés. Une relance `bip` ne récupère que les jobs supérieurs à `lastBipJobNumber`, donc une exécution précédente réussie n'est jamais rejouée.
- **Utiliser `--validate` lors d'une promotion d'UBL entre environnements.** Cette option exécute XSD + Schematron sans écrire en base ni contacter la PA — un test à blanc avant de passer à l'exécution réelle.
- **Centraliser `fetchAllParams` dans le template *global* plutôt que sur chaque ligne de cron.** L'ordonnanceur compose l'exécution à partir de cet objet JSON unique, en miroir de la page *Configuration → Système → Fetch Invoices*.
- **Réserver `-extract` à l'inspection ou à la reprise.** `fetch-single` et `fetch-all` extraient en interne ; le mode `-extract` autonome sert à déposer le contenu d'un job BIP sur disque pour analyse hors ligne ou rejeu.
- **Lancer `-install` sur un répertoire vierge et éditer `config/config.json` ensuite.** L'installeur n'écrase jamais un `config.json` existant ; un fichier obsolète issu d'une tentative précédente l'emportera silencieusement — partir d'un `targetDir` vide pour éviter toute ambiguïté.
