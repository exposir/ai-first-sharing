export const itinerary = [
  {
    day: 1,
    date: "4月30日",
    weekday: "周三",
    title: "杭州 → 连云港",
    distance: "~500km",
    duration: "约5小时",
    accommodation: "连云港",
    isReturn: false,
    events: [
      { time: "18:00", title: "下班出发", desc: "走长深高速/京沪高速方向，4月30日出发避开5月1日出城高峰。高速费约200元（4/30不免费）但花钱换舒适值得。", highlight: true },
      { time: "23:00", title: "入住连云港", desc: "非热门旅游城市，住宿便宜（200-300元/晚）。推荐住市区，附近有餐饮。如果精力还够，第二天早上可以顺路看花果山。", highlight: false },
    ],
  },
  {
    day: 2,
    date: "5月1日",
    weekday: "周四",
    title: "连云港 → 威海",
    distance: "~450km",
    duration: "约5小时",
    accommodation: "威海",
    isReturn: false,
    events: [
      { time: "07:00", title: "早出发·连云港 → 威海", desc: "走G15沈海+G18荣乌。全程避开了最堵的G20青银高速和G15沈海青岛段。5月1日高速开始免费。", highlight: true },
      { time: "12:00", title: "到达威海，办理入住", desc: "建议住韩乐坊或国际海水浴场附近，吃饭方便、出行方便。下午可以先去国际海水浴场散步。", highlight: false },
      { time: "17:00", title: "小石岛看日落", desc: "威海日落绝美，小石岛是最佳日落观赏点。顺便在附近吃海鲜。", highlight: false },
      { time: "20:00", title: "韩乐坊夜市", desc: "全国最正宗的韩国美食街，烤肉、炸鸡、冷面应有尽有。五一期间非常热闹。", highlight: false },
    ],
  },
  {
    day: 3,
    date: "5月2日",
    weekday: "周五",
    title: "威海深度游",
    distance: "—",
    duration: "环海路+远距离景点",
    accommodation: "威海",
    isReturn: false,
    events: [
      { time: "06:00", title: "租电动车 → 环海路北线", desc: "五一环海路必须骑电动车，不开自己的车。环海路辅线5-10月单向限行，车满封路；火炬八街改步行街车进不去；猫头山停车极难。电动车60-100元/天，韩乐坊附近到处有租。", highlight: true },
      { time: "06:30-09:00", title: "半月湾 → 猫头山 → 火炬八街", desc: "电动车沿环海路走，猫头山2号和3号观景台最值。8点前到火炬八街，趁人少先拍。9点后人开始暴增就撤。", highlight: false },
      { time: "10:00-12:00", title: "回住处休息 / 逛威海公园", desc: "中午最热最挤，避一避。威海公园的大画框雕塑也可以打卡。", highlight: false },
      { time: "13:00", title: "开车出发·那香海 → 布鲁威斯号 → 成山头", desc: "远距离景点换回自己的车。那香海风情万种；布鲁威斯号沉船末世感拉满（荣成方向，距威海60km）；成山头是大陆最东端。", highlight: false },
      { time: "19:00", title: "返回威海市区吃晚饭", desc: "韩乐坊或海鲜市场买海鲜找店加工，物美价廉。", highlight: false },
    ],
  },
  {
    day: 4,
    date: "5月3日",
    weekday: "周六",
    title: "威海 → 青岛",
    distance: "~260km",
    duration: "约3.5小时",
    accommodation: "青岛",
    isReturn: false,
    events: [
      { time: "08:00", title: "退房出发·威海 → 青岛", desc: "走龙青高速S19。不要走威青高速G1813（半幅封闭施工）！龙青高速路况好、车少，是五一威海去青岛的最佳选择。", highlight: true },
      { time: "11:30", title: "到达青岛·城阳下高速 → 停车 → 地铁进城", desc: "不要开车进市区！推荐把车停在青岛北站（1/3/8号线交汇）或李村站（2/3号线换乘），坐地铁进城。", highlight: false },
      { time: "13:00", title: "八大关 + 大学路", desc: "八大关人太多的话，去大学路+鱼山路，同样欧式老建筑但人少一半。鱼山路往下走到海边，一路拍照很出片。", highlight: false },
      { time: "17:00", title: "小麦岛公园看日落", desc: "青岛看日落最佳地点，比栈桥人少得多。坐在草地上看太阳沉入海面。", highlight: false },
      { time: "19:00", title: "台东夜市 / 啤酒街", desc: "青岛啤酒原产地，找个啤酒屋喝原浆。台东夜市小吃种类极多。", highlight: false },
    ],
  },
  {
    day: 5,
    date: "5月4日",
    weekday: "周日",
    title: "青岛深度游",
    distance: "—",
    duration: "栈桥+崂山/城市探索",
    accommodation: "青岛",
    isReturn: false,
    events: [
      { time: "06:30", title: "栈桥 + 天主教堂", desc: "栈桥7点前去，人少。拍完走到天主教堂（浙溪路），拍欧式建筑。这两个点9点后人山人海。", highlight: false },
      {
        time: "09:00-15:00",
        title: "方案A：崂山（5-6小时）/ 方案B：城市漫步",
        desc: "方案A：推荐仰口景区，比南线太清宫人少，山海风光更好。地铁11号线到浦里站打车前往。\n方案B：信号山公园（俯瞰全城红瓦绿树）→ 青岛啤酒博物馆（了解啤酒历史+免费喝）→ 中山公园 → 第一海水浴场。全程可坐地铁和步行。",
        highlight: false,
      },
      { time: "17:00", title: "五四广场灯光秀", desc: "青岛地标「五月的风」雕塑，晚上有灯光秀。人很多但广场够大，能找到位置。", highlight: false },
    ],
  },
  {
    day: 6,
    date: "5月5日",
    weekday: "周一",
    title: "青岛 → 杭州（返程）",
    distance: "~830km",
    duration: "10-12小时",
    accommodation: "—",
    isReturn: true,
    events: [
      { time: "05:00", title: "凌晨出发·青岛城阳 → 杭州", desc: "从停车点取车，走城阳上高速。凌晨车少，争取在9点前通过山东段最堵的区域。", highlight: true },
      { time: "07:00", title: "连云港服务区休息", desc: "已开约2小时，加油、上洗手间、活动筋骨。", highlight: false },
      { time: "10:00", title: "淮安/盐城服务区休息", desc: "再开2-3小时，江苏段基本通畅，午饭后精神会下降，这里多休息一会。", highlight: false },
      { time: "15:00-17:00", title: "到达杭州", desc: "下午到杭州比傍晚好，避开进城晚高峰。安全到家就是胜利。", highlight: false },
    ],
  },
];

export const trafficHotspots = [
  { rank: 1, road: "G20青银高速 济青段", cause: "大车多+部分施工+进城咽喉", severity: "极堵" as const, bypass: "走G22青兰高速（济青南线）" },
  { rank: 2, road: "G15沈海高速 泊里→王台", cause: "青岛南进城必经+施工封闭", severity: "极堵" as const, bypass: "日照转G22青兰高速进城" },
  { rank: 3, road: "杭州出城段", cause: "5/1出城高峰9-13时", severity: "很堵" as const, bypass: "4/30晚出发或5/1早6点前" },
  { rank: 4, road: "G1813威青高速", cause: "半幅封闭施工借道", severity: "较堵" as const, bypass: "走龙青高速S19" },
  { rank: 5, road: "5/5返程全线", cause: "返程高峰车流巨大", severity: "极堵" as const, bypass: "凌晨5点出发" },
];

export const weihaiTrafficRules = [
  { color: "red", title: "火炬八街", desc: "5月1日-10月31日改为步行街，机动车禁止通行。车停附近走进去。" },
  { color: "orange", title: "环海路辅线", desc: "5月-10月每天6:00-20:00单向通行，车满时禁止机动车驶入。" },
  { color: "orange", title: "猫头山", desc: "停车位从100个扩到500个，但五一早上9点前就满。建议骑电动车去。" },
];

export const qingdaoParking = [
  { name: "青岛北站", lines: "1/3/8号线", time: "20-30分钟", note: "最推荐，三线交汇枢纽", recommended: true },
  { name: "李村站", lines: "2/3号线", time: "15-20分钟", note: "商场停车场多", recommended: false },
  { name: "城阳站附近", lines: "1号线", time: "35-45分钟", note: "距高速出口近，停车便宜", recommended: false },
];

export const weihaiSpots = [
  { rank: 1, name: "猫头山观景台", tag: "必去", tagType: "red" as const, desc: "环海路精华，悬崖+大海的震撼画面。2号观景台经典但人多，3号观景台人少景更野。", location: "环海路辅线", time: "建议6:00-8:00", transport: "电动车前往" },
  { rank: 2, name: "火炬八街", tag: "网红", tagType: "orange" as const, desc: "「威海小镰仓」——上坡路尽头转角遇大海，像《灌篮高手》场景。5-10月改为步行街。", location: "高区环海路丁字路口", time: "建议7:00-9:00", transport: "步行进入" },
  { rank: 3, name: "布鲁威斯号", tag: "必去", tagType: "red" as const, desc: "搁浅货船配海岸线，末世孤舟意境感。小红书1175万次浏览，威海最出片的地方。", location: "荣成市", time: "距威海60km", transport: "开车前往，阴天也有氛围感" },
  { rank: 4, name: "那香海", tag: "休闲", tagType: "blue" as const, desc: "风车+沙滩+海浪三重画面，度假感十足。沿途的环海路风景也很美。", location: "荣成市", time: "距威海40km", transport: "开车前往，沙细水清" },
  { rank: 5, name: "成山头", tag: "选去", tagType: "blue" as const, desc: "大陆最东端，「中国好望角」。日出绝美但五一未必能4点起来。门票约170元略贵。", location: "荣成市最东端", time: "距威海70km", transport: "门票约170元" },
];

export const qingdaoSpots = [
  { rank: 1, name: "八大关", tag: "必去", tagType: "red" as const, desc: "红瓦绿树万国建筑群，青岛标志性景点。花石楼、公主楼必看。五一游客极多，早8点前去体验最好。", location: "市南区", time: "建议7:00-9:00或16:00-18:00", transport: "地铁3号线太平角公园站" },
  { rank: 2, name: "小麦岛公园", tag: "五一优选", tagType: "green" as const, desc: "比栈桥人少得多的海边公园，草地+大海+日落。坐在坡上听海浪，非常舒服。", location: "崂山区", time: "傍晚看日落最佳", transport: "地铁2号线麦岛站" },
  { rank: 3, name: "大学路 + 鱼山路", tag: "五一优选", tagType: "green" as const, desc: "同样是欧式老建筑和红墙，但比八大关人少一半。大学路网红墙打卡，往下走到海边一路出片。", location: "市南区", time: "白天均可", transport: "地铁3/4号线人民会堂站" },
  { rank: 4, name: "栈桥", tag: "网红但挤", tagType: "orange" as const, desc: "青岛标志，五一必然人山人海。如果要去，务必7点前去。不去也不会遗憾——远观即可。", location: "市南区", time: "必须7点前", transport: "地铁3号线青岛站" },
  { rank: 5, name: "崂山", tag: "选去", tagType: "blue" as const, desc: "海上名山。推荐仰口景区（人少景好），避开南线太清宫（人太多）。地铁11号线到浦里站打车。", location: "崂山区", time: "半天", transport: "仰口门票约90元" },
];

export const qingdaoAlternatives = [
  { original: "栈桥", alternative: "远观拍照即可，或去小麦岛" },
  { original: "八大关", alternative: "大学路+鱼山路，同样老建筑人少一半" },
  { original: "崂山太清宫", alternative: "仰口景区，山海风光更好" },
  { original: "五四广场白天", alternative: "傍晚去，看灯光秀" },
  { original: "第一海水浴场", alternative: "石老人海水浴场，人少沙细" },
];

export const tips = {
  traffic: ["5/1早上9-12点出杭州必堵，提前出发是唯一解", "G20青银济青段是「山东第一堵」，走G22青兰替代", "威青高速G1813施工半封闭，选龙青S19", "返程5/5下午全山东高速大堵，凌晨出发", "青岛市区不开车，停外面坐地铁"],
  accommodation: ["五一住宿翻2-3倍，现在立刻预订", "威海住韩乐坊或海水浴场附近，别住太偏", "青岛住地铁沿线（2/3号线），不住景区内", "连云港/淮安中途住宿200-300元，别花冤枉钱", "民宿比酒店更容易踩雷，看真实评价再订"],
  playing: ["威海环海路五一不开自己的车，必须租电动车", "火炬八街9点后挤到无法拍照，7点前去", "布鲁威斯号阴天效果反而更好，别因为阴天不去", "崂山别去太清宫线（人挤人），选仰口", "栈桥远观即可，不值得挤进去"],
  seafood: ["景区门口海鲜店普遍贵且一般，多走两步", "市场买海鲜找店加工比直接点菜便宜一半", "青岛啤酒认准「一厂原浆」，不是所有店都正宗", "威海韩乐坊性价比最高，别在景区吃韩餐", "海鲜过敏的朋友提前备好药"],
  safety: ["五一高速每2小时必须进服务区休息", "春夏交替易犯「春困」，红牛/咖啡备好", "电动车环海路注意防晒+头盔", "海边礁石湿滑，拍照注意安全", "车内不要放贵重物品，服务区停车选有灯光的位置"],
  mindset: ["五一去哪都人多，不要指望空旷大片", "见到堵车别焦虑，堵就堵了，心态放平", "景点如果太挤，换个地方就是了，不强求", "拍到一张满意的照片就是赚到", "旅途的意义是和谁一起，不是去了哪"],
};

export const costs = {
  transport: [
    { item: "油费（全程~1600km）", cost: "~800元" },
    { item: "高速费（4/30段）", cost: "~200元" },
    { item: "5/1-5/5高速", cost: "免费" },
    { item: "青岛停车费（2天）", cost: "~100元" },
    { item: "电动车租赁（1天）", cost: "~80元" },
  ],
  accommodation: [
    { item: "连云港（1晚）", cost: "200-300元" },
    { item: "威海（2晚）", cost: "500-800元/晚" },
    { item: "青岛（2晚）", cost: "600-1000元/晚" },
  ],
  tickets: [
    { item: "猫头山/火炬八街/环海路", cost: "免费", total2: "0元" },
    { item: "布鲁威斯号", cost: "免费", total2: "0元" },
    { item: "八大关", cost: "免费（花石楼8.5元）", total2: "~17元" },
    { item: "崂山仰口", cost: "~90元/人", total2: "~180元" },
    { item: "青岛啤酒博物馆", cost: "~60元/人", total2: "~120元" },
    { item: "信号山公园", cost: "~15元/人", total2: "~30元" },
    { item: "成山头（选去）", cost: "~170元/人", total2: "~340元" },
  ],
  summary: [
    { level: "经济型", perPerson: "~2500元", color: "green" },
    { level: "舒适型", perPerson: "~3500元", color: "orange" },
    { level: "豪华型", perPerson: "~5000+元", color: "red" },
  ],
};

export const packingEssential = [
  "身份证、驾驶证、行驶证",
  "手机充电器 + 车载充电器",
  "防晒霜（海边紫外线强）",
  "墨镜 + 遮阳帽",
  "薄外套（海风吹起来凉）",
  "舒适运动鞋（走路多）",
  "车载导航/手机支架",
  "矿泉水 + 干粮（高速必备）",
];

export const packingOptional = [
  "拖鞋/沙滩鞋（踩沙踩水）",
  "相机或手机稳定器（拍大片）",
  "充气颈枕（长途驾驶）",
  "晕车药（海上项目/环海路蜿蜒）",
  "肠胃药（吃海鲜防不适应）",
  "湿巾/纸巾（海边用）",
  "塑料袋（放湿衣服/沙子）",
  "红牛/咖啡（防疲劳驾驶）",
];