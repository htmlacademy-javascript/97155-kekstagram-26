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
// eslint-disable-next-line no-unused-vars
function checkStringLength(string, limit) {
  return string.length <= limit;
}

export { getRandomInt };
