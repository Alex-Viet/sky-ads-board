import { isToday } from 'date-fns';

export const formatDate = (date) => {
  const dateObj = new Date(date);
  dateObj.setHours(dateObj.getHours() + 3);

  const hours = dateObj.getHours();
  const min = dateObj.getMinutes();
  const fullMin = min < 10 ? `0${min}` : min;

  if (isNaN(dateObj)) {
    return '';
  } else {
    if (date.indexOf('T') === -1) {
      const localDate = dateObj
        .toLocaleString('ru', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
        .split(' ');

      return localDate[1] + ' ' + localDate[2];
    } else {
      if (isToday(dateObj)) {
        return `Сегодня в ${hours}:${fullMin}`;
      }

      return dateObj.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    }
  }
};
