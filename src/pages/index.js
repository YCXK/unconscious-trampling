import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// 强制设置页面背景 - 拥有最高优先级
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  // 直接修改body的样式
  document.body.style.background = 'linear-gradient(180deg, #e9ecef 0%, #ffffff 100%)';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.minHeight = '100vh';
  document.body.style.margin = '0';
}

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
            {/* 无意识分类 - 链接到 /unconscious */}
            <Link to="/unconscious" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>无意识</h3>
                <p>查看无意识相关文档</p>
              </div>
            </Link>
            
            {/* GTS分类 - 链接到 /gts */}
            <Link to="/gts" className={styles.categoryCard}>
              <div className={styles.categoryContent}>
                <h3>GTS</h3>
                <p>查看GTS相关文档</p>
              </div>
            </Link>
            
            {/* 其余分类 - 链接到 /others */}
            <Link to="/others" className={styles.categoryCard}>
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
