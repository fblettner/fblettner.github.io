---
title: Serveurs JDE
description: "Supervision → Serveurs JDE dans Nomajde : la dernière vérification de chaque serveur enterprise, web et REST de JD Edwards suivi par Server Manager — état, santé, contrôles en échec, action menée —, son historique, les indicateurs de la vue d'ensemble et la tâche qui les collecte."
keywords: [Nomajde, JD Edwards, supervision, Server Manager, contrôle de santé, serveur enterprise, serveur web, AIS, disponibilité, nomajde-jde-health]
---

# Serveurs JDE

**Supervision → Serveurs JDE** présente les serveurs JD Edwards tels que les a vus la dernière vérification : une ligne par instance, avec son état dans Server Manager, le résultat du contrôle de santé, les contrôles en échec et l'action menée. Les vérifications proviennent de la tâche [`nomajde-jde-health`](#job), qui interroge Server Manager toutes les cinq minutes une fois activée.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="jds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="jds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="jds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="jds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="476" rx="14" fill="url(#jds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Serveurs JDE</text>
  <rect x="870" y="31" width="71" height="16" rx="8.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="905.5" y="42.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">consultation</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Hôte</text>
  <rect x="240" y="70" width="122" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="370" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Instance</text>
  <rect x="370" y="70" width="122" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="380" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="500" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Type de serveur</text>
  <rect x="500" y="70" width="122" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <text x="630" y="66" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Santé</text>
  <rect x="630" y="70" width="112" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="640" y="83.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="104" width="720" height="24" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <text x="340" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="440" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="520" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAT</text>
  <text x="600" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SANTÉ</text>
  <text x="680" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONTRÔLES EN ÉCHEC</text>
  <text x="820" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ACTION</text>
  <text x="890" y="119.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VÉRIFIÉ LE</text>
  <rect x="240" y="132" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jde-ent01</text>
  <text x="340" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ent_prod</text>
  <text x="440" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">entserver</text>
  <text x="520" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="600" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">passed</text>
  <text x="680" y="147.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="820" y="147.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="147.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10:35</text>
  <rect x="240" y="160" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jde-web01</text>
  <text x="340" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">web_prod1</text>
  <text x="440" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">webserver</text>
  <text x="520" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="600" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">failed</text>
  <text x="680" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Login, Port Test</text>
  <text x="820" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">stopped</text>
  <text x="890" y="175.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10:35</text>
  <rect x="240" y="188" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">jde-web01</text>
  <text x="340" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">ais_prod</text>
  <text x="440" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">restserver</text>
  <text x="520" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">STOPPED</text>
  <text x="600" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">down</text>
  <text x="680" y="203.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="820" y="203.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="203.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">10:35</text>
  <rect x="240" y="222" width="720" height="250" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="242" fill="#94a3b8" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble Nomajde</text>
  <rect x="254" y="254" width="180" height="100" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="268" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Serveurs JDE</text>
  <text x="268" y="310" fill="#e2e8f0" fontSize="26" fontWeight="700" fontFamily="system-ui, sans-serif">1</text>
  <text x="268" y="330" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sur 3 en bonne santé</text>
  <text x="268" y="343" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">· 2026-10-29 10:35</text>
  <rect x="448" y="254" width="498" height="204" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462" y="276" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Serveurs JDE</text>
  <rect x="462" y="288" width="470" height="46" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="288" width="3" height="46" rx="1.5" fill="#f87171"/>
  <text x="474" y="306" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">web_prod1</text>
  <text x="474" y="322" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">webserver · jde-web01 · Login, Port Test · arrêtée par le contrôle</text>
  <rect x="531.88" y="295" width="51" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="557.38" y="305.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">En échec</text>
  <text x="918" y="308" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">82 %</text>
  <text x="918" y="323" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">288 vérifications en 24 h</text>
  <rect x="462" y="342" width="470" height="46" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="342" width="3" height="46" rx="1.5" fill="#f87171"/>
  <text x="474" y="360" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">ais_prod</text>
  <text x="474" y="376" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">restserver · jde-web01 · arrêtée</text>
  <rect x="526.56" y="349" width="47" height="15" rx="7.5" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="550.06" y="359.7" fill="#f87171" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Arrêtée</text>
  <text x="918" y="362" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">64 %</text>
  <text x="918" y="377" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">288 vérifications en 24 h</text>
  <rect x="462" y="396" width="470" height="46" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="462" y="396" width="3" height="46" rx="1.5" fill="#4ade80"/>
  <text x="474" y="414" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">ent_prod</text>
  <text x="474" y="430" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">entserver · jde-ent01</text>
  <rect x="526.56" y="403" width="26" height="15" rx="7.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="539.56" y="413.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">OK</text>
  <text x="918" y="416" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">100 %</text>
  <text x="918" y="431" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">288 vérifications en 24 h</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hôte, instance, type, santé</text>
  <line x1="210" y1="77.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Dernière vérification</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une ligne par instance, 24 h</text>
  <line x1="210" y1="167.0" x2="240" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Instances en bonne santé</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur les instances suivies</text>
  <line x1="210" y1="307.0" x2="254" y2="304" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ouvrir une ligne</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">son historique dans la fenêtre</text>
  <line x1="1000" y1="137.0" x2="960" y2="145" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le rouge d'abord</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">orange après 30 min</text>
  <line x1="1000" y1="317.0" x2="946" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
  <rect x="1000" y="400" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Disponibilité</text>
  <text x="1010" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrôles réussis sur 24 h</text>
  <line x1="1000" y1="417.0" x2="916" y2="418" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#jds-arrow)"/>
</svg>

---

## La grille \{#grid\}

La grille, en consultation seule, reprend la dernière vérification de chaque instance contrôlée au cours des dernières 24 heures.

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

Les colonnes **Hôte**, **Instance**, **Type de serveur** et **Santé** sont filtrables.

## L'historique d'une instance \{#history\}

Un clic sur une ligne ouvre l'instance dans une fenêtre. L'onglet **Général** reprend les champs de la grille ; l'onglet **Historique** liste toutes les vérifications conservées pour l'instance, de la plus récente à la plus ancienne : heure, état, santé, contrôles en échec, serveur enterprise, action, détail.

---

## Sur la vue d'ensemble \{#overview\}

La [page d'accueil](../home.md) de Nomajde comporte deux tuiles **Serveurs JDE**, calculées sur la dernière vérification de chaque instance au cours des 24 dernières heures :

- le nombre d'instances en bonne santé sur le nombre d'instances suivies, avec l'heure de la dernière vérification ;
- la liste des instances : type de serveur et hôte, contrôles en échec et action menée, une pastille d'état — **OK**, **En échec**, **Arrêtée**, **Erreur** —, la disponibilité sur 24 heures (la part de vérifications réussies) et le nombre de vérifications. Les instances en défaut apparaissent en premier ; une instance dont la dernière vérification date de plus de 30 minutes passe en orange, avec la pastille **En retard**.

---

## La tâche de collecte \{#job\}

La tâche `nomajde-jde-health` vérifie les serveurs au travers de l'API REST de Server Manager. Elle est livrée **désactivée**, planifiée toutes les cinq minutes (Europe/Paris).

1. Dans **Liberty Next → Construire → Connecteurs**, ouvrir le connecteur `jde_server_manager` et renseigner l'adresse de Server Manager et le mot de passe du compte `jde_admin`.
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

- [Tâches](../jobs.md) — les tâches Nomajde, dont *Vérifier les serveurs JDE*.
- [Notifications](../../nomaflow/notifications.md) — pour être alerté d'un échec de la vérification.
- [Vue d'ensemble — la page d'accueil](../home.md).
