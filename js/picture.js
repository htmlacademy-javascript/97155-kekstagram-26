import { renderBigPicture } from './big-picture.js';
import { getSortElements } from './util.js';

const renderPictures = (picturesData) => {
  // находим шаблон для одной картинки
  const pictureTemplate = document.querySelector('#picture').content;

  // находим блок в который будем выводить все картинки
  const picturesContainer = document.querySelector('.pictures');

  const currentImages = picturesContainer.querySelectorAll('.picture');
  for( let i = 0; i < currentImages.length; i++ ){
    currentImages[i].outerHTML = '';
  }

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

  renderBigPicture(picturesData);

  //показываем фильтры картинок
  const imageFilters = document.querySelector('.img-filters');
  imageFilters.classList.remove('img-filters--inactive');

};

// находим кнопки переключения фильтров
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const setFilterDefaultClick = (cb) => {
  filterDefault.addEventListener('click', () => {
    cb();
  });
};

// по клику на фильтр Случайные очищаем текущий список картинок и генерируем новый список из 10ти случайных
const setFilterRandomClick = (cb) => {
  filterRandom.addEventListener('click', () => {
    cb();
  });
};

// по клику на фильтр Обсуждаемые очищаем текущий список картинок и показываем отсортированные по комментариям
const setFilterDiscussedClick = (cb) => {
  filterDiscussed.addEventListener('click', () => {
    cb();
  });
};


export { renderPictures, setFilterRandomClick, setFilterDiscussedClick, setFilterDefaultClick };
