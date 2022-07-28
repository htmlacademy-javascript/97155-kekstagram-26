import { renderPictures } from './picture.js';
import { renderBigPicture } from './big-picture.js';
import { closeUploadModal, setUploadFormSubmit } from './image-upload.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import './image-upload.js';
import './image-upload-scale.js';
import './image-upload-filters.js';

import { getRandomInt } from './util.js';

const picturesContainer = document.querySelector('.pictures');

// получаем данные о картинках с сервера
getData((images) => {
  renderPictures(images);
  renderBigPicture(images);
}, showAlert);

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
  const elementsCopy = elements.slice();
  elementsCopy.sort((element1, element2) => {
    if (element1.comments.length < element2.comments.length) {
      return 1;
    }
    if (element1.comments.length > element2.comments.length) {
      return -1;
    }
    return 0;
  });
  return elementsCopy;
};

// находим кнопки переключения фильтров
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

// по клику на фильтр Случайные очищаем текущий список картинок и генерируем новый список из 10ти случайных
filterRandom.addEventListener('click', () => {
  const currentImages = picturesContainer.querySelectorAll('.picture');
  for( let i = 0; i < currentImages.length; i++ ){
    currentImages[i].outerHTML = '';
  }

  const filteredImages = getRandomElements(getData());

  renderPictures(filteredImages);
  renderBigPicture(filteredImages);

});

// по клику на фильтр Обсуждаемые очищаем текущий список картинок и показываем отсортированные по комментариям
filterDiscussed.addEventListener('click', () => {
  const currentImages = picturesContainer.querySelectorAll('.picture');
  for( let i = 0; i < currentImages.length; i++ ){
    currentImages[i].outerHTML = '';
  }

  const filteredImages = getSortElements(getData());

  renderPictures(filteredImages);
  renderBigPicture(filteredImages);

});

setUploadFormSubmit(closeUploadModal);
