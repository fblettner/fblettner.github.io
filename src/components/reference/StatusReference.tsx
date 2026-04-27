import React, {useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  STATUSES,
  COLOR_MAP,
  PHASE_COLOR,
  getActorColor,
  matchesFilter,
  type BilStr,
  type Status,
  type StatusFilter,
} from '@site/src/data/statuses';
import styles from './StatusReference.module.css';

type Lang = 'en' | 'fr';

const LABELS: Record<Lang, Record<string, string>> = {
  en: {
    all: 'All',
    transmission: 'Transmission',
    processing: 'Processing',
    mandatory: 'PPF mandatory',
    factoring: 'Factoring',
    special: 'Special',
    statuses: 'statuses',
    phase_transmission: 'Transmission',
    phase_processing: 'Processing',
    phase_both: 'Both',
    mandatoryTag: 'PPF mandatory',
    factoringTag: 'Factoring',
    batchRouting: 'Batch / routing',
    mustTransmitPPF: 'Must be transmitted to the PPF',
    whatItMeans: 'What it means',
    whenItApplies: 'When it applies',
    allowedActions: 'Allowed actions',
    legendTitle: 'Actor legend',
    legendPA: 'PA-E / PA-R / PA-TR (platforms)',
    legendSeller: 'SELLER',
    legendBuyer: 'BUYER',
    legendAgent: 'PA-TR / Agent',
    source: 'Source: French e-invoicing reform — XP Z12-012 (life-cycle codes 200–501).',
    close: 'Close',
  },
  fr: {
    all: 'Tous',
    transmission: 'Transmission',
    processing: 'Traitement',
    mandatory: 'Obligatoire PPF',
    factoring: 'Affacturage',
    special: 'Spécial',
    statuses: 'statuts',
    phase_transmission: 'Transmission',
    phase_processing: 'Traitement',
    phase_both: 'Les deux',
    mandatoryTag: 'Obligatoire PPF',
    factoringTag: 'Affacturage',
    batchRouting: 'Lot / routage',
    mustTransmitPPF: 'Doit être transmis au PPF',
    whatItMeans: 'Ce que cela signifie',
    whenItApplies: 'Quand il s’applique',
    allowedActions: 'Actions autorisées',
    legendTitle: 'Légende des acteurs',
    legendPA: 'PA-E / PA-R / PA-TR (plateformes)',
    legendSeller: 'VENDEUR',
    legendBuyer: 'ACHETEUR',
    legendAgent: 'PA-TR / Agent',
    source: 'Source : réforme française de la facturation électronique — XP Z12-012 (codes de cycle de vie 200–501).',
    close: 'Fermer',
  },
};

function bil(b: BilStr, lang: Lang): string {
  return b[lang];
}

function FilterBar({
  filter,
  onFilterChange,
  count,
  lang,
}: {
  filter: StatusFilter;
  onFilterChange: (f: StatusFilter) => void;
  count: number;
  lang: Lang;
}) {
  const t = LABELS[lang];
  const filters: {key: StatusFilter; label: string}[] = [
    {key: 'all', label: t.all},
    {key: 'transmission', label: t.transmission},
    {key: 'processing', label: t.processing},
    {key: 'mandatory', label: t.mandatory},
    {key: 'factoring', label: t.factoring},
    {key: 'special', label: t.special},
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
        {count} {t.statuses}
      </span>
    </div>
  );
}

function StatusCard({
  status: s,
  lang,
  onClick,
}: {
  status: Status;
  lang: Lang;
  onClick: () => void;
}) {
  const t = LABELS[lang];
  const col = COLOR_MAP[s.color] ?? COLOR_MAP.gray;
  const ph = PHASE_COLOR[s.phase];
  const subName = lang === 'en' ? s.name.fr : s.name.en;
  return (
    <button type="button" className={styles.card} onClick={onClick}>
      <div className={styles.cardHeader}>
        <span
          className={styles.codeBadge}
          style={{background: col.bg, color: col.text, borderColor: col.border}}
        >
          {s.code}
        </span>
        <div className={styles.cardMeta}>
          <div className={styles.nameText}>{bil(s.name, lang)}</div>
          <div className={styles.subName}>{subName}</div>
          <div className={styles.whoText}>{bil(s.who, lang)}</div>
        </div>
        <span className={styles.chevron} aria-hidden>
          ›
        </span>
      </div>
      <div className={styles.tagRow}>
        <span className={styles.tag} style={{background: ph.bg, color: ph.text}}>
          {t[`phase_${s.phase}`]}
        </span>
        {s.mandatory && (
          <span
            className={styles.tag}
            style={{background: 'rgba(248,113,113,0.12)', color: '#f87171'}}
          >
            {t.mandatoryTag}
          </span>
        )}
        {s.factoring && (
          <span
            className={styles.tag}
            style={{background: 'rgba(167,139,250,0.12)', color: '#a78bfa'}}
          >
            {t.factoringTag}
          </span>
        )}
        {s.special && (
          <span
            className={styles.tag}
            style={{background: 'rgba(251,146,60,0.12)', color: '#fb923c'}}
          >
            {t.batchRouting}
          </span>
        )}
      </div>
    </button>
  );
}

function StatusModal({
  status: s,
  lang,
  onClose,
}: {
  status: Status;
  lang: Lang;
  onClose: () => void;
}) {
  const t = LABELS[lang];
  const col = COLOR_MAP[s.color] ?? COLOR_MAP.gray;
  const ph = PHASE_COLOR[s.phase];
  const subName = lang === 'en' ? s.name.fr : s.name.en;
  const whenItems = s.when ? s.when[lang] : [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <span
            className={styles.codeBadge}
            style={{background: col.bg, color: col.text, borderColor: col.border}}
          >
            {s.code}
          </span>
          <div className={styles.cardMeta}>
            <div className={styles.modalTitle}>{bil(s.name, lang)}</div>
            <div className={styles.modalSubTitle}>{subName}</div>
            <div className={styles.modalWho}>{bil(s.who, lang)}</div>
            <div className={styles.tagRow}>
              <span className={styles.tag} style={{background: ph.bg, color: ph.text}}>
                {t[`phase_${s.phase}`]}
              </span>
              {s.mandatory && (
                <span
                  className={styles.tag}
                  style={{background: 'rgba(248,113,113,0.12)', color: '#f87171'}}
                >
                  {t.mandatoryTag}
                </span>
              )}
              {s.factoring && (
                <span
                  className={styles.tag}
                  style={{background: 'rgba(167,139,250,0.12)', color: '#a78bfa'}}
                >
                  {t.factoringTag}
                </span>
              )}
              {s.special && (
                <span
                  className={styles.tag}
                  style={{background: 'rgba(251,146,60,0.12)', color: '#fb923c'}}
                >
                  {t.batchRouting}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label={t.close}
          >
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          {s.mandatory && (
            <div className={styles.mandatoryAlert}>{t.mustTransmitPPF}</div>
          )}

          <div>
            <div className={styles.sectionLabel}>{t.whatItMeans}</div>
            <p className={styles.descText}>{bil(s.desc, lang)}</p>
          </div>

          {whenItems.length > 0 && (
            <div>
              <div className={styles.sectionLabel}>{t.whenItApplies}</div>
              <ul className={styles.whenList}>
                {whenItems.map((w, i) => (
                  <li key={i} className={styles.whenItem}>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <div className={styles.sectionLabel}>{t.allowedActions}</div>
            <div className={styles.actionsList}>
              {s.actions.map((a, i) => {
                const actorLabel =
                  typeof a.actor === 'object' ? a.actor[lang] : a.actor;
                const ac = getActorColor(a.actor);
                const text = lang === 'fr' ? a.fr : a.en;
                return (
                  <div key={i} className={styles.actionRow}>
                    <span className={styles.actionDot} style={{background: ac}} />
                    <span>
                      <strong className={styles.actorName} style={{color: ac}}>
                        {actorLabel}:{' '}
                      </strong>
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {s.note && <div className={styles.noteBox}>{bil(s.note, lang)}</div>}
        </div>
      </div>
    </div>
  );
}

function Legend({lang}: {lang: Lang}) {
  const t = LABELS[lang];
  const items = [
    {color: '#4a9eff', label: t.legendPA},
    {color: '#22c55e', label: t.legendSeller},
    {color: '#fb923c', label: t.legendBuyer},
    {color: '#a78bfa', label: t.legendAgent},
  ];
  return (
    <div className={styles.legend}>
      <div className={styles.legendTitle}>{t.legendTitle}</div>
      <div className={styles.legendItems}>
        {items.map((l) => (
          <div key={l.color} className={styles.legendItem}>
            <span className={styles.legendDot} style={{background: l.color}} />
            <span className={styles.legendLabel}>{l.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.legendSource}>{t.source}</div>
    </div>
  );
}

export default function StatusReference() {
  const {i18n} = useDocusaurusContext();
  const lang: Lang = i18n.currentLocale === 'fr' ? 'fr' : 'en';

  const [filter, setFilter] = useState<StatusFilter>('all');
  const [selected, setSelected] = useState<Status | null>(null);

  const visible = useMemo(
    () => STATUSES.filter((s) => matchesFilter(s, filter)),
    [filter],
  );

  return (
    <div className={styles.scroll}>
      <FilterBar
        filter={filter}
        onFilterChange={setFilter}
        count={visible.length}
        lang={lang}
      />
      <div className={styles.grid}>
        {visible.map((s) => (
          <StatusCard
            key={s.code}
            status={s}
            lang={lang}
            onClick={() => setSelected(s)}
          />
        ))}
      </div>
      <Legend lang={lang} />
      {selected && (
        <StatusModal
          status={selected}
          lang={lang}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
