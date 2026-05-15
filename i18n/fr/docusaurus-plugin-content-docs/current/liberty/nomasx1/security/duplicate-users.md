---
title: Doublons utilisateurs
description: "Utilisateurs disposant de plusieurs comptes qui pointent vers la même personne (Address Number / matricule), regroupés par application."
keywords: [Nomasx-1, sécurité, doublons utilisateurs, comptes multiples, address number, identité salarié, audit]
---

# Doublons utilisateurs

L'écran **Doublons utilisateurs** liste tout compte partageant son **identifiant de personne** avec au moins un autre compte sur la même application. Une ligne par compte du groupe.

Par *identifiant de personne*, on entend la valeur que le système source utilise pour désigner le salarié ou le contact sous-jacent — en général l'*Address Number* (`AN8`) côté JDE, le matricule (`PERNR`) côté SAP HR, ou la clé étrangère équivalente sur les autres ERP. Deux comptes rattachés à la même personne signifient qu'un même individu porte deux logins techniques sur la même application — presque toujours un résidu de création répétée plutôt que de réactivation.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="dup-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#dup-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Doublons utilisateurs</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PERSONNE</text>
  <text x="450" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="560" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATION</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <text x="820" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LIÉ ?</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200714</text>
  <rect x="450" y="136" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="470" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="560" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>
  <text x="820" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">→ J.DOE</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">J.DOE</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200714</text>
  <rect x="450" y="168" width="40" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="470" y="180" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactif</text>
  <text x="560" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-02-10</text>
  <text x="700" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-13</text>
  <text x="820" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace">→ JDOE</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">M.MARTIN</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">203128</text>
  <rect x="450" y="200" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="470" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="560" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-09-11</text>
  <text x="700" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="820" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">M.MARTIN2</text>
  <text x="340" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">203128</text>
  <rect x="450" y="232" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="470" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="560" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-11-04</text>
  <text x="700" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="820" y="245" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">2 groupes en doublon · 4 comptes à examiner</text>
</svg>

---

## Objectif de l'écran

Pour chaque paire (ou groupe) de comptes qui pointe vers la même personne :

- **Pourquoi ce doublon existe-t-il ?** Trois cas typiques — un login renommé (la source ne permettant pas le renommage, un second compte a été créé), un prestataire qui revient dans l'entreprise, ou une erreur RH qui rattache deux logins au même salarié.
- **Quel compte conserver ?** Le compte actif avec la connexion la plus récente est en général celui à garder. L'autre doit être désactivé et, si nécessaire, relié au compte actif via l'indicateur *Lié*.
- **Les doublons sont-ils déjà déclarés ?** L'indicateur *Lié* marque les comptes déjà signalés comme doublon d'un autre — ce sont des exceptions documentées qui ne nécessitent aucune action immédiate.

L'écran sert à la fois au nettoyage des comptes redondants et à la documentation des doublons légitimes.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application sur laquelle le groupe de doublons existe. |
| **Utilisateur ID** | `USR_ID` — identifiant utilisateur. | Un compte du groupe en doublon. |
| **Address Number** | `USRD_AN8` — identifiant de personne issu du système source (*Address Number* JDE, `PERNR` SAP, équivalent sur les autres ERP). | Identifiant de personne partagé — clé de regroupement de la ligne. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État dans le système source. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création — aide à identifier le compte le plus ancien. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification — confirme quel compte est réellement utilisé. |
| **Lié** | `USRP_IS_LINKED` — booléen (`Y` / vide). | Indique si le compte est déjà déclaré comme lié à un autre login. |
| **Utilisateur lié** | `USRP_ID_LINKED` — texte. | Si la ligne est liée, le login auquel elle renvoie. |

Colonnes masquées pour les écrans en aval : `USRP_PRIVILEGED`, `USRP_TECHNICAL`, `USRP_GENERIC`.

:::info[Spécifique JDE]
La clé de regroupement par défaut est l'*Address Number* JDE (`AN8`). Sur les autres systèmes sources, le champ change de nom mais la règle reste la même — Nomasx-1 reprend la clé étrangère que la source utilise pour pointer vers la fiche de la personne.
:::

---

## Conseils & bonnes pratiques

- **Lire le groupe en doublon comme une chronologie.** Ancien compte *créé tôt, dernière connexion il y a longtemps, Inactif* vs nouveau compte *créé récemment, connecté cette semaine, Actif* → l'ancien est un reliquat à désactiver ou archiver.
- **Un doublon inactif déjà lié** (`Lié = Y`) est un cas clos — passer à autre chose et se concentrer sur les lignes sans indicateur de lien.
- **Deux doublons actifs** est l'alerte à creuser en priorité : une même personne détient deux logins effectifs sur la même application, doublant la surface à auditer et masquant peut-être déjà une rupture de SoD.
- **Utiliser l'écran *Paramètres → Propriétés utilisateurs*** pour déclarer un doublon connu une fois pour toutes et le retirer définitivement de cette liste.
