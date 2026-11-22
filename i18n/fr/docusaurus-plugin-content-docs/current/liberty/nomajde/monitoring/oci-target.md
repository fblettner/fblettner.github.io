---
title: Cible OCI
description: "Supervision → Cible OCI dans Nomajde : la plateforme JD Edwards EnterpriseOne proposée sur Oracle Cloud Infrastructure et son coût estimé — vos choix (devise, BYOL ou licence incluse, édition de la base, haute disponibilité, reprise d'activité, plateformes hors production), l'estimation par plateforme et ligne par ligne avec les références Oracle, les règles sur lesquelles elle repose, la liste de prix datée et le PDF de la cible OCI. Une estimation, pas un devis."
keywords: [Nomajde, JD Edwards, JDE E1, Oracle Cloud Infrastructure, OCI, migration vers le cloud, dimensionnement, estimation de coût, BYOL, licence incluse, Base Database Service, haute disponibilité, reprise d'activité, Data Guard, OCPU, ECPU, liste de prix, PDF]
---

# Cible OCI

**Supervision → Cible OCI** propose la plateforme JD Edwards EnterpriseOne sur **Oracle Cloud Infrastructure** et en chiffre le coût. La cible part de ce qu'est la plateforme aujourd'hui — les machines que trouve la lecture de l'[Architecture](./architecture.md) et leur taille telle que renseignée dans [Taille des serveurs](./server-sizes.md) — et elle est valorisée avec la liste de prix publique d'Oracle. Chaque choix fait sur la page (devise, licence de la base, haute disponibilité…) s'applique immédiatement.

:::warning[Une estimation, pas un devis]
Les montants sont les prix publics d'Oracle, à l'usage, sans remise ni engagement. Ils n'ont pas de valeur contractuelle. La page le rappelle en haut, sur son schéma et au-dessus de son tableau ; le PDF le rappelle sur sa couverture, au-dessus et au-dessous de son tableau et en pied de chaque page.
:::

---

## Vue d'ensemble

<svg viewBox="0 0 1200 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="noci-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="noci-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="noci-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="noci-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="18" width="760" height="538" rx="14" fill="url(#noci-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Cible OCI</text>
  <text x="240" y="63" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">La plateforme proposée sur Oracle Cloud Infrastructure et son coût estimé.</text>
  <rect x="907" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="933.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <rect x="734" y="34" width="165" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="816.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">L'obtenir en document (PDF)</text>
  <rect x="240" y="76" width="720" height="22" rx="5" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="250" y="90.5" fill="#4a9eff" fontSize="8.3" fontFamily="system-ui, sans-serif">Une estimation, pas un devis : prix publics d'Oracle, à l'usage, sans remise ni engagement. Elle n'est pas contractuelle.</text>
  <rect x="240" y="106" width="720" height="104" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="123" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VOS CHOIX</text>
  <line x1="240" y1="130" x2="960" y2="130" stroke="#1f2937" strokeWidth="1"/>
  <text x="252.0" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DEVISE</text>
  <rect x="252.0" y="151" width="222.66666666666666" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262.0" y="164.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">EUR ▾</text>
  <text x="488.66666666666663" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LICENCE DE LA BASE</text>
  <rect x="488.66666666666663" y="151" width="222.66666666666666" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="498.66666666666663" y="164.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">vos propres licences (BYOL) ▾</text>
  <text x="725.3333333333333" y="146" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ÉDITION DE LA BASE</text>
  <rect x="725.3333333333333" y="151" width="222.66666666666666" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="735.3333333333333" y="164.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Enterprise Edition ▾</text>
  <text x="252" y="186" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PLATEFORMES HORS PRODUCTION</text>
  <rect x="252" y="190" width="222.66666666666666" height="16" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="262" y="201.5" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">1</text>
  <rect x="488.66666666666663" y="179" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M491.16666666666663,184.5 L493.46666666666664,186.8 L497.46666666666664,182" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="505.66666666666663" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Haute disponibilité</text>
  <text x="488.66666666666663" y="202" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">serveurs web et d'entreprise doublés, une base de secours</text>
  <rect x="725.3333333333333" y="179" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="742.3333333333333" y="188" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Site de reprise d'activité</text>
  <text x="725.3333333333333" y="202" fill="#64748b" fontSize="7" fontFamily="system-ui, sans-serif">une base de secours dans une seconde région</text>
  <rect x="240" y="218" width="356.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="238" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">2 480 €</text>
  <text x="250" y="250" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">PAR MOIS, ESTIMÉ</text>
  <rect x="604.0" y="218" width="356.0" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="614.0" y="238" fill="#c084fc" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">29 760 €</text>
  <text x="614.0" y="250" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">PAR AN, ESTIMÉ</text>
  <rect x="240.0" y="264" width="234.66666666666666" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="284" fill="#4ade80" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">1 560 €</text>
  <text x="250.0" y="294" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">PRODUCTION · PAR MOIS</text>
  <rect x="482.66666666666663" y="264" width="234.66666666666666" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="492.66666666666663" y="284" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">610 €</text>
  <text x="492.66666666666663" y="294" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">HORS PRODUCTION 1 · PAR MOIS</text>
  <rect x="725.3333333333333" y="264" width="234.66666666666666" height="38" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="735.3333333333333" y="284" fill="#4a9eff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">310 €</text>
  <text x="735.3333333333333" y="294" fill="#64748b" fontSize="7.2" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">COMMUN À TOUTES LES PLATEFORMES · PAR MOIS</text>
  <rect x="240" y="308" width="720" height="72" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="325" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LA PRODUCTION TELLE QUE PROPOSÉE</text>
  <line x1="240" y1="332" x2="960" y2="332" stroke="#1f2937" strokeWidth="1"/>
  <rect x="252.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="252.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="262.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEB ET AIS</text>
  <text x="262.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">2 × 2 OCPU · 30 Go</text>
  <line x1="410.0" y1="356" x2="430.0" y2="356" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#noci-flow)"/>
  <rect x="432.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="432.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="442.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">SERVEURS D'ENTREPRISE</text>
  <text x="442.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">2 × 4 OCPU · 32 Go</text>
  <line x1="590.0" y1="356" x2="610.0" y2="356" stroke="#64748b" strokeWidth="1.4" markerEnd="url(#noci-flow)"/>
  <rect x="612.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="612.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="622.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">BASE DE DONNÉES</text>
  <text x="622.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">16 ECPU · 32 Go</text>
  <rect x="792.0" y="340" width="156.0" height="32" rx="5" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="792.0" y="340" width="3" height="32" fill="#4ade80"/>
  <text x="802.0" y="353" fill="#94a3b8" fontSize="7.2" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ADMINISTRATION</text>
  <text x="802.0" y="366" fill="#e2e8f0" fontSize="8.2" fontFamily="system-ui, sans-serif">Déploiement · Server Manager</text>
  <rect x="240" y="388" width="720" height="120" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="405" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">L'ESTIMATION, LIGNE PAR LIGNE</text>
  <line x1="240" y1="412" x2="960" y2="412" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUI EST FACTURÉ</text>
  <text x="590" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">QUANTITÉ</text>
  <text x="720" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RÉFÉRENCE ORACLE</text>
  <text x="870" y="426" fill="#64748b" fontSize="7.2" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PAR MOIS</text>
  <rect x="252" y="433" width="696" height="15" fill="rgba(255,255,255,0.04)"/>
  <text x="260" y="444" fill="#94a3b8" fontSize="7.5" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">PRODUCTION</text>
  <text x="940" y="444" fill="#e2e8f0" fontSize="8" fontWeight="700" textAnchor="end" fontFamily="system-ui, sans-serif">1 560 €</text>
  <text x="260" y="461" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Serveur web et AIS — machines virtuelles</text>
  <text x="590" y="461" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">2 × 2 OCPU, 30 Go</text>
  <text x="720" y="461" fill="#94a3b8" fontSize="7.8" fontFamily="ui-monospace, monospace">B97384 + B97385</text>
  <text x="940" y="461" fill="#e2e8f0" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">166 €</text>
  <text x="260" y="478" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Base de données — Base Database Service, Enterprise Edition, vos pro…</text>
  <text x="590" y="478" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">16 ECPU (32 Go)</text>
  <text x="720" y="478" fill="#94a3b8" fontSize="7.8" fontFamily="ui-monospace, monospace">B112728 + B112724</text>
  <text x="940" y="478" fill="#e2e8f0" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">814 €</text>
  <text x="260" y="495" fill="#e2e8f0" fontSize="8" fontFamily="system-ui, sans-serif">Répartiteur de charge</text>
  <text x="590" y="495" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">1 × 100 Mbps</text>
  <text x="720" y="495" fill="#94a3b8" fontSize="7.8" fontFamily="ui-monospace, monospace">B93030 + B93031</text>
  <text x="940" y="495" fill="#e2e8f0" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">28 €</text>
  <text x="240" y="516" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Sur quoi repose l'estimation — chaque règle, ce qui n'était pas connu, ce qui n'est pas compris</text>
  <rect x="781" y="503" width="179" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="870.5" y="515.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Renseigner la taille des serveurs</text>
  <text x="240" y="538" fill="#64748b" fontSize="8.3" fontFamily="system-ui, sans-serif">Liste de prix publique d'Oracle du 2026-11-02 — telle que livrée avec l'application.</text>
  <rect x="805" y="525" width="155" height="18" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="882.5" y="537.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Récupérer les prix à nouveau</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une estimation, pas un devis</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en haut, sur le schéma, le tableau</text>
  <line x1="200" y1="87.0" x2="240" y2="87" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="140" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="155" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vos choix</text>
  <text x="30" y="168" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacun appliqué aussitôt</text>
  <line x1="200" y1="157.0" x2="252" y2="160" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="222" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="237" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Par mois · par an</text>
  <text x="30" y="250" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis par plateforme</text>
  <line x1="200" y1="239.0" x2="240" y2="238" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="330" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="345" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La production dessinée</text>
  <text x="30" y="358" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">niveaux, tailles, administration</text>
  <line x1="200" y1="347.0" x2="252" y2="352" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="20" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ligne par ligne</text>
  <text x="30" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">quantité, référence, montant</text>
  <line x1="200" y1="457.0" x2="260" y2="460" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">L'obtenir en document</text>
  <text x="1010" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">le PDF de la cible OCI</text>
  <line x1="1000" y1="77.0" x2="816.5" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="150" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">HA · reprise d'activité</text>
  <text x="1010" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">serveurs doublés, base de secours</text>
  <line x1="1000" y1="167.0" x2="736.3333333333333" y2="184" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="440" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="455" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Références Oracle</text>
  <text x="1010" y="468" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">issues du fichier de prix daté</text>
  <line x1="1000" y1="457.0" x2="780" y2="470" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="496" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="511" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Renseigner la taille</text>
  <text x="1010" y="524" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre Taille des serveurs</text>
  <line x1="1000" y1="513.0" x2="960" y2="512" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
  <rect x="1000" y="538" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="553" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Récupérer les prix</text>
  <text x="1010" y="566" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">liste publique d'Oracle</text>
  <line x1="1000" y1="555.0" x2="960" y2="534" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#noci-arrow)"/>
</svg>

---

## La cible \{#target\}

La proposition garde séparés les trois niveaux de JD Edwards, sur des machines virtuelles Linux, avec la base sur Base Database Service :

| Niveau | Proposé sous la forme de |
|---|---|
| **Web et AIS** | Machines virtuelles qui portent les instances web et AIS. |
| **Serveurs d'entreprise** | Machines virtuelles qui portent les serveurs d'entreprise. |
| **Base de données** | **Base Database Service**, facturé à l'ECPU, avec son stockage et ses sauvegardes en stockage objet. |
| **Administration** | Un serveur de déploiement (Windows) et Server Manager sur une petite machine dédiée (optionnel), **communs à toutes les plateformes**. |

La **production** est dimensionnée à l'identique de ce qu'est chaque serveur aujourd'hui : un cœur physique vaut un OCPU (un cœur et ses deux threads, soit 2 vCPU), la mémoire est conservée, et aucun serveur ne descend sous le minimum publié par Oracle pour JD Edwards sur OCI (2 OCPU, 30 Go). Une machine qui porte aujourd'hui plusieurs niveaux est répartie entre eux au prorata de leur taille standard. Chaque plateforme **hors production** compte un serveur web, un serveur d'entreprise et une base, à ce minimum, allumés tout le mois.

Les chiffres de la production viennent de [Taille des serveurs](./server-sizes.md) : renseignés, mesurés par la base ou issus de la configuration standard. Un serveur sans taille renseignée ni mesurée est cité dans [Sur quoi repose l'estimation](#rests-on).

---

## Vos choix \{#choices\}

| Choix | Valeurs | Par défaut |
|---|---|---|
| **Devise** | Les devises de la liste de prix d'Oracle. | EUR |
| **Licence de la base** | **vos propres licences (BYOL)** ou **licence incluse**. | BYOL |
| **Édition de la base** | Standard Edition, Enterprise Edition, Enterprise Edition High Performance. | Enterprise Edition |
| **Plateformes hors production** | De 0 à 12. | 1 |
| **Haute disponibilité** | Serveurs web et d'entreprise doublés derrière un répartiteur de charge, et une base de secours (Data Guard) dans la même région. | Non |
| **Site de reprise d'activité** | Une base de secours de même taille dans une seconde région ; les disques des serveurs d'application y sont répliqués et les serveurs ne sont démarrés qu'en cas de besoin — leurs processeurs ne sont pas facturés d'ici là. | Non |

Standard Edition ne dispose pas de Data Guard : avec la haute disponibilité ou un site de reprise, aucune base de secours n'est proposée et la protection de la base repose sur ses sauvegardes. Avec vos propres licences, les licences de base de données détenues doivent couvrir les ECPU proposés — le ratio de conversion d'Oracle figure dans ses *Universal Credits Service Descriptions*, à vérifier avec le contrat.

La page garde les choix en mémoire dans le navigateur. **Relire** relit la plateforme ; un choix modifié ne fait que recalculer l'estimation.

---

## L'estimation \{#estimate\}

Deux montants d'abord — **par mois, estimé** et **par an, estimé** — puis un par plateforme : *Production*, *Hors production 1*, *Hors production 2*…, *Commun à toutes les plateformes* et, avec un site de reprise, *Site de reprise d'activité*.

**La production telle que proposée** dessine la plateforme de production : les niveaux de gauche à droite, chaque machine avec ses OCPU et sa mémoire (la base avec ses ECPU), les serveurs d'administration, et la seconde région s'il y en a une.

**L'estimation, ligne par ligne** détaille, par plateforme, ce qui est facturé :

| Colonne | Contenu |
|---|---|
| **Ce qui est facturé** | Machines virtuelles, disques, licence Windows, Base Database Service (édition et licence), stockage de la base, sauvegardes de la base, répartiteur de charge, disques répliqués. |
| **Quantité** | Par exemple `2 × 2 OCPU, 30 Go`, `16 ECPU (32 Go)`, `256 Go`. |
| **Référence Oracle** | Les références Oracle de la ligne (`B97384 + B97385` pour les OCPU et la mémoire d'une machine virtuelle). |
| **Par mois** | Le montant du mois ; l'en-tête de chaque plateforme porte son total, la dernière ligne le total général. |

---

## Sur quoi repose l'estimation \{#rests-on\}

Sous le tableau, chaque règle qui s'applique à la cible est écrite en clair :

- le dimensionnement à l'identique et le minimum d'Oracle par serveur ;
- le dimensionnement de la base : 4 ECPU valent un cœur et apportent 8 Go de mémoire, sa taille est donc la plus grande de ce que demandent ses cœurs et sa mémoire, jamais moins de 8 ECPU ;
- son stockage — deux fois sa taille actuelle, par paliers de 256 Go — et ses sauvegardes en stockage objet, deux fois sa taille ;
- les serveurs dont la taille n'est ni renseignée ni mesurée, nommément, avec le conseil de les renseigner ;
- le dimensionnement ne tient pas compte de la charge : les pics conservés par les relevés ([Synthèse de la plateforme → Capacité](../synthesis.md#capacity)) indiquent si un niveau peut être réduit ou doit grandir ;
- la haute disponibilité, le site de reprise et les plateformes hors production quand ils sont choisis ;
- les serveurs communs — les lignes de Server Manager peuvent être retirées du total s'il est installé sur un autre serveur ;
- un mois compte 744 heures, les disques sont en performance équilibrée, les machines virtuelles sont de forme x86 standard (E5) ;
- **ce qui n'est pas compris** : le réseau (VPN ou FastConnect, données sortantes au-delà de la franchise), le support Oracle des licences JD Edwards et base de données, les licences JD Edwards elles-mêmes, le travail de migration, les franchises gratuites.

**Renseigner la taille des serveurs** ouvre [Taille des serveurs](./server-sizes.md).

---

## Les prix \{#prices\}

Les prix viennent d'un fichier daté livré avec l'application : le bas de la page indique la liste utilisée (*Liste de prix publique d'Oracle du 2026-11-02 — telle que livrée avec l'application*, ou *récupérée le …*). **Récupérer les prix à nouveau** lit la liste de prix publique d'Oracle et la conserve ; la page est alors recalculée avec elle. C'est le seul appel que la page fait vers l'extérieur, et il n'envoie rien sur la plateforme.

---

## L'obtenir en document \{#document\}

**L'obtenir en document (PDF)** produit la cible OCI en PDF, avec les choix faits sur la page et dans la langue de la page : l'estimation par plateforme et ligne par ligne avec les références Oracle, les serveurs proposés, la production dessinée sur une page à l'italienne, et chaque règle sur laquelle repose l'estimation.

Le même document figure sur la page **Rapports** (*JD Edwards on Oracle Cloud Infrastructure — target and estimate*), qui demande en paramètres la langue, le nom du client inscrit sur la couverture et chacun des choix. Le rapport de [Synthèse de la plateforme](../synthesis.md#report) peut aussi intégrer la cible OCI en chapitre.

---

## Accès \{#access\}

La page s'affiche pour les rôles qui détiennent son entrée de menu et lit avec `plugin:nomajde.oci:*` ; le PDF demande le droit d'exécuter les rapports de l'application. Les rôles prédéfinis **Exploitant de la plateforme** et **Administrateur** détiennent les deux (voir [Rôles prédéfinis](../overview.md#roles)).

Elle lit Server Manager par le pool `jde_server_manager` (voir [Server Manager](./server-manager.md#connection)) et la base de JD Edwards. Une source qui ne répond pas est signalée par un avertissement (*Non lu — …*).

---

## Conseils & bonnes pratiques \{#tips\}

- Renseigner la taille de chaque serveur dans [Taille des serveurs](./server-sizes.md) avant de diffuser une estimation : une cible bâtie sur la seule configuration standard ne chiffre que le minimum.
- Activer la tâche *Relevé de la plateforme* (voir [Tâches](../jobs.md)) quelques semaines avant un dimensionnement : les pics qu'elle conserve indiquent si la production peut être réduite ou doit grandir.
- Comparer les options plutôt qu'un seul montant : BYOL face à licence incluse, avec et sans haute disponibilité.
- Récupérer les prix à nouveau avant une réunion : Oracle fait évoluer sa liste.

---

## Voir aussi

- [Taille des serveurs](./server-sizes.md) — ce à partir de quoi la production est dimensionnée.
- [Synthèse de la plateforme](../synthesis.md) — capacité, améliorations et rapport de plateforme.
- [Architecture](./architecture.md) — les machines dont part la cible.
