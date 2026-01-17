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
            {/* 无意识分类 - 先链接到实际存在的页面 */}
            <Link to="docs/unconscious" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>无意识</h3>
                <p>查看无意识相关文档</p>
              </div>
            </Link>
            
            {/* GTS分类 */}
            <Link to="docs/gts" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>GTS</h3>
                <p>查看GTS相关文档</p>
              </div>
            </Link>
            
            {/* 其余分类 */}
            <Link to="docs/others" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>其余分类</h3>
                <p>查看其他文档</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
