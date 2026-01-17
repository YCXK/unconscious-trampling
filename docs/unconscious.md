---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 分页导航 -->
<div className="pagination">
  <a href="#page1" className="page-btn active">第 1 页</a>
  <a href="#page2" className="page-btn">第 2 页</a>
  <a href="#page3" className="page-btn">第 3 页</a>
</div>

<!-- 第1页 -->
<div id="page1" className="page-content">
  <div className="doc-grid">
    <!-- 第1页的15个文档卡片 -->
  </div>
</div>

<!-- 第2页 -->
<div id="page2" className="page-content" style={{display: 'none'}}>
  <div className="doc-grid">
    <!-- 第2页的15个文档卡片 -->
  </div>
</div>

<!-- 第3页 -->
<div id="page3" className="page-content" style={{display: 'none'}}>
  <div className="doc-grid">
    <!-- 第3页的15个文档卡片 -->
  </div>
</div>

<!-- 返回首页 -->
<div className="back-home">
  <a href="/">返回首页</a>
</div>

<style>{`
/* 所有CSS样式... */
`}</style>

<script>{`
// 页面切换功能
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有分页按钮
  const pageButtons = document.querySelectorAll('.page-btn');
  
  // 为每个按钮添加点击事件
  pageButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      // 移除所有按钮的active类
      pageButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      // 为当前按钮添加active类
      this.classList.add('active');
      
      // 获取目标页面ID
      const targetId = this.getAttribute('href').substring(1);
      
      // 隐藏所有页面
      const pageContents = document.querySelectorAll('.page-content');
      pageContents.forEach(function(page) {
        page.style.display = 'none';
      });
      
      // 显示目标页面
      const targetPage = document.getElementById(targetId);
      if (targetPage) {
        targetPage.style.display = 'block';
      }
    });
  });
});
`}</script>
