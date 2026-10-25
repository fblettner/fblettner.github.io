---
title: Exploitation
description: "Le tableau de bord Exploitation de NomaUBL : ce que l'équipe a à traiter sur la période, en trois files de travail (en cours, à corriger puis renvoyer pour l'informatique, nouvelle facture à émettre pour le service client), le graphique d'activité, les factures bloquées depuis le plus longtemps, les derniers événements, les règles en échec, le délai aller-retour PA et la couverture e-reporting, en ventes ou en achats."
keywords: [NomaUBL, tableau de bord exploitation, files de travail, en cours, à corriger, rejetée, en litige, refusée, graphique d'activité, factures bloquées, derniers événements, règles en échec, aller-retour, couverture e-reporting, ventes, achats, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Exploitation

Le tableau de bord **Exploitation** montre **ce que l'équipe a à traiter** sur la période. Il s'articule autour de trois files de travail, chacune associée à l'équipe concernée : ce qui est en cours et ne demande rien, ce que l'informatique doit corriger puis renvoyer, et ce que le service client doit régler en émettant une nouvelle facture. Viennent ensuite l'activité de la période, les factures bloquées depuis le plus longtemps, les derniers événements et les règles les plus souvent en échec. Toutes les valeurs proviennent de la base NomaUBL, quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé).

Accès : **Exploitation**, dans le groupe Navigation, après la [Synthèse](./billing-overview.md). Avec une licence restreinte, ou pour un rôle sans la Synthèse, c'est la page d'ouverture de l'application. L'état technique du serveur se trouve sur le [tableau de bord IT](./tech-dashboard.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 598" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="ops-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="ops-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="ops-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="ops-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="558" rx="14" fill="url(#ops-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Exploitation</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">2 418 factures sur la période · 2 276 approuvées · 115 en cours · 27 à traiter</text>
  <rect x="240" y="82" width="114" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="83" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="268.5" y="97.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ventes</text>
  <line x1="297" y1="87" x2="297" y2="101" stroke="#334155" strokeWidth="1"/>
  <text x="325.5" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Achats</text>
  <rect x="364" y="83" width="167" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="374" y="97.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Hier · Date d'activité ▾</text>
  <rect x="543" y="89" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="560" y="98" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclure les erreurs traitées</text>
  <rect x="728.8" y="83" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="741.8" y="97.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="240.0" y="120" width="233.33333333333334" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="120" width="233.3" height="3" rx="1.5" fill="#4a9eff"/>
  <text x="252.0" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="461.33333333333337" y="160" fill="#e2e8f0" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">115</text>
  <text x="252.0" y="156" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Suivi automatique, rien à faire</text>
  <text x="252.0" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Créées, en attente d'envoi</text>
  <text x="461.33333333333337" y="176" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <text x="252.0" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Envoyées à la plateforme</text>
  <text x="461.33333333333337" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">31</text>
  <text x="252.0" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">En attente de la plateforme</text>
  <text x="461.33333333333337" y="220" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">26</text>
  <text x="252.0" y="242" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">En transmission au client</text>
  <text x="461.33333333333337" y="242" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">46</text>
  <rect x="483.33333333333337" y="120" width="233.33333333333334" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="483.33333333333337" y="120" width="233.3" height="3" rx="1.5" fill="#f87171"/>
  <text x="495.33333333333337" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À corriger puis renvoyer</text>
  <text x="704.6666666666667" y="160" fill="#f87171" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">8</text>
  <text x="495.33333333333337" y="156" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">À traiter par l'informatique</text>
  <text x="495.33333333333337" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">213 Rejetée</text>
  <text x="704.6666666666667" y="176" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">5</text>
  <text x="495.33333333333337" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9905 Échec de validation</text>
  <text x="704.6666666666667" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">2</text>
  <text x="495.33333333333337" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">9907 Échec d'import par la PA</text>
  <text x="704.6666666666667" y="220" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1</text>
  <rect x="726.6666666666667" y="120" width="233.33333333333334" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="726.6666666666667" y="120" width="233.3" height="3" rx="1.5" fill="#fb923c"/>
  <text x="738.6666666666667" y="142" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une nouvelle facture doit être émise</text>
  <text x="948.0000000000001" y="160" fill="#fb923c" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">19</text>
  <text x="738.6666666666667" y="156" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">À traiter par le service client</text>
  <text x="738.6666666666667" y="176" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">207 En litige</text>
  <text x="948.0000000000001" y="176" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">12</text>
  <text x="738.6666666666667" y="198" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">208 Suspendue</text>
  <text x="948.0000000000001" y="198" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <text x="738.6666666666667" y="220" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">210 Refusée</text>
  <text x="948.0000000000001" y="220" fill="#cbd5e1" fontSize="9" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">7</text>
  <rect x="240" y="284" width="720" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="304" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Activité par jour</text>
  <rect x="259.2" y="342.0" width="18.5" height="40.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="259.2" y="338.6" width="18.5" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="259.2" y="336.9" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="259.2" y="335.7" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="288.0" y="347.1" width="18.5" height="34.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="288.0" y="344.3" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="288.0" y="344.3" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="288.0" y="343.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="316.9" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="316.9" y="335.1" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="316.9" y="334.6" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="316.9" y="334.6" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="345.7" y="346.6" width="18.5" height="35.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="345.7" y="340.9" width="18.5" height="5.7" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="345.7" y="339.1" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="345.7" y="339.1" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="374.5" y="343.7" width="18.5" height="38.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="374.5" y="340.9" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="374.5" y="339.1" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="374.5" y="339.1" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="403.4" y="332.9" width="18.5" height="49.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="403.4" y="330.0" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="403.4" y="329.4" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="403.4" y="328.3" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="432.2" y="336.3" width="18.5" height="45.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="432.2" y="334.0" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="432.2" y="332.3" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="432.2" y="332.3" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="461.0" y="343.7" width="18.5" height="38.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="461.0" y="341.4" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="461.0" y="340.9" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="461.0" y="340.3" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="489.9" y="340.3" width="18.5" height="41.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="489.9" y="336.9" width="18.5" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="489.9" y="336.9" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="489.9" y="335.7" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="518.7" y="342.6" width="18.5" height="39.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="518.7" y="335.7" width="18.5" height="6.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="518.7" y="335.1" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="518.7" y="335.1" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="547.5" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="547.5" y="333.4" width="18.5" height="4.0" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="547.5" y="332.3" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="547.5" y="332.3" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="576.4" y="338.0" width="18.5" height="44.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="576.4" y="335.1" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="576.4" y="335.1" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="576.4" y="334.0" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="605.2" y="344.3" width="18.5" height="37.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="605.2" y="338.0" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="605.2" y="336.3" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="605.2" y="335.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="634.0" y="339.7" width="18.5" height="42.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="634.0" y="333.4" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="634.0" y="332.3" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="634.0" y="331.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="662.9" y="343.7" width="18.5" height="38.3" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="662.9" y="340.3" width="18.5" height="3.4" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="662.9" y="339.7" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="662.9" y="339.7" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="691.7" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="691.7" y="332.9" width="18.5" height="4.6" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="691.7" y="331.1" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="691.7" y="330.6" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="720.5" y="334.6" width="18.5" height="47.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="720.5" y="328.3" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="720.5" y="327.1" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="720.5" y="326.0" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="749.4" y="346.6" width="18.5" height="35.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="749.4" y="343.7" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="749.4" y="342.0" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="749.4" y="342.0" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="778.2" y="334.0" width="18.5" height="48.0" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="778.2" y="328.9" width="18.5" height="5.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="778.2" y="328.3" width="18.5" height="0.6" fill="#f87171" fillOpacity="0.85"/>
  <rect x="778.2" y="327.7" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="807.0" y="340.3" width="18.5" height="41.7" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="807.0" y="338.0" width="18.5" height="2.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="807.0" y="338.0" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="807.0" y="336.9" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="835.9" y="337.4" width="18.5" height="44.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="835.9" y="332.3" width="18.5" height="5.1" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="835.9" y="331.1" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="835.9" y="330.0" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="864.7" y="341.4" width="18.5" height="40.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="864.7" y="335.1" width="18.5" height="6.3" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="864.7" y="333.4" width="18.5" height="1.7" fill="#f87171" fillOpacity="0.85"/>
  <rect x="864.7" y="333.4" width="18.5" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="893.5" y="332.9" width="18.5" height="49.1" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="893.5" y="330.0" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="893.5" y="328.9" width="18.5" height="1.1" fill="#f87171" fillOpacity="0.85"/>
  <rect x="893.5" y="328.3" width="18.5" height="0.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="922.4" y="335.1" width="18.5" height="46.9" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="922.4" y="332.3" width="18.5" height="2.9" fill="#4a9eff" fillOpacity="0.85"/>
  <rect x="922.4" y="332.3" width="18.5" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="922.4" y="331.1" width="18.5" height="1.1" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="254" y="388" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="267" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Approuvées</text>
  <rect x="326.6" y="388" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="339.6" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">En cours</text>
  <rect x="389.68" y="388" width="9" height="9" rx="2" fill="#f87171"/>
  <text x="402.68" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">À corriger</text>
  <rect x="462.28" y="388" width="9" height="9" rx="2" fill="#fb923c"/>
  <text x="475.28" y="396" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Nouvelle facture à émettre</text>
  <rect x="240.0" y="418" width="355.0" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="438" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bloquées depuis le plus longtemps</text>
  <text x="448.8" y="438" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">les plus anciennes d'abord</text>
  <text x="252.0" y="460" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10412 · RI · 00001</text>
  <text x="583.0" y="460" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">il y a 12 jours</text>
  <text x="252.0" y="478" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10433 · RI · 00002</text>
  <text x="583.0" y="478" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">il y a 9 jours</text>
  <rect x="605.0" y="418" width="355.0" height="78" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="438" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Derniers événements</text>
  <text x="735.4" y="438" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">les 10 derniers</text>
  <text x="617.0" y="460" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10871 · RI · 00001</text>
  <text x="948.0" y="460" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Approuvée</text>
  <text x="617.0" y="478" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INV-10870 · RI · 00001</text>
  <text x="948.0" y="478" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Envoyée à la PA</text>
  <rect x="240.0" y="510" width="233.33333333333334" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="530" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règles en échec</text>
  <text x="252.0" y="546" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">ALL · UBL · INTEG</text>
  <rect x="483.33333333333337" y="510" width="233.33333333333334" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="495.33333333333337" y="530" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Délai aller-retour PA</text>
  <text x="495.33333333333337" y="546" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">moyenne en jours, envoi → statut</text>
  <rect x="726.6666666666667" y="510" width="233.33333333333334" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738.6666666666667" y="530" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Couverture e-Reporting</text>
  <text x="738.6666666666667" y="546" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ouvrir la page →</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ventes ou achats</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">période · base de date</text>
  <line x1="200" y1="93.0" x2="240" y2="94" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien à faire, suivi</text>
  <line x1="200" y1="187.0" x2="240" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="20" y="324" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="339" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Graphique d'activité</text>
  <text x="30" y="352" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par jour, semaine ou mois</text>
  <line x1="200" y1="341.0" x2="254" y2="344" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Bloquées le plus longtemps</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les plus anciennes d'abord</text>
  <line x1="200" y1="457.0" x2="240" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne de synthèse</text>
  <text x="1010" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">total · approuvées · à traiter</text>
  <line x1="1000" y1="93.0" x2="940" y2="62" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pour l'informatique</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">corriger puis renvoyer</text>
  <line x1="1000" y1="167.0" x2="706.6666666666667" y2="156" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pour le service client</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nouvelle facture à émettre</text>
  <line x1="1000" y1="237.0" x2="950" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
  <rect x="1000" y="510" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="525" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rangée du bas</text>
  <text x="1010" y="538" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règles · aller-retour · e-reporting</text>
  <line x1="1000" y1="527.0" x2="960" y2="534" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#ops-arrow)"/>
</svg>

La description de la page résume la période : `… factures sur la période · … approuvées · … en cours · … à traiter`.

---

## Barre de filtres

| Contrôle | Par défaut | Description |
|---|---|---|
| **Ventes / Achats** | Ventes | Bascule tout le tableau de bord entre factures émises et factures reçues. |
| **Période** | Ce mois-ci, ou la [période par défaut](../configuration/default-periods.md) définie pour *Operations dashboard* | Le [sélecteur de période](../configuration/default-periods.md#period-picker) commun. |
| **Base de date** | Date d'activité | *Date d'activité* (dernière mise à jour), *Date document* (BT-2) ou *Date d'archivage*, au pied du sélecteur. Tous les blocs la suivent. |
| **Exclure les erreurs traitées** | Désactivé | Voir ci-dessous. |
| **↻** | — | Recharge tous les blocs. |

Les filtres sont conservés tant que l'application reste ouverte : en quittant le tableau de bord puis en y revenant, on les retrouve tels quels.

### Exclure les erreurs traitées \{#exclure-erreurs-traitees\}

Le switch **Exclure les erreurs traitées** masque les factures déjà traitées par le service client (*Traité* dans la colonne **Suivi** d'[E-Invoicing](./invoices.md)) mais toujours dans un statut en erreur — les groupes `errorTech` / `errorBusiness` du [modèle des statuts](../configuration/system/statuses.md). Les files ne montrent alors que ce qu'il reste à traiter.

- Les factures traitées dans les autres statuts restent comptées : les totaux restent le nombre réel de factures.
- Un clic sur une file reporte le switch sur la liste [E-Invoicing](./invoices.md#exclure-erreurs-traitees), pour que les deux pages affichent le même nombre.

---

## Files de travail

| File | Pour qui | Lignes | Clic |
|---|---|---|---|
| **En cours** | *Suivi automatique, rien à faire* | *Créées, en attente d'envoi* · *Envoyées à la plateforme* · *En attente de la plateforme* · *En transmission au client* (groupes de statuts `created`, `sent`, `pending`, `transmission`) | Les factures du groupe. |
| **À corriger puis renvoyer** | *À traiter par l'informatique* | `213` Rejetée, `9905` Échec de validation, `9907` Échec d'import par la PA, puis tout autre statut d'erreur technique qui a des factures. | Les factures dans ce statut. |
| **Une nouvelle facture doit être émise** | *À traiter par le service client* | `207` En litige, `208` Suspendue, `210` Refusée, puis tout autre statut d'erreur métier qui a des factures. | Les factures dans ce statut. |

Chaque file affiche son total, que les lignes détaillent. Un clic sur le total ouvre toutes les factures de la file dans [E-Invoicing](./invoices.md), un clic sur une ligne celles de la ligne seulement (licence complète).

---

## Graphique d'activité

**Activité par jour** — ou **par semaine** au-delà de 62 jours, **par mois** au-delà de 400 jours — empile les factures de la période en *Approuvées*, *En cours*, *À corriger*, *Nouvelle facture à émettre* et *Autre*. Un jour creux ou un pic d'erreurs se repère aussitôt.

---

## Factures bloquées et derniers événements

| Bloc | Contenu |
|---|---|
| **Bloquées depuis le plus longtemps** *(les plus anciennes d'abord)* | Les factures dont le statut n'a pas bougé depuis le plus longtemps, avec le triplet du document (`doc · dct · kco`), le statut et l'ancienneté (*il y a 12 jours*). Vide quand toutes les factures sont dans un statut final ou en transmission. |
| **Derniers événements** *(les 10 derniers)* | Les derniers événements du cycle de vie, avec le triplet, le statut et l'heure. |

Une ligne ouvre [E-Invoicing](./invoices.md) sur son statut.

---

## Règles, aller-retour et e-reporting

| Bloc | Contenu |
|---|---|
| **Règles en échec** | Les règles de validation qui échouent le plus sur la période, classées, avec leur description. Onglets **TOUT** / **UBL** (Schematron et XSD) / **INTEG** (erreurs de cycle de vie et d'exécution). *Voir toutes les erreurs →* ouvre les [Erreurs d'intégration](diagnostics/integration-errors.md) regroupées par règle ; une règle ouvre ses événements. |
| **Délai aller-retour PA** *(moyenne en jours, envoi → statut)* | Pour les factures envoyées à la plateforme, le délai moyen avant que celle-ci positionne l'un de ses propres statuts. Une hausse signale un ralentissement côté plateforme. |
| **Couverture e-Reporting** | Le dernier rapport par société et par flux, avec le nombre de rapports et de factures. *Ouvrir la page →* ouvre [E-Reporting](./ereporting.md). |

---

## À propos de cette version

Le bloc replié **À propos de cette version**, en bas de page, indique la version, le profil AFNOR et les versions des Schematrons livrés (voir [Schematrons](../references/schematrons.md)).

---

## Accès

Accorder la page **Exploitation** dans le groupe Navigation de la page [Rôles](../configuration/security/roles.md). Le rôle voit tout le tableau de bord ou rien ; la [Synthèse](./billing-overview.md) et les [Statistiques](./statistics.md) s'accordent à part. Les chiffres suivent les sociétés et les [filtres de lignes](../configuration/security/roles.md#filtres-de-lignes) du rôle. L'ouverture de la liste des factures depuis un bloc demande une licence complète.

---

## Conseils & bonnes pratiques

- **Lire les files par équipe.** *En cours* ne demande personne ; la file rouge revient à l'informatique, la file orange au service client — chaque équipe part de la sienne.
- **Choisir *Hier* pour le contrôle du matin.** La période couvre hier et aujourd'hui et compte donc les traitements de nuit en entier ; en faire la [période par défaut](../configuration/default-periods.md) de la vue si l'équipe commence toujours ainsi.
- **Activer *Exclure les erreurs traitées* en cours de journée.** Les files diminuent au fur et à mesure que le service client marque les factures comme traitées.
- **Partir des règles en échec pour corriger.** Une règle qui cumule des centaines d'échecs révèle le plus souvent un seul changement en amont (un champ renommé, un code de taxe périmé) ; sa [règle Schematron](../references/schematrons.md) indique précisément ce qui est attendu.
- **Analyser ailleurs.** Le tableau de bord repère le problème ; la fenêtre de détail d'[E-Invoicing](./invoices.md) et la page [Erreurs d'intégration](diagnostics/integration-errors.md) l'expliquent.
