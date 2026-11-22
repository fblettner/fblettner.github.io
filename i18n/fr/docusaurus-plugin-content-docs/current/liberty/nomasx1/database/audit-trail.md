---
title: Audit Trail
description: "Piste d'audit de la base dans Nomasx-1 — chaque INSERT, UPDATE et DELETE lu dans les journaux d'archive Oracle, regroupé par schéma, table, opération et jour, avec le différentiel avant / après de chaque modification lu dans l'instruction stockée ; tâches de collecte, de purge et de reconstruction."
keywords: [Nomasx-1, base de données, audit trail, audit DML, INSERT, UPDATE, DELETE, audit système source, diff avant après, colonnes auditées, purge, reconstruction]
---

# Audit Trail

L'écran **Audit Trail** (*Audit - Requête* dans son en-tête) liste les modifications faites dans la base d'une application connectée, telles que les journaux d'archive d'Oracle les enregistrent : une ligne par modification — `INSERT`, `UPDATE` ou `DELETE` — avec le schéma, la table, l'heure, l'utilisateur de base, la ligne et le *System Change Number*. Accès : **Database → Audit Trail**.

Il complète *Transactions* (qui a écrit combien de lignes chaque jour) avec chaque modification elle-même — le type de trace attendu par les contrôles de type SOX.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 496" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="atr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="atr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="atr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="atr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="215" y="20" width="890" height="454" rx="14" fill="url(#atr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="233" y="38" width="18" height="18" rx="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="261" y="52" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Audit - Requête</text>
  <line x1="215" y1="70" x2="1105" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="233" y="84" width="854" height="24" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="245" y="100" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">›  ⏷  Filtres avancés</text>
  <text x="233" y="130" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">7 lignes · 10 ms</text>
  <rect x="905" y="118" width="182" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="934.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="964" y1="123" x2="964" y2="133" stroke="#334155" strokeWidth="1"/>
  <text x="998.5" y="131.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <rect x="1034" y="119" width="52" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1060.0" y="131.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <rect x="233" y="146" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="243" y="160.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="697" y="146" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="724.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="758" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="794.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="836" y="146" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="872.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌘ Grouper</text>
  <rect x="914" y="146" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="953.0" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="998" y="146" width="89" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.5" y="160.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⇩ Exporter ▾</text>
  <rect x="233" y="180" width="854" height="24" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="243" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">SCHEMA</text>
  <text x="383" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TABLE NAME</text>
  <text x="493" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OPERATION</text>
  <text x="593" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">TRANSACTION DATE</text>
  <text x="753" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="843" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">ROW ID</text>
  <text x="913" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">LAST SCN</text>
  <text x="1003" y="195" fill="#cbd5e1" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">OBJECT TYPE</text>
  <rect x="233" y="206" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="220.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="257" y="220.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="220.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(1)</text>
  <text x="383" y="220.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="220.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">DELETE</text>
  <text x="593" y="220.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="228" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="242.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="257" y="242.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="242.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(2)</text>
  <text x="383" y="242.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="242.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INSERT</text>
  <text x="593" y="242.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="250" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="264.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="257" y="264.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="264.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(3)</text>
  <text x="383" y="264.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="264.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="593" y="264.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <rect x="233" y="272" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="259" y="286.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="273" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="383" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="593" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T15:55:39</text>
  <text x="753" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1</text>
  <text x="843" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">7</text>
  <text x="913" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">717044471</text>
  <text x="1003" y="286.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TABLE</text>
  <rect x="233" y="294" width="854" height="96" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="265" y="310" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">92 champs · 2 modifiés</text>
  <rect x="385" y="302" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M387.5,307.5 L389.8,309.8 L393.8,305" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="402" y="311" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Modifiés seulement</text>
  <rect x="265" y="320" width="600" height="62" rx="6" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="277" y="334" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">CHAMP</text>
  <text x="385" y="334" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">AVANT</text>
  <text x="635" y="334" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">APRÈS</text>
  <rect x="267" y="340" width="596" height="19" fill="rgba(74,158,255,0.12)"/>
  <text x="277" y="353" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">ABALKY</text>
  <text x="385" y="353" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace"></text>
  <text x="615" y="353" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="635" y="353" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">FR00012345</text>
  <rect x="267" y="360" width="596" height="19" fill="rgba(74,158,255,0.12)"/>
  <text x="277" y="373" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">ABUPMT</text>
  <text x="385" y="373" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">130903</text>
  <text x="615" y="373" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→</text>
  <text x="635" y="373" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">155539</text>
  <rect x="233" y="390" width="854" height="22" fill="#0d1220" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="259" y="404.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="273" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="383" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F0101</text>
  <text x="493" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UPDATE</text>
  <text x="593" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18T13:09:03</text>
  <text x="753" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">1</text>
  <text x="843" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">5</text>
  <text x="913" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">716994795</text>
  <text x="1003" y="404.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">TABLE</text>
  <rect x="233" y="412" width="854" height="22" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="0.6"/>
  <text x="243" y="426.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <text x="257" y="426.5" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="302.06" y="426.5" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">(1)</text>
  <text x="383" y="426.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">F4301</text>
  <text x="493" y="426.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">INSERT</text>
  <text x="593" y="426.5" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">2026-11-18</text>
  <text x="233" y="456" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes par page   50 ⌄     Affichage 1–7 sur 7</text>
  <rect x="12" y="79" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="94" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="22" y="107" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application, date, opération, schéma, table</text>
  <line x1="197" y1="96.0" x2="233" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="12" y="244" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="259" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne de résumé</text>
  <text x="22" y="272" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">schéma · table · opération · jour (nombre)</text>
  <line x1="197" y1="261.0" x2="263" y2="261" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="12" y="286" width="185" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="22" y="301" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une modification</text>
  <text x="22" y="314" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ligne, SCN, heure — à déplier</text>
  <line x1="197" y1="303.0" x2="653" y2="283" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="1119" y="121" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="136" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vue Résumé</text>
  <text x="1129" y="149" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'ouvre groupée par jour</text>
  <line x1="1119" y1="138.0" x2="1047" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="1119" y="291" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="306" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifiés seulement</text>
  <text x="1129" y="319" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">décocher pour tous les champs</text>
  <line x1="1119" y1="308.0" x2="405" y2="308" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
  <rect x="1119" y="343" width="191" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1129" y="358" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avant → Après</text>
  <text x="1129" y="371" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lu dans l'instruction stockée</text>
  <line x1="1119" y1="360.0" x2="865" y2="360" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#atr-arrow)"/>
</svg>

---

## Vue Résumé \{#summary\}

L'écran s'ouvre sur **Résumé** (à côté de *Tableau* et *Graphique*) : les modifications sont regroupées par **Schema**, **Table Name**, **Operation** et **Transaction date** (au jour), et chaque groupe indique entre parenthèses son nombre de modifications. Le chevron d'un groupe liste ses modifications ; **Tableau** affiche la liste à plat.

---

## Différentiel par champ — lignes dépliables \{#diff\}

Le chevron d'une modification ouvre son différentiel **avant / après**, champ par champ : la ligne d'en-tête indique le nombre de champs de la ligne et le nombre de champs modifiés (*92 champs · 2 modifiés*), et **Modifiés seulement** — coché par défaut — masque les champs inchangés. Les valeurs sont **lues à la demande dans l'instruction DML stockée** (`AUDIT_TRAIL_QUERY`) : le différentiel est construit à l'ouverture, il n'est pas stocké deux fois. Conséquences :

- La table de valeurs (`AUDIT_TRAIL_VALUES`, source d'*Audit Lookup*) peut être **purgée** pour libérer de la place ; le différentiel se reconstruit toujours depuis l'instruction seule.
- `INSERT` affiche les valeurs écrites en *Après* ; `DELETE` les affiche en *Avant* ; `UPDATE` affiche les deux, champs modifiés en surbrillance.

---

## Colonnes \{#columns\}

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Schema** | `AUD_SEG_OWNER` — schéma de la base. | Emplacement de la table. |
| **Table Name** | `AUD_SEG_NAME` — nom de la table. | Objet modifié. |
| **Operation** | `AUD_OPERATION` — `INSERT` / `UPDATE` / `DELETE`. | Nature de la modification. |
| **Transaction date** | `AUD_DT_TRANSACTION` — horodatage. | Moment où la modification a atteint la base. |
| **Application ID** | `AUD_APPS_ID` — identifiant de l'application. | Application connectée. |
| **Row ID** | `AUD_ROW_ID` — identifiant de ligne. | Ligne de la table concernée. |
| **Last SCN** | `AUD_SCN` — *System Change Number*. | Position de la modification dans les journaux d'archive. |
| **Object Type** | `AUD_SEG_TYPE` — `TABLE`. | Type d'objet. |
| **User** | `AUD_USERNAME` — compte de base. | Auteur de la modification côté base. |

Les **Filtres avancés** restreignent la liste sur l'application, la date de transaction, l'opération, le schéma, la table et l'utilisateur.

---

## Périmètre d'audit — onglet Colonnes auditées \{#scope\}

Chaque application connectée fixe **la part de chaque table auditée** indexée dans la table de valeurs, dans l'onglet *Colonnes auditées* de ses paramètres ([Applications](../settings/global/applications.md)). Trois cas par table :

| Règles posées sur la table | Effet |
|---|---|
| **Aucune ligne pour la table** | Par défaut : toutes les colonnes de la ligne sont indexées dans `AUDIT_TRAIL_VALUES`. |
| **Une ou plusieurs lignes de colonne** | Seules les colonnes listées sont indexées. Les autres restent visibles dans le différentiel, sans être cherchables dans *Audit Lookup*. |
| **Une seule ligne `*SQL*`** | Journal seul : l'instruction DML complète est conservée dans `AUDIT_TRAIL_QUERY` et **rien n'est indexé** dans `AUDIT_TRAIL_VALUES`. À réserver aux tables les plus larges, où la recherche colonne par colonne n'a pas d'intérêt. |

L'instruction DML complète est toujours conservée, quelles que soient les règles. Cet onglet contient le volume de la table de valeurs sur les tables larges (une ligne de `F0911` indexerait sinon des dizaines de colonnes par modification).

---

## Tâches de collecte, de purge et de reconstruction \{#jobs\}

Les modifications sont collectées par des tâches Nomaflow, lancées sur l'application :

| Tâche | Rôle |
|---|---|
| **nomasx1-audit-trail-1** | Lit les journaux d'archive (LogMiner) depuis le dernier SCN de l'application et ajoute les nouvelles modifications. |
| **nomasx1-audit-trail-precheck-1** | Vérification en lecture seule des prérequis de la base auditée ; fournit le SQL qui corrige ce qui manque. |
| **nomasx1-audit-trail-reset-scn-1** | Remet à zéro le dernier SCN de l'application : par défaut, la collecte suivante repart du SCN courant. |
| **nomasx1-audit-trail-purge-values-1** | Purge `AUDIT_TRAIL_VALUES` pour libérer de la place — tout pour l'application (éventuellement une seule table), ou seulement les valeurs des instructions de plus de N jours. Les instructions sont conservées. |
| **nomasx1-audit-trail-rebuild-values-1** | Reconstruit `AUDIT_TRAIL_VALUES` pour une table et une période en relisant les instructions stockées — après une purge, ou après avoir élargi les règles *Colonnes auditées* d'une table. |

---

## Conseils & bonnes pratiques

- **Filtrer sur *Operation = DELETE*** sur la période d'audit : chaque suppression doit être justifiable.
- **Ouvrir la modification avant *Audit Lookup*.** Pour un enregistrement, le différentiel montre déjà chaque champ modifié ; *Audit Lookup* cherche dans les valeurs indexées, toutes modifications confondues (« toutes les modifications qui ont écrit cette valeur dans cette colonne »).
- **Filtrer sur un *User*** pour lire l'activité de base d'un compte. La comparer à *Transactions* pour distinguer une modification passée par l'application d'une modification faite directement en base.
- **Un groupe dont le nombre sort de la fourchette habituelle** pour une même table mérite une question à l'équipe DBA.
- **Réduire les tables larges avec *Colonnes auditées*.** Sur une table de type `F0911`, ne lister que les colonnes utiles à la recherche : la table de valeurs reste petite et le différentiel montre toujours tout, depuis l'instruction.
- **Planifier la purge des valeurs** selon la politique de rétention, et lancer la reconstruction des valeurs sur une période quand une recherche par valeur redevient nécessaire.
