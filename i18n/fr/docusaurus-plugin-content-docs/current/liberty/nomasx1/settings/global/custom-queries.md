---
title: DWH
description: "Fragments SQL personnalisés surchargeant les requêtes Nomasx-1 par défaut, par application."
keywords: [Nomasx-1, paramètres, requêtes personnalisées, surcharge, SQL, JDBC, par application]
---

# DWH

L'écran **DWH** (*Custom Queries* dans la nomenclature interne) permet à chaque application de surcharger le SQL exécuté par défaut par Nomasx-1. Une ligne par couple `(Application, Méthode)` — *Méthode* est le hook du connecteur (par exemple `get_users`, `get_assignments`, `get_object_usage`) et *SQL Blob* porte le SQL de remplacement. Des champs JDBC / utilisateur / mot de passe optionnels permettent à la surcharge de viser un schéma différent de celui de l'application.

C'est le point d'extension. Quand un système source range ses tables de sécurité différemment de l'attente canonique de Nomasx-1, on surcharge la méthode ici plutôt que de toucher au produit.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="scq-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#scq-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Paramètres · Global · DWH</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MÉTHODE</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AUDIT UTIL.</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">AUDIT DATE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">21 — SAP Prod</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">get_users</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="800" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-04-22</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">99 — ERP sur mesure</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">get_object_usage</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">admin</text>
  <text x="800" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-05-02</text>
</svg>

---

## Objectif de l'écran

- **Surcharger par application.** Une ligne remplace la requête par défaut que Nomasx-1 exécuterait pour la méthode nommée sur l'application nommée.
- **Ajouter une connexion dédiée si besoin.** Quand la requête surchargée vise un autre schéma ou d'autres identifiants, les colonnes *JDBC / Utilisateur / Mot de passe* les portent ; sinon la surcharge tourne sur la connexion principale de l'application.
- **Tracer la modification.** *Utilisateur d'audit* + *Date d'audit* enregistrent qui a introduit la surcharge et quand — utile quand un scan se met à se comporter différemment.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `SQL_APPS_ID` — identifiant de l'application. Joint à *Applications* pour le nom convivial. | Application concernée par la surcharge. |
| **Méthode** | `SQL_METHOD` — nom du hook connecteur. | Emplacement de requête surchargé. |
| **SQL Blob** | `SQL_BLOB` — texte. Masqué par défaut. | Fragment SQL de remplacement. |
| **JDBC / Utilisateur / Mot de passe** | `SQL_JDBC`, `SQL_USER`, `SQL_PASSWORD` — optionnels. Masqués. | Connexion dédiée utilisée par la surcharge. |
| **Audit utilisateur / date** | `SQL_AUDIT_USER`, `SQL_AUDIT_DATE` — qui / quand. | Traçabilité de la modification. |

---

## Conseils & bonnes pratiques

- **Tester le SQL hors Nomasx-1** d'abord — une surcharge syntaxiquement cassée se traduit par une grille vide sur l'écran consommateur.
- **Limiter le périmètre de la surcharge.** Surcharger une méthode à la fois plutôt que réécrire une branche entière — plus simple à maintenir et à annuler.
- **Documenter le *pourquoi*** au moment de la revue ou dans un ticket — six mois plus tard, la surcharge doit pouvoir être relue par un autre administrateur.
- **Retirer la ligne dès qu'elle n'est plus utile** pour que Nomasx-1 retombe sur le comportement par défaut.
