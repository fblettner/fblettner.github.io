---
title: Historique & versionnage de la configuration
description: "Chaque sauvegarde de configuration est capturée, chaque sauvegarde d'écran capture sa clôture de dépendances sous forme de bundle restaurable, les changements de version sont journalisés et les notes de version se lisent dans l'application — le tout sous Liberty Next → Déployer → Historique."
keywords: [Liberty Framework, historique de configuration, versionnage, snapshot, restauration, purge de rétention, historique des mises à niveau, notes de version, bundle, clôture de dépendances]
---

# Historique & versionnage de la configuration

Liberty garde un historique de la configuration. À chaque enregistrement d'un fichier de configuration depuis les pages de Liberty Next, l'état précédent est conservé ; à chaque enregistrement d'un **écran**, le framework conserve aussi cet écran *avec ses dépendances*, sous une forme restaurable. Un instantané se compare à ce qui est actif, se restaure, l'historique s'élague, et la page indique précisément quand la version de l'application a changé — le tout depuis **Liberty Next → Déployer → Historique**.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 390" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="chi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="chi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="chi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="chi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="360" rx="14" fill="url(#chi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Historique</text>
  <rect x="720" y="28" width="216" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="721" y="29" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="754.0" y="43.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichiers</text>
  <line x1="788" y1="33" x2="788" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="816.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Écrans</text>
  <line x1="845" y1="33" x2="845" y2="47" stroke="#334155" strokeWidth="1"/>
  <text x="890.5" y="43.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Mises à jour</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="190" height="290" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="82" width="178" height="24" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="98" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <text x="256" y="128" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <text x="256" y="158" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">menus.toml</text>
  <text x="256" y="188" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">screens.toml</text>
  <text x="256" y="218" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">dashboards.toml</text>
  <text x="256" y="248" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">charts.toml</text>
  <rect x="446" y="74" width="514" height="140" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="458" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">27/10/2026 14:05</text>
  <text x="596" y="94" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <rect x="458" y="106" width="240" height="70" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="708" y="106" width="240" height="70" rx="4" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="466" y="122" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">version</text>
  <text x="716" y="122" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">fichier courant</text>
  <text x="466" y="140" fill="#f87171" fontSize="9" fontFamily="ui-monospace, monospace">- max_rows = 1000</text>
  <text x="716" y="140" fill="#4ade80" fontSize="9" fontFamily="ui-monospace, monospace">+ max_rows = 5000</text>
  <rect x="458" y="184" width="83" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="499.5" y="198.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger</text>
  <rect x="547" y="184" width="72" height="22" rx="5" fill="url(#chi-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="583.0" y="198.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Restaurer</text>
  <rect x="625" y="184" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="661.0" y="198.5" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer</text>
  <rect x="446" y="224" width="514" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="458" y="244" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">27/10/2026 11:42</text>
  <text x="596" y="244" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">admin</text>
  <rect x="446" y="264" width="514" height="32" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="458" y="284" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">26/10/2026 17:10</text>
  <text x="596" y="284" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">bob</text>
  <rect x="1000" y="30" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois vues</text>
  <text x="1010" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichiers, écrans, mises à jour</text>
  <line x1="1000" y1="47.0" x2="960" y2="40" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers de config</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une liste par fichier</text>
  <line x1="210" y1="217.0" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
  <rect x="1000" y="110" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparaison</text>
  <text x="1010" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">version / fichier courant</text>
  <line x1="1000" y1="127.0" x2="960" y2="140" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
  <rect x="1000" y="230" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Restaurer</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">réécrit et rechargé</text>
  <line x1="1000" y1="247.0" x2="682" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chi-arrow)"/>
</svg>

---

## Ce qui est capturé

| Quand vous… | Le framework capture… |
|---|---|
| Sauvegardez un fichier de configuration (connecteurs, dictionnaire, menus, pools, …) | Les octets précédents du fichier, avant que la sauvegarde ne les écrase. |
| Sauvegardez un écran dans le Concepteur | Un **bundle** : l'écran *plus sa clôture de dépendances* — les requêtes, lookups, séquences et entrées de dictionnaire dont il dépend. |
| Lancez l'assistant, un renommage, un déplacement, un clone ou un import | Toute la configuration, avant l'opération. |

Les snapshots sont adressés par leur contenu : sauvegarder un fichier inchangé ne fait rien — l'historique ne grossit que quand quelque chose a réellement changé. La capture se fait au mieux : elle ne bloque ni ne fait échouer une sauvegarde.

---

## Liberty Next → Déployer → Historique

L'onglet **Historique** a trois modes :

- **Fichiers** — choisissez un fichier de configuration à gauche ; ses versions s'affichent à droite sous forme de cartes. Dépliez une version pour la **comparer au fichier actif** côte à côte, puis la **télécharger**, la **restaurer** ou la **supprimer**.
- **Écrans** — choisissez un écran (`app.écran`) ; chaque sauvegarde est une carte de bundle. Dépliez-la pour inspecter la clôture de dépendances capturée, groupée par type (connecteurs, requêtes, entrées de dictionnaire, lookups, menus, …), puis **télécharger le bundle (.zip)** ou **restaurer l'écran + les dépendances**.
- **Mises à niveau** — l'historique des versions de l'application (voir [plus bas](#historique-des-mises-à-niveau)).

### Restaurer

La restauration est sûre et réversible — l'état courant est capturé *d'abord*, si bien qu'une restauration peut elle-même être annulée :

- Une **restauration de fichier** réécrit la version choisie et recharge les connecteurs pour la rendre active aussitôt.
- Une **restauration de bundle** ré-applique ensemble l'écran et ses dépendances capturées. Les entités que vous avez marquées `override = true` sur cette installation sont **préservées** : une personnalisation locale survit donc au retour en arrière.

### Élaguer

La suppression retire un seul snapshot (ou vide tout l'historique d'un fichier / d'un écran). La configuration active n'est jamais touchée par une suppression — seul l'historique l'est.

---

## Tâche de purge de rétention

L'historique grossit avec le temps : le framework inclut donc une tâche — **`purge config versions`** — qui le rogne. Elle garde les versions les plus récentes par fichier et écarte le reste, selon **deux règles indépendantes** :

- **Nombre de versions** — ne garder que les N versions les plus récentes de chaque fichier (défaut **20**).
- **Âge maximal** — écarter les versions de plus de D jours (défaut **90**).

Les deux règles se combinent en OU, et la version la plus récente de chaque fichier est toujours conservée. Une règle à `0` est désactivée. Planifiez-la depuis l'éditeur de tâches NomaFlow comme n'importe quelle tâche — par exemple une exécution nocturne — et ajustez `max_versions` / `max_age_days` dans ses paramètres.

---

## Historique des mises à niveau

À chaque changement de version de l'application en cours d'exécution, le framework l'enregistre sous **Liberty Next → Déployer → Historique → Mises à niveau** : une ligne par composant — **Framework** (Liberty Next) et **Apps** (Liberty Apps) — avec la version de départ et d'arrivée. Le premier lancement d'un composant est journalisé comme une *installation* ; les changements de version ultérieurs comme une *mise à niveau*. La liste est enregistrée automatiquement au démarrage et ne crée pas de doublon : redémarrer sur la même version n'ajoute rien. Sélectionner une ligne affiche la section correspondante des notes de version.

---

## Les notes de version, dans l'application

L'onglet **Liberty Next → Documenter → Notes de version** est le journal complet livré avec le build. Il lit les notes du framework (et celles des apps, quand Liberty Apps est installé), avec une table des matières par version et un sélecteur de composant quand il y en a plusieurs. Le texte du journal est **bilingue** — il affiche les notes françaises quand l'interface est en français, anglaises sinon.

---

## Conseils et bonnes pratiques

- **Restaurez avant de déboguer une mauvaise sauvegarde.** Si un changement a cassé un écran, le plus rapide est souvent de restaurer la version précédente et de recharger, puis de réappliquer le changement avec soin.
- **Utilisez une restauration de bundle pour ramener un écran d'un bloc.** Restaurer le seul fichier d'écran peut le laisser pointer vers une requête que vous avez aussi modifiée ; la restauration de bundle rétablit l'écran *et* ses dépendances ensemble.
- **Planifiez la purge.** Sans elle, l'historique grossit sans limite ; une purge nocturne aux valeurs par défaut (20 versions / 90 jours) le garde sain.
- **Vérifiez les Mises à niveau après un déploiement.** C'est la confirmation la plus rapide que la nouvelle version du framework ou des apps a bien pris effet.
