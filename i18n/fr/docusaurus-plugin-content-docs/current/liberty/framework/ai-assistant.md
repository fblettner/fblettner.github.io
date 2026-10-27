---
title: Assistant IA
description: "L'assistant IA de Liberty Next : le panneau ouvert par le bouton AI Assistant, ce qu'il sait faire (lire les requêtes des connecteurs, appeler des endpoints d'API, proposer de la configuration, lire les pages web autorisées), comment il est limité (ai:chat, connecteurs autorisés, requêtes en lecture seule, périmètre de données), et ses réglages."
keywords: [Liberty Next, assistant IA, Anthropic, Claude, ai:chat, outils, list_connectors, sql_query, api_call, scaffold, périmètre de données]
---

# Assistant IA

**AI Assistant**, à droite de la barre du haut, ouvre un panneau où les utilisateurs interrogent leurs données en langage courant. L'assistant répond en lançant les requêtes des connecteurs, avec les droits de l'utilisateur.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 440" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="aia-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="aia-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="aia-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="aia-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="410" rx="14" fill="url(#aia-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="30" width="380" height="380" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="54" fill="#e2e8f0" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Affaires</text>
  <rect x="252" y="66" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="96" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="126" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="156" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="186" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252" y="216" width="356" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="640" y="30" width="340" height="380" rx="8" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="654" y="54" fill="#4a9eff" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">AI Assistant</text>
  <text x="966" y="54" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">nouvelle conversation</text>
  <rect x="760" y="68" width="206" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="770" y="86" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Montant en cours par étape ?</text>
  <rect x="654" y="120" width="204" height="18" rx="9.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="756.0" y="132.2" fill="#c084fc" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql_query · crm.pipeline_by_stage_get</text>
  <rect x="654" y="146" width="300" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="666" y="166" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Pipeline en cours par étape :</text>
  <text x="666" y="186" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">• Qualifiée — 8 500</text>
  <text x="666" y="206" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">• Proposition — 45 000</text>
  <text x="666" y="226" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">• Négociation — 120 000</text>
  <text x="666" y="246" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total : 173 500</text>
  <rect x="654" y="370" width="250" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="664" y="384.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Poser une question…</text>
  <rect x="910" y="370" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="938.0" y="384.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Stop</text>
  <rect x="10" y="60" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tout écran</text>
  <text x="20" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le panneau s'ouvre par-dessus</text>
  <line x1="210" y1="77.0" x2="240" y2="80" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="60" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La question</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en langage courant</text>
  <line x1="1000" y1="77.0" x2="966" y2="88" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="120" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Outils utilisés</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">requêtes de lecture seules</text>
  <line x1="1000" y1="137.0" x2="940" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Stop</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">garde la réponse reçue</text>
  <line x1="1000" y1="347.0" x2="966" y2="381" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#aia-arrow)"/>
</svg>

---

## Utilisation \{#use\}

Saisir une question et appuyer sur Entrée (Maj+Entrée pour une nouvelle ligne). La réponse s'affiche au fil de l'écriture, avec les outils utilisés ; **Arrêter** l'interrompt et garde ce qui a été reçu ; **nouvelle conversation** repart de zéro. La conversation vit dans le panneau : elle n'est pas conservée après un rechargement de la page.

Exemples : *Combien de commandes ouvertes par société ce mois-ci ?* — *Quels utilisateurs ne se sont pas connectés depuis juin ?* — *Montre les cinq plus grosses factures d'ACME.*

---

## Ce qu'il sait faire \{#tools\}

| Outil | Fait | Réglage |
|---|---|---|
| `list_connectors` | Liste les connecteurs, leurs requêtes et endpoints (descriptions, sans SQL ni identifiants). | **Connector tools** (activé par défaut). |
| `sql_query` | Lance une requête **de lecture** d'un connecteur SQL. Les requêtes d'écriture sont toujours refusées. | **Connector tools**. |
| `api_call` | Appelle un endpoint d'un connecteur API. | **API tool** (désactivé par défaut — un endpoint peut modifier des données). |
| Outils de proposition | Proposent une requête, une entrée du dictionnaire, un écran ou une entrée de menu ; l'utilisateur relit la proposition et l'applique. | **Scaffold tools** (désactivé par défaut). |
| Lecture web | Lit des pages des domaines autorisés. | **Allowed domains** (aucun par défaut). |

L'assistant n'utilise que des requêtes nommées existantes : il n'écrit pas de SQL sur la base.

---

## Qui peut l'utiliser, et sur quoi \{#access\}

- L'utilisateur a besoin de la permission `ai:chat` (la règle *AI assistant* d'un rôle, dans **Beyond the menus**).
- **Allowed connectors**, dans Paramètres → App, limite les connecteurs accessibles à l'assistant ; vide signifie tous.
- Chaque requête qu'il lance passe par les mêmes contrôles serveur qu'un écran : le [périmètre de données](./build/secure/roles-and-permissions.md#data-scope) de l'utilisateur filtre les lignes.

---

## Réglages \{#settings\}

Dans **Paramètres → App → AI Assistant** : **Enabled**, **Anthropic API key** (chiffrée), **Model**, **Effort**, **Max tokens**, **Max tool iterations** (8), **Request timeout (s)**, **Adaptive thinking**, **System prompt**, les outils ci-dessus et **Allowed connectors**. Voir [Paramètres de l'application](./build/settings-app.md#ai). Sans clé, le panneau indique que l'assistant n'est pas configuré.

---

## Conseils \{#tips\}

- Donner aux requêtes un libellé et une description clairs (Paramètres → Connecteurs) : l'assistant choisit ses requêtes à partir d'eux.
- Écrire des requêtes de lecture dédiées aux questions fréquentes (totaux par société, par mois), plutôt que de laisser l'assistant agréger des milliers de lignes.
- Garder **API tool** désactivé tant que les endpoints ne sont pas en lecture seule.
