const buttonMinus = document.querySelector('.scale__control--smaller');
const buttonPlus = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
buttonPlus.disabled = true;

buttonMinus.addEventListener('click', () => {
  buttonPlus.disabled = false;
  const currentScale = Number(scaleValue.value.replace(/%/, ''));

  if (currentScale === MIN_SCALE + SCALE_STEP) {
    buttonMinus.disabled = true;
  }

  scaleValue.value = `${  currentScale - SCALE_STEP  }%`;
  imagePreview.style.transform = `scale(${  scaleValue.value  })`;
});

buttonPlus.addEventListener('click', () => {
  buttonMinus.disabled = false;
  const currentScale = Number(scaleValue.value.replace(/%/, ''));

  if (currentScale === MAX_SCALE - SCALE_STEP) {
    buttonPlus.disabled = true;
  }

  scaleValue.value = `${  currentScale + SCALE_STEP  }%`;
  imagePreview.style.transform = `scale(${  scaleValue.value  })`;
});


