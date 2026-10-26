---
title: Synthèse
description: "La Synthèse de NomaUBL, page d'accueil de l'application : les factures de la période en montants (chiffre d'affaires et TVA nets des avoirs, nombre de factures, taux de transmission ou d'acceptation) comparées à la période précédente, douze mois de montants facturés, ce qui demande une décision en montants, et la répartition par société, par type d'opération et la situation de l'e-reporting, en ventes ou en achats."
keywords: [NomaUBL, synthèse, synthèse de la facturation, page d'accueil, chiffre d'affaires, TVA, avoirs, taux de transmission, taux d'acceptation, période précédente, e-reporting, tableau de bord métier, ventes, achats, export PDF, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Synthèse

La **Synthèse de la facturation** est la page sur laquelle NomaUBL s'ouvre après la connexion. Elle s'adresse à la comptabilité et au service client : les factures de la période **en montants**, ce qu'elles sont devenues, ce qui **demande encore une décision**, et la situation de chaque société en e-reporting. Chaque chiffre est comparé à la période précédente. La page lit la base NomaUBL et fonctionne donc de la même façon quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé).

Accès : **Synthèse**, première entrée du groupe Navigation. Les files de travail quotidiennes se trouvent sur le tableau de bord [Exploitation](./dashboard.md), l'analyse étape par étape sur [Statistiques](./statistics.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 562" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="syn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="syn-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="syn-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="syn-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="522" rx="14" fill="url(#syn-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse de la facturation</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Les factures de la période en montants, ce qui demande une décision et l'e-reporting.</text>
  <rect x="240" y="82" width="114" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ventes</text>
  <line x1="297" y1="87" x2="297" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="325.5" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Achats</text>
  <rect x="364" y="83" width="223" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="374" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 oct. 2026 · Date document ▾</text>
  <rect x="599" y="89" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M601.5,94.5 L603.8,96.8 L607.8,92" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="616" y="98" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclure les erreurs traitées</text>
  <rect x="916" y="83" width="44" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">PDF</text>
  <rect x="240" y="114" width="151" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="315.5" y="126.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Comparé au 1 – 30 sept. 2026</text>
  <rect x="240.0" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CHIFFRE D'AFFAIRES HT</text>
  <text x="252.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">1 284 560 €</text>
  <text x="400.5" y="184" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+6,2 %</text>
  <text x="252.0" y="200" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Factures 1 312 400 · Avoirs −27 840</text>
  <rect x="422.5" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TVA</text>
  <text x="434.5" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">256 912 €</text>
  <text x="583.0" y="184" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+6,0 %</text>
  <rect x="605.0" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURES ET AVOIRS</text>
  <text x="617.0" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">2 418</text>
  <text x="765.5" y="184" fill="#4ade80" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">+3,1 %</text>
  <text x="617.0" y="200" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 361 factures · 57 avoirs</text>
  <rect x="787.5" y="140" width="172.5" height="70" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="158" fill="#64748b" fontSize="8.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TAUX DE TRANSMISSION</text>
  <text x="799.5" y="184" fill="#e2e8f0" fontSize="17" fontWeight="700" fontFamily="system-ui, sans-serif">96,4 %</text>
  <text x="948.0" y="184" fill="#f87171" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">−0,8 pts</text>
  <text x="799.5" y="200" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 276 émises · 85 non émises</text>
  <rect x="240" y="226" width="460" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="246" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Montant facturé HT par mois</text>
  <text x="254" y="260" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">12 derniers mois, selon le devenir de la facture</text>
  <rect x="260.4" y="311.5" width="22.9" height="70.5" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="260.4" y="306.0" width="22.9" height="5.5" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="260.4" y="305.1" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="260.4" y="302.3" width="22.9" height="2.7" fill="#f87171" fillOpacity="0.85"/>
  <text x="271.9166666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">N</text>
  <rect x="296.3" y="304.1" width="22.9" height="77.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="296.3" y="299.6" width="22.9" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="296.3" y="298.7" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="296.3" y="298.7" width="22.9" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <text x="307.75" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">D</text>
  <rect x="332.1" y="317.9" width="22.9" height="64.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="332.1" y="311.5" width="22.9" height="6.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="332.1" y="306.9" width="22.9" height="4.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="332.1" y="305.1" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="343.58333333333337" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <rect x="367.9" y="295.0" width="22.9" height="87.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="367.9" y="285.8" width="22.9" height="9.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="367.9" y="284.9" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="367.9" y="284.0" width="22.9" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <text x="379.4166666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">F</text>
  <rect x="403.8" y="303.2" width="22.9" height="78.8" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="403.8" y="295.9" width="22.9" height="7.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="403.8" y="293.2" width="22.9" height="2.7" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="403.8" y="291.3" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="415.25000000000006" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <rect x="439.6" y="295.9" width="22.9" height="86.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="439.6" y="291.3" width="22.9" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="439.6" y="290.4" width="22.9" height="0.9" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="439.6" y="288.6" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="451.08333333333337" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">A</text>
  <rect x="475.4" y="312.4" width="22.9" height="69.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="475.4" y="308.7" width="22.9" height="3.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="475.4" y="303.2" width="22.9" height="5.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="475.4" y="301.4" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="486.9166666666667" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <rect x="511.3" y="295.0" width="22.9" height="87.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="511.3" y="289.5" width="22.9" height="5.5" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="511.3" y="287.7" width="22.9" height="1.8" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="511.3" y="286.7" width="22.9" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <text x="522.75" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <rect x="547.1" y="309.6" width="22.9" height="72.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="547.1" y="304.1" width="22.9" height="5.5" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="547.1" y="298.7" width="22.9" height="5.5" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="547.1" y="296.8" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="558.5833333333334" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <rect x="583.0" y="316.1" width="22.9" height="65.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="583.0" y="306.9" width="22.9" height="9.2" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="583.0" y="302.3" width="22.9" height="4.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="583.0" y="300.5" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="594.4166666666666" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">A</text>
  <rect x="618.8" y="298.7" width="22.9" height="83.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="618.8" y="292.2" width="22.9" height="6.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="618.8" y="287.7" width="22.9" height="4.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="618.8" y="286.7" width="22.9" height="0.9" fill="#f87171" fillOpacity="0.85"/>
  <text x="630.25" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <rect x="654.6" y="313.3" width="22.9" height="68.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="654.6" y="308.7" width="22.9" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="654.6" y="305.1" width="22.9" height="3.7" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="654.6" y="303.2" width="22.9" height="1.8" fill="#f87171" fillOpacity="0.85"/>
  <text x="666.0833333333334" y="393" fill="#64748b" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">O</text>
  <rect x="254" y="400" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="267" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Transmises</text>
  <rect x="326.6" y="400" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="339.6" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">En cours</text>
  <rect x="389.68" y="400" width="9" height="9" rx="2" fill="#fb923c"/>
  <text x="402.68" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">À corriger</text>
  <rect x="462.28" y="400" width="9" height="9" rx="2" fill="#f87171"/>
  <text x="475.28" y="408" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Refusées / en litige</text>
  <rect x="710" y="226" width="250" height="190" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="724" y="246" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui demande une décision</text>
  <text x="724" y="260" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Toutes dates confondues · 48 210 € TTC</text>
  <rect x="724" y="272" width="3" height="28" rx="1.5" fill="#fb923c"/>
  <text x="734" y="284" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">En litige</text>
  <text x="734" y="296" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">12 factures</text>
  <text x="946" y="284" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">21 600 €</text>
  <rect x="724" y="307" width="3" height="28" rx="1.5" fill="#fb923c"/>
  <text x="734" y="319" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Refusée</text>
  <text x="734" y="331" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">7 factures</text>
  <text x="946" y="319" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">14 980 €</text>
  <rect x="724" y="342" width="3" height="28" rx="1.5" fill="#f87171"/>
  <text x="734" y="354" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rejetées par la plateforme</text>
  <text x="734" y="366" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">5 factures</text>
  <text x="946" y="354" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">8 430 €</text>
  <rect x="724" y="377" width="3" height="28" rx="1.5" fill="#f87171"/>
  <text x="734" y="389" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">À corriger avant envoi</text>
  <text x="734" y="401" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 factures</text>
  <text x="946" y="389" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3 200 €</text>
  <rect x="240.0" y="430" width="233.33333333333334" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="448" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par société</text>
  <text x="252.0" y="468" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00001</text>
  <text x="461.33333333333337" y="468" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">62 %</text>
  <text x="252.0" y="486" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00002</text>
  <text x="461.33333333333337" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">38 %</text>
  <rect x="483.33333333333337" y="430" width="233.33333333333334" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="448" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par type d'opération</text>
  <text x="495.33333333333337" y="468" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">B2B national</text>
  <text x="704.6666666666667" y="468" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">71 %</text>
  <text x="495.33333333333337" y="486" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">B2B international</text>
  <text x="704.6666666666667" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 %</text>
  <text x="495.33333333333337" y="504" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">B2C</text>
  <text x="704.6666666666667" y="504" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">20 %</text>
  <rect x="726.6666666666667" y="430" width="233.33333333333334" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="448" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">E-reporting</text>
  <text x="738.6666666666667" y="468" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00001</text>
  <text x="948.0000000000001" y="468" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Prochaine : 1 – 10 nov.</text>
  <text x="738.6666666666667" y="486" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">00002</text>
  <text x="948.0000000000001" y="486" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Prochaine : 1 – 30 nov.</text>
  <rect x="20" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ventes ou achats</text>
  <text x="30" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bascule tous les chiffres</text>
  <line x1="200" y1="97.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre indicateurs</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nets des avoirs</text>
  <line x1="200" y1="187.0" x2="240" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Douze mois</text>
  <text x="30" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">jusqu'à la fin de la période</text>
  <line x1="200" y1="313.0" x2="254" y2="326" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rangée du bas</text>
  <text x="30" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">société · type · e-reporting</text>
  <line x1="200" y1="477.0" x2="240" y2="476" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="20" y="116" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="131" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période et base de date</text>
  <text x="30" y="144" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'ouvre sur la période par défaut</text>
  <line x1="200" y1="133.0" x2="404" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="1000" y="158" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="173" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écart à la période préc.</text>
  <text x="1010" y="186" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">% ou points, vert / rouge</text>
  <line x1="1000" y1="175.0" x2="950" y2="180" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="1000" y="296" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="311" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne ouvre les factures</text>
  <text x="1010" y="324" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ces statuts, toutes dates</text>
  <line x1="1000" y1="313.0" x2="946" y2="331" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mise en page du rapport d'audit</text>
  <line x1="1000" y1="97.0" x2="960" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#syn-arrow)"/>
</svg>

---

## En-tête \{#header\}

| Contrôle | Par défaut | Description |
|---|---|---|
| **Ventes / Achats** | Ventes | Bascule tous les chiffres de la page entre les factures émises et les factures reçues. |
| **Période** | Ce mois-ci, ou la [période par défaut](../configuration/default-periods.md) définie pour cette vue | Le [sélecteur de période](../configuration/default-periods.md#period-picker) : périodes prédéfinies, calendrier sur deux mois et base de date. |
| **Base de date** | Date document | *Date document*, *Date d'activité* ou *Date d'archivage*, au pied du sélecteur de période. |
| **Exclure les erreurs traitées** | Activé | Masque les factures déjà traitées par le service client qui restent dans un statut en erreur. Les factures traitées dans les autres statuts restent comptées. |
| **Comparé au …** | — | Indique la période précédente utilisée pour les écarts (voir ci-dessous). Masqué pour la période *Tout*. |
| **↻** | — | Recharge la page avec les mêmes filtres. Les chiffres sont réutilisés pendant le délai du [cache des tableaux de bord](../configuration/default-periods.md#dashboard-cache) (60 minutes si rien n'est réglé) ; l'heure de leur chargement s'affiche à côté (*Mis à jour à 14:05*). |
| **PDF** | — | Chiffres clés, graphique et tableaux au format du [rapport d'audit](reports/audit-report.md) (`synthese-facturation.pdf`). |

La période, la base de date, le switch et le sens sont mémorisés dans le navigateur : la page se rouvre telle qu'elle a été laissée.

### Période précédente \{#previous-period\}

L'écart affiché à côté de chaque chiffre compare la période à celle qui la précède, choisie ainsi :

| Période | Comparée à |
|---|---|
| Commence le 1er janvier (par exemple *Cette année*) | Les mêmes dates un an plus tôt. |
| Commence le 1er d'un mois (*Ce mois-ci*, *Mois dernier*, *Ce trimestre*…) | Les mêmes dates reculées de la durée de la période en mois : *Ce mois-ci* jusqu'à aujourd'hui se compare aux mêmes jours du mois précédent, un mois entier au mois précédent, un trimestre au trimestre précédent. |
| Toute autre période (*7 derniers jours*, plage personnalisée…) | La période de même durée juste avant. |

Le tableau de bord [Statistiques](./statistics.md) applique la même règle.

---

## Chiffres clés

| Chiffre | Valeur | Ligne de détail | Écart |
|---|---|---|---|
| **Chiffre d'affaires HT** *(Achats : Achats HT)* | Factures moins avoirs. | `Factures … · Avoirs −…` | en % |
| **TVA** | TVA des factures moins celle des avoirs. | — | en % |
| **Factures et avoirs** | Nombre de documents. | `… factures · … avoirs` | en % |
| **Taux de transmission** *(Achats : Taux d'acceptation)* | Part des factures transmises au client (acceptées, pour les achats), calculée sur les factures destinées à la plateforme — envoyées ou retenues pour revue ; les types de document qui ne passent pas par la plateforme ne la font pas baisser. | `… émises · … non émises` (`… acceptés`) | en points |

Un écart s'affiche en vert à la hausse et en rouge à la baisse, suivi de la valeur précédente (`contre …`).

---

## Montant facturé par mois

Un histogramme empilé des **douze derniers mois**, jusqu'au mois de fin de la période, selon le devenir de la facture : *Transmises au client* (achats : *Acceptées*), *En cours*, *À corriger*, *Refusées ou en litige*. Les avoirs ne figurent pas dans le graphique. Pour les achats, le titre devient *Montant reçu HT par mois*.

---

## Ce qui demande une décision

Les factures qui attendent une intervention, **toutes dates confondues**, en montants TTC. Le sous-titre donne le total.

| Ligne | Contenu | Suite indiquée |
|---|---|---|
| Une ligne par statut d'erreur métier (*En litige*, *Refusée*…) | Du plus gros montant au plus petit. | *Décision à prendre avec le client* |
| **Rejetées par la plateforme** | Statut 213. | *À corriger puis renvoyer* |
| **À corriger avant envoi** | Les autres statuts d'erreur technique, regroupés. | *Un contrôle ou l'import par la plateforme a échoué* |

Chaque ligne donne le montant et le nombre de factures ; un clic ouvre [E-Invoicing](./invoices.md) filtré sur ces statuts, toutes dates confondues. Quand rien n'attend, le bloc affiche *Rien n'attend de décision.*

---

## Par société, par type d'opération, e-reporting

| Bloc | Contenu |
|---|---|
| **Par société** | Nombre de factures, montant HT et part transmise (sur les factures destinées à la plateforme), par société. |
| **Par type d'opération** | Une barre par type avec son flux : *B2B national* (facturation électronique), *B2B international* (e-reporting 10.1), *B2C* (e-reporting 10.3), *Autre*. Le B2B national passe par la plateforme ; l'international et le B2C sont déclarés en [e-reporting](./ereporting.md). |
| **E-reporting** *(ventes seulement)* | Par société : la fin de la dernière période déclarée (ou *Aucune déclaration pour l'instant*), la prochaine période à déclarer et son statut. |

---

## Accès \{#access\}

Accorder la page **Synthèse** dans le groupe Navigation de la page [Rôles](../configuration/security/roles.md) ; le serveur et l'outil `billing_overview` de l'assistant IA contrôlent le même droit. Les chiffres suivent les sociétés et les [filtres de lignes](../configuration/security/roles.md#filtres-de-lignes) du rôle de l'utilisateur connecté. C'est la [page de démarrage](../configuration/default-periods.md#start-page) par défaut après la connexion ; avec une licence restreinte, l'application s'ouvre sur le tableau de bord [Exploitation](./dashboard.md).

---

## Conseils & bonnes pratiques

- **Laisser *Exclure les erreurs traitées* activé pour la revue mensuelle.** Les montants ne montrent alors que les erreurs que personne n'a encore prises en charge.
- **Choisir *Date document* pour rapprocher avec la comptabilité.** C'est la date imprimée sur la facture, celle de la déclaration de TVA ; *Date d'archivage* correspond aux rapports de traitement.
- **Partir de *Ce qui demande une décision*.** Un clic mène aux factures concernées, toutes dates confondues, prêtes à être traitées.
- **Définir une fois pour tous la période d'ouverture** dans [Périodes par défaut](../configuration/default-periods.md) — par exemple *Mois dernier* pour une équipe qui revoit le mois clos.
- **L'envoyer par e-mail.** Un [rapport quotidien](../sync/scheduled-jobs/daily-digest.md#business-dashboards) peut envoyer la page en PDF ou en Excel — par exemple le 1er, la synthèse du mois écoulé, telle que la voit un rôle donné.
