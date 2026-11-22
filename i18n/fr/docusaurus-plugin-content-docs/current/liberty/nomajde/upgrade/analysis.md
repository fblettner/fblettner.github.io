---
title: Analyse de montée de version
description: "La page Montée de version de Nomajde : charger la liste d'objets publiée par Oracle pour une version ou une mise à jour de JD Edwards EnterpriseOne, lancer l'analyse d'un path code et suivre sur une seule page ce qu'il faut reprendre, avec quelle complexité, en combien de jours, dans quel ordre, par qui et où en est le travail — avec les dépendances, les objets définis par l'utilisateur à retester, les objets restés dans d'autres path codes et la liste d'Oracle."
keywords: [Nomajde, JD Edwards, JDE E1, montée de version, upgrade, retrofit, reprise, liste d'objets, UN9, path code, Object Librarian, objets spécifiques, complexité, jours, vagues, dépendances, références croisées, UDO, objets définis par l'utilisateur]
---

# Analyse de montée de version

**Montée de version**, juste sous **Références croisées** dans le menu de Nomajde, répond à la première question d'une montée de version ou d'une mise à jour de JD Edwards EnterpriseOne : **que faut-il reprendre, et en combien de jours ?** Nomajde lit les objets du client dans un path code, les compare à la liste des objets modifiés par Oracle dans la version cible, et attribue à chaque objet une nature, une décision de reprise, une complexité et un nombre de jours. Tout se trouve ensuite sur une seule page : le travail et l'avancement en chiffres, la répartition du travail (type, complexité, statut, personne), l'ordre dans lequel le mener, et cinq onglets — **Vue d'ensemble**, **Objets**, **Objets définis par l'utilisateur**, **Autres path codes**, **Liste d'Oracle**. JD Edwards est seulement lu ; l'analyse et la planification sont conservées dans la base de Nomajde.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 460" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upa-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upa-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upa-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="424" rx="14" fill="url(#upa-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Montée de version</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PD920 par rapport à UN9 · analysé le 2026-11-22 — Ce qu'il y a à reprendre…</text>
  <rect x="1027" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1053.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="912" y="34" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="965.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Lancer l'analyse</text>
  <rect x="749" y="34" width="155" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="826.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Charger la liste d'Oracle</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#4a9eff" strokeWidth="1"/>
  <text x="248.0" y="107" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">86</text>
  <text x="248.0" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">À REPRENDRE</text>
  <text x="248.0" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">sur 1 240 objets à vous</text>
  <rect x="360.9" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="368.8571428571429" y="107" fill="#4a9eff" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">142</text>
  <text x="368.8571428571429" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">JOURS RESTANTS</text>
  <text x="368.8571428571429" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">sur 160</text>
  <rect x="481.7" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="489.7142857142857" y="107" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <text x="489.7142857142857" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">% FAIT</text>
  <text x="489.7142857142857" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">9 objet(s) terminé(s)</text>
  <rect x="602.6" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="610.5714285714286" y="107" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">38</text>
  <text x="610.5714285714286" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">PRÊTS À DÉMARRER</text>
  <text x="610.5714285714286" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">plus rien à attendre</text>
  <rect x="723.4" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="731.4285714285714" y="107" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="731.4285714285714" y="121" fill="#94a3b8" fontSize="5.74" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">SANS UTILISATION ENREGISTRÉE</text>
  <text x="731.4285714285714" y="133" fill="#64748b" fontSize="5.63" fontFamily="system-ui, sans-serif">30 jour(s) à questionner d'abord</text>
  <rect x="844.3" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="852.2857142857143" y="107" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="852.2857142857143" y="121" fill="#94a3b8" fontSize="6.1" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">UDO À VOUS À TESTER</text>
  <text x="852.2857142857143" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">sur 4 objet(s) touché(s)</text>
  <rect x="965.1" y="88" width="114.9" height="52" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="973.1428571428571" y="107" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">23</text>
  <text x="973.1428571428571" y="121" fill="#94a3b8" fontSize="4.73" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DANS D'AUTRES PATH CODES SEULEMENT</text>
  <text x="973.1428571428571" y="133" fill="#64748b" fontSize="5.9" fontFamily="system-ui, sans-serif">à promouvoir ou à supprimer</text>
  <rect x="240" y="152" width="541" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="153" width="80" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.0" y="165.0" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <line x1="322" y1="156" x2="322" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="361.0" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Objets  1 240</text>
  <line x1="400" y1="156" x2="400" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="492.5" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Objets définis par l'utilisateur  214</text>
  <line x1="585" y1="156" x2="585" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="642.0" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Autres path codes  23</text>
  <line x1="699" y1="156" x2="699" y2="168" stroke="#334155" strokeWidth="1"/>
  <text x="740.0" y="165.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste d'Oracle</text>
  <rect x="240" y="182" width="840" height="42" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="196" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AVANCEMENT</text>
  <rect x="252" y="202" width="816" height="6" rx="3" fill="#c084fc"/>
  <rect x="252" y="202" width="750.7" height="6" rx="3" fill="#4a9eff"/>
  <rect x="252" y="202" width="49.0" height="6" rx="3" fill="#4ade80"/>
  <rect x="252" y="211" width="9" height="9" rx="2" fill="#4ade80"/>
  <text x="265" y="219" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">10 j fait (9)</text>
  <rect x="338.88" y="211" width="9" height="9" rx="2" fill="#4a9eff"/>
  <text x="351.88" y="219" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">142 j restant (77)</text>
  <rect x="449.56" y="211" width="9" height="9" rx="2" fill="#c084fc"/>
  <text x="462.56" y="219" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">8 j abandonné (3)</text>
  <text x="242" y="240" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OÙ EST LE TRAVAIL</text>
  <rect x="240" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PAR TYPE D'OBJET</text>
  <text x="250" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="318" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <rect x="318" y="279" width="4.0" height="6" rx="3" fill="#4ade80"/>
  <text x="434.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">18 · 54 j</text>
  <text x="250" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="318" y="297" width="33.3" height="6" rx="3" fill="#4a9eff"/>
  <rect x="318" y="297" width="2.3" height="6" rx="3" fill="#4ade80"/>
  <text x="434.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">15 · 45 j</text>
  <text x="250" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">BSFN</text>
  <rect x="318" y="315" width="15.6" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">21 · 21 j</text>
  <rect x="452.0" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PAR COMPLEXITÉ</text>
  <text x="462.0" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Hard</text>
  <rect x="530.0" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <rect x="530.0" y="279" width="2.4" height="6" rx="3" fill="#4ade80"/>
  <text x="646.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">33 · 99 j</text>
  <text x="462.0" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Medium</text>
  <rect x="530.0" y="297" width="8.5" height="6" rx="3" fill="#4a9eff"/>
  <text x="646.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">21 · 21 j</text>
  <text x="462.0" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Easy</text>
  <rect x="530.0" y="315" width="6.5" height="6" rx="3" fill="#4a9eff"/>
  <rect x="530.0" y="315" width="0.6" height="6" rx="3" fill="#4ade80"/>
  <text x="646.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">32 · 16 j</text>
  <rect x="664.0" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PAR STATUT</text>
  <text x="674.0" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">À faire</text>
  <rect x="742.0" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <text x="858.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">70 · 118 j</text>
  <text x="674.0" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">En cours</text>
  <rect x="742.0" y="297" width="4.7" height="6" rx="3" fill="#4a9eff"/>
  <text x="858.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">7 · 14 j</text>
  <text x="674.0" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Terminé</text>
  <rect x="742.0" y="315" width="3.4" height="6" rx="3" fill="#4a9eff"/>
  <rect x="742.0" y="315" width="3.4" height="6" rx="3" fill="#4ade80"/>
  <text x="858.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 · 10 j</text>
  <rect x="876.0" y="248" width="204.0" height="84" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="264" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PAR PERSONNE</text>
  <text x="886.0" y="284" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Non affecté</text>
  <rect x="954.0" y="279" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <text x="1070.0" y="284" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">52 · 88 j</text>
  <text x="886.0" y="302" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">jdoe</text>
  <rect x="954.0" y="297" width="15.5" height="6" rx="3" fill="#4a9eff"/>
  <rect x="954.0" y="297" width="3.1" height="6" rx="3" fill="#4ade80"/>
  <text x="1070.0" y="302" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 · 34 j</text>
  <text x="886.0" y="320" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">asmith</text>
  <rect x="954.0" y="315" width="9.1" height="6" rx="3" fill="#4a9eff"/>
  <rect x="954.0" y="315" width="1.4" height="6" rx="3" fill="#4ade80"/>
  <text x="1070.0" y="320" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">14 · 20 j</text>
  <rect x="240" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DANS QUEL ORDRE</text>
  <text x="250" y="378" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Vague 1</text>
  <rect x="318" y="373" width="40.0" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="378" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">38 · 62 j</text>
  <text x="250" y="396" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Vague 2</text>
  <rect x="318" y="391" width="33.5" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="396" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">30 · 52 j</text>
  <text x="250" y="414" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Vague 3</text>
  <rect x="318" y="409" width="18.1" height="6" rx="3" fill="#4a9eff"/>
  <text x="434.0" y="414" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">18 · 28 j</text>
  <rect x="452.0" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMMENCER PAR</text>
  <text x="462.0" y="378" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">D4200310</text>
  <text x="509.68" y="378" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Sales Order DS</text>
  <text x="646.0" y="378" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">7 l'attendent · 0,5 j</text>
  <text x="462.0" y="395" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">B5500101</text>
  <text x="509.68" y="395" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Credit Check</text>
  <text x="646.0" y="395" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">3 l'attendent · 1 j</text>
  <text x="462.0" y="412" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">F550101</text>
  <text x="504.72" y="412" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Customer Ext.</text>
  <text x="646.0" y="412" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">2 l'attendent · 0,5 j</text>
  <rect x="664.0" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SANS UTILISATION</text>
  <text x="674.0" y="378" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">R5503B</text>
  <text x="711.76" y="378" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Statement Print</text>
  <text x="858.0" y="378" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">UBE · 3 j</text>
  <text x="674.0" y="395" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">P550401</text>
  <text x="716.72" y="395" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Supplier Rating</text>
  <text x="858.0" y="395" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">APPL · 3 j</text>
  <text x="674.0" y="412" fill="#e2e8f0" fontSize="8" fontFamily="ui-monospace, monospace">R554201</text>
  <text x="716.72" y="412" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Sales Extract</text>
  <text x="858.0" y="412" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">UBE · 3 j</text>
  <rect x="876.0" y="342" width="204.0" height="88" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="358" fill="#94a3b8" fontSize="7.2" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJETS DÉF. PAR L'UTILISATEUR</text>
  <text x="886.0" y="378" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Requête</text>
  <text x="1070.0" y="378" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">4 à vous</text>
  <text x="886.0" y="395" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Format de grille</text>
  <text x="1070.0" y="395" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">3 à vous</text>
  <text x="886.0" y="412" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">livrés par Oracle</text>
  <text x="1070.0" y="412" fill="#64748b" fontSize="7.2" textAnchor="end" fontFamily="system-ui, sans-serif">205</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les chiffres</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre la liste filtrée</text>
  <line x1="200" y1="113.0" x2="240" y2="114" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une analyse, cinq vues</text>
  <line x1="200" y1="167.0" x2="240" y2="162" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="20" y="272" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="287" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où est le travail</text>
  <text x="30" y="300" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une barre filtre l'onglet Objets</text>
  <line x1="200" y1="289.0" x2="240" y2="290" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vagues</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la vague 1 n'attend rien</text>
  <line x1="200" y1="397.0" x2="250" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les deux tâches</text>
  <text x="1130" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune s'ouvre pré-remplie</text>
  <line x1="1120" y1="47.0" x2="965.5" y2="34" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vos UDO</text>
  <text x="1130" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à retester après la montée</text>
  <line x1="1120" y1="127.0" x2="935.1428571428571" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Commencer par</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">prêts, les plus attendus d'abord</text>
  <line x1="1120" y1="317.0" x2="554.0" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
  <rect x="1120" y="390" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sans utilisation</text>
  <text x="1130" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à questionner avant de reprendre</text>
  <line x1="1120" y1="407.0" x2="858.0" y2="394" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upa-arrow)"/>
</svg>

---

## La page \{#page\}

L'en-tête indique le path code, la liste comparée et la date de l'analyse. Quand plusieurs path codes ont été analysés, une liste à côté des boutons permet de passer de l'un à l'autre.

| Bouton | Rôle |
|---|---|
| **Charger la liste d'Oracle** | Ouvre la [tâche de chargement de la liste d'objets d'Oracle](#load). |
| **Lancer l'analyse** | Ouvre la [tâche d'analyse](#build), avec le path code et la liste déjà renseignés. |
| **Relire** | Relit la page — après une exécution, ou quand un collègue a modifié la planification. |

Chaque bouton n'apparaît qu'aux utilisateurs autorisés à lancer sa tâche. Avant la première analyse, la page l'indique et renvoie aux deux étapes.

### Les chiffres \{#figures\}

Sept chiffres surmontent les onglets ; un clic sur l'un d'eux ouvre la liste qu'il compte.

| Chiffre | Compte |
|---|---|
| **à reprendre** | Les objets que la liste d'Oracle oblige à reprendre, sur l'ensemble des objets du client dans le path code. |
| **jours restants** | Les jours des objets encore à faire, sur le total des jours du chantier. |
| **% fait** | La part des jours terminés, et le nombre d'objets terminés. |
| **prêts à démarrer** | Les objets pas encore terminés dont toutes les dépendances sont terminées ou abandonnées : plus rien à attendre. |
| **sans utilisation enregistrée** | Les applications et les états à reprendre que le suivi d'utilisation des objets et les travaux soumis montrent inutilisés, avec les jours correspondants. Un tiret quand aucune utilisation n'est connue pour l'analyse. |
| **UDO à vous à tester** | Les objets définis par l'utilisateur du client posés sur un objet touché par la montée de version, ou qui l'affichent, l'ouvrent, l'exécutent ou le lisent. |
| **dans d'autres path codes seulement** | Les objets du client présents dans un autre path code mais pas dans celui-ci. |

Un statut **Terminé** compte comme fait ; **Abandonné** sort l'objet du chantier — ses jours apparaissent à part sur la barre d'avancement.

---

## L'onglet Vue d'ensemble \{#overview\}

| Partie | Contenu |
|---|---|
| **Avancement** | Les jours faits, restants et abandonnés sur une seule barre, avec le nombre d'objets de chacun. |
| **Où est le travail** | Les objets et les jours **Par type d'objet**, **Par complexité**, **Par statut**, **Par personne**. Chaque barre montre en vert la part terminée ; un clic sur une barre ouvre l'onglet **Objets** filtré sur elle. |
| **Dans quel ordre** | Les vagues. Un objet attend les objets qu'il utilise et qui sont à reprendre aussi ; la vague 1 n'attend rien, la vague 2 n'attend que la vague 1, et ainsi de suite. Des objets qui s'attendent mutuellement rejoignent la même vague. Un clic sur une vague filtre les objets. |
| **Commencer par** | Les objets prêts maintenant, ceux que le plus d'objets attendent en premier. |
| **Sans utilisation enregistrée** | Les applications et les états à reprendre sans utilisation enregistrée, les plus lourds d'abord : à questionner avant de les reprendre. |
| **Objets définis par l'utilisateur** | Les UDO du client à retester, par type, et le nombre de ceux livrés par Oracle ; une ligne ouvre l'onglet [Objets définis par l'utilisateur](#udos). |

Une ligne de **Commencer par** ou de **Sans utilisation enregistrée** ouvre la [fenêtre de l'objet](#object).

Les vagues demandent les liens entre les objets du client. Quand aucun n'est connu, **Dans quel ordre** l'indique : collecter les références croisées dans Nomasx-1, puis relancer l'analyse.

---

## Objets \{#objects\}

<svg viewBox="0 0 1320 428" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upb-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upb-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upb-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upb-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="384" rx="14" fill="url(#upb-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Montée de version</text>
  <rect x="240" y="60" width="541" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="281.0" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <rect x="323" y="61" width="76" height="18" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="361.0" y="73.0" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Objets  1 240</text>
  <line x1="400" y1="64" x2="400" y2="76" stroke="#334155" strokeWidth="1"/>
  <text x="492.5" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Objets définis par l'utilisateur  214</text>
  <line x1="585" y1="64" x2="585" y2="76" stroke="#334155" strokeWidth="1"/>
  <text x="642.0" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Autres path codes  23</text>
  <line x1="699" y1="64" x2="699" y2="76" stroke="#334155" strokeWidth="1"/>
  <text x="740.0" y="73.0" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Liste d'Oracle</text>
  <text x="242" y="112" fill="#94a3b8" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJETS (86)</text>
  <rect x="320" y="100" width="67" height="17" rx="8.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="353.5" y="111.7" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">À reprendre</text>
  <rect x="393" y="100" width="40" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="413.0" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Prêts</text>
  <rect x="439" y="100" width="89" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="483.5" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Sans utilisation</text>
  <rect x="534" y="100" width="71" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="569.5" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Non affectés</text>
  <rect x="611" y="100" width="35" height="17" rx="8.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="628.5" y="111.7" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Tous</text>
  <rect x="240" y="126" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="140.5" fill="#475569" fontSize="8" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="1016" y="126" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1048.0" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="956" y="126" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="900" y="126" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="844" y="126" width="51" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="802" y="126" width="37" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="820.5" y="140.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="158" width="840" height="230" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="158" width="840" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="264" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">OBJET</text>
  <text x="358" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="548" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">TYPE</text>
  <text x="600" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">NATURE</text>
  <text x="670" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">COMPLEXITÉ</text>
  <text x="780" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">JOURS</text>
  <text x="830" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">VAGUE</text>
  <text x="844" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="934" y="173" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">AFFECTÉ À</text>
  <text x="250" y="197" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="197" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="358" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Address Book</text>
  <text x="548" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APPL</text>
  <text x="600" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modifié</text>
  <text x="670" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="197" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="197" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <rect x="844" y="186" width="47" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="867.5" y="196.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">À faire</text>
  <text x="934" y="197" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jdoe</text>
  <line x1="241" y1="204" x2="1079" y2="204" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="264" y="219" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="358" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales Order Entry Master</text>
  <text x="548" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BSFN</text>
  <text x="600" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modifié</text>
  <text x="670" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Medium</text>
  <text x="780" y="219" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="830" y="219" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <rect x="844" y="208" width="51" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="869.5" y="218.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="934" y="219" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">asmith</text>
  <line x1="241" y1="226" x2="1079" y2="226" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="226" width="838" height="92" fill="rgba(255,255,255,0.02)"/>
  <text x="280.0" y="240" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ATTEND (1)</text>
  <text x="280.0" y="253" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">D4200310</text>
  <text x="350.0" y="253" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">DSTR · Sales Order Master BSFN DS</text>
  <rect x="530.0" y="244" width="44" height="12" rx="6.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="552.0" y="253.2" fill="#fb923c" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">À faire</text>
  <text x="700.0" y="240" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">L'ATTENDENT (2)</text>
  <text x="700.0" y="253" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="770.0" y="253" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">APPL · Sales Order Entry</text>
  <rect x="950.0" y="244" width="48" height="12" rx="6.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="974.0" y="253.2" fill="#4a9eff" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="700.0" y="266" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="770.0" y="266" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">UBE · Invoice Print</text>
  <rect x="950.0" y="257" width="48" height="12" rx="6.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="974.0" y="266.2" fill="#fb923c" fontSize="6.8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">À tester</text>
  <text x="280.0" y="284" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISE (2)</text>
  <text x="280.0" y="297" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">D4200310</text>
  <text x="350.0" y="297" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">DSTR · Sales Order Master BSFN DS</text>
  <text x="280.0" y="310" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="350.0" y="310" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">TBLE · Sales Order Detail File</text>
  <text x="700.0" y="284" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISÉ PAR (2)</text>
  <text x="700.0" y="297" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="770.0" y="297" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">APPL · Sales Order Entry</text>
  <text x="700.0" y="310" fill="#4a9eff" fontSize="8" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="770.0" y="310" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">UBE · Invoice Print</text>
  <line x1="241" y1="318" x2="1079" y2="318" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="333" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="333" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="358" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Invoice Print</text>
  <text x="548" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">UBE</text>
  <text x="600" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modifié</text>
  <text x="670" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="333" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="333" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="844" y="322" width="51" height="14" rx="7.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="869.5" y="332.2" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">À tester</text>
  <text x="934" y="333" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jdoe</text>
  <line x1="241" y1="340" x2="1079" y2="340" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="355" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="355" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="358" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales Order Entry</text>
  <text x="548" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APPL</text>
  <text x="600" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Modifié</text>
  <text x="670" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="355" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="355" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <rect x="844" y="344" width="51" height="14" rx="7.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="869.5" y="354.2" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En cours</text>
  <text x="934" y="355" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">asmith</text>
  <line x1="241" y1="362" x2="1079" y2="362" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="377" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="264" y="377" fill="#e2e8f0" fontSize="8.5" fontFamily="ui-monospace, monospace">R554201</text>
  <text x="358" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales Extract</text>
  <text x="548" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">UBE</text>
  <text x="600" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Copié</text>
  <text x="670" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Hard</text>
  <text x="780" y="377" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="830" y="377" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <rect x="844" y="366" width="47" height="14" rx="7.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="867.5" y="376.2" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Terminé</text>
  <text x="934" y="377" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">asmith</text>
  <line x1="241" y1="384" x2="1079" y2="384" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quels objets</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à reprendre · prêts · sans usage…</text>
  <line x1="200" y1="147.0" x2="330" y2="117" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne s'ouvre sur ses liens</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">› montre ses dépendances</text>
  <line x1="200" y1="217.0" x2="252" y2="215" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque lien ouvre l'objet</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec son type et son statut</text>
  <line x1="200" y1="307.0" x2="282" y2="253" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Export</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">porte les quatre listes de liens</text>
  <line x1="1120" y1="137.0" x2="1048.0" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vague et statut</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'ordre et l'avancement</text>
  <line x1="1120" y1="227.0" x2="844" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
  <rect x="1120" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un clic sur une ligne</text>
  <text x="1130" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre la fenêtre de l'objet</text>
  <line x1="1120" y1="377.0" x2="1020" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upb-arrow)"/>
</svg>

L'onglet **Objets** est la liste de travail, dans la grille commune : recherche, filtres, regroupement, colonnes, vues enregistrées et export. Les pastilles au-dessus choisissent les objets affichés :

| Pastille | Garde |
|---|---|
| **À reprendre** | Les objets à reprendre (par défaut). |
| **Prêts** | Les objets prêts à démarrer. |
| **Sans utilisation** | Les applications et les états à reprendre, encore à faire, sans utilisation enregistrée. |
| **Non affectés** | Les objets à reprendre, encore à faire, affectés à personne. |
| **Tous** | Tous les objets du client dans le path code, à reprendre ou non. |

Un filtre posé depuis la vue d'ensemble apparaît comme une pastille à part, avec **✕** pour l'effacer.

| Colonnes | Contenu |
|---|---|
| **Objet**, **Description**, **Type**, **Nature** | L'objet tel que le connaît l'Object Librarian, et sa [nature](#rules). |
| **Complexité**, **Jours**, **Vague** | Le résultat de l'analyse et la vague de l'objet. |
| **Statut**, **Affecté à**, **Module**, **Fin** | La planification. |
| **Attend**, **Bloque**, **Utilise**, **Utilisé par** | Les noms des objets qu'il attend, de ceux qui l'attendent, de ceux qu'il utilise et de ceux qui l'utilisent. |
| **Modifié par Oracle**, **Dernière utilisation**, **UDO** | La date de l'objet — ou de son original — dans la liste d'Oracle, sa dernière utilisation connue, le nombre d'objets définis par l'utilisateur posés dessus. |

**›**, en début de ligne, déplie l'objet sur ses dépendances : **Attend**, **L'attendent**, **Utilise** et **Utilisé par**, chaque objet avec son type, sa description et, s'il est à reprendre, son statut. Un clic sur un nom ouvre cet objet. Les quatre listes sont aussi des colonnes de la grille : l'export les contient.

### La fenêtre de l'objet \{#object\}

Un clic sur une ligne ouvre l'objet dans une fenêtre, au-dessus de la liste.

<svg viewBox="0 0 1200 496" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="upc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="upc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="upc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="upc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="20" width="680" height="454" rx="12" fill="#111827" stroke="#334155" strokeWidth="1.2"/>
  <text x="280" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="322" y="46" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">— Sales Order Entry</text>
  <rect x="460" y="35" width="51" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="485.5" y="45.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En cours</text>
  <line x1="261" y1="60" x2="939" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="280" y="80" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="430" y="80" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL · Modifié · modifié par jdoe 2026-03-12</text>
  <text x="280" y="97" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">À REPRENDRE</text>
  <text x="430" y="97" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Hard · 3 j · Vague 3 · Oracle l'a modifié le 2026-06-30</text>
  <text x="280" y="114" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DERNIÈRE UTILISATION</text>
  <text x="430" y="114" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 · 57 utilisateur(s)</text>
  <text x="280" y="131" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ATTEND</text>
  <text x="430" y="131" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="280" y="148" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">L'ATTENDENT</text>
  <text x="430" y="148" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">rien</text>
  <text x="280" y="165" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISE</text>
  <text x="430" y="165" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">B4200310</text>
  <text x="482.15999999999997" y="165" fill="#4a9eff" fontSize="8.5" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="280" y="182" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISÉ PAR</text>
  <text x="430" y="182" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">rien</text>
  <text x="280" y="199" fill="#64748b" fontSize="7" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UDO POSÉS DESSUS</text>
  <text x="430" y="199" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Open orders (QUERY, JDOE) · Late lines (FORMAT, ASMITH)</text>
  <text x="280" y="224" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLANIFICATION</text>
  <text x="280.0" y="238" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <rect x="280.0" y="243" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="256.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">En cours ▾</text>
  <text x="606.0" y="238" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AFFECTÉ À</text>
  <rect x="606.0" y="243" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="256.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="280.0" y="274" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉBUT</text>
  <rect x="280.0" y="279" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="292.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-16</text>
  <text x="606.0" y="274" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">FIN</text>
  <rect x="606.0" y="279" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="292.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-27</text>
  <text x="280.0" y="310" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MODULE</text>
  <rect x="280.0" y="315" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="328.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">42</text>
  <text x="280.0" y="346" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPLEXITÉ (LA VÔTRE)</text>
  <rect x="280.0" y="351" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290.0" y="364.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">celle de l'analyse ▾</text>
  <text x="606.0" y="346" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">JOURS (LES VÔTRES)</text>
  <rect x="606.0" y="351" width="314.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="364.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="280" y="382" fill="#64748b" fontSize="6.8" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOTE</text>
  <rect x="280" y="387" width="640" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="290" y="400.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Règles de prix déplacées dans le nouvel écran</text>
  <text x="280" y="420" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Votre complexité et vos jours sont appliqués par la prochaine analyse.</text>
  <line x1="261" y1="432" x2="939" y2="432" stroke="#1f2937" strokeWidth="1"/>
  <rect x="843" y="440" width="77" height="22" rx="5" fill="url(#upc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="881.5" y="454.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="783" y="440" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="809.0" y="454.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Fermer</text>
  <rect x="980" y="30" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pastille de statut</text>
  <text x="990" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">À faire · En cours · À tester · Terminé…</text>
  <line x1="980" y1="47.0" x2="513" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="20" y="120" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ses liens</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre cet objet ici</text>
  <line x1="220" y1="137.0" x2="276" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="20" y="190" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">UDO posés dessus</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom, type, créateur</text>
  <line x1="220" y1="207.0" x2="276" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="980" y="230" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Planification</text>
  <text x="990" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">statut, personne, dates, module, note</text>
  <line x1="980" y1="247.0" x2="920" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="980" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Complexité et jours choisis</text>
  <text x="990" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">appliqués par la prochaine analyse</text>
  <line x1="980" y1="337.0" x2="920" y2="361" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
  <rect x="980" y="430" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="990" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="990" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">demande le droit de planifier</text>
  <line x1="980" y1="447.0" x2="920" y2="451" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#upc-arrow)"/>
</svg>

| Partie | Contenu |
|---|---|
| **Ce que c'est** | Le type, la nature, l'original d'une copie, l'auteur et la date de la dernière modification. |
| **À reprendre** / **Pas de reprise** | La complexité, les jours, la vague, la date de modification par Oracle. |
| **Dernière utilisation** | La dernière utilisation et le nombre d'utilisateurs — ou *aucune utilisation enregistrée*. |
| **Attend**, **L'attendent**, **Utilise**, **Utilisé par** | Des liens : un clic ouvre cet objet dans la même fenêtre. |
| **Objets définis par l'utilisateur posés dessus** | Les UDO de l'objet : nom, type et, s'il n'est pas livré par Oracle, l'utilisateur qui l'a créé. |
| **Planification** | **Statut** (À faire, En cours, À tester, Terminé, Abandonné), **Affecté à**, **Début**, **Fin**, **Module**, **Complexité (la vôtre)**, **Jours (les vôtres)**, **Note**. |

**Enregistrer** écrit la planification, puis la page est relue. La planification survit à chaque nouvelle analyse. Une complexité saisie dans **Complexité (la vôtre)** remplace la complexité calculée, et des jours saisis dans **Jours (les vôtres)** remplacent les jours calculés — les deux sont appliqués par la prochaine analyse. Sans le droit de modifier la planification, les champs restent grisés et une ligne l'indique.

---

## Objets définis par l'utilisateur \{#udos\}

L'onglet **Objets définis par l'utilisateur** liste les UDO — requêtes, formats de grille, listes de surveillance, écrans personnalisés, extensions d'écran, pages E1, pages composites, états One View, dispositions CafeOne, orchestrations, demandes de service, notifications… — posés sur un objet touché par la montée de version, ou qui l'affichent, l'ouvrent, l'exécutent ou le lisent : un objet du client présent dans l'analyse, ou un objet standard qu'Oracle modifie dans la version.

| Pastille | Garde |
|---|---|
| **Les vôtres** | Les UDO créés par le client (par défaut). |
| **Sur vos objets** | Les UDO posés sur un objet du client présent dans l'analyse, quel qu'en soit l'auteur. |
| **Tous** | Tous les UDO listés, y compris ceux livrés par Oracle. |

| Colonnes | Contenu |
|---|---|
| **Pourquoi** | **Modifié par Oracle**, ou **Votre objet** (spécifique, copié ou modifié). |
| **Objet**, **Type**, **Écran**, **Version** | L'endroit où l'UDO est posé. |
| **Comment** | Posé dessus, l'affiche, l'ouvre, l'exécute, le lit, l'écrit, le nomme dans son code. |
| **Type d'UDO**, **Nom**, **UDO** | L'UDO lui-même et son identifiant. |
| **Créé par**, **Propriétaire**, **Statut** | L'utilisateur inscrit dans l'identifiant de l'UDO — `JDE` pour un UDO livré par Oracle —, son propriétaire, son statut (**Partagé** pour un UDO partagé). |
| **Modifié par Oracle** | La date de l'objet dans la liste d'Oracle. |

Un clic sur une ligne ouvre l'objet sur lequel l'UDO est posé, quand cet objet fait partie de l'analyse. La liste est la grille commune : recherche, filtres et export pour transmettre la campagne de tests.

---

## Autres path codes \{#other-path-codes\}

L'onglet **Autres path codes** liste les objets du client trouvés dans un autre path code mais pas dans celui analysé : du travail qui n'y est jamais arrivé, à promouvoir ou à supprimer avant la montée de version. Colonnes : **Objet**, **Description**, **Type**, **Trouvé dans**, **Indicateur de fusion**, **Que faire**.

---

## Liste d'Oracle \{#oracle-list\}

L'onglet **Liste d'Oracle** présente les objets qu'Oracle modifie, tels que chargés depuis son fichier. Une pastille par liste chargée, avec son nombre d'objets ; la liste de l'analyse est sélectionnée d'emblée. Colonnes : **Objet**, **Version**, **Description**, **Code système**, **Modifié le**, **À vous** — la nature de l'objet quand il figure dans l'analyse du client — et **Tel qu'écrit dans le fichier**. Un clic sur un objet du client ouvre sa fenêtre.

---

## Les deux étapes \{#steps\}

### 1. Charger la liste d'objets d'Oracle \{#load\}

**Charger la liste d'Oracle** ouvre la tâche qui prend le fichier Excel publié par Oracle pour une version ou une mise à jour — colonnes *Object*, *Version*, *Description*, *System Code*, *Date* — et l'enregistre sous le nom saisi dans **Nom de la liste (UN9)**. Recharger une liste sous le même nom la remplace. Les listes chargées apparaissent dans l'onglet [Liste d'Oracle](#oracle-list).

Quand la plateforme est déjà sur une mise à jour, charger deux listes : la cible (`UN9`) et celle en place (`UN2`).

### 2. Lancer l'analyse \{#build\}

**Lancer l'analyse** ouvre la tâche qui lit JD Edwards et écrit le résultat, avec le path code et la liste de l'analyse déjà renseignés.

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Path code de départ de la montée de version** | `PD920` | Le path code dont les objets sont analysés. |
| **Liste d'objets à comparer (son nom ; vide = aucune)** | vide | La liste cible. Sans elle, aucun objet n'est signalé comme modifié par Oracle. |
| **Liste d'objets déjà en place chez le client** | vide | Facultatif. Avec elle, seul compte ce qu'Oracle a modifié **après** cette liste. |
| **Schéma des objets centraux, s'il diffère de celui du pool (PD920)** | vide | Le schéma des objets centraux quand il n'est pas celui de la connexion. |
| **JDE de nomasx1 à lire : utilisation conservée, références croisées, UDO (vide : le seul)** | vide | Le JD Edwards dont on lit l'historique d'utilisation, les références croisées et les objets définis par l'utilisateur, quand Nomasx-1 en collecte plusieurs. |

L'exécution collecte, pour le path code : les objets ajoutés ou modifiés par le client dans l'Object Librarian, l'original de chaque copie, ce qui est réellement utilisé (suivi d'utilisation des objets et historique des travaux soumis), et les références croisées entre les objets du client. Elle peut être relancée à tout moment : la planification saisie sur la page est conservée.

L'exécution lit aussi ce que Nomasx-1 collecte pour le même JD Edwards, s'il le collecte :

- **les liens entre les objets du client** — règles d'événement qui appellent une fonction métier, lisent ou écrivent une table ou une vue, ouvrent l'écran d'une autre application, lancent un état ; les tables d'une vue ; la structure de données d'une fonction ou d'un écran. Les références croisées de JD Edwards sont souvent absentes : sans ces liens, **Attend**, **Utilise**, **Utilisé par** et les vagues restent vides ;
- **l'utilisation conservée dans le temps** — la dernière utilisation connue du suivi de JD Edwards, des travaux soumis et de l'historique de Nomasx-1, qui remonte plus loin que la table purgée de JD Edwards ;
- **les objets définis par l'utilisateur** posés sur un objet touché par la montée de version, ou qui l'affichent, l'ouvrent, l'exécutent ou le lisent (voir [Objets définis par l'utilisateur](#udos)).

Ces éléments demandent que les références croisées et leur étape UDO aient d'abord été collectées dans Nomasx-1 ; relancer ensuite l'analyse pour les prendre en compte.

---

## Le classement d'un objet \{#rules\}

| Nature | Cas | Reprise |
|---|---|---|
| **Audit Trail** | Une table d'audit de la base. | Non — complexité `Configuration`, 0 jour. |
| **Custom** | Un objet créé par le client, sans original JD Edwards. | Non — `Retrofit not needed`. |
| **Copied** | Une copie d'un objet standard : son original est retrouvé grâce à l'identifiant d'application conservé par la copie. | Oui si Oracle a modifié **l'original** dans la liste. |
| **Modified** | Un objet standard modifié par le client. | Oui si Oracle l'a modifié dans la liste. |

Un objet qu'Oracle n'a pas modifié est `Not updated` : rien à reprendre. Pour les autres, la complexité et les jours dépendent du type d'objet :

| Type d'objet | Complexité | Jours |
|---|---|---|
| Applications, états | `Hard` | 3 |
| Fonctions métier | `Medium` | 1 |
| Tout le reste | `Easy` | 0,5 |

---

## Synthèses \{#summaries\}

Le modèle **Upgrade analysis** de l'[explorateur de données](../data-explorer.md) donne les totaux, avec quatre analyses enregistrées : *Retrofit by complexity and object type*, *Days of retrofit by complexity and object type*, *Days of retrofit by assignee and module*, *The customer's objects by kind*. La [page d'accueil](../home.md) de Nomajde affiche le nombre d'objets à reprendre, les jours par type d'objet et les objets par complexité.

---

## Accès \{#access\}

La page est visible des rôles qui détiennent son entrée de menu, avec les permissions `page:nomajde:upgrade` et `plugin:nomajde.upgrade_view:*`. Enregistrer la planification demande `sql:nomajde:jde_upg_object_put` ; les deux boutons demandent la permission `job:` de leur tâche. La connexion utilisée pour lire JD Edwards doit pouvoir lire les tables de l'Object Librarian et des objets centraux.

---

## Conseils & bonnes pratiques \{#tips\}

- Charger aussi la liste **déjà en place** : sans elle, tout objet qu'Oracle a touché un jour est compté, et l'estimation est trop haute.
- Planifier par vague : partir de **Prêts**, en commençant par les objets de **Commencer par** — ce sont ceux que le plus d'objets attendent.
- Regarder **Sans utilisation enregistrée** avant d'estimer : un état modifié que personne n'a lancé depuis trois ans appelle une décision, pas trois jours de charge. Passer l'objet en **Abandonné** une fois la décision prise.
- Les jours sont une première estimation par type d'objet ; les corriger dans **Jours (les vôtres)** pour les objets que l'équipe connaît.
- Avant les tests, exporter l'onglet **Objets définis par l'utilisateur** sur **Les vôtres** : chaque ligne est un écran à revérifier après la montée de version.
- Collecter les références croisées dans Nomasx-1 avant de lancer l'analyse : les vagues, **Attend** et les UDO en dépendent.
- Exporter l'onglet **Objets** pour partager le plan : les dépendances y figurent en colonnes.
- L'assistant IA connaît la procédure : lui demander de *préparer une montée de version* suffit pour qu'il lance les deux tâches et lise le résultat.

---

## Voir aussi

- [Tâches](../jobs.md) — lancer une tâche depuis le menu de Nomajde.
- [Tests de non-régression](../tests.md) — vérifier que JD Edwards se comporte toujours de la même façon une fois la montée de version faite.
- [Références croisées](../cross-reference.md) — où un objet est utilisé, avec **Seulement les applications de l'analyse de montée de version**.
