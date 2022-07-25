import { imagePreview } from './image-upload.js';

const filterNone = document.querySelector('#effect-none');
const filterChrome = document.querySelector('#effect-chrome');
const filterSepia = document.querySelector('#effect-sepia');
const filterMarvin = document.querySelector('#effect-marvin');
const filterPhobos = document.querySelector('#effect-phobos');
const filterHeat = document.querySelector('#effect-heat');
const sliderField = document.querySelector('.effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

sliderField.style.display = 'none';

filterNone.addEventListener('click', () => {
  imagePreview.className = 'img-upload__preview';
  sliderField.style.display = 'none';
  imagePreview.style.filter = 'none';
  effectLevel.value = '';
  sliderElement.noUiSlider.destroy();
});

filterChrome.addEventListener('click', () => {
  imagePreview.classList.add('effects__preview--chrome');
  sliderField.style.display = 'block';

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  });

  sliderElement.noUiSlider.on('update', () => {
    effectLevel.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `grayscale(${  sliderElement.noUiSlider.get()  })`;
  });

});

filterSepia.addEventListener('click', () => {
  imagePreview.classList.add('effects__preview--sepia');
  sliderField.style.display = 'block';

  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1
  });

  sliderElement.noUiSlider.on('update', () => {
    effectLevel.value = sliderElement.noUiSlider.get();
    imagePreview.style.filter = `sepia(${  sliderElement.noUiSlider.get()  })`;
  });

});


// filter: grayscale(0..1)
