---
title: Vues de grille enregistrées
description: "Enregistrer les colonnes, le tri, les filtres et le regroupement d'une grille sous forme de vue nommée — les vues personnelles suivent l'utilisateur sur tous ses appareils, et un administrateur peut publier des vues partagées dont une par défaut. Couvre aussi la vue Résumé de l'écran — lignes parents comptées par la base, lignes de détail chargées à la demande — et le filtre à la journée sur les colonnes horodatées."
keywords: [Liberty Framework, vues de grille, vues enregistrées, table view, vue Résumé, colonnes, filtres, tri, regroupement, vue par défaut, vues partagées, filtre à la journée, filtre horodatage, chargement paresseux]
---

# Vues de grille enregistrées

Toute grille de données — la table d'un écran ou une Table View ad hoc — peut mémoriser sa mise en page. Une **vue** enregistre toute la présentation de la grille et la rétablit en un clic :

- quelles **colonnes** sont visibles, et leur **ordre** ;
- le **tri** ;
- les **filtres** par colonne ;
- le **regroupement** ;
- la **taille de page**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 330" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="300" rx="14" fill="url(#svw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="730" y="28" width="194" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="731" y="29" width="61" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="761.5" y="43.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Tableau</text>
  <line x1="793" y1="33" x2="793" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="830.0" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Graphique</text>
  <line x1="867" y1="33" x2="867" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="895.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Résumé</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="72" width="80" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="280.0" y="86.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues ▾</text>
  <rect x="328" y="72" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="367.0" y="86.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes ▾</text>
  <rect x="414" y="72" width="78" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="453.0" y="86.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="880" y="72" width="80" height="22" rx="5" fill="url(#svw-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="86.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <rect x="240" y="100" width="230" height="196" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="120" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARTAGÉES</text>
  <text x="256" y="140" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Standard</text>
  <rect x="380" y="129" width="53" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="406.5" y="141.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">default</text>
  <text x="256" y="160" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Fin de mois</text>
  <text x="252" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MES VUES</text>
  <text x="256" y="206" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">Mes clients France</text>
  <text x="448" y="206" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <line x1="248" y1="220" x2="462" y2="220" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="240" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enregistrer sous…</text>
  <text x="256" y="262" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="256" y="284" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Réinitialiser</text>
  <rect x="486" y="100" width="474" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <text x="666" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAYS</text>
  <text x="746" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STATUT</text>
  <text x="856" y="117.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIÉ</text>
  <rect x="486" y="132" width="474" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">ACME Industries</text>
  <text x="666" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="746" y="137.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="766.5" y="148.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="856" y="148.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">27/10/2026</text>
  <rect x="486" y="162" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Beta SARL</text>
  <text x="666" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">FR</text>
  <rect x="746" y="167.0" width="41" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="766.5" y="178.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Actif</text>
  <text x="856" y="178.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">25/10/2026</text>
  <rect x="486" y="192" width="474" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Gamma SA</text>
  <text x="666" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">BE</text>
  <rect x="746" y="197.0" width="56" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="774.0" y="208.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Prospect</text>
  <text x="856" y="208.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12/10/2026</text>
  <rect x="10" y="72" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu Vues</text>
  <text x="20" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">partagées et personnelles</text>
  <line x1="210" y1="89.0" x2="240" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vues personnelles</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">suivent l'utilisateur</text>
  <line x1="210" y1="217.0" x2="256" y2="206" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Résumé</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comptages par groupe</text>
  <line x1="1000" y1="47.0" x2="910" y2="40" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La grille</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">colonnes, tri, filtres</text>
  <line x1="1000" y1="177.0" x2="960" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
</svg>

---

## Vues personnelles et vues partagées

Le menu **Vues** de la barre d'outils de la grille liste deux groupes :

- **Partagées** — des vues publiées, en lecture seule, disponibles pour tous sur cet écran. Un administrateur les crée dans l'onglet *Vues* du [Concepteur d'écran](build/screens/overview.md), et peut en marquer une par **défaut** — la disposition avec laquelle la grille s'ouvre.
- **Mes vues** — les vues enregistrées par l'utilisateur lui-même. Elles sont stockées par utilisateur sur le serveur : elles **le suivent sur tous ses appareils et toutes ses sessions**, sans limite de nombre par grille.

Un utilisateur lit les vues partagées et gère les siennes ; publier une vue pour tous est une action d'administrateur dans le Concepteur.

---

## Travailler avec les vues

| Action | Ce qu'elle fait |
|---|---|
| **Enregistrer sous…** | Nomme les colonnes, le tri, les filtres et le regroupement actuels comme une nouvelle vue personnelle. Réutiliser un nom écrase cette vue. |
| **Enregistrer** | Écrase sur place la vue personnelle active (visible seulement quand la vue active est l'une des vôtres). |
| Sélectionner une vue | Applique une vue partagée ou personnelle. |
| **Supprimer la vue** | Retire l'une de ses vues (l'icône corbeille). |
| **Réinit.** | Revient à la vue partagée par défaut de l'écran, ou à sa disposition de colonnes de base s'il n'y en a pas. Pratique quand un état enregistré plus ancien entre en conflit avec une colonne désormais masquée sous condition. *Réinit.* se trouve dans le menu Colonnes. |

La grille mémorise aussi, **par appareil**, la dernière vue ouverte sur chaque table — l'utilisateur retrouve donc la grille dans l'état où il l'avait laissée — tandis que les vues elles-mêmes restent sur le serveur.

---

## Vue Résumé \{#summary\}

La vue **Résumé** se règle sur l'écran, pas dans les vues de l'utilisateur : dès que l'onglet **Résumé** de l'éditeur d'écran liste des colonnes de regroupement, la grille reçoit un bouton **Résumé** à côté de **Tableau** et **Graphique**.

Dans ce mode, la grille affiche une ligne parent par combinaison des colonnes de regroupement, avec le nombre de lignes correspondantes (l'en-tête de la colonne de comptage se règle dans le même onglet). Le comptage est calculé par la base sur l'ensemble du résultat : il reste exact même quand la grille plafonne le nombre de lignes chargées. Un chevron sur chaque ligne parent charge ses lignes de détail — la requête de l'écran, restreinte à ce groupe — uniquement à l'ouverture.

Une colonne de regroupement de type date ou horodatage peut être découpée par **jour**, **mois** ou **année** : la ligne parent affiche alors la période, et les lignes de détail sont les enregistrements de cette période.

---

## Filtre à la journée sur les colonnes horodatées

Filtrer une colonne horodatée n'oblige pas à saisir une borne complète `YYYY-MM-DD HH:MM:SS`. Le filtre d'en-tête de colonne laisse choisir une **journée** et retient toutes les lignes dont l'horodatage tombe dans cette journée (borne basse / borne haute côté serveur). 

---

## Conseils et bonnes pratiques

- **Enregistrer les dispositions réutilisées.** Une vue « fin de mois » avec les bonnes colonnes, le bon filtre et le bon tri est à un clic, à chaque fois.
- **Publiez le standard de l'équipe comme vue partagée par défaut.** Créez-la une fois dans l'onglet *Vues* du Concepteur et marquez-la par défaut, pour que tout le monde ouvre la grille sur la disposition convenue.
- **Pensez à *Réinit.* quand une grille semble fausse après une mise à niveau.** Si une colonne est devenue masquée sous condition, un ancien état enregistré peut contrarier la nouvelle règle — *Réinit.* le ramène à la vue par défaut de l'écran.
