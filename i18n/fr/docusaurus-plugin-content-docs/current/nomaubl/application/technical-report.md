---
title: Rapport technique
description: "Le rapport technique de NomaUBL — la documentation développeur de la version, produite à partir des analyses du code embarquées à la construction : architecture, modèle de données, flux, référence de configuration, modèle de statuts, matrice d'impact, référence de l'API, ligne de commande, compilation et paquetage, en PDF ou Markdown, en français ou en anglais."
keywords: [NomaUBL, rapport technique, documentation développeur, modèle de données, flux, référence de configuration, modèle de statuts, matrice d'impact, référence API, ligne de commande, compilation, paquetage, PDF, Markdown, -techreport, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Rapport technique

L'onglet **Rapport technique** de la page [Rapports](./reports.md) produit la **documentation développeur de la version** : comment NomaUBL est construit, à quoi sert chaque table et chaque clé de configuration, quels flux les utilisent, ce que propose l'API. Il est produit à partir des analyses du code intégrées à l'application à la construction — les mêmes sources que la [référence développeur](../references/developer.md) — et il est donc **identique sur toutes les instances d'une même version**, quel que soit le système source (JD Edwards, SAP, NetSuite ou un ERP personnalisé).

Il complète les deux autres documents de la page : le [rapport d'implémentation](./implementation-report.md) décrit le paramétrage de *cette* instance, le [rapport d'audit](./audit-report.md) l'activité d'une période.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 421" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tr-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tr-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tr-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="tr-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="377" rx="14" fill="url(#tr-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="32" width="122" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="301.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Statistiques statuts</text>
  <rect x="367" y="32" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="400.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Intégrité</text>
  <rect x="439" y="32" width="67" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="472.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Requêteur</text>
  <rect x="511" y="32" width="97" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="559.5" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport d'audit</text>
  <rect x="613" y="32" width="142" height="22" rx="5" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="684.0" y="46.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <rect x="760" y="32" width="107" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="813.5" y="46.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Rapport technique</text>
  <line x1="220" y1="66" x2="980" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="88" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Documentation développeur de la version, produite à partir des analyses du code embarquées. Identique sur toutes les instances d'une version.</text>
  <text x="240" y="117" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue</text>
  <rect x="410" y="103" width="140" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="117.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Français ▾</text>
  <text x="240" y="149" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Libellé de date (garde)</text>
  <rect x="410" y="135" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="420" y="149.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">par défaut : aujourd'hui</text>
  <text x="240" y="181" fill="#94a3b8" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections</text>
  <rect x="410" y="172" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,177.5 L414.8,179.8 L418.8,175" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="181" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Périmètre</text>
  <text x="480.88" y="181" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">scope</text>
  <rect x="680" y="172" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,177.5 L684.8,179.8 L688.8,175" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="181" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Architecture</text>
  <text x="766.84" y="181" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">architecture</text>
  <rect x="410" y="193" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,198.5 L414.8,200.8 L418.8,196" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Modèle de données</text>
  <text x="523.44" y="202" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">data</text>
  <rect x="680" y="193" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,198.5 L684.8,200.8 L688.8,196" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="202" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Flux</text>
  <text x="724.28" y="202" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">flows</text>
  <rect x="410" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,219.5 L414.8,221.8 L418.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="223" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Référence de configuration</text>
  <text x="571.32" y="223" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">configuration</text>
  <rect x="680" y="214" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,219.5 L684.8,221.8 L688.8,217" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="223" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Modèle de statuts</text>
  <text x="793.44" y="223" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">statuses</text>
  <rect x="410" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,240.5 L414.8,242.8 L418.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="244" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Matrice d'impact</text>
  <text x="518.12" y="244" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">impact</text>
  <rect x="680" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,240.5 L684.8,242.8 L688.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="244" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Référence de l'API</text>
  <text x="798.76" y="244" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">api</text>
  <rect x="410" y="256" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,261.5 L414.8,263.8 L418.8,259" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="265" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Ligne de commande</text>
  <text x="523.44" y="265" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">cli</text>
  <rect x="680" y="256" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M682.5,261.5 L684.8,263.8 L688.8,259" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="697" y="265" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Compilation et paquetage</text>
  <text x="830.6800000000001" y="265" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">build</text>
  <rect x="410" y="277" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M412.5,282.5 L414.8,284.8 L418.8,280" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="427" y="286" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Annexe : références dans le code</text>
  <text x="603.24" y="286" fill="#64748b" fontSize="8.5" fontFamily="ui-monospace, monospace">appendix</text>
  <rect x="410" y="304" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="313" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Détailler chaque opération de l'API (description et paramètres)</text>
  <rect x="410" y="325" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="427" y="334" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Inclure les extraits de code en annexe (long)</text>
  <rect x="240" y="351" width="134" height="26" rx="5" fill="url(#tr-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="307.0" y="367.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Télécharger le PDF</text>
  <rect x="382" y="351" width="162" height="26" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="463.0" y="367.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⬇ Télécharger le Markdown</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">6e onglet des Rapports</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">après le rapport d'implémentation</text>
  <line x1="200" y1="43.0" x2="240" y2="43" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Onze sections</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">toutes cochées par défaut</text>
  <line x1="200" y1="217.0" x2="410" y2="202" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="1000" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Identique partout</text>
  <text x="1010" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">produit à partir de la version</text>
  <line x1="1000" y1="117.0" x2="780" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="1000" y="301" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="316" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux options</text>
  <text x="1010" y="329" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">détail de l'API · extraits de code</text>
  <line x1="1000" y1="318.0" x2="740" y2="319" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
  <rect x="1000" y="347" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="362" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF ou Markdown</text>
  <text x="1010" y="375" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">copie dans reports/</text>
  <line x1="1000" y1="364.0" x2="534" y2="364" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tr-arrow)"/>
</svg>

---

## Contrôles

| Contrôle | Description |
|---|---|
| **Langue** | Français ou anglais ; par défaut, la langue de l'interface. |
| **Libellé de date (page de garde)** | Texte libre imprimé sur la page de garde ; vide = date du jour. |
| **Sections** | Les onze sections, toutes cochées par défaut ; chacune affiche son identifiant. |
| **Détailler chaque opération de l'API (description et paramètres)** | Visible quand *Référence de l'API* est cochée. Décochée par défaut : la référence liste alors les opérations avec leur accès seulement. |
| **Inclure les extraits de code en annexe (long)** | Visible quand *Annexe : références dans le code* est cochée. Décochée par défaut. |
| **Télécharger le PDF / Télécharger le Markdown** | Produit le fichier et le télécharge (`nomaubl-technical-<date>-<heure>.pdf` ou `.md`). Une copie est conservée dans le dossier `reports` de l'environnement. |

---

## Sections

| Section (identifiant) | Contenu |
|---|---|
| **Périmètre** (`scope`) | La version de NomaUBL, sa date de compilation, l'analyse du code à l'origine du document, la date et l'auteur de la génération, et l'environnement dont les noms de tables sont résolus. |
| **Architecture** (`architecture`) | Composants (interface, serveur, clients de plateforme, rapports), exécution (un dossier et un serveur par environnement) et sécurité (authentification, sessions). |
| **Modèle de données** (`data`) | Chaque table avec ses colonnes, les clés de configuration, flux et appels qui les utilisent, et le nom retenu dans cette instance quand il diffère. |
| **Flux** (`flows`) | Les documents de flux — traiter un fichier, suivi des imports, récupération des statuts, e-reporting, dossiers surveillés, retraitement — chacun complété des tables, statuts et clés que son code utilise. |
| **Référence de configuration** (`configuration`) | Chaque clé avec son champ de paramétrage, l'endroit où elle se modifie, les flux qui la lisent, ses appels et son état, avec une synthèse des écarts. |
| **Modèle de statuts** (`statuses`) | Statuts des factures et de l'e-reporting : noms, codes, libellés, groupes et flux qui les attribuent. |
| **Matrice d'impact** (`impact`) | Pour chaque flux, les colonnes et clés les plus référencées. |
| **Référence de l'API** (`api`) | Les opérations de l'API avec l'accès que chacune demande ; avec l'option, leur description et leurs paramètres. |
| **Ligne de commande** (`cli`) | Les options, tirées de l'aide intégrée. |
| **Compilation et paquetage** (`build`) | Les étapes de construction, les éléments produits et l'organisation du jar. |
| **Annexe : références dans le code** (`appendix`) | Les références du code qui fondent les sections ; avec l'option, les extraits. |

---

## Ligne de commande et API

```bash
java -jar nomaubl.jar -techreport /opt/nomaubl/demo/config/config.json [--lang fr|en] [--format md|pdf] [--out <fichier>] [--date <libellé>] [--sections a,b,...] [--api-detail] [--snippets]
```

Par défaut : toutes les sections, Markdown, français, fichier `nomaubl-technical-<langue>.md` dans le dossier courant (la ligne de commande ne conserve pas de copie dans `reports`). Voir [Ligne de commande](../management/command-line.md#techreport).

La route de l'API est `GET /api/reports/technical`, avec les paramètres `lang`, `format`, `date`, `sections`, `apiDetail` et `snippets`.

---

## Accès

L'onglet fait partie de la page *Rapports* : accorder **Rapports** sur la page [Rôles](../configuration/security/roles.md). La génération demande en outre la fonctionnalité *Settings access*.

---

## Conseils & bonnes pratiques

- **Le produire à chaque mise à jour** et le conserver avec les notes de version : c'est la vue développeur de ce qui a changé.
- **Le remettre à un intégrateur** avec le [rapport d'implémentation](./implementation-report.md) de l'instance : le premier explique le produit, le second son paramétrage.
- **Ne cocher que les sections utiles** pour un document ciblé — modèle de données et référence de configuration pour une question de base ou de réglage, référence de l'API pour une intégration.
