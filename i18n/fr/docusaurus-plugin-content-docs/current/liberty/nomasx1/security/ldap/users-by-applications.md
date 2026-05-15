---
title: Utilisateurs par applications
description: "Croisement des départements LDAP et des applications — qui, par département AD, est censé avoir accès à quelle application."
keywords: [Nomasx-1, sécurité, LDAP, Active Directory, mapping département, accès application, attendu vs réel]
---

# Utilisateurs par applications

L'écran **Utilisateurs par applications** est la matrice des *accès attendus* : pour chaque combinaison *(groupe AD, application, département AD)*, il affiche tous les utilisateurs LDAP qui devraient avoir accès à cette application, en regard du compte source réellement provisionné et des rôles qu'il porte.

C'est la réponse la plus claire à la question *« qui est censé être sur quelle application »* — la photographie attendue par la RH et l'IT, pas celle effectivement présente dans le système source.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 340" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lba-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="280" rx="14" fill="url(#lba-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · LDAP · Utilisateurs par applications</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">GROUPE</text>
  <text x="160" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">NOM AD</text>
  <text x="460" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DÉPARTEMENT</text>
  <text x="590" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. ID</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLES</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">John Doe</text>
  <text x="460" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDOE</text>
  <rect x="700" y="136" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="148" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR,APPROVER</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Marie Martin</text>
  <text x="460" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MMARTIN</text>
  <rect x="700" y="168" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="180" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FINANCE</text>
  <text x="160" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Pierre Durand</text>
  <text x="460" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN-AP</text>
  <text x="590" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">—</text>
  <text x="700" y="213" fill="#f87171" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">Aucun compte</text>
  <text x="800" y="213" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SUPPLY</text>
  <text x="160" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Prod</text>
  <text x="320" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Anna Khan</text>
  <text x="460" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC-OPS</text>
  <text x="590" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AKHAN</text>
  <rect x="700" y="232" width="50" height="16" rx="3" fill="rgba(74,222,128,0.18)" stroke="rgba(74,222,128,0.40)" strokeWidth="1"/>
  <text x="725" y="244" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Actif</text>
  <text x="800" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">SC_PLANNER</text>

  <rect x="60" y="264" width="880" height="48" rx="8" fill="rgba(255,159,10,0.08)" stroke="rgba(255,159,10,0.30)" strokeWidth="1"/>
  <text x="72" y="282" fill="#fb923c" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ATTENDU VS RÉEL</text>
  <text x="72" y="298" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Colonne « Util. ID » vide sur une ligne AD mappée = accès attendu non provisionné. Compte présent sans rôle = provisionné sans habilitation. Deux trous à fermer avec l'administrateur sécurité.</text>
</svg>

---

## Objectif de l'écran

Pour chaque combinaison *(groupe AD / application / département AD)* :

- **Qui est censé avoir accès ?** Les colonnes côté LDAP (Nom, Département, Description, Expiration) décrivent l'utilisateur attendu.
- **Le compte est-il effectivement provisionné ?** Les colonnes côté source (Util. ID, Statut, Connexion, Création, Rôles) décrivent le compte réel. Des colonnes source vides sur une ligne LDAP signifient : *accès attendu jamais provisionné*.
- **Le portefeuille de rôles correspond-il au département ?** Un utilisateur du département FINANCE ne portant qu'un rôle commercial est une mauvaise configuration.
- **Y a-t-il des comptes supplémentaires ?** L'écran fait remonter à la fois les trous (LDAP sans compte source) et les paires correctement appariées. Combiné à *Utilisateurs sans AD*, il couvre l'écart attendu/réel dans les deux sens.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Groupe** | `LDAPD_GROUP` — texte. | Regroupement de haut niveau (Finance, Supply, RH, IT, etc.). Défini dans *Paramètres* (page suivante). |
| **Application** | `APPS_NAME` — texte. | Application à laquelle le groupe est rattaché. |
| **Nom AD** | `LDAP_NAME` — texte. | Nom affiché de l'utilisateur LDAP. |
| **Département AD** | `LDAPD_DEPARTEMENT` — texte. | Département AD qui pilote l'accès attendu. |
| **Description AD** | `LDAP_DESCRIPTION` — texte. | Matricule RH / texte libre — clé de jointure côté source. |
| **Expiration AD** | `LDAP_EXPIRES` — date. | Date à laquelle le compte AD est planifié pour expirer. |
| **Société AD** | `LDAP_COMPANY` — texte. | Entité juridique côté AD. |
| **Titre AD** | `LDAP_TITLE` — texte. | Fonction côté AD. |
| **Utilisateur ID** | `USR_ID` — identifiant source. | Compte source apparié. Vide = accès attendu non provisionné. |
| **Nom** | `USR_NAME` — nom d'affichage côté source. | Nom lisible côté source. |
| **Matricule** | `USR_REGISTRATION` — matricule RH côté source. | Valeur ayant servi à la jointure. |
| **Statut** | `USR_STATUS` — `01` signifie *Actif*. | État du compte côté source. |
| **Date de connexion** | `USR_DT_LOGIN` — date. | Dernière authentification côté source. |
| **Date de création** | `USR_DT_CREATION` — date. | Date de création du compte côté source. |
| **Rôles** | `RLU_ROLE_ID` — liste séparée par virgule. | Portefeuille effectif côté source, trié alphabétiquement. Vide = compte présent sans rôle. |

---

## Conseils & bonnes pratiques

- **Trier par *Groupe* + *Département*** pour traiter un domaine fonctionnel à la fois. Conduire la revue des accès département par département passe à l'échelle, ligne par ligne ne passe pas.
- **Repérer en priorité les lignes à *Utilisateur ID* vide** — ce sont les accès attendus jamais provisionnés. Nouvelle arrivée qui n'a pas encore reçu son compte JDE, renouvellement de contrat dont l'AD existe mais dont le compte source a été supprimé lors du précédent départ.
- **Puis les lignes *Utilisateur ID* renseigné mais *Rôles* vide** — le compte existe sans aucune habilitation. En général une étape de provisionnement interrompue à mi-chemin.
- **Le mécanisme de regroupement se configure dans *Paramètres*** (page suivante). Ajouter un mapping de département change la composition des lignes à partir du scan suivant.
