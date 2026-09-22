/* =========================================================
 * 项目数据（扩展点）
 * 新增项目时，只需在 PROJECTS 数组中添加一个对象，页面会自动渲染，
 * HTML 无需改动。
 * 字段说明：
 *   name     项目名称
 *   desc     项目简介
 *   tech     技术栈标签数组
 *   date     完成时间
 *   category 类别（颜色由 CATEGORY_COLORS 映射，未收录的类别自动取默认色）
 *   image    项目配图地址
 * ========================================================= */

const PROJECTS = [
  {
    name: "天气数据可视化面板",
    desc: "这是一个基于天气数据的可视化面板，用户可以在面板上查看当前天气、未来24小时天气预测、历史天气数据等。",
    tech: ["Python", "MySQL", "HTML", "CSS", "JavaScript"],
    date: "2026.09",
    category: "数据可视化",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=big%20data%20analytics%20dashboard%20on%20computer%20monitor%2C%20data%20visualization%20charts%20graphs%20and%20maps%2C%20dark%20blue%20theme%20with%20glowing%20charts%2C%20data%20science%20workspace%2C%20professional%20clean%20UI%20design&image_size=landscape_16_9"
  },
  {
    name: "电商用户行为分析平台",
    desc: "对电商平台用户浏览、加购、下单等行为数据进行分析，通过漏斗模型与留存曲线呈现转化路径，输出经营分析看板。",
    tech: ["Python", "Pandas", "MySQL", "ECharts"],
    date: "2026.06",
    category: "数据分析",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=e-commerce%20user%20behavior%20analytics%20platform%2C%20funnel%20and%20retention%20charts%20on%20laptop%20screen%2C%20warm%20orange%20accents%2C%20modern%20data%20office%20scene%2C%20clean%20UI%20design&image_size=landscape_16_9"
  },
  {
    name: "校园评论情感分析系统",
    desc: "采集校园论坛与课程评价文本，使用机器学习模型进行情感倾向分类，并以词云与正负样本占比图表展示分析结果。",
    tech: ["Python", "Scikit-learn", "Flask", "MySQL"],
    date: "2026.03",
    category: "机器学习",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sentiment%20analysis%20NLP%20interface%2C%20word%20cloud%20and%20positive%20negative%20sentiment%20charts%20on%20screen%2C%20purple%20accents%2C%20modern%20clean%20UI%20design%2C%20data%20science%20theme&image_size=landscape_16_9"
  },
  {
    name: "招聘大数据分析看板",
    desc: "爬取招聘网站的岗位数据，清洗后进行统计分析，呈现岗位需求量、薪资分布与高频技能词频，辅助了解就业市场趋势。",
    tech: ["Python", "PySpark", "MySQL", "ECharts"],
    date: "2025.12",
    category: "大数据开发",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=job%20market%20big%20data%20analytics%20dashboard%2C%20bar%20charts%20and%20salary%20distribution%20graphs%20on%20large%20screen%2C%20teal%20accents%2C%20data%20engineering%20theme%2C%20professional%20UI&image_size=landscape_16_9"
  },
  {
    name: "电影推荐系统",
    desc: "基于用户历史评分数据实现协同过滤推荐算法，为用户生成个性化电影推荐列表，并提供评分预测与热门榜单展示。",
    tech: ["Python", "Pandas", "Flask", "MySQL"],
    date: "2025.10",
    category: "推荐算法",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=movie%20recommendation%20system%20interface%2C%20film%20poster%20grid%20with%20rating%20stars%20on%20screen%2C%20dark%20cinema%20mood%2C%20warm%20accent%20lights%2C%20modern%20clean%20UI%20design&image_size=landscape_16_9"
  }
];

/* 类别 → 强调色映射；未收录类别自动使用默认色 */
const CATEGORY_COLORS = {
  "数据可视化": "#3b82f6",
  "数据分析": "#ff6b35",
  "机器学习": "#8b5cf6",
  "大数据开发": "#10b981",
  "推荐算法": "#f59e0b"
};

const DEFAULT_CATEGORY_COLOR = "#f59e0b";
