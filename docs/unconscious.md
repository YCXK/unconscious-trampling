---
title: 无意识文档库
---

# 📚 无意识文档库

<!-- 分页导航 -->
<div className="pagination">
  <button type="button" className="page-btn page-prev" id="prev-btn">◀</button>
  <span className="page-info" id="page-info">1/3</span>
  <button type="button" className="page-btn page-next" id="next-btn">▶</button>
</div>

<!-- 隐藏的单选框，用于控制页面显示 -->
<input type="radio" id="page1-radio" name="page" defaultChecked style={{display: 'none'}} />
<input type="radio" id="page2-radio" name="page" style={{display: 'none'}} />
<input type="radio" id="page3-radio" name="page" style={{display: 'none'}} />

<!-- 页面内容保持不变 -->
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
  border: none;
  font-family: inherit;
}

.page-btn:hover:not(.disabled) {
  background: #e9ecef;
  border-color: #adb5bd;
}

.page-info {
  font-size: 1rem;
  color: #495057;
  font-weight: 500;
  padding: 0 10px;
  min-width: 40px;
  text-align: center;
}

/* 翻页按钮状态 */
.page-btn.disabled {
  opacity: 0.3;
  cursor: not-allowed;
  background: #f8f9fa;
}

.page-btn.disabled:hover {
  background: #f8f9fa;
}

/* 文档网格等样式保持不变 */

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

/* 其他样式保持不变 */
`}</style>

<script>{`
// 当前页面状态
let currentPage = 1;
const totalPages = 3;

// 切换页面函数
function switchToPage(pageNum) {
  if (pageNum < 1 || pageNum > totalPages) return;
  
  currentPage = pageNum;
  
  // 选中对应的单选框
  const radio = document.getElementById('page' + pageNum + '-radio');
  if (radio) {
    radio.checked = true;
  }
  
  // 更新页面信息
  updatePageInfo();
  
  // 更新按钮状态
  updateButtonStates();
  
  console.log('切换到页面:', pageNum);
}

// 更新页面信息
function updatePageInfo() {
  const pageInfo = document.getElementById('page-info');
  if (pageInfo) {
    pageInfo.textContent = currentPage + '/' + totalPages;
  }
}

// 更新按钮状态
function updateButtonStates() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (prevBtn) {
    if (currentPage === 1) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }
  }
  
  if (nextBtn) {
    if (currentPage === totalPages) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }
}

// 上一页
function goToPrevPage() {
  if (currentPage > 1) {
    switchToPage(currentPage - 1);
  }
}

// 下一页
function goToNextPage() {
  if (currentPage < totalPages) {
    switchToPage(currentPage + 1);
  }
}

// 监听单选框变化（用于直接操作单选框的情况）
function setupRadioListeners() {
  const radios = document.querySelectorAll('input[type="radio"][name="page"]');
  radios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      const pageNum = parseInt(this.id.replace('page', '').replace('-radio', ''));
      if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
        currentPage = pageNum;
        updatePageInfo();
        updateButtonStates();
      }
    });
  });
}

// 初始加载
document.addEventListener('DOMContentLoaded', function() {
  // 设置按钮点击事件
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', goToPrevPage);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', goToNextPage);
  }
  
  // 设置单选框监听
  setupRadioListeners();
  
  // 初始状态
  updatePageInfo();
  updateButtonStates();
});
`}</script>
