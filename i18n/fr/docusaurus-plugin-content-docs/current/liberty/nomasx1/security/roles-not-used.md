---
title: Rôles non utilisés
description: "Rôles définis dans le système source mais non affectés à aucun utilisateur — les candidats au nettoyage."
keywords: [Nomasx-1, sécurité, rôles non utilisés, rôles dormants, nettoyage des rôles, audit]
---

# Rôles non utilisés

L'écran **Rôles non utilisés** liste les rôles qui existent dans le système source sans aucune ligne dans la table des affectations. Une ligne par couple `(Application, Rôle)`. Ces rôles forment la file d'attente du nettoyage : ils alourdissent le catalogue sans contribuer à un accès actif.

Supprimer les rôles inutilisés est ce qui maintient le modèle de sécurité lisible et réduit la surface d'attaque : un rôle que personne ne détient aujourd'hui peut être affecté à un compte de service demain sans que personne ne s'en aperçoive.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxrnu-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxrnu-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxrnu-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxrnu-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxrnu-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Rôles non utilisés</text>
  <rect x="436.5" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="458.5" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_roles_not_used_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">14 lignes · 4,2 ms</text>
  <rect x="952" y="100" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="101" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="105" x2="1018" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="128" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="128" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="128" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="128" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID (ID)</text>
  <text x="514" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROLE ID</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP_OLD</text>
  <text x="514" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AP (old)</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BREAKGLASS</text>
  <text x="514" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Emergency access</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">PRJ_2019</text>
  <text x="514" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Project 2019</text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="357" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-TEST</text>
  <text x="440" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">QA_TEMP</text>
  <text x="514" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">QA temporary</text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–14 sur 14</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">filtre les lignes chargées</text>
  <line x1="200" y1="167.0" x2="325" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrnu-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles attribués à personne</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par application × rôle</text>
  <line x1="200" y1="267.0" x2="250" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrnu-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exporter</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la liste à nettoyer</text>
  <line x1="1120" y1="217.0" x2="1044.0" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxrnu-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque rôle connu d'**une application connectée**, faire ressortir ceux qui n'ont **aucune** affectation active :

- **Que retirer ?** Les rôles sans détenteur sont la cible évidente du nettoyage. Le calcul s'appuie sur un `LEFT JOIN` vers `SECURITY_ASSIGNMENTS` filtré sur `NULL` — aucun double comptage, aucun faux positif.
- **À quoi servait ce rôle ?** Consulter l'écran *Rôles* pour retrouver l'intention initiale avant de supprimer — un rôle sans détenteur courant peut être un rôle *de secours* gardé prêt en cas d'incident.
- **Le même rôle est-il décliné sous plusieurs noms ?** La liste des rôles inutilisés met souvent en évidence des dérives de nommage (par exemple `CPTA_FOUR_OLD` à côté de `CPTA_FOUR` en service).

L'écran est l'un des livrables que les auditeurs attendent à chaque revue trimestrielle des accès.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. Jointe à `SETTINGS_APPLICATIONS` pour afficher également le nom de l'application. | Application à laquelle appartient le rôle inutilisé. |
| **Rôle ID** | `ROL_ID` — identifiant technique du rôle. Restreint par l'application choisie. | Rôle sans aucune affectation. |

L'écran n'a pas de filtre avancé : il s'ouvre sur la liste complète. La zone de recherche filtre les lignes chargées ; **Vues**, **Filtres**, **Grouper**, **Colonnes** et **Exporter** (CSV ou Excel) fonctionnent comme sur toutes les grilles.

---

## Conseils & bonnes pratiques

- **Trier par *Application ID*** pour traiter une source à la fois — la décision de nettoyage relève en général de l'administrateur sécurité de cette application.
- **Recouper avec l'écran *Rôles*** pour relire la description d'origine avant suppression — certains rôles inutilisés sont des réserves intentionnelles.
- **Confirmer côté système source** avant de retirer : la ligne disparaîtra du catalogue *Rôles* au prochain scan, mais la définition du rôle elle-même doit être supprimée dans la source.
- **Repasser sur l'écran après le scan suivant** pour valider que le nettoyage a bien été pris en compte — la ligne doit sortir automatiquement.
