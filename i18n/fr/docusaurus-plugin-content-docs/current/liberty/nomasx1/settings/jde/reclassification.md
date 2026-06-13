---
title: Reclassification
description: "Surcharge du mappage objet JDE → SY quand la classification par défaut est fausse ou manquante."
keywords: [Nomasx-1, paramètres, JDE, reclassification, surcharge objet, system code]
---

# Reclassification

L'écran **Reclassification** surcharge le System Code que Nomasx-1 appliquerait par défaut à un objet JDE. Une ligne par objet. Utile quand le SY par défaut d'un programme ne correspond pas à sa réalité licence — typiquement un programme *techniquement* en `H9` mais *commercialement* en `Financials`.

Chaque ligne dit : *pour cet objet, utiliser ce `SY` à la place du défaut*. Le changement se propage à toutes les vues OUT et rapports de licence qui passent par *Code système*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjrcl-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#sjrcl-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · JDE · Reclassification</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="280" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SY RECLASSIFIÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411Z1</text>
  <text x="280" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Interface fichier Z facture</text>
  <text x="700" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">04</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R0008P</text>
  <text x="280" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">État schéma de dates</text>
  <text x="700" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">09</text>
</svg>

---

## Objectif de l'écran

- **Surcharger le SY** quand la classification JDE ne reflète pas la réalité contractuelle.
- **Garder la liste courte.** Chaque entrée est une exception — trop de surcharges rendent le modèle de licence difficile à défendre en audit.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Objet** | `JDES_OBJECT` — objet technique. | Programme reclassifié. |
| **Description** | `JDES_DESCRIPTION` — libellé convivial. | Ce que fait le programme. |
| **SY reclassifié** | `JDES_SY` — System Code. | SY que Nomasx-1 doit utiliser à la place du défaut JDE. |

---

## Boîte de dialogue

Cliquer sur **Ajouter** pour surcharger le SY d'un nouvel objet, ou double-cliquer une ligne pour la modifier.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjrcl-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sjrcl-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier la reclassification</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Objet</text>
  <rect x="60" y="116" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411Z1</text>

  <text x="260" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="260" y="116" width="500" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Interface fichier Z facture</text>

  <text x="780" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY reclassifié</text>
  <rect x="780" y="116" width="140" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="792" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">04 ▾</text>
</svg>

| Champ | À renseigner |
|---|---|
| **Objet** | Code programme source (par exemple `P0411Z1`). Obligatoire. |
| **Description** | Libellé convivial de ce que fait le programme. |
| **SY reclassifié** | Liste déroulante du catalogue SY. Valeur que Nomasx-1 utilisera à la place du défaut JDE. |

---

## Conseils & bonnes pratiques

- **Documenter la justification** de chaque surcharge — une ligne lisible par un futur auditeur.
- **Revalider la liste après une montée de version Oracle.** JDE déplace parfois un objet entre system codes, rendant rétroactivement une surcharge redondante.
- **Éviter les surcharges systémiques** — si plus d'une poignée d'objets du même module doivent être reclassifiés, revoir plutôt le mappage dans *Code système*.
