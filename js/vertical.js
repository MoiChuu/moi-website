// vertical.js

// DOM
document.addEventListener('DOMContentLoaded', () => {

  // ------------------------
  // 禁止事項
  // ------------------------
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      alert('\u3010默黓\uFF5C版權所有\u3011');
  });

  document.addEventListener('selectstart', function(e) {
      e.preventDefault();
  });

  document.addEventListener('mousedown', function(e) {
      if (e.detail > 1) {
          e.preventDefault();
      }
  });

  // ------------------------
  // 滑鼠滾輪 → 整頁橫向滾動
  // ------------------------
  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    const scrollSpeed = 1;
    window.scrollBy({
      left: -e.deltaY * scrollSpeed,
      behavior: 'auto'
    });
  }, { passive: false });

  // ------------------------
  // 選取文字 copy → 自動附加版權
  // ------------------------
  document.addEventListener('copy', (e) => {
    const selection = window.getSelection();
    if (!selection.toString()) return;
    const selectedText = selection.toString();
    const pageLink = ` ……【注意！文章版權為 默黓 所擁有｜原文網址：${document.location.href}】`;
    e.clipboardData.setData('text/plain', selectedText + pageLink);
    e.preventDefault();
  });

});