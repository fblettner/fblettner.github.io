---
title: Translations and icons
description: "Menu labels per language with the l map (l.fr, l.de…), how the language is chosen, and the icon names the Liberty Next sidebar can draw."
keywords: [Liberty Next, menus, translation, l.fr, language, X-Liberty-Lang, Accept-Language, icon, sidebar]
---

# Translations and icons

Two fields of every menu item shape what the user reads in the sidebar: `l`, the label per language, and `icon`.

---

## At a glance

<svg viewBox="0 0 1320 425" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="mti-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="mti-g-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="mti-g-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.12"/></linearGradient>
    <marker id="mti-flow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#64748b"/></marker>
  </defs>

  <rect x="220" y="20" width="880" height="385" rx="14" fill="url(#mti-g-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <rect x="240" y="40" width="520" height="178" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <text x="254" y="62" fill="#e2e8f0" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Security</text>
  <text x="307.04" y="62" fill="#94a3b8" fontSize="8.6" fontFamily="ui-monospace, monospace">security</text>
  <rect x="649" y="50" width="99" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="698.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑃ Find dependencies</text>
  <rect x="573" y="50" width="72" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="609.0" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⑂ Find usages</text>
  <rect x="524" y="50" width="45" height="20" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="546.5" y="63.5" fill="#94a3b8" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif">⧉ Clone</text>
  <rect x="475" y="52.5" width="41" height="15" rx="4" fill="rgba(255,159,10,0.12)" stroke="rgba(255,159,10,0.45)" strokeWidth="1"/>
  <text x="495.5" y="63.3" fill="#fb923c" fontSize="7.8" fontWeight="700" textAnchor="middle" fontFamily="ui-monospace, monospace">folder</text>
  <line x1="240" y1="78" x2="760" y2="78" stroke="#1f2937" strokeWidth="1"/>
  <text x="278.5" y="102.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="338.0" y="102.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <rect x="371" y="88" width="77" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="409.5" y="102.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <line x1="252" y1="116" x2="748" y2="116" stroke="#1f2937" strokeWidth="1"/>
  <text x="252" y="130" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">TRANSLATIONS</text>
  <rect x="252" y="135" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="149.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">fr  Français</text>
  <text x="390" y="149.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="408" y="135" width="310" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="149.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Sécurité</text>
  <rect x="724" y="135" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="735.0" y="149.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="252" y="161" width="150" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="175.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">de  Deutsch</text>
  <text x="390" y="175.3" fill="#64748b" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">▾</text>
  <rect x="408" y="161" width="310" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="417" y="175.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Sicherheit</text>
  <rect x="724" y="161" width="22" height="22" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
  <text x="735.0" y="175.5" fill="#94a3b8" fontSize="8.5" textAnchor="middle" fontFamily="system-ui, sans-serif">✕</text>
  <rect x="252" y="188" width="46" height="18" rx="4" fill="transparent" stroke="#475569" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="275" y="200.5" fill="#94a3b8" fontSize="8.2" textAnchor="middle" fontFamily="system-ui, sans-serif">+ add</text>
  <text x="252" y="222" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Per-language label overrides.</text>
  <rect x="240" y="232" width="520" height="140" rx="8" fill="rgba(255,255,255,0.02)" stroke="#334155" strokeWidth="1"/>
  <rect x="252" y="242" width="53" height="22" rx="5" fill="rgba(74,158,255,0.14)" stroke="rgba(74,158,255,0.45)" strokeWidth="1"/>
  <text x="278.5" y="256.3" fill="#4a9eff" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">General</text>
  <text x="338.0" y="256.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Advanced</text>
  <text x="409.5" y="256.3" fill="#94a3b8" fontSize="8.6" textAnchor="middle" fontFamily="system-ui, sans-serif">Translations</text>
  <text x="252" y="284" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">LABEL ∗</text>
  <rect x="252" y="289" width="496" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="303.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">Security</text>
  <text x="252" y="326" fill="#94a3b8" fontSize="7.8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">ICON</text>
  <rect x="252" y="331" width="496" height="22" rx="5" fill="#0a0e1a" stroke="#334155" strokeWidth="1"/>
  <text x="261" y="345.3" fill="#cbd5e1" fontSize="8.8" fontFamily="system-ui, sans-serif">shield</text>
  <text x="252" y="365" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">Lucide icon name (e.g. shield, users).</text>
  <rect x="784" y="40" width="296" height="332" rx="8" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>
  <text x="796" y="60" fill="#94a3b8" fontSize="8" fontWeight="700" letterSpacing="0.06em" fontFamily="system-ui, sans-serif">CRM</text>
  <text x="798" y="82" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">◫</text>
  <text x="816" y="82" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">Overview</text>
  <text x="798" y="108" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">⛉</text>
  <text x="816" y="108" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">Security</text>
  <text x="812" y="134" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">☺</text>
  <text x="830" y="134" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">Users</text>
  <text x="812" y="160" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">⚿</text>
  <text x="830" y="160" fill="#cbd5e1" fontSize="9.2" fontFamily="system-ui, sans-serif">Roles</text>
  <text x="798" y="186" fill="#94a3b8" fontSize="9.5" fontFamily="system-ui, sans-serif">▤</text>
  <text x="816" y="186" fill="#e2e8f0" fontSize="9.2" fontWeight="700" fontFamily="system-ui, sans-serif">Sales</text>
  <text x="796" y="230" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">label in the interface language;</text>
  <text x="796" y="242" fill="#64748b" fontSize="7.8" fontFamily="system-ui, sans-serif">label otherwise</text>
  <rect x="20" y="60" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="75" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Translations</text>
  <text x="30" y="88" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">one row per language</text>
  <line x1="200" y1="77.0" x2="371" y2="96" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mti-arrow)"/>
  <rect x="20" y="142" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="157" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Language · label</text>
  <text x="30" y="170" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">en, fr, de… an empty row is dropped</text>
  <line x1="200" y1="159.0" x2="252" y2="146" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mti-arrow)"/>
  <rect x="20" y="325" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="30" y="340" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">Icon</text>
  <text x="30" y="353" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">a name the sidebar draws</text>
  <line x1="200" y1="342.0" x2="252" y2="342" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mti-arrow)"/>
  <rect x="1120" y="100" width="180" height="34" rx="8" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="1130" y="115" fill="currentColor" fontSize="10" fontWeight="700" fontFamily="system-ui, sans-serif">In the sidebar</text>
  <text x="1130" y="128" fill="currentColor" fontSize="9" fontFamily="system-ui, sans-serif" opacity="0.7">icon + label of the user's language</text>
  <line x1="1120" y1="117.0" x2="1070" y2="104" stroke="#94a3b8" strokeWidth="1.2" markerEnd="url(#mti-arrow)"/>
</svg>

---

## Translations — the `l` map \{#translations\}

`label` is the default label; `l` adds one label per language:

```toml
[[menus.crm.items]]
id = "security"
label = "Security"
l = { fr = "Sécurité", de = "Sicherheit" }
icon = "shield"
```

On the picked entry's panel (**Liberty Next → Screens → Menus**), the **Translations** tab lists one row per language — a language picked from the list, then the label, and a cross to remove the row; **+ add** adds one; the languages offered are `en`, `fr`, `de`, `es`, `it`, `pt`, `nl`, `pl`, `ja`, `zh`, `ar`. An empty row is removed on save.

### Which language \{#language\}

For each request, the language is, in order:

1. the `X-Liberty-Lang` header — the web application sends the language chosen in its interface;
2. otherwise the first language of the browser's `Accept-Language`, without its region (`fr-CA` → `fr`);
3. otherwise the default language of **Liberty Next → Administer → App**.

When `l` has no entry for that language, `label` is used. Use lowercase codes (`fr`, not `FR`).

Translate folders too: their label is what the user sees first. The screens' titles and column labels are translated in the dictionary and the screens, not here — see [Dictionary](../../dictionary.md).

---

## Icons \{#icons\}

`icon` names one of the icons the sidebar draws. Names are matched ignoring case and punctuation (`Shield`, `shield`, `trending-up` all work):

| Name | Name | Name | Name |
|---|---|---|---|
| `activity` | `filebarchart` | `mail` | `sparkles` |
| `alert` | `filetext` | `network` | `table` |
| `barchart` | `filter` | `package` | `tag` |
| `bell` | `folder` | `palette` | `trendingup` |
| `book` | `gitcompare` | `play` | `upload` |
| `briefcase` | `globe` | `receipt` | `user` |
| `building` | `grid` | `refreshcw` | `usercheck` |
| `calendar` | `history` | `rocket` | `users` |
| `clock` | `key` | `search` | `wand` |
| `code` | `layers` | `settings` | `workflow` |
| `compass` | `layoutdashboard` | `shield` | `wrench` |
| `database` | `link` | `shieldalert` |  |
| `file` | `lock` | `shieldcheck` |  |

Any other name draws no icon, without error. The **Icon** field of the **General** tab is typed as text (*Lucide icon name*): type one of these names.

Common choices: `shield` for security, `users` / `user` for people, `key` for roles, `database` / `table` for data, `barchart` / `trendingup` for reports, `settings` for administration, `folder` for plain folders.
