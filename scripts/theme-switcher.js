/* ==================== */
/* About theme-switcher.js */
// All u need is to just copy that code and paste into ur own file. Just add ur own variables into applyLightTheme & applyDarkTheme and then use them in ur css code
// That IS EASY
/* ==================== */

/*
    HTML:

    <div class="theme-switcher">
        <input type="checkbox" id="themeToggle" class="theme-toggle">
        <label for="themeToggle" class="theme-label">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <span class="theme-ball"></span>
        </label>
    </div>
*/

// Переключение темы
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    applyLightTheme();
    themeToggle.checked = true;
} else {
    applyDarkTheme();
}

// Обработчик переключения
themeToggle.addEventListener('change', function () {
    if (this.checked) {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
});

function applyLightTheme() {
    root.style.setProperty('--theme-bg', '#F5F0E6');
    root.style.setProperty('--theme-font', '#5A4A3A');
    root.style.setProperty('--theme-container', '#FFF8F0');
    root.style.setProperty('--theme-input-bg', 'rgba(154, 128, 84, 0.1)');
    root.style.setProperty('--theme-border', '#9A8054');
}

function applyDarkTheme() {
    root.style.setProperty('--theme-bg', '#121212');
    root.style.setProperty('--theme-font', '#D2B48C');
    root.style.setProperty('--theme-container', 'rgba(0, 0, 0, 0.7)');
    root.style.setProperty('--theme-input-bg', 'rgba(210, 180, 140, 0.1)');
    root.style.setProperty('--theme-border', '#D2B48C');
}