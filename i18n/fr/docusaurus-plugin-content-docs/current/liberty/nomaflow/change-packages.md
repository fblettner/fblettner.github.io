---
title: Paquets de modifications
description: "Capturez chaque écriture de donnée suivie dans un paquet revu et promouvable — diffs ancien → nouveau groupés par entité, exclusion d'entrées à la carte, soumission / approbation / rejet du paquet, export d'un paquet JSON et application sur un autre environnement avec détection complète de dérive sur l'image avant. Le cas d'usage canonique est la promotion de la sécurité JD Edwards du développement vers la production."
keywords: [Liberty Framework, paquets de modifications, change packages, changesets, promotion sécurité JDE, brouillon / soumis / approuvé / exporté / promu / rejeté, détection de dérive, rejeu, CALL_API, CALL_PLUGIN, change_replay, change_tracked, change_entity, post-apply, AppliedBundle, Nomaflow]
---

# Paquets de modifications

La page **Paquets de modifications** capture chaque écriture de donnée suivie dans un ensemble groupé, revu et promouvable. Le cas d'usage qui a motivé la fonctionnalité est la **promotion de la sécurité JD Edwards d'un environnement de développement vers la production** — copier un rôle, attacher quelques menus, enregistrer → les écritures arrivent dans les tables de développement, ET dans un *paquet de modifications* que l'opérateur peut revoir, approuver et expédier vers la production sous forme de paquet JSON.

Le même schéma convient à tout autre flux « faire les modifications ici, les rejouer là-bas » : un rafraîchissement de catalogue UDC curé, un lot de nouvelles permissions sur un écran spécifique, une mise à jour de règle de routage sur une table de configuration. Quand un écran est **`change_tracked`**, ses insertions / mises à jour / suppressions rejoignent le paquet brouillon actif en parallèle de l'écriture de production.

Derrière la page, le framework conserve chaque écriture suivie dans sa propre base — celle du framework, distincte du miroir d'audit —, et le chemin d'application les rejoue sur la cible avec détection des écarts sur l'image avant.

La page **Paquet** transporte des tranches de configuration (écrans, entrées de menu, tableaux de bord…) ; les Paquets de modifications transportent des **données**. Les deux se côtoient sous *Liberty Next → Déployer*.

---

## Ouvrir la page

**Liberty Next → Déployer → Modifications**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 590" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="550" rx="14" fill="url(#nfcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⇄</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Modifications</text>
  <rect x="996" y="32" width="84" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1038.0" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Actualiser</text>
  <rect x="879" y="32" width="109" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Nouveau package</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="78" width="87" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="283.5" y="93.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Changements</text>
  <rect x="333" y="78" width="77" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="371.5" y="93.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇧ Appliquer</text>
  <rect x="240" y="114" width="250" height="440" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="124" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="138.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕  Filtrer par statut / date…</text>
  <rect x="250" y="156" width="230" height="58" rx="7" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="262" y="173" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Package 4 · crm</text>
  <rect x="262" y="180" width="39" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="281.5" y="190.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DRAFT</text>
  <text x="307" y="191" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 12 modification(s)</text>
  <text x="262" y="206" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">créé · 20/11/2026</text>
  <rect x="250" y="222" width="230" height="58" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="239" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Package 3 · crm</text>
  <rect x="262" y="246" width="47" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="285.5" y="256.7" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PENDING</text>
  <text x="315" y="257" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 5 modification(s)</text>
  <text x="262" y="272" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">soumis · 18/11/2026</text>
  <rect x="250" y="288" width="230" height="58" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="305" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">role-cleanup</text>
  <rect x="262" y="312" width="39" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="281.5" y="322.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DRAFT</text>
  <rect x="305" y="312" width="39" height="15" rx="7.5" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="324.5" y="322.7" fill="#c084fc" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">perso</text>
  <text x="350" y="323" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 3 modification(s)</text>
  <text x="262" y="338" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">créé · 15/11/2026</text>
  <rect x="250" y="354" width="230" height="58" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="371" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Package 1 · crm</text>
  <rect x="262" y="378" width="51" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="287.5" y="388.7" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">EXPORTED</text>
  <text x="319" y="389" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 42 modification(s)</text>
  <text x="262" y="404" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">approuvé · 02/11/2026</text>
  <rect x="502" y="114" width="578" height="440" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="136" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Package 4 · crm</text>
  <rect x="622" y="125" width="39" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="641.5" y="135.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DRAFT</text>
  <rect x="994" y="124" width="72" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1030.0" y="138.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Supprimer</text>
  <rect x="916" y="124" width="72" height="22" rx="5" fill="url(#nfcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="952.0" y="138.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤ Soumettre</text>
  <rect x="833" y="124" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="871.5" y="138.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Tout déplier</text>
  <line x1="502" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="179" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="530" y="179" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="179" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="576.6" y="179" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· ROLE=SALES_MGR</text>
  <rect x="871" y="168" width="85" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="913.5" y="179" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3 MODIFICATION(S)</text>
  <rect x="952" y="167" width="62" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.0" y="179.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Déplacer</text>
  <rect x="1014" y="167" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="179.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Supprimer</text>
  <rect x="536" y="192" width="530" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="556" y="196" width="43" height="15" rx="7.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="577.5" y="206.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INSERT</text>
  <text x="607" y="207.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6 champ(s)</text>
  <text x="662.6" y="207.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">crm.roles</text>
  <text x="1058" y="207.5" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="1042" y="207.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Déplacer</text>
  <text x="1000.16" y="207.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Exclure</text>
  <text x="564" y="230" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">ROLE</text>
  <text x="672" y="230" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_MGR</text>
  <text x="564" y="245" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="672" y="245" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Responsables des ventes</text>
  <text x="564" y="260" fill="#4a9eff" fontSize="8" fontFamily="system-ui, sans-serif">+ 4 inchangé(s)</text>
  <rect x="536" y="272" width="530" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544" y="288" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <rect x="556" y="276" width="43" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="577.5" y="286.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UPDATE</text>
  <text x="607" y="287.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 modifié(s)</text>
  <text x="672.12" y="287.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">crm.roles</text>
  <text x="1058" y="287.5" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="1042" y="287.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Déplacer</text>
  <text x="1000.16" y="287.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Exclure</text>
  <rect x="536" y="300" width="530" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <rect x="556" y="304" width="64" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="588.0" y="314.7" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CALL PLUGIN</text>
  <text x="628" y="315.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">rejoué à l'application</text>
  <text x="740.72" y="315.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">crm.remerge</text>
  <text x="1058" y="315.5" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="1042" y="315.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Déplacer</text>
  <text x="1000.16" y="315.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Exclure</text>
  <text x="516" y="343" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="530" y="343" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="343" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="576.6" y="343" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· USER=JDOE</text>
  <rect x="642.57" y="332" width="69" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="649.57" y="343.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="ui-monospace, monospace">import users</text>
  <rect x="871" y="332" width="85" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="913.5" y="343" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4 MODIFICATION(S)</text>
  <rect x="952" y="331" width="62" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.0" y="343.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Déplacer</text>
  <rect x="1014" y="331" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="343.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Supprimer</text>
  <text x="516" y="371" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="530" y="371" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="371" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="576.6" y="371" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· USER=ASMITH</text>
  <rect x="871" y="360" width="85" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="913.5" y="371" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2 MODIFICATION(S)</text>
  <rect x="952" y="359" width="62" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.0" y="371.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Déplacer</text>
  <rect x="1014" y="359" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="371.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Supprimer</text>
  <text x="516" y="399" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="530" y="399" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="399" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Security</text>
  <text x="592.56" y="399" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· ROLE=SALES_MGR · OBJECT=P4210</text>
  <rect x="871" y="388" width="85" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="913.5" y="399" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3 MODIFICATION(S)</text>
  <rect x="952" y="387" width="62" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="983.0" y="399.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Déplacer</text>
  <rect x="1014" y="387" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="399.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Supprimer</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changements · Appliquer</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">revoir ici, appliquer un bundle là</text>
  <line x1="200" y1="87.0" x2="240" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Packages</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">statut, application, modifications</text>
  <line x1="200" y1="187.0" x2="250" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un package personnalisé</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un package d'attente</text>
  <line x1="200" y1="347.0" x2="250" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nouveau package</text>
  <text x="1130" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un package d'attente personnalisé</text>
  <line x1="1120" y1="89.0" x2="976" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Boutons du cycle de vie</text>
  <text x="1130" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">selon l'état : Soumettre, Approuver…</text>
  <line x1="1120" y1="157.0" x2="952.0" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par enregistrement</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entité, clé, nombre de modifications</text>
  <line x1="1120" y1="227.0" x2="1066" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chaque modification</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Exclure, Déplacer, Supprimer</text>
  <line x1="1120" y1="317.0" x2="1058" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Les différences</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ancien → nouveau, le reste à la demande</text>
  <line x1="1120" y1="397.0" x2="922" y2="255" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
</svg>

---

## Comment un paquet se remplit

Trois éléments doivent être en place pour qu'une écriture rejoigne un paquet.

| Requis | Description |
|---|---|
| **L'écran est `change_tracked = true`** | Un drapeau dans l'onglet *Général* de l'écran (ou son TOML). Sans lui, les écritures vont uniquement dans la table sous-jacente — pas de capture. |
| **Un brouillon actif existe pour l'application** | Le connecteur de l'écran → son `application`. Le framework garde **au plus un BROUILLON par application** (garanti par un index unique partiel). La première écriture suivie sur cette application en crée un s'il n'en existe pas. |
| **L'utilisateur est connecté** | Le paquet enregistre `captured_by` depuis la session. Les écritures anonymes ne sont pas suivies. |

Quand ces conditions sont réunies, chaque écriture suivie produit une **entrée de modification** :

| Opération | Ce qui est capturé |
|---|---|
| `INSERT` | `new_values` — les colonnes d'écriture liées. |
| `UPDATE` | `old_values` (l'image avant récupérée via le `read_query` de l'écran avant l'écriture) + `new_values`. L'image avant est ce qui pilote la détection de dérive à l'application. |
| `DELETE` | `old_values` uniquement. |
| `CALL_API` | Les paramètres d'appel résolus + le drapeau `change_replay` configuré — réémis tels quels à l'application quand `replay = true`. |
| `CALL_PLUGIN` | Pareil — l'id du plugin + les kwargs résolus, conditionnés par `change_replay`. |

Chaque entrée enregistre aussi :

- `connector` + `query` — le framework peut router le rejeu vers le connecteur correspondant sur la cible.
- `entity` — le `change_entity` optionnel de l'écran (`role`, `user`, `relationship`, `security`, …). L'interface groupe les entrées par cette étiquette sur la page de détail ; un écran sans `change_entity` capture quand même, simplement groupé par `query`.
- `entity_key` — la clé naturelle de la ligne (résolue depuis les `key_columns` de l'écran). Pilote la **compaction** à l'export — `INSERT puis UPDATE puis UPDATE` sur la même clé se réduit à une seule entrée nette ; `INSERT puis DELETE` s'annule entièrement.
- `source_action` — l'étiquette de l'action qui a déclenché l'écriture, transmise depuis le contexte d'origine. Permet à la vue de détail de grouper un lot comme « importé par *import sécurité* » au lieu d'un mur d'insertions sans attribution.
- `read_query` — la requête de lecture de l'écran, utilisée par le chemin d'application pour récupérer la ligne cible actuelle et la comparer à `old_values` pour la détection de dérive.
- `seq` — monotone par paquet, pour que le rejeu préserve l'ordre de capture. Un rôle doit exister avant d'être référencé ; le seq le garantit.

### Ce que `change_tracked` ne suit PAS

| Non suivi | Pourquoi |
|---|---|
| Les écritures d'un écran avec `change_tracked = false`. | Comportement par défaut. Les tables d'audit (journal de notifications, statistiques de relance) ne doivent pas polluer les paquets de promotion. |
| Les écritures d'un job Nomaflow, d'un import en masse, du CLI. | Le suivi est par écran et passe par le chemin d'écriture de l'écran. Les jobs utilisent les appelables `j_*` directement sur le connecteur. |
| Les lectures — aucun SELECT n'est jamais capturé. | Le paquet est un journal de *modifications*. |
| Les écritures de métadonnées propres au framework (tâches, utilisateurs, les paquets de modifications eux-mêmes). | La boucle de capture vérifie `change_tracked` sur l'écran du connecteur, pas sur la table. |

---

## Le cycle de vie

Un paquet passe par ces états :

```text
    DRAFT ─── submit ───▶ PENDING ─── approve ──▶ APPROVED ─── export ──▶ EXPORTED
                              │
                              └── reject ──▶ REJECTED
```

| État | Signification |
|---|---|
| **`DRAFT`** | Le paquet actif de son application. Les nouvelles écritures suivies s'y rattachent. Les entrées peuvent être exclues / réincluses. |
| **`PENDING`** | Soumis à approbation. Aucune nouvelle écriture ne s'y rattache (un nouveau brouillon s'ouvre pour l'application à la capture suivante). Le relecteur peut approuver ou rejeter. |
| **`APPROVED`** | Figé, prêt à l'export. Les entrées ne peuvent plus être exclues. |
| **`EXPORTED`** | Un paquet JSON a été téléchargé. Le paquet reste côté source la trace de ce qui a été livré ; le fichier JSON est ce qui part vers la cible. |
| **`REJECTED`** | Le relecteur l'a refusé. Il reste rejeté ; la prochaine écriture suivie sur l'application ouvre un nouveau brouillon. |

L'en-tête du détail présente les boutons de l'état du paquet — **Soumettre** sur un brouillon, **Approuver** et **Rejeter** sur un paquet en attente, **Exporter le package** et **Promouvoir vers…** sur un paquet approuvé ou exporté — ; ils appellent `POST /admin/changesets/<id>/submit` (ou `…/approve`, `…/reject`, `…/export`). Les paquets de modifications sont réservés aux superutilisateurs.

### Exclure, déplacer, supprimer \{#entries\}

Tant que le paquet est `DRAFT`, chaque modification porte **Exclure**, **Déplacer** et une icône de suppression, et chaque enregistrement (toutes les modifications d'une même ligne) porte **Déplacer** et **Supprimer** :

| Action | Effet |
|---|---|
| **Exclure** / **Inclure** | La modification reste dans le paquet, estompée, marquée `excluded`, et n'entre ni dans la compaction ni dans l'export. Un second clic la réintègre. Pratique pour écarter un essai du paquet sans en perdre la trace. |
| **Déplacer** | Déplace la modification — ou tout l'enregistrement — vers un autre paquet brouillon de la même application, ou vers un **Nouveau package personnalisé…** créé sur le moment. |
| **Supprimer** | Retire définitivement la modification — ou l'enregistrement — du journal du paquet, après confirmation. Les lignes déjà écrites en base ne changent pas ; un export ultérieur ne peut plus les reprendre. |

La compaction est calculée à l'**export**, pas à la capture : les exclusions comptent dès la construction du paquet JSON.

---

## L'onglet Changements — relire et agir \{#changes-tab\}

La page a deux onglets : **Changements** (les paquets) et **Appliquer** (décrit plus bas). Dans l'en-tête de la page, **Nouveau package** crée un paquet **perso** — un paquet d'attente de l'application, où déplacer des modifications à promouvoir plus tard —, et **Actualiser** relit la liste.

### Colonne de gauche — la liste des paquets

| Élément | Description |
|---|---|
| **Filtrer par statut / date…** | Restreint la liste par statut ou par date. |
| Ligne de paquet | Le nom, le badge de statut — `DRAFT` bleu, `PENDING` orange, `APPROVED` vert, `EXPORTED` gris, `REJECTED` rouge —, un badge **perso** pour un paquet d'attente, l'application et le nombre de modifications, puis la date de création, de soumission ou d'approbation. |
| Paquet sélectionné | Mis en évidence ; son détail s'affiche à droite. |

### Colonne de droite — détail du paquet

| Élément | Description |
|---|---|
| En-tête | Le nom et le statut du paquet ; **Tout déplier** / **Tout replier** ; les boutons de son état (**Soumettre**, **Approuver** / **Rejeter**, **Exporter le package** / **Promouvoir vers…**) ; **Supprimer**, qui retire le journal du paquet — les lignes déjà écrites restent — après confirmation. Sur un paquet approuvé, *+ N post-application* indique le nombre d'étapes de post-application que portera le paquet JSON. |
| Une ligne par enregistrement | L'entité (`change_entity`, ou la requête), la clé de l'enregistrement (`ROLE=SALES_MGR`), l'action à l'origine des modifications quand il y en a une (*import users*, *Assistant IA*), le nombre de modifications et, sur un brouillon, **Déplacer** / **Supprimer**. Un clic déplie ses modifications. |
| Une modification | Le badge d'opération (`INSERT`, `UPDATE`, `DELETE`, `CALL API`, `CALL PLUGIN`), ce qu'elle fait — *N champ(s)*, *N modifié(s)*, *ligne supprimée*, *rejoué à l'application* ou *capturé · non rejoué* —, le connecteur et la requête et, sur un brouillon, **Exclure** / **Déplacer** / suppression. Un clic déplie les écarts. |
| Les écarts | `champ` / valeur : l'ancienne valeur barrée en rouge, la nouvelle en vert ; **+ N inchangé(s)** affiche les autres colonnes (**masquer N inchangé(s)** les replie). Un appel affiche ses arguments, et s'il est rejoué à l'application. |

### Étapes de post-application en en-tête

Un écran peut nommer des **étapes de post-application** (`Screen.post_apply`) : des actions à exécuter une fois sur la cible après l'écriture des lignes du paquet — refusionner un modèle de sécurité, rafraîchir une vue matérialisée. Elles proviennent d'une bibliothèque d'étapes de post-application commune à l'application, chaque étape étant un appel de plugin (`call_plugin`), un endpoint d'API (`call_api`) ou une requête (`run_query`). Leurs identifiants s'accumulent en en-tête du paquet et, à l'export, s'ajoutent au paquet JSON comme dernières opérations.

---

## L'onglet Appliquer — importer un paquet

À lancer sur l'installation **cible** (en général la production) pour importer un paquet exporté depuis la source (en général le développement).

L'application se fait en deux temps : **d'abord un essai à blanc** pour voir le rapport des écarts par opération, puis l'application réelle, avec éventuellement certains conflits cochés pour les appliquer quand même.

| Étape | Description |
|---|---|
| 1. **Choisir le JSON** | Le paquet exporté. L'en-tête affiche son nom, son application et son nombre d'opérations une fois lu. |
| 2. **Essai à blanc** | `POST /admin/changesets/apply { bundle, dry_run: true }`. Le serveur parcourt chaque opération, lit la ligne actuelle de la cible avec la `read_query` capturée, la compare aux `old_values` capturées et attribue un statut. **Aucune écriture.** |
| 3. **Lire le rapport** | Chaque opération affiche son statut : `would_apply` (sans écart), `conflict` (la cible diffère de l'état capturé — voir plus bas), `would_force` (un conflit que l'opérateur a choisi d'appliquer), `unverified` (contrôle impossible), `skipped` (une action capturée pour relecture seulement), `error`. La ligne de synthèse totalise chaque statut. |
| 4. **Cocher ce qui doit s'appliquer quand même** | Chaque opération `conflict` — et chaque opération `unverified`, dont l'écart ne peut être contrôlé faute de requête de lecture sur l'écran — a une case **forcer**. La cocher **applique** l'opération malgré tout (elle devient `would_force`) ; une opération non cochée n'est pas appliquée. |
| 5. **Appliquer** | `POST /admin/changesets/apply { bundle, dry_run: false, force: [<index>] }`. Chaque opération s'exécute dans sa propre transaction ; le nombre de lignes et le statut de chacune reviennent dans le rapport. |
| 6. **Confirmation** | Une ligne s'ajoute au journal d'import de la cible (en haut de l'onglet *Appliquer*), avec la somme de contrôle du paquet. Le paquet source reste `EXPORTED`. |

### Promouvoir vers une autre instance \{#promote\}

Un paquet approuvé — ou déjà exporté — peut partir directement vers une autre instance, sans manipuler le JSON : **Promouvoir vers…** dans l'en-tête du paquet ouvre la fenêtre de promotion. Choisir la **Cible** et un **Commentaire** facultatif : la cible effectue aussitôt l'essai à blanc et renvoie son rapport d'écarts, avec les mêmes cases **forcer** ; **Appliquer sur &lt;cible&gt;** l'applique sur place et marque le paquet comme exporté. Les cibles se déclarent dans *Paquet → Promotion* — voir [Paquets → Promotion](../framework/build/packages.md#promotion) ; les promotions appliquées figurent dans son historique.

### Détection des écarts — ce qui est comparé

Pour chaque opération sur une ligne, l'application lit la ligne actuelle de la cible avec la `read_query` et la clé capturées, puis :

| Opération | Ligne cible | Statut |
|---|---|---|
| INSERT | absente | `would_apply` |
| INSERT | déjà présente | `conflict` |
| UPDATE / DELETE | identique à l'état capturé | `would_apply` |
| UPDATE / DELETE | différente, ou absente | `conflict` |
| toute | pas de requête de lecture ni de clé capturée, ou lecture impossible | `unverified` — appliquée sans contrôle |
| `CALL_API` / `CALL_PLUGIN` | — | `unverified` — relancée à l'application ; `skipped` quand l'action a été capturée sans `change_replay` |
| étape de post-application | — | `unverified` — toujours exécutée, après les opérations de modification |

Un conflit n'est appliqué que si sa case est cochée. Une opération dont l'écriture échoue est signalée `error` avec le message de la base.

### Réappliquer le même paquet

Le journal d'import identifie un paquet par sa **somme de contrôle** (un SHA-256 de ses opérations). Réappliquer le même fichier est détecté avant toute écriture — le rapport d'essai à blanc porte un bloc `already_applied` avec les `applied_at` / `applied_by` précédents. L'opérateur peut confirmer et réappliquer (les lignes s'écrivent de nouveau là où la cible correspond à l'état capturé ; les autres reviennent en conflit) ou fermer le fichier.

### Rejeu d'action (`CALL_API` / `CALL_PLUGIN`)

Un écran suivi capture **chaque** appel d'API ou de plugin qu'il déclenche (pour que le paquet l'affiche en relecture). Le **rejeu** de l'appel sur la cible dépend de l'option `change_replay` de l'action :

| `change_replay` | Ce qui est rejoué sur la cible |
|---|---|
| `true` *(à activer)* | L'action est relancée telle quelle avec les paramètres capturés. Sert aux plugins de fusion côté serveur comme `nomajde.security:j_remerge_security` — refusionner la sécurité sur la cible est correct une fois les lignes écrites. |
| `false` *(par défaut)* | La capture est affichée dans le paquet pour relecture mais **pas** relancée. Sert aux effets ponctuels qui ne doivent pas se produire deux fois (envoi d'e-mails, webhook externe). |

---

## Promouvoir la sécurité JD Edwards — le cas d'usage de référence

Le flux qui a motivé cette fonctionnalité. Sur l'instance de **développement** :

1. L'opérateur crée un rôle `PRJM_NEW`, lui attache trois menus, modifie les permissions de deux rôles existants. Chaque écriture rejoint au fil de l'eau le paquet brouillon de l'application **`JDE-PROD`**.
2. L'opérateur ouvre *Liberty Next → Déployer → Modifications*, relit le brouillon. Le détail regroupe les trois rôles sous `ROLES`, les menus attachés sous `MENUS`, la sécurité touchée sous `SECURITY`. Une entrée `CALL_PLUGIN` vers `nomajde.security:j_remerge_security` est aussi capturée.
3. L'opérateur exclut une entrée — une correction de coquille qu'il préfère annuler à la main. Il soumet, puis *Approuve*, puis *Exporte*.
4. Le navigateur télécharge `jde-prod-security-2026-06-09.changeset.json`.

Sur l'instance de **production** :

5. L'opérateur ouvre *Liberty Next → Déployer → Modifications → Appliquer*, dépose le JSON.
6. L'essai à blanc s'exécute. Le rapport affiche 11 `would_apply` et 1 `conflict` sur le rôle `BUYER_R2` (modifié en production depuis la capture). L'opérateur coche cette ligne pour l'appliquer quand même.
7. L'opérateur clique sur *Appliquer*. Toutes les lignes s'écrivent ; l'étape de post-application s'exécute en dernier et refusionne la sécurité des rôles parents concernés.
8. Le journal d'import de la production enregistre le paquet avec sa somme de contrôle.

Pour le détail du SQL de fusion exécuté par l'étape de post-application, voir [Nomaflow → Jobs intégrés → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all).

---

## Configurer un écran pour le suivi des modifications

L'onglet *Général* de l'écran porte trois réglages :

| Champ | Description |
|---|---|
| **`change_tracked`** | Réglage principal. Activé, les écritures de l'écran rejoignent le paquet actif de son application. |
| **`change_entity`** | Libellé facultatif qui regroupe les entrées dans le détail. Texte libre — `role`, `user`, `relationship`, `security` par convention. Vide : le nom de la requête. |
| **`Screen.post_apply`** | Identifiants d'étapes de post-application (de la bibliothèque des étapes de post-application) à exécuter **une fois sur la cible** après l'écriture des lignes du paquet. À utiliser avec parcimonie — ce sont les étapes transverses du type « refusionner la sécurité » ou « rafraîchir les vues matérialisées ». |

Pour une action intégrée à l'écran, un réglage supplémentaire dans l'onglet *Général* de l'action :

| Champ | Description |
|---|---|
| **`change_replay`** | Activé, un appel `CALL_API` / `CALL_PLUGIN` de cette action est rejoué sur la cible. Désactivé par défaut — capture seule. |

---

## Contrat d'API \{#api-contract\}

| Endpoint | Méthode | Description |
|---|---|---|
| `/admin/changesets` | `GET` | Liste les paquets. Filtres : `application=<id>`, `status=<valeur>`. Superutilisateur uniquement. |
| `/admin/changesets/<id>` | `GET` | Détail du paquet — en-tête + chaque entrée avec ses valeurs avant / après. |
| `/admin/changesets/<id>` | `DELETE` | Supprime seulement le journal du paquet (pas les écritures). |
| `/admin/changesets/<id>/submit` | `POST` | Passe `DRAFT` → `PENDING`. |
| `/admin/changesets/<id>/approve` | `POST` | Passe `PENDING` → `APPROVED`. |
| `/admin/changesets/<id>/reject` | `POST` | Passe `PENDING` → `REJECTED`. |
| `/admin/changesets/<id>/entries/<entry_id>/exclude` | `POST` | Passe une entrée en `EXCLUDED`. |
| `/admin/changesets/<id>/entries/<entry_id>/include` | `POST` | Repasse une entrée en `CAPTURED`. |
| `/admin/changesets/<id>/export` | `GET` | Renvoie le paquet JSON compacté ; passe le paquet en `EXPORTED`. |
| `/admin/changesets/apply` | `POST` | Corps : `{ bundle, dry_run, force: [<index>] }`. Renvoie le rapport par opération. |
| `/admin/changesets/applied` | `GET` | Le journal d'import de la cible (chaque paquet appliqué). |

La forme du paquet :

```json
{
  "format": "liberty-changeset/1",
  "package": { "id": "...", "name": "...", "application": "JDE-PROD", "approved_by": "...", "approved_at": "..." },
  "op_count": 12,
  "ops": [
    { "seq": 1, "connector": "jdedwards", "query": "roles", "read_query": "roles_by_key",
      "operation": "INSERT", "entity": "role", "entity_key": {"RLDF": "PRJM_NEW"},
      "new_values": {"RLDF": "PRJM_NEW", "RLDC": "1", ...},
      "source_action": "import security" }
  ],
  "checksum": "9f2c…"
}
```

Le format reste stable d'une version du framework à l'autre. Le champ `format` porte la version du paquet (`liberty-changeset/1`) ; les étapes de post-application voyagent comme dernières entrées de `ops`.

---

## Ce qui n'est PAS dans cette page

Le framework livre le moteur pour ce qui suit, mais l'interface aujourd'hui est volontairement minimale :

| Surface | État |
|---|---|
| **Planifier une soumission / approbation automatique** | Non. Cycle de vie manuel par choix de conception (un paquet approuvé part en prod — la validation humaine est précisément l'objectif). |
| **Diff entre deux paquets** | Non. Comparez sur la cible via le journal des paquets appliqués + la vue de détail côté source. |
| **Annuler un paquet appliqué** | Non. Le framework enregistre l'application mais ne construit pas de paquet inverse. Pour défaire, capturer sur la source un nouveau paquet qui annule les lignes, puis l'appliquer. |
| **Mises à jour multi-onglets en direct** | Non. Une capture sur un autre onglet ne rafraîchit pas cette page ; cliquer sur *Actualiser* (en haut à droite) pour recharger. |

---

## Pièges courants

| Erreur | Symptôme | Correctif |
|---|---|---|
| L'écran n'a pas été marqué `change_tracked`. | Les écritures passent ; aucune entrée n'apparaît dans le paquet. | Ouvrir l'onglet *Général* de l'écran, activer la bascule, enregistrer. La modification ne s'applique qu'aux écritures suivantes — les écritures antérieures ne sont pas rétro-remplies. |
| Deux opérateurs ont un paquet `DRAFT` ouvert sur la même application. | Au plus un `DRAFT` existe à la fois ; les écritures du second opérateur s'attachent au même paquet. | Se coordonner. Le `created_by` du paquet enregistre l'auteur d'origine ; les captures suivantes marquent `captured_by` sur chaque entrée, l'attribution est donc conservée. |
| Paquet appliqué sur la mauvaise cible (recette au lieu de prod). | L'application réussit ; les lignes existent sur la recette. | Capturer un paquet inverse sur la recette, le promouvoir en production — le framework ne synthétise pas cela automatiquement. La discipline de flux compte plus que l'outil ici. |
| `conflict` sur chaque UPDATE à l'essai à blanc. | L'image avant de la cible a divergé largement — typiquement parce que la source et la cible n'étaient pas synchronisées au départ. | Auditer la divergence d'abord. Tout forcer propage l'état de la source en bloc ; parfois c'est juste, parfois c'est la source qui est obsolète. |
| `CALL_PLUGIN` capturé mais non déclenché à l'application. | `change_replay` est désactivé sur l'action. | Ouvrir l'onglet *Général* de l'action, activer `change_replay`, enregistrer. Les captures futures seront rejouées ; les précédentes dans des paquets déjà exportés restent telles quelles. |
| L'étape de post-application ne s'est jamais exécutée. | Le champ `Screen.post_apply` de l'écran contributeur est vide. | Ajouter l'identifiant de l'étape au `post_apply` de l'écran. Les nouvelles captures l'ajoutent en en-tête du paquet ; les paquets existants ne sont pas complétés. |
| Paquet réappliqué par accident. | L'essai à blanc affiche `already_applied` avec l'horodatage précédent. | Lire le rapport de l'application existante. Réappliquer est permis et ré-exécutable sans danger sur les lignes propres ; à ne faire qu'en connaissance de cause. |

---

## Pour aller plus loin

- [Nomaflow → Jobs intégrés → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all) — le plugin de re-fusion de sécurité le plus souvent câblé comme étape de post-application sur les promotions JDE.
- [Nomaflow → Concepts](./concepts.md) — le modèle mental Nomaflow plus large dans lequel s'inscrivent les Paquets de modifications.
- [Liberty Next → Déployer → Paquet](../framework/build/packages.md) — l'équivalent configuration : expédier écrans / éléments de menu / tableaux de bord entre installations. Les deux canaux coexistent.
