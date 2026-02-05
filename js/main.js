// main.js

// 禁止
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