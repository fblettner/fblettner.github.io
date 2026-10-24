---
title: Diagnostic
description: "La page Diagnostic de NomaUBL réunit erreurs et journaux en quatre vues d'une même page — Erreurs d'intégration, Journal des traitements, Anomalies et Journal serveur — chacune accordée séparément par rôle, les liens des tableaux de bord ouvrant directement la bonne vue."
keywords: [NomaUBL, diagnostic, erreurs d'intégration, journal des traitements, anomalies, journal serveur, erreurs, journaux, dépannage, rôles, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Diagnostic

**Diagnostic** est la page unique pour tout ce qui a échoué et tout ce que le serveur a consigné. Elle regroupe quatre vues, choisies par un sélecteur en haut de page :

| Vue | Question traitée | Page |
|---|---|---|
| **Erreurs d'intégration** | Quelles règles de validation échouent, sur quelles factures — par règle (vue par défaut) ou par événement. | [Erreurs d'intégration](./integration-errors.md) |
| **Journal des traitements** | Ce qu'a fait chaque traitement, fichier par fichier, étape par étape. | [Journal des traitements](./processing-log.md) |
| **Anomalies** | Toutes les anomalies dans une seule liste — validation, rejet PA, envoi et import, traitement, tâche — non résolues par défaut. | [Anomalies](./failures.md) |
| **Journal serveur** | La fin du fichier journal du serveur, avec filtres par niveau et par module. | [Journal serveur](./server-log.md) |

Accès : menu latéral, **Diagnostic**, dans le groupe Navigation.

---

## Vue d'ensemble

<svg viewBox="0 0 1200 346" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="dg-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="dg-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="760" height="302" rx="14" fill="url(#dg-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Diagnostic</text>
  <text x="240" y="66" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">Erreurs d'intégration par règle ou par événement, toutes les anomalies, journal des traitements et journal serveur.</text>
  <rect x="240" y="80" width="475" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="81" width="139" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="310.5" y="95.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Erreurs d'intégration</text>
  <line x1="381" y1="85" x2="381" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="457.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal des traitements</text>
  <line x1="533" y1="85" x2="533" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="570.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Anomalies</text>
  <line x1="607" y1="85" x2="607" y2="99" stroke="#334155" strokeWidth="1"/>
  <text x="661.0" y="95.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Journal serveur</text>
  <rect x="850" y="80" width="110" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="860" y="95.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">📅 Hier ▾</text>
  <rect x="240" y="118" width="235" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="241" y="119" width="69" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="275.5" y="132.5" fill="#4a9eff" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Par règle</text>
  <line x1="311" y1="123" x2="311" y2="135" stroke="#334155" strokeWidth="1"/>
  <text x="357.5" y="132.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Par événement</text>
  <line x1="404" y1="123" x2="404" y2="135" stroke="#334155" strokeWidth="1"/>
  <text x="439.5" y="132.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Détaillée</text>
  <rect x="489" y="120" width="48" height="18" rx="9.0" fill="rgba(74,158,255,0.18)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="513.0" y="132.2" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">UBL 38</text>
  <rect x="543" y="120" width="83" height="18" rx="9.0" fill="rgba(255,255,255,0.06)" stroke="#334155" strokeWidth="1"/>
  <text x="584.5" y="132.2" fill="#94a3b8" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Intégration 4</text>
  <rect x="240" y="154" width="720" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÈGLE</text>
  <text x="350" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">FACTURES</text>
  <text x="420" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DESCRIPTION</text>
  <text x="750" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MODÈLE</text>
  <text x="860" y="171.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉTAT</text>
  <rect x="240" y="186" width="720" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-CO-15</text>
  <text x="350" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">24</text>
  <text x="420" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Total TTC = total HT + TVA</text>
  <text x="750" y="202.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="860" y="191.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="883.0" y="202.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvert</text>
  <rect x="240" y="216" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-FR-12</text>
  <text x="350" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">9</text>
  <text x="420" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">SIREN de l'acheteur obligatoire</text>
  <text x="750" y="232.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="860" y="221.0" width="46" height="16" rx="8.0" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="883.0" y="232.2" fill="#f87171" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvert</text>
  <rect x="240" y="246" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">BR-S-08</text>
  <text x="350" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">5</text>
  <text x="420" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Ventilation de TVA par taux</text>
  <text x="750" y="262.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">credit_notes</text>
  <rect x="860" y="251.0" width="46" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="883.0" y="262.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Ouvert</text>
  <rect x="240" y="276" width="720" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">XSD</text>
  <text x="350" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">4</text>
  <text x="420" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Élément hors séquence</text>
  <text x="750" y="292.5" fill="#cbd5e1" fontSize="9.5" fontFamily="ui-monospace, monospace">invoices</text>
  <rect x="860" y="281.0" width="46" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="883.0" y="292.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Résolu</text>
  <rect x="20" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre vues, une page</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un droit par vue</text>
  <line x1="200" y1="93.0" x2="240" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par règle d'abord</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la lecture du matin</text>
  <line x1="200" y1="217.0" x2="280" y2="129" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="20" y="280" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="295" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Description de la règle</text>
  <text x="30" y="308" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tirée des Schematron</text>
  <line x1="200" y1="297.0" x2="420" y2="252" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="1000" y="76" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Hier par défaut</text>
  <text x="1010" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">période modifiable ici</text>
  <line x1="1000" y1="93.0" x2="960" y2="92" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
  <rect x="1000" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Table de données partagée</text>
  <text x="1010" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">tri, colonnes, pagination, export</text>
  <line x1="1000" y1="217.0" x2="960" y2="196" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#dg-arrow)"/>
</svg>

- **Un droit par vue.** Chaque vue garde le droit de page qu'elle avait avant de rejoindre Diagnostic : *Erreurs d'intégration*, *Journal des traitements*, *Journal serveur*, plus *Anomalies* pour la nouvelle vue. Un rôle ne voit que les vues qui lui sont accordées, et le menu affiche Diagnostic dès que l'une d'elles l'est. Voir [Rôles](../../configuration/security/roles.md).
- **Les liens ouvrent la bonne vue.** Les cartes du [tableau de bord](../dashboard.md) et du [tableau de bord IT](../tech-dashboard.md) ouvrent Diagnostic sur la vue correspondante, avec les mêmes filtres.
- **Hier par défaut.** Chaque vue datée démarre sur l'activité de la veille ; la période se change depuis sa barre.
- **Les erreurs d'intégration s'ouvrent par règle.** La grille par règle est la première lecture du matin ; la liste des événements s'obtient depuis la vue elle-même.

---

## Conseils & bonnes pratiques

- **Commencer par Anomalies** quand la question est « que faut-il corriger » : la vue réunit les quatre types d'anomalie et masque celles déjà résolues.
- **Passer aux Erreurs d'intégration** quand une règle de validation domine : la grille par règle regroupe les factures par règle et par source.
- **Le Journal des traitements pour un fichier, le Journal serveur pour le serveur** — un traitement en échec apparaît dans le premier, une exception ou un problème de connexion dans le second.
