document.addEventListener("DOMContentLoaded", function () {
  const point = document.querySelector(".sidebar__left .components");
  const rightListUl = document.querySelector(".sidebar__right ul");
  const rightList = document.querySelector(".sidebar__right");

  let isHovered = false; // Флаг для отслеживания наведения мыши

  point.addEventListener("mouseenter", function () {
    isHovered = true;
    // Добавляем класс для запуска анимации
    rightListUl.classList.add("fade-in-out");

    // Ждем окончания анимации, затем меняем содержимое
    setTimeout(() => {
      rightListUl.innerHTML = `
        <li>Сhutes & Ladders</li>
        <li><a href="/components/components/review.html">Обзор</a></li>
        <li><a href="/components/components/avatar.html">Аватар</a></li>
        <li><a href="/components/components/accordion.html">Аккордеон</a></li>
        <li><a href="/components/components/dropList.html">Выпадающие списки</a></li>
        <li><a href="/components/components/cards.html">Карточки</a></li>
        <li><a href="/components/components/carousel.html">Карусель</a></li>
        <li><a href="/components/components/buttons.html">Кнопки</a></li>
        <li><a href="/components/components/navigation.html">Навигация</a></li>
        <li><a href="/components/components/switch.html">Переключатель</a></li>
        <li><a href="/components/components/input.html" class="active">Поля ввода</a></li>
        <li><a href="/components/components/radio.html">Радиокнопка</a></li>
        <li><a href="/components/components/slider.html">Слайдеры</a></li>
        <li><a href="/components/components/stepper.html">Степпер</a></li>
        <li><a href="/components/components/search.html">Строка поиска</a></li>
        <li><a href="/components/components/checkbox.html">Чекбокс</a></li>
        `;
      // Убираем класс для возможности повторного использования анимации
      rightListUl.classList.remove("fade-in-out");
    }, 500);
  });

  point.addEventListener("mouseleave", function () {
    isHovered = false;
    // Добавляем класс для запуска анимации
    rightListUl.classList.add("fade-in-out");

    // Ждем окончания анимации, затем меняем содержимое
    setTimeout(() => {
      if (!isHovered) {
        rightListUl.innerHTML = `
      <li>Сhutes & Ladders</li>
      <li><a href="/components/decoration/review.html" class="active">Обзор</a></li>
      <li><a href="/components/decoration/layout-grid.html">Макет и сетка</a></li>
      <li><a href="/components/decoration/colors.html">Цветовая система</a></li>
      <li><a href="/components/decoration/typography.html">Типографика</a></li>
      <li><a href="/components/decoration/geometry.html">Геометрия</a></li>
      <li><a href="/components/decoration/icons.html">Иконки</a></li>
`;
      }
      // Убираем класс для возможности повторного использования анимации
      rightListUl.classList.remove("fade-in-out");
    }, 500);
  });

  rightList.addEventListener("mouseenter", function () {
    isHovered = true;
  });

  // Добавляем обработчик событий для возврата изначального содержимого при уходе с sidebar__right
  rightList.addEventListener("mouseleave", function () {
    isHovered = false;

    // Добавляем класс для запуска анимации
    rightListUl.classList.add("fade-in-out");

    // Ждем окончания анимации, затем меняем содержимое
    setTimeout(() => {
      rightListUl.innerHTML = `
      <li>Сhutes & Ladders</li>
      <li><a href="/components/decoration/review.html" class="active">Обзор</a></li>
      <li><a href="/components/decoration/layout-grid.html">Макет и сетка</a></li>
      <li><a href="/components/decoration/colors.html">Цветовая система</a></li>
      <li><a href="/components/decoration/typography.html">Типографика</a></li>
      <li><a href="/components/decoration/geometry.html">Геометрия</a></li>
      <li><a href="/components/decoration/icons.html">Иконки</a></li>
        `;
      // Убираем класс для возможности повторного использования анимации
      rightListUl.classList.remove("fade-in-out");
    }, 500);
  });
});
