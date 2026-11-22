---
title: Téléphone et tablette
description: "Les applications Liberty Next sur téléphone et tablette : le menu en tiroir ou en rail d'icônes, une grille affichée en liste de cartes avec un titre, des fenêtres en plein écran, une fiche sur une colonne, le sélecteur de période et les filtres adaptés à un écran étroit, le réglage Card d'une colonne — et le menu redimensionnable sur un poste de travail."
keywords: [Liberty Next, mobile, téléphone, tablette, responsive, grille en cartes, menu tiroir, rail d'icônes, fiche, titre de carte, menu redimensionnable]
---

# Téléphone et tablette

Une application construite avec Liberty Next s'utilise telle quelle sur un téléphone et une tablette : rien n'est conçu deux fois. La disposition suit la largeur de l'écran ; sur un poste de travail, rien ne change pour la souris.

Le Studio empile ses colonnes les unes sous les autres, son panneau en dessous ; les concepteurs et la composition d'une analyse de l'explorateur restent des écrans de poste de travail.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 706" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mob-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mob-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mob-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mob-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="470" y="20" width="260" height="666" rx="26" fill="url(#mob-g-card)" stroke="#334155" strokeWidth="2"/>
  <rect x="482" y="38" width="28" height="26" rx="7" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <line x1="490" y1="45.0" x2="502" y2="45.0" stroke="#e2e8f0" strokeWidth="1.5"/>
  <line x1="490" y1="50.5" x2="502" y2="50.5" stroke="#e2e8f0" strokeWidth="1.5"/>
  <line x1="490" y1="56.0" x2="502" y2="56.0" stroke="#e2e8f0" strokeWidth="1.5"/>
  <rect x="522" y="36" width="196" height="30" rx="10" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">EN</text>
  <text x="560" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">☾</text>
  <text x="582" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="604" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">◎</text>
  <text x="626" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">♢</text>
  <text x="648" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">☺</text>
  <text x="670" y="55" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⇥</text>
  <rect x="692" y="40" width="22" height="22" rx="6" fill="rgba(168,85,247,0.2)" stroke="#c084fc" strokeWidth="1"/>
  <text x="703" y="55" fill="#c084fc" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✦</text>
  <rect x="482" y="74" width="120" height="28" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <rect x="490" y="82" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="490" y="88" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="496" y="82" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <rect x="496" y="88" width="4.5" height="4.5" rx="1" fill="none" stroke="#94a3b8" strokeWidth="1.1"/>
  <text x="506" y="85" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">crm</text>
  <text x="506" y="96" fill="#e2e8f0" fontSize="8.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="592" y="92" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <line x1="472" y1="108" x2="728" y2="108" stroke="#1f2937" strokeWidth="1"/>
  <rect x="482" y="116" width="236" height="556" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="128" width="4.5" height="4.5" rx="1" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <rect x="492" y="134" width="4.5" height="4.5" rx="1" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <rect x="498" y="128" width="4.5" height="4.5" rx="1" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <rect x="498" y="134" width="4.5" height="4.5" rx="1" fill="none" stroke="#4a9eff" strokeWidth="1.1"/>
  <text x="510" y="138" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <line x1="482" y1="150" x2="718" y2="150" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="168" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">312 lignes · 42 ms</text>
  <rect x="610" y="157" width="98" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="611" y="158" width="46.039999999999964" height="16" rx="4" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="633.52" y="169" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <text x="682.52" y="169" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="492" y="184" width="101" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="542.5" y="197.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="598" y="184" width="85" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="640.5" y="197.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <rect x="492" y="210" width="55" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="519.5" y="223.5" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Importer</text>
  <rect x="492" y="238" width="150" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="251.5" fill="#475569" fontSize="7.5" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="648" y="238" width="60" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="678.0" y="251.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="492" y="266" width="100" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="279.5" fill="#475569" fontSize="7" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="598" y="266" width="24" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="610.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <rect x="626" y="266" width="24" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="638.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞</text>
  <rect x="654" y="266" width="24" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="666.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▥</text>
  <rect x="682" y="266" width="26" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="695.0" y="279.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ ▾</text>
  <rect x="488" y="296" width="224" height="296" rx="8" fill="none" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="320" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">00001</text>
  <text x="539.4" y="320" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="500" y="340" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VILLE</text>
  <text x="700" y="340" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Lyon</text>
  <text x="500" y="358" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="700" y="358" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Ouvert</text>
  <text x="500" y="376" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMMERCIAL</text>
  <text x="700" y="376" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">jdoe</text>
  <text x="500" y="394" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENCOURS MAX</text>
  <text x="700" y="394" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">50 000</text>
  <rect x="672" y="408" width="28" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="686.0" y="418.7" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+3</text>
  <line x1="488" y1="440" x2="712" y2="440" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="466" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">00002</text>
  <text x="539.4" y="466" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="500" y="486" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VILLE</text>
  <text x="700" y="486" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">Nantes</text>
  <text x="500" y="504" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="700" y="504" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">En attente</text>
  <text x="500" y="522" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMMERCIAL</text>
  <text x="700" y="522" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">asmith</text>
  <text x="500" y="540" fill="#64748b" fontSize="7" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENCOURS MAX</text>
  <text x="700" y="540" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 000</text>
  <rect x="672" y="554" width="28" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="686.0" y="564.7" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+3</text>
  <text x="492" y="620" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="560" y="608" width="52" height="18" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="570" y="620.5" fill="#94a3b8" fontSize="7.5" fontFamily="system-ui, sans-serif">50   ▾</text>
  <text x="708" y="620" fill="#94a3b8" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 312</text>
  <text x="503" y="647.5" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <text x="529" y="647.5" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="544" y="634" width="22" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="555" y="647.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="581" y="647.5" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="607" y="647.5" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <text x="633" y="647.5" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">»</text>
  <rect x="250" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu est un tiroir</text>
  <text x="260" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvert par le bouton Menu</text>
  <line x1="440" y1="47.0" x2="482" y2="51" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="90" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les onglets sur leur ligne</text>
  <text x="260" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ils défilent horizontalement</text>
  <line x1="440" y1="107.0" x2="482" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="316" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="331" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le titre de la carte</text>
  <text x="260" y="344" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les deux premières colonnes</text>
  <line x1="440" y1="333.0" x2="500" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="376" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="391" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre lignes</text>
  <text x="260" y="404" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé · valeur, vides omis</text>
  <line x1="440" y1="393.0" x2="500" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="586" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="601" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La pagination</text>
  <text x="260" y="614" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes par page, total complet</text>
  <line x1="440" y1="603.0" x2="492" y2="618" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons de l'en-tête</text>
  <text x="770" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne à part, au-dessus des onglets</text>
  <line x1="760" y1="47.0" x2="688" y2="51" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="202" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="217" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Barre d'outils et recherche</text>
  <text x="770" y="230" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajout · modification en lot · import</text>
  <line x1="760" y1="219.0" x2="708" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="262" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="277" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Commandes en icônes</text>
  <text x="770" y="290" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vues · regrouper · colonnes · export</text>
  <line x1="760" y1="279.0" x2="706" y2="276" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="406" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="421" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+N ouvre le reste</text>
  <text x="770" y="434" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les autres colonnes de la ligne</text>
  <line x1="760" y1="423.0" x2="700" y2="416" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
</svg>

---

## Sur un téléphone \{#phone\}

En dessous de 768 px :

| Élément | Devient |
|---|---|
| **Menu** | Un tiroir, ouvert par le bouton **Menu** en haut à gauche. |
| **En-tête** | Ses boutons occupent leur propre ligne au-dessus des onglets, qui défilent horizontalement. |
| **Fenêtres** | Plein écran. |
| **Grille** | Une liste : chaque ligne est une carte. |
| **Fiche** | Ses champs sur une colonne ; ses onglets défilent. |
| **Filtres, période** | Chaque filtre prend toute la largeur ; le sélecteur de période présente ses préréglages sur une ligne, au-dessus d'un seul mois. |

### Une ligne en carte \{#card\}

Une carte a un **titre** — les deux premières colonnes, côte à côte et en plus grand — puis quatre lignes *libellé · valeur* ; **+N** ouvre le reste. Une valeur vide ne donne aucune ligne, et un champ affiché avec son code et son libellé tient sur une seule ligne.

La recherche, la pagination, le menu de ligne (**Actions de la ligne**) et **Modifier en lot** restent disponibles ; les commandes des vues, du regroupement, des colonnes et de l'export ne gardent que leur icône. Le tri et la ligne de filtres de l'en-tête sont des gestes d'écran large : les filtres posés sur une fenêtre plus large s'appliquent toujours, et **Effacer les filtres** reste là pour les retirer.

### Choisir ce qu'une carte affiche \{#card-setting\}

Une colonne en décide elle-même avec son réglage **Card**, dans les [réglages de colonne](./build/screens/columns.md) :

| Valeur | Effet |
|---|---|
| `title` | La colonne figure dans le titre de la carte. |
| `show` | La colonne a toujours sa ligne. |
| `hide` | La colonne n'apparaît jamais sur une carte. |
| vide | La grille décide : les deux premières colonnes forment le titre, les quatre suivantes sont des lignes, les autres s'ouvrent par **+N**. |

---

## Sur une tablette \{#tablet\}

De 768 à 1100 px — une tablette en portrait —, le menu est le **rail d'icônes**, quel que soit le mode enregistré sur un poste de travail : son bouton l'ouvre par-dessus la page, un appui ailleurs le replie. Les boutons de l'en-tête prennent leur forme courte pour laisser la place aux onglets. Les grilles et les fiches gardent leur disposition de poste de travail.

---

## Sur un poste de travail : un menu à la bonne largeur \{#menu\}

Le bord droit du menu se fait glisser pour le redimensionner, de 180 à 460 px ; la largeur est mémorisée dans le navigateur, et un double-clic rétablit la largeur par défaut. Le libellé d'une entrée de menu occupe deux lignes au lieu d'être coupé ; son texte complet reste dans l'infobulle.

---

## Conseils & bonnes pratiques \{#tips\}

- Placer en premier les deux colonnes qui identifient une ligne — un numéro et un nom —, ou leur donner la valeur `title` : elles forment le titre de chaque carte.
- Donner la valeur `hide` aux colonnes techniques qu'un utilisateur sur téléphone ne lit jamais.
- Prévoir dans le dictionnaire une forme courte pour les libellés longs : une ligne de carte, c'est *libellé · valeur*.
- Vérifier sur un vrai téléphone les écrans destinés au terrain avant de livrer.

---

## Voir aussi

- [Colonnes](./build/screens/columns.md) · [Modification en lot](./bulk-edit.md) · [Vues enregistrées](./saved-views.md)
