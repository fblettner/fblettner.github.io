---
title: Base NomaUBL
description: "Configurer la connexion à la base applicative NomaUBL (Oracle ou PostgreSQL) : URL JDBC, identifiants, schéma, noms de tables et initialisation en un clic."
keywords: [NomaUBL, base de données, Oracle, PostgreSQL, JDBC, schéma, tables, F564230, F564231, F564233, initialisation, bootstrap]
---

# Base NomaUBL

Cet écran configure l'accès à la **base de données dans laquelle NomaUBL stocke ses données** : paramètres de connexion JDBC, identifiants, schéma et noms des tables utilisées. **Oracle** et **PostgreSQL** sont supportés.

Les tables stockent les en-têtes de facture, les lignes, le récapitulatif TVA, les événements de cycle de vie, les résultats de validation et les journaux d'exécution. Les noms par défaut suivent la convention JDE (`F564230` et suivants), hérités du déploiement initial aux côtés de JD Edwards, mais restent entièrement configurables — le connecteur fonctionne aussi bien hors contexte JDE.

L'éditeur comporte **trois onglets** :

1. **Connection** — type de base, URL JDBC, identifiants.
2. **Tables** — schéma, noms de tables, stratégie de stockage des détails.
3. **Initialize** — création en un clic des tables NomaUBL et provisionnement de l'utilisateur admin et des rôles par défaut.

---

## Onglet 1 — Connection

### Connection

| Champ | Valeurs | Description |
|---|---|---|
| **Database Type** | `Oracle` / `PostgreSQL` | Type de moteur. Détermine le format d'URL JDBC et les placeholders par défaut. |
| **JDBC URL** | texte | Chaîne de connexion JDBC complète. Le format dépend du type de base : `jdbc:oracle:thin:@host:1521/service_name` pour Oracle, `jdbc:postgresql://host:5432/database_name` pour PostgreSQL. |

### Credentials

| Champ | Description |
|---|---|
| **DB User** | Compte de base de données disposant des privilèges nécessaires pour lire et écrire dans l'ensemble des tables NomaUBL (et les créer lors de l'initialisation). |
| **DB Password** | Mot de passe associé au compte de base. |

---

## Onglet 2 — Tables

### Schema

| Champ | Description |
|---|---|
| **Schema** | Schéma de base contenant toutes les tables NomaUBL (par ex. `public` sur PostgreSQL, la library / owner JDE sur Oracle). Tous les noms de tables ci-dessous sont résolus dans ce schéma. |

### Table Names

NomaUBL répartit ses données sur sept tables. Les valeurs par défaut suivent la convention JDE `F564xxx`, mais tout autre nom est utilisable tant que le compte de base dispose des droits appropriés.

| Champ | Défaut | Contenu |
|---|---|---|
| **Log / Archive** | `F564230` | Journal d'archive persistant de chaque exécution de traitement. |
| **Runtime Log** | `F564237` | Journal d'exécution courant utilisé par la visionneuse de logs intégrée. |
| **Invoice Header** | `F564231` | Une ligne par facture avec ses identifiants, totaux, statut, données d'adressage. |
| **Invoice Lines** | `F564233` | Lignes de facture (lorsque *Detail Storage* est positionné à `db`). |
| **VAT Summary** | `F564234` | Récapitulatif TVA par catégorie (lorsque *Detail Storage* est positionné à `db`). |
| **Lifecycle** | `F564235` | Historique des changements de statut de chaque facture (transitions entre codes réglementaires). |
| **Validation** | `F564236` | Résultats de validation Schematron / règles métier par facture. |

### Detail Storage

Contrôle **la persistance des lignes de facture et du récapitulatif TVA**.

| Champ | Valeurs | Description |
|---|---|---|
| **Lines & VAT** | `Save to Database` / `Save UBL Only` | `db` = écriture des lignes et de la TVA dans `F564233` / `F564234` (interrogeables en SQL) ; `ubl` = pas d'écriture dans les tables de détail, lignes et TVA extraites à la demande depuis le document UBL stocké. |

`Save to Database` est le choix recommandé quand des outils de reporting interrogent directement la base. `Save UBL Only` réduit le volume d'écriture et fait du document UBL la source unique pour les données de niveau ligne.

---

## Onglet 3 — Initialize

Initialisation en un clic d'une base NomaUBL vierge.

| Élément | Description |
|---|---|
| Bouton **Initialize Database** | Crée toutes les tables NomaUBL absentes et provisionne l'utilisateur admin par défaut ainsi que les rôles. |
| **Zone de log** | Affiche la sortie de l'exécution (tables créées, utilisateurs provisionnés, erreurs). |

L'opération peut être lancée plusieurs fois sans risque : les tables et utilisateurs déjà présents ne sont pas modifiés. Typiquement une fois sur un nouveau déploiement, puis après chaque montée de version NomaUBL qui introduit une nouvelle table.

---

## Conseils & bonnes pratiques

- **Choisir le type de base avant de saisir l'URL JDBC.** Le placeholder et l'aide s'adaptent au type sélectionné, ce qui évite les erreurs de format.
- **Utiliser un compte DB dédié.** Lui accorder `SELECT / INSERT / UPDATE / DELETE` sur le schéma NomaUBL, et le droit `CREATE TABLE` pour l'initialisation.
- **Conserver les noms par défaut `F564xxx` en cohabitation avec JDE.** Les jointures avec les tables JDE dans les outils de reporting restent ainsi directes.
- **Préférer un nommage personnalisé en mode autonome.** Hors contexte JDE (par exemple sur PostgreSQL), des noms comme `nomaubl_invoice_header` se lisent mieux dans la console d'administration.
- **Conserver Detail Storage à `db` par défaut.** Cela permet un reporting SQL direct sur les lignes et la TVA, sans avoir à analyser le document UBL à chaque requête.
- **Relancer Initialize après chaque montée de version.** Les nouvelles versions de NomaUBL peuvent ajouter des tables ; le script idempotent les prend en compte sans toucher aux données existantes.
