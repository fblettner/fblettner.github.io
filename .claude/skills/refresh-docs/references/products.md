# Products — sources and doc folders

| Product | Source repo | Release notes in the source | Docs (EN) | Docs (FR) |
|---|---|---|---|---|
| **NomaUBL** | `/Users/franckblettner/Documents/Tools/JavaProjects/nomaubl` (Java `src/custom`, `src/nomaubl`; React `src/web-react/src`; i18n `src/web-react/src/i18n/locales/{en,fr}.json`; list views `src/config/list-views`; plans `docs/plans`) | `RELEASE.md`, `RELEASE.fr.md` (root) | `docs/nomaubl/` | `i18n/fr/.../current/nomaubl/` |
| **Liberty Next** (framework, Nomaflow) | `/Users/franckblettner/Documents/Tools/Liberty/liberty-next` (Python `liberty/`, frontend `frontend/`, `CLAUDE.md`) | `liberty/RELEASE.md`, `liberty/RELEASE.fr.md` | `docs/liberty/` (framework, installation, monitoring, technical, references, `nomaflow/`) | same under `i18n/fr/.../current/liberty/` |
| **Nomasx-1**, **Nomajde** (Liberty apps) | `/Users/franckblettner/Documents/Tools/Liberty/liberty-apps` (TOML `config/screens.toml`, `connectors.toml`, `menus.toml`, `dictionary.toml`…; Python `liberty_apps/`, `plugins/`) | `liberty_apps/RELEASE.md`, `liberty_apps/RELEASE.fr.md` | `docs/liberty/nomasx1/`, `docs/liberty/nomajde/` | same under FR |
| **JDE / BIP APIs** | `/Users/franckblettner/Documents/Tools/JavaProjects/nomabc`, `nomabip`, `nomajde` | — | `docs/api/` | — |

If the user names a product not listed here, ask for its repo and add a row.

## NomaUBL specifics

- **Release notes**: `scripts/sync_release_nomaubl.py`. The docs page keeps the app's wording; only customer names and a few French connectors are fixed by the script. Then weave the features into the product pages (current state only).
- **App menu → docs sidebar**: `src/web-react/src/components/Sidebar.tsx` gives the groups and order (Navigation, Synchronisation, Traitement, Outils UBL, Extraction, Gestion, Documentation, Paramètres at the bottom). Mirror it in `sidebars.ts`. FR menu labels come from `nav.*` in `fr.json`.
- **Settings**: the Settings navigation (`pages/Settings/SettingsNav.tsx`) and most editors are English-only in the app; FR pages quote those labels in English and say once that the editor stays in English.
- **Roles**: page grants in `pages/Settings/editors/RolesEditor.tsx` (`PAGE_GROUPS`); server admin list `AuthManager.ALL_PAGES`.
- **Promotion kinds**: `custom/ubl/web/api/PromotionApi.java` (`kindOf`, `FILE_KEYS`) — check what really travels before writing it.
- **API**: `scripts/openapi_nomaubl.sh` (Redoc page `/nomaubl/api-reference/`).
- **CLI**: `displayHelp` in `src/nomaubl/ScheduleUBL.java`; `nomaubl.sh` at the repo root is a separate wrapper — check it before documenting a `nomaubl.sh <cmd>`.
- **Demo instance**: https://nomaubl.nomana-it.fr/ (no login) — handy to check a screen.
- Source systems to weave into config pages: JD Edwards, SAP, NetSuite, custom ERP (JDE-specific parts flagged `:::info[JDE-specific]` / `:::info[Spécifique à JDE]`).

## Liberty Next / Nomaflow specifics

- Docs are **UI-first**: lead with the builder / Settings UI and mockups; TOML only as "saved under the hood", deployment or escape hatch.
- Never mention v1 or `ly_*` tables.
- JDE administration is Nomajde's job — no JDE tutorial in framework docs.
- App visibility needs both the menu and `show_in_switcher` — always pair them.
- Never document the licence-gate mechanism (TOML flag / classification); only where the licence JWT goes, `/api/license`, expiry.

## Nomasx-1 / Nomajde specifics

- Audience is the end user of the app, not framework developers: no TOML / React / Liberty Next internals in the app pages.
- **Read `screens.toml` and `connectors.toml` before describing any screen, tab or field.** Writable grids get an *Edit dialog* section with an SVG mockup; drill-down grids get a *Context menu* section.
- Nomasx-1 is source-agnostic: every page introduces "any connected application"; JDE-only behaviour (Object Usage Tracking, BSFN/UDC, security workbench) in `:::info[JDE-specific]`.
- `*ALL` is the default sign-on role combining all the user's roles, not a wildcard.
- LDAP Settings groups AD departments for the Excel export (one file per department, one sheet per application).
- Licence pages: internal compliance (required vs subscribed), never "deliverable for an LMS audit".
- Say *JD Edwards EnterpriseOne* (or *JDE E1*), never *OneWorld*.
