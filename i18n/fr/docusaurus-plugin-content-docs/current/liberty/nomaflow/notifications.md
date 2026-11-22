---
title: Notifications
description: "Les notifications de Liberty Next : des règles qui réagissent à une écriture dans un écran, à un événement de tâche Nomaflow (échec, succès, annulation, planification manquée, exécution longue, retard) ou à une action d'écran, et qui délivrent dans la cloche de l'application, par e-mail ou par une requête ou un endpoint de connecteur. Compte SMTP, destinataires, variables, alertes de tâche."
keywords: [Liberty Next, Nomaflow, notifications, alertes, cloche, boîte de réception, e-mail, SMTP, notifications.toml, échec de tâche, planification manquée, exécution longue, send_notification, webhook]
---

# Notifications

Une notification prévient quelqu'un qu'un événement s'est produit : une période clôturée, une tâche de nuit en échec, une planification manquée. Les **règles** décident quand ; les **canaux** décident comment — la cloche de l'application, un e-mail, ou un appel à un connecteur.

---

## Vue d'ensemble

<svg viewBox="0 0 1320 620" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="nfnt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="nfnt-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="nfnt-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="nfnt-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="580" rx="14" fill="url(#nfnt-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="240" y="46" fill="#4a9eff" fontSize="13" fontFamily="system-ui, sans-serif">◔</text>
  <text x="260" y="46" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Notifications</text>
  <rect x="951" y="32" width="129" height="24" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="1015.5" y="47.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">↻ Recharger la config</text>
  <rect x="824" y="32" width="119" height="24" rx="5" fill="url(#nfnt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="883.5" y="47.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">+ Ajouter une règle</text>
  <line x1="220" y1="66" x2="1100" y2="66" stroke="#1f2937" strokeWidth="1"/>
  <rect x="240" y="80" width="230" height="500" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <rect x="248" y="90" width="214" height="44" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="260" y="107" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">◔</text>
  <text x="274" y="107" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">job_failed</text>
  <text x="274" y="123" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">tâche ∗ · failure, missed</text>
  <rect x="419" y="96" width="35" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="426" y="107.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">email</text>
  <rect x="248" y="142" width="214" height="44" rx="7" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="159" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">◔</text>
  <text x="274" y="159" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">period_closed</text>
  <text x="274" y="175" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">sales.period_status · update · when</text>
  <rect x="419" y="148" width="35" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="426" y="159.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">email</text>
  <rect x="377" y="148" width="39" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="384" y="159.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="248" y="194" width="214" height="44" rx="7" fill="transparent" stroke="#1f2937" strokeWidth="1"/>
  <text x="260" y="211" fill="#64748b" fontSize="9" fontFamily="system-ui, sans-serif">◔</text>
  <text x="274" y="211" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">ask_review</text>
  <text x="274" y="227" fill="#94a3b8" fontSize="8" fontFamily="system-ui, sans-serif">déclenchée par une action d'écran</text>
  <rect x="415" y="200" width="39" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="422" y="211.5" fill="#4a9eff" fontSize="7.5" fontWeight="700" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="482" y="80" width="598" height="500" rx="8" fill="rgba(255,255,255,0.02)" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="101" fill="#4a9eff" fontSize="10" fontFamily="system-ui, sans-serif">◔</text>
  <text x="512" y="101" fill="#e2e8f0" fontSize="10.5" fontWeight="700" fontFamily="ui-monospace, monospace">[notifications.job_failed]</text>
  <line x1="482" y1="112" x2="1080" y2="112" stroke="#1f2937" strokeWidth="1"/>
  <text x="496" y="128" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ID DE LA RÈGLE</text>
  <rect x="496" y="133" width="180" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="147.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">job_failed</text>
  <text x="686" y="128" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIBELLÉ</text>
  <rect x="686" y="133" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="696" y="147.5" fill="#94a3b8" fontSize="9" fontFamily="system-ui, sans-serif">Une tâche a échoué ou a été manquée</text>
  <rect x="900" y="139" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M902.5,144.5 L904.8,146.8 L908.8,142" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="917" y="148" fill="#cbd5e1" fontSize="9.5" fontFamily="system-ui, sans-serif">Activée</text>
  <text x="496" y="178" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Déclencheur</text>
  <rect x="496" y="184" width="351" height="22" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="555.5" y="198.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Un événement d'écran</text>
  <rect x="616" y="185" width="121" height="20" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="676.5" y="198.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Un événement de tâche</text>
  <line x1="738" y1="189" x2="738" y2="201" stroke="#334155" strokeWidth="1"/>
  <text x="792.5" y="198.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">Une action d'écran</text>
  <text x="496" y="224" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TÂCHES (VIDE = TOUTES)</text>
  <rect x="496" y="229" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="243.5" fill="#475569" fontSize="9" fontFamily="system-ui, sans-serif">Ajouter une tâche…</text>
  <text x="710" y="224" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ÉVÉNEMENTS</text>
  <rect x="710" y="235" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M712.5,240.5 L714.8,242.8 L718.8,238" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="727" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">failure</text>
  <rect x="772.32" y="235" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="789.32" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">succeeded</text>
  <rect x="844.1600000000001" y="235" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="861.1600000000001" y="244" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">canceled</text>
  <rect x="710" y="253" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M712.5,258.5 L714.8,260.8 L718.8,256" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="727" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">missed</text>
  <rect x="767.56" y="253" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="784.56" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">long_run</text>
  <rect x="834.64" y="253" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="851.64" y="262" fill="#cbd5e1" fontSize="8.5" fontFamily="system-ui, sans-serif">late</text>
  <text x="496" y="288" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">SEUIL D'EXÉCUTION LONGUE (MINUTES)</text>
  <rect x="496" y="293" width="200" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="307.5" fill="#475569" fontSize="9.5" fontFamily="system-ui, sans-serif"></text>
  <text x="496" y="338" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Remise</text>
  <rect x="496" y="347" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="513" y="356" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">portal</text>
  <rect x="557.24" y="347" width="11" height="11" rx="2" fill="rgba(74,158,255,0.25)" stroke="#4a9eff" strokeWidth="1"/>
  <path d="M559.74,352.5 L562.04,354.8 L566.04,350" fill="none" stroke="#4a9eff" strokeWidth="1.6"/>
  <text x="574.24" y="356" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">email</text>
  <rect x="613.44" y="347" width="11" height="11" rx="2" fill="#0a0e1a" stroke="#475569" strokeWidth="1"/>
  <text x="630.44" y="356" fill="#cbd5e1" fontSize="9" fontFamily="system-ui, sans-serif">action</text>
  <text x="496" y="380" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">DESTINATAIRES</text>
  <rect x="496" y="388" width="61" height="16" rx="4" fill="#4a9eff" fillOpacity="0.14" stroke="#4a9eff" strokeOpacity="0.5" strokeWidth="1"/>
  <text x="503" y="399.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" fontFamily="system-ui, sans-serif">role:ops ✕</text>
  <rect x="565" y="385" width="133" height="20" rx="6" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <rect x="566" y="386" width="41" height="18" rx="5" fill="rgba(74,158,255,0.18)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="586.5" y="398.5" fill="#4a9eff" fontSize="8.5" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">role</text>
  <line x1="608" y1="390" x2="608" y2="400" stroke="#334155" strokeWidth="1"/>
  <text x="629.5" y="398.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">user</text>
  <line x1="651" y1="390" x2="651" y2="400" stroke="#334155" strokeWidth="1"/>
  <text x="674.5" y="398.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">email</text>
  <rect x="706" y="385" width="360" height="20" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="716" y="398.5" fill="#475569" fontSize="8.5" fontFamily="system-ui, sans-serif">Choisir ou saisir…</text>
  <text x="496" y="426" fill="#e2e8f0" fontSize="9.5" fontWeight="700" fontFamily="system-ui, sans-serif">Message</text>
  <text x="496" y="442" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">OBJET</text>
  <rect x="496" y="447" width="538" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="461.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;JOB&#125;: &#123;STATE&#125;</text>
  <rect x="1040" y="447" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="461" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="496" y="486" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CORPS</text>
  <rect x="496" y="491" width="538" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="505.5" fill="#94a3b8" fontSize="9.5" fontFamily="ui-monospace, monospace">&#123;ERROR&#125;</text>
  <rect x="1040" y="491" width="24" height="20" rx="4" fill="transparent" stroke="#334155" strokeWidth="1"/>
  <text x="1052.0" y="505" fill="#94a3b8" fontSize="9.5" textAnchor="middle" fontFamily="system-ui, sans-serif">&#123; &#125;</text>
  <text x="496" y="530" fill="#64748b" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LIEN (UNE ROUTE QUE LA NOTIFICATION OUVRE)</text>
  <rect x="496" y="535" width="538" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="506" y="549.5" fill="#475569" fontSize="9.5" fontFamily="ui-monospace, monospace">/nomaflow/runs</text>
  <line x1="482" y1="566" x2="1080" y2="566" stroke="#1f2937" strokeWidth="1"/>
  <rect x="496" y="572" width="74" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="533.0" y="585.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕ Supprimer</text>
  <rect x="576" y="572" width="102" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="627.0" y="585.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">➤ Envoyer un test</text>
  <rect x="987" y="572" width="79" height="20" rx="5" fill="url(#nfnt-g-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="1026.5" y="585.5" fill="#e2e8f0" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="system-ui, sans-serif">Enregistrer</text>
  <rect x="922" y="572" width="59" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="951.5" y="585.5" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">Annuler</text>
  <rect x="20" y="90" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="105" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Règles</text>
  <text x="30" y="118" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">déclencheur · canaux</text>
  <line x1="200" y1="107.0" x2="248" y2="112" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="20" y="250" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="265" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Trois déclencheurs</text>
  <text x="30" y="278" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">écriture, tâche, action d'écran</text>
  <line x1="200" y1="267.0" x2="496" y2="195" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="20" y="584" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="599" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Envoyer un test</text>
  <text x="30" y="612" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">valeurs d'exemple, sans enregistrer</text>
  <line x1="200" y1="601.0" x2="627.0" y2="593" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="72" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="87" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Ajouter une règle</text>
  <text x="1130" y="100" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">dans l'en-tête de la page</text>
  <line x1="1120" y1="89.0" x2="931" y2="57" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="230" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="245" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Événements de tâche</text>
  <text x="1130" y="258" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">failure, missed, long_run, late…</text>
  <line x1="1120" y1="247.0" x2="1066" y2="250" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="360" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="375" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Destinataires</text>
  <text x="1130" y="388" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">rôle, utilisateur ou e-mail</text>
  <line x1="1120" y1="377.0" x2="1066" y2="395" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
  <rect x="1120" y="450" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="465" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Marqueurs</text>
  <text x="1130" y="478" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">&#123;JOB&#125;, &#123;STATE&#125;, &#123;ERROR&#125;…</text>
  <line x1="1120" y1="467.0" x2="1066" y2="458" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#nfnt-arrow)"/>
</svg>

---

## Ce que voient les utilisateurs \{#inbox\}

- **La cloche** de l'en-tête affiche le nombre de notifications non lues, mis à jour en temps réel. Son menu liste les six dernières ; **Tout marquer comme lu** et **Tout voir** sont en bas. Un clic sur une notification la marque comme lue et ouvre son lien.
- **La page Notifications** (depuis **Tout voir**) les liste avec les onglets **Toutes** / **Non lues** et **Tout marquer comme lu**.

Chaque utilisateur ne voit que ses propres notifications.

---

## Le compte e-mail \{#smtp\}

Les e-mails passent par le serveur SMTP défini dans **Liberty Next → Administrer → App → Notifications (e-mail)** :

| Champ | Défaut | Remarques |
|---|---|---|
| Notifications activées | activé | Désactivé : aucune règle ne se déclenche. |
| Hôte SMTP, Port | —, `587` | Sans hôte, seule la cloche fonctionne. |
| Chiffrement | STARTTLS | *STARTTLS (en général port 587)*, *SSL / TLS implicite (en général port 465)* ou *Aucun (connexion en clair)*. Changer d'option règle le port habituel. |
| Délai (s) | `20` | |
| Utilisateur, Mot de passe | — | Le mot de passe est chiffré avec la clé maître de l'installation. |
| Adresse d'expédition | l'utilisateur | Reprend le nom d'utilisateur s'il est vide. |
| Conserver les notifications lues (jours, 0 = toujours) | `90` | Les notifications lues plus anciennes sont purgées, au démarrage puis toutes les six heures. Les notifications non lues sont conservées. |

Les e-mails sont en texte brut : l'objet, le corps, puis le lien de la règle.

---

## Règles \{#rules\}

Les règles se modifient dans **Liberty Next → Logique → Notifications** et s'enregistrent dans `notifications.toml` — une modification s'applique sans redémarrage. **Envoyer un test** envoie la règle en cours de modification, même non enregistrée, avec des valeurs d'exemple à ses destinataires.

Les règles sont listées à gauche, chacune avec son déclencheur et ses canaux ; **Ajouter une règle** se trouve dans l'en-tête de la page. Sans aucune règle, la page indique *Pas encore de règle : « Ajouter une règle », en haut, crée la première.*

### Déclencheurs

| Déclencheur | Se déclenche quand | Réglages |
|---|---|---|
| **Un événement d'écran** | Une ligne est créée, modifiée ou supprimée par un écran. | Application, Écran, Événements — *un enregistrement est ajouté* (`insert`), *un enregistrement est modifié* (`update`), *un enregistrement est supprimé* (`delete`) — et, au besoin, **Seulement quand la ligne écrite a (ET)** : des conditions champ = valeur, toutes requises (`STATUS = closed`). |
| **Un événement de tâche** | Une exécution Nomaflow se termine. | Tâches — plusieurs choisies dans une même liste, vide = toutes les tâches — et Événements : *il échoue* (`failure`), *il réussit* (`succeeded`), *il est annulé* (`canceled`), *il n'a pas démarré au moment prévu* (`missed`, voir [Planifications](./jobs/schedules.md#missed)), *il dure plus longtemps que permis* (`long_run`, avec un seuil en minutes), *il n'a pas fini à l'heure fixée* (`late` : aucune exécution réussie à l'échéance **Doit avoir réussi avant** de la tâche). |
| **Une action d'écran** | Une action d'écran de type `send_notification` s'exécute (un bouton ou une étape d'une chaîne d'actions), ou l'étape **Notification** d'un [service](../framework/build/services.md#notification). | Rien de plus : l'action ou l'étape nomme la règle et transmet les valeurs de la ligne, ainsi que celles dont son message a besoin. |

`long_run` se vérifie à la fin de l'exécution : il signale une exécution qui a duré au moins le seuil, pas une exécution encore en cours.

### Canaux \{#channels\}

Dans l'éditeur, les canaux se cochent sous leur nom : **Dans l'application** (`portal`), **E-mail** (`email`), **Une requête ou un point d'accès** (`action`).

| Canal | Délivre |
|---|---|
| `portal` | Une notification dans la cloche de chaque utilisateur destinataire. |
| `email` | Un e-mail à chaque destinataire qui a une adresse. |
| `action` | Lance une requête (connecteur SQL) ou appelle un endpoint (connecteur API) avec les valeurs du message — pour publier dans Teams ou sur un webhook, ou écrire dans une table de journal. Ses paramètres sont les valeurs de l'événement, plus `SUBJECT`, `BODY` et `RULE`. |

Quand **Une requête ou un point d'accès** est coché, la règle désigne ce qu'elle exécute : **Action : connecteur**, puis **Requête (connecteur SQL)** ou **Point d'accès (connecteur API)**, choisis parmi les requêtes ou les points d'accès de ce connecteur. **Valeurs passées** ajoute ce que la requête ou le service reçoit en plus des valeurs de l'événement, en lignes nom / valeur ; une valeur peut contenir des marqueurs (`{PERIOD}`). La règle n'est pas enregistrée tant que le connecteur ou sa requête / son point d'accès manque : *Choisissez le connecteur et la requête ou le point d'accès que l'action exécute.*

**Garder cette règle telle quelle à la mise à jour** fait qu'une mise à jour de l'application la laisse telle qu'enregistrée ici. Le titre de l'éditeur donne le libellé de la règle, puis son identifiant.

Un canal en échec est journalisé et n'arrête pas les autres. L'envoi se fait en arrière-plan : un enregistrement ou une tâche n'attend jamais le serveur de messagerie.

### Destinataires

| Forme | Signifie |
|---|---|
| `user:alice` | Cet utilisateur. |
| `role:controllers` | Chaque utilisateur actif titulaire du rôle. |
| `email:finance@example.com` | Une adresse — e-mail uniquement. |

Dans l'éditeur, choisir **Un rôle**, **Un utilisateur** ou **Une adresse e-mail** à côté du champ, puis le rôle ou l'utilisateur dans la liste, ou saisir une adresse ; chaque destinataire devient une pastille, retirée par sa ✕. Une entrée sans préfixe qui contient `@` est traitée comme une adresse ; toute autre est ignorée et consignée dans le journal.

### Variables

L'objet, le corps et le lien acceptent des variables `{NOM}`, en majuscules ou en minuscules :

| Déclencheur | Variables |
|---|---|
| Événement d'écran | Chaque colonne de la ligne écrite, plus `USER`, `APP`, `SCREEN`, `EVENT`. |
| Événement de tâche | `JOB`, `RUN_ID`, `STATE`, `ERROR`, `DURATION_MINUTES`, `ROWS`, et `EXPECTED_AT` pour une planification manquée ou une échéance. |
| Action d'écran | Les valeurs transmises par l'action, plus `USER`. |

Une variable inconnue est laissée telle quelle. Dans l'éditeur, le bouton **{ }** à côté de l'objet, du corps et du lien liste les variables du déclencheur et insère celle choisie à l'emplacement du curseur ; le même bouton figure à côté de l'objet et du corps d'une [étape `notify`](./steps.md#notify).

### En TOML

```toml title="notifications.toml"
[notifications.period_closed]
label = "Période clôturée"
trigger = { kind = "screen", app = "sales", screen = "period_status", events = ["update"], when = [{ field = "STATUS", value = "closed" }] }
channels = ["portal", "email"]
recipients = ["role:controllers", "email:finance@example.com"]
subject = "Période {PERIOD} clôturée par {USER}"
body = "Société {COMPANY} : la période passe en lecture seule."
link = "/screen/sales/period_status"

[notifications.job_failed]
trigger = { kind = "job", events = ["failure", "missed"] }
channels = ["email"]
recipients = ["role:ops"]
subject = "{JOB} : {STATE}"
body = "{ERROR}"
```

---

## Depuis une étape de tâche \{#notify-step\}

Une tâche peut aussi envoyer elle-même un message, sous forme d'étape, avec en pièces jointes les fichiers qu'elle a produits — une synthèse planifiée. Ses destinataires prennent les mêmes formes, plus `user:{USER}` : la personne qui a lancé l'exécution, écartée quand c'est une planification qui l'a lancée. L'étape envoie dans la cloche et par e-mail uniquement : le canal *requête ou point d'accès* est propre aux règles — une tâche qui doit appeler un point d'accès le fait avec sa propre étape *Appeler une adresse*. Voir [Étapes → Notification](./steps.md#notify).

---

## Les alertes propres à une tâche \{#job-alerts\}

Une tâche peut aussi prévenir en cas d'échec sans règle, depuis le bloc **Alertes** de l'éditeur de tâche :

```toml title="jobs.toml"
[jobs.alerts]
on_failure = true
recipients = ["role:ops", "user:alice"]
```

En cas d'échec, chaque destinataire reçoit une notification *Job &lt;id&gt; failed* avec l'erreur, dans la cloche et par e-mail. Avec **Avertir si une exécution dépasse (minutes)** (`on_long_run_minutes`), une exécution qui dure au moins ce temps envoie en plus *Job &lt;id&gt; ran N min (threshold T)*, qu'elle ait échoué ou non. Les destinataires se choisissent comme dans une règle — un rôle, un utilisateur ou une adresse ; dans `jobs.toml`, ils s'écrivent `user:`, `role:` ou `email:`. Voir [Créer une tâche → Alertes](./jobs/create.md#alerts).

---

## Conseils \{#tips\}

- Commencer par une règle : `failure` et `missed` sur toutes les tâches, vers le rôle d'exploitation.
- Préférer les rôles aux utilisateurs nommés : la règle suit les changements d'équipe.
- Utiliser **Envoyer un test** après avoir modifié le compte SMTP.
- Réserver la cloche à ce qui demande une action ; envoyer le reste par e-mail à une boîte partagée.
