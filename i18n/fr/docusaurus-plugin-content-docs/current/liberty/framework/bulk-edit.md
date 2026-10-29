---
title: Modifier en lot
description: "Modifier les lignes d'un écran directement dans la grille — cellules, ajout, clonage, copie, collage et suppression de lignes, collage depuis Excel ou import d'un fichier — puis écrire l'ensemble des changements en un seul enregistrement, actions de ligne comprises."
keywords: [Liberty Next, modifier en lot, saisie en masse, grille, modification sur place, ajouter une ligne, cloner la ligne, copier, coller, coller depuis Excel, supprimer la sélection, import, SEQUENCE, on_duplicate, editable]
---

# Modifier en lot

**Modifier en lot** transforme la grille d'un écran en éditeur : les cellules se modifient sur place, les lignes s'ajoutent, se clonent, se copient, se collent ou se marquent pour suppression, et un seul **Enregistrer** écrit l'ensemble — avec les mêmes requêtes que la fenêtre de saisie et les mêmes actions de ligne.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bke-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bke-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bke-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bke-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="256" rx="14" fill="url(#bke-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="240" y="62" width="97" height="22" rx="5" fill="url(#bke-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="288.5" y="76.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer (3)</text>
  <rect x="343" y="62" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="371.5" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="406" y="62" width="107" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="459.5" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <rect x="519" y="62" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="550.0" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Importer</text>
  <rect x="587" y="62" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="623.0" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Copier (1)</text>
  <rect x="665" y="62" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="701.0" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Coller (1)</text>
  <rect x="743" y="62" width="153" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="819.5" y="76.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer la sélection (1)</text>
  <rect x="240" y="102" width="720" height="24" fill="rgba(255,255,255,0.03)"/>
  <text x="248" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif"></text>
  <text x="278" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif"></text>
  <text x="348" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">ID</text>
  <text x="418" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Nom</text>
  <text x="638" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Pays</text>
  <text x="768" y="118" fill="#94a3b8" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">Statut</text>
  <line x1="240" y1="126" x2="960" y2="126" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="126" width="720" height="30" fill="rgba(50,215,75,0.05)"/>
  <rect x="250" y="136" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="280" y="145" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <text x="302" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="145" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="344" y="131" width="58" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="354" y="144.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif"></text>
  <rect x="414" y="131" width="208" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <rect x="634" y="131" width="118" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="644" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="764" y="131" width="188" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="774" y="144.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Actif</text>
  <line x1="240" y1="156" x2="960" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="166" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="280" y="175" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <text x="302" y="175" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="175" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <rect x="344" y="161" width="58" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="354" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">1002</text>
  <rect x="414" y="161" width="208" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="424" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <rect x="634" y="161" width="118" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="644" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="764" y="161" width="188" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="774" y="174.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Prospect</text>
  <line x1="240" y1="186" x2="960" y2="186" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="186" width="720" height="30" fill="rgba(255,69,58,0.05)"/>
  <rect x="250" y="196" width="10" height="10" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="280" y="205" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">−</text>
  <text x="302" y="205" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="205" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="348" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">1003</text>
  <line x1="348" y1="201.5" x2="368.16" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <text x="418" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Gamma Ltd</text>
  <line x1="418" y1="201.5" x2="463.36" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <text x="638" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">UK</text>
  <line x1="638" y1="201.5" x2="648.08" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <text x="768" y="205" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Inactif</text>
  <line x1="768" y1="201.5" x2="803.28" y2="201.5" stroke="#64748b" strokeWidth="1"/>
  <line x1="240" y1="216" x2="960" y2="216" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="226" width="10" height="10" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M252.2,231 L254.4,233.3 L258,228.6" fill="none" stroke="#4a9eff" strokeWidth="1.5"/>
  <text x="302" y="235" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉</text>
  <text x="324" y="235" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">×</text>
  <text x="348" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">1001</text>
  <text x="418" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="638" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">FR</text>
  <text x="768" y="235" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Actif</text>
  <line x1="240" y1="246" x2="960" y2="246" stroke="#1f2937" strokeWidth="1"/>
  <rect x="10" y="56" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <text x="20" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Enregistrer écrit tout</text>
  <line x1="210" y1="73.0" x2="240" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="10" y="136" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="151" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cloner la ligne</text>
  <text x="20" y="164" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clé de séquence laissée vide</text>
  <line x1="210" y1="153.0" x2="302" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="10" y="216" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="231" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes cochées</text>
  <text x="20" y="244" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copier, coller, supprimer</text>
  <line x1="210" y1="233.0" x2="255" y2="241" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1000" y="112" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="127" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouvelle ligne</text>
  <text x="1010" y="140" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajoutée en tête</text>
  <line x1="1000" y1="129.0" x2="960" y2="141" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1000" y="162" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="177" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne modifiée</text>
  <text x="1010" y="190" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cellules modifiées sur place</text>
  <line x1="1000" y1="179.0" x2="960" y2="171" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
  <rect x="1000" y="212" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="227" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">À supprimer</text>
  <text x="1010" y="240" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">supprimée à l’enregistrement</text>
  <line x1="1000" y1="229.0" x2="960" y2="201" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bke-arrow)"/>
</svg>

---

## Ouvrir la modification en lot \{#open\}

La barre d'outils de la grille propose **Modifier en lot** dès que l'écran dispose d'une requête de mise à jour ou d'insertion — **Modifier** sur un écran sans fenêtre de saisie. Le bouton n'apparaît pas sur un écran en [lecture seule](./build/screens/overview.md) ni sur un écran dont le réglage `editable` est désactivé ; les permissions du serveur s'appliquent en plus.

En modification en lot, la barre d'outils devient :

| Bouton | Effet |
|---|---|
| **Enregistrer (n)** | Écrit les changements en attente ; *n* compte les lignes modifiées, nouvelles et à supprimer. |
| **Annuler** | Abandonne tous les changements en attente et quitte la modification en lot. |
| **Ajouter une ligne** | Ajoute une ligne vide en tête de la grille, garnie des valeurs par défaut des colonnes. |
| **Importer** | Charge un fichier Excel ou CSV dans la grille — voir [Importer un fichier](#import). Présent quand l'écran autorise l'import. |
| **Copier (n)** | Copie les lignes cochées. |
| **Coller (n)** | Ajoute les lignes copiées comme nouvelles lignes. |
| **Supprimer la sélection (n)** | Marque les lignes cochées pour suppression ; une nouvelle ligne cochée est simplement retirée. |

**Ajouter une ligne**, **Coller**, **Cloner la ligne** et **Importer** nécessitent une requête d'insertion et disparaissent quand l'écran interdit l'ajout. Une actualisation de la grille met fin à la modification en lot sans rien enregistrer ; les lignes copiées restent disponibles.

## Lignes et cellules \{#rows\}

Chaque ligne commence par une case à cocher, un repère et deux boutons :

| Élément | Signification |
|---|---|
| **+** | Une nouvelle ligne, pas encore écrite. |
| **●** | Une ligne existante dont des cellules ont été modifiées. |
| **−** | Une ligne marquée pour suppression. |
| **Cloner la ligne** | Ajoute une copie de la ligne en tête — voir [Cloner, copier et coller](#clone). |
| **×** | Marque la ligne pour suppression (un second clic annule) ; sur une nouvelle ligne, la retire. |
| Cadenas | La ligne est en lecture seule : la règle `editable_when` de l'écran l'exclut, ses cellules restent en affichage simple et elle ne peut pas être supprimée. |

Une cellule reste en lecture seule quand sa colonne est désactivée — `disabled`, ou `disabled_when` selon les valeurs de la ligne —, ou verrouillée pour ce type de ligne : `disable_on_add` sur une nouvelle ligne, `disable_on_edit` sur une ligne existante. Voir [Champs conditionnels](./build/screens/conditional-fields.md).

## Cloner, copier et coller \{#clone\}

**Cloner la ligne**, comme **Coller** des lignes copiées, ajoute de nouvelles lignes qui reprennent toutes les valeurs de la ligne source, clés comprises : il suffit ensuite de changer la valeur qui diffère. Seule exception, une colonne alimentée par une règle `SEQUENCE` reste vide, et l'insertion prend un nouveau numéro dans la séquence ; les tables liées un-à-un de l'écran suivent cette nouvelle clé.

Une ligne issue d'un clonage ou d'un collage est un duplicata : à l'enregistrement, elle déclenche l'action `on_duplicate` de l'écran, avec les valeurs de la ligne source sous `SOURCE_<colonne>`, exactement comme le bouton **Dupliquer** de la fenêtre de saisie — voir [Actions et cycle de vie](./build/screens/actions-and-lifecycle.md).

## Coller depuis Excel \{#paste-excel\}

Des cellules copiées depuis Excel (ou tout texte séparé par des tabulations) puis collées dans la grille, sans cellule en cours de saisie, deviennent de nouvelles lignes :

- si la première ligne collée reprend au moins deux en-têtes de colonnes, elle sert de ligne d'en-têtes et chaque valeur rejoint la colonne du même nom, quel que soit l'ordre ;
- sinon, les valeurs suivent l'ordre des colonnes visibles, celui d'un export de la grille.

Une colonne dotée d'un lookup renseigne ses colonnes dépendantes à partir du code collé, comme si le code avait été choisi dans la liste.

## Importer un fichier \{#import\}

En modification en lot, **Importer** lit un fichier Excel ou CSV dont la première ligne porte les en-têtes de colonnes. Une ligne dont les colonnes clés correspondent à une ligne déjà présente dans la grille devient une modification de celle-ci ; les autres deviennent de nouvelles lignes. Rien n'est écrit avant **Enregistrer** : le résultat peut être relu et corrigé au préalable.

Hors modification en lot, le bouton **Importer** de la barre d'outils ouvre la fenêtre d'import, qui contrôle chaque ligne selon les règles de l'écran avant d'enregistrer — voir [Import en masse](./cookbook/bulk-import.md).

## Enregistrer \{#save\}

**Enregistrer** écrit les lignes en une seule passe :

- chaque ligne modifiée par la requête de mise à jour, chaque nouvelle ligne par la requête d'insertion, chaque ligne à supprimer par la requête de suppression — avec les colonnes stockées dans les tables liées un-à-un de l'écran ;
- une colonne dont la valeur par défaut est imposée par une condition (`default_when`) est écrite avec cette valeur, même si sa cellule n'a pas été modifiée ;
- puis, ligne par ligne, les actions : `on_update`, `on_insert` (ou `on_duplicate` pour une ligne clonée ou collée) et `on_delete`.

En cas d'échec d'une écriture ou d'une action, le message s'affiche et la modification en lot reste ouverte. Après un enregistrement réussi, la modification en lot se ferme et la grille se recharge.
