---
title: PDF vers XML
description: "NomaUBL Traitement → PDF vers XML : convertir un PDF texte ou un PDF JD Edwards balisé, lire le XML produit, régler le tableau, le récapitulatif TVA, le numéro de facture, le découpage en factures et la recherche de société d'un document en cliquant sur les lignes, puis les enregistrer dans le document."
keywords: [NomaUBL, PDF vers XML, source PDF, PDF texte, PDF JD Edwards, manifeste, lignes d'en-tête, récapitulatif TVA, clé de facture, recherche de société, SIRET, SIREN, numéro de TVA, mapping, SAP, NetSuite, ERP sur mesure]
---

# PDF vers XML

La page **PDF vers XML** affiche le XML produit par un PDF, pour démarrer ou ajuster le mapping d'un [document à source PDF](../management/documents.md#extraction-pdf). Elle convertit un **PDF texte** issu de n'importe quel système — JD Edwards, SAP, NetSuite, ERP sur mesure ou outil de facturation — ou un **PDF JD Edwards balisé**, avec ou sans les réglages d'un document, et enregistre dans le document les réglages essayés sur la page. Une conversion n'enregistre rien : la page est un outil de mise au point.

Accès : **Traitement → PDF vers XML**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 588" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="p2x-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="p2x-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="p2x-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="p2x-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="538" rx="14" fill="url(#p2x-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">PDF vers XML</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affichez le XML produit par un PDF pour démarrer ou ajuster son mapping.</text>
  <rect x="240" y="82" width="100" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Choisir un PDF</text>
  <text x="348" y="97" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">invoice-2026-0412.pdf</text>
  <rect x="490" y="82" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">PDF texte ▾</text>
  <rect x="608" y="82" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="618" y="96.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">invoices ▾</text>
  <rect x="736" y="82" width="111" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="791.5" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Nouveau document</text>
  <rect x="855" y="82" width="72" height="22" rx="5" fill="url(#p2x-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="891.0" y="96.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Convertir</text>
  <rect x="935" y="82" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="996.0" y="96.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger le XML</text>
  <text x="240" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉBUT DU TABLEAU</text>
  <rect x="240" y="130" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">PRESTATION</text>
  <text x="370" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES D'EN-TÊTE</text>
  <rect x="370" y="130" width="60" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">2</text>
  <text x="470" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIN DU TABLEAU</text>
  <rect x="470" y="130" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="480" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">N° contrat</text>
  <rect x="588" y="132" width="123" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="649.5" y="144.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 ligne(s) trouvée(s)</text>
  <text x="740" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉBUT DU RÉCAP. TVA</text>
  <rect x="740" y="130" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">^Taux TVA</text>
  <text x="860" y="126" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIN DU RÉCAP. TVA</text>
  <rect x="860" y="130" width="90" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="144.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">^Totaux</text>
  <rect x="958" y="132" width="133" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="1024.5" y="144.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 taux de TVA trouvé(s)</text>
  <text x="240" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NUMÉRO DE FACTURE</text>
  <rect x="240" y="174" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="188.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">36834.FU · Numero ▾</text>
  <rect x="418" y="176" width="128" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="482.0" y="188.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Numéro 36834 · Type FU</text>
  <text x="600" y="170" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TROUVER LA SOCIÉTÉ PAR</text>
  <rect x="600" y="174" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="188.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SIRET ▾</text>
  <rect x="686" y="174" width="80" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="188.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SIRET ▾</text>
  <text x="776" y="189" fill="#4ade80" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">→ 00001</text>
  <rect x="900" y="174" width="180" height="22" rx="5" fill="url(#p2x-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="990.0" y="188.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer dans le document</text>
  <rect x="240" y="208" width="380" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="218" width="117" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="308.5" y="232.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Lignes de facture</text>
  <rect x="360" y="218" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="418.5" y="232.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Récapitulatif TVA</text>
  <rect x="520" y="218" width="90" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="565.0" y="232.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recommencer</text>
  <text x="250" y="258" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Cliquez sur la première ligne après les lignes de facture</text>
  <text x="256" y="276" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">FACTURE | N° : 36834.FU</text>
  <text x="256" y="300" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ACME SERVICES | 12 rue des Lilas</text>
  <rect x="248" y="310" width="364" height="20" rx="4" fill="none" stroke="#818cf8" strokeWidth="1"/>
  <text x="256" y="324" fill="#818cf8" fontSize="9" fontFamily="ui-monospace, monospace">PRESTATION | Qté | P.U. HT | Montant HT</text>
  <rect x="248" y="334" width="364" height="20" rx="4" fill="none" stroke="#818cf8" strokeWidth="1"/>
  <text x="256" y="348" fill="#818cf8" fontSize="9" fontFamily="ui-monospace, monospace">| | (€) | (€)</text>
  <rect x="248" y="358" width="364" height="20" rx="4" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="256" y="372" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">Maintenance | 1 | 991,29 | 991,29</text>
  <rect x="248" y="382" width="364" height="20" rx="4" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="256" y="396" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">Support | 2 | 50,00 | 100,00</text>
  <rect x="248" y="406" width="364" height="20" rx="4" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="256" y="420" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">Formation | 1 | 98,26 | 98,26</text>
  <rect x="248" y="430" width="364" height="20" rx="4" fill="none" stroke="#f87171" strokeWidth="1"/>
  <text x="256" y="444" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">N° contrat : C-2026-17</text>
  <text x="256" y="468" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Taux TVA | Base HT | TVA</text>
  <text x="256" y="492" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">20,00 % | 1 189,55 | 237,91</text>
  <text x="256" y="516" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Totaux | 1 427,46</text>
  <rect x="630" y="208" width="450" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="642.0" y="232" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Document fichier="invoice-2026-0412.pdf"&gt;</text>
  <text x="652.8" y="254" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Numero&gt;36834&lt;/Numero&gt;</text>
  <text x="652.8" y="276" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;TypeJDE&gt;FU&lt;/TypeJDE&gt;</text>
  <text x="652.8" y="298" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;CompanyCode&gt;00001&lt;/CompanyCode&gt;</text>
  <text x="652.8" y="320" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Lignes&gt;</text>
  <text x="663.6" y="342" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Ligne&gt;&lt;PRESTATION&gt;Maintenance&lt;/PRESTATION&gt;…</text>
  <text x="663.6" y="364" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Ligne&gt;&lt;PRESTATION&gt;Support&lt;/PRESTATION&gt;…</text>
  <text x="652.8" y="386" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/Lignes&gt;</text>
  <text x="652.8" y="408" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Recap_TVA&gt;</text>
  <text x="663.6" y="430" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;Ligne_TVA&gt;&lt;Taux_TVA&gt;20.00&lt;/Taux_TVA&gt;…</text>
  <text x="652.8" y="452" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/Recap_TVA&gt;</text>
  <text x="652.8" y="474" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;FichierPDF&gt;invoice-2026-0412.pdf&lt;/FichierPDF&gt;</text>
  <text x="642.0" y="496" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">&lt;/Document&gt;</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Convertisseur + document</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">PDF texte ou PDF JD Edwards</text>
  <line x1="200" y1="93.0" x2="490" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="124" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="139" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages du tableau</text>
  <text x="30" y="152" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplis par clic sur les lignes</text>
  <line x1="200" y1="141.0" x2="240" y2="142" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="182" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clé du document</text>
  <text x="30" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">36834.FU → numéro + type</text>
  <line x1="200" y1="199.0" x2="240" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="328" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="343" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur les lignes</text>
  <text x="30" y="356" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en-tête · lignes · fin</text>
  <line x1="200" y1="345.0" x2="248" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="26" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Convertir</text>
  <text x="1150" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">essai, sans enregistrement</text>
  <line x1="1140" y1="43.0" x2="885" y2="82" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="132" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Société trouvée</text>
  <text x="1150" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">TVA · SIRET · SIREN</text>
  <line x1="1140" y1="149.0" x2="810" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="182" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="197" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1150" y="210" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit les réglages</text>
  <line x1="1140" y1="199.0" x2="1080" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="358" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="373" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">XML produit</text>
  <text x="1150" y="386" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lecture seule, téléchargeable</text>
  <line x1="1140" y1="375.0" x2="1070" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
</svg>

---

## Conversion d'un PDF

| Commande | Description |
|---|---|
| **Choisir un PDF** | Sélectionne le PDF sur le poste et le convertit aussitôt. |
| Convertisseur | **PDF texte** (PDF dont le texte est sélectionnable, quel que soit l'outil qui l'a produit) ou **PDF JD Edwards** (impression BI Publisher / JD Edwards portant ses balises de sections et de champs). |
| Document | **Réglages par défaut**, ou un document dont les réglages sont chargés et essayés. Le choix d'un document fixe aussi le convertisseur : *PDF texte* pour une source PDF, *PDF JD Edwards* sinon, avec le manifeste du [dossier surveillé](../management/watched-folders.md) qui utilise le document. |
| **Nouveau document** | Crée un document pour le convertisseur en cours — **Nom** (lettres, chiffres, `-` et `_`) et **Description**. Son UBL XSLT pointe vers `<nom>.xsl`, à créer dans l'[Éditeur XSL](../ubl-tools/xsl-editor.md) si besoin ; les réglages essayés sur la page restent en attente, prêts pour **Enregistrer dans le document**. |
| **Convertir** | Convertit de nouveau avec les réglages présents sur la page, enregistrés ou non. |
| **Télécharger le XML** | Enregistre le XML sous `<nom du pdf>.xml`. |

Le XML s'affiche à droite, en lecture seule. Un PDF numérisé (images sans texte) est refusé avec le message *no text found … (scanned or empty PDF?)*.

---

## PDF texte \{#text-pdf\}

### Lignes de facture

**Début du tableau**, **Lignes d'en-tête** et **Fin du tableau** délimitent le tableau des lignes. Le plus simple est de cliquer sur les lignes du volet de gauche, **Lignes de facture** sélectionné :

1. *Cliquez sur la première ligne de l'en-tête du tableau* ;
2. *Cliquez sur la dernière ligne de l'en-tête du tableau* ;
3. *Cliquez sur la première ligne après les lignes de facture*.

La page écrit les trois réglages et relance la conversion : les lignes d'en-tête sont encadrées en indigo, les lignes de facture en vert, la ligne de fin en rouge, et le compteur affiche *N ligne(s) trouvée(s)*. **Recommencer** efface les clics.

### Récapitulatif TVA

**Récapitulatif TVA** sélectionné, les mêmes clics renseignent **Début du récap. TVA**, **Colonnes** et **Fin du récap. TVA** : *Cliquez sur la ligne d'en-tête du récapitulatif TVA*, *Cliquez sur sa dernière colonne* (un bouton par cellule d'en-tête — utile quand un autre bloc est imprimé à côté du récapitulatif), *Cliquez sur la première ligne après les taux*. Les taux deviennent `<Recap_TVA>/<Ligne_TVA>`, et le compteur affiche *N taux de TVA trouvé(s)*.

### Clé du document

| Commande | Description |
|---|---|
| **Numéro de facture** | L'élément qui porte le numéro de facture. Un numéro tel que `36834.FU` (chiffres puis lettres) ou `FU-36834` est séparé en **Numéro** et **Type**, tous deux lus à partir du libellé imprimé avant la valeur. |
| **Type de document** | Affiché quand le numéro ne se sépare pas : le type de document fixe (par ex. `RI`). |
| **Plusieurs factures** | Pour un PDF qui contient plusieurs factures : la règle qui donne un document par numéro de facture (*Une facture par PDF* si vide). **Découper sur ce numéro** la construit à partir du libellé du numéro de facture ; le compteur affiche alors *N facture(s)*. |
| **Trouver la société par** | *Pas de recherche*, *N° de TVA*, *SIRET* ou *SIREN*, puis l'élément qui porte l'identifiant : la page affiche la société trouvée parmi les [sociétés fournisseur](../ubl-tools/ubl-defaults/suppliers-companies.md) (`→ 00001`), ou la raison de l'absence de correspondance. |
| **Société** | Code société fixe, quand la société n'est pas recherchée. |

### Enregistrer dans le document

**Enregistrer dans le document** écrit les réglages dans le document choisi : début, lignes d'en-tête et fin du tableau, récapitulatif TVA, découpage en factures, règles d'extraction du numéro et du type, société (ou sa recherche). Un document sans clé de découpage reçoit `Document`, une par facture. Les mêmes réglages se modifient ensuite dans le groupe [PDF extraction](../management/documents.md#extraction-pdf) du document.

---

## PDF JD Edwards \{#jde-pdf\}

| Commande | Description |
|---|---|
| **Manifeste** | Chemin sur le serveur du manifeste qui nomme les balises ; vide = noms du dictionnaire de données. Le bouton dossier parcourt le serveur. |
| **Manifeste de départ** | Télécharge un manifeste construit à partir du PDF, à compléter. |
| **Clé de facture** | Pour un état qui ne suit pas la présentation standard de la facture : la `section:champ` qui porte le numéro de facture, affichée avec le nombre de valeurs distinctes. Donne un `<Invoice>` par valeur (clé de découpage `Invoice`). *Aucune (sections standard)* garde la présentation standard. |
| **Clé de découpage**, **N° de document**, **Type de document**, **Société** | Choisis parmi les éléments du XML ; **Trouver la société par** remplace la société fixe comme pour un PDF texte. Le compteur affiche *N facture(s)*. |
| **Enregistrer dans le document** | Écrit dans le document la clé de facture, la clé de découpage, le n° de document, le type et la société (ou sa recherche). |

Un PDF sans balises JD Edwards affiche *Aucune balise JD Edwards dans ce PDF : la compression PDF doit être désactivée dans l'INI JDE.*

Un PDF JD Edwards se traite aussi directement depuis [Traitement de document](./document.md) sur un document à source XML : il est converti avec la clé de facture du document et le manifeste de son dossier surveillé.

---

## Accès

La page suit le droit d'accès à la page **Process Document** sur la page [Rôles](../configuration/security/roles.md) : un utilisateur qui peut traiter des documents la voit.

---

## Conseils & bonnes pratiques

- **Partir d'un vrai PDF de chaque présentation.** Un exemple par présentation suffit pour régler le tableau, le récapitulatif TVA et la clé.
- **Cliquer plutôt que saisir les ancres.** La page écrit la règle la plus courte qui trouve la ligne, chiffres remplacés par `\d+`, si bien que le PDF suivant de même présentation correspond aussi.
- **Vérifier les compteurs avant d'enregistrer.** *Lignes trouvées*, *taux de TVA trouvés* et *factures* doivent correspondre au PDF ; un compteur rouge signale une ancre erronée.
- **Rechercher la société quand une même présentation sert plusieurs sociétés.** La recherche par SIRET, SIREN ou numéro de TVA évite un document par société ; un identifiant absent des sociétés fournisseur arrête la facture.
- **Confier au mapping automatique IA les valeurs fusionnées par le convertisseur.** Ses [règles d'extraction](../ubl-tools/xsl-editor.md#ai-auto-map) sont enregistrées sur le document et apparaissent ici à la conversion suivante.
