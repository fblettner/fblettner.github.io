---
title: Contrôle de santé JDE
description: "Supervision → Contrôle de santé JDE dans Nomajde : les vérifications des serveurs enterprise, web et REST de JD Edwards suivis par Server Manager — état, santé, contrôles en échec, action menée — sur une période, l'historique d'un serveur, les indicateurs de la vue d'ensemble et la tâche qui les collecte."
keywords: [Nomajde, JD Edwards, supervision, Server Manager, contrôle de santé, serveur enterprise, serveur web, AIS, disponibilité, nomajde-jde-health]
---

# Contrôle de santé JDE

**Supervision → Contrôle de santé JDE** liste les vérifications des serveurs JD Edwards, de la plus récente à la plus ancienne : une ligne par instance et par vérification, avec son état dans Server Manager, le résultat du contrôle de santé, les contrôles en échec et l'action menée. Les vérifications proviennent de la tâche [`nomajde-jde-health`](#job), qui interroge Server Manager toutes les cinq minutes une fois activée.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 412" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jhc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jhc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jhc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jhc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="372" rx="14" fill="url(#jhc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Every health check of the JDE servers, newest first.</text>
  <rect x="240" y="60" width="720" height="22" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="75" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› Filtres avancés (1)</text>
  <rect x="847" y="63" width="107" height="16" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="900.5" y="74.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Effacer les filtres</text>
  <rect x="240" y="92" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="106.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="396" y="92" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="432.0" y="106.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="890" y="92" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="825" y="92" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.0" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="765" y="92" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="792.5" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper</text>
  <rect x="705" y="92" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="732.5" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="660" y="92" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="680.0" y="106.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="124" width="720" height="116" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="124" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">HOST</text>
  <text x="340" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">INSTANCE</text>
  <text x="420" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">SERVER TYPE</text>
  <text x="510" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">STATE</text>
  <text x="590" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">HEALTH</text>
  <text x="660" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">FAILED CHECKS</text>
  <text x="810" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">ACTION</text>
  <text x="880" y="139.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">CHECKED AT</text>
  <text x="250" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-ent01</text>
  <text x="340" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="420" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">entserver</text>
  <text x="510" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="590" y="162.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">passed</text>
  <text x="660" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="810" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="880" y="162.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:35</text>
  <line x1="241" y1="170" x2="959" y2="170" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-web01</text>
  <text x="340" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">HTML_PD</text>
  <text x="420" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">webserver</text>
  <text x="510" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="590" y="184.5" fill="#f87171" fontSize="8.5" fontFamily="ui-monospace, monospace">failed</text>
  <text x="660" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Login, Port Test</text>
  <text x="810" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">stopped</text>
  <text x="880" y="184.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:35</text>
  <line x1="241" y1="192" x2="959" y2="192" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-ais01</text>
  <text x="340" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="420" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">restserver</text>
  <text x="510" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">STOPPED</text>
  <text x="590" y="206.5" fill="#fb923c" fontSize="8.5" fontFamily="ui-monospace, monospace">down</text>
  <text x="660" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="810" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="880" y="206.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:35</text>
  <line x1="241" y1="214" x2="959" y2="214" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jde-ent01</text>
  <text x="340" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="420" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">entserver</text>
  <text x="510" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">RUNNING</text>
  <text x="590" y="228.5" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">passed</text>
  <text x="660" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="810" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="880" y="228.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">10:30</text>
  <line x1="241" y1="236" x2="959" y2="236" stroke="#1f2937" strokeWidth="1"/>
  <text x="242" y="258" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SUR LA VUE D'ENSEMBLE DE NOMAJDE</text>
  <rect x="240" y="266" width="200" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="284" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Serveurs JDE en bonne santé</text>
  <text x="252" y="320" fill="#e2e8f0" fontSize="24" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="252" y="340" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sur 3 · 22/11/2026 10:35</text>
  <rect x="450" y="266" width="510" height="112" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="284" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Serveurs JDE</text>
  <rect x="460" y="293" width="3" height="20" fill="#f87171"/>
  <text x="470" y="304" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">HTML_PD</text>
  <rect x="513.3199999999999" y="294" width="51" height="13" rx="6.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="538.8199999999999" y="303.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En échec</text>
  <text x="600" y="304" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">webserver · jde-web01 · Login, Port Test · arrêtée par le contrôle</text>
  <text x="948" y="304" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">82 %</text>
  <rect x="460" y="317" width="3" height="20" fill="#f87171"/>
  <text x="470" y="328" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">AIS_PD</text>
  <rect x="508.56" y="318" width="47" height="13" rx="6.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="532.06" y="327.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Arrêtée</text>
  <text x="600" y="328" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">restserver · jde-ais01 · arrêtée</text>
  <text x="948" y="328" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 %</text>
  <rect x="460" y="341" width="3" height="20" fill="#4ade80"/>
  <text x="470" y="352" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">ENT_PD</text>
  <rect x="508.56" y="342" width="26" height="13" rx="6.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="521.56" y="351.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OK</text>
  <text x="600" y="352" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">entserver · jde-ent01</text>
  <text x="948" y="352" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">100 %</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les 7 derniers jours par défaut</text>
  <line x1="200" y1="77.0" x2="250" y2="71" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque contrôle</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le plus récent d'abord</text>
  <line x1="200" y1="167.0" x2="242" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instances en bonne santé</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur celles surveillées</text>
  <line x1="200" y1="317.0" x2="252" y2="316" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvrir une ligne</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son historique dans la boîte</text>
  <line x1="1000" y1="167.0" x2="958" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="1000" y="240" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le rouge d'abord</text>
  <text x="1010" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange après 30 min</text>
  <line x1="1000" y1="257.0" x2="461" y2="294" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
  <rect x="1000" y="370" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="385" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Disponibilité</text>
  <text x="1010" y="398" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrôles réussis sur 24 h</text>
  <line x1="1000" y1="387.0" x2="946" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jhc-arrow)"/>
</svg>

---

## La grille \{#grid\}

La grille, en consultation seule, liste toutes les vérifications conservées, de la plus récente à la plus ancienne. Elle s'ouvre sur celles des 7 derniers jours : la période sur **Vérifié le**, dans les filtres avancés, élargit ou restreint cette fenêtre (*Toutes les dates* affiche l'ensemble des vérifications conservées, voir `keep_days` dans [Paramètres](#parameters)).

| Colonne | Contenu |
|---|---|
| **Hôte** | L'hôte de l'agent Server Manager de l'instance. |
| **Instance** | Le nom de l'instance dans Server Manager. |
| **Type de serveur** | `entserver` (serveur enterprise), `webserver` (serveur HTML) ou `restserver` (serveur AIS). |
| **État** | L'état remonté par Server Manager, par exemple `RUNNING`. |
| **Santé** | `passed` (contrôles réussis), `failed` (un contrôle en échec, ou un serveur enterprise de rattachement en mauvaise santé), `down` (instance arrêtée) ou `error` (Server Manager n'a pas pu être interrogé pour cette instance, ou ne la connaît pas). |
| **Contrôles en échec** | Les contrôles de Server Manager en échec, parmi ceux suivis (voir [Paramètres](#parameters)). |
| **Serveur enterprise** | Pour une instance déclarée dans un groupe, le serveur enterprise dont elle dépend. |
| **Action** | `stopped` quand la vérification a arrêté l'instance, `stop failed` quand l'arrêt a été refusé. |
| **Détail** | Le message d'erreur, ou la cause d'un échec hérité du serveur enterprise. |
| **Vérifié le** | L'heure de la vérification. |

Les colonnes **Hôte**, **Instance**, **Type de serveur** et **Santé** sont également filtrables. Avec une vérification toutes les cinq minutes, une instance ajoute 288 lignes par jour : pour suivre un seul serveur, filtrer sur son instance ou ouvrir son historique.

## L'historique d'une instance \{#history\}

Un clic sur une ligne ouvre l'instance dans une fenêtre. L'onglet **Général** reprend les champs de la grille ; l'onglet **Historique** liste toutes les vérifications conservées pour cette instance, de la plus récente à la plus ancienne : heure, état, santé, contrôles en échec, serveur enterprise, action, détail.

---

## Sur la vue d'ensemble \{#overview\}

La [Vue d'ensemble](../home.md) de Nomajde y mène depuis son groupe *La plateforme*, et affiche la dernière exécution de la tâche `nomajde-jde-health` parmi ses tâches. Pour l'état des instances à cet instant, voir la [Synthèse de la plateforme](../synthesis.md).

---

## La tâche de collecte \{#job\}

La tâche `nomajde-jde-health` vérifie les serveurs au travers de l'API REST de Server Manager. Elle est livrée **désactivée**, planifiée toutes les cinq minutes (Europe/Paris).

1. Dans **Liberty Next → Administrer → Pools**, ouvrir le pool `jde_server_manager` et renseigner l'adresse de Server Manager avec son compte (`jde_admin`) et le mot de passe — voir [la connexion à Server Manager](./server-manager.md#connection).
2. Dans **Nomaflow → Tâches**, ajuster au besoin les paramètres de `nomajde-jde-health`, puis l'activer.
3. **Tâches → Vérifier les serveurs JDE**, dans le menu Nomajde, lance la vérification immédiatement, sans attendre la planification.

Chaque exécution demande à Server Manager la liste des instances et lance son contrôle de santé sur chaque instance démarrée. L'exécution **échoue** — et déclenche les alertes de la tâche — dès qu'une instance n'a pas réussi ses contrôles ; les lignes sont enregistrées auparavant, si bien que la grille affiche l'échec.

### Paramètres \{#parameters\}

| Paramètre | Valeur par défaut | Rôle |
|---|---|---|
| `checks` | `UBE, BSFN, Port Test, Login, Interactive App, OVR` | Les contrôles de Server Manager pris en compte ; les autres sont ignorés. Vide : tous les contrôles comptent. |
| `groups` | vide | Les instances rattachées à un serveur enterprise, en JSON : `{"<hôte>-<serveur enterprise>": ["<hôte>-<instance>", …]}`. Quand le serveur enterprise est arrêté ou en mauvaise santé, ses instances sont déclarées en échec sans être contrôlées. Une fois renseigné, seules les instances citées sont suivies. |
| `auto_stop` | `false` | `true` arrête une instance démarrée en échec, ainsi que les instances démarrées d'un serveur enterprise en échec. |
| `keep_days` | `30` | Le nombre de jours de vérifications conservés ; les lignes plus anciennes sont supprimées à chaque exécution. |

Détail de la tâche : [`nomajde-jde-health`](../../nomaflow/bundled-jobs.md#nomajde-jde-health).

---

## Voir aussi

- [Server Manager](./server-manager.md) — les écrans en direct : instances, utilisateurs connectés, processus, mémoire Java.
- [Tâches](../jobs.md) — les tâches Nomajde, dont *Vérifier les serveurs JDE*.
- [Notifications](../../nomaflow/notifications.md) — pour être alerté d'un échec de la vérification.
- [Vue d'ensemble — le point d'entrée](../home.md).
