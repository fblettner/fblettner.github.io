---
title: Change packages
description: "Capture every tracked data write into a reviewable package — old → new diffs grouped by entity, exclude entries cherry-pick style, submit / approve / reject the package, export a JSON bundle and apply it on another environment with full pre-image drift detection. The canonical use case is promoting JD Edwards security from dev to prod."
keywords: [Liberty Framework, change packages, changesets, JDE security promotion, draft / submitted / approved / exported / promoted / rejected, drift detection, replay, CALL_API, CALL_PLUGIN, change_replay, change_tracked, change_entity, post-apply, AppliedBundle, Nomaflow]
---

# Change packages

The **Change packages** page captures every tracked data write into a grouped, reviewable, promotable set. The use case the feature was built around is **promoting JD Edwards security from a development environment to production** — copy a role, attach a few menus, save → the writes land in production tables on dev, AND in a *change package* the operator can review, approve and ship to prod as a JSON bundle.

The same pattern fits every other "make changes here, replay them there" workflow: a curated UDC catalogue refresh, a batch of new permissions on a custom screen, a routing-rule update on a configuration table. As soon as a screen is **`change_tracked`**, its inserts / updates / deletes land in the active draft package alongside the production write.

Behind the page, the framework keeps every tracked write in its own database — the framework's, separate from the audit mirror —, and the apply path replays them on the target with pre-image drift detection.

The **Package** page carries configuration slices (screens, menu items, dashboards…); Change packages carry **data**. The two sit side by side under *Liberty Next → Deploy*.

---

## Opening the page

**Liberty Next → Deploy → Changes**.

---

## At a glance

<svg viewBox="0 0 1320 590" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfcp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfcp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfcp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfcp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="550" rx="14" fill="url(#nfcp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">⇄</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Changes</text>
  <rect x="1011" y="32" width="69" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Refresh</text>
  <rect x="914" y="32" width="89" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="958.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ New package</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="78" width="67" height="24" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="273.5" y="93.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">≋ Changes</text>
  <rect x="313" y="78" width="57" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="341.5" y="93.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⇧ Apply</text>
  <rect x="240" y="114" width="250" height="440" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="124" width="230" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="138.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">⌕  Filter by status / date…</text>
  <rect x="250" y="156" width="230" height="58" rx="7" fill="rgba(74,158,255,0.08)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="262" y="173" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Package 4 · crm</text>
  <rect x="262" y="180" width="39" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="281.5" y="190.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DRAFT</text>
  <text x="307" y="191" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 12 change(s)</text>
  <text x="262" y="206" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">created · 11/20/2026</text>
  <rect x="250" y="222" width="230" height="58" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="239" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Package 3 · crm</text>
  <rect x="262" y="246" width="47" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="285.5" y="256.7" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">PENDING</text>
  <text x="315" y="257" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 5 change(s)</text>
  <text x="262" y="272" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">submitted · 11/18/2026</text>
  <rect x="250" y="288" width="230" height="58" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="305" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">role-cleanup</text>
  <rect x="262" y="312" width="39" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="281.5" y="322.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DRAFT</text>
  <rect x="305" y="312" width="43" height="15" rx="7.5" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="326.5" y="322.7" fill="#c084fc" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">custom</text>
  <text x="354" y="323" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 3 change(s)</text>
  <text x="262" y="338" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">created · 11/15/2026</text>
  <rect x="250" y="354" width="230" height="58" rx="7" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="262" y="371" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">Package 1 · crm</text>
  <rect x="262" y="378" width="51" height="15" rx="7.5" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="287.5" y="388.7" fill="#94a3b8" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">EXPORTED</text>
  <text x="319" y="389" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">crm · 42 change(s)</text>
  <text x="262" y="404" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">approved · 11/02/2026</text>
  <rect x="502" y="114" width="578" height="440" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="136" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">Package 4 · crm</text>
  <rect x="622" y="125" width="39" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="641.5" y="135.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">DRAFT</text>
  <rect x="1008" y="124" width="58" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1037.0" y="138.5" fill="#f87171" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Delete</text>
  <rect x="944" y="124" width="58" height="22" rx="5" fill="url(#nfcp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="973.0" y="138.5" fill="#e2e8f0" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">➤ Submit</text>
  <rect x="871" y="124" width="67" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="904.5" y="138.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Expand all</text>
  <line x1="502" y1="156" x2="1080" y2="156" stroke="#1f2937" strokeWidth="1"/>
  <text x="516" y="179" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="530" y="179" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="179" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="576.6" y="179" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· ROLE=SALES_MGR</text>
  <rect x="896" y="168" width="60" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="926.0" y="179" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3 CHANGE(S)</text>
  <rect x="964" y="167" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.0" y="179.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Move</text>
  <rect x="1014" y="167" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="179.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Delete</text>
  <rect x="536" y="192" width="530" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544" y="208" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="556" y="196" width="43" height="15" rx="7.5" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="577.5" y="206.7" fill="#4ade80" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">INSERT</text>
  <text x="607" y="207.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">6 field(s)</text>
  <text x="662.6" y="207.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">crm.roles</text>
  <text x="1058" y="207.5" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="1042" y="207.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Move</text>
  <text x="1018.08" y="207.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Exclude</text>
  <text x="564" y="230" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">ROLE</text>
  <text x="672" y="230" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">SALES_MGR</text>
  <text x="564" y="245" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">DESCRIPTION</text>
  <text x="672" y="245" fill="#4ade80" fontSize="8.5" fontFamily="ui-monospace, monospace">Sales managers</text>
  <text x="564" y="260" fill="#4a9eff" fontSize="8" fontFamily="system-ui, sans-serif">+ 4 unchanged</text>
  <rect x="536" y="272" width="530" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544" y="288" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <rect x="556" y="276" width="43" height="15" rx="7.5" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="577.5" y="286.7" fill="#4a9eff" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UPDATE</text>
  <text x="607" y="287.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2 changed</text>
  <text x="657.84" y="287.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">crm.roles</text>
  <text x="1058" y="287.5" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="1042" y="287.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Move</text>
  <text x="1018.08" y="287.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Exclude</text>
  <rect x="536" y="300" width="530" height="24" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="544" y="316" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">›</text>
  <rect x="556" y="304" width="64" height="15" rx="7.5" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="588.0" y="314.7" fill="#fb923c" fontSize="7.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">CALL PLUGIN</text>
  <text x="628" y="315.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">replays on apply</text>
  <text x="712.16" y="315.5" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">crm.remerge</text>
  <text x="1058" y="315.5" fill="#f87171" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">✕</text>
  <text x="1042" y="315.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Move</text>
  <text x="1018.08" y="315.5" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Exclude</text>
  <text x="516" y="343" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="530" y="343" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="343" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="576.6" y="343" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· USER=JDOE</text>
  <rect x="642.57" y="332" width="69" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="649.57" y="343.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="ui-monospace, monospace">import users</text>
  <rect x="896" y="332" width="60" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="926.0" y="343" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4 CHANGE(S)</text>
  <rect x="964" y="331" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.0" y="343.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Move</text>
  <rect x="1014" y="331" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="343.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Delete</text>
  <text x="516" y="371" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="530" y="371" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="371" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Users</text>
  <text x="576.6" y="371" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· USER=ASMITH</text>
  <rect x="896" y="360" width="60" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="926.0" y="371" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2 CHANGE(S)</text>
  <rect x="964" y="359" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.0" y="371.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Move</text>
  <rect x="1014" y="359" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="371.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Delete</text>
  <text x="516" y="399" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="530" y="399" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">≋</text>
  <text x="544" y="399" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Security</text>
  <text x="592.56" y="399" fill="#94a3b8" fontSize="8.5" fontFamily="ui-monospace, monospace">· ROLE=SALES_MGR · OBJECT=P4210</text>
  <rect x="896" y="388" width="60" height="16" rx="8" fill="none" stroke="#475569" strokeWidth="1"/>
  <text x="926.0" y="399" fill="#94a3b8" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3 CHANGE(S)</text>
  <rect x="964" y="387" width="50" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="989.0" y="399.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⇲ Move</text>
  <rect x="1014" y="387" width="52" height="18" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1040.0" y="399.5" fill="#f87171" fontSize="7.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Delete</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Changes · Apply</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">review here, apply a bundle there</text>
  <line x1="200" y1="87.0" x2="240" y2="90" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Packages</text>
  <text x="30" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">status, application, changes</text>
  <line x1="200" y1="187.0" x2="250" y2="185" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">A custom package</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a holding package to move into</text>
  <line x1="200" y1="347.0" x2="250" y2="310" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">New package</text>
  <text x="1130" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a custom holding package</text>
  <line x1="1120" y1="89.0" x2="991" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lifecycle buttons</text>
  <text x="1130" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">by state: Submit, Approve, Export…</text>
  <line x1="1120" y1="157.0" x2="973.0" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">One line per record</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">entity, key, number of changes</text>
  <line x1="1120" y1="227.0" x2="1066" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Each change</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Exclude, Move, Delete</text>
  <line x1="1120" y1="317.0" x2="1058" y2="205" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
  <rect x="1120" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">The diff</text>
  <text x="1130" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">old → new, the rest on request</text>
  <line x1="1120" y1="397.0" x2="922" y2="255" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfcp-arrow)"/>
</svg>

---

## How a package fills up

Three things have to be in place for a write to land in a package.

| Required | What |
|---|---|
| **Screen is `change_tracked = true`** | A flag in the screen's *General* tab (or its TOML). Without it, writes go to the underlying table only — no capture. |
| **An active draft exists for the application** | The screen's connector → its `application`. The framework keeps **at most one DRAFT per application** (enforced by a partial unique index). The first tracked write on that application creates one if none exists. |
| **The user is signed in** | The package records `captured_by` from the session. Anonymous writes are not tracked. |

Once those are in place, every tracked write produces one **change entry**:

| Operation | What's captured |
|---|---|
| `INSERT` | `new_values` — the bound write columns. |
| `UPDATE` | `old_values` (the pre-image fetched through the screen's `read_query` before the write) + `new_values`. The pre-image is what drives drift detection on apply. |
| `DELETE` | `old_values` only. |
| `CALL_API` | The resolved call parameters + the configured `change_replay` flag — re-issued verbatim on apply when `replay = true`. |
| `CALL_PLUGIN` | Same — the plugin id + resolved kwargs, gated by `change_replay`. |

Each entry also records:

- `connector` + `query` — the framework can route the replay to the matching connector on the target.
- `entity` — the optional `change_entity` from the screen (`role`, `user`, `relationship`, `security`, …). The UI groups entries by this label on the detail page; a screen with no `change_entity` still captures, just grouped by `query`.
- `entity_key` — the natural key of the row (resolved from the screen's `key_columns`). Drives **compaction** on export — `INSERT then UPDATE then UPDATE` on the same key collapses to one effective net entry; `INSERT then DELETE` cancels out entirely.
- `source_action` — the label of the action that triggered the write, threaded from the firing context. Lets the detail view group a batch as "imported by *import security*" instead of an unattributed wall of inserts.
- `read_query` — the screen's read query, used by the apply path to fetch the current target row and compare to `old_values` for drift detection.
- `seq` — monotonic per package, so replay preserves the capture order. A role has to exist before it can be referenced; the seq guarantees that.

### What `change_tracked` does NOT track

| Not tracked | Why |
|---|---|
| Writes from a screen with `change_tracked = false`. | Default. Audit-only tables (notification log, retry stats) shouldn't pollute promotion bundles. |
| Writes from a Nomaflow job, a bulk import, the CLI. | Tracking is per-screen and runs through the screen's write path. Jobs use `j_*` callables directly against the connector. |
| Reads — no SELECT is ever captured. | The package is a *change* log. |
| The framework's own metadata writes (jobs, users, the change packages themselves). | The capture loop checks `change_tracked` on the connector's screen, not on the table. |

---

## The lifecycle

A package walks through these states:

```text
    DRAFT ─── submit ───▶ PENDING ─── approve ──▶ APPROVED ─── export ──▶ EXPORTED
                              │
                              └── reject ──▶ REJECTED
```

| State | Meaning |
|---|---|
| **`DRAFT`** | The active package on its application. New tracked writes attach here. Entries can be excluded / re-included. |
| **`PENDING`** | Submitted for approval. No new writes attach (a fresh DRAFT opens for the application on the next capture). Reviewer can approve or reject. |
| **`APPROVED`** | Frozen, ready to export. Entries can no longer be excluded. |
| **`EXPORTED`** | A JSON bundle has been downloaded. The package is now the source-side record of what was shipped; the bundle is what reaches the target. |
| **`REJECTED`** | The reviewer turned it down. It stays rejected; the next tracked write on the application opens a new draft. |

The detail header shows the buttons of the package's state — **Submit** on a draft, **Approve** and **Reject** on a pending package, **Export bundle** and **Promote to…** on an approved or exported one — and they call `POST /admin/changesets/<id>/submit` (or `…/approve`, `…/reject`, `…/export`). Change packages are reserved to superusers.

### Exclude, move, delete \{#entries\}

While the package is `DRAFT`, each change has **Exclude**, **Move** and a delete icon, and each record (all the changes of one row) has **Move** and **Delete**:

| Action | Effect |
|---|---|
| **Exclude** / **Include** | The change stays in the package, dimmed, flagged `excluded`, and is left out of the compaction and the export. A second click includes it again. Useful to keep an experiment out of the bundle without losing its trace. |
| **Move** | Moves the change — or the whole record — to another draft package of the same application, or to a **New custom package…** created on the spot. |
| **Delete** | Removes the change — or the record — from the package log for good, after confirmation. The rows already written to the database are not affected; a later export can no longer include them. |

Compaction is computed at **export time**, not on capture — exclusions take effect the moment the bundle is built.

---

## The Changes tab — review and act \{#changes-tab\}

The page has two tabs: **Changes** (the packages) and **Apply** (covered below). In the page header, **New package** creates a **custom** package — a holding package for the application, where changes are moved to be promoted later —, and **Refresh** reads the list again.

### Left column — the package list

| Element | What |
|---|---|
| **Filter by status / date…** | Narrows the list by status or date. |
| Package row | The name, the status badge — `DRAFT` blue, `PENDING` orange, `APPROVED` green, `EXPORTED` grey, `REJECTED` red —, a **custom** badge for a holding package, the application and the number of changes, then when it was created, submitted or approved. |
| Selected package | Highlighted; its detail is on the right. |

### Right column — package detail

| Element | What |
|---|---|
| Header | The package's name and status; **Expand all** / **Collapse all**; the buttons of its state (**Submit**, **Approve** / **Reject**, **Export bundle** / **Promote to…**); **Delete**, which removes the package log — the rows already written stay — after confirmation. On an approved package, *+ N post-apply* tells how many post-apply steps the bundle will carry. |
| One line per record | The entity (`change_entity`, or the query), the record's key (`ROLE=SALES_MGR`), the action that produced the changes when there is one (*import users*, *AI assistant*), the number of changes, and on a draft **Move** / **Delete**. A click unfolds its changes. |
| A change | The operation badge (`INSERT`, `UPDATE`, `DELETE`, `CALL API`, `CALL PLUGIN`), what it does — *N field(s)*, *N changed*, *row removed*, *replays on apply* or *captured · won't replay* —, the connector and query, and on a draft **Exclude** / **Move** / delete. A click unfolds the diff. |
| The diff | `field` / value: the old value struck in red, the new one in green; **+ N unchanged** shows the other columns (**hide N unchanged** folds them). A call shows its arguments, and whether it is re-run on apply. |

### Post-apply steps on the header

A screen can name **post-apply steps** (`Screen.post_apply`): actions to run once on the target after the package's rows have landed — re-merge a security model, refresh a materialised view. They come from a library of post-apply steps shared by the application, each step being a plugin call (`call_plugin`), an API endpoint (`call_api`) or a query (`run_query`). Their ids accumulate on the package header, and on export they are appended to the bundle as final operations.

---

## The Apply tab — bring a bundle in

Run this on the **target** install (typically prod) to bring a bundle exported from the source (typically dev).

The apply flow is two-pass: **dry-run first** to see the per-op drift report, then real apply, optionally with *force* ticked on rows you want to override.

| Step | What |
|---|---|
| 1. **Pick the JSON** | The exported bundle. The header shows its name, application and op count once parsed. |
| 2. **Dry-run** | `POST /admin/changesets/apply { bundle, dry_run: true }`. The server walks every op, fetches the current target row via the captured `read_query`, compares to the captured `old_values`, and tags the op with a status. **No write happens.** |
| 3. **Read the report** | Each op shows its status badge: `would_apply` (clean), `conflict` (the target differs from the captured state — see below), `would_force` (a conflict the operator chose to apply), `unverified` (no drift check possible), `skipped` (an action captured for review only), `error`. The summary line totals each status. |
| 4. **Tick what to apply anyway** | Each `conflict` op — and each `unverified` op, whose drift cannot be checked because the screen has no read query — has a **force** checkbox. Ticking it **applies** the op anyway (it then reads `would_force`); an unticked one is not applied. |
| 5. **Apply** | `POST /admin/changesets/apply { bundle, dry_run: false, force: [<indexes>] }`. Each op runs in its own transaction; per-op rowcounts + status come back in the report. |
| 6. **Confirmation** | A row lands in the target's import log (top of the *Apply* tab), with the bundle's checksum. The source package stays `EXPORTED`. |

### Promote to another instance \{#promote\}

An approved — or already exported — package can go straight to another instance, without handling the JSON: **Promote to…** in the package's header opens the promotion window. Pick the **Target** and an optional **Comment**: the target runs the dry-run at once and returns its drift report, with the same **force** checkboxes; **Apply on &lt;target&gt;** applies it there and marks the package exported. The targets are declared under *Package → Promotion* — see [Packages → Promotion](../framework/build/packages.md#promotion); the promotions applied are listed in its history.

### Drift detection — what it compares

For every row op, the apply path reads the target's current row with the captured `read_query` and key, then:

| Op | Target row | Status |
|---|---|---|
| INSERT | absent | `would_apply` |
| INSERT | already exists | `conflict` |
| UPDATE / DELETE | equal to the captured pre-image | `would_apply` |
| UPDATE / DELETE | different, or missing | `conflict` |
| any | no read query or key captured, or unreadable | `unverified` — applied without check |
| `CALL_API` / `CALL_PLUGIN` | — | `unverified` — re-run on apply; `skipped` when the action was captured without `change_replay` |
| post-apply step | — | `unverified` — always runs, after the change ops |

A conflict is applied only when its checkbox is ticked. An op whose write raises is reported `error` with the database message.

### Re-applying the same bundle

The import log uses the bundle's **checksum** (a SHA-256 of its ops) as the identity. Re-applying the same file is detected before any write runs — the dry-run report carries an `already_applied` block with the previous `applied_at` / `applied_by`. The operator can either confirm and re-apply (rows land again where the target matches the pre-image; the others come back as conflicts) or close the file.

### Action replay (`CALL_API` / `CALL_PLUGIN`)

A change-tracked screen captures **every** API / plugin call it fires (so the package shows it for review). Whether the call is **replayed** on the target is gated by the action's `change_replay` flag:

| `change_replay` | What gets replayed on the target |
|---|---|
| `true` *(opt-in)* | The action is re-issued verbatim with the captured resolved params. Used for server-side merge plugins like `nomajde.security:j_remerge_security` — re-merging the security on the target is correct after the row writes land. |
| `false` *(default)* | The capture is shown in the package for review but **not** re-fired. Used for one-off side effects that shouldn't run twice (email sends, external webhook). |

A replayed action runs in the same transaction as the surrounding row writes when the dialect allows it; in practice this means a successful security-merge plugin run lands atomically with the role / assignment writes that triggered it.

---

## Promoting JD Edwards security — the canonical use case

The motivating workflow for this feature. On the **dev** instance:

1. Operator creates a role `PRJM_NEW`, attaches three menus, edits two existing roles' permissions. Every write lands in the **`JDE-PROD`** application's draft package as it happens.
2. Operator opens *Liberty Next → Deploy → Changes*, reviews the draft. The detail view shows the three roles grouped as `ROLES`, the menu attachments as `MENUS`, the touched security as `SECURITY`. A `CALL_PLUGIN` entry to `nomajde.security:j_remerge_security` is also captured.
3. Operator excludes one entry — a typo correction they want to roll back manually instead. Submits, then *Approves*, then *Exports*.
4. The browser downloads `jde-prod-security-2026-06-09.changeset.json`.

On the **prod** instance:

5. Operator opens *Liberty Next → Deploy → Changes → Apply*, drops the JSON in.
6. Dry-run runs. The report shows 11 `would_apply` and 1 `conflict` on the role `BUYER_R2` (someone touched it on prod since the package was captured). Operator ticks that row to apply it anyway.
7. Operator clicks *Apply*. Every row lands; the post-apply step fires last, re-merging the security for the affected parent roles on prod.
8. The prod-side import log records the bundle with its checksum.

For the deep reference of the merge SQL the post-apply step runs, see [Nomaflow → Bundled jobs → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all).

---

## Configuring a screen for change tracking

The screen's *General* tab carries three toggles:

| Field | What |
|---|---|
| **`change_tracked`** | Master toggle. When on, the screen's writes attach to the active package on its application. |
| **`change_entity`** | Optional label that groups entries on the detail page. Free text — `role`, `user`, `relationship`, `security` are conventions. Empty falls back to the query name. |
| **`Screen.post_apply`** | Ids of post-apply steps (from the post-apply library) to run **once on the target** after the package's rows have landed. Use sparingly — these are the cross-cutting "now re-merge security" / "now refresh materialised views" steps. |

For an action embedded in the screen, an additional toggle on the action's *General* tab:

| Field | What |
|---|---|
| **`change_replay`** | When on, a `CALL_API` / `CALL_PLUGIN` invocation of this action is replayed on the target. Default off — capture-only. |

---

## API contract

| Endpoint | Method | What |
|---|---|---|
| `/admin/changesets` | `GET` | List packages. Filters: `application=<id>`, `status=<one-of>`. Superuser-only. |
| `/admin/changesets/<id>` | `GET` | Package detail — header + every entry with old / new values. |
| `/admin/changesets/<id>` | `DELETE` | Delete the package log only (not the underlying writes). |
| `/admin/changesets/<id>/submit` | `POST` | Move `DRAFT` → `PENDING`. |
| `/admin/changesets/<id>/approve` | `POST` | Move `PENDING` → `APPROVED`. |
| `/admin/changesets/<id>/reject` | `POST` | Move `PENDING` → `REJECTED`. |
| `/admin/changesets/<id>/entries/<entry_id>/exclude` | `POST` | Flip an entry's status to `EXCLUDED`. |
| `/admin/changesets/<id>/entries/<entry_id>/include` | `POST` | Flip an entry's status to `CAPTURED`. |
| `/admin/changesets/<id>/export` | `GET` | Returns the compacted JSON bundle; flips the package to `EXPORTED`. |
| `/admin/changesets/apply` | `POST` | Body: `{ bundle, dry_run, force: [<indexes>] }`. Returns the per-op report. |
| `/admin/changesets/applied` | `GET` | The target's import log (every applied bundle). |

The bundle shape:

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

The format is stable across framework upgrades — a bundle built on `2026.06` applies cleanly on `2026.07`. The `format` field names the bundle version (`liberty-changeset/1`); post-apply steps travel as the last entries of `ops`.

---

## What's NOT in this page

The framework does ship the engine for these but the UI today is intentionally bare:

| Surface | Status |
|---|---|
| **Schedule an automatic submit / approve** | No. Manual lifecycle by design (an approved package goes to prod — a sign-off is the point). |
| **Diff between two packages** | No. Compare on the target via the Applied bundles log + the source's detail view. |
| **Roll back a promoted package** | No. The framework records the apply but doesn't synthesise a reverse bundle. To undo, capture a new package on the source that reverts the rows + promote it. |
| **Live multi-tab updates** | No. A capture on another tab doesn't refresh this page; click *Refresh* (top-right) to reload. |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Screen wasn't marked `change_tracked`. | Writes go through; no entries appear in the package. | Open the screen's *General* tab, toggle on, save. The change applies to subsequent writes only — earlier writes don't backfill. |
| Two operators have a DRAFT package open on the same application. | At most one DRAFT exists at a time; the second operator's writes attach to the same package. | Coordinate. The package's `created_by` records the original author; subsequent captures stamp `captured_by` on each entry, so attribution survives. |
| Bundle applied on the wrong target (staging instead of prod). | Apply lands; rows exist on staging. | Capture a reverse package on staging, promote to prod — the framework doesn't synthesise this automatically. Workflow discipline matters more than tooling here. |
| `conflict` on every UPDATE in the dry-run. | The target's pre-image diverged broadly — typically because the source and target weren't in sync to begin with. | Audit the divergence first. Forcing everything propagates the source's state wholesale; sometimes that's right, sometimes the source is the one that's stale. |
| `CALL_PLUGIN` captured but didn't fire on apply. | `change_replay` is off on the action. | Open the action's *General* tab, toggle `change_replay` on, save. Future captures will replay; past ones in already-exported packages stay as-is. |
| Post-apply step never ran. | The contributing screen's `Screen.post_apply` field is empty. | Add the step's id to the screen's `post_apply`. New captures accumulate it on the package header; existing packages are not back-filled. |
| Bundle re-applied accidentally. | Dry-run shows `already_applied` with the previous timestamp. | Read the existing apply's report. Re-applying is allowed and idempotent on clean rows; only do it intentionally. |

---

## What's next

- [Nomaflow → Bundled jobs → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all) — the security re-merge plugin most often wired as a post-apply step on JDE promotions.
- [Nomaflow → Concepts](./concepts.md) — the broader Nomaflow mental model that Change packages sits inside.
- [Liberty Next → Deploy → Package](../framework/build/packages.md) — the config equivalent: ship screens / menu items / dashboards between installs. The two channels coexist.
