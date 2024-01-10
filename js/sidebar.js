document.addEventListener("DOMContentLoaded", function () {
  const leftSide = document.querySelector(".sidebar__left");
  const rightList = document.querySelector(".sidebar__right ul");

  let currentList = "default"; // Состояние текущего списка
  let previousList = "default"; // Состояние предыдущего списка

  leftSide.addEventListener("mouseenter", function (event) {
    const target = event.target;

    // if (target.classList.contains("components")) {
      // Сохраняем предыдущий список
      previousList = currentList;
      console.log('components');
      // Определяем новый список в зависимости от элемента, на который наведен курсор
      if (target.innerText.includes("Компоненты")) {
        currentList = "components";
        console.log('components');
      } else if (target.innerText.includes("Оформление")) {
        currentList = "decoration";
        console.log('decoration');
      }

      // Если текущий список отличается от предыдущего, меняем содержимое и показываем
      if (currentList !== previousList) {
        // Добавляем класс для запуска анимации
        rightList.classList.add("fade-in-out");

        // Ждем окончания анимации, затем меняем содержимое и показываем список
        setTimeout(() => {
          // Изменяем содержимое в соответствии с текущим списком
          if (currentList === "components") {
            rightList.innerHTML = `
            <li><a href="/components/components/review.html">Обзор</a></li>
            <li><a href="/components/components/avatar.html">Аватар</a></li>
            <li><a href="/components/components/accordion.html">Аккордеон</a></li>
            <li><a href="/components/components/dropList.html">Выпадающие списки</a></li>
            <li><a href="/components/components/cards.html">Карточки</a></li>
            <li><a href="/components/components/carousel.html" class="active">Карусель</a></li>
            <li><a href="/components/components/buttons.html">Кнопки</a></li>
            <li><a href="/components/components/navigation.html">Навигация</a></li>
            <li><a href="/components/components/switch.html">Переключатель</a></li>
            <li><a href="/components/components/input.html">Поля ввода</a></li>
            <li><a href="/components/components/radio.html">Радиокнопка</a></li>
            <li><a href="/components/components/slider.html">Слайдеры</a></li>
            <li><a href="/components/components/stepper.html">Степпер</a></li>
            <li><a href="/components/components/search.html">Строка поиска</a></li>
            <li><a href="/components/components/checkbox.html">Чекбокс</a></li>

            `;
          } else if (currentList === "decoration") {
            rightList.innerHTML = `
            <li><a href="/components/decoration/review.html" class="active">Обзор</a></li>
            <li><a href="/components/decoration/layout-grid.html">Макет и сетка</a></li>
            <li><a href="/components/decoration/colors.html">Цветовая система</a></li>
            <li><a href="/components/decoration/typography.html">Типографика</a></li>
            <li><a href="/components/decoration/geometry.html">Геометрия</a></li>
            <li><a href="/components/decoration/icons.html">Иконки</a></li>
            `;
          }

          // Убираем класс для возможности повторного использования анимации
          rightList.classList.remove("fade-in-out");
        }, 500);
      }
    // }
  });

  // Добавляем обработчик событий для сохранения предыдущего списка при наведении на rightList
  rightList.addEventListener("mouseenter", function () {
    previousList = currentList;
  });

  // Добавляем обработчик событий для возврата предыдущего списка при уходе с rightList
  rightList.addEventListener("mouseleave", function () {
    // Если ушли с rightList, возвращаем предыдущий список
    currentList = previousList;

    // Если текущий список отличается от предыдущего, меняем содержимое и показываем
    if (currentList !== previousList) {
      // Добавляем класс для запуска анимации
      rightList.classList.add("fade-in-out");

      // Ждем окончания анимации, затем меняем содержимое и показываем список
      setTimeout(() => {
        // Изменяем содержимое в соответствии с текущим списком
        if (currentList === "components") {
          rightList.innerHTML = `
          <li><a href="/components/components/review.html">Обзор</a></li>
          <li><a href="/components/components/avatar.html">Аватар</a></li>
          <li><a href="/components/components/accordion.html">Аккордеон</a></li>
          <li><a href="/components/components/dropList.html">Выпадающие списки</a></li>
          <li><a href="/components/components/cards.html">Карточки</a></li>
          <li><a href="/components/components/carousel.html" class="active">Карусель</a></li>
          <li><a href="/components/components/buttons.html">Кнопки</a></li>
          <li><a href="/components/components/navigation.html">Навигация</a></li>
          <li><a href="/components/components/switch.html">Переключатель</a></li>
          <li><a href="/components/components/input.html">Поля ввода</a></li>
          <li><a href="/components/components/radio.html">Радиокнопка</a></li>
          <li><a href="/components/components/slider.html">Слайдеры</a></li>
          <li><a href="/components/components/stepper.html">Степпер</a></li>
          <li><a href="/components/components/search.html">Строка поиска</a></li>
          <li><a href="/components/components/checkbox.html">Чекбокс</a></li>
`;
        } else if (currentList === "decoration") {
          rightList.innerHTML = `
          <li><a href="/components/decoration/review.html" class="active">Обзор</a></li>
          <li><a href="/components/decoration/layout-grid.html">Макет и сетка</a></li>
          <li><a href="/components/decoration/colors.html">Цветовая система</a></li>
          <li><a href="/components/decoration/typography.html">Типографика</a></li>
          <li><a href="/components/decoration/geometry.html">Геометрия</a></li>
          <li><a href="/components/decoration/icons.html">Иконки</a></li>
          `;
        }

        // Убираем класс для возможности повторного использования анимации
        rightList.classList.remove("fade-in-out");
      }, 500);
    }
  });
});
