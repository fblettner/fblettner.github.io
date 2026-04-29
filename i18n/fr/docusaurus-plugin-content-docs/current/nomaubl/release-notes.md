---
title: Notes de version
description: "Notes de version NomaUBL — toutes les évolutions visibles par l'utilisateur livrées dans la plateforme, version par version, en ordre chronologique inverse. Reflète la page Notes de version intégrée à l'application."
keywords: [NomaUBL, notes de version, changelog, version, e-reporting, journal de traitement, dashboard, AFNOR XP Z12-014, Schematron, RFE, Réforme de la Facturation Électronique]
---

# Notes de version

Toutes les évolutions visibles par les utilisateurs de NomaUBL — IHM, API REST, CLI, comportement — sont consignées ici. La version la plus récente apparaît en haut. Cette page reflète la carte **À propos de cette version** et l'écran *Notes de version* intégrés à l'application.

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '14px 18px', margin: '24px 0', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', alignItems: 'center'}}>
  <span style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', fontWeight: 700, opacity: 0.65, marginRight: '6px'}}>Versions</span>
  <a href="#v2026-04-2" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(74,158,255,0.45)', background: 'rgba(74,158,255,0.08)', color: '#4a9eff', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none'}}>2026.04.2 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-1" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.1 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v2026-04-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>2026.04.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· 2026-04-29</span></a>
  <a href="#v1-0-0" style={{padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.18)', color: 'inherit', fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, textDecoration: 'none', opacity: 0.85}}>1.0.0 <span style={{opacity: 0.65, fontFamily: 'inherit', fontWeight: 500}}>· Version initiale</span></a>
</div>

---

## 2026.04.2 — 2026-04-29 \{#v2026-04-2\}

### Validation

- Correctif : la re-validation d'une facture existante depuis **InvoiceDetailModal → Historique** (ainsi que le chemin `validateUblDirect`) échouait avec `cvc-elt.1.a: Cannot find the declaration of element 'Invoice'`. La `DocumentBuilderFactory` utilisée pour parser l'UBL n'était pas namespace-aware par défaut, et le validateur XSD ne pouvait donc pas associer `<Invoice>` / `<CreditNote>` au schéma UBL 2.1. `setNamespaceAware(true)` est désormais positionné sur les deux instances de parser.

---

## 2026.04.1 — 2026-04-29 \{#v2026-04-1\}

### Journal des traitements

- Le traitement UBL écrit désormais une paire `START` / `END` dans `F564237` afin que le Journal des traitements couvre ProcessUBL (`/api/process-ubl`), fetch-invoices en mode UBL et le CLI `-ubl` — comme le faisait déjà `-xml`. `FEMODE = PROCESS` pour ces lignes ; `FETMPL` reste vide (aucun template de document ne s'applique au traitement UBL).

### Page Validation UBL

- Correctif : l'upload d'un fichier UBL ne tombe plus dans `<input>/_ubl/` (substitution littérale de la sentinelle `_ubl`). L'upload utilise désormais le dossier conventionnel `<input>/ubl/`, en cohérence avec les endpoints fetch / list-files.
- Correctif : la validation d'un fichier UBL uploadé n'échoue plus avec `No such file or directory`. Le nom de base présent dans le formulaire est résolu vers `<dirInput>/ubl/` avant parsing ; les chemins absolus issus du navigateur de fichiers continuent de fonctionner.

### Validation

- Nouveau schematron **EXTENDED-CTC-FR** (FNFE-MPE `EXTENDED-CTC-FR-UBL-V1.3.0`) embarqué et câblé dans `UBLValidator`.
- Le schematron français appliqué est désormais piloté par `cbc:CustomizationID` (BT-24). Lorsque l'URN contient `EXTENDED` / `extension`, la règle EXTENDED-CTC-FR est exécutée **à la place de** EN 16931 + CIUS-FR (sur-ensemble dérivé qui assouplit volontairement certaines règles EN 16931 — `UBL-CR-550` est par exemple commentée pour autoriser `InvoiceLine/Delivery`). Pour toutes les autres valeurs, le comportement précédent est conservé : base EN 16931 + surcouche CIUS-FR (BR-FR Flux 2). CPRO-B2G continue de s'auto-déclencher sur `cbc:Note` `#ADN#B2G` quel que soit le profil.

### Configuration / UBL Defaults

- Nouvelle liste système `customization-ids` (BT-24) pré-remplie avec les URN françaises standard (base EN 16931, FNFE-MPE Basic / Extended CTC, Factur-X Minimum / Basic / Basic WL / Extended, Peppol BIS Billing 3) — pleinement éditable depuis **Settings → Customization IDs**.
- **UBL Defaults → Header** : BT-24 est désormais une liste déroulante alimentée par la liste `customization-ids` (la saisie libre reste accessible en repli si la liste est vide ou si la valeur n'est pas enregistrée).

### Mode replace

- Le retraitement en mode replace purge désormais `F564235` (cycle de vie) et `F564236` (erreurs de validation) en plus de `F564231` / `F564233` / `F564234`. Auparavant ces deux tables append-only continuaient à croître à chaque rejeu, mêlant un historique de cycle de vie périmé et des erreurs de validation obsolètes aux données du dernier run.
- Nouvelle méthode `UBLDatabaseHandler.purgeForReplace()` qui efface en une seule fois les cinq tables UBL pour un `(doc, dct, kco)` donné. Appelée par `UBLInvoiceProcessor.process` (chemin UBL) et `CustomUBL` (chemin XML) dès que `replaceMode=true`, de sorte que les deux chemins ont désormais une sémantique replace identique, quelle que soit la présence de la ligne F564230 préexistante.

---

## 2026.04.0 — 2026-04-29 \{#v2026-04-0\}

### E-Reporting (Flux 10.1 / 10.3)

- Nouvelle page **E-Reporting** au premier niveau : liste, modale de détail, dialogue de génération.
- Nouvelles tables `F564240`, `F564241`, `F564242` (configurables dans le paramétrage `db-nomaubl` ; créées par **Initialize Database**).
- Nouveau template système `e-reporting` + surcharges par société `e-reporting-{kco}` ; la soumission réutilise le token PA de `e-invoicing[-{kco}]` via le nouvel endpoint `report-import`.
- CLI : `-ereporting <config> [start=AAAAMMJJ] [end=AAAAMMJJ] [kco=...] [flux=10.1,10.3] [type=IN]`.
- Ordonnanceur d'arrière-plan : nouvelle tâche `ereportingInterval` dans `global`.
- Modale de détail : l'onglet Factures utilise un `DataTable` avec export CSV / Excel.
- Modale de détail : bouton de téléchargement du XML généré (remplace l'onglet XML inline).

### Journal des traitements

- Nouvelle entrée **Processing Log** sous le menu *Management*, basée sur `F564237`.
- Vue groupée (par défaut) : chaque traitement est replié sur une seule ligne `START → END` avec badge de statut, durée et liste dépliable des étapes intermédiaires ; la vue à plat est conservée pour les utilisateurs avancés.
- Barre d'outils : listes déroulantes pour **Mode** et **Modèle**, sélecteur de période (défaut : 7 derniers jours), recherche par nom de fichier.

### Dashboard

- Nouvelle carte **À propos de cette version** ancrée en bas du dashboard avec le numéro de version, la date de build, la version du profil AFNOR et les versions de chaque module Schematron (EN 16931, BR-FR Flux 2, BR-FR CPRO).

### Documentation

- Nouvelle page **Notes de version** (menu Documentation) qui affiche ce fichier.
- Maintenue en deux langues — `RELEASE.md` (anglais) et `RELEASE.fr.md` (français) embarqués dans le JAR ; la page sélectionne la bonne en fonction de la langue active de l'IHM.
- Sommaire en haut de page avec une vignette par version cliquable.
- Rendu Markdown maison avec prise en charge de la continuation paresseuse des listes (les puces réparties sur plusieurs lignes sont rendues comme un seul élément).

### Settings

- L'éditeur `db-nomaubl` expose les trois nouveaux noms de tables e-reporting (`tableEReporting`, `tableEReportingHist`, `tableEReportingMap`), avec les valeurs par défaut `F564240` / `F564241` / `F564242`.
- L'action **Initialize Database** crée désormais les trois tables e-reporting en plus des tables UBL / auth existantes.
- Le sélecteur de pages dans l'écran **Rôles** expose les nouvelles pages `processinglog` et `releasenotes` afin de pouvoir y donner accès aux rôles existants.

### Backend

- Défauts `DatabaseDialect.writeText` / `readText` — le XML est stocké en `CLOB` (Oracle) / `TEXT` (PostgreSQL) via `setString` / `getString` portables (évite le piège pgjdbc `getClob → OID`).
- `nodeToBytes` dans `UBLDatabaseHandler` force désormais `OutputKeys.INDENT="no"` afin que le XML écrit dans `F564230.FETXFT` ne soit pas pretty-printé par Saxon en mode fat-jar (même correctif que celui déjà appliqué à l'UBL).
- `/api/build-info` (public) retourne les métadonnées de version + les fichiers `RELEASE.md` / `RELEASE.fr.md` embarqués.

---

## 1.0.0 — Version initiale \{#v1-0-0\}

NomaUBL est une plateforme e-invoicing Java 17 + React qui transforme les sorties ERP (JD Edwards, SAP, NetSuite, ERP personnalisé) en documents **UBL 2.1** conformes, les valide, les soumet à une **Plateforme Agréée (PA)** française et trace l'intégralité du cycle de vie des factures.

### Pipeline principal (ERP source → UBL → PA)

- **Extraction du XML JDE** depuis la file d'attente BIP (`F95630` / `F95631` / `F9563110`), l'archive JDE, en SFTP ou depuis le système de fichiers local ; routage par template de type de document (`invoices`, `credit_notes`, …).
- **Transformation XSLT 2.0** via Saxon-HE — produit des factures et avoirs UBL 2.1 à partir d'un framework XSL configurable (`ubl-common.xsl` + `ubl-template.xsl`).
- **Validation** : XSD (UBL 2.1) + Schematron — **EN 16931**, **BR-FR Flux 2** (CIUS-FR / FNFE-MPE) et **BR-FR CPRO** (Chorus Pro pour le B2G), avec gestion des sévérités (`fatal`, `error`, `warning`, `info`).
- **Soumission PA** en HTTP (Java 11 `HttpClient`), token OAuth2 mis en cache et auto-rafraîchi sur 401, plus un canal SFTP de secours.
- **Surcharges PA par société** via les templates `e-invoicing-{kco}` — credentials, endpoints et tokens indépendants par société émettrice.
- **Pré-vérification annuaire PPF** (non bloquante) via le template `e-directory` — recherche le client avant envoi et signale en avertissement les destinataires injoignables.
- **Génération PDF** via Oracle BI Publisher (`oracle.xdo`) avec post-traitement Ghostscript optionnel, et embarquement iText du PDF en `cac:AdditionalDocumentReference` dans l'UBL.
- **PA factice** (`paUseMock=Y`) avec scénarios succès / échec / token expiré pour les tests bout-en-bout sans plateforme réelle.

### Stockage des documents, statuts et cycle de vie

Schéma Oracle / PostgreSQL (configurable dans `db-nomaubl`) :

| Table | Rôle |
|---|---|
| `F564230` | Archive source — XML JDE original, drapeaux de traitement |
| `F564231` | Entête UBL — champs BT-* EN 16931, XML UBL généré, statut courant |
| `F564233` | Lignes UBL |
| `F564234` | Synthèse TVA par catégorie / taux |
| `F564235` | Événements de cycle de vie (historique) |
| `F564236` | Erreurs de validation XSD / Schematron |
| `F564237` | Journal de traitement runtime (un événement START / END / erreur par ligne) |
| `F564250` / `F564251` / `F564252` | Utilisateurs / Rôles / Sessions |

- **DDL adaptée au dialecte** via `DatabaseDialect` — Oracle (`BLOB`, `NUMBER`, `VARCHAR2`) et PostgreSQL (`BYTEA`, `INTEGER`, `VARCHAR`).
- L'action **Initialize Database** dans *Settings* crée tout le schéma et provisionne les rôles `admin` / `viewer` par défaut.
- **Dates JDE Julian** stockées en entiers (`CYYDDD - 1900000`) et converties à la volée pour l'IHM.

### Catalogue de statuts factures

- 30+ codes couvrant le cycle de vie complet **AFNOR XP Z12-014 V1.3** : `STATUS_CREATED → STATUS_VALIDATED → STATUS_SENT_TO_PA → STATUS_PENDING → STATUS_DEPOSITED → …` plus les états litige, factoring et erreurs de routage.
- Codes workflow internes (`9900` – `9907`) et codes UNTDID 1373 mappés à la PA (`1`, `8`, `10`, `37`, `43`, `45` – `51`).
- Tous les codes / libellés / mappings PA sont **pilotés par les données** depuis le template système `statuses` — éditables dans *Settings*.
- `StatusTransition.apply()` met à jour `F564231` et insère un événement `F564235` en un seul appel.

### CLI

Modes interactifs et batch — tous pilotés par un unique `config.json` :

| Mode | Rôle |
|---|---|
| `-config` | Ouvre l'IHM Swing (FlatLaf dark) |
| `-xml` | Traite des fichiers XML JDE : SINGLE / BURST / UBL / AUTO |
| `-ubl` | Valide + charge en base des fichiers UBL existants |
| `-fetch-single`, `-fetch-all` | Récupère depuis BIP / archive / répertoire + traitement |
| `-fetch-import` | Interroge la PA sur le statut des factures en attente (9906) |
| `-fetch-status` | Récupère les événements de cycle de vie depuis la PA et met à jour la base |
| `-extract` | Extrait les fichiers d'entrée / sortie d'un job BIP JDE |
| `-serve` | Serveur HTTP embarqué + ordonnanceur d'arrière-plan |
| `-install` | Provisionne l'arborescence d'un environnement |
| `-password` | Encode un mot de passe pour stockage |
| `-updUser` | Met à jour l'utilisateur JDE sur les jobs soumis |

### IHM Web (React 19 + Vite)

- **Dashboard** avec compteurs de statuts, tuile d'erreurs d'intégration, actions rapides et infos licence / version.
- **Factures** — liste paginée + filtrable, modale de détail (Résumé, Parties, Lignes, TVA, Notes, Historique, PDF), création / édition / copie / renvoi en place, set-statut (PA ou DB seul), envoi e-mail avec PDF en pièce jointe.
- **Erreurs d'intégration** — toutes les lignes de validation `F564236` sans facture associée (soumissions cassées).
- **Extract & Process** — récupération unitaire et batch depuis BIP, FTP, archive ou fichiers locaux.
- **Process UBL** — chargement et validation d'UBL XML existants.
- **Validate** — testeur XSD + Schematron pour des fichiers UBL ad hoc.
- **XSL Editor** — éditeur Monaco avec navigateur XML, sélecteur de variables conscient du template et installeur de framework par template.
- **XML Viewer** — visualiseur / formatteur Monaco avec chargement local + serveur et sauvegarde.
- **UBL Defaults** — valeurs par défaut par société (devise, moyens de paiement, catégories TVA, etc.).
- **Référentiel des statuts** — référence complète AFNOR XP Z12-014 V1.3.
- **Codes motifs** — référence complète AFNOR XP Z12-012 Annexe A.
- **Référentiel UBL** — glossaire BT-*.
- **Versions fichiers** — historique des versions adossé à SQLite pour les fichiers XSL / XSD / Schematron / RTF / config éditables, avec upload / restauration / téléchargement.

### Settings (gestionnaire de configuration)

- Édition à chaud de `config.json` depuis le navigateur. Templates système : `global`, `e-invoicing`, `e-directory`, `statuses`, `db-nomaubl`, `db-jde`, `ftp-jde`, `fetch-invoices`.
- Listes de codes : `invoice-types`, `vat-categories`, `vatex-codes`, `payment-means`, `scheme-ids`, `unit-codes`, `countries`, `note-types`, `currency-codes`, `rejection-reason-codes`, `action-codes`, `document-reference-codes`, `profile-ids`.
- Templates de type de document : par document RTF / XSL / clé de burst / routage / type de traitement.
- Templates de connecteurs API avec substitution de placeholders (`{{username}}`, `{{token}}`, `{{content}}`, …) et auth pluggable (`NONE`, `BASIC`, `BEARER`, `API_KEY`, `OAUTH2`).
- Surcharges par société `e-invoicing-{kco}`.

### Authentification & RBAC

- Tables intégrées utilisateur / rôle / session (`F564250` – `F564252`).
- Hashs **PBKDF2-HMAC-SHA256**, changement de mot de passe forcé à la première connexion, liste blanche de pages par rôle et filtre par société par rôle.
- Activable via `authEnabled` dans `global` (off → pas de login).
- Rôles `admin` (complet) et `viewer` (lecture seule restreinte) provisionnés par défaut au **Initialize Database**.

### Ordonnanceur d'arrière-plan

Piloté depuis `global.fetch*Interval` (minutes — 0 désactive) :

- `fetchImportInterval` — polling périodique du statut import PA.
- `fetchStatusInterval` — récupération périodique du cycle de vie PA.
- `fetchAll.N.{interval,label,params}` — plusieurs jobs batch de traitement de documents.

### API HTTP embarquée

Un serveur REST + statique minimal (`com.sun.net.httpserver`) sert le bundle React sur `/` et expose `/api/*` pour les factures, templates, fetch / extract, validation, système de fichiers, licence, packaging, authentification, et la documentation OpenAPI sur `/api/docs`.

### E-mail & i18n

- Envoi SMTP (TLS / SSL) avec PDF en pièce jointe par facture.
- Traductions français / anglais complètes dans toute l'IHM.

### Licence

- Licences JWT signées RS256 vérifiées au runtime via une clé publique PEM embarquée — modes `full` (toutes fonctionnalités) ou `restricted` (vues lecture seule).
