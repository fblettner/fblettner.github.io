import {useEffect, useState, useCallback} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const STORAGE_KEY = 'nomana-cookie-consent';

type Decision = 'granted' | 'denied';

interface ConsentRecord {
  v: 1;
  analytics: Decision;
  ts: string;
}

const I18N = {
  en: {
    title: 'Cookies & analytics',
    body:
      'NOMANA-IT uses Google Analytics 4 to understand how the documentation is used and improve its content. No cookie is set without your consent.',
    refuse: 'Refuse',
    accept: 'Accept',
    pill: 'Cookie preferences',
  },
  fr: {
    title: 'Cookies & mesure d’audience',
    body:
      'NOMANA-IT utilise Google Analytics 4 pour comprendre l’utilisation de la documentation et en améliorer le contenu. Aucun cookie n’est déposé sans votre accord.',
    refuse: 'Refuser',
    accept: 'Accepter',
    pill: 'Préférences cookies',
  },
} as const;

type LocaleKey = keyof typeof I18N;

function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed && parsed.v === 1 && (parsed.analytics === 'granted' || parsed.analytics === 'denied')) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function writeConsent(decision: Decision): ConsentRecord {
  const record: ConsentRecord = {v: 1, analytics: decision, ts: new Date().toISOString()};
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* localStorage may be blocked — silent */
  }
  return record;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __nomanaGtagLoaded?: boolean;
  }
}

function loadGtag(measurementId: string) {
  if (typeof window === 'undefined' || window.__nomanaGtagLoaded) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (...args: any[]) => {
    window.dataLayer!.push(args);
  };
  window.gtag = gtag as never;
  gtag('js', new Date());
  gtag('config', measurementId, {anonymize_ip: true});
  window.__nomanaGtagLoaded = true;
}

export default function CookieConsent() {
  const {i18n, siteConfig} = useDocusaurusContext();
  const trackingId = (siteConfig.customFields?.gaTrackingId as string | undefined) ?? '';
  const localeKey: LocaleKey = i18n.currentLocale === 'fr' ? 'fr' : 'en';
  const t = I18N[localeKey];

  const [bannerOpen, setBannerOpen] = useState(false);
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setDecided(true);
      if (stored.analytics === 'granted' && trackingId) loadGtag(trackingId);
    } else {
      setBannerOpen(true);
    }
  }, [trackingId]);

  const handleAccept = useCallback(() => {
    writeConsent('granted');
    if (trackingId) loadGtag(trackingId);
    setBannerOpen(false);
    setDecided(true);
  }, [trackingId]);

  const handleRefuse = useCallback(() => {
    writeConsent('denied');
    setBannerOpen(false);
    setDecided(true);
  }, []);

  const reopen = useCallback(() => setBannerOpen(true), []);

  return (
    <>
      {bannerOpen && (
        <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t.title}>
          <div className={styles.body}>
            <strong className={styles.title}>{t.title}</strong>
            <p className={styles.text}>{t.body}</p>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.refuse} onClick={handleRefuse}>
              {t.refuse}
            </button>
            <button type="button" className={styles.accept} onClick={handleAccept}>
              {t.accept}
            </button>
          </div>
        </div>
      )}
      {decided && !bannerOpen && (
        <button
          type="button"
          className={styles.pill}
          onClick={reopen}
          aria-label={t.pill}
          title={t.pill}
        >
          🍪
        </button>
      )}
    </>
  );
}
