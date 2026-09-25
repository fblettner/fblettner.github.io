import React, {useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  UBL_FIELDS,
  SECTION_CONFIG,
  SECTION_ORDER,
  matchesUBL,
  type SectionFilter,
  type UBLField,
  type UBLSection,
} from '@site/src/data/ubl';
import {
  BUSINESS_RULES,
  RULE_FAMILY_CONFIG,
  type BusinessRule,
} from '@site/src/data/businessRules';
import styles from './UBLReference.module.css';

const RULE_BY_ID = new Map(BUSINESS_RULES.map((r) => [r.id, r]));

type Lang = 'en' | 'fr';

const LABELS: Record<Lang, Record<string, string>> = {
  en: {
    all: 'All',
    fields: 'fields',
    search: 'Search BT, label, XPath, example…',
    colLabel: 'Label',
    colCard: 'Card.',
    empty: 'No UBL field matches the current filters.',
    source: 'Source: French e-invoicing reform — EN 16931 / extended-ctc-fr / Factur-X.',
  },
  fr: {
    all: 'Tous',
    fields: 'champs',
    search: 'Rechercher BT, libellé, XPath, exemple…',
    colLabel: 'Libellé',
    colCard: 'Card.',
    empty: 'Aucun champ UBL ne correspond aux filtres en cours.',
    source: 'Source : réforme française de la facturation électronique — EN 16931 / extended-ctc-fr / Factur-X.',
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
  filter: SectionFilter;
  onFilterChange: (f: SectionFilter) => void;
  search: string;
  onSearchChange: (v: string) => void;
  count: number;
  lang: Lang;
}) {
  const t = LABELS[lang];
  const filters: {key: SectionFilter; label: string}[] = [
    {key: 'all', label: t.all},
    ...SECTION_ORDER.map((s) => ({key: s as SectionFilter, label: SECTION_CONFIG[s].label[lang]})),
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
        {count} {t.fields}
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

const PROFILE_LABEL: Record<string, string> = {
  basic: 'BASIC WL',
  en16931: 'EN 16931',
  extended: 'EXTENDED',
};

function FieldRow({field: f, lang, onRuleClick}: {field: UBLField; lang: Lang; onRuleClick: (id: string) => void}) {
  const cfg = SECTION_CONFIG[f.section];
  return (
    <div className={styles.row}>
      <span
        className={styles.btBadge}
        style={{background: cfg.bg, color: cfg.color, borderColor: cfg.border}}
      >
        {f.bt}
      </span>
      <div className={styles.labelWrap}>
        <div className={styles.label}>{f.label[lang]}</div>
        {f.desc && <div className={styles.desc}>{f.desc[lang]}</div>}
        {f.note && <div className={styles.note}>{f.note[lang]}</div>}
        {f.example && <div className={styles.example}>{f.example}</div>}
        {(f.profile || f.type || f.codeList || (f.rules && f.rules.length > 0)) && (
          <div className={styles.meta}>
            {f.profile && <span className={styles.profile}>{PROFILE_LABEL[f.profile] ?? f.profile}</span>}
            {f.type && <span className={styles.chip}>{f.type}</span>}
            {f.codeList && <span className={styles.chip}>{f.codeList}</span>}
            {f.rules?.map((r) => (
              <button
                key={r}
                type="button"
                className={styles.ruleChip}
                onClick={() => onRuleClick(r)}
                title={lang === 'fr' ? 'Voir la règle' : 'View the rule'}
              >
                {r}
              </button>
            ))}
          </div>
        )}
      </div>
      <code className={styles.xpath}>{f.xpath}</code>
      <span className={styles.cardinality}>{f.cardinality}</span>
    </div>
  );
}

function RuleModal({rule, lang, onClose}: {rule: BusinessRule; lang: Lang; onClose: () => void}) {
  const fc = RULE_FAMILY_CONFIG[rule.family];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.ruleModal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.ruleModalHeader}>
          <span
            className={styles.ruleModalId}
            style={{background: fc.bg, color: fc.color, borderColor: fc.border}}
          >
            {rule.id}
          </span>
          <div className={styles.ruleModalTitle}>{rule.title}</div>
          <button type="button" className={styles.ruleModalClose} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className={styles.ruleModalBody}>
          <div className={styles.ruleModalFamily}>{fc.label[lang]}</div>
          <div className={styles.ruleModalText}>{rule.text}</div>
          {rule.bts && rule.bts.length > 0 && (
            <div className={styles.meta}>
              {rule.bts.map((b) => <span key={b} className={styles.chip}>{b}</span>)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function UBLReference() {
  const {i18n} = useDocusaurusContext();
  const lang: Lang = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const t = LABELS[lang];

  const [sectionFilter, setSectionFilter] = useState<SectionFilter>('all');
  const [search, setSearch] = useState('');
  const [openRule, setOpenRule] = useState<string | null>(null);
  const activeRule = openRule ? RULE_BY_ID.get(openRule) ?? null : null;

  const visible = useMemo(
    () => UBL_FIELDS.filter((f) => matchesUBL(f, sectionFilter, search)),
    [sectionFilter, search],
  );

  const grouped = useMemo(() => {
    return visible.reduce<Record<UBLSection, UBLField[]>>((acc, f) => {
      if (!acc[f.section]) acc[f.section] = [];
      acc[f.section].push(f);
      return acc;
    }, {} as Record<UBLSection, UBLField[]>);
  }, [visible]);

  return (
    <div className={styles.scroll}>
      <FilterBar
        filter={sectionFilter}
        onFilterChange={setSectionFilter}
        search={search}
        onSearchChange={setSearch}
        count={visible.length}
        lang={lang}
      />
      {visible.length === 0 ? (
        <div className={styles.empty}>{t.empty}</div>
      ) : (
        <div className={styles.tableWrap}>
          <div className={styles.tableHeader}>
            <span>BT</span>
            <span>{t.colLabel}</span>
            <span>XPath</span>
            <span>{t.colCard}</span>
          </div>
          {SECTION_ORDER.map((section) => {
            const fields = grouped[section];
            if (!fields || fields.length === 0) return null;
            const cfg = SECTION_CONFIG[section];
            return (
              <div key={section} className={styles.sectionGroup}>
                <div
                  className={styles.sectionTitle}
                  style={{background: cfg.bg, color: cfg.color, borderLeftColor: cfg.color}}
                >
                  {cfg.label[lang]}
                  <span className={styles.fieldCount}>({fields.length})</span>
                </div>
                {fields.map((f) => (
                  <FieldRow key={f.bt} field={f} lang={lang} onRuleClick={setOpenRule} />
                ))}
              </div>
            );
          })}
        </div>
      )}
      <div className={styles.source}>{t.source}</div>
      {activeRule && (
        <RuleModal rule={activeRule} lang={lang} onClose={() => setOpenRule(null)} />
      )}
    </div>
  );
}
