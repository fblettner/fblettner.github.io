---
title: Audit Lookup
description: "Audit détaillé — pour chaque mutation auditée, la valeur avant / après de chaque colonne modifiée."
keywords: [Nomasx-1, base de données, audit lookup, valeurs avant / après, audit au niveau colonne, SOX]
---

# Audit Lookup

L'écran **Audit Lookup** est la vue détaillée de l'audit base. Une ligne par `(Application, Ligne, Colonne, Type d'audit, Valeur)`. Chaque ligne associe une colonne à sa valeur `BEFORE` et `AFTER` au moment de l'opération, en joignant l'en-tête d'audit aux valeurs auditées.

C'est l'écran que les auditeurs ouvrent pour *voir ce qui a changé dans la ligne* — pas seulement *que la ligne a changé*.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="al-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#al-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Base de données · Audit Lookup</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATE</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="430" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="510" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">VALEUR</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPÉRATION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="149" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BEFORE</text>
  <text x="510" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPAA</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 250.00</text>
  <text x="850" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">AFTER</text>
  <text x="510" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPAA</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">1 500.00</text>
  <text x="850" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">BEFORE</text>
  <text x="510" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPDOC</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VCHR-0042</text>
  <text x="850" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="430" y="245" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">AFTER</text>
  <text x="510" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">RPDOC</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">VCHR-0042</text>
  <text x="850" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">UPDATE</text>
</svg>

---

## Objectif de l'écran

Pour chaque colonne captée dans une opération auditée :

- **Ce qui a changé.** *BEFORE* + *AFTER* sur la même colonne rendent la modification visible en une lecture.
- **Joint à l'utilisateur et à l'opération.** Le contexte d'en-tête (date, table, utilisateur, opération) est répété sur chaque ligne — pratique quand on filtre sur une colonne ou une valeur précise.
- **Source de la preuve.** Une ligne ici est *la* preuve qu'une opération a eu lieu. Les auditeurs la collent dans le constat SOX.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `AUD_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Row ID** | `AUD_ROW_ID` — identifiant interne de ligne. | Référence stable entre entrées d'audit. |
| **Date transaction** | `AUD_DT_TRANSACTION` — date. Filtrable. | Quand l'opération a eu lieu. |
| **Utilisateur** | `AUD_USERNAME` — utilisateur applicatif ou base. Filtrable. | Auteur de l'opération. |
| **Table** | `AUD_SEG_NAME` — nom de table. Filtrable. | Objet modifié. |
| **Type** | `AUD_TYPE` — `BEFORE` / `AFTER`. | Côté du cliché. |
| **Colonne** | `AUD_NAME` — nom de colonne. Filtrable. | Colonne à laquelle la valeur s'applique. |
| **Valeur** | `AUD_VALUE` — valeur brute. Filtrable. | Valeur capturée. |
| **Opération** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE`. | Type de l'opération sous-jacente. |
| **Schéma** | `AUD_SEG_OWNER` — schéma de base. | Localisation de la table. |

---

## Conseils & bonnes pratiques

- **Filtrer sur une *Colonne* + *Valeur*** pour demander *qui a passé ce champ à cette valeur, et quand*.
- **Regrouper les lignes par *Row ID*** pour lire un avant/après complet sur un même enregistrement — la vue la plus utile pour les auditeurs.
- **Utiliser le filtre *Opération*** pour cadrer la recherche sur un type de mutation. Les lignes `DELETE` n'ont pas de valeur `AFTER` — uniquement `BEFORE`.
- **Recouper avec l'en-tête *Audit Trail*** pour vérifier que le nombre de lignes de l'opération correspond à ce qu'on voit à ce niveau.
