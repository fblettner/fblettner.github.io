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

<svg viewBox="0 0 1320 354" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="svw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="svw-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="svw-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="svw-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="314" rx="14" fill="url(#svw-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#4a9eff" fontSize="12" fontFamily="system-ui, sans-serif">▦</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="12.5" fontWeight="700" fontFamily="system-ui, sans-serif">Clients</text>
  <rect x="317.45" y="35" width="40" height="15" rx="4" fill="rgba(74,158,255,0.15)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="337.45" y="45.8" fill="#4a9eff" fontSize="7.6" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">SELECT</text>
  <text x="260" y="60" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">crm.customers_get</text>
  <line x1="220" y1="70" x2="1100" y2="70" stroke="#1f2937" strokeWidth="1"/>
  <rect x="882" y="78" width="202" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="883" y="79" width="64" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="915.0" y="92.5" fill="#4a9eff" fontSize="8.4" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Tableau</text>
  <line x1="948" y1="83" x2="948" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="985.5" y="92.5" fill="#94a3b8" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Graphique</text>
  <line x1="1023" y1="83" x2="1023" y2="95" stroke="#334155" strokeWidth="1"/>
  <text x="1053.5" y="92.5" fill="#94a3b8" fontSize="8.4" textAnchor="middle" fontFamily="system-ui, sans-serif">≡ Résumé</text>
  <rect x="238" y="110" width="109" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="292.5" y="124.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une ligne</text>
  <rect x="352" y="110" width="99" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="401.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">✎ Modifier en lot</text>
  <rect x="460" y="110" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="469" y="124.3" fill="#475569" fontSize="8.6" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="638" y="110" width="62" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="669.0" y="124.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="722" y="110" width="46" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="745.0" y="124.5" fill="#4a9eff" fontSize="8.6" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▦ Vues</text>
  <rect x="773" y="110" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="803.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⏷ Filtres</text>
  <rect x="839" y="110" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="869.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⊞ Grouper</text>
  <rect x="905" y="110" width="66" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">▥ Colonnes</text>
  <rect x="976" y="110" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1013.5" y="124.5" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Exporter ▾</text>
  <rect x="238" y="142" width="844" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">CLIENT</text>
  <text x="360" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">NOM DU CLIENT</text>
  <text x="620" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">PAYS</text>
  <text x="740" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">STATUT</text>
  <text x="890" y="159" fill="#cbd5e1" fontSize="8" fontWeight="700" fontFamily="ui-monospace, monospace">MODIFIÉ LE</text>
  <rect x="238" y="172" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00001</text>
  <text x="360" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ACME</text>
  <text x="620" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="740" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Actif</text>
  <text x="890" y="189" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">27/10/2026</text>
  <rect x="238" y="202" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00002</text>
  <text x="360" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Beta SARL</text>
  <text x="620" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">FR</text>
  <text x="740" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Actif</text>
  <text x="890" y="219" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">25/10/2026</text>
  <rect x="238" y="232" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00003</text>
  <text x="360" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Gamma SA</text>
  <text x="620" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">BE</text>
  <text x="740" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Prospect</text>
  <text x="890" y="249" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">12/10/2026</text>
  <rect x="238" y="262" width="844" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">00004</text>
  <text x="360" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Delta GmbH</text>
  <text x="620" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">DE</text>
  <text x="740" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">Actif</text>
  <text x="890" y="279" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">02/10/2026</text>
  <rect x="548" y="138" width="280" height="176" rx="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="560" y="156" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VUES</text>
  <text x="697.32672" y="156" fill="#4a9eff" fontSize="7.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉTABLIR LA VERSION LIVRÉE</text>
  <text x="608.42496" y="156" fill="#4a9eff" fontSize="7.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENREGISTRER SOUS…</text>
  <text x="547.37088" y="156" fill="#4a9eff" fontSize="7.4" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENREGISTRER</text>
  <line x1="556" y1="166" x2="820" y2="166" stroke="#1f2937" strokeWidth="1"/>
  <text x="560" y="184" fill="#64748b" fontSize="7.6" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PARTAGÉES</text>
  <rect x="562" y="195" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M564.5,200.5 L566.8,202.8 L570.8,198" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="579" y="204" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Standard · défaut</text>
  <rect x="562" y="217" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="579" y="226" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Fin de mois</text>
  <text x="560" y="250" fill="#64748b" fontSize="7.6" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">MES VUES</text>
  <rect x="562" y="261" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="579" y="270" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Mes clients français</text>
  <text x="812" y="270" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="562" y="283" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="579" y="292" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Contrôle de fin de mois</text>
  <text x="812" y="292" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu Vues</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vues partagées et personnelles</text>
  <line x1="200" y1="117.0" x2="732" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="20" y="178" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="193" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Partagées</text>
  <text x="30" y="206" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">publiées dans le Concepteur d'écran</text>
  <line x1="200" y1="195.0" x2="562" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="20" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mes vues</text>
  <text x="30" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par utilisateur, sur tout appareil</text>
  <line x1="200" y1="275.0" x2="562" y2="266" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1120" y="34" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="49" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau · Graphique · Résumé</text>
  <text x="1130" y="62" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Résumé si l'écran en a un</text>
  <line x1="1120" y1="51.0" x2="1072" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1120" y="128" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="143" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer sous… · Rétablir</text>
  <text x="1130" y="156" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Enregistrer : sur une de vos vues</text>
  <line x1="1120" y1="145.0" x2="818" y2="154" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
  <rect x="1120" y="258" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="273" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Supprimer la vue</text>
  <text x="1130" y="286" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">uniquement vos vues</text>
  <line x1="1120" y1="275.0" x2="812" y2="268" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#svw-arrow)"/>
</svg>

---

## Vues personnelles et vues partagées

Le menu **Vues** de la barre d'outils de la grille liste deux groupes :

- **Partagées** — des vues publiées, en lecture seule, disponibles pour tous sur cet écran. Un administrateur les crée dans le [Concepteur d'écran](build/screens/overview.md) (étape *Grille*, section *Vues*), et peut en marquer une par **défaut** — la disposition avec laquelle la grille s'ouvre.
- **Mes vues** — les vues enregistrées par l'utilisateur lui-même. Elles sont stockées par utilisateur sur le serveur : elles **le suivent sur tous ses appareils et toutes ses sessions**, sans limite de nombre par grille.

Un utilisateur lit les vues partagées et gère les siennes ; publier une vue pour tous est une action d'administrateur dans le Concepteur. L'en-tête du menu porte **Enregistrer** (sur l'une de ses vues), **Enregistrer sous…** et **Rétablir la version livrée** ; la vue partagée par défaut s'affiche *Standard · défaut*, une coche signale la vue en cours et le bouton prend le nom de la vue active.

---

## Travailler avec les vues

| Action | Ce qu'elle fait |
|---|---|
| **Enregistrer sous…** | Nomme les colonnes, le tri, les filtres et le regroupement actuels comme une nouvelle vue personnelle. Réutiliser un nom écrase cette vue. |
| **Enregistrer** | Écrase sur place la vue personnelle active (visible seulement quand la vue active est l'une des vôtres). |
| Sélectionner une vue | Applique une vue partagée ou personnelle. |
| **Supprimer la vue** | Retire l'une de ses vues (l'icône corbeille). |
| **Rétablir la version livrée** | Dans le menu des vues : revient à la mise en page livrée avec l'écran — sa vue partagée par défaut, sinon sa mise en page de base. |
| **Réinit.** | Revient à la vue partagée par défaut de l'écran, ou à sa disposition de colonnes de base s'il n'y en a pas. Pratique quand un état enregistré plus ancien entre en conflit avec une colonne désormais masquée sous condition. *Réinit.* se trouve dans le menu Colonnes. |

La grille mémorise aussi, **par appareil**, la dernière vue ouverte sur chaque table — l'utilisateur retrouve donc la grille dans l'état où il l'avait laissée — tandis que les vues elles-mêmes restent sur le serveur.

---

## Vue Résumé \{#summary\}

La vue **Résumé** se règle sur l'écran, pas dans les vues de l'utilisateur : dès que la section **Résumé** de l'étape *Grille* du Concepteur d'écran liste des colonnes de regroupement, la grille reçoit un bouton **Résumé** à côté de **Tableau** et **Graphique**.

Dans ce mode, la grille affiche une ligne parent par combinaison des colonnes de regroupement, avec le nombre de lignes correspondantes (l'en-tête de la colonne de comptage se règle dans le même onglet). Le comptage est calculé par la base sur l'ensemble du résultat : il reste exact même quand la grille plafonne le nombre de lignes chargées. Un chevron sur chaque ligne parent charge ses lignes de détail — la requête de l'écran, restreinte à ce groupe — uniquement à l'ouverture.

Une colonne de regroupement de type date ou horodatage peut être découpée par **jour**, **mois** ou **année** : la ligne parent affiche alors la période, et les lignes de détail sont les enregistrements de cette période.

---

## Filtre à la journée sur les colonnes horodatées

Filtrer une colonne horodatée n'oblige pas à saisir une borne complète `YYYY-MM-DD HH:MM:SS`. Le filtre d'en-tête de colonne laisse choisir une **journée** et retient toutes les lignes dont l'horodatage tombe dans cette journée (borne basse / borne haute côté serveur). 

---

## Conseils et bonnes pratiques

- **Enregistrer les dispositions réutilisées.** Une vue « fin de mois » avec les bonnes colonnes, le bon filtre et le bon tri est à un clic, à chaque fois.
- **Publier le standard de l'équipe comme vue partagée par défaut.** La créer une fois dans le Concepteur (*Grille → Vues*) et la marquer par défaut, pour que tout le monde ouvre la grille sur la disposition convenue.
- **Pensez à *Réinit.* quand une grille semble fausse après une mise à niveau.** Si une colonne est devenue masquée sous condition, un ancien état enregistré peut contrarier la nouvelle règle — *Réinit.* le ramène à la vue par défaut de l'écran.
