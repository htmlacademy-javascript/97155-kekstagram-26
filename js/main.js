// Возвращает рандомное число из указанного интервала включительно
function getRandomInt(min, max) {
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверяет умещается ли строка в указанный лимит символов
function checkStringLength(string, limit) {
  return string.length <= limit;
}

getRandomInt(10, 1);
checkStringLength('Проверка длины строки', 21);

const PHOTO_DESCRIPTIONS_COUNT = 25;

// создаем массив для id описаний
const DESCRIPTION_IDS = [];
for (let i = 1; i <= 25; i++) {
  DESCRIPTION_IDS.push(i);
}

// создаем массив для url картинок
const PHOTO_URLS = [];
for (let i = 1; i <= 25; i++) {
  PHOTO_URLS.push('photos/' + i + '.jpg');
}

const DESCRIPTIONS = [
  'Пустынный пляж',
  'Указатель направления',
  'Бухта',
  'Девушка',
  'Веселый перекус',
  'Чёрная машина',
  'Ягодка',
  'Стаканы с морсом',
  'Самолёт',
  'Хранени обуви',
  'Заборы',
  'Ауди',
  'Салат',
  'Котосуши',
  'Модные ботинки',
  'Небо',
  'Оркестр',
  'Автоклассика',
  'Тапочки',
  'Пальмы',
  'Салат с лимоном',
  'Закат',
  'Краб',
  'Концерт',
  'Трофи'
];

// возвращает случайный элемент из переданного массива и удаляет этот элемент
const getRandomArrayElement = (elements) => {
  let currentElement = elements[getRandomInt(0, elements.length - 1)];
  let elementIndex = elements.indexOf(currentElement);
  elements.splice(elementIndex, 1);
  return currentElement;
};

const createPhotoComment = () => {
  return {
    id: getRandomInt(1, 500),
    avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
    message: getRandomArrayElement(DESCRIPTIONS),
    name: getRandomInt(15, 200),
  };
}

const createPhotoDescription = () => {
  return {
    id: getRandomArrayElement(DESCRIPTION_IDS),
    url: getRandomArrayElement(PHOTO_URLS),
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
  };
}

const PHOTO_DESCRIPTIONS = Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);
console.log(PHOTO_DESCRIPTIONS);
// const PHOTO_DESCRIPTIONS = [
//   {
//     id: 0,
//     url: '',
//     description: '',
//     likes: 0,
//     comments: [
//       {
//         id: 0,
//         avatar: '',
//         message: '',
//         name: ''
//       }
//     ]
//   }
// ]
