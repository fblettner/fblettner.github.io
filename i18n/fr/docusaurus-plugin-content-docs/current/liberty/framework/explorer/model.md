---
title: Construire un modèle
description: "Liberty Next → Construire → Explorateur dans Liberty Next : un modèle d'exploration par magasin de données — le pivot, les entités (une requête avec sa cardinalité, sa clé, ses mesures, ses colonnes masquées et sa date par défaut), les relations sur des paires de colonnes, et un modèle rempli depuis un préréglage de l'assistant de création d'écran."
keywords: [Liberty Next, explorateur de données, Paramètres Explorateur, modèle, pivot, entité, cardinalité, mesure, relation, jointure, préréglage, assistant de création d'écran]
---

# Construire un modèle

Un modèle indique à l'explorateur ce qu'un utilisateur peut analyser et comment les tables se rejoignent. Un superutilisateur le construit dans **Liberty Next → Construire → Explorateur**, sans SQL : chaque entité lit une requête existante d'un connecteur, et les colonnes se déduisent du résultat de cette requête.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 510" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="492" rx="14" fill="url(#exm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · Explorateur</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="86" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">App</text>
  <rect x="272" y="74" width="33" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="288.5" y="86.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">crm</text>
  <rect x="313" y="72" width="112" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="369.0" y="86.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une app</text>
  <text x="240" y="122" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Modèle</text>
  <rect x="290" y="108" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="300" y="122.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">pipeline ▾</text>
  <rect x="448" y="108" width="123" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="509.5" y="122.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un modèle</text>
  <rect x="577" y="108" width="123" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="638.5" y="122.5" fill="#f87171" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer le modèle</text>
  <rect x="880" y="108" width="80" height="22" rx="5" fill="url(#exm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="122.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="240" y="142" width="720" height="56" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Libellé</text>
  <rect x="252" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">CRM pipeline</text>
  <text x="432" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Pivot</text>
  <rect x="432" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="442" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">deals ▾</text>
  <text x="612" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Description</text>
  <rect x="612" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="622" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="792" y="160" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Préréglage (assistant écran)</text>
  <rect x="792" y="166" width="166" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="802" y="180.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Aucun ▾</text>
  <rect x="240" y="210" width="720" height="168" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="230" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">▤  Entités</text>
  <rect x="840" y="216" width="128" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="904.0" y="230.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une entité</text>
  <rect x="252" y="242" width="696" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="258" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">deals</text>
  <text x="302" y="258" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">— Affaires</text>
  <rect x="363" y="247" width="40" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="383.0" y="259.2" fill="#4a9eff" fontSize="8" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Pivot</text>
  <rect x="407" y="247" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="424.5" y="259.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="273" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">crm.deals_get · clé: ID · Σ AMOUNT · CLOSE_DATE</text>
  <text x="934" y="264" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Modifier · Supprimer</text>
  <rect x="252" y="286" width="696" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="302" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customers</text>
  <text x="324" y="302" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">— Clients</text>
  <rect x="379" y="291" width="35" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="396.5" y="303.2" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1</text>
  <text x="266" y="317" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">crm.customers_get · clé: ID</text>
  <text x="934" y="308" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Modifier · Supprimer</text>
  <rect x="252" y="330" width="696" height="38" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="266" y="346" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">activities</text>
  <text x="330" y="346" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">— Activités</text>
  <rect x="396" y="335" width="35" height="18" rx="9.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="413.5" y="347.2" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n</text>
  <text x="266" y="361" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">crm.activities_get · clé: ID</text>
  <text x="934" y="352" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">Modifier · Supprimer</text>
  <rect x="240" y="390" width="720" height="100" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="410" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">🔗  Relations</text>
  <rect x="830" y="396" width="139" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="899.5" y="410.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une relation</text>
  <rect x="252" y="424" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">customers ▾</text>
  <text x="392" y="439" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">→</text>
  <rect x="406" y="424" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">deals ▾</text>
  <rect x="550" y="424" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="670" y="439" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">=</text>
  <rect x="684" y="424" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="438.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="826" y="439" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">+  🗑</text>
  <rect x="252" y="454" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">activities ▾</text>
  <text x="392" y="469" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">→</text>
  <rect x="406" y="454" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">deals ▾</text>
  <rect x="550" y="454" width="110" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="560" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">DEAL_ID</text>
  <text x="670" y="469" fill="#64748b" fontSize="10" fontFamily="system-ui, sans-serif">=</text>
  <rect x="684" y="454" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="694" y="468.5" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">ID</text>
  <text x="826" y="469" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">+  🗑</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une app à la fois</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plusieurs modèles par app</text>
  <line x1="210" y1="91.0" x2="272" y2="83" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="10" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellé et pivot</text>
  <text x="20" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le pivot ouvre chaque analyse</text>
  <line x1="210" y1="177.0" x2="252" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="10" y="290" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="305" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Entités</text>
  <text x="20" y="318" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une requête chacune, 1..1 ou 1..n</text>
  <line x1="210" y1="307.0" x2="252" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="10" y="430" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Relations</text>
  <text x="20" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">paires de colonnes vers le pivot</text>
  <line x1="210" y1="447.0" x2="252" y2="435" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1000" y="108" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="123" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <text x="1010" y="136" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit et recharge</text>
  <line x1="1000" y1="125.0" x2="960" y2="119" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
  <rect x="1000" y="160" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Depuis un préréglage</text>
  <text x="1010" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">remplit entités et jointures</text>
  <line x1="1000" y1="177.0" x2="948" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exm-arrow)"/>
</svg>

---

## L'application et le modèle \{#app-model\}

1. **App** — la barre du haut liste les applications qui ont déjà un modèle ; **+ Ajouter une app** propose les connecteurs SQL qui n'en ont pas.
2. **Modèle** — choisir un modèle de l'application, ou **Ajouter un modèle** et saisir son identifiant (lettres, chiffres, `_` et `-`). Une application peut avoir plusieurs modèles : des tables sans lien entre elles font l'objet de modèles distincts. **Supprimer le modèle** le retire avec ses entités et ses relations.
3. L'en-tête du modèle :

| Champ | Usage |
|---|---|
| **Libellé** | Le nom affiché dans le sélecteur de modèle de l'explorateur. |
| **Pivot** | L'entité de départ de chaque analyse : une table de faits, un en-tête de document, des lignes de document. |
| **Description** | Affichée sous le titre de l'explorateur. |
| **Préréglage (assistant écran)** | Remplit le modèle depuis un préréglage — voir [plus bas](#preset). |

**Enregistrer** écrit le modèle et le recharge : l'explorateur le voit aussitôt. Un modèle sans entité n'est pas enregistré.

---

## Entités \{#entities\}

**Ajouter une entité** (ou un clic sur une entité) ouvre son formulaire :

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="exe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="exe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="exe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="exe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#exe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Entité · deals</text>
  <rect x="800" y="28" width="76" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="838.0" y="42.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="884" y="28" width="80" height="22" rx="5" fill="url(#exe-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="924.0" y="42.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <line x1="240" y1="60" x2="960" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Id</text>
  <rect x="240" y="86" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">deals</text>
  <text x="480" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Libellé</text>
  <rect x="480" y="86" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="100.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="720" y="80" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes par ligne du pivot</text>
  <rect x="720" y="85" width="178" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="721" y="86" width="72" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="757.0" y="100.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1..1 · une</text>
  <line x1="794" y1="90" x2="794" y2="104" stroke="#334155" strokeWidth="1"/>
  <text x="846.0" y="100.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">1..n · plusieurs</text>
  <text x="240" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Connecteur</text>
  <rect x="240" y="136" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="150.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">crm (l'app) ▾</text>
  <text x="480" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Requête</text>
  <rect x="480" y="136" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="490" y="150.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">deals_get ▾</text>
  <text x="720" y="130" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Écran (indications de colonnes)</text>
  <rect x="720" y="136" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="730" y="150.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires ▾</text>
  <text x="240" y="180" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Date par défaut</text>
  <rect x="240" y="186" width="226" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="200.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">CLOSE_DATE ▾</text>
  <text x="240" y="232" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNES</text>
  <rect x="240" y="240" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COLONNE</text>
  <text x="400" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <text x="550" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="690" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ</text>
  <text x="750" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MESURE</text>
  <text x="900" y="257.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MASQUÉE</text>
  <rect x="240" y="272" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">ID</text>
  <text x="400" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Id</text>
  <text x="550" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">number</text>
  <text x="690" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <text x="750" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="288.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="302" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">STAGE</text>
  <text x="400" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Étape</text>
  <text x="550" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">string</text>
  <text x="690" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="318.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="332" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">AMOUNT</text>
  <text x="400" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Montant</text>
  <text x="550" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">number</text>
  <text x="690" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">sum ▾</text>
  <text x="900" y="348.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="362" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">CLOSE_DATE</text>
  <text x="400" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Date de clôture</text>
  <text x="550" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">date</text>
  <text x="690" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="378.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <rect x="240" y="392" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER_ID</text>
  <text x="400" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Client</text>
  <text x="550" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">number</text>
  <text x="690" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☐</text>
  <text x="750" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">— dimension —</text>
  <text x="900" y="408.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">☑</text>
  <rect x="10" y="86" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="101" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cardinalité</text>
  <text x="20" y="114" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lignes par ligne du pivot</text>
  <line x1="210" y1="103.0" x2="240" y2="97" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="10" y="150" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Source</text>
  <text x="20" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une requête SELECT d'un connecteur</text>
  <line x1="210" y1="167.0" x2="240" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="10" y="330" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Colonnes découvertes</text>
  <text x="20" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la requête s'exécute sur une ligne</text>
  <line x1="210" y1="347.0" x2="240" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="130" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Indications d'écran</text>
  <text x="1010" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">libellés, formats, listes</text>
  <line x1="1000" y1="147.0" x2="960" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Mesure</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">agrégat par défaut</text>
  <line x1="1000" y1="317.0" x2="880" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
  <rect x="1000" y="380" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="395" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Masquée</text>
  <text x="1010" y="408" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">absente du volet</text>
  <line x1="1000" y1="397.0" x2="930" y2="382" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#exe-arrow)"/>
</svg>

| Champ | Usage |
|---|---|
| **Id** | L'identifiant de l'entité, figé après création (`deals`, `customers`). |
| **Libellé** | Le nom du groupe dans le volet des champs. |
| **Lignes par ligne du pivot** | **1..1 · une** — au plus une ligne par ligne du pivot (le client d'une affaire) ; **1..n · plusieurs** — plusieurs lignes (les activités d'une affaire). Le pivot est toujours en 1..1. |
| **Description** | Texte libre. |
| **Connecteur** | Le connecteur de la requête ; par défaut, celui de l'application. |
| **Requête** | Une requête SELECT de ce connecteur, sans paramètre. Ses colonnes se découvrent en l'exécutant sur une ligne. |
| **Écran (indications de colonnes)** | Un écran dont les réglages de colonnes fournissent libellés, formats et listes de valeurs. Les écrans qui lisent la même requête apparaissent en tête. |
| **Date par défaut** | Le champ date auquel la période s'applique en premier. |

Le tableau **Colonnes** liste les colonnes découvertes, avec le libellé et le type fournis par l'écran. Pour chacune :

- **Clé** — les colonnes qui identifient une ligne. Une nouvelle entité reprend les colonnes clés de l'écran. La clé permet d'ouvrir une ligne dans le dialogue de son écran depuis la vue détail.
- **Mesure** — une colonne numérique à additionner, moyenner, compter… : choisir son agrégat par défaut (`sum`, `avg`, `min`, `max`, `count`, `count_distinct`). Laissée sur *— dimension —*, la colonne sert aux regroupements et aux filtres.
- **Masquée** — absente du volet des champs. Une colonne masquée par l'écran le reste.

Une colonne que la requête ne renvoie plus porte un **?**, pour pouvoir la décocher.

### Ce qu'une colonne devient pour l'utilisateur \{#fields\}

Chaque colonne devient un **champ** du volet, libellé et formaté par le dictionnaire et l'écran, typé en texte, nombre, date, date-heure ou oui/non. Une colonne dotée d'une liste de valeurs (une énumération ou une liste de recherche dans l'écran) affiche ses libellés et propose ses valeurs dans les filtres. Une colonne déclarée comme mesure mais non numérique reste une dimension, et le modèle le signale aux superutilisateurs.

---

## Relations \{#relations\}

Une relation relie deux entités sur une ou plusieurs **paires de colonnes** : `customers` → `deals` sur `ID = CUSTOMER_ID`. **Ajouter une relation**, choisir les deux entités, puis les colonnes (les listes proposent les colonnes de chaque entité ; un nom peut aussi se saisir) ; **+** ajoute une paire pour une clé composée.

Chaque entité doit rejoindre le pivot, directement ou par d'autres entités. L'explorateur choisit ensuite les jointures utiles à chaque analyse, sans jamais multiplier les lignes deux fois : une analyse regroupe sur une seule entité 1..n au plus, et les autres sont atteintes sans dupliquer les lignes du pivot.

---

## Un modèle depuis un préréglage \{#preset\}

Un préréglage de l'assistant de création d'écran déclare déjà un ensemble de tables et leurs jointures. Le choisir dans **Préréglage (assistant écran)** remplit le modèle :

- chaque table du préréglage devient une entité (toutes ses colonnes, ou la liste de colonnes du préréglage), la table de base devient le pivot ;
- les jointures deviennent des relations, posées sur les colonnes réelles — la colonne de ce nom, celle qui porte cet élément du dictionnaire ou, sur un connecteur à préfixe de table (JD Edwards EnterpriseOne : `ABAN8`, `WWAN8`), celle dont le nom sans préfixe correspond à l'élément.

Les entités déjà déclarées sont conservées et complétées ; une clé, des mesures, une date par défaut ou une cardinalité réglées à la main restent en place. Il reste à ajuster ce qui doit l'être, puis **Enregistrer**. Choisir de nouveau le préréglage remplit encore le modèle.

L'application du préréglage crée aussi les entrées de dictionnaire qui manquent à ses tables — sur une source JD Edwards, à partir de son dictionnaire de données : *Préréglage appliqué : 6 entités · 42 entrées de dictionnaire créées*.

### Modèles fournis par un préréglage \{#shipped\}

Un préréglage peut aussi fournir **de lui-même** un modèle à l'explorateur : les préréglages *complets* des catalogues JD Edwards (carnet d'adresses, grand livre fournisseurs, commande client, ordre de fabrication…) figurent dans le sélecteur de modèle sans rien déclarer dans Liberty Next → Construire → Explorateur. Dans le sélecteur de modèle, les modèles sont groupés par domaine — *JDE · Accounts Payable*, *JDE · Sales* —, les autres par application. Le modèle est construit à partir du préréglage à sa première ouverture ; l'en-tête de la page indique *fourni par le préréglage « … »*. Dans un tel préréglage, le libellé d'une table devient celui de l'entité, et une table de référence jointe à un pivot transactionnel a la cardinalité *une ligne*.

Pour modifier un tel modèle, ajouter un modèle dans Liberty Next → Construire → Explorateur à partir du même préréglage : le modèle déclaré remplace le modèle fourni.

---

## Points d'attention

| Situation | Effet | Solution |
|---|---|---|
| Une entité n'est pas reliée au pivot. | L'enregistrement est refusé, avec le nom des entités isolées. | Ajouter la relation manquante. |
| La requête de l'entité attend des paramètres. | L'explorateur l'exécute sans paramètre. | Rattacher l'entité à une requête sans paramètre. |
| Aucune colonne découverte. | La requête a échoué ou n'a rien renvoyé. | Vérifier la requête dans Liberty Next → Construire → Connecteurs. |
| Des champs affichent leur nom de colonne brut. | Ces colonnes n'ont pas d'entrée de dictionnaire. | Sur la page de l'explorateur, un superutilisateur voit *N colonne(s) sans entrée de dictionnaire affichent leur nom de colonne* et **Créer les entrées depuis le dictionnaire de données** les crée en un clic. |

## Pour aller plus loin

- [Analyser les données](./analysis.md) — ce que les utilisateurs font du modèle.
- [Rôles et permissions](../build/secure/roles-and-permissions.md#access) — donner accès à un modèle.
