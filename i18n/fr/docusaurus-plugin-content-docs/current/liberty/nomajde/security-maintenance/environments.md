---
title: Environnements
description: "Maintenir la liste des environnements JD Edwards par utilisateur et par rôle — production, test, développement, CRP, avec l'ordre d'apparition à la connexion."
keywords: [Nomajde, JD Edwards, sécurité JDE, environnements, F0093, PD, PY, DV, CRP, environnements de connexion]
---

# Environnements

L'écran **Environnements** liste, pour chaque utilisateur et chaque rôle, les environnements JDE auxquels ils sont habilités à se connecter. Une ligne par `(Utilisateur ou Rôle, Environnement)`. L'écran alimente le sélecteur d'environnement que JDE affiche à la connexion.

Maintenir ici les affectations production / test / développement / CRP, dans une grille unique, au lieu d'ouvrir le formulaire JDE *User Environment Revisions* pour chaque compte.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njev-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njev-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Maintenance sécurité · Environnements</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="340" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">ENVIRONNEMENT</text>
  <text x="600" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SÉQUENCE</text>
  <text x="800" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PARENT</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="340" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PD910 — Production</text>
  <text x="600" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <circle cx="830" cy="145" r="5" fill="#64748b"/>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="340" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PY910 — Prototype</text>
  <text x="600" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>
  <circle cx="830" cy="177" r="5" fill="#64748b"/>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="340" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PD910 — Production</text>
  <text x="600" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>
  <circle cx="830" cy="209" r="5" fill="#22c55e"/>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur ou rôle :

- **La liste à la connexion.** Chaque ligne signifie : *cet utilisateur / rôle est habilité à se connecter à cet environnement, dans cet ordre d'affichage*. JDE utilise la liste pour alimenter le sélecteur à la connexion.
- **Sensible à l'héritage.** L'indicateur *Parent* passe au vert quand la ligne s'applique à un rôle qui est la source d'un héritage — la liste d'environnements est propagée à d'autres utilisateurs via *Relations de rôles*.
- **Chargement en masse.** Quand un nouvel environnement est ajouté au paysage JDE, les nouvelles affectations peuvent être chargées depuis Excel plutôt que saisies compte par compte.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Utilisateur / Rôle** | `LLUSER` — identifiant JDE. | L'utilisateur ou le rôle concerné par l'environnement. |
| **Environnement** | `LLLL` — code environnement. | L'environnement JDE (`PD910`, `PY910`, `DV910`, `CRP910`…). |
| **Séquence** | `LLSEQ` — ordre d'affichage. | Ordre d'apparition des environnements dans le sélecteur JDE à la connexion. |
| **Menu** | `LLMNI` — menu initial. Masqué par défaut. | Le menu JDE sur lequel l'utilisateur atterrit après connexion à cet environnement. |
| **Parent** | `IS_PARENT` — `Y` / `N`. Pastille verte si `Y`. | `Y` quand l'utilisateur / rôle est source d'au moins une relation de rôle — la liste d'environnements est héritée par les utilisateurs descendants. |

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour déclarer une nouvelle affectation d'environnement, ou double-cliquer une ligne pour la modifier. La boîte de dialogue est un formulaire unique.

| Champ | À renseigner |
|---|---|
| **Utilisateur / Rôle** | L'utilisateur ou le rôle concerné. Obligatoire. |
| **Environnement** | Le code environnement JDE — la recherche est filtrée par l'utilisateur / rôle sélectionné. Obligatoire. |
| **Séquence** | Ordre d'affichage sur l'écran de connexion. Le numéro le plus bas d'abord. |

Le *Menu initial* et l'indicateur *Parent* sont portés par la ligne mais ne sont pas éditables depuis la boîte de dialogue — ce sont des attributs dérivés.

---

## Conseils & bonnes pratiques

- **Choisir la *Séquence* avec soin.** Le premier environnement de la liste est la valeur par défaut JDE — choisir `PD910` pour un utilisateur métier et `DV910` pour un développeur.
- **Rattacher les environnements au rôle, pas à chaque utilisateur.** Quand un utilisateur hérite d'un rôle (voir *Relations de rôles*), il récupère automatiquement les environnements du rôle — bien plus simple à maintenir.
- **Une pastille *Parent* verte** signale une liste d'environnements qui se propage à de nombreux utilisateurs descendants. Toute modification de cette ligne affecte tous les héritiers — vérifier l'impact avant d'enregistrer.
- **Utiliser l'upload Excel** quand un nouvel environnement est ajouté (par exemple un nouvel environnement de test pour un déploiement) — générer les affectations hors ligne et importer d'un coup.
