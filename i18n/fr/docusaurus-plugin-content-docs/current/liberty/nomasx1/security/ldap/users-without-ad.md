---
title: Utilisateurs sans AD
description: "Utilisateurs connus d'une application connectée mais absents du LDAP / Active Directory de l'entreprise — comptes techniques, fantômes ou identités non synchronisées."
keywords: [Nomasx-1, sécurité, LDAP, Active Directory, utilisateurs sans AD, comptes orphelins, comptes techniques]
---

# Utilisateurs sans AD

L'écran **Utilisateurs sans AD** liste tous les comptes connus d'une application connectée qui **ne peuvent pas être rapprochés** d'une entrée LDAP / Active Directory de l'entreprise. Une ligne par couple `(Application, Utilisateur)`.

Le rapprochement s'appuie sur deux attributs AD : la `Description` (généralement le matricule RH) et le `samAccountName` (login Windows). Lorsque ni l'un ni l'autre ne pointe vers une entrée AD, la ligne atterrit ici.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lda-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#lda-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · LDAP · Utilisateurs sans AD</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="120" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="260" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="570" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MATRICULE</text>
  <text x="720" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CRÉATION</text>
  <text x="840" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CONNEXION</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SVC_BATCH</text>
  <text x="260" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Compte de service batch</text>
  <rect x="460" y="136" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="480" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="570" y="149" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="720" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2017-04-02</text>
  <text x="840" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-14</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">EX_JDOE</text>
  <text x="260" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe (parti)</text>
  <rect x="460" y="168" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="480" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="570" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">200714</text>
  <text x="720" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2014-02-10</text>
  <text x="840" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace">2024-09-12</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="120" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CONS.X</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Consultant externe X</text>
  <rect x="460" y="200" width="40" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="480" y="212" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="570" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="720" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2024-01-15</text>
  <text x="840" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-30</text>

  <rect x="60" y="232" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="250" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 PROFILS ATTENDUS</text>
  <text x="72" y="266" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Comptes techniques / batch (pas d'AD par construction), identités gérées hors entreprise (consultants, AD non synchronisé), comptes de partants dont l'entrée AD a déjà été supprimée.</text>
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
