---
title: Utilisateurs
description: "Liste des utilisateurs connus de Nomasx-1 sur l'ensemble des applications connectées — identifiant, nom, statut du compte, date de création, dernière connexion, dernière utilisation, dernière mise à jour."
keywords: [Nomasx-1, sécurité, utilisateurs, comptes, statut, dernière connexion, dernière utilisation, audit, JDE, SAP, NetSuite]
---

# Utilisateurs

L'écran **Utilisateurs** est le catalogue central de tous les comptes connus de Nomasx-1 sur **toutes les applications connectées** — JD Edwards EnterpriseOne, SAP, NetSuite ou tout ERP métier branché par sa propre requête. Une ligne par couple `(Application, Utilisateur)` : c'est ici qu'un compte se retrouve, que son statut se vérifie, que sa dernière connexion s'affiche et que la question de son maintien se pose.

La liste est alimentée automatiquement à chaque scan, depuis les tables de sécurité de chaque système source — avec, le cas échéant, une vérification LDAP / Active Directory en regard.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 420" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="usr-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usr-btn-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="360" rx="14" fill="url(#usr-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Utilisateurs</text>
  <rect x="850" y="50" width="90" height="22" rx="5" fill="url(#usr-btn-fr)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">Rafraîchir</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="116" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Application ID</text>
  <rect x="232" y="100" width="160" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="244" y="116" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Utilisateur ID</text>

  <rect x="60" y="138" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="132" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="232" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="500" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="582" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATION</text>
  <text x="676" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <text x="776" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATION</text>
  <text x="876" y="155" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MAJ</text>

  <rect x="60" y="170" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="132" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR</text>
  <text x="232" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Resp. fournisseurs</text>
  <rect x="500" y="174" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="525" y="186" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="582" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14</text>
  <text x="676" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="776" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>
  <text x="876" y="187" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="202" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="132" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ARMGR</text>
  <text x="232" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Resp. clients</text>
  <rect x="500" y="206" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="525" y="218" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="582" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2020-09-02</text>
  <text x="676" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>
  <text x="776" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-12</text>
  <text x="876" y="219" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="234" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="132" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <text x="232" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Compte historique</text>
  <rect x="500" y="238" width="60" height="16" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="530" y="250" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactif</text>
  <text x="582" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="676" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2023-11-04</text>
  <text x="776" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2022-08-19</text>
  <text x="876" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-12-01</text>

  <rect x="60" y="266" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21</text>
  <text x="132" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">BENEMGR</text>
  <text x="232" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Resp. avantages RH</text>
  <rect x="500" y="270" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="525" y="282" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="582" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2021-01-08</text>
  <text x="676" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="776" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>
  <text x="876" y="283" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <line x1="60" y1="304" x2="940" y2="304" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="324" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 1 248</text>
  <text x="940" y="324" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="end">Page 1 ▾ · 50 ▾ · ‹ ›</text>

  <rect x="60" y="340" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="360" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS CLÉS</text>
  <text x="72" y="378" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Repérer les comptes dormants (dernière connexion &gt; 6 mois), les comptes récents, les comptes sans activité. Le clic ouvre l'éditeur de propriétés ; le clic droit donne accès aux rôles, droits et détails du système source.</text>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur connu d'**une application connectée**, répondre en un coup d'œil à quatre questions :

- **Le compte a-t-il encore une raison d'être ?** Un compte sans connexion depuis plusieurs mois sur une application active est le premier à questionner.
- **Le compte est-il actif ou désactivé ?** Le statut *Actif* / *Inactif* reflète l'état dans le système source — un compte *Inactif* peut encore détenir des rôles à passer en revue.
- **Quand le compte a-t-il été créé ?** Permet de rapprocher avec l'arrivée du collaborateur côté RH et d'identifier les comptes créés hors du processus standard.
- **Quelle différence entre connexion et utilisation ?** *Dernière connexion* est la dernière authentification ; *Dernière utilisation* est la dernière transaction réelle enregistrée par le système source. Un compte qui se connecte sans rien utiliser est un signal à creuser.

L'écran est le point d'entrée de la revue d'**hygiène des comptes** que les auditeurs attendent à chaque trimestre, quel que soit l'ERP sous-jacent.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application concernée par la ligne. Plusieurs lignes pour le même utilisateur signifient qu'il existe sur plusieurs applications. |
| **Utilisateur ID** | `USR_ID` — identifiant technique de connexion. Lié au catalogue des utilisateurs. | Login technique de l'utilisateur tel que connu du système source. |
| **Nom** | `USR_NAME` — nom d'affichage. | Nom lisible de l'utilisateur. |
| **Statut** | État du compte dans le système source. | Pastille verte *Actif* sur un compte activé, pastille rouge *Inactif* sinon. |
| **Date de création** | `USR_DT_CREATION` — format date. | Date de création du compte dans le système source. |
| **Date de connexion** | `USR_DT_LOGIN` — format date. | Dernière authentification enregistrée par la source. |
| **Dernière utilisation** | `LAST_USAGE` — format date calculé par le connecteur. | Dernière fois où l'utilisateur a réellement utilisé une fonctionnalité — distinct d'une simple connexion. |
| **Date MAJ** | `USR_DT_UPDATE` — format date. | Date du dernier rafraîchissement de la ligne dans la source. |

:::info[Spécifique JDE]
Sur JD Edwards EnterpriseOne, la *Dernière utilisation* vient de l'historique **Object Usage Tracking** collecté par Nomasx-1. Sur les autres systèmes sources (SAP, NetSuite, ERP métier), la même colonne est alimentée par l'historique d'usage équivalent du système — l'écran reste identique, seule la source change.
:::

La ligne porte aussi les indicateurs technique, générique et lié. Ils ne sont pas affichés ici mais alimentent l'éditeur *Propriétés utilisateurs* et l'écran *Utilisateurs en doublon*.

Les deux filtres en haut de la grille (**Application ID** et **Utilisateur ID**) acceptent les opérateurs *contains* / *equals* / *notEquals* / *startsWith* / *endsWith* — c'est le format de filtre côté serveur utilisé partout dans Nomasx-1.

---

## Clic sur la ligne et menu contextuel

Cliquer sur une ligne ouvre l'éditeur **Propriétés utilisateurs** pour le compte (voir *Paramètres → User & AD flags → Propriétés utilisateurs*). Clic droit ouvre le menu de ligne avec trois raccourcis pré-filtrés sur l'utilisateur sélectionné.

| Action | Vers où |
|---|---|
| **Afficher les rôles** | *Affectations* filtré sur le couple `(Application, Utilisateur)` sélectionné. |
| **Afficher les droits** | *Droits — Utilisateurs* filtré sur l'utilisateur sélectionné. |
| **Afficher les détails** | *Détails utilisateur* — les attributs maîtres portés par le système source pour l'utilisateur : nom et référence dans l'Address Book, pays, société, business unit, langue, courriel et codes catégorie. Sur les applications JDE, les valeurs viennent de l'Address Book et des préférences utilisateur. |

---

## Conseils & bonnes pratiques

- **Trier sur *Date de connexion* croissante** pour faire remonter les comptes dormants en haut de la liste. Combiner avec un filtre sur le statut *Inactif* pour obtenir la liste courte des candidats à la suppression.
- **Comparer *Date de connexion* et *Dernière utilisation*.** Un compte qui se connecte régulièrement sans avoir lancé une seule transaction depuis des mois est soit un compte technique à étiqueter comme tel, soit un utilisateur réel dont l'accès n'est plus utile.
- **La *Date de création* sert au rapprochement avec l'arrivée des collaborateurs.** Filtrer sur le dernier trimestre et confronter à la feuille des arrivées RH — chaque arrivée doit apparaître, et chaque apparition doit correspondre à une arrivée.
- **Un même utilisateur sur plusieurs applications est normal, plusieurs utilisateurs sous le même nom ne l'est pas.** Dans ce second cas, passer par l'écran *Utilisateurs en doublon* qui l'explicite.
- **Cliquer sur une ligne** ouvre l'éditeur *Propriétés utilisateurs* — l'écran où se maintiennent les indicateurs technique, générique et privilégié. Pour consulter les attributs maîtres du système source (pays, société, business unit, …), passer par le clic droit *Afficher les détails*.
