
const bigPictureContainer = document.querySelector('.big-picture');
const smallPictures = document.querySelectorAll('.picture');

smallPictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    bigPictureContainer.classList.remove('hidden');
    bigPictureContainer.querySelector('.big-picture__img img').src = picture.querySelector('.picture__img').src;
  });
});

const closeButton = document.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPictureContainer.classList.add('hidden');
  }
});
