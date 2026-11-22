---
title: Créer une tâche
description: "L'éditeur de tâche de Nomaflow, un onglet par tâche : la section Tâche (identifiant, planification, fuseau, étiquettes, activation, délai maximal, position dans l'installation, conservation à la mise à jour), les préréglages et leurs planifications, la politique de réessai, les alertes, les paramètres partagés, ce que l'utilisateur peut régler au lancement, la suite d'étapes — et la conservation des modifications non enregistrées."
keywords: [Nomaflow, créer une tâche, éditeur de tâche, planification, fuseau horaire, délai maximal, install_step, override, préréglages, politique de réessai, alertes, paramètres partagés, paramètres utilisateur, user_params, for_each, modifications non enregistrées, étapes, jobs.toml, Liberty Next]
---

# Créer une tâche

**Nouvelle tâche** dans la page des Tâches, ou **Modifier** sur la ligne d'une tâche, ouvre l'éditeur de tâche dans un onglet dédié — *Tâche · &lt;id&gt;*, un par tâche en cours de modification. **La tâche est dessinée par son flux** — **Début**, une carte par étape avec son type, son nom et ce qu'elle fait, **Fin** — et l'élément choisi se modifie à côté : la tâche elle-même au début, ou une étape. Un seul **Enregistrer**, en haut — actif dès qu'un élément change, avec *modifications non enregistrées* à côté —, écrit la tâche entière dans `jobs.toml`, recharge le planificateur et revient à la page des Tâches. Une tâche invalide est refusée avec un message en haut de l'éditeur.

Les modifications restent dans l'onglet quand l'utilisateur passe sur une autre page puis revient : l'onglet porte alors un point orange. **Retour aux tâches**, la fermeture de l'onglet ou de tous les onglets, le changement de langue et le rechargement du navigateur demandent d'abord confirmation — *Modifications non enregistrées*, avec **Perdre les modifications** ou **Rester**. Voir [Modifications non enregistrées](#unsaved).

Seules les tâches modifiées sont réécrites : les autres tâches de `jobs.toml` conservent leur texte à l'identique — commentaires, références `${…}`, `step_defaults` —, et la tâche enregistrée retrouve ses références `${…}` partout où la valeur correspond toujours.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 728" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfed-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfed-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfed-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="688" rx="14" fill="url(#nfed-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Paramètres de la tâche + le pipeline d'étapes</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="304.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour aux tâches</text>
  <text x="969" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <rect x="979" y="86" width="101" height="22" rx="5" fill="url(#nfed-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1029.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="122" width="400" height="566" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="632" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="632" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="632" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="632" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="632" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="632" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="632" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="632" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="632" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="632" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="632" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="632" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="632" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="632" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="632" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="632" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="632" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="632" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="536" x2="632" y2="536" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="558" x2="632" y2="558" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="580" x2="632" y2="580" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="602" x2="632" y2="602" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="624" x2="632" y2="624" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="646" x2="632" y2="646" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="668" x2="632" y2="668" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="544" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="586" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="614" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
  <rect x="256" y="180" width="72" height="26" rx="13" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="270" y="197" fill="#4a9eff" fontSize="9.5" fontFamily="system-ui, sans-serif">▶</text>
  <text x="284" y="197" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début</text>
  <line x1="330" y1="193" x2="356" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M354,189 L360,193 L354,197 Z" fill="#334155"/>
  <circle cx="343.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="343.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="362" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="372" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FILE_LOAD</text>
  <text x="372" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">load-sales</text>
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">→ sales.fact_sales</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="349" x2="282" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M280,345 L286,349 L280,353 Z" fill="#334155"/>
  <circle cx="269.0" cy="349" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="325" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="339" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="298" y="353" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="366" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="440" y1="349" x2="466" y2="349" stroke="#334155" strokeWidth="2"/>
  <path d="M464,345 L470,349 L464,353 Z" fill="#334155"/>
  <circle cx="453.0" cy="349" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="453.0" y="352.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="472" y="336" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="353" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="500" y="353" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="654" y="122" width="426" height="566" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="668" y="144" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">⛓  Tâche</text>
  <text x="668" y="164" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="668" y="169" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="183.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales-load</text>
  <text x="873" y="175" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">L'identifiant est figé une fois la tâche</text>
  <text x="873" y="185.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">créée — il indexe l'historique des</text>
  <text x="873" y="196.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">exécutions.</text>
  <text x="668" y="211" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="668" y="216" width="398" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="230.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Fichiers de ventes mensuels vers la table de faits</text>
  <text x="668" y="254" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Planification (cron)</text>
  <rect x="668" y="261" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="692.5" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="721" y="261" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="743.5" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Horaire</text>
  <rect x="770" y="261" width="63" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="801.5" y="274.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Quotidienne</text>
  <rect x="837" y="261" width="67" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.5" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Hebdomadaire</text>
  <rect x="908" y="261" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="935.0" y="274.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Mensuelle</text>
  <rect x="668" y="286" width="398" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="300.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <text x="668" y="322" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">Prochaines exécutions · 23/11/2026 02:00:00 · 24/11/2026 02:00:00 …</text>
  <text x="668" y="340" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FUSEAU HORAIRE</text>
  <rect x="668" y="345" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="359.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Europe/Paris</text>
  <text x="873" y="340" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉTIQUETTES</text>
  <rect x="873" y="345" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="883" y="359.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="879" y="348" width="50" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="886" y="359.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales ✕</text>
  <rect x="934" y="348" width="40" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="941" y="359.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">etl ✕</text>
  <text x="668" y="382" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DÉLAI MAXIMAL (SECONDES)</text>
  <rect x="668" y="387" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="401.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">14400</text>
  <rect x="873" y="393" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M875.5,398.5 L877.8,400.8 L881.8,396" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="890" y="402" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Activée</text>
  <text x="668" y="422" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Une exécution encore en cours après ce</text>
  <text x="668" y="432.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">délai est arrêtée. Vide : 4 heures.</text>
  <text x="668" y="454" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">EXÉCUTER À L'INSTALLATION, EN POSITION</text>
  <rect x="668" y="459" width="193" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="678" y="473.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="873" y="459" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="890" y="468" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Garder cette tâche telle quelle</text>
  <text x="890" y="480" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">à la mise à jour</text>
  <text x="668" y="494" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Vide : ne fait pas partie de</text>
  <text x="668" y="504.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">l'installation. Avec un nombre,</text>
  <text x="668" y="515.0" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">l'installation exécute cette tâche une</text>
  <text x="668" y="525.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">fois, le plus petit nombre d'abord.</text>
  <text x="873" y="494" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Une mise à jour laisse alors toute la tâche</text>
  <text x="873" y="504.5" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">telle qu'enregistrée ici.</text>
  <rect x="664" y="538" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="552" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Préréglages &amp; plannings</text>
  <rect x="664" y="562" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="576" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Politique de réessai</text>
  <rect x="664" y="586" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="600" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Alertes</text>
  <rect x="664" y="610" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="624" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres partagés</text>
  <rect x="664" y="634" width="406" height="20" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="672" y="648" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que l'utilisateur peut régler au lancement</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début = la tâche</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses réglages s'ouvrent à côté</text>
  <line x1="200" y1="137.0" x2="260" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ sur une liaison</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insère une étape à cet endroit</text>
  <line x1="200" y1="227.0" x2="337.0" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un long flux continue</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à la ligne ; zoom − / % / +</text>
  <line x1="200" y1="317.0" x2="254" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="400" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="415" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte d'étape</text>
  <text x="30" y="428" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre ses champs ici</text>
  <line x1="200" y1="417.0" x2="306" y2="371" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul Enregistrer</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit la tâche, retour à la liste</text>
  <line x1="1120" y1="93.0" x2="979" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plannings prêts à l'emploi</text>
  <text x="1130" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou un cron à cinq champs</text>
  <line x1="1120" y1="217.0" x2="1066" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Délai maximal</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'exécution s'arrête au-delà</text>
  <line x1="1120" y1="317.0" x2="861" y2="398" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Installation et mise à jour</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">position · garder telle quelle</text>
  <line x1="1120" y1="397.0" x2="1066" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="520" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="535" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Politiques, paramètres</text>
  <text x="1130" y="548" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plus bas dans le panneau</text>
  <line x1="1120" y1="537.0" x2="1070" y2="628" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
</svg>

---

## Les sections \{#sections\}

### Tâche

| Champ | Remarques |
|---|---|
| **Identifiant** | Lettres, chiffres, `-` et `_`. Figé une fois la tâche créée — il indexe l'historique des exécutions. Pour renommer : **Cloner** sous le nouvel identifiant, puis supprimer l'ancienne tâche. |
| **Description** | Affichée sur la ligne de la tâche et sur sa page. |
| **Planification (cron)** | Des choix tout faits (Manuelle, Horaire, Quotidienne, Hebdomadaire, Mensuelle) ou un cron à cinq zones ; **Prochaines exécutions** en affiche les cinq suivantes. Vide : tâche manuelle. Voir [Planifications](./schedules.md). |
| **Fuseau horaire** | Le nom IANA dans lequel la planification est évaluée. |
| **Étiquettes** | Libellés libres, utilisés par le filtre de la page des Tâches. |
| **Activée** | Active ou suspend la planification propre de la tâche. |
| **Délai maximal (secondes)** | Une exécution encore en cours après ce délai est arrêtée. Vide : 4 heures. |
| **Exécuter à l'installation, en position** | Vide : la tâche ne fait pas partie de l'installation. Avec un nombre, l'installation de l'application exécute cette tâche une fois, le plus petit nombre d'abord — les bases, puis le schéma, puis les données de référence. |
| **Garder cette tâche telle quelle à la mise à jour** | Une mise à jour de l'application laisse toute la tâche telle qu'enregistrée ici. Case décochée, ses étapes sont rafraîchies depuis le produit et seuls les réglages propres à l'installation sont conservés (activation, planification, préréglages…). |

### Préréglages & plannings

Les préréglages s'enregistrent depuis **Exécuter avec des paramètres → Enregistrer comme préréglage…**. Ici, chacun peut recevoir sa propre **Planification (cron)**, son **Fuseau horaire** et une case **Planning activé** — voir [Préréglages planifiables](./schedules.md#schedulable-presets).

### Politique de réessai

**Réessayer les étapes en échec**, puis **Tentatives** (au total), **Délai** (`fixed` ou `exponential`) et **Secondes de base** entre deux tentatives. La politique s'applique à chaque étape.

### Alertes

**Envoyer des alertes** avec **En cas d'échec** prévient les **Destinataires** quand une exécution échoue, dans la cloche et par e-mail. Écrire les destinataires sous la forme `user:alice`, `role:ops` ou `email:ops@example.com` — une entrée sans préfixe est prise pour une adresse e-mail. **Avertir si une exécution dépasse (minutes)** leur envoie en outre une notification dès qu'une exécution dure au moins ce temps, quelle que soit son issue. **Doit avoir réussi avant** fixe une échéance (`07:00`, dans le fuseau horaire de la tâche) : un jour où la tâche est planifiée, si aucune exécution n'a réussi à cette heure, les destinataires reçoivent *Job &lt;id&gt; is late* — encore en cours, en échec ou jamais démarrée. Pour plusieurs tâches à la fois ou d'autres événements, passer par une règle de notification : voir [Notifications](../notifications.md#job-alerts).

### Paramètres partagés

Des paires nom / valeur fusionnées dans les arguments de chaque étape `python` (la valeur propre d'une étape l'emporte). Elles apparaissent aussi, modifiables, dans **Exécuter avec des paramètres**.

### Ce que l'utilisateur peut régler au lancement \{#user-params\}

Les paramètres que la page de la tâche demande quand un utilisateur la lance [depuis le menu d'une application](./run-from-menu.md) — et les choix proposés pour eux dans **Exécuter avec des paramètres**. Un utilisateur ne peut rien régler d'autre. **Ajouter un paramètre** ajoute une carte :

<svg viewBox="0 0 1320 626" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfup-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfup-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfup-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfup-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="60" width="880" height="538" rx="14" fill="url(#nfup-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="220" y="20" width="104" height="34" rx="8" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="234" y="34" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Nomaflow</text>
  <text x="234" y="46" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tâches</text>
  <text x="312" y="42" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="332" y="20" width="174" height="34" rx="8" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="346" y="41" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">▤</text>
  <text x="362" y="41" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Tâche · sales-report</text>
  <circle cx="482.0" cy="37" r="3.5" fill="#fb923c"/>
  <text x="496.0" y="41" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <text x="240" y="92" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">Ce que l'utilisateur peut régler au lancement</text>
  <text x="240" y="110" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Les paramètres que la page de la tâche demande quand un utilisateur la lance depuis le menu — et les choix proposés pour eux dans Exécuter avec paramètres. Un utilisateur ne</text>
  <text x="240" y="120.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">peut rien régler d'autre.</text>
  <rect x="240" y="138" width="840" height="268" rx="8" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="158" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">company</text>
  <rect x="1046" y="146" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="160" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="254" y="180" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">NOM</text>
  <rect x="254" y="185" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="199.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">company</text>
  <text x="528" y="180" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="528" y="185" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="199.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Company</text>
  <text x="802" y="180" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESTINATAIRE</text>
  <rect x="802" y="185" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="199.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Toutes les étapes</text>
  <text x="1052" y="199.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="254" y="220" width="812" height="52" rx="6" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="264" y="235" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DANS LES AUTRES LANGUES</text>
  <text x="398.75" y="235" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Laissé vide, le texte ci-dessus est affiché.</text>
  <text x="264" y="258" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Français</text>
  <text x="364" y="244" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Libellé</text>
  <rect x="364" y="246" width="688" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="374" y="259.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Société</text>
  <text x="254" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHOIX</text>
  <rect x="254" y="291" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Les lignes d'une requête</text>
  <text x="504" y="305.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="528" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="528" y="291" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">sales</text>
  <text x="778" y="305.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="802" y="286" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">REQUÊTE</text>
  <rect x="802" y="291" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="812" y="305.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">companies_get</text>
  <text x="1052" y="305.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="254" y="326" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLONNE DE LA VALEUR</text>
  <rect x="254" y="331" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="345.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">COMPANY_CODE</text>
  <text x="528" y="326" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COLONNE DU LIBELLÉ</text>
  <rect x="528" y="331" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="345.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">COMPANY_NAME</text>
  <text x="254" y="366" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALEUR PAR DÉFAUT</text>
  <rect x="254" y="371" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="385.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="528" y="377" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="545" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Obligatoire</text>
  <rect x="802" y="377" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M804.5,382.5 L806.8,384.8 L810.8,380" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="819" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Plusieurs valeurs</text>
  <text x="802" y="400" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">Présentées en cases à cocher, avec Tout.</text>
  <rect x="240" y="416" width="840" height="78" rx="8" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="436" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">lang</text>
  <text x="294" y="436" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">· Language — Langue</text>
  <rect x="1046" y="424" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1056.0" y="438" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">🗑</text>
  <text x="254" y="458" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CHOIX</text>
  <rect x="254" y="463" width="262" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="264" y="477.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Une liste fixe</text>
  <text x="504" y="477.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="528" y="458" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VALEURS</text>
  <rect x="528" y="463" width="70" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="538" y="477.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">fr</text>
  <rect x="602" y="464" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="612.0" y="478" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="632" y="463" width="70" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="642" y="477.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">en</text>
  <rect x="706" y="464" width="20" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="716.0" y="478" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="736" y="465" width="64" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="768.0" y="477.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ ajouter</text>
  <rect x="240" y="506" width="132" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="306.0" y="520.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un paramètre</text>
  <text x="240" y="546" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">UNE EXÉCUTION PAR VALEUR DE</text>
  <rect x="240" y="551" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="565.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">company</text>
  <text x="448" y="565.5" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="476" y="558" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Quand ce paramètre porte plusieurs valeurs (ou « all »), la tâche s'exécute une fois par valeur, l'une après l'autre.</text>
  <rect x="20" y="66" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="81" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un onglet par tâche</text>
  <text x="30" y="94" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">point orange : non enregistré</text>
  <line x1="200" y1="83.0" x2="482.0" y2="41" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nom, libellé, étape</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'argument et son destinataire</text>
  <line x1="200" y1="177.0" x2="254" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellé par langue</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">vide : le libellé ci-dessus</text>
  <line x1="200" y1="267.0" x2="254" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une liste fixe</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la page refuse toute autre valeur</text>
  <line x1="200" y1="487.0" x2="254" y2="474" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une exécution par valeur</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'une après l'autre</text>
  <line x1="200" y1="577.0" x2="240" y2="562" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="1120" y="260" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">D'où viennent les choix</text>
  <text x="1130" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">saisie · liste · requête · modèles · suites</text>
  <line x1="1120" y1="277.0" x2="1074" y2="302" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plusieurs valeurs</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">cochées sur la page, avec Tout</text>
  <line x1="1120" y1="397.0" x2="960" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfup-arrow)"/>
</svg>

| Champ | Remarques |
|---|---|
| **Nom** | L'argument qui reçoit la valeur (`company`, `apps_id`). |
| **Libellé**, puis **Dans les autres langues** | Le libellé affiché par la page, puis ce même libellé dans chaque langue — laissé vide, c'est le libellé du dessus qui s'affiche. Par défaut : le nom. |
| **Destinataire** | L'étape qui reçoit la valeur ; **Toutes les étapes** par défaut. |
| **Choix** | *Une valeur saisie librement* ; *Une liste fixe* (**Valeurs**, une par ligne : la page refuse toute autre valeur) ; *Les lignes d'une requête* (**Connecteur**, **Requête**, **Colonne de la valeur**, **Colonne du libellé**) ; *Les modèles Explorer d'une application* (**Application**) ; *Les suites de tests* (**Du connecteur**, ou **Toutes les suites**). |
| **Valeur par défaut** | La valeur proposée d'emblée. |
| **Obligatoire** | La tâche ne démarre pas sans valeur. |
| **Plusieurs valeurs** | Présentées en cases à cocher, avec **Tout**. |
| **Une exécution par valeur de** | Sous les cartes : quand ce paramètre porte plusieurs valeurs (ou `all`), la tâche s'exécute une fois par valeur, l'une après l'autre. *Aucun : une seule exécution* par défaut. |

La corbeille de la carte retire le paramètre. L'enregistrement écrit exactement ce qui a été chargé, plus la modification : une source de choix que l'éditeur ne connaît pas est conservée telle quelle, et ce qui est vide ou décoché n'est pas écrit dans `jobs.toml`.

### Étapes

Le **+** d'un lien du flux insère une étape à cet endroit, parmi les types `sql_copy`, `sql_query`, `python`, `ldap_sync`, `http`, `call_job`, `file_load`, `file_export`, `report`, `notify`. Un clic sur la carte d'une étape l'ouvre à côté du flux : son **Nom de l'étape**, les champs de son type, et ses icônes — **Monter**, **Descendre**, **Cloner l'étape**, **Supprimer**. Une étape peut être *Désactivée pour cette installation* : elle ne s'exécute jamais, même si une exécution ou un préréglage sélectionne toutes les étapes. Un flux long continue sur la ligne suivante, et le zoom (− / % / +) est mémorisé sur le poste. Les champs de chaque type sont décrits dans [Étapes](../steps.md).

---

## Uniquement dans jobs.toml \{#toml-only\}

Quelques réglages n'ont pas de champ dans l'éditeur ; ils se définissent dans `jobs.toml` :

| Clé | Défaut | Signification |
|---|---|---|
| `log_level` (tâche) | `INFO` | Le niveau des exécutions planifiées : `WARNING`, `INFO` ou `DEBUG`. Une exécution manuelle choisit le sien dans **Exécuter avec des paramètres**. |
| `enabled` (étape) | `true` | `false` saute toujours l'étape. |
| `timeout_seconds` (étape) | `3600` | L'étape s'arrête après ce délai. |
| `pool` (`sql_query`, blocs de `sql_copy`) | — | Un autre pool du connecteur — voir [Étapes](../steps.md#sql-query). |

```toml title="jobs.toml"
[[jobs]]
id = "sales-load"
description = "Fichiers de ventes mensuels vers la table de faits"
schedule = "0 2 * * *"
timezone = "Europe/Paris"
tags = ["etl"]
log_level = "INFO"

[jobs.params]
period = "2026-10"

[jobs.retry]
attempts = 3
backoff = "exponential"
base_seconds = 60

[[jobs.steps]]
type = "file_load"
name = "load-sales"
# … voir Étapes → Chargement de fichier
```

---

## Modifications non enregistrées \{#unsaved\}

L'éditeur de tâche suit la règle de tous les éditeurs de Liberty Next — les constructeurs des Paramètres et leurs fenêtres, une grille en modification groupée, une fiche ouverte :

- **Passer sur une autre page ne fait rien perdre** : la page garde son onglet, modifications comprises — y compris en mode onglet unique et quand le nombre maximal d'onglets est atteint, où c'est alors le plus ancien onglet sans modification en attente qui se ferme, et quand le changement d'application ferme les onglets (voir [Affichage](../../framework/build/settings-app.md#display)).
- **Un onglet qui contient des modifications non enregistrées porte un point orange** — *Modifications non enregistrées — conservées tant que cet onglet reste ouvert*.
- **Ce qui les ferait perdre demande confirmation** : la fermeture de cet onglet, **Fermer tous les onglets** (*N pages ouvertes contiennent des modifications non enregistrées*), le changement de langue (toutes les pages ouvertes sont redessinées) ; le navigateur lui-même demande confirmation avant un rechargement ou la fermeture de la fenêtre.
- Rien n'est demandé quand rien n'est en attente.

---

## Conseils \{#tips\}

- Donner à chaque étape un nom court verbe-objet (`load-sales`, `refresh-totals`) : c'est ce qu'affiche le détail de l'exécution.
- Garder une tâche par flux métier ; enchaîner les tâches par une étape `call_job` plutôt que de copier des étapes.
- Enregistrer, puis lancer une fois à la main avec **Exécuter avec des paramètres** en `DEBUG` avant d'activer la planification.
