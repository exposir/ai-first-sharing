# 产品文档：AI 优先 ≠ 使用 AI — 前端团队分享网页

**版本：** v1.0  
**日期：** 2026-04-15  
**用途：** 前端团队周会技术分享，单人演讲，时长约 30 分钟（含讨论）

---

## 一、项目概述

### 背景

一名新入职前端工程师，基于阅读的一篇文章（《Why Your "AI-First" Strategy Is Probably Wrong》），结合自己对前端工程与 AI 结合的思考，在组内周会上做一次技术分享。

### 目标

1. 向团队介绍"AI辅助"与"AI优先"的本质区别
2. 引出"驾驭工程"的概念框架
3. 将上述概念映射到前端团队的实际场景
4. 引发团队对"前端 AI 工作流"的讨论

### 形式

**单页长滚动网页，方案B：**  
章节之间用全屏分隔屏过渡（大字占满屏幕），章节内部是完整正文内容。既有翻页式演示的节奏感，又有长文的内容密度。演讲者滚动控制进度，观众可以跟着读。

### 演示环境

- 演讲者笔记本投屏至大屏/TV
- 浏览器全屏模式（F11）
- 鼠标滚轮或触控板控制滚动

---

## 二、视觉设计规范

### 2.1 色彩系统

```
背景色（全局）      #0f0f0f
分隔屏背景          #0f0f0f（与全局一致，用边框或色块区分内容区）
正文文字            #e8e8e8
次级文字            #888888
强调色（主）        #f97316   （橙色，用于关键词、引用块边线、AI优先一侧的顶条）
强调色（辅）        #3b82f6   （蓝色，仅用于"初级工程师"对比卡片顶条，其余场景不使用）
分割线              #2a2a2a
卡片背景            #1a1a1a
卡片边框            #2a2a2a
引用块左边线        #f97316
表格表头背景        #1e1e1e
表格行交替背景      #161616 / #1a1a1a
```

### 2.2 字体系统

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'PingFang SC',
             'Microsoft YaHei', sans-serif;
```

字号规范：

| 用途 | 字号 | 字重 | 行高 |
|------|------|------|------|
| 分隔屏主标题 | 64px | 700 | 1.1 |
| 分隔屏副标题 | 22px | 400 | 1.5 |
| 章节大标题 | 40px | 700 | 1.2 |
| 正文标题（H3） | 24px | 600 | 1.4 |
| 正文 | 18px | 400 | 1.8 |
| 次级说明文字 | 15px | 400 | 1.7 |
| 引用块文字 | 20px | 400 | 1.7 |
| 表格内容 | 16px | 400 | 1.6 |

### 2.3 间距系统

```
基础单位：8px
章节内边距（上下）：  80px
分隔屏高度：          100vh
内容区最大宽度：      760px
内容区水平居中
卡片内边距：          24px
卡片圆角：            12px
章节标题下边距：      40px
段落间距：            24px
```

### 2.4 组件规范

**引用块**
```
左边线：4px solid #f97316
背景：  #1a1a1a
内边距：20px 24px
圆角：  0 8px 8px 0
```

**对比卡片（两栏）**
```
布局：  CSS Grid，两列等宽，gap 24px
卡片背景：#1a1a1a
边框：  1px solid #2a2a2a
圆角：  12px
左列（AI辅助）：顶部色条 #888888
右列（AI优先）：顶部色条 #f97316
```

**小标签/徽章**
```
背景：  rgba(249, 115, 22, 0.15)
文字：  #f97316
边框：  1px solid rgba(249, 115, 22, 0.3)
圆角：  4px
内边距：2px 8px
字号：  13px
```

**分隔线**
```
border: none
border-top: 1px solid #2a2a2a
margin: 48px 0
```

---

## 三、页面结构总览

```
[封面]      封面
[内容区 1]  AI辅助 vs AI优先
[分隔屏 1]  那应该怎么做？
[内容区 2]  什么是驾驭工程
[分隔屏 2]  那我们前端呢？
[内容区 3]  前端团队的三个问题
[分隔屏 3]  展开说说这个困境
[内容区 4]  前端验证为什么比后端难
[分隔屏 4]  一个反直觉
[内容区 5]  谁适应得最快
[分隔屏 5]  聊聊吧
[内容区 6]  开放讨论
[页脚]      来源说明
```

总计：封面 + 5个分隔屏 + 6个内容区 + 1个页脚

---

## 四、各屏内容详细规范

---

### 【封面】

**布局：** 100vh，内容垂直水平居中

**内容：**

```
主标题（64px，700）：
AI 优先
≠
使用 AI

副标题（22px，400，#888888，主标题下方 24px）：
一篇文章引发的前端思考

演讲者署名（15px，#555555，副标题下方 16px）：
[你的名字] · 新成员

底部说明（13px，#444444，距底部 40px）：
前端团队周会 · 2026
```

**注：** 演讲者署名中的 `[你的名字]` 在开发时替换为实际姓名。格式建议：名字在前，用中间点 `·` 隔开"新成员"标签，颜色保持低调的 `#555555`，不抢主标题风头。

**细节：**
- "≠" 符号使用强调色 `#f97316`，其余文字为 `#e8e8e8`
- 主标题三行居中对齐，行间距 1.1
- 右下角或底部中央放一个小的向下箭头（animated，上下轻微浮动），提示可以滚动
- 向下箭头：`↓`，字号 20px，颜色 #444444，animation: bounce 2s infinite

---

### 【内容区 1】AI辅助 vs AI优先

**章节标题（40px）：** 大多数团队停在这里

**正文段落 1：**
> 最近读了一篇文章，是 CREAO 的联合创始人写的——他们是一家 25 人的 AI 智能体平台公司，前 Meta LLaMA 团队成员。文章的核心观点让我想了很久：绝大多数声称"AI优先"的团队，其实只是"AI辅助"。

**引用块（20px，斜体）：**
> "他们只是把 AI 加进了循环，而没有重新设计这个循环。"

**正文段落 2（标题：有什么区别？）：**
> 区别不是工具用了多少，而是流程有没有被重新设计。

**对比卡片（两栏）：**

左列（AI 辅助）灰色顶条：
- 打开 Cursor 生成代码
- 用 ChatGPT 写需求文档
- QA 尝试 AI 生成测试用例
- 工作流程没有变
- 效率提升 10% ~ 20%

右列（AI 优先）橙色顶条：
- AI 是主要构建者
- 流程围绕 AI 重新设计
- 工程师提供方向和判断
- 循环被重构
- 效率提升是乘法级

**正文段落 3：**
> 这两者的差距不是加法，而是乘法。

**引用块：**
> 还有一种常见形式叫做"氛围编程（vibe coding）"：打开 Cursor，不断对话直到代码能跑，提交，周而复始。这充其量只能产出原型。生产系统需要稳定、可靠、安全——你需要一套体系来保证 AI 写出的代码也具备这些属性。你真正要构建的是这套体系，提示词本身是用完即弃的。

---

### 【分隔屏 1】过渡到驾驭工程

**主标题（64px，700）：**
那应该
怎么做？

**副标题（22px，400，#888888）：**
OpenAI 在 2026 年 2 月给了这件事一个名字

---

### 【内容区 2】什么是驾驭工程

**章节标题（40px）：** 驾驭工程（Harness Engineering）

**正文段落 1：**
> 工程团队的首要工作不再是写代码，而是构建让智能体能够可靠工作的"脚手架"。当出现问题时，解决方案不是"再努力一点"，而是：缺少哪种能力？如何让智能体能够理解和执行？

**正文段落 2（标题：具体包括四件事）：**

**四个卡片（2×2 网格布局）：**

卡片1：🧪 测试基础设施
> 使 AI 生成的代码可验证。如果你不能自动测试智能体写的代码，你就不能信任智能体写的代码。

卡片2：👁 可观测性
> 每个服务输出结构化的、可查询的信号。如果 AI 无法读取日志，它就无法诊断问题。

卡片3：🚀 确定性部署流水线
> CI/CD 门禁不是为了减慢速度，而是为了让 AI 快速工作时保证安全。流水线可预测，智能体才能推理失败原因。

卡片4：🔀 功能开关
> 每个功能在开关后面发布，随时可回滚。风险可控，才敢让 AI 快速迭代。

**正文段落 3：**
> 驾驭工程是基础设施工作，和应用代码无关。但它决定了应用代码是否可靠。

**引用块：**
> "CREAO 用自己的智能体重建了运行智能体的平台。如果这个产品能够构建自身，那它就是可行的。"

---

### 【分隔屏 2】过渡到前端映射

**主标题（64px，700）：**
那我们
前端呢？

**副标题（22px，400，#888888）：**
把这个框架映射到我们的日常工作

---

### 【内容区 3】前端团队的三个问题

**章节标题（40px）：** 三个值得想想的问题

---

**问题一（H3，24px）：我们的项目对 AI 友好吗？**

> 文章有一个关键决策：把分散在多个仓库的代码统一成 Monorepo，原因只有一个——"让 AI 能看到全貌"。
>
> 分散的代码库对智能体来说是不可见的，统一的代码库才是可读的。

> 映射到我们前端：组件命名是否一致、可预测？样式方案是散落的 CSS 文件，还是有体系的 Design Token 或 Tailwind 规范？目录结构能不能让 AI 不看文档就理解模块边界？
>
> 这些本来就是前端工程化的好实践，现在多了一个新的理由：**让 AI 能更好地帮你干活。**

---

**问题二（H3，24px）：我们的验证能跟上 AI 的产出速度吗？**

> 文章里有一句话说得很直接：构建时间两小时，测试时间三天——这不是在解决问题，只是把瓶颈往下游挪了三米。
>
> 验证必须与实现同速，否则 AI 带来的速度优势会全部堆积在 QA 环节消失掉。

> 但这里有一个前端特有的困境：后端的验证是确定性的，测试 pass 就是 pass。前端不一样——"这个页面对不对"很大程度上依赖人眼，而不是自动化断言。这是目前还没有好答案的问题，我们后面会单独展开。

---

**问题三（H3，24px）：我们的价值往哪里迁移？**

> 文章的判断是：快速写代码的能力每个月都在贬值，评估、批判和引导 AI 的能力则在升值。

以下用三个卡片并排展示（1×3，可在移动端堆叠）：

卡片1 — **交互判断力**
> 这个交互方案好不好，用户会不会迷失——AI 可以生成代码，但它没有用户感知。

卡片2 — **性能系统思维**
> AI 能写代码，但不会主动做架构级的性能决策——首屏优化、渲染策略、资源加载这些属于系统判断。

卡片3 — **产品品味**
> 原文的说法是 taste matters。知道什么是"好的"，比能把它实现出来更稀缺。

---

### 【分隔屏 3】前端验证困境

**主标题（64px，700）：**
展开说说
这个困境

**副标题（22px，400，#888888）：**
为什么前端验证比后端难得多

---

### 【内容区 4】前端验证为什么比后端难

**章节标题（40px）：** 后端简单，前端才难

**正文段落 1：**
> 听起来反直觉，但仔细想确实如此。

> 后端的验证是确定性的：一个接口返回什么、状态码对不对、数据库写入是否正确——全部可以用单元测试精确断言。测试 pass 就是 pass，没有歧义。AI 写完代码，跑一遍测试就知道对不对。

> 前端不是这样。"这个页面对不对"很大程度上依赖人眼，而不是自动化断言。

**对比表格：**

| | 生成代码难度 | 自动验证难度 |
|--|--|--|
| **后端** | 较高（需理解业务逻辑、数据模型） | 低——测试用例明确，结果确定性高 |
| **前端** | 较低（UI组件、页面结构相对直观） | 高——视觉和交互正确性难以形式化 |

**小结（引用块样式，但不用斜体）：**
> 后端的难点在"写"，前端的难点在"验"。当大模型能力越来越强，"写"的差距会被抹平。但"验"的差距会被放大。

**正文段落 2（标题：前端"玄学"的本质）：**

> 是视觉正确性和交互正确性无法被简单形式化。

以下用列表形式，分三类：

**视觉层面**
- 间距差了 4px，功能上没问题，但视觉上就是不对
- 同一段 CSS 在不同浏览器、不同屏幕尺寸下表现不同
- 动画的缓动曲线是否"舒服"，无法写成测试用例
- 响应式布局在某个中间断点"塌了"，不试那个宽度根本不知道

**交互层面**
- 滚动吸附是否自然、拖拽动画是否跟手
- 焦点管理、键盘导航、屏幕阅读器体验
- 这些东西连手动测试都容易漏，更别说自动化

**状态组合层面**
- 一个表单组件：空状态、填充、错误、禁用、加载、hover、focus……
- AI 能生成"正常路径"，但边缘状态的视觉表现很难全覆盖

**正文段落 3（标题：现有工具能解决吗？）：**

以下用 2×2 网格排列四个卡片（每行两个，共两行）：

卡片1 — **快照测试**
能防回归，但不能判断"好不好看"。

卡片2 — **视觉回归测试（Chromatic / Percy）**
能捕捉像素级变化，但基线要人工确认，对布局变动误报率高。

卡片3 — **E2E 测试（Playwright / Cypress）**
能验证交互流程，但维护成本高，覆盖不了"感受"。

卡片4 — **目前的结论**（强调色背景 `rgba(249,115,22,0.08)`，边框 `#f97316`）
没有哪种方案能达到后端单元测试那种自信程度。前端在 AI 时代的驾驭工程，难度本质上更高。

**引用块（章节结尾）：**
> 这不是"技术不够"的问题，而是验证标准本身就是模糊的、主观的、依赖上下文的。

---

### 【分隔屏 4】反直觉

**主标题（64px，700）：**
一个
反直觉

**副标题（22px，400，#888888）：**
谁适应 AI 工作方式最快？

---

### 【内容区 5】谁适应得最快

**章节标题（40px）：** 初级工程师，比高级工程师更快

**正文段落 1：**
> 这是文章作者观察到的一个规律，我觉得值得拿出来想想。

**正文段落 2（先肯定经验的价值）：**
> 先说一件不会变的事：架构判断、系统性思维、对"好的"的识别力——这些依然是有经验的工程师的优势，而且在 AI 时代会越来越稀缺，因为 AI 最难替代的恰恰是这些判断力。

> 但在"适应新工作方式"这件事上，有一个反直觉的现象：

**两栏对比卡片：**

左列 — **初级工程师**（蓝色顶条）
- 没有历史包袱和固有习惯
- 工具放大了他们的能力
- 感受到的是赋能

右列 — **高级工程师**（灰色顶条）
- 多年建立的工作方式需要重新适应
- "快速写出好代码"的优势被压缩
- 心理调整的成本更高

**正文段落 3：**
> 这不是说经验贬值了。而是说：如果一个人的自我认知建立在"我能快速写出别人写不出的代码"上，这个基础正在动摇——需要迁移到新的优势上去。

**引用块：**
> "批判 AI 的能力将比生产代码的能力更有价值。"  
> — 文章作者（物理学博士）

---

### 【分隔屏 5】讨论

**主标题（64px，700）：**
聊聊吧

**副标题（22px，400，#888888）：**
没有标准答案

---

### 【内容区 6】开放讨论

**章节标题（40px）：** 两个问题

**问题一（大字突出，28px，#f97316）：**
> 我们现在用 AI 做前端，最顺的是什么？最卡的是什么？

**说明文字（次级，15px，#888888）：**
每个人都有自己的经验，不用等别人说。

---

*（分隔线）*

---

**问题二（大字突出，28px，#f97316）：**
> 如果要让 AI 更好地帮我们干活，我们最需要改变的一件事是什么？

**说明文字（次级，15px，#888888）：**
可以是工具、流程、代码结构，或者别的什么。

---

*（大量留白，底部距页脚 120px）*

---

### 【页脚】

```
内容来源：《Why Your "AI-First" Strategy Is Probably Wrong》
作者：CREAO 联合创始人 · 前 Meta GenAI 团队（LLaMA 项目）
原文链接：[可选，如有公开链接]

本页由 AI 辅助生成 · 前端团队周会 · 2026
```

字号：13px，颜色：#444444，居中，内边距上下 48px

---

## 五、交互与动效规范

### 5.1 滚动行为

- 原生浏览器滚动，不做自定义滚动劫持
- 分隔屏不需要 snap，保持自然滚动节奏
- 演讲者用鼠标滚轮或触控板控制，无需特殊操作

### 5.2 入场动画

每个内容区的元素在进入视口时触发淡入+上移动画：

```css
/* 初始状态 */
opacity: 0;
transform: translateY(24px);

/* 进入视口后 */
opacity: 1;
transform: translateY(0);
transition: opacity 0.5s ease, transform 0.5s ease;
```

- 使用 `IntersectionObserver` 实现，threshold: 0.15
- 章节内的子元素依次延迟入场，间隔 80ms
- 分隔屏的文字不做延迟，直接显示

### 5.3 封面箭头动画

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
animation: bounce 2s ease-in-out infinite;
```

### 5.4 对比卡片 Hover

```css
.card {
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  border-color: #3a3a3a;
  transform: translateY(-2px);
}
```

### 5.5 不需要的动效

- 不做页面加载动画
- 不做视差滚动
- 不做鼠标跟随效果
- 分隔屏背景不做渐变动画

---

## 六、响应式规范

演示场景主要是桌面端投屏，但需要保证基本可用：

| 断点 | 内容变化 |
|------|---------|
| ≥ 1024px | 标准样式，两栏卡片正常显示 |
| 768px ~ 1023px | 内容区左右边距收窄，两栏卡片改为单栏堆叠 |
| < 768px | 分隔屏字号降至 40px，正文降至 16px，卡片全部单栏 |

---

## 七、技术实现建议

### 7.1 技术选型

**推荐：纯 HTML + CSS + 少量 Vanilla JS**

- 无需构建工具，直接用浏览器打开 `index.html` 即可运行
- 外部依赖只有一个：Google Fonts 的 Inter 字体（可选，有 fallback）
- 总体积预计 < 50KB（不含字体），无需 CDN，本地即可演示
- 不引入任何框架（React/Vue）或第三方 UI 库，避免过度工程化

**不推荐使用 Reveal.js 的原因：**
本项目是长滚动布局，Reveal.js 的翻页模式和文档的长滚动意图冲突，强行适配反而增加复杂度。

### 7.2 文件结构

```
presentation/
├── index.html       （页面结构，包含所有内容）
├── styles.css       （全局样式、组件样式、响应式）
├── main.js          （IntersectionObserver 入场动画，约 20 行）
└── README.md        （可选：记录本地启动方式）
```

**注：** 字体通过 `<link>` 引入 Google Fonts，不需要本地字体文件。如演示环境无网络，将 Inter 字体文件下载到本地并修改 `@font-face` 引用。

### 7.3 HTML 页面骨架

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI 优先 ≠ 使用 AI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- 分隔屏 0：封面 -->
  <section class="divider-screen" id="cover">...</section>

  <!-- 内容区 1：AI辅助 vs AI优先 -->
  <section class="content-section" id="section-1">...</section>

  <!-- 分隔屏 1 -->
  <section class="divider-screen" id="divider-1">...</section>

  <!-- 内容区 2：驾驭工程 -->
  <section class="content-section" id="section-2">...</section>

  <!-- ...以此类推，共 6 个分隔屏 + 6 个内容区... -->

  <footer>...</footer>

  <script src="main.js"></script>
</body>
</html>
```

### 7.4 CSS 全局基础

```css
/* ===== Reset & Base ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0f0f0f;
  color: #e8e8e8;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont,
               'PingFang SC', 'Microsoft YaHei', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
}

/* ===== 分隔屏 ===== */
.divider-screen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 24px;
}

.divider-screen .main-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  color: #e8e8e8;
}

.divider-screen .main-title .accent {
  color: #f97316;
}

.divider-screen .sub-title {
  font-size: 22px;
  font-weight: 400;
  color: #888888;
  margin-top: 24px;
  line-height: 1.5;
}

/* ===== 内容区 ===== */
.content-section {
  max-width: 760px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 40px;
}

/* ===== 段落 ===== */
p {
  margin-bottom: 24px;
  color: #e8e8e8;
}

/* ===== 引用块 ===== */
blockquote {
  border-left: 4px solid #f97316;
  background: #1a1a1a;
  padding: 20px 24px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
  font-size: 20px;
  line-height: 1.7;
  color: #e8e8e8;
}

/* ===== 分隔线 ===== */
hr {
  border: none;
  border-top: 1px solid #2a2a2a;
  margin: 48px 0;
}

/* ===== 强调文字 ===== */
strong {
  color: #f97316;
  font-weight: 600;
}
```

### 7.5 卡片组件 CSS

```css
/* ===== 通用卡片 ===== */
.card {
  background: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  border-color: #3a3a3a;
  transform: translateY(-2px);
}

/* ===== 两栏对比卡片 ===== */
.card-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 32px 0;
}

.card-grid-2 .card-header {
  height: 4px;
  border-radius: 2px 2px 0 0;
  margin: -24px -24px 20px -24px;
  border-radius: 12px 12px 0 0;
}

.card-grid-2 .card--left .card-header  { background: #888888; }
.card-grid-2 .card--right .card-header { background: #f97316; }

/* 初级 vs 高级工程师卡片：左蓝右灰 */
.card-grid-2 .card--junior .card-header { background: #3b82f6; }
.card-grid-2 .card--senior .card-header { background: #888888; }

/* ===== 2×2 网格卡片 ===== */
.card-grid-4 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 32px 0;
}

/* 第四个卡片（结论）高亮 */
.card-grid-4 .card--conclusion {
  background: rgba(249, 115, 22, 0.08);
  border-color: #f97316;
}

/* ===== 三列卡片 ===== */
.card-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 32px 0;
}

/* ===== 卡片标题 ===== */
.card-title {
  font-size: 16px;
  font-weight: 600;
  color: #e8e8e8;
  margin-bottom: 10px;
}

.card-body {
  font-size: 15px;
  color: #888888;
  line-height: 1.7;
}
```

### 7.6 表格 CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin: 32px 0;
  font-size: 16px;
}

thead tr {
  background: #1e1e1e;
}

th {
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
  color: #e8e8e8;
  border-bottom: 1px solid #2a2a2a;
}

tbody tr:nth-child(odd)  { background: #161616; }
tbody tr:nth-child(even) { background: #1a1a1a; }

td {
  padding: 14px 16px;
  color: #888888;
  border-bottom: 1px solid #2a2a2a;
}

td strong {
  color: #e8e8e8;
}
```

### 7.7 封面箭头动画

```css
.scroll-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: #444444;
  animation: bounce 2s ease-in-out infinite;
  user-select: none;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}
```

### 7.8 入场动画

```css
/* 初始隐藏状态 */
.animate-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

/* 进入视口后 */
.animate-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// main.js（全部代码）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // 每个元素只触发一次
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-in').forEach(el => {
  observer.observe(el);
});
```

**子元素延迟入场方式（在 HTML 中直接写 inline style）：**

```html
<h2 class="animate-in section-title" style="transition-delay: 0ms">章节标题</h2>
<p  class="animate-in" style="transition-delay: 80ms">第一段落</p>
<p  class="animate-in" style="transition-delay: 160ms">第二段落</p>
<div class="animate-in card-grid-2" style="transition-delay: 240ms">...</div>
```

### 7.9 响应式媒体查询

```css
/* 平板 */
@media (max-width: 1023px) {
  .content-section {
    padding: 60px 32px;
  }
  .card-grid-2,
  .card-grid-3 {
    grid-template-columns: 1fr;
  }
}

/* 手机 */
@media (max-width: 767px) {
  .divider-screen .main-title {
    font-size: 40px;
  }
  .section-title {
    font-size: 28px;
  }
  body {
    font-size: 16px;
  }
  .card-grid-2,
  .card-grid-3,
  .card-grid-4 {
    grid-template-columns: 1fr;
  }
  blockquote {
    font-size: 17px;
  }
}
```

### 7.10 本地启动方式

直接双击 `index.html` 用浏览器打开即可。无需任何服务器。

演示时建议：
- Chrome 浏览器，按 `F11` 进入全屏
- 关闭所有通知和弹窗
- 调整系统缩放比例，确保投屏后文字大小合适（建议先在大屏上预览一遍）
- 如需分享链接，可将整个文件夹上传至 GitHub Pages 或 Vercel，零配置部署

---

## 八、内容审查清单

开发完成后，演讲者自检：

- [ ] 分隔屏文字在投屏时从后排也能清晰看到
- [ ] 所有入场动画不超过 0.5s，不影响演讲节奏
- [ ] 对比卡片两栏内容高度对齐（或允许自然高度差）
- [ ] 引用块样式统一，与正文视觉区分明显
- [ ] 讨论页留白足够大，不让观众觉得"还有内容"
- [ ] 页脚来源信息准确
- [ ] 在 Chrome 全屏模式下完整走一遍，检查滚动节奏

---

## 九、演讲节奏参考

| 屏幕 | 建议停留时长 | 备注 |
|------|------------|------|
| 封面 | 30秒 | 等大家坐定，简单开场一句话 |
| 内容区1（AI辅助vs优先） | 3分钟 | 引导大家看两栏对比 |
| 分隔屏1 | 10秒 | 过渡 |
| 内容区2（驾驭工程） | 3分钟 | 四个卡片逐一过 |
| 分隔屏2 | 10秒 | |
| 内容区3（前端三问） | 4分钟 | 问题二末尾自然引出验证困境 |
| 分隔屏3 | 10秒 | |
| 内容区4（验证困境） | 4分钟 | 这是自己的思考，可以多聊 |
| 分隔屏4 | 10秒 | |
| 内容区5（反直觉） | 2分钟 | |
| 分隔屏5 + 内容区6 | 10~15分钟 | 讨论为主，不要赶时间 |

**总计：约 28~35 分钟**（含讨论）

---

*文档结束*
