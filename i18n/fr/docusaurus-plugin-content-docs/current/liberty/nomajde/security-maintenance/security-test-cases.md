---
title: Cas de test de la sécurité
description: "La sécurité JD Edwards EnterpriseOne testée comme tout autre test dans Nomajde (Tests → Cas, suite jde-security) : chaque étape interroge un point de la sécurité telle qu'elle est — ce qu'un utilisateur ou un rôle peut faire sur une application, si une tâche de menu est montrée, si un UDO est vu, ce qui est permis sur une colonne de table — avec la ligne qui décide ; paramètres choisis dans des listes, cinq cas d'exemple d'une sécurité fermée et séparée à adapter, et cas gardés depuis Simuler la sécurité."
keywords: [Nomajde, JD Edwards, JDE E1, cas de test de la sécurité, non-régression, jde-security, jde_security, Security Workbench, filtrage des menus, sécurité des UDO, sécurité des colonnes, cas d'exemple, Simuler la sécurité, rôles]
---

# Cas de test de la sécurité

Les cas de test de la sécurité assurent la non-régression d'un projet de sécurité JD Edwards EnterpriseOne. Un cas dit ce qu'un utilisateur, un rôle ou `*PUBLIC` doit pouvoir faire et ce qui doit lui être refusé — *peut exécuter P0411*, *ne voit pas le menu Supply Management*, *ne voit pas la colonne SSN de F060116* — et le jouer interroge la sécurité **telle qu'elle est maintenant**. Après un changement dans le Security Workbench, une fusion de rôles ou une promotion vers un autre environnement, une étape en échec indique ce qui n'est plus vrai.

Ce sont des cas des [tests](../tests.md) comme les autres : écrits, joués et comparés dans **Tests → Cas**, dans la suite **`jde-security`** (*JDE — who may do what*), avec leurs résultats dans **Tests → Résultats**. Jouer un cas ne fait que lire JD Edwards.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njtc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njtc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njtc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njtc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="440" rx="14" fill="url(#njtc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tests</text>
  <rect x="236" y="60" width="210" height="386" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="70" width="190" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="341.0" y="84.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouvelle suite</text>
  <text x="248" y="112" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE — WHO MAY DO WHAT</text>
  <rect x="242" y="122" width="198" height="20" rx="5" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="136" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="136" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts payable manager</text>
  <text x="250" y="160" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="160" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Accounts receivable ma…</text>
  <text x="250" y="184" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="184" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Buyer</text>
  <text x="250" y="208" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="208" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Security administrator</text>
  <text x="250" y="232" fill="#f87171" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✕</text>
  <text x="264" y="232" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Sample — Everybody is closed by…</text>
  <text x="250" y="256" fill="#4ade80" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">✓</text>
  <text x="264" y="256" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">AP_MANAGER — clôture mensuelle</text>
  <text x="250" y="280" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">+ Nouveau cas</text>
  <text x="250" y="304" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JDE — WHAT MUST KEEP WORKING</text>
  <rect x="458" y="60" width="88" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="502.0" y="74.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Jouer ce cas</text>
  <rect x="552" y="60" width="98" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="601.0" y="74.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Jouer la suite</text>
  <rect x="458" y="90" width="250" height="356" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="478" y="102" width="210" height="22" rx="11" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="583.0" y="117" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Sample — Accounts payable manager</text>
  <rect x="498" y="136" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="152" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✓ RIGHTS</text>
  <text x="510" y="168" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">P0411</text>
  <line x1="583.0" y1="182" x2="583.0" y2="196" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="196" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,69,58,0.45)" strokeWidth="1"/>
  <text x="510" y="212" fill="#f87171" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✕ RIGHTS</text>
  <text x="510" y="228" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">P4310</text>
  <line x1="583.0" y1="242" x2="583.0" y2="256" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="256" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="510" y="272" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✓ MENU</text>
  <text x="510" y="288" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Menu — Financials</text>
  <line x1="583.0" y1="302" x2="583.0" y2="316" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="316" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="332" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✓ UDO</text>
  <text x="510" y="348" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">WATCHLIST — Payments Ov…</text>
  <line x1="583.0" y1="362" x2="583.0" y2="376" stroke="#475569" strokeWidth="1"/>
  <rect x="498" y="376" width="170" height="46" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,69,58,0.45)" strokeWidth="1"/>
  <text x="510" y="392" fill="#f87171" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">✕ COLUMN</text>
  <text x="510" y="408" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">F060116.SSN</text>
  <rect x="724" y="60" width="360" height="386" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738" y="82" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">L'étape</text>
  <text x="738" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <rect x="738" y="106" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="120.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Menu — Financials</text>
  <text x="890" y="100" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINT D'ACCÈS APPELÉ</text>
  <rect x="890" y="106" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="900" y="120.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">menu  Whether a user or role is sho…  ▾</text>
  <text x="738" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRES</text>
  <rect x="738" y="152" width="332" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="748" y="170" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">User, role or &#42;PUBLIC</text>
  <rect x="748" y="175" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">AP_MANAGER  ×  ▾</text>
  <text x="910" y="170" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Task view</text>
  <rect x="910" y="175" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="920" y="189.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">91 EnterpriseOne Me…  ×  ▾</text>
  <text x="748" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Task</text>
  <rect x="748" y="219" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="758" y="233.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Financials  ×  ▾</text>
  <text x="910" y="214" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Folder</text>
  <rect x="910" y="219" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="920" y="233.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="748" y="258" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">A menu or a task of the task view.</text>
  <text x="910" y="258" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Only when the task sits in several…</text>
  <text x="738" y="296" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui est attendu</text>
  <text x="738" y="316" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">L'APPEL</text>
  <rect x="738" y="322" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="336.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">doit fonctionner  ▾</text>
  <text x="738" y="366" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UNE VALEUR DE LA RÉPONSE BRUTE EST ÉGALE À — CHEMIN, VALEUR</text>
  <rect x="738" y="372" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="386.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">shown</text>
  <rect x="896" y="372" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="906" y="386.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">Y</text>
  <rect x="738" y="415" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M740.5,420.5 L742.8,422.8 L746.8,418" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="755" y="424" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Jouée même après un échec (un nettoyage)</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La suite jde-security</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cinq exemples, puis vos cas</text>
  <line x1="200" y1="117.0" x2="242" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Gardé depuis la simulation</text>
  <text x="30" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Garder comme cas de test…</text>
  <line x1="200" y1="277.0" x2="246" y2="254" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une étape par point vérifié</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rights · menu · udo · column</text>
  <line x1="200" y1="397.0" x2="498" y2="400" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1140" y="150" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Choisis en liste</text>
  <text x="1150" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui, vue, tâche, dossier</text>
  <line x1="1140" y1="167.0" x2="1070" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
  <rect x="1140" y="370" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1150" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qui doit être vrai</text>
  <text x="1150" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">shown, seen, run… = Y ou N</text>
  <line x1="1140" y1="387.0" x2="1070" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njtc-arrow)"/>
</svg>

---

## Les quatre appels de sécurité \{#endpoints\}

Chaque étape d'un cas de sécurité appelle un point d'accès du connecteur `jde_security` et attend certaines valeurs de sa réponse. Chaque réponse est calculée comme JD Edwards la décide : un utilisateur est pris avec les rôles qu'il détient aujourd'hui, puis `*PUBLIC` (voir [Comment cela se décide](../reviews/simulate-security.md#rule)).

| Point d'accès | Question posée | Paramètres | Réponse |
|---|---|---|---|
| **`rights`** — *What a user or role may do on an object* | Une application, un écran ou un état | **User, role or \*PUBLIC**, **Object**, **Form** et **Version** (facultatifs) | `run`, `add`, `change`, `delete`, chacun `Y` ou `N`, et pour chacun la ligne qui décide (`run_by`…). |
| **`menu`** — *Whether a user or role is shown a menu task* | Un menu ou une tâche d'une vue de tâches | **User, role or \*PUBLIC**, **Task view**, **Task**, **Folder** (facultatif) | `shown`, `Y` ou `N` ; `places` et `hidden_places` comptent les emplacements de la tâche et ceux où elle est masquée. Une tâche présente dans plusieurs dossiers est montrée dès qu'un de ses emplacements l'est ; **Folder** restreint la question à l'un d'eux. |
| **`udo`** — *Whether a user or role sees a UDO* | Un objet défini par l'utilisateur | **User, role or \*PUBLIC**, **Kind of UDO**, **UDO** | `seen`, `Y` ou `N`, son nom (`name`) et `by`, la ligne qui décide. |
| **`column`** — *What a user or role may do on a table's column* | Une colonne d'une table | **User, role or \*PUBLIC**, **Table**, **Column** (l'élément de données, sans le préfixe de la table) | `view`, `add`, `change`, chacun `Y` ou `N`, et pour chacun la ligne qui décide (`view_by`…). Une colonne qu'aucune ligne ne nomme est autorisée. |

---

## Des paramètres choisis dans des listes \{#lists\}

Aucun paramètre de ces points d'accès n'est à saisir : chacun se choisit dans une liste — dans l'étape d'un cas, dans l'exécuteur HTTP et partout où le point d'accès est appelé à la main. Une longue liste s'ouvre en tableau (**Ouvrir en tableau**), avec ses colonnes et ses filtres.

| Paramètre | La liste |
|---|---|
| **User, role or \*PUBLIC** | Les utilisateurs et les rôles de JD Edwards, et `*PUBLIC`, filtrables par nature. |
| **Object**, **Table** | Les objets de l'Object Librarian, filtrables par type. |
| **Task view** | Les vues de tâches. |
| **Task**, **Folder** | Les menus et tâches de la vue choisie, chacun avec le dossier où il se trouve et l'application qu'il lance ; l'identifiant technique de la tâche n'est pas affiché. |
| **Kind of UDO** | Les natures d'objets définis par l'utilisateur. |
| **UDO** | Les UDO de la nature choisie, par nom. |
| **Column** | Les colonnes de la table choisie. |

Une liste qui dépend d'un autre paramètre — les tâches d'une vue, les UDO d'une nature, les colonnes d'une table — attend ce paramètre. Une valeur absente de la liste peut toujours être saisie. Les quatre dernières listes sont des listes de valeurs du dictionnaire de Nomajde : *Tasks of a task view*, *Kinds of UDO*, *UDOs of a kind*, *Columns of a table*.

---

## Écrire un cas \{#write\}

1. Dans **Tests → Cas**, choisir la suite **JDE — who may do what** puis **Nouveau cas** — ou **Cas depuis un point d'accès**, qui prépare une première étape à partir de l'un des quatre points d'accès avec sa réponse actuelle.
2. Le **+** du flux ajoute une étape. **Point d'accès appelé** : l'un des quatre points d'accès de sécurité. **Paramètres** : qui, puis l'objet, le menu, l'UDO ou la colonne, chacun choisi dans sa liste.
3. **Remplir depuis la réponse** joue l'appel tout de suite et propose les valeurs attendues. Sous **Ce qui est attendu**, **Une valeur de la réponse brute est égale à — chemin, valeur** porte les réponses qui doivent rester vraies : `run` = `Y`, `shown` = `N`, `seen` = `N`, `view` = `N`…
4. Cocher **Jouée même après un échec (un nettoyage)** sur chaque étape : chaque point est alors interrogé, quel que soit le résultat de l'étape précédente.
5. **Enregistrer**, puis **Jouer ce cas**.

Un cas par utilisateur ou par rôle, nommé d'après la fonction du rôle, garde un échec lisible : il désigne un seul rôle.

---

## Un cas gardé depuis Simuler la sécurité \{#from-simulate\}

Dans [Simuler la sécurité](../reviews/simulate-security.md#keep), **Garder comme cas de test…** transforme ce que présentent les onglets en un cas de la suite `jde-security`, **avec la sécurité d'aujourd'hui** : une étape par application, tâche de menu, UDO ou colonne présenté, avec sa réponse actuelle comme valeur attendue. Un cas de même nom est remplacé.

La même fenêtre propose, une seule fois, de reprendre dans les tests les cas de sécurité enregistrés dans la base propre de Nomajde (**Reprendre mes n ancien(s) cas dans Tests**) ; les exemples de cette base sont laissés de côté, la suite a les siens.

---

## Cas d'exemple \{#samples\}

La suite `jde-security` est livrée avec cinq cas d'exemple d'une **sécurité fermée et séparée**, écrits sur les rôles, menus et listes de surveillance livrés par JD Edwards. Ce sont des points de départ : remplacer chaque rôle par l'un des vôtres, puis adapter les valeurs attendues. Sur un système dont la sécurité est restée ouverte, ils échouent là où elle l'est — c'est leur rôle.

| Exemple | Porte sur | Ce qu'il attend |
|---|---|---|
| **Accounts payable manager** | `APMGRJDE` | Saisit les factures fournisseurs (`P0411` : exécuter, ajouter) et les paiements manuels (`P0413M`) ; ni commandes d'achat (`P4310`), ni crédit (`P03B11`), ni Security Workbench (`P00950`). Voit le menu Financials, ni Supply Management ni EnterpriseOne Life Cycle Tools ; voit la liste de surveillance *Payments Overdue*, pas *Held Purchase Orders* ; ne voit pas `F060116.SSN`. |
| **Accounts receivable manager** | `ARMGRJDE` | Traite les créances (`P03B11` : exécuter, ajouter ; `P03B102`) ; ni factures fournisseurs, ni paiements, ni Security Workbench. Ne voit que Financials ; voit *Credit Review Overdue*, pas *Payments Overdue* ; ne voit pas `F060116.SSN`. |
| **Buyer** | `BUYERJDE` | Saisit les commandes d'achat (`P4310` : exécuter, ajouter) ; ne réceptionne pas (`P4312`), ne saisit pas de facture fournisseur et ne paie pas ; consulte la fiche fournisseur (`P04012`) sans ajouter, modifier ni supprimer. Ne voit que Supply Management ; voit *Held Purchase Orders* ; ne voit ni `F0030.CBNK` ni `F060116.SSN`. |
| **Security administrator** | `SYSADMIN` | Exécute les applications de sécurité (`P00950` avec tous les droits, `P0092`, `P95921`) ; ne saisit aucune facture fournisseur et n'effectue aucun paiement. Voit EnterpriseOne Life Cycle Tools. |
| **Everybody is closed by default** | `*PUBLIC` | Personne n'exécute les applications de sécurité et d'OMW (`P00950`, `P0092`, `P95921`, `P98OWSEC`, `P98220`), ni `P0411` et `P4210` ; les menus EnterpriseOne Life Cycle Tools et Development Utilities sont masqués ; la page EnterpriseOne est vue, *Payments Overdue* ne l'est pas ; `F060116.SSN` et `F0030.CBNK` ne sont pas visibles. |

---

## Jouer les cas \{#play\}

**Jouer ce cas** joue le cas ouvert, **Jouer la suite** tous les cas de `jde-security` ; le flux marque chaque étape réussie ou en échec, et **Tests → Résultats** conserve les dernières exécutions de la suite. Pour une application, un UDO ou une colonne, la réponse d'une étape en échec nomme la ligne qui décide (`run_by`, `by`, `view_by`…) : la correction porte sur le bon utilisateur, le bon rôle ou la bonne ligne `*ALL`.

---

## Accès \{#access\}

Les cas se trouvent dans le dossier **Tests** du menu Nomajde (**Tests → Cas**, **Tests → Résultats**). Les écrire et les jouer demande les permissions de test de la plateforme (voir [Tests](../tests.md#access)). **Garder comme cas de test…** fait partie de [Simuler la sécurité](../reviews/simulate-security.md), accessible aux rôles prédéfinis **Administrateur de la sécurité** et **Administrateur** ; tous deux ouvrent aussi les Tests et lancent la tâche de tests, si bien que les cas gardés se jouent et se planifient.

La connexion utilisée pour lire JD Edwards doit pouvoir lire le Security Workbench (`F00950`), le filtrage des menus (`F9006`) et les menus (`F9000`, `F9001`), la sécurité des UDO (`F00950W`) et leur catalogue (`F9860W`), les profils (`F0092`), les rôles (`F00926`), les affectations de rôles (`F95921`) et l'Object Librarian (`F9860`).

---

## Conseils & bonnes pratiques \{#tips\}

- **Garder les refus.** Les attentes les plus importantes sont souvent les `N` : une fiche fournisseur qu'un acheteur ne doit pas modifier, une application de sécurité réservée aux administrateurs, une colonne de données personnelles cachée à tous.
- **Jouer la suite après chaque changement** du Security Workbench, après [Refusionner la sécurité](../jobs.md#remerge) et après une promotion de la sécurité vers un autre environnement.
- **Partir des exemples** : remplacer le rôle livré par le vôtre, adapter les objets aux applications réellement utilisées, puis ajouter ce qui est propre au métier.
- **Garder un cas depuis Simuler la sécurité** une fois un changement appliqué : la nouvelle sécurité devient la référence attendue.
