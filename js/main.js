import { renderPictures } from './picture.js';
import { renderBigPicture } from './big-picture.js';
import { closeUploadModal, setUploadFormSubmit } from './image-upload.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import './image-upload.js';
import './image-upload-scale.js';
import './image-upload-filters.js';

// получаем данные о картинках с сервера
getData((images) => {
  renderPictures(images);
  renderBigPicture(images);
}, showAlert);

setUploadFormSubmit(closeUploadModal);
