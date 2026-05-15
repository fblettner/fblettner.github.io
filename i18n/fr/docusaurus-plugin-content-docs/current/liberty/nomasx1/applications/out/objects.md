---
title: OUT — Objets
description: "Object Usage Tracking groupé par objet — quels programmes d'un composant de licence ont été invoqués au moins une fois."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, objets, programmes, répartition d'usage]
---

# OUT — Objets

L'écran **OUT — Objets** liste les **objets** distincts d'un composant de licence ayant été invoqués au moins une fois sur une application connectée. Une ligne par triplet `(Application, Composant, Objet)`, avec la description lisible portée par la ligne.

C'est la vue objet, complément de *OUT — Utilisateurs / Rôles* : le même jeu de données, pivoté par *ce qui* a été utilisé plutôt que *qui* l'a utilisé.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outo-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#outo-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Objets</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="420" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>
  <text x="420" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Saisie facture standard</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03B11</text>
  <text x="420" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Consultation Grand Livre client</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P03013</text>
  <text x="420" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Fiche client</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="280" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R31410</text>
  <text x="420" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Génération MRP</text>
</svg>

---

## Objectif de l'écran

Pour chaque composant de licence sur une application connectée :

- **Quels programmes sont réellement utilisés ?** Chaque ligne est un programme que le système source a invoqué au moins une fois. Le chiffre clé du composant dans *OUT — Composants* masque cette distribution fine.
- **Repérer les objets morts.** Les objets du composant qui n'apparaissent pas ici ne sont pas utilisés — utile pour décider de les conserver ou non dans le menu.
- **Reconnaître le programme par son libellé.** *Description* rend le jeu de données lisible par un relecteur non technique.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Composant** | `CPT_ID` — composant de licence. Filtrable, masqué par défaut. | Cumul de licence. Utilisé par le drill-down depuis *OUT — Composants*. |
| **Objet** | `LOUT_OBJECT` — objet technique. | Programme invoqué. |
| **Description** | `JDEO_DESCRIPTION` — libellé descriptif. | Libellé lisible. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un *Composant*** + trier sur *Objet* — la surface *de fait* complète du composant sur l'application. Les contrôles d'audit sont plus simples sur un univers borné.
- **Un objet qui n'apparaît jamais ici** est du poids mort — à confirmer avec le métier et à envisager de retirer de la structure de menu.
- **Recouper avec *Droits — Rôles*** pour identifier le rôle qui accorde chaque objet — un objet largement utilisé adossé à un rôle unique et serré est la configuration la plus propre.
- **Utiliser cet écran pour cadrer une analyse SoD par objet** — démarrer de l'usage *réel* plutôt que de la matrice théorique des droits.
