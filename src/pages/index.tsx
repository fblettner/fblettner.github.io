import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>NOMANA-IT</span>
        <Heading as="h1" className={styles.heroTitle}>
          Documentation, Blog and Resources
        </Heading>
        <p className={styles.heroSubtitle}>
          Information about our products and services with targeted solutions,
          getting-started guides, and content for advanced use cases.
        </p>
        <div className={styles.heroActions}>
          <Link className="button button--primary button--lg" to="/liberty/getting-started/">
            Liberty
          </Link>
          <Link className="button button--secondary button--lg" to="/nomaubl/getting-started/">
            NomaUBL
          </Link>
          <Link className="button button--secondary button--lg" to="/api/getting-started/">
            API
          </Link>
          <Link className="button button--secondary button--lg" to="/blog/">
            Blog
          </Link>
        </div>
        <div className={styles.sponsor}>
          <iframe
            src="https://github.com/sponsors/fblettner/button"
            title="Sponsor fblettner"
            height="32"
            width="114"
            style={{border: 0, borderRadius: 6}}
          />
        </div>
      </div>
    </header>
  );
}

type FeatureProps = {
  title: string;
  description: ReactNode;
  cta: {label: string; to: string};
  external?: boolean;
};

const features: FeatureProps[] = [
  {
    title: 'Liberty Framework',
    description: (
      <>
        A no-code development platform for rapid web app creation with{' '}
        <strong>React</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong>.
        Build robust applications with zero coding skills required.
      </>
    ),
    cta: {label: 'Online Demo →', to: 'https://liberty.nomana-it.fr/'},
    external: true,
  },
  {
    title: 'NomaUBL',
    description: (
      <>
        E-Invoicing &amp; UBL editing workspace. Generate, validate and dispatch
        UBL documents to French Plateformes Agréées with full lifecycle tracking.
      </>
    ),
    cta: {label: 'Get started →', to: '/nomaubl/getting-started/'},
  },
  {
    title: 'JD Edwards & BI Publisher',
    description: (
      <>
        Java APIs and integration recipes for Oracle JD&nbsp;Edwards EnterpriseOne
        and BI&nbsp;Publisher — barcode generation, BLOB exports, AIS tuning.
      </>
    ),
    cta: {label: 'Browse APIs →', to: '/api/getting-started/'},
  },
  {
    title: 'Open source',
    description: (
      <>
        All public repositories developed by NOMANA-IT. Contributions and stars
        appreciated.
      </>
    ),
    cta: {label: 'GitHub →', to: 'https://github.com/fblettner?tab=repositories'},
    external: true,
  },
];

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        {features.map(f => (
          <div key={f.title} className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{f.title}</h3>
            <p className={styles.featureBody}>{f.description}</p>
            <Link
              className={styles.featureLink}
              to={f.cta.to}
              {...(f.external ? {target: '_blank', rel: 'noopener'} : {})}>
              {f.cta.label}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function DemoCard() {
  return (
    <section className={styles.demo}>
      <div className={styles.demoInner}>
        <div>
          <h2 className={styles.demoTitle}>Try the Liberty demo</h2>
          <p className={styles.demoSubtitle}>
            Apps available: LIBERTY, NOMASX-1 and NOMAJDE.
          </p>
        </div>
        <pre className={styles.demoCreds}>
          <code>{`Login    = demo
Password = demo`}</code>
        </pre>
        <Link
          className="button button--primary button--lg"
          to="https://liberty.nomana-it.fr/"
          target="_blank"
          rel="noopener">
          Launch demo →
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentation, Blog and Resources"
      description="NOMANA-IT documentation, blog and resources covering Liberty Framework, NomaUBL, JD Edwards and BI Publisher.">
      <Hero />
      <main>
        <Features />
        <DemoCard />
      </main>
    </Layout>
  );
}
