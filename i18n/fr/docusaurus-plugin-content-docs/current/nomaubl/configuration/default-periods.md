---
title: Sélecteur de période, navigation et listes
description: "Le sélecteur de période de NomaUBL, commun aux tableaux de bord et aux listes — dix périodes prédéfinies, un calendrier sur deux mois, la base de date de chaque page, le switch Exclure les erreurs traitées — et le paramétrage des périodes par défaut, qui fixe la période d'ouverture de chaque page, pour toutes les vues ou vue par vue."
keywords: [NomaUBL, sélecteur de période, plage de dates, période par défaut, Ce mois-ci, Hier, base de date, date document, date d'activité, date d'archivage, exclure les erreurs traitées, paramètres, vues, JD Edwards, SAP, NetSuite, ERP personnalisé]
---

# Sélecteur de période, navigation et listes

Les tableaux de bord et les listes de NomaUBL partagent un même **sélecteur de période** : mêmes périodes prédéfinies, même calendrier et, quand la page le propose, le choix de la **date** sur laquelle la période s'applique. La période d'ouverture de chaque page se règle une fois pour l'instance dans **Paramètres → Views & UI → Navigation & lists** — pour toutes les vues, puis vue par vue quand une équipe en a besoin.

---

## Sélecteur de période \{#period-picker\}

<svg viewBox="0 0 1200 374" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="per-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="per-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="per-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="per-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="334" rx="14" fill="url(#per-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">Sélecteur de période</text>
  <rect x="240" y="56" width="223" height="22" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="351.5" y="70.5" fill="#4a9eff" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">📅 1 – 31 oct. 2026 · Date document ▾</text>
  <rect x="240" y="88" width="720" height="250" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="113" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Aujourd'hui</text>
  <text x="260" y="133" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Hier</text>
  <text x="260" y="153" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">7 derniers jours</text>
  <text x="260" y="173" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">30 derniers jours</text>
  <rect x="250" y="180" width="140" height="18" rx="4" fill="rgba(74,158,255,0.18)"/>
  <text x="260" y="193" fill="#4a9eff" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Ce mois-ci</text>
  <text x="260" y="213" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Mois dernier</text>
  <text x="260" y="233" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Ce trimestre</text>
  <text x="260" y="253" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Cette année</text>
  <text x="260" y="273" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">12 derniers mois</text>
  <text x="260" y="293" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Tout</text>
  <text x="535" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Septembre 2026</text>
  <text x="430" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <text x="462" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <text x="494" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <text x="526" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <text x="558" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">V</text>
  <text x="590" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <text x="622" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">D</text>
  <text x="462" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <text x="494" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <text x="526" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <text x="558" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <text x="590" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <text x="622" y="150" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">6</text>
  <text x="430" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">7</text>
  <text x="462" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8</text>
  <text x="494" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">9</text>
  <text x="526" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <text x="558" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">11</text>
  <text x="590" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">12</text>
  <text x="622" y="172" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13</text>
  <text x="430" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">14</text>
  <text x="462" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">15</text>
  <text x="494" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">16</text>
  <text x="526" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">17</text>
  <text x="558" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">18</text>
  <text x="590" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">19</text>
  <text x="622" y="194" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">20</text>
  <text x="430" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">21</text>
  <text x="462" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">22</text>
  <text x="494" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">23</text>
  <text x="526" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">24</text>
  <text x="558" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">25</text>
  <text x="590" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">26</text>
  <text x="622" y="216" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">27</text>
  <text x="430" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">28</text>
  <text x="462" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">29</text>
  <text x="494" y="238" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">30</text>
  <text x="805" y="110" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Octobre 2026</text>
  <text x="700" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">L</text>
  <text x="732" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <text x="764" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">M</text>
  <text x="796" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">J</text>
  <text x="828" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">V</text>
  <text x="860" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">S</text>
  <text x="892" y="130" fill="#64748b" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">D</text>
  <circle cx="796" cy="147" r="9" fill="#4a9eff"/>
  <text x="796" y="150" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">1</text>
  <rect x="814" y="138" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="150" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">2</text>
  <rect x="846" y="138" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="150" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">3</text>
  <rect x="878" y="138" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="150" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">4</text>
  <rect x="686" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">5</text>
  <rect x="718" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">6</text>
  <rect x="750" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">7</text>
  <rect x="782" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">8</text>
  <rect x="814" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">9</text>
  <rect x="846" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">10</text>
  <rect x="878" y="160" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="172" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">11</text>
  <rect x="686" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">12</text>
  <rect x="718" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">13</text>
  <rect x="750" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">14</text>
  <rect x="782" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">15</text>
  <rect x="814" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">16</text>
  <rect x="846" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">17</text>
  <rect x="878" y="182" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="194" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">18</text>
  <rect x="686" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">19</text>
  <rect x="718" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">20</text>
  <rect x="750" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">21</text>
  <rect x="782" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">22</text>
  <rect x="814" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">23</text>
  <rect x="846" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="860" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">24</text>
  <rect x="878" y="204" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="892" y="216" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">25</text>
  <rect x="686" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="700" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">26</text>
  <rect x="718" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="732" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">27</text>
  <rect x="750" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="764" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">28</text>
  <rect x="782" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="796" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">29</text>
  <rect x="814" y="226" width="28" height="18" fill="rgba(74,158,255,0.12)"/>
  <text x="828" y="238" fill="#cbd5e1" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">30</text>
  <circle cx="860" cy="235" r="9" fill="#4a9eff"/>
  <text x="860" y="238" fill="#0f172a" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">31</text>
  <line x1="410" y1="294" x2="950" y2="294" stroke="#1f2937" strokeWidth="1"/>
  <text x="420" y="314" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DATE</text>
  <rect x="460" y="300" width="292" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="461" y="301" width="87" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="504.5" y="314.5" fill="#4a9eff" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Date document</text>
  <line x1="549" y1="305" x2="549" y2="317" stroke="#334155" strokeWidth="1"/>
  <text x="598.5" y="314.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Date d'activité</text>
  <line x1="648" y1="305" x2="648" y2="317" stroke="#334155" strokeWidth="1"/>
  <text x="700.0" y="314.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Date d'archivage</text>
  <rect x="790" y="300" width="61" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="820.5" y="314.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="859" y="300" width="72" height="22" rx="5" fill="url(#per-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="895.0" y="314.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Appliquer</text>
  <rect x="20" y="52" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="67" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La plage elle-même</text>
  <text x="30" y="80" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">et la base de date</text>
  <line x1="200" y1="69.0" x2="240" y2="67" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Périodes prédéfinies</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Ce mois-ci par défaut</text>
  <line x1="200" y1="177.0" x2="250" y2="177" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="20" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Base de date</text>
  <text x="30" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">selon la page</text>
  <line x1="200" y1="309.0" x2="460" y2="311" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="1000" y="120" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="135" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Deux mois</text>
  <text x="1010" y="148" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">un clic au début, un à la fin</text>
  <line x1="1000" y1="137.0" x2="920" y2="150" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
  <rect x="1000" y="292" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="307" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Appliquer</text>
  <text x="1010" y="320" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">plage libre : Personnalisé</text>
  <line x1="1000" y1="309.0" x2="930" y2="311" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#per-arrow)"/>
</svg>

Le bouton affiche la plage elle-même (par exemple *1 – 31 oct. 2026*) et la base de date. Il ouvre un panneau composé de :

| Partie | Contenu |
|---|---|
| **Périodes prédéfinies** | *Aujourd'hui*, *Hier*, *7 derniers jours*, *30 derniers jours*, *Ce mois-ci*, *Mois dernier*, *Ce trimestre*, *Cette année*, *12 derniers mois*, *Tout*. |
| **Calendrier** | Le mois précédent et le mois en cours, semaines commençant le lundi. Un clic sur une date de début puis sur une date de fin sélectionne une plage libre, affichée *Personnalisé*. |
| **Date** | La base de date, au pied du panneau, sur les pages qui la proposent (voir ci-dessous). |
| **Appliquer** / **Annuler** | Applique la plage, ou ferme le panneau sans rien changer. |

:::info[Hier]
*Hier* va d'hier à aujourd'hui, pour compter en entier les traitements de nuit qui passent minuit.
:::

### Base de date selon la page \{#date-basis\}

| Page | Choix | Par défaut |
|---|---|---|
| [Synthèse](../application/billing-overview.md), [Statistiques](../application/statistics.md) | Date document · Date d'activité · Date d'archivage | Date document |
| [Exploitation](../application/dashboard.md) | Date d'activité · Date document · Date d'archivage | Date d'activité |
| [E-Invoicing](../application/invoices.md#base-de-date) | Date de mise à jour · Date d'émission · Date d'archivage | Date de mise à jour |
| [E-Documents](../application/edocuments.md) | Date d'archivage · Date document | Date d'archivage |

La *Date document* (ou *Date d'émission*) est la date imprimée sur la facture ; la *Date d'activité*, la dernière modification dans NomaUBL ; la *Date d'archivage*, la date de traitement du document.

### Exclure les erreurs traitées \{#exclude-reviewed\}

À côté du sélecteur, le switch **Exclure les erreurs traitées** masque les factures déjà traitées par le service client qui restent dans un statut en erreur ; les factures traitées dans les autres statuts restent comptées. Il est activé par défaut sur toutes les pages — Synthèse, Statistiques, Exploitation et E-Invoicing ; une liste ouverte depuis un tableau de bord reprend le choix du tableau de bord. Seule une facture marquée traitée est écartée ; une facture sans marque de suivi reste comptée. L'[Explorateur](../application/explorer.md) propose le même switch dans chaque analyse.

---

## Paramètres › Navigation & lists \{#navigation-and-lists\}

Une page des Paramètres — **Paramètres → Views & UI → Navigation & lists**, en anglais comme la plupart des éditeurs des Paramètres — réunit ce qui façonne l'interface pour tous les utilisateurs : la page de démarrage, la navigation, les périodes par défaut, les listes et le cache des tableaux de bord.

### Page de démarrage \{#start-page\}

| Champ | Par défaut | Description |
|---|---|---|
| **After sign-in** | Billing overview | La page affichée après la connexion : *Billing overview* (Synthèse), *Operations dashboard* (Exploitation), *Statistics*, *IT dashboard*, *Invoices*, *E-Documents*, *E-reporting*, *VAT declaration*, *Diagnostics*, *Reports* ou *Explorer*. Un utilisateur dont le rôle ne l'accorde pas ouvre la Synthèse, sinon la première page accordée par son rôle. Avec une licence restreinte, l'application s'ouvre sur le tableau de bord Exploitation. |

### Navigation \{#navigation\}

| Champ | Par défaut | Description |
|---|---|---|
| **Auto collapse** | No — expanded, collapse by hand | **Yes — icons only, expands on hover** : le menu se replie en une colonne d'icônes et les pages gagnent la largeur ; le survol des icônes ouvre le menu par-dessus la page, et le choix d'une page le replie. Le bouton de repli manuel est alors masqué. |

### Cache des tableaux de bord \{#dashboard-cache\}

| Champ | Par défaut | Description |
|---|---|---|
| **Cache (minutes)** | 60 | Durée pendant laquelle la [Synthèse](../application/billing-overview.md), les [Statistiques](../application/statistics.md) et le tableau de bord [Exploitation](../application/dashboard.md) réutilisent les chiffres chargés — revenir sur un tableau de bord ou changer de page ne relance pas les requêtes — et durée de conservation sur le serveur, pour tous les utilisateurs, des *documents traités par jour* du [tableau de bord IT](../application/tech-dashboard.md). Un tableau de bord ouvert se recharge seul à l'issue du délai ; **↻** recharge aussitôt. `0` = rechargement systématique. |

Chaque tableau de bord indique l'heure de chargement de ses chiffres (*Mis à jour à 14:05*), à côté de **↻** — sur le tableau de bord IT, dans le sous-titre de *Documents traités par jour*. Les chiffres conservés dans le navigateur sont perdus au rechargement de la page.

---

## Périodes par défaut \{#default-periods\}

<svg viewBox="0 0 1200 426" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="pds-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="pds-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="pds-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="pds-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="760" height="386" rx="14" fill="url(#pds-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Settings › Views &amp; UI › Navigation & lists</text>
  <text x="240" y="68" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Default periods</text>
  <text x="240" y="86" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">The period a page opens on until the user picks another one. Analyses and dashboards of the Explorer keep their own period.</text>
  <text x="240" y="112" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Every view</text>
  <rect x="420" y="100" width="220" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="114.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">This month ▾</text>
  <text x="240" y="148" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Per view</text>
  <text x="240" y="175" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Billing overview</text>
  <rect x="390" y="160" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="174.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="175" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Operations dashboard</text>
  <rect x="760" y="160" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="174.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Yesterday (and today) ▾</text>
  <text x="240" y="209" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Statistics</text>
  <rect x="390" y="194" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="208.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="209" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Invoices</text>
  <rect x="760" y="194" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="208.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 7 days ▾</text>
  <text x="240" y="243" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">E-Documents</text>
  <rect x="390" y="228" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="242.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="243" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Diagnostics</text>
  <rect x="760" y="228" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="242.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 30 days ▾</text>
  <text x="240" y="277" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Integration errors</text>
  <rect x="390" y="262" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="276.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Same as every view ▾</text>
  <text x="610" y="277" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Processing log</text>
  <rect x="760" y="262" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="770" y="276.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Yesterday (and today) ▾</text>
  <text x="240" y="311" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Reports › Integrity</text>
  <rect x="390" y="296" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="400" y="310.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Last 30 days ▾</text>
  <line x1="240" y1="332" x2="960" y2="332" stroke="#1f2937" strokeWidth="1"/>
  <text x="240" y="352" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="system-ui, sans-serif">Lists</text>
  <text x="290" y="352" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Every list without its own value in Settings › List views.</text>
  <text x="240" y="380" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rows per page</text>
  <rect x="420" y="366" width="120" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="430" y="380.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">50</text>
  <text x="610" y="380" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Rows loaded</text>
  <rect x="740" y="366" width="160" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="750" y="380.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">100000</text>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Toutes les vues</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Ce mois-ci si rien n'est choisi</text>
  <line x1="200" y1="113.0" x2="420" y2="111" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="20" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Surcharge par vue</text>
  <text x="30" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">neuf vues</text>
  <line x1="200" y1="227.0" x2="390" y2="211" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="20" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes par page</text>
  <text x="30" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">50 si rien n'est choisi</text>
  <line x1="200" y1="377.0" x2="420" y2="377" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1000" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Explorateur à part</text>
  <text x="1010" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les analyses gardent la leur</text>
  <line x1="1000" y1="113.0" x2="920" y2="86" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1000" y="210" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="225" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Le choix de l'utilisateur prime</text>
  <text x="1010" y="238" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur la valeur par défaut</text>
  <line x1="1000" y1="227.0" x2="940" y2="211" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
  <rect x="1000" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1010" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes chargées</text>
  <text x="1010" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">100 000 si rien n'est choisi</text>
  <line x1="1000" y1="377.0" x2="900" y2="377" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#pds-arrow)"/>
</svg>

Elles se règlent sur la même page, **Paramètres → Views & UI → Navigation & lists**.

| Champ | Par défaut | Description |
|---|---|---|
| **Every view** | This month | La période d'ouverture de toutes les pages. |
| **Per view** | Same as every view | Un champ par vue, pour ouvrir cette page sur une autre période. |

Les vues réglables, dans l'ordre de l'éditeur : *Billing overview* (Synthèse), *Operations dashboard* (Exploitation), *Statistics*, *Invoices*, *E-Documents*, *Diagnostics*, *Integration errors*, *Processing log*, *Reports › Integrity*. Les choix sont les périodes prédéfinies du sélecteur ; *Yesterday (and today)* correspond à *Hier* et *All dates* à *Tout*.

La valeur par défaut ne fixe que la période **d'ouverture** : une période choisie par l'utilisateur sur une page reste prioritaire, et les pages qui mémorisent leurs filtres (Synthèse, Statistiques) se rouvrent sur la dernière utilisée. Les analyses et tableaux de bord de l'[Explorateur](../application/explorer.md) gardent leur propre période.

Les valeurs sont enregistrées dans les paramètres [Global](./system/global.md) (onglet *Periods*) et transmises aux pages par `GET /api/ui/period-defaults`.

---

## Listes \{#lists\}

Le groupe **Lists** de **Navigation & lists** fixe deux valeurs pour toute liste qui n'a pas les siennes dans les [Vues de liste](./list-views.md) :

| Champ | Par défaut | Description |
|---|---|---|
| **Rows per page** | 50 | Lignes affichées par page de la grille. |
| **Rows loaded** | 100 000 | Lignes lues à chaque actualisation (*Exécuter*) ; filtres et tris s'appliquent ensuite dans le navigateur. Le message `X / Y lignes` signale quand la limite est atteinte. |

Enregistrées sous `defaultPageSize` et `defaultMaxRows` dans les paramètres [Global](./system/global.md).

---

## Conseils & bonnes pratiques

- **Adapter la période d'ouverture au travail de l'équipe.** *Hier* pour une équipe d'exploitation qui contrôle les traitements de nuit, *Mois dernier* pour une revue comptable du mois clos.
- **Garder la même base de date pour comparer deux pages.** Un comptage par *Date document* et un comptage par *Date d'archivage* ne coïncident jamais exactement.
- **Réserver *Tout* aux besoins ponctuels sur les grosses instances.** Chaque bloc du tableau de bord lit alors tout l'historique.
