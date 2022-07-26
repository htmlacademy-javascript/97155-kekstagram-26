import { renderPictures } from './picture.js';
import { renderBigPicture } from './big-picture.js';
import './image-upload.js';
import './image-upload-scale.js';
import './image-upload-filters.js';


fetch('https://26.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((images) => {
    renderPictures(images);
    renderBigPicture(images);
  });
