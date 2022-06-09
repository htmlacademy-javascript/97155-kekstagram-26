// Возвращает рандомное число из указанного интервала включительно
function getRandomInt(min, max) {
  if (min >= max) {
    return console.log('Минимальное значение не может быть больше или равно максимальному');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Проверяет умещается ли строка в указанный лимит символов
function checkStringLength(string, limit) {
  if (string.length > limit) {
    return false;
  }
  return true;
}

console.log(getRandomInt(1, 10));
console.log(checkStringLength('Проверка длины строки', 21));
