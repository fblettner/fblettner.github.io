---
title: Explorateur
description: "L'Explorateur de NomaUBL — construire ses propres analyses des données de facturation sans SQL : champs de sept entités sur les étagères Lignes, Mesures et Filtres, tableau, tableau croisé, détail et graphiques, champs calculés, accès aux factures sous-jacentes, tableaux de bord, analyses fournies pour l'informatique, la comptabilité et l'audit, exports Excel, PDF et PNG, rapports quotidiens."
keywords: [NomaUBL, Explorateur, analyse, libre-service, tableau croisé, tableau de bord, graphique, histogramme, indicateurs, champ calculé, exploration, export Excel, export PDF, analyse enregistrée, rapport quotidien, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Explorateur

L'**Explorateur** construit des analyses des données de facturation sans écrire de SQL. Les champs de sept entités autour de la facture se déposent dans les **Lignes**, les **Mesures** et les **Filtres** ; le résultat s'affiche en tableau, en tableau croisé, en lignes de détail ou en graphique, et chaque valeur ouvre les factures qu'elle recouvre. Les analyses s'enregistrent, se partagent et se regroupent en **tableaux de bord**. Des analyses et tableaux de bord sont fournis pour l'informatique, la comptabilité et l'audit. L'Explorateur fonctionne de la même façon quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé) et sur toutes les bases prises en charge.

Accès : **Explorateur**, dans le groupe Navigation du menu, à côté des [Rapports](reports/overview.md). Il remplace l'ancien onglet *Requêteur* de la page Rapports ; les rapports enregistrés avec ce dernier sont convertis automatiquement en analyses.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="488" rx="14" fill="url(#exg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Construisez une analyse à partir des données de facturation…</text>
  <rect x="1034" y="34" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1057.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ PDF</text>
  <rect x="972" y="34" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Excel</text>
  <rect x="940" y="34" width="26" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="839" y="34" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Enregistrer</text>
  <rect x="240" y="80" width="232" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="94" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="288.0" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (12)</text>
  <line x1="336" y1="85" x2="336" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="404.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord (3)</text>
  <rect x="482" y="81" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="95.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Montants par statut ▾</text>
  <rect x="692" y="81" width="96" height="22" rx="5" fill="url(#exg-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740.0" y="95.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Définition</text>
  <rect x="240" y="118" width="200" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="126" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="140.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">🔍 Rechercher un champ…</text>
  <rect x="392" y="126" width="18" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="401.0" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇕</text>
  <rect x="414" y="126" width="18" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="423.0" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇳</text>
  <text x="250" y="166" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Factures</text>
  <text x="430" y="166" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1..1</text>
  <text x="258" y="186" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <text x="430" y="186" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">kco</text>
  <text x="258" y="204" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <text x="430" y="204" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">customerName</text>
  <text x="258" y="222" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Date émission</text>
  <text x="430" y="222" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">issueDate</text>
  <text x="258" y="240" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Type transaction</text>
  <text x="430" y="240" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">barCode</text>
  <text x="258" y="258" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="430" y="258" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">statusCode</text>
  <text x="258" y="276" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Code motif</text>
  <text x="430" y="276" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">reasonCode</text>
  <text x="258" y="296" fill="#64748b" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">Σ MESURES</text>
  <text x="258" y="314" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Total HT</text>
  <text x="430" y="314" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">totalHT</text>
  <text x="258" y="332" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Total TTC</text>
  <text x="430" y="332" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">totalTTC</text>
  <line x1="246" y1="344" x2="434" y2="344" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="358" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Évènements du cycle de vie</text>
  <line x1="246" y1="368" x2="434" y2="368" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="382" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Contrôles de validation</text>
  <line x1="246" y1="392" x2="434" y2="392" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="406" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Lignes de facture</text>
  <line x1="246" y1="416" x2="434" y2="416" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="430" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">› Champs calculés  +</text>
  <rect x="456" y="118" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="126.0" width="18" height="18" rx="5" fill="none" stroke="#4a9eff" strokeWidth="1"/>
  <text x="473" y="138.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="488" y="138.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VUE</text>
  <rect x="540" y="124" width="84" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="138.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">invoices ▾</text>
  <rect x="632" y="124" width="22" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="643.0" y="138.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▤</text>
  <rect x="654" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="665.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <rect x="676" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="687.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▮</text>
  <rect x="698" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="709.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟋</text>
  <rect x="720" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="731.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◔</text>
  <rect x="742" y="124" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="753.0" y="138.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <rect x="770" y="124" width="58" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="799.0" y="138.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">☰ Détail</text>
  <text x="838" y="139" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Top</text>
  <rect x="860" y="124" width="48" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="138.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1000</text>
  <rect x="994" y="124" width="78" height="22" rx="5" fill="url(#exg-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1033.0" y="138.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="456" y="160" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="168.0" width="18" height="18" rx="5" fill="none" stroke="#c084fc" strokeWidth="1"/>
  <text x="473" y="180.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◷</text>
  <text x="488" y="180.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="540" y="166" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="550" y="180.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Date émission — Factures ▾</text>
  <rect x="698" y="166" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="708" y="180.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">📅 1 – 30 nov. 2026 ▾</text>
  <rect x="930" y="172" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M932.5,177.5 L934.8,179.8 L938.8,175" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="947" y="181" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exclure les erreurs traitées</text>
  <rect x="456" y="202" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="210.0" width="18" height="18" rx="5" fill="none" stroke="#4a9eff" strokeWidth="1"/>
  <text x="473" y="222.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="488" y="222.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIGNES</text>
  <rect x="540" y="208" width="170" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="550" y="223" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Statut</text>
  <rect x="592" y="211" width="96" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="222.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Libellé ▾</text>
  <text x="700" y="223" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">×</text>
  <rect x="718" y="208" width="159" height="22" rx="6" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="728" y="223" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Date émission</text>
  <rect x="805" y="211" width="58" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="815" y="222.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Mois ▾</text>
  <rect x="456" y="244" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="252.0" width="18" height="18" rx="5" fill="none" stroke="#4ade80" strokeWidth="1"/>
  <text x="473" y="264.5" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Σ</text>
  <text x="488" y="264.5" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESURES</text>
  <rect x="540" y="252" width="108" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="594.0" y="264.2" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Nombre de lignes ×</text>
  <rect x="656" y="252" width="113" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="712.5" y="264.2" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Somme ▾  Total HT ×</text>
  <rect x="456" y="286" width="624" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="464" y="294.0" width="18" height="18" rx="5" fill="none" stroke="#fb923c" strokeWidth="1"/>
  <text x="473" y="306.5" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷</text>
  <text x="488" y="306.5" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILTRES</text>
  <rect x="540" y="294" width="149" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="614.5" y="306.2" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Type transaction  ≠  B2C ×</text>
  <rect x="456" y="330" width="624" height="158" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="468" y="348" fill="#e2e8f0" fontSize="9" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLEAU</text>
  <text x="520" y="348" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">3 groupe(s) sur 42 ligne(s)</text>
  <line x1="456" y1="358" x2="1080" y2="358" stroke="#1f2937" strokeWidth="1"/>
  <rect x="466" y="366" width="604" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="646" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE ÉMISSION</text>
  <text x="756" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOMBRE</text>
  <text x="846" y="381.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOMME TOTAL HT</text>
  <rect x="466" y="394" width="604" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Déposée</text>
  <text x="646" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2026-11</text>
  <text x="756" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">18</text>
  <text x="846" y="408.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">19 280,50</text>
  <rect x="466" y="420" width="604" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Mise à disposition</text>
  <text x="646" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2026-11</text>
  <text x="756" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">14</text>
  <text x="846" y="434.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">20 753,89</text>
  <rect x="466" y="446" width="604" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="476" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Paiement transmis</text>
  <text x="646" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">2026-11</text>
  <text x="756" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">10</text>
  <text x="846" y="460.5" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">13 457,20</text>
  <rect x="20" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer · Excel · PDF</text>
  <text x="30" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'en-tête de la page</text>
  <line x1="200" y1="51.0" x2="839" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Définition</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">masque champs et étagères</text>
  <line x1="200" y1="101.0" x2="694" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste des champs</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tout déplier / replier · nom</text>
  <line x1="200" y1="157.0" x2="410" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Code ou libellé</text>
  <text x="1130" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">code — libellé, libellé, code…</text>
  <line x1="1120" y1="239.0" x2="688" y2="219" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue par icône</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tableau, croisé, barres, courbe…</text>
  <line x1="1120" y1="117.0" x2="698" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par bloc</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vue, période, lignes, mesures…</text>
  <line x1="1120" y1="177.0" x2="1080" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">≠ sur un champ codé</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">garde les lignes sans valeur</text>
  <line x1="1120" y1="317.0" x2="716" y2="303" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
  <rect x="1120" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Panneau du résultat</text>
  <text x="1130" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indique ce que l'exécution a donné</text>
  <line x1="1120" y1="367.0" x2="656" y2="348" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exg-arrow)"/>
</svg>

---

## Onglets Analyses et Tableaux de bord \{#tabs\}

L'en-tête de la page porte **Enregistrer**, le bouton de suppression quand une analyse ou un tableau de bord enregistré est ouvert, **Excel** et **PDF**. En dessous, la première rangée porte deux onglets, **Analyses** (par défaut) et **[Tableaux de bord](#dashboards)**, chacun avec le nombre d'éléments enregistrés, puis la liste des analyses enregistrées (*Analyses enregistrées…*, *— Nouvelle analyse —*) ou des tableaux de bord (*Tableaux de bord…*, *— Nouveau tableau de bord —*), et enfin **Définition** pour une analyse ou **Modifier la disposition** pour un tableau de bord.

### Bouton Définition \{#definition\}

**Définition** affiche ou masque la liste des champs et les cartes de la définition. Une fois la définition masquée, le résultat occupe toute la page et seule la carte **Vue** reste affichée, avec les boutons de vue, la période, **Top** et **Exécuter** : la période passe sur la ligne de la vue, ce qui permet de relancer l'analyse sur une autre période sans rouvrir la définition. Une analyse enregistrée s'ouvre sur son résultat, définition masquée ; une nouvelle analyse s'ouvre sur sa définition.

---

## Les champs

Le volet de gauche présente les champs de sept entités, avec une zone de recherche et deux boutons, **Tout déplier** et **Tout replier**, qui ouvrent ou ferment toutes les entités d'un coup. Chaque champ affiche son libellé et, à droite, son nom — celui à saisir dans un [champ calculé](#calculated-fields) (`statusCode`, `totalHT`, `issueDate`…) :

| Entité | Une ligne par |
|---|---|
| **Factures** | Facture : statut, montants, contrepartie, dates. |
| **Documents (archive)** | Document archivé. |
| **Évènements du cycle de vie** | Évènement de statut d'une facture. |
| **Contrôles de validation** | Anomalie de validation d'une facture. |
| **Lignes de facture** | Ligne de facture. |
| **Ventilation TVA** | Ligne de ventilation de TVA. |
| **Notifications** | Notification. |

L'entité choisie sur la carte **Vue** détermine ce que compte une ligne du résultat ; les champs des autres entités se rattachent par la facture. Un filtre sur les évènements, les contrôles ou les lignes sélectionne les factures qui ont une telle ligne.

Un champ se glisse sur une étagère, ou s'ajoute d'un clic. Les montants sont exprimés dans leur unité réelle. Un champ codé — statut, type de transaction… — affiche les libellés de la liste choisie pour cette colonne dans les [Vues de liste](../configuration/list-views.md) (Factures, E-Documents, Erreurs d'intégration) : une liste courte définie à cet endroit vaut aussi pour l'Explorateur.

---

## Construire une analyse

La définition se présente comme une colonne de cartes, une par partie de l'analyse, au-dessus du résultat :

| Carte | Rôle |
|---|---|
| **Vue** | L'entité, puis la vue : un bouton à icône par vue — tableau, croisé, barres, courbe, secteurs, indicateurs — et **Détail**. **Top** limite le résultat aux groupes les plus importants ; **Exécuter** lance l'analyse. |
| **Options** | Affichée pour un graphique ou un tableau croisé : mesure représentée, *Horizontal*, *Empilé*, *Aire*, *Anneau*, mesure et **Part** du tableau croisé, champ placé en **Colonnes** (tableau croisé) ou en **Séries** (graphique). |
| **Période** | Un champ de date de n'importe quelle entité et sa plage, ou *Sans filtre de période*. Le switch **Exclure les erreurs traitées** écarte les erreurs déjà prises en charge par le service client. |
| **Lignes** | Les champs qui regroupent le résultat. Une date se regroupe par **jour**, **semaine**, **mois**, **trimestre** ou **année** ; un champ codé choisit ce qu'il affiche (voir ci-dessous). Dans un graphique, le deuxième champ des lignes donne les séries. En vue Détail, cette carte donne les **Colonnes**. |
| **Mesures** | Les valeurs calculées par groupe : **Nombre**, **Distincts**, **Somme**, **Moyenne**, **Min**, **Max**. *Nombre de lignes* est proposé par défaut. |
| **Filtres** | Conditions sur n'importe quel champ — *contient*, `=`, `≠`, `<`, `≤`, `>`, `≥`, *entre*, *parmi*, *est vide*, *n'est pas vide*. Sur un champ codé, `≠` garde aussi les lignes où le champ est vide. |

Le résultat s'affiche dans un panneau sous les cartes. Son titre rappelle la vue et indique ce que l'exécution a donné : *3 groupe(s) sur 42 ligne(s)* pour un résultat regroupé — suivi de *tronqué aux premières lignes* quand **Top** l'a limité — ou le nombre de lignes en vue Détail.

### Code ou libellé d'un champ codé \{#code-or-label\}

Une ligne posée sur un champ codé — statut, motif, type de transaction… — porte un sélecteur, *Ce qu'affiche la colonne* :

| Choix | Affichage |
|---|---|
| **Code — libellé** *(par défaut)* | Le code et le libellé dans une même cellule — `200 — Déposée`. |
| **Libellé** | Le libellé seul. |
| **Code** | Le code seul. |
| **Deux colonnes** | Dans le tableau, le code (titre de colonne suivi de `(ID)`) et le libellé côte à côte ; le tableau croisé, les graphiques, le PDF et l'Excel affichent le code et le libellé dans une même cellule. |

Le tableau, le tableau croisé, les graphiques, le PDF et l'Excel suivent ce choix, enregistré avec l'analyse. Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md) qui envoie l'analyse affiche toujours le code et le libellé.

### Vues

| Vue | Résultat |
|---|---|
| **Tableau** | Une ligne par groupe, avec les mesures. |
| **Croisé** | Un tableau croisé : champs des lignes imbriqués avec sous-totaux repliables (*Tout déplier*, *Tout replier*), un axe en colonnes facultatif, et la **part** de chaque cellule dans son niveau parent ou dans le total. |
| **Détail** | Les lignes elles-mêmes, page par page ; une ligne ouvre la facture. |
| **Barres** | Verticales ou horizontales, groupées ou empilées. |
| **Courbe** | Courbe ou aire. |
| **Secteurs** | Secteurs ou anneau. |
| **Indicateurs** | Des cartes avec les totaux sur toutes les lignes du résultat. |

Dans un graphique, les dix séries les plus importantes sont tracées et les autres regroupées sous *Autres* ; les dates se lisent dans l'ordre, les autres catégories par importance. Le survol affiche les valeurs. Passer d'une vue à l'autre ne relance pas la requête, et les options du graphique sont enregistrées avec l'analyse.

### Explorer les données

Une ligne du résultat, une cellule du tableau croisé, une barre, un point ou un secteur ouvre les **lignes sous-jacentes** ; une ligne de détail ouvre la fenêtre de la facture.

---

## Champs calculés \{#calculated-fields\}

Une analyse peut définir ses propres champs avec un petit langage d'expressions, sous **Champs calculés** → **Nouveau champ calculé** :

| Champ | Description |
|---|---|
| **Nom** | Lettres, chiffres et `_`. |
| **Libellé** / **Libellé français** | Affichés dans la liste des champs et dans les résultats. |
| **Expression** | Calculs sur les montants, fonctions et conditions. *Insérer un champ…* et *Insérer une fonction…* insèrent à la position du curseur. |
| **Tester** | Applique l'expression à quelques lignes avant de l'utiliser. |

| Fonction | Résultat |
|---|---|
| `age(date)` | Jours depuis la date. |
| `days(début, fin)` | Jours entre deux dates. |
| `year(date)`, `month(date)` | Année, mois. |
| `round(x, décimales)`, `abs(x)` | Arrondi, valeur absolue. |
| `coalesce(x, valeur si vide)` | Une valeur quand le champ est vide. |
| `condition ? 'a' : 'b'` | Un choix — `age(dueDate) > 30 ? 'en retard' : 'à temps'`. |
| `in ('a', 'b')` | Appartenance à une liste. |

Un nombre s'utilise comme mesure, un texte comme ligne ou comme filtre. L'expression donne le même résultat sur toutes les bases prises en charge.

---

## Enregistrer et partager

**Enregistrer** ouvre une fenêtre avec le **Nom** (dans la langue de l'interface), **Visible par** — *Tous les utilisateurs qui ouvrent l'Explorateur* ou *Moi seulement* — puis **Enregistrer** ou **Enregistrer sous**. *Enregistrer* remplace l'analyse ; *Enregistrer sous* en crée une copie sous le nouveau nom : c'est ainsi qu'une analyse fournie s'adapte en gardant l'originale. Les analyses enregistrées sont classées par public (IT, Comptabilité, Audit, Personnalisées) et par nom ; en choisir une l'exécute aussitôt avec sa propre période.

Chaque analyse et chaque tableau de bord est un fichier JSON du dossier de configuration de l'environnement (`analyses/`, `dashboards/`). Les deux se transportent vers une autre instance par la [promotion](../management/promotion.md) — un tableau de bord emporte ses analyses — et le [rapport d'implémentation](reports/implementation-report.md) les recense.

---

## Tableaux de bord \{#dashboards\}

L'onglet **Tableaux de bord** réunit des analyses enregistrées sous forme de **tuiles** sur une grille de quatre colonnes, chacune avec sa largeur, sa hauteur et sa vue — graphique, tableau ou tableau croisé. La carte **Période**, en haut, s'applique à toutes les tuiles ; **Actualiser** relance les tuiles. Une tuile s'explore comme son analyse, et son crayon ouvre l'analyse dans l'éditeur.

### Modifier la disposition \{#edit-layout\}

**Modifier la disposition** transforme la grille en éditeur de disposition :

| Action | Comment |
|---|---|
| **Ajouter une tuile** | Choisir une analyse dans *Analyse à ajouter…*, sur la carte Période : elle s'ajoute en fin de grille. |
| **Déplacer une tuile** | La faire glisser par sa poignée (⠿, *Glisser pour déplacer*) sur une autre tuile ; une barre bleue montre où elle se place. |
| **Redimensionner une tuile** | Faire glisser son coin inférieur droit (*Glisser pour redimensionner*) : la largeur s'aligne sur une à quatre colonnes, la hauteur sur S, M ou L. Le titre de la tuile rappelle la taille — `2 × M`. |
| **Clavier** | Sur la poignée, ← et → placent la tuile avant ou après sa voisine ; Maj + flèches modifient sa largeur et sa hauteur. |
| **Retirer une tuile** | La corbeille du titre de la tuile. |

**Enregistrer**, dans l'en-tête de la page, conserve la disposition.

<svg viewBox="0 0 1320 422" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="386" rx="14" fill="url(#exd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur</text>
  <rect x="1034" y="34" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1057.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ PDF</text>
  <rect x="972" y="34" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.0" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Excel</text>
  <rect x="940" y="34" width="26" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="953.0" y="48.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="839" y="34" width="95" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="886.5" y="48.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">💾 Enregistrer</text>
  <rect x="240" y="76" width="232" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="288.0" y="91.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyses (12)</text>
  <rect x="337" y="77" width="134" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="404.0" y="91.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableaux de bord (3)</text>
  <rect x="482" y="77" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="91.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Clôture du mois ▾</text>
  <rect x="692" y="77" width="162" height="22" rx="5" fill="url(#exd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="773.0" y="91.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier la disposition</text>
  <rect x="240" y="112" width="840" height="34" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="120.0" width="18" height="18" rx="5" fill="none" stroke="#c084fc" strokeWidth="1"/>
  <text x="257" y="132.5" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◷</text>
  <text x="272" y="132.5" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="324" y="118" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="334" y="132.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">📅 30 derniers jours ▾</text>
  <rect x="810" y="118" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="820" y="132.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Analyse à ajouter… ▾</text>
  <rect x="998" y="118" width="74" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1035.0" y="132.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <rect x="240" y="156" width="840" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1" strokeDasharray="0"/>
  <text x="252.0" y="174" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="266.0" y="174" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">TVA par mois et par taux</text>
  <text x="1050.0" y="174" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4 × M</text>
  <text x="1068.0" y="174" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M1076,262 L1076,272 L1066,272" fill="none" stroke="#94a3b8" strokeWidth="1.6"/>
  <rect x="278.0" y="240.0" width="64.0" height="20.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="278.0" y="233.3" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="378.0" y="233.3" width="64.0" height="26.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="378.0" y="226.7" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="478.0" y="226.7" width="64.0" height="33.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="478.0" y="213.3" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="578.0" y="233.3" width="64.0" height="26.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="578.0" y="226.7" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="678.0" y="220.0" width="64.0" height="40.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="678.0" y="206.7" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="778.0" y="226.7" width="64.0" height="33.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="778.0" y="220.0" width="64.0" height="6.7" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="878.0" y="213.3" width="64.0" height="46.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="878.0" y="200.0" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="978.0" y="220.0" width="64.0" height="40.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="978.0" y="206.7" width="64.0" height="13.3" fill="#c084fc" fillOpacity="0.85"/>
  <rect x="240" y="286" width="415" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="252.0" y="304" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="266.0" y="304" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Montants par statut</text>
  <text x="625.0" y="304" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2 × M</text>
  <text x="643.0" y="304" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M651,382 L651,392 L641,392" fill="none" stroke="#94a3b8" strokeWidth="1.6"/>
  <text x="256.0" y="326" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Déposée</text>
  <text x="639.0" y="326" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">19 280,50</text>
  <text x="256.0" y="346" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Mise à disposition</text>
  <text x="639.0" y="346" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">20 753,89</text>
  <text x="256.0" y="366" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Paiement transmis</text>
  <text x="639.0" y="366" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">13 457,20</text>
  <rect x="665" y="286" width="415" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1" strokeDasharray="4 3"/>
  <text x="677.0" y="304" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="691.0" y="304" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Principaux clients</text>
  <text x="1050.0" y="304" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2 × M</text>
  <text x="1068.0" y="304" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <path d="M1076,382 L1076,392 L1066,392" fill="none" stroke="#94a3b8" strokeWidth="1.6"/>
  <text x="681.0" y="326" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="755" y="318" width="274" height="10" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="681.0" y="348" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="755" y="340" width="183" height="10" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <text x="681.0" y="370" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Gamma SAS</text>
  <rect x="755" y="362" width="107" height="10" rx="2" fill="#4a9eff" fillOpacity="0.8"/>
  <rect x="1120" y="74" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier la disposition</text>
  <text x="1130" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouter, déplacer, redimensionner</text>
  <line x1="1120" y1="91.0" x2="854" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="168" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="183" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Poignée</text>
  <text x="30" y="196" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">glisser · touches fléchées</text>
  <line x1="200" y1="185.0" x2="254.0" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Taille par le coin</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Maj + flèches sur la poignée</text>
  <line x1="200" y1="347.0" x2="647.0" y2="392" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer · Excel · PDF</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une feuille par tuile en Excel</text>
  <line x1="1120" y1="43.0" x2="1080" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="20" y="112" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une période pour toutes</text>
  <text x="30" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliquée à chaque tuile</text>
  <line x1="200" y1="129.0" x2="324" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Largeur × hauteur</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">4 colonnes · S, M, L</text>
  <line x1="1120" y1="217.0" x2="1040.0" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exd-arrow)"/>
</svg>

---

## Analyses et tableaux de bord fournis

NomaUBL installe douze analyses et trois tableaux de bord, une seule fois ; ils ne sont jamais écrasés ensuite et peuvent donc être adaptés.

| Public | Tableau de bord | Analyses |
|---|---|---|
| **IT** | Exploitation | Volume par document · Contrôles par jour : validation / intégration · Échecs d'envoi et d'import · Factures dans un statut de traitement |
| **Comptabilité** | Clôture du mois | TVA par mois et par taux · Montants par statut · Principaux clients · Factures et avoirs par mois |
| **Audit** | Période d'audit | Contrôles par règle · Refus et rejets par motif · Évènements de statut par mois · Statistiques des statuts |

*Statistiques des statuts* reproduit le tableau détaillé du tableau de bord [Statistiques](./statistics.md#detail-table). *Contrôles par jour* répartit les contrôles de chaque jour entre **validation** (les données de la facture enfreignent une règle Schematron ou XSD, Schematrons client compris) et **intégration** (une étape technique a échoué : plateforme, base de données, transformation, PDF, XML, génération UBL, validateur, traitement).

---

## Exports et rapports quotidiens

| Export | Contenu |
|---|---|
| **PDF** | Une analyse ou un tableau de bord dans la mise en page du [rapport d'audit](reports/audit-report.md) : page de garde avec environnement, période, date, auteur et version, sommaire pour un tableau de bord, en-têtes courants, chaque graphique avec toutes ses données, filtres rappelés. |
| **Excel** | Le résultat tel qu'il est affiché : le tableau croisé pour une vue croisée, sinon ses colonnes et ses lignes ; un tableau de bord avec une feuille par tuile. |
| **PNG** | Le graphique d'une analyse. |

Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md) peut envoyer une analyse enregistrée ou un tableau de bord complet, exécuté sur la fenêtre du rapport, en Excel ou en PDF dans la même mise en page.

---

## Accès

Accorder la page **Explorateur** dans le groupe Navigation de la page [Rôles](../configuration/security/roles.md). Les résultats suivent la visibilité par société de l'utilisateur connecté.

---

## Conseils & bonnes pratiques

- **Partir d'une analyse fournie** et l'*Enregistrer sous* pour l'adapter ; l'originale reste disponible.
- **Masquer la définition pour consulter une analyse enregistrée.** La période reste sur la ligne de la vue : la modifier puis **Exécuter**.
- **Afficher le libellé seul** sur une ligne codée pour un rapport lu par des personnes qui ne connaissent pas les codes ; garder le code pour une analyse technique.
- **Choisir d'abord l'entité.** Elle détermine ce qui est compté : factures, lignes, évènements ou contrôles.
- **Afficher la part du niveau parent dans le tableau croisé** pour lire une répartition — statuts par société, taux de TVA par mois.
- **Donner une liste courte aux champs codés** dans les *Vues de liste* : l'Explorateur la reprend.
- **Envoyer le tableau de bord Clôture du mois par rapport quotidien** en début de mois, en PDF, à l'équipe comptable.
