---
title: Licences acquises
description: "Inventaire des licences acquises — quantités par composant couvertes par chaque CSI, regroupées par métrique et liste de prix."
keywords: [Nomasx-1, licences, licences acquises, droits, composants, CSI, métriques contractuelles]
---

# Licences acquises

L'écran **Licences acquises** agrège les quantités achetées sur chaque CSI Oracle par **liste de prix × composant × métrique**. Une ligne par `(CSI, Liste de prix, Composant, Métrique)`. Chaque ligne est le droit contractuel que Nomasx-1 compare à l'usage réel.

C'est la moitié *ce à quoi nous avons droit* de l'équation licence. *Rapport d'utilisation* montre ce que nous utilisons ; *Rapport financier* mesure le coût de l'écart.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 280" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="lsub-card-fr" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="40" y="40" width="920" height="220" rx="14" fill="url(#lsub-card-fr)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="60" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomasx-1 · Licences · Acquises</text>
  <line x1="40" y1="84" x2="960" y2="84" stroke="#1f2937" strokeWidth="1"/>

  <rect x="60" y="100" width="880" height="26" rx="5" fill="rgba(255,255,255,0.04)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">CSI</text>
  <text x="200" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">LISTE DE PRIX</text>
  <text x="370" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">COMPOSANT</text>
  <text x="640" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MÉTRIQUE</text>
  <text x="830" y="117" fill="#cbd5e1" fontSize="9" fontWeight="700" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">QUANTITÉ</text>

  <rect x="60" y="132" width="880" height="26" rx="5" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>
  <text x="200" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="370" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Financials</text>
  <text x="640" y="149" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="830" y="149" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">200</text>

  <rect x="60" y="164" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345678</text>
  <text x="200" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">JDE Foundation</text>
  <text x="370" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Distribution</text>
  <text x="640" y="181" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Application User</text>
  <text x="830" y="181" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">120</text>

  <rect x="60" y="196" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345910</text>
  <text x="200" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="370" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Oracle EE</text>
  <text x="640" y="213" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Named User Plus</text>
  <text x="830" y="213" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">250</text>

  <rect x="60" y="228" width="880" height="26" rx="5" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="72" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">12345910</text>
  <text x="200" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Database Tech</text>
  <text x="370" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Advanced Compression</text>
  <text x="640" y="245" fill="#cbd5e1" fontSize="10" fontFamily="ui-monospace, monospace">Processor</text>
  <text x="830" y="245" fill="#4a9eff" fontSize="10" fontFamily="ui-monospace, monospace" fontWeight="700">8</text>
</svg>

---

## Objectif de l'écran

Pour chaque CSI, synthétiser *ce que nous avons acheté* :

- **Une ligne par (Composant, Métrique).** Les quantités sont sommées sur les lignes `LICENSE_CSI_COMPONENTS` du CSI pour lire à la granularité contractuelle.
- **Vue par liste de prix.** L'axe *Liste de prix* permet de rapprocher chaque ligne du catalogue Oracle correspondant.
- **Mappage de métrique.** *Application User*, *Named User Plus*, *Processor*, *Employee*… La métrique guide la façon dont *Rapport d'utilisation* compare l'acquis à l'usage.

---

## Colonnes

| Colonne | Source | Ce qu'on y lit |
|---|---|---|
| **CSI ID** | `LCC_CSI_ID` — identifiant du contrat. Lié à l'écran *CSI*. | Contrat auquel le droit appartient. |
| **Liste de prix** | `CPT_LISTS` — libellé de la liste de prix. | Catalogue Oracle — le price book sous lequel le composant est commercialisé. |
| **Composant** | `CPT_COMPONENT` — nom lisible du composant. | Élément licencié (Financials, Oracle EE, Advanced Compression…). |
| **Métrique** | `LCC_MET_ID` — métrique de licensing. | Comment le composant est compté (Application User, NUP, Processor, Employee…). |
| **Quantité** | `LCC_QUANTITY` — quantité agrégée. | Droit contractuel sur la ligne. |

---

## Conseils & bonnes pratiques

- **Recouper avec *Rapport d'utilisation*** pour vérifier que chaque ligne est consommée à hauteur du droit ou en dessous.
- **Les quantités inférieures à l'usage de tête remontent comme non conformes dans *Rapport financier*** — l'écart est ce qu'il faut combler avant le prochain audit.
- **Une ligne à 0** signifie que le composant est suivi mais non licencié — typiquement un produit gratuit ou concédé. À confirmer côté procurement.
- **Plusieurs listes de prix pour le même composant** signalent une consolidation de CSI ou une commande complémentaire — maintenir l'alignement avec les achats.
