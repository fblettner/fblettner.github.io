---
title: Installation et arborescence
description: "Exécuter -install (directement via java -jar, ou via le wrapper nomaubl.sh / nomaubl.cmd) pour provisionner un environnement. Comprendre l'arborescence produite — config / input / process / ubl / template / ressources partagées — et installer plusieurs environnements côte à côte sous Linux, macOS ou Windows."
keywords: [NomaUBL, installation, -install, environnement, arborescence, répertoire, ressources partagées, fonts, images, environnements multiples, Linux, macOS, Windows, nomaubl.sh, nomaubl.cmd]
---

# Installation et arborescence

Le mode CLI `-install` provisionne un **environnement** NomaUBL sur disque ainsi que les **ressources partagées** (fonts, images) un niveau au-dessus. C'est la seule étape qui crée la structure de répertoires attendue par NomaUBL — le reste de la mise en place (démarrage du service, configuration depuis l'UI) s'appuie sur ce qui est produit ici.

NomaUBL est livré avec **deux wrappers de contrôle de service équivalents** — `nomaubl.sh` pour Linux / macOS, `nomaubl.cmd` pour Windows. Tous deux invoquent le même JAR avec les mêmes arguments et offrent les mêmes sous-commandes ; choisir celui qui correspond à l'hôte. L'un ou l'autre wrapper, ou une invocation directe `java -jar nomaubl.jar`, lance l'installation.

Cette page parcourt la commande d'installation, explique chaque répertoire produit et présente la convention pour héberger plusieurs environnements (dev / uat / prod) sur le même serveur.

---

## La commande

```bash title="Linux / macOS"
# Via le wrapper
./nomaubl.sh install /opt/nomaubl/demo

# Ou directement
java -jar nomaubl.jar -install /opt/nomaubl/demo
```

```cmd title="Windows"
REM Via le wrapper
nomaubl.cmd install C:\nomaubl\demo

REM Ou directement
java -jar nomaubl-fat.jar -install C:\nomaubl\demo
```

| Argument | Effet |
|---|---|
| **`targetDir`** | Le chemin de l'environnement à créer. Le répertoire lui-même devient l'environnement (ex. `/opt/nomaubl/demo` ou `C:\nomaubl\demo`). Son **parent** reçoit les répertoires partagés `fonts/` et `images/`. Créé s'il n'existe pas. |

Le wrapper résout le JAR placé à côté de lui — `nomaubl.jar` sous Linux / macOS, `nomaubl-fat.jar` sous Windows (nom par défaut livré avec le wrapper Windows). Renommer le JAR si un nom unique sur toutes les plateformes est préféré.

---

## Où placer le JAR

Placer le JAR et le wrapper ensemble dans le répertoire qui hébergera chaque environnement. Le wrapper résout l'environnement par **basename** : quand on exécute `./nomaubl.sh start demo` (ou `nomaubl.cmd start demo`), il cherche `<script_dir>/demo/config/config.json`.

Dispositions typiques :

```text title="Linux / macOS"
/opt/nomaubl/                    ← le "app home"
├── nomaubl.jar
└── nomaubl.sh                   ← chmod +x
```

```text title="Windows"
C:\nomaubl\
├── nomaubl-fat.jar              ← nom de JAR par défaut sous Windows
└── nomaubl.cmd
```

Après l'installation :

```text
<app-home>/
├── <jar>                        ← nomaubl.jar  ou  nomaubl-fat.jar
├── <wrapper>                    ← nomaubl.sh   ou  nomaubl.cmd
├── fonts/                       ← partagé, créé par -install
├── images/                      ← partagé, créé par -install
└── demo/                        ← l'environnement qui vient d'être installé
    ├── config/
    ├── input/
    ├── process/
    ├── ubl/
    ├── single/
    ├── subtmpl/
    ├── template/
    ├── xslt/
    ├── burst/
    └── .versions/
```

---

## Lancer l'installation

```bash title="Linux / macOS"
cd /opt/nomaubl
./nomaubl.sh install /opt/nomaubl/demo
```

```cmd title="Windows"
cd C:\nomaubl
nomaubl.cmd install C:\nomaubl\demo
```

La commande :

1. Crée `targetDir` s'il n'existe pas.
2. Crée les sous-répertoires par environnement (`config/`, `input/`, `process/`, `ubl/`, `single/`, `subtmpl/`, `template/`, `xslt/`, `burst/`, `.versions/`).
3. Copie le framework XSL embarqué dans `template/` + `xslt/`.
4. Crée `fonts/` et `images/` à côté de `targetDir` (uniquement à la première installation — la seconde les réutilise).
5. Écrit les quatre fichiers de configuration dans `targetDir/config/` *(sauf s'ils existent déjà — voir ci-dessous)*.

La sortie est la liste de ce qui a été créé suivie d'une ligne de synthèse.

---

## Fichiers de configuration installés

`targetDir/config/` reçoit quatre fichiers. **Les quatre sont ignorés s'ils existent déjà** — relancer `-install` sur un environnement existant rafraîchit la structure de répertoires et le framework XSL, mais **n'écrase jamais la configuration** personnalisée.

| Fichier | Source (dans le JAR) | Ce qui est résolu à l'installation |
|---|---|---|
| **`config.json`** | `config/config-template.json` | `appHome` → le chemin absolu du parent (ex. `/opt/nomaubl`). `envName` → le basename de `targetDir` (ex. `demo`). Tous les autres chemins conservent leurs marqueurs `%APP_HOME%` / `%ENV%`, résolus à l'exécution. |
| **`xdo.cfg`** | `config/xdo.cfg` | `%APP_HOME%` et `%ENV%` substitués par des valeurs **absolues** — Oracle XDO ne résout pas les marqueurs lui-même. |
| **`config-documents.json`** | `config/config-template-documents.json` | Copié tel quel. |
| **`config-lists.json`** | `config/config-template-lists.json` | Copié tel quel. |

Les marqueurs `%APP_HOME%` et `%ENV%` dans `config.json` permettent de déplacer l'environnement vers un autre répertoire plus tard — seuls les deux champs de premier niveau (`appHome`, `envName`) sont à mettre à jour ; chaque chemin imbriqué se résout automatiquement.

---

## L'arborescence par environnement

Chaque sous-répertoire a un rôle précis. Comprendre celui de chacun aide à lire la configuration par modèle :

| Répertoire | Ce qui s'y trouve |
|---|---|
| **`config/`** | Les quatre fichiers de configuration ci-dessus + le fichier de clé secrète pour les valeurs de configuration chiffrées. |
| **`input/`** | Fichiers XML / UBL entrants depuis l'ERP source. Les modes `-fetch-import` et `-fetch-all directory` parcourent ce dossier. |
| **`process/`** | Zone de travail pendant la transformation XML → UBL. Le framework lit, transforme et nettoie les fichiers de ce dossier. |
| **`ubl/`** | Fichiers de factures UBL 2.1 validés, prêts à être soumis. Le flux `-process <template> ... ubl` écrit ici. |
| **`single/`** | Sorties mono-document du mode `-process ... SINGLE`. |
| **`burst/`** | Sorties par sous-document du mode `-process ... BURST` (un fichier source produit plusieurs factures). |
| **`subtmpl/`** | Sous-modèles par template (fragments XSLT additionnels). |
| **`template/`** | Un sous-répertoire par modèle de document (`invoices/`, `credit_notes/`, …). Chacun contient le XSL maître, le RTF par document, des XML d'exemple et le bloc de surcharges client. |
| **`xslt/`** | Les bibliothèques XSL du framework (`ubl-common.xsl`, les packs de règles Schematron, le jeu de XSD). Rafraîchies à chaque mise à niveau. |
| **`.versions/`** | Suivi de version interne — la version du framework dont provient chaque fichier modèle. Utilisé par le flux de mise à niveau pour décider quoi rafraîchir. |

Les répertoires partagés `fonts/` et `images/` — un niveau au-dessus de l'environnement — sont référencés par chaque modèle qui s'appuie sur une police personnalisée ou inclut un logo. Les partager entre environnements permet qu'une mise à jour se propage partout.

---

## Plusieurs environnements par hôte

La convention recommandée est **un environnement par cas d'usage** — typiquement `demo`, `uat`, `prod`. Chacun s'exécute comme son propre processus JVM sur son propre port, avec sa propre configuration et son propre état.

```bash title="Linux / macOS"
# Après avoir installé le JAR + wrapper dans /opt/nomaubl/
./nomaubl.sh install /opt/nomaubl/demo
./nomaubl.sh install /opt/nomaubl/uat
./nomaubl.sh install /opt/nomaubl/prod
```

```cmd title="Windows"
REM Après avoir installé le JAR + wrapper dans C:\nomaubl\
nomaubl.cmd install C:\nomaubl\demo
nomaubl.cmd install C:\nomaubl\uat
nomaubl.cmd install C:\nomaubl\prod
```

La première installation crée `fonts/` et `images/` à côté du JAR. La deuxième et la troisième les réutilisent — la commande d'installation détecte les ressources partagées existantes et les ignore.

Après trois installations :

```text
<app-home>/
├── <jar>               ← nomaubl.jar ou nomaubl-fat.jar
├── <wrapper>           ← nomaubl.sh ou nomaubl.cmd
├── fonts/              ← partagé
├── images/             ← partagé
├── demo/               ← env 1
├── uat/                ← env 2
└── prod/               ← env 3
```

Chaque environnement a ensuite besoin de :

- Sa propre configuration (voir [Configurer](./configure.md)) — câblée depuis l'UI Settings : une base / un schéma différents par environnement, un modèle de PA différent, etc.
- Son propre port HTTP au démarrage (`./nomaubl.sh start uat 8091` ou `nomaubl.cmd start uat 8091`).
- Ses propres sources de données (répertoires d'entrée, serveurs FTP, jobs BIP).

La commande `status` du wrapper les affiche tous d'un coup :

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

---

## Relancer l'installation

`-install` peut **être relancé sans risque** sur un environnement existant :

| Ce que la relance fait | Ce qu'elle ne fait pas |
|---|---|
| Recréer tout sous-répertoire manquant. | Écraser `config.json` / `xdo.cfg` / `config-documents.json` / `config-lists.json` — ces fichiers sont conservés tels quels. |
| Rafraîchir les fichiers du framework XSL dans `xslt/` à la version embarquée dans le JAR. | Toucher aux personnalisations par modèle sous `template/<name>/`. |
| Recréer `fonts/` et `images/` partagés si l'un manque. | Écraser les polices placées manuellement dans ces répertoires. |

Pour une **reconstruction propre**, supprimer d'abord le répertoire de l'environnement :

```bash title="Linux / macOS"
./nomaubl.sh stop demo               # arrête le service
rm -rf /opt/nomaubl/demo             # supprime l'env (PERD la config + les templates personnalisés)
./nomaubl.sh install /opt/nomaubl/demo
```

```cmd title="Windows"
nomaubl.cmd stop demo
rmdir /S /Q C:\nomaubl\demo
nomaubl.cmd install C:\nomaubl\demo
```

Attention — cette opération supprime le modèle de PA configuré, les surcharges XSL client et l'historique de mise à niveau. Réserver les reconstructions propres aux environnements réellement jetables (un `demo` vanille).

Pour **migrer un environnement existant vers une nouvelle version du JAR**, utiliser la commande `upgrade <env>` du wrapper — voir [Mise à niveau](./upgrade.md) pour la procédure complète.

---

## Pièges d'installation fréquents

| Erreur | Symptôme | Correctif |
|---|---|---|
| Lancer `-install` en `root`. | Les fichiers créés appartiennent à root ; l'utilisateur de service ne peut pas y écrire. | Lancer l'installation sous l'utilisateur de service `nomaubl` dédié. |
| Installer le JAR ailleurs que là où le wrapper l'attend. | `nomaubl.sh start demo` (ou `nomaubl.cmd start demo`) indique `Config not found: <script_dir>/demo/config/config.json`. | Garder le JAR à côté du wrapper, avec un sous-répertoire d'environnement par environnement. |
| Réutiliser un nom d'environnement qui ne correspond pas au répertoire. | `./nomaubl.sh start prod` (ou `nomaubl.cmd start prod`) échoue car le répertoire est nommé `production`. | Le basename doit correspondre — renommer le répertoire ou choisir le bon nom d'environnement. |
| Lancer `-install` sur un environnement à moitié supprimé. | Les fichiers de configuration restants de la tentative précédente l'emportent silencieusement — l'installation ne peut pas les écraser. | Vider proprement `<targetDir>` avant de réinstaller. |
| Le système de fichiers de l'hôte est insensible à la casse (Windows / macOS). | `start DEMO` se résout vers le même répertoire que `start demo`. | Choisir une convention de casse et s'y tenir — le système de fichiers Linux y est sensible. |

---

## Et ensuite

- [Configurer](./configure.md) — démarrer le service, se connecter et câbler chaque connecteur depuis l'UI Settings.
- [Service et systemd](./service-and-systemd.md) — démarrer le service, le raccorder éventuellement à systemd.
