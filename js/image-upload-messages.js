const getSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content;
  const successMessageElement = successMessageTemplate.cloneNode(true);
  const body = document.querySelector('body');
  const successButtonElement = successMessageElement.querySelector('.success__button');
  body.appendChild(successMessageElement);

  const closeUploadMessage = () => {
    const successSectionElement = document.querySelector('.success');
    body.removeChild(successSectionElement);
  };

  // закрываем модалку по нажатию Esc
  const onKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeUploadMessage();
      document.removeEventListener('keydown', onKeydown);
    }
  };

  successButtonElement.addEventListener('click', () => {
    closeUploadMessage();
  });

  document.addEventListener('click', (evt) => {
    const successSectionElement = document.querySelector('.success');
    if (evt.target === successSectionElement) {
      closeUploadMessage();
    }
  });

  document.addEventListener('keydown', onKeydown);

};

export {  getSuccessMessage  };
