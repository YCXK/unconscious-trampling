import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>文档中心</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="首页">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.categories}>
            {/* 无意识分类 */}
            <Link to="/docs/unconscious.md" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>无意识</h3>
                <p>点击进入无意识文档</p>
              </div>
            </Link>
            
            {/* GTS分类 */}
            <Link to="/docs/gts.md" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>GTS</h3>
                <p>点击进入GTS文档</p>
              </div>
            </Link>
            
            {/* 其余分类 */}
            <Link to="/docs/others.md" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>其余分类</h3>
                <p>点击进入其他文档</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
