---
title: Étape 5 — Rôles et connexion
description: "Décider qui voit quoi dans le CRM : un rôle de consultation et un rôle commercial construits sur l'arborescence du menu de l'application, les écritures accordées hors menus, deux utilisateurs de test, un périmètre de données par pays issu d'un attribut utilisateur, et la connexion avec le fournisseur d'identité de l'entreprise."
keywords: [Liberty Next, tutoriel, CRM, rôles, permissions, arborescence de menu, hors menus, utilisateurs, périmètre de données, attributs, OIDC]
---

# Étape 5 — Rôles et connexion

Jusqu'ici, tout s'est fait en superutilisateur, qui voit tout. Cette étape ajoute deux rôles, deux utilisateurs pour les tester, un périmètre de données et la connexion avec le compte d'entreprise.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 602" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tcrm-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tcrm-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tcrm-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tcrm-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="562" rx="14" fill="url(#tcrm-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <rect x="953" y="28" width="131" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1018.5" y="42.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Recharger la config</text>
  <line x1="220" y1="60" x2="1100" y2="60" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="74" width="419.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="245.0" y="84" width="20" height="20" rx="5" fill="#4a9eff" fillOpacity="0.18"/>
  <circle cx="255.0" cy="94" r="4" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="272.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="272.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Les comptes, leurs rôles et attributs</text>
  <rect x="665.0" y="74" width="419.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="674.0" y="84" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="684.0" cy="94" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="701.0" y="91" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rôles</text>
  <text x="701.0" y="104" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Ce que chaque rôle peut ouvrir et les données qu’il voit</text>
  <rect x="354" y="124" width="112" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="410.0" y="138.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un rôle</text>
  <rect x="244" y="164" width="214" height="56" rx="7" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="256" y="182" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-viewer</text>
  <text x="256" y="196" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Consulte le CRM</text>
  <text x="256" y="211" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 règle(s)</text>
  <rect x="244" y="226" width="214" height="56" rx="7" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="256" y="244" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="256" y="258" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Travaille les affaires</text>
  <text x="256" y="273" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">3 règle(s)</text>
  <rect x="236" y="156" width="230" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="136" width="12" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.3"/>
  <text x="512" y="148" fill="#e2e8f0" fontSize="12" fontWeight="700" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="1070" y="148" fill="#fb923c" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">modifications non enregistrées</text>
  <line x1="478" y1="162" x2="1084" y2="162" stroke="#1f2937" strokeWidth="1"/>
  <text x="508" y="180" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Accès</text>
  <line x1="492" y1="188" x2="558" y2="188" stroke="#4a9eff" strokeWidth="2"/>
  <text x="578" y="180" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Périmètre de données</text>
  <line x1="478" y1="189" x2="1084" y2="189" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM DU RÔLE</text>
  <rect x="492" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">crm-sales</text>
  <text x="787.0" y="208" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <rect x="787.0" y="214" width="283.0" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="797.0" y="228.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Travaille les affaires</text>
  <text x="492" y="267" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Base</text>
  <rect x="548" y="252" width="188" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="549" y="253" width="87" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="592.5" y="266.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ Aucun accès</text>
  <line x1="637" y1="257" x2="637" y2="269" stroke="#334155" strokeWidth="1"/>
  <text x="686.5" y="266.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Accès complet</text>
  <text x="746" y="267" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">rien, plus ce que vous autorisez ci-dessous</text>
  <text x="492" y="290" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Menus</text>
  <rect x="492" y="300" width="578" height="24" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="502" y="316" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">crm</text>
  <text x="524" y="316" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">· 4 visibles sur 4</text>
  <text x="514" y="344" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Pipeline</text>
  <text x="570.816" y="344" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">dashboard:crm.pipeline</text>
  <text x="956" y="344" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">autorisé</text>
  <text x="972" y="344" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="331" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="1013" y="332" width="20" height="18" rx="4" fill="#4ade80" fillOpacity="0.2"/>
  <text x="1023" y="345" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="345" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="352" x2="1070" y2="352" stroke="#1f2937" strokeWidth="1"/>
  <text x="500" y="370" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="514" y="370" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Ventes</text>
  <text x="956" y="370" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">autorisé</text>
  <rect x="990" y="357" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="1001" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <rect x="1013" y="358" width="20" height="18" rx="4" fill="#4ade80" fillOpacity="0.2"/>
  <text x="1023" y="371" fill="#4ade80" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="371" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="378" x2="1070" y2="378" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="396" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Clients</text>
  <text x="582.964" y="396" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:customers_get</text>
  <text x="956" y="396" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : autorisé</text>
  <text x="972" y="396" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="383" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="384" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="397" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="397" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="404" x2="1070" y2="404" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="422" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Affaires</text>
  <text x="588.816" y="422" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">sql:crm:deals_get</text>
  <text x="956" y="422" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">hérite : autorisé</text>
  <text x="972" y="422" fill="#4ade80" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">◉</text>
  <rect x="990" y="409" width="66" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="991" y="410" width="20" height="18" rx="4" fill="#4a9eff" fillOpacity="0.2"/>
  <text x="1001" y="423" fill="#4a9eff" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–</text>
  <text x="1023" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✓</text>
  <text x="1045" y="423" fill="#64748b" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸</text>
  <line x1="492" y1="430" x2="1070" y2="430" stroke="#1f2937" strokeWidth="1"/>
  <rect x="492" y="326" width="578" height="110" rx="0" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492" y="456" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <rect x="492" y="464" width="70" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="527.0" y="476.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">sql:crm:∗ ×</text>
  <rect x="492" y="490" width="148" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="493" y="491" width="77" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="531.5" y="504.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✓ Autoriser</text>
  <line x1="571" y1="495" x2="571" y2="507" stroke="#334155" strokeWidth="1"/>
  <text x="605.5" y="504.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">⦸ Refuser</text>
  <rect x="648" y="490" width="204" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="658" y="504.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Connecteur (toutes les requêtes)</text>
  <text x="840" y="504.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="860" y="490" width="146" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="870" y="504.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">Choisir…</text>
  <text x="994" y="504.5" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="1014" y="490" width="56" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1042.0" y="504.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter</text>
  <line x1="478" y1="526" x2="1084" y2="526" stroke="#1f2937" strokeWidth="1"/>
  <rect x="934" y="536" width="64" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="966.0" y="550.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="1004" y="536" width="64" height="22" rx="5" fill="url(#tcrm-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1036.0" y="550.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="478" y="124" width="606" height="444" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="20" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux rôles</text>
  <text x="30" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">consultation et vente</text>
  <line x1="200" y1="167.0" x2="244" y2="192" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="215" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="230" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base</text>
  <text x="1130" y="243" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Aucun accès : autoriser la suite</text>
  <line x1="1120" y1="232.0" x2="930" y2="263" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arbre des menus</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">hériter · autoriser · refuser</text>
  <line x1="200" y1="377.0" x2="502" y2="367" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="20" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Au-delà des menus</text>
  <text x="30" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écritures : tout le connecteur crm</text>
  <line x1="200" y1="477.0" x2="492" y2="467" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="130" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="145" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre de données</text>
  <text x="1130" y="158" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">COUNTRY = pays de l'utilisateur</text>
  <line x1="1120" y1="147.0" x2="708" y2="176" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
  <rect x="1120" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hériter · Autoriser · Refuser</text>
  <text x="1130" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un contrôle par entrée</text>
  <line x1="1120" y1="317.0" x2="1056" y2="341" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tcrm-arrow)"/>
</svg>

---

## Deux rôles

**Liberty Next → Administrer → Accès → Roles** : créer chaque rôle. L'onglet **Access** présente l'arborescence du menu de chaque application, avec un contrôle à trois états sur chaque nœud (hériter, autoriser, refuser) ; autoriser une entrée de menu accorde aussi la requête ou le tableau de bord qu'elle ouvre. Voir [Rôles et permissions](../build/secure/roles-and-permissions.md).

### `crm-viewer` — consulte le CRM

| Réglage | Valeur |
|---|---|
| Base | **No access** |
| Menus | **Allow** sur le dossier *Ventes* de l'application `crm` et sur *Pipeline*. |

Les titulaires voient les écrans et le tableau de bord, mais toute écriture est refusée : les requêtes d'écriture (`customers_put`, `deals_post`…) ne sont pas accordées.

### `crm-sales` — travaille les affaires

| Réglage | Valeur |
|---|---|
| Base | **No access** |
| Menus | **Allow** sur *Ventes* et *Pipeline*. |
| Au-delà des menus | **Allow** — Connector (all queries) — `crm`. |

La règle sur le connecteur accorde toutes les requêtes de `crm`, écritures comprises. **Save** pour chaque rôle.

---

## Deux utilisateurs

**Liberty Next → Administrer → Accès → Users → ＋ Add user** :

| Utilisateur | Rôle | Attribut |
|---|---|---|
| `alice` | `crm-viewer` | — |
| `bob` | `crm-sales` | `country = FR` |

Donner un mot de passe à chacun. Connectée en `alice` dans une fenêtre de navigation privée : le CRM affiche *Ventes* et *Pipeline* ; la modification d'un client est refusée. Connecté en `bob` : les dialogues enregistrent. Voir [Utilisateurs](../build/secure/users.md).

---

## Un périmètre de données — le pays de chaque commercial

Bob ne doit voir que les clients de son pays.

1. Faire porter le pays par les affaires : dans `deals_get`, joindre le client et sélectionner son pays :

```sql
SELECT d.ID, d.CUSTOMER_ID, d.NAME, d.STAGE, d.AMOUNT, d.CLOSE_DATE, d.OWNER, c.COUNTRY
FROM deals d JOIN customers c ON c.ID = d.CUSTOMER_ID
```

2. Dans le rôle `crm-sales`, onglet **Data scope**, une règle : colonne `COUNTRY`, connecteur `crm`, **From the user's attribute** `country`. Enregistrer.

Bob se déconnecte puis se reconnecte : Clients et Affaires n'affichent plus que les clients français — ACME Industries et Beta SARL — et une écriture hors de son périmètre est refusée. Le périmètre est appliqué par le serveur, aux écrans, au tableau de bord comme à l'assistant IA. Le rôle d'Alice n'a pas de règle : elle voit toujours tout. Voir [Rôles et permissions → Périmètre de données](../build/secure/roles-and-permissions.md#data-scope).

---

## Se connecter avec le compte d'entreprise

Pour que les utilisateurs se connectent avec leur compte d'entreprise (Entra ID, Keycloak, Okta…), renseigner **Liberty Next → Administrer → App → OpenID Connect (SSO)** avec les valeurs de l'application déclarée chez le fournisseur. Un bouton **Se connecter avec OIDC** apparaît sur la page de connexion ; les nouveaux utilisateurs arrivent sans rôle, et un administrateur leur attribue `crm-viewer` ou `crm-sales`.

Recette complète : [Connexion OIDC](../cookbook/oidc-sso.md).

---

## Bilan

Deux rôles taillés dans le menu de l'application, des utilisateurs qui voient leur part, et des lignes filtrées par le serveur selon chaque utilisateur.

→ **[Étape 6 — IA et tâches](./06-ai-and-jobs.md)** : des questions en langage courant et une tâche quotidienne.
