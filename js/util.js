const ALERT_SHOW_TIME = 5000;

// Возвращает рандомное число из указанного интервала включительно
function getRandomInt(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверяет умещается ли строка в указанный лимит символов
// eslint-disable-next-line no-unused-vars
function checkStringLength(string, limit) {
  return string.length <= limit;
}
// выводит информационное сообщение
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

// возвращает массив из 10 случайных картинок
const getRandomElements = (elements) => {
  const elementsCopy = elements.slice();
  const newElements = [];
  for (let i = 1; i <= 10; i++) {
    const currentElement = elementsCopy[getRandomInt(0, elementsCopy.length - 1)];
    const elementIndex = elementsCopy.indexOf(currentElement);
    elementsCopy.splice(elementIndex, 1);
    newElements.push(currentElement);
  }
  return newElements;
};

// сортирует переданный массив в порядке убывания количества комментариев
const getSortElements = (elements) => {
  const newElements = elements.slice();
  newElements.sort((element1, element2) => {
    if (element1.comments.length < element2.comments.length) {
      return 1;
    }
    if (element1.comments.length > element2.comments.length) {
      return -1;
    }
    return 0;
  });
  return newElements;
};

// выделяет активный фильтр
const getActiveFilter = () => {
  const filterDefault = document.querySelector('#filter-default');
  const filterRandom = document.querySelector('#filter-random');
  const filterDiscussed = document.querySelector('#filter-discussed');
  const filtersForm = document.querySelector('.img-filters__form');

  filtersForm.addEventListener('click', (evt) => {
    filterDefault.className = 'img-filters__button';
    filterRandom.className = 'img-filters__button';
    filterDiscussed.className = 'img-filters__button';
    evt.target.classList.add('img-filters__button--active');
  });
};


// функция для устранения дребезга
function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { getRandomInt, showAlert, getRandomElements, getSortElements, getActiveFilter, debounce };


