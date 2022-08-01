import { renderPictures } from './picture.js';
import { setFilterRandomClick } from './picture.js';
import { setFilterDiscussedClick } from './picture.js';
import { setFilterDefaultClick } from './picture.js';
import { closeUploadModal, setUploadFormSubmit } from './image-upload.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import './image-upload.js';
import './image-upload-scale.js';
import './image-upload-filters.js';
import './image-from-user.js';
import './image-upload-messages.js';
import { getRandomElements } from './util.js';
import { getSortElements } from './util.js';
import { getActiveFilter } from './util.js';
import { debounce } from './util.js';

const TIMEOUT_DELAY = 500;

// получаем данные о картинках с сервера
getData((images) => {
  renderPictures(images);
  setFilterDefaultClick(debounce(() => renderPictures(images), TIMEOUT_DELAY));
  setFilterRandomClick(debounce(() => renderPictures(getRandomElements(images)), TIMEOUT_DELAY));
  setFilterDiscussedClick(debounce(() => renderPictures(getSortElements(images)), TIMEOUT_DELAY));
}, showAlert);

setUploadFormSubmit(closeUploadModal);
getActiveFilter();
