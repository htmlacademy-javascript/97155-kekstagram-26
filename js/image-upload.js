const imageUploadForm = document.querySelector('.img-upload__form');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadInput = document.querySelector('.img-upload__input');
const body = document.querySelector('body');
const uploadModalCloseButton = document.querySelector('.img-upload__cancel');
const uploadModalHashteg = document.querySelector('.text__hashtags');
const uploadModalDescription = document.querySelector('.text__description');

// открываем модалку редактирования изображения
uploadInput.addEventListener('change', () => {
  uploadModal.classList.remove('hidden');
  body.classList.add('modal-open');
});

// закрывает модалку, очищает поля формы
const closeUploadModal = () => {
  uploadModalHashteg.value = '';
  uploadModalDescription.value = '';
  uploadInput.value = '';
  uploadModal.classList.add('hidden');
  body.classList.remove('modal-open');
};

// закрываем модалку редактирования изображения по клику на крестик
uploadModalCloseButton.addEventListener('click', () => {
  closeUploadModal();
});

// закрываем модалку редактирования изображения по нажатию Esc
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    closeUploadModal();
  }
});

// не закрываем модлаку по Esc если фокус на инпуте ввода хештега
uploadModalHashteg.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

// не закрываем модлаку по Esc если фокус на поле ввода комментария
uploadModalDescription.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

// создаем экземпляр валидатора и передаем форму
const pristine = new Pristine(imageUploadForm, {
  classTo: 'upload-image-form__element',
  errorTextParent: 'upload-image-form__element',
  errorTextClass: 'upload-image-form__error-text',
}, false);

// если что то было указано в инпуте хештегов, добавляем валидаторы
uploadModalHashteg.addEventListener('change', () => {

  // добавляем валидатор хештегов на соотвествие формату
  pristine.addValidator(uploadModalHashteg, (value) => {
    const hashtegsArray = value.split(' ');
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

    for (let i = 0; i < hashtegsArray.length; i++) {
      if (!re.test(hashtegsArray[i])) {
        return false;
      }
    } return true;
  }, 'Не верный формат хештега', 2, false);

  // добавляем валидатор на количество хештегов
  pristine.addValidator(uploadModalHashteg, (value) => {
    const hashtegsArray = value.split(' ');

    if (hashtegsArray.length > 5) {
      return false;
    }
    return true;
  }, 'Максимум 5 хештегов', 2, false);

  // добавляем валидатор уникальности хештегов
  pristine.addValidator(uploadModalHashteg, (value) => {
    const hashtegsArray = value.split(' ');
    const repeatedTegs = [];

    hashtegsArray.forEach ((element, index) => {
      for (let i = index + 1; i < hashtegsArray.length; i++) {
        if (element.toLowerCase() === hashtegsArray[i].toLowerCase()) {
          repeatedTegs[index] = element;
        }
      }
    });

    if (repeatedTegs.length > 0) {
      return false;
    }
    return true;
  }, 'Все хештеги должны быть уникальными', 2, false);
});

// отключаем отправку формы по умолчанию и включаем отправку, если пройдена валидация
imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    imageUploadForm.submit();
  }
});
