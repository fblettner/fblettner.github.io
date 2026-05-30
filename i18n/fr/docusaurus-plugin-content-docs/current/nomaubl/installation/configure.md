---
title: Configurer
description: "Après l'installation, chaque connecteur, intervalle d'ordonnanceur et paramètre opérationnel se configure depuis l'interface Settings — sans édition manuelle des fichiers de configuration. Démarrer le service, se connecter, puis parcourir la section Configuration."
keywords: [NomaUBL, configurer, post-installation, interface Settings, connecteurs base de données, connecteurs API, connecteurs FTP, paramètres système]
---

# Configurer

La configuration post-installation de NomaUBL se fait **intégralement depuis l'interface Settings**. Chaque connexion base de données, point d'accès API, serveur FTP, intervalle d'ordonnanceur et paramètre global dispose de son propre écran d'édition — aucune retouche manuelle de `config.json` n'est nécessaire.

Le déroulé est le suivant :

1. L'étape `install` ([Installation et arborescence](./install-and-layout.md)) écrit un `config.json` initial avec des emplacements de connecteurs vides.
2. Le service se démarre via le wrapper — `./nomaubl.sh start <env>` sous Linux / macOS, `nomaubl.cmd start <env>` sous Windows. Voir [Supervision du service](./service-and-systemd.md). Le service démarre même sans identifiants ; l'interface web propose alors un panneau Settings prêt à être renseigné.
3. Après connexion (l'utilisateur `admin` par défaut est créé au premier démarrage), ouvrir Settings et configurer chaque connecteur depuis son écran dédié.

Cette page est la **carte de transition** entre l'installation et la section Configuration existante. Chaque lien ci-dessous renvoie à un écran à parcourir pour rendre le service opérationnel.

---

## Où se configure quoi

| Sujet | Page de configuration | Ce qui se renseigne |
|---|---|---|
| **Base de données propre de NomaUBL** (les tables F564* — factures, cycle de vie, authentification, notifications). | [Configuration → Database Connectors → NomaUBL](../configuration/database-connectors/nomaubl.md) | URL JDBC, identifiants, schéma, catalogue de tables, action *Initialize* en un clic pour amorcer le schéma. Oracle et PostgreSQL sont pris en charge. |
| **Base de données source JD Edwards** (lectures BIP / archive — installations JDE uniquement). | [Configuration → Database Connectors → JD Edwards](../configuration/database-connectors/jdedwards.md) | URL JDBC, identifiants, noms des tables BIP. À ignorer pour les installations hors JDE. |
| **Plateforme Agréée** (API REST) ainsi que toute autre API utilisée par l'installation. | [Configuration → API Connectors](../configuration/api-connectors.md) | URL de base, authentification (OAuth2 / Bearer / Basic / clé API), catalogue d'endpoints avec testeur intégré. |
| **Source FTP / SFTP** (en cas d'extraction de fichiers spool via FTP). | [Configuration → FTP Connectors](../configuration/ftp-connectors.md) | Hôte, port, identifiants, répertoire de base. |
| **Lectures SQL personnalisées** (ERP source hors JDE — SAP, NetSuite, ERP personnalisé). | [Configuration → SQL Connectors](../configuration/sql-connectors.md) | SQL par requête avec paramètres de liaison. |
| **Paramètres système** — répertoire applicatif, répertoires de batch, SMTP, assistant IA, licence, intervalles d'ordonnanceur. | [Configuration → System → Global](../configuration/system/global.md) | Six onglets : Directories, Processing, SMTP, AI, License & auth, Scheduler. |
| **Paramètres e-invoicing** (choix du gabarit PA, validation, mode d'envoi). | [Configuration → System → E-invoicing](../configuration/system/einvoicing.md) | Valeurs par défaut par environnement. |
| **Paramètres e-reporting**. | [Configuration → System → E-reporting](../configuration/system/ereporting.md) | Même structure. |
| **E-directory** (recherche PPF + INSEE). | [Configuration → System → E-directory](../configuration/system/edirectory.md) | Endpoint / identifiants. |
| **Ordonnanceur fetch-invoices** (filtres de rapports BIP qui pilotent les exécutions `-fetch-all bip`). | [Configuration → System → Fetch invoices](../configuration/system/fetch-invoices.md) | Filtres par rapport. |
| **Types de documents** et **statuts**. | [Configuration → System → Document types](../configuration/system/document-types.md) / [Statuses](../configuration/system/statuses.md) | Éditeurs de catalogue. |
| **Listes de référence, listes personnalisées, vues de liste**. | [Configuration → Reference lists](../configuration/reference-lists.md) et pages associées. | Éditeurs par liste. |
| **Utilisateurs et rôles**. | [Configuration → Security → Users](../configuration/security/users.md) / [Roles](../configuration/security/roles.md) | Identité et autorisations. |

---

## L'ordre pragmatique

Pour monter un environnement neuf, parcourir les écrans dans cet ordre :

1. **[Database Connectors → NomaUBL](../configuration/database-connectors/nomaubl.md)** — premier raccordement à faire. L'onglet *Initialize* crée chaque table NomaUBL et provisionne l'utilisateur `admin` par défaut ; sans cela, rien d'autre ne peut fonctionner.
2. **[Database Connectors → JD Edwards](../configuration/database-connectors/jdedwards.md)** — uniquement si la source est JDE ; à ignorer sinon.
3. **[API Connectors](../configuration/api-connectors.md)** — raccorder la Plateforme Agréée. Le testeur intégré permet de confirmer le bon fonctionnement de l'authentification avant de poursuivre.
4. **[System → Global](../configuration/system/global.md)** — SMTP pour les notifications sortantes, clé IA optionnelle, intervalles d'ordonnanceur.
5. **[System → E-invoicing](../configuration/system/einvoicing.md)** + **[E-reporting](../configuration/system/ereporting.md)** — choix du gabarit PA et des valeurs par défaut.
6. **[Security → Users](../configuration/security/users.md)** — remplacer l'`admin` par défaut par des comptes nominatifs.

Le reste peut attendre qu'un document réel circule dans la chaîne.

---

## Ce qui se trouve sur disque

`config.json`, `xdo.cfg`, `config-documents.json` et `config-lists.json` se trouvent dans `<envDir>/config/` — ils forment le **stockage** derrière l'interface Settings. Chaque enregistrement depuis un écran de l'interface réécrit l'un de ces fichiers ; en pratique, ils ne s'ouvrent jamais dans un éditeur de texte.

Les deux cas où l'accès direct au fichier se justifie :

| Cas | Quoi |
|---|---|
| Promouvoir un environnement entièrement configuré vers un nouveau serveur. | Copier l'ensemble du répertoire `<envDir>/config/` ainsi que le fichier `.nomaubl-master.key`. La prochaine installation sur la machine cible réutilise la configuration existante (l'installeur ignore les fichiers déjà présents). |
| Restauration depuis sauvegarde. | Idem — les quatre fichiers de configuration et la clé maîtresse forment l'état canonique. À conserver avec la sauvegarde base de données. |

Pour les **valeurs secrètes chiffrées** (blocs `ENC:<…>` dans la configuration enregistrée), le fichier de clé maîtresse `<envDir>/.nomaubl-master.key` est ce qui les déchiffre. **Il est essentiel de le sauvegarder en parallèle de la configuration** — sa perte oblige à ressaisir chaque identifiant à la main.

---

## Quand quelque chose ne fonctionne pas

Chaque écran de configuration porte son propre bouton *Test connection* (ou *Test endpoint*, *Validate schema*, selon le connecteur). Il convient de s'en servir — ces tests sont plus fiables qu'une lecture de log pour diagnostiquer une coquille dans une URL JDBC ou une portée OAuth manquante.

Pour un diagnostic plus profond — *le service ne démarre pas*, *l'ordonnanceur ne s'active pas*, *la base renvoie Connection refused* — se reporter à [Monitoring → Service et logs](../monitoring/service-and-logs.md) et à [Management → Ligne de commande](../management/command-line.md).

---

## Et ensuite

- [Service et systemd](./service-and-systemd.md) — rendre le service persistant au démarrage.
- [Configuration → Database Connectors → NomaUBL](../configuration/database-connectors/nomaubl.md) — le premier raccordement à faire.
- [Monitoring → Overview](../monitoring/overview.md) — ce qu'il convient de surveiller une fois le service en marche.
