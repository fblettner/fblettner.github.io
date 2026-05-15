---
title: Rapport d'utilisation
description: "Conformité par application × composant — comptes utilisateurs observés vs quantité acquise, avec l'écart de conformité."
keywords: [Nomasx-1, licences, rapport d'utilisation, conformité, JDE, composant, livrable d'audit]
---

# Rapport d'utilisation

L'écran **Rapport d'utilisation** est la comparaison de conformité : pour chaque `(Application, Composant)`, il présente les comptes utilisateurs observés en regard de la quantité acquise et calcule l'**écart de conformité**. Positif = dans le périmètre du droit, négatif = sur-consommation.

C'est le tableau à apporter à l'audit licence — et celui qui pilote le *Rapport financier*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="luse-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#luse-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Rapport d'utilisation</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. ACTIFS</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ACQUIS</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONFORMITÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="450" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">182</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">182</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200</text>
  <text x="850" y="149" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">+18</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="450" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">128</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">128</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">120</text>
  <text x="850" y="181" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-8</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Manufacturing</text>
  <text x="450" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">14</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">11</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">50</text>
  <text x="850" y="213" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">+39</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 — JDE Prod</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Ressources humaines</text>
  <text x="450" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="560" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">0</text>
  <text x="850" y="245" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">-2</text>
</svg>

---

## Objectif de l'écran

Pour chaque `(Application, Composant)` :

- **Où en sommes-nous ?** *Conformité = Acquis − Utilisateurs constatés* (ou utilisateurs actifs lorsque la valeur est disponible). Une valeur positive est un *sous-usage* — opportunité de calibrage. Une valeur négative est une *sur-consommation* — un véritable écart de conformité.
- **Rendre l'échange d'audit factuel.** Les chiffres viennent directement du jeu OUT joint à l'agrégation contractuelle `LICENSE_CSI_COMPONENTS` par application.
- **Repérer rapidement les écarts coûteux.** Trier *Conformité* en ordre croissant — chaque ligne négative est un sujet pour la discussion de renouvellement.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant de l'application. | Application connectée. |
| **Composant** | `CPT_ID` — composant de licence. | Cumul de licence. |
| **Utilisateurs** | `USERS_COUNT` — utilisateurs distincts observés sur le composant. | Cohorte totale observée. |
| **Utilisateurs actifs** | `ACTIVE_USERS_COUNT` — comptage restreint aux utilisateurs actifs. | Cohorte resserrée utilisée dans la formule de conformité quand disponible. |
| **Acquis** | `SUBSCRIBED` — droit agrégé depuis `LICENSE_CSI_COMPONENTS`. | Quantité contractuelle pour application × composant. |
| **Conformité** | `COMPLIANCE` — écart signé. | Positif = dans le droit, négatif = sur-consommation. |

Formule : `CONFORMITÉ = ACQUIS − (UTILISATEURS_ACTIFS ou UTILISATEURS si aucun comptage actif disponible)`.

---

## Conseils & bonnes pratiques

- **Les lignes de *Conformité* négative forment la liste d'échec d'audit.** Chaque ligne doit être soit re-souscrite, soit remédiée par nettoyage utilisateur / droit.
- **Une conformité positive avec un *Utilisateurs* élevé** est candidate au *down-sizing* lors du prochain renouvellement — à présenter aux achats.
- **Un composant avec souscription = 0 et utilisateurs > 0** signale une utilisation hors couverture contractuelle. Soit le dossier d'achat est incomplet, soit le composant est utilisé hors du périmètre du contrat.
- **Combiner avec *OUT — Composants*** pour creuser qui est sur le composant quand la conformité est négative.
