---
title: Propriétés utilisateurs
description: "Indicateurs par utilisateur — technique, générique, lié, privilégié — qui pilotent les calculs de licence et le filtrage d'audit."
keywords: [Nomasx-1, paramètres, propriétés utilisateurs, comptes techniques, comptes génériques, comptes liés, privilégié]
---

# Propriétés utilisateurs

L'écran **Propriétés utilisateurs** porte les indicateurs par utilisateur que Nomasx-1 utilise pour interpréter les données d'usage. Une ligne par `(Application, Utilisateur)`. Chaque ligne permet de marquer un compte comme *technique*, *générique*, *lié* à un autre login, *privilégié* ou rattaché à un compte précédent.

Ces indicateurs sont lus par *OUT — Utilisateurs / Rôles*, les rapports *Licences* et plusieurs vues d'hygiène — ils permettent à l'analyse de distinguer une vraie personne d'un compte de service batch ou d'un login partagé.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 398" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="usp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="318" rx="14" fill="url(#usp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <line x1="233" y1="44" x2="251" y2="44" stroke="#4a9eff" strokeWidth="1"/><line x1="239" y1="44" x2="239" y2="56" stroke="#4a9eff" strokeWidth="1"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Propriétés des utilisateurs</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">44 lignes · 12 ms</text>
  <rect x="959" y="118" width="128" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="960" y="119" width="57" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="988.5" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="1018" y1="123" x2="1018" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="1052.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="233" y="146" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="297.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="367" y="146" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="425.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="490" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="529.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇪ Importer</text>
  <rect x="574" y="146" width="88" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="584" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="668" y="146" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="707.0" y="160.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="178" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="337" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" textAnchor="end" fontFamily="ui-monospace, monospace">APPLICATION ID (I…</text>
  <text x="351" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="437" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID…</text>
  <text x="527" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="637" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">PRIVILÈGES…</text>
  <text x="707" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TECHNIQUE …</text>
  <text x="777" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">GÉNÉRIQUE …</text>
  <text x="847" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LIÉ (Y/N)</text>
  <text x="907" y="193.0" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR LIÉ</text>
  <rect x="233" y="204" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="218.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE</text>
  <text x="527" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JD Edwards admin</text>
  <circle cx="664.0" cy="215.0" r="3.2" fill="#4ade80"/>
  <circle cx="734.0" cy="215.0" r="3.2" fill="#4ade80"/>
  <circle cx="804.0" cy="215.0" r="3.2" fill="#f87171"/>
  <circle cx="869.0" cy="215.0" r="3.2" fill="#f87171"/>
  <text x="907" y="218.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="226" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="240.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">BATCHUSR</text>
  <text x="527" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">Batch account</text>
  <circle cx="664.0" cy="237.0" r="3.2" fill="#f87171"/>
  <circle cx="734.0" cy="237.0" r="3.2" fill="#4ade80"/>
  <circle cx="804.0" cy="237.0" r="3.2" fill="#f87171"/>
  <circle cx="869.0" cy="237.0" r="3.2" fill="#f87171"/>
  <text x="907" y="240.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <rect x="233" y="248" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="262.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE2</text>
  <text x="527" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">John Doe</text>
  <circle cx="664.0" cy="259.0" r="3.2" fill="#f87171"/>
  <circle cx="734.0" cy="259.0" r="3.2" fill="#f87171"/>
  <circle cx="804.0" cy="259.0" r="3.2" fill="#f87171"/>
  <circle cx="869.0" cy="259.0" r="3.2" fill="#4ade80"/>
  <text x="907" y="262.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="233" y="270" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="337" y="284.3" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="351" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">JDE-PROD</text>
  <text x="437" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">APCLERKS</text>
  <text x="527" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">AP shared</text>
  <circle cx="664.0" cy="281.0" r="3.2" fill="#f87171"/>
  <circle cx="734.0" cy="281.0" r="3.2" fill="#f87171"/>
  <circle cx="804.0" cy="281.0" r="3.2" fill="#4ade80"/>
  <circle cx="869.0" cy="281.0" r="3.2" fill="#f87171"/>
  <text x="907" y="284.3" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="233" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="307" y="304" width="56" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="317" y="317.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">50  ⌄</text>
  <text x="375" y="317" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Affichage 1–44 sur 44</text>
  <text x="1087" y="317" fill="#94a3b8" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">«  ‹  1  ›  »</text>
  <rect x="215.0" y="354" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="225.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Privilèges · technique · générique</text>
  <text x="225.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">indicateurs lus par les rapports</text>
  <line x1="435.0" y1="354" x2="645" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="665.0" y="354" width="440.0" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="675.0" y="369" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateur lié</text>
  <text x="675.0" y="382" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le compte principal</text>
  <line x1="885.0" y1="354" x2="915" y2="293.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="12" y="140" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter · modifier en lot · importer</text>
  <text x="22" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un compte, plusieurs, un fichier</text>
  <line x1="197" y1="157.0" x2="263" y2="157" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="12" y="220.0" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="235.0" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clic sur une ligne</text>
  <text x="22" y="248.0" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre le dialogue de modification</text>
  <line x1="197" y1="237.0" x2="515" y2="237.0" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
  <rect x="1119" y="151" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="166" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="1129" y="179" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ex. Technique = Y</text>
  <line x1="1119" y1="168.0" x2="794.0" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usp-arrow)"/>
</svg>

---

## Objectif de l'écran

Marquer chaque compte pour que les vues en aval filtrent intelligemment :

- **Comptes techniques** — comptes batch / de service. Exclus des calculs de licence à l'effectif.
- **Comptes génériques** — logins partagés. *Nombre* indique combien de personnes réelles se trouvent derrière.
- **Comptes privilégiés** — marqués pour une attention particulière en audit.
- **Comptes liés / précédents** — relations de doublon ou de succession. *Utilisateur lié* et *Utilisateur précédent* portent la référence au login principal.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USRP_APPS_ID` — application. | Application. |
| **Utilisateur ID** | `USRP_ID` — identifiant utilisateur. | Compte marqué. |
| **Technique (Y/N)** | `USRP_TECHNICAL` — `Y` / `N`. | Marque le compte comme utilisateur de service / batch. |
| **Générique (Y/N)** | `USRP_GENERIC` — `Y` / `N`. | Marque le compte comme partagé par plusieurs personnes. |
| **Générique nombre** | `USRP_GENERIC_COUNT` — nombre. | Combien de personnes partagent le compte générique. |
| **Privilèges (Y/N)** | `USRP_PRIVILEGED` — `Y` / `N`. | Marque le compte comme portant des privilèges élevés. |
| **Lié (Y/N)** | `USRP_IS_LINKED` — `Y` / `N`. | Indique si le compte est déclaré comme doublon d'un autre. |
| **Utilisateur lié** | `USRP_ID_LINKED` — login. | Si lié, login principal vers lequel il pointe. |
| **Renommé (Y/N)** | `USRP_IS_PREVIOUS` — `Y` / `N`. | Indique si le compte succède à un login précédent. |
| **Utilisateur précédent** | `USRP_ID_PREVIOUS` — login. | Si marqué, login précédent. |

---

## Boîte de dialogue

**Ajouter une ligne** qualifie un compte ; un clic sur une ligne l'ouvre. **Modifier en lot** change plusieurs lignes dans la grille et **Importer** les charge depuis Excel. Le formulaire est sur deux colonnes, chaque indicateur à côté de son détail.

<svg viewBox="0 0 1320 414" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="usd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="usd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="usd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="364" rx="14" fill="url(#usd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="235" y="50" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier · Paramètres - Propriétés des utilisateurs</text>
  <rect x="1061" y="36" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1073.0" y="50.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤢</text>
  <line x1="215" y1="68" x2="1105" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <text x="235.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION ID</text>
  <rect x="235.0" y="98" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="245.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">1  JDE-PROD</text>
  <text x="643.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="667.0" y="92" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR ID</text>
  <rect x="667.0" y="98" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="112.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JDOE2  John Doe</text>
  <text x="1075.0" y="113" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="235.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PRIVILÈGES (Y/N)</text>
  <rect x="235.0" y="147" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="252.0" y="156" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="667.0" y="138" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TECHNIQUE (Y/N)</text>
  <rect x="667.0" y="147" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="684.0" y="156" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="235.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GÉNÉRIQUE (Y/N)</text>
  <rect x="235.0" y="193" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="252.0" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="667.0" y="184" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">GÉNÉRIQUE NOMBRE</text>
  <rect x="667.0" y="190" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="204.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="235.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIÉ (Y/N)</text>
  <rect x="235.0" y="239" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M237.5,244.5 L239.8,246.8 L243.8,242" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="252.0" y="248" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">activé</text>
  <text x="667.0" y="230" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR LIÉ</text>
  <rect x="667.0" y="236" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="250.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">JDOE</text>
  <text x="235.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RENOMMÉ (Y/N)</text>
  <rect x="235.0" y="285" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="252.0" y="294" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">désactivé</text>
  <text x="667.0" y="276" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR PRÉCÉDENT</text>
  <rect x="667.0" y="282" width="418.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="677.0" y="296.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <line x1="215" y1="330" x2="1105" y2="330" stroke="#1f2937" strokeWidth="1"/>
  <rect x="989" y="344" width="96" height="24" rx="5" fill="url(#usd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1037.0" y="359.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▣ Enregistrer</text>
  <rect x="907" y="344" width="74" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="359.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Annuler</text>
  <rect x="814" y="344" width="85" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="856.5" y="359.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <rect x="732" y="344" width="74" height="24" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="769.0" y="359.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="12" y="92" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Application · utilisateur</text>
  <text x="22" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le compte qualifié</text>
  <line x1="197" y1="109.0" x2="233.0" y2="109" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="12" y="138" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="153" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Privilèges · technique</text>
  <text x="22" y="166" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cocher les indicateurs</text>
  <line x1="197" y1="155.0" x2="233.0" y2="155" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="12" y="230" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lié + utilisateur lié</text>
  <text x="22" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">second compte d'une personne</text>
  <line x1="197" y1="247.0" x2="233.0" y2="247" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="1119" y="276" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="291" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Renommé + utilisateur précédent</text>
  <text x="1129" y="304" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">garde l'historique groupé</text>
  <line x1="1119" y1="293.0" x2="1087.0" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
  <rect x="1119" y="351" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="366" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1129" y="379" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pris au prochain rapport</text>
  <line x1="1119" y1="368.0" x2="1037.0" y2="368" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#usd-arrow)"/>
</svg>

| Champ | À renseigner |
|---|---|
| **ID application** | L'application. En lecture seule sur une ligne enregistrée. |
| **Utilisateur ID** | Choisi parmi les utilisateurs de l'application. En lecture seule sur une ligne enregistrée. |
| **Privilèges (Y/N)** | Cocher quand le compte porte des privilèges élevés. |
| **Technique (Y/N)** | Cocher quand le compte est un utilisateur de service / batch. |
| **Générique (Y/N)** | Cocher quand le compte est un login partagé. |
| **Générique nombre** | Avec *Générique* : nombre de personnes réelles derrière le login. |
| **Lié (Y/N)** | Cocher quand le compte est un doublon d'un autre login. |
| **Utilisateur lié** | Avec *Lié* : le login principal auquel le compte se rattache. |
| **Renommé (Y/N)** | Cocher quand le compte succède à un login précédent. |
| **Utilisateur précédent** | Avec *Renommé* : le login précédent. |

---

## Conseils & bonnes pratiques

- **Marquer rapidement les comptes techniques et génériques.** Chaque compte technique non marqué pollue le décompte de licence.
- **Utiliser *Lié* pour les doublons identifiés comme légitimes par l'écran *Doublons utilisateurs***. Déclaré une fois, retiré du bruit d'audit.
- **Réserver *Privilégié* avec parcimonie.** Mettre `Privilégié = Y` est un signal d'audit volontaire — le limiter aux comptes qui portent réellement des droits élevés.
