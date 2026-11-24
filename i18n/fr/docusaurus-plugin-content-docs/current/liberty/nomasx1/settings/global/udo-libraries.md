---
title: Bibliothèques UDO
description: "L'écran Bibliothèques UDO de Nomasx-1 : pour chaque table JD Edwards EnterpriseOne des objets définis par l'utilisateur (F00950W, F9860W, F9861W), toutes les bibliothèques qui la contiennent, le paramètre à renseigner (JDE UDO SEC ou JDE UDO OL) et la présence de la structure 9.2 — la bibliothèque à retenir est celle qui est marquée."
keywords: [Nomasx-1, paramètres, JD Edwards, bibliothèques UDO, objets définis par l'utilisateur, F00950W, F9860W, F9861W, JDE_UDO_SEC, JDE_UDO_OL, Tools 9.2]
---

# Bibliothèques UDO

L'écran **Bibliothèques UDO** (**Paramètres → Global → Bibliothèques UDO**) répond à une question à régler avant de remplir les [paramètres JD Edwards](./jd-edwards.md) : *quelle bibliothèque indiquer dans **JDE UDO SEC** et **JDE UDO OL** ?*

La collecte de la sécurité lit la sécurité des objets définis par l'utilisateur (F00950W) dans la bibliothèque indiquée en **JDE UDO SEC**, et les objets eux-mêmes (F9860W, F9861W) dans celle indiquée en **JDE UDO OL**. Une base JD Edwards contient souvent ces tables dans plusieurs bibliothèques — une bibliothèque système conservée depuis la 9.1 à côté de celle de la 9.2 — et une mauvaise bibliothèque fait échouer l'étape, avec un message Oracle du type `ORA-00904: "WSWOBNM"`. L'écran lit la base JD Edwards et donne, pour chacune des trois tables, toutes les bibliothèques qui la contiennent.

:::info[Spécifique à JDE]
L'écran lit le dictionnaire de la base JD Edwards par le connecteur JD Edwards (Oracle), à travers le lien de base de données du pool quand il en a un. Il est en lecture seule.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1320 294" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="udol-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="udol-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="udol-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="udol-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="258" rx="14" fill="url(#udol-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="36" width="26" height="26" rx="6" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="253" y="53" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">▦</text>
  <text x="276" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">JD Edwards - la bibliothèque de chaque table UDO</text>
  <line x1="220" y1="76" x2="1100" y2="76" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="88" width="170" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="102.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="418" y="88" width="72" height="22" rx="5" fill="url(#udol-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="454.0" y="102.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">▷ Exécuter</text>
  <rect x="1010" y="88" width="70" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1045.0" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Exporter ▾</text>
  <rect x="944" y="88" width="60" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="974.0" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Colonnes</text>
  <rect x="883" y="88" width="55" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="910.5" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Filtres</text>
  <rect x="837" y="88" width="40" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="857.0" y="102.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Vues</text>
  <rect x="240" y="120" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PARAMÈTRE À RENSEIGNER</text>
  <text x="510" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TABLE</text>
  <text x="680" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BIBLIOTHÈQUE</text>
  <text x="880" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">STRUCTURE 9.2</text>
  <rect x="240" y="152" width="840" height="24" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="167.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO SEC</text>
  <text x="510" y="167.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F00950W</text>
  <text x="680" y="167.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SY920</text>
  <rect x="880" y="156.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="891.0" y="167.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="240" y="180" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO SEC</text>
  <text x="510" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F00950W</text>
  <text x="680" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">SY910</text>
  <text x="880" y="195.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <rect x="240" y="208" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="223.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO OL</text>
  <text x="510" y="223.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F9860W</text>
  <text x="680" y="223.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">OL920</text>
  <rect x="880" y="212.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="891.0" y="223.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="240" y="236" width="840" height="24" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="251.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">JDE UDO OL</text>
  <text x="510" y="251.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F9861W</text>
  <text x="680" y="251.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">OL920</text>
  <rect x="880" y="240.0" width="22" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="891.0" y="251.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">●</text>
  <rect x="20" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le paramètre à renseigner</text>
  <text x="30" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JDE UDO SEC ou JDE UDO OL</text>
  <line x1="200" y1="147.0" x2="250" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne par bibliothèque</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">qui contient la table</text>
  <line x1="200" y1="227.0" x2="690" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Structure 9.2</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la bibliothèque à retenir</text>
  <line x1="1120" y1="147.0" x2="910" y2="152" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
  <rect x="1120" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sans marque</text>
  <text x="1130" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une structure plus ancienne : à écarter</text>
  <line x1="1120" y1="227.0" x2="910" y2="186" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#udol-arrow)"/>
</svg>

---

## Colonnes

| Colonne | Contenu |
|---|---|
| **Paramètre à renseigner** | **JDE UDO SEC** pour F00950W, **JDE UDO OL** pour F9860W et F9861W. |
| **Table** | La table : F00950W (sécurité des UDO), F9860W et F9861W (les objets définis par l'utilisateur et leur emplacement). |
| **Bibliothèque** | Une bibliothèque qui contient la table. |
| **Structure 9.2** | Marquée quand la table de cette bibliothèque a la structure de la 9.2. |

**La bibliothèque à retenir est celle qui est marquée.** Une ligne sans marque est une copie plus ancienne de la table : l'indiquer fait échouer l'étape de collecte.

---

## Conseils & bonnes pratiques

- **Consulter cet écran avant de renseigner JDE_UDO_SEC et JDE_UDO_OL** dans [JD Edwards](./jd-edwards.md), ou quand la collecte de la sécurité échoue sur une étape UDO.
- **F9860W et F9861W vont ensemble** : les deux lignes de **JDE UDO OL** doivent désigner la même bibliothèque.
- **Collecter à nouveau après la correction d'une bibliothèque** : la [sécurité des UDO](../../applications/rights/udo-security.md) et les chemins d'accès des pages composites et E1 sont lus à la collecte de sécurité suivante.
