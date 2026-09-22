/* =========================================================
 * 渲染：根据 js/projects.js 中的数据动态生成项目列表
 * （桌面端相邻项目左右交替；项目之间插入「序号 + 分割线」）
 * ========================================================= */

function buildProjectCard(project, index) {
  const color = CATEGORY_COLORS[project.category] || DEFAULT_CATEGORY_COLOR;

  const card = document.createElement("article");
  card.className = "project-card reveal";
  if (index % 2 === 1) card.classList.add("flip");
  card.style.setProperty("--cat", color);

  /* 左侧（或交替后的右侧）大图 */
  const media = document.createElement("div");
  media.className = "project-media";

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.name + " 项目配图";
  img.loading = "lazy";

  const badge = document.createElement("span");
  badge.className = "project-index";
  badge.textContent = String(index + 1).padStart(2, "0");

  media.append(img, badge);

  /* 信息区：类别 / 时间 / 名称 / 简介 / 技术栈 */
  const body = document.createElement("div");
  body.className = "project-body";

  const meta = document.createElement("div");
  meta.className = "project-meta";

  const tag = document.createElement("span");
  tag.className = "tag-category";
  tag.textContent = project.category;

  const date = document.createElement("time");
  date.className = "project-date";
  date.textContent = project.date;

  meta.append(tag, date);

  const name = document.createElement("h3");
  name.className = "project-name";
  name.textContent = project.name;

  /* 项目标题下方的类别标签（浅底色圆角） */
  const titleTag = document.createElement("span");
  titleTag.className = "project-tag";
  titleTag.textContent = "数据可视化";

  const desc = document.createElement("p");
  desc.className = "project-desc";
  desc.textContent = project.desc;

  const tech = document.createElement("ul");
  tech.className = "tech-list";
  project.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    tech.appendChild(li);
  });

  body.append(meta, name, titleTag, desc, tech);
  card.append(media, body);
  return card;
}

function buildDivider(index) {
  const divider = document.createElement("div");
  divider.className = "work-divider";

  const label = document.createElement("b");
  label.textContent = String(index + 1).padStart(2, "0");

  const line = document.createElement("i");
  divider.append(label, line);
  return divider;
}

(function renderProjects() {
  const list = document.getElementById("projectList");
  const frag = document.createDocumentFragment();

  PROJECTS.forEach((project, index) => {
    if (index > 0) frag.appendChild(buildDivider(index));
    frag.appendChild(buildProjectCard(project, index));
  });

  list.appendChild(frag);
  document.getElementById("projectCount").textContent = PROJECTS.length;
})();
