---
title: Historique & versionnage de la configuration
description: "Chaque sauvegarde de configuration est capturée, chaque sauvegarde d'écran capture sa clôture de dépendances sous forme de bundle restaurable, les changements de version sont journalisés et les notes de version se lisent dans l'application — le tout sous Liberty Next → Déployer → Historique."
keywords: [Liberty Framework, historique de configuration, versionnage, snapshot, restauration, purge de rétention, historique des mises à niveau, notes de version, bundle, clôture de dépendances]
---

# Historique & versionnage de la configuration

Liberty garde un historique de la configuration. À chaque enregistrement d'un fichier de configuration depuis les pages de Liberty Next, l'état précédent est conservé ; à chaque enregistrement d'un **écran**, le framework conserve aussi cet écran *avec ses dépendances*, sous une forme restaurable. Un instantané se compare à ce qui est actif, se restaure, l'historique s'élague, et la page indique précisément quand la version de l'application a changé — le tout depuis **Liberty Next → Déployer → Historique**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 444" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="chist-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="chist-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="chist-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="chist-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="404" rx="14" fill="url(#chist-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Historique</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236" y="74" width="227" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="237" y="75" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="270.0" y="89.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichiers</text>
  <line x1="304" y1="79" x2="304" y2="93" stroke="#334155" strokeWidth="1"/>
  <text x="332.5" y="89.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Écrans</text>
  <line x1="361" y1="79" x2="361" y2="93" stroke="#334155" strokeWidth="1"/>
  <text x="412.0" y="89.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Mises à niveau</text>
  <rect x="244" y="120" width="214" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="254" y="137" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">connectors.toml</text>
  <rect x="422" y="125" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="136.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">29</text>
  <rect x="244" y="151" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="168" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">screens.toml</text>
  <rect x="422" y="156" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="167.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <rect x="244" y="182" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="199" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">menus.toml</text>
  <rect x="422" y="187" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="198.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <rect x="244" y="213" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="230" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">dashboards.toml</text>
  <rect x="422" y="218" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="229.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="244" y="244" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="261" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">actions.toml</text>
  <rect x="422" y="249" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="260.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="244" y="275" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="292" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">dictionary.toml</text>
  <rect x="422" y="280" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="291.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <rect x="244" y="306" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="323" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">pools.toml</text>
  <rect x="422" y="311" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="322.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <rect x="244" y="337" width="214" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="354" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">app.toml</text>
  <rect x="422" y="342" width="24" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="434.0" y="353.2" fill="#94a3b8" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="236" y="112" width="230" height="260" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="480" y="112" width="604" height="30" rx="7" fill="rgba(74,158,255,0.08)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="131" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">▾</text>
  <text x="506" y="131" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v12</text>
  <text x="540" y="131" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">21/11/2026 21:59 ·</text>
  <rect x="631.6800000000001" y="119" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="649.1800000000001" y="130.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="116" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="131" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="116" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="131" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="116" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="131" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="480" y="146" width="604" height="150" rx="0" fill="#0d1220" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="161" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">v12</text>
  <text x="514" y="161" fill="#4ade80" fontSize="8.5" fontFamily="system-ui, sans-serif">→ en service</text>
  <text x="502" y="176" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="524" y="176" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1</text>
  <text x="536" y="176" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">[connectors.crm]</text>
  <text x="502" y="191" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="524" y="191" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2</text>
  <text x="536" y="191" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">type = "sql"</text>
  <text x="502" y="206" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="524" y="206" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3</text>
  <text x="536" y="206" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">pool = "crm"</text>
  <rect x="481" y="211" width="602" height="14" fill="rgba(255,69,58,0.14)"/>
  <text x="502" y="221" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="524" y="221" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="536" y="221" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">max_rows = 1000</text>
  <rect x="481" y="226" width="602" height="14" fill="rgba(50,215,75,0.14)"/>
  <text x="502" y="236" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="524" y="236" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="536" y="236" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">max_rows = 5000</text>
  <text x="502" y="251" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="524" y="251" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">5</text>
  <text x="536" y="251" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="502" y="266" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="524" y="266" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">6</text>
  <text x="536" y="266" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">[connectors.crm.queries.customers_get]</text>
  <text x="502" y="281" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <text x="524" y="281" fill="#64748b" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">7</text>
  <text x="536" y="281" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">sql = "SELECT id, name FROM customers"</text>
  <rect x="480" y="304" width="604" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="323" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="506" y="323" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v11</text>
  <text x="540" y="323" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">21/11/2026 21:58 ·</text>
  <rect x="631.6800000000001" y="311" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="649.1800000000001" y="322.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="308" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="323" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="308" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="323" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="308" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="323" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="480" y="340" width="604" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="359" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="506" y="359" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v10</text>
  <text x="540" y="359" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">21/11/2026 21:57 ·</text>
  <rect x="631.6800000000001" y="347" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="649.1800000000001" y="358.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="344" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="359" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="344" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="359" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="344" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="359" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="480" y="376" width="604" height="30" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="492" y="395" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="506" y="395" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="ui-monospace, monospace">v9</text>
  <text x="540" y="395" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">20/11/2026 15:03 ·</text>
  <rect x="631.6800000000001" y="383" width="35" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="649.1800000000001" y="394.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">save</text>
  <rect x="992" y="380" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004" y="395" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓</text>
  <rect x="1020" y="380" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1032" y="395" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">↺</text>
  <rect x="1048" y="380" width="24" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1060" y="395" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois vues</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">fichiers, écrans, mises à niveau</text>
  <line x1="200" y1="87.0" x2="236" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fichiers de configuration</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leur nombre de versions</text>
  <line x1="200" y1="217.0" x2="244" y2="173" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="1120" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Actions d'une version</text>
  <text x="1130" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">télécharger, restaurer, supprimer</text>
  <line x1="1120" y1="77.0" x2="1072" y2="127" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="1120" y="220" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écart avec le fichier en service</text>
  <text x="1130" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retiré en rouge, ajouté en vert</text>
  <line x1="1120" y1="237.0" x2="1084" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte par version</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre l'écart</text>
  <line x1="1120" y1="397.0" x2="1084" y2="358" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#chist-arrow)"/>
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

- **Fichiers** — choisir un fichier de configuration à gauche, avec son nombre de versions ; ses versions s'affichent à droite sous forme de cartes (numéro, date, origine de l'instantané). Déplier une version la **compare au fichier en service** — lignes retirées en rouge, ajoutées en vert — ; les trois boutons de la carte la **téléchargent**, la **restaurent** ou la **suppriment**.
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

L'historique grossit avec le temps : une tâche livrée — **`config-versions-purge`**, chaque nuit à 03:00 — le réduit, historique des fichiers comme lots d'écrans. Elle garde les versions les plus récentes par fichier et écarte le reste, selon **deux règles indépendantes** :

- **Nombre de versions** — ne garder que les N versions les plus récentes de chaque fichier (défaut **20**).
- **Âge maximal** — écarter les versions de plus de D jours (défaut **90**).

Les deux règles se combinent en OU, et la version la plus récente de chaque fichier est toujours conservée. Une règle à `0` est désactivée. Sa planification et ses paramètres `max_versions` / `max_age_days` se modifient dans l'éditeur de tâches Nomaflow, comme pour toute tâche. [Surveillance → Rétention](../../monitoring/retention.md) affiche les limites en vigueur et le nombre de versions, avec **Aperçu** et **Purger**.

---

## Historique des mises à niveau

À chaque changement de version de l'application en cours d'exécution, le framework l'enregistre sous **Liberty Next → Déployer → Historique → Mises à niveau** : une ligne par composant — **Framework** (Liberty Next) et **Apps** (Liberty Apps) — avec la version de départ et d'arrivée. Le premier lancement d'un composant est journalisé comme une *installation* ; les changements de version ultérieurs comme une *mise à niveau*. La liste est enregistrée automatiquement au démarrage et ne crée pas de doublon : redémarrer sur la même version n'ajoute rien. Sélectionner une ligne affiche la section correspondante des notes de version.

---

## Les notes de version, dans l'application

La page **Liberty Next → Documenter → Notes de version** reprend le journal complet livré avec le build : les notes du framework et, quand Liberty Apps est installé, celles des applications — un sélecteur en haut choisit l'un ou l'autre, avec la version en service. Les versions forment un panneau à gauche, chacune avec sa date et son nombre d'entrées ; la version choisie présente chaque entrée sous forme de carte, titrée par la phrase qui l'ouvre. **Chercher dans toutes les versions…** retrouve une entrée par ses mots dans toutes les versions et indique la version concernée. Le texte est **bilingue** — les notes françaises quand l'interface est en français, anglaises sinon.

---

## Conseils et bonnes pratiques

- **Restaurez avant de déboguer une mauvaise sauvegarde.** Si un changement a cassé un écran, le plus rapide est souvent de restaurer la version précédente et de recharger, puis de réappliquer le changement avec soin.
- **Utilisez une restauration de bundle pour ramener un écran d'un bloc.** Restaurer le seul fichier d'écran peut le laisser pointer vers une requête que vous avez aussi modifiée ; la restauration de bundle rétablit l'écran *et* ses dépendances ensemble.
- **Planifiez la purge.** Sans elle, l'historique grossit sans limite ; une purge nocturne aux valeurs par défaut (20 versions / 90 jours) le garde sain.
- **Vérifiez les Mises à niveau après un déploiement.** C'est la confirmation la plus rapide que la nouvelle version du framework ou des apps a bien pris effet.
