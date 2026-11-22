---
title: Doublons utilisateurs
description: "Utilisateurs disposant de plusieurs comptes qui pointent vers la même personne (Address Number / matricule), regroupés par application."
keywords: [Nomasx-1, sécurité, doublons utilisateurs, comptes multiples, address number, identité salarié, audit]
---

# Doublons utilisateurs

L'écran **Doublons utilisateurs** liste tout compte partageant son **identifiant de personne** avec au moins un autre compte sur la même application. Une ligne par compte du groupe.

Par *identifiant de personne*, on entend la valeur que le système source utilise pour désigner le salarié ou le contact sous-jacent — en général l'*Address Number* (`AN8`) côté JDE, le matricule (`PERNR`) côté SAP HR, ou la clé étrangère équivalente sur les autres ERP. Deux comptes rattachés à la même personne signifient qu'un même individu porte deux logins techniques sur la même application — presque toujours un résidu de création répétée plutôt que de réactivation.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxdup-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxdup-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxdup-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxdup-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="300" rx="14" fill="url(#nxdup-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Sécurité - Doublons utilisateurs</text>
  <rect x="456.0" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="478.0" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.security_duplicate_users_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">22 lignes · 6,6 ms</text>
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
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (ID)</text>
  <text x="547" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="630" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">RÉFÉRENCE</text>
  <text x="689" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="734" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CRÉATION</text>
  <text x="827" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CONNEXION</text>
  <text x="925" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LIÉ (Y/N)</text>
  <text x="984" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR LIÉ</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="547" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="673" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1001</text>
  <circle cx="701" cy="197.0" r="3.2" fill="#4ade80"/>
  <text x="734" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="827" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-20</text>
  <text x="925" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Y</text>
  <text x="984" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE2</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDOE2</text>
  <text x="547" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="673" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1001</text>
  <circle cx="701" cy="220.0" r="3.2" fill="#f87171"/>
  <text x="734" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2015-03-02</text>
  <text x="827" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2020-06-11</text>
  <text x="925" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="984" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH</text>
  <text x="547" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="673" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1002</text>
  <circle cx="701" cy="243.0" r="3.2" fill="#4ade80"/>
  <text x="734" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="827" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="925" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="984" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <rect x="240" y="255" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ASMITH_A</text>
  <text x="547" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Anna Smith</text>
  <text x="673" y="269.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1002</text>
  <circle cx="701" cy="266.0" r="3.2" fill="#4ade80"/>
  <text x="734" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2024-07-01</text>
  <text x="827" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-02</text>
  <text x="925" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="984" y="269.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="240" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="288" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="301.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="300" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–22 sur 22</text>
  <rect x="992" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="288" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="301.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="288" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="301.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Numéro de personne commun</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plusieurs comptes, une personne</text>
  <line x1="200" y1="227.0" x2="650" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux comptes actifs</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le cas à examiner d'abord</text>
  <line x1="200" y1="317.0" x2="280" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lié</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déjà déclaré dans les propriétés</text>
  <line x1="1120" y1="227.0" x2="945" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
  <rect x="1120" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper</text>
  <text x="1130" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par référence</text>
  <line x1="1120" y1="137.0" x2="905.5" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxdup-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque paire (ou groupe) de comptes qui pointe vers la même personne :

- **Pourquoi ce doublon existe-t-il ?** Trois cas typiques — un login renommé (la source ne permettant pas le renommage, un second compte a été créé), un prestataire qui revient dans l'entreprise, ou une erreur RH qui rattache deux logins au même salarié.
- **Quel compte conserver ?** Le compte actif avec la connexion la plus récente est en général celui à garder. L'autre doit être désactivé et, si nécessaire, relié au compte actif via l'indicateur *Lié*.
- **Les doublons sont-ils déjà déclarés ?** L'indicateur *Lié* marque les comptes déjà signalés comme doublon d'un autre — ce sont des exceptions documentées qui ne nécessitent aucune action immédiate.

L'écran sert à la fois au nettoyage des comptes redondants et à la documentation des doublons légitimes.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application sur laquelle le groupe de doublons existe. |
| **Utilisateur ID** | `USR_ID` — identifiant utilisateur. | Un compte du groupe en doublon. |
| **Address Number** | `USRD_AN8` — identifiant de personne issu du système source (*Address Number* JDE, `PERNR` SAP, équivalent sur les autres ERP). | Identifiant de personne partagé — clé de regroupement de la ligne. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État dans le système source. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création — aide à identifier le compte le plus ancien. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification — confirme quel compte est réellement utilisé. |
| **Lié** | `USRP_IS_LINKED` — booléen (`Y` / vide). | Indique si le compte est déjà déclaré comme lié à un autre login. |
| **Utilisateur lié** | `USRP_ID_LINKED` — texte. | Si la ligne est liée, le login auquel elle renvoie. |

Colonnes masquées pour les écrans en aval : `USRP_PRIVILEGED`, `USRP_TECHNICAL`, `USRP_GENERIC`.

:::info[Spécifique à JDE]
La clé de regroupement par défaut est l'*Address Number* JDE (`AN8`). Sur les autres systèmes sources, le champ change de nom mais la règle reste la même — Nomasx-1 reprend la clé étrangère que la source utilise pour pointer vers la fiche de la personne.
:::

---

## Conseils & bonnes pratiques

- **Lire le groupe en doublon comme une chronologie.** Ancien compte *créé tôt, dernière connexion il y a longtemps, Inactif* vs nouveau compte *créé récemment, connecté cette semaine, Actif* → l'ancien est un reliquat à désactiver ou archiver.
- **Un doublon inactif déjà lié** (`Lié = Y`) est un cas clos — passer à autre chose et se concentrer sur les lignes sans indicateur de lien.
- **Deux doublons actifs** est l'alerte à creuser en priorité : une même personne détient deux logins effectifs sur la même application, doublant la surface à auditer et masquant peut-être déjà une rupture de SoD.
- **Utiliser l'écran *Paramètres → Propriétés utilisateurs*** pour déclarer un doublon connu une fois pour toutes et le retirer définitivement de cette liste.
