import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          <img
            alt="Micromize Logo"
            src={useBaseUrl('/img/logo.svg')}
            className={styles.heroLogo}
          />
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function WhyMicromize() {
  return (
    <section className={styles.whiteSection}>
      <div className={clsx('container', styles.section)}>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <Heading as="h3" className={clsx('margin-bottom--md', styles.whyMicromizeTitle)}>
              Overview
            </Heading>
            <p className={styles.whyMicromizeText}>
              Micromize is an open-source enforcement layer built on eBPF. Instead of chasing "bad" behavior, it enforces "good" architecture. It transforms high-level cloud-native assumptions into immutable kernel-level restrictions. If a workload attempts to deviate from its declared structural invariants, the kernel simply says "No."
            </p>
            <p className={styles.whyMicromizeText}>
              Today, Micromize attaches eBPF programs to LSM hooks and enforces strict container boundaries, blocks filesystem escapes and host access. It restricts capabilities to prevent privilege escalation via unshare/clone/setns, eliminates ptrace-based debugging/injection attacks, and validates execution integrity via SBOM and runtime hash validation. Policies are loaded before container start and enforced at execution time. No runtime replacement. No learning mode. Kernel-native enforcement.
            </p>
            <Heading as="h3" className={clsx('margin-bottom--md', styles.whyMicromizeTitle)}>
              The Philosophy
            </Heading>
            <p className={styles.whyMicromizeText}>
              Containers rely on namespaces, cgroups, seccomp, and LSMs but they still expose kernel attack surface. Misconfigured or overly privileged workloads lead to container escape primitives, host mutation from containers, runtime drift from the image, and undefined kernel behavior. Tools may detect this. Few eliminate it.
              </p>
              <p className={styles.whyMicromizeText}>
                 Micromize doesn't care what happens inside the container. Instead, it enforces the boundaries. We don't scan for cryptominers because with Micromize, unauthorized binaries can't execute in the first place. You can't effectively protect against every poorly written application, but you can guarantee that nothing runs unless it was part of the original image.
              </p>
              <p className={styles.whyMicromizeText}>
              Micromize assumes containers are immutable, disposable, non-host-mutating, and explicit about privilege. If your workload violates those assumptions, Micromize blocks it or forces an explicit posture decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Kernel-enforced boundary hardening for cloud-native containers.">
      <HomepageHeader />
      <main>
        <WhyMicromize />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
