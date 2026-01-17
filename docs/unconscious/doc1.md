---
title: 文档标题
description: 文档简短描述
---

<!-- 顶部导航：上一篇 -->
<div class="doc-nav prev-nav">
  <a href="/unconscious/上一篇文档" class="nav-link prev">
    <span class="nav-arrow">←</span>
    <span class="nav-text">上一篇：上一篇标题</span>
  </a>
</div>

# 文档标题

这里是文档的主要内容区域。

## 章节一
详细内容...

## 章节二
更多内容...

## 总结
文档总结内容。

<!-- 底部导航：下一篇 -->
<div class="doc-nav next-nav">
  <a href="/unconscious/下一篇文档" class="nav-link next">
    <span class="nav-text">下一篇：下一篇标题</span>
    <span class="nav-arrow">→</span>
  </a>
</div>

<!-- 返回主页链接 -->
<div class="back-home">
  <a href="/unconscious" class="home-link">
    返回无意识文档库
  </a>
</div>

<style>
/* 导航容器 */
.doc-nav {
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.next-nav {
  border-bottom: none;
  border-top: 1px solid #e2e8f0;
  margin-top: 3rem;
}

/* 导航链接 */
.nav-link {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  text-decoration: none;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background: #edf2f7;
  border-color: #cbd5e0;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* 上一篇样式 */
.prev {
  padding-left: 2.5rem;
  position: relative;
}

.prev .nav-arrow {
  position: absolute;
  left: 1rem;
  font-weight: bold;
}

/* 下一篇样式 */
.next {
  padding-right: 2.5rem;
  position: relative;
  float: right;
}

.next .nav-arrow {
  position: absolute;
  right: 1rem;
  font-weight: bold;
}

/* 返回主页 */
.back-home {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.home-link {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #2d3748;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  border: 1px solid #4a5568;
  transition: all 0.2s ease;
  font-weight: 500;
}

.home-link:hover {
  background: #4a5568;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(45, 55, 72, 0.2);
}

/* 无上一篇/下一篇时的占位 */
.no-nav {
  color: #a0aec0;
  font-style: italic;
  padding: 0.75rem 1.5rem;
}

/* 内容样式 */
h1 {
  color: #2d3748;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

h2 {
  color: #4a5568;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #2d3748;
}

ul, ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

code {
  background: #f7fafc;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
  color: #e53e3e;
}

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1rem 0;
}

blockquote {
  border-left: 4px solid #cbd5e0;
  padding-left: 1rem;
  margin-left: 0;
  color: #4a5568;
  font-style: italic;
}
</style>
