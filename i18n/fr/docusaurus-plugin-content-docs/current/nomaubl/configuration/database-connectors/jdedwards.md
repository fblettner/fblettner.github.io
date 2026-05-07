---
title: JD Edwards
description: "Configurer l'accès à la base JD Edwards interrogée par NomaUBL lors de l'extraction des sorties BIP : URL JDBC, identifiants, schéma, noms des tables BIP et gestion de l'enregistrement après extraction."
keywords: [NomaUBL, JD Edwards, JDE, base de données, JDBC, Oracle, BIP, BI Publisher, F95630, F95631, F9563110, BLOB, extraction, XDJOBNBR, RJJOBNBR]
---

# JD Edwards

Cet écran configure l'accès à la **base JD Edwards** que NomaUBL interroge pendant l'extraction des **sorties BIP (BI Publisher)** — BLOB XML de données et PDF générés. Il définit la connexion JDBC, les identifiants, le schéma cible et les trois tables BIP JDE que NomaUBL parcourt pour récupérer le payload d'un job.

:::info[Page spécifique à JD Edwards]
Cette page fait partie des composants **spécifiques à JDE** de NomaUBL. Les autres pages de Configuration sont indépendantes de la source (JDE, SAP, NetSuite, ERP personnalisé) ; celle-ci ne s'applique que quand la source est JD Edwards.
:::

L'éditeur comporte **deux onglets** :

1. **Connection** — URL JDBC, identifiants, gestion de l'enregistrement après extraction.
2. **Tables** — schéma et noms des trois tables BIP JDE.

---

## Onglet 1 — Connection

### Connection

| Champ | Description |
|---|---|
| **JDBC URL** | Chaîne de connexion JDBC Oracle vers la base JDE (par ex. `jdbc:oracle:thin:@dbserver:1521/jde92t`). Format : `jdbc:oracle:thin:@host:port/service_name`. |

### Credentials

| Champ | Description |
|---|---|
| **DB User** | Compte de base JDE disposant des droits `SELECT` (et `DELETE` / `UPDATE` selon le réglage Remove RD) sur les tables BIP. |
| **DB Password** | Mot de passe associé au compte de base. |

### BIP Extraction

Action effectuée par NomaUBL sur l'**enregistrement de définition de report** BIP après une extraction réussie.

| Champ | Valeurs | Description |
|---|---|---|
| **Remove RD** | `NO` / `REMOVE` / `UPDATE` | `NO` = l'enregistrement reste en place ; `REMOVE` = suppression de l'enregistrement dans `F9563110` ; `UPDATE` = réécriture du PDF généré dans la colonne BLOB (PDF uniquement). |

Choisir `NO` pendant la validation d'une intégration, passer à `REMOVE` une fois la chaîne fiabilisée (la file reste propre), et n'utiliser `UPDATE` que quand des consommateurs JDE en aval attendent de retrouver le PDF généré dans le BLOB.

---

## Onglet 2 — Tables

### Schema

| Champ | Description |
|---|---|
| **Schema SY** | Schéma *System* JDE où se trouvent les trois tables BIP (par ex. `SY920`). Tous les noms de tables ci-dessous sont résolus dans ce schéma. |

### Table Names

NomaUBL n'a besoin que d'un accès en lecture sur trois tables BIP JDE pour récupérer la sortie complète d'un job. Les valeurs par défaut suivent la nomenclature JDE.

| Champ | Défaut | Rôle |
|---|---|---|
| **F95630 – XMLP Data Output Repository** | `F95630` | Contient les **BLOB XML** (`xdrpdubblb`). Sert de clé de jointure pour la récupération du PDF. Colonne clé du job : `XDJOBNBR`. |
| **F95631 – XMLP Output Repository** | `F95631` | Contient les **BLOB PDF** (`xorpdxpblb`). Joint à `F95630` sur les colonnes GUID de sortie. |
| **F9563110 – Report Definition Job Control** | `F9563110` | Trace la requête de job report BIP. Supprimé par NomaUBL quand **Remove RD = `REMOVE`**. Colonne clé du job : `RJJOBNBR`. |

Le parcours est direct : NomaUBL identifie les jobs candidats dans `F9563110`, récupère le BLOB XML correspondant dans `F95630`, puis joint `F95631` sur le GUID de sortie pour obtenir le PDF.

---

## Conseils & bonnes pratiques

- **Séparer le compte BIP d'un compte métier JDE classique.** Un compte de base dédié simplifie l'audit et la révocation.
- **Accorder le strict minimum de privilèges en cohérence avec Remove RD.** `SELECT` suffit pour `NO` ; ajouter `DELETE` pour `REMOVE` ; ajouter `UPDATE` pour `UPDATE`.
- **Valider l'URL JDBC avec un client SQL avant enregistrement.** Les fautes de frappe dans la chaîne de connexion sont la première cause d'échec d'authentification.
- **Ne surcharger les noms de tables qu'en cas de renommage côté JDE.** Une installation JDE standard utilise toujours `F95630` / `F95631` / `F9563110` ; toute différence indique une personnalisation JDE.
- **Utiliser `Remove RD = REMOVE` en production.** Conserver indéfiniment les jobs traités dans `F9563110` alourdit la file et ralentit les interrogations BIP suivantes.
