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

};

export { renderPictures };
