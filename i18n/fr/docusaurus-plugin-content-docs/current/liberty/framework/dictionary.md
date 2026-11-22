---
title: Dictionnaire
description: "Le dictionnaire définit une seule fois chaque donnée — libellé, format, règle, valeur par défaut, traductions — et chaque colonne de requête qui y renvoie hérite de cette définition. Entrées, énumérations, lookups, séquences et listes du framework, partagés ou par connecteur, dans Liberty Next → Données → Dictionnaire."
keywords: [Liberty Next, dictionnaire, entrées, énumérations, lookups, séquences, libellés, formats, règles, BOOLEAN, ENUM, LOOKUP, SEQUENCE, LOGIN, SYSDATE, PASSWORD, traductions]
---

# Dictionnaire

Le **dictionnaire** définit une seule fois chaque donnée : son libellé, son format, sa règle (booléen, liste de valeurs, lookup, séquence…), sa valeur par défaut et ses traductions. Une colonne de requête qui renvoie à une entrée hérite de cette définition : la même donnée se lit donc de la même façon sur tous les écrans, graphiques et tableaux de bord.

Il se modifie dans **Liberty Next → Données → Dictionnaire**, qui regroupe cinq types d'éléments :

| Onglet | Contenu |
|---|---|
| **Entrées** | Les données : libellé, format, règle, valeur par défaut, traductions. |
| **Énumérations** | Des listes fixes de codes et de libellés, pour la règle `ENUM`. |
| **Lookups** | Des requêtes qui remplacent un code par son libellé, pour la règle `LOOKUP`. |
| **Séquences** | Des requêtes qui renvoient le numéro suivant, pour la règle `SEQUENCE`. |
| **Framework** | Les surcharges des listes proposées par les éditeurs (formats, règles, types de source…). |

---

## Vue d'ensemble

<svg viewBox="0 0 1320 520" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="880" height="492" rx="14" fill="url(#dic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="238" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Dictionnaire</text>
  <rect x="583" y="32" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="644.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Analyser une table</text>
  <rect x="711" y="32" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="744.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter</text>
  <rect x="783" y="32" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="822.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Abandonner</text>
  <rect x="867" y="32" width="83" height="22" rx="5" fill="url(#dic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="956" y="32" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1020.0" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Recharger la config</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="96" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connecteur :</text>
  <rect x="310" y="82" width="55" height="22" rx="11" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="337.5" y="97" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Partagé</text>
  <rect x="371" y="82" width="35" height="22" rx="11" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="388.5" y="97" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="412" y="82" width="45" height="22" rx="11" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="434.5" y="97" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">sales</text>
  <rect x="463" y="82" width="122" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="524.0" y="96.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une portée</text>
  <rect x="238" y="116" width="87" height="24" rx="5" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.5" y="132" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Entrées  128</text>
  <text x="380.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Énumérations  4</text>
  <text x="474.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Lookups  6</text>
  <text x="560.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Séquences  2</text>
  <text x="651.5" y="132" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Framework  0</text>
  <rect x="948" y="117" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1015.0" y="131.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une entrée</text>
  <line x1="238" y1="148" x2="1082" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <rect x="238" y="158" width="250" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="166" width="234" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="180.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕  filtrer 128…</text>
  <rect x="246" y="196" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="212" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="256" y="226" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Numéro de client</text>
  <rect x="428" y="208" width="40" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="448.0" y="219.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">number</text>
  <rect x="246" y="242" width="234" height="40" rx="6" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="258" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_STATUS</text>
  <text x="256" y="272" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Statut du client</text>
  <rect x="428" y="254" width="40" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="448.0" y="265.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LOOKUP</text>
  <rect x="246" y="288" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="304" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">DUE_DATE</text>
  <text x="256" y="318" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Date d'échéance</text>
  <rect x="437" y="300" width="31" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="452.5" y="311.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">date</text>
  <rect x="246" y="334" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="350" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">IS_ACTIVE</text>
  <text x="256" y="364" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Actif</text>
  <rect x="423" y="346" width="45" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="445.5" y="357.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">BOOLEAN</text>
  <rect x="374" y="346" width="45" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="396.5" y="357.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">boolean</text>
  <rect x="246" y="380" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="396" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">UPDATED_BY</text>
  <text x="256" y="410" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Modifié par</text>
  <rect x="432" y="392" width="36" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="450.0" y="403.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">LOGIN</text>
  <rect x="246" y="426" width="234" height="40" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="442" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">UPDATED_AT</text>
  <text x="256" y="456" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Modifié le</text>
  <rect x="423" y="438" width="45" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="445.5" y="449.2" fill="#c084fc" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SYSDATE</text>
  <rect x="388" y="438" width="31" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="403.5" y="449.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">date</text>
  <rect x="500" y="158" width="582" height="330" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="180" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">[connectors.crm.entries.CUSTOMER_STATUS]</text>
  <rect x="512" y="190" width="142" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="583.0" y="204.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rechercher les usages  3</text>
  <rect x="659" y="190" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="690.0" y="204.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Renommer</text>
  <rect x="726" y="190" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="752.0" y="204.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Cloner</text>
  <rect x="783" y="190" width="67" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="816.5" y="204.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <text x="542.5" y="238" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <rect x="577" y="222" width="45" height="24" rx="5" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="599.5" y="238" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Rule</text>
  <text x="669.5" y="238" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <text x="750.0" y="238" fill="#cbd5e1" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <line x1="512" y1="252" x2="1070" y2="252" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="270" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULES</text>
  <rect x="512" y="276" width="273.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="290.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">LOOKUP  Lookup</text>
  <text x="771.0" y="290.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="797.0" y="270" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RULES VALUES</text>
  <rect x="797.0" y="276" width="273.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="806.0" y="290.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_STATUSES</text>
  <text x="1056.0" y="290.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="512" y="312" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FALSE VALUE</text>
  <rect x="512" y="318" width="273.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="312" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEFAULT</text>
  <rect x="797.0" y="318" width="273.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="806.0" y="332.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">A</text>
  <text x="512" y="354" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">JUSTIFY</text>
  <rect x="512" y="360" width="273.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="374.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="771.0" y="374.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="797.0" y="354" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SIZE</text>
  <rect x="797.0" y="360" width="273.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="512" y="398" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SENSITIVE</text>
  <rect x="512" y="409" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="529" y="418" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">disabled</text>
  <text x="512" y="436" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LOOKUP PARAMS</text>
  <rect x="512" y="442" width="558" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="521" y="456.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">TYPE = CUSTOMER</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Portées</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">partagée ou par connecteur</text>
  <line x1="200" y1="83.0" x2="238" y2="93" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="20" y="114" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="129" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq onglets</text>
  <text x="30" y="142" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur compteur</text>
  <line x1="200" y1="131.0" x2="238" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="20" y="162" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="177" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre</text>
  <text x="30" y="190" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom, libellé, format ou règle</text>
  <line x1="200" y1="179.0" x2="246" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La ligne d'une entrée</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son format et sa règle</text>
  <line x1="200" y1="253.0" x2="246" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="34" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de la page</text>
  <text x="1130" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">analyse, export, enregistrement</text>
  <line x1="1120" y1="51.0" x2="1084" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre de l'enregistrement</text>
  <text x="1130" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">usages, renommer, cloner, supprimer</text>
  <line x1="1120" y1="197.0" x2="1070" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Rule</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">règle, valeur, défaut…</text>
  <line x1="1120" y1="267.0" x2="622" y2="234" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
  <rect x="1120" y="430" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lookup params</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeurs des :params du lookup</text>
  <line x1="1120" y1="447.0" x2="1070" y2="453" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dic-arrow)"/>
</svg>

---

## La liste \{#list\}

Chaque type a son onglet — **Entrées**, **Énumérations**, **Lookups**, **Séquences**, **Framework** — avec le nombre d'enregistrements de la portée. La ligne d'un enregistrement dit ce qu'il est sans l'ouvrir : une entrée affiche son format et sa règle (la cible de la règle en infobulle), une énumération son nombre de valeurs, un lookup ou une séquence l'autre connecteur lu. Le filtre retrouve un enregistrement par son nom, son libellé ou l'un de ces éléments : saisir `lookup` affiche toutes les entrées régies par un lookup. Sur l'enregistrement choisi, **Rechercher les usages** indique le nombre d'endroits où il est utilisé. **Analyser une table**, **Exporter**, **Abandonner** et **Enregistrer** se trouvent dans l'en-tête de la page.

---

## Portées \{#scopes\}

Les pastilles **Connecteur :** en haut de l'écran choisissent la partie du dictionnaire affichée :

- **Partagé** — les entrées utilisables par tous les connecteurs ;
- **une portée par connecteur** — des entrées, énumérations, lookups et séquences visibles des seules requêtes de ce connecteur. **＋ Ajouter une portée** ajoute la portée d'un connecteur existant.

Une requête du connecteur `sales` cherche d'abord l'entrée dans la portée `sales`, puis dans la portée partagée. Deux applications peuvent ainsi définir différemment la même clé (`STATUS`) sans conflit. L'onglet **Framework** n'existe qu'en portée partagée.

---

## Lien entre une colonne et une entrée \{#column-reference\}

Une colonne de requête reprend l'entrée dont la clé correspond à son nom (`CUSTOMER_STATUS`), ou l'entrée indiquée dans son champ `dd` quand les noms diffèrent (un `dd` vide désactive le lien). Un libellé ou un format défini sur la colonne elle-même prime sur celui de l'entrée. Voir [Connecteurs → Découverte de schéma et indices de colonnes](./connectors.md#schema-discovery-and-column-hints).

Sur un écran, une colonne peut aussi neutraliser la règle héritée avec la règle `DISABLED` — voir [Règles](#rules).

---

## Entrées \{#entries\}

La liste de gauche affiche la clé de chaque entrée, son libellé en dessous, et un champ de filtre. Les clés s'écrivent en majuscules. L'entrée choisie s'ouvre à droite sous son nom complet (`[connectors.crm.entries.CUSTOMER_STATUS]`), son formulaire réparti en onglets :

| Onglet | Champ | Effet |
|---|---|---|
| General | **Label** | Le libellé par défaut, utilisé quand aucune traduction ne correspond à la langue de l'utilisateur. |
| General | **Format** | La façon d'afficher et de saisir la valeur — voir [Formats](#formats). |
| General | **Decimals** | Pour `jdenumber`, le nombre de décimales implicites de l'entier stocké ; pour les autres formats numériques, le nombre de décimales affichées (0 à 9). |
| Rule | **Rules** | La règle appliquée à la donnée — voir [Règles](#rules). |
| Rule | **Rules values** | L'argument de la règle : la valeur « vrai » pour `BOOLEAN`, l'énumération pour `ENUM`, le lookup pour `LOOKUP`, la séquence pour `SEQUENCE`. La liste proposée suit la règle choisie. |
| Rule | **False value** | Pour `BOOLEAN` uniquement : la valeur écrite quand la case est décochée. Vide, elle se déduit de la valeur « vrai » (`Y` → `N`, `1` → `0`, `true` → `false`) ; pour toute autre valeur, NULL est écrit. |
| Rule | **Default** | La valeur initiale d'une nouvelle ligne. |
| Rule | **Justify** | Pour les colonnes caractères de longueur fixe : `right_blank` (cadrage à droite, complété par des espaces) ou `right_zero` (cadrage à droite, complété par des zéros). Appliqué aux valeurs écrites et aux clés de la clause WHERE. Vide = cadrage à gauche. |
| Rule | **Size** | La longueur de stockage de la donnée, utilisée avec **Justify** quand la colonne physique est plus large. |
| Rule | **Sensitive** | Signale une donnée sensible — voir [Données sensibles](#sensitive). |
| Rule | **Lookup params** | Des valeurs fixes pour les `:params` de la requête du lookup (par exemple `TYPE = CUSTOMER`). Les clés proposées sont les paramètres déclarés par le lookup. |
| Translations | une ligne par langue | Le libellé dans cette langue. |
| Advanced | **Override** | Marque l'entrée comme personnalisation locale : un package de mise à jour ne l'écrase pas. |

La barre de l'élément propose **Find usages**, **Renommer**, **Cloner** et **Supprimer**. Renommer une entrée, un lookup ou une séquence met à jour ses références dans les autres fichiers de configuration (écrans, connecteurs, dictionnaire) puis recharge la configuration ; les modifications en attente doivent d'abord être enregistrées.

### Formats \{#formats\}

| Format | Affichage |
|---|---|
| `text`, `textarea` | Du texte, sur une ou plusieurs lignes. |
| `number`, `integer`, `decimal`, `currency` | Un nombre. |
| `date`, `datetime`, `timestamp` | Une date, avec ou sans l'heure. Le formulaire, la saisie en masse et les filtres proposent le sélecteur de date de l'application : un champ où la date reste saisissable (un jour impossible rétablit la valeur précédente) et un calendrier mensuel avec *Aujourd'hui* et *Effacer*, dont le titre ouvre le choix du mois et de l'année. Un champ `datetime` ou `timestamp` y ajoute un champ d'heure (`hh:mm` ou `hh:mm:ss`). Une valeur qui porte son fuseau horaire (un `timestamptz` PostgreSQL) s'affiche à l'heure locale du navigateur ; une valeur sans fuseau (`DATE` Oracle, dates JD Edwards) s'affiche telle qu'elle est stockée. |
| `jdedate`, `jdetime` | Une date (CYYDDD) ou une heure (HHMMSS) JD Edwards, affichée comme une date ou une heure ordinaire. |
| `jdenumber` | Un montant JD Edwards stocké sans sa virgule : avec **Decimals** à 2, la valeur stockée `12345` se lit et se saisit `123,45`, puis s'écrit de nouveau `12345`. Les filtres se saisissent en unités réelles ; les totaux et les lignes de détail de l'explorateur de données sont ramenés à la même échelle. L'[analyse](#scan-a-table) d'une table JD Edwards renseigne les décimales d'après le dictionnaire de données. |
| `boolean` | Une coche ou une croix. |
| `password` | Une valeur masquée. |
| `url` | Un lien qui s'ouvre dans un nouvel onglet ; dans le formulaire, un bouton à côté du champ l'ouvre. Seules les adresses `http(s)` deviennent des liens (`www.…` reçoit `https://`). |
| `email` | Un lien `mailto:` ; dans le formulaire, un bouton à côté du champ l'ouvre. Seule une valeur ayant la forme d'une adresse devient un lien. |
| `color` | Le code, accompagné d'une pastille de couleur ; dans le formulaire, la pastille ouvre le sélecteur de couleur du système. Codes hexadécimaux et `rgb()` uniquement. |

Pour `url`, `email` et `color`, toute autre valeur reste du texte simple, et le tri, le filtrage et l'export conservent la valeur brute.

L'onglet **Framework** permet d'ajouter des valeurs à cette liste.

### Règles \{#rules\}

| Règle | Effet |
|---|---|
| `BOOLEAN` | La valeur s'affiche par une coche ou une croix, et le formulaire présente une case à cocher. **Rules values** donne la valeur « vrai » (`Y`, `1`, `01`, `true`, `T`) ; **False value**, l'autre. |
| `ENUM` | Le code s'affiche avec son libellé tiré de l'énumération indiquée dans **Rules values** ; le formulaire propose les valeurs de l'énumération. |
| `LOOKUP` | Le code s'affiche avec son libellé tiré du lookup indiqué dans **Rules values** ; le formulaire propose les lignes du lookup dans une liste avec recherche. |
| `SEQUENCE` | À l'insertion, le serveur renseigne la colonne avec le numéro suivant de la séquence indiquée dans **Rules values**, dans la même transaction. |
| `LOGIN` | À chaque insertion ou mise à jour, le serveur écrit le nom de l'utilisateur connecté, en majuscules, quelle que soit la valeur envoyée. À l'ajout d'une ligne, le formulaire l'affiche déjà renseigné. |
| `SYSDATE` | À l'insertion ou à la mise à jour, le serveur écrit la date et l'heure courantes (heure locale du serveur) si aucune valeur n'est envoyée. À l'ajout d'une ligne, le formulaire affiche la date du jour. |
| `PASSWORD` | À l'écriture, le serveur chiffre la valeur avec la clé maître (`ENC:…`) afin de pouvoir la déchiffrer à l'usage — pour les mots de passe de connexion stockés dans une table. Un mot de passe laissé vide en mise à jour conserve la valeur enregistrée. À associer au format `password` pour masquer le champ. |
| `DEFAULT` | À l'insertion ou à la mise à jour, la valeur **Default** est écrite quand la colonne arrive vide. |
| `DISABLED` | Sur une colonne d'écran : annule, pour cet écran, la règle héritée de l'entrée (par exemple un écran d'import dont les lignes portent déjà leurs dates). |

Les règles appliquées par le serveur (`SEQUENCE`, `LOGIN`, `SYSDATE`, `PASSWORD`, `DEFAULT`) valent pour toute écriture passant par la requête — formulaire, saisie dans la grille, API — et pas seulement pour le formulaire. Une requête d'écriture peut aussi horodater explicitement avec des jetons comme `{{LOGIN}}` ou `{{SYSDATE}}` — voir [Liaison des paramètres](./build/queries/parameter-binding.md).

### Données sensibles \{#sensitive\}

**Sensitive**, dans l'onglet *Rule* d'une entrée, indique que l'élément porte une donnée sensible — le nom d'une personne, une adresse e-mail, un identifiant bancaire. Quand l'installation masque les données sensibles à l'assistant IA, toutes les colonnes qui portent l'élément sont écartées de ce que l'assistant reçoit, dans le panneau comme en MCP. Les écrans ne changent pas. Une colonne d'écran a le même indicateur, pour une colonne sans élément. Voir [Données sensibles](./ai-data-sent.md#sensitive).

### Colonnes d'audit \{#form-layer-defaults\}

Une règle s'applique à toute écriture dont la requête lie la colonne :

| Colonne | Règle | Condition |
|---|---|---|
| `UPDATED_BY` | `LOGIN` | — |
| `UPDATED_AT` | `SYSDATE` | La colonne doit arriver vide : la laisser hors du dialogue. |
| `CREATED_BY`, `CREATED_AT` | `LOGIN`, `SYSDATE` | Seulement si la requête de mise à jour ne les écrit pas — sinon chaque mise à jour les remplacerait. |
| `ID` | `SEQUENCE` | Quand la base ne numérote pas elle-même les lignes. |

Les jetons `{{LOGIN}}` / `{{SYSTIMESTAMP}}` écrits dans les requêtes d'insertion et de mise à jour sont le moyen le plus simple de renseigner ces colonnes — voir [Piste d'audit](./cookbook/audit-trail.md).

Ces colonnes n'ont pas à figurer dans le formulaire : le serveur les renseigne à chaque écriture, et le navigateur ne peut pas modifier le nom de l'utilisateur.

---

## Énumérations \{#enums\}

Une énumération est une liste fixe de codes, pour des valeurs connues à l'avance (`L` / `M` / `H` pour une priorité).

| Champ | Effet |
|---|---|
| **Label** | Le nom de la liste. |
| **Values** | Une ligne par code : **Value** (le code stocké), **Label** (le texte affiché) et les **Translations** du libellé. |
| **Override** | Comme pour les entrées. |

Une entrée l'utilise avec **Rules** = `ENUM` et **Rules values** = l'identifiant de l'énumération.

---

## Lookups \{#lookups\}

Un lookup est une requête dont les lignes remplacent un code par un libellé — pour des valeurs tenues dans une table (statuts, pays, utilisateurs).

| Champ | Effet |
|---|---|
| **Description** | Ce que renvoie le lookup. |
| **Connector** | Le connecteur de la requête. Vide : le connecteur de la colonne qui y renvoie. |
| **Query** | La requête qui renvoie codes et libellés. Les boutons voisins modifient la requête, la clonent, en créent une ou la **génèrent** à partir d'une table. |
| **Value** | La colonne de résultat qui porte le code. |
| **Label** | La colonne de résultat affichée à la place du code. |
| **Union sources** | D'autres requêtes, éventuellement sur d'autres connecteurs ou d'autres bases, dont les lignes s'ajoutent à la liste. Chacune doit renvoyer les mêmes colonnes que la requête principale. |
| **Key columns** | Les colonnes qui rendent le code unique quand un même code porte des libellés différents (un code par société, par exemple) : la grille les rapproche des colonnes de même nom de la ligne. |
| **Return params** | Les colonnes qu'une colonne d'écran peut recopier dans d'autres champs du formulaire au choix d'une ligne. |
| **Display fields** | Des colonnes supplémentaires affichées à côté du code et du libellé, pour distinguer des lignes proches. |
| **Filter fields** | Les colonnes affichées qui reçoivent des pastilles de filtre en haut de la liste. |
| **Override** | Comme pour les entrées. |

La requête du lookup déclare ses propres `:params` ; leurs valeurs viennent du champ **Lookup params** de l'entrée, ou de la colonne d'écran. Les listes en cascade se construisent sur l'écran — voir [Séquences et lookups](./build/queries/sequences-and-lookups.md).

---

## Séquences \{#sequences\}

Une séquence est une requête qui renvoie le numéro suivant, typiquement `SELECT COALESCE(MAX(id), 0) + 1 FROM invoices`.

| Champ | Effet |
|---|---|
| **Description** | Ce que numérote la séquence. |
| **Connector** | Le connecteur de la requête. Vide : le connecteur qui la déclenche. |
| **Query** | La requête qui renvoie le numéro suivant. Ses `:params` prennent leurs valeurs dans la ligne en cours d'insertion. |
| **Dd id** | Déclenche la séquence pour toute colonne dont l'entrée porte cette clé, même sans la règle `SEQUENCE`. Vide : seules les entrées qui y renvoient la déclenchent. |
| **Params** | Les paramètres attendus par la requête — à titre d'information. |
| **Override** | Comme pour les entrées. |

La séquence ne se déclenche qu'à l'insertion, dans la transaction de l'insertion.

---

## Framework \{#framework\}

Les listes déroulantes des éditeurs (formats, règles, types de source, méthodes HTTP, alignements de colonne…) proviennent de listes livrées avec le framework. **Surcharger un enum framework** en copie une ici pour la modifier : la copie remplace la liste livrée. **Retirer la surcharge** rétablit les valeurs d'origine.

---

## Analyser une table \{#scan-a-table\}

Le bouton **Scan a table** crée des entrées à partir d'une table réelle, au lieu de les saisir une à une. La fenêtre *Generate dictionary items* demande :

- **Connector** — le connecteur à lire ;
- **Store under (app)** — la portée qui reçoit les entrées (celle du connecteur par défaut) ;
- **Table to scan** — la table à analyser ;
- **JD Edwards connector** — retire le préfixe de table de deux caractères pour retrouver la donnée partagée, et lit le dictionnaire de données JD Edwards.

**Scan** affiche une ligne par colonne. Les colonnes qui ont déjà une entrée sont grisées et marquées *(exists)* ; elles ne sont jamais écrasées. Les colonnes manquantes sont cochées. Chaque ligne peut être ajustée avant l'ajout :

| Colonne | Contenu |
|---|---|
| **Label** | Repris du dictionnaire de données JD Edwards sur un connecteur JD Edwards ; vide sinon. |
| **Format** | Déduit du type SQL de la colonne. |
| **Rule** / **Rule value** | Une règle facultative et son argument. |
| **Lookup params** | Les valeurs des paramètres d'un lookup (`TYPE=CUSTOMER`). |
| **Default** | Une valeur par défaut. |
| **Source** | L'origine de la proposition. |

**Add N item(s)** écrit les entrées cochées dans la portée choisie et recharge la configuration. L'[Assistant de création d'écran](./build/screen-assistant.md) effectue la même analyse à son étape *Dictionnaire*.

---

## Export \{#export\}

**Exporter** télécharge `dictionary_entries.xlsx` : une ligne par entrée, toutes portées confondues, avec sa portée, sa clé, son libellé, son format, sa règle, l'argument de la règle, la valeur « faux » et la valeur par défaut — pratique pour comparer avec le dictionnaire de données de l'application source.

---

## Enregistrement

**Enregistrer** vérifie chaque entrée, énumération, lookup et séquence, écrit le fichier et recharge la configuration : les écrans affichent les nouveaux libellés à leur prochain rafraîchissement. **Abandonner** annule les modifications non enregistrées. Les Paramètres sont réservés aux superutilisateurs.

Les libellés traduits suivent la langue de l'utilisateur ; le choix de cette langue est décrit dans [Traductions](./apps/i18n.md).

---

## Pour aller plus loin

- [Connecteurs](./connectors.md) — les requêtes dont les colonnes utilisent le dictionnaire.
- [Séquences et lookups](./build/queries/sequences-and-lookups.md) — construire les requêtes correspondantes.
- [Écrans → Colonnes](./build/screens/columns.md) — les réglages propres à un écran, par-dessus l'entrée.
- [Conditions de formulaire](./form-conditions.md) — afficher, rendre obligatoire ou verrouiller un champ selon d'autres valeurs.
