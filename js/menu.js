// menu.js

// 定義目錄
let currentMenu = null;

document.querySelectorAll(".menu-item.has-sub .main-menu").forEach(btn => {
  btn.addEventListener("click", () => {
    const menuItem = btn.parentElement;

    if (currentMenu && currentMenu !== menuItem) {
      currentMenu.classList.remove("open");
    }

    menuItem.classList.toggle("open");

    currentMenu = menuItem.classList.contains("open") ? menuItem : null;
  });
});