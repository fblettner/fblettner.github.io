---
title: Mise à niveau
description: "Faire évoluer un environnement NomaUBL installé vers une nouvelle version. Une seule commande — nomaubl.sh upgrade sous Linux/macOS ou nomaubl.cmd upgrade sous Windows — gère le remplacement du JAR, les migrations de schéma, la fusion des données de référence, la fusion des XSL client et le redémarrage du service. Un rapport complet est produit et une sauvegarde de retour arrière est conservée."
keywords: [NomaUBL, mise à niveau, version, nomaubl.sh upgrade, nomaubl.cmd upgrade, migration de schéma, fusion XSL client, retour arrière, sauvegarde, historique des mises à niveau, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Mise à niveau

Chaque version de NomaUBL est livrée sous la forme d'un nouveau `nomaubl.jar`. Une seule commande — **`nomaubl.sh upgrade <env>`** sous Linux/macOS ou **`nomaubl.cmd upgrade <env>`** sous Windows — fait passer un environnement installé de la version qu'il exécute actuellement à celle du JAR en place. Elle arrête le service, lance le volet `-upgrade` côté Java (migrations de schéma, fusion des données de référence, rafraîchissement des XSL du socle, fusion des XSL par document) puis redémarre le service. Un rapport complet est déposé sous `${appHome}/upgrade-reports/` et une sauvegarde de retour arrière sous `${appHome}/backup/<timestamp>/`.

La même commande s'exécute sur toutes les plateformes prises en charge — il n'existe **aucun parcours de mise à niveau réservé à Linux** ou **réservé à Windows**. Il convient de choisir le wrapper correspondant à l'hôte.

---

## Deux façons d'invoquer la commande

```bash title="Linux / macOS"
# Option A — le JAR est déjà en place
./nomaubl.sh upgrade prod

# Option B — laisser le wrapper remplacer le JAR au préalable
./nomaubl.sh upgrade prod /tmp/nomaubl-2026.06.0.jar
```

```cmd title="Windows"
REM Option A — le JAR est déjà en place
nomaubl.cmd upgrade prod

REM Option B — laisser le wrapper remplacer le JAR au préalable
nomaubl.cmd upgrade prod C:\downloads\nomaubl-2026.06.0.jar
```

| Argument | Description |
|---|---|
| **`env`** | Nom de l'environnement — le même que celui utilisé par `start`, `stop`, etc. Le wrapper résout la configuration depuis `<env>/config/config.json`. |
| **`new_jar`** *(facultatif)* | Chemin vers le JAR cible. Le wrapper le copie par-dessus le `nomaubl.jar` existant (Linux) ou `nomaubl-fat.jar` (Windows) avant d'exécuter la mise à niveau. À omettre si le JAR a déjà été remplacé à la main. |

Les deux formes produisent le même état final. La seconde est utile quand une seule commande doit tout faire ; la première convient quand le pipeline de livraison dépose déjà le nouveau JAR en place.

---

## En un coup d'œil — ce que fait la mise à niveau

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upgi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/></marker>
    <linearGradient id="upgi-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="320" rx="14" fill="url(#upgi-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">nomaubl.sh / nomaubl.cmd upgrade &lt;env&gt; — les étapes dans l'ordre</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="60" rx="10" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="160" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">1 · ARRÊT &amp; SAUVEGARDE</text>
  <text x="160" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">arrêt du service si actif</text>
  <text x="160" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">instantané sous backup/</text>

  <rect x="280" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="380" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">2 · BASE DE DONNÉES</text>
  <text x="380" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">application des deltas de schéma</text>
  <text x="380" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Oracle et PostgreSQL</text>

  <rect x="500" y="100" width="200" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="600" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 · DONNÉES DE RÉFÉRENCE</text>
  <text x="600" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">fusion des nouvelles entrées</text>
  <text x="600" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">conservation des surcharges client</text>

  <rect x="720" y="100" width="220" height="60" rx="10" fill="rgba(74,158,255,0.08)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="830" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">4 · XSL DU SOCLE</text>
  <text x="830" y="140" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">rafraîchissement ubl-common + règles</text>
  <text x="830" y="154" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Schematron, XSD</text>

  <line x1="160" y1="170" x2="160" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>
  <line x1="380" y1="170" x2="380" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>
  <line x1="600" y1="170" x2="600" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>
  <line x1="830" y1="170" x2="830" y2="200" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#upgi-arrow)"/>

  <rect x="60" y="210" width="420" height="60" rx="10" fill="rgba(192,132,252,0.08)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="270" y="234" fill="#c084fc" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">5 · XSL PAR DOCUMENT — RÉÉCRITURE AVEC FUSION</text>
  <text x="270" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">valeurs TAG_ client préservées · bloc OVERRIDES préservé</text>
  <text x="270" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">nouveaux TAG ajoutés avec valeurs par défaut · TAG supprimés signalés</text>

  <rect x="500" y="210" width="440" height="60" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="720" y="234" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">6 · RAPPORT &amp; REDÉMARRAGE</text>
  <text x="720" y="250" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">${`{appHome}`}/upgrade-reports/upgrade-YYYYMMDD-HHmmss.md</text>
  <text x="720" y="264" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">redémarrage du service (uniquement s'il était actif avant)</text>

  <line x1="270" y1="280" x2="270" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upgi-arrow)"/>
  <text x="290" y="298" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">arrêt à la première erreur — le service reste à l'arrêt, la sauvegarde reste sur disque</text>
</svg>

La référence détaillée par étape (ce que `-upgrade` fait en interne, ce qui est préservé, ce qui est rafraîchi) se trouve sur la page [Ligne de commande → upgrade](../management/command-line.md#upgrade).

---

## Avant la mise à niveau

| Vérification | Raison |
|---|---|
| **Le nouveau JAR est bien celui attendu** — `java -jar nomaubl.jar -help` affiche la version en tête. | Permet de détecter un build erroné posé à côté du wrapper. |
| **L'utilisateur du service peut écrire dans le répertoire d'environnement et son parent**. | La mise à niveau réécrit `template/`, `xslt/`, `.versions/` et crée une sauvegarde. Un système de fichiers en lecture seule bloque la mise à niveau dès l'étape 1. |
| **Le compte de base de données dispose des mêmes droits DDL qu'à l'installation** (création de tables, d'index, de séquences, de vues). | L'étape 2 applique les deltas de schéma — les droits DDL sont requis même pour une exécution idempotente sur la même version. |
| **Une véritable sauvegarde de base de données est en place** *(pas seulement l'instantané `backup/` par environnement)*. | Le répertoire `backup/` conserve une copie des fichiers sur disque ; il ne réalise pas d'instantané de la base. Il convient de prendre la sauvegarde habituelle de la base avant une version majeure. |
| **Une fenêtre de maintenance** suffisante pour un redémarrage — typiquement 1 à 5 minutes par environnement. | Le service est indisponible de l'étape 1 jusqu'à l'étape 6. |

Aucun mode « maintenance » particulier n'est requis pour NomaUBL au-delà de l'arrêt du service — le wrapper s'en charge automatiquement.

---

## Exécuter la mise à niveau

### Linux / macOS

```bash
cd /opt/nomaubl
./nomaubl.sh upgrade prod
```

Sortie type :

```text
[upgrade] env: prod
[upgrade] stopping service...
NomaUBL [prod] stopped
[upgrade] running -upgrade (this may take a minute)...
... (Java-side step log) ...
[upgrade] starting service...
Starting NomaUBL [prod] (port=8090)...
NomaUBL [prod] started (PID 12347)
  URL: http://localhost:8090/
  Log: /opt/nomaubl/nomaubl-prod.log
```

### Windows

```cmd
cd C:\nomaubl
nomaubl.cmd upgrade prod
```

Même sortie, même sémantique de code de sortie — `0` en cas de succès, non nul en cas d'échec.

### Plusieurs environnements

La mise à niveau s'applique par environnement. Avec trois environnements sur le même hôte, la commande est lancée trois fois :

```bash title="Linux / macOS"
./nomaubl.sh upgrade demo
./nomaubl.sh upgrade uat
./nomaubl.sh upgrade prod
```

```cmd title="Windows"
nomaubl.cmd upgrade demo
nomaubl.cmd upgrade uat
nomaubl.cmd upgrade prod
```

La promotion suit l'ordre dicté par le processus de livraison (typiquement demo → uat → prod). Chaque exécution utilise le **même JAR** — le JAR est partagé entre les environnements de l'hôte.

---

## En cas d'échec

Le wrapper se termine avec un code non nul et **laisse le service arrêté**. Le message affiché est le suivant :

```text
[upgrade] ⚠ FAILED — service left stopped.
[upgrade] Inspect the report under ${appHome}/upgrade-reports/ and
[upgrade] roll back from ${appHome}/backup/<latest>/ if needed.
```

Les deux fichiers à consulter :

| Fichier | Emplacement | Information fournie |
|---|---|---|
| **Le rapport de mise à niveau** | `${appHome}/upgrade-reports/upgrade-<timestamp>.md` | Résultat par étape. L'en-tête du rapport indique le répertoire d'environnement résolu et l'URL JDBC, de sorte qu'une erreur d'hôte ou de chemin saute aux yeux. |
| **L'instantané de sauvegarde** | `${appHome}/backup/<timestamp>/` | Copie du répertoire d'environnement et de l'ancien JAR, prise avant la mise à niveau. Sert au retour arrière. |

### Retour arrière

```bash title="Linux / macOS"
./nomaubl.sh stop prod                       # sécurité — généralement déjà arrêté
cp -r /opt/nomaubl/backup/<timestamp>/* /opt/nomaubl/prod/
cp /opt/nomaubl/backup/<timestamp>/nomaubl.jar /opt/nomaubl/   # restauration de l'ancien JAR
./nomaubl.sh start prod
```

```cmd title="Windows"
nomaubl.cmd stop prod
xcopy /E /I /Y C:\nomaubl\backup\<timestamp>\* C:\nomaubl\prod\
copy /Y C:\nomaubl\backup\<timestamp>\nomaubl-fat.jar C:\nomaubl\nomaubl-fat.jar
nomaubl.cmd start prod
```

Après un retour arrière, il convient de prendre une nouvelle sauvegarde de base de données avant de retenter la mise à niveau — les deltas de schéma ont pu être partiellement appliqués avant l'échec.

### Nouvelle tentative

Le volet `-upgrade` côté Java est **idempotent** : une nouvelle exécution sur le même environnement saute les étapes déjà réussies et reprend à celle qui a échoué. Une fois la cause sous-jacente corrigée (réseau, privilège manquant, etc.), il suffit de relancer :

```bash
./nomaubl.sh upgrade prod      # ou nomaubl.cmd upgrade prod
```

---

## Paramètres → Historique des mises à niveau

Chaque installation, mise à niveau et migration exécutée sur l'environnement est répertoriée sous **Paramètres → Historique des mises à niveau**. Un clic sur une ligne affiche le rapport complet dans le volet de droite — contenu identique au fichier sous `${appHome}/upgrade-reports/`. La liste est en lecture seule ; rien ne peut être relancé depuis cette page.

C'est la piste d'audit destinée à l'exploitant — utile pour confirmer « oui, 2026.06.0 a bien été passée sur prod mardi dernier » sans se connecter en SSH à l'hôte.

---

## Pièges courants lors d'une mise à niveau

| Erreur | Symptôme | Correction |
|---|---|---|
| Exécution d'`upgrade` sur le mauvais environnement. | Le mauvais environnement tombe pendant une minute. | Lire la ligne `[upgrade] env: <env>` au démarrage ; annuler avec Ctrl+C si ce n'est pas celui prévu. |
| Le nouveau JAR est absent ou corrompu. | `[upgrade] new JAR not found: <path>` ou `Error: Unable to access jarfile`. | Vérifier que le fichier existe et a la taille attendue ; le retélécharger si besoin. |
| Le service a été démarré à la main, en dehors du wrapper. | Le wrapper ne voit aucun fichier PID → considère que le service n'est pas en cours → la mise à niveau se poursuit sans arrêter la JVM. Deux processus se disputent brièvement la base de données. | Toujours utiliser le wrapper pour démarrer ou arrêter le service. |
| Un delta de schéma échoue parce que l'utilisateur de la base a perdu ses droits DDL. | Le rapport consigne `ORA-01031: insufficient privileges` (Oracle) ou `permission denied for schema` (PostgreSQL). | Réaccorder `CREATE TABLE`, `CREATE INDEX`, `CREATE SEQUENCE`, `CREATE VIEW` ; relancer la mise à niveau. |
| Les XSL personnalisées contiennent des TAG obsolètes signalés. | Le rapport liste, par modèle, des entrées sous *« removed TAGs »*. | Ouvrir le `.xsl` du modèle et retirer les lignes `<!-- removed in <version> -->` une fois l'adaptation effectuée. |
| Disque saturé sur la partition de l'environnement. | L'étape de sauvegarde échoue. | Libérer de l'espace ; relancer. Le répertoire `backup/` grossit au fil des instantanés conservés — il convient d'élaguer les anciens pour maîtriser l'occupation disque. |

---

## Et ensuite

- [Service et systemd](./service-and-systemd.md) — superviser le service mis à niveau.
- [Gestion → Ligne de commande → upgrade](../management/command-line.md#upgrade) — référence complète du volet `-upgrade` côté Java.
- [Supervision → Service et journaux](../monitoring/service-and-logs.md) — confirmer que la mise à niveau s'est appliquée (`/api/build-info` affiche la nouvelle version).
