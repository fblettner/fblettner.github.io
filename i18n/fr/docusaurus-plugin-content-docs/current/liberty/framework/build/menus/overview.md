---
title: Menus — vue d'ensemble
description: "La page Menus, le modèle de liste à plat reliée par parent, les sept types de feuilles (screen / query / endpoint / dashboard / page / job / url), et comment un menu associé à show_in_switcher transforme un connecteur en application."
keywords: [Liberty Framework, menus, MenusBuilder, application, navigation, arbre, dossier, feuille, éléments, parent]
---

# Menus — vue d'ensemble

Un **menu** dans Liberty, c'est ce que l'utilisateur voit dans le panneau de navigation à gauche quand il ouvre une de vos applications. Il regroupe écrans, endpoints, tableaux de bord et routes dans un arbre de dossiers et de feuilles.

Trois points à connaître d'emblée :

| Fait | Conséquence |
|---|---|
| Il n'y a **aucun objet « application » séparé** dans Liberty. | Une « application » est simplement un **connecteur qui a un menu attaché** *et* dont l'indicateur `show_in_switcher` est actif. Les deux conditions sont requises pour que sa tuile apparaisse dans le sélecteur d'applications du menu latéral. |
| Les menus sont stockés sous forme de **liste plate d'éléments** reliés par `parent`. | L'arbre est assemblé par le backend — plus facile à éditer à la main, conversion propre vers TOML et retour, les opérations de glisser-déposer ne modifient qu'une seule liste. |
| Chaque clé de menu est un nom de connecteur (`[menus.<connector>]`). | Le connecteur nommé `crm` porte le menu sous `[menus.crm]` ; l'écran `customers` sur `crm` est atteint depuis une feuille `screen` avec `target = "customers"`. |

La page qui gère les menus est **Liberty Next → Écrans → Menus**.

---

## Dans l'application \{#sidebar\}

En bas du menu latéral, **Ouvrir au survol** replie le menu sur ses icônes : il s'ouvre par-dessus la page quand la souris le survole et se referme une fois la page choisie, laissant toute la largeur aux écrans. **Garder ouvert** rétablit le menu fixe. Le choix est conservé par le navigateur.

Le menu a la largeur qu'on lui donne : il s'élargit en faisant glisser son bord droit (de 180 à 460 pixels, retenus par ce navigateur) ; un double clic sur le bord rétablit la largeur par défaut. Le libellé d'une entrée tient sur deux lignes au plus, son texte complet restant dans l'infobulle. Sur une tablette tenue verticalement, le menu est la barre d'icônes, ouverte par-dessus la page par son bouton ; sur un téléphone, c'est un tiroir — voir [Téléphone et tablette](../../mobile.md).

## La page Menus en un coup d'œil

<svg viewBox="0 0 1320 490" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mov-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mov-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mov-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mov-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="446" rx="14" fill="url(#mov-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="47" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▱</text>
  <text x="260" y="47" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="957" y="33" width="125" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1019.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="876" y="33" width="75" height="22" rx="5" fill="url(#mov-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="913.5" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="790" y="33" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↶ Abandonner</text>
  <rect x="719" y="33" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="751.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Élément</text>
  <rect x="648" y="33" width="65" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="680.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Dossier</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="238" y="92" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Connecteur :</text>
  <rect x="306.48" y="80" width="35" height="20" rx="10" fill="rgba(74,158,255,0.15)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="323.98" y="93.5" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="346.48" y="80" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="373.98" y="93.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomajde</text>
  <rect x="406.48" y="80" width="55" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="433.98" y="93.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">nomasx1</text>
  <rect x="466.48" y="80" width="120" height="20" rx="10" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="526.48" y="93.5" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une portée</text>
  <rect x="238" y="110" width="330" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="130" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="267.876" y="130" fill="#94a3b8" fontSize="8.4" fontFamily="system-ui, sans-serif">· 9 éléments</text>
  <rect x="248" y="138" width="310" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="257" y="152.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ filtrer 9…</text>
  <text x="270" y="183" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="183" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▣</text>
  <text x="296" y="183" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="556" y="183" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">overview</text>
  <text x="270" y="211" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="211" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▭</text>
  <text x="296" y="211" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Data Explorer</text>
  <text x="556" y="211" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">explorer</text>
  <text x="258" y="239" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <text x="270" y="239" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="239" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="296" y="239" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Ventes</text>
  <text x="556" y="239" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">sales</text>
  <rect x="246" y="252" width="314" height="24" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="286" y="267" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="298" y="267" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="312" y="267" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="408" y="255" width="150" height="18" rx="4" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="421" y="267.5" fill="#475569" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↑</text>
  <text x="446" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↓</text>
  <text x="471" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">→</text>
  <text x="496" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">←</text>
  <text x="521" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="546" y="267.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="286" y="295" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="298" y="295" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▦</text>
  <text x="312" y="295" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="556" y="295" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">deals</text>
  <text x="286" y="323" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="298" y="323" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="312" y="323" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Commandes ouvertes</text>
  <text x="556" y="323" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">open_orders</text>
  <text x="258" y="351" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="270" y="351" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="351" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="296" y="351" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Rapports</text>
  <text x="556" y="351" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">reports</text>
  <text x="258" y="379" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="270" y="379" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⠿</text>
  <text x="282" y="379" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▱</text>
  <text x="296" y="379" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Import</text>
  <text x="556" y="379" fill="#94a3b8" fontSize="8.4" textAnchor="end" fontFamily="ui-monospace, monospace">import</text>
  <rect x="580" y="110" width="502" height="340" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="594" y="132" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="641.16" y="132" fill="#94a3b8" fontSize="8.6" fontFamily="ui-monospace, monospace">customers</text>
  <rect x="931" y="120" width="139" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1000.5" y="133.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Rechercher les dépendances</text>
  <rect x="810" y="120" width="117" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="868.5" y="133.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Rechercher les usages</text>
  <rect x="757" y="120" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="781.5" y="133.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Cloner</text>
  <rect x="713" y="122.5" width="36" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="731.0" y="133.3" fill="#4a9eff" fontSize="7.8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">écran</text>
  <line x1="580" y1="148" x2="1082" y2="148" stroke="#1f2937" strokeWidth="1"/>
  <rect x="592" y="158" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="618.5" y="172.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="678.0" y="172.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="749.5" y="172.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="592" y1="186" x2="1070" y2="186" stroke="#1f2937" strokeWidth="1"/>
  <text x="592" y="200" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID ∗</text>
  <rect x="592" y="205" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="219.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">customers</text>
  <text x="592" y="240" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL ∗</text>
  <rect x="592" y="245" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="259.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="592" y="280" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ICON</text>
  <rect x="592" y="285" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="299.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">users</text>
  <text x="592" y="320" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TYPE</text>
  <rect x="592" y="325" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="339.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">screen  Screen (designed view)</text>
  <text x="1058" y="339.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="592" y="360" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTOR</text>
  <rect x="592" y="365" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="379.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">(default)</text>
  <text x="1058" y="379.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <text x="592" y="400" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TARGET</text>
  <rect x="592" y="405" width="478" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="601" y="419.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">customers  Clients</text>
  <text x="1058" y="419.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="20" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une pastille par application</text>
  <text x="30" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ portée : un menu de plus</text>
  <line x1="200" y1="89.0" x2="306.48" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'arbre</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">icône, libellé et id de chaque entrée</text>
  <line x1="200" y1="157.0" x2="260" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="20" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Glisser-déposer</text>
  <text x="30" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">au-dessus, dessous ou dans un dossier</text>
  <line x1="200" y1="247.0" x2="270" y2="291" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="20" y="320" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions au survol</text>
  <text x="30" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">monter · descendre · indenter · + · 🗑</text>
  <line x1="200" y1="337.0" x2="412" y2="264" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dossier · Élément</text>
  <text x="1130" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajout au premier niveau</text>
  <line x1="1120" y1="43.0" x2="751.5" y2="56" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="114" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="129" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'entrée choisie</text>
  <text x="1130" y="142" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cloner, usages, dépendances</text>
  <line x1="1120" y1="131.0" x2="1070" y2="132" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="174" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="189" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="1130" y="202" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">General · Advanced · Translations</text>
  <line x1="1120" y1="191.0" x2="788" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
  <rect x="1120" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Type et cible</text>
  <text x="1130" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que l'entrée ouvre</text>
  <line x1="1120" y1="347.0" x2="1060" y2="428" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mov-arrow)"/>
</svg>

Trois zones :

| Zone | Ce qu'elle porte |
|---|---|
| **En-tête et barre des connecteurs** | **＋ Dossier** et **＋ Élément** ajoutent une entrée au premier niveau ; **Abandonner**, **Enregistrer** et **Recharger la config** agissent sur toute la page. Dessous, une pastille par application (un connecteur qui a un menu) : un clic charge son arbre. **+ Ajouter une portée** donne un menu à un connecteur existant. |
| **Arbre (à gauche)** | Le nom de l'application et son nombre d'entrées, un filtre, puis l'arbre. Chaque ligne affiche une poignée, l'icône de ce qu'elle ouvre (dossier, écran, tableau de bord, tâche, requête, point d'accès, page), le libellé et l'identifiant. Un clic sélectionne la ligne ; au survol, l'identifiant laisse la place à *Monter / Descendre*, *Indenter / Désindenter*, *Ajouter un enfant*, *Supprimer*. Les lignes se glissent au-dessus, au-dessous ou dans un dossier. |
| **Entrée choisie (à droite)** | Son libellé, son identifiant et son type, avec **Cloner**, **Rechercher les usages** et **Rechercher les dépendances** ; puis le formulaire de l'entrée en trois onglets : **General** (id, libellé, icône, type, connecteur, cible), **Advanced** (parent, paramètres, rôles, surcharge) et **Translations**. Sans sélection, le panneau indique *Choisissez un élément dans l'arbre.* |

---

## Ce que porte un menu

La forme du schéma au plus haut niveau :

| Champ | Notes |
|---|---|
| `label` | Le nom d'affichage de l'application. Retombe sur le nom du connecteur si absent. Affiché dans le sélecteur d'applications du menu latéral. |
| `items` | Une liste plate d'éléments de menu, reliés par leur champ `parent`. |

Chaque élément :

| Champ | Requis | Rôle |
|---|---|---|
| `id` | oui | Unique dans ce menu. Référencé par le `parent` des enfants. |
| `parent` | non | Choisir un dossier, ou laisser vide pour un élément de premier niveau. |
| `label` | oui | Le texte affiché dans la barre latérale. |
| `l` | non | Libellés par langue — `l.fr`, `l.de`, etc. |
| `icon` | non | L'un des noms d'icônes que dessine le menu latéral (`shield`, `users`, `barchart`, …) — voir [Traductions et icônes](./translations-and-icons.md). |
| `type` | non | Vide = dossier. Sinon `screen`, `query`, `endpoint`, `dashboard`, `page`, `job` ou `url` (voir [Types d'éléments](./item-types.md)). |
| `connector` | non | Connecteur qui héberge la cible. Vide = le connecteur de l'application (la clé du menu). |
| `target` | conditionnel | Requis sur chaque feuille ; ignoré sur les dossiers. |
| `params` | non | Paramètres fixes transmis à la cible à l'ouverture de l'élément. |
| `roles` | non | Restreint à ces rôles. Vide = visible dès que l'utilisateur peut exécuter la cible. |

---

## Dossier ou feuille

Le champ `type` décide :

| Réglage | Comportement |
|---|---|
| `type` vide | L'élément est un **dossier** — il regroupe des enfants. Pas de `target`, pas de `connector`, pas de `params`. Un dossier est masqué quand aucun de ses descendants n'est visible (le runtime replie les dossiers vides). |
| `type` renseigné | L'élément est une **feuille** — il pointe vers quelque chose que l'utilisateur peut ouvrir. Doit avoir un `target`. |

Les dossiers peuvent être imbriqués sans limite. Les feuilles ne peuvent pas avoir d'enfants — ce sont des nœuds terminaux.

---

## Les sept types de feuilles

| `type` | Ouvre | `target` est | `connector` |
|---|---|---|---|
| **`screen`** | Un écran conçu. | L'identifiant de l'écran (`customers`), choisi parmi les écrans de l'application. | En général vide — le connecteur de l'écran l'exécute. |
| **`query`** | La même vue en grille, choisie parmi les requêtes brutes — une requête sans écran conçu s'ouvre en simple tableau. | Un nom de requête SELECT. | Le connecteur qui possède la requête. Vide = celui de l'application. |
| **`endpoint`** | Le HttpRunner — appelle un point d'accès d'un connecteur API. | Le nom du point d'accès. | Le connecteur API. Vide = celui de l'application. |
| **`dashboard`** | Un tableau de bord (graphiques + KPI). | Un id de tableau de bord (depuis `[dashboards.*]`). | NE doit PAS être renseigné (les tableaux de bord résident dans leur propre espace de noms plat). |
| **`page`** | Une route frontend enregistrée (une fonctionnalité personnalisée, par exemple `/nomaflow`), ou une page livrée par une application (`/app/<app>/<page>`). | Le chemin de la route. | NE doit PAS être renseigné (la cible est une route, pas une ressource de connecteur). |
| **`job`** | La page d'une tâche Nomaflow : ses fichiers et paramètres, Lancer, le journal en direct. | L'identifiant de la tâche. | NE doit PAS être renseigné. |
| **`url`** | Une adresse externe, dans un nouvel onglet du navigateur. | L'adresse (`https://…`, un chemin de ce serveur, ou `#URL.NAME#/…`). | NE doit PAS être renseigné. |

Le validateur du schéma impose :

- Une feuille a besoin d'un `target` — l'enregistrement échoue sans cela.
- Une feuille `dashboard`, `page`, `job` ou `url` avec un `connector` est rejetée (mauvaise configuration) ; une `url` doit commencer par `http://`, `https://`, `/` ou `#URL.`.
- Un dossier avec `target` / `connector` / `params` est rejeté (ces champs n'ont de sens que sur les feuilles).

---

## Enregistrement et rechargement

Le bouton *Enregistrer* valide tout le `MenusFile` (ids uniques, parents existants, pas de cycles), écrit `menus.toml` et déclenche un rechargement à chaud. Les nouveaux menus s'appliquent immédiatement — pas de redémarrage de processus.

La validation est stricte sur trois points :

| Vérification | Pourquoi |
|---|---|
| Chaque référence `parent` doit pointer vers un élément existant. | Un parent fantôme rendrait orpheline la sous-arborescence. |
| Pas de cycles (une chaîne de parents qui boucle). | Protection contre les boucles infinies. |
| Pas de `id` en doublon dans le même menu. | Les enfants référencent les parents par id ; les doublons cassent le lien. |

Les doublons entre menus différents sont autorisés — `[menus.crm.security]` et `[menus.nomasx1.security]` coexistent sans conflit.

---

## Comment un connecteur devient une application

**Un connecteur n'apparaît dans le sélecteur d'applications du menu latéral que quand les deux conditions sont réunies :**

1. Un menu existe — `[menus.<connector>]` est configuré dans *Liberty Next → Écrans → Menus*.
2. **Show in the application list** sur le connecteur — dans *Liberty Next → Données → Connecteurs → \<connecteur> → Réglages* (activé par défaut).

Si l'une des deux manque, le connecteur existe mais n'est pas listé. Le sélecteur lui-même n'apparaît que s'il y a plus d'une application. L'ordre habituel : configurer le menu d'abord, **puis** cocher `show_in_switcher`.

À noter : le regroupement *Applications* / *Sources de données* sur la page Connecteurs se base uniquement sur l'existence d'un menu — un connecteur avec un menu mais `show_in_switcher = false` reste classé sous *Applications* à cet endroit. Ce regroupement est un confort interne à les pages de Liberty Next ; le sélecteur d'applications côté utilisateur est ce que `show_in_switcher` gouverne.

La page suivante détaille le câblage des deux côtés.

---

## Élagage par les permissions

Quand l'utilisateur ouvre l'application, `GET /api/menus` renvoie l'arbre **filtré à ce que l'utilisateur peut exécuter** :

- Une feuille est conservée quand l'utilisateur peut exécuter ce qu'elle ouvre (`sql:<connector>:<target>` pour `screen` / `query`, `api:<connector>:<target>` pour `endpoint`), ou quand un rôle place la feuille, son dossier ou toute l'application en **Lecture** ou **Lecture et modification** (une tâche : **Lecture et modification**) — voir [Permissions et rôles](./permissions-and-roles.md).
- Un refus `menu:` ou `dashboard:` la retire.
- Un dossier sans enfant survivant est replié.
- Les éléments avec un filtre `roles` ne sont conservés que si les rôles de l'utilisateur croisent la liste.

Un utilisateur ne voit que les parties du menu qu'il peut réellement utiliser — pas d'éléments grisés, pas de clics sur des liens en impasse.

---

## Ce qu'on fait concrètement — carte rapide

| Objectif | À lire |
|---|---|
| Faire apparaître un connecteur comme application dans le sélecteur d'applications. | [Transformer un connecteur en application](./make-connector-an-app.md). |
| Construire l'arbre — dossiers, feuilles, glisser-déposer, indentation. | [Construire l'arbre](./build-the-tree.md). |
| Choisir le bon type de feuille (écran / endpoint / tableau de bord / route). | [Types d'éléments](./item-types.md). |
| Restreindre les éléments à certains rôles. | [Permissions et rôles](./permissions-and-roles.md). |
| Ajouter icônes et libellés par langue. | [Traductions et icônes](./translations-and-icons.md). |

---

## La suite

- [Transformer un connecteur en application](./make-connector-an-app.md) — câbler `show_in_switcher`, `home` et le menu.
- [Concepts → Menus](./overview.md) — la référence détaillée.
