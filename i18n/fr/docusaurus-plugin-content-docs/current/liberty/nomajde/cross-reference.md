---
title: Références croisées
description: "La page Références croisées de Nomajde : une recherche dans les spécifications de JD Edwards EnterpriseOne — applications, états, données, vues métier, tables, structures de données, fonctions métier, objets définis par l'utilisateur — pour voir ce que contient un objet et où il est utilisé, avec sa dernière utilisation, ses règles d'événement et ses UDO."
keywords: [Nomajde, JD Edwards, JDE E1, références croisées, où utilisé, analyse d'impact, application, écran, état, donnée, vue métier, table, structure de données, fonction métier, règles d'événement, UDO, objets définis par l'utilisateur, utilisation des objets]
---

# Références croisées

**Références croisées**, juste sous **Explorateur de données** dans le menu de Nomajde, répond aux deux questions par lesquelles commence toute modification de JD Edwards : **que contient cet objet**, et **où est-il utilisé**. Une seule zone de recherche trouve une application, un état, une donnée, une vue métier, une table, une structure de données, une fonction métier ou un objet défini par l'utilisateur ; la page s'ouvre alors sur le contenu de l'objet, et un clic sur **Où utilisée** bascule vers l'autre question.

La page lit les références croisées collectées dans les spécifications de JD Edwards EnterpriseOne — écrans, sections d'états, règles d'événement, vues, tables, structures de données, fonctions métier, objets définis par l'utilisateur — et l'historique d'utilisation des objets. Elle est en lecture seule : rien n'est écrit dans JD Edwards.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xra-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xra-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xra-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="xra-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="410" rx="14" fill="url(#xra-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Références croisées</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Ce que contient une application ou un état JD Edwards, et où une donnée, une vue ou une table est utilisée.</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="88" width="250" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="98" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌕ P01012</text>
  <rect x="246" y="128" width="34" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="263.0" y="138.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout</text>
  <rect x="285" y="128" width="68" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="319.0" y="138.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications</text>
  <rect x="358" y="128" width="39" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="377.5" y="138.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">États</text>
  <rect x="402" y="128" width="34" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="419.0" y="138.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="246" y="148" width="43" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="267.5" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tables</text>
  <rect x="294" y="148" width="106" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="347.0" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Structures de données</text>
  <rect x="405" y="148" width="55" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="432.5" y="158.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Fonctions</text>
  <rect x="246" y="168" width="30" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="261.0" y="178.7" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO</text>
  <text x="248" y="202" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">APPLICATIONS</text>
  <rect x="244" y="210" width="234" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="224.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="291.62" y="224.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book</text>
  <text x="472" y="224.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">6 écran(s)</text>
  <rect x="244" y="236" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="250.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012BR</text>
  <text x="302.15999999999997" y="250.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Additional Info…</text>
  <text x="472" y="250.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">2 écran(s)</text>
  <rect x="244" y="262" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="276.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012D</text>
  <text x="296.89" y="276.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Translations</text>
  <text x="472" y="276.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">2 écran(s)</text>
  <rect x="244" y="288" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="302.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012SS</text>
  <text x="302.15999999999997" y="302.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Self Service - Update Addr…</text>
  <text x="472" y="302.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">1 écran(s)</text>
  <text x="248" y="328" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">STRUCTURES DE DONNÉES</text>
  <rect x="244" y="336" width="234" height="22" rx="5" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="350.5" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">D7000150</text>
  <text x="312" y="350.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">P01012 - Plug &amp; Play - 01</text>
  <text x="472" y="350.5" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">BSFN</text>
  <rect x="498" y="88" width="586" height="330" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="110" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="564" y="110" fill="#cbd5e1" fontSize="10.5" fontFamily="system-ui, sans-serif">Address Book</text>
  <text x="648" y="110" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">modèle T01012 · 6 écran(s) · collecté le 21/11/2026</text>
  <rect x="926" y="96" width="146" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="999.0" y="110.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Créer ses points d'accès…</text>
  <rect x="510" y="122" width="260" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="640.0" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Dernière utilisation 29/10/2026 · 3 utilisateur(s)</text>
  <rect x="776" y="122" width="121" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="836.5" y="136.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Actualiser depuis JDE</text>
  <rect x="510.0" y="152" width="182.0" height="56" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="518.0" y="166" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">W01012A</text>
  <text x="518.0" y="178" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Address Book Revision</text>
  <text x="518.0" y="189" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">vue V0101E</text>
  <text x="518.0" y="200" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">84 champs · 13 UDO</text>
  <rect x="700.0" y="152" width="182.0" height="56" rx="7" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="708.0" y="166" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">W01012B</text>
  <text x="708.0" y="178" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Work With Addresses</text>
  <text x="708.0" y="189" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">vue V0101E · point d'entrée</text>
  <text x="708.0" y="200" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">19 colonnes de grille · 18 UDO</text>
  <rect x="890.0" y="152" width="182.0" height="56" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="898.0" y="166" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">W01012C</text>
  <text x="898.0" y="178" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Formatted Address</text>
  <text x="898.0" y="189" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">vue V0101E</text>
  <text x="898.0" y="200" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">14 champs</text>
  <rect x="510" y="218" width="554" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="511" y="219" width="51" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="536.5" y="231.0" fill="#4a9eff" fontSize="7.4" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Champs (3)</text>
  <line x1="563" y1="222" x2="563" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="616.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes de grille (19)</text>
  <line x1="670" y1="222" x2="670" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="723.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Boutons et sorties (16)</text>
  <line x1="777" y1="222" x2="777" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="801.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout (42)</text>
  <line x1="826" y1="222" x2="826" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="879.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Règles d'événement (23)</text>
  <line x1="933" y1="222" x2="933" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="976.0" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">Interconnexion (2)</text>
  <line x1="1019" y1="222" x2="1019" y2="234" stroke="#334155" strokeWidth="1"/>
  <text x="1041.5" y="231.0" fill="#94a3b8" fontSize="7.4" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO (18)</text>
  <text x="510" y="254" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">En gris : l'écran ne donne pas de texte — JDE affiche le titre du dictionnaire de données.</text>
  <rect x="510" y="264" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="520" y="278.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="1008" y="264" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="948" y="264" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="975.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="892" y="264" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="917.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="836" y="264" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="794" y="264" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.5" y="278.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="510" y="294" width="562" height="94" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="510" y="294" width="562" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="520" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DONNÉE</text>
  <text x="600" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TEXTE À L'ÉCRAN</text>
  <text x="760" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TABLE</text>
  <text x="896" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">CONTRÔLE</text>
  <text x="910" y="309.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">OÙ UTILISÉE</text>
  <text x="520" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AT1</text>
  <text x="600" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Search Type</text>
  <text x="760" y="332.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="896" y="332.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">54</text>
  <text x="910" y="332.5" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">Où utilisée</text>
  <line x1="511" y1="340" x2="1071" y2="340" stroke="#1f2937" strokeWidth="1"/>
  <text x="520" y="354.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ALPH</text>
  <text x="600" y="354.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Alpha Name</text>
  <text x="760" y="354.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="896" y="354.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">58</text>
  <text x="910" y="354.5" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">Où utilisée</text>
  <line x1="511" y1="362" x2="1071" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <text x="520" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">DC</text>
  <text x="600" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Compressed Description</text>
  <text x="760" y="376.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="896" y="376.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">60</text>
  <text x="910" y="376.5" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">Où utilisée</text>
  <line x1="511" y1="384" x2="1071" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une recherche</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, état, donnée, UDO…</text>
  <line x1="200" y1="113.0" x2="246" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lister toute une famille</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les 300 premiers, et le total</text>
  <line x1="200" y1="167.0" x2="246" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="20" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résultats par nature</text>
  <text x="30" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun avec sa description</text>
  <line x1="200" y1="237.0" x2="244" y2="224" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Structures de données</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">et les fonctions qui les prennent</text>
  <line x1="200" y1="357.0" x2="244" y2="349" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Créer ses points d'accès…</text>
  <text x="1130" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre Créer à partir de… dessus</text>
  <line x1="1120" y1="57.0" x2="1054" y2="107" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="104" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="119" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Usage et actualisation</text>
  <text x="1130" y="132" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui l'a utilisé · le relire</text>
  <line x1="1120" y1="121.0" x2="810" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écrans en cartes</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">point d'entrée, nombres, UDO</text>
  <line x1="1120" y1="197.0" x2="1070" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets de l'écran</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">champs … règles, UDO</text>
  <line x1="1120" y1="267.0" x2="798" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où utilisée</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bascule vers l'autre question</text>
  <line x1="1120" y1="347.0" x2="1014" y2="340" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xra-arrow)"/>
</svg>

---

## La recherche \{#search\}

Il suffit de taper une partie d'un nom, d'un identifiant ou d'une description ; les exemples sous la zone de recherche en lancent une d'un clic : `P01012`, `P4210`, `R42565`, `AN8`, `V0101E`, `F0101`, `F4211`, `D0100033`, `B4200310`, `F4211FSBeginDoc`, *address number*, *sales order*. Les résultats sont regroupés par nature — **Applications**, **États**, **Données**, **Vues métier**, **Tables**, **Structures de données**, **Fonctions métier**, **Objets définis par l'utilisateur** —, chaque ligne avec sa description issue de l'Object Librarian. Un clic ouvre l'objet à droite.

Le résultat le plus proche vient en tête : d'abord l'identifiant tapé tel quel, puis — pour les applications et les états — l'objet dont le titre correspond exactement à la saisie, avant ceux dont le titre ne fait que commencer par elle. La saisie *address book* place ainsi `P01012` *Address Book* devant la vingtaine d'applications dont le titre commence par ces mots.

Un objet défini par l'utilisateur se trouve par n'importe quelle partie de son identifiant, de son nom ou de sa description ; sa ligne indique son type et l'application, l'écran et la version sur lesquels il est posé.

### Lister toute une famille \{#browse\}

Les pastilles sous la zone de recherche — **Tout**, **Applications**, **États**, **Vues**, **Tables**, **Structures de données**, **Fonctions**, **UDO** — listent dans la colonne de gauche tous les objets de cette famille, triés par identifiant, avec leur total : les 300 premiers, puis une ligne indique combien il y en a. Une fois la famille choisie, la zone de recherche devient **Réduire la liste…** : la saisie ne filtre que cette famille — les identifiants qui commencent par le texte tapé, les titres qui le contiennent. **Tout** revient à la recherche sur toutes les familles. Une ligne d'UDO affiche son nom, son identifiant et son type.

---

## Ce que contient l'objet \{#content\}

| Objet | S'ouvre sur |
|---|---|
| **Application** | Ses écrans sous forme de cartes : identifiant, titre, vue métier, nombre de champs, de colonnes de grille, de boutons et sorties, d'UDO. Un écran appelé depuis l'extérieur porte la mention **point d'entrée**. Les onglets d'un écran : **Champs**, **Colonnes de grille**, **Boutons et sorties**, **Tout**, **Règles d'événement**, **Interconnexion** (les données que lui passe l'appelant) et **UDO** (les objets définis par l'utilisateur posés dessus, les demandes de service qui l'exécutent, les pages et les liens qui l'ouvrent). |
| **État** | Ses sections sous forme de cartes (nature, vue métier, nombres), et dans une section ses **Champs**, **Libellés**, **Sélection de données**, **Séquencement des données** — dans leur ordre, croissant ou décroissant —, **Tout** et **Règles d'événement**. |
| **Vue métier** | Les tables qu'elle lit (la principale d'abord), ses colonnes, ses **Jointures** : quelles deux tables, le type de jointure, les colonnes de la jointure. |
| **Table** | Qui l'utilise, puis ses **Colonnes** (donnée et nom SQL, dans l'ordre), ses **Index** (primaire, unique, leurs colonnes) et ses **Déclencheurs**. |
| **Structure de données** | Ses données dans leur ordre, et les fonctions métier qui la prennent. |
| **Objet de fonctions métier** | Ses fonctions, chacune avec sa structure de données et son module ; **Où appelée** liste les objets dont les règles d'événement appellent une fonction, et à quel endroit. |
| **Objet défini par l'utilisateur** | Ce qu'il est — type, code système, propriétaire, statut, auteur et date de la dernière modification — et les **objets utilisés**, chaque ligne avec **Comment** il les utilise et **Où dans la page** : voir [Objets définis par l'utilisateur](#udo). La liste **Objets qui le portent** donne les pages, orchestrations ou autres UDO qui le contiennent. |

Un contrôle auquel l'écran ne donne pas de texte affiche **en gris** le titre du dictionnaire de données : c'est ce que JD Edwards affiche. L'onglet **Règles d'événement** liste ce que font les règles d'un écran, d'une section ou d'une fonction : les fonctions métier appelées, les tables et vues lues et écrites avec les opérations, les écrans ouverts, les états lancés.

Chaque liste est une grille à part entière : recherche, filtres, regroupement, colonnes et export.

### Objets définis par l'utilisateur \{#udo\}

Un objet défini par l'utilisateur s'ouvre sur ce qu'il nomme, et chaque ligne mène plus loin : à l'application (sur son écran), à l'état, à la table, à la vue, à la donnée ou à l'autre UDO.

| Type d'UDO | Ce qu'il utilise |
|---|---|
| **Page composite** | Les applications et les états que ses tuiles ouvrent, les écrans affichés dans ses volets, la tâche d'une tuile de tâche, le menu d'une page d'accueil, les listes de surveillance, requêtes, écrans personnalisés et autres pages qu'elle porte — chacun avec sa place dans la page. |
| **Page E1** | Les applications et les états que son code appelle ou nomme — pour une page construite en HTML et JavaScript comme pour une page classique. |
| **Orchestration** | Ses étapes — demandes de service, règles, références croisées, listes blanches, autres orchestrations, notifications — et sa planification. |
| **Demande de service** | Les écrans qu'elle exécute (application, écran, version), les tables et vues que lisent ses demandes de données, les états qu'elle lance, l'orchestration qu'appelle un connecteur, l'écran vers lequel pointe un message. |
| **Notification** | Son orchestration, sa règle, sa liste de surveillance et sa planification, et les écrans qu'ouvrent ses liens. |
| **Disposition CafeOne**, **État One View** | Les écrans qu'elle affiche, les écrans qu'ouvrent ses liens. |
| **Recherche**, **Processus** | Ce qu'elle lit et les écrans qu'elle ouvre ; ce dont dépend un processus et la table qu'il lit. |
| **Extension d'écran** | Les colonnes qu'elle ajoute : la donnée et sa table. |
| **Liste de surveillance** | Sa requête. |
| **Requête**, **Format de grille**, **Écran personnalisé** | L'application, l'écran et la version sur lesquels il est posé. |

Une règle, une référence croisée, une liste blanche, une planification et une image ne nomment aucun objet, et la page l'indique ; une extension logique n'est pas lue. Tant que le contenu d'un type n'a pas été collecté, la page invite à lancer l'étape UDO du traitement des références croisées.

Dans l'autre sens, l'onglet **UDO** d'un écran liste les UDO posés dessus, les demandes de service qui l'exécutent, les pages et les liens qui l'affichent ou l'ouvrent ; une table, une vue et une donnée ont aussi un onglet **UDO** — les demandes de données et les recherches qui les lisent, les extensions d'écran qui les ajoutent.

---

## Où l'objet est utilisé \{#where-used\}

**Où utilisée**, sur une ligne d'une liste, ouvre la donnée, la vue ou la table sur ses usages.

<svg viewBox="0 0 1320 410" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="xrb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="xrb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="xrb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="xrb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="370" rx="14" fill="url(#xrb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Références croisées</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Ce que contient une application ou un état JD Edwards, et où une donnée, une vue ou une table est utilisée.</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="88" width="848" height="290" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="98" width="88" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="292.0" y="112.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour à AT1</text>
  <text x="248" y="140" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="296" y="140" fill="#cbd5e1" fontSize="10.5" fontFamily="system-ui, sans-serif">Address Book Master</text>
  <text x="416" y="140" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Tables · collecté le 21/11/2026</text>
  <rect x="947" y="126" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1009.5" y="140.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Actualiser depuis JDE</text>
  <rect x="248" y="154" width="644" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="249" y="155" width="94" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="296.0" y="167.0" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Applications (104)</text>
  <line x1="344" y1="158" x2="344" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="376.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">États (182)</text>
  <line x1="409" y1="158" x2="409" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="455.0" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues métier (253)</text>
  <line x1="501" y1="158" x2="501" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="562.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Règles d'événement (806)</text>
  <line x1="624" y1="158" x2="624" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="647.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO (2)</text>
  <line x1="671" y1="158" x2="671" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="708.0" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes (95)</text>
  <line x1="745" y1="158" x2="745" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="775.0" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Index (15)</text>
  <line x1="805" y1="158" x2="805" y2="170" stroke="#334155" strokeWidth="1"/>
  <text x="848.5" y="167.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Déclencheurs (1)</text>
  <rect x="248.0" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="258.0" y="203" fill="#4a9eff" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">104</text>
  <text x="258.0" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISÉE DANS APPLICATION(S)</text>
  <rect x="414.4" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="424.4" y="203" fill="#4ade80" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">156</text>
  <text x="424.4" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉCRAN(S)</text>
  <rect x="580.8" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="590.8" y="203" fill="#c084fc" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">197</text>
  <text x="590.8" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMME CHAMP</text>
  <rect x="747.2" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="757.2" y="203" fill="#c084fc" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">650</text>
  <text x="757.2" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMME COLONNE DE GRILLE</text>
  <rect x="913.6" y="184" width="158.4" height="38" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="923.6" y="203" fill="#fb923c" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">0</text>
  <text x="923.6" y="214" fill="#64748b" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMME LIBELLÉ</text>
  <rect x="250" y="229" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="267" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Seulement les objets du client (55 à 59)</text>
  <rect x="477.4" y="229" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="494.4" y="238" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Seulement les applications de l'analyse de montée de version</text>
  <rect x="248" y="248" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="258" y="262.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="1008" y="248" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1040.0" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="948" y="248" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="975.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="892" y="248" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="917.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="836" y="248" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="861.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="794" y="248" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="812.5" y="262.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="248" y="278" width="824" height="94" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="278" width="824" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">APPLICATION</text>
  <text x="368" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TITRE</text>
  <text x="774" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ENDROIT(S)</text>
  <text x="864" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ÉCRAN(S)</text>
  <text x="944" y="293.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">CHAMP</text>
  <text x="258" y="316.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="368" y="316.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="774" y="316.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">80</text>
  <text x="864" y="316.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="944" y="316.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">41</text>
  <line x1="249" y1="324" x2="1071" y2="324" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="338.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0101SL</text>
  <text x="368" y="338.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book Long Search</text>
  <text x="774" y="338.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">27</text>
  <text x="864" y="338.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="944" y="338.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <line x1="249" y1="346" x2="1071" y2="346" stroke="#1f2937" strokeWidth="1"/>
  <text x="258" y="360.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P03B305</text>
  <text x="368" y="360.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Credit Granting / Management</text>
  <text x="774" y="360.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">23</text>
  <text x="864" y="360.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="944" y="360.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">8</text>
  <line x1="249" y1="368" x2="1071" y2="368" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Retour</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">là où on était, même onglet</text>
  <line x1="200" y1="113.0" x2="248" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Côtés de la réponse</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">applications, états, vues…</text>
  <line x1="200" y1="197.0" x2="248" y2="164" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Restreindre la liste</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objets du client · analyse</text>
  <line x1="200" y1="307.0" x2="250" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglets propres à la table</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes, index, déclencheurs</text>
  <line x1="1120" y1="137.0" x2="796" y2="174" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les totaux</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">endroits, écrans, champ / colonne</text>
  <line x1="1120" y1="217.0" x2="1004" y2="210" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste classée</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre l'application</text>
  <line x1="1120" y1="317.0" x2="1024" y2="306" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#xrb-arrow)"/>
</svg>

| Partie | Contenu |
|---|---|
| **Onglets** | Un par nature d'utilisateur : **Applications**, **États**, **Vues métier**, **Tables**, **Structures de données**, **Règles d'événement**, **UDO** (les demandes de données, recherches et extensions d'écran qui lisent ou ajoutent l'objet) — et, pour une table, ses propres **Colonnes**, **Index** et **Déclencheurs**. |
| **Totaux** | Le nombre d'applications, d'écrans et d'endroits qui utilisent l'objet, et à quel titre : champ, colonne de grille, libellé. |
| **Seulement les objets du client (55 à 59)** | Ne garde que les objets des codes système du client. |
| **Seulement les applications de l'analyse de montée de version** | Ne garde que les objets de l'[analyse de montée de version](./upgrade/analysis.md) : la vue d'impact d'une montée de version. |
| **La liste** | Les applications ou les états classés par nombre d'endroits ; un clic en ouvre un. |

**Retour à …**, en haut, revient au point de départ — même objet, même écran ou section, même onglet.

---

## Qui l'utilise \{#usage\}

Une application et un état indiquent dans leur en-tête **Dernière utilisation … · n utilisateur(s)**, ou **Pas utilisé depuis le …** — le premier jour connu de l'historique. Un clic ouvre **Qui l'utilise** : chaque utilisateur et chaque version avec leur dernière utilisation. Les chiffres viennent du suivi d'utilisation des objets de JD Edwards, tel que collecté au fil du temps : ils remontent plus loin que la table de JD Edwards, qui est purgée. Rien n'apparaît tant qu'aucune utilisation n'a été collectée pour ce JD Edwards.

---

## Actions \{#actions\}

| Bouton | Effet |
|---|---|
| **Créer ses points d'accès…** | Sur une application : ouvre [Créer à partir de…](./ais/create-from.md) du connecteur AIS sur cette application, pour construire les points d'accès et l'écran qui lisent et enregistrent ses fiches. |
| **Actualiser depuis JDE** | Relit l'objet dans les spécifications de JD Edwards — une tâche de quelques secondes, suivie dans une fenêtre de la page ; la page affiche ensuite le nouveau contenu sans quitter l'objet. |

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu ; les fonctions qu'elle lit demandent les permissions `plugin:nomajde.xref:*`. **Actualiser depuis JDE** demande le droit de lancer la tâche qui relit un objet.

---

## Conseils & bonnes pratiques \{#tips\}

- Avant de modifier une table ou une vue métier, l'ouvrir et lire les onglets **Applications** et **États** avec **Seulement les objets du client** coché : c'est la liste de ce qu'il faudra tester.
- Pendant une montée de version, cocher **Seulement les applications de l'analyse de montée de version** pour voir ce qu'une modification d'Oracle atteint dans le code du client.
- Consulter **Qui l'utilise** avant de reprendre un état modifié : personne ne l'a peut-être lancé depuis des années.
- L'onglet **UDO** d'un écran liste ce que les utilisateurs ont construit dessus — requêtes, formats de grille, écrans personnalisés, extensions d'écran, pages et demandes de service qui l'ouvrent : autant d'éléments à revérifier quand l'écran change avec une version.
- L'assistant connaît l'objet ouvert sur la page : lui demander *Où cet objet est-il utilisé ?* ou *Que toucherait une modification de la table F0101 ?* — voir [Assistant IA](./ai-assistant.md).
- Pour passer en revue les objets définis par l'utilisateur un à un, choisir la pastille **UDO** : chaque ligne indique le type, et un mot du nom réduit la liste.

---

## Voir aussi

- [Préparer la montée de version](./upgrade/analysis.md) — ce qu'il faut reprendre, dans quel ordre, avec les UDO à retester.
- [Créer à partir de…](./ais/create-from.md) — un point d'accès ou un écran à partir d'une application JD Edwards.
- [Performance](./monitoring/performance.md) — les fonctions métier les plus coûteuses, avec qui les appelle.
