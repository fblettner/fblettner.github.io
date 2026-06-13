---
title: Tableau de bord IT
description: "Page de santé opérationnelle pour les équipes IT : 14 widgets qui couvrent heap JVM, GC, threads et uptime, ping base, informations de build, espace disque et nombre de fichiers, débit de traitement, courbe d'erreurs, taux de relance, temps de traitement par modèle, sessions actives, événements de traitement en direct (paires START / END des jobs en cours, plus erreurs inline), vérification de configuration, tables de base, erreurs récentes et planificateur en arrière-plan. Un seul aller-retour par rafraîchissement, aucune authentification requise pour le bloc système."
keywords: [NomaUBL, tableau de bord IT, opérations, santé système, JVM, heap, GC, ping base, système de fichiers, débit, courbe d'erreurs, taux de relance, temps de traitement, sessions actives, événements de traitement, suivi planificateur, vérification de configuration, planificateur, F564237]
---

# Tableau de bord IT

Le **Tableau de bord IT** est la vue opérationnelle de NomaUBL destinée aux équipes techniques — une page unique qui regroupe 14 widgets couvrant la JVM, la base de données, le système de fichiers, le pipeline de traitement, le planificateur et un flux en direct des traitements en cours. Il complète le [tableau de bord métier](./dashboard.md) : le public métier voit les volumes de factures et les délais d'aller-retour PA, l'équipe IT voit la pression heap, les événements START / END pilotés par le planificateur et l'usage disque.

Chaque rafraîchissement appelle quatre endpoints back-end en parallèle — `/api/system`, `/api/dashboard/tech`, `/api/dashboard/log-tail`, `/api/dashboard/config-check` — pour que la page se charge en un seul aller-retour et reste légère pour la base.

La page fonctionne quel que soit le système source — JD Edwards, SAP, NetSuite ou ERP personnalisé. Les widgets lisent des métriques niveau hôte et le journal de traitement de NomaUBL ; le format source est transparent à ce stade.

:::info[Nouveau en 2026.05.6]
Le Tableau de bord IT est une nouvelle page. Le widget Planificateur, qui se trouvait sur le tableau de bord métier, a migré ici. L'`ActivityTracker` en mémoire introduit dans la même version alimente la carte *Sessions actives* quand l'authentification est désactivée.
:::

---

## Accès à la page

- Barre latérale → **Documentation → Tableau de bord IT**.
- La page se rend même sans authentification — le bloc Santé système renvoie la JVM, le build, l'OS et le mode PA quel que soit l'état de l'auth. Les widgets adossés à la base affichent *Non configurée* tant qu'aucun connecteur n'est en place.

---

## Vue d'ensemble

<svg viewBox="0 0 1000 880" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="tech-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="tech-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="tech-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
    <linearGradient id="tech-g-green" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" stopOpacity="0.18"/><stop offset="100%" stopColor="#22c55e" stopOpacity="0.04"/></linearGradient>
  </defs>

  <rect x="220" y="20" width="580" height="840" rx="14" fill="url(#tech-g-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="240" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Tableau de bord IT</text>
  <rect x="700" y="30" width="80" height="22" rx="5" fill="url(#tech-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="740" y="45" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace" textAnchor="middle" fontWeight="700">↻ Rafraîchir</text>
  <line x1="220" y1="68" x2="800" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="240" y="84" width="362" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="104" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SANTÉ SYSTÈME</text>
  <text x="540" y="104" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">2026.05.6 · 2026-05-09</text>
  <text x="252" y="128" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Java</text>
  <text x="252" y="142" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">21.0.5</text>
  <text x="332" y="128" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Heap</text>
  <text x="332" y="142" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">412 / 2048 Mo · 20 %</text>
  <text x="252" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Uptime</text>
  <text x="252" y="180" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">7j 3h</text>
  <text x="332" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Base</text>
  <text x="332" y="180" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">postgres · 18 ms</text>
  <text x="500" y="166" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Mode PA</text>
  <text x="500" y="180" fill="rgb(50,215,75)" fontSize="11" fontFamily="ui-monospace, monospace">Live</text>

  <rect x="612" y="84" width="168" height="120" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="104" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">RACCOURCIS</text>
  <text x="624" y="128" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Paramètres</text>
  <text x="624" y="146" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Journal de traitement</text>
  <text x="624" y="164" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Versions de fichiers</text>
  <text x="624" y="182" fill="#4a9eff" fontSize="11" fontFamily="system-ui, sans-serif">→ Références croisées</text>

  <rect x="240" y="216" width="178" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="236" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">PLANIFICATEUR</text>
  <text x="372" y="236" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">3 actifs</text>
  <rect x="252" y="246" width="156" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="258" y="256" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">retrieve-statuses · 5 min</text>
  <rect x="252" y="264" width="156" height="14" rx="3" fill="rgba(50,215,75,0.10)" stroke="rgba(50,215,75,0.40)" strokeWidth="1"/>
  <text x="258" y="274" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">notif-purge · quotidien</text>
  <rect x="252" y="282" width="156" height="14" rx="3" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)" strokeWidth="1"/>
  <text x="258" y="292" fill="#4a9eff" fontSize="9" fontFamily="ui-monospace, monospace">fetch-all · 15 min</text>

  <rect x="428" y="216" width="174" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="440" y="236" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">COURBE D'ERREURS · 14j</text>
  <polyline points="446,302 458,290 470,294 482,280 494,288 506,272 518,278 530,260 542,266 554,258 566,272 578,266 590,260" fill="none" stroke="#f87171" strokeWidth="1.6"/>
  <circle cx="590" cy="260" r="3" fill="#f87171"/>
  <text x="446" y="312" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">moy. 12/jour · aujourd'hui 4</text>

  <rect x="612" y="216" width="168" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="236" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TAUX DE RELANCE · 14j</text>
  <text x="624" y="266" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="ui-monospace, monospace">3,2 %</text>
  <text x="624" y="284" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">142 relances / 4 480 runs</text>
  <text x="624" y="300" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">↓ -0,4 vs période précéd.</text>

  <rect x="240" y="328" width="178" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="348" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">JVM · THREADS + GC</text>
  <text x="252" y="370" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Threads</text>
  <text x="252" y="384" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">28 / pic 36</text>
  <text x="332" y="370" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">GC</text>
  <text x="332" y="384" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">G1 · 18 ms</text>
  <text x="252" y="406" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">Classes chargées</text>
  <text x="252" y="420" fill="#e2e8f0" fontSize="11" fontFamily="ui-monospace, monospace">12 446</text>

  <rect x="428" y="328" width="174" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="440" y="348" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DÉBIT · 14j</text>
  <rect x="446" y="392" width="9" height="22" fill="rgba(74,158,255,0.30)"/>
  <rect x="458" y="386" width="9" height="28" fill="rgba(74,158,255,0.40)"/>
  <rect x="470" y="378" width="9" height="36" fill="rgba(74,158,255,0.55)"/>
  <rect x="482" y="372" width="9" height="42" fill="rgba(74,158,255,0.65)"/>
  <rect x="494" y="380" width="9" height="34" fill="rgba(74,158,255,0.50)"/>
  <rect x="506" y="368" width="9" height="46" fill="rgba(74,158,255,0.70)"/>
  <rect x="518" y="372" width="9" height="42" fill="rgba(74,158,255,0.65)"/>
  <rect x="530" y="364" width="9" height="50" fill="rgba(74,158,255,0.80)"/>
  <rect x="542" y="358" width="9" height="56" fill="rgba(74,158,255,0.90)" stroke="#4a9eff" strokeWidth="1"/>
  <rect x="554" y="370" width="9" height="44" fill="rgba(74,158,255,0.65)"/>
  <rect x="566" y="382" width="9" height="32" fill="rgba(74,158,255,0.45)"/>
  <rect x="578" y="392" width="9" height="22" fill="rgba(74,158,255,0.30)"/>
  <text x="446" y="424" fill="#64748b" fontSize="8" fontFamily="ui-monospace, monospace">pic 2026-05-04 · 198 docs</text>

  <rect x="612" y="328" width="168" height="100" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="348" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CLIENTS ACTIFS · 15 MIN</text>
  <text x="624" y="370" fill="#e2e8f0" fontSize="22" fontWeight="700" fontFamily="ui-monospace, monospace">4</text>
  <text x="624" y="390" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">10.0.0.42 · 32 hits</text>
  <text x="624" y="404" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">10.0.0.55 · 18 hits</text>
  <text x="624" y="418" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">10.0.0.61 · 9 hits</text>

  <rect x="240" y="440" width="362" height="80" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="460" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SYSTÈME DE FICHIERS</text>
  <text x="540" y="460" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">espace disque + nb fichiers</text>
  <text x="252" y="478" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">appHome · /opt/nomaubl</text>
  <text x="490" y="478" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">libre 64 Go · 412 fichiers</text>
  <text x="252" y="492" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">dirInput · /data/in</text>
  <text x="490" y="492" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">libre 64 Go · 86 fichiers</text>
  <text x="252" y="506" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">dirArchive · /data/archive</text>
  <text x="490" y="506" fill="rgb(255,159,10)" fontSize="9" fontFamily="ui-monospace, monospace">libre 8 Go · 4 800 fichiers</text>

  <rect x="612" y="440" width="168" height="80" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="624" y="460" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TEMPS PAR MODÈLE · 14j</text>
  <text x="624" y="480" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">invoices · 3,2 s</text>
  <text x="624" y="494" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">credit_notes · 2,8 s</text>
  <text x="624" y="508" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">e-reporting · 5,1 s</text>

  <rect x="240" y="532" width="540" height="80" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="552" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TRAITEMENTS EN COURS · DIRECT</text>
  <circle cx="402" cy="549" r="3.5" fill="rgb(50,215,75)"/>
  <text x="412" y="552" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">traitement en cours · sondage 5 s</text>
  <text x="668" y="552" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">START / END · erreurs en rouge</text>
  <text x="252" y="572" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">START</text>
  <text x="290" y="572" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:34:08  fetch-all · invoices · planificateur · 84 docs à traiter</text>
  <text x="252" y="586" fill="rgb(0,122,255)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">END</text>
  <text x="290" y="586" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">12:34:42  fetch-all · invoices · 84 / 84 OK · 34 s</text>
  <text x="252" y="600" fill="rgb(255,69,58)" fontSize="9" fontFamily="ui-monospace, monospace" fontWeight="700">ERROR</text>
  <text x="290" y="600" fill="rgb(255,69,58)" fontSize="9" fontFamily="ui-monospace, monospace">12:35:14  retrieve-statuses · 12399 · UBL_CREATION FAILED</text>

  <rect x="240" y="624" width="540" height="80" rx="8" fill="url(#tech-g-green)" stroke="rgba(50,215,75,0.40)" strokeWidth="1.2"/>
  <text x="252" y="644" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">VÉRIFICATION DE CONFIGURATION</text>
  <text x="676" y="644" fill="rgb(50,215,75)" fontSize="9" fontFamily="ui-monospace, monospace">✔ 0 anomalie</text>
  <text x="252" y="664" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Connecteur PA — baseUrl, identifiants OAUTH2, endpoint import, endpoint import-status</text>
  <text x="252" y="680" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">e-Directory — endpoint directory-check quand checkDirectory=Y</text>
  <text x="252" y="696" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">e-Reporting — issuerSiren, frequency, flux quand sendToPA=Y</text>

  <rect x="240" y="716" width="220" height="124" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="736" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TABLES DE BASE</text>
  <text x="436" y="736" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">12 480 lignes</text>
  <text x="252" y="756" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564231 factures</text>
  <text x="436" y="756" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">3 826</text>
  <text x="252" y="772" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564235 cycle de vie</text>
  <text x="436" y="772" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">15 442</text>
  <text x="252" y="788" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564236 validation</text>
  <text x="436" y="788" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">6 138</text>
  <text x="252" y="804" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564237 journal exéc.</text>
  <text x="436" y="804" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">42 116</text>
  <text x="252" y="820" fill="#94a3b8" fontSize="9" fontFamily="ui-monospace, monospace">F564253 notifications</text>
  <text x="436" y="820" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">812</text>

  <rect x="470" y="716" width="310" height="124" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="482" y="736" fill="#cbd5e1" fontSize="10" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ERREURS RÉCENTES</text>
  <text x="766" y="736" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">8 entrées</text>
  <rect x="478" y="746" width="34" height="14" rx="3" fill="rgba(255,69,58,0.18)" stroke="rgba(255,69,58,0.40)" strokeWidth="1"/>
  <text x="495" y="757" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">FATAL</text>
  <text x="518" y="757" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">UBL_CREATION · 12399 · XSL NPE</text>
  <text x="766" y="757" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">il y a 2 min</text>
  <rect x="478" y="764" width="34" height="14" rx="3" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="495" y="775" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">ERROR</text>
  <text x="518" y="775" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA_SEND · 12345 · HTTP 502 → relance</text>
  <text x="766" y="775" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">il y a 14 min</text>
  <rect x="478" y="782" width="34" height="14" rx="3" fill="rgba(248,113,113,0.10)" stroke="rgba(248,113,113,0.40)" strokeWidth="1"/>
  <text x="495" y="793" fill="#f87171" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">ERROR</text>
  <text x="518" y="793" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">DB_INSERT · 12298 · violation unicité</text>
  <text x="766" y="793" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">il y a 1 h</text>
  <rect x="478" y="800" width="34" height="14" rx="3" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)" strokeWidth="1"/>
  <text x="495" y="811" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="ui-monospace, monospace" fontWeight="700">WARN</text>
  <text x="518" y="811" fill="#cbd5e1" fontSize="9" fontFamily="ui-monospace, monospace">PA_TIMEOUT · 12277 · relance auto</text>
  <text x="766" y="811" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace" textAnchor="end">il y a 3 h</text>

  <rect x="20" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Santé système</text>
  <text x="30" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">JVM / base / OS / build</text>
  <line x1="200" y1="115" x2="240" y2="118" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="240" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Taux de relance</text>
  <text x="830" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ratio mobile sur 14 jours</text>
  <line x1="820" y1="256" x2="780" y2="256" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="20" y="350" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">JVM · détails</text>
  <text x="30" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">threads, GC, classes</text>
  <line x1="200" y1="366" x2="240" y2="370" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="350" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="365" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Clients actifs</text>
  <text x="830" y="378" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">suivi IP · fenêtre 15 min</text>
  <line x1="820" y1="366" x2="780" y2="366" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="20" y="460" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="475" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Système de fichiers</text>
  <text x="30" y="488" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">espace libre + nb fichiers</text>
  <line x1="200" y1="476" x2="240" y2="480" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="20" y="560" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="575" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Traitements en direct</text>
  <text x="30" y="588" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">START / END · sondage 5 s · pause</text>
  <line x1="200" y1="576" x2="240" y2="566" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="650" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="665" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Vérification de configuration</text>
  <text x="830" y="678" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">contrôle du schéma connecteur</text>
  <line x1="820" y1="666" x2="780" y2="650" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>

  <rect x="820" y="780" width="160" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="830" y="795" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Erreurs récentes</text>
  <text x="830" y="808" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">clic → ouvre l'entrée du journal</text>
  <line x1="820" y1="796" x2="780" y2="780" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#tech-arrow)"/>
</svg>

La grille utilise `align-items: stretch` et chaque carte grandit avec `flex: 1` à l'intérieur de son span de colonnes — les cartes d'une même rangée alignent leur bord bas, indépendamment de la hauteur de leur contenu.

---

## Disposition

La grille à 12 colonnes est organisée en huit rangées :

| Rangée | Disposition | Widgets |
|---|---|---|
| 1 | `8 + 4` | **Santé système** · **Raccourcis** |
| 2 | `4 + 4 + 4` | **Échec d'envoi** · **Courbe d'erreurs · 14j** · **Taux de relance · 14j** |
| 3 | `4 + 4 + 4` | **Planificateur** · **Débit · 14j** · **Sessions / Clients actifs** |
| 4 | `4 + 8` | **JVM · threads + GC** · **Système de fichiers** |
| 5 | `8 + 4` | *(réservé)* · **Temps de traitement par modèle · 14j** |
| 6 | `12` | **Traitements en cours · direct** |
| 7 | `12` | **Vérification de configuration** |
| 8 | `5 + 7` | **Tables de base** · **Erreurs récentes** |

Un bouton **Rafraîchir** dans l'en-tête de la page relance les quatre endpoints en parallèle.

La carte **Échec d'envoi** est arrivée en 2026.06.03, en même temps que la page [Reprise auto](../configuration/system/auto-retry.md) dans les Paramètres — la relance manuelle en un clic sur le tableau de bord et le passage planifié de nuit utilisent le même chemin de relance sous-jacent.

---

## Widgets

### Santé système (rangée 1, span 8)

Métriques JVM, base et hôte. Les valeurs les plus surveillées sont colorées :

| Métrique | Source | Règles de teinte |
|---|---|---|
| **Java** | `Runtime.version()` | neutre. |
| **Heap** | `MemoryMXBean.getHeapMemoryUsage()` | vert &lt; 60 %, orange &lt; 85 %, rouge ≥ 85 %. |
| **Uptime** | `RuntimeMXBean.getUptime()` | neutre, formaté en `Xj Yh` / `Xh Ym`. |
| **Cœurs CPU** | `Runtime.availableProcessors()` | neutre. |
| **Base** | `dialect.ping()` | vert &lt; 100 ms, orange &lt; 500 ms, rouge au-delà ou en cas d'erreur. |
| **Schéma** | configuration `db-nomaubl` | neutre. |
| **OS** | `os.name` + `os.arch` | neutre. |
| **Mode PA** | indicateur `paUseMock` | vert sur *Live*, orange sur *Mock*. |

Le sous-titre de la carte affiche, à droite, la **version du build et la date du build** issues de `nomaubl-version.properties`.

### Raccourcis (rangée 1, span 4)

Liste statique de raccourcis — les pages les plus utilisées par l'opérateur IT. Chaque lien utilise le même mécanisme `onNavigate` que la barre latérale et ouvre directement la page cible. Cibles par défaut : **Paramètres**, **Journal de traitement**, **Versions de fichiers**, **Références croisées**.

### Échec d'envoi (ligne 2, largeur 4) *(2026.06.03)* \{#send-failed-row-2-span-4-20260603\}

Une seule carte en grand chiffre qui indique combien de factures sont actuellement en *Échec d'envoi* (statut `9904`). Quand le compteur n'est pas à zéro, un bouton **Tout renvoyer (N)** sous le chiffre rejoue chaque facture concernée vers la [Plateforme Agréée](../configuration/system/einvoicing.md). Le clic ouvre la [fenêtre de progression partagée](#shared-progress-window) — compteurs en direct, bouton *Annuler* et bouton *Continuer en arrière-plan* qui masque la fenêtre pendant que le traitement se poursuit côté serveur. Le renvoi est limité à **100 ms par appel** pour que la PA reste dans son enveloppe de débit.

| Élément | Comportement |
|---|---|
| Compteur | Total en direct — rafraîchi par le bouton *Rafraîchir* de la page et à chaque montage du tableau de bord. Affiché en rouge quand il n'est pas à zéro. |
| Bouton **Tout renvoyer (N)** | Désactivé quand le compteur est à zéro. Un clic rejoue chaque facture au statut `9904` ; la fenêtre de progression s'ouvre. |
| Fenêtre de progression | Compteurs en direct (*traitées* / *réussies* / *échecs*), bouton *Annuler* et bouton *Continuer en arrière-plan* — même composant que pour chaque traitement long de la plateforme. |
| Limitation de débit | 100 ms entre deux appels — fixé dans le code, non paramétrable ici par l'opérateur. La planification [Reprise auto](../configuration/system/auto-retry.md) propose sa propre limite pour l'équivalent planifié. |

Le bouton manuel sert à un renvoi ponctuel en pleine journée (une coupure PA passagère qui s'est résolue, un petit lot à relancer tout de suite). Pour des relances de nuit sans supervision, planifier une ligne sur la page [Reprise auto](../configuration/system/auto-retry.md) — même chemin de code, sans intervention d'un opérateur.

### Planificateur (rangée 3, span 4)

Liste tous les jobs actifs du planificateur :

- **Jobs intégrés** — `retrieve-statuses`, `notif-purge`, `clean-archive`, etc. — pilotés par les intervalles de polling de `BackgroundScheduler`.
- **`fetch-all` par modèle** — une ligne par modèle avec un job d'extraction / synchronisation programmé.
- **Passages Reprise auto par ligne** *(2026.06.03)* — une ligne par entrée enregistrée sur la page [Reprise auto](../configuration/system/auto-retry.md), avec l'heure planifiée et la liste des statuts ciblés en guise de cadence.

Chaque ligne affiche le nom du job, la cadence, et une pastille de statut (vert actif, bleu prévu sous peu, orange en pause). Le sous-titre indique le décompte des jobs actifs.

### Courbe d'erreurs · 14j (rangée 2, span 4)

Sparkline sur 14 jours des événements d'erreur enregistrés dans `F564237` (niveau `ERROR` ou `FATAL`). Le survol d'un point révèle la date et le compte ; le sous-titre indique la moyenne quotidienne et le total cumulé du jour.

### Taux de relance · 14j (rangée 2, span 4)

Un seul grand chiffre : ratio des *runs ayant abouti après une ou plusieurs relances* sur le total des runs des 14 derniers jours. Le sous-titre donne les valeurs absolues et la variation par rapport à la fenêtre précédente de 14 jours (vert quand le taux baisse, orange quand il monte).

### JVM · threads + GC (rangée 3, span 4)

Carte complémentaire de Santé système pour un diagnostic JVM plus poussé :

- **Threads** — nombre courant + pic.
- **Threads démon** — démons en cours.
- **GC** — nom du collecteur + temps total passé en GC.
- **Classes chargées** — compteur du class-loader, utile pour repérer une fuite metaspace.

### Débit · 14j (rangée 3, span 4)

Histogramme journalier des documents traités sur les 14 derniers jours. **Cliquer sur une barre** ouvre *Journal de traitement* pré-filtré sur ce jour — chemin direct entre « la barre du jour est courte » et « voyons ce qui a vraiment tourné ».

### Sessions / Clients actifs · 15 min (rangée 3, span 4)

Deux modes :

- **Auth activée** — titre *Sessions actives*. Liste chaque session présente dans `F564252` dont le `SSETDTIM` est dans la dernière heure.
- **Auth désactivée** — titre *Clients actifs · 15 min*. Liste chaque IP touchée par `WebServer.handle()` dans les 15 dernières minutes, source : `ActivityTracker` en mémoire (aucune ligne `F564252` n'existe quand l'auth est coupée).

Dans les deux cas, chaque ligne affiche IP / utilisateur, l'horodatage du dernier accès et le compteur de hits.

### Système de fichiers (rangée 4, span 8)

Pour chaque chemin configuré (`appHome`, `processHome`, `dirInput`, `singleOutput`, `burstOutput`, `dirArchive`, `dirError`) :

- **Espace libre / total** sur le volume sous-jacent.
- **Nombre de fichiers** d'un parcours récursif du chemin, **plafonné à 5000 fichiers** pour rester rapide.

Les valeurs de chemin contenant des jokers d'exécution (`%TEMPLATE%`, `%FILE_NAME%`) sont tronquées au premier joker rencontré ; le rapport porte alors sur le répertoire **le plus profond existant par sa forme** au-dessus. `dirOutput` est exclu : il est toujours couvert par `processHome`.

### Temps de traitement par modèle · 14j (rangée 4, span 4)

Temps moyen de traitement de bout en bout par modèle, en secondes, sur les 14 derniers jours. La carte charge les événements `START` / `END` de `F564237` à plat et les apparie côté Java sur `(FEWDS1|FEUPMJ)` — la précédente version utilisait une auto-jointure SQL avec un `FETMPL` ambigu et une arithmétique `e.FEUPMT - s.FEUPMT` incorrecte ; ce point est corrigé.

#### Décomposition par étape quand `debugProfile` est actif *(2026.05.9)*

Quand le commutateur [`debugProfile`](../configuration/system/global.md) sur le modèle `global` est à `Y`, chaque exécution écrit une ligne par étape du pipeline dans `F564237` — **analyse d'en-tête**, **analyse des lignes**, **validation**, **émission UBL**, **envoi PA**. La carte Temps de traitement par modèle les fait remonter sous forme de décomposition empilée sous les totaux par modèle — une étape lente se repère d'un coup d'œil sans plonger dans le journal d'exécution.

Le flux Traitements en cours en dessous balise aussi les lignes avec le nom de l'étape, ce qui permet de trier un lot lent en direct. Laisser `debugProfile` à `N` en production ; passer à `Y` le temps d'un lot pour analyser un pipeline lent — les lignes additionnelles gonflent vite `F564237` sous charge.

### Traitements en cours · direct (rangée 5, span 12)

Flux en direct des jobs qui démarrent et se terminent — la plupart sont lancés par le planificateur en arrière-plan. Le widget interroge `F564237` toutes les **5 secondes** avec un curseur incrémental `since=` ; chaque ligne porte un **badge de méthode** coloré :

| Badge | Signification |
|---|---|
| **START** *(vert)* | Un job vient de démarrer — `fetch-all`, `retrieve-statuses`, un traitement entrant, etc. |
| **END** *(bleu)* | Le `END` correspondant à un `START` précédent, avec la durée écoulée quand elle est disponible. |
| **ERROR** *(rouge)* | Une erreur émise pendant le job — les mots-clés `ERROR`, `FATAL`, `FAILED` reclassent toute ligne en rouge, même quand sa méthode était `START` ou `END`. |
| **INFO** *(atténué)* | Toute autre ligne écrite par le journal d'exécution pendant le job. |

Chaque ligne affiche le badge, le **modèle** + le **mode** + le **fichier source** quand ils sont présents, le message et l'horodatage. Une **pastille verte pulsante** apparaît à côté du titre quand un événement a été observé dans les 30 dernières secondes (un traitement est en cours) ; elle bascule en gris quand le flux est inactif depuis plus longtemps.

Le flux est **dédupliqué sur `FEUKID`** — la même ligne ne peut donc pas apparaître deux fois entre deux sondages, même en cas de décalage d'horloge. Un bouton **Pause / Reprendre** à droite du titre fige le sondage : utile pour lire une ligne longue sans la voir défiler.

La liste défilante est plafonnée aux 100 derniers événements ; les lignes plus anciennes sortent par le bas à mesure que de nouvelles arrivent. Pour une analyse approfondie, utiliser la page [Journal de traitement](../management/processing-log.md), qui conserve l'historique complet avec les vues groupées par job.

### Vérification de configuration (rangée 6, span 12)

Valide la configuration *orientée connecteur* utilisée aujourd'hui par l'application. Les anomalies sont listées par zone avec une sévérité (rouge erreur, orange avertissement, bleu information). La vérification couvre :

| Zone | Valide |
|---|---|
| **Connecteur PA** | `baseUrl` ; `authType` ; identifiants selon le type d'auth — `OAUTH2` (clientId/secret/endpoint token), `BASIC` (utilisateur/mot de passe), `BEARER` (token) ; présence d'un endpoint nommé `import` (avertissement si `import-status` manque). |
| **e-Directory** | `baseUrl` et endpoint `directory-check` quand `checkDirectory=Y`. |
| **e-Reporting** | `issuerSiren`, `frequency`, `flux` quand `sendToPA=Y`. |

Les anciennes vérifications sur `paApiBaseUrl` / `paApiUsername` / `ublXsdPath` / `ublSchematronPath` ont **disparu** — ces propriétés n'existent plus dans le schéma connecteur. Les ressources de validation (XSD / Schematron) sont embarquées dans le JAR.

Une vérification propre s'affiche en `✔ 0 anomalie` en vert ; sinon la carte liste les anomalies par ordre de sévérité.

### Tables de base (rangée 7, span 5)

Nombre de lignes par table NomaUBL — factures (`F564231`), cycle de vie (`F564235`), validation (`F564236`), journal d'exécution (`F564237`), notifications (`F564253`), e-Reporting (`F564260`–`F564262`), auth (`F564250`–`F564252`, `F564254`). Utile pour repérer une croissance inattendue (par exemple une table de notifications qui devrait avoir quelques centaines de lignes mais en a des millions).

### Erreurs récentes (rangée 7, span 7)

Les 8 derniers événements de `F564237` filtrés sur `level IN ('ERROR', 'FATAL')`. Chaque ligne affiche le badge de niveau, le code de cycle de vie et le triplet, le message et un horodatage relatif (*il y a 2 min*, *il y a 1 h*). Cliquer sur une ligne ouvre l'entrée correspondante dans *Journal de traitement*, où se trouvent la stack complète et les options de relance.

---

## Fenêtre de progression partagée \{#shared-progress-window\}

*Ajoutée en 2026.06.03.* Chaque traitement long de la plateforme — Tout renvoyer depuis cette page, le passage [Reprise auto](../configuration/system/auto-retry.md), l'export *Vue détaillée* sur [Erreurs d'intégration](./integration-errors.md), les futurs ré-imports en masse — ouvre la **même fenêtre modale**. Un seul composant, un seul jeu d'habitudes.

La fenêtre reste ouverte par défaut tant que le traitement tourne ; la fermer est une action volontaire.

| Élément | Rôle |
|---|---|
| **Barre de progression** | Compteur visuel traitées-sur-total. Mise à jour environ toutes les 250 ms à mesure que le serveur pousse des incréments. |
| **Compteurs en direct** | Trois nombres : *Traitées* (total touché jusqu'ici), *Réussies*, *Échecs*. Chaque compteur est cliquable quand il n'est pas à zéro et ouvre un petit panneau avec les triplets de factures concernés — un échec sur la facture `12345 / RI / 00070` se trouve donc à un clic de son entrée de journal. |
| **Annuler** | Arrête proprement le traitement entre deux factures. Les factures déjà traitées conservent leur nouvel état ; les autres ne sont pas touchées. Le bouton est remplacé par *Annulé* (grisé) quand le signal est pris en compte. |
| **Continuer en arrière-plan** | Masque la fenêtre sans arrêter le traitement. Le travail se poursuit côté serveur ; une petite bannière persistante en haut de la page affiche le compteur et un lien *Voir la progression*. Cliquer sur le lien rouvre la fenêtre à tout moment. |
| **Terminé** | Remplace *Annuler* / *Continuer en arrière-plan* à la fin du traitement. Une ligne de résumé affiche total / réussies / échecs et la durée écoulée. |

Plusieurs traitements peuvent coexister — chacun obtient sa bannière une fois envoyé en arrière-plan. Fermer l'onglet du navigateur n'**annule pas** le travail ; l'exécution côté serveur continue. Rouvrir la page fait réapparaître la bannière jusqu'à la fin du traitement.

---

## Rafraîchissement des widgets

Le bouton Rafraîchir (ou le montage de la page) appelle quatre endpoints en parallèle :

| Endpoint | Alimente |
|---|---|
| `GET /api/system` | Santé système, JVM · threads + GC, Système de fichiers |
| `GET /api/dashboard/tech` | Débit, Courbe d'erreurs, Taux de relance, Temps par modèle, Sessions actives, Tables de base, Erreurs récentes |
| `GET /api/dashboard/log-tail` | Traitements en cours · direct (incrémental, sondage 5 s avec `since=`) |
| `GET /api/dashboard/config-check` | Vérification de configuration |

La carte Planificateur consomme l'endpoint existant `GET /api/scheduler/status`, ce qui permet de partager les données déjà chargées par le tableau de bord métier lors d'une navigation dans la même session. Chaque appel échoue indépendamment — une base mal configurée renvoie *Non configurée* sur la carte de données sans casser Santé système ou le journal en direct.

---

## Conseils & bonnes pratiques

- **Surveiller Heap, ping base et espace disque.** Trois signaux d'alerte précoce — la dérive du heap avant un OOM, la latence base avant un blocage, le volume archive avant la saturation disque.
- **Le flux Traitements en cours vaut mieux que `tail -f`.** Il montre les jobs du planificateur qui démarrent et se terminent en direct, les erreurs ressortent en rouge, et le flux résiste à une déconnexion SSH. À garder ouvert pendant une mise en production ou un import en lot — la plupart des régressions y apparaissent en quelques secondes, et la pastille verte pulsante indique si quelque chose tourne réellement à cet instant.
- **La vérification de configuration doit toujours être verte.** Un nombre d'anomalies non nul après un déploiement est le chemin le plus rapide vers « qu'est-ce qui a changé ? ». À lancer sur chaque environnement après chaque édition de configuration.
- **Erreurs récentes plutôt que Tables de base.** En triage d'incident, le flux des erreurs récentes est plus dense au pixel ; la carte des tables sert au suivi de tendance sur plusieurs jours.
- **Une liste *Clients actifs* vide ne signifie pas que personne n'utilise l'application.** Avec l'auth activée, les sessions de plus d'une heure tombent de la liste — la base les conserve dans le cycle de vie. La carte montre *qui est là maintenant*, pas *qui était là ce matin*.
- **Les pics de Temps par modèle vont avec les creux de Débit.** Quand une grande barre bleue dans Débit est suivie d'un modèle lent le lendemain, la file remonte — l'équipe IT peut anticiper en ajustant la cadence du planificateur.
