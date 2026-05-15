---
title: Codes UDC
description: "Valeurs User Defined Codes — les codes individuels à l'intérieur de chaque type UDC, avec édition en ligne pour la maintenance en masse."
keywords: [Nomajde, UDC, User Defined Codes, JD Edwards, F0005, données maîtres, valeurs de code]
---

# Codes UDC

L'écran **Codes UDC** liste les valeurs appartenant à un type UDC — les codes réels que les écrans JDE valident. Une ligne par `(Code Produit, Type UDC, Valeur)`.

Là où l'écran JDE permet de saisir une valeur à la fois, cette grille les affiche toutes ensemble et autorise l'édition en ligne sur chaque colonne.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="udcc-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#udcc-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Données maîtres · Codes UDC</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PROD.</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VALEUR</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION 1</text>
  <text x="620" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION 2</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VERROUILLÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FR</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">France</text>
  <text x="620" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">État membre UE</text>
  <text x="845" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">N</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DE</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Allemagne</text>
  <text x="620" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">État membre UE</text>
  <text x="845" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle">N</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">US</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">États-Unis</text>
  <text x="620" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Amérique du Nord</text>
  <text x="845" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Y</text>

  <text x="60" y="252" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 sur 217 valeurs · Type UDC CN · Codes pays</text>
</svg>

---

## Objectif de l'écran

Pour chaque valeur à l'intérieur d'un type UDC :

- **Toutes les valeurs dans une grille.** L'écran JDE ouvre le type puis pagine les valeurs ligne par ligne. Ici toutes les valeurs sont sur une page — filtrer par description, trier par valeur, cliquer une ligne pour éditer.
- **Deux descriptions par code.** *Description 1* est le libellé court utilisé par la plupart des écrans JDE ; *Description 2* porte le libellé long ou contextuel. Les deux sont éditables.
- **Indicateur verrouillé.** Une valeur marquée *verrouillée* est testée explicitement par le code JDE — la supprimer ou la renommer change le comportement. L'indicateur est en pratique en lecture seule ; traiter les codes verrouillés comme gérés par le système.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Code Produit** | `DRSY` — code système JDE. | Le domaine fonctionnel. |
| **Type UDC** | `DRRT` — identifiant du type UDC. | Le groupe auquel la valeur appartient. |
| **Valeur** | `DRKY` — code lui-même. | La valeur que les écrans JDE comparent. |
| **Description 1** | `DRDL01` — libellé principal. | Libellé court utilisé dans les listes et recherches. |
| **Description 2** | `DRDL02` — libellé secondaire. | Libellé long ou contextuel. |
| **Special Handling** | `DRSPHD` — indicateur. | Utilisé par les programmes JDE qui branchent sur la valeur. |
| **Verrouillé** | `DRHRDC` — `Y` / `N`. | `Y` marque les codes sur lesquels JDE s'appuie dans son code source — ne pas modifier. |
| **Dernière mise à jour** | `DRUPMJ` — date julienne. | Date du dernier changement de la valeur. |

Colonnes internes portées par la ligne mais masquées : indicateur UDC-only, audit utilisateur, programme, job et horodatage.

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour créer une nouvelle valeur, ou cliquer l'icône d'édition d'une ligne pour la modifier. La boîte de dialogue porte les trois champs d'identification plus les descriptions et indicateurs.

| Champ | À renseigner |
|---|---|
| **Code Produit** | Hérité du type UDC appelant — en lecture seule quand ouvert par drill-down. |
| **Type UDC** | Idem — en lecture seule quand ouvert par drill-down. |
| **Valeur** | La valeur elle-même. Doit être unique à l'intérieur du couple `(Produit, Type)`. |
| **Description 1** | Libellé court affiché partout où JDE montre le code. |
| **Description 2** | Libellé long — typiquement la variante destinée à l'audit. |
| **Special Handling** | Indicateur optionnel — à renseigner uniquement quand les règles de déploiement le mentionnent. |
| **Verrouillé** | Laisser `N` pour les codes gérés par le métier ; `Y` est réservé aux valeurs gérées par JDE. |

L'enregistrement écrit dans JDE ; la ligne apparaît immédiatement dans la grille et est utilisable par les écrans appelants au prochain rafraîchissement.

---

## Conseils & bonnes pratiques

- **Ouvrir depuis *Types UDC*** plutôt que depuis le menu — le filtre Produit / Type est pré-positionné, la grille ne montre que les valeurs concernées.
- **Utiliser *Description 1* comme libellé court, *Description 2* pour la forme longue.** Les programmes JDE lisent les deux ; les garder cohérents évite la confusion en audit.
- **Ne jamais éditer une valeur verrouillée.** `Y` dans la colonne *Verrouillé* signifie qu'un programme JDE teste la valeur contre un littéral — la renommer change silencieusement le comportement.
- **Pour les chargements en masse**, exporter vers Excel, éditer hors ligne, puis ré-importer via l'action d'upload — bien plus rapide que la saisie ligne à ligne.
