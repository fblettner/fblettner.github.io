---
title: Prérequis
description: "Ce que l'hôte doit posséder avant d'installer NomaUBL — JDK 17, une base Oracle ou PostgreSQL, matrice des OS pris en charge, ports, permissions du système de fichiers et la couche reverse proxy / TLS optionnelle."
keywords: [NomaUBL, prérequis, conditions requises, JDK 17, Oracle, PostgreSQL, Linux, Windows, ports, reverse proxy, nginx, JD Edwards]
---

# Prérequis

Ce qui doit être en place sur l'hôte **avant** de lancer `-install`. Vérifier chaque ligne sur le serveur cible ; les éléments manquants sont la cause la plus fréquente d'une première installation ratée.

---

## Runtime Java

| Besoin | Notes |
|---|---|
| **JDK 17** (LTS) | Version minimale requise. Le JAR est compilé pour Java 17 — les JDK plus anciens refusent de le charger. Les versions LTS plus récentes (21) fonctionnent aussi. |
| **`java -version`** affiche `17` (ou supérieur). | Test rapide. |
| **`JAVA_HOME`** défini | Utile mais pas obligatoire. Le script `nomaubl.sh` appelle `java` depuis le `PATH` ; fixer la version via `update-alternatives` (Linux) ou un lien symbolique. |

Distributions recommandées : **Eclipse Temurin**, **Amazon Corretto**, **Oracle JDK**. Tout build OpenJDK 17 convient.

```bash
# Ubuntu / Debian
sudo apt install openjdk-17-jre-headless

# Rocky / RHEL
sudo dnf install java-17-openjdk-headless

# macOS (dev)
brew install --cask temurin@17

# Vérification
java -version
# openjdk version "17.0.x" ...
```

---

## Base de données

NomaUBL enregistre le cycle de vie de chaque facture dans son propre jeu de tables. **Oracle** et **PostgreSQL** sont tous deux pris en charge — retenir celui que l'équipe d'exploitation maîtrise déjà. Les noms de tables par défaut suivent la convention JDE (`F564230` … `F564262`), mais chaque table et chaque colonne se paramètre depuis l'écran [Base de données NomaUBL](../configuration/database-connectors/nomaubl.md) ; le même schéma s'adapte donc parfaitement à un contexte hors JDE.

Les formes de déploiement prises en charge :

| Forme | Quand |
|---|---|
| **Même instance de base de données que l'ERP source** | Quand la base existante dispose de capacité résiduelle. NomaUBL reçoit son propre schéma ; les schémas sources restent intacts. Pattern typique des installations JDE. |
| **Instance dédiée à NomaUBL** | Séparation nette. Les tables NomaUBL résident dans leur propre base ; NomaUBL accède à l'ERP source via des connecteurs supplémentaires. |
| **Une instance de base, plusieurs environnements** | Une seule instance Oracle ou PostgreSQL peut héberger plusieurs environnements NomaUBL — chacun dans son propre schéma ou avec un préfixe par environnement. |

### Versions prises en charge

| Moteur | Versions |
|---|---|
| **Oracle** | 19c, 21c, 23ai (testées). 12c R2 est la version minimale. |
| **PostgreSQL** | Versions modernes maintenues (13+). |

### Privilèges du schéma

L'utilisateur de schéma NomaUBL a besoin des droits DDL + DML standards — les instructions `GRANT` diffèrent entre Oracle et PostgreSQL, mais l'intention est la même :

| Capacité | Pourquoi |
|---|---|
| **Créer tables, index, séquences** (Oracle : `CREATE TABLE`, `CREATE INDEX`, `CREATE SEQUENCE` ; PostgreSQL : `CREATE` sur le schéma cible). | Le schéma est construit à la première installation et étendu à chaque mise à niveau. |
| **Créer des vues**. | Quelques vues utilitaires alimentent les widgets du tableau de bord. |
| **Quota tablespace / disque généreux** (Oracle : `UNLIMITED TABLESPACE` ; PostgreSQL : espace suffisant sur le tablespace cible). | Les données de cycle de vie des factures et les charges utiles UBL croissent régulièrement. |
| **Connexion / login**. | Évident. |
| **Accès en lecture aux tables F* de JD Edwards** *(installations JDE uniquement)*. | Uniquement en cas d'extraction depuis la BIP Print Queue ou l'archive — requis par `-extract` et les modes `fetch-*` associés. Accorder `SELECT` sur `F9563110`, `F95630`, `F95631`, `F564111`, etc., selon le flux source. |

Pour les installations SAP / NetSuite / ERP personnalisé, les privilèges base de données dépendent du connecteur de lecture configuré (requêtes SQL, endpoints REST) — voir [Configuration → Connecteurs SQL](../configuration/sql-connectors.md).

### Vérification de l'accessibilité

Confirmer que la base est joignable depuis l'hôte NomaUBL **avant** de lancer `-install`. Utiliser le client préféré du DBA :

```bash
# Oracle (SQL*Plus)
sqlplus nomaubl/<password>@//db.corp.local:1521/ORCL <<<"SELECT 'OK' FROM dual;"

# PostgreSQL (psql)
psql "postgresql://nomaubl:<password>@db.corp.local:5432/nomaubl" -c "SELECT 'OK';"
```

Si la connexion échoue ici, NomaUBL n'aidera pas — corriger d'abord le problème de réseau, de listener ou de `pg_hba.conf`. L'URL JDBC elle-même est saisie plus tard dans l'écran de paramétrage [Base de données NomaUBL](../configuration/database-connectors/nomaubl.md), et non dans un fichier de configuration.

---

## Système d'exploitation

| OS | Statut |
|---|---|
| **Linux** — Ubuntu / Debian / Rocky / RHEL | Cible principale. Les déploiements de production s'exécutent sous Linux. |
| **Windows Server** | Pris en charge. Enregistrement du service via `sc.exe` ou un wrapper comme NSSM en remplacement de systemd. |
| **macOS** | Dev uniquement — adapté à l'évaluation, pas à la production. |
| **Solaris / AIX** | Non testé. Devrait fonctionner si l'Oracle JDK est disponible ; pas de prise en charge officielle. |

### CPU / mémoire

| Empreinte | Notes |
|---|---|
| **2 vCPU** | Confortable pour un environnement traitant quelques milliers de factures par jour. |
| **4 Go RAM** | Les valeurs par défaut de la JVM sont calibrées pour cette taille. Augmenter `-Xmx` pour de très gros batchs. |
| **Disque : 10 Go** | Le JAR (~200 Mo) + l'état par environnement (template/, ubl/, logs/, snapshots/). Croît avec les fichiers UBL conservés. |

Multiplier par le nombre d'environnements par hôte — trois environnements (`demo`, `uat`, `prod`) sur le même serveur signifient trois processus JVM.

---

## Ports

| Port | Usage | Sens |
|---|---|---|
| **8090** *(ou la valeur fixée par environnement)* | Interface web NomaUBL + API REST. | Entrant depuis les opérateurs (et depuis le reverse proxy le cas échéant). |
| **1521** *(Oracle)* ou **5432** *(PostgreSQL)* | JDBC. | Sortant de NomaUBL vers la base de données. |
| **443** | Soumission à la PA (HTTPS). | Sortant de NomaUBL vers la Plateforme Agréée. |
| **21 / 22** | Canaux source FTP / SFTP. | Sortant de NomaUBL en cas d'utilisation de la source `ftp`. |

Pour les installations multi-environnements, allouer des ports consécutifs : `8090` pour `demo`, `8091` pour `uat`, `8092` pour `prod` — même forme `nomaubl.sh start <env> <port>`.

---

## Arborescence du système de fichiers

NomaUBL attend un **répertoire unique accessible en écriture** qui contient à la fois le JAR et un sous-répertoire par environnement.

```
/opt/nomaubl/              ← appartient à l'utilisateur de service, accessible en écriture
├── nomaubl.jar
├── nomaubl.sh
├── fonts/                 ← partagé entre les environnements (créé par -install)
├── images/                ← partagé entre les environnements (créé par -install)
├── demo/                  ← un environnement
│   ├── config/
│   ├── input/   process/   ubl/   single/   subtmpl/
│   ├── template/  xslt/   .versions/
│   └── ...
├── uat/                   ← un autre environnement
└── prod/                  ← environnement de production
```

| Sujet | Quoi définir |
|---|---|
| **Propriétaire** | Un utilisateur dédié `nomaubl` (ou la convention ops en vigueur). NE JAMAIS exécuter en `root`. |
| **Permissions** | `750` sur la racine ; les fichiers sensibles (fichier de master-key, configuration sauvegardée) en `640`. |
| **Sauvegarde** | Le répertoire `prod/` est critique pour la sauvegarde — il contient la configuration par environnement, les fichiers UBL conservés, les snapshots et l'historique des mises à niveau. À sauvegarder en parallèle de la base de données. |

---

## Reverse proxy optionnel

Pour un déploiement exposé en production, NomaUBL est généralement placé derrière un reverse proxy :

| Reverse proxy | Pourquoi |
|---|---|
| **nginx** | Le choix classique sous Linux. Terminaison TLS, nom d'hôte lisible (`nomaubl.example.com`), redirection HTTP→HTTPS, journalisation des requêtes. |
| **Traefik** | Quand Traefik s'exécute déjà sur l'hôte pour d'autres services. |
| **Apache httpd** | Si l'équipe ops exploite déjà Apache. |
| **Un load balancer cloud** (AWS ALB, GCP LB, Azure AG) | Quand le déploiement se fait dans un environnement cloud managé. |

Un extrait minimal de configuration nginx pour un environnement :

```nginx
# /etc/nginx/sites-available/nomaubl.conf
server {
    listen 443 ssl http2;
    server_name nomaubl.example.com;

    ssl_certificate     /etc/letsencrypt/live/nomaubl.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/nomaubl.example.com/privkey.pem;

    # Augmenter la taille d'upload pour les gros batchs UBL
    client_max_body_size 64M;

    location / {
        proxy_pass http://127.0.0.1:8090;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
    }
}

server {
    listen 80;
    server_name nomaubl.example.com;
    return 301 https://$server_name$request_uri;
}
```

Sans reverse proxy, NomaUBL sert uniquement HTTP sur le port configuré — acceptable pour une installation intranet, pas pour un déploiement exposé publiquement.

---

## Ce que NomaUBL ne réclame PAS

À mentionner pour éviter toute préparation excessive :

| Non requis | Pourquoi |
|---|---|
| Docker / Kubernetes. | Le JAR s'exécute comme un simple processus Java. Le conteneuriser reste possible si la norme ops l'exige ; rien dans NomaUBL n'en dépend. |
| Maven / Gradle sur l'hôte. | Le JAR est livré déjà construit. Les outils de build ne sont nécessaires qu'en compilation depuis les sources. |
| Node.js. | L'interface web est embarquée dans le JAR (une application React précompilée). |
| Un serveur web séparé (Tomcat, WildFly). | NomaUBL intègre son propre serveur HTTP (`com.sun.net.httpserver`). |
| Accès Internet depuis l'hôte. | NomaUBL n'a besoin d'un accès réseau que vers : la base de données, les endpoints de la Plateforme Agréée, l'ERP source (en cas d'extraction). |

---

## Checklist pré-installation

Avant `-install` :

- [ ] `java -version` → 17 (ou LTS supérieur).
- [ ] La base de données choisie (Oracle ou PostgreSQL) est joignable depuis l'hôte, avec une requête de test fonctionnelle.
- [ ] Le répertoire cible (ex. `/opt/nomaubl/`) existe et appartient à l'utilisateur de service.
- [ ] Le port HTTP choisi est libre.
- [ ] (Optionnel) Le reverse proxy et le certificat TLS sont en place.
- [ ] (Optionnel) L'unité systemd est rédigée (pour que l'installation soit la seule étape manuelle).

Quand toutes les cases sont cochées, passer à [Installation et arborescence](./install-and-layout.md).

---

## Et ensuite

- [Installation et arborescence](./install-and-layout.md) — lancer `-install`, comprendre l'arborescence des répertoires.
- [Vue d'ensemble](./overview.md) — les étapes d'installation en un coup d'œil.
