import React, { useEffect } from 'react';
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
  useEffect(() => {
    // 最直接的解决方案：创建独立背景层
    const bgDiv = document.createElement('div');
    bgDiv.id = 'custom-bg-layer';
    bgDiv.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: linear-gradient(180deg, #e9ecef 0%, #ffffff 100%);
      z-index: -9999;
      pointer-events: none;
    `;
    
    document.body.appendChild(bgDiv);
    
    // 清理函数
    return () => {
      const existingBg = document.getElementById('custom-bg-layer');
      if (existingBg && existingBg.parentNode) {
        existingBg.parentNode.removeChild(existingBg);
      }
    };
  }, []);

  return (
    <Layout title="首页">
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.categories}>
            <Link to="/unconscious" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>无意识</h3>
                <p>查看无意识文章</p>
              </div>
            </Link>
            
            <Link to="/gts" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>GTS</h3>
                <p>查看GTS文章</p>
              </div>
            </Link>
            
            <Link to="/others" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>无意识（短篇）</h3>
                <p>查看无意识（短篇）文章</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
