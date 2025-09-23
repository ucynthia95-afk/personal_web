document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            // 可以選擇性地儲存用戶偏好到 localStorage
            if (body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // 載入時檢查 localStorage 以應用上次的偏好
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }
});
