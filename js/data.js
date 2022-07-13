import { getRandomInt } from './util.js';

const PHOTO_DESCRIPTIONS_COUNT = 25;

// создаем массив для id описаний
const DESCRIPTION_IDS = [];
for (let i = 1; i <= 25; i++) {
  DESCRIPTION_IDS.push(i);
}

// создаем массив для url картинок
const PHOTO_URLS = [];
for (let i = 1; i <= 25; i++) {
  PHOTO_URLS.push(`photos/${  i  }.jpg`);
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

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENT_AUTHOR_NAMES = [
  'Илья',
  'Сергей',
  'Ирина',
  'Артем',
  'Михаил',
  'Ольга',
  'Кирилл',
  'Екатерина'
];

// возвращает случайный элемент из переданного массива и удаляет этот элемент
const getRandomArrayElement = (elements) => {
  const currentElement = elements[getRandomInt(0, elements.length - 1)];
  const elementIndex = elements.indexOf(currentElement);
  elements.splice(elementIndex, 1);
  return currentElement;
};

// создает объект комментария
const createPhotoComment = () => ({
  id: getRandomInt(1, 500),
  avatar: `img/avatar-${  getRandomInt(1, 6)  }.svg`,
  message: COMMENT_MESSAGES[getRandomInt(0, COMMENT_MESSAGES.length - 1)],
  name: COMMENT_AUTHOR_NAMES[getRandomInt(0, COMMENT_AUTHOR_NAMES.length - 1)],
});

// создает объект описания к фото
const createPhotoDescription = () => ({
  id: getRandomArrayElement(DESCRIPTION_IDS),
  url: getRandomArrayElement(PHOTO_URLS),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInt(15, 200),
  comments: Array.from({length: 2}, createPhotoComment)
});

const creatPhotoDescriptions = () => Array.from({length: PHOTO_DESCRIPTIONS_COUNT}, createPhotoDescription);

export { creatPhotoDescriptions };
