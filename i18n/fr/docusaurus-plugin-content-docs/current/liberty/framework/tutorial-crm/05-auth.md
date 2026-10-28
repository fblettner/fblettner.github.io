---
title: Étape 5 — Rôles et connexion
description: "Décider qui voit quoi dans le CRM : un rôle de consultation et un rôle commercial construits sur l'arborescence du menu de l'application, les écritures accordées hors menus, deux utilisateurs de test, un périmètre de données par pays issu d'un attribut utilisateur, et la connexion avec le fournisseur d'identité de l'entreprise."
keywords: [Liberty Next, tutoriel, CRM, rôles, permissions, arborescence de menu, hors menus, utilisateurs, périmètre de données, attributs, OIDC]
---

# Étape 5 — Rôles et connexion

Jusqu'ici, tout s'est fait en superutilisateur, qui voit tout. Cette étape ajoute deux rôles, deux utilisateurs pour les tester, un périmètre de données et la connexion avec le compte d'entreprise.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tu5-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tu5-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tu5-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tu5-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="290" rx="14" fill="url(#tu5-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Settings · Access · Roles</text>
  <line x1="240" y1="62" x2="960" y2="62" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="74" width="170" height="160" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="256" y="100" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-viewer</text>
  <rect x="246" y="120" width="158" height="34" rx="5" fill="rgba(74,158,255,0.06)" stroke="#4a9eff" strokeWidth="1.2"/>
  <text x="256" y="140" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">crm-sales</text>
  <rect x="426" y="74" width="159" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="427" y="75" width="55" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="454.5" y="89.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Access</text>
  <line x1="483" y1="79" x2="483" y2="93" stroke="#334155" strokeWidth="1"/>
  <text x="534.0" y="89.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Data scope · 1</text>
  <text x="426" y="122" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Baseline</text>
  <rect x="496" y="108" width="148" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="497" y="109" width="67" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="530.5" y="123.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">No access</text>
  <line x1="565" y1="113" x2="565" y2="127" stroke="#334155" strokeWidth="1"/>
  <text x="604.5" y="123.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Full access</text>
  <rect x="426" y="142" width="300" height="110" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="438" y="162" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">crm · 3 of 4 shown</text>
  <text x="442" y="184" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">📊 Pipeline</text>
  <text x="706" y="184" fill="#4ade80" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">✓</text>
  <text x="442" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">📁 Ventes</text>
  <text x="706" y="202" fill="#4ade80" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">✓</text>
  <text x="442" y="220" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">👥 Clients</text>
  <text x="706" y="220" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">–</text>
  <text x="442" y="238" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">📈 Affaires</text>
  <text x="706" y="238" fill="#64748b" fontSize="10" textAnchor="end" fontFamily="system-ui, sans-serif">–</text>
  <text x="746" y="162" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Beyond the menus</text>
  <rect x="746" y="172" width="204" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="848.0" y="184.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow · Connector (all queries) · crm</text>
  <rect x="746" y="196" width="118" height="18" rx="9.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="805.0" y="208.2" fill="#4ade80" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Allow · AI assistant</text>
  <rect x="880" y="270" width="80" height="22" rx="5" fill="url(#tu5-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="920.0" y="284.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Save</text>
  <rect x="10" y="100" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux rôles</text>
  <text x="20" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">consultation et commercial</text>
  <line x1="210" y1="117.0" x2="240" y2="120" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Arborescence</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">autoriser un dossier</text>
  <line x1="210" y1="217.0" x2="426" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
  <rect x="1000" y="80" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périmètre</text>
  <text x="1010" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">COUNTRY = user.country</text>
  <line x1="1000" y1="97.0" x2="626" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
  <rect x="1000" y="180" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="195" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Écritures</text>
  <text x="1010" y="208" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tout le connecteur crm</text>
  <line x1="1000" y1="197.0" x2="960" y2="181" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tu5-arrow)"/>
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
| Beyond the menus | **Allow** — Connector (all queries) — `crm`. |

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
