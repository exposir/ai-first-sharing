export interface Article {
  emoji: string;
  title: string;
  titleEn: string;
  points: number;
  comments: number;
  accentColor: string;
  summary: string;
  communityFocus: string;
  deepInsight: string;
  source?: string;
}

export interface Section {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  articles: Article[];
}

export interface DaySummary {
  title: string;
  insights: { icon: string; title: string; text: string }[];
  closing: string;
}

export interface DayData {
  date: string; // e.g. "2026-04-20"
  displayDate: string; // e.g. "4月20日"
  headline: string;
  stats: { articles: number; comments: number; points: number; topics: number };
  overview: string;
  sections: Section[];
  summary: DaySummary;
}

const data: Record<string, DayData> = {
  "2026-04-19": {
    date: `2026-04-19`,
    displayDate: `4月19日`,
    headline: `成本觉醒与范式交锋`,
    stats: { articles: 9, comments: 2230, points: 2980, topics: 4 },
    overview:
      `今日 HN 首页是一幅\u201C成本觉醒\u201D与\u201C范式交锋\u201D的双联画\u2014\u2014728 分的 Hetzner 迁移帖宣告了云溢价时代的终结，484 条评论的 Opus 模型对比帖将 AI 透明度推向审判席，而 B-52 星体追踪器和旅行者 1 号的告别则提醒我们：真正的工程不需要快速迭代，只需要在约束中做到极致。当 AI 让\u201C做出东西\u201D变得廉价，这群极客正集体转向追问：什么是不可被生成的？`,
    sections: [
      {
        id: `infra`,
        emoji: `📈`,
        title: `基础设施成本觉醒`,
        subtitle: `云溢价神话的崩塌`,
        articles: [
          {
            emoji: `🖥️`,
            title: `从 DigitalOcean 迁移到 Hetzner`,
            titleEn: `Migrating from DigitalOcean to Hetzner`,
            points: 728,
            comments: 373,
            accentColor: `bg-section-supply`,
            summary:
              `作者 Isa Yeter 是土耳其的一位独立开发者，因土耳其里拉对美元急剧贬值，以美元计价的基础设施成本变成沉重负担。他记录了从 DigitalOcean（32 vCPU / 192 GB / 月费 $1,432）迁移到 Hetzner 独立服务器 AX162-R（AMD EPYC 9454P 48 核 / 256 GB DDR5 / 月费 $233）的全过程，年省 $14,388。迁移涉及 30 个 MySQL 数据库（248 GB）、34 个 Nginx 站点、GitLab EE（42 GB）、Neo4j（30 GB）等，通过 MySQL 主从复制 + Nginx 反向代理中转 + DNS TTL 梯度下降的六阶段策略，实现了 24 小时零停机的完整切换。所有迁移脚本已开源。`,
            communityFocus:
              `评论区最大争论是 VPS vs 裸金属的公平性\u2014\u2014\u201CVPS 出硬件故障会自动热迁移，独服坏了只能等人来修\u201D。但反方指出 Hetzner 也有 VPS 产品，同配置仍便宜得多。Redis 创始人 antirez 现身分享自己也从 Linode 和 DO 迁到了 Hetzner，并表示用 Claude Code 完成了整个迁移过程，引发了\u201CClaude 广告嵌套在 Hetzner 广告里\u201D的自嘲。另有用户称帮客户从 DO 迁出后月省 $28,000。反面经验也不少：有人抱怨 Hetzner IP 被伪造后以\u201C滥用\u201D为由关停服务器，还有人多次注册被拒。`,
            deepInsight:
              `728 分不是对 Hetzner 的品牌投票，而是对\u201C云溢价叙事\u201D的集体否决。当 Terraform、K8s 等 IaC 工具将自主运维的门槛拉低到中小团队可及的水平，\u201C为便利性付出 5 倍溢价\u201D的叙事就失去了根基。Hetzner 的崛起代表了欧洲性价比基础设施对美国云巨头定价权的结构性挑战\u2014\u2014这不是一个厂商选择问题，而是整个行业\u201C托管即服务\u201D价值锚点的重估。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `ai`,
        emoji: `🤖`,
        title: `AI 模型博弈`,
        subtitle: `透明度、设计哲学与学术防线`,
        articles: [
          {
            emoji: `📊`,
            title: `Opus 4.6 与 Opus 4.7 的匿名请求-Token 对比分析`,
            titleEn: `Anonymous request-token comparisons from Opus 4.6 and Opus 4.7`,
            points: 482,
            comments: 484,
            accentColor: `bg-section-ai`,
            summary:
              `来自 billchambers.me 的文章通过匿名化收集真实世界 API 请求数据，对比两个模型版本在相同输入下的输出 token 差异。核心发现：Opus 4.7 在推理类任务上 token 消耗上升约 30-50%，部分编程任务增加了大量\u201C解释性文本\u201D但代码质量并未对应提升。两个模型定价相同（$15/$75 per M input/output tokens），意味着 token 增长直接转化为成本上升。`,
            communityFocus:
              `484 条评论呈现极度分裂。一派认为 4.7 的 token 增加反映了更深入的推理链；另一派认为是\u201C无效冗余\u201D。对于月度 API 支出 $10,000 的大用户，30-50% 的 token 膨胀意味着额外 $3,000-$5,000 的开支。最尖锐的批评指向 Anthropic 不公开模型变更日志\u2014\u2014\u201C我们需要的不是更好的模型，而是更好的版本管理和变更通知\u201D。基准测试显示 4.7 多项指标优于 4.6，但日常使用中很多用户感觉\u201C差不多甚至更差\u201D，引发了对 AI 模型评测方法论本身的深层质疑。`,
            deepInsight:
              `这篇帖子的本质是一场关于模型版本治理的社区施压。当模型厂商在不充分通知的情况下改变模型行为，依赖这些模型构建产品的开发者面临\u201C地基在脚下移动\u201D的困境。Token 经济学正在成为选择 AI 供应商时被严重低估的因素\u2014\u2014它不只是成本问题，更是可预测性问题。这将成为大模型产品竞争的新维度，远比跑分更贴近真实使用体验。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🎨`,
            title: `围绕 Claude Design 的思考与感受`,
            titleEn: `Thoughts and feelings around Claude Design`,
            points: 273,
            comments: 178,
            accentColor: `bg-section-ai`,
            summary:
              `设计工程师 Sam Henri Gold 在 Claude Design 发布次日撰文，核心论点极具攻击性\u2014\u2014Figma 的\u201CSketch 时刻\u201D正在到来。他认为 Figma 发明了一套既借鉴编程又不完全对应编程的封闭原语体系（组件、变量、属性），复杂到\u201C整个设计岗位专门负责管理这套系统本身\u201D。更致命的是，Figma 的封闭二进制格式无法被 LLM 理解\u2014\u2014\u201CLLM 是在代码上训练的，从未学会 Figma 的那套东西\u201D。Claude Design 虽然粗糙，但其底层是 HTML 和 JS，可以直接与 Claude Code 双向对接，将设计-实现之间的反馈循环从交接变成对话。作者预测设计工具将分化为两条路：一条走向代码（Claude Design 方向），一条走向纯粹的视觉探索环境。`,
            communityFocus:
              `178 条评论中最激烈的争论围绕三个问题。一是 Claude Design 的用量限制过于严格\u2014\u2014有人设置一个设计系统就用掉 95% 周配额。二是 AI 生成设计的同质化\u2014\u2014有人发现自己的输出与 Twitter 上别人的\u201C几乎一模一样\u201D。三是设计师职业的未来\u2014\u2014一位 20 年经验的开发者直言\u201C90% 的行业已经完蛋了\u201D，但反方尖锐指出\u201Cvibe-coded 的 React 应用细节上精致，架构层面是不堪入目的混乱\u201D。Figma 的定价策略也被集中攻击：过去免费的查看/小幅编辑权限现在需要付费座席。`,
            deepInsight:
              `这篇文章的 273 分标志着 HN 社区正式将 AI 设计工具纳入\u201C基础设施级别\u201D的讨论。核心命题不是 Claude Design 好不好用，而是：当 LLM 天然理解代码而非 Figma 原语，设计工具的底层表示选择就成了生死攸关的架构决策。Figma 花十年建造的护城河\u2014\u2014封闭格式、专有原语、协作网络效应\u2014\u2014在 AI 时代突然从资产变成了负债。设计工具的下一个十年将由\u201C材料诚实性\u201D定义：工具的底层表示是否与最终产出（代码）同构。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `⌨️`,
            title: `大学讲师转向打字机以遏制 AI 代写作业`,
            titleEn: `College instructor turns to typewriters to curb AI-written work`,
            points: 225,
            comments: 202,
            accentColor: `bg-section-ai`,
            summary:
              `康奈尔大学德语讲师 Grit Matthias Phelps 从 2023 年春季起，每学期安排\u201C模拟日\u201D\u2014\u2014从二手店购买几十台手动打字机，要求学生在课堂上无屏幕、无在线词典、无删除键的环境中完成写作。她的 7 岁和 9 岁孩子担任\u201C技术支持\u201D确保无人偷用手机。大一新生说：\u201C我在电影里见过打字机，但没人教你怎么用。\u201D计算机科学专业学生坦言：\u201C这话可能不好听，但我被迫自己思考问题，而不是交给 AI。\u201DPhelps 此前尝试过 Turnitin 等 AI 检测工具，发现假阳性率令人担忧，特别是对非母语学生。`,
            communityFocus:
              `202 条评论分裂为两大阵营。一派以\u201C健身房并不因为有了拖拉机就变得多余\u201D的经典类比领衔\u2014\u2014认为打字机是创造无法作弊的评估环境的合理手段。另一派反驳：\u201C健身房之所以存在，恰恰因为拖拉机取代了体力劳动，人们需要\u2018假劳动\u2019来锻炼\u2014\u2014大学卖的也正是这种\u2018假劳动\u2019，这会要了它们的命。\u201D多位大学教师分享了自己的调整策略：50% 项目 + 50% 纸笔现场测验、口头答辩、引用 Bloom 教育目标分类法将评估重心从\u201C记忆/理解\u201D提升到\u201C分析/综合/评价\u201D层次。有人提出 Google Docs 的事件记录理论上可以回放文档创建过程\u2014\u2014但 Etsy 上已经有\u201C代打字\u201D服务。`,
            deepInsight:
              `打字机不是解决方案，而是一面诊断镜\u2014\u2014它照出的是评估体系的结构性失效。当 AI 检测工具的准确率\u201C不比抛硬币好多少\u201D，当 Etsy 上出现代打字服务，唯一靠谱的验证手段只剩下面对面的认知展示（口试、辩论、过程性评估）。这场危机的本质是：教育机构一百年来评估的是\u201C文字产出\u201D，而非\u201C认知能力\u201D\u2014\u2014只是在 AI 之前，两者高度相关，这个区别无关紧要。现在相关性断裂了，教育必须重新回答\u201C什么叫学会了\u201D这个根本问题。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `tech`,
        emoji: `🔬`,
        title: `硬核技术与科学前沿`,
        subtitle: `不可被生成的知识`,
        articles: [
          {
            emoji: `✈️`,
            title: `B-52 轰炸机星体追踪器内部的机电角度计算机`,
            titleEn: `The electromechanical angle computer inside the B-52 bomber's star tracker`,
            points: 308,
            comments: 87,
            accentColor: `bg-section-cs`,
            summary:
              `来自 righto.com 的 Ken Shirriff（HN 公认的\u201C硬件逆向工程大师\u201D）深入剖析了 B-52 天文导航系统中的角度计算机。由于 1963 年数字计算机\u201C昂贵、缓慢且不可靠\u201D，该系统采用纯机电方案：用一个半径 2.625 英寸的物理半球体建模天球，通过齿轮、凸轮、旋转变压器和伺服电机实现球面三角函数运算，将星体位置转换为方位角和高度角，精度达 \u00B10.1\u00B0。系统安装在飞机顶部的陀螺仪稳定平台上，用光电倍增管探测星光。设计工作温度覆盖 -54\u00B0C 到 +71\u00B0C。由于找不到接线图，Shirriff 不得不逐根追踪每一根导线。`,
            communityFocus:
              `Shirriff 本人在评论区活跃答疑。评论者集体敬仰这一时代的工程精神\u2014\u2014\u201C每次读到这类文章，我都羡慕那些工程师\u2026\u2026而我在这里跟 GitLab 流水线搏斗\u201D。但也出现了尖锐的战争伦理辩论：用户指出越南和柬埔寨平民是这些\u201C有趣工程谜题\u201D的受害者，提到老挝\u201C秘密战争\u201D（1964-1973 年投下超过 200 万吨弹药）。技术推荐方面，多人提及二战军舰的机电火控计算机、\u201C和平卫士\u201D导弹中用氟碳化合物悬浮铍球的惯性参考系统（1987 年单价 $600 万）。`,
            deepInsight:
              `308 分给一台 1960 年代的模拟计算机，说明 HN 社区在 AI 时代对约束下工程的渴望已达峰值。这台机器的核心美学在于：每一个齿轮都有不可替代的功能，每一条导线都连接着物理现实\u2014\u2014与今天\u201C再跑一次\u201D的软件文化形成的反差，不仅是技术层面的，更是价值观层面的。它提醒我们：在资源受限的环境中追求精度，比在资源充裕的环境中追求速度，需要更深层的工程智慧。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🔬`,
            title: `NIST 科学家创造出\u201C任意波长\u201D激光`,
            titleEn: `NIST scientists create 'any wavelength' lasers`,
            points: 250,
            comments: 107,
            accentColor: `bg-section-cs`,
            summary:
              `论文发表于 Nature（2026 年 4 月 15 日），由 NIST 物理学家 Scott Papp 团队主导。核心突破是五氧化二钽（tantala, Ta\u2082O\u2085）非线性光子学的单片三维集成\u2014\u2014在标准硅晶圆上按\u201C层叠蛋糕\u201D结构沉积铌酸锂（电控制层）+ 金属（高速开关层）+ tantala（宽光谱非线性转换层），通过光学参量振荡（OPO）实现约 500nm 到 5000nm（10 倍范围）的波长覆盖。关键创新是开发了无需加热即可制造 tantala 电路的技术，使其不损坏下层材料。最终在约啤酒杯垫大小的晶圆上制造了约 50 个芯片，包含 10,000 个光子电路，每个输出独特波长。35 mW 输入功率可在 485 nm 处产生约 6 mW 输出。`,
            communityFocus:
              `107 条评论质量极高。多位评论者纠正了原文中\u201C光子比电子更快\u201D的误导\u2014\u2014电信号传播接近光速，光子通信的真正优势在于带宽而非延迟。对\u201C任意波长\u201D的质疑也出现了\u2014\u2014不是单一设备产生任意波长，而是通过设计不同电路产生不同波长。最热的讨论支线是颜色感知的哲学讨论：洋红色没有对应单一波长（它是大脑\u201C创造\u201D的颜色）、棕色是\u201C在比周围暗的环境中感知到的橙色\u201D、英语中\u201Corange\u201D作为独立颜色概念直到橙子传入后才出现。应用场景讨论中，量子计算的离子阱波长限制、ASML 极紫外光刻的简化、以及根据岩石材料吸收波段动态调节激光的隧道掘进技术被反复提及。`,
            deepInsight:
              `这项突破的真正意义不在于\u201C又一种新激光器\u201D，而在于它可能开启\u201C激光器的通用化\u201D时代。长期以来每种应用需要定制化激光器（材料、谐振腔各不相同），导致激光技术的碎片化和高成本。芯片级的全光谱通用光源，其影响类似于通用处理器对专用芯片的替代\u2014\u2014降低门槛、扩大应用、压缩成本。但标题有夸大成分，从实验室到量产仍面临功率水平、长期稳定性和制造成本三大挑战。前 NIST 研究人员创立的 Octave Photonics 正在推进商业化。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🔢`,
            title: `浮点数的等值比较：其实没问题`,
            titleEn: `It's OK to compare floating-points for equality`,
            points: 191,
            comments: 122,
            accentColor: `bg-section-cs`,
            summary:
              `lisyarus 坦言标题是有意的\u201C标题党\u201D，更准确说法应该是\u201C不应该用 epsilon 来比较浮点数\u201D。作者有 15 年以上几何/图形/物理模拟经验，声称只遇到过一两次 epsilon 确实合适的场景。文章系统论证了 epsilon 比较的三大问题：一是 epsilon 值几乎总是凭空猜测的；二是 epsilon 比较不具有传递性（a==b 且 b==c 不能推出 a==c），而大多数算法假设比较是传递的；三是 IEEE 754 保证单个算术运算产生最接近真实结果的可表示值，浮点数是高度确定性的系统。通过六个具体案例论证：在大多数场景下，== 0.f 的精确比较比任意 epsilon 更正确、更安全。`,
            communityFocus:
              `评论区演变为一场 IEEE 754 的深潜。高赞评论指出 f64::EPSILON 可能是计算机科学中被误用最多的常量\u2014\u2014它定义为 1.0 与大于 1.0 的最小浮点数之差，大于 2.0 的两个数不可能相距仅一个 epsilon。多位图形学程序员分享了因过度避免浮点比较而引入 bug 的经历：\u201C我见过无数代码库里充斥着毫无意义的 epsilon 比较，没有人能解释为什么那个 epsilon 是 1e-6 而不是 1e-9。\u201Dx87 FPU 的 80 位扩展精度问题和跨编译器浮点行为差异被反复提及。Rust assertables crate 的作者现身求助，被多人指出其代码中使用 f64::EPSILON 的根本性错误。`,
            deepInsight:
              `191 分给一篇反教条的技术文章，折射出 HN 社区对过度泛化规则的集体疲劳。\u201C不要比较浮点数\u201D这条戒律的原始上下文（累积误差场景）早已被遗忘，却作为绝对教条代代相传\u2014\u2014而盲目使用 epsilon 比较引入的 bug 可能比直接 == 更隐蔽、更危险。这篇文章的深层意义是：编程中有太多这样的\u201C僵尸规则\u201D，真正的工程素养不在于记住规则，而在于理解规则的适用边界。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `opensource`,
        emoji: `🛠️`,
        title: `开源生态与工程文明`,
        subtitle: ``,
        articles: [
          {
            emoji: `🎬`,
            title: `Kdenlive 2026 年度现状报告`,
            titleEn: `State of Kdenlive`,
            points: 364,
            comments: 118,
            accentColor: `bg-section-heritage`,
            summary:
              `由核心团队成员 Farid Abdelnour 撰写的年度总结。2025 年发布三个主要版本：25.04 新增基于 SAM2 模型的自动遮罩/背景移除、重写 OpenTimelineIO 导入导出、音频波形生成性能提升 300%；25.08 以稳定性为重心，修复 15 个以上崩溃问题；25.12 侧重 UX 打磨。核心团队仅 8 人（其中 2 名开发者），主要贡献者 Jean-Baptiste Mardelle 一人贡献了 878 次提交。2025 年共 38 人贡献代码，约一半为首次贡献者。全年下载量 1,150 万次（仅官网，不含 Flathub/Snap/发行版仓库），Flathub 月均 41,499 次。捐赠总额 9,344.80 欧元（较 2024 年的 11,526 欧元下降）。团队到阿姆斯特丹拜访了 Blender 基金会交流产品管理经验。`,
            communityFocus:
              `最激烈的辩论围绕稳定性\u2014\u2014批评方认为\u201C绝不应用于正式项目\u201D，支持方反驳\u201C4 年内未遇过项目损毁，Premiere Pro 的崩溃频率也不低\u201D。一位用户精辟指出：\u201C打断创作流程的崩溃对创意工作者来说是不可接受的代价\u201D\u2014\u2014这是程序员群体容易忽视的角度。一个有趣的元讨论：用户称用 Claude Code 发现了 Kdenlive 中多个 O(n) 性能瓶颈并修复了，但不知如何提交\u2014\u2014\u201C未经邀请的 AI 驱动 PR 对维护者来说很烦人\u201D。社区建议提交 Draft PR 附问题说明，或提交 Issue 让维护者自行用 AI 重新实现。`,
            deepInsight:
              `364 分的年度报告揭示了开源视频编辑的结构性困境：1,150 万次下载 vs 9,344 欧元捐赠\u2014\u2014平均每次下载贡献不到 0.001 欧元。Adobe Premiere 订阅持续涨价催生了需求，但将需求转化为可持续的开源资金模式，仍是一个未解的系统性问题。2 名核心开发者扛起 1,150 万用户的事实，既是开源精神的证明，也是开源脆弱性的预警。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🚄`,
            title: `为什么日本的铁路系统如此出色`,
            titleEn: `Why Japan has such good railways`,
            points: 357,
            comments: 352,
            accentColor: `bg-section-heritage`,
            summary:
              `来自 Works in Progress 的长文，核心论点是：日本铁路的成功不是文化因素，而是良好的公共政策。五大关键因素：一、私有化与竞争\u2014\u2014大阪到神户之间有三条独立通勤线平行竞争，有时相距不到 500 米；二、铁路引领的城市开发模式\u2014\u2014东急集团不仅运营列车，还建房、开超市、办医院、经营养老院；三、宽松的分区制度\u2014\u2014日本 30% 的城市用地经历过\u201C土地区划整理\u201D；四、私有化停车\u2014\u2014公共道路上停车基本违法，购车前必须证明拥有私人停车位；五、精心设计的补贴\u2014\u2014不补贴日常运营，只为资本投资提供贷款。数据：日本 28% 的客运公里通过铁路完成，美国仅 0.25%。JR 东日本单独载客量是整个英国铁路系统的四倍。`,
            communityFocus:
              `353 条评论引爆了\u201C文化 vs 政策\u201D的世纪大辩论。有人提出\u201C稻作 vs 麦作\u201D假说\u2014\u2014水稻种植需要集体水资源管理，催生更集体主义的文化。中国铁路被频繁对比\u2014\u2014\u201C中国将日本模板放大了十倍\u201D，但反方指出北京和上海内部仍极度依赖汽车。最尖锐的美国自省来自用户 rayiner：\u201C美国喜欢公共交通的人永远不会接受铁路站点由从零售和房地产赚取近一半利润的财团所有。\u201D磁悬浮因静冈县以水源可能受影响为由拒绝审批，开通日期从 2027 年推迟至至少 2035 年。瑞士 vs 日本的对比也很有趣：日本在大城市外覆盖不足，且数字化程度令人惊讶地低（预订必须在车站机器上进行）。`,
            deepInsight:
              `357 分说明这篇文章戳中了 HN 极客群体的深层焦虑：为什么技术先进不等于系统先进？日本铁路的成功不在于新干线跑多快，而在于整个系统\u2014\u2014从分区法规到停车政策到车站开发权\u2014\u2014构成了一个自洽的激励结构。对技术人员的启示是：再好的工程，没有匹配的制度土壤就无法落地。这条道理同样适用于软件架构：技术选型很少是瓶颈，组织结构和激励机制才是。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🛰️`,
            title: `NASA 关闭旅行者 1 号上的仪器以维持飞船运行`,
            titleEn: `NASA Shuts Off Instrument on Voyager 1 to Keep Spacecraft Operating`,
            points: 134,
            comments: 56,
            accentColor: `bg-section-heritage`,
            summary:
              `2026 年 4 月 17 日，NASA JPL 向旅行者 1 号发送指令关闭了低能带电粒子实验仪器（LECP）\u2014\u2014该仪器自 1977 年发射以来不间断运行了近 49 年。直接原因：2026 年 2 月 27 日一次例行翻转机动中功率意外下降，工程师需要先发制人避免触发欠压故障保护系统。飞船的放射性同位素热电发生器（钚-238）每年衰减约 4 瓦，当前可用功率已降至约 220-225 瓦（发射时 470 瓦）。指令需约 23 小时到达飞船（距地球超 250 亿公里），关闭过程本身耗时约 3 小时 15 分钟。LECP 的 0.5 瓦旋转电机保留运行以备重启。10 套原始仪器中已有 7 套关闭，目前仅存等离子波探测器和磁力计两台在运行。工程师正准备代号\u201CBig Bang\u201D的激进节能方案\u2014\u2014通过远程指令序列一次性将多个子系统从当前配置切换到功耗更低的备用组件或运行模式，将整个供电架构从 A 状态跳到 B 状态。计划 5-6 月在旅行者 2 号上先行测试，如成功甚至可能重启 LECP。`,
            communityFocus:
              `用户 jedberg 感叹\u201C想象一下部署修复后要等两天才知道是否有效\u201D，引发共鸣。有人回忆打孔卡时代隔天才能看到结果。用户分享了 2018 年在加州理工上旅行者项目科学家 Ed Stone 课程的经历\u2014\u2014Stone 在 11 月 1 日兴奋地向学生透露旅行者 2 号到达星际空间的\u201C秘密\u201D。关于科学价值的讨论中，有人质疑近年是否还有意义的产出，多人回应：这是人类唯一直接观测星际空间的方式，哪怕数据符合预期，也具有不可替代的唯一性。关于能否发射更好的探测器，解释：让旅行者飞得这么快的行星排列每 175 年才发生一次。`,
            deepInsight:
              `旅行者 1 号是工程学意义上最极端的权衡题：在不能更换电池、不能维修、信号往返 46 小时、计算机仅 69.63 KB 内存的条件下，让一台 1970 年代的机器继续传回科学数据。每关闭一台仪器就永久放弃一种科学能力\u2014\u2014这种不可逆性在\u201Cctrl+z\u201D时代几乎消失了。\u201CBig Bang\u201D方案的风险在于：备用组件闲置 40 多年可能已老化失效，多设备同时切换时任何一环出错都可能触发欠压保护，而 23 小时的单程通信延迟意味着无法实时干预\u2014\u2014这是在 250 亿公里外、用 69.63 KB 内存的机载计算机执行的一次不可逆赌注。而当 2030 年代某个时刻旅行者 1 号彻底沉默，它仍将携带着金唱片在星际空间中飞行\u2014\u2014\u201C即使不再说话，它仍在向宇宙自我介绍。\u201D`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
    ],
    summary: {
      title: `综合总结与洞察`,
      insights: [
        {
          icon: `📈`,
          title: `成本觉醒`,
          text: `Hetzner 迁移帖 728 分领跑全场，antirez 等知名开发者现身佐证\u2014\u2014\u201C为便利性付出 5 倍溢价\u201D的云叙事正在瓦解。当 IaC 工具将自主运维门槛拉低到中小团队可及的水平，DigitalOcean、Linode 等中间定位的云厂商将面临系统性的价值锚点重估。`,
        },
        {
          icon: `🤖`,
          title: `AI 治理压力`,
          text: `Opus 4.6 vs 4.7 的 token 对比（482 分/484 评论）与 Claude Design 哲学反思（273 分/178 评论）共同指向一个核心诉求\u2014\u2014用户要求对 AI 产品变更的可解释性与可预测性。Token 经济学、模型版本治理、设计工具的材料诚实性，将成为大模型产品竞争中比基准跑分更贴近真实体验的维度。`,
        },
        {
          icon: `🔬`,
          title: `底层知识的复权`,
          text: `B-52 机电计算机（308 分）、NIST 任意波长激光（250 分）、浮点数反教条（191 分）集中出现在同一天，折射出社区对\u201CAI 让人变浅\u201D的焦虑反弹\u2014\u2014越是工具化时代，对约束下工程的理解、对基础原理的掌握，越成为不可被生成的稀缺资产与身份标识。`,
        },
      ],
      closing:
        `今日 HN 首页的整体基调可以概括为：技术祛魅时代的寻根之旅。当 AI 让\u201C做出东西\u201D的成本趋近于零，极客社区反而集体转向追问那些 AI 无法替代的东西\u2014\u2014精密机械中每一个齿轮的不可替代性、浮点数背后 IEEE 754 的确定性保证、以及旅行者 1 号 49 年不间断运行的工程耐久力。`,
    },
  },
  "2026-04-20": {
    date: `2026-04-20`,
    displayDate: `4月20日`,
    headline: `信任崩塌与计算寻根`,
    stats: { articles: 6, comments: 1838, points: 1856, topics: 5 },
    overview:
      `今日 HN 首页是一幅\u201C信任崩塌\u201D与\u201C计算寻根\u201D的双联画\u2014\u2014600 分的 Vercel 安全事件揭示了 AI 工具链条中最薄弱的一环竟是一个第三方 OAuth 应用，548 分的 BYTE 杂志数字化考古唤起了\u201C读者即构建者\u201D的黄金年代记忆，而从跳表的并发友好性到七种编程元语言的分类学，极客社区正在 AI 加速时代集体向下挖掘：当生成代码变得廉价，理解计算的本质反而成了最稀缺的能力。与此同时，RAM 短缺与溴元素咽喉点将硬件供应链的脆弱性推到了所有人面前。`,
    sections: [
      {
        id: `security`,
        emoji: `🔒`,
        title: `安全危机与信任重构`,
        subtitle: `AI 工具链条上的多米诺骨牌`,
        articles: [
          {
            emoji: `🛡️`,
            title: `Vercel 2026 年 4 月安全事件`,
            titleEn: `Vercel April 2026 security incident`,
            points: 600,
            comments: 337,
            accentColor: `bg-section-security`,
            summary:
              `4 月 19 日，Vercel 发布安全公告披露遭到未经授权的内部系统访问。攻击链：一名 Vercel 员工使用了第三方 AI 平台 Context.ai，该平台的 Google Workspace OAuth 应用遭到入侵（OAuth App ID: 110671459871），攻击者由此接管了该员工的 Vercel Google Workspace 账户，进而横向移动进入 Vercel 内部环境。Vercel CEO Guillermo Rauch 确认，攻击者获取了未标记为"敏感"的环境变量（这类变量未做静态加密），通过枚举这些变量获得了更深层的访问权限。攻击者自称 ShinyHunters 成员，在黑客论坛出售据称包含 580 条员工记录、内部部署访问权限、NPM/GitHub token 的数据，并要求 200 万美元赎金。Vercel 已聘请 Mandiant 协助调查，确认 Next.js、Turbopack 等开源项目未受影响。`,
            communityFocus:
              `337 条评论呈现极度愤怒。最高赞评论指出："当一个 OAuth token 就能同时攻陷开发工具、CI 管道、密钥和部署，架构上已经出了根本问题。" 用户梳理了 Vercel 12 个月内的第三次重大安全事件：React2Shell（CVSS 10）、中间件绕过（CVSS 9.1）、以及本次事件。最大争议是通知方式\u2014\u2014事发当天仅通过 X/Twitter 和知识库页面披露，未向全量用户发送邮件。更深层的讨论围绕 Web 开发的架构方向："这感觉像是过去十年 Web 开发方向的自然后果\u2014\u2014正常化了把无数第三方方案串联起来，而不是从更稳定的基础上构建。" Rauch 认为攻击者"被 AI 显著加速"，引发了关于 AI 是否在加剧安全风险的辩论。`,
            deepInsight:
              `600 分不是对 Vercel 的品牌审判，而是对整个"平台信任链"模式的系统性质疑。攻击路径从一个员工使用的 AI 工具→OAuth→Google Workspace→Vercel 内部系统→客户环境变量，这条链条揭示了一个令人不安的现实：AI 工具的爆炸式增长正在以超线性速度扩大企业攻击面。每一个员工安装的每一个 AI 助手都可能成为新的入口点，而传统的安全边界模型完全没有覆盖"员工个人 AI 工具的 OAuth 权限"这个维度。Vercel 事件将成为企业安全策略中"Shadow AI"治理的里程碑案例。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🔊`,
            title: `SPEAKE(a)R：将扬声器变成麦克风`,
            titleEn: `SPEAKE(a)R: Turn Speakers to Microphones for Fun and Profit`,
            points: 168,
            comments: 68,
            accentColor: `bg-section-security`,
            summary:
              `2017 年 USENIX WOOT 论文，核心发现是 Realtek 音频芯片组的 jack retasking 功能允许软件将扬声器输出端口重新配置为麦克风输入端口，利用扬声器和麦克风作为同一种电磁换能器的物理可逆性，将"无麦克风"的主机变成窃听设备。`,
            communityFocus:
              `68 条评论充满有趣的个人经历分享。一位用户回忆贫困的朋友用坏掉的耳机当麦克风用 Fruity Loops 录了整张说唱专辑。另一位用户指出这个物理原理在录音棚已被长期利用\u2014\u2014用 Yamaha NS10 音箱当底鼓麦克风已经流行到 Yamaha 开始官方生产"subkick"产品。最引人注目的评论来自一位发现高端华盛顿酒店浴室水槽下有硬接线扬声器的用户，上面有人用指甲油写了"F.B.I."。技术层面聚焦于一个优雅的洞察："有一根铜线\u2014\u2014它是天线、磁铁、电感、保险丝、温度计、加热器和应变计。再放一根\u2014\u2014它是电容器。加上铁\u2014\u2014它是热电偶。加盐水\u2014\u2014它是电池。"`,
            deepInsight:
              `这篇 2017 年论文今天重新登上首页，与 Vercel 事件形成隐性呼应。安全模型通常假设硬件功能是固定的\u2014\u2014"这台机器没有麦克风"意味着它不能录音。但 jack retasking 打破了这个假设：软件可以重新定义硬件的物理功能。在 AI 音频处理能力日益增强的 2026 年，从低质量扬声器信号中提取可辨识语音的门槛只会越来越低。这是一个永久的零日漏洞\u2014\u2014你无法通过软件补丁修复物理学定律。`,
            source: `原文（PDF）未完全访问 / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `cs`,
        emoji: `🧬`,
        title: `计算机科学的谱系学`,
        subtitle: `在 AI 时代重新理解编程的本质`,
        articles: [
          {
            emoji: `🔤`,
            title: `七种编程元语言`,
            titleEn: `The seven programming ur-languages`,
            points: 302,
            comments: 117,
            accentColor: `bg-section-cs`,
            summary:
              `madhadron 的文章将所有编程语言追溯到七种"元语言"，每种以一个"模式标本"命名：ALGOL（赋值、条件、循环组成的序列式编程，涵盖 C/Python/Java/JavaScript 等大多数主流语言）、Lisp（前缀表达式+宏系统=可重定义语义）、ML（一等函数+Hindley-Milner 类型系统+递归代替迭代）、Self（对象间消息传递，Smalltalk 为代表，JavaScript 继承其无类对象系统）、Forth（数据栈+逆波兰表示法+可替换解析器）、APL（一切皆 n 维数组+极简符号运算符）、Prolog（事实+规则+搜索=逻辑编程）。作者强调学习不同元语言需要建立全新的"神经通路"\u2014\u2014同一元语言内的语言切换很容易，跨元语言切换需要大量时间和认知重组。`,
            communityFocus:
              `117 条评论中最激烈的争论集中在分类边界。Ruby 应该归入 Self（Smalltalk）而非 ALGOL\u2014\u2014"Ruby 从头到尾都是面向对象的，一切皆对象，方法调用就是消息传递"。关于定理证明器是否构成第八种元语言引发深入讨论：一派认为 Lean/Agda 只是带依赖类型的 ML 扩展，另一派指出它们本质上需要移除而非添加能力（去掉通用递归、保证全函数性），这使其与 ML 有根本区别。还有用户列出了文章未覆盖的计算范式：Verilog（硬件描述）、Petri 网、Kahn 进程网络、概率编程、项重写系统等。`,
            deepInsight:
              `302 分给一篇 2022 年的旧文第三次出现在 HN 首页，这本身就是一个信号。当 LLM 可以用任何语言写出可运行的代码，程序员正在追问一个更根本的问题：编程语言之间的差异到底是语法糖，还是思维范式的分野？答案是后者\u2014\u2014而这恰恰是 AI 无法替你做出的选择。选择 Haskell 还是 Python 不是在选择语法，而是在选择你如何构造问题空间。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `📊`,
            title: `跳表到底好在哪里？`,
            titleEn: `What are skiplists good for?`,
            points: 273,
            comments: 64,
            accentColor: `bg-section-cs`,
            summary:
              `来自 Antithesis（确定性模拟测试公司）的文章，介绍了他们发明的一种叫"skiptree"的变体数据结构。核心问题是：他们需要在 BigQuery SQL 中存储和查询树状祖先关系，但 BigQuery 的点查询性能极差。解决方案是将跳表的"快速通道"思想应用于树结构\u2014\u2014每个节点不仅存储直接父节点，还存储多个跨层级的祖先指针，使得祖先查询从 O(depth) 降为 O(log depth)。团队甚至编写了一个 JavaScript 编译器来生成千字节级别的 SQL 查询。`,
            communityFocus:
              `Redis 创始人 antirez 现身评论，确认 Redis 有序集合使用跳表的原因\u2014\u2014"在 Redis 中很容易用 span 来增强跳表以支持排名操作。" 最高赞的技术讨论聚焦于并发性："跳表在并发访问方面胜过平衡 BST。无锁实现更容易推理和正确实现。ConcurrentSkipListMap 自 Java 6 起就在标准库中。"重平衡才是真正的杀手\u2014\u2014CAS 循环在平坦列表上很直接，但旋转？你的线程正在插入的节点即将被移动。Antithesis 联合创始人亲自回复解释了他们选择在 SQL 中编码 skiptree 而非切换数据库的原因\u2014\u2014BigQuery 的定价模型是核心约束。`,
            deepInsight:
              `273 分说明 HN 社区渴望的不是又一个"跳表 vs 红黑树"的教科书比较，而是数据结构如何在真实约束下被重新发明。Antithesis 的 skiptree 之所以引人入胜，是因为它展示了一个完整的工程决策链：从 BigQuery 定价模型→SQL 中实现树查询的困难→跳表思想的迁移→用 JS 编译器生成 SQL。在"AI 可以秒生红黑树实现"的时代，理解数据结构在特定约束下的运行时行为而非仅仅背诵 Big-O，才是真正的工程能力。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `ai`,
        emoji: `🤖`,
        title: `AI 生态的元观察`,
        subtitle: `系统提示词成为产品战略的 X 光片`,
        articles: [
          {
            emoji: `📝`,
            title: `Claude Opus 4.6 与 4.7 系统提示词的变化`,
            titleEn: `Changes in the system prompt between Claude Opus 4.6 and 4.7`,
            points: 245,
            comments: 140,
            accentColor: `bg-section-ai`,
            summary:
              `Simon Willison 用 Claude Code 将 Anthropic 公开的系统提示词拆解为按模型版本独立的文档，构建了一个 Git 历史以便 diff 对比。Opus 4.7 相较 4.6 的关键变化包括："developer platform"更名为"Claude Platform"；工具列表新增 Claude in Powerpoint；子安全部分大幅扩展，新增 <critical_child_safety_instructions> 标签；新增 <acting_vs_clarifying> 部分，明确指示"当请求留有小细节未指定时，用户通常希望 Claude 立即做出合理尝试，而非先被面试"；新增 tool_search 机制；新增简洁性要求；移除了禁止使用星号动作和特定词汇的限制；移除了关于特朗普总统身份的显式声明；新增饮食障碍相关条款和反对"一词回答争议性问题"的防御性措辞。`,
            communityFocus:
              `140 条评论最激烈的辩论围绕 <acting_vs_clarifying> 展开。大量用户表示不满："我更希望 agent 先问清楚再动手。"一位用户分享了自己的极端做法："我的流程中有一个不可协商的阶段\u2014\u2014模型必须面试我，创建面试文件，否则意图会在聊天记录中丢失。"一位用户分享了创意解决方案：他的 tmux agent 编排系统中有一个"苏格拉底 agent"\u2014\u2014没有代码库访问权限，只能问问题，主 agent 必须先向它汇报计划再动手，"这比任何 thinking tokens 都好用"。关于饮食障碍条款，反对派认为这是"每个 Claude 用户都在为这段话付费"的浪费，支持派引用数据反驳：美国约 2900 万人受饮食障碍困扰，这不是小众问题。`,
            deepInsight:
              `Anthropic 是唯一公开发布用户端系统提示词的大模型厂商，这使得 Willison 这种"系统提示词考古学"成为可能。245 分的热度说明 HN 社区已经意识到：系统提示词正在成为比模型权重更直接影响用户体验的产品杠杆。acting_vs_clarifying 的争议暴露了 Anthropic 在"减少对话摩擦以提高转化率"与"通过对话确认提高输出准确性"之间的根本性产品张力。评论区中"苏格拉底 agent"的做法，本质上是用户在用额外的 agent 来抵消系统提示词中他们不喜欢的行为\u2014\u2014当用户开始工程化地绕过你的产品决策，你的产品决策就值得重新审视了。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `supply`,
        emoji: `⚡`,
        title: `供应链地缘政治与硬件困局`,
        subtitle: `RAM、溴，以及 AI 的隐性税`,
        articles: [
          {
            emoji: `💾`,
            title: `内存短缺可能持续数年`,
            titleEn: `The RAM shortage could last years`,
            points: 223,
            comments: 240,
            accentColor: `bg-section-supply`,
            summary:
              `The Verge 以"RAMageddon"为标题系统梳理了全球内存短缺的影响面。内存价格已经翻了三到六倍，AI 公司吞噬了绝大部分产能。三星、SK 海力士和美光控制全球约 95% 的 DRAM 供给，都在将产能向利润更高的 HBM 倾斜。手机\u2014\u2014高通 CEO 称手机业务下滑"100% 因为内存短缺"，旗舰机可能不再增加 RAM；游戏主机\u2014\u2014Steam Deck OLED 因内存危机断货，索尼 PS6 可能推迟到 2028 甚至 2029 年；笔记本\u2014\u2014计划涨价 10-30%，SSD 价格单季度飙升 90%。Intel CEO Lip-Bu Tan 表示"2028 年之前没有缓解"。`,
            communityFocus:
              `240 条评论呈现深度分歧。一派直指 AI 泡沫风险："OpenAI 目前深陷资本紧缩，上一轮融资几乎吸干了私募市场的弹药。那内存厂商是不是要砸在手里？"另一派认为这是正常的周期性行业。一位荷兰用户提供了有趣的侧面视角：荷兰电网已达容量上限，数据中心被告知到 2030 年才能接入电网。关于 HBM 定价的讨论也很尖锐：一位用户指出 2019 年 Radeon VII 作为 $700 消费级 GPU 就搭载了 1TB/s 的 HBM2 内存子系统\u2014\u2014"如果十年前他们能把这东西做出来卖给普通人，为什么现在它变成了凡人买不起的神器？"`,
            deepInsight:
              `223 分的热度与 240 条评论（HN 少见的评论数超过点赞数）反映了这个话题的极高争议性和切身相关性。The Verge 文章最令人不安的数据点不是价格涨幅，而是结构性的产能分配失衡\u2014\u2014内存厂商不是不能增产，而是选择不增产，因为供不应求的利润远高于充分供给。这是 AI 繁荣对整个科技行业征收的"隐性税"：你不需要训练模型也会为 AI 买单\u2014\u2014通过更贵的手机、更贵的笔记本、可能延迟三年的游戏主机。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
          {
            emoji: `🧪`,
            title: `溴元素的战略咽喉点`,
            titleEn: `The Bromine Chokepoint`,
            points: 170,
            comments: 78,
            accentColor: `bg-section-supply`,
            summary:
              `War on the Rocks 发表的地缘政治分析。核心论点：溴是半导体级氢溴酸气体的原料，而氢溴酸是韩国晶圆厂蚀刻每一颗 DRAM 和 NAND 闪存芯片所用的关键化学品。氢溴酸等离子体实现多晶硅对氧化物的选择性蚀刻比高达 100:1，而氯基替代品仅约 30:1\u2014\u2014在先进 DRAM 节点几何尺寸下，这是功能晶体管和废品的区别。韩国 97.5% 的溴进口来自以色列。ICL 集团在死海的提取和转化设施距离已被伊朗导弹击中的 Dimona 和 Arad 仅 35 公里。DRAM 供应商仅持有 2-3 周库存。`,
            communityFocus:
              `78 条评论呈现典型的"担忧派 vs 怀疑派"对立。怀疑派指出："美国是主要的溴生产国，阿肯色州有溴井，它在海水中也有。"另一位用户翻阅了文章声称"溴无法回收"的引用论文，发现摘要实际上描述了一种">95% 产率、≤120°C 温和条件"的催化回收策略。担忧派反驳："这种漫不经心的乐观态度也许能减少你个人的焦虑，但不是管理风险的正确方式。"一位用户精确计算了风险概率："如果你有五个这样的事件，每个 10% 的概率中断半导体，组合起来有 60% 的概率什么都不发生。但值得为每一个发出警报，因为任何一个失败都会造成巨大的附带损失。"`,
            deepInsight:
              `将溴文章与 RAM 短缺文章放在一起看，一条清晰的供应链风险传导路径浮现：AI 需求膨胀→HBM 产能争夺→普通 DRAM 供给紧缩→韩国晶圆厂依赖以色列溴→中东冲突可能中断蚀刻化学品供给。这不是五个独立的风险，而是同一条链条上的五个脆弱点。170 分说明 HN 社区正在从"单点脆弱性"思维转向"供应链级联失效"思维\u2014\u2014而这种系统性视角，正是传统技术社区最缺乏的。`,
            source: `原文已访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
      {
        id: `heritage`,
        emoji: `📚`,
        title: `数字文化遗产`,
        subtitle: `当骑自行车去书店成为一种精神考古`,
        articles: [
          {
            emoji: `📖`,
            title: `BYTE 杂志数字存档，始自 1975 年第一期`,
            titleEn: `Archive of BYTE magazine, starting with issue #1 in 1975`,
            points: 548,
            comments: 142,
            accentColor: `bg-section-heritage`,
            summary:
              `Internet Archive 上的 BYTE 杂志完整数字化存档，从 1975 年第一期开始。BYTE 是个人计算时代最重要的技术杂志之一，单期常达 300-500 页，广告与内容比约 1:3，记录了从 Altair 8800 到 IBM PC、从 CP/M 到 DOS 的完整演进。`,
            communityFocus:
              `142 条评论构成了一部微型口述史。最高赞评论是一位 80 年代中期的读者："很难表达那个年代的感觉\u2014\u2014每个月初骑自行车几英里到书店，看到当月所有计算机杂志的新封面。那是如此令人兴奋。"一位曾在 1988-91 年在非洲当志愿教师的用户分享了令人动容的故事：他住在没有自来水和电力的茅屋里，靠订阅 BYTE 杂志维系与技术世界的联系\u2014\u2014杂志比正常晚 2-3 个月到达，他会在煤油灯下从头到尾读好几遍，包括所有广告。"Steve Ciarcia 的 Circuit Cellar 专栏远超我的理解水平，但没关系，我还是读了。"一位用户引用韩裔德国哲学家韩炳哲的《仪式的消失》，认为这不仅仅是怀旧\u2014\u2014"效率并不总是很有趣。"另有用户提到重新发现了图书馆的价值\u2014\u2014"没有算法试图为了参与度而激怒你。"`,
            deepInsight:
              `548 分让这条成为今日第二热帖\u2014\u2014一个 1975 年的杂志存档击败了几乎所有技术新闻。这不是怀旧消费，而是一种知识谱系学的自觉。评论区反复出现的主题揭示了真正的失落：那个时代的技术媒体假设读者既是使用者也是构建者\u2014\u2014你读 BYTE 不是为了了解该买什么产品，而是为了理解该怎么构建。非洲茅屋里煤油灯下的 BYTE 读者，本质上和今天用 LLM 生成代码的开发者面临同一个问题的两极：前者有知识无工具，后者有工具无知识。BYTE 存档的 548 分是社区对"工具充裕、知识稀缺"状态的集体焦虑投票。`,
            source: `原文（archive.org）已确认可访问 ✅ / HN 评论已访问 ✅`,
          },
        ],
      },
    ],
    summary: {
      title: `综合总结与洞察`,
      insights: [
        {
          icon: `🔒`,
          title: `Shadow AI 即攻击面`,
          text: 'Vercel 事件（600 分）的攻击路径"员工个人 AI 工具→OAuth→内部系统→客户数据"定义了 2026 年企业安全的新威胁模型。每一个未经审计的 AI 工具都是一个潜在入口点\u2014\u2014AI 工具的爆炸式增长正在以超线性速度扩大攻击面，传统安全边界模型完全没有覆盖这个维度。CEO Rauch 认为攻击者"被 AI 显著加速"，攻防两端同时被 AI 重塑。',
        },
        {
          icon: `⚡`,
          title: `供应链的级联脆弱性`,
          text: `RAM 短缺（223 分/240 评论）与溴咽喉点（170 分/78 评论）不是两个独立故事，而是同一条链条的两个断面\u2014\u2014AI 需求膨胀→HBM 产能争夺→DRAM 供给紧缩→韩国晶圆厂依赖以色列溴→中东冲突威胁蚀刻化学品。最刺痛消费者的数据：Steam Deck 断货、PS6 可能延迟到 2029、笔记本涨价 30%。你不需要训练模型就要为 AI 买单。`,
        },
        {
          icon: `🧬`,
          title: `计算本质的复权`,
          text: '七种编程元语言（302 分）、跳表在 BigQuery 约束下的再发明（273 分）、BYTE 杂志存档（548 分）集体指向同一个命题\u2014\u2014当 AI 让"写出代码"变得廉价，"理解计算"反而成了最稀缺的能力。非洲茅屋里煤油灯下读 BYTE 的志愿教师、在 SQL 中编译出 skiptree 的 Antithesis 工程师、追溯七种不可归约的计算思维范式的 madhadron\u2014\u2014他们共享同一个信念：过程即产出，构建即理解。',
        },
      ],
      closing:
        `今日 HN 首页的整体基调可以概括为：AI 正在同时放大技术行业的攻击面、供应链脆弱性和知识空洞\u2014\u2014而极客社区的应对方式是集体回撤到不可被自动化的根基处。`,
    },
  },
};

export function getAllDates(): string[] {
  return Object.keys(data).sort().reverse();
}

export function getDayData(date: string): DayData | undefined {
  return data[date];
}

export default data;