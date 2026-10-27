---
title: Clé de licence
description: "La clé de licence de Liberty Next : ce qu'elle active (Nomasx-1, Nomajde), où la coller (Paramètres → App → License), comment la vérifier (liberty-license, /api/license), ce qui se passe sans elle, et comment la remplacer avant son expiration."
keywords: [Liberty Next, licence, clé de licence, Nomasx-1, Nomajde, Paramètres App, liberty-license, api license, expiration, mode restreint]
---

# Clé de licence

Le framework est libre d'utilisation. Les applications sous licence — **Nomasx-1** et **Nomajde** — sont activées par une clé de licence fournie par Nomana-IT.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 310" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="lic-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="lic-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="lic-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="lic-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="280" rx="14" fill="url(#lic-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Paramètres · App</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="720" height="26" rx="6" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="252" y="91" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">▾  License</text>
  <rect x="850" y="78" width="68" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="884.0" y="90.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">configured</text>
  <text x="260" y="130" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">License key</text>
  <rect x="390" y="116" width="430" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="130.5" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">••••••••••••••••••••••••••••••••</text>
  <text x="832" y="131" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">👁</text>
  <rect x="260" y="152" width="680" height="96" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="176" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Client</text>
  <text x="400" y="176" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">ACME</text>
  <text x="276" y="200" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Produits</text>
  <text x="400" y="200" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">Nomasx-1 · Nomajde</text>
  <text x="276" y="224" fill="#64748b" fontSize="9.5" fontFamily="system-ui, sans-serif">Expire le</text>
  <text x="400" y="224" fill="#e2e8f0" fontSize="10" fontFamily="system-ui, sans-serif">31/12/2027</text>
  <rect x="860" y="262" width="80" height="22" rx="5" fill="url(#lic-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="900.0" y="276.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="10" y="74" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="89" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Section License</text>
  <text x="20" y="102" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">état dans l'en-tête</text>
  <line x1="210" y1="91.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
  <rect x="10" y="170" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Coller la clé</text>
  <text x="20" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chiffrée à l'enregistrement</text>
  <line x1="210" y1="187.0" x2="390" y2="127" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
  <rect x="1000" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ce qu'elle couvre</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">client, produits, échéance</text>
  <line x1="1000" y1="167.0" x2="940" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
  <rect x="1000" y="250" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appliquée aussitôt</text>
  <text x="1010" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sans redémarrage</text>
  <line x1="1000" y1="267.0" x2="940" y2="273" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#lic-arrow)"/>
</svg>

---

## Installer la clé \{#install\}

Se connecter avec un superutilisateur, ouvrir **Paramètres → App → License**, coller la clé dans **License key** et enregistrer. La clé est chiffrée avec la clé maître de l'installation, et les applications sous licence se chargent aussitôt — sans redémarrage.

Avant de la coller, la clé peut être vérifiée sur le serveur : `liberty-license verify <clé>` (avec Docker : `docker exec -u liberty liberty-next liberty-license verify <clé>`).

---

## Vérifier la licence \{#check\}

| Où | Affiche |
|---|---|
| L'en-tête de la section **License** | *configured*, ou *not set — restricted mode*. |
| `liberty-license status` | Validité, produits couverts, date d'expiration de la clé configurée. |
| `GET /api/license` | `{mode, customer, plan, apps, expires_at, error}`. |
| `GET /info` | `license.mode` : `full` ou `restricted`. |

---

## Sans clé valide \{#restricted\}

Sans clé, ou avec une clé expirée ou invalide, le serveur fonctionne en **mode restreint** : le framework et les applications construites avec lui fonctionnent, les applications sous licence ne se chargent pas. Le journal du serveur en donne la raison par une ligne commençant par `license: not loading licensed connector(s)`.

---

## Remplacer la clé \{#replace\}

Noter la date d'expiration à l'installation de la clé. Avant l'échéance, coller la nouvelle clé dans **Paramètres → App → License** et enregistrer : elle s'applique aussitôt.

La clé peut aussi venir de la variable d'environnement `LIBERTY_LICENSE_KEY`, pour les installations qui gardent leurs secrets dans un orchestrateur ; les Paramètres affichent alors la référence telle quelle.
