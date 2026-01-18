---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 分页导航 -->
<div className="pagination">
  <button type="button" className="page-btn page-prev" onClick="goToPrevPage()">◀</button>
  <span className="page-info" id="page-info">1/3</span>
  <button type="button" className="page-btn page-next" onClick="goToNextPage()">▶</button>
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
    <!-- 其他文档卡片保持不变 -->
  </div>
</div>

<!-- 第2页 -->
<div className="page-content page-2">
  <div className="doc-grid">
    <a href="/unconscious/doc16" className="doc-card">
      <h3>文档 16</h3>
      <p>第2页的第一个文档</p>
    </a>
    <!-- 其他文档卡片保持不变 -->
  </div>
</div>

<!-- 第3页 -->
<div className="page-content page-3">
  <div className="doc-grid">
    <a href="/unconscious/doc31" className="doc-card">
      <h3>文档 31</h3>
      <p>第3页的第一个文档</p>
    </a>
    <!-- 其他文档卡片保持不变 -->
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
  align-items: center;
  gap: 15px;
  margin: 2rem 0 3rem 0;
  flex-wrap: wrap;
}

.page-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  text-decoration: none;
  color: #495057;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;
  font-weight: bold;
}

.page-btn:hover {
  background: #e9ecef;
  border-color: #adb5bd;
}

.page-info {
  font-size: 1rem;
  color: #495057;
  font-weight: 500;
  padding: 0 10px;
}

/* 翻页按钮状态 */
.page-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f8f9fa;
}

.page-btn.disabled:hover {
  background: #f8f9fa;
  border-color: #dee2e6;
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

/* 页面内容显示控制 */
.page-content {
  display: none;
}

/* 默认显示第一页 */
.page-1 {
  display: block;
}

/* 使用 :checked 选择器控制页面显示 */
#page1-radio:checked ~ .page-1,
#page2-radio:checked ~ .page-2,
#page3-radio:checked ~ .page-3 {
  display: block;
}

/* 当一个页面显示时，隐藏其他页面 */
#page1-radio:checked ~ .page-2,
#page1-radio:checked ~ .page-3,
#page2-radio:checked ~ .page-1,
#page2-radio:checked ~ .page-3,
#page3-radio:checked ~ .page-1,
#page3-radio:checked ~ .page-2 {
  display: none;
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
    gap: 10px;
  }
  
  .page-btn {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
}
`}</style>

<script>{`
// 当前页面状态
let currentPage = 1;
const totalPages = 3;

// 更新页面显示
function updatePageDisplay() {
  // 更新单选框选中状态
  document.getElementById('page' + currentPage + '-radio').checked = true;
  
  // 更新页面信息
  document.getElementById('page-info').textContent = currentPage + '/' + totalPages;
  
  // 更新翻页按钮状态
  const prevBtn = document.querySelector('.page-prev');
  const nextBtn = document.querySelector('.page-next');
  
  if (currentPage === 1) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }
  
  if (currentPage === totalPages) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
  
  console.log('当前页面:', currentPage);
}

// 上一页
function goToPrevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePageDisplay();
  }
}

// 下一页
function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updatePageDisplay();
  }
}

// 初始加载
document.addEventListener('DOMContentLoaded', function() {
  updatePageDisplay();
  
  // 监听单选框变化（直接点击页面时更新状态）
  const radios = document.querySelectorAll('input[type="radio"][name="page"]');
  radios.forEach(function(radio, index) {
    radio.addEventListener('change', function() {
      // 从radio的id中提取页码
      const pageNum = parseInt(this.id.replace('page', '').replace('-radio', ''));
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        currentPage = pageNum;
        updatePageDisplay();
      }
    });
  });
  
  // 添加直接跳转到指定页面的功能（可选）
  // 比如可以通过其他方式跳转页面
});
`}</script>
