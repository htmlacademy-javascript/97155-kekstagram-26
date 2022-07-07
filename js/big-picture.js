import { picturesData } from './picture.js';

console.log(picturesData);

const bigPicture = document.querySelector('.big-picture');
const smallPictures = document.querySelectorAll('.picture');
console.log(smallPictures);

smallPictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    bigPicture.querySelector('.big-picture__img img').src = picture.querySelector('.picture__img').src;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__caption').textContent = picture.querySelector('.picture__comments').textContent;
    console.log(picture.querySelector('.picture__likes'));
  });
});

const closeButton = document.querySelector('.big-picture__cancel');
closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
});
