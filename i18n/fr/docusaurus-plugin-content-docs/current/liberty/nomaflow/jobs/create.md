---
title: Créer une tâche
description: "L'éditeur de tâche de Nomaflow : la section Tâche (identifiant, planification, fuseau, étiquettes, activation), les préréglages et leurs planifications, la politique de réessai, les alertes, les paramètres partagés et la suite d'étapes — et ce qui ne se règle que dans jobs.toml."
keywords: [Nomaflow, créer une tâche, éditeur de tâche, planification, fuseau horaire, préréglages, politique de réessai, alertes, paramètres partagés, étapes, jobs.toml, Liberty Next]
---

# Créer une tâche

**Nouvelle tâche** dans la page des Tâches, ou **Modifier** sur la ligne d'une tâche, ouvre l'éditeur de tâche. **La tâche est dessinée par son flux** — **Début**, une carte par étape avec son type, son nom et ce qu'elle fait, **Fin** — et l'élément choisi se modifie à côté : la tâche elle-même au début, ou une étape. Un seul **Enregistrer**, en haut — actif dès qu'un élément change, avec *modifications non enregistrées* à côté —, écrit la tâche entière dans `jobs.toml`, recharge le planificateur et revient à la page des Tâches ; **Retour aux tâches** quitte sans enregistrer. Une tâche invalide est refusée avec un message en haut de l'éditeur.

Seules les tâches modifiées sont réécrites : les autres tâches de `jobs.toml` conservent leur texte à l'identique — commentaires, références `${…}`, `step_defaults` —, et la tâche enregistrée retrouve ses références `${…}` partout où la valeur correspond toujours.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 572" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfed-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfed-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfed-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfed-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="532" rx="14" fill="url(#nfed-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⛓</text>
  <text x="262" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tâche · sales-load</text>
  <text x="262" y="60" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Paramètres de la tâche + le pipeline d'étapes</text>
  <line x1="220" y1="74" x2="1100" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="86" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="304.0" y="100.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">← Retour aux tâches</text>
  <text x="969" y="101" fill="#64748b" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <rect x="979" y="86" width="101" height="22" rx="5" fill="url(#nfed-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1029.5" y="100.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="122" width="470" height="410" rx="10" fill="#0b1020" stroke="#1f2937" strokeWidth="1"/>
  <line x1="254" y1="140" x2="702" y2="140" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="162" x2="702" y2="162" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="184" x2="702" y2="184" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="206" x2="702" y2="206" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="228" x2="702" y2="228" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="250" x2="702" y2="250" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="272" x2="702" y2="272" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="294" x2="702" y2="294" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="316" x2="702" y2="316" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="338" x2="702" y2="338" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="360" x2="702" y2="360" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="382" x2="702" y2="382" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="404" x2="702" y2="404" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="426" x2="702" y2="426" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="448" x2="702" y2="448" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="470" x2="702" y2="470" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="492" x2="702" y2="492" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <line x1="254" y1="514" x2="702" y2="514" stroke="#263247" strokeWidth="1.6" strokeDasharray="1.6 20.4"/>
  <rect x="614" y="132" width="84" height="22" rx="6" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="626" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">−</text>
  <text x="656" y="147" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="ui-monospace, monospace">100%</text>
  <text x="684" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">+</text>
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
  <text x="372" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">? → sales.fact_sales</text>
  </g>
  <line x1="514" y1="193" x2="540" y2="193" stroke="#334155" strokeWidth="2"/>
  <path d="M538,189 L544,193 L538,197 Z" fill="#334155"/>
  <circle cx="527.0" cy="193" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="527.0" y="196.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="546" y="169" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="556" y="183" fill="#4ade80" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SQL_QUERY</text>
  <text x="556" y="197" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">refresh-totals</text>
  <text x="556" y="210" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sales.totals_refresh</text>
  </g>
  <line x1="256" y1="271" x2="282" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M280,267 L286,271 L280,275 Z" fill="#334155"/>
  <circle cx="269.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="269.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <g>
  <rect x="288" y="247" width="150" height="48" rx="9" fill="#111827" stroke="#334155" strokeWidth="1"/>
  <text x="298" y="261" fill="#4a9eff" fontSize="7.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOTIFY</text>
  <text x="298" y="275" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">send</text>
  <text x="298" y="288" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">role:management · Sal…</text>
  </g>
  <line x1="440" y1="271" x2="466" y2="271" stroke="#334155" strokeWidth="2"/>
  <path d="M464,267 L470,271 L464,275 Z" fill="#334155"/>
  <circle cx="453.0" cy="271" r="8" fill="#111827" stroke="#475569" strokeWidth="1"/>
  <text x="453.0" y="274.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+</text>
  <rect x="472" y="258" width="60" height="26" rx="13" fill="rgba(50,215,75,0.10)" stroke="#334155" strokeWidth="1"/>
  <text x="486" y="275" fill="#4ade80" fontSize="9.5" fontFamily="system-ui, sans-serif">⚑</text>
  <text x="500" y="275" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Fin</text>
  <rect x="724" y="122" width="356" height="410" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="738" y="144" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">⛓  Tâche</text>
  <text x="738" y="164" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">IDENTIFIANT</text>
  <rect x="738" y="169" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="183.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">sales-load</text>
  <text x="738" y="203" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">L'identifiant est figé une fois la tâche créée — il indexe l'historique.</text>
  <text x="738" y="223" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="738" y="228" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="242.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Fichiers de ventes mensuels vers la table de faits</text>
  <text x="738" y="266" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Planification (cron)</text>
  <rect x="738" y="273" width="49" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="762.5" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Manuelle</text>
  <rect x="791" y="273" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="813.5" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Horaire</text>
  <rect x="840" y="273" width="63" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="871.5" y="286.5" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Quotidienne</text>
  <rect x="907" y="273" width="67" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="940.5" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Hebdomadaire</text>
  <rect x="978" y="273" width="54" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1005.0" y="286.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">Mensuelle</text>
  <rect x="738" y="298" width="328" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="312.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">0 2 ∗ ∗ ∗</text>
  <rect x="738" y="326" width="328" height="40" rx="6" fill="#0a0e1a" stroke="#1f2937" strokeWidth="1"/>
  <text x="746" y="339" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">Prochaines exécutions</text>
  <text x="746" y="354" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">23/11/2026 02:00:00 · 24/11/2026 02:00:00 …</text>
  <text x="738" y="382" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">FUSEAU HORAIRE</text>
  <rect x="738" y="387" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="748" y="401.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Europe/Paris</text>
  <text x="900" y="382" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉTIQUETTES</text>
  <rect x="900" y="387" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="910" y="401.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif"></text>
  <rect x="906" y="390" width="50" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="913" y="401.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">sales ✕</text>
  <rect x="961" y="390" width="40" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="968" y="401.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="ui-monospace, monospace">etl ✕</text>
  <rect x="738" y="421" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M740.5,426.5 L742.8,428.8 L746.8,424" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="755" y="430" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Activée</text>
  <rect x="734" y="444" width="336" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="459" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Préréglages &amp; plannings</text>
  <rect x="734" y="470" width="336" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="485" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Politique de réessai</text>
  <rect x="734" y="496" width="336" height="22" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="742" y="511" fill="#cbd5e1" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Alertes</text>
  <rect x="20" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Début = la tâche</text>
  <text x="30" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses réglages s'ouvrent à côté</text>
  <line x1="200" y1="137.0" x2="260" y2="193" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">+ sur une liaison</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">insère une étape à cet endroit</text>
  <line x1="200" y1="217.0" x2="337.0" y2="199" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="290" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un long flux continue</text>
  <text x="30" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à la ligne ; zoom − / % / +</text>
  <line x1="200" y1="307.0" x2="254" y2="271" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="20" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une carte d'étape</text>
  <text x="30" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre ses champs ici</text>
  <line x1="200" y1="397.0" x2="306" y2="293" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un seul Enregistrer</text>
  <text x="1130" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit la tâche, retour à la liste</text>
  <line x1="1120" y1="93.0" x2="1080" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Plannings prêts à l'emploi</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ou un cron à cinq champs</text>
  <line x1="1120" y1="247.0" x2="1066" y2="283" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Prochaines exécutions</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les cinq suivantes, dans le fuseau</text>
  <line x1="1120" y1="317.0" x2="1066" y2="346" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
  <rect x="1120" y="430" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Préréglages, réessais, alertes</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plus bas dans le panneau</text>
  <line x1="1120" y1="447.0" x2="1066" y2="492" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfed-arrow)"/>
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

### Préréglages & plannings

Les préréglages s'enregistrent depuis **Exécuter avec des paramètres → Enregistrer comme préréglage…**. Ici, chacun peut recevoir sa propre **Planification (cron)**, son **Fuseau horaire** et une case **Planning activé** — voir [Préréglages planifiables](./schedules.md#schedulable-presets).

### Politique de réessai

**Réessayer les étapes en échec**, puis **Tentatives** (au total), **Délai** (`fixed` ou `exponential`) et **Secondes de base** entre deux tentatives. La politique s'applique à chaque étape.

### Alertes

**Envoyer des alertes** avec **En cas d'échec** prévient les **Destinataires** quand une exécution échoue, dans la cloche et par e-mail. Écrire les destinataires sous la forme `user:alice`, `role:ops` ou `email:ops@example.com` — une entrée sans préfixe est prise pour une adresse e-mail. **Avertir si une exécution dépasse (minutes)** leur envoie en outre une notification dès qu'une exécution dure au moins ce temps, quelle que soit son issue. **Doit avoir réussi avant** fixe une échéance (`07:00`, dans le fuseau horaire de la tâche) : un jour où la tâche est planifiée, si aucune exécution n'a réussi à cette heure, les destinataires reçoivent *Job &lt;id&gt; is late* — encore en cours, en échec ou jamais démarrée. Pour plusieurs tâches à la fois ou d'autres événements, passer par une règle de notification : voir [Notifications](../notifications.md#job-alerts).

### Paramètres partagés

Des paires nom / valeur fusionnées dans les arguments de chaque étape `python` (la valeur propre d'une étape l'emporte). Elles apparaissent aussi, modifiables, dans **Exécuter avec des paramètres**. La section s'intitule *Shared params* dans l'éditeur.

### Étapes

Le **+** d'un lien du flux insère une étape à cet endroit, parmi les types `sql_copy`, `sql_query`, `python`, `ldap_sync`, `http`, `call_job`, `file_load`, `file_export`, `report`, `notify`. Un clic sur la carte d'une étape l'ouvre à côté du flux : son **Nom de l'étape**, les champs de son type, et ses icônes — **Monter**, **Descendre**, **Cloner l'étape**, **Supprimer**. Une étape peut être *Désactivée pour cette installation* : elle ne s'exécute jamais, même si une exécution ou un préréglage sélectionne toutes les étapes. Un flux long continue sur la ligne suivante, et le zoom (− / % / +) est mémorisé sur le poste. Les champs de chaque type sont décrits dans [Étapes](../steps.md).

---

## Uniquement dans jobs.toml \{#toml-only\}

Quelques réglages n'ont pas de champ dans l'éditeur ; ils se définissent dans `jobs.toml` :

| Clé | Défaut | Signification |
|---|---|---|
| `log_level` (tâche) | `INFO` | Le niveau des exécutions planifiées : `WARNING`, `INFO` ou `DEBUG`. Une exécution manuelle choisit le sien dans **Exécuter avec des paramètres**. |
| `timeout_seconds` (tâche) | `14400` | L'exécution entière s'arrête après ce délai. |
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

## Conseils \{#tips\}

- Donner à chaque étape un nom court verbe-objet (`load-sales`, `refresh-totals`) : c'est ce qu'affiche le détail de l'exécution.
- Garder une tâche par flux métier ; enchaîner les tâches par une étape `call_job` plutôt que de copier des étapes.
- Enregistrer, puis lancer une fois à la main avec **Exécuter avec des paramètres** en `DEBUG` avant d'activer la planification.
