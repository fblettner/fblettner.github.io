---
title: Retour au standard
description: "Développement → Retour au standard dans Nomajde : les objets standard JD Edwards EnterpriseOne qu'un path code tient pour modifiés, et les copies d'objets standard, comparés enregistrement par enregistrement aux objets d'Oracle du path code d'origine — ceux qui peuvent revenir au standard tels quels, ceux qui diffèrent et en quoi, ceux qui diffèrent sans jamais être lancés — avec le projet OMW qui contient chacun et les jours de reprise économisés à chaque montée de version."
keywords: [Nomajde, JD Edwards, JDE E1, retour au standard, reprise, montée de version, pristine, PS920, path code, Object Librarian, projet OMW, spécifications, règles d'événement, objets spécifiques, copies, comparaison]
---

# Retour au standard

**Développement → Retour au standard** répond à une question que tout client JD Edwards EnterpriseOne se pose avant une montée de version : parmi tous les objets standard modifiés au fil des années, **quelles modifications servent encore ?** Chaque objet modifié, et chaque copie d'un objet standard, coûte des jours de reprise à chaque montée de version. La page les recense, compare chacun à l'objet d'Oracle du path code d'origine (`PS920`, les objets d'Oracle tels que livrés) ou d'un autre path code, et les classe : **ceux qui peuvent revenir au standard tels quels**, **ceux qui diffèrent, et en quoi**, **ceux qui diffèrent mais que personne ne lance**. JD Edwards est uniquement lu.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 558" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="bts-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="bts-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="bts-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="bts-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="518" rx="14" fill="url(#bts-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Retour au standard</text>
  <text x="240" y="62" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">PD920 comparé à PS920 le 2026-11-20 — Les objets standard modifiés, et les copies d'objets standard…</text>
  <rect x="902" y="34" width="117" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="960.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Comparer à nouveau</text>
  <rect x="1027" y="34" width="53" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1053.5" y="48.5" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Relire</text>
  <line x1="232" y1="74" x2="1088" y2="74" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250.0" y="106" fill="#4ade80" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">12</text>
  <text x="250.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">IDENTIQUES AU STANDARD</text>
  <text x="250.0" y="132" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">6 jour(s) de reprise économisés…</text>
  <rect x="452.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="462.0" y="106" fill="#fb923c" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">4</text>
  <text x="462.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DIFFÈRENT ET PERSONNE NE LES LANCE</text>
  <text x="462.0" y="132" fill="#64748b" fontSize="6.6" fontFamily="system-ui, sans-serif">12 jour(s) de reprise économisés…</text>
  <rect x="664.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="674.0" y="106" fill="#4a9eff" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">31</text>
  <text x="674.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">DIFFÈRENT</text>
  <rect x="876.0" y="86" width="204.0" height="54" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="886.0" y="106" fill="#c084fc" fontSize="16" fontWeight="700" fontFamily="system-ui, sans-serif">2</text>
  <text x="886.0" y="120" fill="#94a3b8" fontSize="6.6" letterSpacing="0.03em" fontFamily="system-ui, sans-serif">ABSENTS DU PATH CODE DE COMPARAISON</text>
  <rect x="240.0" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="254.0" cy="170" r="6" fill="#4ade80" fillOpacity="0.35"/>
  <text x="266.0" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Peuvent revenir tels quels · 12</text>
  <text x="266.0" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Il ne reste que l'indicateur…</text>
  <rect x="409.6" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="423.6" cy="170" r="6" fill="#fb923c" fillOpacity="0.35"/>
  <text x="435.6" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Modifiés, jamais lancés · 4</text>
  <text x="435.6" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Une modification inutile…</text>
  <rect x="579.2" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="593.2" cy="170" r="6" fill="#4a9eff" fillOpacity="0.35"/>
  <text x="605.2" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Diffèrent · 31</text>
  <text x="605.2" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Ce qui a été modifié, enregistrement…</text>
  <rect x="748.8" y="150" width="161.6" height="40" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <circle cx="762.8" cy="170" r="6" fill="#c084fc" fillOpacity="0.35"/>
  <text x="774.8" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Absents du standard · 2</text>
  <text x="774.8" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Rien à quoi comparer</text>
  <rect x="918.4" y="150" width="161.6" height="40" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1.2"/>
  <circle cx="932.4" cy="170" r="6" fill="#4a9eff" fillOpacity="0.35"/>
  <text x="944.4" y="167" fill="#e2e8f0" fontSize="8.2" fontWeight="700" fontFamily="system-ui, sans-serif">Tous · 49</text>
  <text x="944.4" y="180" fill="#94a3b8" fontSize="6.8" fontFamily="system-ui, sans-serif">Tous les objets comparés</text>
  <rect x="240" y="202" width="840" height="28" rx="6" fill="rgba(255,255,255,0.03)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OBJET</text>
  <text x="324" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COPIE DE</text>
  <text x="386" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QUE C'EST</text>
  <text x="526" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TYPE</text>
  <text x="570" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">COMPARÉ AU STANDARD</text>
  <text x="738" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OÙ IL DIFFÈRE</text>
  <text x="878" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">PROJET OMW</text>
  <text x="988" y="219.0" fill="#cbd5e1" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">DERNIER LANCEMENT</text>
  <rect x="240" y="234" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P4210</text>
  <text x="324" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="386" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Saisie des commandes</text>
  <text x="526" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="570" y="239.0" width="103" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="621.5" y="250.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Diffère · +2 −0 ~1</text>
  <text x="738" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Règles d'événement (3)</text>
  <text x="878" y="250.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0042 — Pricing</text>
  <text x="988" y="250.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-19</text>
  <rect x="264" y="264" width="816" height="150" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="276" y="282" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">2 ajouté(s) · 0 retiré(s) · 1 modifié(s) · 1 204 identiques — lu dans PD920 et PS920 · Tenu par PRJ0042 — Pricing</text>
  <rect x="276" y="292" width="792" height="112" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="286" y="308" fill="#e2e8f0" fontSize="9" fontWeight="700" fontFamily="system-ui, sans-serif">Règles d'événement</text>
  <text x="388.72" y="308" fill="#64748b" fontSize="8" fontFamily="system-ui, sans-serif">2 ajouté(s) · 0 retiré(s) · 1 modifié(s) · 412 identiques</text>
  <line x1="276" y1="316" x2="1068" y2="316" stroke="#1f2937" strokeWidth="1"/>
  <text x="286" y="330" fill="#64748b" fontSize="7.5" letterSpacing="0.05em" fontFamily="system-ui, sans-serif">MODIFIÉS (1)</text>
  <text x="286" y="343" fill="#94a3b8" fontSize="8" fontFamily="ui-monospace, monospace">dans W4210A · id écran 1 · contrôle 12 · événement 13</text>
  <rect x="286" y="349" width="772" height="48" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="294" y="360.0" fill="#64748b" fontSize="7.6" fontFamily="ui-monospace, monospace">@@ -3,3 +3,3 @@</text>
  <text x="294" y="370.5" fill="#94a3b8" fontSize="7.6" fontFamily="ui-monospace, monospace">  If BC Order Type is equal to "SO"</text>
  <rect x="287" y="373.0" width="770" height="10.5" fill="rgba(255,69,58,0.14)"/>
  <text x="294" y="381.0" fill="#f87171" fontSize="7.6" fontFamily="ui-monospace, monospace">-    B4200310 Get Price</text>
  <rect x="287" y="383.5" width="770" height="10.5" fill="rgba(50,215,75,0.14)"/>
  <text x="294" y="391.5" fill="#4ade80" fontSize="7.6" fontFamily="ui-monospace, monospace">+    B5500310 Get Customer Price</text>
  <rect x="240" y="422" width="840" height="26" rx="6" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">R42565</text>
  <text x="324" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="386" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Impression des factures</text>
  <text x="526" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">UBE</text>
  <rect x="570" y="427.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="600.0" y="438.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Identique</text>
  <text x="738" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="878" y="438.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0017 — Invoices</text>
  <text x="988" y="438.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-20</text>
  <rect x="240" y="452" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P550101</text>
  <text x="324" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">P0101</text>
  <text x="386" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Carnet d'adresses</text>
  <text x="526" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">APPL</text>
  <rect x="570" y="457.0" width="60" height="16" rx="8.0" fill="rgba(50,215,75,0.18)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="600.0" y="468.2" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Identique</text>
  <text x="738" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="878" y="468.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0031 — AB</text>
  <text x="988" y="468.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">2026-11-18</text>
  <rect x="240" y="482" width="840" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="250" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="ui-monospace, monospace">F4211</text>
  <text x="324" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="386" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Lignes de commande</text>
  <text x="526" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">TBLE</text>
  <rect x="570" y="487.0" width="103" height="16" rx="8.0" fill="rgba(255,159,10,0.18)" stroke="rgba(255,159,10,0.40)" strokeWidth="1"/>
  <text x="621.5" y="498.2" fill="#fb923c" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Diffère · +1 −0 ~0</text>
  <text x="738" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">Colonnes de la table (1)</text>
  <text x="878" y="498.5" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">PRJ0042 — Pricing</text>
  <text x="988" y="498.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif"></text>
  <text x="240" y="524" fill="#94a3b8" fontSize="8.5" fontFamily="system-ui, sans-serif">Non comparés : le source C d'une fonction métier, le dictionnaire de données, les textes d'options de traitement, les versions d'un état.</text>
  <rect x="20" y="30" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="45" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Comparer à nouveau</text>
  <text x="30" y="58" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ouvre la tâche de comparaison</text>
  <line x1="200" y1="47.0" x2="902" y2="45" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Peuvent revenir tels quels</text>
  <text x="30" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">avec les jours de reprise économisés</text>
  <line x1="200" y1="113.0" x2="240" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Cinq vues</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">chacune avec son nombre</text>
  <line x1="200" y1="177.0" x2="240" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="236" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="251" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Une ligne ouverte</text>
  <text x="30" y="264" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comparée en détail, à l'instant</text>
  <line x1="200" y1="253.0" x2="250" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="392" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="407" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Lignes qui diffèrent</text>
  <text x="30" y="420" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">retirées en rouge, ajoutées en vert</text>
  <line x1="200" y1="409.0" x2="276" y2="398" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="96" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="111" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Absents du standard</text>
  <text x="1130" y="124" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rien à quoi comparer</text>
  <line x1="1120" y1="113.0" x2="1080" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="160" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">La vue choisie</text>
  <text x="1130" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">la liste en dessous la suit</text>
  <line x1="1120" y1="177.0" x2="1080" y2="170" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="246" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="261" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Verdict et comptes</text>
  <text x="1130" y="274" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">+ ajoutés · − retirés · ~ modifiés</text>
  <line x1="1120" y1="263.0" x2="674" y2="248" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="1120" y="434" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="449" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Projet OMW</text>
  <text x="1130" y="462" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">pourquoi il a été modifié, s'il le dit</text>
  <line x1="1120" y1="451.0" x2="978" y2="451" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
  <rect x="20" y="470" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="485" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Copie de</text>
  <text x="30" y="498" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">comparée à son original</text>
  <line x1="200" y1="487.0" x2="324" y2="478" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#bts-arrow)"/>
</svg>

---

## Ce qui est comparé \{#scope\}

La comparaison porte, pour un path code (`PD920` par exemple), sur :

- **les objets standard qu'il tient pour modifiés** — ceux que l'Object Librarian marque comme modifiés dans ce path code ;
- **les copies d'objets standard** — un objet ajouté par le client qui a conservé l'identifiant d'application d'un objet standard du même type. Une copie est comparée à **son original** : une copie qui n'apporte rien peut être remplacée par l'objet standard, et une copie doit être reprise comme un objet modifié quand Oracle modifie son original.

Chaque objet est comparé au même objet — ou, pour une copie, à son original — dans le path code de référence : en général le path code d'origine, ou tout autre path code.

### Enregistrement par enregistrement \{#records\}

La comparaison lit les **spécifications** de l'objet dans les deux path codes et les rapproche enregistrement par enregistrement : chaque enregistrement est identifié dans l'objet par quelques valeurs (un écran et un contrôle, un index et son rang, une section…). Deux enregistrements de même identification sont identiques quand leurs valeurs et leur spécification sont identiques. Ce qui est comparé :

| Objet | Enregistrements comparés |
|---|---|
| Table | Ses colonnes, ses index et les colonnes de chaque index. |
| Vue métier | Sa spécification. |
| Structure de données | Sa spécification, correspondances nommées comprises. |
| Fonction métier | Ses fonctions et leurs spécifications. |
| Application | L'application, ses écrans, les contrôles de chaque écran, les textes des écrans, les règles d'événement. |
| État | Ses sections et objets, ses textes, les règles d'événement — ceux de l'état lui-même (ses versions ne contiennent que des surcharges). |
| Règles d'événement nommées | Leur spécification. |

**Non comparés, et signalé sur chaque objet** : le source C d'une fonction métier (ses fonctions et leurs structures de données sont comparées, pas son code), le dictionnaire de données, les textes d'options de traitement, les versions d'un état.

### Une copie sous les noms de son original \{#copies\}

Une copie porte ses propres noms : `P550101` pour `P0101`, ses écrans `W550101A` pour `W0101A`, le préfixe de colonnes propre à une table. Avant de comparer une copie à son original, ces noms sont ramenés à ceux de l'original — dans les identifications, les valeurs et les spécifications —, si bien qu'**un nom seul n'est jamais une différence**. La ligne ouverte l'indique : *Une copie de P0101, comparée à lui sous les noms de l'original.*

---

## La page \{#page\}

L'en-tête indique le path code, le path code auquel il a été comparé et la date de la comparaison. Quand plusieurs path codes ont été comparés, une liste à côté des boutons permet de passer de l'un à l'autre.

| Bouton | Rôle |
|---|---|
| **Comparer un path code** / **Comparer à nouveau** | Ouvre la [tâche de comparaison](#job), avec le path code et la référence déjà renseignés. **Comparer un path code** avant la première comparaison, **Comparer à nouveau** ensuite. N'apparaît qu'aux utilisateurs autorisés à lancer la tâche. |
| **Relire** | Relit la liste — après une comparaison, par exemple. |

Avant la première comparaison, la page l'indique : la comparaison lit chaque objet standard que le path code tient pour modifié et le compare au path code indiqué, en lecture seule, en quelques minutes.

### Les chiffres \{#figures\}

| Chiffre | Compte |
|---|---|
| **identiques au standard** | Les objets dont chaque enregistrement est identique à celui du standard : *peuvent revenir tels quels* — ou, quand l'[analyse de montée de version](../upgrade/analysis.md) existe pour le path code, les jours de reprise qu'ils économisent à chaque montée de version. |
| **diffèrent et personne ne les lance** | Les applications et les états qui diffèrent et qu'aucun utilisateur n'a lancés, avec les jours qu'ils économisent. Un tiret, accompagné de *l'usage n'est pas connu pour ce path code*, quand l'analyse de montée de version ne fournit pas d'usage pour ce path code. |
| **diffèrent** | Les objets dont au moins un enregistrement a été ajouté, retiré ou modifié. |
| **absents du path code de comparaison** | Les objets dont le path code de référence ne contient aucune spécification : rien à quoi les comparer. |

### Les cinq vues \{#views\}

Cinq cartes au-dessus de la liste choisissent ce qu'elle affiche, chacune avec son nombre. La vue choisie est conservée pour la visite suivante.

| Vue | Affiche |
|---|---|
| **Peuvent revenir tels quels** | Les objets identiques au standard : il ne reste que l'indicateur « modifié ». |
| **Modifiés, jamais lancés** | Les applications et les états qui diffèrent et qu'aucun utilisateur n'a lancés — une modification qui ne sert à personne. Vide quand l'usage n'est pas connu. |
| **Diffèrent** | Ce qui a été modifié, enregistrement par enregistrement. |
| **Absents du standard** | Les objets sans rien à quoi les comparer — absents du path code de référence, ou sans spécification dans aucun des deux. |
| **Tous** | Tous les objets comparés. |

### La liste \{#list\}

| Colonne | Contenu |
|---|---|
| **Objet** | Le nom de l'objet. |
| **Copie de** | Pour une copie, son original. |
| **Ce que c'est** | La description de l'objet. |
| **Type** | Son type (`APPL`, `UBE`, `TBLE`, `BSFN`…). |
| **Comparé au standard** | **Identique**, **Diffère** avec ses comptes (`+` ajoutés, `−` retirés, `~` modifiés), **Absent du standard** ou **Sans spécification**. |
| **Où il diffère** | Les natures d'enregistrements qui diffèrent, avec leur nombre : *Contrôles des écrans (5), Règles d'événement (2)*. |
| **Projet OMW** | Les projets OMW qui contiennent l'objet, avec leur description — la raison de la modification, quand le projet l'indique. Le projet par défaut d'un utilisateur est écarté quand l'objet figure dans un autre projet. |
| **Dernier lancement**, **Utilisateurs** | Sa dernière utilisation et ses utilisateurs, d'après l'analyse de montée de version. |
| **Jours de reprise** | Les jours de reprise que lui attribue l'analyse de montée de version, quand il est à reprendre. |

La liste offre la recherche, les filtres, le regroupement et le choix des colonnes habituels, et s'exporte vers Excel.

---

## Ce qui diffère, et en quoi \{#detail\}

L'ouverture d'une ligne compare l'objet **à l'instant**, dans les deux path codes, et affiche le résultat :

- le verdict en une ligne : le nombre d'enregistrements **ajoutés**, **retirés** et **modifiés**, le nombre d'identiques, les schémas lus et le projet OMW qui contient l'objet ;
- pour un objet identique, la mention que l'objet standard peut être repris — ou, pour une copie, qu'elle n'apporte rien à son original et que l'objet standard peut être utilisé à sa place ;
- un bloc par nature d'enregistrement qui diffère — **Colonnes de la table**, **Index**, **Colonnes des index**, **Vue métier**, **Structure de données**, **Correspondances nommées**, **Fonctions**, **Application**, **Écrans**, **Contrôles des écrans**, **Textes des écrans**, **Sections et objets de l'état**, **Textes de l'état**, **Règles d'événement**, **Règles d'événement nommées** — avec :
  - **Ajoutés par vous** : les enregistrements présents seulement dans le path code examiné ;
  - **Retirés par vous — dans le standard seulement** : les enregistrements présents seulement dans la référence ;
  - **Modifiés** : chaque enregistrement identifié en clair (*écran W4210A · contrôle 12 · événement 13*), ses valeurs sous la forme *standard → le vôtre* et, quand sa spécification diffère, **les lignes qui diffèrent** — retirées en rouge, ajoutées en vert.

Une longue liste est tronquée et le reste compté (*… et 12 de plus.*) ; une longue différence s'arrête après 120 lignes (*… et 40 ligne(s) de plus.*).

---

## La tâche de comparaison \{#job\}

La tâche **Comparer au standard** (`nomajde-standard-compare`, menu **Tâches**) compare un path code et conserve le verdict de chaque objet ; la page affiche ce qu'a conservé la dernière exécution. Comparer à nouveau un path code remplace ce qu'il contenait. Elle dure quelques minutes — 350 objets en moins d'une minute sur un système de démonstration.

| Paramètre | Défaut | Rôle |
|---|---|---|
| **Path code à examiner** | `PD920` | Le path code dont les objets modifiés et les copies sont comparés. |
| **Path code de comparaison** | `PS920` | La référence : `PS920` pour les objets d'Oracle tels que livrés, ou un autre path code. |

La tâche est en lecture seule sur JD Edwards : elle lit les spécifications des deux path codes, ne lance aucun traitement d'Oracle et n'ajoute rien dans JD Edwards. Un path code ne peut pas être comparé à lui-même. Elle n'a pas de planification : la lancer avant une montée de version, ou après un nettoyage, pour faire le point.

L'ouverture d'une ligne ne demande pas de relancer la tâche : la comparaison de cet objet est faite sur le moment.

### Un JD Edwards derrière un lien de base de données \{#dblink\}

Quand Liberty atteint les bibliothèques de JD Edwards par un lien de base de données, la tâche et la page suivent le pool JD Edwards : chaque table est lue avec sa bibliothèque, prise dans les **Schémas** du pool, et le lien de cette bibliothèque, pris dans ses **Liens de base**, sous la même clé — `OL` pour l'Object Librarian, `SY` pour les tables OMW, `CO` pour les objets centraux des deux path codes. Une bibliothèque sans lien est lue localement. Les spécifications sont stockées en BLOB, que le pilote habituel ne sait pas lire à travers un lien : derrière un lien `CO`, elles sont lues par le pilote Oracle en mode thick, sans rien à paramétrer. Voir [Jetons de schéma et de DB link](../../framework/connectors.md#schema-and-db-link-tokens).

---

## Accès \{#access\}

La page se trouve dans le dossier **Développement** du menu Nomajde. Les rôles prédéfinis **Développeur** et **Administrateur** y ont accès et peuvent lancer la tâche de comparaison (voir [Rôles prédéfinis](../overview.md#roles)). Les boutons qui ouvrent la tâche n'apparaissent qu'aux utilisateurs autorisés à la lancer. La connexion utilisée pour lire JD Edwards doit pouvoir lire l'Object Librarian, les objets centraux des deux path codes et les tables OMW.

---

## Conseils & bonnes pratiques \{#tips\}

- Commencer par **Peuvent revenir tels quels** : chaque ligne est un objet à reprendre du standard sans coût, avec les jours de reprise économisés à chaque montée de version.
- Lancer d'abord l'[analyse de montée de version](../upgrade/analysis.md) du même path code : la dernière utilisation, les utilisateurs et les jours de reprise en proviennent, de même que la vue **Modifiés, jamais lancés**.
- Lire le **projet OMW** avant de décider : sa description indique souvent la raison de la modification, et à qui la demander.
- La référence n'est pas forcément le path code d'origine : la tâche accepte n'importe quel path code de comparaison.
- Une différence qui tient aux seuls noms propres d'une copie n'apparaît pas : ce qui reste une fois les noms ramenés à ceux de l'original est une vraie modification.

---

## Voir aussi

- [Préparer la montée de version](../upgrade/analysis.md) — ce qu'une version impose de reprendre, et comment l'original d'une copie est retrouvé.
- [Object Management Workbench](../master-data/delivered-screens.md#omw) — les projets OMW, leurs objets et leur journal.
- [Références croisées](../cross-reference.md) — où un objet est utilisé avant de le ramener au standard.
- [Tâches](../jobs.md#standard-compare) — la tâche de comparaison dans le dossier Tâches.
