---
title: Résultats des tests
description: "Exploiter → Résultats des tests dans Liberty Next : le bilan des tests de non-régression — cas réussis, en échec, modifiés et non joués, les dernières exécutions de chaque suite en barres avec leur auteur et leur durée, chaque cas avec ses derniers résultats — et le retour vers la page Tests."
keywords: [Liberty Next, résultats des tests, non-régression, suite de tests, réussi, en échec, modifié, exécutions, surveillance, exploitation]
---

# Résultats des tests

**Résultats des tests** répond d'un coup d'œil à une question : **les tests passent-ils ?** La page donne les totaux de toutes les suites, l'historique des exécutions et, cas par cas, le constat de la dernière exécution.

Accès : **Liberty Next → Exploiter → Résultats des tests**, pour les détenteurs de `tests:view`. Les tests s'écrivent et se jouent dans [Logique → Tests](../framework/build/tests.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 378" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tre-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tre-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tre-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tre-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="338" rx="14" fill="url(#tre-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Résultats des tests</text>
  <rect x="240" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CAS</text>
  <text x="250" y="104" fill="#e2e8f0" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">14</text>
  <rect x="361" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="371" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉUSSIS</text>
  <text x="371" y="104" fill="#4ade80" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">11</text>
  <rect x="482" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EN ÉCHEC</text>
  <text x="492" y="104" fill="#f87171" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="603" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIÉS</text>
  <text x="613" y="104" fill="#fb923c" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="724" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="734" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NON JOUÉS</text>
  <text x="734" y="104" fill="#94a3b8" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <rect x="845" y="62" width="114" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="855" y="80" fill="#64748b" fontSize="7.8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIÈRE EXÉCUTION</text>
  <text x="855" y="104" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <rect x="240" y="130" width="720" height="212" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="152" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Commandes — contrôles nocturnes</text>
  <text x="254" y="168" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">orders · erp_api · il y a 2 h · admin · 14 s</text>
  <rect x="830" y="142" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="883.5" y="156.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvrir dans Tests</text>
  <rect x="550" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="550" y="149.6" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="550" y="149.6" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="550" y="145.2" width="11" height="4.4" fill="#475569" fillOpacity="0.85"/>
  <rect x="566" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="566" y="149.6" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="566" y="149.6" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="566" y="145.2" width="11" height="4.4" fill="#475569" fillOpacity="0.85"/>
  <rect x="582" y="147.4" width="11" height="28.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="582" y="147.4" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="582" y="147.4" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="582" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="598" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="598" y="147.4" width="11" height="2.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="598" y="147.4" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="598" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="614" y="147.4" width="11" height="28.6" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="614" y="147.4" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="614" y="147.4" width="11" height="0.0" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="614" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="630" y="149.6" width="11" height="26.4" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="630" y="149.6" width="11" height="0.0" fill="#f87171" fillOpacity="0.85"/>
  <rect x="630" y="147.4" width="11" height="2.2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="630" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="646" y="151.8" width="11" height="24.2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="646" y="149.6" width="11" height="2.2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="646" y="147.4" width="11" height="2.2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="646" y="145.2" width="11" height="2.2" fill="#475569" fillOpacity="0.85"/>
  <rect x="250" y="190" width="700" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="284" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CAS</text>
  <text x="470" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIERS RÉSULTATS</text>
  <text x="582" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIÈRE EXÉCUTION</text>
  <text x="698" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DURÉE</text>
  <text x="756" y="205.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE LA DERNIÈRE EXÉCUTION A TROUVÉ</text>
  <rect x="250" y="218" width="700" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">La liste des commandes a ses colonnes</text>
  <text x="470" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <text x="698" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">0.8 s</text>
  <text x="756" y="233.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="250" y="246" width="700" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Une commande est créée puis annulée</text>
  <text x="470" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <text x="698" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">3.1 s</text>
  <text x="756" y="261.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">TOTAL : 120.00 → 118.50</text>
  <rect x="250" y="274" width="700" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Le prix est calculé</text>
  <text x="470" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">il y a 2 h</text>
  <text x="698" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">1.2 s</text>
  <text x="756" y="289.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">première ligne : PRICE ≠ 42.00</text>
  <rect x="250" y="302" width="700" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">●</text>
  <text x="284" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Un identifiant inconnu est refusé</text>
  <text x="470" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <text x="582" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">jamais</text>
  <text x="698" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">—</text>
  <text x="756" y="317.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif"></text>
  <rect x="256" y="222" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="230" r="4.5" fill="#4ade80"/>
  <rect x="470" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="482" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="494" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="506" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="518" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="530" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="542" y="225" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="256" y="250" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="258" r="4.5" fill="#fb923c"/>
  <rect x="470" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="482" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="494" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="506" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="518" y="253" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="530" y="253" width="9" height="10" rx="2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="542" y="253" width="9" height="10" rx="2" fill="#fb923c" fillOpacity="0.85"/>
  <rect x="256" y="278" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="286" r="4.5" fill="#f87171"/>
  <rect x="470" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="482" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="494" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="506" y="281" width="9" height="10" rx="2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="518" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="530" y="281" width="9" height="10" rx="2" fill="#4ade80" fillOpacity="0.85"/>
  <rect x="542" y="281" width="9" height="10" rx="2" fill="#f87171" fillOpacity="0.85"/>
  <rect x="256" y="306" width="16" height="16" fill="#0f172a"/>
  <circle cx="266" cy="314" r="4.5" fill="#475569"/>
  <rect x="20" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les totaux</text>
  <text x="30" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes les suites réunies</text>
  <line x1="200" y1="79.0" x2="240" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par cas</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">elle s'ouvre dans Tests</text>
  <line x1="200" y1="217.0" x2="250" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="1000" y="62" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="77" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exécutions en barres</text>
  <text x="1010" y="90" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la plus récente à droite</text>
  <line x1="1000" y1="79.0" x2="660" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvrir dans Tests</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la suite, modifiée là-bas</text>
  <line x1="1000" y1="167.0" x2="937" y2="153" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le constat</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrôle en échec ou écart</text>
  <line x1="1000" y1="267.0" x2="940" y2="258" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tre-arrow)"/>
</svg>

---

## Les totaux \{#totals\}

Six tuiles : **Cas**, **Réussis**, **En échec**, **Modifiés**, **Non joués** — jamais joués, ou ignorés à la dernière exécution — et **Dernière exécution**.

La page [Vue d'ensemble](../framework/studio.md#overview) les reprend dans une pastille — *Tests : N réussi(s) · N en échec · N modifié(s)* —, rouge si un cas a échoué, orange si un cas a changé, verte sinon.

---

## Une suite \{#suite\}

Chaque suite a son bloc : son libellé, son nom et son connecteur, puis *quand · qui · durée* pour la dernière exécution.

- **Les barres** — une par exécution, la plus récente à droite, vingt au plus : vert pour les cas réussis, rouge pour les échecs, orange pour les cas modifiés, gris pour les cas ignorés.
- **Les cas** — une ligne chacun :

| Colonne | Contenu |
|---|---|
| **Cas** | Ce que le cas vérifie. |
| **Derniers résultats** | Une bande de carrés colorés, un par exécution. |
| **Dernière exécution** | La date de la dernière exécution — *jamais* pour un cas pas encore joué. |
| **Durée** | La durée de la dernière exécution. |
| **Ce que la dernière exécution a trouvé** | Le contrôle en échec, ou l'écart avec la référence. |

**Ouvrir dans Tests** ouvre la suite dans la page Tests ; une ligne y ouvre son cas.

---

## Lire un résultat \{#read\}

| Résultat | Conduite à tenir |
|---|---|
| **En échec** | Ouvrir le cas : l'étape en rouge indique le contrôle non vérifié. |
| **Modifié** | Lire l'écart. Changement voulu : enregistrer de nouveau la référence. Changement non voulu : c'est une régression. |
| **Non joué** | Un cas qui écrit est ignoré tant que l'exécution ne l'autorise pas ; un cas sans étape l'est aussi. |

---

## Voir aussi

- [Tests](../framework/build/tests.md) — écrire et jouer les cas.
- [La page Surveillance](./dashboard.md) — la vue en direct de l'instance.
