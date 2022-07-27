const renderBigPicture = (picturesData) => {
  const bigPicture = document.querySelector('.big-picture');
  const smallPictures = document.querySelectorAll('.picture');
  const commentsCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const body = document.querySelector('body');
  const comments = bigPicture.querySelector('.social__comments');

  // cоздает html код комментария
  const getPhotoComments = (commentsArray) => {
    comments.innerHTML = '';
    for (let i = 0; i < commentsArray.length; i++) {
      const comment = document.createElement('li');
      comment.classList.add('social__comment');
      const commentAvatar = document.createElement('img');
      commentAvatar.classList.add('social__picture');
      commentAvatar.src = commentsArray[i].avatar;
      commentAvatar.alt = commentsArray[i].name;
      commentAvatar.width = 35;
      commentAvatar.height = 35;
      comment.appendChild(commentAvatar);
      const commentMessage = document.createElement('p');
      commentMessage.classList.add('social__text');
      commentMessage.textContent = commentsArray[i].message;
      comment.appendChild(commentMessage);
      comments.appendChild(comment);
    }
  };


  // при клике на маленькую картинку, заполняем данными модалку с большой картинкой
  smallPictures.forEach((picture, index) => {
    picture.addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
      commentsCount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      body.classList.add('modal-open');
      bigPicture.querySelector('.big-picture__img img').src = picturesData[index].url;
      bigPicture.querySelector('.likes-count').textContent = picturesData[index].likes;
      bigPicture.querySelector('.comments-count').textContent = picturesData[index].comments.length;
      bigPicture.querySelector('.social__caption').textContent = picturesData[index].description;
      getPhotoComments(picturesData[index].comments);
    });
  });

  // закрываем модалку по клику на крестик
  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  // закрываем модалку по нажатию Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });

};

export { renderBigPicture };

