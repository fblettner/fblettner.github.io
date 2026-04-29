---
title: E-Reporting
description: "Déclarations d'e-reporting vers la Plateforme Agréée — génération des flux 10.1 (détail B2C) et 10.3 (B2BINT agrégé) pour une société, un type et une période ; suivi du cycle de vie de chaque déclaration, redépôt à la demande, téléchargement du XML soumis."
keywords: [NomaUBL, e-reporting, B2C, intra-UE, B2BINT, OUTOFSCOPE, flux 10.1, flux 10.3, IN, RE, CO, MO, AFNOR XP Z12-014, RFE, Réforme de la Facturation Électronique, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# E-Reporting

L'écran **E-Reporting** est le point d'entrée opérationnel du **workflow d'e-reporting** de NomaUBL — la voie déclarative de la *Réforme de la Facturation Électronique* (RFE). Là où *E-Invoicing* dépose une facture structurée vers la Plateforme Agréée du destinataire, *E-Reporting* dépose une **déclaration agrégée** à destination de l'administration fiscale via cette même PA — pour les transactions qui sortent du périmètre de l'e-invoicing :

- **Transactions B2C** — ventes à des particuliers.
- **Transactions B2B intra-UE** — ventes à un acheteur d'un autre État membre.
- **Exports et autres transactions hors périmètre** — ventes à des acheteurs hors UE, flux internes inter-sociétés, etc.

Pour ces transactions l'acheteur ne reçoit pas de facture structurée via la PA ; le vendeur déclare néanmoins le chiffre d'affaires pour permettre à l'administration fiscale de calculer la TVA due. NomaUBL regroupe les transactions, construit le XML correspondant, le dépose sur la PA et suit son cycle de vie.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou un ERP personnalisé.

---

## Positionnement de l'e-reporting

L'e-reporting est la voie **déclarative** de la réforme — l'e-invoicing prend en charge la facture B2B structurée, l'e-reporting couvre tout ce qui ne passe pas par cette voie mais doit être déclaré pour la TVA.

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '28px 0', display: 'block'}}>
  <defs>
    <marker id="er-pos-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9eff"/>
    </marker>
    <marker id="er-pos-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#c084fc"/>
    </marker>
    <marker id="er-pos-arrow-slate" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="er-pos-g-slate" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.14"/>
      <stop offset="100%" stopColor="#64748b" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="er-pos-g-blue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.18"/>
      <stop offset="100%" stopColor="#4a9eff" stopOpacity="0.04"/>
    </linearGradient>
    <linearGradient id="er-pos-g-purple" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.22"/>
      <stop offset="100%" stopColor="#c084fc" stopOpacity="0.06"/>
    </linearGradient>
    <linearGradient id="er-pos-g-purple-strong" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#c084fc" stopOpacity="0.32"/>
      <stop offset="100%" stopColor="#a855f7" stopOpacity="0.12"/>
    </linearGradient>
  </defs>

  <rect x="410" y="130" width="240" height="190" rx="14" fill="#c084fc" fillOpacity="0.04" stroke="#c084fc" strokeOpacity="0.25" strokeWidth="1.3"/>
  <text x="425" y="152" fill="#c084fc" fontSize="11" fontWeight="800" letterSpacing="1.6" fontFamily="system-ui, sans-serif">📊 VOIE E-REPORTING</text>

  <rect x="40" y="160" width="140" height="70" rx="10" fill="url(#er-pos-g-slate)" stroke="#94a3b8" strokeWidth="1.3"/>
  <text x="110" y="188" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Vente</text>
  <text x="110" y="208" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.72">(tout système source)</text>

  <rect x="220" y="160" width="140" height="70" rx="10" fill="url(#er-pos-g-slate)" stroke="#94a3b8" strokeWidth="1.3" strokeDasharray="6 3"/>
  <text x="290" y="188" fill="currentColor" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Routage BAR</text>
  <text x="290" y="208" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.72">décision</text>

  <line x1="180" y1="195" x2="220" y2="195" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#er-pos-arrow-slate)"/>

  <rect x="430" y="30" width="200" height="60" rx="10" fill="url(#er-pos-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="530" y="56" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📤 E-Invoicing</text>
  <text x="530" y="75" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">facture structurée via PA</text>

  <path d="M 360 175 L 395 175 L 395 60 L 430 60" stroke="#4a9eff" strokeWidth="1.5" fill="none" markerEnd="url(#er-pos-arrow-blue)"/>
  <text x="370" y="130" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">B2B / B2G</text>

  <rect x="440" y="170" width="200" height="50" rx="8" fill="url(#er-pos-g-purple-strong)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="540" y="190" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">Flux 10.1</text>
  <text x="540" y="207" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">détail B2BINT · par facture</text>

  <rect x="440" y="240" width="200" height="50" rx="8" fill="url(#er-pos-g-purple-strong)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="540" y="260" fill="#c084fc" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">Flux 10.3</text>
  <text x="540" y="277" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.85">B2C / OUTOFSCOPE · agrégé</text>

  <line x1="360" y1="195" x2="440" y2="195" stroke="#c084fc" strokeWidth="1.5" markerEnd="url(#er-pos-arrow-purple)"/>
  <text x="383" y="187" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">B2BINT</text>

  <path d="M 360 215 L 405 215 L 405 265 L 440 265" stroke="#c084fc" strokeWidth="1.5" fill="none" markerEnd="url(#er-pos-arrow-purple)"/>
  <text x="370" y="234" fill="#c084fc" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">B2C / OUTOFSCOPE</text>

  <rect x="730" y="30" width="220" height="60" rx="10" fill="url(#er-pos-g-blue)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="840" y="56" fill="#4a9eff" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏢 PA acheteur</text>
  <text x="840" y="75" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">facture structurée reçue</text>

  <line x1="630" y1="60" x2="730" y2="60" stroke="#4a9eff" strokeWidth="1.5" markerEnd="url(#er-pos-arrow-blue)"/>

  <rect x="730" y="200" width="220" height="60" rx="10" fill="url(#er-pos-g-purple)" stroke="#c084fc" strokeWidth="1.5"/>
  <text x="840" y="226" fill="#c084fc" fontSize="13" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🏛 Administration fiscale</text>
  <text x="840" y="245" fill="currentColor" fontSize="10" fontStyle="italic" textAnchor="middle" fontFamily="system-ui, sans-serif" opacity="0.78">déclaration agrégée · via PA</text>

  <path d="M 640 195 L 690 195 L 690 230 L 730 230" stroke="#c084fc" strokeWidth="1.5" fill="none" markerEnd="url(#er-pos-arrow-purple)"/>
  <path d="M 640 265 L 690 265 L 690 230" stroke="#c084fc" strokeWidth="1.5" fill="none"/>
</svg>

La règle de routage BAR définie dans *UBL Defaults → Document Type / BAR Routing* pilote la répartition — la configurer correctement en amont garantit que les transactions appropriées atterrissent dans le bon flux automatiquement.

---

## Deux flux, quatre types de document

La spécification française d'e-reporting définit **deux flux** sortants et **quatre types de document** qui précisent si le rapport est une soumission initiale ou une correction.

| Flux | Périmètre | Forme du contenu |
|---|---|---|
| **`10.1`** | Détail **B2BINT** | Un élément `<Invoice>` par facture B2B internationale de la période — ID, date d'émission, code de type, devise, Vendeur (déclarant), Acheteur (contrepartie), totaux monétaires et un `<TaxSubTotal>` par taux de TVA. Les factures B2C ne sont *jamais* émises ici, conformément à la règle de routage de la spécification. |
| **`10.3`** | **B2C / OUTOFSCOPE** agrégé | Un bloc `<Transactions>` par *(code catégorie, devise)*, avec des `<TaxSubTotal>` imbriqués par taux portant la base imposable (en devise source) et le montant de TVA (toujours en EUR). |

| Code | Signification | Cas d'usage type |
|---|---|---|
| **`IN`** | **Initial** | Première déclaration de la période — valeur par défaut. |
| **`RE`** | **Remplacement** | Remplace une déclaration précédente sur la même période après correction. |
| **`CO`** | **Annulation** | Annule une déclaration précédente (par ex. soumise par erreur). |
| **`MO`** | **Modification** | Ajuste certaines lignes d'une déclaration précédente sans remplacement complet. |

Les rapports suivent une **fréquence** configurable — `MONTHLY` (mois calendaire, défaut), `DECADAL` (1-10, 11-20, 21-fin de mois) ou `WEEKLY` (semaine ISO, lundi → dimanche) — définie dans le template *e-reporting* de `config.json`.

### Codes de catégorie de transaction (flux 10.3)

Le bloc `<Transactions>` en flux 10.3 porte un `<CategoryCode>` (TT-81) qui classe l'opération sous-jacente parmi les quatre codes acceptés par la spécification :

| Code | Signification | Cas d'usage type |
|---|---|---|
| **`TLB1`** | Livraisons de biens taxables | Ventes de biens soumises à la TVA française. |
| **`TPS1`** | Prestations de services taxables | Prestations de services soumises à la TVA française. |
| **`TNT1`** | Non taxable | Opérations hors champ de la TVA française — ventes à distance intracommunautaires, services relevant de l'article 259 B du CGI, exportations. |
| **`TMA1`** | Régime de la marge | Opérations relevant du régime de TVA sur la marge (articles 266 e, 268, 297 A du CGI). |

NomaUBL dérive la catégorie depuis la ligne facture sous-jacente. Lorsqu'une ligne source porte une valeur en dehors de l'ensemble accepté, la plateforme retombe automatiquement sur `TLB1` (taux positif) ou `TNT1` (taux nul).

:::info[Les montants de TVA sont toujours en EUR]
Tous les éléments `<TaxAmount>` et `<TaxTotal>` produits par NomaUBL sont forcés en euros, quelle que soit la devise de la facture source. Le `<TaxableAmount>` conserve la devise d'origine de la facture, afin que le montant de l'opération sous-jacente reste auditable.
:::

---

## Statuts du cycle de vie

Les rapports e-reporting suivent un **cycle de vie dédié**, distinct de celui des factures. NomaUBL inscrit l'un de ces huit codes à chaque transition entre la *génération* et l'*acquittement (ou rejet) PA* :

<div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', margin: '18px 0', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', fontSize: '11px'}}>
  <span style={{fontSize: '10px', opacity: 0.7, marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700}}>Chemin nominal</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(148,163,184,0.55)', background: 'rgba(148,163,184,0.12)', color: '#cbd5e1', fontWeight: 600}}>9950 Généré</span>
  <span style={{opacity: 0.5}}>→</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa', fontWeight: 600}}>9952 Envoyé PA</span>
  <span style={{opacity: 0.5}}>→</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa', fontWeight: 600}}>9953 En attente</span>
  <span style={{opacity: 0.5}}>→</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.12)', color: '#4ade80', fontWeight: 600}}>9955 Déposé ✓</span>
  <span style={{flex: '1 1 100%', height: '4px'}} />
  <span style={{fontSize: '10px', opacity: 0.7, marginRight: '4px', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700}}>Échec / variantes</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(148,163,184,0.55)', background: 'rgba(148,163,184,0.12)', color: '#cbd5e1', fontWeight: 600}}>9951 Envoi désactivé</span>
  <span style={{opacity: 0.5}}>·</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.12)', color: '#fb923c', fontWeight: 600}}>9954 Échec d'envoi</span>
  <span style={{opacity: 0.5}}>·</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(255,159,10,0.55)', background: 'rgba(255,159,10,0.12)', color: '#fb923c', fontWeight: 600}}>9956 Échec d'import</span>
  <span style={{opacity: 0.5}}>·</span>
  <span style={{padding: '3px 9px', borderRadius: '999px', border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.12)', color: '#f87171', fontWeight: 600}}>9957 Rejeté ✗</span>
</div>

| Code | Tag | Signification |
|---|---|---|
| **`9950`** | `EREPORT_CREATED` | XML construit et persisté ; pas encore de tentative de dépôt. |
| **`9951`** | `EREPORT_SUBMIT_SKIPPED` | Rapport généré ; envoi PA désactivé (`sendToPA=N` sur le template *e-reporting*). Le XML reste téléchargeable mais n'atteint jamais la PA. |
| **`9952`** | `EREPORT_SENT_TO_PA` | Rapport déposé sur la PA en HTTP ; en attente de l'accusé de réception initial. |
| **`9953`** | `EREPORT_PENDING` | La PA a accusé réception et traite le rapport. |
| **`9954`** | `EREPORT_ERROR_SENT` | Échec de la soumission au niveau réseau ou HTTP — typiquement transitoire. **Resend** permet la reprise. |
| **`9955`** | `EREPORT_DEPOSITED` | La PA a accepté et enregistré le rapport — succès terminal. |
| **`9956`** | `EREPORT_FAILED_IMPORT` | La PA n'a pas pu importer le rapport (erreur de traitement post-acquittement). |
| **`9957`** | `EREPORT_REJECTED` | La PA a rejeté le rapport sur une règle de validation — échec terminal. La reprise passe par un `RE` corrigé. |

Les codes `9950` – `9954` sont *transitoires* (le rapport est en mouvement). `9955` – `9957` sont *terminaux* (pas de transition automatique ultérieure) ; un rapport `RE` (remplacement) est le seul moyen de surcharger un `9957` sur la même période.

---

## Barre d'outils

La barre d'outils au-dessus du tableau combine trois filtres texte avec deux raccourcis.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Société</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Flux</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.55, fontStyle: 'italic'}}>Statut</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>↻ Refresh</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 14px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600, border: '1px solid #4a9eff'}}>Generate report</span>
  </div>
</div>

| Champ | Critère |
|---|---|
| **Société** | Code société (`Kco`) auquel le rapport est rattaché (par ex. `00070`). |
| **Flux** | Code de flux — `10.1` (détail B2BINT) ou `10.3` (B2C / OUTOFSCOPE agrégé). |
| **Statut** | Recherche libre sur le code ou le libellé du statut courant. |
| **Refresh** | Relance la requête courante sans modifier les filtres. |
| **Generate report** | Ouvre la *modale de génération* — décrite plus bas. Masquée pour les sessions en lecture seule. |

---

## Liste des rapports

Le tableau affiche une ligne par rapport. Tri par défaut : `RGDOC` décroissant. Cliquer sur un en-tête de colonne pour trier ; cliquer sur une ligne ouvre la **modale de détail**.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.02)', fontSize: '12px'}}>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', fontWeight: 600, fontSize: '11px'}}>
    <div>ID</div><div>Flux</div><div>Société</div><div>Type</div><div>Période</div>
    <div style={{textAlign: 'right'}}>Factures</div><div>Statut</div><div>UUID PA</div><div>Création</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1042</div><div>10.1</div><div>00070</div><div>IN</div><div>2026-04-01 → 2026-04-30</div>
    <div style={{textAlign: 'right'}}>142</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>9955 Déposé</span></div>
    <div style={{fontFamily: 'monospace', opacity: 0.6, fontSize: '11px'}}>a1b2c3d4…f9e8</div>
    <div style={{opacity: 0.65}}>2026-05-02 09:30</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1041</div><div>10.3</div><div>00070</div><div>IN</div><div>2026-04-01 → 2026-04-30</div>
    <div style={{textAlign: 'right'}}>38</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(50,215,75,0.55)', background: 'rgba(50,215,75,0.1)', color: '#4ade80'}}>9955 Déposé</span></div>
    <div style={{fontFamily: 'monospace', opacity: 0.6, fontSize: '11px'}}>f6a7b8c9…d4e5</div>
    <div style={{opacity: 0.65}}>2026-05-02 09:31</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', alignItems: 'center'}}>
    <div>1040</div><div>10.1</div><div>00070</div><div>RE</div><div>2026-03-01 → 2026-03-31</div>
    <div style={{textAlign: 'right'}}>12</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(0,122,255,0.55)', background: 'rgba(0,122,255,0.1)', color: '#60a5fa'}}>9953 En attente</span></div>
    <div style={{opacity: 0.4}}>—</div>
    <div style={{opacity: 0.65}}>2026-04-15 14:22</div>
  </div>
  <div style={{display: 'grid', gridTemplateColumns: '60px 60px 80px 60px 1.4fr 70px 1.5fr 1.4fr 110px', padding: '10px 14px', alignItems: 'center'}}>
    <div>1039</div><div>10.3</div><div>00080</div><div>IN</div><div>2026-03-01 → 2026-03-31</div>
    <div style={{textAlign: 'right'}}>27</div>
    <div><span style={{padding: '2px 9px', borderRadius: '999px', fontSize: '11px', fontWeight: 600, border: '1.5px solid rgba(255,69,58,0.55)', background: 'rgba(255,69,58,0.1)', color: '#f87171'}}>9957 Rejeté</span></div>
    <div style={{fontFamily: 'monospace', opacity: 0.6, fontSize: '11px'}}>9d8e7f6a…2b1c</div>
    <div style={{opacity: 0.65}}>2026-04-02 11:15</div>
  </div>
</div>

### Colonnes par défaut

| Colonne | Description |
|---|---|
| **ID** | Identifiant interne du rapport (`RGDOC`). Auto-incrémenté. |
| **Flux** | `10.1` (détail B2C) ou `10.3` (B2BINT agrégé). |
| **Société** | Code société (`Kco`) auquel le rapport s'applique. |
| **Type** | Type de document — `IN` / `RE` / `CO` / `MO`. |
| **Période** | Plage déclarative — `début → fin` (ISO 8601). |
| **Factures** | Nombre de factures sources incluses dans le rapport. |
| **Statut** | Badge du statut courant — code + libellé, coloré par famille. |
| **UUID PA** | Identifiant unique renvoyé par la PA après acceptation. Tronqué à `8…8` ; valeur complète au survol. |
| **Création** | Horodatage de génération. |

Un sélecteur de taille de page en bas du tableau vaut 50 par défaut ; des valeurs jusqu'à 500 sont acceptées. Le nombre total de rapports correspondants figure à côté de la pagination.

### Export CSV

Le bouton standard `Export` de la barre d'outils exporte la vue courante (filtres compris) au format CSV sous le nom `ereporting.csv`.

---

## Modale de détail

Cliquer sur une ligne ouvre une modale comportant trois onglets en haut : **Header**, **Invoices**, **History**. Le titre de la modale affiche le triplet `Flux / Kco / Rgdoc`.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0', margin: '20px 0', overflow: 'hidden'}}>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>Détail rapport — 10.1 / 00070 / 1042</div>
    <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
      <span style={{padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', fontWeight: 500}}>⬇ Download XML</span>
      <span style={{padding: '4px 10px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '11px', fontWeight: 600}}>Resend to PA</span>
      <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
    </div>
  </div>
  <div style={{display: 'flex', gap: '0', padding: '0 18px', borderBottom: '1px solid rgba(255,255,255,0.08)'}}>
    <div style={{padding: '10px 16px', fontWeight: 600, borderBottom: '2px solid #4a9eff', color: '#4a9eff'}}>Header</div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>Invoices <span style={{opacity: 0.5, fontSize: '11px'}}>(142)</span></div>
    <div style={{padding: '10px 16px', opacity: 0.6}}>History <span style={{opacity: 0.5, fontSize: '11px'}}>(3)</span></div>
  </div>
  <div style={{padding: '14px 18px', fontSize: '12px', opacity: 0.6, fontStyle: 'italic'}}>Contenu de l'onglet — varie selon l'onglet actif</div>
</div>

### Onglet Header *(défaut)*

Grille des champs résumant l'identité du rapport et le résultat du dépôt.

| Champ | Description |
|---|---|
| **RGDOC** | Identifiant interne du rapport. |
| **FLUX** | `10.1` ou `10.3`. |
| **KCO** | Code société. |
| **Type** | `IN` / `RE` / `CO` / `MO`. |
| **Period start / end** | Dates ISO 8601 délimitant la fenêtre déclarative. |
| **Sender** | Matricule du transmetteur, schéma `0238` — typiquement l'entité enregistrée auprès de la PA. |
| **Issuer** | Identifiant de l'émetteur légal, schéma `0002` (SIREN). |
| **PA UUID** | Identifiant retourné par la PA à l'acceptation. Vide tant que le rapport n'a pas été accepté. |
| **Status** | Statut courant du cycle de vie — code + libellé. |
| **Status message** | Dernier message renvoyé par la PA — typiquement le motif de rejet pour les soumissions échouées. |
| **Invoices** | Nombre de factures sources incluses dans le rapport. |
| **Created** | Horodatage de génération. |

### Onglet Invoices

Vue tabulaire de chaque facture source incluse dans le rapport. Les colonnes correspondent à l'enregistrement e-invoicing sous-jacent, ce qui permet de croiser le rapport et ses sources.

| Colonne | Description |
|---|---|
| **Number** | Numéro de facture — `BT-1` lorsqu'il est renseigné, sinon `DOC/DCT/KCO`. |
| **Date** | Date d'émission (`BT-2`). |
| **BAR** | Code de routage BAR porté par la facture (`B2C`, `B2BINT`, `OUTOFSCOPE`, …). |
| **Customer** | Nom de la partie acheteur. |
| **HT** | Montant total hors taxes. |
| **VAT** | Montant total de la TVA. |
| **TTC** | Montant total toutes taxes comprises. |
| **CCY** | Code devise ISO 4217. |

La liste reflète l'état persisté au moment de la génération — relancer un rapport (`RE`) ne remodèle pas rétroactivement la vue de l'`IN` précédent.

### Onglet History

Le **cycle de vie** du rapport — chaque statut traversé, en ajout uniquement, dans l'ordre de soumission.

| Colonne | Description |
|---|---|
| **#** | Numéro de séquence — `1` correspond à l'état initial à la génération, les lignes suivantes sont les événements renvoyés par la PA. |
| **Status** | Code + libellé du statut issu du catalogue e-reporting (par ex. `9950 Généré`, `9952 Envoyé PA`, `9953 En attente`, `9955 Déposé`, `9957 Rejeté`). Voir *Statuts du cycle de vie* plus haut. |
| **Message** | Texte libre renvoyé par la PA — typiquement le motif de rejet ou la note d'acceptation. |
| **Date** | Horodatage de l'événement. |

Le cycle de vie est en lecture seule ici ; la seule action disponible est **Resend to PA** dans l'en-tête de la modale, qui ajoute un nouvel événement après un redépôt réussi.

### Actions de l'en-tête

| Bouton | Comportement |
|---|---|
| **Download XML** | Télécharge le XML formaté du rapport (motif de nom `ereporting-<flux>-<kco>-<rgdoc>.xml`). Le XML est mis en forme lorsque possible, sinon le contenu stocké brut est conservé. |
| **Resend to PA** | Redépose le XML existant sur la Plateforme Agréée. Utile après une erreur PA transitoire. Masqué pour les sessions en lecture seule. Le cycle de vie est mis à jour avec le résultat du nouveau dépôt. |
| **Fermer** *(✕)* | Ferme la modale sans modification. |

---

## Modale de génération

Ouverte via **Generate report** dans la barre d'outils. Construit et dépose un ou plusieurs rapports pour une combinaison société / flux / période choisie.

<div style={{border: '1px solid rgba(255,255,255,0.12)', borderRadius: '12px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,255,255,0.025)', maxWidth: '520px', boxShadow: '0 8px 24px rgba(0,0,0,0.25)'}}>
  <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div style={{fontWeight: 700, fontSize: '14px'}}>Générer un e-reporting</div>
    <span style={{opacity: 0.5, fontSize: '12px'}}>✕</span>
  </div>
  <div style={{padding: '18px'}}>
    <div style={{marginBottom: '14px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Société (kco)</div>
      <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', minHeight: '20px'}}>00070</div>
      <div style={{fontSize: '10px', opacity: 0.55, marginTop: '4px'}}>Laisser vide pour appliquer à toutes les sociétés configurées.</div>
    </div>
    <div style={{marginBottom: '14px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '6px'}}>Flux à générer</div>
      <div style={{display: 'flex', gap: '8px'}}>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.5)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff'}}>10.1</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.5)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff'}}>10.3</span>
      </div>
    </div>
    <div style={{marginBottom: '14px'}}>
      <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '6px'}}>Type de document</div>
      <div style={{display: 'flex', gap: '8px'}}>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(74,158,255,0.5)', background: 'rgba(74,158,255,0.12)', color: '#4a9eff'}}>IN</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.15)', opacity: 0.7}}>RE</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.15)', opacity: 0.7}}>CO</span>
        <span style={{padding: '5px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.15)', opacity: 0.7}}>MO</span>
      </div>
    </div>
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px'}}>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Début de période</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>2026-04-01</div>
      </div>
      <div>
        <div style={{fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.7, marginBottom: '4px'}}>Fin de période</div>
        <div style={{padding: '8px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px'}}>2026-04-30</div>
      </div>
    </div>
    <div>
      <span style={{padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(74,158,255,0.4)', color: '#4a9eff', fontSize: '12px', fontWeight: 500}}>📅 Calculer la période</span>
    </div>
  </div>
  <div style={{padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'flex-end', gap: '8px', background: 'rgba(255,255,255,0.02)'}}>
    <span style={{padding: '7px 16px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', fontWeight: 500}}>Annuler</span>
    <span style={{padding: '7px 16px', borderRadius: '6px', background: '#4a9eff', color: '#fff', fontSize: '12px', fontWeight: 600}}>Générer</span>
  </div>
</div>

| Champ | Description |
|---|---|
| **Société (kco)** | Restreint la génération à une seule société. Laisser vide pour appliquer à **toutes** les sociétés déclarées dans le template *e-reporting*. |
| **Flux à générer** | Sélection multiple entre `10.1` et `10.3`. Les deux sont sélectionnés par défaut — un rapport est émis par flux actif. |
| **Type de document** | Une valeur parmi `IN` (initial), `RE` (remplacement), `CO` (annulation), `MO` (modification). Défaut : `IN`. |
| **Début / fin de période** | Dates ISO 8601 délimitant la fenêtre déclarative. |
| **Calculer la période** | Pré-remplit *Début* / *Fin* avec la prochaine fenêtre due selon la fréquence configurée (`MONTHLY` / `DECADAL` / `WEEKLY`). |
| **Annuler** | Ferme la modale sans générer. |
| **Générer** | Construit le XML pour chaque flux sélectionné, persiste la ligne du rapport et dépose sur la PA. La liste se rafraîchit en cas de succès. |

Lors de la génération, les blocs **Sender**, **Issuer** et **Business Process** par facture (TT-7 / TT-12 / TT-28 / TT-29) sont alimentés depuis le template *e-reporting* — ces valeurs par défaut se configurent une seule fois dans *Settings → Système → E-Reporting* (Sender / matricule PA + rôle `WK`, Issuer / SIREN sous schéma `0002` pour les sociétés françaises, Business Process émis uniquement sur les factures B2BINT). En l'absence d'identifiant de transmission saisi manuellement, le rapport est identifié par **`{siren}-{flux}-{début}-{fin}`** : la valeur reste stable d'une régénération à l'autre sur la même période et permet à la PA de dédupliquer des dépôts identiques.

Après une exécution réussie, les nouveaux rapports apparaissent en tête de liste avec un statut `9950` (Généré) qui progresse rapidement par `9952` (Envoyé PA) et `9953` (En attente), puis aboutit à `9955` (Déposé) lorsque la PA accuse réception. Lorsque l'option *Send to PA* est désactivée (`sendToPA=N`), le rapport reste en `9951` (Envoi désactivé) et le XML reste téléchargeable pour relecture hors ligne.

---

## Conseils & bonnes pratiques

- **Configurer le routage BAR en premier.** La liste des factures qui aboutit en flux 10.1 / 10.3 est pilotée par *UBL Defaults → Document Type / BAR Routing*. `B2BINT` alimente le flux 10.1 (détail par facture) ; `B2C` et `OUTOFSCOPE` alimentent le flux 10.3 (agrégé). Une facture mal classée échappe aux *deux* voies — chaque type de document doit être rattaché à `B2B`, `B2G`, `B2C`, `B2BINT` ou `OUTOFSCOPE` avant la première génération.
- **Préférer *Calculer la période* à la saisie manuelle.** Cette option respecte la fréquence configurée dans le template *e-reporting*, donc la fenêtre suggérée correspond à l'échéance réglementaire (mois plein précédent pour `MONTHLY`, décade précédente pour `DECADAL`, semaine ISO précédente pour `WEEKLY`).
- **`IN` d'abord, puis `RE` pour les corrections.** Une facture arrivée tardivement ou un montant corrigé appelle un rapport `RE` couvrant la même période — ne jamais ré-émettre un `IN` sur une période déjà déclarée.
- **Réserver `CO` à l'annulation totale.** À utiliser lorsqu'une période entière a été déclarée par erreur ; les corrections partielles passent par `RE`.
- **L'UUID PA est l'accusé de réception.** Il reste vide entre la soumission et l'acceptation (statuts `9952` et `9953`), puis devient définitif lorsque la PA accuse `9955` (Déposé). C'est la preuve juridique de la déclaration en cas de contrôle.
- **Redéposer après une erreur PA transitoire, pas après un rejet Schematron.** Un `9954` (Échec d'envoi) traduit un incident réseau ou HTTP — *Resend* permet la reprise. Un `9957` (Rejeté) porte un motif Schematron ou règle métier dans le *Status message* — corriger les données BAR ou la facture en amont et générer un nouveau `RE`, plutôt que de redéposer à l'aveugle. Un `9956` (Échec d'import) se trouve entre les deux : lire le message avant de décider entre redépôt et reconstruction.
- **L'onglet Invoices est un instantané.** Il enregistre les factures sources telles qu'elles étaient au moment de la génération. Les modifications ultérieures n'altèrent pas rétroactivement le rapport déposé — elles apparaissent dans le `RE` suivant si elles sont matérielles.
- **Les données de TVA sont lues depuis l'UBL en priorité.** Lors de la génération, NomaUBL parse les nœuds `cac:TaxTotal/cac:TaxSubtotal` au niveau document de chaque UBL stocké — les sous-totaux par ligne sont ignorés pour éviter le double comptage. La table de synthèse TVA n'est consultée qu'en repli. Si un rapport B2C sort avec des blocs `<Transactions>` vides alors que les factures et leur UBL sont bien en base, la synthèse TVA est probablement désynchronisée par rapport à l'UBL — relancer la génération depuis l'UBL résout l'écart.
- **Configurer une seule fois les valeurs Sender / Issuer / Business Process.** Settings → Système → E-Reporting regroupe le matricule PA (Sender, rôle par défaut `WK`), le SIREN de l'émetteur (Issuer, schéma par défaut `0002` pour les sociétés françaises ; `0223` / `0227` / `0228` / `0229` pour les cas internationaux) et le processus métier par facture (émis uniquement en B2BINT). Tenir ces valeurs au niveau du template garantit la cohérence de tous les rapports générés et évite les surcharges au cas par cas.
- **Les codes catégorie hors-liste sont remappés automatiquement.** Une ligne source portant un code catégorie autre que `TLB1` / `TPS1` / `TNT1` / `TMA1` est silencieusement ramenée à `TLB1` (taux positif) ou `TNT1` (taux nul) au moment de la génération. Renseigner explicitement la catégorie sur la ligne source dès que la valeur par défaut ne convient pas (par exemple un service qui doit aboutir en `TPS1` plutôt qu'en `TLB1`).
