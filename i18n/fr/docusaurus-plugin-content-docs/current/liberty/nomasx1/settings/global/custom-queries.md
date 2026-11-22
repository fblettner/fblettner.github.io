---
title: Requêtes personnalisées
description: "Requêtes personnalisées de Nomasx-1 — la requête propre à une application pour la collecte des utilisateurs, rôles, affectations, menus ou droits, exécutée sur son pool à la place de la requête fournie ; le moyen de collecter la sécurité d'une application autre que JD Edwards."
keywords: [Nomasx-1, paramètres, requêtes personnalisées, collecte, utilisateurs, rôles, affectations, menus, droits, pool, application non JDE, séparation des tâches]
---

# Requêtes personnalisées

L'écran **Requêtes personnalisées** porte la requête propre à une application pour une collecte de la sécurité : *Users*, *Roles*, *Assignments*, *Menus* ou *Rights*. Quand une application a une requête pour une collecte, celle-ci l'exécute **à la place de la requête fournie**, sur le pool désigné par la ligne — ou, à défaut, sur le pool de l'application. Une ligne par couple *(application, collecte)*. Accès : **Paramètres → Global → Requêtes personnalisées**.

C'est aussi **ce qui permet de collecter une application autre que JD Edwards** : les requêtes fournies lisent les tables de sécurité de JD Edwards EnterpriseOne ; toute autre application connectée — une base de données, une application spécifique — livre ses utilisateurs, ses rôles et ses droits par ses propres requêtes. Une application autre que JD Edwards sans requête pour une collecte est refusée par cette collecte, qui la cite dans le journal de l'exécution.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scqg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scqg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scqg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scqg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="274" rx="14" fill="url(#scqg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres - Requêtes personnalisées</text>
  <rect x="510.08000000000004" y="37" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="532.08" y="48.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="65" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.settings_customsql_get</text>
  <line x1="220" y1="78" x2="980" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="92" width="128" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="304.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="376" y="92" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="429.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Modifier en lot</text>
  <rect x="490" y="92" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="500" y="106.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="648" y="92" width="78" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="687.0" y="106.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▶ Exécuter</text>
  <rect x="882" y="92" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="921.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="808" y="92" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="841.0" y="106.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="240" y="128" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLLECTE</text>
  <text x="360" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POOL (VIDE = CELUI DE L'APPLICATION)</text>
  <text x="610" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">UTILISATEUR (AUDIT)</text>
  <text x="770" y="145.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE (AUDIT)</text>
  <rect x="240" y="160" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Users</text>
  <text x="360" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <text x="610" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="770" y="176.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-14</text>
  <rect x="240" y="190" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="360" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll</text>
  <text x="610" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="770" y="206.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-14</text>
  <rect x="240" y="220" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Assignments</text>
  <text x="360" y="236.5" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="610" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="770" y="236.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-14</text>
  <rect x="240" y="250" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rights</text>
  <text x="360" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">payroll_dwh</text>
  <text x="610" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <text x="770" y="266.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">2026-10-15</text>
  <rect x="20" y="85" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="100" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une ligne</text>
  <text x="30" y="113" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une requête par collecte</text>
  <line x1="200" y1="102.0" x2="240" y2="103" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Collecte</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Users, Roles, Assignments…</text>
  <line x1="200" y1="197.0" x2="260" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="1000" y="40" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="55" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes</text>
  <text x="1010" y="68" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom de l'application, requête</text>
  <line x1="1000" y1="57.0" x2="840" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="1000" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide : celui de l'application</text>
  <line x1="1000" y1="127.0" x2="620" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
  <rect x="1000" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Audit</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui l'a modifiée, quand</text>
  <line x1="1000" y1="267.0" x2="750" y2="270" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqg-arrow)"/>
</svg>

---

## Ce qu'une requête remplace \{#collections\}

| Collecte | Ce que la requête alimente | Comment |
|---|---|---|
| **Users**, **Roles**, **Assignments** | Les utilisateurs, les rôles et les affectations utilisateur–rôle de l'application. | La requête prend la place de la requête fournie dans la même collecte : les lignes retournées sont chargées comme un nouvel instantané, le précédent restant dans l'historique. |
| **Menus**, **Rights** | Les menus et les droits effectifs de l'application — les tables finales lues par les écrans *Applications*. | La collecte fournie les construit en plusieurs étapes à partir de tables intermédiaires JD Edwards. Une requête alimente directement la table finale : les lignes de l'application sont remplacées par ce qu'elle retourne, et les étapes fournies n'ajoutent rien pour cette application. |

Ce qui découle de ces tables s'applique à l'application, quelle que soit leur origine : la **séparation des tâches** lit ses droits et ses utilisateurs, si bien que les conflits, le tableau de bord [Séparation des tâches](../../sod-dashboard.md) et le rapport de sécurité la couvrent aussi.

:::info[Spécifique à JDE]
Les collectes des licences — employés, transactions, traçabilité des objets — ne lisent que JD Edwards EnterpriseOne ; une requête personnalisée ne les remplace pas.
:::

---

## Écrire la requête \{#query\}

La requête doit **retourner les colonnes de la table cible**, nommées par leur alias (`USR_ID`, `USR_NAME`… pour *Users*) — le plus sûr est de partir de ce que charge la collecte fournie. Avant l'exécution, Nomasx-1 remplace :

| Dans le texte | Remplacé par |
|---|---|
| `{apps_id}` | L'ID application. |
| `{jde_sy}`, `{jde_dta}`, `{jde_ctl}`… et leurs `{jde_sy_dblink}`… | Pour une application JD Edwards : les schémas et liens de base de son onglet [JD Edwards](./applications.md). |
| `:ukid` | Lié au numéro d'instantané de la collecte — à placer là où la table cible attend sa colonne `…_UKID`. Absent, rien n'est lié. |

Toute autre accolade reste telle quelle — un littéral JSON ou une expression régulière dans la requête n'est pas modifié. Un `;` final est ignoré.

---

## Colonnes

| Colonne | Ce qu'on y lit |
|---|---|
| **Collecte** | La collecte remplacée : *Users*, *Roles*, *Assignments*, *Menus* ou *Rights*. Elle apparaît deux fois : son code (*Collecte (ID)* : `SECURITY_USERS`…) et son libellé. |
| **Pool (vide = celui de l'application)** | Le pool sur lequel s'exécute la requête. Vide : le pool de l'application, réglé dans [Applications](./applications.md). |
| **Utilisateur (Audit)** / **Date (Audit)** | Auteur et date du dernier enregistrement. |

**Colonnes** affiche aussi le nom de l'application et la requête.

---

## Boîte de dialogue

**Ajouter une ligne** déclare une requête ; un clic sur une ligne l'ouvre. La fenêtre, **Nouveau · Paramètres - Requêtes personnalisées**, compte trois onglets : **Propriétés**, **Pool** et **Requêtes**. Le pied de fenêtre porte **Annuler** et **Enregistrer** — plus **Supprimer** et **Dupliquer** sur une ligne enregistrée.

<svg viewBox="0 0 1200 322" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scqd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scqd-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scqd-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scqd-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="230" y="20" width="740" height="288" rx="14" fill="url(#scqd-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="250" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau · Paramètres - Requêtes personnalisées</text>
  <line x1="230" y1="60" x2="970" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="282.6" y="82" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Propriétés</text>
  <text x="339.84" y="82" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="391.76" y="82" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêtes</text>
  <line x1="362.48" y1="90" x2="421.04" y2="90" stroke="#4a9eff" strokeWidth="2"/>
  <line x1="250" y1="91" x2="950" y2="91" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="112" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="250" y="118" width="700" height="132" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="136" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">SELECT &#123;apps_id&#125; AS USR_APPS_ID,</text>
  <text x="308" y="152" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">u.login AS USR_ID,</text>
  <text x="308" y="168" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">u.full_name AS USR_NAME,</text>
  <text x="308" y="184" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">u.status AS USR_STATUS,</text>
  <text x="308" y="200" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">…</text>
  <text x="308" y="216" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">:ukid AS USR_UKID</text>
  <text x="262" y="232" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">FROM app_users u</text>
  <line x1="230" y1="262" x2="970" y2="262" stroke="#1f2937" strokeWidth="1"/>
  <rect x="867" y="272" width="83" height="22" rx="5" fill="url(#scqd-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="908.5" y="286.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="798" y="272" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="828.5" y="286.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Propriétés</text>
  <text x="30" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">application + collecte</text>
  <line x1="210" y1="41.0" x2="282.6" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="20" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">&#123;apps_id&#125;</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplacé par l'ID application</text>
  <line x1="210" y1="147.0" x2="260" y2="133" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="20" y="210" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">:ukid</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">numéro d'instantané</text>
  <line x1="210" y1="227.0" x2="306" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="990" y="24" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="39" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Pool</text>
  <text x="1000" y="52" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = celui de l'application</text>
  <line x1="990" y1="41.0" x2="339.84" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="990" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes de la table cible</text>
  <text x="1000" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nommées comme la cible</text>
  <line x1="990" y1="167.0" x2="530" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
  <rect x="990" y="266" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1000" y="281" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1000" y="294" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lue à la prochaine collecte</text>
  <line x1="990" y1="283.0" x2="950" y2="283" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scqd-arrow)"/>
</svg>

### Onglet 1 — Propriétés

| Champ | À renseigner |
|---|---|
| **ID application** | Une des applications déclarées. La requête ne s'applique qu'à elle. |
| **Collecte** | La collecte remplacée : *Users*, *Roles*, *Assignments*, *Menus* ou *Rights*. |
| **Utilisateur (Audit)** / **Date (Audit)** | Renseignés par Nomasx-1 à l'enregistrement. |

### Onglet 2 — Pool

| Champ | À renseigner |
|---|---|
| **Pool (vide = celui de l'application)** | Liste des pools de l'installation. En choisir un quand la requête lit une autre base que celle de l'application — un entrepôt de données, une copie des tables de sécurité ; sinon, laisser vide. Le pool porte le compte avec lequel la requête s'exécute. |

### Onglet 3 — Requêtes

| Champ | À renseigner |
|---|---|
| **Requête** | Le `SELECT` à exécuter à la place de la requête fournie pour la collecte choisie dans *Propriétés*. Une requête vide est ignorée : la requête fournie s'exécute. |

---

## Conseils & bonnes pratiques

- **Exécuter d'abord la requête sur son pool**, l'ID application renseigné — les colonnes, leurs noms et leurs types doivent correspondre à la table cible.
- **Une collecte à la fois.** Commencer par *Users*, contrôler l'écran [Utilisateurs](../../security/users.md) après une collecte, puis ajouter *Roles* et *Assignments*.
- **Attention à *Menus* et *Rights*.** Leur requête alimente la table finale : les lignes retournées sont ce que voient les droits, les conflits et les rapports pour cette application.
- **Supprimer la ligne pour revenir à la requête fournie** — ou vider la requête.
