---
title: OUT — Composants
description: "Synthèse Object Usage Tracking par composant de licence — nombre d'utilisateurs et dernière utilisation par composant."
keywords: [Nomasx-1, applications, Object Usage Tracking, OUT, composants, utilisation licence, JDE]
---

# OUT — Composants

L'écran **OUT — Composants** est le sommet de la pyramide Object Usage Tracking. Une ligne par `(Application, Composant)`. Chaque ligne agrège le nombre d'utilisateurs distincts qui ont invoqué un objet du composant et la date du dernier appel.

C'est la vue de tête pour le reporting de licence et le point d'entrée vers les détails.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="outc-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#outc-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · OUT · Composants</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DERN. UTILISATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="640" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">142</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="640" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">87</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manufacturing</text>
  <text x="640" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">11</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-22</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Production</text>
  <text x="260" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Ressources humaines</text>
  <text x="640" y="245" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-11-08</text>
</svg>

---

## Objectif de l'écran

Pour chaque composant de licence sur une application connectée :

- **Combien de personnes l'utilisent ?** *Nb utilisateurs* est le chiffre clé pour le calibrage de licence.
- **Le composant est-il encore vivant ?** *Dernière utilisation* indique si le composant a été touché récemment. Un composant non utilisé depuis plusieurs mois peut probablement être retiré ou sa licence réduite.
- **Quels composants dominent l'activité ?** Trier par nombre d'utilisateurs fait remonter immédiatement les composants *cœur* — typiquement Financials et Distribution.

:::info[Spécifique JDE]
La dimension composant vient du mappage System Code JDE → Composant de licence (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`). Pour les autres systèmes sources, la même vue se reproduit en mappant le code de module / domaine équivalent vers un composant de licence.
:::

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `LOUT_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Composant** | `CPT_ID` — identifiant du composant de licence. Numérique. | Cumul facturable. |
| **Nb utilisateurs** | `USERS_COUNT` — nombre d'utilisateurs distincts. | Chiffre clé pour le reporting de licence. |
| **Dernière utilisation** | `LAST_USAGE` — date la plus récente parmi les appels. | Activité la plus récente sur le composant. |

---

## Menu contextuel

Clic droit sur une ligne pour ouvrir le menu. Chaque raccourci ouvre le jeu OUT filtré sur le couple `(Application, Composant)` sélectionné.

| Action | Vers où |
|---|---|
| **OUT — Utilisateurs** | Liste des utilisateurs qui ont invoqué un objet du composant. |
| **OUT — Détails** | Lignes OUT brutes pour le composant. |
| **OUT — Objets** | Liste des objets du composant effectivement invoqués. |

---

## Conseils & bonnes pratiques

- **Trier sur *Nb utilisateurs* décroissant** pour le calibrage de licence — les composants à fort volume remontent en haut.
- **Surveiller *Dernière utilisation*** — un composant sous le seuil d'activité récente est candidat à une renégociation. À présenter à l'éditeur lors du prochain point contractuel.
- **Cliquer sur la ligne** pour basculer sur *OUT — Détails* filtré sur le composant — liste des utilisateurs et dates d'utilisation.
- **Recouper avec *Licences → JD Edwards*** pour traduire les chiffres clés en droits contractuels.
