// disqus-loader.js
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("loadBtn");

  // 檢查按鈕是否存在，避免網頁出錯
  if (btn) {
    btn.addEventListener("click", function loadDisqus() {
      btn.innerText = "載入中...";
      btn.disabled = true;

      var d = document, s = d.createElement('script');
      s.src = 'https://moichu.disqus.com/embed.js'; // 這裡請記得換回你原本的帳號名稱
      s.setAttribute('data-timestamp', +new Date());

      s.onload = function() {
        btn.style.display = "none";
      };

      (d.head || d.body).appendChild(s);
    });
  }
});