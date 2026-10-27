---
title: Translations and icons
description: "Menu labels per language with the l map (l.fr, l.de…), how the language is chosen, and the icon names the Liberty Next sidebar can draw."
keywords: [Liberty Next, menus, translation, l.fr, language, X-Liberty-Lang, Accept-Language, icon, sidebar]
---

# Translations and icons

Two fields of every menu item shape what the user reads in the sidebar: `l`, the label per language, and `icon`.

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

In the Inspector, the **Translations** group lists one row per language; the languages offered are `en`, `fr`, `de`, `es`, `it`, `pt`, `nl`, `pl`, `ja`, `zh`, `ar`. An empty row is removed on save.

### Which language \{#language\}

For each request, the language is, in order:

1. the `X-Liberty-Lang` header — the web application sends the language chosen in its interface;
2. otherwise the first language of the browser's `Accept-Language`, without its region (`fr-CA` → `fr`);
3. otherwise `[app] default_language`.

When `l` has no entry for that language, `label` is used. Use lowercase codes (`fr`, not `FR`).

Translate folders too: their label is what the user sees first. The screens' titles and column labels are translated in the dictionary and the screens, not here — see [Dictionary](../../dictionary.md).

---

## Icons \{#icons\}

`icon` names one of the icons the sidebar draws. Names are matched ignoring case and punctuation (`Shield`, `shield`, `trending-up` all work):

| Name | | Name | | Name |
|---|---|---|---|---|
| `activity` | | `filter` | | `package` |
| `alert` | | `folder` | | `search` |
| `barchart` | | `globe` | | `settings` |
| `bell` | | `grid` | | `shield` |
| `briefcase` | | `key` | | `table` |
| `building` | | `layers` | | `tag` |
| `calendar` | | `link` | | `trendingup` |
| `clock` | | `lock` | | `user` |
| `database` | | `mail` | | `usercheck` |
| `file` / `filetext` | | `network` | | `users` |

Any other name draws no icon, without error. The Inspector's icon list offers exactly these names.

Common choices: `shield` for security, `users` / `user` for people, `key` for roles, `database` / `table` for data, `barchart` / `trendingup` for reports, `settings` for administration, `folder` for plain folders.
