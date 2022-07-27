import { renderBigPicture } from './big-picture.js';
import { getRandomInt } from './util.js';

const renderPictures = (picturesData) => {
  // находим шаблон для одной картинки
  const pictureTemplate = document.querySelector('#picture').content;

  // находим блок в который будем выводить все картинки
  const picturesContainer = document.querySelector('.pictures');

  const pictureFragment = document.createDocumentFragment();

  // создает элемент превью картинки
  const getPictureElement = (url, likes, comments) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.appendChild(pictureElement);
  };

  picturesData.forEach(({url, likes, comments}) => {
    getPictureElement(url, likes, comments);
  });

  picturesContainer.appendChild(pictureFragment);

  //показываем фильтры картинок
  const imageFilters = document.querySelector('.img-filters');
  imageFilters.classList.remove('img-filters--inactive');

  const filterRandom = document.querySelector('#filter-random');

  // возвращает массив из 10 случайных картинок
  const getRandomElements = (elements) => {
    const newElements = [];
    for (let i = 1; i <= 10; i++) {
      const currentElement = elements[getRandomInt(0, elements.length - 1)];
      const elementIndex = elements.indexOf(currentElement);
      elements.splice(elementIndex, 1);
      newElements.push(currentElement);
    }
    return newElements;
  };

  // по клику на кнопку фильтра очищаем текущий список картинок из генерируем новый список из 10ти случайных
  filterRandom.addEventListener('click', () => {
    const currentImages = picturesContainer.querySelectorAll('.picture');
    for( let i = 0; i < currentImages.length; i++ ){
      currentImages[i].outerHTML = '';
    }

    const filteredImages = getRandomElements(picturesData);

    renderPictures(filteredImages);
    renderBigPicture(filteredImages);

  });

};

export { renderPictures };
