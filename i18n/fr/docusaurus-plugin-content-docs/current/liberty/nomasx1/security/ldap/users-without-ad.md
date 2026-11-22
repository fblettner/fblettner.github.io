---
title: Utilisateurs sans AD
description: "Utilisateurs connus d'une application connectée mais absents du LDAP / Active Directory de l'entreprise — comptes techniques, fantômes ou identités non synchronisées."
keywords: [Nomasx-1, sécurité, LDAP, Active Directory, utilisateurs sans AD, comptes orphelins, comptes techniques]
---

# Utilisateurs sans AD

L'écran **Utilisateurs sans AD** liste tous les comptes connus d'une application connectée qui **ne peuvent pas être rapprochés** d'une entrée LDAP / Active Directory de l'entreprise. Une ligne par couple `(Application, Utilisateur)`.

Le rapprochement s'appuie sur deux attributs AD : la `Description` (généralement le matricule RH) et le `samAccountName` (login Windows). Quand ni l'un ni l'autre ne pointe vers une entrée AD, la ligne atterrit ici.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 317" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxldx-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxldx-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxldx-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxldx-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="277" rx="14" fill="url(#nxldx-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="58" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">LDAP - Users undefined</text>
  <rect x="412.86400000000003" y="46" width="44" height="16" rx="8.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="434.86400000000003" y="57.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">SELECT</text>
  <text x="240" y="75" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">nomasx1.ldap_undefined_get</text>
  <line x1="220" y1="88" x2="1100" y2="88" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">9 lignes · 8,1 ms</text>
  <rect x="952" y="100" width="142" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="953" y="101" width="64" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="985.0" y="113.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="1018" y1="105" x2="1018" y2="115" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="113.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <rect x="240" y="128" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="418" y="128" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="458.0" y="142.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="648" y="128" width="112" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="142.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Lignes max  défaut</text>
  <rect x="766" y="128" width="42" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="787.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="814" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="842.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="877" y="128" width="57" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="940" y="128" width="62" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="971.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="1008" y="128" width="72" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1044.0" y="142.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="240" y="160" width="840" height="24" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID (ID)</text>
  <text x="357" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">APPLICATION ID</text>
  <text x="440" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID (ID)</text>
  <text x="547" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR ID</text>
  <text x="639" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">UTILISATEUR</text>
  <text x="731" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="776" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">MATRICULE</text>
  <text x="835" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CRÉATION</text>
  <text x="928" y="175.0" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.04em" fontFamily="ui-monospace, monospace">DATE DE CONNEXION</text>
  <rect x="240" y="186" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="200.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BATCH01</text>
  <text x="547" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Batch user</text>
  <text x="639" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Batch user</text>
  <circle cx="743" cy="197.0" r="3.2" fill="#4ade80"/>
  <text x="776" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2017-06-02</text>
  <text x="928" y="200.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-21</text>
  <rect x="240" y="209" width="840" height="22" fill="rgba(255,255,255,0.015)"/>
  <text x="341" y="223.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">CONSULT1</text>
  <text x="547" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Consultant</text>
  <text x="639" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Consultant</text>
  <circle cx="743" cy="220.0" r="3.2" fill="#4ade80"/>
  <text x="776" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace"></text>
  <text x="835" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2025-02-10</text>
  <text x="928" y="223.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2026-11-14</text>
  <rect x="240" y="232" width="840" height="22" fill="#0d1220"/>
  <text x="341" y="246.3" fill="#cbd5e1" fontSize="8.8" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="357" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ERP-PROD</text>
  <text x="440" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">LEGACY01</text>
  <text x="547" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <text x="639" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Legacy account</text>
  <circle cx="743" cy="243.0" r="3.2" fill="#f87171"/>
  <text x="776" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">E0990</text>
  <text x="835" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2014-06-22</text>
  <text x="928" y="246.3" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">2023-11-04</text>
  <text x="240" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <rect x="321.4" y="265" width="52" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="331.4" y="278.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">50  ▾</text>
  <text x="385.4" y="277" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Affichage 1–9 sur 9</text>
  <rect x="992" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1001.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">«</text>
  <rect x="1014" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1023.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">‹</text>
  <rect x="1036" y="265" width="18" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1045.0" y="278.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="1058" y="265" width="18" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1067.0" y="278.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">›</text>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Aucun compte d'annuaire</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par application × utilisateur</text>
  <line x1="200" y1="227.0" x2="250" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldx-arrow)"/>
  <rect x="1120" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Matricule</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide = rapprochement impossible</text>
  <line x1="1120" y1="167.0" x2="796" y2="194" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldx-arrow)"/>
  <rect x="1120" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Connexion récente</text>
  <text x="1130" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le compte à examiner d'abord</text>
  <line x1="1120" y1="257.0" x2="1040" y2="208" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxldx-arrow)"/>
</svg>

---

## Objectif de l'écran

Pour chaque compte qui existe dans un système source sans entrée dans l'annuaire :

- **Est-ce un compte technique légitime ?** Comptes batch, comptes de service, comptes d'intégration ne sont en général pas provisionnés dans l'AD par construction. Les marquer comme tels dans *Paramètres → Propriétés utilisateurs* pour qu'ils cessent d'être signalés.
- **Est-ce une identité gérée hors entreprise ?** Les consultants dont l'AD est celui du cabinet, et non celui du client, atterrissent ici aussi. Même traitement — les déclarer une fois pour toutes.
- **Est-ce un compte fantôme ?** Une vraie personne, pas d'entrée AD, une connexion récente. C'est la ligne à investiguer en priorité — l'entrée AD a probablement été supprimée au moment du départ sans que le compte du système source ne soit désactivé.

L'écran est l'audit le plus net du *processus de départ* : chaque ligne est un trou potentiel.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `USR_APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient le compte sans correspondance. |
| **Utilisateur ID** | `USR_ID` — identifiant utilisateur. | Login technique sans correspondance AD. |
| **Nom** | `USR_NAME` — nom d'affichage. | Nom lisible. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | Les comptes actifs remontent en priorité ; un compte inactif sans AD est normal (sortie correctement clôturée). |
| **Matricule** | `USR_REGISTRATION` — matricule RH stocké dans le système source. | Champ utilisé par la jointure LDAP face à l'attribut `Description` côté AD. Des valeurs vides ou erronées sont la principale cause de faux positifs. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte — compte ancien et connexion récente = candidat fantôme. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification. Définit l'urgence. |

---

## Conseils & bonnes pratiques

- **Trier la *Date de connexion* en ordre décroissant** pour faire remonter les fantômes — une connexion récente sans entrée AD est la ligne la plus urgente.
- **Un matricule vide est la première vérification** — si le matricule RH manque sur le compte source, la jointure LDAP ne peut jamais aboutir, même si la personne existe bien dans l'AD. Renseigner le matricule dans le système source puis relancer le scan.
- **Déclarer les comptes techniques connus** via l'écran *Paramètres → Propriétés utilisateurs* pour qu'ils cessent d'apparaître ici. La liste des exceptions récurrentes raccourcit, les vrais fantômes ressortent.
- **Recouper avec l'administrateur AD** — si une ligne correspond à une personne dont l'entrée AD a été supprimée la veille, c'est la preuve que le processus de départ doit également passer par le système source.
