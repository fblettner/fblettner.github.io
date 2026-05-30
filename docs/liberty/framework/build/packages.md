---
title: Packages
description: "Ship configuration from one Liberty install to another. Settings → Package: pick a few screens / menu items / dashboards as seeds, the dependency walker pulls in everything they reach (queries, dictionary, charts), and the package exports as a ZIP. On the target install, upload + pick a merge strategy (merge / overwrite / replace all). Same UI handles both sides."
keywords: [Liberty Framework, package, export, import, deploy, ZIP, dependency closure, seeds, merge, overwrite, replace all, override, encrypted secrets, build-package, import-package]
---

# Packages

The **Packages** screen (Settings → Package) is Liberty's built-in deployment mechanism: an operator on the **source** install picks a few screens / menu items / dashboards as *seeds*, the framework walks every reference they reach (queries, connectors, dictionary entries, charts), and the result ships as a ZIP. On the **target** install, the same screen accepts a ZIP, lets the operator pick a merge strategy and applies it to the live config — followed by an automatic reload.

This is the standard *staging → production* path. It's also the right tool for cross-customer reuse: build a "starter" package of curated screens, hand it to a fresh install, apply with `replace_all`, done.

---

## When to use which

| Situation | Use |
|---|---|
| Promote screens / dashboards from staging to production. | Build on staging, apply on prod with `overwrite`. |
| Ship a curated set of screens to a brand-new install. | Build, apply with `replace_all`. |
| Add a few new screens to an existing customer install without touching their edits. | Build, apply with `merge`. |
| Ship a fresh release of a vendor-maintained app where the customer has local edits on a few screens. | Build, apply with `overwrite` — entities flagged `override = true` on the target are preserved automatically. |
| Promote one Nomaflow job between environments. | Use the dedicated *Export job* button on the job's card (covered in [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md)); the Package screen does not bundle jobs. |
| Deliver a full licensed bundle (Nomasx-1 + Nomajde plugins + config). | Not this. Use the **`liberty-apps`** wheel installer — see [Installation → Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md). |

The Package screen ships **declarative config** — TOML files. It does not ship Python code, Java JARs, plugin packages or database content. For those, the wheel installer is the canonical channel.

---

## The Build tab

The left panel lists every **seed candidate** on the install — screens, menu items, dashboards. The right panel shows the **dependency closure** of whatever is ticked on the left.

### Picking seeds

Three sections in the left panel:

| Section | Drawn from |
|---|---|
| **Screens** | Every screen the install knows — grouped by app. |
| **Menu items** | Every menu item, by app. |
| **Dashboards** | Every dashboard, by scope. |

A search box at the top filters the visible list by name / label / scope. The per-section *select all* tick respects the filter — narrow first (e.g. type `audit`), then tick *select all* to grab only the matching screens.

The seed picker is **bulk-friendly**: hold the filter at a customer name, tick *select all* and you've staged a per-customer slice. No need to click each screen one by one.

### What the dependency walker does

The moment you tick any seed, the right panel kicks off the walker (`POST /admin/find-dependencies` on the backend). For every seed, the walker resolves:

| Kind | What's pulled |
|---|---|
| **`screen`** | The screen's main query, all referenced sub-queries (from screen actions, nested tabs, conditional fields), every dictionary entry that backs a column, every lookup the dialog uses, every sequence and enum, the connector each query belongs to (and its pool). |
| **`menu_item`** | The screen / dashboard / endpoint the menu item targets, then the closure of *that*. |
| **`dashboard`** | Every chart on the dashboard, every query each chart reads from, the connectors. |

The closure is **recursive but bounded** (default depth = 50). Cycles are detected and short-circuited.

### The default-excluded kinds

The Dependencies panel pre-ticks every dep **except** three kinds:

| Kind | Why default-excluded |
|---|---|
| **Connectors** | The target install almost always already has its own connector with the right pool / credentials. Shipping the source's connector would clobber the target's secrets. |
| **Pools** | Same — pools carry DB credentials. The target's pool is the one you want. |
| **API endpoints** | Same — endpoints carry auth headers / Bearer tokens specific to the source install's wiring. |

This makes the typical "promote screens between envs" workflow safe out of the box: nothing that carries secrets ships unless you opt in. Tick the *Connectors* group manually only when the target genuinely has none — typically a brand-new install or a per-customer staging spin-up.

The frontend remembers your per-dep ticks; the *select all* / *deselect all* toggles at the group level make it cheap to flip every connector on or off at once.

### Building the ZIP

Click **Download ZIP** and the framework runs `POST /admin/build-package`, returning a ZIP with up to six TOMLs:

| File | When present |
|---|---|
| `connectors.toml` | When at least one connector / pool / query / API endpoint is included. Connector definitions are **trimmed** — only the queries / endpoints in the closure are kept, the rest are dropped. |
| `dictionary.toml` | When the closure pulls in any dictionary entry, lookup, sequence or enum. Per-connector dictionary blocks are nested under `[connectors.<name>]`. |
| `screens.toml` | When at least one screen is in the closure. Grouped by app under `[screens.<app>]`. |
| `menus.toml` | When at least one menu item is in the closure. Grouped by app under `[menus.<app>.items]`. |
| `charts.toml` | When at least one chart is in the closure. |
| `dashboards.toml` | When at least one dashboard is in the closure. |

Plus one always-present file:

| File | What it carries |
|---|---|
| **`MANIFEST.md`** | Human-readable summary — what's in the ZIP, the seeds, per-kind counts, the env vars `${VAR}` the package references (and that the operator must set on the target), the missing references (closure couldn't resolve — usually a typo or a stale rename on the source), and the operator-facing instructions. |

The MANIFEST is the first thing to open on the target before applying — it tells you what to expect and what's still on you to wire (env vars, secrets, master key).

### What's NOT in the package

Worth knowing so you don't try to ship through this channel:

| Not included | Where it lives instead |
|---|---|
| `app.toml` | Per-install — carries pool credentials, auth backend, frontend root. Never bundled. |
| `auth.toml` / DB-stored users | Per-install — carries Argon2 password hashes. Never bundled. |
| Python plugins | Shipped with the [liberty-apps wheel](../../installation/deploy-prebuilt-apps.md) or the plugin's own release channel. |
| Nomaflow jobs | The *Export job* button on each job's card produces a single-job ZIP. Bulk job export is not yet automated. See [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md). |
| Database content | Use a DB dump (or a [bundled preload job](../../nomaflow/bundled-jobs.md)). |

---

## The Import tab

Switch the top tab to **Import package**. The panel offers three strategies, a file picker and an *Apply package* button.

### The three strategies

<svg viewBox="0 0 1000 380" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <linearGradient id="pkg-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
  </defs>
  <rect x="20" y="20" width="960" height="340" rx="14" fill="url(#pkg-card)" stroke="#1f2937" strokeWidth="1.4"/>
  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Import strategies — what happens per entity in the package</text>
  <line x1="20" y1="62" x2="980" y2="62" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="290" height="240" rx="10" fill="rgba(34,197,94,0.10)" stroke="rgba(34,197,94,0.40)"/>
  <text x="185" y="112" fill="#22c55e" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">MERGE</text>
  <text x="185" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Add only what's new.</text>
  <text x="185" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Existing entities are preserved.</text>
  <line x1="60" y1="170" x2="310" y2="170" stroke="#22c55e" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="185" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">added</text>
  <text x="185" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">entities not on the target</text>
  <text x="185" y="240" fill="#94a3b8" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">skipped</text>
  <text x="185" y="258" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">already present (kept as-is)</text>
  <text x="185" y="296" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Use when adding new things</text>
  <text x="185" y="310" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">without touching customer edits</text>

  <rect x="350" y="84" width="290" height="240" rx="10" fill="rgba(74,158,255,0.10)" stroke="rgba(74,158,255,0.40)"/>
  <text x="495" y="112" fill="#4a9eff" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">OVERWRITE — RECOMMENDED</text>
  <text x="495" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Package is the new truth.</text>
  <text x="495" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Target's other entities untouched.</text>
  <line x1="370" y1="170" x2="620" y2="170" stroke="#4a9eff" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="495" y="194" fill="#22c55e" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">added</text>
  <text x="495" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">new entities land</text>
  <text x="495" y="232" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">replaced</text>
  <text x="495" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">existing entities get the package version</text>
  <text x="495" y="270" fill="#c084fc" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">preserved (override = true)</text>
  <text x="495" y="288" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">customer fork — left alone</text>
  <text x="495" y="316" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Default upgrade path</text>

  <rect x="660" y="84" width="290" height="240" rx="10" fill="rgba(251,146,60,0.10)" stroke="rgba(251,146,60,0.40)"/>
  <text x="805" y="112" fill="#fb923c" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.04em" fontFamily="system-ui, sans-serif">REPLACE ALL</text>
  <text x="805" y="134" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">Each TOML in the ZIP replaces</text>
  <text x="805" y="150" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif">the WHOLE target file.</text>
  <line x1="680" y1="170" x2="930" y2="170" stroke="#fb923c" strokeOpacity="0.3" strokeWidth="1"/>
  <text x="805" y="194" fill="#4a9eff" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">all entities in package</text>
  <text x="805" y="212" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">landed on target</text>
  <text x="805" y="232" fill="#fb923c" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="ui-monospace, monospace">DROPPED on target</text>
  <text x="805" y="250" fill="#cbd5e1" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif">every entity NOT in the package</text>
  <text x="805" y="280" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Brutal — only for deploy-from-scratch.</text>
  <text x="805" y="294" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Files the package does NOT touch</text>
  <text x="805" y="308" fill="#94a3b8" fontSize="9" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">are left alone.</text>

  <rect x="40" y="332" width="920" height="20" rx="4" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="500" y="346" fill="#94a3b8" fontSize="10" textAnchor="middle" fontStyle="italic" fontFamily="system-ui, sans-serif">Strategy applies INDEPENDENTLY to each TOML in the ZIP. A package that only carries screens.toml only touches the target's screens.toml.</text>
</svg>

The three columns map one-to-one to the radio cards in the UI:

| Strategy | Per-entity behaviour | Use when |
|---|---|---|
| **`merge`** | NEW entities land. EXISTING entities on the target are **kept as-is**. | Adding new things without disturbing customer edits. The package adds; it never overwrites. |
| **`overwrite`** | NEW entities land. EXISTING entities are **replaced** by the package version — EXCEPT when the target entity is flagged `override = true` (then preserved, reported separately). | The standard upgrade path. The package becomes the new truth for the entities it carries. Entities elsewhere on the target (those not in the package) are untouched. |
| **`replace_all`** | For every TOML in the ZIP, the **whole target file** is replaced by the package's version. EVERY entity not in the package is dropped from that file. Files the package doesn't touch are untouched. | Deploy-from-scratch / vendor reset / a curated baseline. |

### The `override = true` escape hatch

A customer install sometimes needs to fork a vendor entity — patch one screen's columns, swap a query — and keep that fork across vendor upgrades. Add `override = true` to the entity's TOML block:

```toml title="screens.toml on the customer install"
[screens.crm.customers]
label = "Customers (customer fork)"
override = true   # vendor `overwrite` imports will skip this entity
query = "customers_v2_custom"
# ... rest of the customer's edit
```

On the next `overwrite` import, the framework sees the flag and leaves the entity alone. The import report shows it under *preserved overrides* so the operator sees exactly which entities survived the vendor push.

Two limits worth knowing:

- `merge` already skips existing entities — the flag is redundant there.
- `replace_all` drops the entire file — overrides are NOT preserved. Use it knowingly.

### Applying

| Step | What |
|---|---|
| **Pick the ZIP** | Click the drop zone (or drag a `.zip` onto it). The filename + size appears once selected. |
| **Pick a strategy** | Default is `overwrite`. Switch only when you know you need the other behaviour. |
| **Click *Apply package*** | The framework runs `POST /admin/import-package?strategy=<value>`, applies the diff and runs `POST /admin/reload` automatically. |
| **Read the report** | Per-file row showing `+N added`, `~N replaced`, `⊘N skipped`, `✗N errors` plus a sample of the affected entity names. |
| **A green *Applied + reloaded* badge** | Confirms the reload succeeded — new config is live for the next request. |

If reload fails after a successful apply, the import warning panel shows the reason but the file changes are kept on disk. Run *Settings → Reload* manually after fixing the underlying issue.

---

## Secrets and environment variables

The package is **plaintext TOML**. Two patterns let the source's secrets travel without leaking the secret material:

| Pattern | What happens at build / apply |
|---|---|
| **Encrypted secrets** — `password = "ENC:base64=="` | The ciphertext lands verbatim in the package. The **target must carry the same `[crypto] master_key`** (or `LIBERTY_MASTER_KEY` env var) as the source — otherwise decryption fails on first use. |
| **Env var references** — `password = "${DB_PASSWORD}"` | The literal string `${DB_PASSWORD}` is in the package. The operator must set the env var **on the target** before reloading. `MANIFEST.md` lists every `${VAR}` the package references. |

Pick one pattern per install — mixing both inside a single config gets confusing. Encrypted secrets travel best across containerised deployments; env vars travel best across orchestrators (Kubernetes Secrets, Docker `--env-file`, systemd `EnvironmentFile`).

### What you should NOT ship

| Don't | Why |
|---|---|
| Move `auth.toml` between installs via the Package screen. | The screen ignores `auth.toml`. Move users via the dedicated *Users* admin (or invite them per install). |
| Move `app.toml` via the Package screen. | The screen ignores it — would clobber connector pool credentials, frontend paths, license. |
| Ship a package with `replace_all` to a customer who has local edits without a heads-up. | The customer's screens / queries / dictionary entries are dropped. There is no automatic undo — keep a backup of the target's config tree first. |

---

## Inspect-without-export

The Build tab's right panel is also a **standalone dependency inspector**. Tick a single screen, look at the closure — that's exactly what the screen would carry into a package, and exactly what would break if you renamed / deleted the screen. No need to click *Download ZIP* — the inspection is the value.

Liberty also exposes a dedicated **Find dependencies** modal from any screen / menu item / dashboard list (the icon next to the rename button). Same backend (`POST /admin/find-dependencies`), simpler shape — just the closure tree for the one entity you opened it on.

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Forgot to set a `${VAR}` listed in MANIFEST.md before reloading the target. | A connector / query fails at first use with a missing-substitution error. | Read MANIFEST.md before applying. Set the env vars in the target's environment file / systemd unit / Docker env. |
| Source and target carry different `master_key`s. | Encrypted `ENC:...` values fail to decrypt; the affected connector errors at first use. | Sync the master key (or rotate the encrypted values on the target — see [Build → Secure → Encrypted secrets](./secure/encrypted-secrets.md)). |
| Used `replace_all` to apply a small slice — wiped customer-specific screens. | Customer screens missing from the target after import. | Restore the previous TOML from your backup. Re-apply with `overwrite` next time. |
| Bundled `connectors.toml` (default-excluded) without checking pool names match the target. | Target's pools change unexpectedly; pre-existing queries error at next reload. | Leave connectors / pools default-excluded unless the target is brand-new. Or rename pools on the source before bundling. |
| Built from a source with unresolved references (broken rename / deleted query). | MANIFEST.md lists items under *Missing references*. | Fix on the source (rename / delete / restore) and rebuild. The target won't get the broken references — but it also won't get the screens / queries that referenced them. |
| Import landed but `Applied + reloaded` is missing — a *reload failed* warning showed. | Disk has the new config; in-memory state is stale. | Reload manually via *Settings → Reload* once the underlying issue is fixed (often a syntax error in an unrelated TOML the reload caught). |

---

## Programmatic access

The two endpoints behind the UI are usable headless — useful for CI / scripted promotion:

```bash title="Build a package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -H "Content-Type: application/json" \
  -d '{"seeds":[{"kind":"screen","name":"customers","scope":"crm"}]}' \
  https://<source>/admin/build-package \
  --output liberty-package.zip
```

```bash title="Apply a package"
curl -X POST \
  -H "Authorization: Bearer <superuser-token>" \
  -F "package=@liberty-package.zip" \
  "https://<target>/admin/import-package?strategy=overwrite"
```

`build-package` accepts an optional `include` array to filter the closure (same shape as the UI's per-dep checkbox state). `import-package` accepts `strategy` as a query param (`merge` | `overwrite` | `replace_all`). Both endpoints require superuser auth.

---

## What's next

- [Deploy prebuilt apps](../../installation/deploy-prebuilt-apps.md) — when the package channel isn't enough (full bundle = config + Python plugins), use the `liberty-apps` wheel installer.
- [Nomaflow → Bundled jobs](../../nomaflow/bundled-jobs.md) — the ready-made jobs that ship with `liberty-apps`, including the `nomasx1-import-reference` job that loads a curated reference bundle.
- [Encrypted secrets](./secure/encrypted-secrets.md) — what `ENC:` values are, how to rotate them when promoting across installs with different master keys.
