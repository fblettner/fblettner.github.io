---
title: Code système
description: "Mappage de chaque System Code JDE vers son module fonctionnel et vers le composant de licence correspondant."
keywords: [Nomasx-1, paramètres, JDE, system code, module, composant de licence, mappage OUT]
---

# Code système

L'écran **Code système** mappe chaque System Code JDE (`SY`) vers son module fonctionnel et vers le composant de licence utilisé par Nomasx-1 pour le reporting d'usage / de conformité. Une ligne par `SY`. C'est la table derrière la colonne *Composant* de toutes les vues OUT.

La justesse de ce mappage est ce qui rend l'analyse de conformité licence crédible.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjsy-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="180" rx="14" fill="url(#sjsy-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · JDE · Code système</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SY</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="420" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MODULE</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPONENT E1</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">04</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes fournisseurs</text>
  <text x="420" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CFIN</text>
  <text x="780" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Gestion des ventes</text>
  <text x="420" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CSO</text>
  <text x="780" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">08</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Capital humain</text>
  <text x="420" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Ressources humaines</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CHR</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Ressources humaines</text>
</svg>

---

## Objectif de l'écran

- **Mapper les System Codes JDE vers les modules fonctionnels.** Base de la ventilation par *Module* dans l'application.
- **Lier chaque `SY` à un composant de licence.** C'est le seul endroit où Nomasx-1 sait qu'un `P0411` (SY = 04) consomme la licence *Financials*.
- **Conserver l'étiquette de composant E1.** Quand Oracle livre sa propre nomenclature dans JDE EnterpriseOne, le mappage garde les deux perspectives lisibles.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **SY** | `SYC_ID` — System Code JDE. | Code à deux caractères (par ex. `04`, `42`, `08`). |
| **Description** | `SYC_DESCRIPTION` — texte. | Description lisible du module. |
| **Module** | `SYC_MODULE` — regroupement de haut niveau. | Domaine fonctionnel utilisé dans les vues hors licence. |
| **Component E1** | `SYC_COMPONENT_E1` — code de composant JDE E1. | Code exposé par Oracle dans JDE EnterpriseOne pour le composant. |
| **Composant ID** | `SYC_CPT_ID` — lié à *Pricing → Composants*. | Identifiant de composant de licence Nomasx-1. |
| **Composant** | `CPT_COMPONENT` — libellé dénormalisé. | Libellé lisible du composant de licence. |

---

## Boîte de dialogue

La grille est en lecture seule sur la ligne. Double-cliquer une ligne pour ouvrir l'éditeur et ajuster la description, le module ou le composant de licence.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="sjsy-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#sjsy-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier le code système JDE</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">SY</text>
  <rect x="60" y="116" width="80" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">04</text>

  <text x="160" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="160" y="116" width="260" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="172" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptes fournisseurs</text>

  <text x="440" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Module</text>
  <rect x="440" y="116" width="160" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="452" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>

  <text x="620" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Component E1</text>
  <rect x="620" y="116" width="140" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="632" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CFIN</text>

  <text x="780" y="110" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Composant</text>
  <rect x="780" y="116" width="140" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="792" y="133" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials ▾</text>
</svg>

| Champ | À renseigner |
|---|---|
| **SY** | Lecture seule. Code System JDE à deux caractères. |
| **Description** | Description lisible du module affichée partout dans l'application. |
| **Module** | Domaine fonctionnel de haut niveau (Financials, Distribution…). |
| **Component E1** | Code de composant tel qu'exposé par Oracle dans JDE EnterpriseOne. |
| **Composant** | Liste déroulante des composants Nomasx-1 issus de *Pricing → Composants*. |

---

## Conseils & bonnes pratiques

- **Aligner le mappage sur le catalogue contractuel**, et non sur les valeurs par défaut Oracle. Une renégociation introduit souvent de nouveaux noms de composants — les mettre à jour ici.
- **Tout nouveau SY introduit par une mise à niveau JDE** doit être classifié ici ; sinon il apparaît non mappé dans les vues OUT.
- **Auditer les modifications** via les colonnes masquées `SYC_AUDIT_USER` / `SYC_AUDIT_DATE` — utile pour expliquer pourquoi un comptage de composant a évolué.
