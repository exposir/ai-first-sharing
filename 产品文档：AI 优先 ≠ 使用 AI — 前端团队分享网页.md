# 产品文档：AI 优先 ≠ 使用 AI — 前端团队分享网页

**版本：** v1.1  
**日期：** 2026-04-15  
**状态：** 已上线，本文档反映当前实际页面内容  
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
[内容区 2]  驾驭工程（Harness Engineering）
[分隔屏 2]  那我们前端呢？
[内容区 3]  三个值得想想的问题
[分隔屏 3]  前端验证的两个难题
[内容区 4]  前端验证的两层
[分隔屏 4]  价值迁移
[内容区 5]  什么不会被替代
[分隔屏 5]  想一想
[内容区 6]  三个思考方向
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

底部说明（13px，#444444，距底部 40px）：
前端团队周会 · 2026
```

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
> "他们只是在原有工作流里加了一个 AI 工具，而没有围绕 AI 重新设计整个工作流。"

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
> 驾驭工程是基础设施工作，和应用代码无关，但它决定了应用代码是否可靠。《重构》作者 Martin Fowler 在同一时期也写了一篇文章，核心观点一样：当 AI 成为主要的代码编写者，工程师的工作就变成构建让 AI 可靠工作的基础设施。他把这件事也叫 Harness Engineering。

**H3：这四件事不是各自独立的**

**正文：**
> 组合起来之后，会形成一个每天自动运转的循环。以文章中的团队为例：

**有序列表（三项）：**
- 自动巡检：每天早上，AI 查询所有服务的错误日志，分析错误模式，向团队发送摘要——无需任何人主动触发。
- 自动分类：AI 对生产错误按严重度打分，自动创建工单，每张附带日志样本、受影响范围和建议排查路径。已有工单覆盖相同错误则更新；已关闭的问题重现时自动重新打开。
- 自动收尾：工程师推修复，流水线验证并部署，部署后系统重新检查——如果问题已解决，工单自动关闭。

**引用块：**
> 人在整个循环里只做一件事——决定"这个问题要不要现在修、修到什么程度、会不会影响线上用户"。

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

> 但前端的验证有两个难题。逻辑层——状态流转、接口对接、缓存同步、异步竞态——大型项目里这些组合起来的复杂度不亚于后端，现有的测试方案各有短板，没有银弹。视觉层——"这个页面长得对不对"——连写成测试用例都做不到，很大程度上依赖人眼。两层都缺通用解法，这个问题我们后面展开。

---

**问题三（H3，24px）：我们的价值往哪里迁移？**

> 文章的判断是：快速写代码的能力每个月都在贬值，评估、批判和引导 AI 的能力则在升值。

以下用三个卡片并排展示（1×3，可在移动端堆叠）：

卡片1 — **交互判断力**
> 这个交互方案好不好，用户会不会迷失——AI 可以生成代码，但它没有用户感知。

卡片2 — **性能系统思维**
> AI 能写代码，但不会主动做架构级的性能决策——首屏优化、渲染策略、资源加载这些属于系统判断。

卡片3 — **AI 工程能力**
> 不只是用 AI 写代码，而是有能力设计让 AI 自主运转的系统：拆任务、给上下文、搭工作流、构建自动化流水线。这就是文章开头说的，从 AI 辅助到 AI 优先。

---

### 【分隔屏 3】前端验证的两个难题

**主标题（64px，700）：**
前端验证的
两个难题

**副标题（22px，400，#888888）：**
逻辑和视觉，两层都缺通用解法

---

### 【内容区 4】前端验证的两层

**章节标题（40px）：** 前端验证的两层

**正文段落 1：**
> 前端的验证难题分两层，都没有通用解法。如果有，就不需要人盯着 AI 写代码了。

**对比表格（三行）：**

| | 生成代码难度 | 自动验证难度 |
|--|--|--|
| **后端** | 较高（需理解业务逻辑、数据模型） | 低——测试用例明确，结果确定性高 |
| **前端 · 逻辑层** | 高（状态联动、异步竞态、缓存同步） | 高——能测但测不全，每种方案各有短板 |
| **前端 · 视觉层** | 较低（UI 组件、页面结构相对直观） | 高——视觉和交互正确性难以形式化 |

**H3：具体难在哪？**

**逻辑层面（小标题）**
- 状态在多个组件间共享和联动，一处改动可能引发连锁反应
- 异步请求的竞态条件——用户连续操作，先发的请求后回来，数据覆盖出错
- 乐观更新失败后的回滚——UI 已经变了，服务端拒绝了，怎么退回去
- mock 和真实 API 行为漂移——测试全绿，上线就炸

**视觉层面（小标题）**
- 间距差了 4px，功能上没问题，但视觉上就是不对
- 同一段 CSS 在不同浏览器、不同屏幕尺寸下表现不同
- 动画的缓动曲线是否"舒服"，无法写成测试用例
- 响应式布局在某个中间断点"塌了"，不试那个宽度根本不知道

**交互层面（小标题）**
- 滚动吸附是否自然、拖拽动画是否跟手
- 焦点管理、键盘导航、屏幕阅读器体验
- 这些东西连手动测试都容易漏，更别说自动化

**状态组合层面（小标题）**
- 一个表单组件：空状态、填充、错误、禁用、加载、hover、focus……
- AI 能生成"正常路径"，但边缘状态的视觉表现很难全覆盖

**H3：现有工具能解决吗？**

**逻辑层的测试方案（小标题）**，两栏卡片：

卡片1 — **单元测试**
能覆盖纯函数和独立逻辑，但前端大量逻辑绑在组件生命周期和渲染上下文里，脱离环境就不真实。

卡片2 — **集成测试**
更接近真实场景，但 mock 管理是噩梦——mock 和真实 API 一旦不同步，测试全绿上线就炸。

**视觉层的测试方案（小标题）**，两栏卡片：

卡片1 — **快照测试**
把组件渲染出的 DOM 结构存一份，下次对比有没有变。比的是代码输出不是视觉效果——改了个 class 名就报错，视觉可能没变。

卡片2 — **视觉回归测试（Chromatic / Percy）**
在真实浏览器里截图做像素级对比。比快照更准，但一个像素变了就标出来，不管有没有意义。

**跨两层的方案（小标题）**，两栏卡片（第二个是结论卡片）：

卡片1 — **E2E 测试（Playwright / Cypress）**
从用户视角操作页面，能同时触及逻辑和视觉两层。但粒度粗、速度慢、维护成本高，只能验证最终结果，中间的状态流转和竞态问题看不到。

卡片2 — **结论**（强调色背景 `rgba(249,115,22,0.08)`，边框 `#f97316`）
每种方案只覆盖一部分。两层加起来，没有哪种方案能让人放心说"AI 写的代码没问题"。

**H3：方向正在出现**

**正文段落：**
> 这个问题有人在认真解决。**TestSprite** 是目前比较值得关注的方向：AI 自主生成端到端测试用例，理解组件状态和用户意图（不是像素比对），覆盖视觉回归、响应式断点、无障碍检测，在 CI/CD 中运行并自动修复脆弱选择器，可通过 MCP 集成进 Cursor 工作流。**Chromatic** 和 **Percy** 也在朝 AI 感知差异的方向演进，减少误报、增加语义理解。

**正文段落 2：**
> 但这些工具仍处于早期：解决的是"像素变了"的检测问题，还没有完全解决"这样对不对"的判断问题。**人工审查短期内仍不可替代**，只是可以更精准地知道什么时候需要人眼介入。

---

### 【分隔屏 4】价值迁移

**主标题（64px，700）：**
价值迁移

**副标题（22px，400，#888888）：**
什么不会被替代

---

### 【内容区 5】什么不会被替代

**章节标题（40px）：** 什么不会被替代

**正文段落 1：**
> 文章的判断：快速写代码的能力在贬值，但架构判断、系统性思维、对"好的"的识别力——这些在 AI 时代反而更稀缺，因为 AI 最难替代的恰恰是这些判断力。

**引用块：**
> "批判 AI 的能力将比生产代码的能力更有价值。"  
> — 文章作者

**正文段落 2：**
> 文章里还有更多关于角色分工和转型路径的讨论，感兴趣可以看原文。

---

### 【分隔屏 5】想一想

**主标题（64px，700）：**
想一想

**副标题（22px，400，#888888）：**
结合我们自己的情况

---

### 【内容区 6】三个思考方向

**章节标题（40px）：** 三个思考方向

**三列卡片：**

卡片1 — **① 团队的隐性知识，AI 进不了传递链**
> 组件库升级了一半，旧写法和新写法同时存在——老员工知道"新页面用新的"，AI 看到哪个学哪个。某个接口封装绕过去会触发历史 bug——这件事在老员工脑子里，没有文件，AI 可能直接调原始接口。
>
> **这类知识靠"老带新"维持，AI 进不了这个传递链。它读不到的，就等于不存在。**

卡片2 — **② 有没有最基本的自动验证？**
> 文章说"驾驭工程"第一条就是测试基础设施——不能自动测试，就不能信任 AI 写的代码。
>
> 如果项目连基本的自动化测试都没跑起来，那不管 AI 多强，生成的代码对不对，**最终全靠人看。这可能是当前最大的瓶颈。**

卡片3 — **③ 从"用 AI"到"为 AI 而建"**
> 前两个问题都是具体的切入点，但背后指向同一件事：我们现在是把 AI 加进了已有的工作流，流程本身没有变。
>
> **AI 辅助和 AI 优先的差距不在工具，在于有没有把流程、架构、验证体系围绕 AI 重新设计。**

**说明文字（次级，15px，#888888）：**
如果有经验或想法，欢迎聊聊。

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
| 内容区5（价值迁移） | 1分钟 | 简短带过 |
| 分隔屏5 + 内容区6 | 10~15分钟 | 讨论为主，不要赶时间 |

**总计：约 28~35 分钟**（含讨论）

---

*文档结束*
