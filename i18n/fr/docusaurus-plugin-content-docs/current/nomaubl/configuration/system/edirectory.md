---
title: E-Directory
description: "Configure la connexion à l'annuaire PPF (Portail Public de Facturation) et la recherche INSEE utilisés pour valider les codes adressage et retrouver les informations clients avant l'envoi d'une facture électronique. Mise en deux onglets : Directory (Enable Check + INSEE Search) et Connector (sélecteur api-connecteur + surcharges d'endpoint par tâche)."
keywords: [NomaUBL, e-directory, annuaire, PPF, Portail Public de Facturation, INSEE, code adressage, facturation électronique, réforme facture électronique, SIREN, SIRET, api-connecteur, ppf-directory]
---

# E-Directory

L'éditeur **E-Directory** configure deux services complémentaires que NomaUBL utilise pour valider les informations destinataire avant de produire une facture électronique :

- **Annuaire PPF (Portail Public de Facturation)** — vérifie que le **code adressage électronique** porté par le document existe et est **actif** dans l'annuaire public de la facturation électronique.
- **Recherche INSEE** — interroge une entreprise par **raison sociale, SIREN ou SIRET** pour récupérer ses données d'identification officielles (raison sociale, adresse, statut d'immatriculation…).

Les deux opérations s'enchaînent généralement : une recherche INSEE résout les identifiants du client, puis la vérification dans l'annuaire PPF confirme que le code adressage figurant sur le document est valide pour ce client.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé — une fois la source mappée vers UBL.

:::info[Refonte en 2026.05.8]
La configuration PA est désormais homogène entre **e-invoicing**, **e-directory** et **e-reporting** — chaque modèle système référence un [api-connecteur](../api-connectors.md) réutilisable au lieu de porter ses propres champs d'authentification et endpoints. Les anciens groupes inline *API Connection* et *Credentials* sont supprimés (sans repli). L'éditeur passe à **deux onglets** : *Directory* (Enable Check + INSEE Search) et *Connector* (sélecteur api-connecteur + surcharges d'endpoint par tâche). L'`ppf-directory` embarqué couvre le flux standard.
:::

L'éditeur comporte **deux onglets** :

1. **Directory** — sélecteur Enable Check et paramètres de recherche INSEE.
2. **Connector** — choix de l'api-connecteur qui porte le transport PPF, plus surcharges de noms d'endpoint par tâche.

---

## Accès à l'éditeur

- *Paramètres* → modèle **e-directory** (la ressource au niveau système).

---

## Vue d'ensemble

<svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="edir-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="edir-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="edir-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="440" rx="14" fill="url(#edir-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <rect x="220" y="20" width="580" height="40" fill="rgba(255,255,255,0.02)"/>
  <rect x="240" y="28" width="84" height="24" rx="4" fill="transparent"/>
  <text x="282" y="44" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Directory</text>
  <rect x="330" y="28" width="84" height="24" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="372" y="44" fill="#4a9eff" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Connector</text>
  <line x1="220" y1="60" x2="800" y2="60" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="86" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">api-connecteur</text>
  <text x="240" y="104" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Le transport HTTP de l'annuaire PPF — auth, base URL, endpoints — vit dans un api-connecteur réutilisable.</text>

  <text x="240" y="128" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNECTEUR</text>
  <rect x="320" y="118" width="280" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="330" y="135" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">ppf-directory ▾</text>
  <text x="610" y="135" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">éditer sous Connecteurs API</text>

  <text x="240" y="170" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Surcharges d'endpoint par requête</text>
  <text x="240" y="186" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Nom d'endpoint sur ppf-directory pour chaque requête. Vide = nom par défaut affiché.</text>

  <rect x="240" y="196" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="211" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Directory check          |  directory-check</text>
  <rect x="240" y="220" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="235" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Directory check (SIREN)  |  directory-check-siren</text>
  <rect x="240" y="244" width="540" height="22" rx="4" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="259" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">Directory check (SIRET)  |  directory-check-siret</text>

  <line x1="240" y1="288" x2="780" y2="288" stroke="#1f2937" strokeWidth="1"/>

  <text x="240" y="312" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Onglet Directory — aperçu</text>
  <text x="240" y="334" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENABLE CHECK</text>
  <rect x="346" y="324" width="160" height="26" rx="5" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="356" y="341" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">Y ▾</text>
  <text x="520" y="341" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">interroge la PPF avant chaque facture</text>

  <text x="240" y="378" fill="#cbd5e1" fontSize="11" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche INSEE</text>
  <text x="240" y="400" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RESULTS PER PAGE</text>
  <rect x="346" y="390" width="100" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="356" y="407" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">10</text>
  <text x="460" y="407" fill="#64748b" fontSize="9" fontStyle="italic" fontFamily="system-ui, sans-serif">nombre de résultats par recherche INSEE</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">api-connecteur réutilisable</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aucun champ d'auth ni endpoint inline</text>
  <line x1="200" y1="115" x2="320" y2="128" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>

  <rect x="820" y="220" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="235" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Surcharges par requête</text>
  <text x="830" y="248" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">SIREN seul / SIRET / générique</text>
  <line x1="820" y1="236" x2="780" y2="236" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>

  <rect x="20" y="326" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="341" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérification d'annuaire</text>
  <text x="30" y="354" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">interrogation PPF avant envoi</text>
  <line x1="200" y1="342" x2="346" y2="338" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>

  <rect x="820" y="392" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Recherche INSEE</text>
  <text x="830" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">recherche société par SIREN/SIRET</text>
  <line x1="820" y1="408" x2="446" y2="404" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#edir-arrow)"/>
</svg>

---

## Onglet 1 — Directory

### Vérification d'annuaire (Directory Check)

| Champ | Valeurs | Description |
|---|---|---|
| **Enable Check** | `Y` / `N` | Quand cette option est activée, NomaUBL interroge l'annuaire PPF **avant l'envoi de chaque facture** pour vérifier que le **code adressage électronique** du document existe et est actif dans l'annuaire public. À désactiver pour ignorer la vérification (utile en test). |

### Recherche INSEE

| Champ | Défaut | Description |
|---|---|---|
| **Results per page** | `10` | Nombre maximal de résultats renvoyés par requête de recherche INSEE. Augmenter pour élargir chaque page de résultats, diminuer pour limiter la taille des réponses réseau. |

---

## Onglet 2 — Connector

Le transport HTTP de l'annuaire PPF — flux d'authentification, base URL, endpoints — vit dans un [api-connecteur](../api-connectors.md) réutilisable. Cette page **le référence par son nom uniquement** et ne porte jamais de champ d'auth ni d'endpoint HTTP en ligne. L'`ppf-directory` embarqué couvre le flux standard ; choisir un connecteur personnalisé quand l'annuaire utilise un schéma d'auth non standard ou route via une passerelle tenant.

### api-connecteur

| Champ | Description |
|---|---|
| **Connector** | Liste déroulante des templates `api-connector`. Le connecteur sélectionné porte le `baseUrl` de l'annuaire, l'`authType`, les identifiants, l'endpoint de jeton et le catalogue d'endpoints HTTP. Modifier le connecteur lui-même sous [Connecteurs API](../api-connectors.md). |

### Surcharges d'endpoint par requête

Quand l'api-connecteur utilise des noms d'endpoint différents des défauts, saisir une surcharge ci-dessous. Laisser vide pour utiliser le nom par défaut affiché.

| Champ | Défaut | Utilisé par |
|---|---|---|
| **Directory check** | `directory-check` | Vérification générique (quand le document porte déjà l'identifiant de routage). |
| **Directory check (SIREN)** | `directory-check-siren` | Branche de recherche quand seul un SIREN est connu. |
| **Directory check (SIRET)** | `directory-check-siret` | Branche de recherche quand un SIRET est connu. |

---

## Conseils & bonnes pratiques

- **Garder Enable Check activé en production.** L'envoi d'une facture avec un code adressage inactif ou inconnu provoque un rejet en aval par la Plateforme Agréée destinataire.
- **Utiliser la recherche INSEE pour amorcer les fiches clients.** Une requête par SIREN / SIRET évite les erreurs de saisie et aligne les données NomaUBL sur le registre officiel.
- **Modifier les timeouts et les paramètres TLS sur l'api-connecteur lui-même.** Les paramètres au niveau HTTP vivent sur la page [Connecteurs API](../api-connectors.md), pas ici — un même connecteur peut servir plusieurs pages, le timeout et le drapeau SSL Verify se règlent une seule fois.
- **Ne jamais désactiver SSL Verify en production.** Cette désactivation expose les identifiants et les métadonnées des documents à des attaques man-in-the-middle. À régler sur l'api-connecteur, pas ici.
- **Le connecteur PPF est embarqué.** Une installation neuve ship déjà un connecteur `ppf-directory` qui pointe sur les endpoints standards — choisir le connecteur dans la liste déroulante suffit. Les connecteurs personnalisés ne sont utiles que pour des transports non standards.
