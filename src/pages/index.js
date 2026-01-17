import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme/SearchBar';
import styles from './index.module.css';

// 模拟文档分类数据 - 您可以根据实际情况修改
const DOC_CATEGORIES = [
  {
    title: '入门指南',
    description: '从这里开始了解 unconscious-trampling',
    icon: '📚',
    items: [
      { name: '快速开始', to: '/docs/getting-started' },
      { name: '基本概念', to: '/docs/basic-concepts' },
      { name: '常见问题', to: '/docs/faq' }
    ]
  },
  {
    title: '使用教程',
    description: '详细的使用步骤和示例',
    icon: '🎯',
    items: [
      { name: '基础操作', to: '/docs/tutorial/basics' },
      { name: '高级功能', to: '/docs/tutorial/advanced' },
      { name: '最佳实践', to: '/docs/tutorial/best-practices' }
    ]
  },
  {
    title: '参考文档',
    description: '详细的参数说明和API参考',
    icon: '🔧',
    items: [
      { name: '配置选项', to: '/docs/reference/configuration' },
      { name: '命令列表', to: '/docs/reference/commands' },
      { name: '术语表', to: '/docs/reference/glossary' }
    ]
  },
  {
    title: '其他资源',
    description: '扩展阅读和附加资料',
    icon: '📖',
    items: [
      { name: '更新日志', to: '/docs/others/changelog' },
      { name: '贡献指南', to: '/docs/others/contributing' },
      { name: '许可证', to: '/docs/others/license' }
    ]
  }
];

function CategoryCard({ category }) {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryHeader}>
        <span className={styles.categoryIcon}>{category.icon}</span>
        <h3>{category.title}</h3>
      </div>
      <p className={styles.categoryDescription}>{category.description}</p>
      <ul className={styles.categoryList}>
        {category.items.map((item, index) => (
          <li key={index}>
            <Link to={item.to} className={styles.categoryLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>清晰、简洁的文档中心</p>
          
          {/* 搜索栏 - 非常突出 */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <SearchBar />
            </div>
            <p className={styles.searchHint}>
              输入关键词搜索文档，或浏览下方分类
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageCategories() {
  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>文档分类</h2>
          <p>按主题浏览所有文档内容</p>
        </div>
        <div className={styles.categoriesGrid}>
          {DOC_CATEGORIES.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentUpdates() {
  const updates = [
    { title: '新增：入门指南', date: '2024-01-15', to: '/docs/getting-started' },
    { title: '更新：常见问题', date: '2024-01-10', to: '/docs/faq' },
    { title: '优化：搜索功能', date: '2024-01-05', to: '/docs/search-guide' }
  ];

  return (
    <section className={styles.updatesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>最近更新</h2>
          <p>了解文档的最新变化</p>
        </div>
        <div className={styles.updatesList}>
          {updates.map((update, index) => (
            <Link to={update.to} key={index} className={styles.updateCard}>
              <div>
                <h3>{update.title}</h3>
                <span className={styles.updateDate}>{update.date}</span>
              </div>
              <span className={styles.updateArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title="首页"
      description={`${siteConfig.title} - 清晰、易用的文档中心`}
    >
      <HomepageHeader />
      <main>
        <HomepageCategories />
        <RecentUpdates />
        
        {/* 底部提示 */}
        <div className={styles.bottomTips}>
          <div className="container">
            <p>
              找不到所需内容？{' '}
              <Link to="https://github.com/your-username/unconscious-trampling/issues">
                提交问题
              </Link>{' '}
              或{' '}
              <Link to="/docs/contributing">
                帮助我们完善文档
              </Link>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
