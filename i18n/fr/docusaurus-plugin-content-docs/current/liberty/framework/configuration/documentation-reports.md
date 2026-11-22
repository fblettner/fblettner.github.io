---
title: Rapports de documentation
description: "Liberty Next → Documenter → Rapports de documentation : le rapport d'implémentation (documentation technique et fonctionnelle de l'installation) et le rapport technique (modèle de données, configuration, API), produits en PDF ou en Markdown à partir de l'installation en vigueur, sections à cocher, langue et libellé de date, secrets masqués."
keywords: [Liberty Next, rapports de documentation, rapport d'implémentation, rapport technique, PDF, Markdown, modèle de données, configuration, API, livrable]
---

# Rapports de documentation

**Liberty Next → Documenter → Rapports de documentation** rédige la documentation de l'installation telle qu'elle est — un livrable de projet, une passation, un audit de la configuration — en PDF ou en Markdown. Réservé aux superutilisateurs.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 524" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="docrep-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="docrep-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="docrep-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="docrep-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="484" rx="14" fill="url(#docrep-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="32" width="14" height="14" rx="3" fill="none" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="258" y="44" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Rapports de documentation</text>
  <text x="258" y="59" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Le framework documenté en PDF ou en Markdown : le rapport d'implémentation décrit cette installation, le rapport technique la version.</text>
  <line x1="220" y1="68" x2="1100" y2="68" stroke="#1f2937" strokeWidth="1"/>
  <rect x="236.0" y="82" width="419.0" height="40" rx="8" fill="rgba(74,158,255,0.08)" stroke="#c084fc" strokeWidth="1.2"/>
  <rect x="245.0" y="92" width="20" height="20" rx="5" fill="#c084fc" fillOpacity="0.18"/>
  <circle cx="255.0" cy="102" r="4" fill="none" stroke="#c084fc" strokeWidth="1.4"/>
  <text x="272.0" y="99" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport d'implémentation</text>
  <text x="272.0" y="112" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Documentation technique et fonctionnelle de l'installation</text>
  <rect x="665.0" y="82" width="419.0" height="40" rx="8" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="674.0" y="92" width="20" height="20" rx="5" fill="#4ade80" fillOpacity="0.18"/>
  <circle cx="684.0" cy="102" r="4" fill="none" stroke="#4ade80" strokeWidth="1.4"/>
  <text x="701.0" y="99" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Rapport technique</text>
  <text x="701.0" y="112" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Documentation développeur : modèle de données, configuration, API</text>
  <rect x="236" y="134" width="270" height="230" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="156" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Réglages</text>
  <text x="250" y="174" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">Documentation technique et fonctionnelle de l'installation</text>
  <text x="250" y="196" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LANGUE</text>
  <rect x="250" y="202" width="131" height="24" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="251" y="203" width="66" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="284.0" y="217.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Français</text>
  <line x1="318" y1="207" x2="318" y2="221" stroke="#334155" strokeWidth="1"/>
  <text x="349.5" y="217.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">English</text>
  <text x="250" y="246" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ DE DATE (PAGE DE GARDE)</text>
  <rect x="250" y="252" width="242" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="260" y="266.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif">par défaut : aujourd’hui</text>
  <rect x="518" y="134" width="566" height="230" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="532" y="156" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Contenu</text>
  <text x="1070" y="156" fill="#94a3b8" fontSize="8.5" textAnchor="end" fontFamily="system-ui, sans-serif">9 sections sur 11   Toutes   Aucune</text>
  <rect x="532.0" y="168" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="176" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,181.5 L546.8,183.8 L550.8,179" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="185" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Contexte</text>
  <rect x="806.0" y="168" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="176" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,181.5 L820.8,183.8 L824.8,179" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="185" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Architecture</text>
  <rect x="532.0" y="200" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="208" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,213.5 L546.8,215.8 L550.8,211" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="217" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Applications et menus</text>
  <rect x="806.0" y="200" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="208" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,213.5 L820.8,215.8 L824.8,211" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="217" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Écrans</text>
  <rect x="532.0" y="232" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="240" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,245.5 L546.8,247.8 L550.8,243" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Connecteurs et pools</text>
  <rect x="806.0" y="232" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="240" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,245.5 L820.8,247.8 L824.8,243" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="249" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Tableaux de bord et Explorateur</text>
  <rect x="532.0" y="264" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="272" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,277.5 L546.8,279.8 L550.8,275" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="281" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Exploitation</text>
  <rect x="806.0" y="264" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="816.0" y="272" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M818.5,277.5 L820.8,279.8 L824.8,275" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="833.0" y="281" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Sécurité</text>
  <rect x="532.0" y="296" width="264.0" height="26" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="542.0" y="304" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M544.5,309.5 L546.8,311.8 L550.8,307" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="559.0" y="313" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Référentiels</text>
  <rect x="806.0" y="296" width="264.0" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="816.0" y="304" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="833.0" y="313" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Annexe : réglages</text>
  <rect x="532.0" y="328" width="264.0" height="26" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <rect x="542.0" y="336" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="559.0" y="345" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Annexe : référence de l'API</text>
  <rect x="236" y="376" width="848" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="250" y="385" width="128" height="22" rx="5" fill="url(#docrep-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="314.0" y="399.5" fill="#e2e8f0" fontSize="9.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Télécharger le PDF</text>
  <rect x="386" y="385" width="75" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="423.5" y="399.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">⤓ Markdown</text>
  <rect x="236" y="428" width="848" height="62" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="448" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Copies conservées</text>
  <text x="1070" y="448" fill="#94a3b8" fontSize="8" textAnchor="end" fontFamily="system-ui, sans-serif">Chaque rapport généré est conservé sur le serveur (.reports à côté de la configuration)</text>
  <text x="250" y="472" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">implementation-2026-11-21.pdf</text>
  <text x="480" y="472" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">jdoe · Français · 9 sections</text>
  <rect x="880" y="460" width="77" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="918.5" y="474.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Télécharger</text>
  <rect x="964" y="460" width="112" height="22" rx="5" fill="rgba(255,69,58,0.08)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="1020.0" y="474.5" fill="#f87171" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Supprimer la copie</text>
  <rect x="20" y="70" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="85" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux rapports</text>
  <text x="30" y="98" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">une carte chacun</text>
  <line x1="200" y1="87.0" x2="236" y2="102" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="20" y="200" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="215" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Langue, libellé de date</text>
  <text x="30" y="228" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">de la page de garde</text>
  <line x1="200" y1="217.0" x2="250" y2="214" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="20" y="340" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="355" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">PDF ou Markdown</text>
  <text x="30" y="368" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">secrets masqués</text>
  <line x1="200" y1="357.0" x2="250" y2="396" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="1120" y="170" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="185" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sections à cocher</text>
  <text x="1130" y="198" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Tout / Aucune, annexes à la demande</text>
  <line x1="1120" y1="187.0" x2="1084" y2="309" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
  <rect x="1120" y="420" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="435" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copies conservées</text>
  <text x="1130" y="448" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retélécharger, ou supprimer</text>
  <line x1="1120" y1="437.0" x2="1084" y2="472" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#docrep-arrow)"/>
</svg>

---

## Les deux rapports \{#reports\}

| Rapport | Pour | Sections |
|---|---|---|
| **Rapport d'implémentation** — documentation technique et fonctionnelle de l'installation | L'équipe projet, le client. | Contexte, Architecture, Applications et menus, Écrans, Connecteurs et pools, Tableaux de bord et Explorateur, Exploitation, Sécurité, Référentiels ; à la demande, les annexes *Réglages* — toutes les valeurs, secrets masqués — et *Référence de l'API*. |
| **Rapport technique** — documentation développeur | Ceux qui maintiennent l'installation. | Périmètre, Architecture, Modèle de données, Référence de configuration, Référence de l'API, Ligne de commande, Compilation et paquetage, Annexe : références dans le code. |

---

## En produire un \{#run\}

1. Ouvrir la carte du rapport.
2. Cocher les sections — **Toutes** / **Aucune** — ; le compteur indique *N sections sur M*. Le rapport technique propose deux options : détailler chaque route de l'API, et inclure les extraits de code en annexe — long.
3. Sous **Réglages**, choisir la **Langue** — *Français* ou *English* — et, au besoin, le **Libellé de date** de la page de garde ; par défaut, la date du jour.
4. **Télécharger le PDF**, ou **Markdown** pour le retravailler.

Toute valeur dont le nom désigne un secret — mots de passe, clés, jetons — est masquée, de même que les adresses de connexion.

## Copies conservées \{#copies\}

Chaque rapport produit est aussi conservé sur le serveur, à côté de la configuration — une sauvegarde l'emporte donc. Sous **Copies conservées**, la page du rapport les liste avec leur auteur, la langue et le nombre de sections : **Télécharger** en récupère une, **Supprimer la copie** retire le fichier du serveur. Les copies restent jusqu'à leur suppression ; la page [Rétention](../../monitoring/retention.md) en indique le nombre et la taille.

---

## Voir aussi

- [Référence développeur](./developer-reference.md) — les mêmes informations, à parcourir.
