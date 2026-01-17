---
title: 文档标题
description: 文档简短描述
---

<!-- 顶部导航：上一篇 -->
<div class="doc-nav top-nav">
  <a href="/unconscious/上一篇文档名称" class="nav-link prev-link">
    ← 上一篇：上一篇文档标题
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
<div class="doc-nav bottom-nav">
  <a href="/unconscious/下一篇文档名称" class="nav-link next-link">
    下一篇：下一篇文档标题 →
  </a>
</div>

<!-- 返回主页链接 -->
<div class="back-home">
  <a href="/unconscious">返回无意识文档库</a>
</div>

<style>
/* 导航样式 */
.doc-nav {
  margin: 2rem 0;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.bottom-nav {
  border-bottom: none;
  border-top: 1px solid #e2e8f0;
  margin-top: 3rem;
}

.nav-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  text-decoration: none;
  color: #4a5568;
  border: 1px solid #e2e8f0;
  transition: all 0.2s ease;
  font-size: 0.95rem;
}

.nav-link:hover {
  background: #edf2f7;
  border-color: #cbd5e0;
  text-decoration: none;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.prev-link {
  padding-left: 2.5rem;
  position: relative;
}

.prev-link::before {
  content: "←";
  position: absolute;
  left: 1rem;
}

.next-link {
  padding-right: 2.5rem;
  position: relative;
  float: right;
}

.next-link::after {
  content: "→";
  position: absolute;
  right: 1rem;
}

/* 返回主页样式 */
.back-home {
  text-align: center;
  margin-top: 2rem;
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
</style>
