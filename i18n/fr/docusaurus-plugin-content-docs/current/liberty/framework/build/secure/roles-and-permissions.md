---
title: Rôles et permissions
description: "Les rôles de Liberty Next : ce qu'un rôle accorde, modifié directement sur l'arborescence des menus de l'application (hériter / autoriser / refuser par dossier ou entrée, aperçu du menu latéral), les droits hors menus, et le périmètre de données qui limite les lignes visibles par un rôle — par société, par tout élément du dictionnaire, à partir d'un attribut de l'utilisateur."
keywords: [Liberty Next, rôles, permissions, Paramètres Access, arborescence des menus, autoriser, refuser, périmètre de données, sécurité par ligne, dd_prefix, attributs utilisateur, "#USER", auth.toml]
---

# Rôles et permissions

Un rôle répond à deux questions : **ce que** ses titulaires peuvent ouvrir (menus, requêtes, tableaux de bord, assistant) et **quelles lignes** ils voient. Les utilisateurs reçoivent des rôles ; un utilisateur qui a plusieurs rôles en cumule les droits.

Les rôles se modifient dans **Paramètres → Access → Roles**. La liste des rôles est à gauche ; le rôle sélectionné s'ouvre dans un panneau à deux onglets : **Access** et **Data scope**.

:::info[Rôles JD Edwards]
Cette page traite des rôles de Liberty Next lui-même. Les rôles de JD Edwards EnterpriseOne et leur sécurité se gèrent dans Nomajde.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1200 510" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="rol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="rol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="rol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="rol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="790" height="490" rx="14" fill="url(#rol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="230" y="20" width="230" height="470" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <rect x="242" y="32" width="78" height="22" rx="5" fill="url(#rol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="281.0" y="46.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Add role</text>
  <rect x="240" y="70" width="210" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="88" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">admin</text>
  <text x="250" y="103" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Administrators</text>
  <text x="250" y="118" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">3 rule(s)</text>
  <rect x="370" y="78" width="73" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="406.5" y="90.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <rect x="240" y="136" width="210" height="56" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="250" y="154" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">subsidiary</text>
  <text x="250" y="169" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">One company only</text>
  <text x="250" y="184" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">12 rule(s)</text>
  <rect x="240" y="202" width="210" height="56" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="220" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">reader</text>
  <text x="250" y="235" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Read-only users</text>
  <text x="250" y="250" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">5 rule(s)</text>
  <rect x="470" y="20" width="520" height="470" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="484" y="42" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">🛡 [roles.subsidiary]</text>
  <text x="976" y="42" fill="#fb923c" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">unsaved changes</text>
  <rect x="484" y="54" width="181" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="485" y="55" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="518.0" y="69.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🔑 Access</text>
  <line x1="552" y1="59" x2="552" y2="73" stroke="#334155" strokeWidth="1"/>
  <text x="608.5" y="69.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🗄 Data scope · 1</text>
  <text x="484" y="102" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Role name</text>
  <rect x="484" y="108" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="494" y="122.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">subsidiary</text>
  <text x="650" y="102" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="650" y="108" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="660" y="122.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">One company only</text>
  <text x="484" y="150" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASELINE</text>
  <rect x="484" y="156" width="159" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="485" y="157" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="521.0" y="171.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">No access</text>
  <line x1="558" y1="161" x2="558" y2="175" stroke="#334155" strokeWidth="1"/>
  <text x="600.5" y="171.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <text x="660" y="172" fill="#94a3b8" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">nothing, plus what you allow below</text>
  <text x="484" y="204" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MENUS</text>
  <text x="484" y="222" fill="#cbd5e1" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">sales · 4 of 6 shown</text>
  <rect x="484" y="232" width="492" height="24" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="494" y="248" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">▾ Sales</text>
  <rect x="908" y="235" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="248" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="235" width="20" height="18" rx="4" fill="rgba(50,215,75,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="248" fill="#4ade80" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="235" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="248" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="260" width="492" height="24" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="276" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Orders</text>
  <text x="640" y="276" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">sql:sales:orders_get</text>
  <text x="810" y="276" fill="#94a3b8" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="890" y="276" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="908" y="263" width="20" height="18" rx="4" fill="rgba(148,163,184,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="276" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="263" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="276" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="263" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="276" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="288" width="492" height="24" rx="4" fill="rgba(50,215,75,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="304" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Invoices</text>
  <text x="640" y="304" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">sql:sales:invoices_get</text>
  <text x="810" y="304" fill="#94a3b8" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">inherits: allowed</text>
  <text x="890" y="304" fill="#4ade80" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="908" y="291" width="20" height="18" rx="4" fill="rgba(148,163,184,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="304" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="291" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="304" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="291" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="304" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="316" width="492" height="24" rx="4" fill="rgba(248,113,113,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="510" y="332" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">▾ Settings</text>
  <rect x="908" y="319" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="332" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="319" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="332" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="319" width="20" height="18" rx="4" fill="rgba(248,113,113,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="332" fill="#f87171" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <rect x="484" y="344" width="492" height="24" rx="4" fill="rgba(248,113,113,0.06)" stroke="#1f2937" strokeWidth="1"/>
  <text x="526" y="360" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Price lists</text>
  <text x="640" y="360" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">sql:sales:prices_get</text>
  <text x="810" y="360" fill="#94a3b8" fontSize="8.5" fontStyle="italic" fontFamily="system-ui, sans-serif">inherits: denied</text>
  <text x="890" y="360" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘👁</text>
  <rect x="908" y="347" width="20" height="18" rx="4" fill="rgba(148,163,184,0.18)" stroke="#334155" strokeWidth="1"/>
  <text x="918" y="360" fill="#94a3b8" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="930" y="347" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="940" y="360" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <rect x="952" y="347" width="20" height="18" rx="4" fill="none" stroke="#334155" strokeWidth="1"/>
  <text x="962" y="360" fill="#64748b" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⊘</text>
  <text x="484" y="388" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BEYOND THE MENUS</text>
  <rect x="484" y="396" width="98" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="533.0" y="408.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ AI assistant ×</text>
  <rect x="600" y="396" width="159" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="679.5" y="408.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Dashboard sales_overview ×</text>
  <rect x="484" y="422" width="98" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="485" y="423" width="50" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="510.0" y="437.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow</text>
  <line x1="536" y1="427" x2="536" y2="441" stroke="#334155" strokeWidth="1"/>
  <text x="559.0" y="437.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Deny</text>
  <rect x="600" y="422" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="610" y="436.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Query ▾</text>
  <rect x="720" y="422" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="436.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick…</text>
  <rect x="900" y="422" width="38" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="919.0" y="436.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="850" y="456" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="877.5" y="470.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Cancel</text>
  <rect x="916" y="456" width="44" height="22" rx="5" fill="url(#rol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="938.0" y="470.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">étiquette Full access, nb de règles</text>
  <line x1="210" y1="77.0" x2="240" y2="98" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Point de départ</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">partir de rien ou de tout</text>
  <line x1="210" y1="177.0" x2="484" y2="168" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="10" y="260" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="275" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un dossier se propage</text>
  <text x="20" y="288" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ses enfants héritent</text>
  <line x1="210" y1="277.0" x2="494" y2="244" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="130" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux onglets</text>
  <text x="1030" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">menus · lignes (périmètre)</text>
  <line x1="1020" y1="147.0" x2="770" y2="66" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="250" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Œil</text>
  <text x="1030" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">visible ou non dans le menu</text>
  <line x1="1020" y1="267.0" x2="896" y2="272" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="320" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hériter · Autoriser · Refuser</text>
  <text x="1030" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un contrôle par nœud</text>
  <line x1="1020" y1="337.0" x2="952" y2="246" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
  <rect x="1020" y="420" width="170" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1030" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hors menus</text>
  <text x="1030" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requête, endpoint, tableau, IA</text>
  <line x1="1020" y1="437.0" x2="720" y2="432" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#rol-arrow)"/>
</svg>

---

## L'onglet Access \{#access\}

### Point de départ

| Choix | Signification |
|---|---|
| **No access** | Rien, plus ce qui est autorisé en dessous (*nothing, plus what you allow below*). |
| **Full access** | Tout, moins ce qui est refusé en dessous (*everything, minus what you deny below*). La carte du rôle porte l'étiquette **Full access**. |

### L'arborescence des menus

Le bloc **Menus** affiche le menu latéral de chaque application, un bloc par application (`sales · 4 of 6 shown`). Chaque dossier et chaque entrée porte un contrôle à trois états :

| Contrôle | Effet |
|---|---|
| **Inherit** (–) | Le nœud prend l'état de son dossier, ou le point de départ. La ligne indique *inherits: allowed* / *denied* / *no access*. |
| **Allow** (✓) | Le nœud et tout ce qu'il contient sont accordés. |
| **Deny** (⊘) | Le nœud et tout ce qu'il contient sont refusés, même si une autre règle les accorderait. |

Un dossier se propage à ses enfants ; un enfant peut le contredire. Une entrée affiche en gris ce qu'elle exécute (`sql:sales:orders_get`, un tableau de bord…) : autoriser l'entrée accorde à la fois l'entrée de menu et ce qu'elle exécute. L'**œil** de chaque entrée donne l'aperçu du résultat : vert, l'entrée apparaît dans le menu latéral du titulaire ; barré, elle n'y apparaît pas.

Deux rôles types :

- *Tout sauf le dossier Sécurité* : **Full access**, puis **Deny** sur le dossier Sécurité.
- *Seulement le dossier Rapports* : **No access**, puis **Allow** sur le dossier Rapports.

### Hors menus

Certains droits ne correspondent à aucune entrée de menu. Le bloc **Beyond the menus** les ajoute sous forme de pastilles vertes (autorisation) ou rouges (refus) : choisir **Allow** ou **Deny**, le type, l'élément, puis **Add**.

| Type | Accorde |
|---|---|
| Connector (all queries) | Toutes les requêtes d'un connecteur. |
| Query | Une requête — pour un écran ouvert depuis un bouton ou un lien plutôt que depuis le menu. |
| API endpoint | Un endpoint d'un connecteur API. |
| Dashboard | Un tableau de bord. |
| Data Explorer | Un modèle de l'explorateur, ou tous les modèles d'une application — voir [Explorateur de données](../../explorer/overview.md#access). |
| AI assistant | L'assistant. |
| Pattern (expert) | Une permission écrite à la main, comme `sql:sales:report_*`. |

**Save** enregistre le rôle ; **Cancel** abandonne les modifications. Le nom d'un rôle ne peut plus changer après sa création.

---

## Périmètre de données — quelles lignes \{#data-scope\}

L'onglet **Data scope** limite les lignes vues par un rôle, sur chaque écran, export, tableau de bord, rapport et réponse de l'assistant qui lit un connecteur SQL. Un rôle sans règle voit toutes les lignes.

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="scp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="scp-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="scp-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="scp-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="10" width="770" height="424" rx="14" fill="url(#scp-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="244" y="42" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">🛡 [roles.subsidiary]</text>
  <rect x="244" y="54" width="181" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="278.0" y="69.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">🔑 Access</text>
  <rect x="313" y="55" width="111" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="368.5" y="69.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">🗄 Data scope · 2</text>
  <rect x="244" y="92" width="730" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="112" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">Company (CO) = user.company</text>
  <rect x="790" y="98" width="88" height="18" rx="9.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="834.0" y="110.2" fill="#f87171" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">deny if absent</text>
  <rect x="890" y="98" width="63" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="921.5" y="110.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">jdedwards</text>
  <rect x="244" y="128" width="730" height="30" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="148" fill="#e2e8f0" fontSize="10.5" fontFamily="system-ui, sans-serif">and   SY not in 00</text>
  <text x="960" y="148" fill="#94a3b8" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">🗑</text>
  <rect x="244" y="170" width="730" height="250" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="258" y="192" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">New rule</text>
  <rect x="258" y="202" width="193" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="259" y="203" width="106" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="312.0" y="217.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Dictionary item</text>
  <line x1="366" y1="207" x2="366" y2="221" stroke="#334155" strokeWidth="1"/>
  <text x="408.5" y="217.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Column name</text>
  <text x="258" y="246" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Dictionary item</text>
  <rect x="258" y="252" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="268" y="266.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">CO — Company ▾</text>
  <text x="500" y="246" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Connector</text>
  <rect x="500" y="252" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="510" y="266.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Any connector ▾</text>
  <rect x="258" y="290" width="255" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="259" y="291" width="89" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="303.5" y="305.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fixed values</text>
  <line x1="349" y1="295" x2="349" y2="309" stroke="#334155" strokeWidth="1"/>
  <text x="431.0" y="305.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">From the user's attribute</text>
  <rect x="560" y="296" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="577" y="305" fill="#cbd5e1" fontSize="10" fontFamily="system-ui, sans-serif">Exclude these values instead</text>
  <text x="258" y="334" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Values</text>
  <rect x="258" y="340" width="113" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="314.5" y="352.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00001 · Head office</text>
  <rect x="390" y="340" width="88" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="434.0" y="352.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">00050 · Stores</text>
  <rect x="510" y="338" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="520" y="352.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Pick or type a value…</text>
  <text x="258" y="386" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">A query without this item:</text>
  <rect x="430" y="372" width="216" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="431" y="373" width="106" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="484.0" y="387.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">is unrestricted</text>
  <line x1="538" y1="377" x2="538" y2="391" stroke="#334155" strokeWidth="1"/>
  <text x="592.0" y="387.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">returns nothing</text>
  <rect x="900" y="386" width="38" height="22" rx="5" fill="url(#scp-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="919.0" y="400.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Add</text>
  <rect x="10" y="90" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par règle</text>
  <text x="20" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les règles d'un rôle se cumulent</text>
  <line x1="210" y1="107.0" x2="256" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="10" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Élément ou colonne</text>
  <text x="20" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le dd touche chaque colonne</text>
  <line x1="210" y1="257.0" x2="258" y2="262" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Valeurs ou attribut</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">#USER.company# par utilisateur</text>
  <line x1="210" y1="347.0" x2="258" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="1010" y="380" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Élément absent</text>
  <text x="1020" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ignorer (ouvert) ou refuser</text>
  <line x1="1010" y1="397.0" x2="692" y2="384" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
  <rect x="1010" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1020" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étiquettes</text>
  <text x="1020" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">mode refus · connecteur</text>
  <line x1="1010" y1="117.0" x2="890" y2="108" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#scp-arrow)"/>
</svg>

### Une règle

| Champ | Choix |
|---|---|
| **Dictionary item** ou **Column name** | Ce qui est restreint. Un élément du dictionnaire (`CO — Company`) atteint chaque colonne qui le porte, dans chaque requête ; un nom de colonne ne restreint que cette colonne. |
| **Connector** | *Any connector*, ou un seul connecteur — la règle ne dit alors rien des autres. |
| **Fixed values** ou **From the user's attribute** | Les valeurs autorisées, choisies dans la liste de l'élément quand il en a une ; ou un attribut de l'utilisateur (`company`), pour qu'un seul rôle serve toutes les sociétés — chaque utilisateur porte ses propres valeurs (voir [Utilisateurs](./users.md#attributes)). |
| **Exclude these values instead** | Transforme la liste en exclusions : `SY not in 00`. Les valeurs vides restent visibles. |
| **A query without this item** | *is unrestricted* : une requête sans cette colonne n'est pas limitée par la règle. *returns nothing* : une telle requête ne renvoie aucune ligne pour ce rôle (étiquette **deny if absent**). |

Chaque règle s'affiche sur une ligne : `Company (CO) in 00001, 00050`, `SY not in 00`, `Company (CO) = user.company`. Un clic sur une ligne la charge dans le formulaire ; la corbeille la supprime. Les règles s'enregistrent avec le rôle.

### Combinaison des règles

- Dans un rôle, les règles se cumulent : *société 00001* **et** *SY différent de 00*.
- Entre les rôles d'un utilisateur, le plus ouvert l'emporte : un utilisateur titulaire de *subsidiary* et de *group* voit ce que voit *group*.
- Un rôle sans règle lève toute restriction pour ses titulaires.
- Les superutilisateurs ne sont jamais restreints.

### Où le périmètre s'applique

- **Lectures** : chaque requête d'un connecteur SQL est filtrée sur le serveur, quel que soit l'appelant — écrans, exports, tableaux de bord, rapports, assistant.
- **Écritures** : créer, modifier ou supprimer une ligne hors périmètre est refusé (*403*).
- Non filtrés : les connecteurs API et les tâches Nomaflow, qui s'exécutent sans utilisateur.

### Retrouver la colonne d'un élément

Une colonne de requête porte un élément du dictionnaire quand l'écran l'indique, quand elle porte le nom de l'élément, ou — sur un connecteur doté d'un **Dd Prefix** (JD Edwards : `2`) — quand son nom sans le préfixe de table est l'élément : `ABCO`, `MCCO` et `SDCO` portent tous `CO`. Une jointure de deux tables restreint les deux colonnes. Sur un pool qui supprime les espaces des textes de longueur fixe (JD Edwards), les valeurs sont comparées sans espaces.

### Prise d'effet d'une modification

Le périmètre est calculé à la connexion et accompagne la session. Un changement de rôle ou d'attribut s'applique au renouvellement de la session — dans l'heure, ou aussitôt après une déconnexion et une reconnexion. La fenêtre **Profil** montre à chaque utilisateur ses attributs et son périmètre de données en clair.

### Sans l'éditeur

Les mêmes règles se définissent avec `liberty-admin set-scope` et `set-attributes` ([CLI](../../../references/cli.md#liberty-admin)), ou dans `auth.toml` :

```toml title="auth.toml"
[roles.subsidiary]
permissions = ["menu:sales:*", "sql:sales:*"]
scope = [
  { dd = "CO", source = "#USER.company#", mode = "deny" },
  { dd = "SY", values = ["00"], exclude = true },
]
```

---

## Contrôle des permissions \{#resolution\}

Chaque permission est une chaîne séparée par des deux-points — `menu:sales:orders`, `sql:sales:orders_get`, `dashboard:sales_overview`, `ai:chat` — et l'éditeur les écrit de lui-même. Pour une requête, Liberty Next prend toutes les permissions de tous les rôles de l'utilisateur, puis :

1. un superutilisateur est toujours autorisé ;
2. un **refus** correspondant bloque — un refus dans un rôle l'emporte sur une autorisation dans un autre ;
3. une **autorisation** correspondante accorde ;
4. sinon, refusé.

`*` remplace un segment, ou tout le reste quand il termine la chaîne (`sql:sales:*`).

---

## Pièges fréquents \{#pitfalls\}

| Situation | Explication |
|---|---|
| Un utilisateur voit encore un menu après la modification de son rôle | La session porte les droits : se déconnecter et se reconnecter, ou attendre le renouvellement (dans l'heure). |
| Un refus prévu pour un rôle en bloque un autre | Les refus s'appliquent à tous les rôles de l'utilisateur. Préférer *No access* plus des autorisations pour les rôles restreints. |
| Une requête du rôle ne renvoie rien | Une règle en mode *returns nothing*, et la requête n'a pas de colonne portant l'élément. Utiliser *is unrestricted* ou ajouter la colonne. |
| Un utilisateur soumis à une règle par attribut ne voit rien | L'utilisateur n'a pas de valeur pour cet attribut — voir [Utilisateurs](./users.md#attributes). |
| Les rôles ne peuvent pas être supprimés depuis l'éditeur | Retirer le rôle à ses utilisateurs ; un rôle inutilisé n'accorde rien. |
