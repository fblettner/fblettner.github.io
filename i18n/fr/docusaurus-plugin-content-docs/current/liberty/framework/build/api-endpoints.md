---
title: Points d'accès d'API
description: "Les points d'accès (endpoints) d'un connecteur d'API dans Liberty Next : l'éditeur dessiné en quatre étapes (ce qu'il est, entrées, l'appel, la réponse), des paramètres qui disent ce qu'ils attendent, Créer à partir de… et Actualiser depuis le serveur, les points d'accès qui modifient des données, les champs d'erreur et d'avertissement, les lignes lisibles par un écran, les points d'accès servis par une fonction ou par un service, les groupes, les permissions et la sûreté des valeurs."
keywords: [Liberty Next, connecteur d'API, point d'accès, endpoint, REST, paramètres, Créer à partir de, générateur, modifie des données, champs d'erreur, lignes, servi par une fonction, servi par une action, permissions, api_run]
---

# Points d'accès d'API

Un **point d'accès** (endpoint) est un appel nommé d'un connecteur d'API : *soumettre cet état*, *lire ces clients*, *créer une commande*. Une fois déclaré, il s'utilise partout sans une ligne de code — comme source d'un [écran](./screens/api-screens.md), dans une action d'écran, un [service](./services.md), une étape de tâche, un [test](./tests.md), par l'assistant IA ou par un appelant extérieur — et chaque point d'accès a **sa propre permission**.

Accès : **Liberty Next → Données → Connecteurs**, un connecteur d'API, carte d'étape **Points d'accès**.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 576" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epe-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epe-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epe-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="epe-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="14" width="880" height="544" rx="14" fill="url(#epe-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="236" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="243" y="35" width="14" height="14" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="263" y="45.5" fill="#4a9eff" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CONNEXION</text>
  <line x1="367" y1="42" x2="378" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="379" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="386" y="35" width="14" height="14" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="406" y="45.5" fill="#c084fc" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AUTHENTIFICATION</text>
  <line x1="510" y1="42" x2="521" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="522" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="529" y="35" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="549" y="45.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENVIRONNEMENTS</text>
  <line x1="653" y1="42" x2="664" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="665" y="30" width="130" height="24" rx="12" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <rect x="672" y="35" width="14" height="14" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="692" y="45.5" fill="#4ade80" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">POINTS D'ACCÈS</text>
  <text x="784.5360000000001" y="45.5" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">12</text>
  <line x1="796" y1="42" x2="807" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="808" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="815" y="35" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="835" y="45.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">WEBHOOKS</text>
  <line x1="939" y1="42" x2="950" y2="42" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="951" y="30" width="130" height="24" rx="12" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="958" y="35" width="14" height="14" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="978" y="45.5" fill="#fb923c" fontSize="8" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">TEST</text>
  <rect x="236" y="66" width="167" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="319.5" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un point d'accès</text>
  <rect x="409" y="66" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="476.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Créer à partir de…</text>
  <rect x="549" y="66" width="134" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="616.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⟳ Vérifier 2 générés</text>
  <rect x="689" y="66" width="106" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="742.0" y="80.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">› 3 générateurs</text>
  <rect x="236" y="96" width="848" height="24" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="246" y="111.5" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">Rechercher…</text>
  <rect x="236" y="128" width="848" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">›</text>
  <rect x="264" y="135" width="29" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="278.5" y="146.5" fill="#4ade80" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">GET</text>
  <text x="305" y="147" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">customers_list</text>
  <text x="399.8" y="147" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">· Clients</text>
  <text x="1042" y="147" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⤢</text>
  <text x="1064" y="147" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="236" y="164" width="848" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="183" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⌄</text>
  <rect x="264" y="171" width="35" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="281.5" y="182.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">POST</text>
  <text x="311" y="183" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">order_create</text>
  <text x="393.4" y="183" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">· Créer une commande</text>
  <rect x="504.2" y="172" width="104" height="15" rx="7.5" fill="none" stroke="#fb923c" strokeWidth="1"/>
  <text x="556.2" y="183" fill="#fb923c" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">modifie des données</text>
  <text x="1042" y="183" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⤢</text>
  <text x="1064" y="183" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="246" y="202" width="240" height="300" rx="8" fill="rgba(255,255,255,0.015)" stroke="#1f2937" strokeWidth="1" strokeDasharray="1 5"/>
  <rect x="404" y="210" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="441" y="224" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">–  100%  +</text>
  <rect x="260" y="238" width="200" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="269" y="247" width="15" height="15" rx="4" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="290" y="258" fill="#4a9eff" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">CE QU'IL EST</text>
  <text x="270" y="276" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Créer une commande</text>
  <line x1="360" y1="287" x2="360" y2="299" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="260" y="300" width="200" height="48" rx="8" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1.3"/>
  <rect x="269" y="309" width="15" height="15" rx="4" fill="rgba(168,85,247,0.10)" stroke="#c084fc" strokeWidth="1"/>
  <text x="290" y="320" fill="#c084fc" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">ENTRÉES</text>
  <text x="270" y="338" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">3 paramètre(s)</text>
  <line x1="360" y1="349" x2="360" y2="361" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="260" y="362" width="200" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="269" y="371" width="15" height="15" rx="4" fill="rgba(255,159,10,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="290" y="382" fill="#fb923c" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">L'APPEL</text>
  <text x="270" y="400" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">POST /orders</text>
  <line x1="360" y1="411" x2="360" y2="423" stroke="#475569" strokeWidth="1" markerEnd="url(#epe-flow)"/>
  <rect x="260" y="424" width="200" height="48" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="269" y="433" width="15" height="15" rx="4" fill="rgba(50,215,75,0.08)" stroke="#4ade80" strokeWidth="1"/>
  <text x="290" y="444" fill="#4ade80" fontSize="8.5" fontWeight="700" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LA RÉPONSE</text>
  <text x="270" y="462" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">toute la réponse</text>
  <rect x="500" y="202" width="574" height="300" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="512" y="222" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">PARAMÈTRES — déclarez les variables &#123;&#123;placeholder&#125;&#125; utilisées dans l'URL / les en-têtes / le corps</text>
  <line x1="512" y1="230" x2="1062" y2="230" stroke="#1f2937" strokeWidth="1"/>
  <rect x="512" y="238" width="550" height="166" rx="6" fill="rgba(255,255,255,0.02)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="522" y="255" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="536" y="255" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="591.12" y="255" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Client</text>
  <text x="1048" y="255" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <text x="524" y="276" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">NOM</text>
  <rect x="524" y="282" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="533" y="295.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">CUSTOMER</text>
  <text x="792.0" y="276" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="792.0" y="282" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="801.0" y="295.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Client</text>
  <text x="524" y="314" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">VALEUR PAR DÉFAUT</text>
  <rect x="524" y="320" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="792.0" y="314" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">EXEMPLE</text>
  <rect x="792.0" y="320" width="258.0" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="801.0" y="333.5" fill="#e2e8f0" fontSize="9.5" fontFamily="ui-monospace, monospace">00001</text>
  <text x="524" y="352" fill="#94a3b8" fontSize="8" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">AIDE — QUOI Y METTRE</text>
  <rect x="524" y="358" width="526" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="533" y="371.5" fill="#e2e8f0" fontSize="9.5" fontFamily="system-ui, sans-serif">Le numéro du client, tel que dans la liste des clients.</text>
  <rect x="524" y="387" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M526.5,392.5 L528.8,394.8 L532.8,390" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="541" y="396" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">Obligatoire</text>
  <text x="644" y="396" fill="#64748b" fontSize="8.5" fontFamily="system-ui, sans-serif">Valeurs autorisées (séparées par des virgules) : —</text>
  <rect x="512" y="412" width="550" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="429" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="536" y="429" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">CURRENCY</text>
  <text x="591.12" y="429" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Devise</text>
  <text x="1034" y="429" fill="#94a3b8" fontSize="9" textAnchor="end" fontFamily="ui-monospace, monospace">= EUR</text>
  <text x="1048" y="429" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="512" y="444" width="550" height="26" rx="6" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="522" y="461" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">›</text>
  <text x="536" y="461" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">LINES</text>
  <text x="573.45" y="461" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Lignes (JSON)</text>
  <text x="1048" y="461" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="512" y="478" width="132" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="578.0" y="492.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter un paramètre</text>
  <rect x="236" y="512" width="848" height="30" rx="6" fill="rgba(255,255,255,0.03)" stroke="#334155" strokeWidth="1"/>
  <text x="248" y="531" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">›</text>
  <rect x="264" y="519" width="29" height="16" rx="4" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="278.5" y="530.5" fill="#c084fc" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">ACT</text>
  <text x="305" y="531" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">order_check</text>
  <text x="381.2" y="531" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">· Vérifier une commande</text>
  <text x="1042" y="531" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">⤢</text>
  <text x="1064" y="531" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="20" y="26" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="41" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Étapes du connecteur, repliées</text>
  <text x="30" y="54" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">Points d'accès choisis</text>
  <line x1="200" y1="43.0" x2="236" y2="42" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="110" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="125" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Triés et filtrables</text>
  <text x="30" y="138" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">méthode, nom, libellé, repère</text>
  <line x1="200" y1="127.0" x2="264" y2="143" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="300" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="315" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Quatre étapes</text>
  <text x="30" y="328" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">les champs de l'étape à côté</text>
  <line x1="200" y1="317.0" x2="260" y2="300" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="20" y="502" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="517" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">ACT · FN</text>
  <text x="30" y="530" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">servi par un service / une fonction</text>
  <line x1="200" y1="519.0" x2="276" y2="527" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="56" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="71" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Créer à partir de…</text>
  <text x="1130" y="84" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écrit à partir du serveur</text>
  <line x1="1120" y1="73.0" x2="459" y2="70" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="150" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="165" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Modifie des données</text>
  <text x="1130" y="178" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">l'assistant demande d'abord</text>
  <line x1="1120" y1="167.0" x2="608.2" y2="179" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="196" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="211" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Sur toute la fenêtre</text>
  <text x="1130" y="224" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">même éditeur, même brouillon</text>
  <line x1="1120" y1="213.0" x2="1046" y2="178" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="320" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="335" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un paramètre, ouvert</text>
  <text x="1130" y="348" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">aide et exemple pour la saisie</text>
  <line x1="1120" y1="337.0" x2="1044" y2="378" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
  <rect x="1120" y="430" width="190" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="445" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un paramètre par ligne</text>
  <text x="1130" y="458" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">nom, libellé, valeur par défaut</text>
  <line x1="1120" y1="447.0" x2="1062" y2="425" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epe-arrow)"/>
</svg>

---

## La liste \{#list\}

Les points d'accès sont classés par ordre alphabétique, avec une zone de recherche au-delà de cinq (nom, libellé, chemin, méthode, description, groupe). Ceux qui partagent un **groupe** se rangent sous son titre, qui se replie et affiche leur nombre.

Chaque ligne commence par une pastille — la méthode HTTP, **FN** pour un point d'accès [servi par une fonction](#function), **ACT** pour un point d'accès [servi par un service](#service) — suivie du nom, du libellé et, le cas échéant, de la mention **modifie des données**. Un clic sur la ligne ouvre le point d'accès juste en dessous ; l'icône **⤢** en bout de ligne ouvre le même éditeur sur toute la fenêtre (*Ouvrir sur toute la fenêtre*), pour un point d'accès au corps long ou aux nombreux paramètres — c'est le même brouillon, écrit par **Enregistrer** sur la page Connecteurs.

| Bouton | Action |
|---|---|
| **Ajouter un point d'accès** | Demande un nom et ouvre un point d'accès vierge. |
| **Créer à partir de…** | Écrit un point d'accès d'après ce que le serveur décrit — voir [plus bas](#create-from). Affiché quand le connecteur a des générateurs. |
| **Vérifier N générés** | Affiché quand le connecteur contient des points d'accès générés : réinterroge le serveur pour chacun et liste ceux qui ne correspondent plus. |
| **N générateurs** | Déplie les générateurs déclarés par le connecteur — un id, ce qu'il crée, la fonction du plugin, une description — pour les modifier ou **Ajouter un générateur**. |

La carte d'étape **Test** exécute un point d'accès sur le connecteur tel qu'il est à l'écran, sans enregistrer : choisir le **Point d'accès**, renseigner ses **Paramètres** (l'aide et l'exemple sous chaque champ), **Exécuter**, lire le **Résultat**. Sur un connecteur encore sans point d'accès, **Tester la connexion** vérifie l'adresse et l'authentification.

---

## Les quatre étapes \{#stages\}

Un point d'accès s'ouvre sur un flux de quatre cartes, l'une sous l'autre sur un canevas qui se zoome (**–** / **+**) — **Ce qu'il est → Entrées → L'appel → La réponse** —, chacune résumant son contenu : le libellé, le nombre de paramètres, `POST /orders` (ou la fonction, ou le service qui le sert), l'emplacement des lignes. Les champs de la carte choisie s'affichent à côté du flux.

### Ce qu'il est \{#what\}

| Champ | Signification |
|---|---|
| **Nom**, **Libellé**, **Description** | L'identifiant utilisé par les actions et les permissions, le libellé court des listes, une phrase de description. |
| **Modifie des données** | À cocher quand l'appel soumet, crée ou lance quelque chose — voir [Les points d'accès qui modifient des données](#writable). |
| **Groupe** | Le titre sous lequel le point d'accès est rangé. Affichage seulement. |
| **Créé à partir de** | Pour un point d'accès généré, son origine, avec **Modifier…** et **Actualiser depuis le serveur** — voir [plus bas](#create-from). |

### Entrées \{#inputs\}

Chaque **paramètre** est une ligne — son nom, son libellé, sa valeur par défaut, *Obligatoire* — qui s'ouvre pour être modifiée.

| Champ | Signification |
|---|---|
| **Nom**, **Libellé** | Le `{{NOM}}` employé dans le chemin, les en-têtes ou le corps, et le libellé de son champ. |
| **Valeur par défaut** | Reprise quand l'appelant omet le paramètre ou le laisse vide. |
| **Exemple**, **Aide — quoi y mettre** | Affichés sous le champ partout où le point d'accès se renseigne, et transmis à l'assistant IA. |
| **Valeurs autorisées** | Une liste fermée : le champ devient une liste déroulante, toute autre valeur est refusée avant tout envoi, et la casse est corrigée. |
| **Obligatoire** | Un appel sans ce paramètre est refusé avant tout envoi. |

### L'appel \{#call\}

**Méthode** et **Chemin de l'URL**, **En-têtes supplémentaires**, **Content-Type**, **Corps** (avec **Formater le JSON**) et **Paramètres de requête**. **Ne pas envoyer un paramètre de requête dont la valeur est vide** n'envoie que les paramètres renseignés, pour un serveur qui lit un paramètre vide comme un filtre sur rien.

À la place d'un appel HTTP, le point d'accès peut être **Servi par une fonction** ou **Servi par une action** — voir plus bas.

### La réponse \{#answer\}

| Champ | Signification |
|---|---|
| **Lignes** | L'emplacement de la liste d'enregistrements dans la réponse. Un écran peut alors lire le point d'accès comme il lit une requête. |
| **Colonnes** | Une ligne par colonne — la **Colonne** et la **Clé dans une ligne** dont elle est lue (`AN8` ← `z_AN8_19`) : les colonnes, dans l'ordre, nommées pour que le dictionnaire les reconnaisse. **Colonnes depuis une réponse** appelle le point d'accès une fois avec les exemples de ses paramètres et propose les clés de sa première ligne : un clic en ajoute une. |
| **Titres des colonnes** | L'endroit où la réponse donne son titre à chaque clé — le libellé d'une colonne que ni l'écran ni le dictionnaire ne nomment. |
| **Paramètre du nombre de lignes** | Le paramètre qui porte le nombre maximal de lignes : un écran le renseigne avec son propre *Max lignes*. |
| **Indicateur « autres lignes »** | L'endroit où le serveur signale qu'il y a plus que ce qu'il a retourné : l'écran indique alors un résultat tronqué. |
| **Champs d'erreur** | L'endroit où le serveur place ses erreurs quand il répond 200 malgré tout : un contenu à cet endroit fait de l'appel un échec, avec ce contenu comme erreur. |
| **Champs d'avertissement** | L'endroit où le serveur place ses avertissements : signalés avec la réponse, l'appel reste valide. |
| **Champ de réponse**, **Correspondances de réponse** | La partie de la réponse retournée, et des noms logiques associés à des chemins de la réponse. |

Un chemin peut se terminer par un filtre sur les éléments d'une liste — `result.errors[errorLevel=1]` — pour un serveur qui range ses erreurs et ses avertissements dans la même liste.

---

## Créer à partir de… \{#create-from\}

Un point d'accès générique — *lancer n'importe quel état*, avec du JSON pour tout ce qui dépend de l'état — est difficile à renseigner. Quand l'application placée derrière le connecteur fournit des **générateurs**, **Créer à partir de…** écrit à la place un point d'accès dédié :

<svg viewBox="0 0 1320 378" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="epc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="epc-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="epc-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="epc-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="260" y="26" width="800" height="332" rx="14" fill="url(#epc-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="276" y="50" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Créer un point d'accès à partir du serveur</text>
  <line x1="260" y1="64" x2="1060" y2="64" stroke="#1f2937" strokeWidth="1"/>
  <rect x="276" y="76" width="768" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286" y="92.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">A JDE application (its list and its record)</text>
  <text x="1030" y="93" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">⌄</text>
  <text x="276" y="122" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Le générateur dit en une phrase ce qu'il construit.</text>
  <text x="276" y="148" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">RECHERCHER</text>
  <rect x="276" y="156" width="680" height="26" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="286" y="172.5" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">P01012</text>
  <rect x="964" y="158" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1004.0" y="172.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">⌕ Chercher</text>
  <text x="276" y="202" fill="#64748b" fontSize="9" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">3 TROUVÉS — CHOISISSEZ-EN UN</text>
  <rect x="276" y="210" width="768" height="26" rx="4" fill="rgba(74,158,255,0.12)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="288" y="227" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">P01012</text>
  <text x="360" y="227" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book</text>
  <rect x="276" y="238" width="768" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="288" y="255" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">P01012D</text>
  <text x="360" y="255" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book Translations</text>
  <rect x="276" y="266" width="768" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="288" y="283" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="ui-monospace, monospace">P0101</text>
  <text x="360" y="283" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Address Book Revisions</text>
  <line x1="260" y1="308" x2="1060" y2="308" stroke="#1f2937" strokeWidth="1"/>
  <rect x="810" y="320" width="80" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="850.0" y="334.5" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="900" y="320" width="144" height="22" rx="5" fill="url(#epc-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="972.0" y="334.5" fill="#e2e8f0" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">✦ Créer le point d'accès</text>
  <rect x="20" y="76" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="91" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Un générateur</text>
  <text x="30" y="104" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclaré par l'application</text>
  <line x1="220" y1="93.0" x2="276" y2="89" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
  <rect x="20" y="160" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="175" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trouver l'objet</text>
  <text x="30" y="188" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">sur le serveur, tel qu'enregistré</text>
  <line x1="220" y1="177.0" x2="276" y2="169" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
  <rect x="20" y="240" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="255" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">En choisir un</text>
  <text x="30" y="268" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">puis répondre à ses questions</text>
  <line x1="220" y1="257.0" x2="276" y2="223" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
  <rect x="1100" y="294" width="200" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1110" y="309" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Créer</text>
  <text x="1110" y="322" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">ajouté non enregistré, ouvert</text>
  <line x1="1100" y1="311.0" x2="1044" y2="331" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#epc-arrow)"/>
</svg>

1. **Rechercher** l'objet sur le serveur.
2. **Répondre** à quelques questions — quelles colonnes, quelles options.
3. **Créer le point d'accès** : un paramètre nommé par entrée, avec son libellé, son aide et sa valeur par défaut. Il est ajouté sans être enregistré, et ouvert pour relecture.

Un générateur peut aussi construire plusieurs points d'accès à la fois, ou un **écran complet** : la fenêtre demande alors l'application, l'identifiant de l'écran, son titre et s'il faut l'ajouter au menu, puis crée les points d'accès et l'écran en une seule opération validée — rien n'est écrit si un élément est invalide. Un point d'accès déjà présent est conservé tel quel et utilisé par le nouvel écran, sauf si **Remplacer les N point(s) d'accès qui existent déjà** est coché.

Un point d'accès généré garde la trace de son origine (**Créé à partir de**, dans *Ce qu'il est*) :

- **Modifier…** rouvre la fenêtre sur ce dont il a été construit, avec ses choix d'alors — cocher une colonne, un champ, un filtre. Ce que le générateur construit est fusionné dans le point d'accès : les différences s'affichent d'abord (*Voir ce qui change*), le nom, le libellé et les textes des paramètres sont gardés, et les points d'accès de lecture, d'ajout, de modification et de suppression d'une application suivent ensemble.
- **Actualiser depuis le serveur** le reconstruit à partir de la même demande et montre ce qui change avant de l'appliquer : l'adresse, le corps et les paramètres suivent le serveur ; le nom, le libellé, la description et ce qui a été écrit sur un paramètre conservé sont gardés.

Rien n'est enregistré avant **Enregistrer**, sur la page Connecteurs.

Les générateurs du connecteur AIS de JD Edwards sont décrits dans [Nomajde — Créer à partir de…](../../nomajde/ais/create-from.md).

---

## Les points d'accès qui modifient des données \{#writable\}

Un point d'accès marqué **Modifie des données** est traité à part :

- un écran peut le désigner comme insertion, mise à jour ou suppression — voir [Un écran sur un point d'accès d'API](./screens/api-screens.md#save) ;
- l'**assistant IA** ne l'appelle pas comme une lecture : il faut que l'*Outil API* et les *Outils d'écriture* soient activés dans **Administrer → App → Assistant IA**, que l'utilisateur soit autorisé à modifier des données par l'assistant, et l'assistant propose une **carte** dans la conversation — rien n'est envoyé tant que l'utilisateur ne l'applique pas. En MCP, *Autoriser les modifications en MCP* est également nécessaire ;
- l'appel est consigné dans l'[utilisation de l'IA](../../monitoring/ai-usage.md), comme les autres modifications faites par l'assistant.

Un point d'accès non marqué est traité comme une lecture : **marquer tous les points d'accès qui écrivent**.

---

## Servi par une fonction \{#function\}

Un seul appel HTTP ne peut pas tout faire : modifier un enregistrement qu'un serveur ne propose que par un formulaire suppose de le retrouver, de vérifier qu'un seul a été trouvé, puis d'agir. **Servi par une fonction** désigne une fonction du plugin d'une application qui répond à la place de l'appel HTTP. Ses arguments sont les paramètres du point d'accès ; sa réponse est traitée comme une réponse — lignes, champs d'erreur et d'avertissement, correspondances, *Modifie des données*. Pour un écran, une action, une tâche ou l'assistant, c'est un point d'accès comme un autre.

## Servi par un service \{#service\}

**Servi par une action** désigne un [service](./services.md) : ses étapes — requêtes, autres points d'accès, fonctions, conditions, boucles — s'exécutent sur le serveur et répondent comme un seul point d'accès. Les paramètres du point d'accès sont les entrées du service ; ce que le service retourne est la réponse. Il s'exécute avec la permission du point d'accès : qui peut appeler le point d'accès exécute ses étapes. **Exposer**, dans la page Services, crée un tel point d'accès en un clic.

---

## Permissions et sûreté \{#security\}

Chaque point d'accès a sa permission, `api:<connecteur>:<point d'accès>` : un rôle peut être autorisé pour un état ou une orchestration, sans l'être pour tous. Cette permission tient parce qu'une valeur ne peut jamais détourner un appel :

- dans le **chemin**, une valeur ne peut ni remonter hors du chemin du point d'accès, ni donner une autre adresse ;
- dans un **corps JSON**, une valeur placée dans une chaîne reste dans cette chaîne ;
- dans un **corps de formulaire**, une valeur ne peut pas ajouter une paire ;
- un **fichier** envoyé par un appel fait pour le compte d'un utilisateur reste dans le dossier désigné par le point d'accès.

Un appel qui enfreindrait l'une de ces règles est refusé avant tout envoi.

---

## Ce que voit l'appelant en cas d'échec \{#errors\}

- Un serveur injoignable est désigné par son adresse : *cannot connect to https://host:8999 — check the connector's base URL*.
- Une erreur HTTP reprend les termes du serveur quand les champs d'erreur les trouvent.
- Une liste absente de l'endroit indiqué par le point d'accès est une erreur qui nomme ce que contient la réponse, et non un écran vide.

---

## Conseils & bonnes pratiques \{#tips\}

- Rédiger l'**aide** et l'**exemple** de chaque paramètre : ils servent autant aux personnes qui remplissent le formulaire qu'à l'assistant.
- Préférer plusieurs points d'accès précis à un point d'accès générique en JSON : chacun a sa permission et son formulaire.
- Déclarer les **champs d'erreur** de tout serveur qui répond 200 avec ses erreurs dans le corps ; sinon, un enregistrement refusé passe pour un succès.
- Regrouper sous un même titre les points d'accès d'une application ou d'un sujet.
- Couvrir par des [tests](./tests.md) les points d'accès dont dépend le métier.

---

## Voir aussi

- [Connecteurs](../connectors.md) — le connecteur lui-même : adresse, authentification, environnements.
- [Un écran sur un point d'accès d'API](./screens/api-screens.md) · [Services](./services.md) · [Tests](./tests.md)
- [API REST](../../references/rest-api.md)
