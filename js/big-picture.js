const renderBigPicture = (picturesData) => {
  const bigPicture = document.querySelector('.big-picture');
  const smallPictures = document.querySelectorAll('.picture');
  const commentsCount = bigPicture.querySelector('.social__comment-count');
  const allCommentsCount = bigPicture.querySelector('.comments-count');
  const commentsLoader = bigPicture.querySelector('.comments-loader');
  const body = document.querySelector('body');
  const comments = bigPicture.querySelector('.social__comments');
  comments.innerHTML = '';

  // cоздает html код комментария
  const getPhotoComments = (commentsArray) => {
    // comments.innerHTML = '';

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
      comments.innerHTML = '';
      bigPicture.classList.remove('hidden');
      commentsLoader.classList.add('hidden');
      body.classList.add('modal-open');
      bigPicture.querySelector('.big-picture__img img').src = picturesData[index].url;
      bigPicture.querySelector('.likes-count').textContent = picturesData[index].likes;
      allCommentsCount.textContent = picturesData[index].comments.length;
      bigPicture.querySelector('.social__caption').textContent = picturesData[index].description;
      commentsCount.textContent = `${ allCommentsCount.textContent  } из ${  allCommentsCount.textContent  } комментариев`;
      const allComments = picturesData[index].comments;
      const DOWNLOADED_COMMENTS_STEP = 5;
      let DOWNLOADED_COMMENTS_FROM = 0;
      let DOWNLOADED_COMMENTS_TO = 5;
      let SHOWED_COMMENTS_COUNT = 5;
      if (allComments.length > DOWNLOADED_COMMENTS_STEP) {
        commentsCount.textContent = `${ SHOWED_COMMENTS_COUNT  } из ${  allCommentsCount.textContent  } комментариев`;
        getPhotoComments(allComments.slice(DOWNLOADED_COMMENTS_FROM, DOWNLOADED_COMMENTS_TO));
        commentsLoader.classList.remove('hidden');
        commentsLoader.addEventListener('click', () => {
          DOWNLOADED_COMMENTS_FROM += DOWNLOADED_COMMENTS_STEP;
          DOWNLOADED_COMMENTS_TO += DOWNLOADED_COMMENTS_STEP;
          commentsCount.textContent = `${ SHOWED_COMMENTS_COUNT + allComments.slice(DOWNLOADED_COMMENTS_FROM, DOWNLOADED_COMMENTS_TO).length } из ${  allCommentsCount.textContent  } комментариев`;
          SHOWED_COMMENTS_COUNT += DOWNLOADED_COMMENTS_STEP;
          getPhotoComments(allComments.slice(DOWNLOADED_COMMENTS_FROM, DOWNLOADED_COMMENTS_TO));
        });
      } else {
        getPhotoComments(allComments);
      }
    });
  });

  // закрываем модалку по клику на крестик
  const closeButton = document.querySelector('.big-picture__cancel');
  const closeBigPictureModal = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeBigPictureModal);
  };

  closeButton.addEventListener('click', () => {
    closeBigPictureModal();
  });

  // закрываем модалку по нажатию Esc
  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      closeBigPictureModal();
    }
  });
};

export { renderBigPicture };

