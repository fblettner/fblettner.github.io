---
title: Audit Trail
description: "En-tête de la piste d'audit base — une ligne par opération auditée, regroupée par application, date, schéma et table."
keywords: [Nomasx-1, base de données, audit trail, audit DML, INSERT, UPDATE, DELETE, audit système source]
---

# Audit Trail

L'écran **Audit Trail** est la vue en-tête de l'audit au niveau base. Une ligne par `(Application, Date de transaction, Opération, Schéma, Table, Utilisateur)`. Chaque ligne compte les enregistrements touchés par une opération auditée sur une application connectée — `INSERT`, `UPDATE`, `DELETE` ou `TRUNCATE`.

C'est le complément de *Transactions* (qui capte l'usage applicatif) avec les mutations bas niveau — exactement le type de trace attendu par les contrôles de type SOX.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="at-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#at-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Base de données · Audit Trail</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATE TRANSACTION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OPÉRATION</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SCHÉMA</text>
  <text x="580" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="850" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NB</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 09:42</text>
  <text x="320" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">UPDATE</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="850" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 02:14</text>
  <text x="320" y="181" fill="#4ade80" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">INSERT</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F4101</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="850" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 481</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13 18:51</text>
  <text x="320" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">DELETE</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411Z1</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DBA_OPS</text>
  <text x="850" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">3 102</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13 11:08</text>
  <text x="320" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">UPDATE</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="580" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MMARTIN</text>
  <text x="850" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">7</text>
</svg>

---

## Objectif de l'écran

Pour chaque mutation auditée au niveau base sur une application connectée :

- **L'en-tête.** Date, type d'opération, schéma, table, utilisateur, nombre de lignes. De quoi identifier l'opération sans encore lire chaque colonne modifiée.
- **Signal de volume.** *Nombre* met en évidence les mises à jour et suppressions de masse — entrée classique d'une revue SOX.
- **Point d'entrée vers le détail.** Un clic ouvre l'écran *Audit Lookup* avec les valeurs avant / après par colonne.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `AUD_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Date transaction** | `AUD_DT_TRANSACTION` — horodatage. | Quand l'opération a frappé la base. |
| **Opération** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE` / `TRUNCATE`. | Ce qui a été fait. |
| **Schéma** | `AUD_SEG_OWNER` — schéma de base. | Localisation de la table. |
| **Table** | `AUD_SEG_NAME` — nom de table. | Objet touché. |
| **Utilisateur** | `AUD_USER` — compte base. | Auteur de l'opération au niveau base. |
| **Nombre** | `AUD_COUNT` — nombre de lignes affectées. | Volume de l'opération. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Opération = DELETE*** sur la période d'audit — chaque suppression doit être justifiable.
- **Filtrer sur un *Utilisateur*** pour retrouver l'activité base d'un compte précis. Comparer à la ligne *Transactions* correspondante pour savoir si la modification est passée par l'application ou directement par la base.
- **Un *Nombre* sortant de la fourchette habituelle** sur une même table mérite une question à l'équipe DBA.
- **L'écran est en lecture seule pour tous sauf un administrateur.** Des entrées d'écriture existent (`audit_trail_post` / `audit_trail_put`) mais sont destinées au pipeline d'ingestion Nomasx-1, pas à une saisie manuelle.
