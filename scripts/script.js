/*const globalWishList = 
        'Я люблю себя, я обожаю себя, я без ума от себя;' +
        'Костелей Влад обожает меня, он любит меня больше всего на свете;' +
        'Костелей Влад звонит мне каждую неделю и признаётся мне в любви;' +
        'Мама Костелея Влада позвонила и сообщила мне, что он приехал;' +
        'У меня уже всё есть;' +
        'У меня уже есть iPhone 16 Pro Max;' +
        'У меня уже есть $1000000;' +
        'Я счастлив, я богат, я изобилен;' +
        'Я магнит для денег;' +
        'Я есть изобилие;' +
        'Я каждый день получаю большие суммы денег;' +
        'Я каждый день испытываю экстаз от этой жизни;' +
        'Я каждый день наслаждаюсь этой жизнью;' +
        'Моя жизнь идеальна для меня;' +
        'У меня всё всегда хорошо;' +
        'Я сама божественность;' +
        'Я есть сознание;' +
        'Все мои желания исполняются легко, мгновенно и самым наилучшим для меня образом;' +
        'Всё, что я хочу, всё, что я желаю, всё, к чему я стремлюсь, само и легко идёт ко мне;' +
        'Я всегда получаю всё, что я хочу;' +
        'Всё всегда происходит именно так как я хочу;' +
        'У меня всё всегда получается;' +
        'Вселенная меня любит, она всегда за меня;' +
        'Для меня всё возможно;' +
        'Всё ведёт меня к исполнению моих желаний;' +
        'Моё мышление идеально для создания желаемой реальности прямо здесь и сейчас;' +
        'Я вижу и слышу ангелов;' +
        'Я самый везучий человек во всём мире;' +
        'Мне всегда везёт;' +
        'Со мной случаются только благоприятные события;' +
        'Я встречаю только хороших людей;' +
        'Я всегда нахожусь в нужном месте в нужное время;' +
        'Я источник всего в своей жизни;' +
        'Моя энергия бесконечна;' +
        'Я думаю только хорошие мысли;' +
        'Я самый красивый и самый милый мальчик во всём мире;' +
        'Все обожают находиться рядом со мной;';
*/

const globalWishList = 
    'Позватракать:' +
    'Сходить в парикмахерскую;' +
    'Тыры пыры, пасатижы;' +
    'Можно еще добавить свое дело, там есть кнопка плюсика;';

window.addEventListener('DOMContentLoaded', () => {
    // Проверяем и инициализируем список желаний
    const localWishList = localStorage.getItem('localWishList') || '';
    const wishList = localWishList + globalWishList;

    const localAffirmationsArray = localWishList.split(';').filter(item => item.trim() !== '');
    const listElement = document.querySelector('.list');

    // Функция для рендеринга элементов списка
    function renderListItems() {
        listElement.innerHTML = '';
        const localWishList = localStorage.getItem('localWishList') || '';
        const wishList = localWishList + globalWishList;

        const affirmationsArray = wishList.split(';').filter(item => item.trim() !== '');
        
        affirmationsArray.forEach((el, index) => {
            const itemContainer = document.createElement('div');
            itemContainer.className = 'item-container';
            
            const div = document.createElement('div');
            div.className = 'item';
            div.textContent = el;
            
            const deleteBtn = document.createElement('span');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&minus;'; // Символ минуса
            
            // Обработчик удаления
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                deleteItem(index);
            });
            
            // Обработчик перечеркивания
            div.addEventListener('click', () => {
                div.classList.toggle('dashed');
            });
            
            itemContainer.appendChild(div);
            itemContainer.appendChild(deleteBtn);
            listElement.appendChild(itemContainer);
        });
    }

    // Инициализация списка
    renderListItems();

    // Функция удаления элемента
    function deleteItem(index) {
        // Удаляем из массива
        localAffirmationsArray.splice(index, 1);
        
        // Обновляем localStorage
        localStorage.setItem('localWishList', localAffirmationsArray.join(';') + ';');
        
        // Перерисовываем список
        renderListItems();
    }

    // Создаем модальное окно для добавления элементов
    const modal = document.createElement('div');
    modal.id = 'addModal';
    modal.className = 'modal';
    modal.style.display = 'none';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 class="text-gradient">Добавить желание</h2>
            <textarea id="newItemInput" placeholder="Введите ваше желание..." rows="4"></textarea>
            <button id="submitNewItem" class="text-gradient">Добавить</button>
        </div>
    `;
    
    document.body.appendChild(modal);

    // Элементы модального окна
    const addModal = document.getElementById('addModal');
    const closeBtn = modal.querySelector('.close');
    const submitBtn = modal.querySelector('#submitNewItem');
    const newItemInput = modal.querySelector('#newItemInput');

    // Открытие модального окна
    const addBtn = document.querySelector('#addElement');
    addBtn.addEventListener('click', () => {
        newItemInput.value = '';
        addModal.style.display = 'block';
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        addModal.style.display = 'none';
    });

    // Закрытие при клике вне окна
    window.addEventListener('click', (e) => {
        if (e.target === addModal) {
            addModal.style.display = 'none';
        }
    });

    // Добавление нового элемента
    submitBtn.addEventListener('click', () => {
        const newItemText = newItemInput.value.trim();
        if (newItemText) {
            // Добавляем в массив
            localAffirmationsArray.splice(0, 0, newItemText); // Добавляем в начало
            
            // Обновляем localStorage
            localStorage.setItem('localWishList', localAffirmationsArray.join(';') + ';');
            
            // Перерисовываем список
            renderListItems();
            
            // Закрываем модальное окно
            addModal.style.display = 'none';
        }
    });

    // Обработка кнопки Reset
    const rBtn = document.querySelector('#reset-btn');
    rBtn.addEventListener('click', () => {
        document.querySelectorAll('.item').forEach(item => {
            item.classList.remove('dashed');
        });
    });

    // Контроль размера шрифта
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