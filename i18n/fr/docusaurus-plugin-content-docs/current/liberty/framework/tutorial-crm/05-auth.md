---
title: Étape 5 — Rôles et connexion
description: "Décider qui voit quoi dans le CRM : un rôle de consultation et un rôle commercial réglés sur le menu de l'application — lecture, ou lecture et modification —, deux utilisateurs de test, un périmètre de données par pays issu d'un attribut utilisateur, et la connexion avec le fournisseur d'identité de l'entreprise."
keywords: [Liberty Next, tutoriel, CRM, rôles, permissions, arborescence de menu, lecture, lecture et modification, utilisateurs, périmètre de données, attributs, OIDC]
---

# Étape 5 — Rôles et connexion

Jusqu'ici, tout s'est fait en superutilisateur, qui voit tout. Cette étape ajoute deux rôles, deux utilisateurs pour les tester, un périmètre de données et la connexion avec le compte d'entreprise.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 560" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tcrm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tcrm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tcrm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tcrm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="524" rx="14" fill="url(#tcrm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <rect x="941" y="32" width="139" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1010.5" y="46.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <rect x="240" y="66" width="415.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="254" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Les comptes, leurs rôles et attributs</text>
  <rect x="665.0" y="66" width="415.0" height="40" rx="8" fill="rgba(168,85,247,0.10)" stroke="#a855f7" strokeWidth="1.2"/>
  <text x="679.0" y="84" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="679.0" y="98" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Ce que chaque rôle peut ouvrir et les données qu’il voit</text>
  <rect x="320" y="120" width="110" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="375.0" y="134.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un rôle</text>
  <rect x="240" y="150" width="190" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="164.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Ajouter un rôle prédéfini…  ▾</text>
  <rect x="240" y="184" width="190" height="50" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="202" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-viewer</text>
  <text x="252" y="216" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Consulte le CRM</text>
  <text x="252" y="228" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">1 règle(s)</text>
  <rect x="240" y="242" width="190" height="50" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="252" y="260" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="252" y="274" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Travaille les affaires</text>
  <text x="252" y="286" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 règle(s)</text>
  <rect x="444" y="120" width="636" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="144" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">crm-sales</text>
  <rect x="984" y="130" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1024.0" y="144.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Dupliquer</text>
  <line x1="444" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="173" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <line x1="456" y1="181" x2="490.6" y2="181" stroke="#4a9eff" strokeWidth="2"/>
  <text x="524" y="173" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Périmètre de données · 1</text>
  <line x1="444" y1="182" x2="1080" y2="182" stroke="#1f2937" strokeWidth="1"/>
  <text x="460" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DU RÔLE</text>
  <text x="624" y="200" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="460" y="205" width="154" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="470" y="219.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">crm-sales</text>
  <rect x="624" y="205" width="440" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="634" y="219.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Travaille les affaires</text>
  <text x="460" y="250" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Base</text>
  <rect x="510" y="237" width="188" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="511" y="238" width="87" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="554.5" y="250.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘ Aucun accès</text>
  <line x1="599" y1="242" x2="599" y2="252" stroke="#334155" strokeWidth="1"/>
  <text x="648.5" y="250.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Accès complet</text>
  <text x="708" y="250" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">rien, plus ce que vous autorisez ci-dessous</text>
  <text x="460" y="280" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="460" y="290" width="604" height="140" rx="7" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <rect x="460" y="290" width="604" height="28" rx="7" fill="#1e293b" stroke="#1f2937" strokeWidth="1"/>
  <text x="470" y="308" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="494" y="308" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 3 visibles sur 3</text>
  <text x="958" y="308" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">toute l’application</text>
  <rect x="966" y="295" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="977.0" y="307.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="298" x2="988" y2="310" stroke="#334155" strokeWidth="1"/>
  <path d="M994,300 L999,301.5 L1004,300 L1004,308 L999,309.5 L994,308 Z M999,301.5 L999,309.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <rect x="1011" y="296" width="20" height="16" rx="3" fill="rgba(74,158,255,0.20)"/>
  <line x1="1010" y1="298" x2="1010" y2="310" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="307.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="298" x2="1032" y2="310" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="307.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="320" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="347" x2="1064" y2="347" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="337" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Pipeline</text>
  <text x="572" y="337" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 en lecture · 0 en modification</text>
  <text x="938" y="337" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <text x="952" y="337" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="324" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="325" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="336.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="327" x2="988" y2="339" stroke="#334155" strokeWidth="1"/>
  <path d="M994,329 L999,330.5 L1004,329 L1004,337 L999,338.5 L994,337 Z M999,330.5 L999,338.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="327" x2="1010" y2="339" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="336.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="327" x2="1032" y2="339" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="336.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="347" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="374" x2="1064" y2="374" stroke="#1f2937" strokeWidth="1"/>
  <text x="472" y="364" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">▾ Ventes</text>
  <text x="938" y="364" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <rect x="966" y="351" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="352" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="363.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="354" x2="988" y2="366" stroke="#334155" strokeWidth="1"/>
  <path d="M994,356 L999,357.5 L1004,356 L1004,364 L999,365.5 L994,364 Z M999,357.5 L999,365.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="354" x2="1010" y2="366" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="363.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="354" x2="1032" y2="366" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="363.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="374" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="401" x2="1064" y2="401" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="391" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="572" y="391" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">1 en lecture · 3 en modification</text>
  <text x="938" y="391" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <text x="952" y="391" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="378" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="379" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="390.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="381" x2="988" y2="393" stroke="#334155" strokeWidth="1"/>
  <path d="M994,383 L999,384.5 L1004,383 L1004,391 L999,392.5 L994,391 Z M999,384.5 L999,392.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="381" x2="1010" y2="393" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="390.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="381" x2="1032" y2="393" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="390.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="461" y="401" width="602" height="27" fill="rgba(74,158,255,0.07)"/>
  <line x1="460" y1="428" x2="1064" y2="428" stroke="#1f2937" strokeWidth="1"/>
  <text x="490" y="418" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="572" y="418" fill="#64748b" fontSize="7.5" fontFamily="ui-monospace, monospace">2 en lecture · 3 en modification</text>
  <text x="938" y="418" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">suit son dossier : lecture et modification</text>
  <text x="952" y="418" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="966" y="405" width="88" height="18" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <rect x="967" y="406" width="20" height="16" rx="3" fill="rgba(255,255,255,0.06)"/>
  <text x="977.0" y="417.5" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <line x1="988" y1="408" x2="988" y2="420" stroke="#334155" strokeWidth="1"/>
  <path d="M994,410 L999,411.5 L1004,410 L1004,418 L999,419.5 L994,418 Z M999,411.5 L999,419.5" fill="none" stroke="#64748b" strokeWidth="1"/>
  <line x1="1010" y1="408" x2="1010" y2="420" stroke="#334155" strokeWidth="1"/>
  <text x="1021.0" y="417.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✎</text>
  <line x1="1032" y1="408" x2="1032" y2="420" stroke="#334155" strokeWidth="1"/>
  <text x="1043.0" y="417.5" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="460" y="452" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <text x="460" y="468" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Rien au-delà des menus.</text>
  <rect x="984" y="498" width="80" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1024.0" y="512.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="912" y="498" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="944.0" y="512.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="190" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="205" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux rôles</text>
  <text x="30" y="218" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">consultation et vente</text>
  <line x1="200" y1="207.0" x2="240" y2="209" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque entrée suit</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ce que donne le choix, en chiffres</text>
  <line x1="200" y1="397.0" x2="568" y2="391" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rien à la main</text>
  <text x="30" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les écritures viennent avec la modif.</text>
  <line x1="200" y1="467.0" x2="460" y2="464" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toute l’application crm</text>
  <text x="1130" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Lecture (consultation) · modif. (vente)</text>
  <line x1="1120" y1="267.0" x2="1032" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre de données</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">COUNTRY = pays de l'utilisateur</text>
  <line x1="1120" y1="177.0" x2="644" y2="172" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
</svg>

---

## Deux rôles

**Liberty Next → Administrer → Accès → Rôles** : créer chaque rôle. L'onglet **Accès** présente l'arborescence du menu de chaque application, avec un contrôle à quatre niveaux sur chaque nœud — *Suit son dossier*, **Lecture**, **Lecture et modification**, **Masqué** — et le même choix pour toute l'application, au-dessus de son menu. Le serveur déduit ce dont les écrans ont besoin : en **Lecture**, leurs requêtes, leurs listes et les onglets de leur fiche ; en **Lecture et modification**, en plus, ce qu'ils écrivent et lancent. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md).

### `crm-viewer` — consulte le CRM

| Réglage | Valeur |
|---|---|
| Base | **Aucun accès** |
| Menus | **Lecture** sur toute l'application `crm` (au-dessus de son menu). |

Les titulaires voient les écrans et le tableau de bord, mais toute écriture est refusée : les requêtes d'écriture (`customers_put`, `deals_post`…) ne viennent qu'avec **Lecture et modification**.

### `crm-sales` — travaille les affaires

| Réglage | Valeur |
|---|---|
| Base | **Aucun accès** |
| Menus | **Lecture et modification** sur toute l'application `crm`. |

Rien à ajouter dans *Au-delà des menus* : les écritures des écrans Clients et Affaires viennent avec **Lecture et modification**. **Enregistrer** chaque rôle.

---

## Deux utilisateurs

**Liberty Next → Administrer → Accès → Utilisateurs → ＋ Ajouter un utilisateur** :

| Utilisateur | Rôle | Attribut |
|---|---|---|
| `alice` | `crm-viewer` | — |
| `bob` | `crm-sales` | `country = FR` |

Donner un mot de passe à chacun. Connectée en `alice` dans une fenêtre de navigation privée : le CRM affiche *Ventes* et *Pipeline* ; la modification d'un client est refusée. Connecté en `bob` : les dialogues enregistrent. Voir [Utilisateurs](../build/secure/users.md).

---

## Un périmètre de données — le pays de chaque commercial

Bob ne doit voir que les clients de son pays.

1. Faire porter le pays par les affaires : dans `deals_get`, joindre le client et sélectionner son pays :

```sql
SELECT d.ID, d.CUSTOMER_ID, d.NAME, d.STAGE, d.AMOUNT, d.CLOSE_DATE, d.OWNER, c.COUNTRY
FROM deals d JOIN customers c ON c.ID = d.CUSTOMER_ID
```

2. Dans le rôle `crm-sales`, onglet **Data scope**, une règle : colonne `COUNTRY`, connecteur `crm`, **From the user's attribute** `country`. Enregistrer.

Bob se déconnecte puis se reconnecte : Clients et Affaires n'affichent plus que les clients français — ACME Industries et Beta SARL — et une écriture hors de son périmètre est refusée. Le périmètre est appliqué par le serveur, aux écrans, au tableau de bord comme à l'assistant IA. Le rôle d'Alice n'a pas de règle : elle voit toujours tout. Voir [Rôles et permissions → Périmètre de données](../build/secure/roles-and-permissions.md#data-scope).

---

## Se connecter avec le compte d'entreprise

Pour que les utilisateurs se connectent avec leur compte d'entreprise (Entra ID, Keycloak, Okta…), renseigner **Liberty Next → Administrer → App → OpenID Connect (SSO)** avec les valeurs de l'application déclarée chez le fournisseur. Une fois **Activé** coché, un bouton **Se connecter avec OIDC** apparaît sur la page de connexion ; les nouveaux utilisateurs arrivent sans rôle, et un administrateur leur attribue `crm-viewer` ou `crm-sales`.

Recette complète : [Connexion OIDC](../cookbook/oidc-sso.md).

---

## Bilan

Deux rôles taillés dans le menu de l'application, des utilisateurs qui voient leur part, et des lignes filtrées par le serveur selon chaque utilisateur.

→ **[Étape 6 — IA et tâches](./06-ai-and-jobs.md)** : des questions en langage courant et une tâche quotidienne.
