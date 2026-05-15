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

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="susrp-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#susrp-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Sécurité · Propriétés utilisateurs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="130" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TECHNIQUE</text>
  <text x="400" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GÉNÉRIQUE</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NB</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRIVILÉGIÉ</text>
  <text x="730" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LIÉ</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. LIÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="280" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="400" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="730" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="820" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PARTAGE01</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="400" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="730" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="820" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="130" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">J.DOE</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="400" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="500" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">N</text>
  <text x="730" y="213" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Y</text>
  <text x="820" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
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
| **Technique** | `USRP_TECHNICAL` — `Y` / `N`. | Marque le compte comme utilisateur de service / batch. |
| **Générique** | `USRP_GENERIC` — `Y` / `N`. | Marque le compte comme partagé par plusieurs personnes. |
| **Nombre** | `USRP_GENERIC_COUNT` — nombre. | Combien de personnes partagent le compte générique. |
| **Privilégié** | `USRP_PRIVILEGED` — `Y` / `N`. | Marque le compte comme portant des privilèges élevés. |
| **Lié** | `USRP_IS_LINKED` — `Y` / `N`. | Indique si le compte est déclaré comme doublon d'un autre. |
| **Utilisateur lié** | `USRP_ID_LINKED` — login. | Si lié, login principal vers lequel il pointe. |
| **Précédent** | `USRP_IS_PREVIOUS` — `Y` / `N`. | Indique si le compte succède à un login précédent. |
| **Utilisateur précédent** | `USRP_ID_PREVIOUS` — login. | Si marqué, login précédent. |

---

## Boîte de dialogue

Cliquer sur **Ajouter** pour déclarer un jeu d'indicateurs sur un compte, ou double-cliquer une ligne pour la modifier. Le formulaire est sur deux colonnes et regroupe les indicateurs par catégorie.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="susrp-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#susrp-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier les propriétés — SVC_BATCH</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Application</text>
  <rect x="60" y="116" width="420" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="500" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateur ID</text>
  <rect x="500" y="116" width="420" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>

  <text x="60" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Privilégié</text>
  <rect x="60" y="176" width="20" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="120" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Technique</text>
  <rect x="120" y="176" width="20" height="20" rx="3" fill="rgba(74,158,255,0.30)" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="125" y="191" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">✓</text>
  <text x="180" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Générique</text>
  <rect x="180" y="176" width="20" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="240" y="170" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Nombre</text>
  <rect x="240" y="176" width="80" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="252" y="191" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <text x="60" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Lié</text>
  <rect x="60" y="226" width="20" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="120" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateur lié</text>
  <rect x="120" y="226" width="200" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="132" y="241" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="340" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Précédent</text>
  <rect x="340" y="226" width="20" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="220" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateur précédent</text>
  <rect x="400" y="226" width="200" height="20" rx="3" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="412" y="241" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="780" y="262" width="60" height="28" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="810" y="280" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Annuler</text>
  <rect x="848" y="262" width="78" height="28" rx="5" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="887" y="280" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Enregistrer</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Application** | Liste déroulante à l'ajout, lecture seule en modification. |
| **Utilisateur ID** | Liste déroulante vers le catalogue des utilisateurs, restreinte à l'application choisie. Lecture seule en modification. |
| **Privilégié** | Cocher quand le compte porte des privilèges élevés. |
| **Technique** | Cocher quand le compte est un utilisateur de service / batch. |
| **Générique** | Cocher quand le compte est un login partagé. |
| **Nombre** | Actif quand *Générique* est coché. Nombre de personnes réelles derrière le login. |
| **Lié** | Cocher quand le compte est un doublon d'un autre login. |
| **Utilisateur lié** | Liste déroulante du login principal vers lequel pointe la ligne. Obligatoire quand *Lié* est coché. |
| **Précédent** | Cocher quand le compte succède à un login précédent. |
| **Utilisateur précédent** | Liste déroulante du login précédent. Obligatoire quand *Précédent* est coché. |

---

## Conseils & bonnes pratiques

- **Marquer rapidement les comptes techniques et génériques.** Chaque compte technique non marqué pollue le décompte de licence.
- **Utiliser *Lié* pour les doublons identifiés comme légitimes par l'écran *Doublons utilisateurs***. Déclaré une fois, retiré du bruit d'audit.
- **Réserver *Privilégié* avec parcimonie.** Mettre `Privilégié = Y` est un signal d'audit volontaire — le limiter aux comptes qui portent réellement des droits élevés.
