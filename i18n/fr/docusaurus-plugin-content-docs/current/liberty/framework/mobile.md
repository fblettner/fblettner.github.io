---
title: Téléphone et tablette
description: "Les applications Liberty Next sur téléphone et tablette : le menu en tiroir ou en rail d'icônes, une grille affichée en liste de cartes avec un titre, des fenêtres en plein écran, une fiche sur une colonne, le sélecteur de période et les filtres adaptés à un écran étroit, le réglage Card d'une colonne — et le menu redimensionnable sur un poste de travail."
keywords: [Liberty Next, mobile, téléphone, tablette, responsive, grille en cartes, menu tiroir, rail d'icônes, fiche, titre de carte, menu redimensionnable]
---

# Téléphone et tablette

Une application construite avec Liberty Next s'utilise telle quelle sur un téléphone et une tablette : rien n'est conçu deux fois. La disposition suit la largeur de l'écran ; sur un poste de travail, rien ne change pour la souris.

Les outils de construction — le Studio, les concepteurs — et la composition d'une analyse de l'explorateur restent des écrans de poste de travail.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mob-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mob-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mob-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mob-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="480" y="24" width="240" height="424" rx="26" fill="url(#mob-g-card)" stroke="#334155" strokeWidth="2"/>
  <rect x="496" y="44" width="26" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="509.0" y="58.5" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">☰</text>
  <text x="532" y="59" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="496" y="76" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="90.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="652" y="76" width="52" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="678.0" y="90.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="494" y="110" width="212" height="132" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="132" fill="#4a9eff" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">1001</text>
  <text x="554" y="132" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="694" y="132" fill="#94a3b8" fontSize="13" textAnchor="end" fontFamily="system-ui, sans-serif">⋮</text>
  <text x="506" y="154" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Ville</text>
  <text x="694" y="154" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Lyon</text>
  <text x="506" y="172" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="694" y="172" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Ouvert</text>
  <text x="506" y="190" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Commercial</text>
  <text x="694" y="190" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">M. Dupont</text>
  <text x="506" y="208" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Plafond</text>
  <text x="694" y="208" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">50 000</text>
  <rect x="506" y="218" width="27" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="519.5" y="229.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+3</text>
  <rect x="494" y="252" width="212" height="132" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="506" y="274" fill="#4a9eff" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">1002</text>
  <text x="554" y="274" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="694" y="274" fill="#94a3b8" fontSize="13" textAnchor="end" fontFamily="system-ui, sans-serif">⋮</text>
  <text x="506" y="296" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Ville</text>
  <text x="694" y="296" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">Nantes</text>
  <text x="506" y="314" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Statut</text>
  <text x="694" y="314" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">En attente</text>
  <text x="506" y="332" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Commercial</text>
  <text x="694" y="332" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">A. Martin</text>
  <text x="506" y="350" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Plafond</text>
  <text x="694" y="350" fill="#cbd5e1" fontSize="9.5" textAnchor="end" fontFamily="system-ui, sans-serif">20 000</text>
  <rect x="506" y="360" width="27" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="519.5" y="371.2" fill="#94a3b8" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+3</text>
  <text x="600.0" y="412" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Affichage 1–50 sur 312</text>
  <rect x="550" y="420" width="26" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="563.0" y="432.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="624" y="420" width="26" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="637.0" y="432.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="250" y="40" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le menu est un tiroir</text>
  <text x="260" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvert par ce bouton</text>
  <line x1="440" y1="57.0" x2="496" y2="55" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le titre de la carte</text>
  <text x="260" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les deux premières colonnes</text>
  <line x1="440" y1="137.0" x2="506" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre lignes</text>
  <text x="260" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellé · valeur, vides omises</text>
  <line x1="440" y1="217.0" x2="506" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="250" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="260" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+N ouvre le reste</text>
  <text x="260" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les autres colonnes</text>
  <line x1="440" y1="317.0" x2="506" y2="226" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="70" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche et filtres</text>
  <text x="770" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">panneau de filtres, pleine largeur</text>
  <line x1="760" y1="87.0" x2="704" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions de la ligne</text>
  <text x="770" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le même menu que sur poste</text>
  <line x1="760" y1="167.0" x2="698" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
  <rect x="760" y="390" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="770" y="405" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La pagination</text>
  <text x="770" y="418" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">compte tout le résultat</text>
  <line x1="760" y1="407.0" x2="670" y2="408" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mob-arrow)"/>
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

La recherche, la pagination, le menu de ligne (**Actions de la ligne**) et **Modifier en lot** restent disponibles. Le tri et les filtres d'en-tête sont des gestes d'écran large : passer par le panneau de filtres.

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
