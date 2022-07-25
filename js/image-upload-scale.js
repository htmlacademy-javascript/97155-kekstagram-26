const buttonMinus = document.querySelector('.scale__control--smaller');
const buttonPlus = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleStep = 25;
const minScale = 25;
const maxScale = 100;

buttonMinus.addEventListener('click', () => {
  buttonPlus.disabled = false;
  const currentScale = Number(scaleValue.value.replace(/%/, ''));

  if (currentScale === minScale + scaleStep) {
    buttonMinus.disabled = true;
  }

  scaleValue.value = `${  currentScale - scaleStep  }%`;
  imagePreview.style.transform = `scale(${  scaleValue.value  })`;
});

buttonPlus.addEventListener('click', () => {
  buttonMinus.disabled = false;
  const currentScale = Number(scaleValue.value.replace(/%/, ''));

  if (currentScale === maxScale - scaleStep) {
    buttonPlus.disabled = true;
  }

  scaleValue.value = `${  currentScale + scaleStep  }%`;
  imagePreview.style.transform = `scale(${  scaleValue.value  })`;
});


