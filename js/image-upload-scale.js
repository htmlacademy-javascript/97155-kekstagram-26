const buttonMinus = document.querySelector('.scale__control--smaller');
const buttonPlus = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleStep = 25;


buttonMinus.addEventListener('click', () => {
  buttonPlus.disabled = false;
  const currentScale = Number(scaleValue.value.replace(/%/, ''));

  if (currentScale === 50) {
    buttonMinus.disabled = true;
  }

  scaleValue.value = `${  currentScale - scaleStep  }%`;
  imagePreview.style.transform = `scale(${  scaleValue.value  })`;
});

buttonPlus.addEventListener('click', () => {
  buttonMinus.disabled = false;
  const currentScale = Number(scaleValue.value.replace(/%/, ''));

  if (currentScale === 75) {
    buttonPlus.disabled = true;
  }

  scaleValue.value = `${  currentScale + scaleStep  }%`;
  imagePreview.style.transform = `scale(${  scaleValue.value  })`;
});


