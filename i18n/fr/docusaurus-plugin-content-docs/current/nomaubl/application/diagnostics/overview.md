---
title: Diagnostic
description: "La page Diagnostic de NomaUBL réunit erreurs et journaux en quatre vues d'une même page — Erreurs d'intégration, Journal des traitements, Anomalies et Journal serveur — chacune accordée séparément par rôle, les liens des tableaux de bord ouvrant directement la bonne vue."
keywords: [NomaUBL, diagnostic, erreurs d'intégration, journal des traitements, anomalies, journal serveur, erreurs, journaux, dépannage, rôles, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Diagnostic

**Diagnostic** est la page unique pour tout ce qui a échoué et tout ce que le serveur a consigné. Elle regroupe quatre vues, choisies dans une rangée de cartes compactes sous l'en-tête, chacune indiquant ce qu'elle montre (le texte complet au survol) ; seules les vues accordées au rôle s'affichent, et la rangée disparaît quand une seule vue reste :

| Vue | Question traitée | Page |
|---|---|---|
| **Erreurs d'intégration** | Quelles règles de validation échouent, sur quelles factures — par règle (vue par défaut) ou par événement. | [Erreurs d'intégration](./integration-errors.md) |
| **Journal des traitements** | Ce qu'a fait chaque traitement, fichier par fichier, étape par étape. | [Journal des traitements](./processing-log.md) |
| **Anomalies** | Toutes les anomalies dans une seule liste — validation, rejet PA, envoi et import, traitement, tâche — non résolues par défaut. | [Anomalies](./failures.md) |
| **Journal serveur** | La fin du fichier journal du serveur, avec filtres par niveau et par module. | [Journal serveur](./server-log.md) |

Accès : menu latéral, **Diagnostic**, dans le groupe Navigation.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 322" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dgo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dgo-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dgo-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="dgo-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="282" rx="14" fill="url(#dgo-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostic</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Erreurs, échecs et journaux de l'instance.</text>
  <rect x="240.0" y="80" width="172.5" height="40" rx="8" fill="rgba(255,69,58,0.08)" stroke="#f87171" strokeWidth="1.4"/>
  <rect x="250.0" y="89" width="20" height="20" rx="6" fill="#f87171" fillOpacity="0.18"/>
  <text x="278.0" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <text x="278.0" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Constats par règle, par événement…</text>
  <rect x="422.5" y="80" width="172.5" height="40" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="432.5" y="89" width="20" height="20" rx="6" fill="#4a9eff" fillOpacity="0.18"/>
  <text x="460.5" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journal des traitements</text>
  <text x="460.5" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Chaque exécution, fichiers, statut</text>
  <rect x="605.0" y="80" width="172.5" height="40" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="615.0" y="89" width="20" height="20" rx="6" fill="#fb923c" fillOpacity="0.18"/>
  <text x="643.0" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Anomalies</text>
  <text x="643.0" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Tous les échecs non résolus</text>
  <rect x="787.5" y="80" width="172.5" height="40" rx="8" fill="rgba(255,255,255,0.01)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="797.5" y="89" width="20" height="20" rx="6" fill="#8a93b0" fillOpacity="0.18"/>
  <text x="825.5" y="97" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Journal serveur</text>
  <text x="825.5" y="111" fill="#94a3b8" fontSize="7.6" fontFamily="system-ui, sans-serif">Par sévérité et module</text>
  <rect x="240" y="136" width="227" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="137" width="67" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="274.5" y="150.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Par règle</text>
  <line x1="309" y1="141" x2="309" y2="153" stroke="#334155" strokeWidth="1"/>
  <text x="353.5" y="150.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Par événement</text>
  <line x1="398" y1="141" x2="398" y2="153" stroke="#334155" strokeWidth="1"/>
  <text x="432.5" y="150.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Détaillée</text>
  <rect x="810" y="136" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="820" y="150.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 1 – 31 oct. 2026 ▾</text>
  <rect x="240" y="170" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLE</text>
  <text x="360" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURES</text>
  <text x="430" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="760" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="870" y="187.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAT</text>
  <rect x="240" y="202" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-CO-15</text>
  <text x="360" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24</text>
  <text x="430" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total TTC = total HT + TVA</text>
  <text x="760" y="218.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="870" y="207.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="893.0" y="218.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvert</text>
  <rect x="240" y="232" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <text x="360" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9</text>
  <text x="430" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">SIREN de l'acheteur obligatoire</text>
  <text x="760" y="248.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="870" y="237.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="893.0" y="248.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvert</text>
  <rect x="240" y="262" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-S-08</text>
  <text x="360" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="430" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Ventilation de la TVA par taux</text>
  <text x="760" y="278.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">credit_notes</text>
  <rect x="870" y="267.0" width="46" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="893.0" y="278.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvert</text>
  <rect x="20" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre cartes de vues</text>
  <text x="30" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">seulement les vues accordées</text>
  <line x1="200" y1="101.0" x2="240" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="20" y="176" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="191" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <text x="30" y="204" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">s'ouvre par règle</text>
  <line x1="200" y1="193.0" x2="240" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="84" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="99" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Survol d'une carte</text>
  <text x="1010" y="112" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sa description complète</text>
  <line x1="1000" y1="101.0" x2="950" y2="100" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="132" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="147" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Période</text>
  <text x="1010" y="160" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">période par défaut de la vue</text>
  <line x1="1000" y1="149.0" x2="960" y2="147" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
  <rect x="1000" y="206" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="221" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Grille commune</text>
  <text x="1010" y="234" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tri, colonnes, pages, export</text>
  <line x1="1000" y1="223.0" x2="950" y2="216" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dgo-arrow)"/>
</svg>

- **Un droit par vue.** Chaque vue garde le droit de page qu'elle avait avant de rejoindre Diagnostic : *Erreurs d'intégration*, *Journal des traitements*, *Journal serveur*, plus *Anomalies* pour la nouvelle vue. Un rôle ne voit que les vues qui lui sont accordées, et le menu affiche Diagnostic dès que l'une d'elles l'est. Voir [Rôles](../../configuration/security/roles.md).
- **Les liens ouvrent la bonne vue.** Les cartes du [tableau de bord](../dashboard.md) et du [tableau de bord IT](../tech-dashboard.md) ouvrent Diagnostic sur la vue correspondante, avec les mêmes filtres.
- **Une période par défaut par vue.** Chaque vue datée s'ouvre sur la [période par défaut](../../configuration/default-periods.md#default-periods) qui lui est attribuée (*Diagnostics*, *Integration errors*, *Processing log*), ce mois-ci si rien n'est réglé ; la période se change depuis sa barre.
- **Les erreurs d'intégration s'ouvrent par règle.** La grille par règle est la première lecture du matin ; la liste des événements s'obtient depuis la vue elle-même.

---

## Conseils & bonnes pratiques

- **Commencer par Anomalies** quand la question est « que faut-il corriger » : la vue réunit les quatre types d'anomalie et masque celles déjà résolues.
- **Passer aux Erreurs d'intégration** quand une règle de validation domine : la grille par règle regroupe les factures par règle et par source.
- **Le Journal des traitements pour un fichier, le Journal serveur pour le serveur** — un traitement en échec apparaît dans le premier, une exception ou un problème de connexion dans le second.
