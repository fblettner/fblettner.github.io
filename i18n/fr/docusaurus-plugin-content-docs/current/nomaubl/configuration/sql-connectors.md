---
title: Connecteurs SQL
description: "Définition de connecteurs SQL utilisés par NomaUBL pour lire ou écrire dans n'importe quelle base accessible — Oracle ou PostgreSQL — au travers de requêtes nommées et paramétrées. Chaque requête porte un nom, un libellé, une description, une spécification de paramètres, le SQL avec des placeholders :param, et un drapeau Writable. L'éditeur a trois onglets Connection / Queries / Test, et le runtime lie les paramètres via PreparedStatement, sans concaténation dans le SQL."
keywords: [NomaUBL, connecteurs SQL, requêtes SQL, requêtes nommées, JDBC, Oracle, PostgreSQL, PreparedStatement, binding paramètres, writable, liaisons d'actions, règles de notification, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Connecteurs SQL

L'éditeur **Connecteurs SQL** est l'endroit où sont déclarées des requêtes SQL nommées. Un connecteur SQL est une définition réutilisable *« qui parle à une base »* — une connexion JDBC plus une liste de requêtes nommées — que le reste de NomaUBL référence par son nom. Il calque la structure des [Connecteurs API](./api-connectors.md) : le même sélecteur pilote les [Liaisons d'actions](../management/actions.md) et les [Règles de notification](../management/notification-rules.md), avec un suffixe `· SQL` dans le menu déroulant pour que le type soit visible.

Cibles typiques :

- Une **seconde base NomaUBL** pour les recherches inter-environnements.
- Une **base d'ERP source** — JD Edwards, SAP, NetSuite ou un schéma personnalisé — quand une action doit lire un e-mail client, une date de paiement, un code de statut que l'API HTTP n'expose pas.
- Une **base opérationnelle** qu'une action doit mettre à jour — par exemple marquer une facture comme *envoyée* dans un système aval, archiver une ligne, enregistrer une trace d'audit.

La page fonctionne quel que soit le système source, le connecteur SQL pouvant pointer sur n'importe quelle base JDBC accessible.

:::info[Nouveau en 2026.05.7]
Les connecteurs SQL sont nouveaux en 2026.05.7. Ils côtoient les connecteurs API dans *Paramètres*, et les deux types peuvent être câblés depuis les liaisons d'actions et les règles de notification — y compris la nouvelle liste d'appels avec `Arrêt sur échec` et chaînage des réponses via `{call.N.fieldName}`. Voir les [notes de version 2026.05.7](../release-notes.md#v2026-05-7) pour la liste complète.
:::

L'éditeur a **trois onglets** :

1. **Connection** — type de base, URL JDBC, identifiants, schéma et limites de requêtes.
2. **Queries** — cartes repliables par requête : nom, libellé, description, SQL, paramètres, drapeau `Writable`.
3. **Test** — exécute une requête sur la base cible et affiche les colonnes + lignes ou le nombre de lignes affectées.

---

## Accès à l'éditeur

- *Paramètres* → **+ Add SQL** en haut à droite de la barre des ressources pour créer un nouveau connecteur SQL.
- Les connecteurs SQL existants se trouvent dans le groupe **SQL** de la barre des ressources avec un badge `sql` — cliquer sur l'un d'eux ouvre l'éditeur.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="sql-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="sql-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="sql-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="680" rx="14" fill="url(#sql-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="92" height="24" rx="4" fill="transparent"/>
  <text x="286" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Connection</text>
  <rect x="338" y="28" width="64" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="370" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Queries</text>
  <rect x="408" y="28" width="48" height="24" rx="4" fill="transparent"/>
  <text x="432" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Test</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTES</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Utiliser des placeholders :name pour les paramètres. Autorisés : SELECT / INSERT / UPDATE / DELETE / MERGE.</text>

  <rect x="240" y="120" width="540" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="143" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <rect x="270" y="132" width="52" height="16" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.25)" strokeWidth="1"/>
  <text x="296" y="143" fill="rgb(50,215,75)" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace" textAnchor="middle">LECT.</text>
  <text x="330" y="143" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">findCustomerEmail</text>
  <text x="454" y="143" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Renvoie l'e-mail de routage pour le code société donné</text>

  <rect x="240" y="168" width="540" height="324" rx="10" fill="rgba(74,158,255,0.04)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="190" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▾</text>
  <rect x="270" y="180" width="52" height="16" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="296" y="191" fill="rgb(255,159,10)" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace" textAnchor="middle">ÉCRIT.</text>
  <text x="330" y="191" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">markInvoiceSent</text>
  <text x="456" y="191" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Marque la ligne facture côté ERP comme envoyée</text>

  <text x="262" y="218" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <rect x="262" y="224" width="216" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="241" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">markInvoiceSent</text>

  <text x="490" y="218" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="490" y="224" width="282" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="241" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Marque la ligne facture côté ERP comme envoyée</text>

  <text x="262" y="266" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WRITABLE</text>
  <rect x="262" y="272" width="200" height="26" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="272" y="289" fill="rgb(255,159,10)" fontSize="11" fontFamily="ui-monospace, monospace">Oui — autorise les écritures</text>

  <text x="262" y="318" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL</text>
  <rect x="262" y="324" width="510" height="106" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="342" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE F0411</text>
  <text x="272" y="356" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">   SET RPSTAT = 'S',</text>
  <text x="272" y="370" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">       RPSTDJ = TO_NUMBER(TO_CHAR(SYSDATE, 'YYYYDDD'))</text>
  <text x="272" y="384" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace"> WHERE RPDOCO = :doc</text>
  <text x="272" y="398" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">   AND RPDCT  = :dct</text>
  <text x="272" y="412" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">   AND RPKCO  = :kco</text>

  <text x="262" y="448" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <text x="350" y="448" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">déclare les jetons :placeholder utilisés dans le SQL</text>
  <rect x="262" y="456" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="471" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">doc | Numéro de document |        — exigé à l'appel</text>
  <rect x="262" y="480" width="510" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="495" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">dct | Type de document  | RI     — défaut, surchargeable</text>

  <rect x="240" y="500" width="540" height="42" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="525" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">▸</text>
  <rect x="270" y="514" width="52" height="16" rx="4" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.25)" strokeWidth="1"/>
  <text x="296" y="525" fill="rgb(50,215,75)" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace" textAnchor="middle">LECT.</text>
  <text x="330" y="525" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">paymentDateForInvoice</text>
  <text x="484" y="525" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Récupère la date de paiement sur F03B14</text>

  <text x="240" y="566" fill="#cbd5e1" fontSize="11" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TEST · EXÉCUTION RÉELLE</text>
  <rect x="240" y="576" width="540" height="110" rx="10" fill="rgba(50,215,75,0.04)" stroke="rgba(50,215,75,0.40)" strokeWidth="1.2"/>
  <text x="252" y="596" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Requête : markInvoiceSent</text>
  <text x="252" y="610" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">doc=12345 · dct=RI · kco=00070</text>
  <rect x="252" y="618" width="92" height="22" rx="5" fill="url(#sql-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="298" y="633" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Exécuter</text>
  <text x="358" y="633" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace" fontWeight="700">UPDATE ✓</text>
  <text x="442" y="633" fill="#94a3b8" fontSize="11" fontFamily="ui-monospace, monospace">— 1 ligne affectée · 18 ms</text>
  <text x="252" y="666" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">SQL parsé → :doc :dct :kco liés positionnellement · pas de concaténation.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Connection / Queries / Test</text>
  <line x1="200" y1="115" x2="240" y2="46" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="820" y="172" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="187" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Badge LECT. / ÉCRIT.</text>
  <text x="830" y="200" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">protège les non-SELECT</text>
  <line x1="820" y1="188" x2="780" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">SQL avec :placeholders</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liés via PreparedStatement</text>
  <line x1="200" y1="336" x2="262" y2="372" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="820" y="450" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Spec de paramètres</text>
  <text x="830" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom | libellé | défaut</text>
  <line x1="820" y1="466" x2="780" y2="468" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>

  <rect x="20" y="610" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="625" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Panneau Test · réel</text>
  <text x="30" y="638" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes + lignes ou nb affectées</text>
  <line x1="200" y1="626" x2="240" y2="616" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#sql-arrow)"/>
</svg>

---

## Onglet 1 — Connexion

### Connection

| Champ | Valeurs | Description |
|---|---|---|
| **Database Type** | `Oracle` / `PostgreSQL` | Type de moteur. Pilote le placeholder de l'URL JDBC et le parsing dépendant du dialecte côté runtime. |
| **JDBC URL** | texte | Chaîne de connexion JDBC complète. `jdbc:oracle:thin:@host:1521/service_name` pour Oracle, `jdbc:postgresql://host:5432/database_name` pour PostgreSQL. |
| **Schema** | texte *(facultatif)* | Schéma par défaut. Utilisé par le SQL — aucune préfixation automatique à l'exécution, la valeur est informative et permet d'écrire des noms de tables non qualifiés quand le compte JDBC dispose déjà du bon `current_schema`. |

### Identifiants

| Champ | Description |
|---|---|
| **DB User** | Compte de base de données qui dispose des droits exigés par les requêtes déclarées sur ce connecteur. Un accès en lecture seule suffit pour des requêtes `SELECT` uniquement. |
| **DB Password** | Mot de passe du compte. Stocké encodé en Base64 dans le fichier de configuration, à l'identique de `db-nomaubl` et `db-jde`. |

### Limites

| Champ | Défaut | Description |
|---|---|---|
| **Query timeout (ms)** | `30000` | Timeout JDBC par instruction. Les requêtes trop longues sont annulées au-delà. |
| **Max rows** | `1000` | Plafond de lignes renvoyées par appel `SELECT`. Une requête en dérive ne peut pas saturer le heap JVM. |

---

## Onglet 2 — Requêtes

L'onglet Queries est une liste de cartes repliables. L'en-tête de carte affiche un badge **LECT. / ÉCRIT.**, le nom de la requête et la description en deuxième ligne — un connecteur à plusieurs requêtes se lit ainsi comme une liste à cocher d'un coup d'œil. Cliquer sur un en-tête déplie l'éditeur ; **+ Add query** ajoute une nouvelle requête.

### Champs par requête

| Champ | Description |
|---|---|
| **Name** | Identifiant de la requête. Utilisé comme valeur d'`endpoint` quand la requête est câblée dans une liaison d'action ou une règle de notification (`connecteur / nom`). |
| **Label** | Titre court affiché à côté du nom dans les listes déroulantes (`name — Label`). |
| **Description** | Phrase libre affichée en deuxième ligne de la carte repliée. La lecture des règles à voix haute doit rester compréhensible. |
| **Writable** | `Oui` / `Non`. Doit être `Oui` quand le SQL est autre chose qu'un `SELECT` — sinon le runtime rejette l'appel avant même l'ouverture de la connexion. |
| **SQL** | Le SQL lui-même, avec des placeholders `:name` pour les paramètres. Le premier mot-clé hors commentaire et hors littéral détermine le type d'instruction (`SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`). |
| **Parameters** | Spécification des jetons `:placeholder` utilisés dans le SQL. Format : `name|label|default;name|label|default;…` — la même forme que les endpoints api-connecteur. |

### Liste blanche des types d'instructions

Seuls `SELECT`, `INSERT`, `UPDATE`, `DELETE` et `MERGE` sont acceptés. Tout le reste — `DROP`, `TRUNCATE`, `ALTER`, `GRANT`, `CREATE`, etc. — est rejeté avant même l'ouverture de la connexion. Une requête qui commence par l'un de ces mots-clés ne peut pas non plus être enregistrée avec `Writable=Non` : le runtime parse à nouveau le premier mot-clé à chaque appel, le verrou ne se contourne pas en éditant la ressource à la main.

### Binding des paramètres (`:name` → `?`)

Le binding des paramètres passe par `PreparedStatement`. Le runtime parse le SQL, réécrit chaque jeton `:name` en un `?` positionnel et lie les valeurs positionnellement — les valeurs ne sont **jamais** substituées par concaténation dans le SQL. Le parseur respecte :

- les littéraux entre apostrophes (`'O''Brien'`),
- les identifiants entre guillemets (`"customer.name"`),
- les commentaires de ligne (`-- …`) et de bloc (`/* … */`),
- l'opérateur de cast PostgreSQL `::type` (`'foo'::text`).

Les jetons à l'intérieur de l'un de ces constructs passent inchangés.

La spec des paramètres pilote l'onglet *Test* et l'éditeur des appels : chaque `:name` déclaré devient un champ étiqueté pré-rempli avec la valeur `default`. Les lignes de spec sont séparées par des points-virgules ; chaque ligne contient jusqu'à trois champs séparés par des barres verticales. Les champs vides sont acceptés (un paramètre sans défaut donne simplement un champ vide).

### Drapeau Writable

`Writable=Non` est la valeur sûre par défaut. Le passer à `Oui` est obligatoire pour toute instruction non-`SELECT` et c'est ce que le runtime vérifie à l'appel :

- Une requête `SELECT` avec `Writable=Oui` s'exécute sans problème — le drapeau élargit la liste blanche, il ne la rétrécit pas.
- Une requête `UPDATE` avec `Writable=Non` est rejetée avec un message d'erreur dans le panneau de test, et tracée `STOP` dans le journal d'audit à l'exécution.
- Une faute de frappe dans une règle de notification qui pointe sur une requête non-`Writable` mais essaie d'exécuter `DELETE FROM …` ne peut pas réussir — le verrou s'applique avant l'ouverture de la connexion.

---

## Onglet 3 — Test

Un runner intégré qui exécute la requête sélectionnée sur la base cible et affiche le résultat.

| Élément | Description |
|---|---|
| **Query** | Liste déroulante de toutes les requêtes déclarées dans l'onglet Queries, au format `name — Label`. La sélection d'une requête pré-remplit les lignes de paramètres à partir de la spec. |
| **Parameters** | Une ligne par `:placeholder` déclaré, plus un bouton *Add param* pour des paramètres ad hoc absents de la spec. Chaque ligne a un champ nom et un champ valeur. |
| **Run** | Envoie l'appel à `/api/sql-connectors/{connecteur}/{requête}` avec les valeurs de paramètres. Le résultat est affiché à côté du bouton. |

### Panneau de résultat

| Type d'instruction | Affichage |
|---|---|
| **SELECT** | Type d'instruction + nombre de lignes + durée sur la ligne verte de succès ; en dessous, un tableau compact colonnes × lignes. Le runtime plafonne le nombre de lignes à *Max rows* de l'onglet Connection. |
| **INSERT / UPDATE / DELETE / MERGE** | Type d'instruction + nombre de lignes affectées + durée sur la ligne verte de succès. Pas de tableau — le runtime ne renvoie que le compteur d'updates pour les appels non-`SELECT`. |
| **Erreur** | Cadre d'erreur rouge avec le message JDBC / parseur (`SQLException`, violation de la liste blanche, `:placeholder` manquant, etc.). |

L'onglet Test appelle la base réelle — *Enregistrer* le connecteur d'abord après une édition ; sinon le test tourne contre la version précédemment enregistrée de la requête.

---

## Utilisation des connecteurs SQL

Les connecteurs SQL se branchent aux mêmes points d'appel que les connecteurs API :

- **[Liaisons d'actions](../management/actions.md)** — les boutons réglementaires du modal de détail facture peuvent appeler n'importe quelle requête SQL, seule ou en chaîne, via la liste d'appels multiples livrée en 2026.05.7.
- **[Règles de notification](../management/notification-rules.md#onglet-actions)** — la même liste d'appels, déclenchée automatiquement quand la règle correspond à un changement de statut.

Dans les deux cas, la liste déroulante des connecteurs liste les connecteurs API et les connecteurs SQL fusionnés avec les suffixes `· API` / `· SQL` ; la liste déroulante des cibles charge les endpoints ou les requêtes selon le type du connecteur choisi.

### Sorties et chaînage des réponses

Quand un appel SQL retourne, ses sorties sont versées dans le contexte de dispatch sous des clés `call.N.*`, où `N` est l'index 1-basé de l'appel dans la règle ou la liaison. Les appels suivants y accèdent via des placeholders `{call.N.fieldName}` dans leurs valeurs de paramètres.

| Champ | Source |
|---|---|
| `call.N.success` | `true` quand l'appel s'est exécuté sans erreur. |
| `call.N.statementType` | `SELECT` / `INSERT` / `UPDATE` / `DELETE` / `MERGE`. |
| `call.N.rowCount` | Pour `SELECT` — nombre de lignes renvoyées. |
| `call.N.updateCount` | Pour les non-`SELECT` — nombre de lignes affectées. |
| `call.N.error` | Message d'erreur quand `success` vaut `false`. |
| `call.N.<colonne>` | Pour `SELECT` — chaque colonne de la **première ligne**, par son nom. |

Exemple : une règle qui commence par chercher l'e-mail du client via une requête SQL, puis envoie un webhook HTTP de suivi, peut placer dans le paramètre `to` du webhook la valeur `{call.1.EMAIL}` (la colonne `EMAIL` de la première ligne de l'appel #1).

---

## Conseils & bonnes pratiques

- **Un connecteur par base, pas par requête.** Un connecteur *crm* à cinq requêtes nommées se lit mieux que cinq connecteurs portant chacun une requête. Le menu déroulant regroupe les requêtes sous le connecteur parent.
- **Nommer les requêtes par intention, pas par forme SQL.** `findCustomerEmail` se lit mieux que `selectKcoFromF0101`. Le corps du SQL est à un clic dans l'éditeur — le nom est ce que la liste de règles affiche.
- **Démarrer chaque connecteur en `Writable=Non`.** Passer le drapeau à `Oui` uniquement sur les requêtes qui doivent vraiment écrire. Un connecteur en `SELECT` seul ne peut pas être détourné pour exécuter un `DELETE`, même si une faute de frappe pointe la règle sur la mauvaise requête.
- **Utiliser des placeholders `:name` pour toute valeur fournie par l'utilisateur.** Concaténer une valeur dans la chaîne SQL contourne le filet de sécurité du binding paramétré. Le parseur ignore volontairement les jetons à l'intérieur des littéraux et des commentaires : un `:` dans une chaîne reste sans effet.
- **Réduire Max rows par défaut sur les requêtes orientées tableau de bord.** Un widget qui lit les 10 dernières factures rejetées n'a pas besoin de 1000 lignes en retour ; le plafonner à 50 garde l'interface réactive et le fetch JDBC peu coûteux.
- **Tester avant d'enregistrer en cas de modification.** L'onglet Test prend en compte l'édition en cours quand il existe des changements non enregistrés, mais le bouton *Run* appelle la base réelle — il n'y a pas de rollback. Une requête `Writable=Oui` testée s'engage si le SQL le décide.
- **Coupler connecteurs SQL et API via le chaînage des réponses.** Une règle de notification peut lire une valeur via une requête SQL et la transmettre comme paramètre à un webhook HTTP, sans code de chaque côté. Voir [Règles de notification — onglet Actions](../management/notification-rules.md#onglet-actions) pour les détails.
- **Garder les identifiants dans un compte BD dédié.** Même sur un connecteur en lecture seule, donner au compte JDBC les seuls droits dont les requêtes ont besoin — `SELECT` sur un petit ensemble de tables, sans accès large au schéma.
