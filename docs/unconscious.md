---
title: 无意识文档库
---

# 📚 无意识文档库

<div class="pagination-controls">
  <button class="page-btn active" data-page="1">第 1 页</button>
  <button class="page-btn" data-page="2">第 2 页</button>
  <button class="page-btn" data-page="3">第 3 页</button>
  <!-- 添加更多分页按钮 -->
</div>

<div class="docs-container">
  <!-- 第1页：15个文档卡片 (3×5布局) -->
  <div class="page active" id="page-1">
    <div class="doc-grid">
      <a href="/docs/unconscious/doc-1" class="doc-card">
        <h3>文档标题 1</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-2" class="doc-card">
        <h3>文档标题 2</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-3" class="doc-card">
        <h3>文档标题 3</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-4" class="doc-card">
        <h3>文档标题 4</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-5" class="doc-card">
        <h3>文档标题 5</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-6" class="doc-card">
        <h3>文档标题 6</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-7" class="doc-card">
        <h3>文档标题 7</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-8" class="doc-card">
        <h3>文档标题 8</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-9" class="doc-card">
        <h3>文档标题 9</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-10" class="doc-card">
        <h3>文档标题 10</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-11" class="doc-card">
        <h3>文档标题 11</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-12" class="doc-card">
        <h3>文档标题 12</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-13" class="doc-card">
        <h3>文档标题 13</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-14" class="doc-card">
        <h3>文档标题 14</h3>
        <p>文档描述或简介内容</p>
      </a>
      <a href="/docs/unconscious/doc-15" class="doc-card">
        <h3>文档标题 15</h3>
        <p>文档描述或简介内容</p>
      </a>
    </div>
  </div>

  <!-- 第2页 -->
  <div class="page" id="page-2">
    <div class="doc-grid">
      <!-- 这里放第16-30个文档卡片 -->
      <a href="/docs/unconscious/doc-16" class="doc-card">
        <h3>文档标题 16</h3>
        <p>文档描述或简介内容</p>
      </a>
      <!-- 继续添加直到第30个... -->
    </div>
  </div>

  <!-- 第3页 -->
  <div class="page" id="page-3">
    <div class="doc-grid">
      <!-- 这里放第31-45个文档卡片 -->
      <a href="/docs/unconscious/doc-31" class="doc-card">
        <h3>文档标题 31</h3>
        <p>文档描述或简介内容</p>
      </a>
      <!-- 继续添加... -->
    </div>
  </div>
</div>

<div class="nav-links">
  [返回首页](/)
</div>

<script>
// 分页功能
document.addEventListener('DOMContentLoaded', function() {
  const pageButtons = document.querySelectorAll('.page-btn');
  const pages = document.querySelectorAll('.page');
  
  pageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const pageId = this.getAttribute('data-page');
      
      // 更新按钮状态
      pageButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // 显示对应页面
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(`page-${pageId}`).classList.add('active');
      
      // 滚动到顶部
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });
});
</script>

<style>
/* 分页控件样式 */
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 3rem 0;
  flex-wrap: wrap;
}

.page-btn {
  padding: 8px 16px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  cursor: pointer;
  color: #495057;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.page-btn:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.page-btn.active {
  background: #2d3748;
  color: white;
  border-color: #2d3748;
}

/* 文档网格布局 */
.docs-container {
  position: relative;
  min-height: 800px;
}

.page {
  display: none;
  animation: fadeIn 0.3s ease;
}

.page.active {
  display: block;
}

.doc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 3rem;
}

/* 文档卡片样式 */
.doc-card {
  display: block;
  background: white;
  border-radius: 12px;
  padding: 1.75rem;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.doc-card:hover {
  border-color: #4a5568;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
  text-decoration: none;
}

.doc-card h3 {
  font-size: 1.25rem;
  color: #2d3748;
  margin: 0 0 0.75rem 0;
  font-weight: 600;
}

.doc-card p {
  color: #4a5568;
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
  opacity: 0.9;
}

/* 导航链接 */
.nav-links {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  text-align: center;
}

.nav-links a {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  text-decoration: none;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.nav-links a:hover {
  background: #edf2f7;
  text-decoration: none;
}

/* 响应式设计 */
@media (max-width: 992px) {
  .doc-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .doc-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  
  .pagination-controls {
    gap: 8px;
  }
  
  .page-btn {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
