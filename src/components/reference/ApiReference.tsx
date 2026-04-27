import React, {useEffect, useRef, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './ApiReference.module.css';

const REDOC_SCRIPT_SRC =
  'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js';

const THEME_LIGHT = {
  colors: {
    primary: {main: '#2b8cff'},
    text: {primary: '#1f2937', secondary: '#475569'},
    http: {
      get: '#2b8cff',
      post: '#22c55e',
      put: '#f59e0b',
      delete: '#f87171',
      patch: '#a78bfa',
    },
  },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    headings: {fontFamily: 'inherit', fontWeight: '700'},
    code: {fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'},
  },
  sidebar: {backgroundColor: '#f6f8fc', textColor: '#1f2937'},
  rightPanel: {backgroundColor: '#0d1220', textColor: '#e2e8f0'},
};

const THEME_DARK = {
  colors: {
    primary: {main: '#4a9eff'},
    text: {primary: '#e2e8f0', secondary: '#94a3b8'},
    http: {
      get: '#4a9eff',
      post: '#22c55e',
      put: '#f59e0b',
      delete: '#f87171',
      patch: '#a78bfa',
    },
    border: {dark: '#1f2937', light: '#1f2937'},
  },
  typography: {
    fontFamily:
      "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    headings: {fontFamily: 'inherit', fontWeight: '700'},
    code: {fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'},
  },
  sidebar: {
    backgroundColor: '#0d1220',
    textColor: '#e2e8f0',
    activeTextColor: '#4a9eff',
  },
  rightPanel: {backgroundColor: '#070a13', textColor: '#e2e8f0'},
  schema: {nestedBackground: '#0d1220'},
};

declare global {
  interface Window {
    Redoc?: {
      init: (
        specOrUrl: string | object,
        options: Record<string, unknown>,
        target: HTMLElement,
        cb?: (err: unknown) => void,
      ) => void;
    };
  }
}

function loadRedocScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.Redoc) return Promise.resolve();

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${REDOC_SCRIPT_SRC}"]`,
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () =>
        reject(new Error('Failed to load Redoc bundle')),
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = REDOC_SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Redoc bundle'));
    document.head.appendChild(script);
  });
}

function RedocClient({specUrl, loading}: {specUrl: string; loading: string}) {
  const {colorMode} = useColorMode();
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setError(null);

    loadRedocScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.Redoc) return;
        containerRef.current.innerHTML = '';
        window.Redoc.init(
          specUrl,
          {
            theme: colorMode === 'dark' ? THEME_DARK : THEME_LIGHT,
            nativeScrollbars: true,
            hideDownloadButton: false,
            disableSearch: false,
            expandResponses: '200',
            pathInMiddlePanel: true,
            scrollYOffset: 'nav.navbar',
          },
          containerRef.current,
          (err) => {
            if (err) setError(String((err as Error).message ?? err));
          },
        );
      })
      .catch((e) => {
        if (!cancelled) setError(String(e?.message ?? e));
      });

    return () => {
      cancelled = true;
    };
  }, [specUrl, colorMode]);

  return (
    <>
      {error && <div className={styles.error}>Could not load API reference: {error}</div>}
      <div ref={containerRef} className={styles.host}>
        <div className={styles.loading}>{loading}</div>
      </div>
    </>
  );
}

export default function ApiReference({
  specUrl = '/openapi/nomaubl.json',
  loading = 'Loading API reference…',
}: {
  specUrl?: string;
  loading?: string;
}) {
  return (
    <BrowserOnly fallback={<div className={styles.loading}>{loading}</div>}>
      {() => <RedocClient specUrl={specUrl} loading={loading} />}
    </BrowserOnly>
  );
}
