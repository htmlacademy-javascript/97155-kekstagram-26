import { creatPhotoDescriptions } from './data.js';

// находим шаблон для одной картинки
const pictureTemplate = document.querySelector('#picture').content;

// получаем массив с данными для картинок
const picturesData = creatPhotoDescriptions();

// находим блок в который будем выводить все картинки
const picturesContainer = document.querySelector('.pictures');

const pictureFragment = document.createDocumentFragment();

picturesData.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureFragment);

export { picturesData };
