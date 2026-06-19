// main.js

//後台彩蛋
console.log(
    "%c🧙‍♀️ 魔女通常不接待訪客", 
    "color: #b7c4d6; background: #0a0f1c; padding: 10px 18px; border-radius: 8px; font-size: 18px; font-weight: bold; border: 1px solid #9f7aea;"
);
console.log("%c【默黓｜版權所有】不過既然你來了，就隨意看看吧✨", "color: #b3b3cc; font-size: 13px;");

//右鍵浮動警告
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // 攔截預設的右鍵選單
    
    // 建立小浮窗
    const toast = document.createElement('div');
    toast.innerText = "有些故事不喜歡被驚醒";
    
    // 浮窗樣式
    Object.assign(toast.style, {
        position: 'fixed',
        left: `${e.clientX + 10}px`,
        top: `${e.clientY + 10}px`,
        background: 'rgba(10, 15, 28, .95)',
        color: '#6d93c5',
        padding: '10px 18px',
        borderRadius: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        border: '1px solid #6d93c5',
        boxShadow: '0 0 12px rgba(44, 72, 143, .15)',
        zIndex: '99999',
        pointerEvents: 'none', // 確保不會干擾滑鼠點擊
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        transform: 'translateY(0)'
    });
    
    document.body.appendChild(toast);
    
    // 微動效：讓浮窗微微向上飄移並淡出
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-10px)';
        // 動畫結束後徹底移除元素，不殘留垃圾記憶體
        setTimeout(() => toast.remove(), 600);
    }, 1000);
});


//再亂複製啊
document.addEventListener('copy', function(e) {
    // 取得使用者本來圈選的文字
    const selection = window.getSelection();
    const selectedText = selection.toString();
    
    // 如果使用者真的有選到字才進行修改（避免空白複製也觸發）
    if (selectedText.trim().length > 0) {
        e.preventDefault(); // 攔截預設的複製內容
        
        // 建立自動追加的版權尾巴
        const copyrightTail = 
`

魔女對文字的去向並不特別在意。
只是那些被偷偷帶走的句子，總會固執地想把原作者的名字一起帶上。

出處：
${document.title}
${window.location.href}

作者名稱：默黓
作者主站：默黓的記憶櫥窗
${window.location.origin}

【默黓版權所有｜轉載請註明出處】`;

        // 整合原本的文字與版權尾巴，強制塞進使用者的剪貼簿
        e.clipboardData.setData('text/plain', selectedText + copyrightTail);
    }
});

//基礎選取限制
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('mousedown', function(e) {
    if (e.detail > 1) {
        e.preventDefault();
    }
});