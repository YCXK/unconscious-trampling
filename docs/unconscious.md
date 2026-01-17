---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 纯CSS分页控件 -->
<div class="pagination-controls">
  <label>
    <input type="radio" name="page" value="1" checked hidden>
    <span class="page-btn active">第 1 页</span>
  </label>
  <label>
    <input type="radio" name="page" value="2" hidden>
    <span class="page-btn">第 2 页</span>
  </label>
  <label>
    <input type="radio" name="page" value="3" hidden>
    <span class="page-btn">第 3 页</span>
  </label>
</div>

<!-- 第1页 -->
<div class="page" id="page-1">
  <div class="doc-grid">
    <a href="/unconscious/doc1" class="doc-card">
      <h3>文档 1</h3>
      <p>文档描述内容</p>
    </a>
    <!-- 继续添加其他14个卡片... -->
  </div>
</div>

<!-- 第2页 -->
<div class="page" id="page-2" hidden>
  <div class="doc-grid">
    <a href="/unconscious/doc16" class="doc-card">
      <h3>文档 16</h3>
      <p>文档描述内容</p>
    </a>
    <!-- 继续添加其他卡片... -->
  </div>
</div>

<!-- 第3页 -->
<div class="page" id="page-3" hidden>
  <div class="doc-grid">
    <a href="/unconscious/doc31" class="doc-card">
      <h3>文档 31</h3>
      <p>文档描述内容</p>
    </a>
    <!-- 继续添加其他卡片... -->
  </div>
</div>

<div style="text-align: center; margin-top: 3rem;">
  <a href="/" style="display: inline-block; padding: 0.75rem 2rem; background: #2d3748; color: white; border-radius: 8px; text-decoration: none;">
    返回首页
  </a>
</div>

<style>
/* 分页控件 */
.pagination-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 3rem 0;
}

.page-btn {
  display: inline-block;
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

input[type="radio"]:checked + .page-btn {
  background: #2d3748;
  color: white;
  border-color: #2d3748;
}

/* 页面切换 */
.page {
  display: block;
}

.page[hidden] {
  display: none;
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
  .doc-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .doc-grid { grid-template-columns: 1fr; }
}
</style>

<script>
// 极简分页 - 只有一行
document.querySelectorAll('input[name="page"]').forEach(radio => {
  radio.onchange = e => {
    document.querySelectorAll('.page').forEach(p => p.hidden = true);
    document.getElementById('page-' + e.target.value).hidden = false;
  };
});
</script>
