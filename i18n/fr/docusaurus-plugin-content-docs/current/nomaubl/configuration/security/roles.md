---
title: Rôles
description: "Gestion des rôles NomaUBL : autorisations stockées sous forme de lignes dans F564254, cases à cocher par fonctionnalité (Accès aux paramètres, Mode lecture seule), tableau additif des sociétés, et liste des Pages autorisées avec libellés alignés sur la barre latérale. Liste de cartes avec actions Copier / Supprimer, panneau d'édition dépliable, onglet Membres listant chaque utilisateur rattaché au rôle."
keywords: [NomaUBL, rôles, permissions, RBAC, F564254, PMROLE, PMCRAPPID, autorisations par page, accès paramètres, lecture seule, sociétés, copier un rôle, JD Edwards, SAP, NetSuite]
---

# Rôles

Cet écran gère le **contrôle d'accès basé sur les rôles** de NomaUBL. Chaque rôle regroupe quatre types d'autorisation : la liste des **pages** accessibles, la liste des **sociétés** auxquelles le rôle est limité, la liste des **fonctionnalités** activées (accès aux paramètres, mode lecture seule), et les **membres** rattachés au rôle.

Les rôles sont applicatifs et indépendants du système source — ils s'appliquent indifféremment quand NomaUBL est connecté à JD Edwards, SAP, NetSuite ou un ERP personnalisé. Les rôles par défaut (`admin`, `viewer`) sont initialisés par l'action **Initialiser la base** de *Connecteurs base de données → NomaUBL*.

:::info[Refonte en 2026.05.5]
Le modèle des rôles passe de colonnes CSV à des lignes d'autorisation :

- **Table d'autorisations `F564254`** — chaque autorisation est une ligne typée par catégorie (`page` / `company` / `feature`). Les quatre colonnes CSV `RLPAGES` / `RLCOMPANIES` / `RLSETTINGS` / `RLREADONLY` de `F564251` disparaissent. Ajouter une nouvelle dimension d'autorisation tient désormais en un INSERT, plus en une modification de schéma.
- **Refonte de l'éditeur** — liste de cartes avec actions **Copier** et **Supprimer** par rôle, panneau d'édition étendu avec une case par fonctionnalité accompagnée de son aide, **sociétés sous forme de tableau additif** (plus de saisie séparée par virgules), *Pages autorisées* avec **libellés clairs** (clés i18n `nav.*` reprises de la barre latérale) et l'identifiant technique en monospace atténué à côté.
- **Initialisation décrite en clair** — supprimer `F564254` et relancer *Initialiser la base* recrée les autorisations `admin` et `viewer` par défaut sans toucher aux lignes de rôles existantes. Le journal indique le nombre d'autorisations nouvellement insérées.
- **Table sessions** — colonnes de `F564252` alignées sur la convention JDE (`SSLSID` jeton UUID, `SSUSER`, `SSSTDTIM` heure de début, `SSETDTIM` heure de fin). `F564251` ne porte plus que l'identité du rôle.
:::

---

## Accès à l'éditeur

- Barre latérale → **Configuration → Sécurité → Rôles**.
- La page s'ouvre sur les rôles existants présentés sous forme de cartes. Cliquer sur une carte déplie le panneau d'édition sous la liste. Le bouton **+ Nouveau rôle** en haut à droite ouvre le même panneau avec le champ **Nom** déverrouillé.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="role-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="role-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="role-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="660" rx="14" fill="url(#role-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <rect x="688" y="30" width="92" height="22" rx="5" fill="url(#role-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="734" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">+ Nouveau rôle</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="540" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="108" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">admin</text>
  <text x="316" y="108" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Accès complet — paramètres, toutes pages, toutes sociétés</text>
  <text x="600" y="108" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">2 utilisateurs</text>
  <rect x="652" y="96" width="48" height="16" rx="8" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="676" y="107" fill="rgb(50,215,75)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Admin</text>
  <rect x="708" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="719" y="108" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="734" y="93" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="745" y="108" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="130" width="540" height="38" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="260" y="154" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">operator</text>
  <text x="316" y="154" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Exploitation quotidienne — factures, e-reporting</text>
  <text x="600" y="154" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">5 utilisateurs</text>
  <rect x="652" y="142" width="56" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="680" y="153" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="716" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="727" y="154" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="742" y="139" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="753" y="154" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="180" width="540" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="204" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700">viewer</text>
  <text x="316" y="204" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Consultation pour audit, sans risque d'écriture</text>
  <text x="600" y="204" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">3 utilisateurs</text>
  <rect x="652" y="192" width="56" height="16" rx="8" fill="rgba(255,69,58,0.10)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="680" y="203" fill="rgb(248,113,113)" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">User</text>
  <rect x="716" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="727" y="204" fill="#94a3b8" fontSize="10" textAnchor="middle">⎘</text>
  <rect x="742" y="189" width="22" height="22" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="753" y="204" fill="#f87171" fontSize="10" textAnchor="middle">🗑</text>

  <rect x="240" y="240" width="540" height="430" rx="10" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1.2"/>

  <rect x="240" y="240" width="540" height="36" fill="rgba(255,255,255,0.03)"/>
  <line x1="240" y1="276" x2="780" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <text x="278" y="262" fill="#e2e8f0" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">🛡 Permissions</text>
  <line x1="252" y1="274" x2="304" y2="274" stroke="#4a9eff" strokeWidth="2"/>
  <text x="356" y="262" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👤 Membres (5)</text>

  <text x="262" y="298" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="262" y="304" width="498" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="321" fill="#e2e8f0" fontSize="11" fontFamily="system-ui, sans-serif">Exploitation quotidienne — factures, e-reporting</text>

  <text x="262" y="354" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Fonctionnalités</text>
  <rect x="262" y="364" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="282" y="375" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Accès aux paramètres</text>
  <text x="282" y="388" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Donne accès à la page Paramètres (édition templates / connecteurs)</text>
  <rect x="262" y="404" width="14" height="14" rx="3" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="282" y="415" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">Mode lecture seule</text>
  <text x="282" y="428" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Aucune action de modification, suppression ou renvoi possible</text>

  <text x="262" y="456" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Sociétés</text>
  <text x="328" y="456" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(liste vide = toutes les sociétés)</text>
  <rect x="262" y="466" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="483" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">00001</text>
  <rect x="388" y="466" width="22" height="26" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="399" y="483" fill="#f87171" fontSize="11" textAnchor="middle">×</text>
  <rect x="262" y="498" width="120" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="515" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">00007</text>
  <rect x="388" y="498" width="22" height="26" rx="4" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="399" y="515" fill="#f87171" fontSize="11" textAnchor="middle">×</text>
  <rect x="262" y="530" width="140" height="26" rx="5" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="332" y="547" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">+ Ajouter une société</text>

  <text x="262" y="582" fill="#cbd5e1" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Pages autorisées</text>
  <text x="372" y="582" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">(liste vide = toutes les pages)</text>
  <rect x="500" y="572" width="44" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="586" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Tout</text>
  <rect x="550" y="572" width="48" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="574" y="586" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="600">Aucun</text>

  <line x1="262" y1="600" x2="760" y2="600" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="616" fill="#64748b" fontSize="9" letterSpacing="0.06em" fontFamily="system-ui, sans-serif" fontWeight="700">NAVIGATION</text>
  <text x="370" y="616" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">tout décocher</text>

  <rect x="262" y="624" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269" y="635" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="282" y="635" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Tableau de bord</text>
  <text x="372" y="635" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">dashboard</text>

  <rect x="442" y="624" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="449" y="635" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="462" y="635" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">E-Invoicing</text>
  <text x="526" y="635" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">invoices</text>

  <rect x="586" y="624" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="593" y="635" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="606" y="635" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Notifications</text>
  <text x="676" y="635" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">notifications</text>

  <rect x="262" y="650" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="269" y="661" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="282" y="661" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">E-Reporting</text>
  <text x="350" y="661" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">ereporting</text>

  <rect x="442" y="650" width="14" height="14" rx="3" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="462" y="661" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">e-Directory</text>
  <text x="526" y="661" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">edirectory</text>

  <rect x="586" y="650" width="14" height="14" rx="3" fill="#4a9eff" stroke="#4a9eff" strokeWidth="1"/>
  <text x="593" y="661" fill="white" fontSize="10" textAnchor="middle">✓</text>
  <text x="606" y="661" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <text x="700" y="661" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">integrationerrors</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liste de cartes</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copier / supprimer par rôle</text>
  <line x1="200" y1="115" x2="240" y2="105" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Panneau d'édition</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">onglets Permissions / Membres</text>
  <line x1="820" y1="256" x2="780" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cases par fonctionnalité</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aide sous chaque libellé</text>
  <line x1="200" y1="376" x2="240" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="20" y="490" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="505" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sociétés — tableau additif</text>
  <text x="30" y="518" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plus de saisie séparée par virgules</text>
  <line x1="200" y1="506" x2="240" y2="498" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>

  <rect x="820" y="640" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="655" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellés clairs</text>
  <text x="830" y="668" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">i18n nav.* + identifiant à côté</text>
  <line x1="820" y1="656" x2="780" y2="656" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#role-arrow)"/>
</svg>

---

## Liste des rôles

Le haut de la page présente chaque rôle existant sous forme de carte.

| Élément | Description |
|---|---|
| **Nom** | Identifiant interne du rôle (par exemple `admin`, `operator`, `viewer`). Sert à rattacher les utilisateurs au rôle depuis l'éditeur Utilisateurs. |
| **Description** | Résumé lisible en texte libre. |
| **Nombre de membres** | Nombre d'utilisateurs actuellement rattachés au rôle. |
| **Badge** | `Admin` quand la fonctionnalité *Accès aux paramètres* est activée, `User` sinon. Lecture rapide de la portée du rôle. |
| **⎘ Copier** | Duplique le rôle : le panneau d'édition se pré-remplit avec toutes les autorisations du rôle source ; le champ *Nom* est vide pour qu'un nouveau nom soit choisi ; la mention `(copy)` est ajoutée à la description. |
| **🗑 Supprimer** | Supprime le rôle après confirmation. Les utilisateurs rattachés perdent toute autorisation tant qu'ils ne sont pas réaffectés. |

Cliquer sur une carte ouvre le **panneau d'édition** sous la liste. Le bouton **+ Nouveau rôle** en haut à droite crée un rôle à partir de zéro.

---

## Panneau d'édition — Onglet Permissions

### Identité

| Champ | Description |
|---|---|
| **Nom** | *(visible uniquement à la création)* Identifiant interne du rôle. Doit être unique. |
| **Description** | Résumé lisible affiché dans la liste des rôles. |

### Fonctionnalités

Une courte liste d'options binaires. Chaque ligne porte une case à cocher et une aide en une ligne qui décrit l'effet de l'option.

| Fonctionnalité | Aide | Effet |
|---|---|---|
| **Accès aux paramètres** | *Donne accès à la page Paramètres (édition templates / connecteurs).* | Ouvre l'ensemble du menu Configuration. Le rôle reçoit alors le badge `Admin` dans la liste. |
| **Mode lecture seule** | *Aucune action de modification, suppression ou renvoi possible, même sur les pages autorisées.* | Les membres consultent l'application mais toute action d'écriture est désactivée — pertinent pour les comptes d'audit ou d'observation. |

### Sociétés

Tableau additif de codes société (`KCO`) qui délimitent la portée du rôle. Chaque ligne porte un champ libre et un bouton **×** pour la retirer ; le bouton **+ Ajouter une société** en bas ajoute une nouvelle ligne.

- **Liste vide = toutes les sociétés.** C'est la valeur par défaut typique — un tableau vide donne au rôle accès à toutes les sociétés présentes en base.
- L'ajout d'une seule ligne restreint le rôle aux seules sociétés listées.
- L'aide saisie indique *Code KCO (par ex. 00001)* et le champ utilise une police monospace pour faciliter le repérage des erreurs de saisie.

### Pages autorisées

Liste à cocher groupée qui reprend la barre latérale de l'application. Chaque case porte le **libellé clair** (la même clé i18n `nav.*` que la barre latérale) et l'**identifiant technique** en monospace atténué à côté — la ligne reste informative en français tout en restant trouvable par identifiant.

| Groupe | Pages |
|---|---|
| **Navigation** | `dashboard`, `invoices`, `ereporting`, `edirectory`, `notifications`, `integrationerrors`, `processinglog` |
| **Processing** | `fetchinput`, `import`, `retrievestatuses` |
| **Operations** | `process`, `extractandprocess`, `processapi` |
| **UBL** | `validate`, `xsleditor`, `xmlviewer`, `ubldefaults` |
| **Extract** | `extractbip` *(spécifique JD Edwards)*, `extract`, `extractftp` |
| **Documentation** | `releasenotes`, `statusreference`, `reasoncodes`, `ublreference`, `xref` |
| **Management** | `documents`, `pdftemplates`, `actions`, `notificationrules`, `fileversions` |

Aides :

- Boutons **Tout** / **Aucun** au-dessus des groupes — accordent ou révoquent toutes les pages en un clic.
- Case par groupe + bouton **tout cocher / tout décocher** — bascule un groupe entier en un clic.
- La case d'un groupe affiche un **état indéterminé** quand seules certaines pages du groupe sont cochées.
- **Liste vide = toutes les pages autorisées.** Convention identique à celle du champ Sociétés : un rôle non filtré voit tout.

### Enregistrer / Annuler

- **Créer** *(à la création)* / **Enregistrer** *(en édition)* enregistre le rôle et met à jour la liste.
- **Annuler** annule les modifications et ferme le panneau.
- Des messages de statut s'affichent sous le panneau (`Role created`, `Role updated`, `Role deleted`, messages d'erreur).

---

## Panneau d'édition — Onglet Membres

Disponible uniquement en édition d'un rôle existant (masqué à la création).

Liste tous les utilisateurs actuellement rattachés au rôle :

| Colonne | Description |
|---|---|
| **Identifiant** | Login de l'utilisateur. |
| **Nom complet** | Nom complet de l'utilisateur (ou `–` quand non renseigné). |
| **Statut** | `Actif` (vert) ou `Inactif` (rouge). |

Cette vue est en **lecture seule** — pour ajouter ou retirer un utilisateur d'un rôle, l'éditer depuis *Configuration → Sécurité → Utilisateurs*.

---

## Stockage des autorisations

En 2026.05.5, les quatre colonnes CSV de `F564251` ont été remplacées par une table dédiée d'autorisations sous forme de lignes.

```text
F564254
  PMROLE       — nom du rôle (FK vers F564251.RLNAME)
  PMCRAPPID    — type d'autorisation : 'page' / 'company' / 'feature'
  PMCRAPPVAL   — valeur : identifiant de page, code KCO, ou code de fonctionnalité
  PMENABL      — '1' actif / '0' inactif (utilisé lors de l'initialisation par dialecte)
```

L'enregistrement du rôle depuis l'éditeur écrit une ligne par page, une ligne par société et une ligne par fonctionnalité. Ajouter une future dimension d'autorisation (par exemple un accès par type de document) revient à un INSERT dans cette même table — aucune modification de schéma n'est requise.

L'initialisation est **décrite en clair** : supprimer `F564254` et relancer *Initialiser la base* recrée les autorisations `admin` et `viewer` par défaut sans toucher aux lignes de rôles. Le journal de l'initialisation indique le nombre d'autorisations nouvellement insérées pour vérification.

---

## Suppression d'un rôle

Cliquer sur l'icône **🗑** d'une carte de rôle ouvre une confirmation :

> *Supprimer le rôle « X » ? Les utilisateurs rattachés à ce rôle perdront leurs autorisations.*

La confirmation supprime le rôle et toutes les lignes d'autorisations de `F564254` qui le référencent. Les utilisateurs précédemment rattachés conservent leur compte mais perdent toute autorisation tant qu'ils ne sont pas réaffectés à un autre rôle.

---

## Conseils & bonnes pratiques

- **Créer un rôle par profil métier, pas par utilisateur.** Des rôles tels que `operator`, `auditor` ou `admin` se maintiennent plus facilement que des rôles individuels.
- **Accorder *Accès aux paramètres* avec parcimonie.** L'option ouvre tout le menu Configuration — la réserver à un petit groupe d'administrateurs.
- **Le *Mode lecture seule* convient aux comptes d'audit ou de conformité.** Combiné à *Accès aux paramètres* désactivé, il donne un parcours en lecture seule de l'application.
- **Utiliser le tableau Sociétés pour cloisonner par société.** Un tableau vide annule tout filtrage par société pour le rôle.
- **Utiliser Copier pour dériver un rôle.** Partir d'un rôle existant en ajustant quelques autorisations va beaucoup plus vite que reconstruire la liste à zéro — et le résultat colle mieux à l'intention du rôle source.
- **Relancer *Initialiser la base*** *(Connecteurs base de données → NomaUBL)* quand les autorisations `admin` ou `viewer` par défaut manquent — l'opération les recrée sans toucher aux rôles personnalisés.
- **Ne supprimer un rôle qu'après réaffectation de ses membres.** Après suppression, les membres perdent tout accès jusqu'à leur réassignation. L'onglet Membres permet de vérifier rapidement qui est concerné.
