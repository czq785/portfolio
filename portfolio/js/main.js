/* =========================================================
 * 页面交互：移动端抽屉菜单 / 导航高亮（scroll-spy）/ 滚动淡入
 * ========================================================= */

/* ---------- 移动端抽屉菜单 ---------- */
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const drawerClose = document.getElementById("drawerClose");

function setMenu(open) {
  sidebar.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
  document.body.classList.toggle("no-scroll", open);
}

menuBtn.addEventListener("click", () => setMenu(!sidebar.classList.contains("open")));
overlay.addEventListener("click", () => setMenu(false));
drawerClose.addEventListener("click", () => setMenu(false));

/* 点击导航项后收起抽屉（桌面端无副作用） */
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => setMenu(false));
});

/* ---------- 导航高亮：滚动时右侧区块对应左栏导航项 ---------- */
const sections = Array.from(document.querySelectorAll(".main section[id]"));
const navLinks = Array.from(document.querySelectorAll(".nav a"));

function updateActiveNav() {
  const pos = window.scrollY + window.innerHeight * 0.35;
  let current = sections[0].id;
  sections.forEach(section => {
    if (section.offsetTop <= pos) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

document.addEventListener("scroll", () => requestAnimationFrame(updateActiveNav), { passive: true });
updateActiveNav();

/* ---------- 滚动淡入 ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ---------- 页脚年份 ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
