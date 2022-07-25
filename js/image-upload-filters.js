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
const effectsList = document.querySelector('.effects__list');

// скрываем слайдер по умолчанию
sliderField.style.display = 'none';

// создаем экземпляр слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1
});

// записываем значения слайдера при изменении
sliderElement.noUiSlider.on('update', () => {
  effectLevel.value = sliderElement.noUiSlider.get();
});

// в зависимости от того, какой фильтр будет выбран, обновляем настройки слайдера
effectsList.addEventListener('change', () => {

  if (filterNone.checked) {
    imagePreview.className = 'img-upload__preview';
    sliderField.style.display = 'none';
    imagePreview.style.filter = 'none';
    effectLevel.value = '';
  }

  if (filterChrome.checked) {
    imagePreview.classList.add('effects__preview--chrome');
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `grayscale(${  sliderElement.noUiSlider.get()  })`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    });
  }

  if (filterSepia.checked) {
    imagePreview.classList.add('effects__preview--sepia');
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `sepia(${  sliderElement.noUiSlider.get()  })`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    });
  }

  if (filterMarvin.checked) {
    imagePreview.classList.add('effects__preview--marvin');
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `invert(${  sliderElement.noUiSlider.get()  }%)`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    });
  }

  if (filterPhobos.checked) {
    imagePreview.classList.add('effects__preview--fobos');
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `blur(${  sliderElement.noUiSlider.get()  }px)`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1
    });
  }

  if (filterHeat.checked) {
    imagePreview.classList.add('effects__preview--heat');
    sliderField.style.display = 'block';
    sliderElement.noUiSlider.on('update', () => {
      imagePreview.style.filter = `brightness(${  sliderElement.noUiSlider.get()  })`;
    });
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1
    });
  }
});
