---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 纯CSS分页 -->
<div class="pagination">
  <a href="#page-1" class="page-link active">第 1 页</a>
  <a href="#page-2" class="page-link">第 2 页</a>
  <a href="#page-3" class="page-link">第 3 页</a>
</div>

<!-- 第1页 -->
<div class="page-content" id="page-1">
  <div class="doc-grid">
    <a href="/unconscious/doc1" class="doc-card">
      <h3>文档 1</h3>
      <p>文档描述内容</p>
    </a>
    <!-- 添加14个更多卡片... -->
  </div>
</div>

<!-- 第2页 -->
<div class="page-content" id="page-2" style="display: none;">
  <div class="doc-grid">
    <a href="/unconscious/doc16" class="doc-card">
      <h3>文档 16</h3>
      <p>文档描述内容</p>
    </a>
    <!-- 添加更多卡片... -->
  </div>
</div>

<!-- 第3页 -->
<div class="page-content" id="page-3" style="display: none;">
  <div class="doc-grid">
    <a href="/unconscious/doc31" class="doc-card">
      <h3>文档 31</h3>
      <p>文档描述内容</p>
    </a>
    <!-- 添加更多卡片... -->
  </div>
</div>

<div style="text-align: center; margin-top: 3rem;">
  <a href="/" style="display: inline-block; padding: 0.75rem 2rem; background: #2d3748; color: white; border-radius: 8px; text-decoration: none;">
    返回首页
  </a>
</div>

<style>
/* 分页 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 3rem 0;
}

.page-link {
  display: inline-block;
  padding: 8px 16px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  text-decoration: none;
  color: #495057;
  font-size: 0.95rem;
}

.page-link:hover {
  background: #e9ecef;
}

.page-link.active {
  background: #2d3748;
  color: white;
  border-color: #2d3748;
}

/* 文档网格 */
.doc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 3rem;
}

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
  min-height: 150px;
}

.doc-card:hover {
  border-color: #4a5568;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-3px);
  text-decoration: none;
}

@media (max-width: 992px) {
  .doc-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .doc-grid {
    grid-template-columns: 1fr;
  }
}
</style>
