---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 分页导航 -->
<div class="pagination" id="pagination">
  <a href="#" data-page="1" class="page-btn active">第 1 页</a>
  <a href="#" data-page="2" class="page-btn">第 2 页</a>
  <a href="#" data-page="3" class="page-btn">第 3 页</a>
</div>

<!-- 第1页 -->
<div class="page-content" id="page-1">
  <div class="doc-grid">
    <a href="/unconscious/doc1" class="doc-card">
      <h3>文档 1</h3>
      <p>文档1的简要描述内容</p>
    </a>
    <!-- 其他卡片... -->
  </div>
</div>

<!-- 第2页 -->
<div class="page-content" id="page-2" style="display: none;">
  <div class="doc-grid">
    <a href="/unconscious/doc16" class="doc-card">
      <h3>文档 16</h3>
      <p>文档16的简要描述内容</p>
    </a>
    <!-- 其他卡片... -->
  </div>
</div>

<!-- 第3页 -->
<div class="page-content" id="page-3" style="display: none;">
  <div class="doc-grid">
    <a href="/unconscious/doc31" class="doc-card">
      <h3>文档 31</h3>
      <p>文档31的简要描述内容</p>
    </a>
    <!-- 其他卡片... -->
  </div>
</div>

<!-- 返回首页 -->
<div class="back-home">
  <a href="/">返回首页</a>
</div>

<style>
/* 样式部分保持不变，Docusaurus 能正确处理 CSS */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 2rem 0 3rem 0;
  flex-wrap: wrap;
}
.page-btn {
  display: inline-block;
  padding: 8px 16px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  text-decoration: none;
  color: #495057;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  cursor: pointer;
}
.page-btn:hover { background: #e9ecef; border-color: #adb5bd; }
.page-btn.active { 
  background: #2d3748; 
  color: white; 
  border-color: #2d3748; 
}

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
.back-home {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}
.back-home a {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #2d3748;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #4a5568;
  transition: all 0.2s ease;
}
.back-home a:hover {
  background: #4a5568;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(45, 55, 72, 0.2);
}

/* 响应式 */
@media (max-width: 992px) {
  .doc-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
}
@media (max-width: 768px) {
  .doc-grid { grid-template-columns: 1fr; gap: 18px; }
  .pagination { gap: 8px; }
  .page-btn { padding: 6px 12px; font-size: 0.9rem; }
}
</style>

<!-- 关键修复：将 Script 包裹在 div 中 -->
<div dangerouslySetInnerHTML={{__html: `
<script>
  function showPage(pageNum) {
    // 1. 移除所有按钮的 active 状态
    document.querySelectorAll('.page-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // 2. 隐藏所有页面内容
    document.querySelectorAll('.page-content').forEach(page => {
      page.style.display = 'none';
    });

    // 3. 显示目标页面
    const targetPage = document.getElementById('page-' + pageNum);
    if (targetPage) {
      targetPage.style.display = 'block';
    }

    // 4. 激活对应按钮
    const activeBtn = document.querySelector(\`.page-btn[data-page="\${pageNum}"]\`);
    if (activeBtn) {
      activeBtn.classList.add('active');
    }
  }

  // 页面加载完成后绑定事件
  document.addEventListener('DOMContentLoaded', function() {
    const pagination = document.getElementById('pagination');
    if (pagination) {
      pagination.addEventListener('click', function(e) {
        if (e.target.classList.contains('page-btn')) {
          e.preventDefault();
          const pageNum = e.target.getAttribute('data-page');
          showPage(pageNum);
        }
      });
    }
  });
</script>
`}} />
