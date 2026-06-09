---
title: Change packages
description: "Capture every tracked data write into a reviewable package — old → new diffs grouped by entity, exclude entries cherry-pick style, submit / approve / reject the package, export a JSON bundle and apply it on another environment with full pre-image drift detection. The canonical use case is promoting JD Edwards security from dev to prod."
keywords: [Liberty Framework, change packages, changesets, JDE security promotion, draft / submitted / approved / exported / promoted / rejected, drift detection, replay, CALL_API, CALL_PLUGIN, change_replay, change_tracked, change_entity, post-apply, AppliedBundle, ly_change_packages, ly_change_entries, Nomaflow]
---

# Change packages

The **Change packages** page captures every tracked data write into a grouped, reviewable, promotable set. The use case the feature was built around is **promoting JD Edwards security from a development environment to production** — copy a role, attach a few menus, save → the writes land in production tables on dev, AND in a *change package* the operator can review, approve and ship to prod as a JSON bundle.

The same pattern fits every other "make changes here, replay them there" workflow: a curated UDC catalogue refresh, a batch of new permissions on a custom screen, a routing-rule update on a configuration table. As soon as a screen is **`change_tracked`**, its inserts / updates / deletes land in the active draft package alongside the production write.

This is the operator-facing pairing of a deeper engine: the framework persists every tracked write into the **`ly_change_packages`** + **`ly_change_entries`** tables (the **change-set DB** — same pool as the framework, separate from the audit mirror), and the apply path replays them on the target with pre-image drift detection.

:::info[Added in framework 2026.06]
The page lives under Nomaflow because the workflow — *capture → review → submit → approve → export → apply* — is a flow, not a setting. The Settings → Package screen still exists for config slices (screens / menu items / dashboards); Change packages is the **data** equivalent. The two coexist.
:::

---

## Opening the page

- Sidebar → **Nomaflow → Changes**.
- From the Settings → Connectors page, *Track changes* in the screen card opens the page filtered on the matching application.

---

## At a glance

<svg viewBox="0 0 1000 580" xmlns="http://www.w3.org/2000/svg" style={{maxWidth: '100%', height: 'auto', margin: '24px 0', display: 'block'}}>
  <defs>
    <marker id="cp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="#94a3b8"/></marker>
    <linearGradient id="cp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e293b" stopOpacity="0.95"/><stop offset="100%" stopColor="#0f172a" stopOpacity="0.95"/></linearGradient>
    <linearGradient id="cp-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a9eff" stopOpacity="0.32"/><stop offset="100%" stopColor="#2b8cff" stopOpacity="0.10"/></linearGradient>
  </defs>

  <rect x="20" y="20" width="960" height="540" rx="14" fill="url(#cp-card)" stroke="#1f2937" strokeWidth="1.4"/>

  <text x="40" y="48" fill="#e2e8f0" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Nomaflow · Changes</text>
  <line x1="20" y1="68" x2="980" y2="68" stroke="#1f2937" strokeWidth="1"/>

  <rect x="40" y="84" width="240" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <rect x="40" y="84" width="100" height="28" rx="6" fill="url(#cp-blue)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="90" y="102" fill="#e2e8f0" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Changes</text>
  <text x="190" y="102" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="system-ui, sans-serif">Apply bundle</text>

  <rect x="40" y="128" width="280" height="412" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>

  <rect x="56" y="142" width="248" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1"/>
  <text x="68" y="160" fill="#64748b" fontSize="11" fontFamily="ui-monospace, monospace">🔍 Filter packages…</text>

  <rect x="56" y="178" width="248" height="62" rx="8" fill="var(--hover-subtle)" stroke="#4a9eff" strokeWidth="1.4"/>
  <text x="64" y="196" fill="#e2e8f0" fontSize="12" fontFamily="ui-monospace, monospace" fontWeight="700">JDE-PROD · Security 2026-06-09</text>
  <text x="64" y="212" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">submitted · franck · 09/06 09:42 · 12 entries</text>
  <rect x="64" y="222" width="60" height="16" rx="8" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="94" y="234" fill="#fb923c" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">PENDING</text>

  <rect x="56" y="248" width="248" height="60" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="64" y="266" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">JDE-PROD · UDC refresh</text>
  <text x="64" y="282" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">draft · franck · 09/06 08:15 · 4 entries</text>
  <rect x="64" y="292" width="48" height="16" rx="8" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="88" y="304" fill="#4a9eff" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">DRAFT</text>

  <rect x="56" y="316" width="248" height="60" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="64" y="334" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">JDE-PROD · Permissions Q2</text>
  <text x="64" y="350" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">approved · valeria · 06/06 17:10 · 47 entries</text>
  <rect x="64" y="360" width="60" height="16" rx="8" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="94" y="372" fill="#22c55e" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">APPROVED</text>

  <rect x="56" y="384" width="248" height="60" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="64" y="402" fill="#cbd5e1" fontSize="12" fontFamily="ui-monospace, monospace">JDE-PROD · Permissions Q1</text>
  <text x="64" y="418" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">exported · valeria · 04/06 12:01 · 23 entries</text>
  <rect x="64" y="428" width="60" height="16" rx="8" fill="rgba(255,255,255,0.05)" stroke="#475569"/>
  <text x="94" y="440" fill="#94a3b8" fontSize="9" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">EXPORTED</text>

  <rect x="336" y="128" width="624" height="412" rx="10" fill="#0d1220" stroke="#1f2937" strokeWidth="1"/>

  <text x="352" y="150" fill="#e2e8f0" fontSize="13" fontFamily="ui-monospace, monospace" fontWeight="700">Security 2026-06-09</text>
  <text x="540" y="150" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">application = JDE-PROD · 12 entries</text>
  <rect x="744" y="136" width="64" height="24" rx="6" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="776" y="151" fill="#22c55e" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Approve</text>
  <rect x="816" y="136" width="56" height="24" rx="6" fill="rgba(248,113,113,0.10)" stroke="#f87171" strokeWidth="1"/>
  <text x="844" y="151" fill="#f87171" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Reject</text>
  <rect x="880" y="136" width="64" height="24" rx="6" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="912" y="151" fill="#4a9eff" fontSize="10" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">Export</text>

  <text x="352" y="186" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ ROLES (3)</text>
  <text x="450" y="186" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">PRJM_NEW · UDC_ADM · BUYER_R2</text>
  <rect x="352" y="194" width="592" height="64" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="212" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">PRJM_NEW · INSERT · src: import security</text>
  <rect x="364" y="220" width="44" height="14" rx="7" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="386" y="231" fill="#22c55e" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">INSERT</text>
  <text x="364" y="248" fill="#94a3b8" fontSize="10" fontFamily="ui-monospace, monospace">RLDF · ∅ → PRJM_NEW   |   RLDC · ∅ → 1   |   +6 more</text>

  <text x="352" y="278" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ RELATIONSHIPS (5)</text>
  <text x="464" y="278" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">F95921 · F00926</text>
  <rect x="352" y="286" width="592" height="48" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="304" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">RLDF=PRJM_NEW · YRLE=A03 · INSERT</text>
  <rect x="364" y="312" width="44" height="14" rx="7" fill="rgba(34,197,94,0.10)" stroke="#22c55e" strokeWidth="1"/>
  <text x="386" y="323" fill="#22c55e" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">INSERT</text>

  <text x="352" y="354" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ SECURITY (4)</text>
  <text x="448" y="354" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">F00950</text>
  <rect x="352" y="362" width="592" height="48" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="380" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">RLUSER=PRJM_NEW · RLAT1=8 · UPDATE</text>
  <rect x="364" y="388" width="48" height="14" rx="7" fill="rgba(74,158,255,0.10)" stroke="#4a9eff" strokeWidth="1"/>
  <text x="388" y="399" fill="#4a9eff" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">UPDATE</text>

  <text x="352" y="430" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif" fontWeight="600">▾ ACTION REPLAYS (1)</text>
  <text x="488" y="430" fill="#64748b" fontSize="9" fontFamily="ui-monospace, monospace">call_plugin · nomajde.security:j_remerge_security</text>
  <rect x="352" y="438" width="592" height="46" rx="8" fill="rgba(0,0,0,0.30)" stroke="#1f2937"/>
  <text x="364" y="456" fill="#cbd5e1" fontSize="11" fontFamily="ui-monospace, monospace">CALL_PLUGIN · child_role=PRJM_NEW · replay = true</text>
  <rect x="364" y="464" width="68" height="14" rx="7" fill="rgba(251,146,60,0.10)" stroke="#fb923c" strokeWidth="1"/>
  <text x="398" y="475" fill="#fb923c" fontSize="8" textAnchor="middle" fontFamily="system-ui, sans-serif" fontWeight="700">CALL_PLUGIN</text>

  <rect x="352" y="500" width="592" height="28" rx="6" fill="rgba(0,0,0,0.20)" stroke="#1f2937"/>
  <text x="364" y="518" fill="#94a3b8" fontSize="10" fontFamily="system-ui, sans-serif">Post-apply: 1 step · nomajde-remerge-security  (runs once on the target after every captured row lands)</text>
</svg>

---

## How a package fills up

Three things have to be in place for a write to land in a package.

| Required | What |
|---|---|
| **Screen is `change_tracked = true`** | A flag in the screen's *General* tab (or its TOML). Without it, writes go to the underlying table only — no capture. |
| **An active draft exists for the application** | The screen's connector → its `application`. The framework keeps **at most one DRAFT per application** (enforced by a partial unique index). The first tracked write on that application creates one if none exists. |
| **The user is signed in** | The package records `captured_by` from the session. Anonymous writes are not tracked. |

Once those are in place, every tracked write produces one **change entry**:

| Operation | What's captured |
|---|---|
| `INSERT` | `new_values` — the bound write columns. |
| `UPDATE` | `old_values` (the pre-image fetched through the screen's `read_query` before the write) + `new_values`. The pre-image is what drives drift detection on apply. |
| `DELETE` | `old_values` only. |
| `CALL_API` | The resolved call parameters + the configured `change_replay` flag — re-issued verbatim on apply when `replay = true`. |
| `CALL_PLUGIN` | Same — the plugin id + resolved kwargs, gated by `change_replay`. |

Each entry also records:

- `connector` + `query` — the framework can route the replay to the matching connector on the target.
- `entity` — the optional `change_entity` from the screen (`role`, `user`, `relationship`, `security`, …). The UI groups entries by this label on the detail page; a screen with no `change_entity` still captures, just grouped by `query`.
- `entity_key` — the natural key of the row (resolved from the screen's `key_columns`). Drives **compaction** on export — `INSERT then UPDATE then UPDATE` on the same key collapses to one effective net entry; `INSERT then DELETE` cancels out entirely.
- `source_action` — the label of the action that triggered the write, threaded from the firing context. Lets the detail view group a batch as "imported by *import security*" instead of an unattributed wall of inserts.
- `read_query` — the screen's read query, used by the apply path to fetch the current target row and compare to `old_values` for drift detection.
- `seq` — monotonic per package, so replay preserves the capture order. A role has to exist before it can be referenced; the seq guarantees that.

### What `change_tracked` does NOT track

| Not tracked | Why |
|---|---|
| Writes from a screen with `change_tracked = false`. | Default. Audit-only tables (notification log, retry stats) shouldn't pollute promotion bundles. |
| Writes from a Nomaflow job, a bulk import, the CLI. | Tracking is per-screen and runs through the screen's write path. Jobs use `j_*` callables directly against the connector. |
| Reads — no SELECT is ever captured. | The package is a *change* log. |
| The framework's own metadata writes (`ly_jobs`, `ly_users`, the change-set tables themselves). | The capture loop checks `change_tracked` on the connector's screen, not on the table. |

---

## The lifecycle

A package walks through up to six states:

```text
    DRAFT ─── submit ───▶ PENDING ─── approve ──▶ APPROVED ─── export ──▶ EXPORTED ─── apply ──▶ PROMOTED
                              │                       │
                              └── reject ──▶ REJECTED (reopens to DRAFT on next capture)
```

| State | Meaning |
|---|---|
| **`DRAFT`** | The active package on its application. New tracked writes attach here. Entries can be excluded / re-included. |
| **`PENDING`** | Submitted for approval. No new writes attach (a fresh DRAFT opens for the application on the next capture). Reviewer can approve or reject. |
| **`APPROVED`** | Frozen, ready to export. Entries can no longer be excluded. |
| **`EXPORTED`** | A JSON bundle has been downloaded. The package is now the source-side record of what was shipped; the bundle is what reaches the target. |
| **`PROMOTED`** | The target's apply path has reported success and stamped this package's `promoted_at`. |
| **`REJECTED`** | The reviewer pushed it back. Reopens to `DRAFT` on the next captured write, so the operator can amend and resubmit. |

The four lifecycle buttons on the detail header — *Submit*, *Approve*, *Reject*, *Export* — fire `POST /admin/changesets/<id>/submit` (or `…/approve`, `…/reject`, `…/export`). The flow is permissioned: roles `package:submit`, `package:approve`, `package:export` gate the buttons individually (default: superuser).

### Per-entry: exclude / re-include

While the package is `DRAFT` or `PENDING`, every captured entry has an **Exclude** button. Excluded entries are not removed (no audit loss); they're flagged `status = excluded` and skipped on compaction + export. Re-including is one click. Useful for cherry-picking: capture a wide set of changes during the day, exclude the experiment that didn't pan out, ship the rest.

Compaction is computed at **export time**, not on capture — exclusions take effect immediately the moment the bundle is built.

---

## The Changes tab — review and act

The page has two tabs: **Changes** (the package catalogue) and **Apply bundle** (covered below).

### Left column — the package list

| Element | What |
|---|---|
| Filter box | Substring match on package name + application. Server-side. |
| Active package | Pre-selected on open (the draft of the application the operator last touched). Highlighted blue. |
| Package row | Name + meta line (`status · captured_by · timestamp · entry_count`) + a coloured status badge. |
| Status colours | `DRAFT` blue, `PENDING` orange, `APPROVED` green, `EXPORTED` / `PROMOTED` grey, `REJECTED` red. |
| Trash icon | Deletes the package log — the rows already written to the underlying tables are NOT affected; only the change-package record is removed. Confirmed via the themed dialog. |

### Right column — package detail

| Element | What |
|---|---|
| Header | Package name + application + entry count + lifecycle buttons (*Submit* / *Approve* / *Reject* / *Export*) + the resolved post-apply step ids (when set on contributing screens). |
| Entries grouped by entity | Default groups: `ROLES`, `USERS`, `RELATIONSHIPS`, `SECURITY`, `MENUS`, `ACTION REPLAYS` (the CALL_API / CALL_PLUGIN entries) — the group label comes from each entry's `change_entity`. Click the group head to fold / unfold. |
| Group head | The label + the entry count + a short sample of the natural keys (e.g. `PRJM_NEW · UDC_ADM · BUYER_R2`). |
| Entry row | Operation badge + the natural key + the firing action label. Click the chevron to expand the `old → new` diff. |
| Diff view | Two-column `field` / `value` table with three tones: red strikethrough = old, green = new, secondary = unchanged. A small *Show unchanged* toggle reveals the noise of untouched columns when reviewing a renamed-but-not-changed entry. |
| Per-entry buttons | *Exclude* (only on `DRAFT` / `PENDING` packages) flips the entry to `EXCLUDED` and dims it. Click again to re-include. |

### Post-apply step ids on the header

When the screens that contributed to the package have `Screen.post_apply` step ids set (a list of Nomaflow step ids that should run once on the target after the bundle lands), those ids accumulate on the package header. On export they're stitched into a `[changesets] post_apply` section in the bundle; the target's apply path runs them after the last row write. Example use: a JDE security promotion that needs `nomajde-remerge-security` to run on the target once every captured role + assignment row has landed.

The editor for the step ids — what to register on a screen, what to wire to it — lives on the *Settings → Post-apply* sub-page next to the change-package editor. Defining a step takes a Nomaflow job id; the job is then runnable on the target.

---

## The Apply tab — bring a bundle in

Run this on the **target** install (typically prod) to bring a bundle exported from the source (typically dev).

The apply flow is two-pass: **dry-run first** to see the per-op drift report, then real apply, optionally with *force* ticked on rows you want to override.

| Step | What |
|---|---|
| 1. **Pick the JSON** | The exported `.changeset.json` file. The header shows its name, application and op count once parsed. |
| 2. **Dry-run** | `POST /admin/changesets/apply { bundle, dry_run: true }`. The server walks every op, fetches the current target row via the captured `read_query`, compares to the captured `old_values`, and tags the op with a status. **No write happens.** |
| 3. **Read the report** | Each op shows its status badge: `would_apply` (clean), `would_force` (drift on UPDATE / DELETE — needs the *force* tick), `unverified` (no read_query in the bundle — apply will land but no drift check), `conflict` (insert on a row that already exists, or delete on a missing row), `error` (per-op failure). The summary line totals each status. |
| 4. **Tick *force* on the rows you want to override** | Each `would_force` op has a checkbox. Confirms the operator's intent to overwrite a drifted row. `conflict` ops also get a checkbox — ticking it skips them on the real apply. |
| 5. **Apply** | `POST /admin/changesets/apply { bundle, dry_run: false, force: [<indexes>] }`. Each op runs in its own transaction; per-op rowcounts + status come back in the report. |
| 6. **Confirmation** | A row lands in the target's `AppliedBundle` log (the import-log on this same page → *Apply bundle* tab → top of the panel). The source-side package's status flips to `PROMOTED` only after the target's apply path reports back to the source — not automatic in the standalone Apply flow. |

### Drift detection — what it compares

For every row op (`INSERT` / `UPDATE` / `DELETE`), the apply path:

1. Reads the captured `read_query` from the bundle, runs it against the target with the captured `entity_key` → the **target's current row**.
2. Compares **field by field** to the bundle's `old_values`.
3. If they match → `would_apply` (the source's pre-image is consistent with the target's current state).
4. If they differ → `would_force` for UPDATE / DELETE (the row changed on the target since the package was captured; the operator decides whether to overwrite) or `conflict` for INSERT (a row at that key already exists on the target).
5. If the bundle has no `read_query` → `unverified`. Apply lands but no drift check ran. Compact bundles created with `--no-read-query` or from screens that don't expose a read query land here.

| Status | Meaning | What apply does |
|---|---|---|
| `would_apply` / `applied` | Clean — the target's current row matches the bundle's pre-image. | Apply runs the row write. |
| `would_force` / `applied` after *force* | Drift detected; operator opted to overwrite. | Apply runs the row write. |
| `unverified` | No read query → no drift check ran. | Apply runs the row write (single tick is `applied`). |
| `conflict` | INSERT on an existing key, DELETE on a missing row. | Skipped unless the operator ticks the conflict's checkbox. |
| `error` | The write itself raised (FK violation, constraint, dialect mismatch). | Skipped; the detail line carries the SQL error. |

### Re-applying the same bundle

The `AppliedBundle` log uses the bundle's **checksum** (sha256 over its ops) as the identity. Re-applying the same file is detected before any write runs — the dry-run report carries an `already_applied` block with the previous `applied_at` / `applied_by`. The operator can either confirm and re-apply (every row will land as `applied` if the target is back to the pre-image, or `would_force` / `conflict` if it's drifted) or close the file.

### Action replay (`CALL_API` / `CALL_PLUGIN`)

A change-tracked screen captures **every** API / plugin call it fires (so the package shows it for review). Whether the call is **replayed** on the target is gated by the action's `change_replay` flag:

| `change_replay` | What gets replayed on the target |
|---|---|
| `true` *(opt-in)* | The action is re-issued verbatim with the captured resolved params. Used for server-side merge plugins like `nomajde.security:j_remerge_security` — re-merging the security on the target is correct after the row writes land. |
| `false` *(default)* | The capture is shown in the package for review but **not** re-fired. Used for one-off side effects that shouldn't run twice (email sends, external webhook). |

A replayed action runs in the same transaction as the surrounding row writes when the dialect allows it; in practice this means a successful security-merge plugin run lands atomically with the role / assignment writes that triggered it.

---

## Promoting JD Edwards security — the canonical use case

The motivating workflow for this feature. On the **dev** instance:

1. Operator creates a role `PRJM_NEW`, attaches three menus, edits two existing roles' permissions. Every write lands in the **`JDE-PROD`** application's draft package as it happens.
2. Operator opens *Nomaflow → Changes*, reviews the draft. The detail view shows the three roles grouped as `ROLES`, the menu attachments as `MENUS`, the touched security as `SECURITY`. A `CALL_PLUGIN` entry to `nomajde.security:j_remerge_security` is also captured.
3. Operator excludes one entry — a typo correction they want to roll back manually instead. Submits, then *Approves*, then *Exports*.
4. The browser downloads `jde-prod-security-2026-06-09.changeset.json`.

On the **prod** instance:

5. Operator opens *Nomaflow → Changes → Apply bundle*, drops the JSON in.
6. Dry-run runs. The report shows 11 `would_apply` and 1 `would_force` on the role `BUYER_R2` (someone touched it on prod since the package was captured). Operator ticks the *force* checkbox for that row.
7. Operator clicks *Apply*. Every row lands; the post-apply step `nomajde-remerge-security` fires, re-merging the security for the affected parent roles on prod.
8. The source package on dev flips to `PROMOTED` once the target reports back. The prod-side *Applied bundles* panel records the new row with its checksum.

For the deep reference of the merge SQL the post-apply step runs, see [Nomaflow → Bundled jobs → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all).

---

## Configuring a screen for change tracking

The screen's *General* tab carries three toggles:

| Field | What |
|---|---|
| **`change_tracked`** | Master toggle. When on, the screen's writes attach to the active package on its application. |
| **`change_entity`** | Optional label that groups entries on the detail page. Free text — `role`, `user`, `relationship`, `security` are conventions. Empty falls back to the query name. |
| **`Screen.post_apply`** | List of Nomaflow step ids (from the *Post-apply* sub-page) to run **once on the target** after every row of every package contributed by this screen has landed. Use sparingly — these are the cross-cutting "now re-merge security" / "now refresh materialised views" steps. |

For an action embedded in the screen, an additional toggle on the action's *General* tab:

| Field | What |
|---|---|
| **`change_replay`** | When on, a `CALL_API` / `CALL_PLUGIN` invocation of this action is replayed on the target. Default off — capture-only. |

---

## API contract

| Endpoint | Method | What |
|---|---|---|
| `/admin/changesets` | `GET` | List packages. Filters: `application=<id>`, `status=<one-of>`. Superuser-only. |
| `/admin/changesets/<id>` | `GET` | Package detail — header + every entry with old / new values. |
| `/admin/changesets/<id>` | `DELETE` | Delete the package log only (not the underlying writes). |
| `/admin/changesets/<id>/submit` | `POST` | Move `DRAFT` → `PENDING`. |
| `/admin/changesets/<id>/approve` | `POST` | Move `PENDING` → `APPROVED`. |
| `/admin/changesets/<id>/reject` | `POST` | Move `PENDING` → `REJECTED` (will reopen to `DRAFT` on next capture). |
| `/admin/changesets/<id>/entries/<entry_id>/exclude` | `POST` | Flip an entry's status to `EXCLUDED`. |
| `/admin/changesets/<id>/entries/<entry_id>/include` | `POST` | Flip an entry's status to `CAPTURED`. |
| `/admin/changesets/<id>/export` | `GET` | Returns the compacted JSON bundle; flips the package to `EXPORTED`. |
| `/admin/changesets/apply` | `POST` | Body: `{ bundle, dry_run, force: [<indexes>] }`. Returns the per-op report. |
| `/admin/changesets/applied` | `GET` | The target's import log (every applied bundle). |

The bundle shape:

```json
{
  "format": "liberty.changeset.v1",
  "package": { "id": "...", "name": "...", "application": "JDE-PROD", "exported_at": "..." },
  "op_count": 12,
  "ops": [
    { "seq": 1, "connector": "jdedwards", "query": "roles", "read_query": "roles_by_key",
      "operation": "INSERT", "entity": "role", "entity_key": {"RLDF": "PRJM_NEW"},
      "new_values": {"RLDF": "PRJM_NEW", "RLDC": "1", ...},
      "source_action": "import security" }
  ],
  "post_apply": ["nomajde-remerge-security"],
  "checksum": "sha256:..."
}
```

The format is stable across framework upgrades — a bundle built on `2026.06` applies cleanly on `2026.07`. Forward compatibility is enforced by version tag (`format = "liberty.changeset.v1"`); a bundle produced by a hypothetical `v2` would be rejected by a `v1`-only target with a clear error.

---

## What's NOT in this page

The framework does ship the engine for these but the UI today is intentionally bare:

| Surface | Status |
|---|---|
| **Schedule an automatic submit / approve** | No. Manual lifecycle by design (an approved package goes to prod — a sign-off is the point). |
| **Diff between two packages** | No. Compare on the target via the Applied bundles log + the source's detail view. |
| **Roll back a promoted package** | No. The framework records the apply but doesn't synthesise a reverse bundle. To undo, capture a new package on the source that reverts the rows + promote it. |
| **Live multi-tab updates** | No. A capture on another tab doesn't refresh this page; click *Refresh* (top-right) to reload. |

---

## Common pitfalls

| Mistake | Symptom | Fix |
|---|---|---|
| Screen wasn't marked `change_tracked`. | Writes go through; no entries appear in the package. | Open the screen's *General* tab, toggle on, save. The change applies to subsequent writes only — earlier writes don't backfill. |
| Two operators have a DRAFT package open on the same application. | At most one DRAFT exists at a time; the second operator's writes attach to the same package. | Coordinate. The package's `created_by` records the original author; subsequent captures stamp `captured_by` on each entry, so attribution survives. |
| Bundle applied on the wrong target (staging instead of prod). | Apply lands; rows exist on staging. | Capture a reverse package on staging, promote to prod — the framework doesn't synthesise this automatically. Workflow discipline matters more than tooling here. |
| `would_force` on every UPDATE in the dry-run. | The target's pre-image diverged broadly — typically because the source and target weren't in sync to begin with. | Audit the divergence first. Forcing everything propagates the source's state wholesale; sometimes that's right, sometimes the source is the one that's stale. |
| `CALL_PLUGIN` captured but didn't fire on apply. | `change_replay` is off on the action. | Open the action's *General* tab, toggle `change_replay` on, save. Future captures will replay; past ones in already-exported packages stay as-is. |
| Post-apply step never ran. | The contributing screen's `Screen.post_apply` field is empty. | Wire the step id (a Nomaflow job's `id`) into the screen's `post_apply`. New captures will accumulate it on the package header; existing packages won't backfill. |
| Bundle re-applied accidentally. | Dry-run shows `already_applied` with the previous timestamp. | Read the existing apply's report. Re-applying is allowed and idempotent on clean rows; only do it intentionally. |

---

## What's next

- [Nomaflow → Bundled jobs → nomajde-remerge-security](./bundled-jobs.md#nomajde-remerge-security-all) — the security re-merge plugin most often wired as a post-apply step on JDE promotions.
- [Nomaflow → Concepts](./concepts.md) — the broader Nomaflow mental model that Change packages sits inside.
- [Settings → Package](../framework/build/packages.md) — the config equivalent: ship screens / menu items / dashboards between installs. The two channels coexist.
