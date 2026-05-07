---
title: Tables de base de données
description: "Référence du schéma de base de données NomaUBL — toutes les tables qui supportent l'application : archive de factures, en-tête / lignes / TVA UBL, événements de cycle de vie, erreurs de validation, journal de traitement, e-reporting et authentification. Descriptions fonctionnelles, clés primaires et référentiel des champs pour Oracle et PostgreSQL."
keywords: [NomaUBL, base de données, schéma, tables, F564230, F564231, F564233, F564234, F564235, F564236, F564237, F564240, F564241, F564242, F564250, F564251, F564252, JDE Julian, BLOB, BT-, Oracle, PostgreSQL]
---

# Tables de base de données

NomaUBL persiste chaque artefact du pipeline e-invoicing — la source ERP originale, le document UBL généré, la décomposition par ligne et par taux de TVA, les événements de cycle de vie, les erreurs de validation, le journal de traitement runtime, les soumissions e-reporting et le triplet utilisateur / rôle / session.

Le schéma est **identique sur Oracle et PostgreSQL** — la DDL s'adapte au dialecte (`BLOB` ↔ `BYTEA`, `NUMBER` ↔ `INTEGER`, `VARCHAR2` ↔ `VARCHAR`) mais les noms de colonnes, les clés primaires et la sémantique restent les mêmes. Chaque nom de table est configurable dans le template système `db-nomaubl` et créé par l'action **Initialize Database** de l'écran *Settings → Database Connectors*.

Le schéma fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé. Les tables suivent la convention de nommage JDE `F564XXX` car la plateforme a d'abord été construite autour de JDE ; les conventions sont fonctionnelles, pas spécifiques à la source.

---

## Conventions de nommage

| Convention | Détail |
|---|---|
| **Identifiant de table** | `F564XXX` — préfixe de fichier de style JDE. Configurable par environnement. |
| **Préfixe de colonne** | Préfixe à deux lettres rattaché à la table (`FE` pour l'archive, `UH` pour l'en-tête UBL, `UL` pour les lignes, `UV` pour la TVA / la validation, `US` pour le statut / les utilisateurs, `RG`/`RH`/`RI` pour l'e-reporting…). |
| **Dates** | Julian JDE — entier au format `CYYDDD` où `C = 1` pour 2000–2099, `YY` correspond aux deux derniers chiffres de l'année et `DDD` au jour de l'année. Exemple : `125108` → 2025-04-18. Conversion à la volée pour l'IHM. |
| **Heures** | Entier au format `HHMMSS`. Exemple : `143052` → 14:30:52. |
| **Numériques mis à l'échelle** | Certains montants et taux sont stockés en entiers multipliés par un facteur fixe — diviser à la lecture : `ATXA × 100` (2 décimales), `QNTY × 10000` (4 décimales), `UPRC × 10000` (4 décimales), `TXR1 × 1000` (3 décimales). |
| **Charges utiles XML** | Stockées en `BLOB` (Oracle) / `BYTEA` (Postgres) pour le XML source ERP et l'UBL généré ; en `CLOB` (Oracle) / `TEXT` (Postgres) pour le XML d'e-reporting. UTF-8 partout. |
| **Séquences auto-incrémentées** | Les colonnes `SEQN` utilisent `COALESCE(MAX(SEQN), 0) + 1` à l'insertion — pas besoin de séquence Oracle ni de serial Postgres. |

---

## Vue d'ensemble du schéma

<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '28px 0', display: 'block'}}>
  <defs>
    <marker id="dt-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/>
    </marker>
    <marker id="dt-arrow-blue-dim" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff" opacity="0.6"/>
    </marker>
    <marker id="dt-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/>
    </marker>
    <marker id="dt-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/>
    </marker>
    <marker id="dt-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4ade80"/>
    </marker>
    <linearGradient id="dt-g-blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="dt-g-blue-strong" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.28"/>
      <stop offset="100%" stopColor="#2b8cff" stopOpacity="0.1"/>
    </linearGradient>
    <linearGradient id="dt-g-purple" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="dt-g-green" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#4ade80" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="dt-g-neutral" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.12"/>
      <stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/>
    </linearGradient>
  </defs>

  <rect x="20" y="20" width="960" height="270" rx="14" fill="#4a9eff" fillOpacity="0.03" stroke="#4a9eff" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="48" fill="#4a9eff" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">📋 DOMAINE FACTURE</text>

  <rect x="50" y="72" width="180" height="56" rx="10" fill="url(#dt-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="140" y="94" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564230</text>
  <text x="140" y="113" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Archive source</text>

  <rect x="50" y="156" width="180" height="56" rx="10" fill="url(#dt-g-blue)" stroke="#4a9eff" strokeWidth="1.2" strokeDasharray="4 3" strokeOpacity="0.7"/>
  <text x="140" y="178" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace" opacity="0.92">F564237</text>
  <text x="140" y="197" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">Journal de traitement</text>

  <line x1="140" y1="128" x2="140" y2="156" stroke="#4a9eff" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.6" markerEnd="url(#dt-arrow-blue-dim)"/>
  <text x="155" y="146" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.7">FEWDS1</text>

  <rect x="290" y="72" width="180" height="56" rx="10" fill="url(#dt-g-blue-strong)" stroke="#60a5fa" strokeWidth="2"/>
  <text x="380" y="94" fill="#60a5fa" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="ui-monospace, monospace">F564231</text>
  <text x="380" y="113" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.88">En-tête UBL (BT-*)</text>

  <line x1="230" y1="100" x2="290" y2="100" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#dt-arrow-blue)"/>
  <text x="260" y="93" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace">DOC/DCT/KCO</text>

  <rect x="540" y="34" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="57" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564233</text>
  <text x="710" y="57" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Lignes</text>

  <rect x="540" y="82" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="105" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564234</text>
  <text x="710" y="105" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Synthèse TVA</text>

  <rect x="540" y="130" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="153" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564235</text>
  <text x="710" y="153" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Cycle de vie</text>

  <rect x="540" y="178" width="180" height="36" rx="8" fill="url(#dt-g-neutral)" stroke="#475569" strokeWidth="1"/>
  <text x="555" y="201" fill="#cbd5e1" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564236</text>
  <text x="710" y="201" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.7">Erreurs de validation</text>

  <path d="M 470 100 L 500 100" stroke="#64748b" strokeWidth="1.4" fill="none"/>
  <path d="M 500 52 L 500 196" stroke="#64748b" strokeWidth="1.4" fill="none"/>
  <line x1="500" y1="52" x2="540" y2="52" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <line x1="500" y1="100" x2="540" y2="100" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <line x1="500" y1="148" x2="540" y2="148" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <line x1="500" y1="196" x2="540" y2="196" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#dt-arrow-slate)"/>
  <text x="513" y="240" fill="currentColor" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.65">+ LNID / SEQN</text>

  <rect x="20" y="310" width="960" height="170" rx="14" fill="#c084fc" fillOpacity="0.03" stroke="#c084fc" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="338" fill="#c084fc" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">📊 DOMAINE E-REPORTING</text>

  <rect x="50" y="362" width="180" height="56" rx="10" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="140" y="384" fill="#c084fc" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564240</text>
  <text x="140" y="403" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Journal des rapports</text>

  <rect x="290" y="344" width="180" height="36" rx="8" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="367" fill="#c084fc" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564241</text>
  <text x="460" y="367" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Cycle de vie rapport</text>

  <rect x="290" y="400" width="180" height="36" rx="8" fill="url(#dt-g-purple)" stroke="#c084fc" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="423" fill="#c084fc" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564242</text>
  <text x="455" y="423" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Mapping factures</text>
  <line x1="470" y1="418" x2="496" y2="418" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="3 3" strokeOpacity="0.7"/>
  <text x="500" y="421" fill="#c084fc" fontSize="10" fontFamily="ui-monospace, monospace" opacity="0.85">⇢ F564231 (FK inter-domaine)</text>

  <path d="M 230 390 L 260 390" stroke="#c084fc" strokeWidth="1.4" fill="none"/>
  <path d="M 260 362 L 260 418" stroke="#c084fc" strokeWidth="1.4" fill="none"/>
  <line x1="260" y1="362" x2="290" y2="362" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#dt-arrow-purple)"/>
  <line x1="260" y1="418" x2="290" y2="418" stroke="#c084fc" strokeWidth="1.4" markerEnd="url(#dt-arrow-purple)"/>
  <text x="260" y="455" fill="#c084fc" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">RGUKID</text>

  <rect x="20" y="500" width="960" height="180" rx="14" fill="#4ade80" fillOpacity="0.03" stroke="#4ade80" strokeOpacity="0.2" strokeWidth="1"/>
  <text x="40" y="528" fill="#4ade80" fontSize="12" fontWeight="800" letterSpacing="1.8" fontFamily="system-ui, sans-serif">🔐 DOMAINE AUTHENTIFICATION</text>

  <rect x="50" y="552" width="180" height="56" rx="10" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1.5"/>
  <text x="140" y="574" fill="#4ade80" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">F564250</text>
  <text x="140" y="593" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">Utilisateurs</text>

  <rect x="290" y="534" width="180" height="36" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="557" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564251</text>
  <text x="460" y="557" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Rôles</text>

  <rect x="290" y="590" width="180" height="36" rx="8" fill="url(#dt-g-green)" stroke="#4ade80" strokeWidth="1" strokeOpacity="0.55"/>
  <text x="305" y="613" fill="#4ade80" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F564252</text>
  <text x="460" y="613" fill="currentColor" fontSize="11" fontStyle="italic" textAnchor="end" fontFamily="system-ui, sans-serif" opacity="0.75">Sessions</text>

  <path d="M 230 580 L 260 580" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" fill="none"/>
  <path d="M 260 552 L 260 608" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" fill="none"/>
  <line x1="260" y1="552" x2="290" y2="552" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <line x1="260" y1="608" x2="290" y2="608" stroke="#4ade80" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#dt-arrow-green)"/>
  <text x="265" y="547" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">USROLE</text>
  <text x="265" y="630" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace" opacity="0.85">SSUSER</text>
</svg>

<div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', margin: '0 0 24px', padding: '10px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', fontSize: '11px', opacity: 0.78}}>
  <span><span style={{display: 'inline-block', width: '24px', height: '0', verticalAlign: 'middle', borderTop: '1.5px solid #4a9eff', marginRight: '6px'}}></span>flèche pleine — relation FK ferme</span>
  <span><span style={{display: 'inline-block', width: '24px', height: '0', verticalAlign: 'middle', borderTop: '1.5px dashed #4a9eff', marginRight: '6px'}}></span>flèche pointillée — lien souple / inter-domaine</span>
  <span><span style={{display: 'inline-block', width: '12px', height: '12px', verticalAlign: 'middle', borderRadius: '3px', background: 'rgba(74,158,255,0.18)', border: '2px solid #60a5fa', marginRight: '6px'}}></span>carte mise en avant — pivot du domaine</span>
</div>

---

## Domaine facture

Les sept tables qui transportent une facture sur l'intégralité de son cycle de vie — du flux ERP brut au statut définitif.

### F564230 — Archive source & journal de soumission PA

Stocke le **XML ERP original** ainsi que les drapeaux de routage et l'UUID de transaction PA renvoyé après soumission. Une ligne par document source.

- **Clé primaire** : `FEDOC + FEDCT + FEKCO`
- **Notable** : `FETXFT` porte la charge utile XML source (octets UTF-8) ; `FEUKIDSZ` contient l'UUID renvoyé par la Plateforme Agréée après import réussi ; `FEEV10` est l'option *envoi PA* (`1` = oui, `2` = non).

| Champ | Type | Description |
|---|---|---|
| `FEDOC` | Entier | Numéro de document (PK). |
| `FEDCT` | Texte(2) | Type de document (PK). |
| `FEKCO` | Texte(5) | Code société (PK). |
| `FEAA10` | Texte(10) | Code activité / routage. |
| `FEAA20` | Texte(25) | Sous-type de document. |
| `FEALKY` | Texte(25) | Clé alpha client. |
| `FEAEXP` | Décimal × 100 | Montant du document (mis à l'échelle). |
| `FEIVD` | Date (Julian) | Date de facture. |
| `FEARDU` | Date (Julian) | Date d'échéance. |
| `FEUPMJ` | Date (Julian) | Date de dernière mise à jour. |
| `FEPID` | Texte(10) | Identifiant programme. |
| `FEVERS` | Texte(5) | Version. |
| `FEUSER` | Texte(10) | Utilisateur créateur. |
| `FEJOBN` | Texte(10) | Nom du job. |
| `FEUPMT` | Heure (HHMMSS) | Heure de dernière mise à jour. |
| `FEWDS1` | Texte(80) | Nom du fichier source. |
| `FEEV01` | Texte(25) | Code de routage. |
| `FEAC04` | Texte(5) | Unité opérationnelle / agence. |
| `FEEV10` | Entier | Option *envoi PA* — `1` = oui, `2` = non. |
| `FETXFT` | BLOB | XML ERP original (octets UTF-8). |
| `FEUKIDSZ` | Texte(100) | UUID de transaction renvoyé par la PA à l'import. |

### F564231 — En-tête UBL de la facture

La vue **EN 16931** de la facture plus le document UBL 2.1 généré. Une ligne par facture ; même clé primaire que F564230.

- **Clé primaire** : `UHDOC + UHDCT + UHKCO`
- **Notable** : `UHTXFT` stocke le document UBL généré (octets UTF-8) ; `UHK74RSCD` est le code de statut courant issu de la liste de référence *statuses* ; `UHY56BAR` est le code de routage BAR (`B2B` / `B2G` / `B2C` / `B2BINT` / `OUTOFSCOPE` / …).

| Champ | Type | Description |
|---|---|---|
| `UHDOC` | Entier | Numéro de document (PK · FK → F564230). |
| `UHDCT` | Texte(2) | Type de document (PK). |
| `UHKCO` | Texte(5) | Code société (PK). |
| `UHODOC` / `UHODCT` / `UHOKCO` | Entier / Texte(2) / Texte(5) | Document de référence (renseigné pour un avoir pointant vers une facture antérieure). |
| `UHK74FLEN` | Texte(25) | Numéro de facture UBL — BT-1. |
| `UHK74XMLV` | Texte(50) | Profile ID — BT-23. |
| `UHK74LDDJ` | Date (Julian) | Date d'émission — BT-2. |
| `UHDDJ` | Date (Julian) | Date d'échéance — BT-9. |
| `UHK74LEDT` | Texte(3) | Code de type de facture — BT-3. |
| `UHATXA` | Décimal × 100 | Montant hors taxes — BT-109. |
| `UHSTAM` | Décimal × 100 | Montant de TVA — BT-110. |
| `UHAG` | Décimal × 100 | Montant TTC — BT-112. |
| `UHAAP` | Décimal × 100 | Montant à payer — BT-115. |
| `UHCRCD` | Texte(3) | Code devise — BT-5. |
| `UH55RSF` | Texte(40) | Référence commande — BT-13. |
| `UHY74CTID` | Entier | Référence contrat — BT-12. |
| `UHAN8` | Entier | AN8 client (carnet d'adresses JDE). |
| `UHALKY` | Texte(25) | Clé alpha client. |
| `UHALPH` | Texte(40) | Nom du client — BT-44. |
| `UHTXFT` | BLOB | XML UBL 2.1 généré (octets UTF-8). |
| `UHK74RSCD` | Texte(4) | Code de statut courant (voir *Référentiel des statuts*). |
| `UHK74MSG1` | Texte(500) | Message de statut. |
| `UHY56EPID` / `UHY56EPSC` | Texte(100) / Texte(25) | Identifiant + schéma de l'endpoint client — BT-49 / BT-49-1. |
| `UHY56PYIN` | Texte(3) | Code moyen de paiement — BT-81. |
| `UHY56BAR` | Texte(10) | Code de routage BAR (`B2B`, `B2G`, `B2C`, `B2BINT`, `OUTOFSCOPE`, …). |
| `UHY56RSRC` / `UHY56RSRCL` | Texte(50) / Texte(250) | Code et libellé du motif de rejet. |
| `UHY56ACTN` / `UHY56ACTNL` | Texte(10) / Texte(250) | Code et libellé de l'action attendue. |
| `UHY56ACTND` | Texte(1000) | Note de statut (JSON brut renvoyé par la PA). |
| `UHUSER` / `UHPID` / `UHJOBN` / `UHUPMJ` / `UHTDAY` | — | Colonnes d'audit — utilisateur, programme, job, date et heure de dernière mise à jour. |

### F564233 — Lignes de la facture UBL

Une ligne par ligne UBL. Les valeurs de quantité, prix et taux de taxe sont **mises à l'échelle** — diviser à la lecture.

- **Clé primaire** : `ULDOC + ULDCT + ULKCO + ULLNID`
- **Notable** : `ULLNID` est l'identifiant de ligne JDE × 1000 (BT-126). `ULY56QNTY` ÷ 10000, `ULUPRC` ÷ 10000, `ULATXA` ÷ 100, `ULTXR1` ÷ 1000.

| Champ | Type | Description |
|---|---|---|
| `ULDOC` / `ULDCT` / `ULKCO` | — | Document / type / société (PK · FK → F564231). |
| `ULLNID` | Entier × 1000 | Identifiant de ligne — BT-126. |
| `ULDSC1` | Texte(40) | Description article — BT-153. |
| `ULLITM` | Texte(35) | Identifiant article vendeur — BT-155. |
| `ULY56QNTY` | Décimal × 10000 | Quantité facturée — BT-129. |
| `ULY56UM` | Texte(3) | Code unité de mesure — BT-130. |
| `ULUPRC` | Décimal × 10000 | Prix unitaire — BT-146. |
| `ULATXA` | Décimal × 100 | Montant ligne — BT-131. |
| `ULREBL` | Décimal × 10000 | Remise / charge — BT-136. |
| `ULCRCD` | Texte(3) | Code devise. |
| `ULK74TVCC` | Texte(2) | Code de catégorie de taxe — BT-151. |
| `ULTXR1` | Décimal × 1000 | Taux de taxe — BT-152. |
| `ULK74EXRC` | Texte(100) | Motif d'exonération — BT-121. |
| `ULUSER` / `ULPID` / `ULJOBN` / `ULUPMJ` / `ULTDAY` | — | Colonnes d'audit. |

### F564234 — Synthèse TVA UBL

Une ligne par décomposition **(catégorie de taxe, taux, devise)** portée par la facture — le groupe BG-23 d'EN 16931.

- **Clé primaire** : `UVDOC + UVDCT + UVKCO + UVSEQN`
- **Notable** : `UVSEQN` est auto-incrémenté via `COALESCE(MAX(UVSEQN), 0) + 1` à l'insertion.

| Champ | Type | Description |
|---|---|---|
| `UVDOC` / `UVDCT` / `UVKCO` | — | Document / type / société (PK · FK → F564231). |
| `UVSEQN` | Entier | Numéro de séquence (PK). |
| `UVK74TVCC` | Texte(2) | Code de catégorie de taxe — BT-118. |
| `UVTXR1` | Décimal × 1000 | Taux de taxe — BT-119. |
| `UVATXA` | Décimal × 100 | Base imposable — BT-116. |
| `UVSTAM` | Décimal × 100 | Montant de TVA — BT-117. |
| `UVCRCD` | Texte(3) | Code devise. |
| `UVK74EXRC` | Texte(500) | Motif d'exonération — BT-120. |
| `UVUSER` / `UVPID` / `UVJOBN` / `UVUPMJ` / `UVTDAY` | — | Colonnes d'audit. |

### F564235 — Événements de cycle de vie

L'**historique en ajout uniquement** de chaque statut traversé par la facture. Une ligne par événement, dans l'ordre de soumission. C'est la source de l'onglet *History* de la modale de détail.

- **Clé primaire** : `USDOC + USDCT + USKCO + USSEQN`
- **Notable** : `USSEQN` est auto-incrémenté ; les événements sont écrits par `StatusTransition.apply()` en même temps que la mise à jour correspondante de `F564231.UHK74RSCD`.

| Champ | Type | Description |
|---|---|---|
| `USDOC` / `USDCT` / `USKCO` | — | Document / type / société (PK · FK → F564231). |
| `USSEQN` | Entier | Numéro de séquence d'événement (PK). |
| `USK74RSCD` | Texte(4) | Code de statut à cet événement. |
| `USK74MSG1` | Texte(500) | Message de statut. |
| `USTRDJ` | Date (Julian) | Date de l'événement. |
| `USY56RSRC` / `USY56RSRCL` | Texte(50) / Texte(250) | Code et libellé du motif de rejet. |
| `USY56ACTN` / `USY56ACTNL` | Texte(10) / Texte(250) | Code et libellé de l'action attendue. |
| `USY56ACTND` | Texte(1000) | Note de statut (JSON brut de la PA). |
| `USUSER` / `USPID` / `USJOBN` / `USUPMJ` / `USTDAY` | — | Colonnes d'audit. |

### F564236 — Erreurs de validation UBL

Erreurs XSD et Schematron enregistrées pour une facture. Une ligne par erreur / avertissement — alimente le groupe *History → Validation errors* de la modale de détail et la page *Integration Errors* quand aucune ligne `F564231` correspondante n'existe.

- **Clé primaire** : `UVDOC + UVDCT + UVKCO + UVSEQN`
- **Notable** : `UVY56LEVEL` vaut `ERROR` / `WARNING` / `INFO`. `UVSRCL` indique le validateur : `XSD`, `SCH` (Schematron) ou `DB`.

| Champ | Type | Description |
|---|---|---|
| `UVDOC` / `UVDCT` / `UVKCO` | — | Document / type / société (PK ; orpheline lorsqu'il n'existe pas de ligne F564231). |
| `UVSEQN` | Entier | Numéro de séquence d'erreur (PK). |
| `UVY56LEVEL` | Texte(10) | Sévérité — `ERROR`, `WARNING`, `INFO`. |
| `UVSRCL` | Texte(25) | Source — `XSD` / `SCH` / `DB`. |
| `UVY56RULE` | Texte(50) | Identifiant de règle (par ex. `BR-01`, `PEPPOL-EN16931-R001`). |
| `UVK74MSG1` | Texte(2000) | Message d'erreur / avertissement. |
| `UVUSER` / `UVPID` / `UVJOBN` / `UVUPMJ` / `UVTDAY` | — | Colonnes d'audit. |

### F564237 — Journal de traitement runtime

Chaque événement écrit par `RuntimeLogHandler` durant le traitement XML / UBL / BIP / FTP — `START`, `END` et toute méthode intermédiaire. Alimente la page *Processing Log* (menu Management).

- **Clé primaire** : aucune — plusieurs événements par fichier sont attendus.
- **Notable** : `FEMODE` est le type de traitement (`SINGLE`, `BURST`, `UBL`, `BOTH`, `UBL_VALIDATE`, `PROCESS`) ; `FETMPL` est le nom du template (vide pour le traitement UBL) ; `FEMETHOD` est `START` / `END` ou le nom de la méthode fautive en cas d'erreur.

| Champ | Type | Description |
|---|---|---|
| `FEWDS1` | Texte(80) | Nom du fichier source — fait le lien avec `F564230.FEWDS1`. |
| `FEUPMJ` | Date (Julian) | Date de l'événement. |
| `FEUPMT` | Heure (HHMMSS) | Heure de l'événement. |
| `FEMODE` | Texte(20) | Type de traitement. |
| `FETMPL` | Texte(50) | Nom du template. |
| `FEMETHOD` | Texte(100) | Opération — `START` / `END` / nom de la méthode fautive. |
| `FEMESSAGE` | Texte(500) | Message de statut ou détail d'erreur. |

---

## Domaine e-reporting

Trois tables qui consignent les déclarations *(période, flux, société)* déposées sur la Plateforme Agréée — flux **10.1** (détail B2C) et **10.3** (B2BINT agrégé).

### F564240 — Journal des rapports

Une ligne par rapport généré. Stocke le XML `<ReportDocument>` et le dernier statut connu.

- **Clé primaire** : `RGUKID` (séquence globalement unique — pas de composante flux / société).
- **Notable** : `RGY56BAR` vaut `10.1` ou `10.3` ; `RGDCT` est le type de document (`IN` initial, `RE` remplacement, `CO` annulation, `MO` modification) ; `RGTXFT` porte le XML généré.

| Champ | Type | Description |
|---|---|---|
| `RGUKID` | Entier | Identifiant de séquence du rapport (PK). |
| `RGY56BAR` | Texte(10) | Code de flux — `10.1` / `10.3`. |
| `RGKCO` | Texte(5) | Code société émettrice. |
| `RGDCT` | Texte(2) | Type de document — `IN` / `RE` / `CO` / `MO`. |
| `RGEFTJ` | Date (Julian) | Début de période. |
| `RGEFDJ` | Date (Julian) | Fin de période. |
| `RGY56EPID` | Texte(60) | SIREN émetteur (schéma `0002`). |
| `RGK74RSCD` | Texte(4) | Code de statut courant. |
| `RGK74MSG1` | Texte(2000) | Dernier message de statut. |
| `RGNINV` | Entier | Nombre de factures incluses. |
| `RGTXFT` | CLOB / TEXT | XML `<ReportDocument>` généré. |
| `RGUSER` / `RGPID` / `RGJOBN` / `RGUPMJ` / `RGTDAY` | — | Colonnes d'audit. |

### F564241 — Cycle de vie des rapports

L'historique en ajout uniquement des statuts d'un rapport — même structure que F564235 pour les factures.

- **Clé primaire** : `RGUKID + RHSEQN`
- **Notable** : `RHSEQN` est auto-incrémenté. La colonne `RGUKID` (préfixée `RG`) est la FK vers le rapport parent (conservée telle quelle, sans alias `RH`).

| Champ | Type | Description |
|---|---|---|
| `RGUKID` | Entier | Identifiant de rapport (PK · FK → F564240). |
| `RHY56BAR` | Texte(10) | Code de flux (dénormalisé pour faciliter les requêtes). |
| `RHSEQN` | Entier | Numéro de séquence d'événement (PK). |
| `RHK74RSCD` | Texte(4) | Code de statut à cet événement. |
| `RHK74MSG1` | Texte(500) | Message de statut. |
| `RHUSER` / `RHPID` / `RHJOBN` / `RHUPMJ` / `RHTDAY` | — | Colonnes d'audit. |

### F564242 — Mapping rapport / facture

Trace **les factures incluses dans chaque rapport** — la PK composite empêche d'inclure deux fois une facture déjà déclarée.

- **Clé primaire** : `RGUKID + RIDOC + RIDCT + RIKCO`
- **Notable** : Un index secondaire sur `(RIDOC, RIDCT, RIKCO, RIY56BAR)` répond efficacement à « dans quel rapport cette facture a-t-elle été déclarée ? ».

| Champ | Type | Description |
|---|---|---|
| `RGUKID` | Entier | Identifiant de rapport (PK · FK → F564240). |
| `RIY56BAR` | Texte(10) | Code de flux. |
| `RIDOC` / `RIDCT` / `RIKCO` | — | Triplet facture (PK · FK → F564231). |

---

## Domaine authentification

Trois tables pour la gestion intégrée utilisateur / rôle / session — utilisée quand `authEnabled = Y` dans le template *global*.

### F564250 — Utilisateurs

Une ligne par utilisateur. Les mots de passe sont stockés sous forme de hashs **PBKDF2-HMAC-SHA256** — jamais en clair.

- **Clé primaire** : `USUSER`
- **Notable** : Le format de `USPASSWD` est `iterations:base64(salt):base64(hash)`. `USFORCEPASSWD = 'Y'` force un changement de mot de passe à la prochaine connexion (par défaut sur les nouveaux comptes).

| Champ | Type | Description |
|---|---|---|
| `USUSER` | Texte(50) | Identifiant utilisateur (PK). |
| `USPASSWD` | Texte(200) | Hash PBKDF2-HMAC-SHA256 — `iterations:salt:hash`. |
| `USROLE` | Texte(50) | Nom de rôle (FK → F564251.RLNAME). |
| `USFULLNAME` | Texte(100) | Nom affiché. |
| `USEMAIL` | Texte(200) | Adresse e-mail. |
| `USACTIVE` | Texte(1) | `Y` = actif, `N` = désactivé. |
| `USFORCEPASSWD` | Texte(1) | `Y` = doit changer son mot de passe à la prochaine connexion. |
| `USCREATED` | Timestamp | Date de création du compte. |

### F564251 — Rôles

Une ligne par rôle. Définit la liste blanche de pages, le filtre société, et les options lecture seule / accès paramètres.

- **Clé primaire** : `RLNAME`
- **Notable** : `RLPAGES` et `RLCOMPANIES` sont des listes séparées par des virgules ; une valeur **vide** signifie *non restreint* (toutes les pages / toutes les sociétés). `RLSETTINGS = 'Y'` autorise l'accès au gestionnaire de configuration *Settings*.

| Champ | Type | Description |
|---|---|---|
| `RLNAME` | Texte(50) | Identifiant de rôle (PK). |
| `RLDESC` | Texte(200) | Description lisible. |
| `RLPAGES` | Texte(2000) | Identifiants de pages autorisés — séparés par des virgules (vide = toutes). |
| `RLCOMPANIES` | Texte(500) | Codes société autorisés — séparés par des virgules (vide = toutes). |
| `RLSETTINGS` | Texte(1) | `Y` = le rôle accorde l'accès au gestionnaire de configuration. |
| `RLREADONLY` | Texte(1) | `Y` = lecture seule, pas d'édition / suppression / redépôt. |

### F564252 — Sessions

Une ligne par session active. Les sessions sont validées à chaque appel API ; les lignes expirées sont purgées par le handler d'authentification.

- **Clé primaire** : `SSTOKEN` (UUID)
- **Notable** : Le token est envoyé en `Authorization: Bearer <SSTOKEN>` à chaque appel API. Deux index sur `SSUSER` et `SSEXPIRES` maintiennent les recherches et la purge efficaces.

| Champ | Type | Description |
|---|---|---|
| `SSTOKEN` | Texte(100) | Token / UUID de session (PK). |
| `SSUSER` | Texte(50) | Identifiant utilisateur (FK → F564250.USUSER). |
| `SSCREATED` | Timestamp | Date de création de la session. |
| `SSEXPIRES` | Timestamp | Date d'expiration de la session. |

---

## Index recommandés

La DDL embarque un petit ensemble d'index que tout déploiement en production a intérêt à conserver — ils servent les requêtes les plus fréquentes de l'IHM :

| Index | Table | Colonnes | Utilisé par |
|---|---|---|---|
| `F564231_STATUS_IX` | F564231 | `UHK74RSCD` | Compteurs du Dashboard et filtres de statut sur *E-Invoicing*. |
| `F564231_DATE_IX` | F564231 | `UHK74LDDJ` | Recherches par plage de dates sur la liste des factures. |
| `F564231_CUST_IX` | F564231 | `UHAN8` | Vues client. |
| `F564230_UUID_IX` | F564230 | `FEUKIDSZ` | Recherche d'UUID PA après import. |
| `F564240_PERIOD_IX` | F564240 | `RGKCO`, `RGY56BAR`, `RGEFDJ` | Filtres de la liste E-Reporting. |
| `F564242_INV_IX` | F564242 | `RIDOC`, `RIDCT`, `RIKCO`, `RIY56BAR` | Recherche « dans quel rapport cette facture a-t-elle été déclarée ? ». |
| `F564250_ROLE_IX` | F564250 | `USROLE` | Jointure utilisateur → rôle. |
| `F564252_USER_IX` | F564252 | `SSUSER` | Déconnexion / liste de sessions par utilisateur. |
| `F564252_EXP_IX` | F564252 | `SSEXPIRES` | Purge des sessions expirées. |

La DDL complète — incluant les variantes adaptées au dialecte pour Oracle et PostgreSQL — est embarquée dans le JAR sous `sql/oracle/ddl.sql` et `sql/postgres/ddl.sql`, et matérialisée sur disque par **Initialize Database**.
