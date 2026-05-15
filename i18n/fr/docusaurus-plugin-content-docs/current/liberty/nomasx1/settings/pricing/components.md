---
title: Composants
description: "Catalogue maître des composants de licence — liste de prix, catégorie, nom convivial."
keywords: [Nomasx-1, paramètres, pricing, composants, catalogue de licence, liste de prix, catégorie]
---

# Composants

L'écran **Composants** est le catalogue maître de chaque composant de licence sur lequel Nomasx-1 raisonne. Une ligne par composant, avec la *Liste de prix* à laquelle il appartient, sa catégorie et un nom convivial. Tous les autres écrans licence et OUT s'y joignent.

C'est la table à maintenir dès qu'Oracle introduit un nouveau composant ou en renomme un existant.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spcpt-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#spcpt-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Pricing · Composants</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ID</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LISTE DE PRIX</text>
  <text x="380" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CATÉGORIE</text>
  <text x="620" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="380" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Applications</text>
  <text x="620" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="380" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Applications</text>
  <text x="620" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="380" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database</text>
  <text x="620" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle Database EE</text>
</svg>

---

## Objectif de l'écran

- **Source de vérité unique** pour le nommage des composants dans Nomasx-1.
- **Trois axes de classification.** *Liste de prix* (catalogue Oracle), *Catégorie* (Applications, Database, Middleware…) et *Composant* (nom lisible).

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **ID** | `CPT_ID` — identifiant numérique. | Référencé par tous les autres écrans licence / Oracle / OUT. |
| **Liste de prix** | `CPT_LISTS` — catalogue Oracle. | Price book Oracle sous lequel le composant est commercialisé. |
| **Catégorie** | `CPT_CATEGORY` — classification large. | Applications, Database, Middleware… |
| **Composant** | `CPT_COMPONENT` — nom convivial. | Libellé restitué dans l'application. |

---

## Boîte de dialogue

Double-cliquer une ligne pour modifier un composant de licence.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="spcpt-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#spcpt-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier le composant de licence</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Liste de prix</text>
  <rect x="60" y="116" width="240" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation ▾</text>

  <text x="320" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Catégorie</text>
  <rect x="320" y="116" width="240" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="332" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Applications ▾</text>

  <text x="580" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Composant</text>
  <rect x="580" y="116" width="340" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="592" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Liste de prix** | Libellé du price book Oracle sous lequel le composant est commercialisé. |
| **Catégorie** | Classification large (`Applications`, `Database`, `Middleware`…). |
| **Composant** | Nom lisible du composant tel qu'affiché dans le reste de l'application. |

---

## Conseils & bonnes pratiques

- **Ajouter un composant une seule fois et le référencer partout.** Éviter les doublons par application — le modèle est global.
- **Garder la *Liste de prix* alignée avec le price book Oracle** pour que le catalogue soit reconnaissable par l'auditeur LMS.
- **Auditer les modifications via `CPT_AUDIT_USER` / `CPT_AUDIT_DATE`** — utile quand une colonne se met à afficher un libellé différent.
