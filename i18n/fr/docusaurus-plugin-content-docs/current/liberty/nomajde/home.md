---
title: Vue d'ensemble — la page d'accueil
description: "La page d'accueil de Nomajde : ce que fait Nomajde, les chiffres en direct de l'instance JD Edwards EnterpriseOne (utilisateurs, rôles, enregistrements de sécurité, codes UDC, objets) et les points d'entrée de chaque domaine — données de base, maintenance de la sécurité, développement, analyse et tâches."
keywords: [Nomajde, vue d'ensemble, accueil, tableau de bord, JD Edwards, JDE, utilisateurs, rôles, enregistrements de sécurité, UDC, Object Librarian, points d'entrée]
---

# Vue d'ensemble — la page d'accueil

**Vue d'ensemble**, première entrée du menu de Nomajde, est la page sur laquelle s'ouvre l'application : à quoi sert Nomajde, les chiffres de l'instance JD Edwards EnterpriseOne à laquelle elle est reliée, et une carte de points d'entrée par domaine.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 470" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="njh-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="njh-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="njh-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="njh-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="420" rx="14" fill="url(#njh-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Vue d'ensemble</text>
  <text x="240" y="60" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Ce que fait Nomajde, les chiffres de votre instance JD Edwards, et par où commencer.</text>
  <rect x="240" y="74" width="720" height="72" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="254" y="94" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Nomajde est le compagnon de JD Edwards.</text>
  <text x="254" y="112" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">• Données de base — types et codes UDC, modifiables en masse, import Excel</text>
  <text x="254" y="126" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">• Maintenance de la sécurité — utilisateurs, rôles, environnements, Security Workbench</text>
  <text x="254" y="140" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">• Développement — Object Librarian, dictionnaire de données, références croisées</text>
  <rect x="240.0" y="156" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="174" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Utilisateurs</text>
  <text x="252.0" y="187" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Profils utilisateur JDE</text>
  <text x="252.0" y="216" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1 248</text>
  <text x="252.0" y="238" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">212 rôles · 3 904 relations de rôles</text>
  <rect x="422.5" y="156" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="174" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Enregistrements de sécurité</text>
  <text x="434.5" y="187" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Security Workbench (F00950)</text>
  <text x="434.5" y="216" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">18 530</text>
  <text x="434.5" y="238" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">6 environnements</text>
  <rect x="605.0" y="156" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="174" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Codes UDC</text>
  <text x="617.0" y="187" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Codes utilisateur (F0005)</text>
  <text x="617.0" y="216" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">96 412</text>
  <text x="617.0" y="238" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">4 120 types UDC</text>
  <rect x="787.5" y="156" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="174" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Objets</text>
  <text x="799.5" y="187" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Object Librarian (F9860)</text>
  <text x="799.5" y="216" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">61 077</text>
  <text x="799.5" y="238" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif"></text>
  <rect x="240.0" y="258" width="172.5" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="278" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Données de base</text>
  <text x="252.0" y="304" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ UDC Types</text>
  <text x="252.0" y="330" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ UDC Code</text>
  <rect x="422.5" y="258" width="172.5" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="278" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Maintenance de la sécurité</text>
  <text x="434.5" y="304" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Gestion des Utilisateurs</text>
  <text x="434.5" y="330" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Affectations Rôles</text>
  <text x="434.5" y="356" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Security Workbench</text>
  <rect x="605.0" y="258" width="172.5" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="278" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Développement</text>
  <text x="617.0" y="304" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Object Librarian</text>
  <text x="617.0" y="330" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Data Dictionary</text>
  <text x="617.0" y="356" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Références croisées</text>
  <rect x="787.5" y="258" width="172.5" height="150" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="278" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Analyse et tâches</text>
  <text x="799.5" y="304" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Explorateur de données</text>
  <text x="799.5" y="330" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Refusionner la sécurité</text>
  <text x="799.5" y="356" fill="#4a9eff" fontSize="9" fontFamily="system-ui, sans-serif">→ Page produit ↗</text>
  <rect x="10" y="92" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="107" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Texte</text>
  <text x="20" y="120" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">à quoi sert l'application</text>
  <line x1="210" y1="109.0" x2="240" y2="110" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="10" y="186" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="201" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Chiffres en direct</text>
  <text x="20" y="214" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">lus sur l'instance JDE</text>
  <line x1="210" y1="203.0" x2="240" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="10" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Liens</text>
  <text x="20" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seulement les entrées autorisées</text>
  <line x1="210" y1="337.0" x2="240" y2="330" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
  <rect x="1000" y="330" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une URL</text>
  <text x="1010" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'ouvre dans un nouvel onglet</text>
  <line x1="1000" y1="347.0" x2="950" y2="357" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#njh-arrow)"/>
</svg>

---

## Contenu \{#content\}

| Partie | Contenu |
|---|---|
| Présentation | Ce que fait Nomajde, domaine par domaine : le travail que JD Edwards répartit sur de nombreux écrans, réuni dans quelques grilles avec recherche, écrit directement dans JD Edwards, chaque modification gardant trace de son auteur, de sa date et de l'écran d'origine. |
| **Utilisateurs** | Les profils utilisateur JD Edwards, avec le nombre de rôles et de relations de rôles. |
| **Enregistrements de sécurité** | Les enregistrements du Security Workbench (F00950), avec le nombre d'environnements. |
| **Codes UDC** | Les codes définis par l'utilisateur (F0005), avec le nombre de types UDC. |
| **Objets** | Les objets de l'Object Librarian (F9860). |
| **Données de base** | [Types UDC](./master-data/udc-types.md), [Codes UDC](./master-data/udc-codes.md). |
| **Maintenance de la sécurité** | [Gestion des utilisateurs](./security-maintenance/user-management.md), User Preferences, [Affectations Rôles](./security-maintenance/role-management.md), [Relations de rôles](./security-maintenance/role-relationships.md), [Environnements](./security-maintenance/environments.md), [Security Workbench](./security-maintenance/security-workbench.md). |
| **Développement** | Object Librarian, Data Dictionary, Références croisées — en lecture. |
| **Analyse et tâches** | L'[explorateur de données](./data-explorer.md), les [tâches](./jobs.md) et la page produit. |

Les chiffres sont lus en direct sur l'instance JD Edwards à chaque ouverture ou actualisation (**↻**) de la page.

---

## Points d'entrée et droits \{#access\}

Une carte ne présente que les entrées que l'utilisateur peut ouvrir : une entrée que ses rôles n'accordent pas n'apparaît pas. La page produit s'ouvre dans un nouvel onglet du navigateur.

---

## Voir aussi

- [Nomajde](./overview.md) — le produit.
- [Explorateur de données](./data-explorer.md) — analyser les données de sécurité et de développement.
