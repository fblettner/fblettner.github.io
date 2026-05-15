---
title: Types UDC
description: "Catalogue des types User Defined Code définis dans JD Edwards, avec édition et création directes depuis la grille."
keywords: [Nomajde, UDC, User Defined Codes, JD Edwards, F0004, données maîtres, types UDC]
---

# Types UDC

L'écran **Types UDC** liste chaque groupe de *User Defined Codes* déclaré dans JD Edwards. Une ligne par `(Code Produit, Type UDC)`. Chaque ligne pointe vers un jeu de valeurs UDC maintenu sur l'écran *Codes UDC*.

C'est le point d'entrée de tout le sujet UDC — choisir le type, puis descendre sur ses valeurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="udct-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#udct-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Données maîtres · Types UDC</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CODE PRODUIT</text>
  <text x="220" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE UDC</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">00</text>
  <text x="220" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CN</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Codes pays</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">01</text>
  <text x="220" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ST</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Type de recherche Address Book</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">04</text>
  <text x="220" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PT</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Codes conditions de paiement</text>
</svg>

---

## Objectif de l'écran

Pour chaque type UDC connu de JD Edwards :

- **Un catalogue, une grille.** Au lieu d'ouvrir l'écran JDE, choisir le système et attendre le chargement, chaque type UDC est sur une page avec filtre et tri.
- **Créer un type UDC sans quitter l'écran.** Cliquer *Ajouter* dans la barre d'outils, remplir la boîte de dialogue, enregistrer — le nouveau type est actif côté JDE.
- **Descendre sur les valeurs.** Cliquer sur une ligne ouvre *Codes UDC* filtré sur le type sélectionné — l'étape suivante typique.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Code Produit** | `DTSY` — code système JDE. | Le domaine fonctionnel auquel l'UDC appartient (`00` pour le général, `01` pour l'Address Book, `04` pour la comptabilité fournisseurs…). |
| **Type UDC** | `DTRT` — code à deux caractères. | L'identifiant du groupe UDC à l'intérieur du code produit. |
| **Description** | `DTDL01` — libellé. | Libellé clair du groupe UDC. |

Les champs internes portés par la ligne et masqués par défaut : indicateur de séquence, code d'édition, longueur de code, indicateur de deuxième ligne, compteur de codes, pointeur et type de référentiel, ainsi que les colonnes d'audit (utilisateur, programme, date, job, heure).

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour créer un nouveau type UDC. Cliquer sur l'icône d'édition d'une ligne pour modifier un type existant. La boîte de dialogue est un formulaire unique avec les trois champs visibles plus les indicateurs optionnels issus du master JDE.

| Champ | À renseigner |
|---|---|
| **Code Produit** | Le code produit à deux caractères auquel l'UDC appartient. |
| **Type UDC** | L'identifiant UDC à deux caractères — unique à l'intérieur du code produit. |
| **Description** | Libellé clair qui apparaît partout où le type UDC est référencé. |

Les indicateurs JDE restants (séquencement, liste de codes d'édition, longueur, deuxième ligne) gardent leur sémantique JDE — les renseigner quand les règles de déploiement le demandent.

L'enregistrement écrit dans JDE et la ligne apparaît immédiatement dans la grille.

---

## Conseils & bonnes pratiques

- **Filtrer sur *Code Produit*** pour cibler un domaine fonctionnel — `01` pour l'Address Book, `04` pour la comptabilité fournisseurs, `41` pour l'inventaire…
- **Cliquer sur la ligne** pour descendre sur les valeurs *Codes UDC* du type sélectionné — le parcours habituel quand on maintient une liste de codes.
- **Renommer un type UDC casse les références** portées par les tables opérationnelles (les valeurs utilisent le type comme clé). Préférer créer un nouveau type et migrer les données.
- **La grille s'exporte vers Excel** — utile pour partager le catalogue avec un auditeur ou un consultant externe.
