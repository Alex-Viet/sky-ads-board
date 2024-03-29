const declOfNum = (n, text_arr) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return text_arr[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text_arr[1];
  }
  if (n1 == 1) {
    return text_arr[0];
  }

  return text_arr[2];
};

export const declOfWord = (num) => {
  return declOfNum(num, ['отзыв', 'отзыва', 'отзывов']);
};
