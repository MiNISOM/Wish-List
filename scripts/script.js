window.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.wish-list .item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('dashed')) {
                item.classList.remove('dashed');
            } else {
                item.classList.add('dashed');
            }
        });
    });

    const rBtn = document.querySelector('#reset-btn');
    rBtn.addEventListener('click', () => {
        items.forEach(item => {
            item.classList.remove('dashed');
        });
    });

    const fontSizeSlider = document.getElementById('fontSizeSlider');
    const fontSizeValue = document.getElementById('fontSizeValue');
    const listItems = document.querySelectorAll('.list');
    
    // Загружаем сохраненный размер шрифта
    const savedFontSize = localStorage.getItem('wishListFontSize');
    if (savedFontSize) {
        fontSizeSlider.value = savedFontSize;
        fontSizeValue.textContent = savedFontSize + 'px';
        applyFontSize(savedFontSize);
    }
    
    // Обработчик изменения слайдера
    fontSizeSlider.addEventListener('input', function() {
        const size = this.value + 'px';
        fontSizeValue.textContent = size;
        applyFontSize(size);
        
        // Сохраняем в localStorage
        localStorage.setItem('wishListFontSize', this.value);
    });
    
    // Функция применения размера шрифта
    function applyFontSize(size) {
        listItems.forEach(item => {
            item.style.fontSize = size;
        });
    }
});