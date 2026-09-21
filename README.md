# 个人作品集网站

基于原生 HTML / CSS / JavaScript 的单页个人作品集，展示个人信息、项目作品与联系方式。

## 主要功能

- **内容展示**：首页 Hero、项目作品列表（5 个项目）、关于我、联系方式，数据由 `js/projects.js` 提供，`js/render.js` 动态渲染
- **深浅色主题切换**：页面右上角按钮一键切换，主要背景、文字、边框颜色同步变化；选择通过 `localStorage` 记忆，刷新后保持（`js/theme.js` + CSS 变量实现）
- **移动端适配**：≤900px 时切换为抽屉式导航，主题按钮与菜单按钮并排固定右上角
- **平滑交互**：锚点平滑滚动、卡片悬停效果、区块进入渐显动画

## 技术栈

- 原生 HTML5 / CSS3 / JavaScript（ES6+），无框架、无第三方库
- CSS 自定义属性（变量）实现主题化配色
- `localStorage` 存储用户主题偏好
- 模块化拆分：结构（HTML）、布局/组件/基础样式（CSS）、数据/渲染/交互（JS）分离

## 运行方式

纯静态站点，无需安装依赖和构建，任选其一：

1. 直接用浏览器打开 `index.html`；
2. 或启动本地服务器后访问：

```bash
python -m http.server 8899
# 浏览器访问 http://localhost:8899
```

## 目录结构

```
portfolio/
├── index.html          # 页面结构
├── css/
│   ├── base.css        # 重置样式、主题变量（浅色默认 + 深色覆盖）
│   ├── layout.css      # 左侧边栏 + 主内容区布局、响应式
│   └── components.css  # 按钮、项目卡片、主题切换等组件样式
└── js/
    ├── projects.js     # 项目数据
    ├── render.js       # 项目列表渲染
    ├── main.js         # 移动端菜单、滚动动画等交互
    └── theme.js        # 主题切换与 localStorage 记忆
```
