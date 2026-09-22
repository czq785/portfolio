/* =========================================================
 * 深浅色主题：初始化 + 切换 + localStorage 记忆
 * 本文件在 <head> 中同步加载：刷新页面时在渲染前应用上次主题，避免闪烁
 * 主题状态存放在 <html data-theme="light|dark"> 上，颜色变量见 css/base.css
 * ========================================================= */

const THEME_KEY = "theme";

/* 读取上次保存的主题（无记录时默认浅色） */
function getSavedTheme() {
  return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
}

/* 应用主题到 <html>，并同步按钮的无障碍提示 */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.setAttribute("aria-label", theme === "dark" ? "切换到浅色主题" : "切换到深色主题");
  }
}

/* 切换并记住选择 */
function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

/* 立即应用已保存的主题（此时 <body> 尚未渲染） */
applyTheme(getSavedTheme());

/* 按钮在 <body> 中，DOM 就绪后再绑定点击事件 */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("themeToggle");
  if (btn) {
    applyTheme(document.documentElement.dataset.theme);
    btn.addEventListener("click", toggleTheme);
  }
});
