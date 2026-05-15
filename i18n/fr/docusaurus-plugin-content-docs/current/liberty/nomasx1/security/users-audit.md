---
title: Audit Utilisateurs
description: "Vue d'audit par utilisateur — identité, organisation, pays et dernière utilisation par module — pour analyser un compte en détail."
keywords: [Nomasx-1, sécurité, audit utilisateurs, fiche utilisateur, dernière utilisation par module, pays, centre de coût, audit détaillé]
---

# Audit Utilisateurs

L'écran **Audit Utilisateurs** est la vue *en profondeur* d'un compte utilisateur. Une ligne par triplet `(Application, Utilisateur, Module)` — un utilisateur actif sur cinq modules du système source produit cinq lignes, à raison d'une par module.

C'est l'écran qui s'ouvre après un clic sur une ligne dans *Utilisateurs*, *Utilisateurs sans rôles* ou *Doublons utilisateurs* : au lieu d'un résumé sur une ligne, il présente la fiche d'identité complète et la trace d'utilisation par module.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 360" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="usa-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="300" rx="14" fill="url(#usa-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Audit Utilisateurs · APMGR</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="106" fill="#94a3b8" fontSize="10" letterSpacing="0.05em" fontFamily="system-ui, sans-serif" fontWeight="700">IDENTITÉ</text>
  <text x="60" y="126" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">App 12 · APMGR · Responsable comptes fournisseurs</text>
  <rect x="60" y="138" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="85" y="150" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="120" y="150" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Pays FR · Société 00010 · CC 30 · Cat 8 SALES</text>
  <text x="120" y="166" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">Créé le 2019-03-14</text>

  <line x1="60" y1="180" x2="940" y2="180" stroke="#1f2937" strokeWidth="1"/>

  <text x="60" y="200" fill="#94a3b8" fontSize="10" letterSpacing="0.05em" fontFamily="system-ui, sans-serif" fontWeight="700">DERNIÈRE UTILISATION PAR MODULE</text>

  <rect x="60" y="212" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="229" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptabilité fournisseurs</text>
  <text x="780" y="229" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-13</text>

  <rect x="60" y="244" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="261" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Grand livre</text>
  <text x="780" y="261" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-02</text>

  <rect x="60" y="276" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="293" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Répertoire d'adresses</text>
  <text x="780" y="293" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-11-18</text>

  <rect x="60" y="308" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="325" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Achats</text>
  <text x="780" y="325" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2023-09-04</text>
</svg>

---

## Objectif de l'écran

Pour un utilisateur unique sur une application :

- **Qui est cette personne ?** Identité (nom), contexte d'organisation (pays, société, centre de coût, code catégorie) et statut du compte — tout ce qu'il faut à un auditeur pour reconnaître l'utilisateur sans quitter l'écran.
- **Qu'utilise-t-il ?** Une ligne par module du système source, avec la date de la dernière opération sur ce module. C'est la trace qui répond à la question *« le portefeuille de rôles détenu est-il justifié ? »*.
- **Que peut-on retirer ?** Un rôle qui donne accès à un module non utilisé depuis douze mois est un candidat à la révocation.

L'écran est le **deuxième clic** de chaque investigation par utilisateur — une ligne, tout le contexte.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient l'utilisateur. |
| **Utilisateur ID** | `USR_ID` — identifiant technique de connexion. | Repris depuis l'écran appelant. |
| **Nom** | `USR_NAME` — nom d'affichage. | Nom lisible. |
| **Statut** | `USR_STATUS` — normalisé : `01` pour *Actif*, `N` sinon. | État du compte dans la source. |
| **Pays** | `USRD_ULCTR` — texte. | Pays rattaché à l'utilisateur dans le système source. |
| **Société** | `USRD_MCCO` — texte. | Société par défaut affectée à l'utilisateur. |
| **Centre de coût** | `USRD_MCMCU` — texte. | Centre de coût par défaut affecté à l'utilisateur. |
| **CC Code Cat 8** | `USRD_MCRP08` — texte. | Code catégorie 8 du centre de coût — axe de répartition courant pour le reporting analytique. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte. |
| **Composant** | `CPT_COMPONENT` — texte. | Module fonctionnel du système source (comptabilité fournisseurs, grand livre, etc.). Une ligne par module utilisé au moins une fois. |
| **Dernière utilisation** | `LAST_USAGE` — date. | Dernière activité enregistrée par la source sur le module. |

:::info[Spécifique JDE]
Sur JD Edwards EnterpriseOne, *Composant* et *Dernière utilisation* sont calculés à partir de l'**Object Usage Tracking** (`LICENSE_JDE_OUT`) joint à la table des objets JDE puis au mappage System Code → Composant de licence (`SETTINGS_JDE_SY → SETTINGS_LIC_COMPONENTS`). Les colonnes d'organisation (Pays, Société, Centre de coût, Cat 8) sont des valeurs par défaut JDE stockées dans les données utilisateur. Les autres systèmes sources peuvent alimenter les mêmes colonnes via leurs équivalents — par exemple le rattachement centre de coût RH côté SAP, l'emplacement et le département côté NetSuite.
:::

---

## Conseils & bonnes pratiques

- **Lire la colonne *Dernière utilisation* en partant du bas.** Les modules sans activité depuis douze mois sont le signal le plus net pour la révocation d'un rôle — l'utilisateur fait peser un coût d'audit sur un rôle qu'il n'exerce plus.
- **Utiliser *Pays* et *Centre de coût*** pour recouper avec la RH. Un utilisateur dont le pays côté source ne correspond plus à la fiche RH est soit une mobilité non répercutée, soit un compte obsolète.
- **Pour les comptes techniques ou batch**, on s'attend à un seul module avec une date récente et rien d'autre. Les marquer comme tels via l'écran *Paramètres → Propriétés utilisateurs* pour qu'ils cessent d'apparaître dans la revue des comptes dormants.
- **Cliquer sur *Imprimer*** pour exporter la fiche d'audit en PDF — pratique pour les pièces justificatives transmises aux auditeurs externes.
