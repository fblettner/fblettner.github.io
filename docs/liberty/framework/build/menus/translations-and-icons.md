---
title: Translations and icons
description: "Per-language label overrides with the `l` map (l.fr, l.de, …) and Lucide icon names on menu items. Conventions and fallbacks for both."
keywords: [Liberty Framework, menus, translation, l.fr, language override, icon, Lucide, sidebar]
---

# Translations and icons

Two cosmetic but high-impact fields on every menu item:

| Field | What it does |
|---|---|
| **`l`** | Map of per-language label overrides — `l.fr`, `l.de`, `l.es`. The framework picks the one matching the user's language; the default `label` is the fallback. |
| **`icon`** | A [Lucide icon](https://lucide.dev) name (`shield`, `users`, `chart-bar`, …). Renders at the start of the row in the sidebar. |

This page covers both — when to set them, the picker conventions, the runtime resolution rules.

---

## Translations — the `l` map

The `label` field is the **default** language label. The `l` map adds per-language overrides:

```toml
[[menus.crm.items]]
id = "security"
label = "Security"
l.fr = "Sécurité"
l.de = "Sicherheit"
l.es = "Seguridad"
icon = "shield"
```

When a French user opens the app, the sidebar renders *Sécurité*. A German user sees *Sicherheit*. A user whose language doesn't match any `l.*` entry falls back to `Security`.

### Resolution rules

At runtime, for each menu item:

1. Read the user's language from the JWT (or the browser's `Accept-Language` header).
2. Look up `l[<language>]`.
3. If present and non-empty, use that string.
4. Otherwise, use the default `label`.

The lookup is **exact** — `l.fr` is found for users whose language is `fr`; a user with `fr-CA` won't match `l.fr` unless you add `l["fr-CA"]` too. For maximum coverage, set the bare language code (`fr`, `de`, `es`); locale-specific entries (`fr-CA`, `de-AT`) are reserved for genuine variants.

### The Translations tab in the Inspector

The Inspector's *Translations* tab groups every `l.*` entry — adding a new language picks from `SUPPORTED_LANGUAGES` (the framework's enabled-languages list from `app.toml`). Removing a language drops the entry.

| Field shown | What |
|---|---|
| Default label | The `label` field — fallback for any user whose language has no override. |
| Per-language rows | One per `l.<lang>` entry. Empty values delete the entry on save. |

### Translating folders

Folders need translations too — the user sees the folder title in the sidebar. Same `l` shape applies. Don't translate the `id` (it's the technical key, never shown).

### Translating leaves

For `query` leaves, the leaf's `label` is the **menu** label. The opened screen's title comes from the **screen's** `label` / `description`, which has its own translations through the dictionary. Two layers:

| Layer | Where translated |
|---|---|
| Menu label | `l` on the menu item. |
| Screen title | `[dictionary.<id>]` entries — language-aware. |
| Column labels | Same — `[dictionary.<col_id>]` for each column. |

The dictionary system covers screen-side text once; the menu's `l` covers the navigation labels.

### When NOT to translate

| Pattern | Why |
|---|---|
| Internal-only apps with one language. | Save the effort; just use `label`. |
| Apps where the audience all speaks the same business language. | Same. |
| The label is a code or identifier the user reads as-is. | `F0005`, `IBAN`, `SLA` — leave them as-is. |

---

## Icons — Lucide names

The `icon` field accepts any [Lucide icon](https://lucide.dev) name. The icon renders to the left of the label in the sidebar, sized to match the row height.

```toml
[[menus.crm.items]]
id = "pipeline"
label = "Pipeline"
icon = "briefcase"
```

Renders a briefcase icon next to the *Pipeline* folder.

### How to pick a name

- Browse [lucide.dev](https://lucide.dev) — every icon has its name visible.
- Names are **lowercase kebab-case**: `chart-bar`, `git-branch`, `arrow-up-right`.
- The framework matches case-sensitively — typos render no icon (no error).

### Conventions

A consistent icon vocabulary makes the menu legible at a glance. The patterns most installs settle on:

| Concept | Icon |
|---|---|
| Users / people | `users`, `user`, `user-check` |
| Security / permissions | `shield`, `key`, `lock` |
| Reports / charts | `chart-bar`, `chart-line`, `chart-pie`, `trending-up` |
| Tables / data | `table`, `database`, `layers` |
| Settings / config | `settings`, `cog`, `sliders-horizontal` |
| Sync / refresh | `refresh-cw`, `repeat`, `cloud-download` |
| Pipeline / workflow | `briefcase`, `workflow`, `git-branch` |
| Notifications | `bell`, `mail`, `inbox` |
| Audit / history | `history`, `clock`, `file-clock` |
| Calendar | `calendar`, `calendar-clock` |
| Documents | `file`, `file-text`, `folder` |

Pick one per domain and stay with it across the app. Switching between *Users* (`users`) and *Roles* (`shield`) within a Security folder reads consistently; mixing icons at random doesn't.

### Folders vs leaves

| Item kind | Icon convention |
|---|---|
| Folder | Usually an "area" icon (`shield` for Security, `briefcase` for Pipeline). Renders next to the chevron. |
| Leaf | Usually a "thing" icon (`users` for the Users screen, `file-text` for Documents). |

If you skip `icon` on a folder, the framework renders a default folder glyph. Leaves without `icon` render with a default file glyph.

### When to skip icons

| Pattern | Why |
|---|---|
| The label is short and unambiguous. | The icon doesn't add information — just visual noise. |
| You're prototyping. | Add icons last, after the structure stabilises. |
| The menu is short (5 items or fewer). | Icons don't help scanability when there's little to scan. |

A consistent icon set helps with **30+ item menus**; below that, labels alone read fine.

---

## A concrete example — same menu, three languages

The Nomasx-1 app's *Security* folder, fully translated:

```toml
[[menus.nomasx1.items]]
id = "security"
label = "Security"
l.fr = "Sécurité"
l.de = "Sicherheit"
icon = "shield"

[[menus.nomasx1.items]]
id = "security.users"
parent = "security"
label = "Users"
l.fr = "Utilisateurs"
l.de = "Benutzer"
icon = "users"
type = "query"
target = "security_users_get"

[[menus.nomasx1.items]]
id = "security.roles"
parent = "security"
label = "Roles"
l.fr = "Rôles"
l.de = "Rollen"
icon = "key"
type = "query"
target = "security_roles_get"

[[menus.nomasx1.items]]
id = "security.assignments"
parent = "security"
label = "User-role assignments"
l.fr = "Attributions utilisateur ↔ rôle"
l.de = "Benutzer-Rollen-Zuordnungen"
icon = "git-branch"
type = "query"
target = "security_assignments_get"
```

A French user sees *Sécurité ▾ → Utilisateurs / Rôles / Attributions utilisateur ↔ rôle*. A German user sees *Sicherheit ▾ → Benutzer / Rollen / Benutzer-Rollen-Zuordnungen*. An English user sees the defaults. All three use the same icons.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| `l.FR` (uppercase). | French users see the default English label — the lookup is case-sensitive. | Use lowercase language codes. |
| `icon = "Shield"` (capitalised). | No icon renders (no error). | Use lowercase Lucide names. |
| Icon name from another library (FontAwesome, Material). | No icon renders. | Pick from [lucide.dev](https://lucide.dev). |
| Translations only on the menu, not on screens / dictionary. | Sidebar shows *Utilisateurs* but the screen title is *Users*. | Translate at both layers — menu's `l` AND the dictionary's `[dictionary.<id>].l_<lang>`. |
| `l.fr-CA` set; French Canadian user falls back to English. | The exact-match resolution means `fr-CA` doesn't fall through to `fr`. | Either add `l.fr` as a fallback (the regional variant overrides it for `fr-CA` users) or simplify to `l.fr`. |

---

## What's next

- [Build the tree](./build-the-tree.md) — the editor where you set `l` and `icon` per item.
- [Permissions and roles](./permissions-and-roles.md) — translation is independent of pruning, but both shape what the user actually sees.
- [Concepts → Dictionary](../../dictionary.md) — the screen-side translation layer.
