---
title: Relations de rôles
description: "Maintenir le graphe d'héritage de rôles JD Edwards dans une grille unique — apparier rôle source et rôle cible, définir les dates d'effet et d'expiration, charger en masse depuis Excel."
keywords: [Nomajde, JD Edwards, sécurité JDE, relations de rôles, héritage de rôle, F95921, date d'effet, date d'expiration]
---

# Relations de rôles

L'écran **Relations de rôles** maintient le graphe d'héritage de rôles JD Edwards. Une ligne par `(Rôle FROM, Rôle TO, Date d'effet)`. Chaque ligne signifie : *le rôle TO hérite du paramétrage de sécurité du rôle FROM pendant cette fenêtre de dates*.

C'est l'écran que l'équipe sécurité ouvre pour accorder à un rôle junior les droits d'un rôle senior — ou pour prolonger la fenêtre d'effet d'un héritage qui arrive à expiration.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 260" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="njrr-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="200" rx="14" fill="url(#njrr-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde · Maintenance sécurité · Relations de rôles</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE FROM</text>
  <text x="300" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE TO</text>
  <text x="520" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EFFET</text>
  <text x="700" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">EXPIRATION</text>
  <text x="870" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">RÔLE FU 1</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">FIN_BOOKKEEPER</text>
  <text x="300" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">DUPONT.J</text>
  <text x="520" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-01-01</text>
  <text x="700" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-12-31</text>
  <text x="870" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">PROC_BUYER</text>
  <text x="300" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">MARTIN.S</text>
  <text x="520" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2025-09-01</text>
  <text x="700" y="181" fill="#fb923c" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">2026-06-30</text>
  <text x="870" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">AR_CASHIER</text>
  <text x="300" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">GARCIA.L</text>
  <text x="520" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">2026-03-15</text>
  <text x="700" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
  <text x="870" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">—</text>
</svg>

---

## Objectif de l'écran

Pour chaque ligne d'héritage :

- **L'héritage, ligne à ligne.** Une ligne de relation signifie : *le rôle FROM transmet son paramétrage de sécurité au rôle TO, entre la date d'effet et la date d'expiration*. Le rôle TO peut être un rôle junior ou un utilisateur — JDE traite les deux de la même façon.
- **Des fenêtres d'accès datées.** Date d'effet et date d'expiration rendent l'héritage temporaire par défaut. Les expirations dans les 30 prochains jours apparaissent en orange ; celles déjà dépassées en rouge — toutes deux à revoir.
- **Chargement en masse.** L'écran prend en charge l'upload Excel — quand l'intégrateur livre un lot de relations de rôles pour un déploiement, importer le fichier plutôt que saisir 200 lignes à la main.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **Rôle FROM** | `RLFRROLE` — rôle source. | Le rôle qui *transmet* son paramétrage de sécurité. |
| **Rôle TO** | `RLTOROLE` — rôle ou utilisateur cible. | Le rôle ou l'utilisateur qui *hérite* de la sécurité. JDE stocke utilisateurs et rôles dans la même table. |
| **Date d'effet** | `RLEFFDATE` — date de début. | Jour à partir duquel l'héritage prend effet. |
| **Date d'expiration** | `RLEXPIRDATE` — date de fin. | Jour de fin de l'héritage. Vide = pas de date de fin. |
| **Rôle FU 1** | `RLFUROLE1` — rôle secondaire. | Second rôle optionnel mêlé à l'héritage — utilisé pour les *mélanges de rôles* (le rôle FROM plus un rôle latéral). |

Champs JDE internes portés par la ligne mais masqués : type de rôle, indicateur rôle système, indicateur rôle par défaut, rôles FU 2 à 9, plus les colonnes d'audit.

---

## Boîte de dialogue d'édition

Cliquer **Ajouter** dans la barre d'outils pour créer une nouvelle relation, ou double-cliquer une ligne pour la modifier. La boîte de dialogue est un formulaire unique avec les cinq champs visibles.

| Champ | À renseigner |
|---|---|
| **Rôle TO** | Le rôle ou l'utilisateur qui reçoit l'héritage de sécurité. Obligatoire. |
| **Rôle FROM** | Le rôle qui transmet sa sécurité. Obligatoire. |
| **Date d'effet** | Début de la fenêtre d'héritage. Obligatoire. |
| **Date d'expiration** | Fin de la fenêtre. Vide pour un héritage sans terme. |
| **Rôle FU 1** | Second rôle optionnel à mêler à l'héritage — usage rare. |

Le triplet `(Rôle TO, Rôle FROM, Date d'effet)` est la clé unique — JDE l'utilise pour rechercher l'héritage à l'ouverture de session.

---

## Suivi des modifications

Les affectations modifiées ici sont **captées dans le [paquet de modifications](../../nomaflow/change-packages.md) actif**, sous l'entité `assignments`. Chaque lien ajouté ou retiré devient une entrée vérifiable : un changement d'affectation se promeut du développement vers la production sous forme de lot relu.

La sécurité effective d'un rôle parent dérive de ces affectations ; branchez donc le job [`nomajde-remerge-security`](../../nomaflow/bundled-jobs.md#nomajde-remerge-security) en étape post-application sur cet écran — les parents impactés sont alors re-fusionnés sur la cible une fois les écritures d'affectation appliquées.

---

## Conseils & bonnes pratiques

- **Toujours fixer une date d'expiration** sauf si la relation est vraiment permanente. Les héritages bornés dans le temps remontent sur le tableau de bord avant leur expiration — pratique bien plus sûre que des octrois sans terme.
- **Utiliser l'upload Excel** pour les lots livrés par l'intégrateur. Le flux *Ajouter* gère les lignes unitaires ; l'upload est fait pour la dizaine ou vingtaine de lignes qui accompagnent un nouveau module.
- **Trier par *Date d'expiration* croissante** pour faire remonter les prochaines expirations — liste naturelle pour la revue d'accès mensuelle.
- **Contrôler *Nomasx-1 → Conflits → Synthèse par rôle*** après l'attribution d'un nouvel héritage — combiner deux rôles crée souvent un conflit SoD invisible sur chaque rôle pris séparément.
