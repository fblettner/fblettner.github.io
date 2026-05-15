---
title: Utilisateurs
description: "Liste des utilisateurs connus de Nomasx-1 pour chaque application — identifiant, nom, statut du compte, date de création, dernière connexion, dernière utilisation, dernière mise à jour."
keywords: [Nomasx-1, sécurité, utilisateurs, JDE, statut, dernière connexion, dernière utilisation, audit]
---

# Utilisateurs

L'écran **Utilisateurs** est le catalogue central de tous les comptes connus de Nomasx-1, par application connectée. Une ligne par couple `(Application, Utilisateur)` : c'est ici qu'on retrouve un compte, qu'on vérifie s'il est toujours actif, qu'on regarde sa dernière connexion et qu'on décide s'il a toujours sa raison d'être.

La liste est alimentée automatiquement par les systèmes sources (tables de sécurité JDE, vérification LDAP / Active Directory optionnelle) à chaque scan.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="usr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="usr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="40" y="40" width="920" height="340" rx="14" fill="url(#usr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">🛡 Nomasx-1 · Sécurité · Utilisateurs</text>
  <rect x="850" y="50" width="90" height="22" rx="5" fill="url(#usr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895" y="65" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">↻ Rafraîchir</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="70" y="115" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Application ID</text>
  <rect x="188" y="100" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="198" y="115" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Utilisateur ID</text>

  <rect x="60" y="132" width="880" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="147" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION · UTILISATEUR · NOM · STATUT · CRÉATION · DERNIÈRE CONNEXION · DERNIÈRE UTILISATION · DATE MAJ</text>

  <rect x="60" y="158" width="880" height="22" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · APMGR · Responsable comptes fournisseurs ·</text>
  <rect x="404" y="161" width="38" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="423" y="171" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="452" y="173" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2019-03-14 · 2026-05-14 · 2026-05-13 · 2026-05-14</text>

  <rect x="60" y="184" width="880" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="199" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · ARMGR · Responsable comptes clients ·</text>
  <rect x="380" y="187" width="38" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="399" y="197" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="428" y="199" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2020-09-02 · 2026-05-13 · 2026-05-12 · 2026-05-14</text>

  <rect x="60" y="210" width="880" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · LEGACY01 · Compte historique ·</text>
  <rect x="320" y="213" width="48" height="14" rx="3" fill="rgba(248,113,113,0.18)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="344" y="223" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Inactif</text>
  <text x="378" y="225" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-06-22 · 2023-11-04 · 2022-08-19 · 2025-12-01</text>

  <rect x="60" y="236" width="880" height="22" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12 · BENEMGR · Responsable avantages RH ·</text>
  <rect x="368" y="239" width="38" height="14" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="387" y="249" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="416" y="251" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2021-01-08 · 2026-05-14 · 2026-05-14 · 2026-05-14</text>

  <line x1="60" y1="280" x2="940" y2="280" stroke="#1f2937" strokeWidth="1"/>
  <text x="60" y="302" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">1 — 50 sur 1 248</text>
  <text x="940" y="302" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="end">Page 1 ▾ · 50 ▾ · ‹ ›</text>

  <rect x="60" y="324" width="880" height="44" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="344" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">💡 POINTS CLÉS</text>
  <text x="72" y="360" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Repérer les comptes dormants (dernière connexion supérieure à 6 mois), les comptes récents, les comptes sans activité. Chaque ligne ouvre l'écran Audit Utilisateurs avec l'historique complet du compte.</text>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur connu d'une application connectée, répondre en un coup d'œil à quatre questions :

- **Le compte a-t-il encore une raison d'être ?** Un utilisateur qui ne s'est pas connecté depuis plusieurs mois sur une application active est le premier à questionner.
- **Le compte est-il actif ou désactivé ?** Le statut *Actif* / *Inactif* reflète l'état dans le système source — un compte *Inactif* peut encore détenir des rôles qu'il faut passer en revue.
- **Quand le compte a-t-il été créé ?** Permet de rapprocher avec l'arrivée du collaborateur côté RH et d'identifier les comptes créés hors du processus standard.
- **Quelle différence entre connexion et utilisation ?** *Dernière connexion* est la dernière authentification ; *Dernière utilisation* est la dernière transaction réelle enregistrée par l'Object Usage Tracking JDE. Un compte qui se connecte mais n'utilise rien est un signal à creuser.

L'écran est le point d'entrée de la revue d'**hygiène des comptes** que les auditeurs attendent à chaque trimestre.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application concernée par la ligne. Plusieurs lignes pour le même utilisateur signifient qu'il existe sur plusieurs applications. |
| **Utilisateur ID** | `USR_ID` — identifiant technique de connexion. Lié au catalogue des utilisateurs. | Le login technique de l'utilisateur. En général l'identifiant JDE. |
| **Nom** | `USR_NAME` — nom d'affichage (généralement le *alpha name* JDE). | Nom lisible de l'utilisateur. |
| **Statut** | `USR_STATUS` — règle booléenne, `01` signifie *Actif*. | État du compte dans le système source. Pastille verte *Actif* quand la valeur est `01`, pastille rouge *Inactif* sinon. |
| **Date de création** | `USR_DT_CREATION` — format date. | Date de création du compte dans le système source. |
| **Date de connexion** | `USR_DT_LOGIN` — format date. | Dernière authentification (horodatage de type `F0092`). |
| **Dernière utilisation** | `LAST_USAGE` — format date, calculée depuis l'Object Usage Tracking JDE (`LICENSE_JDE_OUT`). | Dernière fois où l'utilisateur a réellement utilisé une fonctionnalité — distinct d'une simple connexion. |
| **Date MAJ** | `USR_DT_UPDATE` — format date. | Date du dernier rafraîchissement de la ligne dans la source. |

Colonnes masquées portées par la ligne pour les écrans en aval : `USRP_TECHNICAL`, `USRP_GENERIC`, `USRP_ID_LINKED`, `USR_REGISTRATION`, `USR_DT_REFRESH`, `USR_UKID`. Elles apparaissent sur les écrans *Audit Utilisateurs* et *Utilisateurs en doublon*.

Les deux filtres en haut de la grille (**Application ID** et **Utilisateur ID**) acceptent les opérateurs *contains* / *equals* / *notEquals* / *startsWith* / *endsWith* — c'est le format de filtre côté serveur utilisé partout dans Nomasx-1.

---

## Conseils & bonnes pratiques

- **Trier sur *Date de connexion* croissante** pour faire remonter les comptes dormants en haut de la liste. Combiner avec un filtre sur le statut *Inactif* pour obtenir la liste courte des candidats à la suppression.
- **Comparer *Date de connexion* et *Dernière utilisation*.** Un compte qui se connecte régulièrement mais n'a pas utilisé une seule transaction depuis des mois est soit un compte technique à étiqueter comme tel, soit un utilisateur réel dont l'accès n'est plus utile.
- **La *Date de création* sert au rapprochement avec l'arrivée des collaborateurs.** Filtrer sur le dernier trimestre et comparer avec la feuille des arrivées RH — chaque arrivée doit apparaître, et chaque apparition doit correspondre à une arrivée.
- **Un même utilisateur sur plusieurs applications est normal, plusieurs utilisateurs avec le même nom ne l'est pas.** Dans le second cas, passer par l'écran *Utilisateurs en doublon* qui l'explicite.
- **Cliquer sur une ligne** ouvre l'écran *Audit Utilisateurs* restreint à cet utilisateur — historique complet des rôles, pays, centre de coût, dernière utilisation par module.
