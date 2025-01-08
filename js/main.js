document.addEventListener('DOMContentLoaded', function() {
    const swipeHeader = document.querySelector('.swipe_header_main');
    const btnSwipe = document.querySelector('.btn_swipe');
    const headerMain = document.querySelector('.header_main');

    // Функция для скрытия блока с плавным исчезновением
    function hideSwipeHeader() {
        swipeHeader.style.transition = 'transform 0.6s ease-out';
        swipeHeader.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            swipeHeader.style.display = 'none';
        }, 300); // Устанавливаем display none после анимации
    }

    // Функция для отображения блока с плавным появлением
    function showSwipeHeader() {
        swipeHeader.style.display = 'flex';
        swipeHeader.style.transform = 'translateY(-100%)'; // Начальное положение
        setTimeout(() => {
            swipeHeader.style.transition = 'transform 0.6s ease-out';
            swipeHeader.style.transform = 'translateY(0)'; // Плавный возврат вниз
        }, 10);
    }

    // Обработчик скролла
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            hideSwipeHeader(); // Скролл вниз
            headerMain.style.position = 'fixed';
            headerMain.style.top = '0';
            headerMain.style.width = '100%';
            headerMain.style.zIndex = '1000';
            headerMain.style.height = '45px';
        } else {
            if (scrollTop === 0) {
                showSwipeHeader(); // Показать при скролле вверх до верха
                headerMain.style.position = 'relative';
                headerMain.style.height = 'auto';
            }
        }
        lastScrollTop = scrollTop;
    });

    // Обработчик нажатия на кнопку
    btnSwipe.addEventListener('click', function() {
        hideSwipeHeader();
    });
});