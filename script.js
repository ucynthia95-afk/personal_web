```javascript
document.addEventListener('DOMContentLoaded', () => {
    // 獲取需要操作的 DOM 元素
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // 檢查使用者是否有偏好的模式設定 (可選功能，提升體驗)
    // const currentTheme = localStorage.getItem('theme');
    // if (currentTheme === 'light') {
    //     bodyElement.classList.add('light-mode');
    // }

    // 為模式切換按鈕添加點擊事件監聽器
    themeToggleButton.addEventListener('click', () => {
        // 使用 classList.toggle() 來新增/移除 'light-mode' class
        bodyElement.classList.toggle('light-mode');

        // 將使用者的選擇存儲在 localStorage (可選功能)
        // let theme = 'dark';
        // if (bodyElement.classList.contains('light-mode')) {
        //     theme = 'light';
        // }
        // localStorage.setItem('theme', theme);
    });
});
