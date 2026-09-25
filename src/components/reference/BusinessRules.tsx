import React, {useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  BUSINESS_RULES,
  RULE_FAMILY_CONFIG,
  GUIDANCE_TOPICS,
  GUIDANCE_VERIFIED_ON,
  type BusinessRule,
  type BusinessRuleFamily,
} from '@site/src/data/businessRules';
import styles from './BusinessRules.module.css';

type Lang = 'en' | 'fr';
type TabKey = 'guidance' | 'rules';

const LABELS: Record<Lang, Record<string, string>> = {
  en: {
    tabGuidance: 'Points of attention',
    tabRules: 'Rule catalogue',
    search: 'Search rule id, title, text, term…',
    all: 'All',
    standardSays: 'What the standard requires',
    inNomaubl: 'In NomaUBL',
    terms: 'Terms',
    uncontrolled: 'Not software-checkable',
    empty: 'No rule matches the current filters.',
    verified: 'Points of attention written from AFNOR XP Z12-012 (June 2026), checked on',
    source: 'Rule catalogue: the French CTC rules of the AFNOR XP Z12-012 V1.4 matrix.',
  },
  fr: {
    tabGuidance: "Points d'attention",
    tabRules: 'Catalogue de règles',
    search: 'Rechercher un identifiant, un titre, un texte, un terme…',
    all: 'Toutes',
    standardSays: 'Ce qu’exige la norme',
    inNomaubl: 'Dans NomaUBL',
    terms: 'Termes',
    uncontrolled: 'Non contrôlable par logiciel',
    empty: 'Aucune règle ne correspond aux filtres en cours.',
    verified: "Points d'attention rédigés d'après l'AFNOR XP Z12-012 (juin 2026), vérifiés le",
    source: 'Catalogue de règles : les règles CTC françaises de la matrice AFNOR XP Z12-012 V1.4.',
  },
};

function RuleCard({rule, lang}: {rule: BusinessRule; lang: Lang}) {
  const fc = RULE_FAMILY_CONFIG[rule.family];
  const t = LABELS[lang];
  return (
    <div className={styles.ruleCard}>
      <div className={styles.ruleHead}>
        <span
          className={styles.ruleId}
          style={{background: fc.bg, color: fc.color, borderColor: fc.border}}
        >
          {rule.id}
        </span>
        <span className={styles.ruleTitle}>{rule.title}</span>
        {rule.uncontrolled && <span className={styles.uncontrolled}>{t.uncontrolled}</span>}
      </div>
      <div className={styles.ruleText}>{rule.text}</div>
      {rule.bts && rule.bts.length > 0 && (
        <div className={styles.chips}>
          <span className={styles.chipsLabel}>{t.terms}:</span>
          {rule.bts.map((b) => (
            <span key={b} className={styles.chip}>{b}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BusinessRules() {
  const {i18n} = useDocusaurusContext();
  const lang: Lang = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const t = LABELS[lang];

  const [tab, setTab] = useState<TabKey>('guidance');
  const [family, setFamily] = useState<BusinessRuleFamily | 'all'>('all');
  const [search, setSearch] = useState('');

  const families = Object.keys(RULE_FAMILY_CONFIG) as BusinessRuleFamily[];

  const rules = useMemo(() => {
    const q = search.trim().toLowerCase();
    return BUSINESS_RULES.filter((r) => {
      if (family !== 'all' && r.family !== family) return false;
      if (!q) return true;
      return [r.id, r.title, r.text, ...r.bts].join(' ').toLowerCase().includes(q);
    });
  }, [family, search]);

  return (
    <div className={styles.scroll}>
      <div className={styles.tabs}>
        <button
          className={tab === 'guidance' ? styles.tabActive : styles.tab}
          onClick={() => setTab('guidance')}
        >
          {t.tabGuidance} ({GUIDANCE_TOPICS.length})
        </button>
        <button
          className={tab === 'rules' ? styles.tabActive : styles.tab}
          onClick={() => setTab('rules')}
        >
          {t.tabRules} ({BUSINESS_RULES.length})
        </button>
      </div>

      {tab === 'guidance' ? (
        <div>
          <div className={styles.verified}>{t.verified} {GUIDANCE_VERIFIED_ON}.</div>
          {GUIDANCE_TOPICS.map((g) => (
            <div key={g.id} className={styles.topic}>
              <div className={styles.topicHead}>
                <span className={styles.chapter}>{g.chapter}</span>
                <span className={styles.topicTitle}>{g.title[lang]}</span>
              </div>
              <div className={styles.sub}>{t.standardSays}</div>
              <ul className={styles.list}>
                {g.standard.map((s, i) => <li key={i}>{s[lang]}</li>)}
              </ul>
              <div className={styles.sub}>{t.inNomaubl}</div>
              <ul className={styles.list}>
                {g.nomaubl.map((s, i) => <li key={i}>{s[lang]}</li>)}
              </ul>
              {g.bts && g.bts.length > 0 && (
                <div className={styles.chips}>
                  <span className={styles.chipsLabel}>{t.terms}:</span>
                  {g.bts.map((b) => <span key={b} className={styles.chip}>{b}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className={styles.filterBar}>
            <div className={styles.families}>
              <button
                className={family === 'all' ? styles.famActive : styles.fam}
                onClick={() => setFamily('all')}
              >
                {t.all}
              </button>
              {families.map((f) => {
                const fc = RULE_FAMILY_CONFIG[f];
                return (
                  <button
                    key={f}
                    className={family === f ? styles.famActive : styles.fam}
                    onClick={() => setFamily(f)}
                    style={family === f ? {background: fc.bg, color: fc.color, borderColor: fc.border} : undefined}
                  >
                    {fc.short}
                  </button>
                );
              })}
            </div>
            <input
              className={styles.search}
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {rules.length === 0 ? (
            <div className={styles.empty}>{t.empty}</div>
          ) : (
            rules.map((r) => <RuleCard key={r.id} rule={r} lang={lang} />)
          )}
          <div className={styles.source}>{t.source}</div>
        </div>
      )}
    </div>
  );
}
