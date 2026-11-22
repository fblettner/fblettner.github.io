---
title: Séparation des tâches
description: "Le tableau de bord de suivi de la séparation des tâches de Nomasx-1 : utilisateurs en conflit, lignes de conflit, conflits avérés par l'activité et rôles impliqués, les conflits par rafraîchissement et par niveau de risque, les risques touchés, les paires de rôles en cause, les utilisateurs les plus en conflit, le détail par processus, et les liens vers les écrans de conflits et l'explorateur."
keywords: [Nomasx-1, séparation des tâches, SoD, tableau de bord, conflits, conflits avérés, risques, paires de rôles, tendance, niveau de risque, suivi]
---

# Séparation des tâches

**Séparation des tâches**, juste sous **Vue d'ensemble** dans le menu de Nomasx-1, suit les conflits que la [matrice SoD](./settings/sod/matrix.md) détecte dans les accès de chaque application connectée : combien, quels risques, quels rôles les provoquent, quels conflits ont réellement été exercés, et leur évolution d'un rafraîchissement à l'autre.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 770" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxsod-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxsod-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxsod-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxsod-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="730" rx="14" fill="url(#nxsod-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Suivi de la séparation des tâches</text>
  <text x="276" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les utilisateurs en conflit, les risques et paires de rôles en cause, les conflits avérés par l'activité, et la tendance par rafraîchissement.</text>
  <line x1="220" y1="78" x2="1100" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="90" width="840" height="56" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="254" y="113" width="196" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▣  23 nov. 2025 – 22 nov. 2026  ▾</text>
  <text x="466" y="107" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="466" y="113" width="200" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="476" y="128.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Tous</text>
  <text x="656" y="128.5" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">▾</text>
  <text x="1066" y="129" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Mis à jour à 09:15</text>
  <rect x="944.3199999999999" y="115" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="957.3199999999999" y="129.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↻</text>
  <rect x="892.3199999999999" y="115" width="46" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="915.3199999999999" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ PDF</text>
  <rect x="834.3199999999999" y="115" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="860.3199999999999" y="129.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⎙ Excel</text>
  <rect x="240.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Utilisateurs en conflit</text>
  <text x="252.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Au dernier rafraîchissement</text>
  <text x="252.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="252.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">3 à privilèges · rafraîchi le 2026-11-21</text>
  <rect x="452.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="464.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Lignes de conflit</text>
  <text x="464.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateur × risque × paire d'activités</text>
  <text x="464.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">1 204</text>
  <text x="464.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">18 risques touchés dans 4 processus</text>
  <rect x="665.0" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="677.0" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Avérés par l'activité</text>
  <text x="677.0" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Les deux activités réellement utilisées</text>
  <text x="677.0" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">9 utilisateurs</text>
  <text x="677.0" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">41 lignes de conflit avérées</text>
  <rect x="877.5" y="158" width="202.5" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="889.5" y="175" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Rôles impliqués</text>
  <text x="889.5" y="188" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Rôles portant un côté d'un conflit</text>
  <text x="889.5" y="218" fill="#e2e8f0" fontSize="21" fontWeight="700" fontFamily="system-ui, sans-serif">26</text>
  <text x="889.5" y="236" fill="#cbd5e1" fontSize="8.3" fontFamily="system-ui, sans-serif">31 paires de rôles</text>
  <rect x="240" y="260" width="520" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflits par rafraîchissement</text>
  <text x="254" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Lignes de conflit par niveau de risque sur la période</text>
  <text x="276" y="311.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">1K</text>
  <line x1="282" y1="308.0" x2="734" y2="308.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="334.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">750</text>
  <line x1="282" y1="331.0" x2="734" y2="331.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="357.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">500</text>
  <line x1="282" y1="354.0" x2="734" y2="354.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="380.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">250</text>
  <line x1="282" y1="377.0" x2="734" y2="377.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="276" y="403.0" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">0</text>
  <line x1="282" y1="400.0" x2="734" y2="400.0" stroke="#1f2937" strokeWidth="1" strokeDasharray="3 3"/>
  <rect x="306.9" y="386.2" width="63.3" height="13.8" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="306.9" y="347.6" width="63.3" height="38.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="306.9" y="326.4" width="63.3" height="21.2" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="338.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-05-27</text>
  <rect x="419.9" y="387.1" width="63.3" height="12.9" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="419.9" y="352.2" width="63.3" height="35.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="419.9" y="331.9" width="63.3" height="20.2" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="451.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-08-28</text>
  <rect x="532.9" y="389.9" width="63.3" height="10.1" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="532.9" y="359.5" width="63.3" height="30.4" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="532.9" y="341.1" width="63.3" height="18.4" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="564.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-10-28</text>
  <rect x="645.9" y="391.7" width="63.3" height="8.3" fill="#e5484d" fillOpacity="0.85"/>
  <rect x="645.9" y="364.1" width="63.3" height="27.6" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="645.9" y="347.6" width="63.3" height="16.6" fill="#2b8cff" fillOpacity="0.85"/>
  <text x="677.5" y="412" fill="#94a3b8" fontSize="7.8" textAnchor="middle" fontFamily="system-ui, sans-serif">2026-11-21</text>
  <rect x="440" y="418" width="9" height="9" rx="2" fill="#e5484d"/>
  <text x="453" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">C</text>
  <rect x="469.76" y="418" width="9" height="9" rx="2" fill="#fb923c"/>
  <text x="482.76" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">H</text>
  <rect x="499.52" y="418" width="9" height="9" rx="2" fill="#2b8cff"/>
  <text x="512.52" y="426" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">M</text>
  <rect x="770" y="260" width="310" height="176" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="784" y="280" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Risques touchés</text>
  <text x="784" y="293" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Le plus d'utilisateurs d'abord ; la pastille est le niveau</text>
  <circle cx="788" cy="316" r="3.2" fill="#f87171"/>
  <text x="800" y="319" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Create a supplier and pay it</text>
  <text x="800" y="330" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="1066" y="319" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">14 utilisateurs</text>
  <text x="1066" y="330" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">212 lignes</text>
  <line x1="784" y1="335" x2="1066" y2="335" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="346" r="3.2" fill="#f87171"/>
  <text x="800" y="349" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Post and approve journal entries</text>
  <text x="800" y="360" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="1066" y="349" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">9 utilisateurs</text>
  <text x="1066" y="360" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">128 lignes</text>
  <line x1="784" y1="365" x2="1066" y2="365" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="376" r="3.2" fill="#fb923c"/>
  <text x="800" y="379" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Change prices and invoice</text>
  <text x="800" y="390" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="1066" y="379" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">6 utilisateurs</text>
  <text x="1066" y="390" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">74 lignes</text>
  <line x1="784" y1="395" x2="1066" y2="395" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="788" cy="406" r="3.2" fill="#4a9eff"/>
  <text x="800" y="409" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">Receive and adjust stock</text>
  <text x="800" y="420" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Inventory</text>
  <text x="1066" y="409" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">3 utilisateurs</text>
  <text x="1066" y="420" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">20 lignes</text>
  <rect x="240" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Paires de rôles</text>
  <text x="254" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Les rôles qui créent le plus de conflits</text>
  <circle cx="258" cy="504" r="3.2" fill="#f87171"/>
  <text x="270" y="507" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">SYSADMIN</text>
  <text x="270" y="518" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Conflit à l'intérieur d'un rôle</text>
  <text x="499.33333333333326" y="507" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">212 lignes</text>
  <text x="499.33333333333326" y="518" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">14 utilisateurs</text>
  <line x1="254" y1="521" x2="499.33333333333326" y2="521" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="532" r="3.2" fill="#fb923c"/>
  <text x="270" y="535" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">AP_CLERK + AP_MGR</text>
  <text x="270" y="546" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Deux rôles détenus ensemble</text>
  <text x="499.33333333333326" y="535" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">96 lignes</text>
  <text x="499.33333333333326" y="546" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">6 utilisateurs</text>
  <line x1="254" y1="549" x2="499.33333333333326" y2="549" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="258" cy="560" r="3.2" fill="#fb923c"/>
  <text x="270" y="563" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">AR_MGR + GL_ACCT</text>
  <text x="270" y="574" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Deux rôles détenus ensemble</text>
  <text x="499.33333333333326" y="563" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">40 lignes</text>
  <text x="499.33333333333326" y="574" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">3 utilisateurs</text>
  <rect x="523.3333333333333" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="537.3333333333333" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs les plus en conflit</text>
  <text x="537.3333333333333" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Comptes à privilèges signalés</text>
  <circle cx="541.3333333333333" cy="504" r="3.2" fill="#f87171"/>
  <text x="553.3333333333333" y="507" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="553.3333333333333" y="518" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">John Doe</text>
  <text x="782.6666666666665" y="507" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 lignes</text>
  <text x="782.6666666666665" y="518" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">3 processus</text>
  <line x1="537.3333333333333" y1="521" x2="782.6666666666665" y2="521" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="541.3333333333333" cy="532" r="3.2" fill="#fb923c"/>
  <text x="553.3333333333333" y="535" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">ASMITH</text>
  <text x="553.3333333333333" y="546" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Anna Smith</text>
  <text x="782.6666666666665" y="535" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">41 lignes</text>
  <text x="782.6666666666665" y="546" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processus</text>
  <line x1="537.3333333333333" y1="549" x2="782.6666666666665" y2="549" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="541.3333333333333" cy="560" r="3.2" fill="#fb923c"/>
  <text x="553.3333333333333" y="563" fill="#e2e8f0" fontSize="8.8" fontFamily="system-ui, sans-serif">BMARTIN</text>
  <text x="553.3333333333333" y="574" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Bruno Martin</text>
  <text x="782.6666666666665" y="563" fill="#e2e8f0" fontSize="8.8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">28 lignes</text>
  <text x="782.6666666666665" y="574" fill="#94a3b8" fontSize="7.6" textAnchor="end" fontFamily="system-ui, sans-serif">2 processus</text>
  <rect x="806.6666666666665" y="448" width="273.3333333333333" height="140" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="820.6666666666665" y="468" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Par processus</text>
  <text x="820.6666666666665" y="481" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Utilisateurs en conflit par processus métier</text>
  <text x="820.6666666666665" y="507" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Procure to pay</text>
  <text x="1065.9999999999998" y="507" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">22</text>
  <rect x="820.6666666666665" y="512" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="820.6666666666665" y="512" width="245" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="820.6666666666665" y="535" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Order to cash</text>
  <text x="1065.9999999999998" y="535" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">9</text>
  <rect x="820.6666666666665" y="540" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="820.6666666666665" y="540" width="101" height="5" rx="2.5" fill="#2b8cff"/>
  <text x="820.6666666666665" y="563" fill="#e2e8f0" fontSize="8.6" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="1065.9999999999998" y="563" fill="#e2e8f0" fontSize="8.6" textAnchor="end" fontFamily="system-ui, sans-serif">6</text>
  <rect x="820.6666666666665" y="568" width="245.33333333333331" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
  <rect x="820.6666666666665" y="568" width="66" height="5" rx="2.5" fill="#2b8cff"/>
  <rect x="240" y="600" width="840" height="130" rx="10" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="620" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Analyser</text>
  <text x="254" y="633" fill="#94a3b8" fontSize="8.3" fontFamily="system-ui, sans-serif">Les écrans de conflits et le modèle SoD de l'Explorateur de données</text>
  <rect x="254" y="644" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="661" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="661" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Synthèse</text>
  <text x="282.0" y="674" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Par processus et risque, par rafraîchissement</text>
  <text x="508.66666666666674" y="661" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="644" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="661" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="661" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Détails</text>
  <text x="554.6666666666667" y="674" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Chaque ligne de conflit</text>
  <text x="781.3333333333335" y="661" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="644" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="661" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="661" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Avérés</text>
  <text x="827.3333333333334" y="674" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Conflits confirmés par le journal d'activité</text>
  <text x="1054.0" y="661" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="254" y="684" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="266.0" y="701" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="282.0" y="701" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="282.0" y="714" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Les utilisateurs en conflit</text>
  <text x="508.66666666666674" y="701" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="527" y="684" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="538.6666666666667" y="701" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="554.6666666666667" y="701" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="554.6666666666667" y="714" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Les paires de rôles en conflit</text>
  <text x="781.3333333333335" y="701" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="799" y="684" width="267" height="34" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="811.3333333333334" y="701" fill="#4a9eff" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>
  <text x="827.3333333333334" y="701" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur de données</text>
  <text x="827.3333333333334" y="714" fill="#94a3b8" fontSize="7.8" fontFamily="system-ui, sans-serif">Modèle sod : vos propres analyses</text>
  <text x="1054.0" y="701" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">→</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'applique à la tendance</text>
  <line x1="200" y1="117.0" x2="292" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tous = les totaux</text>
  <line x1="200" y1="207.0" x2="476" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tendance</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">empilée par niveau de risque</text>
  <line x1="200" y1="357.0" x2="300" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="500" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="515" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Paires de rôles</text>
  <text x="30" y="528" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rouge : dans un seul rôle</text>
  <line x1="200" y1="517.0" x2="260" y2="505" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="20" y="650" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="665" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyser</text>
  <text x="30" y="678" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrans de conflits, Explorateur</text>
  <line x1="200" y1="667.0" x2="254" y2="660" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Excel · PDF · ↻</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">exportent la page telle quelle</text>
  <line x1="1120" y1="117.0" x2="884.3199999999999" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avérés</text>
  <text x="1130" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les deux activités utilisées</text>
  <line x1="1120" y1="207.0" x2="837.5" y2="203" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risques touchés</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la pastille donne le niveau</text>
  <line x1="1120" y1="337.0" x2="1060" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
  <rect x="1120" y="480" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="495" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par processus</text>
  <text x="1130" y="508" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">utilisateurs en conflit</text>
  <line x1="1120" y1="497.0" x2="1059.9999999999998" y2="518" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxsod-arrow)"/>
</svg>

---

## La barre \{#bar\}

La **Période** — *12 derniers mois* à l'ouverture — s'applique au graphique de tendance. **Application** : **Tous** donne les totaux de l'ensemble des applications ; en choisir une restreint chaque widget à celle-ci. **Excel** et **PDF** exportent la page telle qu'elle se présente.

---

## Les quatre chiffres \{#figures\}

| Carte | Chiffre | Ligne de détail |
|---|---|---|
| **Utilisateurs en conflit** — au dernier rafraîchissement | Les utilisateurs porteurs d'au moins un conflit. | Ceux à privilèges, et la date du dernier rafraîchissement. |
| **Lignes de conflit** — utilisateur × risque × paire d'activités | Chaque conflit relevé. | Les risques touchés et les processus concernés. |
| **Avérés par l'activité** — les deux activités en conflit réellement utilisées | Les utilisateurs qui ont utilisé les deux côtés d'un conflit, d'après le journal d'activité. | Les lignes de conflit avérées. |
| **Rôles impliqués** — rôles portant un côté d'un conflit | Les rôles en cause. | Les paires de rôles à l'origine des conflits. |

Un conflit est **avéré** quand le journal d'activité de l'utilisateur montre des transactions sur les objets des deux activités incompatibles : le risque n'est plus théorique. Cela suppose la collecte du journal d'activité.

---

## Tendance et détail \{#detail\}

| Widget | Contenu |
|---|---|
| **Conflits par rafraîchissement** | Les lignes de conflit à chaque rafraîchissement de la période, empilées par niveau de risque — la tendance de la remédiation. |
| **Risques touchés** | Les risques qui concernent le plus d'utilisateurs d'abord ; la pastille donne le niveau de risque — rouge pour élevé ou critique, orange pour moyen, bleu sinon. |
| **Paires de rôles** | Les paires de rôles qui créent le plus de conflits, avec les utilisateurs concernés : en rouge un conflit à l'intérieur d'un seul rôle — corriger le rôle règle le cas de tous ses titulaires —, en orange deux rôles détenus ensemble. |
| **Utilisateurs les plus en conflit** | Les utilisateurs porteurs du plus grand nombre de lignes de conflit, avec le nombre de processus ; les comptes à privilèges sont signalés. |
| **Par processus** | Les utilisateurs en conflit par processus métier. |
| **Analyser** | Les liens vers les écrans de conflits — Synthèse, Détails, Avérés, Utilisateurs, Rôles — et vers l'explorateur de données, où le modèle *Segregation of duties* permet d'aller plus loin. |

---

## Qui le voit \{#access\}

Chaque widget ne s'affiche que si l'utilisateur peut lancer sa requête, et le périmètre de données des rôles de l'utilisateur s'applique à chaque chiffre et à l'export.

---

## Voir aussi

- [Vue d'ensemble — Synthèse d'audit](./audit-synthesis.md) — la synthèse de toute l'application.
- [Revue de sécurité](./security-review.md) — les comptes et droits à revoir.
- [Tâches](./jobs.md) — rafraîchir les conflits : *Collecter la sécurité et la SoD*.
