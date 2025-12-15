import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'BPF LSM Powered',
    Svg: require('../../../static/img/ebpf-icon.svg').default,
    description: (
      <>
        Leverages eBPF for high-performance, kernel-level enforcement.
      </>
    ),
  },
  {
    title: 'Container Aware',
    Svg: require('@site/static/img/container-aware.svg').default,
    description: (
      <>
        Built for Kubernetes and container runtimes.
      </>
    ),
  },
  {
    title: 'Modular Architecture',
    Svg: require('../../../static/img/ig-logo.svg').default,
    description: (
      <>
        Built on top of <a href="https://github.com/inspektor-gadget/inspektor-gadget" target="_blank" rel="noopener noreferrer">Inspektor Gadget</a>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
