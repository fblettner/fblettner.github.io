---
title: Menus
description: "Arborescence des menus de l'application, niveau par niveau, avec les objets JDE lancés par chaque feuille et le composant de licence correspondant."
keywords: [Nomasx-1, applications, menus, arborescence des menus, menus JDE, composant de licence]
---

# Menus

L'écran **Menus** liste l'ensemble des entrées de menu connues de Nomasx-1 pour une application. Une ligne par feuille — autrement dit l'action qu'un utilisateur peut effectivement lancer depuis le menu du système source. Chaque ligne porte la hiérarchie complète des menus parents, l'objet technique invoqué par la feuille et le composant de licence dont relève l'objet.

L'écran sert à *comprendre la navigation* d'une application connectée sous l'angle sécurité : ce qui est atteignable depuis quoi, et avec quel poids de licence.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="340" rx="14" fill="url(#mnu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Menus</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4280 lignes · 12 ms</text>
  <rect x="910" y="118" width="177" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="911" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="939.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="969" y1="123" x2="969" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1003.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <line x1="1038" y1="123" x2="1038" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1062.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Arbre</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="389" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="428.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="569" y="146" width="122" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="579" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="697" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="359" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="373" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="459" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RACINE</text>
  <text x="587" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJET</text>
  <text x="659" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ECRAN</text>
  <text x="731" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">VERSION</text>
  <text x="897" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">COMPOSANT ID (ID)</text>
  <text x="911" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">COMPOSANT ID</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="207" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="218.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="659" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W01012B</text>
  <text x="731" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1504</text>
  <text x="911" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sys…</text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="229" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="240.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="659" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W0411A</text>
  <text x="731" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="911" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Fin…</text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="251" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="262.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="659" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="731" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">XJDE0001</text>
  <text x="897" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="911" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sal…</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="273" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="284.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">EnterpriseOne Menus</text>
  <text x="587" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="659" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W4210E</text>
  <text x="731" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1007</text>
  <text x="911" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Sal…</text>
  <rect x="233" y="292" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <rect x="239" y="295" width="18" height="16" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="306.0" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="359" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="373" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="459" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Accounts Payable Man…</text>
  <text x="587" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">P04012</text>
  <text x="659" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">W04012A</text>
  <text x="731" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ZJDE0001</text>
  <text x="897" y="306.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1101</text>
  <text x="911" y="306.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards EnterpriseOne Fin…</text>
  <text x="233" y="338" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="326" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="339.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="339" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 4280</text>
  <text x="1087" y="339" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1 2 … 3  ›  »</text>
  <rect x="256" y="225.0" width="159" height="54" rx="7" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="260" y="231.0" width="151" height="20" rx="4" fill="rgba(74,158,255,0.10)"/>
  <text x="268" y="245.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Afficher les utilisateurs</text>
  <text x="405" y="245.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <text x="268" y="267.0" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Afficher les rôles</text>
  <text x="405" y="267.0" fill="#64748b" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">navigate</text>
  <rect x="215.0" y="376" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Racine, puis Niveau 1 à 3</text>
  <text x="225.0" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">où se trouve l'entrée dans le menu</text>
  <line x1="360.0" y1="376" x2="467" y2="315.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="515.0" y="376" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="525.0" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Objet · Ecran · Version</text>
  <text x="525.0" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que lance l'entrée</text>
  <line x1="660.0" y1="376" x2="595" y2="315.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="815.0" y="376" width="290.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="825.0" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Composant</text>
  <text x="825.0" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">composant de licence de l'objet</text>
  <line x1="960.0" y1="376" x2="919" y2="315.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, racine, objet, composant…</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="12" y="198.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="213.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne (···)</text>
  <text x="22" y="226.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou clic droit sur la ligne</text>
  <line x1="197" y1="215.0" x2="248" y2="215.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="12" y="262.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="277.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs / rôles</text>
  <text x="22" y="290.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui atteint cette entrée de menu</text>
  <line x1="197" y1="279.0" x2="276" y2="279.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1119" y="121" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="136" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau · Graphique · Arbre</text>
  <text x="1129" y="149" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Arbre : la hiérarchie des menus</text>
  <line x1="1119" y1="138.0" x2="998.5" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
  <rect x="1119" y="163" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="178" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues · Colonnes · Exporter</text>
  <text x="1129" y="191" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Niveaux 4 à 10 masqués</text>
  <line x1="1119" y1="180.0" x2="1042.5" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnu-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque feuille de menu d'une application connectée, répondre à trois questions :

- **Que lance la feuille ?** Objet, form et version — le triplet dont le système source a besoin pour ouvrir l'écran.
- **Où se situe-t-elle ?** Racine + jusqu'à 9 niveaux imbriqués — le fil d'Ariane qui explique *comment* un utilisateur y accède.
- **Quel composant de licence consomme-t-elle ?** Le composant regroupe l'objet sous-jacent dans un cumul facturable — voir *Licences → JD Edwards* pour les règles de volumétrie.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `MENU_APPS_ID` — identifiant numérique de l'application source. Filtrable. | Application à laquelle le menu appartient. |
| **Racine** | `MENU_ROOT` — identifiant du menu de tête (par exemple `G0911`). Filtrable. | Point d'entrée au niveau du rôle. |
| **Objet** | `MENU_OBJECT` — objet technique lancé (programme, application, batch). Filtrable. | Ce que la feuille appelle réellement. |
| **Ecran** | `MENU_FORM` — code form au sein de l'objet. | Écran interactif spécifique au sein du programme. |
| **Version** | `MENU_VERSION` — version de traitement. | Variante de configuration utilisée à l'exécution. |
| **Composant ID** | `CPT_ID` — composant de licence auquel l'objet est rattaché. Filtrable. | Cumul facturable — alimente le reporting de licence. |
| **Menu ID** | `MENU_ID` — identifiant de tâche sur la feuille. Filtrable. | Code de tâche du système source (par exemple un ID de tâche menu JDE). |
| **Niveau 1 … Niveau 3** | `MENU_LEVEL1`, `MENU_LEVEL2`, `MENU_LEVEL3` — libellés imbriqués. Le niveau 1 est filtrable. | Les trois premières profondeurs du fil d'Ariane. |
| **Niveau 4** | `MENU_LEVEL4` … `MENU_LEVEL10`. | Niveaux plus profonds — masqués par défaut mais stockés sur la ligne pour les écrans en aval. |

Colonnes masquées portées par la ligne : `MENU_SEQ_UKID` (séquence stable), `MENU_REFRESH` (dernier sync), `MENU_UKID` (identifiant technique).

:::info[Spécifique à JDE]
Sur JD Edwards EnterpriseOne, l'arborescence est lue directement dans les tables Solution Explorer. *Objet*, *Ecran* et *Version* forment le triplet qui lance une application interactive ou un UBE batch. Le composant de licence est dérivé du mappage System Code → Composant de licence (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`).
:::

---

## Menu contextuel

Le bouton **···** en début de ligne, ou un clic droit sur la ligne, ouvre son menu.

| Action | Vers où |
|---|---|
| **Afficher les utilisateurs** | Liste des utilisateurs qui peuvent atteindre l'entrée de menu sélectionnée, avec leur statut, leurs dates de création et de connexion et les indicateurs *Technique (Y/N)*, *Générique (Y/N)* et *Lié (Y/N)* de leurs propriétés. |
| **Afficher les rôles** | Liste des rôles qui donnent accès à l'entrée de menu sélectionnée. |

---

## Vue en arbre \{#tree\}

**Arbre**, à côté de *Tableau* et *Graphique*, dessine les mêmes lignes sous forme d'arborescence : chaque menu est un dossier suivi de son nombre d'entrées, chaque tâche affiche son libellé et, entre parenthèses, l'objet qu'elle lance. **Filtrer l'arbre…** garde les nœuds dont le libellé correspond, **Tout déplier** et **Tout replier** ouvrent ou ferment tous les niveaux, et le compteur donne les nœuds, les racines et les orphelins — des entrées dont le menu parent n'a pas été collecté.

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mnt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mnt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mnt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mnt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="358" rx="14" fill="url(#mnt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Menus</text>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <text x="233" y="96" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">4280 lignes · 12 ms</text>
  <rect x="897" y="84" width="177" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="926.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="956" y1="89" x2="956" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="990.5" y="97.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="1026" y="85" width="47" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1049.5" y="97.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Arbre</text>
  <rect x="233" y="114" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="128.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Filtrer l'arbre…</text>
  <rect x="431" y="114" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="475.5" y="128.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout déplier</text>
  <rect x="526" y="114" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="570.5" y="128.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout replier</text>
  <text x="625" y="129" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1 260 nœuds · 42 racines · 3 orphelin(s)</text>
  <rect x="233" y="148" width="854" height="214" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="249" y="170" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="263" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="170" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">EnterpriseOne Menus ()</text>
  <text x="412.58000000000004" y="170" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(20)</text>
  <text x="249" y="195" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="263" y="195" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="195" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Accounts Payable Manager ()</text>
  <text x="442.03" y="195" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(8)</text>
  <text x="271" y="220" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="285" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="301" y="220" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Supplier Invoice Entry ()</text>
  <text x="452.25" y="220" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(4)</text>
  <text x="271" y="245" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="285" y="245" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤</text>
  <text x="301" y="245" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Supplier Ledger Inquiry (P0411)</text>
  <text x="271" y="270" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="285" y="270" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤</text>
  <text x="301" y="270" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Payment Approval (P0413M)</text>
  <text x="271" y="295" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif"> </text>
  <text x="285" y="295" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▤</text>
  <text x="301" y="295" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Print A/P Checks (R04572)</text>
  <text x="249" y="320" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="263" y="320" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="320" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Sales Order Manager ()</text>
  <text x="412.58000000000004" y="320" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(10)</text>
  <text x="249" y="345" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="263" y="345" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▭</text>
  <text x="279" y="345" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Warehouse Manager ()</text>
  <text x="400.8" y="345" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(8)</text>
  <rect x="12" y="119" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="134" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtrer l'arbre</text>
  <text x="22" y="147" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur une partie du libellé</text>
  <line x1="197" y1="136.0" x2="275" y2="136" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="12" y="173" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="188" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un menu (dossier)</text>
  <text x="22" y="201" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec son nombre d'entrées</text>
  <line x1="197" y1="190.0" x2="279" y2="190" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="12" y="223" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="238" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une tâche</text>
  <text x="22" y="251" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé (objet lancé)</text>
  <line x1="197" y1="240.0" x2="355" y2="240" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1119" y="87" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="102" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arbre</text>
  <text x="1129" y="115" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liens menu parent → enfant</text>
  <line x1="1119" y1="104.0" x2="895" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
  <rect x="1119" y="129" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="144" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nœuds · racines · orphelins</text>
  <text x="1129" y="157" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orphelin : parent absent</text>
  <line x1="1119" y1="146.0" x2="685" y2="125" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mnt-arrow)"/>
</svg>

:::info[Spécifique à JDE]
Les entrées proviennent des vues de tâches cochées *Collecter la sécurité* sur l'application (*Paramètres → Global → Applications*, onglet **Vues de tâches**) et, selon ses paramètres JD Edwards, des menus standard, des E1 pages et des pages composites. Une page composite apporte ce qu'ouvrent ses tuiles, les écrans affichés dans ses volets et la tâche d'une tuile de tâche — pour une page d'accueil, toutes les tâches de son menu. Une E1 page apporte les applications et les états que son code appelle ou nomme. Ces entrées alimentent les droits, la séparation des tâches et les chiffres de licence comme toute entrée de menu standard.
:::

---

## Conseils & bonnes pratiques

- **Filtrer par *Niveau 1*** pour se concentrer sur un domaine métier (Comptes Fournisseurs, Gestion des ventes, etc.) avant d'attaquer sa revue de sécurité.
- **Filtrer par *Composant*** pour faire remonter chaque entrée de menu qui consomme une licence donnée — utile avant une renégociation de volumétrie.
- **Filtrer par *Objet*** pour retrouver tous les points où un programme donné apparaît dans l'arborescence. Un programme atteignable depuis plusieurs racines peut nécessiter des règles de sécurité différentes selon le point d'entrée.
- **Recouper avec *Droits / Rôles*** pour confirmer quels rôles donnent accès à chaque feuille de menu.
