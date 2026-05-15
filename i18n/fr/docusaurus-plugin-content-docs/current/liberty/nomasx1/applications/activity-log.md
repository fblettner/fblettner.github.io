---
title: Transactions
description: "Journal d'activité au niveau base — chaque transaction enregistrée par utilisateur sur les tables de l'application connectée."
keywords: [Nomasx-1, applications, transactions, journal d'activité, piste d'audit, journal base de données]
---

# Transactions

L'écran **Transactions** liste toutes les transactions enregistrées sur une application connectée, captées au niveau base de données. Une ligne par `(Application, Utilisateur, Table, Date de transaction)` — la preuve brute utilisée par la vue *Conflits — Avérés* et les statistiques d'*Object Usage Tracking*.

C'est le *registre des faits* de Nomasx-1 — le jeu de données qui transforme un conflit théorique en constat documenté.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="acl-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="240" rx="14" fill="url(#acl-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Applications · Transactions</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="250" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SCHÉMA</text>
  <text x="370" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="540" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DATE TRANSACTION</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NB</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">OBJET</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="250" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="370" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0411</text>
  <text x="540" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 09:42</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">42</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0411</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="250" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="370" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F0413</text>
  <text x="540" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 11:17</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">8</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">P0413M</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="250" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PRODDTA</text>
  <text x="370" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">F4101</text>
  <text x="540" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14 02:00</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 481</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">R41549</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="120" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">BENEMGR</text>
  <text x="250" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SAP_PRD</text>
  <text x="370" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PA0008</text>
  <text x="540" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13 16:24</text>
  <text x="720" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">3</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PA20</text>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée :

- **Qu'a fait chaque utilisateur ?** *Schéma + Table + Date + Nombre* indique combien de lignes de quelle table un utilisateur a touchées à un instant donné.
- **Recouper avec les droits théoriques.** Combiné à la matrice des *Droits*, un journal vide pour un utilisateur aux droits étendus est l'argument de révocation le plus solide.
- **Alimenter l'analyse SoD avérée.** L'écran *Conflits — Avérés* intersecte ce jeu de données avec les détails SoD — si un utilisateur n'apparaît pas ici pour les tables concernées, le conflit reste théorique.

Le journal s'appuie sur des triggers / un audit au niveau base sur les tables du système source — en dehors de toute permission applicative. Il capte ce que *la base* a enregistré, pas ce que l'application *pense* avoir fait.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `ACL_APPS_ID` — identifiant de l'application. Filtrable. | Application connectée. |
| **Utilisateur ID** | `ACL_USER_ID` — identifiant utilisateur, nettoyé. Filtrable, restreint à l'application. | Auteur de la transaction. |
| **Schéma** | `ACL_SCHEMA` — schéma de base. | Localisation de la donnée — utile quand plusieurs environnements partagent la même instance Nomasx-1. |
| **Table** | `ACL_TABLE_NAME` — table de base. Filtrable. | Objet écrit. |
| **Date transaction** | `ACL_DT_TRANSACTION` — horodatage. | Moment de l'activité. |
| **Nombre** | `ACL_COUNT` — nombre de lignes touchées. | Volume — distingue une mise à jour ponctuelle d'une opération de masse. |
| **Objet** | `ACL_OBJECT_ID` — programme source. | Programme à l'origine de l'écriture — relie la ligne à la matrice des droits. |

---

## Conseils & bonnes pratiques

- **Filtrer sur un seul *Utilisateur ID*** + trier sur *Date transaction* décroissante — la chronologie d'activité de l'utilisateur. Moyen rapide de savoir si un compte aux droits sensibles est dormant ou actif.
- **Filtrer sur *Table*** pour investiguer un jeu de données précis — *qui a touché F0411 ce trimestre ?* se répond en un filtre.
- **Combiner avec *OUT — Composants*** — *Transactions* est la photographie base, *OUT* est la photographie applicative. Les deux doivent raconter une histoire cohérente ; un écart important pointe des écritures directes en base qui contournent l'application.
- **Surveiller *Nombre*** — une mise à jour unitaire est normale, une opération de masse mérite un contrôle de justification.
