---
title: Conflits — Avérés
description: "Conflits de séparation des tâches que les utilisateurs ont exercés — les deux activités faites, d'après Object Usage Tracking, le journal d'activité ou les tables écrites — une ligne par utilisateur et par règle, avec la preuve, les programmes et les dates de chaque côté."
keywords: [Nomasx-1, applications, conflits, séparation des tâches, SoD, avérés, exercés, preuve, Object Usage Tracking, journal d'activité]
---

# Conflits — Avérés

L'écran **Conflits — Avérés** (*SoD - Avérés*) conserve les conflits que les utilisateurs ont **exercés** : les données collectées montrent que l'utilisateur a fait les deux activités incompatibles. Une ligne par application, utilisateur et règle, avec la preuve et, pour chaque activité, les programmes concernés et la date à laquelle ils ont été vus pour la dernière fois.

Une ligne ici n'est plus une simple possibilité — c'est un fait, prouvé des deux côtés. L'écran lit la même requête que la [Revue de la séparation des tâches](../../sod-review.md), dont l'onglet *Exercés* présente les mêmes lignes avec le nom des processus, des activités et des risques.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 332" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cfp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cfp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cfp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="cfp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="296" rx="14" fill="url(#cfp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">SoD - Avérés</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="840" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="104" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">▾ Filtres avancés</text>
  <text x="250.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID APPLICATION</text>
  <rect x="250.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="457.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ID PROCESSUS</text>
  <rect x="457.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="467.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="665.0" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISQUE ID</text>
  <rect x="665.0" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="675.0" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <text x="872.5" y="119" fill="#64748b" fontSize="7.5" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PREUVE</text>
  <rect x="872.5" y="123" width="197.5" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="134.5" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="240" y="154" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="168.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="418" y="154" width="72" height="22" rx="5" fill="url(#cfp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="454.0" y="168.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="1010" y="154" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="944" y="154" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="974.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="883" y="154" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.5" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="837" y="154" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="168.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="186" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="324" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROCESSUS</text>
  <text x="430" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RISQUE</text>
  <text x="492" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR</text>
  <text x="562" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ 1</text>
  <text x="628" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTIVITÉ 2</text>
  <text x="694" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PREUVE</text>
  <text x="886" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACT. 1 : PROG.</text>
  <text x="982" y="203.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACT. 1 : VU LE</text>
  <rect x="240" y="218" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="324" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="430" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTCR05</text>
  <text x="492" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="562" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02</text>
  <text x="628" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC05</text>
  <rect x="694" y="222.0" width="184" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="786.0" y="233.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A lancé les deux programmes (suivi)</text>
  <text x="886" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="982" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="246" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="324" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC001 · Order To Cash</text>
  <text x="430" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTCR09</text>
  <text x="492" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="562" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC02</text>
  <text x="628" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">OTC11</text>
  <rect x="694" y="250.0" width="184" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="786.0" y="261.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A lancé les deux programmes (suivi)</text>
  <text x="886" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="982" y="261.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="274" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE-PROD</text>
  <text x="324" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP001 · Procure To Pay</text>
  <text x="430" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTPR12</text>
  <text x="492" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JSMITH</text>
  <text x="562" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP05</text>
  <text x="628" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">PTP16</text>
  <rect x="694" y="278.0" width="198" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="793.0" y="289.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">A écrit des tables des deux programmes</text>
  <text x="886" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P43081</text>
  <text x="982" y="289.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-10-30</text>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre Preuve</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lancé · écrit par · tables</text>
  <line x1="1120" y1="117.0" x2="1031.25" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par utilisateur et règle</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le détail par rôle : Détails</text>
  <line x1="200" y1="267.0" x2="250" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Preuve</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le côté le plus faible des deux</text>
  <line x1="200" y1="187.0" x2="704" y2="214" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Programmes et dates</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pour chaque activité</text>
  <line x1="1120" y1="267.0" x2="1020" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#cfp-arrow)"/>
</svg>

---

## Objectif de l'écran

La liste des conflits avérés répond à une question : **quels conflits ne sont pas que théoriques ?**

- **Priorité d'audit.** Les conflits exercés passent en tête de chaque plan de remédiation — comportement documenté, pas capacité hypothétique.
- **Nettoyage piloté par la preuve.** Chaque ligne indique sa preuve et les programmes en cause des deux côtés — utile quand un utilisateur conteste le constat.
- **Liste plus courte, échange plus pointu.** Quelques dizaines de lignes exercées se discutent plus simplement avec le métier que les quelques centaines de lignes de *Détails*.

---

## La preuve \{#evidence\}

| Preuve | Source |
|---|---|
| **A lancé les deux programmes (suivi d'utilisation)** | Object Usage Tracking : l'utilisateur a lancé un programme de chaque activité. |
| **A écrit par les deux programmes (journal d'activité)** | Le journal d'activité : des lignes écrites au nom de l'utilisateur par un programme de chaque activité. |
| **A écrit des tables des deux programmes** | Les tables que chaque programme écrit (référence croisée), rapprochées des transactions, de la piste d'audit ou du journal d'activité. Preuve plus faible : un autre programme peut écrire la même table. |

Un conflit est exercé au niveau de son **côté le plus faible**. Un conflit sans preuve d'un côté n'apparaît pas ici — la [revue](../../sod-review.md#tabs) le range dans *Seulement possibles*. Le détail figure dans [Possible ou exercé](../../sod-review.md#evidence).

:::info[Spécifique à JDE]
Les preuves viennent de ce que Nomasx-1 collecte dans JD Edwards EnterpriseOne : Object Usage Tracking, le journal d'activité, les transactions, la piste d'audit et la référence croisée. Les conflits eux-mêmes se calculent sur les droits effectifs, qui comprennent les chemins d'accès des pages composites et des pages E1 pour les applications cochées **E1 Composite** / **E1 Pages** dans [Applications](../../settings/global/applications.md).
:::

---

## Colonnes

| Colonne | Contenu |
|---|---|
| **ID application** · **ID processus** · **Risque ID** | L'application, le processus et le risque, chacun avec son nom. Filtres au-dessus de la grille. |
| **Utilisateur ID** | L'utilisateur qui a exercé le conflit. |
| **Privilèges (Y/N)** | Indique si l'utilisateur est marqué privilégié. |
| **Activité 1** · **Activité 2** | Les deux activités de la règle, avec leur nom. |
| **Preuve** | La nature de la preuve, la plus forte en premier. Filtre au-dessus de la grille. |
| **Activité 1 : programmes avec preuve** · **Activité 2 : programmes avec preuve** | Les programmes de chaque activité sur lesquels la preuve a été trouvée. |
| **Activité 1 : vu le** · **Activité 2 : vu le** | La date la plus récente de la preuve de chaque activité. |

Le détail par rôle et par objet reste dans [Conflits — Détails](./details.md).

---

## Conseils & bonnes pratiques

- **Démarrer chaque revue SoD ici** — ou sur l'onglet *Exercés* de la [revue](../../sod-review.md), qui ajoute les noms et les chiffres par utilisateur.
- **Peser la preuve.** *A lancé les deux programmes* est la plus forte ; *a écrit des tables des deux programmes* demande d'examiner les programmes avant de conclure.
- **Un utilisateur présent dans *Détails* mais absent d'*Avérés*** est un *risque latent* — capacité sans preuve. Il mérite un nettoyage, en priorité inférieure ; vérifier d'abord que le suivi d'utilisation et le journal d'activité sont collectés.
- **Documenter le contrôle compensatoire ou révoquer** — puis collecter à nouveau : la ligne quitte la liste à la collecte suivante.
