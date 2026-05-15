---
title: Combinaison de rôles
description: "Combinaisons de rôles distinctes détenues par les utilisateurs sur chaque application connectée, avec le nombre d'utilisateurs derrière chaque combinaison."
keywords: [Nomasx-1, sécurité, combinaisons de rôles, matrice des rôles, portefeuille de rôles, audit]
---

# Combinaison de rôles

L'écran **Combinaison de rôles** regroupe les utilisateurs par **ensemble exact de rôles** qu'ils détiennent. Une ligne par couple `(Application, combinaison de rôles)`. Pour chaque portefeuille de rôles distinct trouvé parmi les utilisateurs actifs d'une application, l'écran indique le nombre d'utilisateurs qui détiennent exactement cette combinaison ainsi qu'un utilisateur témoin pour pouvoir creuser.

C'est la manière la plus concise de voir *à quoi ressemble réellement le modèle de sécurité en production* — non ce qui a été conçu sur le papier, mais ce que les utilisateurs portent effectivement.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="mtx-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#mtx-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Sécurité · Combinaison de rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">APP</text>
  <text x="140" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL.</text>
  <text x="240" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMBINAISON DE RÔLES</text>
  <text x="780" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTIL. TÉMOIN</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">82</text>
  <text x="240" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">APMGR_RO</text>
  <text x="780" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ZZ_USR_001</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">37</text>
  <text x="240" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR</text>
  <text x="780" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">YZ_USR_004</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="213" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">3</text>
  <text x="240" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">CPTA_FOUR,CPTA_CLI,APPROVER</text>
  <text x="780" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XX_USR_002</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12</text>
  <text x="140" y="245" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">1</text>
  <text x="240" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">ADMIN,FIN_HISTO,LEGACY,PRJMGR</text>
  <text x="780" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">XX_USR_003</text>

  <text x="60" y="282" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">Tri par nombre d'utilisateurs décroissant — les combinaisons à 1 utilisateur sont les exceptions à creuser</text>
</svg>

---

## Objectif de l'écran

Pour chaque application connectée, regrouper ses utilisateurs actifs par **ensemble exact de rôles** détenu et répondre à :

- **Quelle est la combinaison de rôles standard ?** La ligne au plus grand nombre d'utilisateurs correspond en général au profil d'onboarding standard — toute valeur en dessous mérite un œil.
- **Quelles sont les exceptions ?** Les combinaisons détenues par un ou deux utilisateurs cachent souvent des rôles résiduels d'anciennes responsabilités, des erreurs d'affectation ou des permissions accumulées au fil du temps.
- **Où se nichent les risques de séparation des tâches ?** Une combinaison qui mêle des rôles incompatibles (par exemple *créer un fournisseur* + *approuver un paiement*) est le point de départ le plus utile pour une analyse SoD — la matrice la fait apparaître directement.

L'écran complète *Affectations* en condensant des milliers de lignes en quelques dizaines — plus lisible, plus simple à discuter avec les métiers.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Application ID** | `APPS_ID` — identifiant numérique de l'application source. | Application à laquelle appartient la combinaison. |
| **Nb utilisateurs** | `USERS_COUNT` — `COUNT(DISTINCT USR_ID)` sur la combinaison. | Nombre d'utilisateurs actifs portant exactement ce portefeuille. |
| **Combinaison de rôles** | `RLU_ROLE_ID` — `STRING_AGG(RLU_ROLE_ID, ',' ORDER BY RLU_ROLE_ID)` par utilisateur. | Liste des rôles séparés par virgule, dans un ordre déterministe pour que les combinaisons identiques se regroupent. |
| **Utilisateur témoin** | `USR_ID` — `MAX(USR_ID)` par combinaison, restreint à l'application. | Un utilisateur réel portant la combinaison — point d'entrée pour rebondir vers l'écran *Audit Utilisateurs*. |

Le tri est appliqué sur *Nb utilisateurs* en ordre décroissant — les combinaisons les plus répandues remontent en premier.

---

## Conseils & bonnes pratiques

- **Changer d'angle de vue** — plutôt que de discuter de milliers d'affectations individuelles, se concentrer sur la douzaine de combinaisons les plus fréquentes. Chacune est un profil-type *de fait* utilisé dans l'entreprise.
- **Traquer les exceptions par le bas de la liste** — combinaisons à 1 ou 3 utilisateurs. Elles s'accumulent en silence quand les changements d'accès se font à la main au lieu de passer par un modèle.
- **Recouper les paires incompatibles** — choisir une paire connue comme *non cumulable* (par exemple *créer un fournisseur* + *approuver un paiement*) puis rechercher dans la colonne *Combinaison de rôles*. Chaque occurrence est une exception SoD à confirmer ou corriger.
- **Utiliser la colonne *Utilisateur témoin*** comme téléportation rapide vers l'écran *Audit Utilisateurs* — elle permet de vérifier concrètement ce que la combinaison autorise dans le système source.
