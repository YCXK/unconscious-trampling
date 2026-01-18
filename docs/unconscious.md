---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 分页导航 -->
<div className="pagination">
  <label htmlFor="page1-radio" className="page-btn active">第 1 页</label>
  <label htmlFor="page2-radio" className="page-btn">第 2 页</label>
  <label htmlFor="page3-radio" className="page-btn">第 3 页</label>
</div>

<!-- 隐藏的单选框，用于控制页面显示 -->
<input type="radio" id="page1-radio" name="page" defaultChecked style={{display: 'none'}} />
<input type="radio" id="page2-radio" name="page" style={{display: 'none'}} />
<input type="radio" id="page3-radio" name="page" style={{display: 'none'}} />

<!-- 第1页 -->
<div className="page-content page-1">
  <div className="doc-grid">
    <a href="/unconscious/doc1" className="doc-card">
      <h3>文档 1</h3>
      <p>第1页的第一个文档</p>
    </a>
    <a href="/unconscious/doc2" className="doc-card">
      <h3>文档 2</h3>
      <p>第1页的第二个文档</p>
    </a>
    <a href="/unconscious/doc3" className="doc-card">
      <h3>文档 3</h3>
      <p>第1页的第三个文档</p>
    </a>
    <div className="doc-card placeholder">
      <h3>文档 4-15</h3>
      <p>第1页的其他文档...</p>
    </div>
  </div>
</div>

<!-- 第2页 -->
<div className="page-content page-2">
  <div className="doc-grid">
    <a href="/unconscious/doc16" className="doc-card">
      <h3>文档 16</h3>
      <p>第2页的第一个文档</p>
    </a>
    <a href="/unconscious/doc17" className="doc-card">
      <h3>文档 17</h3>
      <p>第2页的第二个文档</p>
    </a>
    <a href="/unconscious/doc18" className="doc-card">
      <h3>文档 18</h3>
      <p>第2页的第三个文档</p>
    </a>
    <div className="doc-card placeholder">
      <h3>文档 19-30</h3>
      <p>第2页的其他文档...</p>
    </div>
  </div>
</div>

<!-- 第3页 -->
<div className="page-content page-3">
  <div className="doc-grid">
    <a href="/unconscious/doc31" className="doc-card">
      <h3>文档 31</h3>
      <p>第3页的第一个文档</p>
    </a>
    <a href="/unconscious/doc32" className="doc-card">
      <h3>文档 32</h3>
      <p>第3页的第二个文档</p>
    </a>
    <a href="/unconscious/doc33" className="doc-card">
      <h3>文档 33</h3>
      <p>第3页的第三个文档</p>
    </a>
    <div className="doc-card placeholder">
      <h3>文档 34-45</h3>
      <p>第3页的其他文档...</p>
    </div>
  </div>
</div>

<!-- 返回首页 -->
<div className="back-home">
  <a href="/">返回首页</a>
</div>

<style>{`
/* 分页样式 */
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

.page-btn:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

/* 文档网格 */
.doc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 3rem;
}

/* 文档卡片 */
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

.doc-card.placeholder {
  background: #f8f9fa;
  border-style: dashed;
  border-color: #ced4da;
  opacity: 0.8;
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

/* 页面内容显示控制 - 使用CSS :checked 选择器 */
.page-content {
  display: none;
}

/* 默认显示第一页 */
#page1-radio:checked ~ .page-1 {
  display: block;
}

#page2-radio:checked ~ .page-2 {
  display: block;
}

#page3-radio:checked ~ .page-3 {
  display: block;
}

/* 按钮激活状态 */
#page1-radio:checked ~ .pagination label[for="page1-radio"],
#page2-radio:checked ~ .pagination label[for="page2-radio"],
#page3-radio:checked ~ .pagination label[for="page3-radio"] {
  background: #2d3748;
  color: white;
  border-color: #2d3748;
}

/* 返回首页 */
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
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(45, 55, 72, 0.2);
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
  
  .pagination {
    gap: 8px;
  }
  
  .page-btn {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
`}</style>
