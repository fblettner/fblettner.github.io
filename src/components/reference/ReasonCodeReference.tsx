import React, {useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  REASONS,
  STATUS_META,
  CAT_CONFIG,
  matchesReason,
  type CategoryFilter,
  type ReasonCode,
} from '@site/src/data/reasons';
import styles from './ReasonCodeReference.module.css';

type Lang = 'en' | 'fr';

const LABELS: Record<Lang, Record<string, string>> = {
  en: {
    all: 'All',
    refusal: 'Refusal B2B',
    rejection: 'PA Rejection',
    irregularity: 'Irregularity',
    codes: 'codes',
    search: 'Search a code, label, description…',
    mandatory: 'Mandatory in body',
    empty: 'No reason code matches the current filters.',
    source: 'Source: French e-invoicing reform — XP Z12-012 Annex A.',
  },
  fr: {
    all: 'Tous',
    refusal: 'Refus B2B',
    rejection: 'Rejet PA',
    irregularity: 'Irrégularité',
    codes: 'codes',
    search: 'Rechercher un code, libellé, description…',
    mandatory: 'Obligatoire dans le corps',
    empty: 'Aucun code motif ne correspond aux filtres en cours.',
    source: 'Source : réforme française de la facturation électronique — Annexe A de la norme XP Z12-012.',
  },
};

function FilterBar({
  filter,
  onFilterChange,
  search,
  onSearchChange,
  count,
  lang,
}: {
  filter: CategoryFilter;
  onFilterChange: (f: CategoryFilter) => void;
  search: string;
  onSearchChange: (v: string) => void;
  count: number;
  lang: Lang;
}) {
  const t = LABELS[lang];
  const filters: {key: CategoryFilter; label: string}[] = [
    {key: 'all', label: t.all},
    {key: 'refusal', label: t.refusal},
    {key: 'rejection', label: t.rejection},
    {key: 'irregularity', label: t.irregularity},
  ];
  return (
    <div className={styles.bar}>
      {filters.map((f) => (
        <button
          key={f.key}
          type="button"
          className={`${styles.btn} ${filter === f.key ? styles.btnActive : ''}`}
          onClick={() => onFilterChange(f.key)}
        >
          {f.label}
        </button>
      ))}
      <span className={styles.count}>
        {count} {t.codes}
      </span>
      <input
        type="search"
        className={styles.search}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={t.search}
      />
    </div>
  );
}

function ReasonCard({reason: r, lang}: {reason: ReasonCode; lang: Lang}) {
  const t = LABELS[lang];
  const cat = CAT_CONFIG[r.category];
  return (
    <div className={`${styles.card} ${r.critical ? styles.cardCritical : ''}`}>
      <div className={styles.top}>
        <span className={styles.codeBadge}>{r.code}</span>
        {r.critical && <span className={styles.criticalBadge}>{t.mandatory}</span>}
      </div>
      <div className={styles.label}>{r.label[lang]}</div>
      {r.desc && <div className={styles.desc}>{r.desc[lang]}</div>}
      <div className={styles.footer}>
        <span
          className={styles.catTag}
          style={{background: cat.bg, color: cat.text, borderColor: cat.border}}
        >
          {cat.label[lang]}
        </span>
        {r.statuses.map((code) => {
          const m = STATUS_META[code];
          if (!m) return null;
          return (
            <span
              key={code}
              className={styles.statusTag}
              style={{background: m.bg, color: m.color, borderColor: m.border}}
            >
              {code} · {m[lang]}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function ReasonCodeReference() {
  const {i18n} = useDocusaurusContext();
  const lang: Lang = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const t = LABELS[lang];

  const [catFilter, setCatFilter] = useState<CategoryFilter>('all');
  const [search, setSearch] = useState('');

  const visible = useMemo(
    () => REASONS.filter((r) => matchesReason(r, catFilter, search)),
    [catFilter, search],
  );

  return (
    <div className={styles.scroll}>
      <FilterBar
        filter={catFilter}
        onFilterChange={setCatFilter}
        search={search}
        onSearchChange={setSearch}
        count={visible.length}
        lang={lang}
      />
      {visible.length === 0 ? (
        <div className={styles.empty}>{t.empty}</div>
      ) : (
        <div className={styles.grid}>
          {visible.map((r) => (
            <ReasonCard key={r.code} reason={r} lang={lang} />
          ))}
        </div>
      )}
      <div className={styles.source}>{t.source}</div>
    </div>
  );
}
