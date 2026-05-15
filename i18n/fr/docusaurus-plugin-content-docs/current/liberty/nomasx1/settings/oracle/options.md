---
title: Options Oracle
description: "Catalogue des options Oracle reconnues par Nomasx-1 et leur composant de licence."
keywords: [Nomasx-1, paramètres, Oracle, options, packs, composant de licence]
---

# Options Oracle

L'écran **Options** catalogue chaque option de base Oracle reconnue par Nomasx-1 — partitioning, advanced compression, advanced security, …. Une ligne par `(Composant, Option)`. Chaque ligne classe l'option sous un composant de licence qui sera ensuite confronté au contrat.

La donnée alimente les écrans *Base de données → Oracle* et *Licences → Oracle* : une option installée sans souscription apparaît comme un écart de conformité.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="soop-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#soop-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Oracle · Options</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="500" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPTION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="500" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
  <text x="500" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Partitioning</text>
</svg>

---

## Objectif de l'écran

- **Mapper chaque option Oracle** vers son composant Nomasx-1.
- **Déclencher les contrôles de conformité.** Une option détectée dans *Base de données → Oracle* sans souscription correspondante devient une ligne non conforme.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID** | `OPT_ID` — identifiant interne. | Clé numérique. |
| **Composant ID** | `OPT_CPT_ID` — lié à *Pricing → Composants*. | Composant auquel l'option est rattachée. |
| **Option** | `OPT_OPTION` — nom de l'option. | Libellé Oracle exposé par la base. |

---

## Conseils & bonnes pratiques

- **Maintenir la liste alignée avec le price book technique Oracle** — Oracle renomme parfois des options entre releases.
- **Les options lourdes** (Advanced Compression, Active Data Guard, Multitenant) méritent leur propre ligne même quand elles sont bundle — la visibilité rend l'audit défendable.
