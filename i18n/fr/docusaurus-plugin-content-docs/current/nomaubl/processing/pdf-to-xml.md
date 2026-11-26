---
title: PDF vers XML
description: "NomaUBL Traitement → PDF vers XML : convertir un PDF texte ou un PDF JD Edwards balisé étape par étape (Source, Facture, Société, Lignes, Récapitulatif TVA, Résultat), régler le tableau, le récapitulatif TVA, le numéro de facture, le découpage en factures et la recherche de société en cliquant sur les lignes, contrôler les lignes de chaque facture par rapport à son total, puis enregistrer les réglages dans le document."
keywords: [NomaUBL, PDF vers XML, source PDF, PDF texte, PDF JD Edwards, manifeste, lignes d'en-tête, récapitulatif TVA, clé de facture, recherche de société, SIRET, SIREN, numéro de TVA, codes BT, termes métier, résultat par facture, mapping, SAP, NetSuite, ERP sur mesure]
---

# PDF vers XML

La page **PDF vers XML** affiche le XML produit par un PDF, pour démarrer ou ajuster le mapping d'un [document à source PDF](../management/documents.md#extraction-pdf). Elle convertit un **PDF texte** issu de n'importe quel système — JD Edwards, SAP, NetSuite, ERP sur mesure ou outil de facturation — ou un **PDF JD Edwards balisé**, avec ou sans les réglages d'un document, et enregistre dans le document les réglages essayés sur la page. Une conversion n'enregistre rien : la page est un outil de mise au point.

Les réglages sont regroupés en **étapes**, présentées sous forme de cartes en haut de la page — Source, Facture, Société, Lignes, Récapitulatif TVA, Résultat — chacune avec son état. Les réglages de l'étape sélectionnée s'affichent à gauche, à côté des lignes du PDF et du XML produit.

Accès : **Traitement → PDF vers XML**. Un document à source PDF ouvre aussi la page sur lui-même avec son bouton **Open in PDF to XML** (libellé en anglais), dans l'éditeur [Documents](../management/documents.md#extraction-pdf).

---

## Vue d'ensemble

<svg viewBox="0 0 1320 610" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="p2x-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="p2x-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="p2x-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="p2x-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="570" rx="14" fill="url(#p2x-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">PDF vers XML</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affichez le XML produit par un PDF pour démarrer ou ajuster son mapping.</text>
  <rect x="240" y="80" width="111" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="295.5" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤒ Choisir un PDF</text>
  <text x="361" y="95" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices-2026-11.pdf</text>
  <rect x="946" y="80" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1013.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Télécharger le XML</text>
  <rect x="760" y="80" width="178" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="849.0" y="94.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer dans le document</text>
  <rect x="680" y="80" width="72" height="22" rx="5" fill="url(#p2x-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="716.0" y="94.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Convertir</text>
  <text x="670" y="95" fill="#fb923c" fontSize="9.5" textAnchor="end" fontFamily="ui-monospace, monospace">Modifications non enregistrées</text>
  <rect x="240.0" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="248.0" y="124" width="14" height="14" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="0.8"/>
  <text x="268.0" y="135" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCE</text>
  <text x="248.0" y="152" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">invoices-2026-11.pdf</text>
  <rect x="381.3" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="389.3" y="124" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeWidth="0.8"/>
  <text x="409.3" y="135" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURE</text>
  <text x="389.3" y="152" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">3 facture(s)</text>
  <line x1="374.3" y1="138" x2="380.3" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="522.7" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="530.7" y="124" width="14" height="14" rx="4" fill="rgba(168,85,247,0.12)" stroke="#c084fc" strokeWidth="0.8"/>
  <text x="550.7" y="135" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOCIÉTÉ</text>
  <text x="530.7" y="152" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">00001</text>
  <line x1="515.7" y1="138" x2="521.7" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="664.0" y="116" width="133.3" height="44" rx="8" fill="rgba(255,159,10,0.12)" stroke="#fb923c" strokeWidth="1.4"/>
  <rect x="672.0" y="124" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="#fb923c" strokeWidth="0.8"/>
  <text x="692.0" y="135" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <text x="672.0" y="152" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">5 ligne(s) trouvée(s)</text>
  <line x1="657.0" y1="138" x2="663.0" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="805.3" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="813.3" y="124" width="14" height="14" rx="4" fill="rgba(255,159,10,0.12)" stroke="#fb923c" strokeWidth="0.8"/>
  <text x="833.3" y="135" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉCAPITULATIF TVA</text>
  <text x="813.3" y="152" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">3 taux de TVA trouvé(s)</text>
  <line x1="798.3" y1="138" x2="804.3" y2="138" stroke="#475569" strokeWidth="1"/>
  <rect x="946.7" y="116" width="133.3" height="44" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="954.7" y="124" width="14" height="14" rx="4" fill="rgba(50,215,75,0.10)" stroke="#4ade80" strokeWidth="0.8"/>
  <text x="974.7" y="135" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉSULTAT</text>
  <text x="954.7" y="152" fill="#f87171" fontSize="8.5" fontFamily="system-ui, sans-serif">2 facture(s) à vérifier</text>
  <line x1="939.7" y1="138" x2="945.7" y2="138" stroke="#475569" strokeWidth="1"/>
  <text x="240" y="192" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes</text>
  <text x="240" y="208" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Cliquez sur des lignes du PDF pour délimiter…</text>
  <rect x="240" y="218" width="236" height="44" rx="6" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="248" y="234" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Cliquez sur la première ligne après</text>
  <text x="248" y="246" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">les lignes de facture</text>
  <rect x="394" y="236" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="431.0" y="249.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Recommencer</text>
  <text x="240" y="280" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">5 ligne(s) trouvée(s)</text>
  <text x="240" y="302" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉBUT DU TABLEAU</text>
  <rect x="240" y="307" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="321.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">PRESTATION</text>
  <text x="240" y="348" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES D'EN-TÊTE</text>
  <rect x="240" y="353" width="70" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="367.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="240" y="394" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FIN DU TABLEAU</text>
  <rect x="240" y="399" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="413.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">^N° contrat</text>
  <text x="240" y="440" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES IGNORÉES</text>
  <rect x="240" y="445" width="236" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="459.5" fill="#475569" fontSize="9.5" fontFamily="ui-monospace, monospace">^Sous total</text>
  <rect x="488" y="174" width="330" height="400" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="498" y="194" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes du PDF</text>
  <rect x="715" y="180" width="93" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="716" y="181" width="52" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="742.0" y="194.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Lignes</text>
  <line x1="769" y1="185" x2="769" y2="197" stroke="#334155" strokeWidth="1"/>
  <text x="788.5" y="194.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <line x1="488" y1="208" x2="818" y2="208" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="230" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FACTURE | N° : 36834.FU | Date : 12/11/2026</text>
  <text x="500" y="255" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ACME SERVICES</text>
  <text x="500" y="280" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">12 rue des Lilas</text>
  <text x="500" y="305" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">75011 PARIS</text>
  <text x="500" y="330" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Client : Beta SARL</text>
  <rect x="494" y="341" width="318" height="20" rx="4" fill="rgba(99,102,241,0.25)"/>
  <text x="500" y="355" fill="#a5b4fc" fontSize="8.5" fontFamily="ui-monospace, monospace">PRESTATION | Qté | P.U. HT | Montant HT</text>
  <rect x="494" y="366" width="318" height="20" rx="4" fill="rgba(34,197,94,0.15)"/>
  <text x="500" y="380" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Maintenance | 1 | 900,00 | 900,00</text>
  <rect x="494" y="391" width="318" height="20" rx="4" fill="rgba(34,197,94,0.15)"/>
  <text x="500" y="405" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Support | 2 | 50,00 | 100,00</text>
  <rect x="494" y="416" width="318" height="20" rx="4" fill="rgba(34,197,94,0.15)"/>
  <text x="500" y="430" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Formation | 1 | 200,00 | 200,00</text>
  <rect x="494" y="441" width="318" height="20" rx="4" fill="rgba(239,68,68,0.20)"/>
  <text x="500" y="455" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">N° contrat : C-2026-17</text>
  <text x="500" y="480" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Taux TVA | Base HT | TVA</text>
  <text x="500" y="505" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">20,00 % | 1 200,00 | 240,00</text>
  <text x="500" y="530" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Total HT : 1 200,00 | Total TTC : 1 440,00</text>
  <text x="500" y="555" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">FACTURE | N° : 36835.FU | Date : 12/11/2026</text>
  <rect x="826" y="174" width="254" height="400" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="836" y="194" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Documents&gt;</text>
  <text x="845" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Document fichier="…" pages="1"&gt;</text>
  <text x="854" y="234" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;PagesPDF&gt;1&lt;/PagesPDF&gt;</text>
  <text x="854" y="254" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Date&gt;2026-11-12&lt;/Date&gt;</text>
  <text x="854" y="274" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Adresse_1&gt;…&lt;/Adresse_1&gt;</text>
  <text x="854" y="294" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Lignes&gt;</text>
  <text x="863" y="314" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Ligne n="1"&gt;</text>
  <text x="872" y="334" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;PRESTATION&gt;Maintenance</text>
  <text x="872" y="354" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Qté&gt;1&lt;/Qté&gt;</text>
  <text x="872" y="374" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Montant_HT&gt;900.00</text>
  <text x="863" y="394" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Ligne&gt;</text>
  <text x="863" y="414" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Ligne n="2"&gt;…&lt;/Ligne&gt;</text>
  <text x="854" y="434" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Lignes&gt;</text>
  <text x="854" y="454" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Recap_TVA&gt;</text>
  <text x="863" y="474" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Ligne_TVA&gt;…&lt;/Ligne_TVA&gt;</text>
  <text x="854" y="494" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Recap_TVA&gt;</text>
  <text x="854" y="514" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Total_HT&gt;1200.00&lt;/Total_HT&gt;</text>
  <text x="854" y="534" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;Textes&gt;…&lt;/Textes&gt;</text>
  <text x="845" y="554" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&lt;/Document&gt;</text>
  <rect x="20" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisir un PDF</text>
  <text x="30" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">converti aussitôt</text>
  <line x1="200" y1="91.0" x2="240" y2="91" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes en cartes</text>
  <text x="30" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune avec son état</text>
  <line x1="200" y1="149.0" x2="240" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages de l'étape</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à côté des lignes et du XML</text>
  <line x1="200" y1="307.0" x2="240" y2="322" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="20" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cliquer les lignes</text>
  <text x="30" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en-tête · lignes · fin</text>
  <line x1="200" y1="447.0" x2="494" y2="351" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="26" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifications en attente</text>
  <text x="1150" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un seul enregistrement</text>
  <line x1="1140" y1="43.0" x2="849.0" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="132" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étape Résultat</text>
  <text x="1150" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">factures à vérifier en rouge</text>
  <line x1="1140" y1="149.0" x2="1013.3333333333334" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="190" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes ou PDF</text>
  <text x="1150" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le PDF lui-même au choix</text>
  <line x1="1140" y1="207.0" x2="761.5" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
  <rect x="1140" y="380" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">XML produit</text>
  <text x="1150" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lecture seule, téléchargeable</text>
  <line x1="1140" y1="397.0" x2="1070" y2="374" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2x-arrow)"/>
</svg>

---

## Barre d'outils et étapes \{#steps\}

| Commande | Description |
|---|---|
| **Choisir un PDF** | Sélectionne le PDF sur le poste et le convertit aussitôt ; son nom s'affiche à côté du bouton. |
| **Convertir** | Convertit de nouveau avec les réglages présents sur la page, enregistrés ou non. |
| *Modifications non enregistrées* | Indication en orange affichée dès qu'un réglage est modifié sur la page : il est essayé aussitôt, mais pas encore enregistré. |
| **Enregistrer dans le document** | Écrit les réglages en attente dans le document choisi à l'étape **Source** (voir [Enregistrer dans le document](#save)). Actif quand des modifications sont en attente et qu'un document est choisi. |
| **Télécharger le XML** | Enregistre le XML sous `<nom du pdf>.xml`. |

Chaque carte nomme son étape et indique où elle en est, en vert quand l'élément est trouvé, en rouge quand il reste à régler :

| Étape | La carte affiche |
|---|---|
| **Source** | Le PDF choisi, ou *Aucun PDF choisi*. |
| **Facture** | *Numéro … · Type …* quand le numéro de facture se sépare, *N facture(s)* quand le PDF est découpé en factures, sinon le numéro de facture ou *Une facture par PDF*. |
| **Société** | Le code société trouvé ou saisi, ou *Non défini*. |
| **Lignes** | *N ligne(s) trouvée(s)*, ou *Aucune ligne trouvée*. PDF texte uniquement. |
| **Récapitulatif TVA** | *N taux de TVA trouvé(s)*, ou *Non défini*. PDF texte uniquement. |
| **Résultat** | *N facture(s) · N ligne(s)*, ou *N facture(s) à vérifier* en rouge. |

Les étapes qui suivent **Source** s'ouvrent une fois le PDF converti. Pour un PDF texte, les lignes lues dans le PDF s'affichent à côté des réglages ; les boutons **Lignes** / **PDF** en haut de ce volet les remplacent par le PDF lui-même, pour comparer avec ce qui a été lu. Le clic sur une ligne du PDF n'agit qu'aux étapes **Lignes** et **Récapitulatif TVA** ; à l'étape **Résultat**, la liste des factures prend la place des lignes du PDF.

---

## Source \{#source\}

| Commande | Description |
|---|---|
| **Type de PDF** | **PDF texte** (PDF dont le texte est sélectionnable, quel que soit l'outil qui l'a produit) ou **PDF JD Edwards** (impression BI Publisher / JD Edwards portant ses balises de sections et de champs). |
| **Document** | **Réglages par défaut**, ou un document dont les réglages sont chargés et essayés. Le choix d'un document fixe aussi le type de PDF : *PDF texte* pour une source PDF, *PDF JD Edwards* sinon, avec le manifeste du [dossier surveillé](../management/watched-folders.md) qui utilise le document. |
| **Nouveau document** | Crée un document pour le type de PDF en cours — **Nom** (lettres, chiffres, `-` et `_`) et **Description**. Son UBL XSLT pointe vers `<nom>.xsl`, à créer dans l'[Éditeur XSL](../ubl-tools/xsl-editor.md) si besoin ; les réglages essayés sur la page restent en attente, prêts pour **Enregistrer dans le document**. |

Un PDF numérisé (images sans texte) est refusé avec le message *no text found … (scanned or empty PDF?)*.

### PDF JD Edwards \{#jde-pdf\}

Avec **PDF JD Edwards**, l'étape **Source** ajoute deux commandes, et les étapes **Lignes** et **Récapitulatif TVA** sont masquées — les sections et les champs viennent des balises :

| Commande | Description |
|---|---|
| **Manifeste** | Chemin sur le serveur du manifeste qui nomme les balises ; vide = noms du dictionnaire de données. Le bouton dossier parcourt le serveur. |
| **Manifeste de départ** | Télécharge un manifeste construit à partir du PDF, à compléter. |

Un PDF sans balises JD Edwards affiche *Aucune balise JD Edwards dans ce PDF : la compression PDF doit être désactivée dans l'INI JDE.*

Un PDF JD Edwards se traite aussi directement depuis [Traitement de document](./document.md) sur un document à source XML : il est converti avec la clé de facture du document et le manifeste de son dossier surveillé.

---

## Facture \{#invoice\}

### PDF texte

| Commande | Description |
|---|---|
| **Numéro de facture** | L'élément qui porte le numéro de facture. Un numéro tel que `36834.FU` (chiffres puis lettres) ou `FU-36834` est séparé en **Numéro** et **Type**, tous deux lus à partir du libellé imprimé avant la valeur. |
| **Type de document** | Affiché quand le numéro ne se sépare pas : le type de document fixe (par ex. `RI`). |
| **Plusieurs factures** | Pour un PDF qui contient plusieurs factures : la règle qui donne un document par numéro de facture (*Une facture par PDF* si vide). **Découper sur ce numéro** la construit à partir du libellé du numéro de facture ; le compteur affiche alors *N facture(s)*. |

### PDF JD Edwards

| Commande | Description |
|---|---|
| **Clé de facture** | Pour un état qui ne suit pas la présentation standard de la facture : la `section:champ` qui porte le numéro de facture, affichée avec le nombre de valeurs distinctes. Donne un `<Invoice>` par valeur (clé de découpage `Invoice`). *Aucune (sections standard)* garde la présentation standard. |
| **Clé de découpage**, **N° de document**, **Type de document** | Choisis parmi les éléments du XML. Le compteur affiche *N facture(s)*. |

---

## Société \{#company\}

| Commande | Description |
|---|---|
| **Trouver la société par** | *Pas de recherche*, *N° de TVA*, *SIRET* ou *SIREN*. |
| **Identifiant dans la facture** | Affiché quand la société est recherchée : l'élément qui porte l'identifiant. La page affiche la société trouvée parmi les [sociétés fournisseur](../ubl-tools/ubl-defaults/suppliers-companies.md) (`→ 00001`), ou la raison de l'absence de correspondance. |
| **Société** | Quand la société n'est pas recherchée : un code société fixe pour un PDF texte, un élément du XML pour un PDF JD Edwards. |

---

## Lignes \{#lines\}

**Début du tableau**, **Lignes d'en-tête** et **Fin du tableau** délimitent le tableau des lignes de facture d'un PDF texte. Le plus simple est de cliquer sur les lignes du PDF, en suivant l'indication de l'étape :

1. *Cliquez sur la première ligne de l'en-tête du tableau* ;
2. *Cliquez sur la dernière ligne de l'en-tête du tableau* ;
3. *Cliquez sur la première ligne après les lignes de facture*.

La page écrit les trois réglages et relance la conversion : les lignes d'en-tête sont encadrées en indigo, les lignes de facture en vert, la ligne de fin en rouge, et le compteur affiche *N ligne(s) trouvée(s)*. **Recommencer** efface les clics.

Un tableau imprimé en plusieurs sections, chacune fermée par un sous-total, demande un réglage de plus : **Lignes ignorées**, une regex saisie à la main (par ex. `^Sous total`) qui désigne les lignes du tableau qui ne sont pas des lignes de facture. Le tableau est alors lu jusqu'au bout : placer **Fin du tableau** sur la ligne qui suit la dernière section. Les valeurs imprimées sur une ligne ignorée restent disponibles comme champs du document. Quand l'en-tête occupe plusieurs lignes (**Lignes d'en-tête** à 2 ou plus), chaque ligne de facture porte aussi le titre de sa section, dans `<Section>`. Laissé vide, le réglage ne change rien ; il s'essaie sur la page avant l'enregistrement.

---

## Récapitulatif TVA \{#vat-summary\}

Les mêmes clics renseignent **Début du récap. TVA**, **Colonnes** et **Fin du récap. TVA** : *Cliquez sur la ligne d'en-tête du récapitulatif TVA*, *Cliquez sur sa dernière colonne* (un bouton par cellule d'en-tête — utile quand un autre bloc est imprimé à côté du récapitulatif), *Cliquez sur la première ligne après les taux*. Les taux deviennent `<Recap_TVA>/<Ligne_TVA>`, et le compteur affiche *N taux de TVA trouvé(s)*.

---

## Résultat \{#result\}

L'étape **Résultat** résume ce que le document traitera : *N facture(s) · N ligne(s)*, les taux de TVA trouvés, et un bouton **Télécharger le XML**.

Pour un PDF texte, un tableau présente **chaque facture** du PDF :

<svg viewBox="0 0 1200 262" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="p2xr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="p2xr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="p2xr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="p2xr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="222" rx="14" fill="url(#p2xr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Résultat</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Le XML que le document traitera.</text>
  <text x="240" y="92" fill="#4ade80" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">3 facture(s) · 5 ligne(s)</text>
  <text x="240" y="114" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">2 facture(s) à vérifier</text>
  <text x="240" y="136" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">Montant_HT des lignes comparé à Total_HT</text>
  <rect x="240" y="150" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="301.0" y="164.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Télécharger le XML</text>
  <rect x="470" y="80" width="470" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURE</text>
  <text x="576" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAGES</text>
  <text x="628" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <text x="680" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAUX DE TVA</text>
  <text x="764" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOMME DES LIGNES</text>
  <text x="876" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TOTAL</text>
  <rect x="470" y="112" width="470" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">36834.FU</text>
  <text x="576" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="628" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">3</text>
  <text x="680" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="764" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1200</text>
  <text x="876" y="128.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1200</text>
  <rect x="470" y="142" width="470" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">36835.FU</text>
  <text x="576" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2-3</text>
  <text x="628" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2</text>
  <text x="680" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="764" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="876" y="158.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="470" y="172" width="470" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="480" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">36836.FU</text>
  <text x="576" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="628" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="680" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">1</text>
  <text x="764" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="876" y="188.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">300</text>
  <text x="764" y="158.5" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">550</text>
  <text x="876" y="158.5" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">600</text>
  <text x="628" y="188.5" fill="#f87171" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="470" y="220" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Un clic sur une ligne affiche cette facture dans le XML.</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Factures à vérifier</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans ligne ou sans concordance</text>
  <line x1="200" y1="113.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes et total</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonne et total trouvés seuls</text>
  <line x1="200" y1="177.0" x2="240" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Somme différente</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">somme et total en rouge</text>
  <line x1="1000" y1="137.0" x2="800" y2="158" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
  <rect x="1000" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aucune ligne lue</text>
  <text x="1010" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vérifier les repères du tableau</text>
  <line x1="1000" y1="207.0" x2="642" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#p2xr-arrow)"/>
</svg>

| Colonne | Description |
|---|---|
| **Facture** | La première valeur de la facture — en général son numéro. |
| **Pages** | Les pages du PDF occupées par la facture (`2-3`) ; pour un PDF d'une seule facture, son nombre de pages. |
| **Lignes** | Le nombre de lignes de facture lues ; en rouge quand il n'y en a aucune. |
| **Taux de TVA** | Le nombre de taux lus dans son récapitulatif TVA. |
| **Somme des lignes** | La somme d'une colonne de montant des lignes. |
| **Total** | Le total de la facture auquel cette somme est comparée. |

La colonne des lignes et le total ne sont pas des réglages : la page retient la paire qui concorde sur le plus grand nombre de factures — à égalité, la colonne qui porte le même nom que le total l'emporte — et l'indique au-dessus du tableau (*Montant_HT des lignes comparé à Total_HT*). Une facture sans ligne, ou dont les lignes ne donnent pas son total, a ses chiffres en rouge et entre dans le compte *N facture(s) à vérifier* ; dans le cas contraire, la page affiche *Les lignes concordent avec le total sur chaque facture*. Quand aucun total ne correspond à la somme des lignes, sur aucune facture, la page le signale et seules les factures sans ligne sont relevées.

Un clic sur une ligne du tableau affiche la facture correspondante dans le XML. Le tableau propose la recherche, les filtres et l'export, comme les autres listes de l'application.

---

## Enregistrer dans le document \{#save\}

**Enregistrer dans le document** écrit les réglages en attente dans le document choisi à l'étape **Source**. Pour un PDF texte : début, lignes d'en-tête, fin du tableau et lignes ignorées, récapitulatif TVA, découpage en factures, règles d'extraction du numéro et du type, société (ou sa recherche). Un document sans clé de découpage reçoit `Document`, une par facture. Pour un PDF JD Edwards : la clé de facture, la clé de découpage, le n° de document, le type et la société (ou sa recherche).

L'indication *Modifications non enregistrées* disparaît après l'enregistrement ; un PDF texte est alors reconverti avec les réglages enregistrés. Les mêmes réglages se modifient ensuite dans le groupe [PDF extraction](../management/documents.md#extraction-pdf) du document.

---

## Lecture d'un PDF texte \{#text-pdf-reading\}

La conversion reconstitue la mise en page et écrit ce qu'elle lit : valeurs libellées, blocs des parties, tableau des lignes, récapitulatif TVA et chaque ligne imprimée. Les règles générales sont décrites dans [Contenu du XML](../management/documents.md#extraction-pdf) ; les cas ci-dessous les complètent.

### Factures imprimées avec les codes des termes métier \{#business-term-codes\}

Certaines présentations impriment, à côté de chaque valeur, le code du terme métier de la norme : `Date d'échéance (BT-9)`, `Total TVA (BT-110)`, `Type de facture (BT-3)`. Une telle présentation est lue d'après ses libellés :

- **Le code est retiré du libellé.** Un code `(BT-…)`, `(BG-…)` ou `(EXT-FR-FE-…)`, en fin de libellé ou dans une cellule à part, est supprimé et le champ prend le nom du libellé : `Date d'échéance | (BT-9) | 31/01/2027` donne `<Date_d_échéance>`. Un code imprimé juste sous son libellé, en début de ligne suivante, est rattaché à ce libellé.
- **Les valeurs textuelles sont conservées.** Un libellé codé prend la cellule suivante comme valeur, quel que soit son contenu — devise, type de facture, moyen de paiement. Quand la cellule suivante est un autre libellé, le champ est écrit vide.
- **Le code entre parenthèses est aussi extrait seul.** Une valeur qui se termine par un code court donne un second élément nommé `…_code` : `Type de facture (BT-3) | Facture (380)` donne `<Type_de_facture>Facture (380)</Type_de_facture>` et `<Type_de_facture_code>380</Type_de_facture_code>` ; `Euro (EUR)` donne `EUR`. Pour une adresse électronique imprimée sous la forme `@dresse électronique | 400208435 (0225)`, l'élément `Adresse_électronique` garde l'identifiant et `…_code` son schéma.
- **Les valeurs imprimées sur plusieurs lignes sont réunies.** Une valeur longue renvoyée à la ligne est lue d'un seul tenant ; un long identifiant sans espace, coupé par la largeur de la colonne, est recollé sans espace.
- **Une ligne de codes sous un en-tête de tableau** (`TVA | (BT-118) | (BT-119) | …`) est supprimée : elle désigne les colonnes et ne porte aucune valeur.

Une URL, une URN ou un deux-points à l'intérieur d'une phrase entre parenthèses (`(ou : …`) n'est pas pris pour une paire *Libellé : valeur*.

### Blocs des parties \{#party-blocks\}

Un cadre de partie dont la première ligne est un titre de bloc — *Vendeur*, *Client*, *Acheteur*, *Fournisseur*, *Émetteur*, *Destinataire*, *Facturé à*, *Livraison*, *Livré à* — écrit ce titre dans `<Titre>` ; la ligne suivante est le `<Nom>` de la partie. Une ville suivie d'un code pays, `VILLE, FR`, donne `<Ville>` et `<Pays>`.

### Tableaux des lignes \{#line-tables\}

- **Une cellule par colonne.** Une ligne qui compte autant de cellules que l'en-tête compte de colonnes est lue cellule par cellule, dans l'ordre : un texte aligné à gauche sous un en-tête centré va dans sa propre colonne, et non dans la précédente.
- **Nom imprimé sur deux lignes.** Dans un tableau lu par position (en-tête sur plusieurs lignes, valeurs empilées sur leur ligne), une valeur répartie au-dessus et au-dessous de sa ligne — un nom long — reste dans sa colonne ; les autres valeurs empilées de la ligne gardent la leur et ne sont pas lues comme des titres de section.
- **Tableau poursuivi sur la page suivante.** Le pied de la page et l'en-tête de la page suivante — les lignes que les deux pages impriment à la même hauteur, chiffres mis à part (`Page 1 / 2`) — ne sont pas lus comme des lignes de facture.
- **En-tête réimprimé sur une page suivante.** Sur une facture de plusieurs pages, les champs d'en-tête qu'une page suivante imprime de nouveau ne sont lus qu'une fois : aucun second jeu de champs terminés par `_2`.
- **Récapitulatif TVA avec un en-tête sur deux lignes.** Les autres lignes d'un en-tête imprimé sur plusieurs lignes sont ignorées jusqu'au premier taux.

---

## Accès

La page suit le droit d'accès à la page **Process Document** sur la page [Rôles](../configuration/security/roles.md) : un utilisateur qui peut traiter des documents la voit.

---

## Conseils & bonnes pratiques

- **Partir d'un vrai PDF de chaque présentation.** Un exemple par présentation suffit pour régler le tableau, le récapitulatif TVA et la clé. Un PDF de plusieurs factures est encore plus utile : l'étape **Résultat** les contrôle toutes d'un coup.
- **Cliquer plutôt que saisir les ancres.** La page écrit la règle la plus courte qui trouve la ligne, chiffres remplacés par `\d+`, si bien que le PDF suivant de même présentation correspond aussi.
- **Contrôler l'étape Résultat avant d'enregistrer.** Les lignes de chaque facture doivent donner son total ; une facture en rouge signale une ancre qui manque des lignes ou un tableau qui se poursuit sur une autre page.
- **Passer à l'affichage du PDF quand une valeur semble fausse.** Il montre la page telle qu'imprimée, à côté des réglages, pour voir si une valeur est renvoyée à la ligne, empilée ou imprimée dans un autre bloc.
- **Rechercher la société quand une même présentation sert plusieurs sociétés.** La recherche par SIRET, SIREN ou numéro de TVA évite un document par société ; un identifiant absent des sociétés fournisseur arrête la facture.
- **Confier au mapping automatique IA les valeurs fusionnées par le convertisseur.** Ses [règles d'extraction](../ubl-tools/xsl-editor.md#ai-auto-map) sont enregistrées sur le document et apparaissent ici à la conversion suivante.
