import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main style={{
        margin: 'auto',
        maxWidth: '1000px',
        padding: '40px'
      }}>
        <p>The Bridge of Unity is a multi-media multi-fandom community of impassioned fans sharing in what they love. The Bridge was born out of being the central hub point for Tykhe Discord Bot, a collaborative fan project which has evolved to be a steadfast community for folks and fans of all kind.</p>
        <p>Tykhe is a collectible card game packaged inside of a Discord bot, enabling you to collect cards from your favorite franchising spanning Film, Television, Gaming, Mythology, and more.</p>
        <p>This website contains unofficial documentation for Tykhe as a fast and easy reference.</p>
        <p>This is an early development preview version.</p>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
