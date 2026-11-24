---
title: Cas de test de la sécurité
description: "Simulation de la sécurité → Cas de test dans Nomajde : des attentes sur la sécurité de JD Edwards EnterpriseOne (ce rôle peut exécuter P4210, ne peut pas supprimer dans P0411) enregistrées en cas, rejouées sur la sécurité actuelle après chaque changement, avec ce qui ne tient plus et la règle qui décide désormais ; cinq cas d'exemple à adapter et un éditeur pour chaque cas."
keywords: [Nomajde, JD Edwards, JDE E1, cas de test, non-régression, simulation de la sécurité, Security Workbench, attentes, exemples, rôles]
---

# Cas de test de la sécurité

L'onglet **Cas de test** de la [Simulation de la sécurité](./security-simulation.md) assure la non-régression d'un projet de sécurité JD Edwards EnterpriseOne. Un cas est une liste d'**attentes** sur un utilisateur, un rôle ou `*PUBLIC` — *peut exécuter P4210*, *ne peut pas supprimer dans P0411* — et **Tout rejouer** confronte chaque cas à la sécurité telle qu'elle est. Après une modification dans le Security Workbench, une refusion de rôles ou une promotion, la liste indique ce qui ne tient plus et la règle qui décide désormais.

Les cas sont enregistrés dans la base propre de Nomajde ; les rejouer ne fait que lire JD Edwards.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="414" rx="14" fill="url(#njtc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Simulation de la sécurité</text>
  <text x="240" y="64" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce qu'un utilisateur aurait le droit de faire, avant de l'écrire — et les cas qui vérifient que cela le reste.</text>
  <rect x="240.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Simuler</text>
  <text x="250.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Un utilisateur, un module, une hypothèse</text>
  <rect x="421.5" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="431.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Sécuriser un module</text>
  <text x="431.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Tout un module pour un rôle</text>
  <rect x="603.0" y="78" width="175.5" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="613.0" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cohérence</text>
  <text x="613.0" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des lignes inutiles ou qui se contredisent</text>
  <rect x="784.5" y="78" width="175.5" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="794.5" y="94" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Cas de test</text>
  <text x="794.5" y="108" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Des attentes rejouées sur la sécurité · 7</text>
  <rect x="240" y="126" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="284.5" y="140.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout rejouer</text>
  <rect x="337" y="126" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="404.0" y="140.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter les exemples</text>
  <rect x="240" y="156" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CAS</text>
  <text x="508" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONCERNE</text>
  <text x="588" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTENTES</text>
  <text x="674" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIER PASSAGE</text>
  <text x="774" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TENUES</text>
  <text x="824" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ROMPUES</text>
  <text x="880" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="184" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Comptabilité fournisseurs — JSMITH</text>
  <text x="508" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="588" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">24</text>
  <text x="674" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="198.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">24</text>
  <rect x="824" y="187.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="198.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0</text>
  <text x="880" y="198.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rejouer · Modifier · Supprimer</text>
  <rect x="240" y="210" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="508" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK</text>
  <text x="588" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6</text>
  <text x="674" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <rect x="824" y="213.0" width="22" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="835.0" y="224.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="880" y="224.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rejouer · Modifier · Supprimer</text>
  <rect x="240" y="236" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Buyer</text>
  <text x="508" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">BUYER</text>
  <text x="588" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="674" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">5</text>
  <rect x="824" y="239.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="250.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0</text>
  <text x="880" y="250.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rejouer · Modifier · Supprimer</text>
  <rect x="240" y="262" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Inquiry only</text>
  <text x="508" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">INQUIRY</text>
  <text x="588" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">8</text>
  <text x="674" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jamais</text>
  <text x="774" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="824" y="276.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="880" y="276.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rejouer · Modifier · Supprimer</text>
  <rect x="240" y="288" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Nobody but administrators manages security</text>
  <text x="508" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">&#42;PUBLIC</text>
  <text x="588" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="674" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20 08:15</text>
  <text x="774" y="302.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">4</text>
  <rect x="824" y="291.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="835.0" y="302.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">0</text>
  <text x="880" y="302.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rejouer · Modifier · Supprimer</text>
  <text x="250" y="332" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CE QUI NE TIENT PLUS  2</text>
  <rect x="240" y="340" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CAS</text>
  <text x="440" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="510" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DROIT</text>
  <text x="580" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTENDU</text>
  <text x="650" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LA SÉCURITÉ DIT</text>
  <text x="760" y="355.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉCIDÉ PAR</text>
  <rect x="240" y="368" width="720" height="22" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="440" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="510" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">supprimer</text>
  <rect x="580" y="371.0" width="32" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="596.0" y="382.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NON</text>
  <rect x="650" y="371.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="666.0" y="382.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <text x="760" y="382.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">APCLERK on &#42;ALL</text>
  <rect x="240" y="394" width="720" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="440" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0911</text>
  <text x="510" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">exécuter</text>
  <rect x="580" y="397.0" width="32" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="596.0" y="408.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">NON</text>
  <rect x="650" y="397.0" width="32" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="666.0" y="408.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">oui</text>
  <text x="760" y="408.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">no rule</text>
  <rect x="20" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tout rejouer</text>
  <text x="30" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chaque cas, sécurité actuelle</text>
  <line x1="200" y1="145.0" x2="250" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Exemples</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôles fictifs à adapter</text>
  <line x1="200" y1="247.0" x2="250" y2="230" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui ne tient plus</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec la règle qui décide</text>
  <line x1="200" y1="397.0" x2="250" y2="332" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1000" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter les exemples</text>
  <text x="1010" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cinq cas, jamais écrasés</text>
  <line x1="1000" y1="145.0" x2="471" y2="137" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1000" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernier passage</text>
  <text x="1010" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tenues / rompues gardées</text>
  <line x1="1000" y1="237.0" x2="810" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1000" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions par ligne</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rejouer · modifier · supprimer</text>
  <line x1="1000" y1="317.0" x2="870" y2="222" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
</svg>

---

## La liste des cas \{#list\}

**Tout rejouer** rejoue chaque cas ; **Ajouter les exemples** ajoute les [cas d'exemple](#samples). Le titre de l'onglet indique le nombre de cas.

| Colonne | Contenu |
|---|---|
| **Cas** | Le nom donné à l'enregistrement du cas. |
| **Concerne** | L'utilisateur, le rôle ou `*PUBLIC` visé par les attentes. |
| **Attentes** | Le nombre d'attentes du cas. |
| **Dernier passage** | La date du dernier passage, ou *jamais*. |
| **Tenues** / **Rompues** | Le résultat du dernier passage : le nombre d'attentes rompues est en rouge dès qu'une attente casse, en vert à 0. |
| — | **Rejouer** rejoue ce cas, **Modifier** ouvre l'[éditeur](#edit), **Supprimer** supprime le cas et ses attentes. |

Un cas se crée de trois façons : [enregistré depuis une simulation](./security-simulation.md#save) (chaque objet et chaque droit de la réponse deviennent une attente), ajouté depuis les exemples, ou rédigé à la main dans l'éditeur à partir d'un cas existant.

---

## Ce qui ne tient plus \{#failures\}

Après **Rejouer** ou **Tout rejouer**, un bandeau indique *Toutes les attentes tiennent.*, ou la liste **Ce qui ne tient plus** s'ouvre sous les cas, avec son nombre de lignes :

| Colonne | Contenu |
|---|---|
| **Cas** | Le cas auquel appartient l'attente. |
| **Objet**, **Droit** | L'objet et le droit — exécuter, ajouter, modifier ou supprimer. |
| **Attendu** | Ce que le cas attend : *oui* ou **NON**. |
| **La sécurité dit** | Ce que donne la sécurité actuelle. |
| **Décidé par** | La ligne qui décide désormais, sous la forme *qui on quoi* — ou *no rule* quand rien ne l'interdit. |

L'utilisateur est évalué avec les rôles qu'il détient le jour du passage, comme pour une [simulation](./security-simulation.md#rule). Les nombres d'attentes tenues et rompues sont conservés sur le cas.

---

## Cas d'exemple \{#samples\}

**Ajouter les exemples** ajoute cinq cas écrits pour des rôles types. Chacun nomme un **rôle fictif**, à remplacer par l'un des vôtres :

| Exemple | Concerne | Attentes |
|---|---|---|
| Accounts payable clerk (comptable fournisseurs) | `APCLERK` | Saisit les pièces fournisseurs (`P0411` : exécuter et ajouter) sans jamais les supprimer ; ne paie pas (`P0413M`), ne gère pas les fournisseurs (`P04012`) et ne comptabilise pas au grand livre (`P0911`). |
| Sales order entry (saisie des commandes clients) | `SALESORDER` | Saisit les commandes (`P4210` : exécuter et ajouter) ; ne gère ni les clients (`P03013`), ni les prix (`P4106`), ni le crédit (`P03B11`). |
| Buyer (acheteur) | `BUYER` | Saisit les commandes d'achat (`P4310` : exécuter et ajouter) ; ne réceptionne pas (`P4312`), ne saisit pas de pièces fournisseurs (`P0411`) et ne gère pas les fournisseurs (`P04012`). |
| Inquiry only (consultation seule) | `INQUIRY` | Ouvre `P0411` et `P4210` sans rien modifier : ajouter, modifier et supprimer refusés. |
| Nobody but administrators manages security (seuls les administrateurs gèrent la sécurité) | `*PUBLIC` | Personne n'ouvre les applications de sécurité (`P00950`, `P0092`, `P95921`, `P98OWSEC`). Garder `*PUBLIC` ou choisir un rôle ordinaire. |

Un exemple déjà ajouté — modifié ou non — n'est jamais écrasé : ajouter de nouveau les exemples n'ajoute que ceux qui manquent, ou affiche *Les exemples sont déjà là.* Tant que son rôle n'est pas remplacé, un exemple échoue ou porte sur un rôle inconnu de JD Edwards.

---

## Modifier un cas \{#edit\}

**Modifier** sur une ligne ouvre le cas au-dessus de la liste.

<svg viewBox="0 0 1200 345" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njce-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njce-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njce-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njce-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="282" rx="14" fill="url(#njce-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="40" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CAS</text>
  <text x="280" y="40" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample: replace APCLERK with your accounts payable role…</text>
  <line x1="220" y1="50" x2="980" y2="50" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="70" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NOM</text>
  <rect x="240" y="75" width="350" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="89.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable clerk</text>
  <text x="610" y="70" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">CONCERNE (UTILISATEUR, RÔLE OU &#42;PUBLIC)</text>
  <rect x="610" y="75" width="350" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="620" y="89.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">APCLERK ▾</text>
  <rect x="240" y="104" width="720" height="22" rx="5" fill="rgba(255,159,10,0.10)" stroke="rgba(255,159,10,0.50)" strokeWidth="1"/>
  <text x="250" y="119" fill="#fb923c" fontSize="9" fontFamily="system-ui, sans-serif">APCLERK n'est ni un utilisateur ni un rôle de ce JD Edwards : choisissez un des vôtres.</text>
  <text x="240" y="144" fill="#64748b" fontSize="7.5" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">NOTE</text>
  <rect x="240" y="149" width="720" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="163.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Sample: replace APCLERK with your accounts payable role. Enters vouchers, never deletes them…</text>
  <rect x="240" y="178" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="192.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P0411</text>
  <rect x="416" y="178" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="192.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Écran</text>
  <rect x="592" y="178" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="192.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">exécuter ▾</text>
  <rect x="748" y="178" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="192.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">permis ▾</text>
  <rect x="904" y="178" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="192.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="240" y="206" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P0411</text>
  <rect x="416" y="206" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="220.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Écran</text>
  <rect x="592" y="206" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">supprimer ▾</text>
  <rect x="748" y="206" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">refusé ▾</text>
  <rect x="904" y="206" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="220.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="240" y="234" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">P04012</text>
  <rect x="416" y="234" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="426" y="248.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Écran</text>
  <rect x="592" y="234" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="602" y="248.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">exécuter ▾</text>
  <rect x="748" y="234" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="248.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">refusé ▾</text>
  <rect x="904" y="234" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="932.0" y="248.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Retirer</text>
  <rect x="240" y="264" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="298.5" y="278.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter une attente</text>
  <rect x="365" y="264" width="112" height="22" rx="5" fill="url(#njce-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="421.0" y="278.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer le cas</text>
  <rect x="485" y="264" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="513.5" y="278.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom et qui</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">renommer, choisir un de vos rôles</text>
  <line x1="200" y1="87.0" x2="240" y2="85" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôle inconnu</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un rôle fictif à remplacer</text>
  <line x1="200" y1="167.0" x2="240" y2="115" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une attente par ligne</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">objet, écran, droit, attendu</text>
  <line x1="200" y1="247.0" x2="240" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Permis ou refusé</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que la sécurité doit dire</text>
  <line x1="1000" y1="247.0" x2="820" y2="189" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer le cas</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplace le cas entier</text>
  <line x1="200" y1="317.0" x2="365" y2="275" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njce-arrow)"/>
</svg>

| Champ | Usage |
|---|---|
| **Nom** | Le nom du cas ; il peut changer, tant qu'aucun autre cas ne le porte. |
| **Concerne (utilisateur, rôle ou \*PUBLIC)** | La personne ou le rôle visé. Quand ce n'est ni un utilisateur ni un rôle de ce JD Edwards — le rôle fictif d'un exemple — un avertissement le signale : choisir l'un des vôtres. |
| **Note** | Texte libre ; les exemples y décrivent ce que le rôle est censé faire. |
| Attentes | Une ligne chacune : **Objet**, **Écran** (facultatif, pour une attente sur un seul écran), le **droit** (exécuter, ajouter, modifier, supprimer) et **permis** ou **refusé**. **Retirer** supprime la ligne ; **Ajouter une attente** en ajoute une. |

**Enregistrer le cas** remplace le cas entier, attentes comprises ; les lignes sans objet sont ignorées. **Annuler** ferme l'éditeur sans enregistrer.

---

## Accès \{#access\}

L'onglet fait partie de la page Simulation de la sécurité, dans le dossier **Maintenance de la sécurité** ; les rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** y ont accès (voir [Rôles prédéfinis](../overview.md#roles)). Enregistrer, modifier ou supprimer un cas n'écrit que dans la base de Nomajde.

---

## Conseils & bonnes pratiques \{#tips\}

- **Un cas par rôle**, nommé d'après la fonction du rôle : une attente rompue désigne alors un seul rôle.
- **Conserver les refus.** Les attentes les plus utiles sont souvent les *NON* : une gestion des fournisseurs hors de portée du comptable fournisseurs, des applications de sécurité réservées aux administrateurs.
- **Tout rejouer après chaque changement** dans le Security Workbench, après [Refusionner la sécurité](../jobs.md#remerge) et après une promotion de la sécurité vers un autre environnement.
- **Partir des exemples** : remplacer le rôle fictif, adapter les objets aux applications réellement utilisées, puis ajouter les attentes propres au métier.
