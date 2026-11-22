---
title: Server Manager
description: "Supervision → Server Manager dans Nomajde : sept écrans qui lisent en direct la console Server Manager de JD Edwards — instances, utilisateurs connectés, serveurs d'entreprise, processus des serveurs, appels et erreurs des fonctions métier, serveurs web et AIS avec leur mémoire Java, caches JDBj — avec filtres avancés, listes de choix, démarrage, arrêt et redémarrage d'une instance et vidage des caches depuis une ligne, et le catalogue des services REST de Server Manager sur lequel ils s'appuient."
keywords: [Nomajde, JD Edwards, Server Manager, supervision, instances, utilisateurs connectés, serveur d'entreprise, kernel, fonctions métier, mémoire Java, serveur AIS, serveur web, cache JDBj, vider un cache, démarrer une instance, arrêter une instance, redémarrer une instance, API REST]
---

# Server Manager

**Supervision → Server Manager** affiche ce que connaît la console Server Manager de JD Edwards, dans sept grilles de Nomajde : les instances et leur état, les utilisateurs connectés, la charge des serveurs d'entreprise et de leurs processus, les appels et les erreurs des fonctions métier, la mémoire Java des serveurs web et AIS, les caches JDBj des serveurs HTML. Le menu d'une ligne démarre, arrête ou redémarre une instance, ou vide un cache. Les écrans interrogent la console **en direct** à chaque ouverture ou actualisation ; rien n'est stocké dans Nomajde.

Pour la santé des serveurs dans le temps — contrôles toutes les cinq minutes, disponibilité, alertes —, voir [Contrôle de santé JDE](./jde-servers.md) ; pour surveiller les instances et redémarrer celle qui échoue, voir la tâche *Surveillance des instances* dans [Tâches](../jobs.md).

---

## Vue d'ensemble

<svg viewBox="0 0 1200 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="smg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="smg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="smg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="smg-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="22" width="760" height="332" rx="14" fill="url(#smg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JDBj caches</text>
  <rect x="240" y="62" width="720" height="22" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="77" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">› ⚲ Filtres avancés</text>
  <text x="240" y="102" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">8 lignes · 320 ms</text>
  <rect x="240" y="110" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="124.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">⌕ Rechercher…</text>
  <rect x="396" y="110" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="432.0" y="124.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="890" y="110" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="925.0" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="825" y="110" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="855.0" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="745" y="110" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="782.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Grouper (1)</text>
  <rect x="685" y="110" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="712.5" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="640" y="110" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="660.0" y="124.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="142" width="720" height="182" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="142" width="720" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">INSTANCE</text>
  <text x="346" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">NŒUD</text>
  <text x="401" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" fontFamily="ui-monospace, monospace">CACHE</text>
  <text x="632" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ÉLÉMENTS</text>
  <text x="702" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">ACCÈS</text>
  <text x="772" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">TROUVÉS</text>
  <text x="842" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">MANQUÉS</text>
  <text x="942" y="157.0" fill="#cbd5e1" fontSize="8" fontWeight="700" letterSpacing="0.05em" textAnchor="end" fontFamily="ui-monospace, monospace">TAUX DE RÉUSSITE</text>
  <rect x="246" y="170" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="180" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="180.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="632" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="702" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="772" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="842" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <text x="942" y="180.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace"></text>
  <line x1="241" y1="188" x2="959" y2="188" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="192" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="202" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="202.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="202.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="202.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JDBj OCM Cache</text>
  <text x="632" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1485</text>
  <text x="702" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">129766</text>
  <text x="772" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">129540</text>
  <text x="842" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">226</text>
  <text x="942" y="202.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.998</text>
  <line x1="241" y1="210" x2="959" y2="210" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="214" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="224" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="224.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JDBj Service Cache</text>
  <text x="632" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">192</text>
  <text x="702" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">15377</text>
  <text x="772" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">13976</text>
  <text x="842" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1401</text>
  <text x="942" y="224.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.909</text>
  <line x1="241" y1="232" x2="959" y2="232" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="236" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="246" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="246.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="246.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="246.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Data Dictionary Alpha Cache</text>
  <text x="632" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">4</text>
  <text x="702" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">340</text>
  <text x="772" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">244</text>
  <text x="842" y="246.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">96</text>
  <text x="942" y="246.5" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.718</text>
  <line x1="241" y1="254" x2="959" y2="254" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="258" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="268" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="268.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="268.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="268.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Serialized Objects</text>
  <text x="632" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1697</text>
  <text x="702" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">10633</text>
  <text x="772" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">8630</text>
  <text x="842" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">2003</text>
  <text x="942" y="268.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.812</text>
  <line x1="241" y1="276" x2="959" y2="276" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="280" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="290" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="290.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="290.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="290.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">JDBj Security Cache</text>
  <text x="632" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">1256</text>
  <text x="702" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">16574</text>
  <text x="772" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">13564</text>
  <text x="842" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">3010</text>
  <text x="942" y="290.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.818</text>
  <line x1="241" y1="298" x2="959" y2="298" stroke="#1f2937" strokeWidth="1"/>
  <rect x="246" y="302" width="14" height="14" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="253" y="312" fill="#94a3b8" fontSize="7" textAnchor="middle" fontFamily="system-ui, sans-serif">···</text>
  <text x="266" y="312.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="346" y="312.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace"></text>
  <text x="401" y="312.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">Menu Cache</text>
  <text x="632" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0</text>
  <text x="702" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">519</text>
  <text x="772" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">322</text>
  <text x="842" y="312.5" fill="#cbd5e1" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">197</text>
  <text x="942" y="312.5" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="ui-monospace, monospace">0.62</text>
  <line x1="241" y1="320" x2="959" y2="320" stroke="#1f2937" strokeWidth="1"/>
  <rect x="241" y="167" width="718" height="21" fill="#111827"/>
  <text x="266" y="181" fill="#e2e8f0" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">⌄ HTML_PD</text>
  <text x="326" y="181" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">(8)</text>
  <rect x="254" y="216" width="230" height="50" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="266" y="235" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Clear this cache</text>
  <text x="266" y="255" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Clear every cache of this server</text>
  <text x="472" y="235" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">chain</text>
  <text x="472" y="255" fill="#64748b" fontSize="7.5" textAnchor="end" fontFamily="system-ui, sans-serif">chain</text>
  <text x="240" y="342" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Lignes par page 50 · Affichage 1–9 sur 9 · 8 lignes au total</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtres avancés</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">listes : instance, état…</text>
  <line x1="200" y1="77.0" x2="250" y2="73" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="20" y="180" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Groupé par instance</text>
  <text x="30" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un bloc par serveur</text>
  <line x1="200" y1="197.0" x2="266" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="20" y="270" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="285" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu de ligne</text>
  <text x="30" y="298" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vider un cache, ou tous</text>
  <line x1="200" y1="287.0" x2="258" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grouper (1)</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">actif par défaut ; dégrouper ici</text>
  <line x1="1000" y1="117.0" x2="782.5" y2="121" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
  <rect x="1000" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Taux de réussite</text>
  <text x="1010" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">bas = redemandé à la base</text>
  <line x1="1000" y1="247.0" x2="940" y2="309" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#smg-arrow)"/>
</svg>

---

## Les écrans \{#screens\}

Tous les écrans se chargent à l'ouverture et ne font que lire ; les actions de ligne décrites plus bas sont les seules modifications qu'ils permettent. Chacun demande à la console la liste de ses instances, puis lit ensemble toutes les instances **démarrées** du bon type : une seule grille couvre toute la plateforme. Une instance arrêtée, ou pour laquelle la console refuse de répondre, garde une ligne dont la colonne **Remarque** en donne la raison — `not running (STOPPED)` par exemple.

| Entrée de menu | Contenu | Colonnes principales |
|---|---|---|
| **Instances** (*Instances JDE*) | Toutes les instances gérées par la console. | Instance, Type, État, Version des outils, Hôte, Répertoire JDE. |
| **Utilisateurs connectés** | Les sessions web et AIS — et, sur demande, les processus du serveur d'entreprise auxquels chaque utilisateur est connecté. | Utilisateur, Session, Instance, Environnement, Rôle, Depuis, Applications ouvertes, Connecté à, Inactif (secondes), Dernière activité, Processus. |
| **Serveurs d'entreprise** | Une ligne par serveur d'entreprise. | Instance, Hôte, En service depuis, Processus réseau, Processus noyau, Processus zombies, Utilisateurs du noyau sécurité, Utilisateurs call object, CPU, Mémoire. |
| **Processus des serveurs** | Chaque noyau et chaque écouteur réseau des serveurs d'entreprise. | Processus, Id processus, Instance, Nature, État du processus (*Running* ou *Zombie*, d'après l'état que la console donne au processus), Utilisateurs, Connectés, Requêtes en attente, Messages reçus, Mémoire, CPU, Threads, Connexions base, Transactions ouvertes, Démarré, Dernier message. |
| **Fonctions métier** | Les appels de fonctions métier vus par chaque serveur web. | Fonction métier, Appels, Moyenne (ms), Plus long (ms), Délais dépassés, Erreurs applicatives, Erreurs système, Total (ms), Plus court (ms), Instance, Serveur d'entreprise. |
| **Serveurs web et AIS** | Chaque nœud web et AIS. | Instance, Nœud, Type, En service depuis, Utilisateurs en ligne, Connexion, Mémoire Java utilisée (Mo), Mémoire Java maximale (Mo), Mémoire Java utilisée (en pourcentage). |
| **Caches JDBj** | Chaque cache JDBj des serveurs HTML. | Instance, Nœud, Cache, Éléments, Accès, Trouvés, Manqués, Taux de réussite. |

Les chiffres sont des nombres : ils se trient, se totalisent et s'exportent comme tels. **Caches JDBj**, **Processus des serveurs** et **Fonctions métier** comptent de nombreuses lignes par serveur : ils s'ouvrent **groupés par instance**, pour lire séparément plusieurs serveurs web ou d'entreprise — **Grouper**, dans la barre d'outils, les dégroupe.

### Utilisateurs connectés \{#users\}

La liste déroulante **Show**, au-dessus de la grille, donne le choix entre **Sessions** — les sessions web et AIS, valeur par défaut — et **Sessions and server processes**, qui ajoute les processus du serveur d'entreprise auxquels chaque utilisateur est connecté. La grille est vide quand personne n'est connecté.

---

## Démarrer, arrêter et redémarrer une instance \{#start-stop\}

L'écran **Instances** (*Instances JDE*) propose trois actions dans le menu de chaque ligne (**···**). Chacune demande d'abord une confirmation, puis relit la liste.

<svg viewBox="0 0 1200 268" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nsmi-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nsmi-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nsmi-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nsmi-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="236" rx="14" fill="url(#nsmi-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Instances JDE</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les instances que gère Server Manager, avec leur type et leur état — lues en direct.</text>
  <rect x="240" y="80" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif"></text>
  <text x="284" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">INSTANCE</text>
  <text x="394" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="490" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAT</text>
  <text x="582" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VERSION DES OUTILS</text>
  <text x="682" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">HÔTE</text>
  <text x="794" y="97.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉPERTOIRE JDE</text>
  <rect x="240" y="112" width="720" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">···</text>
  <text x="284" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">ENT_PD</text>
  <text x="394" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">entserver</text>
  <rect x="490" y="116.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="515.5" y="127.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="582" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">9.2.26.2</text>
  <text x="682" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEENT01</text>
  <text x="794" y="127.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">/u01/jde_home/SCFHA</text>
  <rect x="240" y="140" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">···</text>
  <text x="284" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">HTML_PD</text>
  <text x="394" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">webserver</text>
  <rect x="490" y="144.0" width="51" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="515.5" y="155.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">RUNNING</text>
  <text x="582" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">9.2.26.2</text>
  <text x="682" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEWEB01</text>
  <text x="794" y="155.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">/u01/jde_home/SCFHA</text>
  <rect x="240" y="168" width="720" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">···</text>
  <text x="284" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">AIS_PD</text>
  <text x="394" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">restserver</text>
  <rect x="490" y="172.0" width="51" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="515.5" y="183.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">STOPPED</text>
  <text x="582" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">9.2.26.2</text>
  <text x="682" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">JDEWEB01</text>
  <text x="794" y="183.5" fill="#cbd5e1" fontSize="8.8" fontFamily="ui-monospace, monospace">/u01/jde_home/SCFHA</text>
  <rect x="266" y="158" width="210" height="78" rx="7" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
  <text x="280" y="177" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Démarrer cette instance</text>
  <text x="280" y="201" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Arrêter cette instance</text>
  <rect x="270" y="210" width="202" height="22" rx="5" fill="rgba(74,158,255,0.14)"/>
  <text x="280" y="225" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">Redémarrer cette instance</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Menu de ligne (···)</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur chaque instance</text>
  <line x1="200" y1="137.0" x2="254" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Démarrer · Arrêter</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">envoyés tels quels à Server Manager</text>
  <line x1="200" y1="217.0" x2="266" y2="188" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Redémarrer</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">arrêt, attente, démarrage, attente</text>
  <line x1="1000" y1="167.0" x2="476" y2="221" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
  <rect x="1000" y="80" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">État</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">relu après l'action</text>
  <line x1="1000" y1="97.0" x2="520" y2="138" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nsmi-arrow)"/>
</svg>

| Action de ligne | Effet |
|---|---|
| **Démarrer cette instance** | Transmise telle quelle à Server Manager, qui démarre l'instance ; actualiser la liste pour suivre son état. |
| **Arrêter cette instance** | Transmise telle quelle à Server Manager. Ses utilisateurs sont déconnectés et leur travail en cours est perdu. |
| **Redémarrer cette instance** | Liberty arrête l'instance, attend que Server Manager la déclare arrêtée, la démarre et attend qu'elle soit en marche — quelques minutes. Une instance qui ne s'arrête pas n'est **pas** redémarrée ; une instance qui ne revient pas est signalée. Dans les deux cas, le message indique l'état dans lequel elle est restée, à examiner dans Server Manager. Une instance déjà arrêtée est simplement démarrée. |

Tout passe par l'API REST de Server Manager : rien n'est installé sur les serveurs JD Edwards.

La tâche **Surveillance des instances** interroge chaque serveur d'entreprise, HTML et AIS sur son état et sur les contrôles de santé de la console, conserve ce qui ne va pas et déclenche une alerte ; elle peut aussi redémarrer une instance dont les contrôles échouent, dans certaines limites. Elle est décrite dans [Tâches](../jobs.md).

---

## Vider un cache \{#actions\}

Trois écrans vident un cache depuis le menu d'une ligne (**···**). Chaque action demande d'abord une confirmation et a sa propre permission.

| Écran | Action de ligne | Vide |
|---|---|---|
| **Serveurs web et AIS** | **Clear data caches** | Sur un serveur HTML, ses caches d'extensions d'écran, d'écrans personnalisés et de groupes de recherche ; sur un serveur AIS, ses caches d'orchestrations, de services d'écran et de données, et de données lues. |
| **Serveurs web et AIS** | **Clear JDBj caches** | Tous les caches JDBj d'un serveur HTML — dictionnaire de données, menus, sécurité, objets sérialisés… Sur la ligne d'un serveur AIS, l'action précise qu'elle concerne un serveur HTML. |
| **Serveurs d'entreprise** | **Clear a table's cache…** | Demande la table et l'environnement (un nom, ou `ALL`) ; la réponse indique combien de processus ont été vidés. |
| **Caches JDBj** | **Clear this cache**, **Clear every cache of this server** | Le cache de la ligne, ou tous les caches JDBj de son serveur. La liste est relue ensuite. |

---

## Filtres \{#filters\}

Aucune saisie au-dessus des grilles : les colonnes se trouvent dans les **filtres avancés**, avec les mêmes opérateurs que dans toute grille de Nomajde. Quand les valeurs sont connues, le filtre est une liste de choix :

| Filtre | Valeurs |
|---|---|
| **État** | `RUNNING`, `STOPPED`, `UNKNOWN`. |
| **Session** (Utilisateurs connectés) | `Web session`, `AIS session`, `Enterprise server process`. |
| **Nature** (Processus des serveurs) | `Kernel Process`, `Network Listener`. |
| **Instance** | Les instances de la console, listées en direct avec leur type. |

Un filtre s'applique aux lignes renvoyées par la console : il réduit ce qui est affiché, pas ce qui est demandé à la console.

---

## La connexion à Server Manager \{#connection\}

Les écrans utilisent le connecteur `jde_server_manager`, déjà employé par le [contrôle de santé](./jde-servers.md#job). Ce connecteur ne porte ni adresse ni compte : il désigne le **pool `jde_server_manager`**, où la console se paramètre une seule fois. Dans **Liberty Next → Administrer → Pools**, ouvrir ce pool (type *HTTP server (an API)*) et y saisir l'adresse du service REST de la console avec son compte (`jde_admin` par défaut), le mot de passe et la vérification ou non du certificat TLS. Les droits de ce compte dans Server Manager déterminent ce qu'il peut lire.

À l'installation, le pool peut aussi être alimenté par l'environnement du serveur : `JDE_SM_URL` (l'adresse avec son compte) et `JDE_SM_VERIFY_SSL` (`true` par défaut). Voir [Pools](../../framework/connectors.md#pools).

---

## Le catalogue des services Server Manager \{#catalogue\}

Au-delà des écrans, le connecteur porte un catalogue des services REST de Server Manager, rédigé d'après le guide d'Oracle : chaque point d'accès a ses paramètres expliqués et sa propre permission, ce qui permet de donner à un rôle un service sans les autres. Ils s'appellent depuis l'onglet **Test** du connecteur, une action d'écran, une étape de tâche ou l'[assistant IA](../../framework/ai-assistant.md).

| Rubrique | Contenu |
|---|---|
| **Monitoring** | Instances, répertoires et agents, path codes, domaines et serveurs WebLogic, composants et leurs versions, configuration INI, fichiers journaux. |
| **Runtime Metrics** | Activité et processus des serveurs d'entreprise, statistiques des fonctions métier, mémoire Java, connexions et caches JDBj, utilisateurs connectés, sessions. |
| **Manage and Update Operations** | Démarrer ou arrêter une instance, toutes les instances ou un serveur WebLogic, rafraîchir les environnements, vider les caches de données. |
| **Server Group**, **User Log Configuration**, autres | Groupes de serveurs, configurations enregistrées, niveau de journalisation d'un utilisateur. |

Les services qui **modifient la plateforme** — démarrer et arrêter une instance, démarrer et arrêter toutes les instances, démarrer et arrêter un serveur WebLogic, rafraîchir les environnements, changer un niveau de journalisation, vider les caches de données, les caches JDBj ou le cache d'une table — sont marqués comme tels : l'assistant IA n'en appelle jamais un sans présenter d'abord une carte à valider, et seulement pour un utilisateur autorisé à modifier des données par son intermédiaire.

Le provisionnement (créer, enregistrer ou supprimer une instance), les mots de passe, TLS, les utilisateurs et les groupes, la sauvegarde et la restauration, ainsi que les mises à jour des agents et de la console sont volontairement absents du catalogue.

---

## Accès \{#access\}

Chaque écran est visible des rôles qui détiennent son entrée de menu. **Démarrer cette instance** et **Arrêter cette instance** appellent les services `sm_startinstance` et `stopinstance` et demandent leur permission de point d'accès ; **Redémarrer cette instance** s'exécute avec `plugin:nomajde.instances:*`, que détiennent les rôles prédéfinis **Exploitant de la plateforme** et **Administrateur**. Un service brut du catalogue demande la permission `api:jde_server_manager:<service>`, accordée dans les règles *Au-delà des menus* d'un rôle : les services de lecture peuvent être largement accordés, ceux qui modifient la plateforme — vidage des caches depuis les menus de ligne compris — sont à réserver à l'équipe d'exploitation.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **Instances** : une instance qui n'est pas `RUNNING` explique une ligne vide dans les autres écrans.
- Préférer **Redémarrer cette instance** à un arrêt suivi d'un démarrage : l'action attend la fin de l'arrêt, alors qu'un démarrage envoyé trop tôt reste sans effet.
- Dans **Processus des serveurs**, trier sur **Requêtes en attente** ou **CPU** pour trouver le noyau qui retient une file ; trier sur **État du processus** pour regrouper les processus *Zombie* — terminés sans avoir été nettoyés.
- Dans **Fonctions métier**, trier sur **Erreurs système** ou **Délais dépassés** après un déploiement : une fonction en erreur sur un seul serveur web désigne ce serveur.
- **Serveurs web et AIS** — une mémoire utilisée proche de son maximum sur plusieurs actualisations est le signal à traiter avant l'appel des utilisateurs.
- **Caches JDBj** — un **Taux de réussite** bas juste après un redémarrage est normal ; s'il reste bas, le cache est trop petit pour ce qui est utilisé. Vider un cache après avoir modifié ce qu'il contient dans JD Edwards (sécurité, menus, dictionnaire de données) plutôt que de redémarrer le serveur.

---

## Voir aussi

- [Contrôle de santé JDE](./jde-servers.md) — les contrôles conservés dans le temps et leurs alertes.
- [Performance](./performance.md) et [Analyse de la plateforme](./platform-analysis.md) — la même console lue sous forme de conseils et d'analyse.
- [Services JD Edwards (AIS)](../ais/services.md) — la même approche pour le serveur AIS.
- [Vue d'ensemble — le point d'entrée](../home.md).
