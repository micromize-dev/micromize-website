import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function WhyMicromize() {
  return (
    <div className={clsx('container', styles.section)}>
      <div className="row">
        <div className="col col--8 col--offset-2">
          <Heading as="h2" className="text--center margin-bottom--md">
            Why Micromize?
          </Heading>
          <p>
            Traditional container security often involves creating complex profiles (like Seccomp or SELinux) for each application to audit or restrict its capabilities. Micromize flips this model.
          </p>
          <p>
            Instead of defining what each container can do, Micromize applies a broad set of sensible restrictions to all containers running on a node.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Micromize - Harden containers made easy">
      <HomepageHeader />
      <main>
        <WhyMicromize />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
