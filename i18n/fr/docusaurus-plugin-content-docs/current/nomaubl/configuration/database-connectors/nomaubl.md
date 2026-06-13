---
title: Base NomaUBL
description: "Configuration de la connexion à la base applicative NomaUBL (Oracle ou PostgreSQL) : URL JDBC, identifiants, schéma, catalogue complet des tables (factures, e-reporting, auth, notifications), éditeur de mappage des colonnes, panneau Valider le schéma qui compare le DDL embarqué au schéma vivant, et action d'initialisation en un clic."
keywords: [NomaUBL, base de données, Oracle, PostgreSQL, JDBC, schéma, tables, F564230, F564231, F564233, F564234, F564235, F564236, F564237, F564250, F564251, F564252, F564253, F564254, F564260, F564261, F564262, colonnes, UBLColumnConfig, validation, initialisation, bootstrap]
---

# Base NomaUBL

Cet écran configure l'accès à la **base de données dans laquelle NomaUBL stocke ses données** : paramètres de connexion JDBC, identifiants, schéma, noms des tables, mappage des colonnes, et initialisation en un clic. **Oracle** et **PostgreSQL** sont supportés.

Les tables stockent les en-têtes de facture, les lignes, le récapitulatif TVA, les événements de cycle de vie, les résultats de validation, les journaux d'exécution, les données e-reporting, le modèle d'authentification (utilisateurs / rôles / sessions / autorisations) et la boîte de notifications. Les noms par défaut suivent la convention JDE (`F564xxx`), héritage du déploiement initial aux côtés de JD Edwards, mais chaque nom de table *et chaque nom de colonne* est configurable — le connecteur fonctionne donc aussi bien hors contexte JDE.

L'éditeur comporte **quatre onglets** :

1. **Connection** — type de base, URL JDBC, identifiants.
2. **Tables** — schéma, catalogue complet des tables, panneau *Valider le schéma* et stratégie de stockage des détails.
3. **Columns** — surcharges des noms de colonnes par table, résolues à l'exécution via `UBLColumnConfig`.
4. **Initialize** — création en un clic de toutes les tables NomaUBL et provisionnement de l'utilisateur `admin` et des rôles par défaut.

:::info[Refonte en 2026.05.5]
- **Toutes les tables sont désormais des entrées de premier rang** — les tables d'authentification (`F564250` utilisateurs, `F564251` rôles, `F564252` sessions, nouveau `F564254` autorisations) et la table de notifications (`F564253`) rejoignent le catalogue de l'onglet *Tables*. Elles participent à la substitution DDL en cas de renommage, au même titre que les tables de factures et d'e-reporting.
- **Tables e-Reporting renumérotées** — `F564240` / `F564241` / `F564242` deviennent `F564260` / `F564261` / `F564262`. La colonne du payload XML passe de `TEXT` / `CLOB` à `BYTEA` / `BLOB` (octets UTF-8 via `dialect.writeBlob`).
- **Panneau Valider le schéma** — une nouvelle section sous *Tables* compare le DDL embarqué (les fichiers `.sql` canoniques inclus dans le JAR) au schéma vivant en utilisant les noms configurés ici. Signale les tables manquantes, les colonnes manquantes ou en trop, et les écarts de type / taille. Lecture seule — n'altère jamais le schéma. Utilise le même mécanisme que le mode CLI `-validate-ddl`.
- **Onglet Columns** — onglet dédié pour surcharger les noms de colonnes par table ; la résolution passe par `UBLColumnConfig` afin que les colonnes renommées chez le client n'évoluent plus silencieusement.
- **Le journal d'init remplit la hauteur** — la zone de log de l'onglet *Initialize* occupe désormais l'espace disponible au lieu d'être plafonnée à 200 px.
:::

---

## Accès à l'éditeur

- Barre latérale → **Configuration → Connecteurs base de données → NomaUBL**.
- La configuration est enregistrée comme ressource `db-nomaubl` dans le fichier de configuration principal. Le bouton Enregistrer du panneau Settings écrit la configuration via le flux d'enregistrement standard.

---

## Vue d'ensemble — onglet Tables

<svg viewBox="0 0 1000 720" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="db-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="db-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="db-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="680" rx="14" fill="url(#db-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="92" height="24" rx="4" fill="transparent"/>
  <text x="286" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Connexion</text>
  <rect x="338" y="28" width="64" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="370" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Tables</text>
  <rect x="408" y="28" width="72" height="24" rx="4" fill="transparent"/>
  <text x="444" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="486" y="28" width="86" height="24" rx="4" fill="transparent"/>
  <text x="529" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Initialiser</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Schéma</text>
  <rect x="240" y="94" width="540" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="111" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">public</text>

  <text x="240" y="142" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Noms de tables</text>

  <rect x="240" y="152" width="540" height="20" rx="3" fill="rgba(74,158,255,0.04)"/>
  <text x="252" y="166" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">FACTURES</text>
  <text x="290" y="186" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Journal / Archive</text>
  <text x="490" y="186" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564230</text>
  <text x="290" y="204" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Journal d'exécution</text>
  <text x="490" y="204" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564237</text>
  <text x="290" y="222" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">En-tête facture</text>
  <text x="490" y="222" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564231</text>
  <text x="290" y="240" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Lignes de facture</text>
  <text x="490" y="240" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564233</text>
  <text x="290" y="258" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Récapitulatif TVA</text>
  <text x="490" y="258" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564234</text>
  <text x="290" y="276" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Cycle de vie</text>
  <text x="490" y="276" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564235</text>
  <text x="290" y="294" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Validation</text>
  <text x="490" y="294" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564236</text>

  <rect x="240" y="306" width="540" height="20" rx="3" fill="rgba(255,159,10,0.04)"/>
  <text x="252" y="320" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">E-REPORTING</text>
  <text x="290" y="340" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Journal e-Reporting</text>
  <text x="490" y="340" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564260</text>
  <rect x="546" y="328" width="64" height="14" rx="7" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="578" y="338" fill="rgb(251,146,60)" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">renuméroté</text>
  <text x="290" y="358" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Cycle de vie e-Reporting</text>
  <text x="490" y="358" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564261</text>
  <text x="290" y="376" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Mappage e-Reporting</text>
  <text x="490" y="376" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564262</text>

  <rect x="240" y="388" width="540" height="20" rx="3" fill="rgba(50,215,75,0.04)"/>
  <text x="252" y="402" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">NOTIFICATIONS</text>
  <text x="290" y="422" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="490" y="422" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564253</text>
  <rect x="546" y="410" width="50" height="14" rx="7" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="571" y="420" fill="rgb(50,215,75)" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">nouv.</text>

  <rect x="240" y="434" width="540" height="20" rx="3" fill="rgba(74,158,255,0.04)"/>
  <text x="252" y="448" fill="#94a3b8" fontSize="9" letterSpacing="0.04em" fontWeight="700" fontFamily="system-ui, sans-serif">AUTH</text>
  <text x="290" y="468" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Utilisateurs</text>
  <text x="490" y="468" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564250</text>
  <text x="290" y="486" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Rôles</text>
  <text x="490" y="486" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564251</text>
  <text x="290" y="504" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Sessions</text>
  <text x="490" y="504" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564252</text>
  <text x="290" y="522" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Auth · Autorisations</text>
  <text x="490" y="522" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">F564254</text>
  <rect x="546" y="510" width="50" height="14" rx="7" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="571" y="520" fill="rgb(50,215,75)" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">nouv.</text>

  <line x1="240" y1="540" x2="780" y2="540" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="562" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Valider le schéma</text>
  <text x="240" y="580" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Compare le DDL embarqué au schéma vivant — lecture seule.</text>
  <rect x="240" y="588" width="148" height="28" rx="6" fill="url(#db-g-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="314" y="606" fill="#e2e8f0" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Valider le schéma</text>

  <rect x="240" y="624" width="540" height="62" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="640" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Dialect: postgres   Schema: public</text>
  <text x="252" y="654" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">✔ OK — schéma vivant aligné sur le DDL embarqué.</text>
  <text x="252" y="668" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Dernière exécution : il y a 2 minutes</text>
  <text x="252" y="681" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">Même mécanisme que le mode CLI -validate-ddl.</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Schéma</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">résout tous les noms de tables</text>
  <line x1="200" y1="115" x2="240" y2="106" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="820" y="180" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tables factures</text>
  <text x="830" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">7 tables — en-tête / lignes / TVA</text>
  <line x1="820" y1="196" x2="780" y2="220" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">e-Reporting renuméroté</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">F564240/41/42 → 60/61/62</text>
  <line x1="200" y1="356" x2="240" y2="350" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="820" y="420" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="830" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">F564253, configurable</text>
  <line x1="820" y1="436" x2="780" y2="422" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="20" y="480" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="495" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Auth · 4 tables</text>
  <text x="30" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs / rôles / sessions / autor.</text>
  <line x1="200" y1="496" x2="240" y2="490" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>

  <rect x="820" y="600" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="615" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Valider le schéma</text>
  <text x="830" y="628" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">détecteur d'écart DDL — lecture seule</text>
  <line x1="820" y1="616" x2="780" y2="608" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#db-arrow)"/>
</svg>

---

## Onglet 1 — Connexion

### Connection

| Champ | Valeurs | Description |
|---|---|---|
| **Database Type** | `Oracle` / `PostgreSQL` | Type du moteur. Détermine le format d'URL JDBC et les placeholders par défaut. |
| **JDBC URL** | texte | Chaîne de connexion JDBC complète. Le format dépend du type de base : `jdbc:oracle:thin:@host:1521/service_name` pour Oracle, `jdbc:postgresql://host:5432/database_name` pour PostgreSQL. |

### Credentials

| Champ | Description |
|---|---|
| **DB User** | Compte de base disposant des droits nécessaires pour lire et écrire dans toutes les tables NomaUBL (et les créer à l'initialisation). |
| **DB Password** | Mot de passe du compte. Stocké encodé en Base64 dans le fichier de configuration. |

---

## Onglet 2 — Tables

### Schéma

| Champ | Description |
|---|---|
| **Schema** | Schéma de base contenant toutes les tables NomaUBL (par exemple `public` sur PostgreSQL, library / owner JDE sur Oracle). Tous les noms de tables ci-dessous sont résolus dans ce schéma. |

### Noms de tables

NomaUBL répartit ses données sur **15 tables** regroupées par usage. Les valeurs par défaut suivent la convention JDE `F564xxx`, mais tout autre nom est utilisable tant que le compte de base dispose des droits appropriés.

#### Tables factures

| Champ | Défaut | Contenu |
|---|---|---|
| **Journal / Archive** | `F564230` | Archive persistante des exécutions de traitement. |
| **Journal d'exécution** | `F564237` | Journal d'exécution courant utilisé par la page *Journal de traitement*. Nouvelle PK `FEUKID`, colonnes `FERMK` / `FERMK2` / `FEK74MSG1` (renommées en 2026.05.5). |
| **En-tête facture** | `F564231` | Une ligne par facture avec ses identifiants, totaux, statut, données d'adressage. |
| **Lignes de facture** | `F564233` | Lignes de facture (quand *Enregistrer les sous-totaux de ligne* est activé). |
| **Récapitulatif TVA** | `F564234` | Récapitulatif TVA par catégorie (quand *Enregistrer les détails TVA* est activé). |
| **Cycle de vie** | `F564235` | Historique des changements de statut de chaque facture (transitions entre codes réglementaires). |
| **Validation** | `F564236` | Résultats de validation Schematron / règles métier par facture. |

#### Tables e-Reporting

| Champ | Défaut | Contenu |
|---|---|---|
| **Journal e-Reporting** | `F564260` | Une ligne par soumission e-Reporting. La colonne du payload XML est en `BYTEA` / `BLOB` depuis 2026.05.5 (octets UTF-8 via `dialect.writeBlob`). |
| **Cycle de vie e-Reporting** | `F564261` | Historique des changements de statut de chaque soumission. Colonne FK renommée `RHUKID` en 2026.05.5. |
| **Mappage e-Reporting** | `F564262` | Mappage facture d'origine → ligne e-Reporting par soumission. Colonne FK renommée `RIUKID` en 2026.05.5. |

:::warning[Migration de schéma]
Les tables e-Reporting changent de numérotation en 2026.05.5 — les anciennes `F564240` / `F564241` / `F564242` deviennent `F564260` / `F564261` / `F564262`. Quand l'installation existe avant la 2026.05.5 et que les données doivent être conservées, copier les lignes vers les nouvelles tables avant de relancer *Initialiser la base* avec les nouveaux noms. Le DDL embarqué ne crée que les nouveaux noms.
:::

#### Notifications + Auth

| Champ | Défaut | Contenu |
|---|---|---|
| **Notifications** | `F564253` | Lignes de la boîte de réception alimentant la cloche de la barre supérieure et la page *Application → Notifications* (introduites en 2026.05.3). |
| **Auth · Utilisateurs** | `F564250` | Identités utilisateur (login, mot de passe haché, nom complet, indicateur actif). |
| **Auth · Rôles** | `F564251` | Identité du rôle (nom + description). Les colonnes CSV des versions précédentes ont disparu — voir *Auth · Autorisations*. |
| **Auth · Sessions** | `F564252` | Sessions actives : `SSLSID` jeton UUID, `SSUSER`, `SSSTDTIM` début, `SSETDTIM` fin. |
| **Auth · Autorisations** | `F564254` | Autorisations sous forme de lignes — `PMROLE`, `PMCRAPPID` (`page` / `company` / `feature`), `PMCRAPPVAL`, `PMENABL`. Nouveau en 2026.05.5. |

### Valider le schéma

Une nouvelle section sous *Tables* propose le bouton **Valider le schéma**. Il appelle `/api/auth/validate-ddl` (le même mécanisme que le mode CLI `-validate-ddl`) qui compare le **DDL embarqué** — les fichiers `.sql` canoniques inclus dans le JAR — au schéma vivant, en utilisant les noms de tables configurés ici.

Le panneau de résultat signale quatre types d'écart :

| Section | Signification |
|---|---|
| **Tables manquantes** | Déclarées dans le DDL embarqué mais absentes en base. Relancer *Initialiser la base* pour les créer. |
| **Colonnes manquantes** | Le DDL déclare une colonne que la base ne possède pas. Apparaît typiquement après une montée de version qui ajoute une colonne à une table existante. |
| **Écarts de type / taille** | Colonne présente, mais avec un type ou une largeur différents de ce que le DDL embarqué déclare. Le détail liste `expected` vs `actual` pour chaque colonne. |
| **Colonnes en trop** | La base possède une colonne que le DDL ne déclare plus. Information uniquement — l'application les ignore. |

La vérification est en **lecture seule** — elle n'altère jamais le schéma. Une exécution propre affiche `✔ OK — schéma vivant aligné sur le DDL embarqué.`

### Stockage des détails

Détermine **ce qui est enregistré sur chaque facture** au-delà de l'en-tête. Deux switchs indépendants se trouvent sous *Tables* — un pour les sous-totaux par ligne, un pour les détails TVA — chaque niveau de détail s'active ou se désactive séparément.

| Switch | Effet quand activé | Utilisé par |
|---|---|---|
| **Enregistrer les sous-totaux de ligne** | Écrit chaque ligne de chaque facture dans `F564233` à l'insertion. | Reporting SQL qui a besoin des totaux par ligne ; l'onglet *Lignes* de la modale de détail facture lit dans le document UBL dans tous les cas. |
| **Enregistrer les détails TVA** | Écrit le détail de TVA par taux de chaque facture dans `F564234` à l'insertion. | La page [Déclaration de TVA](../../application/vat-declaration.md) — c'est cet switch, laissé activé, qui permet à la page de s'ouvrir en quelques secondes même sur un mois de 200 000 factures. |

Un switch désactivé laisse le détail correspondant uniquement dans le document UBL enregistré — l'application l'extrait à la demande quand l'onglet *Lignes* ou *TVA* de la modale de détail facture est ouvert.

Les deux switchs prennent par défaut la valeur correspondant à l'ancienne configuration. Les installations existantes conservent leur comportement après la mise à jour — aucune modification manuelle n'est requise.

#### Reconstruire les détails TVA d'une période passée

Quand *Enregistrer les détails TVA* est activé pour la première fois, seules les nouvelles factures s'enregistrent avec les détails dans `F564234`. Pour remplir `F564234` sur les factures qui existaient avant l'activation — les périodes passées que vous voulez voir dans la page TVA — utilisez la commande [`backfill-vat`](../../management/command-line.md#backfill-vat) :

```bash
./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30
```

La commande analyse le document UBL déjà conservé sur l'en-tête de chaque facture et réinsère le détail par taux — relançable sans risque sur la même période, sans créer de doublons.

---

## Onglet 3 — Colonnes

L'onglet Colonnes est un éditeur par table qui surcharge les **noms de colonnes** à l'exécution via `UBLColumnConfig`. Chaque sub-handler Java qui lit ou écrit une colonne NomaUBL résout son nom via `cols.<accessor>` au lieu d'une chaîne codée en dur — un renommage de colonne en base (et son enregistrement ici) permet à l'application de continuer à fonctionner sans recompilation.

L'éditeur regroupe les surcharges par table et reprend les mêmes noms d'accesseurs que le code Java. Les valeurs par défaut correspondent aux colonnes JDE `F564xxx` (`UHKCO`, `FETXFT`, `RGUKID`, …) ; leur modification est une question côté client et n'est utile que si le schéma diverge du DDL embarqué.

La nouvelle page **Cross-Reference** générée à la compilation (*Documentation → Cross-Ref*) liste chaque site d'appel Java qui lit `tables.<X>` ou `cols.<X>`, avec un commutateur « accesseurs inutilisés » qui fait apparaître le code mort. Générée par `XrefScanner` à chaque build, sans entretien manuel.

---

## Onglet 4 — Initialiser

Initialisation en un clic d'une base NomaUBL vierge.

| Élément | Description |
|---|---|
| Bouton **Initialiser la base** | Crée toutes les tables NomaUBL absentes et provisionne l'utilisateur `admin` par défaut ainsi que les rôles `admin` et `viewer`. |
| **Zone de log** | Affiche la sortie de l'exécution ligne à ligne, avec une couleur par préfixe : `OK:` vert pour les instructions exécutées, `EXISTS:` atténué pour les objets déjà présents, `FAIL:` / `ERROR:` rouge pour les échecs réels. La zone de log occupe désormais l'espace disponible (plus de plafond fixe à 200 px). |

L'opération **peut être relancée sans risque** — les tables et utilisateurs déjà présents ne sont pas modifiés ; chaque exécution post-montée de version se contente de créer les nouvelles tables et de recréer les autorisations par défaut manquantes. Cycle de vie typique :

1. Nouveau déploiement → exécuter *Initialiser la base* une fois. Toutes les tables sont créées, l'utilisateur `admin` par défaut est provisionné.
2. Montée de version qui ajoute des tables (par exemple 2026.05.3 ajoute `F564253`, 2026.05.5 ajoute `F564254`) → relancer *Initialiser la base*. Seules les tables manquantes sont créées.
3. Table d'autorisations vidée → supprimer `F564254` et relancer *Initialiser la base*. Les autorisations `admin` et `viewer` par défaut sont recréées ; les lignes de rôles existantes ne sont pas modifiées.

---

## Conseils & bonnes pratiques

- **Choisir le type de base avant de saisir l'URL JDBC.** Le placeholder et l'aide s'adaptent au type sélectionné, ce qui évite les erreurs de format.
- **Utiliser un compte DB dédié.** Lui accorder `SELECT / INSERT / UPDATE / DELETE` sur le schéma NomaUBL et le droit `CREATE TABLE` pour l'initialisation.
- **Conserver les noms par défaut `F564xxx` en cohabitation avec JDE.** Les jointures avec les tables JDE dans les outils de reporting restent ainsi directes.
- **Utiliser l'onglet Colonnes pour migrer un schéma existant.** Une installation client antérieure à un renommage de colonne peut conserver les anciens noms — l'enregistrement ici suffit pour que le code applicatif continue de fonctionner.
- **Lancer *Valider le schéma* après chaque montée de version.** La vérification capture les colonnes manquantes ajoutées par la mise à jour et les écarts de type qui produiraient sinon des erreurs silencieuses à l'exécution. Lecture seule — sans risque.
- **Laisser *Enregistrer les détails TVA* activé quand la page Déclaration de TVA est utilisée.** Sans cet switch, la page retombe sur une analyse du document UBL à chaque chargement — supportable sur un mois calme, pénible sur un trimestre chargé.
- **Désactiver *Enregistrer les sous-totaux de ligne* uniquement sur installations contraintes en volume.** L'onglet *Lignes* de la modale de détail facture fonctionne encore depuis le document UBL ; seul le reporting SQL tiers sur les lignes disparaît.
- **Relancer *Initialiser* après chaque montée de version.** Les nouvelles versions ajoutent occasionnellement des tables (notifications en 2026.05.3, autorisations en 2026.05.5) ; le script peut être relancé sans risque, il les prend en compte sans toucher aux données existantes.
- **Le journal d'init est en couleur.** Repérer les lignes rouges en premier — ce sont des échecs réels à corriger. Les lignes `EXISTS:` atténuées en relance sont attendues.
