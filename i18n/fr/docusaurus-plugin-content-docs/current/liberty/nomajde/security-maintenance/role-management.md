---
title: Gestion des rôles
description: "Maintenir les utilisateurs et les rôles JD Edwards au même endroit — descriptions, rôles rattachés, environnements et workflow d'import du security workbench."
keywords: [Nomajde, JD Edwards, sécurité JDE, gestion des rôles, F00926, description utilisateur rôle, import security workbench, héritage de rôle]
---

# Gestion des rôles

L'écran **Gestion des rôles** est l'éditeur des utilisateurs et des rôles JD Edwards. JDE stocke la description de chaque utilisateur et de chaque rôle dans la même table — l'écran permet de maintenir les deux depuis une seule grille. Une ligne par `(Utilisateur ou Rôle)`.

Ouvrir une ligne pour éditer la description, rattacher des rôles, définir les environnements, exécuter l'import du security workbench. Les actions que JDE répartit habituellement entre les écrans *User Profile*, *Role Description* et *Security Workbench* sont rassemblées dans une seule boîte de dialogue.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njrm-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Maintenance sécurité · Gestion des rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">UTILISATEUR / RÔLE</text>
  <text x="320" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="750" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">SÉQUENCE</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="320" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Comptable AP et GL</text>
  <text x="750" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">10</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="320" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>
  <text x="750" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="320" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Acheteur (libération de commande)</text>
  <text x="750" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">15</text>
</svg>

---

## Objectif de l'écran

Pour chaque utilisateur ou rôle du catalogue de sécurité JDE :

- **Un seul écran pour utilisateurs et rôles.** JDE stocke les deux dans la même table ; cette page aussi — un rôle et un utilisateur apparaissent dans la grille, triables côte à côte.
- **Une seule boîte de dialogue pour toute la maintenance.** Éditer une ligne donne accès à la description, aux rôles rattachés, aux environnements et à l'import du security workbench — sans naviguer entre trois écrans JDE séparés.
- **Adapté aux opérations en masse.** Actions standard de la grille (ajouter, modifier, supprimer) plus l'action d'upload Nomajde — utile lors de l'arrivée d'un nouveau rôle livré par l'intégrateur sous forme de tableur.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Utilisateur / Rôle** | `AUUSER` — identifiant JDE. | Soit un identifiant utilisateur, soit un identifiant rôle — JDE stocke les deux dans la même table. |
| **Description** | `AUROLEDESC` — libellé. | Le libellé qui apparaît sur les écrans JDE et dans les rapports Nomajde. |
| **Séquence** | `AUSEQNO` — numéro de séquence. | Ordre d'affichage quand un utilisateur détient plusieurs rôles — le numéro le plus bas l'emporte. |

Autres attributs JDE portés par la ligne mais masqués par défaut : langue, courriel, dernière connexion, indicateur utilisateur intensif, marqueur action / inactif et les colonnes d'audit (programme, job, date, heure).

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour créer un nouvel utilisateur ou rôle, ou double-cliquer une ligne pour la modifier. La boîte de dialogue a quatre onglets. Les onglets *Rôles*, *Affectations* et *Environnements* sont masqués à l'ajout — ils apparaissent une fois l'enregistrement créé.

<svg viewBox="0 0 1000 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-dlg-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="260" rx="14" fill="url(#njrm-dlg-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifier utilisateur / rôle — DUPONT.J</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="120" height="28" rx="6" fill="rgba(74,158,255,0.20)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="120" y="118" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="700" textAnchor="middle">Défaut</text>
  <rect x="190" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Rôles</text>
  <rect x="320" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Affectations</text>
  <rect x="450" y="100" width="120" height="28" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="118" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" textAnchor="middle">Environnements</text>

  <text x="60" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Utilisateur / Rôle</text>
  <rect x="60" y="166" width="180" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="72" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>

  <text x="260" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="260" y="166" width="540" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="272" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Dupont, Julien — Finance</text>

  <text x="820" y="160" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Séquence</text>
  <rect x="820" y="166" width="100" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="832" y="183" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">20</text>

  <rect x="60" y="216" width="540" height="60" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="76" y="236" fill="#4a9eff" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ONGLET RÔLES — WORKFLOW SECURITY WORKBENCH</text>
  <text x="76" y="254" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Cliquer sur Importer la sécurité pour copier le paramétrage security workbench d'un autre</text>
  <text x="76" y="268" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">utilisateur / rôle, en six étapes guidées. Fusionner les rôles combine plusieurs sources.</text>

  <rect x="620" y="216" width="300" height="60" rx="10" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.30)" strokeWidth="1"/>
  <text x="636" y="236" fill="#22c55e" fontSize="10" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">À L'ENREGISTREMENT — AUTOMATISATION</text>
  <text x="636" y="254" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Les environnements par défaut sont</text>
  <text x="636" y="268" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">calculés et insérés automatiquement.</text>
</svg>

### Onglet 1 — Défaut

L'identification de l'utilisateur / rôle et les préférences d'affichage JDE (langue, pays, format de date, séparateur décimal, devise, fuseau horaire). Les trois colonnes affichées dans la grille se trouvent ici ; les attributs d'affichage JDE sont en dessous.

| Champ | À renseigner |
|---|---|
| **Utilisateur / Rôle** | L'identifiant JDE — le sign-on user pour un utilisateur, le code rôle pour un rôle. Obligatoire. |
| **Description** | Libellé qui apparaît sur les écrans JDE et dans les rapports Nomajde. |
| **Séquence** | Ordre d'affichage quand un utilisateur détient plusieurs rôles — le numéro le plus bas d'abord. |

Les champs d'affichage JDE (langue, pays, format de date, séparateur décimal, devise, fuseau, format d'heure, traçage OMW, droite-à-gauche, utilisateur intensif) gardent leur sémantique JDE. Les laisser vides pour hériter de la valeur par défaut JDE, ou les renseigner par utilisateur quand les règles de déploiement le demandent.

### Onglet 2 — Rôles

Table imbriquée listant les rôles rattachés à l'utilisateur (ou les rôles parents du rôle en cours d'édition). Ajouter une ligne pour rattacher un rôle, avec des dates d'effet et d'expiration. Masqué à l'ajout.

La barre d'outils de l'onglet Rôles porte deux actions — *Importer la sécurité* et *Fusionner les rôles* — qui automatisent l'essentiel du travail de clonage de sécurité JDE en un clic. Les deux opèrent sur trois catalogues JDE :

| Catalogue | Ce qu'il contient |
|---|---|
| **Security Workbench** | Sécurité application, action, ligne, colonne, options de traitement, onglet, sortie, hyper-exit, external-call. |
| **UDO Security** | Sécurité des User-Defined Objects — requêtes enregistrées, watch lists, formulaires personnels, requêtes avancées, E1 Pages. |
| **Menu Filtering** | Les variantes de tâche Solution Explorer que l'utilisateur a le droit de lancer. |

Chaque action parcourt les trois catalogues, supprime d'abord les lignes de la cible puis insère les lignes de la source — une suppression puis une insertion par catalogue, six étapes au total.

#### Importer la sécurité — cloner un utilisateur / rôle de référence

L'action copie le **paramétrage de sécurité complet** d'un utilisateur ou d'un rôle source unique sur la cible. La sécurité préalable de la cible est d'abord supprimée — le résultat est un clone exact.

<svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-import-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="140" rx="14" fill="url(#njrm-import-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Importer la sécurité — cloner un utilisateur / rôle source sur la cible</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="135" height="64" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="127" y="120" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1 · SUPPRIMER</text>
  <text x="127" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Workbench</text>
  <text x="127" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">lignes cible</text>

  <text x="200" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="215" y="100" width="135" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
  <text x="282" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2 · INSÉRER</text>
  <text x="282" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Workbench</text>
  <text x="282" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">depuis la source</text>

  <text x="355" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="370" y="100" width="135" height="64" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="437" y="120" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">3 · SUPPRIMER</text>
  <text x="437" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO Security</text>
  <text x="437" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">lignes cible</text>

  <text x="510" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="525" y="100" width="135" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
  <text x="592" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4 · INSÉRER</text>
  <text x="592" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UDO Security</text>
  <text x="592" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">depuis la source</text>

  <text x="665" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="680" y="100" width="135" height="64" rx="10" fill="rgba(248,113,113,0.08)" stroke="rgba(248,113,113,0.35)" strokeWidth="1"/>
  <text x="747" y="120" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5 · SUPPRIMER</text>
  <text x="747" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Menu Filtering</text>
  <text x="747" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">lignes cible</text>

  <text x="820" y="138" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="835" y="100" width="115" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
  <text x="892" y="120" fill="#22c55e" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">6 · INSÉRER</text>
  <text x="892" y="136" fill="#cbd5e1" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Menu Filtering</text>
  <text x="892" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">depuis la source</text>
</svg>

| Étape | Catalogue | Ce qu'elle fait |
|---|---|---|
| 1 | Security Workbench | Supprime chaque entrée workbench existante sur la cible. |
| 2 | Security Workbench | Copie chaque entrée workbench de la source vers la cible, ligne pour ligne. |
| 3 | UDO Security | Supprime chaque entrée UDO existante sur la cible. |
| 4 | UDO Security | Copie chaque entrée UDO de la source — un nouvel identifiant de ligne est alloué pour éviter les collisions avec ceux de la source. |
| 5 | Menu Filtering | Supprime chaque entrée menu-filter existante sur la cible. |
| 6 | Menu Filtering | Copie chaque entrée menu-filter de la source. |

Après les six étapes, l'utilisateur / rôle cible a la **même sécurité que la source** — mêmes applications, mêmes autorisations d'action, mêmes permissions UDO, même vue Solution Explorer.

#### Fusionner les rôles — consolider les rôles hérités en un jeu unique

L'action examine **chaque relation de rôle active** sur la cible (les *Relations de rôles* rattachées à la ligne) et consolide les paramétrages de sécurité de tous les rôles sources dans la cible. Quand deux rôles sources accordent un indicateur (par exemple *Exécuter*), le résultat fusionné prend la valeur la plus permissive. La sécurité préalable de la cible est d'abord supprimée.

<svg viewBox="0 0 1000 220" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '20px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrm-merge-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="160" rx="14" fill="url(#njrm-merge-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Fusionner les rôles — consolider chaque héritage actif sur la cible</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="200" height="80" rx="10" fill="rgba(74,158,255,0.06)" stroke="rgba(74,158,255,0.30)" strokeWidth="1"/>
  <text x="160" y="124" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SOURCES D'HÉRITAGE</text>
  <text x="160" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Chaque rôle rattaché à la cible</text>
  <text x="160" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">via Relations de rôles</text>
  <text x="160" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">limité aux héritages actifs</text>

  <text x="280" y="148" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="300" y="100" width="320" height="80" rx="10" fill="rgba(251,146,60,0.08)" stroke="rgba(251,146,60,0.35)" strokeWidth="1"/>
  <text x="460" y="124" fill="#fb923c" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FUSION — LE PLUS PERMISSIF L'EMPORTE</text>
  <text x="460" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Pour chaque (type, objet, data item) :</text>
  <text x="460" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">prendre le maximum sur tous les rôles sources</text>
  <text x="460" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">supprimer puis insérer · Workbench · UDO · Menu Filtering</text>

  <text x="640" y="148" fill="#4a9eff" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">→</text>

  <rect x="660" y="100" width="280" height="80" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)" strokeWidth="1"/>
  <text x="800" y="124" fill="#22c55e" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÔLE CIBLE — CONSOLIDÉ</text>
  <text x="800" y="146" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Une ligne de sécurité par objet,</text>
  <text x="800" y="162" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">reflétant l'union des sources</text>
  <text x="800" y="178" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">plus de résolution au sign-on</text>
</svg>

| Quand utiliser Fusionner les rôles | Ce qu'on obtient |
|---|---|
| Un rôle hérite de trois rôles sources et l'on veut un jeu plat plutôt que de résoudre l'héritage à chaque connexion. | Un *Security Workbench* consolidé sur la cible — JDE n'a plus à calculer l'union à la connexion. |
| Deux des rôles sources vont être retirés et l'on souhaite garder l'accès combiné uniquement sur la cible. | Les mêmes droits effectifs, exprimés sur la cible. Après la fusion, retirer l'héritage dans *Relations de rôles*. |
| Le security workbench dépasse ce qu'une connexion JDE résout confortablement à la volée. | Aplatir la hiérarchie une fois, gagner sur le temps de connexion et obtenir un jeu plus facile à auditer. |

Les deux actions se relancent sans risque — les lancer deux fois ne duplique pas le résultat. Toutes deux conservent les colonnes d'audit sur les lignes insérées (utilisateur Nomajde, ID programme JDE, horodatage), de sorte que l'*Audit Trail* les voit passer.

:::caution[Destructif sur la cible]
*Importer la sécurité* et *Fusionner les rôles* **suppriment d'abord les lignes existantes de la cible**. Toujours les exécuter sur un utilisateur / rôle fraîchement créé, ou après avoir confirmé que la sécurité courante de la cible n'est plus nécessaire.
:::

### Onglet 3 — Affectations

La vue miroir de l'onglet Rôles. Liste les enregistrements où l'utilisateur / rôle courant est la **source** d'un héritage de rôle — chaque utilisateur ou rôle qui hérite de sa sécurité. Masqué à l'ajout.

Éditer une ligne pour étendre la fenêtre d'effet ou révoquer l'héritage.

### Onglet 4 — Environnements

Table imbriquée listant les environnements déclarés pour l'utilisateur (`PD`, `PY`, `DV`, `CRP`…). Chaque environnement porte le rôle sous lequel l'utilisateur s'exécute et la fenêtre de validité de l'accès. Masqué à l'ajout.

À la création de l'enregistrement (flux **Ajouter**), Nomajde alimente automatiquement les environnements par défaut depuis la configuration JDE — pas de saisie manuelle le premier jour.

---

## À l'enregistrement — ce qui s'exécute en arrière-plan

L'enregistrement d'un nouvel utilisateur / rôle enchaîne quatre insertions JDE en une seule fois :

1. **Insérer un nouveau rôle** — écrit la ligne d'identification utilisateur / rôle.
2. **Récupérer les environnements par défaut** — lit la liste depuis la configuration JDE.
3. **Insérer les environnements par défaut** — alimente l'onglet *Environnements* avec les valeurs par défaut.
4. **Insérer les préférences d'affichage** — écrit la ligne de préférences d'affichage (langue, pays, format de date…) liée à l'utilisateur / rôle.

Les quatre étapes s'exécutent en un seul enregistrement — si l'une d'elles échoue, aucun enregistrement partiel n'est laissé en l'état.

### Re-fusion côté serveur de la sécurité *(2026.06.09)*

Chaque enregistrement sur un rôle enfant (un rôle *inclus par* d'autres rôles parents) déclenche une étape de fusion côté serveur qui re-dérive les lignes F00950 / F00950W / F9006 des parents à partir du nouvel état de l'enfant. Sans cela, un changement de permission sur un enfant n'apparaîtrait en production qu'après que chaque parent qui l'inclut ait été ouvert puis ré-enregistré à la main.

La re-fusion passe par une action `call_plugin` (`nomajde.security:j_remerge_security` avec `scope = "child_role"`) câblée sur chaque écran d'édition de rôle. Transparente à l'usage — l'opérateur enregistre simplement ; la fusion s'exécute dans la même transaction d'écriture.

Quand l'écran d'édition de rôle a le **suivi des modifications activé** (la configuration standard pour les environnements cibles de promotion), la même fusion est aussi inscrite comme entrée `CALL_PLUGIN` dans le [paquet de changements actif](../../nomaflow/change-packages.md) avec `change_replay = true`, de sorte que la re-fusion s'exécute à nouveau sur l'environnement cible après l'application des écritures de lignes du paquet.

Pour une re-fusion par lot sur l'ensemble des changements capturés dans le paquet brouillon (typique quand plusieurs rôles enfants ont été touchés ensemble), le job Nomaflow embarqué [`nomajde-remerge-security`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security) exécute le même plugin avec `scope = "package"`. Le câbler comme étape post-application sur les écrans contributeurs afin qu'il s'exécute une fois sur la cible une fois toutes les lignes capturées appliquées.

Pour une re-fusion système complète — récupération après une ré-importation des tables de sécurité, ou après une fusion identifiée comme défectueuse — le job [`nomajde-remerge-security-all`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security-all) exécute le même plugin avec `scope = "all"`. À utiliser avec parcimonie ; le traitement complet ré-écrit les lignes de chaque parent.

---

## Conseils & bonnes pratiques

- **Utiliser *Importer la sécurité* pour onboarder un nouvel utilisateur** en clonant une référence — bien plus rapide que reconstruire le workbench à la main.
- **La colonne *Séquence* compte** quand un utilisateur détient plusieurs rôles — JDE résout les droits effectifs selon l'ordre de séquence. Garder le rôle le plus restrictif au numéro de séquence le plus bas.
- **Maintenir utilisateurs et rôles au même endroit.** JDE les stocke tous deux dans *F00926* ; l'écran affiche les deux. Appliquer sa propre convention de nommage (par exemple `*_USER` pour les utilisateurs, `*_ROLE` pour les rôles) pour les séparer visuellement.
- **Contrôler *Nomasx-1 → Conflits → Synthèse par utilisateur*** après l'onboarding d'un utilisateur, pour vérifier que les rôles rattachés ne créent pas de conflit SoD.
