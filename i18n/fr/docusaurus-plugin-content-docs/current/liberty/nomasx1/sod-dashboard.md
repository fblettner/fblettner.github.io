---
title: Séparation des tâches
description: "Le tableau de bord de suivi de la séparation des tâches de Nomasx-1 : utilisateurs en conflit, lignes de conflit, conflits avérés par l'activité et rôles impliqués, les conflits par rafraîchissement et par niveau de risque, les risques touchés, les paires de rôles en cause, les utilisateurs les plus en conflit, le détail par processus, et les liens vers les écrans de conflits et l'explorateur."
keywords: [Nomasx-1, séparation des tâches, SoD, tableau de bord, conflits, conflits avérés, risques, paires de rôles, tendance, niveau de risque, suivi]
---

# Séparation des tâches

**Séparation des tâches**, juste sous **Vue d'ensemble** dans le menu de Nomasx-1, suit les conflits que la [matrice SoD](./settings/sod/matrix.md) détecte dans les accès de chaque application connectée : combien, quels risques, quels rôles les provoquent, quels conflits ont réellement été exercés, et leur évolution d'un rafraîchissement à l'autre.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 450" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nxs-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nxs-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nxs-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nxs-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="760" height="418" rx="14" fill="url(#nxs-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Suivi de la séparation des tâches</text>
  <text x="240" y="74" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PÉRIODE</text>
  <rect x="240" y="80" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="250" y="94.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">12 derniers mois ▾</text>
  <text x="406" y="74" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">APPLICATION</text>
  <rect x="406" y="80" width="130" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="416" y="94.5" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Tous ▾</text>
  <rect x="240.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Utilisateurs en conflit</text>
  <text x="252.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Au dernier rafraîchissement</text>
  <text x="252.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">37</text>
  <text x="252.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">3 à privilèges · rafraîchi le 2026-10-28</text>
  <rect x="422.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="434.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Lignes de conflit</text>
  <text x="434.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Utilisateur × risque × paire</text>
  <text x="434.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">1 204</text>
  <text x="434.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">18 risques touchés dans 4 processus</text>
  <rect x="605.0" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="617.0" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Avérés par l'activité</text>
  <text x="617.0" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Les deux activités utilisées</text>
  <text x="617.0" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">9</text>
  <text x="617.0" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">41 lignes de conflit avérées</text>
  <rect x="787.5" y="116" width="172.5" height="92" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="799.5" y="134" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rôles impliqués</text>
  <text x="799.5" y="147" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Un côté d'un conflit</text>
  <text x="799.5" y="176" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="system-ui, sans-serif">26</text>
  <text x="799.5" y="198" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">31 paires de rôles</text>
  <rect x="240" y="218" width="400" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Conflits par rafraîchissement</text>
  <text x="252" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Par niveau de risque</text>
  <line x1="260" y1="402" x2="620" y2="402" stroke="#334155" strokeWidth="1"/>
  <rect x="276" y="376" width="40" height="26" fill="#f87171" opacity="0.85"/>
  <rect x="276" y="311" width="40" height="65" fill="#fb923c" opacity="0.85"/>
  <rect x="276" y="268" width="40" height="43" fill="#4a9eff" opacity="0.85"/>
  <rect x="348" y="378" width="40" height="24" fill="#f87171" opacity="0.85"/>
  <rect x="348" y="318" width="40" height="61" fill="#fb923c" opacity="0.85"/>
  <rect x="348" y="277" width="40" height="41" fill="#4a9eff" opacity="0.85"/>
  <rect x="420" y="383" width="40" height="19" fill="#f87171" opacity="0.85"/>
  <rect x="420" y="331" width="40" height="52" fill="#fb923c" opacity="0.85"/>
  <rect x="420" y="294" width="40" height="37" fill="#4a9eff" opacity="0.85"/>
  <rect x="492" y="385" width="40" height="17" fill="#f87171" opacity="0.85"/>
  <rect x="492" y="339" width="40" height="45" fill="#fb923c" opacity="0.85"/>
  <rect x="492" y="307" width="40" height="32" fill="#4a9eff" opacity="0.85"/>
  <rect x="564" y="389" width="40" height="13" fill="#f87171" opacity="0.85"/>
  <rect x="564" y="350" width="40" height="39" fill="#fb923c" opacity="0.85"/>
  <rect x="564" y="324" width="40" height="26" fill="#4a9eff" opacity="0.85"/>
  <rect x="650" y="218" width="310" height="200" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="662" y="236" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Risques touchés</text>
  <text x="662" y="249" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Les plus d'utilisateurs d'abord ; la pastille donne le niveau</text>
  <circle cx="666" cy="271" r="3.5" fill="#f87171"/>
  <text x="678" y="273" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Créer un fournisseur et le payer</text>
  <text x="678" y="285" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Achats</text>
  <text x="948" y="273" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">14 utilisateurs</text>
  <circle cx="666" cy="307" r="3.5" fill="#f87171"/>
  <text x="678" y="309" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Saisir et approuver des écritures</text>
  <text x="678" y="321" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Finance</text>
  <text x="948" y="309" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">9 utilisateurs</text>
  <circle cx="666" cy="343" r="3.5" fill="#fb923c"/>
  <text x="678" y="345" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Modifier les prix et facturer</text>
  <text x="678" y="357" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Ventes</text>
  <text x="948" y="345" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">6 utilisateurs</text>
  <circle cx="666" cy="379" r="3.5" fill="#4a9eff"/>
  <text x="678" y="381" fill="#e2e8f0" fontSize="9" fontFamily="system-ui, sans-serif">Réceptionner et ajuster le stock</text>
  <text x="678" y="393" fill="#64748b" fontSize="7.5" fontFamily="system-ui, sans-serif">Stocks</text>
  <text x="948" y="381" fill="#cbd5e1" fontSize="9" textAnchor="end" fontFamily="system-ui, sans-serif">3 utilisateurs</text>
  <rect x="10" y="80" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="95" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Filtre Application</text>
  <text x="20" y="108" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tous = les totaux</text>
  <line x1="210" y1="97.0" x2="406" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
  <rect x="1000" y="64" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="79" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Avérés</text>
  <text x="1010" y="92" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les deux activités utilisées</text>
  <line x1="1000" y1="81.0" x2="691.25" y2="116" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
  <rect x="10" y="320" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="20" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Tendance</text>
  <text x="20" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">par niveau de risque</text>
  <line x1="210" y1="337.0" x2="260" y2="320" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
  <rect x="1000" y="300" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Risques touchés</text>
  <text x="1010" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la pastille donne le niveau</text>
  <line x1="1000" y1="317.0" x2="960" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nxs-arrow)"/>
</svg>

---

## La barre \{#bar\}

La **Période** — *12 derniers mois* à l'ouverture — s'applique au graphique de tendance. **Application** : **Tous** donne les totaux de l'ensemble des applications ; en choisir une restreint chaque widget à celle-ci. **Excel** et **PDF** exportent la page telle qu'elle se présente.

---

## Les quatre chiffres \{#figures\}

| Carte | Chiffre | Ligne de détail |
|---|---|---|
| **Utilisateurs en conflit** — au dernier rafraîchissement | Les utilisateurs porteurs d'au moins un conflit. | Ceux à privilèges, et la date du dernier rafraîchissement. |
| **Lignes de conflit** — utilisateur × risque × paire d'activités | Chaque conflit relevé. | Les risques touchés et les processus concernés. |
| **Avérés par l'activité** — les deux activités en conflit réellement utilisées | Les utilisateurs qui ont utilisé les deux côtés d'un conflit, d'après le journal d'activité. | Les lignes de conflit avérées. |
| **Rôles impliqués** — rôles portant un côté d'un conflit | Les rôles en cause. | Les paires de rôles à l'origine des conflits. |

Un conflit est **avéré** quand le journal d'activité de l'utilisateur montre des transactions sur les objets des deux activités incompatibles : le risque n'est plus théorique. Cela suppose la collecte du journal d'activité.

---

## Tendance et détail \{#detail\}

| Widget | Contenu |
|---|---|
| **Conflits par rafraîchissement** | Les lignes de conflit à chaque rafraîchissement de la période, empilées par niveau de risque — la tendance de la remédiation. |
| **Risques touchés** | Les risques qui concernent le plus d'utilisateurs d'abord ; la pastille donne le niveau de risque — rouge pour élevé ou critique, orange pour moyen, bleu sinon. |
| **Paires de rôles** | Les paires de rôles qui créent le plus de conflits, avec les utilisateurs concernés : en rouge un conflit à l'intérieur d'un seul rôle — corriger le rôle règle le cas de tous ses titulaires —, en orange deux rôles détenus ensemble. |
| **Utilisateurs les plus en conflit** | Les utilisateurs porteurs du plus grand nombre de lignes de conflit, avec le nombre de processus ; les comptes à privilèges sont signalés. |
| **Par processus** | Les utilisateurs en conflit par processus métier. |
| **Analyser** | Les liens vers les écrans de conflits — Synthèse, Détails, Avérés, Utilisateurs, Rôles — et vers l'explorateur de données, où le modèle *Segregation of duties* permet d'aller plus loin. |

---

## Qui le voit \{#access\}

Chaque widget ne s'affiche que si l'utilisateur peut lancer sa requête, et le périmètre de données des rôles de l'utilisateur s'applique à chaque chiffre et à l'export.

---

## Voir aussi

- [Vue d'ensemble — Synthèse d'audit](./audit-synthesis.md) — la synthèse de toute l'application.
- [Revue de sécurité](./security-review.md) — les comptes et droits à revoir.
- [Tâches](./jobs.md) — rafraîchir les conflits : *Collecter la sécurité et la SoD*.
