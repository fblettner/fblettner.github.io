---
title: Déclaration de TVA
description: "Agrège chaque facture d'une période sur les lignes du formulaire CA3 — ventes / achats × France / intra-UE / hors UE × taux de TVA × type de facture — avec dépliement par paliers jusqu'aux factures individuelles derrière chaque montant, et exports en un clic vers Excel ou PDF au format CA3."
keywords: [NomaUBL, déclaration de TVA, CA3, Cerfa 3310-CA3, TVA française, intra-UE, hors UE, B2B, B2C, B2BINT, B2G, base imposable, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Déclaration de TVA

L'écran **Déclaration de TVA** agrège chaque facture comptabilisée sur une période sur les lignes du formulaire **CA3** français — ventes / achats × France / intra-UE / hors UE × taux de TVA × type de facture. Chaque cellule se déplie jusqu'aux factures individuelles qui la composent ; le résultat s'exporte vers Excel pour la comptabilité ou vers un PDF au format CA3, prêt à être transmis au comptable.

Utilisez cette page quand :

- vous préparez la déclaration de TVA mensuelle ou trimestrielle et voulez une synthèse au format CA3, construite directement à partir des factures déjà dans la plateforme ;
- vous devez rapprocher une ligne CA3 des factures qui la composent — quels clients, quels numéros, quels montants ;
- vous voulez une synthèse imprimable de la période à joindre au dossier comptable.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Le filtre de période s'applique à la **date d'émission de la facture** — celle imprimée sur la facture elle-même — donc la période reste stable même si les données sous-jacentes sont reconstruites plus tard. La liste Factures propose la même base de date via son [Sélecteur de base de date](./invoices.md#base-de-date) : un clic sur un montant de la matrice TVA ouvre la liste Factures avec le bon ensemble.

La matrice est servie depuis les lignes de détail TVA enregistrées (`F564234`), sans relecture de chaque UBL à chaque chargement — la page s'ouvre donc en **quelques secondes que la période contienne 2 000 ou 200 000 factures**. Pour conserver ce comportement, laissez *Enregistrer les détails TVA* activé sous *Paramètres → Connecteurs → db-nomaubl → Tables* — voir [Stockage des détails](../configuration/database-connectors/nomaubl.md#stockage-des-détails).

---

## Vue d'ensemble

<svg viewBox="0 0 1000 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="vat-pg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="vat-pg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="vat-pg-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="420" rx="14" fill="url(#vat-pg-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Déclaration de TVA</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="100" height="26" rx="6" fill="url(#vat-pg-blue)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="290" y="101" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📅 Avril 2026 ▾</text>
  <rect x="348" y="84" width="56" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="376" y="101" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Mois</text>
  <rect x="410" y="84" width="76" height="26" rx="6" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="448" y="101" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Trimestre</text>
  <rect x="494" y="84" width="86" height="26" rx="6" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="537" y="101" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Société ▾</text>
  <rect x="660" y="84" width="56" height="26" rx="6" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="688" y="101" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">▣ Excel</text>
  <rect x="722" y="84" width="58" height="26" rx="6" fill="rgba(192,132,252,0.10)" stroke="rgba(192,132,252,0.40)" strokeWidth="1"/>
  <text x="751" y="101" fill="#c084fc" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">📄 PDF CA3</text>

  <text x="240" y="138" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">VENTES</text>
  <rect x="240" y="146" width="540" height="32" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="166" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▾  France</text>
  <text x="572" y="166" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">128 450,00</text>
  <text x="672" y="166" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">23 110,00</text>
  <text x="772" y="166" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">412 factures</text>

  <rect x="262" y="184" width="518" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="201" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">20 %</text>
  <text x="572" y="201" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">115 550,00</text>
  <text x="672" y="201" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">23 110,00</text>
  <text x="772" y="201" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">370</text>

  <rect x="262" y="214" width="518" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="274" y="231" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">5,5 %</text>
  <text x="572" y="231" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">12 900,00</text>
  <text x="672" y="231" fill="#cbd5e1" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">709,50</text>
  <text x="772" y="231" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">42</text>

  <rect x="240" y="248" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Intra-UE</text>
  <text x="572" y="266" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">18 200,00</text>
  <text x="672" y="266" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">— (exonéré)</text>
  <text x="772" y="266" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">38</text>

  <rect x="240" y="280" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Hors UE</text>
  <text x="572" y="298" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">9 800,00</text>
  <text x="672" y="298" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace">— (exonéré)</text>
  <text x="772" y="298" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">12</text>

  <text x="240" y="334" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">ACHATS</text>
  <rect x="240" y="342" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="360" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  France</text>
  <text x="572" y="360" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">42 100,00</text>
  <text x="672" y="360" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">7 530,00</text>
  <text x="772" y="360" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">157 factures</text>

  <rect x="240" y="374" width="540" height="28" rx="4" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="392" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">▸  Acquisitions intra-UE</text>
  <text x="572" y="392" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">5 600,00</text>
  <text x="672" y="392" fill="#e2e8f0" fontSize="10" textAnchor="end" fontFamily="ui-monospace, monospace" fontWeight="700">1 120,00</text>
  <text x="772" y="392" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">9</text>

  <rect x="240" y="416" width="200" height="22" rx="11" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="340" y="431" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Solde · TVA à payer  16 169,50 €</text>

  <rect x="20" y="80" width="180" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="98" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sélecteur de période</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par défaut : mois complet précédent</text>
  <line x1="200" y1="100" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>

  <rect x="820" y="156" width="160" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="174" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois colonnes</text>
  <text x="830" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">base · TVA · nombre</text>
  <line x1="820" y1="170" x2="780" y2="166" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>

  <rect x="20" y="240" width="180" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="258" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Zone géographique</text>
  <text x="30" y="272" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">France / Intra-UE / Hors UE</text>
  <line x1="200" y1="258" x2="240" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>

  <rect x="820" y="404" width="160" height="44" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="422" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bloc Solde</text>
  <text x="830" y="436" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">TVA à payer ou crédit</text>
  <line x1="820" y1="424" x2="780" y2="427" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#vat-pg-arrow)"/>
</svg>

---

## Barre d'outils

La barre d'outils au-dessus de la matrice fixe la **période**, un **filtre société** optionnel et les **boutons d'export**.

<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px', margin: '20px 0', background: 'rgba(255,255,255,0.02)'}}>
  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center'}}>
    <span style={{padding: '6px 12px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>📅 Avril 2026 ▾</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', background: 'rgba(74,158,255,0.12)', border: '1px solid rgba(74,158,255,0.4)', fontSize: '12px', fontWeight: 600, color: '#4a9eff'}}>Mois</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>Trimestre</span>
    <span style={{padding: '5px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.15)', fontSize: '12px', opacity: 0.7}}>Société ▾</span>
    <span style={{flex: 1, minWidth: '8px'}} />
    <span style={{padding: '5px 12px', borderRadius: '6px', background: 'rgba(34,197,94,0.10)', border: '1px solid rgba(34,197,94,0.4)', fontSize: '12px', fontWeight: 600, color: '#22c55e'}}>▣ Excel</span>
    <span style={{padding: '5px 12px', borderRadius: '6px', background: 'rgba(192,132,252,0.10)', border: '1px solid rgba(192,132,252,0.4)', fontSize: '12px', fontWeight: 600, color: '#c084fc'}}>📄 PDF CA3</span>
  </div>
</div>

| Contrôle | Effet |
|---|---|
| **Sélecteur de période** | Choisit la période couverte par la matrice. Par défaut, le **mois complet précédent** — celui que vous déclarez. Basculez sur **Trimestre** pour une déclaration trimestrielle. Le filtre s'applique à la **date d'émission de la facture** (celle imprimée sur la facture elle-même) : la période reste stable même si les données sous-jacentes sont reconstruites plus tard. La liste Factures propose la même base de date via son [Sélecteur de base de date](./invoices.md#base-de-date) — un clic sur un montant ouvre la liste Factures avec ce sélecteur déjà positionné, donc le nombre affiché correspond à celui d'où l'on vient. |
| **Boutons Mois / Trimestre** | Basculent entre un pas mensuel et un pas trimestriel. Le libellé du sélecteur de période s'adapte (par ex. *T2 2026*). |
| **Société** | Optionnel. Restreint la période aux factures d'un code société (KCO). Par défaut : *Toutes les sociétés*. |
| **▣ Excel** | Télécharge le classeur décrit dans [Export Excel](#export-excel). |
| **📄 PDF CA3** | Télécharge la synthèse au format CA3 décrite dans [Export PDF — mise en page CA3](#export-pdf--mise-en-page-ca3). |

---

## La matrice CA3

La matrice s'ouvre **repliée** au niveau des zones géographiques — *France*, *Intra-UE* et *Hors UE*, pour les *Ventes* comme pour les *Achats*. Chaque ligne affiche trois chiffres : **base imposable** (Total HT), **montant de TVA** (Total TVA) et le **nombre de factures**.

Cliquez sur le chevron d'une ligne pour la déplier ; un nouveau clic la replie. La matrice comporte **trois niveaux de dépliement** sous chaque zone :

| Niveau | Contenu | Exemple |
|---|---|---|
| **1 — Taux de TVA** | Une ligne par taux présent dans la période pour cette zone. | `20 %`, `10 %`, `5,5 %`, `2,1 %`, `0 %`. |
| **2 — Type de facture** | Sous une ligne de taux, une ligne par routage BAR — `B2B`, `B2C`, `B2BINT`, `B2G`, *non classé*. | Une ligne `20 %` de *France* se décompose en contributions B2B / B2C. |
| **3 — Factures individuelles** | Sous une ligne de type, une ligne par facture : numéro, type, société, base imposable, montant de TVA. Plafonné à **200 lignes** en ligne — utilisez l'export Excel pour la liste complète. | `12345 / RI / 00070   Acme Industries SA   500,00   100,00`. |

Chaque montant de la matrice est **cliquable**. Un clic ouvre la [liste Factures](./invoices.md) pré-filtrée sur le même ensemble — même période, même sens, même zone, même taux, même type quand cela s'applique — pour passer dans la liste opérationnelle sans ressaisir aucun filtre.

### Règles de classement par zone

Le classement utilise le **pays de la contrepartie** capturé sur chaque facture à l'insertion (pays de l'acheteur pour les ventes, du fournisseur pour les achats) et le sens *Ventes / Achats* enregistré sur la facture (`UHDRIN`).

| Zone | Ventes (émises) | Achats (reçues) |
|---|---|---|
| **France** | Pays de l'acheteur = `FR`. | Pays du fournisseur = `FR`. |
| **Intra-UE** | Pays de l'acheteur dans les 26 autres États membres de l'UE. | Pays du fournisseur dans les 26 autres États membres de l'UE. |
| **Hors UE** | Tout le reste (ou pays inconnu). | Tout le reste (ou pays inconnu). |

Les taux roulés sous *Ventes intra-UE* et *Ventes hors UE* apparaissent en exonéré (`—`) — ils ne contribuent pas à la colonne TVA, seulement à la base imposable. Les *Acquisitions intra-UE* côté Achats portent une TVA autoliquidée et contribuent à la fois à la base imposable et au montant de TVA.

---

## Quand la matrice est vide

Si la base ne contient encore aucune ligne de détail TVA (`F564234`) pour la période sélectionnée — typiquement juste après l'activation de *Enregistrer les détails TVA*, avant qu'une reconstruction historique n'ait eu lieu — la page n'affiche plus de matrice vide trompeuse. Elle affiche la commande exacte à exécuter, avec les dates de la période sélectionnée déjà pré-remplies :

<div style={{border: '1px solid rgba(255,159,10,0.40)', borderRadius: '10px', overflow: 'hidden', margin: '20px 0', background: 'rgba(255,159,10,0.04)', padding: '20px 24px'}}>
  <div style={{fontSize: '13px', fontWeight: 700, color: '#fb923c', marginBottom: '6px'}}>⚠ Pas de détails TVA pour Avril 2026</div>
  <div style={{fontSize: '12px', opacity: 0.85, marginBottom: '14px', lineHeight: 1.55}}>La base ne contient aucune ligne de détail TVA pour cette période. Lancez la commande de reconstruction une fois, puis rouvrez la page :</div>
  <div style={{fontFamily: 'ui-monospace, monospace', fontSize: '12px', padding: '12px 14px', background: 'rgba(0,0,0,0.35)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)'}}>./nomaubl.sh backfill-vat prod 2026-04-01 2026-04-30</div>
  <div style={{fontSize: '11px', opacity: 0.65, marginTop: '10px', fontStyle: 'italic'}}>Relançable sans risque sur la même période, sans créer de doublons.</div>
</div>

La commande est documentée sous [Ligne de commande → `backfill-vat`](../management/command-line.md#backfill-vat). Une fois la reconstruction faite, rouvrez la page TVA — la matrice se remplit comme attendu.

---

## Export Excel

Le bouton **▣ Excel** télécharge un classeur à deux feuilles :

| Feuille | Contenu |
|---|---|
| **Synthèse** | Reprend la matrice à l'écran — ventes / achats × zone × taux × type — avec sous-totaux par zone et par sens. |
| **Détails** | Une ligne par facture qui contribue à la période : numéro, type, société, nom de la contrepartie, pays de la contrepartie, routage BAR, base imposable, montant de TVA, devise, date d'émission. |

Les cellules de montant sont des nombres réels, pas du texte — totaux, tableaux croisés et formules Excel en aval fonctionnent sans retraitement.

---

## Export PDF — mise en page CA3

Le bouton **📄 PDF CA3** télécharge une synthèse d'une page reprenant la mise en page du formulaire officiel **Cerfa 3310-CA3**, prête à être archivée avec le reste de la liasse comptable sans ressaisie.

| Bloc | Lignes CA3 |
|---|---|
| **Section A — Opérations réalisées** | Ligne **01** (ventes soumises à TVA), **03** (acquisitions intra-UE), **04** (exportations hors UE), **06** (livraisons intra-UE), **7B** (autres opérations non imposables). |
| **Section B — TVA brute puis déductible** | Une ligne par taux applicable : **08** (20 %), **9B** (10 %), **09** (5,5 %), **10** (2,1 %) et **14** (autres taux), avec total **16**. Puis **20** (TVA déductible sur biens et services) et total **23**. |
| **Solde** | Soit **28** (*TVA à payer*) quand la période se solde en débit, soit **32** (*crédit*) quand la TVA déductible dépasse la TVA collectée. |

Le PDF est une synthèse imprimable — il ne remplace pas le dépôt sur le portail de la DGFiP.

---

## Note sur les données existantes

Les factures créées avant cette version n'ont pas de pays de contrepartie renseigné. Elles sont classées en **France** par défaut tant que la facture sous-jacente n'a pas été retraitée (pour que le pays soit capturé depuis le document UBL et enregistré). Toute nouvelle facture est désormais créée avec le bon pays.

Si une facture intra-UE ou hors UE apparaît encore sous *France*, la relancer depuis la [liste Factures](./invoices.md) (Modifier → Enregistrer, ou un nouveau Traiter depuis [Synchronisation → Fetch Input](../sync/fetch-input.md)) rafraîchit le pays.
