---
title: Référence développeur
description: "La Référence développeur de Liberty Next (Liberty Next → Documenter) : le modèle de données du framework et de chaque connecteur, chaque réglage avec la page qui le modifie et le code qui le lit, chaque route de l'API avec l'accès qu'elle exige — avec recherche, pour les superutilisateurs."
keywords: [Liberty Next, référence développeur, modèle de données, référence de configuration, réglages, routes de l'API, permissions, superutilisateur, documentation]
---

# Référence développeur

**Liberty Next → Documenter → Référence développeur** décrit l'installation en service de l'intérieur : ses tables, ses réglages et ses routes d'API, lus dans le code et la configuration en vigueur. Elle s'adresse à ceux qui assurent le support de l'installation — superutilisateurs uniquement — et ne modifie rien.

La page compte trois onglets ; elle s'ouvre sur **Configuration**, puis sur le dernier onglet utilisé.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dvr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dvr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dvr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dvr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="372" rx="14" fill="url(#dvr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Référence développeur</text>
  <rect x="240" y="56" width="246" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="297.0" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Modèle de données</text>
  <rect x="355" y="57" width="91" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="400.5" y="71.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Configuration</text>
  <line x1="447" y1="61" x2="447" y2="75" stroke="#334155" strokeWidth="1"/>
  <text x="466.5" y="71.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">API</text>
  <text x="240" y="104" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">142 modifiés dans un écran · 21 fichier / environnement seulement · 0 pas dans l'interface</text>
  <rect x="780" y="88" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="790" y="102.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Tous les états ▾</text>
  <rect x="240" y="120" width="150" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="142" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Toutes les sections</text>
  <text x="252" y="168" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">app</text>
  <text x="252" y="194" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">auth</text>
  <text x="252" y="220" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">jobs</text>
  <text x="252" y="246" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">changesets</text>
  <text x="252" y="272" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">ai</text>
  <text x="252" y="298" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">notify</text>
  <text x="252" y="324" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">oidc</text>
  <rect x="400" y="120" width="560" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CLÉ</text>
  <text x="570" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODIFIÉE DANS</text>
  <text x="800" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DÉFAUT</text>
  <text x="890" y="137.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LUE PAR</text>
  <rect x="400" y="152" width="560" height="28" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.enabled</text>
  <text x="570" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Administrer → App → nomaflow</text>
  <text x="800" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">true</text>
  <text x="890" y="169.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="400" y="184" width="560" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.max_upload_mb</text>
  <text x="570" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Administrer → App → nomaflow</text>
  <text x="800" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">200</text>
  <text x="890" y="201.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="400" y="216" width="560" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.files_dir</text>
  <rect x="570" y="222.0" width="175" height="16" rx="8.0" fill="rgba(168,85,247,0.18)" stroke="rgba(168,85,247,0.40)" strokeWidth="1"/>
  <text x="657.5" y="233.2" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Fichier / environnement seulement</text>
  <text x="800" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">—</text>
  <text x="890" y="233.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">3</text>
  <rect x="400" y="248" width="560" height="28" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="410" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">jobs.pool</text>
  <text x="570" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Administrer → App → nomaflow</text>
  <text x="800" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">default</text>
  <text x="890" y="265.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2</text>
  <rect x="10" y="50" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="65" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois onglets</text>
  <text x="20" y="78" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modèle, réglages, API</text>
  <line x1="210" y1="67.0" x2="240" y2="68" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
  <rect x="10" y="200" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <text x="20" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec leurs manques</text>
  <line x1="210" y1="217.0" x2="252" y2="200" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
  <rect x="1000" y="70" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre d'état</text>
  <text x="1010" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">modifié, fichier, absent</text>
  <line x1="1000" y1="87.0" x2="960" y2="99" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
  <rect x="1000" y="200" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Où il se modifie</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic ouvre le détail</text>
  <line x1="1000" y1="217.0" x2="740" y2="228" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dvr-arrow)"/>
</svg>

---

## Modèle de données \{#data\}

Les tables du framework, puis celles que déclare chaque connecteur, groupées par connecteur, chacune avec son nombre de colonnes. La recherche trouve une table, une colonne ou un libellé.

Une table présente sa **table physique**, sa **clé**, les **requêtes** qui la lisent et ce qui l'utilise — écrans, tableaux de bord, graphiques, tâches, modèles de l'explorateur —, ses tables liées, puis ses colonnes : **Colonne**, **Libellé** (issu du dictionnaire), **Type**, **Références**, **Écrans**, **Description**.

---

## Configuration \{#config\}

Chaque réglage de l'installation, par section, avec son type, sa valeur par défaut et sa description.

| Colonne | Signification |
|---|---|
| **Clé**, **Libellé**, **Type**, **Défaut** | Le réglage. |
| **Modifiée dans** | La page qui le modifie — *Administrer → App → Connexion* —, ou *Fichier / environnement seulement* avec la raison, ou *Pas dans l'interface*. |
| **Lue par** | Les emplacements du code qui l'utilisent. |

L'en-tête dénombre les réglages modifiés dans un écran, ceux fixés seulement dans le fichier ou l'environnement, et ceux absents de l'interface ; le filtre d'état n'en garde qu'une catégorie. Un clic sur une ligne en ouvre le détail, avec le code qui la lit.

---

## API \{#api\}

Chaque route du serveur, par module : **Méthode**, **Chemin**, **Résumé**, **Module** et **Accès** — *public*, *tout utilisateur connecté*, *superutilisateur*, une *permission* ou un *rôle*, lu dans le code. Un clic sur une route en ouvre les paramètres, la requête et la réponse, ainsi que l'emplacement de son traitement. Les boutons de l'en-tête ouvrent la documentation interactive de l'API du serveur.

La recherche porte sur tous les modules et indique, par groupe, le nombre de résultats.

---

## Voir aussi

- [Rapports de documentation](./documentation-reports.md) — les mêmes informations sous forme de document PDF.
- [API REST](../../references/rest-api.md) — les principales routes, expliquées.
