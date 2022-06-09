// Возвращает рандомное число из указанного интервала включительно
function getRandomInt(min, max) {
  if (min > max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (min - max + 1)) + max;
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

getRandomInt(10, 10);
checkStringLength('Проверка длины строки', 21);
